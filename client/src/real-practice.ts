// Real example + PC practice — one of each per lesson (user order 13 Nov 2026).
//
// Both blocks are DERIVED from the lesson's own authored content, never from
// invented data: the Real example is the lesson's own working code/command
// example with the verified output it really produces (section 06), plus the
// exact local command to reproduce it; the PC practice turns the lesson's
// first authored own-PC task into one fully specified hands-on job — where
// to run it, exact steps, the first output line to expect, and how to know
// it worked. Safe targets only: the learner's own PC / VM / emulator /
// localhost / authorized lab app — the same rule as every lab in CyberLab.

import type { Lesson } from "./catalog";
import { localCommand } from "./Playground";

export type RealExample = {
  /** Exact local run guidance for the lesson's own example (commands stay English, as everywhere in CyberLab). */
  runLocally: string;
  /** First lines of the example's real, verified output. */
  outputHead: string;
  /** The first output line on its own — the checkable anchor. */
  firstLine: string;
  /** Why the output proves the concept (the lesson code's own line notes). */
  proof: string[];
  /** True when the example is a program/commands that run; false for worked document examples. */
  runnable: boolean;
};

export type PcPractice = {
  whereEn: string;
  whereBn: string;
  stepsEn: string[];
  stepsBn: string[];
  expectedLine: string;
  doneEn: string;
  doneBn: string;
};

const WORKED_LANGS = new Set(["text", "xml", "yaml", "yaml (sigma)", "dockerfile", "yara", "kotlin"]);

function isRunnable(lesson: Lesson): boolean {
  return !WORKED_LANGS.has(lesson.code.lang.trim().toLowerCase());
}

function firstOutputLine(lesson: Lesson): string {
  const line = lesson.code.output.split("\n").map((s) => s.trim()).find(Boolean);
  return line ?? lesson.code.output.trim();
}

/** The example's real filename, when the lesson's code title names one. */
function fileFromTitle(lesson: Lesson): string | null {
  const m = lesson.code.title.match(/([A-Za-z0-9_.-]+\.(?:py|js|c|sh|ps1|sql|html))\b/i);
  return m?.[1] ?? null;
}

function runLocallyFor(lesson: Lesson): string {
  if (!isRunnable(lesson)) {
    return "There is no program to run for this one — work through the example in section 06 in a text file on your own PC, with your own values, and compare your result with the output below.";
  }
  const lang = lesson.code.lang.toLowerCase();
  const file = fileFromTitle(lesson);
  if (file && lang.includes("python")) return `Save the code from section 06 as ${file} in your practice folder, then run:  python ${file}   (python3 on Linux/macOS)`;
  if (file && lang.includes("javascript")) return `Save the code from section 06 as ${file}, then run:  node ${file}  — or paste it into the browser DevTools Console (F12)`;
  if (file && lang === "c") return `Save the code from section 06 as ${file}, then:  gcc -Wall -Wextra -o lab ${file} && ./lab   (on Windows run .\\lab.exe instead)`;
  if (file && lang.includes("bash")) return `Save the code from section 06 as ${file}, then:  bash ${file}   (in your own lab folder only)`;
  return localCommand(lesson.code.lang);
}

export function realExampleFor(lesson: Lesson): RealExample {
  const lines = lesson.code.output.split("\n").filter((s) => s.trim().length > 0);
  return {
    runLocally: runLocallyFor(lesson),
    outputHead: lines.slice(0, 4).join("\n"),
    firstLine: firstOutputLine(lesson),
    proof: lesson.code.lines.slice(0, 3),
    runnable: isRunnable(lesson),
  };
}

