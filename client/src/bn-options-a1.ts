// Bangla answer options — Levels 0–3 lesson quizzes + practicals.
// Index-aligned with the English source; undefined = identical in both
// modes (pure technical term / command / number options stay English).
export const QUIZ_OPTIONS_A1: Record<string, (string | undefined)[][]> = {
  "l0-what-is-cybersecurity": [
    [],
    ["একটি criminal group", "একটি দুর্বলতা যা কাজে লাগানো যায়", "একটি incident-এর পরের ক্ষতি", "একটি security policy"],
    ["একটি port block করা firewall", "Account মালিককে email করা login alert", "একটি disk encrypt করা", "একটি password policy"],
  ],
  "l0-ethics-law": [
    ["হ্যাঁ, একজন কর্মী বলেছে", "না — শুধু system-এর মালিক/প্রতিষ্ঠানই লিখিতভাবে, scope-সহ অনুমোদন দিতে পারে", "হ্যাঁ, ক্ষতি না করলে", "হ্যাঁ, শুধু read-only test-এর জন্য"],
    ["সঙ্গে সঙ্গে প্রকাশ করো", "প্রভাব প্রমাণ করতে আরও exploit করো", "মালিককে গোপনে report করো আর থামো", "বিবরণ বিক্রি করো"],
    ["একটি university server", "তোমার নিজের virtual machine", "প্রতিবেশীর Wi-Fi", "আসল bank site-এ একটি demo account"],
  ],
  "l0-teams-roles": [
    ["Blue team না জানিয়ে আক্রমণ করা", "Detection test ও উন্নত করতে red আর blue-র সহযোগিতা", "শুধু policy লেখে এমন আলাদা team", "স্বয়ংক্রিয় scanning"],
    ["Access-এর screenshot", "প্রমাণ, প্রভাব আর remediation-সহ একটি পেশাদার report", "ব্যবহৃত tool-এর তালিকা", "Root access"],
    ["Red team operator ভূমিকা", "SOC / blue team analyst ভূমিকা", "Malware research ভূমিকা", "CISO ভূমিকা"],
  ],
  "l1-inside-computer": [
    ["ধীর", "বিদ্যুৎ চলে গেলে এর বিষয়বস্তু হারিয়ে যায়", "OS স্থায়ীভাবে সংরক্ষণ করে", "শুধু GPU ব্যবহার করে"],
    ["Disk encrypt করা", "Boot component চলার আগে signed/trusted কিনা যাচাই করা", "Boot দ্রুত করা", "Windows update block করা"],
    [],
  ],
  "l1-processes-memory": [
    ["নাম ভুল", "Path ভুল — আসল svchost থাকে System32-তে", "খুব কম RAM ব্যবহার করে", "এর কোনো window নেই"],
    ["একটি আলাদা program", "একটি process-এর ভেতরের execution line", "এক ধরনের file", "একটি network connection"],
    ["দ্রুততর CPU", "প্রতি process-এর জন্য ব্যক্তিগত, বড়-মনে-হওয়া address space", "Encryption", "Network isolation"],
  ],
  "l1-files-permissions": [
    ["সবাই পড়তে পারে", "মালিক read/write, group read, অন্যরা কিছুই নয়", "মালিক শুধু execute", "এটি encrypted"],
    ["Disk নষ্ট করে", "যেকোনো স্থানীয় ব্যবহারকারী একটি privileged service যা চালায় বা বিশ্বাস করে তা বদলাতে পারে", "Backup ভেঙে দেয়", "এটি অবৈধ"],
    ["Directory মুছে ফেলা", "এতে প্রবেশ/search করা", "File-এর বিষয়বস্তু পড়া", "কিছুই নয়"],
  ],
  "l2-osi-tcpip": [
    [],
    [],
    ["পুরো internet জুড়ে", "শুধু স্থানীয় link-এ", "Traffic encrypt করতে", "DNS server দিয়ে"],
  ],
  "l2-subnetting-dns": [
    [],
    [],
    ["শুধু একটি switch", "একটি router/gateway", "একটি DNS server", "কিছুই নয় — একই network"],
  ],
  "l2-network-tools": [
    ["Server বন্ধ আছে", "ICMP filtered; host চালু আছে", "DNS ভাঙা", "তোমার cable ত্রুটিপূর্ণ"],
    [],
    ["Router-দের তাদের table জিজ্ঞেস করা", "বাড়তে থাকা TTL দিয়ে packet পাঠিয়ে expiry reply পড়া", "প্রতিটি ISP-কে ping করা", "DNS record পড়া"],
  ],
  "l3-linux-essentials": [
    [],
    ["ব্যর্থ login মুছে ফেলে", "'Failed' থাকা line গণনা করে", "auth.log সম্পাদনা করে", "আক্রমণকারীদের block করে"],
    ["sudo দ্রুততর", "কাজগুলো তুমি হিসেবে authenticated আর logged হয়; root session সর্বশক্তিমান আর anonymous", "root internet ব্যবহার করতে পারে না", "sudo command encrypt করে"],
  ],
  "l3-windows-admin": [
    ["সফল logon", "ব্যর্থ logon", "Account তৈরি হয়েছে", "Service install হয়েছে"],
    ["শুধু plain text", "Properties-সহ .NET object", "Screenshot", "শুধু registry key"],
    ["Install দ্রুত করা", "Elevation gate করা যাতে admin power ইচ্ছাকৃতভাবে, প্রতি কাজে ব্যবহার হয়", "Password বদলে দেওয়া", "সব script block করা"],
  ],
  "l3-bash-scripting": [
    ["Power-এর comment", "Shebang — এটি interpreter বেছে দেয়", "Version tag", "Checksum"],
    ["ব্যর্থতা", "সাফল্য", "Script কিছুই ছাপেনি", "Root এটি চালিয়েছে"],
    ["গতির জন্য", "যাতে space-সহ path বা খালি মান একাধিক argument-এ ভাগ না হয়", "কারণ bash-এর তা দরকার", "এটি encrypt করতে"],
  ],
};

