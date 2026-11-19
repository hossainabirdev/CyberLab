// Guided-flow gating — every practice item names the exact lesson(s) that
// unlock it. An item is unlocked only when ALL its required lessons are
// complete (quiz + practical passed, i.e. a progress record exists).
// Completed items stay open for revision forever.
import { ALL_LESSONS } from "./catalogAll";
import { isDone } from "./ui";
import type { LocalState } from "./store";

export const LAB_REQUIRES: Record<string, string[]> = {
  "lab-risk": ["l0-what-is-cybersecurity"],
  "lab-inspect": ["l1-inside-computer"],
  "lab-perms": ["l1-files-permissions"],
  "lab-dns": ["l2-subnetting-dns"],
  "lab-pcap": ["l2-osi-tcpip", "l2-network-tools"],
  "lab-linux-logs": ["l3-linux-essentials", "l3-bash-scripting"],
  "lab-headers": ["l5-http-sessions"],
  "lab-sqli": ["l8-access-control-sqli"],
  "lab-xss-csp": ["l8-xss"],
  "lab-firewall-review": ["l9-firewall-rules"],
  "lab-hardening-audit": ["l10-windows-hardening", "l10-linux-hardening"],
  "lab-identity-review": ["l11-oauth-oidc"],
  "lab-android-manifest": ["l16-android-basics"],
  "lab-cloud-config": ["l6-access-zero-trust"],
  "lab-vuln-triage": ["l12-cvss-scoring"],
  "lab-scope-pack": ["l13-scope-roe"],
  "lab-cloud-audit": ["l15-misconfig-detection"],
  "lab-api-suite": ["l17-api-testing-design"],
  "lab-sample-triage": ["l19-static-analysis"],
  "lab-detection-pack": ["l20-attack-sigma"],
  "lab-l23-logic": ["l23-logic"],
  "lab-l24-algo": ["l24-bigo"],
  "lab-l25-adder": ["l25-combinational"],
  "lab-l26-trace": ["l26-asm-loops"],
  "lab-l27-sql": ["l27-sql-joins"],
  "lab-l28-git": ["l28-git-teamwork"],
  "lab-l29-machines": ["l29-automata", "l29-cfg"],
  "lab-l30-pipeline": ["l30-optimization"],
  "lab-l31-metrics": ["l31-evaluation"],
};
export const MISSION_REQUIRES: Record<string, string[]> = {
  "m-permission-slip": ["l0-ethics-law"],
  "m-suspicious-login": ["l3-windows-admin"],
  "m-dns-query": ["l2-subnetting-dns"],
  "m-phishing": ["l6-awareness-defense"],
  "m-api-authz": ["l8-access-control-sqli"],
  "m-harden-server": ["l3-linux-essentials"],
  "m-ssrf-review": ["l8-csrf-ssrf"],
  "m-mfa-rollout": ["l11-auth-mfa"],
  "m-ad-incident": ["l14-identity-monitoring-dns"],
  "m-apk-release-gate": ["l16-masvs-audit"],
  "m-custody-case": ["l18-ir-playbooks"],
  "m-disclosure-drill": ["l21-disclosure-cve"],
  "m-portfolio-review": ["l22-capstone-gh-career"],
  "m-l24-refactor": ["l24-bigo"],
  "m-l27-schema": ["l27-normalization"],
  "m-l28-sprint": ["l28-agile-docs"],
};
export const CTF_REQUIRES: Record<string, string[]> = {
  "ctf-headers": ["l5-http-sessions"],
  "ctf-perms": ["l1-files-permissions"],
  "ctf-dns": ["l2-subnetting-dns"],
  "ctf-logs": ["l3-linux-essentials"],
  "ctf-jwt": ["l5-http-sessions"],
  "ctf-idor": ["l8-access-control-sqli"],
  "ctf-hash": ["l6-crypto-basics"],
  "ctf-phish": ["l6-awareness-defense"],
  "ctf-xss": ["l8-xss"],
  "ctf-segments": ["l9-network-defense", "l9-firewall-rules"],
  "ctf-pkce": ["l11-oauth-oidc"],
  "ctf-cvss": ["l12-cvss-scoring"],
  "ctf-kerberos": ["l14-kerberos"],
  "ctf-bucket": ["l15-storage-secrets"],
  "ctf-graphql": ["l17-graphql-rest"],
  "ctf-yara": ["l19-ghidra-gdb-yara"],
  "ctf-bigo": ["l24-bigo"],
  "ctf-sqlflag": ["l27-sql-joins"],
  "ctf-grammar": ["l29-cfg"],
};
export const PROJECT_REQUIRES: Record<string, string[]> = {
  "proj-a": ["l5-vuln-vs-secure", "l8-access-control-sqli"],
  "proj-b": ["l3-linux-essentials", "l1-files-permissions"],
  "proj-c": ["l18-ir-forensics", "l2-network-tools"],
  "proj-d": ["l12-reading-cve", "l7-tool-methodology"],
  "proj-e": ["l16-android-basics"],
  "proj-f": ["l20-detection-engineering"],
  "proj-g": ["l9-network-defense"],
  "proj-h": ["l6-access-zero-trust"],
};
export const ASSESSMENT_REQUIRES: Record<string, string[]> = {
  "sa-networking": ["l2-network-tools"],
  "sa-linux": ["l3-bash-scripting"],
  "sa-web": ["l8-access-control-sqli"],
  "sa-python": ["l4-python-security"],
};
export const SOC_REQUIRES: Record<string, string[]> = {
  "soc-failed-logins": ["l3-windows-admin"],
  "soc-office-shell": ["l1-processes-memory"],
  "soc-dns-tunnel": ["l2-subnetting-dns"],
  "soc-priv-change": ["l6-access-zero-trust"],
  "soc-fp-update": ["l0-what-is-cybersecurity"],
};
export const TERMINAL_REQUIRES: Record<string, string[]> = {
  ex1: ["l3-linux-essentials"],
  ex2: ["l1-files-permissions"],
  ex3: ["l2-network-tools"],
  ex4: ["l2-osi-tcpip"],
  ex5: ["l3-windows-admin"],
};
export const PENTEST_REQUIRES: string[] = ["l7-tool-methodology"];

