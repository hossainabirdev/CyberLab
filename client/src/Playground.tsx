import { useEffect, useMemo, useRef, useState } from "react";
import { tx as txI } from "./i18n";
import { useStore } from "./ui";
import { runPython, pyState, onPyState, type PyState } from "./pyodide";
import { runJudge0, runPiston } from "./runner";

// Code Playground — editable code, a real ▶ Run, and an honestly-labelled output pane.
// JavaScript runs FOR REAL inside a sandboxed iframe (sandbox="allow-scripts",
// NO allow-same-origin): the code cannot reach this app, its storage, or its
// state, and has no network helpers from the app. Console output and errors
// are posted back and shown verbatim. Python runs FOR REAL via Pyodide.
// C, C++, Java, Bash, Kotlin, SQL and TypeScript run FOR REAL on the Judge0
// execution service, and PowerShell is attempted on Piston (see runner.ts) —
// real output and real compiler errors, edited code included. Only
// non-executable samples (markup, config, text) keep the verified-output /
// local-run mode, and they are labelled as such — never as a real run.

export type PlayCode = { lang: string; title: string; code: string; output: string };

let runSeq = 0;

export function runJavaScriptSandboxed(code: string, done: (out: string, isError: boolean) => void) {
  const id = ++runSeq;
  const iframe = document.createElement("iframe");
  iframe.setAttribute("sandbox", "allow-scripts");
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.display = "none";
  const onMsg = (e: MessageEvent) => {
    const d = e.data as { __clabRun?: number; out?: string; isError?: boolean } | null;
    if (!d || d.__clabRun !== id) return;
    cleanup();
    done(d.out ?? "", Boolean(d.isError));
  };
  const timer = setTimeout(() => { cleanup(); done("⏱ Run timed out after 3 seconds — check for an infinite loop (e.g. while(true)). Your browser and progress are unaffected.", true); }, 3000);
  const cleanup = () => { clearTimeout(timer); window.removeEventListener("message", onMsg); iframe.remove(); };
  window.addEventListener("message", onMsg);
  const runner = `
    var lines = [];
    function fmt(v){ if (typeof v === "string") return v; try { var s = JSON.stringify(v); return s === undefined ? String(v) : s; } catch(e){ return String(v); } }
    console.log = function(){ lines.push([].map.call(arguments, fmt).join(" ")); };
    console.error = function(){ lines.push("Error: " + [].map.call(arguments, fmt).join(" ")); };
    console.warn = function(){ lines.push("Warning: " + [].map.call(arguments, fmt).join(" ")); };
    window.onerror = function(msg){ parent.postMessage({ __clabRun: ${id}, out: "Error: " + msg + (lines.length ? "\\n" + lines.join("\\n") : ""), isError: true }, "*"); };
    try {
      var __result = (0, eval)(${JSON.stringify(code)});
      if (__result !== undefined) lines.push("→ " + fmt(__result));
      parent.postMessage({ __clabRun: ${id}, out: lines.length ? lines.join("\\n") : "(ran with no console output — add console.log(...) to see a result here)", isError: false }, "*");
    } catch (e) {
      parent.postMessage({ __clabRun: ${id}, out: ((e && e.name ? e.name + ": " : "Error: ") + (e && e.message ? e.message : String(e))) + (lines.length ? "\\n" + lines.join("\\n") : ""), isError: true }, "*");
    }`;
  iframe.srcdoc = `<!doctype html><html><body><script>${runner.replace(/<\/script>/gi, "<\\/script>")}<\/script></body></html>`;
  document.body.appendChild(iframe);
}


