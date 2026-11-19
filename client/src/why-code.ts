// "Why this code?" — structured explanation for EVERY code/command block.
//
// The user's rule: wherever code input is given — terminal, CMD, PowerShell,
// Code Playground — WHY that code is given must be explained properly.
// Every lesson's single code block gets one entry here with four authored
// fields; together with the lesson's own line-by-line breakdown (rendered
// inside the panel as point 2) and the safe-target line (point 6, derived
// from the code's language), the panel answers all six questions:
//   1 why this code exists here        → entry.why
//   2 what each part does              → lesson.code.lines (kept, in-panel)
//   3 what the output means            → entry.output (normal vs suspicious)
//   4 why it matters in a real job     → entry.job
//   5 what happens if you run it wrong → entry.wrong (mistake→symptom→fix)
//   6 safe target reminder             → SAFE_LINE by language (below)
// No entry invents a purpose: each is written from that lesson's own code,
// output and mistakes. Bangla mirror lives in why-code-bn.ts, index-free
// (keyed by the same lesson id).

export type WhyEntry = { why: string; output: string; job: string; wrong: string };

export const WHY_CODE: Record<string, WhyEntry> = {
  "l0-what-is-cybersecurity": {
    why: "This is not a command — it is the worked example that turns the CIA triad from three memorised words into a decision you can make. Without it, 'risk' stays abstract; with it, you can look at any real system and say which leg is threatened and what control answers it.",
    output: "There is no program output to read — the 'output' is the one-page risk note itself. A good note names the asset, one risk per CIA leg, and a concrete affordable control for each. A weak note says 'be careful' — that is the suspicious result here, and the fix is to rewrite it until every risk has a named control.",
    job: "Risk classification is the first task in almost every security job: SOC analysts triage by impact, consultants write exactly this kind of note for small clients, and auditors check whether controls map to stated risks.",
    wrong: "Common mistake: starting from a tool ('install an antivirus') instead of the asset. Symptom: your note lists products but cannot say what loss each one prevents. Fix: rewrite asset-first — orders, then what could happen to them, then the control.",
  },
  "l0-ethics-law": {
    why: "This scope statement is the document that makes every later command in this course legal to run. Without it, the same scan is a professional service or an offence depending on nothing but paperwork — this template is how you prove, before you touch anything, that you are on the right side of that line.",
    output: "The output is the one-page statement itself. A complete one names exact targets, allowed and prohibited techniques, a time window, and a stop condition. If any field is vague ('the company network', 'sometime this week'), the statement is not finished — treat that as a failed result and clarify before starting.",
    job: "Pentesters and consultants write a scope for every engagement; employers ask about authorization before tools in interviews, because a tester who works out of scope is a liability, not an asset.",
    wrong: "Common mistake: trusting a verbal OK from someone who does not own the system. Symptom: you cannot produce a document when a manager or lawyer asks who approved the test. Fix: stop, get written scope from the owner, and only then run anything.",
  },
  "l0-teams-roles": {
    why: "This shift note is the code-equivalent of the whole lesson: it shows the exact written shape a SOC analyst produces, so 'blue team work' stops being a slogan. Without an example at this level of concreteness, you would not know what a finished piece of defensive work even looks like.",
    output: "Read it as a timeline: alert, check, user verification, action, closure with a ticket number. A normal note separates facts from actions and timestamps everything. The suspicious pattern to learn from it is the event pattern itself — a burst of failed logins with no success after them means a blocked attempt, not a breach; if a success had followed, the note would escalate instead of close.",
    job: "This is literally the daily deliverable of a SOC analyst. Hiring managers test it directly: 'walk me through a suspicious login' is answered in exactly this structure.",
    wrong: "Common mistake: writing opinions instead of facts ('the attacker was Russian'). Symptom: the next shift cannot reproduce or trust your note. Fix: record only what you observed, what you did, and the ticket reference — label anything else as analysis.",
  },
  "l1-inside-computer": {
    why: "These four PowerShell commands exist so you can prove — from the machine itself, not from a spec sheet — how your own PC boots and whether its boot chain is protected. Without them you could not answer the lesson's core question: is this machine UEFI + Secure Boot + TPM, or is it running unprotected legacy boot?",
    output: "Normal result: PartitionStyle GPT, Confirm-SecureBootUEFI returns True, TpmPresent and TpmReady both True. Suspicious results: SecureBoot False (the boot chain is unverified — a finding), PartitionStyle MBR (legacy BIOS — Secure Boot cannot be on), or TPM absent/not ready (BitLocker cannot use its preferred protection). Next step for any of those: record it in your machine passport; the fix itself comes in the Level 10 hardening lesson.",
    job: "Sysadmins and endpoint engineers run this exact inspection when auditing a fleet: Secure Boot and TPM state decide whether disk encryption and measured boot can be enforced at all.",
    wrong: "Common mistake: running these in CMD instead of PowerShell. Symptom: 'Get-ComputerInfo is not recognized' — CMD does not know PowerShell cmdlets. Fix: open PowerShell (the prompt starts with PS) and run them there. They are read-only, so a wrong run changes nothing on the machine.",
  },
  "l1-processes-memory": {
    why: "A process list is raw noise until you can read name + path + parent together — these two commands exist to give you exactly those three fields on your own machine. Without the CIM version you get names only, and name-only reading is precisely the habit that lets malware hide behind a familiar name like svchost.",
    output: "Normal result: system processes run from C:\\Windows\\System32 and are owned by SYSTEM; your apps run as you, parented by explorer.exe. Suspicious result: a system-sounding name running from a user folder (Temp, AppData, Public), or a document app (Word, Excel) with a shell as its child. Next step: do not kill it yet — record name, path, parent and start time first; that record is the evidence.",
    job: "SOC analysts and incident responders do this in the first minutes of every endpoint alert: the parent-child chain is how 'Office spawned PowerShell' gets spotted, and it is the core telemetry Sysmon and EDR tools collect.",
    wrong: "Common mistake: judging by name alone and killing the first unfamiliar process. Symptom: you destroy evidence — or stop a legitimate system service. Fix: check path and parent first, look the name up, and only act with the full triple in your notes.",
  },
  "l1-files-permissions": {
    why: "Permissions are invisible until you list them — this block exists so you can see a dangerous mode with your own eyes and then fix it with one command. Without the ls -l → chmod 600 → stat sequence you would know the rule 'secrets should be 600' but never have performed the audit-and-fix loop that the CTF and the hardening lessons both assume.",
    output: "Safe result: after the fix, ls -l shows -rw------- and stat prints 600 — owner-only. The dangerous result is what you started from: a default-created file is usually -rw-r--r-- (644, everyone can read), and 666 (rw for everyone) on anything sensitive is a critical finding. Next step after any audit: list who the owner and group are, not just the mode — the fix must keep the right owner able to work.",
    job: "Permission audits are a standing checklist item for sysadmins, a classic pentest finding, and a hardening control: a world-writable config file read by a privileged service is a complete privilege-escalation path.",
    wrong: "Common mistake: chmod 777 'to make it work'. Symptom: the error disappears — and so does all protection; any local account (or attacker) can now edit what a service trusts. Fix: work out who actually needs access and grant exactly that (600 for secrets, 640 for owner+group-read).",
  },
  "l2-osi-tcpip": {
    why: "The OSI model is only useful if you can point at it on a real machine. These three read-only commands exist to pin the abstract layers to your own PC: ip addr shows link + network layers, ip route shows where packets leave, dig proves the application-layer name system works. Without them, 'which layer is broken?' stays a quiz question instead of a diagnosis method.",
    output: "Normal result: an interface with an IP in your home range, a 'default via' gateway line, and a DNS answer with an IP. Suspicious results map to layers: no IP (link/network problem), IP but no default route (nothing leaves the subnet), route fine but dig fails (DNS layer, not 'the internet is down'). Next step: fix or investigate only the layer that failed — the model tells you where to stop digging.",
    job: "Every network and SOC role starts troubleshooting this way. 'The site is down' becomes three tested facts in under a minute, and tickets written this way get resolved instead of bounced.",
    wrong: "Common mistake: running the Linux commands in Windows CMD. Symptom: 'ip is not recognized'. Fix: use the Windows equivalents printed in the block (ipconfig /all, route print, nslookup) — same layers, same facts, different dialect.",
  },
  "l2-subnetting-dns": {
    why: "dig exists in this lesson because DNS answers are evidence, and you cannot judge evidence you have never actually read. Each query type (A, MX, TXT) asks a different question of the same system; without running them you would not see TTLs counting down, or understand why a long encoded TXT record later becomes a tunneling clue.",
    output: "Normal result: an ANSWER SECTION with the expected record, a TTL in seconds, and a short query time. Suspicious results: a TXT record holding a long base64-like string (legitimate TXT is short and structured, like 'v=spf1 -all'), an A record pointing somewhere the owner never announced, or answers that change between queries. Next step: record the full answer with time and resolver — DNS evidence is perishable because caches expire.",
    job: "SOC analysts read DNS logs and answers daily — DNS tunneling detection, phishing-domain checks and mail-authentication (SPF/DKIM/DMARC) reviews all start with exactly these queries.",
    wrong: "Common mistake: querying a domain you have no reason to inspect and treating public DNS data as private. Symptom: none technically — but professionally you have no scope for the question. Fix: practise on example.com (IANA's reserved documentation domain, safe to query any time) and on domains you own or are assigned.",
  },
  "l2-network-tools": {
    why: "This five-command sequence exists to replace guessing with an ordered test: gateway, internet, DNS, application, then your own listening services. Without the order you get the classic beginner loop — reinstalling browsers for a DNS fault. Each command is here because it answers for exactly one layer and no other.",
    output: "Normal result: replies from the gateway and from 1.1.1.1, a DNS answer, an HTTP status line from curl -I, and an ss list with only services you expect. Read it top-down: the FIRST failure names the broken layer — everything below it passing means nothing. Suspicious result: ss shows a listening service you cannot name an owner for; next step is to identify its process before anything else, not to keep browsing.",
    job: "This is the first-minute routine of helpdesk, NOC and SOC work. The curl -I habit in particular becomes the Security Headers audit in Level 5 — same command, professional deliverable.",
    wrong: "Common mistake: pinging a website name first (ping example.com) and concluding 'network down' when it fails. Symptom: you cannot tell a DNS failure from a routing failure because the test mixes both. Fix: follow the block's order — ping IPs first, resolve names second, exactly as written.",
  },
  "l3-linux-essentials": {
    why: "These are the commands a Linux administrator's hands use every day, gathered so your first contact with each one comes with its reason attached. The grep | wc -l line in particular exists because counting failed logins by eye does not scale — this pipeline is the manual version of what the Bash lesson then automates.",
    output: "Normal results: tail shows recent log lines in time order, the failed-login count is a single number you can compare day to day, systemctl shows 'active (running)', and df/free/uptime show a box with headroom. Suspicious results: a failed-login count that jumps from single digits to dozens overnight, a service that should be running shown as failed, or a disk at 95%+. Next step for a count spike: rank the source IPs (the next lesson's script does exactly this) before deciding it is an attack.",
    job: "Linux fluency is the entry ticket for SOC, sysadmin and cloud roles alike; auth.log review with grep/tail is a genuine daily SOC task, and df/free/uptime is the standard 'is the box healthy?' check on any incident call.",
    wrong: "Common mistake: forgetting that sudo commands are logged and powerful — typing sudo systemctl commands on a machine that is not yours, or on the wrong host. Symptom: changes you cannot undo on a system you do not own. Fix: check hostname and pwd first, practise in the Cyber Terminal and your own VM, and treat every sudo as a written action.",
  },
  "l3-windows-admin": {
    why: "Windows logs and services are too large to browse by eye — these four queries exist so the operating system itself filters to the four things an administrator actually needs: what is running, who can log in, who failed to log in, and what is listening. Without the filters you would scroll forever and still miss the 4625 burst the query surfaces in one line.",
    output: "Normal result: known services running, only expected accounts enabled, a handful of scattered 4625s at most, and listening ports you can map to real programs. Suspicious results: a burst of 4625 events for one account (the brute-force pattern), an enabled account nobody recognises, or a listening port whose owning process lives in a user folder. Next step: turn the PID into a name and path with Get-Process -Id, and record the event times — you are building a timeline, not just a list.",
    job: "This is the exact read-only inspection set used by Windows administrators and SOC analysts; Event ID 4625 triage is a standard interview and on-shift task.",
    wrong: "Common mistake: querying the Security log from a non-elevated PowerShell. Symptom: an access-denied or empty result that looks like 'no failed logins'. Fix: run PowerShell as administrator for Security-log queries, and treat an empty result from an unprivileged shell as 'unknown', never as 'clean'.",
  },
  "l3-bash-scripting": {
    why: "The same grep pipeline from the Linux lesson, promoted into a script — because a report you must produce daily cannot depend on your memory and typing. Every line of the script exists to make the manual count repeatable: an argument with a default, strict mode, and a ranked output. Without it, the skill stays a party trick; with it, it is automation.",
    output: "Normal result: a short ranked list — one or two IPs with low counts is ordinary internet background noise. Suspicious result: one external IP with dozens of attempts in a short window (the 41 from 203.0.113.44 pattern). Next step: check whether any attempt from that IP succeeded (grep 'Accepted' for the same IP) — failures alone mean an attempt; a success changes it into an incident.",
    job: "This is the shape of real defender automation: log in, ranked counts out, run by cron, read by a human. SOC analysts and sysadmins write dozens of these; the strict-mode and default-argument habits are what separate a script from a snippet.",
    wrong: "Common mistake: leaving $log unquoted. Symptom: the script breaks or reads the wrong file as soon as a path contains a space. Fix: always quote variables in Bash (\"$log\") — and keep set -euo pipefail, which turns silent nonsense into a loud, debuggable stop.",
  },
  "l4-python-security": {
    why: "This is the Bash pipeline rebuilt in Python so the result becomes data a program can act on, not just text on a screen. It exists to prove the lesson's claim: variables, strings, loops, files and a dictionary (Counter) are genuinely enough to build a real security tool — the same tool the Bash lesson approximated.",
    output: "Normal result: ranked counts identical to the Bash version's on the same log — agreement between two implementations is itself a correctness check. Suspicious result: one IP dominating the list (the 41-count pattern) or a count of zero on a log you know contains failures — zero usually means the file path or the match string is wrong, not that the log is clean. Next step: print a few matched lines to verify the parser before trusting any count.",
    job: "Log parsing is the most common Python task in security work — SOC automation, threat-intel processing and report generation all begin as 'read a file, count the right lines'. This exact structure (with-block, counter, clean error, exit code) is what production scripts look like.",
    wrong: "Common mistake: running it from the wrong folder so auth.log is not found, then 'fixing' the code instead of the path. Symptom: the clean 'Error: file not found' message the script was designed to print. Fix: pass the path as an argument (python3 log_parser.py /path/to/auth.log) — that is why sys.argv handling is in the code.",
  },
  "l4-c-memory": {
    why: "This small program exists to make one invisible idea physical: a copy either respects the destination buffer's size or it does not. The bounded strncpy pattern — plus the manual NUL-termination line — is the correct habit in miniature; without running code, 'buffer overflow' stays a definition instead of a behaviour you have performed and prevented.",
    output: "Normal result: 'copied: a short lab string' and its correct length, exit code 0. The result to fear is the one this code prevents: with unbounded strcpy and an over-long input, the program writes past buf — symptom ranges from a crash to silently corrupted neighbouring data. If your build prints a different length than the string you see, suspect the missing terminator line first.",
    job: "Code reviewers and AppSec engineers hunt exactly this pattern (CWE-121) in real C codebases; knowing the bounded idiom by heart is what lets you flag the unbounded one in review and in the CTF-style audit questions.",
    wrong: "Common mistake: assuming strncpy alone guarantees a terminated string. Symptom: printf reads past the buffer looking for a NUL that was never written, printing garbage. Fix: the second line in this code — always set the last byte to '\\0' yourself; that line is not decoration.",
  },
  "l4-javascript-browser": {
    why: "Two ideas share this block because together they are the browser-security core: data arriving from a URL is untrusted, and textContent is the sink that keeps it inert. The fetch half exists so you also see the safe shape of a network call. Without the textContent line, the natural beginner version uses innerHTML — and that single word is the difference between a greeting and an XSS hole.",
    output: "Normal result: the greeting paragraph appears as visible text and the console logs 'status: 200'. The test that proves the point: put ?name=<b>hi</b> in your own test page URL — with textContent you SEE the tags as literal text. If tags ever render as formatting, the sink is innerHTML somewhere — that is the vulnerable result, and the next step is to find and replace that sink.",
    job: "AppSec testers and front-end reviewers check source→sink flows exactly like this: where does data enter, where is it written, and is the sink safe for that context. The fetch/error shape here is also the pattern behind safe API clients.",
    wrong: "Common mistake: swapping textContent for innerHTML 'to make it prettier'. Symptom: user input starts executing as markup — invisible until someone supplies a script payload. Fix: keep textContent; if formatting is truly needed, build DOM nodes, never HTML strings from input.",
  },
  "l5-http-sessions": {
    why: "Headers are where session security actually lives, and curl -I is the fastest honest way to see them — no browser devtools guesswork. This command exists so the lesson's claims about flags and HSTS become things you have personally observed on a real response, and so the localhost half teaches the second habit: watch your own app's conversation in full with -v.",
    output: "Normal result: a 200 status line and a header block; on a well-configured site you will also see strict-transport-security and a content-security-policy. Suspicious results (the CTF 'ctf-headers' pattern): a session cookie with no HttpOnly/Secure/SameSite flags, and no HSTS or CSP at all. Next step for a finding: write it as the Security Headers lab does — header, risk, one-line fix — not as a screenshot.",
    job: "Header review is a billable, everyday assessment task: pentesters and AppSec engineers run curl -I in the first five minutes of any web engagement, and the fix list it produces is a standard deliverable.",
    wrong: "Common mistake: pointing curl -v at a third-party site and treating 'just headers' as harmless curiosity. Symptom: none — but you have no scope for that target. Fix: example.com is IANA's documentation domain (safe by design); everything else you inspect this way is your own localhost app.",
  },
  "l6-crypto-basics": {
    why: "Hashing stays abstract until you watch the same file produce the same 64-character fingerprint twice — and a different one after a single byte changes. This script exists to make integrity verification a physical habit: download, hash, compare, decide. Without it, 'verify the checksum' is advice you would nod at and never do.",
    output: "Normal result: the printed digest matches the publisher's value and the script prints MATCH — the file is bit-for-bit what was published. MISMATCH is the suspicious result and the instruction is absolute: do not trust or run that file; re-download from the official source, and if it still mismatches, treat the source itself as suspect. Next step after any MATCH: note where the expected hash came from — a hash only proves integrity if the expected value travelled a trusted channel.",
    job: "Release verification, forensic imaging and software-supply-chain checks all run on this exact loop; it is also the CTF 'ctf-hash' skill. SOC analysts hash suspicious attachments the same way to compare against intel.",
    wrong: "Common mistake: hashing in text mode or comparing against a hash copied from the same untrusted page as the download. Symptom: false MISMATCH (bytes altered by text-mode reads) or false confidence (both values attacker-controlled). Fix: binary mode 'rb' as written, and expected hashes only from the publisher's official channel.",
  },
  "l7-tool-methodology": {
    why: "This is the lesson's methodology compressed into one honest command: a scoped, limited scan of your own lab VM. -sV exists because an open port alone tells you little — the service version is the lead you then verify. --top-ports 20 exists to keep the scan small and polite. Without a bounded example like this, 'scan responsibly' is a slogan; with it, you have a template whose every flag has a reason.",
    output: "Normal result: a short table of open ports with services and approximate versions, and '1 host up'. Read each line as a question — is this service needed, owned, patched? Suspicious results: a service you did not install, or a version banner claiming something ancient. Next step is never 'exploit it': banners can lie (backported patches), so verify against the machine itself before writing any finding.",
    job: "This is the opening move of every authorized pentest and vulnerability assessment, and defenders run the same scan against their own estates to see themselves as an attacker would. The write-up discipline (scope line, timestamped output) is what makes it professional.",
    wrong: "Common mistake: replacing the lab IP with a public host 'just to see'. Symptom: you have performed an unauthorized scan — logged by the target and, in many jurisdictions, an offence. Fix: the target is your host-only VM's address (or scanme.nmap.org, the one public host whose owners explicitly permit test scans) — there is no third option.",
  },
  "l8-access-control-sqli": {
    why: "The two fixes that stop OWASP's top web risks are both in this block because they must become reflexes, not facts: the '?' placeholder (input travels as data, never syntax) and the ownership check (authentication is not authorization). The vulnerable version is shown only as a commented pattern so you can recognise the shape in review — the runnable code is the secure version, deliberately.",
    output: "Secure result: a tautology payload like ' OR '1'='1 matches no user at all (it is looked up as a literal name), and Bob asking for Alice's invoice gets None → 404. The vulnerable result would be the opposite on both: the payload returns the first user in the table, and any logged-in user reads any invoice by changing the ID. If your copy of the secure code ever returns a row for the payload, the parameter binding has been bypassed — check that the value was not glued into the SQL string.",
    job: "These two patterns are the daily bread of AppSec: code review, pentest findings and developer coaching all reduce to 'parameterize every query' and 'authorize every object, server-side, per request'. The 404-instead-of-403 choice is a real professional detail clients notice.",
    wrong: "Common mistake: 'sanitizing' input with string replaces instead of parameterizing. Symptom: the fix works for the payload you tried and fails for the encoding variant you did not. Fix: never build SQL with string concatenation — the placeholder is the entire fix, and it is shorter than the workaround.",
  },
  "l9-network-defense": {
    why: "A firewall's value is its default, not its exceptions — this block exists to install the professional order of operations: set default-deny first, then punch named, commented holes, then verify by reading the rules back. Without the verify step you have a hope, not a control; the block makes verification part of the same breath as the change.",
    output: "Normal result: 'Status: active', default deny incoming / allow outgoing, and only the rules you wrote, in order, each with its comment. Suspicious results: a rule you do not recognise, SSH allowed from 'Anywhere' on a real (non-lab) system, or status showing inactive after you 'enabled' it. Next step for any surprise rule: find who added it and why before removing it — on a shared system that rule might be carrying a service.",
    job: "Host firewalls are a baseline control in every hardening standard; network defenders and sysadmins write and review these exact rules, and the comment-with-a-business-reason habit is what makes a ruleset auditable a year later.",
    wrong: "Common mistake: enabling the firewall before allowing SSH — on a remote machine. Symptom: your next connection is refused and you are locked out of your own box. Fix: on remote systems, allow 22/tcp first, verify in a second session before closing the first; on your local lab VM the written order is safe.",
  },
  "l12-reading-cve": {
    why: "This five-line note is the lesson's deliverable, shown as a worked example because a triage note is a skill of form as much as facts: status before scores, exposure against YOUR inventory, an action with an owner and a clock. Without the example you would collect CVE trivia; with it you can produce the artefact a manager and an engineer can both act on in a minute.",
    output: "There is no program output — the note itself is the output, and it is judged like this: a good note lets a reader answer 'are we exposed, how do we know, what happens next, who owns it?' without a second document. A weak note leads with the CVSS score and never mentions your own assets — that ordering error is the 'suspicious result' here, because severity theory outranked exploitation reality.",
    job: "Vulnerability-management analysts write this note dozens of times a week; it is the unit of work between a scanner's raw output and a patch decision, and the format is directly portfolio-usable.",
    wrong: "Common mistake: writing 'published 2021-12-10' as if it were 'first exploited 2021-12-10'. Symptom: your timeline — and your urgency — is wrong in a way a reviewer will catch. Fix: label every date by what it is (published, KEV-added, vendor-confirmed), exactly as the example does.",
  },
  "l16-android-basics": {
    why: "A manifest is the one file that declares an app's whole attack surface, and this excerpt exists so you can practise reading it as an assessor: permission vs feature, exported vs reachable, debuggable vs shippable. Without a concrete artefact, 'review the manifest' is homework; with it, the three findings are things you found, not things you were told.",
    output: "The output is your findings list, and it should name three: READ_CONTACTS with no contacts feature (over-permission), debuggable=true in a release build, and exported components with no permission gate. A clean manifest — the 'normal' result — shows permissions that each map to a feature and exported=false or permission-protected components. Next step for each finding: write the fix next to it (remove, set false, gate with a signature permission), because a finding without a fix is only half the deliverable.",
    job: "Mobile security reviews and MASVS assessments start with exactly this read; MobSF automates the flagging, but severity judgment and the written fix — the parts in this exercise — are the human's job.",
    wrong: "Common mistake: flagging every permission as a finding. Symptom: a noisy report a developer learns to ignore, with the real findings buried. Fix: judge each permission against a stated feature — unexplained access is the finding; explained access is design.",
  },
  "l18-ir-forensics": {
    why: "Evidence you cannot prove unchanged is evidence you do not have. This two-command block exists to install the forensic prime directive in your hands: copy first, analyse the copy, and let matching SHA-256 hashes prove the copy is the original. Without the hash step, your analysis may be excellent and still worthless, because nobody can show the log was not altered along the way.",
    output: "Normal result: two identical 64-hex lines — the copy is bit-for-bit the original at collection time. A mismatch is the suspicious result: the copy differs (truncated copy, wrong file, or tampering) and must not be analysed or cited. Next step either way: write the custody note (source host, UTC time, collector, reason) while you still remember it — the hash without the note proves integrity of something unidentified.",
    job: "This is hour-one work in every incident response engagement and the graded core of SOC Training's evidence tasks; forensic and IR roles repeat it for every artefact they touch.",
    wrong: "Common mistake: analysing the original log in place (opening, filtering, saving). Symptom: timestamps and content change under your own hands — you have contaminated your best evidence. Fix: copy first, hash both, and only ever open the copy; if you already touched the original, record that honestly in the custody note.",
  },
  "l20-detection-engineering": {
    why: "A detection rule is code, and this Sigma rule exists to show the professional minimum in one screen: behaviour (parent + child process) instead of rotting indicators, a falsepositives field written before deployment, ATT&CK tags for coverage, and an honest status: test. Without the example you could describe detection engineering; with it, you can write a rule a SIEM can consume.",
    output: "The output is not printed text — it is the converted SIEM query plus validation behaviour: on the simulated malicious set the rule must fire (Office spawning PowerShell), and on the benign set its silence must be explainable. A rule that fires on ordinary admin automation is the suspicious result: that goes in falsepositives with a tuning note, not into production as a high-severity alert nobody trusts.",
    job: "Detection engineers write, validate and tune exactly these rules; the falsepositives and status fields are what separate a rule library a SOC trusts from alert noise that gets muted — a firing, credible detection is a portfolio piece.",
    wrong: "Common mistake: setting status to production (or level to high) before validation. Symptom: the rule pages the SOC for a benign pattern at 3 a.m. and is disabled within a week — coverage lost. Fix: ship as test, validate against both event sets, and let the evidence earn the promotion.",
  },

  "l4-py-variables": {
    why: "A password checker is the smallest program that still needs every basic at once — variables to hold the score, strings to inspect, conditions to judge. It exists so your first Python is not a toy 'hello world' but a security judgement you can explain: length earns the most points on purpose, and a listed common password zeroes everything, because those are how real guessing works.",
    output: "Normal result: a score out of 6, any notes printed as bullet lines, and a verdict. Read the notes, not just the number — 'too short' tells the user the fix. The suspicious case is built in: type 'password' and the common-list check forces Score 0 even though it has length and mixed case; if your copy scores it higher, the common-password block is missing or runs after the return.",
    job: "Password-strength logic (done properly, with breach-list checks) ships in real products, and the function shape here — take input, return a score plus reasons — is how assessors write testable security helpers.",
    wrong: "Common mistake: testing the password interactively once and calling it done, then breaking it with an edit. Symptom: edge cases (empty string, all symbols) crash or mis-score. Fix: call score_password with several known inputs in the shell and check each verdict — the function being separate from input() is exactly what makes that possible.",
  },
  "l4-py-control": {
    why: "Classification is what turns a log from text into evidence, and this block exists to teach the control flow behind it: conditions checked most-specific first, a loop over lines, and an OTHER bucket that refuses to let unclassified data vanish. Without the threshold if at the end, you would have counts but no decision — the ALERT line is the point of the whole program.",
    output: "Expected output: AUTH-FAIL 2, LOGIN-OK 1, ERROR 1, OTHER 1 — and NO alert line, because the threshold is 3. That absence is the lesson: if you expected an alert and none printed, compare the count with the threshold before assuming the code is broken. A suspicious result in real data is AUTH-FAIL climbing fast while LOGIN-OK stays flat — the shape of a guessing attack, investigated by source next.",
    job: "Every log pipeline, SIEM rule and triage script is this shape at heart: classify each event once, count honestly (including OTHER), and trigger action on a threshold. SOC analysts read outputs exactly like this table.",
    wrong: "Common mistake: reordering the conditions so a general check ('error') runs before the specific ones. Symptom: lines land in the wrong bucket and counts silently lie. Fix: keep most-specific first — the elif chain counts each line exactly once, in the order written.",
  },
  "l4-py-functions": {
    why: "This program exists to prove a design idea: risk knowledge belongs in data (the RISKY dictionary), and judgement belongs in a small function that takes one host and returns its notes. Without splitting it this way, every new risky port would mean editing logic in three places; with it, the whole program is a loop that prints a report — the shape of every inventory tool you will meet.",
    output: "Normal result: one line per host, 'no risky ports' for clean hosts. The finding to notice is lab-old: port 23, Telnet (cleartext) — on a real inventory that line becomes a ticket: remove or justify the service. If a line prints a Python dict or list brackets, the join/formatting line was changed — the report format is part of the deliverable.",
    job: "Asset inventory with risk annotation is real vulnerability-management work: scanners produce the host data, and a function like risk_notes is the triage layer that decides what a human looks at first.",
    wrong: "Common mistake: hard-coding the risky ports inside the function's if statements. Symptom: adding port 3389 later means hunting through logic and risking a typo in code instead of data. Fix: keep RISKY as data at the top — one-line change, no logic touched.",
  },
  "l4-py-integrity": {
    why: "This is the Level 6 hash idea grown into a system: baseline mode remembers what every file in a folder looked like, check mode reports only what changed, went missing, or appeared. It exists because 'is this system untouched?' is unanswerable from memory — you need a recorded baseline and a diff, and this is the smallest honest version of the file-integrity monitoring that real EDR products sell.",
    output: "Normal result after an untouched folder: 'Check complete' with no CHANGED/MISSING/NEW lines — silence is the healthy output, by design. Any CHANGED line is the suspicious result: the file's bytes differ from baseline (edited, corrupted, or replaced); MISSING and NEW are the other two alarms. Next step for any line: identify the file and who/what changed it before restoring — the tool detects, the human investigates.",
    job: "File Integrity Monitoring (FIM) is a named compliance and detection control; SOC teams triage exactly these CHANGED alerts on servers, and forensic timelines start from baselines like baseline.json.",
    wrong: "Common mistake: running check mode before ever running baseline mode, or baselining into a different folder than you check. Symptom: 'No readable baseline.json' — or worse, a flood of NEW lines that is really a path mismatch. Fix: baseline first, from the same working folder, and treat baseline.json itself as a file worth protecting — a baseline an attacker can edit proves nothing.",
  },
  "l4-py-network": {
    why: "Two professional habits share this block: read a response's security headers as a checklist instead of a blob, and test whether a port is open by actually connecting — against your own lab host only. The timeouts exist because real networks fail silently; without them the script hangs on the first dead port and teaches you nothing about the rest.",
    output: "Normal result for the lesson's lab app: the status line, several headers reported MISSING (that is the finding the Level 5/8 lessons then fix), and port lines reading OPEN with a banner for SSH and closed/filtered for the rest. Read OPEN + an unexpected banner as suspicious — a service you did not install, announcing a version you did not choose. If every port reads closed/filtered including on a host you know is up, suspect the target or your network path before suspecting the code.",
    job: "Header checkers and connect-scans are the automated form of the manual curl and nmap habits from Levels 5 and 7; AppSec engineers wrap exactly this logic into CI checks that fail a deploy when a header disappears.",
    wrong: "Common mistake: pointing check_ports at a host that is not yours 'because it is only three ports'. Symptom: none in the tool — the log on the other side still records a scan you had no right to run. Fix: the lab host (192.168.56.10, your host-only VM) is the only target this script is for; that boundary is part of the code, not a comment you can ignore.",
  },
  "l4-c-basics": {
    why: "This program teaches C's core moves — array, loop, condition, accumulation — on security-shaped data: login attempts per source, flagged above a threshold. It exists because the same counting logic you wrote in Python must become legible in C before the memory lessons make sense, and because C adds two traps Python hides: integer division and format specifiers, both demonstrated deliberately here.",
    output: "Expected output: two FLAG lines (sources 2 and 4 — values 41 and 17) and the summary 'total=68 flagged=2 average=13.6'. If your average prints 13.0, the (double) cast is missing and you have met the integer-division trap the lesson warns about. If a FLAG line is missing, compare the >= 10 threshold with the array values by hand — in C, you are the debugger's first tool.",
    job: "Reading small C programs fluently is the entry requirement for understanding systems code, exploit write-ups and the memory bugs of the next lessons; the flag-above-threshold pattern is also the logic inside countless monitoring checks.",
    wrong: "Common mistake: compiling without warnings enabled and missing a specifier/type mismatch. Symptom: the program builds, then prints garbage or crashes. Fix: always compile teaching C with gcc -Wall -Wextra and treat every warning as a bug you have not understood yet — return 0 only means the OS was told 'success', not that the output was right.",
  },
  "l4-c-arrays-functions": {
    why: "C strings are arrays with a termination rule, and this block exists to make you handle them with the bounded tool (snprintf) from your very first program — not as a later 'advanced' fix. The function split exists for a second reason: count_failed receiving the array AND its length teaches the one fact C beginners always miss — arrays do not carry their size with them.",
    output: "Expected output: 'failed lines: 2 of 4' and 'first line length: 25'. If the count is 0, strstr's needle ('Failed') does not match the data's capitalisation — C string matching is exact and case-sensitive, unlike the earlier Python classifier that lowered case first. If the length differs, count the characters in the snprintf line — the program is telling you the truth about the bytes, not about what you meant.",
    job: "String handling is where C security bugs live; reviewers scan for snprintf-vs-strcpy choices exactly like the one modelled here, and strlen/strstr fluency is assumed by every later systems lesson.",
    wrong: "Common mistake: passing the wrong count to count_failed (for example the byte size instead of 4 rows). Symptom: reads past the array — garbage counts or a crash. Fix: the count travels with the array, always, and loops stay i < n; that discipline is the direct ancestor of the bounds checks in the memory lesson.",
  },
  "l4-c-structs-heap": {
    why: "Programs that model real things (hosts, users, sessions) need records whose size is decided at run time — that is what structs on the heap are for. This block exists to install the ownership discipline in the same breath as the syntax: every malloc checked, every pointer freed exactly once and nulled. Without the discipline, heap code 'works' in the demo and leaks or corrupts in real use.",
    output: "Expected output: two lines naming each host and its open-port count, exit code 0. The failure output to recognise is 'allocation failed' on stderr with exit code 1 — that is the NULL check doing its job, not a bug. If the program prints garbage names, a pointer was used after free or never initialised; if it crashes at exit, a double free is the prime suspect.",
    job: "Heap ownership bugs (use-after-free, double-free, leaks) are a major real-world vulnerability class in C/C++ services and browsers; the check-free-null idiom in this block is the baseline reviewers expect in systems code.",
    wrong: "Common mistake: returning the address of a stack variable from a function 'because it printed fine once'. Symptom: works in the demo, corrupts later when the stack frame is reused. Fix: data that must outlive its function lives on the heap via malloc — exactly what make_host does — and its owner frees it.",
  },
  "l4-js-basics": {
    why: "A complete page, not a fragment — because the lesson's claim is that you can already build the whole loop safely: input, event, validation, and output through textContent. The payload in the expected output (<img onerror>) exists so you watch an attack string become inert text in your own browser; that one observation is worth more than a page of XSS definitions.",
    output: "Normal result: the greeting prints whatever you typed, literally — angle brackets and all. If anything you type renders as bold, an image, or a popup, the output line is using innerHTML somewhere: that is the vulnerable result, and it is the exact pattern the Level 8 XSS lesson later proves against a server. Empty input should show the 'Please type a name first' line — validation firing is a correct result, not an error.",
    job: "This is the front-end half of every web assessment: find the input, follow it to the sink, judge the sink. Developers who internalise textContent-by-default write measurably fewer XSS bugs.",
    wrong: "Common mistake: opening the file and seeing nothing happen because the script ran before the elements existed. Symptom: Cannot read properties of null in the console. Fix: keep the <script> at the end of <body> as written (or use defer) — order is part of the program.",
  },
  "l4-js-fetch": {
    why: "Fetching data is where JavaScript meets the network, and this block exists to teach the safe order of operations: check res.ok before parsing, render server strings as text nodes never HTML, and turn failure into a plain message instead of a broken page. Your own localhost training API is the target because its data is supposed to be hostile-shaped — it is where these habits are formed safely.",
    output: "Normal result: one list item per API record, shown as text. If the API is down or returns an error status, the correct result is the single error line in the alert paragraph — silence or a half-rendered list would be the buggy result. If list items ever appear with formatting or links inside them, a textContent was replaced by innerHTML: that is the finding, and the fix is in the loop that builds the <li>.",
    job: "API clients in real products are this exact structure grown up: status check, JSON parse, safe render, honest error state. AppSec reviewers trace fetched-data-to-DOM flows in precisely these terms.",
    wrong: "Common mistake: forgetting the training API is not running and debugging the page instead. Symptom: 'Could not load the lab API' — the error handling working as designed. Fix: start the Level 5 demo API on localhost:3000 first; the message tells you the page is fine and the server is the missing piece.",
  },
  "l4-bash-automation": {
    why: "A daily health report is the natural endpoint of Bash automation: three small checks (failed logins, disk, yesterday's backup) that a human would forget and a script will not. It exists to teach aggregation — many small facts rolled into one honest exit code — because that single number is what cron, monitoring and CI actually consume.",
    output: "Healthy result: modest failed-login count, disk well under 90%, 'Yesterday backup: present', exit code 0. Each HIGH or MISSING line is a designed alarm, not a formatting quirk: disk ≥90% means investigate today, a missing backup means your recovery story has a hole in it. Check the exit code with echo $? — if alarms printed but the code is 0, the status variable is not being set in that branch, and the report is lying politely.",
    job: "This is real sysadmin automation: the same script pattern runs on servers everywhere as a poor-man's monitoring layer, and its exit code is what a scheduler pages on. The defensive parsing (tr -dc keeping only digits) is how professionals survive tool-output formats changing.",
    wrong: "Common mistake: the grep -c line without the || echo 0 guard. Symptom: on a clean log (zero matches) grep exits 1 and, combined with strict shell settings, the script dies or reports nonsense instead of '0'. Fix: keep the guard exactly as written — zero is a result, not an error, and the code says so explicitly.",
  },
  "l4-powershell-automation": {
    why: "The Python and Bash lessons counted failed logins from a text file; this script exists to do the same job the Windows way — from the Security event log, with objects and properties instead of text scraping. It matters because grouping 4625 events by target account is a genuine SOC report ('which account is being guessed?'), and PowerShell's pipeline is the tool Windows estates actually run it with.",
    output: "Normal result: a count table ranked by account — one account with a modest number is ordinary user error; one account with dozens (the 38-count example) is the suspicious result: a password-guessing pattern against that user. Next step: check whether any 4624 success followed for the same account, then verify with the user. 'No failed logons in the window' is also a valid result — but only trust it from an elevated shell (see the mistake below).",
    job: "Event-log reporting is core Windows SOC/sysadmin work; this script's shape (FilterHashtable in, Group-Object ranking, optional CSV evidence out) is the template professionals reuse for dozens of event IDs.",
    wrong: "Common mistake: running it without elevation. Symptom: SilentlyContinue turns the access failure into 'No failed logons in the window' — a false clean bill of health. Fix: run PowerShell as administrator for Security-log work, and read that empty message as 'no events OR no access' until you have confirmed which.",
  },

  "l5-html-css-dom": {
    why: "You cannot assess what a browser receives until you can read the page it is built from. This login page exists as the smallest complete specimen: every assessor-relevant choice is in it — POST not GET for credentials, autocomplete attributes that let password managers work, and a script loaded from the same origin. The annotation comment is itself a teaching device: it demonstrates, by existing, why secrets must never live in source comments.",
    output: "Rendered output is just the form — the real output an assessor reads is in DevTools → Network: a POST whose body carries user and password. On an HTTP page that body is plaintext on the wire; that observation is the lesson. If you ever see credentials appear in the URL bar or history instead, method has become GET — a finding, not a preference.",
    job: "Web assessors read page source and forms in the first minutes of any engagement; developers who understand autocomplete and method semantics write login pages that cooperate with password managers instead of fighting them.",
    wrong: "Common mistake: 'improving' the form by switching it to GET so parameters are visible for debugging. Symptom: credentials land in URLs, server logs and browser history. Fix: POST for anything sensitive, always — debug from the Network tab's request body instead.",
  },
  "l5-rest-sql": {
    why: "This schema-plus-queries block exists because API security is decided in the database layer more often than in the controller: UNIQUE and REFERENCES make the database itself enforce the rules, and the authorized read puts the owner condition inside the WHERE clause — authorization that cannot be forgotten by a future endpoint. Without seeing the schema, the later BOLA lesson would look like a coding style choice instead of an architecture.",
    output: "Expected behaviour: the authorized read with the owner's id returns the row; the same query with another user's id returns zero rows, which the application turns into a 404. Zero rows is the safe result — if a query returns the order regardless of user_id, the owner term was dropped and you are looking at the BOLA pattern from Level 8. The join output (orders per user) is the sanity check that the schema links actually work.",
    job: "Backend and AppSec engineers design exactly this: constraints that hold even when application code has a bug, and queries that carry authorization with them. Code reviewers check the WHERE clause for the owner term by reflex.",
    wrong: "Common mistake: enforcing 'one account per email' or 'orders must have a real user' in application code only. Symptom: it works until a second code path, a script, or a race writes duplicates and orphans. Fix: declare UNIQUE and REFERENCES in the schema — the database is the one component that sees every write.",
  },
  "l5-backend-tls": {
    why: "Certificates are public evidence — this openssl command exists so you can read a server's identity proof with the same eyes a browser uses: subject, issuer, validity dates, and the SAN list that must contain the name you asked for. The nginx block beside it exists for the opposite direction: when the server is yours, this is the minimal shape that terminates TLS at a proxy and keeps the app itself off the public network.",
    output: "Healthy result: the certificate's SAN contains the exact hostname, the issuer is a recognised CA, and notAfter is in the future. Suspicious results each have a name: name not in SAN (the classic mismatch error), notAfter in the past (expired — browsers hard-fail), or a self-signed issuer where a public CA was expected. Next step for any of them is the Level 9 lab: issue your own CA certificate and watch verification succeed and fail on purpose, so each error message becomes familiar.",
    job: "TLS inspection is everyday work for sysadmins, pentesters and SREs; 'Verify return code: 0' versus a named failure is the vocabulary of every certificate incident and renewal checklist.",
    wrong: "Common mistake: omitting -servername (SNI). Symptom: on a virtual-hosted server you receive the default site's certificate and conclude the site is misconfigured when your question was wrong. Fix: always send the exact hostname with -servername — the certificate you get is the answer to the name you asked for.",
  },
  "l5-vuln-vs-secure": {
    why: "One small app, built twice, with the diff labelled FIX 1–4 — this block exists because secure patterns only stick when you can see them as four small changes to code you already understand, not as a rewrite by an expert. The vulnerable version is present only as comments for study; the secure version is what runs, so your hands learn the safe shape.",
    output: "After the fixes, the same four tests must read: injection string → no login; another user's note → 404; cookie shows HttpOnly and SameSite=Lax; a <b> payload displays as literal text. If any test still shows the old behaviour (login succeeds, note renders bold), that specific FIX line was not applied in your copy — the output names which one. That before/after discipline is the point: security claims are retested, never assumed.",
    job: "This is the assessor-to-developer loop in miniature: demonstrate, fix minimally, retest the identical cases. Portfolios and Project A are graded on exactly this evidence shape.",
    wrong: "Common mistake: uncommenting the vulnerable lines 'just to try them' in the same running app and forgetting them there. Symptom: your training app carries live vulnerabilities beyond the exercise — and habits form around the wrong version. Fix: keep the vulnerable code commented for reading; experiment in the dedicated training apps (Juice Shop, the Level 8 demos) that are built to be broken.",
  },
  "l6-threat-risk": {
    why: "A threat model is a document, so the lesson's code block is the document itself — a one-page STRIDE model for the training app you already built. It exists because modelling skill is invisible until it is written down: assets, actors, boundaries, then one row per threat ending in a decision. Without this worked example, 'do a threat model' produces either nothing or a 40-page essay nobody maintains.",
    output: "The output is the page, and it is read like a checklist: every STRIDE row ends in FIX, DONE (with where), or ACCEPTED (with a review date). A row ending in 'look into it' is the defective result — no owner, no verb, no date. Note the two rows already DONE by earlier lessons: a living model tracks closed threats, not just fears.",
    job: "Threat modelling is a named interview topic and a design-phase duty for security engineers; this one-page format is the version real teams actually keep alive across releases.",
    wrong: "Common mistake: listing threats with no decisions ('attackers could steal data'). Symptom: the model worries everyone and changes nothing. Fix: end every row with a verb, an owner class, and a state — the example's discipline is the entire technique.",
  },
  "l6-access-zero-trust": {
    why: "Least privilege is usually taught as a slogan; this worked example exists to make it testable. Each role states its NEVERs, and the design tests are written as attacks that must fail — a support account trying the admin endpoint, staging credentials tried against production. Without the tests, an access design is a hope; with them, it is a control you re-run quarterly.",
    output: "The output is the review evidence: each design test must return 403 or failure, the 90-day stale-account list must be produced, and role membership must come back owner-confirmed. A test that succeeds (support CAN open /admin/users) is the critical result — the design is wrong, not the tester — and it becomes a fix before the review can close.",
    job: "Access reviews and role design are recurring GRC and identity-engineering work; 'prove the negative' testing is also how Zero Trust claims get audited rather than merely asserted.",
    wrong: "Common mistake: defining roles only by what they CAN do. Symptom: reviews pass everyone, because nothing in the document can ever fail. Fix: write the NEVERs first — least privilege is proven by what breaks when tried, as the example shows.",
  },
  "l6-policy-sdlc": {
    why: "Two worked examples share this block because policy fails in two classic ways — unwritten, or written but unenforced — and each half answers one: the secrets clause shows a rule a new hire can obey and an auditor can measure, and the pipeline gate shows the same rule enforced by machines (SAST, SCA, regression tests) instead of reminders. Without both halves you get either a wiki page nobody reads or tooling nobody governed.",
    output: "The output to expect from the gate is binary and boring when healthy: tests pass, scanners quiet on fixable criticals, artifact deploys to staging. A gate that fails on an unfixable CVE flood is the pathological result — teams learn to ignore red pipelines, so the design fails on fixable criticals only. If the header-check step fails after a deploy, that is the gate earning its keep: yesterday's fix is today's regression test.",
    job: "Secure-SDLC design — clauses, gates, exception processes — is the daily material of AppSec and GRC roles; being able to write the measurable clause is a differentiator in interviews for both.",
    wrong: "Common mistake: writing policy without an exception path. Symptom: the first legitimate deadline pressure produces a secret, permanent workaround instead of a dated exception. Fix: copy the example's shape — written exception, maximum 30 days, named risk owner — so bending is visible and expiring.",
  },
  "l6-awareness-defense": {
    why: "Defense in depth is easy to claim and hard to show; this scorecard exists to make it five measured lines. Each metric pairs an outcome (not an activity) with a target and a last-measured date, because 'we did phishing training' says nothing while 'median time-to-report: 6 minutes' says almost everything. The code block is a document because in this lesson the document is the deliverable.",
    output: "Read it as a health page: a line inside its target with a recent date is green; the two lines demanding action here are the stale accounts (tickets open) — named, not hidden. A metric with no date, or a target with no measurement, is the broken result: stale green is the most dangerous colour in security reporting, and the RULE line at the bottom exists to call it out.",
    job: "Security reporting to leadership is a real, graded skill for analysts growing into engineering and management; outcome scorecards like this are what CISOs actually circulate.",
    wrong: "Common mistake: reporting activities ('12 trainings delivered') as if they were outcomes. Symptom: leadership believes awareness is handled while reporting time stays at hours. Fix: measure the behaviour the activity exists to change — time-to-report, submission rate — exactly as each line here does.",
  },
  "l7-nmap": {
    why: "This sequence exists to teach scan craft as three different questions, not one big hammer: -sn asks 'who is alive?' for inventory, -sV -sC asks 'what exactly is running?' for leads, and --top-ports asks 'what is exposed?' for a quick check. The -oA line is here because a scan without evidence files is an anecdote — the report and the retest diff both come from those files.",
    output: "Normal lab result: a short port table with service versions, host up, timings recorded. Treat every version as a claim, not a fact — distributions backport patches, so an 'old' banner may be fully patched; verify on the host before writing it up. The comparison that matters: nmap's list versus ss -tlnp inside the host. Anything nmap sees that the host does not list (or the reverse) is a real finding about binding or filtering, and that mismatch is your next investigation.",
    job: "This is the standard opening of authorised assessments and of defenders scanning their own estates; the scope-line-first habit and -oA evidence discipline are what separate a professional scan from a noisy one in a report review.",
    wrong: "Common mistake: running the full -sV -sC scan first, against the whole subnet, when a discovery pass was the actual need. Symptom: minutes of noise, annoyed network owners, and no inventory to show for it. Fix: follow the block's order — discover, then deepen on the hosts that matter, then quick-check exposure.",
  },
  "l7-wireshark": {
    why: "Packet work drowns beginners in volume; these tshark commands exist to teach the two-filter discipline that prevents it: a small capture filter decided before recording (only ports 53 and 443), then display filters over the saved file that summarise instead of scroll — counts of names resolved, counts of connection attempts. Without the counting step, a capture is a haystack you describe; with it, it is evidence you can cite.",
    output: "Normal lab result: a short ranked list — a few hostnames with plausible counts (updates, portal) and a modest set of SYN attempts to expected ports. Suspicious shapes: one name resolved hundreds of times (possible tunneling or a broken client), SYNs fanning out to many hosts/ports from one source (scanning behaviour), or TLS attempts to an IP with no preceding DNS (hard-coded endpoint). Next step for any of them: filter to that host's full conversation before concluding — summaries nominate, packets prove.",
    job: "SOC and network-forensics work is exactly this loop — capture narrowly, summarise by count, drill into the nominated conversation. The Level 18 forensics lesson reuses the same .pcapng discipline with hashes added.",
    wrong: "Common mistake: capturing everything ('just in case') on an interface that carries other people's traffic. Symptom: an evidence file full of unrelated private data you had no authorisation to record. Fix: scope the capture filter before you start, on your lab interface only — the filter in this block is deliberately small for that reason.",
  },
  "l7-burp-zap": {
    why: "A baseline scan exists to give you a repeatable, low-noise first pass over your own training app — ZAP checks the standard misconfigurations while you learn to do the part machines cannot: judge each alert. The Burp note beside it exists because the manual proxy workflow (browse, site map, Repeater, change one value) is where authorisation bugs are actually found; the scanner is the warm-up, not the performance.",
    output: "Expected result: the scan completes with PASS/WARN/FAIL counts and an HTML report whose alerts (like the missing anti-CSRF token on the demo form) are leads. The professional output is your verdict written beside each alert — confirmed, false positive (with the reason), or not applicable. An alert you cannot reproduce by hand in Repeater stays a lead; it does not go in a report as a finding.",
    job: "Scanner triage is a core AppSec duty: tools produce volume, professionals produce verdicts. Clients pay for the second column — the judgment — and interviewers test it by handing you scanner output.",
    wrong: "Common mistake: pointing zap-baseline at a site that is not your training app because 'it is only the passive scan'. Symptom: you have still scanned a third party without authorisation, and baseline is not purely passive. Fix: the target is host.docker.internal:8000 — your local demo — or a target named in your written scope. There is no third category.",
  },
  "l7-curl-openssl-git": {
    why: "Four commands, four daily habits, one block: curl -sI makes a header audit one line; an explicit -X/-H curl call makes an API request reproducible enough to paste into a report; openssl s_client reads a TLS handshake the way the browser judged it; and git status before committing is the hygiene that keeps secrets and capture files out of history forever. Each is here because professionals run it weekly, not because it is exotic.",
    output: "Expected results in order: 200 OK with your training app's header block (compare it against your Level 5 fix list), the JSON items, 'Verify return code: 0 (ok)' with TLSv1.3 named, and a clean git status with your last three commits. The result to act on in step 3 is any non-zero verify code — it names the exact trust failure (expired, wrong name, untrusted issuer) instead of a browser's vague warning. In step 4, an unexpected file in status --short (a .pcap, a .env) is the catch this habit exists for: stop, do not commit it.",
    job: "These are the connective-tissue commands of assessment and engineering work; a junior who runs them fluently — and can explain each flag — reads as experienced in any tools interview.",
    wrong: "Common mistake: using curl without -s in a script or report and pasting the progress meter into evidence. Symptom: unreadable output nobody can diff against the retest. Fix: -s for clean output; and keep the request explicit (-X, -H) so the command itself documents what was sent.",
  },
  "l7-detection-scanning-tools": {
    why: "Two rule formats share this block because they answer different questions about the same behaviour: YARA asks 'is this FILE the thing we described?' over strings in a file, Sigma asks 'did this BEHAVIOUR happen?' over logs. Seeing both at once — with the Office→PowerShell behaviour written in Sigma beside its Level 20 twin — teaches which tool to reach for, which is the actual professional decision.",
    output: "YARA's output is a rule name printed against files where BOTH strings occur — requiring the pair is the precision decision; a file matching only one string stays silent, by design. Sigma's output is a converted SIEM query plus, in validation, alerts on the malicious event set only. If the YARA rule fires on an ordinary document, a string is too generic — that is a tuning task on $note, not a discovery.",
    job: "Rule authoring in both formats is detection-engineering bread and butter; malware triage teams maintain YARA libraries, SOCs consume Sigma conversions, and both are judged on the false-positive thinking written into the rule.",
    wrong: "Common mistake: writing a YARA condition with 'or' between weak strings to 'catch more'. Symptom: the rule fires across the estate and gets deleted within a month. Fix: require the discriminating combination (the 'and' in this rule) and accept narrower coverage — a trusted narrow rule beats a muted broad one.",
  },

  "l8-crypto-failures": {
    why: "Passwords must survive the theft of the very database that stores them — this code exists to show the storage shape that achieves it: a slow, salted KDF (scrypt) whose stored string carries scheme, salt and hash together. Without it, 'hash the passwords' usually means a fast unsalted hash in beginners' code, which is precisely the failure this lesson exists to eliminate.",
    output: "Expected output: right password verifies True, a one-letter-different password verifies False, and hashing the same password twice gives different stored strings. That last True is the salt working — if two hashes of the same password ever match in your copy, the random salt is missing and identical passwords become visible in the database, which is the suspicious result. A malformed stored string must also return False, never an exception — verify_password's try/except is part of the security behaviour.",
    job: "Password storage is audited in every AppSec review and pentest of an application with accounts; recognising scrypt/Argon2id/bcrypt parameters and per-user salts in code is a standard review skill, and compare_digest is the professional comparison habit.",
    wrong: "Common mistake: comparing hashes with == instead of hmac.compare_digest. Symptom: nothing visible — the code 'works' while leaking how much of the hash matched through timing. Fix: constant-time comparison for every secret comparison, as written; and never lower the scrypt work factors to make tests faster — the cost is the control.",
  },
  "l8-injection-deep": {
    why: "This demo exists so the injection mechanism stops being a story: the same payload, the same table, two functions that differ by exactly one mechanism — string glue versus a bound parameter. The asserts at the end exist for a second reason: a fix without a regression test is a fix that silently dies in a future refactor, and this lesson's standard is that both halves (attack fails, real login works) are proven every run.",
    output: "Expected output is the whole lesson in three lines: the vulnerable login returns 'nadia' for the payload (a login with no password — the flaw, proven), the secure login returns None for the same payload (looked up as a literal name), and the real user still logs in. If the secure function ever returns a row for the payload, injection is back — the assert will say so in CI before a human has to. If the real login returns None too, the fix broke authentication, which the second assert guards.",
    job: "This demonstrate→fix→regression-test loop is the exact deliverable shape of professional web assessments and of Project A; AppSec engineers are hired to produce the third line ('tests passed'), not just the first.",
    wrong: "Common mistake: 'fixing' the vulnerable function by filtering quotes or the word OR from input. Symptom: the demo payload fails, an encoding variant succeeds, and the code looks defended. Fix: delete the concatenation entirely — the placeholder is the fix; filtering is a sieve, binding is a wall.",
  },
  "l8-insecure-design": {
    why: "Reset tokens are where insecure design hides in otherwise clean code, so this block builds the bearer credential correctly from first principles: 256 bits of randomness, only its hash stored, a 30-minute expiry, and single-use enforced at consumption. It exists because each of those four properties answers a real abuse case (guessing, database leak, stale links, replay) — remove any one and the design, not the code, is the vulnerability.",
    output: "Expected output: exactly one True — the first use — followed by three False lines (replay, wrong token, expired). Read any other pattern as a named defect: replay True means consumption does not delete; expired True means the clock check is missing; wrong-token True means the comparison is broken. Next step in a real review: check the email link itself uses HTTPS and that requesting a new token invalidates the old — the store overwrite in issue_token does the second by design.",
    job: "Design review of authentication-adjacent flows (reset, invite, magic-link, API keys) is senior AppSec work; this token pattern recurs in all of them, so the four properties become a checklist you reuse verbatim.",
    wrong: "Common mistake: storing the raw token 'so support can look it up'. Symptom: a read of the token table — backup, log, SQLi — hands out live account-recovery links. Fix: store only the SHA-256 digest as written; support verifies identity out-of-band instead, exactly as real reset systems do.",
  },
  "l8-misconfig-headers": {
    why: "A security baseline has to be code, not a wiki page, or it drifts — this tiny server exists to show the baseline as one HEADERS dictionary applied to every response, so the control is reviewable, diffable and copyable between apps. It also exists to be curled: the lesson is not finished until you have read the headers back with the very command from Level 5 and seen your own baseline looking back at you.",
    output: "Expected curl -I output: 200 plus all six headers, in server order. Judge it line by line: HSTS present (with the lab caveat that browsers ignore HSTS received over plain HTTP — production sets it on the HTTPS response), CSP with frame-ancestors 'none', nosniff, DENY. A missing header after an edit is the regression this setup exists to catch; if curl shows a header your dict does not contain, something else (a proxy) is adding it — know which layer owns each line.",
    job: "Baseline configuration and its verification are standard hardening and assessment work; the header fix list from this pattern is a Project A deliverable, and 'configuration as a reviewed dict' is how real teams keep baselines alive.",
    wrong: "Common mistake: setting the headers in one route or one response path only. Symptom: the home page passes the check while error pages and API responses go out naked. Fix: apply the baseline in one shared place — the handler/middleware level, as this server's single class does — and verify against more than one path.",
  },
  "l8-xss": {
    why: "Two routes, one difference — html.escape — exist so XSS becomes an experiment you ran rather than a category you memorised. The /vuln route is deliberately present in this localhost demo because recognising the flaw's behaviour (your input comes back as markup and executes) is what lets you spot the same shape in code review, where there is no alert box to help you.",
    output: "Expected behaviour: on /vuln the script-shaped name fires an alert (the flaw, contained to your own browser on 127.0.0.1); on /safe the identical input is displayed as inert text, and the response source shows &lt;script&gt;. That encoded form is also the regression assertion: if /safe ever returns the raw '<script>alert' from input, the escape call was lost. If /vuln does NOT fire in a modern browser with a CSP header added later, note that CSP is a second fence — the missing encoding is still the defect.",
    job: "Reflected-XSS verification and the encoding fix are entry-level AppSec daily work; the habit formed here — same payload, vulnerable vs fixed, evidence from the response body — is the exact shape of a pentest finding and its retest.",
    wrong: "Common mistake: testing the safe route with a harmless name and declaring it fixed. Symptom: 'it works' — because nothing attacked it. Fix: always retest with the attack-shaped input on BOTH routes, as the output block specifies; a security fix is only proven against the input that broke the original.",
  },
  "l8-csrf-ssrf": {
    why: "Two guards share this file because they are the same idea pointed in two directions: do not let a request's origin or destination be attacker-chosen. The CSRF half issues a per-session secret a cross-site form cannot read, so it cannot forge a valid submission; the SSRF half refuses any URL whose host is not allowlisted or whose resolved addresses are private — because a public name can point at a private address, which is the trick that makes naive URL checks fail.",
    output: "Expected output: legit token accepted True, forged (no token) False, the metadata IP and localhost both refused (None), and the allowlisted host accepted when DNS resolves publicly. The safe failure to recognise: offline, the allowlisted host may also return None because DNS cannot resolve — refusal is the safe direction; a validator that fails OPEN on DNS errors would be the dangerous bug. If a private address ever returns the URL, the ipaddress checks were bypassed — that is the finding.",
    job: "CSRF tokens and SSRF allowlists are checklist items in every web/API assessment, and cloud-metadata SSRF is a named, high-impact finding class; writing the validator yourself once is what makes reviewing others' versions fast.",
    wrong: "Common mistake: validating only the URL's hostname string against a blocklist ('contains localhost'). Symptom: bypass by DNS name that resolves privately, or by redirect to an internal address. Fix: allowlist-first plus resolved-IP checks exactly as written — and note the production addition the pattern library teaches: disable or re-validate redirects.",
  },
  "l8-auth-failures": {
    why: "A login endpoint fails in three quiet ways — it tells attackers which usernames exist, it lets them guess forever, and its lockouts punish victims — and this guard exists to close all three in one readable place: one generic message for every failure kind, a per-account counter with a cool-off, and verification inherited from the scrypt lesson. The injectable clock exists so the throttle can be regression-tested without sleeping, which is why professional code passes time in.",
    output: "Expected output: two identical 'Invalid username or password.' lines (real user, ghost user — indistinguishable by design), then 'Too many attempts' when the CORRECT password arrives during cool-off, then OK after the clock advances 61 seconds. If the ghost-user message ever differs by a word, you have built an enumeration oracle — that is the suspicious result. If the correct password succeeds during cool-off, the throttle is decorative.",
    job: "Authentication review — error oracles, throttling, lockout-DoS balance — is a specialised, well-paid slice of AppSec; these exact trade-offs (slow the attacker, never permanently lock the victim) are what interviewers probe for auth roles.",
    wrong: "Common mistake: locking the account permanently after N failures 'for security'. Symptom: anyone can lock any user out forever by failing five logins with their name — the control became the attack. Fix: time-boxed cool-off with counter reset, as written; the demo value (60s) is tuned in production, the shape is not.",
  },
  "l9-firewall-rules": {
    why: "This script exists to install a complete default-deny posture on your lab VM in one reviewable pass — policy DROP, loopback and established traffic allowed, SSH only from your management subnet, web ports open because they are the VM's job, and a LOG rule so denied traffic becomes evidence instead of silence. The nftables translation is included because the same policy must be speakable in the modern tool, not just the legacy one.",
    output: "Expected verification: iptables -L lists the six INPUT lines in order with policy DROP, and from a second lab machine SSH (from the management subnet) and curl succeed while a telnet attempt fails AND appears in the log with the fw-drop prefix. A connection that succeeds but should not is a rule-order problem — first match wins, so read top-down. If SSH from your own host fails, your source subnet is not the MGMT range in the script; that refusal is the rule working, and the fix is the variable, not disabling the firewall.",
    job: "Firewall ruleset authoring and review is core network-defence work; the verify-from-a-second-host step and the log-before-drop rule are the details auditors and senior engineers look for.",
    wrong: "Common mistake: running this on a remote machine without console access or a rollback timer. Symptom: the flush plus DROP policy severs your own session mid-script. Fix: the script's header is the control — snapshot first, console ready; remotely, arm an automatic rollback (a timed revert) before touching policy, exactly as the code lines warn.",
  },
  "l9-ids-suricata": {
    why: "One rule, fully validated, that you fire yourself and then read in the JSON log — this exists because IDS skill is a loop (write, validate with -T, generate the traffic, read the alert, tune), not a rule syntax. The rule is deliberately a policy-violation alert on /admin rather than an exploit signature: it teaches the mechanics on traffic you can generate safely, and its http.uri scoping shows the precision habit that keeps rules quiet.",
    output: "Expected output in two parts: suricata -T ends with successful validation (or names the exact broken rule line — fix that before anything runs), and the curl from the second lab machine produces ONE eve.json alert with signature_id 1000001 and the /admin URL. Alerts on unrelated requests mean the content match is too broad (that is why it is pinned to http.uri); no alert at all usually means the rule file is not referenced in suricata.yaml or the interface name is wrong — check loading before rewriting the rule.",
    job: "IDS rule writing and tuning is detection-engineering work shared by SOC and network-security roles; the validate-fire-read cycle here is the same loop used for production Suricata and Snort rulesets.",
    wrong: "Common mistake: promoting a brand-new alert rule straight to drop/IPS mode. Symptom: a false positive now blocks real traffic instead of just logging. Fix: alert first, measure on real lab traffic, and let promotion to IPS be a separate, justified decision — the lesson's own word is 'graduation, not enthusiasm'.",
  },
  "l9-vpn-tls": {
    why: "TLS trust stops being magic the moment you ARE the CA: this script creates a lab root, issues a server certificate with the SAN modern clients actually check, and then verifies the chain with the same openssl verify a client library conceptually runs. It exists because certificate errors (wrong name, expired, untrusted issuer) are indistinguishable from the browser's chair — here you manufacture each condition and read its exact error yourself.",
    output: "Expected output: 'server.crt: OK' from verify, and the inspection lines showing your Lab CA as issuer and both lab.internal names in the SAN. The instructive failures to then produce deliberately (per the lesson's PC steps): verify against the WRONG CA file (chain error), request a name not in the SAN (hostname mismatch — verify alone does not check this; the client does), and an expired copy (date error). Each has a distinct message; learning to read which one you got is the skill.",
    job: "PKI and certificate lifecycle work underpins VPNs, internal services and all TLS operations; SRE and security engineers who can run a private CA in a lab debug production certificate incidents in minutes instead of hours.",
    wrong: "Common mistake: treating ca.key like an ordinary file. Symptom: none — until anyone holding it mints 'trusted' certificates for any name in your lab and every verification passes. Fix: protect the CA key like a password (permissions 600, offline for real PKIs), exactly as the code lines state; a CA key is a master key.",
  },
  "l9-wireless": {
    why: "This hostapd file exists because wireless security is configuration, and every line here is a decision with a reason: SAE in transition mode (WPA3 where possible, WPA2 for the one old device — a deliberate, dated compromise), protected management frames on (mandatory for SAE, and the deauth defence), and SSID hiding explicitly OFF with the reason written beside it. Without a defensible specimen, 'secure the Wi-Fi' stays advice; with it, you can validate (hostapd -t), run, and review a real AP config.",
    output: "Expected output: hostapd -t either accepts the file silently (exit 0) or names the offending line — a clean validation is the result to require before any radio starts. A client then sees a WPA2/WPA3-transition network, and a WPA3 client negotiates SAE. If a WPA3-capable client falls back to plain WPA2 unexpectedly, suspect the key-mgmt line; if clients cannot join at all after enabling 802.11w, an old device lacks management-frame support — the transition compromise has a cost, and this is where it shows.",
    job: "Wireless configuration review is part of network assessments and office/branch IT security; evil-twin and rogue-AP defence starts from knowing precisely what a correctly configured AP looks like.",
    wrong: "Common mistake: copying the placeholder passphrase line literally, or choosing a word-like passphrase 'to remember it'. Symptom: a lab AP secured by a password printed in a course — or cracked in seconds by a wordlist. Fix: generate 20+ random characters in your password manager and paste them in, as the comment instructs; the placeholder is a label, not a value.",
  },
  "l9-monitoring-zeek": {
    why: "Zeek's conn.log remembers every connection, but a log is not an answer — this script exists to show the analyst's four standard questions (who talks most, who moves the most bytes, what do connection states look like, who is knocking without answer) as repeatable commands over YOUR lab log. The counting idioms are deliberately the same sort | uniq -c discipline from Level 3: log sources change, the method does not.",
    output: "Read the states first: mostly SF is a healthy network (connections completed); S0 means attempts that never got a handshake — a few is background noise, while one source with many S0 (the 27-count footprint in the example) is the suspicious result: possible scanning, a dead service, or firewall drops. The script's own wording is the discipline: that host 'deserves a question, not yet a verdict'. Next step: pull that source's full conn.log lines and see which destinations and ports it touched before hypothesising.",
    job: "Zeek analysis is a named SOC and network-forensics skill; 'top talkers, biggest sessions, state summary, S0 footprint' is a genuine first-hour triage pattern for a new network segment.",
    wrong: "Common mistake: cutting Zeek logs by column number instead of field name with zeek-cut. Symptom: silently wrong answers when the log format or field order differs between versions. Fix: zeek-cut by name exactly as written — names survive format changes, column counts do not.",
  },
  "l10-windows-hardening": {
    why: "Hardening you cannot prove is opinion — this script exists to produce the proof: a dated, read-only report whose every section header states the expected value, so the output reads as pass/fail without a second document. It changes nothing on purpose: audit before change is the lesson, and next month's rerun of this same script is your drift detector.",
    output: "Healthy output: three firewall profiles Enabled True, Defender real-time and tamper protection True with a recent signature date, SMBv1 not Enabled, an Administrators list you can narrate person by person, and logon auditing recording Success and Failure. Each disagreement is a finding in priority order: an unknown admin name and a disabled firewall profile outrank everything else here. If a section errors instead of reporting (commonly the SMBv1 cmdlet without elevation), record 'not verified' — never read an error as a pass.",
    job: "Baseline auditing is the recurring first task of Windows administration and compliance work; the dated-baseline habit is also what turns a hardening claim into evidence an auditor accepts.",
    wrong: "Common mistake: running it, seeing a long report, and filing it unread because 'the script passed'. Symptom: findings (SMBv1 enabled, a stale admin) sit in a text file while the machine stays exposed. Fix: read it against the 'want' notes line by line and turn each mismatch into a tracked fix — the script's job is to nominate, yours is to decide.",
  },
  "l10-linux-hardening": {
    why: "This audit exists because a Linux server's real posture is spread across sshd's effective config, sudoers, file permissions, auditd and the update mechanism — no single file tells the truth. sshd -T is in it because it prints the EFFECTIVE settings (all includes resolved), which is the difference between auditing the truth and auditing one file's intentions. Like its Windows twin, it changes nothing: fixes are separate, reviewed, one at a time.",
    output: "Healthy output: permitrootlogin no, passwordauthentication no, a sudoers grant list you can narrate line by line, an EMPTY world-writable list, private keys at 600, auditd active with identity-file watches loaded. The suspicious results are specific: any world-writable file under /etc, a key at 644 (SSH may refuse it — and anyone can copy it), or '(no identity watches loaded)' — meaning changes to passwd/shadow/sudoers are happening unrecorded. If sshd -T prints little, you needed sudo; an incomplete audit is 'unknown', not 'secure'.",
    job: "Linux hardening audits are baseline work for sysadmins, cloud engineers and assessors; the world-writable sweep is the Level 1 permissions lesson operating at system scale, which is exactly how employers expect fundamentals to compound.",
    wrong: "Common mistake: 'fixing' findings in the same sitting, in bulk, from the audit output. Symptom: a sudoers or SSH edit locks you out or breaks a service, with no record of which change did it. Fix: one change at a time, with a snapshot and a re-run of this audit between changes — the script's closing discipline is the procedure.",
  },
  "l10-edr-sysmon": {
    why: "Telemetry is a policy about attention before it is a tool, and this small config exists to make that visible: include everything on process creation (that truth is precious), include network and DNS broadly, but scope file-creation to the drop locations that matter — with every exclusion named and narrow. Without reading a real config, 'deploy Sysmon' sounds like an install step; with it, you see the tuning decisions that decide whether EDR data is evidence or noise.",
    output: "The output you read is Event 1 records in the Sysmon Operational log: image, command line, parent image, user, and the SHA-256 of the binary. The record that justifies the whole setup is one line of Level 1's pattern — WINWORD.EXE as parent of powershell.exe with an encoded command line — now with a hash and timestamp attached. If the log is empty after install, the config failed to load (schemaversion mismatch is the classic cause) — silence from a sensor means 'broken', never 'quiet network'.",
    job: "Sysmon deployment and config tuning is genuine EDR-adjacent engineering; detection teams write and review these rule groups, and the narrow-exclusion discipline is what keeps a config from becoming a blindfold with paperwork.",
    wrong: "Common mistake: installing with a schemaversion that does not match the Sysmon build, or excluding a broad path 'to reduce noise'. Symptom: the config is rejected or silently partial — you believe you have telemetry you do not have. Fix: check the version on the Sysmon download page, keep exclusions to named binaries, and verify with a known process creation before trusting the feed.",
  },
  "l10-patch-scanning": {
    why: "This loop exists to teach the full patch cycle as four verbs — build, scan, patch the base, rescan — because a scanner report alone changes nothing. --ignore-unfixed is in the scan on purpose: it focuses the report on findings a fix exists for, which is where work is possible; and the before/after files exist so 'patched' is a diff you can show, not a claim you make.",
    output: "scan-before.txt lists each finding with its ID, severity, installed version and the fixed version — quote IDs from YOUR output, since the scanner reads live vulnerability data and this lesson invents none. After the base-image update and rescan, the rows whose fixed versions you adopted must be gone; a row that survives means the rebuild did not actually pick up the new base (stale tag or cached layer) — that is the suspicious result, and the rescan is what catches it. Rows without fixes remain by design and get a risk note, not silence.",
    job: "Container scanning and patch verification are daily vulnerability-management work in any Docker shop; the scan-patch-rescan evidence pair is the standard attachment to a remediation ticket.",
    wrong: "Common mistake: editing the Dockerfile, declaring the image patched, and never rescanning. Symptom: the running image is unchanged (build cache, wrong tag) while the ticket says fixed. Fix: rebuild and rerun the identical scan command into scan-after.txt — the shrinking table is the only proof accepted.",
  },
  "l10-encryption-backup": {
    why: "Encryption state and backup state share this block because both are controls people believe they have until an incident asks for proof. The commands exist to replace belief with three facts — ProtectionStatus, the protector types present, and LUKS header facts — plus the restore-test record format, because a backup that has never been restored is a hypothesis, and this lesson refuses to let it stay one.",
    output: "Healthy Windows result: ProtectionStatus On with VolumeStatus FullyEncrypted, and a RecoveryPassword protector listed — meaning an escrow path EXISTS (its value verified separately, stored away from this machine). The alarming results: ProtectionStatus Off (many 'BitLocker incidents' are exactly this discovery, mid-incident) or no recovery protector, meaning a forgotten PIN can brick the data. On Linux, luksDump should show your expected cipher and enabled key slots; slots you do not recognise are a finding, not a curiosity.",
    job: "Encryption verification and restore testing are compliance-grade operational duties (and Level 6 scorecard metrics); support and sysadmin roles are routinely the people who discover — or prevent — the 'protection was off' incident.",
    wrong: "Common mistake: printing or screenshotting the recovery key VALUE into a ticket or chat 'for the record'. Symptom: the master recovery credential now lives in systems with far weaker protection than the disk it unlocks. Fix: record protector TYPES and where the key is escrowed — never the key itself; that boundary is written into the code comments because it is the professional rule.",
  },
  "l10-endpoint-ir": {
    why: "When an endpoint is suspect, the most perishable evidence dies first — running processes, live connections, logged-on users — and this script exists to capture them in volatility order before anyone reboots, cleans, or 'checks something' interactively. It collects and deliberately does nothing else: containment is a decision made AFTER this bundle is safe, and the hashes computed last are what let anyone later prove the bundle itself was not altered.",
    output: "Expected output: a timestamped folder containing the custody note, five CSV/txt artefacts and SHA256SUMS.csv. Read processes.csv against connections.csv — a process with an external connection that has no business having one is your first scoping lead; failed-logons.csv shows whether the account story matches the 4625 pattern. An empty Sysmon CSV on a machine where Sysmon should exist is itself a finding (sensor dead or tampered). If any file is missing, collection was interrupted — record that in the custody note rather than silently re-running later and mixing timelines.",
    job: "Endpoint triage collection is the literal first hour of incident-response work; this bundle's shape (volatile-first, CSV evidence, custody note, hash manifest) is what IR consultants deliver and what SOC Training grades.",
    wrong: "Common mistake: rebooting the suspect machine 'to see if it helps' before collection. Symptom: processes, connections and in-memory evidence vanish — the most valuable hour of the incident, gone. Fix: run collection first, to external media as the script's destination demands, and only then decide containment; the script's last line says it plainly: do not reboot first.",
  },
  "l11-auth-mfa": {
    why: "TOTP looks like magic inside authenticator apps until you implement RFC 6238 once — then it is a counter, an HMAC, and a truncation rule you can verify against the RFC's own test vectors. This code exists to demystify the second factor you are asking users to trust, and to expose the two parameters that govern its security: the per-user secret's protection, and the ±1-step verification window.",
    output: "Expected output: the current code from this script matches the code in an authenticator app provisioned with the same secret (that agreement is the standard working), verify True for it, False for 000000. If the app and script disagree persistently, suspect clock drift beyond one step or a mistyped secret — in that order. A verify that accepts codes several steps old means the window was widened somewhere; that is the suspicious result, because each extra step multiplies a guesser's chances.",
    job: "Identity engineers and security reviewers who can read a TOTP implementation can judge MFA rollouts, spot weakened verification windows in code review, and explain to users why the rolling code is not 'the app phoning home'.",
    wrong: "Common mistake: widening the tolerance window (±5 steps 'to reduce support tickets'). Symptom: fewer complaints, silently weaker factor — a phished code stays usable far longer. Fix: keep ±1 step for clock drift only, and solve support pain with resync flows, not with a bigger target for attackers.",
  },
  "l11-oauth-oidc": {
    why: "PKCE exists because authorization codes travel through browsers, logs and redirects where they can be intercepted — this code exists to make the defence's shape unforgettable: the verifier never travels, only its SHA-256 challenge does, and redemption requires presenting the original secret. It is the reset-token pattern from Level 8 wearing protocol clothes, and seeing that sameness is the lesson's real payload.",
    output: "Expected output: two different-looking 43-character strings, 'IdP check passes: True' for the genuine verifier, and False for a guessed one — that False is the entire security claim: a stolen code alone is worthless. If the guessed-verifier check ever passes in your copy, the challenge comparison is broken (or 'plain' method crept in, where verifier equals challenge and interception wins again). The verifier's length is also a result to verify: under 43 characters fails the RFC's entropy floor.",
    job: "OAuth/OIDC review is core identity and API-security work; PKCE presence (and S256-only configuration) is a checklist item in every modern IdP assessment and mobile-app review, now mandatory practice under the current OAuth security BCP (RFC 9700, cited in this lesson's references).",
    wrong: "Common mistake: sending the verifier in the authorize request 'so the server has it early', or logging it. Symptom: the secret now exists in URLs, logs and browser history — the exact exposure PKCE was designed to avoid. Fix: only the challenge rides the front channel; the verifier is posted once, directly to the token endpoint, as the code separates them.",
  },
  "l11-saml-sso": {
    why: "SAML failures in the real world are usually skipped checks, not broken cryptography — so this validator exists to make the checklist executable: issuer, audience, and validity window, each compared against what THIS service provider expects. The audience check deserves its starring role: a perfectly signed assertion issued for a different application must still be refused here, which is BOLA's logic at the identity layer.",
    output: "Expected output on the sample: the verdict names the missing Signature element (the teaching sample is unsigned, and a real SP must reject it for exactly that reason), and the wrong-audience run adds the audience mismatch. Read a 'checks passed' verdict with suspicion whenever it appears without the signature step — the code deliberately delegates signature verification to a maintained library and says so; a validator that quietly skips it is the dangerous result, in this exercise and in production code you review.",
    job: "Enterprise SSO integration and review is specialist identity work; IdP/SP misconfiguration findings (audience, expiry, unsigned assertions accepted) are recurring, high-impact assessment results.",
    wrong: "Common mistake: hand-rolling XML signature verification to 'keep dependencies low'. Symptom: a verifier that passes the happy path and misses wrapping attacks — SAML's historical wound. Fix: verify signatures with a maintained SAML library against the metadata certificate, as the code's own comment instructs; knowing what not to hand-roll is senior judgment.",
  },
  "l11-rbac-abac": {
    why: "This engine exists to make the two-layer authorization design executable instead of diagrammatic: RBAC first (does any role grant this kind of action at all?), ABAC second (this specific object, department and device — allowed here and now?). Deny-by-default is one line and is labelled in the code as the most important line, because every False in the expected output is a NEVER from the Level 6 access design turned into a testable fact.",
    output: "Expected output: True, False, False, False, True — read each False by its layer: cross-department ticket read is ABAC refusing; support attempting a refund is RBAC refusing (no grant exists); billing refunding from an unmanaged device is ABAC refusing; the same refund from a managed device is the single money-moving True. If admin could refund, separation of duties broke — the ROLE_GRANTS table deliberately withholds it, so a True there is the regression to hunt.",
    job: "Authorization-model design and testing is the substance of identity engineering and of A01/BOLA assessment work; this RBAC+ABAC layering, with deny-by-default, is the reference shape reviewers measure real policy code against.",
    wrong: "Common mistake: adding a wildcard grant ('admin': everything) to make a demo pass. Symptom: the engine returns True everywhere and every NEVER statement in the design becomes unenforceable. Fix: grants stay explicit per (resource, action) pair; if a test needs a new permission, add the pair deliberately and let the diff be reviewed.",
  },
  "l11-privilege-escalation-defense": {
    why: "Privilege escalation needs a ladder, and this audit exists to list every ladder leaning against YOUR Linux VM before someone else inventories them for you: sudo grants that might spawn a shell, SUID files beyond the distribution's boring baseline, group memberships with quiet power (docker, disk), world-writable files in privileged paths, and root cron jobs whose scripts others can edit. It is read-only on purpose — the defensive skill is the inventory and the pairing of each writable file with whoever executes it.",
    output: "Healthy output is short and boring: a sudo grant you can justify in one sentence, the distro's known SUID set, no surprise groups, and empty writable/cron findings. Every unexpected line becomes a fix-or-accept entry in your notes — a custom SUID binary or a root cron script writable by your user is a complete ladder, and those are the suspicious results to run down first. If sudo -l asks for a password interactively, run it interactively; a skipped section is 'unknown', not 'clean'.",
    job: "Escalation-path review is a standard hardening and internal-assessment task on both sides of the fence: defenders close these ladders, assessors report them, and both read the same five lists this script prints.",
    wrong: "Common mistake: trying to 'test' a ladder by actually exploiting it on a machine you administer but do not exclusively own. Symptom: you have crossed from audit into unauthorised use, and possibly broken a production path. Fix: this script lists, it climbs nothing — removal of a ladder happens separately, safely, with visudo/package tools and a snapshot, as the code lines direct.",
  },
  "l11-session-recovery": {
    why: "A session manager is where the account-takeover defences from the whole level become code: random server-side tokens, TWO clocks (idle and absolute — refreshing one must never refresh the other), rotation as delete-plus-create at login, and purge_user for the moment a password reset must evict everyone, including an attacker. The injected clock exists so every timeout is testable in milliseconds — the same testability habit as the login guard.",
    output: "Expected output reads as a story: fresh session valid; idle-expired at 31 minutes; absolute-expired at 12h+1s even though the pattern implies activity; after rotation the OLD token returns None while the new one works; after purge, even the new token is None. The result that would condemn a real implementation: old token still valid after rotation (fixation window left open), or the purged user still holding a live session after a reset — either means the eviction the user was promised did not happen.",
    job: "Session lifecycle review is a fixed part of authentication assessments (pattern vp-session in the library), and purge-on-reset is the control that decides whether a compromise actually ends when the password changes.",
    wrong: "Common mistake: 'rotating' by issuing a new token while leaving the old one valid briefly 'for a smooth transition'. Symptom: a stolen or fixated old token keeps working — the rotation changed nothing an attacker cares about. Fix: rotation is delete + create in one step, exactly as written; smoothness is a UX problem, validity overlap is a security hole.",
  },
  "l4-py-first": {
    why: "This is the smallest complete program in the course — deliberately. Before any security idea can be trusted to code, you must be able to predict what a program does line by line, and this file exists so your first prediction is about a greeter, not a parser.",
    output: "The output lines appear in exact file order: greeting, count, the f-string sentence, then the two type names. If your run prints them in a different order, you are not running this file. If the last line says <class 'int'> <class 'str'>, the two boxes were swapped — the types are the evidence of which value sits where.",
    job: "Every security tool you will ever open is built from these atoms: stored values, ordered steps, printed results. Portfolios are judged on whether the small programs are exactly understood, not merely present.",
    wrong: "Common mistake: dropping the quotes around Nadia. Symptom: NameError: name 'Nadia' is not defined — Python went looking for a variable by that name. Fix: quotes make text; no quotes means 'look in a box'.",
  },
  "l4-py-conditions": {
    why: "This judge() exists to isolate the single skill every alert rule needs: choosing exactly one verdict from several facts, in the right order of seriousness. It is the log parser's brain, practised alone before the parser adds files and loops around it.",
    output: "Five calls, five different verdicts — one per branch, which is the proof the chain is ordered correctly. If two calls print the same verdict, or the locked case prints anything but BLOCKED, a general branch is sitting above a specific one and swallowing it. Next action: reorder, most specific first, and re-run the same five calls.",
    job: "Triage logic is the daily writing of SOC tooling: thresholds, allow-lists, and escalation rules are all if chains, and a swallowed branch in production is an alert that never fires.",
    wrong: "Common mistake: writing the broad WARN test above the ALERT test. Symptom: ALERT never prints, even for textbook guessing patterns. Fix: order branches by specificity — locked, then alert, then warn, then note, then OK.",
  },
  "l4-py-files": {
    why: "This round trip exists because every later evidence tool is 'read a file safely, count something, report it'. The write half makes the lesson self-contained; the read half is the exact streaming loop the log parser, the pcap notes, and the integrity checker all reuse.",
    output: "Three FAILURE lines and 'Total failures: 3'. If your total is 4, you counted the header or a line you added; if it is 0 with no error, the file was read from a different folder than it was written to (run location matters) — check where mini_auth.log actually is. A blank line between failures means strip() was skipped somewhere.",
    job: "Log handling is the most common first task given to junior analysts, and the streaming pattern is the professional default: auditors and courts both care that originals are read, never rewritten.",
    wrong: "Common mistake: opening the log with mode 'w' while intending to read it. Symptom: the file is instantly emptied — evidence destroyed by your own tool. Fix: read mode is the default; say 'w' only for files you own and intend to replace, like reports.",
  },
  "l4-c-pointers": {
    why: "This tiny program exists to make one invisible thing visible: that *p and attempts are two names for the same box. Every C memory bug in Levels 8 and 21 is this program plus a mistake, so the pointer mechanics are proven here, at walking pace, before consequences arrive.",
    output: "Three lines: 41, 41, then 'attempts is: 42'. The third line is the whole lesson — a write through the pointer changed the original variable. If your third line still says 41, the write went to a copy or the pointer holds a different box's address. The address value itself is intentionally not printed: it legitimately differs on every machine and run.",
    job: "Reading C and C++ code in vulnerability research, driver work, and malware triage requires exactly this fluency; interviewers for systems-security roles test pointer tracing with programs of precisely this size.",
    wrong: "Common mistake: declaring int *p and dereferencing it before assigning an address. Symptom: a crash or, worse, silent corruption — the paper was blank. Fix: always initialise a pointer with a real variable's address, and re-check the postbox story whenever a line confuses you.",
  },
};

