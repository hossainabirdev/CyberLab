// Install + offline + battery UI for the PWA. Two pieces:
// - PwaInstallCard: the full honest panel in Settings (install state,
//   the real install button or the iOS steps, what offline means, what
//   is NOT offered, and how the app keeps battery use low).
// - PwaInstallBanner: a small dismissible strip on the Dashboard that
//   only appears when this browser can actually install the app (or is
//   an iPhone/iPad, where the steps live one tap away in Settings).
// Neither piece ever shows a fake install button: on Chromium the button
// triggers the browser's own captured beforeinstallprompt; on iOS there
// is deliberately no button, only the real Share → Add to Home Screen
// steps; anywhere else the card explains the browser-menu route.

import { useState, useSyncExternalStore } from "react";
import { tx as txI } from "./i18n";
import { Card } from "./ui";
import { getPwaSnapshot, promptInstall, subscribePwa } from "./pwa";
import { getState } from "./store";

const DISMISS_KEY = "cyberlab-install-dismissed";

function usePwa() {
  return useSyncExternalStore(subscribePwa, getPwaSnapshot, getPwaSnapshot);
}

export function PwaInstallCard() {
  const pwa = usePwa();
  const lang = getState().profile.lang;
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState("");

  const install = async () => {
    setBusy(true);
    const r = await promptInstall();
    setBusy(false);
    setResult(
      r === "accepted"
        ? txI(lang, "Installing — CyberLab will appear on your home screen / app list shortly.", "Install হচ্ছে — CyberLab শীঘ্রই তোমার home screen / app list-এ আসবে।")
        : r === "dismissed"
          ? txI(lang, "Not installed this time — you can install later from this same card.", "এবার install করলে না — এই card থেকেই পরে যেকোনো সময় করা যাবে।")
          : txI(lang, "The browser is not offering an install prompt right now — follow the steps below instead.", "Browser এখন install prompt দিচ্ছে না — নিচের নির্দেশনা অনুসরণ করো।"),
    );
  };

  return (
    <Card className="space-y-3">
      <h3 className="font-semibold text-[color:var(--text)]">{txI(lang, "Install CyberLab as an app", "App হিসেবে install করো (PWA)")}</h3>

      {pwa.isStandalone ? (
        <p role="status" className="rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-sm text-emerald-200">
          {txI(lang, "✓ CyberLab is installed on this device — it is running in its own window, without browser tabs.", "✓ CyberLab এই device-এ app হিসেবে install করা আছে — নিজের window-তে, browser-এর tab ছাড়াই চলছে।")}
        </p>
      ) : pwa.canInstall ? (
        <div className="space-y-2">
          <p className="text-sm leading-relaxed text-[color:var(--dim)]">
            {txI(lang, "Install CyberLab like a real app: it opens from your home screen / app list in one tap, runs full-screen, and after your first visit the lessons open with no internet connection.", "CyberLab-কে আসল app-এর মতো install করো: home screen / app list থেকে এক tap-এ খুলবে, পুরো screen জুড়ে চলবে, আর প্রথম visit-এর পর internet ছাড়াও পাঠ খুলবে।")}
          </p>
          <button
            type="button"
            onClick={() => void install()}
            disabled={busy}
            aria-label={txI(lang, "Install the CyberLab app", "CyberLab app install করো")}
            className="cl-btn min-h-[48px] rounded-xl bg-[color:var(--accent2)] px-5 py-2.5 text-sm font-bold text-white disabled:opacity-50"
          >
            {busy ? (txI(lang, "Opening the browser prompt…", "Browser-এর prompt খুলছে…")) : txI(lang, "⬇ Install app", "⬇ Install app")}
          </button>
        </div>
      ) : pwa.isIOS ? (
        <div className="space-y-2">
          <p className="text-sm leading-relaxed text-[color:var(--dim)]">
            {txI(lang, "On iPhone/iPad, Safari never shows an install button — the real way is:", "iPhone/iPad-এ Safari নিজে থেকে install button দেয় না — আসল উপায়টা হলো:")}
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-sm leading-relaxed text-[color:var(--text)]">
            <li>{txI(lang, "Tap Safari's Share button (⬆)", "Safari-র নিচের Share button (⬆) চাপো")}</li>
            <li>{txI(lang, "Choose “Add to Home Screen”", "“Add to Home Screen” বেছে নাও")}</li>
            <li>{txI(lang, "Tap “Add” — CyberLab lands on your home screen as an app", "“Add” চাপো — CyberLab home screen-এ app হিসেবে আসবে")}</li>
          </ol>
        </div>
      ) : (
        <p className="text-sm leading-relaxed text-[color:var(--dim)]">
          {txI(lang, "This browser has not offered an install prompt yet (normal on a first visit). Use the browser menu's “Install app” / “Add to Home screen” — in Chrome/Edge an install icon may also appear in the address bar.", "এই browser এখনো install prompt দেয়নি (প্রথম visit-এ স্বাভাবিক)। Browser-এর menu থেকে “Install app” / “Add to Home screen” বেছে নিলেই হবে — Chrome/Edge-এ address bar-এর install icon-ও আসতে পারে।")}
        </p>
      )}
      {result ? (
        <p role="status" className="text-sm text-[color:var(--accent)]">
          {result}
        </p>
      ) : null}

      <div className="space-y-1.5 border-t border-[color:var(--border)] pt-3 text-sm leading-relaxed text-[color:var(--dim)]">
        <p>
          <strong className="text-[color:var(--text)]">{txI(lang, "Offline: ", "Offline: ")}</strong>
          {txI(lang, "After your first visit, the app and every lesson open with no connection. Work you finish offline stays saved on this device and syncs to your account when you are back online — the Synced / Saving… / Offline line in the sidebar always shows the true state.", "প্রথম visit-এর পর app আর সব পাঠ internet ছাড়াই খোলে। Offline-এ শেষ করা কাজ এই device-এই save থাকে — online হলেই তোমার account-এ sync হয়, আর sidebar-এর Synced / Saving… / Offline লাইনটা সবসময় সত্যি অবস্থাটাই দেখায়।")}
        </p>
        <p>
          <strong className="text-[color:var(--text)]">{txI(lang, "What is not offered: ", "যা নেই: ")}</strong>
          {txI(lang, "no push notifications — CyberLab never messages you in the background, because the backend delivery service that would be needed for that does not exist in this app.", "push notification নেই — CyberLab background-এ তোমাকে কোনো message পাঠায় না, কারণ তার জন্য দরকারি backend delivery ব্যবস্থা এই app-এ নেই।")}
        </p>
        <p>
          <strong className="text-[color:var(--text)]">{txI(lang, "Battery (built to sip charge): ", "ব্যাটারি (charge কম খায়): ")}</strong>
          {txI(lang, "no polling and no background sync — progress is sent only at the moment you save. No looping animations; motion is small transitions only and honours your system's reduced-motion setting. The Python engine (Pyodide) never loads at startup — only when you press Run on a Python try box. Dark theme can also save a little extra on OLED screens — a small, real effect, not a big one.", "কোনো polling বা background sync নেই — progress শুধু save করার মুহূর্তেই পাঠানো হয়। কোনো অনন্ত animation নেই; animation শুধু ছোট ছোট transition, তাও system-এর reduced-motion setting মানা হয়। Python engine (Pyodide) app খুললেই load হয় না — শুধু Python try box-এ Run চাপলেই আসে। আর Dark theme OLED screen-এ সামান্য বাড়তি charge বাঁচাতে পারে — বেশি নয়, তবে আসল।")}
        </p>
        <p className="text-xs">
          {pwa.swState === "registered"
            ? txI(lang, "Service worker: active (offline shell ready).", "Service worker: চালু আছে (offline shell তৈরি)।")
            : pwa.swState === "unsupported"
              ? txI(lang, "Service worker: not supported by this browser — the app keeps working online as before.", "Service worker: এই browser সমর্থন করে না — app আগের মতোই online-এ চলবে।")
              : pwa.swState === "failed"
                ? txI(lang, "Service worker: could not start in this preview/embedding — the offline shell works on the published site.", "Service worker: এই preview/embedding-এ চালু করা যায়নি — প্রকাশিত site-এ offline shell কাজ করবে।")
                : txI(lang, "Service worker: starting…", "Service worker: চালু হচ্ছে…")}
        </p>
      </div>
    </Card>
  );
}

