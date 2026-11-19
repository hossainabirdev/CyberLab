// Bangla answer options — lessons, Levels 0–11 (merged from bn-options-a1..a4).
// Task options (labs/missions/SOC) and finals' written models all live in
// bn-options-c.ts, so TASK_OPTIONS_A / WRITTEN_MODEL_A are intentionally empty.
import { QUIZ_OPTIONS_A1, PRACTICAL_OPTIONS_A1 } from "./bn-options-a1";
import { QUIZ_OPTIONS_A2, PRACTICAL_OPTIONS_A2 } from "./bn-options-a2";
import { QUIZ_OPTIONS_A3, PRACTICAL_OPTIONS_A3 } from "./bn-options-a3";
import { QUIZ_OPTIONS_A4, PRACTICAL_OPTIONS_A4 } from "./bn-options-a4";

export const QUIZ_OPTIONS_A: Record<string, (string | undefined)[][]> = {
  ...QUIZ_OPTIONS_A1, ...QUIZ_OPTIONS_A2, ...QUIZ_OPTIONS_A3, ...QUIZ_OPTIONS_A4,
};
export const PRACTICAL_OPTIONS_A: Record<string, (string | undefined)[]> = {
  ...PRACTICAL_OPTIONS_A1, ...PRACTICAL_OPTIONS_A2, ...PRACTICAL_OPTIONS_A3, ...PRACTICAL_OPTIONS_A4,
};
export const TASK_OPTIONS_A: Record<string, (string | undefined)[][]> = {};
export const WRITTEN_MODEL_A: Record<string, string> = {};
