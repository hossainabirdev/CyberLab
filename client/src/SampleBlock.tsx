// SampleBlock — the honest home for lesson content that is NOT code.
//
// Audit (14 Nov 2026, v26): every Playground / try-box entry in CyberLab was
// classified one by one. Real runnable code (Python, JavaScript, Bash,
// PowerShell, C, SQL, HTML) and real terminal commands stay in the Code
// Playground exactly as they were. But 42 entries were plain writing shown
// inside a code playground with a Run button that "ran" them like a demo —
// risk notes, scope statements, SOC shift notes, threat models, checklists,
// report skeletons, and tool files (Sigma/YARA rules, configs, a Dockerfile,
// assembly listings). Writing is not code: it never executes, so it must
// never wear a Run button or a fake output pane. Those entries render HERE
// instead — in the format the learner will actually write them in:
//   · "notepad" — a plain-text document sample (Notepad-style frame)
//   · "email"   — To / Subject / Body layout
//   · "file"    — a named file for a real tool (rule/config/source file),
//                 shown as a file, copied and saved under its real filename
// The sample TEXT is the lesson's own authored text, byte for byte — only
// the presentation changed. Copy is the one action; copying counts as the
// lesson's hands-on step (the learner then writes their own version).

import { useState } from "react";
import { tx as txI } from "./i18n";
import { useStore } from "./ui";
import type { PlayCode } from "./Playground";

/** Languages whose lesson block is a written document or a tool file, never
 * a program the Playground can run. Matches real-practice.ts WORKED_LANGS. */
const SAMPLE_LANGS = new Set(["text", "xml", "yaml", "yaml (sigma)", "dockerfile", "yara", "kotlin"]);

export function isSampleContent(code: { lang: string }): boolean {
  return SAMPLE_LANGS.has(code.lang.trim().toLowerCase());
}

export type SampleKind = "email" | "file" | "notepad";

/** The filename a file-sample is saved under, when the title names one. */
export function sampleFileName(code: PlayCode): string | null {
  const t = code.title;
  const docker = t.match(/Dockerfile[\w.]*/i);
  if (docker) return docker[0]!;
  const m = t.match(/([A-Za-z0-9_.-]+\.(?:conf|rules|xml|yml|yaml|asm|ini|cfg))\b/i);
  if (m) return m[1]!;
  if (/\bmanifest\b/i.test(t)) return "AndroidManifest.xml";
  const l = code.lang.trim().toLowerCase();
  if (l === "xml") return "config.xml";
  if (l.includes("yaml") || l === "yara") return "rule.yml";
  if (l === "dockerfile") return "Dockerfile";
  return null;
}

export function sampleKind(code: PlayCode): SampleKind {
  const body = code.code;
  // An email sample carries its headers at the top: To: … / Subject: …
  if (/^to\s*:/im.test(body) && /^subject\s*:/im.test(body)) return "email";
  const l = code.lang.trim().toLowerCase();
  // Machine-read files: markup/config/rule languages, or a title naming a
  // machine file (local.rules, hostapd-lab.conf, add.asm, Dockerfile…).
  if (l === "xml" || l.includes("yaml") || l === "yara" || l === "dockerfile") return "file";
  if (sampleFileName(code)) return "file";
  return "notepad";
}

function parseEmail(body: string): { to?: string; from?: string; subject?: string; rest: string } {
  const lines = body.split("\n");
  const out: { to?: string; from?: string; subject?: string; rest: string } = { rest: body };
  let i = 0;
  for (; i < lines.length; i++) {
    const line = lines[i]!;
    const m = line.match(/^(to|from|subject)\s*:\s*(.*)$/i);
    if (!m) break;
    const key = m[1]!.toLowerCase() as "to" | "from" | "subject";
    out[key] = m[2]!;
  }
  if (i > 0) out.rest = lines.slice(i).join("\n").replace(/^\n+/, "");
  return out;
}

