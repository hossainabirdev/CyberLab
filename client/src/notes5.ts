// Recap + Important Note + Tips & Tricks — PHASE 5 lessons (Levels 23–31),
// rendered by LessonView through the same callouts as the Level 4 rework.
import type { L4Note, L4Tips } from "./catalog7";

export const P5_NOTES: Record<string, L4Note> = {
 "l23-sets": {
  "recapEn": "From Level 22: your security path is complete. This new section starts your Honours CSE gap subjects — Level 23 needs only your Level 4 Python.",
  "recapBn": "Level 22 থেকে: তোমার security path সম্পূর্ণ। এই নতুন অংশে তোমার Honours CSE gap subject শুরু — Level 23-তে শুধু তোমার Level 4-এর Python লাগবে।",
  "ideaEn": "A set is a guest list, not a queue",
  "ideaBn": "Set হলো অতিথি তালিকা, সারি নয়",
  "noteEn": "Think of a set as a guest list at a door: a name is either on the list or not — being written twice does not get you in twice, and the list has no 'first guest'. Lists and arrays are queues with order; sets are pure membership. Half of all beginner confusion in this subject is using queue intuition on a guest list.",
  "noteBn": "Set-কে দরজায় অতিথি তালিকা ভাবো: একটি নাম হয় তালিকায় আছে, নয় নেই — দুবার লেখা থাকলে দুবার ঢোকা যায় না, আর তালিকায় 'প্রথম অতিথি' বলে কিছু নেই। List আর array হলো ক্রমসহ সারি; set হলো খাঁটি সদস্যতা। এই বিষয়ের শিক্ষানবিশ বিভ্রান্তির অর্ধেকই অতিথি তালিকায় সারির ধারণা প্রয়োগ করা।"
 },
 "l23-logic": {
  "recapEn": "From the previous step: l23-sets is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l23-sets তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Implication is a promise, not a cause",
  "ideaBn": "Implication একটি প্রতিশ্রুতি, কারণ নয়",
  "noteEn": "'If you score 90, you get an A' is broken in exactly one world: you scored 90 and got no A. Scoring 40 and getting an A does not break it — the promise said nothing about 40. Read every → as a promise with one breaking case and the 'strange' rows stop being strange.",
  "noteBn": "'90 পেলে A পাবে' ঠিক এক জগতেই ভাঙে: 90 পেয়েও A পাওনি। 40 পেয়ে A পাওয়া এটিকে ভাঙে না — প্রতিশ্রুতি 40 নিয়ে কিছু বলেনি। প্রতিটি →-কে একটি মাত্র ভাঙন-ক্ষেত্রসহ প্রতিশ্রুতি হিসেবে পড়ো, তাহলে 'অদ্ভুত' সারিগুলো আর অদ্ভুত লাগবে না।"
 },
 "l23-proofs": {
  "recapEn": "From the previous step: l23-logic is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l23-logic তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A proof is a bridge with no missing planks",
  "ideaBn": "প্রমাণ হলো কোনো তক্তা-ছাড়া সেতু",
  "noteEn": "Examples are walking along the riverbank and noting the bridge held for others. A proof is checking every plank yourself: each step rests on a definition or an earlier result, and a single gap — 'it is obvious that…' — is where marks and correctness both fall through.",
  "noteBn": "উদাহরণ হলো নদীর পাড়ে হেঁটে দেখা সেতুটি অন্যদের জন্য টিকেছে। প্রমাণ হলো প্রতিটি তক্তা নিজে যাচাই করা: প্রতিটি ধাপ একটি সংজ্ঞা বা আগের ফলাফলের উপর দাঁড়ায়, আর একটি মাত্র ফাঁক — 'এটা স্পষ্ট যে…' — সেখানেই নম্বর ও সঠিকতা দুটোই ভেঙে পড়ে।"
 },
 "l23-combinatorics": {
  "recapEn": "From the previous step: l23-proofs is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l23-proofs তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Order is a costume the counting may or may not wear",
  "ideaBn": "ক্রম একটি পোশাক যা গণনা পরতেও পারে, নাও পারে",
  "noteEn": "The same three people are one committee but six podiums. Before any formula, ask whether swapping two chosen items produces a different outcome in the real story. If the story cannot tell the two arrangements apart, the count must not either.",
  "noteBn": "একই তিনজন মানুষ একটি committee কিন্তু ছয়টি podium। যেকোনো সূত্রের আগে জিজ্ঞেস করো, দুটি বাছাই করা জিনিস অদলবদল করলে আসল গল্পে ভিন্ন ফলাফল হয় কিনা। গল্প দুটি সাজানো আলাদা করতে না পারলে, গণনাও পারবে না।"
 },
 "l23-relations-functions": {
  "recapEn": "From the previous step: l23-combinatorics is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l23-combinatorics তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A function is a vending machine, a relation is a noticeboard",
  "ideaBn": "Function হলো vending machine, relation হলো noticeboard",
  "noteEn": "Press B3 on a vending machine and exactly one item drops — that reliability is the function contract. A noticeboard can pin three different notices under your name; nothing breaks. Databases and programs pay for vending-machine reliability wherever a lookup must have one answer.",
  "noteBn": "Vending machine-এ B3 চাপলে ঠিক একটি জিনিস পড়ে — এই নির্ভরযোগ্যতাই function-এর চুক্তি। Noticeboard তোমার নামে তিনটি ভিন্ন নোটিশ আটকাতে পারে; কিছুই ভাঙে না। যেখানেই একটি lookup-এর একটি উত্তর থাকতে হয়, database ও program vending machine-এর নির্ভরযোগ্যতা কিনে নেয়।"
 },
 "l23-graphs-probability": {
  "recapEn": "From the previous step: l23-relations-functions is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l23-relations-functions তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Every edge has two ends — count ends, not edges",
  "ideaBn": "প্রতিটি edge-এর দুটি প্রান্ত — প্রান্ত গণো, edge নয়",
  "noteEn": "Handshakes at a party work the same way: if 5 people report shaking 2, 2, 4, 2, 2 hands, 12 hand-ends were reported but only 6 handshakes happened. Whenever a counting argument involves connections, ask whether you are counting ends or connections — the factor of 2 lives there.",
  "noteBn": "অনুষ্ঠানে করমর্দনও একইভাবে কাজ করে: 5 জন যদি 2, 2, 4, 2, 2 বার হাত মেলানোর কথা বলে, 12টি হাত-প্রান্ত report হয়েছে কিন্তু করমর্দন হয়েছে মাত্র 6টি। যখনই কোনো গণনার যুক্তিতে সংযোগ থাকে, জিজ্ঞেস করো তুমি প্রান্ত গুনছ নাকি সংযোগ — 2-এর উৎপাদক সেখানেই লুকিয়ে।"
 },
 "l24-bigo": {
  "recapEn": "From Level 23: you can count outcomes and read a graph. Level 24 points that counting at programs — how cost grows is now the question.",
  "recapBn": "Level 23 থেকে: তুমি ফলাফল গুনতে ও graph পড়তে পারো। Level 24 সেই গণনা program-এর দিকে তাক করে — খরচ কীভাবে বাড়ে এখন সেটাই প্রশ্ন।",
  "ideaEn": "Complexity is a weather forecast for bigger inputs",
  "ideaBn": "Complexity হলো বড় input-এর আবহাওয়া পূর্বাভাস",
  "noteEn": "Timing today's run is looking out of the window; complexity is the forecast. A program that is 'fast enough' at n = 100 with O(n²) is a storm scheduled for the day n becomes 100,000. Professionals read the forecast and redesign while it is still cheap.",
  "noteBn": "আজকের run-এর সময় মাপা জানালা দিয়ে বাইরে তাকানো; complexity হলো পূর্বাভাস। n = 100-এ O(n²) নিয়ে 'যথেষ্ট দ্রুত' একটি program সেই দিনের জন্য নির্ধারিত ঝড় যেদিন n হবে 100,000। পেশাদাররা পূর্বাভাস পড়ে সস্তা থাকতেই নতুন করে design করেন।"
 },
 "l24-arrays-linked": {
  "recapEn": "From the previous step: l24-bigo is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l24-bigo তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "An array is a street, a linked list is a treasure hunt",
  "ideaBn": "Array একটি রাস্তা, linked list একটি গুপ্তধন শিকার",
  "noteEn": "Houses on a street have numbers — you go straight to No. 500. A treasure hunt gives you a clue that points to the next clue; reaching clue 500 means solving 499 first. Same items stored, completely different cost to reach them: that difference is the whole lesson.",
  "noteBn": "রাস্তার বাড়িগুলোর নম্বর আছে — তুমি সরাসরি 500 নম্বরে যাও। গুপ্তধন শিকারে একটি সূত্র পরের সূত্রের দিকে দেখায়; 500 নম্বর সূত্রে পৌঁছাতে আগের 499টি মেটাতে হয়। একই জিনিস সংরক্ষিত, পৌঁছানোর খরচ সম্পূর্ণ আলাদা: এই পার্থক্যই পুরো পাঠ।"
 },
 "l24-stacks-queues": {
  "recapEn": "From the previous step: l24-arrays-linked is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l24-arrays-linked তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A stack is a plate pile, a queue is a ticket line",
  "ideaBn": "Stack হলো থালার স্তূপ, queue হলো টিকিটের লাইন",
  "noteEn": "You cannot take the bottom plate without moving the top ones — that physical fact is why undo, call returns and bracket matching are stacks. A ticket line serves the front because fairness demands arrival order. When a problem statement mentions either physical picture, the data structure has already been chosen for you.",
  "noteBn": "উপরের থালাগুলো না সরিয়ে নিচের থালা নেওয়া যায় না — এই বাস্তব সত্যই বলে কেন undo, call return ও bracket মেলানো stack। Ticket লাইন সামনের জনকে পরিবেশন করে কারণ ন্যায্যতা আগমনের ক্রম চায়। সমস্যা বিবৃতি এই দুই বাস্তব ছবির যেকোনো একটি উল্লেখ করলেই data structure তোমার জন্য বাছাই হয়ে গেছে।"
 },
 "l24-trees-heaps": {
  "recapEn": "From the previous step: l24-stacks-queues is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l24-stacks-queues তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A BST is a filing cabinet that files by comparison",
  "ideaBn": "BST হলো তুলনা দিয়ে সাজানো ফাইল ক্যাবিনেট",
  "noteEn": "Every drawer decision is one comparison — 'smaller, go left'. The cabinet is fast exactly when the drawers stay shallow and branching; let it degenerate into one long drawer and you have rebuilt the linked list you were avoiding, with extra paperwork.",
  "noteBn": "প্রতিটি drawer সিদ্ধান্ত একটি তুলনা — 'ছোট, বামে যাও'। ক্যাবিনেট দ্রুত ঠিক তখনই যখন drawer অগভীর ও শাখাযুক্ত থাকে; এটিকে একটি লম্বা drawer-এ পর্যবসিত হতে দিলে তুমি এড়াতে চাওয়া linked list-ই বাড়তি কাগজপত্রসহ আবার বানিয়েছ।"
 },
 "l24-hashing-graphs": {
  "recapEn": "From the previous step: l24-trees-heaps is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l24-trees-heaps তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Hashing is a librarian who memorized every shelf",
  "ideaBn": "Hashing হলো প্রতিটি তাক মুখস্থ করা গ্রন্থাগারিক",
  "noteEn": "A searching librarian walks the shelves (O(n)); a hashing librarian converts the book's name directly into its shelf — no walking. The conversion must be consistent and spread books evenly, or one shelf (bucket) becomes a new search problem of its own.",
  "noteBn": "খোঁজা গ্রন্থাগারিক তাক ধরে হাঁটেন (O(n)); hashing গ্রন্থাগারিক বইয়ের নাম সরাসরি তার তাকে বদলে দেন — হাঁটা নেই। রূপান্তরটি সামঞ্জস্যপূর্ণ হতে হবে ও বই সমানভাবে ছড়াতে হবে, নইলে একটি তাক (bucket) নিজেই নতুন অনুসন্ধান সমস্যা হয়ে যায়।"
 },
 "l24-sorting-dp": {
  "recapEn": "From the previous step: l24-hashing-graphs is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l24-hashing-graphs তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "DP is a notebook beside the recursion",
  "ideaBn": "DP হলো recursion-এর পাশে একটি খাতা",
  "noteEn": "Naive recursion is a brilliant student with no notebook who re-derives every lemma on every page. Memoization hands them the notebook: prove it once, write it down, look it up forever after. Almost every 'impossible' exponential problem in your syllabus is this one missing notebook.",
  "noteBn": "সরল recursion হলো খাতা ছাড়া মেধাবী ছাত্র যে প্রতিটি পৃষ্ঠায় প্রতিটি lemma আবার বের করে। Memoization তাকে খাতা ধরিয়ে দেয়: একবার প্রমাণ করো, লিখে রাখো, চিরদিন lookup করো। তোমার syllabus-এর প্রায় প্রতিটি 'অসম্ভব' সূচকীয় সমস্যা এই একটি অনুপস্থিত খাতা।"
 },
 "l25-boolean": {
  "recapEn": "From Level 23: your logic and truth tables return — now each row is a voltage and each connective is a physical gate.",
  "recapBn": "Level 23 থেকে: তোমার logic ও truth table ফিরে আসে — এখন প্রতিটি সারি একটি voltage আর প্রতিটি সংযোজক একটি বাস্তব gate।",
  "ideaEn": "A gate is a truth table with wires",
  "ideaBn": "Gate হলো তারসহ একটি truth table",
  "noteEn": "Nothing new is invented in this level — Level 23's tables simply get voltages. When a circuit confuses you, stop looking at the diagram and write its table: four or eight rows later the confusion has nowhere left to hide.",
  "noteBn": "এই level-এ নতুন কিছু উদ্ভাবিত হয় না — Level 23-এর table শুধু voltage পায়। একটি circuit তোমাকে বিভ্রান্ত করলে diagram দেখা থামিয়ে তার table লেখো: চার বা আট সারি পরে বিভ্রান্তির লুকানোর জায়গা থাকে না।"
 },
 "l25-truth-karnaugh": {
  "recapEn": "From the previous step: l25-boolean is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l25-boolean তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A K-map is a truth table folded so neighbours touch",
  "ideaBn": "K-map হলো ভাঁজ করা truth table যাতে প্রতিবেশীরা ছোঁয়",
  "noteEn": "The flat truth table hides its pattern in a list; the K-map folds the list into a grid where 'differs in one variable' becomes 'sits next to'. Minimization stops being algebra and becomes spotting rectangles — including rectangles that wrap around the edges.",
  "noteBn": "সমতল truth table তার প্যাটার্ন তালিকায় লুকায়; K-map তালিকাটিকে একটি grid-এ ভাঁজ করে যেখানে 'একটি চলকে ভিন্ন' হয়ে যায় 'পাশে বসা'। Minimization বীজগণিত থাকে না, আয়তক্ষেত্র চেনা হয়ে যায় — প্রান্ত মুড়িয়ে যাওয়া আয়তক্ষেত্রসহ।"
 },
 "l25-combinational": {
  "recapEn": "From the previous step: l25-truth-karnaugh is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l25-truth-karnaugh তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "An adder is pencil addition rebuilt in gates",
  "ideaBn": "Adder হলো gate-এ আবার বানানো খাতার যোগ",
  "noteEn": "You already know this algorithm: add the column, write the units, carry the rest. The hardware insight is that 'write the units' is XOR and 'carry the rest' is AND. When a combinational design feels alien, find the pencil algorithm you learned as a child — it is usually hiding inside.",
  "noteBn": "তুমি এই algorithm ইতিমধ্যে জানো: column যোগ করো, একক লেখো, বাকি carry করো। Hardware অন্তর্দৃষ্টি হলো 'একক লেখো' হলো XOR আর 'বাকি carry করো' হলো AND। একটি combinational design অপরিচিত লাগলে শৈশবে শেখা খাতার algorithm খোঁজো — সাধারণত ভেতরেই লুকিয়ে থাকে।"
 },
 "l25-flipflops": {
  "recapEn": "From the previous step: l25-combinational is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l25-combinational তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A flip-flop is a photograph, a latch is a window",
  "ideaBn": "Flip-flop একটি ছবি, latch একটি জানালা",
  "noteEn": "A window (latch) shows whatever is outside while it is open. A photograph (flip-flop) captures one instant and shows that instant until the next click. Digital systems think in photographs: the state of the machine is the album of everything captured at the last clock edge.",
  "noteBn": "একটি জানালা (latch) খোলা থাকলে বাইরের যাই আছে দেখায়। একটি ছবি (flip-flop) একটি মুহূর্ত ধরে ও পরের click পর্যন্ত সেই মুহূর্ত দেখায়। Digital system ছবিতে ভাবে: machine-এর অবস্থা হলো শেষ clock edge-এ ধরা সবকিছুর album।"
 },
 "l25-counters": {
  "recapEn": "From the previous step: l25-flipflops is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l25-flipflops তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A counter is an odometer built from dominoes",
  "ideaBn": "Counter হলো domino দিয়ে বানানো odometer",
  "noteEn": "Each wheel of a car odometer advances the next only when it rolls from 9 back to 0. Ripple bits do the same at 1→0. Once you see the odometer, you can predict any counter's next state — and spot why its bits do not all change at the same instant.",
  "noteBn": "গাড়ির odometer-এর প্রতিটি চাকা পরেরটিকে এগিয়ে দেয় শুধু যখন এটি 9 থেকে 0-তে গড়ায়। Ripple bit 1→0-তে একই কাজ করে। Odometer দেখলে তুমি যেকোনো counter-এর পরের অবস্থা অনুমান করতে পারো — আর কেন তার bit গুলো একই মুহূর্তে বদলায় না তাও বুঝতে পারো।"
 },
 "l25-sequential-design": {
  "recapEn": "From the previous step: l25-counters is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l25-counters তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "State is the past, compressed into a name",
  "ideaBn": "অবস্থা হলো অতীত, একটি নামে সংকুচিত",
  "noteEn": "A well-chosen state answers 'what do I need to know about everything that has happened so far, to behave correctly next?' — and nothing more. Traffic lights need only 'which colour, and how long so far'. If your state list keeps growing, the compression is wrong, not the machine.",
  "noteBn": "একটি ভালোভাবে বাছাই করা অবস্থা উত্তর দেয় 'এ পর্যন্ত যা ঘটেছে তার মধ্যে পরের সঠিক আচরণের জন্য আমার কী জানা দরকার?' — আর কিছুই নয়। Traffic light-এর শুধু লাগে 'কোন রঙ, আর এ পর্যন্ত কতক্ষণ'। তোমার অবস্থা তালিকা বাড়তেই থাকলে সংকোচন ভুল, machine নয়।"
 },
 "l26-cpu-registers": {
  "recapEn": "From Level 25: registers are parallel flip-flops and the counter sequences time. Level 26 puts a fetch-decode-execute engine on top of them.",
  "recapBn": "Level 25 থেকে: register হলো সমান্তরাল flip-flop আর counter সময়কে ক্রম দেয়। Level 26 তাদের উপর একটি fetch-decode-execute ইঞ্জিন বসায়।",
  "ideaEn": "The CPU is a cook with two hands and a huge pantry",
  "ideaBn": "CPU হলো দুই হাতে ও বিশাল ভাণ্ডারসহ একজন রাঁধুনি",
  "noteEn": "Registers are the cook's hands — only a few items can be held at once, but holding is instant. Memory is the pantry: vast, but every trip costs time. Good cooking (and good assembly) plans the trips: bring ingredients in, work with your hands, put results back.",
  "noteBn": "Register হলো রাঁধুনির হাত — একবারে কয়েকটি জিনিসই ধরা যায়, কিন্তু ধরা তাৎক্ষণিক। Memory হলো ভাণ্ডার: বিশাল, কিন্তু প্রতিটি যাত্রায় সময় লাগে। ভালো রান্না (আর ভালো assembly) যাত্রার পরিকল্পনা করে: উপকরণ আনো, হাতে কাজ করো, ফলাফল ফিরিয়ে রাখো।"
 },
 "l26-addressing": {
  "recapEn": "From the previous step: l26-cpu-registers is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l26-cpu-registers তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Addressing modes are ways of giving directions",
  "ideaBn": "Addressing mode হলো দিকনির্দেশ দেওয়ার উপায়",
  "noteEn": "'Bring 5 taka' is immediate. 'Bring the taka from drawer 3' is direct. 'Bring the taka from the drawer whose number is written on the fridge' is indirect. 'Bring the taka from the drawer 2 past the one Rahim points at' is indexed. You have given all four kinds of directions in daily life — the modes just formalize them.",
  "noteBn": "'5 টাকা আনো' হলো immediate। '3 নম্বর drawer থেকে টাকা আনো' হলো direct। 'Fridge-এ লেখা নম্বরের drawer থেকে টাকা আনো' হলো indirect। 'Rahim যেটি দেখাচ্ছে তার 2 পরের drawer থেকে টাকা আনো' হলো indexed। তুমি দৈনন্দিন জীবনে চার ধরনের দিকনির্দেশই দিয়েছ — mode গুলো শুধু তাদের আনুষ্ঠানিক করে।"
 },
 "l26-asm-first": {
  "recapEn": "From the previous step: l26-addressing is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l26-addressing তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Assembly is the machine's diary, written as it happens",
  "ideaBn": "Assembly হলো machine-এর দিনলিপি, ঘটার সঙ্গে সঙ্গে লেখা",
  "noteEn": "High-level code describes intentions ('add these'); assembly is the diary of what physically occurred, register by register. Reading it feels slow because nothing is hidden from you — that slowness is the education. After a month of traces, compiler output and debugger views stop being foreign texts.",
  "noteBn": "High-level code উদ্দেশ্য বর্ণনা করে ('এগুলো যোগ করো'); assembly হলো বাস্তবে যা ঘটেছে তার দিনলিপি, register ধরে। এটি পড়া ধীর লাগে কারণ তোমার থেকে কিছুই লুকানো নয় — সেই ধীরতাই শিক্ষা। এক মাস trace-এর পরে compiler output ও debugger দৃশ্য বিদেশি লেখা থাকে না।"
 },
 "l26-asm-loops": {
  "recapEn": "From the previous step: l26-asm-first is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l26-asm-first তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A loop is a jump that learned manners",
  "ideaBn": "Loop হলো শিষ্টতা শেখা একটি লাফ",
  "noteEn": "Unconditional jumping is chaos (the goto swamp). The loop pattern — a counter, a body, one conditional jump back — is jumping with a contract: 'I will return here exactly while the condition holds, and stop the first time it does not.' Every structured loop in every language is this contract with nicer handwriting.",
  "noteBn": "শর্তহীন লাফ হলো বিশৃঙ্খলা (goto জলা)। Loop প্যাটার্ন — একটি counter, একটি body, পেছনে একটি শর্তাধীন লাফ — হলো চুক্তিসহ লাফ: 'শর্ত থাকা পর্যন্ত আমি ঠিক এখানে ফিরব, আর প্রথমবার না থাকলেই থামব।' প্রতিটি ভাষার প্রতিটি structured loop সুন্দর হাতের লেখায় এই চুক্তি।"
 },
 "l26-interrupts": {
  "recapEn": "From the previous step: l26-asm-loops is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l26-asm-loops তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "An interrupt is a doorbell, polling is standing at the door",
  "ideaBn": "Interrupt হলো দরজার ঘণ্টা, polling হলো দরজায় দাঁড়িয়ে থাকা",
  "noteEn": "Standing at the door all day asking 'anyone there?' works — and wastes the entire day. A doorbell lets you cook, read and sleep until the moment someone actually arrives. Interrupts are the doorbell that let CPUs do useful work between events; the ISR discipline (answer quickly, take the parcel in, close the door) follows from the same picture.",
  "noteBn": "সারাদিন দরজায় দাঁড়িয়ে 'কেউ আছে?' জিজ্ঞেস করা চলে — আর পুরো দিন নষ্ট করে। একটি দরজার ঘণ্টা তোমাকে রান্না, পড়া ও ঘুমের সুযোগ দেয় যতক্ষণ না সত্যিই কেউ আসে। Interrupt হলো সেই ঘণ্টা যা CPU-কে ঘটনার মধ্যে দরকারি কাজ করতে দেয়; ISR শৃঙ্খলা (দ্রুত উত্তর দাও, parcel ভেতরে নাও, দরজা বন্ধ করো) একই ছবি থেকে আসে।"
 },
 "l26-arm-modern": {
  "recapEn": "From the previous step: l26-interrupts is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l26-interrupts তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Load/store is a kitchen rule: ingredients on the counter before cooking",
  "ideaBn": "Load/store হলো রান্নাঘরের নিয়ম: রান্নার আগে উপকরণ counter-এ",
  "noteEn": "x86 lets the cook run to the pantry mid-stir (memory operands) — convenient, chaotic. ARM's rule: everything you will cook with goes on the counter first (registers), cooking happens only there, finished dishes go back (STR). The rule feels strict until you watch a pipeline of cooks work without colliding.",
  "noteBn": "x86 রাঁধুনিকে নাড়ার মাঝে ভাণ্ডারে দৌড়াতে দেয় (memory operand) — সুবিধাজনক, বিশৃঙ্খল। ARM-এর নিয়ম: তুমি যা দিয়ে রান্না করবে সব আগে counter-এ (register), রান্না শুধু সেখানেই হয়, তৈরি খাবার ফেরত যায় (STR)। নিয়মটি কঠোর লাগে যতক্ষণ না এক সারি রাঁধুনিকে সংঘর্ষ ছাড়া কাজ করতে দেখো।"
 },
 "l27-er-relational": {
  "recapEn": "From Level 24: sets, hash tables and B-tree thinking return — now the sets are called tables and the operations have SQL names.",
  "recapBn": "Level 24 থেকে: set, hash table ও B-tree চিন্তা ফিরে আসে — এখন set গুলোকে table বলে আর operation-গুলোর SQL নাম আছে।",
  "ideaEn": "An ER diagram is a sentence you can draw",
  "ideaBn": "একটি ER diagram হলো আঁকা যায় এমন একটি বাক্য",
  "noteEn": "'A student enrolls in many courses; a course has many students' — that sentence IS the design. Entities are its nouns, relationships its verbs, cardinalities its quantities. If you cannot say the sentence plainly, the schema will not save you; if you can, the tables write themselves.",
  "noteBn": "'একজন ছাত্র অনেক course-এ ভর্তি হয়; একটি course-এ অনেক ছাত্র থাকে' — সেই বাক্যটাই design। Entity তার বিশেষ্য, relationship তার ক্রিয়া, cardinality তার পরিমাণ। বাক্যটি সরলভাবে বলতে না পারলে schema তোমাকে বাঁচাবে না; পারলে table গুলো নিজে লেখা হয়ে যায়।"
 },
 "l27-sql-basics": {
  "recapEn": "From the previous step: l27-er-relational is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l27-er-relational তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "SQL is a question, not a set of instructions",
  "ideaBn": "SQL একটি প্রশ্ন, নির্দেশের set নয়",
  "noteEn": "Imperative code tells a machine HOW, step by step. A query describes the answer's shape and lets the engine plan the how — which is why the same query runs fast on an index and slow without one, while meaning exactly the same thing. Learn to read queries as descriptions and the optimizer stops being magic.",
  "noteBn": "Imperative code একটি machine-কে বলে কীভাবে, ধাপে ধাপে। একটি query উত্তরের আকার বর্ণনা করে ও engine-কে কীভাবে পরিকল্পনা করতে দেয় — যার কারণে একই query একটি index-এ দ্রুত ও তা ছাড়া ধীরে চলে, অথচ ঠিক একই অর্থ বহন করে। Query-কে বর্ণনা হিসেবে পড়তে শেখো, optimizer জাদু থাকে না।"
 },
 "l27-sql-joins": {
  "recapEn": "From the previous step: l27-sql-basics is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l27-sql-basics তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "INNER is a guest list with a bouncer, LEFT is a census",
  "ideaBn": "INNER হলো দারোয়ানসহ অতিথি তালিকা, LEFT হলো আদমশুমারি",
  "noteEn": "An inner join reports only relationships that exist — couples at the door, matched or turned away. A left join takes a census of the left table: everyone is counted, partners noted where present. Most reporting bugs are censuses accidentally run as guest lists.",
  "noteBn": "একটি inner join শুধু বিদ্যমান সম্পর্ক report করে — দরজায় জোড়া, মিললে বা ফিরিয়ে দিলে। একটি left join বাম table-এর আদমশুমারি নেয়: সবাই গণনা হয়, সঙ্গী যেখানে আছে লেখা হয়। বেশিরভাগ reporting bug হলো দুর্ঘটনাক্রমে অতিথি তালিকা হিসেবে চালানো আদমশুমারি।"
 },
 "l27-normalization": {
  "recapEn": "From the previous step: l27-sql-joins is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l27-sql-joins তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Normalization gives every fact exactly one home",
  "ideaBn": "Normalization প্রতিটি তথ্যকে ঠিক একটি বাড়ি দেয়",
  "noteEn": "A fact with two homes will eventually receive two different updates and become two facts. Normalization is the zoning law: residential facts (a customer's city) live in the customers table; they may be VISITED by joins, but they may not take up residence in orders.",
  "noteBn": "দুটি বাড়িসহ একটি তথ্য অবশেষে দুটি ভিন্ন update পাবে ও দুটি তথ্য হয়ে যাবে। Normalization হলো zoning আইন: আবাসিক তথ্য (একজন customer-এর শহর) customers table-এ থাকে; তারা join দিয়ে পরিদর্শিত হতে পারে, কিন্তু orders-এ বসবাস নিতে পারে না।"
 },
 "l27-transactions": {
  "recapEn": "From the previous step: l27-normalization is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l27-normalization তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A transaction is a sealed envelope for several changes",
  "ideaBn": "একটি transaction হলো কয়েকটি পরিবর্তনের জন্য একটি সিল করা খাম",
  "noteEn": "Loose pages of a contract can be lost, reordered or read half-signed. Sealed in one envelope, the set arrives whole or not at all, and nobody reads page two before the signing is done. Databases trade in envelopes: the commit is the seal breaking open at the destination, all pages at once.",
  "noteBn": "একটি চুক্তির খোলা পৃষ্ঠা হারাতে, অদলবদল হতে বা অর্ধেক-স্বাক্ষরিত পড়া যেতে পারে। একটি খামে সিল করা হলে set পুরো পৌঁছায় বা একেবারেই নয়, আর স্বাক্ষর শেষ হওয়ার আগে কেউ দ্বিতীয় পৃষ্ঠা পড়ে না। Database খামে ব্যবসা করে: commit হলো গন্তব্যে সিল ভাঙা, সব পৃষ্ঠা একসঙ্গে।"
 },
 "l27-indexing-concurrency": {
  "recapEn": "From the previous step: l27-transactions is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l27-transactions তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "An index is a book's index, paid for in pages",
  "ideaBn": "একটি index হলো একটি বইয়ের সূচি, পৃষ্ঠায় মূল্য দেওয়া",
  "noteEn": "A book's index costs extra pages and must be updated every edition — and nobody proposes removing it, because finding 'photosynthesis' by reading every page is madness. Database indexes are the same bargain in B-tree form; the professional question is never 'index or not' but 'which lookups deserve one'.",
  "noteBn": "একটি বইয়ের সূচি বাড়তি পৃষ্ঠা খরচ করে ও প্রতি সংস্করণে update করতে হয় — আর কেউ তা সরানোর প্রস্তাব দেয় না, কারণ প্রতিটি পৃষ্ঠা পড়ে 'photosynthesis' খোঁজা পাগলামি। Database index B-tree আকারে একই চুক্তি; পেশাদার প্রশ্ন কখনো 'index নাকি নয়' নয়, বরং 'কোন lookup গুলো একটির যোগ্য'।"
 },
 "l28-sdlc": {
  "recapEn": "From Level 27: the shop schema you designed becomes this level's running project — now built the way a team would build it.",
  "recapBn": "Level 27 থেকে: তুমি যেই shop schema design করেছ তা এই level-এর চলমান project হয় — এখন একটি দল যেভাবে বানাত সেভাবে বানানো।",
  "ideaEn": "Phases are the price list of finding out late",
  "ideaBn": "পর্যায় হলো দেরিতে জানার মূল্য তালিকা",
  "noteEn": "Every project 'does' requirements, design and testing — the only choice is whether each happens deliberately and early, or accidentally and late at production prices. The SDLC does not add work; it moves the same work to where it is cheap.",
  "noteBn": "প্রতিটি project requirement, design ও পরীক্ষা 'করে' — একমাত্র পছন্দ হলো প্রতিটি সচেতনভাবে ও আগেভাগে হয়, নাকি দুর্ঘটনাক্রমে ও দেরিতে production মূল্যে। SDLC কাজ যোগ করে না; এটি একই কাজ সেখানে সরায় যেখানে তা সস্তা।"
 },
 "l28-requirements-uml": {
  "recapEn": "From the previous step: l28-sdlc is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l28-sdlc তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A requirement you cannot test is a hope you cannot schedule",
  "ideaBn": "পরীক্ষা করতে না পারা একটি requirement হলো schedule করা যায় না এমন একটি আশা",
  "noteEn": "Teams do not disagree about code half as much as about what the code was FOR. The user story's three parts — role, goal, benefit — plus acceptance criteria turn that argument into a checklist written before the expensive phases begin.",
  "noteBn": "দল code নিয়ে যতটা মতভেদ করে তার অর্ধেকও করে না code কীসের জন্য তা নিয়ে। User story-র তিনটি অংশ — ভূমিকা, লক্ষ্য, উপকার — প্লাস acceptance মানদণ্ড সেই তর্ককে ব্যয়বহুল পর্যায় শুরুর আগে লেখা একটি checklist-এ বদলে দেয়।"
 },
 "l28-design-patterns": {
  "recapEn": "From the previous step: l28-requirements-uml is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l28-requirements-uml তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A pattern is a solution that earned a name",
  "ideaBn": "একটি pattern হলো নাম অর্জন করা একটি সমাধান",
  "noteEn": "Before patterns had names, senior engineers described the same shapes in paragraphs and juniors reinvented them badly. The name is the compression: 'Observer' in a design review transmits structure, roles and trade-offs in one word — provided both sides know the pattern's cost as well as its shape.",
  "noteBn": "Pattern-এর নাম থাকার আগে জ্যেষ্ঠ engineer একই আকার অনুচ্ছেদে বর্ণনা করতেন ও কনিষ্ঠরা সেগুলো খারাপভাবে আবার উদ্ভাবন করত। নাম হলো সংকোচন: একটি design review-তে 'Observer' একটি শব্দে কাঠামো, ভূমিকা ও বিনিময় পৌঁছে দেয় — যদি দুই পাশ pattern-টির আকারের মতো খরচও জানে।"
 },
 "l28-testing": {
  "recapEn": "From the previous step: l28-design-patterns is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l28-design-patterns তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Tests are requirements that run",
  "ideaBn": "Test হলো চলমান requirement",
  "noteEn": "A prose requirement can be nodded at and forgotten; the same sentence as a test executes after every change, forever, without tiring or flattering anyone. That is why engineers say the suite is the most truthful documentation a system has — it is the only documentation that fails loudly when it becomes a lie.",
  "noteBn": "একটি গদ্য requirement-এ মাথা নেড়ে ভুলে যাওয়া যায়; test হিসেবে একই বাক্য প্রতিটি পরিবর্তনের পরে, চিরদিন, ক্লান্ত বা কারো তোষামোদ ছাড়া সম্পাদিত হয়। যার কারণে engineer বলে suite হলো একটি system-এর সবচেয়ে সত্যবাদী নথি — এটি একমাত্র নথি যা মিথ্যা হলে সরবে ব্যর্থ হয়।"
 },
 "l28-git-teamwork": {
  "recapEn": "From the previous step: l28-testing is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l28-testing তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Git history is the team's lab notebook",
  "ideaBn": "Git ইতিহাস হলো দলের lab notebook",
  "noteEn": "Level 18's chain of custody and Level 21's citations are the same virtue in other uniforms: a record a stranger can audit. A clean Git history lets a newcomer reconstruct not just WHAT the code is, but the sequence of reasons it became so — archaeology without guessing.",
  "noteBn": "Level 18-এর হেফাজতের শৃঙ্খল ও Level 21-এর উদ্ধৃতি অন্য পোশাকে একই গুণ: একজন অপরিচিত নিরীক্ষণ করতে পারে এমন একটি রেকর্ড। একটি পরিষ্কার Git ইতিহাস একজন নবাগতকে শুধু code কী তা নয়, তা এমন হওয়ার কারণের অনুক্রম পুনর্গঠন করতে দেয় — অনুমান ছাড়া প্রত্নতত্ত্ব।"
 },
 "l28-agile-docs": {
  "recapEn": "From the previous step: l28-git-teamwork is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l28-git-teamwork তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Ship slices, learn, re-slice",
  "ideaBn": "Slice ship করো, শেখো, আবার slice করো",
  "noteEn": "A year's plan sliced horizontally discovers its misunderstandings at month twelve. The same plan sliced vertically discovers them at week two, when they still cost sentences instead of rewrites — agile is the cost-of-change curve from lesson 1, turned into a calendar.",
  "noteBn": "এক বছরের একটি পরিকল্পনা অনুভূমিকভাবে কাটা হলে তার ভুল বোঝা দ্বাদশ মাসে আবিষ্কার করে। একই পরিকল্পনা উল্লম্বভাবে কাটা হলে দ্বিতীয় সপ্তাহে তা আবিষ্কার করে, যখন তা এখনো পুনর্লেখার বদলে বাক্য খরচ — agile হলো পাঠ 1-এর পরিবর্তনের খরচের বক্ররেখা, একটি calendar-এ বদলানো।"
 },
 "l29-automata": {
  "recapEn": "From Level 23: sets become languages, functions become machines, and proof by contradiction becomes the tool that maps computation's outer boundary.",
  "recapBn": "Level 23 থেকে: set হয় language, function হয় machine, আর contradiction দিয়ে প্রমাণ হয় computation-এর বাইরের সীমানা মানচিত্র করা tool।",
  "ideaEn": "A state is everything the past is allowed to mean",
  "ideaBn": "একটি state হলো অতীতের যা অর্থ হতে দেওয়া হয় তার সবটা",
  "noteEn": "Two different histories that land in the same state are, to the machine, the same past — and must share the same future verdicts on every continuation. That is why states are designed as summaries: anything the verdicts will never need is forgotten on purpose, and that deliberate forgetting is exactly the model's power limit.",
  "noteBn": "একই state-এ পৌঁছানো দুটি ভিন্ন ইতিহাস machine-এর কাছে একই অতীত — আর প্রতিটি ধারাবাহিকতায় একই ভবিষ্যৎ রায় ভাগ করতে হবে। যার কারণে state সার হিসেবে design করা হয়: রায়ের কখনো দরকার হবে না এমন যেকোনো কিছু ইচ্ছাকৃতভাবে ভুলে যাওয়া হয়, আর সেই সচেতন ভোলাই ঠিক model-টির ক্ষমতার সীমা।"
 },
 "l29-regular": {
  "recapEn": "From the previous step: l29-automata is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l29-automata তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Regex describes; the pumping lemma delimits",
  "ideaBn": "Regex বর্ণনা করে; pumping lemma সীমা টানে",
  "noteEn": "Half of theory is construction (build the machine/pattern), half is boundary (prove no such machine exists). The pumping lemma is the boundary tool: it converts 'I cannot find a DFA' — a confession — into 'no DFA exists' — a theorem.",
  "noteBn": "Theory-র অর্ধেক হলো নির্মাণ (machine/pattern বানাও), অর্ধেক হলো সীমানা (প্রমাণ করো এমন machine নেই)। Pumping lemma হলো সীমানা tool: এটি 'আমি একটি DFA খুঁজে পাচ্ছি না' — একটি স্বীকারোক্তি — কে 'কোনো DFA নেই' — একটি theorem — এ বদলে দেয়।"
 },
 "l29-cfg": {
  "recapEn": "From the previous step: l29-regular is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l29-regular তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A stack remembers in the order it must forget",
  "ideaBn": "একটি stack যেই ক্রমে ভুলতে হবে সেই ক্রমে মনে রাখে",
  "noteEn": "Nesting is LIFO by nature: the last bracket opened is the first that must close. A stack is not an arbitrary upgrade to a DFA — it is the minimal memory whose discipline matches nesting's discipline, which is why one stack buys exactly the context-free class, no more (two independent counts defeat it) and no less.",
  "noteBn": "বাসা বাঁধা প্রকৃতিতে LIFO: শেষ খোলা বন্ধনীই প্রথম বন্ধ হতে হবে। একটি stack DFA-র একটি যথেচ্ছ upgrade নয় — এটি সর্বনিম্ন স্মৃতি যার শৃঙ্খলা বাসা বাঁধার শৃঙ্খলার সঙ্গে মেলে, যার কারণে একটি stack ঠিক context-free শ্রেণি কেনে, বেশি নয় (দুটি স্বাধীন গণনা তাকে হারায়) ও কমও নয়।"
 },
 "l29-turing": {
  "recapEn": "From the previous step: l29-cfg is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l29-cfg তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A tape turns remembering into writing",
  "ideaBn": "একটি tape মনে রাখাকে লেখায় বদলে দেয়",
  "noteEn": "Each machine class so far was a memory discipline: none (DFA — just state), LIFO (PDA — stack), and now none-at-all (TM — a workshop bench where anything written can be revisited in any order). Computation's full power arrived not from a faster controller but from the freedom to externalize memory without discipline.",
  "noteBn": "এখন পর্যন্ত প্রতিটি machine শ্রেণি ছিল একটি স্মৃতি শৃঙ্খলা: কোনোটিই নয় (DFA — শুধু state), LIFO (PDA — stack), আর এখন একদম কোনোটিই নয় (TM — একটি কর্মশালা bench যেখানে লেখা যেকোনো কিছু যেকোনো ক্রমে আবার যাওয়া যায়)। Computation-এর পূর্ণ ক্ষমতা দ্রুততর নিয়ন্ত্রক থেকে আসেনি, এসেছে শৃঙ্খলা ছাড়া স্মৃতি বাইরে রাখার স্বাধীনতা থেকে।"
 },
 "l29-decidability": {
  "recapEn": "From the previous step: l29-turing is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l29-turing তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Some questions have no algorithm — and that is a theorem",
  "ideaBn": "কিছু প্রশ্নের কোনো algorithm নেই — আর তা একটি theorem",
  "noteEn": "Every previous level expanded what you can do; this one proves a boundary no one can cross, using the same contradiction engine as Level 23's irrationality proofs. Knowing where the wall is theorem-hard, rather than effort-hard, is what separates engineering judgement from wishful procurement.",
  "noteBn": "আগের প্রতিটি level তুমি যা করতে পারো তা প্রসারিত করেছে; এটি এমন একটি সীমানা প্রমাণ করে যা কেউ পার হতে পারে না, Level 23-এর অমূলদতা প্রমাণের একই সাংঘর্ষিকতা engine ব্যবহার করে। প্রাচীর কোথায় theorem-কঠিন, প্রচেষ্টা-কঠিন নয়, তা জানাই engineering বিচারকে ইচ্ছাপূরণ সংগ্রহ থেকে আলাদা করে।"
 },
 "l29-complexity": {
  "recapEn": "From the previous step: l29-decidability is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l29-decidability তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "NP is the class of problems whose answers are easy to check",
  "ideaBn": "NP হলো যেসব সমস্যার উত্তর যাচাই সহজ তাদের শ্রেণি",
  "noteEn": "A jigsaw's finished picture is verified at a glance by anyone; assembling it is the work. NP captures exactly that asymmetry — Sudoku, proofs, schedules, subsets — and P vs NP asks whether checking can always be converted, secretly, into finding. A millennium of mathematics says the conversion, if it exists, is not obvious.",
  "noteBn": "একটি jigsaw-এর সমাপ্ত ছবি যে কেউ এক নজরে যাচাই করে; তা জোড়া দেওয়াই কাজ। NP ঠিক সেই অসমতা ধরে — Sudoku, প্রমাণ, সময়সূচি, subset — আর P বনাম NP জিজ্ঞেস করে যাচাই সবসময় গোপনে খোঁজায় বদলানো যায় কিনা। এক সহস্রাব্দের গণিত বলে রূপান্তর, থাকলেও, স্পষ্ট নয়।"
 },
 "l30-lexer": {
  "recapEn": "From Level 29: the CFG and parse tree return as working machinery; from Level 26: registers and the stack return as the code generator's target.",
  "recapBn": "Level 29 থেকে: CFG ও parse tree কার্যকর যন্ত্র হিসেবে ফেরে; Level 26 থেকে: register ও stack code generator-এর লক্ষ্য হিসেবে ফেরে।",
  "ideaEn": "The lexer teaches the compiler to stop seeing letters",
  "ideaBn": "Lexer compiler-কে অক্ষর দেখা থামাতে শেখায়",
  "noteEn": "Every later phase works at a higher abstraction because the lexer absorbed the character-level mess once, completely, with a proof-shaped argument (regular languages) that its job needs no more power than a DFA. Phase separation in compilers is abstraction with a theorem behind it.",
  "noteBn": "প্রতিটি পরের পর্যায় একটি উচ্চতর বিমূর্ততায় কাজ করে কারণ lexer character-স্তরের জঞ্জাল একবার, সম্পূর্ণভাবে, একটি প্রমাণ-আকারের যুক্তিসহ (regular language) শোষণ করেছে যে তার কাজে একটি DFA-র বেশি ক্ষমতা লাগে না। Compiler-এ পর্যায় পৃথকীকরণ হলো পেছনে একটি theoremসহ বিমূর্ততা।"
 },
 "l30-parser": {
  "recapEn": "From the previous step: l30-lexer is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l30-lexer তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Precedence is not a rule — it is a shape",
  "ideaBn": "Precedence একটি নিয়ম নয় — এটি একটি আকার",
  "noteEn": "Beginners imagine the evaluator consulting a precedence table mid-computation. Real compilers encode precedence ONCE, in the grammar's layers, so every tree built thereafter is unambiguous by construction — the rule disappears into the shape of the data, which is the deepest trick in this whole level.",
  "noteBn": "শিক্ষানবিশরা কল্পনা করে evaluator হিসাবের মাঝখানে একটি precedence table দেখছে। আসল compiler precedence একবার, grammar-এর স্তরে সঙ্কেতিত করে, তাই তারপর বানানো প্রতিটি গাছ নির্মাণ অনুযায়ী অনস্পষ্ট — নিয়মটি data-এর আকারে অদৃশ্য হয়ে যায়, যা এই পুরো level-এর গভীরতম কৌশল।"
 },
 "l30-semantic": {
  "recapEn": "From the previous step: l30-parser is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l30-parser তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Syntax asks 'is it shaped right?'; semantics asks 'does it mean anything?'",
  "ideaBn": "Syntax জিজ্ঞেস করে 'আকার ঠিক আছে?'; semantic জিজ্ঞেস করে 'এর কোনো অর্থ আছে?'",
  "noteEn": "'Colorless green ideas sleep furiously' is grammatical English and semantic nonsense — the sentence that taught linguistics the syntax/semantics split is also the compiler's org chart. Keeping the phases separate is what lets each be simple, testable, and precise in its complaints.",
  "noteBn": "'Colorless green ideas sleep furiously' ব্যাকরণগত English ও অর্থগত অর্থহীনতা — যেই বাক্য ভাষাবিজ্ঞানকে syntax/semantic বিভাজন শিখিয়েছে তা compiler-এর সংগঠন চার্টও। পর্যায় আলাদা রাখাই প্রতিটিকে সরল, পরীক্ষণযোগ্য, ও তার অভিযোগে নিখুঁত হতে দেয়।"
 },
 "l30-intermediate": {
  "recapEn": "From the previous step: l30-semantic is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l30-semantic তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "The tree is for thinking; the list is for machines",
  "ideaBn": "গাছ চিন্তার জন্য; তালিকা machine-এর জন্য",
  "noteEn": "Programmers nest expressions because humans read structure; machines execute sequences. The IR is the compiler's translation between those two cognitive shapes — and every analysis that follows (who uses t1? can t2 be folded?) is easier on the flat list because each fact sits on its own line.",
  "noteBn": "Programmer expression বাসা বাঁধে কারণ মানুষ কাঠামো পড়ে; machine অনুক্রম সম্পাদন করে। IR হলো সেই দুটি জ্ঞানীয় আকারের মধ্যে compiler-এর অনুবাদ — আর তার পরের প্রতিটি বিশ্লেষণ (t1 কে ব্যবহার করে? t2 ভাঁজ করা যায়?) সমতল তালিকায় সহজ কারণ প্রতিটি তথ্য তার নিজের লাইনে বসে।"
 },
 "l30-codegen": {
  "recapEn": "From the previous step: l30-intermediate is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l30-intermediate তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "The back end is a translator, not an author",
  "ideaBn": "Back end একজন অনুবাদক, লেখক নয়",
  "noteEn": "Every decision about meaning was made in earlier phases; code generation's only freedom is HOW the target expresses decisions already taken. That constraint is what makes back ends testable: same IR in, semantics out — any value difference is a bug in translation, never a difference of opinion.",
  "noteBn": "অর্থ নিয়ে প্রতিটি সিদ্ধান্ত আগের পর্যায়ে নেওয়া হয়েছে; code generation-এর একমাত্র স্বাধীনতা হলো target ইতিমধ্যে নেওয়া সিদ্ধান্ত কীভাবে প্রকাশ করে। সেই সীমাবদ্ধতাই back end-কে পরীক্ষণযোগ্য করে: একই IR ভেতরে, অর্থবিজ্ঞান বাইরে — যেকোনো মান পার্থক্য অনুবাদের bug, মতের পার্থক্য কখনো নয়।"
 },
 "l30-optimization": {
  "recapEn": "From the previous step: l30-codegen is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l30-codegen তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Optimization may change everything except the meaning",
  "ideaBn": "Optimization অর্থ ছাড়া সবকিছু বদলাতে পারে",
  "noteEn": "Every other phase translates faithfully; this one rewrites — and is therefore held to a proof standard the others are not. Each transformation carries its law and its domain ('for all integers', 'when no side effects'), and the professional skill is reciting the domain, not just spotting the pattern.",
  "noteBn": "প্রতিটি অন্য পর্যায় বিশ্বস্তভাবে অনুবাদ করে; এটি আবার লেখে — আর তাই অন্যরা নয় এমন একটি প্রমাণ মানে ধরা হয়। প্রতিটি রূপান্তর তার নিয়ম ও তার ক্ষেত্র বহন করে ('সব পূর্ণসংখ্যার জন্য', 'যখন কোনো পার্শ্বপ্রতিক্রিয়া নেই'), আর পেশাদার দক্ষতা হলো শুধু ধাঁচ ধরা নয়, ক্ষেত্র আবৃত্তি করা।"
 },
 "l31-search": {
  "recapEn": "From Level 24: the graph and the queue return — BFS is now called 'search', and it is the first AI algorithm you will meet.",
  "recapBn": "Level 24 থেকে: graph ও queue ফেরে — BFS এখন 'search' নামে পরিচিত, আর এটি তুমি দেখবে এমন প্রথম AI algorithm।",
  "ideaEn": "Search is graph walking with a promise",
  "ideaBn": "Search হলো একটি প্রতিশ্রুতিসহ graph হাঁটা",
  "noteEn": "BFS and DFS walk the same graph; what differs is the promise each keeps. BFS promises optimality (in hops) and pays in memory; DFS promises frugality and pays in path quality. Choosing between them is stating which promise your problem needs — the first genuinely AI-shaped decision in this level.",
  "noteBn": "BFS ও DFS একই graph হাঁটে; পার্থক্য প্রতিটি যেই প্রতিশ্রুতি রাখে তাতে। BFS সর্বোত্তমতার (লাফে) প্রতিশ্রুতি দেয় ও memory দিয়ে মূল্য দেয়; DFS মিতব্যয়িতার প্রতিশ্রুতি দেয় ও path গুণমান দিয়ে মূল্য দেয়। তাদের মধ্যে বাছাই হলো তোমার সমস্যার কোন প্রতিশ্রুতি লাগে তা বলা — এই level-এর প্রথম সত্যিকারের AI-আকারের সিদ্ধান্ত।"
 },
 "l31-knowledge": {
  "recapEn": "From the previous step: l31-search is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l31-search তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Rules turn logic into an engine",
  "ideaBn": "নিয়ম logic-কে একটি engine-এ বদলে দেয়",
  "noteEn": "An implication on paper is a claim; the same implication in a rule list is a machine part. Forward chaining's loop — fire everything that applies, add the results, repeat — is the smallest program that deserves the name 'inference engine', and every expert system ever deployed is this loop with a bigger KB.",
  "noteBn": "কাগজে একটি implication একটি দাবি; নিয়ম তালিকায় একই implication একটি machine অংশ। Forward chaining-এর loop — প্রযোজ্য সব চালাও, ফলাফল যোগ করো, আবার করো — হলো সবচেয়ে ছোট program যা 'inference engine' নামের যোগ্য, আর স্থাপন করা প্রতিটি expert system হলো একটি বড় KBসহ এই loop।"
 },
 "l31-supervised": {
  "recapEn": "From the previous step: l31-knowledge is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l31-knowledge তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Fitting is not understanding — it is disciplined guessing",
  "ideaBn": "মানানো বোঝা নয় — এটি শৃঙ্খলাবদ্ধ অনুমান",
  "noteEn": "The line does not know what a mark is; it knows how to minimize squared error on five points. Keeping that modesty straight — the model as a function fitted to evidence, judged on unseen evidence — is the difference between using ML and being used by its marketing.",
  "noteBn": "রেখা জানে না একটি নম্বর কী; এটি জানে পাঁচটি বিন্দুতে বর্গ ত্রুটি কীভাবে কমাতে হয়। সেই বিনয় সোজা রাখা — প্রমাণে মানানো একটি function হিসেবে model, না-দেখা প্রমাণে বিচার করা — হলো ML ব্যবহার করা ও তার marketing দ্বারা ব্যবহৃত হওয়ার মধ্যে পার্থক্য।"
 },
 "l31-unsupervised": {
  "recapEn": "From the previous step: l31-supervised is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l31-supervised তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Clustering proposes; people dispose",
  "ideaBn": "Clustering প্রস্তাব করে; মানুষ সিদ্ধান্ত নেয়",
  "noteEn": "A centroid is arithmetic, but a segment is a claim about the world. K-means' honesty is that it stops at the arithmetic — the moment a presentation renames Cluster 1 as 'our loyal base' without checking who is in it, the science has ended and the storytelling has begun.",
  "noteBn": "একটি centroid হলো পাটিগণিত, কিন্তু একটি segment হলো বিশ্ব নিয়ে একটি দাবি। K-means-এর সততা হলো এটি পাটিগণিতে থামে — যেই মুহূর্তে একটি উপস্থাপনা কে তাতে আছে যাচাই না করে Cluster 1-এর নাম 'আমাদের loyal ভিত্তি' দেয়, বিজ্ঞান শেষ হয়েছে ও গল্প বলা শুরু হয়েছে।"
 },
 "l31-neural": {
  "recapEn": "From the previous step: l31-unsupervised is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l31-unsupervised তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A perceptron draws one line; depth redraws the map",
  "ideaBn": "একটি perceptron একটি রেখা আঁকে; গভীরতা মানচিত্র আবার আঁকে",
  "noteEn": "Every unit in every network is still just a weighted sum and a threshold (or its smooth cousin). The revolution was never a smarter unit — it was stacking ordinary units so that earlier layers redraw the input map until the final unit's one line suffices.",
  "noteBn": "প্রতিটি network-এর প্রতিটি একক এখনো শুধু একটি ওজনযুক্ত যোগ ও একটি সীমা (বা তার মসৃণ জ্ঞাতি)। বিপ্লব কখনো একটি বুদ্ধিমান একক ছিল না — এটি ছিল সাধারণ একক স্তর করা যাতে আগের স্তর input মানচিত্র আবার আঁকে যতক্ষণ না চূড়ান্ত এককের একটি রেখা যথেষ্ট হয়।"
 },
 "l31-evaluation": {
  "recapEn": "From the previous step: l31-neural is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l31-neural তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Accuracy is one question; precision and recall are the other two",
  "ideaBn": "Accuracy একটি প্রশ্ন; precision ও recall হলো অন্য দুটি",
  "noteEn": "Every classifier makes exactly two kinds of mistake — crying wolf (FP) and missing the wolf (FN) — and every metric is a policy about which mistake you fear. The confusion matrix is the honest object because it shows both mistake counts before any ratio compresses them into a single boast.",
  "noteBn": "প্রতিটি classifier ঠিক দুই ধরনের ভুল করে — নেকড়ে বলে চিৎকার (FP) ও নেকড়ে মিস করা (FN) — আর প্রতিটি পরিমাপ হলো কোন ভুল তুমি ভয় পাও তা নিয়ে একটি নীতি। Confusion matrix হলো সৎ বস্তু কারণ কোনো অনুপাত তাদের একটি বড়াইয়ে সংকুচিত করার আগে এটি দুটি ভুল গণনাই দেখায়।"
 }
};