// Language identity for every playground: name, version, monogram mark,
// colour chip (existing Ink & Signal tokens only), highlight family, and
// how the code can honestly run.
export type LangMeta = {
  name: string; version: string; mark: string; chip: string;
  family: "python" | "js" | "c" | "bash" | "powershell" | "sql" | "markup" | "generic";
  runKind: "browser-js" | "browser-py" | "remote" | "local";
  /** Judge0 base language name (runKind "remote", service "judge0"). */
  remote?: string;
  /** Which remote service executes it. PowerShell is not offered by
   * Judge0, so it goes to Piston (currently whitelist-only — the run
   * surfaces that refusal honestly instead of faking output). */
  remoteService?: "judge0" | "piston";
};
export function langMeta(lang: string): LangMeta {
  const l = lang.toLowerCase();
  if (l.includes("python")) return { name: "Python", version: "3.11 · Pyodide", mark: "Py", chip: "var(--c-learn)", family: "python", runKind: "browser-py" };
  if (l.includes("javascript")) return { name: "JavaScript", version: "browser engine", mark: "JS", chip: "var(--c-mission)", family: "js", runKind: "browser-js" };
  if (l.includes("typescript")) return { name: "TypeScript", version: "via Judge0", mark: "TS", chip: "var(--c-soc)", family: "js", runKind: "remote", remote: "TypeScript", remoteService: "judge0" };
  if (l.includes("powershell")) return { name: "PowerShell", version: "7 · via Piston", mark: "PS", chip: "var(--c-soc)", family: "powershell", runKind: "remote", remote: "powershell", remoteService: "piston" };
  if (l.includes("c++")) return { name: "C++", version: "g++ · via Judge0", mark: "C+", chip: "var(--c-soc)", family: "c", runKind: "remote", remote: "C++", remoteService: "judge0" };
  if (l === "c" || l.includes("c (") || l.startsWith("c ")) return { name: "C", version: "gcc · via Judge0", mark: "C", chip: "var(--c-soc)", family: "c", runKind: "remote", remote: "C", remoteService: "judge0" };
  if (l.includes("java") && !l.includes("javascript")) return { name: "Java", version: "JDK · via Judge0", mark: "Jv", chip: "var(--c-soc)", family: "c", runKind: "remote", remote: "Java", remoteService: "judge0" };
  if (l.includes("kotlin")) return { name: "Kotlin", version: "via Judge0", mark: "Kt", chip: "var(--c-soc)", family: "c", runKind: "remote", remote: "Kotlin", remoteService: "judge0" };
  if (l.includes("bash") || l.includes("shell")) return { name: "Bash", version: "bash · via Judge0", mark: ">_", chip: "var(--c-terminal)", family: "bash", runKind: "remote", remote: "Bash", remoteService: "judge0" };
  if (l.includes("sql")) return { name: "SQL", version: "SQLite · via Judge0", mark: "SQL", chip: "var(--c-project)", family: "sql", runKind: "remote", remote: "SQL", remoteService: "judge0" };
  if (l.includes("html") || l.includes("xml") || l.includes("yaml")) return { name: lang, version: "markup", mark: "</>", chip: "var(--c-ctf)", family: "markup", runKind: "local" };
  return { name: lang, version: "", mark: "{}", chip: "var(--accent)", family: "generic", runKind: "local" };
}

const KEYWORDS: Record<string, string[]> = {
  python: ["def", "return", "import", "from", "for", "in", "if", "elif", "else", "while", "class", "print", "True", "False", "None", "and", "or", "not", "with", "as", "try", "except", "finally", "lambda", "pass", "break", "continue", "raise", "len", "range", "str", "int"],
  js: ["const", "let", "var", "function", "return", "if", "else", "for", "while", "class", "new", "import", "from", "export", "default", "async", "await", "try", "catch", "throw", "console", "typeof"],
  c: ["int", "void", "char", "float", "double", "long", "unsigned", "return", "if", "else", "for", "while", "struct", "public", "private", "static", "class", "func", "fn", "let", "mut", "pub", "use", "package", "printf", "include", "using", "namespace", "bool", "true", "false", "null", "NULL", "sizeof", "break", "continue", "switch", "case"],
  bash: ["if", "then", "fi", "for", "while", "do", "done", "echo", "cd", "ls", "grep", "cat", "sudo", "chmod", "function", "in", "case", "esac", "exit", "export", "local"],
  powershell: ["param", "function", "if", "else", "elseif", "foreach", "ForEach-Object", "Where-Object", "Write-Host", "Write-Output", "Get-Service", "Get-Process", "Get-Content", "Set-Content", "return", "break", "switch"],
  sql: ["SELECT", "FROM", "WHERE", "INSERT", "INTO", "VALUES", "UPDATE", "DELETE", "CREATE", "TABLE", "JOIN", "LEFT", "ON", "GROUP", "BY", "ORDER", "LIMIT", "PRIMARY", "KEY", "NOT", "NULL", "AND", "OR", "AS", "DISTINCT", "COUNT"],
};

