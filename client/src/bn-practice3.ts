// Per-item Bangla for checkpoints, finals, skill assessments, SOC, diagnostic.
import type { PracticalBn, QuizBn, TaskBn } from "./bn-practice";

export type CheckpointBn = { quiz: QuizBn; practical: PracticalBn };
export type FinalBn = { quiz: QuizBn; practicals: PracticalBn[]; writtenPrompt: string };
export type AssessmentBn = { quiz: QuizBn; practical: PracticalBn };

export const CHECKPOINT_BN: Record<string, CheckpointBn> = {
  "cp-l0": {
    quiz: { q: ["দুপুরের ভিড়ে একটি café-র card machine একটি system update-এর পর কাজ করা বন্ধ করে দেয়। CIA-র কোন পা সবচেয়ে দৃশ্যমানভাবে ক্ষতিগ্রস্ত?", "একজন গবেষক একটি unrelated কাজের সময় একটি hospital system-এ ত্রুটি খুঁজে পান। দায়িত্বশীল পথ?", "কোন deliverable জোড় blue বনাম red-এর সঙ্গে মেলে?", "পাঠ মেলানো: একটি pentest engagement letter system, তারিখ, আর 'কোনো DoS নয়' নাম দেয়। Test-এর মাঝপথে তুমি একটি সম্ভাব্য DoS ত্রুটি দেখো। তুমি:"], why: ["ব্যবসা চলতে পারে না — availability — মূল কারণ যা-ই হোক।", "Test করার অনুমোদন নেই; শুধু ব্যক্তিগত report।", "Deliverable ভূমিকা সংজ্ঞায়িত করে (পাঠ 3)।", "অনুমোদনে তার সীমাও অন্তর্ভুক্ত; প্রমাণ engagement-এর নিয়মের সঙ্গে মানিয়ে নেয়।"] },
    practical: { task: "পরিস্থিতি সংশ্লেষণ: একটি ছোট ক্লিনিক (a) একটি reception login ভাগ করে, (b) কোনো backup নেই, (c) একজন nurse মৌখিকভাবে সাজানো 'একটি hacker test' চায়। সঠিক সম্মিলিত পেশাদার প্রতিক্রিয়া বেছে নাও:", hint: "তিনটি পাঠ, তিনটি পদক্ষেপ: gate, শ্রেণিবদ্ধ, control।", explain: "একটি সিদ্ধান্তে তিনটি পাঠ: আগে অনুমোদন gate, তারপর control-সহ CIA শ্রেণিবিন্যাস।" },
  },
  "cp-l1": {
    quiz: { q: ["একটি PC login-এর পর ব্যবহারযোগ্য হতে 10 মিনিট নেয়, আর disk আলো কখনো থামে না। সবচেয়ে ভালো প্রথম সন্দেহভাজন?", "'update.exe' একজন standard ব্যবহারকারী হিসেবে C:\\Users\\Public\\Downloads থেকে চলে, আর powershell জন্ম দেয়। কোন ক্ষেত্রগুলো একে দোষী করল?", "একটি ভাগ করা project folder 777 'যাতে সবাই কাজ করতে পারে'। পেশাদার সমন্বয় হলো:", "তোমার motherboard-এর জন্য firmware update এসেছে। নিরাপত্তা গঠন?"], why: ["Memory + storage আচরণ, Level 1 tool দিয়ে পড়া।", "Process তদন্ত বহু-ক্ষেত্র যুক্তি।", "Group দিয়ে সহযোগিতা — কাজ আটকে না রেখে least privilege।", "Boot integrity (পাঠ 1) firmware হালনাগাদ রাখা পর্যন্ত প্রসারিত।"] },
    practical: { task: "সম্মিলিত পড়া: Profile দেখায় UEFI+Secure Boot ON, C:\\Temp-এ একটি process 'svchost.exe', আর /home 777 ভাগ করা। ক্রমবদ্ধ রায়:", hint: "সক্রিয় অসঙ্গতি > স্থায়ী ভুল সাজানো > সুস্থ স্তর।", explain: "সংশ্লেষণ: একটি স্তর সুস্থ, একটি সক্রিয় অসঙ্গতি (অগ্রাধিকার), একটি স্থায়ী ভুল সাজানো।" },
  },
  "cp-l2": {
    quiz: { q: ["Lab network 192.168.10.0/24 user/server/IoT/guest-এর জন্য ভাগ করা। 192.168.10.200/26 সাজানো একটি printer কোন segment-এ পড়ে?", "ভাগ করার পর, ব্যবহারকারীরা 192.168.10.70-তে থাকা server-এ নাম বা IP কোনোটিতেই পৌঁছাতে পারে না। তার নাম lookup সঠিকভাবে 192.168.10.70 ফেরত দেয়। Layer রায়?", "কোন একক command সবচেয়ে ভালো প্রমাণ করে server-এর HTTPS service (শুধু host নয়) উত্তর দেয় কিনা?", "Lab portal-এর একটি DNS বদল একজনের জন্য 'কাজ করছে না', কিন্তু তোমার জন্য কাজ করে। সবচেয়ে সম্ভাব্য কারণ?"], why: [".200 .192 block-এ পড়ে — guest। Printer IoT-র সঙ্গে থাকার কথা হলে, এটি ঠিক করার মতো একটি config ভুল।", "সঠিক DNS + ব্যর্থ cross-subnet পৌঁছানো = পারাপার (router/firewall)-ই সন্দেহভাজন।", "ping host-এর জীবন্ততা প্রমাণ করে; curl application/port প্রমাণ করে — ভিন্ন layer।", "TTL caching প্রতি-resolver — propagation আসলে cache মেয়াদ শেষ হওয়া।"] },
    practical: { task: "পূর্ণ পরিস্থিতি: Segment করা lab-এ, একটি IoT camera (192.168.10.130/26) একটি user-segment PC-র সঙ্গে কথা বলতে দেখা যায়। Policy বলে IoT বিচ্ছিন্ন। তোমার সম্মিলিত finding + প্রথম দুটি পদক্ষেপ:", hint: ".130 কোন /26-তে? PC কোনটিতে? পারাপার কে পাহারা দেবে?", explain: "Subnet হিসাব + DNS/layer যুক্তি + tool (capture) একটি পেশাদার গতিতে — checkpoint-এর পুরো বিষয়।" },
  },
  "cp-l3": {
    quiz: { q: ["কাজ মেলানো: 'গত দিনের ব্যর্থ logon তালিকা করো' → Linux / Windows:", "একটি cron job একটি world-writable directory-তে সংরক্ষিত একটি script চালায়। Finding:", "তোমার bash report script প্রতি রাতে cron দিয়ে root হিসেবে চলবে। ন্যূনতম পরিচ্ছন্নতা?", "PowerShell: একটি ব্যস্ত server-এ Get-WinEvent 30 দিনে Id 4625-এর জন্য কিছুই ফেরত দেয় না। পেশাদার ব্যাখ্যা?"], why: ["দুটি platform, একই প্রমাণ — auth.log আর 4625 যমজ।", "Scheduler + লেখনযোগ্য code = Level 3 পাঠ মিলিত।", "সুবিধাসহ script attack surface-এর অংশ (Level 3 + 6 যুক্তি)।", "প্রত্যাশিত প্রমাণের অনুপস্থিতিও প্রমাণ — logging pipeline যাচাই করো।"] },
    practical: { task: "Cross-platform কাজ: 'কেউ রাতভর login করতে ব্যর্থ হয়েছে কিনা প্রমাণ করো, Linux VM আর Windows PC দুটোতেই, আর count save করো।' সঠিক পরিকল্পনা:", hint: "Deliverable হলো count + হুবহু command, দুটি system-এর জন্যই।", explain: "একটি প্রশ্ন, দুটি platform, পুনরুৎপাদনযোগ্য command, record করা প্রমাণ — একটি কাজে checkpoint।" },
  },
  "cp-l4-c": {
    quiz: { q: ["printf(\"%d\", 9 / 2) যা ছাপে:", "char buf[16]; strcpy(buf, argv[1]); — শ্রেণি আর সমাধান:", "একটি function-কে এমন একটি string ফেরত দিতেই হবে যা তার পরেও বেঁচে থাকে। সঠিক উৎস:", "p = malloc(sizeof *p); ... free(p); printf(p->x); — bug:"], why: ["Integer division (C মূল বিষয়)।", "Array/string + memory পাঠ প্রচলিত C ত্রুটিতে মিলিত হয়।", "Stack return-এ মরে; heap + মালিকানাই চুক্তি (struct/heap পাঠ)।", "Heap পাঠের দ্বিতীয় প্রচলিত bug, এক লাইনে।"] },
    practical: { task: "নিরীক্ষা সারসংক্ষেপ: code (1) একটি n-array-র ওপর i <= n loop করে, (2) একটি 8-byte buffer-এ input strcpy করে, (3) &local ফেরত দেয়। সম্পূর্ণ রায়:", hint: "মূল বিষয় → array → pointer → heap: প্রতি layer-এ একটি ত্রুটি।", explain: "তিনটিই দেখতে চারটি C পাঠই লাগে — আংশিক জ্ঞান ভাঙা code pass করে।" },
  },
  "cp-l4-js": {
    quiz: { q: ["'5' == 5 আর '5' === 5 যা মূল্যায়ন হয়:", "fetch কোনগুলোর জন্য resolve করে (throw করে না)?", "'<script>' ধারণ করা API data innerHTML দিয়ে উপস্থাপিত। ফলাফল:", "localStorage-তে রাখা একটি token বনাম একটি HttpOnly cookie — মূল বিনিময়:"], why: ["কঠোর তুলনা (JS মূল বিষয়) হলো পেশাদার default।", "HTTP status resolve হয়; res.ok হলো তোমার যাচাই (fetch পাঠ)।", "Source→sink (browser-security পাঠ): sink-ই নিরাপত্তা সিদ্ধান্ত নেয়।", "প্রতিটি সংরক্ষণ পছন্দ তার bug শ্রেণি আমদানি করে (browser-security পাঠ)।"] },
    practical: { task: "একটি page script-এর সম্মিলিত পর্যালোচনা: এটি res.ok ছাড়া item আনে, innerHTML দিয়ে নাম উপস্থাপন করে, আর == দিয়ে id তুলনা করে। সম্পূর্ণ সমাধান তালিকা:", hint: "প্রতি পাঠে একটি ত্রুটি: fetch, sink, তুলনা।", explain: "তিনটি পাঠ, তিনটি ত্রুটি, তিনটি নির্ভুল সমাধান — সাধারণ কিছু নয়।" },
  },
  "cp-l4-shell": {
    quiz: { q: ["একটি cron-চালিত bash health check একটি পূর্ণ disk খুঁজে পায়। এটি monitoring system-কে জানায় যেভাবে:", "grep -c 0 ছেপেছে, আর তোমার set -e script মরে গেছে। কারণ:", "PowerShell: event CSV-তে export করতে তুমি pipe করো:", "Investigation script-এর জন্য দুটি shell-ই একটি নিরাপত্তা নিয়মে একমত:"], why: ["Exit code (bash পাঠ) হলো automation যেভাবে কথা বলে।", "প্রচলিত ফাঁদ, bash পাঠে নামকৃত।", "Object pipeline শৃঙ্খলা (PowerShell পাঠ)।", "আগে পর্যবেক্ষণ — platform জুড়ে ভাগ করা রক্ষক সংস্কৃতি।"] },
    practical: { task: "কাজ: 'একটি ticket-এর জন্য Linux VM আর Windows PC দুটো থেকেই গতকালের failed-logon count CSV হিসেবে তৈরি করো।' সঠিক পরিকল্পনা:", hint: "একই প্রশ্ন, দুটি shell, প্রমাণ হিসেবে file।", explain: "একটি প্রমাণ standard, দুটি native বাস্তবায়ন — checkpoint-এর সংশ্লেষণ।" },
  },
  "cp-l5-a": {
    quiz: { q: ["একটি GET login form + flag ছাড়া একটি session cookie + client user_id-তে বিশ্বাস করা একটি orders endpoint। তিনটি ত্রুটি ক্রমে কোন পাঠগুলোর?", "Session cookie-র সবচেয়ে গুরুত্বপূর্ণ flag গুলো হলো:", "একটি API বিদ্যমান order-এর জন্য 403 'not your order' আর অনুপস্থিতগুলোর জন্য 404 ফেরত দেয়। গোপনীয়তা উন্নতি হলো:", "কোন artifact প্রমাণ করে একটি form credential URL-এ ফাঁস করে?"], why: ["এই দলের প্রতি পাঠে একটি ত্রুটি — বিনিময় শুরু থেকে শেষ পর্যন্ত পড়া।", "HTTP/session পাঠের শক্তিশালী Set-Cookie লাইন।", "অস্তিত্ব হলো তথ্য (REST/SQL পাঠ)।", "প্রমাণ request লাইনে থাকে (page-সাক্ষরতা পাঠ)।"] },
    practical: { task: "একটি কেনাকাটা trace করো: browser form (POST) → session cookie → অন্য ব্যবহারকারী হিসেবে GET /api/orders/9 → SQL। Chain-এর সবচেয়ে দুর্বল কড়ি আর সমাধান লেখো:", hint: "পরিচয় অনুসরণ করো: server কোথায় যাচাই করা থামায় order-টি কার?", explain: "পুরো chain শুধু তার authorization কড়ির মতোই শক্তিশালী — দলের সংশ্লেষণ।" },
  },
  "cp-l5-b": {
    quiz: { q: ["Demo-র app port proxy-র পাশাপাশি প্রকাশ্যে উত্তর দেয়। এটি যা পরাজিত করে:", "Demo-র চারটি ত্রুটি ঠিক করার পর, 'secure' দাবি করা হয় যখন:", "example.com-এর জন্য বৈধ একটি certificate www.example.com-এ উপস্থাপিত। Browser-এর অভিযোগ যা নিয়ে:", "সরাসরি internet client থেকে আসা X-Forwarded-For নিজেকে 10.0.0.5 দাবি করে। তোমার log তা যেভাবে ধরবে:"], why: ["Backend-স্থাপত্য পাঠ: bypass পথ control point বাতিল করে।", "দুবার-তৈরি পাঠ: প্রকাশকারী test দিয়ে retest করো, নাহলে এটি একটি আশা।", "নাম আওতা certificate-এর কাজ (TLS পাঠ)।", "Header হলো দাবি, যতক্ষণ তোমার অবকাঠামো সাক্ষ্য না দেয় (TLS/proxy পাঠ)।"] },
    practical: { task: "Proxy-র পেছনে demo দেওয়া হবে, যেখানে: HTTP এখনো উত্তর দিচ্ছে (কোনো redirect নয়), app port public, একটি ত্রুটির সমাধান অপরীক্ষিত। ক্রম করো আর সম্পূর্ণ করো:", hint: "Bypass > downgrade > অপ্রমাণিত সমাধান।", explain: "আগে স্থাপত্য, তারপর পরিবহন, সবসময় প্রমাণ — দুটি পাঠ এক সিদ্ধান্তে।" },
  },
  "cp-l6-a": {
    quiz: { q: ["একটি password-reset প্রবাহে STRIDE হাঁটা 'reset link কখনো মেয়াদোত্তীর্ণ হয় না, কোনো audit log নেই' বের করে। অক্ষরগুলো হলো:", "Salt-যুক্ত MD5 হিসেবে সংরক্ষিত password — রায়:", "একটি অভ্যন্তরীণ app 'LAN থেকে' আসা যেকোনো request বিশ্বাস করে। Zero Trust-এর সংশোধন:", "Least privilege-এর একটি নকশা test হলো:"], why: ["Threat-model পাঠ: আগে শ্রেণির নাম, তারপর সিদ্ধান্ত।", "Crypto পাঠ: দুটি ব্যর্থতা অক্ষ — গতি আর salt — আলাদাভাবে ঠিক করা।", "অবস্থান পরিচয় নয় (access পাঠ)।", "NEVER প্রমাণিত হয় ব্যর্থ প্রচেষ্টা দিয়ে, diagram দিয়ে নয়।"] },
    practical: { task: "সংশ্লেষণ: একটি file-sharing app — public link অনুমান ব্যাপক, password SHA-256 hash করা, কর্মীরা একটি admin login ভাগ করে। ক্রমবদ্ধ remediation সেট হলো:", hint: "প্রতি পাঠে একটি সমাধান, প্রতিটি যাচাইযোগ্য।", explain: "তিনটি পাঠই একটি ছোট app-এ নামে — সেই সংযোজনই Level 6।" },
  },
  "cp-l6-b": {
    quiz: { q: ["একটি policy-তে 'Password শক্তিশালী হতেই হবে' যা দিয়ে ঠিক করা হয়:", "একটি CI gate যেকোনো low-severity finding-এর জন্য প্রতিটি build ব্যর্থ করে। অনুমানযোগ্য ফলাফল হলো:", "তোমার ransomware 'স্তর' একটি admin credential সেট ভাগ করে। Defense-in-depth রায়:", "Awareness program 100% উপস্থিতি আর 3 ঘণ্টার মধ্যমা report সময় report করে। রায়:"], why: ["Policy বনাম standard (SDLC পাঠ)।", "Gate নকশা হলো policy নকশা (SDLC পাঠ)।", "সচেতনতা/প্রতিরক্ষা পাঠ: সম্পর্কিত ব্যর্থতা গভীরতা নয়।", "কার্যকলাপের চেয়ে ফলাফল (প্রতিরক্ষা পাঠ)।"] },
    practical: { task: "একটি 10-ব্যক্তির ফার্মের জন্য ন্যূনতম কার্যকর program নকশা করো: একটি policy clause, একটি pipeline gate, দুটি scorecard metric। পেশাদার সেট হলো:", hint: "এই মাসে মাপা না গেলে, তা পাঠানো হয় না।", explain: "ছোট, মাপযোগ্য, মালিকানাধীন — দুটি পাঠই একমত যে এটি বিস্তৃত সাজসজ্জাকে হারায়।" },
  },
  "cp-l7-a": {
    quiz: { q: ["Nmap বলে একটি lab host-এর 443 filtered; ভেতর থেকে তোমার capture একটি TLS handshake সম্পূর্ণ হতে দেখায়। মিল:", "একটি scanner banner-দাবি করে একটি দুর্বল Apache; distro changelog দেখায় সমাধান backport করা। Finding অবস্থা:", "তোমার pcap প্রমাণ করে একটি host 900 বার একটি tunneling-আকৃতির domain resolve করেছে। এটি যা প্রমাণ করে না:", "একটি নতুন engagement-এ কোনো tool চলার আগে, প্রথম artifact হলো:"], why: ["সুবিধাজনক স্থান প্রতিটি network দাবির অংশ (দুটি পাঠই)।", "Methodology পাঠ: যাচাই-ই finding কারখানা।", "প্রমাণ scope নির্ধারণ (Wireshark পাঠ)।", "অনুমোদন packet-এর আগে আসে (methodology + Level 0)।"] },
    practical: { task: "সম্মিলিত ক্ষেত্র: scope তোমার lab /24 আওতায় রাখে। Nmap .99-তে 3389 open-সহ একটি অপ্রত্যাশিত host খুঁজে পায়; capture দেখায় এটি আক্রমণাত্মকভাবে ARP করছে। ক্রমবদ্ধ প্রতিক্রিয়া:", hint: "তোমার scope আবিষ্কার আর report অনুমোদন করে — অভিযান নয়।", explain: "দুটি tool একটি অজানা বিষয়কে সমর্থন করে — পেশাদার কাজ প্রমাণ বাড়ায়, scope কখনো নয়।" },
  },
  "cp-l7-b": {
    quiz: { q: ["ZAP তোমার demo-তে 'Missing CSRF token' পতাকা দেয়; তোমার replay দেখায় একটি বৈধ session ছাড়া state বদল যাহোক ব্যর্থ হয়। রায়:", "openssl একটি in-scope host-এর জন্য 'Verify return code: 0' আর TLS 1.3 দেখায়। তোমার report দাবি করে:", "Trivy একটি base-image package-এ একটি CRITICAL report করে, যা তোমার app কখনো চালায় না। সঠিক পরিচালনা:", "একজন সহকর্মীর একটি Bandit finding-এর সমাধান হলো কোনো code বদল ছাড়া '# nosec'। তুমি:"], why: ["Scanner শৃঙ্খলা (Burp/ZAP + methodology)।", "সংকীর্ণ tool, সংকীর্ণ দাবি (curl/OpenSSL পাঠ)।", "প্রেক্ষাপট সিদ্ধান্ত নেয় (toolchain পাঠ)।", "Gate বিদ্যমান code বদলাতে, মন্তব্য নয় (toolchain + Level 6)।"] },
    practical: { task: "তোমার training app-এ পূর্ণ চক্র: proxy দিয়ে পৃষ্ঠের মানচিত্র, curl দিয়ে একটি header সমাধান যাচাই, project Trivy-scan, আর রায় লেখো। Deliverable হলো:", hint: "একটি দাবি তার প্রমাণের নাম বলতে না পারলে, তা পাঠানো হয় না।", explain: "পুরো level একটি অভ্যাসে: tool প্রস্তাব করে, প্রমাণ নিষ্পত্তি করে, scope শাসন করে।" },
  },
};

