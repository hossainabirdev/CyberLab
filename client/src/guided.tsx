// Guided-flow UI pieces: journey strip, locked notice, unlock filter,
// compact lesson flow strip and unlock maps. Used by every practice section
// so gating, order and guidance look and behave identically in all six
// languages (strings resolve through i18n.ts; Bangla keeps its original
// lines, English is the source, es/de/zh/hi use their packs).
import { useState } from "react";
import { useStore, isDone } from "./ui";
import { currentLesson, isUnlocked, lessonShort, missingLessons, relatedForLesson, LAB_REQUIRES, MISSION_REQUIRES, CTF_REQUIRES, PROJECT_REQUIRES } from "./gating";
import { tx, txf, uiStr, instr, lessonTitle, itemTitle } from "./i18n";
import { SectionIcon } from "./Visuals";
import { PROJECTS } from "./catalog2";
import { ALL_LABS as LABS, ALL_MISSIONS as MISSIONS, ALL_CTFS as CTFS } from "./catalogAll";
import { TERMINAL_REQUIRES } from "./gating";

export function useUnlockFilter() {
  const [showAll, setShowAll] = useState(false);
  return { showAll, setShowAll };
}

export function JourneyStrip({ nextLabel }: { nextLabel?: string }) {
  const s = useStore();
  const lang = s.profile.lang;
  const cur = currentLesson(s);
  if (!cur) {
    return (
      <div className="cl-fade mb-4 flex flex-wrap items-center gap-2 rounded-xl border border-emerald-700/50 bg-[color:var(--surface)] px-3.5 py-2.5 text-sm">
        <span aria-hidden="true">🏁</span>
        <span className="text-[color:var(--text)]">{tx(lang, "All published lessons complete — practice and revision stay open.", "প্রকাশিত সব পাঠ শেষ — এখন অনুশীলন আর revision-এর পালা।")}</span>
      </div>
    );
  }
  return (
    <div className="cl-fade mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-2.5 text-sm shadow-sm" role="status">
      <span className="font-semibold text-[color:var(--accent)]">{uiStr(lang, "youAreHere", "You are here:")}</span>
      <span className="text-[color:var(--text)]">Level {cur.level} · {lessonTitle(lang, cur.id, cur.title)}</span>
      {nextLabel ? <span className="text-[color:var(--dim)]">→ {uiStr(lang, "journeyNext", "next")}: {nextLabel}</span> : null}
    </div>
  );
}

export function LockedNotice({ requires, goLesson, teaches }: { requires: string[]; goLesson: (id: string) => void; teaches?: string }) {
  const s = useStore();
  const lang = s.profile.lang;
  const missing = missingLessons(s, requires);
  const first = missing[0];
  if (!first) return null;
  return (
    <div className="mt-3 rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--surface2)] p-3.5">
      <p className="flex items-center gap-2 text-sm font-semibold text-[color:var(--text)]">
        <SectionIcon kind="lock" size={16} />
        {tx(lang, "Locked for now", "এটি এখনো বন্ধ আছে")}
      </p>
      {teaches ? <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]"><span className="font-medium text-[color:var(--text)]">{tx(lang, "What this teaches: ", "এখানে যা শিখবে: ")}</span>{teaches}</p> : null}
      <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]">
        <span className="font-medium text-[color:var(--text)]">{instr(lang, "requiresLabel", "Requires: ")}</span>
        {requires.map((r) => lessonShort(r)).join(" · ")}
      </p>
      <p className="mt-0.5 text-sm leading-relaxed text-[color:var(--dim)]">
        {tx(lang, "Unlocked by completing: ", "এই পাঠটি শেষ করলেই এটি নিজে থেকে খুলে যাবে: ")}
        <strong className="text-[color:var(--text)]">{lessonShort(first)}</strong>
        {missing.length > 1 ? <span> {txf(lang, "(+{a} more lessons)", "আরও {a}টি পাঠ বাকি।", { a: missing.length - 1 })}</span> : null}
      </p>
      <button type="button" onClick={() => goLesson(first)} className="cl-btn mt-2.5 min-h-[42px] px-4 py-2 text-sm font-semibold text-white" style={{ background: "var(--accent2)" }}>
        {uiStr(lang, "goToLesson", "Go to that lesson")} →
      </button>
    </div>
  );
}

/* ===== Compact one-line lesson flow strip (v28) ===== */
export function LessonFlowStrip() {
  const s = useStore();
  const lang = s.profile.lang;
  return (
    <p aria-label={tx(lang, "Lesson flow", "পাঠের ধারা")} className="mt-3 text-[13px] leading-snug text-[color:var(--dim)]">
      {tx(lang, "Read → Playground → Lab → Quiz 70% → Checkpoint", "পাঠ → Playground → Lab → Quiz ৭০% → Checkpoint")}
    </p>
  );
}

