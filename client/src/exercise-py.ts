// Exercise starter code for the Level 4 Python mastery lessons (47).
//
// Every starter is the lesson's OWN guided-lab task turned into real code:
// the setup is given, the key step is marked TODO, and the program RUNS
// exactly as shipped — its `output` is the starter's real output, captured
// by executing the starter (Python 3.12) at build time. A learner loads it
// into the SAME compiler as the example (Example / Exercise tabs), finishes
// the TODO, and runs it again to see the completed result. Starters never
// use input() (the browser engine has no keyboard), never touch the
// network, and write only small practice files in the working folder —
// the same posture as the lesson examples themselves.

import type { PlayCode } from "./Playground";

export const EXERCISE_PY: Record<string, PlayCode> = {
  "l4-py-first": {
    lang: "python",
    title: "exercise_first_program.py — the lab task from this lesson, as code",
    code: `# Exercise: the guided-lab task, as a starter.
# Change attempts to 41 and add one more print line that reports it
# as a pattern ('41 failures is a pattern, not a typo').

name = "Nadia"              # a variable: a labelled box holding text
attempts = 3                # TODO: change this value to 41
print("Hello,", name)
print("Failed logins today:", attempts)
print(f"{name} had {attempts} failed logins")
# TODO: add your pattern line here, e.g.
# print(f"{attempts} failures is a pattern, not a typo")
print(type(name), type(attempts))`,
    output: `Hello, Nadia
Failed logins today: 3
Nadia had 3 failed logins
<class 'str'> <class 'int'>`,
  },

  "l4-py-variables": {
    lang: "python",
    title: "exercise_password_rule.py — the lab task from this lesson, as code",
    code: `# Exercise: extend the evaluator with a real enrolment rule -
# reject any password that contains the username.

def score_password(pw, username):
    score = 0
    notes = []
    if len(pw) >= 12:
        score += 2
    elif len(pw) >= 8:
        score += 1
    else:
        notes.append('too short: use 12+ characters')
    if any(c.isdigit() for c in pw):
        score += 1
    if any(not c.isalnum() for c in pw):
        score += 1
    # TODO: if username.lower() appears inside pw.lower(),
    # set score = 0 and append the note 'password contains the username'
    return score, notes

# Fixed test values instead of input() - the browser has no keyboard.
tests = [("Rahim!2026-secure", "rahim"), ("correct-horse-9!", "nadia")]
for pw, user in tests:
    score, notes = score_password(pw, user)
    print(f"{user}: score {score}/4", notes)`,
    output: `rahim: score 4/4 []
nadia: score 4/4 []`,
  },

  "l4-pym-operators": {
    lang: "python",
    title: "exercise_chunks.py — the lab task from this lesson, as code",
    code: `# Exercise: how many full 64 KB chunks fit in 1,000,000 bytes,
# and how many bytes are left over? Use // and %.

total_bytes = 1000000
chunk = 65536                     # 64 KB in bytes

chunks = 0        # TODO: total_bytes // chunk
remainder = 0     # TODO: total_bytes % chunk

print("Full chunks:", chunks)
print("Bytes left over:", remainder)
print("Check (must become True):", chunks * chunk + remainder == total_bytes)`,
    output: `Full chunks: 0
Bytes left over: 0
Check (must become True): False`,
  },

  "l4-pym-numbers": {
    lang: "python",
    title: "exercise_ceil_chunks.py — the lab task from this lesson, as code",
    code: `# Exercise: a 1,000,000-byte file ships in 65536-byte chunks.
# The last chunk is partial - how many chunks does the file NEED?
# (Operators gave full chunks with //; here use math.ceil.)

import math

total_bytes = 1000000
chunk = 65536

exact = 0         # TODO: total_bytes / chunk (a float - see it first)
needed = 0        # TODO: math.ceil(exact)

print("Exact chunks (float):", exact)
print("Chunks needed (ceil):", needed)
print("File:", total_bytes, "bytes | chunk:", chunk, "bytes")
# After the TODO: the last chunk carries total_bytes - (needed - 1) * chunk
# bytes - compute it and print it as a fourth line.`,
    output: `Exact chunks (float): 0
Chunks needed (ceil): 0
File: 1000000 bytes | chunk: 65536 bytes`,
  },

  "l4-pym-strings": {
    lang: "python",
    title: "exercise_parse_alert.py — the lab task from this lesson, as code",
    code: `# Exercise: take the line 'ALERT host=lab-web port=23 state=open'
# and print host, port and state as three labelled values,
# using split-based extraction like the lesson example.

line = "ALERT host=lab-web port=23 state=open"

# The lesson's move: split on the field name, then take the first word.
host = line.split("host=")[1].split()[0]
print("Host:", host)

port = ""         # TODO: same move with "port="
state = ""        # TODO: same move with "state=" - it is the last field
print("Port:", port)
print("State:", state)`,
    output: `Host: lab-web
Port: 
State: `,
  },

  "l4-pym-input": {
    lang: "python",
    title: "exercise_read_port.py — the lab task from this lesson, as code",
    code: `# Exercise: call read_port with '22', ' 22 ', 'ssh', '0', '65536'
# (no keyboard needed) and print each pair - confirm all five verdicts.

def read_port(raw):
    """Turn typed text into a validated port number, or explain the problem."""
    text = raw.strip()
    if not text.isdigit():
        return None, "not a number - type digits only, e.g. 443"
    port = int(text)
    if not 1 <= port <= 65535:
        return None, "out of range - ports live between 1 and 65535"
    return port, "ok"

# TODO: loop over the five test strings and print read_port(raw) for each.
tests = ["22", " 22 ", "ssh", "0", "65536"]
print("Tests waiting:", tests)`,
    output: `Tests waiting: ['22', ' 22 ', 'ssh', '0', '65536']`,
  },

  "l4-py-conditions": {
    lang: "python",
    title: "exercise_branch_order.py — the lab task from this lesson, as code",
    code: `# Exercise: branch-order debugging. This copy of judge() has the
# ALERT and WARN branches SWAPPED compared with the lesson - run it,
# see which line goes wrong, then swap them back and run again.

def judge(attempts, known_ip, locked):
    if locked:
        return "BLOCKED: account already locked"
    if attempts >= 5:
        return "WARN: many failures from a known place - call the user"
    elif attempts >= 5 and not known_ip:
        return "ALERT: guessing pattern from a new place"
    elif attempts > 0:
        return "NOTE: a few failures - probably a typo"
    return "OK: no failed attempts"

print(judge(0, True, False))
print(judge(2, True, False))
print(judge(7, True, False))
print(judge(9, False, False))   # <- this one is wrong: why?
print(judge(1, False, True))`,
    output: `OK: no failed attempts
NOTE: a few failures - probably a typo
WARN: many failures from a known place - call the user
WARN: many failures from a known place - call the user
BLOCKED: account already locked`,
  },

  "l4-pym-match": {
    lang: "python",
    title: "exercise_classify_severity.py — the lab task from this lesson, as code",
    code: `# Exercise: write classify_severity(word) with match -
# 'low'|'medium' -> 'log it', 'high' -> 'ticket it',
# 'critical' -> 'page the on-call', wildcard -> 'unknown severity - treat as high'.

def classify_severity(word):
    # TODO: replace this placeholder body with a match statement:
    #   case 'low' | 'medium': ...
    #   case 'high': ...
    #   case 'critical': ...
    #   case _: ...
    return "not written yet"

for word in ["low", "medium", "high", "critical", "weird"]:
    print(word, "->", classify_severity(word))`,
    output: `low -> not written yet
medium -> not written yet
high -> not written yet
critical -> not written yet
weird -> not written yet`,
  },

  "l4-py-control": {
    lang: "python",
    title: "exercise_sudo_category.py — the lab task from this lesson, as code",
    code: `# Exercise: add a 'SUDO' category for lines containing 'sudo:'
# and re-run - then verify the totals still add up to the line count.

SAMPLE = [
    'Failed password for nadia from 203.0.113.44',
    'Accepted password for nadia from 192.168.1.20',
    'error: disk /dev/sda nearly full',
    'Failed password for admin from 203.0.113.44',
    'session opened for user root',
    'sudo: nadia ran /usr/bin/apt update',
]
# TODO: add 'SUDO': 0 to the counts dict and a 'sudo:' branch
# BEFORE the final else - order matters, first match wins.
counts = {'AUTH-FAIL': 0, 'LOGIN-OK': 0, 'ERROR': 0, 'OTHER': 0}
for line in SAMPLE:
    low = line.lower()
    if 'failed password' in low:
        counts['AUTH-FAIL'] += 1
    elif 'accepted password' in low:
        counts['LOGIN-OK'] += 1
    elif 'error' in low:
        counts['ERROR'] += 1
    else:
        counts['OTHER'] += 1
for name, total in counts.items():
    print(f'{name:<10} {total}')
print('Lines:', len(SAMPLE), '| counted:', sum(counts.values()))`,
    output: `AUTH-FAIL  2
LOGIN-OK   1
ERROR      1
OTHER      2
Lines: 6 | counted: 6`,
  },

  "l4-pym-lists": {
    lang: "python",
    title: "exercise_ports_list.py — the lab task from this lesson, as code",
    code: `# Exercise: given ports = [443, 22, 8080, 23, 80], remove 23,
# append 8443, then print the list sorted numerically and its
# first and last slices.

ports = [443, 22, 8080, 23, 80]
print("Start:", ports)

# TODO: ports.remove(23)  - by value, like the lesson
# TODO: ports.append(8443)
# TODO: print sorted(ports), then its first two and last two items`,
    output: `Start: [443, 22, 8080, 23, 80]`,
  },

  "l4-pym-tuples": {
    lang: "python",
    title: "exercise_records.py — the lab task from this lesson, as code",
    code: `# Exercise: build records = [('nadia', 3), ('rahim', 12)] and loop
# with unpacking to print 'user - verdict' lines, verdict ALERT at 5+.

records = [('nadia', 3), ('rahim', 12)]

# TODO: for user, fails in records: print f"{user} - {verdict}"
# where verdict is 'ALERT' when fails >= 5, else 'ok'.
print("Records waiting:", records)`,
    output: `Records waiting: [('nadia', 3), ('rahim', 12)]`,
  },

  "l4-pym-dicts": {
    lang: "python",
    title: "exercise_group_actions.py — the lab task from this lesson, as code",
    code: `# Exercise: group five (user, action) pairs into a dict of lists
# using setdefault, and print each user's actions.

pairs = [("nadia", "login"), ("rahim", "fail"), ("nadia", "fail"),
         ("admin", "login"), ("nadia", "logout")]

grouped = {}
for user, action in pairs:
    # TODO: grouped.setdefault(user, []).append(action)
    pass

print("Grouped (empty until the TODO is done):", grouped)`,
    output: `Grouped (empty until the TODO is done): {}`,
  },

  "l4-pym-sets": {
    lang: "python",
    title: "exercise_day_sets.py — the lab task from this lesson, as code",
    code: `# Exercise: given day1 = {'u1','u2','u3'} and day2 = {'u2','u4'},
# print the both-days, new-on-day2 and only-one-day sets, each sorted.

day1 = {'u1', 'u2', 'u3'}
day2 = {'u2', 'u4'}

print("Both days:", sorted(day1 & day2))   # <- this one is done for you
# TODO: print("New on day 2:", sorted(day2 - day1))
# TODO: print("Only one day:", sorted(day1 ^ day2))`,
    output: `Both days: ['u2']`,
  },

  "l4-pym-comprehensions": {
    lang: "python",
    title: "exercise_risky_ports.py — the lab task from this lesson, as code",
    code: `# Exercise: from ports = [22, 23, 80, 443, 3389], build with
# comprehensions: the risky ones (in {21, 23, 3389}), and a dict
# port -> 'standard'/'risky'.

ports = [22, 23, 80, 443, 3389]
RISKY = {21, 23, 3389}

risky = []        # TODO: [p for p in ports if p in RISKY]
labels = {}       # TODO: {p: ('risky' if p in RISKY else 'standard') for p in ports}

print("Risky:", risky)
print("Labels:", labels)`,
    output: `Risky: []
Labels: {}`,
  },

  "l4-py-functions": {
    lang: "python",
    title: "exercise_count_open.py — the lab task from this lesson, as code",
    code: `# Exercise: write count_open(hosts, port) returning how many hosts
# expose a port; test it for 22 and 23 on the lesson's inventory.

inventory = [
    {'name': 'lab-web', 'ip': '192.168.56.10', 'open_ports': [22, 80, 443]},
    {'name': 'lab-db', 'ip': '192.168.56.11', 'open_ports': [22]},
    {'name': 'lab-old', 'ip': '192.168.56.12', 'open_ports': [22, 23]},
]

def count_open(hosts, port):
    # TODO: count the hosts whose 'open_ports' list contains port.
    return 0

print("Hosts exposing 22:", count_open(inventory, 22))   # expect 3
print("Hosts exposing 23:", count_open(inventory, 23))   # expect 1`,
    output: `Hosts exposing 22: 0
Hosts exposing 23: 0`,
  },

  "l4-pym-functions-deep": {
    lang: "python",
    title: "exercise_report.py — the lab task from this lesson, as code",
    code: `# Exercise: write report(host, *ports, verbose=False) printing one
# line per port, and a summary line only when verbose - call it both ways.

def report(host, *ports, verbose=False):
    # TODO: for each port in ports: print f"{host}:{port}"
    # TODO: if verbose: print f"({len(ports)} ports checked on {host})"
    print("(report not written yet)")

report("192.168.56.10", 22, 443)
report("192.168.56.10", 22, 443, verbose=True)`,
    output: `(report not written yet)
(report not written yet)`,
  },

  "l4-pym-scope-lambda": {
    lang: "python",
    title: "exercise_sort_key.py — the lab task from this lesson, as code",
    code: `# Exercise: sort [('a', 5), ('b', 5), ('c', 9)] by count DESCENDING
# then name ASCENDING, using one lambda returning a tuple key.

rows = [('a', 5), ('b', 5), ('c', 9)]
print("Before:", rows)

# TODO: rows.sort(key=lambda r: (-r[1], r[0]))
# Why the minus? sorted() is ascending - negating the count flips
# only the count, while the name still sorts ascending.
print("After (unchanged until the TODO):", rows)`,
    output: `Before: [('a', 5), ('b', 5), ('c', 9)]
After (unchanged until the TODO): [('a', 5), ('b', 5), ('c', 9)]`,
  },

  "l4-pym-modules": {
    lang: "python",
    title: "exercise_ports_info.py — the lab task from this lesson, as code",
    code: `# Exercise: write a module ports_info.py with a dict of
# port -> service and a describe(port) function; import it and print
# descriptions for 22, 443 and 9999 (with a default for unknown).

module_code = '''
SERVICES = {22: "ssh", 80: "http", 443: "https", 23: "telnet"}

def describe(port):
    # TODO: return f"{port} = {SERVICES.get(port, 'unknown service')}"
    return "not written yet"
'''
with open("ports_info.py", "w") as f:
    f.write(module_code)

import ports_info
for port in (22, 443, 9999):
    print(ports_info.describe(port))`,
    output: `not written yet
not written yet
not written yet`,
  },

  "l4-py-files": {
    lang: "python",
    title: "exercise_count_both.py — the lab task from this lesson, as code",
    code: `# Exercise: change the counter to count 'Accepted' lines too,
# printing both totals. Keep the streaming loop - do not switch to read().

lines = [
    "09:01 Accepted password for nadia",
    "09:03 Failed password for nadia",
    "09:04 Failed password for admin",
    "09:05 Failed password for nadia",
]
with open("mini_auth.log", "w") as f:
    for line in lines:
        f.write(line + "\\n")

failed = 0
accepted = 0        # TODO: count 'Accepted' lines in the same loop
with open("mini_auth.log") as f:
    for line in f:
        if "Failed" in line:
            failed += 1
print("Total failures:", failed)
print("Total accepted:", accepted)`,
    output: `Total failures: 3
Total accepted: 0`,
  },

  "l4-pym-files-deep": {
    lang: "python",
    title: "exercise_users_csv.py — the lab task from this lesson, as code",
    code: `# Exercise: write a users.csv (name, fails) for three users, append
# a fourth, then read it back and print only users with fails >= 5
# (convert with int()).

import csv

rows = [
    {"name": "nadia", "fails": 3},
    {"name": "rahim", "fails": 12},
    {"name": "admin", "fails": 7},
]
with open("users.csv", "w", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["name", "fails"])
    writer.writeheader()
    writer.writerows(rows)

# TODO: append {"name": "sana", "fails": 1} in mode "a" (no header!),
# then read the file back with csv.DictReader and print
# f"WATCH {row['name']}: {row['fails']}" for rows with int(fails) >= 5.
print("users.csv written - read-back is the TODO")`,
    output: `users.csv written - read-back is the TODO`,
  },

  "l4-pym-exceptions": {
    lang: "python",
    title: "exercise_missing_field.py — the lab task from this lesson, as code",
    code: `# Exercise: wrap a dict lookup in try/except KeyError and print a
# 'missing field' line naming the key - then compare with .get().

record = {"user": "rahim", "fails": 12}

# TODO: try: print(record["ip"])  except KeyError as e:
# print(f"missing field: {e} - the report skips this record")
print("User via []:", record["user"])
print("IP via .get:", record.get("ip", "not recorded"))`,
    output: `User via []: rahim
IP via .get: not recorded`,
  },

  "l4-pym-oop-1": {
    lang: "python",
    title: "exercise_user_class.py — the lab task from this lesson, as code",
    code: `# Exercise: write class User with __init__(name, fails) and method
# verdict() returning 'ALERT' at 5+ fails else 'ok'; create two users
# and print their verdicts.

# TODO: write the class here -
# class User:
#     def __init__(self, name, fails): ...
#     def verdict(self): ...

print("Users waiting: nadia (3 fails), rahim (12 fails)")
print("TODO: build the User class, then print both verdicts")`,
    output: `Users waiting: nadia (3 fails), rahim (12 fails)
TODO: build the User class, then print both verdicts`,
  },

  "l4-pym-oop-2": {
    lang: "python",
    title: "exercise_findings.py — the lab task from this lesson, as code",
    code: `# Exercise: build class Finding with run() returning 'generic', and
# two subclasses (WeakPasswordFinding, OpenPortFinding) with their own
# verdicts; loop over a mixed list - one call, many shapes.

class Finding:
    """Base finding: every finding has a run() that returns a verdict."""
    def run(self):
        return "generic"

# TODO: class WeakPasswordFinding(Finding): run() -> 'weak password - force a reset'
# TODO: class OpenPortFinding(Finding): __init__(self, port), run() -> f'open port {self.port}'

findings = [Finding()]   # TODO: add one of each subclass to this list
for f in findings:
    print(f.run())`,
    output: `generic`,
  },

  "l4-pym-oop-3": {
    lang: "python",
    title: "exercise_event_bag.py — the lab task from this lesson, as code",
    code: `# Exercise: write a dataclass Event(user, action, count) and a class
# Bag with __len__ and __contains__ over a list; demonstrate both.

from dataclasses import dataclass

# TODO: @dataclass class Event with fields user: str, action: str, count: int
# TODO: class Bag: __init__ keeps a list; add(item); __len__; __contains__

e = ("rahim", "fail", 12)   # a plain tuple for now - the dataclass replaces it
print("Tuple event:", e, "| user via index:", e[0])
print("TODO: rebuild this as an Event dataclass and a Bag")`,
    output: `Tuple event: ('rahim', 'fail', 12) | user via index: rahim
TODO: rebuild this as an Event dataclass and a Bag`,
  },
};

