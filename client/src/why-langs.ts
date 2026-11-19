// Six-part why-panel entries (why / output / job / wrong) for the Level 4
// language-mastery lessons: C (CM), Java (JV), JavaScript (JSM), shells (SHM).
// Parts 2 (line-by-line) and 6 (safe target) are rendered from the lesson
// itself by WhyPanel; these maps carry parts 1, 3, 4, 5.

import type { WhyEntry } from "./why-code";

export const WHY_CM: Record<string, WhyEntry> = {
  "l4-cm-types": {
    why: "Types are storage contracts: sizeof and limits decide whether a count fits, a comparison is honest, and a parse is safe. Security work reads other people's binaries, headers, and protocols — all of which are typed layouts, not text.",
    output: "sizeof printed 1/4/8/8 for char/int/long/double on this machine — int is 4 bytes, so INT_MAX is 2^31−1 = 2147483647, and 7/2 gave 3 (integer division discards) while 7.0/2 gave 3.5. 0.1+0.2 printed 0.30000000000000004: doubles are binary approximations, and the == test honestly answered no.",
    job: "Buffer sizes, protocol fields, file formats, and exploit offsets are all type arithmetic. Choosing size_t for lengths and checking ranges before conversion is daily defensive C.",
    wrong: "Assign a value past INT_MAX and the result wraps negative silently — the classic integer-overflow bug behind real CVEs. The fix is range-checking before the conversion, exactly as the practical asks.",
  },
  "l4-cm-io": {
    why: "printf/scanf are the program's contract with the user and with files. The format string controls both directions — which is why user data must never BE the format string.",
    output: "%05d padded 443 to 00443 and 22 to 00022 — fixed-width fields like log columns. sscanf converted=1 for '443' and 0 for 'http': the return count is the parse verdict, and the failed case left port at its safe default.",
    job: "Log formatting, report generation, and input parsing in C tools all run through these functions; checking conversion counts is the difference between a parser and a crash.",
    wrong: "printf(user_input) with a %n in the string writes memory — a format-string vulnerability. The safe form is printf(\"%s\", user_input), always.",
  },
  "l4-cm-control": {
    why: "if/else, switch, and loops are how a C program classifies the world — ports, status codes, counts. Classification logic is security logic: the branch you forget is the case that slips through.",
    output: "The loop printed risky only for 23 and 3389; the switch printed 'not found' for 404 because case 200/301 missed and default caught it; the while loop summed attempts to 6 and stopped at its bound.",
    job: "Every scanner, filter, and protocol parser is branches plus loops over untrusted values. Writing the default case deliberately is a professional habit auditors look for.",
    wrong: "Forget break in a switch and execution falls through into the next case — a real bug class. The lesson's cases each end with break for exactly that reason.",
  },
  "l4-cm-strings": {
    why: "C strings are just char arrays ending in '\\0' — no length stored anywhere. Every safe string habit (bounds, terminators, snprintf) exists because the language trusts the programmer completely.",
    output: "strlen said 7 while sizeof said 8 — the array holds 7 characters plus the terminator. The status test matched 'fail' exactly (strcmp == 0), and snprintf reported it would need 9 chars for the long name, exposing truncation instead of hiding it.",
    job: "Log parsing, protocol handling, and config reading in C are string work. Knowing where the terminator is — and what happens when it is missing — is core systems literacy.",
    wrong: "strcpy into a too-small buffer overwrites whatever follows it on the stack. snprintf with the destination size is the fix, and its return value tells you truncation happened.",
  },
  "l4-cm-scope": {
    why: "Scope and storage decide how long a value lives and who can change it. static, globals, and recursion bugs are lifetime bugs — and lifetime bugs in C become memory bugs.",
    output: "judge(4) returned 1 because the static attempts counter survived between calls; counter() printed 1 2 3 across calls for the same reason; factorial(5) recursed down to the base case and multiplied back up to 120.",
    job: "Reading real C means tracking which variable is alive where — in audits, in crash dumps, in exploit analysis. Static counters and file-scope state are everywhere in daemons and drivers.",
    wrong: "Return a pointer to a local variable and the caller reads dead stack memory — undefined behaviour that may 'work' until it doesn't. Return values, or use static/heap storage with a clear owner.",
  },
  "l4-cm-typedef": {
    why: "typedef, enum, and union are how C names meaning: a status code with named values, a record layout, raw bytes viewed two ways. Named types are self-documenting interfaces.",
    output: "status printed 2 because FAIL is the third enumerator (OK=0, WARN=1, FAIL=2). The union showed first byte 4 and last byte 1 for 0x01020304 — little-endian storage, least significant byte first — while sizeof stayed 4, the largest member.",
    job: "Headers, protocol definitions, and Windows/POSIX APIs are written in typedefs and enums. Unions explain how exploits reinterpret memory: same bytes, different type.",
    wrong: "Assume big-endian byte order on an x86 machine and your parsed protocol field is byte-swapped garbage. Check the actual order — the union trick in this lesson is the standard test.",
  },
  "l4-cm-memory": {
    why: "malloc/calloc/realloc/free are manual memory ownership. Every heap bug class — leak, use-after-free, double free, overflow — is a broken ownership rule, so the rules come first.",
    output: "The malloc'd array summed to 3957 (22+443+3389+80+23); calloc's block printed zeros before any writes — the visible difference between the two allocators; realloc kept the old values while growing the block.",
    job: "Exploit development, fuzzing, and C audits all reason about the heap. Even if you never write C professionally, reading heap code is how memory-corruption CVEs become understandable.",
    wrong: "free a pointer and keep using it (use-after-free), or free it twice (double free) — both are exploitable corruptions. The discipline: one owner, free once, set to NULL after.",
  },
  "l4-cm-files": {
    why: "File I/O in C is explicit: open with a mode, check for NULL, read/write, close. Log files, evidence files, and config files are all this pattern — with error handling deciding whether failure is visible.",
    output: "The program wrote two lines, closed, reopened for reading, and counted lines=2 — fgets returned each line including its newline until it returned NULL at end of file. The fopen NULL check guarded the whole sequence.",
    job: "Forensic tools, log processors, and embedded systems read and write files in C constantly. Checking every fopen and counting what you actually read is evidence-grade discipline.",
    wrong: "Skip the NULL check and a missing file segfaults the program on the first fgets. Worse, 'w' mode truncates an existing file silently — open modes are destructive decisions.",
  },
  "l4-cm-preprocessor": {
    why: "The preprocessor rewrites your code before the compiler sees it: #include pastes headers, #define substitutes text, #ifdef selects builds. Macro bugs are substitution bugs — invisible unless you expand them mentally.",
    output: "SQUARE_BAD(1+2) printed 5 because it expanded to 1 + 2 * 1 + 2 (precedence!), while SQUARE(1+2) printed 9 — the parenthesised macro is correct. The #ifdef branch printed the DEBUG line only because DEBUG was defined.",
    job: "Build systems, portable code, and debug instrumentation all live in the preprocessor. Reading macros carefully is part of reading any large C codebase.",
    wrong: "An unparenthesised macro parameter bites exactly as shown: SQUARE_BAD looked identical to SQUARE. Rule: parenthesise every parameter and the whole body — or use a function.",
  },
  "l4-cm-cmdline": {
    why: "argc/argv are how tools receive targets: the scanner's port, the parser's filename. Validating them is input validation at the program boundary — the same discipline as validating web input.",
    output: "argc printed 2 (program name plus one argument); '443' converted with strtol and passed the 1..65535 range check; 'http' failed conversion and the program exited 2 with a usage message instead of scanning garbage.",
    job: "Every CLI tool you will ever use or write — nmap, your own scanners, log tools — starts here. Exit codes make tools composable in scripts and CI.",
    wrong: "atoi(argv[1]) with no validation accepts 'http' as 0 silently. strtol with end-pointer and range checks is the professional pattern this lesson uses.",
  },
  "l4-cm-bitwise": {
    why: "& | ^ ~ << >> are permission bits, protocol flags, and masks. Unix permissions, TCP flags, and Windows access masks are all bit fields — bitwise fluency is reading the OS's native language.",
    output: "perms started 6 (rw-); granting execute made 7, revoking write made 5, toggling read made 1 — each operation flipped exactly its bit. 443<<1 doubled to 886 and 443>>2 divided by 4 to 110.",
    job: "chmod values, firewall flags, capability masks, and crypto code are bitwise. Auditors read masks daily; exploit writers set them precisely.",
    wrong: "Use = instead of |= to grant a flag and you erase every other permission. Test with & and modify with |= and &= ~ — never overwrite a mask.",
  },
  "l4-cm-security": {
    why: "This is the vulnerability class that built the security industry: fixed buffers meeting unbounded input. snprintf, length returns, and explicit truncation detection are the modern C answer.",
    output: "The long hostname was stored truncated as 'a-very-long-hos' — snprintf stopped at the buffer size instead of overflowing; its return said 31 chars would be needed, and the truncated? check answered yes - detected. The short name copied fully with len=7.",
    job: "Secure C review is mostly this lesson: find every copy, check every bound, prefer the _s/snprintf family, compile with warnings and sanitizers. It is the core skill of product security teams.",
    wrong: "The original bug: strcpy/sprintf into a stack buffer with attacker input — the Morris worm pattern from 1988, still found in embedded firmware today. Bound every copy, always.",
  },
};

