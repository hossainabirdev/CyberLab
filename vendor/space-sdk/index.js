// Standalone shim for the "@hatch/space-sdk" root entry (server-side
// surface). CyberLab's server/src/actions.ts uses defineAction, z, and the
// Ctx / SpaceDb / ActionsModule types. On the Muse platform the real SDK
// provides the runtime that executes these actions; in this repository the
// server folder is kept as the reference implementation of the optional
// enrichment actions (Threat Intel / KEV feed), while the production
// backend is the Cloudflare Worker in cloudflare/. defineAction here
// simply returns the definition object (with the same brand string), so
// the module loads and typechecks standalone.

export { z } from "zod";

export const ACTION_BRAND = "@hatch/space-sdk/action/v1";

export function defineAction(spec) {
  return { __brand: ACTION_BRAND, ...spec };
}

export function isAction(value) {
  return (
    typeof value === "object" &&
    value !== null &&
    value.__brand === ACTION_BRAND
  );
}
