import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Badge, Card, CodeBlock, LangMenu, PracticalView, Quiz, SectionTitle, ThemeToggle, isDone, useStore } from "./ui";
import { CodePlayground } from "./Playground";
import { WhyCodePanel, LabWhyBox, CtfWhyPanel, useWhyEntry } from "./WhyPanel";
import { UniversalPlayground } from "./UniversalPlayground";
import { CyberLabLogo, DiagramView, LessonIllustration, ProgressRing, SectionIcon, XpBar, levelAccent, skillAccent, trackForView } from "./Visuals";
import { LEVELS, type Lesson } from "./catalog";
import { PROJECTS, type Lab, type LabTask, type Mission } from "./catalog2";
import { MISSION_PRACTICAL } from "./mission-practical";
import { TRACKS, type Checkpoint, type LevelFinal } from "./catalog3";
import { ALL_LESSONS, ALL_CHECKPOINTS, ALL_FINALS, ALL_PRACTICALS, ALL_LABS, ALL_MISSIONS, ALL_CTFS } from "./catalogAll";
import { L4_NOTES, L4_TIPS } from "./catalog7";
import { HonoursNotice, HONOURS_MATCH, HONOURS_CAREER_LEVELS } from "./honours";
import { LESSON_BN_FULL } from "./bn-lessons";
import { LAB_BN as LAB_BN_BASE, MISSION_BN as MISSION_BN_BASE, CTF_BN as CTF_BN_BASE, PROJECT_BN, type TaskBn } from "./bn-practice";
import { PRACTICAL_BN as PRACTICAL_BN_BASE } from "./bn-practice2";
import { CHECKPOINT_BN as CHECKPOINT_BN_BASE, FINAL_BN as FINAL_BN_BASE } from "./bn-practice3";
import { LAB_BN3, MISSION_BN3, CTF_BN3, PRACTICAL_BN3, CHECKPOINT_BN3, FINAL_BN3 } from "./bn-phase3";
import { LAB_BN4, MISSION_BN4, CTF_BN4, PRACTICAL_BN4, CHECKPOINT_BN4, FINAL_BN4 } from "./bn-phase4";
import { LAB_BN5, MISSION_BN5, CTF_BN5, PRACTICAL_BN5, CHECKPOINT_BN5, FINAL_BN5 } from "./bn-phase5";
import { P4_NOTES, P4_TIPS } from "./notes4";
import { P5_NOTES, P5_TIPS } from "./notes5";
import { PYM_PRACTICAL_BN, PYM_CHECKPOINT_BN, PYM_NOTES, PYM_TIPS } from "./bn-python";
import { CM_PRACTICAL_BN, CM_CHECKPOINT_BN, CM_NOTES, CM_TIPS, JV_PRACTICAL_BN, JV_CHECKPOINT_BN, JV_NOTES, JV_TIPS } from "./bn-cjava";
import { JSM_PRACTICAL_BN, JSM_CHECKPOINT_BN, JSM_NOTES, JSM_TIPS, SHM_PRACTICAL_BN, SHM_CHECKPOINT_BN, SHM_NOTES, SHM_TIPS } from "./bn-jsshell";
import { TASK_OPTIONS_BN, WRITTEN_MODEL_BN } from "./bn-options";
import { SECTION_ORDER } from "./lang";
import { tx as txI, txf, navLabel, uiStr, instr, lessonTitle, itemTitle, itemDesc, levelTitle } from "./i18n";
import { LAB_REQUIRES, MISSION_REQUIRES, CTF_REQUIRES, PROJECT_REQUIRES, isUnlocked, lessonShort, relatedForLesson } from "./gating";
import { JourneyStrip, LevelUnlockMap, LockedNotice, UnlockFilterBar, UnlocksPanel, useUnlockFilter } from "./guided";
import { cfRefreshFromServer, cfSignOut, completeItem, getCfSessionSnapshot, getSyncSnapshot, localDayKey, sha256Hex, streakDays, subscribe, toggleProjectStep, totalXp, type LocalState } from "./store";
import { AuthView } from "./Auth";
import { Terminal } from "./Terminal";
import { LabTryBox } from "./LabTry";
import { FormatSample, isSampleContent } from "./SampleBlock";
import { EXERCISE_CODE } from "./exercise-code";
import { pcPracticeFor, realExampleFor } from "./real-practice";
import { AccountSecurityView, AnalyticsView, AssessmentView, CareersView, IntelView, KnowledgeBaseView, PentestView, SocView } from "./Views2";
import { ResearchView, SettingsView } from "./Views3";
import { sfxClick, sfxError, sfxLevelUp, sfxSuccess } from "./sound";
import { CopyrightLine, PrivacyView } from "./Privacy";
import { PwaInstallBanner } from "./PwaInstall";
import { AttackTrackView } from "./Attack";
import { COMPARE4 } from "./compare4";

const LABS = ALL_LABS;
const MISSIONS = ALL_MISSIONS;
const CTFS = ALL_CTFS;
const LAB_BN = { ...LAB_BN_BASE, ...LAB_BN3, ...LAB_BN4, ...LAB_BN5 };
const MISSION_BN = { ...MISSION_BN_BASE, ...MISSION_BN3, ...MISSION_BN4, ...MISSION_BN5 };
const CTF_BN = { ...CTF_BN_BASE, ...CTF_BN3, ...CTF_BN4, ...CTF_BN5 };
const PRACTICAL_BN = { ...PRACTICAL_BN_BASE, ...PRACTICAL_BN3, ...PRACTICAL_BN4, ...PRACTICAL_BN5, ...PYM_PRACTICAL_BN, ...CM_PRACTICAL_BN, ...JV_PRACTICAL_BN, ...JSM_PRACTICAL_BN, ...SHM_PRACTICAL_BN };
const CHECKPOINT_BN = { ...CHECKPOINT_BN_BASE, ...CHECKPOINT_BN3, ...CHECKPOINT_BN4, ...CHECKPOINT_BN5, ...PYM_CHECKPOINT_BN, ...CM_CHECKPOINT_BN, ...JV_CHECKPOINT_BN, ...JSM_CHECKPOINT_BN, ...SHM_CHECKPOINT_BN };
const FINAL_BN = { ...FINAL_BN_BASE, ...FINAL_BN3, ...FINAL_BN4, ...FINAL_BN5 };
const NOTES_ALL = { ...L4_NOTES, ...P4_NOTES, ...P5_NOTES, ...PYM_NOTES, ...CM_NOTES, ...JV_NOTES, ...JSM_NOTES, ...SHM_NOTES };
const TIPS_ALL = { ...L4_TIPS, ...P4_TIPS, ...P5_TIPS, ...PYM_TIPS, ...CM_TIPS, ...JV_TIPS, ...JSM_TIPS, ...SHM_TIPS };

/* ================= Path engine — the strict prerequisite chain =================
   Order: for each level 0→22, its lessons in catalog order, then that level's
   checkpoint, then its level final (Levels 0–3 authored). A node is unlocked
   only when the previous node is COMPLETE. A lesson completes only when the
   content was read AND the Knowledge Quiz passed (>=70%) AND the Practical
   passed. Opening a lesson completes nothing. */

type PathNode =
  | { type: "lesson"; lesson: Lesson }
  | { type: "checkpoint"; cp: Checkpoint }
  | { type: "final"; fin: LevelFinal };

const nodeKey = (n: PathNode) => (n.type === "lesson" ? n.lesson.id : n.type === "checkpoint" ? n.cp.id : n.fin.id);
const nodeKind = (n: PathNode) => n.type;
const nodeTitle = (n: PathNode) => (n.type === "lesson" ? n.lesson.title : n.type === "checkpoint" ? n.cp.title : n.fin.title);
const nodeLevel = (n: PathNode) => (n.type === "lesson" ? n.lesson.level : n.type === "checkpoint" ? n.cp.level : n.fin.level);

export const PATH: PathNode[] = (() => {
  // Per level: lessons in teaching order, with each checkpoint inserted
  // immediately after the last lesson of its 3–4 lesson group (so a
  // checkpoint stays locked until its whole group is complete), then any
  // remaining checkpoints for the level, then the level final.
  const out: PathNode[] = [];
  for (const lvl of LEVELS) {
    const placed = new Set<string>();
    for (const lesson of ALL_LESSONS.filter((l) => l.level === lvl.n)) {
      out.push({ type: "lesson", lesson });
      for (const cp of ALL_CHECKPOINTS.filter((c) => c.level === lvl.n)) {
        if (!placed.has(cp.id) && cp.afterLessons[cp.afterLessons.length - 1] === lesson.id) {
          out.push({ type: "checkpoint", cp });
          placed.add(cp.id);
        }
      }
    }
    for (const cp of ALL_CHECKPOINTS.filter((c) => c.level === lvl.n)) {
      if (!placed.has(cp.id)) out.push({ type: "checkpoint", cp });
    }
    const fin = ALL_FINALS.find((f) => f.level === lvl.n);
    if (fin) out.push({ type: "final", fin });
  }
  return out;
})();

function nodeDone(s: LocalState, n: PathNode): boolean {
  return isDone(s, nodeKind(n), nodeKey(n));
}
/* Level 4 open entry point (user decision, 15 Nov 2026): Level 4 is a
   SECOND, open entry into the curriculum. Its first lesson is open to any
   signed-in learner with zero progress — no Levels 0–3 completion needed.
   This is a real gating-rule change here in nodeUnlocked (the one function
   every view and navigation guard consults), not a display trick: the
   server-side progress save never required earlier levels, so L4 progress
   saves and earns XP normally. Serial gating INSIDE Level 4 is unchanged
   (each next node still needs the previous one complete), the chain
   onward is unchanged (the Level 4 Final still unlocks Level 5), and
   Levels 0–3 gating is untouched — Level 0 stays the beginner entry. */
const L4_ENTRY_INDEX = PATH.findIndex((n) => nodeLevel(n) === 4);
const L4_ENTRY_NOTE_EN = "Open entry point — start here if you already know computer foundations (Levels 0–3). Beginners should start at Level 0.";
const L4_ENTRY_NOTE_BN = "খোলা এন্ট্রি পয়েন্ট — computer foundations (Level 0–3) আগেই জানা থাকলে এখান থেকে শুরু করতে পারো। নতুনদের Level 0 থেকে শুরু করা উচিত।";
function nodeUnlocked(s: LocalState, idx: number): boolean {
  if (idx <= 0) return true;
  if (idx === L4_ENTRY_INDEX) return true;
  const prev = PATH[idx - 1];
  return prev ? nodeDone(s, prev) : false;
}
function currentIndex(s: LocalState): number {
  const i = PATH.findIndex((n) => !nodeDone(s, n));
  return i === -1 ? PATH.length : i;
}

/* Programming prerequisite for a lesson (Beginner Scaffolding rule):
   derived from the lesson's code language; the Level 4 lesson that teaches it. */
/* Level 4 serial order (rework, 12 Nov 2026) — a Level 4 lesson's
   programming prerequisite is the exact previous lesson in this chain. */
const L4_ORDER_IDS: string[] = [
  "l4-py-first", "l4-py-variables", "l4-pym-operators", "l4-pym-numbers", "l4-pym-strings",
  "l4-pym-input", "l4-py-conditions", "l4-pym-match", "l4-py-control", "l4-pym-lists",
  "l4-pym-tuples", "l4-pym-dicts", "l4-pym-sets", "l4-pym-comprehensions", "l4-py-functions",
  "l4-pym-functions-deep", "l4-pym-scope-lambda", "l4-pym-modules", "l4-py-files", "l4-pym-files-deep",
  "l4-pym-exceptions", "l4-pym-oop-1", "l4-pym-oop-2", "l4-pym-oop-3", "l4-pym-generators",
  "l4-pym-decorators", "l4-pym-regex", "l4-pym-datetime", "l4-pym-collections", "l4-pym-json",
  "l4-pym-pathlib-os", "l4-pym-venv-pip", "l4-pym-testing", "l4-pym-debugging", "l4-python-security",
  "l4-py-integrity", "l4-pym-logging", "l4-pym-argparse", "l4-pym-subprocess", "l4-pym-encoding",
  "l4-pym-password-tools", "l4-pym-sockets", "l4-py-network", "l4-pym-requests", "l4-pym-threading",
  "l4-pym-portscan", "l4-pym-capstone",
  "l4-c-basics", "l4-cm-types", "l4-cm-io", "l4-cm-control", "l4-c-arrays-functions",
  "l4-cm-strings", "l4-c-pointers", "l4-cm-scope", "l4-c-structs-heap", "l4-cm-typedef",
  "l4-cm-memory", "l4-cm-files", "l4-cm-preprocessor", "l4-cm-cmdline", "l4-cm-bitwise",
  "l4-c-memory", "l4-cm-security",
  "l4-jv-first", "l4-jv-operators", "l4-jv-control", "l4-jv-arrays", "l4-jv-strings",
  "l4-jv-methods", "l4-jv-oop1", "l4-jv-oop2", "l4-jv-oop3", "l4-jv-exceptions",
  "l4-jv-collections", "l4-jv-generics", "l4-jv-lambdas", "l4-jv-files", "l4-jv-security",
  "l4-js-basics", "l4-jsm-types", "l4-jsm-control", "l4-jsm-functions", "l4-jsm-arrays",
  "l4-jsm-objects", "l4-javascript-browser", "l4-jsm-dom", "l4-jsm-events", "l4-jsm-async",
  "l4-js-fetch", "l4-jsm-es6", "l4-jsm-security",
  "l4-shm-bash-vars", "l4-shm-bash-pipes", "l4-shm-bash-control", "l4-shm-bash-loops", "l4-shm-bash-text",
  "l4-shm-bash-files", "l4-bash-automation", "l4-shm-ps-basics", "l4-shm-ps-control", "l4-shm-ps-files",
  "l4-powershell-automation", "l4-shm-security",
];

function programmingNeed(lesson: Lesson): { text: string; bnText: string; lessonId: string | null } {
  if (lesson.level === 4) {
    const idx = L4_ORDER_IDS.indexOf(lesson.id);
    const prev = idx > 0 ? L4_ORDER_IDS[idx - 1] : undefined;
    if (prev) return { text: "Exactly the previous Level 4 lesson in the chain — this level is strictly serial", bnText: "ঠিক আগের Level 4 পাঠটি — এই level কঠোরভাবে ধারাবাহিক", lessonId: prev };
    return { text: "None — this is the first lesson of the Level 4 programming chain", bnText: "কিছু নয় — এটি Level 4 programming ধারার প্রথম পাঠ", lessonId: null };
  }
  const lang = lesson.code.lang.toLowerCase();
  if (lang.includes("python")) return { text: "Python basics (variables, strings, loops, file reading) — taught from zero in Level 4", bnText: "Python-এর মূল বিষয় (variable, string, loop, file পড়া) — Level 4-এ শূন্য থেকে শেখানো", lessonId: "l4-py-variables" };
  if (lang === "c" || lang.includes("c (")) return { text: "C basics (types, buffers, functions) — taught from zero in Level 4", bnText: "C-এর মূল বিষয় (type, buffer, function) — Level 4-এ শূন্য থেকে শেখানো", lessonId: "l4-c-basics" };
  if (lang.includes("javascript") || lang.includes("html")) return { text: "JavaScript basics (variables, DOM, events) — taught from zero in Level 4", bnText: "JavaScript-এর মূল বিষয় (variable, DOM, event) — Level 4-এ শূন্য থেকে শেখানো", lessonId: "l4-js-basics" };
  if (lang.includes("bash") || lang.includes("powershell")) return { text: "Shell scripting basics — taught from zero in Levels 3–4", bnText: "Shell scripting-এর মূল বিষয় — Level 3–4-এ শূন্য থেকে শেখানো", lessonId: "l3-bash-scripting" };
  return { text: "None beyond what this lesson teaches — every new concept is introduced in plain English inside the lesson before it is used", bnText: "এই পাঠ যা শেখায় তার বাইরে কিছু নয় — প্রতিটি নতুন ধারণা ব্যবহারের আগে পাঠের ভেতরেই সহজ ভাষায় বোঝানো হয়", lessonId: null };
}

/* ================= Shared question runner (labs & missions) ================= */

function QuestionRunner({ id, kind, xp, title, tasks, passNote, bnTasks, bnPassNote, suppressComplete = false, onResult }: {
  id: string; kind: string; xp: number; title: string; tasks: LabTask[]; passNote: string;
  bnTasks?: TaskBn[]; bnPassNote?: string;
  /** Missions: the decision alone never completes the mission — the parent
   * MissionRunner completes it only when the hands-on practical has also
   * passed. suppressComplete keeps this runner from awarding XP itself. */
  suppressComplete?: boolean;
  onResult?: (pct: number) => void;
}) {
  const s = useStore();
  const tx = (en: string, b?: string) => txI(s.profile.lang, en, b);
  const [answers, setAnswers] = useState<(number | null)[]>(() => tasks.map(() => null));
  const [result, setResult] = useState<number | null>(null);
  const done = isDone(s, kind, id);
  const submit = () => {
    const correct = tasks.filter((t, i) => answers[i] === t.answer).length;
    const pct = Math.round((correct / tasks.length) * 100);
    setResult(pct);
    onResult?.(pct);
    if (pct >= 70) sfxSuccess(); else sfxError();
    if (pct >= 70 && !suppressComplete) completeItem(kind, id, xp, pct, title);
  };
  const answeredCount = answers.filter((a) => a !== null).length;
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2">
        <span className="text-sm font-bold text-[color:var(--text)]">✅ {txI(s.profile.lang, "Validation checklist", "যাচাই তালিকা")}</span>
        <div className="h-2 min-w-[90px] flex-1 overflow-hidden rounded-full bg-[color:var(--border)]"><div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all" style={{ width: `${tasks.length ? (answeredCount / tasks.length) * 100 : 0}%` }} /></div>
        <span className="text-xs font-semibold text-[color:var(--dim)]">{result !== null ? `${txI(s.profile.lang, "Score", "স্কোর")} ${result}%` : txf(s.profile.lang, "{answered}/{total} tasks answered", "{answered}/{total}টি কাজের উত্তর দেওয়া হয়েছে", { answered: answeredCount, total: tasks.length })}</span>
        {done ? <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[11px] font-bold text-white">✓ {txI(s.profile.lang, "COMPLETE", "সম্পূর্ণ")}</span> : null}
      </div>
      {tasks.map((t, ti) => (
        <fieldset key={ti} className="rounded-lg border-2 border-[color:var(--border)] bg-[color:var(--surface2)] p-3">
          <legend className="rounded-full bg-amber-600 px-2.5 py-0.5 text-xs font-bold text-white">{txf(s.profile.lang, "Task {n} of {total}", "কাজ {n} / {total}", { n: ti + 1, total: tasks.length })}</legend>
          <p className="mt-1.5 text-sm font-medium text-[color:var(--text)]">{tx(t.prompt, bnTasks?.[ti]?.prompt)}</p>
          <div className="mt-2 space-y-1.5">
            {t.options.map((opt, oi) => (
              <label key={oi} className={`flex min-h-[40px] cursor-pointer items-center gap-2 rounded border px-3 py-2 text-sm ${result !== null && oi === t.answer ? "border-emerald-700 bg-emerald-950/40" : answers[ti] === oi ? "border-[color:var(--accent)] bg-sky-950/30" : "border-[color:var(--border)]"}`}>
                <input type="radio" name={`${id}-${ti}`} className="accent-sky-500" checked={answers[ti] === oi} disabled={result !== null && result >= 70}
                  onChange={() => setAnswers((a) => a.map((v, i) => (i === ti ? oi : v)))} />
                <span className="text-[color:var(--text)]">{tx(opt, bnTasks?.[ti]?.options?.[oi] ?? TASK_OPTIONS_BN[id]?.[ti]?.[oi])}</span>
              </label>
            ))}
          </div>
          {result !== null ? <p className="mt-2 text-[13px] text-[color:var(--dim)]">{tx(t.explain, bnTasks?.[ti]?.explain)}</p> : null}
        </fieldset>
      ))}
      <div className="flex flex-wrap items-center gap-2">
        {result === null || result < 70 ? (
          <button type="button" disabled={answers.some((a) => a === null)} onClick={submit}
            className="min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-40">{txI(s.profile.lang, "Submit", "জমা দাও")}</button>
        ) : null}
        <button type="button" onClick={() => { setAnswers(tasks.map(() => null)); setResult(null); }}
          className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)]">{txI(s.profile.lang, "Reset", "আবার শুরু করো")}</button>
        {done ? <Badge tone="ok">{txI(s.profile.lang, "Completed", "সম্পূর্ণ")} · {xp} XP</Badge> : null}
      </div>
      {result !== null ? (
        <p role="status" className={`cl-pop rounded-md border p-3 text-sm ${result >= 70 ? "border-emerald-800 bg-emerald-950/30 text-emerald-200" : "border-amber-800 bg-amber-950/30 text-amber-100"}`}>
          {txf(s.profile.lang, "Score {result}% — {note}", "স্কোর {result}% — {note}", { result, note: result >= 70 ? tx(passNote, bnPassNote) : txI(s.profile.lang, "below the 70% completion bar. Read the explanations, reset, and retry — no XP for a failed run.", "৭০% পাস সীমার নিচে। ব্যাখ্যাগুলো পড়ো, আবার শুরু করে চেষ্টা করো — ব্যর্থ run-এ কোনো XP নেই।") })}
        </p>
      ) : null}
    </div>
  );
}

/* ================= Lesson view ================= */

/** TryHackMe-style per-task check for Task 1 (learn the idea): one real
 * question built from the lesson's OWN terminology — the correct definition
 * plus two other definitions from the same lesson. A wrong answer names the
 * section to re-read; it never blocks the lesson (the quiz + practical are
 * the graded gates, unchanged). */
function TermCheck({ lesson, isBn, bnDefs, onOk, termIdx = 0, rereadSection }: { lesson: Lesson; isBn: boolean; bnDefs?: (string | undefined)[]; onOk: () => void; termIdx?: number; rereadSection?: string }) {
  const s = useStore();
  const [sel, setSel] = useState<number | null>(null);
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState(false);
  if (lesson.terms.length < 3) {
    return (
      <button type="button" onClick={() => { setOk(true); onOk(); }} disabled={ok}
        className="mt-2 min-h-[40px] rounded-lg border border-[color:var(--border)] px-3 py-1.5 text-sm font-semibold text-[color:var(--accent)] disabled:opacity-60">
        {ok ? (txI(s.profile.lang, "✓ Read", "✓ পড়া হয়েছে")) : txI(s.profile.lang, "I have read the concept and the terminology", "আমি ধারণা আর পরিভাষা পড়েছি")}
      </button>
    );
  }
  const n = lesson.terms.length;
  const picks = [termIdx % n, (termIdx + 1) % n, (termIdx + 2) % n];
  const defs = picks.map((pi) => (isBn && bnDefs?.[pi] ? bnDefs[pi]! : lesson.terms[pi]!.def));
  const rot = lesson.id.length % 3;
  const order = [0, 1, 2].map((k) => (k + rot) % 3); // order[pos] = defs index shown at pos
  const correctPos = order.indexOf(0);
  const term = lesson.terms[termIdx % n]!;
  return (
    <div className="mt-2">
      <p className="text-sm text-[color:var(--text)]">{txf(s.profile.lang, "Quick check: what does “{term}” mean?", "ছোট যাচাই: “{term}” মানে কী?", { term: term.term })}</p>
      <div className="mt-1.5 space-y-1.5" role="radiogroup" aria-label={txI(s.profile.lang, "Task 1 check", "কাজ ১ যাচাই")}>
        {order.map((defIdx, pos) => (
          <label key={pos} className={`flex min-h-[40px] cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2 text-sm ${sel === pos ? "border-[color:var(--accent)] bg-[color:var(--surface2)]" : "border-[color:var(--border)]"}`}>
            <input type="radio" name={`tc-${lesson.id}`} checked={sel === pos} disabled={ok} onChange={() => setSel(pos)} className="h-4 w-4 shrink-0" />
            <span className="text-[color:var(--text)]">{defs[defIdx]}</span>
          </label>
        ))}
      </div>
      {!ok ? (
        <button type="button" disabled={sel === null}
          onClick={() => {
            if (sel === correctPos) { setOk(true); setMsg(""); onOk(); }
            else setMsg(txf(s.profile.lang, "Not yet — re-read {section}, especially the definition of “{term}”.", "এখনো নয় — {section} আবার পড়ো, বিশেষ করে “{term}”-এর সংজ্ঞা।", { section: rereadSection ?? txI(s.profile.lang, "the “Key terminology” section above", "ওপরের “মূল পরিভাষা” অংশটি"), term: term.term }));
          }}
          className="mt-2 min-h-[40px] rounded-lg border border-[color:var(--border)] px-3 py-1.5 text-sm font-semibold text-[color:var(--accent)] disabled:opacity-50">
          {txI(s.profile.lang, "Check answer", "উত্তর যাচাই করো")}
        </button>
      ) : <p className="mt-2 text-sm text-emerald-300" role="status">✓ {defs[0]}</p>}
      {msg ? <p role="alert" className="mt-2 rounded-md border border-amber-800 bg-amber-950/30 p-2.5 text-sm text-amber-100">{msg}</p> : null}
    </div>
  );
}

/** Task 3 doing-check for l1-inside-computer ONLY: the learner submits
 * THEIR OWN machine's real readings (from the lesson's read-only PowerShell
 * commands on their own PC). There is no single "correct" answer — every
 * honest combination is accepted, and the feedback interprets what those
 * readings mean (boot mode + the weakness to note first). This is a doing
 * step, deliberately unlike the quiz's MCQ. Own machine / own lab only. */