export const FINAL_BN: Record<string, FinalBn> = {
  "fin-l0": {
    quiz: { q: ["ঝুঁকি সবচেয়ে ভালো সংজ্ঞায়িত হয় এভাবে:", "কোনটি একটি প্রতিরোধমূলক control?", "তোমার scope বলে 'localhost-এ training app test করো'। Vendor-এর একটি subdomain-ও পৌঁছানো যায়। এটি হলো:", "একজন SOC বিশ্লেষকের সবচেয়ে বেশি ব্যবহৃত deliverable হলো:", "Integrity ব্যর্থতার উদাহরণ:"], why: ["ঝুঁকি সম্ভাবনা আর পরিণতি মেলায় — triage-এর মুদ্রা।", "MFA অননুমোদিত প্রবেশ রোধ করে; alert শনাক্ত করে; report নথিভুক্ত করে।", "Scope আক্ষরিক। ইঙ্গিত অনুমোদন নয়।", "নথিই shift-এর পণ্য।", "অননুমোদিত বদল = integrity।"] },
    practicals: [
      { task: "শ্রেণিবদ্ধ করো আর control করো: 'একজন শিক্ষক exam প্রশ্ন একটি shared drive folder-এ রাখেন, যা সব কর্মী সম্পাদনা করতে পারে, কোনো version ইতিহাস ছাড়া।'", hint: "এখানে দুটি পা হুমকির মুখে।", explain: "কে পড়তে পারে (C) আর নীরবে বদলাতে পারে (I) — দুটি পা, দুটি control-এর নাম।" },
      { task: "সঠিকভাবে scope করা test পরিকল্পনা লাইন বেছে নাও:", hint: "নির্দিষ্টতাই test।", explain: "নামকৃত লক্ষ্য, সময়সীমা, সীমা, মালিক — Level 0 standard।" },
    ],
    writtenPrompt: "লিখিত কাজ (5–8 লাইন): একজন বন্ধু তোমাকে এই সপ্তাহান্তে 'আমার ছোট ব্যবসা নিরাপদ কিনা যাচাই করো' বলে। একজন পেশাদার যে উত্তর পাঠায় তা লেখো: তুমি এখন কী করতে পারো, কীসে লিখিত scope লাগবে, আর তুমি করবে এমন প্রথম তিনটি ঝুঁকিহীন পর্যবেক্ষণ।",
  },
  "fin-l1": {
    quiz: { q: ["Boot ক্রম, সঠিকভাবে সাজানো:", "একটি System32 process-এর নাম নিয়ে %TEMP% থেকে চলমান একটি process পতাকা পায়, কারণ:", "একটি group-ভাগ করা config-এ 640 মানে:", "Container VM থেকে প্রধানত আলাদা, কারণ container:", "Environment variable নিরাপত্তার জন্য গুরুত্বপূর্ণ, কারণ:"], why: ["আগে firmware, তারপর তা যাচাই করে এমন শৃঙ্খল।", "বহু-ক্ষেত্র পরিচয় যাচাই।", "6=rw-, 4=r--, 0=---।", "ভাগ করা kernel = হালকা, ভিন্ন বিচ্ছিন্নতা সীমানা (Level 15 আবার দেখে)।", "উত্তরাধিকারসূত্রে পাওয়া প্রেক্ষাপট attack surface, আর একটি সাধারণ secret-ফাঁসের মাধ্যম।"] },
    practicals: [
      { task: "এই profile থেকে — GPT disk, Secure Boot OFF, 'invoice.exe' দ্বারা জন্ম নেওয়া একটি process 'explorer.exe', একটি world-writable C:\\Shared — তদন্ত ক্রম বেছে নাও:", hint: "কোন আইটেমটি ঠিক এখন ঘটছে?", explain: "সক্রিয় অসঙ্গতি > স্থায়ী প্রকাশ > ভঙ্গি — ঘটনা triage যুক্তি।" },
      { task: "একটি machine passport সংগ্রহের সঠিক read-only command সেট (Windows):", hint: "Passport = তথ্য, read-only।", explain: "পাঠ 1-এর পরিদর্শন সেট — বদল ছাড়া পর্যবেক্ষণ।" },
    ],
    writtenPrompt: "লিখিত কাজ: এই profile-এর জন্য 'machine passport + শীর্ষ 3 finding' note লেখো: Windows 10 (support শেষ), MBR disk, Secure Boot প্রযোজ্য নয়, পুরো পরিবার ভাগ করা '1234' password-সহ admin account 'PC', কোনো backup সাজানো নেই।",
  },
  "fin-l2": {
    quiz: { q: ["10.0.0.0/25-এ ব্যবহারযোগ্য host?", "কোন জোড় UDP-আকৃতির?", "স্থানীয় link-এ ARP-এর কাজ:", "একটি বন্ধ port-এ একটি SYN আসে। একটি সাধারণ host উত্তর দেয়:", "TLS প্রাথমিকভাবে যা যোগ করে:", "তোমার gateway 192.168.1.1, তোমার IP 192.168.1.50/24, লক্ষ্য 192.168.1.200। Frame গুলো যায়:"], why: ["2^7=128 মোট − network − broadcast = 126।", "ছোট request/response আর ক্ষতি-সহনশীল streaming UDP-র পক্ষে।", "ARP একটি broadcast domain-এর ভেতরে L3-কে L2-এর সঙ্গে বাঁধে।", "বন্ধ port RST দিয়ে প্রত্যাখ্যান করে; filtered port হলো নীরবগুলো।", "সংযোগের জন্য গোপনীয়তা আর পরিচয়।", "একই subnet = সরাসরি পৌঁছে দেওয়া; gateway শুধু অন্য network-এর জন্য।"] },
    practicals: [
      { task: "নকশা: 172.16.5.0/24-কে 4টি বিভাগের জন্য ভাগ করো, প্রতিটির ~50 host দরকার। সঠিক পরিকল্পনা:", hint: "আগে প্রতি subnet-এ host, তারপর subnet গণনা।", explain: "/26 62টি ব্যবহারযোগ্য দেয় — অতিরিক্ত জায়গাসহ ~50-তে মানায়; /25 শুধু দুটি subnet দেয়।" },
      { task: "Capture পড়া: [SYN→] [←RST] [SYN→] [←RST] একটি host থেকে 3 সেকেন্ডে 40টি ভিন্ন port জুড়ে। ব্যাখ্যা:", hint: "Port গণনা করো, সেকেন্ড গণনা করো।", explain: "হার + বিস্তৃতি + RST ধরন = scanning স্বাক্ষর, তার থেকে পড়া।" },
    ],
    writtenPrompt: "লিখিত কাজ: এর জন্য 5-লাইনের ত্রুটি report লেখো: 'অফিস সরানোর পর থেকে, file server (files.corp, 192.168.20.10/24) user segment (192.168.10.0/24) থেকে পৌঁছানো যায় না। DNS সঠিকভাবে resolve হয়; gateway-তে ping কাজ করে; server-এ ping timeout হয়; .20-এর অন্য server কাজ করে।'",
  },
  "fin-l3": {
    quiz: { q: ["systemd-র ভূমিকা হলো:", "LocalSystem হিসেবে চলতে সাজানো একটি Windows service, যা একটি world-writable config পড়ে, হলো:", "PowerShell execution policy সবচেয়ে ভালো বর্ণনা করা হয় এভাবে:", "কোন hardening জোড় 'যা ব্যবহার করো না তা নিষ্ক্রিয় করো'-র সঙ্গে মেলে?", "Cron লাইন '0 3 * * * /home/user/backup.sh' যা চালায়:"], why: ["আধুনিক Linux-এর service স্তর।", "একই ধরন, দুটি platform (Checkpoint L3 যুক্তি)।", "Microsoft তা একটি guardrail হিসেবে নথিভুক্ত করে; script control-কে আলাদা সমস্যা হিসেবে ধরো।", "Attack-surface হ্রাস একটি cross-platform ধ্রুবক।", "Minute hour day month weekday — প্রতিদিন 03:00; অবস্থান পরিচ্ছন্নতা তবু প্রযোজ্য।"] },
    practicals: [
      { task: "Linux command ধারাবাহিক লেখো (1) user 'labmate' তৈরি করতে, (2) তাদের sudo-তে যোগ করতে, (3) যাচাই করতে:", hint: "-aG-তে -a হলো প্রচলিত পায়ের ফাঁদ।", explain: "Home-সহ তৈরি করো, sudo group-এ যোগ করো (-aG যোগ করে — -a বাদ দিলে group প্রতিস্থাপিত হয়), id দিয়ে যাচাই করো।" },
      { task: "Windows সমতুল্য প্রমাণ: 'Account lockout সাজানো আছে কিনা দেখাও, আর সাম্প্রতিক lockout দেখো।' সঠিক পদ্ধতি:", hint: "Policy এক জায়গায়, প্রমাণ log-এ।", explain: "4740 হলো lockout event ID — policy-কে প্রমাণের সঙ্গে জোড়া দাও।" },
    ],
    writtenPrompt: "লিখিত কাজ: Lab server-এ শুধু key-ভিত্তিক SSH সক্ষম করার change note লেখো: কী বদলায়, কী তোমাকে বের করে দিতে পারে, তোমার rollback, আর তুমি কীভাবে যাচাই করবে।",
  },
  "fin-l4": {
    quiz: { q: ["একটি 4 GB log-এর প্রতি IP-তে ব্যর্থতা গণনার memory-নিরাপদ উপায় হলো:", "ব্যবহারকারীর input থেকে একটি নির্দিষ্ট buffer-এ strcpy হলো:", "তোমার API-তে fetch() একটি HTML error page-সহ HTTP 500 ফেরত দিয়েছে। সঠিক client আচরণ:", "একটি bash monitoring script আর একটি PowerShell report দুটোকেই, এই level-এর standard অনুযায়ী:", "কোন project সংযোজন একটি আসল integrity pipeline?", "এই level-এ লেখা প্রতিটি network call শাসন করা একটি নিয়ম:", "একটি Host class প্রতিটি scan করা host-এর port আর একটি RISKY set রাখে; দুটি host object কখনো তাদের port তালিকা ভাগ করবে না। সঠিক নকশা:", "একটি batch parser 10,000 লাইনে একটি বিকৃত লাইন পায়। পেশাদার আচরণ:", "C-তে, একটি helper-কে এমন report string বানাতে হবে যা caller helper ফেরত আসার পর ব্যবহার করে। একমাত্র নিরাপদ উৎস:", "Java: একটি findings তালিকাকে duplicate প্রত্যাখ্যান করতে হবে আর lookup দ্রুত রাখতে হবে, যেখানে একটি config map নাম দিয়ে মান খোঁজে। Collection গুলো হলো:"], why: ["Streaming হলো track-এর পুনরাবৃত্ত শৃঙ্খলা।", "C track-এর মূল রায়।", "JS track: status resolve হয়; body অবিশ্বস্ত।", "Shell track-এর ভাগ করা সংস্কৃতি।", "Python track-এর FIM ধরন, সম্পূর্ণ।", "Scope-ই tooling আর অনুপ্রবেশের মধ্যে পার্থক্য।", "OOP পাঠ: self.<attr> প্রতি-object; class-স্তরের mutable state প্রতিটি instance ভাগ করে।", "Exceptions পাঠ: নির্দিষ্ট catch, প্রতি-record ব্যর্থতা, batch টিকে থাকা।", "C track: lifetime হলো মালিকানা; stack, heap, static storage তিনটি আলাদা চুক্তি।", "Java collections পাঠ: যেই কাঠামোর চুক্তি প্রশ্নের সঙ্গে মেলে তা বাছো।"] },
    practicals: [
      { task: "Code পর্যালোচনা (Python): data = open(f).read(); for ip in re.findall(pattern, data): counts[ip] += 1 — একটি 4 GB log-এ, সম্ভবত অনুপস্থিত একটি key-সহ। দুটি সমাধান:", hint: "একটি সমাধান RAM নিয়ে, একটি KeyError নিয়ে।", explain: "Memory আকৃতি + গণনা প্রবাদ — Python track-এর দুটি প্রতিবর্তী ক্রিয়া।" },
      { task: "Code পর্যালোচনা (C + JS): একটি C helper একটি নাম char[16]-এ strcpy করে; একটি page একই নাম innerHTML দিয়ে উপস্থাপন করে। ভাগ করা মূল কারণ আর সমাধান:", hint: "C-তে দৈর্ঘ্য, browser-এ ব্যাখ্যা।", explain: "একটি data আইটেম, দুটি ভাষা, একটি নীতি: input কখনো তার ধারককে ছাড়িয়ে বা পুনর্ব্যাখ্যা করবে না।" },
    ],
    writtenPrompt: "লিখিত কাজ: তুমি আগের একজন শিক্ষার্থীর কাছ থেকে অপর্যালোচিত script-এর একটি folder উত্তরাধিকার পেয়েছ (Python, C, bash, PowerShell)। তোমার পর্যালোচনা পরিকল্পনা লেখো (5–8 লাইন): প্রতি ভাষায় কী যাচাই করো, কোন ক্রমে, আর সেগুলো চালানো সম্পর্কে একটি নিয়ম।",
  },
  "fin-l5": {
    quiz: { q: ["একটি GET URL-এ credential যা-র কাছে প্রকাশিত:", "SQL-এ প্রকাশিত BOLA সমাধান হলো:", "একটি HTTPS site-এ Secure অনুপস্থিত একটি session cookie মানে:", "Proxy এমন একটি cert উপস্থাপন করে যার SAN-এ পরিদর্শিত নাম নেই। সঠিক ব্যবহারকারী/পেশাদার পদক্ষেপ:", "একটি সমাধান পেশাদারভাবে 'শেষ' হয় যখন:"], why: ["Page + HTTP পাঠ মিলিত।", "REST/SQL পাঠের প্রচলিত লাইন।", "Flag একটি সেট; একটি অনুপস্থিত flag একটি খোলা দরজা।", "বিশ্বাসের শৃঙ্খল পাঠ: সতর্কতাই control।", "দুবার-তৈরি পাঠের 'শেষ'-এর সংজ্ঞা।"] },
    practicals: [
      { task: "স্থাপত্য পর্যালোচনা: browser → proxy (TLS ঠিক) → app port-ও public → app client-পাঠানো user_id বিশ্বাস করে → SQL জোড়া দেওয়া। প্রথম দুটি সমাধান ক্রম করো:", hint: "কী কী বাতিল করে? সুর করার আগে বাতিলকারী ঠিক করো।", explain: "আগে bypass (এটি প্রান্ত বাতিল করে), তারপর পরিচয়+injection মূল — level-এর অগ্রাধিকার ক্রমে।" },
      { task: "Demo app-এর জন্য regression suite লেখো: ন্যূনতম সেট হলো:", hint: "চারটি ত্রুটি → চারটি স্থায়ী test।", explain: "প্রতি রোপণ করা ত্রুটিতে একটি test, চিরকাল স্বয়ংক্রিয় — ছোট আকারে Project A-র grading rubric।" },
    ],
    writtenPrompt: "লিখিত কাজ: সমাধানের পরে Level 5 demo app-এর জন্য এক-পৃষ্ঠার মূল্যায়ন সারসংক্ষেপ লেখো: scope লাইন, চারটি finding তাদের সমাধান আর retest ফলাফলসহ, আর একটি অবশিষ্ট-ঝুঁকির বাক্য।",
  },
  "fin-l6": {
    quiz: { q: ["একটি login প্রবাহের STRIDE-সম্পূর্ণ model-এ বিবেচনা করতেই হবে:", "Salt-যুক্ত SHA-256 password সংরক্ষণ তবু একটি finding, কারণ:", "একটি কার্যকর বাক্যে Zero Trust:", "একটি মাপযোগ্য standard আর একটি exception পথ ছাড়া একটি policy যা করবে:", "এগুলোর মধ্যে একক সেরা ransomware metric হলো:"], why: ["পদ্ধতিগত অনুপ্রাণিতকে হারায় — model-এর উদ্দেশ্য।", "গতি আর salt আলাদা অক্ষ (crypto পাঠ)।", "নীতি, পণ্য নয়।", "Policy/SDLC পাঠের যুগ্ম ব্যর্থতা ধরন।", "প্রমাণিত পড়া প্রতিশ্রুত লেখাকে হারায়।"] },
    practicals: [
      { task: "একটি 5-ব্যক্তির ক্লিনিকের patient portal-এর (web + DB + কর্মী login) জন্য প্রতিরক্ষা নকশা করো: সম্পূর্ণ ন্যূনতম সেট হলো:", hint: "Level-টি হাঁটো: model → crypto → access → process → গভীরতা।", explain: "মৌলিক বিষয় একটি system-এ মিলিত হয় — যেকোনো সারি সরাও আর তা আমন্ত্রণ জানায় এমন ঘটনার নাম বলো।" },
      { task: "একজন vendor তাদের 'AI security platform' দিয়ে তোমার roadmap প্রতিস্থাপনের প্রস্তাব দেয়, যা 'সবকিছু আওতায় রাখে'। Level 6 প্রতিক্রিয়া:", hint: "তোমার নথি তাদের slide-এর ওপরে।", explain: "Tool model-কে সেবা করে; model tool-কে সেবা করে না (Level 0 + 6 চুক্তি)।" },
    ],
    writtenPrompt: "লিখিত কাজ: একটি ছোট সংস্থার জন্য নিরাপত্তা মৌলিক সনদ লেখো (6–9 লাইন): পাঁচটি প্রতিশ্রুতি (model, crypto/পরিচয়, access, process, গভীরতা), প্রতিটি একটি মাপযোগ্য বাক্যে, একজন মালিকসহ।",
  },
  "fin-l7": {
    quiz: { q: ["প্রশ্নটি পাঠাও: 'গত রাতে কেউ tunneling-আকৃতির domain resolve করেছে?'", "একটি banner-ভিত্তিক scanner finding, একটি proxy সূত্র, আর একটি Trivy CVE তোমার report-এ আসে। তারা finding হিসেবে ঢোকে যখন:", "তোমার ZAP active scan staging-এর দিকে নির্দেশিত, কারণ production 'মোটামুটি একই'। ভুল:", "curl -k আর একটি verification-বন্ধ openssl যাচাই কোন পাপ ভাগ করে?", "Zeek log + Sigma rule + একটি pcap: একটি ঘটনায় এই তিনটি একটি DNS tunneling রায়ে একমত। তোমার report-এর আত্মবিশ্বাস ভাষা:"], why: ["Log ইতিহাসের প্রশ্নের উত্তর দেয় (toolchain পাঠ)।", "Methodology শৃঙ্খলা, চূড়ান্ত আকারে।", "Scope system-এর নাম দেয়, সাদৃশ্যের নয়।", "Verification-বন্ধ যাচাই বাতিল করে (curl/OpenSSL পাঠ)।", "উৎস নির্ভরযোগ্যতা policy, প্রয়োগ করা (Knowledge Base + SOC অনুশীলন)।"] },
    practicals: [
      { task: "তোমার নিজের training পরিবেশের (VM + demo app) একদিনের মূল্যায়ন পরিকল্পনা করো: সঠিক tool ক্রম হলো:", hint: "সক্রিয়র আগে নিষ্ক্রিয়; রায়ের আগে যাচাই।", explain: "ধারাবাহিক হিসেবে methodology: আবিষ্কার, মানচিত্র, যাচাই, scan, রায়, retest — একদিনে level।" },
      { task: "একটি finding দাবি করে 'TLS ভাঙা', একটি s_client run উল্লেখ করে যা একটি আধুনিক server-এর বিরুদ্ধে -tls1_1 ব্যবহার করে ব্যর্থ হয়েছে। দাবির ত্রুটি:", hint: "Server কী প্রত্যাখ্যান করেছে, আর তার করা উচিত ছিল কিনা?", explain: "Tool সাক্ষরতায় জানা অন্তর্ভুক্ত একটি নেতিবাচক ফলাফল কখন control-এর কাজ করা (OpenSSL পাঠের নির্ভুলতা standard)।" },
    ],
    writtenPrompt: "লিখিত কাজ: একটি মূল্যায়ন report-এর জন্য tool-ও-প্রমাণ পরিশিষ্ট লেখো (5–8 লাইন): scope লাইন, version/উদ্দেশ্যসহ ব্যবহৃত tool, আর প্রতিটি শ্রেণির output finding হওয়ার আগে কীভাবে যাচাই করা হয়েছিল।",
  },
};