export function lessonTitle(id: string): string {
  return ALL_LESSONS.find((l) => l.id === id)?.title ?? id;
}
export function lessonShort(id: string): string {
  const l = ALL_LESSONS.find((x) => x.id === id);
  return l ? `Level ${l.level} · ${l.title}` : id;
}
export function isUnlocked(s: LocalState, requires: string[] | undefined): boolean {
  if (!requires || requires.length === 0) return true;
  return requires.every((id) => isDone(s, "lesson", id));
}
export function missingLessons(s: LocalState, requires: string[] | undefined): string[] {
  if (!requires) return [];
  return requires.filter((id) => !isDone(s, "lesson", id));
}
/** First incomplete lesson in path (catalog) order — the learner's "current" lesson. */
export function currentLesson(s: LocalState) {
  return ALL_LESSONS.find((l) => !isDone(s, "lesson", l.id)) ?? null;
}
/** Related practice items that a given lesson unlocks. */
export function relatedForLesson(lessonId: string) {
  const pick = (map: Record<string, string[]>, kind: string) =>
    Object.entries(map).filter(([, req]) => req.includes(lessonId)).map(([id]) => ({ kind, id }));
  return [
    ...pick(LAB_REQUIRES, "Lab"),
    ...pick(MISSION_REQUIRES, "Mission"),
    ...pick(CTF_REQUIRES, "CTF"),
    ...pick(PROJECT_REQUIRES, "Project"),
    ...pick(ASSESSMENT_REQUIRES, "Skill Assessment"),
    ...pick(SOC_REQUIRES, "SOC event"),
  ];
}
