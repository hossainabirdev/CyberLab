// Exercise starter code for the Level 4 Bash + PowerShell lessons (12).
//
// Same contract as exercise-py.ts: each starter is the lesson's own
// guided-lab task as real code — setup given, key step marked TODO, and
// the script RUNS exactly as shipped. Bash starters were executed with
// bash at build time and their outputs captured; PowerShell starters
// were RUN-VERIFIED 15 Nov 2026 with PowerShell 7.7 installed on the
// build VM — every stated output matches the real run. Shell languages cannot execute in the
// browser, so the playground shows the verified output for the
// unedited starter under its honest SIMULATED label, with the exact
// local command beneath. Every script builds its own tiny sample data
// in the working folder — the learner's own lab only.

import type { PlayCode } from "./Playground";

export const EXERCISE_SHELL: Record<string, PlayCode> = {
  "l4-shm-bash-vars": {
    lang: "bash",
    title: "exercise_vars.sh — the lab task from this lesson, as code",
    code: `#!/usr/bin/env bash
# Exercise: the lab runs this script with three different arguments
# and asks which line changes each time. This starter runs with a
# default argument so it works anywhere - then run it yourself as:
#   bash exercise_vars.sh daily / weekly / once
# and compare the ONE line that moves.
host="lab-web"
port=443
echo "host=$host port=$port"
echo "first argument: \${1:-daily}"
name="report"
echo "braces: \${name}_2026.txt"
# TODO: add the line that prints an expansion inside double quotes,
# e.g. echo "expansion: $host" - then answer: which lines changed
# across your three runs, and which could never change?`,
    output: `host=lab-web port=443
first argument: daily
braces: report_2026.txt`,
  },

  "l4-shm-bash-pipes": {
    lang: "bash",
    title: "exercise_tally.sh — the lab task from this lesson, as code",
    code: `#!/usr/bin/env bash
# Exercise: build the fail tally from the sample, save it to
# tally.txt with >, and print the file.
printf "fail rahim\\nok karim\\nfail rahim\\nfail admin\\n" > auth.txt
echo "total lines: $(wc -l < auth.txt)"
echo "fail lines: $(grep -c '^fail' auth.txt)"
# TODO: grep '^fail' auth.txt | sort | uniq -c | sort -rn > tally.txt
# TODO: cat tally.txt - the file IS the answer; > replaced it whole.`,
    output: `total lines: 4
fail lines: 3`,
  },

  "l4-shm-bash-control": {
    lang: "bash",
    title: "exercise_classify.sh — the lab task from this lesson, as code",
    code: `#!/usr/bin/env bash
# Exercise: write an if/elif/else classifying attempts
# (>= 5 ALERT, >= 2 WARN, else ok) and a case for three usernames.
attempts=7
# TODO: if [ "$attempts" -ge 5 ]; then echo "ALERT: $attempts attempts"
#       elif [ "$attempts" -ge 2 ]; then echo "WARN: $attempts attempts"
#       else echo "ok: $attempts attempts"; fi
echo "attempts=$attempts (verdict: TODO)"
user="rahim"
case "$user" in
  rahim) echo "rahim: the lab admin" ;;
  # TODO: nadia) and admin) arms, plus the *) default arm
  *) echo "other user" ;;
esac`,
    output: `attempts=7 (verdict: TODO)
rahim: the lab admin`,
  },

  "l4-shm-bash-loops": {
    lang: "bash",
    title: "exercise_count_word.sh — the lab task from this lesson, as code",
    code: `#!/usr/bin/env bash
# Exercise: write count_word(word, file) with local variables and
# use it for 'fail' and 'ok' on the sample log.
printf "fail rahim\\nok karim\\nfail rahim\\nfail admin\\n" > auth.txt

count_word() {
  local word="$1"
  local file="$2"
  # TODO: grep -c "^$word" "$file"  - ^ anchors the word at line start
  echo "0"
}

echo "fails: $(count_word fail auth.txt)"
echo "oks: $(count_word ok auth.txt)"`,
    output: `fails: 0
oks: 0`,
  },

  "l4-shm-bash-text": {
    lang: "bash",
    title: "exercise_mask_log.sh — the lab task from this lesson, as code",
    code: `#!/usr/bin/env bash
# Exercise: from the lesson's log produce (1) fails per IP (tally)
# and (2) a fully masked copy - IPs AND users replaced.
printf "2026-11-15 09:41 fail rahim 203.0.113.44\\n2026-11-15 09:42 ok karim 198.51.100.7\\n2026-11-15 09:43 fail rahim 203.0.113.44\\n2026-11-15 09:44 fail admin 203.0.113.44\\n" > app.log
echo "fail users:"
grep ' fail ' app.log | cut -d' ' -f4 | sort | uniq -c
# TODO: echo "fails per ip:" then the same pipeline on field 5 ($5)
# TODO: the masked copy - sed twice: IPs to <ip>, then each user
# name to <user>; print it and compare shapes with the original.`,
    output: `fail users:
      1 admin
      2 rahim`,
  },

  "l4-shm-bash-files": {
    lang: "bash",
    title: "exercise_evidence_dir.sh — the lab task from this lesson, as code",
    code: `#!/usr/bin/env bash
# Exercise: create an evidence directory, set 750 on it and 640 on
# a file inside, and prove both with stat.
mkdir -p evidence
echo "evidence" > evidence/note.txt
chmod 755 evidence          # a known starting point, set on purpose -
chmod 644 evidence/note.txt # fresh-file modes depend on the umask
# TODO: chmod 750 evidence
# TODO: chmod 640 evidence/note.txt
echo "dir octal: $(stat -c '%a' evidence)"
echo "file octal: $(stat -c '%a' evidence/note.txt)"
ls -l evidence/note.txt | awk '{print $1, $NF}'`,
    output: `dir octal: 755
file octal: 644
-rw-r--r-- evidence/note.txt`,
  },

  "l4-bash-automation": {
    lang: "bash",
    title: "exercise_health_check.sh — the lab task from this lesson, as code",
    code: `#!/usr/bin/env bash
# Exercise: the daily health check on a sample log it creates
# itself - add the fourth check (count of 'Accepted password'
# lines) and a combined one-line summary.
set -u
printf "Failed password for rahim\\nAccepted password for nadia\\nFailed password for admin\\nAccepted password for rahim\\nFailed password for rahim\\n" > auth.log

failed=$(grep -c 'Failed password' auth.log)
echo "Failed logins: $failed"
if [ "$failed" -ge 50 ]; then echo '  -> HIGH: investigate sources'; fi
# TODO: accepted=$(grep -c 'Accepted password' auth.log); print it
# TODO: one-line summary: echo "Summary: $failed failed, $accepted accepted"`,
    output: `Failed logins: 3`,
  },

  "l4-shm-ps-basics": {
    lang: "powershell",
    title: "exercise_services.ps1 — the lab task from this lesson, as code",
    code: `# Exercise: build the services array from the lesson, then answer
# with pipelines: how many services, which are risky, the highest port.
$services = @(
  [PSCustomObject]@{ Name = "ssh"; Port = 22; Risky = $false },
  [PSCustomObject]@{ Name = "telnet"; Port = 23; Risky = $true },
  [PSCustomObject]@{ Name = "https"; Port = 443; Risky = $false }
)
Write-Output "count: $($services.Count)"
# TODO: $services | Where-Object { $_.Risky } | ForEach-Object { "RISKY: $($_.Name) port $($_.Port)" }
# TODO: $services | Sort-Object Port -Descending | Select-Object -First 1 |
#         ForEach-Object { "highest: $($_.Port) $($_.Name)" }`,
    output: `count: 3`,
  },

  "l4-shm-ps-control": {
    lang: "powershell",
    title: "exercise_test_service.ps1 — the lab task from this lesson, as code",
    code: `# Exercise: write a Test-Service function (param Name, RiskyNames
# list) and loop it over the basics lesson's services, printing a
# verdict per service.
function Test-Service {
  param([string]$Name, [string[]]$RiskyNames)
  # TODO: if ($RiskyNames -contains $Name) { return "$Name RISKY" }
  #       return "$Name ok"
  return "$Name TODO"
}
$risky = "telnet", "ftp"
foreach ($s in "ssh", "telnet", "https") {
  Write-Output (Test-Service -Name $s -RiskyNames $risky)
}`,
    output: `ssh TODO
telnet TODO
https TODO`,
  },

  "l4-shm-ps-files": {
    lang: "powershell",
    title: "exercise_tally_csv.ps1 — the lab task from this lesson, as code",
    code: `# Exercise: extend the lesson - tally fails per user FROM THE LOG
# and export the tally to tally.csv.
$lines = @(
  "2026-11-15 09:41 fail rahim",
  "2026-11-15 09:42 ok karim",
  "2026-11-15 09:43 fail rahim",
  "2026-11-15 09:44 fail admin"
)
Set-Content -Path app.log -Value $lines
$fails = Select-String -Path app.log -Pattern " fail "
Write-Output "fail lines: $($fails.Count)"
# TODO: build rows from $fails (split each line, user = field 4),
# Group-Object user, then Export-Csv tally.csv -NoTypeInformation
# and Import-Csv it back to prove the file round-trips.`,
    output: `fail lines: 3`,
  },

  "l4-powershell-automation": {
    lang: "powershell",
    title: "exercise_logon_diff.ps1 — the lab task from this lesson, as code",
    code: `# Exercise: adapt the failed-logon report to Event ID 4624
# (successful logons) and diff the two reports' accounts -
# mismatches are investigation leads. On your PC the rows come
# from Get-WinEvent; here sample rows in the same shape practise
# the diff logic.
$failed = @(
  [PSCustomObject]@{ Id = 4625; Account = "tanvir" },
  [PSCustomObject]@{ Id = 4625; Account = "tanvir" },
  [PSCustomObject]@{ Id = 4625; Account = "nadia" }
)
$succeeded = @(
  [PSCustomObject]@{ Id = 4624; Account = "nadia" },
  [PSCustomObject]@{ Id = 4624; Account = "abir" }
)
$failed | Group-Object Account | Sort-Object Count -Descending |
  ForEach-Object { "failed: $($_.Name) x$($_.Count)" }
# TODO: the same grouping for $succeeded ("logons: ..."), then the
# diff: accounts in $failed.Account but NOT in $succeeded.Account
# (Compare-Object or a -notcontains loop) - failed-but-never-in is
# the lead. On your PC: replace the arrays with two Get-WinEvent
# calls, Id 4625 and Id 4624, same window.`,
    output: `failed: tanvir x2
failed: nadia x1`,
  },

  "l4-shm-security": {
    lang: "bash",
    title: "exercise_hunt.sh — the lab task from this lesson, as code",
    code: `#!/usr/bin/env bash
# Exercise: complete BOTH hunts on the lesson's log and confirm the
# tallies match the PowerShell version's - then write the
# world-writable check for your lab directory in both shells.
printf "2026-11-15 09:41 fail rahim 203.0.113.44\\n2026-11-15 09:42 ok karim 198.51.100.7\\n2026-11-15 09:43 fail rahim 203.0.113.44\\n2026-11-15 09:44 fail admin 203.0.113.44\\n2026-11-15 09:45 fail rahim 203.0.113.44\\n" > auth.log
echo "failed logins by user:"
grep ' fail ' auth.log | awk '{print $4}' | sort | uniq -c | sort -rn
# TODO: echo "failed logins by ip:" - the same pipeline on $5, head -3
# TODO: threshold=3; top=$(grep -c ' fail .*203.0.113.44' auth.log);
#       if [ "$top" -ge "$threshold" ]; then echo "INVESTIGATE: ..."; fi
# PowerShell twin (your PC): the same log as objects, Group-Object -
# both hunts must agree: rahim 3, admin 1; 203.0.113.44 x4.`,
    output: `failed logins by user:
      3 rahim
      1 admin`,
  },
};