/* ---- Point 6: safe-target line, chosen by the code's language/kind ---- */
export function safeTargetLine(lang: string, bn: boolean): string {
  const l = lang.toLowerCase();
  if (bn) {
    if (l === "text") return "নিরাপদ লক্ষ্য: এটি একটি লেখা worked example — কোনো আসল system-এ কিছু চালানো হচ্ছে না। এর আকারটা নিজের lab note/report-এ ব্যবহার করো।";
    if (l.includes("powershell")) return "নিরাপদ লক্ষ্য: শুধু নিজের Windows PC বা নিজে পরিচালনা করো এমন machine-এ চালাও। এগুলো read-only — তবু অন্যের machine-এ কখনো নয়।";
    if (l.includes("bash")) return "নিরাপদ লক্ষ্য: শুধু নিজের PC, নিজের VM বা নিজের lab network-এ চালাও (localhost / host-only ঠিকানা)। আসল site, server বা অন্যের machine কখনো লক্ষ্য নয়।";
    return "নিরাপদ লক্ষ্য: শুধু নিজের machine, নিজের VM বা নিজের localhost training app-এ চালাও। আসল site, আসল account বা অন্যের system-এ কখনো নয়।";
  }
  if (l === "text") return "Safe target: this is a written worked example — nothing here runs against a real system. Reuse its shape in your own lab notes and reports.";
  if (l.includes("powershell")) return "Safe target: run this only on your own Windows PC or a machine you administer. These commands are read-only — still, never on someone else's machine.";
  if (l.includes("bash")) return "Safe target: run this only on your own PC, your own VM, or your own lab network (localhost / host-only addresses). Never a real site, server, or someone else's machine.";
  return "Safe target: run this only on your own machine, your own VM, or your own localhost training app. Never a real site, a real account, or anyone else's system.";
}

