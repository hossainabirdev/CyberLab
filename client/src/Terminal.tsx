import { useEffect, useRef, useState } from "react";
import { tx as txI, txf } from "./i18n";
import { Badge, isDone, useStore } from "./ui";
import { TERMINAL_REQUIRES, isUnlocked, lessonShort } from "./gating";
import { LockedNotice } from "./guided";

// SIMULATED terminal — a controlled interpreter with a virtual filesystem.
// Nothing here executes on any real machine. Outputs are canned but accurate
// for the commands taught in Levels 1–3.

type FileNode = { [name: string]: FileNode | string };

const HOME: FileNode = {
  "/home/learner": {
    "notes.txt": "Lab notes — remember: authorization first, always.\nPractice targets: localhost, owned VMs, Docker only.",
    "auth.log": "Nov 10 04:12:01 lab sshd[812]: Failed password for invalid user admin from 10.0.2.15 port 51100 ssh2\nNov 10 04:12:04 lab sshd[812]: Failed password for invalid user admin from 10.0.2.15 port 51102 ssh2\nNov 10 04:13:31 lab sshd[812]: Failed password for invalid user root from 10.0.2.15 port 51155 ssh2\nNov 10 04:17:02 lab sshd[812]: Accepted password for learner from 192.168.56.1 port 52210 ssh2",
    projects: { "parser.py": "# log parser (lesson 4.1)\nimport re\nfor line in open('auth.log'):\n    if 'Failed password' in line:\n        print(line.strip())" },
    "secrets.txt": "SIMULATED training file. In the real world this must never be world-readable.",
  },
};

function lookup(path: string): FileNode | string | undefined {
  let node: FileNode | string = HOME["/home/learner"] as FileNode;
  if (path === "/home/learner" || path === "~" || path === ".") return node;
  const parts = path.replace(/^\/home\/learner\/?/, "").split("/").filter(Boolean);
  for (const p of parts) {
    if (typeof node !== "object" || !(p in node)) return undefined;
    node = node[p] as FileNode | string;
  }
  return node;
}

const LINUX_HELP = `Available commands in this simulation:
  pwd  ls [path]  cd <dir>  cat <file>  grep <pattern> <file>  tail <file>
  whoami  id  hostname  ip a  ss -tuln  ping -c <n> <host>  dig <domain>
  ps aux  df -h  free -h  uname -a  chmod  stat <file>  env  echo <text>
  clear  help  exit-note
Anything else returns a realistic "command not found" so you practise recovery.`;

