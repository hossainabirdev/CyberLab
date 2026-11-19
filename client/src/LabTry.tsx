// LabTry — the "try it yourself" box that lives INSIDE a lab / guided lab,
// right next to the sample it belongs to. Honesty rules, same as everywhere
// in CyberLab:
//   JavaScript / Python → REAL run in the browser (CodePlayground: sandboxed
//     JS iframe / Pyodide CPython). Output is the real output of the edited
//     code, errors included.
//   HTML → live preview in a sandboxed frame in the browser.
//   PowerShell / Bash / CMD samples → a SIMULATED terminal: the browser
//     cannot touch the learner's real PC, so commands print realistic
//     simulated output, the pane is labelled SIMULATED at all times, and a
//     "try on your own PC" step below carries the exact copy-paste commands.
//     Simulated output is never presented as a real run.
//   Any other language (C, SQL, …) → the CodePlayground's honest mode:
//     verified expected output for the original code, local-run guidance
//     for edited code. Nothing is faked.

import { useEffect, useRef, useState } from "react";
import { tx as txI } from "./i18n";
import { getState } from "./store";
import { CodePlayground, langMeta, localCommand, type PlayCode } from "./Playground";
import { FormatSample, isSampleContent } from "./SampleBlock";
import { runLinuxSim, runWindowsSim } from "./Terminal";

/** Runnable lines of a sample block: no blanks, no comment-only lines, no
 * bare shell keywords; inline trailing comments stripped for shells. */
export function sampleCommands(code: PlayCode): string[] {
  const shellish = /bash|powershell|shell|cmd/i.test(code.lang);
  const out: string[] = [];
  for (const raw of code.code.split("\n")) {
    let line = raw.trim();
    if (!line) continue;
    if (line.startsWith("#") || line.startsWith("//") || line.startsWith("--")) continue;
    if (shellish) {
      const hash = line.indexOf(" #");
      if (hash > 0 && !line.slice(0, hash).includes('"') && !line.slice(0, hash).includes("'")) line = line.slice(0, hash).trim();
    }
    if (/^(then|fi|do|done|else|elif|\{|\}|esac)$/i.test(line)) continue;
    if (line.length < 2) continue;
    out.push(line);
    if (out.length >= 6) break;
  }
  return out;
}

const norm = (s: string) => s.trim().replace(/\s+/g, " ").toLowerCase();

/* PowerShell inspection cmdlets the generic simulator does not know, with
 * outputs matching the SIMULATED lab machine profile used across CyberLab
 * (Windows 11 Pro 23H2 · 8 GB RAM · GPT · Secure Boot OFF · TPM present). */
const PS_EXTRAS: { head: string; out: string }[] = [
  { head: "get-computerinfo", out: "WindowsProductName    : Windows 11 Pro\nOsVersion             : 10.0.22631 (23H2)\nCsTotalPhysicalMemory : 8589934592" },
  { head: "get-disk", out: "Number  FriendlyName   PartitionStyle   Size\n------  ------------   --------------   ----\n0       Internal SSD   GPT              476.9 GB" },
  { head: "confirm-securebootuefi", out: "False" },
  { head: "get-tpm", out: "TpmPresent : True\nTpmReady   : True" },
];