/* ---- Why boxes for the 14 Interactive Labs (the lab's method, in plain
   words) and the 11 CTF artifacts (why reading this evidence is the skill).
   Labs/missions/CTF tasks are question-driven; these boxes cover their
   setup/evidence steps the same way lesson panels cover code. ---- */
export type LabWhy = { why: string; read: string };
export const LAB_WHY: Record<string, LabWhy> = {
  "lab-risk": { why: "Classification drills exist because 'everything is risky' helps nobody decide anything — forcing each scenario into one CIA leg is what turns a worry into a control you can buy, build, or schedule.", read: "A scenario is read correctly when the leg you chose predicts the control: copies and backups answer Availability, encryption answers Confidentiality, individual accounts answer Integrity/accountability. If your control does not match your leg, one of the two is wrong." },
  "lab-inspect": { why: "A profile-reading lab exists because assessors rarely start with a live machine — they start with exactly this: a page of facts that must be ranked before anyone touches a setting.", read: "Facts first (GPT → UEFI), then weaknesses ranked by exploitability: the passwordless admin account outranks patch age, which outranks everything cosmetic. Old is not a finding; exposed is." },
  "lab-perms": { why: "This lab isolates the single most reusable audit reflex in the course: read the last three characters of a mode before anything else, because 'others can write' on a file that matters is a critical finding wherever it appears.", read: "In the listing, 600 on the private key is the CORRECT line — learn to pass over correct lines quickly so the 666 config stands out. Every audit is mostly this: many fine lines, one dangerous one." },
  "lab-dns": { why: "DNS answers are evidence that expires (TTLs), so this lab trains reading record type, content shape and TTL together — the same triple a SOC analyst uses before calling anything tunneling.", read: "A record is suspicious when its content does not match its job: short structured text is SPF doing its job; a long encoded string is data using TXT as a channel. Judge the shape, not the record type alone." },
  "lab-pcap": { why: "A capture is a story told in packet order; this lab exists so the resolve → connect → encrypt → exchange order becomes automatic before Level 18 asks you to prove timelines from captures.", read: "The handshake completing (SYN, SYN-ACK, ACK) is the normal result; the analytical boundary to state out loud is that TLS hides content, not metadata — who, when and how much remain visible and are legitimate evidence." },
  "lab-linux-logs": { why: "This is the terminal exercises' log, judged as an analyst instead of searched as a typist — because the SOC skill is the verdict (attempt vs success, external vs the user's own LAN), not the grep.", read: "41 failures with no success from that source reads as a blocked attempt; the later success from the office LAN at working hours reads as the user until the user says otherwise. Source + time + human confirmation — all three, every time." },
  "lab-headers": { why: "Header review is graded as a set because attackers need only one gap: this lab makes you grade transport, framing, content policy, sniffing and cookie flags together and leave with a fix list an engineer can finish in one sitting.", read: "One present header (nosniff) does not soften four absent ones. Read the cookie line last and hardest: a session cookie with no flags at all is the finding everything else supports." },
  "lab-sqli": { why: "This lab runs the full professional loop on the Level 8 mechanism — prove it on the local training app, fix it with parameters, then lock the fix with a regression test — because any one of those alone is an incomplete job.", read: "The result to trust is behavioural: after the fix the same payload is looked up as a literal username and matches nothing. If it still logs in, the parameter binding is not actually in the code path you tested." },
  "lab-xss-csp": { why: "XSS is proven, not argued: this lab makes the payload fire in your own demo first, so the encoding fix and the CSP judgment that follow are measured against an attack you personally observed.", read: "After encoding, the payload must appear as visible text; after CSP, an injected inline script must be blocked AND reported. Treat CSP as the second fence — if the encoding is missing, the finding stands even when CSP catches the demo payload." },
  "lab-firewall-review": { why: "Rulesets fail as documents before they fail as technology — order, scope and logging decide what a rule actually does — so this lab grades a ruleset the way an auditor reads it, then asks for the corrected set.", read: "Read rules top-down, first match wins. A broad ALLOW above a specific DENY silently erases it; a ruleset with no logging line cannot prove what it blocked. Your corrected set must state its default before its exceptions." },
  "lab-hardening-audit": { why: "Two baselines (Windows and Linux) arrive as reports because hardening judgment is comparative: the same weakness classes — stale admins, silent logging, obsolete protocols — must be recognised in two dialects and ranked in one list.", read: "Rank by blast radius, not by order in the report: identity exposure first, then missing audit evidence, then protocol hygiene. A finding you cannot tie to a lesson's 'want' value is not ready to report." },
  "lab-identity-review": { why: "Identity flaws hide in flows, not single settings — this lab walks a lab identity app end to end (login, session, recovery) because that is where the Level 11 weaknesses chain together.", read: "Judge each step by its Level 11 rule: tokens random and hashed, sessions rotated at login, recovery single-use and expiring, logout that purges server-side. A step that 'works' while breaking its rule is the finding." },
  "lab-android-manifest": { why: "The manifest is the one artefact that declares an app's whole surface, so this lab repeats the Level 16 read at finding-writing depth: every permission and exported component must answer to a feature.", read: "A finding needs three parts — the line, the feature it fails to map to, and the fix. MobSF can flag the lines; only the feature mapping separates a report from scanner noise." },
  "lab-cloud-config": { why: "Cloud misconfiguration is ranked by blast radius because everything is one setting from the internet; this lab trains that ranking on a safe simulated console before it ever matters on a real account.", read: "Public exposure first, standing privilege second, missing logs third — because without logs you cannot even scope the first two after an incident. Simulated console only: no real cloud account is needed or used." },
};
export const CTF_WHY: Record<string, string> = {
  "ctf-headers": "Why this artifact: a response's headers and cookie line are the complete evidence for this finding class — an assessor never needs the app's source to grade it. Read the Set-Cookie line first; the missing flags ARE the flag's subject.",
  "ctf-perms": "Why this artifact: one ls -l line is the whole case. Mode 666 on a secrets file is provable from the listing alone — that is why permission audits start with listings, not with questions.",
  "ctf-dns": "Why this artifact: the record set is the evidence and the judgment is comparative — three records match their jobs, one carries data it should not. That shape-matching is the tunneling-detection skill.",
  "ctf-logs": "Why this artifact: classification plus a timestamp is what turns log lines into an incident record. The dataset, not the summary, is authoritative — read the times off the evidence itself.",
  "ctf-jwt": "Why this artifact: the token header and the server's 200 response together prove the verifier's behaviour. No payload is needed — the correct server behaviour toward 'none' is the whole question.",
  "ctf-idor": "Why this artifact: one request and one response (a non-owner receiving 200 on object 1042) is the complete BOLA proof. Naming the class precisely is what separates a finding from a feeling.",
  "ctf-hash": "Why this artifact: the tool's verdict line is the deliverable of the integrity workflow — publisher hash, your hash, one word of outcome. The flag is that workflow's successful sentence, expanded.",
  "ctf-phish": "Why this artifact: two domains side by side are the whole detection surface a user ever gets. The skill is glance-proof reading — comparing character by character, not recognising the 'look'.",
  "ctf-xss": "Why this artifact: the challenge is naming exactly what a strict CSP blocks — precision about a defence's scope is what lets you judge where it helps and where encoding is still owed.",
  "ctf-segments": "Why this artifact: segmentation is a policy outcome, not a product — the flag names the default posture that makes the described network behave as it does.",
  "ctf-pkce": "Why this artifact: the scenario isolates the one question PKCE answers — why a stolen code is worthless without the verifier. Naming the mechanism is the proof you understood the flow, not just the acronym.",
};

