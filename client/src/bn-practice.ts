// Per-item Bangla translations for practice content: labs, missions, CTFs,
// projects, practicals, checkpoint/final/assessment quizzes, SOC events.
// Every field is index-aligned with the English source item — no blanket gloss.
export type TaskBn = { prompt: string; explain: string; options?: (string | undefined)[] };
export type LabBn = { objective: string; environment: string; setup: string; hint: string; result: string; tasks: TaskBn[] };
export type MissionBn = { scenario: string; environment: string; debrief: string; questions: TaskBn[] };
export type CtfBn = { description: string; objective: string; prereq: string; hint: string; explanation: string };
export type ProjectBn = { objectives: string[]; environment: string; steps: string[]; evidence: string[]; rubric: string[]; remediation: string };
export type PracticalBn = { task: string; hint: string; explain: string; options?: (string | undefined)[] };
export type QuizBn = { q: string[]; why: string[]; options?: (string | undefined)[][] };

export const LAB_BN: Record<string, LabBn> = {
  "lab-risk": {
    objective: "প্রাত্যহিক ঝুঁকিগুলোকে CIA পা অনুযায়ী শ্রেণিবদ্ধ করো, আর একটি আনুপাতিক control বেছে নাও।",
    environment: "App-এর ভেতরের simulation। কোনো আসল সিস্টেম জড়িত নয়।",
    setup: "আগে 'What Cybersecurity Actually Is' পাঠটি পড়ো।",
    hint: "প্রতিটি পরিস্থিতির জন্য জিজ্ঞেস করো: কে এটি পড়তে পারে (C), বদলাতে পারে (I), বা অনুপলব্ধ করতে পারে (A)?",
    result: "তুমি প্রভাবের পা অনুযায়ী শ্রেণিবদ্ধ করেছ, আর প্রতিটিতে একটি নির্দিষ্ট control যুক্ত করেছ — একটি আসল risk register সারির আকৃতি।",
    tasks: [
      { prompt: "একটি দোকানের order book-এর একমাত্র কপি একটি laptop-এ একটি spreadsheet। সবচেয়ে বেশি ঝুঁকিতে থাকা পা কোনটি?", explain: "একক কপি = disk ব্যর্থ হলে data নিজেই হারানো। Control: দ্বিতীয় স্থানে স্বয়ংক্রিয় backup।" },
      { prompt: "কর্মীরা till সিস্টেমের জন্য একটি login ভাগ করে, তাই সম্পাদনা কোনো ব্যক্তির কাছে চিহ্নিত করা যায় না। প্রাথমিক দুর্বলতা?", explain: "ভাগ করা account attribution ধ্বংস করে — record চিহ্নযোগ্য লেখক ছাড়াই বদলানো যায়।" },
      { prompt: "একটি ক্লিনিক patient note একটি unencrypted USB stick-এ রাখে। প্রাথমিক ঝুঁকি?", explain: "হারানো/চুরি হলে পড়নযোগ্য data প্রকাশ পায়। Control: encryption + বহনযোগ্য কপি ন্যূনতম করা।" },
    ],
  },
  "lab-inspect": {
    objective: "একটি সিস্টেম profile পড়ো, আর boot mode, patch অবস্থা, আর একটি দুর্বলতা শনাক্ত করো।",
    environment: "নিচে simulated profile — একটি কাল্পনিক lab PC। তোমার আসল machine: Level 1-এর read-only command ব্যবহার করো।",
    setup: "Profile card খোলো; অনুমান নয়, প্রমাণ থেকে উত্তর দাও।",
    hint: "'পুরোনো'কে 'অনিরাপদ' থেকে আলাদা করো: বয়স কোনো finding নয়; অনুপস্থিত patch আর খোলা account হলো।",
    result: "Profile পড়া একজন মূল্যায়নকারীর দৈনিক দক্ষতা: আগে তথ্য, তারপর ক্রমবদ্ধ দুর্বলতা।",
    tasks: [
      { prompt: "Disk partition শৈলী GPT। Machine-টি সম্ভবত যেভাবে boot করে:", explain: "GPT হলো UEFI-র standard সঙ্গী; MBR legacy BIOS-এর সঙ্গে জোড়া হয়।" },
      { prompt: "এই profile-এর সবচেয়ে জরুরি finding?", explain: "তিনটিই আসল দুর্বলতা; password-ছাড়া admin account হলো প্রথম সমাধান।" },
      { prompt: "আসল machine-এ OS build যাচাই করে কোন tool?", explain: "Level 1-এর পরিদর্শন সেট — read-only আর পুনরুৎপাদনযোগ্য।" },
    ],
  },
  "lab-perms": {
    objective: "একটি ls -l তালিকা নিরীক্ষা করো, আর একটি বিপজ্জনক entry ঠিক করো।",
    environment: "Simulated তালিকা — একটি কাল্পনিক lab server। আসল chmod শুধু তোমার নিজের scratch folder-এ অনুশীলন করো।",
    setup: "তালিকা: -rw-r--r-- app.py · -rw------- id_rsa · -rw-rw-rw- config.ini · drwxr-xr-x logs · -rwxr-xr-x run.sh",
    hint: "শেষ তিনটি অক্ষর খোঁজো: গুরুত্বপূর্ণ একটি file-এ 'others' শ্রেণিতে যেকোনো 'w' একটি finding।",
    result: "তুমি এখন দেখেই একটি তালিকা নিরীক্ষা করতে পারো — আর তোমার CTF 'ctf-perms' দক্ষতা উষ্ণ আছে।",
    tasks: [
      { prompt: "কোন entry-টি critical finding?", explain: "666 = সবাই একটি config file পড়তে আর বদলাতে পারে। যেকোনো স্থানীয় ব্যবহারকারী service যা বিশ্বাস করে তা বদলাতে পারে।" },
      { prompt: "config.ini-র সঠিক mode (মালিক app, group ops-এর পড়া দরকার)?", explain: "640: মালিক rw, group r, অন্যরা কিছুই নয়।" },
      { prompt: "600-তে থাকা id_rsa হলো:", explain: "SSH নিজেই এটি কার্যকর করে; তালিকাটি এটি সঠিকভাবে করা দেখায়।" },
    ],
  },
  "lab-dns": {
    objective: "dig output ব্যাখ্যা করো, আর যেই record-টি সেখানে থাকা উচিত নয় তা ধরো।",
    environment: "একটি কাল্পনিক domain labcorp.example-এর জন্য simulated DNS উত্তর।",
    setup: "দেওয়া উত্তর: A 203.0.113.10 (TTL 300) · MX mail.labcorp.example · TXT 'v=spf1 -all' · TXT 'x9f2…(লম্বা base64-এর মতো string)…'",
    hint: "প্রতিটি record-কে তার কাজের বিপরীতে বিচার করো: এই বিষয়বস্তু কি record ধরনটি যার জন্য, তার সঙ্গে মেলে?",
    result: "DNS উত্তর হলো প্রমাণ। তুমি record ধরন, বিষয়বস্তুর আকৃতি, আর TTL একসঙ্গে পড়েছ — SOC DNS দক্ষতা।",
    tasks: [
      { prompt: "লম্বা base64-এর মতো TXT উত্তর সন্দেহজনক, কারণ:", explain: "বৈধ TXT record ছোট আর কাঠামোগত (SPF, যাচাইকরণ)। বড় পরিমাণে encoded data-ই তদন্ত করার মতো অসঙ্গতি।" },
      { prompt: "A record-এ TTL 300 মানে resolver তা যতক্ষণ cache করতে পারে:", explain: "TTL হলো সেকেন্ড — এখানে 5 মিনিট।" },
      { prompt: "'v=spf1 -all' mail গ্রাহকদের বলে:", explain: "SPF '-all' = কোনো অনুমোদিত প্রেরক নেই — একটি শক্তিশালী anti-spoofing বিবৃতি।" },
    ],
  },
  "lab-pcap": {
    objective: "একটি packet সারসংক্ষেপ পড়ো, আর কী ঘটেছে তা পুনর্গঠন করো।",
    environment: "Simulated capture সারসংক্ষেপ — কাল্পনিক host 10.0.0.5 (workstation) আর 203.0.113.66 (internet server)।",
    setup: "Packet: 1) 10.0.0.5→8.8.8.8 DNS query updates.labcorp.example 2) 8.8.8.8→10.0.0.5 DNS উত্তর 203.0.113.66 3) 10.0.0.5→203.0.113.66 TCP SYN :51000→443 4) ← SYN-ACK 5) ← ACK 6) TLS ClientHello 7) HTTP/2 data …",
    hint: "একটি capture-কে সময় ক্রমে একটি গল্প হিসেবে পড়ো: resolve → connect → encrypt → বিনিময়।",
    result: "তুমি কাঁচা packet থেকে একটি session পুনর্গঠন করেছ — হুবহু network forensics-এর যুক্তি (Level 18)।",
    tasks: [
      { prompt: "Packet 3–5 যা দেখায়:", explain: "SYN, SYN-ACK, ACK — port 443-এ একটি স্বাভাবিক সংযোগ খোলা।" },
      { prompt: "Handshake-এর আগে DNS (packet 1–2) কেন ঘটল?", explain: "পরিবহন শুরু হওয়ার আগে নামগুলোকে ঠিকানায় resolve হতেই হবে — স্তরগুলো কাজে।" },
      { prompt: "এখানে কিছুই page-এর বিষয়বস্তু দেখায় না, কারণ:", explain: "Encryption বিষয়বস্তু রক্ষা করে, সংযোগ metadata নয় — একটি মূল বিশ্লেষণ সীমানা।" },
    ],
  },
  "lab-linux-logs": {
    objective: "Shell ব্যবহার করে একটি simulated auth.log তদন্ত করো।",
    environment: "Simulated log অংশ (কাল্পনিক): 203.0.113.44 থেকে 02:11–02:19-এর মধ্যে 41টি 'Failed password' লাইন, তারপর একই ব্যবহারকারীর জন্য 192.168.1.20 থেকে 09:02-তে একটি 'Accepted password'।",
    setup: "তুমি Cyber Terminal-এ (Linux mode) হুবহু command গুলো মহড়া দিতে পারো।",
    hint: "Log উত্তর দেয়: কতগুলো, কোথা থেকে, কোনোটি সফল হয়েছে কিনা, আর সাফল্যটি মানুষের সঙ্গে মেলে কিনা?",
    result: "এটি বর্ণনা আকারে SOC event 'ctf-logs' — ধরন, উৎস, আনুপাতিক প্রতিক্রিয়া।",
    tasks: [
      { prompt: "একটি বাহ্যিক IP থেকে 8 মিনিটে 41টি ব্যর্থতা সবচেয়ে ভালো বর্ণনা করা যায় এভাবে:", explain: "হার + একক উৎস + ব্যর্থতা = অনুমানের ধরন। সেই IP থেকে কোনো সাফল্য লাইন নেই — প্রচেষ্টা আটকানো/অসফল বলে মনে হয়।" },
      { prompt: "192.168.1.20 (অফিস LAN) থেকে 09:02-এর সাফল্যটি হলো:", explain: "সহসম্পর্ক রায় নয়। উৎস, সময়, আর ব্যবহারকারীর নিশ্চিতকরণ সিদ্ধান্ত নেয়।" },
      { prompt: "এই তদন্তের জন্য সবচেয়ে ভালো প্রথম command?", explain: "আগে গণনা আর ranking করো (পাঠ: Bash scripting) — তারপর containment সিদ্ধান্ত নাও।" },
    ],
  },
  "lab-headers": {
    objective: "একটি response-এর security header grade করো, আর fix তালিকা লেখো।",
    environment: "Localhost-এ একটি training app থেকে simulated response। আসল site: curl -I public response নিষ্ক্রিয়ভাবে পড়ে।",
    setup: "Response: HTTP/1.1 200 OK · Content-Type: text/html · X-Content-Type-Options: nosniff · (কোনো CSP নয়, কোনো HSTS নয়, কোনো frame সুরক্ষা নয়) · Set-Cookie: sid=…; Path=/ (কোনো flag নেই)",
    hint: "Header গুলোকে একটি সেট হিসেবে grade করো: পরিবহন (HSTS), framing/clickjacking, content policy (CSP), sniffing, আর cookie flag।",
    result: "একজন engineer এক বসায় বাস্তবায়ন করতে পারে এমন একটি fix তালিকা — Project A-তে ব্যবহৃত deliverable বিন্যাস।",
    tasks: [
      { prompt: "ভবিষ্যত পরিদর্শনের জন্য HTTPS বাধ্য করা অনুপস্থিত header-টি হলো:", explain: "HSTS browser-কে নির্দেশ দেয় domain-এর জন্য শুধু HTTPS ব্যবহার করতে।" },
      { prompt: "Session cookie-র সবচেয়ে বিপজ্জনক বাদ?", explain: "Flag-ছাড়া session cookie হলো CTF 'ctf-headers' পাঠ: একটি XSS বা একটি HTTP hop session প্রকাশ করে।" },
      { prompt: "X-Content-Type-Options: nosniff উপস্থিত থাকা মানে app ইতিমধ্যে যা রোধ করে:", explain: "nosniff browser-কে content ধরন অনুমান করা থামায় — ফাঁকগুলোর মধ্যে একটি সঠিক control।" },
    ],
  },
  "lab-sqli": {
    objective: "কৌশলটি বোঝো, একটি ইচ্ছাকৃতভাবে দুর্বল LOCAL app-এ তা যাচাই করো, আর parameterized সমাধান বাস্তবায়ন করো।",
    environment: "অনুমোদিত: OWASP Juice Shop বা তোমার নিজের Level 5 demo app, শুধু localhost-এ। কখনো কোনো জীবন্ত site নয়।",
    setup: "Training app http://localhost:3000-এ চলছে, তোমার তৈরি দুটি test account-সহ।",
    hint: "আগে কৌশল: তুমি কেন এটি কাজ করে বলতে না পারলে, সমাধান কেন কাজ করে তা-ও বলতে পারবে না।",
    result: "যাচাই করা, ঠিক করা, আর regression-test করা — একটি ছোট lab-এ পূর্ণ পেশাদার চক্র।",
    tasks: [
      { prompt: "প্রচলিত tautology input দুর্বল login-এর বিরুদ্ধে কেন কাজ করে?", explain: "Data code-এ পরিণত হয়েছে। শর্তটি সারণির প্রথম সারির জন্য সত্য হয়।" },
      { prompt: "Parameterized query-তে বদলানোর পর, একই input:", explain: "Driver তা data হিসেবে বাঁধে — একটি (অস্তিত্বহীন) username string, syntax নয়।" },
      { prompt: "সমাধানটি আটকে রাখা regression test:", explain: "নিরাপত্তা সমাধান স্থায়ী test প্রাপ্য (Level 8 standard)।" },
    ],
  },
  "lab-android-manifest": {
    objective: "একটি training app-এর manifest আর component MASVS শ্রেণির বিপরীতে পর্যালোচনা করো।",
    environment: "Simulated manifest (Level 16 পাঠ থেকে) + হাতে-কলমে সংস্করণের জন্য তোমার emulator।",
    setup: "তোমার কাছে আছে manifest অংশ, app-এর উল্লিখিত উদ্দেশ্য ('notes feature-সহ একটি flashlight'), আর MobSF-এর কাঁচা flag তালিকা।",
    hint: "প্রতিটি component আর permission-এর জন্য জিজ্ঞেস করো: কোন feature-এর এটি দরকার, আর আর কে এতে পৌঁছাতে পারে?",
    result: "একটি MASVS-আকৃতির finding তালিকা — Project E-এর report-এর কঙ্কাল।",
    tasks: [
      { prompt: "এই app-এর জন্য READ_CONTACTS হলো:", explain: "Permission-কে feature-এর সঙ্গে মিলতেই হবে। Contact-এ অব্যাখ্যাত প্রবেশ একটি গোপনীয়তা আর পর্যালোচনা finding।" },
      { prompt: "কোনো permission ছাড়া exported DataProvider মানে:", explain: "Exported + কোনো permission নয় = খোলা দরজা। exported=false সেট করো, বা একটি signature-level permission দিয়ে আটকাও।" },
      { prompt: "একটি release build-এর debuggable flag-এর সঠিক সমাধান:", explain: "Build variant ঠিক এজন্যই বিদ্যমান, যাতে debug সুবিধা কখনো পাঠানো না হয়।" },
    ],
  },
  "lab-cloud-config": {
    objective: "একটি simulated cloud storage/IAM সাজানো পর্যালোচনা করো, আর ভুল সাজানো গুলোকে ক্রম করো।",
    environment: "Simulated সাজানো — কাল্পনিক account; কোনো আসল cloud account দরকার নেই বা ব্যবহৃত হয়নি।",
    setup: "Config: storage bucket 'reports' = public read ON · দৈনিক কাজের জন্য ব্যবহৃত AdministratorAccess-সহ IAM user · access key শেষ rotate: কখনো নয় · logging: নিষ্ক্রিয় · root-এ MFA: বন্ধ।",
    hint: "Blast radius অনুযায়ী ক্রম করো: আগে internet প্রকাশ, তারপর সুবিধা, তারপর তুমি একটি ঘটনা দেখতেই পারো কিনা।",
    result: "Cloud পর্যালোচনা হলো checklist শৃঙ্খলা — Project H-তে তুমি সঠিকভাবে নকশা করবে এমন একই ভঙ্গি।",
    tasks: [
      { prompt: "সর্বোচ্চ-ঝুঁকির আইটেম?", explain: "Public storage হলো প্রচলিত cloud ভাঙনের শিরোনাম। বাকিগুলো গুরুত্বপূর্ণ; প্রকাশ তাৎক্ষণিক।" },
      { prompt: "একটি AdministratorAccess user থেকে দৈনিক কাজ যা লঙ্ঘন করে:", explain: "Cloud আকারে Level 6-এর নীতি; একটি phish হওয়া key তখন account-এর মালিক হয়।" },
      { prompt: "Logging নিষ্ক্রিয় থাকলে, একটি ঘটনায় যা অনুপস্থিত থাকত:", explain: "কোনো log নয়, কোনো timeline নয় (Level 18)। দরকার হওয়ার আগেই logging সক্ষম করো।" },
    ],
  },
};

