// Bangla answer options — Levels 16–17 lesson quizzes + practicals.
const ML = "এটি একটি marketing label যার এই পাঠে পরীক্ষাযোগ্য কোনো অর্থ নেই।";
const RP = "এটি পাঠের worked example-এর বদলি — শব্দটি জানলেই অনুশীলন অপ্রয়োজনীয় হয়ে যায়।";

export const QUIZ_OPTIONS_B2: Record<string, (string | undefined)[][]> = {
  "l16-android-basics": [
    [undefined, "Broken access control (যে পৌঁছাতে পারে, সে ব্যবহার করতে পারে)", "দুর্বল TLS", undefined],
    ["অনুমতিসহ 'দেখার' জন্য এক বন্ধুর phone", "একটি emulator বা training app-সহ তোমার নিজের device", "আগেই install করা যেকোনো app", "একটি দোকানের display phone"],
    ["এটি app ধীর করে", "এটি runtime পরীক্ষা/attachment-এর অনুমতি দেয় যা release-এর দেওয়া উচিত নয়", "এটি update ভাঙে", "এটি বেশি battery ব্যবহার করে"],
  ],
  "l16-android-architecture": [
    [undefined, "Framework/config: app যে network security config পাঠায় — fix app-এ, OS-এ নয়", undefined, undefined],
    ["পুরোনো কিন্তু ঠিক আছে", "চৌদ্দ মাসের প্রকাশিত, জানা fix অনুপস্থিত — তার পর থেকে প্রতিটি kernel/native finding এই device-এ সম্ভবত জীবন্ত", "একটি display bug", "Storage ভরা"],
    ["তারা জনপ্রিয়", "প্রায় কখনো default-এ নয়: sandbox প্রতিটি app-কে নিজের UID আর private storage দেয়; ভাগাভাগি স্পষ্ট, permission-gated channel দিয়ে হয়", "তারা সদয়ভাবে জিজ্ঞেস করে", "একই developer নাম"],
  ],
  "l16-apk-anatomy": [
    ["একটি সুবিধা", "একটি release-blocking finding: device access যার আছে সে চলমান app আর তার data-তে debugger যুক্ত করতে পারে", "Update-এর জন্য আবশ্যক", "নতুন Android-এ নিরীহ"],
    ["কিছুই নয় — provider internal", "এর data device-এর যেকোনো app-কে যে জিজ্ঞেস করে — login ছাড়া database-এর মতো query করো", "শুধু এর নাম", "Icon"],
    ["Developer-এর পছন্দ একটি library", "App-এর একটি বলা feature — ব্যাখ্যাহীন permission হলো finding", "একটি store শর্ত", "নির্দিষ্ট কিছুই নয়"],
  ],
  "l16-components-ipc": [
    ["কিছুই নয় — activity হলো screen", "Admin screen সরাসরি launch করো, app-এর নিজের navigation/login প্রবাহ পাশ কাটিয়ে — exported মানে পৌঁছানো যায়, আর check ছাড়া reachability-ই ত্রুটি", "শুধু দেখো", "App uninstall করো"],
    ["নিরাপদ", "Manifest বন্ধ বলে যখন code window খোলে — দুটোই audit করো: কার্যকর reachability-ই গুরুত্বপূর্ণ", "একটি style সমস্যা", "দ্রুত"],
    ["একটি finding", "স্বাভাবিক আর আবশ্যক — এটি app-এর সম্মুখ দরজা; audit প্রশ্ন হলো আর কী exported আর unprotected", "একটি bug", "বিরল"],
  ],
  "l16-permissions-intents": [
    ["দ্রুত automation", "Install করা যেকোনো app action broadcast করে feature চালাতে পারে — একটি privilege সীমানা ব্যর্থতা", "একটি UI bug", "স্বাভাবিক Android"],
    ["তারা সুন্দর", "সম্মতি ব্যবহারের মুহূর্তে, প্রসঙ্গে ঘটে, আর প্রত্যাহার করা যায় — ব্যবহারকারীরা আসলে অনুরোধ বিচার করতে পারে", "তারা অস্বীকার করা যায় না", "তারা manifest সরায়"],
    ["তারা ধীর", "Action-এর জন্য register করা যেকোনো app সেগুলো পেতে/resolve করতে পারে — প্রাপক pinned নয়", "তাদের internet লাগে", "তারা সম্পূর্ণ deprecated"],
  ],
  "l16-sandbox-storage-deep": [
    ["গ্রহণযোগ্য", "উন্মুক্ত: লুকানো কোনো permission নয় — removable/shared storage অন্য app আর device/media ধারণকারী যে কেউ পড়তে পারে", "Folder দিয়ে encrypted", "একটি Keystore feature"],
    ["এটি করে না", "Root UID বেড়ার উপরে বসে: একটি rooted device-এ sandbox নিশ্চয়তা root ধারণকারীর শৃঙ্খলার মতোই শক্ত — যেই কারণে release app (সীমিত) root detection যোগ করে আর audit non-rooted baseline ব্যবহার করে", "এটি audit দ্রুত করে", "এটি emulator ভাঙে"],
    ["Storage ছোট", "File backup/debuggable build থেকে বের করে rooted device-এ পড়া যায়; Keystore key non-exportable আর usage-gated", "ঐতিহ্য", "গতি"],
  ],
  "l16-storage-keystore": [
    ["Preference ধীর", "Device extraction, backup, বা root/emulator access এটি সরাসরি পড়ে — token Keystore-ধরা key-র নিচে encrypted থাকার কথা", "এটি XML ব্যবহার করে", "এটি uninstall-এ টিকে থাকে"],
    ["এটি একটি বড় file", "Key কাঁচা byte হিসেবে কখনো vault ছাড়ে না — কার্যক্রম ভেতরেই ঘটে, তাই app compromise স্বয়ংক্রিয়ভাবে key export করে না", "এর কোনো PIN লাগে না", "এটি cloud-এ backup হয়"],
    ["Audit ব্যর্থ হয়েছে", "Release build সঠিকভাবে non-debuggable — একটি প্রত্যাশিত PASS signal যা তুমি প্রমাণ হিসেবে লেখো", "App ভাঙা", "ADB ভাঙা"],
  ],
  "l16-network-webview": [
    ["Compatibility উন্নত করে", "প্রতিটি certificate গ্রহণ করে — TLS পরিচয় মোছা; যেকোনো interceptor 'server' হয়ে যায়", "TLS দ্রুত করে", "Certificate pin করে"],
    ["ব্যবহারকারীরা সৎ", "Device-এ CA profile install করতে পারে এমন যে কেউ (বা ব্যবহারকারীকে trick করে করাতে পারে) app-এর traffic intercept করতে পারে", "এটি storage ব্যবহার করে", "এটি ধীর"],
    ["কিছুই নয় — WebView app থেকে sandboxed", "Page script bridge করা app function-এ পৌঁছায়: অবিশ্বস্ত content native ক্ষমতা পায়", "শুধু battery drain", "ভালো rendering"],
  ],
  "l16-adb-emulator": [
    ["দুটোতেই install করো", "Phone disconnect/উপেক্ষা করে emulator-কে স্পষ্টভাবে target করো (adb -s emulator-5554) — install যেখানে তুমি লক্ষ্য করো সেখানে যায়", "এগোও — একই app", "Phone root করো"],
    ["সাজসজ্জা", "Log-এ sensitive data: log অন্য channel পড়তে পারে আর bug report-এ টিকে থাকে — secret কখনো log হয় না", "Performance", "একটি feature"],
    ["এটি শুধু free", "শূন্য আসল-জগতের blast radius-সহ পূর্ণ নিয়ন্ত্রণ: snapshot, root, reset, আর শুধু training app — mobile-এর জন্য sealed-room নিয়ম", "গতি", "এটি iOS চালায়"],
  ],
  "l16-mobsf-jadx-frida": [
    ["Scanner-কে বিশ্বাস করা", "JADX-এ class খোলো: এটি কি একটি জীবন্ত credential, একটি test fixture, নাকি একটি false match (যেমন একটি label)? উত্তর অনুযায়ী severity", "সঙ্গে সঙ্গে Critical report করা", "APK মোছা"],
    ["Paid app-এর licence check পরাজিত করা", "Storage, crypto আর network আচরণ যাচাই করতে emulator-এ তোমার নিজের/training app runtime-এ পর্যবেক্ষণ করা", "এক বন্ধুর phone-এ গুপ্তচরবৃত্তি", "Banking app সুরক্ষা পাশ কাটানো"],
    ["ঐতিহ্য", "প্রতিটি ধাপ পরেরটিকে সংকীর্ণ করে: scanner flag JADX পড়ায় মনোযোগ দেয়; code পড়া Frida-কে হুবহু বলে কোন call পর্যবেক্ষণ করতে হবে", "Frida install করতে ধীর", "MobSF free"],
  ],
  "l16-frida-fundamentals": [
    ["গবেষণা", "Scope আর আইনের বাইরে: instrumentation হলো তোমার মালিকানাধীন নয় এমন একটি system-এর সঙ্গে interaction — course নিয়মের (নিজের app, emulator, training target) কৌতূহলের কোনো ব্যতিক্রম নেই", "পরে uninstall করলে ঠিক আছে", "একটি portfolio নমুনা"],
    ["শিষ্টাচার", "আগে পর্যবেক্ষণ: একটি manipulation অর্থবহ হওয়ার আগে তোমাকে সৎ আচরণ জানতে হবে — পুরো level জুড়ে static→dynamic একই ক্রম", "Frida বদলাতে পারে না", "Logging দ্রুত"],
    ["Hook install হতে ব্যর্থ", "Hooked TLS check training proxy-র অবিশ্বস্ত cert-এ fire হয় আর connection প্রত্যাখ্যাত হয় — control কাজ করতে দেখা গেছে, পড়া হয়নি", "App দ্রুত", "কোনো crash নেই"],
  ],
  "l16-masvs-audit": [
    ["কিছুই নয়", "কোনো test নেই, কোনো প্রমাণ নেই: MASVS রায় device/emulator-এ চালানো MASTG পদ্ধতি থেকে আসে, ইচ্ছা পড়ে নয়", "খুব কঠোর", "একজন manager লাগে"],
    ["এটি একটি ব্যর্থতা নয়", "Build-variant ফাঁস একটি classic: release-এ পাঠানো debug network config — audit RELEASE variant-এর কার্যকর config যাচাই করে", "Training build public", "CA ব্যয়বহুল"],
    ["উদযাপন করো", "সন্দেহজনক: test গভীরতা আবার যাচাই করো — এই বিস্তৃত একটি standard একটি আসল app-এ কদাচিৎ পুরোপুরি পাস করে, আর অগভীর test পরিষ্কার sheet বানায়", "শুধু app-এর উপর সন্দেহজনক", "দ্বিগুণ বিল করো"],
  ],
  "l17-rest-security": [
    ["GET পুরোনো", "GET crawler, link prefetcher আর cross-site image tag দিয়ে fire হয় — GET-এর পেছনের একটি state বদল এমন একটি state বদল যা যে কেউ দুর্ঘটনাক্রমে বা ইচ্ছাকৃতভাবে trigger করতে পারে", "এটি ধীর", "REST refund নিষেধ করে"],
    ["RESTful আর ঠিক আছে", "একটি ধ্বংসাত্মক verb-সহ BOLA: যেকোনো authenticated user যে কারো order মোছে — owner check-ই control, প্রতি route-এ", "একটি caching সমস্যা", "Verb দিয়ে admin-only"],
    ["Database", "প্রতিটি request-এ token আর তাদের যাচাই — ভর করার মতো কোনো session memory নেই, তাই প্রতি-request যাচাই-ই পুরো খেলা", "Load balancer", "URL"],
  ],
  "l17-api-authz": [
    ["কিছুই নয়", "403 object-টির অস্তিত্ব নিশ্চিত করে — attacker পার্থক্য থেকে বৈধ ID enumerate করে; অভিন্ন 404 অস্তিত্ব private রাখে", "403 অভদ্র", "404 ধীর"],
    ["Obscurity দিয়ে নিরাপদ — গ্রহণযোগ্য", "API5 broken function-level authorization: একটি সাধারণ token দিয়ে endpoint সরাসরি ডাকো আর এটি উত্তর দেয় — ভূমিকা দিয়ে server-side gate করো", "URL লম্বা হলে ঠিক আছে", "Weekday-তে ঠিক আছে"],
    ["অবৈধ JSON", "Mass assignment (API3:2023): editable field-এর একটি allowlist বাঁধো আর বাকি প্রত্যাখ্যান করো", "একটি feature", "একটি CSS সমস্যা"],
  ],
  "l17-api-auth-tokens": [
    ["লম্বা", "সর্বত্র logged: proxy, server, browser history, analytics — key এটি ছোঁয়া প্রতিটি log-এ ফাঁস হয়", "Case-sensitive", "চিরদিন cached"],
    ["Rate limiting", "Audience যাচাই: প্রতিটি API যাচাই করে token তার জন্যই তৈরি হয়েছে", "CORS", "Compression"],
    ["শৈলী", "তখন একটি চুরি access token দ্রুত মেয়াদোত্তীর্ণ হয়, আর একটি rotated refresh token পুনব্যবহার চুরি উন্মোচন করে", "Server দ্রুত", "ব্যবহারকারীরা login পছন্দ করে"],
  ],
  "l17-mass-assignment-deep": [
    ["কিছুই নয় — লুকানো নিরাপদ", "API UI নয়, client ডাকে: model body যা বহন করে তা গ্রহণ করে, আর body attacker-এর লেখার", "DTO ধীর", "Role হলো সাজসজ্জা"],
    ["পুরো user object ফেরত দেওয়া (hash, token, internal flag) কারণ UI বাড়তি field লুকায়", "খুব কম ফেরত দেওয়া", "ধীর JSON", "বড় font"],
    ["একটি load test", "একটি server-মালিকানাধীন field জমা দাও; প্রত্যাখ্যান দাবি করো; প্রতিটি refactor-এর পর পুনরাবৃত্তি — two-account suite-এর mass-assignment line", "একটি screenshot", "শুধু একটি code review"],
  ],
  "l17-rate-limit-gateway": [
    ["একজন সৎ ব্যবহারকারী", "বণ্টিত অপব্যবহার (অনেক IP, একটি target account) — পরিচয়-ভিত্তিক সীমা আর প্রতি-account counter-ও layer করো", "IPv6", "Caching"],
    ["উদার", "API4 resource-consumption উন্মুক্ততা: page আকার আর খরচ সীমাবদ্ধ করো, নইলে scraper এক call-এ catalogue নিয়ে যায়", "একটি caching feature", "GraphQL"],
    ["কিছুই নয় — data হলো data", "ত্রুটিপূর্ণ/শত্রুভাবাপন্ন upstream data তোমার injection আর logic bug হয়ে যায় — consumed API যেকোনো অবিশ্বস্ত input-এর মতো যাচাই করো", "ধীর response", "শুধু বাড়তি billing"],
  ],
  "l17-graphql-rest": [
    ["একটি অনুপস্থিত rate limit", "একটি queryable type যার sensitive FIELD যেকোনো authenticated user চাইতে পারে — অনুমোদন login-এ যাচাই হয়েছে, প্রতি field/object-এ নয়", "ধীর resolver", "একটি বড় schema"],
    ["স্বচ্ছতার জন্য সবসময় চালু", "নিষ্ক্রিয় বা authenticated developer-দের মধ্যে সীমিত — এটি attacker-দের সম্পূর্ণ schema মানচিত্র free-তে দেয়", "Paying user-দের জন্য চালু", "REST দিয়ে বদলি"],
    ["Backward compatibility", "Version drift: একটি unpatched সমান্তরাল দরজা — পুরোনো version inventory করে অবসর দাও, বা একই control-এ রাখো", "একটি feature flag", "শুধু documentation ঋণ"],
  ],
  "l17-gateway-secrets": [
    ["ঠিক — একটি দেয়াল", "Handler এখনো token আর মালিকানা যাচাই করে: একটি gateway bypass বা misroute পূর্ণ compromise হতে পারে না — প্রতি-দরজা পাহারা থাকে (এই level-এর প্রথম পাঠ)", "Gateway যথেষ্ট", "যাচাই হলো duplicate অপচয়"],
    ["File মোছো", "আগে key rotate করো (history আর clone-এ এরই মধ্যে আছে), তারপর storage vault-এ সরাও, তারপর যা scrub করা যায় করো", "Repo-র নাম বদলাও", "উপেক্ষা করো — পুরোনো key"],
    ["সুবিধাজনক", "একটি control-plane উন্মুক্ততা: প্রতিটি দরজা configure করা desk রাস্তা থেকে পৌঁছানো যাবে না", "একটি feature", "আবশ্যক"],
  ],
  "l17-api-testing-design": [
    ["চিরদিন ধরো", "পরের একটি refactor-এ নীরবে ফিরে আসা — suite-ই fix স্থায়ী করে", "যথেষ্ট নথিভুক্ত হওয়া", "API ধীর করা"],
    ["Debugging-এর জন্য পূর্ণ token", "Authenticated পরিচয়, object id, আর সিদ্ধান্ত (allow/deny) — কখনো credential নিজে নয়", "কিছুই নয়", "সবসময় request body"],
    ["API বন্ধ থেকে শুরু হয়: প্রতিটি route, field আর function স্পষ্টভাবে অনুমোদিত আর উন্মুক্ত না হওয়া পর্যন্ত অপৌঁছনীয়", "ব্যবহারকারীদের সদয়ভাবে প্রত্যাখ্যান করা হয়", "Error লুকানো", "Doc private"],
  ],
  "l17-webhooks-rest": [
    ["Password সেকেলে", "HMAC পুরো body + timestamp বাঁধে: হস্তক্ষেপ বা replay তা ভাঙে; একটি static field শুধু প্রমাণ করে sender একদা একটি string জানত", "HMAC দ্রুত", "JSON password ধরতে পারে না"],
    ["Logging", "Idempotency: event id-তে key প্রক্রিয়াকরণ যাতে retry free হয়", "HTTPS", "একটি বড় server"],
    ["বিব্রতকর অবস্থা", "Free recon: framework, version, file path আর query আকৃতি attacker-এর পরের ধাপের জন্য — client-এর কাছে error generic; বিবরণ log-এ যায়", "কিছুই না", "ধীর error"],
  ],
  "l17-top10-survey": [
    ["Endpoint block করো", "Flow-aware সুরক্ষা: device/behavior signal, প্রতি-flow (প্রতি-IP নয়) budget, আর যেখানে automation লাভ করে সেখানে friction — business logic-ই control surface", "আরও password", "Flow সরাও"],
    ["সঙ্গে সঙ্গে বন্ধ করো, সবসময়", "এটি inventory করো, এটি কোন data-তে পৌঁছাতে পারে আর কে ডাকে যাচাই করো, তারপর একটি জানানো তফসিলে অবসর দাও — অজানা surface আবিষ্কৃত, মূল্যায়িত, তারপর বন্ধ হয়", "উপেক্ষা করো", "নথিভুক্ত করে ভুলে যাও"],
    ["Covered", "Unowned: coverage মানে একটি নামকৃত control আর একটি নামকৃত test — একটি প্রতিষ্ঠানের নাম control নয়", "আংশিক", "ঠিক আছে"],
  ],
  "l17-api-inventory": [
    ["শুক্রবার DNS record মোছো", "জীবন্ত surface হিসেবে ধরো: এটি কী সেবা দেয় আর কে ডাকে নির্ধারণ করো (log, traffic), একজন অন্তর্বর্তী মালিক নিয়োগ করো, baseline control প্রয়োগ করো — তারপর প্রমাণের উপর অবসর তফসিল করো", "উপেক্ষা করো — কোনো gateway traffic নেই", "আক্রমণাত্মকভাবে scan করো"],
    ["আমলাতন্ত্র", "Paved path কাজ করছে: প্রতিরোধ জন্মে মিনিট খরচ করে আর পরে discovery project বাঁচায় — নকশা দিয়ে inventory, প্রত্নতত্ত্ব দিয়ে নয়", "ঐচ্ছিক কাগজপত্র", "একটি gateway feature"],
    ["সম্পূর্ণ", "পর্যবেক্ষণে অসম্পূর্ণ প্রমাণিত: traffic-ও একটি আবিষ্কার জাল — অজানা host আজই classify ধাপে ঢোকে, আর আবিষ্কার প্রক্রিয়া একটি স্থায়ী traffic-vs-register diff পায়", "একটি logging error", "ঠিক আছে — 40/41"],
  ],
  "l17-api-errors-inventory": [
    ["ব্যবহারকারীদের জন্য অসহায়", "সঠিক পরিচ্ছন্নতা: client নিরাপত্তা পায়, operator বিবরণ রাখে, আর correlation ID তাদের যুক্ত করে", "একটি bug", "ধীর"],
    ["নির্ণায়ক", "তুমি তফসিল করা একটি outage: আগে caller inventory করো (API9) — অবসর একটি migration, তারপর একটি kill", "নিরাপদ", "আবশ্যক"],
    ["একটি party", "একটি অবসর পরিকল্পনা: sunset মানদণ্ড আর একজন মালিক — মৃত্যু তারিখ ছাড়া version zombie surface হয়ে যায়", "আরও endpoint", "একটি নতুন domain"],
  ],
};

