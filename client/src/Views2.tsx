import { useEffect, useState } from "react";
import { itemDesc } from "./i18n";
import { Badge, Card, CodeBlock, PracticalView, Quiz, SectionTitle, downloadText, isDone, useStore } from "./ui";
import { CodePlayground } from "./Playground";
import { FormatSample, isSampleContent } from "./SampleBlock";
import { SKILLS } from "./catalog";
import { ALL_LESSONS } from "./catalogAll";
import { CAREERS } from "./catalog2";
import {
BRIEF_SECTIONS, BRIEF_SNAPSHOT_DATE, CODE_LIBRARY, DIAGNOSTIC, KB_REFS, PENTEST_STEPS,
RELIABILITY_POLICY, SKILL_ASSESSMENTS, SOC_EVENTS, TEMPLATES, THREAT_SOURCES, TOOL_DRILLS,
} from "./catalog3";
import { QUIZ_OPTIONS_BN, TASK_OPTIONS_BN } from "./bn-options";
import { ACCOUNT_BOUNDARY, ACCOUNT_TOPICS, GLOSSARY, HARD_BOUNDARY, VULN_PATTERNS } from "./catalog4";
import { safeTargetLine } from "./why-code";
import { completeItem, saveDiagnostic, togglePentest, type LocalState } from "./store";
import { ASSESSMENT_REQUIRES, SOC_REQUIRES, PENTEST_REQUIRES, isUnlocked } from "./gating";
import { JourneyStrip, LockedNotice, UnlockFilterBar, useUnlockFilter } from "./guided";
import { SECTION_ORDER } from "./lang";
import { ASSESSMENT_BN, SOC_BN, DIAGNOSTIC_BN } from "./bn-practice3";
import { api } from "./api";

/* ---------------- Skill Assessment ---------------- */