export function FormatSample({ code, onCopy }: { code: PlayCode; onCopy?: () => void }) {
  const store = useStore();
  const isBn = store.profile.lang === "bn";
  const [copied, setCopied] = useState(false);
  const kind = sampleKind(code);
  const fileName = kind === "file" ? sampleFileName(code) : null;

  const heading =
    kind === "email"
      ? txI(store.profile.lang, "Sample email format", "Sample — email-এর format")
      : kind === "file"
        ? txI(store.profile.lang, "Sample file — save it under this name", "Sample file — এই নামে save করতে হয়")
        : txI(store.profile.lang, "Sample — write this in Notepad", "Sample — এটি Notepad-এ লিখতে হয়");
  const guidance =
    kind === "email"
      ? isBn
        ? "এটি তোমার email app-এ copy করে ঠিক এই format-এ (To, Subject, তারপর body) নিজের message লেখো।"
        : "Copy it into your email app and write your own message in exactly this format (To, Subject, then the body)."
      : kind === "file"
        ? isBn
          ? "এটি পাঠে নাম করা tool-এর জন্য একটি আসল file। Text editor-এ copy করে ঠিক এই filename-এ নিজের lab machine-এ save করে সেখানে ব্যবহার করো — এমন file তার tool পড়ে; এখানে run হওয়ার কিছু নেই।"
          : "This is a real file for the tool named in the lesson. Copy it into a text editor, save it with exactly this filename on your own lab machine, and use it there — a file like this is read by its tool; there is nothing to run here."
        : isBn
          ? "এটি Notepad-এ (বা যেকোনো text editor-এ) copy করে ঠিক এই format-এ, নিজের আসল value দিয়ে, নিজের version-টি লেখো।"
          : "Copy it into Notepad (or any text editor) and write your own version in exactly this format, using your own real values.";

  const copy = () => {
    void navigator.clipboard?.writeText(code.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
    onCopy?.();
  };

  const email = kind === "email" ? parseEmail(code.code) : null;

  return (
    <section aria-label={`${heading} — ${code.title}`} className="overflow-hidden rounded-xl border-2 border-amber-700/60 shadow-[0_0_0_1px_rgba(217,119,6,0.08)]">
      <div className="flex flex-wrap items-center gap-2 bg-[color:var(--surface2)] px-3 py-2.5">
        <span className="text-base" aria-hidden="true">{kind === "email" ? "✉️" : kind === "file" ? "📄" : "📝"}</span>
        <h4 className="text-sm font-bold text-[color:var(--text)]">{heading}</h4>
        <span className="rounded-full border border-amber-700 px-2 py-0.5 text-[11px] font-bold text-amber-500">
          {txI(store.profile.lang, "TEXT SAMPLE · not code — nothing runs here", "TEXT SAMPLE · এটি code নয় — এখানে কিছু run হয় না")}
        </span>
        <span className="ml-auto">
          <button type="button" onClick={copy} aria-label={txI(store.profile.lang, "Copy the sample", "Sample copy করো")}
            className="min-h-[44px] rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-2 text-sm font-semibold text-[color:var(--text)]">
            {copied ? (txI(store.profile.lang, "Copied ✓", "Copy হয়েছে ✓")) : (txI(store.profile.lang, "Copy the sample", "Sample copy করো"))}
          </button>
        </span>
      </div>
      <p className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-[13px] font-medium text-[color:var(--text)]">{code.title}</p>
      {kind === "file" ? (
        <>
          <div className="flex items-center gap-1.5 bg-[#111827] px-3 py-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-red-500" /><span className="h-3 w-3 rounded-full bg-amber-400" /><span className="h-3 w-3 rounded-full bg-emerald-500" />
            <span className="ml-2 font-mono text-[12px] font-semibold text-slate-200">{fileName ?? code.title}</span>
          </div>
          <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap bg-[#0b1220] px-3 py-3 font-mono text-[12.5px] leading-[1.6] text-[#dbeafe] [word-break:break-word]">{code.code}</pre>
        </>
      ) : kind === "email" && email ? (
        <div className="bg-[color:var(--surface)] px-3 py-3">
          <dl className="space-y-1.5 border-b border-[color:var(--border)] pb-2.5 text-sm">
            {email.to ? <div className="flex gap-2"><dt className="w-16 shrink-0 font-bold text-[color:var(--dim)]">To</dt><dd className="min-w-0 text-[color:var(--text)]">{email.to}</dd></div> : null}
            {email.from ? <div className="flex gap-2"><dt className="w-16 shrink-0 font-bold text-[color:var(--dim)]">From</dt><dd className="min-w-0 text-[color:var(--text)]">{email.from}</dd></div> : null}
            {email.subject ? <div className="flex gap-2"><dt className="w-16 shrink-0 font-bold text-[color:var(--dim)]">Subject</dt><dd className="min-w-0 font-semibold text-[color:var(--text)]">{email.subject}</dd></div> : null}
          </dl>
          <pre className="whitespace-pre-wrap pt-2.5 font-mono text-[12.5px] leading-[1.6] text-[color:var(--text)] [word-break:break-word]">{email.rest}</pre>
        </div>
      ) : (
        <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap border-t border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-3 font-mono text-[12.5px] leading-[1.65] text-[color:var(--text)] [word-break:break-word]">{code.code}</pre>
      )}
      <p className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5 text-xs leading-relaxed text-[color:var(--dim)]">{guidance}</p>
    </section>
  );
}
