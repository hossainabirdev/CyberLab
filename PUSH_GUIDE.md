# Pushing This Project to GitHub (Step by Step)

This guide covers pushing CyberLab's code from your own PC to an empty public GitHub repository named `cyberlab`. Doing it by hand, command by command, is deliberate — it is how the real Git workflow is learned.

**The one rule before anything else:** no secret ever goes into the repository — not the value of `BREVO_API_KEY`, not a `.env` file, not a password. This pack contains no secrets, but you will still check with your own eyes in Step 4 before pushing.

---

## Step 1 — Prepare Git on your PC (one time only)

1. Install Git: https://git-scm.com/download/win (Windows) — accept the defaults during setup.
2. Open a terminal (Command Prompt or PowerShell) and verify:

```bash
git --version
```

3. Set your name and email (one time only). Use the same email as your GitHub account so commits are attributed to your profile:

```bash
git config --global user.name "Md Abir Hossain"
git config --global user.email "hossainabirdev@gmail.com"
```

## Step 2 — Create the empty public repository on GitHub

1. Sign in at https://github.com (account: **hossainabirdev**).
2. Top right: **+** → **New repository**.
3. **Repository name:** exactly `cyberlab`.
4. Select **Public**.
5. ⚠️ **Most important part:** tick **none** of the following —
   - ❌ "Add a README file"
   - ❌ "Add .gitignore"
   - ❌ "Choose a license"

   The repository must be completely **empty**. If any of these are ticked, GitHub creates a commit of its own, and pushing from your PC will conflict. This pack already contains its own README and .gitignore.
6. Click **Create repository**. GitHub will show a page with the repository URL:

```
https://github.com/hossainabirdev/cyberlab.git
```

You will need this URL in Step 5.

## Step 3 — Unpack the project on your PC

1. Unzip `cyberlab-github-repo-v45-2026-11-20.zip`. Inside is a single folder named `cyberlab` — that folder is the whole project.
2. Put the folder somewhere sensible, for example `D:\Projects\cyberlab`.
3. Look inside and confirm these are present: `README.md`, `SETUP.md`, `PUSH_GUIDE.md`, `.env.example`, `.gitignore`, `package.json`, `client/`, `cloudflare/`, `server/`, `vendor/`, `scripts/`.

## Step 4 — Safety check before pushing (do not skip)

In a terminal, from inside the `cyberlab` folder:

```bash
dir /a
```

(On macOS/Linux: `ls -a`.)

Check:

- [ ] There is **no** `.env` file (only `.env.example`, which contains empty placeholders — that one is safe and is meant to be committed)
- [ ] There is no `.zip` file
- [ ] There is no `node_modules` folder (if there is, delete it — `bun install` recreates it, and `.gitignore` excludes it from Git anyway)
- [ ] No file contains your Brevo API key. To be sure, search the whole folder for the first few characters of the key you copied from Brevo — there should be no match anywhere. If there is a match, stop, remove it from that file, and only then continue.

## Step 5 — Push with Git commands

Open a terminal inside the `cyberlab` folder and run these one by one:

```bash
# 1. Turn this folder into a Git repository
git init

# 2. Stage all files (.gitignore keeps node_modules, .env and build
#    output out automatically)
git add .

# 3. Look at what is staged — the list should contain source files,
#    docs and config only. If node_modules or .env appears here, stop.
git status

# 4. The first commit
git commit -m "CyberLab: full app source, Cloudflare Worker + D1 backend, setup docs"

# 5. Name the branch main
git branch -M main

# 6. Connect to the empty GitHub repository (the URL from Step 2)
git remote add origin https://github.com/hossainabirdev/cyberlab.git

# 7. Push
git push -u origin main
```

GitHub may ask you to sign in during the push — a browser window opens for that. Do not type your account password into the terminal as a Git password; use the browser sign-in (or a Personal Access Token where GitHub asks for one).

## Step 6 — Polish the repository page

1. Open https://github.com/hossainabirdev/cyberlab and confirm all files are there, with the **README** rendered at the bottom of the page.
2. On the right side, click the ⚙️ **About** gear icon →
   - **Description:** `Interactive cybersecurity & CS learning platform — 333 lessons, 32 levels, labs, missions and CTF. Cloudflare Workers + D1 backend.`
   - **Website:** `https://cyberlab27.pages.dev`
   - **Topics:** `cybersecurity`, `learning-platform`, `cloudflare-workers`, `cloudflare-d1`, `pwa`, `ctf`, `javascript` → Save.
3. **Pin** the repository on your profile: go to github.com/hossainabirdev → **Customize your pins** → select `cyberlab` → Save. Anyone opening your profile will now see CyberLab first.

## Updating from now on

Whenever the code changes, it is just three commands:

```bash
git add .
git commit -m "A short description of what changed"
git push
```

Write commit messages that explain what changed, so they still make sense months later — for example `Fix CORS allowlist for new Pages domain` or `Add Level 32 lessons`.

## If something goes wrong

| Problem | Fix |
| --- | --- |
| `git push` says "rejected / non-fast-forward" | The repository was created with a README/.gitignore/license ticked. Easiest fix: delete the repository on GitHub and recreate it empty from Step 2 (your code is safe on your PC — nothing is lost). |
| Sign-in keeps failing during push | Use the browser sign-in route. If GitHub asks for a password, use a Personal Access Token instead (GitHub → Settings → Developer settings → Personal access tokens). |
| A secret was pushed by accident | Deleting the file is not enough — the key stays in Git history. Immediately revoke that API key in Brevo, create a new one, and update the Worker secret. (This is exactly why Step 4 must never be skipped.) |
| `git` is not recognised as a command | Close the terminal and open a new one after installing Git. |