function whereFor(lesson: Lesson): { en: string; bn: string } {
  const lang = lesson.code.lang.toLowerCase();
  const task = (lesson.pc[0] ?? "").toLowerCase();
  if (lang.includes("powershell") || task.includes("powershell")) {
    return {
      en: "PowerShell on your own Windows PC — nobody else's machine, ever.",
      bn: "নিজের Windows PC-তে PowerShell — অন্য কারো machine-এ কখনো নয়।",
    };
  }
  if (lang.includes("bash")) {
    return {
      en: "A terminal on your own PC — WSL, a Linux VM you created, or Git Bash — in a practice folder you made yourself.",
      bn: "নিজের PC-র terminal-এ — WSL, নিজের তৈরি Linux VM, বা Git Bash — নিজের বানানো practice folder-এ।",
    };
  }
  if (task.includes("settings")) {
    return {
      en: "Windows Settings on your own PC (observation first — change nothing until the task says to).",
      bn: "নিজের PC-র Windows Settings-এ (আগে শুধু দেখো — কাজে না বললে কিছু বদলাবে না)।",
    };
  }
  if (lang.includes("python")) {
    return {
      en: "PowerShell or a terminal on your own PC, inside a practice folder you created for this lesson.",
      bn: "নিজের PC-তে PowerShell বা terminal — এই পাঠের জন্য নিজের বানানো practice folder-এর ভেতরে।",
    };
  }
  if (lang.includes("javascript") || lang.includes("html")) {
    return {
      en: "Your own PC — the browser's DevTools Console (F12), or Node.js in a terminal if you have it.",
      bn: "নিজের PC-তে — browser-এর DevTools Console (F12), বা থাকলে terminal-এ Node.js।",
    };
  }
  if (lang.includes("sql")) {
    return {
      en: "Your own PC, against your local training database only — never a real or shared database.",
      bn: "নিজের PC-তে, শুধু নিজের local training database-এর বিরুদ্ধে — আসল বা shared database-এ কখনো নয়।",
    };
  }
  return {
    en: "Your own PC — the app, terminal, or settings screen the task names. Only your own machine / VM / emulator.",
    bn: "নিজের PC-তে — কাজে যে app, terminal বা settings screen-এর নাম আছে সেখানে। শুধু নিজের machine / VM / emulator।",
  };
}

export function pcPracticeFor(lesson: Lesson, bnApply?: string): PcPractice {
  const ex = realExampleFor(lesson);
  const where = whereFor(lesson);
  const applyEn = lesson.pc[0] ?? lesson.lab;
  const applyBn = bnApply ?? applyEn;
  const run = ex.runLocally;
  if (ex.runnable) {
    return {
      whereEn: where.en,
      whereBn: where.bn,
      stepsEn: [
        `Get the example onto your own PC: ${run}`,
        "Run it exactly as written the first time — do not edit anything yet. Watch the output appear line by line.",
        `Compare your screen with the verified output in section 06. Your first line should be: ${ex.firstLine}`,
        `Now apply it for real: ${applyEn}`,
      ],
      stepsBn: [
        `উদাহরণটি নিজের PC-তে নাও: ${run}`,
        "প্রথমবার হুবহু যেভাবে লেখা আছে সেভাবেই চালাও — এখনো কিছু edit করবে না। Output লাইন ধরে ধরে আসতে দেখো।",
        `নিজের screen-এর সঙ্গে ০৬ নম্বর অংশের verified output মেলাও। তোমার প্রথম লাইন হওয়া উচিত: ${ex.firstLine}`,
        `এবার আসল কাজে লাগাও: ${applyBn}`,
      ],
      expectedLine: ex.firstLine,
      doneEn:
        "It worked when your own run prints the same result lines as the verified output in section 06 (your own paths or username may differ — the result lines must match), and you completed the apply step on your own machine.",
      doneBn:
        "হয়েছে বুঝবে যখন তোমার নিজের run-এ ০৬ নম্বর অংশের verified output-এর মতোই result লাইন আসবে (নিজের path বা username আলাদা হতে পারে — result লাইন মিলতে হবে), আর apply ধাপটি নিজের machine-এ শেষ করেছ।",
    };
  }
  return {
    whereEn: where.en,
    whereBn: where.bn,
    stepsEn: [
      "Open a blank text file on your own PC (Notepad or any editor) — this file is your worksheet for this one task.",
      "Copy the worked example from section 06 into it, then replace the example's lab values with your own real ones from your own PC, exactly where the example leaves a value to fill in.",
      `Check your finished worksheet against the example's result: ${ex.firstLine}`,
      `Now apply it for real: ${applyEn}`,
    ],
    stepsBn: [
      "নিজের PC-তে একটি ফাঁকা text file খোলো (Notepad বা যেকোনো editor) — এই file-টাই এই একটা কাজের worksheet।",
      "০৬ নম্বর অংশের worked example-টি এতে copy করো, তারপর example-এর lab value গুলোর জায়গায় নিজের PC থেকে নেওয়া নিজের আসল value বসাও — ঠিক যেখানে example-এ value বসানোর জায়গা আছে।",
      `শেষ করা worksheet-টি example-এর result-এর সঙ্গে মেলাও: ${ex.firstLine}`,
      `এবার আসল কাজে লাগাও: ${applyBn}`,
    ],
    expectedLine: ex.firstLine,
    doneEn:
      "It worked when your worksheet's result matches the worked example's result in meaning and structure, using your own real values — and you completed the apply step on your own machine.",
    doneBn:
      "হয়েছে বুঝবে যখন নিজের আসল value দিয়ে তোমার worksheet-এর result, worked example-এর result-এর সঙ্গে অর্থ ও কাঠামোতে মিলবে — আর apply ধাপটি নিজের machine-এ শেষ করেছ।",
  };
}
