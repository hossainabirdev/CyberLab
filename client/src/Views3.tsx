import { useRef, useState, useSyncExternalStore } from "react";
import { tx as txI } from "./i18n";
import { Badge, Card, LangMenu, SectionTitle, ThemeToggle, downloadText, useStore } from "./ui";
import { PwaInstallCard } from "./PwaInstall";
import { JourneyStrip } from "./guided";
import { TEMPLATES } from "./catalog3";
import {
addNote, deleteNote, exportJson, getCfSessionSnapshot, getSyncSnapshot, importJson, resetAll,
saveProfileLocal, cfChangePassword, cfSignOut, subscribe, updateNote, type NoteRec,
} from "./store";

const NOTE_KINDS = ["question", "note", "snippet", "finding", "timeline", "report"];
const NOTE_STATUS = ["open", "investigating", "remediated", "verified", "closed"];

function validHttpUrl(v: string): boolean {
  if (!v.trim()) return true;
  try {
    const u = new URL(v.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch { return false; }
}

/* ---------------- Research Workspace ---------------- */

export function ResearchView() {
  const s = useStore();
  const [form, setForm] = useState({ kind: "note", title: "", body: "", link: "", cwe: "", attack: "", status: "open" });
  const [msg, setMsg] = useState("");
  const [editing, setEditing] = useState<number | null>(null);

  const save = () => {
    if (!form.title.trim()) { setMsg("A title is required."); return; }
    if (!validHttpUrl(form.link)) { setMsg("Links must be valid http/https URLs (or left empty)."); return; }
    if (editing !== null) {
      updateNote(editing, form);
      setMsg("Entry updated.");
    } else {
      addNote(form);
      setMsg("Entry saved to your account.");
    }
    setForm({ kind: "note", title: "", body: "", link: "", cwe: "", attack: "", status: "open" });
    setEditing(null);
  };

  const exportMd = () => {
    const md = s.notes.map((n) => `## ${n.title}\n- Kind: ${n.kind} · Status: ${n.status} · ${new Date(n.at).toLocaleString()}\n${n.cwe ? `- CWE: ${n.cwe}\n` : ""}${n.attack ? `- ATT&CK: ${n.attack}\n` : ""}${n.link ? `- Link: ${n.link}\n` : ""}\n${n.body}\n`).join("\n");
    downloadText("cyberlab-research-notes.md", `# CyberLab Research Notes\n\n${md || "(no notes yet)\n"}`, "text/markdown");
  };

  const inputCls = "min-h-[44px] w-full rounded border border-[color:var(--border)] bg-[color:var(--surface2)] px-3 py-2 text-sm text-[color:var(--text)]";

  return (
    <div className="space-y-6">
      <JourneyStrip nextLabel="your notes are always open — write as you learn" />
      <SectionTitle bn="রিসার্চ ওয়ার্কস্পেস" bnSub="সবসময় খোলা — তোমার নিজের নোট, finding আর timeline এখানে থাকে, CWE ও ATT&CK অনুযায়ী সাজানো।" sub="Always open — it holds your own work. Research questions, lab notes, command output, snippets, findings, and timelines — mapped to CWE and ATT&CK, tracked to remediation, exportable as Markdown. All text is rendered as plain text, never as HTML.">
        Research Workspace
      </SectionTitle>

      <Card className="space-y-3">
        <h3 className="font-semibold text-[color:var(--text)]">{editing !== null ? "Edit entry" : "New entry"}</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="text-sm text-[color:var(--dim)]">Kind
            <select aria-label="Entry kind" className={inputCls} value={form.kind} onChange={(e) => setForm({ ...form, kind: e.target.value })}>
              {NOTE_KINDS.map((k) => <option key={k} value={k}>{k}</option>)}
            </select></label>
          <label className="text-sm text-[color:var(--dim)]">Status
            <select aria-label="Entry status" className={inputCls} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              {NOTE_STATUS.map((k) => <option key={k} value={k}>{k}</option>)}
            </select></label>
          <label className="text-sm text-[color:var(--dim)]">Template
            <select aria-label="Insert a template" className={inputCls} defaultValue="" onChange={(e) => {
              const t = TEMPLATES.find((x) => x.id === e.target.value);
              if (t) setForm((f) => ({ ...f, kind: "report", title: f.title || t.title, body: t.body }));
              e.target.value = "";
            }}>
              <option value="">Insert template…</option>
              {TEMPLATES.map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}
            </select></label>
        </div>
        <label className="block text-sm text-[color:var(--dim)]">Title
          <input aria-label="Entry title" className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Finding: session cookie not rotated at login (lab app)" /></label>
        <label className="block text-sm text-[color:var(--dim)]">Body — notes, evidence, command output, before/after fix comparison
          <textarea aria-label="Entry body" className={`${inputCls} min-h-[140px]`} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} /></label>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="text-sm text-[color:var(--dim)]">Reference link (http/https only)
            <input aria-label="Reference link" className={inputCls} value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="https://…" /></label>
          <label className="text-sm text-[color:var(--dim)]">CWE
            <input aria-label="CWE identifier" className={inputCls} value={form.cwe} onChange={(e) => setForm({ ...form, cwe: e.target.value })} placeholder="CWE-384" /></label>
          <label className="text-sm text-[color:var(--dim)]">ATT&CK technique
            <input aria-label="ATT&CK technique" className={inputCls} value={form.attack} onChange={(e) => setForm({ ...form, attack: e.target.value })} placeholder="T1078" /></label>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={save} className="min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white">{editing !== null ? "Save changes" : "Save entry"}</button>
          {editing !== null ? <button type="button" onClick={() => { setEditing(null); setForm({ kind: "note", title: "", body: "", link: "", cwe: "", attack: "", status: "open" }); }} className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)]">Cancel edit</button> : null}
          <button type="button" onClick={exportMd} className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)]">Export all as Markdown</button>
        </div>
        {msg ? <p role="status" className="text-sm text-[color:var(--accent)]">{msg}</p> : null}
      </Card>

      <div className="space-y-3">
        {s.notes.length === 0 ? <p className="text-sm text-[color:var(--dim)]">No research entries yet. Your first finding, question, or timeline will live here.</p> : null}
        {s.notes.map((n: NoteRec) => (
          <Card key={n.id}>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-medium text-[color:var(--text)]">{n.title}</h4>
              <Badge tone="accent">{n.kind}</Badge><Badge>{n.status}</Badge>
              {n.cwe ? <Badge>{n.cwe}</Badge> : null}{n.attack ? <Badge>{n.attack}</Badge> : null}
              <span className="ml-auto flex gap-1">
                <button type="button" className="min-h-[36px] rounded border border-[color:var(--border)] px-2 py-1 text-xs text-[color:var(--text)]"
                  onClick={() => { setEditing(n.id); setForm({ kind: n.kind, title: n.title, body: n.body, link: n.link, cwe: n.cwe, attack: n.attack, status: n.status }); }}>Edit</button>
                <button type="button" className="min-h-[36px] rounded border border-red-900 px-2 py-1 text-xs text-red-300"
                  onClick={() => deleteNote(n.id)}>Delete</button>
              </span>
            </div>
            <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-[color:var(--dim)]">{n.body}</p>
            {n.link ? <a className="mt-1 inline-block text-sm text-[color:var(--accent)] underline" href={n.link} target="_blank" rel="noopener noreferrer">{n.link}</a> : null}
            <p className="mt-1 text-xs text-[color:var(--dim)]">{new Date(n.at).toLocaleString()}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Settings: profile, account, data ----------------
   Deliberately small. The app is account-first: sign-in lives on the auth
   screen (before the Dashboard), the server address is built in, and deploy
   documentation lives ONLY in the ZIP READMEs — never in this UI. Settings
   holds exactly: theme, profile, language, sync status, password, logout,
   and data backup (export/import/reset). */

export function SettingsView() {
  const s = useStore();

  const session = useSyncExternalStore(subscribe, getCfSessionSnapshot, getCfSessionSnapshot);
  const sync = useSyncExternalStore(subscribe, getSyncSnapshot, getSyncSnapshot);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [accountMsg, setAccountMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const [importMsg, setImportMsg] = useState("");
  const [confirmReset, setConfirmReset] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const inputCls = "min-h-[44px] w-full rounded border border-[color:var(--border)] bg-[color:var(--surface2)] px-3 py-2 text-sm text-[color:var(--text)]";

  const syncLine = sync.state === "syncing"
    ? { text: txI(s.profile.lang, "Saving…", "Saving হচ্ছে…"), cls: "text-sky-300" }
    : sync.state === "synced"
      ? { text: txI(s.profile.lang, "Synced — all progress is saved to your account", "Synced — সব progress তোমার account-এ save আছে"), cls: "text-emerald-300" }
      : sync.state === "offline"
        ? { text: txI(s.profile.lang, "Offline — progress saves on this device and syncs to your account when you are back online", "Offline — progress এই device-এ save হচ্ছে, online হলেই account-এ sync হবে"), cls: "text-amber-300" }
        : sync.state === "error"
          ? { text: sync.error, cls: "text-red-300" }
          : { text: "", cls: "" };

  return (
    <div className="space-y-6">
      <SectionTitle bn="সেটিংস" bnSub="Profile, ভাষা, theme, account আর data backup — শুধু এগুলোই।" sub="Profile, language, theme, your account, and a data backup. Nothing else lives here.">
        Settings
      </SectionTitle>

      <Card className="space-y-2">
        <h3 className="font-semibold text-[color:var(--text)]">{txI(s.profile.lang, "Account & sync", "Account ও sync")}</h3>
        <p className="text-sm text-[color:var(--dim)]">
          {txI(s.profile.lang, "Signed in as ", "Signed in আছো ")}
          <span className="text-[color:var(--text)]">{session?.email}</span>
          {s.profile.username ? <> · <span className="text-[color:var(--text)]">@{s.profile.username}</span></> : null}
          {s.profile.joinedAt ? <> · {txI(s.profile.lang, "joined ", "যোগ দিয়েছ ")}{new Date(s.profile.joinedAt).toLocaleDateString()}</> : null}
        </p>
        {syncLine.text ? <p role="status" className={`text-sm font-medium ${syncLine.cls}`}>{syncLine.text}</p> : null}
        <p className="text-sm text-[color:var(--dim)]">
          {txI(s.profile.lang, "Every lesson, quiz, lab, mission, CTF and note saves under your account — sign in with the same account on any device and the same progress is there.", "প্রতিটা lesson, quiz, lab, mission, CTF আর note তোমার account-এর নামেই save হয় — অন্য যেকোনো device-এ একই account-এ sign in করলেই একই progress দেখবে।")}
        </p>
      </Card>

      <PwaInstallCard />

      <Card className="space-y-2">
        <h3 className="font-semibold text-[color:var(--text)]">Appearance — theme</h3>
        <p className="text-sm text-[color:var(--dim)]">Dark is the default training theme. Light mode re-skins the whole app (lessons, labs, quizzes) for bright rooms — code and terminal panes stay dark, like real editors. Your choice is saved on this device and also lives in the header.</p>
        <ThemeToggle />
      </Card>

      <Card className="space-y-3">
        <h3 className="font-semibold text-[color:var(--text)]">Learner profile</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="text-sm text-[color:var(--dim)]">Display name (not unique)
            <input aria-label="Display name" className={inputCls} value={s.profile.displayName} onChange={(e) => saveProfileLocal({ displayName: e.target.value })} placeholder="e.g. Abir" /></label>
          <label className="text-sm text-[color:var(--dim)]">Username (your account ID — cannot be changed)
            <input aria-label="Username" className={inputCls} value={s.profile.username} disabled /></label>
          <label className="text-sm text-[color:var(--dim)]">Goal role
            <input aria-label="Goal role" className={inputCls} value={s.profile.goalRole} onChange={(e) => saveProfileLocal({ goalRole: e.target.value })} placeholder="e.g. SOC Analyst" /></label>
        </div>
        <label className="block max-w-xs text-sm text-[color:var(--dim)]">Daily goal (minutes)
          <input aria-label="Daily goal minutes" type="number" min={5} max={480} className={inputCls} value={s.profile.dailyGoalMinutes}
            onChange={(e) => saveProfileLocal({ dailyGoalMinutes: Math.max(5, Math.min(480, Number(e.target.value) || 30)) })} /></label>
        <div className="max-w-md text-sm text-[color:var(--dim)]">
          <p>{txI(s.profile.lang, "Language — applies immediately, saved in your profile", "Language / ভাষা — সঙ্গে সঙ্গে প্রযোজ্য, profile-এ save হয়")}</p>
          <div className="mt-1.5"><LangMenu /></div>
        </div>
      </Card>

      <Card className="space-y-3">
        <h3 className="font-semibold text-[color:var(--text)]">{txI(s.profile.lang, "Password & session", "Password ও session")}</h3>
        <div className="flex flex-wrap items-end gap-2">
          <label className="min-w-[200px] flex-1 text-sm text-[color:var(--dim)]">{txI(s.profile.lang, "Current password", "বর্তমান password")}
            <input aria-label="Current password" type="password" className={inputCls} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} /></label>
          <label className="min-w-[200px] flex-1 text-sm text-[color:var(--dim)]">{txI(s.profile.lang, "New password", "নতুন password")}
            <input aria-label="New password" type="password" className={inputCls} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /></label>
          <button type="button" className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)]" disabled={busy || newPassword.length < 6 || !currentPassword}
            onClick={async () => { setBusy(true); const r = await cfChangePassword(currentPassword, newPassword); setAccountMsg(r.message); setCurrentPassword(""); setNewPassword(""); setBusy(false); }}>{txI(s.profile.lang, "Change password", "Password বদলাও")}</button>
          <button type="button" className="min-h-[44px] rounded border border-red-900 px-3 py-2 text-sm text-red-300"
            onClick={() => void cfSignOut()}>{txI(s.profile.lang, "Log out", "Log out")}</button>
        </div>
        {accountMsg ? <p role="status" className="text-sm text-[color:var(--accent)]">{accountMsg}</p> : null}
        <p className="text-xs text-[color:var(--dim)]">
          {txI(s.profile.lang, "Sessions last 30 days. Logging out deletes the session on the server too. Password reset by email is not in this version — keep your password in a password manager.", "Session-এর মেয়াদ 30 দিন। Log out করলে session server থেকেও মুছে যায়। Email দিয়ে password reset এই version-এ নেই — password password manager-এ রেখো।")}
        </p>
      </Card>

      <Card className="space-y-3">
        <h3 className="font-semibold text-[color:var(--text)]">Your data</h3>
        <p className="text-sm text-[color:var(--dim)]">
          {txI(s.profile.lang, "Your progress already saves to your account. Export/import is just an extra backup copy, for your own peace of mind.", "তোমার progress এমনিতেই account-এ save হয়। Export/import শুধু extra backup — চাইলে মাঝে মাঝে একটা copy রেখে দাও।")}
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)]"
            onClick={() => downloadText("cyberlab-progress.json", exportJson(), "application/json")}>Export progress (JSON)</button>
          <button type="button" className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)]"
            onClick={() => fileRef.current?.click()}>Import progress (JSON)</button>
          <input ref={fileRef} type="file" accept="application/json" className="hidden" aria-label="Import progress file"
            onChange={async (e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              const r = importJson(await f.text());
              setImportMsg(r.message);
              e.target.value = "";
            }} />
          {confirmReset ? (
            <>
              <span className="self-center text-sm text-red-300">Reset all progress and notes?</span>
              <button type="button" className="min-h-[44px] rounded bg-red-800 px-3 py-2 text-sm font-semibold text-white" onClick={() => { resetAll(); setConfirmReset(false); setImportMsg("Progress reset. Your profile details were kept."); }}>Yes, reset</button>
              <button type="button" className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)]" onClick={() => setConfirmReset(false)}>Cancel</button>
            </>
          ) : (
            <button type="button" className="min-h-[44px] rounded border border-red-900 px-3 py-2 text-sm text-red-300" onClick={() => setConfirmReset(true)}>Reset progress</button>
          )}
        </div>
        {importMsg ? <p role="status" className="text-sm text-[color:var(--accent)]">{importMsg}</p> : null}
      </Card>
    </div>
  );
}
