// Bangla answer options — lessons, Levels 12–22 (merged from bn-options-b1..b3).
import { QUIZ_OPTIONS_B1, PRACTICAL_OPTIONS_B1 } from "./bn-options-b1";
import { QUIZ_OPTIONS_B2, PRACTICAL_OPTIONS_B2 } from "./bn-options-b2";
import { QUIZ_OPTIONS_B3, PRACTICAL_OPTIONS_B3 } from "./bn-options-b3";

export const QUIZ_OPTIONS_B: Record<string, (string | undefined)[][]> = {
  ...QUIZ_OPTIONS_B1, ...QUIZ_OPTIONS_B2, ...QUIZ_OPTIONS_B3,
};
export const PRACTICAL_OPTIONS_B: Record<string, (string | undefined)[]> = {
  ...PRACTICAL_OPTIONS_B1, ...PRACTICAL_OPTIONS_B2, ...PRACTICAL_OPTIONS_B3,
};