export const ASSESSMENT_BN: Record<string, AssessmentBn> = {
  "sa-networking": {
    quiz: { q: ["10.10.0.0/24-কে 30টি ব্যবহারযোগ্য host-এর subnet-এ ভাগ করো: mask আর সংখ্যা?", "একটি host কোনো DHCP উত্তর পায় না। তার নিজে-নির্ধারিত ঠিকানা যা-তে থাকবে:", "Wireshark-এ কোন capture filter শুধু সংযোগ প্রচেষ্টা খোঁজে?"], why: ["/27 32টি ঠিকানা দেয় (30 ব্যবহারযোগ্য), আর একটি /24 থেকে 8টি subnet।", "Link-local স্বয়ংক্রিয় সাজানো আধুনিক OS-এ no-DHCP বিকল্প।", "SYN সেট, ACK পরিষ্কার = প্রাথমিক সংযোগ প্রচেষ্টা।"] },
    practical: { task: "দেওয়া: PC 192.168.5.130/25, gateway 192.168.5.1। PC gateway-তে পৌঁছাতে পারে না। রোগনির্ণয়:", hint: "দুটি block-ই হিসাব করো।", explain: ".128-তে /25 সীমানা তাদের ভিন্ন network-এ রাখে — একটি ঠিকানার ভুল, cable ছোঁয়ার আগে হিসাবে পাওয়া।" },
  },
  "sa-linux": {
    quiz: { q: ["systemctl status ssh 'failed' দেখায়। প্রথম প্রমাণ উৎস?", "কোন file স্থানীয় user account তালিকাভুক্ত করে?", "tail -f যা করতে ব্যবহৃত:"], why: ["Journal service-এর নিজের error output ধারণ করে।", "passwd = account তালিকা; shadow = hash (শুধু root)।", "Follow mode নতুন লাইন stream করে — ঘটনার tool।"] },
    practical: { task: "/var/log-এর নিচে গত 24 ঘণ্টায় বদলানো file খোঁজার command:", hint: "find হলো নাম/সময় খোঁজার tool।", explain: "-mtime -1 (এক দিনের কম) আর -type f-সহ find।" },
  },
  "sa-web": {
    quiz: { q: ["XSS আর CSRF মৌলিকভাবে আলাদা:", "যে header আজ সবচেয়ে সরাসরি clickjacking-এর বিরুদ্ধে লড়ে:", "HttpOnly cookie-র বদলে localStorage-তে session token রাখা — মূল বিনিময়:"], why: ["ভিন্ন কৌশল, ভিন্ন সমাধান (encoding/CSP বনাম token/SameSite)।", "frame-ancestors নিয়ন্ত্রণ করে কে page-টি embed করতে পারে।", "প্রতিটি সংরক্ষণ পছন্দ একটি ভিন্ন bug শ্রেণি আমদানি করে — প্রতি app-এ বিচার করো।"] },
    practical: { task: "এই response নিরীক্ষা করো: 200 OK, Set-Cookie: sid=…; Secure (শুধু), body ?q= unencoded-ভাবে HTML-এ প্রতিফলিত করে। দুটি finding:", hint: "একটি finding header-এ, একটি body-তে।", explain: "Cookie flag অসম্পূর্ণ + প্রচলিত reflected-XSS sink — output encode করো (আর defense in depth হিসেবে CSP যোগ করো)।" },
  },
  "sa-python": {
    quiz: { q: ["requests.get(url, timeout=5) — timeout গুরুত্বপূর্ণ, কারণ:", "json.loads বনাম json.load:", "os.system('cp …')-এর বদলে pathlib/shutil কেন পছন্দ করবে?"], why: ["সীমাহীন অপেক্ষা automation-এ একটি নির্ভরযোগ্যতা (আর DoS) bug।", "'s' মানে string — একটি প্রচলিত interview আর debugging বিষয়।", "Data দিয়ে shell চালানো একটি injection ধরন (CWE-78 পরিবার)।"] },
    practical: { task: "ঠিক করো: os.system('ping ' + host), যেখানে host একটি file থেকে আসে। সঠিক পদ্ধতি:", hint: "Shell-কে মারো, command রাখো।", explain: "List-আকারের subprocess কখনো একটি shell ডাকে না, তাই data-র metacharacter data-ই থাকে।" },
  },
};

