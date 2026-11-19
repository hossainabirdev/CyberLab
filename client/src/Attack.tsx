// Attack Track (Red Team / Offensive) — parallel track, NOT part of the
// Level 0–22 path chain. Every lesson/lab names its AUTHORIZED target
// (own localhost training app, own lab VMs, own lab hashes, own AD lab,
// consented simulation) and is gated by named prerequisite lessons from
// the main catalog + serial order inside the track. Teaching style is
// task-based: intro (learn + do), eight numbered tasks, hands-on code,
// a check after the tasks (quiz ≥70% + practical), and a "what you can
// do now" close — the same completion standard as every CyberLab lesson.
import { useEffect, useState } from "react";
import { tx as txI } from "./i18n";
import { Badge, Card, CodeBlock, PracticalView, Quiz, SectionTitle, isDone, useStore } from "./ui";
import { completeItem } from "./store";
import { isUnlocked, lessonShort, missingLessons } from "./gating";
import { CodePlayground } from "./Playground";
import { LabTryBox } from "./LabTry";
import { ATTACK_LABS, ATTACK_LESSONS, type AtkLab, type AtkLesson, type AtkText } from "./attack-data";

const ACCENT = "var(--c-ctf)";

function useTx() {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  return { s, isBn, t: (x: AtkText) => txI(s.profile.lang, x.en, x.bn) };
}

export function attackLessonUnlocked(s: ReturnType<typeof useStore>, idx: number): boolean {
  const l = ATTACK_LESSONS[idx]!;
  if (!isUnlocked(s, l.requires)) return false;
  if (idx > 0 && !isDone(s, "lesson", ATTACK_LESSONS[idx - 1]!.id)) return false;
  return true;
}
export function attackLockReason(s: ReturnType<typeof useStore>, idx: number, isBn: boolean): string {
  const l = ATTACK_LESSONS[idx]!;
  const miss = missingLessons(s, l.requires);
  const parts: string[] = [];
  if (idx > 0 && !isDone(s, "lesson", ATTACK_LESSONS[idx - 1]!.id)) {
    parts.push(isBn ? `আগের attack lesson: ${ATTACK_LESSONS[idx - 1]!.bnTitle}` : `Previous attack lesson: ${ATTACK_LESSONS[idx - 1]!.title}`);
  }
  for (const m of miss) parts.push(lessonShort(m));
  return parts.join(" · ");
}

