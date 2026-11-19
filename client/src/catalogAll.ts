// Merged catalog view: Phase 1 (catalog.ts / catalog3.ts / lang.ts) + Phase 2
// (catalog5.ts) + Phase 3 (catalog6.ts, Levels 8–11), presented as single
// ordered collections. Later-phase lessons are interleaved with the existing
// per-level lessons in teaching order via ORDER; checkpoints/finals/
// practicals are merged by id/key.

import { LESSONS, type Lesson } from "./catalog";
import { CHECKPOINTS, LEVEL_FINALS, PRACTICALS, type Checkpoint, type LevelFinal, type Practical } from "./catalog3";
import { LABS, MISSIONS, CTFS, type Lab, type Mission, type Ctf } from "./catalog2";
import { PHASE2_LESSONS, PHASE2_CHECKPOINTS, PHASE2_FINALS, PHASE2_PRACTICALS, PHASE2_BN } from "./catalog5";
import { PHASE3_LESSONS, PHASE3_CHECKPOINTS, PHASE3_FINALS, PHASE3_PRACTICALS, PHASE3_LABS, PHASE3_MISSIONS, PHASE3_CTFS } from "./catalog6";
import { L4NEW_LESSONS, L4NEW_LESSONS2, L4NEW_PRACTICALS } from "./catalog7";
import { PHASE4_LESSONS, PHASE4_CHECKPOINTS, PHASE4_FINALS, PHASE4_PRACTICALS, PHASE4_LABS, PHASE4_MISSIONS, PHASE4_CTFS } from "./catalog8";
import { PHASE5_LESSONS, PHASE5_CHECKPOINTS, PHASE5_FINALS, PHASE5_PRACTICALS, PHASE5_LABS, PHASE5_MISSIONS, PHASE5_CTFS } from "./catalog9";
import { PYM_LESSONS, PYM_CHECKPOINTS, PYM_PRACTICALS } from "./catalog10";
import { CM_LESSONS, CM_CHECKPOINTS, CM_PRACTICALS } from "./catalog11";
import { JV_LESSONS, JV_CHECKPOINTS, JV_PRACTICALS } from "./catalog12";
import { JSM_LESSONS, JSM_CHECKPOINTS, JSM_PRACTICALS, SHM_LESSONS, SHM_CHECKPOINTS, SHM_PRACTICALS } from "./catalog13";
import { BN_SUMMARIES } from "./lang";

// Teaching order within Levels 4–11 (existing Phase 1 lesson ids included so
// the merged sequence is exactly the authored path order).
const ORDER: string[] = [
  // Level 4 — MASTERY EXPANSION (15 Nov 2026, v29): strict dependency order,
  // 104 lessons. Python zero → mastery first (47: the original 9 woven into
  // 38 new topic lessons), then C (17), then the NEW Java block (15), then
  // JavaScript (13), then Bash + PowerShell (12).
  "l4-py-first", "l4-py-variables", "l4-pym-operators", "l4-pym-numbers", "l4-pym-strings",
  "l4-pym-input", "l4-py-conditions", "l4-pym-match", "l4-py-control", "l4-pym-lists",
  "l4-pym-tuples", "l4-pym-dicts", "l4-pym-sets", "l4-pym-comprehensions", "l4-py-functions",
  "l4-pym-functions-deep", "l4-pym-scope-lambda", "l4-pym-modules", "l4-py-files", "l4-pym-files-deep",
  "l4-pym-exceptions", "l4-pym-oop-1", "l4-pym-oop-2", "l4-pym-oop-3", "l4-pym-generators",
  "l4-pym-decorators", "l4-pym-regex", "l4-pym-datetime", "l4-pym-collections", "l4-pym-json",
  "l4-pym-pathlib-os", "l4-pym-venv-pip", "l4-pym-testing", "l4-pym-debugging", "l4-python-security",
  "l4-py-integrity", "l4-pym-logging", "l4-pym-argparse", "l4-pym-subprocess", "l4-pym-encoding",
  "l4-pym-password-tools", "l4-pym-sockets", "l4-py-network", "l4-pym-requests", "l4-pym-threading",
  "l4-pym-portscan", "l4-pym-capstone",
  "l4-c-basics", "l4-cm-types", "l4-cm-io", "l4-cm-control", "l4-c-arrays-functions",
  "l4-cm-strings", "l4-c-pointers", "l4-cm-scope", "l4-c-structs-heap", "l4-cm-typedef",
  "l4-cm-memory", "l4-cm-files", "l4-cm-preprocessor", "l4-cm-cmdline", "l4-cm-bitwise",
  "l4-c-memory", "l4-cm-security",
  "l4-jv-first", "l4-jv-operators", "l4-jv-control", "l4-jv-arrays", "l4-jv-strings",
  "l4-jv-methods", "l4-jv-oop1", "l4-jv-oop2", "l4-jv-oop3", "l4-jv-exceptions",
  "l4-jv-collections", "l4-jv-generics", "l4-jv-lambdas", "l4-jv-files", "l4-jv-security",
  "l4-js-basics", "l4-jsm-types", "l4-jsm-control", "l4-jsm-functions", "l4-jsm-arrays",
  "l4-jsm-objects", "l4-javascript-browser", "l4-jsm-dom", "l4-jsm-events", "l4-jsm-async",
  "l4-js-fetch", "l4-jsm-es6", "l4-jsm-security",
  "l4-shm-bash-vars", "l4-shm-bash-pipes", "l4-shm-bash-control", "l4-shm-bash-loops", "l4-shm-bash-text",
  "l4-shm-bash-files", "l4-bash-automation", "l4-shm-ps-basics", "l4-shm-ps-control", "l4-shm-ps-files",
  "l4-powershell-automation", "l4-shm-security",
  // Level 5
  "l5-html-css-dom", "l5-http-sessions", "l5-rest-sql", "l5-backend-tls", "l5-vuln-vs-secure",
  // Level 6
  "l6-threat-risk", "l6-crypto-basics", "l6-access-zero-trust", "l6-policy-sdlc", "l6-awareness-defense",
  // Level 7
  "l7-tool-methodology", "l7-nmap", "l7-wireshark", "l7-burp-zap", "l7-curl-openssl-git", "l7-detection-scanning-tools",
  // Level 8 — OWASP order: access control (existing), crypto, injection, design, config, XSS, forgery, auth
  "l8-access-control-sqli", "l8-crypto-failures", "l8-injection-deep", "l8-insecure-design",
  "l8-misconfig-headers", "l8-xss", "l8-csrf-ssrf", "l8-auth-failures",
  // Level 9
  "l9-network-defense", "l9-firewall-rules", "l9-ids-suricata", "l9-vpn-tls", "l9-wireless", "l9-monitoring-zeek",
  // Level 10
  "l10-windows-hardening", "l10-linux-hardening", "l10-edr-sysmon", "l10-patch-scanning", "l10-encryption-backup", "l10-endpoint-ir",
  // Level 11
  "l11-auth-mfa", "l11-oauth-oidc", "l11-saml-sso", "l11-rbac-abac", "l11-privilege-escalation-defense", "l11-session-recovery",
];
const rank = new Map(ORDER.map((id, i) => [id, i]));

