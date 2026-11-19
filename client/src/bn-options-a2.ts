// Bangla answer options — Level 4 lesson quizzes + practicals.
export const QUIZ_OPTIONS_A2: Record<string, (string | undefined)[][]> = {
  "l4-py-first": [
    ["Python যেভাবে চায় যেকোনো ক্রমে", "উপর থেকে নিচে, একবারে একটি, file-এর ক্রমে", "সব একসাথে", "শুধু print-সহ line-গুলো"],
    ["কোনো পার্থক্য নেই", "প্রথমটি attempts শব্দটি দেখায়; দ্বিতীয়টি variable-এ রাখা VALUE দেখায়", "দ্বিতীয়টি একটি error", "প্রথমটি value দেখায়"],
    ["int — এটি দেখতে number-এর মতো", "str — quote একে text বানায়, দেখতে যেমনই হোক", "float", "bool"],
  ],
  "l4-py-variables": [
    [undefined, "'411' — string concatenation", "সবসময় একটি error", undefined],
    ["Digit লিখলেই একটি int", "সবসময় একটি string", "একটি bool", "একটি list"],
    ["লম্বা password দেখতে ভালো লাগে", "প্রতিটি যোগ করা অক্ষর guessing space গুণ করে; দৈর্ঘ্যই সবচেয়ে সস্তা শক্তি", "Symbol নিষিদ্ধ", "এটি একটি আইনি নিয়ম"],
  ],
  "l4-py-conditions": [
    ["একই জিনিস", "= বাক্সে 5 রাখে; == জিজ্ঞেস করে বাক্সে 5 আছে কিনা আর True/False উত্তর দেয়", "== মান সংরক্ষণ করে", "= একটি প্রশ্ন করে"],
    ["যেগুলো সত্য সবগুলো", "ঠিক একটি — প্রথম সত্যটি", "শেষটি", "দুটি"],
    ["attempts 3 আর IP নতুন", "attempts 5+ এবং IP পরিচিত নয় — দুই পাশই ধরা দিতে হবে", "যেকোনো পাশ ধরলেই চলে", "known_ip True"],
  ],
  "l4-py-control": [
    ["দ্বিতীয় স্বাধীন if", "'Else if' — শুধু তখনই test হয় যখন উপরের শর্তগুলো False ছিল", "একটি loop", "একটি error handler"],
    ["একটি item বাদ দেয়", "সঙ্গে সঙ্গে loop থেকে বেরিয়ে যায়", "Loop আবার শুরু করে", "Program শেষ করে"],
    ["শৈলী", "যাতে unclassified event দেখা যায় আর গণনা হয়, নীরবে হারিয়ে না যায়", "গতি", "Python-এর তা দরকার"],
  ],
  "l4-py-functions": [
    ["এটি ধীর", "Key অনুপস্থিত থাকলে crash না করে default ফেরত দেয়", "Key মুছে ফেলে", "এটি শুধু list-এ কাজ করে"],
    [undefined, "একটি খালি string", undefined, "এর parameter-গুলো"],
    ["এটি পেশাদার দেখায়", "এটি scan আর API আসলে যেভাবে data দেয় তার সঙ্গে মেলে (আর Level 5-এ JSON)", "List file-এর চেয়ে দ্রুত", "Dictionary নিজে নিজে sort হয়"],
  ],
  "l4-py-files": [
    ["দ্রুত পড়া", "Block শেষ হলেই file স্বয়ংক্রিয়ভাবে বন্ধ হয়, error হলেও", "File encrypted হয়", "File পুরোটা পড়া হয়"],
    [undefined, "for line in f — একবারে এক line (streaming)", "এটি browser-এ খোলো", "এটি দুইবার একটি variable-এ copy করো"],
    ["একটি period", "একটি অদৃশ্য newline (\\n) — তুলনার আগে strip() তা সরিয়ে দেয়", "শুধু একটি space", "কিছুই নয়"],
  ],
  "l4-python-security": [
    ["লিখতে দ্রুত", "File যত বড়ই হোক memory সমান থাকে", "Python-এর তা দরকার", "এটি data encrypt করে"],
    ["Script admin হিসেবে চলে", "main() শুধু তখনই চলে যখন file সরাসরি চালানো হয়, import করলে নয়", "Error লুকানো থাকে", "File compile হয়"],
    ["একটি virtual machine", "একটি project-এর Python package অন্য project আর OS থেকে আলাদা রাখা", "Free cloud hosting", "দ্রুততর code"],
  ],
  "l4-py-integrity": [
    ["Hash-এর chunk দরকার", "File-এর আকার যাই হোক memory সমান থাকে", "ছোট file-এ এটি দ্রুত", "JSON-এর তা দরকার"],
    ["Hash এলোমেলো", "Hash function avalanche করে: input-এর যেকোনো বদল সম্পূর্ণ ভিন্ন digest তৈরি করে", "Checker ভাঙা", "JSON এটি নষ্ট করেছে"],
    ["এটি বড়", "যে baseline আবার লিখতে পারে সে tampered file-কে 'আসল' দেখাতে পারে", "JSON-এর মেয়াদ শেষ হয়", "Hash গোপন"],
  ],
  "l4-py-network": [
    ["এটি ধীর", "একটি মৃত বা ঝুলে থাকা server তোমার tool অনির্দিষ্টকাল আটকে দেয়; timeout ঝুলে থাকাকে সামলানো error-এ বদলায়", "Server এটি প্রত্যাখ্যান করে", "এটি বেশি bandwidth ব্যবহার করে"],
    ["যেকোনো host, read-only", "শুধু তোমার নিজের lab VM / যেসব host-এর জন্য তোমার লিখিত অনুমোদন আছে", "অনুশীলনের জন্য university server", "পরিত্যক্ত-মনে-হওয়া host"],
    ["শুধু বৈধ IP, নিশ্চিত", "আকৃতির সঙ্গে মেলা প্রতিটি substring — range যাচাই আলাদা ধাপ", "Server-এর IP", "HTTPS page-এ কিছুই নয়"],
  ],
  "l4-c-basics": [
    [undefined, "3 — integer division ভগ্নাংশ ফেলে দেয়", undefined, "একটি error"],
    ["Compilation ধীর", "Program কখনো চলার আগেই compiler সম্ভাব্য bug (type mismatch, unused value) report করে", "Binary ছোট", "Windows file গ্রহণ করে"],
    ["একটি double", "একটি int — specifier আর type মিলতেই হবে", "একটি string", "যেকোনো type; C রূপান্তর করে"],
  ],
  "l4-c-arrays-functions": [
    [undefined, "5 — এটি '\\0' পর্যন্ত গোনে, array-র আকার নয়", undefined, "Undefined"],
    ["শৈলী", "Array প্রথম-element-এর address-এ decay হয়; আকারের তথ্য তার সঙ্গে যায় না", "C function-এ sizeof নিষেধ করে", "গতি"],
    [undefined, "আকার-সহ buffer-এ snprintf (return যাচাইসহ), যাতে overflow truncation-এ বদলায়", undefined, "Warning উপেক্ষা করা"],
  ],
  "l4-c-pointers": [
    ["একটি বড় ডাকবাক্স", "একটি কাগজ যাতে একটি বাক্সের ঠিকানা লেখা", "বাক্সের ভেতরের মান", "রাস্তাটি নিজেই"],
    ["p-কে 42 করে", "attempts-এর বাক্সের ভেতরের মান 42 করে — attempts নিজেই 42 হয়ে যায়", "একটি নতুন variable তৈরি করে", "42 ছাপে"],
    [undefined, "একটি pointer ঘোষণা করে, কখনো address না দিয়ে, তারপর dereference করা", undefined, "& দিয়ে address নেওয়া"],
  ],
  "l4-c-structs-heap": [
    ["এটি ধীর", "Return-এ stack memory পুনরুদ্ধার হয় — pointer পুনব্যবহৃত memory-র দিকে ঝুলে থাকে", "C return-এ & নিষেধ করে", "Compile হতে malloc লাগে"],
    ["Leak", "সেই pointer দিয়ে accidental use-after-free আর double-free (এটি এখন NULL হিসেবে দৃশ্যমানভাবে ব্যর্থ হয়)", "Compiler warning", "কিছুই নয়"],
    ["দ্রুততর response", "OS process-টি kill করা পর্যন্ত বৃদ্ধি — একটি availability ব্যর্থতা", "ভালো security", "কিছুই নয়; OS মাঝরাতে heap পরিষ্কার করে"],
  ],
  "l4-c-memory": [
    ["p গুণ করা", "p যে address ধরে সেখানে রাখা মান", "p-এর address", "একটি comment"],
    ["পর্দা", "সংরক্ষিত return address, function return করলে execution ঘুরিয়ে দেয়", "Power supply", "শুধু buffer-টি নিজে"],
    ["Stack canary", "ASLR", "Compiler warning বন্ধ করা", "Bounded copy function"],
  ],
  "l4-js-basics": [
    [undefined, "false — strict equality type-ও তুলনা করে", "একটি error", "মঙ্গলবারে true"],
    ["এটি ধীর", "Browser এটিকে HTML হিসেবে parse করে — embedded markup/script তোমার page-এর অংশ হয়ে যায়", "এটি বেশি memory ব্যবহার করে", "এটি CSS ভাঙে"],
    ["greet()-এর ফলাফল", "Function-টি নিজে, যাতে browser প্রতি click-এ ডাকতে পারে", "Code-এর একটি string", "কিছুই নয়"],
  ],
  "l4-js-fetch": [
    ["Server 404 ফেরত দেয়", "Server 500 ফেরত দেয়", "একটি network-level ব্যর্থতা ঘটে (DNS/connection/CORS)", "JSON অবৈধ"],
    ["যেকোনো জায়গায়", "একটি async function-এর ভেতরে (বা top-level module) — এটি promise settle না হওয়া পর্যন্ত সেই function থামিয়ে রাখে", "শুধু loop-এ", "শুধু timer দিয়ে"],
    ["Formatting-এর জন্য innerHTML", "createElement + textContent — data text-ই থাকে", "document.write", "একটি template-এর eval"],
  ],
  "l4-javascript-browser": [
    [],
    ["Script কত দ্রুত চলে", "অনুমতি ছাড়া cross-origin DOM/response পড়া (CORS)", "Cookie-র আকার", "Image loading"],
    ["localStorage ধীর", "Origin-এর যেকোনো script localStorage পড়তে পারে — XSS token উত্তরাধিকার পায়", "এটি খুব দ্রুত মেয়াদোত্তীর্ণ হয়", "এটি সব site-এ পাঠানো হয়"],
  ],
  "l4-bash-automation": [
    ["লাল রঙে ছাপা", "Non-zero code দিয়ে exit করা", "নিজেকে email করা", "একটি file মোছা"],
    ["0 — শূন্য মানেই সাফল্য", "1 — 'কোনো line মেলেনি' হলো grep-এর ব্যর্থতা status, আর script-কে তা সামলাতেই হয়", "127", "এটি file অনুযায়ী বদলায়"],
    ["ধীর script", "ভুল-বানানের variable নাম নীরবে খালি text-এ প্রসারিত হওয়া (যেমন rm -rf \"$DIRR/\" বিপর্যয়)", "Network ব্যর্থতা", "ভরা disk"],
  ],
  "l4-powershell-automation": [
    ["Compressed text", "Properties-সহ object — filtering property মান ব্যবহার করে, text column নয়", "Screenshot", "কিছুই নয়; তারা একই"],
    ["একটি নিখুঁত CSV", "Formatting string-এর একটি CSV — format করায় data আগেই ধ্বংস হয়েছে", "সবসময় একটি error", "JSON"],
    ["এটি দ্রুত চালায়", "এটি যা বদলাত তার preview দেখায় আর কিছুই বদলায় না", "Admin লাগে", "Logging নিষ্ক্রিয় করে"],
  ],
};

