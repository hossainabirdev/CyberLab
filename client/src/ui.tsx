import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { recordAttempt, getState, saveProfileLocal, subscribe, type LocalState } from "./store";
import type { QuizQ } from "./catalog";
import type { Practical } from "./catalog3";
import { QUIZ_OPTIONS_BN, PRACTICAL_OPTIONS_BN } from "./bn-options";
import { tx, sectionOrderText } from "./i18n";
import { LANG_LABELS, LANG_ORDER, LANG_SHORT, SECTION_ORDER, type LangMode } from "./lang";

export const PASS = 70;

export function useStore(): LocalState {
  return useSyncExternalStore(subscribe, getState, getState);
}

export function isDone(s: LocalState, kind: string, id: string): boolean {
  return s.progress.some((p) => p.kind === kind && p.contentId === id);
}

/** One line, one language: the active language's line INSTEAD of the
    English one — never both together. Bangla uses the bn prop; Spanish,
    German, Chinese and Hindi resolve through the i18n packs. */
export function Bi({ en, bn, className = "", enClass = "", bnClass = "" }: { en: string; bn?: string; className?: string; enClass?: string; bnClass?: string }) {
  const s = useStore();
  const lang = s.profile.lang;
  if (lang === "bn" && bn) return <p className={`${className} ${bnClass}`}>{bn}</p>;
  return <p className={`${className} ${enClass}`}>{tx(lang, en, bn)}</p>;
}

/** Pick the active language's string. */
export function useTx(): (en: string, bn?: string) => string {
  const s = useStore();
  const lang = s.profile.lang;
  return (en: string, bn?: string) => tx(lang, en, bn);
}

export function SectionTitle({ children, sub, bn, bnSub, orderEn, orderBn, eyebrow }: { children: React.ReactNode; sub?: string; bn?: string; bnSub?: string; orderEn?: string; orderBn?: string; eyebrow?: string }) {
  const s = useStore();
  const lang = s.profile.lang;
  const isBn = lang === "bn";
  // The workflow order line resolves by SECTION_ORDER key (matched from
  // the English line the caller passed) so all six languages share it.
  const orderKey = orderEn
    ? (Object.keys(SECTION_ORDER) as (keyof typeof SECTION_ORDER)[]).find((k) => SECTION_ORDER[k].en === orderEn)
    : undefined;
  const order = orderKey ? sectionOrderText(lang, orderKey) : isBn ? (orderBn ?? orderEn) : orderEn;
  const title = isBn && bn ? bn : typeof children === "string" ? tx(lang, children, bn) : children;
  // Bangla keeps its exact prior rule (no bnSub → no sub line at all);
  // the newer languages translate the English sub through their packs.
  const subText = isBn ? bnSub : sub ? tx(lang, sub, bnSub) : undefined;
  return (
    <div className="cl-fade mb-5">
      {eyebrow ? <p className="mb-1.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[color:var(--accent)]"><span className="inline-block h-[2px] w-7 rounded bg-[color:var(--accent)]" aria-hidden="true" />{eyebrow}</p> : null}
      <h2 className="cl-display text-[30px] font-bold leading-[1.08] text-[color:var(--text)]">{title}</h2>
      {subText ? <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[color:var(--dim)]">{subText}</p> : null}
      {order ? (
        <p className="mt-2 inline-flex max-w-2xl items-start gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface2)] px-3 py-1.5 text-[13px] leading-relaxed text-[color:var(--text)]"><span aria-hidden="true">🧭</span>{order}</p>
      ) : null}
    </div>
  );
}

export function Card({ children, className = "", accent, variant }: { children: React.ReactNode; className?: string; accent?: string; variant?: "card" | "dossier" | "shelf" | "console" | "flat" }) {
  const v = variant === "dossier" ? "cl-dossier" : variant === "shelf" ? "cl-shelf" : variant === "console" ? "cl-console" : variant === "flat" ? "cl-card-flat" : "";
  return (
    <div className={`cl-card rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-4 sm:p-5 ${v} ${className}`}
      style={accent ? { borderTop: `3px solid ${accent}`, boxShadow: `var(--shadow), inset 0 1px 0 color-mix(in srgb, ${accent} 22%, transparent)` } : undefined}>{children}</div>
  );
}

/* Shared theme state — every ThemeToggle instance (sidebar, mobile header,
   Settings) reads/writes ONE source of truth, so instances can never fight. */
const themeListeners = new Set<() => void>();
function getThemeSnapshot(): "dark" | "light" {
  if (typeof document !== "undefined" && document.documentElement.dataset.theme === "light") return "light";
  try { return localStorage.getItem("cyberlab-theme") === "light" ? "light" : "dark"; } catch { return "dark"; }
}
function subscribeTheme(fn: () => void): () => void {
  themeListeners.add(fn);
  return () => { themeListeners.delete(fn); };
}
function applyTheme(t: "dark" | "light") {
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("cyberlab-theme", t); } catch { /* private mode */ }
  themeListeners.forEach((fn) => fn());
}