export const WHY_JV: Record<string, WhyEntry> = {
  "l4-jv-first": {
    why: "Java's shape — class, main, compile-then-run on the JVM — is the enterprise world's default. Android apps, banking backends, and Burp Suite itself are Java; reading it is not optional for application security work.",
    output: "javac produced First.class and java ran it: the verdict line printed 'lab-web:23 is risky' from the boolean test, and attempts summed 1..4 to 10 in the for loop — compile once, run anywhere the JVM exists.",
    job: "Enterprise code review, Android analysis, and Java deserialization research all start with fluent reading of this exact structure.",
    wrong: "Name the file differently from the public class and javac refuses to compile — the file/class name contract is strict. Keep one public class per file, named identically.",
  },
  "l4-jv-operators": {
    why: "Java operators look like C's but the type system watches: integer division truncates, % keeps the sign of the left side, and && short-circuits. Precision here prevents the quiet arithmetic bugs audits find.",
    output: "7/2 printed 3 and 7%2 printed 1, while 7.0/2 printed 3.5 — the operand types chose the arithmetic. The && chain evaluated left to right and the port test combined range and equality into one readable verdict.",
    job: "Validation logic, scoring, and rate limiting are operator work. Short-circuit order matters when the right side can throw — check null first, then dereference.",
    wrong: "Compare strings with == and you compare references, not text — it may even appear to work for interned literals. Strings always compare with .equals(), as the strings lesson proves.",
  },
  "l4-jv-control": {
    why: "if/switch/loops in Java carry the same classification duty as everywhere — with switch expressions and enhanced for loops making verdict code shorter and safer.",
    output: "The switch printed 'not found' for 404 via the default arm; the enhanced for visited each port once and counted 2 risky; the while loop retried until its bound and reported the attempts honestly.",
    job: "Request routing, status handling, and retry logic in Java services are control flow. Enhanced for removes index bugs — prefer it whenever you do not need the index.",
    wrong: "An unbounded while retry against a failing service becomes a self-inflicted denial of service. Every retry loop needs a bound and, in production, a delay.",
  },
  "l4-jv-arrays": {
    why: "Java arrays are fixed-size, typed, and bounds-checked at runtime — the language traded C's freedom for safety: an out-of-range index throws instead of corrupting memory.",
    output: "The ports array summed to 3934; the loop found max 3389; accessing index 5 would throw ArrayIndexOutOfBoundsException rather than reading adjacent memory — the exception IS the security feature.",
    job: "Understanding what Java protects (and what it costs) explains enterprise platform choices — and why C codebases need the manual checks Java does automatically.",
    wrong: "Assume an array is sorted or sized for your data and the logic silently misreads. Check .length, sort explicitly when order matters, and let the exception surface bugs in testing.",
  },
  "l4-jv-strings": {
    why: "Java strings are immutable objects: == compares identity, equals() compares content, and every 'modification' builds a new string. This one fact explains a famous family of Java bugs.",
    output: "a == b printed false while a.equals(b) printed true — two distinct objects with identical text. substring(5,10) extracted 'rahim', and the split of the log line produced fields the code could index by meaning.",
    job: "Log parsing, input validation, and token handling in Java are string work. StringBuilder in loops is the performance habit; equals() is the correctness habit.",
    wrong: "Build a string with += inside a big loop and you allocate thousands of dead objects. StringBuilder exists for exactly this — the compiler cannot save you inside a loop.",
  },
  "l4-jv-methods": {
    why: "Methods package a decision: typed inputs, one return, overloading for variants. Test-RiskyPort as a method is the same function idea from Python and C — Java adds compile-time type checking of every call.",
    output: "isRisky(23) returned true and isRisky(443) false from the set membership test; the overloaded verdict method printed the labelled form; the method's local counter never leaked into main — scope enforced by the compiler.",
    job: "Service code is methods calling methods; unit tests target methods. Writing small, typed, single-purpose methods is what makes Java code reviewable at enterprise scale.",
    wrong: "A method that prints AND returns invites the PowerShell-style output confusion in reverse — in Java, return values are the contract; keep display at the edges.",
  },
  "l4-jv-oop1": {
    why: "Classes bundle state with the operations that protect it: fields, a constructor that establishes valid state, methods that maintain it. Encapsulation starts here — private fields, public behaviour.",
    output: "Two Scan objects held independent state — one's count never touched the other's; the constructor set host and port at birth so no object existed in a half-valid state; the describe() method read its own fields.",
    job: "Every Java framework (Spring, Android) is classes and objects with lifecycle rules. Modelling findings, users, and sessions as classes is the daily enterprise pattern.",
    wrong: "Make fields public 'for convenience' and any code can put the object into an impossible state. Private fields plus methods is not ceremony — it is the integrity boundary.",
  },
  "l4-jv-oop2": {
    why: "Inheritance shares behaviour down a hierarchy; method overriding specialises it; super reaches the parent's version. Polymorphism through the parent type is what makes frameworks extensible.",
    output: "Both a plain Check and a PortCheck answered check() through the same parent-typed variable — the JVM dispatched to the overriding method at runtime; the PortCheck's super call reused the parent's line before adding its own.",
    job: "Plugin architectures, test doubles, and framework callbacks are polymorphism. Security review follows the dispatch: the code that runs is the override, not the declaration.",
    wrong: "Deep inheritance trees (5+ levels) become unreadable dispatch puzzles. Prefer composition — objects holding objects — beyond one or two levels.",
  },
  "l4-jv-oop3": {
    why: "Interfaces are contracts without implementation: a class promises behaviour, callers depend only on the promise. Abstract classes sit between — shared state plus a contract.",
    output: "An ArrayList of Scannable objects ran TCP and UDP checks through one loop — the caller never knew the concrete classes; swapping an implementation changed behaviour without touching the loop.",
    job: "Dependency injection, mocking in tests, and API design are interface work. Security tools are built this way: one scanner interface, many check implementations.",
    wrong: "Program to a concrete class everywhere and every change ripples. Depend on the interface; let construction choose the implementation.",
  },
  "l4-jv-exceptions": {
    why: "Exceptions are Java's error channel: try/catch/finally, checked exceptions the compiler forces you to handle, and custom types that name your domain's failures.",
    output: "The parse of 'http' threw NumberFormatException, the catch recorded the failure and continued with the next value — one bad record never stopped the batch; finally printed its line on both the success and failure paths.",
    job: "Resilient services are exception design: what to catch, what to log, what to propagate. Catching Exception broadly and swallowing it silently is the anti-pattern auditors flag first.",
    wrong: "An empty catch block makes failures invisible — the program 'works' while dropping data. At minimum log; usually rethrow or convert to a domain exception.",
  },
  "l4-jv-collections": {
    why: "List, Set, and Map are the working data structures: ordered sequences, uniqueness, key lookup. Choosing by access pattern — not habit — is the skill; generics keep them type-safe.",
    output: "The HashSet printed each finding once although added twice — uniqueness enforced by the set; HashMap get returned counts by key; the ArrayList kept insertion order for the report.",
    job: "Findings stores, session maps, caches, and queues in real systems are collections. Knowing HashMap is O(1) lookup and ArrayList is ordered is interview-and-audit knowledge.",
    wrong: "Use a List where uniqueness matters and duplicates poison tallies — the same bug as forgetting sort | uniq in bash. Data structure choice IS correctness.",
  },
  "l4-jv-generics": {
    why: "Generics move type errors from runtime to compile time: a Box<Integer> cannot hold a string, and the compiler proves it. Type parameters are contracts the compiler enforces for free.",
    output: "The generic Box stored and returned an Integer with no cast; the generic method counted matching elements in both an Integer array and a String array — one implementation, compiler-checked for both.",
    job: "APIs and libraries are generic; reading <T extends Comparable> fluently is required for modern Java code review and for understanding framework signatures.",
    wrong: "Raw types (List without <>) silence the compiler and reintroduce ClassCastException at runtime — the pre-generics bug the feature exists to prevent.",
  },
  "l4-jv-lambdas": {
    why: "Lambdas and streams express transformations declaratively: filter, map, collect. The same pipeline thinking as bash and PowerShell, inside Java — data flows, stages transform.",
    output: "The stream filtered ports to risky=[23, 3389] and counted ports above 1000 as 1 — filter/map/count composed without a single explicit loop or temporary list.",
    job: "Modern Java codebases are stream-heavy; log and event processing especially. Reading streams fluently is reading contemporary enterprise Java.",
    wrong: "Side effects inside stream stages (mutating shared state) break under parallel streams. Keep stages pure; collect results instead.",
  },
  "l4-jv-files": {
    why: "java.nio.file (Files, Path) is the modern file API: readAllLines for small files, BufferedReader streams for big ones, and IOException handling the compiler enforces.",
    output: "The program wrote three lines with Files.write, read them back, and counted 2 failures — the Path object carried the location, and try-with-resources closed the reader on every path.",
    job: "Log processing, report generation, and evidence handling in Java services are file work; try-with-resources is the resource-safety idiom reviewers expect.",
    wrong: "Forget to close a writer and buffered data may never reach disk — the file looks empty and the 'bug' is a missing close. try-with-resources makes closing structural, not remembered.",
  },
  "l4-jv-security": {
    why: "Java's security-relevant habits: validate at boundaries, parameterise queries (never concatenate SQL), hash with real KDFs, and treat deserialization of untrusted data as dangerous.",
    output: "The validator rejected the bad port and accepted 443 with explicit reasons; the MessageDigest SHA-256 of the sample matched the known pattern — hex-encoded, deterministic, verifiable against a second implementation.",
    job: "OWASP's Java guidance is this lesson: injection via string-built queries, unsafe deserialization, and weak hashing are the recurring enterprise findings.",
    wrong: "Concatenate user input into a SQL string and you have written an injection vulnerability in the world's most common enterprise language. PreparedStatement binds values as data — always.",
  },
};

