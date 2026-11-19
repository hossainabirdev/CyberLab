import { tx as txI } from "./i18n";
import { getState } from "./store";
// Honours CSE syllabus match notices (user order, 12 Nov 2026).
// A level/lesson carries the ★ notice ONLY where a match with the user's
// Uttara University BSc CSE (Honours) syllabus is verified. Course CODES
// appear only where verified (CSE0613101, CSE0613102, CSE0611201,
// CSE0613499); every other course is named only — never invent a code.
// Security-specific levels get NO star: they carry the honest career line
// on their level header instead.

export type HonoursMatch = { kind: "strong" | "match" | "partial"; en: string; bn: string };

export const HONOURS_MATCH: Record<number, HonoursMatch> = {
  1: {
    kind: "partial",
    en: "Computer Architecture (CSE0611201) and Computer Fundamentals. This level teaches the machine from a defender's viewpoint — it does NOT cover the ALU, pipelining, cache memory, instruction sets (ISA), or the assembly depth those courses examine. Use your course materials for that exam depth.",
    bn: "Computer Architecture (CSE0611201) ও Computer Fundamentals। এই level machine-কে একজন রক্ষকের দৃষ্টিকোণ থেকে শেখায় — ওই course গুলো পরীক্ষায় যেই ALU, pipelining, cache memory, instruction set (ISA) ও assembly-র গভীরতা চায়, তা এখানে cover হয় না। পরীক্ষার সেই গভীরতার জন্য তোমার course-এর materials ব্যবহার করো।",
  },
  2: {
    kind: "match",
    en: "Computer Networks. The addressing, routing, DNS and packet skills here are the same foundations that course examines — practised here against your own lab traffic.",
    bn: "Computer Networks। এখানকার addressing, routing, DNS ও packet দক্ষতা হুবহু সেই ভিত্তি যা ওই course পরীক্ষা করে — এখানে নিজের lab traffic-এর উপর অনুশীলন করা।",
  },
  3: {
    kind: "match",
    en: "Operating Systems. Processes, permissions, services and shell work here mirror that course's core topics, taught hands-on instead of only in theory.",
    bn: "Operating Systems। এখানকার process, permission, service ও shell কাজ ওই course-এর মূল বিষয়গুলোর প্রতিচ্ছবি — শুধু তত্ত্বে নয়, হাতে-কলমে শেখানো।",
  },
  4: {
    kind: "strong",
    en: "Structured Programming Language (CSE0613101) and Structured Programming Lab (CSE0613102) — a STRONG match. The C track especially (types, arrays, pointers, structs, memory) is this course's core, taught here step by step from zero; the Python and JavaScript tracks extend the same foundations.",
    bn: "Structured Programming Language (CSE0613101) ও Structured Programming Lab (CSE0613102) — শক্তিশালী মিল। বিশেষ করে C track (type, array, pointer, struct, memory) এই course-এর প্রাণ, এখানে শূন্য থেকে ধাপে ধাপে শেখানো; Python ও JavaScript track একই ভিত্তিকে বিস্তার করে।",
  },
  5: {
    kind: "match",
    en: "Web Programming. HTML, HTTP, sessions, APIs and backend basics here are that course's subject matter — with the security layer (vulnerable vs secure) your degree treats lightly.",
    bn: "Web Programming। এখানকার HTML, HTTP, session, API ও backend মূল বিষয় ওই course-এর বিষয়বস্তু — সঙ্গে নিরাপত্তা স্তর (vulnerable বনাম secure), যা তোমার degree হালকাভাবে দেখে।",
  },
  15: {
    kind: "match",
    en: "Cloud Computing. This level's cloud architecture and deployment topics align with that course; the security review angle is CyberLab's own addition.",
    bn: "Cloud Computing। এই level-এর cloud architecture ও deployment বিষয় ওই course-এর সঙ্গে মেলে; security review দৃষ্টিকোণ CyberLab-এর নিজের সংযোজন।",
  },
  16: {
    kind: "match",
    en: "Mobile Application Development. The app structure and platform topics here support that course, with a mobile-security focus added.",
    bn: "Mobile Application Development। এখানকার app কাঠামো ও platform বিষয় ওই course-কে সাহায্য করে, সঙ্গে mobile-security মনোযোগ যোগ করা।",
  },
  21: {
    kind: "match",
    en: "Research Methodology. Question framing, evidence handling, and reporting here follow that course's discipline, applied to security research.",
    bn: "Research Methodology। এখানকার প্রশ্ন গঠন, প্রমাণ সামলানো ও reporting ওই course-এর শৃঙ্খলা অনুসরণ করে, security research-এ প্রয়োগ করা।",
  },
  22: {
    kind: "match",
    en: "Final Year Project (CSE0613499, 6 credits). The eight capstone projects here are scoped and documented the way that course's project is examined — problem, design, build, evidence, report.",
    bn: "Final Year Project (CSE0613499, 6 credits)। এখানকার আটটি capstone project ওই course-এর project যেভাবে পরীক্ষিত হয় সেভাবেই গঠিত ও নথিবদ্ধ — সমস্যা, design, নির্মাণ, প্রমাণ, report।",
  },
  23: {
    kind: "match",
    en: "Discrete Mathematics. Sets, logic, proofs, counting, relations and graphs here are that course's core — practised with worked examples and real Python, not only definitions.",
    bn: "Discrete Mathematics। এখানকার set, logic, proof, counting, relation ও graph ওই course-এর প্রাণ — শুধু সংজ্ঞায় নয়, worked example ও আসল Python দিয়ে অনুশীলন করা।",
  },
  24: {
    kind: "match",
    en: "Data Structures and Algorithms. Arrays to graphs, Big-O on every algorithm, recursion and dynamic programming — the same topics that course examines, taught as runnable code with complexity analysis.",
    bn: "Data Structures ও Algorithms। Array থেকে graph, প্রতিটা algorithm-এ Big-O, recursion ও dynamic programming — ওই course যা পরীক্ষা করে হুবহু তাই, complexity analysis-সহ runnable code হিসেবে শেখানো।",
  },
  25: {
    kind: "match",
    en: "Digital Logic Design. Boolean algebra, gates, Karnaugh maps, flip-flops and counters here mirror that course's syllabus — every circuit worked out on a truth table first.",
    bn: "Digital Logic Design। এখানকার Boolean algebra, gate, Karnaugh map, flip-flop ও counter ওই course-এর syllabus-এর প্রতিচ্ছবি — প্রতিটা circuit আগে truth table-এ worked out করা।",
  },
  26: {
    kind: "match",
    en: "Microprocessors and Interfacing. CPU architecture, registers, addressing modes and assembly here support that course — with register-level traces and ARM concepts for modern processors.",
    bn: "Microprocessors ও Interfacing। এখানকার CPU architecture, register, addressing mode ও assembly ওই course-কে সাহায্য করে — register-level trace আর modern processor-এর জন্য ARM concept-সহ।",
  },
  27: {
    kind: "match",
    en: "Database Management Systems. ER modelling, SQL, normalization to BCNF, ACID transactions and indexing here are that course's core — practised on a real local practice database.",
    bn: "Database Management Systems। এখানকার ER modelling, SQL, BCNF পর্যন্ত normalization, ACID transaction ও indexing ওই course-এর প্রাণ — আসল local practice database-এ অনুশীলন করা।",
  },
  28: {
    kind: "match",
    en: "Software Engineering. The SDLC, requirements, UML, design patterns, testing and Git workflow here follow that course's discipline — applied in a small team-style project, not only read about.",
    bn: "Software Engineering। এখানকার SDLC, requirements, UML, design pattern, testing ও Git workflow ওই course-এর শৃঙ্খলা অনুসরণ করে — শুধু পড়া নয়, ছোট team-style project-এ প্রয়োগ করা।",
  },
  29: {
    kind: "match",
    en: "Theory of Computation. Automata, regular and context-free languages, Turing machines and complexity classes here mirror that course — with worked proofs and step-by-step constructions.",
    bn: "Theory of Computation। এখানকার automata, regular ও context-free language, Turing machine ও complexity class ওই course-এর প্রতিচ্ছবি — worked proof ও ধাপে ধাপে construction-সহ।",
  },
  30: {
    kind: "match",
    en: "Compiler Design. Lexer, parser, semantic analysis, intermediate code, code generation and optimization here are that course's pipeline — built piece by piece into a small working compiler.",
    bn: "Compiler Design। এখানকার lexer, parser, semantic analysis, intermediate code, code generation ও optimization ওই course-এর pipeline — টুকরো টুকরো বানিয়ে একটা ছোট working compiler-এ গাঁথা।",
  },
  31: {
    kind: "match",
    en: "Artificial Intelligence / Machine Learning basics. Search, knowledge representation, supervised and unsupervised learning and honest evaluation here support that course — real runnable Python on small datasets.",
    bn: "Artificial Intelligence / Machine Learning basics। এখানকার search, knowledge representation, supervised ও unsupervised learning এবং honest evaluation ওই course-কে সাহায্য করে — ছোট dataset-এ আসল runnable Python।",
  },
};