function OwnMachineLabCheck({ isBn, onOk }: { isBn: boolean; onOk: () => void }) {
  const s = useStore();
  const [secureBoot, setSecureBoot] = useState("");
  const [tpm, setTpm] = useState("");
  const [partStyle, setPartStyle] = useState("");
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState(false);
  const ready = secureBoot !== "" && tpm !== "" && partStyle !== "";
  const verdict = (() => {
    const boot = partStyle === "GPT" ? (txI(s.profile.lang, "GPT means your machine almost certainly boots via UEFI.", "GPT মানে তোমার machine প্রায় নিশ্চিতভাবে UEFI দিয়ে boot করে।")) : (txI(s.profile.lang, "MBR means your machine likely boots via legacy BIOS — Secure Boot is not available there.", "MBR মানে তোমার machine সম্ভবত legacy BIOS দিয়ে boot করে — Secure Boot সেখানে থাকে না।"));
    const sb = secureBoot === "true" ? (txI(s.profile.lang, "Secure Boot is ON (True) — your boot chain is protected.", "Secure Boot ON (True) — boot chain সুরক্ষিত আছে।")) : secureBoot === "false" ? (txI(s.profile.lang, "Secure Boot is OFF (False) — that is the first weakness to note in your profile: the firmware will run any bootloader.", "Secure Boot OFF (False) — এটাই তোমার profile-এর প্রথমে লিখে রাখার মতো দুর্বলতা: firmware যেকোনো bootloader চালাতে পারে।")) : (txI(s.profile.lang, "Confirm-SecureBootUEFI errored — that error itself is information: the machine is likely legacy BIOS / non-UEFI.", "Confirm-SecureBootUEFI error দিয়েছে — সেটাই তথ্য: machine-টি সম্ভবত legacy BIOS / non-UEFI।"));
    const tp = tpm === "present" ? (txI(s.profile.lang, "TPM is present — the chip BitLocker prefers is available.", "TPM আছে — BitLocker-এর পছন্দের chip উপস্থিত।")) : (txI(s.profile.lang, "TPM is absent — note that limit: BitLocker would need a non-TPM mode.", "TPM নেই — BitLocker TPM ছাড়া চালাতে হবে বা hardware সীমাবদ্ধতা নোট করতে হবে।"));
    return `${boot} ${sb} ${tp}`;
  })();
  const group = (label: string, name: string, value: string, set: (v: string) => void, opts: { v: string; en: string; bn: string }[]) => (
    <fieldset className="mt-2">
      <legend className="text-[13px] font-semibold text-[color:var(--text)]">{label}</legend>
      <div className="mt-1 flex flex-wrap gap-1.5" role="radiogroup" aria-label={label}>
        {opts.map((o) => (
          <label key={o.v} className={`flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm ${value === o.v ? "border-[color:var(--accent)] bg-[color:var(--surface2)]" : "border-[color:var(--border)]"}`}>
            <input type="radio" name={name} checked={value === o.v} disabled={ok} onChange={() => set(o.v)} className="h-4 w-4 shrink-0" />
            <span className="text-[color:var(--text)]">{isBn ? o.bn : o.en}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
  return (
    <div className="mt-2">
      <p className="text-sm leading-relaxed text-[color:var(--text)]">{txI(s.profile.lang, "Real-work check — not a quiz MCQ: run this lesson's commands in PowerShell on YOUR OWN PC and enter your own machine's actual readings here. Run them only on your own machine.", "আসল কাজের যাচাই — quiz-এর MCQ নয়: নিজের PC-তে PowerShell-এ এই পাঠের command গুলো চালিয়ে তোমার নিজের machine-এর আসল reading গুলো এখানে বসাও। শুধু নিজের machine-এই চালাবে।")}</p>
      <p className="mono mt-1.5 break-all rounded-md border border-[color:var(--border)] bg-[color:var(--surface2)] px-2.5 py-2 text-[12.5px] text-[color:var(--dim)]">Get-Disk | Select PartitionStyle · Confirm-SecureBootUEFI · Get-Tpm | Select TpmPresent</p>
      {group(txI(s.profile.lang, "Your PartitionStyle (Get-Disk)", "তোমার PartitionStyle (Get-Disk)"), "own-part", partStyle, setPartStyle, [
        { v: "GPT", en: "GPT", bn: "GPT" },
        { v: "MBR", en: "MBR", bn: "MBR" },
      ])}
      {group(txI(s.profile.lang, "Your Secure Boot (Confirm-SecureBootUEFI)", "তোমার Secure Boot (Confirm-SecureBootUEFI)"), "own-sb", secureBoot, setSecureBoot, [
        { v: "true", en: "True (ON)", bn: "True (ON)" },
        { v: "false", en: "False (OFF)", bn: "False (OFF)" },
        { v: "error", en: "It errored (legacy BIOS)", bn: "Error দিয়েছে (legacy BIOS)" },
      ])}
      {group(txI(s.profile.lang, "Your TPM (Get-Tpm → TpmPresent)", "তোমার TPM (Get-Tpm → TpmPresent)"), "own-tpm", tpm, setTpm, [
        { v: "present", en: "Present (True)", bn: "আছে (True)" },
        { v: "absent", en: "Absent (False)", bn: "নেই (False)" },
      ])}
      {!ok ? (
        <button type="button" disabled={!ready}
          onClick={() => {
            if (!ready) { setMsg(txI(s.profile.lang, "Enter all three readings — run the commands on your own machine to get them.", "তিনটি reading-ই বসাও — নিজের machine-এ command চালিয়ে দেখে নাও।")); return; }
            setOk(true); setMsg(""); onOk();
          }}
          className="mt-3 min-h-[40px] rounded-lg border border-[color:var(--border)] px-3 py-1.5 text-sm font-semibold text-[color:var(--accent)] disabled:opacity-50">
          {txI(s.profile.lang, "Submit my own readings", "আমার নিজের reading জমা দাও")}
        </button>
      ) : <p className="mt-3 text-sm leading-relaxed text-emerald-300" role="status">✓ {verdict}</p>}
      {msg ? <p role="alert" className="mt-2 rounded-md border border-amber-800 bg-amber-950/30 p-2.5 text-sm text-amber-100">{msg}</p> : null}
    </div>
  );
}

/** Per-task check for Task 3 (guided lab): a REAL question, not a self-report.
 * Where the lesson's code prints ≥3 distinct output lines, the learner must
 * pick the actual FIRST line of that output (middle/last lines are the
 * distractors) — you can only answer it by running or reading the run.
 * Otherwise it falls back to a terminology question on the lesson's second
 * term; only lessons with neither (capstone/career document lessons) keep
 * the confirm button, and their graded practical still gates completion. */
function LabCheck({ lesson, isBn, bnDefs, onOk }: { lesson: Lesson; isBn: boolean; bnDefs?: (string | undefined)[]; onOk: () => void }) {
  // l1-inside-computer: Task 3 is a real doing-step — the learner submits
  // their OWN machine's readings, not an MCQ (see OwnMachineLabCheck).
  // Wrapper with no hooks of its own, so switching lessons never breaks
  // hook order; each branch is its own component.
  if (lesson.id === "l1-inside-computer") {
    return <OwnMachineLabCheck isBn={isBn} onOk={onOk} />;
  }
  return <LabCheckGeneric lesson={lesson} isBn={isBn} bnDefs={bnDefs} onOk={onOk} />;
}

function LabCheckGeneric({ lesson, isBn, bnDefs, onOk }: { lesson: Lesson; isBn: boolean; bnDefs?: (string | undefined)[]; onOk: () => void }) {
  const s = useStore();
  const [sel, setSel] = useState<number | null>(null);
  const [msg, setMsg] = useState("");
  const [ok, setOk] = useState(false);
  const lines = useMemo(
    () => [...new Set(lesson.code.output.split("\n").map((s) => s.trim()).filter(Boolean))],
    [lesson.code.output],
  );
  if (lines.length < 3) {
    if (lesson.terms.length >= 3) {
      return <TermCheck lesson={lesson} isBn={isBn} bnDefs={bnDefs} onOk={onOk} termIdx={1}
        rereadSection={txI(s.profile.lang, "the Guided Lab steps below and the Key terminology section", "নিচের “Guided Lab” ধাপ আর “মূল পরিভাষা” অংশটি")} />;
    }
    return (
      <button type="button" onClick={() => { setOk(true); onOk(); }} disabled={ok}
        className="mt-2 min-h-[40px] rounded-lg border border-[color:var(--border)] px-3 py-1.5 text-sm font-semibold text-[color:var(--accent)] disabled:opacity-60">
        {ok ? (txI(s.profile.lang, "✓ Lab done", "✓ Lab করা হয়েছে")) : txI(s.profile.lang, "I have done the guided lab steps", "আমি guided lab ধাপ গুলো করেছি")}
      </button>
    );
  }
  const picks = [lines[0]!, lines[Math.floor(lines.length / 2)]!, lines[lines.length - 1]!];
  const rot = (lesson.id.length + 1) % 3;
  const order = [0, 1, 2].map((k) => (k + rot) % 3);
  const correctPos = order.indexOf(0);
  const cut = (s: string) => (s.length > 120 ? `${s.slice(0, 117)}…` : s);
  return (
    <div className="mt-2">
      <p className="text-sm text-[color:var(--text)]">{isSampleContent(lesson.code)
        ? (txI(s.profile.lang, "Lab check: what is the very FIRST line of this lesson's sample result?", "Lab যাচাই: এই পাঠের sample-টির result-এর একদম প্রথম লাইন কোনটি?"))
        : (txI(s.profile.lang, "Lab check: when this lesson's code runs, what is the very FIRST line of its output?", "Lab যাচাই: এই পাঠের code চালালে output-এর একদম প্রথম লাইন কোনটি?"))}</p>
      <div className="mt-1.5 space-y-1.5" role="radiogroup" aria-label={txI(s.profile.lang, "Task 3 check", "কাজ ৩ যাচাই")}>
        {order.map((lineIdx, pos) => (
          <label key={pos} className={`flex min-h-[40px] cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2 ${sel === pos ? "border-[color:var(--accent)] bg-[color:var(--surface2)]" : "border-[color:var(--border)]"}`}>
            <input type="radio" name={`lc-${lesson.id}`} checked={sel === pos} disabled={ok} onChange={() => setSel(pos)} className="h-4 w-4 shrink-0" />
            <span className="mono break-all text-[13px] text-[color:var(--text)]">{cut(picks[lineIdx]!)}</span>
          </label>
        ))}
      </div>
      {!ok ? (
        <button type="button" disabled={sel === null}
          onClick={() => {
            if (sel === correctPos) { setOk(true); setMsg(""); onOk(); }
            else setMsg(isSampleContent(lesson.code)
              ? (txI(s.profile.lang, "Not yet — read the sample and its result in section 06 above, and look at the very first line of the result.", "এখনো নয় — ওপরে section 06-এ sample-টি আর তার result-টি পড়ো, আর result-এর একদম প্রথম লাইনটি দেখো।"))
              : (txI(s.profile.lang, "Not yet — press Run in the Code Playground above (or read its Expected output) and look at the very first line.", "এখনো নয় — ওপরের Code Playground-এ Run চাপো (বা এর Expected output পড়ো) আর একদম প্রথম লাইনটি দেখো।")));
          }}
          className="mt-2 min-h-[40px] rounded-lg border border-[color:var(--border)] px-3 py-1.5 text-sm font-semibold text-[color:var(--accent)] disabled:opacity-50">
          {txI(s.profile.lang, "Check answer", "উত্তর যাচাই করো")}
        </button>
      ) : <p className="mt-2 text-sm text-emerald-300" role="status">✓ {cut(lines[0]!)}</p>}
      {msg ? <p role="alert" className="mt-2 rounded-md border border-amber-800 bg-amber-950/30 p-2.5 text-sm text-amber-100">{msg}</p> : null}
    </div>
  );
}

/* ================= Textbook lesson view (Levels 0–3 and 5–31) =================
   Textbook layout (user order, 15 Nov 2026 — the WHOLE app reads like a
   real book): the page is a chapter. Topic title + ONE-line purpose, then
   the main point with the key definitions and the figure, and BESIDE the
   text the worked example in the ONE live practice pane (playground / lab
   try area — honest REAL / REMOTE / SIMULATED labels unchanged), with the
   guided-lab exercise in the same column. Exercises (quiz ≥70% +
   practical) close the chapter in small boxes. Everything else the lesson
   teaches stays COMPLETE — objectives, full relevance, the six-part
   why-panel in full, the real example, mistakes, security, PC/Android
   practice, mission, notes, tips, summary — folded into compact collapsed
   blocks under the chapter, exactly like the Level 4 programming view.
   Removed as decoration/filler: the illustration banner, the big 5-task
   board and the 13 numbered section shells. Same gates (read + quiz ≥70%
   + practical), same XP, same serial chain. Level 4 keeps ProgLessonView. */

function LessonView({ lesson, back, goLesson, goKb, goPractice }: { lesson: Lesson; back: () => void; goLesson: (id: string) => void; goKb?: () => void; goPractice?: (kind: string) => void }) {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const L = LESSON_BN_FULL[lesson.id];
  const tx = (en: string, b?: string) => txI(s.profile.lang, en, b);
  const done = isDone(s, "lesson", lesson.id);
  const practical = ALL_PRACTICALS[lesson.id];
  const [viewed, setViewed] = useState(done);
  const [quizOk, setQuizOk] = useState(done);
  const [pracOk, setPracOk] = useState(done);
  const [justCompleted, setJustCompleted] = useState(false);
  // Chapter steps (the old task board, compacted to one checklist line):
  // steps 4–5 ARE the graded quiz + practical (unchanged gates); steps 1–3
  // guide the doing and never lock anything.
  const [taskLearn, setTaskLearn] = useState(done);
  const [taskRun, setTaskRun] = useState(done);
  const [taskLab, setTaskLab] = useState(done);

  useEffect(() => { setViewed(done); setQuizOk(done); setPracOk(done); setTaskLearn(done); setTaskRun(done); setTaskLab(done); }, [lesson.id, done]);

  useEffect(() => {
    if (!done && viewed && quizOk && pracOk) {
      completeItem("lesson", lesson.id, lesson.xp, 100, `Lesson: ${lesson.title}`);
      setJustCompleted(true);
    }
  }, [viewed, quizOk, pracOk, done, lesson.id, lesson.xp, lesson.title]);

  const { entry: whyEntry } = useWhyEntry(lesson.id);
  // v26 playground audit: this lesson's worked example is a written sample
  // (note / document / tool file), not code — it renders as a format sample
  // with Copy and no Run, and step 2 becomes the writing task it really is.
  const sampleLesson = isSampleContent(lesson.code);
  const cp = ALL_CHECKPOINTS.find((c) => c.afterLessons.includes(lesson.id));
  const need = programmingNeed(lesson);
  const note = NOTES_ALL[lesson.id];
  const tips = TIPS_ALL[lesson.id];
  const ex = realExampleFor(lesson);
  const body = "cl-lesson-body";
  // ONE purpose line: the first sentence of the lesson's own relevance text —
  // what this topic is and what it is used for, nothing more.
  const relevanceFull = tx(lesson.relevance, L?.relevance);
  const purpose = relevanceFull.split(/(?<=[.!?।])\s+/)[0] ?? relevanceFull;

  const steps = [
    { ok: taskLearn, label: txI(s.profile.lang, "1 · Read the main point", "১ · মূল কথা পড়ো") },
    { ok: taskRun, label: sampleLesson ? (txI(s.profile.lang, "2 · Write the sample yourself", "২ · Sample-টি নিজে লেখো")) : (txI(s.profile.lang, "2 · Run the worked example", "২ · উদাহরণটি চালাও")) },
    { ok: taskLab, label: txI(s.profile.lang, "3 · Do the guided lab", "৩ · Guided lab করো") },
    { ok: quizOk, label: txI(s.profile.lang, "4 · Quiz ≥70%", "৪ · Quiz ≥৭০%") },
    { ok: pracOk, label: txI(s.profile.lang, "5 · Practical", "৫ · Practical") },
  ];

  const smallBox = "rounded-lg border border-[color:var(--border)] bg-[color:var(--surface2)] p-3";
  const smallTitle = "mb-1.5 text-[13px] font-bold text-[color:var(--text)]";

  return (
    <article className="cl-lesson mx-auto w-full max-w-[1100px]">
      <button type="button" onClick={back} className="mb-2 min-h-[44px] text-sm font-semibold text-[color:var(--accent)]">← Back to Learning Paths</button>

      {/* Chapter header — compact: title, small facts, ONE purpose line. */}
      <header>
        <div className="flex flex-wrap items-start gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white shadow" style={{ background: levelAccent(lesson.level) }} aria-hidden="true">{lesson.level}</span>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: levelAccent(lesson.level) }}>Level {lesson.level} · {lesson.skill}</p>
            <h2 className="cl-lesson-title mt-0.5">{lessonTitle(s.profile.lang, lesson.id, lesson.title)}</h2>
          </div>
          {done ? <Badge tone="ok">✓ Completed · {lesson.xp} XP</Badge> : null}
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--text)]"><span className="font-bold text-[color:var(--accent)]">{txI(s.profile.lang, "In one line: ", "এক লাইনে: ")}</span>{purpose}</p>
        <div className="mt-2 flex flex-wrap gap-1.5" aria-label={txI(s.profile.lang, "Lesson facts", "পাঠের তথ্য")}>
          <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Time", "সময়")}</b> ~{lesson.minutes} min</span>
          <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Difficulty", "কঠিনতা")}</b> {lesson.difficulty}</span>
          <span className="cl-meta-chip"><b>XP</b> {lesson.xp}</span>
          <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Needs first", "আগে লাগবে")}</b> {lesson.prereq}</span>
        </div>
      </header>
      {HONOURS_MATCH[lesson.level] ? <div className="mt-2.5"><HonoursNotice level={lesson.level} isBn={isBn} variant="lesson" /></div> : null}
      {justCompleted ? <p role="status" className="cl-pop mt-3 rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-sm text-emerald-200">Lesson complete — {lesson.xp} XP earned. <strong>Next lesson unlocked.</strong></p> : null}
      {note ? <p className="mt-2.5 text-[13px] leading-relaxed text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{txI(s.profile.lang, "What you already know from the previous lesson: ", "আগের পাঠ থেকে যা ইতিমধ্যে জানো: ")}</strong>{isBn ? note.recapBn : note.recapEn}</p> : null}
      <p className="mt-1.5 text-[13px] leading-relaxed text-[color:var(--dim)]">
        <strong className="text-[color:var(--text)]">{txI(s.profile.lang, "Programming you need for this lesson: ", "এই পাঠের জন্য দরকারি programming: ")}</strong>
        {isBn ? need.bnText : need.text}
        {need.lessonId ? <> — <button type="button" className="font-semibold text-[color:var(--accent)] underline" onClick={() => goLesson(need.lessonId as string)}>{txI(s.profile.lang, "open that Level 4 lesson", "ওই Level 4 পাঠটি খোলো")}</button></> : null}
      </p>

      {/* Compact checklist line — replaces the old task board. */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2" role="list" aria-label={txI(s.profile.lang, "Steps in this chapter", "এই অধ্যায়ের ধাপ গুলো")}>
        {steps.map((st, i) => (
          <span key={st.label} role="listitem" className="inline-flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden="true" className="text-[color:var(--dim)]">→</span> : null}
            <span className={`rounded-full px-2.5 py-1 text-[12px] font-bold ${st.ok ? "bg-emerald-600 text-white" : "bg-[color:var(--surface2)] text-[color:var(--dim)]"}`}>{st.ok ? "✓ " : ""}{st.label}</span>
          </span>
        ))}
      </div>

      {/* The chapter text beside the practice pane: main point +
          definitions + figure on the left; worked example + the live
          pane + guided-lab exercise on the right. */}
      <div className="mt-3 grid items-start gap-3 lg:grid-cols-2">
        <section aria-label={txI(s.profile.lang, "Main point", "মূল কথা")} className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5 sm:p-4">
          <h3 className="text-[15px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "The main point — what this chapter teaches", "মূল কথা — এই অধ্যায়ে যা শেখানো হচ্ছে")}</h3>
          <div className="mt-2">
            {lesson.concept.map((p, i) => <p key={i} className={`${i === 0 ? "cl-concept-lead" : body} mb-2 last:mb-0`}>{tx(p, L?.concept[i])}</p>)}
          </div>
          {lesson.terms.length ? (
            <div className="mt-3 border-t border-[color:var(--border)] pt-2.5">
              <h4 className={smallTitle}>{txI(s.profile.lang, "Key definitions", "মূল পরিভাষা — সংজ্ঞা")}</h4>
              <dl className="grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                {lesson.terms.map((t, ti) => (
                  <div key={t.term} className="text-[13px] leading-snug"><dt className="inline font-bold text-[color:var(--text)]">{t.term}</dt><dd className="inline text-[color:var(--dim)]"> — {tx(t.def, L?.termsBn[ti])}</dd></div>
                ))}
              </dl>
            </div>
          ) : null}
          <figure className="mt-3 border-t border-[color:var(--border)] pt-2.5">
            <h4 className={smallTitle}>{txI(s.profile.lang, "Figure — ", "চিত্র — ")}{lesson.diagramTitle}</h4>
            <DiagramView lesson={lesson} bnRows={isBn ? L?.diagram : undefined} />
          </figure>
          <div className="mt-3 border-t border-[color:var(--border)] pt-2.5">
            <h4 className={smallTitle}>{txI(s.profile.lang, "Quick check — did the idea land?", "ছোট যাচাই — ধারণাটা ধরতে পেরেছো?")}</h4>
            {taskLearn ? <p className="text-sm text-emerald-300">✓ {txI(s.profile.lang, "Check passed", "যাচাই পাস হয়েছে")}</p> : <TermCheck lesson={lesson} isBn={isBn} bnDefs={L?.termsBn} onOk={() => setTaskLearn(true)} />}
          </div>
        </section>

        <div className="min-w-0 space-y-3">
          <section aria-label={sampleLesson ? (txI(s.profile.lang, "Written sample", "লিখিত sample")) : (txI(s.profile.lang, "Worked example", "Worked example"))}>
            <h3 className="mb-1.5 text-[13px] font-bold text-[color:var(--dim)]">{sampleLesson ? (txI(s.profile.lang, "Written sample — ", "লিখিত sample — ")) : (txI(s.profile.lang, "Worked example — ", "Worked example — "))}<span className="mono font-medium text-[color:var(--text)]">{lesson.code.title}</span></h3>
            {sampleLesson ? (
              <FormatSample code={lesson.code} onCopy={() => setTaskRun(true)} />
            ) : (
              <CodePlayground code={lesson.code} mini whyRun={whyEntry?.why} outputMeaning={whyEntry?.output} onRan={() => setTaskRun(true)} />
            )}
            {sampleLesson ? (
              <>
                <h4 className="mt-3 text-[13px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "What your finished piece gives you (the result)", "তোমার তৈরি লেখাটি যা দেবে (result)")}</h4>
                <p className="mt-1.5 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-[13px] leading-relaxed text-[color:var(--text)]">{lesson.code.output}</p>
              </>
            ) : (
              <>
                <h4 className="mt-3 text-[13px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Expected output (what the real command/program prints in the stated environment)", "প্রত্যাশিত output (আসল command/program উল্লিখিত পরিবেশে যা ছাপে)")}</h4>
                <div className="mt-1.5"><CodeBlock code={lesson.code.output} label="expected output (verified) — compare with your run" /></div>
              </>
            )}
          </section>

          <section aria-label={txI(s.profile.lang, "Exercise — guided lab", "অনুশীলন — Guided Lab")} className="rounded-xl border-2 p-3.5" style={{ borderColor: "color-mix(in srgb, var(--c-lab) 45%, var(--border))", background: "color-mix(in srgb, var(--c-lab) 6%, var(--surface))" }}>
            <h3 className="text-[15px] font-bold text-[color:var(--text)]">✎ {txI(s.profile.lang, "Exercise — guided lab (do it in the pane right here)", "Exercise — Guided Lab (পাশের pane-এই করো)")}</h3>
            <div className="mt-1.5">
      {lesson.id === "l1-inside-computer" ? (() => {
        const labInspect = LABS.find((x) => x.id === "lab-inspect");
        const labBn = LAB_BN["lab-inspect"];
        return (
          <div className="space-y-4">
            <p className="cl-callout cl-callout-warn text-sm leading-relaxed text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{txI(s.profile.lang, "Your own machine / your own lab only: ", "শুধু নিজের machine / নিজের lab: ")}</strong>{txI(s.profile.lang, "Run every command in this lab only on your own PC — never on anyone else's system. The commands are read-only; they change nothing.", "এই Lab-এর সব command শুধু তোমার নিজের PC-তে চালাবে — অন্য কারো সিস্টেমে কখনো নয়। Command গুলো read-only, কিছু বদলায় না।")}</p>
            <ol className="space-y-3">
              <li className="cl-lab-step">
                <p className="text-sm font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Step 1 · Run the commands on YOUR OWN PC and write down your readings", "ধাপ ১ · নিজের PC-তে command চালিয়ে নিজের reading নাও")}</p>
                <p className={`mt-1 ${body}`}>{txI(s.profile.lang, "Open PowerShell, run the commands from the Code section above one by one, and write down these 5 readings — you will submit them in Task 3 above:", "PowerShell খোলো, ওপরের Code অংশের command গুলো একে একে চালাও, আর এই ৫টি reading লিখে রাখো — এগুলোই Task 3-তে জমা দেবে:")}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li className={body}><span className="mono text-[13px]">Get-ComputerInfo</span> → {txI(s.profile.lang, "OS version and RAM", "OS version আর RAM")}</li>
                  <li className={body}><span className="mono text-[13px]">Get-Disk</span> → {txI(s.profile.lang, "PartitionStyle: GPT or MBR", "PartitionStyle: GPT নাকি MBR")}</li>
                  <li className={body}><span className="mono text-[13px]">Confirm-SecureBootUEFI</span> → {txI(s.profile.lang, "True / False (on legacy BIOS it errors — that error is also a reading)", "True / False (legacy BIOS হলে error আসবে — সেটাও একটি reading)")}</li>
                  <li className={body}><span className="mono text-[13px]">Get-Tpm</span> → {txI(s.profile.lang, "TpmPresent: present or absent", "TpmPresent: আছে নাকি নেই")}</li>
                </ul>
              </li>
              <li className="cl-lab-step">
                <p className="text-sm font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Step 2 · Compare your readings with the simulated profile", "ধাপ ২ · নিজের reading-এর সঙ্গে simulated profile মেলাও")}</p>
                <p className={`mt-1 ${body}`}>{txI(s.profile.lang, "The profile card below is a fictional lab PC — not a real machine. Put your own reading beside each line: where do they match, where do they differ, and which difference matters for security?", "নিচের profile card-টি একটি কাল্পনিক lab PC-র — আসল machine নয়। প্রতিটি লাইনের পাশে নিজের reading বসিয়ে ভাবো: কোথায় মিল, কোথায় পার্থক্য, আর কোন পার্থক্যটা নিরাপত্তার জন্য গুরুত্বপূর্ণ।")}</p>
                <div className="mt-3 overflow-hidden rounded-xl border border-[color:var(--border)]" aria-label={txI(s.profile.lang, "Simulated machine profile", "Simulated machine profile")}>
                  <div className="flex flex-wrap items-center gap-2 bg-[#111827] px-3 py-2"><span className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" /><span className="h-3 w-3 rounded-full bg-amber-400" aria-hidden="true" /><span className="h-3 w-3 rounded-full bg-emerald-500" aria-hidden="true" /><span className="ml-1 font-mono text-[11px] text-slate-300">lab-inspect — starting state</span><span className="ml-auto rounded-full border border-amber-700 px-2 py-0.5 text-[11px] font-semibold text-amber-300">{txI(s.profile.lang, "SIMULATED — not a real machine", "SIMULATED — আসল machine নয়")}</span></div>
                  <dl className="grid gap-x-4 gap-y-1.5 bg-[#070b12] p-3 font-mono text-[12.5px] leading-relaxed text-[#a7f3d0] sm:grid-cols-2">
                    <div><dt className="inline text-slate-400">OS: </dt><dd className="inline">Windows 11 Pro 23H2</dd></div>
                    <div><dt className="inline text-slate-400">RAM: </dt><dd className="inline">8 GB</dd></div>
                    <div><dt className="inline text-slate-400">Disk: </dt><dd className="inline">GPT</dd></div>
                    <div><dt className="inline text-slate-400">Secure Boot: </dt><dd className="inline font-bold text-amber-300">OFF</dd></div>
                    <div><dt className="inline text-slate-400">TPM: </dt><dd className="inline">present</dd></div>
                    <div><dt className="inline text-slate-400">Last update: </dt><dd className="inline font-bold text-amber-300">7 months ago</dd></div>
                    <div className="sm:col-span-2"><dt className="inline text-slate-400">Accounts: </dt><dd className="inline">second account &lsquo;Admin&rsquo; — <span className="font-bold text-red-300">no password</span></dd></div>
                  </dl>
                </div>
              </li>
              <li className="cl-lab-step">
                <p className="text-sm font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Step 3 · Identify the single most urgent weakness", "ধাপ ৩ · সবচেয়ে জরুরি দুর্বলতা একটি বেছে নাও")}</p>
                <p className={`mt-1 ${body}`}>{txI(s.profile.lang, "The profile holds three real weaknesses: Secure Boot OFF, 7 months without updates, and a passwordless Admin account. Decide which must be fixed first and why (‘old’ is not the same as ‘unsafe’ — exposed and easy to exploit ranks first). The lab tasks check exactly this judgment.", "Profile-এ তিনটি আসল দুর্বলতা আছে: Secure Boot OFF, ৭ মাস ধরে update হয়নি, আর password ছাড়া Admin account। কোনটি সবার আগে ঠিক করতে হবে আর কেন — সেটা নিজে ঠিক করো (‘পুরোনো’ মানেই দুর্বল নয়; উন্মুক্ত ও সহজে কাজে লাগানো যায়, এমনটাই আগে)। Lab-এর কাজে ঠিক এই সিদ্ধান্তটাই যাচাই হবে।")}</p>
              </li>
            </ol>
            {labInspect ? (
              <div className="rounded-xl border-2 p-3.5" style={{ borderColor: "color-mix(in srgb, var(--c-lab) 45%, var(--border))", background: "color-mix(in srgb, var(--c-lab) 7%, var(--surface))" }}>
                <p className="flex flex-wrap items-center gap-2 text-sm font-bold text-[color:var(--text)]">🧪 {txI(s.profile.lang, "Open the lab: ", "Lab খোলো: ")}{labInspect.title} <span className="rounded-full border border-amber-700 px-2 py-0.5 text-[11px] font-semibold text-amber-300">SIMULATED LAB</span></p>
                <p className={`mt-1 ${body}`}>{done ? (txI(s.profile.lang, "This lesson is complete — the lab is open now. Start it from the ‘Practice that belongs to this lesson’ panel below or from Interactive Labs.", "এই পাঠ শেষ — Lab এখন খোলা। নিচের ‘এই পাঠের সঙ্গে জড়িত অনুশীলন’ panel থেকে বা Interactive Labs থেকে শুরু করো।")) : (txI(s.profile.lang, "This lab unlocks only after you complete this lesson — pass the quiz (≥70%) and the practical below. Preview its 3 tasks here so you know what the real work is:", "এই Lab খুলবে শুধু এই পাঠ শেষ করার পর — নিচে quiz-এ ≥৭০% আর practical-এ pass করলেই। আগেভাগে এখানে তার ৩টি কাজ দেখে রাখো, যাতে জানো আসলে কী করতে হবে:"))}</p>
                <p className={`mt-1 ${body}`}>{txI(s.profile.lang, "The lab's work is not just picking MCQ options: read the profile evidence (GPT, Secure Boot, patch state, accounts), compare it with your own machine's readings, and decide from that evidence — the options only check that decision.", "Lab-এর কাজ শুধু MCQ option বাছা নয়: profile-এর প্রমাণ পড়া (GPT, Secure Boot, patch, account), সেটাকে নিজের machine-এর reading-এর সঙ্গে মেলানো, আর প্রমাণ থেকে সিদ্ধান্ত নেওয়া — option গুলো সেই সিদ্ধান্ত যাচাই করে মাত্র।")}</p>
                <ol className="mt-2.5 space-y-2">
                  {labInspect.tasks.map((t, ti) => (
                    <li key={ti} className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5">
                      <p className="text-sm font-semibold text-[color:var(--text)]">{isBn ? `Lab কাজ ${ti + 1}` : `Lab task ${ti + 1}`}</p>
                      <p className={`mt-0.5 ${body}`}>{tx(t.prompt, labBn?.tasks[ti]?.prompt)}</p>
                    </li>
                  ))}
                </ol>
                {done && goPractice ? <button type="button" onClick={() => goPractice("labs")} className="cl-btn mt-3 min-h-[44px] px-4 py-2 text-sm font-semibold text-white" style={{ background: "var(--accent2)" }}>{txI(s.profile.lang, "Open the lab in Interactive Labs →", "Interactive Labs-এ Lab খোলো →")}</button> : null}
              </div>
            ) : null}
          </div>
        );
      })() : <p className={body}>{tx(lesson.lab, L?.lab)}</p>}
            </div>
            {/* Try + run INSIDE this lesson's guided lab: real browser run for
                JS/Python/HTML, a simulated terminal (+ own-PC step) for shell
                commands — the learner tries the sample here, not only reads it. */}
            <div className="mt-3">
              <LabTryBox code={lesson.code} isBn={isBn} onRan={() => setTaskRun(true)} />
            </div>
            <div className="mt-2.5 border-t border-[color:var(--border)] pt-2">
              <p className="mb-1 text-[12px] font-semibold text-[color:var(--dim)]">{txI(s.profile.lang, "Lab check — step 3:", "Lab যাচাই — ধাপ ৩:")}</p>
              {taskLab ? <p className="text-sm text-emerald-300">✓ {txI(s.profile.lang, "Lab check passed", "Lab যাচাই পাস হয়েছে")}</p> : <LabCheck lesson={lesson} isBn={isBn} bnDefs={L?.termsBn} onOk={() => setTaskLab(true)} />}
            </div>
          </section>
        </div>
      </div>

      {/* Deep content — full, but folded away until opened. */}
      <ProgCollapse title={txI(s.profile.lang, "Deep dive — why this code? (the full six-part explanation)", "গভীরে বোঝো — এই code-টা কেন? (ছয় অংশের পুরো ব্যাখ্যা)")}>
        <WhyCodePanel lesson={lesson} />
      </ProgCollapse>
      <ProgCollapse title={txI(s.profile.lang, "The rest of the chapter — objectives · why it matters · real example · mistakes · security · own-device practice · mission", "অধ্যায়ের বাকি detail — লক্ষ্য · আসল কাজে কেন · বাস্তব উদাহরণ · ভুল · নিরাপত্তা · নিজের device-এ practice · mission")}>
        <div className="grid gap-3 md:grid-cols-2">
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Learning objectives", "শেখার লক্ষ্য")}</h4>
            <ul className="list-disc space-y-1 pl-4.5">{lesson.objectives.map((o, i) => <li key={o} className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(o, L?.objectives[i])}</li>)}</ul>
          </div>
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Why this matters in real work", "আসল কাজে এটি কেন গুরুত্বপূর্ণ")}</h4>
            <p className="text-[13px] leading-relaxed text-[color:var(--dim)]">{relevanceFull}</p>
          </div>
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Common mistakes", "সাধারণ ভুল")}</h4>
            <ul className="list-disc space-y-1 pl-4.5">{lesson.mistakes.map((m, i) => <li key={m} className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(m, L?.mistakes[i])}</li>)}</ul>
          </div>
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Security implications", "নিরাপত্তাগত প্রভাব")}</h4>
            <p className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(lesson.security, L?.security)}</p>
          </div>
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Mission — on your own", "Mission — নিজে করো")}</h4>
            <p className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(lesson.mission, L?.mission)}</p>
          </div>
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Summary", "সারসংক্ষেপ")}</h4>
            <p className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(lesson.summary, L?.summary)}</p>
            <p className="mt-1.5 text-[13px] text-[color:var(--text)]"><strong>{txI(s.profile.lang, "Skill: ", "দক্ষতা: ")}</strong>{tx(lesson.skillGained, L?.skillGained)}</p>
          </div>
          {note?.noteEn ? (
            <div className={smallBox}>
              <h4 className={smallTitle}>{isBn ? `গুরুত্বপূর্ণ নোট — ${note.ideaBn ?? ""}` : `Important note — ${note.ideaEn ?? ""}`}</h4>
              <p className="text-[13px] leading-relaxed text-[color:var(--dim)]">{isBn ? note.noteBn : note.noteEn}</p>
            </div>
          ) : null}
          {tips ? (
            <div className={smallBox}>
              <h4 className={smallTitle}>{txI(s.profile.lang, "Tips & Tricks", "টিপস ও ট্রিকস")}</h4>
              <ul className="list-disc space-y-1 pl-4.5">{(isBn ? tips.bn : tips.en).map((tip) => <li key={tip} className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tip}</li>)}</ul>
            </div>
          ) : null}
        </div>
        <div className={`${smallBox} mt-3`}>
          <h4 className={smallTitle}>{txI(s.profile.lang, "Real example — ", "বাস্তব উদাহরণ — ")}{lesson.code.title}</h4>
          <p className="text-[13px] leading-relaxed text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{txI(s.profile.lang, "Run it yourself: ", "নিজে চালিয়ে দেখো: ")}</strong>{ex.runLocally}{ex.runnable ? (txI(s.profile.lang, " — or press Run in the Worked example pane above (JavaScript and Python run for real in your browser).", " — অথবা ওপরের Worked example pane-এ Run চাপো (JavaScript ও Python browser-এই সত্যিই চলে)।")) : ""}</p>
          <h5 className="mb-1.5 mt-2.5 text-[13px] font-bold text-[color:var(--text)]">{ex.runnable ? (txI(s.profile.lang, "The output it really produces (first lines)", "যে output সত্যিই আসে (প্রথম লাইন গুলো)")) : (txI(s.profile.lang, "The result the worked example produces (first lines)", "Worked example-টির আসল result (প্রথম লাইন গুলো)"))}</h5>
          <CodeBlock code={ex.outputHead} label={txI(s.profile.lang, "real output — compare with your own run", "আসল output — নিজের run-এর সঙ্গে মেলাও")} />
          {ex.proof.length ? (
            <>
              <h5 className="mb-1 mt-2.5 text-[13px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Why this output is the proof", "এই output-ই কেন প্রমাণ")}</h5>
              <ul className="list-disc space-y-1 pl-4.5">{ex.proof.map((p) => <li key={p} className="text-[13px] leading-relaxed text-[color:var(--dim)]">{p}</li>)}</ul>
            </>
          ) : null}
        </div>
        <div className="mt-3">
        {(() => { const pp = pcPracticeFor(lesson, L?.pc?.[0]); const steps = isBn ? pp.stepsBn : pp.stepsEn; return (
          <div className="cl-bench cl-pc-practice">
            <h4 className="mb-2 text-sm font-bold text-[color:var(--text)]">🖥️ {txI(s.profile.lang, "PC practice — do this one task on your own PC", "PC practice — এই একটা কাজ নিজের PC-তে নিজে করো")}</h4>
            <p className="text-sm leading-relaxed text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{txI(s.profile.lang, "Where: ", "কোথায় করবে: ")}</strong>{isBn ? pp.whereBn : pp.whereEn}</p>
            <ol className="mt-2 list-decimal pl-5">{steps.map((st) => <li key={st}>{st}</li>)}</ol>
            <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{txI(s.profile.lang, "What you should see: ", "যা দেখতে পাওয়া উচিত: ")}</strong><span className="mono break-all text-[13px] text-[color:var(--text)]">{pp.expectedLine}</span></p>
            <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{txI(s.profile.lang, "You know it worked when: ", "হয়েছে বুঝবে যখন: ")}</strong>{isBn ? pp.doneBn : pp.doneEn}</p>
          </div> ); })()}
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {lesson.pc.length > 1 ? <div className={smallBox}><h4 className={smallTitle}>🖥️ {txI(s.profile.lang, "More practice on your PC", "তোমার PC-তে আরও অনুশীলন")}</h4><ol className="list-decimal space-y-1 pl-4.5">{lesson.pc.slice(1).map((p) => { const origIdx = lesson.pc.indexOf(p); return <li key={p} className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(p, L?.pc[origIdx])}</li>; })}</ol></div> : null}
          <div className={smallBox}><h4 className={smallTitle}>📱 {txI(s.profile.lang, "Practice on Android", "Android-এ অনুশীলন")}</h4><ol className="list-decimal space-y-1 pl-4.5">{lesson.android.map((p, i) => <li key={p} className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(p, L?.android[i])}</li>)}</ol></div>
        </div>
      </ProgCollapse>

      {/* Graded gates — small boxes, same 70% rule, same XP. */}
      <section aria-label={txI(s.profile.lang, "Assessments", "মূল্যায়ন")} className="mt-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[15px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "End-of-chapter exercises — both must pass", "অধ্যায়ের শেষের exercise — দুটোতেই পাস করতে হবে")}</h3>
          <Badge tone={viewed ? "ok" : "warn"}>{viewed ? (txI(s.profile.lang, "Read ✓", "পড়া হয়েছে ✓")) : (txI(s.profile.lang, "Not yet confirmed read", "এখনো পড়া confirm হয়নি"))}</Badge>
          <Badge tone={quizOk ? "ok" : "dim"}>Quiz {quizOk ? "✓" : "…"}</Badge>
          <Badge tone={pracOk ? "ok" : "dim"}>Practical {pracOk ? "✓" : "…"}</Badge>
        </div>
        {!viewed ? (
          <button type="button" onClick={() => setViewed(true)} className="mt-3 min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white">
            {txI(s.profile.lang, "I have read the main point, the definitions and the worked example — unlock the exercises", "আমি মূল কথা, সংজ্ঞা আর উদাহরণ পড়েছি — exercise খোলো")}
          </button>
        ) : (
          <div className="mt-3 grid items-start gap-3 xl:grid-cols-[1fr_400px]">
            <div className="min-w-0 rounded-xl border border-[color:var(--border)] p-3">
              <Quiz id={lesson.id} title={`Knowledge Quiz — ${lessonTitle(s.profile.lang, lesson.id, lesson.title)}`} questions={lesson.quiz} topics={lesson.objectives} onPass={() => setQuizOk(true)} bnQ={{ q: L?.quizQ, why: L?.quizWhy }} />
            </div>
            <div className="min-w-0">
              {practical ? <PracticalView id={lesson.id} task={practical} onPass={() => setPracOk(true)} bn={PRACTICAL_BN[lesson.id]} /> : <p className={body}>{tx(lesson.practical, L?.practical)}</p>}
            </div>
          </div>
        )}
        {done ? <p className="mt-2.5 text-sm text-emerald-300">{txI(s.profile.lang, "This lesson is complete. Revision is always open — re-answering never removes XP and never re-locks anything.", "এই পাঠ সম্পূর্ণ। পুনরায় পড়া সবসময় খোলা — আবার উত্তর দিলে XP কাটে না, কিছুই আবার বন্ধ হয় না।")}</p> : null}
      </section>

      <p className="mt-3 text-[13px] leading-relaxed text-[color:var(--dim)]">
        <strong className="text-[color:var(--text)]">{txI(s.profile.lang, "What you can do now: ", "এখন তুমি যা করতে পারো: ")}</strong>
        {tx(lesson.skillGained, L?.skillGained)}
        {done ? (txI(s.profile.lang, " — this lesson is complete; the next one is unlocked.", " — এই পাঠ সম্পূর্ণ; পরের পাঠ খুলে গেছে।")) : (txI(s.profile.lang, " — pass the Quiz and Practical above and this lesson is complete.", " — Quiz আর Practical পাস করলেই এই পাঠ সম্পূর্ণ হবে।"))}
      </p>