export const PRACTICAL_OPTIONS_A1: Record<string, (string | undefined)[]> = {
  "l0-what-is-cybersecurity": ["লম্বা URL", "প্রতিটি photo request-এ server-side authorization check", "একটি সতর্ক banner", "দ্রুততর server"],
  "l0-ethics-law": ["পুরোপুরি test করো — এটি একটি subdomain", "থামো: এটি স্পষ্টভাবে scope-এর বাইরে; program out-of-scope নির্দেশনা দিলে শুধু সেই পথে report করো", "প্রকাশ করো", "বিক্রি করো"],
  "l0-teams-roles": ["ফলাফল management থেকে লুকাও", "Telemetry দেখতে দেখতে simulation আবার চালাও, ফাঁকটি খোঁজো, detection লেখো/উন্নত করো, আবার test করো", "Night shift-কে দোষ দাও", "নতুন একটি tool কেনো"],
  "l1-inside-computer": [],
  "l1-processes-memory": ["স্বাভাবিক email আচরণ", "সন্দেহজনক: office app shell জন্ম দেওয়া একটি classic malicious-document pattern — তদন্ত করো", "একটি Windows update", "আর যাচাই ছাড়াই virus-এর প্রমাণ"],
  "l1-files-permissions": [],
  "l2-osi-tcpip": ["সব cable বদলাও", "intranet.local-এর DNS resolution যাচাই করো (dig/nslookup) — IP দিয়ে transport আর app আগেই প্রমাণিত", "Browser পুনরায় install করো", "সবার IP বদলাও"],
  "l2-subnetting-dns": [undefined, ".70 দ্বিতীয় /26-এর (.64–.127) — servers subnet; PC ভুল segment-এ বসে আছে", "Mask /8 হওয়া উচিত", "DNS নেই"],
  "l2-network-tools": [],
  "l3-linux-essentials": [],
  "l3-windows-admin": [],
  "l3-bash-scripting": ["Root হিসেবে চালাও", "Variable quote করো, path non-empty আর intended directory-র ভেতরে কিনা যাচাই করো, আর মোছার আগে ছাপো", "আরও -f flag যোগ করো", "2>/dev/null দিয়ে error লুকাও"],
};
