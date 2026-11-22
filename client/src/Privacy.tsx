// Privacy & Policy (v47) — an honest description of exactly what the real
// system does, and nothing it does not. Account facts (username, email,
// display name), PBKDF2-HMAC-SHA256 password hashing (100,000 iterations,
// per-user salt), session tokens stored only as SHA-256 hashes with
// 30-day sessions, progress/XP in Cloudflare D1 with a local browser
// copy as backup, password-reset codes stored only as hashes (15-minute
// expiry, single-use, email via Brevo), Judge0 CE code execution for the
// non-local playground languages (Python via Pyodide and JavaScript run
// locally and never leave the device), no selling or sharing of data,
// no tracking beyond account + progress, labs only on own / local /
// authorized targets. There is NO in-app account-deletion button, so
// this page never claims one — deletion requests go through the contact
// email, stated plainly below.
//
// Languages: section headings and chrome resolve through tx() in all six
// languages; the policy BODY ships in English + Bangla, and the other
// four languages fall back to the English body — the same pattern as
// lesson bodies.

import { tx as txI } from "./i18n";
import { Card, SectionTitle, useStore } from "./ui";

export const COPYRIGHT_TEXT = "© 2026 CyberLab — Md Abir Hossain";

/** The small, subtle copyright line — login footer, app footer, games
    screens (via the shared footer), and Settings/About. */
export function CopyrightLine({ className = "" }: { className?: string }) {
  return <p className={`text-[11px] leading-relaxed text-[color:var(--dim)] ${className}`}>{COPYRIGHT_TEXT}</p>;
}

type PolicySection = { hEn: string; hBn: string; en: string[]; bn: string[] };

