// Assembles the Cloudflare Pages deploy folder in ./pages-dist:
//   index.html + assets/   from client/dist (the production bundle)
//   sw.js                  the version-stamped service worker (client/pwa-dist)
//   manifest + icons       from client/dist (copied there by the build)
//   _headers               from cloudflare/_headers (Pages security/PWA headers)
//
// Upload the CONTENTS of pages-dist to Cloudflare Pages (Direct Upload),
// or point a Pages project's build output directory at it. See SETUP.md.

import { cp, mkdir, rm } from "node:fs/promises";

const OUT = "./pages-dist";
await rm(OUT, { force: true, recursive: true });
await mkdir(OUT, { recursive: true });
await cp("./client/dist", OUT, { recursive: true });
await cp("./client/pwa-dist/sw.js", `${OUT}/sw.js`);
await cp("./cloudflare/_headers", `${OUT}/_headers`);
console.log("Pages deploy folder ready: pages-dist/ (upload its contents to Cloudflare Pages).");
