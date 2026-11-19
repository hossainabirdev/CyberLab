// Standalone shim for "@hatch/space-sdk/build".
//
// Replicates the canonical Muse client bundler closely enough for a
// standalone build: Bun.build() over client/index.html with the Tailwind
// plugin, production NODE_ENV, minified output, and content-hashed asset
// names under assets/. The Muse platform driver guard and the pdf.js
// asset handling of the original are platform concerns and are not needed
// here (CyberLab ships no PDF feature).

import { basename } from "node:path";
import { rm } from "node:fs/promises";
import tailwindPlugin from "bun-plugin-tailwind";

const ENTRY = "./client/index.html";
const OUTDIR = "./client/dist";

export async function buildClient(_options = {}) {
  if (typeof Bun === "undefined" || typeof Bun.build !== "function") {
    throw new Error("buildClient() must run under Bun");
  }
  await rm(OUTDIR, { force: true, recursive: true });
  const result = await Bun.build({
    entrypoints: [ENTRY],
    outdir: OUTDIR,
    minify: true,
    define: {
      "process.env.NODE_ENV": JSON.stringify("production"),
      __HATCH_SPACE_PLATFORM_VERSION__: JSON.stringify(0),
    },
    naming: {
      asset: "assets/[name]-[hash].[ext]",
      chunk: "assets/[name]-[hash].[ext]",
      entry: "[name].[ext]",
    },
    plugins: [tailwindPlugin],
  });
  if (!result.success) {
    for (const log of result.logs) console.error(log);
    throw new Error("buildClient() failed; see logged diagnostics");
  }
  // Bun writes imported assets to assets/<name>-<hash>.<ext> but emits the
  // import URL as a bare ./<name>-<hash>.<ext>; re-prefix those URLs so the
  // built page finds its assets (same fix as the canonical bundler).
  const assetFiles = result.outputs
    .filter((output) => output.kind === "asset")
    .map((output) => basename(output.path));
  for (const output of result.outputs) {
    if (!/\.(js|css|html)$/.test(output.path)) continue;
    let text = await output.text();
    let changed = false;
    for (const name of assetFiles) {
      const bare = `./${name}`;
      if (text.includes(bare)) {
        text = text.split(bare).join(`./assets/${name}`);
        changed = true;
      }
    }
    if (changed) await Bun.write(output.path, text);
  }
}
