// CyberLab PWA support — install prompt capture, service-worker
// registration, and connectivity-driven sync.
//
// Battery contract (the "charge kom khay" rule, kept in code):
// - NO timers, NO polling, NO periodic anything. The only listeners are
//   one-shot browser events: beforeinstallprompt / appinstalled (fired by
//   the browser), load (once, for the SW registration), and online/offline
//   (fired by the OS when connectivity actually changes).
// - The service worker itself does no background work (see public/sw.js):
//   progress made offline sits in the local store and is pushed by THIS
//   page on the "online" event or the next save event — exactly the
//   save-event-only sync rule the app already follows.
// - Nothing here claims push notifications or background delivery: there
//   is no backend for them, so the UI never offers them.

import { getCfSession, noteOffline, syncNow } from "./store";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export type PwaState = {
  /** The browser has offered a real install prompt we can trigger. */
  canInstall: boolean;
  /** Running as an installed app (standalone display mode). */
  isStandalone: boolean;
  /** iPhone/iPad: no prompt event exists — install is Share → Add to Home Screen. */
  isIOS: boolean;
  swState: "pending" | "registered" | "unsupported" | "failed";
};

function detectStandalone(): boolean {
  try {
    if (window.matchMedia?.("(display-mode: standalone)").matches) return true;
    // iOS Safari's proprietary flag for home-screen apps.
    return (window.navigator as unknown as { standalone?: boolean }).standalone === true;
  } catch {
    return false;
  }
}

function detectIOS(): boolean {
  try {
    const ua = window.navigator.userAgent;
    if (/iphone|ipad|ipod/i.test(ua)) return true;
    // iPadOS reports a desktop Mac UA; touch points give it away.
    return window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1;
  } catch {
    return false;
  }
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;
let snapshot: PwaState = {
  canInstall: false,
  isStandalone: detectStandalone(),
  isIOS: detectIOS(),
  swState: "pending",
};
const listeners = new Set<() => void>();

function emit(patch: Partial<PwaState>) {
  snapshot = { ...snapshot, ...patch };
  listeners.forEach((fn) => fn());
}

export function subscribePwa(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
export function getPwaSnapshot(): PwaState {
  return snapshot;
}

// Manifest + icon links, added at runtime: the HTML bundler resolves
// static <link href> values as bundle assets and would rewrite them to
// hashed file names, but a web app manifest and its icons must live at
// stable URLs (they are copied verbatim to the dist root by build.mjs).
// A dynamically added manifest link is honoured by browser installability
// checks exactly like a static one.
function ensurePwaHeadLinks() {
  const links: { rel: string; href: string; type?: string; sizes?: string }[] = [
    { rel: "manifest", href: "./manifest.webmanifest" },
    { rel: "icon", href: "./icon.svg", type: "image/svg+xml" },
    { rel: "icon", href: "./icon-192.png", type: "image/png", sizes: "192x192" },
    { rel: "apple-touch-icon", href: "./apple-touch-icon.png" },
  ];
  for (const l of links) {
    if (document.querySelector(`link[rel="${l.rel}"][href="${l.href}"]`)) continue;
    const el = document.createElement("link");
    el.rel = l.rel;
    el.href = l.href;
    if (l.type) el.type = l.type;
    if (l.sizes) el.setAttribute("sizes", l.sizes);
    document.head.appendChild(el);
  }
}

// Captured at module load (main.tsx imports this module before first
// paint): Chrome fires beforeinstallprompt early, and a listener added
// later would miss the one real prompt this page load gets.
if (typeof window !== "undefined") {
  ensurePwaHeadLinks();
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault(); // we show our own in-app Install button instead
    deferredPrompt = e as BeforeInstallPromptEvent;
    emit({ canInstall: true });
  });
  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    emit({ canInstall: false, isStandalone: true });
  });
}

/** Trigger the browser's real install prompt. Only callable when
    canInstall is true; resolves with what the learner actually chose. */
export async function promptInstall(): Promise<"accepted" | "dismissed" | "unavailable"> {
  if (!deferredPrompt) return "unavailable";
  const p = deferredPrompt;
  deferredPrompt = null;
  emit({ canInstall: false });
  try {
    await p.prompt();
    const choice = await p.userChoice;
    if (choice.outcome === "accepted") emit({ isStandalone: true });
    return choice.outcome;
  } catch {
    return "unavailable";
  }
}

/** Register the service worker once, on page load.
    The standalone deployment (Cloudflare Pages) serves sw.js at the
    root with a JavaScript content type. Embedded previews of this app
    (e.g. inside the Muse shell) may not serve it at all, or may answer
    with the app shell's HTML — so before registering we probe with a
    plain fetch (an HTTP error there logs nothing to the console, unlike
    a failed worker registration, which would) and only register when a
    real script answers. Any failure is recorded in state for the
    Settings card to report honestly — it never throws: the app works
    exactly as before without a SW. */
export function registerPwaServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    emit({ swState: "unsupported" });
    return;
  }
  const go = async () => {
    try {
      const probe = await fetch("./sw.js", { method: "HEAD" });
      const type = probe.headers.get("content-type") ?? "";
      if (!probe.ok || !type.includes("javascript")) {
        emit({ swState: "failed" });
        return;
      }
    } catch {
      emit({ swState: "failed" });
      return;
    }
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        emit({ swState: "registered" });
        // One update check per page load — not a poll. Lets a fresh
        // deploy replace the old worker promptly; the new worker uses
        // skipWaiting + clients.claim and a per-build cache name.
        void reg.update().catch(() => undefined);
      })
      .catch(() => emit({ swState: "failed" }));
  };
  if (document.readyState === "complete") void go();
  else window.addEventListener("load", () => void go(), { once: true });
}

/** Event-driven connectivity sync: when the OS says the connection is
    back, one push flushes everything saved while offline (the local
    store already holds it — saves were never lost). When it drops, the
    sync status says Offline immediately instead of waiting for the next
    save to fail. No timers are involved on either side. */
export function initConnectivitySync() {
  window.addEventListener("online", () => {
    if (getCfSession()) syncNow();
  });
  window.addEventListener("offline", () => {
    noteOffline();
  });
}