export const WHY_JSM: Record<string, WhyEntry> = {
  "l4-jsm-types": {
    why: "JavaScript types are dynamic and coercive: == converts before comparing, values have truthiness, and typeof lies about null and arrays. The browser's language rewards those who know exactly what a value is.",
    output: "typeof printed number/string as expected; '5' == 5 was true but '5' === 5 false — === skips conversion; '5' + 1 gave '51' (string wins) while '5' - 1 gave 4 (subtraction forces numbers); the string '0' was truthy.",
    job: "Every web vulnerability class (XSS, prototype pollution, auth bypass via loose comparison) starts in these semantics. Security review of JS demands coercion fluency.",
    wrong: "Use == against user input and '0' == false style surprises bypass checks. === everywhere, explicit Number()/String() conversions at boundaries.",
  },
  "l4-jsm-control": {
    why: "if/switch/loops classify values in the browser exactly as in other languages — with JS twists: switch uses ===, and for...of iterates values while for...in iterates keys.",
    output: "classify printed the right label per status; the switch matched 404 to its case strictly; for...of summed the ports to 10 over values — no index arithmetic anywhere.",
    job: "Form validation, UI state machines, and client-side routing are control flow. Choosing for...of over index loops removes a whole bug family.",
    wrong: "for...in over an array iterates string keys (and inherited ones) — a classic subtle bug. Arrays take for...of; objects take Object.entries/keys.",
  },
  "l4-jsm-functions": {
    why: "Functions are values in JavaScript: passed as callbacks, returned from functions, stored in variables. Closures — functions remembering their birth scope — power private state and half the language's patterns.",
    output: "The counter closure printed 1 2 3 across calls because count lived in the enclosing scope; forEach applied the verdict function per port; the arrow function returned its expression without a block.",
    job: "Event handlers, array pipelines, and module patterns are closures and callbacks. Understanding what a closure captures explains most 'impossible' JS bugs.",
    wrong: "A loop creating closures over a var-declared variable captures ONE shared binding — every callback sees the final value. let gives each iteration its own binding.",
  },
  "l4-jsm-arrays": {
    why: "map/filter/reduce are the array pipeline: transform, select, accumulate — the same three moves as streams and shells. Non-mutating methods keep data predictable; sort's default is a trap.",
    output: "filter kept risky ports 3389 and 23; map labelled each; reduce summed to 3957; the numeric sort with (a,b)=>a-b ordered 22, 23, 80, 443, 3389 while the default string sort would have scrambled them.",
    job: "Data rendering, log viewers, and client-side analytics are array pipelines. Choosing the non-mutating method (toSorted, spread copies) prevents action-at-a-distance bugs.",
    wrong: "sort() without a comparator sorts as strings: 443 before 80. Every numeric sort needs (a, b) => a - b — the most-hit JS footgun in interviews and audits alike.",
  },
  "l4-jsm-objects": {
    why: "Objects are key-value records and the shape of JSON itself. Destructuring, spread, and Object methods are how JS code passes structured data without ceremony.",
    output: "JSON.stringify then parse produced an equal record (round trip true); the missing key read as undefined — 'unassigned'; destructuring pulled host and port by name in one line.",
    job: "API payloads, config, and state are objects. Reading destructuring and spread fluently is reading modern JS; knowing undefined-vs-absent matters for validation logic.",
    wrong: "Mutate an object you received (props, payload) and the owner's data changes silently. Spread-copy before modifying — immutability by habit.",
  },
  "l4-jsm-dom": {
    why: "The DOM is the page as an object tree: querySelector finds nodes, textContent writes text safely, createElement builds structure. This is where JS touches the user — and where XSS lives or dies.",
    output: "The page rendered the heading, the verdict list items, and the count line — built with createElement and textContent, so the '<' in data could never become markup.",
    job: "Every web app and every DOM-XSS audit is this API. textContent versus innerHTML is the single most security-relevant choice in frontend code.",
    wrong: "innerHTML with user data parses it as markup — script, event handlers, the works. textContent treats data as text. Default to textContent; earn innerHTML exceptions.",
  },
  "l4-jsm-events": {
    why: "Events are the browser's input channel: clicks, keys, submits. addEventListener attaches behaviour; preventDefault and delegation are the professional patterns.",
    output: "Clicking a port button printed its verdict line; the delegated list handler answered for items added later too — one listener on the parent, event.target identifying the child.",
    job: "Interactive tools, games, and security dashboards are event-driven. Delegation keeps dynamic lists fast and simple; removing listeners prevents leaks in long-lived pages.",
    wrong: "Attach a listener per row in a 10,000-row table and the page crawls. Delegate to the container — one listener, every row.",
  },
  "l4-jsm-async": {
    why: "JavaScript is single-threaded with an event loop: async/await writes sequential-looking code over promises, and Promise.all runs independent work concurrently. Order guarantees are the subtle part.",
    output: "The verified order: start, the lab-web line, the Promise.all line (results in INPUT order a then b, not completion order), the handled rejection, then end — await paused only its own function while the rest of the program continued.",
    job: "fetch calls, dashboards, and scanners in the browser are async code. Knowing what runs when — and that Promise.all preserves input order — prevents race-condition bugs.",
    wrong: "Forget await and you log a Promise object instead of its value; forget catch and a rejection becomes an unhandled promise rejection that fails silently in production.",
  },
  "l4-jsm-es6": {
    why: "Modern JS (ES6+) is the dialect codebases actually use: const/let, template literals, destructuring, spread/rest, Map/Set, modules. Reading legacy var-only code is not enough.",
    output: "Template literals interpolated the verdict line; destructuring split first/rest as 22 and 443,80; the Set reported size 2 after a duplicate add; the Map counted 2 keys — each feature doing exactly one clear job.",
    job: "Frameworks, build tools, and modern libraries assume ES6 fluency. Map/Set beat objects/arrays when keys are arbitrary or uniqueness matters.",
    wrong: "var in 2026 code signals legacy patterns — function scope and hoisting surprises included. const by default, let when reassignment is real, var never.",
  },
  "l4-jsm-security": {
    why: "Client-side security hygiene: escape output, parse URLs with the URL API instead of string surgery, encode parameters, and never trust data just because it came from your own page.",
    output: "The escaper turned the script tag into inert entities (&lt;script&gt;...); new URL parsed host example.com and protocol https: from the full string; encodeURIComponent encoded the spaces and & in the user name so it could not break out of its parameter.",
    job: "DOM XSS, open redirects, and parameter smuggling are prevented at exactly these lines. Sanitisation libraries help, but the safe-API habit is the foundation.",
    wrong: "String-concatenate a URL with raw user input and & or # in the value rewrites the request's meaning. URL + searchParams, or encodeURIComponent per value — always.",
  },
};

export const WHY_SHM: Record<string, WhyEntry> = {
  "l4-shm-bash-vars": {
    why: "Shell variables are untyped text with sharp edges: expansion, quoting, and exit codes decide whether a script acts on the right file. Automation correctness starts here.",
    output: "Quoted \"$name\" printed 'lab web' as one value; the brace form built report_2026.txt correctly while the unbraced form collapsed to report.txt (the suffix trap); exit codes printed 1 for false and 0 for true.",
    job: "Every cron job, deploy script, and incident one-liner uses these mechanics. The quoting habit is the difference between a tool and a footgun.",
    wrong: "An unquoted empty variable in rm -rf $dir/ deletes the wrong tree. Quote expansions, test with [ -n \"$dir\" ], and let set -u catch the unset case.",
  },
  "l4-shm-bash-pipes": {
    why: "Pipes compose small tools into analysis: each stage does one job (select, extract, tally), and stderr stays a separate channel so data and diagnostics never mix.",
    output: "The pipeline printed total 4 and fail 3; uniq -c tallied '2 fail rahim' and '1 fail admin' — sorted input made identical lines adjacent so the counter could group them.",
    job: "Log triage, the first hour of most investigations, is exactly this composition. Analysts who pipe fluently answer questions in seconds that take others a spreadsheet.",
    wrong: "Pipe unsorted data into uniq and duplicates survive in separate groups — uniq only collapses ADJACENT duplicates. sort first, always.",
  },
  "l4-shm-bash-control": {
    why: "if/case and [ ] tests give scripts judgement: classify a service, test a file, branch on a range. Control flow is what turns a command list into a tool.",
    output: "The verified order printed telnet (case match), name (the [ ] string test), risky service, auth.txt exists ([ -f ]), and well-known port range — each branch taken for its stated reason.",
    job: "Health checks, installers, and hardening scripts are branches over system state. case for value dispatch reads cleaner than elif chains and is the idiom reviewers expect.",
    wrong: "Test a file path with a value operator (= instead of -f) and the script tests the string, not the filesystem — silent wrong answers. Match the test to the type.",
  },
  "l4-shm-bash-loops": {
    why: "Loops apply one judgement to many targets — ports, hosts, files — and functions package the judgement. total/retries/tallies are loop accumulators, the shell form of reduce.",
    output: "The loop summed attempts to total=8, retried the failing check three times, counted fails 3, and printed 'port 443: ok' from the verdict function — substitution inserted the function's output into the line.",
    job: "Fleet checks and batch processing are loops over inventories. A bounded retry with a counter is the professional form; an unbounded one is an outage.",
    wrong: "Call a function before its definition and bash reports 'command not found' at runtime — definitions must precede use in the file, unlike compiled languages.",
  },
  "l4-shm-bash-text": {
    why: "grep/awk/sed are the text-processing core: select lines, work fields, substitute safely. Log analysis fluency is these three tools composed with the pipe discipline.",
    output: "awk tallied fail users admin 1 / rahim 2 by field; the fail count printed 3; sed masked the IP in the shared line; unique IPs counted 2 after sort -u.",
    job: "Threat hunting, report generation, and data masking for sharing are text-tool work. Masking before sharing is a professional obligation, not a nicety.",
    wrong: "sed with an unescaped '.' in an IP pattern matches any character — 203x0y113 matches too. Escape metacharacters in data patterns, or use fixed-string grep -F.",
  },
  "l4-shm-bash-files": {
    why: "chmod/find/stat are permission and discovery: octal bits decide who can read evidence, find locates artefacts by predicate, and strict mode keeps scripts honest.",
    output: "chmod 640 produced -rw-r----- and stat printed octal: 640 between the find result and the ls listing — owner rw, group r, other none, exactly the bits 4+2 / 4 / 0 describe.",
    job: "Evidence handling, hardening, and artefact hunts are file operations. cp -a preserves attributes for evidence; world-writable findings come from find -perm.",
    wrong: "chmod 777 to 'make it work' converts a permissions bug into a security finding. Diagnose the needed triad and set exactly that.",
  },
  "l4-shm-ps-basics": {
    why: "PowerShell's one big idea: the pipeline carries objects with named properties, not text. Filtering by property replaces field-counting, and Get-Member reveals what any object offers.",
    output: "Where-Object kept the risky services by property; Sort-Object ordered ports numerically (22, 23, 443) because Port is a number; the subexpression $($services.Count) evaluated inside the string.",
    job: "Windows administration and DFIR are PowerShell work. Object fluency is what makes Windows logs and service states queryable without exports and spreadsheets.",
    wrong: "Format-Table mid-pipeline destroys the objects for every later stage. Format only at the end, for human eyes.",
  },
  "l4-shm-ps-control": {
    why: "if/foreach/switch plus param() functions package checks into reusable tools — with the output-stream rule deciding what a function really returns.",
    output: "Test-RiskyPort returned real booleans the if consumed directly; foreach visited 21, 22, 443 in order; the counter function's single return kept its result scalar — no stray output polluted it.",
    job: "Admin tooling is functions with typed parameters and -WhatIf safety. The stray-output trap is the most common real-world PowerShell bug — this lesson inoculates against it.",
    wrong: "One forgotten Get-Date line inside a function makes its 'return value' an array and breaks downstream comparisons mysteriously. Keep functions output-pure.",
  },
  "l4-shm-ps-files": {
    why: "Import-Csv and ConvertFrom-Json turn files into objects at the boundary, so the pipeline's filter/group/sort machinery applies — the object answer to text scraping.",
    output: "Select-String counted matches as objects; Group-Object tallied rahim 2 / karim 1 by the User property; the CSV round trip preserved headers as properties; JSON emitted with -Compress on one line.",
    job: "Windows event exports, API responses, and tool output are CSV/JSON. Converting once at import and working with objects is the professional pattern.",
    wrong: "ConvertTo-Json without -Depth silently truncates nested data at depth 2 while looking valid. Depth is a correctness parameter — set it deliberately.",
  },
  "l4-shm-security": {
    why: "The capstone composes the whole track into a real hunt — select, extract, tally, threshold, verdict — in both shells, plus the hardening checks and safety rules that make automation trustworthy.",
    output: "One log produced two tallies: by user (rahim 3, admin 1) and by IP (203.0.113.44 with 4) — the IP view exposed what the user view spread out; the threshold check converted the count into a verdict line.",
    job: "This is the literal first hour of incident response and threat hunting. The same hunt in bash and PowerShell means the analyst is never blocked by which OS holds the evidence.",
    wrong: "Run the hunt as root 'to be safe' and a quoting bug becomes a system compromise. Least privilege, quoted expansions, validated inputs — the safety rules are the lesson.",
  },
};

