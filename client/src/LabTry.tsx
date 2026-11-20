// LabTry — the "try it yourself" box that lives INSIDE a lab / guided lab,
// right next to the sample it belongs to. Honesty rules, same as everywhere
// in CyberLab:
//   JavaScript / Python → REAL run in the browser (CodePlayground: sandboxed
//     JS iframe / Pyodide CPython). Output is the real output of the edited
//     code, errors included.
//   HTML → live preview in a sandboxed frame in the browser.
//   C, C++, Java, Bash, Kotlin, SQL, TypeScript → REAL run on the Judge0
//     execution service via CodePlayground (see runner.ts) — the whole
//     sample script runs as one real program, errors included. (v48: Bash
//     samples used to go through a SIMULATED terminal here; they really
//     execute now. The separate Cyber Terminal view stays a labelled
//     SIMULATED practice terminal — it is not a code runner.)
//   PowerShell → attempted REAL run on Piston via CodePlayground; Piston's
//     public API is currently whitelist-only, so until that changes the
//     learner sees Piston's own refusal + the exact local command — never
//     a simulated output dressed up as a run.
//   Non-executable samples (markup, config, text) → the CodePlayground's
//     honest mode: verified expected output for the original code,
//     local-run guidance for edited code. Nothing is faked.

import { useState } from "react";
import { CodePlayground, langMeta, type PlayCode } from "./Playground";
import { FormatSample, isSampleContent } from "./SampleBlock";

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
 * real browser run (JS/Python), live preview (HTML), real remote run
 * (C/Java/Bash/… on Judge0, PowerShell attempted on Piston), or the playground's verified-output
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
    ? (meta.family === "powershell"
        ? (isBn ? "REMOTE RUN · PowerShell Piston-এ চলে" : "REMOTE RUN · PowerShell runs on Piston")
        : (isBn ? "আসল RUN · Bash Judge0-তে চলে" : "REAL RUN · Bash runs on Judge0"))
    : isHtml
      ? (isBn ? "LIVE PREVIEW · browser-এই চলে" : "LIVE PREVIEW · runs in your browser")
      : meta.runKind === "browser-js"
        ? (isBn ? "আসল RUN · JavaScript তোমার browser-এ চলে" : "REAL RUN · JavaScript runs in your browser")
        : meta.runKind === "browser-py"
          ? (isBn ? "আসল RUN · Python তোমার browser-এ চলে (Pyodide)" : "REAL RUN · Python runs in your browser (Pyodide)")
          : meta.runKind === "remote"
            ? (isBn ? "আসল RUN · Judge0-তে চলে" : "REAL RUN · runs on Judge0")
            : (isBn ? "EDIT + RUN · verified output + নিজের PC-তে চালানোর command" : "EDIT + RUN · verified output + local-run command");
  const instruction = isShell
    ? (isBn ? "পাশের sample-টাই format — try area-তে পুরো script-টা edit করে Run চাপো — script-টা সত্যিই execution service-এ একটা আসল program হিসেবে চলবে আর আসল output নিচে আসবে, error হলেও আসল error-ই দেখাবে। একটা-একটা command টাইপ করে practice করতে চাইলে Cyber Terminal (SIMULATED বলে label করা) আর নিজের PC-র terminal আছে।"
      : "The sample beside this is the exact format to follow: edit the whole script in the try area and press Run — the script really executes as one real program on the execution service and the real output appears below, real errors included. For typing commands one by one, use the Cyber Terminal (labelled SIMULATED) or a terminal on your own PC.")
    : isHtml
      ? (isBn ? "পাশের sample-টা দেখে try area-তে edit করে Run চাপো — তোমার বদলানো HTML-ই browser-এ render হবে, আসল preview সহ।"
        : "Use the sample beside this as your starting format: edit it in the try area and press Run — your edited HTML renders right here in the browser, a real preview.")
      : meta.runKind === "browser-js" || meta.runKind === "browser-py"
        ? (isBn ? "পাশের sample-টাই format — try area-তে edit করো, Run চাপো — code সত্যিই তোমার browser-এ চলবে আর আসল output নিচে আসবে, error হলেও error-ই দেখাবে।"
          : "The sample beside this is the exact format to follow: edit it in the try area, press Run — the code really executes in your browser and the real output appears below, errors included.")
        : meta.runKind === "remote"
          ? (isBn ? "পাশের sample-টাই format — try area-তে edit করে Run চাপো — code সত্যিই execution service-এ চলবে আর আসল output নিচে আসবে, compiler error হলেও আসল error-ই দেখাবে।"
            : "The sample beside this is the exact format to follow: edit it in the try area and press Run — the code really executes on the execution service and the real output appears below, compiler errors included.")
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
          {isHtml ? <HtmlTryBox code={code} isBn={isBn} onRan={onRan} />
            : <CodePlayground code={code} compact onRan={onRan} />}
        </div>
      </div>
    </section>
  );
}