export const MISSION_BN: Record<string, MissionBn> = {
  "m-permission-slip": {
    scenario: "একজন junior সহকর্মী জিজ্ঞেস করে: 'আমার চাচাতো ভাই একটি logistics ফার্মে intern করে। সে বলল আমি এই সপ্তাহান্তে অনুশীলনের জন্য তাদের customer portal pentest করতে পারি — সে এমনকি admin login page-এর link পাঠিয়েছে। শুরু করা ঠিক আছে?'",
    environment: "সিদ্ধান্ত অনুশীলন — কোনো সিস্টেম ছোঁয়া হয়নি।",
    debrief: "অনুমোদন বিচার একটি প্রতিবর্তী ক্রিয়া, কাগজপত্র নয়। আসল কাজে তুমি সেকেন্ডে এই সিদ্ধান্ত নেবে; সঠিকভাবে নাও।",
    questions: [
      { prompt: "Test-টি কি এগোতে পারে?", explain: "কর্তৃত্ব + লিখিত + scope। তিনটিই অনুপস্থিত।" },
      { prompt: "সঠিক পেশাদার প্রতিক্রিয়া হলো:", explain: "তোমার সহকর্মীকেও রক্ষা করো: তার 'অনুমতি' তার internship খরচ করতে পারে।" },
    ],
  },
  "m-suspicious-login": {
    scenario: "ব্যবহারকারী 'nadia'-র জন্য SIMULATED Windows event: 02:11–02:19 — VPN gateway দিয়ে workstation WS-7 থেকে 14 × Event 4625 (ব্যর্থ logon); 02:20 — 1 × 4624 সাফল্য; 09:05 — Nadia IT-কে বলে সে 08:30 পর্যন্ত ঘুমিয়ে ছিল আর তার laptop বন্ধ ছিল।",
    environment: "Simulated event সেট — কাল্পনিক ব্যবহারকারী আর সময়।",
    debrief: "কাঠামোটি লক্ষ্য করো: ধরন → ব্যবহারকারী যাচাই → আটকে রাখা → scope। এটাই SOC কাজ, মহড়া দেওয়া।",
    questions: [
      { prompt: "তোমার মূল্যায়ন:", explain: "ধরন + ব্যবহারকারীর অস্বীকার = অন্যথা প্রমাণিত না হওয়া পর্যন্ত আপস হিসেবে ধরো।" },
      { prompt: "প্রথম containment ধাপ?", explain: "প্রমাণ সংরক্ষণের পাশাপাশি রক্তপাত থামাও (credential/session) (Level 18 কার্যক্রমের ক্রম)।" },
      { prompt: "আর কী যাচাই করতেই হবে?", explain: "Scope নির্ধারণই তদন্ত: ধরে নাও আপস আর containment-এর মধ্যবর্তী ঘণ্টাটি ব্যবহৃত হয়েছে।" },
    ],
  },
  "m-dns-query": {
    scenario: "SIMULATED DNS log, একটি workstation: data-sync.example-এর অনন্য লম্বা subdomain-এর জন্য এক ঘণ্টায় 900টি query (যেমন a91f…encoded….data-sync.example), প্রতিটি ~180 অক্ষর, সব TXT ধরনের। স্বাভাবিক workstation প্রতি ঘণ্টায় ~40টি query করে, বেশিরভাগ A/AAAA।",
    environment: "Simulated resolver log — কাল্পনিক domain।",
    debrief: "DNS একটি service-ও, একটি sensor-ও। এই একই ধরন SOC Training-এ একটি EDR/DNS alert হিসেবে ফিরে আসে।",
    questions: [
      { prompt: "সবচেয়ে সম্ভাব্য ব্যাখ্যা?", explain: "পরিমাণ + অনন্যতা + দৈর্ঘ্য + TXT = পাঠ্যপুস্তকের tunneling সূচক।" },
      { prompt: "তাৎক্ষণিক পদক্ষেপ?", explain: "Channel-টি আটকে রাখো, প্রমাণ সংরক্ষণ করো, host-টিকে আপস হওয়া হিসেবে ধরো (Level 18)।" },
    ],
  },
  "m-phishing": {
    scenario: "SIMULATED report: তিনজন কর্মী 'Salary revision — sign in to view' পেয়েছে, যা hrm-portal-login.example-এর সঙ্গে যুক্ত (2 দিন আগে নিবন্ধিত)। একজন কর্মী credential দিয়েছে, তারপর সন্দেহ করে 20 মিনিট পরে report করেছে।",
    environment: "Simulated বার্তা আর একটি lookalike domain — কোনো আসল mail জড়িত নয়।",
    debrief: "দ্রুত, দোষহীন report এই পরিস্থিতি বাঁচিয়েছে। তোমার কাজ: report সহজ করা আর প্রতিক্রিয়া আক্রমণকারীর চেয়ে দ্রুত করা।",
    questions: [
      { prompt: "Credential দেওয়া কর্মীর জন্য, প্রথম অগ্রাধিকার হলো:", explain: "Report ঘড়ি শুরু করে; reset না হওয়া পর্যন্ত credential আপস হওয়া ধরা হয়।" },
      { prompt: "Lookalike domain-টি সবচেয়ে ভালো পরিচালনা করা হয় যেভাবে:", explain: "একসঙ্গে সব জায়গায় আটকে রাখো; একটি production machine থেকে কখনো phishing link browse করো না।" },
    ],
  },
  "m-api-authz": {
    scenario: "Code পর্যালোচনা (training API): GET /api/orders/{id} শুধু যাচাই করে একটি বৈধ JWT উপস্থিত আছে কিনা। JWT-তে user_id থাকে, কিন্তু handler কখনো তা order-এর মালিকের সঙ্গে তুলনা করে না। একটি দ্বিতীয় test account ID বাড়িয়ে যেকোনো order পড়তে পারে।",
    environment: "দেওয়া code অংশ — API আকারে Level 8 ধরন (OWASP API1:2023 BOLA)।",
    debrief: "একই A01 মূল, নতুন পৃষ্ঠ। তুমি এটি web page-এ আর API-তে ধরতে পারলে, ধরনটি তোমার।",
    questions: [
      { prompt: "ত্রুটি শ্রেণি হলো:", explain: "Authentication উপস্থিত; প্রতি-object authorization অনুপস্থিত — API1:2023।" },
      { prompt: "সঠিক সমাধান:", explain: "যাচাইটি server-side, প্রতি object-এ, প্রতি request-এ থাকে — regression test-সহ।" },
    ],
  },
  "m-harden-server": {
    scenario: "SIMULATED lab server ভিত্তিরেখা: SSH password login + root login অনুমতি দেয় · firewall নিষ্ক্রিয় · অব্যবহৃত service চলছে (telnet, ftp) · কোনো স্বয়ংক্রিয় update নেই · একটি ভাগ করা admin account · log 1 দিন রাখা হয়।",
    environment: "Simulated সাজানো checklist — তোমার আসল অনুশীলন লক্ষ্য হলো তোমার নিজের VM।",
    debrief: "এই checklist, তোমার VM-এ আসলে কার্যকর করা, হলো Project B। ক্রম সম্পর্কে বিচারই দক্ষতা।",
    questions: [
      { prompt: "কোন বদলটি আগে সবচেয়ে বেশি ঝুঁকি সরায়?", explain: "পরিচয় + দূরবর্তী প্রবেশ হলো সামনের দরজা; telnet/ftp সরানো আর firewall তার ঠিক পরে আসে।" },
      { prompt: "2026-এ চলমান Telnet আর FTP হওয়া উচিত:", explain: "অপ্রচলিত protocol অপ্রচলিতই থাকে: সেগুলো অবসর দেওয়ার সময় কেন (স্পষ্ট লেখায় credential) বোঝাও।" },
      { prompt: "1 দিনের log ধারণ ব্যর্থ হয়, কারণ:", explain: "ধারণ বাস্তবসম্মত শনাক্তকরণ বিলম্ব আওতায় রাখতেই হবে — একটি Level 18/20 নকশা input।" },
    ],
  },
};