export function PwaInstallBanner({ onGoSettings }: { onGoSettings: () => void }) {
  const pwa = usePwa();
  const lang = getState().profile.lang;
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  });
  const [busy, setBusy] = useState(false);

  if (pwa.isStandalone || dismissed) return null;
  if (!pwa.canInstall && !pwa.isIOS) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* private mode — dismissal lasts this session */
    }
  };

  return (
    <section
      aria-label={txI(lang, "Install the app", "App install")}
      className="flex flex-wrap items-center gap-3 rounded-[var(--radius)] border border-[color:var(--border)] bg-[color:var(--surface)] p-3.5 shadow"
    >
      <p className="min-w-[220px] flex-1 text-sm leading-relaxed text-[color:var(--dim)]">
        <strong className="text-[color:var(--text)]">{txI(lang, "Keep CyberLab as an app — ", "CyberLab-কে app হিসেবে রাখো — ")}</strong>
        {txI(lang, "opens in one tap, lessons work with no internet, and it sips battery (no background work at all).", "এক tap-এ খোলে, internet ছাড়াও পাঠ চলে, charge-ও কম খায় (কোনো background কাজ নেই)।")}
      </p>
      {pwa.canInstall ? (
        <button
          type="button"
          disabled={busy}
          aria-label={txI(lang, "Install the CyberLab app", "CyberLab app install করো")}
          onClick={async () => {
            setBusy(true);
            await promptInstall();
            setBusy(false);
          }}
          className="cl-btn min-h-[44px] rounded-xl bg-[color:var(--accent2)] px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
        >
          {txI(lang, "⬇ Install app", "⬇ Install app")}
        </button>
      ) : (
        <button
          type="button"
          onClick={onGoSettings}
          aria-label={txI(lang, "See the iPhone install steps in Settings", "iPhone-এ install করার ধাপ Settings-এ দেখো")}
          className="min-h-[44px] rounded-xl border border-[color:var(--border)] px-4 py-2 text-sm font-semibold text-[color:var(--text)]"
        >
          {txI(lang, "How to install →", "কীভাবে install করবে →")}
        </button>
      )}
      <button
        type="button"
        onClick={dismiss}
        aria-label={txI(lang, "Dismiss the install banner", "Install banner বন্ধ করো")}
        className="min-h-[44px] rounded-lg px-2.5 py-2 text-sm text-[color:var(--dim)]"
      >
        ✕
      </button>
    </section>
  );
}