export const WHY_CM_BN: Record<string, WhyEntry> = {
  "l4-cm-types": {
    why: "Type হলো storage-এর চুক্তি: sizeof আর limit ঠিক করে একটা count মাপে আসে কিনা, তুলনা সৎ কিনা, parse নিরাপদ কিনা। Security কাজ অন্যের binary, header, protocol পড়ে — সেগুলো সব typed layout, text নয়।",
    output: "sizeof এই machine-এ char/int/long/double-এর জন্য 1/4/8/8 ছেপেছে — int 4 byte, তাই INT_MAX = 2^31−1 = 2147483647, আর 7/2 দিয়েছে 3 (integer division বাকি ফেলে দেয়) যেখানে 7.0/2 দিয়েছে 3.5। 0.1+0.2 ছেপেছে 0.30000000000000004: double হলো binary approximation, আর == test সৎভাবে no বলেছে।",
    job: "Buffer size, protocol field, file format, exploit offset — সবই type arithmetic। Length-এর জন্য size_t বাছা আর conversion-এর আগে range check করা দৈনন্দিন defensive C।",
    wrong: "INT_MAX পেরিয়ে মান assign করলে ফল নীরবে negative wrap হয় — আসল CVE-র পেছনের classic integer-overflow bug। Fix হলো conversion-এর আগে range-check, ঠিক practical যেমন চায়।",
  },
  "l4-cm-io": {
    why: "printf/scanf হলো program-এর user আর file-এর সঙ্গে চুক্তি। Format string দুই দিকই নিয়ন্ত্রণ করে — তাই user data কখনো format string নিজে হতে পারে না।",
    output: "%05d 443-কে 00443 আর 22-কে 00022 করেছে — log column-এর মতো fixed-width field। sscanf '443'-এর জন্য converted=1 আর 'http'-এর জন্য 0 দিয়েছে: return count-ই parse-এর রায়, আর ব্যর্থ ক্ষেত্রে port তার নিরাপদ default-এ থেকেছে।",
    job: "C tool-এ log formatting, report তৈরি, input parsing — সব এই function দিয়ে চলে; conversion count check করাই parser আর crash-এর পার্থক্য।",
    wrong: "User input-এ %n থাকা অবস্থায় printf(user_input) memory লেখে — format-string vulnerability। নিরাপদ রূপ সবসময় printf(\"%s\", user_input)।",
  },
  "l4-cm-control": {
    why: "if/else, switch, loop হলো C program যেভাবে পৃথিবী classify করে — port, status code, count। Classification logic-ই security logic: যে branch ভুলে যাবে, সেই case-টাই ফাঁক দিয়ে যাবে।",
    output: "Loop শুধু 23 আর 3389-এর জন্য risky ছেপেছে; switch 404-এর জন্য 'not found' ছেপেছে কারণ case 200/301 miss করেছে আর default ধরেছে; while loop attempt যোগ করে 6 করেছে আর bound-এ থেমেছে।",
    job: "প্রতিটি scanner, filter, protocol parser হলো untrusted মানের ওপর branch + loop। Default case ইচ্ছাকৃতভাবে লেখা এমন পেশাদার অভ্যাস যা auditor খোঁজে।",
    wrong: "Switch-এ break ভুলে গেলে execution পরের case-এ পড়ে যায় (fall-through) — আসল bug class। এই পাঠের প্রতিটি case break দিয়ে শেষ ঠিক এই কারণে।",
  },
  "l4-cm-strings": {
    why: "C string হলো '\\0' দিয়ে শেষ হওয়া char array মাত্র — কোথাও length জমা থাকে না। প্রতিটি নিরাপদ string অভ্যাস (bound, terminator, snprintf) আছে কারণ ভাষা programmer-কে সম্পূর্ণ বিশ্বাস করে।",
    output: "strlen বলেছে 7, sizeof বলেছে 8 — array-তে 7 character + terminator আছে। Status test 'fail' হুবহু মিলিয়েছে (strcmp == 0), আর snprintf জানিয়েছে long name-এর জন্য 9 char লাগত — truncation লুকানোর বদলে প্রকাশ করেছে।",
    job: "C-তে log parsing, protocol handling, config পড়া — সব string কাজ। Terminator কোথায় — আর না থাকলে কী হয় — জানা core systems literacy।",
    wrong: "খুব ছোট buffer-এ strcpy তার পরের stack memory overwrite করে। Destination size-সহ snprintf হলো fix, আর তার return value বলে দেয় truncation হয়েছে কিনা।",
  },
  "l4-cm-scope": {
    why: "Scope আর storage ঠিক করে একটা মান কতক্ষণ বাঁচে আর কে বদলাতে পারে। static, global, recursion bug হলো lifetime bug — আর C-তে lifetime bug memory bug হয়ে যায়।",
    output: "judge(4) 1 ফেরত দিয়েছে কারণ static attempts counter call-এর মধ্যে টিকে ছিল; counter() একই কারণে 1 2 3 ছেপেছে; factorial(5) base case পর্যন্ত নেমে গুণ করে 120 হয়েছে।",
    job: "আসল C পড়া মানে কোন variable কোথায় জীবিত তা track করা — audit-এ, crash dump-এ, exploit analysis-এ। Daemon আর driver-এ static counter আর file-scope state সর্বত্র।",
    wrong: "Local variable-এর pointer return করলে caller মৃত stack memory পড়ে — undefined behaviour যা 'কাজ করে' মনে হতে পারে যতক্ষণ না করে। Value return করো, অথবা clear owner-সহ static/heap storage ব্যবহার করো।",
  },
  "l4-cm-typedef": {
    why: "typedef, enum, union হলো C যেভাবে অর্থের নাম দেয়: named মানসহ status code, record layout, একই byte দুইভাবে দেখা। Named type হলো self-documenting interface।",
    output: "status 2 ছেপেছে কারণ FAIL তৃতীয় enumerator (OK=0, WARN=1, FAIL=2)। Union 0x01020304-এর জন্য first byte 4 আর last byte 1 দেখিয়েছে — little-endian storage, least significant byte আগে — আর sizeof থেকেছে 4, সবচেয়ে বড় member।",
    job: "Header, protocol definition, Windows/POSIX API typedef আর enum-এ লেখা। Union বুঝিয়ে দেয় exploit কীভাবে memory reinterpret করে: একই byte, আলাদা type।",
    wrong: "x86 machine-এ big-endian ধরে নিলে parse করা protocol field byte-swapped আবর্জনা হয়। আসল order check করো — এই পাঠের union trick-ই standard test।",
  },
  "l4-cm-memory": {
    why: "malloc/calloc/realloc/free হলো manual memory ownership। প্রতিটি heap bug class — leak, use-after-free, double free, overflow — একটা ভাঙা ownership নিয়ম, তাই নিয়ম আগে।",
    output: "malloc করা array যোগ হয়েছে 3957 (22+443+3389+80+23); calloc-এর block কোনো write-এর আগেই zero ছেপেছে — দুই allocator-এর দৃশ্যমান পার্থক্য; realloc block বাড়িয়ে পুরনো মান রেখেছে।",
    job: "Exploit development, fuzzing, C audit — সব heap নিয়ে যুক্তি করে। পেশাদারভাবে C না লিখলেও heap code পড়াই memory-corruption CVE বোধগম্য করে।",
    wrong: "Pointer free করে ব্যবহার চালিয়ে যাওয়া (use-after-free), বা দুবার free করা (double free) — দুটোই exploitable corruption। শৃঙ্খলা: এক owner, একবার free, পরে NULL set।",
  },
  "l4-cm-files": {
    why: "C-তে file I/O স্পষ্ট: mode দিয়ে open, NULL check, read/write, close। Log file, evidence file, config file — সব এই pattern, আর error handling ঠিক করে ব্যর্থতা দৃশ্যমান হবে কিনা।",
    output: "Program দুই লাইন লিখে close করেছে, পড়ার জন্য আবার open করেছে, আর lines=2 গুনেছে — fgets প্রতিটি লাইন newline-সহ ফেরত দিয়েছে যতক্ষণ file শেষে NULL না দিল। fopen NULL check পুরো sequence পাহারা দিয়েছে।",
    job: "Forensic tool, log processor, embedded system C-তে সবসময় file পড়ে-লেখে। প্রতিটি fopen check করা আর আসলে কত পড়লে তা গোনা evidence-grade শৃঙ্খলা।",
    wrong: "NULL check এড়িয়ে গেলে missing file প্রথম fgets-এই program segfault করে। আরও খারাপ, 'w' mode বিদ্যমান file নীরবে truncate করে — open mode হলো ধ্বংসাত্মক সিদ্ধান্ত।",
  },
  "l4-cm-preprocessor": {
    why: "Preprocessor compiler দেখার আগেই code পুনর্লেখে: #include header paste করে, #define text substitute করে, #ifdef build বাছে। Macro bug হলো substitution bug — মনে মনে expand না করলে অদৃশ্য।",
    output: "SQUARE_BAD(1+2) 5 ছেপেছে কারণ তা expand হয়েছে 1 + 2 * 1 + 2 (precedence!), যেখানে SQUARE(1+2) ছেপেছে 9 — parenthesised macro সঠিক। #ifdef branch DEBUG line শুধু তখনই ছেপেছে যখন DEBUG defined ছিল।",
    job: "Build system, portable code, debug instrumentation — সব preprocessor-এ থাকে। বড় যেকোনো C codebase পড়ার অংশ macro মনোযোগ দিয়ে পড়া।",
    wrong: "Parenthesis-ছাড়া macro parameter ঠিক দেখানো মতো কামড়ায়: SQUARE_BAD দেখতে SQUARE-এর মতোই ছিল। নিয়ম: প্রতিটি parameter আর পুরো body-তে parenthesis — অথবা function ব্যবহার করো।",
  },
  "l4-cm-cmdline": {
    why: "argc/argv হলো tool যেভাবে target পায়: scanner-এর port, parser-এর filename। তাদের validate করা program boundary-তে input validation — web input validate করার একই শৃঙ্খলা।",
    output: "argc 2 ছেপেছে (program নাম + এক argument); '443' strtol দিয়ে convert হয়ে 1..65535 range check পাস করেছে; 'http' conversion-এ ব্যর্থ হয়ে program usage message-সহ exit 2 করেছে, আবর্জনা scan করার বদলে।",
    job: "যত CLI tool ব্যবহার করবে বা লিখবে — nmap, নিজের scanner, log tool — সব এখান থেকে শুরু। Exit code tool-কে script আর CI-তে composable করে।",
    wrong: "Validation ছাড়া atoi(argv[1]) 'http'-কে নীরবে 0 হিসেবে নেয়। end-pointer আর range check-সহ strtol-ই এই পাঠের পেশাদার pattern।",
  },
  "l4-cm-bitwise": {
    why: "& | ^ ~ << >> হলো permission bit, protocol flag, mask। Unix permission, TCP flag, Windows access mask — সব bit field; bitwise সাবলীলতা হলো OS-এর নিজের ভাষা পড়া।",
    output: "perms শুরু 6 (rw-); execute দিলে 7, write তুললে 5, read toggle করলে 1 — প্রতিটি operation ঠিক তার bit উল্টেছে। 443<<1 দ্বিগুণ 886 আর 443>>2 চার দিয়ে ভাগ 110।",
    job: "chmod মান, firewall flag, capability mask, crypto code — সব bitwise। Auditor প্রতিদিন mask পড়ে; exploit writer নিখুঁতভাবে set করে।",
    wrong: "Flag দিতে = ব্যবহার করলে (|= নয়) বাকি সব permission মুছে যায়। & দিয়ে test করো আর |= ও &= ~ দিয়ে বদলাও — mask কখনো overwrite নয়।",
  },
  "l4-cm-security": {
    why: "এটাই সেই vulnerability class যা security industry গড়েছে: fixed buffer-এর সামনে unbounded input। snprintf, length return, স্পষ্ট truncation detection — আধুনিক C-এর উত্তর।",
    output: "Long hostname truncated হয়ে 'a-very-long-hos' জমা হয়েছে — snprintf overflow-এর বদলে buffer size-এ থেমেছে; তার return বলেছে 31 char লাগত, আর truncated? check উত্তর দিয়েছে yes - detected। Short name পুরো copy হয়েছে len=7-সহ।",
    job: "Secure C review বেশিরভাগই এই পাঠ: প্রতিটি copy খোঁজো, প্রতিটি bound check করো, _s/snprintf family পছন্দ করো, warning আর sanitizer-সহ compile করো। Product security team-এর core skill।",
    wrong: "আসল bug: attacker input-সহ stack buffer-এ strcpy/sprintf — 1988-র Morris worm pattern, আজও embedded firmware-এ পাওয়া যায়। প্রতিটি copy bound করো, সবসময়।",
  },
};