export const PRACTICAL_OPTIONS_B2: Record<string, (string | undefined)[]> = {
  "l16-android-basics": ["Icon খুব বড়; নাম খুব লম্বা", "Debuggable release build + exported unprotected provider (data উন্মুক্ততা) — দুটোই release-এর আগে ঠিক করতে হবে", "খুব বেশি permission ব্যবহার করে (এটি একটি চায়)", "কোনো dark mode নেই"],
  "l16-android-architecture": ["App bytecode চালানো runtime — প্রতিটি app নিজের instance আর নিজের Linux UID পায়।", "একটি APK-র ভেতরের compiled bytecode format — JADX যা Java-র দিকে decompile করে।", "কোন মাসিক Android security bulletin-এর fix একটি device ধারণ করে তা বলা তারিখ string — mobile patch ঘড়ি।", ML],
  "l16-apk-anatomy": [ML, "অন্য app আহ্বান করতে পারে এমন একটি activity/service/receiver/provider। Exported + কোনো permission নয় = device-এর যেকোনো app পৌঁছাতে পারে।", "App-এর ঘোষণা file: permission, component, flag — এক document-এ attack surface।", "Android application package: manifest, compiled code (dex), resource আর signature ধারণকারী installযোগ্য zip।"],
  "l16-components-ipc": ["একটি component কোন implicit intent গ্রহণ করে তার ঘোষণা — অন্য app পড়তে পারে এমন একটি আমন্ত্রণ তালিকা।", "Caller-দের কাছে একটি app-এর structured data সেবা দেওয়া component — এর permission setting-ই data-র সম্মুখ দরজার তালা।", "অন্য app (বা system) আহ্বান করতে পারে এমন একটি component — exported=true বা একটি intent filter দিয়ে ঘোষিত।", ML],
  "l16-permissions-intents": [RP, "ব্যবহারের সময় (install-এ নয়) ব্যবহারকারীর দেওয়া আর প্রত্যাহারযোগ্য sensitive permission — contact/location/microphone-শ্রেণির data-র সম্মতি gate।", ML, "একটি component থেকে একটি কাজ চাওয়ার জন্য Android-এর message object — explicit (নামকৃত target) বা implicit (action দিয়ে, system resolve করে)।"],
  "l16-sandbox-storage-deep": ["প্রতিটি install করা app একটি স্বতন্ত্র Linux user হিসেবে চলে — kernel, app নয়, বিচ্ছিন্নতা কার্যকর করে।", "UID permission-এর উপরে স্তরিত mandatory access policy, এমনকি system process-কেও তাদের domain-এ সীমাবদ্ধ রাখে।", "App-এর বাইরে পড়নযোগ্য shared/removable storage — নকশা অনুযায়ী একটি publish surface, কখনো একটি vault নয়।", ML],
  "l16-storage-keystore": ["System key vault (অনেক device-এ hardware-backed): key ভেতরে তৈরি হয়, ভেতরে ব্যবহৃত হয়, আর কাঁচা উপাদান হিসেবে কখনো export হয় না।", "OS দিয়ে কার্যকর প্রতি-app private storage — অন্য app এটি পড়তে পারে না (যদি না device rooted হয় বা app নিজে বাইরে ফাঁস করে)।", ML, RP],
  "l16-network-webview": [ML, "App-এর ভেতরে plain HTTP: network path-এ পড়নযোগ্য আর বদলানো যায়। আধুনিক Android target-এ default-এ বন্ধ; পুনরায় চালু করা একটি finding।", "WebView-এর addJavascriptInterface: নামকৃত app object page JavaScript-এর কাছে উন্মুক্ত করে — শক্তিশালী, আর content অবিশ্বস্ত হলে একটি XSS-to-native সেতু।", "App তার API-র জন্য শুধু একটি জানা pin-এর সঙ্গে মেলা certificate গ্রহণ করে — অন্য কোনো CA-জারি cert-সহ একটি MITM প্রত্যাখ্যাত হয়।"],
  "l16-adb-emulator": ["Android Debug Bridge: একটি emulator/device-এর command-line channel — install, file, log, shell।", "Android-এর system/app log stream — crash, debug output আর দুর্ঘটনাক্রমে secret-logging প্রথম যেখানে আসে।", "Virtual device-এর একটি save করা পরিষ্কার অবস্থা — malware lab-এর revert শৃঙ্খলার mobile সংস্করণ।", ML],
  "l16-mobsf-jadx-frida": ["App না চালিয়ে পরীক্ষা করা: manifest, code, string (MobSF/JADX)।", "নিয়ন্ত্রিত পরিবেশে চলার সময় app পর্যবেক্ষণ করা (emulator + Frida/instrumentation)।", "Compiled dex আবার পড়নযোগ্য code-এ বদলানো (JADX) — আনুমানিক, কিন্তু finding যাচাইয়ের জন্য যথেষ্ট বিশ্বস্ত।", ML],
  "l16-frida-fundamentals": [ML, "একটি চলমান system-এ পর্যবেক্ষণ point যোগ করা — Frida হলো mobile যন্ত্র; নৈতিকতা sandbox-এরই: তোমার app, তোমার device।", "Runtime-এ একটি function call intercept করে তার argument আর return পর্যবেক্ষণ (বা, testing-এ, বদলানো) করা — dynamic analysis-এর মৌলিক চাল।", RP],
  "l16-masvs-audit": [ML, "সঙ্গী testing guide: পদ্ধতি যা MASVS শর্তকে emulator-এ চালানো যায় এমন test-এ বদলায়।", "প্রতিটি Pass/Fail-এর পেছনের এক-line artifact — এটি ছাড়া audit মতামত (course-এর স্থায়ী নিয়ম)।", "OWASP Mobile Application Security Verification Standard — mobile app security-র শর্ত checklist।"],
  "l17-rest-security": ["URL-এর resource-এর সঙ্গে বাঁধা check (এর মালিক, এর tenant) — BOLA নিয়মের REST রূপ।", "একটি পদ্ধতি যা state বদলাতে পারে না (GET/HEAD) — তাদের পেছনের mutation crawler, prefetcher আর CSRF-আকৃতির দুর্ঘটনা থেকে fire হয়।", ML, RP],
  "l17-api-authz": ["ভূমিকা দিয়ে server-side gate করা admin/sensitive FUNCTION (API5:2023) — UI button লুকানো কোনো control নয়।", "Broken Object Level Authorization (API1:2023): API যাচাই করে তুমি কে কিন্তু এই object তোমার কিনা তা নয়।", "পুরো request body model-এ বাঁধলে client কখনো প্রস্তাব না করা field set করতে পারে (role, balance) — একটি স্পষ্ট allowlist DTO বাঁধো।", ML],
  "l17-api-auth-tokens": [ML, "Server শুধু নামকৃত signature algorithm অনুমোদন করে — token-এর নিজের alg header কখনো বেছে নিতে পারে না।", "একটি project/client শনাক্তকারী — আহ্বানকারী application চিহ্নিত করে, কোনো শেষ ব্যবহারকারী নয়; transit আর storage-এ secret হিসেবে ধরো, কখনো user authentication হিসেবে নয়।", "কোন API-র জন্য token তৈরি হয়েছে তা নাম দেওয়া claim; একটি API অন্য API-র জন্য ঠিকানা করা token প্রত্যাখ্যান করবে।"],
  "l17-mass-assignment-deep": ["প্রতি-endpoint গ্রহণযোগ্য input-এর স্পষ্ট আকৃতি — তুমি যা বাঁধো একটি allowlist, তুমি যা সংরক্ষণ করো সেই model নয়।", "শুধু server logic set করতে পারে এমন একটি property (role, balance, verified) — একটি request body-তে এর উপস্থিতি নিজেই একটি finding।", ML, RP],
  "l17-rate-limit-gateway": ["একটি login API-র বিরুদ্ধে মাত্রায় ফাঁস username/password জোড়া চেষ্টা করা — rate limit + MFA + breached-password screening একসাথে পরাজিত করে।", "সৎ প্রত্যাখ্যান: 'too many requests, retry after N seconds' — সীমা জানানো হয়, নীরব drop নয়।", "একটি rate-limit algorithm: স্থিরভাবে পূর্ণ হওয়া token-এর একটি budget; প্রতিটি request একটি খরচ করে; খালি bucket = 429।", ML],
  "l17-graphql-rest": ["GraphQL-এর আত্ম-বিবরণ query — পুরো schema-র একটি মানচিত্র। Developer-দের জন্য সোনা; production-এ, একটি free recon উপহার: নিষ্ক্রিয় বা gate করো।", "একটি query কতটা ব্যয়বহুল হতে পারে তার একটি budget (field, গভীরতা, list গুণক) কার্যকর হওয়ার আগে প্রয়োগ করা।", "শুধু প্রতি endpoint/type নয়, প্রতি FIELD-এ অধিকার যাচাই (salary, email) — GraphQL-এর BOLA সংস্করণ এখানেই থাকে।", ML],
  "l17-gateway-secrets": [ML, "Gateway-র নিজের management interface — একটি control surface যা কখনো public data surface ভাগ করতে পারে না।", "একটি তফসিলে আর সন্দেহে একটি credential বদলানো — কখনো বদলায় না এমন একটি key ভবিষ্যতের সঙ্গে ভাগ করা একটি secret।", "API-র জন্য অভিন্ন সম্মুখ স্তর: auth offload, সীমা, TLS, routing — cross-cutting control যেখানে থাকে একটি জায়গা।"],
  "l17-api-testing-design": [ML, "ঘোষিত আকৃতির সঙ্গে না মেলা যেকোনো request/response প্রত্যাখ্যান — type, range, additionalProperties বন্ধ।", "প্রতিটি build-এর বিরুদ্ধে জানা attack আকৃতি পুনরায় চালানো স্বয়ংক্রিয় test, যাতে ঠিক করা API ত্রুটি কখনো নীরবে ফিরে না আসে।", RP],
  "l17-webhooks-rest": ["একই event দুইবার process করা একবারের মতোই প্রভাব ফেলে — আবশ্যক কারণ webhook provider delivery পুনরায় চেষ্টা করে।", "একটি shared secret দিয়ে কাঁচা body-র (প্রায়শই + timestamp) একটি HMAC — receiver-এর প্রমাণ event provider থেকে এসেছে, অবদলিত।", "UI কখনো প্রস্তাব করে না এমন একটি HTTP পদ্ধতি (DELETE, PUT) এমন একটি endpoint-এর বিরুদ্ধে ব্যবহার করা যার অনুমোদন শুধু বন্ধুসুলভ verb বিবেচনা করেছে।", ML],
  "l17-top10-survey": ["বৈধ কার্যকারিতায় automation দিয়ে অপব্যবহৃত sensitive flow (checkout, OTP, signup) — flow-aware সীমা আর friction দিয়ে রক্ষা, লুকিয়ে নয়।", "Control-এর বাইরে চলমান অজানা, shadow আর zombie API version — inventory অন্য প্রতিটি entry-র পূর্বশর্ত।", ML, RP],
  "l17-api-inventory": ["একটি অবসর-ইচ্ছাকৃত version এখনো traffic সেবা দিচ্ছে — deprecation ঘোষিত, মৃত্যু কখনো কার্যকর নয়।", "Inventory-তে অনুপস্থিত একটি জীবন্ত API — control, monitoring, আর সাধারণত মালিকের কাছে অজানা।", "প্রতিটি জীবন্ত API আর version-এর register: মালিক, data শ্রেণি, auth অবস্থা, exposure — অন্য প্রতিটি API control যে মানচিত্রে আঁকা হয়।", ML],
  "l17-api-errors-inventory": ["Client-কে ফেরত দেওয়া আর server log-এ মুদ্রিত একটি প্রতি-request শনাক্তকারী — একটি নিরাপদ client error-কে তার বিস্তারিত server record-এর সঙ্গে যুক্ত করে।", "Machine-readable deprecation বিজ্ঞপ্তি (Sunset/Deprecation header) যা client-দের বলে একটি version কখন মরে।", ML, RP],
};
