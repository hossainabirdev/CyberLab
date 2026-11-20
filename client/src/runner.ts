// Remote code execution — REAL runs on public execution services.
//
// Why two services (verified live by the builder, 20 Nov 2026):
//   • Judge0 CE (https://ce.judge0.com) — the primary runner. Its public
//     instance executes with no account or key, sends CORS
//     `Access-Control-Allow-Origin: *`, and its live language list is
//     fetched from GET /languages (71 entries at verification time:
//     C, C++, Java, Go, Rust, Bash, C#, TypeScript, SQL/SQLite, PHP,
//     Kotlin, Ruby, Swift, R, Haskell, Lua, Perl and more). Every run
//     below was verified end-to-end from the build sandbox, including a
//     broken C program returning the real gcc error.
//   • Piston (https://emkc.org) — kept ONLY for the two curated languages
//     Judge0 does not offer (PowerShell, Julia). Its runtime list is
//     still public, but since 15 Feb 2026 the public execute endpoint is
//     whitelist-only and answers HTTP 401 with that message. We still
//     attempt the run live; when the service refuses, the learner gets
//     the service's own message plus the exact local command — never a
//     fake or preset output.
// Nothing ever executes on CyberLab's own server. Only the learner's
// typed code + the chosen language are sent to the execution service.

export type RemoteResult = { out: string; isError: boolean; service: "judge0" | "piston" };

const JUDGE0 = "https://ce.judge0.com";
const PISTON = "https://emkc.org/api/v2/piston";

/* ---------- Judge0 language catalogue (fetched live, cached) ---------- */

export type Judge0Lang = { id: number; name: string; base: string; detail: string };

let j0Cache: Promise<Judge0Lang[]> | null = null;

export function fetchJudge0Languages(): Promise<Judge0Lang[]> {
  if (j0Cache) return j0Cache;
  j0Cache = (async () => {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 12000);
    try {
      const res = await fetch(`${JUDGE0}/languages`, { signal: ctl.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const raw = (await res.json()) as { id: number; name: string }[];
      return raw
        .filter((l) => l.name !== "Executable" && l.name !== "Plain Text" && l.name !== "Multi-file program")
        .map((l) => {
          const m = /^(.*?)\s*\((.*)\)$/.exec(l.name);
          return { id: l.id, name: l.name, base: (m?.[1] ?? l.name).trim(), detail: (m?.[2] ?? "").trim() };
        });
    } finally {
      clearTimeout(t);
    }
  })();
  j0Cache.catch(() => { j0Cache = null; });
  return j0Cache;
}

const verNums = (s: string) => (s.match(/\d+(?:\.\d+)*/)?.[0] ?? "0").split(".").map((n) => parseInt(n, 10) || 0);
function cmpVer(a: string, b: string): number {
  const va = verNums(a), vb = verNums(b);
  for (let i = 0; i < Math.max(va.length, vb.length); i++) { const d = (vb[i] ?? 0) - (va[i] ?? 0); if (d) return d; }
  return 0;
}

/** Pick the best Judge0 entry for a base language name ("C", "Java", …).
 * C/C++ prefer GCC (what the lessons teach); everything else takes the
 * newest version in the live list. */
export function pickJudge0(langs: Judge0Lang[], base: string): Judge0Lang | undefined {
  const cands = langs.filter((l) => l.base.toLowerCase() === base.toLowerCase());
  if (!cands.length) return undefined;
  const gcc = cands.filter((l) => /gcc/i.test(l.detail));
  const pool = gcc.length && (base === "C" || base === "C++") ? gcc : cands;
  return [...pool].sort((a, b) => cmpVer(a.detail, b.detail))[0];
}

/* ---------- base64 helpers (UTF-8 safe) ---------- */

function b64encode(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin);
}
function b64decode(s: string | null | undefined): string {
  if (!s) return "";
  try {
    const bin = atob(s);
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } catch { return s; }
}

/* ---------- Java adaptation ----------
 * Judge0 saves Java submissions as Main.java and runs `java Main`, so a
 * lesson class like `public class ArraysDemo` cannot compile or run as
 * submitted (verified: "class ArraysDemo is public, should be declared
 * in a file named ArraysDemo.java"; stripping `public` then fails at
 * runtime because there is no Main class). The mechanical fix: rename
 * the class that declares `public static void main` to Main in the copy
 * SENT to the service. The learner's code on screen is never changed,
 * and the program's behaviour/output are identical. */
export function adaptJavaForJudge0(code: string): string {
  if (!/public\s+static\s+void\s+main/.test(code)) return code;
  const m = /(?:public\s+)?(?:final\s+)?class\s+([A-Za-z_$][\w$]*)/.exec(code);
  const cls = m?.[1];
  if (!cls || cls === "Main") return code;
  // Only rename when that class is the one holding main (the common
  // single-file lesson shape): check the main method comes after it.
  const after = code.slice(code.indexOf(m![0]));
  if (!/public\s+static\s+void\s+main/.test(after)) return code;
  return code.replace(new RegExp(`\\b${cls}\\b`, "g"), "Main");
}

/* ---------- Judge0 execution ---------- */

type Judge0Submission = {
  stdout?: string | null; stderr?: string | null; compile_output?: string | null;
  message?: string | null; status?: { id: number; description: string };
};

