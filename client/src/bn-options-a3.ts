// Bangla answer options — Levels 5–6 lesson quizzes + practicals.
export const QUIZ_OPTIONS_A3: Record<string, (string | undefined)[][]> = {
  "l5-html-css-dom": [
    ["GET ধীর", "Credential URL-এ চলে যায় — browser history, server log আর referrer header কপি রেখে দেয়", "GET মোটেই password পাঠাতে পারে না", "Search engine-এর POST লাগে"],
    ["Access control", "কোনো security-ই নয় — link HTML-তেই আসে আর server-কে target page authorize করতেই হবে", "Encryption", "Authentication"],
    ["শুধু একটি performance hint", "সেই origin-এর code তোমার page-এর পূর্ণ কর্তৃত্ব নিয়ে চলে — inventory করার মতো একটি ইচ্ছাকৃত trust সিদ্ধান্ত", "Browser এটিকে পুরোপুরি sandbox করে", "এটি DOM পড়তে পারে না"],
  ],
  "l5-http-sessions": [
    [undefined, "Injected JavaScript দিয়ে cookie চুরি (XSS)", "SQL injection", "Brute force"],
    ["গতির জন্য", "যাতে login-এর আগের (সম্ভবত attacker-বসানো) ID পুনরায় ব্যবহার না হয় — session fixation পরাজিত করে", "Memory বাঁচাতে", "Browser-এর তা দরকার"],
    ["Server crash করেছে", "Authenticated হও বা না হও, এই resource-এর অনুমতি তোমার নেই", "Page সরে গেছে", "Request-এর JSON ত্রুটিপূর্ণ ছিল"],
  ],
  "l5-rest-sql": [
    ["হাতে quote escape করো", "Driver দিয়ে বাঁধা একটি ? placeholder — মান data হিসেবে, কখনো syntax হিসেবে নয়", "Quote থাকা যেকোনো input প্রত্যাখ্যান করো", "Input Base64-encode করো"],
    ["Warning-সহ 200", "404 — 'আছে না' থেকে আলাদা করা যায় না, কিছুই ফাঁস করে না", "শুধু মালিকের নাম", "500"],
    ["দ্রুত query", "প্রতিটি order একজন আসল ব্যবহারকারীকে নির্দেশ করে — database referential integrity কার্যকর করে", "Encryption", "Backup"],
  ],
  "l5-backend-tls": [
    ["Encryption ভাঙা", "ভিজিট করা domain certificate-এর SAN তালিকায় নেই — identity প্রমাণ এই নাম cover করে না", "CA বন্ধ", "Site নিশ্চিতভাবে malicious"],
    ["TLS নিষ্ক্রিয়", "Encryption proxy-তে শেষ হয়; traffic বিশ্বস্ত internal network দিয়ে plain HTTP-তে app পর্যন্ত যায়", "App-এর কোনো security লাগে না", "Certificate অপ্রয়োজনীয়"],
    ["এটি দেখতে IP-র মতো", "তোমার নিজের proxy এটি set/overwrite করেছে — client-দেওয়া মান দাবি, প্রমাণ নয়", "Request HTTPS", "এটি দুইবার আসে"],
  ],
  "l5-vuln-vs-secure": [
    ["Note মুছে ফেলা হয়েছে", "Query-র owner শর্ত কোনো row দেয় না, আর 'কোনো row নয়' অস্তিত্ব না জানিয়ে 404-এ ম্যাপ হয়", "Session-এর মেয়াদ শেষ", "ID লুকানো"],
    ["অভ্যাস", "এটিই একমাত্র প্রমাণ যে নির্দিষ্ট ত্রুটিটি বন্ধ হয়েছে — আর regression test হিসেবে রাখলে প্রমাণ করে তা বন্ধই থাকে", "Lab আরও ব্যবহার করতে", "Fix সাধারণত ভুল হয়"],
    ["সুবিধার জন্য সস্তা public VPS-এ", "শুধু localhost / তোমার নিজের isolated lab-এ — এটি ইচ্ছাকৃতভাবে exploitable software", "বন্ধুদের জন্য university network-এ", "শক্ত password দিয়ে যেকোনো জায়গায়"],
  ],
  "l6-threat-risk": [
    ["Encryption", "বিশ্বস্ত audit logging — কে কী করল, কখন, এমন জায়গায় লেখা যেখানে actor আবার লিখতে পারে না", "Firewall", "Backup"],
    ["এটি অভদ্র", "Reviewer-রা এটি challenge বা update করতে পারে না — likelihood exposure আর control-এর তথ্য লুকায় যা বদলায়", "Score decimal হতেই হবে", "Manager-রা সংখ্যা অপছন্দ করে"],
    ["একটি WAF কেনা", "পৌঁছানো যায় এমন জিনিস সরানো: unused port/feature/account আর public admin path — threat রক্ষা না করে মুছে ফেলা", "আরও ঘন ঘন scan", "লম্বা password"],
  ],
  "l6-crypto-basics": [
    ["AES দিয়ে encrypted", "SHA-256-এর মতো দ্রুত hash দিয়ে hashed", "Argon2id-এর মতো ধীর, memory-hard function দিয়ে salted + hashed", "একটি আলাদা text file-এ"],
    ["Confidentiality", "Authenticity আর integrity (confidentiality নয়)", "Anonymity", "Compression"],
    ["Key domain-এর সঙ্গে মেলে", "একটি CA আবেদনকারীকে যাচাই করেছে", "Site operator সৎ ও যোগ্য", "Certificate মেয়াদের মধ্যে আছে"],
  ],
  "l6-access-zero-trust": [
    ["এটি লম্বা", "এটি cryptographically আসল origin-এর সঙ্গে বাঁধা — lookalike domain-এ এটি authenticate করবে না", "এটি দ্রুত মেয়াদোত্তীর্ণ হয়", "এটি backup হিসেবে SMS ব্যবহার করে"],
    ["Password সরানো", "Blast radius সীমিত করা: segmentation + প্রতি-request authorization, যাতে একটি compromise ছোট থাকে", "Internet block করা", "আরও VPN জোর করা"],
    ["Senior staff-কে বিশ্বাস করা", "তফসিলি access review যা চাকরিতে আর দরকার নেই এমন access প্রমাণসহ সরিয়ে দেয়", "বার্ষিক password বদল", "আরও role"],
  ],
  "l6-policy-sdlc": [
    ["Encryption নিরুৎসাহিত", "এটি মাপা যায় না — এর নিচের standard-কে algorithm, key handling আর rotation নাম দিতে হবে যাতে compliance যাচাই করা যায়", "এটি খুব ছোট", "Policy আইনি document হতেই হবে"],
    ["Developer-রাই সব security করবে", "একই ত্রুটি পরে ঠিক করতে কয়েক গুণ বেশি খরচ হয়; আগের স্বয়ংক্রিয় check-ই সবচেয়ে সস্তা control", "Testing অপ্রয়োজনীয়", "Design review code review-এর বদলি"],
    ["একটি বিদায়ী post", "Data ঠিকমতো ধ্বংস করা আর system-এর credential/key প্রত্যাহার — retired system পৌঁছানো যায় এমন trust থাকা বন্ধ করতে হবে", "Server-এর নাম বদলানো", "কিছুই নয়; retirement ঝুঁকি শেষ করে"],
  ],
  "l6-awareness-defense": [
    ["Backup tape-ই হতে হবে", "Layer-গুলো স্বাধীনভাবে ব্যর্থ হতে হবে — যে attacker production-এর মালিক সে backup-এরও মালিক", "এটি খুব সুবিধাজনক", "Ransomware backup উপেক্ষা করে"],
    ["Training উপস্থিতি", "ব্যবহারকারীদের report করার মধ্যমা সময়", "দেখানো poster", "Quiz score"],
    ["একটি control", "একটি hypothesis — restore test একে প্রমাণসহ control-এ বদলায়", "কিছু না থাকার চেয়ে ভালো, পুরোপুরি", "একটি compliance লঙ্ঘন"],
  ],
};