// Tiny regex highlighter for the editor overlay (comments, strings, numbers,
// keywords, PowerShell variables). Presentation only — never affects the code.
export function highlightCode(code: string, family: LangMeta["family"]): string {
  const esc = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const kw = KEYWORDS[family] ?? KEYWORDS.c;
  const kwRe = kw ? `\\b(?:${kw.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b` : "$^";
  const comment = family === "python" || family === "bash" || family === "powershell" ? "#[^\\n]*" : family === "sql" ? "--[^\\n]*" : family === "markup" ? "<!--[\\s\\S]*?-->" : "(?://[^\\n]*|/\\*[\\s\\S]*?\\*/)";
  const re = new RegExp(`(${comment})|("(?:[^"\\\\\\n]|\\\\.)*"|'(?:[^'\\\\\\n]|\\\\.)*'|\`(?:[^\`\\\\]|\\\\.)*\`)|(\\b\\d+(?:\\.\\d+)?\\b)|(\\$[A-Za-z_][\\w-]*)|(${kwRe})`, family === "sql" ? "gi" : "g");
  return esc.replace(re, (m, com, str, num, psv, kwd) => {
    if (com) return `<span style="color:#7d8aa0">${m}</span>`;
    if (str) return `<span style="color:#86efac">${m}</span>`;
    if (num) return `<span style="color:#fbbf24">${m}</span>`;
    if (psv) return `<span style="color:#fbbf24">${m}</span>`;
    if (kwd) return `<span style="color:#7dd3fc">${m}</span>`;
    return m;
  });
}

export function LangBadge({ lang, showRun = true }: { lang: string; showRun?: boolean }) {
  const m = langMeta(lang);
  const runLabel = m.runKind === "browser-js" ? "REAL · runs in your browser" : m.runKind === "browser-py" ? "REAL · runs in your browser (Pyodide)" : m.runKind === "remote" ? (m.remoteService === "piston" ? "REMOTE · runs on Piston" : "REAL · runs on Judge0") : "SIMULATED · expected output only — run it for real locally";
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5" aria-label={`Language: ${m.name}${m.version ? `, ${m.version}` : ""}`}>
      <span aria-hidden="true" className="flex h-6 min-w-6 items-center justify-center rounded-md px-1 font-mono text-[11px] font-black text-white" style={{ background: m.chip }}>{m.mark}</span>
      <span className="text-[13px] font-bold text-[color:var(--text)]">{m.name}</span>
      {m.version ? <span className="text-[11px] font-medium text-[color:var(--dim)]">{m.version}</span> : null}
      {showRun ? <span className="rounded-full border border-[color:var(--border)] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--dim)]">{runLabel}</span> : null}
    </span>
  );
}

export function localCommand(lang: string): string {
  const l = lang.toLowerCase();
  if (l.includes("python")) return "Save as the filename in the lesson (e.g. log_parser.py), then run:  python3 log_parser.py";
  if (l.includes("javascript") || l.includes("html")) return "Paste into the browser DevTools Console (F12), or save as script.js and run:  node script.js";
  if (l === "c" || l.includes("c (")) return "Save as main.c, then:  gcc -Wall -Wextra -o lab main.c && ./lab";
  if (l.includes("c++")) return "Save as main.cpp, then:  g++ -Wall -Wextra -o lab main.cpp && ./lab";
  if (l.includes("java") && !l.includes("javascript")) return "Save the file with the exact class name from the title (e.g. Main.java), then:  javac Main.java && java Main";
  if (l.includes("kotlin")) return "Save as Main.kt, then:  kotlinc Main.kt -include-runtime -d app.jar && java -jar app.jar";
  if (l.includes("bash")) return "Save as script.sh, then:  chmod +x script.sh && ./script.sh   (in your own lab folder only)";
  if (l.includes("powershell")) return "Open PowerShell in your lab folder and run the block, or save as script.ps1 and run:  .\\script.ps1";
  if (l.includes("sql")) return "Run it against your local training database only (e.g. the Level 5 demo app's SQLite/MySQL lab instance).";
  return "Run the exact commands in your own lab terminal (own PC / VM / Docker), never against a system you do not own.";
}