const SECTIONS: PolicySection[] = [
  {
    hEn: "What CyberLab stores about you",
    hBn: "CyberLab তোমার সম্পর্কে যা সংরক্ষণ করে",
    en: [
      "Your account holds your username, your email address, and the display name you choose. That is the only personal information CyberLab asks for — there is no profile photo, phone number, or address anywhere in the system.",
    ],
    bn: [
      "তোমার account-এ থাকে তোমার username, তোমার email address, আর তুমি যে display name বেছে নাও। এটাই একমাত্র ব্যক্তিগত তথ্য যা CyberLab চায় — system-এ profile photo, phone number বা address-এর কোনো জায়গাই নেই।",
    ],
  },
  {
    hEn: "Passwords and sessions",
    hBn: "Password ও session",
    en: [
      "Passwords are never stored in plain text. Each password is hashed with PBKDF2-HMAC-SHA256 using 100,000 iterations and a unique random salt per user, so even two accounts with the same password store different hashes.",
      "When you sign in, the server issues a session token. Only the token's SHA-256 hash is stored — never the token itself — and sessions last 30 days. Signing out deletes the session on the server too.",
      "Five failed sign-in attempts in a row lock that login for 15 minutes, which slows down password guessing.",
    ],
    bn: [
      "Password কখনোই plain text-এ সংরক্ষণ করা হয় না। প্রতিটি password PBKDF2-HMAC-SHA256 দিয়ে hash করা হয় — 100,000 iterations আর প্রতিটি user-এর জন্য আলাদা random salt, তাই দুটো account-এর password এক হলেও তাদের hash আলাদা থাকে।",
      "Sign in করলে server একটা session token দেয়। সংরক্ষণ করা হয় শুধু সেই token-এর SHA-256 hash — token-টা নিজে কখনোই না — আর session থাকে 30 দিন। Log out করলে session server থেকেও মুছে যায়।",
      "পরপর পাঁচবার ভুল sign-in চেষ্টা করলে সেই login 15 মিনিটের জন্য lock হয়ে যায় — এতে password আন্দাজ করার চেষ্টা ধীর হয়ে যায়।",
    ],
  },
  {
    hEn: "Your learning progress",
    hBn: "তোমার শেখার অগ্রগতি",
    en: [
      "Your lessons, XP, quiz scores, labs, missions, CTF solves, and research notes are saved to your account in a Cloudflare D1 database, so the same progress is there on any device you sign in on.",
      "A copy of your progress is also kept in this browser on your own device, as a backup and so the app can keep working offline; it merges into your account when you sign in. You can export a full copy of your progress as JSON at any time from Settings.",
    ],
    bn: [
      "তোমার lesson, XP, quiz score, lab, mission, CTF solve আর research note তোমার account-এর নামে Cloudflare D1 database-এ save হয়, তাই যেকোনো device-এ sign in করলেই একই progress পাবে।",
      "তোমার progress-এর একটা copy এই browser-এ, তোমার নিজের device-এও থাকে — backup হিসেবে, আর যাতে app offline-এও চলতে পারে; sign in করলেই সেটা তোমার account-এ merge হয়ে যায়। Settings থেকে যেকোনো সময় তোমার পুরো progress JSON হিসেবে export করতে পারো।",
    ],
  },
  {
    hEn: "Password reset emails",
    hBn: "Password reset email",
    en: [
      "If you use Forgot password, CyberLab emails you a 6-digit reset code via Brevo, our email delivery service. Only a hash of the code is stored, the code expires after 15 minutes, and each code can be used once.",
      "The reset endpoint answers the same way whether or not an account matches the username or email you enter, so it never reveals whether an address is registered.",
    ],
    bn: [
      "Forgot password ব্যবহার করলে CyberLab তোমাকে Brevo (আমাদের email delivery service) দিয়ে 6-digit-এর একটা reset code email করে। সংরক্ষণ করা হয় শুধু code-টির hash, code-টি 15 মিনিটে expire হয়, আর প্রতিটি code একবারই ব্যবহার করা যায়।",
      "তুমি যে username বা email দাও তার সাথে account মিলুক বা না মিলুক, reset endpoint একইভাবে উত্তর দেয় — তাই কোনো address registered কিনা তা কখনোই ফাঁস হয় না।",
    ],
  },
  {
    hEn: "What we never do",
    hBn: "যা আমরা কখনো করি না",
    en: [
      "Your data is never sold, and it is never shared with advertisers. CyberLab carries no advertising trackers and no analytics beyond what your own account and progress need in order to work.",
      "The only outside services involved in running CyberLab are Cloudflare (hosting and the database), Brevo (password-reset email delivery), and Judge0 CE (code execution for the languages described in the next section).",
    ],
    bn: [
      "তোমার data কখনোই বিক্রি করা হয় না, আর advertiser-দের সাথে কখনোই share করা হয় না। CyberLab-এ কোনো advertising tracker নেই, আর তোমার account ও progress চলার জন্য যা লাগে তার বাইরে কোনো analytics-ও নেই।",
      "CyberLab চালাতে বাইরের service বলতে জড়িত শুধু Cloudflare (hosting আর database), Brevo (password-reset email পাঠানো) আর Judge0 CE (পরের section-এ বর্ণিত language-গুলোর code চালানো)।",
    ],
  },
  {
    hEn: "Code execution & third parties",
    hBn: "Code চালানো ও third party",
    en: [
      "Some playground languages run on a third-party service. When you run code in C, C++, Java, Go, Rust, Bash, TypeScript, SQL, PHP, C#, Kotlin or R, the code — and any input you type for it — is sent to Judge0 CE (ce.judge0.com), a public code-execution API, and is executed on their servers. Once a submission leaves your browser, CyberLab does not control what Judge0 does with it, so never put passwords, keys, or personal data into code you run in those languages.",
      "Python and JavaScript are different: Python runs locally in your browser via Pyodide, and JavaScript runs locally in a browser sandbox — code in those two languages never leaves your device.",
    ],
    bn: [
      "কিছু playground language তৃতীয় পক্ষের service-এ চলে। C, C++, Java, Go, Rust, Bash, TypeScript, SQL, PHP, C#, Kotlin বা R-এ code চালালে সেই code — আর তুমি তার জন্য যে input দাও, তাও — Judge0 CE (ce.judge0.com)-তে পাঠানো হয়; এটি একটি public code-execution API, আর code execute হয় তাদের server-এই। Submission তোমার browser ছেড়ে যাওয়ার পর Judge0 তা দিয়ে কী করে, CyberLab তা নিয়ন্ত্রণ করে না — তাই ওই language-গুলোতে চালানো code-এ কখনো password, key বা ব্যক্তিগত তথ্য দিও না।",
      "Python আর JavaScript আলাদা: Python চলে তোমার browser-এর ভেতরেই, Pyodide দিয়ে, আর JavaScript চলে browser-এর local sandbox-এ — এই দুই language-এর code তোমার device ছেড়ে কখনোই যায় না।",
    ],
  },
  {
    hEn: "Practice stays on your own systems",
    hBn: "অনুশীলন শুধু নিজের system-এ",
    en: [
      "Every lab, mission, and exercise in CyberLab is designed for your own computer, your own local lab, or systems you are explicitly authorized to test — and the in-app terminal and lab environments are labelled simulations. CyberLab never scans, probes, or connects to anyone else's system.",
    ],
    bn: [
      "CyberLab-এর প্রতিটি lab, mission আর exercise তৈরি তোমার নিজের computer, নিজের local lab, অথবা তুমি স্পষ্টভাবে অনুমতি পেয়েছ এমন system-এর জন্য — আর app-এর ভেতরের terminal ও lab environment গুলো simulation বলে label করা থাকে। CyberLab কখনোই অন্য কারো system scan, probe বা connect করে না।",
    ],
  },
  {
    hEn: "Your choices and contact",
    hBn: "তোমার পছন্দ ও যোগাযোগ",
    en: [
      "You can change your display name, goal, and password at any time in Settings, and export or reset your progress there too.",
      "There is no account-deletion button inside the app. If you want your account and its data deleted, or you have any question about your data, email hossainabirdev@gmail.com and it will be handled from there.",
    ],
    bn: [
      "Settings থেকে যেকোনো সময় তোমার display name, goal আর password বদলাতে পারো, আর সেখান থেকেই progress export বা reset-ও করতে পারো।",
      "App-এর ভেতরে কোনো account-deletion button নেই। তুমি যদি তোমার account আর তার data মুছে ফেলতে চাও, অথবা তোমার data নিয়ে কোনো প্রশ্ন থাকে, তাহলে hossainabirdev@gmail.com-এ email করো — সেখান থেকেই ব্যবস্থা নেওয়া হবে।",
    ],
  },
];