export function AttackTrackView({ goLesson }: { goLesson: (id: string) => void }) {
  const { s, isBn, t } = useTx();
  const [openId, setOpenId] = useState<string | null>(null);
  const [openLabId, setOpenLabId] = useState<string | null>(null);
  const openLesson = ATTACK_LESSONS.find((l) => l.id === openId);
  const openLab = ATTACK_LABS.find((l) => l.id === openLabId);
  if (openLesson) {
    const idx = ATTACK_LESSONS.findIndex((l) => l.id === openLesson.id);
    return <AttackLessonView lesson={openLesson} unlocked={attackLessonUnlocked(s, idx)} back={() => setOpenId(null)} goLesson={goLesson} />;
  }
  if (openLab) return <AttackLabView lab={openLab} back={() => setOpenLabId(null)} />;
  const doneCount = ATTACK_LESSONS.filter((l) => isDone(s, "lesson", l.id)).length;
  return (
    <div>
      <SectionTitle eyebrow="Red Team · Offensive — authorized lab targets only" bn="অ্যাটাক ট্র্যাক" bnSub="Red team / offensive দক্ষতা — শুধু অনুমোদিত lab target-এ: তোমার নিজের localhost training app, নিজের lab VM, নিজের lab hash, নিজের AD lab। প্রতিটি lesson তার target-এর নাম দেয়; আসল account বা আসল system কখনোই target নয়।" sub="Red team / offensive skills — on authorized lab targets only: your own localhost training app, your own lab VMs, your own lab hashes, your own AD lab. Every lesson names its target; real accounts and real systems are never the target.">
        {isBn ? "অ্যাটাক ট্র্যাক" : "Attack Track"}
      </SectionTitle>
      <p className="cl-callout cl-callout-warn mb-4 text-sm leading-relaxed text-[color:var(--dim)]">
        <strong className="cl-callout-title">{isBn ? "নিয়ম — প্রতিটি lesson-এ প্রযোজ্য: " : "The rule — it governs every lesson here: "}</strong>
        {isBn
          ? "Attack skill শেখা হয় lab target-এ। অনুমোদনহীনভাবে আসল Facebook/Instagram/Google/bank account দখল, আসল মানুষের credential চুরি, বা আসল system-এ unauthorized access — এগুলো এই track-এ শেখানো হয় না, কারণ এগুলো পেশা নয়, অপরাধ। একই skill-এর পেশাদার পথ হলো: নিজের lab, আর bug bounty-তে test account (Level 11 ও 22)।"
          : "Attack skills are learned on lab targets. Taking over real Facebook/Instagram/Google/bank accounts without authorization, stealing real people's credentials, or unauthorized access to real systems are NOT taught in this track — they are not a profession, they are crimes. The professional path for the same skills is: your own lab, and bug bounty with test accounts (Levels 11 and 22)."}
      </p>
      <p className="mb-3 text-sm text-[color:var(--dim)]">{isBn ? `সম্পূর্ণ: ${doneCount}/${ATTACK_LESSONS.length} টি attack lesson। ক্রম serial — প্রতিটি lesson তার prerequisite lesson গুলো আর আগের attack lesson শেষ হলেই খোলে।` : `Completed: ${doneCount}/${ATTACK_LESSONS.length} attack lessons. The order is serial — each lesson opens when its prerequisite lessons and the previous attack lesson are complete.`}</p>
      <div className="space-y-3">
        {ATTACK_LESSONS.map((l, i) => {
          const done = isDone(s, "lesson", l.id);
          const unlocked = attackLessonUnlocked(s, i);
          return (
            <Card key={l.id} accent={ACCENT} className={unlocked || done ? "" : "cl-locked"}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: ACCENT }}>{isBn ? `Attack lesson ${i + 1}` : `Attack lesson ${i + 1}`} · ~{l.minutes} min · {l.xp} XP</p>
                  <h3 className="mt-0.5 text-base font-semibold text-[color:var(--text)]">{isBn ? l.bnTitle : l.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]">{t(l.intro)}</p>
                  {!unlocked && !done ? <p className="mt-1.5 text-[13px] text-[color:var(--dim)]">🔒 {isBn ? "খুলতে লাগবে: " : "Unlocks after: "}{attackLockReason(s, i, isBn)}</p> : null}
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  {done ? <Badge tone="ok">✓ {isBn ? "সম্পূর্ণ" : "Completed"}</Badge> : unlocked ? <Badge tone="warn">{isBn ? "খোলা আছে" : "Unlocked"}</Badge> : <Badge tone="dim">🔒 {isBn ? "বন্ধ" : "Locked"}</Badge>}
                  <button type="button" disabled={!unlocked && !done} onClick={() => setOpenId(l.id)}
                    className="cl-btn min-h-[42px] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50" style={{ background: ACCENT }}>
                    {done ? (isBn ? "আবার পড়ো" : "Revise") : isBn ? "শুরু করো" : "Start"}
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <h3 className="mb-2 mt-7 text-lg font-bold text-[color:var(--text)]">{isBn ? "Attack Labs — lab-এর ভেতরে flag" : "Attack Labs — flags inside the lab"}</h3>
      <div className="space-y-3">
        {ATTACK_LABS.map((lab) => {
          const done = isDone(s, "lab", lab.id);
          const unlocked = isDone(s, "lesson", lab.requiresLesson);
          const req = ATTACK_LESSONS.find((l) => l.id === lab.requiresLesson);
          return (
            <Card key={lab.id} accent={ACCENT} className={unlocked || done ? "" : "cl-locked"}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h4 className="text-base font-semibold text-[color:var(--text)]">{isBn ? lab.bnTitle : lab.title}</h4>
                  <p className="mt-1 text-sm text-[color:var(--dim)]">{t(lab.target)}</p>
                  {!unlocked && !done ? <p className="mt-1.5 text-[13px] text-[color:var(--dim)]">🔒 {isBn ? "খুলতে লাগবে: " : "Unlocks after: "}{isBn ? req?.bnTitle : req?.title}</p> : null}
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  {done ? <Badge tone="ok">✓ {isBn ? "সম্পূর্ণ" : "Completed"}</Badge> : unlocked ? <Badge tone="warn">{lab.xp} XP</Badge> : <Badge tone="dim">🔒</Badge>}
                  <button type="button" disabled={!unlocked && !done} onClick={() => setOpenLabId(lab.id)}
                    className="cl-btn min-h-[42px] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50" style={{ background: ACCENT }}>
                    {isBn ? "Lab খোলো" : "Open lab"}
                  </button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function AttackLessonView({ lesson, unlocked, back, goLesson }: { lesson: AtkLesson; unlocked: boolean; back: () => void; goLesson: (id: string) => void }) {
  const { s, isBn, t } = useTx();
  const done = isDone(s, "lesson", lesson.id);
  const [viewed, setViewed] = useState(done);
  const [quizOk, setQuizOk] = useState(done);
  const [pracOk, setPracOk] = useState(done);
  const [justCompleted, setJustCompleted] = useState(false);
  useEffect(() => { setViewed(done); setQuizOk(done); setPracOk(done); }, [lesson.id, done]);
  useEffect(() => {
    if (!done && viewed && quizOk && pracOk) {
      completeItem("lesson", lesson.id, lesson.xp, 100, `Attack lesson: ${lesson.title}`);
      setJustCompleted(true);
    }
  }, [viewed, quizOk, pracOk, done, lesson.id, lesson.xp, lesson.title]);
  const h3 = "mt-6 mb-1.5 text-[15px] font-semibold text-[color:var(--text)]";
  const body = "text-sm leading-relaxed text-[color:var(--dim)]";
  if (!unlocked && !done) {
    return (
      <article className="mx-auto w-full max-w-[900px]">
        <button type="button" onClick={back} className="mb-3 min-h-[40px] text-sm text-[color:var(--accent)]">← {isBn ? "অ্যাটাক ট্র্যাকে ফিরে যাও" : "Back to Attack Track"}</button>
        <p className="cl-callout cl-callout-warn text-sm text-[color:var(--dim)]">🔒 {isBn ? "এই attack lesson এখনো বন্ধ। এর prerequisite শেষ করলেই এটি খুলবে — তালিকায় prerequisite গুলোর নাম দেওয়া আছে।" : "This attack lesson is still locked. Complete its prerequisites and it opens — they are named in the track list."}</p>
      </article>
    );
  }
  return (
    <article className="mx-auto w-full max-w-[1100px]">
      <button type="button" onClick={back} className="mb-3 min-h-[40px] text-sm text-[color:var(--accent)]">← {isBn ? "অ্যাটাক ট্র্যাকে ফিরে যাও" : "Back to Attack Track"}</button>
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white" style={{ background: ACCENT }} aria-hidden="true">⚔</span>
        <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text)]">{isBn ? lesson.bnTitle : lesson.title}</h2>
        {done ? <Badge tone="ok">✓ {isBn ? "সম্পূর্ণ" : "Completed"} · {lesson.xp} XP</Badge> : <Badge>~{lesson.minutes} min · {lesson.xp} XP</Badge>}
      </div>
      <p className="cl-callout cl-callout-warn mt-3 text-sm leading-relaxed text-[color:var(--dim)]"><strong className="cl-callout-title">{t(lesson.target)}</strong></p>
      <p className="cl-callout cl-callout-note mt-3 text-sm leading-relaxed text-[color:var(--dim)]">
        <strong className="cl-callout-title">{isBn ? "এই lesson-এ তুমি যা শিখবে + যা করবে: " : "What you will learn + what you will do: "}</strong>{t(lesson.intro)}
      </p>
      <p className="mt-2 text-sm text-[color:var(--dim)]">{isBn ? "আগে যা লাগবে (শেষ করা): " : "Prerequisites (completed): "}{lesson.requires.map((r) => lessonShort(r)).join(" · ")}
        {lesson.requires.map((r) => <button key={r} type="button" onClick={() => goLesson(r)} className="ml-2 text-[color:var(--accent)] underline">{isBn ? "ওই lesson টি খোলো" : "open that lesson"}</button>)}
      </p>
      {justCompleted ? <p role="status" className="mt-3 rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-sm text-emerald-200">{isBn ? "Attack lesson সম্পূর্ণ — পরের attack lesson খুলে গেছে।" : "Attack lesson complete — the next attack lesson is unlocked."}</p> : null}

      <h3 className={h3}>{isBn ? "তোমার কাজ গুলো — একটা করে ছোট ধাপ" : "Your tasks — one small step at a time"}</h3>
      <div className="space-y-3">
        {lesson.steps.map((st, i) => (
          <section key={i} className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
            <h4 className="flex items-center gap-2 text-sm font-bold text-[color:var(--text)]">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black text-white" style={{ background: ACCENT }} aria-hidden="true">{i + 1}</span>
              {t(st.title)}
            </h4>
            <p className={`${body} mt-1.5`}>{t(st.body)}</p>
            {i === 1 ? (
              <div className="mt-3">
                <CodePlayground code={lesson.code} />
                <h5 className="mt-3 text-sm font-medium text-[color:var(--text)]">{isBn ? "প্রত্যাশিত output" : "Expected output"}</h5>
                <CodeBlock code={lesson.code.output} label="expected output (verified)" />
              </div>
            ) : null}
          </section>
        ))}
      </div>

      <section aria-label={isBn ? "এই code-টা কেন?" : "Why this code?"} className="cl-why-panel mt-6 rounded-xl border-2 p-4" style={{ borderColor: ACCENT }}>
        <h4 className="text-[15px] font-bold text-[color:var(--text)]">{isBn ? "এই code-টা কেন? — " : "Why this code? — "}{lesson.code.title}</h4>
        <div className="mt-3 space-y-3">
          <div className="cl-callout cl-callout-key"><p className="text-[13px] font-bold cl-callout-title">{isBn ? "১ · এই code-টা এখানে কেন" : "1 · Why this code is here"}</p><p className={body}>{t(lesson.why.why)}</p></div>
          <div><p className="text-[13px] font-bold text-[color:var(--text)]">{isBn ? "২ · প্রতিটি অংশ কী করে" : "2 · What each part does"}</p><p className={body}>{t(lesson.why.parts)}</p></div>
          <div><p className="text-[13px] font-bold text-[color:var(--text)]">{isBn ? "৩ · এই output-টাই কেন এলো — আর এর মানে কী" : "3 · Why this output came — and what it means"}</p><p className={body}>{t(lesson.why.output)}</p></div>
          <div><p className="text-[13px] font-bold text-[color:var(--text)]">{isBn ? "৪ · আসল চাকরিতে এটি কেন গুরুত্বপূর্ণ" : "4 · Why it matters in a real job"}</p><p className={body}>{t(lesson.why.job)}</p></div>
          <div className="cl-callout cl-callout-amber"><p className="text-[13px] font-bold cl-callout-title">{isBn ? "৫ · ভুলভাবে চালালে কী হয়" : "5 · What happens if you run it wrong"}</p><p className={body}>{t(lesson.why.wrong)}</p></div>
          <div className="cl-callout cl-callout-tip"><p className="text-[13px] font-bold cl-callout-title">{isBn ? "৬ · নিরাপদ target" : "6 · Safe target"}</p><p className={body}>{t(lesson.target)}</p></div>
        </div>
      </section>

      {lesson.note || lesson.tips ? (
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {lesson.note ? (
            <div className="cl-callout cl-callout-amber text-sm leading-relaxed text-[color:var(--dim)]">
              <p className="cl-callout-title mb-1">{isBn ? `গুরুত্বপূর্ণ নোট — ${lesson.note.idea.bn}` : `Important note — ${lesson.note.idea.en}`}</p>
              <p>{t(lesson.note.body)}</p>
            </div>
          ) : null}
          {lesson.tips ? (
            <aside className="cl-callout cl-callout-tip text-sm leading-relaxed text-[color:var(--dim)]">
              <p className="cl-callout-title mb-1">{isBn ? "টিপস ও ট্রিকস" : "Tips & Tricks"}</p>
              <ul className="list-disc space-y-1 pl-5">{(isBn ? lesson.tips.bn : lesson.tips.en).map((tip) => <li key={tip}>{tip}</li>)}</ul>
            </aside>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6 space-y-6 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold text-[color:var(--text)]">{isBn ? "মূল্যায়ন — দুটোতেই পাস করতে হবে" : "Assessments — both must pass"}</h3>
          <Badge tone={viewed ? "ok" : "warn"}>{viewed ? (isBn ? "পড়া হয়েছে ✓" : "Content read ✓") : isBn ? "এখনো পড়া নিশ্চিত হয়নি" : "Content not yet confirmed read"}</Badge>
          <Badge tone={quizOk ? "ok" : "dim"}>Quiz {quizOk ? "✓" : ""}</Badge>
          <Badge tone={pracOk ? "ok" : "dim"}>Practical {pracOk ? "✓" : ""}</Badge>
        </div>
        {!viewed ? (
          <button type="button" onClick={() => setViewed(true)} className="cl-btn min-h-[44px] px-4 py-2 text-sm font-semibold text-white" style={{ background: "var(--accent2)" }}>
            {isBn ? "আমি ওপরের পুরো lesson পড়েছি আর lab ধাপ গুলো করেছি — মূল্যায়ন খোলো" : "I have read the full lesson and done the lab steps — unlock the assessments"}
          </button>
        ) : (
          <>
            <Quiz id={lesson.id} title={isBn ? `Knowledge Quiz — ${lesson.bnTitle}` : `Knowledge Quiz — ${lesson.title}`} questions={lesson.quiz} onPass={() => setQuizOk(true)} bnQ={{ q: lesson.quizBn.map((x) => x.q), why: lesson.quizBn.map((x) => x.why) }} />
            <PracticalView id={lesson.id} task={lesson.practical} onPass={() => setPracOk(true)} bn={lesson.practicalBn} />
          </>
        )}
      </div>

      <p className="cl-callout cl-callout-tip mt-6 text-sm leading-relaxed text-[color:var(--dim)]">
        <strong className="cl-callout-title">{isBn ? "এখন তুমি যা করতে পারো: " : "What you can do now: "}</strong>{t(lesson.canDo)}
      </p>
    </article>
  );
}

function AttackLabView({ lab, back }: { lab: AtkLab; back: () => void }) {
  const { s, isBn, t } = useTx();
  const done = isDone(s, "lab", lab.id);
  const [sel, setSel] = useState<(number | null)[]>(() => lab.tasks.map(() => null));
  const [checked, setChecked] = useState<boolean[]>(() => lab.tasks.map(() => done));
  const [msg, setMsg] = useState<string>("");
  useEffect(() => { setSel(lab.tasks.map(() => null)); setChecked(lab.tasks.map(() => done)); setMsg(""); }, [lab.id, done]);
  const allOk = checked.every(Boolean);
  useEffect(() => {
    if (!done && allOk) completeItem("lab", lab.id, lab.xp, 100, `Attack lab: ${lab.title}`);
  }, [allOk, done, lab.id, lab.xp, lab.title]);
  return (
    <article className="mx-auto w-full max-w-[900px]">
      <button type="button" onClick={back} className="mb-3 min-h-[40px] text-sm text-[color:var(--accent)]">← {isBn ? "অ্যাটাক ট্র্যাকে ফিরে যাও" : "Back to Attack Track"}</button>
      <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text)]">{isBn ? lab.bnTitle : lab.title}</h2>
      <p className="cl-callout cl-callout-warn mt-3 text-sm leading-relaxed text-[color:var(--dim)]"><strong className="cl-callout-title">{t(lab.target)}</strong></p>
      <h3 className="mt-5 text-sm font-semibold text-[color:var(--text)]">{t(lab.artifactTitle)}</h3>
      <CodeBlock code={lab.artifact} label={isBn ? "SIMULATED — ল্যাবের নমুনা" : "SIMULATED — lab artefact"} />
      {/* Try + run inside this attack lab too: the required attack lesson's
          own sample code, runnable here (real browser run for Python/JS). */}
      {(() => {
        const srcLesson = ATTACK_LESSONS.find((l) => l.id === lab.requiresLesson);
        return srcLesson && srcLesson.code.code.trim() ? <LabTryBox code={srcLesson.code} isBn={isBn} /> : null;
      })()}
      <div className="mt-5 space-y-4">
        {lab.tasks.map((task, ti) => {
          const prevOk = ti === 0 || checked[ti - 1];
          return (
            <section key={ti} className={`rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 ${prevOk ? "" : "cl-locked"}`} aria-label={`${isBn ? "কাজ" : "Task"} ${ti + 1}`}>
              <h4 className="text-sm font-bold text-[color:var(--text)]">{isBn ? `কাজ ${ti + 1}` : `Task ${ti + 1}`} — {t(task.prompt)}</h4>
              {!prevOk ? <p className="mt-1 text-[13px] text-[color:var(--dim)]">🔒 {isBn ? "আগের কাজ শেষ করলেই খুলবে।" : "Opens when the previous task is done."}</p> : (
                <>
                  <div className="mt-2 space-y-1.5" role="radiogroup" aria-label={`${isBn ? "কাজ" : "Task"} ${ti + 1} ${isBn ? "উত্তর" : "answers"}`}>
                    {task.options.map((opt, oi) => (
                      <label key={oi} className={`flex min-h-[42px] cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2 text-sm ${sel[ti] === oi ? "border-[color:var(--accent)] bg-[color:var(--surface2)]" : "border-[color:var(--border)]"}`}>
                        <input type="radio" name={`${lab.id}-t${ti}`} checked={sel[ti] === oi} disabled={checked[ti]} onChange={() => setSel((p) => p.map((v, j) => (j === ti ? oi : v)))} className="h-4 w-4 shrink-0" />
                        <span className="text-[color:var(--text)]">{isBn ? (task.bnOptions?.[oi] ?? opt) : opt}</span>
                      </label>
                    ))}
                  </div>
                  {checked[ti] ? (
                    <p className="mt-2 rounded-md border border-emerald-800 bg-emerald-950/30 p-2.5 text-sm text-emerald-200" role="status">✓ {t(task.explain)}</p>
                  ) : (
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <button type="button" disabled={sel[ti] === null}
                        onClick={() => {
                          if (sel[ti] === task.answer) { setChecked((p) => p.map((v, j) => (j === ti ? true : v))); setMsg(""); }
                          else setMsg(isBn ? `এখনো নয় — ইঙ্গিত: ${task.hint.bn}` : `Not yet — hint: ${task.hint.en}`);
                        }}
                        className="cl-btn min-h-[40px] px-3.5 py-1.5 text-sm font-semibold text-white disabled:opacity-50" style={{ background: ACCENT }}>
                        {isBn ? "উত্তর যাচাই করো" : "Check answer"}
                      </button>
                      <button type="button" onClick={() => setMsg(isBn ? `ইঙ্গিত: ${task.hint.bn}` : `Hint: ${task.hint.en}`)} className="min-h-[40px] rounded-lg border border-[color:var(--border)] px-3 py-1.5 text-sm text-[color:var(--accent)]">{isBn ? "ইঙ্গিত" : "Hint"}</button>
                    </div>
                  )}
                </>
              )}
            </section>
          );
        })}
      </div>
      {msg ? <p role="alert" className="mt-3 rounded-md border border-amber-800 bg-amber-950/30 p-3 text-sm text-amber-100">{msg}</p> : null}
      {allOk ? (
        <p className="cl-callout cl-callout-tip mt-4 text-sm text-[color:var(--dim)]" role="status">
          <strong className="cl-callout-title">{isBn ? "Lab সম্পূর্ণ — ভেতরের flag: " : "Lab complete — the flag inside the lab: "}</strong>
          <code className="mono font-bold text-[color:var(--text)]">{lab.flag}</code>
          {isBn ? " — এটি শুধু এই lab-এর marker; আসল দক্ষতা হলো attack → fix → re-test চক্র যা তুমি মাত্র শেষ করলে।" : " — it is only this lab's marker; the real skill is the attack → fix → re-test loop you just completed."}
        </p>
      ) : null}
    </article>
  );
}
