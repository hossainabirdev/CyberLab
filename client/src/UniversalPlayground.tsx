// Universal Playground — pick (almost) any language, write code, really run it.
// Execution honesty, in priority order:
//   JavaScript → real, in this browser (sandboxed iframe runner).
//   Python     → real, in this browser (Pyodide / CPython in WebAssembly).
//   HTML       → live preview in a sandboxed iframe.
//   Most other languages → the public Judge0 CE execution service
//   (https://ce.judge0.com): ONLY the typed code + chosen language are
//   sent, and the language list below is Judge0's own live list, fetched
//   from GET /languages — never a hard-coded claim.
//   PowerShell + Julia → Judge0 does not offer them, so they are attempted
//   on the public Piston API (https://emkc.org). Since 15 Feb 2026 that
//   API is whitelist-only for execution (verified 20 Nov 2026: HTTP 401),
//   so today those two runs surface Piston's own refusal + the exact
//   local command — never a fake output. If Piston reopens, they run.
// Nothing ever executes on CyberLab's own server or the learner's real PC.

import { useEffect, useMemo, useRef, useState } from "react";
import { tx as txI } from "./i18n";
import { useStore } from "./ui";
import { LangBadge, highlightCode, langMeta, localCommand, runJavaScriptSandboxed } from "./Playground";
import { runPython } from "./pyodide";
import { fetchJudge0Languages, pickJudge0, runJudge0, runPiston, type Judge0Lang } from "./runner";

type LangDef = {
  id: string; // display/select id
  j0?: string; // Judge0 base language name (run "judge0")
  piston?: string; // Piston language key (run "piston")
  name: string;
  hello: string;
  ext: string;
  cyberEn: string;
  cyberBn: string;
  run: "browser-js" | "browser-py" | "preview" | "judge0" | "piston";
};