function runLinux(raw: string, cwd: string, setCwd: (p: string) => void): string {
  const parts = raw.trim().split(/\s+/);
  const cmd = parts[0] ?? "";
  const args = parts.slice(1);
  const abs = (p: string) => (p.startsWith("/") ? p : p.startsWith("~") ? "/home/learner" + p.slice(1) : (cwd === "/home/learner" ? "/home/learner/" + p : cwd + "/" + p)).replace(/\/+$/, "") || "/";
  switch (cmd) {
    case "": return "";
    case "pwd": return cwd;
    case "whoami": return "learner";
    case "id": return "uid=1000(learner) gid=1000(learner) groups=1000(learner),27(sudo)";
    case "hostname": return "cyberlab-vm";
    case "uname": return "Linux cyberlab-vm 6.8.0 x86_64 GNU/Linux";
    case "help": return LINUX_HELP;
    case "clear": return "__CLEAR__";
    case "ls": {
      const target = args.find((a) => !a.startsWith("-")) ?? cwd;
      const node = lookup(abs(target));
      if (node === undefined) return `ls: cannot access '${target}': No such file or directory`;
      if (typeof node === "string") return target;
      if (args.includes("-l")) {
        return Object.entries(node).map(([n, v]) => `${typeof v === "string" ? "-rw-r--r--" : "drwxr-xr-x"} 1 learner learner ${typeof v === "string" ? String(v.length).padStart(5) : " 4096"} Nov 10 09:14 ${n}`).join("\n");
      }
      return Object.keys(node).join("  ");
    }
    case "cd": {
      const target = args[0] ?? "/home/learner";
      if (target === "..") { setCwd("/home/learner"); return ""; }
      const node = lookup(abs(target));
      if (node === undefined) return `bash: cd: ${target}: No such file or directory`;
      if (typeof node === "string") return `bash: cd: ${target}: Not a directory`;
      setCwd(abs(target)); return "";
    }
    case "cat": {
      const node = lookup(abs(args[0] ?? ""));
      if (node === undefined) return `cat: ${args[0]}: No such file or directory`;
      if (typeof node !== "string") return `cat: ${args[0]}: Is a directory`;
      return node;
    }
    case "grep": {
      const [pattern, file] = args;
      const node = lookup(abs(file ?? ""));
      if (typeof node !== "string") return `grep: ${file}: No such file or directory`;
      const lines = node.split("\n").filter((l) => l.includes(pattern ?? ""));
      return lines.length ? lines.join("\n") : "(no matches — grep exits with status 1)";
    }
    case "tail": {
      const node = lookup(abs(args[args.length - 1] ?? ""));
      if (typeof node !== "string") return `tail: cannot open '${args[0]}' for reading: No such file or directory`;
      return node.split("\n").slice(-3).join("\n");
    }
    case "stat": {
      const node = lookup(abs(args[0] ?? ""));
      if (node === undefined) return `stat: cannot statx '${args[0]}': No such file or directory`;
      return `  File: ${args[0]}\n  Size: ${typeof node === "string" ? node.length : 4096}\tAccess: (0666/-rw-rw-rw-)  Uid: (1000/learner) Gid: (1000/learner)\n  → Note: mode 666 on a data file means ANY local user can read AND write it.`;
    }
    case "chmod": return args.length >= 2 ? `(simulated) permissions on ${args[1]} set to ${args[0]} — verify with: ls -l ${args[1]}` : "chmod: missing operand";
    case "ip": return "1: lo: <LOOPBACK,UP> inet 127.0.0.1/8\n2: eth0: <BROADCAST,MULTICAST,UP> inet 192.168.56.101/24 brd 192.168.56.255";
    case "ss": return "Netid State  Recv-Q Send-Q Local Address:Port Peer Address:Port\ntcp   LISTEN 0      4096   0.0.0.0:22         0.0.0.0:*\ntcp   LISTEN 0      100    127.0.0.1:8080       0.0.0.0:*\nudp   UNCONN 0      0      0.0.0.0:53           0.0.0.0:*";
    case "ping": {
      const host = args[args.length - 1] ?? "localhost";
      return `PING ${host} (93.184.216.34) 56(84) bytes of data.\n64 bytes from ${host}: icmp_seq=1 ttl=56 time=11.2 ms\n64 bytes from ${host}: icmp_seq=2 ttl=56 time=10.8 ms\n--- ${host} ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss`;
    }
    case "dig": {
      const d = args[args.length - 1] ?? "example.com";
      return `; <<>> DiG (simulated) <<>> ${d}\n;; ANSWER SECTION:\n${d}.  300  IN  A  93.184.216.34\n${d}.  300  IN  TXT  "v=spf1 -all"\n;; Query time: 24 msec  SERVER: 192.168.56.1#53`;
    }
    case "ps": return "USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.4 168340  9120 ?        Ss   08:59   0:02 /sbin/init\nroot       812  0.0  0.6  15432 12288 ?        Ss   09:01   0:00 sshd: /usr/sbin/sshd [listener]\nlearner   1204  0.0  0.3  10240  6144 pts/0    Ss   09:14   0:00 -bash";
    case "df": return "Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda2        40G   14G   24G  37% /\ntmpfs           2.0G     0  2.0G   0% /dev/shm";
    case "free": return "               total        used        free      shared  buff/cache   available\nMem:         4096000     1180000     1900000       12000     1016000     2700000";
    case "env": return "USER=learner\nHOME=/home/learner\nPATH=/usr/local/bin:/usr/bin:/bin\nSHELL=/bin/bash\nLANG=en_US.UTF-8";
    case "echo": return args.join(" ").replace(/^["']|["']$/g, "");
    case "exit-note": return "There is no real shell to exit — this is a simulation. Switch mode or section any time; your progress is saved.";
    case "sudo": return "sudo is disabled in this simulation on purpose: you practise the ADMIN commands themselves, and on your own VM you would see a password prompt here.";
    case "rm": return "Blocked in this simulation: 'rm' permanently deletes files. On your own VM, learn 'rm -i' (interactive) and always double-check the path first.";
    default: return `bash: ${cmd}: command not found — try 'help' for the simulated command set.`;
  }
}

const WIN_HELP = `Available commands in this simulation (CMD):
  dir  cd  type <file>  ipconfig  ping <host>  nslookup <domain>
  whoami  hostname  systeminfo  tasklist  netstat -an  cls  help
PowerShell mode adds: Get-Process  Get-Service  Get-NetIPAddress  Get-EventLog`;

function runWindows(raw: string, mode: "cmd" | "ps"): string {
  const parts = raw.trim().split(/\s+/);
  const cmd = (parts[0] ?? "").toLowerCase();
  const args = parts.slice(1);
  if (mode === "ps") {
    switch (cmd) {
      case "get-process": return "Handles  NPM(K)    PM(K)      WS(K)     CPU(s)     Id  ProcessName\n-------  ------    -----      -----     ------     --  -----------\n    412      24    18432      22104       1.25   1204  explorer\n    298      18     9216      15360       0.50    812  svchost";
      case "get-service": return "Status   Name               DisplayName\n------   ----               -----------\nRunning  WinDefend          Microsoft Defender Antivirus Service\nRunning  wuauserv           Windows Update\nStopped  TelnetClientSvc    (simulated) Legacy Telnet — should stay disabled";
      case "get-netipaddress": return "IPAddress         InterfaceAlias  AddressFamily PrefixLength\n---------         --------------  ------------- ------------\n192.168.56.102    Ethernet        IPv4          24\n127.0.0.1         Loopback        IPv4          8";
      case "get-eventlog": return "Index Time          EntryType   Source            InstanceID Message\n----- ----          ---------   ------            ---------- -------\n 1042 Nov 10 04:17  Success...  Security          4625→4624 pattern in lesson 18 (failed then successful logon)";
      case "cls": return "__CLEAR__";
      case "help": return WIN_HELP;
    }
  }
  switch (cmd) {
    case "": return "";
    case "help": return WIN_HELP;
    case "cls": case "clear": return "__CLEAR__";
    case "whoami": return "cyberlab-vm\\learner";
    case "hostname": return "CYBERLAB-VM";
    case "dir": return " Volume in drive C is Windows\n Directory of C:\\Users\\learner\n\n10/11/2026  09:14 AM    <DIR>          Documents\n10/11/2026  09:14 AM             1,204 notes.txt\n10/11/2026  09:14 AM    <DIR>          projects\n               1 File(s)          1,204 bytes";
    case "type": return args[0]?.toLowerCase().includes("notes") ? "Lab notes — remember: authorization first, always." : `The system cannot find the file specified: ${args[0] ?? ""}`;
    case "cd": return args.length ? `C:\\Users\\learner${args[0] === ".." ? "" : "\\" + args[0]}` : "C:\\Users\\learner";
    case "ipconfig": return "Windows IP Configuration\n\nEthernet adapter Ethernet:\n   IPv4 Address. . . . . . . . . . . : 192.168.56.102\n   Subnet Mask . . . . . . . . . . . : 255.255.255.0\n   Default Gateway . . . . . . . . . : 192.168.56.1";
    case "ping": { const h = args[args.length - 1] ?? "localhost"; return `Pinging ${h} [93.184.216.34] with 32 bytes of data:\nReply from 93.184.216.34: bytes=32 time=11ms TTL=56\nReply from 93.184.216.34: bytes=32 time=10ms TTL=56\nPing statistics: Packets: Sent = 2, Received = 2, Lost = 0 (0% loss)`; }
    case "nslookup": { const d = args[args.length - 1] ?? "example.com"; return `Server:  router.lan  Address: 192.168.56.1\n\nNon-authoritative answer:\nName:    ${d}\nAddress: 93.184.216.34`; }
    case "systeminfo": return "Host Name:                 CYBERLAB-VM\nOS Name:                   Microsoft Windows 11 Pro (training description)\nOS Version:                10.0 Build (see lesson notes for verifying real builds)\nSystem Type:               x64-based PC\nTotal Physical Memory:     8,192 MB";
    case "tasklist": return "Image Name                     PID Session Name        Session#    Mem Usage\n========================= ======== ================ =========== ============\nSystem Idle Process              0 Services                   0          8 K\nexplorer.exe                  1204 Console                    1     92,400 K\nsvchost.exe                    812 Services                   0     18,220 K";
    case "netstat": return "Active Connections\n  Proto  Local Address          Foreign Address        State\n  TCP    0.0.0.0:22             0.0.0.0:0              LISTENING\n  TCP    127.0.0.1:8080         0.0.0.0:0              LISTENING\n  UDP    0.0.0.0:53             *:*";
    default: return `'${parts[0]}' is not recognized as an internal or external command in this simulation. Try 'help'.`;
  }
}

// Shared with the in-lab try terminals (LabTry.tsx) — same simulated
// interpreters, so a command behaves identically everywhere in CyberLab.
export { runLinux as runLinuxSim, runWindows as runWindowsSim };

const EXERCISES: { id: string; mode: "linux" | "cmd" | "ps"; title: string; titleBn: string; goal: string; goalBn: string; why: string; whyBn: string; tell: string; tellBn: string; check: (cmd: string) => boolean; done: string; doneBn: string }[] = [
  { id: "ex1", mode: "linux", title: "Find the failed logins", titleBn: "ব্যর্থ login খোঁজো", goal: "In Linux mode, search auth.log (in your home directory) for the failed password attempts.", goalBn: "Linux mode-এ auth.log (তোমার home directory-তে) খুঁজে ব্যর্থ password প্রচেষ্টাগুলো বের করো।", why: "Logs are far too long to read line by line — grep is how an analyst pulls out only the evidence lines. This exact search (failures inside auth.log) is the first move of every SSH brute-force triage.", whyBn: "Log এত লম্বা যে line ধরে পড়া যায় না — grep দিয়েই analyst শুধু প্রমাণের line গুলো টেনে বের করে। এই খোঁজটাই (auth.log-এর ভেতরে ব্যর্থতা) প্রতিটি SSH brute-force triage-র প্রথম পদক্ষেপ।", tell: "What this output tells you: a tight burst of failures from ONE address, then a success from a different internal address — a blocked attempt, not a proven breach, until the user says otherwise.", tellBn: "এই output যা বলে: একটি মাত্র ঠিকানা থেকে ঘন ব্যর্থতার ঝড়, তারপর অন্য একটি অভ্যন্তরীণ ঠিকানা থেকে সাফল্য — প্রমাণিত breach নয়, ঠেকানো প্রচেষ্টা, user অন্যকিছু না বলা পর্যন্ত।", check: (c) => /grep\s+.*[Ff]ailed.*auth\.log/.test(c) || /grep\s+.*auth\.log/.test(c), done: "You used grep to filter evidence — the core of log triage. The burst at 04:12–04:13 from 10.0.2.15 is the pattern Level 18 teaches you to escalate.", doneBn: "তুমি grep দিয়ে প্রমাণ ছেঁকে বের করলে — এটাই log triage-এর মূল কাজ। 10.0.2.15 থেকে 04:12–04:13-র burst-টাই সেই pattern, যা Level 18-এ escalate করতে শেখানো হয়।" },
  { id: "ex2", mode: "linux", title: "Spot the bad permission", titleBn: "খারাপ permission চেনো", goal: "Use stat or ls -l on secrets.txt and identify why it is dangerous.", goalBn: "secrets.txt-এ stat বা ls -l চালিয়ে বোঝো এটি কেন বিপজ্জনক।", why: "Permissions decide who can read a secrets file. stat / ls -l checks that fact in one second, instead of trusting how the file 'should' be set.", whyBn: "Permission ঠিক করে secrets file কে পড়তে পারবে। stat / ls -l এক সেকেন্ডে সেই তথ্য যাচাই করে — file 'যেমন থাকা উচিত' তা বিশ্বাস করার বদলে।", tell: "What this output tells you: 666 means every local user can read AND change the file — on a real system that is a critical finding, fixed with chmod 600 and the right owner.", tellBn: "এই output যা বলে: 666 মানে প্রতিটি local user file-টি পড়তে ও বদলাতে পারে — আসল system-এ এটি critical finding, ঠিক হয় chmod 600 ও সঠিক মালিক দিয়ে।", check: (c) => /stat\s+secrets\.txt/.test(c) || /ls\s+-l/.test(c), done: "Mode 666 = world-readable AND world-writable. On a real system: chmod 600 for private files, owned by the right user.", doneBn: "Mode 666 মানে সবাই পড়তে ও লিখতে পারে। আসল system-এ: ব্যক্তিগত file-এর জন্য chmod 600, সঠিক user-এর মালিকানায়।" },
  { id: "ex3", mode: "linux", title: "Read the network state", titleBn: "Network-এর অবস্থা পড়ো", goal: "List listening services with ss and note which port should make you ask questions.", goalBn: "ss দিয়ে listening service-গুলোর তালিকা করো আর লক্ষ করো কোন port নিয়ে প্রশ্ন ওঠা উচিত।", why: "You cannot defend services you cannot list. ss shows what is actually listening right now — the ground truth every firewall review and asset inventory is checked against.", whyBn: "যেই service-এর তালিকাই নেই তা রক্ষা করা যায় না। ss দেখায় ঠিক এখন কী listening আছে — সেই ground truth যার সঙ্গে প্রতিটি firewall review ও asset inventory মেলানো হয়।", tell: "What this output tells you: SSH reachable and a localhost-only app port look expected; a service bound to 0.0.0.0 (all interfaces) always needs an owner and a reason.", tellBn: "এই output যা বলে: SSH পৌঁছানো যায় আর একটি localhost-only app port প্রত্যাশিত; 0.0.0.0-তে (সব interface) বাঁধা যেকোনো service-এর সবসময় একজন মালিক ও একটি কারণ লাগে।", check: (c) => /^ss\b/.test(c), done: "Port 22 (SSH) and a localhost-only 8080 look expected; UDP 53 on 0.0.0.0 deserves a question — is this host meant to be a DNS server?", doneBn: "Port 22 (SSH) আর শুধু localhost-এ 8080 প্রত্যাশিত; কিন্তু 0.0.0.0-তে UDP 53 নিয়ে প্রশ্ন ওঠা উচিত — এই host কি DNS server হওয়ার কথা?" },
  { id: "ex4", mode: "cmd", title: "Windows network identity", titleBn: "Windows network পরিচয়", goal: "In CMD mode, show this machine's IPv4 address, mask, and gateway with one command.", goalBn: "CMD mode-এ একটিমাত্র command দিয়ে এই machine-এর IPv4 address, mask ও gateway দেখাও।", why: "Half of all 'the network is broken' tickets are really wrong address, mask or gateway facts. ipconfig shows all three in one command, before you change anything.", whyBn: "'Network ভাঙা' ticket-এর অর্ধেকই আসলে ভুল address, mask বা gateway তথ্য। কিছু বদলানোর আগে ipconfig এক command-এ তিনটিই দেখায়।", tell: "What this output tells you: this machine is 192.168.56.102/24 and reaches everything else through gateway .1 — the same facts 'ip a' gives on Linux.", tellBn: "এই output যা বলে: এই machine 192.168.56.102/24, আর বাকি সবকিছুতে পৌঁছায় gateway .1 হয়ে — Linux-এ 'ip a' ঠিক এই তথ্যই দেয়।", check: (c) => /^ipconfig/.test(c), done: "192.168.56.102/24 via gateway .1 — the same facts 'ip a' gives on Linux. Same concepts, different dialect.", doneBn: "Gateway .1 হয়ে 192.168.56.102/24 — Linux-এ 'ip a' ঠিক এই তথ্যই দেয়। একই ধারণা, ভিন্ন ভাষা।" },
  { id: "ex5", mode: "ps", title: "PowerShell service audit", titleBn: "PowerShell service audit", goal: "In PowerShell mode, list services and find the one that should stay disabled.", goalBn: "PowerShell mode-এ service-গুলোর তালিকা করো আর খুঁজে বের করো কোনটি disabled থাকা উচিত।", why: "Services are background attack surface. Listing them and judging each one — needed? current? legacy? — is the whole endpoint audit in miniature.", whyBn: "Service হলো পেছনে চলা আক্রমণের পৃষ্ঠ। তালিকা করে প্রতিটিকে বিচার করা — দরকার? হালনাগাদ? পুরনো? — পুরো endpoint audit-এরই ছোট রূপ।", tell: "What this output tells you: Defender and Windows Update running is healthy; the stopped legacy Telnet is correct hardening — Telnet sends credentials in cleartext, so stopped is its only safe state.", tellBn: "এই output যা বলে: Defender ও Windows Update চলমান থাকা সুস্থ; বন্ধ থাকা পুরনো Telnet সঠিক hardening — Telnet credential cleartext-এ পাঠায়, তাই বন্ধ থাকাই তার একমাত্র নিরাপদ অবস্থা।", check: (c) => /^get-service/.test(c), done: "A stopped legacy Telnet service is correct hardening — Telnet sends credentials in cleartext; SSH replaced it.", doneBn: "বন্ধ থাকা পুরনো Telnet service-ই সঠিক hardening — Telnet credential প্লেইন text-এ পাঠায়; SSH তার জায়গা নিয়েছে।" },
];

export function Terminal({ awardXp, goLesson }: { awardXp: (id: string, label: string) => void; goLesson?: (id: string) => void }) {
  const store = useStore();
  const [mode, setMode] = useState<"linux" | "cmd" | "ps">("linux");
  const [cwd, setCwd] = useState("/home/learner");
  const [lines, setLines] = useState<string[]>([
    "CyberLab SIMULATED terminal — no command runs on any real machine.",
    "Type 'help' to see the simulated command set. Guided exercises are on the right.",
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const [doneEx, setDoneEx] = useState<string[]>([]);
  const [feedback, setFeedback] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight }); }, [lines]);

  const prompt = mode === "linux" ? `learner@cyberlab-vm:${cwd.replace("/home/learner", "~")}$` : mode === "cmd" ? "C:\\Users\\learner>" : "PS C:\\Users\\learner>";

  const run = (raw: string) => {
    const cmd = raw.trim();
    const out = mode === "linux" ? runLinux(cmd, cwd, setCwd) : runWindows(cmd, mode);
    if (out === "__CLEAR__") setLines([]);
    else setLines((l) => [...l, `${prompt} ${raw}`, ...(out ? out.split("\n") : [])]);
    if (cmd) { setHistory((h) => [cmd, ...h].slice(0, 50)); setHIdx(-1); }
    for (const ex of EXERCISES) {
      if (ex.mode === mode && !doneEx.includes(ex.id) && !isDone(store, "terminal", ex.id) && isUnlocked(store, TERMINAL_REQUIRES[ex.id]) && ex.check(cmd.toLowerCase())) {
        setDoneEx((d) => [...d, ex.id]);
        setFeedback((store.profile.lang === "bn" ? ex.doneBn : ex.done) + " " + (store.profile.lang === "bn" ? ex.tellBn : ex.tell));
        awardXp(ex.id, `Terminal exercise: ${ex.title}`);
      }
    }
  };

  const [tab, setTab] = useState<"exercises" | "challenge">("exercises");
  // Completion lives in persisted progress (kind "terminal") — the local
  // doneEx list only covers this session, so an exercise finished on an
  // earlier visit still shows complete (and its XP is never re-awarded).
  const exDone = (id: string) => doneEx.includes(id) || isDone(store, "terminal", id);
  const doneCount = EXERCISES.filter((ex) => exDone(ex.id)).length;
  return (
    <>
    <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
      <div className="overflow-hidden rounded-xl border-2 border-slate-600 bg-[#07090d] shadow-lg">
        <div className="flex items-center gap-1.5 bg-[#111827] px-3 py-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-red-500" /><span className="h-3 w-3 rounded-full bg-amber-400" /><span className="h-3 w-3 rounded-full bg-emerald-500" />
          <span className="ml-2 font-mono text-[11px] text-slate-300">learner@cyberlab-vm — {mode === "linux" ? "bash" : mode === "cmd" ? "cmd.exe" : "PowerShell"} · SIMULATED</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-700 bg-[#0b1220] px-3 py-2">
          <Badge tone="warn">SIMULATED — not a real shell</Badge>
          <div className="ml-auto flex gap-1" role="tablist" aria-label="Terminal mode">
            {(["linux", "cmd", "ps"] as const).map((m) => (
              <button key={m} role="tab" aria-selected={mode === m} onClick={() => { setMode(m); setLines((l) => [...l, `— switched to ${m === "linux" ? "Linux (bash)" : m === "cmd" ? "Windows CMD" : "PowerShell"} simulation —`]); }}
                className={`min-h-[36px] rounded px-3 py-1.5 text-xs font-medium ${mode === m ? "bg-[color:var(--accent2)] text-white" : "border border-[color:var(--border)] text-[color:var(--dim)]"}`}>
                {m === "linux" ? "Linux" : m === "cmd" ? "CMD" : "PowerShell"}
              </button>
            ))}
          </div>
          <button type="button" aria-label="Copy terminal output" className="min-h-[36px] rounded border border-[color:var(--border)] px-2 py-1.5 text-xs text-[color:var(--dim)]"
            onClick={() => void navigator.clipboard?.writeText(lines.join("\n"))}>Copy output</button>
          <button type="button" aria-label="Clear terminal" className="min-h-[36px] rounded border border-[color:var(--border)] px-2 py-1.5 text-xs text-[color:var(--dim)]"
            onClick={() => setLines([])}>Clear</button>
        </div>
        <div ref={scrollRef} className="h-[300px] overflow-y-auto p-3 font-mono text-[12.5px] leading-relaxed text-[#c9d6e3] sm:h-[380px]" onClick={() => inputRef.current?.focus()}>
          {lines.map((l, i) => <div key={i} className="whitespace-pre-wrap break-words">{l}</div>)}
          <form className="mt-1 flex items-center gap-2" onSubmit={(e) => { e.preventDefault(); run(input); setInput(""); }}>
            <span className="shrink-0 text-sky-300">{prompt}</span>
            <input ref={inputRef} value={input} aria-label="Terminal command input"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "ArrowUp") { e.preventDefault(); const n = Math.min(hIdx + 1, history.length - 1); if (history[n]) { setHIdx(n); setInput(history[n]); } }
                if (e.key === "ArrowDown") { e.preventDefault(); const n = hIdx - 1; setHIdx(Math.max(n, -1)); setInput(n >= 0 ? (history[n] ?? "") : ""); }
              }}
              className="min-h-[36px] w-full bg-transparent font-mono text-[12.5px] text-[#e6edf3] outline-none" autoComplete="off" spellCheck={false} />
          </form>
        </div>
        <p className="border-t border-[color:var(--border)] px-3 py-2 text-[11px] text-[color:var(--dim)]">
          Example commands: {mode === "linux" ? "ls -l · cat auth.log · grep Failed auth.log · ss -tuln · dig example.com" : mode === "cmd" ? "ipconfig · dir · netstat -an · nslookup example.com" : "Get-Process · Get-Service · Get-NetIPAddress"} · ↑/↓ for history
        </p>
      </div>
      <div className="space-y-3">
        <div className="flex gap-1" role="tablist" aria-label="Terminal practice mode">
          <button type="button" role="tab" aria-selected={tab === "exercises"} onClick={() => setTab("exercises")} className={`min-h-[40px] flex-1 rounded-lg px-3 py-1.5 text-sm font-semibold ${tab === "exercises" ? "bg-[color:var(--accent2)] text-white" : "border border-[color:var(--border)] text-[color:var(--text)]"}`}>📘 Guided exercises</button>
          <button type="button" role="tab" aria-selected={tab === "challenge"} onClick={() => setTab("challenge")} className={`min-h-[40px] flex-1 rounded-lg px-3 py-1.5 text-sm font-semibold ${tab === "challenge" ? "bg-amber-600 text-white" : "border border-[color:var(--border)] text-[color:var(--text)]"}`}>🏆 Challenge mode</button>
        </div>
        {tab === "challenge" ? (
          <div className="rounded-xl border-2 border-amber-700/70 bg-[color:var(--surface)] p-3">
            <p className="text-sm font-bold text-[color:var(--text)]">🏆 {txf(store.profile.lang, "Challenge: clear all {a} exercises", "Challenge: সব {a}টি exercise শেষ করো", { a: EXERCISES.length })}</p>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[color:var(--surface2)]"><div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all" style={{ width: `${(doneCount / EXERCISES.length) * 100}%` }} /></div>
            <p className="mt-1.5 text-[13px] text-[color:var(--dim)]">{store.profile.lang === "bn" ? `${doneCount}/${EXERCISES.length} সম্পূর্ণ — প্রতিটিই terminal-এ তোমার লেখা আসল command যাচাই করে (সঠিক mode লাগবে)। সব শেষ করলে তুমি log triage, permission audit, network state আর দুই Windows shell-ই অনুশীলন করে ফেলবে।` : `${doneCount}/${EXERCISES.length} complete — each one checks the real command you type in the terminal (right mode required). Finish them all and you have rehearsed log triage, permission audit, network state, and both Windows shells.`}</p>
          </div>
        ) : null}
        {EXERCISES.map((ex) => {
          const unlocked = isUnlocked(store, TERMINAL_REQUIRES[ex.id]);
          const done = exDone(ex.id);
          return (
          <div key={ex.id} className={`rounded-lg border-2 p-3 ${done ? "border-emerald-700 bg-emerald-950/20" : unlocked ? "border-[color:var(--border)] bg-[color:var(--surface)]" : "cl-locked border-[color:var(--border)] bg-[color:var(--surface)]"}`}>
            <p className="text-sm font-medium text-[color:var(--text)]">{done ? "✓ " : unlocked ? "" : txI(store.profile.lang, "Locked · ", "বন্ধ · ")}{store.profile.lang === "bn" ? ex.titleBn : ex.title} <span className="text-[color:var(--dim)]">({ex.mode === "ps" ? "PowerShell" : ex.mode.toUpperCase()})</span></p>
            {unlocked ? <><p className="mt-1 text-[13px] text-[color:var(--dim)]">{store.profile.lang === "bn" ? ex.goalBn : ex.goal}</p><p className="cl-callout cl-callout-note mt-2 text-[13px] leading-relaxed text-[color:var(--dim)]"><span className="font-bold text-[color:var(--text)]">{txI(store.profile.lang, "Why this command? ", "কেন এই command? ")}</span>{store.profile.lang === "bn" ? ex.whyBn : ex.why}</p></>
              : <><p className="mt-1 text-[13px] text-[color:var(--dim)]">{store.profile.lang === "bn" ? `খুলবে এই পাঠের পরে: ${lessonShort((TERMINAL_REQUIRES[ex.id] ?? [])[0] ?? "")} — ওপরের free terminal অনুশীলনের জন্য সবসময় খোলা।` : `Unlocks after: ${lessonShort((TERMINAL_REQUIRES[ex.id] ?? [])[0] ?? "")} — the free terminal above stays open for practice anytime.`}</p>
                {goLesson ? <LockedNotice requires={TERMINAL_REQUIRES[ex.id] ?? []} goLesson={goLesson} /> : null}</>}
          </div>
          );
        })}
        {feedback ? <p role="status" className="rounded-md border border-emerald-800 bg-emerald-950/30 p-3 text-[13px] text-emerald-200">{feedback}</p> : null}
        <p className="text-[12px] leading-relaxed text-[color:var(--dim)]">{txI(store.profile.lang, "Real practice: run these same commands on your own PC (Windows Terminal / PowerShell) or a Linux VM. The simulation teaches the shape; your own machine teaches the truth.", "আসল অনুশীলন: এই একই command নিজের PC-তে (Windows Terminal / PowerShell) বা Linux VM-এ চালাও। Simulation আকারটা শেখায়; নিজের machine-ই সত্যটা শেখায়।")}</p>
      </div>
    </div>
    </>
  );
}
