# Standalone shim of the Muse space SDK — see ../README.md in this folder.
#
# CyberLab was originally built on the Muse platform, whose client imports
# three small things from `@hatch/space-sdk` (a shared React Query client, a
# typed action RPC client, and the production bundler). That package is not
# published to npm, so this folder carries a minimal, API-compatible local
# replacement. Nothing in the app source had to change: package.json points
# the `@hatch/space-sdk` dependency at this folder (`file:./vendor/space-sdk`).
#
# What the shim provides:
# - `client.js` / `client.d.ts` — `spaceQueryClient`, `createActionClient`,
#   `SpaceActionError`, and the `ApiRequest` / `ApiResponse` helper types.
# - `index.js` / `index.d.ts` — `defineAction`, `z` (re-exported from zod),
#   and the `Ctx` / `SpaceDb` / `ActionsModule` types used by
#   `server/src/actions.ts`.
# - `build.mjs` — the client bundler used by `client/build.mjs`
#   (Bun.build + Tailwind, production, content-hashed assets).
# - `styles.css` — the space-container layout rules the app shell expects.
#
# In production on Cloudflare, all account data flows through the Worker in
# `cloudflare/`; the action client is only used for the optional Threat
# Intel enrichment and degrades to an honest "unavailable" state when no
# `./actions` endpoint answers.