export const SOC_BN: Record<string, TaskBn[]> = {
  "soc-failed-logins": [
    { prompt: "শ্রেণিবিন্যাস?", explain: "পরিমাণ + একক বাহ্যিক উৎস + সব ব্যর্থতা (এটি CTF 'ctf-logs' dataset)।" },
    { prompt: "Severity আর প্রথম পদক্ষেপ?", explain: "আনুপাতিক: উৎস আটকে রাখো, কোনো সাফল্য নেই প্রমাণ করো, account পথ শক্ত করো।" },
  ],
  "soc-office-shell": [
    { prompt: "মূল্যায়ন?", explain: "Parent/child অসঙ্গতি + encoding + তাৎক্ষণিক network call = Level 20 detection-এর লক্ষ্য আচরণ।" },
    { prompt: "ATT&CK মানচিত্র (প্রাথমিক)?", explain: "যা পর্যবেক্ষিত (PowerShell execution) তা মানচিত্র করো, যা অনুমান করা (এখনো dumping-এর প্রমাণ নেই) তা নয়।" },
  ],
  "soc-dns-tunnel": [
    { prompt: "সবচেয়ে সম্ভাব্য?", explain: "পরিমাণ + অনন্যতা + দৈর্ঘ্য + TXT — একটি alert হিসেবে Mission ধরন।" },
    { prompt: "Containment সেট?", explain: "Channel block করা, host আপস হওয়া হিসেবে ধরা, পুরো বহর জুড়ে scope খোঁজা।" },
  ],
  "soc-priv-change": [
    { prompt: "মূল্যায়ন?", explain: "Ticket-ছাড়া + privileged group + service account + মধ্যরাত = এখনই বাড়াও, standup-এ নয়।" },
    { prompt: "আগে কোন প্রমাণ সংরক্ষণ করবে?", explain: "সংরক্ষণ করো, তারপর মুছে ফেলো (Level 18 ক্রম)।" },
  ],
  "soc-fp-update": [
    { prompt: "সঠিক নিষ্পত্তি?", explain: "FP পরিচালনা একটি দক্ষতা: প্রেক্ষাপট যাচাই করো, প্রমাণসহ বন্ধ করো, detection অন্ধ না করে সাজাও।" },
  ],
};

