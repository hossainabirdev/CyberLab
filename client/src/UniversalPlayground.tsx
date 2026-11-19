// Universal Playground — pick (almost) any language, write code, really run it.
// Execution honesty, in priority order:
//   JavaScript → real, in this browser (sandboxed iframe runner).
//   Python     → real, in this browser (Pyodide / CPython in WebAssembly).
//   HTML       → live preview in a sandboxed iframe.
//   Everything else → the public Piston code-execution API (https://emkc.org):
//   ONLY the typed code + chosen language/version are sent to Piston, which
//   runs it in Piston's sandbox. If Piston is unreachable, an honest error +
//   the exact local command are shown — never a fake output.
// Nothing ever executes on CyberLab's own server or the learner's real PC.

import { useEffect, useMemo, useRef, useState } from "react";
import { tx as txI } from "./i18n";
import { useStore } from "./ui";
import { LangBadge, highlightCode, langMeta, localCommand, runJavaScriptSandboxed } from "./Playground";
import { runPython } from "./pyodide";

const PISTON = "https://emkc.org/api/v2/piston";

type Runtime = { language: string; version: string; aliases?: string[] };
type LangDef = {
  id: string; // display/select id
  piston: string[]; // candidate names in Piston's runtime list
  name: string;
  hello: string;
  ext: string;
  cyberEn: string;
  cyberBn: string;
  run: "browser-js" | "browser-py" | "preview" | "piston";
};

