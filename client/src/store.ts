// CyberLab client store — account-first, Cloudflare-synced.
// The app opens on a sign-in / create-account screen; there is no Dashboard
// without an account. Learner state is ALSO kept in localStorage so the app
// never loses work mid-session, and every save event pushes the full state
// to the signed-in account on the Cloudflare Worker + D1 (see
// cloudflare/worker.js) — so lessons save per ID and load identically on any
// device after sign-in. The Worker URL is a BUILT-IN DEFAULT (see
// DEFAULT_WORKER_URL below) — it is a public endpoint, not a secret, so
// baking it in is safe; real security lives in the Worker (salted password
// hashing, sessions, lockout, per-user isolation). There is NO URL field or
// setup step anywhere in the UI: a new user just creates an account or signs
// in, on any device. (A per-browser override can still exist in storage from
// older versions; it is normalised — scheme added when missing — and never
// shown.) Pushes happen ONLY on save events (lesson complete, quiz submit,
// lab complete, note saved, settings saved) — no polling, no background
// sync. If the Worker is unreachable the sync status says "Offline" plainly
// and the next save re-pushes everything; JSON export/import in Settings is
// the manual backup. Sessions are bearer tokens issued by the Worker;
// passwords never leave the sign-in form except to the Worker.

export type ProgressRec = { kind: string; contentId: string; xp: number; score: number | null; at: string };
export type QuizRec = { quizId: string; score: number; total: number; at: string };
export type NoteRec = { id: number; kind: string; title: string; body: string; link: string; cwe: string; attack: string; status: string; at: string };
export type DiagnosticRec = { score: number; total: number; perTopic: { topic: string; score: number; total: number }[]; at: string };

export type LocalState = {
  profile: { displayName: string; goalRole: string; dailyGoalMinutes: number; username: string; email: string; joinedAt: string; lang: "en" | "bn" | "es" | "de" | "zh" | "hi" };
  diagnostic: DiagnosticRec | null;
  progress: ProgressRec[];
  attempts: QuizRec[];
  activity: { label: string; at: string }[];
  notes: NoteRec[];
  pentestDone: string[];
  projectSteps: Record<string, number[]>;
};

const KEY = "cyberlab-state-v1";
const CF_CFG_KEY = "cyberlab-cf-config";
const CF_SESSION_KEY = "cyberlab-cf-session";

function freshState(): LocalState {
  return {
    profile: { displayName: "", goalRole: "", dailyGoalMinutes: 30, username: "", email: "", joinedAt: "", lang: "en" },
    diagnostic: null,
    progress: [],
    attempts: [],
    activity: [],
    notes: [],
    pentestDone: [],
    projectSteps: {},
  };
}

function load(): LocalState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return freshState();
    const parsed = JSON.parse(raw) as LocalState;
    const merged = { ...freshState(), ...parsed, profile: { ...freshState().profile, ...parsed.profile } };
    // Migration: the removed "English + Bangla" hybrid mode (and any unknown
    // value) falls back cleanly to English — never to a removed mode. The
    // six current modes (en/bn/es/de/zh/hi) are kept as saved.
    merged.profile.lang = (["en", "bn", "es", "de", "zh", "hi"] as const).includes(merged.profile.lang as never)
      ? merged.profile.lang
      : "en";
    return merged;
  } catch {
    return freshState();
  }
}

let state: LocalState = load();
const listeners = new Set<() => void>();

export function getState(): LocalState {
  return state;
}
export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function set(next: LocalState) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage full/unavailable — state still lives in memory */
  }
  listeners.forEach((fn) => fn());
}
function update(fn: (s: LocalState) => LocalState) {
  set(fn(state));
}

// ---------- Cloudflare Worker config & session ----------
// Built-in default Worker URL (public endpoint, NOT a secret). The app uses
// it automatically with zero setup. Settings may store a per-browser
// OVERRIDE; clearing the override (or saving the default itself) restores
// this default — the effective config is therefore never empty.
export const DEFAULT_WORKER_URL = "https://cyberlab.hossainabirdev.workers.dev";

export type CfConfig = { url: string; isDefault: boolean };
export type CfSession = { token: string; username: string; email: string; expiresAt: string };

/** Normalise a Worker URL: trim, drop trailing slashes, and prepend
    https:// when the scheme is missing (a pasted "x.workers.dev" with no
    scheme would otherwise be treated as a relative path and never connect). */
