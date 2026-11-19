// "Why this code?" — the structured explanation attached to every code /
// command block in CyberLab (task rule: WHY it exists, WHAT each part does,
// WHAT the output means, WHY IT MATTERS in a job, WHAT HAPPENS IF RUN WRONG,
// and the SAFE TARGET reminder). Content lives in why-code.ts (EN) and
// why-code-bn.ts (BN mirror) — this file only renders it, in the learner's
// language mode, with the existing Ink & Signal tokens and callout system.
import { useStore } from "./ui";
import { tx as txI } from "./i18n";
import { WHY_CODE, CTF_WHY6, LAB_WHY6, safeTargetLine, type WhyEntry, type SixWhy } from "./why-code";
import { WHY_CODE_BN, CTF_WHY6_BN, LAB_WHY6_BN } from "./why-code-bn";
import { WHY_CODE4, WHY_CODE4_BN, CTF_WHY6_4, CTF_WHY6_4_BN, LAB_WHY6_4, LAB_WHY6_4_BN } from "./why-phase4";
import { WHY_CODE5, WHY_CODE5_BN, CTF_WHY6_5, CTF_WHY6_5_BN, LAB_WHY6_5, LAB_WHY6_5_BN } from "./why-phase5";
import { WHY_PYM, WHY_PYM_BN } from "./why-python";
import { WHY_CM, WHY_CM_BN, WHY_JV, WHY_JV_BN, WHY_JSM, WHY_JSM_BN, WHY_SHM, WHY_SHM_BN } from "./why-langs";
import { LESSON_BN_FULL } from "./bn-lessons";
import { isSampleContent } from "./SampleBlock";
import type { Lesson } from "./catalog";

export function useWhyEntry(lessonId: string): { entry: WhyEntry | undefined; isBn: boolean } {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const entry = (isBn ? (WHY_CODE_BN[lessonId] ?? WHY_CODE4_BN[lessonId] ?? WHY_CODE5_BN[lessonId] ?? WHY_PYM_BN[lessonId] ?? WHY_CM_BN[lessonId] ?? WHY_JV_BN[lessonId] ?? WHY_JSM_BN[lessonId] ?? WHY_SHM_BN[lessonId]) : undefined) ?? (WHY_CODE[lessonId] ?? WHY_CODE4[lessonId] ?? WHY_CODE5[lessonId] ?? WHY_PYM[lessonId] ?? WHY_CM[lessonId] ?? WHY_JV[lessonId] ?? WHY_JSM[lessonId] ?? WHY_SHM[lessonId]);
  return { entry, isBn };
}

const L = {
  title: { en: "Why this code?", bn: "এই code-টা কেন?" },
  why: { en: "1 · Why this code is here", bn: "১ · এই code-টা এখানে কেন" },
  parts: { en: "2 · What each part does", bn: "২ · প্রতিটি অংশ কী করে" },
  output: { en: "3 · Why this output came — and what it means", bn: "৩ · এই output-টাই কেন এলো — আর এর মানে কী" },
  job: { en: "4 · Why it matters in a real job", bn: "৪ · আসল চাকরিতে এটি কেন গুরুত্বপূর্ণ" },
  wrong: { en: "5 · What happens if you run it wrong", bn: "৫ · ভুলভাবে চালালে কী হয়" },
  safe: { en: "6 · Safe target", bn: "৬ · নিরাপদ target" },
  review: {
    en: "This code sample still needs a reviewed why-explanation — learn the line-by-line notes in the lesson text for now.",
    bn: "এই code sample-টির জন্য যাচাই করা why-ব্যাখ্যা এখনো তৈরি হয়নি — আপাতত পাঠের লেখায় থাকা line-by-line note গুলো পড়ো।",
  },
};

