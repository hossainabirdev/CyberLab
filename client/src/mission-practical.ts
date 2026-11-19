// Mission practicals — the hands-on step inside every mission (13 Nov 2026,
// user order: "mission e ki quiz diye rakhso? shob jagay quiz dile ki
// cholbe?"). A mission is no longer decision-only: BEFORE the judgment
// questions, the learner DOES something tied to the case — runs the check
// in the lab try area (mode "try": the mission's own lesson code, real
// browser run or simulated terminal) or performs a real-PC / own-work task
// with exact steps and the expected output (mode "pc"). A single checked
// question, answerable only from having done the step, verifies it.
// Mission XP requires BOTH: practical check passed AND decision ≥70%.
// Every check answer below is grounded in the mission's own scenario text
// or in the linked lesson code's verified output (quoted in the catalog) —
// nothing invented. BN mirrors are index-aligned with the EN fields.

import type { LabTask } from "./catalog2";

export type MissionPractical = {
  mode: "try" | "pc";
  doEn: string;
  doBn: string;
  /** mode "pc" only: the exact steps, in order. */
  stepsEn?: string[];
  stepsBn?: string[];
  /** mode "pc" only: what the finished step looks like. */
  expectedEn?: string;
  expectedBn?: string;
  check: LabTask;
  checkBn: LabTask;
};

