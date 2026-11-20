// CyberLab auth gate — the FIRST screen of the app (ChatBox-style).
// No Dashboard, lesson, or Settings exists behind this screen: a visitor
// signs in or creates an account, and only then does the app shell render.
// Tab order (user order, 19 Nov 2026): Sign in FIRST and selected by
// default, Create account beside it. The session is a 30-day Worker
// token; signing out returns here. Any progress already on this device
// union-merges into the account on the first sign-in (nothing learned
// locally is ever lost). There is no server URL field and no setup step
// anywhere — the Worker address is built in.

import { useEffect, useState } from "react";
import { LangMenu, ThemeToggle, useStore } from "./ui";
import { CyberLabLogo } from "./Visuals";
import { CopyrightLine, PrivacyView } from "./Privacy";
import { sfxClick, sfxError, sfxSuccess } from "./sound";
import { cfRequestPasswordReset, cfResetPassword, cfSignIn, cfSignUp, cfTestConnection, totalXp, USERNAME_RE } from "./store";
import { tx, txf } from "./i18n";

export function AuthView() {
  const s = useStore();
  const lang = s.profile.lang;
  const T = (en: string, b?: string) => tx(lang, en, b);
  // Sign in is the default tab (user order, 19 Nov 2026) — Create account
  // sits beside it for new learners.
  const [mode, setMode] = useState<"signup" | "signin">("signin");
  // Forgot-password flow (user order, 19 Nov 2026; email sending live
  // since v43): "auth" is the sign-in / create-account card; "forgot" is
  // the reset-request screen (POST /api/auth/forgot-password — the Worker
  // emails a 6-digit code via Brevo and answers generically, so this
  // screen never reveals whether an account exists); "reset" is the
  // code + new-password screen (POST /api/auth/reset-password). If the
  // server says email sending is not configured, that honest error is
  // shown as-is — the UI never claims a code was sent when it was not.
  const [view, setView] = useState<"auth" | "forgot" | "reset">("auth");
  // Privacy & Policy is readable before sign-in (user order, v47): the
  // login footer opens it as a full-screen overlay over this screen.
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [resetId, setResetId] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [resetPw, setResetPw] = useState("");
  const [notice, setNotice] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [identifier, setIdentifier] = useState(s.profile.username || s.profile.email || "");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [msgOk, setMsgOk] = useState(false);
  const [busy, setBusy] = useState(false);
  const [serverState, setServerState] = useState<"checking" | "online" | "offline">("checking");

  const localXp = totalXp(s);
  const hasLocal = s.progress.length > 0 || s.attempts.length > 0;

  // One honest reachability line: if the server cannot be reached, say so
  // up front instead of letting a sign-in attempt fail mysteriously.
  useEffect(() => {
    let alive = true;
    void cfTestConnection().then((r) => { if (alive) setServerState(r.ok ? "online" : "offline"); });
    return () => { alive = false; };
  }, []);

  const inputCls = "min-h-[48px] w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface2)] px-3 py-2 text-[15px] text-[color:var(--text)] transition-[border-color,box-shadow] duration-200 focus:border-[color:var(--accent)]";
  const tabCls = (active: boolean) =>
    `min-h-[44px] flex-1 rounded-lg px-3 py-2 text-sm font-semibold ${active ? "bg-[color:var(--accent2)] text-white" : "border border-[color:var(--border)] text-[color:var(--text)]"}`;

  const doSignUp = async () => {
    if (!USERNAME_RE.test(username.trim())) {
      setMsgOk(false);
      setMsg(T("Username must be 3–20 characters: letters, numbers, underscore only.", "Username 3–20 অক্ষরের হতে হবে: শুধু letter, number আর underscore।"));
      return;
    }
    setBusy(true); setMsg("");
    const r = await cfSignUp(username, email, password);
    if (r.ok) sfxSuccess(); else sfxError();
    setMsg(r.message); setMsgOk(r.ok); setBusy(false);
  };
  const doSignIn = async () => {
    setBusy(true); setMsg("");
    const r = await cfSignIn(identifier, password);
    if (r.ok) sfxSuccess(); else sfxError();
    setMsg(r.message); setMsgOk(r.ok); setBusy(false);
  };

  const doResetRequest = async () => {
    if (!resetId.trim()) {
      setMsgOk(false);
      setMsg(T("Enter your username or email first.", "আগে তোমার username অথবা email দাও।"));
      return;
    }
    setBusy(true); setMsg(""); setNotice("");
    const r = await cfRequestPasswordReset(resetId.trim());
    setBusy(false);
    if (r.ok) {
      // Generic on purpose: the Worker answers the same way whether or
      // not the account exists, so this line never confirms an account.
      setNotice(T("If an account matches that username or email, a reset code is on its way to the account's email address. Codes expire in 15 minutes.", "ওই username অথবা email-এর সাথে account মিললে, account-এর email address-এ একটা reset code যাচ্ছে। Code 15 মিনিটে expire হয়।"));
      setView("reset");
    } else {
      // Honest failure (e.g. email sending not configured on the server,
      // or the send itself failed) — shown as-is, never dressed up as
      // "code sent".
      setMsg(r.message); setMsgOk(false);
    }
  };

  const doResetSubmit = async () => {
    setMsg(""); setNotice("");
    if (!resetId.trim()) {
      setMsgOk(false);
      setMsg(T("Enter your username or email first.", "আগে তোমার username অথবা email দাও।"));
      return;
    }
    if (!resetCode.trim() || resetPw.length < 6) {
      setMsgOk(false);
      setMsg(T("Enter the reset code and a new password of at least 6 characters.", "Reset code আর কমপক্ষে 6 অক্ষরের নতুন password দাও।"));
      return;
    }
    setBusy(true);
    const r = await cfResetPassword(resetId.trim(), resetCode.trim(), resetPw);
    setBusy(false);
    if (r.ok) {
      // Back to Sign in with a clear success line; every old session was
      // invalidated server-side, so signing in fresh is required anyway.
      setResetCode(""); setResetPw(""); setPassword("");
      setIdentifier(resetId.trim());
      setMode("signin");
      setView("auth");
      setMsgOk(true);
      setMsg(T("Password reset. Sign in with your new password.", "Password reset হয়ে গেছে। নতুন password দিয়ে sign in করো।"));
    } else {
      setMsgOk(false);
      setMsg(r.message);
    }
  };

  return (
    <div className={`flex min-h-dvh flex-col bg-[color:var(--bg)] text-[color:var(--text)] ${showPrivacy ? "max-h-dvh overflow-hidden" : ""}`}>
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-8">
        <div className="mb-4 flex items-center justify-between gap-2">
          <LangMenu />
          <ThemeToggle />
        </div>

        <div className="cl-card cl-fade rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6">
          <div className="flex flex-col items-center text-center">
            <span className="cl-logo-glow"><CyberLabLogo size={56} animated /></span>
            <h1 className="cl-display mt-3 text-[28px] font-bold leading-tight">CyberLab</h1>
            <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]">
              {T("Levels 0–31 · 333 lessons · labs, missions, CTF — every step saves to your account, on any device.", "Levels 0–31 · 333টা lesson · lab, mission, CTF — সব progress তোমার account-এ save হয়, যেকোনো device-এ।")}
            </p>
          </div>

          {view === "auth" ? (<>
          <div className="mt-5 flex gap-2" role="tablist" aria-label={T("Account", "অ্যাকাউন্ট")}>
            <button type="button" role="tab" aria-selected={mode === "signin"} className={tabCls(mode === "signin")}
              onClick={() => { sfxClick(); setMode("signin"); setMsg(""); }}>
              {T("Sign in")}
            </button>
            <button type="button" role="tab" aria-selected={mode === "signup"} className={tabCls(mode === "signup")}
              onClick={() => { sfxClick(); setMode("signup"); setMsg(""); }}>
              {T("Create account", "Account খোলো")}
            </button>
          </div>
          </>) : null}

          {serverState === "offline" ? (
            <p role="alert" className="mt-3 rounded-lg border border-amber-800 bg-amber-950/30 p-3 text-sm text-amber-200">
              {T("Cannot reach the server right now — check your internet connection. Sign-in works again as soon as the connection is back.", "Server-এ এখন পৌঁছানো যাচ্ছে না — internet connection check করো। Connection ফিরলেই sign in / account খোলা যাবে।")}
            </p>
          ) : null}

          {view === "auth" && mode === "signin" ? (
            <form className="cl-rise mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); void doSignIn(); }}>
              <label className="block text-sm text-[color:var(--dim)]">
                {T("Username or email", "Username অথবা email")}
                <input aria-label={T("Username or email", "Username অথবা email")} className={inputCls} value={identifier} autoComplete="username"
                  onChange={(e) => setIdentifier(e.target.value)} placeholder="username or you@example.com" />
              </label>
              <label className="block text-sm text-[color:var(--dim)]">
                Password
                <input aria-label="Password" type="password" className={inputCls} value={password} autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)} />
              </label>
              <button type="submit" disabled={busy || serverState === "offline"}
                className="cl-lift min-h-[48px] w-full rounded-lg bg-[color:var(--accent2)] px-4 py-2.5 text-[15px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">
                {busy ? T("Signing in…", "Sign in হচ্ছে…") : T("Sign in")}
              </button>
              <div className="text-right">
                <button type="button" className="min-h-[44px] px-2 text-sm font-semibold text-[color:var(--accent)] underline-offset-2 hover:underline"
                  onClick={() => { setView("forgot"); setResetId(identifier); setMsg(""); setNotice(""); }}>
                  {T("Forgot password?", "Password ভুলে গেছো?")}
                </button>
              </div>
            </form>
          ) : view === "auth" ? (
            <form className="cl-rise mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); void doSignUp(); }}>
              <label className="block text-sm text-[color:var(--dim)]">
                {T("Username (unique — cannot be changed later)", "Username (unique — পরে বদলানো যাবে না)")}
                <input aria-label="Username" className={inputCls} value={username} autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)} placeholder="e.g. abir123" />
              </label>
              <label className="block text-sm text-[color:var(--dim)]">
                {T("Email (also used to sign in)", "Email (sign-in-এর জন্যও লাগবে)")}
                <input aria-label="Email" type="email" className={inputCls} value={email} autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </label>
              <label className="block text-sm text-[color:var(--dim)]">
                {T("Password (at least 6 characters)", "Password (কমপক্ষে 6 অক্ষর)")}
                <input aria-label="Password" type="password" className={inputCls} value={password} autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)} />
              </label>
              <button type="submit" disabled={busy || serverState === "offline"}
                className="cl-lift min-h-[48px] w-full rounded-lg bg-[color:var(--accent2)] px-4 py-2.5 text-[15px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">
                {busy ? T("Creating account…", "Account খোলা হচ্ছে…") : T("Create account", "Account খোলো")}
              </button>
            </form>
          ) : null}

          {view === "forgot" ? (
            <div className="cl-rise mt-4">
              <h2 className="text-lg font-bold">{T("Reset your password", "Password reset করো")}</h2>
              <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]">
                {T("Enter the username or email of your account. A reset code will be sent to the account's email address.", "তোমার account-এর username অথবা email দাও। Account-এর email address-এ একটা reset code পাঠানো হবে।")}
              </p>
              <form className="mt-3 space-y-3" onSubmit={(e) => { e.preventDefault(); void doResetRequest(); }}>
                <label className="block text-sm text-[color:var(--dim)]">
                  {T("Username or email", "Username অথবা email")}
                  <input aria-label={T("Username or email", "Username অথবা email")} className={inputCls} value={resetId} autoComplete="username"
                    onChange={(e) => setResetId(e.target.value)} placeholder="username or you@example.com" />
                </label>
                <button type="submit" disabled={busy || serverState === "offline"}
                  className="cl-lift min-h-[48px] w-full rounded-lg bg-[color:var(--accent2)] px-4 py-2.5 text-[15px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">
                  {busy ? T("Sending…", "পাঠানো হচ্ছে…") : T("Email me a reset code", "Email-এ reset code পাঠাও")}
                </button>
              </form>
              <button type="button" className="mt-3 min-h-[44px] px-2 text-sm font-semibold text-[color:var(--accent)] underline-offset-2 hover:underline"
                onClick={() => { setView("reset"); setMsg(""); setNotice(""); }}>
                {T("Already have a reset code?", "Reset code আগেই আছে?")}
              </button>
              <div>
                <button type="button" className="min-h-[44px] px-2 text-sm font-semibold text-[color:var(--dim)] underline-offset-2 hover:underline"
                  onClick={() => { setView("auth"); setMsg(""); setNotice(""); }}>
                  {T("Back to sign in", "Sign in-এ ফিরে যাও")}
                </button>
              </div>
            </div>
          ) : null}

          {view === "reset" ? (
            <div className="cl-rise mt-4">
              <h2 className="text-lg font-bold">{T("Reset your password", "Password reset করো")}</h2>
              <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]">
                {T("Enter the reset code from your email and choose a new password.", "Email-এ আসা reset code-টা দাও আর নতুন password বেছে নাও।")}
              </p>
              <form className="mt-3 space-y-3" onSubmit={(e) => { e.preventDefault(); void doResetSubmit(); }}>
                <label className="block text-sm text-[color:var(--dim)]">
                  {T("Username or email", "Username অথবা email")}
                  <input aria-label={T("Username or email", "Username অথবা email")} className={inputCls} value={resetId} autoComplete="username"
                    onChange={(e) => setResetId(e.target.value)} placeholder="username or you@example.com" />
                </label>
                <label className="block text-sm text-[color:var(--dim)]">
                  {T("Reset code", "Reset code")}
                  <input aria-label={T("Reset code", "Reset code")} className={inputCls} value={resetCode} autoComplete="one-time-code"
                    onChange={(e) => setResetCode(e.target.value)} placeholder="e.g. 482913" />
                </label>
                <label className="block text-sm text-[color:var(--dim)]">
                  {T("New password", "নতুন password")}
                  <input aria-label={T("New password", "নতুন password")} type="password" className={inputCls} value={resetPw} autoComplete="new-password"
                    onChange={(e) => setResetPw(e.target.value)} />
                </label>
                <button type="submit" disabled={busy}
                  className="cl-lift min-h-[48px] w-full rounded-lg bg-[color:var(--accent2)] px-4 py-2.5 text-[15px] font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">
                  {busy ? T("Resetting…", "Reset হচ্ছে…") : T("Reset password", "Password reset করো")}
                </button>
              </form>
              <button type="button" className="mt-3 min-h-[44px] px-2 text-sm font-semibold text-[color:var(--dim)] underline-offset-2 hover:underline"
                onClick={() => { setView("auth"); setMsg(""); setNotice(""); }}>
                {T("Back to sign in", "Sign in-এ ফিরে যাও")}
              </button>
            </div>
          ) : null}

          {notice ? (
            <p role="status" className="mt-3 rounded-lg border border-amber-800 bg-amber-950/30 p-3 text-sm leading-relaxed text-amber-200">
              {notice}
            </p>
          ) : null}

          {msg ? (
            <p role={msgOk ? "status" : "alert"} className={`mt-3 rounded-lg border p-3 text-sm ${msgOk ? "border-emerald-800 bg-emerald-950/30 text-emerald-200" : "border-red-900 bg-red-950/30 text-red-200"}`}>
              {msg}
            </p>
          ) : null}

          {hasLocal ? (
            <p className="mt-3 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface2)] p-3 text-[13px] leading-relaxed text-[color:var(--dim)]">
              {txf(lang, "This device already holds {xp} XP of progress — sign in and it merges into your account. Nothing is lost.", "এই device-এ আগের {xp} XP-র progress আছে — sign in করলেই ওটা তোমার account-এ যোগ হয়ে যাবে, কিছুই হারাবে না।", { xp: localXp })}
            </p>
          ) : null}

        </div>

        {/* Login footer — Privacy & Policy + copyright (v47). */}
        <footer className="mt-4 text-center">
          <button type="button" onClick={() => setShowPrivacy(true)}
            className="cl-lift min-h-[36px] px-2 text-[12px] font-semibold text-[color:var(--accent)] underline-offset-2 hover:underline">
            {T("Privacy & Policy", "গোপনীয়তা নীতি")}
          </button>
          <CopyrightLine className="mt-0.5 text-center" />
        </footer>
      </div>

      {showPrivacy ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[color:var(--bg)]" role="dialog" aria-modal="true" aria-label={T("Privacy & Policy", "গোপনীয়তা নীতি")}>
          <div className="mx-auto w-full max-w-3xl px-4 py-5">
            <button type="button" onClick={() => setShowPrivacy(false)}
              className="mb-4 min-h-[44px] rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-semibold text-[color:var(--text)]">
              ← {T("Back to sign in", "Sign in-এ ফিরে যাও")}
            </button>
            <PrivacyView />
          </div>
        </div>
      ) : null}
    </div>
  );
}