export const PRACTICAL_OPTIONS_A2: Record<string, (string | undefined)[]> = {
  "l4-py-first": ["দুটোই Total: 5 ছাপে", "প্রথমটি 'Total: 5' ছাপে (মান যোগ হয়); দ্বিতীয়টি 'Total: x + y' ছাপে (quote একে আক্ষরিক text বানায়)", "দুটোই শব্দগুলো ছাপে", "দ্বিতীয়টি 23 ছাপে"],
  "l4-py-variables": [],
  "l4-py-conditions": [undefined, "NOTE — সাধারণ প্রথম test আগেই মিলে গেছে, তাই কোনো failing case-এর জন্যই ALERT branch কখনো চলতে পারে না", "একটি error", undefined],
  "l4-py-control": [],
  "l4-py-functions": [undefined, undefined, "host.get('owner', 'unknown')", undefined],
  "l4-py-files": ["data = open('auth.log').read(); data-তে count", "with open('auth.log') as f: for line in f: if 'Failed' in line: failed += 1 — read-only, streaming", "open('auth.log', 'w') তারপর count", "এটি একটি list-এ load করে sort করো"],
  "l4-python-security": ["data = open(f).read(); তারপর RAM-এ সব split", "with-block দিয়ে line iterate করো, 'from'-এর পরের token নাও, Counter-এ গোনো", "Log spreadsheet-এ copy করো", "প্রতি line-এ eval() ব্যবহার করো"],
  "l4-py-integrity": ["প্রতিটি বদল", "কখনো কিছুই নয় — এটি file-গুলোকে নিজেদের সঙ্গেই তুলনা করে", "শুধু নতুন file", "শুধু মুছে ফেলা"],
  "l4-py-network": ["Error handling সরাও", "requests আর socket call-এ timeout= যোগ করো + RequestException/OSError ধরে 'unreachable' report করো", "Admin হিসেবে চালাও", "VM check মুছে ফেলো"],
  "l4-c-basics": [],
  "l4-c-arrays-functions": ["কোনো bug নেই", "Off-by-one: i 5-এ পৌঁছায়, কিন্তু বৈধ index 0..4 — array-র এক write বাইরে", "Loop কখনো চলে না", "scores-এর malloc লাগে"],
  "l4-c-pointers": ["10 — pointer মান copy করে", "15 — *p address বেয়ে v-এর নিজের বাক্সে লেখে", "5 — শুধু p বদলেছে", "Crash নিশ্চিত"],
  "l4-c-structs-heap": ["A ঠিক, B ঠিক, C ভুল", "A = use-after-free, B = leak, C = correct", "সব ঠিক", "A = leak, B = use-after-free, C = correct"],
  "l4-c-memory": ["ঠিক আছে; argv বিশ্বস্ত", "16-byte stack buffer-এ unbounded copy (CWE-121 শ্রেণি); sizeof(buf)-এর সঙ্গে বাঁধা bounded copy ব্যবহার করো আর দৈর্ঘ্য যাচাই করো", "বেশি RAM লাগে", "বড় monitor ব্যবহার করো"],
  "l4-js-basics": [],
  "l4-js-fetch": ["কিছুই নয়; এটি সম্পূর্ণ", "কোনো res.ok check নেই (500 error body data হিসেবে parse হয়) আর error shape-এ items undefined হতে পারে — পাশাপাশি rendering-এ text-safe sink ব্যবহার করতে হবে", "fetch-এর jQuery লাগে", "Handler-এ await অনুমোদিত নয়"],
  "l4-javascript-browser": [undefined, "el.textContent (মান নিষ্ক্রিয় text হিসেবে দেখায়)", undefined, undefined],
  "l4-bash-automation": ["কোনো ফাঁদ নেই", "Unquoted $LOG path-কে দুটি argument-এ ভাগ করে, আর count 0 হলে grep -c exit 1 দেয়, set -e script মেরে ফেলে", "grep গুনতে পারে না", "-c-এর sudo লাগে"],
  "l4-powershell-automation": ["CSV-এর Excel লাগে", "Format-Table export-এর আগে object-কে formatting text-এ বদলে দিয়েছে — আগে object export করো, format শুধু পর্দার জন্য", "Get-WinEvent pipe করা যায় না", "Export-Csv deprecated"],
};