// Sample-lesson variants of the why-panel labels (v26): a written sample is
// not code, so its panel must not say "why this code" or "run it wrong".
const LS: Partial<Record<keyof typeof L, { en: string; bn: string }>> = {
  title: { en: "Why this sample?", bn: "এই sample-টি কেন?" },
  why: { en: "1 · Why this sample is here", bn: "১ · এই sample-টি এখানে কেন" },
  output: { en: "3 · What the finished piece shows — and what it means", bn: "৩ · তৈরি লেখাটি যা দেখায় — আর এর মানে কী" },
  wrong: { en: "5 · What happens if you get it wrong", bn: "৫ · ভুল হলে কী হয়" },
  review: {
    en: "This sample still needs a reviewed why-explanation — learn the line-by-line notes in the lesson text for now.",
    bn: "এই sample-টির জন্য যাচাই করা why-ব্যাখ্যা এখনো তৈরি হয়নি — আপাতত পাঠের লেখায় থাকা line-by-line note গুলো পড়ো।",
  },
};

export function WhyCodePanel({ lesson }: { lesson: Lesson }) {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const sample = isSampleContent(lesson.code);
  const t = (k: keyof typeof L) => (isBn ? (sample ? (LS[k]?.bn ?? L[k].bn) : L[k].bn) : (sample ? (LS[k]?.en ?? L[k].en) : L[k].en));
  const entry = (isBn ? (WHY_CODE_BN[lesson.id] ?? WHY_CODE4_BN[lesson.id] ?? WHY_CODE5_BN[lesson.id] ?? WHY_PYM_BN[lesson.id] ?? WHY_CM_BN[lesson.id] ?? WHY_JV_BN[lesson.id] ?? WHY_JSM_BN[lesson.id] ?? WHY_SHM_BN[lesson.id]) : undefined) ?? (WHY_CODE[lesson.id] ?? WHY_CODE4[lesson.id] ?? WHY_CODE5[lesson.id] ?? WHY_PYM[lesson.id] ?? WHY_CM[lesson.id] ?? WHY_JV[lesson.id] ?? WHY_JSM[lesson.id] ?? WHY_SHM[lesson.id]);
  const linesBn = LESSON_BN_FULL[lesson.id]?.codeLines;
  // v28 tidy layout (content unchanged — all six parts in full): uniform
  // divider-separated rows instead of bulky mixed callout boxes, tight
  // spacing, same short numbered headings for every part.
  const sec = "text-[13px] font-bold tracking-wide text-[color:var(--text)]";
  const body = "mt-0.5 text-sm leading-relaxed text-[color:var(--dim)]";
  const row = "py-2 first:pt-0 last:pb-0";
  return (
    <section aria-label={t("title")} className="cl-why-panel mb-3 rounded-xl border-2 p-4" style={{ borderColor: "var(--accent)" }}>
      <h4 className="flex items-center gap-2 text-[15px] font-bold text-[color:var(--text)]">
        <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full text-[13px] font-black text-white" style={{ background: "var(--accent)" }}>?</span>
        {t("title")}
        <span className="text-xs font-medium text-[color:var(--dim)]">— {lesson.code.title}</span>
      </h4>
      <div className="cl-why-body">
      {!entry ? (
        <p className={`${body} cl-key-line`} role="note">⚠ {t("review")}</p>
      ) : (
        <div className="divide-y divide-[color:var(--border)]">
          <div className={row}>
            <p className={sec}>{t("why")}</p>
            <p className={body}>{entry.why}</p>
          </div>
          <div className={row}>
            <p className={sec}>{t("parts")}</p>
            <ol className="mt-0.5 list-decimal space-y-0.5 pl-5">
              {lesson.code.lines.map((l, i) => (
                <li key={i} className="text-sm leading-relaxed text-[color:var(--dim)]">{isBn && linesBn?.[i] ? linesBn[i] : l}</li>
              ))}
            </ol>
          </div>
          <div className={row}>
            <p className={sec}>{t("output")}</p>
            <p className={body}>{entry.output}</p>
          </div>
          <div className={row}>
            <p className={sec}>{t("job")}</p>
            <p className={body}>{entry.job}</p>
          </div>
          <div className={row}>
            <p className={sec}>{t("wrong")}</p>
            <p className={body}>{entry.wrong}</p>
          </div>
          <div className={row}>
            <p className={sec}>{t("safe")}</p>
            <p className={body}>{safeTargetLine(lesson.code.lang, isBn)}</p>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}

// ---- FULL six-part why panels for CTF artifacts and lab code surfaces ----
// Same six labelled sections as the lesson WhyCodePanel above — the user's
// rule is "every code/command/evidence surface, no exceptions", so CTFs and
// labs get the identical structure (never a single-line why):
//   1 why this artifact/lab · 2 part-by-part breakdown · 3 why this
//   output/evidence · 4 what it means / what you learn · 5 job relevance ·
//   6 wrong attempt (symptom + fix) · plus the safe-target reminder.
const SIX_L = {
  ctfTitle: { en: "Why this artifact?", bn: "এই artifact-টা কেন?" },
  labTitle: { en: "Why this lab?", bn: "এই lab-টা কেন?" },
  whyCtf: { en: "1 · Why this artifact / evidence", bn: "১ · এই artifact/প্রমাণটা কেন" },
  whyLab: { en: "1 · Why this lab / its evidence", bn: "১ · এই lab/তার প্রমাণটা কেন" },
  parts: { en: "2 · Part-by-part breakdown", bn: "২ · অংশ ধরে ধরে ব্যাখ্যা" },
  output: { en: "3 · Why this output / evidence came", bn: "৩ · এই output/প্রমাণটাই কেন এলো" },
  meaning: { en: "4 · What it means — and what you learn", bn: "৪ · এর মানে কী — আর তুমি কী শিখলে" },
  job: { en: "5 · Why it matters in a real job", bn: "৫ · আসল চাকরিতে এটি কেন গুরুত্বপূর্ণ" },
  wrong: { en: "6 · Wrong attempt — symptom and fix", bn: "৬ · ভুল চেষ্টা — লক্ষণ ও ঠিক করা" },
  safe: { en: "Safe target", bn: "নিরাপদ target" },
  review: {
    en: "This surface still needs a reviewed six-part why-explanation — learn from the objective, hint and explanation for now.",
    bn: "এই surface-টির জন্য যাচাই করা ছয়-অংশের why-ব্যাখ্যা এখনো তৈরি হয়নি — আপাতত লক্ষ্য, ইঙ্গিত ও ব্যাখ্যা থেকে শেখো।",
  },
};

function SixWhySections({ entry, isBn, kind, safeText }: { entry: SixWhy | undefined; isBn: boolean; kind: "ctf" | "lab"; safeText: string }) {
  const t = (k: keyof typeof SIX_L) => (isBn ? SIX_L[k].bn : SIX_L[k].en);
  // v28 tidy layout (content unchanged — every part in full): uniform
  // divider-separated rows, tight spacing, same headings as the lesson panel.
  const sec = "text-[13px] font-bold tracking-wide text-[color:var(--text)]";
  const body = "mt-0.5 text-sm leading-relaxed text-[color:var(--dim)]";
  const row = "py-2 first:pt-0 last:pb-0";
  if (!entry) return <p className={`${body} cl-key-line`} role="note">⚠ {t("review")}</p>;
  return (
    <div className="divide-y divide-[color:var(--border)]">
      <div className={row}>
        <p className={sec}>{kind === "ctf" ? t("whyCtf") : t("whyLab")}</p>
        <p className={body}>{entry.why}</p>
      </div>
      <div className={row}>
        <p className={sec}>{t("parts")}</p>
        <ol className="mt-0.5 list-decimal space-y-0.5 pl-5">
          {entry.parts.map((p, i) => (
            <li key={i} className="text-sm leading-relaxed text-[color:var(--dim)]">{p}</li>
          ))}
        </ol>
      </div>
      <div className={row}>
        <p className={sec}>{t("output")}</p>
        <p className={body}>{entry.output}</p>
      </div>
      <div className={row}>
        <p className={sec}>{t("meaning")}</p>
        <p className={body}>{entry.meaning}</p>
      </div>
      <div className={row}>
        <p className={sec}>{t("job")}</p>
        <p className={body}>{entry.job}</p>
      </div>
      <div className={row}>
        <p className={sec}>{t("wrong")}</p>
        <p className={body}>{entry.wrong}</p>
      </div>
      <div className={row}>
        <p className={sec}>{t("safe")}</p>
        <p className={body}>{safeText}</p>
      </div>
    </div>
  );
}

export function LabWhyBox({ labId }: { labId: string }) {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const entry = (isBn ? (LAB_WHY6_BN[labId] ?? LAB_WHY6_4_BN[labId] ?? LAB_WHY6_5_BN[labId]) : undefined) ?? (LAB_WHY6[labId] ?? LAB_WHY6_4[labId] ?? LAB_WHY6_5[labId]);
  return (
    <section aria-label={isBn ? SIX_L.labTitle.bn : SIX_L.labTitle.en} className="cl-why-panel mb-3 rounded-xl border-2 p-4" style={{ borderColor: "var(--c-lab)" }}>
      <h4 className="flex items-center gap-2 text-[15px] font-bold text-[color:var(--text)]">
        <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full text-[13px] font-black text-white" style={{ background: "var(--c-lab)" }}>?</span>
        {isBn ? SIX_L.labTitle.bn : SIX_L.labTitle.en}
      </h4>
      <div className="cl-why-body"><SixWhySections entry={entry} isBn={isBn} kind="lab"
        safeText={txI(s.profile.lang, "This lab's environment is SIMULATED — every command and test here runs only against your own localhost / own VM / lab app, never a real system or account.", "এই lab-এর পরিবেশ SIMULATED — এখানকার প্রতিটি command ও পরীক্ষা শুধু নিজের localhost / নিজের VM / lab app-এ; আসল system বা account-এ কখনো নয়।")} /></div>
    </section>
  );
}

export function CtfWhyPanel({ ctfId }: { ctfId: string }) {
  const s = useStore();
  const isBn = s.profile.lang === "bn";
  const entry = (isBn ? (CTF_WHY6_BN[ctfId] ?? CTF_WHY6_4_BN[ctfId] ?? CTF_WHY6_5_BN[ctfId]) : undefined) ?? (CTF_WHY6[ctfId] ?? CTF_WHY6_4[ctfId] ?? CTF_WHY6_5[ctfId]);
  return (
    <section aria-label={isBn ? SIX_L.ctfTitle.bn : SIX_L.ctfTitle.en} className="cl-why-panel mt-3 rounded-xl border-2 p-4" style={{ borderColor: "var(--c-ctf)" }}>
      <h4 className="flex items-center gap-2 text-[15px] font-bold text-[color:var(--text)]">
        <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full text-[13px] font-black text-white" style={{ background: "var(--c-ctf)" }}>?</span>
        {isBn ? SIX_L.ctfTitle.bn : SIX_L.ctfTitle.en}
      </h4>
      <div className="cl-why-body"><SixWhySections entry={entry} isBn={isBn} kind="ctf"
        safeText={txI(s.profile.lang, "This artifact is SIMULATED evidence inside CyberLab — never run the same test against a real site or account. A wrong flag simply means re-read the evidence; nothing breaks.", "এই artifact CyberLab-এর ভেতরের SIMULATED প্রমাণ — একই পরীক্ষা আসল site বা account-এর বিরুদ্ধে কখনো চালাবে না। ভুল flag মানে শুধু প্রমাণ আবার পড়া; কিছুই ভাঙে না।")} /></div>
    </section>
  );
}

// v28: the generic "Playground vs Terminal — which one, when?" explainer box
// was removed at the user's order (15 Nov 2026) — it repeated the same
// generic explanation in every lesson between the why-panel and the
// Playground, and again in the Terminal view. The Playground, the Terminal
// and the six-part why-panels themselves are unchanged.