export const CTF_BN: Record<string, CtfBn> = {
  "ctf-headers": {
    description: "একটি training app-এর login response (simulated) তার session cookie কোনো সুরক্ষামূলক flag ছাড়া সেট করে, আর কোনো security header পাঠায় না। Flag হলো সেই বাক্যাংশ যা পাঠ cookie-র অনুপস্থিত বিষয় বোঝাতে ব্যবহার করে।",
    objective: "একজন মূল্যায়নকারীর মতো response header আর cookie flag পর্যালোচনা করো।",
    prereq: "পাঠ: HTTP, Cookies, and Sessions।",
    hint: "দুটি শব্দ, underscore: কী অনুপস্থিত, আর find-এর অতীত কাল।",
    explanation: "Response-এ প্রতিটি standard সুরক্ষা অনুপস্থিত ছিল; fix তালিকা (flag + HSTS + CSP + nosniff) হলো Security Headers lab-এর deliverable।",
  },
  "ctf-perms": {
    description: "Simulated file তালিকায় (Permissions Audit lab), একটি secret ধারণ করা file একদম সবার দ্বারা পড়নযোগ্য আর লেখনযোগ্য। Flag সেই অবস্থার নাম দেয়।",
    objective: "একটি তালিকায় দেখেই world-writable secret ধরো।",
    prereq: "পাঠ: File Systems, Permissions, and Ownership।",
    hint: "Mode 666 = world-________। File-টি যা ধারণ করে তার সঙ্গে মেলাও।",
    explanation: "একটি secret file-এ 666 মানে যেকোনো স্থানীয় account তা পড়তে আর বদলাতে পারে — 600/640 আর একটি মালিকানা পর্যালোচনা দিয়ে ঠিক করা হয়।",
  },
  "ctf-dns": {
    description: "DNS lab-এর record সেট একটি channel লুকিয়ে রাখে যা data ফাঁস করে। কোন record ধরন অপব্যবহৃত হচ্ছে তা শনাক্ত করো; flag তার নাম দেয়।",
    objective: "DNS tunneling সূচক চেনো।",
    prereq: "পাঠ: IP Addressing, Subnetting, and DNS।",
    hint: "কোন record ধরন payload বহন করেছিল?",
    explanation: "TXT record একটি নথিভুক্ত tunneling/exfiltration channel; একটি domain-এর স্বাভাবিক ধরনের বিপরীতে লম্বা encoded উত্তরই লক্ষণ।",
  },
  "ctf-logs": {
    description: "SOC Training dataset-এ (পূর্ণ simulated event সেট), ব্যর্থ login-এর একটি বিস্ফোরণ আলাদা দাঁড়িয়ে আছে। Flag শ্রেণিবিন্যাস আর বিস্ফোরণটি record করা সময় (HHMM, 24h) সঙ্কেতবদ্ধ করে।",
    objective: "একটি log ধরনকে একটি ঘটনা শ্রেণিবিন্যাসে রূপান্তর করো।",
    prereq: "পাঠ: Linux Essentials।",
    hint: "ধরনের নাম (দুটি শব্দ, underscore) + শেষ সময় 0417।",
    explanation: "গৃহীত flag হলো CLAB{brute_force_0417}: পূর্ণ SOC dataset-এ (SOC Training) বিস্ফোরণটির timestamp 04:17 — সারসংক্ষেপ নয়, তোমাকে দেওয়া dataset পড়ো। শ্রেণিবিন্যাস: brute-force প্রচেষ্টা, কোনো সাফল্য দেখা যায়নি।",
  },
  "ctf-jwt": {
    description: "একটি training API JWT গ্রহণ করে। পর্যালোচনায় তুমি দেখো এটি এমন token সম্মান করে যার header alg 'none' ঘোষণা করে, খালি signature-সহ। Flag আকারে সঠিক server আচরণ বলো।",
    objective: "JWT যাচাইকরণ ব্যর্থতা আর তাদের সমাধান বোঝো।",
    prereq: "পাঠ: HTTP, Cookies, and Sessions; Level 17 বিষয়।",
    hint: "একটি সঠিক যাচাইকারী unsigned token সরাসরি ______ করে।",
    explanation: "Server-কে অনুমোদিত algorithm pin করতেই হবে, আর সবসময় signature যাচাই করতে হবে; 'none' প্রত্যাখ্যান করতেই হবে। Flag: CLAB{alg_none_rejected}।",
  },
  "ctf-idor": {
    description: "Mission 'Insecure API Authorization' থেকে simulated API ধারাবাহিক ID দিয়ে order প্রকাশ করে। Flag ত্রুটি শ্রেণির সংক্ষেপ আর Level 8 diagram-এ ব্যবহৃত object সংখ্যার নাম দেয়।",
    objective: "BOLA নির্ভুলভাবে নাম দাও, আর তা প্রমাণের সঙ্গে যুক্ত করো।",
    prereq: "পাঠ: Broken Access Control and SQL Injection।",
    hint: "API1:2023-এর সংক্ষেপ + 1042।",
    explanation: "Object 1042-এর ওপর Broken Object Level Authorization — প্রচলিত A01/API1 ধরন।",
  },
  "ctf-hash": {
    description: "তুমি একটি tool download করেছ, আর তার প্রকাশকের SHA-256। তোমার hash_check.py সেই রায় ছেপেছে যার মানে file-টি বিশ্বস্ত। Flag হলো সেই রায়, বিস্তারিতভাবে।",
    objective: "Hash দিয়ে file integrity যাচাই করো — একটি আসল release অভ্যাস।",
    prereq: "পাঠ: Cryptography Essentials।",
    hint: "অতীত-কালের শব্দ, যার মানে 'যাচাই করে নিশ্চিত করা হয়েছে'।",
    explanation: "একটি বিশ্বস্ত মাধ্যম থেকে মিলিত SHA-256 digest integrity যাচাই করে: CLAB{sha256_match_verified}।",
  },
  "ctf-phish": {
    description: "Phishing mission-এর ক্ষতিকর link এমন একটি domain ব্যবহার করেছে যা এক পলকে পার হওয়ার জন্য নকশা করা। Flag কৌশলটির নাম দেয়।",
    objective: "Lookalike-domain phishing আর containment সেট শনাক্ত করো।",
    prereq: "Mission: Simulated Phishing Incident।",
    hint: "তুমি এটি mission শিরোনামের ক্রিয়ায় করেছ: তুমি lookalike domain-টি ______ করেছ।",
    explanation: "Lookalike domain পলকে-পড়া শোষণ করে; bookmark/SSO portal দিয়ে যাচাই আর দ্রুত report হলো প্রতিরক্ষা: CLAB{lookalike_domain_spotted}।",
  },
};

