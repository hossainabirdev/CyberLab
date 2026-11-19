import { spaceQueryClient } from "@hatch/space-sdk/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { initConnectivitySync, registerPwaServiceWorker } from "./pwa";
import "./theme.css";

// Apply the saved theme before first paint; on the very first visit, honour
// the system preference (dark remains the fallback).
try {
  const saved = localStorage.getItem("cyberlab-theme");
  document.documentElement.dataset.theme = saved === "light" || saved === "dark"
    ? saved
    : (window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark");
} catch { document.documentElement.dataset.theme = "dark"; }

const rootEl = document.querySelector<HTMLElement>("[data-generated-space-root]");
if (!rootEl) {
  throw new Error("missing generated space root element");
}

// If you edit this file: keep `<QueryClientProvider client={spaceQueryClient}>`
// wrapping the app (every space shares the SDK's QueryClient), and keep
// BOTH the `hatch-space-root` class AND the `data-hatch-space-root`
// attribute on the outer div. The SDK styles select on
// `.hatch-space-root[data-hatch-space-root]` to apply mobile safe-area
// insets (notches, gesture bars, etc.), correct viewport sizing, and the
// hosting header/chrome offsets — dropping either breaks layout silently.
createRoot(rootEl).render(
  <StrictMode>
    <QueryClientProvider client={spaceQueryClient}>
      <div className="hatch-space-root" data-hatch-space-root>
        <App />
      </div>
    </QueryClientProvider>
  </StrictMode>,
);

// PWA: register the offline-shell service worker (once, on load) and the
// event-driven online/offline sync. Both are fire-and-forget and can
// never break the app — see pwa.ts for the battery contract.
registerPwaServiceWorker();
initConnectivitySync();
