# CyberLab — Setup Guide (Step by Step)

This repository contains everything needed to run and deploy CyberLab. Follow the steps in this order:

**Clone → Install → Local run → D1 database → Worker deploy → Binding → BREVO_API_KEY secret → Pages deploy → Test**

---

## Prerequisites

1. **Git** — install from https://git-scm.com and verify with `git --version`.
2. **Bun** — this project's package manager and build tool.
   - Windows (PowerShell): `powershell -c "irm bun.sh/install.ps1 | iex"`
   - macOS / Linux: `curl -fsSL https://bun.sh/install | bash`
   - Open a new terminal afterwards and verify with `bun --version`.
3. **A Cloudflare account** — https://dash.cloudflare.com (the free plan is enough).
4. **A Brevo account** (only for password-reset email) — https://www.brevo.com (the free plan includes 300 emails/day).

---

## Step 1 — Clone

```bash
git clone https://github.com/hossainabirdev/cyberlab.git
cd cyberlab
```

The folder structure: `client/` (the app source), `cloudflare/` (Worker + D1 schema), `server/` (reference actions), `vendor/` (local SDK shim), `scripts/` (packaging helpers).

## Step 2 — Install

```bash
bun install
```

All dependencies land in `node_modules/`. That folder is never pushed to Git (it is listed in `.gitignore`).

TypeScript check (catches type errors before anything is deployed):

```bash
bun run typecheck
```

## Step 3 — Environment variables (.env)

The Worker needs exactly two environment values, and **neither of them ever lives in this repository**:

| Name | Required | What it is |
| --- | --- | --- |
| `BREVO_API_KEY` | Yes, for password-reset email | Your Brevo API key. The Worker reads it as `env.BREVO_API_KEY` — from a Cloudflare secret in production, never from code. |
| `BREVO_FROM` | No | The verified Brevo sender email. If unset, the Worker's built-in default sender is used. |

The repo ships **`.env.example`** — a template with the variable names and empty placeholders only:

```bash
cp .env.example .env
```

Create your own local `.env` this way and fill in your values **locally**. Then follow these rules without exception:

- **Never commit `.env`.** It is listed in `.gitignore` on purpose. A committed API key is a leaked API key — deleting the file later does not remove it from Git history.
- **Production does not read your local `.env`.** On Cloudflare, the same values are set as **Worker secrets** (Step 7). The local file is only for your own machine (for example, `wrangler dev` reads `.dev.vars`, which is also git-ignored — you can copy the same values there).
- If a key ever does get pushed by accident: revoke it in Brevo immediately, create a new key, and update the Worker secret.

## Step 4 — Local run

```bash
bun run build:pages
```

This builds the app into `client/dist/` and assembles a ready-to-deploy folder, `pages-dist/` (containing `index.html`, `assets/`, `sw.js`, `manifest.webmanifest`, the icons, and `_headers`).

To try it locally:

```bash
cd pages-dist
python -m http.server 8080
```

Then open `http://localhost:8080` in a browser.

**One honest limitation:** locally, the full app — every lesson, lab and playground — works, and progress is saved in the browser's local storage. **Accounts (sign up / sign in) will not work from localhost**, because the Worker's CORS allowlist only contains the production Pages domains (`cyberlab27.pages.dev` and `cyberlab2027.pages.dev`). That is deliberate, for security. Test accounts on the deployed Pages site (Step 8). If you fork this project under your own domain, add your domain to `ALLOWED_ORIGIN_RE` at the top of `cloudflare/worker.js` and redeploy the Worker.

---

## Step 5 — Create the D1 database and run the schema

1. Cloudflare Dashboard → **Workers & Pages → D1 → Create database** → name it `cyberlab-db` → **Create**.
2. Open the database → **Console** tab.
3. Open `cloudflare/schema.sql` from this repo, copy the **entire file**, paste it into the Console → **Execute**.
4. Verify:

```sql
SELECT name FROM sqlite_master WHERE type='table';
```

You should see **8 tables**: `users`, `sessions`, `login_failures`, `progress_items`, `quiz_attempts`, `research_notes`, `password_resets`, `user_state`.

> CLI alternative: `bunx wrangler d1 create cyberlab-db`, then `bunx wrangler d1 execute cyberlab-db --remote --file=cloudflare/schema.sql`

## Step 6 — Deploy the Worker

### Option A — Dashboard (the method used for this project)

1. Dashboard → **Workers & Pages → Create → Worker** → name it exactly `cyberlab` → **Deploy** (a "Hello World" worker deploys first; that is expected).
2. Open the Worker → **Edit code** → delete all the existing code → paste the **entire contents** of `cloudflare/worker.js` from this repo → **Deploy**.
3. Verify: open the Worker URL (`https://cyberlab.<your-subdomain>.workers.dev`) in a browser. You should see:

```json
{"ok":true,"service":"cyberlab-worker","version":1}
```

### Option B — Wrangler CLI

```bash
cd cloudflare
bunx wrangler login
bunx wrangler deploy
```

`wrangler.toml` already sets the Worker name to `cyberlab` and contains this project's D1 `database_id`. If you deploy to a different Cloudflare account, replace that id with your own database's id (Dashboard → D1 → your database → Settings).

## Step 7 — Binding + the BREVO_API_KEY secret

### 7a. Binding — connect the Worker to the database

The Worker code finds the database through `env.DB`. Without this binding, the Worker cannot reach the database at all.

1. Worker → **Settings → Bindings → Add binding** → **D1 database**.
2. **Variable name: exactly `DB`** (uppercase — any other name will not work).
3. Select the `cyberlab-db` database → **Save / Deploy**.

### 7b. Secret — BREVO_API_KEY

Without this secret the whole app still works; only forgot-password email is unavailable (the endpoint then returns an honest `503`). **The key's value is never written into code, Git, or any file in this repo** — it is set only as a Worker secret (see Step 3).

1. In Brevo: **Settings → SMTP & API → API Keys → Generate a new API key** → copy the key (it is shown only once). Also verify a **sender email** in Brevo (Senders → add your email → click the confirmation email).
2. In the Cloudflare Dashboard: Worker `cyberlab` → **Settings → Variables and Secrets → Add** —
   - Type: **Secret**
   - Name: `BREVO_API_KEY`
   - Value: paste the key you copied from Brevo → **Deploy**.
3. (Optional) To change the sender address, add a plain variable in the same place: Name `BREVO_FROM`, Value = your verified Brevo sender email. If unset, the Worker's default sender is used.

> CLI alternative: `bunx wrangler secret put BREVO_API_KEY` (run from the `cloudflare/` folder).

## Step 8 — Deploy the frontend to Pages

1. Build first (Step 4): `bun run build:pages` — the `pages-dist/` folder must be ready.
2. Dashboard → **Workers & Pages → Create → Pages → Upload assets** → choose a project name (this project uses `cyberlab27`) → upload the **contents** of `pages-dist/` (the files inside it, not the folder itself) → **Deploy**.
3. The site goes live at `https://<project-name>.pages.dev`.

**Important:** the frontend carries the Worker URL in `DEFAULT_WORKER_URL` in `client/src/store.ts`. If your Worker's URL is different, put your own `workers.dev` URL on that one line, rebuild with `bun run build:pages`, and upload to Pages again.

## Step 9 — Test the whole chain

On the deployed Pages site, check each of these in order:

- [ ] The site loads, with no yellow "Cannot reach the server" box
- [ ] **Create account** — a new account can be created with a username, email and password
- [ ] **Sign in** — the same account signs in and reaches the Dashboard
- [ ] Complete a lesson or two → refresh the page → progress is still there (this proves Worker → D1 saving works)
- [ ] Sign in from a different browser / incognito window → the same progress appears
- [ ] **Language button** — the dropdown switches between English, Bangla, Spanish, German, Chinese and Hindi
- [ ] **Forgot password** — enter your email, a 6-digit code arrives from Brevo, the code sets a new password, and the new password signs in

If all of these pass, the full chain is connected: **Pages → Worker → D1**, and **Worker → Brevo**.

---

## Troubleshooting

| Symptom | Cause and fix |
| --- | --- |
| Yellow "Cannot reach the server" box | A CORS or Worker URL problem. Check that the Worker is deployed and its URL returns `{"ok":true}` in a browser. If your Pages domain is not in the allowlist, check `ALLOWED_ORIGIN_RE` in `worker.js`. |
| Server error on sign in | Usually the binding is missing or not named `DB`. Recheck Step 7a. |
| Forgot password returns 503 | The `BREVO_API_KEY` secret is not set. See Step 7b. |
| Reset code email never arrives | The sender email is not verified in Brevo, or the email landed in Spam. |
| Pages shows 522 / a blank page | Make sure `index.html` is at the upload root — upload the contents of `pages-dist/`, not the folder itself. |
| Old version still shows after a new deploy | Service worker cache. Hard-refresh once (Ctrl+Shift+R); each new build stamps a fresh cache version automatically. |

## Updating later

- **Frontend changed only:** `bun run build:pages`, then upload the contents of `pages-dist/` to Pages again.
- **Only `worker.js` changed:** paste the new code into the Worker (Edit code) and Deploy. Bindings and secrets stay in place — they do not need to be set again.
- **`schema.sql` changed:** run only the new/changed statements in the D1 Console. Re-running the whole file is safe for existing tables (`IF NOT EXISTS`), but changes such as a new column must be applied with an explicit `ALTER TABLE`.