export function PrivacyView() {
  const s = useStore();
  const lang = s.profile.lang;
  const isBn = lang === "bn";
  return (
    <div className="space-y-5">
      <SectionTitle
        bn="গোপনীয়তা নীতি"
        bnSub="CyberLab তোমার account, progress আর password কীভাবে সামলায় — সহজ ভাষায়, system আসলে যা করে ঠিক তাই।"
        sub="How CyberLab handles your account, your progress, and your password — in plain language, matching exactly what the system really does."
      >
        Privacy &amp; Policy
      </SectionTitle>

      {SECTIONS.map((sec) => (
        <Card key={sec.hEn} className="cl-rise space-y-2">
          <h3 className="font-semibold text-[color:var(--text)]">{txI(lang, sec.hEn, sec.hBn)}</h3>
          {(isBn ? sec.bn : sec.en).map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-[color:var(--dim)]">{p}</p>
          ))}
        </Card>
      ))}

      <p className="text-xs text-[color:var(--dim)]">
        {txI(lang, "Last updated: 22 November 2026. If this policy changes, the new version will be published on this page.", "সর্বশেষ হালনাগাদ: 22 November 2026। এই নীতিতে বদল এলে নতুন version এই page-এই প্রকাশ করা হবে।")}
      </p>
      <CopyrightLine />
    </div>
  );
}
