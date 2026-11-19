// Standalone shim for "@hatch/space-sdk/client".
//
// CyberLab's client imports exactly three things from the SDK client:
//   - spaceQueryClient   (the shared TanStack Query client used by main.tsx)
//   - createActionClient (typed RPC client used by client/src/api.ts)
//   - the ApiRequest / ApiResponse helper types (type-only, in client.d.ts)
//
// On the Muse platform these come from the real SDK. In this standalone
// repository the app talks to the Cloudflare Worker in cloudflare/ for all
// account data (see client/src/store.ts); the action client below is used
// only for the optional Threat Intel enrichment and follows the same wire
// contract as the original: POST { action, args } to ./actions and return
// the parsed JSON body. If no ./actions endpoint exists (plain Cloudflare
// Pages hosting), the call rejects and the panel shows its honest
// "unavailable" state — exactly what the app already does on failure.

import "./styles.css";
import { QueryClient } from "@tanstack/react-query";

/** Shared query client (conservative defaults: no retry storms). */
export const spaceQueryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, staleTime: 30_000, refetchOnWindowFocus: false },
    mutations: { retry: 0 },
  },
});

/** Error thrown when an action call returns a non-OK HTTP response. */
export class SpaceActionError extends Error {
  constructor(message, status, detail = message) {
    super(message);
    this.name = "SpaceActionError";
    this.status = status;
    this.detail = detail;
    this.issues = [];
  }
}

/**
 * Creates a typed action client: every property access returns an async
 * function that POSTs { action: <name>, args } to the endpoint and resolves
 * with the parsed JSON response.
 */
export function createActionClient(options = {}) {
  const endpoint = options.endpoint ?? "./actions";
  const doFetch = options.fetch ?? globalThis.fetch.bind(globalThis);
  return new Proxy(
    {},
    {
      get(_target, prop) {
        if (typeof prop !== "string") return undefined;
        return async (args) => {
          const res = await doFetch(endpoint, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ action: prop, args: args ?? {} }),
          });
          const text = await res.text();
          let data = null;
          try {
            data = text ? JSON.parse(text) : null;
          } catch {
            data = null;
          }
          if (!res.ok) {
            const message =
              (data && typeof data.message === "string" && data.message) ||
              `Action ${prop} failed (HTTP ${res.status})`;
            throw new SpaceActionError(message, res.status, text);
          }
          return data;
        };
      },
    },
  );
}