const LANGS: LangDef[] = [
  { id: "python", piston: ["python"], name: "Python", ext: "py", run: "browser-py", hello: 'print("Hello, CyberLab!")\n# Python runs right here in your browser (Pyodide).', cyberEn: "Security scripting & automation — log parsers, scanners, tooling glue.", cyberBn: "নিরাপত্তা scripting ও automation — log parser, scanner, tool-এর সংযোগ।" },
  { id: "javascript", piston: ["javascript"], name: "JavaScript", ext: "js", run: "browser-js", hello: 'console.log("Hello, CyberLab!");\n// JavaScript runs right here in your browser (sandboxed).', cyberEn: "Web security — browser behaviour, XSS context, Node tooling.", cyberBn: "Web নিরাপত্তা — browser-এর আচরণ, XSS context, Node tooling।" },
  { id: "typescript", piston: ["typescript"], name: "TypeScript", ext: "ts", run: "piston", hello: 'const msg: string = "Hello, CyberLab!";\nconsole.log(msg);', cyberEn: "Typed JavaScript — safer web tooling and modern app code.", cyberBn: "Typed JavaScript — নিরাপদ web tooling ও আধুনিক app code।" },
  { id: "c", piston: ["c"], name: "C", ext: "c", run: "piston", hello: '#include <stdio.h>\nint main(void) {\n    printf("Hello, CyberLab!\\n");\n    return 0;\n}', cyberEn: "Low-level & memory — how buffer overflows and systems code really work.", cyberBn: "Low-level ও memory — buffer overflow ও systems code আসলে কীভাবে কাজ করে।" },
  { id: "c++", piston: ["c++"], name: "C++", ext: "cpp", run: "piston", hello: '#include <iostream>\nint main() {\n    std::cout << "Hello, CyberLab!" << std::endl;\n    return 0;\n}', cyberEn: "Systems & performance code — engines, tools, native utilities.", cyberBn: "Systems ও performance code — engine, tool, native utility।" },
  { id: "csharp", piston: ["csharp", "c#"], name: "C#", ext: "cs", run: "piston", hello: 'using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, CyberLab!");\n    }\n}', cyberEn: "Windows & enterprise apps — .NET services and tooling.", cyberBn: "Windows ও enterprise app — .NET service ও tooling।" },
  { id: "java", piston: ["java"], name: "Java", ext: "java", run: "piston", hello: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, CyberLab!");\n    }\n}', cyberEn: "Enterprise & Android foundations — large services, Spring apps.", cyberBn: "Enterprise ও Android ভিত্তি — বড় service, Spring app।" },
  { id: "go", piston: ["go"], name: "Go", ext: "go", run: "piston", hello: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, CyberLab!")\n}', cyberEn: "Security tooling — fast network tools, cloud-native services.", cyberBn: "নিরাপত্তা tooling — দ্রুত network tool, cloud-native service।" },
  { id: "rust", piston: ["rust"], name: "Rust", ext: "rs", run: "piston", hello: 'fn main() {\n    println!("Hello, CyberLab!");\n}', cyberEn: "Memory-safe systems code — the safe answer to C's bug classes.", cyberBn: "Memory-safe systems code — C-এর bug শ্রেণির নিরাপদ উত্তর।" },
  { id: "ruby", piston: ["ruby"], name: "Ruby", ext: "rb", run: "piston", hello: 'puts "Hello, CyberLab!"', cyberEn: "Scripting & tooling — Metasploit is written in Ruby.", cyberBn: "Scripting ও tooling — Metasploit Ruby-তে লেখা।" },
  { id: "php", piston: ["php"], name: "PHP", ext: "php", run: "piston", hello: '<?php\necho "Hello, CyberLab!\\n";', cyberEn: "Web backends — a huge share of the web; know its bug patterns.", cyberBn: "Web backend — web-এর বিশাল অংশ; এর bug pattern জানা জরুরি।" },
  { id: "swift", piston: ["swift"], name: "Swift", ext: "swift", run: "piston", hello: 'print("Hello, CyberLab!")', cyberEn: "iOS/macOS apps — Apple's platforms and their security model.", cyberBn: "iOS/macOS app — Apple platform ও তাদের নিরাপত্তা model।" },
  { id: "kotlin", piston: ["kotlin"], name: "Kotlin", ext: "kt", run: "piston", hello: 'fun main() {\n    println("Hello, CyberLab!")\n}', cyberEn: "Android apps — the language of modern Android development.", cyberBn: "Android app — আধুনিক Android development-এর ভাষা।" },
  { id: "r", piston: ["r"], name: "R", ext: "r", run: "piston", hello: 'print("Hello, CyberLab!")', cyberEn: "Data analysis — statistics over logs and detection datasets.", cyberBn: "Data analysis — log ও detection dataset-এর উপর statistics।" },
  { id: "julia", piston: ["julia"], name: "Julia", ext: "jl", run: "piston", hello: 'println("Hello, CyberLab!")', cyberEn: "High-performance numeric work — research and data science.", cyberBn: "High-performance numeric কাজ — research ও data science।" },
  { id: "haskell", piston: ["haskell"], name: "Haskell", ext: "hs", run: "piston", hello: 'main = putStrLn "Hello, CyberLab!"', cyberEn: "Functional programming — correctness-focused, type-driven code.", cyberBn: "Functional programming — correctness-কেন্দ্রিক, type-চালিত code।" },
  { id: "lua", piston: ["lua"], name: "Lua", ext: "lua", run: "piston", hello: 'print("Hello, CyberLab!")', cyberEn: "Embedded scripting — Nmap's NSE scripts are written in Lua.", cyberBn: "Embedded scripting — Nmap-এর NSE script Lua-তে লেখা।" },
  { id: "perl", piston: ["perl"], name: "Perl", ext: "pl", run: "piston", hello: 'print "Hello, CyberLab!\\n";', cyberEn: "Text processing heritage — decades of sysadmin glue scripts.", cyberBn: "Text processing ঐতিহ্য — দশকের sysadmin glue script।" },
  { id: "bash", piston: ["bash"], name: "Bash", ext: "sh", run: "piston", hello: 'echo "Hello, CyberLab!"', cyberEn: "Linux administration & automation — the shell is the admin's home.", cyberBn: "Linux administration ও automation — shell-ই admin-এর ঘর।" },
  { id: "powershell", piston: ["powershell"], name: "PowerShell", ext: "ps1", run: "piston", hello: 'Write-Host "Hello, CyberLab!"', cyberEn: "Windows administration — services, events, and system state.", cyberBn: "Windows administration — service, event ও system state।" },
  { id: "sqlite", piston: ["sqlite"], name: "SQL (SQLite)", ext: "sql", run: "piston", hello: 'CREATE TABLE demo (msg TEXT);\nINSERT INTO demo VALUES ("Hello, CyberLab!");\nSELECT msg FROM demo;', cyberEn: "Databases — queries, and the injection lessons of Level 8.", cyberBn: "Database — query, আর Level 8-র injection পাঠ।" },
  { id: "html", piston: [], name: "HTML/CSS/JS", ext: "html", run: "preview", hello: '<!doctype html>\n<html>\n  <body style="font-family: sans-serif; padding: 16px;">\n    <h1>Hello, CyberLab!</h1>\n    <p>Edit the HTML and press Run — the preview updates live.</p>\n    <script>console.log("page script ran");</' + 'script>\n  </body>\n</html>', cyberEn: "The web's front door — structure every web lesson builds on.", cyberBn: "Web-এর সামনের দরজা — প্রতিটি web পাঠ যার উপর দাঁড়িয়ে।" },
];

function pickRuntime(runtimes: Runtime[], def: LangDef): Runtime | undefined {
  const cands = runtimes.filter((r) => def.piston.includes(r.language) || (r.aliases ?? []).some((a) => def.piston.includes(a)));
  if (!cands.length) return undefined;
  const ver = (v: string) => v.split(/[^0-9]+/).map((n) => parseInt(n, 10) || 0);
  return cands.sort((a, b) => {
    const va = ver(a.version), vb = ver(b.version);
    for (let i = 0; i < Math.max(va.length, vb.length); i++) { const d = (vb[i] ?? 0) - (va[i] ?? 0); if (d) return d; }
    return 0;
  })[0];
}

export function UniversalPlayground() {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const [runtimes, setRuntimes] = useState<Runtime[] | null>(null);
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
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 12000);
    fetch(`${PISTON}/runtimes`, { signal: ctl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad status"))))
      .then((d: Runtime[]) => { if (alive.current) setRuntimes(d); })
      .catch(() => { if (alive.current) setRtError(true); })
      .finally(() => clearTimeout(t));
  }, []);

  const extraLangs = useMemo(() => {
    if (!runtimes) return [] as { id: string; name: string; version: string }[];
    const known = new Set(LANGS.flatMap((l) => l.piston));
    const seen = new Map<string, string>();
    for (const r of runtimes) if (!known.has(r.language) && !seen.has(r.language)) seen.set(r.language, r.version);
    return [...seen.entries()].map(([language, version]) => ({ id: `x-${language}`, name: language, version })).sort((a, b) => a.name.localeCompare(b.name));
  }, [runtimes]);

  const def = LANGS.find((l) => l.id === selId);
  const extra = !def ? extraLangs.find((e) => e.id === selId) : undefined;
  const runtime = def && runtimes ? pickRuntime(runtimes, def) : undefined;
  const displayName = def ? def.name : extra ? extra.name : selId;
  const versionLabel = def?.run === "browser-py" ? "3.11 · Pyodide" : def?.run === "browser-js" ? "browser engine" : def?.run === "preview" ? "live preview" : runtime ? runtime.version : extra ? extra.version : rtError ? (txI(s.profile.lang, "list unavailable (offline)", "তালিকা পাওয়া যায়নি (offline)")) : "…";
  const runKindLabel = def?.run === "browser-py" || def?.run === "browser-js" ? (txI(s.profile.lang, "REAL · runs in your browser", "REAL · Browser-এই চলে")) : def?.run === "preview" ? (txI(s.profile.lang, "REAL · live preview in your browser", "REAL · Browser-এ live preview")) : (txI(s.profile.lang, "REMOTE · runs on the Piston execution service", "REMOTE · Piston execution service-এ চলে"));
  const meta = langMeta(def ? def.name : displayName);
  const highlighted = useMemo(() => highlightCode(code, meta.family === "generic" && def?.id === "html" ? "markup" : meta.family), [code, meta.family, def]);

  const choose = (id: string) => {
    setSelId(id); setOutput(null); setIsError(false); setPreview(null);
    const d = LANGS.find((l) => l.id === id);
    setCode(d ? d.hello : `-- ${id.replace("x-", "")}\n`);
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
    // Piston path (curated piston langs + extra runtime langs)
    const lang = def ? (runtime?.language ?? def.piston[0] ?? def.id) : selId.replace("x-", "");
    const version = runtime?.version ?? extra?.version;
    if (!version) {
      setOutput(isBn ? `Execution service-এর তালিকা পাওয়া যায়নি — internet যাচাই করে আবার চেষ্টা করো। কিছুই চালানো হয়নি, কোনো ভুয়া output দেখানো হচ্ছে না।\n\nনিজের PC-তে চালাও:\n${localCommand(displayName)}` : `The execution service's runtime list is unavailable — check your internet and try again. Nothing was run and no output is faked.\n\nRun it on your own PC instead:\n${localCommand(displayName)}`);
      setIsError(true);
      return;
    }
    setRunning(true); setOutput(txI(s.profile.lang, "Running on Piston…", "Piston-এ চলছে…"));
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 20000);
    try {
      const res = await fetch(`${PISTON}/execute`, {
        method: "POST", signal: ctl.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language: lang, version, files: [{ name: `main.${def?.ext ?? "txt"}`, content: code }], stdin: "", args: [], compile_timeout: 10000, run_timeout: 10000 }),
      });
      const data = (await res.json()) as { compile?: { stdout?: string; stderr?: string; code?: number }; run?: { stdout?: string; stderr?: string; code?: number; signal?: string }; message?: string };
      if (!alive.current) return;
      const parts: string[] = [];
      if (data.compile && (data.compile.code ?? 0) !== 0) { parts.push((data.compile.stderr || data.compile.stdout || "Compilation failed").trim()); setOutput(parts.join("\n")); setIsError(true); return; }
      if (data.run?.stdout) parts.push(data.run.stdout.replace(/\n$/, ""));
      if (data.run?.stderr) parts.push(data.run.stderr.replace(/\n$/, ""));
      if (data.message) parts.push(`Piston: ${data.message}`);
      const exit = data.run?.code;
      parts.push(exit === 0 ? "(exit code 0)" : `(exit code ${exit ?? "?"})`);
      setOutput(parts.join("\n") || "(ran with no output)");
      setIsError((exit ?? 0) !== 0);
    } catch {
      if (!alive.current) return;
      setOutput(isBn ? `Execution service (Piston) পাওয়া যাচ্ছে না — internet নেই, service বন্ধ, বা rate limit হতে পারে। কিছুই চালানো হয়নি, কোনো ভুয়া output দেখানো হচ্ছে না।\n\nনিজের PC-তে চালাও:\n${localCommand(displayName)}` : `Execution service unavailable — Piston could not be reached (offline, service down, or rate-limited). Nothing was run and no output is faked.\n\nRun it on your own PC instead:\n${localCommand(displayName)}`);
      setIsError(true);
    } finally {
      clearTimeout(timer);
      if (alive.current) setRunning(false);
    }
  };

  const q = filter.trim().toLowerCase();
  const shownCurated = LANGS.filter((l) => !q || l.name.toLowerCase().includes(q));
  const shownExtra = extraLangs.filter((l) => !q || l.name.toLowerCase().includes(q));

  return (
    <div className="space-y-4">
      <div className="cl-callout cl-callout-note" role="note">
        <p className="text-sm font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Code here really runs — and where it runs is never hidden", "এই Playground-এ code আসলেই চলে — কোথায় চলে তা লুকানো হয় না")}</p>
        <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]">{txI(s.profile.lang, "JavaScript and Python run inside your browser (sent nowhere). Every other language runs on Piston, a public code-execution service — only your typed code plus the chosen language/version are sent to Piston, and it needs internet. If Piston is unreachable you get an honest error and the local command — never a fake output. Nothing runs on CyberLab's server or your real PC.", "JavaScript ও Python তোমার browser-এর ভেতরেই চলে (কোথাও পাঠানো হয় না)। বাকি ভাষা চলে Piston-এ (public code-execution service) — তোমার লেখা code + বেছে নেওয়া ভাষা/version শুধু Piston-এ পাঠানো হয়, internet লাগে। Piston পাওয়া না গেলে সৎ error ও নিজের PC-তে চালানোর command দেখানো হয় — ভুয়া output কখনো নয়। কিছুই CyberLab-এর server-এ বা তোমার আসল PC-তে চলে না।")}</p>
        <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]">{runtimes ? (isBn ? `Piston বর্তমানে ${runtimes.length}টি runtime (ভাষা/version) report করছে — নিচের তালিকা সেখান থেকেই এসেছে।` : `Piston currently reports ${runtimes.length} runtimes (language/version pairs) — the list below comes from that live list.`) : rtError ? (txI(s.profile.lang, "Piston's runtime list could not load just now (offline?) — showing the known languages; Run will either work (browser languages) or show an honest error.", "Piston-এর runtime তালিকা এখন load করা যায়নি (offline?) — পরিচিত ভাষাগুলো দেখানো হচ্ছে; Run চাপলে সৎ error আসবে বা browser-ভাষাগুলো চলবে।")) : (txI(s.profile.lang, "Loading Piston's runtime list…", "Piston-এর runtime তালিকা load হচ্ছে…"))}</p>
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
            {shownExtra.length ? <optgroup label={txI(s.profile.lang, "All other Piston languages", "Piston-এর বাকি সব ভাষা")}>{shownExtra.map((l) => <option key={l.id} value={l.id}>{l.name} {l.version}</option>)}</optgroup> : null}
          </select>
        </div>
      </div>

      <section aria-label={`Universal Playground — ${displayName}`} className="overflow-hidden rounded-xl border-2 border-cyan-800/70">
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
          <pre className="max-h-[320px] overflow-auto whitespace-pre-wrap px-3 pb-3 pt-1.5 font-mono text-[12.5px] leading-relaxed text-[#c9f5dd]">{output ?? (txI(s.profile.lang, "No output yet — press ▶ Run.", "এখনো output নেই — ▶ Run চাপো।"))}</pre>
        </div>
        {preview !== null && def?.run === "preview" ? (
          <div className="border-t border-[color:var(--border)] bg-[color:var(--surface)] p-3">
            <p className="mb-2 text-[11px] font-bold tracking-wide text-[color:var(--dim)]">{txI(s.profile.lang, "LIVE PREVIEW", "LIVE PREVIEW")}</p>
            <iframe title="HTML live preview" sandbox="allow-scripts" srcDoc={preview} className="h-64 w-full rounded-lg border border-[color:var(--border)] bg-white" />
          </div>
        ) : null}
        <p className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-xs leading-relaxed text-[color:var(--dim)]">
          <strong className="text-[color:var(--text)]">{txI(s.profile.lang, "Run on your own PC:", "নিজের PC-তে চালাও:")}</strong> {localCommand(def ? def.name : displayName)}
          {def?.run === "piston" || (!def && extra) ? <> · {txI(s.profile.lang, "REMOTE EXECUTION — your code is sent to the Piston execution service (emkc.org) to run; internet needed. Never put passwords, private keys, API tokens or any secret in code you run here — treat anything you send as public.", "REMOTE EXECUTION — তোমার code চালানোর জন্য Piston execution service-এ (emkc.org) পাঠানো হয়; internet লাগে। Password, private key, API token বা কোনো secret কখনো এখানে চালানো code-এ দিও না — যা পাঠাবে, তা public service-এ যাচ্ছে ধরে নাও।")}</> : null}
        </p>
      </section>
    </div>
  );
}