export const MISSION_PRACTICAL: Record<string, MissionPractical> = {
  "m-permission-slip": {
    mode: "pc",
    doEn: "Do it first: draft the one-page scope statement for this exact request, using the template in the try area below (copy it, then fill every line for the cousin's portal). You will find that two lines cannot honestly be filled in — that discovery IS the practical.",
    doBn: "আগে কাজটা করো: ঠিক এই অনুরোধের জন্য এক পৃষ্ঠার scope statement-এর খসড়া বানাও — নিচের try area-র template-টা ব্যবহার করে (copy করে cousin-এর portal-এর জন্য প্রতিটা লাইন পূরণ করো)। দেখবে দুটো লাইন সৎভাবে পূরণ করা যায় না — ওই আবিষ্কারটাই practical।",
    stepsEn: [
      "Copy the scope template from the try area into your own notes or a text file.",
      "Fill in: target (the portal URL), dates, and what you would test — these you can complete from the chat message.",
      "Now fill in the authorizer line: the NAME and ROLE of the person at the logistics firm who owns the system and signs. Try to write it honestly.",
      "Fill in the rules line: what happens to data you find, who gets the report, and the emergency contact. Notice who would have to agree to these.",
    ],
    stepsBn: [
      "Try area থেকে scope template-টা নিজের note বা text file-এ copy করো।",
      "পূরণ করো: target (portal-এর URL), তারিখ, আর তুমি কী test করতে — এগুলো chat message থেকেই পূরণ করা যায়।",
      "এবার authorizer লাইনটা পূরণ করো: logistics firm-এর যে ব্যক্তি system-এর মালিক এবং সই করবেন, তাঁর নাম ও ভূমিকা। সৎভাবে লিখতে চেষ্টা করো।",
      "Rules লাইনটা পূরণ করো: পাওয়া data-র কী হবে, report কে পাবে, emergency contact কে। লক্ষ্য করো, এগুলোতে রাজি হতে হবে কাকে।",
    ],
    expectedEn: "A one-page draft where Target and Dates are filled, but the Authorizer line still reads '??? — the intern cannot sign this' and the Rules line has no owner to agree it. That unfinished page is the evidence your decision rests on.",
    expectedBn: "এক পৃষ্ঠার খসড়া যেখানে Target আর Dates পূরণ হয়েছে, কিন্তু Authorizer লাইনে এখনো লেখা '??? — intern এটি সই করতে পারে না' আর Rules লাইনে রাজি হওয়ার মতো মালিক নেই। ওই অসমাপ্ত পৃষ্ঠাটাই তোমার সিদ্ধান্তের প্রমাণ।",
    check: {
      prompt: "From doing the draft: which template line makes a test legal — and can the cousin's chat message fill it?",
      options: [
        "The Target line — yes, he sent the link, so it is filled",
        "The Authorizer line (name + role of the system owner who signs) — no: an intern's chat message is not a signed owner authorization",
        "The Dates line — yes, he named the weekend",
      ],
      answer: 1,
      explain: "The draft proves it physically: links and dates are easy; only the owner can authorize, in writing, with scope. That line stays empty here — so the test may not start.",
    },
    checkBn: {
      prompt: "খসড়াটা করে যা বুঝলে: কোন template লাইনটা একটি test-কে legal করে — আর cousin-এর chat message কি সেটা পূরণ করতে পারে?",
      options: [
        "Target লাইন — হ্যাঁ, সে link পাঠিয়েছে, তাই পূরণ হয়ে গেছে",
        "Authorizer লাইন (system মালিকের নাম + ভূমিকা, যিনি সই করেন) — না: intern-এর chat message সই করা মালিকের authorization নয়",
        "Dates লাইন — হ্যাঁ, সে weekend বলেছে",
      ],
      answer: 1,
      explain: "খসড়াটাই শারীরিকভাবে প্রমাণ করে: link আর তারিখ সহজ; শুধু মালিকই লিখিতভাবে, scope-সহ authorize করতে পারেন। ওই লাইনটা এখানে খালি থাকে — তাই test শুরু করা যায় না।",
    },
  },

  "m-suspicious-login": {
    mode: "try",
    doEn: "Do it first: in the try area below, run the Windows inspection set in the simulated terminal — the same read-only set from the lesson. Look at what it lists: running services, local accounts, the most recent failed logons, listening ports. Then answer from that evidence.",
    doBn: "আগে কাজটা করো: নিচের try area-তে simulated terminal-এ Windows inspection set-টা চালাও — পাঠের সেই read-only set-ই। দেখো কী কী list করে: running service, local account, সবচেয়ে recent failed logon, listening port। তারপর ওই প্রমাণ থেকে উত্তর দাও।",
    check: {
      prompt: "From the evidence: what makes the 02:20 success line the critical one in this case?",
      options: [
        "Event 4624 (success) is always malicious",
        "It follows 14 failures in 8 minutes from one workstation, and Nadia says she was asleep with her laptop off — a success the user disowns",
        "It happened at night, so no further check is needed",
      ],
      answer: 1,
      explain: "A lone success means little; a success closing a failure burst, disowned by the account owner, is the compromise pattern. That is why the inspection set surfaces failed logons first.",
    },
    checkBn: {
      prompt: "প্রমাণ থেকে বলো: এই case-এ 02:20-র success লাইনটা কেন সবচেয়ে critical?",
      options: [
        "Event 4624 (success) সবসময়ই malicious",
        "এটি একই workstation থেকে ৮ মিনিটে ১৪টি failure-এর পরে এসেছে, আর Nadia বলছে সে ঘুমিয়ে ছিল, laptop বন্ধ ছিল — user নিজে অস্বীকার করা একটি success",
        "রাতে ঘটেছে, তাই আর কোনো যাচাই দরকার নেই",
      ],
      answer: 1,
      explain: "একটি একক success মানে কম; failure burst-এর শেষে আসা, account মালিকের অস্বীকার করা success-ই compromise pattern। এজন্যই inspection set failed logon গুলো আগে দেখায়।",
    },
  },

  "m-dns-query": {
    mode: "try",
    doEn: "Do it first: in the try area below, run the DNS interrogation commands in the simulated terminal and read a real answer's shape — a short A record, a short structured TXT (SPF). Hold that shape next to this mission's log before you judge it.",
    doBn: "আগে কাজটা করো: নিচের try area-তে simulated terminal-এ DNS interrogation command গুলো চালাও আর একটি আসল answer-এর আকারটা পড়ো — ছোট A record, ছোট structured TXT (SPF)। ওই আকারটা এই mission-এর log-এর পাশে ধরো, তারপর বিচার করো।",
    check: {
      prompt: "Normal answers are short and structured. The mission's workstation made ~900 queries/hour of unique ~180-character TXT names. The check that proves this is not normal DNS use is:",
      options: [
        "The domain data-sync.example exists",
        "Volume + uniqueness + length + TXT type together — no normal service needs unique 180-character query names, hour after hour",
        "TXT records are always attacks",
      ],
      answer: 1,
      explain: "One odd record is a curiosity; four anomalies together (rate, unique names, encoded length, TXT channel) are the tunneling fingerprint you just compared against a real answer's shape.",
    },
    checkBn: {
      prompt: "স্বাভাবিক answer ছোট ও structured হয়। Mission-এর workstation ঘণ্টায় ~900টি query করেছে, প্রতিটি unique ~180 অক্ষরের TXT নাম। কোন যাচাইটা প্রমাণ করে এটি স্বাভাবিক DNS ব্যবহার নয়?",
      options: [
        "data-sync.example domain-টি আছে",
        "Volume + uniqueness + length + TXT type একসঙ্গে — কোনো স্বাভাবিক service-এর ঘণ্টার পর ঘণ্টা unique 180-অক্ষরের query নাম লাগে না",
        "TXT record মানেই সবসময় attack",
      ],
      answer: 1,
      explain: "একটি অদ্ভুত record কৌতূহল মাত্র; চারটি anomaly একসঙ্গে (rate, unique নাম, encoded দৈর্ঘ্য, TXT channel) হলো tunneling-এর fingerprint — যা তুমি মাত্র একটি আসল answer-এর আকারের সঙ্গে মিলিয়ে দেখলে।",
    },
  },

  "m-phishing": {
    mode: "pc",
    doEn: "Do it first: write the incident's five-line first-response note — the actual artefact a responder sends in the first minutes. Use the scorecard artefact in the try area as your shape, and the scenario's facts (one credential entered, reported after 20 minutes, lookalike domain 2 days old).",
    doBn: "আগে কাজটা করো: ঘটনার পাঁচ লাইনের first-response note লেখো — প্রথম কয়েক মিনিটে একজন responder সত্যিই যা পাঠায়। Try area-র scorecard artefact-টাকে আকার হিসেবে নাও, আর scenario-র তথ্য ব্যবহার করো (একজন credential দিয়েছে, ২০ মিনিট পরে report করেছে, lookalike domain ২ দিনের পুরনো)।",
    stepsEn: [
      "Line 1 — the live risk: name the one staff account whose credential was entered, and its state (assumed compromised until reset).",
      "Line 2 — the immediate action on that account (reset + session revocation + MFA check), with an owner and 'now', not 'later'.",
      "Line 3 — containment for everyone else: block the lookalike domain at the mail/web gateway; search all inboxes for the message.",
      "Line 4 — evidence: preserve the original message with full headers; do not delete it.",
      "Line 5 — the follow-up: report the domain for takedown through proper channels, and thank the reporter by name (blameless reporting is the control that worked).",
    ],
    stepsBn: [
      "লাইন ১ — live risk: যে staff account-এর credential দেওয়া হয়েছে তার নাম, আর তার অবস্থা (reset না হওয়া পর্যন্ত compromised ধরে নাও)।",
      "লাইন ২ — ওই account-এ তাৎক্ষণিক action (reset + session revocation + MFA check), মালিকসহ আর 'এখনই', 'পরে' নয়।",
      "লাইন ৩ — বাকি সবার containment: mail/web gateway-তে lookalike domain block করো; সব inbox-এ message-টি খোঁজো।",
      "লাইন ৪ — প্রমাণ: মূল message-টি full header-সহ সংরক্ষণ করো; মুছে ফেলো না।",
      "লাইন ৫ — follow-up: সঠিক channel দিয়ে domain-টি takedown-এর জন্য report করো, আর reporter-কে নাম ধরে ধন্যবাদ দাও (দোষমুক্ত reporting-ই এখানে কাজ করা control)।",
    ],
    expectedEn: "Five lines, in clock order: live credential first, containment second, evidence preserved, takedown last. If your note deletes the email or schedules training first, rewrite it — the attacker's clock started 20 minutes ago.",
    expectedBn: "পাঁচ লাইন, ঘড়ির ক্রমে: live credential আগে, containment তারপর, প্রমাণ সংরক্ষণ, takedown শেষে। তোমার note-এ email মোছা বা training-এর schedule আগে থাকলে আবার লেখো — attacker-এর ঘড়ি ২০ মিনিট আগেই শুরু হয়েছে।",
    check: {
      prompt: "In your response note, which line must come FIRST — before takedown, before inbox cleanup?",
      options: [
        "Report the lookalike domain for takedown",
        "Reset the exposed credential and revoke its sessions — the credential is live and usable until that moment",
        "Delete the phishing email from all inboxes",
      ],
      answer: 1,
      explain: "Takedown takes hours to days; a stolen password works in seconds. The note you just wrote orders actions by the attacker's clock, not by administrative tidiness.",
    },
    checkBn: {
      prompt: "তোমার response note-এ কোন লাইনটা সবার আগে আসতে হবে — takedown-এরও আগে, inbox cleanup-এরও আগে?",
      options: [
        "Lookalike domain-টি takedown-এর জন্য report করা",
        "ফাঁস হওয়া credential reset করা আর তার session revoke করা — ওই মুহূর্ত পর্যন্ত credential-টি live ও ব্যবহারযোগ্য",
        "সব inbox থেকে phishing email মুছে ফেলা",
      ],
      answer: 1,
      explain: "Takedown-এ ঘণ্টা থেকে দিন লাগে; চুরি হওয়া password সেকেন্ডে কাজ করে। তুমি যে note লিখলে, তা action গুলোকে সাজায় attacker-এর ঘড়ি অনুযায়ী, প্রশাসনিক গোছানোর অনুযায়ী নয়।",
    },
  },

  "m-api-authz": {
    mode: "try",
    doEn: "Do it first: run the code in the try area below — the vulnerable vs secure data-access pattern from the lesson. Watch what the vulnerable version hands Bob, and what the secure version answers instead. Then decide this case.",
    doBn: "আগে কাজটা করো: নিচের try area-তে code-টা চালাও — পাঠের vulnerable বনাম secure data-access pattern। দেখো vulnerable version Bob-কে কী দেয়, আর secure version তার বদলে কী উত্তর দেয়। তারপর এই case-এর সিদ্ধান্ত নাও।",
    check: {
      prompt: "When you ran it: what does the SECURE version return when Bob requests Alice's invoice?",
      options: [
        "Alice's invoice — the IDs are sequential, so it loads",
        "None → 404, because the order's owner is not the requester",
        "A JWT signature error",
      ],
      answer: 1,
      explain: "That None → 404 is the per-object authorization check working: authenticated, yes; authorized for THIS object, no. It is the exact fix this mission's handler is missing.",
    },
    checkBn: {
      prompt: "তুমি চালিয়ে যা দেখলে: Bob যখন Alice-এর invoice চায়, SECURE version কী return করে?",
      options: [
        "Alice-এর invoice — ID গুলো sequential, তাই load হয়ে যায়",
        "None → 404, কারণ order-এর মালিক requester নয়",
        "JWT signature error",
      ],
      answer: 1,
      explain: "ওই None → 404-ই per-object authorization check-এর কাজ: authenticated হ্যাঁ; কিন্তু এই object-এর জন্য authorized না। এই mission-এর handler-এ ঠিক এই fix-টাই নেই।",
    },
  },

  "m-harden-server": {
    mode: "try",
    doEn: "Do it first: in the try area below (simulated terminal), run the inspection commands from the lesson's daily-driver set — the ones that list services and listening ports — and read this simulated server's state with your own eyes before ranking the fixes.",
    doBn: "আগে কাজটা করো: নিচের try area-তে (simulated terminal) পাঠের daily-driver set থেকে inspection command গুলো চালাও — যেগুলো service আর listening port list করে — আর নিজের চোখে এই simulated server-এর অবস্থা পড়ো, তারপর fix গুলো ranking করো।",
    check: {
      prompt: "From your own inspection of the running services: which two entries prove the baseline's 'unused services' finding?",
      options: [
        "sshd and cron — both should be removed",
        "telnet and ftp — cleartext-obsolete services still running",
        "systemd and journald — logging daemons",
      ],
      answer: 1,
      explain: "You saw them in the listing yourself: telnet and ftp predate encrypted administration and expose credentials in cleartext. SSH/SFTP replaced them; the finding is evidence, not opinion.",
    },
    checkBn: {
      prompt: "Running service গুলো নিজে inspection করে বলো: কোন দুটি entry baseline-এর 'unused services' finding-টা প্রমাণ করে?",
      options: [
        "sshd আর cron — দুটোই remove করা উচিত",
        "telnet আর ftp — cleartext-obsolete service এখনো চলছে",
        "systemd আর journald — logging daemon",
      ],
      answer: 1,
      explain: "তুমি নিজেই listing-এ দেখেছ: telnet আর ftp encrypted administration-এর আগের যুগের, credential cleartext-এ ফাঁস করে। SSH/SFTP এদের বদলে এসেছে; finding-টা প্রমাণ, মতামত নয়।",
    },
  },

  "m-ssrf-review": {
    mode: "try",
    doEn: "Do it first: run the guards in the try area below — the CSRF token check and the SSRF URL validator from the lesson. Read each verdict line, then judge the three URLs in this case against the same rules.",
    doBn: "আগে কাজটা করো: নিচের try area-তে guard গুলো চালাও — পাঠের CSRF token check আর SSRF URL validator। প্রতিটা verdict লাইন পড়ো, তারপর একই নিয়মে এই case-এর তিনটি URL বিচার করো।",
    check: {
      prompt: "The validator allows the allowlisted public host. For URL (2) — https://169.254.169.254/latest/meta-data/ — the same validator must:",
      options: [
        "Allow it — a metadata endpoint is just another URL",
        "Refuse it — link-local / cloud-metadata ranges are never a legitimate user import, whatever the allowlist says",
        "Fetch it but hide the response",
      ],
      answer: 1,
      explain: "169.254.169.254 is the cloud metadata service — the highest-value SSRF target there is. A validator that cannot refuse it is not a control, which is why the lesson's guard checks the resolved range, not the string.",
    },
    checkBn: {
      prompt: "Validator allowlisted public host-কে allow করে। URL (2) — https://169.254.169.254/latest/meta-data/ — এর জন্য একই validator-কে যা করতে হবে:",
      options: [
        "Allow করতে হবে — metadata endpoint-ও তো একটা URL মাত্র",
        "Refuse করতে হবে — link-local / cloud-metadata range কখনোই বৈধ user import নয়, allowlist যা-ই বলুক",
        "Fetch করে response লুকিয়ে রাখতে হবে",
      ],
      answer: 1,
      explain: "169.254.169.254 হলো cloud metadata service — SSRF-এর সবচেয়ে মূল্যবান target। যে validator এটাকে refuse করতে পারে না, সে কোনো control-ই নয় — এজন্যই পাঠের guard string নয়, resolved range যাচাই করে।",
    },
  },

  "m-mfa-rollout": {
    mode: "try",
    doEn: "Do it first: run the TOTP demo in the try area below — a real RFC 6238 generator from the lesson, provisioned with one secret. Watch it produce a code and then verify that same code. You cannot sequence this company's rollout honestly until you have seen what a factor actually is.",
    doBn: "আগে কাজটা করো: নিচের try area-তে TOTP demo-টা চালাও — পাঠের আসল RFC 6238 generator, একটি secret দিয়ে provision করা। দেখো এটি একটি code তৈরি করে, তারপর সেই একই code verify করে। একটি factor আসলে কী, তা না দেখে এই company-র rollout সৎভাবে সাজানো যায় না।",
    check: {
      prompt: "Running the demo, the verify step returns True because:",
      options: [
        "The code never expires, so any old code works",
        "The app and the server share the same secret and the same 30-second window, so both compute the same 6 digits independently",
        "The code arrives by SMS from the server",
      ],
      answer: 1,
      explain: "No message travels: shared secret + shared time window = the same code on both sides. That is why provisioning (protecting the secret) is the security-critical moment in this company's rollout.",
    },
    checkBn: {
      prompt: "Demo চালালে verify ধাপে True আসে, কারণ:",
      options: [
        "Code-টি কখনো expire হয় না, তাই যেকোনো পুরনো code চলে",
        "App আর server একই secret আর একই 30-second window ভাগ করে, তাই দুই পাশ স্বাধীনভাবে একই 6 digit হিসাব করে",
        "Code-টি server থেকে SMS-এ আসে",
      ],
      answer: 1,
      explain: "কোনো message যাতায়াত করে না: shared secret + shared time window = দুই পাশে একই code। এজন্যই provisioning (secret রক্ষা করা) এই company-র rollout-এর security-critical মুহূর্ত।",
    },
  },

  "m-ad-incident": {
    mode: "try",
    doEn: "Do it first: run the directory watcher in the try area below over the simulated event set. It prints every alarm bell it finds — locate the one that is THIS incident before you answer anything.",
    doBn: "আগে কাজটা করো: নিচের try area-তে simulated event set-এর ওপর directory watcher-টা চালাও। এটি পাওয়া প্রতিটা alarm bell ছাপে — কিছু উত্তর দেওয়ার আগে যেটি এই ঘটনার, সেটি খুঁজে বের করো।",
    check: {
      prompt: "Which scanner finding is THIS mission's 03:12 event?",
      options: [
        "The 4728 event: a user added to Domain Admins by svc-backup",
        "The 4662 event: a replication GUID requested by a workstation (DCSync-class)",
        "A failed-logon burst against the VPN gateway",
      ],
      answer: 0,
      explain: "The output contains more than one alarm — triage means matching the finding to the incident in front of you. The 4728 Domain Admins addition by the backup service account, at 03:12, off-calendar, is this case; the 4662 line is a second fire to open, not this one.",
    },
    checkBn: {
      prompt: "কোন scanner finding-টি এই mission-এর 03:12 ঘটনা?",
      options: [
        "4728 event: svc-backup দ্বারা একজন user Domain Admins-এ যোগ হয়েছে",
        "4662 event: একটি workstation replication GUID চেয়েছে (DCSync-class)",
        "VPN gateway-এর বিরুদ্ধে failed-logon burst",
      ],
      answer: 0,
      explain: "Output-এ একাধিক alarm আছে — triage মানে সামনের ঘটনার সঙ্গে finding মেলানো। Backup service account দ্বারা 03:12-তে, calendar-এর বাইরে, 4728 Domain Admins addition-ই এই case; 4662 লাইনটা দ্বিতীয় আগুন, এটি নয়।",
    },
  },

  "m-apk-release-gate": {
    mode: "try",
    doEn: "Do it first: run the MASVS sheet in the try area below — one category, tested and recorded, exactly as the release gate uses it. Read every PASS/FAIL line and its evidence before you sign anything.",
    doBn: "আগে কাজটা করো: নিচের try area-তে MASVS sheet-টা চালাও — একটি category, tested ও recorded, ঠিক release gate যেভাবে ব্যবহার করে। কিছু সই করার আগে প্রতিটা PASS/FAIL লাইন আর তার evidence পড়ো।",
    check: {
      prompt: "On the sheet you just ran, MASVS-NETWORK-1 is recorded as:",
      options: [
        "PASS — TLS is configured correctly",
        "FAIL — TLS with proper validation (the release build trusts user CAs)",
        "Not tested — the category was skipped",
      ],
      answer: 1,
      explain: "The FAIL is printed with its evidence on the sheet itself — the same finding the scenario names. A release gate that ships over a recorded FAIL is not a gate; that is the judgment this mission then asks for.",
    },
    checkBn: {
      prompt: "তুমি মাত্র চালানো sheet-এ MASVS-NETWORK-1 recorded হয়েছে:",
      options: [
        "PASS — TLS সঠিকভাবে configure করা",
        "FAIL — TLS with proper validation (release build user CA trust করে)",
        "Not tested — category-টি skip করা হয়েছে",
      ],
      answer: 1,
      explain: "FAIL-টি তার evidence-সহ sheet-এর ওপরেই ছাপা — scenario যে finding-এর নাম বলে, সেটিই। Recorded FAIL-এর ওপর দিয়ে ship করা release gate কোনো gate-ই নয়; এই mission এরপর ঠিক এই বিচারটাই চায়।",
    },
  },

  "m-custody-case": {
    mode: "try",
    doEn: "Do it first: run the custody-note generator in the try area below and produce the note that SHOULD have travelled with this drive. Compare its fields, line by line, with what the arrived USB actually came with (nothing).",
    doBn: "আগে কাজটা করো: নিচের try area-তে custody-note generator-টা চালাও আর সেই note-টি তৈরি করো যা এই drive-এর সঙ্গে আসা উচিত ছিল। এর field গুলো লাইন ধরে মেলাও আসা USB-র সঙ্গে সত্যিই যা এসেছে তার সঙ্গে (কিছুই না)।",
    check: {
      prompt: "The generated note carries, from its first lines, three things the arrived drive did NOT have. They are:",
      options: [
        "Item, source, and collected_utc — what it is, where it came from, and when it was collected",
        "A purchase price, a warranty, and an owner's manual",
        "The incident's final verdict",
      ],
      answer: 0,
      explain: "Identity, provenance, timestamp — the note you generated is the minimum chain-of-custody record. The drive arrived with none of the three, and a workstation already broke the chain further by mounting it.",
    },
    checkBn: {
      prompt: "Generated note-টির প্রথম লাইন গুলোতেই তিনটি জিনিস আছে যা আসা drive-টির ছিল না। সেগুলো হলো:",
      options: [
        "Item, source, আর collected_utc — এটি কী, কোথা থেকে এসেছে, আর কখন সংগ্রহ করা হয়েছে",
        "কেনা দাম, warranty, আর মালিকের manual",
        "ঘটনার চূড়ান্ত verdict",
      ],
      answer: 0,
      explain: "Identity, provenance, timestamp — তুমি যে note তৈরি করলে, সেটিই ন্যূনতম chain-of-custody record। Drive-টি এসেছে তিনটির একটিও ছাড়া, আর একটি workstation সেটি mount করে chain-টাকে আরও ভেঙে দিয়েছে।",
    },
  },

  "m-disclosure-drill": {
    mode: "pc",
    doEn: "Do it first: work the disclosure timeline in the try area below into a real day-0 notification for the libparse finding — the actual message you would send, not a description of one.",
    doBn: "আগে কাজটা করো: নিচের try area-র disclosure timeline-টাকে libparse finding-এর জন্য আসল day-0 notification-এ রূপ দাও — সত্যিই যে message পাঠাবে, সেটি; একটির বর্ণনা নয়।",
    stepsEn: [
      "Address it to the library's published security contact — never a public issue tracker, never social media.",
      "Include: what the flaw is (one paragraph, no hype), affected versions as far as you know them, and your minimized reproducer attached.",
      "Include your suggested fix and the testing you did on it.",
      "Propose a coordinated date (the checklist's window) and state you will not publish before it without agreement.",
      "Log the date and keep the thread — the timeline you just read becomes your record.",
    ],
    stepsBn: [
      "এটি library-র প্রকাশিত security contact-কে পাঠাও — কখনো public issue tracker-এ নয়, social media-তেও নয়।",
      "রাখো: flaw-টি কী (এক paragraph, বাড়াবাড়ি ছাড়া), যতদূর জানো affected version, আর তোমার minimized reproducer সংযুক্ত।",
      "তোমার প্রস্তাবিত fix আর সেটির ওপর করা testing রাখো।",
      "একটি coordinated তারিখ প্রস্তাব করো (checklist-এর window) আর বলো সম্মতি ছাড়া তার আগে publish করবে না।",
      "তারিখ log করো আর thread-টি রেখে দাও — তুমি মাত্র পড়া timeline-টাই তোমার record হয়ে যায়।",
    ],
    expectedEn: "One private message containing flaw, reproducer, suggested fix, and a proposed date — sent on day 0, logged on the timeline. Nothing public exists yet; users get patched before anyone gets a headline.",
    expectedBn: "একটি private message যাতে flaw, reproducer, প্রস্তাবিত fix আর একটি প্রস্তাবিত তারিখ আছে — day 0-তে পাঠানো, timeline-এ logged। এখনো public কিছু নেই; headline-এর আগে user-রা patch পায়।",
    check: {
      prompt: "Your day-0 notification must include, above all:",
      options: [
        "A public blog post so users hear it from you first",
        "The minimized reproducer and your suggested fix, sent privately to the library's security contact",
        "A bounty demand — the library ships in a commercial product",
      ],
      answer: 1,
      explain: "You wrote it yourself in the steps: private, complete, and useful to the maintainer on day 0. Public-first disclosure and bounty demands both break the coordinated path the drill rehearses (and this library has no bounty).",
    },
    checkBn: {
      prompt: "তোমার day-0 notification-এ সবার ওপরে থাকতে হবে:",
      options: [
        "একটি public blog post, যাতে user-রা তোমার কাছ থেকেই আগে শোনে",
        "Minimized reproducer আর তোমার প্রস্তাবিত fix, library-র security contact-কে privately পাঠানো",
        "Bounty দাবি — library-টি একটি commercial product-এ যায়",
      ],
      answer: 1,
      explain: "তুমি নিজেই ধাপে লিখেছ: private, complete, আর day 0-তেই maintainer-এর কাজে লাগে এমন। Public-first disclosure আর bounty দাবি — দুটোই drill-এর rehearsal করা coordinated path ভাঙে (আর এই library-র কোনো bounty নেই)।",
    },
  },

  "m-portfolio-review": {
    mode: "pc",
    doEn: "Do it first: using the portfolio index in the try area below as the standard, rewrite Project F's index line the way the review demands — then check the other two flagged artefacts against the same rule.",
    doBn: "আগে কাজটা করো: নিচের try area-র portfolio index-টাকে standard ধরে Project F-এর index লাইনটা review যেভাবে চায় সেভাবে আবার লেখো — তারপর একই নিয়মে বাকি দুটি flagged artefact যাচাই করো।",
    stepsEn: [
      "Open the index template in the try area and find Project F's row shape: claim, BEFORE evidence, AFTER evidence, verification.",
      "Project F today has only an AFTER checklist. Write the line so the gap is explicit: claim stated, BEFORE marked MISSING, AFTER attached.",
      "Apply the same test to Project E's 'validated' rule: a rule is validated only with a benign run AND a malicious run recorded — write what its line may honestly claim today.",
      "For the CV tool line: rewrite it from 'proficient' to what one run honestly supports ('ran X once under Y conditions'), or remove it.",
    ],
    stepsBn: [
      "Try area-তে index template খুলে Project F-এর row আকারটা দেখো: claim, BEFORE evidence, AFTER evidence, verification।",
      "Project F-এর আজ শুধু AFTER checklist আছে। লাইনটা এমনভাবে লেখো যাতে gap-টা স্পষ্ট হয়: claim বলা আছে, BEFORE MISSING চিহ্নিত, AFTER সংযুক্ত।",
      "একই test Project E-এর 'validated' rule-এ লাগাও: একটি rule তখনই validated যখন benign run আর malicious run দুটোই recorded — আজ তার লাইন সৎভাবে যা দাবি করতে পারে, তা লেখো।",
      "CV-র tool লাইনের জন্য: 'proficient' বদলে একবার চালানো সৎভাবে যা সমর্থন করে তা লেখো ('X একবার Y condition-এ চালিয়েছি'), নয়তো লাইনটা সরিয়ে দাও।",
    ],
    expectedEn: "Three corrected lines, each making its evidence gap visible instead of hiding it behind adjectives: F shows BEFORE: MISSING, E claims 'detects the test payload' (not 'validated'), and the CV line states one honest run or is gone.",
    expectedBn: "তিনটি সংশোধিত লাইন, প্রতিটি adjective-এর পেছনে না লুকিয়ে evidence gap-টা দৃশ্যমান করে: F দেখায় BEFORE: MISSING, E দাবি করে 'detects the test payload' ('validated' নয়), আর CV লাইনে একটি সৎ run-এর কথা থাকে নয়তো লাইনটাই নেই।",
    check: {
      prompt: "Project F's index line is fixed when it shows:",
      options: [
        "A stronger adjective in place of the missing evidence",
        "BEFORE and AFTER checklists — evidence for both states of the claim, with any gap marked, not hidden",
        "A longer description of the project",
      ],
      answer: 1,
      explain: "The index standard you just applied: every claim carries both states of its evidence. 'Zero adjectives' means exactly this — the BEFORE gap gets printed, not papered over.",
    },
    checkBn: {
      prompt: "Project F-এর index লাইন ঠিক হয় যখন তা দেখায়:",
      options: [
        "অনুপস্থিত evidence-এর জায়গায় একটি শক্তিশালী adjective",
        "BEFORE আর AFTER checklist — claim-এর দুই অবস্থারই evidence, যেকোনো gap লুকানো নয়, চিহ্নিত",
        "Project-এর দীর্ঘতর বর্ণনা",
      ],
      answer: 1,
      explain: "তুমি মাত্র প্রয়োগ করা index standard: প্রতিটি claim তার evidence-এর দুই অবস্থাই বহন করে। 'Zero adjectives' মানে ঠিক এটাই — BEFORE gap-টা ছাপা হয়, ঢাকা পড়ে না।",
    },
  },

  "m-l24-refactor": {
    mode: "try",
    doEn: "Do it first: run the Big-O lab in the try area below and read the printed table — exact step counts for linear, quadratic and logarithmic work at three sizes. The fix plan for the slow tool is priced from that table, not from intuition.",
    doBn: "আগে কাজটা করো: নিচের try area-তে Big-O lab-টা চালাও আর ছাপা table-টা পড়ো — তিনটি size-এ linear, quadratic আর logarithmic কাজের exact step count। Slow tool-এর fix plan-এর মূল্য ওই table থেকেই আসে, আন্দাজ থেকে নয়।",
    check: {
      prompt: "The run prints, for n = 1000: '1000 1000 1000000 9'. The 1000000 is:",
      options: [
        "The linear step count",
        "The quadratic (n²) step count — the pair-comparison cost, the shape of the tool's slowest feature",
        "The logarithmic step count",
      ],
      answer: 1,
      explain: "Same input, three prices: 1,000 linear, 9 logarithmic, 1,000,000 quadratic. The teammate's 'count pairs' feature is the quadratic one — that is why the fix plan attacks shapes, not hardware.",
    },
    checkBn: {
      prompt: "Run-টি n = 1000-এর জন্য ছাপে: '1000 1000 1000000 9'। এই 1000000 হলো:",
      options: [
        "Linear step count",
        "Quadratic (n²) step count — pair-comparison-এর খরচ, tool-এর সবচেয়ে ধীর feature-টির আকার",
        "Logarithmic step count",
      ],
      answer: 1,
      explain: "একই input, তিনটি দাম: 1,000 linear, 9 logarithmic, 1,000,000 quadratic। Teammate-এর 'count pairs' feature-টাই quadratic — এজন্যই fix plan hardware নয়, shape আক্রমণ করে।",
    },
  },

  "m-l27-schema": {
    mode: "try",
    doEn: "Do it first: run the normalization lab in the try area below — the update anomaly demonstrated live on the flat table vs the decomposed one. Watch what the flat table answers after one 'fix' to Rima's phone number.",
    doBn: "আগে কাজটা করো: নিচের try area-তে normalization lab-টা চালাও — flat table বনাম decomposed table-এ update anomaly live দেখানো হয়েছে। Rima-র phone number-এ একবার 'fix'-এর পর flat table কী উত্তর দেয়, দেখো।",
    check: {
      prompt: "After the phone fix, the FLAT table says Rima lives in:",
      options: [
        "Only Chattogram — the update worked",
        "['Chattogram', 'Dhaka'] — two different answers: the update anomaly, live",
        "Neither — her rows were deleted",
      ],
      answer: 1,
      explain: "One fact stored in many rows updates in one place and contradicts itself everywhere else — you watched it happen. The decomposed table answers once, which is the whole argument of the review you are about to write.",
    },
    checkBn: {
      prompt: "Phone fix-এর পর FLAT table বলে Rima থাকে:",
      options: [
        "শুধু Chattogram-এ — update কাজ করেছে",
        "['Chattogram', 'Dhaka'] — দুটি আলাদা উত্তর: update anomaly, live",
        "কোনোটিতেই না — তার row মুছে গেছে",
      ],
      answer: 1,
      explain: "একটি তথ্য অনেক row-তে রাখলে এক জায়গায় update হয় আর বাকি সব জায়গায় নিজের সঙ্গেই contradict করে — তুমি তা ঘটতে দেখলে। Decomposed table একবার উত্তর দেয়, আর তুমি এখন যে review লিখবে তার পুরো যুক্তিটাই এটাই।",
    },
  },

  "m-l28-sprint": {
    mode: "pc",
    doEn: "Do it first: using the sprint-plan artefact in the try area below, slice this rescue project into a Sprint 1 — on paper, now: the smallest client-visible slice, its written requirements, and its demo.",
    doBn: "আগে কাজটা করো: নিচের try area-র sprint-plan artefact ব্যবহার করে এই rescue project-টাকে একটি Sprint 1-এ কাটো — এখন, কাগজে: সবচেয়ে ছোট client-visible slice, তার লিখিত requirement, আর তার demo।",
    stepsEn: [
      "Pick the ONE slice the client can judge: for a shop app, 'browse products and place an order' end-to-end — not 'the backend'.",
      "Write its requirements as a short list the client signs — this project has never had any; Sprint 1 creates them for slice 1 only.",
      "List the sprint's tasks from the inherited code: what exists, what is missing, what gets tested INSIDE this sprint (not 'at the end').",
      "Book the demo at the sprint's end and name who attends — the client has never seen this app; the demo is the rescue's first feedback loop.",
    ],
    stepsBn: [
      "Client বিচার করতে পারে এমন একটি slice বেছে নাও: shop app-এর জন্য 'browse products and place an order' end-to-end — 'the backend' নয়।",
      "তার requirement ছোট একটি list হিসেবে লেখো যা client সই করে — এই project-এ কখনোই ছিল না; Sprint 1 শুধু slice 1-এর জন্য তা তৈরি করে।",
      "Inherited code থেকে sprint-এর task list করো: কী আছে, কী নেই, আর এই sprint-এর ভেতরেই কী test হবে ('শেষে' নয়)।",
      "Sprint-এর শেষে demo book করো আর কে আসবে নাম লেখো — client এই app কখনো দেখেনি; demo-ই rescue-র প্রথম feedback loop।",
    ],
    expectedEn: "A one-page Sprint 1: a signed slice, its task list with tests inside the sprint, and a booked demo. Everything else (other slices, the full plan) waits — that restraint is the method.",
    expectedBn: "এক পৃষ্ঠার Sprint 1: একটি সই করা slice, sprint-এর ভেতরে test-সহ task list, আর একটি booked demo। বাকি সব (অন্য slice, পুরো plan) অপেক্ষা করে — ওই সংযমটাই method।",
    check: {
      prompt: "A correct Sprint 1 for this rescue ends with:",
      options: [
        "All features coded — testing starts after",
        "Software the client can touch and react to — a demo-able slice, with its tests already run inside the sprint",
        "Complete final documentation for the whole app",
      ],
      answer: 1,
      explain: "The template's rule, which your plan just followed: every sprint ends in software a user can touch. Four weeks of invisible work is how this project got into trouble; Sprint 1 makes progress visible and testable in days.",
    },
    checkBn: {
      prompt: "এই rescue-র জন্য একটি সঠিক Sprint 1 শেষ হয়:",
      options: [
        "সব feature coded — testing তার পরে শুরু",
        "Client ছুঁয়ে প্রতিক্রিয়া দিতে পারে এমন software — একটি demo-যোগ্য slice, যার test sprint-এর ভেতরেই চালানো হয়ে গেছে",
        "পুরো app-এর complete final documentation",
      ],
      answer: 1,
      explain: "Template-এর নিয়ম, যা তোমার plan মাত্র অনুসরণ করল: প্রতিটি sprint শেষ হয় user ছুঁতে পারে এমন software-এ। চার সপ্তাহের অদৃশ্য কাজেই এই project বিপদে পড়েছে; Sprint 1 অগ্রগতিকে দিনের মধ্যে দৃশ্যমান ও testable করে।",
    },
  },
};
