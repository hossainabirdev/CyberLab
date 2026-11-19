// CyberLab client bundle (standalone repository build).
//
// Bundling is delegated to the local SDK shim in vendor/space-sdk, which
// runs Bun.build() over client/index.html with the Tailwind plugin:
// production mode, minified, content-hashed asset names under assets/.
//
// PWA statics: client/public/ holds the manifest, icons and the service
// worker source. The manifest + icons are copied to the dist root so they
// ship at stable, unhashed URLs (a manifest only works at a fixed path).
//
// The service worker itself is stamped here with a per-build cache version
// derived from the bundle's content hash plus the exact hashed asset list
// to precache, and written to client/pwa-dist/sw.js. The Pages packaging
// step (scripts/make-pages.mjs) places it at the deploy root next to
// index.html, where it registers and installs the offline shell.

import { buildClient } from "@hatch/space-sdk/build";
import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";

await buildClient();

await cp("./client/public", "./client/dist", {
  recursive: true,
  filter: (src) => !src.endsWith("sw.js"),
});

const assetNames = (await readdir("./client/dist/assets")).sort();
const jsBundle = assetNames.find((n) => n.endsWith(".js")) ?? "app";
const version = jsBundle.replace(/^index-/, "").replace(/\.js$/, "");
const precache = assetNames.map((n) => `./assets/${n}`);

const sw = await readFile("./client/public/sw.js", "utf8");
if (!sw.includes("__CACHE_VERSION__") || !sw.includes("__PRECACHE_ASSETS__")) {
  throw new Error("sw.js placeholders missing — refusing to ship an unstamped service worker");
}
await mkdir("./client/pwa-dist", { recursive: true });
await writeFile(
  "./client/pwa-dist/sw.js",
  sw
    .replaceAll("__CACHE_VERSION__", version)
    .replaceAll("__PRECACHE_ASSETS__", JSON.stringify(precache)),
);
console.log(`PWA: manifest + icons copied to dist; stamped sw.js (cache "${version}", ${precache.length} precached assets) written to client/pwa-dist/.`);