// Lab job relevance + common wrong approach (rendered inside LabWhyBox,
// alongside LAB_WHY's why/read and the safe-target line).
export const LAB_JOB: Record<string, string> = {
  "lab-risk": "Risk classification is the first written product of any security assessment; consultants and analysts produce exactly this table before recommending spend.",
  "lab-inspect": "Assessors and IT auditors start engagements from exactly such a fact sheet; ranking before touching anything is the professional habit clients pay for.",
  "lab-perms": "Permission audit is a fixed step in Linux hardening, pentest review, and compliance checks (CIS benchmarks test these exact modes).",
  "lab-dns": "SOC analysts triage DNS daily; TXT-record abuse and tunneling checks are standard detection work.",
  "lab-pcap": "Packet reading underpins SOC triage, network forensics and incident response — the same capture discipline, everywhere.",
  "lab-linux-logs": "This is the SOC analyst's core verdict work: separating attack attempts from compromises in authentication logs, every shift.",
  "lab-headers": "Header grading appears in every web security assessment report; the fix list is the deliverable engineers actually work from.",
  "lab-sqli": "Prove it → fix it → regression-test it is the exact loop AppSec engineers run with developers; it is also Project A's graded shape.",
  "lab-xss-csp": "XSS verification and CSP evaluation are standard web pentest work; CSP report analysis is also a defender's monitoring task.",
  "lab-firewall-review": "Firewall rulebase review is a named audit service; auditors read rulesets exactly this way — order, scope, logging, default.",
  "lab-hardening-audit": "Baseline audits against CIS-style benchmarks are recurring sysadmin and auditor work across both operating systems.",
  "lab-identity-review": "Identity flow review is part of every authentication assessment; chaining small flaws into account takeover is the assessor's core skill.",
  "lab-android-manifest": "Manifest review is a fixed step in mobile app assessments and in MobSF-based triage before deeper testing.",
  "lab-cloud-config": "Cloud configuration review (CSPM work) is a growing specialty; ranking by public exposure is how real cloud findings are prioritised.",
};