{(() => {
        const rel = [
          ...Object.entries(LAB_REQUIRES).filter(([, r]) => r.includes(lesson.id)).map(([id]) => ({ id, kind: "Lab", view: "labs", title: LABS.find((x) => x.id === id)?.title ?? id })),
          ...Object.entries(MISSION_REQUIRES).filter(([, r]) => r.includes(lesson.id)).map(([id]) => ({ id, kind: "Mission", view: "missions", title: MISSIONS.find((x) => x.id === id)?.title ?? id })),
          ...Object.entries(CTF_REQUIRES).filter(([, r]) => r.includes(lesson.id)).map(([id]) => ({ id, kind: "CTF", view: "ctf", title: CTFS.find((x) => x.id === id)?.title ?? id })),
        ];
        if (!rel.length) return null;
        return (
          <div className="mt-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
            <h3 className="text-base font-semibold text-[color:var(--text)]">{txI(s.profile.lang, "Practice that belongs to this lesson", "এই পাঠের সঙ্গে জড়িত অনুশীলন")}</h3>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {rel.map((r) => (
                <button key={r.id} type="button" disabled={!done} onClick={() => goPractice?.(r.view)}
                  className="min-h-[42px] rounded-lg border border-[color:var(--border)] px-3.5 py-2 text-sm font-medium text-[color:var(--text)] disabled:opacity-50">
                  {done ? "▶" : "•"} {r.kind}: {r.title}
                </button>
              ))}
            </div>
          </div>
        );
      })()}

      <UnlocksPanel lessonId={lesson.id} nextLabel={(() => { const idx = PATH.findIndex((n) => n.type === "lesson" && n.lesson.id === lesson.id); const nx = idx >= 0 ? PATH[idx + 1] : undefined; return nx ? nodeTitle(nx) : undefined; })()} goPractice={goPractice} />

      <footer className="mt-5 border-t border-[color:var(--border)] pt-2.5 text-xs leading-relaxed text-[color:var(--dim)]">
        <p>Version {lesson.version} · Last reviewed {lesson.reviewed} · Reference: {lesson.reference} · Limitations: {lesson.limitations}</p>
        {goKb ? <p className="mt-1"><button type="button" onClick={goKb} className="font-semibold text-[color:var(--accent)] underline decoration-dotted underline-offset-2">{txI(s.profile.lang, "Sources & versions: open the verified references in the Knowledge Base →", "উৎস ও সংস্করণ: Knowledge Base-এ যাচাই করা reference খোলো →")}</button></p> : null}
        {cp ? <p className="mt-1">{isBn ? <>এই পাঠের দলের পরে: <strong className="text-[color:var(--text)]">{cp.title}</strong> (Layer 2 checkpoint), তারপর Level {lesson.level} Final (Layer 3)।</> : <>After this lesson group: <strong className="text-[color:var(--text)]">{cp.title}</strong> (Layer 2 checkpoint), then the Level {lesson.level} Final (Layer 3).</>}</p> : null}
      </footer>
    </article>
  );
}

/* ================= Programming lesson view (Level 4 only) =================
   TryHackMe-style compact topic layout (user order, 15 Nov 2026): the topic
   and its ONE-line purpose first, the main point beside ONE compact
   compiler with the example + exercise next to it, the six-part why-panel
   and the remaining detail folded into collapsed compact blocks, and the
   graded Quiz + Practical as small boxes under a one-line checklist.
   Same content, same gates (viewed + quiz ≥70% + practical), same XP.
   Levels 0–3 and 5–31 use the textbook LessonView above (v32) — the same
   chapter shape: main point + definitions + figure beside the worked
   example and its live pane, detail folded, exercises at the end. */

function ProgCollapse({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]">
      <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)}
        className="flex min-h-[44px] w-full items-center gap-2 px-3.5 py-2 text-left text-sm font-bold text-[color:var(--text)]">
        <span aria-hidden="true" className="text-[color:var(--accent)]">{open ? "▾" : "▸"}</span>{title}
        <span className="ml-auto text-xs font-medium text-[color:var(--dim)]">{open ? "" : "…"}</span>
      </button>
      <div className={open ? "border-t border-[color:var(--border)] px-3.5 py-3" : "hidden"}>{children}</div>
    </div>
  );
}

