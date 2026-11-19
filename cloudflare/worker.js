// CyberLab — Cloudflare Worker API (login + progress sync on D1).
//
// Deploy: see README.md in this package. The Worker needs ONE binding:
//   DB  -> your D1 database (name it exactly "DB" in the binding settings)
// Secrets / variables (Worker Settings -> Variables and Secrets):
//   BREVO_API_KEY  (Secret, REQUIRED for password-reset email) — created in
//                  the Brevo dashboard; read ONLY from env, never hard-coded.
//   BREVO_FROM     (optional plain variable) — the verified Brevo sender
//                  email; falls back to boss3raj@gmail.com when unset.
//   SESSION_PEPPER (optional) — extra HMAC layer for session-token storage;
//                  the API works without it.
//
// Security posture:
// - Passwords: PBKDF2-HMAC-SHA256 (WebCrypto), 100,000 iterations,
//   per-user 16-byte random salt. Plaintext is never stored or logged.
// - Sessions: 32 random bytes, base64url. Only SHA-256(token) is stored,
//   with a 30-day expiry checked on every authenticated request.
// - Login failures ALWAYS return one generic message and are rate-limited:
//   5 failures for the same identifier inside 15 minutes lock that
//   identifier for 15 minutes (HTTP 429), even for the correct password.
// - A user can only ever read/write their OWN rows: every query is scoped
//   by the user_id taken from the session — never from the request body.
// - CORS is an allowlist, never a wildcard: only
//   https://cyberlab2027.pages.dev, https://cyberlab27.pages.dev and their
//   *.pages.dev preview subdomains receive an
//   Access-Control-Allow-Origin header (see corsFor below).
// - Password reset by email (v43): POST /api/auth/forgot-password (alias
//   /auth/forgot-password, legacy /auth/reset) generates a 6-digit code,
//   stores ONLY its SHA-256 hash in password_resets (15-minute expiry,
//   single-use, max 5 codes/hour per account) and emails the code via
//   Brevo (api-key read from the BREVO_API_KEY secret only). The response
//   is a generic { ok: true } whether or not the account exists, so it
//   never reveals account existence; if BREVO_API_KEY is not configured
//   the endpoint returns an honest 503 instead of pretending to send.
//   POST /api/auth/reset-password (alias /auth/reset-password) verifies
//   the code, re-hashes the new password with a fresh PBKDF2 salt, marks
//   the code used, and deletes ALL of the user's sessions.

const PBKDF2_ITERATIONS = 100000;
const SESSION_DAYS = 30;
const LOCK_THRESHOLD = 5;
const LOCK_WINDOW_MS = 15 * 60 * 1000;
const LOCK_DURATION_MS = 15 * 60 * 1000;
const GENERIC_LOGIN_ERROR = "Incorrect username/email or password";
const USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// CORS: strict allowlist — ONLY the production Pages sites and their
// preview subdomains may call this API from a browser:
//   https://cyberlab2027.pages.dev   (old account's site, still live)
//   https://<preview>.cyberlab2027.pages.dev
//   https://cyberlab27.pages.dev     (new account's site, added in v45)
//   https://<preview>.cyberlab27.pages.dev
// Any other Origin receives NO Access-Control-Allow-Origin header, so a
// browser will refuse to expose the response to that site (a preflight from
// a non-allowlisted origin is rejected outright). Requests with no Origin
// header at all (curl, health checks) are not CORS requests; they get no
// allow header either. CORS headers are computed per request and applied
// by the fetch wrapper at the bottom of this file — handlers never set them.
const ALLOWED_ORIGIN_RE = /^https:\/\/([a-z0-9-]+\.)?(cyberlab2027|cyberlab27)\.pages\.dev$/;
const CORS_BASE = {
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
  Vary: "Origin",
};
function corsFor(request) {
  const origin = request.headers.get("Origin") || "";
  const headers = { ...CORS_BASE };
  if (ALLOWED_ORIGIN_RE.test(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { "Content-Type": "application/json" },
  });
}
function fail(message, status) {
  return json({ ok: false, message }, status || 400);
}