export const WHY_JV_BN: Record<string, WhyEntry> = {
  "l4-jv-first": {
    why: "Java-র আকার — class, main, JVM-এ compile-then-run — enterprise জগতের default। Android app, banking backend, Burp Suite নিজেই Java; application security কাজে তা পড়া optional নয়।",
    output: "javac First.class বানিয়েছে আর java তা চালিয়েছে: boolean test থেকে verdict line 'lab-web:23 is risky' ছেপেছে, আর for loop-এ attempt 1..4 যোগ হয়ে 10 — একবার compile, JVM থাকলেই যেকোনো জায়গায় run।",
    job: "Enterprise code review, Android analysis, Java deserialization research — সব এই হুবহু structure সাবলীলভাবে পড়া থেকে শুরু।",
    wrong: "Public class থেকে file-এর নাম আলাদা রাখলে javac compile করতে অস্বীকার করে — file/class নামের চুক্তি কঠোর। প্রতি file-এ এক public class, হুবহু একই নামে।",
  },
  "l4-jv-operators": {
    why: "Java operator দেখতে C-এর মতো কিন্তু type system নজর রাখে: integer division truncate করে, % বাম পাশের sign রাখে, && short-circuit করে। এখানে নিখুঁততাই audit যেসব নীরব arithmetic bug পায় তা আটকায়।",
    output: "7/2 ছেপেছে 3 আর 7%2 ছেপেছে 1, যেখানে 7.0/2 ছেপেছে 3.5 — operand-এর type arithmetic বেছেছে। && chain বাম থেকে ডানে evaluate হয়েছে আর port test range আর equality এক পাঠযোগ্য রায়ে মিলিয়েছে।",
    job: "Validation logic, scoring, rate limiting — operator-এর কাজ। ডান পাশ throw করতে পারলে short-circuit order গুরুত্বপূর্ণ — আগে null check, তারপর dereference।",
    wrong: "String == দিয়ে তুলনা করলে text নয় reference তুলনা হয় — interned literal-এর জন্য 'কাজ করছে' মনেও হতে পারে। String সবসময় .equals() দিয়ে তুলনা, strings পাঠ যেমন প্রমাণ করে।",
  },
  "l4-jv-control": {
    why: "Java-তে if/switch/loop সব জায়গার মতোই classification-এর দায়িত্ব বহন করে — switch expression আর enhanced for loop-সহ যা রায়ের code ছোট আর নিরাপদ করে।",
    output: "Switch default arm দিয়ে 404-এর জন্য 'not found' ছেপেছে; enhanced for প্রতিটি port একবার গিয়ে 2 risky গুনেছে; while loop bound পর্যন্ত retry করে attempt সৎভাবে জানিয়েছে।",
    job: "Java service-এ request routing, status handling, retry logic — control flow। Index না লাগলে enhanced for index bug সরিয়ে দেয় — পছন্দ করো।",
    wrong: "ব্যর্থ service-এর বিরুদ্ধে unbounded while retry নিজের-তৈরি denial of service হয়ে যায়। প্রতিটি retry loop-এ bound লাগে, production-এ delay-ও।",
  },
  "l4-jv-arrays": {
    why: "Java array fixed-size, typed, runtime-এ bounds-checked — ভাষা C-এর স্বাধীনতার বদলে নিরাপত্তা নিয়েছে: range-এর বাইরের index memory corruption-এর বদলে throw করে।",
    output: "Ports array যোগ হয়েছে 3934; loop max 3389 পেয়েছে; index 5 access করলে adjacent memory পড়ার বদলে ArrayIndexOutOfBoundsException throw হতো — exception-টাই security feature।",
    job: "Java কী রক্ষা করে (আর তার খরচ) বোঝাই enterprise platform পছন্দ ব্যাখ্যা করে — আর কেন C codebase-এ Java যা automatically করে সেই manual check লাগে।",
    wrong: "Array sorted বা তোমার data-র মাপের ধরে নিলে logic নীরবে ভুল পড়ে। .length check করো, order গুরুত্বপূর্ণ হলে স্পষ্টভাবে sort করো, আর testing-এ exception-কে bug প্রকাশ করতে দাও।",
  },
  "l4-jv-strings": {
    why: "Java string immutable object: == identity তুলনা করে, equals() content তুলনা করে, আর প্রতিটি 'পরিবর্তন' নতুন string বানায়। এই এক সত্যই Java bug-এর এক বিখ্যাত পরিবার ব্যাখ্যা করে।",
    output: "a == b false ছেপেছে যেখানে a.equals(b) true ছেপেছে — অভিন্ন text-সহ দুটো আলাদা object। substring(5,10) 'rahim' বের করেছে, আর log line-এর split এমন field বানিয়েছে যা code অর্থ অনুযায়ী index করতে পারে।",
    job: "Java-তে log parsing, input validation, token handling — string কাজ। Loop-এ StringBuilder হলো performance অভ্যাস; equals() হলো correctness অভ্যাস।",
    wrong: "বড় loop-এর ভেতরে += দিয়ে string বানালে হাজার হাজার মৃত object allocate হয়। StringBuilder ঠিক এই জন্যই আছে — loop-এর ভেতরে compiler বাঁচাতে পারে না।",
  },
  "l4-jv-methods": {
    why: "Method একটা সিদ্ধান্ত package করে: typed input, এক return, variant-এর জন্য overloading। Method হিসেবে Test-RiskyPort Python আর C-এর একই function ধারণা — Java প্রতিটি call-এ compile-time type checking যোগ করে।",
    output: "isRisky(23) true আর isRisky(443) false ফেরত দিয়েছে set membership test থেকে; overloaded verdict method labelled রূপ ছেপেছে; method-এর local counter কখনো main-এ ফাঁস হয়নি — scope compiler দিয়ে enforced।",
    job: "Service code হলো method-এর method call; unit test method-কে target করে। ছোট, typed, single-purpose method লেখাই Java code-কে enterprise scale-এ reviewable করে।",
    wrong: "Print-ও করে return-ও দেয় এমন method PowerShell-ধাঁচের output বিভ্রান্তি উল্টোভাবে ডাকে — Java-তে return value-ই চুক্তি; display প্রান্তে রাখো।",
  },
  "l4-jv-oop1": {
    why: "Class state-কে তাকে রক্ষাকারী operation-এর সঙ্গে bundle করে: field, valid state প্রতিষ্ঠাকারী constructor, তা বজায় রাখা method। Encapsulation এখান থেকে শুরু — private field, public behaviour।",
    output: "দুটো Scan object স্বাধীন state রেখেছে — একটার count অন্যটাকে কখনো ছোঁয়নি; constructor জন্মেই host আর port set করেছে যাতে কোনো object অর্ধ-বৈধ state-এ না থাকে; describe() method নিজের field পড়েছে।",
    job: "প্রতিটি Java framework (Spring, Android) lifecycle নিয়মসহ class আর object। Finding, user, session-কে class হিসেবে model করা দৈনন্দিন enterprise pattern।",
    wrong: "Field 'সুবিধার জন্য' public করলে যেকোনো code object-কে অসম্ভব state-এ ফেলতে পারে। Private field + method আচার নয় — এটাই integrity সীমানা।",
  },
  "l4-jv-oop2": {
    why: "Inheritance hierarchy বরাবর behaviour ভাগ করে; method overriding তা বিশেষায়িত করে; super parent-এর সংস্করণে পৌঁছায়। Parent type দিয়ে polymorphism-ই framework-কে extensible করে।",
    output: "সাধারণ Check আর PortCheck দুটোই একই parent-typed variable দিয়ে check()-এর উত্তর দিয়েছে — JVM runtime-এ overriding method-এ dispatch করেছে; PortCheck-এর super call নিজের লাইন যোগের আগে parent-এর লাইন পুনঃব্যবহার করেছে।",
    job: "Plugin architecture, test double, framework callback — polymorphism। Security review dispatch অনুসরণ করে: যেই code চলে তা override, declaration নয়।",
    wrong: "গভীর inheritance tree (5+ স্তর) অপাঠ্য dispatch ধাঁধা হয়ে যায়। এক-দুই স্তরের বেশি হলে composition পছন্দ করো — object-এর ভেতরে object।",
  },
  "l4-jv-oop3": {
    why: "Interface হলো implementation ছাড়া চুক্তি: class behaviour-এর প্রতিশ্রুতি দেয়, caller শুধু প্রতিশ্রুতির ওপর নির্ভর করে। Abstract class মাঝখানে — ভাগ করা state + চুক্তি।",
    output: "Scannable object-এর ArrayList এক loop-এ TCP আর UDP check চালিয়েছে — caller concrete class কখনো জানেনি; implementation বদলালে loop না ছুঁয়েই behaviour বদলেছে।",
    job: "Dependency injection, test-এ mocking, API design — interface কাজ। Security tool এভাবেই তৈরি: এক scanner interface, অনেক check implementation।",
    wrong: "সর্বত্র concrete class-এর ওপর program করলে প্রতিটি পরিবর্তন ঢেউ তোলে। Interface-এর ওপর নির্ভর করো; construction-কে implementation বাছতে দাও।",
  },
  "l4-jv-exceptions": {
    why: "Exception হলো Java-র error channel: try/catch/finally, compiler যা handle করতে বাধ্য করে সেই checked exception, আর domain-এর ব্যর্থতার নাম দেওয়া custom type।",
    output: "'http' parse NumberFormatException throw করেছে, catch ব্যর্থতা record করে পরের মান নিয়ে এগিয়েছে — একটা খারাপ record batch কখনো থামায়নি; finally সফল আর ব্যর্থ দুই পথেই তার লাইন ছেপেছে।",
    job: "Resilient service হলো exception design: কী catch করবে, কী log করবে, কী propagate করবে। Exception ব্যাপকভাবে catch করে নীরবে গিলে ফেলা auditor সবার আগে flag করা anti-pattern।",
    wrong: "খালি catch block ব্যর্থতা অদৃশ্য করে — program data ফেলতে ফেলতে 'কাজ করে'। অন্তত log করো; সাধারণত rethrow করো বা domain exception-এ রূপ দাও।",
  },
  "l4-jv-collections": {
    why: "List, Set, Map হলো কাজের data structure: ordered sequence, uniqueness, key lookup। অভ্যাসে নয় access pattern অনুযায়ী বাছাই দক্ষতা; generics তাদের type-safe রাখে।",
    output: "HashSet প্রতিটি finding একবার ছেপেছে যদিও দুবার add হয়েছিল — set uniqueness enforce করেছে; HashMap get key অনুযায়ী count ফেরত দিয়েছে; ArrayList report-এর জন্য insertion order রেখেছে।",
    job: "আসল system-এ findings store, session map, cache, queue — collection। HashMap O(1) lookup আর ArrayList ordered জানা interview-আর-audit জ্ঞান।",
    wrong: "Uniqueness গুরুত্বপূর্ণ জায়গায় List ব্যবহার করলে duplicate tally বিষাক্ত করে — bash-এ sort | uniq ভুলে যাওয়ার একই bug। Data structure পছন্দই correctness।",
  },
  "l4-jv-generics": {
    why: "Generics type error runtime থেকে compile time-এ সরায়: Box<Integer> string ধরতে পারে না, আর compiler তা প্রমাণ করে। Type parameter হলো compiler বিনামূল্যে enforce করা চুক্তি।",
    output: "Generic Box cast ছাড়াই Integer জমা রেখে ফেরত দিয়েছে; generic method Integer array আর String array দুটোতেই matching element গুনেছে — এক implementation, দুটোর জন্যই compiler-checked।",
    job: "API আর library generic; <T extends Comparable> সাবলীলভাবে পড়া আধুনিক Java code review আর framework signature বোঝার জন্য জরুরি।",
    wrong: "Raw type (List, <> ছাড়া) compiler চুপ করিয়ে runtime-এ ClassCastException ফিরিয়ে আনে — feature-টা যে pre-generics bug আটকাতে এসেছে সেটাই।",
  },
  "l4-jv-lambdas": {
    why: "Lambda আর stream transformation ঘোষণামূলকভাবে প্রকাশ করে: filter, map, collect। Bash আর PowerShell-এর একই pipeline চিন্তা, Java-র ভেতরে — data প্রবাহিত হয়, stage transform করে।",
    output: "Stream port filter করে risky=[23, 3389] করেছে আর 1000-এর বেশি port 1 গুনেছে — একটাও স্পষ্ট loop বা temporary list ছাড়াই filter/map/count compose হয়েছে।",
    job: "আধুনিক Java codebase stream-ভারী; বিশেষ করে log আর event processing। Stream সাবলীলভাবে পড়া মানে সমসাময়িক enterprise Java পড়া।",
    wrong: "Stream stage-এর ভেতরে side effect (ভাগ করা state বদলানো) parallel stream-এ ভাঙে। Stage pure রাখো; বদলে result collect করো।",
  },
  "l4-jv-files": {
    why: "java.nio.file (Files, Path) হলো আধুনিক file API: ছোট file-এর জন্য readAllLines, বড়র জন্য BufferedReader stream, আর compiler-enforced IOException handling।",
    output: "Program Files.write দিয়ে তিন লাইন লিখে ফিরে পড়েছে আর 2 failure গুনেছে — Path object location বহন করেছে, আর try-with-resources প্রতিটি পথে reader close করেছে।",
    job: "Java service-এ log processing, report তৈরি, evidence handling — file কাজ; try-with-resources হলো reviewer-প্রত্যাশিত resource-safety idiom।",
    wrong: "Writer close করতে ভুললে buffered data disk-এ কখনো পৌঁছাতে নাও পারে — file খালি দেখায় আর 'bug' হলো missing close। try-with-resources closing-কে structural করে, মনে-রাখা নয়।",
  },
  "l4-jv-security": {
    why: "Java-র security-প্রাসঙ্গিক অভ্যাস: boundary-তে validate করো, query parameterise করো (কখনো SQL concatenate নয়), আসল KDF দিয়ে hash করো, আর untrusted data-র deserialization-কে বিপজ্জনক মনে করো।",
    output: "Validator খারাপ port প্রত্যাখ্যান করে 443 স্পষ্ট কারণসহ গ্রহণ করেছে; sample-এর MessageDigest SHA-256 জানা pattern-এর সঙ্গে মিলেছে — hex-encoded, deterministic, দ্বিতীয় implementation দিয়ে যাচাইযোগ্য।",
    job: "OWASP-এর Java guidance-ই এই পাঠ: string-বানানো query দিয়ে injection, unsafe deserialization, দুর্বল hashing — বারবার আসা enterprise finding।",
    wrong: "User input SQL string-এ concatenate করলেই পৃথিবীর সবচেয়ে সাধারণ enterprise ভাষায় injection vulnerability লিখে ফেললে। PreparedStatement মানকে data হিসেবে bind করে — সবসময়।",
  },
};

