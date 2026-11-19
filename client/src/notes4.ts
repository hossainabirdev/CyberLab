// Recap + Important Note + Tips & Tricks — PHASE 4 lessons (rendered by LessonView
// through the same callouts as the Level 4 rework).
import type { L4Note, L4Tips } from "./catalog7";

export const P4_NOTES: Record<string, L4Note> = {
 "l12-discovery": {
  "recapEn": "From the previous step: l12-reading-cve is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l12-reading-cve তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A scanner is a witness, not a judge",
  "ideaBn": "Scanner সাক্ষী, বিচারক নয়",
  "noteEn": "A scanner reports what it could observe from where it stood, with the access it was given. Think of it as a witness describing a house from the street: 'a window looked open'. A professional still walks up, checks the window, and asks whether anything valuable sits behind it. Findings are claims you have verified; scanner output is only where verification starts.",
  "noteBn": "একটি scanner যা পর্যবেক্ষণ করতে পেরেছে তাই বলে — যেখানে দাঁড়িয়েছিল, যেই প্রবেশাধিকার দেওয়া হয়েছিল। এটি রাস্তা থেকে একটি বাড়ি বর্ণনা করা সাক্ষীর মতো: 'একটি জানালা খোলা মনে হলো'। পেশাদার তবু এগিয়ে যায়, জানালাটি যাচাই করে, আর জিজ্ঞাসা করে পেছনে মূল্যবান কিছু আছে কিনা। Finding হলো যাচাই করা দাবি; scanner output শুধু যাচাই শুরুর জায়গা।"
 },
 "l12-cvss-scoring": {
  "recapEn": "From the previous step: Vulnerability Discovery: Scanning Your Own Lab, Honestly is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: দুর্বলতা আবিষ্কার: নিজের Lab scan করা, সততার সঙ্গে তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Severity is weather, risk is YOUR roof",
  "ideaBn": "তীব্রতা আবহাওয়া, ঝুঁকি তোমার ছাদ",
  "noteEn": "A storm warning (CVSS) is the same for the whole city, but damage depends on your roof: a 9.8 in a product you never installed is rain on someone else's street; a 7.5 on your one exposed server is a leak over your own bed. Professionals read the forecast, then look at their own roof — inventory and exposure — before buying buckets.",
  "noteBn": "ঝড়ের সতর্কতা (CVSS) পুরো শহরের জন্য একই, কিন্তু ক্ষতি তোমার ছাদের উপর নির্ভর করে: তুমি কখনো install করোনি এমন product-এর 9.8 অন্যের রাস্তায় বৃষ্টি; তোমার একমাত্র exposed server-এর 7.5 তোমার নিজের বিছানার উপরে ফুটো। পেশাদার পূর্বাভাস পড়ে, তারপর নিজের ছাদের দিকে তাকায় — inventory ও exposure — বালতি কেনার আগে।"
 },
 "l12-cwe-cpe": {
  "recapEn": "From the previous step: CVSS v3.1 and v4.0: Scoring Severity Without Lying to Yourself is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: CVSS v3.1 ও v4.0: নিজেকে না ঠকিয়ে তীব্রতা মাপা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l12-validation-fp": {
  "recapEn": "From the previous step: CWE and CPE: Naming the Weakness and the Product Precisely is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: CWE ও CPE: দুর্বলতা ও product-এর নাম নিখুঁতভাবে তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Crying wolf is a cost, not a style",
  "ideaBn": "মিথ্যা সতর্কতা একটি খরচ, ধরন নয়",
  "noteEn": "Every false Critical pages a tired engineer, burns a maintenance window, and teaches the organisation to ignore the scanner — including the day it tells the truth. Validation is not slowness; it is what makes your real findings land with force. The analyst whose findings are always true gets budget; the one whose are 'mostly scanner noise' gets muted.",
  "noteBn": "প্রতিটি ভুয়া Critical একজন ক্লান্ত engineer-কে জাগায়, একটি maintenance window পোড়ায়, আর প্রতিষ্ঠানকে scanner উপেক্ষা করতে শেখায় — যেদিন তা সত্য বলবে সেদিনও। যাচাই ধীরগতি নয়; তা-ই তোমার আসল finding গুলোকে জোর দেয়। যার finding সবসময় সত্য, সে budget পায়।"
 },
 "l12-asset-criticality": {
  "recapEn": "From the previous step: Validation and False Positives: Proving a Finding Before It Costs Someone a Weekend is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: যাচাই ও False Positive: একটি finding কারো সাপ্তাহিক ছুটি নষ্ট করার আগেই প্রমাণ করা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l12-patch-management": {
  "recapEn": "From the previous step: Asset Criticality: The Same Flaw Is Not the Same Risk Twice is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: সম্পদের গুরুত্ব: একই ত্রুটি দুইবার একই ঝুঁকি নয় তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l12-remediation-workflow": {
  "recapEn": "From the previous step: Patch Management: The Cadence That Makes Fixes Stick is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Patch Management: Fix টেকসই করা ছন্দ তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Closure is a claim, and claims need evidence",
  "ideaBn": "বন্ধ করা একটি দাবি, আর দাবিতে প্রমাণ লাগে",
  "noteEn": "Teams close tickets to make dashboards green; attackers do not read dashboards. The only honest closure is a retest result attached to the finding. If your process lets 'patched' be typed instead of proven, it will eventually be typed on a day nobody patched anything — and that finding will be the breach report's first line.",
  "noteBn": "দল dashboard সবুজ করতে ticket বন্ধ করে; আক্রমণকারী dashboard পড়ে না। একমাত্র সৎ বন্ধ হলো finding-এর সঙ্গে যুক্ত retest ফল। তোমার প্রক্রিয়া 'patched' প্রমাণের বদলে লিখতে দিলে, একদিন কেউ কিছু patch না করলেও তা লেখা হবে — আর সেই finding-ই breach report-এর প্রথম লাইন হবে।"
 },
 "l12-remediation-verification": {
  "recapEn": "From the previous step: Remediation Workflow and the Vulnerability Management Lifecycle is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Remediation কর্মপ্রবাহ ও দুর্বলতা ব্যবস্থাপনার জীবনচক্র তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l12-reporting": {
  "recapEn": "From the previous step: Remediation Verification and the Vulnerability Management Lifecycle is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Remediation যাচাই ও দুর্বলতা ব্যবস্থাপনার জীবনচক্র তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l13-scope-roe": {
  "recapEn": "Level 12's Final is passed; Level 13 (Penetration Testing Methodology) starts here. Nothing from later levels is assumed.",
  "recapBn": "Level 12-এর Final pass হয়েছে; Level 13 এখান থেকে শুরু। পরের level-এর কিছুই ধরা হয়নি।",
  "ideaEn": "The RoE is a seatbelt you sign yourself",
  "ideaBn": "RoE তোমার নিজের সই করা seatbelt",
  "noteEn": "Beginners feel rules slow them down. Professionals know the RoE is what lets them work FAST: inside the lines, no hesitation, no second-guessing, no legal fear at 2 a.m. Every excluded technique was excluded by a person protecting something real — usually production stability or other people's data.",
  "noteBn": "শিক্ষানবিশ মনে করে নিয়ম ধীর করে। পেশাদার জানে RoE-ই তাকে দ্রুত কাজ করতে দেয়: লাইনের ভেতরে দ্বিধা নেই, আইনি ভয় নেই রাত ২টায়ও। বাদ দেওয়া প্রতিটি কৌশল বাস্তব কিছু রক্ষা করতেই বাদ — সাধারণত production-এর স্থিতি বা অন্যের data।"
 },
 "l13-asset-inventory": {
  "recapEn": "From the previous step: Scope and Rules of Engagement: The Contract Before the First Packet is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Scope ও Rules of Engagement: প্রথম packet-এর আগের চুক্তি তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l13-recon": {
  "recapEn": "From the previous step: Asset Inventory for Testers: The Map Is a Deliverable is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Tester-দের জন্য Asset Inventory: মানচিত্র একটি deliverable তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l13-enumeration": {
  "recapEn": "From the previous step: Reconnaissance and Discovery: Mapping the Lab Before Touching It is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Reconnaissance ও Discovery: Lab ছোঁয়ার আগে তার মানচিত্র তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l13-vuln-validation": {
  "recapEn": "From the previous step: Enumeration: Turning Open Ports into Understood Services is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Enumeration: খোলা port-কে বোঝা service-এ পরিণত করা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l13-exploitation": {
  "recapEn": "From the previous step: Vulnerability Validation in an Engagement: From Scanner Lead to Finding is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: একটি Engagement-এ দুর্বলতা যাচাই: Scanner সূত্র থেকে Finding তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Proof is a photograph, not a move-in",
  "ideaBn": "প্রমাণ একটি ছবি, বসবাস নয়",
  "noteEn": "Think of exploitation proof like photographing a broken lock for the landlord: you show the door opens — you do not move into the flat, rearrange the furniture, and invite friends. The photo (request/response evidence) is the deliverable; everything past it is you living in someone else's system.",
  "noteBn": "Exploitation প্রমাণকে বাড়িওয়ালার জন্য ভাঙা তালার ছবি তোলা ভাবো: দরজা খোলে তা দেখাও — flat-এ উঠে যাও না, আসবাব বদলাও না, বন্ধু ডাকো না। ছবি (request/response প্রমাণ)-ই deliverable; তার বাইরে সবকিছু অন্যের system-এ বসবাস।"
 },
 "l13-post-exploitation": {
  "recapEn": "From the previous step: Controlled Exploitation in the Lab: Proving Impact Without Breaking the Rules is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Lab-এ নিয়ন্ত্রিত Exploitation: নিয়ম না ভেঙে প্রভাব প্রমাণ করা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l13-workflow-14": {
  "recapEn": "From the previous step: Post-Exploitation Discipline: Impact Assessment, Evidence, and Cleanup is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Post-Exploitation শৃঙ্খলা: প্রভাব মূল্যায়ন, প্রমাণ ও পরিষ্কার করা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l13-impact-assessment": {
  "recapEn": "From the previous step: The 14-Step Authorized Pentest Workflow: The Whole Engagement on One Page is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: ১৪-ধাপের অনুমোদিত Pentest কর্মপ্রবাহ: পুরো engagement এক page-এ তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l13-report-template": {
  "recapEn": "From the previous step: Impact Assessment: Proving Effect Without Causing It is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Impact Assessment: ক্ষতি না করেই প্রভাব প্রমাণ করা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l13-evidence-cleanup-retest": {
  "recapEn": "From the previous step: The Professional Pentest Report: Template, Findings, and Retest Appendix is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: পেশাদার Pentest Report: Template, finding ও retest পরিশিষ্ট তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l14-domains-dcs": {
  "recapEn": "Level 13's Final is passed; Level 14 (Active Directory and Enterprise Security) starts here. Nothing from later levels is assumed.",
  "recapBn": "Level 13-এর Final pass হয়েছে; Level 14 এখান থেকে শুরু। পরের level-এর কিছুই ধরা হয়নি।"
 },
 "l14-ad-architecture": {
  "recapEn": "From the previous step: Domains, Domain Controllers, and AD Structure: The Skeleton is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Domain, Domain Controller, আর AD কাঠামো: কঙ্কাল তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "AD is a city, the DC is its passport office",
  "ideaBn": "AD একটি শহর, DC তার passport দপ্তর",
  "noteEn": "Citizens (users) and buildings (computers) live in neighbourhoods (OUs) inside a city (domain); cities group into a country (forest). The passport office (DC) issues and checks everyone's ID (Kerberos tickets). Defend the passport office like the whole country's identity depends on it — because it does.",
  "noteBn": "নাগরিক (user) ও ভবন (computer) শহরের (domain) পাড়ায় (OU) থাকে; শহরগুলো একটি দেশ (forest) গঠন করে। Passport দপ্তর (DC) সবার ID (Kerberos ticket) দেয় ও যাচাই করে। Passport দপ্তরকে এমনভাবে রক্ষা করো যেন পুরো দেশের পরিচয় তার উপর নির্ভর করে — কারণ করে।"
 },
 "l14-kerberos": {
  "recapEn": "From the previous step: Active Directory Architecture: Forests, Domains, and Trusts in an Isolated Lab is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Active Directory কাঠামো: বিচ্ছিন্ন Lab-এ Forest, Domain ও Trust তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l14-dns-integration": {
  "recapEn": "From the previous step: Kerberos and LDAP: How Windows Authentication Actually Flows is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Kerberos ও LDAP: Windows authentication আসলে যেভাবে চলে তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l14-group-policy": {
  "recapEn": "From the previous step: DNS Integration for Active Directory: The Directory's Phone Book is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Active Directory-র জন্য DNS Integration: Directory-র phone book তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l14-enterprise-permissions": {
  "recapEn": "From the previous step: Group Policy and OUs: Configuration as a Security Control is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Group Policy ও OU: নিরাপত্তা control হিসেবে configuration তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l14-ad-attacks-defenses": {
  "recapEn": "From the previous step: Enterprise Permissions and Delegation: Who May Do What, Exactly is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Enterprise Permission ও Delegation: কে ঠিক কী করতে পারে তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Every AD attack is a feature used as designed — against you",
  "ideaBn": "প্রতিটি AD আক্রমণ একটি feature-এর নকশামতো ব্যবহার — তোমার বিরুদ্ধে",
  "noteEn": "Kerberos tickets, delegation, name resolution: none of these attacks 'break' AD. They use AD exactly as it was built, in configurations defenders left generous. That is why the defenses are configuration and monitoring, not patches — you are not fixing a bug, you are closing doors the building came with.",
  "noteBn": "Kerberos ticket, delegation, name resolution: কোনো আক্রমণই AD 'ভাঙে' না। তারা AD-কে হুবহু তার নকশামতো ব্যবহার করে, রক্ষকদের রেখে দেওয়া উদার configuration-এ। তাই প্রতিরক্ষা configuration ও monitoring, patch নয় — তুমি bug ঠিক করছ না, বাড়ির সঙ্গে আসা দরজা বন্ধ করছ।"
 },
 "l14-enterprise-hardening": {
  "recapEn": "From the previous step: Common AD Attack Paths — and the Defense That Breaks Each One is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: সাধারণ AD আক্রমণের পথ — আর প্রতিটি ভেঙে দেওয়া প্রতিরক্ষা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l14-tiered-admin": {
  "recapEn": "From the previous step: Enterprise Hardening: Tiering, LAPS, and the Admin Workstation Rule is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Enterprise Hardening: Tiering, LAPS ও Admin Workstation নিয়ম তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Tiers are watertight doors on a ship",
  "ideaBn": "Tier হলো জাহাজের পানি-নিরোধক দরজা",
  "noteEn": "A ship's bulkheads do not stop it taking water; they stop ONE flooded compartment from sinking the whole vessel. Tiers do the same for credentials: a flooded workstation compartment holds only workstation keys. The doors only work if nobody props them open 'just for a minute' — every cross-tier logon is a propped door.",
  "noteBn": "একটি জাহাজের bulkhead পানি ঢোকা থামায় না; একটি ডুবন্ত কক্ষ পুরো জাহাজ ডোবানো থামায়। Tier credential-এর জন্য তা-ই করে: ডোবা workstation কক্ষে শুধু workstation চাবি থাকে। দরজা কাজ করে শুধু যদি কেউ 'এক মিনিটের জন্য' তা খুলে না রাখে।"
 },
 "l14-identity-monitoring-dns": {
  "recapEn": "From the previous step: Tiered Administration and Privileged Access Workstations is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Tiered Administration ও Privileged Access Workstation তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l15-cloud-models": {
  "recapEn": "Level 14's Final is passed; Level 15 (Cloud and Infrastructure Security) starts here. Nothing from later levels is assumed.",
  "recapBn": "Level 14-এর Final pass হয়েছে; Level 15 এখান থেকে শুরু। পরের level-এর কিছুই ধরা হয়নি।"
 },
 "l15-shared-responsibility": {
  "recapEn": "From the previous step: Cloud Models and Provider Basics: IaaS, PaaS, SaaS — and Where Your Job Starts is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Cloud Model ও Provider মৌলিক বিষয়: IaaS, PaaS, SaaS — আর তোমার কাজ কোথায় শুরু তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "The provider guards the building; you still lock your flat",
  "ideaBn": "Provider ভবন পাহারা দেয়; flat-এর তালা তোমার",
  "noteEn": "Renting a flat in a guarded building does not lock your own door. The provider's guards, cameras and walls are real — and irrelevant the day you leave your storage public, your keys on the door, and your guest list set to 'everyone'. Shared responsibility is that sentence, formalized.",
  "noteBn": "পাহারাদারসহ ভবনে flat ভাড়া নেওয়া তোমার নিজের দরজায় তালা দেয় না। Provider-এর পাহারা, camera আর দেয়াল আসল — আর অর্থহীন যেদিন তুমি storage public রাখো, চাবি দরজায় ঝুলিয়ে রাখো, আর অতিথি তালিকা 'সবাই' করো। Shared responsibility হুবহু এই বাক্য, আনুষ্ঠানিক আকারে।"
 },
 "l15-cloud-iam": {
  "recapEn": "From the previous step: Cloud Models and Shared Responsibility: Who Secures What is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Cloud model ও Shared Responsibility: কে কী সুরক্ষিত করে তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l15-storage-secrets": {
  "recapEn": "From the previous step: Cloud IAM: Roles, Policies, and the End of the Standing Admin is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Cloud IAM: Role, policy, আর স্থায়ী admin-এর শেষ তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l15-misconfig-detection": {
  "recapEn": "From the previous step: Storage Permissions and Secrets Management: The Two Classic Leaks is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Storage permission ও Secrets ব্যবস্থাপনা: দুটি classic leak তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l15-docker-security": {
  "recapEn": "From the previous step: Cloud Misconfiguration and Logging: Seeing Your Own Estate is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Cloud ভুল configuration ও Logging: নিজের estate দেখা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l15-containers-k8s": {
  "recapEn": "From the previous step: Docker Security: Images, Containers, and the Daemon's Long Shadow is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Docker নিরাপত্তা: Image, Container, আর Daemon-এর দীর্ঘ ছায়া তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A container is a rented room, not a bought house",
  "ideaBn": "Container ভাড়া করা ঘর, কেনা বাড়ি নয়",
  "noteEn": "You do not own the building (the host kernel is shared with neighbours), the room should hold almost nothing of value (minimal image, no secrets), and the door key (runtime credentials) should open only that room. Design every container as if the corridor is public — because the kernel corridor is shared by design.",
  "noteBn": "তুমি ভবনের মালিক নও (host kernel প্রতিবেশীদের সঙ্গে ভাগ করা), ঘরে মূল্যবান প্রায় কিছু থাকা উচিত নয় (ছোট image, secret নেই), আর দরজার চাবি (runtime credential) শুধু ওই ঘরই খুলবে। প্রতিটি container এমনভাবে নকশা করো যেন corridor public — কারণ kernel corridor নকশাগতভাবেই ভাগ করা।"
 },
 "l15-kubernetes-security": {
  "recapEn": "From the previous step: Containers and Kubernetes Security: Images, Pods, and the Dashboard That Must Not Be Public is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Container ও Kubernetes নিরাপত্তা: Image, pod, আর public হওয়া যাবে না এমন dashboard তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l15-serverless-cicd": {
  "recapEn": "From the previous step: Kubernetes Security: The Cluster Is an Operating System Now is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Kubernetes নিরাপত্তা: Cluster এখন একটি operating system তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l15-cloud-ir": {
  "recapEn": "From the previous step: Serverless, IaC and CI/CD: Securing the Factory That Builds the Cloud is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Serverless, IaC ও CI/CD: Cloud বানানো কারখানার নিরাপত্তা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l15-iac-supply-chain": {
  "recapEn": "From the previous step: Cloud Incident Response: When the Bucket Was Public for a Weekend is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Cloud Incident Response: Bucket যখন একটি সাপ্তাহিক ছুটি public ছিল তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l15-cloud-logging": {
  "recapEn": "From the previous step: IaC and Supply-Chain Security: Scanning the Blueprint, Pinning the Parts is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: IaC ও Supply-Chain নিরাপত্তা: নকশা scan করা, অংশ pin করা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l16-android-architecture": {
  "recapEn": "From the previous step: l16-android-basics is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l16-android-basics তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l16-apk-anatomy": {
  "recapEn": "From the previous step: Android Architecture: The Stack Your Audits Stand On is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Android স্থাপত্য: তোমার audit দাঁড়িয়ে থাকা স্তূপ তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l16-components-ipc": {
  "recapEn": "From the previous step: APK Anatomy and the Manifest: Reading an App Before Running It is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: APK গঠন ও Manifest: একটি app চালানোর আগে পড়া তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l16-permissions-intents": {
  "recapEn": "From the previous step: Activities, Services, Receivers and Providers: The Component Attack Surface is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Activity, Service, Receiver ও Provider: Component attack surface তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l16-sandbox-storage-deep": {
  "recapEn": "From the previous step: Permissions, Intents, and the Component Conversation is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Permission, Intent, আর component-দের কথোপকথন তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l16-storage-keystore": {
  "recapEn": "From the previous step: The App Sandbox: UIDs, SELinux, and Where App Data Actually Lives is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: App Sandbox: UID, SELinux, আর app data আসলে কোথায় থাকে তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "A token in preferences is a key under the doormat",
  "ideaBn": "Preferences-এ token মানে দরজার মাদুরের নিচে চাবি",
  "noteEn": "The house (sandbox) has a real lock, but a plaintext token in shared_prefs is the spare key taped where every burglar checks first: extraction tools, backups and rooted-device kits all look there automatically. Keystore is the safe bolted to the wall — the key works without ever being holdable.",
  "noteBn": "বাড়িতে (sandbox) আসল তালা আছে, কিন্তু shared_prefs-এ plaintext token হলো প্রতিটি চোর প্রথমে যেখানে খোঁজে সেখানে টেপ লাগানো বাড়তি চাবি: extraction tool, backup আর rooted-device kit সবাই স্বয়ংক্রিয়ভাবে সেখানে খোঁজে। Keystore দেয়ালে বোল্ট করা সিন্দুক — চাবি ধরা না গিয়েই কাজ করে।"
 },
 "l16-network-webview": {
  "recapEn": "From the previous step: Secure Storage and the Android Keystore: Where Secrets May Live is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: নিরাপদ Storage ও Android Keystore: গোপনীয়তা কোথায় থাকতে পারে তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l16-adb-emulator": {
  "recapEn": "From the previous step: Network Security Config, TLS Validation, and WebView: The Mobile Network Traps is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Network Security Config, TLS যাচাই ও WebView: Mobile network-এর ফাঁদ তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l16-mobsf-jadx-frida": {
  "recapEn": "From the previous step: ADB and the Emulator: Your Controllable Android Lab is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: ADB ও Emulator: তোমার নিয়ন্ত্রণযোগ্য Android Lab তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l16-frida-fundamentals": {
  "recapEn": "From the previous step: MobSF, JADX, and Frida: The Analyst's Bench (Emulator and Training Apps Only) is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: MobSF, JADX ও Frida: Analyst-এর bench (শুধু emulator ও training app) তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l16-masvs-audit": {
  "recapEn": "From the previous step: Frida Fundamentals on Your Own Apps: Watching Code Confess is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: নিজের App-এ Frida মৌলিক বিষয়: Code-কে স্বীকার করতে দেখা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l17-rest-security": {
  "recapEn": "Level 16's Final is passed; Level 17 (API and Modern Application Security) starts here. Nothing from later levels is assumed.",
  "recapBn": "Level 16-এর Final pass হয়েছে; Level 17 এখান থেকে শুরু। পরের level-এর কিছুই ধরা হয়নি।"
 },
 "l17-api-authz": {
  "recapEn": "From the previous step: REST API Security Fundamentals: Resources, Verbs, and Stateless Temptations is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: REST API নিরাপত্তার মৌলিক বিষয়: Resource, Verb, আর stateless প্রলোভন তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "APIs have no walls — every door needs its own guard",
  "ideaBn": "API-র দেয়াল নেই — প্রতিটি দরজায় নিজস্ব পাহারা লাগে",
  "noteEn": "A web page can hide a button and feel protected. An API is a corridor of doors with no walls between them: anyone can knock on any door directly, in any order, with any key they hold. So every single handler must check its own lock — object owner for data doors, role for function doors — because there is no lobby security to inherit from.",
  "noteBn": "একটি web page button লুকিয়ে সুরক্ষিত বোধ করতে পারে। API হলো দরজার corridor যার মাঝে দেয়াল নেই: যে কেউ যেকোনো দরজায় সরাসরি, যেকোনো ক্রমে, তার কাছে থাকা যেকোনো চাবি দিয়ে টোকা দিতে পারে। তাই প্রতিটি handler-কে নিজের তালা যাচাই করতে হয় — data দরজায় মালিকানা, function দরজায় role।"
 },
 "l17-api-auth-tokens": {
  "recapEn": "From the previous step: API Authorization: BOLA, Function-Level Checks, and the OWASP API Top 10 2023 is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: API Authorization: BOLA, function-স্তরের যাচাই, আর OWASP API Top 10 2023 তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l17-mass-assignment-deep": {
  "recapEn": "From the previous step: API Authentication: Tokens, JWT Discipline, and OAuth for APIs is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: API Authentication: Token, JWT শৃঙ্খলা ও API-র জন্য OAuth তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "The model is not the menu",
  "ideaBn": "Model menu নয়",
  "noteEn": "Binding the data model to the request is like letting a restaurant guest order by walking into the kitchen and pointing at the whole pantry: most of what is reachable was never offered. The DTO is the menu — short, deliberate, and the only thing the kitchen accepts orders from.",
  "noteBn": "Data model-কে request-এ বাঁধা হলো একজন restaurant অতিথিকে রান্নাঘরে ঢুকে পুরো ভাঁড়ারের দিকে ইঙ্গিত করে order করতে দেওয়ার মতো: পৌঁছনযোগ্য বেশিরভাগই কখনো offer করা হয়নি। DTO হলো menu — ছোট, ইচ্ছাকৃত, আর একমাত্র জিনিস যা থেকে রান্নাঘর order নেয়।"
 },
 "l17-rate-limit-gateway": {
  "recapEn": "From the previous step: Mass Assignment and Property-Level Authorization: The DTO Discipline is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Mass Assignment ও Property-স্তরের authorization: DTO শৃঙ্খলা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l17-graphql-rest": {
  "recapEn": "From the previous step: Rate Limiting, Gateways, and API Abuse Defenses is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Rate Limiting, Gateway, আর API অপব্যবহার প্রতিরক্ষা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l17-gateway-secrets": {
  "recapEn": "From the previous step: GraphQL and REST Security: Two Shapes, Same Authorization is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: GraphQL ও REST নিরাপত্তা: দুটি আকার, একই authorization তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l17-api-testing-design": {
  "recapEn": "From the previous step: API Gateways and Secrets: The Front Desk and Its Keys is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: API Gateway ও Secrets: Front desk ও তার চাবি তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l17-webhooks-rest": {
  "recapEn": "From the previous step: Secure API Design and Automated Testing: The Two-Account Test Suite is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: নিরাপদ API নকশা ও স্বয়ংক্রিয় পরীক্ষা: Two-account test suite তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l17-top10-survey": {
  "recapEn": "From the previous step: Webhooks and REST Deep-Cuts: Signed Deliveries and the Verb/Content Traps is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Webhook ও REST গভীর কাট: স্বাক্ষরিত delivery ও verb/content ফাঁদ তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l17-api-inventory": {
  "recapEn": "From the previous step: The OWASP API Security Top 10 2023, Whole: A Survey You Can Test Against is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: OWASP API Security Top 10 2023, পুরোটা: পরীক্ষা করা যায় এমন জরিপ তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l17-api-errors-inventory": {
  "recapEn": "From the previous step: API Inventory Management: Every Live Version, Named and Owned is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: API Inventory ব্যবস্থাপনা: প্রতিটি live version, নামকৃত ও মালিকানাধীন তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l18-ir-lifecycle": {
  "recapEn": "From the previous step: l18-ir-forensics is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l18-ir-forensics তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l18-disk-memory": {
  "recapEn": "From the previous step: The Incident Response Lifecycle, Whole: From Preparation to Lessons Learned is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Incident Response জীবনচক্র, পুরোটা: প্রস্তুতি থেকে শিক্ষা পর্যন্ত তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Evidence is ice: it melts in the order it was formed",
  "ideaBn": "প্রমাণ বরফ: যেই ক্রমে তৈরি, সেই ক্রমে গলে",
  "noteEn": "A crime scene made of ice sculptures: the thinnest pieces (RAM, connections) melt in minutes, the thick blocks (disk) last hours, the foundation (backups, logs) longest. You do not start photographing the foundation. Volatility order is just the melting order, respected.",
  "noteBn": "বরফের ভাস্কর্যে তৈরি অপরাধস্থল: সবচেয়ে পাতলা অংশ (RAM, connection) মিনিটে গলে, মোটা block (disk) ঘণ্টা টেকে, ভিত্তি (backup, log) সবচেয়ে বেশি। তুমি ভিত্তির ছবি তোলা দিয়ে শুরু করো না। Volatility ক্রম হলো গলার ক্রম, মানা।"
 },
 "l18-filesystem-forensics": {
  "recapEn": "From the previous step: Disk and Memory Forensics: Imaging, Volatility, and the Order That Saves Evidence is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Disk ও Memory Forensics: Imaging, volatility, আর প্রমাণ বাঁচানো ক্রম তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l18-timeline-logs": {
  "recapEn": "From the previous step: Filesystem Forensics: Deleted Is a Rumor, Not a Fact is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Filesystem Forensics: মুছে ফেলা একটি গুজব, সত্য নয় তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l18-browser-artifacts": {
  "recapEn": "From the previous step: Timeline Analysis and Log Forensics: One Clock, Every Source is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Timeline বিশ্লেষণ ও Log Forensics: একটি ঘড়ি, প্রতিটি উৎস তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l18-ir-playbooks": {
  "recapEn": "From the previous step: Browser and Application Artifacts: The User's Day, Reconstructed is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Browser ও Application Artifact: ব্যবহারকারীর দিন, পুনর্গঠিত তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l18-memory-events": {
  "recapEn": "From the previous step: IR Playbooks and Chain of Custody: The Rehearsed Response is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: IR Playbook ও Chain of Custody: মহড়া দেওয়া প্রতিক্রিয়া তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l18-windows-event-mastery": {
  "recapEn": "From the previous step: Memory Forensics and Windows Event Analysis: The Live System's Confession is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Memory Forensics ও Windows Event বিশ্লেষণ: জীবন্ত system-এর স্বীকারোক্তি তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l18-linux-network-forensics": {
  "recapEn": "From the previous step: Windows Event Logs in Depth: The IDs That Carry an Investigation is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Windows Event Log গভীরভাবে: তদন্ত বহন করা IDগুলো তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l18-network-forensics": {
  "recapEn": "From the previous step: Linux Log and Network Forensics: auth.log, Journals, and Flow Records is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Linux Log ও Network Forensics: auth.log, journal, আর flow record তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l18-ransomware-reporting": {
  "recapEn": "From the previous step: Network Forensics: Reading Captures Without Drowning in Them is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Network Forensics: Capture-এ না ডুবে পড়া তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l19-malware-families": {
  "recapEn": "Level 18's Final is passed; Level 19 (Malware Analysis and Reverse Engineering) starts here. Nothing from later levels is assumed.",
  "recapBn": "Level 18-এর Final pass হয়েছে; Level 19 এখান থেকে শুরু। পরের level-এর কিছুই ধরা হয়নি।"
 },
 "l19-static-analysis": {
  "recapEn": "From the previous step: Malware Families and What Each One Wants: Loaders, RATs, Stealers, Ransomware is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Malware পরিবার ও প্রত্যেকে যা চায়: Loader, RAT, Stealer, Ransomware তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Strings are the sample's diary — written by someone who lies",
  "ideaBn": "String হলো sample-এর diary — মিথ্যা বলা কারো লেখা",
  "noteEn": "Strings feel like confessions: URLs, file paths, error messages in the author's own words. But malware authors plant diaries — fake URLs, rival groups' names, yesterday's infrastructure. Read the diary with pleasure; cite it as leads; convict only on behavior you watched in the sandbox.",
  "noteBn": "String স্বীকারোক্তির মতো লাগে: URL, file path, লেখকের নিজের কথায় error message। কিন্তু malware লেখক diary রোপণ করে — ভুয়া URL, প্রতিদ্বন্দ্বী দলের নাম, গতকালের infrastructure। Diary আনন্দে পড়ো; সূত্র হিসেবে উল্লেখ করো; দোষী করো শুধু sandbox-এ দেখা আচরণে।"
 },
 "l19-pe-elf-structure": {
  "recapEn": "From the previous step: Static Analysis: Hashes, Strings, and File Anatomy Without Running Anything is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Static Analysis: কিছু না চালিয়ে hash, string ও file-এর গঠন তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l19-assembly-reading": {
  "recapEn": "From the previous step: PE and ELF Anatomy: Reading a Binary's Skeleton Before Its Soul is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: PE ও ELF গঠন: আত্মার আগে একটি binary-র কঙ্কাল পড়া তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l19-dynamic-sandbox": {
  "recapEn": "From the previous step: Reading Assembly Without Drowning: The Analyst's Working Minimum is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: ডুবে না গিয়ে Assembly পড়া: Analyst-এর কর্মক্ষম ন্যূনতম তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l19-behavioral-sandboxing": {
  "recapEn": "From the previous step: Dynamic Analysis and Safe Sandboxing: Watching Behavior in a Sealed Room is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Dynamic Analysis ও নিরাপদ Sandboxing: সিল করা ঘরে আচরণ দেখা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l19-ghidra-gdb-yara": {
  "recapEn": "From the previous step: Behavioral Analysis in Depth: Making the Sandbox Tell the Whole Story is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: আচরণগত বিশ্লেষণ গভীরভাবে: Sandbox-কে পুরো গল্প বলানো তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l19-families-anatomy": {
  "recapEn": "From the previous step: Ghidra, GDB, and YARA: Reading Code You Did Not Write, and Signing What You Found is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Ghidra, GDB ও YARA: অন্যের লেখা code পড়া, আর যা পেলে তার স্বাক্ষর তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l19-assembly-iocs": {
  "recapEn": "From the previous step: Malware Families, PE and ELF Anatomy: Knowing the Species and Reading the Skeleton is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Malware পরিবার, PE ও ELF গঠন: প্রজাতি চেনা ও কঙ্কাল পড়া তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "The stack is a pile of plates with return addresses",
  "ideaBn": "Stack হলো ফেরার ঠিকানাসহ প্লেটের স্তূপ",
  "noteEn": "Every CALL puts a plate (the return address) on the pile; RET takes the top plate and goes there. Corrupt the top plate — the classic stack overflow from your Level 4 C lesson — and the program 'returns' to an attacker's address. Assembly stops being mysterious the moment you see your own compiled if-statements and function calls living in it.",
  "noteBn": "প্রতিটি CALL স্তূপে একটি প্লেট (ফেরার ঠিকানা) রাখে; RET উপরের প্লেট নিয়ে সেখানে যায়। উপরের প্লেট নষ্ট করো — তোমার Level 4 C পাঠের চিরায়ত stack overflow — আর program আক্রমণকারীর ঠিকানায় 'ফেরে'। Assembly রহস্য থাকে না যখন তুমি নিজের compile করা if ও function call তার ভেতরে বাস করতে দেখো।"
 },
 "l19-ioc-extraction": {
  "recapEn": "From the previous step: Assembly Fundamentals and IOC Extraction: From Behavior to Indicators is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Assembly মৌলিক ধারণা ও IOC আহরণ: আচরণ থেকে indicator তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l20-log-sources-map": {
  "recapEn": "From the previous step: l20-detection-engineering is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: l20-detection-engineering তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l20-intel-lifecycle": {
  "recapEn": "From the previous step: Log Sources and Telemetry: You Cannot Detect What You Do Not Record is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Log উৎস ও Telemetry: যা নথিভুক্ত করো না, তা শনাক্ত করতে পারো না তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Intel is milk, behavior is the cow",
  "ideaBn": "Intel দুধ, আচরণ গরু",
  "noteEn": "Indicators expire like milk — a hash is sour in a week. Behaviors are the cow: slower to acquire, but they keep producing. A team that only collects milk spends its life shopping; a team that understands the cow (TTPs, ATT&CK) makes detections that are still true next season.",
  "noteBn": "Indicator দুধের মতো মেয়াদোত্তীর্ণ হয় — একটি hash এক সপ্তাহে টক। আচরণ গরু: পেতে ধীর, কিন্তু দিতেই থাকে। যেই দল শুধু দুধ সংগ্রহ করে তারা জীবন কেনাকাটায় কাটায়; যেই দল গরু বোঝে (TTP, ATT&CK) তারা এমন detection বানায় যা পরের মৌসুমেও সত্য।"
 },
 "l20-ttp-profiling": {
  "recapEn": "From the previous step: The Threat Intelligence Lifecycle: From Raw Reports to Decisions is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Threat Intelligence জীবনচক্র: কাঁচা report থেকে সিদ্ধান্ত তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l20-attack-sigma": {
  "recapEn": "From the previous step: Adversary TTP Profiling: Building the Profile Your Detections Serve is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: প্রতিপক্ষ TTP প্রোফাইলিং: তোমার detection যাকে পরিবেশন করে সেই profile গড়া তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l20-sigma-workshop": {
  "recapEn": "From the previous step: MITRE ATT&CK and Sigma: Mapping Behavior to Detections That Fire is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: MITRE ATT&CK ও Sigma: আচরণকে জ্বলে ওঠা detection-এ ম্যাপ করা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l20-siem-fundamentals": {
  "recapEn": "From the previous step: Sigma Workshop: Writing, Converting, and Testing a Rule End to End is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Sigma Workshop: একটি নিয়ম লেখা, রূপান্তর, আর শেষ পর্যন্ত পরীক্ষা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l20-hunting-siem": {
  "recapEn": "From the previous step: SIEM Fundamentals: Correlation, Parsing, and the Normalization Tax is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: SIEM মৌলিক বিষয়: Correlation, Parsing, আর Normalization খরচ তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l20-threat-hunting-deep": {
  "recapEn": "From the previous step: SIEM Triage and Threat Hunting: From Alert Queue to Hypothesis is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: SIEM Triage ও Threat Hunting: Alert সারি থেকে hypothesis তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l20-detection-validation": {
  "recapEn": "From the previous step: Threat Hunting in Depth: From Hunch to Hunt Package is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Threat Hunting গভীরভাবে: আভাস থেকে hunt package পর্যন্ত তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l20-killchain-osint": {
  "recapEn": "From the previous step: Validating Detections: Purple Teaming and the Honest Coverage Matrix is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Detection যাচাই: Purple Teaming ও সৎ coverage matrix তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l20-stix-misp": {
  "recapEn": "From the previous step: Cyber Kill Chain and OSINT Ethics: Stages, and the Line You Do Not Cross is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Cyber Kill Chain ও OSINT নৈতিকতা: ধাপ, আর যে সীমা পার হবে না তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l21-research-method": {
  "recapEn": "Level 20's Final is passed; Level 21 (Advanced Security Research) starts here. Nothing from later levels is assumed.",
  "recapBn": "Level 20-এর Final pass হয়েছে; Level 21 এখান থেকে শুরু। পরের level-এর কিছুই ধরা হয়নি।"
 },
 "l21-code-audit-methods": {
  "recapEn": "From the previous step: Research Method: Questions, Literature, and Reproducible Experiments is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: গবেষণা পদ্ধতি: প্রশ্ন, সাহিত্য, আর পুনরুৎপাদনযোগ্য পরীক্ষা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l21-advanced-web-research": {
  "recapEn": "From the previous step: Auditing Code for Vulnerabilities: Reading Software Like an Attacker with a Budget is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: দুর্বলতার জন্য Code Audit: বাজেটসহ আক্রমণকারীর মতো software পড়া তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "Two readers, one lie",
  "ideaBn": "দুই পাঠক, একটি মিথ্যা",
  "noteEn": "Every parser-differential bug is an argument between two components about the same bytes — like two translators producing different contracts from one letter. The researcher does not attack either translator; the researcher finds the sentence they translate differently, and lets their disagreement do the work.",
  "noteBn": "প্রতিটি parser-differential bug একই byte নিয়ে দুটি উপাদানের তর্ক — যেন দুই অনুবাদক একটি চিঠি থেকে আলাদা চুক্তি তৈরি করছে। গবেষক কোনো অনুবাদককে আক্রমণ করে না; গবেষক সেই বাক্য খোঁজে যা তারা আলাদাভাবে অনুবাদ করে, আর তাদের মতভেদকেই কাজ করতে দেয়।"
 },
 "l21-fuzzing-audit": {
  "recapEn": "From the previous step: Advanced Web Security Research: Hunting the Classes Scanners Cannot See is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Advanced Web নিরাপত্তা গবেষণা: Scanner দেখতে পায় না এমন শ্রেণি শিকার তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l21-memory-safety": {
  "recapEn": "From the previous step: Fuzzing Fundamentals and Secure Code Auditing: Machines That Find the Edge Cases is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Fuzzing মৌলিক বিষয় ও নিরাপদ Code Audit: Edge case খুঁজে দেওয়া machine তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l21-re-techniques": {
  "recapEn": "From the previous step: Memory Safety Research: Overflows, Use-After-Free, and Why Languages Moved On is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Memory Safety গবেষণা: Overflow, Use-After-Free, আর ভাষা কেন এগিয়ে গেল তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l21-static-dynamic-research": {
  "recapEn": "From the previous step: Reverse Engineering Techniques for Researchers: From Strings to Behavior Claims is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: গবেষকদের জন্য Reverse Engineering কৌশল: Strings থেকে আচরণ দাবি পর্যন্ত তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l21-protocol-supplychain": {
  "recapEn": "From the previous step: Static vs Dynamic Analysis as Research Methods: Choosing and Combining is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: গবেষণা পদ্ধতি হিসেবে Static বনাম Dynamic বিশ্লেষণ: বাছাই ও সমন্বয় তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l21-architecture-review": {
  "recapEn": "From the previous step: Protocol Analysis and Supply-Chain Research: Reading Wires and Watching Dependencies is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Protocol বিশ্লেষণ ও Supply-Chain গবেষণা: তার পড়া ও dependency পর্যবেক্ষণ তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l21-disclosure-cve": {
  "recapEn": "From the previous step: Security Architecture Review: Reading a System's Decisions Before Its Code is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Security Architecture পর্যালোচনা: Code-এর আগে একটি system-এর সিদ্ধান্ত পড়া তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l21-advisory-writing": {
  "recapEn": "From the previous step: Responsible Disclosure and the CVE System: How Findings Become Public Safely is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: দায়িত্বশীল প্রকাশ ও CVE ব্যবস্থা: কীভাবে সন্ধান নিরাপদে প্রকাশ্য হয় তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l21-research-docs-bounty": {
  "recapEn": "From the previous step: Writing Advisories and Research Reports People Can Act On is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: মানুষ কাজে লাগাতে পারে এমন পরামর্শ ও গবেষণা report লেখা তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l22-capstone-abc": {
  "recapEn": "Level 21's Final is passed; Level 22 (Professional Capstone and Career Readiness) starts here. Nothing from later levels is assumed.",
  "recapBn": "Level 21-এর Final pass হয়েছে; Level 22 এখান থেকে শুরু। পরের level-এর কিছুই ধরা হয়নি।"
 },
 "l22-capstone-def": {
  "recapEn": "From the previous step: Capstone A–C: Risk Register, Hardening Scorecard, and the Forensic Casefile is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Capstone A–C: Risk Register, Hardening Scorecard, আর Forensic Casefile তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l22-capstone-g": {
  "recapEn": "From the previous step: Capstone D–F: The Pentest Report, the Sigma Pack, and the Hardened Cloud is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Capstone D–F: Pentest Report, Sigma Pack, আর Hardened Cloud তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l22-capstone-h": {
  "recapEn": "From the previous step: Capstone Project G: Red Team vs Blue Team — The Detection Duel is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Capstone Project G: Red Team বনাম Blue Team — Detection দ্বৈরথ তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l22-capstone-gh-career": {
  "recapEn": "From the previous step: Capstone Project H: The Complete Security Program — Board-Ready in One Binder is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Capstone Project H: সম্পূর্ণ Security Program — একটি Binder-এ Board-প্রস্তুত তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।",
  "ideaEn": "The portfolio is the diploma you can open",
  "ideaBn": "Portfolio হলো খোলা যায় এমন diploma",
  "noteEn": "A certificate says a course ended. A portfolio opens: eight artefacts, each with evidence inside, each narratable under questioning. Employers cannot run your degree; they can run your casefile, your rules, your register. Build the thing that can be opened.",
  "noteBn": "একটি certificate বলে course শেষ। একটি portfolio খোলে: আটটি বস্তু, প্রতিটিতে প্রমাণ, প্রতিটি প্রশ্নের মুখে বর্ণনাযোগ্য। নিয়োগকর্তা তোমার degree চালাতে পারে না; তোমার casefile, rule, register চালাতে পারে। খোলা যায় এমন জিনিস বানাও।"
 },
 "l22-career-cv": {
  "recapEn": "From the previous step: Capstone G–H and Career Launch: Threat Model, Disclosure Portfolio, CV and Interviews is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Capstone G–H ও Career Launch: Threat Model, Disclosure Portfolio, CV ও সাক্ষাৎকার তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l22-career-interviews": {
  "recapEn": "From the previous step: The Security CV and Portfolio: Evidence, Not Adjectives is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Security CV ও Portfolio: প্রমাণ, বিশেষণ নয় তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 },
 "l22-bug-bounty-vrp": {
  "recapEn": "From the previous step: Security Interviews: Answering With the Method, Not the Memorized Line is complete behind you — this lesson reuses its terms without re-teaching them.",
  "recapBn": "আগের ধাপ থেকে: Security Interview: মুখস্থ লাইন নয়, পদ্ধতি দিয়ে উত্তর তোমার পেছনে সম্পূর্ণ — এই পাঠ তার term গুলো আবার না শিখিয়ে পুনরায় ব্যবহার করে।"
 }
};

export const P4_TIPS: Record<string, L4Tips> = {
 "l12-discovery": {
  "en": [
   "Save every scan with a timestamped filename (scan-2026-11-12.txt) — triage meetings run on comparisons between dated scans.",
   "Run the discovery scan BEFORE patching day and AFTER it: the diff is your remediation evidence."
  ],
  "bn": [
   "প্রতিটি scan timestamp-সহ file-এ রাখো (scan-2026-11-12.txt) — triage সভা তারিখযুক্ত scan-এর তুলনায় চলে।",
   "Patching-এর দিনের আগে ও পরে discovery scan চালাও: পার্থক্যটাই তোমার remediation প্রমাণ।"
  ]
 },
 "l12-cvss-scoring": {
  "en": [
   "Write the vector string next to every score in your notes (e.g. CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N) — the string, not the number, is what engineers argue about.",
   "When two scores tie, let KEV/EPSS and internet exposure break the tie — never the vendor's press release."
  ],
  "bn": [
   "তোমার note-এ প্রতিটি score-এর পাশে vector string লেখো — engineer-রা সংখ্যা নয়, string নিয়েই তর্ক করে।",
   "দুটি score সমান হলে KEV/EPSS আর internet exposure দিয়ে টাই ভাঙো — vendor-এর press release দিয়ে কখনো নয়।"
  ]
 },
 "l12-cwe-cpe": {
  "en": [
   "Keep a personal CWE shortlist from every CVE you triage (class + one-line fix pattern) — after twenty records you own a review checklist no course can give you."
  ],
  "bn": [
   "তুমি triage করা প্রতিটি CVE থেকে একটি ব্যক্তিগত CWE shortlist রাখো (শ্রেণি + এক-line fix ধরন) — কুড়িটি record-এর পর তোমার নিজের একটি review checklist হবে।"
  ]
 },
 "l12-validation-fp": {
  "en": [
   "Quote the changelog/advisory line verbatim in the closure note — 'per vendor advisory §2, fixed in build X' ends arguments that opinions cannot."
  ],
  "bn": [
   "বন্ধের note-এ changelog/advisory লাইন হুবহু উদ্ধৃত করো — 'vendor advisory §2 অনুযায়ী, build X-এ fixed' এমন তর্ক শেষ করে যা মতামতে হয় না।"
  ]
 },
 "l12-asset-criticality": {
  "en": [
   "Tier assets BEFORE the next scan lands — deciding criticality during a Critical incident guarantees politics, not analysis."
  ],
  "bn": [
   "পরের scan আসার আগেই সম্পদের tier ঠিক করো — Critical ঘটনার মধ্যে criticality ঠিক করতে গেলে বিশ্লেষণ নয়, রাজনীতি হয়।"
  ]
 },
 "l12-remediation-workflow": {
  "en": [
   "Put the retest command in the finding at validation time — the future retester (often you, tired, at 2 a.m.) should never have to reconstruct how the flaw was proven."
  ],
  "bn": [
   "যাচাইয়ের সময় retest command-টি finding-এ লিখে রাখো — ভবিষ্যতের retester-কে (প্রায়ই তুমি নিজে, ক্লান্ত, রাত ২টায়) ত্রুটি কীভাবে প্রমাণিত হয়েছিল তা আবার বানাতে হওয়া উচিত নয়।"
  ]
 },
 "l12-reporting": {
  "en": [
   "End every finding with its retest line. A report whose findings cannot be retested will be re-litigated instead of re-run."
  ],
  "bn": [
   "প্রতিটি finding তার retest লাইন দিয়ে শেষ করো। যেই report-এর finding আবার পরীক্ষা করা যায় না, তা পুনরায় চালানোর বদলে পুনরায় তর্ক হবে।"
  ]
 },
 "l13-scope-roe": {
  "en": [
   "Write the evidence-folder path and stop condition INTO the RoE — at hour five you will not remember what you improvised at hour one."
  ],
  "bn": [
   "Evidence folder-এর path আর stop condition RoE-তেই লেখো — পঞ্চম ঘণ্টায় প্রথম ঘণ্টায় যা ভেবেছিলে তা মনে থাকবে না।"
  ]
 },
 "l13-recon": {
  "en": [
   "Timestamp every evidence file (date in the filename). In the report phase, 'when did you see this?' is asked about everything."
  ],
  "bn": [
   "প্রতিটি evidence file-এ timestamp দাও (filename-এ তারিখ)। Report পর্যায়ে সবকিছু সম্পর্কে 'কখন দেখেছিলে?' জিজ্ঞাসা করা হয়।"
  ]
 },
 "l13-enumeration": {
  "en": [
   "Enumerate with the service's own tools first (smbclient, showmount, curl) — their output reads like evidence; generic scanners read like noise."
  ],
  "bn": [
   "আগে service-এর নিজের tool দিয়ে enumerate করো — তাদের output প্রমাণের মতো পড়ায়।"
  ]
 },
 "l13-exploitation": {
  "en": [
   "Keep a 'harmless markers only' kit: your own test accounts, marker strings with your name/date, and read-only checks — proof rarely needs more."
  ],
  "bn": [
   "একটি 'শুধু ক্ষতিহীন marker' kit রাখো: নিজের test account, নাম/তারিখসহ marker string, আর read-only যাচাই — প্রমাণে এর বেশি কমই লাগে।"
  ]
 },
 "l13-workflow-14": {
  "en": [
   "Print the 14 steps and tick them physically during the lab engagement — the checklist you can see beats the process you merely remember."
  ],
  "bn": [
   "১৪ ধাপ print করে lab engagement-এর সময় সত্যিকারে টিক দাও — চোখে দেখা checklist শুধু মনে রাখা প্রক্রিয়াকে হারায়।"
  ]
 },
 "l13-impact-assessment": {
  "en": [
   "Screenshot IDs in the impact pack must match the evidence folder's filenames exactly — an impact line pointing at a missing shot is an unverified claim."
  ],
  "bn": [
   "Impact pack-এর screenshot ID evidence folder-এর filename-এর সঙ্গে হুবহু মিলতে হবে।"
  ]
 },
 "l14-ad-architecture": {
  "en": [
   "On a fresh lab DC, run the read script BEFORE changing anything and save it as your baseline — every hardening lesson in this level compares against it."
  ],
  "bn": [
   "নতুন lab DC-তে কিছু বদলানোর আগে read script চালিয়ে baseline হিসেবে রাখো — এই level-এর প্রতিটি hardening পাঠ তার সঙ্গে তুলনা করে।"
  ]
 },
 "l14-kerberos": {
  "en": [
   "klist on your own workstation is the fastest honest way to SEE Kerberos: lifetimes and encryption types stop being theory the moment they are on your screen."
  ],
  "bn": [
   "নিজের workstation-এ klist Kerberos দেখার দ্রুততম সৎ উপায়: lifetime আর encryption type screen-এ এলে theory থাকে না।"
  ]
 },
 "l14-ad-attacks-defenses": {
  "en": [
   "Run the audit script on your lab DC monthly and diff the lists — new SPN accounts and new delegation trusts appearing silently is exactly the drift attackers wait for."
  ],
  "bn": [
   "Lab DC-তে প্রতি মাসে audit script চালিয়ে তালিকার পার্থক্য দেখো — নীরবে নতুন SPN account ও delegation trust আসাই সেই drift যার জন্য আক্রমণকারী অপেক্ষা করে।"
  ]
 },
 "l14-enterprise-hardening": {
  "en": [
   "Review Domain Admins membership like a bank vault list: every name should be explainable in one sentence, and every change should have paged someone."
  ],
  "bn": [
   "Domain Admins সদস্যতা bank vault তালিকার মতো review করো: প্রতিটি নাম এক বাক্যে ব্যাখ্যাযোগ্য, প্রতিটি বদল কারো কাছে page গেছে এমন।"
  ]
 },
 "l14-tiered-admin": {
  "en": [
   "Audit the logon matrix monthly and publish violations without names first — the goal is door discipline, not blame; repeat violations get names."
  ],
  "bn": [
   "প্রতি মাসে logon matrix audit করো, আর প্রথমে নাম ছাড়া লঙ্ঘন প্রকাশ করো — লক্ষ্য দরজার শৃঙ্খলা, দোষ নয়।"
  ]
 },
 "l15-shared-responsibility": {
  "en": [
   "Draw the split for any new cloud service you adopt BEFORE creating the account: two columns, provider/you, five rows minimum."
  ],
  "bn": [
   "নতুন কোনো cloud service নেওয়ার আগে তার ভাগ আঁকো account বানানোর আগে: দুটি column, provider/তুমি, কমপক্ষে পাঁচ সারি।"
  ]
 },
 "l15-cloud-iam": {
  "en": [
   "Read policies backwards: Resource first (what treasure?), then Action (what can be done to it?). Reviewers who start at Action miss the bucket that matters."
  ],
  "bn": [
   "Policy পেছন থেকে পড়ো: আগে Resource (কোন সম্পদ?), তারপর Action (তাতে কী করা যায়?)।"
  ]
 },
 "l15-misconfig-detection": {
  "en": [
   "Alert on logging being turned OFF as its own event — attackers and accidents both start there, and it is the one change a weekly report will always notice too late."
  ],
  "bn": [
   "Logging বন্ধ করাকে নিজেই একটি ঘটনা হিসেবে alert করো — আক্রমণকারী ও দুর্ঘটনা দুটোই সেখান থেকে শুরু হয়।"
  ]
 },
 "l15-docker-security": {
  "en": [
   "Scan the image in CI and fail the build on critical findings the way IaC scanning fails templates — an unscanned image is an unreviewed dependency with a filesystem attached."
  ],
  "bn": [
   "CI-তে image scan করো, আর critical finding-এ build ব্যর্থ করো — scan না করা image filesystem-সহ একটি অপর্যালোচিত dependency।"
  ]
 },
 "l15-containers-k8s": {
  "en": [
   "Scan the image in CI and fail the build on fixable Criticals — a scan that cannot fail a build is decoration."
  ],
  "bn": [
   "CI-তে image scan করে ঠিক করা যায় এমন Critical-এ build ব্যর্থ করো — যেই scan build ব্যর্থ করতে পারে না তা সাজসজ্জা।"
  ]
 },
 "l15-iac-supply-chain": {
  "en": [
   "Fail the CI build on IaC findings the way you fail it on unit tests — a scanner whose findings never block anything is a diary, not a gate."
  ],
  "bn": [
   "Unit test-এ যেভাবে CI build ব্যর্থ করো, IaC finding-এও তা-ই করো — যা কিছু আটকায় না এমন scanner diary, gate নয়।"
  ]
 },
 "l16-apk-anatomy": {
  "en": [
   "Hash the APK first, always, and record where it came from — provenance is part of every mobile finding (and Project E grades it)."
  ],
  "bn": [
   "সবসময় আগে APK hash করো, আর কোথা থেকে এলো লিখে রাখো — উৎস প্রতিটি mobile finding-এর অংশ।"
  ]
 },
 "l16-storage-keystore": {
  "en": [
   "grep the training app's prefs for 'token|password|secret' in every mobile review — the five-second check that finds the five-alarm finding."
  ],
  "bn": [
   "প্রতিটি mobile review-তে training app-এর prefs-এ 'token|password|secret' grep করো — পাঁচ সেকেন্ডের যাচাই যা পাঁচ-alarm finding খুঁজে পায়।"
  ]
 },
 "l16-adb-emulator": {
  "en": [
   "Keep one emulator image PRISTINE (no installs) and clone it per exercise — 'was this flaw in the app or in my dirty test device?' should never be a question."
  ],
  "bn": [
   "একটি emulator image সম্পূর্ণ পরিষ্কার রাখো, আর প্রতি অনুশীলনে তার clone ব্যবহার করো।"
  ]
 },
 "l16-mobsf-jadx-frida": {
  "en": [
   "In every mobile report, tag each finding with its evidence stage (MobSF/JADX/Frida + class or call name) — untagged mobile findings are unverifiable mobile findings."
  ],
  "bn": [
   "প্রতিটি mobile report-এ প্রতিটি finding-কে তার প্রমাণ ধাপ দিয়ে tag করো (MobSF/JADX/Frida + class বা call-এর নাম) — tag-ছাড়া mobile finding যাচাই-অযোগ্য।"
  ]
 },
 "l16-frida-fundamentals": {
  "en": [
   "Keep a hook journal: target function, what you expected, what you saw — Frida sessions generate insight faster than memory can hold it."
  ],
  "bn": [
   "একটি hook journal রাখো: লক্ষ্য function, যা আশা করেছিলে, যা দেখলে — Frida session স্মৃতির ধারণের চেয়ে দ্রুত অন্তর্দৃষ্টি তৈরি করে।"
  ]
 },
 "l17-api-authz": {
  "en": [
   "Write the two-account test FIRST for every new endpoint (owner succeeds, stranger gets 404) — endpoints born with the test rarely grow BOLA later."
  ],
  "bn": [
   "প্রতিটি নতুন endpoint-এর জন্য আগে two-account test লেখো (মালিক সফল, অপরিচিত 404) — test নিয়ে জন্মানো endpoint-এ পরে BOLA কমই জন্মায়।"
  ]
 },
 "l17-mass-assignment-deep": {
  "en": [
   "Name DTOs after the OPERATION (UpdateDisplayName), never after the model (UserDto) — operation-shaped DTOs resist growing into the model over time."
  ],
  "bn": [
   "DTO-র নাম দাও কাজ অনুযায়ী (UpdateDisplayName), কখনো model অনুযায়ী নয় (UserDto) — কাজ-আকারের DTO সময়ের সঙ্গে model হয়ে ওঠা রোধ করে।"
  ]
 },
 "l17-rate-limit-gateway": {
  "en": [
   "Return Retry-After with every 429 and log the limited key — a limiter without telemetry is a wall you cannot see over."
  ],
  "bn": [
   "প্রতিটি 429-এর সঙ্গে Retry-After ফেরাও, আর limited key log করো — telemetry ছাড়া limiter এমন দেয়াল যার উপর দিয়ে দেখা যায় না।"
  ]
 },
 "l18-ir-lifecycle": {
  "en": [
   "Run the lessons-learned review while memories are fresh but AFTER restoration — exhausted people in hour two of an outage produce blame, not learning."
  ],
  "bn": [
   "স্মৃতি তাজা থাকতে কিন্তু পুনরুদ্ধারের পরে lessons-learned review চালাও — বিভ্রাটের দ্বিতীয় ঘণ্টায় ক্লান্ত মানুষ শিক্ষা নয়, দোষ তৈরি করে।"
  ]
 },
 "l18-disk-memory": {
  "en": [
   "Write the collection order for YOUR lab machine on paper before any drill — under pressure you will follow the paper, not your intentions."
  ],
  "bn": [
   "যেকোনো drill-এর আগে তোমার lab machine-এর সংগ্রহ ক্রম কাগজে লেখো — চাপের মধ্যে তুমি কাগজ অনুসরণ করবে, ইচ্ছা নয়।"
  ]
 },
 "l18-timeline-logs": {
  "en": [
   "Convert every timestamp to UTC at COLLECTION time and note the source's original zone in the custody note — conversions done later, from memory, are how timelines rot."
  ],
  "bn": [
   "সংগ্রহের সময়ই প্রতিটি timestamp UTC-তে রূপান্তর করো, আর custody note-এ উৎসের আসল zone লেখো।"
  ]
 },
 "l18-memory-events": {
  "en": [
   "Export the event extract and HASH the export before analysis, exactly like a disk image — an unhashed extract is an anecdote with timestamps."
  ],
  "bn": [
   "বিশ্লেষণের আগে event extract export করে HASH করো, ঠিক disk image-এর মতো।"
  ]
 },
 "l19-static-analysis": {
  "en": [
   "Record the hash BEFORE anything else and put it in the filename of your working copy — sample mix-ups are a real lab accident, and the hash is the only name that cannot collide."
  ],
  "bn": [
   "সবার আগে hash লেখো, আর তা তোমার working copy-র filename-এ রাখো — sample গুলিয়ে যাওয়া আসল lab দুর্ঘটনা।"
  ]
 },
 "l19-dynamic-sandbox": {
  "en": [
   "Narrate the run live into your notes with timestamps ('02:31 spawned child process') — memory rewrites runs; timestamps do not."
  ],
  "bn": [
   "Run-টি timestamp-সহ সরাসরি note-এ বর্ণনা করো — স্মৃতি run বদলে লেখে; timestamp লেখে না।"
  ]
 },
 "l19-assembly-iocs": {
  "en": [
   "Compile your own Level 4 C program and read ITS disassembly first (objdump -d) — recognizing your own printf call teaches more per hour than any unknown sample."
  ],
  "bn": [
   "নিজের Level 4 C program compile করে তার disassembly আগে পড়ো (objdump -d) — নিজের printf call চেনা অজানা sample-এর চেয়ে প্রতি ঘণ্টায় বেশি শেখায়।"
  ]
 },
 "l20-intel-lifecycle": {
  "en": [
   "Stamp every intel note you save with source + date + confidence the moment you save it (Research Workspace) — retrofitting grades later is guesswork."
  ],
  "bn": [
   "Intel note save করার মুহূর্তেই উৎস + তারিখ + আস্থা stamp করো (Research Workspace) — পরে grade বসানো আন্দাজ।"
  ]
 },
 "l20-attack-sigma": {
  "en": [
   "Convert the rule with sigmac to your SIEM's language and keep BOTH in the repo — the YAML is the source of truth, the conversion is a build artefact."
  ],
  "bn": [
   "sigmac দিয়ে rule-টি তোমার SIEM-এর ভাষায় রূপান্তর করে দুটোই repo-তে রাখো — YAML-ই মূল সত্য।"
  ]
 },
 "l21-research-method": {
  "en": [
   "Keep the experiment log DAILY in the Research Workspace while the work runs — reconstructing methods from memory at write-up time is where reproducibility quietly dies."
  ],
  "bn": [
   "কাজ চলাকালীন Research Workspace-এ প্রতিদিন experiment log রাখো — লেখার সময় স্মৃতি থেকে পদ্ধতি পুনর্গঠনেই পুনরুৎপাদনযোগ্যতা নিঃশব্দে মরে।"
  ]
 },
 "l21-advanced-web-research": {
  "en": [
   "Keep a differentials notebook: every pair of components that parse the same thing (proxy/server, signer/verifier, sanitizer/renderer) is a standing research lead."
  ],
  "bn": [
   "একটি differentials notebook রাখো: একই জিনিস parse করা প্রতিটি উপাদান জোড়া (proxy/server, signer/verifier, sanitizer/renderer) একটি স্থায়ী গবেষণা সূত্র।"
  ]
 },
 "l21-fuzzing-audit": {
  "en": [
   "Seed the corpus with REAL valid inputs from your own tests before mutating — fuzzers starting from validity reach deep code; fuzzers starting from garbage die at the front door."
  ],
  "bn": [
   "বিকৃত করার আগে তোমার নিজের test থেকে আসল বৈধ input দিয়ে corpus বীজ দাও — বৈধতা থেকে শুরু করা fuzzer গভীর code-এ পৌঁছায়।"
  ]
 },
 "l21-research-docs-bounty": {
  "en": [
   "Keep a 'scope diary': program, date read, in-scope assets — bounty findings have been lost to 'I thought it was in scope' more often than to bad technique."
  ],
  "bn": [
   "একটি 'scope diary' রাখো: program, পড়ার তারিখ, in-scope সম্পদ — bounty finding 'আমি ভেবেছিলাম scope-এ আছে' দিয়ে হারিয়েছে খারাপ কৌশলের চেয়ে বেশিবার।"
  ]
 },
 "l22-capstone-gh-career": {
  "en": [
   "Prepare a 90-second narration per project (risk → action → evidence) and practise aloud — interviews reward the story of the work, and the story is a skill of its own."
  ],
  "bn": [
   "প্রতিটি project-এর জন্য 90 সেকেন্ডের বর্ণনা প্রস্তুত করো (ঝুঁকি → কাজ → প্রমাণ) আর উচ্চস্বরে অনুশীলন করো।"
  ]
 },
 "l22-career-cv": {
  "en": [
   "Tailor the CV per application by re-ORDERING evidence (detection-heavy for SOC roles, assessment-heavy for pentest roles) — never by inflating it."
  ],
  "bn": [
   "প্রতিটি আবেদনের জন্য CV সাজাও প্রমাণ পুনঃক্রম করে (SOC ভূমিকায় detection-ভারী, pentest ভূমিকায় assessment-ভারী) — কখনো ফুলিয়ে নয়।"
  ]
 },
 "l22-bug-bounty-vrp": {
  "en": [
   "Keep a private program journal: response times, triager fairness, payment reliability — your own data beats leaderboard folklore within a year."
  ],
  "bn": [
   "একটি ব্যক্তিগত program journal রাখো: সাড়া সময়, triager ন্যায্যতা, payment নির্ভরযোগ্যতা — নিজের data এক বছরে leaderboard লোককথাকে হারায়।"
  ]
 }
};