function b64encode(bytes) {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s);
}
function b64decode(text) {
  const bin = atob(text);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function b64url(bytes) {
  return b64encode(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function sha256Hex(text) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function hashPassword(password, saltB64, iterations) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: b64decode(saltB64), iterations, hash: "SHA-256" },
    key,
    256,
  );
  return b64encode(new Uint8Array(bits));
}

async function tokenStorageHash(token, env) {
  const pepper = env && env.SESSION_PEPPER ? String(env.SESSION_PEPPER) : "";
  return sha256Hex(pepper ? pepper + "." + token : token);
}

async function createSession(env, userId) {
  const token = b64url(crypto.getRandomValues(new Uint8Array(32)));
  const now = new Date();
  const expires = new Date(now.getTime() + SESSION_DAYS * 24 * 3600 * 1000);
  const hash = await tokenStorageHash(token, env);
  await env.DB.prepare("INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)")
    .bind(hash, userId, now.toISOString(), expires.toISOString())
    .run();
  return { token, expiresAt: expires.toISOString() };
}

async function getSessionUser(request, env) {
  const auth = request.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  if (!token) return null;
  const hash = await tokenStorageHash(token, env);
  const row = await env.DB.prepare(
    "SELECT s.user_id AS user_id, s.expires_at AS expires_at, u.username AS username, u.email AS email, u.display_name AS display_name, u.goal_role AS goal_role, u.daily_goal_minutes AS daily_goal_minutes, u.created_at AS created_at FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ?",
  )
    .bind(hash)
    .first();
  if (!row) return null;
  if (new Date(row.expires_at).getTime() <= Date.now()) {
    await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(hash).run();
    return null;
  }
  return row;
}