export function AssessmentView({ goLesson }: { goLesson: (id: string) => void }) {
  const s = useStore();
  const [diagAnswers, setDiagAnswers] = useState<(number | null)[]>(() => DIAGNOSTIC.map(() => null));
  const [diagDone, setDiagDone] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);
  const [quizOk, setQuizOk] = useState(false);
  const [pracOk, setPracOk] = useState(false);

  const submitDiag = () => {
    const perTopicMap = new Map<string, { score: number; total: number }>();
    let score = 0;
    DIAGNOSTIC.forEach((q, i) => {
      const t = perTopicMap.get(q.topic) ?? { score: 0, total: 0 };
      t.total += 1;
      if (diagAnswers[i] === q.answer) { t.score += 1; score += 1; }
      perTopicMap.set(q.topic, t);
    });
    saveDiagnostic({ score, total: DIAGNOSTIC.length, perTopic: [...perTopicMap.entries()].map(([topic, v]) => ({ topic, score: v.score, total: v.total })), at: new Date().toISOString() });
    setDiagDone(true);
  };

  const assessmentRaw = SKILL_ASSESSMENTS.find((a) => a.id === picked) ?? null;
  const assessment = assessmentRaw && (isUnlocked(s, ASSESSMENT_REQUIRES[assessmentRaw.id] ?? []) || isDone(s, "assessment", assessmentRaw.id)) ? assessmentRaw : null;
  const weak = s.diagnostic?.perTopic.filter((t) => t.total > 0 && t.score / t.total < 0.7) ?? [];

  return (
    <div className="space-y-6">
      <JourneyStrip nextLabel="an assessment opens after its foundation lessons" />
      <SectionTitle eyebrow="Level proof · Step 9" orderEn={SECTION_ORDER.assessment.en} orderBn={SECTION_ORDER.assessment.bn} bn="দক্ষতা মূল্যায়ন" bnSub="প্রতিটি মূল্যায়ন তার ভিত্তি-পাঠ শেষ হলেই খোলে। Quiz ও practical — দুটোতেই pass করলেই দক্ষতার প্রমাণ মিলবে।" sub="Each skill assessment opens after its foundation lessons. The diagnostic sets pace only — it never skips a prerequisite. Skill evidence is awarded only when BOTH the quiz and the practical pass.">
        Skill Assessment
      </SectionTitle>

      <Card>
        <h3 className="font-semibold text-[color:var(--text)]">Level 0 diagnostic (12 questions)</h3>
        {s.diagnostic && !diagDone ? (
          <div className="mt-2 space-y-2 text-sm text-[color:var(--dim)]">
            <p>Last result: {s.diagnostic.score}/{s.diagnostic.total} on {new Date(s.diagnostic.at).toLocaleDateString()}. Recommended revision order within Levels 0–1:</p>
            <ul className="list-disc space-y-1 pl-5">
              {weak.length ? weak.map((t) => <li key={t.topic}>{t.topic} — {t.score}/{t.total}. Revise the matching Level 0–1 lessons first.{t.topic === "Programming" ? " Weak programming foundations route you to extra Level 4 revision later — Level 4 is the programming gate, and advanced lessons will name the exact Level 4 lesson to revise. Prerequisites are never skipped." : ""}</li>) : <li>No topic below 70% — proceed in path order.</li>}
            </ul>
            <button type="button" className="min-h-[40px] rounded border border-[color:var(--border)] px-3 py-1.5 text-[color:var(--text)]" onClick={() => setDiagDone(true)}>Retake diagnostic</button>
          </div>
        ) : (
          <div className="mt-3 space-y-4">
            {DIAGNOSTIC.map((q, qi) => (
              <fieldset key={qi} className="rounded-md border border-[color:var(--border)] bg-[color:var(--surface2)] p-3">
                <legend className="px-1 text-sm font-medium text-[color:var(--text)]">{qi + 1}. {s.profile.lang === "bn" ? (DIAGNOSTIC_BN.q[qi] ?? q.q) : q.q} <span className="text-[color:var(--dim)]">({q.topic})</span></legend>
                <div className="mt-2 space-y-1.5">
                  {q.options.map((opt, oi) => (
                    <label key={oi} className={`flex min-h-[40px] cursor-pointer items-center gap-2 rounded border px-3 py-2 text-sm ${diagAnswers[qi] === oi ? "border-[color:var(--accent)] bg-sky-950/30" : "border-[color:var(--border)]"}`}>
                      <input type="radio" name={`diag-${qi}`} className="accent-sky-500" checked={diagAnswers[qi] === oi} onChange={() => setDiagAnswers((a) => a.map((v, i) => (i === qi ? oi : v)))} />
                      <span className="text-[color:var(--text)]">{s.profile.lang === "bn" ? (QUIZ_OPTIONS_BN["diagnostic"]?.[qi]?.[oi] ?? opt) : opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
            <button type="button" disabled={diagAnswers.some((a) => a === null)} onClick={submitDiag}
              className="min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-40">Submit diagnostic</button>
            {diagDone && s.diagnostic ? <p role="status" className="text-sm text-emerald-300">Saved: {s.diagnostic.score}/{s.diagnostic.total}. Guidance updated above — the path itself is unchanged; prerequisites still apply in order.</p> : null}
          </div>
        )}
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {SKILL_ASSESSMENTS.map((a) => {
          const req = ASSESSMENT_REQUIRES[a.id] ?? [];
          const unlocked = isUnlocked(s, req) || isDone(s, "assessment", a.id);
          return (
          <Card key={a.id}>
            <div className="flex items-start justify-between gap-2">
              <h3 className="cl-wrap font-semibold text-[color:var(--text)]">{unlocked ? "" : ""}{a.title}</h3>
              {isDone(s, "assessment", a.id) ? <Badge tone="ok">Passed</Badge> : <Badge>{a.xp} XP</Badge>}
            </div>
            {itemDesc(s.profile.lang, a.id) ? <p className="mt-1 text-sm leading-relaxed text-[color:var(--dim)]">{itemDesc(s.profile.lang, a.id)}</p> : <p className="mt-1 text-sm text-[color:var(--dim)]">Skill: {a.skill}. Quiz + practical, 70% rule.</p>}
            {unlocked ? <button type="button" className="mt-3 min-h-[40px] rounded border border-[color:var(--border)] px-3 py-1.5 text-sm text-[color:var(--text)]"
              onClick={() => { setPicked(a.id); setQuizOk(false); setPracOk(false); }}>{isDone(s, "assessment", a.id) ? "Revise / retake" : "Start assessment"}</button>
            : <LockedNotice requires={req} goLesson={goLesson} />}
          </Card>
          );
        })}
      </div>

      {assessment ? (
        <Card key={assessment.id} className="space-y-5">
          <h3 className="font-semibold text-[color:var(--text)]">{assessment.title}</h3>
          <Quiz id={assessment.id} title="Knowledge check" questions={assessment.quiz} topics={assessment.quiz.map(() => assessment.skill)} bnQ={ASSESSMENT_BN[assessment.id]?.quiz} onPass={() => {
            setQuizOk(true);
            if (pracOk) completeItem("assessment", assessment.id, assessment.xp, 100, assessment.title);
          }} />
          <PracticalView id={assessment.id} task={assessment.practical} bn={ASSESSMENT_BN[assessment.id]?.practical} onPass={() => {
            setPracOk(true);
            if (quizOk) completeItem("assessment", assessment.id, assessment.xp, 100, assessment.title);
          }} />
          {quizOk && pracOk ? <p role="status" className="text-sm text-emerald-300">Assessment passed — skill evidence recorded for {assessment.skill}.</p> : null}
        </Card>
      ) : null}
    </div>
  );
}

/* ---------------- Knowledge Base + Vulnerability Research Academy ---------------- */

export function KnowledgeBaseView({ goLesson }: { goLesson: (id: string) => void }) {
  const [openPattern, setOpenPattern] = useState<string | null>(null);
  const [glossaryQ, setGlossaryQ] = useState("");
  const glossaryHits = GLOSSARY.filter((g) => (g.term + g.def).toLowerCase().includes(glossaryQ.toLowerCase()));
  const cveLesson = ALL_LESSONS.find((l) => l.id === "l12-reading-cve");
  return (
    <div className="space-y-6">
      <SectionTitle eyebrow="Library · always open" bn="নলেজ বেস" bnSub="সবসময় খোলা reference — framework-এর version, Glossary-তে প্রতিটি শব্দের সহজ বাংলা ব্যাখ্যা, আর Vulnerability Research Academy। এটা লাইব্রেরি: যেকোনো সময় এসে খুঁজে পড়া যায়, ধারার ধাপ নয়।" sub="Always-open reference library — look anything up at any time; it is not a step in the workflow. Versions below were verified against official sources on 2026-11-12. Anything not verifiable is labelled as such — never guessed.">
        Knowledge Base
      </SectionTitle>

      <Card>
        <h3 className="mb-2 font-semibold text-[color:var(--text)]">Source &amp; Data Reliability Policy</h3>
        <ol className="list-decimal space-y-1 pl-5 text-sm text-[color:var(--dim)]">
          {RELIABILITY_POLICY.map((r, i) => <li key={i}>{r}</li>)}
        </ol>
        <p className="mt-2 text-sm text-[color:var(--dim)]">Every intelligence item in CyberLab carries: source, publication date, retrieval date, confidence, and verification status. Labels used: <em>official advisory / researcher claim / community report / automated inference / unverified</em>. Exploitation status labels: Publicly disclosed · Proof of concept available · Exploitation reported · Confirmed in CISA KEV · Exploitation not confirmed · Unknown. A high CVSS score never, by itself, means active exploitation, and a publication date is never a first-exploitation date.</p>
      </Card>

      {/* Phones: stacked labelled cards (no sideways scrolling). ≥sm: the table. */}
      <div className="space-y-2 sm:hidden">
        {KB_REFS.map((r) => (
          <div key={r.name} className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-3">
            <p className="text-sm font-semibold text-[color:var(--text)]">{r.name}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-[color:var(--dim)]">{r.note}</p>
            <dl className="mt-2 space-y-1 text-sm">
              <div className="flex gap-2"><dt className="w-20 shrink-0 text-[color:var(--dim)]">Version</dt><dd className="text-[color:var(--text)]">{r.version}</dd></div>
              <div className="flex gap-2"><dt className="w-20 shrink-0 text-[color:var(--dim)]">Published</dt><dd className="text-[color:var(--text)]">{r.published}</dd></div>
              <div className="flex gap-2"><dt className="w-20 shrink-0 text-[color:var(--dim)]">Source</dt><dd>{r.url ? <a className="text-[color:var(--accent)] underline" href={r.url} target="_blank" rel="noopener noreferrer">Official source</a> : <span className="text-[color:var(--dim)]">See note</span>}</dd></div>
            </dl>
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto rounded-lg border border-[color:var(--border)] sm:block">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-[color:var(--surface2)] text-[color:var(--dim)]">
            <tr><th className="p-3 font-medium">Framework</th><th className="p-3 font-medium">Version</th><th className="p-3 font-medium">Published</th><th className="p-3 font-medium">Source</th></tr>
          </thead>
          <tbody>
            {KB_REFS.map((r) => (
              <tr key={r.name} className="border-t border-[color:var(--border)] align-top">
                <td className="p-3 text-[color:var(--text)]">{r.name}<p className="mt-0.5 text-xs text-[color:var(--dim)]">{r.note}</p></td>
                <td className="p-3 text-[color:var(--text)]">{r.version}</td>
                <td className="p-3 text-[color:var(--dim)]">{r.published}</td>
                <td className="p-3">{r.url ? <a className="text-[color:var(--accent)] underline" href={r.url} target="_blank" rel="noopener noreferrer">Official source</a> : <span className="text-[color:var(--dim)]">See note</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Card className="space-y-2">
        <h3 className="font-semibold text-[color:var(--text)]">Glossary — every term in plain English, with a natural Bangla explanation</h3>
        <p className="text-[13px] text-[color:var(--dim)]">পাঠের মধ্যে কোনো শব্দের পাশে বাংলা ব্যাখ্যায় click করলেই এখানে আসা যায় — সব শব্দের ব্যাখ্যা এক জায়গায়।</p>
        <label className="block max-w-md text-sm text-[color:var(--dim)]">Search the glossary
          <input aria-label="Search the glossary" value={glossaryQ} onChange={(e) => setGlossaryQ(e.target.value)} placeholder="e.g. pointer, hashing, subnet"
            className="mt-1 min-h-[44px] w-full rounded border border-[color:var(--border)] bg-[color:var(--surface2)] px-3 py-2 text-sm text-[color:var(--text)]" /></label>
        <dl className="space-y-1.5">
          {glossaryHits.map((g) => (
            <div key={g.term} className="text-sm"><dt className="inline font-medium text-[color:var(--text)]">{g.term}: </dt><dd className="inline text-[color:var(--dim)]">{g.def}{g.bn ? <> ({g.bn})</> : null}</dd></div>
          ))}
        </dl>
        {glossaryHits.length === 0 ? <p className="text-sm text-[color:var(--dim)]">No glossary term matches — try a shorter word.</p> : null}
      </Card>

      <Card className="space-y-3">
        <h3 className="font-semibold text-[color:var(--text)]">Vulnerability Research Academy</h3>
        <p className="text-sm leading-relaxed text-[color:var(--dim)]">Read a CVE record end-to-end: identifier, affected versions (evidence, not banners), CWE root cause, CVSS v3.1/v4.0 vector meaning, EPSS probability, KEV status, vendor advisory, patch and changelog review, safe reproduction only in isolated labs, fix validation, and a professional written report.</p>
        <div className="rounded-md border border-[color:var(--border)] bg-[color:var(--surface2)] p-3 text-sm text-[color:var(--dim)]">
          <p className="font-medium text-[color:var(--text)]">Worked example — CVE-2021-44228 (Log4Shell), from the Level 12 lesson:</p>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>Published 2021-12-10 · CWE-502 (deserialization of untrusted data) · CVSS v3.1 10.0.</li>
            <li>Added to CISA KEV 2021-12-10 · ransomware campaign use: Known (per KEV record).</li>
            <li>Lesson rule it teaches: KEV + exposure outranks raw CVSS in patch order; publication date ≠ first-exploitation date.</li>
          </ul>
        </div>
        {cveLesson ? <button type="button" className="min-h-[40px] rounded bg-[color:var(--accent2)] px-3 py-1.5 text-sm font-semibold text-white" onClick={() => goLesson(cveLesson.id)}>Open the full lesson: Reading a CVE Like a Professional</button> : null}
        <div>
          <p className="mb-1 text-sm font-medium text-[color:var(--text)]">Blank vulnerability-report template</p>
          <CodeBlock code={(TEMPLATES.find((t) => t.id === "tpl-vuln-report")?.body ?? "")} label="template — copy or download from Research Workspace" />
        </div>
      </Card>

      <Card className="space-y-3">
        <h3 className="font-semibold text-[color:var(--text)]">Threat intelligence &amp; STIX/TAXII</h3>
        <p className="text-sm leading-relaxed text-[color:var(--dim)]">IOCs are context, not conclusions: an IP, domain, or hash is never labelled malicious without evidence — indicators rotate in minutes, behaviors (TTPs) endure. STIX 2 models intel as objects (indicator, malware, relationship) exchanged over TAXII 2 collections; MISP is the open-source sharing platform built on the same ideas. Confidence and source reliability are recorded per item, and the indicator lifecycle (first seen → validated → expired) is part of the record.</p>
        <p className="text-sm text-[color:var(--dim)]">Practical exercise: convert the shared simulated incident (Learning Paths → Purple track) into a structured report with the STIX-style template in the Research Workspace (template “Threat Intelligence Report”).</p>
      </Card>

      <div className="space-y-3">
        <h3 className="text-base font-semibold text-[color:var(--text)]">Code library — complete samples with honest test status</h3>
        {CODE_LIBRARY.map((c) => (
          <Card key={c.id}>
            <div className="flex flex-wrap items-center gap-2"><h4 className="font-medium text-[color:var(--text)]">{c.title}</h4><Badge>{c.lang}</Badge><Badge tone="warn">Reviewed for syntax — not executed in-app</Badge></div>
            <p className="mt-1 text-sm text-[color:var(--dim)]"><span className="font-semibold text-[color:var(--text)]">Why this code?</span> {c.purpose} <span className="text-[color:var(--text)]">Environment:</span> {c.env}</p>
            <div className="mt-2">{isSampleContent(c)
              ? <FormatSample code={{ lang: c.lang, title: c.title, code: c.code, output: c.output }} />
              : <CodePlayground code={{ lang: c.lang, title: c.title, code: c.code, output: c.output }} compact whyRun={c.purpose} outputMeaning={c.output} />}</div>
            <ul className="mt-2 list-disc space-y-0.5 pl-5 text-[13px] text-[color:var(--dim)]">{c.lines.map((l, i) => <li key={i}>{l}</li>)}</ul>
            <p className="mt-2 text-[13px] text-[color:var(--dim)]"><span className="text-[color:var(--text)]">What this output means:</span> {c.output}</p>
            <p className="text-[13px] text-[color:var(--dim)]"><span className="text-[color:var(--text)]">Safe target:</span> {safeTargetLine(c.lang, false)}</p>
            <p className="text-[13px] text-[color:var(--dim)]"><span className="text-[color:var(--text)]">Common errors:</span> {c.errors}</p>
            <p className="text-[13px] text-[color:var(--dim)]"><span className="text-[color:var(--text)]">Your task:</span> {c.task}</p>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-semibold text-[color:var(--text)]">Vulnerability Pattern Library — find it → prove it in the lab → fix it → verify the fix</h3>
        <p className="rounded-md border border-amber-800 bg-amber-950/30 p-3 text-sm text-amber-100">{HARD_BOUNDARY}</p>
        {VULN_PATTERNS.map((p) => (
          <Card key={p.id}>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-medium text-[color:var(--text)]">{p.title}</h4>
              <Badge tone="accent">{p.area}</Badge><span className="text-xs text-[color:var(--dim)]">{p.ref}</span>
              <button type="button" className="ml-auto min-h-[36px] rounded border border-[color:var(--border)] px-2 py-1 text-xs text-[color:var(--text)]" aria-expanded={openPattern === p.id}
                onClick={() => setOpenPattern(openPattern === p.id ? null : p.id)}>{openPattern === p.id ? "Hide 8 steps" : "Show 8 steps"}</button>
            </div>
            {openPattern === p.id ? (
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-[color:var(--dim)]">
                <p><span className="font-medium text-[color:var(--text)]">1 · Underlying weakness.</span> {p.weakness}</p>
                <div><p className="font-medium text-[color:var(--text)]">2 · Deliberately vulnerable LOCAL example (training app only)</p><CodeBlock code={p.vulnCode.code} label={p.vulnCode.lang} /></div>
                <p><span className="font-medium text-[color:var(--text)]">3 · Risk &amp; impact.</span> {p.risk}</p>
                <p><span className="font-medium text-[color:var(--text)]">4 · Safe verification (lab only).</span> {p.verify}</p>
                <p><span className="font-medium text-[color:var(--text)]">5 · The fix.</span> {p.fix}</p>
                <div><p className="font-medium text-[color:var(--text)]">6 · Secure code</p><CodeBlock code={p.secureCode.code} label={p.secureCode.lang} /></div>
                <p><span className="font-medium text-[color:var(--text)]">7 · Regression test.</span> {p.test}</p>
                <p><span className="font-medium text-[color:var(--text)]">8 · Detect it in production.</span> {p.detect}</p>
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Threat Intelligence Center ---------------- */

type IntelData = Awaited<ReturnType<typeof api.getThreatIntel>>;

export function IntelView() {
  const [data, setData] = useState<IntelData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const load = async (force: boolean) => {
    setLoading(true); setError("");
    try {
      const res = await api.getThreatIntel({ force });
      setData(res);
    } catch {
      setError("Live feed unavailable in this environment (there is no CyberLab server here to fetch it). Showing the dated reference briefing below — it is NOT live data.");
    } finally { setLoading(false); }
  };
  useEffect(() => { void load(false); }, []);

  return (
    <div className="space-y-6">
      <SectionTitle bn="থ্রেট ইন্টেলিজেন্স সেন্টার" bnSub="সবসময় খোলা reference — CISA KEV-এর live তালিকা ও EPSS score। পুরনো data কখনো live বলে দেখানো হয় না।" sub="Always-open reference. Official feeds first (CISA KEV live + FIRST EPSS). Publication date is never presented as first-exploitation date, and CVSS is never treated as proof of exploitation.">
        Threat Intelligence Center
      </SectionTitle>

      <Card className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-[color:var(--text)]">CISA KEV — most recent additions</h3>
          {data ? (data.live ? <Badge tone="ok">LIVE FEED</Badge> : <Badge tone="warn">CACHED — STALE-DATA WARNING</Badge>) : <Badge>Not loaded</Badge>}
          <button type="button" onClick={() => void load(true)} disabled={loading} className="ml-auto min-h-[40px] rounded border border-[color:var(--border)] px-3 py-1.5 text-sm text-[color:var(--text)] disabled:opacity-50">{loading ? "Syncing…" : "Sync now"}</button>
        </div>
        {data ? (
          <p className="text-xs text-[color:var(--dim)]">Catalog version {data.catalogVersion} · Last successful sync: {new Date(data.fetchedAt).toLocaleString()} · EPSS: {data.epssLive ? "live from FIRST" : "unavailable this sync"} · Source: CISA KEV JSON feed (official government source, priority 1). Exploitation status for every row: <strong className="text-[color:var(--text)]">Confirmed in CISA KEV</strong>.</p>
        ) : null}
        {error ? <p role="alert" className="rounded-md border border-amber-800 bg-amber-950/30 p-3 text-sm text-amber-100">{error}</p> : null}
        {data && data.items.length ? (
          <>
          {/* Phones: one card per CVE — every field labelled, nothing cut off. */}
          <div className="space-y-2 sm:hidden">
            {data.items.map((i) => (
              <div key={i.cveID} className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface2)] p-3">
                <p className="flex flex-wrap items-center gap-2"><span className="font-mono text-[13px] font-semibold text-[color:var(--accent)]">{i.cveID}</span>{i.epss !== null ? <span className="rounded-full border border-[color:var(--border)] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--text)]">EPSS {i.epss.toFixed(3)} · {Math.round((i.epssPercentile ?? 0) * 100)}th pct</span> : null}</p>
                <p className="mt-1 text-sm font-medium text-[color:var(--text)]">{i.vendor} {i.product}</p>
                <p className="text-xs leading-relaxed text-[color:var(--dim)]">{i.name}</p>
                <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[13px]">
                  <div><dt className="text-[color:var(--dim)]">Added</dt><dd className="text-[color:var(--text)]">{i.dateAdded}</dd></div>
                  <div><dt className="text-[color:var(--dim)]">Due</dt><dd className="text-[color:var(--text)]">{i.dueDate}</dd></div>
                  <div><dt className="text-[color:var(--dim)]">Ransomware</dt><dd className="text-[color:var(--text)]">{i.ransomware}</dd></div>
                  <div><dt className="text-[color:var(--dim)]">CWE</dt><dd className="text-[color:var(--text)]">{i.cwes.join(", ") || "—"}</dd></div>
                </dl>
              </div>
            ))}
          </div>
          <div className="hidden overflow-x-auto sm:block">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="text-[color:var(--dim)]"><tr><th className="p-2 font-medium">CVE</th><th className="p-2 font-medium">Product</th><th className="p-2 font-medium">Added</th><th className="p-2 font-medium">Due</th><th className="p-2 font-medium">Ransomware</th><th className="p-2 font-medium">CWE</th><th className="p-2 font-medium">EPSS</th></tr></thead>
              <tbody>
                {data.items.map((i) => (
                  <tr key={i.cveID} className="border-t border-[color:var(--border)] align-top">
                    <td className="p-2 font-mono text-[13px] text-[color:var(--accent)]">{i.cveID}</td>
                    <td className="p-2 text-[color:var(--text)]">{i.vendor} {i.product}<p className="text-xs text-[color:var(--dim)]">{i.name}</p></td>
                    <td className="p-2 text-[color:var(--dim)]">{i.dateAdded}</td>
                    <td className="p-2 text-[color:var(--dim)]">{i.dueDate}</td>
                    <td className="p-2 text-[color:var(--dim)]">{i.ransomware}</td>
                    <td className="p-2 text-[color:var(--dim)]">{i.cwes.join(", ") || "—"}</td>
                    <td className="p-2 text-[color:var(--dim)]">{i.epss !== null ? `${i.epss.toFixed(3)} (${Math.round((i.epssPercentile ?? 0) * 100)}th pct)` : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </>
        ) : !error ? <p className="text-sm text-[color:var(--dim)]">No items loaded yet.</p> : null}
      </Card>

      <Card>
        <h3 className="mb-2 font-semibold text-[color:var(--text)]">Feed sources &amp; sync status</h3>
        {/* Phones: stacked labelled cards; ≥sm: the table. */}
        <div className="space-y-2 sm:hidden">
          {THREAT_SOURCES.map((t) => (
            <div key={t.name} className="rounded-lg border border-[color:var(--border)] p-3">
              <p className="text-sm font-semibold text-[color:var(--text)]">{t.name}</p>
              <p className="text-xs text-[color:var(--dim)]">{t.kind}</p>
              <dl className="mt-2 space-y-1 text-sm">
                <div className="flex gap-2"><dt className="w-16 shrink-0 text-[color:var(--dim)]">Access</dt><dd className="text-[color:var(--text)]">{t.access}</dd></div>
                <div className="flex gap-2"><dt className="w-16 shrink-0 text-[color:var(--dim)]">Status</dt><dd className="text-[color:var(--text)]">{t.status}<span className="block text-xs text-[color:var(--dim)]">{t.note}</span></dd></div>
              </dl>
            </div>
          ))}
        </div>
        <div className="hidden overflow-x-auto sm:block">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="text-[color:var(--dim)]"><tr><th className="p-2 font-medium">Source</th><th className="p-2 font-medium">Access</th><th className="p-2 font-medium">Status in this app</th></tr></thead>
            <tbody>
              {THREAT_SOURCES.map((t) => (
                <tr key={t.name} className="border-t border-[color:var(--border)] align-top">
                  <td className="p-2 text-[color:var(--text)]">{t.name}<p className="text-xs text-[color:var(--dim)]">{t.kind}</p></td>
                  <td className="p-2 text-[color:var(--dim)]">{t.access}</td>
                  <td className="p-2 text-[color:var(--dim)]">{t.status}<p className="text-xs">{t.note}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="space-y-3">
        <h3 className="text-base font-semibold text-[color:var(--text)]">Daily Security Intelligence Briefing — dated snapshot, {BRIEF_SNAPSHOT_DATE}</h3>
        <p className="text-sm text-[color:var(--dim)]">This briefing is a verified snapshot, not a live wire. Sections with no verified item say so explicitly — CyberLab does not invent breaches, actors, or statistics. Confirmed facts are stated as facts; anything analytical is labelled.</p>
        {BRIEF_SECTIONS.map((sec) => (
          <Card key={sec.id}>
            <h4 className="font-medium text-[color:var(--text)]">{sec.id}. {sec.title}</h4>
            {sec.item ? (
              <dl className="mt-2 grid gap-1.5 text-sm text-[color:var(--dim)]">
                <div><dt className="inline font-medium text-[color:var(--text)]">What happened? </dt><dd className="inline">{sec.item.what}</dd></div>
                <div><dt className="inline font-medium text-[color:var(--text)]">When? </dt><dd className="inline">{sec.item.when}</dd></div>
                <div><dt className="inline font-medium text-[color:var(--text)]">Affected: </dt><dd className="inline">{sec.item.affected}</dd></div>
                <div><dt className="inline font-medium text-[color:var(--text)]">Evidence: </dt><dd className="inline">{sec.item.evidence}</dd></div>
                <div><dt className="inline font-medium text-[color:var(--text)]">Practical risk: </dt><dd className="inline">{sec.item.risk}</dd></div>
                <div><dt className="inline font-medium text-[color:var(--text)]">Do this: </dt><dd className="inline">{sec.item.action}</dd></div>
                <div><dt className="inline font-medium text-[color:var(--text)]">Detect it: </dt><dd className="inline">{sec.item.detect}</dd></div>
                <div><dt className="inline font-medium text-[color:var(--text)]">Mitigation: </dt><dd className="inline">{sec.item.mitigation}</dd></div>
                <div><dt className="inline font-medium text-[color:var(--text)]">Learn it: </dt><dd className="inline">{sec.item.lesson}</dd></div>
              </dl>
            ) : <p className="mt-1 text-sm text-[color:var(--dim)]">{sec.emptyNote}</p>}
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SOC Analyst Training ---------------- */

export function SocView({ goLesson }: { goLesson: (id: string) => void }) {
  const s = useStore();
  const filter = useUnlockFilter();
  const [open, setOpen] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, (number | null)[]>>({});
  const [results, setResults] = useState<Record<string, boolean>>({});

  return (
    <div className="space-y-4">
      <JourneyStrip nextLabel="a SOC event opens after the lesson that teaches its pattern" />
      <SectionTitle eyebrow="Operations console · Step 10" orderEn={SECTION_ORDER.soc.en} orderBn={SECTION_ORDER.soc.bn} bn="SOC প্রশিক্ষণ" bnSub="প্রতিটি ঘটনা তার পাঠের পরে খোলে — আগে log পড়া শেখো, তারপর আসল triage-এর মতো সিদ্ধান্ত নাও। সব ঘটনাই simulated। এটি level শেষের প্রয়োগমূলক অনুশীলন — Skill Assessment-এর পরেই এর আসল জায়গা।" sub="Each event opens after the lesson that teaches its pattern. Every event is SIMULATED with synthetic data — triage it like the real thing: classify, judge severity, choose the professional actions. This is level-end applied practice, after the level's Skill Assessment.">
        SOC Analyst Training
      </SectionTitle>
      <div className="cl-console rounded-xl border p-3.5 font-mono text-[12.5px] leading-relaxed" role="note" aria-label="SOC console status">
        <p><span className="cl-live-dot inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" aria-hidden="true" /> SOC CONSOLE · simulated feed · {SOC_EVENTS.length} events in queue · triage = classify → severity → actions, evidence first</p>
        <p className="opacity-70">{">"} {`open an event below to work it like a shift analyst — no event here touches a real system`}</p>
      </div>
      <UnlockFilterBar total={SOC_EVENTS.length} unlockedCount={SOC_EVENTS.filter((e) => isUnlocked(s, SOC_REQUIRES[e.id]) || isDone(s, "soc", e.id)).length} showAll={filter.showAll} setShowAll={filter.setShowAll} />
      {SOC_EVENTS.map((ev) => {
        const ans = answers[ev.id] ?? ev.questions.map(() => null);
        const done = isDone(s, "soc", ev.id);
        const req = SOC_REQUIRES[ev.id] ?? [];
        const unlocked = isUnlocked(s, req) || done;
        if (!filter.showAll && !unlocked) return null;
        return (
          <Card key={ev.id}>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-[color:var(--text)]">{ev.title}</h3>
              <Badge tone="warn">SIMULATED</Badge><Badge>{ev.kind}</Badge>
              {done ? <Badge tone="ok">Triaged · {ev.xp} XP</Badge> : null}
              {unlocked ? <button type="button" className="ml-auto min-h-[40px] rounded border border-[color:var(--border)] px-3 py-1.5 text-sm text-[color:var(--text)]" aria-expanded={open === ev.id}
                onClick={() => setOpen(open === ev.id ? null : ev.id)}>{open === ev.id ? "Close" : "Open event"}</button>
              : <span className="ml-auto rounded-lg border border-[color:var(--border)] px-3 py-2 text-sm font-semibold text-[color:var(--dim)]">Locked</span>}
            </div>
            {itemDesc(s.profile.lang, ev.id) ? <p className="mt-1.5 text-[13px] leading-relaxed text-[color:var(--dim)]">{itemDesc(s.profile.lang, ev.id)}</p> : null}
            {!unlocked ? <LockedNotice requires={req} goLesson={goLesson} /> : null}
            {open === ev.id ? (
              <div className="mt-3 space-y-4">
                <CodeBlock code={ev.log} label="synthetic event data (simulated)" />
                {ev.questions.map((q, qi) => (
                  <fieldset key={qi} className="rounded-md border border-[color:var(--border)] bg-[color:var(--surface2)] p-3">
                    <legend className="px-1 text-sm font-medium text-[color:var(--text)]">{s.profile.lang === "bn" ? (SOC_BN[ev.id]?.[qi]?.prompt ?? q.prompt) : q.prompt}</legend>
                    <div className="mt-2 space-y-1.5">
                      {q.options.map((opt, oi) => (
                        <label key={oi} className={`flex min-h-[40px] cursor-pointer items-center gap-2 rounded border px-3 py-2 text-sm ${results[ev.id] && oi === q.answer ? "border-emerald-700 bg-emerald-950/40" : ans[qi] === oi ? "border-[color:var(--accent)] bg-sky-950/30" : "border-[color:var(--border)]"}`}>
                          <input type="radio" name={`${ev.id}-${qi}`} className="accent-sky-500" checked={ans[qi] === oi} disabled={results[ev.id]}
                            onChange={() => setAnswers((a) => ({ ...a, [ev.id]: (a[ev.id] ?? ev.questions.map(() => null)).map((v, i) => (i === qi ? oi : v)) }))} />
                          <span className="text-[color:var(--text)]">{s.profile.lang === "bn" ? (SOC_BN[ev.id]?.[qi]?.options?.[oi] ?? TASK_OPTIONS_BN[ev.id]?.[qi]?.[oi] ?? opt) : opt}</span>
                        </label>
                      ))}
                    </div>
                    {results[ev.id] ? <p className="mt-2 text-[13px] text-[color:var(--dim)]">{s.profile.lang === "bn" ? (SOC_BN[ev.id]?.[qi]?.explain ?? q.explain) : q.explain}</p> : null}
                  </fieldset>
                ))}
                {results[ev.id] ? (
                  <p role="status" className="text-sm text-emerald-300">Event triaged correctly — verdict, severity, and actions all match the evidence. That is the SOC skill: evidence first, escalation with a timeline and preserved evidence.</p>
                ) : (
                  <button type="button" disabled={ans.some((a) => a === null)} className="min-h-[44px] rounded bg-[color:var(--accent2)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
                    onClick={() => {
                      const allRight = ev.questions.every((q, qi) => ans[qi] === q.answer);
                      if (allRight) { setResults((r) => ({ ...r, [ev.id]: true })); completeItem("soc", ev.id, ev.xp, 100, `SOC triage: ${ev.title}`); }
                      else setResults((r) => ({ ...r, [ev.id]: false }));
                    }}>Submit triage</button>
                )}
                {results[ev.id] === false ? <p role="alert" className="text-sm text-red-300">Not yet — re-read the event data and reconsider classification/severity. Retry freely; XP only on a fully correct triage.</p> : null}
              </div>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}

/* ---------------- Penetration Testing Workspace ---------------- */

export function PentestView({ goLesson }: { goLesson: (id: string) => void }) {
  const s = useStore();
  const pentestUnlocked = isUnlocked(s, PENTEST_REQUIRES) || s.pentestDone.length > 0;
  const tpl = TEMPLATES.find((t) => t.id === "tpl-pentest-report");
  return (
    <div className="space-y-6">
      <JourneyStrip nextLabel="the workspace opens after the Security Tools methodology lesson" />
      <SectionTitle eyebrow="Applied workspace · Step 10" orderEn={SECTION_ORDER.pentest.en} orderBn={SECTION_ORDER.pentest.bn} bn="পেনটেস্ট ওয়ার্কস্পেস" bnSub="টুল ব্যবহারের পদ্ধতির পাঠ শেষ হলেই এই workspace খোলে — আগে পদ্ধতি, তারপর প্রয়োগ। প্রতিটি ধাপে অনুমোদিত target লেখা আছে। এটি level শেষের প্রয়োগমূলক জায়গা, পাঠের বদলি নয়।" sub="The workspace opens after the Security Tools methodology lesson — method first, then application. Every step names its authorized target; nothing here configures a tool against arbitrary public targets. Open after the Level 7 Skill Assessment in the serial workflow.">
        Penetration Testing Workspace
      </SectionTitle>
      {!pentestUnlocked ? <LockedNotice requires={PENTEST_REQUIRES} goLesson={goLesson} /> : null}
      {pentestUnlocked ? (<>
      <p className="rounded-md border border-amber-800 bg-amber-950/30 p-3 text-sm text-amber-100">Authorization comes first: written scope and rules of engagement before any tool runs. Targets in this workspace are localhost, your own VMs, isolated Docker, emulators, or intentionally vulnerable training apps only.</p>
      <Card>
        <h3 className="mb-2 font-semibold text-[color:var(--text)]">Engagement checklist ({s.pentestDone.length}/{PENTEST_STEPS.length})</h3>
        <div className="space-y-1.5">
          {PENTEST_STEPS.map((step, i) => (
            <label key={step.title} className="flex min-h-[44px] cursor-pointer items-start gap-3 rounded border border-[color:var(--border)] px-3 py-2">
              <input type="checkbox" className="mt-1 accent-sky-500" checked={s.pentestDone.includes(step.title)} onChange={() => togglePentest(step.title)} />
              <span className="text-sm"><span className="font-medium text-[color:var(--text)]">{i + 1}. {step.title}</span><br /><span className="text-[color:var(--dim)]">{step.detail}</span></span>
            </label>
          ))}
        </div>
      </Card>
      <Card>
        <h3 className="mb-2 font-semibold text-[color:var(--text)]">Tool drills — each with its defined authorized target</h3>
        <div className="space-y-2">
          {TOOL_DRILLS.map((d) => (
            <div key={d.tool} className="rounded-md border border-[color:var(--border)] bg-[color:var(--surface2)] p-3 text-sm">
              <p className="font-medium text-[color:var(--text)]">{d.tool} <span className="ml-1 font-normal text-[color:var(--accent)]">Target: {d.target}</span></p>
              <p className="mt-0.5 text-[color:var(--dim)]">{d.drill}</p>
            </div>
          ))}
        </div>
      </Card>
      {tpl ? (
        <Card className="space-y-2">
          <h3 className="font-semibold text-[color:var(--text)]">{tpl.title}</h3>
          <CodeBlock code={tpl.body} label="Markdown template" />
          <button type="button" className="min-h-[40px] rounded border border-[color:var(--border)] px-3 py-1.5 text-sm text-[color:var(--text)]"
            onClick={() => downloadText("pentest-report-template.md", tpl.body, "text/markdown")}>Download template (.md)</button>
        </Card>
      ) : null}
      </>) : null}
    </div>
  );
}

/* ---------------- Career Center ---------------- */

export function CareersView() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="space-y-4">
      <SectionTitle bn="ক্যারিয়ার সেন্টার" bnSub="সবসময় খোলা — প্রতিটি পেশার জন্য কোন পাঠ, কোন project আর কী প্রমাণ লাগবে, তার সৎ ধারণা।" sub="Always open. Realistic expectations throughout: no role, salary, certification, or income is guaranteed by completing CyberLab. What the platform gives you is evidence — passed assessments, projects, and reports.">
        Career Center
      </SectionTitle>
      {CAREERS.map((c) => (
        <Card key={c.role}>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-[color:var(--text)]">{c.role}</h3>
            <button type="button" className="ml-auto min-h-[40px] rounded border border-[color:var(--border)] px-3 py-1.5 text-sm text-[color:var(--text)]" aria-expanded={open === c.role}
              onClick={() => setOpen(open === c.role ? null : c.role)}>{open === c.role ? "Hide path" : "View path"}</button>
          </div>
          <p className="mt-1 text-sm text-[color:var(--dim)]">{c.summary}</p>
          {open === c.role ? (
            <div className="mt-3 grid gap-3 text-sm text-[color:var(--dim)] md:grid-cols-2">
              <div><p className="font-medium text-[color:var(--text)]">Required knowledge</p><ul className="mt-1 list-disc space-y-0.5 pl-5">{c.knowledge.map((k) => <li key={k}>{k}</li>)}</ul></div>
              <div><p className="font-medium text-[color:var(--text)]">Practical projects to show</p><ul className="mt-1 list-disc space-y-0.5 pl-5">{c.projects.map((k) => <li key={k}>{k}</li>)}</ul></div>
              <div><p className="font-medium text-[color:var(--text)]">Portfolio</p><ul className="mt-1 list-disc space-y-0.5 pl-5">{c.portfolio.map((k) => <li key={k}>{k}</li>)}</ul></div>
              <div><p className="font-medium text-[color:var(--text)]">Interview preparation</p><ul className="mt-1 list-disc space-y-0.5 pl-5">{c.interview.map((k) => <li key={k}>{k}</li>)}</ul></div>
              <div><p className="font-medium text-[color:var(--text)]">Certifications employers mention</p><ul className="mt-1 list-disc space-y-0.5 pl-5">{c.certs.map((k) => <li key={k}>{k}</li>)}</ul></div>
              <div><p className="font-medium text-[color:var(--text)]">Realistic expectation</p><p className="mt-1">{c.expectation}</p><p className="mt-2 font-medium text-[color:var(--text)]">Suggested next path</p><p className="mt-1">{c.next}</p></div>
            </div>
          ) : null}
        </Card>
      ))}
    </div>
  );
}

/* ---------------- Progress & Analytics ---------------- */

function skillEvidence(s: LocalState) {
  return SKILLS.map((skill) => {
    const lessons = ALL_LESSONS.filter((l) => l.skill === skill);
    const doneLessons = lessons.filter((l) => isDone(s, "lesson", l.id)).length;
    const assessments = SKILL_ASSESSMENTS.filter((a) => a.skill === skill && isDone(s, "assessment", a.id)).length;
    const evidence = doneLessons + assessments * 2;
    const step = evidence === 0 ? "Not started" : evidence <= 1 ? "Beginner" : evidence <= 3 ? "Foundation" : evidence <= 5 ? "Intermediate" : evidence <= 8 ? "Advanced" : "Professional Readiness";
    return { skill, doneLessons, totalLessons: lessons.length, assessments, step };
  });
}

export function AnalyticsView({ goLesson }: { goLesson: (id: string) => void }) {
  const s = useStore();
  const totalAttempts = s.attempts.length;
  const accuracy = totalAttempts ? Math.round((s.attempts.reduce((sum, a) => sum + a.score, 0) / s.attempts.reduce((sum, a) => sum + a.total, 0)) * 100) : 0;
  const byQuiz = new Map<string, { score: number; total: number; label: string }>();
  for (const a of s.attempts) {
    const cur = byQuiz.get(a.quizId) ?? { score: 0, total: 0, label: a.quizId };
    cur.score += a.score; cur.total += a.total;
    byQuiz.set(a.quizId, cur);
  }
  const weakQuizzes = [...byQuiz.entries()].filter(([, v]) => v.total > 0 && v.score / v.total < 0.7);
  const lessonForQuiz = (quizId: string) => ALL_LESSONS.find((l) => l.id === quizId || quizId.startsWith(l.id));
  const finals = s.progress.filter((p) => p.kind === "final");

  return (
    <div className="space-y-6">
      <SectionTitle bn="অগ্রগতি ও বিশ্লেষণ" bnSub="কোন বিষয়ে দুর্বল, ঠিক কোন পাঠ আবার পড়তে হবে — সব এখানে পরিষ্কার দেখা যাবে।" sub="Accuracy is broken down per lesson, per checkpoint, and per skill. Skill steps are earned through passed assessments — never through time spent or clicks.">
        Progress &amp; Analytics
      </SectionTitle>
      <div className="grid gap-3 sm:grid-cols-3">
        <Card><p className="text-2xl font-semibold text-[color:var(--text)]">{accuracy}%</p><p className="text-sm text-[color:var(--dim)]">Overall attempt accuracy ({totalAttempts} attempts)</p></Card>
        <Card><p className="text-2xl font-semibold text-[color:var(--text)]">{s.progress.length}</p><p className="text-sm text-[color:var(--dim)]">Completed items (lessons, checkpoints, finals, labs, missions, CTF, SOC, projects)</p></Card>
        <Card><p className="text-2xl font-semibold text-[color:var(--text)]">{finals.length}</p><p className="text-sm text-[color:var(--dim)]">Level badges earned (Level Finals passed)</p></Card>
      </div>

      <Card>
        <h3 className="mb-2 font-semibold text-[color:var(--text)]">Skill evidence</h3>
        <div className="space-y-2">
          {skillEvidence(s).map((e) => (
            <div key={e.skill} className="flex flex-wrap items-center gap-2 text-sm">
              <span className="w-40 text-[color:var(--text)]">{e.skill}</span>
              <span className="flex-1 text-[color:var(--dim)]">{e.doneLessons}/{e.totalLessons} lessons · {e.assessments} skill assessment(s) passed</span>
              <Badge tone={e.step === "Not started" ? "dim" : "accent"}>{e.step}</Badge>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-2 font-semibold text-[color:var(--text)]">Weak topics — exact revision targets</h3>
        {weakQuizzes.length ? (
          <ul className="space-y-2 text-sm text-[color:var(--dim)]">
            {weakQuizzes.map(([quizId, v]) => {
              const lesson = lessonForQuiz(quizId);
              return (
                <li key={quizId} className="flex flex-wrap items-center gap-2">
                  <span>{quizId}: {v.score}/{v.total} across attempts.</span>
                  {lesson ? <button type="button" className="min-h-[36px] rounded border border-[color:var(--border)] px-2 py-1 text-xs text-[color:var(--accent)]" onClick={() => goLesson(lesson.id)}>Revise: {lesson.title}</button> : <span>Revise from the matching checkpoint in Learning Paths.</span>}
                </li>
              );
            })}
          </ul>
        ) : <p className="text-sm text-[color:var(--dim)]">No topic is below 70% yet — either you are doing well, or you have not attempted enough. Both are fine; the path knows the order.</p>}
      </Card>

      <Card>
        <h3 className="mb-2 font-semibold text-[color:var(--text)]">Learning history</h3>
        {s.activity.length ? (
          <ul className="space-y-1 text-sm text-[color:var(--dim)]">
            {[...s.activity].slice(-30).reverse().map((a, i) => <li key={i}><span className="text-[color:var(--text)]">{a.label}</span> — {new Date(a.at).toLocaleString()}</li>)}
          </ul>
        ) : <p className="text-sm text-[color:var(--dim)]">No activity yet. Your first completed quiz or lesson will appear here.</p>}
      </Card>
    </div>
  );
}

/* ---------------- Account Security (Level 11 track) ---------------- */

export function AccountSecurityView() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-4">
      <SectionTitle bn="অ্যাকাউন্ট সুরক্ষা" bnSub="সবসময় খোলা — নিজের Facebook, Instagram, Google ও bank account সুরক্ষিত রাখার ধাপে ধাপে নির্দেশনা। শুধুই প্রতিরক্ষা।" sub="Always open — Level 11 track, defensive only. Secure your own accounts, understand the attacks conceptually on CyberLab's lab apps, and learn disclosure the professional way.">
        Account Security
      </SectionTitle>
      <p className="rounded-md border border-red-900 bg-red-950/30 p-3 text-sm text-red-100">{ACCOUNT_BOUNDARY}</p>
      {ACCOUNT_TOPICS.map((t, i) => (
        <Card key={t.title}>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-[color:var(--text)]">{t.title}</h3>
            <button type="button" className="ml-auto min-h-[40px] rounded border border-[color:var(--border)] px-3 py-1.5 text-sm text-[color:var(--text)]" aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}>{open === i ? "Hide" : "Open"}</button>
          </div>
          {open === i ? (
            <div className="mt-2 space-y-2">
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[color:var(--dim)]">{t.points.map((p) => <li key={p.slice(0, 40)}>{p}</li>)}</ul>
              <p className="rounded-md border border-[color:var(--border)] bg-[color:var(--surface2)] p-3 text-sm text-[color:var(--text)]"><span className="font-medium">Practical lab:</span> <span className="text-[color:var(--dim)]">{t.lab}</span></p>
            </div>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