export async function runJudge0(base: string, code: string, localHint: string): Promise<RemoteResult> {
  let langs: Judge0Lang[];
  try {
    langs = await fetchJudge0Languages();
  } catch {
    return { out: `The execution service (Judge0) could not be reached to load its language list — check your internet connection. Nothing was run and no output is faked.\n\nRun it on your own PC instead:\n${localHint}`, isError: true, service: "judge0" };
  }
  const lang = pickJudge0(langs, base);
  if (!lang) {
    return { out: `The execution service (Judge0) does not offer ${base} in its current live language list, so this code was NOT run remotely. No output is faked.\n\nRun it on your own PC instead:\n${localHint}`, isError: true, service: "judge0" };
  }
  const src = base === "Java" ? adaptJavaForJudge0(code) : code;
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 30000);
  try {
    const res = await fetch(`${JUDGE0}/submissions?base64_encoded=true&wait=true`, {
      method: "POST", signal: ctl.signal,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language_id: lang.id, source_code: b64encode(src), stdin: b64encode("") }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const d = (await res.json()) as Judge0Submission;
    const statusId = d.status?.id ?? 0;
    const stdout = b64decode(d.stdout).replace(/\n$/, "");
    const stderr = b64decode(d.stderr).replace(/\n$/, "");
    const compile = b64decode(d.compile_output).replace(/\n$/, "");
    const parts: string[] = [];
    if (statusId === 3) {
      // Accepted — stdout is the whole story (compile warnings, e.g.
      // Kotlin's JVM notices, are NOT shown on a successful run).
      if (stdout) parts.push(stdout);
      return { out: parts.join("\n") || "(ran with no output)", isError: false, service: "judge0" };
    }
    if (statusId === 6) {
      // Compilation Error — the real compiler message, verbatim.
      return { out: compile || stderr || "Compilation failed (the compiler gave no message).", isError: true, service: "judge0" };
    }
    if (stdout) parts.push(stdout);
    if (stderr) parts.push(stderr);
    if (compile && statusId !== 6) parts.push(compile);
    if (d.message) parts.push(b64decode(d.message));
    const label = d.status?.description ?? "Error";
    return { out: `${label}${parts.length ? `\n${parts.join("\n")}` : ""}`, isError: true, service: "judge0" };
  } catch {
    return { out: `The execution service (Judge0) could not be reached — offline, service down, or rate-limited. Nothing was run and no output is faked.\n\nRun it on your own PC instead:\n${localHint}`, isError: true, service: "judge0" };
  } finally {
    clearTimeout(timer);
  }
}

/* ---------- Piston execution (PowerShell / Julia only) ---------- */

type PistonRuntime = { language: string; version: string; aliases?: string[] };
let pistonCache: Promise<PistonRuntime[]> | null = null;

export function fetchPistonRuntimes(): Promise<PistonRuntime[]> {
  if (pistonCache) return pistonCache;
  pistonCache = (async () => {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 12000);
    try {
      const res = await fetch(`${PISTON}/runtimes`, { signal: ctl.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return (await res.json()) as PistonRuntime[];
    } finally {
      clearTimeout(t);
    }
  })();
  pistonCache.catch(() => { pistonCache = null; });
  return pistonCache;
}

const PISTON_FILE: Record<string, string> = { powershell: "main.ps1", julia: "main.jl" };

export async function runPiston(language: string, code: string, localHint: string): Promise<RemoteResult> {
  let rt: PistonRuntime | undefined;
  try {
    const all = await fetchPistonRuntimes();
    const cands = all.filter((r) => r.language === language || (r.aliases ?? []).includes(language));
    rt = [...cands].sort((a, b) => cmpVer(a.version, b.version))[0];
  } catch { rt = undefined; }
  if (!rt) {
    return { out: `The execution service (Piston) could not be reached to load its runtime list — check your internet connection. Nothing was run and no output is faked.\n\nRun it on your own PC instead:\n${localHint}`, isError: true, service: "piston" };
  }
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 25000);
  try {
    const res = await fetch(`${PISTON}/execute`, {
      method: "POST", signal: ctl.signal,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language: rt.language, version: rt.version, files: [{ name: PISTON_FILE[language] ?? "main.txt", content: code }], stdin: "", args: [], compile_timeout: 10000, run_timeout: 10000 }),
    });
    const data = (await res.json()) as { compile?: { stdout?: string; stderr?: string; code?: number }; run?: { stdout?: string; stderr?: string; code?: number }; message?: string };
    if (data.message && !data.run) {
      // Includes Piston's current whitelist-only refusal (HTTP 401,
      // verified 20 Nov 2026) — surfaced verbatim, never hidden.
      return { out: `The execution service (Piston) refused this run: "${data.message}"\n\nNothing was run and no output is faked. Run it on your own PC instead:\n${localHint}`, isError: true, service: "piston" };
    }
    const parts: string[] = [];
    if (data.compile && (data.compile.code ?? 0) !== 0) {
      return { out: (data.compile.stderr || data.compile.stdout || "Compilation failed").trim(), isError: true, service: "piston" };
    }
    if (data.run?.stdout) parts.push(data.run.stdout.replace(/\n$/, ""));
    if (data.run?.stderr) parts.push(data.run.stderr.replace(/\n$/, ""));
    const exit = data.run?.code;
    return { out: parts.join("\n") || "(ran with no output)", isError: (exit ?? 0) !== 0, service: "piston" };
  } catch {
    return { out: `The execution service (Piston) could not be reached — offline, service down, or rate-limited. Nothing was run and no output is faked.\n\nRun it on your own PC instead:\n${localHint}`, isError: true, service: "piston" };
  } finally {
    clearTimeout(timer);
  }
}