// Security-specific levels: verified as NOT direct syllabus courses, so no
// star — the honest career line on the level header only.
export const HONOURS_CAREER_LEVELS: ReadonlySet<number> = new Set([6, 8, 9, 10, 12, 13, 14, 17, 18, 19, 20]);

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--c-project)" aria-hidden="true" className="mt-0.5 shrink-0">
      <path d="M12 2.6l2.83 5.98 6.57.83-4.82 4.53 1.26 6.49L12 17.2l-5.84 3.23 1.26-6.49L2.6 9.41l6.57-.83L12 2.6z" />
    </svg>
  );
}

export function HonoursNotice({ level, isBn, variant }: { level: number; isBn: boolean; variant: "level" | "lesson" }) {
  const m = HONOURS_MATCH[level];
  if (m) {
    const label = m.kind === "partial"
      ? txI(getState().profile.lang, "Partial match with your Honours CSE syllabus", "Honours CSE-তে আংশিক মিল")
      : txI(getState().profile.lang, "Matches your Honours CSE syllabus", "Honours CSE-তে মিল আছে");
    return (
      <div className="cl-callout cl-callout-star flex items-start gap-2 text-sm leading-relaxed text-[color:var(--dim)]" role="note">
        <StarIcon />
        <p><strong className="cl-callout-title">{label}</strong> — {isBn ? m.bn : m.en}</p>
      </div>
    );
  }
  if (variant === "level" && HONOURS_CAREER_LEVELS.has(level)) {
    return (
      <p className="text-[13px] leading-relaxed text-[color:var(--dim)]">
        {txI(getState().profile.lang, "Not a direct Honours CSE course — but directly useful on the security career track.", "Honours CSE-র সরাসরি course না হলেও security career track-এ কাজে লাগবে।")}
      </p>
    );
  }
  return null;
}