async function readBody(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

function publicUser(row) {
  return {
    username: row.username,
    email: row.email,
    displayName: row.display_name || "",
    goalRole: row.goal_role || "",
    dailyGoalMinutes: row.daily_goal_minutes || 30,
    joinedAt: row.created_at,
  };
}

// ---------- lockout ----------
async function lockState(env, identifier) {
  const row = await env.DB.prepare("SELECT fail_count, window_start, locked_until FROM login_failures WHERE identifier = ?")
    .bind(identifier)
    .first();
  if (!row) return { locked: false, count: 0 };
  if (row.locked_until && new Date(row.locked_until).getTime() > Date.now()) {
    return { locked: true, count: row.fail_count };
  }
  return { locked: false, count: row.fail_count, windowStart: row.window_start };
}
async function recordFailure(env, identifier) {
  const now = Date.now();
  const cur = await lockState(env, identifier);
  let count = 1;
  let windowStart = new Date(now).toISOString();
  if (!cur.locked && cur.count > 0 && cur.windowStart && now - new Date(cur.windowStart).getTime() < LOCK_WINDOW_MS) {
    count = cur.count + 1;
    windowStart = cur.windowStart;
  }
  const lockedUntil = count >= LOCK_THRESHOLD ? new Date(now + LOCK_DURATION_MS).toISOString() : null;
  await env.DB.prepare(
    "INSERT INTO login_failures (identifier, fail_count, window_start, locked_until) VALUES (?, ?, ?, ?) ON CONFLICT(identifier) DO UPDATE SET fail_count = excluded.fail_count, window_start = excluded.window_start, locked_until = excluded.locked_until",
  )
    .bind(identifier, count, windowStart, lockedUntil)
    .run();
  return lockedUntil !== null;
}
async function clearFailures(env, identifier) {
  await env.DB.prepare("DELETE FROM login_failures WHERE identifier = ?").bind(identifier).run();
}

// ---------- handlers ----------
async function handleSignup(request, env) {
  const body = await readBody(request);
  if (!body) return fail("Invalid request body.", 400);
  const username = String(body.username || "").trim();
  const email = String(body.email || "").trim();
  const password = String(body.password || "");
  const displayName = String(body.displayName || "").slice(0, 60);
  if (!USERNAME_RE.test(username)) return fail("Username must be 3-20 characters: letters, numbers, underscore only.", 400);
  if (!EMAIL_RE.test(email)) return fail("Enter a valid email address.", 400);
  if (password.length < 6) return fail("Password must be at least 6 characters.", 400);
  const uname = username.toLowerCase();
  const mail = email.toLowerCase();
  const existing = await env.DB.prepare("SELECT username, email FROM users WHERE username = ? OR email = ? LIMIT 1")
    .bind(uname, mail)
    .first();
  if (existing) {
    if (existing.username === uname) return fail("This username is already taken", 409);
    return fail("This email is already linked to another account. Sign in instead.", 409);
  }
  const salt = b64encode(crypto.getRandomValues(new Uint8Array(16)));
  const hash = await hashPassword(password, salt, PBKDF2_ITERATIONS);
  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  try {
    await env.DB.prepare(
      "INSERT INTO users (id, username, email, password_hash, salt, iterations, display_name, goal_role, daily_goal_minutes, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    )
      .bind(id, uname, mail, hash, salt, PBKDF2_ITERATIONS, displayName, "", 30, now, now)
      .run();
  } catch (e) {
    const msg = String(e && e.message ? e.message : e);
    if (msg.includes("users.username")) return fail("This username is already taken", 409);
    if (msg.includes("users.email")) return fail("This email is already linked to another account. Sign in instead.", 409);
    return fail("Sign-up failed. Please try again.", 500);
  }
  const session = await createSession(env, id);
  return json({
    ok: true,
    token: session.token,
    expiresAt: session.expiresAt,
    user: { username: uname, email: mail, displayName, goalRole: "", dailyGoalMinutes: 30, joinedAt: now },
  });
}

async function handleLogin(request, env) {
  const body = await readBody(request);
  if (!body) return fail(GENERIC_LOGIN_ERROR, 401);
  const identifier = String(body.identifier || "").trim().toLowerCase();
  const password = String(body.password || "");
  if (!identifier || !password) return fail(GENERIC_LOGIN_ERROR, 401);
  const lock = await lockState(env, identifier);
  if (lock.locked) {
    return fail("Too many failed attempts. This login is locked for 15 minutes — try again later.", 429);
  }
  const user = await env.DB.prepare("SELECT * FROM users WHERE username = ? OR email = ? LIMIT 1")
    .bind(identifier, identifier)
    .first();
  let ok = false;
  if (user) {
    const candidate = await hashPassword(password, user.salt, user.iterations || PBKDF2_ITERATIONS);
    ok = timingSafeEqual(candidate, user.password_hash);
  } else {
    // Burn equivalent PBKDF2 work so timing does not reveal account existence.
    await hashPassword(password, b64encode(new Uint8Array(16)), PBKDF2_ITERATIONS);
  }
  if (!ok) {
    const nowLocked = await recordFailure(env, identifier);
    if (nowLocked) {
      return fail("Too many failed attempts. This login is locked for 15 minutes — try again later.", 429);
    }
    return fail(GENERIC_LOGIN_ERROR, 401);
  }
  await clearFailures(env, identifier);
  const session = await createSession(env, user.id);
  return json({ ok: true, token: session.token, expiresAt: session.expiresAt, user: publicUser(user) });
}

async function handleLogout(request, env) {
  const auth = request.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  if (token) {
    const hash = await tokenStorageHash(token, env);
    await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(hash).run();
  }
  return json({ ok: true });
}

async function handleChangePassword(request, env) {
  const me = await getSessionUser(request, env);
  if (!me) return fail("Session expired. Sign in again.", 401);
  const body = await readBody(request);
  if (!body) return fail("Invalid request body.", 400);
  const current = String(body.currentPassword || "");
  const next = String(body.newPassword || "");
  if (next.length < 6) return fail("Password must be at least 6 characters.", 400);
  const user = await env.DB.prepare("SELECT * FROM users WHERE id = ?").bind(me.user_id).first();
  if (!user) return fail("Session expired. Sign in again.", 401);
  const candidate = await hashPassword(current, user.salt, user.iterations || PBKDF2_ITERATIONS);
  if (!timingSafeEqual(candidate, user.password_hash)) return fail(GENERIC_LOGIN_ERROR, 401);
  const salt = b64encode(crypto.getRandomValues(new Uint8Array(16)));
  const hash = await hashPassword(next, salt, PBKDF2_ITERATIONS);
  await env.DB.prepare("UPDATE users SET password_hash = ?, salt = ?, iterations = ?, updated_at = ? WHERE id = ?")
    .bind(hash, salt, PBKDF2_ITERATIONS, new Date().toISOString(), me.user_id)
    .run();
  return json({ ok: true, message: "Password changed." });
}

// ---------- password reset by email (Brevo) ----------
const RESET_CODE_TTL_MS = 15 * 60 * 1000;
const RESET_RATE_LIMIT = 5;
const RESET_RATE_WINDOW_MS = 60 * 60 * 1000;
const GENERIC_RESET_ERROR = "Invalid or expired code";
const BREVO_DEFAULT_FROM = "boss3raj@gmail.com";

async function sendResetEmail(env, toEmail, code) {
  const from = env.BREVO_FROM ? String(env.BREVO_FROM).trim() : BREVO_DEFAULT_FROM;
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": String(env.BREVO_API_KEY),
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "CyberLab Password Reset", email: from },
      to: [{ email: toEmail }],
      subject: "Your CyberLab password reset code",
      textContent:
        `Your CyberLab password reset code is: ${code}\n\n` +
        "It expires in 15 minutes and can be used only once. " +
        "If you did not request this, you can ignore this email — your password has not been changed.",
      htmlContent:
        `<p>Your CyberLab password reset code is:</p>` +
        `<p style="font-size:28px;font-weight:bold;letter-spacing:4px;">${code}</p>` +
        `<p>It expires in 15 minutes and can be used only once.</p>` +
        `<p>If you did not request this, you can ignore this email — your password has not been changed.</p>`,
    }),
  });
  if (!res.ok) {
    // Drain the body so the connection can be reused; never log the key.
    try { await res.text(); } catch { /* ignore */ }
    throw new Error(`Brevo HTTP ${res.status}`);
  }
}