/** Light / dark theme toggle — default dark; choice persists on this device. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "dark" as const);
  const apply = (t: "dark" | "light") => applyTheme(t);
  return (
    <div className="flex items-center gap-1" role="group" aria-label="Theme">
      <button type="button" aria-pressed={theme === "dark"} onClick={() => apply("dark")} className={`min-h-[36px] rounded-lg px-2.5 py-1 text-xs font-semibold ${theme === "dark" ? "bg-[color:var(--accent2)] text-white" : "border border-[color:var(--border)] text-[color:var(--dim)]"}`}>Dark</button>
      <button type="button" aria-pressed={theme === "light"} onClick={() => apply("light")} className={`min-h-[36px] rounded-lg px-2.5 py-1 text-xs font-semibold ${theme === "light" ? "bg-[color:var(--accent2)] text-white" : "border border-[color:var(--border)] text-[color:var(--dim)]"}`}>Light</button>
    </div>
  );
}

/** Language selector (user order, 19 Nov 2026): exactly ONE button per
    place — auth screen, app header/sidebar, Settings. Only that button is
    visible; tapping it opens a dropdown listing the six languages, and
    picking one applies it immediately and closes the menu. There is never
    a row of language buttons or a long inline language list. */
export function LangMenu({ compact = false, dropUp = false, alignEnd = false }: { compact?: boolean; dropUp?: boolean; alignEnd?: boolean }) {
  const s = useStore();
  const lang = s.profile.lang;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  const pick = (m: LangMode) => {
    saveProfileLocal({ lang: m });
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative inline-block">
      <button type="button" aria-haspopup="listbox" aria-expanded={open}
        aria-label={tx(lang, "Language", "ভাষা")}
        onClick={() => setOpen((o) => !o)}
        className={compact
          ? "flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-lg bg-[color:var(--accent2)] px-2.5 py-2 text-[13px] font-bold text-white"
          : "flex min-h-[40px] items-center gap-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-sm font-semibold text-[color:var(--text)]"}>
        <span aria-hidden="true">🌐</span>
        <span>{compact ? LANG_SHORT[lang] : LANG_LABELS[lang]}</span>
        <span aria-hidden="true" className="text-[10px] opacity-80">{open ? "▲" : "▼"}</span>
      </button>
      {open ? (
        <ul role="listbox" aria-label={tx(lang, "Language", "ভাষা")}
          className={`absolute z-50 min-w-[168px] overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] py-1 shadow-xl ${dropUp ? "bottom-full mb-1.5" : "top-full mt-1.5"} ${alignEnd ? "right-0" : "left-0"}`}>
          {LANG_ORDER.map((m) => (
            <li key={m}>
              <button type="button" role="option" aria-selected={lang === m}
                onClick={() => pick(m)}
                className={`flex min-h-[44px] w-full items-center gap-2 px-3 py-2 text-left text-sm ${lang === m ? "bg-[color:var(--accent2)] font-bold text-white" : "text-[color:var(--text)] hover:bg-[color:var(--surface2)]"}`}>
                <span className="flex-1">{LANG_LABELS[m]}</span>
                {lang === m ? <span aria-hidden="true">✓</span> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Badge({ children, tone = "dim" }: { children: React.ReactNode; tone?: "dim" | "ok" | "warn" | "accent" | "bad" }) {
  const tones: Record<string, string> = {
    dim: "border-[color:var(--border)] text-[color:var(--dim)]",
    ok: "border-emerald-800 text-emerald-300",
    warn: "border-amber-800 text-amber-300",
    bad: "border-red-900 text-red-300",
    accent: "border-sky-800 text-sky-300",
  };
  return <span className={`inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[11px] font-medium ${tones[tone]}`}>{children}</span>;
}

export function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="cl-code-pane overflow-hidden rounded-xl">
      <div className="flex items-center justify-between border-b border-[color:var(--border)] px-3 py-1.5">
        <span className="font-mono text-[11px] text-[color:var(--dim)]">{label ?? "code"}</span>
        <button
          type="button"
          aria-label="Copy code"
          className="rounded px-2 py-1 text-[11px] text-[color:var(--accent)] hover:bg-[color:var(--surface2)]"
          onClick={() => { void navigator.clipboard?.writeText(code).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1200); }); }}
        >{copied ? "Copied" : "Copy"}</button>
      </div>
      <pre className="cl-code-text overflow-x-auto p-3.5 font-mono text-[#D7E6F5]">{code}</pre>
    </div>
  );
}

export function downloadText(filename: string, text: string, type = "text/plain") {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/** Knowledge quiz — explanations (q.why) revealed only after answering. Records the attempt.
    In Bangla mode the question text and explanation themselves become Bangla (bnQ, index-aligned). */
export function Quiz({
  id, title, questions, onPass, topics, bnQ,
}: {
  id: string; title: string; questions: QuizQ[]; onPass?: () => void; topics?: string[];
  bnQ?: { q?: (string | undefined)[]; why?: (string | undefined)[]; options?: (string | undefined)[][] };
}) {
  const store = useStore();
  const lang = store.profile.lang;
  const isBn = lang === "bn";
  const T = (en: string, bn?: string) => tx(lang, en, bn);
  const qText = (q: QuizQ, i: number) => (isBn ? bnQ?.q?.[i] ?? q.q : q.q);
  const optText = (opt: string, qi: number, oi: number) => (isBn ? bnQ?.options?.[qi]?.[oi] ?? QUIZ_OPTIONS_BN[id]?.[qi]?.[oi] ?? opt : opt);
  const whyText = (q: QuizQ, i: number) => (isBn ? bnQ?.why?.[i] ?? q.why : q.why);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [result, setResult] = useState<{ score: number; total: number; wrong: number[] } | null>(null);

  const submit = () => {
    let score = 0; const wrong: number[] = [];
    questions.forEach((q, i) => { if (answers[i] === q.answer) score += 1; else wrong.push(i); });
    setResult({ score, total: questions.length, wrong });
    recordAttempt(id, score, questions.length, title);
    const pct = Math.round((score / questions.length) * 100);
    if (pct >= PASS && onPass) onPass();
  };
  const retry = () => { setAnswers(questions.map(() => null)); setResult(null); };
  const pct = result ? Math.round((result.score / result.total) * 100) : 0;

  const answered = answers.filter((a) => a !== null).length;
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-semibold text-[color:var(--text)]">📝 {title} <span className="font-normal text-[color:var(--dim)]">— {T("pass mark")} {PASS}%</span></h4>
        <div className="mt-2 flex items-center gap-2" role="progressbar" aria-valuenow={answered} aria-valuemin={0} aria-valuemax={questions.length} aria-label={T("Quiz progress")}>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-[color:var(--border)]"><div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all" style={{ width: `${(answered / questions.length) * 100}%` }} /></div>
          <span className="text-xs font-semibold text-[color:var(--dim)]">{result ? `${T("Scored")} ${result.score}/${result.total}` : `${T("Answered")} ${answered} ${T("of")} ${questions.length}`}</span>
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1" aria-hidden="true">
          {questions.map((_, i) => <span key={i} className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${result ? (answers[i] === questions[i]?.answer ? "bg-emerald-600 text-white" : "bg-red-700 text-white") : answers[i] !== null ? "bg-sky-600 text-white" : "bg-[color:var(--surface2)] text-[color:var(--dim)]"}`}>Q{i + 1}</span>)}
        </div>
      </div>
      {questions.map((q, qi) => (
        <fieldset key={qi} className="cl-q-card">
          <legend className="rounded-full bg-[color:var(--accent2)] px-2.5 py-0.5 text-xs font-bold text-white">{T("Question")} {qi + 1} {T("of")} {questions.length}</legend>
          <p className="mt-1.5 text-sm font-medium text-[color:var(--text)]">{qText(q, qi)}</p>
          <div className="mt-2 space-y-1.5">
            {q.options.map((opt, oi) => {
              const picked = answers[qi] === oi;
              const showState = result !== null;
              const isRight = q.answer === oi;
              return (
                <label key={oi} className={`cl-q-opt flex cursor-pointer items-center gap-2 border text-sm ${showState && isRight ? "border-emerald-700 bg-emerald-950/40" : showState && picked && !isRight ? "border-red-800 bg-red-950/40" : picked ? "border-[color:var(--accent)] bg-sky-950/30" : "border-[color:var(--border)]"}`}>
                  <input
                    type="radio" name={`${id}-q${qi}`} className="accent-sky-500"
                    checked={picked} disabled={result !== null}
                    onChange={() => setAnswers((a) => a.map((v, i) => (i === qi ? oi : v)))}
                  />
                  <span className="text-[color:var(--text)]">{optText(opt, qi, oi)}</span>
                </label>
              );
            })}
          </div>
          {result !== null ? (
            <p className="cl-callout cl-callout-note mt-2 text-[13px] leading-relaxed text-[color:var(--dim)]">
              <span className={`font-bold ${answers[qi] === q.answer ? "text-emerald-300" : "text-red-300"}`}>{answers[qi] === q.answer ? `${T("Correct.")} ` : `${T("Not quite.")} `}</span>
              {whyText(q, qi)}
            </p>
          ) : null}
        </fieldset>
      ))}
      {result === null ? (
        <button type="button" onClick={submit} disabled={answers.some((a) => a === null)}
          className="min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">
          {T("Submit answers")}
        </button>
      ) : (
        <div className={`rounded-md border p-3 ${pct >= PASS ? "border-emerald-800 bg-emerald-950/30" : "border-amber-800 bg-amber-950/30"}`} role="status">
          <p className="text-sm font-semibold text-[color:var(--text)]">
            {T("Score")}: {result.score}/{result.total} ({pct}%) — {pct >= PASS ? T("Passed.") : `${T("Below the pass mark of")} ${PASS}%.`}
          </p>
          {pct < PASS ? (
            <p className="mt-1 text-[13px] text-[color:var(--dim)]">
              {T("Weak questions")}: {result.wrong.map((w) => `#${w + 1}${topics?.[w] ? ` (${topics[w]})` : ""}`).join(", ")}. {T("Revise those topics, then retry — no XP is awarded for a failed attempt.")}
            </p>
          ) : null}
          <button type="button" onClick={retry} className="mt-2 min-h-[40px] rounded border border-[color:var(--border)] px-3 py-1.5 text-sm text-[color:var(--text)] hover:bg-[color:var(--surface2)]">{T("Retry for practice")}</button>
        </div>
      )}
    </div>
  );
}

/** One validated practical task (catalog3 Practical): options, hint, retry, explanation.
    In Bangla mode the task, hint and explanation themselves become Bangla (bn prop). */
export function PracticalView({
  id, task, onPass, heading = "Practical assessment", bn,
}: { id: string; task: Practical; onPass?: () => void; heading?: string; bn?: { task: string; hint: string; explain: string; options?: (string | undefined)[] } }) {
  const store = useStore();
  const lang = store.profile.lang;
  const txv = (en: string, b?: string) => tx(lang, en, b);
  const [pick, setPick] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [state, setState] = useState<"idle" | "right" | "wrong">("idle");

  const check = () => {
    if (pick === null) return;
    const ok = pick === task.answer;
    setState(ok ? "right" : "wrong");
    recordAttempt(id + "-practical", ok ? 1 : 0, 1, heading);
    if (ok && onPass) onPass();
  };

  return (
    <div className="cl-q-card space-y-3" style={{ borderTop: "3px solid var(--c-mission)" }}>
      <h4 className="flex flex-wrap items-center gap-2 text-sm font-bold text-[color:var(--text)]"><span aria-hidden="true">🛠️</span>{heading}<span className="rounded-full border border-amber-700 px-2 py-0.5 text-[11px] font-semibold text-amber-300">{txv("HANDS-ON · PRACTICE AREA")}</span>{state === "right" ? <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[11px] font-bold text-white">✓ {txv("PASSED")}</span> : null}</h4>
      <p className="text-sm leading-relaxed text-[color:var(--text)]">{txv(task.task, bn?.task)}</p>
      <div className="space-y-1.5" role="radiogroup" aria-label="Practical answer options">
        {task.options.map((opt, oi) => (
          <label key={oi} className={`cl-q-opt flex cursor-pointer items-center gap-2 border text-sm ${state === "right" && oi === task.answer ? "border-emerald-700 bg-emerald-950/40" : pick === oi ? "border-[color:var(--accent)] bg-sky-950/30" : "border-[color:var(--border)]"}`}>
            <input type="radio" name={id + "-practical"} className="accent-sky-500" checked={pick === oi} disabled={state === "right"}
              onChange={() => { setPick(oi); setState("idle"); }} />
            <span className="text-[13px] text-[color:var(--text)]">{txv(opt, bn?.options?.[oi] ?? PRACTICAL_OPTIONS_BN[id]?.[oi])}</span>
          </label>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={check} disabled={pick === null || state === "right"}
          className="min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">
          {txv("Check answer")}
        </button>
        <button type="button" onClick={() => setShowHint((h) => !h)}
          className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)] hover:bg-[color:var(--surface2)]">
          {showHint ? txv("Hide hint") : txv("Show hint")}
        </button>
      </div>
      {showHint ? <p className="text-[13px] text-amber-200">{txv("Hint:")} {txv(task.hint, bn?.hint)}</p> : null}
      {state === "right" ? <p role="status" className="rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-sm text-emerald-200">{txv("Correct.")} {txv(task.explain, bn?.explain)}</p> : null}
      {state === "wrong" ? <p role="alert" className="rounded-md border border-red-900 bg-red-950/30 p-3 text-sm text-red-200">{txv("Not correct yet — use the hint, reconsider the evidence, and retry. XP comes only on a pass.")}</p> : null}
    </div>
  );
}