export const LAB_WRONG: Record<string, string> = {
  "lab-risk": "Common mistake: rating everything 'high'. Symptom: the list cannot be prioritised, so nothing gets fixed first. Fix: force a ranking — one top item per category.",
  "lab-inspect": "Common mistake: treating 'old' as 'vulnerable'. Symptom: effort spent on cosmetic age while the passwordless admin account stays. Fix: rank by exposure and exploitability, not age.",
  "lab-perms": "Common mistake: reading only the owner's triplet. Symptom: the dangerous 'others' column is missed. Fix: read the mode right-to-left — others first.",
  "lab-dns": "Common mistake: calling every TXT record malicious. Symptom: SPF/DKIM false alarms. Fix: judge content shape and length against the record's job.",
  "lab-pcap": "Common mistake: claiming what was inside TLS traffic. Symptom: a report that overstates the evidence. Fix: state the metadata you can prove; the content stays unknown.",
  "lab-linux-logs": "Common mistake: escalating on failure count alone. Symptom: blocked attempts paged as breaches. Fix: always pair failures with the success check and the source.",
  "lab-headers": "Common mistake: grading headers present/absent only. Symptom: a present-but-weak CSP passes. Fix: read the value, not just the name.",
  "lab-sqli": "Common mistake: testing the fix with a new payload only. Symptom: the original exploit still works. Fix: re-run the identical payload that succeeded before.",
  "lab-xss-csp": "Common mistake: treating CSP as the fix. Symptom: encoding never added, and the next context bypasses the policy. Fix: encode first, CSP second.",
  "lab-firewall-review": "Common mistake: reading rules bottom-up. Symptom: shadowed DENY rules look effective. Fix: top-down — first match wins.",
  "lab-hardening-audit": "Common mistake: reporting findings in document order. Symptom: identity exposure buried under cosmetic items. Fix: rank by blast radius.",
  "lab-identity-review": "Common mistake: judging each screen in isolation. Symptom: a 'working' recovery flow quietly bypasses MFA. Fix: walk the whole flow as one story.",
  "lab-android-manifest": "Common mistake: flagging every permission as a finding. Symptom: scanner noise nobody acts on. Fix: a permission is a finding only when no feature explains it.",
  "lab-cloud-config": "Common mistake: starting with cosmetic settings. Symptom: the public bucket is found last. Fix: exposure first, privilege second, logging third.",
};