export function normalizeWorkerUrl(raw: string): string {
  let url = (raw ?? "").trim().replace(/\/+$/, "");
  if (!url) return "";
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  return url;
}

export function getCfConfig(): CfConfig {
  try {
    const raw = localStorage.getItem(CF_CFG_KEY);
    if (raw) {
      const c = JSON.parse(raw) as { url?: string };
      const url = normalizeWorkerUrl(c.url ?? "");
      if (url && url !== DEFAULT_WORKER_URL) return { url, isDefault: false };
    }
  } catch {
    /* fall through to the built-in default */
  }
  return { url: DEFAULT_WORKER_URL, isDefault: true };
}
export function saveCfConfig(c: { url: string } | null) {
  const url = normalizeWorkerUrl(c?.url ?? "");
  // Empty or the default itself => no override stored; the built-in default applies.
  if (url && url !== DEFAULT_WORKER_URL) localStorage.setItem(CF_CFG_KEY, JSON.stringify({ url }));
  else localStorage.removeItem(CF_CFG_KEY);
  listeners.forEach((fn) => fn());
}
export function getCfSession(): CfSession | null {
  try {
    const raw = localStorage.getItem(CF_SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as CfSession;
    if (!s.token) return null;
    if (s.expiresAt && new Date(s.expiresAt).getTime() <= Date.now()) return null;
    return s;
  } catch {
    return null;
  }
}
/** Stable-identity session snapshot for useSyncExternalStore: reparses only
    when the stored string actually changes, so React never loops. */
let sessionCache: { raw: string | null; parsed: CfSession | null } = { raw: null, parsed: null };
export function getCfSessionSnapshot(): CfSession | null {
  let raw: string | null = null;
  try { raw = localStorage.getItem(CF_SESSION_KEY); } catch { raw = null; }
  if (raw !== sessionCache.raw) sessionCache = { raw, parsed: getCfSession() };
  return sessionCache.parsed;
}
function setCfSession(s: CfSession | null) {
  if (s) localStorage.setItem(CF_SESSION_KEY, JSON.stringify(s));
  else localStorage.removeItem(CF_SESSION_KEY);
  sessionCache = { raw: null, parsed: null }; // force reparse on next snapshot read
  listeners.forEach((fn) => fn());
}

// ---------- Sync status (visible in the sidebar + Settings) ----------
export type SyncState = "local" | "syncing" | "synced" | "offline" | "error";
let syncSnapshot: { state: SyncState; error: string } = {
  state: getCfSession() ? "synced" : "local",
  error: "",
};
export function getSyncSnapshot(): { state: SyncState; error: string } {
  return syncSnapshot;
}
function setSync(state: SyncState, error = "") {
  if (syncSnapshot.state === state && syncSnapshot.error === error) return;
  syncSnapshot = { state, error };
  listeners.forEach((fn) => fn());
}

/** Plain-language diagnosis of a server-side failure — never the generic
    login error. A missing D1 table gets its own exact instruction. */
export function describeServerProblem(status: number, message?: string): string {
  const m = message ?? "";
  if (/no such table/i.test(m)) {
    return "The server database is not set up — its tables are missing. Run schema.sql in the D1 Console (steps are in the D1 ZIP's README), then try again.";
  }
  if (/missing its D1 binding/i.test(m)) {
    return "The Worker is missing its D1 binding. In the Worker settings, add a D1 binding named exactly DB (steps are in the Worker ZIP's README).";
  }
  return `Server problem (HTTP ${status})${m ? ` — ${m}` : ""}. Your progress is safe in this browser; please try again in a moment.`;
}

const OFFLINE_MESSAGE =
  "Cannot reach the server — check your internet connection. Nothing was sent and nothing is lost: your progress stays in this browser and syncs when the server is back.";

/** Map a failed auth response to an honest message: 401 keeps the one
    generic credential message, 429 is the lockout, anything else is a
    server problem and is described as one. */
function authFailureMessage(status: number, data: CfReply): string {
  if (status === 401) return data.message ?? "Incorrect username/email or password";
  if (status === 429) return data.message ?? "Too many failed attempts. This login is locked for 15 minutes — try again later.";
  if (status >= 500) return describeServerProblem(status, data.message);
  return data.message ?? "That did not work. Check the details and try again.";
}

type CfReply = { ok?: boolean; message?: string; token?: string; expiresAt?: string; user?: { username: string; email: string; displayName: string; goalRole: string; dailyGoalMinutes: number; joinedAt: string }; state?: RemoteState };
type RemoteState = {
  profile: { displayName: string; goalRole: string; dailyGoalMinutes: number; username: string; email: string; joinedAt: string };
  diagnostic: DiagnosticRec | null;
  progress: ProgressRec[];
  attempts: QuizRec[];
  activity: { label: string; at: string }[];
  notes: NoteRec[];
  pentestDone: string[];
  projectSteps: Record<string, number[]>;
};

async function cfFetch(path: string, opts: { method?: string; body?: unknown; auth?: boolean } = {}): Promise<{ status: number; data: CfReply }> {
  const cfg = getCfConfig();
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const session = getCfSession();
  if (opts.auth && session) headers.Authorization = `Bearer ${session.token}`;
  const res = await fetch(`${cfg.url}${path}`, {
    method: opts.method ?? "GET",
    headers,
    body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
  });
  const data = (await res.json().catch(() => ({}))) as CfReply;
  if (res.status === 401 && opts.auth) { setCfSession(null); setSync("local"); } // expired/invalid session — the login gate returns
  return { status: res.status, data };
}

export async function cfTestConnection(): Promise<{ ok: boolean; message: string }> {
  try {
    const { status, data } = await cfFetch("/health");
    return status === 200 && data.ok
      ? { ok: true, message: "Server reachable." }
      : { ok: false, message: "The server answered, but not like a CyberLab server. Nothing is wrong on this device — try again in a moment." };
  } catch {
    return { ok: false, message: "Cannot reach the server — check your internet connection." };
  }
}

export const USERNAME_RE = /^[a-zA-Z0-9_]{3,20}$/;

function snapshotForSync(): Omit<RemoteState, "profile"> & { profile: { displayName: string; goalRole: string; dailyGoalMinutes: number } } {
  return {
    profile: { displayName: state.profile.displayName, goalRole: state.profile.goalRole, dailyGoalMinutes: state.profile.dailyGoalMinutes },
    diagnostic: state.diagnostic,
    progress: state.progress,
    attempts: state.attempts,
    activity: state.activity,
    notes: state.notes,
    pentestDone: state.pentestDone,
    projectSteps: state.projectSteps,
  };
}

/** Merge a remote (D1) state into the local one: union of everything, so
    signing in on a second device adds its progress instead of wiping it. */
function mergeRemote(remote: RemoteState) {
  update((s) => {
    const progHave = new Set(s.progress.map((p) => `${p.kind}:${p.contentId}`));
    const progress = [...s.progress];
    for (const p of remote.progress ?? []) {
      const k = `${p.kind}:${p.contentId}`;
      if (!progHave.has(k)) { progress.push(p); progHave.add(k); }
    }
    const attKey = (a: QuizRec) => `${a.quizId}|${a.score}|${a.total}|${a.at}`;
    const attHave = new Set(s.attempts.map(attKey));
    const attempts = [...s.attempts];
    for (const a of remote.attempts ?? []) {
      if (!attHave.has(attKey(a))) { attempts.push(a); attHave.add(attKey(a)); }
    }
    attempts.sort((x, y) => (x.at < y.at ? -1 : 1));
    const noteHave = new Set(s.notes.map((n) => n.id));
    const notes = [...s.notes];
    for (const n of remote.notes ?? []) {
      if (!noteHave.has(n.id)) { notes.push(n); noteHave.add(n.id); }
    }
    notes.sort((x, y) => (x.at < y.at ? 1 : -1));
    const actKey = (a: { label: string; at: string }) => `${a.label}|${a.at}`;
    const actHave = new Set(s.activity.map(actKey));
    const activity = [...s.activity];
    for (const a of remote.activity ?? []) {
      if (!actHave.has(actKey(a))) { activity.push(a); actHave.add(actKey(a)); }
    }
    activity.sort((x, y) => (x.at < y.at ? 1 : -1));
    const projectSteps: Record<string, number[]> = { ...(remote.projectSteps ?? {}) };
    for (const [k, v] of Object.entries(s.projectSteps)) {
      projectSteps[k] = [...new Set([...(projectSteps[k] ?? []), ...v])];
    }
    const diagnostic = !s.diagnostic ? remote.diagnostic
      : !remote.diagnostic ? s.diagnostic
      : (remote.diagnostic.at > s.diagnostic.at ? remote.diagnostic : s.diagnostic);
    return {
      ...s,
      profile: {
        ...s.profile,
        displayName: s.profile.displayName || remote.profile.displayName || "",
        goalRole: s.profile.goalRole || remote.profile.goalRole || "",
        username: remote.profile.username || s.profile.username,
        email: remote.profile.email || s.profile.email,
        joinedAt: remote.profile.joinedAt || s.profile.joinedAt,
      },
      diagnostic,
      progress,
      attempts,
      activity: activity.slice(0, 80),
      notes,
      pentestDone: [...new Set([...(remote.pentestDone ?? []), ...s.pentestDone])],
      projectSteps,
    };
  });
}

async function pullRemoteState(): Promise<boolean> {
  try {
    const { status, data } = await cfFetch("/progress", { auth: true });
    if (status === 200 && data.state) { mergeRemote(data.state); return true; }
  } catch { /* offline — local copy stands */ }
  return false;
}

/** On app start (with a live session) and on demand: pull the account's
    state from D1 and union-merge it into this device, updating the visible
    sync status honestly. */
export async function cfRefreshFromServer(): Promise<void> {
  if (!getCfSession()) { setSync("local"); return; }
  setSync("syncing");
  const ok = await pullRemoteState();
  if (!getCfSession()) setSync("local");
  else setSync(ok ? "synced" : "offline");
}

// Pushes are serialized so rapid save events can never land out of order.
let syncChain: Promise<void> = Promise.resolve();
async function doPush() {
  if (!getCfSession()) { setSync("local"); return; }
  setSync("syncing");
  try {
    const { status, data } = await cfFetch("/progress/save", { method: "POST", auth: true, body: { state: snapshotForSync() } });
    if (status === 200) setSync("synced");
    else if (status === 401) setSync("local"); // cfFetch already cleared the dead session
    else setSync("error", describeServerProblem(status, data.message));
  } catch {
    // Offline: the local copy is the fallback; the next save event re-pushes
    // the full state, and the status line says so honestly.
    setSync("offline");
  }
}
export function syncNow() {
  syncChain = syncChain.then(doPush).catch(() => undefined);
}

/** The browser's own "offline" event fired (pwa.ts listens for it): say
    Offline immediately instead of letting the status claim "Synced"
    until the next save happens to fail. Purely a status update — no
    request is made, nothing is queued here; the local store already
    holds every save and the next online/save event pushes it. */
export function noteOffline() {
  if (getCfSession()) setSync("offline");
}

export async function cfSignUp(username: string, email: string, password: string): Promise<{ ok: boolean; message: string }> {
  const uname = username.trim();
  if (!USERNAME_RE.test(uname)) {
    return { ok: false, message: "Username must be 3–20 characters: letters, numbers, underscore only." };
  }
  try {
    const { status, data } = await cfFetch("/auth/signup", {
      method: "POST",
      body: { username: uname, email: email.trim(), password, displayName: state.profile.displayName || uname },
    });
    if (status === 200 && data.token && data.user) {
      setCfSession({ token: data.token, username: data.user.username, email: data.user.email, expiresAt: data.expiresAt ?? "" });
      update((s) => ({ ...s, profile: { ...s.profile, username: data.user!.username, email: data.user!.email, joinedAt: data.user!.joinedAt } }));
      await pullRemoteState(); // a re-created account may already hold rows; merge before pushing
      syncNow(); // push this browser's existing local progress up — nothing learned locally is lost
      return { ok: true, message: "Account created and signed in. Your progress now saves to your account on every step." };
    }
    return { ok: false, message: authFailureMessage(status, data) };
  } catch {
    return { ok: false, message: OFFLINE_MESSAGE };
  }
}

export async function cfSignIn(identifier: string, password: string): Promise<{ ok: boolean; message: string }> {
  try {
    const { status, data } = await cfFetch("/auth/login", {
      method: "POST",
      body: { identifier: identifier.trim(), password },
    });
    if (status === 200 && data.token && data.user) {
      setCfSession({ token: data.token, username: data.user.username, email: data.user.email, expiresAt: data.expiresAt ?? "" });
      update((s) => ({
        ...s,
        profile: {
          ...s.profile,
          username: data.user!.username,
          email: data.user!.email,
          displayName: data.user!.displayName || s.profile.displayName,
          goalRole: data.user!.goalRole || s.profile.goalRole,
          dailyGoalMinutes: data.user!.dailyGoalMinutes || s.profile.dailyGoalMinutes,
          joinedAt: data.user!.joinedAt,
        },
      }));
      await pullRemoteState();
      syncNow(); // persist the merged union back to D1
      return { ok: true, message: "Signed in. Your progress from every device is merged here and saves to your account." };
    }
    // 401 keeps the ONE generic credential message; 429 is the lockout;
    // anything else is a server problem and is described honestly as one.
    return { ok: false, message: authFailureMessage(status, data) };
  } catch {
    return { ok: false, message: OFFLINE_MESSAGE };
  }
}

export async function cfSignOut() {
  try {
    await cfFetch("/auth/logout", { method: "POST", auth: true });
  } catch { /* the local session is cleared either way */ }
  setCfSession(null);
  setSync("local");
}

export async function cfChangePassword(currentPassword: string, newPassword: string): Promise<{ ok: boolean; message: string }> {
  if (!getCfSession()) return { ok: false, message: "Sign in first." };
  try {
    const { status, data } = await cfFetch("/auth/change-password", {
      method: "POST",
      auth: true,
      body: { currentPassword, newPassword },
    });
    return status === 200
      ? { ok: true, message: "Password changed." }
      : { ok: false, message: authFailureMessage(status, data) };
  } catch {
    return { ok: false, message: OFFLINE_MESSAGE };
  }
}

/** Forgot-password step 1 (live since v43): asks the Worker to email a
    6-digit reset code via Brevo (POST /api/auth/forgot-password). The
    Worker answers a generic { ok: true } whether or not the account
    exists, so the UI shows one generic "code sent" line and never reveals
    account existence. If email sending is not configured on the server
    the Worker returns an honest error (503) and that message is passed
    through untouched — the UI never claims a code was sent when it was
    not. `status` is returned so the caller can branch on it. */
export async function cfRequestPasswordReset(identifier: string): Promise<{ ok: boolean; status: number; message: string }> {
  try {
    const { status, data } = await cfFetch("/api/auth/forgot-password", {
      method: "POST",
      body: { identifier },
    });
    if (status === 200) return { ok: true, status, message: data.message ?? "If an account matches, a reset code was sent to its email address." };
    if (status === 503 || status === 502) return { ok: false, status, message: data.message ?? "The reset email could not be sent right now. Please try again later." };
    return { ok: false, status, message: authFailureMessage(status, data) };
  } catch {
    return { ok: false, status: 0, message: OFFLINE_MESSAGE };
  }
}

/** Forgot-password step 2 (live since v43): submits the emailed code and
    a new password (POST /api/auth/reset-password). The Worker verifies
    the code's SHA-256 hash, its 15-minute expiry and single-use flag,
    rotates the password hash with a fresh salt, and invalidates all of
    the account's sessions. A wrong or expired code returns only the
    generic "Invalid or expired code" message. */
export async function cfResetPassword(identifier: string, code: string, newPassword: string): Promise<{ ok: boolean; status: number; message: string }> {
  try {
    const { status, data } = await cfFetch("/api/auth/reset-password", {
      method: "POST",
      body: { identifier, code, new_password: newPassword },
    });
    if (status === 200) return { ok: true, status, message: data.message ?? "Password reset. Sign in with your new password." };
    return { ok: false, status, message: data.message ?? "Invalid or expired code" };
  } catch {
    return { ok: false, status: 0, message: OFFLINE_MESSAGE };
  }
}

// ---------- Local mutations (single write path; each triggers sync) ----------
export function completeItem(kind: string, contentId: string, xp: number, score: number | null, label: string) {
  if (state.progress.some((p) => p.kind === kind && p.contentId === contentId)) return;
  const rec: ProgressRec = { kind, contentId, xp, score, at: new Date().toISOString() };
  update((s) => ({
    ...s,
    progress: [...s.progress, rec],
    activity: [{ label, at: rec.at }, ...s.activity].slice(0, 80),
  }));
  syncNow();
}
export function recordAttempt(quizId: string, score: number, total: number, label: string) {
  const rec: QuizRec = { quizId, score, total, at: new Date().toISOString() };
  update((s) => ({
    ...s,
    attempts: [...s.attempts, rec],
    activity: [{ label: `${label} — ${score}/${total}`, at: rec.at }, ...s.activity].slice(0, 80),
  }));
  syncNow();
}
export function saveProfileLocal(patch: Partial<LocalState["profile"]>) {
  update((s) => ({ ...s, profile: { ...s.profile, ...patch } }));
  syncNow();
}
export function saveDiagnostic(d: DiagnosticRec) {
  update((s) => ({
    ...s,
    diagnostic: d,
    activity: [{ label: "Completed the Level 0 diagnostic", at: d.at }, ...s.activity].slice(0, 80),
  }));
  syncNow();
}
export function addNote(n: Omit<NoteRec, "id" | "at">): NoteRec {
  const rec: NoteRec = { ...n, id: Date.now(), at: new Date().toISOString() };
  update((s) => ({ ...s, notes: [rec, ...s.notes] }));
  syncNow();
  return rec;
}
export function updateNote(id: number, patch: Partial<NoteRec>) {
  update((s) => ({ ...s, notes: s.notes.map((n) => (n.id === id ? { ...n, ...patch } : n)) }));
  syncNow();
}
export function deleteNote(id: number) {
  update((s) => ({ ...s, notes: s.notes.filter((n) => n.id !== id) }));
  syncNow();
}
export function togglePentest(stepId: string) {
  update((s) => ({
    ...s,
    pentestDone: s.pentestDone.includes(stepId) ? s.pentestDone.filter((x) => x !== stepId) : [...s.pentestDone, stepId],
  }));
  syncNow();
}
export function toggleProjectStep(projectId: string, idx: number) {
  update((s) => {
    const cur = s.projectSteps[projectId] ?? [];
    const next = cur.includes(idx) ? cur.filter((x) => x !== idx) : [...cur, idx];
    return { ...s, projectSteps: { ...s.projectSteps, [projectId]: next } };
  });
  syncNow();
}
export function exportJson(): string {
  return JSON.stringify({ exportedAt: new Date().toISOString(), app: "CyberLab", state }, null, 2);
}
export function importJson(json: string): { ok: boolean; message: string } {
  try {
    const data = JSON.parse(json) as { state?: LocalState };
    if (!data.state || !Array.isArray(data.state.progress)) {
      return { ok: false, message: "That file is not a CyberLab export." };
    }
    // An imported file may carry a removed/unknown language value (or one
    // from a newer build); normalise it the same way load() does so the
    // language switcher never receives a mode it cannot render.
    const importedLang = (["en", "bn", "es", "de", "zh", "hi"] as const).includes(data.state.profile?.lang as never)
      ? data.state.profile.lang
      : "en";
    set({ ...freshState(), ...data.state, profile: { ...freshState().profile, ...data.state.profile, lang: importedLang } });
    syncNow();
    return { ok: true, message: `Imported ${data.state.progress.length} progress records.` };
  } catch {
    return { ok: false, message: "That file is not valid JSON." };
  }
}
export function resetAll() {
  const keepProfile = state.profile;
  set({ ...freshState(), profile: keepProfile });
  syncNow();
}

// ---------- Derived helpers ----------
export function totalXp(s: LocalState): number {
  return s.progress.reduce((sum, p) => sum + p.xp, 0) + s.attempts.reduce((sum, a) => sum + a.score * 2, 0);
}
/** Calendar-day key in the VIEWER's local timezone. Stored timestamps are
    UTC instants; slicing the ISO string would attribute late-night local
    study to the wrong day (e.g. 2am in Dhaka = previous UTC day), breaking
    streaks and the "today" count. Always go through this helper. */
export function localDayKey(d: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
export function streakDays(s: LocalState): number {
  const days = new Set<string>();
  for (const p of s.progress) days.add(localDayKey(new Date(p.at)));
  for (const a of s.activity) days.add(localDayKey(new Date(a.at)));
  let streak = 0;
  const d = new Date();
  // Allow today or yesterday as the anchor so an un-broken chain shows.
  if (!days.has(localDayKey(d))) d.setDate(d.getDate() - 1);
  while (days.has(localDayKey(d))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}
export async function sha256Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text.trim()));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
