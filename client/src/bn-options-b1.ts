// Bangla answer options — Levels 12–15 lesson quizzes + practicals.
const ML = "এটি একটি marketing label যার এই পাঠে পরীক্ষাযোগ্য কোনো অর্থ নেই।";
const RP = "এটি পাঠের worked example-এর বদলি — শব্দটি জানলেই অনুশীলন অপ্রয়োজনীয় হয়ে যায়।";
const OPP = "এটি ঠিক উল্টোভাবে সংজ্ঞায়িত: পাঠের terminology box উল্টোটা বলে।";

export const QUIZ_OPTIONS_B1: Record<string, (string | undefined)[][]> = {
  "l12-reading-cve": [
    ["Exploitation শুরু হলে", "Record প্রকাশিত হলে — exploitation তার আগে বা কখনোই হতে পারে", "Patch বের হলে", "CISA KEV-তে যোগ করলে"],
    ["কোনো patch লাগে না", "Exploit করতে কোনো privilege লাগে না", "কোনো সম্ভাবনা নেই", "শুধু private network"],
    ["প্রভাবের বিবরণ", "আসল-জগতের data থেকে exploitation-সম্ভাবনার একটি অনুমান", "আক্রান্ত version", "Fix"],
  ],
  "l12-discovery": [
    ["সঙ্গে সঙ্গে Critical report করো", "Install করা package/changelog যাচাই করো — distribution banner version না বদলে fix backport করে", "নিশ্চিত হতে exploit করো", "ফলাফল মুছে ফেলো"],
    ["সবচেয়ে জোরে scan চালানো", "একটি asset inventory — যা আছে জানাই না থাকলে তা মূল্যায়ন করা যায় না", "একটি scanner licence কেনা", "Port 0"],
    ["এটি ধীর", "এটি তোমার নিজের host-only network — অন্য কিছু scan করতে তোমার হাতে নেই এমন লিখিত অনুমোদন লাগে", "Nmap অন্যদের প্রত্যাখ্যান করে", "এতে কোনো firewall নেই"],
  ],
  "l12-cvss-scoring": [
    ["9.8 আগে, সবসময়", "7.5 আগে: নিশ্চিত exploitation + নিশ্চিত exposure তাত্ত্বিক severity-কে হারায়", "বর্ণানুক্রমিক", "কোনোটিই নয়"],
    ["তোমার প্রতিষ্ঠানের ঝুঁকি", "Standard অনুমানে vulnerability-টির নিজের severity", "কতজন hacker এটি জানে", "Vendor-এর সততা"],
    ["এটি খারাপ শোনায়", "আগে কোনো account বা access লাগে না — পৌঁছাতে পারা যে কেউ exploitation চেষ্টা করতে পারে", "এটি প্রভাব বদলায়", "এটি একটি typo"],
  ],
  "l12-cwe-cpe": [
    ["কিছুই নয় — CVE বন্ধ", "CWE-89 শ্রেণি: শুধু report করাটি নয়, প্রতিটি query parameterize করো", "Table-এর নাম বদলানো", "একটি CPE update"],
    ["আক্রান্ত — একই product", "এই record-এ আক্রান্ত নয়: version মিলানো exact; vendor advisory দিয়ে নিশ্চিত করো, তারপর প্রমাণসহ বন্ধ করো", "চিরদিন আক্রান্ত", "অজানা — চোখ বন্ধ করে patch করো"],
    ["একটি network misconfiguration", "একটি stack-based buffer overflow — Level 4 C শ্রেণির bug", "একটি দুর্বল password", "একটি XSS"],
  ],
  "l12-validation-fp": [
    ["Critical, নিশ্চিত", "একটি false positive — changelog line প্রমাণ হিসেবে দিয়ে বন্ধ করো", "Medium", "চিরদিন প্রতি মাসে পুনরায় খোলো"],
    ["Vendor advisory পড়া", "Configuration পর্যালোচনা", "Production system বা তৃতীয় পক্ষের site exploit করে প্রমাণ করা", "তোমার নিজের lab-এ পুনরুৎপাদন"],
    ["Scanner-এ একটি লাল রঙ", "প্রমাণ: যাচাইকৃত version/config, নামকৃত asset-এ exposure, আর একটি বলা fix", "শুধু একটি CVE নম্বর", "30 দিন খোলা আছে"],
  ],
  "l12-asset-criticality": [
    ["(a) আগে — আগে পাওয়া গেছে", "(b) অনেক আগেভাগে: exposure আর criticality severity-কে গুণ করে ঝুঁকিতে বদলায়", "সমান — একই CVE", "কোনোটিই patch লাগে না"],
    ["Asset-এর ক্রয়মূল্য", "রাখা data, reachability, আর এটি ব্যর্থ হলে কোন ব্যবসায়িক কাজ থামে", "এর hostname", "Scanner-এর রঙ"],
    ["CVSS score", "যেকোনো একক compromise-এর blast radius", "Disk ব্যবহার", "EPSS"],
  ],
  "l12-patch-management": [
    ["মাসিক window-এর জন্য অপেক্ষা করো", "Ring-0: emergency পথ — এক node-এ pilot, ত্বরিত window, rollback তৈরি; KEV বাস্তবতা calendar-কে অতিক্রম করে", "সব একসাথে patch করো", "উপেক্ষা করো — scanner noise"],
    ["দক্ষ", "কাগজপত্র পরা একটি স্থায়ী গর্ত — exception-এর মেয়াদ শেষ হয়ে আবার triage-তে ঢোকে, নইলে তারা estate-এর সবচেয়ে নীরব vulnerability হয়ে যায়", "একটি সুবিধা", "Compliance"],
    ["জিনিস ধীর করা", "একটি খারাপ patch-কে পাঁচ হাজারের বদলে পাঁচটি machine-এ ব্যর্থ হতে দেওয়া — blast radius একটি নকশা পছন্দ", "Network test করা", "Auditor-দের খুশি করা"],
  ],
  "l12-remediation-workflow": [
    ["বন্ধ — চেষ্টা করা হয়েছে", "আবার in_remediation-তে; loop ঠিক এই জন্যই আছে", "ঝুঁকি স্বয়ংক্রিয়ভাবে গৃহীত", "মোছা হয়েছে"],
    ["দক্ষ", "গ্রহণ নয় — এটি নীরব অবহেলা; tracker এটিকে উপস্থাপনই করতে পারে না", "একটি compensating control", "একটি patch"],
    ["Manager-দের বৃত্ত পছন্দ", "Asset, software আর threat ক্রমাগত বদলায় — গত মাসের পরিষ্কার estate এই মাসের নতুন surface", "Scanner সস্তা", "Compliance বলে"],
  ],
  "l12-remediation-verification": [
    ["বন্ধ — ticket জেতে", "আবার remediating-এ: যাচাইয়ের প্রমাণ ticket-এর দাবিকে অতিক্রম করে, আর reopen লেখা হয় (এটি reopen rate জোগায়)", "Legal-এ escalate করো", "Rescan মোছো"],
    ["অনেক বেশি scanner", "যাচাই ছাড়া বন্ধ — SLA চাপে lifecycle-এর verifying ধাপ বাদ যাচ্ছে", "খুব কম finding", "ভালো detection"],
    ["শৈলী", "প্রতিটি verification rescan একটি discovery pass-ও: ঠিক করা asset drift করে, নতুন asset আসে, আর গতকালের বন্ধ আজকের শুরুর অবস্থা", "Auditor-দের বৃত্ত পছন্দ", "Software update"],
  ],
  "l12-reporting": [
    ["একটি logo", "হুবহু asset, প্রমাণ, আর নির্দিষ্ট fix + retest পদ্ধতি", "একটি CVSS score", "রঙ coding"],
    ["প্রতিটি packet বিবরণ", "ব্যবসায়িক ঝুঁকি আর দরকার নির্দিষ্ট সিদ্ধান্ত, মালিক আর তারিখসহ", "Scanner-এর marketing দাবি", "কিছুই নয় — engineer-রা পড়ে"],
    ["শৈলী", "'Published', 'KEV-added' আর 'first seen here' ভিন্ন তথ্য; মেশালে timeline আর জরুরিত্ব নষ্ট হয়", "তারিখ ঐচ্ছিক", "Report-এ কোনো তারিখ নেই"],
  ],
  "l13-scope-roe": [
    ["দ্রুত test করো — এটি linked", "সীমানায় থামো: পর্যবেক্ষণ নথিভুক্ত করো, client-কে জানাও, আর শুধু scope লিখিতভাবে সংশোধিত হলেই এগোও", "Read-only test করো", "সম্পূর্ণ উপেক্ষা করো"],
    ["রাতে trigger করো", "প্রমাণ-ভিত্তিক: code/config review পাশাপাশি তোমার নিজের কপিতে lab পুনরুৎপাদন, সীমাবদ্ধতা উল্লেখ করে report করা", "Finding বাদ দাও", "এক বন্ধুকে trigger করতে বলো"],
    ["যেকোনো কর্মী", "প্রশিক্ষণার্থী যিনি পরামর্শ দিয়েছেন", "System মালিক / সেসব system-এর উপর কর্তৃত্বসম্পন্ন একজন কর্মকর্তা, লিখিতভাবে", "Pentester"],
  ],
  "l13-asset-inventory": [
    ["দক্ষ", "পদ্ধতির বাইরে: range scope সংজ্ঞায়িত করে, কিন্তু আবিষ্কৃত asset-এর RoE আচরণই নিয়ন্ত্রণ করে — এটি flag করো, লিখিত স্পষ্টীকরণ নাও, তারপর এগোও", "আবশ্যক", "চিরদিন নিষিদ্ধ"],
    ["Scope থেকে মোছা", "'তালিকাভুক্ত, সাড়া দিচ্ছে না' সম্ভাবনাসহ (বন্ধ, filtered, decommissioned) — নীরবতা লেখার মতো একটি অবস্থা, মোছার মতো host নয়", "Compromised", "Scope-এর বাইরে"],
    ["কিছুই নয়", "ক্রম আর যত্ন: critical system মৃদু কৌশল, সংকীর্ণ window আর দ্রুত notification পথ পায় — মানচিত্র বহন নির্দেশ বহন করে", "শুধু দাম", "রঙ"],
  ],
  "l13-recon": [
    ["আগে পূর্ণ exploit scan", "Passive পর্যবেক্ষণ, তারপর scoped সক্রিয় enumeration, প্রতিটি ধাপ প্রমাণ হিসেবে logged", "এলোমেলো probing", "Target-এর ব্যবহারকারীদের জিজ্ঞেস করো"],
    ["একটি নিশ্চিত finding", "একটি lead: fingerprinting ইঙ্গিত দেয়; যাচাই (Level 12) সিদ্ধান্ত নেয়", "Scope-এর বাইরে", "সংজ্ঞা অনুযায়ী false positive"],
    ["আক্রমণ করো — এটি range-এ আছে", "একে মানচিত্রে যোগ করো, client-কে unlisted in-scope asset হিসেবে flag করো, আর শুধু RoE-র আবিষ্কৃত asset আচরণের ভেতরে এগোও", "উপেক্ষা করো", "তুলনার জন্য পুরো internet scan করো"],
  ],
  "l13-enumeration": [
    ["জোরে tool ব্যবহার করে", "প্রতিটি জানা service-কে তার বিষয়বস্তু আর anonymous প্রস্তাবের জন্য জিজ্ঞাসাবাদ করে, host খোঁজার বদলে", "Documentation বাদ দেয়", "এটি ঐচ্ছিক"],
    ["Scope-এর বাইরে — robots গোপন", "তোমার নিজের scoped app-এর ভেতরে একটি lead: lab-এ ভিজিট করো, এটি যা উন্মুক্ত করে নথিভুক্ত করো, আর information-disclosure pattern report করো", "প্রকাশ করো", "একটি নিশ্চিত breach"],
    ["'Free data!'", "Service, path, anonymous access নিশ্চিত, আসল data copy না করে দেখা content শ্রেণি, আর গভীর ধাপের আগে RoE check", "কিছুই নয় — enumeration নীরব", "Share-এর বিষয়বস্তু হুবহু"],
  ],
  "l13-vuln-validation": [
    ["নীরবে ফেলা হয়েছে", "সীমাবদ্ধতা উল্লেখসহ corroborated/unverified হিসেবে report করা — client lead আর তার grade সম্পর্কে সততা দুটোই পাওয়ার যোগ্য", "Confirmed-এ উন্নীত", "রাতে যেভাবেই হোক test করা"],
    ["একটি নিশ্চিত grade", "একটি শুরুর সন্দেহ — grade আসে তোমার প্রমাণ ধাপ থেকে, tool-এর বিশেষণ থেকে নয়", "কিছুই নয়", "একটি ছাড়"],
    ["Bulk", "Retest আর বিরোধ সেগুলো আবার হাঁটে: একটি finding-এর grade মাস পরেও অন্য কেউ পুনঃderive করতে পারতে হবে", "ঐতিহ্য", "Client দুইবার জিজ্ঞেস করেছে"],
  ],
  "l13-exploitation": [
    ["যেকোনো মূল্যে সর্বোচ্চ access", "Client কাজ করতে পারে এমন ন্যূনতম-গভীরতার প্রভাব প্রমাণ, RoE-র ভেতরে", "Social media-র জন্য একটি root shell screenshot", "চিরদিন অশনাক্ত থাকা"],
    ["এগোও — YOLO", "আগে snapshot (অথবা disposable VM আবার বানাও): revert point ছাড়া exploitation-ই lab-কে outage বানায়", "Exploitation চিরদিন বাদ দাও", "বদলি হিসেবে host-এ test করো"],
    ["সব পড়ো — এটি একটি lab", "থামো, stop condition trigger হয়েছে ধরে নাও: এটি ভুলভাবে বসানো আসল data হতে পারে — ন্যূনতম নথিভুক্ত করো আর চালিয়ে যাওয়ার আগে স্পষ্ট করো", "প্রমাণ হিসেবে copy করো", "মুছে ফেলো"],
  ],
  "l13-post-exploitation": [
    ["Exploit কত cool ছিল", "Asset criticality: পৌঁছানো যায় এমন data, আক্রান্ত কাজ, আর এই access আর কোথায় নিয়ে যায় (blast radius)", "Tester-এর ঘণ্টার হার", "CVE সংখ্যা"],
    ["তুমি শেষ মনে করো", "তৈরি প্রতিটি account/file/config বদল revert করা হয় আর cleanup log + evidence hash engagement record-এর সঙ্গে file করা হয়", "VM মোছা হয়", "Client জিজ্ঞেস করা থামায়"],
    ["ব্যক্তিগত USB-তে রাখা", "Hashed, timestamped, আর engagement evidence folder-এ রাখা, access engagement-এ সীমিত", "সঙ্গে সঙ্গে একটি write-up-এ post করা", "Demo-র পর মোছা"],
  ],
  "l13-workflow-14": [
    ["Exploitation নাটকীয়ভাবে improvisation করা", "কোনো exploit চলার আগে প্রতিটি finding একটি পূর্ব-সম্মত ন্যূনতম প্রমাণ লক্ষ্য পায় — surprise আর scope creep নকশা থেকে বাদ", "Report নিজে নিজে লেখা হয়", "Tool-এর বিল করা যায়"],
    ["কিছুই নয় — tester বিশ্বস্ত", "Test দিয়ে তৈরি একটি আসল security গর্ত: একটি unmanaged account tester-এর বিরুদ্ধে একটি finding, আর একটি দায়", "Free marketing", "দ্রুত retest"],
    ["ঐতিহ্য", "অনুমোদন, নিয়ম আর inventory-ই সংজ্ঞায়িত করে পরের প্রতিটি ধাপে 'অনুমোদিত' আর 'in scope' মানে কী", "Scanner ধীরে গরম হয়", "Client meeting পছন্দ করে"],
  ],
  "l13-impact-assessment": [
    ["প্রমাণ হিসেবে 100 record download করো", "একটি seeded/lab record (অথবা RoE যতটা অনুমোদন করে ততটুকু) পড়ো, screenshot, থামো — reachability প্রমাণিত; bulk আসল data প্রমাণ নয়, ক্ষতি", "সব পড়ে মুছে ফেলো", "প্রমাণ সম্পূর্ণ বাদ দাও"],
    ["দৈর্ঘ্য", "পাঠক তথ্য থেকে যুক্তি আলাদা করতে পারে না — প্রতিটি impact line হয় DEMONSTRATED (artifact-সহ) নয় POTENTIAL (যুক্তিসহ), কখনো মেশানো নয়", "সুর", "CVSS অনুপস্থিত"],
    ["Standard", "RoE স্পষ্টভাবে অনুমোদন না করলে নিষিদ্ধ — আর তখন cleanup-এ সরানো হয়, সরানো প্রমাণসহ", "আবশ্যক", "Weekend-এ ঠিক আছে"],
  ],
  "l13-report-template": [
    ["এখনো একটি finding", "একটি মতামত — request/response বা config প্রমাণ যুক্ত না হওয়া পর্যন্ত template একে severity দিতে অস্বীকার করে", "একটি Low", "Marketing"],
    ["ব্যবসায়িক ঝুঁকি", "কাঁচা exploit payload আর credential — এটি সিদ্ধান্ত-গ্রহণকারীদের জন্য লেখা আর technical annex-এর চেয়ে দূর যায়", "দরকার সিদ্ধান্ত", "তারিখ"],
    ["Report-এ padding লাগে", "Fix-ও দাবি — appendix লেখে কোনগুলো যাচাই হয়েছে, কখন, কীভাবে", "Client Word file দাবি করে", "Tool এটি export করে"],
  ],
  "l13-evidence-cleanup-retest": [
    ["মেনে নাও", "যাচাই করো: আসল check আবার চালাও আর তাজা প্রমাণ লেখো — বন্ধ প্রদর্শিত হয়, ঘোষিত নয়", "তাহলে সব finding বন্ধ করো", "বাড়তি চার্জ করো"],
    ["নীরবে রেখে দাও", "হুবহু path আর কারণসহ client-কে escalate করো, আর report-এর cleanup অংশে লেখো — অপ্রকাশিত অবশেষই ব্যর্থতা, অবশেষটি নিজে নয়", "নিজে server reimage করো", "নাম বদলাও"],
    ["পুরো engagement আবার", "Finding-গুলো + তাদের কাছের প্রতিবেশী (regression), retest-এর RoE যা বলে", "যা দ্রুত", "নতুন target"],
  ],
  "l14-domains-dcs": [
    ["ব্যবহারকারী", "Replication: directory-র সত্য বণ্টিত, আর replication ভাঙা মানে সেরে ওঠা পর্যন্ত DC-গুলো ভিন্ন বাস্তবতা ধরে", "OU", "শুধু DNS"],
    ["পরিচ্ছন্নতা", "তারা policy আর delegation-এর লক্ষ্য ব্যবস্থা: যে কাঠামো একটি hardening GPO প্রয়োগ করে সেই কাঠামোই একটি helpdesk-কে ঠিক একটি জনগোষ্ঠীর উপর reset অধিকার দিতে পারে", "Microsoft ঐতিহ্য", "Licensing"],
    ["গতি", "Directory-র দ্বিতীয় কপি নেই: DC হারানো মানে directory হারানো — দ্বিতীয় DC একটি availability control, বিলাসিতা নয়", "খরচ", "কিছুই না"],
  ],
  "l14-ad-architecture": [
    ["Domain", "Forest — একটি forest-এর ভেতরের domain নকশা অনুযায়ী একে অপরকে বিশ্বাস করে", "OU", "Site"],
    ["Company network, সাবধানে", "Evaluation licence-সহ host-only network-এ বিচ্ছিন্ন VM — পূর্ণ কাজ, শূন্য production ঝুঁকি", "আসল ব্যবহারকারীসহ একটি free cloud tenant", "Hardware ছাড়া অসম্ভব"],
    ["Printer-গুলো", "Credential database (NTDS.dit) আর প্রতিটি account-এর authentication-এর চাবি", "Wallpaper", "শুধু DHCP lease"],
  ],
  "l14-kerberos": [
    ["তোমার password পায়", "এর service account-এর জন্য encrypted একটি service ticket পায় — তোমার password কখনো এর কাছে যায় না", "Password-এর জন্য তোমার PC-কে ডাকে", "তোমার username বিশ্বাস করে"],
    ["এটি পুরোনো", "এর service ticket সেই password থেকে derived key দিয়ে encrypted — captured ticket offline আক্রমণ করা যায় (Kerberoasting pattern)", "এটি LDAP ব্যবহার করে", "এর কোনো mailbox নেই"],
    ["Printing", "Network path-এ credential relay আর directory traffic-এ হস্তক্ষেপ", "ধীর query", "Ticket মেয়াদ"],
  ],
  "l14-dns-integration": [
    ["Public resolver ধীর", "Public resolver private domain-এর জন্য _ldap SRV query-র উত্তর দিতে পারে না — cache/route ভুল জায়গায় পড়লেই DC আবিষ্কার ব্যর্থ হয়", "Kerberos গতি ঘৃণা করে", "Cable-এর মান"],
    ["সাজসজ্জা", "Client আর service এখনো একটি মৃত (বা আরও খারাপ, পুনব্যবহৃত) host-এর দিকে নির্দেশিত হচ্ছে — stale পরিচয় record বিশ্বাস ভুল পথে নেয় আর logon ভাঙে", "Licence অপচয়", "কিছুই নয়"],
    ["Update ঘন ঘন হয়", "তারা প্রমাণীকরণ করে কে DNS record লিখতে পারে — unauthenticated update একটি rogue host-কে নিজেকে service হিসেবে register করতে দেয়", "গতি", "তারা নতুন"],
  ],
  "l14-group-policy": [
    ["Windows পুনরায় install করো", "Link আর inheritance: GPO সঠিক OU-তে linked কিনা, blocked, filtered, নাকি কাছের GPO দিয়ে overridden?", "শুধু DNS-কে দোষ দাও", "সব GPO মোছো"],
    ["GPO সুন্দর", "একটি সম্পাদিত GPO তার scope-এর প্রতিটি machine-এ code/setting ঠেলতে পারে — configuration leverage দুদিকেই কাটে", "GPO-তে শুধু password থাকে", "তারা করে না"],
    ["Domain-এরটি — জ্যেষ্ঠতা জেতে", "কাছের (পরে-processed) GPO, যদি না domain GPO Enforced হয় বা inheritance blocked হয় — precedence অনুমান নয়, audit করার মতো একটি শৃঙ্খল", "কোনোটিই না", "বর্ণানুক্রমে প্রথমটি"],
  ],
  "l14-enterprise-permissions": [
    ["Helpdesk অবিশ্বস্ত", "Admins OU-তে object নিয়ন্ত্রণকারী admin-দের account নিয়ন্ত্রণ করে — একটি helpdesk compromise এক ধাপে domain compromise হয়ে যায়", "এটি অগোছালো", "এটি logon ধীর করে"],
    ["বিশ্বাস", "প্রতি OU-তে effective অধিকার তালিকা করা আর test করা যে helpdesk অর্পিত কাজটি করতে পারে আর সংলগ্ন কিছুই নয় (Admins OU ছুঁতে পারে না, GPO সম্পাদনা করতে পারে না)", "শুধু একটি signed form", "জ্যেষ্ঠতা"],
    ["স্বাভাবিক", "একটি স্থায়ী escalation পথ: এটি GPO-র permission আবার লিখতে পারে, তারপর এর বিষয়বস্তু, তারপর GPO ছোঁয়া প্রতিটি machine", "একটি backup অধিকার", "Read-only"],
  ],
  "l14-ad-attacks-defenses": [
    ["সব service ticket block করা", "লম্বা এলোমেলো password বা gMSA-সহ service account (ticket বাস্তবে uncrackable হয়ে যায়) + শুধু AES + bulk ticket request-এ alert", "SPN-এর নাম বদলানো", "Kerberos নিষ্ক্রিয় করা"],
    ["একটি গোছানো lab", "একজন admin connect করলে তাদের reusable TGT সেই server-এ নামে — server compromise admin-কে compromise করতে পারে: constrained delegation দিয়ে বদলাও", "দ্রুত logon", "একটি printing feature"],
    ["Kerberos ব্যবহার করো", "DNS ব্যর্থ হলে broadcast নাম query আর উত্তর বিশ্বাস — দুটি protocol-ই নিষ্ক্রিয় করো আর বদলে SMB signing জোর করো", "Printer রাখো", "LDAP ব্যবহার করো"],
  ],
  "l14-enterprise-hardening": [
    ["কিছুই নয় — admin সতর্ক", "Tiering/PAW: Tier-0 credential এখন সবচেয়ে ঝুঁকিপূর্ণ app-এর (mail/browser) পাশে memory-তে বসে; একটি phish পুরো forest-এর মালিক হতে পারে", "LAPS", "Kerberos"],
    ["এটি disk encrypt করে", "প্রতিটি machine-এর local admin password অনন্য — একটি machine থেকে চুরি hash আর কোথাও authenticate করে না", "এটি local admin নিষ্ক্রিয় করে", "এটি SMB patch করে"],
    ["IT-র সবাই", "একটি ক্ষুদ্র, নামকৃত তালিকা, PAW দিয়ে ব্যবহৃত, membership বদলে alert-সহ", "খালি থাকা আবশ্যক", "Service account অন্তর্ভুক্ত"],
  ],
  "l14-tiered-admin": [
    ["Printer নিষিদ্ধ", "Logon-টি একটি Tier 2 host-এ Tier 0 credential উপাদান জমা করেছে — সেখানকার যেকোনো malware এখন domain-এর চাবির মালিক", "এটি সময় নষ্ট করে", "Policy font"],
    ["Admin email অপছন্দ করে", "Admin workstation যেসব content শ্রেণি সাধারণ machine compromise করে তা গ্রহণ করবে না — এর compromise-ই tier-এর compromise", "Licensing", "গতি"],
    ["সাক্ষাৎকার", "Tier matrix-এর বিরুদ্ধে logon event audit করা — উপরের checker-টিই audit-এর আকৃতি", "অনুমান", "DC দেখা"],
  ],
  "l14-identity-monitoring-dns": [
    ["স্বাভাবিক sync", "Critical: replication অধিকার DC-দের; একটি workstation জিজ্ঞেস করা DCSync আকৃতি — সঙ্গে সঙ্গে তদন্ত করো", "একটি DNS error", "Patch Tuesday"],
    ["কিছুই নয় — DNS networking", "Client ভুল machine-কে authenticate করে বিশ্বাস করতে পারে — identity service-এর DNS record identity system-এর অংশ", "সাজসজ্জা", "পরের বছর ঠিক করো"],
    ["আবহাওয়া", "একটি change ticket/অনুমোদন — মেলানো যায়নি এমন যোগ একটি incident, ব্যাখ্যা না হওয়া পর্যন্ত", "ব্যবহারকারীর জ্যেষ্ঠতা", "কিছুই নয়"],
  ],
  "l15-cloud-models": [
    ["SaaS অনিরাপদ", "Model দায়িত্ব সরিয়েছে, মোছেনি: পরিচয়, MFA, sharing configuration আর data governance তোমারই থাকে — বেশিরভাগ SaaS breach tenant misconfiguration", "Provider মিথ্যে বলে", "SaaS পুরোনো"],
    ["Provider", "তুমি — provider hypervisor আর hardware patch করে; OS থেকে উপরের সব tenant-এর stack", "কেউ নয়", "Region"],
    ["এটি সুন্দর", "একটি control-plane পরিচয় বা key পুরো estate তৈরি, copy বা মুছতে পারে — data plane ঠিক এই সিদ্ধান্ত দিয়েই পাহারা পায়", "এটি ধীর", "এটি free"],
  ],
  "l15-shared-responsibility": [
    ["Provider-এর — SaaS মানে তারা সব secure করে", "তোমার: sharing setting আর data প্রতিটি model-এই সবসময় customer-মালিকানাধীন", "কারো নয়", "Browser-এর"],
    ["তোমার সব দায়িত্ব সরানো", "OS/runtime patching provider-এর কাছে সরানো; তোমার code, config, secret আর data দায়িত্ব থাকে", "Logging provider-এর কাজ করা", "Shared responsibility মোছা"],
    ["Hypervisor escape", "Customer misconfiguration আর পরিচয় ব্যর্থতা", "সমুদ্রতলের cable কাটা", "Provider insider আক্রমণ"],
  ],
  "l15-cloud-iam": [
    ["ছোট team-এ স্বাভাবিক", "একটি শীর্ষ finding: তখন একটি phished password পুরো account estate-এর মালিক — scoped role + MFA + দুর্লভ admin কাজের জন্য elevation ব্যবহার করো", "Billing-এর জন্য দরকার", "Password লম্বা হলে ঠিক আছে"],
    ["Code repo-তে একটি দীর্ঘস্থায়ী access key", "অস্থায়ী, স্বয়ংক্রিয়-ঘূর্ণায়মান credential আর scoped permission-সহ একটি workload identity/role", "Admin-এর ব্যক্তিগত key", "কোনো credential নয়"],
    ["এটি দ্রুত করো", "একটি scoped read-কে প্রতিটি bucket-এর read-এ বদলে দেওয়া — least privilege-এর Resource অর্ধেক Action-এর মতোই গুরুত্বপূর্ণ", "এটি encrypt করো", "MFA জোর করো"],
  ],
  "l15-storage-secrets": [
    ["নিরাপদ", "উন্মুক্ত: history আর clone এটি রাখে — আগে rotate/revoke, পরে scrub", "Repo এখন private হলে নিরাপদ", "একটি force-push-এর পর ঠিক আছে"],
    ["তারা bucket encrypt করে", "তখন একটি ভুল bucket policy data উন্মুক্ত করতে পারে না — ব্যক্তিগত setting-এর উপরে একটি guardrail", "তারা IAM-এর বদলি", "সর্বত্র আইনত আবশ্যক"],
    ["Image-এ hard-code করো", "Workload-এর পরিচয় ব্যবহার করে startup-এ secrets manager থেকে আনো; code পুনরায় deploy না করে rotate করো", "Team-কে email করো", "Database-এর পাশে রাখো"],
  ],
  "l15-misconfig-detection": [
    ["কিছুই নয় — log backfill হয়", "যে event গুরুত্বপূর্ণ ছিল তা কখনো record-ই হয়নি; logging incident-এর আগে থাকতে হয়, backup-এর মতো", "Storage খরচ", "Time zone"],
    ["একটি tag নাম বদল", "Storage public হওয়া, একটি IAM admin grant, অথবা audit logging নিষ্ক্রিয় হওয়া", "একটি নতুন dashboard", "একটি ছোট instance"],
    ["এটি সব খোঁজে", "এটি rule-এর বিরুদ্ধে configuration diff করে — এটি ব্যবসায়িক প্রয়োজন বিচার করতে পারে না, আর এর পরিষ্কার ফলাফল security-র প্রমাণ নয়", "এটি logging-এর বদলি", "এটি অবৈধ"],
  ],
  "l15-docker-security": [
    ["চলে গেছে", "এখনো image-এ: layer যোগমূলক ইতিহাস — image যার কাছে আছে সে শুরুর layer বের করতে পারে; secret ছাড়া আবার বানাও আর rotate করো", "Encrypted", "Compress হয়ে গেছে"],
    ["Socket দ্রুত", "Daemon root হিসেবে চলে আর socket মান্য করে: socket-সহ একটি container পুরো host filesystem mount করা একটি privileged container শুরু করতে পারে", "এটি একটি বড় file", "ঐতিহ্য"],
    ["Root মেনে নেওয়া", "Host port একটি high container port-এ ম্যাপ করা, অথবা শুধু CAP_NET_BIND_SERVICE দেওয়া — প্রয়োজন একটি capability, পুরো মুকুট নয়", "Privileged mode", "একটি বড় image"],
  ],
  "l15-containers-k8s": [
    ["Image encrypted", "Pull access যার আছে সে প্রতিটি layer বের করতে পারে — আর পরের layer-এ file মোছা ইতিহাস থেকে তা সরায় না", "শুধু builder চালাতে পারে", "এর মেয়াদ শেষ হয়"],
    ["এটি ধীর", "তখন একটি container escape বা app ত্রুটি root থেকে শুরু হয়; non-root user একটি breakout যা পায় তা সংকুচিত করে", "Root log লিখতে পারে না", "এটি networking ভাঙে"],
    ["সুবিধাজনক", "একটি পরিচিত breach pattern: dashboard-এর token যেকোনো জায়গা থেকে cluster admin হয়ে যায় — internal রাখো, SSO-gated, RBAC-scoped", "Kubernetes-এর দরকার", "লম্বা URL-এর আড়ালে ঠিক আছে"],
  ],
  "l15-kubernetes-security": [
    ["একটি debugging সাহায্য", "একটি workload-এর ভেতরে বসবাসকারী স্থায়ী cluster-takeover পথ — binding সরাও, scoped role আর audit log দিয়ে debug করো", "kubectl-এর দরকার", "শুধু dev-এ নিরীহ"],
    ["ভাগ করা config", "Pod host file পড়তে/লিখতে পারে — এই workload-এর জন্য container সীমানা সাজসজ্জা", "দ্রুত I/O", "একটি backup"],
    ["একটি firewall", "IaC gate: workload গৃহীত হওয়ার আগেই policy মূল্যায়িত (কোনো privileged pod নয়, কোনো :latest নয়) — দরজাতেই misconfiguration থামানো", "একটি dashboard", "Autoscaling"],
  ],
  "l15-serverless-cicd": [
    ["ঠিক আছে — function ছোট", "একটি standing-privilege finding: একটি code ত্রুটি বা চুরি trigger তখন admin চালায় — role-কে function-এর একমাত্র কাজে scope করো", "Logging-এর জন্য দরকার", "যেভাবেই হোক encrypted"],
    ["Click করা দ্রুত", "এটি deploy-এর আগেই, pull request-এ, diff প্রমাণ হিসেবে change পর্যালোচনা করে", "এর কোনো মানুষ লাগে না", "এটি সবসময় স্বয়ংক্রিয়ভাবে patch করে"],
    ["উপেক্ষা করো — build ব্যর্থ", "Token উন্মুক্ত হিসেবে ধরো: rotate করো, secret mask করতে logging ঠিক করো, আর যাচাই করো কে সেই log পড়তে পারে", "শুধু log মোছো", "Debugging-এর জন্য log ভাগ করো"],
  ],
  "l15-cloud-ir": [
    ["একটি near miss — কিছুই বদলায়নি", "আসল অননুমোদিত data access: যা পড়া হয়েছে scope করো, এটি যা unlock করে rotate করো, আর policy/আইন অনুযায়ী জানাও", "একটি provider ত্রুটি", "জানা যায় না"],
    ["Bucket মোছো", "Retention বা পরিচ্ছন্নতা মোছার আগেই audit আর access log সংরক্ষণ/export করো", "Account reboot করো", "একটি status update post করো"],
    ["শৈলী", "Window চলাকালে পড়নযোগ্য যেকোনো কিছু copy হয়েছে ধরে নিতে হবে — rotation ছাড়া বন্ধ copy হওয়া secret চালু রেখে দেয়", "Key যেভাবেই হোক সাপ্তাহিক মেয়াদোত্তীর্ণ হয়", "Provider-এর তা দরকার"],
  ],
  "l15-iac-supply-chain": [
    ["Code ভয়ংকর", "Template এটি সর্বত্র, চিরদিন পুনঃdeploy করে, হাতে ঠিক করার পরেও — template ঠিক করো নইলে পরের apply-তে ত্রুটি পুনরুত্থিত হয়", "Console নিরাপদ", "এটি খারাপ নয়"],
    ["তাজাই সেরা", "Deploy tag আজ যা নির্দেশ করে তাই গ্রহণ করে — feature হিসেবে অপর্যালোচিত বদল; digest দিয়ে pin করো", "দ্রুত pull", "কিছুই নয়"],
    ["ভাগ্য", "প্রতি artifact-এর একটি SBOM: উপাদান তালিকা প্রশ্নটিকে একটি lookup-এ বদলায়", "একটি বড় team", "Speed dial-এ vendor"],
  ],
  "l15-cloud-logging": [
    ["Storage ভরে যায়", "Workload-এর মালিক attacker প্রমাণ মোছে — পৃথকীকরণই log-কে তার বিষয়ের হাত থেকে বাঁচায়", "Region বদলায়", "কখনোই নয়"],
    ["অসম্ভব — এটি logged হতো না", "Cloud detection-এ সর্বোচ্চ-signal event: অন্ধ করার কাজটি নিজেই trail-এর delivery দিয়ে record হয় — যদি delivery আলাদা account-এ হয়", "একটি routine op", "একটি billing event"],
    ["API অনেক", "আয়তন signal চাপা দেয়: security-বদলানো set-এ alert করো, বাকিটা trend করো", "শুধু খরচ", "Vendor নিষেধ করে"],
  ],
};