/* ---- FULL six-part why for every CTF artifact and every lab code surface.
   Same six questions the lesson WhyCodePanel answers — no single-line why
   anywhere:
     1 why this artifact/evidence exists   → why
     2 part-by-part breakdown              → parts (each piece, plain words)
     3 why this output/evidence appeared   → output (and the different case)
     4 what it means / what you learn      → meaning (+ the next action)
     5 job relevance                       → job
     6 wrong attempt: symptom + fix        → wrong
   …plus the safe-target reminder, rendered by the panel itself.
   Bangla mirror: why-code-bn.ts (CTF_WHY6_BN / LAB_WHY6_BN). ---- */
export type SixWhy = { why: string; parts: string[]; output: string; meaning: string; job: string; wrong: string };

export const CTF_WHY6: Record<string, SixWhy> = {
  "ctf-headers": {
    why: "This challenge exists because a response's headers and cookie line are the COMPLETE evidence for this finding class — an assessor never needs the app's source code to grade it. The skill it tests is reading a response the way an attacker reads it. Without it, 'the login page looks fine' would stay your whole assessment; with it, you can turn one response into a professional fix list.",
    parts: [
      "Set-Cookie: session=abc123; Path=/ — a session cookie carrying only a path: no HttpOnly (page script can read it), no Secure (it may travel over plain HTTP), no SameSite (it rides along on cross-site requests).",
      "No Content-Security-Policy line at all — nothing restricts where scripts and styles may load from, so a single injection has no second fence.",
      "No Strict-Transport-Security — the browser is never told to insist on HTTPS, so a first visit over HTTP can be intercepted.",
      "No X-Content-Type-Options — the browser is free to MIME-sniff a response into a type the server never intended.",
      "The flag format CLAB{missing_______found} — the blanks ask for the one word naming what this whole response is missing.",
    ],
    output: "This evidence appears because the artifact IS a real response shape, not a description of one: if any protection were present it would be visible in these lines, so its absence is the result itself. A different result — the same cookie sent with HttpOnly; Secure; SameSite=Lax, plus HSTS and CSP lines — would read as a hardened response, and this challenge would have no finding left to name.",
    meaning: "It proves the session is exposed three ways at once — theft by script, theft on the network, and cross-site riding — and that the app ships with no browser-side fences at all. What you learn: a header block is a checklist you can grade in under a minute. Next action: write the fix list — cookie flags first, then HSTS, CSP and nosniff — exactly the Security Headers lab deliverable.",
    job: "Header review is first-five-minutes work in every web engagement: pentesters and AppSec engineers run curl -I, grade exactly this set, and hand over exactly this fix list as a standard deliverable.",
    wrong: "Common wrong attempt: naming only one missing header (for example submitting the flag with just 'csp'), or guessing a word the lesson never used. Symptom: the flag is rejected even though you spotted a real gap. Fix: re-read the artifact line by line, count EVERY absent protection, and use the phrase the Security Headers lesson uses for that complete absence.",
  },
  "ctf-perms": {
    why: "This challenge exists because one ls -l line can be an entire case: a secrets file at mode 666 is provable from the listing alone, with no questions to anyone. The skill it tests is reading permission modes at sight — the reflex every later audit in this course assumes. Without it you would know the rule 'secrets should be 600' but never have caught the violation in the wild.",
    parts: [
      "-rw-rw-rw- — three triplets: owner rw-, group rw-, OTHERS rw-. Read it right to left: the last triplet is the finding.",
      "1 app app — the file is owned by user and group 'app'. Ownership is fine here; the mode is what is broken.",
      "212 secret.conf — 212 bytes, and the name says what it holds: secrets. The content class is what turns a loose mode into a critical finding.",
      "The flag format 'world ___ secrets' — the gap takes the adjective form of 'write', naming the exact condition.",
    ],
    output: "This evidence appears because a directory listing is ground truth: the mode either is 666 or it is not, and no interview with an administrator changes it. A different result — the same file at 600 or 640 — would mean owner-only or owner+group access, the file would be correctly set, and there would be no challenge here at all.",
    meaning: "It proves any local account can both READ and ALTER what a service trusts — confidentiality and integrity gone in a single line. What you learn: audit listings others-first, and pass over correct lines quickly so the dangerous one stands out. Next action: chmod 600 (or 640 where a group genuinely needs read) and review ownership.",
    job: "Permission audits are a standing checklist item for sysadmins, a classic pentest finding, and a hardening control — CIS benchmarks test these exact modes, and a world-writable file read by a privileged service is a complete privilege-escalation path.",
    wrong: "Common wrong attempt: grading the healthy line instead — answering as if the private key at 600 were the problem. Symptom: the flag is rejected, because 600 on a key is CORRECT. Fix: hunt for the 'w' in the OTHERS triplet on the file that holds a secret; that line, and only that line, is the case.",
  },
  "ctf-dns": {
    why: "This challenge exists because DNS answers are evidence with a shape: each record type has a job, and data that does not match its record's job is a leak until proven otherwise. The skill it tests is comparative judgment — three records behaving, one misbehaving. Without it, 'TXT records exist' and 'TXT records are exfiltrating' would look identical to you.",
    parts: [
      "A record (normal) — maps the name to an address; short, expected, doing its job.",
      "MX record (normal) — names the mail server; exactly the shape mail routing needs.",
      "TXT 'v=spf1 -all' (normal) — a SHORT, structured text record: SPF declaring this domain sends no mail. This is what legitimate TXT looks like.",
      "TXT with a very long encoded payload (the leak) — bulk encoded data has no mail or verification job; TXT is being used as a data channel.",
      "The flag format CLAB{dns_???_leak} — the middle word is the abused record type, in lower case.",
    ],
    output: "This evidence appears because the record set was captured as-is: the long encoded TXT answer is really there, next to three healthy records that prove the domain's normal pattern. A different result — all four records short and structured — would mean a clean record set and nothing to flag; a long payload under a DIFFERENT record type would change the flag, which is why the type matters.",
    meaning: "It proves DNS is being used as an exfiltration/tunneling channel — the record type built for small text notes is carrying bulk data out. What you learn: judge content shape against the record's job, never the record type alone. Next action: treat the querying host as suspect, preserve the resolver logs (TTLs make DNS evidence perishable), and investigate what generated the queries.",
    job: "SOC analysts read DNS answers and logs daily — tunneling detection, phishing-domain checks, and SPF/DKIM/DMARC reviews all start with exactly this shape-matching.",
    wrong: "Common wrong attempt: naming the A or MX record, or typing the right record type in the wrong case. Symptom: the flag is rejected. Fix: ask which record can carry long free text and which one actually did — that is the TXT record, lower case, as the format shows.",
  },
  "ctf-logs": {
    why: "This challenge exists because classification plus a timestamp is what turns log lines into an incident record. The skill it tests is reading the DATASET you are given — times and counts off the evidence itself — instead of repeating numbers from an earlier summary. Without it, every burst of failures blurs into 'someone tried something, sometime'.",
    parts: [
      "38 × Event 4625 — 4625 is Windows' failed-logon event; thirty-eight of them is a burst, not user clumsiness.",
      "04:12–04:17 — a five-minute window in the small hours: rate and timing together are the pattern.",
      "One external source — all failures from a single outside address concentrates the story on one actor.",
      "The burst is logged as ENDING 04:17 — the flag's HHMM is this recorded end time, read off this artifact.",
      "The flag format CLAB{brute_force_HHMM} — the classification words are given; only the evidence time is yours to supply.",
    ],
    output: "This evidence appears because the full SOC dataset records the burst with its own timestamps — the extract in front of you is the authoritative version. A different result would change the verdict, not just the flag: if a 4624 SUCCESS from the same source followed the failures, the classification escalates from attempt to probable compromise and the response changes completely.",
    meaning: "It proves a blocked brute-force ATTEMPT (no success from that source is recorded) — serious, logged, but not a breach. What you learn: failures alone mean attempt; failures plus a foreign success mean incident. Next action: confirm no success followed, check whether the targeted account is real, and record the classification with its evidence times.",
    job: "This is a SOC analyst's shift work in miniature: 4625-burst triage — classify, timestamp, check for success, escalate or close with reasons — is a standard interview and on-shift task.",
    wrong: "Common wrong attempt: using 0412 (the START time), or importing the '41 failures' figure from the Linux lab's different log. Symptom: the flag is rejected. Fix: the flag takes THIS dataset's recorded END time — re-read the artifact in front of you, not your memory of a similar one.",
  },
  "ctf-jwt": {
    why: "This challenge exists because a JWT is only as strong as its verification: a server that honors alg 'none' has no authentication at all, whatever the login page looks like. The skill it tests is reading a token header and a server response TOGETHER as one proof. Without it, you might audit the signature field and miss that the server never checks it.",
    parts: [
      "{\"alg\":\"none\",\"typ\":\"JWT\"} — the header itself declares 'no algorithm': the token announces it is unsigned.",
      "Signature: (empty) — there is nothing to verify; anyone can mint this token with any claims inside.",
      "Server response: 200 OK — the damning piece: the server ACCEPTED the unsigned token. The bug is the verifier's behaviour, not the token's existence.",
      "The fix phrase 'alg none ___' — the gap takes the past-tense verb for what a CORRECT server does to such tokens.",
    ],
    output: "This evidence appears because the review captured the verifier in the act: a 200 for an unsigned token can only happen if the server skips signature checking or trusts the token's own alg claim. A different result — 401 Unauthorized for the same token — would prove the verifier pins its algorithm and rejects 'none', and there would be no finding to report.",
    meaning: "It proves complete authentication bypass: an attacker who can type JSON owns any account the API serves. What you learn: never trust the token's own header — the server must pin allowed algorithms and always verify. Next action: fix the verifier, then add a regression test that submits a 'none' token and demands rejection.",
    job: "Algorithm-confusion and missing-verification checks are routine in API and web assessments; JWT review is a standard AppSec task, and this exact failure has caused real breaches.",
    wrong: "Common wrong attempt: writing what the VULNERABLE server did ('accepted'), or the present tense 'reject'. Symptom: the flag is rejected. Fix: the flag states the correct behaviour as a completed fact — a correct server has already done it: rejected.",
  },
  "ctf-idor": {
    why: "This challenge exists because Broken Object Level Authorization is the most common serious web/API flaw, and its complete proof fits in one request and one response. The skill it tests is naming the class PRECISELY — BOLA, not a vague 'access problem' — because the precise name is what routes the fix. Without it, findings stay feelings that developers cannot act on.",
    parts: [
      "GET /api/invoices/1042 — a direct request for one numbered object; sequential IDs make every other object one guess away.",
      "'as a non-owner' — the requester was authenticated (logged in) but had no right to THIS object. That gap is the whole lesson.",
      "returned 200 — the server served another user's invoice instead of refusing. 200 is the evidence; a 404 or 403 would be the control working.",
      "The flag format CLAB{bola_object_NNNN} — NNNN is this artifact's own invoice number, 1042.",
    ],
    output: "This evidence appears because one cross-account request was actually made and its response recorded: a non-owner receiving 200 on object 1042 cannot happen if a per-object ownership check runs. A different result — 404 for the same request — would mean the check exists (404 is preferred over 403 precisely because it does not confirm the object exists).",
    meaning: "It proves authentication was present but authorization was absent: any logged-in user can read every invoice by counting. What you learn: authorize every object, server-side, on every request. Next action: add the ownership check (object.owner == caller, else 404) and a two-account regression test.",
    job: "BOLA/IDOR is OWASP API1:2023 and the daily bread of AppSec — code review, pentest findings, and developer coaching all reduce to this one check, and naming it precisely is what separates a finding from a feeling.",
    wrong: "Common wrong attempt: writing the older label 'idor' into the flag, or a different object number remembered from an example. Symptom: the flag is rejected. Fix: use OWASP's current class name — BOLA — and the invoice number printed in THIS artifact: 1042.",
  },
  "ctf-hash": {
    why: "This challenge exists because 'verify the checksum' only protects you if it becomes a physical habit with a verdict you act on. The skill it tests is the integrity workflow end to end — publisher hash, your hash, one word of outcome. Without it, a tampered download and a genuine one are indistinguishable to you, and both get run.",
    parts: [
      "The publisher's SHA-256 — the expected value, valuable only because it travelled a trusted channel (the official source), not the same page as the download.",
      "Your computed hash — the same algorithm over the file you actually received, byte for byte.",
      "Output line 2 reads 'MATCH' — the tool's verdict that the two digests are identical.",
      "The flag format CLAB{sha256_match_????????} — the last word completes the sentence 'the sha256 match was ______' (confirmed), in past tense.",
    ],
    output: "This output appears because SHA-256 is deterministic: identical bytes always produce the identical digest, so MATCH can only print when the file is bit-for-bit what was published. A different result — MISMATCH — would mean the bytes differ (corruption or tampering) and the instruction is absolute: do not trust or run that file; re-download from the official source.",
    meaning: "It proves THIS download's integrity — nothing more and nothing less: a hash cannot prove the publisher is honest, only that what you hold is what was published. What you learn: note where the expected hash came from; a hash proves integrity only when the expected value travelled a trusted channel. Next action after MATCH: proceed; after MISMATCH: stop and re-acquire.",
    job: "Release verification, forensic imaging, and software-supply-chain checks all run on this exact loop — and SOC analysts hash suspicious attachments the same way to compare them against threat intel.",
    wrong: "Common wrong attempt: pasting the digest itself into the flag, or a synonym like 'confirmed'/'matched'. Symptom: the flag is rejected. Fix: the sentence in the artifact defines the word — 'the sha256 match was ___' takes the past-tense word meaning checked-and-confirmed: verified.",
  },
  "ctf-phish": {
    why: "This challenge exists because two domains side by side are the entire detection surface a user ever gets — there is no other moment where the lookalike can be caught before credentials are typed. The skill it tests is glance-proof reading: character-by-character comparison instead of recognising a familiar 'look'. Without it, every well-made lookalike passes you.",
    parts: [
      "Real portal: hr-portal.example — the genuine domain staff know: 'hr', hyphen, 'portal'.",
      "Phishing link: hrm-portal-login.example — an EXTRA 'm' after 'hr' and a '-login' suffix: two small edits that survive a glance and fail a comparison.",
      "'Registered days before the campaign' — a fresh domain with no history is itself a signal; legitimate portals are old.",
      "The flag format CLAB{lookalike_domain_????????} — the last word is the past tense of 'spot': the detection act itself.",
    ],
    output: "This evidence appears because the two domains were placed side by side — the difference is invisible in a busy inbox and obvious in a comparison, which is exactly the attacker's bet. A different result — the link matching the real domain exactly — would mean no lookalike at all (you would then judge the message on other signals instead).",
    meaning: "It proves the lookalike-domain technique: register a near-twin, harvest credentials from glance-readers. What you learn: enter portals via bookmarks or the SSO page, never via message links, and report fast — one report protects everyone. Next action: block the domain at the gateways, search all inboxes for the message, reset the credentials of anyone who typed theirs, and report the domain for takedown.",
    job: "Phishing triage is core SOC and helpdesk work: the first analyst to compare the domain character-by-character and launch the containment set (block, hunt, reset, report) is doing precisely this challenge, for real.",
    wrong: "Common wrong attempt: describing the domain with generic words ('fake', 'phishing') instead of the flag's word. Symptom: the flag is rejected. Fix: the artifact tells you the verb — the mission's skill is that you SPOTTED the lookalike; past tense completes the flag.",
  },
  "ctf-xss": {
    why: "This challenge exists because defenders constantly over-claim for CSP: 'we added a policy' is not the same as knowing exactly what the policy stops. The skill it tests is precision about a defence's scope — what a strict CSP blocks, and what it leaves still owed. Without it, you would sign off an XSS finding as 'fixed' while the reflection flaw sits untouched.",
    parts: [
      "Content-Security-Policy: default-src 'self' — by default, the page may only load resources from its own origin.",
      "with NO unsafe-inline — the load-bearing absence: the policy nowhere permits inline script, so script written directly in the page is refused.",
      "The payload was an inline <script> in the page body — code embedded in the document itself, not loaded from a file.",
      "The flag format CLAB{csp_blocks_??line_script} — the two missing letters complete the word for script written directly in the page.",
    ],
    output: "This evidence appears because the behaviour changed when the policy arrived: the same payload fired on the unprotected route and stopped under default-src 'self' without unsafe-inline — that before/after pair is the proof. A different result — the payload still firing under the policy — would mean unsafe-inline (or an equivalent allowance) is present, and the policy is decorative.",
    meaning: "It proves CSP is a genuine SECOND wall for inline script — and nothing more: the server still reflects input unencoded, so the flaw itself remains filed as a finding. What you learn: encode at output first (the fix), keep CSP second (the fence), and report both facts. Next action: fix the encoding, keep the strict policy, and re-test both routes.",
    job: "XSS verification and CSP evaluation are standard web pentest work, and CSP violation-report analysis is a defender's monitoring task — both demand exactly this precision about scope.",
    wrong: "Common wrong attempt: claiming the flag (or the report) should say XSS is 'fixed' by CSP, or filling the gap with 'external'. Symptom: rejected — the blocked payload was not external, it was written directly in the page. Fix: script embedded in the document itself is INline script; those two letters complete the word.",
  },
  "ctf-segments": {
    why: "This challenge exists because segmentation is a policy outcome, not a product you buy or a diagram you draw: VLANs that may initiate anything to anywhere are decoration. The skill it tests is naming the enforcement principle that turns segments into boundaries. Without it, you would approve network designs that isolate nothing.",
    parts: [
      "Before: segments exist, initiation any→any — the groups are drawn, but any device may open a connection to any other segment. Nothing is enforced.",
      "After: inter-segment policy refuses everything not explicitly allowed — each flow needs a named reason to exist.",
      "'per segment' — the posture is applied segment by segment, not as one global hope.",
      "The flag format CLAB{default_????_segmented} — the missing word is what the policy does to unlisted traffic.",
    ],
    output: "This evidence appears because the described network's BEHAVIOUR changed: under the rebuilt policy an unlisted IoT→server connection is refused, where before it succeeded. A different result — the connection still succeeding after the 'rebuild' — would prove the policy is allow-by-default whatever the document claims, i.e. a diagram, not a boundary.",
    meaning: "It proves the segments are now real boundaries: the default posture, not the exceptions, is the security property. What you learn: when reviewing any segmentation design, ask first what happens to traffic nobody listed. Next action: enumerate the explicit allows each segment genuinely needs — and nothing else.",
    job: "Network defenders and auditors review segmentation exactly this way; default-deny initiation between zones is the baseline control in every network hardening standard.",
    wrong: "Common wrong attempt: filling the gap with a synonym like 'block' or 'closed'. Symptom: the flag is rejected. Fix: the firewall lesson's core stance has a precise name — traffic is DENIED by default: default-deny.",
  },
  "ctf-pkce": {
    why: "This challenge exists because PKCE is widely recited and rarely understood: the whole mechanism answers one question — why is a stolen authorization code worthless? The skill it tests is following the flow (what traveled where, what never traveled). Without it, 'use PKCE' is a checkbox you could not defend in a design review.",
    parts: [
      "/authorize carried code_challenge (S256) — only the HASH of a secret went out in the first request, visible in logs and the browser.",
      "Redemption demanded a second value — the code_verifier, the original secret whose hash was sent earlier.",
      "The log never contained it — the researcher who stole the code from a browser log holds the hash and the code, but not the verifier.",
      "The flag format CLAB{oauth_????_required} — four letters: the proof-key mechanism's acronym.",
    ],
    output: "This evidence appears because redemption FAILED for the thief: the server hashed the presented verifier and compared it with the stored challenge, and the thief has nothing that hashes correctly. A different result — the stolen code redeeming on its own — would mean PKCE was absent (or the verifier leaked too), and the flow falls back to 'whoever holds the code owns the session'.",
    meaning: "It proves code theft is not token theft when the verifier never leaves the client: the code alone is half a key. What you learn: PKCE binds redemption to the device that started the flow — vital for public clients (mobile, SPA) that cannot keep a client secret. Next action in a review: demand code+PKCE with exact redirect URIs and retire implicit flow.",
    job: "OAuth flow review is part of every authentication assessment; explaining PKCE's theft-resistance precisely (RFC 7636, reinforced by RFC 9700) is a standard interview and design-review test.",
    wrong: "Common wrong attempt: answering with 's256' (the hash method) or spelling out the whole phrase. Symptom: the flag is rejected — four letters are asked for. Fix: the mechanism's acronym — Proof Key for Code Exchange — is PKCE.",
  },
};

