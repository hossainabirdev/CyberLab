// CyberLab service worker — install + offline app shell ONLY.
//
// Honest scope (do not extend without the matching backend):
// - NO push notifications, NO background sync, NO periodic sync, NO timers.
//   This worker does nothing at all until the browser makes a request
//   through it. Progress made offline stays in the page's local store and
//   is pushed by the PAGE when the browser fires its "online" event —
//   never by this worker pretending to sync in the background.
// - Account/API traffic is NEVER cached: the Cloudflare account Worker
//   (login + progress), the same-origin action endpoint, and every
//   non-GET request go straight to the network, so stale account or
//   progress data can never be served from a cache.
//
// Caching model (battery + correctness):
// - App shell + hashed static assets + icons: cache-first. Bundle file
//   names are content-hashed, so a cached copy can never be the wrong
//   version of a file.
// - The cache name carries a per-build version stamped in by
//   client/build.mjs from the bundle hash — every new deploy installs a
//   new cache and deletes the old one on activate (skipWaiting +
//   clients.claim, so no visitor is stuck on a dead old worker).
// - Webfonts: cache-first in a separate long-lived cache (the provider
//   versions them; re-downloading them every visit would waste data
//   and battery).
// - Everything else cross-origin (Pyodide CDN, the Piston code runner):
//   network only, never cached by this worker.

const VERSION = "jkhvn79d";
const SHELL_CACHE = "cyberlab-shell-" + VERSION;
const FONT_CACHE = "cyberlab-fonts-v1";

const SHELL_FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
].concat(["./assets/index-9h5hmbec.css","./assets/index-jkhvn79d.js"]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith("cyberlab-shell-") && k !== SHELL_CACHE)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

async function cacheFirst(cacheName, request, navigationFallback) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(request, { ignoreSearch: Boolean(navigationFallback) });
  if (hit) return hit;
  try {
    const res = await fetch(request);
    if (res && (res.status === 200 || res.type === "opaque")) {
      cache.put(request, res.clone());
    }
    return res;
  } catch (err) {
    if (navigationFallback) {
      const shell = await cache.match(navigationFallback);
      if (shell) return shell;
    }
    throw err;
  }
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  // Writes (progress saves, logins, action calls) are never intercepted.
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Account API on the Cloudflare Worker: network only, never cached —
  // auth and progress responses must always be live.
  if (url.hostname.endsWith("workers.dev")) return;
  // Remote code execution (Universal Playground): network only.
  if (url.hostname === "emkc.org") return;

  // Webfonts: cache-first (static, provider-versioned).
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(cacheFirst(FONT_CACHE, request, null));
    return;
  }

  // Any other cross-origin GET (e.g. the Pyodide CDN, loaded on demand by
  // the page only when a Python box runs): network only.
  if (url.origin !== self.location.origin) return;

  // Same-origin action endpoint (the app backend): network only.
  if (url.pathname.endsWith("/actions")) return;

  // Page navigations: the cached shell opens instantly and works offline;
  // a fresh copy is fetched (and cached) whenever the cache has none.
  if (request.mode === "navigate") {
    event.respondWith(cacheFirst(SHELL_CACHE, request, "./index.html"));
    return;
  }

  // Hashed bundles, icons, manifest and other same-origin statics.
  event.respondWith(cacheFirst(SHELL_CACHE, request, null));
});