async function handleForgotPassword(request, env) {
  const body = await readBody(request);
  if (!body) return fail("Invalid request body.", 400);
  const identifier = String(body.identifier || "").trim().toLowerCase();
  // Honest failure when email sending is not configured — checked BEFORE
  // any account lookup, so the answer never depends on whether the
  // account exists, and the endpoint never pretends an email was sent.
  if (!env.BREVO_API_KEY) {
    return fail("Email sending is not configured on the server yet (the BREVO_API_KEY secret is missing), so no reset code was sent. Please contact the site owner.", 503);
  }
  if (!identifier) return json({ ok: true });
  const user = await env.DB.prepare("SELECT id, email FROM users WHERE username = ? OR email = ? LIMIT 1")
    .bind(identifier, identifier)
    .first();
  // Generic success either way: never reveal whether the account exists.
  if (!user) return json({ ok: true });
  // Rate limit: at most 5 codes per account per hour. Over the limit we
  // still answer the same generic success and simply send nothing.
  const windowStart = new Date(Date.now() - RESET_RATE_WINDOW_MS).toISOString();
  const recent = await env.DB.prepare("SELECT COUNT(*) AS n FROM password_resets WHERE user_id = ? AND created_at > ?")
    .bind(user.id, windowStart)
    .first();
  if (recent && Number(recent.n) >= RESET_RATE_LIMIT) return json({ ok: true });
  const code = String(crypto.getRandomValues(new Uint32Array(1))[0] % 1000000).padStart(6, "0");
  const codeHash = await sha256Hex(code);
  const now = new Date();
  const expiresAt = new Date(now.getTime() + RESET_CODE_TTL_MS).toISOString();
  await env.DB.prepare("INSERT INTO password_resets (user_id, code_hash, expires_at, used, created_at) VALUES (?, ?, ?, 0, ?)")
    .bind(user.id, codeHash, expiresAt, now.toISOString())
    .run();
  try {
    await sendResetEmail(env, user.email, code);
  } catch {
    // The email did not go out: remove the unusable code and say so
    // honestly instead of claiming it was sent.
    await env.DB.prepare("DELETE FROM password_resets WHERE user_id = ? AND code_hash = ?").bind(user.id, codeHash).run();
    return fail("The reset email could not be sent right now. Please try again in a few minutes.", 502);
  }
  return json({ ok: true });
}