export const P5_TIPS: Record<string, L4Tips> = {
 "l23-sets": {
  "en": [
   "In Python, convert a list to a set to remove duplicates in one move: list(set(xs)) — then sort if you need order back.",
   "Draw the Venn diagram BEFORE writing symbols on any two-set word problem; the picture chooses the operation for you."
  ],
  "bn": [
   "Python-এ এক চালেই duplicate সরাতে list-কে set-এ বদলাও: list(set(xs)) — ক্রম ফেরত চাইলে তারপর sort করো।",
   "যেকোনো দুই-set শব্দ-সমস্যায় প্রতীক লেখার আগে Venn diagram আঁকো; ছবিটাই তোমার জন্য operation বেছে দেয়।"
  ]
 },
 "l23-logic": {
  "en": [
   "Memorize implication by its single false row (T,F) — every other row is true; derive the rest from that.",
   "When an exam asks for an equivalent statement, write the contrapositive first; it is equivalent by construction."
  ],
  "bn": [
   "Implication মনে রাখো তার একমাত্র মিথ্যা সারি (T,F) দিয়ে — বাকি প্রতিটি সারি সত্য; বাকিটা সেখান থেকে বের করো।",
   "পরীক্ষায় সমতুল্য বিবৃতি চাইলে আগে contrapositive লেখো; এটি গঠনগতভাবেই সমতুল্য।"
  ]
 },
 "l23-proofs": {
  "en": [
   "Stuck on a direct proof for 10 minutes? Flip to the contrapositive — same theorem, often a downhill path.",
   "Write the assumption and the target at the top of every proof attempt; most failed proofs are just lost maps."
  ],
  "bn": [
   "Direct প্রমাণে 10 মিনিট আটকে গেলে contrapositive-এ উল্টে যাও — একই উপপাদ্য, প্রায়ই ঢালু পথ।",
   "প্রতিটি প্রমাণ চেষ্টার উপরে অনুমান ও লক্ষ্য লিখে রাখো; বেশিরভাগ ব্যর্থ প্রমাণ শুধু হারানো মানচিত্র।"
  ]
 },
 "l23-combinatorics": {
  "en": [
   "When unsure, shrink the numbers: enumerate P vs C for n=3, k=2 by hand once and the formulas become permanent.",
   "math.comb and math.perm give exact integers — use them to check hand calculations, never floats."
  ],
  "bn": [
   "সন্দেহ হলে সংখ্যা ছোট করো: n=3, k=2-এর জন্য P বনাম C একবার হাতে গুনে দেখো, সূত্র স্থায়ী হয়ে যাবে।",
   "math.comb ও math.perm সঠিক integer দেয় — হাতের হিসাব যাচাই করতে ব্যবহার করো, float কখনো নয়।"
  ]
 },
 "l23-relations-functions": {
  "en": [
   "To test 'is it a function', sort pairs by input and look for a repeated input with different outputs.",
   "For relation properties, test the SMALLEST sets first (2 elements) — counterexamples live there."
  ],
  "bn": [
   "'এটি কি function' পরীক্ষা করতে pair গুলো input অনুযায়ী সাজিয়ে ভিন্ন output-সহ পুনরাবৃত্ত input খোঁজো।",
   "Relation বৈশিষ্ট্যের জন্য আগে সবচেয়ে ছোট set (2 element) পরীক্ষা করো — counterexample সেখানেই থাকে।"
  ]
 },
 "l23-graphs-probability": {
  "en": [
   "Sanity check any degree list: the sum must be even. An odd sum means a counting error, guaranteed.",
   "Use Fraction for exact probabilities in code — 1/6 as a float hides the exactness examiners want."
  ],
  "bn": [
   "যেকোনো degree তালিকার সূস্থতা যাচাই: যোগফল জোড় হতেই হবে। বিজোড় যোগফল মানেই গণনার ভুল, নিশ্চিত।",
   "Code-এ সঠিক probability-র জন্য Fraction ব্যবহার করো — float হিসেবে 1/6 সেই সঠিকতা লুকায় যা পরীক্ষক চান।"
  ]
 },
 "l24-bigo": {
  "en": [
   "Count loops, not lines: nesting depth of loops over n is your first complexity estimate.",
   "Memorize log₂ landmarks: 2¹⁰ ≈ 10³, 2²⁰ ≈ 10⁶, 2³⁰ ≈ 10⁹ — binary search questions become mental arithmetic."
  ],
  "bn": [
   "লাইন নয়, loop গণো: n-এর উপর loop-এর বাসা-বাঁধা গভীরতাই তোমার প্রথম complexity অনুমান।",
   "log₂ মাইলফলক মুখস্থ রাখো: 2¹⁰ ≈ 10³, 2²⁰ ≈ 10⁶, 2³⁰ ≈ 10⁹ — binary search প্রশ্ন মানসিক গণিত হয়ে যায়।"
  ]
 },
 "l24-arrays-linked": {
  "en": [
   "Draw the boxes-and-arrows picture before coding any linked operation — pointer bugs are invisible in text, obvious in pictures.",
   "In Python, collections.deque is the production chained structure; hand-rolled nodes are for learning and interviews."
  ],
  "bn": [
   "যেকোনো linked operation code করার আগে বাক্স-ও-তীরের ছবি আঁকো — pointer bug লেখায় অদৃশ্য, ছবিতে স্পষ্ট।",
   "Python-এ collections.deque হলো production শৃঙ্খলিত কাঠামো; হাতে বানানো node শেখা ও interview-এর জন্য।"
  ]
 },
 "l24-stacks-queues": {
  "en": [
   "In interviews, say the discipline first ('this is LIFO because…') — it earns the marks before the code does.",
   "Test bracket matchers on three cases: balanced, wrong-order '([)]', and a lone closer — the third is where most code crashes."
  ],
  "bn": [
   "Interview-তে আগে শৃঙ্খলার নাম বলো ('এটি LIFO কারণ…') — code-এর আগেই নম্বর আসে।",
   "Bracket matcher তিন ক্ষেত্রে পরীক্ষা করো: balanced, ভুল-ক্রম '([)]', আর একা একটি closer — তৃতীয়টিতেই বেশিরভাগ code ভাঙে।"
  ]
 },
 "l24-trees-heaps": {
  "en": [
   "Verify any hand-drawn BST by writing its inorder — if it is not sorted, a key is misplaced. Instant self-check.",
   "heapq is a MIN-heap; for max-priority, push negative values or tuples (-priority, item)."
  ],
  "bn": [
   "যেকোনো হাতে-আঁকা BST তার inorder লিখে যাচাই করো — sorted না হলে একটি key ভুল জায়গায়। তাৎক্ষণিক আত্ম-যাচাই।",
   "heapq একটি MIN-heap; সর্বোচ্চ অগ্রাধিকারের জন্য ঋণাত্মক মান বা tuple (-priority, item) push করো।"
  ]
 },
 "l24-hashing-graphs": {
  "en": [
   "In Python, 'x in some_set' is the idiomatic O(1) membership test — convert lists to sets before repeated lookups.",
   "For BFS/DFS exam traces, write three columns — queue/stack, seen, output — and update all three every step."
  ],
  "bn": [
   "Python-এ 'x in some_set' হলো প্রচলিত O(1) সদস্যতা পরীক্ষা — বারবার lookup-এর আগে list-কে set-এ বদলাও।",
   "BFS/DFS পরীক্ষা trace-এর জন্য তিনটি column লেখো — queue/stack, seen, output — আর প্রতিটি ধাপে তিনটিই update করো।"
  ]
 },
 "l24-sorting-dp": {
  "en": [
   "Before coding DP, write the recurrence in symbols (f(n) = f(n−1) + f(n−2)) — if you cannot, you do not yet see the subproblem.",
   "functools.lru_cache is production-grade memoization in Python; use it instead of hand-rolled dicts unless the table itself is the lesson."
  ],
  "bn": [
   "DP code করার আগে recurrence প্রতীকে লেখো (f(n) = f(n−1) + f(n−2)) — না পারলে তুমি এখনো উপসমস্যা দেখোনি।",
   "functools.lru_cache Python-এ production-মানের memoization; table-টাই পাঠ না হলে হাতে বানানো dict-এর বদলে এটি ব্যবহার করো।"
  ]
 },
 "l25-boolean": {
  "en": [
   "Write truth tables in counting order (00, 01, 10, 11) — examiners' tables and your code loops use the same order, so rows align.",
   "XOR = 'difference', XNOR = 'equality' — name gates by what they detect and tables become memory-free."
  ],
  "bn": [
   "Truth table গণনার ক্রমে লেখো (00, 01, 10, 11) — পরীক্ষকের table ও তোমার code loop একই ক্রম ব্যবহার করে, তাই সারি মেলে।",
   "XOR = 'পার্থক্য', XNOR = 'সমতা' — gate-এর নাম দাও তারা যা শনাক্ত করে তাতে, table মুখস্থমুক্ত হয়ে যায়।"
  ]
 },
 "l25-truth-karnaugh": {
  "en": [
   "Always hunt the largest groups first (8s, then 4s, then 2s) — small groups first leads to redundant terms.",
   "Check your minimized expression against two or three table rows before trusting it — a 20-second verification examiners reward."
  ],
  "bn": [
   "সবসময় আগে সবচেয়ে বড় দল খোঁজো (8, তারপর 4, তারপর 2) — ছোট দল আগে নিলে অতিরিক্ত পদ আসে।",
   "বিশ্বাস করার আগে তোমার minimized রাশি দু-তিনটি table সারির সঙ্গে মেলাও — 20 সেকেন্ডের যাচাই যা পরীক্ষক পুরস্কৃত করেন।"
  ]
 },
 "l25-combinational": {
  "en": [
   "Verify adder code against decimal: test 5+3, 15+1 (overflow carry!), and 0+0 — the overflow case is where designs confess.",
   "MUX select lines are an address: read them as a binary number naming the chosen input."
  ],
  "bn": [
   "Adder code দশমিকের সঙ্গে যাচাই করো: 5+3, 15+1 (overflow carry!), আর 0+0 পরীক্ষা করো — overflow ক্ষেত্রেই design স্বীকার করে।",
   "MUX select line একটি ঠিকানা: বাছাই করা input-এর নাম দেওয়া binary সংখ্যা হিসেবে পড়ো।"
  ]
 },
 "l25-flipflops": {
  "en": [
   "For waveform questions, draw a vertical line at each rising edge and read D's value on that line — never average, never anticipate.",
   "In code simulations, model the edge as a method call (as here): if Q changes anywhere else, your model is a latch."
  ],
  "bn": [
   "Waveform প্রশ্নের জন্য প্রতিটি rising edge-এ একটি খাড়া রেখা টানো ও সেই রেখায় D-এর মান পড়ো — কখনো গড় নয়, আগাম অনুমান নয়।",
   "Code simulation-এ edge-কে method call হিসেবে model করো (এখানের মতো): Q অন্য কোথাও বদলালে তোমার model একটি latch।"
  ]
 },
 "l25-counters": {
  "en": [
   "Read counter outputs MSB→LSB left-to-right as printed, but remember FF0 (rightmost printed bit here) toggles fastest.",
   "Modulo questions: states = 2^n for a plain counter; any other modulus needs explicit wrap logic — say so in answers."
  ],
  "bn": [
   "Counter output ছাপা অবস্থায় MSB→LSB বাম-থেকে-ডানে পড়ো, কিন্তু মনে রাখো FF0 (এখানে ডানদিকের ছাপা bit) সবচেয়ে দ্রুত উল্টায়।",
   "Modulo প্রশ্ন: সাধারণ counter-এর অবস্থা = 2^n; অন্য যেকোনো modulus-এ স্পষ্ট wrap যুক্তি লাগে — উত্তরে তা বলো।"
  ]
 },
 "l25-sequential-design": {
  "en": [
   "Name states by meaning (WAIT_FOR_COIN), never by bit pattern — encoding is the LAST design step.",
   "Count your (state × input) cells and ensure every one has a row; missing rows are where exam marks and product bugs both live."
  ],
  "bn": [
   "অবস্থার নাম অর্থ দিয়ে দাও (WAIT_FOR_COIN), কখনো bit প্যাটার্ন দিয়ে নয় — encoding হলো শেষ design ধাপ।",
   "তোমার (অবস্থা × input) cell গণনা করো ও নিশ্চিত করো প্রতিটির একটি সারি আছে; অনুপস্থিত সারিতেই পরীক্ষার নম্বর ও product bug দুটোই থাকে।"
  ]
 },
 "l26-cpu-registers": {
  "en": [
   "Trace on paper with a two-column table (instruction | registers after) — examiners award the table, not just the final answer.",
   "Read brackets aloud as 'contents of' until it is reflexive — half of all assembly errors are bracket errors."
  ],
  "bn": [
   "দুই-column ছক (instruction | পরের register) দিয়ে কাগজে trace করো — পরীক্ষক শুধু চূড়ান্ত উত্তর নয়, ছকটিকে নম্বর দেন।",
   "Bracket উচ্চস্বরে 'এর বিষয়বস্তু' বলে পড়ো যতক্ষণ না তা স্বয়ংক্রিয় হয় — সব assembly ভুলের অর্ধেক bracket ভুল।"
  ]
 },
 "l26-addressing": {
  "en": [
   "Annotate every traced instruction with its mode name in the margin — examiners give method marks for the naming.",
   "For 8086, always write both lines: EA = …, physical = segment×16 + EA. Half the traps live in the second line."
  ],
  "bn": [
   "Trace করা প্রতিটি instruction-এর পাশে তার mode-এর নাম লেখো — পরীক্ষক নামের জন্য পদ্ধতি নম্বর দেন।",
   "8086-এর জন্য সবসময় দুটি লাইন লেখো: EA = …, physical = segment×16 + EA। ফাঁদের অর্ধেক দ্বিতীয় লাইনে থাকে।"
  ]
 },
 "l26-asm-first": {
  "en": [
   "Keep a register table beside every listing you read; update it per line, never in your head.",
   "Assemble the listing locally and change ONE immediate (30 → 31): the exit code becomes 43 — proof the trace in your head matches the machine."
  ],
  "bn": [
   "পড়া প্রতিটি listing-এর পাশে একটি register ছক রাখো; প্রতি লাইনে update করো, কখনো মাথায় নয়।",
   "Listing-টি locally assemble করো ও একটি immediate বদলাও (30 → 31): exit code হয় 43 — প্রমাণ যে তোমার মাথার trace machine-এর সঙ্গে মেলে।"
  ]
 },
 "l26-asm-loops": {
  "en": [
   "Give each register ONE job per listing and write the job in the header comment (RCX = counter, RAX = sum) — role confusion is the top assembly bug.",
   "When a loop misbehaves, trace the counter column only, first: most loop bugs are off-by-one in the counter, not in the body."
  ],
  "bn": [
   "প্রতি listing-এ প্রতিটি register-কে একটি কাজ দাও ও header comment-এ কাজটি লেখো (RCX = counter, RAX = sum) — ভূমিকা বিভ্রান্তি শীর্ষ assembly bug।",
   "একটি loop খারাপ আচরণ করলে আগে শুধু counter column trace করো: বেশিরভাগ loop bug body-তে নয়, counter-এ off-by-one।"
  ]
 },
 "l26-interrupts": {
  "en": [
   "For sequence questions, anchor on the matched pair: state is pushed before the jump and popped by IRET — if an option breaks the pair, it is wrong.",
   "EOI is the receipt: forgetting it silences that interrupt line — a favourite examiner trap and a real-world bug alike."
  ],
  "bn": [
   "অনুক্রম প্রশ্নের জন্য মিলানো জোড়ায় ভিত্তি রাখো: অবস্থা লাফের আগে push হয় ও IRET দিয়ে pop হয় — একটি বিকল্প জোড়া ভাঙলে তা ভুল।",
   "EOI হলো রসিদ: ভুলে গেলে ওই interrupt line নীরব হয়ে যায় — পরীক্ষকের প্রিয় ফাঁদ ও আসল জগতের bug দুটোই।"
  ]
 },
 "l26-arm-modern": {
  "en": [
   "When reading any new architecture, ask its three questions first: how many registers, can ALU ops touch memory, how wide are instructions — the dialect reveals itself.",
   "Emulators like this lesson's are the professional learning tool: 30 lines of Python make an architecture's rules executable and testable."
  ],
  "bn": [
   "যেকোনো নতুন architecture পড়ার সময় আগে তার তিন প্রশ্ন জিজ্ঞেস করো: কতটি register, ALU op memory ছোঁতে পারে কিনা, instruction কত প্রশস্ত — উপভাষা নিজেকে প্রকাশ করে।",
   "এই পাঠের মতো emulator হলো পেশাদার শেখার হাতিয়ার: 30 লাইন Python একটি architecture-এর নিয়মকে সম্পাদনযোগ্য ও পরীক্ষাযোগ্য করে।"
  ]
 },
 "l27-er-relational": {
  "en": [
   "Underline keys in every schema you sketch on paper — examiners look for them first, and so do reviewers.",
   "Name tables plural nouns (students) and keys boringly (id, student_id) — schema clarity is a professional courtesy."
  ],
  "bn": [
   "কাগজে আঁকা প্রতিটি schema-তে key-এর নিচে দাগ দাও — পরীক্ষক আগে সেগুলোই খোঁজেন, reviewer-রাও তাই।",
   "Table-এর নাম বহুবচন বিশেষ্য (students) ও key-এর নাম একঘেয়ে (id, student_id) রাখো — schema স্পষ্টতা একটি পেশাদার সৌজন্য।"
  ]
 },
 "l27-sql-basics": {
  "en": [
   "Write WHERE predicates on paper as logic first (subject = 'Math' ∧ score ≥ 60) — Level 23 fluency prevents most wrong-result bugs.",
   "Always add ORDER BY when a human will read the output; 'it looked sorted in testing' is not a guarantee."
  ],
  "bn": [
   "WHERE predicate আগে logic হিসেবে কাগজে লেখো (subject = 'Math' ∧ score ≥ 60) — Level 23 সাবলীলতা বেশিরভাগ ভুল-ফলাফল bug রোধ করে।",
   "মানুষ output পড়লে সবসময় ORDER BY যোগ করো; 'পরীক্ষায় sorted দেখাচ্ছিল' কোনো নিশ্চয়তা নয়।"
  ]
 },
 "l27-sql-joins": {
  "en": [
   "Before running any join, predict the row count from the unmatched rows on both sides — the fastest join sanity check there is.",
   "COUNT(*) counts rows in the group; COUNT(column) counts non-NULL values — after a LEFT JOIN that distinction IS the answer."
  ],
  "bn": [
   "যেকোনো join চালানোর আগে দুই পাশের অমিল row থেকে row সংখ্যা অনুমান করো — দ্রুততম join সূস্থতা যাচাই।",
   "COUNT(*) দলের row গণনা করে; COUNT(column) অ-NULL মান গণনা করে — LEFT JOIN-এর পরে সেই পার্থক্যই উত্তর।"
  ]
 },
 "l27-normalization": {
  "en": [
   "Say each FD aloud as 'X determines Y' and ask 'is X a key here?' — that one question operationalizes 2NF, 3NF and BCNF.",
   "After decomposing, always verify the join-back: the original must be recoverable losslessly, or you have not normalized, you have shredded."
  ],
  "bn": [
   "প্রতিটি FD উচ্চস্বরে 'X, Y নির্ধারণ করে' বলে জিজ্ঞেস করো 'X কি এখানে একটি key?' — সেই একটি প্রশ্ন 2NF, 3NF ও BCNF-কে কার্যকর করে।",
   "ভাগ করার পরে সবসময় join-back যাচাই করো: মূলটি lossless ফিরে পাওয়া যেতে হবে, নইলে তুমি normalize করোনি, ছিঁড়ে ফেলেছ।"
  ]
 },
 "l27-transactions": {
  "en": [
   "Keep transactions short and never wait for user input inside one — locks held during a coffee break are a production incident genre.",
   "In code review, find the invariant first ('total money is constant'), then check the transaction boundary covers every statement that could break it."
  ],
  "bn": [
   "Transaction ছোট রাখো ও একটির ভেতরে কখনো user input-এর অপেক্ষা করো না — coffee বিরতির সময় ধরা lock একটি production incident ধারা।",
   "Code review-তে আগে অপরিবর্তনীয় নিয়ম খোঁজো ('মোট টাকা ধ্রুব'), তারপর যাচাই করো transaction সীমানা তা ভাঙতে পারে এমন প্রতিটি statement cover করে কিনা।"
  ]
 },
 "l27-indexing-concurrency": {
  "en": [
   "EXPLAIN is a habit, not a rescue: run it when you WRITE the query, not when the ticket arrives.",
   "Composite indexes follow the leftmost-prefix rule — an index on (city, date) serves city filters and city+date filters, not date alone."
  ],
  "bn": [
   "EXPLAIN একটি অভ্যাস, উদ্ধার নয়: ticket এলে নয়, query লেখার সময় চালাও।",
   "Composite index leftmost-prefix নিয়ম অনুসরণ করে — (city, date)-এর একটি index city ছাঁকনি ও city+date ছাঁকনি সেবা করে, শুধু date নয়।"
  ]
 },
 "l28-sdlc": {
  "en": [
   "In exam answers, justify the model from the scenario's requirement stability and risk — never from fashion.",
   "Maintenance is the longest phase and the one beginners forget to budget: most of a system's life is after 'done'."
  ],
  "bn": [
   "পরীক্ষার উত্তরে model-কে পরিস্থিতির requirement স্থিতিশীলতা ও ঝুঁকি থেকে যুক্তিসঙ্গত করো — fashion থেকে কখনো নয়।",
   "রক্ষণাবেক্ষণ সবচেয়ে দীর্ঘ পর্যায় ও শিক্ষানবিশরা বাজেট করতে ভুলে যায় এমনটি: একটি system-এর জীবনের বেশিরভাগ 'শেষ'-এর পরে।"
  ]
 },
 "l28-requirements-uml": {
  "en": [
   "Keep a requirement's reason attached ('so that…') — when priorities collide, the benefit is the tiebreaker.",
   "One diagram per question: structure questions get class diagrams, behaviour questions get sequence diagrams; a diagram answering everything answers nothing."
  ],
  "bn": [
   "একটি requirement-এর কারণ সংযুক্ত রাখো ('যাতে…') — অগ্রাধিকার সংঘর্ষ হলে উপকারই টাইব্রেকার।",
   "প্রতি প্রশ্নে একটি diagram: কাঠামো প্রশ্নে class diagram, আচরণ প্রশ্নে sequence diagram; সবকিছুর উত্তর দেওয়া একটি diagram কিছুরই উত্তর দেয় না।"
  ]
 },
 "l28-design-patterns": {
  "en": [
   "Learn patterns problem-first: memorize each pattern's SYMPTOM ('new reactions keep arriving') before its class diagram.",
   "In interviews, name the pattern AND its cost — reciting benefits only is the junior tell."
  ],
  "bn": [
   "Pattern সমস্যা-প্রথমে শেখো: তার class diagram-এর আগে প্রতিটি pattern-এর লক্ষণ ('নতুন প্রতিক্রিয়া আসতেই থাকে') মুখস্থ করো।",
   "Interview-তে pattern-এর নাম ও তার খরচ দুটোই বলো — শুধু উপকার আবৃত্তি করা কনিষ্ঠের লক্ষণ।"
  ]
 },
 "l28-testing": {
  "en": [
   "Name tests after the behaviour and boundary: test_clamp_at_zero tells a failure story before you open the file.",
   "When a bug is found in production, its first fix is a failing test reproducing it — then the code fix makes it pass, and it can never silently return."
  ],
  "bn": [
   "Test-এর নাম আচরণ ও সীমানা দিয়ে দাও: test_clamp_at_zero file খোলার আগে একটি ব্যর্থতার গল্প বলে।",
   "Production-এ একটি bug পাওয়া গেলে তার প্রথম সমাধান হলো তা পুনর্উত্পাদন করা একটি ব্যর্থ test — তারপর code সমাধান তা পাস করায়, আর তা কখনো নীরবে ফিরতে পারে না।"
  ]
 },
 "l28-git-teamwork": {
  "en": [
   "Commit when a small story completes, not when the clock says so — the unit is a coherent change.",
   "Write the commit message's first line as the changelog entry you'd want read aloud in the incident channel."
  ],
  "bn": [
   "একটি ছোট গল্প শেষ হলে commit করো, ঘড়ি বললে নয় — একক হলো একটি সুসঙ্গত পরিবর্তন।",
   "Commit বার্তার প্রথম লাইন এমন changelog entry হিসেবে লেখো যা তুমি incident channel-এ জোরে পড়া শুনতে চাও।"
  ]
 },
 "l28-agile-docs": {
  "en": [
   "End every sprint with a demo to a real user — slides about software are not software.",
   "Keep decision records one page long: context, decision, consequence. Future maintainers read pages; they skip tomes."
  ],
  "bn": [
   "প্রতিটি sprint একজন আসল user-এর কাছে demo দিয়ে শেষ করো — software নিয়ে slide software নয়।",
   "সিদ্ধান্ত রেকর্ড এক পৃষ্ঠা লম্বা রাখো: প্রসঙ্গ, সিদ্ধান্ত, পরিণতি। ভবিষ্যৎ রক্ষণাবেক্ষক পৃষ্ঠা পড়ে; তারা গ্রন্থ এড়িয়ে যায়।"
  ]
 },
 "l29-automata": {
  "en": [
   "Annotate every state with its meaning sentence ('seen a, awaiting b') — graders and future-you both navigate by them.",
   "Always add the dead state explicitly rather than leaving transitions 'obvious' — total δ is part of the definition."
  ],
  "bn": [
   "প্রতিটি state-এ তার অর্থ বাক্য লেখো ('a দেখেছি, b-এর অপেক্ষায়') — নম্বরদাতা ও ভবিষ্যৎ-তুমি দুজনেই তা দিয়ে পথ চেনে।",
   "Transition 'স্পষ্ট' বলে ছেড়ে না দিয়ে সবসময় dead state স্পষ্টভাবে যোগ করো — পূর্ণ δ সংজ্ঞার অংশ।"
  ]
 },
 "l29-regular": {
  "en": [
   "For non-regularity proofs, always exhibit the witness string in terms of p (aᵖbᵖ), then let the lemma choose the split — your job is only to pump to a contradiction.",
   "When writing regex for a DFA-known language, translate state meanings into pattern parts: the star is always a loop in the machine."
  ],
  "bn": [
   "অ-regularity প্রমাণের জন্য সবসময় p-এর ভাষায় সাক্ষী string দেখাও (aᵖbᵖ), তারপর lemma-কে ভাগ বাছতে দাও — তোমার কাজ শুধু একটি সাংঘর্ষিকতায় pump করা।",
   "একটি DFA-জানা language-এর জন্য regex লিখলে state অর্থকে pattern অংশে অনুবাদ করো: star সবসময় machine-এর একটি loop।"
  ]
 },
 "l29-cfg": {
  "en": [
   "Design CFGs from the string's structure inward: matched pairs around a centre (aSb) or a split into independent halves (SS) — the two great production shapes.",
   "Always test a candidate grammar with an intruder string it must reject, not only members it must accept."
  ],
  "bn": [
   "String-এর কাঠামো থেকে ভেতরে CFG design করো: একটি কেন্দ্রের চারদিকে মিলানো জোড়া (aSb) বা স্বাধীন অর্ধেকে ভাগ (SS) — দুটি মহান production আকার।",
   "একটি প্রার্থী grammar-কে সবসময় এমন একটি অনুপ্রবেশকারী string দিয়ে পরীক্ষা করো যা তার প্রত্যাখ্যান করা উচিত, শুধু গ্রহণ করা উচিত এমন সদস্য দিয়ে নয়।"
  ]
 },
 "l29-turing": {
  "en": [
   "Describe TMs in the three-part exam style: what the head does, what marks it leaves, when it halts — detail of δ is rarely the marks' location.",
   "Unary inputs make hand traces feasible: always test a TM design on 0, 1 and 2 marks before trusting it."
  ],
  "bn": [
   "TM তিন-অংশের পরীক্ষা style-এ বর্ণনা করো: head কী করে, কী দাগ রেখে যায়, কখন থামে — δ-র বিবরণ কদাচিৎ নম্বরের অবস্থান।",
   "Unary input হাতে trace সম্ভব করে: একটি TM design বিশ্বাস করার আগে সবসময় 0, 1 ও 2 দাগে পরীক্ষা করো।"
  ]
 },
 "l29-decidability": {
  "en": [
   "Write the halting proof from the D construction outward; memorized prose collapses under exam pressure, the construction does not.",
   "Whenever a claim says 'for ALL programs/inputs', reach for diagonalization or Rice — universality is the tell."
  ],
  "bn": [
   "Halting প্রমাণ D নির্মাণ থেকে বাইরের দিকে লেখো; মুখস্থ গদ্য পরীক্ষার চাপে ভেঙে পড়ে, নির্মাণ পড়ে না।",
   "যখনই একটি দাবি 'সব program/input-এর জন্য' বলে, diagonalization বা Rice-এর দিকে যাও — সার্বজনীনতাই লক্ষণ।"
  ]
 },
 "l29-complexity": {
  "en": [
   "State NP's definition by certificates in exams — it is shorter and less error-prone than the nondeterministic-machine version.",
   "Draw reduction arrows with the mantra 'solver flows forward, hardness flows back' — most lost marks are reversed arrows."
  ],
  "bn": [
   "পরীক্ষায় NP-এর সংজ্ঞা certificate দিয়ে বলো — তা nondeterministic-machine সংস্করণের চেয়ে ছোট ও কম ত্রুটিপূর্ণ।",
   "'Solver সামনে প্রবাহিত হয়, কঠিনতা পেছনে' মন্ত্র দিয়ে reduction তীর আঁকো — বেশিরভাগ হারানো নম্বর হলো উল্টানো তীর।"
  ]
 },
 "l30-lexer": {
  "en": [
   "Write token patterns in a table with examples and near-misses (total2, ==, 007) — lexers are tested at pattern edges.",
   "Keep a catch-all ERROR pattern last: unmatched characters must be REPORTED, never silently skipped (silent skipping hides attacks and typos alike)."
  ],
  "bn": [
   "উদাহরণ ও near-miss (total2, ==, 007)সহ একটি table-এ token pattern লেখো — lexer pattern প্রান্তে পরীক্ষিত হয়।",
   "শেষে একটি catch-all ERROR pattern রাখো: অমিল character report করতে হবে, কখনো নীরবে এড়ানো নয় (নীরব এড়ানো আক্রমণ ও typo দুটোই লুকায়)।"
  ]
 },
 "l30-parser": {
  "en": [
   "Draw the tree before coding the parser — if you cannot draw it for the tricky input, the grammar is not stratified enough yet.",
   "One function per non-terminal, named after it (parse_E, parse_T, parse_F): the code should read as the grammar's portrait."
  ],
  "bn": [
   "Parser code করার আগে গাছ আঁকো — কঠিন input-এর জন্য আঁকতে না পারলে grammar এখনো যথেষ্ট স্তরিত নয়।",
   "প্রতি non-terminal-এ একটি function, তার নামে নামকরণ (parse_E, parse_T, parse_F): code grammar-এর প্রতিকৃতি হিসেবে পড়া উচিত।"
  ]
 },
 "l30-semantic": {
  "en": [
   "When an error confuses you, classify it first (shape/meaning/value) — the classification usually names the fix.",
   "Scopes nest like blocks: resolve a name in the innermost symbol table first, then outward — shadowing is this rule, not a bug."
  ],
  "bn": [
   "একটি ত্রুটি বিভ্রান্ত করলে আগে শ্রেণিবিন্যাস করো (আকার/অর্থ/মান) — শ্রেণিবিন্যাস সাধারণত সমাধানের নাম দেয়।",
   "Scope block-এর মতো বাসা বাঁধে: একটি নাম আগে ভেতরের symbol table-এ মেটাও, তারপর বাইরে — shadowing হলো এই নিয়ম, bug নয়।"
  ]
 },
 "l30-intermediate": {
  "en": [
   "Number temporaries in creation order and never reuse a name for a different value in the same listing — SSA discipline prevents a whole bug family.",
   "When hand-writing TAC in exams, generate strictly bottom-up and cross off each subtree as it becomes a temp."
  ],
  "bn": [
   "তৈরির ক্রমে সাময়িকের নম্বর দাও ও একই তালিকায় ভিন্ন মানের জন্য কখনো একটি নাম পুনরায় ব্যবহার করো না — SSA শৃঙ্খলা একটি পুরো bug পরিবার রোধ করে।",
   "পরীক্ষায় হাতে TAC লিখলে কঠোরভাবে নিচ থেকে ওপরে বানাও ও প্রতিটি উপগাছ সাময়িক হওয়ার সঙ্গে সঙ্গে কেটে দাও।"
  ]
 },
 "l30-codegen": {
  "en": [
   "Simulate the stack on paper beside the emitted code for one example per operator — stack depth errors announce themselves immediately.",
   "For non-commutative operators, write 'pop right, pop left' in the code comment; it is the most-swapped pair in student back ends."
  ],
  "bn": [
   "প্রতি operator-এ একটি উদাহরণের জন্য নির্গত code-এর পাশে কাগজে stack simulate করো — stack গভীরতা ত্রুটি সঙ্গে সঙ্গে নিজেকে জানায়।",
   "অ-বিনিময়যোগ্য operator-এর জন্য code comment-এ 'ডান pop, বাম pop' লেখো; এটি ছাত্র back end-এ সবচেয়ে বেশি অদলবদল হওয়া জোড়া।"
  ]
 },
 "l30-optimization": {
  "en": [
   "Keep a personal list of LEGAL identities with their side conditions — exams test the conditions, practitioners debug by them.",
   "Verify an optimization by differential testing: run original and optimized on boundary inputs (0, 1, negatives) and diff every output."
  ],
  "bn": [
   "তাদের পার্শ্ব শর্তসহ আইনি পরিচয়ের একটি ব্যক্তিগত তালিকা রাখো — পরীক্ষা শর্ত পরীক্ষা করে, অনুশীলনকারী তা দিয়ে debug করে।",
   "একটি optimization পার্থক্য পরীক্ষা দিয়ে যাচাই করো: মূল ও optimized সীমানা input (0, 1, ঋণাত্মক)-এ চালাও ও প্রতিটি output তুলনা করো।"
  ]
 },
 "l31-search": {
  "en": [
   "Always state the frontier structure when naming a search: 'BFS (queue)' / 'DFS (stack)' — examiners and reviewers both check it.",
   "Reconstruct paths from the parent map, never by re-searching — the map already contains the proof."
  ],
  "bn": [
   "একটি search-এর নাম দেওয়ার সময় সবসময় frontier কাঠামো বলো: 'BFS (queue)' / 'DFS (stack)' — পরীক্ষক ও reviewer দুজনেই তা যাচাই করে।",
   "Parent map থেকে path পুনর্গঠন করো, কখনো আবার অনুসন্ধান করে নয় — map-এই ইতিমধ্যে প্রমাণ আছে।"
  ]
 },
 "l31-knowledge": {
  "en": [
   "Trace KB questions pass by pass, writing the fact set after each pass — the fixpoint pass (no change) is part of the answer.",
   "Keep facts and rules in separate lists even on paper; mixing them is how premise errors sneak in."
  ],
  "bn": [
   "KB প্রশ্ন pass ধরে trace করো, প্রতিটি pass-এর পরে তথ্য set লিখে — fixpoint pass (কোনো পরিবর্তন নয়) উত্তরের অংশ।",
   "কাগজেও তথ্য ও নিয়ম আলাদা তালিকায় রাখো; তাদের মেশানো হলো যেভাবে ভিত্তি ত্রুটি ঢুকে যায়।"
  ]
 },
 "l31-supervised": {
  "en": [
   "Always plot or tabulate the points before fitting: a slope computed on a curve-shaped cloud is a number without a meaning.",
   "State the data range beside every prediction — '11.91 at x = 6, fitted on x ∈ [1, 5]' is the honest format."
  ],
  "bn": [
   "মানানোর আগে সবসময় বিন্দু plot বা তালিকা করো: একটি বক্র-আকারের মেঘে হিসাব করা ঢাল হলো অর্থ ছাড়া একটি সংখ্যা।",
   "প্রতিটি ভবিষ্যদ্বাণীর পাশে data সীমা বলো — 'x = 6-তে 11.91, x ∈ [1, 5]-এ মানানো' হলো সৎ format।"
  ]
 },
 "l31-unsupervised": {
  "en": [
   "Scale features before clustering when units differ (age in years vs income in taka) — raw distance lets the biggest unit rule the geometry.",
   "Sketch the points for small data: your eye is a legitimate clustering auditor at n = 6, and it catches absurd assignments instantly."
  ],
  "bn": [
   "একক ভিন্ন হলে clustering-এর আগে feature scale করো (বছরে বয়স বনাম টাকায় আয়) — কাঁচা দূরত্ব সবচেয়ে বড় একককে geometry শাসন করতে দেয়।",
   "ছোট data-র জন্য বিন্দু sketch করো: n = 6-তে তোমার চোখ একটি বৈধ clustering নিরীক্ষক, আর এটি অদ্ভুত বরাদ্দ সঙ্গে সঙ্গে ধরে।"
  ]
 },
 "l31-neural": {
  "en": [
   "Plot the four corners for any 2-input Boolean claim before arguing — separability is visible, and visible beats verbal.",
   "When a network 'will not learn', check separability/representation first, learning rate second, epochs last."
  ],
  "bn": [
   "যেকোনো 2-input Boolean দাবির জন্য তর্কের আগে চারটি কোণ plot করো — পৃথকযোগ্যতা দৃশ্যমান, আর দৃশ্যমান মৌখিককে হারায়।",
   "একটি network 'শিখবে না' হলে আগে পৃথকযোগ্যতা/উপস্থাপনা, দ্বিতীয়ত learning rate, শেষে epoch যাচাই করো।"
  ]
 },
 "l31-evaluation": {
  "en": [
   "Compute the matrix by hand once per problem before touching formulas — most metric errors are denominator errors, and the matrix exposes them.",
   "In any report, demand the matrix (or the class counts) behind a metric; a lone percentage is marketing until then."
  ],
  "bn": [
   "সূত্র ছোঁয়ার আগে প্রতি সমস্যায় একবার হাতে matrix হিসাব করো — বেশিরভাগ পরিমাপ ত্রুটি হর ত্রুটি, আর matrix তাদের প্রকাশ করে।",
   "যেকোনো report-এ একটি পরিমাপের পেছনের matrix (বা শ্রেণি গণনা) দাবি করো; ততক্ষণ একটি একক শতাংশ হলো marketing।"
  ]
 }
};
