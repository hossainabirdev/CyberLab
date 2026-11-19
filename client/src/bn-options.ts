// Bangla answer-option overlay (QA pass, 12 Nov 2026): in Bangla mode the
// answer OPTIONS of quizzes, practicals, lab/mission/SOC tasks and the
// diagnostic, plus the level finals' written model answers, render in
// Bangla — index-aligned with the English source. Technical terms, tool
// names, code, commands, CVE IDs and URLs stay English inside the Bangla
// text, exactly like the question translations. An undefined entry means
// "identical in both modes" (pure code/number/command options) and the
// renderer falls back to the English string, which is then the same text.
import { QUIZ_OPTIONS_A, PRACTICAL_OPTIONS_A, TASK_OPTIONS_A, WRITTEN_MODEL_A } from "./bn-options-a";
import { QUIZ_OPTIONS_B, PRACTICAL_OPTIONS_B } from "./bn-options-b";
import { QUIZ_OPTIONS_C, PRACTICAL_OPTIONS_C, TASK_OPTIONS_C, WRITTEN_MODEL_C } from "./bn-options-c";
import { ATK_QUIZ_BN, ATK_PRAC_BN, ATK_TASK_BN } from "./attack-data";
import { PYM_QUIZ_OPTIONS } from "./bn-python";
import { CM_QUIZ_OPTIONS, JV_QUIZ_OPTIONS } from "./bn-cjava";
import { JSM_QUIZ_OPTIONS, SHM_QUIZ_OPTIONS } from "./bn-jsshell";
import { WRITTEN_MODEL5, QUIZ_OPTIONS5 } from "./bn-phase5";

export const QUIZ_OPTIONS_BN: Record<string, (string | undefined)[][]> = { ...QUIZ_OPTIONS_A, ...QUIZ_OPTIONS_B, ...QUIZ_OPTIONS_C, ...ATK_QUIZ_BN, ...QUIZ_OPTIONS5, ...PYM_QUIZ_OPTIONS, ...CM_QUIZ_OPTIONS, ...JV_QUIZ_OPTIONS, ...JSM_QUIZ_OPTIONS, ...SHM_QUIZ_OPTIONS };
export const PRACTICAL_OPTIONS_BN: Record<string, (string | undefined)[]> = { ...PRACTICAL_OPTIONS_A, ...PRACTICAL_OPTIONS_B, ...PRACTICAL_OPTIONS_C, ...ATK_PRAC_BN };
export const TASK_OPTIONS_BN: Record<string, (string | undefined)[][]> = { ...TASK_OPTIONS_A, ...TASK_OPTIONS_C, ...ATK_TASK_BN };

export const WRITTEN_MODEL_BN: Record<string, string> = { ...WRITTEN_MODEL_A, ...WRITTEN_MODEL_C, ...WRITTEN_MODEL5 };
