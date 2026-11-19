// Pyodide — real CPython compiled to WebAssembly, loaded ON DEMAND from the
// jsDelivr CDN the first time a Python playground runs. Execution happens
// entirely in the learner's browser: no code is sent to any server.
// If the CDN cannot be reached (offline, blocked), the loader reports
// "failed" and the UI shows an honest local-run message — never fake output.
// Pinned version: Pyodide 0.26.4 bundles CPython 3.11.

const CDN = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";

export type PyState = "idle" | "loading" | "ready" | "failed";
let state: PyState = "idle";
let engine: unknown = null;
let loadPromise: Promise<boolean> | null = null;
const listeners = new Set<(s: PyState) => void>();

export function pyState(): PyState { return state; }
export function onPyState(fn: (s: PyState) => void): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}
function setState(s: PyState) { state = s; listeners.forEach((f) => f(s)); }

type PyodideApi = {
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (o: { batched: (s: string) => void }) => void;
  setStderr: (o: { batched: (s: string) => void }) => void;
};

export function ensurePyodide(): Promise<boolean> {
  if (state === "ready") return Promise.resolve(true);
  if (loadPromise) return loadPromise;
  setState("loading");
  loadPromise = (async () => {
    try {
      const w = window as unknown as { loadPyodide?: (o: { indexURL: string }) => Promise<PyodideApi> };
      if (!w.loadPyodide) {
        await new Promise<void>((resolve, reject) => {
          const tag = document.createElement("script");
          tag.src = `${CDN}pyodide.js`;
          tag.onload = () => resolve();
          tag.onerror = () => reject(new Error("pyodide.js failed to load"));
          document.head.appendChild(tag);
        });
      }
      const load = (window as unknown as { loadPyodide: (o: { indexURL: string }) => Promise<PyodideApi> }).loadPyodide;
      engine = await load({ indexURL: CDN });
      setState("ready");
      return true;
    } catch {
      setState("failed");
      loadPromise = null;
      return false;
    }
  })();
  return loadPromise;
}

export async function runPython(code: string): Promise<{ out: string; isError: boolean }> {
  const ok = await ensurePyodide();
  if (!ok || !engine) {
    return {
      out: "Python engine could not load (the Pyodide WebAssembly runtime is fetched from a CDN — check your internet connection). Nothing was run and no output is faked. Run this exact code locally instead:  save it as a .py file, then:  python3 your_file.py",
      isError: true,
    };
  }
  const py = engine as PyodideApi;
  const lines: string[] = [];
  py.setStdout({ batched: (s: string) => lines.push(s) });
  py.setStderr({ batched: (s: string) => lines.push(s) });
  try {
    const result = await py.runPythonAsync(code);
    if (result !== undefined && result !== null) lines.push(`→ ${String(result)}`);
    return { out: lines.length ? lines.join("\n") : "(ran with no output — add print(...) to see a result here)", isError: false };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    // Pyodide error messages carry the real Python traceback; trim the JS wrapper lines.
    const tb = msg.split("\n").filter((l) => !l.includes("pyodide") && !l.startsWith("  File \"<exec>\"")).join("\n").trim();
    return { out: lines.length ? `${lines.join("\n")}\n${tb || msg}` : (tb || msg), isError: true };
  }
}