/* ===== "Unlocks after this lesson" panel ===== */
export function UnlocksPanel({ lessonId, nextLabel, goPractice }: { lessonId: string; nextLabel?: string; goPractice?: (kind: string) => void }) {
  const s = useStore();
  const lang = s.profile.lang;
  const done = isDone(s, "lesson", lessonId);
  const rel = relatedForLesson(lessonId);
  const nameFor = (kind: string, id: string) => {
    const en = kind === "Lab" ? LABS.find((x) => x.id === id)?.title : kind === "Mission" ? MISSIONS.find((x) => x.id === id)?.title : kind === "CTF" ? CTFS.find((x) => x.id === id)?.title : kind === "Project" ? PROJECTS.find((x) => x.id === id)?.title : id;
    return itemTitle(lang, id, en ?? id);
  };
  const viewFor = (kind: string) => kind === "Lab" ? "labs" : kind === "Mission" ? "missions" : kind === "CTF" ? "ctf" : kind === "Project" ? "projects" : kind === "Skill Assessment" ? "assessment" : "soc";
  const termEx = Object.entries(TERMINAL_REQUIRES).filter(([, r]) => r.includes(lessonId));
  return (
    <section aria-label={instr(lang, "unlocksTitle", "Unlocks after this lesson")} className="mt-6 overflow-hidden rounded-2xl border-2 p-4 sm:p-5" style={{ borderColor: "color-mix(in srgb, var(--c-lab) 45%, var(--border))", background: "linear-gradient(120deg, color-mix(in srgb, var(--c-lab) 10%, var(--surface)), var(--surface) 65%)" }}>
      <h3 className="flex items-center gap-2 text-base font-bold text-[color:var(--text)]"><SectionIcon kind={done ? "unlock" : "lock"} size={19} />{instr(lang, "unlocksTitle", "Unlocks after this lesson")}</h3>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {nextLabel ? <li className="flex items-center gap-2.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5 text-sm"><SectionIcon kind="courses" size={18} /><span className="min-w-0"><span className="block font-semibold leading-snug text-[color:var(--text)]">{tx(lang, "Next lesson", "পরের পাঠ")}: {nextLabel}</span><span className="block text-xs text-[color:var(--dim)]">{done ? tx(lang, "Unlocked ✓", "খুলেছে ✓") : tx(lang, "Unlocks when this lesson completes", "এই পাঠ শেষ হলেই খুলবে")}</span></span></li> : null}
        {termEx.map(([exId]) => <li key={exId} className="flex items-center gap-2.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5 text-sm"><SectionIcon kind="terminal" size={18} /><span><span className="block font-semibold leading-snug text-[color:var(--text)]">Terminal Exercise {exId.replace("ex", "")}</span><span className="block text-xs text-[color:var(--dim)]">{tx(lang, "Step 3 — after the Lab", "ধাপ ৩ — Lab-এর পরে")}</span></span>{done && goPractice ? <button type="button" onClick={() => goPractice("terminal")} className="ml-auto min-h-[36px] shrink-0 rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">{tx(lang, "Open", "খোলো")}</button> : null}</li>)}
        {rel.map((r) => (
          <li key={r.kind + r.id} className="flex items-center gap-2.5 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5 text-sm">
            <SectionIcon kind={r.kind === "Lab" ? "labs" : r.kind === "Mission" ? "missions" : r.kind === "CTF" ? "ctf" : r.kind === "Project" ? "projects" : r.kind === "Skill Assessment" ? "assessment" : "soc"} size={18} />
            <span className="min-w-0"><span className="block font-semibold leading-snug text-[color:var(--text)]">{r.kind}: {nameFor(r.kind, r.id)}</span><span className="block text-xs text-[color:var(--dim)]">{done ? tx(lang, "Unlocked ✓ — ready now", "খুলেছে ✓ — এখন করা যাবে") : tx(lang, "Locked until this lesson completes", "এই পাঠ শেষ হলেই খুলবে")}</span></span>
            {done && goPractice ? <button type="button" onClick={() => goPractice(viewFor(r.kind))} className="ml-auto min-h-[36px] shrink-0 rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--accent)]">{tx(lang, "Open", "খোলো")}</button> : null}
          </li>
        ))}
        {!rel.length && !termEx.length && !nextLabel ? <li className="text-sm text-[color:var(--dim)]">{tx(lang, "This lesson's own lab and mission live inside the lesson; the next lesson opens in path order.", "এই পাঠের নিজস্ব lab/mission পাঠের ভেতরেই আছে; পরের পাঠ ধারাতেই খুলবে।")}</li> : null}
      </ul>
    </section>
  );
}