function SimTerminal({ code, isBn, onRan }: { code: PlayCode; isBn: boolean; onRan?: () => void }) {
  const meta = langMeta(code.lang);
  const mode: "linux" | "cmd" | "ps" = meta.family === "powershell" || /powershell/i.test(code.lang) ? "ps" : meta.family === "bash" || /bash|shell/i.test(code.lang) ? "linux" : "cmd";
  // Display name follows the resolved mode, not langMeta: "powershell"
  // contains "shell", so langMeta mislabels pure PowerShell blocks as Bash.
  const shellName = mode === "ps" ? "PowerShell" : mode === "linux" ? "Bash" : "CMD";
  const samples = sampleCommands(code);
  const initialLines = (): string[] => [
    isBn
      ? `SIMULATED ${shellName} terminal — কোনো command-ই তোমার আসল PC-তে চলে না।`
      : `SIMULATED ${shellName} terminal — no command here runs on your real PC.`,
    isBn
      ? "নিচের sample command গুলোর একটি লেখো (বা chip-এ tap করো), তারপর Enter / Run চাপো।"
      : "Type one of the sample commands below (or tap a chip), then press Enter / Run.",
  ];
  const [cwd, setCwd] = useState("/home/learner");
  const [lines, setLines] = useState<string[]>(initialLines);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const [copied, setCopied] = useState(false);
  const [copiedMine, setCopiedMine] = useState(false);
  // EDITOR ISOLATION (bug fix, 15 Nov 2026 — same rule as CodePlayground):
  // if this mounted terminal is ever handed a DIFFERENT sample, its lines,
  // input, history and cwd belong to the old sample and must reset — typed
  // or deleted text from one place must never appear in another.
  const codeSig = `${code.lang}\n${code.title}\n${code.code}`;
  const [seenSig, setSeenSig] = useState(codeSig);
  if (seenSig !== codeSig) {
    setSeenSig(codeSig);
    setCwd("/home/learner");
    setLines(initialLines());
    setInput("");
    setHistory([]);
    setHIdx(-1);
    setCopied(false);
    setCopiedMine(false);
  }
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight }); }, [lines]);

  const prompt = mode === "linux" ? `learner@cyberlab-vm:${cwd.replace("/home/learner", "~")}$` : mode === "cmd" ? "C:\\Users\\learner>" : "PS C:\\Users\\learner>";

  const resolve = (rawCmd: string): string => {
    const cmd = rawCmd.trim();
    const n = norm(cmd);
    if (!cmd) return "";
    // 1) Lab inspection cmdlets with profile-accurate simulated output.
    if (mode === "ps") {
      for (const ex of PS_EXTRAS) if (n.startsWith(ex.head)) return ex.out;
    }
    // 2) Exact sample line → the sample's verified expected output.
    const exact = samples.find((sc) => norm(sc) === n);
    if (exact) return `${txI(getState().profile.lang, "(simulated) verified output for this lesson's sample:", "(simulated) sample-টির verified output:")}\n${code.output}`;
    // 3) The shared simulated interpreter (same one as the Cyber Terminal).
    const generic = mode === "linux" ? runLinuxSim(cmd, cwd, setCwd) : runWindowsSim(cmd, mode);
    const notFound = generic.includes("command not found") || generic.includes("is not recognized as an internal or external command");
    if (!notFound) return generic;
    // 4) Same command family as a sample line → the sample's verified output.
    const firstTok = n.split(" ")[0] ?? "";
    if (firstTok && samples.some((sc) => norm(sc).split(" ")[0] === firstTok)) {
      return `${isBn ? "(simulated) এই command sample-এর অংশ — sample-টির verified output:" : "(simulated) that command is part of this lesson's sample — its verified output:"}\n${code.output}`;
    }
    // 5) Realistic not-found, plus the way back to the sample.
    return `${generic}${samples.length ? (isBn ? `\nএই lab-এর sample command: ${samples.join(" · ")}` : `\nSample commands in this lab: ${samples.join(" · ")}`) : ""}`;
  };

  const run = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;
    onRan?.();
    const out = resolve(cmd);
    if (out === "__CLEAR__") setLines([]);
    else setLines((l) => [...l, `${prompt} ${cmd}`, ...(out ? out.split("\n") : [])]);
    setHistory((h) => [cmd, ...h].slice(0, 30));
    setHIdx(-1);
  };

  const runAll = () => {
    for (const sc of samples) run(sc);
  };

  return (
    <div>
      <div className="overflow-hidden rounded-xl border-2 border-slate-600 bg-[#07090d] shadow-lg">
        <div className="flex items-center gap-1.5 bg-[#111827] px-3 py-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-red-500" /><span className="h-3 w-3 rounded-full bg-amber-400" /><span className="h-3 w-3 rounded-full bg-emerald-500" />
          <span className="ml-2 font-mono text-[11px] text-slate-300">{mode === "linux" ? "bash" : mode === "cmd" ? "cmd.exe" : "PowerShell"} · {code.title} · SIMULATED</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-700 bg-[#0b1220] px-3 py-2">
          <span className="rounded-full border border-amber-700 px-2 py-0.5 text-[11px] font-bold text-amber-300">{isBn ? "SIMULATED — আসল shell নয়" : "SIMULATED — not a real shell"}</span>
          {samples.length ? (
            <button type="button" onClick={runAll} className="ml-auto min-h-[44px] rounded-lg bg-emerald-600 px-3.5 py-2 text-[13px] font-bold text-white" aria-label={isBn ? "সব sample command একে একে চালাও" : "Run all sample commands in order"}>
              ▶ {isBn ? "Sample command গুলো চালাও" : "Run the sample commands"}
            </button>
          ) : null}
        </div>
        {samples.length ? (
          <div className="flex flex-wrap gap-1.5 border-b border-slate-700 bg-[#0b1220] px-3 py-2" aria-label={isBn ? "Sample command সমূহ" : "Sample commands"}>
            {samples.map((sc) => (
              <button key={sc} type="button" onClick={() => run(sc)} aria-label={`${isBn ? "এই command চালাও" : "Run this command"}: ${sc}`}
                className="min-h-[44px] max-w-full truncate rounded-full border border-slate-600 px-3 py-1.5 font-mono text-[12px] text-sky-200">{sc}</button>
            ))}
          </div>
        ) : null}
        <div ref={scrollRef} className="h-[240px] overflow-y-auto p-3 font-mono text-[12.5px] leading-relaxed text-[#c9d6e3] sm:h-[280px]" onClick={() => inputRef.current?.focus()}>
          {lines.map((l, i) => <div key={i} className="whitespace-pre-wrap break-words">{l}</div>)}
          <form className="mt-1 flex items-center gap-2" onSubmit={(e) => { e.preventDefault(); run(input); setInput(""); }}>
            <span className="shrink-0 text-sky-300">{prompt}</span>
            <input ref={inputRef} value={input} aria-label={isBn ? "Simulated terminal command লেখো" : "Type a simulated terminal command"}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "ArrowUp") { e.preventDefault(); const nx = Math.min(hIdx + 1, history.length - 1); if (history[nx]) { setHIdx(nx); setInput(history[nx]!); } }
                if (e.key === "ArrowDown") { e.preventDefault(); const nx = hIdx - 1; setHIdx(Math.max(nx, -1)); setInput(nx >= 0 ? (history[nx] ?? "") : ""); }
              }}
              className="min-h-[44px] w-full min-w-0 flex-1 bg-transparent font-mono text-base text-[#e6edf3] outline-none" autoComplete="off" spellCheck={false} />
            <button type="submit" className="min-h-[44px] shrink-0 rounded-lg bg-[color:var(--accent2)] px-3.5 py-2 text-[13px] font-bold text-white" aria-label={isBn ? "Command চালাও" : "Run command"}>Run</button>
          </form>
        </div>
      </div>
      {/* Try on your own PC — the step that makes it real */}
      <div className="cl-callout cl-callout-note mt-3 text-sm leading-relaxed text-[color:var(--dim)]">
        <p className="cl-callout-title">{isBn ? "ধাপ · এবার নিজের আসল PC-তে try করো" : "Step · Now try it on your own real PC"}</p>
        <p className="mt-1">{isBn
          ? "Browser তোমার PC ছুঁতে পারে না — তাই আসল অনুশীলনটা নিজের machine-এ: নিজের PC-তে (বা নিজের VM / emulator-এ) terminal খুলে ঠিক এই command গুলো paste করে চালাও, আর নিজের আসল output-টা simulated output-এর সঙ্গে মেলাও। শুধু নিজের machine-এই — অন্য কারো সিস্টেমে কখনো নয়।"
          : "The browser cannot touch your PC — so the real practice happens on your machine: open a terminal on your own PC (or your own VM / emulator), paste these exact commands, run them, and compare your real output with the simulated one above. Your own machine only — never anyone else's system."}</p>
        <pre className="mono mt-2 max-h-[180px] overflow-auto whitespace-pre-wrap rounded-md border border-[color:var(--border)] bg-[color:var(--surface2)] px-2.5 py-2 text-[12.5px] text-[color:var(--text)]">{code.code}</pre>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button type="button" aria-label={isBn ? "নিজের PC-র জন্য command গুলো copy করো" : "Copy the commands for your own PC"}
            onClick={() => { void navigator.clipboard?.writeText(code.code).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1400); }); }}
            className="min-h-[44px] rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-2 text-sm font-semibold text-[color:var(--text)]">
            {copied ? (isBn ? "Copy হয়েছে ✓" : "Copied ✓") : (isBn ? "Command গুলো copy করো" : "Copy the commands")}
          </button>
          <span className="text-[13px]">{localCommand(code.lang)}</span>
        </div>
        {history.length ? (
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <button type="button" aria-label={isBn ? "নিজের লেখা command গুলো copy করো" : "Copy the commands you typed"}
              onClick={() => { void navigator.clipboard?.writeText([...history].reverse().join("\n")).then(() => { setCopiedMine(true); setTimeout(() => setCopiedMine(false), 1400); }); }}
              className="min-h-[44px] rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-2 text-sm font-semibold text-[color:var(--text)]">
              {copiedMine ? (isBn ? "Copy হয়েছে ✓" : "Copied ✓") : (isBn ? "আমার লেখা command গুলো copy করো" : "Copy my typed commands")}
            </button>
            <span className="text-[13px]">{isBn ? `${history.length}টি command তুমি নিজে লিখে চালিয়েছ` : `${history.length} command(s) you typed and ran yourself`}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function HtmlTryBox({ code, isBn, onRan }: { code: PlayCode; isBn: boolean; onRan?: () => void }) {
  const [src, setSrc] = useState(code.code);
  const [preview, setPreview] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  // EDITOR ISOLATION (bug fix, 15 Nov 2026 — same rule as CodePlayground):
  // a different HTML sample handed to this mounted box starts fresh.
  const codeSig = `${code.lang}\n${code.title}\n${code.code}`;
  const [seenSig, setSeenSig] = useState(codeSig);
  if (seenSig !== codeSig) {
    setSeenSig(codeSig);
    setSrc(code.code);
    setPreview(null);
    setCopied(false);
  }
  return (
    <section aria-label={`HTML try box — ${code.title}`} className="overflow-hidden rounded-xl border-2 border-cyan-800/70">
      <div className="flex flex-wrap items-center gap-2 bg-gradient-to-r from-sky-950 via-[color:var(--surface2)] to-emerald-950 px-3 py-2.5">
        <span className="text-base" aria-hidden="true">🧪</span>
        <h4 className="text-sm font-bold text-[color:var(--text)]">{code.title}</h4>
        <span className="rounded-full border border-emerald-800 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">{isBn ? "LIVE PREVIEW · তোমার browser-এই render হয়" : "LIVE PREVIEW · renders in your browser"}</span>
      </div>
      <label className="sr-only" htmlFor={`htmltry-${code.title.replace(/\W+/g, "-")}`}>{isBn ? "HTML code edit করো" : "Edit the HTML code"} — {code.title}</label>
      <textarea id={`htmltry-${code.title.replace(/\W+/g, "-")}`} value={src} onChange={(e) => setSrc(e.target.value)} spellCheck={false} autoComplete="off" rows={11}
        className="w-full resize-y whitespace-pre-wrap bg-[#0b1220] px-3 py-3 font-mono text-[13px] leading-[1.6] text-[#dbeafe] outline-none [word-break:break-word]" />
      <div className="flex flex-wrap items-center gap-3 border-t border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5">
        <button type="button" onClick={() => { setPreview(src); onRan?.(); }} className="min-h-[46px] rounded-lg bg-emerald-600 px-5 py-2 text-[15px] font-bold text-white shadow hover:bg-emerald-500" aria-label={isBn ? "HTML preview চালাও" : "Run the HTML preview"}>▶ Run</button>
        <span className="text-xs text-[color:var(--dim)]">{isBn ? "Code বদলে আবার Run চাপো — preview সাথে সাথে বদলাবে।" : "Edit the code and press Run again — the preview updates."}</span>
        <button type="button" onClick={() => { void navigator.clipboard?.writeText(src).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1400); }); }} className="min-h-[44px] rounded-lg border border-[color:var(--border)] px-3 py-1.5 text-xs font-medium text-[color:var(--text)]" aria-label={isBn ? "নিজের HTML code copy করো" : "Copy your HTML code"}>{copied ? (isBn ? "Copy হয়েছে ✓" : "Copied ✓") : (isBn ? "Copy করো" : "Copy")}</button>
        <button type="button" onClick={() => { setSrc(code.code); setPreview(null); }} className="min-h-[44px] rounded-lg border border-[color:var(--border)] px-3 py-1.5 text-xs font-medium text-[color:var(--text)]" aria-label={isBn ? "আসল code ফিরিয়ে আনো" : "Reset to the original code"}>{isBn ? "Reset" : "Reset"}</button>
      </div>
      {preview !== null ? (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--surface)] p-3">
          <p className="mb-2 text-[11px] font-bold tracking-wide text-[color:var(--dim)]">{isBn ? "LIVE PREVIEW (sandboxed)" : "LIVE PREVIEW (sandboxed)"}</p>
          <iframe title={isBn ? "HTML live preview" : "HTML live preview"} sandbox="allow-scripts" srcDoc={preview} className="h-64 w-full rounded-lg border border-[color:var(--border)] bg-white" />
        </div>
      ) : (
        <p className="border-t border-[color:var(--border)] bg-[#070b12] px-3 py-2.5 font-mono text-[12.5px] text-[#c9f5dd]">{isBn ? "এখনো preview নেই — ▶ Run চাপলেই তোমার HTML এখানে render হবে।" : "No preview yet — press ▶ Run and your HTML renders here."}</p>
      )}
    </section>
  );
}