export const LAB_WHY6: Record<string, SixWhy> = {
  "lab-risk": {
    why: "This lab exists because 'everything is risky' helps nobody decide anything: classification drills turn a worry into a control you can buy, build, or schedule. It tests the first written skill of the whole course — assigning each scenario to exactly one CIA leg and defending the choice. Without it, risk stays a feeling; with it, risk becomes a register row.",
    parts: [
      "Scenario 1 — a shop's only order-book copy on one laptop: one asset, one copy, one failure away from gone.",
      "Scenario 2 — staff sharing one till login: many people, one identity, so no edit can be traced to a person.",
      "Scenario 3 — patient notes on an unencrypted USB stick: readable data that can physically leave the building.",
      "The CIA legs themselves — Confidentiality (who can READ), Integrity (who can CHANGE / be traced), Availability (whether it EXISTS when needed): every answer must name one.",
    ],
    output: "The lab's 'output' is your classification table itself. It reads correctly when the leg you chose PREDICTS the control: copies and backups answer Availability, encryption answers Confidentiality, individual accounts answer Integrity/accountability. A mismatched pair — say, encryption proposed for the single-copy laptop — is the wrong result: it protects against reading, not against loss.",
    meaning: "It proves the same incident can threaten different legs, and the leg — not the tool catalogue — decides the response. What you learn: asset first, leg second, control third, in that order, every time. Next action in real work: write the row (asset, leg, control, owner) exactly as this lab formats it.",
    job: "Risk classification is the first written product of any security assessment; consultants and SOC analysts produce exactly this table before recommending any spend.",
    wrong: "Common wrong approach: rating everything 'high' or naming a product instead of a leg. Symptom: the list cannot be prioritised, so nothing gets fixed first and no control maps to a stated risk. Fix: force one leg per scenario and one top item per category — the leg must predict the control.",
  },
  "lab-inspect": {
    why: "This lab exists because assessors rarely start with a live machine — they start with exactly this: a page of facts that must be ranked before anyone touches a setting. It tests fact-reading before tool-running. Without it, you would chase the loudest detail (an old patch date) instead of the most exploitable one.",
    parts: [
      "Windows 11 Pro 23H2 · 8 GB RAM — the platform facts; neither is a finding by itself.",
      "GPT disk — GPT pairs with UEFI boot; this fact answers the boot-mode question without opening the machine.",
      "Secure Boot: OFF — the boot chain is unverified, whatever the disk layout allows.",
      "TPM: present — the hardware for measured boot and disk encryption exists and is unused.",
      "Last update: 7 months ago · a second account 'Admin' with NO password — the human-shaped holes: stale patches, and an open door with a nameplate.",
    ],
    output: "The lab's output is your ranked findings list. It reads correctly when ranking follows exploitability — the passwordless admin account first, patch age second, cosmetics last. A different-looking profile changes the answer: Secure Boot ON and recent patches would leave the account as the lone finding; 'old' alone never is one.",
    meaning: "It proves a machine can be modern and still be wide open — the weaknesses are configuration and identity, not age. What you learn: facts first (GPT → UEFI), then weaknesses ranked by how an attacker would use them. Next action: fix the account, patch, then enable the boot protections the hardware already supports.",
    job: "Assessors and IT auditors start engagements from exactly such a fact sheet; ranking before touching anything is the professional habit clients pay for, and Level 1's Get-ComputerInfo set produces this profile on a real machine.",
    wrong: "Common wrong approach: treating 'old' as 'vulnerable'. Symptom: effort spent on cosmetic age while the passwordless admin account stays in place. Fix: rank by exposure and exploitability, not by age — exposed beats old, every time.",
  },
  "lab-perms": {
    why: "This lab isolates the single most reusable audit reflex in the course: read the LAST three characters of a mode before anything else, because 'others can write' on a file that matters is a critical finding wherever it appears. It tests listing-reading at sight — the same skill the ctf-perms challenge then examines.",
    parts: [
      "-rw-r--r-- app.py (644) — owner writes, everyone reads: normal for code.",
      "-rw------- id_rsa (600) — owner only: the CORRECT line for a private key; SSH itself refuses looser keys.",
      "-rw-rw-rw- config.ini (666) — everyone can read AND modify a configuration file: the one critical entry.",
      "drwxr-xr-x logs — a directory others may traverse and read; unremarkable here.",
      "-rwxr-xr-x run.sh (755) — executable by all, writable only by owner: standard for scripts.",
    ],
    output: "The lab's output is the one line you circle. It is correct when it is config.ini: in the listing, 600 on the private key is the line to PASS OVER quickly so 666 stands out. A different listing changes the hunt, not the method — every audit is mostly fine lines plus one dangerous one, and the dangerous one is found in the others triplet.",
    meaning: "It proves any local user can change what the service trusts — a configuration integrity failure, not a cosmetic one. What you learn: the fix is precise (640: owner rw, group r, others none), not maximal (never 777). Next action on a real listing: fix the mode, confirm the owner, and re-list to verify.",
    job: "Permission audit is a fixed step in Linux hardening, pentest review, and compliance checks — CIS benchmarks test these exact modes, and the deliverable is this listing with the finding circled.",
    wrong: "Common wrong approach: reading only the owner's triplet, or flagging the 600 key as 'too strict'. Symptom: the dangerous others column is missed entirely. Fix: read every mode right-to-left — others first, then group, then owner.",
  },
  "lab-dns": {
    why: "This lab exists because DNS answers are evidence that EXPIRES (TTLs), so they must be read whole — record type, content shape, and TTL together — before they vanish from caches. It tests the same triple a SOC analyst uses before calling anything tunneling. Without it, you would memorise record types without ever judging one.",
    parts: [
      "A 203.0.113.10 (TTL 300) — the address mapping, cacheable for 300 seconds (TTL is always seconds).",
      "MX mail.labcorp.example — where this domain's mail goes; ordinary routing evidence.",
      "TXT 'v=spf1 -all' — short and structured: SPF declaring the domain sends no mail, so forgeries should be rejected. Legitimate TXT at work.",
      "TXT 'x9f2…(long encoded string)…' — long, encoded, and jobless: bulk data wearing a text record's clothes.",
    ],
    output: "The lab's output is your verdict per record. It reads correctly when content is judged against job: the SPF string passes BECAUSE it is short and structured; the encoded string fails BECAUSE TXT has no legitimate bulk-data job. A different result — the long string turning out to be a published verification token with an owner who can explain it — would downgrade it to 'documented', which is why analysts record answers with time and resolver.",
    meaning: "It proves DNS can be a data channel, not just a directory: the anomalous TXT record is a tunneling/exfiltration indicator. What you learn: shape-matching beats type-matching. Next action in real work: preserve the full answer set, then investigate the host making the queries.",
    job: "SOC analysts triage DNS daily; TXT-record abuse and tunneling checks are standard detection work, and mail-authentication (SPF/DKIM/DMARC) reviews start with these same records.",
    wrong: "Common wrong approach: calling every TXT record malicious. Symptom: SPF/DKIM false alarms that teach everyone to ignore you. Fix: judge content shape and length against the record's stated job — suspicion needs the mismatch, not the type.",
  },
  "lab-pcap": {
    why: "This lab exists because a capture is a story told in packet order, and the order — resolve → connect → encrypt → exchange — must become automatic before Level 18 asks you to prove timelines from captures. It tests reconstruction: saying what happened, in sequence, from seven packets and nothing else.",
    parts: [
      "Packets 1–2 — DNS query for updates.labcorp.example, then the answer 203.0.113.66: the name had to become an address before anything could be sent to it.",
      "Packets 3–5 — SYN, SYN-ACK, ACK toward port 443: the TCP three-way handshake completing, in order.",
      "Packet 6 — TLS ClientHello: encryption negotiated immediately after the channel opens.",
      "Packet 7 — HTTP/2 data: the exchange itself, its content sealed by the TLS negotiated in packet 6.",
    ],
    output: "The lab's output is your reconstructed story, and its correctness is checkable: the handshake completing IS the normal result. The analytical boundary to state out loud is what the capture does NOT show — TLS hides content, not metadata: who talked, when, and how much remain visible and are legitimate evidence. A capture missing packet 5 would tell a different story (a half-open connection) from the same first two packets.",
    meaning: "It proves an ordinary, healthy update session — and proves the LIMIT of packet evidence at the same time. What you learn: read captures as time-ordered stories, and never claim content you cannot see. Next action: this same reading, applied to an incident capture, becomes the Level 18 timeline.",
    job: "Packet reading underpins SOC triage, network forensics, and incident response — the same capture discipline, everywhere, and a standard interview exercise.",
    wrong: "Common wrong approach: claiming what was inside the TLS traffic. Symptom: a report that overstates the evidence and collapses under one question. Fix: state the metadata you can prove; the content stays unknown — say so.",
  },
  "lab-linux-logs": {
    why: "This lab exists because the SOC skill is the VERDICT, not the grep: an analyst judges attempt versus success, external versus the user's own LAN, instead of merely finding lines. It tests the judgment the terminal exercises deliberately do not. Without it, you could search any log and still page a blocked attempt as a breach at 3 a.m.",
    parts: [
      "41 × 'Failed password' from 203.0.113.44, 02:11–02:19 — one external source, a tight overnight burst: the guessing pattern.",
      "Zero 'Accepted' lines from that source — the fact that keeps this an attempt.",
      "One 'Accepted password' from 192.168.1.20 at 09:02 — a success, but from the office LAN, in working hours: a different story wearing similar words.",
      "The investigation command itself — grep 'Failed password' | wc -l, then per-IP counts: count and rank BEFORE concluding.",
    ],
    output: "The lab's output is the verdict, and it has three legs: 41 failures with no success from that source reads as a BLOCKED ATTEMPT; the later LAN success reads as the user, until the user says otherwise. A different result — one 'Accepted' from 203.0.113.44 inside the burst window — flips the verdict to probable compromise and the response to containment. Source + time + human confirmation: all three, every time.",
    meaning: "It proves the difference between an attack happening and an attack succeeding — the most consequential distinction in log work. What you learn: correlation is not a verdict. Next action: verify the success with the user, and only escalate what the evidence supports.",
    job: "This is the SOC analyst's core verdict work: separating attack attempts from compromises in authentication logs, every shift — and it is the narrative twin of the ctf-logs challenge.",
    wrong: "Common wrong approach: escalating on failure count alone. Symptom: blocked attempts get paged as breaches, and real breaches later get ignored. Fix: always pair the failure count with the success check and the source — no verdict from one number.",
  },
  "lab-headers": {
    why: "This lab exists because header review is graded as a SET: an attacker needs only one gap, so transport, framing, content policy, sniffing, and cookie flags must be judged together. It tests deliverable-writing — you leave with a fix list an engineer can finish in one sitting, which is the actual product of the skill.",
    parts: [
      "HTTP/1.1 200 OK · Content-Type: text/html — the response works; everything below is about how safely.",
      "X-Content-Type-Options: nosniff — the ONE protection present: browsers may not MIME-sniff this response into another type.",
      "No CSP, no HSTS, no frame protection — three absent fences: script sources unrestricted, HTTPS never enforced for return visits, clickjacking unaddressed.",
      "Set-Cookie: sid=…; Path=/ with NO flags — no HttpOnly, no Secure, no SameSite: the session cookie is the most dangerous line in the set.",
    ],
    output: "The lab's output is your graded fix list. It reads correctly when one present header does NOT soften four absent ones, and the cookie line is graded last and hardest. A different response changes the list, not the method: with flags on the cookie and HSTS present, the remaining findings shrink to CSP strength — which is then judged by its VALUE, not its presence.",
    meaning: "It proves a working app can still ship an exposed session: function and protection are separate grades. What you learn: grade headers as a set, values included. Next action: hand the engineer the ordered fix list — cookie flags, HSTS, CSP, framing — exactly the deliverable Project A reuses.",
    job: "Header grading appears in every web security assessment report; the fix list is the deliverable engineers actually work from, and curl -I produces this evidence in the first five minutes of an engagement.",
    wrong: "Common wrong approach: grading headers present/absent only. Symptom: a present-but-weak CSP (for example one allowing 'unsafe-inline') passes as a control. Fix: read the value, not just the name — the value IS the control.",
  },
  "lab-sqli": {
    why: "This lab runs the full professional loop on the Level 8 mechanism — prove it on the local training app, fix it with parameters, then lock the fix with a regression test — because any one of those alone is an incomplete job. It tests the loop, not just the payload: a tester who cannot say WHY the fix works cannot say whether it worked.",
    parts: [
      "The vulnerable login — SQL built by string concatenation, so typed input is glued into the query as SYNTAX.",
      "The tautology payload (' OR '1'='1 shape) — input that changes the WHERE clause's logic, returning the table's first row.",
      "The parameterized fix — the driver binds input as DATA: a value to compare, never syntax to obey.",
      "The regression test — automated, in CI: the known payloads must never authenticate, forever, not once by hand.",
      "The authorized environment — OWASP Juice Shop or your own demo app on localhost ONLY; the target is part of the lab's code surface, not a detail.",
    ],
    output: "The lab's output is behavioural: after the fix, the SAME payload is looked up as a literal username and matches nothing — no login, no error, no drama. That sameness is the proof standard: if the original payload still logs in, the parameter binding is not actually in the code path you tested, whatever the code looks like.",
    meaning: "It proves data-became-code was the whole bug, and parameter binding is the whole fix — no blacklist, no escaping ritual. What you learn: verify, fix, and lock, in that order. Next action in real work: the regression test joins the suite permanently; yesterday's fix becomes today's gate.",
    job: "Prove it → fix it → regression-test it is the exact loop AppSec engineers run with developers; it is also Project A's graded shape, and the write-up is the portfolio piece.",
    wrong: "Common wrong approach: testing the fix with a NEW payload only. Symptom: the original exploit still works and nobody notices until an attacker does. Fix: re-run the identical payload that succeeded before — the regression is defined by the original proof.",
  },
  "lab-xss-csp": {
    why: "This lab exists because XSS must be PROVEN, not argued: the payload fires in your own demo first, so the encoding fix and the CSP judgment that follow are measured against an attack you personally observed. It tests the discipline of keeping 'flaw', 'fix', and 'mitigation' as three separate report lines.",
    parts: [
      "/vuln — the route that reflects the name input RAW into the page: markup in, markup parsed.",
      "The script-shaped payload — a name that is really code; on /vuln the browser executes it because the page told it to.",
      "/safe — the identical route with html.escape at output: the same input rendered as inert text.",
      "The CSP header you add last — default-src 'self' with no unsafe-inline: a policy fence judged separately from the fix.",
    ],
    output: "The lab's output is a pair, kept side by side: on /vuln the payload fires; on /safe the identical input appears as VISIBLE TEXT. After CSP is added, an injected inline script must be blocked AND reported — but that third result does not erase the first: if encoding were missing, the finding stands even when CSP catches the demo payload.",
    meaning: "It proves the reflection is the flaw, encoding is the fix, and CSP is the second fence — three facts, three lines. What you learn: never let a mitigation upgrade itself into a fix in your report. Next action: file the flaw with the encoding fix, keep the policy, and re-run both routes as the regression pair.",
    job: "XSS verification and CSP evaluation are standard web pentest work; CSP report analysis is also a defender's monitoring task — both are graded on exactly this separation of flaw, fix, and fence.",
    wrong: "Common wrong approach: treating CSP as the fix. Symptom: encoding is never added, and the next context (an attribute, a different sink) bypasses the policy. Fix: encode first, CSP second — and write both lines in the report.",
  },
  "lab-firewall-review": {
    why: "This lab exists because rulesets fail as DOCUMENTS before they fail as technology — order, scope, expiry, and logging decide what a rule actually does. It tests auditor-reading: grade the set as written, then produce the corrected set. Without it, you would check rules one by one and miss that the set contradicts itself.",
    parts: [
      "Rule 1 — ALLOW any→server 8080 'temp demo, March': a temporary, broad allow still live in November. Temporary rules without removal dates are standing holes.",
      "Rule 2 — ESTABLISHED accept: state handling placed second, where an earlier broad allow can already match reply traffic. Order is logic.",
      "Rules 3–4 — ALLOW mgmt→22 and any→443: the intended services, correctly scoped by source for management, open for the public service.",
      "Rule 5 — policy DROP with NO log rule: the default is right and silent — denied attempts leave no evidence.",
    ],
    output: "The lab's output is two artefacts: the graded findings and your corrected ruleset. It reads correctly when the corrected set states its DEFAULT before its exceptions and carries a logging line before the drop. A different ruleset changes the findings, not the reading order: top-down, first match wins — a broad ALLOW above a specific DENY silently erases the DENY wherever it appears.",
    meaning: "It proves a firewall's security lives in its document discipline: expiry, order, and evidence. What you learn: ask of each rule — what does it permit, for whom, until when, and what records it? Next action: date every temporary rule, move state handling to the top, and log before you drop.",
    job: "Firewall rulebase review is a named audit service; auditors read rulesets exactly this way — order, scope, logging, default — and the corrected set is the deliverable.",
    wrong: "Common wrong approach: reading rules bottom-up. Symptom: shadowed DENY rules look effective on paper while traffic flows past them. Fix: read top-down — first match wins, so evaluate in the firewall's own order.",
  },
  "lab-hardening-audit": {
    why: "This lab exists because hardening judgment is COMPARATIVE: the same weakness classes — stale admins, silent logging, obsolete protocols, live privilege ladders — appear in two dialects (Windows and Linux) and must be recognised in both and ranked in ONE list. It tests ranking by blast radius, which is the skill that turns two reports into one backlog.",
    parts: [
      "Windows facts — SMBv1 Enabled (obsolete protocol debt) · one firewall profile OFF (a live exposure) · logon auditing None (this machine cannot testify) · Defender healthy (the one clean line).",
      "Linux facts — password auth ON (guessing surface) · a sudoers grant to vim (a standing root shell for that account — the most dangerous line in either report) · auditd inactive (the second silent machine) · SSH keys at 644 (readable private keys).",
      "The ranking rule itself — live ladder → live exposure → missing visibility → hygiene debt: the order is part of the evidence.",
    ],
    output: "The lab's output is the single ranked backlog. It reads correctly when the vim sudoers grant sits at the top (a live ladder beats protocol debt) and the two silent-logging facts are paired as one compounding finding. A different pair of reports changes the ranking's contents, never its rule — and a finding you cannot tie to a lesson's target value is not ready to report.",
    meaning: "It proves visibility gaps compound everything else: with auditing off on both machines, even the dangerous lines would leave no evidence after use. What you learn: one backlog, ranked by blast radius, every fix with a verification step. Next action: remove the ladder, restore visibility, then work the debt in order.",
    job: "Baseline audits against CIS-style benchmarks are recurring sysadmin and auditor work across both operating systems, and this combined ranked format is what Project B and real assessments produce.",
    wrong: "Common wrong approach: reporting findings in document order. Symptom: identity exposure ends up buried under cosmetic items and gets scheduled last. Fix: rank by blast radius — the order of your list is the order of the fix queue.",
  },
  "lab-identity-review": {
    why: "This lab exists because identity flaws hide in FLOWS, not single settings: it walks a lab identity app end to end (login, session, recovery) because that is where the Level 11 weaknesses chain together into account takeover. It tests flow-reading — each step judged by its own rule, then the chain judged as one story.",
    parts: [
      "Implicit flow ON (legacy) — tokens delivered through the browser front channel, the pattern OAuth's current guidance retires.",
      "Redirect URI https://app.lab.example/* — a WILDCARD: any path under the host may receive codes and tokens.",
      "Access tokens 24h · refresh tokens never rotate — long-lived, replayable credentials at both layers.",
      "Sessions 90 days, surviving password reset — the deepest hole: recovery does not evict anyone.",
      "MFA: SMS only · two roles, 'admin' able to refund — phishing-weak factors, and no separation of duties on the money action.",
    ],
    output: "The lab's output is a prioritised fix list of at least six findings. It reads correctly when sessions-surviving-reset sits at the top — because that single line defeats the recovery control itself. A different configuration changes the list, never the method: judge each step by its Level 11 rule (tokens random and hashed, sessions rotated at login, recovery single-use and expiring, logout purging server-side); a step that 'works' while breaking its rule IS the finding.",
    meaning: "It proves the chain is the vulnerability: wildcard redirect plus implicit flow composes into token theft, and eternal sessions make every other theft permanent. What you learn: walk the whole flow as one story. Next action: migrate to code+PKCE with exact URIs, rotate refresh tokens, purge sessions at reset, split the refund duty, and strengthen factors — in that risk order.",
    job: "Identity flow review is part of every authentication assessment; chaining small flaws into account takeover is the assessor's core skill, and this fix list is indistinguishable from a junior consultant's first deliverable.",
    wrong: "Common wrong approach: judging each screen in isolation. Symptom: a 'working' recovery flow quietly bypasses MFA and nobody files it. Fix: walk login → session → recovery as one story, and grade the chain, not the screens.",
  },
  "lab-android-manifest": {
    why: "This lab exists because the manifest is the one artifact that declares an app's whole surface, and a finding is only real when a permission or component cannot answer to a feature. It tests finding-writing at depth — line, missing feature, fix — the discipline that separates a report from scanner noise. MobSF can flag the lines; only the feature mapping is the analyst's work.",
    parts: [
      "The app's stated purpose — 'a flashlight with a notes feature': the yardstick every line is measured against.",
      "READ_CONTACTS — a permission with no contacts feature anywhere in that purpose statement.",
      "The exported DataProvider with no permission — any app on the device may query it; exported is a door, and no permission means the door is open.",
      "android:debuggable in the release build — a debug convenience shipped to production.",
      "MobSF's raw flag list — the scanner's output, treated as leads to judge, not findings to copy.",
    ],
    output: "The lab's output is the findings list, and each entry needs three parts to count: the manifest line, the feature it fails to map to, and the fix. A different manifest changes the verdicts line by line — a contacts permission in a contacts app would be design, not a finding — which is precisely why the stated purpose is part of the evidence.",
    meaning: "It proves unexplained access is the finding; explained access is design. What you learn: the release fix for debuggable is structural (a separate debug build type), not a note to testers. Next action: remove or gate each unexplained line (exported=false, or a signature-level permission), rebuild, and re-scan.",
    job: "Manifest review is a fixed step in mobile app assessments and MASVS-aligned reviews, and in MobSF-based triage before any deeper testing — the skeleton of Project E's report.",
    wrong: "Common wrong approach: flagging every permission as a finding. Symptom: a noisy report the developer learns to ignore, with the real findings buried inside it. Fix: a permission is a finding only when no stated feature explains it — map first, flag second.",
  },
  "lab-cloud-config": {
    why: "This lab exists because cloud misconfiguration is ranked by blast radius: in the cloud everything is one setting from the internet, so the ranking discipline must be trained on a safe simulated console before it ever matters on a real account. It tests exposure-first judgment across five innocent-looking settings.",
    parts: [
      "Storage bucket 'reports' = public read ON — the data itself, readable by the entire internet. The highest-risk line.",
      "IAM user with AdministratorAccess used for DAILY work — one phished key owns the account; least privilege inverted.",
      "Access keys last rotated: never — credential age with no bound.",
      "Logging: disabled — if anything above is abused, there will be no audit trail to scope it with.",
      "MFA on root: off — the account's most powerful identity protected by a password alone.",
    ],
    output: "The lab's output is your ranked finding list. It reads correctly with public exposure first, standing privilege second, missing logs third — because without logs you cannot even scope the first two after an incident. A different console changes the items, never the order of the questions: what is public, what is all-powerful, what would we never see?",
    meaning: "It proves cloud risk is compositional: any one setting is a finding, but public data plus a daily admin plus no logs is a breach with no evidence. What you learn: rank by blast radius and fix in that order. Next action: make the bucket private, split admin from daily identities with scoped roles and MFA, enable logging before you need it — simulated console only; no real cloud account is needed or used.",
    job: "Cloud configuration review (CSPM work) is a growing specialty; ranking by public exposure is exactly how real cloud findings are prioritised, and the checklist posture is what Project H designs properly.",
    wrong: "Common wrong approach: starting with cosmetic settings. Symptom: the public bucket is found last, after the meeting has spent its hour elsewhere. Fix: exposure first, privilege second, logging third — every time, in that order.",
  },
};