export const DIAGNOSTIC_BN: QuizBn = {
  q: [
    "একজন অপরিচিত তোমার email পড়ে, কারণ তোমার password একটি ফাঁস হওয়া তালিকায় ছিল। CIA-র কোন পা ব্যর্থ হয়েছে?",
    "MFA একটি password-এর বাইরে কী যোগ করে?",
    "তোমার PC অনেক tab খোলা থাকলে 'memory শেষ' হয়ে ধীর হয়ে যায়। OS সম্ভবত যা করছে:",
    "UEFI Secure Boot যা রক্ষা করে:",
    "192.168.1.25 হলো:",
    "কোন port জোড় সঠিক?",
    "ls -l-এ, -rwxr-x--- মানে group যা করতে পারে:",
    "sudo বিদ্যমান, যাতে তুমি:",
    "এখানকার বেশিরভাগ ভাষায়, একটি 'function' হলো:",
    "JSON হলো:",
    "HTTPS HTTP থেকে প্রধানত আলাদা যেভাবে:",
    "একটি cookie-র উদ্দেশ্য সাধারণত:",
  ],
  why: [
    "অননুমোদিত পড়া = confidentiality।",
    "তুমি যা জানো তার পাশাপাশি তোমার কাছে আছে/তুমি যা।",
    "Virtual memory disk-এ ছিটকে পড়ে; disk RAM-এর চেয়ে অনেক ধীর।",
    "এটি OS-এর আগে যা load হয় তা প্রমাণিত করে।",
    "192.168.0.0/16 হলো private জায়গা, router-এ NAT করা।",
    "22 SSH, 443 HTTPS, 53 DNS, 3389 RDP।",
    "মাঝের ত্রয়ী r-x = পড়া + চালানো, লেখা নয়।",
    "Least privilege + audit পথ।",
    "কাঠামোগত program-এর মূল একক।",
    "Data বিন্যাস — তুমি তা Python-এ বিশ্লেষণ করবে, আর প্রতিটি API-তে তা পাবে।",
    "সংযোগের জন্য গোপনীয়তা আর পরিচয়।",
    "HTTP ভুলে যায়; cookie মনে রাখে।",
  ],
};