export const PRACTICAL_OPTIONS_A3: Record<string, (string | undefined)[]> = {
  "l5-html-css-dom": ["কিছুই নয়", "GET-এ sensitive data (URL/log কপি রাখে) + CSS লুকানোকে access control মনে করা (server-কে /admin authorize করতে হবে)", "GET deprecated", "Form-এর আরও CSS লাগে"],
  "l5-http-sessions": [],
  "l5-rest-sql": [undefined, "SELECT * FROM orders WHERE id = ? AND user_id = ? with (id, session_user_id), কোনো row না থাকলে 404", "সব order ফেরত দিয়ে browser-এ filter করো", "শুধু JavaScript-এ id numeric কিনা যাচাই করো"],
  "l5-backend-tls": ["কিছুই নয়", "Certificate নামের অমিল (www SAN-এ নেই) + proxy bypass (app port public, proxy control পরাজিত করে)", "TLS খুব নতুন", "Proxy-র restart লাগে"],
  "l5-vuln-vs-secure": ["a→output encode করো, b→flag, c→parameter, d→owner check", "a→parameter + injection-string test, b→owner শর্ত + অন্য-account 404 test, c→HttpOnly/SameSite + header পরীক্ষা, d→output encoding + markup-text-হিসেবে-দেখায় test", "চারটিই HTTPS দিয়ে ঠিক হয়", "চারটিই একটি WAF দিয়ে ঠিক হয়"],
  "l6-threat-risk": ["Row মুছে ফেলো", "STRIDE শ্রেণির নাম দাও + মালিকসহ একটি সিদ্ধান্ত (যেমন 'I: verbose error দিয়ে disclosure → বাইরে generic error, বিবরণ server log-এ [FIX — backend মালিক]') অথবা তারিখসহ accepted-risk", "একে 10/10 score দাও", "একে appendix-এ সরাও"],
  "l6-crypto-basics": ["Internal app-এর জন্য গ্রহণযোগ্য", "Critical: দ্রুত + unsalted hash GPU cracking আর rainbow table-এ ভেঙে যায়; প্রতি-ব্যবহারকারী salt-সহ Argon2id/bcrypt-এ যাও (পরের login-এ rehash)", "MD5 মান ROT13 দিয়ে encrypt করে ঠিক করো", "Table লুকিয়ে ঠিক করো"],
  "l6-access-zero-trust": [],
  "l6-policy-sdlc": ["সব policy", "1 policy · 2 standard · 3 procedure · 4 guideline", "1 standard · 2 policy · 3 guideline · 4 procedure", "সব standard"],
  "l6-awareness-defense": ["EDR; alert সংখ্যা", "Backup-গুলো — একই credential স্বাধীনতা ভাঙে আর কোনো restore test না থাকা মানে অপ্রমাণিত; metric হলো restore-test সাফল্য/তারিখ", "Training; poster সংখ্যা", "কিছুই নয় — তিনটি layer আছে"],
};
