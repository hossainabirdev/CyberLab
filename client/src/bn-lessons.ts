// Merged per-item Bangla translations for all lessons (49 original + Phase 3).
import { BN_A, type LessonBn } from "./bn-lessons-a";
import { BN_B } from "./bn-lessons-b";
import { BN_C } from "./bn-lessons-c";
import { BN_D } from "./bn-lessons-d";
import { BN_E } from "./bn-phase3";
import { L4NEW_BN } from "./catalog7";
import { BN_F } from "./bn-phase4";
import { BN_G } from "./bn-phase5";
import { PYM_BN } from "./bn-python";
import { CM_BN, JV_BN } from "./bn-cjava";
import { JSM_BN, SHM_BN } from "./bn-jsshell";

export type { LessonBn };
export const LESSON_BN_FULL: Record<string, LessonBn> = { ...BN_A, ...BN_B, ...BN_C, ...BN_D, ...BN_E, ...L4NEW_BN, ...BN_F, ...BN_G, ...PYM_BN, ...CM_BN, ...JV_BN, ...JSM_BN, ...SHM_BN };