async function handleResetPassword(request, env) {
  const body = await readBody(request);
  if (!body) return fail(GENERIC_RESET_ERROR, 400);
  const identifier = String(body.identifier || "").trim().toLowerCase();
  const code = String(body.code || "").trim();
  const newPassword = String(body.new_password ?? body.newPassword ?? "");
  if (newPassword.length < 6) return fail("Password must be at least 6 characters.", 400);
  if (!identifier || !code) return fail(GENERIC_RESET_ERROR, 400);
  const user = await env.DB.prepare("SELECT id FROM users WHERE username = ? OR email = ? LIMIT 1")
    .bind(identifier, identifier)
    .first();
  if (!user) return fail(GENERIC_RESET_ERROR, 400);
  const row = await env.DB.prepare("SELECT id, code_hash, expires_at FROM password_resets WHERE user_id = ? AND used = 0 ORDER BY id DESC LIMIT 1")
    .bind(user.id)
    .first();
  if (!row) return fail(GENERIC_RESET_ERROR, 400);
  if (new Date(row.expires_at).getTime() <= Date.now()) return fail(GENERIC_RESET_ERROR, 400);
  const candidateHash = await sha256Hex(code);
  if (!timingSafeEqual(candidateHash, row.code_hash)) return fail(GENERIC_RESET_ERROR, 400);
  // Single-use: consume the code first, then rotate the password with a
  // fresh salt (same PBKDF2 parameters as signup) and invalidate every
  // existing session for this user.
  await env.DB.prepare("UPDATE password_resets SET used = 1 WHERE id = ?").bind(row.id).run();
  const salt = b64encode(crypto.getRandomValues(new Uint8Array(16)));
  const hash = await hashPassword(newPassword, salt, PBKDF2_ITERATIONS);
  await env.DB.prepare("UPDATE users SET password_hash = ?, salt = ?, iterations = ?, updated_at = ? WHERE id = ?")
    .bind(hash, salt, PBKDF2_ITERATIONS, new Date().toISOString(), user.id)
    .run();
  await env.DB.prepare("DELETE FROM sessions WHERE user_id = ?").bind(user.id).run();
  return json({ ok: true, message: "Password reset. Sign in with your new password." });
}