export const PROJECT_BN: Record<string, ProjectBn> = {
  "proj-a": {
    objectives: [
      "একটি স্থানীয় training app-এর scope-সীমাবদ্ধ মূল্যায়ন চালাও (যেমন localhost-এ OWASP Juice Shop)",
      "শীর্ষ finding গুলোর জন্য mitigation ঠিক করো বা নথিভুক্ত করো",
      "একটি পেশাদার নিরাপত্তা report তৈরি করো",
    ],
    environment: "তোমার নিজের PC-তে Docker; app শুধু localhost-এ; তোমার তৈরি দুটি test account।",
    steps: [
      "Scope বিবৃতি লেখো (Level 0 template)",
      "App-এর page, role, আর API call তালিকাভুক্ত করো",
      "দুটি account দিয়ে access control test করো (BOLA যাচাই)",
      "শুধু training app-এ input পরিচালনা test করো",
      "Header, cookie, TLS config পর্যালোচনা করো",
      "Training app যা সাজাতে দেয় তা ঠিক করো; বাকিগুলোর জন্য code সমাধান নথিভুক্ত করো",
      "প্রতিটি finding আবার test করো, আর আগে/পরে প্রমাণ record করো",
      "Pentest Workspace template দিয়ে report লেখো",
    ],
    evidence: ["Scope বিবৃতি", "প্রতিটি finding-এর জন্য request/response জোড়", "আগে/পরে retest ফলাফল", "চূড়ান্ত report (PDF বা Markdown)"],
    rubric: [
      "Finding যাচাই করা, scanner থেকে copy করা নয়",
      "প্রভাব ব্যবসায়িক ভাষায় বলা",
      "সমাধানগুলো টেকসই ধরন (parameterize, authorize, encode)",
      "Report একজন অ-প্রযুক্তিগত ব্যবস্থাপকের পড়নযোগ্য",
    ],
    remediation: "প্রতিটি Critical/High finding-এর একটি সমাধান বা একটি নথিভুক্ত, তারিখযুক্ত ঝুঁকি গ্রহণ লাগে — কখনো নীরবতা নয়।",
  },
  "proj-b": {
    objectives: [
      "একটি Linux VM install করো, আর hardening ভিত্তিরেখা প্রয়োগ করো",
      "প্রতিটি control একটি command দিয়ে যাচাই করো, আর output record করো",
    ],
    environment: "একটি host-only network-এ VirtualBox VM; বদলের আগে snapshot।",
    steps: [
      "OS install আর update করো",
      "প্রতি-ব্যক্তি admin account তৈরি করো; root SSH নিষ্ক্রিয় করো",
      "শুধু key-ভিত্তিক SSH authentication",
      "Host firewall সক্ষম করো (default-deny)",
      "অব্যবহৃত service সরাও/নিষ্ক্রিয় করো",
      "স্বয়ংক্রিয় নিরাপত্তা update সক্ষম করো",
      "Log ধারণ ≥ 90 দিন সেট করো, আর auth.log পর্যালোচনা করো",
      "Mission 'Harden a Lab Server' checklist তোমার VM-এর বিরুদ্ধে চালাও",
    ],
    evidence: ["sshd_config অংশ", "ufw status output", "আগে/পরে ss -tlnp", "প্রতি আইটেমে pass/fail-সহ checklist"],
    rubric: [
      "প্রতিটি control উদ্দেশ্য নয়, output দিয়ে যাচাই করা",
      "Rollback/snapshot শৃঙ্খলা দেখানো হয়েছে",
      "চূড়ান্ত নিরীক্ষায় কোনো world-writable file নেই",
    ],
    remediation: "ব্যর্থ checklist আইটেম একটি সমাধান আর তারিখসহ একটি পুনঃযাচাই entry পায়।",
  },
  "proj-c": {
    objectives: [
      "একটি দেওয়া (simulated) capture + log bundle বিশ্লেষণ করো",
      "একটি timeline আর containment সুপারিশসহ একটি ঘটনা report তৈরি করো",
    ],
    environment: "CyberLab-এর ভেতরে দেওয়া simulated dataset (SOC Training corpus)।",
    steps: [
      "প্রমাণ তালিকাভুক্ত করো, আর file গুলো hash করো",
      "সব timestamp UTC-তে স্বাভাবিক করো",
      "ঘটনা timeline তৈরি করো",
      "প্রাথমিক প্রবেশ আর তার পরের কাজগুলো শনাক্ত করো",
      "লেখায় তথ্যকে বিশ্লেষণ থেকে আলাদা করো",
      "Containment, eradication, recovery সুপারিশ করো",
      "ঘটনা-পরবর্তী report লেখো",
    ],
    evidence: ["Custody note", "Timeline সারণি", "চিহ্নিত বিশ্লেষণ অংশসহ report"],
    rubric: [
      "প্রতিটি দাবি একটি প্রমাণ লাইনে চিহ্নিত করা যায়",
      "অস্থিরতা আর সংরক্ষণ সঠিকভাবে পরিচালিত",
      "সুপারিশগুলো নির্দিষ্ট আর ক্রমবদ্ধ",
    ],
    remediation: "প্রমাণের ফাঁক ফাঁক হিসেবেই ঘোষণা করা হয় — অনুমান দিয়ে কখনো পূরণ করা হয় না।",
  },
  "proj-d": {
    objectives: [
      "তোমার নিজের lab (VM + training app) শুরু থেকে শেষ পর্যন্ত মূল্যায়ন করো",
      "প্রযোজ্য ক্ষেত্রে CVE/CVSS/KEV/EPSS দিয়ে প্রতিটি finding triage করো",
    ],
    environment: "শুধু তোমার VirtualBox host-only lab।",
    steps: [
      "Scope + অনুমোদন (তুমিই মালিক — তবু লেখো)",
      "Lab-এর সম্পদ তালিকা",
      "Lab host-এর service তালিকাভুক্তকরণ",
      "শীর্ষ আইটেমের জন্য হাতে vulnerability যাচাই",
      "প্রতি finding-এ triage note (Vuln Academy বিন্যাস)",
      "Owner আর ক্রমসহ remediation পরিকল্পনা",
      "সমাধানের পর আবার test",
    ],
    evidence: ["তালিকা", "Triage note", "আগে/পরে scan সারসংক্ষেপ"],
    rubric: ["কোনো অযাচাইকৃত scanner দাবি নয়", "KEV/EPSS সঠিকভাবে ব্যবহৃত", "Retest প্রমাণ অন্তর্ভুক্ত"],
    remediation: "পরিকল্পনাটি কাঁচা CVSS নয়, শোষণ বাস্তবতা অনুযায়ী ক্রম করতেই হবে।",
  },
  "proj-e": {
    objectives: [
      "Emulator-এ একটি প্রকাশিত training APK static-বিশ্লেষণ করো",
      "একটি MASVS-সংযুক্ত finding report লেখো",
    ],
    environment: "তোমার PC-তে Android emulator + MobSF + JADX; শুধু training APK।",
    steps: [
      "APK hash করো আর তালিকাভুক্ত করো",
      "Manifest পর্যালোচনা (permission, exported component, debuggable)",
      "MobSF static scan; তার flag গুলো triage করো",
      "Flag করা code পথের JADX পর্যালোচনা",
      "Storage আর network-security-config পর্যালোচনা",
      "প্রতি আইটেমে severity + সমাধানসহ finding লেখো",
    ],
    evidence: ["APK hash + উৎস", "MASVS reference-সহ finding সারণি", "মূল প্রমাণের screenshot"],
    rubric: [
      "Finding feature-এর সঙ্গে যুক্ত (permission-গণনা শব্দ নয়)",
      "সমাধানগুলো বাস্তবায়নযোগ্য",
      "কোনো সময়েই কোনো আসল ব্যবহারকারীর data ছোঁয়া হয়নি",
    ],
    remediation: "Critical finding (প্রকাশিত data, ভাঙা TLS যাচাই) যেকোনো 'release' রায় আটকে দেয়।",
  },
  "proj-f": {
    objectives: [
      "Triage severity আর একটি escalation পথ সংজ্ঞায়িত করো",
      "Simulated corpus-এর বিপরীতে তিনটি Sigma-শৈলীর detection লেখো আর যাচাই করো",
      "ভাগ করা red/blue/purple ঘটনা শুরু থেকে শেষ পর্যন্ত চালাও",
    ],
    environment: "CyberLab SOC Training corpus + তোমার note/Research Workspace।",
    steps: [
      "SOC Training থেকে severity model গ্রহণ করো",
      "Corpus থেকে তিনটি আচরণ বেছে নাও",
      "FP note-সহ Sigma rule লেখো",
      "যাচাই করো: ক্ষতিকর সেট fire করে, সৌম্য সেট নথিভুক্ত",
      "Coverage ATT&CK-তে মানচিত্র করো",
      "Workflow নথি লেখো (triage → escalate → contain → report)",
    ],
    evidence: ["যাচাই ফলাফলসহ তিনটি rule", "ATT&CK coverage note", "Workflow নথি"],
    rubric: ["Rule গুলো আচরণ-ভিত্তিক", "FP বিশ্লেষণ সৎ", "যাচাই প্রমাণ সংযুক্ত"],
    remediation: "যাচাইয়ে ব্যর্থ একটি rule 'test' অবস্থায় ফিরে যায় — চিহ্ন প্রমাণের সঙ্গে মিলতেই হবে।",
  },
  "proj-g": {
    objectives: [
      "একটি কাল্পনিক enterprise profile মূল্যায়ন করো: AD নকশা, পরিচয়, network, endpoint",
      "একটি অগ্রাধিকারযুক্ত roadmap-সহ executive-প্রস্তুত মূল্যায়ন তৈরি করো",
    ],
    environment: "দেওয়া কাল্পনিক enterprise profile — কোনো আসল সিস্টেম নয়।",
    steps: [
      "Profile পড়ো; সম্পদ আর বিশ্বাসের সীমানা তালিকাভুক্ত করো",
      "পরিচয় নকশা পর্যালোচনা করো (tier, MFA, PAM)",
      "Network zone আর দূরবর্তী প্রবেশ পর্যালোচনা করো",
      "Endpoint আর logging ভঙ্গি পর্যালোচনা করো",
      "যুক্তিসহ ঝুঁকি অনুযায়ী finding ক্রম করো",
      "Roadmap লেখো: 30/60/90 দিন",
    ],
    evidence: ["Finding register", "Roadmap", "Executive সারসংক্ষেপ (এক পৃষ্ঠা)"],
    rubric: ["ব্যবসায়িক প্রভাবের ভাষা", "সুপারিশ বাস্তবসম্মতভাবে ধারাবাহিক", "কাল্পনিক সংস্থা সম্পর্কে কোনো বানানো তথ্য নয়"],
    remediation: "প্রতিটি finding একটি owner ভূমিকা আর একটি যাচাই পদ্ধতির নাম দেয়।",
  },
  "proj-h": {
    objectives: [
      "IAM, storage, logging, আর network control-সহ একটি ছোট cloud deployment নকশা করো (কাগজে/config-এ)",
      "তোমার নিজের নকশা Cloud lab checklist-এর বিপরীতে পর্যালোচনা করো",
    ],
    environment: "কাগজের নকশা + ঐচ্ছিক স্থানীয় Docker সমতুল্য; কোনো অর্থপ্রদানকারী cloud দরকার নেই।",
    steps: [
      "App-এর data শ্রেণি সংজ্ঞায়িত করো",
      "IAM role নকশা করো (least privilege, MFA, দৈনিক admin নয়)",
      "Storage নকশা করো (default হিসেবে private, encryption, versioning)",
      "Network নকশা করো (private subnet, ন্যূনতম ingress)",
      "প্রথম দিন থেকে logging/monitoring সক্ষম করো",
      "এই নকশার জন্য ঘটনা-প্রতিক্রিয়া note লেখো",
      "Cloud lab দিয়ে self-review করো; ঠিক করে আবার যাচাই করো",
    ],
    evidence: ["স্থাপত্য বর্ণনা", "IAM policy খসড়া", "সমাধানসহ self-review checklist"],
    rubric: [
      "Shared-responsibility সীমানা সঠিকভাবে বলা",
      "Secret ব্যবস্থাপনা নকশা করা, তাৎক্ষণিক উদ্ভাবিত নয়",
      "Launch-এর আগেই logging বিদ্যমান",
    ],
    remediation: "যেকোনো public-exposure আইটেম লিখিতভাবে ন্যায্যতা পেতেই হবে, বা সরাতেই হবে।",
  },
};
