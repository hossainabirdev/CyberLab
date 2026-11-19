// Six-part why-panels — PHASE 4 (Levels 12–22 lessons, labs, CTF), EN + BN.
import type { SixWhy, WhyEntry } from "./why-code";

export const WHY_CODE4: Record<string, WhyEntry> = {
 "l12-discovery": {
  "why": "Discovery is inventory first, scanning second: you cannot assess hosts you do not know exist. An authenticated scan (with lab credentials) sees patch state and configuration; an unauthenticated scan sees only what an outsider sees — professionals run both and label which is which. The worked example (discover_lab.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"== live hosts ==\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l12-cvss-scoring": {
  "why": "CVSS scores the severity of a vulnerability in a standard environment — not the risk to YOUR estate. v3.1's Base metrics (Attack Vector, Complexity, Privileges, User Interaction, Scope, CIA impact) produce the 0.0–10.0 number; v4.0 refines the same idea with clearer attack requirements and supplemental metrics. The worked example (cvss_lab.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"score: 7.5\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l12-cwe-cpe": {
  "why": "CVE names one instance; CWE names the CLASS of weakness behind it (CWE-79 is cross-site scripting as a class, CWE-89 SQL injection, CWE-121 stack-based buffer overflow — the class your Level 4 C lesson met); CPE names the exact product, version and edition a record applies to. Triage fails in two boring ways: fixing one CVE while its CWE class lives on in ten other places, and patching the wrong product line because the CPE was read loosely. The worked example (cpe_match.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"AFFECTED: apache http_server 2.4.62\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l12-validation-fp": {
  "why": "A finding is a claim with evidence, and validation is how the claim earns its severity. Banner-based claims die against backported distro packages; version claims die against changelogs; 'exploitable' claims must be checked SAFELY — by configuration review, vendor advisories, and lab reproduction against your own training targets, never by attacking production or third-party systems. The worked example (validate_finding.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"Web server vulnerable (banner version match)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l12-asset-criticality": {
  "why": "Risk = severity × exposure × criticality. The identical unpatched service is an emergency on the internet-facing payment server and a scheduled task on an isolated lab VM. The worked example (rank_queue.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"  7.5  Payment server TLS flaw\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l12-patch-management": {
  "why": "Patch management is the operating rhythm behind remediation: inventory-driven applicability (CPE matching from l12-cwe-cpe), test rings (pilot group before fleet), maintenance windows agreed with owners, rollback plans for the patch that breaks, and exception handling with expiry dates. The planner below turns a simulated patch Tuesday into rings and windows instead of a stampede. The worked example (patch_planner.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"P-101  ring-0 emergency           KEV-listed, internet-facing\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l12-remediation-workflow": {
  "why": "The lifecycle is a loop, not a scan: Discover → Validate → Prioritize → Remediate → Verify → Report → (repeat, because the estate changed overnight). Each stage has an owner and a clock: KEV-listed internet-facing findings get days, not quarters. The worked example (vuln_tracker.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"KEV RCE on file server: new -> validated\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l12-remediation-verification": {
  "why": "The lifecycle closes: discover → validate → prioritize → remediate → VERIFY → report, then repeat on cadence. Verification is the step programs skip and attackers invoice: rescan the fixed asset, re-run the original check, and only then close — with the evidence attached. The worked example (finding_lifecycle.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"remediating -> closed allowed? False\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l12-reporting": {
  "why": "A vulnerability report is two documents wearing one coat: an executive summary (what is at risk, in business language, with the decision needed) and finding entries an engineer can execute without a meeting (asset, evidence, severity with its vector, exploitation status, exact fix, retest method). This lesson builds the entry format as data and renders both views from it — write once, read at two altitudes. The worked example (report_entry.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"ENGINEER VIEW\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-scope-roe": {
  "why": "A pentest is defined before it is executed: scope (exact hosts, apps, accounts), rules of engagement (allowed techniques, hours, prohibited actions, emergency contacts), and written authorization from the system owner. This lesson turns the Level 0 scope template into a full engagement document for your own lab target (the training app on localhost plus your host-only VM network) and shows how every later step traces back to a line in it. The worked example (roe_lab.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"A complete one-page RoE: every later command in this level can point at a line here that permits it.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-asset-inventory": {
  "why": "Before recon comes the client's own truth: the asset inventory the engagement starts from — hosts, owners, criticality, known exclusions — reconciled against what discovery finds. Every delta is a conversation (an unlisted in-scope host, a listed host that no longer exists, a critical system nobody flagged). The worked example (reconcile.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"192.168.56.10 lab server — confirmed\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-recon": {
  "why": "Recon in an authorized engagement is disciplined observation of the scoped target: asset inventory confirmation, DNS and service enumeration of YOUR lab hosts, and technology fingerprinting of your training app. Passive first (records, headers, public lab notes), then active (scans) — always inside scope, always logged. The worked example (recon_lab.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"recon saved to ~/pentest-lab/evidence\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-enumeration": {
  "why": "Enumeration goes one layer deeper than discovery: for each service on your lab server, what exactly is it, what does it offer anonymously, and what does it reveal? SMB shares, NFS exports, SNMP strings and directory listings on YOUR OWN lab machines are the classic teachers — each checked with the service's own polite protocol tools, each answer written into the target map. The worked example (enum_lab.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"== SMB shares (lab) ==\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-vuln-validation": {
  "why": "Inside an engagement, Level 12's validation discipline runs at engagement speed: each scanner lead is corroborated (changelog, config, advisory), safely reproduced against the LAB copy where the RoE allows, and graded — confirmed, corroborated, or unverified lead — before it earns a line in the report. The validator below is the engagement's evidence gate, identical in spirit to l12's, tuned for RoE limits. The worked example (engagement_validator.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"Training app upload accepts executable files\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-exploitation": {
  "why": "Exploitation in this course happens in exactly two places: your intentionally vulnerable training app on localhost, and your own disposable lab VMs you can snapshot and revert. The goal is proof of impact at the minimum depth that proves it — a screenshot of the flaw's effect, a harmless marker read, a test account's own data — never real data, never persistence on shared systems, never a third-party target. The worked example (prove_impact.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"baseline captured\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-post-exploitation": {
  "why": "After proof, the professional questions are: what does this access MEAN (impact assessment against the asset's criticality), what evidence must be preserved, and how is every lab change reverted (cleanup)? In the lab you practise the paperwork of post-exploitation — impact statements, evidence hashing, and a cleanup log — on your training environment. The worked example (cleanup_log.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"cleanup started: <timestamp>\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-workflow-14": {
  "why": "The workflow this course certifies, end to end: 1 authorization & scope signed · 2 RoE agreed · 3 asset inventory confirmed · 4 passive recon · 5 active discovery · 6 enumeration · 7 vulnerability analysis · 8 exploitation plan (proof goals) · 9 controlled exploitation (lab/authorized only) · 10 impact assessment · 11 evidence preservation · 12 cleanup · 13 report (findings + fixes) · 14 retest after remediation. Every step names its input and output; skipping a step does not save time, it moves the cost into the report or the incident review. The worked example (workflow14.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"Fourteen steps, each with a named input and output — the lab engagement in Project D follows this page exactly.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-impact-assessment": {
  "why": "Impact assessment answers the client's real question — 'so what can an attacker actually DO?' — inside the RoE's limits: demonstrate reachability and consequence on LAB data and lab accounts (read one seeded record, write one marker file, capture the screenshot), never exfiltrate real data, never persist, never DoS. The evidence pack below is the standard: each demonstrated impact is one line — action, artefact, screenshot id — and anything not demonstrated is labelled 'potential, not demonstrated'. The worked example (impact_pack.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The pack prints with the labelling rule visible: demonstrated impact carries artefacts; potential impact carries its reasoning and its limits.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-report-template": {
  "why": "The report is the product. Its skeleton: cover + engagement metadata (scope, RoE, dates) · executive summary (risk in business language, top decisions) · methodology (the 14 steps, tools with versions) · findings (each: title, asset, severity + vector, evidence, impact, fix, retest) · appendices (evidence index, cleanup log, retest results). The worked example (finding_entry.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"TITLE     Broken object-level authorization on training app orders API\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l13-evidence-cleanup-retest": {
  "why": "An engagement ends as carefully as it began: the evidence folder is complete and hash-listed, every lab account created is removed, every marker file deleted, every config touched is restored (with the restoration verified), and the client receives remediation guidance ordered by risk with owners. The retest — after fixes — re-runs ONLY the finding checks plus a regression pass on neighbours, and closes each finding as Fixed / Partially fixed / Not fixed with fresh evidence. The worked example (cleanup_check.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"== lab accounts created by the engagement (must be gone) ==\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Engagement work is billable only inside its paper: scope, evidence, cleanup. Clients renew testers whose reports they can act on; this lesson's artefacts are the interview portfolio for testing roles.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l14-domains-dcs": {
  "why": "The skeleton under everything in this level: a domain is a security boundary administered by domain controllers (DCs) holding the directory database; forests contain domains; organizational units (OUs) structure objects for delegation and policy; users, groups and computer accounts are the objects every later lesson manipulates. The map below prints the lab forest's shape — read it until the hierarchy is boring, because every attack path and defense in this level is a walk on this skeleton. The worked example (lab_forest.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The map prints in full: one forest, one domain, two DCs, an OU tree, and the replication line the whole structure stands on.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Enterprise and endpoint roles live in this machinery: directory, policy and identity are where large organizations are actually defended — and where assessors find their highest-value findings.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l14-ad-architecture": {
  "why": "AD is a database + authentication service for an organisation: a domain groups users, computers and policy under domain controllers (DCs); a forest is the security boundary containing one or more domains; trusts let domains authenticate across. You study it on an isolated lab (a Windows Server evaluation VM + one client VM on a host-only network) — the standard, legal way every enterprise defender learns the system they must protect. The worked example (read_ad.ps1) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"DNSRoot / Forest / DomainMode for your lab domain, its DC list, and enabled vs disabled user counts — the lab's identity map.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Enterprise and endpoint roles live in this machinery: directory, policy and identity are where large organizations are actually defended — and where assessors find their highest-value findings.",
  "wrong": "The common wrong runs: an execution-policy refusal means YOUR lab's policy is doing its job — set it for the lab session only (Set-ExecutionPolicy -Scope Process) and note that needing it is itself a finding about the script's provenance. A blank result usually means the query filtered everything out: remove the filter and count first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l14-kerberos": {
  "why": "Kerberos replaces passwords-on-the-wire with tickets: the client authenticates to the KDC (on the DC), receives a Ticket-Granting Ticket (TGT), exchanges it for service tickets, and presents those to services — the service never sees the password. LDAP is the directory's query language (ports 389/636) used to find and read objects. The worked example (kerberos_lab.ps1) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"klist shows a TGT for krbtgt/<LABDOMAIN> plus service tickets for hosts you touched — each with start/end times (ticket lifetimes are a defense dial).\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Enterprise and endpoint roles live in this machinery: directory, policy and identity are where large organizations are actually defended — and where assessors find their highest-value findings.",
  "wrong": "The common wrong runs: an execution-policy refusal means YOUR lab's policy is doing its job — set it for the lab session only (Set-ExecutionPolicy -Scope Process) and note that needing it is itself a finding about the script's provenance. A blank result usually means the query filtered everything out: remove the filter and count first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l14-dns-integration": {
  "why": "AD clients find DCs through DNS SRV records (_ldap._tcp.dc._msdcs), and DCs register those records themselves — so DNS is not adjacent to AD, it is AD's front door. The failure classes: SRV records pointing at dead DCs, workstations using public resolvers that cannot resolve the domain at all, and dynamic-update settings that let any host rewrite identity records. The worked example (ad_dns_checks.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"== who are the DCs, per DNS? ==\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Enterprise and endpoint roles live in this machinery: directory, policy and identity are where large organizations are actually defended — and where assessors find their highest-value findings.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l14-group-policy": {
  "why": "Group Policy Objects (GPOs) push configuration — password policy, audit settings, software restrictions, firewall rules — from the DC to whole OUs at once. That leverage is the defense (one setting hardens a thousand machines) and the risk (one bad or hijacked GPO harms a thousand machines). The worked example (gpo_lab.ps1) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"An HTML report of every setting in the GPO plus its link list — the evidence for 'this policy actually applies where we think it does'.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Enterprise and endpoint roles live in this machinery: directory, policy and identity are where large organizations are actually defended — and where assessors find their highest-value findings.",
  "wrong": "The common wrong runs: an execution-policy refusal means YOUR lab's policy is doing its job — set it for the lab session only (Set-ExecutionPolicy -Scope Process) and note that needing it is itself a finding about the script's provenance. A blank result usually means the query filtered everything out: remove the filter and count first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l14-enterprise-permissions": {
  "why": "AD permissions are ACLs on objects: who may reset passwords in this OU, edit this GPO, or modify this group's membership. Delegation is the deliberate granting of narrow rights (helpdesk resets passwords for Staff OU — nothing else); misdelegation is the quiet catastrophe (a broad group holding write rights over Admins OU). The worked example (acl_audit.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"Helpdesk   ResetPassword  OU=Staff               ok\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Enterprise and endpoint roles live in this machinery: directory, policy and identity are where large organizations are actually defended — and where assessors find their highest-value findings.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l14-ad-attacks-defenses": {
  "why": "Taught defense-first, in your isolated lab only: password spraying (defense: lockout + MFA + banned-password lists) · Kerberoasting (defense: long random service-account passwords / gMSA, AES-only, monitoring for RC4 ticket requests) · unconstrained delegation (defense: constrained/resource-based delegation, mark sensitive accounts 'cannot be delegated') · ACL misconfigurations on OUs/GPOs (defense: least-privilege delegation audits) · LLMNR/NBT-NS poisoning (defense: disable both, require SMB signing). Each attack is studied as a diagram + detection, never practised against any real directory. The worked example (ad_defense_audit.ps1) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"Lists to review: stale SPN service accounts, any unconstrained-delegation trusts, and admin accounts missing the cannot-be-delegated flag — your lab fix list.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Enterprise and endpoint roles live in this machinery: directory, policy and identity are where large organizations are actually defended — and where assessors find their highest-value findings.",
  "wrong": "The common wrong runs: an execution-policy refusal means YOUR lab's policy is doing its job — set it for the lab session only (Set-ExecutionPolicy -Scope Process) and note that needing it is itself a finding about the script's provenance. A blank result usually means the query filtered everything out: remove the filter and count first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l14-enterprise-hardening": {
  "why": "Enterprise defense is architecture: Tier 0 (DCs, identity) is administered only from hardened privileged-access workstations, never from daily laptops; Tier 1 (servers) and Tier 2 (workstations) credentials never log on upward. LAPS gives every machine a unique, auto-rotated local admin password (killing pass-the-hash reuse across the fleet). The worked example (tier_checks.ps1) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"GPO presence, the Domain Admins roster (short = healthy), and recent logon evidence to eyeball for tier violations.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Enterprise and endpoint roles live in this machinery: directory, policy and identity are where large organizations are actually defended — and where assessors find their highest-value findings.",
  "wrong": "The common wrong runs: an execution-policy refusal means YOUR lab's policy is doing its job — set it for the lab session only (Set-ExecutionPolicy -Scope Process) and note that needing it is itself a finding about the script's provenance. A blank result usually means the query filtered everything out: remove the filter and count first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l14-tiered-admin": {
  "why": "The tier model is the enterprise answer to credential theft: Tier 0 (domain controllers, identity systems) is administered ONLY from Tier 0 workstations with Tier 0 accounts; Tier 1 (servers) and Tier 2 (workstations) likewise — and no account ever logs on 'downward' or 'upward' across tiers, so a compromised workstation can never hand an attacker a domain-admin token. The checker below encodes the logon rules as policy you can audit against a simulated logon matrix. The worked example (tier_check.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"T0-admin       -> DC01       OK\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l14-identity-monitoring-dns": {
  "why": "AD lives on DNS: domain controllers are found via SRV records (_ldap._tcp), so DNS hygiene (only DCs and trusted resolvers serving the zone, no stale records pointing at decommissioned hosts) is identity hygiene. Monitoring completes the picture: the simulated event review below covers the directory's alarm bells — directory replication requests from non-DCs (4662 with replication GUIDs), ticket anomalies, and privileged-group membership changes (4728/4732) — each mapped to the response it should trigger. The worked example (ad_watch.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"4662 WS-4471 - replication GUID requested by a WORKSTATION\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-cloud-models": {
  "why": "The service models decide the shared-responsibility line before any product name matters: IaaS rents computers (you patch the OS up), PaaS rents a platform (you secure the app and data), SaaS rents software (you govern access and configuration). AWS, Azure and GCP differ in names, not in this logic — the classifier below files simulated services by model and states the first security duty each one hands you. The worked example (cloud_models.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"IaaS      Virtual machine (EC2 / Azure VM / Compute Engine)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-shared-responsibility": {
  "why": "Cloud does not remove responsibility; it splits it. The provider secures the physical estate and hypervisor; you always own your data, identities, configurations and what you deploy. The worked example (shared_responsibility.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"Read it as: the further right a row's 'you' column reaches, the more of this level is about you.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-cloud-iam": {
  "why": "Cloud IAM decides who can do what to which resource — and its failures are the cloud's front door. Rules that survive every provider: humans get roles via groups, never direct policies; workloads get their own identities with scoped permissions; access keys are a last resort (temporary credentials preferred); standing AdministratorAccess for daily work is a finding, full stop. The worked example (iam_policy_check.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"problems: none — scoped action on a scoped resource\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-storage-secrets": {
  "why": "The two headlines that repeat yearly: a storage bucket left public, and secrets (keys, tokens, passwords) sitting in code, images or config. Defenses are boring and total: storage private by default with account-level public-access blocks; secrets in a dedicated manager (or the platform keystore), injected at runtime, rotated on schedule and immediately on suspicion; nothing secret in git — ever — because history is forever (Level 7's rule). The worked example (storage_secrets_check.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"PASS on all six lines for the healthy simulated account — flip any value in your notes and watch which single FAIL becomes the headline finding.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-misconfig-detection": {
  "why": "You cannot fix what you cannot see: cloud audit logs (control-plane events), configuration snapshots, and posture scanners turn 'we think it is private' into dated evidence. The working rhythm: enable logging BEFORE you need it, snapshot configuration, scan posture against a baseline (the Cloud lab checklist), and alert on the short list of changes that should never be silent — public exposure, IAM grants, logging itself being switched off. The worked example (posture_diff.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"ALERT: bucket_public changed off->on\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-docker-security": {
  "why": "A container is a process with fences: namespaces isolate its view, cgroups limit its appetite, capabilities trim its powers. Docker security is the discipline of the defaults: run as non-root, pin images by digest, scan the image's layers, drop unneeded capabilities, never mount the Docker socket (socket access ≈ host root), and treat the daemon's root-equivalence as the design fact it is. The worked example (docker_audit.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"FAIL  root user -> set a non-root USER in the image\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-containers-k8s": {
  "why": "Containers share the host kernel (Level 1's distinction), so container security is: minimal, scanned images (no secrets baked in, non-root user, pinned versions); runtime least privilege (drop capabilities, read-only filesystems, no privileged pods); and for Kubernetes, a secured control plane — RBAC on the API server, no public dashboard, secrets as secrets (not configmaps), network policies between pods. Trivy from Level 7 returns as the image scanner; the Dockerfile below shows the secure shape. The worked example (Dockerfile.secure) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"An image that runs as a non-root user, carries no secrets, and starts from a pinned minimal base — scan it, sign it, then deploy it.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-kubernetes-security": {
  "why": "Kubernetes concentrates the level's lessons: its API server is a control plane (IAM = RBAC + admission), pods are workloads with service-account identities, and the classic failures rhyme with Docker's — privileged pods, hostPath mounts, cluster-admin bindings handed out like stickers, secrets as plain environment variables. The review below reads a simulated pod spec with the same eyes as the Docker audit, one layer up. The worked example (k8s_review.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"FAIL privileged pod — container fences are OFF\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-serverless-cicd": {
  "why": "Serverless functions trade server management for new duties: each function gets a minimal execution role (one function, one job, few permissions), small dependency surfaces, and secrets from the manager — a function with an admin role is a tiny Tier-0. Infrastructure as Code makes configuration reviewable (and scannable before deploy); CI/CD pipelines hold the master keys to production, so the pipeline itself is Tier-0: protected branches, signed artifacts, scanned dependencies (supply chain), and secrets that never print in logs. The worked example (iac_lint.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"BLOCK: reports would deploy PUBLIC\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-cloud-ir": {
  "why": "Cloud IR runs on the provider's evidence: control-plane audit logs show who changed what and when; access logs show whether the public window was used. The play: preserve logs first, close the exposure, rotate anything that could have been read, scope with the logs (not with hope), then write the timeline. The worked example (cloud_ir_scope.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"exposure window: 2026-11-07T09:12Z -> 2026-11-09T08:02Z\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-iac-supply-chain": {
  "why": "Infrastructure as Code moves misconfiguration from accidents to templates — one bad Terraform line deploys the same flaw fifty times, and one good line fixes fifty. The defenses are pipeline-native: scan the IaC before apply (the checklist engine from l15-misconfig-detection, run in CI), pin provider/module/image versions, verify artefacts by digest, and keep a software bill of materials so 'are we affected?' is a query, not an archaeology dig. The worked example (iac_scan.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"FINDING: public storage ACL in code — will replicate to every environment\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l15-cloud-logging": {
  "why": "Cloud detection starts from the control-plane log (AWS CloudTrail, Azure Activity Log, GCP Audit Log — the concepts are identical): who called which API, from where, with what result. The non-negotiables: logging ON in every region/account from day one, logs shipped to a SEPARATE account the workload cannot delete, alerting on the handful of calls that change security itself (policy edits, logging changes, new keys). The worked example (trail_hunt.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"ALERT privilege granted      nadia    AttachUserPolicy   AdministratorAccess attached to a NEW user\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Cloud security roles are evidence roles: policies read as code, logs read as timelines, findings written with the artefact attached. Every artefact in this lesson is shaped like a deliverable you would hand a cloud team.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-android-architecture": {
  "why": "The audit's map: Linux kernel at the base, HAL and native libraries, the Android Runtime (ART) running app bytecode, the framework APIs, and apps on top — with the sandbox (next lesson) enforced by kernel user IDs. Knowing which layer a control lives in tells you where its failures hide: a TLS flaw is framework/config, a sandbox escape is kernel, an exported component is manifest/framework. The worked example (android_stack.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The stack prints with each layer's audit address: where you look, and who can fix what you find.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-apk-anatomy": {
  "why": "An APK is a zip with a structure: AndroidManifest.xml (the declarations), classes.dex (the code), resources, assets, and signatures. The manifest is the assessor's first document: permissions requested, components declared, which components are exported (reachable by other apps), the debuggable flag, and the network security config pointer. The worked example (apk_inventory.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"SHA-256 of the APK, its dex/lib inventory, and the manifest lines that matter: permissions, exported components, debuggable — your first findings list.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-components-ipc": {
  "why": "Four component types make an app reachable: activities (screens), services (background work), broadcast receivers (event listeners), and content providers (data doors). Exported components are the surface: an exported provider without a permission is a data leak with an API; an exported activity can be launched by any app; intent filters define who may knock. The worked example (component_audit.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"activity  .MainActivity    exported=True perm=None -> ok\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-permissions-intents": {
  "why": "Android apps are islands that talk by intents (messages naming an action or a component). Runtime permissions gate sensitive islands (contacts, location, microphone) behind user consent at use time. The worked example (intent_surface.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"One finding (AdminReceiver) from a five-line map — the enumeration habit applied to apps.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-sandbox-storage-deep": {
  "why": "The sandbox is kernel-enforced: install assigns a Linux UID, app-private storage (/data/data/<pkg>) is owned by that UID, and SELinux adds mandatory policy over the discretionary basics. Storage choices follow from it: internal private (sandbox-protected), external/shared (other apps and users can reach it — never secrets), and the Keystore for keys that must not leave hardware-backed protection. The worked example (storage_map.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The map prints in full: five homes, five reachability classes, one rule.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-storage-keystore": {
  "why": "Mobile storage rules mirror the server rules with phone physics: the app sandbox gives each app private storage, but anything in external/shared storage, world-readable files, logs, or unencrypted preferences is exposed to other apps, backups, or anyone holding the device. Real secrets (tokens, keys) belong in the Android Keystore — hardware-backed where available, keys that never leave it — with EncryptedSharedPreferences/Jetpack Security wrapping everyday values. The worked example (storage_audit.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"(run-as refused: release build is not debuggable — that itself is a PASS)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-network-webview": {
  "why": "Android's network security config declares, per domain: cleartext allowed or not, certificate pinning, and which CAs to trust (never user-added CAs in release builds — that is the interception trap). A custom TrustManager that accepts everything deletes TLS (Level 8's verify=False in Java clothing). The worked example (network_security_config.xml) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"Cleartext off, system CAs only, API domain pinned — three lines that close the classic mobile network findings.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-adb-emulator": {
  "why": "The emulator is the mobile lab: a device you own completely — snapshot it, root it, reset it — running only your own and training apps. ADB is its remote control: install/uninstall, pull/push files, read logcat, inspect packages and permissions. The worked example (adb_first_hour.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"List of devices attached\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-mobsf-jadx-frida": {
  "why": "The bench workflow: MobSF (static scanner) triages the APK — permissions, components, code smells, secrets in strings; JADX decompiles dex to readable Java so you can verify what the scanner flagged in actual code paths; Frida (dynamic instrumentation) observes a RUNNING app — on your emulator, on training apps or apps you built — to watch crypto/storage/network calls as they happen. Each tool answers a different question; the report cites which tool produced which evidence. The worked example (bench_session.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"[1] MobSF report → [2] JADX verification → [3] Frida observation: static flags, code truth, runtime truth — in that order.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-frida-fundamentals": {
  "why": "Frida injects a JavaScript bridge into a running process so you can observe and hook function calls LIVE — on your own training apps, on your emulator, as the dynamic twin of JADX's static reading. The professional uses: verify that the release build really pins certificates (hook the check, watch it fire), confirm what a function actually receives vs what the code suggests, and test root/tamper detections. The worked example (frida_hook.js) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"[READY] hook installed — exercise the login feature now\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong runs: 'Java is not defined' means the script ran outside the app's process or before the runtime attached — re-attach to YOUR training app and wait for the ready line before exercising the feature. Silence after the hook usually means the feature was never exercised, not that the hook failed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l16-masvs-audit": {
  "why": "MASVS is the checklist (storage, crypto, auth, network, platform, code, resilience), MASTG is the test guide that turns each requirement into a procedure. Auditing your training app against them is the level's working method: pick a category, run the MASTG-style test on the emulator, record Pass/Fail with evidence, and let the failures become the fix list. The worked example (masvs_sheet.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"MASVS-STORAGE-1    PASS  Secrets in Keystore-backed storage\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Mobile security work is audit work: standards (MASVS) turned into tests, tests turned into evidence, evidence turned into release decisions. This lesson's outputs mirror that chain.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-rest-security": {
  "why": "REST's shape creates its risks: resources are URLs (so authorization must be per-resource), verbs carry intent (so a read-shaped endpoint must never mutate), and statelessness pushes state into tokens and caches (so token discipline from l17-api-auth-tokens is load-bearing). Add the classics: predictable IDs, verbose errors, missing pagination bounds. The worked example (route_review.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"GET    /orders/{id}                 ok\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-api-authz": {
  "why": "The OWASP API Security Top 10 2023 leads with API1 Broken Object Level Authorization (BOLA) and API5 Broken Function Level Authorization — the Level 8 A01 pattern at API scale: authentication present, per-object and per-function authorization missing. The defense is unchanged and server-side: load the object, compare its owner to the token's identity, 404 on mismatch; gate admin functions by role, not by hiding the button; and lock both with two-account regression tests against your own localhost training API. The worked example (api_authz.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"(200, {'owner': 'nadia', 'total': 59.0})\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-api-auth-tokens": {
  "why": "API auth reuses Level 11's machinery with API failure modes: JWTs must pin the algorithm server-side, verify the signature, and check exp/aud/iss — the alg=none and algorithm-confusion failures (ctf-jwt) are what happen otherwise. API keys identify a PROJECT, not a user; they live in headers, never URLs (URLs get logged); OAuth access tokens are scoped and short-lived, refresh tokens rotate. The worked example (jwt_checklist.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"['alg not pinned/allowed: none', 'token expired', 'audience mismatch — token minted for another API']\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-mass-assignment-deep": {
  "why": "API3:2023 deserves its own lesson: when a handler binds the request body straight to a data model, the client gains write access to every property the model has — role, balance, verified flags, ownership. The defense is boring and total: explicit per-endpoint DTOs (allowlists of bindable fields), server-owned fields set only by server logic, and a regression test per endpoint that submits one forbidden field and demands rejection. The worked example (dto_binder.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"vulnerable: {'id': 7, 'display_name': 'Nadia R.', 'role': 'admin', 'verified': True}\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-rate-limit-gateway": {
  "why": "API4:2023 (unrestricted resource consumption) and API10 (unsafe consumption of other APIs) frame this lesson: every endpoint needs a cost budget — requests per identity/IP, payload sizes, pagination caps, expensive-query timeouts — enforced at the gateway so app code is not the first wall. Scraping, credential stuffing and inventory hoarding are all just 'too much, too fast' wearing different hats; the limiter below is the shape (token bucket per key) you will meet inside every gateway product. The worked example (rate_limit.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"[True, True, True, True, True, False, False]\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-graphql-rest": {
  "why": "GraphQL moves the risks, it does not remove them: field-level authorization (a type being queryable does not make every field public), depth/complexity limits (one nested query can cost a thousand REST calls), introspection off in production, and batching abuse. REST keeps its classics: verb tampering, version drift (the forgotten v1 with old rules), and content-type confusion. The worked example (gql_cost.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"estimated cost: 203\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-gateway-secrets": {
  "why": "The gateway is the portfolio of cross-cutting controls in one place — TLS termination, authentication offload, rate limiting (l17), WAF rules, request-size caps, and routing — valuable exactly because it is uniform, and dangerous for the same reason: one gateway misconfiguration is every API's misconfiguration. Its own secrets (upstream keys, signing certs) live in a vault with rotation, never in gateway config files committed to a repo. The worked example (gateway_check.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"FAIL  TLS floor -> raise the floor to TLS 1.2+\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-api-testing-design": {
  "why": "Design rules that prevent the level: deny by default, authorize per object and function, validate every input against a schema (including what you consume), version deliberately, and log security events with the token's identity (never the token). Then prove it continuously: an automated suite that runs the BOLA test, the function-gate test, the mass-assignment test and the rate-limit test against the training API on every build — security regression testing, the Level 8 habit grown to API size. The worked example (api_regression.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"PASS owner reads own order\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-webhooks-rest": {
  "why": "Webhooks invert the API: now YOU are the server receiving calls — authenticate them by verifying the provider's HMAC signature over the raw body with a shared secret, timestamp-window the events against replay, and process idempotently because providers retry. REST deep-cuts close the level: verb tampering (the read-only key that can DELETE), content-type confusion (parsers accepting XML entities on a 'JSON' API), and error hygiene (stack traces are recon gifts). The worked example (webhook_verify.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"ACCEPT: process idempotently (providers retry)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-top10-survey": {
  "why": "The full 2023 list, as a survey map for the level: API1 BOLA · API2 Broken Authentication · API3 Broken Object Property Level Authorization (mass assignment + excessive exposure) · API4 Unrestricted Resource Consumption · API5 Broken Function Level Authorization · API6 Unrestricted Access to Sensitive Business Flows · API7 SSRF · API8 Security Misconfiguration · API9 Improper Inventory Management · API10 Unsafe Consumption of APIs. Every earlier lesson in this level owns one or more entries; this lesson's matrix is the coverage proof — and the two entries not yet owned (business flows, inventory) get their treatment here. The worked example (api10_matrix.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"API1 BOLA                    l17-api-authz + two-account suite\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-api-inventory": {
  "why": "API9 (Improper Inventory Management) gets its own lesson because it is the precondition of every other control in this level: you cannot put a per-object check, a rate budget, or a gateway rule on an API you do not know exists. The inventory discipline has four parts — DISCOVER (gateway logs, DNS, code repos, cloud accounts: four independent nets, because each misses some), CLASSIFY (owner, data class, auth state, exposure), CONTROL (bring the found API under the level's standard or retire it), and PREVENT (a paved path: new APIs are born registered, through the gateway, or they do not ship). The worked example (api_inventory.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"api.example.test/v1                seen by 2 net(s): gateway, dns\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l17-api-errors-inventory": {
  "why": "The tail of the API lifecycle: errors that teach attackers nothing (generic client messages, detailed server logs, correlation IDs joining the two), versions that are born with a retirement date, and deprecation executed as a security control — headers announcing sunset, traffic dashboards proving the old version is truly quiet, then the kill. This lesson's checker reviews a simulated API's tail-end hygiene. The worked example (api_tail_check.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"errors: FAIL — client sees internals\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "API security is where web, identity and gateway skills meet; product-security and platform roles test exactly these judgments — per-object authorization, token discipline, abuse budgets — in interviews and in design reviews.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-ir-lifecycle": {
  "why": "NIST SP 800-61's cycle as one machine: PREPARATION (the kit, the contacts, the practiced team — built before any incident), DETECTION & ANALYSIS (triage, scoping, the timeline), CONTAINMENT/ERADICATION/RECOVERY (l18-ir-playbooks, sequenced), and POST-INCIDENT ACTIVITY (the review that converts one incident into permanent improvement — the step whose absence guarantees repetition). The tracker below models an incident's passage and refuses to skip the learning stage. The worked example (ir_tracker.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"done    preparation\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "IR roles are hired on lifecycle discipline: preparation that writes tomorrow's evidence, containment sequenced by business impact, and a lessons-learned stage that actually changes the program. This lesson's artefacts are written exactly the way incident records are reviewed.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-disk-memory": {
  "why": "Extends l18-ir-forensics: order of volatility decides what you collect first (registers/cache → RAM → network state → disk → logs → backups), because the most fragile evidence dies first. Disk imaging is a bit-for-bit copy through a write-blocker mindset: hash the source, image it, hash the image, analyse only the image. The worked example (image_disk.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"source : <sha256 of the practice image>\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Forensic and IR work is hired on trust in method: volatility order, hash discipline, facts separated from analysis. The artefacts here are written the way a casefile that may be read aloud must be written.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-filesystem-forensics": {
  "why": "Deletion usually unlinks a name; the data blocks wait to be reused. Filesystem forensics exploits that gap — carefully, on images: journal entries showing recent operations, unallocated-space recovery carving file signatures, timestamps in their FOUR meanings (modified, accessed, metadata-changed, created) read as a set, and alternate data streams hiding content behind innocent filenames on NTFS. The worked example (fs_timeline.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"invoice.pdf  C40 M40 A1 MC40 old file suddenly read yesterday -> collection interest\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Forensic and IR work is hired on trust in method: volatility order, hash discipline, facts separated from analysis. The artefacts here are written the way a casefile that may be read aloud must be written.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-timeline-logs": {
  "why": "A timeline merges every source — file times, Windows events, Linux logs, browser artifacts, network flows — onto ONE clock (UTC) so cause precedes effect visibly. The crafts: normalize timezones before merging (a two-hour 'impossibility' is usually a timezone), distrust single timestamps (collect MACB — modified/accessed/changed/born — where available), and separate facts (log lines) from analysis (your labelled interpretation) in the report, exactly as Project C grades. The worked example (timeline_merge.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"04:12:03Z win-event   4625 failed logon burst starts\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Forensic and IR work is hired on trust in method: volatility order, hash discipline, facts separated from analysis. The artefacts here are written the way a casefile that may be read aloud must be written.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-browser-artifacts": {
  "why": "Browsers keep the user's day: history, downloads with their source URLs, cookies, cache, and session data — SQLite databases and JSON stores that the timeline lesson's method turns into testimony. Application artifacts extend it: prefetch proving a program ran, link files proving a path was opened, jump lists, shellbags. The worked example (browser_hist.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"2026-11-02 09:14 https://mail.training.example/inbox\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Forensic and IR work is hired on trust in method: volatility order, hash discipline, facts separated from analysis. The artefacts here are written the way a casefile that may be read aloud must be written.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-ir-playbooks": {
  "why": "A playbook is a decision tree written in peacetime: for ransomware (isolate first — the l18 exception — then preserve, then scope), for account compromise (reset + revoke + scope the hour), for data exposure (preserve logs, close, rotate, notify). Chain of custody is the evidence twin: every artefact gets a note — what, from where, when (UTC), collected by whom, its hash, and every hand it passes through. The worked example (custody_note.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"item            auth.log extract (simulated)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Forensic and IR work is hired on trust in method: volatility order, hash discipline, facts separated from analysis. The artefacts here are written the way a casefile that may be read aloud must be written.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-memory-events": {
  "why": "A memory image is the running system frozen: process list (including ones hiding from the live OS), network connections, loaded modules, and in-memory artefacts — analysed here ONLY on practice images you create from your own lab VM. Windows events are the disk-side twin: 4625 (failed logon), 4624/4634 (logon/logoff), 4688 (process creation, with command lines when audited), 4720 (account created) — the timeline feedstock of l18-timeline-logs. The worked example (event_triage.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"4625 x 2\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Forensic and IR work is hired on trust in method: volatility order, hash discipline, facts separated from analysis. The artefacts here are written the way a casefile that may be read aloud must be written.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-windows-event-mastery": {
  "why": "Beyond l9's introduction: the analyst's core set — 4624/4625 (logon success/failure, with Logon Type carrying the story: 3 network, 10 remote interactive), 4688 (process creation, gold when command-line logging is on), 4720/4732 (account and group changes), 1102 (the log itself cleared — an alarm by absence), 7045 (service installed). The reader below turns a synthetic export into the investigation's first paragraph. The worked example (event_story.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"09:02 4625 Logon failure (type 3) — svc_backup\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Forensic and IR work is hired on trust in method: volatility order, hash discipline, facts separated from analysis. The artefacts here are written the way a casefile that may be read aloud must be written.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-linux-network-forensics": {
  "why": "The Linux evidence set: auth.log/secure (logons, sudo), the systemd journal (service stories), application logs, and network flow records (who talked to whom, when, how much — content-free but shape-rich). The crafts are the timeline crafts again: preserve first (copy + hash), read with filters not eyes, and let volumes speak (a 3 a.m. The worked example (linux_triage.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"== failed logons by source ==\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Forensic and IR work is hired on trust in method: volatility order, hash discipline, facts separated from analysis. The artefacts here are written the way a casefile that may be read aloud must be written.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-network-forensics": {
  "why": "Captures testify about movement: the PCAP discipline is filter-first (protocol and conversation views before packet spelunking), follow the stream to read a session as its participants saw it, and join capture facts to host facts (a beacon's period, an exfil's byte count, a DNS trail). The analyzer below computes the beacon fingerprint from a synthetic capture summary — period regularity is the tell machines cannot hide. The worked example (beacon_check.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"connections: 8  mean interval: 60.2s  max jitter: 1.8s\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Forensic and IR work is hired on trust in method: volatility order, hash discipline, facts separated from analysis. The artefacts here are written the way a casefile that may be read aloud must be written.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l18-ransomware-reporting": {
  "why": "Ransomware response sequences the whole level under pressure: isolate (the standing exception), preserve what the still-running systems hold, scope from identity + network evidence (how far did it spread?), eradicate the entry, recover from TESTED backups in order of business criticality, and monitor the recovered estate. Then the post-incident report closes the loop: timeline, root cause, what worked, and the corrective actions with owners and dates — the document Project C's casefile grows into at organizational scale. The worked example (pir_skeleton.md) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The skeleton prints in full — section 7 is the one executives read twice: every corrective action has an owner, a date, and a verification method.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Forensic and IR work is hired on trust in method: volatility order, hash discipline, facts separated from analysis. The artefacts here are written the way a casefile that may be read aloud must be written.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l19-malware-families": {
  "why": "Families are business models: loaders rent access (their job ends at the next stage's arrival), stealers harvest credentials and sessions in seconds, RATs provide hands-on control, ransomware monetizes encryption events, wipers destroy. Identification drives response — a stealer means sessions must die everywhere at once; a loader means hunt the FOLLOW-ON, which is the actual incident. The worked example (family_keys.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"S-1 -> STEALER\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Analysis roles are judged on graded claims: what was observed, what is inferred, what remains unknown. This lesson trains that grading on material that cannot hurt anyone.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l19-static-analysis": {
  "why": "Static analysis never executes the sample: hash it (identity + intel lookups), read its strings (URLs, paths, messages — hints, not proof), parse its structure (PE headers/sections/imports on Windows, ELF on Linux), and note its packer/entropy signals. Samples in this course are HARMLESS training files (EICAR-class test strings and samples you write yourself) handled in an isolated VM with no network and no shared folders. The worked example (static_triage.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"sha256 : <first 32 hex of the digest>...\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Analysis roles are judged on graded claims: what was observed, what is inferred, what remains unknown. This lesson trains that grading on material that cannot hurt anyone.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l19-pe-elf-structure": {
  "why": "Structure before behavior: PE headers announce imports (the capability menu — a process-injection import trio is a claim before a single instruction runs), sections with suspicious permissions (writable+executable), entry points, and compile timestamps worth distrusting. ELF mirrors it for Linux: headers, sections, dynamic symbols. The worked example (skeleton.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"- process injection capability (classic trio)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Analysis roles are judged on graded claims: what was observed, what is inferred, what remains unknown. This lesson trains that grading on material that cannot hurt anyone.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l19-assembly-reading": {
  "why": "You do not write assembly; you READ enough to answer analyst questions: what does this function take and return, where does it branch on a check, what API does it call with what arguments? The working minimum: registers as named boxes, CALL as 'run that, come back', conditional jumps as the if-statements of the low level, and the comparison right before them as the question being asked. The worked example (asm_read.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The block prints with its reading method: decisions and calls first — the analyst reads the branch structure, not the instruction stream.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Analysis roles are judged on graded claims: what was observed, what is inferred, what remains unknown. This lesson trains that grading on material that cannot hurt anyone.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l19-dynamic-sandbox": {
  "why": "Dynamic analysis runs the sample in a sealed environment — an isolated VM with host-only/fake networking (e.g. a simulated DNS/HTTP responder), snapshot taken, no shared folders, no real credentials — and watches: processes spawned, files written, registry/autostart changes, network requests attempted. The worked example (sandbox_checklist.sh) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"SEALED-ROOM CHECK (all must be YES before any dynamic run)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Analysis roles are judged on graded claims: what was observed, what is inferred, what remains unknown. This lesson trains that grading on material that cannot hurt anyone.",
  "wrong": "The common wrong runs: 'permission denied' means the script is not executable yet (chmod +x) or you are in the wrong directory; 'command not found' means a tool is missing from YOUR lab — install it in the lab, never substitute a different target. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l19-behavioral-sandboxing": {
  "why": "Beyond the dynamic basics: the complete behavioral session engineers the environment (fake user with documents and history — malware checks for a lived-in machine), runs LONG enough for delayed logic, interacts (clicks, dialogs answered) because samples wait for humans, and cross-reads every channel — process tree, filesystem, registry, network — as one timeline. The session plan below is the checklist form of the discipline. The worked example (sandbox_plan.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"image        lived-in snapshot: documents, browser history, office suite present\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Analysis roles are judged on graded claims: what was observed, what is inferred, what remains unknown. This lesson trains that grading on material that cannot hurt anyone.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l19-ghidra-gdb-yara": {
  "why": "Reverse engineering reads the sample's own logic: disassembly (the CPU's instructions) and decompilation (Ghidra's approximate C) answer 'what does this function do'; a debugger (GDB on your own compiled training programs) lets you watch registers and memory as YOUR code runs — learn debugging on code you wrote before ever pointing it at a sample. The level closes by signing findings as YARA rules: pattern + condition, tested against the training corpus, labelled test until validated (Level 7/20 discipline). The worked example (yara_training.yar) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"rule written: True\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Analysis roles are judged on graded claims: what was observed, what is inferred, what remains unknown. This lesson trains that grading on material that cannot hurt anyone.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l19-families-anatomy": {
  "why": "Families organize expectations: ransomware encrypts and extorts, stealers harvest credentials and cookies, RATs take interactive control, loaders fetch the real payload, wipers destroy. Anatomy grounds the expectations: a PE's sections (.text code, .rdata imports/strings, .data, .rsrc resources — where icons and embedded files hide) and headers (compile timestamp — unreliable, entry point, subsystem), an ELF's sections and dynamic symbols likewise. The worked example (anatomy.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"size: <n> bytes\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Analysis roles are judged on graded claims: what was observed, what is inferred, what remains unknown. This lesson trains that grading on material that cannot hurt anyone.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l19-assembly-iocs": {
  "why": "Assembly fundamentals are reading skills, not writing skills: registers as the CPU's hands (RAX/EAX accumulators, RIP the instruction pointer), the stack as the function's scratch space (CALL pushes, RET pops), and the handful of instructions that dominate real code (MOV, CALL, JMP/Jcc, CMP, PUSH/POP). IOC extraction then packages the analysis: from static + dynamic evidence, extract hashes, domains, IPs (documentation-range in all course material), file paths and mutex names — each tagged with its source observation, so the intel team receives evidence, not vibes. The worked example (ioc_extract.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"[static ] sha256         e3b0c4... (training sample hash)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Analysis roles are judged on graded claims: what was observed, what is inferred, what remains unknown. This lesson trains that grading on material that cannot hurt anyone.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l19-ioc-extraction": {
  "why": "IOCs have a shelf life ordered by the Pyramid of Pain: file hashes die at the next recompile, IPs and domains cost the adversary a little more, and TTPs (the behaviors) hurt most because changing them means rewriting the operation. Good extraction reports all layers with the pyramid labeled — the hash for today's sweep, the behavior for next quarter's detection — and never presents a hash list as an analysis. The worked example (ioc_grader.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"indicator                                      type     est. useful months\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Analysis roles are judged on graded claims: what was observed, what is inferred, what remains unknown. This lesson trains that grading on material that cannot hurt anyone.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-log-sources-map": {
  "why": "Detection begins at recording: endpoint process logs (with command lines), authentication logs, DNS, proxy, cloud control-plane trails, application audit logs — each source sees some ATT&CK techniques and is blind to others. The maturity question is a matrix: technique rows, source columns, and the honesty to mark blind cells. The worked example (telemetry_map.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"T1059 command execution    2 source(s)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Detection engineering is the SOC's force multiplier: telemetry mapped honestly, rules written portably, validation treated as the product. Hiring managers for detection roles ask exactly the questions this lesson's quiz asks.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-intel-lifecycle": {
  "why": "Extends l20-detection-engineering. Intelligence is a production line with quality control: direction (what questions matter) → collection (sources, graded) → processing (normalize, dedupe) → analysis (confidence-labelled judgments — the Reliability Policy in the Knowledge Base) → dissemination (the right altitude per reader) → feedback. The worked example (ioc_freshness.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"hash  age    2d  lab-verified               -> fresh indicator — usable with its grade attached\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-ttp-profiling": {
  "why": "The profile is intel's deliverable to detection: for a named adversary relevant to your sector — their ATT&CK techniques with confidence and recency, the infrastructure habits, the working hours and languages in artifacts, all sourced and dated. Built from primary reporting (vendor research, CISA advisories), never from vibes; refreshed on the intel cycle; and consumed as detection priorities — the profile's top techniques are the coverage matrix's first rows. The worked example (profile_rank.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"T1566.001 spearphishing attachment   7 reports, last seen 2mo ago\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Intel roles are judged on the join: sourced reporting converted into priorities a detection program can execute. This lesson's profile is the deliverable intel analysts are actually reviewed on.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-attack-sigma": {
  "why": "ATT&CK v20 (verified 2026-11-12 — see Knowledge Base) is the shared map: tactics (why) → techniques (how, e.g. T1059.001 PowerShell). The worked example (sigma_office_powershell.yml) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"A complete rule: parent/child behavior, ATT&CK tag, falsepositives written BEFORE deployment, status test until validation earns promotion.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-sigma-workshop": {
  "why": "The full Sigma cycle on one rule: write it against a process-creation scenario (the technique from the intel), convert with the official tooling to your SIEM's dialect, test against a benign lookalike and the malicious sample event, and ship it with its false-positive notes and validation date. The workshop's rule targets a classic: a script interpreter spawned by an office application. The worked example (rule_office_script.yml) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"Loaded as a Sigma rule: parent office process + child script interpreter = alert. Converted with sigma-cli to the SIEM dialect; the three test events behave exactly as the comment records (one fire, two silences).\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Detection engineering is the SOC's force multiplier: telemetry mapped honestly, rules written portably, validation treated as the product. Hiring managers for detection roles ask exactly the questions this lesson's quiz asks.",
  "wrong": "The common wrong runs: a YAML parse error is almost always indentation — spaces, never tabs, and one consistent step per level. Validate the file with any YAML parser before blaming the rule engine. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-siem-fundamentals": {
  "why": "The SIEM's three honest jobs: INGEST and PARSE (every source's dialect normalized into common fields — the tax you pay forever, in parser maintenance), STORE and SEARCH (the analyst's memory), and CORRELATE (rules joining events across sources: the auth failure + the VPN success + the impossible travel = one incident, not three rows). The correlation below joins a synthetic trio the way a rule does. The worked example (correlate.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"failures before success: 2\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Detection engineering is the SOC's force multiplier: telemetry mapped honestly, rules written portably, validation treated as the product. Hiring managers for detection roles ask exactly the questions this lesson's quiz asks.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-hunting-siem": {
  "why": "Triage is queue discipline: severity × confidence × asset criticality decides order, and every alert closes with a labelled verdict (true positive, benign true positive, false positive) that feeds tuning. Hunting is the proactive twin: start from a hypothesis ('beaconing to rare domains exists in our DNS'), query the estate's logs for its shape, and let the result — found or not — become a detection or a documented negative. The worked example (beacon_hunt.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"HUNT HIT: ws-01 -> updates.example: 9 queries across 9 hours (regular, persistent — investigate)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-threat-hunting-deep": {
  "why": "The hunt package disciplines the hunch: hypothesis (falsifiable, ATT&CK-mapped), data plan (which sources, which fields — the telemetry map arbitrates feasibility), execution (queries preserved, not just results), and outcomes in three honest buckets — found, not found (with the search's LIMITS stated), and detection-born (the hunt's lasting product: a rule or a telemetry fix). The planner below scores a hypothesis before anyone queries anything. The worked example (hunt_planner.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"T1071  Attackers beacon at fixed 60s intervals       READY\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Detection engineering is the SOC's force multiplier: telemetry mapped honestly, rules written portably, validation treated as the product. Hiring managers for detection roles ask exactly the questions this lesson's quiz asks.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-detection-validation": {
  "why": "A detection is a claim; validation is its experiment: emulate the technique (safely, in the lab range, coordinated — purple teaming is red and blue in the same room), observe whether the rule fires AND the alert is actionable, record the result in the coverage matrix (works / fires-but-noisy / blind / untested). Untested is the matrix's most honest and most common cell. The worked example (validate_matrix.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"DET-01 beacon periodicity  WORKS\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Detection engineering is the SOC's force multiplier: telemetry mapped honestly, rules written portably, validation treated as the product. Hiring managers for detection roles ask exactly the questions this lesson's quiz asks.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-killchain-osint": {
  "why": "The Kill Chain (Lockheed Martin) sequences an intrusion — reconnaissance, weaponization, delivery, exploitation, installation, command & control, actions on objectives — so defenders can place controls per stage and measure how deep an attempt got. OSINT ethics bounds the first stage from the defender's side too: public sources, no deception to gain access, no doxxing, no collecting on private individuals beyond the professional need — the same authorization instinct as Level 0, applied to information about people. The worked example (killchain_map.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"1. Reconnaissance   -> Know your own surface first: asset inventory (L12)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l20-stix-misp": {
  "why": "Intel that cannot travel cannot help: STIX 2 is the language (structured objects — indicator, malware, relationship — as JSON), TAXII 2 is the transport (collections over HTTPS), and MISP is the widely used open-source sharing platform where communities publish events with attributes, tags and sightings. The professional habits travel with the formats: share with confidence and provenance attached (your l19 IOC rule), respect TLP markings (who may see/pass what), and consume defensively — validate incoming intel like any untrusted input. The worked example (stix_object.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"{...the indicator object prints (first 300 chars)...}\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Assessment, SOC and detection roles run on this exact loop: evidence first, severity second, a claim never stronger than its proof. Interviewers probe it with precisely the scenarios in this lesson's quiz.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-research-method": {
  "why": "Research begins with a falsifiable question ('does control X reduce Y under condition Z?'), a literature pass that maps what is already known (primary sources first — the Knowledge Base's Source Security Links are the model), and an experiment designed so a stranger could repeat it: pinned versions, stated corpus, recorded environment. Reproducibility is the difference between research and anecdote; the checklist below turns any of your Research Workspace questions into an experiment plan. The worked example (experiment_plan.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"question     Does rate limiting (429 after 5/min) stop credential stuffing against the LAB login API?\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on reproducibility and disclosure judgment. This lesson's artefacts are the junior version of both.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-code-audit-methods": {
  "why": "Code audit is directed reading: start at the sources (every place untrusted input enters), follow data flow to the sinks (where input becomes command, query, markup, path), and interrogate every sanitizer on the path. Tooling (SAST, grep patterns) generates CANDIDATES; the auditor's judgment confirms reachability — the difference between a scanner report and a finding. The worked example (flow_trace.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"source     request.args[\"name\"] — fully attacker-controlled\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on claim discipline and reproducibility: every claim labeled with its evidence, every method repeatable by a stranger. This lesson's artefacts are the junior form of both.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-advanced-web-research": {
  "why": "Beyond the Top 10 lie the classes automated scanners structurally miss: request smuggling (two parsers disagreeing about where one request ends), prototype pollution (JavaScript's object inheritance weaponized), cache poisoning (one user's response served to thousands), and second-order flows where stored input detonates in a different trust context days later. Researching them shares one method: model the PARSER or the STATE, find the disagreement between two components' beliefs, and prove it with the smallest safe request against your own lab target. The worked example (parser_disagreement.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"FRONT server believes: ['POST /a (5 bytes: HELLO)', 'GET /b (smuggled)']\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on claim discipline and reproducibility: every claim labeled with its evidence, every method repeatable by a stranger. This lesson's artefacts are the junior form of both.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-fuzzing-audit": {
  "why": "Fuzzing feeds a program mutated inputs and watches for crashes — tireless, stupid, and devastatingly effective at finding memory-safety edges in code that handles untrusted data (your own training programs only). Code auditing is its human twin: read the diff/source with a weakness-class checklist (your CWE shortlist from Level 12), trace untrusted data to dangerous sinks, and write the finding with a reproducer. The worked example (mini_fuzz.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"first crashing input: <the first mutated input that breaks int()>\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on reproducibility and disclosure judgment. This lesson's artefacts are the junior version of both.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-memory-safety": {
  "why": "The classic native-code classes, conceptually: buffer overflows (writing past an array's end into adjacent control data), use-after-free (a pointer outliving its allocation, then reused by an attacker's object), integer overflows becoming undersized allocations. Vendors' data (Microsoft, Chromium) has repeatedly attributed ~70% of serious CVEs to this family — which is why memory-safe languages became policy, not preference. The worked example (overflow_logic.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"('HELLO...', 'user')\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on claim discipline and reproducibility: every claim labeled with its evidence, every method repeatable by a stranger. This lesson's artefacts are the junior form of both.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-re-techniques": {
  "why": "The research-grade RE ladder: strings and imports for hypotheses, static reading (L19's assembly minimum) for mechanism, dynamic confirmation for truth, and — the researcher's addition — documenting CONFIDENCE per claim: observed, inferred, or speculated. Published RE research separates these ruthlessly because other people's defenses get built on your claims. The worked example (claim_ladder.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"OBSERVED (static)            imports CreateRemoteThread trio — capability claim only\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on claim discipline and reproducibility: every claim labeled with its evidence, every method repeatable by a stranger. This lesson's artefacts are the junior form of both.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-static-dynamic-research": {
  "why": "The methods comparison, research-grade: static sees ALL paths (including dormant ones) but drowns in possibility and packing; dynamic sees TRUTH but only the paths executed, in that environment, that day. Research designs combine them deliberately: static to enumerate, dynamic to confirm, each compensating the other's blindness — and papers state which method supports which claim (the ladder, at design level). The worked example (method_chooser.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"What CAN this code do, all paths?      -> STATIC — coverage of possibility\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on claim discipline and reproducibility: every claim labeled with its evidence, every method repeatable by a stranger. This lesson's artefacts are the junior form of both.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-protocol-supplychain": {
  "why": "Protocol analysis reads a system's conversations against its specification (your own captures, Wireshark from Level 7): where does the implementation diverge from the RFC, where is the unauthenticated command, the unencrypted fallback, the replayable token? Supply-chain research watches what your software is MADE of: dependency inventories (SBOMs), maintainer and signing hygiene, and the update channel's integrity — researched from primary sources, with findings disclosed through the l21 pipeline when they bite. The worked example (dep_watch.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"libhttp: 3.0.1 -> 3.1.0 (changed — read the changelog)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on reproducibility and disclosure judgment. This lesson's artefacts are the junior version of both.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-architecture-review": {
  "why": "Above the code sit the decisions: where trust boundaries fall, what is authenticated where, which component's compromise is survivable and which is total. Architecture review reads design documents and data-flow diagrams with the threat model (L6) as its instrument, hunting the flaws no code fix can cure — the flat network behind the strong login, the god-service whose token opens everything. The worked example (arch_review.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"login_strength   MFA enforced\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on claim discipline and reproducibility: every claim labeled with its evidence, every method repeatable by a stranger. This lesson's artefacts are the junior form of both.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-disclosure-cve": {
  "why": "The pipeline: find (in systems you own or programs that invite testing) → report privately to the vendor/maintainer with reproduction detail → agree a timeline (commonly ~90 days, adjustable for active exploitation or patch complexity) → CVE ID assigned by a CNA → public advisory AFTER the fix ships. Publishing first is not bravery, it is arming attackers before defenders; skipping the report entirely leaves everyone exposed. The worked example (disclosure_timeline.md) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The checklist prints as the lesson's working artefact — a disclosure handled this way protects users first and reputations second.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on reproducibility and disclosure judgment. This lesson's artefacts are the junior version of both.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-advisory-writing": {
  "why": "An advisory answers five questions in order: what is affected (product + versions), what can an attacker do (impact in plain words), how bad (CVSS with the vector string shown, not just a number), what do I do (upgrade/mitigate, with the workaround if no patch exists), and how do I know I am safe (detection/verification). Research reports add method + reproducibility artefacts. The worked example (advisory_template.md) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The skeleton prints in full — every advisory you write in this course (and Project H) fills exactly these fields, no invention beyond them.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on reproducibility and disclosure judgment. This lesson's artefacts are the junior version of both.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l21-research-docs-bounty": {
  "why": "Two exits from research into the world: DOCUMENTATION (the notes discipline — hypotheses, methods, negative results, and artifacts preserved so the work is reproducible and resumable) and BOUNTY PROGRAMS (the authorization contract as a career door: scope pages read like rules of engagement because they ARE, safe harbors honored, reports written to the advisory standard of l21-advisory-writing). The checklist below joins both. The worked example (bounty_check.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"done   scope page read TODAY (programs change)\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Research roles — product security, vulnerability research, academia — are judged on claim discipline and reproducibility: every claim labeled with its evidence, every method repeatable by a stranger. This lesson's artefacts are the junior form of both.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l22-capstone-abc": {
  "why": "Projects A–C are executed as ONE guided build each in this lesson (full briefs in the Projects section: A from l12-reporting, B from l10-endpoint-hardening, C from l18-ir-forensics) — here you assemble them to portfolio standard: every risk carries owner + review date, every hardening claim carries its evidence line, the casefile's facts and analysis sit in separate, labelled sections. The grading script below checks the ASSEMBLY standard before a human admires the content. The worked example (portfolio_check_abc.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"A risk register            fields 6/6 present · built from L12 · ready for portfolio review\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Hiring managers do not read claims; they open artefacts. This lesson's outputs are built to be opened, questioned, and narrated — the three things that happen to every portfolio in a real interview.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l22-capstone-def": {
  "why": "Projects D–F assemble Levels 13, 20 and 15: D is the authorized training-lab pentest written to the l13-report-template standard (findings graded, methodology stated, RoE attached); E is a validated Sigma pack (each rule: ATT&CK tag, FP analysis, validation results vs the SOC corpus); F is the Level 15 reference build re-audited by its own checklist with before/after evidence. Assembled together they are the interview artefacts: each demonstrates a job verb — test, detect, build. The worked example (portfolio_check_def.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"D pentest report     4 sections · scope+RoE · methodology (14 steps) · ...\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Hiring managers do not read claims; they open artefacts. This lesson's outputs are built to be opened, questioned, and narrated — the three things that happen to every portfolio in a real interview.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l22-capstone-g": {
  "why": "Project G pairs the curriculum against itself: on the training range, a red plan (L13 methodology, scoped and ruled) attacks while a blue plan (L20 detections, validated per l20-detection-validation) defends — then both sides write the joint report grading DETECTIONS, not winners. The duel's deliverable is the validated coverage matrix, updated with truth. The worked example (project_g_brief.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The brief prints in full: predictions sealed before the duel — a detection you did not predict cannot be claimed as coverage afterward.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Hiring managers do not read claims; they open artefacts. This lesson's outputs are built to be opened, questioned, and narrated — the three things that happen to every portfolio in a real interview.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l22-capstone-h": {
  "why": "The final synthesis: assemble a complete small-organization security program from the whole curriculum — asset inventory (L13), risk register (L6), vulnerability cadence (L12), detection coverage (L20), IR plan (L18), awareness and policy set — sequenced by the risk register, budgeted honestly, and presented as a board-readable binder ending in YOUR roadmap and skills-gap plan. Project H is less a test than a rehearsal for your first security role's first quarter. The worked example (project_h_binder.txt) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The binder prints in full. Section 7 is not humility decoration — assessors weight it heavily, because programs are run by people who know their edges.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Hiring managers do not read claims; they open artefacts. This lesson's outputs are built to be opened, questioned, and narrated — the three things that happen to every portfolio in a real interview.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l22-capstone-gh-career": {
  "why": "Project G (from l5-abuse-cases) threat-models the training store end-to-end (assets, actors, STRIDE per flow, mitigations mapped to the controls you built all course). Project H is the disclosure portfolio: your coordinated-disclosure checklist, one advisory written to the l21 standard against a TRAINING target, and the scope/RoE documents you worked under. The worked example (portfolio_index.md) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"The index prints in full — eight projects, eight evidenced claims, zero adjectives doing evidence's job.\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "Hiring managers do not read claims; they open artefacts. This lesson's outputs are built to be opened, questioned, and narrated — the three things that happen to every portfolio in a real interview.",
  "wrong": "The common wrong use: treating the document as a form to copy once instead of a discipline to repeat per engagement — and letting its numbers (windows, limits) drift from what was actually agreed or observed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l22-career-cv": {
  "why": "Hiring managers scan for evidence: the CV translates this curriculum into verifiable claims — projects with artifacts (the capstone binder, sanitized reports, this platform's completion record), skills stated at honest depth ('can run a scoped pentest and write its report' beats 'expert in hacking'), and a portfolio that SHOWS the work: write-ups, detection rules, the L21 research notes. The workshop below rewrites adjective-claims into evidence-claims. The worked example (cv_rewrite.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"BEFORE: Expert in penetration testing\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "This lesson IS the job hunt: evidence claims, method answers, program judgment. Careers in this field are built from artefacts exactly like the ones this curriculum made you produce.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l22-career-interviews": {
  "why": "Interview craft for this field: scenario questions ('the CEO's mailbox shows impossible travel — walk me through it') are graded on METHOD — scope, evidence, sequence, communication — not on trivia; the curriculum's structure IS the answer template (triage → timeline → contain → eradicate → recover → report). Practical rounds reward narrated reasoning; 'I don't know, but here is how I would find out' with a real method beats a confident guess. The worked example (interview_map.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"Q: Impossible travel on the CEO mailbox — walk me through it\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "This lesson IS the job hunt: evidence claims, method answers, program judgment. Careers in this field are built from artefacts exactly like the ones this curriculum made you produce.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l22-bug-bounty-vrp": {
  "why": "The career form of L21's bounty lesson: choosing programs (VRPs at vendors vs platform programs — scope quality, response times, safe harbor strength), building reputation (report quality over quantity; one excellent report teaches a program your name), the economics honestly (bounties are variable income; treat them as reputation + supplementary earnings until a track record says otherwise), and the specialization ladder — the researchers who thrive pick a territory (API, Android, cloud) this curriculum has prepared. The program evaluator below scores a candidate program. The worked example (program_eval.py) is the smallest complete case that proves the point — small enough to verify by hand, real enough to transfer to the job.",
  "output": "Read the result as evidence, starting with: \"Vendor VRP (training example)    score 6\" Every following line is the lesson's rule applied in order — nothing in it is decoration. If your run differs, the difference IS the lesson: compare inputs first, then tool versions, then the target, in that order.",
  "job": "This lesson IS the job hunt: evidence claims, method answers, program judgment. Careers in this field are built from artefacts exactly like the ones this curriculum made you produce.",
  "wrong": "The common wrong runs: a NameError or SyntaxError means a copied line drifted — diff your file against the lesson's, character by character, before debugging logic. A wrong RESULT with clean syntax means an input differed: print your inputs first. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 }
};

export const WHY_CODE4_BN: Record<string, WhyEntry> = {
 "l12-discovery": {
  "why": "দুর্বলতা আবিষ্কার: Credential দিয়ে login করে patch ও configuration পড়া scan — banner আন্দাজের চেয়ে অনেক নির্ভুল। Worked example (discover_lab.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"== live hosts ==\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l12-cvss-scoring": {
  "why": "CVSS v3.1 ও v4.0: ত্রুটির অন্তর্নিহিত ধর্ম (vector, complexity, privilege, impact) — বেশিরভাগ report যেই অংশটুকুই উল্লেখ করে। Worked example (cvss_lab.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"score: 7.5\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l12-cwe-cpe": {
  "why": "CWE ও CPE: দুর্বলতা শ্রেণির তালিকা (যেমন CWE-79 XSS, CWE-89 SQLi)। একটি CVE যেই শ্রেণির দৃষ্টান্ত, তা উল্লেখ করে। Worked example (cpe_match.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"AFFECTED: apache http_server 2.4.62\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l12-validation-fp": {
  "why": "যাচাই ও False Positive: Report করা ত্রুটি যা আসলে নেই বা এই পরিবেশে কাজে লাগানো যায় না। Worked example (validate_finding.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"Web server vulnerable (banner version match)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l12-asset-criticality": {
  "why": "সম্পদের গুরুত্ব: ব্যবসা একটি সম্পদের উপর কতটা নির্ভর করে: ধারণ করা data, দেওয়া সেবা, আর আপস হলে ক্ষতির ব্যাপ্তি। Worked example (rank_queue.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"  7.5  Payment server TLS flaw\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l12-patch-management": {
  "why": "Patch Management: ধাপে ধাপে rollout দল যা খারাপ patch-এর বিস্তার সীমাবদ্ধ করে। Worked example (patch_planner.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"P-101  ring-0 emergency           KEV-listed, internet-facing\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l12-remediation-workflow": {
  "why": "Remediation কর্মপ্রবাহ ও দুর্বলতা ব্যবস্থাপনার জীবনচক্র: আসল সমাধান বাকি থাকতে ঝুঁকি কমানো control — তারিখযুক্ত ও পর্যালোচিত। Worked example (vuln_tracker.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"KEV RCE on file server: new -> validated\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l12-remediation-verification": {
  "why": "Remediation যাচাই ও দুর্বলতা ব্যবস্থাপনার জীবনচক্র: বন্ধ করার আগে fixed asset-এ আসল যাচাই আবার চালিয়ে নতুন প্রমাণ জোড়া। Worked example (finding_lifecycle.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"remediating -> closed allowed? False\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l12-reporting": {
  "why": "দুর্বলতা Reporting: একটি দুর্বলতার সম্পূর্ণ স্বয়ংসম্পূর্ণ record: সম্পদ, প্রমাণ, তীব্রতা, অবস্থা, সমাধান, retest, মালিক। Worked example (report_entry.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"ENGINEER VIEW\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-scope-roe": {
  "why": "Scope ও Rules of Engagement: সম্মত সীমাবদ্ধতা: target, কৌশল, সময়, নিষেধ, যোগাযোগ। RoE-র বাইরের কাজ স্বাক্ষরিত engagement-এর ভেতরেও অননুমোদিত। Worked example (roe_lab.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"A complete one-page RoE: every later command in this level can point at a line here that permits it.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-asset-inventory": {
  "why": "Tester-দের জন্য Asset Inventory: মালিক ও গুরুত্বসহ in-scope system-এর client-এর প্রামাণ্য তালিকা। Worked example (reconcile.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"192.168.56.10 lab server — confirmed\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-recon": {
  "why": "Reconnaissance ও Discovery: স্বাভাবিক ব্যবহারের বাইরে যোগাযোগ ছাড়াই পর্যবেক্ষণ থেকে শেখা। Worked example (recon_lab.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"recon saved to ~/pentest-lab/evidence\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-enumeration": {
  "why": "Enumeration: আবিষ্কৃত প্রতিটি service-কে পদ্ধতিগতভাবে জিজ্ঞাসা করা তা কী দেয়। Worked example (enum_lab.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"== SMB shares (lab) ==\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-vuln-validation": {
  "why": "একটি Engagement-এ দুর্বলতা যাচাই: প্রতিটি report line-এ ছাপা আস্থা শ্রেণি। Worked example (engagement_validator.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"Training app upload accepts executable files\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-exploitation": {
  "why": "Lab-এ নিয়ন্ত্রিত Exploitation: একটি ত্রুটি আসল ও গুরুত্বপূর্ণ তা দেখানো ন্যূনতম প্রদর্শন। Worked example (prove_impact.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"baseline captured\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-post-exploitation": {
  "why": "Post-Exploitation শৃঙ্খলা: কারিগরি প্রবেশকে ব্যবসায়িক পরিণতিতে অনুবাদ করা। Worked example (cleanup_log.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"cleanup started: <timestamp>\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-workflow-14": {
  "why": "১৪-ধাপের অনুমোদিত Pentest কর্মপ্রবাহ: স্বাক্ষর থেকে retest পর্যন্ত একটি সম্পূর্ণ অনুমোদিত test। Worked example (workflow14.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"Fourteen steps, each with a named input and output — the lab engagement in Project D follows this page exactly.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-impact-assessment": {
  "why": "Impact Assessment: Scope-এর ভেতরে আসলে ঘটানো প্রভাব, বস্তুসহ। Worked example (impact_pack.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The pack prints with the labelling rule visible: demonstrated impact carries artefacts; potential impact carries its reasoning and its limits.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-report-template": {
  "why": "পেশাদার Pentest Report: কীভাবে test করা হয়েছে তা বলা অংশ, যাতে ফল পুনরুৎপাদনযোগ্য হয়। Worked example (finding_entry.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"TITLE     Broken object-level authorization on training app orders API\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l13-evidence-cleanup-retest": {
  "why": "প্রমাণ, Cleanup, Remediation নির্দেশনা ও Retest: Engagement যা যোগ করেছিল সব সরিয়ে আগের অবস্থা যাচাই করা। Worked example (cleanup_check.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"== lab accounts created by the engagement (must be gone) ==\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Engagement কাজ তার কাগজের ভেতরেই billable: scope, প্রমাণ, cleanup। Client সেই tester-কেই আবার নেয় যার report দিয়ে কাজ করা যায়।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l14-domains-dcs": {
  "why": "Domain, Domain Controller, আর AD কাঠামো: AD-র প্রশাসনিক ও নিরাপত্তা সীমানা। Worked example (lab_forest.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The map prints in full: one forest, one domain, two DCs, an OU tree, and the replication line the whole structure stands on.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Enterprise ও endpoint ভূমিকা এই যন্ত্রের ভেতরে বাঁচে: directory, policy ও identity — যেখানে বড় প্রতিষ্ঠান আসলে রক্ষা পায়।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l14-ad-architecture": {
  "why": "Active Directory কাঠামো: AD database ধারণ করা ও domain-এর authentication-এর উত্তর দেওয়া server। Worked example (read_ad.ps1) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"DNSRoot / Forest / DomainMode for your lab domain, its DC list, and enabled vs disabled user counts — the lab's identity map.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Enterprise ও endpoint ভূমিকা এই যন্ত্রের ভেতরে বাঁচে: directory, policy ও identity — যেখানে বড় প্রতিষ্ঠান আসলে রক্ষা পায়।",
  "wrong": "সাধারণ ভুল run: execution-policy প্রত্যাখ্যান মানে তোমার lab-এর policy তার কাজ করছে — শুধু lab session-এর জন্য তা বসাও (Set-ExecutionPolicy -Scope Process)। খালি ফলাফল সাধারণত মানে query সব ছেঁকে ফেলেছে: filter সরিয়ে আগে গুনো। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l14-kerberos": {
  "why": "Kerberos ও LDAP: KDC-র কাছে তুমি authenticate করেছ তার প্রধান ticket। Worked example (kerberos_lab.ps1) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"klist shows a TGT for krbtgt/<LABDOMAIN> plus service tickets for hosts you touched — each with start/end times (ticket lifetimes are a defense dial).\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Enterprise ও endpoint ভূমিকা এই যন্ত্রের ভেতরে বাঁচে: directory, policy ও identity — যেখানে বড় প্রতিষ্ঠান আসলে রক্ষা পায়।",
  "wrong": "সাধারণ ভুল run: execution-policy প্রত্যাখ্যান মানে তোমার lab-এর policy তার কাজ করছে — শুধু lab session-এর জন্য তা বসাও (Set-ExecutionPolicy -Scope Process)। খালি ফলাফল সাধারণত মানে query সব ছেঁকে ফেলেছে: filter সরিয়ে আগে গুনো। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l14-dns-integration": {
  "why": "Active Directory-র জন্য DNS Integration: একটি service-এর অবস্থান বিজ্ঞাপন করা DNS record। Worked example (ad_dns_checks.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"== who are the DCs, per DNS? ==\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Enterprise ও endpoint ভূমিকা এই যন্ত্রের ভেতরে বাঁচে: directory, policy ও identity — যেখানে বড় প্রতিষ্ঠান আসলে রক্ষা পায়।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l14-group-policy": {
  "why": "Group Policy ও OU: OU/site/domain-এ link করে user/computer-এ প্রয়োগ করা setting-এর গুচ্ছ। Worked example (gpo_lab.ps1) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"An HTML report of every setting in the GPO plus its link list — the evidence for 'this policy actually applies where we think it does'.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Enterprise ও endpoint ভূমিকা এই যন্ত্রের ভেতরে বাঁচে: directory, policy ও identity — যেখানে বড় প্রতিষ্ঠান আসলে রক্ষা পায়।",
  "wrong": "সাধারণ ভুল run: execution-policy প্রত্যাখ্যান মানে তোমার lab-এর policy তার কাজ করছে — শুধু lab session-এর জন্য তা বসাও (Set-ExecutionPolicy -Scope Process)। খালি ফলাফল সাধারণত মানে query সব ছেঁকে ফেলেছে: filter সরিয়ে আগে গুনো। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l14-enterprise-permissions": {
  "why": "Enterprise Permission ও Delegation: সংকীর্ণ লক্ষ্যে সংকীর্ণ অধিকার দেওয়া। Worked example (acl_audit.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"Helpdesk   ResetPassword  OU=Staff               ok\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Enterprise ও endpoint ভূমিকা এই যন্ত্রের ভেতরে বাঁচে: directory, policy ও identity — যেখানে বড় প্রতিষ্ঠান আসলে রক্ষা পায়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l14-ad-attacks-defenses": {
  "why": "সাধারণ AD আক্রমণের পথ — আর প্রতিটি ভেঙে দেওয়া প্রতিরক্ষা: SPN account-এর service ticket চেয়ে offline আক্রমণ; শক্তিশালী managed password তা ভাঙে। Worked example (ad_defense_audit.ps1) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"Lists to review: stale SPN service accounts, any unconstrained-delegation trusts, and admin accounts missing the cannot-be-delegated flag — your lab fix list.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Enterprise ও endpoint ভূমিকা এই যন্ত্রের ভেতরে বাঁচে: directory, policy ও identity — যেখানে বড় প্রতিষ্ঠান আসলে রক্ষা পায়।",
  "wrong": "সাধারণ ভুল run: execution-policy প্রত্যাখ্যান মানে তোমার lab-এর policy তার কাজ করছে — শুধু lab session-এর জন্য তা বসাও (Set-ExecutionPolicy -Scope Process)। খালি ফলাফল সাধারণত মানে query সব ছেঁকে ফেলেছে: filter সরিয়ে আগে গুনো। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l14-enterprise-hardening": {
  "why": "Enterprise Hardening: সম্পদের মূল্য অনুযায়ী admin আলাদা করা। Worked example (tier_checks.ps1) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"GPO presence, the Domain Admins roster (short = healthy), and recent logon evidence to eyeball for tier violations.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Enterprise ও endpoint ভূমিকা এই যন্ত্রের ভেতরে বাঁচে: directory, policy ও identity — যেখানে বড় প্রতিষ্ঠান আসলে রক্ষা পায়।",
  "wrong": "সাধারণ ভুল run: execution-policy প্রত্যাখ্যান মানে তোমার lab-এর policy তার কাজ করছে — শুধু lab session-এর জন্য তা বসাও (Set-ExecutionPolicy -Scope Process)। খালি ফলাফল সাধারণত মানে query সব ছেঁকে ফেলেছে: filter সরিয়ে আগে গুনো। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l14-tiered-admin": {
  "why": "Tiered Administration ও Privileged Access Workstation: প্রশাসন Tier 0/1/2-তে বিভক্ত — account কখনো tier পার হয় না। Worked example (tier_check.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"T0-admin       -> DC01       OK\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l14-identity-monitoring-dns": {
  "why": "AD Identity পর্যবেক্ষণ ও DNS Integration: Client যেই DNS record দিয়ে domain controller খোঁজে। Worked example (ad_watch.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"4662 WS-4471 - replication GUID requested by a WORKSTATION\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-cloud-models": {
  "why": "Cloud Model ও Provider মৌলিক বিষয়: Provider স্তূপের কতটা চালায়, আর তোমার দায়িত্ব কোথায় শুরু। Worked example (cloud_models.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"IaaS      Virtual machine (EC2 / Azure VM / Compute Engine)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-shared-responsibility": {
  "why": "Cloud model ও Shared Responsibility: Provider ও customer-এর মধ্যে নিরাপত্তা দায়িত্বের নথিবদ্ধ ভাগ। Worked example (shared_responsibility.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"Read it as: the further right a row's 'you' column reaches, the more of this level is about you.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-cloud-iam": {
  "why": "Cloud IAM: অনুমতিসহ একটি identity, মানুষ বা workload অস্থায়ীভাবে ধারণ করে। Worked example (iam_policy_check.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"problems: none — scoped action on a scoped resource\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-storage-secrets": {
  "why": "Storage permission ও Secrets ব্যবস্থাপনা: Account-স্তরের guardrail যা storage private রাখতে bucket setting অতিক্রম করে। Worked example (storage_secrets_check.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"PASS on all six lines for the healthy simulated account — flip any value in your notes and watch which single FAIL becomes the headline finding.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-misconfig-detection": {
  "why": "Cloud ভুল configuration ও Logging: কে account-এ কী করেছে তার provider record। Worked example (posture_diff.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"ALERT: bucket_public changed off->on\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-docker-security": {
  "why": "Docker নিরাপত্তা: Daemon-এর নিয়ন্ত্রণ মাধ্যম — container-এ তা বসানো মানে host তুলে দেওয়া। Worked example (docker_audit.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"FAIL  root user -> set a non-root USER in the image\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-containers-k8s": {
  "why": "Container ও Kubernetes নিরাপত্তা: Container যেই package করা filesystem থেকে চলে। ভেতরে ঢোকানো যেকোনো কিছু (secret-সহ) সবার কাছে যায়। Worked example (Dockerfile.secure) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"An image that runs as a non-root user, carries no secrets, and starts from a pinned minimal base — scan it, sign it, then deploy it.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-kubernetes-security": {
  "why": "Kubernetes নিরাপত্তা: Workload-স্তরের setting যা ঠিক করে container-এর বেড়া আদৌ আছে কিনা। Worked example (k8s_review.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"FAIL privileged pod — container fences are OFF\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-serverless-cicd": {
  "why": "Serverless, IaC ও CI/CD: Version করা file-এ ঘোষিত infrastructure — deploy-এর আগেই review করা যায়। Worked example (iac_lint.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"BLOCK: reports would deploy PUBLIC\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-cloud-ir": {
  "why": "Cloud Incident Response: একটি সম্পদ প্রকাশ হওয়া ও প্রকাশ বন্ধ হওয়ার মধ্যবর্তী সময়। Worked example (cloud_ir_scope.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"exposure window: 2026-11-07T09:12Z -> 2026-11-09T08:02Z\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-iac-supply-chain": {
  "why": "IaC ও Supply-Chain নিরাপত্তা: Deploy-এর আগে infrastructure template যাচাই করা। Worked example (iac_scan.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"FINDING: public storage ACL in code — will replicate to every environment\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l15-cloud-logging": {
  "why": "Cloud Logging ও Detection: Management API call-এর নথি — cloud-এর নিরাপত্তা camera। Worked example (trail_hunt.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"ALERT privilege granted      nadia    AttachUserPolicy   AdministratorAccess attached to a NEW user\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Cloud security ভূমিকা প্রমাণের ভূমিকা: policy code হিসেবে পড়া, log timeline হিসেবে পড়া, finding বস্তুসহ লেখা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-android-architecture": {
  "why": "Android স্থাপত্য: App bytecode চালানো runtime — প্রতিটি app তার নিজের UID পায়। Worked example (android_stack.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The stack prints with each layer's audit address: where you look, and who can fix what you find.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-apk-anatomy": {
  "why": "APK গঠন ও Manifest: Install করা যায় এমন zip যাতে manifest, compile করা code (dex), resource ও signature থাকে। Worked example (apk_inventory.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"SHA-256 of the APK, its dex/lib inventory, and the manifest lines that matter: permissions, exported components, debuggable — your first findings list.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-components-ipc": {
  "why": "Activity, Service, Receiver ও Provider: অন্য app ডাকতে পারে এমন component। Worked example (component_audit.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"activity  .MainActivity    exported=True perm=None -> ok\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-permissions-intents": {
  "why": "Permission, Intent, আর component-দের কথোপকথন: একটি component-এর কাছ থেকে কাজ চাওয়ার message বস্তু। Worked example (intent_surface.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"One finding (AdminReceiver) from a five-line map — the enumeration habit applied to apps.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-sandbox-storage-deep": {
  "why": "App Sandbox: প্রতিটি installed app আলাদা Linux user হিসেবে চলে। Worked example (storage_map.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The map prints in full: five homes, five reachability classes, one rule.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-storage-keystore": {
  "why": "নিরাপদ Storage ও Android Keystore: System key ভান্ডার: key ভেতরে তৈরি হয়, ভেতরে ব্যবহৃত হয়, কাঁচা আকারে কখনো বেরোয় না। Worked example (storage_audit.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"(run-as refused: release build is not debuggable — that itself is a PASS)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-network-webview": {
  "why": "Network Security Config, TLS যাচাই ও WebView: App শুধু পরিচিত pin-এর সঙ্গে মেলা certificate গ্রহণ করে। Worked example (network_security_config.xml) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"Cleartext off, system CAs only, API domain pinned — three lines that close the classic mobile network findings.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-adb-emulator": {
  "why": "ADB ও Emulator: Emulator/device-এর command-line মাধ্যম। Worked example (adb_first_hour.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"List of devices attached\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-mobsf-jadx-frida": {
  "why": "MobSF, JADX ও Frida: App না চালিয়ে পরীক্ষা করা। Worked example (bench_session.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"[1] MobSF report → [2] JADX verification → [3] Frida observation: static flags, code truth, runtime truth — in that order.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-frida-fundamentals": {
  "why": "নিজের App-এ Frida মৌলিক বিষয়: Runtime-এ একটি function call আটকে তার argument ও return পর্যবেক্ষণ করা। Worked example (frida_hook.js) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"[READY] hook installed — exercise the login feature now\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল run: 'Java is not defined' মানে script app-এর process-এর বাইরে চলেছে বা runtime যুক্ত হওয়ার আগে — তোমার training app-এ আবার যুক্ত হয়ে ready line-এর জন্য অপেক্ষা করো। Hook-এর পর নীরবতা সাধারণত মানে feature-টি কখনো ব্যবহারই হয়নি, hook ব্যর্থ হয়েছে তা নয়। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l16-masvs-audit": {
  "why": "OWASP MASVS ও MASTG: Mobile app নিরাপত্তার প্রয়োজন তালিকা (OWASP)। Worked example (masvs_sheet.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"MASVS-STORAGE-1    PASS  Secrets in Keystore-backed storage\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Mobile security কাজ audit কাজ: মানদণ্ড (MASVS) test-এ, test প্রমাণে, প্রমাণ release সিদ্ধান্তে রূপান্তরিত।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-rest-security": {
  "why": "REST API নিরাপত্তার মৌলিক বিষয়: যেই method অবস্থা বদলানো উচিত নয়। Worked example (route_review.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"GET    /orders/{id}                 ok\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-api-authz": {
  "why": "API Authorization: API1:2023: API যাচাই করে তুমি কে, কিন্তু এই বস্তু তোমার কিনা তা নয়। Worked example (api_authz.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"(200, {'owner': 'nadia', 'total': 59.0})\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-api-auth-tokens": {
  "why": "API Authentication: Token কোন API-র জন্য তৈরি তার নাম দেওয়া claim। Worked example (jwt_checklist.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"['alg not pinned/allowed: none', 'token expired', 'audience mismatch — token minted for another API']\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-mass-assignment-deep": {
  "why": "Mass Assignment ও Property-স্তরের authorization: প্রতি endpoint-এ গ্রহণযোগ্য input-এর স্পষ্ট আকার। Worked example (dto_binder.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"vulnerable: {'id': 7, 'display_name': 'Nadia R.', 'role': 'admin', 'verified': True}\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-rate-limit-gateway": {
  "why": "Rate Limiting, Gateway, আর API অপব্যবহার প্রতিরক্ষা: Rate-limit algorithm: token-এর budget যা স্থিরভাবে পূর্ণ হয়। Worked example (rate_limit.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"[True, True, True, True, True, False, False]\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-graphql-rest": {
  "why": "GraphQL ও REST নিরাপত্তা: GraphQL-এর আত্ম-বর্ণনা query — পুরো schema-র মানচিত্র। Worked example (gql_cost.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"estimated cost: 203\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-gateway-secrets": {
  "why": "API Gateway ও Secrets: API-গুলোর জন্য অভিন্ন সামনের স্তর। Worked example (gateway_check.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"FAIL  TLS floor -> raise the floor to TLS 1.2+\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-api-testing-design": {
  "why": "নিরাপদ API নকশা ও স্বয়ংক্রিয় পরীক্ষা: প্রতিটি build-এ পরিচিত আক্রমণের আকার পুনরায় চালানো স্বয়ংক্রিয় test। Worked example (api_regression.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"PASS owner reads own order\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-webhooks-rest": {
  "why": "Webhook ও REST গভীর কাট: Raw body-র উপর HMAC — ঘটনা provider থেকে এসেছে তার প্রমাণ। Worked example (webhook_verify.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"ACCEPT: process idempotently (providers retry)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-top10-survey": {
  "why": "OWASP API Security Top 10 2023, পুরোটা: বৈধ কার্যকারিতায় automation দিয়ে অপব্যবহৃত সংবেদনশীল প্রবাহ। Worked example (api10_matrix.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"API1 BOLA                    l17-api-authz + two-account suite\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-api-inventory": {
  "why": "API Inventory ব্যবস্থাপনা: Inventory-তে অনুপস্থিত একটি live API। Worked example (api_inventory.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"api.example.test/v1                seen by 2 net(s): gateway, dns\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l17-api-errors-inventory": {
  "why": "API Error শৃঙ্খলা, Versioning, আর যা পাঠালে তা অবসরে পাঠানো: প্রতি request-এর শনাক্তকারী যা নিরাপদ client error-কে তার বিস্তারিত server নথিতে জোড়ে। Worked example (api_tail_check.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"errors: FAIL — client sees internals\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "API security যেখানে web, identity ও gateway দক্ষতা মেলে; product-security ভূমিকা ঠিক এই রায়গুলো পরীক্ষা করে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-ir-lifecycle": {
  "why": "Incident Response জীবনচক্র, পুরোটা: ঘটনা-পূর্ব পর্যায় — পরিকল্পনা, kit, যোগাযোগ, মহড়া। Worked example (ir_tracker.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"done    preparation\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "IR ভূমিকা জীবনচক্র শৃঙ্খলায় নেওয়া হয়: আগামীকালের প্রমাণ লেখা প্রস্তুতি, ব্যবসায়িক প্রভাবে সাজানো containment, আর program সত্যিই বদলানো lessons-learned পর্যায়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-disk-memory": {
  "why": "Disk ও Memory Forensics: সবচেয়ে ভঙ্গুর প্রমাণ আগে সংগ্রহ করো। Worked example (image_disk.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"source : <sha256 of the practice image>\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Forensic ও IR কাজ পদ্ধতির উপর আস্থায় নেওয়া হয়: volatility ক্রম, hash শৃঙ্খলা, তথ্য ও বিশ্লেষণের পৃথকীকরণ।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-filesystem-forensics": {
  "why": "Filesystem Forensics: কোনো file-এ আর বরাদ্দ নয় এমন block। Worked example (fs_timeline.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"invoice.pdf  C40 M40 A1 MC40 old file suddenly read yesterday -> collection interest\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Forensic ও IR কাজ পদ্ধতির উপর আস্থায় নেওয়া হয়: volatility ক্রম, hash শৃঙ্খলা, তথ্য ও বিশ্লেষণের পৃথকীকরণ।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-timeline-logs": {
  "why": "Timeline বিশ্লেষণ ও Log Forensics: একটি ঘড়িতে কঠোর সময়ক্রমে মেশানো সব প্রমাণ উৎস। Worked example (timeline_merge.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"04:12:03Z win-event   4625 failed logon burst starts\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Forensic ও IR কাজ পদ্ধতির উপর আস্থায় নেওয়া হয়: volatility ক্রম, hash শৃঙ্খলা, তথ্য ও বিশ্লেষণের পৃথকীকরণ।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-browser-artifacts": {
  "why": "Browser ও Application Artifact: Windows-এর চালনা নথি যা প্রমাণ করে binary চলেছিল। Worked example (browser_hist.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"2026-11-02 09:14 https://mail.training.example/inbox\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Forensic ও IR কাজ পদ্ধতির উপর আস্থায় নেওয়া হয়: volatility ক্রম, hash শৃঙ্খলা, তথ্য ও বিশ্লেষণের পৃথকীকরণ।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-ir-playbooks": {
  "why": "IR Playbook ও Chain of Custody: একটি ঘটনা শ্রেণির জন্য আগে লেখা, মহড়া দেওয়া সিদ্ধান্ত গাছ। Worked example (custody_note.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"item            auth.log extract (simulated)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Forensic ও IR কাজ পদ্ধতির উপর আস্থায় নেওয়া হয়: volatility ক্রম, hash শৃঙ্খলা, তথ্য ও বিশ্লেষণের পৃথকীকরণ।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-memory-events": {
  "why": "Memory Forensics ও Windows Event বিশ্লেষণ: RAM-এর ধারণ যাতে চলমান process ও connection থাকে। Worked example (event_triage.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"4625 x 2\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Forensic ও IR কাজ পদ্ধতির উপর আস্থায় নেওয়া হয়: volatility ক্রম, hash শৃঙ্খলা, তথ্য ও বিশ্লেষণের পৃথকীকরণ।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-windows-event-mastery": {
  "why": "Windows Event Log গভীরভাবে: কীভাবে logon ঘটলো তা নামকরণ করা ক্ষেত্র। Worked example (event_story.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"09:02 4625 Logon failure (type 3) — svc_backup\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Forensic ও IR কাজ পদ্ধতির উপর আস্থায় নেওয়া হয়: volatility ক্রম, hash শৃঙ্খলা, তথ্য ও বিশ্লেষণের পৃথকীকরণ।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-linux-network-forensics": {
  "why": "Linux Log ও Network Forensics: বিষয়বস্তুহীন network metadata: endpoint, সময়, পরিমাণ। Worked example (linux_triage.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"== failed logons by source ==\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Forensic ও IR কাজ পদ্ধতির উপর আস্থায় নেওয়া হয়: volatility ক্রম, hash শৃঙ্খলা, তথ্য ও বিশ্লেষণের পৃথকীকরণ।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-network-forensics": {
  "why": "Network Forensics: Malware-এর নিয়মিত বাড়ি-ডাকার ছন্দ। Worked example (beacon_check.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"connections: 8  mean interval: 60.2s  max jitter: 1.8s\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Forensic ও IR কাজ পদ্ধতির উপর আস্থায় নেওয়া হয়: volatility ক্রম, hash শৃঙ্খলা, তথ্য ও বিশ্লেষণের পৃথকীকরণ।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l18-ransomware-reporting": {
  "why": "Ransomware প্রতিক্রিয়া ও ঘটনা-পরবর্তী report: ব্যবসায়িক গুরুত্ব অনুযায়ী যাচাইসহ system পুনরুদ্ধার। Worked example (pir_skeleton.md) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The skeleton prints in full — section 7 is the one executives read twice: every corrective action has an owner, a date, and a verification method.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Forensic ও IR কাজ পদ্ধতির উপর আস্থায় নেওয়া হয়: volatility ক্রম, hash শৃঙ্খলা, তথ্য ও বিশ্লেষণের পৃথকীকরণ।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l19-malware-families": {
  "why": "Malware পরিবার ও প্রত্যেকে যা চায়: পরবর্তী পর্যায়ের জন্য প্রবেশ যার পণ্য এমন malware। Worked example (family_keys.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"S-1 -> STEALER\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "বিশ্লেষণ ভূমিকা শ্রেণিবদ্ধ দাবি দিয়ে বিচার হয়: কী পর্যবেক্ষণ করা হয়েছে, কী অনুমান, কী অজানা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l19-static-analysis": {
  "why": "Static Analysis: File না চালিয়ে পরীক্ষা করা। Worked example (static_triage.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"sha256 : <first 32 hex of the digest>...\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "বিশ্লেষণ ভূমিকা শ্রেণিবদ্ধ দাবি দিয়ে বিচার হয়: কী পর্যবেক্ষণ করা হয়েছে, কী অনুমান, কী অজানা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l19-pe-elf-structure": {
  "why": "PE ও ELF গঠন: Binary-র ঘোষিত বাইরের function — তার সক্ষমতার menu। Worked example (skeleton.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"- process injection capability (classic trio)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "বিশ্লেষণ ভূমিকা শ্রেণিবদ্ধ দাবি দিয়ে বিচার হয়: কী পর্যবেক্ষণ করা হয়েছে, কী অনুমান, কী অজানা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l19-assembly-reading": {
  "why": "ডুবে না গিয়ে Assembly পড়া: CPU-র নামকৃত কর্ম-বাক্স। Worked example (asm_read.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The block prints with its reading method: decisions and calls first — the analyst reads the branch structure, not the instruction stream.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "বিশ্লেষণ ভূমিকা শ্রেণিবদ্ধ দাবি দিয়ে বিচার হয়: কী পর্যবেক্ষণ করা হয়েছে, কী অনুমান, কী অজানা।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l19-dynamic-sandbox": {
  "why": "Dynamic Analysis ও নিরাপদ Sandboxing: বিচ্ছিন্ন, যন্ত্রসজ্জিত পরিবেশ যেখানে sample আসল কিছুর বিপদ ছাড়া চলতে পারে। Worked example (sandbox_checklist.sh) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"SEALED-ROOM CHECK (all must be YES before any dynamic run)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "বিশ্লেষণ ভূমিকা শ্রেণিবদ্ধ দাবি দিয়ে বিচার হয়: কী পর্যবেক্ষণ করা হয়েছে, কী অনুমান, কী অজানা।",
  "wrong": "সাধারণ ভুল run: 'permission denied' মানে script এখনো executable নয় (chmod +x) বা তুমি ভুল directory-তে; 'command not found' মানে হাতিয়ার তোমার lab-এ নেই। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l19-behavioral-sandboxing": {
  "why": "আচরণগত বিশ্লেষণ গভীরভাবে: আসল ব্যবহারকারীর মতো সাজানো sandbox machine। Worked example (sandbox_plan.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"image        lived-in snapshot: documents, browser history, office suite present\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "বিশ্লেষণ ভূমিকা শ্রেণিবদ্ধ দাবি দিয়ে বিচার হয়: কী পর্যবেক্ষণ করা হয়েছে, কী অনুমান, কী অজানা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l19-ghidra-gdb-yara": {
  "why": "Ghidra, GDB ও YARA: Machine code assembly নির্দেশ হিসেবে দেখানো। Worked example (yara_training.yar) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"rule written: True\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "বিশ্লেষণ ভূমিকা শ্রেণিবদ্ধ দাবি দিয়ে বিচার হয়: কী পর্যবেক্ষণ করা হয়েছে, কী অনুমান, কী অজানা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l19-families-anatomy": {
  "why": "Malware পরিবার, PE ও ELF গঠন: আচরণগত প্রজাতি — পরিবার আগে কী খুঁজতে হবে তা বলে। Worked example (anatomy.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"size: <n> bytes\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "বিশ্লেষণ ভূমিকা শ্রেণিবদ্ধ দাবি দিয়ে বিচার হয়: কী পর্যবেক্ষণ করা হয়েছে, কী অনুমান, কী অজানা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l19-assembly-iocs": {
  "why": "Assembly মৌলিক ধারণা ও IOC আহরণ: CPU-র দ্রুততম সংরক্ষণ। Worked example (ioc_extract.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"[static ] sha256         e3b0c4... (training sample hash)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "বিশ্লেষণ ভূমিকা শ্রেণিবদ্ধ দাবি দিয়ে বিচার হয়: কী পর্যবেক্ষণ করা হয়েছে, কী অনুমান, কী অজানা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l19-ioc-extraction": {
  "why": "ভালো টিকে থাকা IOC আহরণ: সূচকের ধরন প্রতিপক্ষের বদলানোর খরচ অনুযায়ী সাজানো। Worked example (ioc_grader.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"indicator                                      type     est. useful months\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "বিশ্লেষণ ভূমিকা শ্রেণিবদ্ধ দাবি দিয়ে বিচার হয়: কী পর্যবেক্ষণ করা হয়েছে, কী অনুমান, কী অজানা।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-log-sources-map": {
  "why": "Log উৎস ও Telemetry: একটি detection কর্মসূচি গ্রহণ করা নথিভুক্ত প্রমাণ ধারা। Worked example (telemetry_map.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"T1059 command execution    2 source(s)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Detection engineering SOC-এর শক্তি-গুণক: সততার সঙ্গে মাপা telemetry, বহনযোগ্যভাবে লেখা rule, আর পণ্য হিসেবে গণ্য যাচাই।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-intel-lifecycle": {
  "why": "Threat Intelligence জীবনচক্র: ক্ষতিকর কাজের সঙ্গে যুক্ত পর্যবেক্ষণযোগ্য বস্তু — কাজের ও নশ্বর। Worked example (ioc_freshness.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"hash  age    2d  lab-verified               -> fresh indicator — usable with its grade attached\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-ttp-profiling": {
  "why": "প্রতিপক্ষ TTP প্রোফাইলিং: প্রাসঙ্গিক actor-এর TTP-র উৎসযুক্ত, তারিখযুক্ত দলিল। Worked example (profile_rank.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"T1566.001 spearphishing attachment   7 reports, last seen 2mo ago\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Intel ভূমিকা বিচার হয় সংযোগ দিয়ে: উৎসযুক্ত reporting এমন অগ্রাধিকারে বদলানো যা একটি detection program চালাতে পারে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-attack-sigma": {
  "why": "MITRE ATT&CK ও Sigma: একটি কৌশলের (tactic) অধীনে নির্দিষ্ট প্রতিপক্ষ আচরণ। Worked example (sigma_office_powershell.yml) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"A complete rule: parent/child behavior, ATT&CK tag, falsepositives written BEFORE deployment, status test until validation earns promotion.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-sigma-workshop": {
  "why": "Sigma Workshop: Sigma নিয়ম একটি নির্দিষ্ট SIEM-এর query ভাষায় অনুবাদ। Worked example (rule_office_script.yml) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"Loaded as a Sigma rule: parent office process + child script interpreter = alert. Converted with sigma-cli to the SIEM dialect; the three test events behave exactly as the comment records (one fire, two silences).\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Detection engineering SOC-এর শক্তি-গুণক: সততার সঙ্গে মাপা telemetry, বহনযোগ্যভাবে লেখা rule, আর পণ্য হিসেবে গণ্য যাচাই।",
  "wrong": "সাধারণ ভুল run: একটি YAML parse error প্রায় সবসময় indentation — space, কখনো tab নয়। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-siem-fundamentals": {
  "why": "SIEM মৌলিক বিষয়: প্রতিটি উৎসের log ভাষা ভাগ করা ক্ষেত্রে অনুবাদ। Worked example (correlate.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"failures before success: 2\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Detection engineering SOC-এর শক্তি-গুণক: সততার সঙ্গে মাপা telemetry, বহনযোগ্যভাবে লেখা rule, আর পণ্য হিসেবে গণ্য যাচাই।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-hunting-siem": {
  "why": "SIEM Triage ও Threat Hunting: একটি alert-এর label-সহ বন্ধ — tuning-এর data। Worked example (beacon_hunt.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"HUNT HIT: ws-01 -> updates.example: 9 queries across 9 hours (regular, persistent — investigate)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-threat-hunting-deep": {
  "why": "Threat Hunting গভীরভাবে: নথিভুক্ত hunt: অনুমান, data পরিকল্পনা, query, ফলাফল ও সীমা। Worked example (hunt_planner.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"T1071  Attackers beacon at fixed 60s intervals       READY\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Detection engineering SOC-এর শক্তি-গুণক: সততার সঙ্গে মাপা telemetry, বহনযোগ্যভাবে লেখা rule, আর পণ্য হিসেবে গণ্য যাচাই।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-detection-validation": {
  "why": "Detection যাচাই: রক্ষকরা live দেখতে সমন্বিত প্রতিপক্ষ অনুকরণ। Worked example (validate_matrix.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"DET-01 beacon periodicity  WORKS\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Detection engineering SOC-এর শক্তি-গুণক: সততার সঙ্গে মাপা telemetry, বহনযোগ্যভাবে লেখা rule, আর পণ্য হিসেবে গণ্য যাচাই।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-killchain-osint": {
  "why": "Cyber Kill Chain ও OSINT নৈতিকতা: সাত ধাপের অনুপ্রবেশ ক্রম যা দিয়ে ধাপে ধাপে control বসানো হয়। Worked example (killchain_map.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"1. Reconnaissance   -> Know your own surface first: asset inventory (L12)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l20-stix-misp": {
  "why": "STIX 2, TAXII 2 ও MISP: Threat intel-এর কাঠামোগত ভাষা: JSON-এ typed বস্তু। Worked example (stix_object.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"{...the indicator object prints (first 300 chars)...}\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Assessment, SOC ও detection ভূমিকা ঠিক এই চক্রে চলে: আগে প্রমাণ, পরে তীব্রতা, প্রমাণের চেয়ে শক্তিশালী দাবি কখনো নয়।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-research-method": {
  "why": "গবেষণা পদ্ধতি: এমন গবেষণা প্রশ্ন যা প্রমাণ ভুল প্রমাণ করতে পারে। Worked example (experiment_plan.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"question     Does rate limiting (429 after 5/min) stop credential stuffing against the LAB login API?\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা বিচার হয় পুনরুৎপাদনযোগ্যতা ও প্রকাশের রায় দিয়ে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-code-audit-methods": {
  "why": "দুর্বলতার জন্য Code Audit: যেকোনো বিন্দু যেখানে অবিশ্বস্ত data program-এ ঢোকে। Worked example (flow_trace.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"source     request.args[\"name\"] — fully attacker-controlled\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা দাবি শৃঙ্খলা ও পুনরুৎপাদনযোগ্যতা দিয়ে বিচার হয়: প্রতিটি দাবি তার প্রমাণসহ label করা, প্রতিটি পদ্ধতি অপরিচিতের দ্বারা পুনরাবৃত্তিযোগ্য।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-advanced-web-research": {
  "why": "Advanced Web নিরাপত্তা গবেষণা: Request সীমা নিয়ে দুই server-এর মতভেদ কাজে লাগানো। Worked example (parser_disagreement.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"FRONT server believes: ['POST /a (5 bytes: HELLO)', 'GET /b (smuggled)']\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা দাবি শৃঙ্খলা ও পুনরুৎপাদনযোগ্যতা দিয়ে বিচার হয়: প্রতিটি দাবি তার প্রমাণসহ label করা, প্রতিটি পদ্ধতি অপরিচিতের দ্বারা পুনরাবৃত্তিযোগ্য।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-fuzzing-audit": {
  "why": "Fuzzing মৌলিক বিষয় ও নিরাপদ Code Audit: বিকৃত input দিয়ে স্বয়ংক্রিয় পরীক্ষা, crash দেখা। Worked example (mini_fuzz.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"first crashing input: <the first mutated input that breaks int()>\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা বিচার হয় পুনরুৎপাদনযোগ্যতা ও প্রকাশের রায় দিয়ে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-memory-safety": {
  "why": "Memory Safety গবেষণা: বরাদ্দের সীমার বাইরে পাশের memory-তে লেখা। Worked example (overflow_logic.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"('HELLO...', 'user')\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা দাবি শৃঙ্খলা ও পুনরুৎপাদনযোগ্যতা দিয়ে বিচার হয়: প্রতিটি দাবি তার প্রমাণসহ label করা, প্রতিটি পদ্ধতি অপরিচিতের দ্বারা পুনরাবৃত্তিযোগ্য।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-re-techniques": {
  "why": "গবেষকদের জন্য Reverse Engineering কৌশল: Code কী করতে পারে তার বক্তব্য (static প্রমাণ থেকে)। Worked example (claim_ladder.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"OBSERVED (static)            imports CreateRemoteThread trio — capability claim only\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা দাবি শৃঙ্খলা ও পুনরুৎপাদনযোগ্যতা দিয়ে বিচার হয়: প্রতিটি দাবি তার প্রমাণসহ label করা, প্রতিটি পদ্ধতি অপরিচিতের দ্বারা পুনরাবৃত্তিযোগ্য।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-static-dynamic-research": {
  "why": "গবেষণা পদ্ধতি হিসেবে Static বনাম Dynamic বিশ্লেষণ: পরীক্ষিত code পথের অংশ। Worked example (method_chooser.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"What CAN this code do, all paths?      -> STATIC — coverage of possibility\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা দাবি শৃঙ্খলা ও পুনরুৎপাদনযোগ্যতা দিয়ে বিচার হয়: প্রতিটি দাবি তার প্রমাণসহ label করা, প্রতিটি পদ্ধতি অপরিচিতের দ্বারা পুনরাবৃত্তিযোগ্য।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-protocol-supplychain": {
  "why": "Protocol বিশ্লেষণ ও Supply-Chain গবেষণা: একটি বাস্তবায়নের আসল বার্তা তার specification-এর সঙ্গে তুলনা করা। Worked example (dep_watch.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"libhttp: 3.0.1 -> 3.1.0 (changed — read the changelog)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা বিচার হয় পুনরুৎপাদনযোগ্যতা ও প্রকাশের রায় দিয়ে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-architecture-review": {
  "why": "Security Architecture পর্যালোচনা: একটি রেখা যার ওপারে বিশ্বাস অনুমান বদলায়। Worked example (arch_review.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"login_strength   MFA enforced\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা দাবি শৃঙ্খলা ও পুনরুৎপাদনযোগ্যতা দিয়ে বিচার হয়: প্রতিটি দাবি তার প্রমাণসহ label করা, প্রতিটি পদ্ধতি অপরিচিতের দ্বারা পুনরাবৃত্তিযোগ্য।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-disclosure-cve": {
  "why": "দায়িত্বশীল প্রকাশ ও CVE ব্যবস্থা: ব্যক্তিগত report → সম্মত সময়সীমা → fix → প্রকাশ্য পরামর্শ। Worked example (disclosure_timeline.md) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The checklist prints as the lesson's working artefact — a disclosure handled this way protects users first and reputations second.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা বিচার হয় পুনরুৎপাদনযোগ্যতা ও প্রকাশের রায় দিয়ে।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-advisory-writing": {
  "why": "মানুষ কাজে লাগাতে পারে এমন পরামর্শ ও গবেষণা report লেখা: স্থির হওয়া ত্রুটিকে ব্যবহারকারীর কাজে বদলে দেওয়া প্রকাশ্য নথি। Worked example (advisory_template.md) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The skeleton prints in full — every advisory you write in this course (and Project H) fills exactly these fields, no invention beyond them.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা বিচার হয় পুনরুৎপাদনযোগ্যতা ও প্রকাশের রায় দিয়ে।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l21-research-docs-bounty": {
  "why": "গবেষণা নথিভুক্ত করা ও দায়িত্বশীলভাবে Bug Bounty Program-এ যোগ দেওয়া: In-scope সদিচ্ছা গবেষণা তাড়া না করার প্রতিশ্রুতি। Worked example (bounty_check.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"done   scope page read TODAY (programs change)\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "গবেষণা ভূমিকা দাবি শৃঙ্খলা ও পুনরুৎপাদনযোগ্যতা দিয়ে বিচার হয়: প্রতিটি দাবি তার প্রমাণসহ label করা, প্রতিটি পদ্ধতি অপরিচিতের দ্বারা পুনরাবৃত্তিযোগ্য।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l22-capstone-abc": {
  "why": "Capstone A–C: অপরিচিত যাচাই করতে পারে এমনভাবে উপস্থাপিত কাজ। Worked example (portfolio_check_abc.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"A risk register            fields 6/6 present · built from L12 · ready for portfolio review\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Hiring manager দাবি পড়ে না; তারা বস্তু খোলে। এই পাঠের output খোলা, প্রশ্ন করা ও বর্ণনা করার জন্য বানানো।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l22-capstone-def": {
  "why": "Capstone D–F: পরিমাপ করা অবস্থা পরিবর্তন হিসেবে দেখানো hardening দাবি। Worked example (portfolio_check_def.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"D pentest report     4 sections · scope+RoE · methodology (14 steps) · ...\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Hiring manager দাবি পড়ে না; তারা বস্তু খোলে। এই পাঠের output খোলা, প্রশ্ন করা ও বর্ণনা করার জন্য বানানো।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l22-capstone-g": {
  "why": "Capstone Project G: অনুশীলন-পূর্ব প্রতিরক্ষার প্রত্যাশিত detection বক্তব্য। Worked example (project_g_brief.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The brief prints in full: predictions sealed before the duel — a detection you did not predict cannot be claimed as coverage afterward.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Hiring manager দাবি পড়ে না; তারা বস্তু খোলে। এই পাঠের output খোলা, প্রশ্ন করা ও বর্ণনা করার জন্য বানানো।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l22-capstone-h": {
  "why": "Capstone Project H: একটি সংস্থার শীর্ষ নিরাপত্তা ঝুঁকির নম্বরযুক্ত, মালিকানাধীন তালিকা। Worked example (project_h_binder.txt) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The binder prints in full. Section 7 is not humility decoration — assessors weight it heavily, because programs are run by people who know their edges.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Hiring manager দাবি পড়ে না; তারা বস্তু খোলে। এই পাঠের output খোলা, প্রশ্ন করা ও বর্ণনা করার জন্য বানানো।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l22-capstone-gh-career": {
  "why": "Capstone G–H ও Career Launch: একটি system-এর সম্পদ, আক্রমণকারী, অপব্যবহার পথ ও প্রতিকারের কাঠামোগত বিবরণ। Worked example (portfolio_index.md) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"The index prints in full — eight projects, eight evidenced claims, zero adjectives doing evidence's job.\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "Hiring manager দাবি পড়ে না; তারা বস্তু খোলে। এই পাঠের output খোলা, প্রশ্ন করা ও বর্ণনা করার জন্য বানানো।",
  "wrong": "সাধারণ ভুল ব্যবহার: নথিকে একবার কপি করার form ধরা, প্রতি engagement-এ পুনরাবৃত্ত শৃঙ্খলা নয় — আর তার সংখ্যা (সময়-জানালা, সীমা) আসলে যা সম্মত বা পর্যবেক্ষণ করা হয়েছে তা থেকে সরে যাওয়া। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l22-career-cv": {
  "why": "Security CV ও Portfolio: পরিদর্শনযোগ্য নিদর্শনে সমর্থিত একটি CV বক্তব্য। Worked example (cv_rewrite.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"BEFORE: Expert in penetration testing\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "এই পাঠ নিজেই চাকরি খোঁজা: প্রমাণ দাবি, পদ্ধতি উত্তর, program রায়। এই ক্ষেত্রে কর্মজীবন ঠিক এই curriculum তোমাকে দিয়ে বানানো বস্তুগুলো দিয়েই গড়ে ওঠে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l22-career-interviews": {
  "why": "Security Interview: একটি ঘটনা বা কাজ অনুকরণ করা interview prompt। Worked example (interview_map.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"Q: Impossible travel on the CEO mailbox — walk me through it\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "এই পাঠ নিজেই চাকরি খোঁজা: প্রমাণ দাবি, পদ্ধতি উত্তর, program রায়। এই ক্ষেত্রে কর্মজীবন ঠিক এই curriculum তোমাকে দিয়ে বানানো বস্তুগুলো দিয়েই গড়ে ওঠে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l22-bug-bounty-vrp": {
  "why": "Bug Bounty ও VRP কর্মজীবন: একটি vendor-এর নিজের bounty program। Worked example (program_eval.py) সবচেয়ে ছোট সম্পূর্ণ ক্ষেত্র যা বিষয়টি প্রমাণ করে — হাতে যাচাই করা যায় এমন ছোট, চাকরিতে স্থানান্তর করা যায় এমন আসল।",
  "output": "ফলাফল প্রমাণ হিসেবে পড়ো, শুরু এখান থেকে: \"Vendor VRP (training example)    score 6\" এরপরের প্রতিটি line পাঠের নিয়ম ক্রমে প্রয়োগের ফল — কোনোটিই সাজসজ্জা নয়। তোমার run আলাদা হলে পার্থক্যটাই পাঠ: আগে input, তারপর tool version, তারপর target — এই ক্রমে মেলাও।",
  "job": "এই পাঠ নিজেই চাকরি খোঁজা: প্রমাণ দাবি, পদ্ধতি উত্তর, program রায়। এই ক্ষেত্রে কর্মজীবন ঠিক এই curriculum তোমাকে দিয়ে বানানো বস্তুগুলো দিয়েই গড়ে ওঠে।",
  "wrong": "সাধারণ ভুল run: NameError বা SyntaxError মানে একটি কপি করা line সরে গেছে — যুক্তি debug করার আগে তোমার file পাঠের সঙ্গে অক্ষরে অক্ষরে মেলাও। আর স্থায়ী নিয়ম: যেকোনো কিছু debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা সেভাবে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 }
};

export const CTF_WHY6_4: Record<string, SixWhy> = {
 "ctf-cvss": {
  "why": "This challenge compresses Level 12's core judgment into one decision: two findings, one emergency slot. It exists because 'sort by CVSS' is the most common real-world triage failure.",
  "parts": [
   "Finding A's 9.8: maximum theoretical severity attached to a product the estate does not run — its risk to THIS estate is nil today.",
   "Finding B's KEV listing: CISA's confirmation that exploitation is happening in the wild, with ransomware use known.",
   "Finding B's exposure line: internet-facing and confirmed present — the two facts that turn a listing into an emergency."
  ],
  "output": "The flag names the winning principle (kev_beats_cvss): exploitation reality, confirmed against your inventory, is the ordering key.",
  "meaning": "Given any queue, the same three questions sort it: Is it exploited? Is it here? Is it reachable? Severity breaks ties afterwards.",
  "job": "Triage meetings, patch Tuesdays and audit findings all price this judgment; it is the vulnerability-management interview in one question.",
  "wrong": "If you answered with the 9.8's product or a 'cvss first' variant, reread l12-cvss-scoring: severity is weather, risk is your roof. Safe target: a paper board — no real systems involved."
 },
 "ctf-kerberos": {
  "why": "Delegation is Kerberos's most-abused convenience: this challenge tests whether the dangerous mode's NAME jumps out of a record the way it must in a real review.",
  "parts": [
   "'ANY service': the scope word that makes the mode dangerous — the impersonation is unbounded.",
   "'Constrained: specified services only' on peers: the intended state, present in the same artefact as the contrast.",
   "The service-account context: delegation lives on services users connect TO — exactly where their tickets arrive."
  ],
  "output": "The flag is the class name (unconstrained_delegation_found): in reports, naming the class precisely is what routes the fix.",
  "meaning": "Every AD review greps for this mode first; finding it reorders the engagement's risk table on the spot.",
  "job": "AD assessors and identity defenders are both paid to spot this line in exports of thousands of accounts — pattern recognition at record scale.",
  "wrong": "If you named Kerberoasting or password spray, reread l14-kerberos: those abuse tickets; this abuses TRUST configuration. Safe target: a simulated record only."
 },
 "ctf-bucket": {
  "why": "Cloud storage exposure is the most repeated cloud breach shape in the news; this challenge tests the one control that ends the class, not just the instance.",
  "parts": [
   "ACL public-read (inherited): the instance-level cause — inherited settings are how buckets surprise their owners.",
   "Block Public Access OFF: the missing class-level control, named in the record.",
   "Policy: none — nothing compensates; the block is the fix, not a policy essay."
  ],
  "output": "The flag states the end state (public_bucket_blocked): a property of the account, true for every bucket, present and future.",
  "meaning": "Fix classes, not instances (the CWE lesson in cloud form): one account-level switch retires a breach category.",
  "job": "Cloud auditors check this control by name on every engagement; it is the first line of every storage review checklist (l15's own).",
  "wrong": "If you answered with the bucket name or 'acl fixed', reread l15-storage-secrets: per-bucket fixes drift; the account block endures. Safe target: a simulated record only."
 },
 "ctf-graphql": {
  "why": "GraphQL's self-description is a developer delight and a production recon gift; the challenge is recognizing which environment flips its moral sign.",
  "parts": [
   "Introspection ENABLED in production: the schema — every type, field and mutation — served to any visitor.",
   "Depth/cost limits none: the second and third findings, queued behind the first fix.",
   "POST /graphql as the single door: all GraphQL risk concentrates at one endpoint, so its gateway settings ARE the security posture."
  ],
  "output": "The flag names the end state (introspection_disabled_prod): developers keep it in dev; production visitors get no map.",
  "meaning": "Environment changes verdicts: the same setting is tooling in development and exposure in production — context is a security property.",
  "job": "API reviewers check this on every GraphQL engagement; it is the first line of the l17-graphql-rest checklist.",
  "wrong": "If you answered 'graphql secured' or named depth limits first, reread l17-graphql-rest: recon denial precedes cost control. Safe target: a simulated gateway record."
 },
 "ctf-yara": {
  "why": "Analysts produce two detection currencies — file rules and log rules — and confusing them is a category error this challenge exists to prevent.",
  "parts": [
   "The two distinctive strings: enough, together, to sign a precise rule (distinctiveness is the FP defense).",
   "Sigma on the bench: the tempting wrong tool — it patterns LOG events, and this artefact is a file.",
   "The condition (both strings): a rule is strings PLUS a condition; one generic string alone would FP across the corpus."
  ],
  "output": "The flag records the completed professional act (yara_rule_matched): the finding became a signed, testable detection.",
  "meaning": "Analysis that does not end in a detection evaporates; the rule is how a sample teaches the whole estate to recognize its family.",
  "job": "Threat-intel and detection teams consume exactly these rules; writing them is the malware analyst's most portable output.",
  "wrong": "If you chose Sigma, reread l19-ghidra-gdb-yara and l20-attack-sigma side by side: logs → Sigma, files → YARA. Safe target: the harmless training marker only."
 }
};

export const CTF_WHY6_4_BN: Record<string, SixWhy> = {
 "ctf-cvss": {
  "why": "এই challenge Level 12-র মূল রায়কে একটি সিদ্ধান্তে সংকুচিত করে: দুটি finding, একটি জরুরি slot। এটি আছে কারণ 'CVSS দিয়ে সাজানো' সবচেয়ে সাধারণ আসল triage ব্যর্থতা।",
  "parts": [
   "Finding A-র 9.8: সর্বোচ্চ তাত্ত্বিক তীব্রতা এমন product-এ যা estate চালায় না — এই estate-এর জন্য আজ তার ঝুঁকি শূন্য।",
   "Finding B-র KEV তালিকা: CISA-র নিশ্চিতকরণ যে বাস্তবে শোষণ হচ্ছে, ransomware ব্যবহার জানা।",
   "Finding B-র exposure line: internet-facing ও নিশ্চিতভাবে উপস্থিত — দুটি সত্য যা একটি তালিকাকে জরুরি অবস্থায় বদলায়।"
  ],
  "output": "Flag জয়ী নীতির নাম দেয় (kev_beats_cvss): শোষণের বাস্তবতা, তোমার inventory দিয়ে নিশ্চিত, এটাই ক্রমের চাবি।",
  "meaning": "যেকোনো সারিতে একই তিনটি প্রশ্ন সাজায়: তা শোষিত হচ্ছে? তা এখানে আছে? তা পৌঁছনযোগ্য? তীব্রতা এরপর টাই ভাঙে।",
  "job": "Triage সভা, patch মঙ্গলবার ও audit finding সব এই রায়ের দাম দেয়; এটি এক প্রশ্নে vulnerability-management সাক্ষাৎকার।",
  "wrong": "9.8-এর product বা 'cvss first' ধরনের উত্তর দিলে l12-cvss-scoring আবার পড়ো: তীব্রতা আবহাওয়া, ঝুঁকি তোমার ছাদ। নিরাপদ target: একটি কাগজের board — কোনো আসল system জড়িত নয়।"
 },
 "ctf-kerberos": {
  "why": "Delegation Kerberos-এর সবচেয়ে অপব্যবহৃত সুবিধা: এই challenge পরীক্ষা করে বিপজ্জনক mode-এর নাম একটি record থেকে লাফিয়ে চোখে পড়ে কিনা, যেমন আসল review-তে পড়া উচিত।",
  "parts": [
   "'ANY service': scope শব্দ যা mode-টিকে বিপজ্জনক করে — ছদ্মবেশ সীমাহীন।",
   "সঙ্গীদের উপর 'Constrained: শুধু নির্দিষ্ট service': কাঙ্ক্ষিত অবস্থা, একই বস্তুতে বৈপরীত্য হিসেবে উপস্থিত।",
   "Service-account প্রসঙ্গ: delegation থাকে সেই service-গুলোতে যেখানে user সংযোগ করে — ঠিক যেখানে তাদের ticket পৌঁছায়।"
  ],
  "output": "Flag হলো শ্রেণির নাম (unconstrained_delegation_found): report-এ শ্রেণির নিখুঁত নামই fix-এর পথ ঠিক করে।",
  "meaning": "প্রতিটি AD review সবার আগে এই mode খোঁজে; তা পাওয়া engagement-এর ঝুঁকি তালিকা তখনই বদলে দেয়।",
  "job": "AD মূল্যায়নকারী ও identity রক্ষক দুজনকেই হাজার হাজার account-এর export-এ এই line চেনার জন্য বেতন দেওয়া হয়।",
  "wrong": "Kerberoasting বা password spray নাম দিলে l14-kerberos আবার পড়ো: ওগুলো ticket কাজে লাগায়; এটি বিশ্বাসের সাজানো কাজে লাগায়। নিরাপদ target: শুধু একটি simulated record।"
 },
 "ctf-bucket": {
  "why": "Cloud storage exposure সংবাদে সবচেয়ে বেশি পুনরাবৃত্ত cloud breach আকার; এই challenge সেই একটি control পরীক্ষা করে যা দৃষ্টান্ত নয়, শ্রেণি শেষ করে।",
  "parts": [
   "ACL public-read (উত্তরাধিকার): দৃষ্টান্ত-স্তরের কারণ — উত্তরাধিকার setting-ই bucket তার মালিককে অবাক করার উপায়।",
   "Block Public Access বন্ধ: অনুপস্থিত শ্রেণি-স্তরের control, record-এ নামসহ।",
   "Policy: নেই — কিছুই ক্ষতিপূরণ করে না; block-ই fix, policy প্রবন্ধ নয়।"
  ],
  "output": "Flag শেষ অবস্থা বলে (public_bucket_blocked): account-এর একটি ধর্ম, প্রতিটি bucket-এর জন্য সত্য, বর্তমান ও ভবিষ্যৎ।",
  "meaning": "দৃষ্টান্ত নয়, শ্রেণি ঠিক করো (CWE পাঠ cloud আকারে): একটি account-স্তরের switch একটি breach শ্রেণি অবসরে পাঠায়।",
  "job": "Cloud auditor প্রতিটি engagement-এ এই control নাম ধরে যাচাই করে; এটি প্রতিটি storage review checklist-এর প্রথম line (l15-এর নিজের)।",
  "wrong": "Bucket-এর নাম বা 'acl fixed' উত্তর দিলে l15-storage-secrets আবার পড়ো: প্রতি-bucket fix drift করে; account block টেকে। নিরাপদ target: শুধু একটি simulated record।"
 },
 "ctf-graphql": {
  "why": "GraphQL-এর আত্ম-বর্ণনা developer-এর আনন্দ আর production-এ recon উপহার; challenge হলো কোন পরিবেশ তার নৈতিক চিহ্ন উল্টে দেয় তা চেনা।",
  "parts": [
   "Production-এ introspection চালু: schema — প্রতিটি type, field ও mutation — যেকোনো দর্শককে পরিবেশিত।",
   "Depth/cost সীমা নেই: দ্বিতীয় ও তৃতীয় finding, প্রথম fix-এর পেছনে সারিতে।",
   "একমাত্র দরজা হিসেবে POST /graphql: সব GraphQL ঝুঁকি একটি endpoint-এ কেন্দ্রীভূত, তাই তার gateway setting-ই নিরাপত্তা ভঙ্গি।"
  ],
  "output": "Flag শেষ অবস্থার নাম দেয় (introspection_disabled_prod): developer-রা dev-এ তা রাখে; production দর্শক কোনো মানচিত্র পায় না।",
  "meaning": "পরিবেশ রায় বদলায়: একই setting development-এ হাতিয়ার, production-এ exposure — প্রসঙ্গ একটি নিরাপত্তা ধর্ম।",
  "job": "API reviewer প্রতিটি GraphQL engagement-এ এটি যাচাই করে; এটি l17-graphql-rest checklist-এর প্রথম line।",
  "wrong": "'graphql secured' উত্তর দিলে বা আগে depth limit নাম দিলে l17-graphql-rest আবার পড়ো: recon অস্বীকার cost control-এর আগে। নিরাপদ target: একটি simulated gateway record।"
 },
 "ctf-yara": {
  "why": "Analyst দুই ধরনের detection মুদ্রা তৈরি করে — file rule ও log rule — আর তাদের গুলিয়ে ফেলা একটি শ্রেণি ভুল যা এই challenge রোধ করতে আছে।",
  "parts": [
   "দুটি স্বতন্ত্র string: একসঙ্গে একটি নিখুঁত rule স্বাক্ষরের জন্য যথেষ্ট (স্বাতন্ত্র্যই FP প্রতিরক্ষা)।",
   "Bench-এ Sigma: প্রলুব্ধ ভুল হাতিয়ার — তা LOG ঘটনা pattern করে, আর এই বস্তু একটি file।",
   "Condition (দুটি string-ই): একটি rule হলো string যোগ condition; একটি মাত্র generic string corpus জুড়ে FP করত।"
  ],
  "output": "Flag সম্পন্ন পেশাদার কাজ লেখে (yara_rule_matched): সন্ধান একটি স্বাক্ষরিত, পরীক্ষাযোগ্য detection হয়ে উঠেছে।",
  "meaning": "Detection-এ শেষ না হওয়া বিশ্লেষণ বাষ্প হয়ে যায়; rule-ই উপায় যা দিয়ে একটি sample পুরো estate-কে তার পরিবার চিনতে শেখায়।",
  "job": "Threat-intel ও detection দল ঠিক এই rule গুলোই গ্রহণ করে; তা লেখা malware analyst-এর সবচেয়ে বহনযোগ্য output।",
  "wrong": "Sigma বেছে থাকলে l19-ghidra-gdb-yara ও l20-attack-sigma পাশাপাশি আবার পড়ো: log → Sigma, file → YARA। নিরাপদ target: শুধু ক্ষতিহীন training marker।"
 }
};

export const LAB_WHY6_4: Record<string, SixWhy> = {
 "lab-vuln-triage": {
  "why": "This lab exists because triage is where vulnerability management is won or lost: scanners produce hundreds of rows, and the order you work them decides whether the estate's real exposure shrinks or merely its ticket count does.",
  "parts": [
   "Row comparison (KEV/exposed 7.5 vs unexposed 9.8): the two-axis judgment — exploitation reality and your exposure — that raw CVSS cannot make for you.",
   "The banner false positive: validation evidence (a changelog) outranks scanner confidence, every time.",
   "The CWE-89 grouping: four findings collapse into one systemic fix — the class view that turns a queue into a program."
  ],
  "output": "The board ends ordered by risk-to-this-estate with evidence attached to every row — not by the loudest number.",
  "meaning": "A triage board is a promise about what gets fixed first and why; anyone reading it can re-derive your order from the evidence columns.",
  "job": "Vulnerability-management and SOC-triage roles do exactly this weekly: KEV/EPSS/exposure ordering and evidence-based closure are interview-tested skills.",
  "wrong": "If you ordered by CVSS alone, you patched a product you do not run while a KEV-listed flaw sat exposed — rerun the board asking the four hint questions per row. Safe target: this queue is a simulation; no real systems are touched."
 },
 "lab-scope-pack": {
  "why": "Pentesting skill is common; pentesting PAPERWORK is what makes it a profession. This lab builds the pack that separates an authorized engagement from a story about one.",
  "parts": [
   "The bounded password-testing line: authorization expressed as measurable limits a third party can audit.",
   "The missing screenshot: evidence reconciliation — the pack is only as true as its weakest artefact reference.",
   "The leftover account: cleanup as a verified state change, not a promise."
  ],
  "output": "A complete pack: RoE with stop conditions, a manifest that reconciles, and a cleanup section that proves the target's restoration.",
  "meaning": "With the pack, your work can be re-performed and re-checked by someone who was not there — the definition of professional evidence.",
  "job": "Consultancies are hired and re-hired on exactly this: clients and their auditors judge the pack long after the testing week ends.",
  "wrong": "If a line could not be checked by a stranger (no limit, no filename, no state), it does not belong in the pack — rewrite it until it can be. Safe target: documents about your own lab only."
 },
 "lab-cloud-audit": {
  "why": "Cloud audits fail in two directions: findings without evidence (unactionable) and passes without drift checks (temporary). This lab trains the verdict-plus-evidence habit on the four classic cloud findings.",
  "parts": [
   "The wildcard policy: the artefact IS the evidence — quote it, scope the fix to named actions/resources.",
   "Same-account logs: separation as an evidence-survival property, not a topology preference.",
   "The blocked bucket's drift note: today's console state vs the template that will re-decide it at the next apply."
  ],
  "output": "A checklist where every row can be re-performed by another auditor from its evidence line alone.",
  "meaning": "Audits are promises to the future: the evidence line is what lets the future check whether the present was right.",
  "job": "Cloud security assessments are delivered exactly as verdict + evidence + fix; this sheet is the portfolio shape Project F grades.",
  "wrong": "If you marked the bucket a plain Pass, you missed the drift half of cloud auditing — check the IaC template, not only the console. Safe target: simulated exports only; no real cloud account is touched."
 },
 "lab-api-suite": {
  "why": "Writing the handlers is half of API security; proving they STAY secure through every refactor is the other half. This lab trains suite-reading: coverage, gating, and blind spots.",
  "parts": [
   "The missing admin-gate test: coverage is measured against the threat list (OWASP API Top 10), not against effort spent.",
   "The failing stranger-read test after refactor: a regression, treated as a lost fix and a blocked release.",
   "The single-IP rate test's blind spot: a test can pass while the abuse shape it ignores walks past it."
  ],
  "output": "A release decision with reasons: what is covered, what regressed, what remains untested — stated before shipping, not discovered after.",
  "meaning": "Suites convert security from a launch property into a permanent property; reading them well is a senior skill.",
  "job": "API and product-security engineers own these gates; 'show me your security regression suite' is a standard senior-interview artefact request.",
  "wrong": "If you shipped past the failing BOLA test, revisit l17-api-testing-design: the test failing IS the finding. Safe target: the training API on localhost only."
 },
 "lab-sample-triage": {
  "why": "Triage is the discipline of NOT concluding too early: three samples, three different correct next steps, and the skill is routing by evidence instead of by vibes.",
  "parts": [
   "Sample B's entropy verdict: the static method honestly reporting its own blindness — packing suspected, dynamic path planned.",
   "Sample A's URL: provenance grading applied at the report line — lead, not C2.",
   "Sample C's imports: stated intentions converted into a concrete sandbox watch list."
  ],
  "output": "Three routed samples with graded claims — the bench output a malware-analysis team lead can assign work from.",
  "meaning": "Analysis quality is mostly routing quality: the right next step, for the stated reason, at the right confidence.",
  "job": "Malware triage queues in AV/SOC teams are worked exactly like this bench; the graded-claim habit is what seniors check first.",
  "wrong": "If you called Sample B benign, reread l19-static-analysis on entropy: no strings in a packed file is the packing talking. Safe target: harmless training files only, in the lab."
 },
 "lab-detection-pack": {
  "why": "Detection programs rot by optimism: maps go green while sources die quietly. This lab trains the review that keeps a pack honest — rule state, telemetry state, and priority by adversary value.",
  "parts": [
   "Rule 1's un-run benign validation: half a validation is a status, and the status is 'test'.",
   "Rule 3's half-disabled source: coverage as a product (rule × visibility), not a property of the rule alone.",
   "The gap list's ordering: adversary value times blindness — triage thinking imported into detection engineering."
  ],
  "output": "A signed gap list with owners implied: which rule to finish validating, which source to re-enable, which gap to hunt first.",
  "meaning": "An honest map is a work plan; a green fiction is a future incident report's first exhibit.",
  "job": "Detection leads are paid for exactly this review discipline; it is also the artefact Project E's pack is graded against.",
  "wrong": "If you left any cell green on rule-existence alone, redo the review asking the two hint questions per cell. Safe target: simulated pack and map only."
 }
};

export const LAB_WHY6_4_BN: Record<string, SixWhy> = {
 "lab-vuln-triage": {
  "why": "এই lab আছে কারণ triage-তেই vulnerability management জেতা বা হারানো নির্ধারিত হয়: scanner শত শত সারি তৈরি করে, আর তুমি কোন ক্রমে কাজ করো তা-ই ঠিক করে estate-এর আসল exposure কমবে নাকি শুধু ticket-এর সংখ্যা।",
  "parts": [
   "সারি তুলনা (KEV/exposed 7.5 বনাম unexposed 9.8): দুই-অক্ষের রায় — শোষণের বাস্তবতা আর তোমার exposure — যা কাঁচা CVSS তোমার হয়ে করতে পারে না।",
   "Banner false positive: যাচাই প্রমাণ (একটি changelog) scanner-এর আত্মবিশ্বাসকে প্রতিবার হারায়।",
   "CWE-89 দলবদ্ধকরণ: চারটি finding একটি পদ্ধতিগত fix-এ মিলে যায় — শ্রেণি দৃষ্টি যা একটি সারিকে program-এ পরিণত করে।"
  ],
  "output": "Board শেষ হয় এই estate-এর ঝুঁকি অনুযায়ী সাজানো অবস্থায়, প্রতিটি সারিতে প্রমাণসহ — সবচেয়ে জোরালো সংখ্যা অনুযায়ী নয়।",
  "meaning": "একটি triage board হলো কী আগে ঠিক হবে ও কেন তার প্রতিশ্রুতি; পাঠক প্রমাণের column থেকে তোমার ক্রম আবার বের করতে পারে।",
  "job": "Vulnerability-management ও SOC-triage ভূমিকা প্রতি সপ্তাহে ঠিক এটাই করে: KEV/EPSS/exposure ক্রম ও প্রমাণ-ভিত্তিক বন্ধ সাক্ষাৎকারে পরীক্ষিত দক্ষতা।",
  "wrong": "শুধু CVSS দিয়ে সাজালে তুমি এমন product patch করেছ যা তুমি চালাও না, অথচ একটি KEV-তালিকাভুক্ত ত্রুটি exposed পড়ে আছে — প্রতি সারিতে hint-এর চারটি প্রশ্ন করে board আবার চালাও। নিরাপদ target: এই সারি simulation; কোনো আসল system ছোঁয়া হয়নি।"
 },
 "lab-scope-pack": {
  "why": "Pentesting দক্ষতা সাধারণ; pentesting কাগজপত্রই তাকে পেশা বানায়। এই lab সেই pack বানায় যা একটি অনুমোদিত engagement-কে তার গল্প থেকে আলাদা করে।",
  "parts": [
   "সীমাবদ্ধ password-testing line: অনুমোদন পরিমাপযোগ্য সীমায় প্রকাশিত, যা তৃতীয় পক্ষ audit করতে পারে।",
   "অনুপস্থিত screenshot: প্রমাণ মেলানো — pack তার সবচেয়ে দুর্বল বস্তু-উল্লেখের মতোই সত্য।",
   "থেকে যাওয়া account: cleanup একটি প্রতিশ্রুতি নয়, যাচাই করা অবস্থা পরিবর্তন।"
  ],
  "output": "একটি সম্পূর্ণ pack: stop condition-সহ RoE, মিলে যাওয়া manifest, আর লক্ষ্যের পুনরুদ্ধার প্রমাণ করা cleanup অংশ।",
  "meaning": "Pack থাকলে তোমার কাজ এমন কেউ আবার করতে ও যাচাই করতে পারে যে সেখানে ছিল না — পেশাদার প্রমাণের সংজ্ঞা।",
  "job": "Consultancy ঠিক এই কারণেই নেওয়া ও আবার নেওয়া হয়: testing সপ্তাহ শেষের অনেক পরেও client ও তাদের auditor pack বিচার করে।",
  "wrong": "কোনো line অপরিচিতের যাচাইযোগ্য না হলে (সীমা নেই, filename নেই, অবস্থা নেই) তা pack-এ থাকার নয় — যাচাইযোগ্য না হওয়া পর্যন্ত আবার লেখো। নিরাপদ target: শুধু নিজের lab নিয়ে নথি।"
 },
 "lab-cloud-audit": {
  "why": "Cloud audit দুই দিকে ব্যর্থ হয়: প্রমাণ ছাড়া finding (কাজে লাগানো যায় না) আর drift যাচাই ছাড়া pass (সাময়িক)। এই lab চারটি চিরায়ত cloud finding-এ রায়+প্রমাণ অভ্যাস শেখায়।",
  "parts": [
   "Wildcard policy: বস্তুটাই প্রমাণ — তা উদ্ধৃত করো, fix নামকৃত action/resource-এ সীমাবদ্ধ করো।",
   "একই account-এ log: separation প্রমাণ-বেঁচে থাকার ধর্ম, topology পছন্দ নয়।",
   "Blocked bucket-এর drift note: আজকের console অবস্থা বনাম template যা পরের apply-এ আবার সিদ্ধান্ত নেবে।"
  ],
  "output": "একটি checklist যেখানে প্রতিটি সারি অন্য auditor শুধু তার প্রমাণ line থেকে আবার করতে পারে।",
  "meaning": "Audit ভবিষ্যতের কাছে প্রতিশ্রুতি: প্রমাণ line-ই ভবিষ্যতকে যাচাই করতে দেয় বর্তমান সঠিক ছিল কিনা।",
  "job": "Cloud security মূল্যায়ন ঠিক রায় + প্রমাণ + fix হিসেবেই দেওয়া হয়; এই sheet Project F-এর বিচার করা portfolio আকার।",
  "wrong": "Bucket-কে সাধারণ Pass দিলে তুমি cloud audit-এর drift অর্ধেক মিস করেছ — শুধু console নয়, IaC template যাচাই করো। নিরাপদ target: শুধু simulated export; কোনো আসল cloud account ছোঁয়া হয়নি।"
 },
 "lab-api-suite": {
  "why": "Handler লেখা API নিরাপত্তার অর্ধেক; প্রতিটি refactor-এর মধ্যেও তারা নিরাপদ থাকে তা প্রমাণ করা বাকি অর্ধেক। এই lab suite-পড়া শেখায়: coverage, gating, আর অন্ধ জায়গা।",
  "parts": [
   "অনুপস্থিত admin-gate test: coverage মাপা হয় হুমকি তালিকা (OWASP API Top 10) দিয়ে, খরচ করা শ্রম দিয়ে নয়।",
   "Refactor-এর পর ব্যর্থ stranger-read test: একটি regression, হারানো fix ও blocked release হিসেবে দেখা।",
   "একক-IP rate test-এর অন্ধ জায়গা: একটি test pass পেতে পারে, অথচ তার উপেক্ষিত অপব্যবহার আকার তার পাশ দিয়ে হেঁটে যায়।"
  ],
  "output": "কারণসহ একটি release সিদ্ধান্ত: কী covered, কী regressed, কী untested — পাঠানোর আগে বলা, পরে আবিষ্কৃত নয়।",
  "meaning": "Suite নিরাপত্তাকে launch ধর্ম থেকে স্থায়ী ধর্মে বদলায়; ভালো করে পড়া senior দক্ষতা।",
  "job": "API ও product-security engineer এই gate-এর মালিক; 'তোমার security regression suite দেখাও' একটি মানক senior-interview বস্তু অনুরোধ।",
  "wrong": "ব্যর্থ BOLA test পার করে পাঠালে l17-api-testing-design আবার দেখো: test ব্যর্থ হওয়াই finding। নিরাপদ target: শুধু localhost-এর training API।"
 },
 "lab-sample-triage": {
  "why": "Triage হলো খুব তাড়াতাড়ি সিদ্ধান্ত না নেওয়ার শৃঙ্খলা: তিনটি sample, তিনটি আলাদা সঠিক পরের ধাপ, আর দক্ষতা হলো অনুভূতি নয়, প্রমাণ দিয়ে পথ ঠিক করা।",
  "parts": [
   "Sample B-র entropy রায়: static পদ্ধতি সততার সঙ্গে নিজের অন্ধত্ব জানাচ্ছে — packing সন্দেহ, dynamic পথ পরিকল্পিত।",
   "Sample A-র URL: report line-এ provenance শ্রেণি — C2 নয়, সূত্র।",
   "Sample C-র imports: বলা উদ্দেশ্য একটি নির্দিষ্ট sandbox watch list-এ রূপান্তরিত।"
  ],
  "output": "শ্রেণিবদ্ধ দাবিসহ পথ পাওয়া তিনটি sample — এমন bench output যা থেকে malware-analysis দলের নেতা কাজ বণ্টন করতে পারে।",
  "meaning": "বিশ্লেষণের মান বেশিরভাগই পথের মান: সঠিক পরের ধাপ, বলা কারণে, সঠিক আস্থায়।",
  "job": "AV/SOC দলে malware triage সারি ঠিক এই bench-এর মতো কাজ করা হয়; শ্রেণিবদ্ধ দাবির অভ্যাস senior-রা প্রথমে যাচাই করে।",
  "wrong": "Sample B-কে benign বললে entropy নিয়ে l19-static-analysis আবার পড়ো: packed file-এ string না থাকা packing-এরই কথা। নিরাপদ target: শুধু ক্ষতিহীন training file, lab-এ।"
 },
 "lab-detection-pack": {
  "why": "Detection program আশাবাদে পচে: source নিঃশব্দে মরলেও map সবুজ হয়ে যায়। এই lab সেই review শেখায় যা একটি pack-কে সৎ রাখে — rule অবস্থা, telemetry অবস্থা, আর প্রতিপক্ষের মূল্য দিয়ে অগ্রাধিকার।",
  "parts": [
   "Rule 1-এর অচালিত benign যাচাই: অর্ধেক যাচাই একটি অবস্থা, আর অবস্থা হলো 'test'।",
   "Rule 3-র অর্ধেক বন্ধ source: coverage একটি গুণফল (rule × দৃশ্যমানতা), শুধু rule-এর ধর্ম নয়।",
   "ফাঁক তালিকার ক্রম: প্রতিপক্ষের মূল্য গুণ অন্ধত্ব — triage চিন্তা detection engineering-এ আমদানি।"
  ],
  "output": "মালিক-ইঙ্গিতসহ একটি সই করা ফাঁক তালিকা: কোন rule-এর যাচাই শেষ করতে হবে, কোন source আবার চালু করতে হবে, কোন ফাঁক আগে hunt করতে হবে।",
  "meaning": "একটি সৎ map একটি কর্মপরিকল্পনা; একটি সবুজ কল্পকাহিনি ভবিষ্যৎ ঘটনা report-এর প্রথম প্রদর্শনী।",
  "job": "Detection lead-দের ঠিক এই review শৃঙ্খলার জন্যই বেতন দেওয়া হয়; Project E-র pack-ও এই বস্তুর বিপরীতে বিচার হয়।",
  "wrong": "শুধু rule-এর অস্তিত্বে কোনো cell সবুজ রাখলে প্রতি cell-এ hint-এর দুটি প্রশ্ন করে review আবার করো। নিরাপদ target: শুধু simulated pack ও map।"
 }
};