export const WHY_JSM_BN: Record<string, WhyEntry> = {
  "l4-jsm-types": {
    why: "JavaScript type dynamic আর coercive: == তুলনার আগে convert করে, মানের truthiness আছে, আর typeof null আর array নিয়ে মিথ্যা বলে। Browser-এর ভাষা তাদেরই পুরস্কৃত করে যারা মান আসলে কী তা ঠিক জানে।",
    output: "typeof প্রত্যাশিতমতো number/string ছেপেছে; '5' == 5 true কিন্তু '5' === 5 false — === conversion এড়ায়; '5' + 1 দিয়েছে '51' (string জেতে) যেখানে '5' - 1 দিয়েছে 4 (subtraction সংখ্যা বাধ্য করে); '0' string truthy ছিল।",
    job: "প্রতিটি web vulnerability class (XSS, prototype pollution, loose comparison দিয়ে auth bypass) এই semantics থেকে শুরু। JS-এর security review-তে coercion সাবলীলতা লাগে।",
    wrong: "User input-এর বিরুদ্ধে == ব্যবহার করলে '0' == false ধাঁচের চমক check bypass করে। সর্বত্র ===, boundary-তে স্পষ্ট Number()/String() conversion।",
  },
  "l4-jsm-control": {
    why: "if/switch/loop browser-এ অন্য ভাষার মতোই মান classify করে — JS twist-সহ: switch === ব্যবহার করে, আর for...of মান iterate করে যেখানে for...in key iterate করে।",
    output: "classify প্রতিটি status-এর সঠিক label ছেপেছে; switch 404-কে কঠোরভাবে তার case-এ মিলিয়েছে; for...of port যোগ করে মানের ওপর 10 করেছে — কোথাও index arithmetic নেই।",
    job: "Form validation, UI state machine, client-side routing — control flow। Index loop-এর বদলে for...of বাছা এক পুরো bug পরিবার সরায়।",
    wrong: "Array-র ওপর for...in string key (আর inherited-ও) iterate করে — classic সূক্ষ্ম bug। Array-র জন্য for...of; object-এর জন্য Object.entries/keys।",
  },
  "l4-jsm-functions": {
    why: "JavaScript-এ function হলো মান: callback হিসেবে পাঠানো, function থেকে ফেরত, variable-এ জমা। Closure — জন্ম-scope মনে রাখা function — private state আর ভাষার অর্ধেক pattern চালায়।",
    output: "Counter closure call জুড়ে 1 2 3 ছেপেছে কারণ count enclosing scope-এ বেঁচে ছিল; forEach প্রতি port-এ verdict function প্রয়োগ করেছে; arrow function block ছাড়াই তার expression ফেরত দিয়েছে।",
    job: "Event handler, array pipeline, module pattern — closure আর callback। Closure কী capture করে বোঝাই বেশিরভাগ 'অসম্ভব' JS bug ব্যাখ্যা করে।",
    wrong: "var-declared variable-এর ওপর closure বানানো loop একটা shared binding capture করে — প্রতিটি callback শেষ মান দেখে। let প্রতি iteration-এ নিজের binding দেয়।",
  },
  "l4-jsm-arrays": {
    why: "map/filter/reduce হলো array pipeline: transform, select, accumulate — stream আর shell-এর একই তিন move। Non-mutating method data অনুমানযোগ্য রাখে; sort-এর default একটা ফাঁদ।",
    output: "filter risky port 3389 আর 23 রেখেছে; map প্রতিটির label করেছে; reduce যোগ করে 3957; (a,b)=>a-b-সহ numeric sort 22, 23, 80, 443, 3389 সাজিয়েছে যেখানে default string sort তাদের এলোমেলো করত।",
    job: "Data rendering, log viewer, client-side analytics — array pipeline। Non-mutating method (toSorted, spread copy) বাছা action-at-a-distance bug আটকায়।",
    wrong: "Comparator ছাড়া sort() string হিসেবে সাজায়: 443, 80-র আগে। প্রতিটি numeric sort-এ (a, b) => a - b লাগে — interview আর audit-এর সবচেয়ে বেশি ধরা JS footgun।",
  },
  "l4-jsm-objects": {
    why: "Object হলো key-value record আর JSON-এর নিজের আকার। Destructuring, spread, Object method হলো JS code যেভাবে অনুষ্ঠান ছাড়াই structured data পাঠায়।",
    output: "JSON.stringify তারপর parse সমান record বানিয়েছে (round trip true); missing key undefined পড়েছে — 'unassigned'; destructuring এক লাইনে নাম ধরে host আর port টেনেছে।",
    job: "API payload, config, state — object। Destructuring আর spread সাবলীলভাবে পড়া মানে আধুনিক JS পড়া; validation logic-এ undefined-vs-absent গুরুত্বপূর্ণ।",
    wrong: "পাওয়া object (props, payload) mutate করলে মালিকের data নীরবে বদলে যায়। বদলানোর আগে spread-copy করো — অভ্যাসে immutability।",
  },
  "l4-jsm-dom": {
    why: "DOM হলো object tree হিসেবে page: querySelector node খোঁজে, textContent নিরাপদে text লেখে, createElement structure বানায়। এখানেই JS user-কে ছোঁয় — আর এখানেই XSS বাঁচে বা মরে।",
    output: "Page heading, verdict list item, count line render করেছে — createElement আর textContent দিয়ে বানানো, তাই data-র '<' কখনো markup হতে পারেনি।",
    job: "প্রতিটি web app আর প্রতিটি DOM-XSS audit এই API। textContent বনাম innerHTML frontend code-এর সবচেয়ে security-প্রাসঙ্গিক একক পছন্দ।",
    wrong: "User data-সহ innerHTML তাকে markup হিসেবে parse করে — script, event handler, সবই। textContent data-কে text মনে করে। textContent default করো; innerHTML ব্যতিক্রম অর্জন করো।",
  },
  "l4-jsm-events": {
    why: "Event হলো browser-এর input channel: click, key, submit। addEventListener behaviour যুক্ত করে; preventDefault আর delegation হলো পেশাদার pattern।",
    output: "Port button-এ click তার verdict line ছেপেছে; delegated list handler পরে যোগ হওয়া item-এর জন্যও উত্তর দিয়েছে — parent-এ এক listener, event.target child চিনিয়েছে।",
    job: "Interactive tool, game, security dashboard — event-driven। Delegation dynamic list দ্রুত আর সরল রাখে; listener সরানো long-lived page-এ leak আটকায়।",
    wrong: "10,000-row table-এ প্রতি row-তে listener যুক্ত করলে page হাঁপায়। Container-এ delegate করো — এক listener, প্রতিটি row।",
  },
  "l4-jsm-async": {
    why: "JavaScript single-threaded, event loop-সহ: async/await promise-এর ওপর sequential-দেখতে code লেখে, আর Promise.all স্বাধীন কাজ concurrently চালায়। Order guarantee-ই সূক্ষ্ম অংশ।",
    output: "যাচাই করা order: start, lab-web line, Promise.all line (ফলাফল INPUT order-এ a তারপর b, completion order-এ নয়), handled rejection, তারপর end — await শুধু নিজের function থামিয়েছে যেখানে বাকি program চলেছে।",
    job: "Browser-এ fetch call, dashboard, scanner — async code। কী কখন চলে — আর Promise.all input order রক্ষা করে — জানা race-condition bug আটকায়।",
    wrong: "await ভুলে গেলে value-র বদলে Promise object log হয়; catch ভুলে গেলে rejection production-এ নীরবে ব্যর্থ unhandled promise rejection হয়।",
  },
  "l4-jsm-es6": {
    why: "আধুনিক JS (ES6+) হলো codebase আসলে যেই dialect ব্যবহার করে: const/let, template literal, destructuring, spread/rest, Map/Set, module। শুধু legacy var-only code পড়া যথেষ্ট নয়।",
    output: "Template literal verdict line interpolate করেছে; destructuring first/rest 22 আর 443,80 আলাদা করেছে; Set duplicate add-এর পর size 2 জানিয়েছে; Map 2 key গুনেছে — প্রতিটি feature ঠিক একটা পরিষ্কার কাজ করেছে।",
    job: "Framework, build tool, আধুনিক library ES6 সাবলীলতা ধরে নেয়। Key arbitrary হলে বা uniqueness গুরুত্বপূর্ণ হলে Map/Set object/array-কে হারায়।",
    wrong: "2026-এর code-এ var legacy pattern-এর সংকেত — function scope আর hoisting চমকসহ। Default const, আসল reassignment-এ let, var কখনো নয়।",
  },
  "l4-jsm-security": {
    why: "Client-side security hygiene: output escape করো, string surgery-র বদলে URL API দিয়ে URL parse করো, parameter encode করো, আর নিজের page থেকে এলো বলেই data বিশ্বাস করো না।",
    output: "Escaper script tag-কে নিষ্ক্রিয় entity বানিয়েছে (&lt;script&gt;...); new URL পুরো string থেকে host example.com আর protocol https: parse করেছে; encodeURIComponent user name-এর space আর & encode করেছে যাতে তা parameter থেকে বেরোতে না পারে।",
    job: "DOM XSS, open redirect, parameter smuggling ঠিক এই লাইনগুলোতে আটকায়। Sanitisation library সাহায্য করে, কিন্তু safe-API অভ্যাসই ভিত্তি।",
    wrong: "কাঁচা user input দিয়ে URL string-concatenate করলে মানের & বা # request-এর অর্থ পুনর্লেখে। URL + searchParams, অথবা প্রতি মানে encodeURIComponent — সবসময়।",
  },
};

