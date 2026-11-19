// Exercise starter code for ALL 104 Level 4 programming lessons.
//
// The user's rule (15 Nov 2026, stated twice): the example AND the
// exercise must both be real in the compiler, beside the topic. So every
// programming lesson's single compiler carries two tabs — Example and
// Exercise — and the Exercise tab loads THIS starter: the lesson's own
// guided-lab task as real, runnable code (setup given, key step marked
// TODO), in the same language and with the same honest run labels
// (REAL browser run for Python/JavaScript, SIMULATED verified output
// for C/Java/Bash/PowerShell) as the example itself.

import type { PlayCode } from "./Playground";
import { EXERCISE_PY, EXERCISE_PY2 } from "./exercise-py";
import { EXERCISE_C } from "./exercise-c";
import { EXERCISE_JAVA } from "./exercise-java";
import { EXERCISE_JS } from "./exercise-js";
import { EXERCISE_SHELL } from "./exercise-shell";

export const EXERCISE_CODE: Record<string, PlayCode> = {
  ...EXERCISE_PY,
  ...EXERCISE_PY2,
  ...EXERCISE_C,
  ...EXERCISE_JAVA,
  ...EXERCISE_JS,
  ...EXERCISE_SHELL,
};