export function CodePlayground({ code, compact = false, mini = false, whyRun, outputMeaning, onRan }: { code: PlayCode; compact?: boolean; mini?: boolean; whyRun?: string; outputMeaning?: string; onRan?: () => void }) {
  const store = useStore();
  const [src, setSrc] = useState(code.code);
  const [output, setOutput] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [running, setRunning] = useState(false);
  const [ranAt, setRanAt] = useState("");
  const [copied, setCopied] = useState(false);
  // EDITOR ISOLATION (bug fix, 15 Nov 2026 — "type in one place, it changes
  // in another"): this editor seeds its text from the code block it was
  // handed ONCE, so if a parent ever reuses this mounted instance for a
  // DIFFERENT code block (another lesson / lab / library sample), the old
  // text — including everything the learner typed or deleted — would leak
  // into the new place. Re-seed whenever the block's identity changes. The
  // signature compares VALUES, so a parent re-render that rebuilds an equal
  // code object never wipes in-progress typing.
  const codeSig = `${code.lang}\n${code.title}\n${code.code}`;
  const [seenSig, setSeenSig] = useState(codeSig);
  if (seenSig !== codeSig) {
    setSeenSig(codeSig);
    setSrc(code.code);
    setOutput(null);
    setIsError(false);
    setRanAt("");
    setCopied(false);
  }
  const alive = useRef(true);
  useEffect(() => { alive.current = true; return () => { alive.current = false; }; }, []);
  const meta = langMeta(code.lang);
  const isJs = meta.runKind === "browser-js";
  const isPy = meta.runKind === "browser-py";
  const isRemote = meta.runKind === "remote";
  const edited = src !== code.code;
  const lineCount = useMemo(() => src.split("\n").length, [src]);
  const highlighted = useMemo(() => highlightCode(src, meta.family), [src, meta.family]);
  const [py, setPy] = useState<PyState>(pyState());
  useEffect(() => onPyState(setPy), []);
  // BATTERY RULE: the Python engine (Pyodide, several MB of WebAssembly)
  // is NEVER loaded when a playground merely opens — not at app startup,
  // not on lesson mount. It loads only inside run() below, when the
  // learner actually presses Run on a Python box, via runPython() →
  // ensurePyodide(). A lesson you only read costs zero engine download.
  const preRef = useRef<HTMLPreElement>(null);
  const gutRef = useRef<HTMLDivElement>(null);
  const paneLabel = isJs
    ? "REAL · browser run (JavaScript)"
    : isPy
      ? py === "failed" ? "Python engine could not load" : py === "ready" || py === "loading" ? "REAL · browser run (Python · Pyodide)" : "Python · Pyodide"
      : isRemote
        ? meta.remoteService === "piston" ? "REMOTE · runs on Piston" : "REAL · remote run (Judge0)"
        : edited
          ? "NOT RUN — your edited code was not executed here (run it locally, below)"
          : "SIMULATED · verified expected output for the original lesson code — not a live run";
  const fieldId = `pg-${code.title.replace(/\W+/g, "-")}-${code.lang.replace(/\W+/g, "-")}`;

  const run = () => {
    onRan?.();
    if (isJs) {
      setRunning(true); setOutput("Running in the sandbox…");
      runJavaScriptSandboxed(src, (out, err) => {
        if (!alive.current) return;
        setRunning(false); setOutput(out); setIsError(err); setRanAt(new Date().toLocaleTimeString());
      });
    } else if (isPy) {
      setRunning(true); setOutput(py === "ready" ? "Running Python…" : "Loading the Python engine (Pyodide, first time only)…");
      void runPython(src).then((r) => {
        if (!alive.current) return;
        setRunning(false); setOutput(r.out); setIsError(r.isError); setRanAt(new Date().toLocaleTimeString());
      });
    } else if (isRemote) {
      // REAL remote run — the learner's edited code is sent to the
      // execution service (Judge0, or Piston for PowerShell) and the
      // real output / real compiler error comes back. If the service
      // is unreachable or refuses, runner.ts returns the honest error
      // + local command — never the preset lesson output.
      setRunning(true); setOutput(meta.remoteService === "piston" ? "Running on Piston…" : "Running on Judge0…");
      const hint = localCommand(code.lang);
      const p = meta.remoteService === "piston"
        ? runPiston(meta.remote ?? "powershell", src, hint)
        : runJudge0(meta.remote ?? meta.name, src, hint);
      void p.then((r) => {
        if (!alive.current) return;
        setRunning(false); setOutput(r.out); setIsError(r.isError); setRanAt(new Date().toLocaleTimeString());
      });
    } else if (edited) {
      // HONESTY RULE: edited code in a language the browser cannot execute is
      // NEVER shown the preset output as if it ran. Local command instead.
      setOutput(`⚠ Not run in this browser — ${meta.name} cannot execute here, and CyberLab will not pretend your edited code produced the lesson's preset output.\n\nRun YOUR edited code locally:\n${localCommand(code.lang)}`);
      setIsError(false);
      setRanAt(new Date().toLocaleTimeString());
    } else {
      setOutput(code.output);
      setIsError(false);
      setRanAt(new Date().toLocaleTimeString());
    }
  };

  return (
    <>
    <section aria-label={`Code Playground — ${code.title}`} className="cl-pg-in overflow-hidden rounded-xl border-2 border-cyan-800/70 shadow-[0_0_0_1px_rgba(56,189,248,0.08)]">
      <div className={`flex flex-wrap items-center gap-2 bg-gradient-to-r from-sky-950 via-[color:var(--surface2)] to-emerald-950 px-3 ${mini ? "py-1.5" : "py-2.5"}`}>
        <span className="text-base" aria-hidden="true">🧪</span>
        <h4 className="text-sm font-bold text-[color:var(--text)]">{mini ? (txI(store.profile.lang, "Compiler — run the code", "Compiler — code চালাও")) : "Code Playground — edit it, run it, see the output"}</h4>
        <LangBadge lang={code.lang} />
        <span className="ml-auto flex gap-1.5">
          <button type="button" aria-label="Copy playground code" className="min-h-[36px] rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-xs font-medium text-[color:var(--text)]"
            onClick={() => { void navigator.clipboard?.writeText(src).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1200); }); }}>{copied ? "Copied ✓" : "Copy"}</button>
          <button type="button" aria-label="Reset playground code" className="min-h-[36px] rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-xs font-medium text-[color:var(--text)]"
            onClick={() => { setSrc(code.code); setOutput(null); }}>Reset</button>
        </span>
      </div>
      <div className="flex bg-[#0b1220]">
        {/* CURSOR-LINE INVARIANT: the gutter numbers, the highlighted <pre>
            overlay and the transparent <textarea> are three renderings of the
            same text and must share IDENTICAL font size + line height +
            text width at every viewport, or the caret (textarea) drifts away
            from the glyphs (overlay) and an edit lands on the wrong line —
            the "delete removes from the line above" bug. That is why the
            gutter and overlay carry .cl-editor-overlay (theme.css grows them
            with the textarea under the ≤640px 16px rule) and the textarea
            carries .cl-editor-scroll (no scrollbar width, so both layers
            wrap at the same points). Do not change one layer's metrics
            without the others. */}
        <div aria-hidden="true" className="cl-editor-overlay select-none overflow-hidden py-3 pl-3 pr-2 text-right font-mono text-[12.5px] leading-[1.55] text-slate-500"><div ref={gutRef}>{Array.from({ length: lineCount }, (_, i) => <div key={i}>{i + 1}</div>)}</div></div>
        <label className="sr-only" htmlFor={fieldId}>Editable code — {code.title} ({meta.name})</label>
        <div className="relative min-w-0 flex-1">
          <pre ref={preRef} aria-hidden="true" className="cl-editor-overlay pointer-events-none absolute inset-0 overflow-hidden whitespace-pre-wrap py-3 pr-3 font-mono text-[12.5px] leading-[1.55] text-[#dbeafe] [word-break:break-word]" dangerouslySetInnerHTML={{ __html: highlighted + "\n" }} />
          <textarea id={fieldId} value={src} onChange={(e) => setSrc(e.target.value)} spellCheck={false} autoComplete="off"
            rows={mini ? Math.min(7, Math.max(3, lineCount)) : compact ? Math.min(12, Math.max(8, lineCount)) : Math.min(18, Math.max(6, lineCount))}
            onScroll={(e) => { const t = e.currentTarget; if (preRef.current) { preRef.current.scrollTop = t.scrollTop; preRef.current.scrollLeft = t.scrollLeft; } if (gutRef.current) { gutRef.current.style.transform = `translateY(${-t.scrollTop}px)`; } }}
            className="cl-editor-scroll relative w-full resize-y whitespace-pre-wrap bg-transparent py-3 pr-3 font-mono text-[12.5px] leading-[1.55] text-transparent caret-[#dbeafe] outline-none [word-break:break-word]" />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 border-t border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5">
        <button type="button" onClick={run} disabled={running} className="min-h-[46px] rounded-lg bg-emerald-600 px-5 py-2 text-[15px] font-bold text-white shadow hover:bg-emerald-500 disabled:opacity-50" aria-label="Run code">{running ? "Running…" : "▶ Run"}</button>
        {isPy && py === "loading" ? <span className="text-xs font-medium text-[color:var(--dim)]">Loading Python engine…</span> : edited ? <span className="text-xs font-medium text-amber-300">● Code edited — Reset restores the lesson version</span> : <span className="text-xs text-[color:var(--dim)]">Try changing a value, then Run again.</span>}
        {ranAt ? <span className="ml-auto text-xs text-[color:var(--dim)]">Last run {ranAt}</span> : null}
        {whyRun ? <p className="w-full text-xs leading-relaxed text-[color:var(--dim)]"><span className="font-bold text-[color:var(--text)]">{txI(store.profile.lang, "Why run this? ", "কেন চালাবে? ")}</span>{whyRun}</p> : null}
      </div>
      <div className={`border-t border-[color:var(--border)] ${isError && output !== null ? "bg-red-950/40" : "bg-[#070b12]"}`} aria-live="polite">
        <p className="flex flex-wrap items-center gap-2 px-3 pt-2 text-[11px] font-bold tracking-wide text-[color:var(--dim)]">
          <span>OUTPUT</span>
          <span className={`rounded-full border px-2 py-0.5 ${isError && output !== null ? "border-red-800 text-red-300" : "border-emerald-800 text-emerald-300"}`}>{output === null ? paneLabel : isError ? (isPy ? "REAL · browser run (Python) — error" : isJs ? "REAL · browser run — error" : paneLabel) : paneLabel}</span>
        </p>
        <pre key={ranAt || "idle"} className={`cl-out-in ${mini ? "max-h-[170px]" : "max-h-[320px]"} overflow-auto whitespace-pre-wrap px-3 pb-3 pt-1.5 font-mono text-[12.5px] leading-relaxed text-[#c9f5dd]`}>{output ?? (mini ? "Press ▶ Run — the output appears here." : "No output yet — press ▶ Run and the result appears here, directly under the code.")}</pre>
        {outputMeaning ? <p className="border-t border-emerald-900/60 px-3 py-2 text-xs leading-relaxed text-[#a7f3d0]"><span className="font-bold text-white">{txI(store.profile.lang, "What this output means: ", "এই output-এর মানে: ")}</span>{outputMeaning}</p> : null}
      </div>
      {mini ? (
      <p className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-[11.5px] leading-snug text-[color:var(--dim)]">
        <strong className="text-[color:var(--text)]">{txI(store.profile.lang, "Run it on your own PC: ", "নিজের PC-তে চালাও: ")}</strong>{localCommand(code.lang)}
      </p>
      ) : (
      <p className="border-t border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-xs leading-relaxed text-[color:var(--dim)]">
        <strong className="text-[color:var(--text)]">Run in your own lab:</strong> {localCommand(code.lang)}
        {isJs ? <> · JavaScript really executes in a sandboxed frame with no access to this app — your edited code included, errors included.</>
          : isPy ? <> · Python really executes in your browser via Pyodide (CPython in WebAssembly) — your code never leaves this device. If the engine cannot load, you get an honest message here, never a fake output.</>
          : isRemote ? <> · {meta.name} really executes on the {meta.remoteService === "piston" ? "Piston" : "Judge0"} execution service — only your code is sent there, and the real output (or the real compiler error) comes back, for your edited code too. If the service is unreachable, you get an honest error here, never a fake output. Never put passwords or secrets in code you run remotely.</>
          : edited ? <> · You edited this code: this browser cannot run {meta.name}, so your version was NOT executed here and its preset output is not shown as if it were yours — use the local command above for your real output.</>
          : <> · This browser cannot execute {meta.name} natively, so the pane shows the verified expected output for the exact lesson code — edit the code and the pane will honestly switch to local-run guidance instead.</>}
      </p>
      )}
    </section>
    </>
  );
}