/** The in-lab try box. Picks the honest runner for the sample's language:
 * real browser run (JS/Python), live preview (HTML), simulated terminal
 * (PowerShell/Bash/CMD) + own-PC step, or the playground's verified-output
 * mode for the remaining languages. Renders nothing when there is no code. */
export function LabTryBox({ code, isBn, onRan }: { code: PlayCode; isBn: boolean; onRan?: () => void }) {
  const [sampleCopied, setSampleCopied] = useState(false);
  if (!code || !code.code || !code.code.trim()) return null;
  // v26 playground audit: a written sample (note / email / report / tool
  // file) is NOT code — it gets its proper format block with Copy and NO
  // Run button and NO fake output, in lessons, labs and missions alike.
  // Copying it is the hands-on step (onRan), exactly like Run is for code.
  if (isSampleContent(code)) {
    return (
      <section aria-label={isBn ? "নিজে লেখো — সঠিক format-এ" : "Write it yourself — in the right format"} className="mt-4">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <h4 className="text-[15px] font-bold text-[color:var(--text)]">✍️ {isBn ? "নিজে লেখো — সঠিক format-এ" : "Write it yourself — in the right format"}</h4>
          <span className="rounded-full border border-amber-700 px-2 py-0.5 text-[11px] font-bold text-amber-500">{isBn ? "TEXT SAMPLE · Run নেই — চালানোর কিছু নেই" : "TEXT SAMPLE · no Run — nothing to execute"}</span>
        </div>
        <p className="mb-3 max-w-[75ch] text-[13px] leading-relaxed text-[color:var(--dim)]">{isBn
          ? "এই কাজটি code নয়, লেখা: নিচের sample-টি ঠিক যে format-এ তুমি নিজে লিখবে সেই format-এই দেখানো হয়েছে। Copy করে Notepad / email app / নাম করা file-এ বসাও, example-এর value গুলোর জায়গায় নিজের আসল value বসাও, আর format-টি হুবহু রাখো।"
          : "This piece of work is writing, not code: the sample below is shown in exactly the format you will write it in yourself. Copy it into Notepad, your email app, or a file with the name shown, replace the example values with your own real ones, and keep the format exactly."}</p>
        <FormatSample code={code} onCopy={onRan} />
        {code.output && code.output.trim() ? (
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{isBn ? "তোমার তৈরি লেখাটি যা দেবে: " : "What your finished piece gives you: "}</strong>{code.output}</p>
        ) : null}
      </section>
    );
  }
  const meta = langMeta(code.lang);
  const isShell = meta.family === "bash" || meta.family === "powershell" || /(^|\b)cmd\b/i.test(code.lang);
  const isHtml = meta.family === "markup" && /html/i.test(code.lang);
  const kindChip = isShell
    ? (isBn ? "SIMULATED TERMINAL · + নিজের PC-তে করার ধাপ" : "SIMULATED TERMINAL · + try-on-your-own-PC step")
    : isHtml
      ? (isBn ? "LIVE PREVIEW · browser-এই চলে" : "LIVE PREVIEW · runs in your browser")
      : meta.runKind === "browser-js"
        ? (isBn ? "আসল RUN · JavaScript তোমার browser-এ চলে" : "REAL RUN · JavaScript runs in your browser")
        : meta.runKind === "browser-py"
          ? (isBn ? "আসল RUN · Python তোমার browser-এ চলে (Pyodide)" : "REAL RUN · Python runs in your browser (Pyodide)")
          : (isBn ? "EDIT + RUN · verified output + নিজের PC-তে চালানোর command" : "EDIT + RUN · verified output + local-run command");
  const instruction = isShell
    ? (isBn ? "পাশের sample-টা দেখো, তারপর try area-তে নিজে command লিখে try করো — output simulated, কারণ browser তোমার আসল PC-তে কিছু চালাতে পারে না। Try area-র নিচে নিজের PC-তে আসলেই করার ধাপ দেওয়া আছে।"
      : "Look at the sample beside this, then type the commands yourself in the try area — the output is simulated, because a browser cannot run anything on your real PC. The step under the try area takes the same commands to your own PC for real.")
    : isHtml
      ? (isBn ? "পাশের sample-টা দেখে try area-তে edit করে Run চাপো — তোমার বদলানো HTML-ই browser-এ render হবে, আসল preview সহ।"
        : "Use the sample beside this as your starting format: edit it in the try area and press Run — your edited HTML renders right here in the browser, a real preview.")
      : meta.runKind === "browser-js" || meta.runKind === "browser-py"
        ? (isBn ? "পাশের sample-টাই format — try area-তে edit করো, Run চাপো — code সত্যিই তোমার browser-এ চলবে আর আসল output নিচে আসবে, error হলেও error-ই দেখাবে।"
          : "The sample beside this is the exact format to follow: edit it in the try area, press Run — the code really executes in your browser and the real output appears below, errors included.")
        : (isBn ? "পাশের sample-টাই format — try area-তে edit করে Run চাপো — এই ভাষা browser-এ চলে না, তাই আসল code-এর verified output দেখানো হয়; তোমার বদলানো version নিজের PC-তে চালানোর সঠিক command try area-র নিচে দেওয়া থাকে।"
          : "The sample beside this is the exact format to follow: edit it in the try area and press Run — this language cannot execute in a browser, so you get the verified output for the original code, and the exact local command for running your edited version on your own PC.");
  const sampleLines = code.code.replace(/\n+$/, "").split("\n");
  const outputLines = (code.output ?? "").replace(/\n+$/, "").split("\n").filter((l) => l.trim() !== "");
  return (
    <section aria-label={isBn ? "নিজে try করো — এই Lab-এর ভেতরে" : "Try it yourself — inside this lab"} className="mt-4">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <h4 className="text-[15px] font-bold text-[color:var(--text)]">🧪 {isBn ? "নিজে try করো — এই Lab-এর ভেতরেই" : "Try it yourself — right inside this lab"}</h4>
        <span className="rounded-full border px-2 py-0.5 text-[11px] font-bold" style={{ borderColor: "var(--c-lab)", color: "var(--c-lab)" }}>{kindChip}</span>
      </div>
      {/* Guide beside the try area: on desktop the instruction + exact
          sample/format sit in a left column next to the runner, so the
          learner can see what to type WHILE typing; on phones the same
          panel stacks directly above the try area. */}
      <div className="grid items-start gap-3 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="min-w-0 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5" aria-label={isBn ? "নির্দেশনা ও sample" : "Instruction and sample"}>
          <p className="flex items-center gap-2 text-sm font-bold text-[color:var(--text)]">📋 {isBn ? "কী লিখবে — নির্দেশনা ও format" : "What to type — instruction & format"}</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-[color:var(--dim)]">{instruction}</p>
          <p className="mb-1.5 mt-3 text-[11px] font-bold tracking-wide text-[color:var(--dim)]">{isBn ? "SAMPLE — ঠিক এই format-এ লিখবে" : "SAMPLE — type it in exactly this format"} · {code.title} ({meta.name})</p>
          <pre className="mono max-h-[300px] overflow-auto whitespace-pre-wrap rounded-md border border-[color:var(--border)] bg-[color:var(--surface2)] px-2.5 py-2 text-[12.5px] leading-relaxed text-[color:var(--text)] [word-break:break-word]">{sampleLines.join("\n")}</pre>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <button type="button" aria-label={isBn ? "Sample copy করো" : "Copy the sample"}
              onClick={() => { void navigator.clipboard?.writeText(code.code).then(() => { setSampleCopied(true); setTimeout(() => setSampleCopied(false), 1400); }); }}
              className="min-h-[44px] rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-2 text-sm font-semibold text-[color:var(--text)]">
              {sampleCopied ? (isBn ? "Copy হয়েছে ✓" : "Copied ✓") : (isBn ? "Sample copy করো" : "Copy the sample")}
            </button>
            <span className="text-[12px] text-[color:var(--dim)]">{isBn ? "Copy করে try area-তে paste করে শুরু করতে পারো, তারপর বদলে experiment করো।" : "Copy it, paste it into the try area to start, then change it and experiment."}</span>
          </div>
          {outputLines.length ? (
            <>
              <p className="mb-1.5 mt-3 text-[11px] font-bold tracking-wide text-[color:var(--dim)]">{isBn ? "যা দেখতে পাওয়ার কথা (sample-এর output, প্রথম লাইন গুলো)" : "WHAT YOU SHOULD SEE (the sample's output, first lines)"}</p>
              <pre className="mono max-h-[150px] overflow-auto whitespace-pre-wrap rounded-md border border-[color:var(--border)] bg-[#070b12] px-2.5 py-2 text-[12px] leading-relaxed text-[#c9f5dd] [word-break:break-word]">{outputLines.slice(0, 6).join("\n")}</pre>
            </>
          ) : null}
        </div>
        <div className="min-w-0">
          {isShell ? <SimTerminal code={code} isBn={isBn} onRan={onRan} />
            : isHtml ? <HtmlTryBox code={code} isBn={isBn} onRan={onRan} />
            : <CodePlayground code={code} compact onRan={onRan} />}
        </div>
      </div>
    </section>
  );
}