export const PRACTICAL_OPTIONS_B1: Record<string, (string | undefined)[]> = {
  "l12-reading-cve": ["A আগে — CVSS বেশি", "B আগে — নিশ্চিত exploitation + নিশ্চিত exposure তাত্ত্বিক severity-কে হারায়", "কোনোটিই নয়; vendor email-এর জন্য অপেক্ষা করো", "বর্ণানুক্রমিক"],
  "l12-discovery": ["Scope-এর ভেতরের asset-এ পৌঁছানো যায় এমন প্রতিটি service, port আর account — discovery-র output তারই একটি মানচিত্র।", "একটি scan যা দেওয়া credential দিয়ে login করে patch level আর configuration পড়ে — banner অনুমানের চেয়ে অনেক নির্ভুল।", "Scan মিস করা একটি আসল vulnerability। Finding-এর অনুপস্থিতি অনুপস্থিতির প্রমাণ নয়।", ML],
  "l12-cvss-scoring": ["ত্রুটির অন্তর্নিহিত, পরিবেশ-স্বাধীন বৈশিষ্ট্য (vector, complexity, privilege, প্রভাব) — CVSS-এর একমাত্র অংশ যা বেশিরভাগ report উদ্ধৃত করে।", "একটি component exploit করলে attacker তার বাইরের resource-এ প্রভাব ফেলতে পারে কিনা (যেমন একটি VM escape)। Scope বদলালে score-এর ঊর্ধ্বসীমা বাড়ে।", "তোমার estate অনুযায়ী সামঞ্জস্য করা CVSS (asset গুরুত্ব, compensating control)। কদাচিৎ প্রকাশিত, triage-এর আসলে যা লাগে সবসময় তাই।", ML],
  "l12-cwe-cpe": [ML, "Common Platform Enumeration — একটি structured নাম যা একটি record কোন হুবহু product + version-এ প্রযোজ্য তা চিহ্নিত করে।", "অনেক CVE-র পেছনের পুনব্যবহারযোগ্য pattern। শ্রেণি ঠিক করা (যেমন সব query parameterize) আজকের নয়, ভবিষ্যতের CVE-ও অবসর দেয়।", "Common Weakness Enumeration — দুর্বলতা শ্রেণির catalogue (যেমন CWE-79 XSS, CWE-89 SQLi, CWE-121 stack overflow)। একটি CVE যে CWE ধারণ করে তা উদ্ধৃত করে।"],
  "l12-validation-fp": ["একটি lead হলো অযাচাইকৃত scanner দাবি; একটি finding হলো প্রমাণ, exposure আর fix-সহ যাচাইকৃত দাবি। Report-এ finding থাকে; lead পদোন্নতি না হওয়া পর্যন্ত তোমার notebook-এ থাকে।", "একটি report করা ত্রুটি যা আসলে উপস্থিত নয় বা এই পরিবেশে exploitable নয় (যেমন banner মেলে, patch আগেই backport করা)।", "Distribution headline version না বদলে একটি পুরোনো version branch patch করে — কেন শুধু banner version vulnerability প্রমাণ করতে পারে না।", ML],
  "l12-asset-criticality": ["একটি asset কতটা পৌঁছানো যায়: internet-facing > internal > isolated lab। Exposure severity-কে গুণ করে ঝুঁকি বানায়।", "ব্যবসা একটি asset-এর উপর কতটা নির্ভর করে: রাখা data, সেবা দেওয়া কাজ, আর compromised বা হারালে blast radius।", "একটি compromised asset থেকে ক্ষতি কতদূর ছড়ায় — ভাগ করা credential আর flat network তা বড় করে।", ML],
  "l12-patch-management": ["একটি staged rollout group (pilot → broad) যা একটি খারাপ patch-এর blast radius সীমিত করে।", "সম্মত সময় যখন বিঘ্নকারী patching হতে পারে — service মালিকের সঙ্গে সম্মত, রাত থেকে চুরি করা নয়।", "কিছু patch না করার একটি নথিভুক্ত, মেয়াদোত্তীর্ণ সিদ্ধান্ত — compensating control আর একজন মালিকসহ।", ML],
  "l12-remediation-workflow": ["আসল fix মুলতুবি থাকাকালে ঝুঁকি কমানো একটি control (যেমন WAF rule, network সীমাবদ্ধতা) — তারিখসহ আর পর্যালোচিত, default-এ কখনো স্থায়ী নয়।", "একজন নামকৃত মালিক একটি বলা তারিখ পর্যন্ত আনুষ্ঠানিকভাবে একটি ঝুঁকি গ্রহণ করে। মেয়াদ শেষে finding আবার খোলে — গ্রহণ একটি ঋণ, ক্ষমা নয়।", "Remediation-এর পর যাচাই আবার চালিয়ে ত্রুটি চলে গেছে প্রমাণ করা (বা ধরা যে যায়নি) বন্ধ করার আগে।", ML],
  "l12-remediation-verification": ["ঠিক করা asset-এর বিরুদ্ধে আসল check আবার চালিয়ে বন্ধের আগে তাজা প্রমাণ যুক্ত করা।", "Severity/exposure শ্রেণি অনুযায়ী সম্মত fix ঘড়ি (যেমন KEV-exposed: দিন) — scanner-এর মেজাজ থেকে নয়, যাচাই থেকে মাপা।", "বন্ধ finding-এর যে অংশ ফিরে আসে — যে metric বন্ধ-নাটক উন্মোচন করে।", ML],
  "l12-reporting": ["ব্যবসায়িক-উচ্চতার দৃশ্য: কী ঝুঁকিতে, কোন সিদ্ধান্ত দরকার, কতদিনে — জিজ্ঞাসা লুকায় এমন jargon ছাড়া।", "একটি vulnerability-র সম্পূর্ণ, স্বয়ংসম্পূর্ণ record: asset, প্রমাণ, severity, status, fix, retest, মালিক।", ML, RP],
  "l13-scope-roe": ["In-bounds system-এর হুবহু তালিকা। নাম নেই এমন কিছুই বাইরে — ইঙ্গিত অন্তর্ভুক্তি নয়।", "সম্মত বাধা: target, কৌশল, সময়, নিষেধাজ্ঞা, যোগাযোগ। RoE-র বাইরের কাজ signed engagement-এর ভেতরেও অননুমোদিত।", "একটি পূর্ব-সম্মত trigger যা testing থামায় (যেমন আসল user data পাওয়া) client সিদ্ধান্ত না নেওয়া পর্যন্ত।", ML],
  "l13-asset-inventory": [RP, "তালিকাভুক্ত আর আবিষ্কৃত set-এর মধ্যে যেকোনো পার্থক্য — প্রতিটি delta testing এগোনোর আগে লিখিতভাবে স্পষ্ট করা হয়।", ML, "Owner আর criticality-সহ in-scope system-এর client-এর প্রামাণিক তালিকা — engagement-এর শুরুর মানচিত্র।"],
  "l13-recon": ["Banner, header, error আর file আকৃতি থেকে technology আর version চিহ্নিত করা — যাচাই করার মতো lead, কখনো রায় নয়।", "স্বাভাবিক ব্যবহারের বাইরে interaction ছাড়া পর্যবেক্ষণ থেকে শেখা: DNS record, header, প্রকাশিত doc।", "Recon deliverable: asset, service, technology, entry point — পরিকল্পনার ভিত্তি।", ML],
  "l13-enumeration": [RP, "Credential ছাড়া একটি service যা দেয় — attacker-এর শুরুর দৃশ্য, আর তোমার প্রথম enumeration প্রশ্ন।", ML, "প্রতিটি আবিষ্কৃত service যা দেয় তা পদ্ধতিগতভাবে জিজ্ঞাসা করা: share, user, export, banner, directory।"],
  "l13-vuln-validation": [ML, "Lab target-এ দাবি করা দুর্বলতা নিরাপদে পুনরায় তৈরি করা যাতে finding পর্যবেক্ষণে থাকে, scanner-এর কথায় নয়।", "একটি scanner দাবি এখনো পুনরুৎপাদিত বা corroborated নয় — tracked আর worked, কিন্তু কখনো findings table-এ ছাপা নয়।", "প্রতিটি report line-এ মুদ্রিত আত্মবিশ্বাস শ্রেণি: confirmed (পুনরুৎপাদিত), corroborated (স্বাধীন প্রমাণ একমত), বা unverified lead (finding থেকে বাদ)।"],
  "l13-exploitation": ["একটি ত্রুটি আসল আর গুরুত্বপূর্ণ তা দেখানোর ন্যূনতম প্রদর্শন — client কাজ করার জন্য যথেষ্ট, তার বেশি নয়।", "অনুশীলনের জন্য তোমার মালিকানাধীন একটি ইচ্ছাকৃতভাবে vulnerable app/system (Juice Shop-শ্রেণির app, lab VM)। এই course-এ একমাত্র বৈধ exploitation target।", ML, RP],
  "l13-post-exploitation": ["Test-এর করা প্রতিটি বদল revert করা (account, file, config) আর একটি log-এ তা প্রমাণ করা — deliverable-এর অংশ, পরে-ভাবনা নয়।", "Asset criticality ব্যবহার করে technical access-কে ব্যবসায়িক পরিণতিতে অনুবাদ: কোন data, কোন কাজ, কোন blast radius।", ML, RP],
  "l13-workflow-14": [RP, "Client finding ঠিক করার পর, tester প্রতিটি fix যাচাই করে — Level 12-র vuln lifecycle-ও দাবি করে এমন loop বন্ধ করা।", ML, "Signature থেকে retest পর্যন্ত একটি সম্পূর্ণ অনুমোদিত test — পেশাদার pentest কাজের একক।"],
  "l13-impact-assessment": ["প্রদর্শিত প্রমাণ থেকে সাদৃশ্য দিয়ে যুক্তি করা একটি প্রভাব — যুক্তি হিসেবে labelled, কখনো পর্যবেক্ষণ হিসেবে নয়।", "একটি প্রভাব যা তুমি আসলে scope-এর ভেতরে তৈরি করেছ, একটি artifact-সহ — একমাত্র ধরন যা একটি report তথ্য হিসেবে বলতে পারে।", "Write access প্রমাণ করতে তৈরি একটি নিরীহ file/record, তারপর সরানো — ক্ষতি ছাড়া প্রমাণ।", ML],
  "l13-report-template": [OPP, ML, RP, "Report-এর যে অংশ বলে testing কীভাবে করা হয়েছে (ধাপ, tool, version) যাতে ফলাফল পুনরুৎপাদনযোগ্য হয় আর তাদের সীমা দৃশ্যমান হয়।"],
  "l13-evidence-cleanup-retest": [ML, "Fix-পরবর্তী engagement: প্রতিটি finding আর তার প্রতিবেশীদের পুনঃযাচাই, প্রতিটিকে প্রমাণসহ Fixed / Partial / Not fixed হিসেবে বন্ধ করা।", "ঝুঁকি অনুযায়ী ক্রমবদ্ধ প্রতি-finding fix নির্দেশ, একজন মালিক আর একটি যাচাই পদ্ধতিসহ — একটি team চালাতে পারে এমন নির্দেশনা, প্রশংসা করার নয়।", "Engagement যা যোগ করেছে সব সরানো (account, marker, tool, config বদল) আর যাচাই করা যে target আগের অবস্থায় ফিরেছে।"],
  "l14-domains-dcs": [ML, "Directory-র একটি লেখনযোগ্য কপি ধারণকারী একটি server, logon authenticate করে আর peer DC-তে বদল replicate করে।", "Object কাঠামোবদ্ধ করা একটি container যাতে policy (GPO link) আর delegation একটি জনগোষ্ঠীর দিকে লক্ষ্য করা যায়।", "AD-র প্রশাসনিক আর security সীমানা: একটি directory database, DC-র একটি set, একটি trust অভ্যন্তর।"],
  "l14-ad-architecture": [ML, "শীর্ষ AD container আর আসল security সীমানা: একটি forest-এর domain default-এ schema আর trust ভাগ করে।", "Object গোছানো আর Group Policy প্রয়োগের জন্য একটি domain-এর ভেতরে folder-এর মতো container।", "AD database ধারণকারী আর domain-এর জন্য authentication (Kerberos/LDAP)-এর উত্তর দেওয়া একটি server।"],
  "l14-kerberos": ["তুমি KDC-তে authenticate করেছ তা প্রমাণ করা master ticket; password আবার না লিখে service ticket পেতে উপস্থাপিত হয়।", "Key Distribution Center — প্রতিটি DC-তে Kerberos service যা ticket জারি করে।", "একটি service-এর জন্য একটি ticket (যেমন CIFS/fileserver), সেই service account-এর key দিয়ে encrypted — কেন service-account password শক্তি গুরুত্বপূর্ণ।", ML],
  "l14-dns-integration": [RP, "Host/DC নিজেদের record register করে — সুবিধাজনক, আর phone book-এ একটি write পথ যা authenticate করতে হবে।", ML, "একটি DNS record যা একটি SERVICE-এর অবস্থান বিজ্ঞাপন দেয় (কোন host domain-এর জন্য LDAP/Kerberos দেয়) — AD আবিষ্কার এর উপরেই চলে।"],
  "l14-group-policy": ["OU/site/domain-এর link দিয়ে user/computer-এ প্রয়োগ করা setting-এর একটি নামকৃত bundle।", "Setting domain → OU → child OU প্রবাহিত হয়, পরে/কাছের setting জেতে যদি না blocked বা enforced হয় — নিয়মই সিদ্ধান্ত নেয় একটি machine আসলে কী পায়।", ML, RP],
  "l14-enterprise-permissions": ["একটি object-এর permission আবার লেখার অধিকার — শুধু একটি চাবি নয়, তালার মালিকানা।", "একটি object-এর উপর পূর্ণ নিয়ন্ত্রণ — সেই target-এর জন্য domain admin-এর ACL সমতুল্য।", "একটি সংকীর্ণ target-এর উপর একটি সংকীর্ণ অধিকার দেওয়া (password reset, একটি OU) যাতে standing admin ছাড়া কাজ হয়।", ML],
  "l14-ad-attacks-defenses": [ML, "একটি service-কে অন্য কোথাও একজন ব্যবহারকারীর পক্ষে কাজ করতে দেওয়া। Unconstrained = বিপজ্জনক legacy রূপ; constrained/resource-based হলো scoped বদলি।", "অনেক account-এর বিরুদ্ধে একটি সাধারণ password চেষ্টা করা — প্রতি account-এ ধীর, তাই শুধু lockout তা মিস করে; banned-password তালিকা + MFA-ই আসল উত্তর।", "SPN account-এর জন্য service ticket চেয়ে তাদের encryption offline আক্রমণ করা; শক্ত managed service password আর AES দিয়ে ভাঙা হয়।"],
  "l14-enterprise-hardening": ["Asset মূল্য অনুযায়ী admin আলাদা করা (Tier 0 পরিচয়, Tier 1 server, Tier 2 workstation) যাতে নিচের tier-এর credential কখনো উপরের tier-এ না আসে।", "Windows LAPS: প্রতি-machine অনন্য local-admin password, AD-তে রাখা আর স্বয়ংক্রিয়-ঘূর্ণায়মান — একটি machine-এর password আর কিছুই unlock করে না।", "শুধু প্রশাসনের জন্য ব্যবহৃত একটি hardened machine — কোনো email নয়, কোনো browsing নয় — যাতে Tier-0 credential কখনো দৈনন্দিন-ঝুঁকির software ছোঁয় না।", ML],
  "l14-tiered-admin": ["Tier 0 (পরিচয়/DC), Tier 1 (server), Tier 2 (workstation)-এ ভাগ করা প্রশাসন — account আর admin workstation কখনো tier অতিক্রম করে না।", "Privileged Access Workstation: একটি hardened, dedicated machine যেখান থেকে একটি tier পরিচালিত হয় — কোনো email নয়, কোনো browsing নয়।", "একটি privileged logon host-এ পুনব্যবহারযোগ্য credential উপাদান রেখে যায় — কেন একটি workstation-এ T0 logon নিজেই একটি finding।", ML],
  "l14-identity-monitoring-dns": [ML, "একটি DC থেকে password hash টানতে replication অধিকার অপব্যবহার — কেন একটি non-DC থেকে replication request একটি critical alarm।", "শক্তিশালী group-এ যোগ লেখা 4728/4732-শ্রেণির event — প্রতিটি একটি change ticket পর্যন্ত trace হতে হবে।", "Client DC locate করতে যে DNS record ব্যবহার করে — ভুল বা stale SRV data authentication নিজেকেই ভাঙে বা ভুল পথে নেয়।"],
  "l15-cloud-models": ["Infrastructure / Platform / Software as a Service — provider stack-এর কতটা চালায়, আর তাই তোমার দায়িত্ব কোথা থেকে শুরু।", "Provider-এর management layer (console, API, IAM) — cloud attacker আসলে যে surface লক্ষ্য করে।", ML, RP],
  "l15-shared-responsibility": ["একটি customer-side setting যা একটি resource উন্মুক্ত বা দুর্বল করে (public storage, অতিরিক্ত-বিস্তৃত IAM) — প্রধান cloud incident কারণ।", "Cloud provider আর customer-এর মধ্যে security দায়িত্বের নথিভুক্ত বিভাজন; বিভাজন service model অনুযায়ী সরে কিন্তু data/পরিচয় কখনো customer ছাড়ে না।", ML, RP],
  "l15-cloud-iam": ["হুবহু কাজের জন্য দরকার হুবহু action হুবহু resource-এর উপর দেওয়া — scoped Action + scoped Resource, দুটোই।", "Permission-সহ একটি পরিচয়, একজন মানুষ বা workload দিয়ে অস্থায়ীভাবে গৃহীত — কোনো স্থায়ী key নয়, স্বয়ংক্রিয় মেয়াদ।", "স্থায়ীভাবে ধরা শক্তিশালী access, ব্যবহৃত হোক বা না হোক। Just-in-time elevation যা দূর করতে আছে তাই।", ML],
  "l15-storage-secrets": [RP, "একটি dedicated service যা secret সংরক্ষণ, inject আর rotate করে যাতে তারা কখনো code বা config file-এ না থাকে।", ML, "একটি account-level guardrail যা bucket setting অতিক্রম করে storage private রাখে — configuration ভুলের জন্য seatbelt।"],
  "l15-misconfig-detection": [RP, "লিখিত প্রত্যাশিত configuration; posture tool বাস্তবতা তার বিরুদ্ধে diff করে আর drift report করে।", ML, "Provider-এর record কে account-এ কী করেছে (API call) — cloud-এর CCTV আর প্রথম forensic উৎস।"],
  "l15-docker-security": [ML, "Root-এর ক্ষমতা নামকৃত টুকরোতে ভাগ (NET_ADMIN, SYS_ADMIN…) — container সবচেয়ে কম যেগুলো কাজ করে সেগুলোই ধরবে।", "একটি image স্তরীভূত filesystem layer — যেকোনো layer-এ বেক করা secret পরের layer 'মুছে' দিলেও image-এ থেকে যায়।", "Daemon-এর control channel (/var/run/docker.sock) — এটি একটি container-এ mount করা সেই container-কে host তুলে দেয়।"],
  "l15-containers-k8s": ["API server-এর permission system: কে কোন namespace-এ কী করতে পারে। Default-open cluster এখানেই প্রথম ব্যর্থ হয়।", "প্রায়-host ক্ষমতাসহ একটি container — কার্যত host-এ root। যে setting মূলত কখনো true হতে পারে না।", "একটি container যা থেকে চলে সেই packaged filesystem + config। বেক করা যেকোনো কিছু (secret-সহ) pull করতে পারে এমন সবার কাছে যায়।", ML],
  "l15-kubernetes-security": [ML, "একটি pod-এর workload পরিচয়, RBAC permission বহনকারী — এটি অতিরিক্ত বাঁধলে cluster মাত্রায় wildcard-policy ভুলের পুনরাবৃত্তি হয়।", "Cluster API-র জন্য role-based access: subject, role, binding — orchestrator-এর ভেতরের IAM পাঠ।", "Workload-level setting (privileged, user, mount, capability) যা সিদ্ধান্ত নেয় cluster-এ একটি container-এর বেড়া আদৌ আছে কিনা।"],
  "l15-serverless-cicd": [ML, "তোমার dependency, build tool আর pipeline: যেকোনো একটি compromise করলে তারা তৈরি করা প্রতিটি artifact সন্দেহভাজন।", "একটি serverless function যে permission নিয়ে চলে — প্রতি-function আর ন্যূনতম, নইলে এটি একটি trigger-সহ standing privilege।", "Versioned file-এ ঘোষিত infrastructure — কোনো কিছু deploy হওয়ার আগে reviewable, diffable, scannable।"],
  "l15-cloud-ir": ["একটি resource উন্মুক্ত হওয়া আর উন্মুক্ততা বন্ধ হওয়ার মধ্যের ব্যবধান — যে সময়কাল scoping-কে log-এ জিজ্ঞাসাবাদ করতে হবে।", ML, RP, OPP],
  "l15-iac-supply-chain": ["Deploy-এর আগেই infrastructure template-এ misconfiguration যাচাই — misconfig পাঠ pipeline-এ বামে সরানো।", "Provider, module আর image-এর জন্য হুবহু version/digest নাম দেওয়া যাতে build পুনরুৎপাদনযোগ্য হয় আর surprise দৃশ্যমান হয়।", "Software Bill of Materials: একটি artifact-এর উপাদান তালিকা, যাতে exposure প্রশ্ন lookup হয়ে যায়।", ML],
  "l15-cloud-logging": ["আলাদা একটি account/project-এ পৌঁছে দেওয়া log যা workload credential বদলাতে বা মুছতে পারে না।", "Management API call-এর record (কে cloud নিজেকে কী করেছে) — cloud-এর security camera।", "নিজে security বদলানো ক্ষুদ্র API set (policy, key, logging, network) — পৃথকভাবে alert করা।", ML],
};
