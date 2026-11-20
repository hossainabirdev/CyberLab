// CyberLab sound effects — tiny synthesized UI tones, generated in code
// with the WebAudio oscillator API. There are NO audio files: the bundle
// stays light and the PWA carries nothing extra to cache.
//
// Rules (product decisions, keep them):
// - Sounds play ONLY from explicit user-action handlers (a tap, an answer
//   submit, a completion the learner just caused). Nothing in this module
//   runs at import time, on page load, or on a timer — no autoplay, no
//   looping, no background sound.
// - Volumes are low and tones short (50–450 ms): a professional hint of
//   feedback, never a jingle.
// - One switch silences everything: the Settings Sound toggle writes the
//   same localStorage flag every play function checks first. Default ON.

const KEY = "cyberlab-sound";

const listeners = new Set<() => void>();

/** Whether sound effects are enabled on this device (default: on). */
export function getSoundEnabled(): boolean {
  try {
    return localStorage.getItem(KEY) !== "off";
  } catch {
    return true;
  }
}

/** useSyncExternalStore subscription for the Settings toggle. */
export function subscribeSound(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function setSoundEnabled(on: boolean) {
  try {
    localStorage.setItem(KEY, on ? "on" : "off");
  } catch {
    /* private mode — the in-memory choice still applies this session */
  }
  listeners.forEach((fn) => fn());
}

// One shared AudioContext, created lazily inside the first user-action
// handler that plays a sound (browsers require a user gesture anyway).
let actx: AudioContext | null = null;
function audio(): AudioContext | null {
  try {
    if (!actx) {
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return null;
      actx = new AC();
    }
    if (actx.state === "suspended") void actx.resume();
    return actx;
  } catch {
    return null;
  }
}

type ToneOpts = { at?: number; dur?: number; type?: OscillatorType; vol?: number; slideTo?: number };

/** One soft oscillator blip with a fast attack and an exponential fade —
    no clicks or pops at the edges. */
function tone(freq: number, { at = 0, dur = 0.08, type = "sine", vol = 0.05, slideTo }: ToneOpts = {}) {
  const ac = audio();
  if (!ac) return;
  try {
    const t0 = ac.currentTime + at;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  } catch {
    /* audio unavailable — silence is always an acceptable outcome */
  }
}

/** Soft tick for buttons and tabs. */
export function sfxClick() {
  if (!getSoundEnabled()) return;
  tone(660, { dur: 0.05, vol: 0.04 });
}

/** Gentle two-note rise for a pass: quiz, practical, lesson, checkpoint,
    lab, mission, CTF solve. */
export function sfxSuccess() {
  if (!getSoundEnabled()) return;
  tone(523.25, { dur: 0.09, vol: 0.05 });
  tone(783.99, { at: 0.07, dur: 0.12, vol: 0.05 });
}

/** Soft low tone for a wrong answer — noticeable, never harsh. */
export function sfxError() {
  if (!getSoundEnabled()) return;
  tone(185, { dur: 0.16, type: "triangle", vol: 0.05, slideTo: 140 });
}

/** Short four-note arpeggio reserved for passing a Level Final. */
export function sfxLevelUp() {
  if (!getSoundEnabled()) return;
  tone(523.25, { dur: 0.1, vol: 0.05 });
  tone(659.25, { at: 0.08, dur: 0.1, vol: 0.05 });
  tone(783.99, { at: 0.16, dur: 0.1, vol: 0.05 });
  tone(1046.5, { at: 0.24, dur: 0.16, vol: 0.055 });
}
