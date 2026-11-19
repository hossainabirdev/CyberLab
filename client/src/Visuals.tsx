import type { Lesson } from "./catalog";
import { tx as txI } from "./i18n";
import { getState } from "./store";

/** Diagram prose labels follow the UI language; technical terms stay English. */
const dtx = (en: string, bn: string) => txI(getState().profile.lang, en, bn);

/* ===== CyberLab mark — hand-drawn style: shield outline broken by a circuit
   trace that ends in a terminal prompt ">_". Drawn once, used everywhere. ===== */
export function CyberLabLogo({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" role="img" aria-label="CyberLab logo" className="shrink-0">
      <path d="M24 3.5 40 9.5v13c0 10.5-6.8 17.6-16 21.5C14.8 40.1 8 33 8 22.5v-13L24 3.5Z" stroke="var(--c-learn)" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M13 15h8.5a3 3 0 0 1 3 3v3" stroke="var(--c-lab)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="13" cy="15" r="2.1" fill="var(--c-lab)" />
      <path d="M35 15h-5.5a3 3 0 0 0-3 3v7" stroke="var(--c-mission)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="35" cy="15" r="2.1" fill="var(--c-mission)" />
      <path d="M17.5 24.5 22 28l-4.5 3.5M24.5 33.5h7" stroke="var(--text)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** One drawn icon per section — consistent 2px stroke, no emoji. */
export function SectionIcon({ kind, size = 20, color = "currentColor" }: { kind: string; size?: number; color?: string }) {
  const p = { stroke: color, strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  const paths: Record<string, React.ReactNode> = {
    dashboard: <><circle cx="12" cy="12" r="8.5" {...p} /><path d="M12 7v5l3.5 2" {...p} /></>,
    paths: <><circle cx="6" cy="18" r="2.6" {...p} /><circle cx="12" cy="6" r="2.6" {...p} /><circle cx="18" cy="18" r="2.6" {...p} /><path d="M7.5 15.8 10.5 8.5M13.5 8.5 16.5 15.8" {...p} strokeDasharray="3 3" /></>,
    courses: <><path d="M5 4.5h11A2.5 2.5 0 0 1 18.5 7v12.5H7A2 2 0 0 1 5 17.5v-13Z" {...p} /><path d="M5 17.5A2.5 2.5 0 0 1 7.5 15H18.5" {...p} /></>,
    labs: <><path d="M10 3.5h4M11 3.5v5L5.8 18a2 2 0 0 0 1.8 3h8.8a2 2 0 0 0 1.8-3L13 8.5v-5" {...p} /><path d="M8 15h8" {...p} /></>,
    terminal: <><rect x="3" y="4.5" width="18" height="15" rx="2.5" {...p} /><path d="M7 9.5 10.5 12 7 14.5M12.5 15.5H17" {...p} /></>,
    universal: <><path d="M8.5 7 4 12l4.5 5M15.5 7 20 12l-4.5 5M13.5 4l-3 16" {...p} /></>,
    missions: <><rect x="3.5" y="7" width="17" height="13" rx="2" {...p} /><path d="M3.5 10.5h17M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" {...p} /></>,
    ctf: <><path d="M5 21V4" {...p} /><path d="M5 4.8c4-2.4 7 2.2 12 .3v7.4c-5 1.9-8-2.7-12-.3" {...p} fill={color} fillOpacity=".18" /></>,
    projects: <><rect x="4" y="4" width="16" height="12" rx="2" {...p} /><path d="M9 20h6M12 16v4" {...p} /></>,
    assessment: <><circle cx="12" cy="12" r="8.5" {...p} /><circle cx="12" cy="12" r="4.5" {...p} /><circle cx="12" cy="12" r="1" fill={color} /></>,
    soc: <><path d="M3.5 12h4l2-5 3.5 9 2.2-4h5.3" {...p} /></>,
    pentest: <><circle cx="10.5" cy="10.5" r="6.5" {...p} /><path d="M15.5 15.5 21 21M8 10.5h5M10.5 8v5" {...p} /></>,
    attack: <><circle cx="12" cy="12" r="7.5" {...p} /><circle cx="12" cy="12" r="3.5" {...p} /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" {...p} /></>,
    kb: <><path d="M6 3.5v17M18 3.5v17M6 7h12M6 12h12" {...p} /><rect x="4" y="3" width="16" height="18" rx="1.5" {...p} /></>,
    intel: <><circle cx="12" cy="12" r="3" {...p} /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" {...p} /></>,
    research: <><path d="M8 3.5h8L19.5 7v13.5h-15V3.5H8Z" {...p} /><path d="M15.5 3.5v4h4M8.5 13h7M8.5 16.5h7" {...p} /></>,
    account: <><rect x="5" y="10.5" width="14" height="9.5" rx="2" {...p} /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" {...p} /></>,
    careers: <><path d="M12 3.5 21 8l-9 4.5L3 8l9-4.5Z" {...p} /><path d="M6.5 10.5V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-5.5M21 8v6" {...p} /></>,
    analytics: <><path d="M4 20V10M9.5 20V4M15 20v-8M20.5 20V7" {...p} strokeWidth={2.6} /></>,
    settings: <><circle cx="12" cy="12" r="3.2" {...p} /><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1" {...p} /></>,
    lock: <><rect x="5" y="10.5" width="14" height="9.5" rx="2" {...p} /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" {...p} /></>,
    unlock: <><rect x="5" y="10.5" width="14" height="9.5" rx="2" {...p} /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 6.9-.8" {...p} /></>,
    check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" {...p} strokeWidth={2.4} />,
    arrow: <path d="M4 12h15M14 6l6 6-6 6" {...p} />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">{paths[kind] ?? paths.dashboard}</svg>;
}

/** Named track palette — each family of sections owns its colour. */
export const TRACK_COLOR: Record<string, string> = {
  learn: "var(--c-learn)", lab: "var(--c-lab)", mission: "var(--c-mission)", ctf: "var(--c-ctf)",
  project: "var(--c-project)", intel: "var(--c-intel)", terminal: "var(--c-terminal)", soc: "var(--c-soc)",
};
export function trackForView(view: string): string {
  if (["labs"].includes(view)) return TRACK_COLOR.lab!;
  if (["missions"].includes(view)) return TRACK_COLOR.mission!;
  if (["ctf", "attack"].includes(view)) return TRACK_COLOR.ctf!;
  if (["projects", "research"].includes(view)) return TRACK_COLOR.project!;
  if (["intel"].includes(view)) return TRACK_COLOR.intel!;
  if (["terminal"].includes(view)) return TRACK_COLOR.terminal!;
  if (["soc"].includes(view)) return TRACK_COLOR.soc!;
  return TRACK_COLOR.learn!;
}


// Per-level / per-track accent — restrained, one accent per level band
export const LEVEL_ACCENTS = [
  "#22D3EE", "#38BDF8", "#10B981", "#84CC16", "#F59E0B", "#F97316",
  "#F43F5E", "#8B5CF6", "#22D3EE", "#38BDF8", "#10B981", "#84CC16",
  "#F59E0B", "#F97316", "#F43F5E", "#8B5CF6", "#22D3EE", "#38BDF8",
  "#10B981", "#84CC16", "#F59E0B", "#F97316", "#F43F5E",
];
export function levelAccent(level: number): string {
  return LEVEL_ACCENTS[((level % LEVEL_ACCENTS.length) + LEVEL_ACCENTS.length) % LEVEL_ACCENTS.length] ?? "#38bdf8";
}
export function skillAccent(skill: string): string {
  const map: Record<string, string> = {
    Networking: "#38BDF8", Linux: "#F59E0B", Windows: "#60A5FA", Python: "#10B981",
    C: "#8B5CF6", "Web Security": "#F43F5E", "API Security": "#F97316", "Cloud Security": "#22D3EE",
    "Android Security": "#84CC16", Forensics: "#D946EF", "Malware Analysis": "#EC4899",
    "Threat Detection": "#818CF8", "Penetration Testing": "#F97316",
  };
  return map[skill] ?? "#38bdf8";
}

export function ProgressRing({ value, size = 72, stroke = 7, color = "#38bdf8", label }: { value: number; size?: number; stroke?: number; color?: string; label?: string }) {
  const pct = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative inline-flex shrink-0 items-center justify-center" style={{ width: size, height: size }} role="img" aria-label={label ?? `${Math.round(pct)} percent`}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth={stroke} />
        <circle className="cl-ring-anim" cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c - (pct / 100) * c} />
      </svg>
      <span className="absolute text-center font-semibold text-[color:var(--text)]" style={{ fontSize: size >= 70 ? 15 : 11 }}>{Math.round(pct)}%</span>
    </div>
  );
}

export function XpBar({ xp, goal = 500 }: { xp: number; goal?: number }) {
  const pct = Math.min(100, (xp / goal) * 100);
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs text-[color:var(--dim)]"><span>XP progress</span><span>{xp} / {goal} XP to next milestone</span></div>
      <div className="h-2.5 overflow-hidden rounded-full bg-[color:var(--surface2)]"><div className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 transition-all" style={{ width: `${pct}%` }} /></div>
    </div>
  );
}

// Illustrated header — inline SVG, no external images. Topic picked from skill/title.
export function LessonIllustration({ lesson, height = 120 }: { lesson: Lesson; height?: number }) {
  const accent = skillAccent(lesson.skill);
  const t = (lesson.title + " " + lesson.skill + " " + lesson.diagramTitle).toLowerCase();
  const kind = t.includes("network") || t.includes("dns") || t.includes("osi") || t.includes("tcp") || t.includes("packet") ? "network"
    : t.includes("python") || t.includes("code") || t.includes("javascript") || t.includes("programming") || lesson.code.lang.toLowerCase().includes("python") ? "code"
    : t.includes("linux") || t.includes("terminal") || t.includes("bash") || t.includes("powershell") || t.includes("windows") ? "terminal"
    : t.includes("android") || t.includes("mobile") || t.includes("phone") ? "phone"
    : t.includes("crypto") || t.includes("password") || t.includes("auth") || t.includes("identity") ? "lock"
    : t.includes("web") || t.includes("http") || t.includes("session") || t.includes("sql") ? "web"
    : t.includes("cloud") || t.includes("server") ? "server"
    : "shield";
  return (
    <div className="cl-illus relative w-full overflow-hidden rounded-xl border border-[color:var(--border)]" style={{ height, background: `linear-gradient(120deg, color-mix(in srgb, ${accent} 22%, var(--surface)), var(--surface) 62%)` }} role="img" aria-label={`${lesson.skill} illustration`}>
      <svg viewBox="0 0 640 140" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="560" cy="18" r="90" fill={accent} opacity="0.12" /><circle cx="60" cy="130" r="70" fill={accent} opacity="0.08" />
        {kind === "network" && <g stroke={accent} strokeWidth="3" fill="var(--surface)" strokeLinejoin="round"><path d="M110 70 H250 M390 70 H530 M320 38 V52" fill="none" /><rect x="40" y="48" width="70" height="44" rx="8" /><rect x="250" y="52" width="140" height="36" rx="10" /><rect x="530" y="48" width="70" height="44" rx="8" /><text x="75" y="74" textAnchor="middle" fill="var(--text)" stroke="none" fontSize="11">PC</text><text x="320" y="74" textAnchor="middle" fill="var(--text)" stroke="none" fontSize="11">ROUTER / SWITCH</text><text x="565" y="74" textAnchor="middle" fill="var(--text)" stroke="none" fontSize="11">SERVER</text><circle cx="320" cy="26" r="12" fill={accent} stroke="none" /></g>}
        {kind === "code" && <g><rect x="170" y="18" width="300" height="104" rx="10" fill="#0b1220" stroke={accent} strokeWidth="2" /><circle cx="190" cy="34" r="5" fill="#f87171" /><circle cx="208" cy="34" r="5" fill="#fbbf24" /><circle cx="226" cy="34" r="5" fill="#34d399" /><text x="190" y="66" fill="#7dd3fc" fontFamily="monospace" fontSize="15">def check(log):</text><text x="206" y="88" fill="#a5f3fc" fontFamily="monospace" fontSize="15">return count_failures(log)</text><text x="190" y="110" fill="#86efac" fontFamily="monospace" fontSize="15">{dtx("▶ output: 38 failures", "▶ output: ৩৮টি ব্যর্থতা")}</text></g>}
        {kind === "terminal" && <g><rect x="150" y="16" width="340" height="108" rx="10" fill="#07090d" stroke={accent} strokeWidth="2" /><circle cx="170" cy="32" r="5" fill="#f87171" /><circle cx="188" cy="32" r="5" fill="#fbbf24" /><circle cx="206" cy="32" r="5" fill="#34d399" /><text x="170" y="62" fill="#e6edf3" fontFamily="monospace" fontSize="14">learner@lab:~$ grep Failed auth.log</text><text x="170" y="86" fill="#8b98a5" fontFamily="monospace" fontSize="13">{dtx("38 failed logins · 1 source IP", "৩৮টি ব্যর্থ login · ১টি source IP")}</text><text x="170" y="108" fill="#34d399" fontFamily="monospace" fontSize="13">{dtx("✓ pattern identified", "✓ pattern শনাক্ত হয়েছে")}</text></g>}
        {kind === "phone" && <g stroke={accent} strokeWidth="3" fill="var(--surface)"><rect x="285" y="12" width="70" height="116" rx="12" /><circle cx="320" cy="112" r="5" fill={accent} stroke="none" /><path d="M250 45 L285 60 M355 60 L390 45" /><rect x="200" y="34" width="50" height="34" rx="7" /><rect x="390" y="34" width="50" height="34" rx="7" /><g stroke={accent} strokeWidth="3" fill="none"><rect x="308" y="58" width="24" height="18" rx="4" fill={accent} stroke="none" /><path d="M313 58v-5a7 7 0 0 1 14 0v5" /></g></g>}
        {kind === "lock" && <g><rect x="275" y="52" width="90" height="66" rx="10" fill={accent} opacity="0.9" /><path d="M292 52 V38 a28 28 0 0 1 56 0 V52" fill="none" stroke={accent} strokeWidth="9" /><circle cx="320" cy="78" r="9" fill="#0b1220" /><rect x="316" y="78" width="8" height="20" rx="4" fill="#0b1220" /><text x="320" y="134" textAnchor="middle" fill="var(--text)" fontSize="11">AUTH · MFA · ENCRYPTION</text></g>}
        {kind === "web" && <g><rect x="130" y="22" width="380" height="96" rx="10" fill="var(--surface2)" stroke={accent} strokeWidth="2" /><rect x="130" y="22" width="380" height="24" rx="10" fill={accent} opacity="0.25" /><text x="146" y="38" fill="var(--text)" fontSize="11">https://lab.local — request → response</text><text x="146" y="66" fill="#7dd3fc" fontFamily="monospace" fontSize="12">GET /login  →  200 OK · Set-Cookie: HttpOnly; Secure</text><text x="146" y="90" fill="#86efac" fontFamily="monospace" fontSize="12">{dtx("✓ headers checked · ✓ session hardened", "✓ header যাচাইকৃত · ✓ session শক্ত করা")}</text></g>}
        {kind === "server" && <g fill="var(--surface2)" stroke={accent} strokeWidth="2"><rect x="235" y="20" width="170" height="30" rx="7" /><rect x="235" y="56" width="170" height="30" rx="7" /><rect x="235" y="92" width="170" height="30" rx="7" /></g>}
        {kind === "shield" && <g><path d="M320 12 L382 34 V72 C382 104 356 122 320 132 C284 122 258 104 258 72 V34 Z" fill={accent} opacity="0.9" /><path d="M292 72 L312 92 L350 50" fill="none" stroke="#0b1220" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" /></g>}
        {(kind === "server") && <g fill="#34d399"><circle cx="255" cy="35" r="4" /><circle cx="255" cy="71" r="4" /><circle cx="255" cy="107" r="4" /></g>}
      </svg>
      <div className="absolute bottom-2 left-3 flex items-center gap-2"><span className="rounded-full px-2.5 py-1 text-[11px] font-bold text-[#0b1220]" style={{ background: accent }}>{lesson.skill}</span><span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--text)]">Level {lesson.level} · {lesson.difficulty}</span></div>
    </div>
  );
}

function Box({ x, y, w, label, sub, color }: { x: number; y: number; w: number; label: string; sub?: string; color: string }) {
  return <g><rect x={x} y={y} width={w} height="42" rx="9" fill="var(--surface)" stroke={color} strokeWidth="2" /><text x={x + w / 2} y={sub ? y + 19 : y + 26} textAnchor="middle" fill="var(--text)" fontSize="12" fontWeight="700">{label}</text>{sub ? <text x={x + w / 2} y={y + 34} textAnchor="middle" fill="var(--dim)" fontSize="10">{sub}</text> : null}</g>;
}

// Real labelled SVG diagram, chosen from the lesson's diagram title. Fallback keeps the authored rows as colour-coded steps.
export function DiagramView({ lesson, bnRows }: { lesson: Lesson; bnRows?: string[] }) {
  const title = lesson.diagramTitle;
  const t = (title + " " + lesson.id).toLowerCase();
  const accent = skillAccent(lesson.skill);
  let body: React.ReactNode = null;
  if (t.includes("cia")) {
    body = <svg viewBox="0 0 640 190" className="w-full" role="img" aria-label="CIA triad diagram"><polygon points="320,18 130,160 510,160" fill="none" stroke={accent} strokeWidth="3" /><circle cx="320" cy="18" r="34" fill="#38bdf8" /><circle cx="130" cy="160" r="34" fill="#34d399" /><circle cx="510" cy="160" r="34" fill="#fbbf24" /><text x="320" y="14" textAnchor="middle" fill="#0b1220" fontWeight="800" fontSize="10">CONFID.</text><text x="320" y="27" textAnchor="middle" fill="#0b1220" fontWeight="800" fontSize="10">encryption · MFA</text><text x="130" y="156" textAnchor="middle" fill="#0b1220" fontWeight="800" fontSize="10">INTEGRITY</text><text x="130" y="169" textAnchor="middle" fill="#0b1220" fontSize="9">hash · signature</text><text x="510" y="156" textAnchor="middle" fill="#0b1220" fontWeight="800" fontSize="10">AVAILABILITY</text><text x="510" y="169" textAnchor="middle" fill="#0b1220" fontSize="9">backup · patching</text><text x="320" y="105" textAnchor="middle" fill="var(--text)" fontWeight="700" fontSize="13">{dtx("Every control protects ≥ 1 leg", "প্রতিটি control অন্তত ১টি পা রক্ষা করে")}</text></svg>;
  } else if (t.includes("osi") || t.includes("tcp/ip") || t.includes("layer")) {
    const layers = [["Application", "HTTP · DNS · SMTP", "#38bdf8"], ["Transport", "TCP / UDP · ports", "#22d3ee"], ["Network", "IP · routing", "#34d399"], ["Link / Physical", "Ethernet · Wi-Fi · MAC", "#fbbf24"]] as const;
    body = <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr] sm:items-center"><div className="space-y-1.5">{layers.map(([n, s, c], i) => <div key={n} className="flex items-center gap-3 rounded-lg border-2 px-3 py-2" style={{ borderColor: c, marginLeft: `${i * 8}px` }}><span className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-[#0b1220]" style={{ background: c }}>{7 - i}</span><span><span className="block text-sm font-bold text-[color:var(--text)]">{n}</span><span className="block text-xs text-[color:var(--dim)]">{s}</span></span></div>)}</div><div className="hidden text-2xl text-[color:var(--dim)] sm:block" aria-hidden="true">⇅</div><div className="rounded-lg bg-[color:var(--surface2)] p-3 text-sm text-[color:var(--dim)]"><strong className="text-[color:var(--text)]">{dtx("Read it as a journey:", "একটি যাত্রা হিসেবে পড়ো:")}</strong> {dtx("your app's data is wrapped layer by layer, travels the wire, then is unwrapped in reverse on the other side. A fault at any layer breaks everything above it.", "তোমার app-এর data স্তরে স্তরে মোড়ানো হয়, তার বেয়ে যায়, তারপর ওপাশে উল্টো ক্রমে খোলা হয়। যেকোনো স্তরের ত্রুটি তার উপরের সবকিছু ভেঙে দেয়।")}</div></div>;
  } else if (t.includes("handshake") || t.includes("tcp")) {
    body = <svg viewBox="0 0 640 170" className="w-full" role="img" aria-label="TCP three-way handshake diagram"><Box x={60} y={8} w={150} label="CLIENT" color="#38bdf8" /><Box x={430} y={8} w={150} label="SERVER" color="#34d399" /><g stroke="var(--dim)" strokeWidth="2"><path d="M135 50 V150 M505 50 V150" strokeDasharray="5 5" /><path d="M135 72 H505" stroke="#38bdf8" /><path d="M505 102 H135" stroke="#34d399" /><path d="M135 132 H505" stroke="#fbbf24" /></g><g fill="var(--text)" fontSize="12" fontWeight="700"><text x="320" y="66" textAnchor="middle">1 · SYN → {dtx("“Can we talk?”", "“কথা বলা যাবে?”")}</text><text x="320" y="96" textAnchor="middle">2 · ← SYN-ACK {dtx("“Yes — and you?”", "“হ্যাঁ — তুমিও?”")}</text><text x="320" y="126" textAnchor="middle">3 · ACK → {dtx("“Confirmed” · data flows", "“নিশ্চিত” · data প্রবাহ শুরু")}</text></g></svg>;
  } else if (t.includes("dns")) {
    const steps = [dtx("You type a name", "তুমি একটি নাম লেখো"), dtx("Resolver asks", "Resolver জিজ্ঞেস করে"), "Root → TLD → Authority", dtx("Answer: IP + TTL", "উত্তর: IP + TTL"), dtx("Browser connects", "Browser connect করে")];
    body = <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">{steps.map((s2, i) => <div key={s2} className="flex flex-1 items-center gap-2"><div className="flex-1 rounded-lg border-2 p-3 text-center" style={{ borderColor: ["#38bdf8", "#22d3ee", "#34d399", "#fbbf24", "#fb923c"][i] }}><span className="mx-auto mb-1 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-[#0b1220]" style={{ background: ["#38bdf8", "#22d3ee", "#34d399", "#fbbf24", "#fb923c"][i] }}>{i + 1}</span><span className="block text-[13px] font-semibold text-[color:var(--text)]">{s2}</span></div>{i < steps.length - 1 ? <span className="hidden text-[color:var(--dim)] sm:block" aria-hidden="true">→</span> : null}</div>)}</div>;
  } else if (t.includes("permission") || t.includes("file") || t.includes("rwx")) {
    body = <div className="grid gap-2 sm:grid-cols-3">{[["OWNER", "r w x", "7", "#38bdf8"], ["GROUP", "r – x", "5", "#34d399"], ["OTHERS", "r – –", "4", "#fbbf24"]].map(([n, b, o, c]) => <div key={n} className="rounded-lg border-2 p-3 text-center" style={{ borderColor: c }}><p className="text-xs font-bold tracking-wide" style={{ color: c }}>{n}</p><p className="mt-1 font-mono text-xl font-bold text-[color:var(--text)]">{b}</p><p className="text-xs text-[color:var(--dim)]">{dtx(`octal digit ${o} · mode 754 = -rwxr-xr--`, `octal সংখ্যা ${o} · mode 754 = -rwxr-xr--`)}</p></div>)}</div>;
  } else if (t.includes("memory") || t.includes("stack") || t.includes("heap") || t.includes("process")) {
    body = <div className="grid gap-3 sm:grid-cols-2"><div className="rounded-lg border-2 border-violet-400 p-3"><p className="font-bold text-[color:var(--text)]">{dtx("STACK ↓ grows down", "STACK ↓ নিচের দিকে বাড়ে")}</p><p className="mt-1 font-mono text-xs leading-relaxed text-[color:var(--dim)]">main() frame<br />check() frame · local buf[16]<br />return address ← overflow target</p><p className="mt-2 text-xs text-[color:var(--dim)]">{dtx("Fast, automatic, fixed-size locals. Overflowing it is CWE-121 territory.", "দ্রুত, স্বয়ংক্রিয়, নির্দিষ্ট-আকারের local variable। এটি overflow করা CWE-121-এর এলাকা।")}</p></div><div className="rounded-lg border-2 border-cyan-400 p-3"><p className="font-bold text-[color:var(--text)]">{dtx("HEAP ↑ grows up", "HEAP ↑ উপরের দিকে বাড়ে")}</p><p className="mt-1 font-mono text-xs leading-relaxed text-[color:var(--dim)]">malloc'd buffers · objects<br />{dtx("you allocate it, you free it", "তুমিই allocate করো, তুমিই free করো")}<br />{dtx("leaks & use-after-free live here", "leak আর use-after-free এখানেই থাকে")}</p><p className="mt-2 text-xs text-[color:var(--dim)]">{dtx("Flexible, manual, long-lived data.", "নমনীয়, হাতে-নিয়ন্ত্রিত, দীর্ঘস্থায়ী data।")}</p></div></div>;
  } else if (t.includes("http") || t.includes("request") || t.includes("session") || t.includes("cookie")) {
    body = <svg viewBox="0 0 640 175" className="w-full" role="img" aria-label="HTTP request response flow diagram"><Box x={40} y={10} w={150} label="BROWSER" color="#38bdf8" /><Box x={450} y={10} w={150} label="SERVER" color="#34d399" /><g fontSize="12"><text x="320" y="72" textAnchor="middle" fill="var(--text)" fontWeight="700">REQUEST → GET /login · Cookie: sid=…</text><text x="320" y="108" textAnchor="middle" fill="var(--text)" fontWeight="700">← RESPONSE 200 OK · Set-Cookie: HttpOnly; Secure; SameSite</text><text x="320" y="142" textAnchor="middle" fill="var(--dim)">{dtx("HTTP forgets — the cookie is how the server remembers you", "HTTP ভুলে যায় — cookie-ই server-এর তোমাকে মনে রাখার উপায়")}</text></g><g strokeWidth="2.5"><path d="M190 78 H450" stroke="#38bdf8" /><path d="M450 112 H190" stroke="#34d399" /></g></svg>;
  } else if (t.includes("encrypt") || t.includes("crypto") || t.includes("hash") || t.includes("boot") || t.includes("trust")) {
    const steps = title.toLowerCase().includes("boot") ? ["UEFI firmware", dtx("✓ verifies signature", "✓ signature যাচাই করে"), "Bootloader", "✓ kernel", dtx("Login screen", "Login পর্দা")] : ["Plaintext", "🔑 Key / hash", "Ciphertext / digest", dtx("✓ verify", "✓ যাচাই"), dtx("Trusted result", "বিশ্বস্ত ফলাফল")];
    body = <div className="flex flex-col gap-2 sm:flex-row sm:items-center">{steps.map((s2, i) => <div key={s2} className="flex flex-1 items-center gap-2"><div className="flex-1 rounded-lg border-2 border-emerald-500/70 p-3 text-center text-[13px] font-semibold text-[color:var(--text)]">{s2}</div>{i < steps.length - 1 ? <span className="hidden text-[color:var(--dim)] sm:block" aria-hidden="true">→</span> : null}</div>)}</div>;
  } else if (t.includes("network") || t.includes("topology") || t.includes("subnet")) {
    body = <svg viewBox="0 0 640 180" className="w-full" role="img" aria-label="Network topology diagram"><g stroke={accent} strokeWidth="2.5" fill="var(--surface)"><path d="M130 90 H245 M395 90 H510 M320 58 V30" fill="none" /><rect x="40" y="68" width="90" height="44" rx="8" /><rect x="245" y="66" width="150" height="48" rx="10" /><rect x="510" y="68" width="90" height="44" rx="8" /><rect x="275" y="6" width="90" height="26" rx="7" /></g><g fill="var(--text)" fontSize="11" fontWeight="700" textAnchor="middle"><text x="85" y="94">PC · .10</text><text x="320" y="86">SWITCH / ROUTER</text><text x="320" y="100" fontWeight="400" fill="var(--dim)">192.168.1.1 gateway</text><text x="555" y="94">SERVER · .50</text><text x="320" y="23">INTERNET ↑</text></g></svg>;
  }
  if (!body) {
    body = <div className="space-y-1.5">{(bnRows ?? lesson.diagram).map((row, i) => <div key={i} className="flex items-start gap-3 rounded-lg border px-3 py-2.5" style={{ borderColor: `color-mix(in srgb, ${accent} ${55 - Math.min(i, 4) * 8}%, var(--border))`, marginLeft: `${Math.min(i, 4) * 10}px` }}><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-[#0b1220]" style={{ background: accent }}>{i + 1}</span><span className="font-mono text-[12.5px] leading-relaxed text-[color:var(--text)]">{row}</span></div>)}</div>;
  }
  return (
    <figure className="cl-diagram">
      <figcaption className="mb-3 flex items-center gap-2 text-sm font-bold text-[color:var(--text)]"><span aria-hidden="true">🧭</span>{title}<span className="ml-auto text-[11px] font-medium text-[color:var(--dim)]">{dtx("visual diagram · labelled", "ছবির diagram · labelসহ")}</span></figcaption>
      {body}
    </figure>
  );
}