export const EXERCISE_PY2: Record<string, PlayCode> = {
  "l4-pym-generators": {
    lang: "python",
    title: "exercise_user_lines.py — the lab task from this lesson, as code",
    code: `# Exercise: write a generator that yields only lines containing a
# given user from the sample lines, and print them one next() at a time.

lines = [
    "09:01 FAILED login nadia",
    "09:02 ok login rahim",
    "09:03 FAILED login admin",
    "09:04 FAILED login nadia",
]

# TODO: def lines_for(source, user):
#           for line in source:
#               if user in line: yield line
# then: gen = lines_for(lines, "nadia"); print(next(gen)); print(next(gen))
print("Lines for nadia are waiting in the list above")`,
    output: `Lines for nadia are waiting in the list above`,
  },

  "l4-pym-decorators": {
    lang: "python",
    title: "exercise_shout.py — the lab task from this lesson, as code",
    code: `# Exercise: write a decorator @shout that uppercases the string
# result of the wrapped function, apply it to a verdict function,
# and print before/after names with __name__.

from functools import wraps

# TODO: def shout(func):
#           @wraps(func)
#           def wrapper(*args, **kwargs):
#               return func(*args, **kwargs).upper()
#           return wrapper

def verdict(user, count):
    return "alert" if count >= 5 else "ok"

print("Plain:", verdict("rahim", 12))
print("Name:", verdict.__name__)
print("TODO: decorate verdict with @shout and call it again")`,
    output: `Plain: alert
Name: verdict
TODO: decorate verdict with @shout and call it again`,
  },

  "l4-pym-regex": {
    lang: "python",
    title: "exercise_mask_line.py — the lab task from this lesson, as code",
    code: `# Exercise: mask every IP AND every username in a sample log line
# with sub(), printing before and after.

import re

line = "Failed password for rahim from 203.0.113.44 port 51122"
print("Before:", line)

masked = re.sub(r"\\d{1,3}(?:\\.\\d{1,3}){3}", "<ip>", line)   # IPs: done
# TODO: mask the username too - sub() the text after 'for ' with '<user>'
print("After (IPs only, so far):", masked)`,
    output: `Before: Failed password for rahim from 203.0.113.44 port 51122
After (IPs only, so far): Failed password for rahim from <ip> port 51122`,
  },

  "l4-pym-datetime": {
    lang: "python",
    title: "exercise_event_gaps.py — the lab task from this lesson, as code",
    code: `# Exercise: given three event stamps, print them sorted with the
# gaps between consecutive events in seconds.

from datetime import datetime

fmt = "%Y-%m-%d %H:%M:%S"
events = ["2026-11-15 09:47:52", "2026-11-15 09:41:07", "2026-11-15 09:58:30"]
times = sorted(datetime.strptime(e, fmt) for e in events)
for t in times:
    print("Event:", t)

# TODO: loop over consecutive pairs (times[i], times[i+1]) and print
# f"Gap: {(b - a).total_seconds()} seconds"`,
    output: `Event: 2026-11-15 09:41:07
Event: 2026-11-15 09:47:52
Event: 2026-11-15 09:58:30`,
  },

  "l4-pym-collections": {
    lang: "python",
    title: "exercise_rolling_window.py — the lab task from this lesson, as code",
    code: `# Exercise: keep a deque(maxlen=5) of sighting IPs from a 9-item
# list, then print the final window and a Counter of the FULL list -
# and state why the two views differ.

from collections import Counter, deque

sightings = ["10.0.0.5", "203.0.113.44", "10.0.0.5", "198.51.100.7",
             "203.0.113.44", "10.0.0.9", "203.0.113.44", "10.0.0.5",
             "198.51.100.7"]

window = deque(maxlen=5)
for ip in sightings:
    window.append(ip)
print("Final window (last 5):", list(window))
# TODO: print("Full counts:", Counter(sightings)) - the window FORGOT
# the early sightings; the Counter remembers all nine.`,
    output: `Final window (last 5): ['203.0.113.44', '10.0.0.9', '203.0.113.44', '10.0.0.5', '198.51.100.7']`,
  },

  "l4-pym-json": {
    lang: "python",
    title: "exercise_scan_json.py — the lab task from this lesson, as code",
    code: `# Exercise: build a nested dict for a two-host scan, dumps it with
# indent=2 and sort_keys=True, loads it back, and print each host's
# high-severity issues using .get defaults.

import json

scan = {
    "hosts": [
        {"host": "192.168.56.10", "issues": [
            {"issue": "telnet cleartext", "severity": "high"}]},
        {"host": "192.168.56.11", "issues": [
            {"issue": "no redirect to https", "severity": "low"}]},
    ]
}

text = json.dumps(scan, indent=2, sort_keys=True)
back = json.loads(text)
print("Round trip equal?", back == scan)
# TODO: for each host in back["hosts"], for each issue, print
# f"HIGH {host}: {issue}" only when issue.get("severity") == "high"`,
    output: `Round trip equal? True`,
  },

  "l4-pym-pathlib-os": {
    lang: "python",
    title: "exercise_log_files.py — the lab task from this lesson, as code",
    code: `# Exercise: build a two-folder practice tree, then print only the
# .log files in it, sorted, with their sizes via p.stat().st_size.

from pathlib import Path

root = Path("exercise_tree")
(root / "logs").mkdir(parents=True, exist_ok=True)
(root / "docs").mkdir(parents=True, exist_ok=True)
(root / "logs" / "auth.log").write_text("Failed password for nadia\\n")
(root / "logs" / "app.log").write_text("started ok\\n")
(root / "docs" / "notes.txt").write_text("scope: my lab only\\n")

# TODO: for p in sorted(root.rglob("*.log")):
#           print(p.as_posix(), p.stat().st_size, "bytes")
print("Tree built - the .log listing is the TODO")`,
    output: `Tree built - the .log listing is the TODO`,
  },

  "l4-pym-venv-pip": {
    lang: "bash",
    title: "exercise_venv_commands.sh — the lab task from this lesson, as code",
    code: `# Exercise: the guided-lab task is to WRITE the exact commands to
# set up a fresh project named logtool with requests installed and
# frozen. This script prints the answer for Linux/macOS - run it,
# read it, then write the Windows version from memory and check both
# against the lesson.

echo "1. create:  python -m venv .venv          (inside the logtool folder)"
echo "2. activate (Linux/macOS):  source .venv/bin/activate"
echo "   activate (Windows):      .venv\\Scripts\\activate"
echo "3. install: pip install requests"
echo "4. freeze:  pip freeze > requirements.txt"
# TODO: add the fifth line yourself - how do you LEAVE the environment?`,
    output: `1. create:  python -m venv .venv          (inside the logtool folder)
2. activate (Linux/macOS):  source .venv/bin/activate
   activate (Windows):      .venv\\Scripts\\activate
3. install: pip install requests
4. freeze:  pip freeze > requirements.txt`,
  },

  "l4-pym-testing": {
    lang: "python",
    title: "exercise_is_risky_tests.py — the lab task from this lesson, as code",
    code: `# Exercise: write a TestCase for is_risky(port) with tests for
# 23 (True), 443 (False) and 21 (True) - run the suite
# programmatically, exactly as the lesson does.

import unittest

def is_risky(port):
    return port in (21, 23, 3389)

class TestIsRisky(unittest.TestCase):
    def test_telnet_is_risky(self):
        self.assertTrue(is_risky(23))

    # TODO: test_https_is_not_risky: assertFalse(is_risky(443))
    # TODO: test_ftp_is_risky: assertTrue(is_risky(21))

suite = unittest.TestLoader().loadTestsFromTestCase(TestIsRisky)
result = unittest.TextTestRunner(verbosity=2).run(suite)
print("All tests passed?", result.wasSuccessful())`,
    output: `All tests passed? True`,
  },

  "l4-pym-debugging": {
    lang: "python",
    title: "exercise_sum_first_n.py — the lab task from this lesson, as code",
    code: `# Exercise: this function should sum the first n numbers
# (1 + 2 + ... + n) but uses range(n) instead of range(1, n + 1).
# Trace it, name the boundary error, fix it, and prove the fix.

def sum_first_n_buggy(n):
    total = 0
    for i in range(n):          # <-- the boundary error lives here
        total += i
    return total

n = 4
print("Buggy sum for n=4:", sum_first_n_buggy(n), "(want 10)")
# TODO: print a trace line per i (i, running total), then write
# sum_first_n(n) with range(1, n + 1) and assert it returns 10.`,
    output: `Buggy sum for n=4: 6 (want 10)`,
  },

  "l4-python-security": {
    lang: "python",
    title: "exercise_log_parser.py — the lab task from this lesson, as code",
    code: `# Exercise: the Log Parser, built in stages. Stage 1 (given): the
# sample log is written and the parser counts failures per IP.
# Your stages: validate the result, then add a per-USER tally.

from collections import Counter

SAMPLE = """Nov 15 09:41:07 lab sshd: Failed password for rahim from 203.0.113.44
Nov 15 09:41:31 lab sshd: Failed password for rahim from 203.0.113.44
Nov 15 09:42:02 lab sshd: Failed password for admin from 203.0.113.44
Nov 15 09:43:15 lab sshd: Accepted password for nadia from 192.168.1.20
Nov 15 09:44:50 lab sshd: Failed password for rahim from 198.51.100.7
"""
with open("auth.log", "w") as f:
    f.write(SAMPLE)

def parse_failed_logins(path):
    """Return a Counter of source IPs from 'Failed password' lines."""
    counts = Counter()
    with open(path, encoding="utf-8", errors="replace") as f:
        for line in f:
            if "Failed password" not in line:
                continue
            parts = line.split()
            if "from" in parts:
                counts[parts[parts.index("from") + 1]] += 1
    return counts

counts = parse_failed_logins("auth.log")
for ip, total in counts.most_common(10):
    print(f"{total:>5}  {ip}")
# TODO stage 2: assert counts["203.0.113.44"] == 3 (validation check)
# TODO stage 3: a second Counter keyed by USER (the word after 'for')`,
    output: `    3  203.0.113.44
    1  198.51.100.7`,
  },

  "l4-py-integrity": {
    lang: "python",
    title: "exercise_prove_download.py — the lab task from this lesson, as code",
    code: `# Exercise: 'Prove the Download'. Hash a file you create, print the
# verdict line a release note would carry, then change one byte and
# prove the hash notices.

import hashlib
from pathlib import Path

def sha256_of(path):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()

Path("release.txt").write_text("cyberlab-practice-file v1\\n")
expected = sha256_of("release.txt")
print("SHA-256 (first 16):", expected[:16])
print("Verdict line: release.txt matches its published SHA-256.")
# TODO: append one byte to release.txt, hash it again, and print
# 'CHANGED - do not trust this file' when the digests differ.`,
    output: `SHA-256 (first 16): e9649e632b0d6f3e
Verdict line: release.txt matches its published SHA-256.`,
  },

  "l4-pym-logging": {
    lang: "python",
    title: "exercise_logged_counter.py — the lab task from this lesson, as code",
    code: `# Exercise: convert the debugging lesson's traced counter to
# log.debug lines and run it at INFO (silent) and DEBUG (narrated)
# without editing the function.

import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)-5s %(message)s")
log = logging.getLogger("counter")

lines = ["ok nadia", "FAILED rahim", "FAILED admin", "ok sana", "FAILED nadia"]

def count_failed(items):
    total = 0
    for i, line in enumerate(items):
        hit = "FAILED" in line
        log.debug(f"i={i} line={line!r} failed={hit} total_before={total}")
        if hit:
            total += 1
    return total

print("Counted at INFO level:", count_failed(lines))
# TODO: logging.getLogger().setLevel(logging.DEBUG) and call
# count_failed(lines) again - the SAME function now narrates itself.`,
    output: `Counted at INFO level: 3`,
  },

  "l4-pym-argparse": {
    lang: "python",
    title: "exercise_port_parser.py — the lab task from this lesson, as code",
    code: `# Exercise: build a parser for a port checker - positional host,
# --ports with default '22,80,443', --timeout type=float default 2.0.
# Parse a sample list and print the namespace fields.

import argparse

parser = argparse.ArgumentParser(description="Check ports on a lab host")
parser.add_argument("host", help="the lab host to check")
# TODO: parser.add_argument("--ports", default="22,80,443")
# TODO: parser.add_argument("--timeout", type=float, default=2.0)

args = parser.parse_args(["192.168.56.10"])
print("Host:", args.host)
print("Add the two options above, then print args.ports and args.timeout")`,
    output: `Host: 192.168.56.10
Add the two options above, then print args.ports and args.timeout`,
  },

  "l4-pym-subprocess": {
    lang: "python",
    title: "exercise_run_child.py — the lab task from this lesson, as code",
    code: `# Exercise (on your own PC, in the folder with first_program.py
# from this track's first lesson): run YOUR first_program.py as a
# child process and print its output and exit code from the parent.

import subprocess
import sys

# A LIST of arguments: the shell never sees them, so no injection.
result = subprocess.run(
    [sys.executable, "first_program.py"],
    capture_output=True, text=True, timeout=10,
)
print("Child output:")
print(result.stdout, end="")
print("Exit code:", result.returncode)
# TODO: also print result.stderr - and say what a non-zero exit
# code here would mean (the child crashed or was missing).`,
    output: `Child output:
Hello, Nadia
Failed logins today: 3
Nadia had 3 failed logins
<class 'str'> <class 'int'>
Exit code: 0`,
  },

  "l4-pym-encoding": {
    lang: "python",
    title: "exercise_decode_blob.py — the lab task from this lesson, as code",
    code: `# Exercise: decode the base64 string
# 'c3NoIC1pIGtleS5wZW0gYWRtaW5AbGFiLWhvc3Q=' and write one sentence
# on what it is - decoding is not the same as running it.

import base64

blob = "c3NoIC1pIGtleS5wZW0gYWRtaW5AbGFiLWhvc3Q="
decoded = ""      # TODO: base64.b64decode(blob).decode()
print("Decoded:", decoded)
# TODO: print your one-sentence verdict - WHAT is this text,
# and why is reading it safe while running it would not be?`,
    output: `Decoded: `,
  },

  "l4-pym-password-tools": {
    lang: "python",
    title: "exercise_gen_password.py — the lab task from this lesson, as code",
    code: `# Exercise: write gen_password(length) using secrets over
# letters+digits+symbols, and print the space size for 10, 14, 18.

import secrets
import string

alphabet = string.ascii_letters + string.digits + string.punctuation

def gen_password(length):
    # TODO: return "".join(secrets.choice(alphabet) for _ in range(length))
    return ""

pw = gen_password(16)
print("Generated length:", len(pw), "(16 once the TODO is done)")
for length in (10, 14, 18):
    print(f"Length {length}: {len(alphabet) ** length:.2e} possibilities")`,
    output: `Generated length: 0 (16 once the TODO is done)
Length 10: 5.39e+19 possibilities
Length 14: 4.21e+27 possibilities
Length 18: 3.28e+35 possibilities`,
  },

  "l4-pym-sockets": {
    lang: "python",
    title: "exercise_banner_pair.py — the lab task from this lesson, as code",
    code: `# Exercise (on your own PC): the lesson pair, split into the two
# files the lab asks for. Save the server half as server.py and the
# client half as client.py, run the server in one terminal and the
# client in another - the real working shape. Kept in one file here
# so you can copy each half out.

# ---- server.py ----
import socket

# with socket.socket() as srv:
#     srv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
#     srv.bind(("127.0.0.1", 18099))       # your own machine only
#     srv.listen(1)
#     conn, _ = srv.accept()
#     with conn:
#         data = conn.recv(1024)
#         print("Server received:", data.decode())
#         conn.sendall(b"banner: LabServer 9.6")   # TODO: your banner

# ---- client.py ----
# import socket
# with socket.create_connection(("127.0.0.1", 18099), timeout=5) as c:
#     c.sendall(b"STATUS?")
#     print("Server replied:", c.recv(1024).decode())

print("Two files, two terminals: server.py waits, client.py asks.")
print("Rule restated: 127.0.0.1 - your own machine only.")`,
    output: `Two files, two terminals: server.py waits, client.py asks.
Rule restated: 127.0.0.1 - your own machine only.`,
  },

  "l4-py-network": {
    lang: "python",
    title: "exercise_header_fixlist.py — the lab task from this lesson, as code",
    code: `# Exercise: 'Security Headers Review' - the analyzer's offline
# core. Given the headers a response ACTUALLY carried (captured from
# your own lab app), print the fix list an engineer would implement.

REQUIRED = ["Strict-Transport-Security", "Content-Security-Policy",
            "X-Content-Type-Options", "Referrer-Policy"]

# A captured response from the lesson's own lab app (localhost:8000).
captured = {"X-Content-Type-Options": "nosniff", "Server": "lab-app/1.0"}

print("Fix list for the lab app:")
for h in REQUIRED:
    state = "present" if h in captured else "MISSING - add it"
    print(f"  {h}: {state}")
# TODO: extend REQUIRED with 'X-Frame-Options' and re-run - the fix
# list grows by one line; that list IS the engineer's ticket.`,
    output: `Fix list for the lab app:
  Strict-Transport-Security: MISSING - add it
  Content-Security-Policy: MISSING - add it
  X-Content-Type-Options: present
  Referrer-Policy: MISSING - add it`,
  },

  "l4-pym-requests": {
    lang: "python",
    title: "exercise_headers_endpoint.py — the lab task from this lesson, as code",
    code: `# Exercise (on your own PC): extend the lesson's server with a
# /headers endpoint that echoes request headers as JSON, then print
# from the client which User-Agent requests sends by default.
# The server half is given - the /headers route is your TODO.

import json
import threading
from http.server import BaseHTTPRequestHandler, HTTPServer

import requests

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/status":
            body = json.dumps({"service": "lab-app", "version": 1}).encode()
        # TODO: elif self.path == "/headers":
        #           body = json.dumps({"user_agent": self.headers.get("User-Agent")}).encode()
        else:
            body = json.dumps({"error": "not found"}).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *args):
        pass

server = HTTPServer(("127.0.0.1", 0), Handler)
threading.Thread(target=server.serve_forever, daemon=True).start()
base = f"http://127.0.0.1:{server.server_address[1]}"

with requests.Session() as session:
    r = session.get(base + "/status", timeout=5)
    print("Status JSON:", r.json())
    # TODO: GET base + "/headers" and print the default User-Agent.
print("Server was your own, on 127.0.0.1")
server.shutdown()`,
    output: `Status JSON: {'service': 'lab-app', 'version': 1}
Server was your own, on 127.0.0.1`,
  },

  "l4-pym-threading": {
    lang: "python",
    title: "exercise_thread_pool.py — the lab task from this lesson, as code",
    code: `# Exercise (on your own PC): the sequential check loop - rewrite
# it with a pool of 4 and compare wall-clock times on 20 closed
# localhost ports. The sequential version is given; time it first.

import socket
import time
from concurrent.futures import ThreadPoolExecutor

def check(port):
    """True = something answered on 127.0.0.1:port. Short timeout."""
    with socket.socket() as s:
        s.settimeout(1)
        return port, s.connect_ex(("127.0.0.1", port)) == 0

ports = list(range(19000, 19020))          # 20 closed localhost ports

start = time.perf_counter()
sequential = dict(check(p) for p in ports)
elapsed = time.perf_counter() - start
print("Sequential: open:", [p for p, o in sequential.items() if o])
print(f"(the sequential pass took {elapsed:.1f}s on this machine - your number will differ)")

# TODO: run the same checks with ThreadPoolExecutor(max_workers=4)
# via pool.map, time it the same way, and compare the two times.
print("Pool version: the TODO - expect roughly the timeout ONCE, not 20 times.")`,
    output: `Sequential: open: []
(the sequential pass took 0.0s on this machine - your number will differ)
Pool version: the TODO - expect roughly the timeout ONCE, not 20 times.`,
  },

  "l4-pym-portscan": {
    lang: "python",
    title: "exercise_scan_report.py — the lab task from this lesson, as code",
    code: `# Exercise: 'Lab Port Inventory' - scan your lab host, save the
# report as JSON (the json lesson), with the one-line scope note on
# top. The scanner is given; the JSON report is your TODO.

import json
import socket
import threading

listener = socket.socket()
listener.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
listener.bind(("127.0.0.1", 18022))
listener.listen(1)

def serve_once():
    conn, _ = listener.accept()
    with conn:
        conn.sendall(b"SSH-2.0-LabServer_9.6\\r\\n")

threading.Thread(target=serve_once, daemon=True).start()

def scan(host, ports, timeout=2):
    report = []
    for port in ports:
        with socket.socket() as s:
            s.settimeout(timeout)
            if s.connect_ex((host, port)) != 0:
                report.append({"port": port, "state": "closed/filtered", "banner": ""})
                continue
            try:
                banner = s.recv(80).decode(errors="replace").strip()
            except socket.timeout:
                banner = "(open, no banner)"
            report.append({"port": port, "state": "OPEN", "banner": banner})
    return report

report = scan("127.0.0.1", [18022, 18080, 19999])
for row in report:
    print(f"{row['port']:<6} {row['state']:<16} {row['banner']}")
listener.close()
# TODO: save {"scope": "127.0.0.1, this machine only", "results": report}
# to report.json with json.dump(..., indent=2) and print the scope line.`,
    output: `18022  OPEN             SSH-2.0-LabServer_9.6
18080  closed/filtered  
19999  closed/filtered  `,
  },

  "l4-pym-capstone": {
    lang: "python",
    title: "exercise_failed_by_hour.py — the lab task from this lesson, as code",
    code: `# Exercise: add a 'failed_by_hour' tally to the capstone analyzer
# (extract the hour with a second named group) and print it in the report.

import json
import re
from collections import Counter

SAMPLE = """\\
Nov 15 09:41:07 lab sshd: Failed password for rahim from 203.0.113.44
Nov 15 09:41:31 lab sshd: Failed password for rahim from 203.0.113.44
Nov 15 09:42:02 lab sshd: Failed password for admin from 203.0.113.44
Nov 15 10:43:15 lab sshd: Failed password for sana from 192.168.1.20
Nov 15 09:44:50 lab sshd: Failed password for rahim from 198.51.100.7
"""
# TODO: extend the pattern with an hour group, e.g.
# r"(?P<hour>\\d{2}):\\d{2}:\\d{2}.*Failed password for (?P<user>\\w+) from (?P<ip>\\S+)"
PATTERN = re.compile(r"Failed password for (?P<user>\\w+) from (?P<ip>\\S+)")

users, ips = Counter(), Counter()
for line in SAMPLE.splitlines():
    m = PATTERN.search(line)
    if m:
        users[m.group("user")] += 1
        ips[m.group("ip")] += 1

report = {"failed_by_user": dict(users), "failed_by_ip": dict(ips)}
# TODO: report["failed_by_hour"] = dict(sorted(hours.items()))
print(json.dumps(report, indent=2))`,
    output: `{
  "failed_by_user": {
    "rahim": 3,
    "admin": 1,
    "sana": 1
  },
  "failed_by_ip": {
    "203.0.113.44": 3,
    "192.168.1.20": 1,
    "198.51.100.7": 1
  }
}`,
  },
};