function ProgLessonView({ lesson, back, goKb, goPractice }: { lesson: Lesson; back: () => void; goLesson: (id: string) => void; goKb?: () => void; goPractice?: (kind: string) => void }) {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const L = LESSON_BN_FULL[lesson.id];
  const tx = (en: string, b?: string) => txI(s.profile.lang, en, b);
  const done = isDone(s, "lesson", lesson.id);
  const practical = ALL_PRACTICALS[lesson.id];
  const [viewed, setViewed] = useState(done);
  const [quizOk, setQuizOk] = useState(done);
  const [pracOk, setPracOk] = useState(done);
  const [justCompleted, setJustCompleted] = useState(false);
  const [taskLearn, setTaskLearn] = useState(done);
  const [taskRun, setTaskRun] = useState(done);
  // The ONE compiler beside the topic carries BOTH the worked example and
  // the exercise starter (user rule, 15 Nov 2026: example AND exercise real
  // in the compiler, beside the topic). Step 3 ("Exercise in the compiler")
  // is satisfied ONLY by actually running the exercise in the compiler
  // (exRun). The LabCheck MCQ below it is an additional check with its own
  // separate result (mcqOk) — it can never tick step 3 on its own.
  const [codeTab, setCodeTab] = useState<"example" | "exercise">("example");
  const [exRun, setExRun] = useState(done);
  const [mcqOk, setMcqOk] = useState(done);
  const exercise = EXERCISE_CODE[lesson.id];

  useEffect(() => { setViewed(done); setQuizOk(done); setPracOk(done); setTaskLearn(done); setTaskRun(done); setExRun(done); setMcqOk(done); setCodeTab("example"); }, [lesson.id, done]);

  useEffect(() => {
    if (!done && viewed && quizOk && pracOk) {
      completeItem("lesson", lesson.id, lesson.xp, 100, `Lesson: ${lesson.title}`);
      setJustCompleted(true);
    }
  }, [viewed, quizOk, pracOk, done, lesson.id, lesson.xp, lesson.title]);

  const sampleLesson = isSampleContent(lesson.code);
  const cp = ALL_CHECKPOINTS.find((c) => c.afterLessons.includes(lesson.id));
  const note = NOTES_ALL[lesson.id];
  const tips = TIPS_ALL[lesson.id];
  const cmp = COMPARE4[lesson.id];
  const body = "cl-lesson-body";
  // ONE purpose line: the first sentence of the lesson's own relevance text —
  // what this topic is and what it is used for, nothing more.
  const relevanceFull = tx(lesson.relevance, L?.relevance);
  const purpose = relevanceFull.split(/(?<=[.!?।])\s+/)[0] ?? relevanceFull;

  const steps = [
    { ok: taskLearn, label: txI(s.profile.lang, "1 · Read the main point", "১ · মূল কথা পড়ো") },
    { ok: taskRun, label: sampleLesson ? (txI(s.profile.lang, "2 · Copy the sample", "২ · Sample copy করো")) : (txI(s.profile.lang, "2 · Run the code", "২ · Code চালাও")) },
    { ok: exRun, label: txI(s.profile.lang, "3 · Exercise in the compiler", "৩ · Exercise compiler-এ চালাও") },
    { ok: quizOk, label: txI(s.profile.lang, "4 · Quiz ≥70%", "৪ · Quiz ≥৭০%") },
    { ok: pracOk, label: txI(s.profile.lang, "5 · Practical", "৫ · Practical") },
  ];

  const smallBox = "rounded-lg border border-[color:var(--border)] bg-[color:var(--surface2)] p-3";
  const smallTitle = "mb-1.5 text-[13px] font-bold text-[color:var(--text)]";

  return (
    <article className="cl-lesson mx-auto w-full max-w-[1100px]">
      <button type="button" onClick={back} className="mb-2 min-h-[44px] text-sm font-semibold text-[color:var(--accent)]">← Back to Learning Paths</button>

      {/* Topic header — compact: title, small facts, ONE purpose line. */}
      <header>
        <div className="flex flex-wrap items-start gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white shadow" style={{ background: levelAccent(lesson.level) }} aria-hidden="true">{lesson.level}</span>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: levelAccent(lesson.level) }}>Level {lesson.level} · {lesson.skill}</p>
            <h2 className="cl-lesson-title mt-0.5">{lessonTitle(s.profile.lang, lesson.id, lesson.title)}</h2>
          </div>
          {done ? <Badge tone="ok">✓ Completed · {lesson.xp} XP</Badge> : null}
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--text)]"><span className="font-bold text-[color:var(--accent)]">{txI(s.profile.lang, "In one line: ", "এক লাইনে: ")}</span>{purpose}</p>
        <div className="mt-2 flex flex-wrap gap-1.5" aria-label={txI(s.profile.lang, "Lesson facts", "পাঠের তথ্য")}>
          <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Time", "সময়")}</b> ~{lesson.minutes} min</span>
          <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Difficulty", "কঠিনতা")}</b> {lesson.difficulty}</span>
          <span className="cl-meta-chip"><b>XP</b> {lesson.xp}</span>
          <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Needs first", "আগে লাগবে")}</b> {lesson.prereq}</span>
        </div>
      </header>
      {HONOURS_MATCH[lesson.level] ? <div className="mt-2.5"><HonoursNotice level={lesson.level} isBn={isBn} variant="lesson" /></div> : null}
      {justCompleted ? <p role="status" className="cl-pop mt-3 rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-sm text-emerald-200">Lesson complete — {lesson.xp} XP earned. <strong>Next lesson unlocked.</strong></p> : null}
      {note ? <p className="mt-2.5 text-[13px] leading-relaxed text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{txI(s.profile.lang, "You already know: ", "আগের topic থেকে জানো: ")}</strong>{isBn ? note.recapBn : note.recapEn}</p> : null}

      {/* Compact checklist line — replaces the old task board. */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2" role="list" aria-label={txI(s.profile.lang, "Steps in this topic", "এই topic-এর ধাপ গুলো")}>
        {steps.map((st, i) => (
          <span key={st.label} role="listitem" className="inline-flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden="true" className="text-[color:var(--dim)]">→</span> : null}
            <span className={`rounded-full px-2.5 py-1 text-[12px] font-bold ${st.ok ? "bg-emerald-600 text-white" : "bg-[color:var(--surface2)] text-[color:var(--dim)]"}`}>{st.ok ? "✓ " : ""}{st.label}</span>
          </span>
        ))}
      </div>

      {/* Main point beside the compiler: example + exercise on the right. */}
      <div className="mt-3 grid items-start gap-3 lg:grid-cols-2">
        <section aria-label={txI(s.profile.lang, "Main point", "মূল কথা")} className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5 sm:p-4">
          <h3 className="text-[15px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "The main point — what this topic teaches", "মূল কথা — এই topic-এ যা শেখানো হচ্ছে")}</h3>
          <div className="mt-2">
            {lesson.concept.map((p, i) => <p key={i} className={`${i === 0 ? "cl-concept-lead" : body} mb-2 last:mb-0`}>{tx(p, L?.concept[i])}</p>)}
          </div>
          {lesson.terms.length ? (
            <div className="mt-3 border-t border-[color:var(--border)] pt-2.5">
              <h4 className={smallTitle}>{txI(s.profile.lang, "Key words", "মূল শব্দ গুলো")}</h4>
              <dl className="grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                {lesson.terms.map((t, ti) => (
                  <div key={t.term} className="text-[13px] leading-snug"><dt className="inline font-bold text-[color:var(--text)]">{t.term}</dt><dd className="inline text-[color:var(--dim)]"> — {tx(t.def, L?.termsBn[ti])}</dd></div>
                ))}
              </dl>
            </div>
          ) : null}
          <div className="mt-3 border-t border-[color:var(--border)] pt-2.5">
            <h4 className={smallTitle}>{txI(s.profile.lang, "Quick check — did the idea land?", "ছোট যাচাই — ধারণাটা ধরতে পেরেছো?")}</h4>
            {taskLearn ? <p className="text-sm text-emerald-300">✓ {txI(s.profile.lang, "Check passed", "যাচাই পাস হয়েছে")}</p> : <TermCheck lesson={lesson} isBn={isBn} bnDefs={L?.termsBn} onOk={() => setTaskLearn(true)} />}
          </div>
        </section>

        <div className="min-w-0 space-y-3">
          <section id={`compiler-${lesson.id}`} aria-label={txI(s.profile.lang, "Example, exercise and compiler", "উদাহরণ, exercise ও compiler")} className="scroll-mt-24">
            {exercise && !sampleLesson ? (
              <div role="tablist" aria-label={txI(s.profile.lang, "Which code is in the compiler", "Compiler-এ কোন code থাকবে")} className="mb-1.5 flex gap-1.5">
                <button type="button" role="tab" aria-selected={codeTab === "example"} onClick={() => setCodeTab("example")}
                  className={`min-h-[40px] flex-1 rounded-lg border px-3 py-1.5 text-[13px] font-bold ${codeTab === "example" ? "border-[color:var(--accent)] bg-[color:var(--surface2)] text-[color:var(--text)]" : "border-[color:var(--border)] text-[color:var(--dim)]"}`}>
                  {txI(s.profile.lang, "Example", "উদাহরণ (Example)")}
                </button>
                <button type="button" role="tab" aria-selected={codeTab === "exercise"} onClick={() => setCodeTab("exercise")}
                  className={`min-h-[40px] flex-1 rounded-lg border px-3 py-1.5 text-[13px] font-bold ${codeTab === "exercise" ? "border-[color:var(--accent)] bg-[color:var(--surface2)] text-[color:var(--text)]" : "border-[color:var(--border)] text-[color:var(--dim)]"}`}>
                  {txI(s.profile.lang, "Exercise — your turn", "Exercise — নিজে করো")}
                </button>
              </div>
            ) : null}
            <h3 className="mb-1.5 text-[13px] font-bold text-[color:var(--dim)]">{codeTab === "exercise" && exercise ? (txI(s.profile.lang, "Exercise — ", "Exercise — ")) : (txI(s.profile.lang, "Example — ", "উদাহরণ — "))}<span className="mono font-medium text-[color:var(--text)]">{codeTab === "exercise" && exercise ? exercise.title : lesson.code.title}</span></h3>
            {sampleLesson ? (
              <FormatSample code={lesson.code} onCopy={() => setTaskRun(true)} />
            ) : codeTab === "exercise" && exercise ? (
              <CodePlayground key={`${lesson.id}-exercise`} code={exercise} mini onRan={() => setExRun(true)} />
            ) : (
              <CodePlayground key={`${lesson.id}-example`} code={lesson.code} mini onRan={() => setTaskRun(true)} />
            )}
            {sampleLesson ? <p className="mt-1.5 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-[13px] leading-relaxed text-[color:var(--text)]">{lesson.code.output}</p> : null}
          </section>

          <section aria-label={txI(s.profile.lang, "Exercise", "অনুশীলন")} className="rounded-xl border-2 p-3.5" style={{ borderColor: "color-mix(in srgb, var(--c-lab) 45%, var(--border))", background: "color-mix(in srgb, var(--c-lab) 6%, var(--surface))" }}>
            <h3 className="text-[15px] font-bold text-[color:var(--text)]">✎ {txI(s.profile.lang, "Exercise — do it in the compiler", "Exercise — compiler-এ নিজে করো")}</h3>
            <p className={`mt-1.5 ${body}`}>{tx(lesson.lab, L?.lab)}</p>
            {exercise && !sampleLesson ? (
              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <button type="button" onClick={() => { setCodeTab("exercise"); document.getElementById(`compiler-${lesson.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                  className="min-h-[42px] rounded-lg bg-[color:var(--accent2)] px-3.5 py-2 text-sm font-semibold text-white">
                  {txI(s.profile.lang, "Load exercise into the compiler ↑", "Exercise code compiler-এ load করো ↑")}
                </button>
                {exRun
                  ? <p role="status" className="text-sm font-medium text-emerald-300">✓ {txI(s.profile.lang, "You ran the exercise in the compiler — the real output is the check", "তুমি exercise-টি compiler-এ চালিয়েছ — output-টাই আসল যাচাই")}</p>
                  : <p className="text-[13px] text-[color:var(--dim)]">{txI(s.profile.lang, "The exercise starter lives in the compiler — finish the TODO and press Run.", "Exercise-এর starter code compiler-এই আছে — TODO অংশটা শেষ করে Run চাপো।")}</p>}
              </div>
            ) : null}
            {lesson.pc[0] ? <p className={`mt-2 ${body}`}><strong className="text-[color:var(--text)]">{txI(s.profile.lang, "Also try on your own PC: ", "নিজের PC-তেও চেষ্টা করো: ")}</strong>{tx(lesson.pc[0], L?.pc[0])}</p> : null}
            <div className="mt-2.5 border-t border-[color:var(--border)] pt-2">
              <p className="mb-1 text-[12px] font-semibold text-[color:var(--dim)]">{txI(s.profile.lang, "Additional check (MCQ) — not a substitute for step 3:", "অতিরিক্ত যাচাই (MCQ) — এটি step ৩-এর বদলি নয়:")}</p>
              {mcqOk ? <p className="text-sm text-emerald-300">✓ {txI(s.profile.lang, "Additional MCQ check passed", "অতিরিক্ত MCQ যাচাই পাস হয়েছে")}</p> : <LabCheck lesson={lesson} isBn={isBn} bnDefs={L?.termsBn} onOk={() => setMcqOk(true)} />}
            </div>
          </section>
        </div>
      </div>

      {/* Same idea, three languages — the shared core topics show the SAME
          small task in Python / C / Java side by side (all snippets run-
          verified to print the identical output stated below). */}
      {cmp ? (
        <section aria-label={txI(s.profile.lang, "Same idea, three languages", "একই ধারণা, তিন ভাষায়")} className="mt-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5 sm:p-4">
          <h3 className="text-[15px] font-bold text-[color:var(--text)]">{isBn ? `একই ধারণা, তিন ভাষায় — ${cmp.topicBn}` : `Same idea, three languages — ${cmp.topic}`}</h3>
          <p className={`mt-1 ${body}`}>{isBn ? cmp.taskBn : cmp.task} {txI(s.profile.lang, "All three snippets are run-verified — each one prints exactly the output below.", "তিনটি snippet-ই চালিয়ে যাচাই করা — তিনটিই নিচের output-টাই দেয়।")}</p>
          <div className="mt-2.5 grid gap-2.5 md:grid-cols-3">
            {cmp.langs.map((lg) => (
              <div key={lg.name} className="min-w-0 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface2)] p-2.5">
                <h4 className="text-[13px] font-bold text-[color:var(--accent)]">{lg.name}</h4>
                <pre className="mono mt-1.5 overflow-x-auto text-[12px] leading-relaxed text-[color:var(--text)]">{lg.code}</pre>
                <p className="mt-1.5 border-t border-[color:var(--border)] pt-1.5 text-[12.5px] leading-snug text-[color:var(--dim)]">{isBn ? lg.noteBn : lg.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-2.5 text-[13px] text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{txI(s.profile.lang, "All three print: ", "তিনটিই ছাপে: ")}</strong><span className="mono whitespace-pre-line text-[color:var(--text)]">{cmp.output}</span></p>
        </section>
      ) : null}

      {/* Deep content — full, but folded away until opened. */}
      <ProgCollapse title={txI(s.profile.lang, "Deep dive — why this code? (the full six-part explanation)", "গভীরে বোঝো — এই code-টা কেন? (ছয় অংশের পুরো ব্যাখ্যা)")}>
        <WhyCodePanel lesson={lesson} />
      </ProgCollapse>
      <ProgCollapse title={txI(s.profile.lang, "More detail — diagram · common mistakes · security · own-device practice · mission", "আরো detail — diagram · সাধারণ ভুল · নিরাপত্তা · নিজের device-এ practice · mission")}>
        <div className="grid gap-3 md:grid-cols-2">
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Diagram — ", "Diagram — ")}{lesson.diagramTitle}</h4>
            <div className="space-y-1">{lesson.diagram.map((d, i) => <p key={i} className="mono text-[12.5px] leading-relaxed text-[color:var(--text)]">{tx(d, L?.diagram[i])}</p>)}</div>
          </div>
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Common mistakes", "সাধারণ ভুল")}</h4>
            <ul className="list-disc space-y-1 pl-4.5">{lesson.mistakes.map((m, i) => <li key={i} className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(m, L?.mistakes[i])}</li>)}</ul>
          </div>
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Security impact", "নিরাপত্তাগত প্রভাব")}</h4>
            <p className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(lesson.security, L?.security)}</p>
          </div>
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "More practice on your own devices", "নিজের device-এ আরো practice")}</h4>
            <ol className="list-decimal space-y-1 pl-4.5">
              {lesson.pc.slice(1).map((p, i) => <li key={p} className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(p, L?.pc[i + 1])}</li>)}
              {lesson.android.map((p, i) => <li key={p} className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(p, L?.android[i])}</li>)}
            </ol>
          </div>
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Mission — on your own", "Mission — নিজে করো")}</h4>
            <p className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(lesson.mission, L?.mission)}</p>
          </div>
          <div className={smallBox}>
            <h4 className={smallTitle}>{txI(s.profile.lang, "Summary", "সারসংক্ষেপ")}</h4>
            <p className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(lesson.summary, L?.summary)}</p>
            <p className="mt-1.5 text-[13px] text-[color:var(--text)]"><strong>{txI(s.profile.lang, "Skill: ", "দক্ষতা: ")}</strong>{tx(lesson.skillGained, L?.skillGained)}</p>
          </div>
          {note?.noteEn ? (
            <div className={smallBox}>
              <h4 className={smallTitle}>{isBn ? `গুরুত্বপূর্ণ নোট — ${note.ideaBn ?? ""}` : `Important note — ${note.ideaEn ?? ""}`}</h4>
              <p className="text-[13px] leading-relaxed text-[color:var(--dim)]">{isBn ? note.noteBn : note.noteEn}</p>
            </div>
          ) : null}
          {tips ? (
            <div className={smallBox}>
              <h4 className={smallTitle}>{txI(s.profile.lang, "Tips & Tricks", "টিপস ও ট্রিকস")}</h4>
              <ul className="list-disc space-y-1 pl-4.5">{(isBn ? tips.bn : tips.en).map((tip) => <li key={tip} className="text-[13px] leading-relaxed text-[color:var(--dim)]">{tip}</li>)}</ul>
            </div>
          ) : null}
        </div>
      </ProgCollapse>

      {/* Graded gates — small boxes, same 70% rule, same XP. */}
      <section aria-label={txI(s.profile.lang, "Assessments", "মূল্যায়ন")} className="mt-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[15px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Check yourself — both must pass", "যাচাই — দুটোতেই পাস করতে হবে")}</h3>
          <Badge tone={viewed ? "ok" : "warn"}>{viewed ? (txI(s.profile.lang, "Read ✓", "পড়া হয়েছে ✓")) : (txI(s.profile.lang, "Not yet confirmed read", "এখনো পড়া confirm হয়নি"))}</Badge>
          <Badge tone={quizOk ? "ok" : "dim"}>Quiz {quizOk ? "✓" : "…"}</Badge>
          <Badge tone={pracOk ? "ok" : "dim"}>Practical {pracOk ? "✓" : "…"}</Badge>
        </div>
        {!viewed ? (
          <button type="button" onClick={() => setViewed(true)} className="mt-3 min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white">
            {txI(s.profile.lang, "I have read the main point and the example — unlock the checks", "আমি মূল কথা আর example পড়েছি — যাচাই খোলো")}
          </button>
        ) : (
          <div className="mt-3 grid items-start gap-3 xl:grid-cols-[1fr_400px]">
            <div className="min-w-0 rounded-xl border border-[color:var(--border)] p-3">
              <Quiz id={lesson.id} title={`Knowledge Quiz — ${lessonTitle(s.profile.lang, lesson.id, lesson.title)}`} questions={lesson.quiz} topics={lesson.objectives} onPass={() => setQuizOk(true)} bnQ={{ q: L?.quizQ, why: L?.quizWhy }} />
            </div>
            <div className="min-w-0">
              {practical ? <PracticalView id={lesson.id} task={practical} onPass={() => setPracOk(true)} bn={PRACTICAL_BN[lesson.id]} /> : <p className={body}>{tx(lesson.practical, L?.practical)}</p>}
            </div>
          </div>
        )}
        {done ? <p className="mt-2.5 text-sm text-emerald-300">{txI(s.profile.lang, "This topic is complete. Revision is always open — re-answering never removes XP and never re-locks anything.", "এই topic সম্পূর্ণ। আবার পড়া সবসময় খোলা — XP কাটে না, কিছুই আবার বন্ধ হয় না।")}</p> : null}
      </section>

      <p className="mt-3 text-[13px] leading-relaxed text-[color:var(--dim)]">
        <strong className="text-[color:var(--text)]">{txI(s.profile.lang, "What you can do now: ", "এখন তুমি যা করতে পারো: ")}</strong>
        {tx(lesson.skillGained, L?.skillGained)}
        {done ? (txI(s.profile.lang, " — this topic is complete; the next one is unlocked.", " — এই topic সম্পূর্ণ; পরেরটি খুলে গেছে।")) : (txI(s.profile.lang, " — pass the Quiz and Practical above and this topic is complete.", " — Quiz আর Practical পাস করলেই topic সম্পূর্ণ হবে।"))}
      </p>

      <UnlocksPanel lessonId={lesson.id} nextLabel={(() => { const idx = PATH.findIndex((n) => n.type === "lesson" && n.lesson.id === lesson.id); const nx = idx >= 0 ? PATH[idx + 1] : undefined; return nx ? nodeTitle(nx) : undefined; })()} goPractice={goPractice} />

      <footer className="mt-5 border-t border-[color:var(--border)] pt-2.5 text-xs leading-relaxed text-[color:var(--dim)]">
        <p>Version {lesson.version} · Reviewed {lesson.reviewed} · Reference: {lesson.reference}</p>
        {goKb ? <p className="mt-1"><button type="button" onClick={goKb} className="font-semibold text-[color:var(--accent)] underline decoration-dotted underline-offset-2">{txI(s.profile.lang, "Sources & versions: open the verified references in the Knowledge Base →", "উৎস ও সংস্করণ: Knowledge Base-এ যাচাই করা reference খোলো →")}</button></p> : null}
        {cp ? <p className="mt-1">{isBn ? <>এই দলের পরে: <strong className="text-[color:var(--text)]">{cp.title}</strong> (checkpoint), তারপর Level {lesson.level} Final।</> : <>After this group: <strong className="text-[color:var(--text)]">{cp.title}</strong> (checkpoint), then the Level {lesson.level} Final.</>}</p> : null}
      </footer>
    </article>
  );
}

/* ================= Checkpoint & Final views ================= */

function CheckpointView({ cp, back, goLesson }: { cp: Checkpoint; back: () => void; goLesson: (id: string) => void }) {
  const s = useStore();
  const done = isDone(s, "checkpoint", cp.id);
  const [quizOk, setQuizOk] = useState(done);
  const [pracOk, setPracOk] = useState(done);
  useEffect(() => { setQuizOk(done); setPracOk(done); }, [cp.id, done]);
  useEffect(() => {
    if (!done && quizOk && pracOk) completeItem("checkpoint", cp.id, cp.xp, 100, cp.title);
  }, [quizOk, pracOk, done, cp]);
  const topics = cp.quiz.map((_, i) => {
    const lid = cp.weakMap[i];
    return ALL_LESSONS.find((l) => l.id === lid)?.title ?? "";
  });
  return (
    <article className="cl-lesson mx-auto w-full max-w-[1100px] space-y-5">
      <button type="button" onClick={back} className="min-h-[44px] text-sm font-semibold text-[color:var(--accent)]">← Back to Learning Paths</button>
      <div className="rounded-2xl border-2 p-4" style={{ borderColor: levelAccent(cp.level), background: `linear-gradient(120deg, color-mix(in srgb, ${levelAccent(cp.level)} 16%, var(--surface)), var(--surface))` }}>
        <p className="text-xs font-bold tracking-wide" style={{ color: levelAccent(cp.level) }}>◆ CHECKPOINT · LAYER 2 · LEVEL {cp.level}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          <h2 className="text-2xl font-bold text-[color:var(--text)]">{cp.title}</h2>
          {done ? <Badge tone="ok">✓ Passed · {cp.xp} XP</Badge> : <Badge>{cp.xp} XP · quiz + practical</Badge>}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Checkpoint progress">
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${quizOk ? "bg-emerald-600 text-white" : "bg-[color:var(--surface2)] text-[color:var(--dim)]"}`}>{quizOk ? "✓" : "1"} Quiz</span>
          <span aria-hidden="true" className="self-center text-[color:var(--dim)]">→</span>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${pracOk ? "bg-emerald-600 text-white" : "bg-[color:var(--surface2)] text-[color:var(--dim)]"}`}>{pracOk ? "✓" : "2"} Practical</span>
          <span aria-hidden="true" className="self-center text-[color:var(--dim)]">→</span>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${done ? "bg-emerald-600 text-white" : "bg-[color:var(--surface2)] text-[color:var(--dim)]"}`}>{done ? "✓ Unlocked next section" : "Next section (locked)"}</span>
        </div>
      </div>
      <p className="text-sm text-[color:var(--dim)]">This checkpoint deliberately mixes all {cp.afterLessons.length} lessons in its group — the scenarios need more than one lesson at once. Pass mark 70% on the quiz plus the practical. Failing names exactly which lesson was weak.</p>
      <div className="flex flex-wrap gap-2">
        {cp.afterLessons.map((lid) => {
          const l = ALL_LESSONS.find((x) => x.id === lid);
          return l ? <button key={lid} type="button" onClick={() => goLesson(lid)} className="min-h-[36px] rounded border border-[color:var(--border)] px-2 py-1 text-xs text-[color:var(--accent)]">Revise: {l.title}</button> : null;
        })}
      </div>
      <Quiz id={cp.id} title="Checkpoint quiz (mixed lessons)" questions={cp.quiz} topics={topics} onPass={() => setQuizOk(true)} bnQ={CHECKPOINT_BN[cp.id]?.quiz} />
      <PracticalView id={cp.id} task={cp.practical} heading="Checkpoint practical (combined scenario)" onPass={() => setPracOk(true)} bn={CHECKPOINT_BN[cp.id]?.practical} />
      {done ? <p role="status" className="cl-pop rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-sm text-emerald-200">Checkpoint passed — the next section is unlocked.</p> : null}
    </article>
  );
}

function FinalView({ fin, back }: { fin: LevelFinal; back: () => void }) {
  const s = useStore();
  const done = isDone(s, "final", fin.id);
  const [quizOk, setQuizOk] = useState(done);
  const [pracs, setPracs] = useState<boolean[]>(() => fin.practicals.map(() => done));
  const [written, setWritten] = useState("");
  const [compared, setCompared] = useState(done);
  useEffect(() => { setQuizOk(done); setPracs(fin.practicals.map(() => done)); setCompared(done); }, [fin.id, done, fin.practicals]);
  const allPrac = pracs.every(Boolean);
  useEffect(() => {
    if (!done && quizOk && allPrac && compared && written.trim().length >= 40) {
      completeItem("final", fin.id, fin.xp, 100, `${fin.title} — badge: ${fin.badge}`);
      // Level-up arpeggio, slightly delayed so it follows (never overlaps)
      // the success tone of whichever check completed the final. The timer
      // is deliberately NOT cleared on cleanup: completeItem flips `done`
      // immediately, which re-runs this effect and would cancel the tone
      // before it could ever play.
      window.setTimeout(() => sfxLevelUp(), 200);
    }
  }, [quizOk, allPrac, compared, written, done, fin]);
  return (
    <article className="cl-lesson mx-auto w-full max-w-[1100px] space-y-5">
      <button type="button" onClick={back} className="min-h-[44px] text-sm font-semibold text-[color:var(--accent)]">← Back to Learning Paths</button>
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="text-2xl font-semibold text-[color:var(--text)]">{fin.title}</h2>
        {done ? <Badge tone="ok">Badge earned: {fin.badge}</Badge> : <Badge>Layer 3 · Level {fin.level} Final · {fin.xp} XP</Badge>}
      </div>
      <p className="text-sm text-[color:var(--dim)]">The level final combines the whole level: quiz + {fin.practicals.length} practicals + a written professional task. Passing unlocks the next level and awards the badge and the skill step: <strong className="text-[color:var(--text)]">{fin.skillStep}</strong>. It cannot be passed from one lesson's memory alone.</p>
      <Quiz id={fin.id} title="Final quiz (whole level)" questions={fin.quiz} onPass={() => setQuizOk(true)} bnQ={FINAL_BN[fin.id]?.quiz} />
      {fin.practicals.map((p, i) => (
        <PracticalView key={i} id={`${fin.id}-${i}`} task={p} heading={`Final practical ${i + 1}`} onPass={() => setPracs((prev) => prev.map((v, j) => (j === i ? true : v)))} bn={FINAL_BN[fin.id]?.practicals[i]} />
      ))}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-[color:var(--text)]">Written task (professional writing)</h4>
        <p className="text-sm text-[color:var(--dim)]">{s.profile.lang === "bn" ? (FINAL_BN[fin.id]?.writtenPrompt ?? fin.written.prompt) : fin.written.prompt}</p>
        <textarea aria-label="Written task answer" value={written} onChange={(e) => setWritten(e.target.value)}
          className="min-h-[120px] w-full rounded border border-[color:var(--border)] bg-[color:var(--surface2)] px-3 py-2 text-sm text-[color:var(--text)]"
          placeholder="Write at least a short paragraph (40+ characters). Then compare with the model answer honestly." />
        <button type="button" disabled={written.trim().length < 40} onClick={() => setCompared(true)}
          className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)] disabled:opacity-40">Compare with model answer</button>
        {compared ? <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] p-3 text-sm leading-relaxed text-[color:var(--dim)]"><p className="mb-1 font-medium text-[color:var(--text)]">Model answer — judge your draft against it honestly:</p>{s.profile.lang === "bn" ? (WRITTEN_MODEL_BN[fin.id] ?? fin.written.model) : fin.written.model}</div> : null}
      </div>
      {done ? <p role="status" className="cl-pop rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-sm text-emerald-200">Level {fin.level} complete — badge “{fin.badge}” earned, skill step {fin.skillStep}. The next level is now unlocked.</p> : null}
    </article>
  );
}

/* ================= Language toggle ================= */

export function LangToggle({ compact = false }: { compact?: boolean }) {
  // One language button that opens a dropdown (user order, 19 Nov 2026) —
  // the shared LangMenu renders the single button + six-language dropdown
  // in every place (header, sidebar). The sidebar sits at the bottom of
  // the screen, so its menu opens upward.
  return <LangMenu compact={compact} dropUp={!compact} alignEnd={compact} />;
}

/* ================= Dashboard ================= */