/* ===== Level unlock map (shown on every level in Learning Paths) ===== */
export function LevelUnlockMap({ level, nextLevelTitle }: { level: number; nextLevelTitle?: string }) {
  const s = useStore();
  const lang = s.profile.lang;
  const inLevel = (map: Record<string, string[]>) => Object.keys(map).filter((id) => {
    const reqs = map[id] ?? [];
    return reqs.some((r) => r.startsWith(`l${level}-`) || r.startsWith(`l${level}_`));
  });
  const titleOf = (kind: "lab" | "mission" | "ctf" | "project", id: string) => {
    const en = kind === "lab" ? LABS.find((x) => x.id === id)?.title : kind === "mission" ? MISSIONS.find((x) => x.id === id)?.title : kind === "ctf" ? CTFS.find((x) => x.id === id)?.title : PROJECTS.find((x) => x.id === id)?.title;
    return itemTitle(lang, id, en ?? id);
  };
  const labs = inLevel(LAB_REQUIRES).map((id) => titleOf("lab", id));
  const missions = inLevel(MISSION_REQUIRES).map((id) => titleOf("mission", id));
  const ctfs = inLevel(CTF_REQUIRES).map((id) => titleOf("ctf", id));
  const projects = inLevel(PROJECT_REQUIRES).map((id) => titleOf("project", id));
  const rows = [
    ...(nextLevelTitle ? [{ k: "Level", v: `Level ${level + 1} — ${nextLevelTitle} + its first lesson` }] : []),
    ...labs.map((v) => ({ k: "Lab", v })), ...missions.map((v) => ({ k: "Mission", v })),
    ...ctfs.map((v) => ({ k: "CTF", v })), ...projects.map((v) => ({ k: "Project", v })),
  ];
  if (!rows.length) return null;
  const mapTitle = lang === "en" ? `Level ${level} unlock map` : instr(lang, "levelUnlocksTitle", `Level ${level} unlock map`);
  return (
    <div className="mt-2 rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-3">
      <p className="text-[13px] font-bold text-[color:var(--text)]">🗺️ {mapTitle} <span className="font-normal text-[color:var(--dim)]">— {tx(lang, "completing this level's lessons makes these available, each right after its own lesson", "এই level-এর পাঠগুলো শেষ করলে এগুলো পাওয়া যাবে")}</span></p>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {rows.map((r, i) => <span key={i} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface2)] px-2.5 py-1 text-[12px] text-[color:var(--text)]"><strong>{r.k}:</strong> {r.v}</span>)}
      </div>
    </div>
  );
}


export function UnlockFilterBar({ total, unlockedCount, showAll, setShowAll, nextUnlockLabel }: {
  total: number; unlockedCount: number; showAll: boolean; setShowAll: (v: boolean) => void; nextUnlockLabel?: string;
}) {
  const s = useStore();
  const lang = s.profile.lang;
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3.5 py-2.5">
      <span className="text-sm font-medium text-[color:var(--text)]">
        {txf(lang, "Unlocked {a} of {b}", "খোলা আছে {a}টি, মোট {b}টি", { a: unlockedCount, b: total })}
        {nextUnlockLabel && unlockedCount < total ? <span className="text-[color:var(--dim)]"> · {tx(lang, "next unlocks after ", "পরেরটি খুলবে: ")}{nextUnlockLabel}</span> : null}
      </span>
      <div className="ml-auto flex gap-1" role="group" aria-label={tx(lang, "What to show", "কী দেখাবে")}>
        <button type="button" aria-pressed={!showAll} onClick={() => setShowAll(false)} className={`min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-semibold ${!showAll ? "bg-[color:var(--accent2)] text-white" : "border border-[color:var(--border)] text-[color:var(--dim)]"}`}>
          {uiStr(lang, "unlockedOnly", "Unlocked only (recommended)")}
        </button>
        <button type="button" aria-pressed={showAll} onClick={() => setShowAll(true)} className={`min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-semibold ${showAll ? "bg-[color:var(--accent2)] text-white" : "border border-[color:var(--border)] text-[color:var(--dim)]"}`}>
          {uiStr(lang, "showAll", "Show all")}
        </button>
      </div>
      {!showAll && unlockedCount === 0 ? (
        <p className="w-full text-[13px] leading-relaxed text-[color:var(--dim)]">{tx(lang, "Nothing here is unlocked yet — work through Learning Paths in order and these open one by one. One step at a time is the design, not a delay.", "এখনো এখানকার কিছুই খোলেনি — Learning Paths-এ গিয়ে ধারাবাহিকভাবে পাঠ শেষ করলেই এগুলো একে একে খুলবে। তাড়াহুড়ো নয়, একটার পর একটা।")}</p>
      ) : null}
    </div>
  );
}

export { isUnlocked };