export const WHY_SHM_BN: Record<string, WhyEntry> = {
  "l4-shm-bash-vars": {
    why: "Shell variable হলো sharp edge-সহ untyped text: expansion, quoting, exit code ঠিক করে script সঠিক file-এ কাজ করে কিনা। Automation-এর correctness এখান থেকে শুরু।",
    output: "Quoted \"$name\" 'lab web' এক মান হিসেবে ছেপেছে; brace form report_2026.txt সঠিকভাবে বানিয়েছে যেখানে unbraced form report.txt-তে ভেঙেছে (suffix ফাঁদ); exit code false-এর জন্য 1 আর true-এর জন্য 0 ছেপেছে।",
    job: "প্রতিটি cron job, deploy script, incident one-liner এই mechanics ব্যবহার করে। Quoting অভ্যাসই tool আর footgun-এর পার্থক্য।",
    wrong: "rm -rf $dir/-তে unquoted খালি variable ভুল tree মুছে দেয়। Expansion quote করো, [ -n \"$dir\" ] দিয়ে test করো, আর set -u-কে unset case ধরতে দাও।",
  },
  "l4-shm-bash-pipes": {
    why: "Pipe ছোট tool-কে analysis-এ compose করে: প্রতিটি stage একটা কাজ করে (select, extract, tally), আর stderr আলাদা channel থাকে যাতে data আর diagnostic কখনো না মেশে।",
    output: "Pipeline total 4 আর fail 3 ছেপেছে; uniq -c '2 fail rahim' আর '1 fail admin' tally করেছে — sorted input অভিন্ন লাইন পাশাপাশি করেছে যাতে counter তাদের group করতে পারে।",
    job: "Log triage, বেশিরভাগ investigation-এর প্রথম ঘণ্টা, হুবহু এই composition। সাবলীলভাবে pipe করা analyst সেকেন্ডে সেই প্রশ্নের উত্তর দেয় যাতে অন্যের spreadsheet লাগে।",
    wrong: "Unsorted data uniq-তে pipe করলে duplicate আলাদা group-এ টিকে যায় — uniq শুধু পাশাপাশি duplicate ভাঙে। আগে সবসময় sort।",
  },
  "l4-shm-bash-control": {
    why: "if/case আর [ ] test script-কে বিচার দেয়: service classify করো, file test করো, range-এ branch করো। Control flow-ই command তালিকাকে tool বানায়।",
    output: "যাচাই করা order ছেপেছে telnet (case match), name ([ ] string test), risky service, auth.txt exists ([ -f ]), well-known port range — প্রতিটি branch তার বলা কারণে নেওয়া।",
    job: "Health check, installer, hardening script — system state-এর ওপর branch। মান dispatch-এ case elif chain-এর চেয়ে পরিষ্কার পড়ে আর reviewer-প্রত্যাশিত idiom।",
    wrong: "File path value operator দিয়ে test করলে (=, -f নয়) script filesystem নয় string test করে — নীরব ভুল উত্তর। Test-কে type-এর সঙ্গে মেলাও।",
  },
  "l4-shm-bash-loops": {
    why: "Loop একটা বিচার অনেক target-এ প্রয়োগ করে — port, host, file — আর function বিচারটা package করে। total/retries/tally হলো loop accumulator, reduce-এর shell রূপ।",
    output: "Loop attempt যোগ করে total=8 করেছে, ব্যর্থ check তিনবার retry করেছে, fail 3 গুনেছে, আর verdict function থেকে 'port 443: ok' ছেপেছে — substitution function-এর output লাইনে বসিয়েছে।",
    job: "Fleet check আর batch processing হলো inventory-র ওপর loop। Counter-সহ bounded retry পেশাদার রূপ; unbounded একটা outage।",
    wrong: "Function তার definition-এর আগে call করলে bash runtime-এ 'command not found' বলে — compiled ভাষার মতো নয়, definition file-এ ব্যবহারের আগে থাকতে হবে।",
  },
  "l4-shm-bash-text": {
    why: "grep/awk/sed হলো text-processing core: লাইন select, field নিয়ে কাজ, নিরাপদে substitute। Log analysis সাবলীলতা হলো এই তিন tool pipe শৃঙ্খলাসহ compose করা।",
    output: "awk field অনুযায়ী fail user admin 1 / rahim 2 tally করেছে; fail count 3 ছেপেছে; sed shared লাইনে IP mask করেছে; unique IP sort -u-র পর 2 গুনেছে।",
    job: "Threat hunting, report তৈরি, share করার জন্য data masking — text-tool কাজ। Share করার আগে masking পেশাদার বাধ্যবাধকতা, সৌজন্য নয়।",
    wrong: "IP pattern-এ unescaped '.' যেকোনো character match করে — 203x0y113-ও মেলে। Data pattern-এ metacharacter escape করো, অথবা fixed-string grep -F ব্যবহার করো।",
  },
  "l4-shm-bash-files": {
    why: "chmod/find/stat হলো permission আর discovery: octal bit ঠিক করে কে evidence পড়তে পারে, find predicate দিয়ে artefact খোঁজে, আর strict mode script সৎ রাখে।",
    output: "chmod 640 -rw-r----- বানিয়েছে আর stat octal: 640 ছেপেছে find ফলাফল আর ls listing-এর মাঝে — owner rw, group r, other none, ঠিক 4+2 / 4 / 0 bit যা বর্ণনা করে।",
    job: "Evidence handling, hardening, artefact hunt — file operation। cp -a evidence-এর জন্য attribute রক্ষা করে; world-writable finding find -perm থেকে আসে।",
    wrong: "'কাজ করাতে' chmod 777 permission bug-কে security finding বানায়। দরকারি triad নির্ণয় করে ঠিক সেটাই set করো।",
  },
  "l4-shm-ps-basics": {
    why: "PowerShell-এর এক বড় ধারণা: pipeline text নয়, নামকরা property-সহ object বহন করে। Property দিয়ে filter field-গণনার বদলি, আর Get-Member যেকোনো object কী দেয় তা প্রকাশ করে।",
    output: "Where-Object property দিয়ে risky service রেখেছে; Sort-Object port সংখ্যাগতভাবে সাজিয়েছে (22, 23, 443) কারণ Port একটা number; subexpression $($services.Count) string-এর ভেতরে evaluate হয়েছে।",
    job: "Windows administration আর DFIR হলো PowerShell কাজ। Object সাবলীলতাই Windows log আর service state-কে export আর spreadsheet ছাড়াই queryable করে।",
    wrong: "Pipeline-এর মাঝে Format-Table পরের প্রতিটি stage-এর জন্য object ধ্বংস করে। শুধু শেষে format করো, মানুষের চোখের জন্য।",
  },
  "l4-shm-ps-control": {
    why: "if/foreach/switch আর param() function check-কে পুনঃব্যবহারযোগ্য tool-এ package করে — output-stream নিয়ম ঠিক করে function আসলে কী ফেরত দেয়।",
    output: "Test-RiskyPort আসল boolean ফেরত দিয়েছে যা if সরাসরি গ্রহণ করেছে; foreach 21, 22, 443 ক্রমে গেছে; counter function-এর একক return তার ফল scalar রেখেছে — কোনো বিপথগামী output তা দূষিত করেনি।",
    job: "Admin tooling হলো typed parameter আর -WhatIf নিরাপত্তাসহ function। বিপথগামী-output ফাঁদ সবচেয়ে সাধারণ আসল-জগতের PowerShell bug — এই পাঠ তার টিকা দেয়।",
    wrong: "Function-এর ভেতরে ভুলে যাওয়া একটা Get-Date লাইন তার 'return value'-কে array বানিয়ে নিচের তুলনা রহস্যজনকভাবে ভাঙে। Function output-pure রাখো।",
  },
  "l4-shm-ps-files": {
    why: "Import-Csv আর ConvertFrom-Json boundary-তে file-কে object বানায়, তাই pipeline-এর filter/group/sort যন্ত্র প্রযোজ্য হয় — text scraping-এর object উত্তর।",
    output: "Select-String match object হিসেবে গুনেছে; Group-Object User property দিয়ে rahim 2 / karim 1 tally করেছে; CSV round trip header property হিসেবে রক্ষা করেছে; JSON -Compress-সহ এক লাইনে emit হয়েছে।",
    job: "Windows event export, API response, tool output — CSV/JSON। একবার import-এ convert করে object নিয়ে কাজ করা পেশাদার pattern।",
    wrong: "-Depth ছাড়া ConvertTo-Json বৈধ দেখতে থেকেও nested data depth 2-তে নীরবে truncate করে। Depth একটা correctness parameter — ইচ্ছাকৃতভাবে set করো।",
  },
  "l4-shm-security": {
    why: "Capstone পুরো track-কে আসল hunt-এ compose করে — select, extract, tally, threshold, রায় — দুই shell-এই, সাথে hardening check আর automation-কে বিশ্বাসযোগ্য করা নিরাপত্তা নিয়ম।",
    output: "এক log দুটো tally দিয়েছে: user অনুযায়ী (rahim 3, admin 1) আর IP অনুযায়ী (203.0.113.44, 4-সহ) — IP view user view যা ছড়িয়ে দিয়েছিল তা প্রকাশ করেছে; threshold check count-কে রায়ের লাইনে রূপ দিয়েছে।",
    job: "এটা আক্ষরিকভাবে incident response আর threat hunting-এর প্রথম ঘণ্টা। দুই shell-এ একই hunt মানে evidence যেই OS-এই থাকুক analyst কখনো আটকায় না।",
    wrong: "'নিরাপদের জন্য' root হিসেবে hunt চালালে quoting bug system compromise হয়। Least privilege, quoted expansion, validated input — নিরাপত্তা নিয়মই পাঠ।",
  },
};
