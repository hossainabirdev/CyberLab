// Six-language resolution layer (user order, 19 Nov 2026).
//
// English is the source language and Bangla keeps its original full
// per-item packs (bn-*.ts). Spanish, German, Chinese and Hindi each ship
// one LangPack (i18n-es.ts / i18n-de.ts / i18n-zh.ts / i18n-hi.ts) with:
// navigation, UI strings, instructions, workflow order lines, every
// lesson / level / lab / mission / CTF / project title, every practice
// item description, and a UI dictionary keyed by the English source
// string for the app shell, auth screen, dashboard, guided flow and
// lesson chrome. Every helper below resolves in one place so a missing
// key falls back to English — never to a wrong language, never blank.
// Technical terms, code, commands, CVE IDs and URLs stay in English in
// every language, matching the Bangla packs' established rule.

import {
NAV_BN,
UI_STR_BN,
INSTRUCTION_BN,
ITEM_BN,
SECTION_ORDER,
lessonBnTitle,
type LangMode,
type LangPack,
} from "./lang";
import { ES } from "./i18n-es";
import { DE } from "./i18n-de";
import { ZH } from "./i18n-zh";
import { HI } from "./i18n-hi";

const PACKS: Partial<Record<LangMode, LangPack>> = { es: ES, de: DE, zh: ZH, hi: HI };

export function packFor(lang: LangMode): LangPack | undefined {
  return PACKS[lang];
}

/** The one generic string picker. Call sites pass the English line and,
    where one exists, the established Bangla line; the four newer
    languages resolve through their pack's `ui` dictionary (keyed by the
    English line itself, so call sites stay readable). */
export function tx(lang: LangMode, en: string, bn?: string): string {
  if (lang === "en") return en;
  if (lang === "bn") return bn ?? en;
  return PACKS[lang]?.ui[en] ?? en;
}

/** tx() with {name} placeholders filled from `vars` — for the few UI
    lines that embed a count or a name. Packs key these by the English
    template (placeholders included), so each language controls its own
    word order. */
export function txf(lang: LangMode, en: string, bn: string | undefined, vars: Record<string, string | number>): string {
  const raw = tx(lang, en, bn);
  return raw.replace(/\{(\w+)\}/g, (_m, k: string) => (vars[k] !== undefined ? String(vars[k]) : `{${k}}`));
}

/** Sidebar / section navigation label. */
export function navLabel(lang: LangMode, id: string, en: string): string {
  if (lang === "bn") return NAV_BN[id] ?? en;
  if (lang === "en") return en;
  return PACKS[lang]?.nav[id] ?? en;
}

/** UI_STR_BN-keyed dashboard/guided strings (nextStep, continueBtn, …). */
export function uiStr(lang: LangMode, key: string, en: string): string {
  if (lang === "bn") return UI_STR_BN[key] ?? en;
  if (lang === "en") return en;
  return PACKS[lang]?.uiStr[key] ?? en;
}

/** INSTRUCTION_BN-keyed instruction lines (requiresLabel, unlocksTitle, …). */
export function instr(lang: LangMode, key: string, en: string): string {
  if (lang === "bn") return INSTRUCTION_BN[key] ?? en;
  if (lang === "en") return en;
  return PACKS[lang]?.instruction[key] ?? en;
}

/** The workflow order line for a practice section (SECTION_ORDER key). */
export function sectionOrderText(lang: LangMode, key: keyof typeof SECTION_ORDER): string {
  const entry = SECTION_ORDER[key];
  if (lang === "bn") return entry.bn;
  if (lang === "en") return entry.en;
  return PACKS[lang]?.sectionOrder[key] ?? entry.en;
}

/** A lesson's title in the active language. */
export function lessonTitle(lang: LangMode, id: string, en: string): string {
  if (lang === "bn") return lessonBnTitle(id, en);
  if (lang === "en") return en;
  return PACKS[lang]?.lessonTitles[id] ?? en;
}

/** A lab / mission / CTF / project title in the active language.
    (Bangla mode keeps the English item titles, as before — its per-item
    Bangla lives in the descriptions below.) */
export function itemTitle(lang: LangMode, id: string, en: string): string {
  if (lang === "en" || lang === "bn") return en;
  return PACKS[lang]?.itemTitles[id] ?? en;
}

/** The one-sentence "what this teaches" description for a practice item,
    or undefined when the active language has none (English mode shows
    the item's own fields instead, as before). */
export function itemDesc(lang: LangMode, id: string): string | undefined {
  if (lang === "bn") return ITEM_BN[id];
  if (lang === "en") return undefined;
  return PACKS[lang]?.itemDescs[id];
}

/** A level's title in the active language. */
export function levelTitle(lang: LangMode, n: number, en: string): string {
  if (lang === "en" || lang === "bn") return en;
  return PACKS[lang]?.levelTitles[n] ?? en;
}
