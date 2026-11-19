// Exercise starter code for the Level 4 JavaScript mastery lessons (13).
//
// Same contract as exercise-py.ts: each starter is the lesson's own
// guided-lab task as real code — setup given, key step marked TODO, and
// the program RUNS exactly as shipped. JavaScript runs FOR REAL in the
// browser sandbox, so every starter is console-based and deterministic
// (the DOM/page lessons exercise their rendering logic as the pure
// string-building the page itself performs, with the page step named in
// the comments). Every `output` was captured by actually running the
// starter under Node at build time.

import type { PlayCode } from "./Playground";

export const EXERCISE_JS: Record<string, PlayCode> = {
  "l4-js-basics": {
    lang: "javascript",
    title: "exercise_greeter_text.js — the lab task from this lesson, as code",
    code: `// Exercise: the greeter's core logic, runnable here. In the lesson
// page, textContent shows the name AS TEXT - this is the exact string
// the page displays. Run it with the hostile marker and watch the
// marker stay literal characters: nothing parses, nothing runs.
function greetText(name) {
  const clean = name.trim();
  if (clean === "") return "Please type a name first.";
  return "Hello, " + clean + " — shown as text, never as HTML.";
}

console.log(greetText("Nadia"));
console.log(greetText("<img src=x onerror=alert(1)>"));
// TODO: in your LOCAL copy of greeter.html, swap textContent for
// innerHTML and re-run the marker - watch the difference, then
// revert. Local file only, ever. Write here what changed:`,
    output: `Hello, Nadia — shown as text, never as HTML.
Hello, <img src=x onerror=alert(1)> — shown as text, never as HTML.`,
  },

  "l4-jsm-types": {
    lang: "javascript",
    title: "exercise_convert_port.js — the lab task from this lesson, as code",
    code: `// Exercise: convert the string "8080" with Number(), test it with
// ===, and print a verdict line via a template literal.
const raw = "8080";
const port = 0;   // TODO: Number(raw)

console.log("type of raw:", typeof raw, "| type of port:", typeof port);
console.log("strict equal to 8080?", port === 8080);
// TODO: print the verdict with a template literal:
// \`port \${port} is \${port === 8080 ? "accepted" : "rejected"}\``,
    output: `type of raw: string | type of port: number
strict equal to 8080? false`,
  },

  "l4-jsm-control": {
    lang: "javascript",
    title: "exercise_status_switch.js — the lab task from this lesson, as code",
    code: `// Exercise: classify() is given (as in the lesson) - now write a
// switch for 200/301/403/404/500 with a default.
function classify(port) {
  if (port === 22 || port === 443) return "standard";
  if (port === 23 || port === 3389) return "risky";
  if (port >= 49152) return "ephemeral";
  return "other";
}
console.log(23, "->", classify(23));

function describe(code) {
  // TODO: switch (code) { case 200: return "OK"; case 301: return
  // "redirect"; case 403: return "refused"; case 404: return
  // "not found"; case 500: return "server error"; default: ... }
  return "TODO";
}
for (const c of [200, 301, 403, 404, 500, 418]) console.log(c, "->", describe(c));`,
    output: `23 -> risky
200 -> TODO
301 -> TODO
403 -> TODO
404 -> TODO
500 -> TODO
418 -> TODO`,
  },

  "l4-jsm-functions": {
    lang: "javascript",
    title: "exercise_threshold.js — the lab task from this lesson, as code",
    code: `// Exercise: build makeThreshold(limit) returning
// (attempts) => attempts >= limit, and test two thresholds.
function makeThreshold(limit) {
  // TODO: return the arrow function (attempts) => attempts >= limit;
  return () => false;   // placeholder - every test fails until you fix it
}

const warnAt5 = makeThreshold(5);
const alertAt10 = makeThreshold(10);
console.log("7 attempts, warn at 5?", warnAt5(7));
console.log("7 attempts, alert at 10?", alertAt10(7));
console.log("12 attempts, alert at 10?", alertAt10(12));`,
    output: `7 attempts, warn at 5? false
7 attempts, alert at 10? false
12 attempts, alert at 10? false`,
  },

  "l4-jsm-arrays": {
    lang: "javascript",
    title: "exercise_port_sums.js — the lab task from this lesson, as code",
    code: `// Exercise: from [22, 80, 443, 23, 3389, 53] produce the sorted
// risky ports and the sum of the standard ones (< 1024, not risky).
const ports = [22, 80, 443, 23, 3389, 53];
const isRisky = (p) => p === 23 || p === 3389;

const risky = ports.filter(isRisky).sort((a, b) => a - b);
console.log("risky sorted:", risky.join(", "));

// TODO: const standardSum = ports
//   .filter((p) => p < 1024 && !isRisky(p))
//   .reduce((acc, p) => acc + p, 0);
// then print it - check by hand: 22 + 80 + 443 + 53.
console.log("standard sum: TODO");`,
    output: `risky sorted: 23, 3389
standard sum: TODO`,
  },

  "l4-jsm-objects": {
    lang: "javascript",
    title: "exercise_merge_config.js — the lab task from this lesson, as code",
    code: `// Exercise: merge a defaults object and an overrides object with
// spread, then state which value won and why (later spread wins).
const defaults = { timeout: 5, retries: 2, verbose: false };
const overrides = { retries: 4 };

const config = { ...defaults };   // TODO: add ...overrides AFTER the defaults
console.log("timeout:", config.timeout, "| retries:", config.retries, "| verbose:", config.verbose);
console.log("defaults untouched:", defaults.retries === 2);`,
    output: `timeout: 5 | retries: 2 | verbose: false
defaults untouched: true`,
  },

  "l4-javascript-browser": {
    lang: "javascript",
    title: "exercise_safe_render.js — the lab task from this lesson, as code",
    code: `// Exercise: 'DOM Safety' - the safe-rendering half, runnable here.
// A page shows untrusted text two ways: textContent (always safe)
// or innerHTML (parses markup - unsafe). Model both on this hostile
// hostname and compare the strings.
const hostile = '<img src=x onerror=alert(1)>';

// What textContent displays: the string itself, character for character.
console.log("via textContent, the page shows:", hostile);

// What innerHTML would need first: every markup char escaped to text.
function escapeHtml(text) {
  // TODO: replaceAll & first, then < > and " - the security lesson
  // shows the full chain; write it here from the lesson.
  return text;
}
console.log("escaped for HTML strings:", escapeHtml(hostile));
console.log("Same characters - one is data, the other would be code.");`,
    output: `via textContent, the page shows: <img src=x onerror=alert(1)>
escaped for HTML strings: <img src=x onerror=alert(1)>
Same characters - one is data, the other would be code.`,
  },

  "l4-jsm-dom": {
    lang: "javascript",
    title: "exercise_render_findings.js — the lab task from this lesson, as code",
    code: `// Exercise: render three findings with the lesson's pattern and
// add .alert to the risky one. Here the rendering logic runs as the
// pure string each <li> would carry - paste the same loop into your
// page (with document.createElement + textContent) for the real DOM.
const findings = [
  { host: "lab-web", port: 443, verdict: "ok" },
  { host: "lab-old", port: 23, verdict: "RISKY" },
  { host: "lab-db", port: 22, verdict: "ok" },
];

for (const f of findings) {
  const text = \`\${f.host}:\${f.port} — \${f.verdict}\`;   // li.textContent in the page
  const cls = f.verdict === "RISKY" ? " class=alert" : "";
  console.log(\`<li\${cls}>\${text}</li>\`);
}
console.log(findings.length + " findings");   // the #count paragraph in the page`,
    output: `<li>lab-web:443 — ok</li>
<li class=alert>lab-old:23 — RISKY</li>
<li>lab-db:22 — ok</li>
3 findings`,
  },

  "l4-jsm-events": {
    lang: "javascript",
    title: "exercise_delegation.js — the lab task from this lesson, as code",
    code: `// Exercise: delegation logic, runnable here. In your page, ONE
// listener on the list serves every row - this is the exact decision
// that listener makes, modelled on the click targets it receives.
const rows = [
  { dataset: { host: "lab-web" } },
  { dataset: { host: "lab-old" } },
  { dataset: { host: "lab-db" } },   // a row added AFTER wiring - it still works
];

function onListClick(li) {
  if (!li) return "idle";            // clicked the list itself, not a row
  return "selected: " + li.dataset.host;
}

console.log(onListClick(rows[1]));   // the lab-old row
console.log(onListClick(rows[2]));   // the later-added row - no new listener
console.log(onListClick(null));      // the gap between rows`,
    output: `selected: lab-old
selected: lab-db
idle`,
  },

  "l4-jsm-async": {
    lang: "javascript",
    title: "exercise_promise_all.js — the lab task from this lesson, as code",
    code: `// Exercise: Promise.all three simulated host checks with
// different delays and print results in INPUT order; then reject
// one and handle it.
const delay = (ms, value) => new Promise((resolve) => setTimeout(() => resolve(value), ms));

async function checkHost(name, ms) {
  const banner = await delay(ms, "SSH-2.0-" + name);   // a simulated lab service
  return name + " -> " + banner;
}

async function main() {
  const one = await checkHost("lab-web", 10);
  console.log(one);
  // TODO: const all = await Promise.all([
  //   checkHost("a", 25), checkHost("b", 5), checkHost("c", 15)]);
  // print "all:", all.join(" | ") - input order, NOT finish order.
  // TODO: try { await Promise.reject(new Error("connection refused")); }
  // catch (err) { console.log("handled:", err.message); }
  console.log("end");
}
main();`,
    output: `lab-web -> SSH-2.0-lab-web
end`,
  },

  "l4-js-fetch": {
    lang: "javascript",
    title: "exercise_fetch_shape.js — the lab task from this lesson, as code",
    code: `// Exercise: the fetch lesson's shape, runnable without a server.
// The lab notes WHY response headers can't be read cross-origin -
// here you practise the part that IS yours: turning the JSON into
// list-item TEXT and handling failure without a crash. The fake
// response stands in for your localhost demo API's reply.
const fakeResponse = {
  ok: true,
  status: 200,
  json: async () => [
    { name: "lab-web", status: "up" },
    { name: "lab-old", status: "down" },
  ],
};

async function load(res) {
  if (!res.ok) throw new Error("HTTP " + res.status);
  const items = await res.json();
  for (const it of items) {
    console.log(it.name + " — " + it.status);   // li.textContent in the page
  }
}

(async () => {
  try {
    await load(fakeResponse);
    await load({ ok: false, status: 503, json: async () => [] });
  } catch (e) {
    console.log("Could not load the lab API:", e.message);   // the #err line
  }
})();`,
    output: `lab-web — up
lab-old — down
Could not load the lab API: HTTP 503`,
  },

  "l4-jsm-es6": {
    lang: "javascript",
    title: "exercise_check_classes.js — the lab task from this lesson, as code",
    code: `// Exercise: model two check classes, run them polymorphically,
// and read a nested config with ?. and ?? defaults.
class Check {
  constructor(name) { this.name = name; }
  run() { return this.name + ": generic"; }
}

// TODO: class PortCheck extends Check - constructor(port) calls
// super("port"); run() -> \`port \${this.port} \${... RISKY/ok}\`
// TODO: class HeaderCheck extends Check - run() -> "header: CSP missing"

const checks = [new Check("port"), new Check("header")];
for (const c of checks) console.log(c.run());

const config = { host: "lab-web", options: { timeout: 3 } };
console.log("timeout:", config.options?.timeout ?? 5);
console.log("missing:", config.auth?.method ?? "none");`,
    output: `port: generic
header: generic
timeout: 3
missing: none`,
  },

  "l4-jsm-security": {
    lang: "javascript",
    title: "exercise_escape_host.js — the lab task from this lesson, as code",
    code: `// Exercise: render a hostile hostname twice - as pure text (what
// textContent shows) and via escapeHtml into an HTML string - and
// explain both outcomes (the comment at the bottom).
function escapeHtml(text) {
  // TODO: the replaceAll chain - & FIRST, then <, >, " (the lesson's
  // order; any other order double-encodes the escapes themselves).
  return text;
}

const hostile = '<img src=x onerror=alert(1)>';
console.log("as text (textContent):", hostile);
console.log("escaped (safe in HTML):", escapeHtml(hostile));
// Outcome, in one line each: as text, the browser displays the
// characters and runs nothing. Escaped, the same characters are
// inert inside an HTML string - &lt; is shown as <, never parsed.`,
    output: `as text (textContent): <img src=x onerror=alert(1)>
escaped (safe in HTML): <img src=x onerror=alert(1)>`,
  },
};