const LANGS: LangDef[] = [
  { id: "python", name: "Python", ext: "py", run: "browser-py", hello: 'print("Hello, CyberLab!")\n# Python runs right here in your browser (Pyodide).', cyberEn: "Security scripting & automation — log parsers, scanners, tooling glue.", cyberBn: "নিরাপত্তা scripting ও automation — log parser, scanner, tool-এর সংযোগ।" },
  { id: "javascript", name: "JavaScript", ext: "js", run: "browser-js", hello: 'console.log("Hello, CyberLab!");\n// JavaScript runs right here in your browser (sandboxed).', cyberEn: "Web security — browser behaviour, XSS context, Node tooling.", cyberBn: "Web নিরাপত্তা — browser-এর আচরণ, XSS context, Node tooling।" },
  { id: "typescript", j0: "TypeScript", name: "TypeScript", ext: "ts", run: "judge0", hello: 'const msg: string = "Hello, CyberLab!";\nconsole.log(msg);', cyberEn: "Typed JavaScript — safer web tooling and modern app code.", cyberBn: "Typed JavaScript — নিরাপদ web tooling ও আধুনিক app code।" },
  { id: "c", j0: "C", name: "C", ext: "c", run: "judge0", hello: '#include <stdio.h>\nint main(void) {\n    printf("Hello, CyberLab!\\n");\n    return 0;\n}', cyberEn: "Low-level & memory — how buffer overflows and systems code really work.", cyberBn: "Low-level ও memory — buffer overflow ও systems code আসলে কীভাবে কাজ করে।" },
  { id: "c++", j0: "C++", name: "C++", ext: "cpp", run: "judge0", hello: '#include <iostream>\nint main() {\n    std::cout << "Hello, CyberLab!" << std::endl;\n    return 0;\n}', cyberEn: "Systems & performance code — engines, tools, native utilities.", cyberBn: "Systems ও performance code — engine, tool, native utility।" },
  { id: "csharp", j0: "C#", name: "C#", ext: "cs", run: "judge0", hello: 'using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, CyberLab!");\n    }\n}', cyberEn: "Windows & enterprise apps — .NET services and tooling.", cyberBn: "Windows ও enterprise app — .NET service ও tooling।" },
  { id: "java", j0: "Java", name: "Java", ext: "java", run: "judge0", hello: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, CyberLab!");\n    }\n}', cyberEn: "Enterprise & Android foundations — large services, Spring apps.", cyberBn: "Enterprise ও Android ভিত্তি — বড় service, Spring app।" },
  { id: "go", j0: "Go", name: "Go", ext: "go", run: "judge0", hello: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, CyberLab!")\n}', cyberEn: "Security tooling — fast network tools, cloud-native services.", cyberBn: "নিরাপত্তা tooling — দ্রুত network tool, cloud-native service।" },
  { id: "rust", j0: "Rust", name: "Rust", ext: "rs", run: "judge0", hello: 'fn main() {\n    println!("Hello, CyberLab!");\n}', cyberEn: "Memory-safe systems code — the safe answer to C's bug classes.", cyberBn: "Memory-safe systems code — C-এর bug শ্রেণির নিরাপদ উত্তর।" },
  { id: "ruby", j0: "Ruby", name: "Ruby", ext: "rb", run: "judge0", hello: 'puts "Hello, CyberLab!"', cyberEn: "Scripting & tooling — Metasploit is written in Ruby.", cyberBn: "Scripting ও tooling — Metasploit Ruby-তে লেখা।" },
  { id: "php", j0: "PHP", name: "PHP", ext: "php", run: "judge0", hello: '<?php\necho "Hello, CyberLab!\\n";', cyberEn: "Web backends — a huge share of the web; know its bug patterns.", cyberBn: "Web backend — web-এর বিশাল অংশ; এর bug pattern জানা জরুরি।" },
  { id: "swift", j0: "Swift", name: "Swift", ext: "swift", run: "judge0", hello: 'print("Hello, CyberLab!")', cyberEn: "iOS/macOS apps — Apple's platforms and their security model.", cyberBn: "iOS/macOS app — Apple platform ও তাদের নিরাপত্তা model।" },
  { id: "kotlin", j0: "Kotlin", name: "Kotlin", ext: "kt", run: "judge0", hello: 'fun main() {\n    println("Hello, CyberLab!")\n}', cyberEn: "Android apps — the language of modern Android development.", cyberBn: "Android app — আধুনিক Android development-এর ভাষা।" },
  { id: "r", j0: "R", name: "R", ext: "r", run: "judge0", hello: 'print("Hello, CyberLab!")', cyberEn: "Data analysis — statistics over logs and detection datasets.", cyberBn: "Data analysis — log ও detection dataset-এর উপর statistics।" },
  { id: "julia", piston: "julia", name: "Julia", ext: "jl", run: "piston", hello: 'println("Hello, CyberLab!")', cyberEn: "High-performance numeric work — research and data science.", cyberBn: "High-performance numeric কাজ — research ও data science।" },
  { id: "haskell", j0: "Haskell", name: "Haskell", ext: "hs", run: "judge0", hello: 'main = putStrLn "Hello, CyberLab!"', cyberEn: "Functional programming — correctness-focused, type-driven code.", cyberBn: "Functional programming — correctness-কেন্দ্রিক, type-চালিত code।" },
  { id: "lua", j0: "Lua", name: "Lua", ext: "lua", run: "judge0", hello: 'print("Hello, CyberLab!")', cyberEn: "Embedded scripting — Nmap's NSE scripts are written in Lua.", cyberBn: "Embedded scripting — Nmap-এর NSE script Lua-তে লেখা।" },
  { id: "perl", j0: "Perl", name: "Perl", ext: "pl", run: "judge0", hello: 'print "Hello, CyberLab!\\n";', cyberEn: "Text processing heritage — decades of sysadmin glue scripts.", cyberBn: "Text processing ঐতিহ্য — দশকের sysadmin glue script।" },
  { id: "bash", j0: "Bash", name: "Bash", ext: "sh", run: "judge0", hello: 'echo "Hello, CyberLab!"', cyberEn: "Linux administration & automation — the shell is the admin's home.", cyberBn: "Linux administration ও automation — shell-ই admin-এর ঘর।" },
  { id: "powershell", piston: "powershell", name: "PowerShell", ext: "ps1", run: "piston", hello: 'Write-Host "Hello, CyberLab!"', cyberEn: "Windows administration — services, events, and system state.", cyberBn: "Windows administration — service, event ও system state।" },
  { id: "sqlite", j0: "SQL", name: "SQL (SQLite)", ext: "sql", run: "judge0", hello: 'CREATE TABLE demo (msg TEXT);\nINSERT INTO demo VALUES ("Hello, CyberLab!");\nSELECT msg FROM demo;', cyberEn: "Databases — queries, and the injection lessons of Level 8.", cyberBn: "Database — query, আর Level 8-র injection পাঠ।" },
  { id: "html", name: "HTML/CSS/JS", ext: "html", run: "preview", hello: '<!doctype html>\n<html>\n  <body style="font-family: sans-serif; padding: 16px;">\n    <h1>Hello, CyberLab!</h1>\n    <p>Edit the HTML and press Run — the preview updates live.</p>\n    <script>console.log("page script ran");</' + 'script>\n  </body>\n</html>', cyberEn: "The web's front door — structure every web lesson builds on.", cyberBn: "Web-এর সামনের দরজা — প্রতিটি web পাঠ যার উপর দাঁড়িয়ে।" },
];

export function UniversalPlayground() {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const [j0langs, setJ0langs] = useState<Judge0Lang[] | null>(null);
  const [rtError, setRtError] = useState(false);
  const [selId, setSelId] = useState("python");
  const [filter, setFilter] = useState("");
  const [code, setCode] = useState(LANGS[0]!.hello);
  const [output, setOutput] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [running, setRunning] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const alive = useRef(true);
  useEffect(() => { alive.current = true; return () => { alive.current = false; }; }, []);
  // Overlay scroll sync (cursor-line fix): the highlighted <pre> under the
  // transparent textarea must follow the textarea's scroll exactly, like
  // CodePlayground's does — without it, scrolled code leaves the glyphs
  // behind and the caret edits a different line than the one on screen.
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    fetchJudge0Languages()
      .then((d) => { if (alive.current) setJ0langs(d); })
      .catch(() => { if (alive.current) setRtError(true); });
  }, []);

  const extraLangs = useMemo(() => {
    if (!j0langs) return [] as { id: string; base: string; label: string }[];
    const known = new Set(LANGS.map((l) => (l.j0 ?? "").toLowerCase()).filter(Boolean));
    // Python/JavaScript also appear in Judge0's list, but here they run
    // in the browser — never offer them again as remote extras.
    known.add("python"); known.add("javascript");
    const bases = new Map<string, Judge0Lang>();
    for (const l of j0langs) {
      if (known.has(l.base.toLowerCase())) continue;
      const picked = pickJudge0(j0langs, l.base);
      if (picked && !bases.has(l.base)) bases.set(l.base, picked);
    }
    return [...bases.values()].map((l) => ({ id: `x-${l.base}`, base: l.base, label: l.name })).sort((a, b) => a.base.localeCompare(b.base));
  }, [j0langs]);

  const def = LANGS.find((l) => l.id === selId);
  const extra = !def ? extraLangs.find((e) => e.id === selId) : undefined;
  const j0pick = def?.j0 && j0langs ? pickJudge0(j0langs, def.j0) : undefined;
  const displayName = def ? def.name : extra ? extra.base : selId;
  const versionLabel = def?.run === "browser-py" ? "3.11 · Pyodide" : def?.run === "browser-js" ? "browser engine" : def?.run === "preview" ? "live preview" : def?.run === "piston" ? "via Piston" : j0pick ? j0pick.name : extra ? extra.label : rtError ? (txI(s.profile.lang, "list unavailable (offline)", "তালিকা পাওয়া যায়নি (offline)")) : "…";
  const runKindLabel = def?.run === "browser-py" || def?.run === "browser-js" ? (txI(s.profile.lang, "REAL · runs in your browser", "REAL · Browser-এই চলে")) : def?.run === "preview" ? (txI(s.profile.lang, "REAL · live preview in your browser", "REAL · Browser-এ live preview")) : def?.run === "piston" ? (txI(s.profile.lang, "REMOTE · runs on Piston", "REMOTE · Piston-এ চলে")) : (txI(s.profile.lang, "REAL · runs on Judge0", "REAL · Judge0-তে চলে"));
  const meta = langMeta(def ? def.name : displayName);
  const highlighted = useMemo(() => highlightCode(code, meta.family === "generic" && def?.id === "html" ? "markup" : meta.family), [code, meta.family, def]);

  const choose = (id: string) => {
    setSelId(id); setIsError(false); setPreview(null);
    const d = LANGS.find((l) => l.id === id);
    if (d) { setCode(d.hello); setOutput(null); }
    else {
      const ex = extraLangs.find((e) => e.id === id);
      setCode("");
      setOutput(txI(s.profile.lang, `Editor ready — write your own ${ex?.base ?? "code"} code here, then press ▶ Run. It really runs on Judge0.`, `Editor তৈরি — নিজের ${ex?.base ?? "code"} code লেখো, তারপর ▶ Run চাপো। এটি সত্যিই Judge0-তে চলবে।`));
    }
  };

  const run = async () => {
    if (def?.run === "preview") { setPreview(code); setOutput(txI(s.profile.lang, "Live preview below — the page's own script ran inside the sandbox.", "নিচে live preview — page-এর নিজের script sandbox-এ চলেছে।")); setIsError(false); return; }
    if (def?.run === "browser-js") {
      setRunning(true); setOutput(txI(s.profile.lang, "Running…", "চলছে…"));
      runJavaScriptSandboxed(code, (out, err) => { if (!alive.current) return; setRunning(false); setOutput(out); setIsError(err); });
      return;
    }
    if (def?.run === "browser-py") {
      setRunning(true); setOutput(txI(s.profile.lang, "Running…", "চলছে…"));
      const r = await runPython(code);
      if (!alive.current) return;
      setRunning(false); setOutput(r.out); setIsError(r.isError);
      return;
    }
    // Remote paths — real execution on a public service, honest errors.
    setRunning(true);
    setOutput(def?.run === "piston" || (!def && !extra) ? txI(s.profile.lang, "Running on Piston…", "Piston-এ চলছে…") : txI(s.profile.lang, "Running on Judge0…", "Judge0-তে চলছে…"));
    try {
      const hint = localCommand(displayName);
      const r = def?.run === "piston"
        ? await runPiston(def.piston ?? def.id, code, hint)
        : await runJudge0(def?.j0 ?? extra?.base ?? displayName, code, hint);
      if (!alive.current) return;
      // runner.ts messages are English; Bangla mode gets the same honest
      // content with a Bangla lead line, never a different claim.
      setOutput(isBn && r.isError && !/[\u0980-\u09FF]/.test(r.out) ? `সৎ error — কিছুই চালানো হয়নি বা run ব্যর্থ হয়েছে:\n\n${r.out}` : r.out);
      setIsError(r.isError);
    } finally {
      if (alive.current) setRunning(false);
    }
  };

  const q = filter.trim().toLowerCase();
  const shownCurated = LANGS.filter((l) => !q || l.name.toLowerCase().includes(q));
  const shownExtra = extraLangs.filter((l) => !q || l.base.toLowerCase().includes(q));

  return (
    <div className="space-y-4">
      <div className="cl-callout cl-callout-note" role="note">
        <p className="text-sm font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Code here really runs — and where it runs is never hidden", "এই Playground-এ code আসলেই চলে — কোথায় চলে তা লুকানো হয় না")}</p>
        <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]">{txI(s.profile.lang, "JavaScript and Python run inside your browser (sent nowhere). Every other language except PowerShell and Julia runs on Judge0 CE, a public code-execution service — only your typed code plus the chosen language are sent there, and it needs internet. PowerShell and Julia are not offered by Judge0, so they are attempted on Piston, whose public API is currently whitelist-only: until it reopens, those two show Piston's own refusal plus the local command. If a service is unreachable you get an honest error — never a fake output. Nothing runs on CyberLab's server or your real PC.", "JavaScript ও Python তোমার browser-এর ভেতরেই চলে (কোথাও পাঠানো হয় না)। PowerShell ও Julia ছাড়া বাকি ভাষা চলে Judge0 CE-তে (public code-execution service) — তোমার লেখা code + বেছে নেওয়া ভাষা শুধু সেখানে পাঠানো হয়, internet লাগে। PowerShell ও Julia Judge0-তে নেই, তাই ওগুলো Piston-এ চেষ্টা করা হয় — Piston-এর public API এখন whitelist-only, তাই আবার না খোলা পর্যন্ত ওই দুটোতে Piston-এর নিজের refusal ও local command দেখানো হয়। কোনো service পাওয়া না গেলে সৎ error আসে — ভুয়া output কখনো নয়। কিছুই CyberLab-এর server-এ বা তোমার আসল PC-তে চলে না।")}</p>
        <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]">{j0langs ? (isBn ? `Judge0 বর্তমানে ${j0langs.length}টি language entry report করছে — নিচের তালিকা সেই live তালিকা থেকেই এসেছে।` : `Judge0 currently reports ${j0langs.length} language entries — the list below comes from that live list.`) : rtError ? (txI(s.profile.lang, "Judge0's language list could not load just now (offline?) — showing the known languages; Run will either work (browser languages) or show an honest error.", "Judge0-এর ভাষার তালিকা এখন load করা যায়নি (offline?) — পরিচিত ভাষাগুলো দেখানো হচ্ছে; Run চাপলে সৎ error আসবে বা browser-ভাষাগুলো চলবে।")) : (txI(s.profile.lang, "Loading Judge0's language list…", "Judge0-এর ভাষার তালিকা load হচ্ছে…"))}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <label className="text-sm font-semibold text-[color:var(--text)]" htmlFor="up-search">{txI(s.profile.lang, "Search languages", "ভাষা খোঁজো")}</label>
          <input id="up-search" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder={txI(s.profile.lang, "e.g. rust, go, java…", "যেমন: rust, go, java…")} className="mt-1 min-h-[46px] w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm text-[color:var(--text)]" />
        </div>
        <div>
          <label className="text-sm font-semibold text-[color:var(--text)]" htmlFor="up-lang">{txI(s.profile.lang, "Choose a language", "ভাষা বেছে নাও")}</label>
          <select id="up-lang" value={selId} onChange={(e) => choose(e.target.value)} className="mt-1 min-h-[46px] w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm font-medium text-[color:var(--text)] sm:w-64">
            <optgroup label={txI(s.profile.lang, "Main languages", "প্রধান ভাষা")}>
              {shownCurated.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
            </optgroup>
            {shownExtra.length ? <optgroup label={txI(s.profile.lang, "All other Judge0 languages", "Judge0-এর বাকি সব ভাষা")}>{shownExtra.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}</optgroup> : null}
          </select>
        </div>
      </div>

      <section aria-label={`Universal Playground — ${displayName}`} className="cl-pg-in overflow-hidden rounded-xl border-2 border-cyan-800/70">
        <div className="flex flex-wrap items-center gap-2 bg-gradient-to-r from-sky-950 via-[color:var(--surface2)] to-emerald-950 px-3 py-2.5">
          <LangBadge lang={def ? def.name : displayName} showRun={false} />
          <span className="text-[12px] font-medium text-[color:var(--dim)]">{versionLabel}</span>
          <span className="rounded-full border border-[color:var(--border)] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--dim)]">{runKindLabel}</span>
          {def ? <span className="w-full text-xs leading-relaxed text-[color:var(--dim)]"><span className="font-semibold text-[color:var(--text)]">{txI(s.profile.lang, "In cybersecurity: ", "Cyber নিরাপত্তায়: ")}</span>{isBn ? def.cyberBn : def.cyberEn}</span> : null}
        </div>
        <div className="relative bg-[#0b1220]">
          <pre ref={preRef} aria-hidden="true" className="cl-editor-overlay pointer-events-none absolute inset-0 overflow-hidden whitespace-pre-wrap py-3 px-3 font-mono text-[12.5px] leading-[1.55] text-[#dbeafe] [word-break:break-word]" dangerouslySetInnerHTML={{ __html: highlighted + "\n" }} />
          <label className="sr-only" htmlFor="up-editor">{txI(s.profile.lang, "Code editor", "Code editor")} — {displayName}</label>
          <textarea id="up-editor" value={code} onChange={(e) => setCode(e.target.value)} spellCheck={false} autoComplete="off" rows={10}
            onScroll={(e) => { const t = e.currentTarget; if (preRef.current) { preRef.current.scrollTop = t.scrollTop; preRef.current.scrollLeft = t.scrollLeft; } }}
            className="cl-editor-scroll relative w-full resize-y whitespace-pre-wrap bg-transparent py-3 px-3 font-mono text-[12.5px] leading-[1.55] text-transparent caret-[#dbeafe] outline-none [word-break:break-word]" />
        </div>
        <div className="flex flex-wrap items-center gap-3 border-t border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5">
          <button type="button" onClick={() => void run()} disabled={running} className="min-h-[46px] rounded-lg bg-emerald-600 px-5 py-2 text-[15px] font-bold text-white shadow hover:bg-emerald-500 disabled:opacity-50" aria-label={`Run ${displayName} code`}>{running ? (txI(s.profile.lang, "Running…", "চলছে…")) : "▶ Run"}</button>
          <span className="text-xs text-[color:var(--dim)]">{txI(s.profile.lang, "Write your own code — even broken code, and read the real error. That is the learning.", "নিজের code লেখো, ভুল code লিখে আসল error-ও দেখো — এটাই শেখা।")}</span>
        </div>
        <div className={`border-t border-[color:var(--border)] ${isError && output !== null ? "bg-red-950/40" : "bg-[#070b12]"}`} aria-live="polite">
          <p className="px-3 pt-2 text-[11px] font-bold tracking-wide text-[color:var(--dim)]">OUTPUT · {runKindLabel}</p>
          <pre key={output ?? "idle"} className="cl-out-in max-h-[320px] overflow-auto whitespace-pre-wrap px-3 pb-3 pt-1.5 font-mono text-[12.5px] leading-relaxed text-[#c9f5dd]">{output ?? (txI(s.profile.lang, "No output yet — press ▶ Run.", "এখনো output নেই — ▶ Run চাপো।"))}</pre>
        </div>
        {preview !== null && def?.run === "preview" ? (
          <div className="border-t border-[color:var(--border)] bg-[color:var(--surface)] p-3">
            <p className="mb-2 text-[11px] font-bold tracking-wide text-[color:var(--dim)]">{txI(s.profile.lang, "LIVE PREVIEW", "LIVE PREVIEW")}</p>
            <iframe title="HTML live preview" sandbox="allow-scripts" srcDoc={preview} className="h-64 w-full rounded-lg border border-[color:var(--border)] bg-white" />
          </div>
        ) : null}
        <p className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-xs leading-relaxed text-[color:var(--dim)]">
          <strong className="text-[color:var(--text)]">{txI(s.profile.lang, "Run on your own PC:", "নিজের PC-তে চালাও:")}</strong> {localCommand(def ? def.name : displayName)}
          {def?.run === "judge0" || def?.run === "piston" || (!def && extra) ? <> · {txI(s.profile.lang, `REMOTE EXECUTION — your code is sent to the ${def?.run === "piston" ? "Piston" : "Judge0"} execution service to run; internet needed. Never put passwords, private keys, API tokens or any secret in code you run here — treat anything you send as public.`, `REMOTE EXECUTION — তোমার code চালানোর জন্য ${def?.run === "piston" ? "Piston" : "Judge0"} execution service-এ পাঠানো হয়; internet লাগে। Password, private key, API token বা কোনো secret কখনো এখানে চালানো code-এ দিও না — যা পাঠাবে, তা public service-এ যাচ্ছে ধরে নাও।`)}</> : null}
        </p>
      </section>
    </div>
  );
}