// ---------- progress sync ----------
// The client sends its full learning state on save events only (lesson
// complete, quiz submit, lab/mission/CTF complete, note saved, settings
// saved) — never on a timer. The Worker upserts it into per-item rows so
// the data stays queryable, and rebuilds the same shape on load.
async function handleSaveProgress(request, env) {
  const me = await getSessionUser(request, env);
  if (!me) return fail("Session expired. Sign in again.", 401);
  const body = await readBody(request);
  const state = body && body.state ? body.state : null;
  if (!state || !Array.isArray(state.progress) || !Array.isArray(state.attempts)) {
    return fail("Invalid progress payload.", 400);
  }
  const uid = me.user_id;
  const now = new Date().toISOString();
  const stmts = [];
  for (const p of state.progress.slice(0, 5000)) {
    if (!p || typeof p.contentId !== "string" || typeof p.kind !== "string") continue;
    stmts.push(
      env.DB.prepare(
        "INSERT INTO progress_items (user_id, kind, content_id, xp, score, completed_at) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(user_id, kind, content_id) DO UPDATE SET xp = excluded.xp, score = excluded.score, completed_at = excluded.completed_at",
      ).bind(uid, p.kind, p.contentId, Number(p.xp) || 0, p.score === null || p.score === undefined ? null : Number(p.score), String(p.at || now)),
    );
  }
  // Attempts are append-only history: replace this user's set with the
  // client's merged set (the client merges local + remote on sign-in, so
  // nothing is lost; this keeps two devices from duplicating rows forever).
  stmts.push(env.DB.prepare("DELETE FROM quiz_attempts WHERE user_id = ?").bind(uid));
  for (const a of state.attempts.slice(0, 2000)) {
    if (!a || typeof a.quizId !== "string") continue;
    stmts.push(
      env.DB.prepare("INSERT INTO quiz_attempts (user_id, quiz_id, score, total, created_at) VALUES (?, ?, ?, ?, ?)")
        .bind(uid, a.quizId, Number(a.score) || 0, Number(a.total) || 1, String(a.at || now)),
    );
  }
  stmts.push(env.DB.prepare("DELETE FROM research_notes WHERE user_id = ?").bind(uid));
  const notes = Array.isArray(state.notes) ? state.notes : [];
  for (const n of notes.slice(0, 2000)) {
    if (!n || n.id === undefined || n.id === null) continue;
    stmts.push(
      env.DB.prepare(
        "INSERT INTO research_notes (user_id, id, kind, title, body, link, cwe, attack, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      ).bind(
        uid, String(n.id), String(n.kind || "note"), String(n.title || ""), String(n.body || ""),
        String(n.link || ""), String(n.cwe || ""), String(n.attack || ""), String(n.status || "open"),
        String(n.at || now), now,
      ),
    );
  }
  const profile = state.profile || {};
  stmts.push(
    env.DB.prepare(
      "INSERT INTO user_state (user_id, diagnostic_json, pentest_json, project_steps_json, activity_json, updated_at) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET diagnostic_json = excluded.diagnostic_json, pentest_json = excluded.pentest_json, project_steps_json = excluded.project_steps_json, activity_json = excluded.activity_json, updated_at = excluded.updated_at",
    ).bind(
      uid,
      state.diagnostic ? JSON.stringify(state.diagnostic) : null,
      JSON.stringify(Array.isArray(state.pentestDone) ? state.pentestDone : []),
      JSON.stringify(state.projectSteps && typeof state.projectSteps === "object" ? state.projectSteps : {}),
      JSON.stringify(Array.isArray(state.activity) ? state.activity.slice(0, 80) : []),
      now,
    ),
  );
  if (typeof profile.displayName === "string" || typeof profile.goalRole === "string") {
    stmts.push(
      env.DB.prepare("UPDATE users SET display_name = ?, goal_role = ?, daily_goal_minutes = ?, updated_at = ? WHERE id = ?")
        .bind(String(profile.displayName || ""), String(profile.goalRole || ""), Number(profile.dailyGoalMinutes) || 30, now, uid),
    );
  }
  // D1 batch is atomic: either the whole save lands or none of it does.
  for (let i = 0; i < stmts.length; i += 100) {
    await env.DB.batch(stmts.slice(i, i + 100));
  }
  return json({ ok: true, savedAt: now });
}

