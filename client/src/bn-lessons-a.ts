// Per-item Bangla translations — Levels 0–3 lessons.
// Every array is index-aligned with the English lesson's own arrays, so each
// English item renders with ITS OWN Bangla line directly underneath it
// (English+Bangla mode) or alone (Bangla mode). No blanket/summary glosses.
// Technical terms, tool names, code and commands stay in English inside the
// Bangla text, exactly as a Bangladeshi professional would say them.

export type LessonBn = {
  objectives: string[];
  relevance: string;
  concept: string[];
  diagram: string[];
  termsBn: string[];
  mistakes: string[];
  security: string;
  pc: string[];
  android: string[];
  lab: string;
  mission: string;
  practical: string;
  summary: string;
  skillGained: string;
  codeLines: string[];
  quizQ: string[];
  quizWhy: string[];
};

export const BN_A: Record<string, LessonBn> = {
  "l0-what-is-cybersecurity": {
    objectives: [
      "সাইবার নিরাপত্তা কাকে বলে, কাজের ভাষায় সংজ্ঞা দিতে পারবে",
      "বাস্তব উদাহরণ দিয়ে CIA triad (তিনটি মূল স্তম্ভ) বুঝিয়ে বলতে পারবে",
      "Threat (হুমকি), vulnerability (দুর্বলতা), exploit (দুর্বলতার সুযোগ নেওয়ার পদ্ধতি) আর risk (ঝুঁকি) — এই চারটির পার্থক্য বলতে পারবে",
      "প্রতিরক্ষামূলক (defensive) কাজের প্রধান job পরিবারগুলোর নাম বলতে পারবে",
    ],
    relevance: "প্রতিটি নিরাপত্তা চাকরি — SOC analyst, pentester, engineer — মানুষের নির্ভর করা সিস্টেমের confidentiality (গোপনীয়তা), integrity (অখণ্ডতা) আর availability (সহজলভ্যতা) রক্ষার চারপাশেই সাজানো। এই শব্দগুলো job interview, incident report আর NIST CSF 2.0-এর মতো standard-এ হুবহু ব্যবহৃত হয়।",
    concept: [
      "সাইবার নিরাপত্তা মানে সিস্টেম, network আর data-কে অননুমোদিত প্রবেশ, ক্ষতি আর ব্যাঘাত থেকে রক্ষা করা — আর রক্ষা ব্যর্থ হলে তা শনাক্ত করে সেরে ওঠা। এটা একটা tool বা একটা চাকরি নয়; এটা একটা চক্র: কী গুরুত্বপূর্ণ তা চেনা, তা রক্ষা করা, আক্রমণ শনাক্ত করা, সাড়া দেওয়া, আর পুনরুদ্ধার করা। NIST CSF 2.0 এই কাঠামোকেই Govern, Identify, Protect, Detect, Respond, Recover নামে সাজিয়েছে।",
      "চারটি শব্দ এই ক্ষেত্রের বেশিরভাগ ভার বহন করে। Threat (হুমকি) হলো যা ক্ষতি করতে পারে — অপরাধী দল, অসাবধান কর্মী, এমনকি বন্যা। Vulnerability (দুর্বলতা) হলো কাজে লাগানো যায় এমন দুর্বল জায়গা — patch না করা software, একই password বারবার ব্যবহার। Exploit হলো সেই দুর্বলতা কাজে লাগানোর পদ্ধতি। Risk (ঝুঁকি) হলো এগুলোর মিলিত হিসাব: ক্ষতি হওয়ার সম্ভাবনা কত, আর হলে কতটা খারাপ হবে। নিরাপত্তার কাজ মূলত এই শৃঙ্খলা — কোনো threat দুর্বলতা কাজে লাগানোর আগেই তা খুঁজে বের করা, আর কাজে লাগালে ক্ষতি কমানো।",
      "CIA triad বলে দেয় তুমি আসলে কী রক্ষা করছ। Confidentiality: শুধু অনুমোদিত মানুষই data পড়তে পারবে। Integrity: অনুমতি ছাড়া data বা সিস্টেম বদলানো যাবে না। Availability: দরকারের সময় সিস্টেম চলবে। হাসপাতালে ransomware ঘটনা মূলত availability (ও নিরাপত্তা) ব্যর্থতা; password database ফাঁস হওয়া confidentiality ব্যর্থতা; চুপিসারে bank balance বদলে যাওয়া integrity ব্যর্থতা। কোন স্তম্ভ ভাঙল, তা বলতে পারলেই বোঝা যায় আগে কী ঠিক করতে হবে।",
    ],
    diagram: [
      "CONFIDENTIALITY (গোপনীয়তা) — শুধু অনুমোদিত প্রবেশ (encryption, access control, MFA)",
      "INTEGRITY (অখণ্ডতা) — অনুমতি ছাড়া কোনো বদল নয় (hashing, signature, audit log)",
      "AVAILABILITY (সহজলভ্যতা) — দরকারের সময় সিস্টেম চলবে (patching, backup, redundancy)",
      "এই কোর্সের প্রতিটি control অন্তত একটি স্তম্ভের সঙ্গে মেলে। যেই control কোনোটাই রক্ষা করে না, সেটা শুধু সাজসজ্জা।",
    ],
    termsBn: [
      "ব্যবহারকারী আসলেই সে কিনা যাচাই করা — যেমন login-এ password + MFA।",
      "পরিচয় যাচাই হওয়ার পর সে কী কী করতে পারবে, তা ঠিক করা — যেমন cashier order দেখতে পারে, কিন্তু refund করতে পারে না।",
      "আক্রমণকারী পৌঁছাতে পারে এমন সবকিছু: খোলা port, web form, কর্মীদের inbox, ভুলে যাওয়া test server।",
      "ঝুঁকি কমানোর ব্যবস্থা: firewall rule, policy, MFA, backup। Control প্রতিরোধ করতে পারে, শনাক্ত করতে পারে, বা ঠিক করতে পারে।",
      "Security Operations Center — যেই team সার্বক্ষণিক (সাধারণত shift-এ, 24/7) alert পর্যবেক্ষণ করে আর ঘটনায় সাড়া দেয়।",
    ],
    mistakes: [
      "সব সমস্যাকে 'hack' বলা — বেশিরভাগ ঘটনায় জড়িত থাকে একই password পুনর্ব্যবহার আর patch না করার মতো সাধারণ দুর্বলতা।",
      "কোন ঝুঁকি কমাবে তা না জেনেই tool কিনে ফেলা।",
      "নিরাপত্তাকে শুধু প্রতিরোধ ভাবা; শনাক্তকরণ আর পুনরুদ্ধার কাজের অর্ধেক।",
    ],
    security: "এই পাঠ পুরো platform-এর নিয়ম ঠিক করে দেয়: নিরাপত্তার যেকোনো দাবিতে সম্পদ (asset), ঝুঁকি (risk) আর control — এই তিনটির নাম থাকতে হবে। অস্পষ্ট পরামর্শ ('অনলাইনে সাবধানে থাকো') পেশাদার কাজ নয়।",
    pc: [
      "তোমার Windows PC-তে Settings → Privacy & security খুলে দেখো কোন কোন সুরক্ষা চালু আছে (এটা শুধু পর্যবেক্ষণ — এখন কিছু বদলাবে না)।",
      "তুমি ব্যক্তিগতভাবে নির্ভর করো এমন তিনটি digital সম্পদ (email, ছবি, পড়াশোনার কাজ) লেখো, আর প্রতিটির জন্য একটি করে ঝুঁকি ও একটি করে control লেখো।",
    ],
    android: [
      "Android-এ: Settings → Security & privacy। দেখো screen lock, Find My Device আর automatic update চালু আছে কিনা।",
      "Privacy → Permission manager-এ গিয়ে দেখো কোন app গুলো সংবেদনশীল permission (location, microphone) ধরে রেখেছে।",
    ],
    lab: "Guided lab: Interactive Labs-এর 'Risk Classification' lab ঠিক এই অনুশীলনটাই feedback সহ হাঁটিয়ে নেয়।",
    mission: "স্বাধীন mission: পরিবারের কারো ফোনের settings (তার অনুমতি নিয়ে) যাচাই করে CIA triad ব্যবহার করে ৫ লাইনের ঝুঁকি-নোট লেখো।",
    practical: "Practical মূল্যায়ন: নিচের quiz ও Level 0 মূল্যায়নে তিনটি নতুন পরিস্থিতি দেওয়া হবে — প্রতিটিকে CIA-র কোন স্তম্ভে পড়ে তা ভাগ করো আর একটি control প্রস্তাব করো। Skill Assessment-এ নম্বর দেওয়া হবে।",
    summary: "সাইবার নিরাপত্তা confidentiality, integrity আর availability রক্ষা করে। কাজ শুরু হয় সম্পদ আর ঝুঁকি থেকে, আর প্রতিটি control-কে কোন ঝুঁকি কমায় তার সঙ্গে মিলতে হবে।",
    skillGained: "পেশাদার report-এ ব্যবহৃত নিরাপত্তা শব্দভাণ্ডার আর ঝুঁকি শ্রেণিবিন্যাসের দক্ষতা।",
    codeLines: [
      "শুরু করো সম্পদ (এখানে order গুলো) থেকে, tool থেকে নয়।",
      "প্রতিটি ঝুঁকি CIA-র কোন স্তম্ভকে হুমকি দেয়, তার নাম বলো — তাতেই ঠিক হয় সমাধান কী হবে।",
      "প্রতিটি ঝুঁকির জন্য বাস্তবসম্মত, সাধ্যের মধ্যে control দাও — 'আরও সাবধান হও' নয়।",
    ],
    quizQ: [
      "একজন আক্রমণকারী একটি কোম্পানির customer database কপি করে নিল। CIA-র কোন স্তম্ভ প্রথমে ভাঙল?",
      "Vulnerability (দুর্বলতা) কাকে বলে?",
      "Detective control (শনাক্তকারী ব্যবস্থা)-এর সেরা উদাহরণ কোনটি?",
    ],
    quizWhy: [
      "অনুমতি ছাড়া data পড়া হলো confidentiality ব্যর্থতা। Authentication একটি পদ্ধতি, triad-এর স্তম্ভ নয়।",
      "Vulnerability হলো দুর্বলতাটাই; threat সেটা কাজে লাগায়; ফলাফল হলো ক্ষতি (impact)।",
      "Alert ঘটনা শনাক্ত করে। Firewall আর encryption প্রতিরোধ করে; policy নিয়ম ঠিক করে।",
    ],
  },
  "l0-ethics-law": {
    objectives: [
      "কেন authorization (অনুমতি)-ই পরীক্ষা আর অপরাধের মধ্যে সীমারেখা, তা বোঝাতে পারবে",
      "Responsible disclosure (দায়িত্বশীলভাবে দুর্বলতা জানানো) ধাপে ধাপে বর্ণনা করতে পারবে",
      "কোন কোন পরিবেশে তুমি আইনগতভাবে অনুশীলন করতে পারবে, তা চিনতে পারবে",
      "এক অনুচ্ছেদের একটি scope statement (পরীক্ষার পরিধির লিখিত বিবৃতি) লিখতে পারবে",
    ],
    relevance: "একই technical কাজ — একটি server scan করা — লিখিত অনুমতিসহ একটি বেতনের পেশাদার সেবা, আর অনুমতি ছাড়া একটি ফৌজদারি অপরাধ। নিয়োগদাতা ও client tool সম্পর্কে জিজ্ঞাসা করার আগেই authorization নিয়ে জিজ্ঞাসা করবে। বাংলাদেশে অননুমোদিত প্রবেশ Cyber Security Act 2023 অনুযায়ী অপরাধ; বেশিরভাগ দেশেই সমতুল্য আইন আছে (যেমন US CFAA, UK Computer Misuse Act)।",
    concept: [
      "Authorization (অনুমতি) হয় লিখিত, নির্দিষ্ট, আর দেন সিস্টেমের মালিক বা দায়িত্বপ্রাপ্ত ব্যক্তি। 'আমার বন্ধু বলেছে আমি তার কোম্পানির website test করতে পারি' — এটা authorization নয়, কারণ তোমার বন্ধু কোম্পানির network-এর মালিক নয়। সঠিক scope-এ সিস্টেমের নাম (domain, IP range, app), অনুমোদিত কৌশল, সময়ের সীমা, আর সীমার বাইরের বিষয়গুলো (যেমন: denial-of-service নয়, আসল customer data-তে প্রবেশ নয়) স্পষ্ট থাকে।",
      "Responsible disclosure হলো নিজের মালিকানায় নেই এমন সিস্টেমে পাওয়া দুর্বলতা জানানোর পদ্ধতি: মালিককে গোপনে যোগাযোগ করো, সমস্যাটা পরিষ্কার করে বর্ণনা করো, যুক্তিসংগত সময় দাও, আর প্রয়োজনের ন্যূনতম প্রমাণের বাইরে বিস্তারিত প্রকাশ বা সুযোগ নেওয়া করো না। অনেক প্রতিষ্ঠান bug bounty program চালায়, যেখানে প্রকাশিত scope আর নিয়মই তোমার authorization দলিল; তার বাইরের সবকিছু সীমার বাইরে।",
      "তোমার আইনগত অনুশীলনের পরিবেশ যথেষ্ট প্রশস্ত: নিজের computer, নিজে বানানো virtual machine, নিজের machine-এর Docker container, Android emulator, ইচ্ছাকৃতভাবে দুর্বল রাখা training app, CTF platform, আর এই app-এর simulation। এই কোর্সের সবকিছু শেখার জন্য এটাই যথেষ্ট। বাকি সবকিছুর নিয়ম সহজ: নিজেকে যদি জিজ্ঞাসা করতে হয় 'এটা কি অনুমোদিত?', তাহলে লিখিত অনুমতি না পাওয়া পর্যন্ত উত্তর 'না'।",
    ],
    diagram: [
      "১. এই সিস্টেমটা কি আমার নিজের, নাকি মালিকের কাছ থেকে লিখিত অনুমতি আছে?",
      "২. নির্দিষ্ট target (host / app / account) কি লিখিত scope-এর ভেতরে আছে?",
      "৩. আমি যেসব কৌশল ব্যবহারের পরিকল্পনা করছি, তা কি scope বা program-এর নিয়মে অনুমোদিত?",
      "৪. কিছু ভেঙে গেলে কীভাবে থামব, আর কার সঙ্গে যোগাযোগ করব — তা কি জানি?",
      "কোনোটির উত্তর 'না' বা 'নিশ্চিত নই' হলে → আগে থামো, পরিষ্কার করে নাও।",
    ],
    termsBn: [
      "কী পরীক্ষা করা যাবে, কীভাবে, আর কখন — তার লিখিত তালিকা। Scope-এর বাইরের কাজ অননুমোদিত।",
      "একটি পরীক্ষার জন্য সম্মত সীমাবদ্ধতা: সময়, কৌশল, নিষিদ্ধ কাজ, যোগাযোগের ব্যক্তি।",
      "দুর্বলতা মালিককে গোপনে জানানো, প্রকাশের আগে ঠিক করার সময়সহ।",
      "এমন program যেখানে প্রতিষ্ঠান প্রকাশিত নিয়মে নির্দিষ্ট সম্পদ পরীক্ষার আমন্ত্রণ জানায়, কখনো পুরস্কারসহ। অর্থ পাওয়ার কোনো নিশ্চয়তা নেই।",
    ],
    mistakes: [
      "'শুধু দেখতে' একটি live website test করা — একটি port scan-ও অননুমোদিত হতে পারে, আর তা log হয়ে থাকে।",
      "সিস্টেমের মালিক নয় এমন কারো মৌখিক অনুমতিতে ভরসা করা।",
      "মালিকের ঠিক করার যুক্তিসংগত সুযোগ পাওয়ার আগেই দুর্বলতা প্রকাশ করে দেওয়া।",
    ],
    security: "CyberLab-এর প্রতিটি lab, mission আর CTF-এর প্রথম লাইনেই তার অনুমোদিত পরিবেশের নাম থাকে। কোনো অনুশীলন কখনো আসল তৃতীয় পক্ষের সিস্টেমের দিকে ইঙ্গিত করছে মনে হলে, সেটাকে bug হিসেবে ধরে থেমে যাও।",
    pc: [
      "Template ব্যবহার করে তোমার নিজের home lab-এর জন্য একটি scope statement লেখো।",
      "একটি আসল bug bounty program-এর scope page খুঁজো (program-টির নিজের কাছ থেকে) আর তার ঠিক করা তিনটি নিয়ম নোট করো।",
    ],
    android: [
      "শুধু নিজের ফোনে: কোন app গুলো তুমি আইনগতভাবে security-test করতে পারো (নিজে বানানো বা training app) আর বাকি সবগুলোর তালিকা আলাদা করো।",
    ],
    lab: "Guided lab: Cyber Terminal-এর challenge mode প্রতিটি অনুশীলন তার scope লাইন দিয়ে শুরু করে — টাইপ করার আগে সেটা পড়ার অনুশীলন করো।",
    mission: "Mission: Missions-এর 'The Permission Slip' — একটি পরিস্থিতি পর্যালোচনা করে যুক্তিসহ সিদ্ধান্ত নাও পরীক্ষা এগোতে পারবে কিনা।",
    practical: "Practical মূল্যায়ন: একটি অস্পষ্ট অনুরোধ ('আমাদের site নিরাপদ কিনা দেখো')-কে scope-বদ্ধ, অনুমোদিত test plan-এ আবার লেখো।",
    summary: "অনুমতি ছাড়া দক্ষতা মানেই দায়। আগে মালিকের কাছ থেকে লিখিত scope — তারপর কৌশল।",
    skillGained: "পেশাদার authorization আর disclosure (দায়িত্বশীল জানানো) চর্চা।",
    codeLines: [
      "Target-এর নাম হুবহু নির্দিষ্ট থাকে; 'internet' কখনো target নয়।",
      "নিষিদ্ধ কাজগুলো ধরে নেওয়া হয় না — লিখে রাখা হয়।",
      "একটি stop condition (থামার শর্ত) lab অবাক করলেও তোমাকে রক্ষা করে।",
    ],
    quizQ: [
      "ব্যাংকে চাকরি করা এক বন্ধু বলল, 'যাও, আমাদের banking app test করো।' এটা কি authorization?",
      "তুমি দুর্ঘটনাবশত একটি public website-এ দুর্বলতা পেয়ে গেলে। দায়িত্বশীল পরবর্তী পদক্ষেপ কী?",
      "কোন পরিবেশ অনুশীলনের জন্য সবসময় গ্রহণযোগ্য?",
    ],
    quizWhy: [
      "Authorization আসতে হবে মালিকের কাছ থেকে, লিখিতভাবে, scope-সহ। একজন কর্মচারীর মুখের সম্মতি এর কোনোটাই নয়।",
      "Responsible disclosure: গোপনে report, ন্যূনতম প্রমাণ, ঠিক করার জন্য যুক্তিসংগত সময়।",
      "তোমার নিজের VM তোমারই। বাকি সবকিছুর জন্য মালিকের লিখিত অনুমতি লাগে।",
    ],
  },
  "l0-teams-roles": {
    objectives: [
      "Red, Blue আর Purple team-এর কাজের পার্থক্য বলতে পারবে",
      "একজন SOC analyst একটি shift-এ আসলে কী করে, তা বর্ণনা করতে পারবে",
      "Pentester, security engineer আর researcher ভূমিকার তুলনা করতে পারবে",
      "পথের লক্ষ্য হিসেবে প্রথম একটি career target বেছে নিতে পারবে",
    ],
    relevance: "CyberLab-এর পরের track গুলো Red, Blue আর Purple পথে ভাগ হয়। প্রতিটি ভূমিকা প্রতিদিন কী তৈরি করে — Blue-র জন্য ticket আর timeline, Red-এর জন্য scope-বদ্ধ report, Purple-এর জন্য detection উন্নতি — তা জানলে তুমি অস্পষ্ট 'hacker' ছবির বদলে আসল job description লক্ষ্য করে project আর portfolio সাজাতে পারবে।",
    concept: [
      "Blue team রক্ষা করে: SOC-তে alert পর্যবেক্ষণ, সন্দেহজনক login তদন্ত, সিস্টেম শক্তিশালী (hardening) করা, দুর্বলতা ব্যবস্থাপনা, ঘটনায় সাড়া দেওয়া। Entry-level নিরাপত্তা চাকরির বেশিরভাগই Blue team-এর, আর সেখানে tool-দক্ষতার মতোই যত্নশীল note, শান্ত triage (অগ্রাধিকার অনুযায়ী বাছাই) আর পরিষ্কার লেখা পুরস্কৃত হয়।",
      "Red team আক্রমণ করে — লিখিত authorization নিয়ে: pentester আর red team operatorরা scope-বদ্ধ target-এর বিরুদ্ধে আক্রমণকারীর অনুকরণে প্রমাণ করে একজন আক্রমণকারী আসলে কী অর্জন করতে পারে, তারপর তা report করে যাতে Blue team ঠিক করতে পারে। Deliverable 'আমরা ঢুকে গেছি' নয়; তা হলো প্রমাণ, প্রভাব (impact), আর client কাজে লাগাতে পারে এমন প্রতিকার পরামর্শ।",
      "Purple team হলো দুই দলের সহযোগিতা: lab-এ নিয়ন্ত্রিত আক্রমণ অনুকরণ চালাও, রক্ষাকারীরা কী দেখল (আর কী মিস করল) তা লক্ষ্য করো, আর একসাথে detection উন্নত করো। MITRE ATT&CK হলো তাদের অভিন্ন ভাষা — একই technique ID Red-এর কাছে আক্রমণের নাম, Blue-র কাছে detection ঘাটতির নাম। CyberLab-এর Red/Blue/Purple track-এর shared incident exercise ঠিক এভাবেই বানানো।",
    ],
    diagram: [
      "RED (অনুমোদিত, lab-এ): 'একটি phishing ফাঁদ থেকে সন্দেহজনক PowerShell চালু হয়েছিল।'",
      "BLUE (SOC): '09:41-এ alert এসেছে; 10:05-এর মধ্যে আমরা host-টিকে বিচ্ছিন্ন (contain) করেছি।'",
      "PURPLE (একসাথে): 'চালু হওয়াটা ধরা পড়েছিল, কিন্তু তার আগের DNS lookup অদৃশ্য ছিল — নতুন detection লেখা হয়েছে ও আবার test করা হয়েছে।'",
    ],
    termsBn: [
      "Alert গুলোকে তীব্রতা ও সম্ভাবনা অনুযায়ী সাজানো, যাতে আসল ঘটনাগুলো আগে মনোযোগ পায়।",
      "অনুমোদিত পরীক্ষক, যিনি scope-বদ্ধ সিস্টেমে দুর্বলতা যাচাই করেন আর পেশাদারভাবে finding report করেন।",
      "প্রতিরক্ষা তৈরি ও রক্ষণাবেক্ষণ করেন: identity, logging, network ও endpoint control।",
      "নতুন দুর্বলতা বা কৌশল খুঁজে নথিভুক্ত করেন, সাধারণত responsible disclosure মেনে।",
    ],
    mistakes: [
      "Red team-কে 'আসল hacking' আর Blue team-কে কম গুরুত্বপূর্ণ ভাবা — নিয়োগের সংখ্যা আর career গভীরতা উল্টোটা বলে।",
      "ভূমিকাকে tool দিয়ে বিচার করা, deliverable (report, detection, timeline) দিয়ে নয়।",
      "নথিভুক্তকরণ (documentation) দক্ষতা এড়িয়ে যাওয়া; উপরের প্রতিটি ভূমিকার মূল্যায়ন হয় তার লেখা দিয়েই।",
    ],
    security: "CyberLab শুধু পাঠ শেষ করার জন্য কখনো 'expert' মর্যাদা দেয় না। Skill level (Beginner → Professional Readiness) অর্জিত হয় মূল্যায়ন, lab আর project-এ — নিয়োগদাতারা ঠিক এই প্রমাণই চান।",
    pc: [
      "দুটি আসল job বিজ্ঞাপন পড়ো (একটি SOC analyst, একটি junior pentester) আর প্রতিটিতে সবচেয়ে বেশি পুনরাবৃত্ত পাঁচটি প্রয়োজনীয়তা তালিকাভুক্ত করো।",
    ],
    android: [
      "CyberLab-এর কোন track প্রথমে চেষ্টা করবে, তা নোট করো; পরে বদলাতে পারবে — ভিত্তি (foundation) সবার জন্য একই।",
    ],
    lab: "Guided lab: SOC Training-এর প্রথম simulated alert ঠিক এই failed-login ধরনটাই।",
    mission: "Mission: একটি ভূমিকা বেছে নিয়ে তার deliverable থেকে আধা-পৃষ্ঠার 'একদিনের কাজের চিত্র' লেখো, এই পাঠ ব্যবহার করে।",
    practical: "Practical মূল্যায়ন: Skill Assessment-এর diagnostic তোমার বর্তমান শক্তিকে একটি প্রস্তাবিত প্রথম track-এর সঙ্গে মিলিয়ে দেয়।",
    summary: "Blue রক্ষা করে, Red যাচাই করে (অনুমতি নিয়ে), Purple একসাথে কাজ করে detection উন্নত করে। প্রথম একটি track বেছে নাও; ভিত্তি সবার জন্য অভিন্ন।",
    skillGained: "Career ভূমিকা সম্পর্কে ধারণা আর track নির্বাচন।",
    codeLines: [
      "আগে সময়: timeline-ই তদন্ত জেতায়।",
      "তথ্যকে গৃহীত পদক্ষেপ থেকে আলাদা রাখা হয়েছে।",
      "একটি ticket নম্বর পরের shift-এর জন্য চক্রটি সম্পূর্ণ করে।",
    ],
    quizQ: [
      "Purple team-এর কাজ সবচেয়ে ভালোভাবে কীভাবে বর্ণনা করা যায়?",
      "একজন pentester-এর প্রধান deliverable কী?",
      "Entry-level নিরাপত্তা নিয়োগের বেশিরভাগ কোথায় কেন্দ্রীভূত?",
    ],
    quizWhy: [
      "Purple = কাঠামোগত সহযোগিতা: অনুকরণ করো, detection পর্যবেক্ষণ করো, উন্নত করো, আবার test করো।",
      "Client অর্থ দেয় এমন finding-এর জন্য যা তারা ঠিক করতে পারে, পেশাদার মানে নথিভুক্ত।",
      "Monitoring আর প্রতিরক্ষা 24/7 চলে, আর junior পর্যায়ে offensive ভূমিকার তুলনায় অনেক বেশি নিয়োগ হয়।",
    ],
  },
  "l1-inside-computer": {
    objectives: [
      "CPU, RAM, storage আর GPU — প্রতিটি কী করে, তা বোঝাতে পারবে",
      "Power button থেকে login পর্যন্ত boot ধারাটি ধাপে ধাপে বলতে পারবে",
      "BIOS, UEFI আর Secure Boot-এর পার্থক্য করতে পারবে",
      "নিজের machine-এর hardware ও firmware অবস্থা পরীক্ষা করতে পারবে",
    ],
    relevance: "যে সিস্টেমের ছবি মাথায় নেই, তা তুমি সুরক্ষিত করতে পারবে না। Boot নিরাপত্তা (UEFI, Secure Boot, TPM) ঠিক করে কোন operating system লোড হবে — যেটা তুমি বিশ্বাস করো সেটাই কিনা। আর process ও memory-র ভিত্তি ঠিক করে পরে forensics-এ তুমি process তালিকা বা crash dump পড়তে পারবে কিনা।",
    concept: [
      "CPU নির্দেশনা (instruction) পালন করে; RAM বর্তমানে ব্যবহৃত code আর data ধরে রাখে আর power বন্ধ হলেই সব ভুলে যায়; storage (SSD/HDD) data স্থায়ীভাবে রাখে কিন্তু অনেক ধীর; GPU সমান্তরাল কাজ যেমন graphics ত্বরান্বিত করে — আর পরে যেটা কাজে লাগবে, password-cracking-এর গণিতও। তাই আক্রমণকারীরা GPU পছন্দ করে, আর রক্ষাকারীরা ধীরগতির, salt-যুক্ত password hash ব্যবহার করে। Motherboard সবকিছুকে সংযুক্ত করে আর firmware chip ধারণ করে।",
      "Power চাপলেই: firmware (UEFI, পুরোনো BIOS-এর আধুনিক উত্তরসূরি) hardware চালু করে Power-On Self-Test চালায়, তারপর storage থেকে bootloader লোড করে, bootloader OS kernel লোড করে, kernel service গুলো চালু করে, অবশেষে login screen আসে। যেই malware OS reinstall-এর পরও টিকে থাকে, তা OS-এর নিচে বাস করে — firmware বা boot chain-এ — আর Secure Boot এজন্যই আছে: firmware শুধু বিশ্বস্ত key দিয়ে sign করা bootloader চালায়, আর TPM chip প্রতিটি ধাপ মেপে (measure) রাখে যাতে বদল ধরা পড়ে।",
      "Virtualization এর ওপরই দাঁড়িয়ে: একটি hypervisor (Type 1 খালি hardware-এর ওপর চলে, Type 2 VirtualBox-এর মতো app হিসেবে চলে) একটি physical machine-কে বিচ্ছিন্ন virtual machine-এ ভাগ করে — তোমার ভবিষ্যতের lab। Container বরং host OS kernel ভাগ করে নেয় — হালকা হওয়ার বিনিময়ে বিচ্ছিন্নতার শক্তি কম; Level 15-এ Docker নিরাপত্তায় পৌঁছালে এই পার্থক্য গুরুত্বপূর্ণ হবে।",
    ],
    diagram: [
      "Power on → UEFI firmware (settings থাকে NVRAM-এ)",
      "→ Secure Boot bootloader-এর signature যাচাই করে",
      "→ Bootloader (যেমন Windows Boot Manager / GRUB)",
      "→ OS kernel → driver → service → login screen",
      "TPM প্রতিটি ধাপ মাপে; কোনো ধাপ বদলালে মাপও বদলে যায়।",
    ],
    termsBn: [
      "পুরোনো BIOS-এর বদলে আধুনিক firmware interface; Secure Boot ও বড় disk সমর্থন করে।",
      "Firmware-এর যাচাই: boot উপাদানগুলো চলার আগে বিশ্বস্ত signature বহন করছে কিনা।",
      "Trusted Platform Module — একটি chip যা key সংরক্ষণ করে আর boot-এর মাপ রেকর্ড করে; BitLocker এটি ব্যবহার করে।",
      "Virtual machine চালানো software। Type 1: খালি hardware-এ। Type 2: host OS-এর ভেতরে (VirtualBox)।",
      "OS-এর প্রাণ, যা memory, process, device পরিচালনা করে আর permission কার্যকর করে।",
    ],
    mistakes: [
      "RAM আর storage গুলিয়ে ফেলা ('আমার ফোনে 128 GB memory' — ওটা storage)।",
      "কিছু install করতে গিয়ে অযত্নে Secure Boot বন্ধ করে দেওয়া, তারপর ভুলে যাওয়া যে এটা boot chain রক্ষা করে।",
      "VM পুরোপুরি বিচ্ছিন্ন ধরে নেওয়া — এটি শক্তিশালী বিচ্ছিন্নতা, জাদু নয়; lab VM আপডেট রাখো আর network থেকে বিচ্ছিন্ন রাখো।",
    ],
    security: "Firmware ও boot আক্রমণ বিরল, কিন্তু ধ্বংসাত্মক — কারণ এগুলো OS-এর প্রতিটি প্রতিরক্ষার নিচে বসে। Firmware আপডেট রাখা আর Secure Boot চালু রাখা হলো ভিত্তিগত পরিচ্ছন্নতা, যা Level 10-এর hardening checklist-এ যাচাই করা হয়।",
    pc: [
      "উপরের PowerShell পরীক্ষাটি চালাও আর লিখে রাখো: OS version, RAM, partition style, Secure Boot, TPM।",
      "Task Manager → Performance খুলে browser খোলার সময় CPU/RAM/Disk লক্ষ্য করো — সংখ্যাগুলোকে ধারণাগুলোর সঙ্গে মেলাও।",
    ],
    android: [
      "Android ফোনও যাচাইকৃত ধারা দিয়ে boot হয় (Android Verified Boot)। Settings → About phone-এ model, Android version আর security patch level দেখা যায় — firmware-এর যেই তথ্য তুমি প্রথমে যাচাই করতে।",
    ],
    lab: "Guided lab — 'Inspect a System' (Interactive Labs), ৩ ধাপে আসল কাজ হিসেবে করো। ধাপ ১: তোমার নিজের PC-তে PowerShell খুলে এই পাঠের read-only command গুলো চালাও (Get-ComputerInfo, Get-Disk, Confirm-SecureBootUEFI, Get-Tpm) আর নিজের reading গুলো লিখে রাখো: OS version, RAM, partition style (GPT নাকি MBR), Secure Boot (True/False, অথবা legacy BIOS-এ error), আর TPM (আছে/নেই)। ধাপ ২: তোমার reading গুলো lab-এর simulated profile-এর সঙ্গে মেলাও (এই পাঠেই profile card আছে): Windows 11 Pro 23H2 · 8 GB RAM · GPT disk · Secure Boot OFF · TPM present · শেষ update ৭ মাস আগে · password ছাড়া দ্বিতীয় account 'Admin'। ধাপ ৩: ওই profile-এর একটিমাত্র সবচেয়ে জরুরি দুর্বলতা চিহ্নিত করো আর কেন তা বাকিগুলোর চেয়ে আগে, তা বলো। পুরো 'Inspect a System' lab (SIMULATED profile + এর ৩টি কাজ) Interactive Labs-এ খুলবে শুধু এই পাঠ শেষ করার পর (quiz ≥৭০% + practical pass) — এর কাজ হলো profile-এর প্রমাণ পড়ে সিদ্ধান্ত নেওয়া, শুধু MCQ option বাছা নয়। এই command গুলো শুধু নিজের machine বা নিজের lab-এই চালাবে — অন্য কারো সিস্টেমে কখনো নয়।",
    mission: "Mission: তোমার PC-র জন্য এক পৃষ্ঠার 'machine passport' লেখো: hardware, firmware, boot mode, TPM, patch level।",
    practical: "Practical মূল্যায়ন: quiz-এ দেওয়া একটি machine profile থেকে boot mode চেনো আর একটি নিরাপত্তা দুর্বলতা বের করো।",
    summary: "CPU হিসাব করে, RAM বর্তমান ধরে রাখে, storage অতীত রাখে, firmware ঠিক করে কী boot হবে — আর Secure Boot ও TPM সেই সিদ্ধান্ত পাহারা দেয়।",
    skillGained: "Hardware ও boot-chain সম্পর্কে ধারণা; শুধু-পড়ার (read-only) সিস্টেম পরীক্ষা।",
    codeLines: [
      "Get-ComputerInfo OS ও hardware তথ্য একটিমাত্র object-এ জড়ো করে।",
      "PartitionStyle GPT হলো UEFI-এর স্বাভাবিক সঙ্গী; MBR legacy boot-এর ইঙ্গিত দেয়।",
      "Confirm-SecureBootUEFI UEFI-বিহীন সিস্টেমে error দেয় — সেই error-টাই নিজে একটি তথ্য।",
      "Get-Tpm দেখায় BitLocker-এর পছন্দের chip উপস্থিত ও প্রস্তুত আছে কিনা।",
    ],
    quizQ: [
      "RAM storage থেকে আলাদা, কারণ RAM:",
      "Secure Boot-এর কাজ হলো:",
      "VirtualBox কোন ধরনের hypervisor?",
    ],
    quizWhy: [
      "RAM হলো অস্থায়ী কর্ম-স্মৃতি (volatile); storage স্থায়ী। (Level 18-এ memory forensics ঠিক এটাই কাজে লাগায়।)",
      "Secure Boot boot chain যাচাই (authenticate) করে; disk encryption সামলায় BitLocker (TPM-সহ)।",
      "VirtualBox host OS-এর ওপর app হিসেবে চলে — Type 2। Hyper-V Type 1 হিসেবে চলতে পারে।",
    ],
  },
  "l1-processes-memory": {
    objectives: [
      "Process, thread আর handle-এর সংজ্ঞা দিতে পারবে",
      "একটি process তালিকা পড়ে কোনটি সেখানে মানানসই নয়, তা ধরতে পারবে",
      "Virtual memory আর paging সহজ ভাষায় বোঝাতে পারবে",
      "'Temp ফোল্ডার থেকে অজানা process' কেন একটি red flag (বিপদ সংকেত), তা বর্ণনা করতে পারবে",
    ],
    relevance: "Process তদন্ত SOC আর forensics-এর প্রতিদিনের কাজ: malware যান্ত্রিকভাবে একটি process-ই, যা সন্দেহজনক কাজ করছে — অদ্ভুত জায়গা থেকে চলছে, shell চালু করছে, network সংযোগ ধরে রেখেছে। এটা তুমি SOC Training-এ ব্যবহার করবে, আবার malware analysis-এও।",
    concept: [
      "Process হলো একটি চলমান program: তার নিজের memory, খোলা file, আর এক বা একাধিক thread থাকে। Thread হলো process-এর ভেতরের একটি execution ধারা — একটি browser process-এ rendering, networking আর প্রতিটি tab-এর script-এর জন্য আলাদা thread থাকতে পারে। OS scheduler এত দ্রুত thread গুলোকে CPU core-এর মধ্যে বদলায় যে সবকিছু একসাথে চলছে মনে হয়। প্রতিটি process তার নিজের virtual address space-এ চলে: process A চাইলেই process B-এর memory পড়তে পারে না; OS এই সীমানা কার্যকর করে, আর তা ভাঙাটাই নিজে একটি দুর্বলতার শ্রেণি।",
      "Virtual memory OS-কে ভান করতে দেয় যে প্রতিটি process-এর একটি বড়, ব্যক্তিগত memory মানচিত্র আছে। সম্প্রতি ব্যবহৃত হয়নি এমন page disk-এ (page file-এ) সরিয়ে RAM খালি করা যায়। এজন্যই কম RAM-এর machine চাপের মধ্যে 'জমে যায়' — সেটা paging করছে — আর এজন্যই memory forensics একটি process file বন্ধ করার পরও তার খোলা থাকা বিষয় পুনরুদ্ধার করতে পারে।",
      "Process তালিকা পড়া একটি দক্ষতা: নাম, executable-এর path, parent process, কোন user হিসেবে চলছে, আর তার children লক্ষ্য করো। একটি word processor command shell চালু করা, কিংবা System32-এর বদলে user-এর Temp ফোল্ডার থেকে চলা সিস্টেম-নামের process — এগুলো চিরায়ত অসঙ্গতি, যার সঙ্গে simulated SOC event-গুলোতে আবার দেখা হবে।",
    ],
    diagram: [
      "wininit / services.exe ── system service (System32 থেকে, SYSTEM হিসেবে)",
      "explorer.exe ── তোমার shell (তোমার হিসেবে)",
      "├─ browser process ── tab গুলো child process/thread হিসেবে",
      "└─ word processor ── cmd.exe বা powershell.exe চালু করা উচিত নয়",
      "মূল নিয়ম: নাম + path + parent + user — সবগুলো একসাথে অর্থবহ হতে হবে।",
    ],
    termsBn: [
      "একটি চলমান program-এর instance, নিজস্ব memory ও সম্পদসহ।",
      "একটি process-এর ভেতরের execution ধারা; প্রতিটি process-এ অন্তত একটি থাকে।",
      "যেই process আরেকটিকে চালু করেছে — তদন্তে গুরুত্বপূর্ণ প্রমাণ।",
      "OS দ্বারা পরিচালিত প্রতিটি process-এর জন্য আলাদা, বড় মনে হওয়া memory-র ধারণা; ভিত্তি RAM + page file।",
      "একটি process কোনো খোলা object-এর (file, key, socket, অন্য process) প্রতি ধরে রাখা reference।",
    ],
    mistakes: [
      "অজানা process-এর path, parent আর শুরুর সময় রেকর্ড না করেই তা বন্ধ (kill) করে দেওয়া — প্রমাণ নষ্ট হয়ে যেতে পারে।",
      "শুধু process-এর নামে ভরসা করা; malware প্রায়ই 'svchost'-এর মতো নাম ধার করে, কিন্তু ভুল ফোল্ডার থেকে চলে।",
      "বেশি memory ব্যবহার = ক্ষতিকর ধরে নেওয়া; browser বৈধভাবেই ভারী।",
    ],
    security: "Process telemetry (Sysmon, EDR) endpoint detection-এর মেরুদণ্ড। এখন parent/child ধারা পড়তে শেখা Level 10, 18, 19 আর 20-তে কাজে দেবে।",
    pc: [
      "উপরের command গুলো চালাও; তোমার browser-এর parent process আর SYSTEM হিসেবে চলা একটি process খুঁজো।",
      "Task Manager → Details-এ 'Command line' column যোগ করে তিনটি entry পরীক্ষা করো।",
    ],
    android: [
      "Android: Settings → Apps চলমান app দেখায়; Developer options → Running services process দেখায় — শুধু পর্যবেক্ষণ।",
    ],
    lab: "Guided lab: SOC Training-এর 'Unusual process execution' event ঠিক এই checklist-টাই আবার ব্যবহার করে।",
    mission: "Mission: Missions-এ দেওয়া (simulated) process tree থেকে অস্বাভাবিক শাখাটি চিহ্নিত করো আর তিন বাক্যে যুক্তি দাও।",
    practical: "Practical মূল্যায়ন: নাম/path/parent ত্রয়ী দেওয়া থাকবে — প্রতিটিকে কারণসহ normal বা suspicious হিসেবে চিহ্নিত করো।",
    summary: "Process হলো parent, path আর owner-সহ চলমান program। তদন্ত এই তিনটি ক্ষেত্র একসাথে পড়ে — কখনো শুধু নাম নয়।",
    skillGained: "Process সম্পর্কে ধারণা আর প্রথম অসঙ্গতি শনাক্তকরণ।",
    codeLines: [
      "Get-Process হলো দ্রুত দৃশ্য; Path দেখায় binary কোথায় থাকে।",
      "Win32_Process ParentProcessId যোগ করে — তদন্তমানের ক্ষেত্র।",
      "সাজিয়ে এমন নাম খুঁজো যা তুমি ব্যাখ্যা করতে পারো না; বিচার করার আগে খুঁজে দেখো।",
    ],
    quizQ: [
      "'svchost.exe' C:\\Users\\Public\\ থেকে চলা সন্দেহজনক, প্রধানত কারণ:",
      "Thread হলো:",
      "Virtual memory প্রধানত যা দেয়:",
    ],
    quizWhy: [
      "নাম + path + parent মিলতে হবে। সঠিক নাম, ভুল ফোল্ডার — চিরায়ত ছদ্মবেশ (masquerade)।",
      "Process-এর ভেতরে thread থাকে; thread-ই execute করে।",
      "OS virtual page গুলোকে RAM বা page file-এর সঙ্গে মেলায়, process গুলোকে পরস্পর থেকে বিচ্ছিন্ন রেখে।",
    ],
  },
  "l1-files-permissions": {
    objectives: [
      "একটি file system কী সাজায়, আর NTFS/ext4 কেন FAT32 থেকে আলাদা, তা বোঝাতে পারবে",
      "Linux-এর rwx permission আর Windows ACL পড়তে পারবে",
      "একটি নির্দিষ্ট file কে পড়তে পারবে, তা অনুমান করতে পারবে",
      "World-writable (সবার জন্য লেখারযোগ্য) secret কেন একটি critical finding, তা বোঝাতে পারবে",
    ],
    relevance: "ভুলভাবে সাজানো permission বাস্তব জগতের শীর্ষ finding গুলোর একটি — সবার পড়ারযোগ্য cloud storage থেকে শুরু করে যে কেউ edit করতে পারে এমন lab config file পর্যন্ত। CTF challenge 'ctf-perms' আর CyberLab-এর কয়েকটি mission ঠিক এই দক্ষতাটাই।",
    concept: [
      "একটি file system storage-কে file ও directory-তে সাজায় আর metadata রেকর্ড করে: owner, আকার, সময়, permission। NTFS (Windows) প্রতিটি file-এর সঙ্গে একটি Access Control List জুড়ে দেয় — কে কী করতে পারবে তার তালিকা। Linux filesystem (ext4 ও তার সঙ্গীরা) চিরায়ত মডেল ব্যবহার করে: একজন owner, একটি group, আর 'others', প্রত্যেকের read/write/execute bit। FAT32 — USB stick-এ এখনো সাধারণ — কার্যকরভাবে কোনো permission-ই রাখে না; secret সেখানে না রাখার একটি কারণ এটাই।",
      "Linux চিহ্নপদ্ধতি মডেলটিকে সংক্ষিপ্ত করে: -rwxr-xr-- মানে একটি সাধারণ file; owner পড়তে/লিখতে/চালাতে পারে; group পড়তে/চালাতে পারে; others শুধু পড়তে পারে। Octal-এ এটি 754 (প্রতি শ্রেণিতে r=4, w=2, x=1)। Directory-তে 'execute' মানে 'ভেতরে ঢোকা/খোঁজা' — তা ছাড়া পড়ারযোগ্য directory-ও একটি তালাবদ্ধ দরজা। এই কোর্সের CTF flag ঠিক এর পেছনেই লুকানো: mode 666 (সবার জন্য rw) একটি file, যার ভেতরে secret — machine-এর যে কেউ তা পড়তে পারে, আর সেটাই finding।",
      "Ownership উত্তর দেয় 'এটা কার?'; permission উত্তর দেয় 'কে এতে কী করতে পারে?'। উত্তরগুলো ঢিলেঢালা হলেই privilege সমস্যা জন্ম নেয়: root হিসেবে চলা একটি service যদি সবার লেখারযোগ্য config file পড়ে, তাহলে যে কেউ file-টি edit করতে পারলেই service-টি তার নিয়ন্ত্রণে। Least privilege — প্রয়োজনীয় ন্যূনতম প্রবেশাধিকার — সেই সমাধান যা তুমি বারবার প্রয়োগ করবে।",
    ],
    diagram: [
      "-  rwx      r-x      r--",
      "type owner  group    others",
      "file  পড়া+   পড়া+    শুধু",
      "      লেখা   চালানো  পড়া",
      "      চালানো",
      "Octal: owner 7 (4+2+1), group 5 (4+1), others 4 → 754",
    ],
    termsBn: [
      "Access Control List — প্রতিটি file-এর জন্য পরিচয় ও তাদের অনুমোদিত কাজের তালিকা (NTFS, cloud storage)।",
      "প্রতিটি user/process-কে শুধু তার কাজের জন্য প্রয়োজনীয় প্রবেশাধিকার দাও, তার বেশি নয়।",
      "একটি file-এর জন্য দায়ী user; Linux-এ owner তার permission বদলাতে পারে।",
      "'Others' দ্বারা লেখারযোগ্য — সিস্টেমের যেকোনো account। Code বা config-এর জন্য গুরুতর finding।",
    ],
    mistakes: [
      "'কাজ করানোর জন্য' chmod 777 দেওয়া — তাতে সবকিছুই কাজ করে, আক্রমণকারীর edit-সহ।",
      "Directory-তে ঢুকতে execute permission লাগে, তা ভুলে যাওয়া।",
      "FAT32 USB মাধ্যমে secret রেখে password তা রক্ষা করবে ধরে নেওয়া।",
    ],
    security: "Permission পর্যালোচনা hardening (Level 10)-এর checklist আইটেম, একটি CTF শ্রেণি, আর চিরায়ত pentest finding। প্রতিটি ব্যতিক্রমের জন্য mode + owner + ব্যবসায়িক প্রয়োজন নথিভুক্ত করো।",
    pc: [
      "Windows: একটি file-এ right-click → Properties → Security, তার ACL পড়ো; অপ্রত্যাশিত একটি entry খুঁজো।",
      "Linux/WSL: একটি scratch ফোল্ডারে lab command গুলো চালিয়ে stat দিয়ে 600 যাচাই করো।",
    ],
    android: [
      "Android app গুলো ব্যক্তিগত storage পায়, যা অন্য app পড়তে পারে না — একই ownership ধারণা, sandbox দ্বারা কার্যকর (Level 16)। Settings → Apps-এ একটি app-এর permission যাচাই করো।",
    ],
    lab: "Guided lab: Interactive Labs-এর 'Permissions Audit', তারপর CTF 'ctf-perms'।",
    mission: "Mission: 'Find the misconfigured permission' — একটি simulated file তালিকা যাচাই করে একটি বিপজ্জনক entry report করো।",
    practical: "Practical মূল্যায়ন: পাঁচটি ls -l লাইন দেওয়া হবে — প্রতিটি file কে পড়তে পারে তা বলো, আর বিপজ্জনকটি ঠিক করো।",
    summary: "Permission তোমার মালিকানার সবচেয়ে পুরোনো access control। Mode + owner একসাথে পড়ো, secret 600-তে রাখো, আর world-writable config-কে critical finding হিসেবে ধরো।",
    skillGained: "Linux ও Windows-এ permission ও ownership বিশ্লেষণ।",
    codeLines: [
      "ls -l হলো সার্বজনীন প্রথম নজর: mode, owner, group, আকার, নাম।",
      "chmod 600 group ও other-এর প্রবেশ পুরোপুরি সরিয়ে দেয় — secret-এর জন্য সঠিক।",
      "stat octal mode সরাসরি ছাপে — script ও report-এ সুবিধাজনক।",
      "System file-এ কখনো chmod অনুশীলন করো না; scratch ফোল্ডারই lab।",
    ],
    quizQ: [
      "একটি file-এ mode 640 মানে:",
      "World-writable service config বিপজ্জনক কেন?",
      "একটি directory-তে execute bit যা নিয়ন্ত্রণ করে:",
    ],
    quizWhy: [
      "6 = owner-এর জন্য rw-, 4 = group-এর জন্য r--, 0 = others-এর জন্য ---।",
      "Config-এ লেখার অধিকার = সেটা পড়া service-এর ওপর নিয়ন্ত্রণ — privilege বাড়ানোর (escalation) পথ।",
      "একটি directory-তে x না থাকলে তুমি ভেতরের file গুলোতে পৌঁছাতেই পারবে না, directory-তে read থাকলেও নয়।",
    ],
  },
  "l2-osi-tcpip": {
    objectives: [
      "OSI স্তরগুলো আর TCP/IP স্তরগুলোর নাম, প্রতিটির একটি করে কাজসহ বলতে পারবে",
      "একটি আসল packet উদাহরণ দিয়ে encapsulation (স্তরে স্তরে মোড়ানো) বোঝাতে পারবে",
      "সাধারণ protocol গুলোকে স্তরের সঙ্গে মেলাতে পারবে",
      "মডেলটি ব্যবহার করে ত্রুটির জায়গা বের করতে পারবে ('এটা DNS, transport, নাকি app-এর সমস্যা?')",
    ],
    relevance: "প্রতিটি network তদন্ত শুরু হয় স্তর খুঁজে বের করা থেকে: cable/Wi-Fi (L1–2), addressing/routing (L3), port/connection (L4), encryption (presentation/TLS), নাকি application নিজেই (L7)। Wireshark, Nmap output আর firewall log — সবই এই স্তর অনুযায়ী সাজানো।",
    concept: [
      "OSI মডেল (৭ স্তর) আর TCP/IP মডেল (৪ স্তর) একই যাত্রাকে ভিন্ন বিশদে বর্ণনা করে। Data শুরু হয় একটি application message হিসেবে (HTTP request, DNS query)। প্রতিটি স্তর তাকে নিজের header দিয়ে মোড়ায় — encapsulation — ঠিক খামের ভেতর খামের মতো: transport স্তর source/destination port যোগ করে (একটি segment), internet স্তর source/destination IP যোগ করে (একটি packet), link স্তর MAC address যোগ করে (একটি frame)। গ্রহীতা উল্টো ক্রমে মোড়ক খোলে। কিছু ব্যর্থ হলে নিচ থেকে স্তরে স্তরে পরীক্ষা করো: link light জ্বলছে? IP পেয়েছে? Gateway-তে পৌঁছানো যায়? Port খোলা? App সাড়া দিচ্ছে?",
      "Addressing স্তর অনুযায়ী বদলায়: MAC address স্থানীয় link-এ একটি device চিহ্নিত করে, কখনো router পার হয় না; IP address বিভিন্ন network জুড়ে একটি host চিহ্নিত করে, router পার হয়; port চিহ্নিত করে host-এর কোন program data পাবে। তোমার home router NAT করে — তোমার private address গুলোকে (যেমন 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12) তার একমাত্র public address-এ বদলে দেয় — এজন্যই তোমার laptop default অবস্থায় internet থেকে সরাসরি পৌঁছানো যায় না।",
      "TCP আর UDP হলো দুটি transport পছন্দ। TCP একটি নির্ভরযোগ্য, ক্রমবদ্ধ কথোপকথন, যা three-way handshake দিয়ে খোলে: SYN → SYN-ACK → ACK। UDP হলো পাঠিয়ে-ভুলে-যাওয়া: দ্রুত, কোনো নিশ্চয়তা নেই — DNS query আর video call এই বিনিময় মেনে নেয়। TLS TCP-র ওপরে বসে encryption আর server authentication যোগ করে; HTTPS হলো TLS-এর ওপর HTTP — এজন্যই তালা (padlock) সংযোগ সম্পর্কে বলে, site-টি নিজে সৎ কিনা তা বলে না।",
    ],
    diagram: [
      "Application : HTTP GET /index.html            (data)",
      "Transport   : + TCP header, src port 52344 → dst 443   (segment)",
      "Internet    : + IP header, 192.168.1.20 → 93.184.216.34 (packet)",
      "Link        : + Ethernet/Wi-Fi header, MAC → gateway MAC (frame)",
      "তারে থাকা অবস্থায়: frame → router link স্তর খুলে ফেলে → পরের hop, একই packet।",
    ],
    termsBn: [
      "Link স্তরে একটি frame-এর ভেতরে data রাখা; গ্রহীতা উল্টো ক্রমে তা খোলে।",
      "Local network-এ একটি host থেকে অন্য network-এর host-এ packet পৌঁছে দেওয়া।",
      "সংযোগ খোলার তিন ধাপের TCP শুভেচ্ছা-বিনিময়।",
      "Network Address Translation — router private address গুলোকে একটি public address-এ বদলে দেয়।",
      "Transport Layer Security — TCP-র ওপরে encryption ও server পরিচয় যাচাই যোগ করে।",
    ],
    mistakes: [
      "শুধু DNS স্তর ভাঙা থাকলেও 'internet'-কে দোষ দেওয়া।",
      "MAC address internet জুড়ে route হয় ভাবা — এটি স্থানীয় link কখনো ছাড়ে না।",
      "Port (program) আর IP address (host) গুলিয়ে ফেলা।",
    ],
    security: "আক্রমণকারীরাও স্তরে ভাবে: ARP spoofing L2, IP spoofing L3, port scanning L4, phishing L7। প্রতিরক্ষাও একইভাবে স্তরে সাজানো — 'defense in depth' হলো এই diagram-টাই, প্রয়োগ করা অবস্থায়।",
    pc: [
      "তোমার OS-এর জন্য পরীক্ষা command গুলো চালাও আর প্রতিটি output লাইনকে তার স্তর দিয়ে চিহ্নিত করো।",
      "Cyber Terminal-এ (simulated) চালাও: ping, dig আর ss — lab-এ একই তথ্য দেখতে।",
    ],
    android: [
      "Android: Settings → About → Status Wi-Fi MAC আর IP দেখায়। Termux (ঐচ্ছিক, তোমার device-এ) একইভাবে ip আর ping চালাতে পারে।",
    ],
    lab: "Guided lab: 'Packet Capture Analysis' — দেওয়া (simulated) capture পড়ো আর প্রতিটি packet-এর স্তর চিহ্নিত করো।",
    mission: "Mission: 'Which layer is broken?' — তিনটি ত্রুটি report; প্রতিটির জন্য স্তরের নাম আর প্রথম পরীক্ষা বলো।",
    practical: "Practical মূল্যায়ন: Wireshark-ধাঁচের packet সারসংক্ষেপ দেওয়া হবে — protocol, port আর handshake অবস্থা চেনো।",
    summary: "স্তর 'network চলে না'-কে পরীক্ষাযোগ্য প্রশ্নে বদলে দেয়। Address = host (IP), port = program, MAC = স্থানীয় link, handshake = TCP।",
    skillGained: "স্তরভিত্তিক network যুক্তি আর প্রথম সারির ত্রুটি-স্থান নির্ণয়।",
    codeLines: [
      "ip addr interface গুলোতে MAC (link) আর IP (internet) পাশাপাশি দেখায়।",
      "ip route-এর 'default via …' লাইন হলো তোমার gateway — অ-স্থানীয় packet যেখানে যায়।",
      "dig প্রমাণ করে DNS কাজ করছে, website-কে দোষ দেওয়ার আগে।",
      "একই তথ্য, তিনটি tool — মডেলটাই স্থির ধ্রুবক।",
    ],
    quizQ: [
      "একটি site IP address দিয়ে লোড হয়, কিন্তু নাম দিয়ে হয় না। সবচেয়ে সম্ভাব্য ভাঙা স্তর কোনটি?",
      "SYN, SYN-ACK, ACK কোনটির জন্য সংযোগ খোলে?",
      "একটি MAC address ব্যবহৃত হয়:",
    ],
    quizWhy: [
      "নাম সমাধান (name resolution) একটি application-স্তরের সেবা (DNS)। IP সংযোগ ইতিমধ্যে কাজ করছে।",
      "শুধু TCP handshake-এর জন্য। UDP-র কোনো সংযোগ সেটআপ নেই।",
      "Frame প্রতিটি router hop-এ আবার তৈরি হয়; MAC স্থানীয় link-এর পরিচয়।",
    ],
  },
  "l2-subnetting-dns": {
    objectives: [
      "CIDR চিহ্নপদ্ধতি পড়তে আর প্রতি subnet-এ host হিসাব করতে পারবে",
      "একটি /24-কে কাগজে ছোট ছোট subnet-এ ভাগ করতে পারবে",
      "DNS সমাধানের পথ আর record ধরন বোঝাতে পারবে",
      "dig/nslookup output ব্যবহার করে নামের সমস্যা নির্ণয় করতে পারবে",
    ],
    relevance: "Subnetting ঠিক করে কী কার সঙ্গে কথা বলতে পারবে — এটা network segmentation, firewall rule আর cloud VPC design-এর পেছনের গণিত। DNS internet-এর ফোনবই, আবার আক্রমণের প্রিয় মাধ্যমও (phishing lookalike, DNS tunneling, cache poisoning) — তাই analystরা প্রতিদিন DNS log পড়ে।",
    concept: [
      "একটি IPv4 address 32 bit, চারটি octet-এ লেখা। CIDR চিহ্ন (/24) বলে কত bit network অংশ; বাকিটা host চিহ্নিত করে। /24-এ 8টি host bit থাকে → 256টি address, network ও broadcast বাদে = 254টি ব্যবহারযোগ্য। /26-এ 6 bit → 62টি ব্যবহারযোগ্য। Bit ধার করলেই network ভাগ হয়: একটি /24 চারটি /26 subnet হয় — segmentation-এর যান্ত্রিক ভিত্তি এটাই: server, user আর IoT আলাদা subnet-এ রাখো, আর crossing গুলো firewall দিয়ে নিয়ন্ত্রণ করো।",
      "Private range গুলো (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) public internet-এ route হয় না; তোমার router সেগুলোকে NAT করে। IPv6 128-bit address ব্যবহার করে, hex-এ লেখা, নকশাতেই NAT নেই — প্রতিটি device বৈশ্বিকভাবে ঠিকানাযোগ্য হতে পারে, তাই সুরক্ষা হলো firewall, ঠিকানার দুষ্প্রাপ্যতা নয়। SLAAC আর DHCPv6 IPv6 address বণ্টন করে; দুটো বোঝা জরুরি, কারণ অনিয়ন্ত্রিত IPv6 একটি চিরায়ত segmentation বাইপাস।",
      "DNS সমাধান: তোমার stub resolver একটি recursive resolver-কে জিজ্ঞাসা করে, সেটি root → TLD → authoritative server হেঁটে প্রতিটি উত্তর তার TTL পর্যন্ত cache করে। Record ধরন যা তুমি প্রতিনিয়ত পড়বে: A/AAAA (address), CNAME (alias), MX (mail), TXT (verification, SPF), NS (delegation), PTR (reverse)। নিরাপত্তাও এখানেই বাস করে: TXT record-এ SPF/DKIM/DMARC email spoofing-এর বিরুদ্ধে লড়ে, আর হঠাৎ TXT-ভারী query ধরন tunneling-এর red flag, যার দেখা SOC Training-এ পাবে।",
    ],
    diagram: [
      "Subnet 1: 192.168.10.0/26    host .1–.62     (users)",
      "Subnet 2: 192.168.10.64/26   host .65–.126   (servers)",
      "Subnet 3: 192.168.10.128/26  host .129–.190  (IoT)",
      "Subnet 4: 192.168.10.192/26  host .193–.254  (guests)",
      "প্রতিটি /26: মোট 64টি address, 62টি ব্যবহারযোগ্য। Firewall rule সীমানা পাহারা দেয়।",
    ],
    termsBn: [
      "Classless Inter-Domain Routing — /24-এর মতো prefix দৈর্ঘ্য দিয়ে নেটওয়ার্ক লেখার পদ্ধতি।",
      "বিশ্বব্যাপী অনন্য নয় এমন ঠিকানা পরিসর; NAT-এর পেছনে ব্যবহৃত।",
      "Time To Live — একটি DNS উত্তর কতক্ষণ cache করা যেতে পারে (সেকেন্ডে)।",
      "ডোমেইনের অনুমোদিত mail server ও নীতি প্রকাশ করে এমন TXT রেকর্ড।",
      "ডোমেইন নামকে IPv6 ঠিকানায় রূপান্তরের রেকর্ড।",
    ],
    mistakes: [
      "একটি /24-এ 256টি 'ব্যবহারযোগ্য' host গোনা (network + broadcast সংরক্ষিত)।",
      "DNS বদল তাৎক্ষণিক কার্যকর ভাবা — cache TTL মেনে চলে।",
      "Email-এ নাম 'ঠিক দেখাচ্ছে' বলে lookalike domain-কে আসল ধরে নেওয়া।",
    ],
    security: "Subnet ভুল পরিকল্পনায় segmentation নীরবে ব্যর্থ হয় (overlap করা range, অনিয়ন্ত্রিত IPv6)। DNS একটি নিয়ন্ত্রণ বিন্দু: query log করলে phishing click আর tunneling আগেভাগে ধরা পড়ে।",
    pc: [
      "কাগজে: 10.0.5.0/24-কে দুটি /25-এ ভাগ করো আর প্রতিটির ব্যবহারযোগ্য host বলো।",
      "তোমার বিশ্ববিদ্যালয় বা কর্মস্থলের domain-এর MX ও TXT record dig (বা nslookup) করো — public data, শুধু পড়ার জন্য।",
    ],
    android: [
      "Android Private DNS (DoT) ব্যবহার করে — Settings → Network → Private DNS। তার অবস্থা নোট করো; Level 9-এ encrypted DNS-এর বিনিময়গুলো আবার আসবে।",
    ],
    lab: "Guided lab: 'DNS Resolution Analysis' আর CTF 'ctf-dns' (একটি TXT record-এ পাঠ লুকানো)।",
    mission: "Mission: 'Analyze a suspicious DNS query' — প্রমাণসহ সিদ্ধান্ত নাও একটি query ধরন tunneling-এর মতো দেখাচ্ছে কিনা।",
    practical: "Practical মূল্যায়ন: Skill Assessment-এ পাঁচটি CIDR প্রশ্ন আর একটি dig output ব্যাখ্যা করতে হবে।",
    summary: "CIDR হলো নিরাপত্তা পরিণতিসহ গাণিতিক হিসাব: এটি segment ও সীমানা নির্ধারণ করে। DNS নামকে ঠিকানায় বদলায় — আর তার record ও log হলো প্রমাণ।",
    skillGained: "Subnetting ও DNS বিশ্লেষণ।",
    codeLines: [
      "ANSWER SECTION হলো resolver-এর ফলাফল; flags লাইন দেখায় এটি cache থেকে এসেছে কিনা।",
      "TTL cache-এ গণনা কমে — কম TTL মানে বদল দ্রুত দেখা যায়।",
      "Query ধরন প্রশ্ন বদলায়: A, MX, TXT ভিন্ন ভিন্ন record সেট চায়।",
      "example.com IANA-এর সংরক্ষিত documentation domain — যেকোনো সময় query করা নিরাপদ।",
    ],
    quizQ: [
      "একটি /26-এ কয়টি ব্যবহারযোগ্য host address?",
      "কোন record ধরন প্রমাণ করে কোন server গুলো একটি domain-এর জন্য mail পাঠাতে পারে (SPF)?",
      "তোমার PC 192.168.1.50/24 আর server 192.168.2.10। তাদের মধ্যকার traffic-কে যেতেই হবে:",
    ],
    quizWhy: [
      "2^(32−26) = 64 মোট, network ও broadcast বাদে = 62।",
      "SPF নীতি TXT record হিসেবে প্রকাশিত হয়।",
      "আলাদা /24 network = আলাদা subnet; একটি router তাদের মধ্যে forward করে।",
    ],
  },
  "l2-network-tools": {
    objectives: [
      "একটি লক্ষণের জন্য সঠিক tool বেছে নিতে পারবে",
      "ping, traceroute আর ss output সঠিকভাবে পড়তে পারবে",
      "একটি packet capture কী প্রমাণ করতে পারে আর কী পারে না, তা বর্ণনা করতে পারবে",
      "অনুমান ছাড়াই physical স্তর থেকে ওপরে উঠে ত্রুটি খুঁজতে পারবে",
    ],
    relevance: "প্রতিটি network ticket-এ প্রথমে এই tool গুলোরই দ্বারস্থ হওয়া হয়, আর report-এ প্রমাণ হিসেবে প্রথমে এদের output-ই যুক্ত করা হয়। Cyber Terminal এগুলো সব simulation করে, যাতে তুমি নিরাপদে যুক্তি অনুশীলন করতে পারো।",
    concept: [
      "ping ICMP echo request দিয়ে পৌঁছানো যায় কিনা পরীক্ষা করে: এটি প্রমাণ করে একটি host internet স্তরে সাড়া দিচ্ছে, আর সময় মোটামুটি latency দেখায়। নীরবতা প্রমাণ করে না host বন্ধ — অনেক firewall ICMP ফেলে দেয়। traceroute (Windows-এ tracert) TTL শেষ হওয়ার কৌশল কাজে লাগিয়ে hop ধরে ধরে পথ দেখায়; gateway-তেই মরে যাওয়া পথ আর ISP-র কাছে ছয় hop দূরে মরে যাওয়া পথ আলাদা ত্রুটি।",
      "ss (Linux) আর netstat (cross-platform) উত্তর দেয় 'কী কার সঙ্গে যুক্ত, আর কী শুনছে (listening)?'। একটি listening socket (LISTEN) হলো attack surface: প্রতিটি খোলা port-এর একজন owner আর একটি কারণ থাকা উচিত। dig/nslookup DNS-কে আলাদা করে। curl -v TLS আলোচনাসহ একটি HTTP কথোপকথন দেখায় — 'website সমস্যা' DNS, TCP, TLS নাকি app-এর, তা দেখার দ্রুততম উপায়।",
      "Wireshark একটি interface-এর আসল frame ধারণ করে (শুধু যেই traffic দেখার অনুমতি আছে তা-ই ধারণ করো — নিজের machine বা lab-এ)। এর শক্তি filter-এ: 'tcp.flags.syn==1 && tcp.flags.ack==0' সংযোগ প্রচেষ্টা খুঁজে পায়; 'dns' নামের traffic আলাদা করে। Capture প্রমাণ করে কী তার পার হয়েছে — মূল্যবান প্রমাণ, আর shared network-এ অন্যের data ধারণ করতে পারে বলে যেকোনো পরীক্ষার মতো একই authorization নিয়মে পরিচালিত।",
    ],
    diagram: [
      "'Site একদম লোড হয় না'        → gateway ping করো, তারপর নাম dig করো",
      "'IP দিয়ে লোড হয়, নাম দিয়ে নয়'      → dig / nslookup (DNS স্তর)",
      "'Connect হয়, তারপর আটকে যায়'          → curl -v (TLS বা app স্তর)",
      "'এই box-এ কী শুনছে?' → ss -tlnp (Linux) / netstat -ano",
      "'মাঝে মাঝে, অদ্ভুত, বিতর্কিত' → Wireshark capture (নিজের machine/lab)",
    ],
    termsBn: [
      "প্রোটোকল যার echo বার্তা দিয়ে host পৌঁছানো যায় কিনা যাচাই হয় — ping ও traceroute-এর ভিত্তি।",
      "সংযোগের অপেক্ষায় থাকা খোলা পোর্ট।",
      "নেটওয়ার্ক ট্রাফিকের রেকর্ড করা অনুলিপি (capture file)।",
      "নির্দিষ্ট শর্তে প্যাকেট বাছাইয়ের নিয়ম।",
    ],
    mistakes: [
      "একটি ফেলে দেওয়া ping থেকে host 'down' ঘোষণা করা (ICMP প্রায়ই filter করা থাকে)।",
      "নিজের নয় বা পর্যবেক্ষণের অনুমতি নেই এমন network-এ traffic ধারণ করা।",
      "60 সেকেন্ডের যাচাইয়ে ত্রুটির জায়গা না খুঁজে সরাসরি Wireshark-এ লাফ দেওয়া।",
    ],
    security: "রক্ষাকারীরাও একই output পড়ে: অপ্রত্যাশিত একটি LISTEN entry একটি finding; অজানা host-এর সঙ্গে সম্পূর্ণ TCP handshake-এর capture ঘটনার প্রমাণ। Note-এ tool, command, সময় আর host লিখে রাখো — পুনরুৎপাদনযোগ্যতাই পেশাদারিত্ব।",
    pc: [
      "নিজের network-এ 60 সেকেন্ডের যাচাই চালাও আর output Research Workspace-এ একটি note হিসেবে রাখো।",
      "Wireshark খোলো (তোমার machine-এ), একটি test site-এ নিজের browsing 20 সেকেন্ড ধারণ করো, আর DNS query ও TLS handshake খুঁজো।",
    ],
    android: [
      "Android: PingTools-এর মতো app একই তথ্য দেখায়; যুক্তি — স্তরে স্তরে — হুবহু একই। Termux-এ নিজের device-এ ping আর dig চলে।",
    ],
    lab: "Guided lab: 'Local Network Inspection' আর 'Packet Capture Analysis' (simulated data), Terminal challenge mode round 1।",
    mission: "Mission: Missions-এ তিনটি tool output দেওয়া হবে — প্রতিটির ত্রুটি-স্থান দুই লাইনে লেখো।",
    practical: "Practical মূল্যায়ন: Skill Assessment-এ একটি ss তালিকা আর একটি traceroute ব্যাখ্যা করো।",
    summary: "Tool গুলো স্তরের প্রশ্নের উত্তর দেয়। নিচ থেকে ওপরে কাজ করো, হুবহু command ও output রেকর্ড করো, আর দেখার অনুমতি নেই এমন traffic কখনো ধারণ করো না।",
    skillGained: "Network নির্ণয় ও প্রমাণমানের output পড়া।",
    codeLines: [
      "ক্রম গুরুত্বপূর্ণ: gateway → internet → DNS → application। প্রথম ব্যর্থতাতেই থামো।",
      "curl -I response header ছাপে: status code আর server header হলো প্রমাণ।",
      "ss -tlnp: t=tcp, l=listening, n=numbers, p=process (শুধু নিজের machine-এ)।",
      "Windows সমতুল্য: ping, tracert, nslookup, netstat -ano, curl.exe -I।",
    ],
    quizQ: [
      "একটি server-এ ping timeout হয়, কিন্তু তার website ঠিকঠাক লোড হয়। সবচেয়ে সম্ভাব্য ব্যাখ্যা:",
      "Linux-এ process নামসহ listening TCP port তালিকাভুক্ত করে কোন command?",
      "traceroute যেভাবে কাজ করে:",
    ],
    quizWhy: [
      "চলমান website প্রমাণ করে host সাড়া দিচ্ছে; firewall সাধারণত ICMP echo ফেলে দেয়।",
      "ss হলো socket statistics tool; -tlnp = TCP, listening, numeric, process।",
      "প্রতিটি hop-এর router TTL কমায়; মেয়াদ শেষের বার্তা পথ প্রকাশ করে।",
    ],
  },
  "l3-linux-essentials": {
    objectives: [
      "Filesystem-এ ঘুরতে পারবে আর /, /home, /etc, /var, /tmp বোঝাতে পারবে",
      "Shell থেকে নিরাপদে file তৈরি, সরানো, কপি করা ও পরীক্ষা করতে পারবে",
      "User, group, sudo — আর root কেন তালাবদ্ধ থাকে — বোঝাতে পারবে",
      "grep, tail আর journalctl দিয়ে log file পড়তে ও খুঁজতে পারবে",
    ],
    relevance: "বেশিরভাগ server, cloud instance, container আর security tool Linux-এ চলে। Cyber Terminal-এর Linux mode ঠিক এই command গুলোই অনুশীলন করায়; Level 7–20 ধরে নেয় তুমি mouse ছাড়াই একটি Linux box-এ ঘুরতে পারো।",
    concept: [
      "Linux-এ সবকিছু / থেকে শুরু হওয়া একটি গাছে file হিসেবে থাকে। পাড়াগুলো চেনো: /home (user-দের file), /etc (system configuration — সাবধানে edit করা text file), /var (পরিবর্তনশীল data: log থাকে /var/log-এ), /tmp (সবার লেখারযোগ্য scratch — সুবিধাজনক, আবার অপব্যবহারও হয়), /bin ও /usr/bin (program), /dev (file হিসেবে device)। Path case-sensitive; শুরুতে / থাকলে absolute, নাহলে তুমি যেখানে আছো তার আপেক্ষিক (pwd তা বলে দেয়)।",
      "Shell নির্ভুলতাকে পুরস্কৃত করে। ls দেখায়, cd সরায়, cp/mv কপি ও সরায়, rm মুছে দেয় — স্থায়ীভাবে; কোনো recycle bin নেই, এজন্যই প্রতিটি পেশাদার কোর্সে rm নিজে একটি সতর্কবার্তা পায়। cat ছোট file ছাপে, less বড় file-এ পাতা উল্টায়, head/tail কিনারা নেয়, grep বিষয়বস্তু খোঁজে, find নাম খোঁজে, আর pipe (|) ছোট tool গুলোকে pipeline-এ জোড়ে: cat auth.log | grep 'Failed' | wc -l এক লাইনে ব্যর্থ login গণনা করে।",
      "User আর privilege: তুমি সাধারণ user হিসেবে কাজ করো; sudo প্রশাসনিক ক্ষমতায় একটি command চালায় আর তা log করে রাখে। root account নিজেই সিস্টেম — root হিসেবে চলা যেকোনো কিছু যেকোনো কিছু করতে পারে, তাই service ও মানুষের প্রায় কখনোই root হওয়া উচিত নয়। /etc/passwd account তালিকা দেয় (password আর নয় — hash থাকে শুধু-root /etc/shadow-তে), আর /etc/group-এর group permission গুচ্ছ করে। Active Directory-তে পৌঁছালে লক্ষ্য করবে এটা একই ধারণা, শিল্পায়িত রূপে।",
    ],
    diagram: [
      "/etc   configuration (সাবধানে edit করো, আগে backup)",
      "/home  user file (তোমার নথি, তোমার নিয়ম)",
      "/var   log আর spool — /var/log হলো SOC-এর পাঠাগার",
      "/tmp   সবার লেখারযোগ্য scratch — এখানে কখনো secret রাখো না বা বিশ্বস্ত code চালিও না",
      "/usr   program ও library (বাস্তবে বেশিরভাগই শুধু পড়ারযোগ্য)",
    ],
    termsBn: [
      "রুট ডিরেক্টরি থেকে শুরু সম্পূর্ণ পথ।",
      "বর্তমান অবস্থান থেকে গণনা করা পথ।",
      "কমান্ডের আউটপুট পরের কমান্ডের ইনপুটে পাঠানো।",
      "প্রশাসনিক ক্ষমতায় একটি কমান্ড চালানোর অনুমোদিত উপায়; ব্যবহার লগ হয়।",
      "সিস্টেমের সর্বময় অ্যাকাউন্ট।",
    ],
    mistakes: [
      "আগে ছাপিয়ে না দেখে একটি path-এ rm -rf চালানো — ছাপো, যাচাই করো, তারপর মোছো।",
      "Backup কপি ছাড়া /etc file edit করা (আগে cp file file.bak)।",
      "'সহজ বলে' সবকিছু root হিসেবে করা — একটি ভুল টাইপো তখন পুরো সিস্টেমের মালিক।",
    ],
    security: "Log হলো প্রমাণ: /var/log/auth.log (Debian পরিবার) বা secure (RHEL পরিবার) login আর sudo ব্যবহার রেকর্ড করে। যেই admin শান্তভাবে log পড়তে পারে, সে ইতিমধ্যে অর্ধেক SOC analyst।",
    pc: [
      "এখনো কিছু install করো না: Cyber Terminal খুলে Linux round 1–3 শেষ করো, তারপর VM তৈরি করলে (Level 7-এ VirtualBox আসছে) একই command WSL বা VM-এ আবার করো।",
    ],
    android: [
      "Termux তোমার নিজের ফোনে আসল Linux-ধাঁচের shell দেয় — চলতে চলতে pwd/ls/grep অনুশীলনের জন্য দারুণ। এটা root-এর সমান নয়, আর সব security tool Android-এ চলে না।",
    ],
    lab: "Guided lab: Interactive Labs-এর 'Linux Navigation & Logs' আর Terminal-এর guided exercise।",
    mission: "Mission: 'Suspicious log sequence' — একটি simulated auth.log অংশ পড়ে ঘটনার সারসংক্ষেপ লেখো।",
    practical: "Practical মূল্যায়ন: command নির্বাচন — ছয়টি কাজ দেওয়া হবে, প্রতিটির জন্য হুবহু command-এর নাম বলো।",
    summary: "একটি গাছ, একটি নির্ভুল shell, /var/log-এ log, আর sudo দিয়ে privilege — প্রতিটি Linux server রক্ষায় তোমার কাজের ব্যাকরণ এটাই।",
    skillGained: "Linux-এ ঘোরাফেরা, file-এর কাজ আর log পড়া।",
    codeLines: [
      "ls -la file-এর সঙ্গে permission দেখায় — Level 1 মডেলের দৈনন্দিন ব্যবহার।",
      "tail -n একটি file-এর শেষ দেখায়; ঘটনার সময় live দেখতে -f যোগ করো।",
      "grep + pipe + wc হলো analyst-এর গণনা যন্ত্র — spreadsheet লাগে না।",
      "systemctl status এক দৃশ্যে অবস্থা, কখন থেকে, আর শেষ log লাইন দেখায়।",
      "df/free/uptime তিন সেকেন্ডে উত্তর দেয় 'box সুস্থ আছে তো?'",
    ],
    quizQ: [
      "একটি সাধারণ Linux server-এ system log file কোন directory ধরে রাখে?",
      "grep 'Failed' auth.log | wc -l কী করে?",
      "Root হিসেবে login করার বদলে sudo কেন পছন্দের?",
    ],
    quizWhy: [
      "/var পরিবর্তনশীল data ধরে রাখে; /var/log হলো standard log অবস্থান।",
      "grep লাইন বাছাই করে, pipe সেগুলো wc -l-কে দেয়, সেটি গণনা করে। কিছুই বদলায় না।",
      "দায়বদ্ধতা + least privilege: sudo audit trail রেখে যায় আর ক্ষতির পরিধি সীমিত করে।",
    ],
  },
  "l3-windows-admin": {
    objectives: [
      "Windows account, group আর UAC বোঝাতে পারবে",
      "মূল PowerShell cmdlet ব্যবহার করে service, event আর user পরীক্ষা করতে পারবে",
      "Event Viewer-এ একই তথ্য খুঁজতে আর মূল security event ID গুলো বোঝাতে পারবে",
      "প্রতিটি কাজকে তার Linux সমতুল্যের সঙ্গে তুলনা করতে পারবে",
    ],
    relevance: "প্রতিষ্ঠানগুলো Windows আর Active Directory-তেই চলে। 4625 (ব্যর্থ logon) আর 4720 (account তৈরি)-এর মতো event ID SOC-এর প্রতিদিনের খাদ্য, আর PowerShell একই সাথে admin-এর সেরা tool আর আক্রমণকারীর প্রিয় মাধ্যম — রক্ষাকারীকে দুটোই সাবলীলভাবে পড়তে হয়।",
    concept: [
      "Windows standard user আর administrator-কে আলাদা করে; User Account Control (UAC) তাদের মধ্যে সম্মতির ফটক — একজন admin সাধারণত standard token দিয়ে কাজ করে, প্রতি কাজে elevate করে, চেতনায় sudo-র মতোই। Local account একটি machine-এ থাকে; domain account (Level 14) Active Directory-তে থাকে। NTFS permission (Level 1) আর share permission file নিয়ন্ত্রণ করে; Security log রেকর্ড করে কী ঘটেছে।",
      "PowerShell text নয়, object pipeline: Get-Service service object ফেরত দেয়, যা তুমি format করার আগে filter ও sort করতে পারো। Verb-noun ধরন (Get-, Set-, Start-, Stop-) আর Get-Help এটিকে আবিষ্কারযোগ্য করে। নিচের command গুলো service, সাম্প্রতিক security event, local user আর listening port পরীক্ষা করে — systemctl, journalctl, /etc/passwd আর ss-এর Windows প্রতিচ্ছবি।",
      "Event Viewer channel অনুযায়ী log সাজায়: Security (logon, privilege ব্যবহার), System (service, driver), Application (program)। শুরুতে জানার মূল ID: 4624 সফল logon, 4625 ব্যর্থ logon, 4634 logoff, 4720 user তৈরি, 4732 security group-এ সদস্য যোগ, 7045 service install (System log)। আক্রমণকারীরা জানে রক্ষাকারীরা এগুলো দেখে — এজন্যই log forwarding আর Sysmon (Level 10) আছে।",
    ],
    diagram: [
      "Services     : Get-Service            ↔ systemctl status",
      "Logs         : Get-WinEvent / Event Viewer ↔ journalctl / /var/log",
      "Users        : Get-LocalUser          ↔ /etc/passwd",
      "Listening    : Get-NetTCPConnection   ↔ ss -tlnp",
      "Processes    : Get-Process            ↔ ps / top",
    ],
    termsBn: [
      "বিশেষ সুবিধা পাওয়ার আগে সম্মতি চাওয়া উইন্ডোজের নিয়ন্ত্রণ।",
      "বস্তু (object) পাইপলাইনে পাঠানো উইন্ডোজের শেল ও স্ক্রিপ্টিং ভাষা।",
      "লগইন ও নিরাপত্তা ঘটনা দেখার কনসোল।",
      "সিস্টেমে নতুন সেবা যুক্ত হওয়ার ঘটনা নম্বর।",
      "নেটওয়ার্কে কেন্দ্রীয় অ্যাকাউন্ট পরিচালনার সেবা।",
    ],
    mistakes: [
      "Internet থেকে অজানা .ps1 চালানো — PowerShell script হলো code; আগে পড়ো, নাহলে চালিও না।",
      "'Prompt বন্ধ করতে' UAC বন্ধ করা — prompt-গুলোই control।",
      "ঘটনা না ঘটা পর্যন্ত Security log উপেক্ষা করা; শান্ত সময়ে তোমার baseline গণনা জেনে রাখো।",
    ],
    security: "PowerShell logging (Script Block Logging, transcription) এই admin tool-কে detection-এর উৎসে বদলে দেয়। SOC Training-এ তুমি simulated 4625 ঝড় পড়ে escalation সিদ্ধান্ত নেবে — এই পাঠ তার পূর্বশর্ত।",
    pc: [
      "নিজের PC-তে পরীক্ষা সেটটি চালাও; আজকের baseline হিসেবে ব্যর্থ-logon গণনা Research Workspace-এ রাখো।",
      "Event Viewer → Windows Logs → Security খুলে নিজের logon সময় দিয়ে একটি 4624 খুঁজো।",
    ],
    android: [
      "Android-এ PowerShell নেই — কিন্তু identity ধারণাগুলো থেকে যায়: Android-এর প্রতি-app permission হলো তার UAC-ধাঁচের সম্মতি prompt (Level 16)।",
    ],
    lab: "Guided lab: Interactive Labs-এ 'Windows Event Triage' (simulated event)।",
    mission: "Mission: 'Investigate a suspicious login' — 4625 + 4624 প্রমাণের ওপর তৈরি CyberLab mission।",
    practical: "Practical মূল্যায়ন: পাঁচটি admin কাজকে cmdlet-এর সঙ্গে মেলাও, তারপর একটি 4625 অংশ ব্যাখ্যা করো।",
    summary: "Windows প্রশাসন = account + service + event, PowerShell দিয়ে সাবলীলভাবে চালিত। মূল event ID এখনই শেখো; SOC কাজ হলো চাপের মধ্যে সেগুলো পড়া।",
    skillGained: "PowerShell ও Event Viewer দিয়ে Windows পরীক্ষা।",
    codeLines: [
      "Where-Object property দিয়ে object বাছাই করে — text ঘাঁটতে হয় না।",
      "FilterHashtable বাছাইয়ের কাজ log engine-কে দেয়: বিশাল log-এও দ্রুত।",
      "4625 = ব্যর্থ logon; সেগুলোর ঝড় হলো 'ctf-logs' ধরন।",
      "Listening port PID-র সঙ্গে মেলে; Get-Process -Id একটি PID-কে নাম ও path-এ বদলায়।",
    ],
    quizQ: [
      "Event ID 4625 মানে:",
      "PowerShell pipeline যা পাঠায়:",
      "UAC-এর উদ্দেশ্য হলো:",
    ],
    quizWhy: [
      "4624 সফল, 4625 ব্যর্থ, 4720 account তৈরি, 7045 service install।",
      "Object থাকায় Where-Object text না ঘেঁটে Status দিয়ে বাছাই করতে পারে।",
      "UAC তুমি সম্মতি না দেওয়া পর্যন্ত standard token-কে admin token থেকে আলাদা রাখে।",
    ],
  },
  "l3-bash-scripting": {
    objectives: [
      "Variable, conditional আর loop-সহ একটি bash script লিখতে পারবে",
      "Script-এর জন্য shebang আর file permission বোঝাতে পারবে",
      "একটি আসল প্রতিরক্ষামূলক যাচাই স্বয়ংক্রিয় করতে পারবে: ব্যর্থ-login সারসংক্ষেপ",
      "Error সামলাতে আর variable সঠিকভাবে quote করতে পারবে",
    ],
    relevance: "রক্ষাকারীরা একঘেয়ে অংশগুলো script করে: log সারসংক্ষেপ, backup যাচাই, account নিরীক্ষা। এটাই Level 4 programming-এর সেতু — একই যুক্তি, তোমার server ইতিমধ্যে যে ভাষায় কথা বলে।",
    concept: [
      "একটি bash script হলো command-এর একটি text file, যা shebang (#!/bin/bash) দিয়ে শুরু হয় — kernel-কে বলে কোন interpreter ব্যবহার করতে হবে; chmod +x এটিকে executable করে। Variable মান ধরে (name=value, ফাঁক ছাড়া), $name তা পড়ে, আর quoting (\"$name\") শব্দ-ভাঙা (word-splitting) বিস্ময় রোধ করে — নতুনদের সবচেয়ে সাধারণ bug। Conditional [[ ... ]] দিয়ে পরীক্ষা করে; loop file, user বা log-এর লাইনের ওপর ঘোরে।",
      "Exit code হলো script-এর চুক্তি: প্রতিটি command 0 (সফল) বা non-zero (ব্যর্থ) ফেরত দেয়, $? শেষটি ধরে, আর set -euo pipefail script-কে অর্ধ-ভাঙা অবস্থায় চলতে না দিয়ে জোরে ব্যর্থ করে — পেশাদার script তা ব্যবহার করে। প্রতিরক্ষামূলক script default অবস্থায় শুধু-পড়ার হওয়া উচিত: আগে report করো, বদল করো শুধু স্পষ্টভাবে নকশা করা থাকলেই।",
      "কাজের উদাহরণটি source IP অনুযায়ী ব্যর্থ SSH login গণনা করে — একটি আসল SOC ক্ষুদ্র-কাজ। এটি grep, awk, sort আর uniq সাজায়: ছোট tool শৃঙ্খলিত করার Unix দর্শন, যার সঙ্গে pipe-এই দেখা হয়েছে। Header comment (উদ্দেশ্য, লেখক, তারিখ) সহ file হিসেবে রাখাটাই একটি কৌশল আর দল পুনর্ব্যবহার করতে পারে এমন tool-এর মধ্যে পার্থক্য।",
    ],
    diagram: [
      "#!/bin/bash            ← shebang: কোন interpreter",
      "# Purpose / usage      ← পরের পাঠক হলো ৬ মাস পরের তুমি",
      "set -euo pipefail      ← জোরে ব্যর্থ হও, unset variable ধরো",
      "main logic             ← ছোট ধাপ, quote করা variable",
      "exit code              ← 0 = ঠিক আছে, non-zero = সমস্যা পাওয়া গেছে",
    ],
    termsBn: [
      "Script-এর প্রথম লাইনে (#!) কোন interpreter চলবে তা নির্দেশ করা চিহ্ন।",
      "কমান্ড সফল (0) না ব্যর্থ (non-zero) তা জানানো সংখ্যা।",
      "Text প্রক্রিয়াকরণের tool — কলাম ধরে data বের করা ও সাজাতে ব্যবহৃত হয়।",
      "বারবার চালালেও একই ফল দেয় — দ্বিতীয়বার চালালে অতিরিক্ত কোনো বদল হয় না।",
    ],
    mistakes: [
      "Quote না করা variable: খালি variable-সহ rm $file একটি চিরায়ত বিপর্যয়ের গল্প।",
      "Shebang না থাকা — script তখন যেই shell ডেকেছে তার নিচেই চলে, সূক্ষ্ম পার্থক্যসহ।",
      "একটি report script-কে নীরবে 'ঠিকও' করে ফেলা; পর্যবেক্ষণ আর বদল আলাদা রাখো।",
    ],
    security: "Script তার owner-এর privilege দিয়ে চলে আর cron তাকে বিশ্বাস করে — credential-এর মতো রক্ষা করো: যুক্তিসংগত permission (750), পর্যালোচিত বদল, ভেতরে কোনো password নয় (key ও vault ব্যবহার করো)।",
    pc: [
      "একটি lab VM বা WSL-এ script-টি লেখো, chmod 750 করো, আর Cyber Terminal lab data-র simulated log-এর বিরুদ্ধে চালাও।",
      "এটিকে এমনভাবে বদলাও যাতে ব্যর্থ প্রচেষ্টার মোট গণনাও ছাপে।",
    ],
    android: [
      "Termux bash চালায়: নিজে তৈরি করা যেকোনো text file-এ pipeline-টি ইন্টার‌্যাক্টিভভাবে অনুশীলন করো।",
    ],
    lab: "Guided lab: 'Log Analysis with Bash' — একই pipeline, ধাপে ধাপে যাচাইকৃত।",
    mission: "Mission: df আর একটি if পরীক্ষা ব্যবহার করে প্রতিদিনের disk-usage সতর্কবার্তা (শুধু ছাপা) স্বয়ংক্রিয় করো।",
    practical: "Practical মূল্যায়ন: তিনটি ছোট script-এ bug ধরো (quote না করা variable, shebang অনুপস্থিত, ভুল exit পরীক্ষা)।",
    summary: "Script তোমার হাতে করা যাচাইকে পুনরাবৃত্তিযোগ্য tool-এ বদলায়: shebang, strict mode, quote করা variable, default অবস্থায় শুধু-পড়া, আর ছোট tool-এর pipeline।",
    skillGained: "প্রতিরক্ষামূলক automation-এর জন্য Bash scripting।",
    codeLines: [
      "set -euo pipefail: error, unset variable, বা ব্যর্থ pipe ধাপে থামো।",
      "${1:-default} argument 1 পড়ে বা fallback নেয় — script কোনো argument ছাড়াই চলে।",
      "grep log থেকে 'Failed password' লাইনগুলো বেছে নেয়।",
      "awk 'from' শব্দের পরের ক্ষেত্রটি ছাপে — source IP column।",
      "sort | uniq -c | sort -nr প্রতিটি IP গণনা করে ব্যস্ততমকে আগে সাজায়; head শীর্ষ তালিকা রাখে।",
    ],
    quizQ: [
      "প্রথম লাইন হিসেবে #!/bin/bash-কে বলা হয়:",
      "Exit code 0 মানে:",
      "Command-এ \"$log\" quote করা হয় কেন?",
    ],
    quizWhy: [
      "Kernel #! পড়ে সিদ্ধান্ত নেয় কোন interpreter file-টি চালাবে।",
      "Unix রীতি: 0 সফল, non-zero ব্যর্থ; $? শেষ code ধরে।",
      "Quote না করা সম্প্রসারণ শব্দ ভেঙে দেয় — quoting-ই standard প্রতিরক্ষা।",
    ],
  },
};