const combined: Lesson[] = [...LESSONS, ...PHASE2_LESSONS, ...PHASE3_LESSONS, ...L4NEW_LESSONS, ...L4NEW_LESSONS2, ...PHASE4_LESSONS, ...PHASE5_LESSONS, ...PYM_LESSONS, ...CM_LESSONS, ...JV_LESSONS, ...JSM_LESSONS, ...SHM_LESSONS];
const origIndex = new Map(combined.map((l, i) => [l.id, i]));
export const ALL_LESSONS: Lesson[] = [...combined].sort((a, b) => {
  if (a.level !== b.level) return a.level - b.level;
  const ra = rank.get(a.id);
  const rb = rank.get(b.id);
  if (ra !== undefined && rb !== undefined) return ra - rb;
  if (ra !== undefined) return -1;
  if (rb !== undefined) return 1;
  return (origIndex.get(a.id) ?? 0) - (origIndex.get(b.id) ?? 0);
});

export const ALL_CHECKPOINTS: Checkpoint[] = [...CHECKPOINTS, ...PHASE2_CHECKPOINTS, ...PHASE3_CHECKPOINTS, ...PHASE4_CHECKPOINTS, ...PHASE5_CHECKPOINTS, ...PYM_CHECKPOINTS, ...CM_CHECKPOINTS, ...JV_CHECKPOINTS, ...JSM_CHECKPOINTS, ...SHM_CHECKPOINTS];
export const ALL_FINALS: LevelFinal[] = [...LEVEL_FINALS, ...PHASE2_FINALS, ...PHASE3_FINALS, ...PHASE4_FINALS, ...PHASE5_FINALS];
export const ALL_PRACTICALS: Record<string, Practical> = { ...PRACTICALS, ...PHASE2_PRACTICALS, ...PHASE3_PRACTICALS, ...L4NEW_PRACTICALS, ...PHASE4_PRACTICALS, ...PHASE5_PRACTICALS, ...PYM_PRACTICALS, ...CM_PRACTICALS, ...JV_PRACTICALS, ...JSM_PRACTICALS, ...SHM_PRACTICALS };
export const ALL_BN: Record<string, string> = { ...BN_SUMMARIES, ...PHASE2_BN };
export const ALL_LABS: Lab[] = [...LABS, ...PHASE3_LABS, ...PHASE4_LABS, ...PHASE5_LABS];
export const ALL_MISSIONS: Mission[] = [...MISSIONS, ...PHASE3_MISSIONS, ...PHASE4_MISSIONS, ...PHASE5_MISSIONS];
export const ALL_CTFS: Ctf[] = [...CTFS, ...PHASE3_CTFS, ...PHASE4_CTFS, ...PHASE5_CTFS];