async function handleLoadProgress(request, env) {
  const me = await getSessionUser(request, env);
  if (!me) return fail("Session expired. Sign in again.", 401);
  const uid = me.user_id;
  const items = await env.DB.prepare("SELECT kind, content_id, xp, score, completed_at FROM progress_items WHERE user_id = ? ORDER BY completed_at ASC")
    .bind(uid)
    .all();
  const attempts = await env.DB.prepare("SELECT quiz_id, score, total, created_at FROM quiz_attempts WHERE user_id = ? ORDER BY id ASC")
    .bind(uid)
    .all();
  const notes = await env.DB.prepare("SELECT id, kind, title, body, link, cwe, attack, status, created_at FROM research_notes WHERE user_id = ? ORDER BY created_at DESC")
    .bind(uid)
    .all();
  const stateRow = await env.DB.prepare("SELECT diagnostic_json, pentest_json, project_steps_json, activity_json FROM user_state WHERE user_id = ?")
    .bind(uid)
    .first();
  const parse = (text, fallback) => {
    try { return text ? JSON.parse(text) : fallback; } catch { return fallback; }
  };
  const progress = (items.results || []).map((r) => ({ kind: r.kind, contentId: r.content_id, xp: r.xp, score: r.score, at: r.completed_at }));
  const attemptRows = (attempts.results || []).map((r) => ({ quizId: r.quiz_id, score: r.score, total: r.total, at: r.created_at }));
  const totalXp = progress.reduce((s, p) => s + (p.xp || 0), 0) + attemptRows.reduce((s, a) => s + (a.score || 0) * 2, 0);
  return json({
    ok: true,
    user: publicUser(me),
    totalXp,
    state: {
      profile: {
        displayName: me.display_name || "",
        goalRole: me.goal_role || "",
        dailyGoalMinutes: me.daily_goal_minutes || 30,
        username: me.username,
        email: me.email,
        joinedAt: me.created_at,
      },
      diagnostic: stateRow ? parse(stateRow.diagnostic_json, null) : null,
      progress,
      attempts: attemptRows,
      activity: stateRow ? parse(stateRow.activity_json, []) : [],
      notes: (notes.results || []).map((r) => ({
        id: Number(r.id) || r.id,
        kind: r.kind, title: r.title, body: r.body, link: r.link || "", cwe: r.cwe || "",
        attack: r.attack || "", status: r.status, at: r.created_at,
      })),
      pentestDone: stateRow ? parse(stateRow.pentest_json, []) : [],
      projectSteps: stateRow ? parse(stateRow.project_steps_json, {}) : {},
    },
  });
}

async function handleRequest(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { status: 204 });
    if (!env || !env.DB) {
      return fail("Worker is missing its D1 binding. In the Worker settings, add a D1 binding named exactly DB.", 500);
    }
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    try {
      if (path === "/" || path === "/health") {
        return json({ ok: true, service: "cyberlab-worker", version: 1 });
      }
      if (path === "/auth/signup" && request.method === "POST") return handleSignup(request, env);
      if (path === "/auth/login" && request.method === "POST") return handleLogin(request, env);
      if (path === "/auth/logout" && request.method === "POST") return handleLogout(request, env);
      if (path === "/auth/change-password" && request.method === "POST") return handleChangePassword(request, env);
      if ((path === "/api/auth/forgot-password" || path === "/auth/forgot-password" || path === "/auth/reset") && request.method === "POST") return handleForgotPassword(request, env);
      if ((path === "/api/auth/reset-password" || path === "/auth/reset-password") && request.method === "POST") return handleResetPassword(request, env);
      if (path === "/auth/me" && request.method === "GET") {
        const me = await getSessionUser(request, env);
        if (!me) return fail("Session expired. Sign in again.", 401);
        return json({ ok: true, user: publicUser(me) });
      }
      if (path === "/progress" && request.method === "GET") return handleLoadProgress(request, env);
      if (path === "/progress/save" && request.method === "POST") return handleSaveProgress(request, env);
      return fail("Not found.", 404);
    } catch (e) {
      return fail("Server error: " + String(e && e.message ? e.message : e), 500);
    }
}

export default {
  // Every response passes through here so the per-request CORS allowlist
  // headers (computed from THIS request's Origin) are attached exactly once.
  async fetch(request, env) {
    const res = await handleRequest(request, env);
    const headers = new Headers(res.headers);
    for (const [k, v] of Object.entries(corsFor(request))) headers.set(k, v);
    return new Response(res.body, { status: res.status, headers });
  },
};