function Dashboard({ go, openNode }: { go: (v: View) => void; openNode: (n: PathNode) => void }) {
  const s = useStore();
  const xp = totalXp(s);
  const streak = streakDays(s);
  const cur = currentIndex(s);
  const curNode = PATH[cur];
  const nextNode = PATH[cur + 1];
  const doneLessons = s.progress.filter((p) => p.kind === "lesson").length;
  const levelOf = (n: PathNode | undefined) => (n ? nodeLevel(n) : 22);
  const totalNodes = PATH.length;
  const doneNodes = PATH.filter((n) => nodeDone(s, n)).length;
  const pathPct = totalNodes ? (doneNodes / totalNodes) * 100 : 0;
  const curLesson = curNode?.type === "lesson" ? curNode.lesson : ALL_LESSONS.find((l) => l.level === levelOf(curNode));
  const todayKey = localDayKey(new Date());
  const todayActs = s.activity.filter((a) => localDayKey(new Date(a.at)) === todayKey).length;
  const dailyPct = Math.min(100, (todayActs / Math.max(1, Math.round(s.profile.dailyGoalMinutes / 15))) * 100);
  const skillRows = (["Networking", "Linux", "Python", "Web Security", "Threat Detection"] as const).map((sk) => {
    const ls = ALL_LESSONS.filter((l) => l.skill === sk);
    const dn = ls.filter((l) => isDone(s, "lesson", l.id)).length;
    return { sk, dn, total: ls.length, pct: ls.length ? (dn / ls.length) * 100 : 0 };
  });
  return (
    <div className="cl-stagger space-y-6">
      {/* PWA install strip — renders only when this browser can really
          install the app (or is iOS, where Settings holds the steps). */}
      <PwaInstallBanner onGoSettings={() => go("settings")} />
      {/* Continue-learning hero */}
      {curNode ? (
        <section aria-label="Continue learning" className="cl-dots overflow-hidden rounded-[26px] border border-[color:var(--border)] bg-[color:var(--surface)] shadow">
          {curLesson ? <LessonIllustration lesson={curLesson} height={150} /> : null}
          <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide"><span className="rounded-full px-2.5 py-1 text-white" style={{ background: levelAccent(levelOf(curNode)) }}>{s.profile.lang === "en" ? `▶ NEXT STEP · LEVEL ${levelOf(curNode)}` : `${uiStr(s.profile.lang, "nextStep", "Next step")} · Level ${levelOf(curNode)}`}</span><span className="text-[color:var(--dim)]">{curNode.type === "lesson" ? txI(s.profile.lang, "Lesson", "পাঠ") : curNode.type === "checkpoint" ? txI(s.profile.lang, "Checkpoint") : txI(s.profile.lang, "Level Final")}</span></p>
              <h3 className="cl-wrap mt-2 text-xl font-bold sm:text-2xl text-[color:var(--text)]">{curNode.type === "lesson" ? lessonTitle(s.profile.lang, curNode.lesson.id, nodeTitle(curNode)) : nodeTitle(curNode)}</h3>

              <p className="mt-1 max-w-xl text-sm leading-relaxed text-[color:var(--dim)]">
                {curNode.type === "lesson" ? (curLesson && isSampleContent(curLesson.code) ? "Read it, copy its written sample and write your own version, pass the quiz (≥70%) and the hands-on practical " : "Read it, run its code in the Playground, pass the quiz (≥70%) and the hands-on practical ") : curNode.type === "checkpoint" ? "Pass this checkpoint " : "Pass this level final "}
                {nextNode ? <>to unlock <strong className="text-[color:var(--text)]">{nodeTitle(nextNode)}</strong>.</> : <>to finish the authored path.</>}
              </p>
              <p className="mt-2 text-sm font-medium text-[color:var(--text)]">
                {uiStr(s.profile.lang, "afterThis", "After this")}: {nextNode ? <>{nextNode.type === "lesson" ? lessonTitle(s.profile.lang, nextNode.lesson.id, nextNode.lesson.title) : nodeTitle(nextNode)} <span className="font-normal text-[color:var(--dim)]">{txI(s.profile.lang, "— it unlocks the moment you finish this step. One thing at a time, in the order that makes it stick.", "— এই ধাপ শেষ করলেই খুলবে। একবারে একটা জিনিস, যেই ক্রমে শিখলে মনে থাকে।")}</span></> : txI(s.profile.lang, "the end of the authored path.", "তৈরি পথের শেষ।")}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" onClick={() => { if (curNode) openNode(curNode); }} className="cl-btn min-h-[48px] rounded-xl bg-[color:var(--accent2)] px-6 py-2.5 text-[15px] font-bold text-white">{uiStr(s.profile.lang, "continueBtn", "Continue")} →</button>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:flex-col lg:gap-2">
              <ProgressRing value={pathPct} label="Overall path progress" />
              <p className="text-center text-xs font-medium text-[color:var(--dim)]">Path progress<br />{doneNodes}/{totalNodes} nodes</p>
            </div>
          </div>
        </section>
      ) : (
        <Card accent="#34d399"><h3 className="font-semibold text-emerald-300">🏆 Authored path complete</h3><p className="text-sm text-[color:var(--dim)]">Every published lesson, checkpoint, and final is passed. Keep going with Projects, CTF, and SOC Training.</p></Card>
      )}

      {/* Unlock map snapshot: what just opened + what opens next.
          items-start: each card sizes to its own content (compact-box rule) —
          a two-line empty state must not stretch to its neighbour's height. */}
      <div className="grid items-start gap-3 md:grid-cols-2">
        <Card accent="var(--c-lab)" variant="shelf">
          <h3 className="flex items-center gap-2 text-[15px] font-bold text-[color:var(--text)]"><SectionIcon kind="check" size={18} />{instr(s.profile.lang, "recentlyUnlocked", "Recently unlocked")}</h3>
          {(() => {
            const recent = [...s.progress].slice(-3).reverse();
            if (!recent.length) return <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--dim)]">{txI(s.profile.lang, "Nothing yet — finish your first lesson and what it opened will appear here.", "এখনো কিছু খোলেনি — প্রথম পাঠটা শেষ করলেই এখানে দেখা যাবে কী কী খুলল।")}</p>;
            const titleOf = (kind: string, id: string): string => {
              if (kind === "lesson") { const l = ALL_LESSONS.find((x) => x.id === id); return l ? lessonTitle(s.profile.lang, l.id, l.title) : id; }
              if (kind === "checkpoint") return ALL_CHECKPOINTS.find((x) => x.id === id)?.title ?? id;
              if (kind === "final") return ALL_FINALS.find((x) => x.id === id)?.title ?? id;
              if (kind === "lab") return itemTitle(s.profile.lang, id, LABS.find((x) => x.id === id)?.title ?? id);
              if (kind === "mission") return itemTitle(s.profile.lang, id, MISSIONS.find((x) => x.id === id)?.title ?? id);
              if (kind === "ctf") return itemTitle(s.profile.lang, id, CTFS.find((x) => x.id === id)?.title ?? id);
              return id;
            };
            return <ul className="mt-2 space-y-1.5">{recent.map((p, i) => { const rel = p.kind === "lesson" ? relatedForLesson(p.contentId) : []; return <li key={i} className="rounded-xl bg-[color:var(--surface2)] px-3 py-2 text-sm leading-relaxed text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{titleOf(p.kind, p.contentId)}</strong> {txI(s.profile.lang, "completed", "শেষ হয়েছে")} — {rel.length ? rel.map((r) => `${r.kind} ${txI(s.profile.lang, "opened", "খুলেছে")}`).join(" · ") : txI(s.profile.lang, "next step opened", "পরের ধাপ খুলেছে")}</li>; })}</ul>;
          })()}
        </Card>
        <Card accent="var(--c-mission)" variant="shelf">
          <h3 className="flex items-center gap-2 text-[15px] font-bold text-[color:var(--text)]"><SectionIcon kind="lock" size={18} />{instr(s.profile.lang, "nextUnlock", "Next unlock")}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--dim)]">
            {curNode ? <>{txI(s.profile.lang, "Finish the step above and this opens: ", "উপরের ধাপটা শেষ করলেই খুলবে: ")}<strong className="text-[color:var(--text)]">{nextNode ? (nextNode.type === "lesson" ? lessonTitle(s.profile.lang, nextNode.lesson.id, nextNode.lesson.title) : nodeTitle(nextNode)) : txI(s.profile.lang, "the end of the authored path", "তৈরি পথের শেষ")}</strong>{curNode.type === "lesson" ? <> — {txI(s.profile.lang, "plus this lesson's Lab, Terminal exercise and Mission (steps 2–4). Order: Lab → Terminal → Mission → Quiz → Checkpoint → CTF.", "সাথে এই পাঠের Lab, Terminal exercise ও Mission-ও (ধাপ ২–৪)। ধারা: Lab → Terminal → Mission → Quiz → Checkpoint → CTF।")}</> : null}</> : txI(s.profile.lang, "Everything published is complete!", "সব প্রকাশিত ধাপ শেষ!")}
          </p>
          <button type="button" onClick={() => go("paths")} className="cl-btn mt-2.5 min-h-[42px] px-4 py-2 text-sm font-semibold text-white" style={{ background: "var(--accent2)" }}>{txI(s.profile.lang, "See the full unlock map in Learning Paths →", "পুরো Unlock Map পথে দেখো →")}</button>
        </Card>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Card accent="#f59e0b"><div className="flex items-start justify-between gap-2"><div><p className="text-2xl font-bold text-[color:var(--text)]">{xp} XP</p><p className="text-sm text-[color:var(--dim)]">{s.profile.username ? `@${s.profile.username}` : "Learner"} · {s.profile.goalRole || "Goal not set"}</p></div><ProgressRing value={Math.min(100, (xp % 500) / 5)} size={54} stroke={6} color="#f59e0b" label="XP to next milestone" /></div><div className="mt-3"><XpBar xp={xp % 500} /></div></Card>
        <Card accent="#fb923c"><p className="text-2xl font-bold text-[color:var(--text)]">{s.profile.lang === "en" ? `${streak} day${streak === 1 ? "" : "s"}` : txf(s.profile.lang, "{a} days", "{a} দিন", { a: streak })}</p><p className="text-sm text-[color:var(--dim)]">{txI(s.profile.lang, "Learning streak", "শেখার ধারাবাহিকতা")}</p><div className="mt-3 flex items-center gap-3"><ProgressRing value={dailyPct} size={54} stroke={6} color="#fb923c" label="Daily goal progress" /><p className="text-xs leading-relaxed text-[color:var(--dim)]">Daily goal: {s.profile.dailyGoalMinutes} min<br />{todayActs} learning action{todayActs === 1 ? "" : "s"} today</p></div></Card>
        <Card accent="#38bdf8"><p className="text-2xl font-bold text-[color:var(--text)]">{doneLessons}/{ALL_LESSONS.length}</p><p className="text-sm text-[color:var(--dim)]">Published lessons completed — checkpoints &amp; finals gate the levels</p><div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[color:var(--surface2)]"><div className="cl-progress-anim h-full rounded-full bg-sky-500" style={{ width: `${ALL_LESSONS.length ? (doneLessons / ALL_LESSONS.length) * 100 : 0}%` }} /></div></Card>
        <Card accent="#a78bfa"><p className="text-2xl font-bold text-[color:var(--text)]">{s.diagnostic ? `${s.diagnostic.score}/${s.diagnostic.total}` : "Not taken"}</p><p className="text-sm text-[color:var(--dim)]">Diagnostic — sets pace &amp; revision order only; it never skips prerequisites</p>{!s.diagnostic ? <button type="button" onClick={() => go("assessment")} className="mt-2 min-h-[40px] rounded-lg border border-[color:var(--border)] px-3 py-1.5 text-sm font-semibold text-[color:var(--accent)]">Take the diagnostic →</button> : null}</Card>
      </div>

      <Card>
        <h3 className="mb-3 text-base font-bold text-[color:var(--text)]">Your skills — evidence, not clicks</h3>
        <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {skillRows.map(({ sk, dn, total, pct }) => (
            <div key={sk}>
              <div className="mb-1 flex justify-between text-sm"><span className="font-medium text-[color:var(--text)]">{sk}</span><span className="text-[color:var(--dim)]">{dn}/{total} lessons</span></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[color:var(--surface2)]"><div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: skillAccent(sk) }} /></div>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => go("analytics")} className="mt-3 min-h-[40px] text-sm font-semibold text-[color:var(--accent)]">Full skill evidence &amp; weak topics →</button>
      </Card>

      <div>
        <h3 className="mb-2 text-base font-semibold text-[color:var(--text)]">{txf(s.profile.lang, "Your path — Level 0 → {a}", "তোমার পথ — Level 0 থেকে {a}", { a: LEVELS.length - 1 })}</h3>
        <div className="space-y-1.5">
          {LEVELS.map((lvl) => {
            const nodes = PATH.map((n, i) => ({ n, i })).filter(({ n }) => nodeLevel(n) === lvl.n);
            const doneCount = nodes.filter(({ n }) => nodeDone(s, n)).length;
            const isCurrent = curNode ? nodeLevel(curNode) === lvl.n : false;
            const locked = nodes.length > 0 && !nodeUnlocked(s, nodes[0]?.i ?? 0);
            return (
              <button key={lvl.n} type="button" onClick={() => go("paths")}
                className={`flex min-h-[48px] w-full items-center gap-3 rounded-lg border px-3 py-2 text-left ${isCurrent ? "border-sky-800 bg-sky-950/20" : "border-[color:var(--border)] bg-[color:var(--surface)]"}`}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold text-white" style={{ background: locked ? "var(--surface2)" : levelAccent(lvl.n), color: locked ? "var(--dim)" : "#fff" }}>{locked ? <SectionIcon kind="lock" size={15} color="var(--dim)" /> : lvl.n}</span>
                <span className="min-w-0 flex-1">
                  <span className={`cl-wrap block text-sm font-medium leading-snug ${locked ? "text-[color:var(--dim)]" : "text-[color:var(--text)]"}`}>Level {lvl.n} — {levelTitle(s.profile.lang, lvl.n, lvl.title)}</span>
                  <span className="block text-xs text-[color:var(--dim)]">{nodes.length ? (ALL_FINALS.some((f) => f.level === lvl.n) ? `${doneCount}/${nodes.length} path nodes complete` : `${doneCount}/${nodes.length} published lessons complete · checkpoint & level final in preparation`) : `${lvl.topics.length} topics · structured curriculum — lessons in preparation`} {locked ? "· locked" : isCurrent ? "· current level" : ""}</span>
                  {lvl.n === 4 ? <span className="mt-0.5 block text-xs font-medium text-[color:var(--accent)]">{txI(s.profile.lang, L4_ENTRY_NOTE_EN, L4_ENTRY_NOTE_BN)}</span> : null}
                </span>
                <span className="hidden h-2 w-24 overflow-hidden rounded bg-[color:var(--surface2)] sm:block">
                  <span className="block h-full bg-[color:var(--accent)]" style={{ width: nodes.length ? `${(doneCount / nodes.length) * 100}%` : "0%" }} />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Card><h4 className="font-medium text-[color:var(--text)]">Threat Intelligence Center</h4><p className="mt-1 text-sm text-[color:var(--dim)]">Live CISA KEV + FIRST EPSS, source status, and the dated daily briefing (A–O).</p><button type="button" onClick={() => go("intel")} className="mt-2 min-h-[40px] text-sm text-[color:var(--accent)]">Open →</button></Card>
        <Card><h4 className="font-medium text-[color:var(--text)]">Universal Playground</h4><p className="mt-1 text-sm text-[color:var(--dim)]">Write and really run code in almost any language — Python, C, Go, Rust, Java and more. Browser or Judge0, always labelled.</p><button type="button" onClick={() => go("universal")} className="mt-2 min-h-[40px] text-sm text-[color:var(--accent)]">Open →</button></Card>
        <Card><h4 className="font-medium text-[color:var(--text)]">SOC Analyst Training</h4><p className="mt-1 text-sm text-[color:var(--dim)]">Triage clearly-labelled simulated events: classify, severity, actions.</p><button type="button" onClick={() => go("soc")} className="mt-2 min-h-[40px] text-sm text-[color:var(--accent)]">Open →</button></Card>
        <Card accent="#f97316"><h4 className="font-medium text-[color:var(--text)]">{txI(s.profile.lang, "Attack Track (Red Team)", "অ্যাটাক ট্র্যাক (Red Team)")}</h4><p className="mt-1 text-sm text-[color:var(--dim)]">{txI(s.profile.lang, "Offensive skills on authorized lab targets only: your own localhost app, your own VMs, your own AD lab.", "শুধু অনুমোদিত lab target-এ offensive দক্ষতা: নিজের localhost app, নিজের VM, নিজের AD lab।")}</p><button type="button" onClick={() => go("attack")} className="mt-2 min-h-[40px] text-sm text-[color:var(--accent)]">Open →</button></Card>
        <Card><h4 className="font-medium text-[color:var(--text)]">Research Workspace</h4><p className="mt-1 text-sm text-[color:var(--dim)]">Notes, findings, timelines, CWE/ATT&CK mapping, Markdown export.</p><button type="button" onClick={() => go("research")} className="mt-2 min-h-[40px] text-sm text-[color:var(--accent)]">Open →</button></Card>
      </div>
    </div>
  );
}

/* ================= Learning Paths ================= */

function PathsView({ openNode }: { openNode: (n: PathNode) => void }) {
  const s = useStore();
  const [notice, setNotice] = useState("");
  const clickNode = (n: PathNode, idx: number) => {
    if (!nodeUnlocked(s, idx)) {
      const prev = PATH[idx - 1];
      setNotice(`“${nodeTitle(n)}” is locked. Complete “${prev ? nodeTitle(prev) : ""}” first — lessons unlock strictly in order, and completing a lesson requires its quiz and practical, not just a visit.`);
      return;
    }
    setNotice("");
    openNode(n);
  };
  return (
    <div className="cl-stagger space-y-6">
      <JourneyStrip nextLabel="follow the highlighted current step below" />
      <SectionTitle bn="শেখার পথ" bnSub="একটাই ধারাবাহিক পথ: পাঠ → checkpoint → level final। প্রতিটি lab, mission ও CTF তার পাঠের ভেতরেই যুক্ত — আগের ধাপ শেষ না হলে পরেরটি খুলবে না। একটাই ব্যতিক্রম: Level 4 একটি খোলা এন্ট্রি পয়েন্ট — Level 0–3 শেষ না করেও তার প্রথম পাঠ থেকে শুরু করা যায় (নিচে Level 4-এর note দেখো)।" sub="One journey, in order: Lesson test → Checkpoint (after every 3–4 lessons, mixing them) → Level Final (unlocks the next level + badge). Labs, missions and CTF are woven into the lessons they belong to. One exception: Level 4 is an open entry point — its first lesson is open without finishing Levels 0–3 (see the note on Level 4 below).">
        Learning Paths
      </SectionTitle>
      {notice ? <p role="alert" className="rounded-md border border-amber-800 bg-amber-950/30 p-3 text-sm text-amber-100">{notice}</p> : null}
      {LEVELS.map((lvl) => {
        const nodes = PATH.map((n, i) => ({ n, i })).filter(({ n }) => nodeLevel(n) === lvl.n);
        return (
          <section key={lvl.n} aria-label={`Level ${lvl.n}: ${lvl.title}`}>
            <div className="mb-2 flex flex-wrap items-baseline gap-2">
              <h3 className="text-base font-semibold text-[color:var(--text)]">Level {lvl.n} — {levelTitle(s.profile.lang, lvl.n, lvl.title)}</h3>
              <Badge>{lvl.depth}</Badge>
              <span className="text-xs text-[color:var(--dim)]">{lvl.summary}</span>
            </div>
            {lvl.n === 4 ? <p className="mb-2 rounded-md border border-sky-900 bg-sky-950/20 px-3 py-2 text-[13px] font-medium text-[color:var(--text)]">{txI(s.profile.lang, L4_ENTRY_NOTE_EN, L4_ENTRY_NOTE_BN)}</p> : null}
            {HONOURS_MATCH[lvl.n] || HONOURS_CAREER_LEVELS.has(lvl.n) ? <div className="mb-2.5"><HonoursNotice level={lvl.n} isBn={s.profile.lang === "bn"} variant="level" /></div> : null}
            {nodes.length ? (
              <ol className="relative ml-3 space-y-1.5 before:absolute before:-left-3 before:top-2 before:h-[calc(100%-16px)] before:w-[2px] before:rounded before:bg-[color:var(--border)]" aria-label="Journey timeline — connected steps in order">
                {nodes.map(({ n, i }) => {
                  const done = nodeDone(s, n);
                  const unlocked = nodeUnlocked(s, i);
                  const prev = PATH[i - 1];
                  return (
                    <li key={nodeKey(n)}>
                      <button type="button" disabled={false} onClick={() => clickNode(n, i)} aria-disabled={!unlocked}
                        style={{ borderLeft: `5px solid ${done ? "#34d399" : unlocked ? levelAccent(lvl.n) : "var(--border)"}` }}
                        className={`flex min-h-[52px] w-full items-center gap-3 rounded-lg border px-3 py-2 text-left ${done ? "border-emerald-900 bg-emerald-950/10" : unlocked ? "border-sky-900 bg-sky-950/10" : "border-[color:var(--border)] bg-[color:var(--surface)] opacity-75"}`}>
                        <span aria-hidden="true" className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${done ? "bg-emerald-600 text-white" : unlocked ? "text-white" : "bg-[color:var(--surface2)]"}`} style={unlocked && !done ? { background: levelAccent(lvl.n) } : undefined}>{done ? "✓" : unlocked ? (n.type === "lesson" ? "▶" : n.type === "checkpoint" ? "◆" : "★") : <SectionIcon kind="lock" size={14} color="var(--dim)" />}</span>
                        <span className="min-w-0 flex-1">
                          <span className={`cl-wrap block text-sm font-medium leading-snug ${unlocked || done ? "text-[color:var(--text)]" : "text-[color:var(--dim)]"}`}>{n.type === "lesson" ? lessonTitle(s.profile.lang, n.lesson.id, n.lesson.title) : nodeTitle(n)}</span>
                          <span className="block text-xs text-[color:var(--dim)]">
                            {n.type === "lesson" ? `Lesson · Level ${lvl.n} · ${n.lesson.minutes} min` : n.type === "checkpoint" ? "Checkpoint · mixes the lessons above it" : `Level Final · badge: ${n.fin.badge}`}
                            {!unlocked && prev ? ` · Locked — complete “${nodeTitle(prev)}” first` : ""}
                            {done ? " · Completed (revision always open)" : unlocked ? " · Current" : ""}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-3">
                <p className="text-sm text-[color:var(--dim)]">Structured curriculum for this level — topics in teaching order. Published lessons for Levels 0–22 are in the chain above; every level's depth is delivered through its lessons, checkpoints and level final, plus the Labs, Missions, Projects, and (for Level 22) the eight capstone Projects.</p>
                <div className="mt-2 flex flex-wrap gap-1.5">{lvl.topics.map((t) => <Badge key={t}>{t}</Badge>)}</div>
              </div>
            )}
            {(() => {
              const lvlLessonIds = new Set(ALL_LESSONS.filter((l) => l.level === lvl.n).map((l) => l.id));
              const rel = [
                ...Object.entries(LAB_REQUIRES).filter(([, r]) => r.some((x) => lvlLessonIds.has(x))).map(([id, r]) => ({ id, kind: "Lab", title: LABS.find((x) => x.id === id)?.title ?? id, req: r })),
                ...Object.entries(MISSION_REQUIRES).filter(([, r]) => r.some((x) => lvlLessonIds.has(x))).map(([id, r]) => ({ id, kind: "Mission", title: MISSIONS.find((x) => x.id === id)?.title ?? id, req: r })),
                ...Object.entries(CTF_REQUIRES).filter(([, r]) => r.some((x) => lvlLessonIds.has(x))).map(([id, r]) => ({ id, kind: "CTF", title: CTFS.find((x) => x.id === id)?.title ?? id, req: r })),
              ];
              if (!rel.length) return null;
              return (
                <div className="mt-2.5 rounded-xl border border-dashed border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-2.5">
                  <p className="text-[13px] font-semibold text-[color:var(--text)]">Integrated practice for this level <span className="font-normal text-[color:var(--dim)]">— it lives inside the lessons above, and also in its own section for revision</span></p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {rel.map((r) => {
                      const open = isUnlocked(s, r.req);
                      return <span key={r.id} className={`rounded-full border px-2.5 py-1 text-[12px] ${open ? "border-emerald-700 text-[color:var(--text)]" : "border-[color:var(--border)] text-[color:var(--dim)]"}`}>{open ? "✓ Open" : "Locked"} · {r.kind}: {r.title}{open ? "" : ` — after ${lessonShort(r.req.find((x) => !isDone(s, "lesson", x)) ?? r.req[0] ?? "")}`}</span>;
                    })}
                  </div>
                </div>
              );
            })()}
            <LevelUnlockMap level={lvl.n} nextLevelTitle={LEVELS[lvl.n + 1]?.title} />
          </section>
        );
      })}

      <section aria-label="Team tracks">
        <h3 className="mb-2 text-base font-semibold text-[color:var(--text)]">Red / Blue / Purple team tracks — one shared incident, three perspectives</h3>
        <div className="grid gap-3 md:grid-cols-3">
          {TRACKS.map((t) => (
            <Card key={t.id}>
              <h4 className="font-semibold" style={{ color: t.color }}>{t.name}</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[color:var(--dim)]">{t.focus.map((f) => <li key={f}>{f}</li>)}</ul>
              <p className="mt-2 text-sm font-medium text-[color:var(--text)]">Path</p>
              <ol className="list-decimal space-y-1 pl-5 text-sm text-[color:var(--dim)]">{t.path.map((p) => <li key={p}>{p}</li>)}</ol>
              <p className="mt-2 rounded border border-[color:var(--border)] bg-[color:var(--surface2)] p-2 text-[13px] text-[color:var(--dim)]">{t.sharedIncident}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ================= Courses ================= */

function CoursesView({ openLesson, goPaths }: { openLesson: (l: Lesson) => void; goPaths: () => void }) {
  const s = useStore();
  const [q, setQ] = useState("");
  const [notice, setNotice] = useState("");
  const filtered = ALL_LESSONS.filter((l) => (l.title + l.skill + l.objectives.join(" ")).toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-4">
      <JourneyStrip />
      <SectionTitle bn="কোর্সসমূহ" bnSub="সব প্রকাশিত পাঠ — বন্ধ পাঠে তার আগের কোন পাঠ শেষ করতে হবে তা লেখা থাকে।" sub="Every published lesson follows the same structure and carries its own real quiz + practical. Locked lessons show their prerequisite — clicking one never opens its content.">
        Courses
      </SectionTitle>
      <label className="block max-w-md text-sm text-[color:var(--dim)]">Search lessons
        <input aria-label="Search lessons" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. DNS, Python, session"
          className="mt-1 min-h-[44px] w-full rounded border border-[color:var(--border)] bg-[color:var(--surface2)] px-3 py-2 text-sm text-[color:var(--text)]" /></label>
      {notice ? <p role="alert" className="rounded-md border border-amber-800 bg-amber-950/30 p-3 text-sm text-amber-100">{notice} <button type="button" className="underline" onClick={goPaths}>Go to Learning Paths</button></p> : null}
      <div className="grid gap-3 md:grid-cols-2">
        {filtered.map((l) => {
          const idx = PATH.findIndex((n) => n.type === "lesson" && n.lesson.id === l.id);
          const unlocked = idx === -1 ? true : nodeUnlocked(s, idx);
          const done = isDone(s, "lesson", l.id);
          const prev = idx > 0 ? PATH[idx - 1] : undefined;
          return (
            <Card key={l.id} accent={skillAccent(l.skill)}>
              <LessonIllustration lesson={l} height={86} />
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <h3 className={`cl-wrap font-semibold ${unlocked || done ? "text-[color:var(--text)]" : "text-[color:var(--dim)]"}`}>{done ? "✓ " : ""}{l.title}</h3>
                <Badge>Level {l.level}</Badge><Badge>{l.skill}</Badge>{done ? <Badge tone="ok">Completed</Badge> : null}
              </div>
              <p className="mt-1 text-sm text-[color:var(--dim)]">{l.objectives[0]} · {l.minutes} min · {l.xp} XP · Quiz + practical required</p>
              <button type="button" className="mt-2 min-h-[40px] rounded border border-[color:var(--border)] px-3 py-1.5 text-sm text-[color:var(--text)]"
                onClick={() => {
                  if (!unlocked) { setNotice(`“${l.title}” is locked. Complete “${prev ? nodeTitle(prev) : l.prereq}” first.`); return; }
                  setNotice(""); openLesson(l);
                }}>{done ? "Revise lesson" : unlocked ? "Open lesson" : "Locked"}</button>
            </Card>
          );
        })}
      </div>
      {filtered.length === 0 ? <p className="text-sm text-[color:var(--dim)]">No lessons match that search.</p> : null}
    </div>
  );
}

/* ================= Labs / Missions / CTF / Projects ================= */

/* ================= Lab chapter — the lesson's textbook shape, for labs ==
   (v33, user order 15 Nov 2026: "sathe ar o better lab missions dio thik
   lesson er style e"). Every lab now opens as a CHAPTER in exactly the
   LessonView shape: a header with ONE purpose line + fact chips, a compact
   step checklist, the main point + key definitions + figure (the lab's
   evidence) beside the worked example and its live try pane, the six-part
   why-panel folded into a deep-dive, and the graded exercises at the end.
   The gates match a lesson's honesty too: a lab closes ONLY when the
   brief has been read AND the worked example was actually run in the try
   area (copied, for a text sample) AND the tasks score ≥70%. Answering
   the task questions alone no longer closes a lab — the inspection found
   LabTryBox rendered without onRan, so Run was optional; that is fixed
   here by wiring onRan into completion, exactly like MissionRunner. */

function LabChapter({ lab }: { lab: Lab }) {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const tx = (en: string, b?: string) => txI(s.profile.lang, en, b);
  const bnLab = LAB_BN[lab.id];
  const done = isDone(s, "lab", lab.id);
  const req = LAB_REQUIRES[lab.id] ?? [];
  const srcLesson = req.map((lid) => ALL_LESSONS.find((l) => l.id === lid)).find((l) => l && l.code && l.code.code && l.code.code.trim());
  const hasTry = !!srcLesson;
  const sampleTry = srcLesson ? isSampleContent(srcLesson.code) : false;
  const [viewed, setViewed] = useState(done);
  const [hasRun, setHasRun] = useState(done || !hasTry);
  const [decisionPct, setDecisionPct] = useState<number | null>(done ? 100 : null);
  const [showHint, setShowHint] = useState(false);
  const [justClosed, setJustClosed] = useState(false);
  const tasksOk = done || (decisionPct !== null && decisionPct >= 70);
  useEffect(() => {
    if (!done && viewed && hasRun && decisionPct !== null && decisionPct >= 70) {
      completeItem("lab", lab.id, lab.xp, decisionPct, `Lab: ${lab.title}`);
      setJustClosed(true);
    }
  }, [done, viewed, hasRun, decisionPct, lab.id, lab.xp, lab.title]);
  const objective = tx(lab.objective, bnLab?.objective);
  const purpose = objective.split(/(?<=[.!?।])\s+/)[0] ?? objective;
  const steps = [
    { ok: viewed || done, label: txI(s.profile.lang, "1 · Read the main point", "১ · মূল কথা পড়ো") },
    { ok: hasRun, label: !hasTry ? (txI(s.profile.lang, "2 · Examine the evidence", "২ · প্রমাণ খুঁটিয়ে দেখো")) : sampleTry ? (txI(s.profile.lang, "2 · Copy the sample & write it yourself", "২ · Sample copy করে নিজে লেখো")) : (txI(s.profile.lang, "2 · Run the worked example", "২ · Worked example-টি চালাও")) },
    { ok: tasksOk, label: txI(s.profile.lang, "3 · Tasks ≥70%", "৩ · কাজ গুলো ≥৭০%") },
  ];
  const smallTitle = "mb-1.5 text-[13px] font-bold text-[color:var(--text)]";
  return (
    <div className="mt-4 border-t border-[color:var(--border)] pt-4">
      <p className="text-[15px] leading-relaxed text-[color:var(--text)]"><span className="font-bold" style={{ color: "var(--c-lab)" }}>{txI(s.profile.lang, "In one line: ", "এক লাইনে: ")}</span>{purpose}</p>
      <div className="mt-2 flex flex-wrap gap-1.5" aria-label={txI(s.profile.lang, "Lab facts", "Lab-এর তথ্য")}>
        <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Level", "Level")}</b> {lab.level}</span>
        <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Type", "ধরন")}</b> {lab.type}</span>
        <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Time", "সময়")}</b> ~{lab.minutes} min</span>
        <span className="cl-meta-chip"><b>XP</b> {lab.xp}</span>
        <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Tasks", "কাজ")}</b> {lab.tasks.length}</span>
        {req[0] ? <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Needs first", "আগে লাগবে")}</b> {lessonShort(req[0])}</span> : null}
      </div>
      {justClosed ? <p role="status" className="cl-pop mt-3 rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-sm text-emerald-200">{isBn ? <>Lab সম্পূর্ণ — {lab.xp} XP পেয়েছ।</> : <>Lab complete — {lab.xp} XP earned.</>}</p> : null}

      {/* Compact checklist line — the same one-line stepper as a lesson. */}
      <div className="mt-3 flex flex-wrap items-center gap-1.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2" role="list" aria-label={txI(s.profile.lang, "Steps in this lab", "এই Lab-এর ধাপ গুলো")}>
        {steps.map((st, i) => (
          <span key={st.label} role="listitem" className="inline-flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden="true" className="text-[color:var(--dim)]">→</span> : null}
            <span className={`rounded-full px-2.5 py-1 text-[12px] font-bold ${st.ok ? "bg-emerald-600 text-white" : "bg-[color:var(--surface2)] text-[color:var(--dim)]"}`}>{st.ok ? "✓ " : ""}{st.label}</span>
          </span>
        ))}
      </div>

      {/* Chapter body: main point + definitions + figure on the left;
          worked example + live try pane on the right — the lesson layout. */}
      <div className="mt-3 grid items-start gap-3 lg:grid-cols-2">
        <section aria-label={txI(s.profile.lang, "Main point", "মূল কথা")} className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5 sm:p-4">
          <h3 className="text-[15px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "The main point — what this lab teaches", "মূল কথা — এই Lab-এ যা শেখানো হচ্ছে")}</h3>
          <p className="cl-concept-lead mt-2">{objective}</p>
          <div className="mt-3 border-t border-[color:var(--border)] pt-2.5">
            <h4 className={smallTitle}>{txI(s.profile.lang, "Key definitions", "মূল পরিভাষা — সংজ্ঞা")}</h4>
            <dl className="space-y-1.5">
              <div className="text-[13px] leading-snug"><dt className="inline font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Authorized environment", "অনুমোদিত পরিবেশ")}</dt><dd className="inline text-[color:var(--dim)]"> — {tx(lab.environment, bnLab?.environment)}</dd></div>
              <div className="text-[13px] leading-snug"><dt className="inline font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Setup", "প্রস্তুতি")}</dt><dd className="inline text-[color:var(--dim)]"> — {tx(lab.setup, bnLab?.setup)}</dd></div>
            </dl>
          </div>
          <figure className="mt-3 border-t border-[color:var(--border)] pt-2.5">
            <h4 className={smallTitle}>{txI(s.profile.lang, "Figure — the lab evidence (starting state)", "চিত্র — Lab-এর প্রমাণ (শুরুর অবস্থা)")}</h4>
            <div className="overflow-hidden rounded-xl border border-[color:var(--border)]">
              <div className="flex items-center gap-1.5 bg-[#111827] px-3 py-2"><span className="h-3 w-3 rounded-full bg-red-500" /><span className="h-3 w-3 rounded-full bg-amber-400" /><span className="h-3 w-3 rounded-full bg-emerald-500" /><span className="ml-2 font-mono text-[11px] text-slate-300">lab-environment — starting state</span><span className="ml-auto rounded-full border border-amber-700 px-2 py-0.5 text-[11px] font-semibold text-amber-300">{txI(s.profile.lang, "SIMULATED DATA — not a real machine", "SIMULATED DATA — আসল machine নয়")}</span></div>
              <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap bg-[#070b12] p-3 font-mono text-[12.5px] leading-relaxed text-[#a7f3d0]">{lab.startState}</pre>
            </div>
            <figcaption className="mt-2 text-xs leading-relaxed text-[color:var(--dim)]">{isBn ? <>নিচের exercise-এর কাজগুলো এই প্রমাণের বিপরীতেই করো। আসল command যেকোনো সময় <strong className="text-[color:var(--text)]">Cyber Terminal</strong>-এ অনুশীলন করা যায় — নিজের lab machine-এ এগুলো সত্যিই চলে।</> : <>Work the exercises below against this evidence. Rehearse the real commands any time in the <strong className="text-[color:var(--text)]">Cyber Terminal</strong> — on your own lab machine they run for real.</>}</figcaption>
          </figure>
        </section>

        <div className="min-w-0 space-y-3">
          <section aria-label={txI(s.profile.lang, "Worked example", "Worked example")}>
            <h3 className="mb-1.5 text-[13px] font-bold text-[color:var(--dim)]">{sampleTry ? (txI(s.profile.lang, "Written sample — ", "লিখিত sample — ")) : (txI(s.profile.lang, "Worked example — ", "Worked example — "))}{srcLesson ? <span className="mono font-medium text-[color:var(--text)]">{srcLesson.code.title}</span> : <span className="font-medium text-[color:var(--text)]">{lab.title}</span>}</h3>
            {srcLesson ? <LabTryBox code={srcLesson.code} isBn={isBn} onRan={() => setHasRun(true)} /> : (
              <p className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-[13px] leading-relaxed text-[color:var(--dim)]">{txI(s.profile.lang, "This lab's lesson carries no runnable code — the hands-on step is examining the evidence on the left, closely.", "এই Lab-এর পাঠে কোনো runnable code নেই — হাতে-কলমে ধাপটা হলো বামের প্রমাণটি খুঁটিয়ে পড়া।")}</p>
            )}
            {hasTry ? (
              <p className="mt-2 text-[13px] leading-relaxed" role="status">
                {hasRun
                  ? <span className="text-emerald-300">✓ {sampleTry ? (txI(s.profile.lang, "Sample copied — step 2 done.", "Sample copy হয়েছে — ধাপ ২ পূর্ণ।")) : (txI(s.profile.lang, "Run in the try area — step 2 done.", "Try area-তে চালানো হয়েছে — ধাপ ২ পূর্ণ।"))}</span>
                  : <span className="text-amber-300">{sampleTry ? (txI(s.profile.lang, "Step 2 still open: this lab cannot close until you copy the sample above — answering the tasks alone is not enough.", "ধাপ ২ বাকি: ওপরের sample-টি copy না করলে এই Lab শেষ হবে না — শুধু কাজের উত্তর দিলে হবে না।")) : (txI(s.profile.lang, "Step 2 still open: this lab cannot close until you press Run in the try area above at least once — answering the tasks alone is not enough.", "ধাপ ২ বাকি: ওপরের try area-তে অন্তত একবার Run না চাপলে এই Lab শেষ হবে না — শুধু কাজের উত্তর দিলে হবে না।"))}</span>}
              </p>
            ) : null}
          </section>
        </div>
      </div>

      {/* Deep dive — the full six-part why, folded like a lesson's. */}
      <ProgCollapse title={txI(s.profile.lang, "Deep dive — why this lab? (the full six-part explanation)", "গভীরে বোঝো — এই Lab-টা কেন? (ছয় অংশের পুরো ব্যাখ্যা)")}>
        <LabWhyBox labId={lab.id} />
      </ProgCollapse>

      {/* Graded gate — the end-of-lab exercises, same shape as a lesson's
          end-of-chapter exercises: read first, then both gates must pass. */}
      <section aria-label={txI(s.profile.lang, "End-of-lab exercises", "Lab-এর শেষের exercise")} className="mt-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5 sm:p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[15px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "End-of-lab exercises — both gates must pass", "Lab-এর শেষের exercise — দুটো gate-ই পাস করতে হবে")}</h3>
          <Badge tone={viewed || done ? "ok" : "warn"}>{viewed || done ? (txI(s.profile.lang, "Read ✓", "পড়া হয়েছে ✓")) : (txI(s.profile.lang, "Not yet confirmed read", "এখনো পড়া confirm হয়নি"))}</Badge>
          <Badge tone={hasRun ? "ok" : "dim"}>{sampleTry ? (txI(s.profile.lang, "Copy ", "Copy ")) : (txI(s.profile.lang, "Run ", "Run "))}{hasRun ? "✓" : "…"}</Badge>
          <Badge tone={tasksOk ? "ok" : "dim"}>{txI(s.profile.lang, "Tasks ", "কাজ ")}{tasksOk ? "✓" : "…"}</Badge>
        </div>
        {!viewed && !done ? (
          <button type="button" onClick={() => setViewed(true)} className="mt-3 min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white">
            {txI(s.profile.lang, "I have read the main point, the definitions and the evidence — unlock the exercises", "আমি মূল কথা, সংজ্ঞা আর প্রমাণ পড়েছি — exercise খোলো")}
          </button>
        ) : (
          <div className="mt-3 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" onClick={() => setShowHint((h) => !h)} className="min-h-[40px] rounded-lg border border-amber-700 px-3 py-1.5 text-sm font-medium text-[color:var(--text)]">💡 {showHint ? (txI(s.profile.lang, "Hide hint", "ইঙ্গিত লুকাও")) : (txI(s.profile.lang, "Show hint", "ইঙ্গিত দেখাও"))}</button>
              {showHint ? <p className="w-full rounded-lg bg-amber-950/30 p-3 text-sm text-amber-200">{txI(s.profile.lang, "Hint: ", "ইঙ্গিত: ")}{tx(lab.hint, bnLab?.hint)}</p> : null}
            </div>
            <QuestionRunner id={lab.id} kind="lab" xp={lab.xp} title={`Lab: ${lab.title}`} tasks={lab.tasks}
              passNote={hasRun ? lab.result : (txI(s.profile.lang, "Tasks passed. One gate remains: run the worked example in the try area above (copy it, if it is a text sample) — the lab closes the moment both are done.", "কাজ গুলো পাস হয়েছে। একটা gate বাকি: ওপরের try area-তে worked example-টি চালাও (text sample হলে copy করো) — দুটো হলেই Lab বন্ধ হবে।"))}
              bnTasks={bnLab?.tasks} bnPassNote={hasRun ? bnLab?.result : "কাজ গুলো পাস হয়েছে। একটা gate বাকি: ওপরের try area-তে worked example-টি চালাও (text sample হলে copy করো) — দুটো হলেই Lab বন্ধ হবে।"}
              suppressComplete onResult={(pct) => setDecisionPct(pct)} />
            {!hasRun && tasksOk ? (
              <p role="status" className="rounded-md border border-amber-800 bg-amber-950/30 p-3 text-sm text-amber-100">{txI(s.profile.lang, "Tasks are at ≥70%, but the lab is not closed yet: step 2 remains — press Run in the try area above at least once (or Copy, for a text sample).", "কাজ গুলো ≥৭০% হয়েছে, কিন্তু Lab এখনো বন্ধ হয়নি: ধাপ ২ বাকি — ওপরের try area-তে অন্তত একবার Run চাপো (text sample হলে Copy করো)।")}</p>
            ) : null}
          </div>
        )}
        {done ? <p className="mt-2.5 text-sm text-emerald-300">{txI(s.profile.lang, "This lab is complete. Revision is always open — re-answering never removes XP and never re-locks anything.", "এই Lab সম্পূর্ণ। আবার অনুশীলন সবসময় খোলা — আবার উত্তর দিলে XP কাটে না, কিছুই আবার বন্ধ হয় না।")}</p> : null}
      </section>

      <p className="mt-3 text-[13px] leading-relaxed text-[color:var(--dim)]">
        <strong className="text-[color:var(--text)]">{txI(s.profile.lang, "What you can do now: ", "এখন তুমি যা করতে পারো: ")}</strong>
        {tx(lab.result, bnLab?.result)}
        {done ? (txI(s.profile.lang, " — this lab is complete.", " — এই Lab সম্পূর্ণ।")) : (txI(s.profile.lang, " — run the worked example and score ≥70% on the tasks and this lab is complete.", " — try area-তে Run আর কাজে ≥৭০% হলেই এই Lab সম্পূর্ণ হবে।"))}
      </p>
    </div>
  );
}

function LabsView({ goLesson }: { goLesson: (id: string) => void }) {
  const s = useStore();
  const tx = (en: string, b?: string) => txI(s.profile.lang, en, b);
  const [open, setOpen] = useState<string | null>(null);
  const filter = useUnlockFilter();
  const unlockedCount = LABS.filter((l) => isUnlocked(s, LAB_REQUIRES[l.id]) || isDone(s, "lab", l.id)).length;
  const nextLocked = LABS.find((l) => !isUnlocked(s, LAB_REQUIRES[l.id]) && !isDone(s, "lab", l.id));
  return (
    <div className="cl-stagger space-y-4">
      <JourneyStrip nextLabel={nextLocked ? `Lab: ${nextLocked.title}` : "keep revising any open lab"} />
      <SectionTitle eyebrow="Workshop bench · Step 2" orderEn={SECTION_ORDER.labs.en} orderBn={SECTION_ORDER.labs.bn} bn="ইন্টার‌্যাক্টিভ ল্যাব" bnSub="প্রতিটি lab ঠিক পাঠের মতোই একটি অধ্যায়: মূল কথা ও সংজ্ঞা, পাশে worked example-এর live try pane, শেষে exercise। Lab শেষ হয় তখনই যখন try area-তে সত্যিই Run করেছ (text sample হলে copy) আর কাজে ≥৭০% পেয়েছ — শুধু উত্তরে Lab বন্ধ হয় না।" sub="Each lab is a chapter in the same shape as a lesson: the main point and definitions beside the worked example's live try pane, exercises at the end. A lab closes only when you have actually run the worked example in the try area (copied it, for a text sample) AND scored ≥70% on the tasks — answers alone never close a lab.">
        Interactive Labs
      </SectionTitle>
      <UnlockFilterBar total={LABS.length} unlockedCount={unlockedCount} showAll={filter.showAll} setShowAll={filter.setShowAll} nextUnlockLabel={nextLocked ? lessonShort((LAB_REQUIRES[nextLocked.id] ?? [])[0] ?? "") : undefined} />
      {LABS.map((lab) => {
        const req = LAB_REQUIRES[lab.id] ?? [];
        const unlocked = isUnlocked(s, req) || isDone(s, "lab", lab.id);
        if (!filter.showAll && !unlocked) return null;
        return (
        <Card key={lab.id} accent={levelAccent(lab.level)}>
          <div className="flex gap-3">
            <div className="hidden h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl text-white sm:flex" style={{ background: `linear-gradient(135deg, ${levelAccent(lab.level)}, color-mix(in srgb, ${levelAccent(lab.level)} 45%, #0f172a))` }} aria-hidden="true">
              <span className="text-2xl">{lab.type.includes("Linux") ? "🐧" : lab.type.includes("Web") ? "🌐" : lab.type.includes("Network") ? "🌍" : lab.type.includes("Android") ? "🤖" : lab.type.includes("Cloud") ? "☁️" : "🧪"}</span>
              <span className="text-[10px] font-bold">L{lab.level}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-bold text-[color:var(--text)]">{itemTitle(s.profile.lang, lab.id, lab.title)}</h3>
                <Badge tone="warn">🧪 SIMULATED LAB</Badge><Badge>{lab.type}</Badge>
                {isDone(s, "lab", lab.id) ? <Badge tone="ok">✓ Completed · {lab.xp} XP</Badge> : <Badge>{lab.xp} XP · {lab.minutes} min</Badge>}
                {unlocked ? <button type="button" className={`ml-auto min-h-[44px] rounded-lg px-4 py-2 text-sm font-bold ${open === lab.id ? "border border-[color:var(--border)] text-[color:var(--text)]" : "bg-emerald-600 text-white"}`} aria-expanded={open === lab.id}
                  onClick={() => setOpen(open === lab.id ? null : lab.id)}>{open === lab.id ? (txI(s.profile.lang, "Close lab", "Lab বন্ধ করো")) : (txI(s.profile.lang, "▶ Start Lab", "▶ Lab শুরু করো"))}</button>
                : <span className="ml-auto rounded-lg border border-[color:var(--border)] px-3 py-2 text-sm font-semibold text-[color:var(--dim)]">{txI(s.profile.lang, "Locked", "বন্ধ")}</span>}
              </div>
              <p className="mt-1 text-sm text-[color:var(--dim)]"><span className="font-medium text-[color:var(--text)]">{txI(s.profile.lang, "Objective:", "লক্ষ্য:")}</span> {tx(lab.objective, LAB_BN[lab.id]?.objective)}</p>
              {!unlocked ? <LockedNotice requires={req} goLesson={goLesson} teaches={lab.objective} /> : null}
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[color:var(--surface2)]"><div className="h-full bg-emerald-500 transition-all" style={{ width: isDone(s, "lab", lab.id) ? "100%" : "0%" }} /></div>
            </div>
          </div>
          {open === lab.id ? <LabChapter lab={lab} /> : null}
        </Card>
        );
      })}
    </div>
  );
}

/** One mission, upgraded (13 Nov 2026; textbook chapter shape + doing-gate
 * hardened 15 Nov 2026, v33): hands-on FIRST, judgment second.
 * Step 1 is a practical tied to the case — run the check in the lab try
 * area, or do the real-PC / own-work task with exact steps and the
 * expected result — verified by one checked question that can only be
 * answered from having done it. Step 2 is the original case-file decision
 * (QuestionRunner, ≥70%). The mission completes and XP is awarded ONLY
 * when BOTH have passed; the story and debrief are unchanged. */
function MissionRunner({ m }: { m: Mission }) {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const tx = (en: string, b?: string) => txI(s.profile.lang, en, b);
  const done = isDone(s, "mission", m.id);
  const prac = MISSION_PRACTICAL[m.id];
  const missionSrcLesson = (MISSION_REQUIRES[m.id] ?? []).map((lid) => ALL_LESSONS.find((l) => l.id === lid)).find((l) => l && l.code && l.code.code && l.code.code.trim());
  const [pick, setPick] = useState<number | null>(null);
  const [pracState, setPracState] = useState<"idle" | "right" | "wrong">(done ? "right" : "idle");
  const [decisionPct, setDecisionPct] = useState<number | null>(done ? 100 : null);
  const [justClosed, setJustClosed] = useState(false);
  /* v33 doing-gate (same honesty rule as the labs): the practical check
   * alone no longer passes Step 1. In "try" mode the learner must actually
   * Run the worked example in the try area (Copy it, for a text sample);
   * in "pc" mode they must tick the honest artefact self-checklist — one
   * box per step actually done, plus one confirming the finished artefact
   * matches the expected shape. The app cannot see the learner's own PC
   * or notes, so the checklist is labelled as exactly what it is: a
   * self-check, never a verified submission. */
  const [hasRun, setHasRun] = useState(done);
  const sampleMission = missionSrcLesson ? isSampleContent(missionSrcLesson.code) : false;
  const artefactItems: string[] = prac && prac.mode === "pc"
    ? [...(isBn ? (prac.stepsBn ?? prac.stepsEn ?? []) : (prac.stepsEn ?? [])),
       ...(prac.expectedEn ? [isBn ? `আমার তৈরি artefact-টি প্রত্যাশিত আকারের সঙ্গে মিলিয়ে দেখেছি: ${prac.expectedBn ?? prac.expectedEn}` : `I checked my finished artefact against the expected shape: ${prac.expectedEn}`] : [])]
    : [];
  const [artefactChecks, setArtefactChecks] = useState<boolean[]>(() => Array.from({ length: 16 }, () => done));
  const artefactOk = done || artefactItems.length === 0 || artefactItems.every((_, i) => artefactChecks[i]);
  const doingOk = done || (prac?.mode === "pc" ? artefactOk : (!missionSrcLesson || hasRun));
  const practicalOk = done || (pracState === "right" && doingOk);
  const decisionOk = done || (decisionPct !== null && decisionPct >= 70);
  useEffect(() => {
    if (!done && practicalOk && decisionOk) {
      completeItem("mission", m.id, m.xp, decisionPct ?? 100, `Mission: ${m.title}`);
      setJustClosed(true);
    }
  }, [done, practicalOk, decisionOk, decisionPct, m.id, m.xp, m.title]);
  if (!prac) {
    // No authored practical: the mission can NEVER complete on the decision
    // alone (that is the whole point of the upgrade), so it stays blocked
    // with an honest notice instead of falling back to a decision-only XP
    // path. All 16 missions carry a MISSION_PRACTICAL entry (verified
    // programmatically at build time), so this state is not expected to
    // render; if it ever does, no XP can leak through it.
    return (
      <p role="alert" className="rounded-md border border-amber-800 bg-amber-950/30 p-3 text-sm text-amber-100">
        {isBn
          ? "এই mission-এর hands-on practical ধাপ এখনো তৈরি হয়নি — শুধু সিদ্ধান্ত দিয়ে এটি শেষ করা যাবে না, তাই XP-ও মিলবে না। Practical যোগ হলেই এটি খুলবে।"
          : "This mission's hands-on practical step has not been authored yet — it cannot be completed on the decision alone, so no XP is available from it. It opens fully once its practical is added."}
      </p>
    );
  }
  const srcLesson = missionSrcLesson;
  const check = isBn ? prac.checkBn : prac.check;
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2" role="status" aria-label={txI(s.profile.lang, "Mission progress", "Mission-এর অগ্রগতি")}>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${doingOk ? "bg-emerald-600 text-white" : "border border-[color:var(--border)] text-[color:var(--dim)]"}`}>{doingOk ? "✓ " : ""}{prac.mode === "pc" ? (txI(s.profile.lang, "Step 1a · Make the artefact + self-check", "ধাপ ১ক · Artefact তৈরি + self-check")) : sampleMission ? (txI(s.profile.lang, "Step 1a · Copy the sample", "ধাপ ১ক · Sample copy করো")) : (txI(s.profile.lang, "Step 1a · Run it in the try area", "ধাপ ১ক · Try area-তে Run করো"))}</span>
        <span aria-hidden="true" className="text-[color:var(--dim)]">→</span>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${practicalOk ? "bg-emerald-600 text-white" : "border border-[color:var(--border)] text-[color:var(--dim)]"}`}>{practicalOk ? "✓ " : ""}{txI(s.profile.lang, "Step 1b · Practical check", "ধাপ ১খ · Practical যাচাই")}</span>
        <span aria-hidden="true" className="text-[color:var(--dim)]">→</span>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${decisionOk ? "bg-emerald-600 text-white" : "border border-[color:var(--border)] text-[color:var(--dim)]"}`}>{decisionOk ? "✓ " : ""}{txI(s.profile.lang, "Step 2 · Decision (≥70%)", "ধাপ ২ · সিদ্ধান্ত (≥৭০%)")}</span>
        {done ? <Badge tone="ok">✓ {txI(s.profile.lang, "Case closed · ", "Case বন্ধ · ")}{m.xp} XP</Badge> : <span className="text-[12px] text-[color:var(--dim)]">{txI(s.profile.lang, "Every gate passed = the mission closes and XP is awarded.", "সব gate পাস হলেই mission শেষ হয় ও XP মেলে।")}</span>}
      </div>

      <section aria-label={txI(s.profile.lang, "Step 1 — hands-on practical", "ধাপ ১ — hands-on practical")} className="rounded-xl border-2 p-3.5 sm:p-4" style={{ borderColor: "color-mix(in srgb, var(--c-mission) 55%, var(--border))", background: "color-mix(in srgb, var(--c-mission) 5%, var(--surface))" }}>
        <h4 className="text-sm font-bold text-[color:var(--text)]">🛠️ {txI(s.profile.lang, "Step 1 · Hands-on — do this first", "ধাপ ১ · আগে হাতে-কলমে করো")}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--text)]">{tx(prac.doEn, prac.doBn)}</p>
        {prac.mode === "pc" && prac.stepsEn ? (
          <>
            <ol className="mt-2.5 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-[color:var(--text)]">
              {(isBn ? (prac.stepsBn ?? prac.stepsEn) : prac.stepsEn).map((st) => <li key={st}>{st}</li>)}
            </ol>
            {prac.expectedEn ? (
              <p className="cl-callout cl-callout-note mt-3 text-[13px] leading-relaxed text-[color:var(--dim)]">
                <strong className="text-[color:var(--text)]">{txI(s.profile.lang, "What you should end up with: ", "যা তৈরি হওয়ার কথা: ")}</strong>{tx(prac.expectedEn, prac.expectedBn)}
              </p>
            ) : null}
            {/* Honest artefact self-checklist (v33): the app cannot see the
                learner's own PC or notes, so the artefact itself is never
                "submitted" — instead each step, and the finished artefact's
                expected shape, must be ticked as actually done before the
                practical check can pass. Labelled as a self-check, in the
                open — not dressed up as verification. */}
            <div className="mt-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5">
              <h5 className="text-sm font-bold text-[color:var(--text)]">✅ {txI(s.profile.lang, "Artefact self-check — tick each box only if you really did it", "Artefact self-check — সত্যিই করে থাকলেই tick দাও")}</h5>
              <p className="mt-1 text-[13px] leading-relaxed text-[color:var(--dim)]">{txI(s.profile.lang, "The app cannot see the artefact you made on your own PC or in your notes — so this is an honest self-check, not a verified submission. Ticking a box you did not do only cheats yourself; the practical check below cannot pass until this checklist is complete.", "তোমার নিজের PC বা note app-এ তৈরি artefact-টি app দেখতে পায় না — তাই এটি একটি সৎ self-check, কোনো জমা-যাচাই নয়। না করে tick দেওয়া মানে নিজেকেই ঠকানো; practical যাচাইটি এই checklist শেষ না হলে পাস হবে না।")}</p>
              <div className="mt-2 space-y-1.5">
                {artefactItems.map((item, i) => (
                  <label key={i} className={`flex min-h-[40px] cursor-pointer items-start gap-2.5 rounded-lg border px-3 py-2 text-sm ${artefactChecks[i] ? "border-emerald-700 bg-emerald-950/30" : "border-[color:var(--border)]"}`}>
                    <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-emerald-500" checked={!!artefactChecks[i]} disabled={done}
                      onChange={() => setArtefactChecks((c) => c.map((v, ci) => (ci === i ? !v : v)))}
                      aria-label={isBn ? `Self-check ধাপ ${i + 1}` : `Self-check item ${i + 1}`} />
                    <span className="text-[color:var(--text)]">{item}</span>
                  </label>
                ))}
              </div>
              <p className="mt-2 text-[13px] font-semibold" role="status">{artefactOk
                ? <span className="text-emerald-300">✓ {txI(s.profile.lang, "Self-check complete — now take the practical check below.", "Self-check সম্পূর্ণ — এবার নিচের practical যাচাইটি দাও।")}</span>
                : <span className="text-amber-300">{isBn ? `${artefactChecks.slice(0, artefactItems.length).filter(Boolean).length}/${artefactItems.length}টি ধাপ tick হয়েছে — সব গুলো সত্যিই শেষ করলেই যাচাই খুলবে।` : `${artefactChecks.slice(0, artefactItems.length).filter(Boolean).length} of ${artefactItems.length} items ticked — finish them all, for real, to unlock the check.`}</span>}</p>
            </div>
          </>
        ) : null}
        {srcLesson ? <LabTryBox code={srcLesson.code} isBn={isBn} onRan={() => setHasRun(true)} /> : null}
        {prac.mode === "try" && srcLesson ? (
          <p className="mt-2 text-[13px] leading-relaxed" role="status">
            {doingOk
              ? <span className="text-emerald-300">✓ {sampleMission ? (txI(s.profile.lang, "Sample copied — the doing gate is done.", "Sample copy হয়েছে — করার gate পূর্ণ।")) : (txI(s.profile.lang, "Run in the try area — the doing gate is done.", "Try area-তে চালানো হয়েছে — করার gate পূর্ণ।"))}</span>
              : <span className="text-amber-300">{sampleMission ? (txI(s.profile.lang, "Doing gate still open: copy the sample above — the practical check cannot pass until you do.", "করার gate বাকি: ওপরের sample-টি copy না করলে practical যাচাই পাস হবে না।")) : (txI(s.profile.lang, "Doing gate still open: press Run in the try area above at least once — the practical check cannot pass until you do.", "করার gate বাকি: ওপরের try area-তে অন্তত একবার Run না চাপলে practical যাচাই পাস হবে না।"))}</span>}
          </p>
        ) : null}
        <fieldset className="cl-q-card mt-4">
          <legend className="rounded-full bg-amber-600 px-2.5 py-0.5 text-xs font-bold text-white">{txI(s.profile.lang, "Practical check", "Practical যাচাই")}</legend>
          <p className="mt-1.5 text-sm font-medium text-[color:var(--text)]">{check.prompt}</p>
          <div className="mt-2 space-y-1.5" role="radiogroup" aria-label={txI(s.profile.lang, "Practical check answers", "Practical যাচাইয়ের উত্তর")}>
            {check.options.map((opt, oi) => (
              <label key={oi} className={`cl-q-opt flex cursor-pointer items-center gap-2 border text-sm ${pracState === "right" && oi === check.answer ? "border-emerald-700 bg-emerald-950/40" : pick === oi ? "border-[color:var(--accent)] bg-sky-950/30" : "border-[color:var(--border)]"}`}>
                <input type="radio" name={`${m.id}-practical`} className="accent-sky-500" checked={pick === oi} disabled={pracState === "right"}
                  onChange={() => { setPick(oi); setPracState("idle"); }} />
                <span className="text-[color:var(--text)]">{opt}</span>
              </label>
            ))}
          </div>
          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <button type="button" disabled={pick === null || pracState === "right" || !doingOk}
              onClick={() => { const ok = pick === check.answer; if (ok) sfxSuccess(); else sfxError(); setPracState(ok ? "right" : "wrong"); }}
              className="min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">
              {txI(s.profile.lang, "Check answer", "উত্তর যাচাই করো")}
            </button>
            {practicalOk ? <Badge tone="ok">✓ {txI(s.profile.lang, "Practical passed", "Practical পাস")}</Badge> : null}
          </div>
          {!doingOk && pracState !== "right" ? (
            <p className="mt-2 text-[13px] leading-relaxed text-amber-300" role="note">{prac.mode === "pc"
              ? (txI(s.profile.lang, "This check stays locked until every box in the artefact self-check above is ticked — for work you actually did.", "এই যাচাইটি বন্ধ আছে যতক্ষণ না ওপরের artefact self-check-এর প্রতিটি box সত্যিই শেষ করে tick দিচ্ছ।"))
              : (txI(s.profile.lang, "This check stays locked until you actually Run (or Copy, for a text sample) in the try area above.", "এই যাচাইটি বন্ধ আছে যতক্ষণ না ওপরের try area-তে সত্যিই Run (বা text sample হলে Copy) করছ।"))}</p>
          ) : null}
          {pracState === "right" ? <p role="status" className="mt-2 rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-sm text-emerald-200">{txI(s.profile.lang, "Correct. ", "সঠিক। ")}{check.explain}</p> : null}
          {pracState === "wrong" ? <p role="alert" className="mt-2 rounded-md border border-red-900 bg-red-950/30 p-3 text-sm text-red-200">{txI(s.profile.lang, "Not yet — actually do (or redo) the step above, then try again. This answer cannot be matched by reading alone.", "এখনো নয় — ওপরের ধাপটা সত্যিই করে (বা আবার করে) তারপর আবার চেষ্টা করো। শুধু পড়লে এই উত্তর মিলবে না।")}</p> : null}
        </fieldset>
      </section>

      <section aria-label={txI(s.profile.lang, "Step 2 — the decision", "ধাপ ২ — সিদ্ধান্ত")}>
        <h4 className="mb-2 text-sm font-bold text-[color:var(--text)]">⚖️ {txI(s.profile.lang, "Step 2 · Now decide — the case-file judgment", "ধাপ ২ · এবার সিদ্ধান্ত — case file-এর বিচার")}</h4>
        <QuestionRunner id={m.id} kind="mission" xp={m.xp} title={`Mission: ${m.title}`} tasks={m.questions}
          passNote={txI(s.profile.lang, "Decision recorded. The mission closes once the hands-on practical has also passed.", "সিদ্ধান্ত record হয়েছে। Hands-on practical-ও পাস হলেই mission বন্ধ হবে।")}
          bnTasks={MISSION_BN[m.id]?.questions} bnPassNote={isBn ? "সিদ্ধান্ত record হয়েছে। Hands-on practical-ও পাস হলেই mission বন্ধ হবে।" : undefined}
          suppressComplete onResult={(pct) => setDecisionPct(pct)} />
      </section>

      {done || justClosed ? (
        <p role="status" className="rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-sm leading-relaxed text-emerald-200">
          <strong>{txI(s.profile.lang, "Case closed — ", "Case বন্ধ — ")}</strong>{tx(m.debrief, MISSION_BN[m.id]?.debrief)}
        </p>
      ) : null}
    </div>
  );
}

function MissionsView({ goLesson }: { goLesson: (id: string) => void }) {
  const s = useStore();
  const tx = (en: string, b?: string) => txI(s.profile.lang, en, b);
  const [open, setOpen] = useState<string | null>(null);
  const filter = useUnlockFilter();
  const unlockedCount = MISSIONS.filter((m) => isUnlocked(s, MISSION_REQUIRES[m.id]) || isDone(s, "mission", m.id)).length;
  const nextLocked = MISSIONS.find((m) => !isUnlocked(s, MISSION_REQUIRES[m.id]) && !isDone(s, "mission", m.id));
  return (
    <div className="cl-stagger space-y-4">
      <JourneyStrip nextLabel={nextLocked ? `Mission: ${nextLocked.title}` : "keep revising any open case"} />
      <SectionTitle eyebrow="Case files · Step 4" orderEn={SECTION_ORDER.missions.en} orderBn={SECTION_ORDER.missions.bn} bn="মিশন" bnSub="প্রতিটি mission ঠিক পাঠের মতোই একটি অধ্যায়: মূল কথা (case), তারপর হাতে-কলমে ধাপ, শেষে সিদ্ধান্ত। Try-mode mission-এ try area-তে সত্যিই Run করতে হয়; PC-mode mission-এ artefact বানিয়ে প্রতিটি ধাপের সৎ self-check tick দিতে হয় — তারপরেই practical যাচাই খোলে। সব gate পাস হলেই mission শেষ হয়।" sub="Each mission is a chapter in the same shape as a lesson: the main point (the case), then the hands-on step, then the decision. A try-mode mission requires a real Run in the try area; a PC-mode mission requires making the artefact and ticking the honest self-check for every step — only then does the practical check open. Every gate passed closes the mission.">
        Missions
      </SectionTitle>
      <UnlockFilterBar total={MISSIONS.length} unlockedCount={unlockedCount} showAll={filter.showAll} setShowAll={filter.setShowAll} nextUnlockLabel={nextLocked ? lessonShort((MISSION_REQUIRES[nextLocked.id] ?? [])[0] ?? "") : undefined} />
      {MISSIONS.map((m) => {
        const req = MISSION_REQUIRES[m.id] ?? [];
        const unlocked = isUnlocked(s, req) || isDone(s, "mission", m.id);
        if (!filter.showAll && !unlocked) return null;
        return (
        <Card key={m.id} accent="var(--c-mission)" variant="dossier">
          <div className="cl-dossier-tab -mx-4 -mt-4 mb-3 flex items-center gap-2 px-4 py-2 sm:-mx-5 sm:-mt-5 sm:px-5" style={{ background: "color-mix(in srgb, var(--c-mission) 16%, var(--surface2))" }}><SectionIcon kind="missions" size={17} /><span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--dim)]">Case file · {s.profile.lang === "bn" ? "তদন্তের নথি" : "investigation dossier"}</span></div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: "var(--c-mission)" }} aria-hidden="true"><SectionIcon kind="missions" size={20} color="#fff" /></span>
            <h3 className="font-bold text-[color:var(--text)]">{itemTitle(s.profile.lang, m.id, m.title)}</h3>
            <Badge tone="warn">📁 CASE FILE · SIMULATED</Badge>
            {isDone(s, "mission", m.id) ? <Badge tone="ok">✓ Closed · {m.xp} XP</Badge> : <Badge>{m.xp} XP</Badge>}
            {unlocked ? <button type="button" className={`ml-auto min-h-[44px] rounded-lg px-4 py-2 text-sm font-bold ${open === m.id ? "border border-[color:var(--border)] text-[color:var(--text)]" : "text-white"}`} style={open === m.id ? undefined : { background: "var(--c-mission)" }} aria-expanded={open === m.id}
              onClick={() => setOpen(open === m.id ? null : m.id)}>{open === m.id ? (txI(s.profile.lang, "Close case", "Case বন্ধ করো")) : (txI(s.profile.lang, "▶ Open case file", "▶ Case file খোলো"))}</button>
            : <span className="ml-auto rounded-lg border border-[color:var(--border)] px-3 py-2 text-sm font-semibold text-[color:var(--dim)]">{txI(s.profile.lang, "Locked", "বন্ধ")}</span>}
          </div>
          {!unlocked ? <LockedNotice requires={req} goLesson={goLesson} teaches={itemDesc(s.profile.lang, m.id)} /> : null}
          {open === m.id ? (
            <div className="mt-3 space-y-3">
              {/* Chapter header, lesson-style: ONE purpose line (the case's
                  first sentence) + fact chips, then the main point box. */}
              {(() => {
                const scenario = tx(m.scenario, MISSION_BN[m.id]?.scenario);
                const purpose = scenario.split(/(?<=[.!?।])\s+/)[0] ?? scenario;
                const pracMode = MISSION_PRACTICAL[m.id]?.mode;
                return (
                  <>
                    <p className="text-[15px] leading-relaxed text-[color:var(--text)]"><span className="font-bold" style={{ color: "var(--c-mission)" }}>{txI(s.profile.lang, "In one line: ", "এক লাইনে: ")}</span>{purpose}</p>
                    <div className="flex flex-wrap gap-1.5" aria-label={txI(s.profile.lang, "Mission facts", "Mission-এর তথ্য")}>
                      <span className="cl-meta-chip"><b>XP</b> {m.xp}</span>
                      <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Step 1", "ধাপ ১")}</b> {pracMode === "pc" ? (txI(s.profile.lang, "Artefact on your own PC", "নিজের PC-তে artefact")) : (txI(s.profile.lang, "Run in the try area", "Try area-তে Run"))}</span>
                      <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Decision questions", "সিদ্ধান্তের প্রশ্ন")}</b> {m.questions.length}</span>
                      {req[0] ? <span className="cl-meta-chip"><b>{txI(s.profile.lang, "Needs first", "আগে লাগবে")}</b> {lessonShort(req[0])}</span> : null}
                    </div>
                    <section aria-label={txI(s.profile.lang, "Main point — the case", "মূল কথা — case-টি")} className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5 sm:p-4">
                      <h4 className="text-[15px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "The main point — the case", "মূল কথা — case-টি")}</h4>
                      <p className="cl-concept-lead mt-2">{scenario}</p>
                      <div className="mt-3 border-t border-[color:var(--border)] pt-2.5">
                        <h5 className="mb-1.5 text-[13px] font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Key definitions", "মূল পরিভাষা — সংজ্ঞা")}</h5>
                        <dl className="space-y-1.5">
                          <div className="text-[13px] leading-snug"><dt className="inline font-bold text-[color:var(--text)]">{txI(s.profile.lang, "Environment", "পরিবেশ")}</dt><dd className="inline text-[color:var(--dim)]"> — {tx(m.environment, MISSION_BN[m.id]?.environment)}</dd></div>
                          <div className="text-[13px] leading-snug"><dt className="inline font-bold text-[color:var(--text)]">{txI(s.profile.lang, "How this case closes", "Case যেভাবে বন্ধ হয়")}</dt><dd className="inline text-[color:var(--dim)]"> — {txI(s.profile.lang, "Step 1's doing gate + practical check, then ≥70% on the Step 2 decision — every gate must pass.", "ধাপ ১-এর করার gate + practical যাচাই, তারপর ধাপ ২-এর সিদ্ধান্তে ≥৭০% — সবগুলো পাস হলেই।")}</dd></div>
                        </dl>
                      </div>
                    </section>
                  </>
                );
              })()}
              <MissionRunner m={m} />
            </div>
          ) : null}
        </Card>
        );
      })}
    </div>
  );
}

function CtfView({ goLesson }: { goLesson: (id: string) => void }) {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const tx = (en: string, b?: string) => txI(s.profile.lang, en, b);
  const [flags, setFlags] = useState<Record<string, string>>({});
  const [verdicts, setVerdicts] = useState<Record<string, string>>({});
  const [hints, setHints] = useState<Record<string, boolean>>({});
  const filter = useUnlockFilter();
  const unlockedCount = CTFS.filter((c) => isUnlocked(s, CTF_REQUIRES[c.id]) || isDone(s, "ctf", c.id)).length;
  const nextLocked = CTFS.find((c) => !isUnlocked(s, CTF_REQUIRES[c.id]) && !isDone(s, "ctf", c.id));
  return (
    <div className="cl-stagger space-y-4">
      <JourneyStrip nextLabel={nextLocked ? `CTF: ${nextLocked.title}` : "keep solving any open challenge"} />
      <SectionTitle eyebrow="Challenge board · Step 7" orderEn={SECTION_ORDER.ctf.en} orderBn={SECTION_ORDER.ctf.bn} bn="CTF এরিনা" bnSub="প্রতিটি challenge তার পাঠের পরে খোলে। বন্ধ challenge কী শেখায় তা দেখা যাবে, কিন্তু তার flag বা সূত্র আগেভাগে দেখা যাবে না — আগে শেখো, তারপর প্রমাণ করো।" sub="Each challenge opens after its lesson group. A locked challenge always shows what it teaches — never its artifact, hint, or flag. Challenges are grouped below by difficulty band.">
        CTF Arena
      </SectionTitle>
      <UnlockFilterBar total={CTFS.length} unlockedCount={unlockedCount} showAll={filter.showAll} setShowAll={filter.setShowAll} nextUnlockLabel={nextLocked ? lessonShort((CTF_REQUIRES[nextLocked.id] ?? [])[0] ?? "") : undefined} />
      <div className="flex flex-wrap gap-2" aria-label="Difficulty bands">
        {(["Easy", "Medium", "Hard", "Expert"] as const).map((d) => { const n = CTFS.filter((x) => x.difficulty === d).length; if (!n) return null; const col = d === "Easy" ? "var(--c-lab)" : d === "Medium" ? "var(--c-learn)" : d === "Hard" ? "var(--c-mission)" : "var(--c-intel)"; return <span key={d} className="rounded-full border px-3 py-1.5 text-[12px] font-bold text-[color:var(--text)]" style={{ borderColor: col, background: `color-mix(in srgb, ${col} 12%, var(--surface))` }}>{isBn ? `${d === "Easy" ? "সহজ" : d === "Medium" ? "মাঝারি" : d === "Hard" ? "কঠিন" : "বিশেষজ্ঞ"} স্তর · ${n}টি challenge` : `${d} band · ${n} challenge${n > 1 ? "s" : ""}`}</span>; })}
      </div>
      {[...CTFS].sort((a, b) => (["Easy", "Medium", "Hard", "Expert"].indexOf(a.difficulty) - ["Easy", "Medium", "Hard", "Expert"].indexOf(b.difficulty))).map((c) => {
        const solved = isDone(s, "ctf", c.id);
        const req = CTF_REQUIRES[c.id] ?? [];
        const unlocked = isUnlocked(s, req) || solved;
        if (!filter.showAll && !unlocked) return null;
        return (
          <Card key={c.id} accent={solved ? "#10B981" : "var(--c-ctf)"}>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg text-white ${solved ? "bg-emerald-600" : ""}`} style={solved ? undefined : { background: "var(--c-ctf)" }} aria-hidden="true">{solved ? "🏁" : "🚩"}</span>
              <h3 className="font-bold text-[color:var(--text)]">{itemTitle(s.profile.lang, c.id, c.title)}</h3>
              <Badge tone="accent">{c.category}</Badge><Badge>{c.difficulty}</Badge>
              {solved ? <Badge tone="ok">✓ {txI(s.profile.lang, "SOLVED", "সমাধান হয়েছে")} · {c.xp} XP</Badge> : <Badge>{c.xp} XP</Badge>}
            </div>
            <p className="mt-1 text-sm text-[color:var(--dim)]">{tx(c.description, CTF_BN[c.id]?.description)}</p>
            <p className="mt-1 text-sm text-[color:var(--dim)]"><span className="font-medium text-[color:var(--text)]">{txI(s.profile.lang, "Learning objective:", "শেখার লক্ষ্য:")}</span> {tx(c.objective, CTF_BN[c.id]?.objective)} · <span className="font-medium text-[color:var(--text)]">{txI(s.profile.lang, "Prerequisite:", "আগে যা লাগবে:")}</span> {tx(c.prereq, CTF_BN[c.id]?.prereq)}</p>
            {!unlocked ? <LockedNotice requires={req} goLesson={goLesson} teaches={tx(c.objective, CTF_BN[c.id]?.objective)} /> : (<>
            <CodeBlock code={c.artifact} label="challenge artifact (simulated)" />
            <CtfWhyPanel ctfId={c.id} />
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <label className="sr-only" htmlFor={`flag-${c.id}`}>Flag for {c.title}</label>
              <input id={`flag-${c.id}`} value={flags[c.id] ?? ""} disabled={solved} placeholder="CLAB{...}"
                onChange={(e) => setFlags((f) => ({ ...f, [c.id]: e.target.value }))}
                className="min-h-[44px] min-w-[220px] flex-1 rounded border border-[color:var(--border)] bg-[color:var(--surface2)] px-3 py-2 font-mono text-sm text-[color:var(--text)] disabled:opacity-50" />
              <button type="button" disabled={solved || !(flags[c.id] ?? "").trim()} className="min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
                onClick={async () => {
                  const h = await sha256Hex(flags[c.id] ?? "");
                  if (h === c.flagHash) { sfxSuccess(); completeItem("ctf", c.id, c.xp, 100, `CTF: ${c.title}`); setVerdicts((v) => ({ ...v, [c.id]: "correct" })); }
                  else { sfxError(); setVerdicts((v) => ({ ...v, [c.id]: "wrong" })); }
                }}>{txI(s.profile.lang, "Submit flag", "Flag জমা দাও")}</button>
              <button type="button" className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)]"
                onClick={() => setHints((h) => ({ ...h, [c.id]: !h[c.id] }))}>{hints[c.id] ? (txI(s.profile.lang, "Hide hint", "ইঙ্গিত লুকাও")) : (txI(s.profile.lang, "Hint", "ইঙ্গিত"))}</button>
              <button type="button" className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--text)]"
                onClick={() => { setFlags((f) => ({ ...f, [c.id]: "" })); setVerdicts((v) => ({ ...v, [c.id]: "" })); }}>{txI(s.profile.lang, "Reset", "আবার")}</button>
            </div>
            {hints[c.id] ? <p className="mt-2 rounded-lg bg-amber-950/30 p-3 text-sm text-amber-200">💡 {txI(s.profile.lang, "Hint: ", "ইঙ্গিত: ")}{tx(c.hint, CTF_BN[c.id]?.hint)}</p> : null}
            {verdicts[c.id] === "wrong" ? <p role="alert" className="cl-pop mt-2 rounded-lg bg-red-950/30 p-3 text-sm text-red-300">{txI(s.profile.lang, "✗ Incorrect flag — re-check the evidence artifact and the hint, then try again.", "✗ ভুল flag — প্রমাণ artifact আর ইঙ্গিত আবার দেখো, তারপর চেষ্টা করো।")}</p> : null}
            {solved ? <p role="status" className="cl-pop mt-2 rounded-lg border border-emerald-700 bg-emerald-950/40 p-3 text-sm leading-relaxed text-emerald-200">🏁 <strong>{txI(s.profile.lang, "Flag accepted — challenge solved!", "Flag গৃহীত হয়েছে — challenge সমাধান!")}</strong> {tx(c.explanation, CTF_BN[c.id]?.explanation)}</p> : null}
            </>)}
          </Card>
        );
      })}
    </div>
  );
}

function ProjectsView({ goLesson }: { goLesson: (id: string) => void }) {
  const s = useStore();
  const tx = (en: string, b?: string) => txI(s.profile.lang, en, b);
  const filter = useUnlockFilter();
  const unlockedCount = PROJECTS.filter((pr) => isUnlocked(s, PROJECT_REQUIRES[pr.id]) || isDone(s, "project", pr.id)).length;
  const nextLocked = PROJECTS.find((pr) => !isUnlocked(s, PROJECT_REQUIRES[pr.id]) && !isDone(s, "project", pr.id));
  return (
    <div className="cl-stagger space-y-4">
      <JourneyStrip nextLabel={nextLocked ? `Project ${nextLocked.code}: ${nextLocked.title}` : "keep building any open project"} />
      <SectionTitle eyebrow="Portfolio dossier · Step 8" orderEn={SECTION_ORDER.projects.en} orderBn={SECTION_ORDER.projects.bn} bn="প্রজেক্ট" bnSub="প্রতিটি project তার ভিত্তি-পাঠগুলো শেষ হলেই খোলে — ছোট থেকে বড়, ধাপে ধাপে। প্রতিটি project তোমার portfolio-র প্রমাণ: ধাপ, প্রমাণ আর report একসাথে রাখো।" sub="Each project opens when the lessons it builds on are complete — small foundations first, capstone work when you are ready for it. Each project is portfolio evidence: steps, evidence and a written report, kept together.">
        Projects
      </SectionTitle>
      <UnlockFilterBar total={PROJECTS.length} unlockedCount={unlockedCount} showAll={filter.showAll} setShowAll={filter.setShowAll} nextUnlockLabel={nextLocked ? lessonShort((PROJECT_REQUIRES[nextLocked.id] ?? [])[0] ?? "") : undefined} />
      {PROJECTS.map((p) => {
        const checked = s.projectSteps[p.id] ?? [];
        const all = checked.length >= p.steps.length;
        const done = isDone(s, "project", p.id);
        const req = PROJECT_REQUIRES[p.id] ?? [];
        const unlocked = isUnlocked(s, req) || done;
        if (!filter.showAll && !unlocked) return null;
        return (
          <Card key={p.id} variant="dossier" accent="var(--c-project)">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: "var(--c-project)" }} aria-hidden="true"><SectionIcon kind="projects" size={20} color="#fff" /></span>
              <h3 className="font-semibold text-[color:var(--text)]">Project {p.code} — {itemTitle(s.profile.lang, p.id, p.title)}</h3>
              {done ? <Badge tone="ok">Completed · {p.xp} XP</Badge> : <Badge>{p.xp} XP · {checked.length}/{p.steps.length} steps</Badge>}
            </div>
            <div className="mt-2 grid gap-3 text-sm text-[color:var(--dim)] md:grid-cols-2">
              <div><p className="font-medium text-[color:var(--text)]">{txI(s.profile.lang, "Objectives", "লক্ষ্য")}</p><ul className="mt-1 list-disc space-y-0.5 pl-5">{p.objectives.map((o, i) => <li key={o}>{tx(o, PROJECT_BN[p.id]?.objectives[i])}</li>)}</ul>
                <p className="mt-2 font-medium text-[color:var(--text)]">{txI(s.profile.lang, "Required skills", "দরকারি দক্ষতা")}</p><p>{p.skills.join(" · ")}</p>
                <p className="mt-2 font-medium text-[color:var(--text)]">{txI(s.profile.lang, "Starting environment", "শুরুর পরিবেশ")}</p><p>{tx(p.environment, PROJECT_BN[p.id]?.environment)}</p></div>
              <div><p className="font-medium text-[color:var(--text)]">{txI(s.profile.lang, "Evidence required", "দরকারি প্রমাণ")}</p><ul className="mt-1 list-disc space-y-0.5 pl-5">{p.evidence.map((o, i) => <li key={o}>{tx(o, PROJECT_BN[p.id]?.evidence[i])}</li>)}</ul>
                <p className="mt-2 font-medium text-[color:var(--text)]">{txI(s.profile.lang, "Rubric", "মূল্যায়ন মানদণ্ড")}</p><ul className="mt-1 list-disc space-y-0.5 pl-5">{p.rubric.map((o, i) => <li key={o}>{tx(o, PROJECT_BN[p.id]?.rubric[i])}</li>)}</ul>
                <p className="mt-2 font-medium text-[color:var(--text)]">{txI(s.profile.lang, "Remediation requirement", "সংশোধনের শর্ত")}</p><p>{tx(p.remediation, PROJECT_BN[p.id]?.remediation)}</p></div>
            </div>
            {!unlocked ? <LockedNotice requires={req} goLesson={goLesson} /> : (<>
            <div className="mt-3 space-y-1.5">
              {p.steps.map((step, i) => (
                <label key={i} className="flex min-h-[44px] cursor-pointer items-start gap-3 rounded border border-[color:var(--border)] px-3 py-2 text-sm">
                  <input type="checkbox" className="mt-1 accent-sky-500" checked={checked.includes(i)} onChange={() => toggleProjectStep(p.id, i)} />
                  <span className="text-[color:var(--text)]">{i + 1}. {tx(step, PROJECT_BN[p.id]?.steps[i])}</span>
                </label>
              ))}
            </div>
            <button type="button" disabled={!all || done} onClick={() => completeItem("project", p.id, p.xp, 100, `Project ${p.code}: ${p.title}`)}
              className="mt-3 min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-40">
              {done ? (txI(s.profile.lang, "Project complete", "Project সম্পূর্ণ")) : all ? (txI(s.profile.lang, "Mark project complete", "Project সম্পূর্ণ বলে চিহ্নিত করো")) : (txI(s.profile.lang, "Complete all steps to finish", "শেষ করতে সব ধাপ সম্পূর্ণ করো"))}
            </button>
            </>)}
          </Card>
        );
      })}
    </div>
  );
}

/* ================= Shell ================= */

type View = "dashboard" | "paths" | "courses" | "labs" | "terminal" | "universal" | "missions" | "ctf" | "projects" | "assessment" | "kb" | "intel" | "soc" | "pentest" | "attack" | "research" | "account" | "careers" | "analytics" | "settings" | "privacy";

const NAV: { id: View; label: string; group: string }[] = [
  { id: "dashboard", group: "Learn", label: "Dashboard" },
  { id: "paths", group: "Learn", label: "Learning Paths" },
  { id: "courses", group: "Learn", label: "Courses" },
  { id: "labs", group: "Practice — unlocks with your lessons", label: "Interactive Labs" },
  { id: "terminal", group: "Practice — unlocks with your lessons", label: "Cyber Terminal" },
  { id: "universal", group: "Practice — unlocks with your lessons", label: "Universal Playground" },
  { id: "missions", group: "Practice — unlocks with your lessons", label: "Missions" },
  { id: "ctf", group: "Practice — unlocks with your lessons", label: "CTF Arena" },
  { id: "projects", group: "Practice — unlocks with your lessons", label: "Projects" },
  { id: "assessment", group: "Practice — unlocks with your lessons", label: "Skill Assessment" },
  { id: "soc", group: "Practice — unlocks with your lessons", label: "SOC Training" },
  { id: "pentest", group: "Practice — unlocks with your lessons", label: "Pentest Workspace" },
  { id: "attack", group: "Practice — unlocks with your lessons", label: "Attack Track" },
  { id: "kb", group: "Reference — always open", label: "Knowledge Base" },
  { id: "intel", group: "Reference — always open", label: "Threat Intelligence" },
  { id: "research", group: "Reference — always open", label: "Research Workspace" },
  { id: "account", group: "Reference — always open", label: "Account Security" },
  { id: "careers", group: "Reference — always open", label: "Career Center" },
  { id: "analytics", group: "Reference — always open", label: "Progress & Analytics" },
  { id: "settings", group: "Reference — always open", label: "Settings" },
  { id: "privacy", group: "Reference — always open", label: "Privacy & Policy" },
];

export function App() {
  const s = useStore();
  // LOGIN-FIRST: no session, no app. The session snapshot is reactive —
  // sign-in renders the shell, sign-out (or an expired session) returns to
  // the auth screen, with no reload.
  const session = useSyncExternalStore(subscribe, getCfSessionSnapshot, getCfSessionSnapshot);
  const sync = useSyncExternalStore(subscribe, getSyncSnapshot, getSyncSnapshot);
  const sessionToken = session?.token ?? null;
  useEffect(() => {
    // Returning session: pull the account's state from D1 and merge it in.
    if (sessionToken) void cfRefreshFromServer();
  }, [sessionToken]);
  const [view, setView] = useState<View>("dashboard");
  const [openLessonId, setOpenLessonId] = useState<string | null>(null);
  const [openCpId, setOpenCpId] = useState<string | null>(null);
  const [openFinId, setOpenFinId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  // The MAIN pane is its own scroll container (the window itself never
  // scrolls — that was the "content cut off, no way to go down" bug): it
  // fills the viewport height, scrolls with a visible styled scrollbar, and
  // gets floating top/bottom controls on long pages.
  const mainScrollRef = useRef<HTMLElement | null>(null);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [canScrollMore, setCanScrollMore] = useState(false);
  const syncScrollBtns = () => {
    const el = mainScrollRef.current;
    if (!el) return;
    setScrolledDown(el.scrollTop > 400);
    setCanScrollMore(el.scrollTop + el.clientHeight < el.scrollHeight - 40);
  };
  useEffect(() => {
    mainScrollRef.current?.scrollTo({ top: 0 });
    const raf = requestAnimationFrame(syncScrollBtns);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, openLessonId, openCpId, openFinId]);

  const go = (v: View) => { sfxClick(); setView(v); setOpenLessonId(null); setOpenCpId(null); setOpenFinId(null); setMenuOpen(false); };
  const goLesson = (id: string) => {
    const idx = PATH.findIndex((n) => n.type === "lesson" && n.lesson.id === id);
    if (idx !== -1 && !nodeUnlocked(s, idx)) { setView("paths"); return; }
    sfxClick();
    setOpenLessonId(id); setOpenCpId(null); setOpenFinId(null); setView("courses");
  };
  const openNode = (n: PathNode) => {
    sfxClick();
    if (n.type === "lesson") { setOpenLessonId(n.lesson.id); setView("courses"); }
    else if (n.type === "checkpoint") { setOpenCpId(n.cp.id); setView("paths"); }
    else { setOpenFinId(n.fin.id); setView("paths"); }
  };

  const lesson = openLessonId ? ALL_LESSONS.find((l) => l.id === openLessonId) : undefined;
  const cp = openCpId ? ALL_CHECKPOINTS.find((c) => c.id === openCpId) : undefined;
  const fin = openFinId ? ALL_FINALS.find((f) => f.id === openFinId) : undefined;
  const xp = useMemo(() => totalXp(s), [s]);
  // "You are here" label for the phone header — phones have no sidebar, so
  // the header itself must say which section is open.
  const navHere = NAV.find((n) => n.id === view);
  const hereLabel = lesson
    ? txI(s.profile.lang, "Lesson", "পাঠ")
    : cp
      ? txI(s.profile.lang, "Checkpoint")
      : fin
        ? txI(s.profile.lang, "Level Final")
        : navLabel(s.profile.lang, view, navHere?.label ?? "");

  if (!session) return <AuthView />;

  const syncLabel = sync.state === "syncing"
    ? txI(s.profile.lang, "Saving…", "Saving হচ্ছে…")
    : sync.state === "synced"
      ? txI(s.profile.lang, "Synced — saved to your account", "Synced — account-এ save আছে")
      : sync.state === "offline"
        ? txI(s.profile.lang, "Offline — will sync when back online", "Offline — online হলেই sync হবে")
        : sync.state === "error"
          ? txI(s.profile.lang, "Sync problem — see Settings", "Sync-এ সমস্যা — Settings দেখো")
          : "";

  return (
    <div className="flex h-dvh flex-col overflow-hidden text-[color:var(--text)]">
      <div className="mx-auto flex min-h-0 w-full max-w-[1720px] flex-1">
        {/* Sidebar (desktop) — a strict flex column: fixed profile head,
            an independently scrolling nav in the middle, and a compact
            in-flow footer. Nothing is positioned over the nav, so no nav
            item can ever be covered, at any viewport height. */}
        <aside className="cl-sidebar hidden w-60 shrink-0 flex-col border-r border-[color:var(--border)] bg-[color:var(--surface)] px-3 pt-3 lg:flex" aria-label="Main navigation">
          <div className="cl-dots cl-profile-card mb-3 shrink-0 rounded-2xl border border-[color:var(--border)] p-3.5">
            <p className="flex items-center gap-2.5"><CyberLabLogo size={36} /><span className="min-w-0"><span className="cl-display block text-[17px] font-bold leading-tight">CyberLab</span><span className="block truncate text-[11px] opacity-85">{s.profile.displayName || "Learner"}{s.profile.username ? ` · @${s.profile.username}` : ""}</span></span></p>
            <p className="mt-2 text-xs opacity-95">{txf(s.profile.lang, "{xp} XP · {a}-day streak", "{xp} XP · {a} দিনের ধারাবাহিকতা", { xp, a: streakDays(s) })}</p>
            <p className="text-[11px] opacity-75">{syncLabel}</p>
            <div className="cl-profile-track mt-2 h-2 overflow-hidden rounded-full"><div className="cl-progress-anim h-full rounded-full bg-amber-300" style={{ width: `${Math.min(100, (xp % 500) / 5)}%` }} /></div>
            <p className="mt-1 text-[11px] opacity-85">{xp % 500} / 500 XP to next milestone</p>
          </div>
          <nav className="cl-scroll-thin cl-sidebar-nav space-y-0.5 pb-2" aria-label="Sections by group">
            {NAV.map((n, i) => (
              <div key={n.id}>
                {(i === 0 || NAV[i - 1]?.group !== n.group) ? <p className="px-3 pb-1 pt-3 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[color:var(--dim)]">{n.group}</p> : null}
                <button type="button" onClick={() => go(n.id)} aria-current={view === n.id ? "page" : undefined}
                  className={`cl-nav-item flex min-h-[38px] w-full items-center gap-2 rounded-xl px-2.5 py-1.5 text-left text-[13px] ${view === n.id ? "font-semibold text-white shadow" : "text-[color:var(--dim)] hover:bg-[color:var(--surface2)] hover:text-[color:var(--text)]"}`}
                  style={view === n.id ? { background: `linear-gradient(90deg, ${trackForView(n.id)}, color-mix(in srgb, ${trackForView(n.id)} 55%, var(--accent2)))`, color: "#fff" } : undefined}>
                  <SectionIcon kind={n.id} size={17} color={view === n.id ? "#fff" : trackForView(n.id)} />
                  <span className="min-w-0 flex-1 truncate">{navLabel(s.profile.lang, n.id, n.label)}</span>
                  {n.id === "labs" ? <span className="float-right text-[11px] opacity-80">{LABS.filter((l) => isUnlocked(s, LAB_REQUIRES[l.id])).length}/{LABS.length} open</span> : null}
                  {n.id === "ctf" ? <span className="float-right text-[11px] opacity-80">{CTFS.filter((c) => isUnlocked(s, CTF_REQUIRES[c.id])).length}/{CTFS.length} open</span> : null}
                  {n.id === "missions" ? <span className="float-right text-[11px] opacity-80">{MISSIONS.filter((m) => isUnlocked(s, MISSION_REQUIRES[m.id])).length}/{MISSIONS.length} open</span> : null}
                </button>
              </div>
            ))}
          </nav>
          <div className="cl-sidebar-foot">
            <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5">
              <LangToggle />
              <ThemeToggle />
            </div>
            <button type="button" onClick={() => void cfSignOut()}
              className="mt-2 min-h-[38px] w-full rounded-lg border border-red-900 px-3 py-1.5 text-[13px] font-semibold text-red-300 hover:bg-red-950/40">
              {txI(s.profile.lang, "Log out")} · @{session.username}
            </button>
          </div>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          {/* Mobile header + nav */}
          <header className="cl-mobile-header sticky top-0 z-20 border-b border-[color:var(--border)] bg-[color:var(--surface)] px-3 pb-2 lg:hidden">
            <div className="flex items-center gap-2">
              <CyberLabLogo size={30} />
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block truncate text-sm font-bold text-[color:var(--text)]">CyberLab</span>
                <span className="block truncate text-[11px] text-[color:var(--dim)]">{hereLabel} · {xp} XP<span className="hidden min-[430px]:inline"> · {txf(s.profile.lang, "{a}-day streak", "{a} দিনের ধারাবাহিকতা", { a: streakDays(s) })}</span></span>
              </span>
              <LangToggle compact />
              <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}
                className="min-h-[44px] shrink-0 rounded-lg border border-[color:var(--border)] px-3 py-2 text-sm font-semibold text-[color:var(--text)]">☰ {txI(s.profile.lang, "Sections", "বিভাগ")}</button>
            </div>
            {menuOpen ? (
              <nav className="mt-2 max-h-[72dvh] overflow-y-auto rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-2 shadow-lg" aria-label="Main navigation">
                <div className="flex items-center justify-between gap-2 px-2 pb-1 pt-1">
                  <span className="text-xs font-semibold text-[color:var(--dim)]">{txI(s.profile.lang, "Theme", "থিম")}</span>
                  <ThemeToggle />
                </div>
                {NAV.map((n, i) => (
                  <div key={n.id}>
                    {(i === 0 || NAV[i - 1]?.group !== n.group) ? <p className="px-2 pb-1 pt-3 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[color:var(--dim)]">{n.group}</p> : null}
                    <button type="button" onClick={() => go(n.id)} aria-current={view === n.id ? "page" : undefined}
                      className={`cl-nav-item flex min-h-[48px] w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm ${view === n.id ? "font-semibold text-white shadow" : "text-[color:var(--text)] hover:bg-[color:var(--surface2)]"}`}
                      style={view === n.id ? { background: `linear-gradient(90deg, ${trackForView(n.id)}, color-mix(in srgb, ${trackForView(n.id)} 55%, var(--accent2)))`, color: "#fff" } : undefined}>
                      <SectionIcon kind={n.id} size={18} color={view === n.id ? "#fff" : trackForView(n.id)} />
                      <span className="min-w-0 flex-1 truncate">{navLabel(s.profile.lang, n.id, n.label)}</span>
                      {n.id === "labs" ? <span className="text-[11px] opacity-80">{LABS.filter((l) => isUnlocked(s, LAB_REQUIRES[l.id])).length}/{LABS.length} open</span> : null}
                      {n.id === "ctf" ? <span className="text-[11px] opacity-80">{CTFS.filter((c) => isUnlocked(s, CTF_REQUIRES[c.id])).length}/{CTFS.length} open</span> : null}
                      {n.id === "missions" ? <span className="text-[11px] opacity-80">{MISSIONS.filter((m) => isUnlocked(s, MISSION_REQUIRES[m.id])).length}/{MISSIONS.length} open</span> : null}
                    </button>
                  </div>
                ))}
                <div className="px-2 pb-1 pt-3">
                  <button type="button" onClick={() => { setMenuOpen(false); void cfSignOut(); }}
                    className="min-h-[44px] w-full rounded-xl border border-red-900 px-3 py-2 text-sm font-semibold text-red-300">
                    Log out · @{session.username}
                  </button>
                </div>
              </nav>
            ) : null}
          </header>

          <main ref={mainScrollRef} tabIndex={0} onScroll={syncScrollBtns} aria-label="Main content — scrollable"
            className="cl-main-scroll min-h-0 w-full flex-1 overflow-y-auto">
            <div key={`${view}|${openLessonId ?? ""}|${openCpId ?? ""}|${openFinId ?? ""}`} className="cl-view-in mx-auto w-full max-w-[1440px] px-3 py-4 pb-28 sm:px-5 sm:py-6 lg:px-8 lg:pb-20">
            {/* EDITOR ISOLATION (bug fix, 15 Nov 2026): these views are keyed
                by the open item's id so navigating item → item REMOUNTS the
                whole subtree. Without the key React reused the mounted view,
                and every editor / terminal / quiz inside kept the previous
                item's state — code typed or deleted in one lesson's
                playground showed up in the next lesson's playground. */}
            {lesson ? (
              lesson.level === 4 ? (
                <ProgLessonView key={lesson.id} lesson={lesson} back={() => { setOpenLessonId(null); setView("paths"); }} goLesson={goLesson} goKb={() => go("kb")} goPractice={(v) => go(v as View)} />
              ) : (
                <LessonView key={lesson.id} lesson={lesson} back={() => { setOpenLessonId(null); setView("paths"); }} goLesson={goLesson} goKb={() => go("kb")} goPractice={(v) => go(v as View)} />
              )
            ) : cp ? (
              <CheckpointView key={cp.id} cp={cp} back={() => setOpenCpId(null)} goLesson={goLesson} />
            ) : fin ? (
              <FinalView key={fin.id} fin={fin} back={() => setOpenFinId(null)} />
            ) : view === "dashboard" ? (
              <Dashboard go={go} openNode={openNode} />
            ) : view === "paths" ? (
              <>
                <PathsView openNode={openNode} />
                <div className="mt-4">
                  <button type="button" onClick={() => go("account")} className="min-h-[44px] rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--accent)]">Level 11 track → Account Security (defensive)</button>
                </div>
              </>
            ) : view === "courses" ? (
              <CoursesView openLesson={(l) => setOpenLessonId(l.id)} goPaths={() => go("paths")} />
            ) : view === "labs" ? (
              <LabsView goLesson={goLesson} />
            ) : view === "universal" ? (
              <><SectionTitle eyebrow="Code bench · free practice" bn="ইউনিভার্সাল প্লেগ্রাউন্ড" bnSub="প্রায় যেকোনো programming ভাষা বেছে নাও, নিজের code লেখো, আসলেই চালাও। JavaScript ও Python browser-এ চলে; বাকি ভাষা Judge0-তে চলে (PowerShell ও Julia Piston-এ চেষ্টা করা হয়) — কোথায় চলছে তা প্রতিটি ভাষার পাশে লেখা থাকে।" sub="Pick almost any programming language, write your own code, and really run it. JavaScript and Python run in your browser; the rest run on Judge0 (PowerShell and Julia are attempted on Piston) — where the code runs is labelled next to every language.">Universal Playground</SectionTitle>
                <UniversalPlayground /></>
            ) : view === "terminal" ? (
              <><JourneyStrip nextLabel="free practice below; guided exercises unlock with their lessons" /><SectionTitle eyebrow="Command bench · Step 3" orderEn={SECTION_ORDER.terminal.en} orderBn={SECTION_ORDER.terminal.bn} bn="সাইবার টার্মিনাল" bnSub="Terminal সবসময় খোলা — এটি অনুশীলনের টুল। তবে guided exercise গুলো তাদের পাঠ শেষ হলেই খোলে। Lab-এর পর এখানে এসে একই command নিজে হাতে লেখো।" sub="The terminal itself is always open — it is a practice tool, not a test. Its guided exercises unlock with their lessons. Come here after the Lab and type the same commands yourself. Every command is a real Linux/CMD/PowerShell command — only the machine is simulated.">Cyber Terminal</SectionTitle>
                <Terminal awardXp={(id, label) => completeItem("terminal", id, 15, 100, label)} goLesson={goLesson} /></>
            ) : view === "missions" ? (
              <MissionsView goLesson={goLesson} />
            ) : view === "ctf" ? (
              <CtfView goLesson={goLesson} />
            ) : view === "projects" ? (
              <ProjectsView goLesson={goLesson} />
            ) : view === "assessment" ? (
              <AssessmentView goLesson={goLesson} />
            ) : view === "kb" ? (
              <KnowledgeBaseView goLesson={goLesson} />
            ) : view === "intel" ? (
              <IntelView />
            ) : view === "soc" ? (
              <SocView goLesson={goLesson} />
            ) : view === "pentest" ? (
              <PentestView goLesson={goLesson} />
            ) : view === "attack" ? (
              <AttackTrackView goLesson={goLesson} />
            ) : view === "research" ? (
              <ResearchView />
            ) : view === "account" ? (
              <AccountSecurityView />
            ) : view === "careers" ? (
              <CareersView />
            ) : view === "analytics" ? (
              <AnalyticsView goLesson={goLesson} />
            ) : view === "privacy" ? (
              <PrivacyView />
            ) : (
              <SettingsView goPrivacy={() => go("privacy")} />
            )}
            {/* App footer — Privacy & Policy + copyright, on every screen
                (dashboard, lessons, games/CTF, settings…). */}
            <footer className="mt-10 border-t border-[color:var(--border)] pt-4 text-center">
              <button type="button" onClick={() => go("privacy")}
                className="cl-lift min-h-[36px] px-2 text-[12px] font-semibold text-[color:var(--accent)] underline-offset-2 hover:underline">
                {txI(s.profile.lang, "Privacy & Policy", "গোপনীয়তা নীতি")}
              </button>
              <CopyrightLine className="mt-0.5" />
            </footer>
            </div>
          </main>

          {/* Floating scroll controls — an explicit way down/up on long pages */}
          {canScrollMore || scrolledDown ? (
            <div className="fixed bottom-20 right-3 z-40 flex flex-col items-end gap-2 lg:bottom-6 lg:right-6">
              {canScrollMore ? (
                <button type="button"
                  onClick={() => { const el = mainScrollRef.current; if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" }); }}
                  aria-label={txI(s.profile.lang, "Scroll to the bottom of this page", "একদম নিচে যাও")}
                  className="flex min-h-[44px] items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-2 text-[13px] font-bold text-[color:var(--text)] shadow-lg">
                  <span aria-hidden="true">↓</span>{txI(s.profile.lang, "Bottom", "নিচে")}
                </button>
              ) : null}
              {scrolledDown ? (
                <button type="button"
                  onClick={() => mainScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
                  aria-label={txI(s.profile.lang, "Back to the top of this page", "একদম উপরে যাও")}
                  className="flex min-h-[44px] items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-2 text-[13px] font-bold text-[color:var(--text)] shadow-lg">
                  <span aria-hidden="true">↑</span>{txI(s.profile.lang, "Top", "উপরে")}
                </button>
              ) : null}
            </div>
          ) : null}

          {/* Mobile bottom nav — thumb-reach primary destinations */}
          <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[color:var(--border)] bg-[color:var(--surface)] lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} aria-label="Quick navigation">
            <div className="grid grid-cols-5">
              {([
                { id: "dashboard" as View, icon: "dashboard" as const, en: "Home", bn: "হোম" },
                { id: "paths" as View, icon: "paths" as const, en: "Path", bn: "পথ" },
                { id: "labs" as View, icon: "labs" as const, en: "Labs", bn: "ল্যাব" },
                { id: "ctf" as View, icon: "ctf" as const, en: "CTF", bn: "CTF" },
              ]).map((b) => (
                <button key={b.id} type="button" onClick={() => go(b.id)} aria-current={view === b.id ? "page" : undefined}
                  className={`flex min-h-[56px] flex-col items-center justify-center gap-0.5 px-1 py-1.5 text-[11px] font-semibold ${view === b.id ? "text-[color:var(--text)]" : "text-[color:var(--dim)]"}`}
                  style={view === b.id ? { boxShadow: `inset 0 3px 0 ${trackForView(b.id)}` } : undefined}>
                  <SectionIcon kind={b.icon} size={20} color={view === b.id ? trackForView(b.id) : "var(--dim)"} />
                  {txI(s.profile.lang, b.en, b.bn)}
                </button>
              ))}
              <button type="button" aria-label={txI(s.profile.lang, "Open all sections", "সব বিভাগ খোলো")} aria-expanded={menuOpen}
                onClick={() => { if (menuOpen) { setMenuOpen(false); } else { setMenuOpen(true); mainScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" }); } }}
                className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 px-1 py-1.5 text-[11px] font-semibold text-[color:var(--dim)]">
                <span className="text-[19px] leading-none" aria-hidden="true">☰</span>
                {txI(s.profile.lang, "Sections", "বিভাগ")}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

