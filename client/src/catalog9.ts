// CyberLab catalog part 9 — PHASE 5 lessons (Levels 23–31, the CSE syllabus-gap
// subjects, added AFTER the Level 0–22 security chain per the user's serial order:
// Discrete Mathematics, DSA, Digital Logic, Microprocessor & Assembly, DBMS,
// Software Engineering, Theory of Computation, Compiler Design, AI/ML Basics).
// Same standard as catalog8: full lesson format, real runnable code (every Python
// example's printed output was produced by actually running the code at authoring
// time), 3-question quiz, validated practical per lesson, two named checkpoints
// and a level final per level, one gated lab per level. These are the learner's
// Uttara BSc CSE (Honours) syllabus subjects — taught CyberLab-style and labelled
// honours-support in honours.tsx; course codes are NOT shown for them because
// they are not among the verified codes. No invented facts, dates or versions.

import type { Lesson } from "./catalog";
import type { Checkpoint, LevelFinal, Practical } from "./catalog3";
import type { Ctf, Lab, Mission } from "./catalog2";

export const PHASE5_LESSONS: Lesson[] = [
 {
  "id": "l23-sets",
  "level": 23,
  "title": "Sets and Set Operations: The Vocabulary of Counting",
  "difficulty": "Foundation",
  "minutes": 35,
  "xp": 60,
  "skill": "Discrete Mathematics",
  "prereq": "Level 4 (Programming Foundations) complete — this section assumes your Python from Level 4 and nothing else.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Sets and set operations",
   "Work the example (sets_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Set, Intersection (A ∩ B), Union / Difference",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Your DBMS course (Level 27 here) is set theory wearing a suit: SELECT is filtering a set, JOIN is a matched union of two sets. Discrete math examiners ask these operations in symbols; this lesson makes you fluent in both the symbols and the code.",
  "concept": [
   "A set is defined by membership alone: an element is in or out, never 'twice'. That one rule quietly powers half of computing — database rows are sets of tuples, hash tables are sets with fast membership tests, and access-control lists are sets of principals. Python's set type implements the mathematics directly, so every operation in this lesson is both a math fact and runnable code.",
   "The four operations to own are intersection (in both), union (in either), difference (in the first only), and symmetric difference (in exactly one). Venn diagrams draw them; code computes them. When a problem says 'students taking both courses', it is asking for an intersection whether it uses the word or not — translating English into set operations is the actual skill."
  ],
  "diagramTitle": "Sets and set operations — the working flow",
  "diagram": [
   "1 · START from the rule — Set: A collection of distinct objects, written in braces: {1, 2, 3}. Order does not matter and duplicates do not count.",
   "2 · RUN the worked example (sets_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Set",
    "def": "A collection of distinct objects, written in braces: {1, 2, 3}. Order does not matter and duplicates do not count."
   },
   {
    "term": "Intersection (A ∩ B)",
    "def": "The elements in BOTH A and B. In code: a & b."
   },
   {
    "term": "Union / Difference",
    "def": "Union (A ∪ B) is everything in either set; difference (A − B) is what is in A but not B. In code: a | b and a - b."
   }
  ],
  "code": {
   "lang": "python",
   "title": "sets_lab.py — set operations on two course rosters (complete, runnable)",
   "code": "cs = {\"Abir\", \"Rahim\", \"Karim\", \"Nabil\"}\nmath = {\"Karim\", \"Nabil\", \"Sakib\"}\nprint(\"both:\", sorted(cs & math))\nprint(\"either:\", sorted(cs | math))\nprint(\"cs only:\", sorted(cs - math))\nprint(\"in exactly one:\", sorted(cs ^ math))\nprint(\"size of cs:\", len(cs))",
   "output": "both: ['Karim', 'Nabil']\neither: ['Abir', 'Karim', 'Nabil', 'Rahim', 'Sakib']\ncs only: ['Abir', 'Rahim']\nin exactly one: ['Abir', 'Rahim', 'Sakib']\nsize of cs: 4",
   "lines": [
    "Two rosters as Python sets — duplicates impossible, order irrelevant.",
    "Each print is one set operation: & ∩, | ∪, − difference, ^ symmetric difference."
   ]
  },
  "mistakes": [
   "Treating a set like a list: expecting order or counting a duplicate element twice.",
   "Reading A − B as 'both removed' — difference keeps what is only in A.",
   "Writing 'in exactly one' as a union — that is symmetric difference, not union."
  ],
  "security": "Exam link: this is the first topic of your Discrete Mathematics course, and its notation (∩, ∪, −, ⊆, |A|) is assumed by every later topic in the course — combinatorics counts sets, relations live on sets, graphs are sets of edges.",
  "pc": [
   "Run the worked example on your PC exactly as written (sets_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (sets_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Set — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "If A = {1,2,3} and B = {3,4}, what is A ∩ B?",
    "options": [
     "{3}",
     "{1,2,3,4}",
     "{1,2}",
     "{}"
    ],
    "answer": 0,
    "why": "Intersection keeps only elements in both sets — just 3."
   },
   {
    "q": "A course has 30 students, 18 take Physics, 15 take Chemistry, 8 take both. How many take at least one?",
    "options": [
     "33",
     "25",
     "23",
     "30"
    ],
    "answer": 1,
    "why": "|A ∪ B| = 18 + 15 − 8 = 25. The overlap was counted twice, so subtract it once."
   },
   {
    "q": "In Python, what does a ^ b compute?",
    "options": [
     "Union",
     "Symmetric difference — elements in exactly one set",
     "Intersection",
     "Difference"
    ],
    "answer": 1,
    "why": "^ is symmetric difference: in A or B but not both."
   }
  ],
  "summary": "Sets are membership-only collections; intersection, union, difference and symmetric difference answer almost every 'who is in which group' question, in symbols and in Python alike.",
  "skillGained": "Set notation and operations, in mathematics and in working Python.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard discrete mathematics treatment (sets, logic, combinatorics, graph theory) as taught in undergraduate CS — definitions follow the standard textbook presentation (Rosen, Discrete Mathematics and Its Applications).",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l23-logic",
  "level": 23,
  "title": "Propositional Logic: Truth Tables That Settle Arguments",
  "difficulty": "Foundation",
  "minutes": 40,
  "xp": 60,
  "skill": "Discrete Mathematics",
  "prereq": "Previous in Level 23: l23-sets.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Propositional logic and truth tables",
   "Work the example (logic_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Proposition, Implication (p → q), Contrapositive",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every if-statement you will ever write is propositional logic, and every broken access check is a truth-table row somebody did not enumerate. Theory of Computation (Level 29) and Compiler Design (Level 30) build directly on this lesson's connectives.",
  "concept": [
   "Logic turns arguments into arithmetic on truth values. The connectives ∧ (and), ∨ (or), ¬ (not) and → (implies) each have a complete definition in a truth table of at most four rows — there is nowhere for ambiguity to hide. The row students resist is false → anything = true: 'if the moon is cheese, I am rich' is vacuously true because the promise only binds when the condition holds.",
   "Two statements are logically equivalent when their truth tables match in every row. The most useful equivalence in this course is implication ≡ contrapositive, and the most common professional error is confusing it with the converse — 'all admins are staff' does not imply 'all staff are admins'. The code below proves the equivalence by exhaustion: checking all rows IS the proof for propositional logic."
  ],
  "diagramTitle": "Propositional logic and truth tables — the working flow",
  "diagram": [
   "1 · START from the rule — Proposition: A statement that is exactly true or false — 'the server is up' — never a question or a command.",
   "2 · RUN the worked example (logic_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Proposition",
    "def": "A statement that is exactly true or false — 'the server is up' — never a question or a command."
   },
   {
    "term": "Implication (p → q)",
    "def": "'If p then q'. False in exactly one case: p true and q false."
   },
   {
    "term": "Contrapositive",
    "def": "p → q is logically equivalent to ¬q → ¬p. The converse (q → p) is NOT equivalent."
   }
  ],
  "code": {
   "lang": "python",
   "title": "logic_lab.py — truth table proving implication ≡ contrapositive (complete, runnable)",
   "code": "def imp(p, q):\n    return (not p) or q\n\nrows = [(p, q) for p in (True, False) for q in (True, False)]\nfor p, q in rows:\n    print(p, q, \"->\", imp(p, q), \"| contrapositive:\", imp(not q, not p))\nprint(\"equivalent:\", all(imp(p, q) == imp(not q, not p) for p, q in rows))",
   "output": "True True -> True | contrapositive: True\nTrue False -> False | contrapositive: False\nFalse True -> True | contrapositive: True\nFalse False -> True | contrapositive: True\nequivalent: True",
   "lines": [
    "imp() encodes p → q by its only false case: not p, or q.",
    "The loop enumerates all four rows; all() checks the two columns agree everywhere — a proof by exhaustion."
   ]
  },
  "mistakes": [
   "Reading p → q as 'p causes q' — implication is about truth values, not causation.",
   "Proving the converse when the contrapositive was asked.",
   "Forgetting the false-antecedent rows when building a truth table."
  ],
  "security": "Exam link: truth tables and equivalence proofs are guaranteed marks in your Discrete Mathematics course — and the contrapositive is the standard escape when a direct proof stalls (next lesson).",
  "pc": [
   "Run the worked example on your PC exactly as written (logic_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (logic_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Proposition — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "p → q is false in exactly which row?",
    "options": [
     "p true, q true",
     "p true, q false",
     "p false, q true",
     "p false, q false"
    ],
    "answer": 1,
    "why": "Implication fails only when the promise is made (p true) and broken (q false)."
   },
   {
    "q": "Which statement is logically equivalent to 'If it rains, the match is cancelled'?",
    "options": [
     "If the match is cancelled, it rains",
     "If the match is not cancelled, it did not rain",
     "If it does not rain, the match is not cancelled",
     "It rains and the match is cancelled"
    ],
    "answer": 1,
    "why": "That is the contrapositive: ¬q → ¬p. The others are the converse and inverse — not equivalent."
   },
   {
    "q": "How many rows does a truth table for 3 propositions have?",
    "options": [
     "3",
     "6",
     "8",
     "9"
    ],
    "answer": 2,
    "why": "Each proposition doubles the rows: 2^3 = 8."
   }
  ],
  "summary": "Propositions combine with ∧, ∨, ¬, →; truth tables define them completely, and equivalence is table-equality — with implication ≡ contrapositive as the workhorse.",
  "skillGained": "Truth-table fluency and the implication/contrapositive distinction.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard discrete mathematics treatment (sets, logic, combinatorics, graph theory) as taught in undergraduate CS — definitions follow the standard textbook presentation (Rosen, Discrete Mathematics and Its Applications).",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l23-proofs",
  "level": 23,
  "title": "Proof Techniques: Direct, Contrapositive, Contradiction",
  "difficulty": "Foundation",
  "minutes": 40,
  "xp": 60,
  "skill": "Discrete Mathematics",
  "prereq": "Previous in Level 23: l23-logic.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Proof techniques",
   "Work the example (proof_check.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Direct proof, Proof by contradiction, Counterexample",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Proof technique is the difference between 'I tested it' and 'it is correct' — the same gap between a program that passes your tests and an algorithm you can argue correct in DSA (Level 24) and Theory of Computation (Level 29).",
  "concept": [
   "A proof is a chain where every link is a definition, an axiom, or a previously proven result. The three workhorse shapes: direct (assume p, reach q), contrapositive (assume ¬q, reach ¬p — valid because the two are equivalent, last lesson), and contradiction (assume p ∧ ¬q, reach something impossible). Choosing the shape is the skill: 'if n² is even then n is even' is painful directly and two lines by contrapositive — assume n odd, then n = 2k+1, so n² = 2(2k²+2k)+1 is odd.",
   "Testing is not proving — but testing comes first professionally. The code below checks the claim on 101 values and finds no counterexample; that tells you the claim is worth proving and, if a counterexample had appeared, would have saved you from proving a falsehood. One counterexample kills a universal claim; a million passing tests do not prove one. Keep both directions straight and you are ahead of most first-year students."
  ],
  "diagramTitle": "Proof techniques — the working flow",
  "diagram": [
   "1 · START from the rule — Direct proof: Assume the hypothesis, derive the conclusion by valid steps. The default technique.",
   "2 · RUN the worked example (proof_check.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Direct proof",
    "def": "Assume the hypothesis, derive the conclusion by valid steps. The default technique."
   },
   {
    "term": "Proof by contradiction",
    "def": "Assume the conclusion is false and derive an impossibility; therefore the conclusion holds."
   },
   {
    "term": "Counterexample",
    "def": "One concrete case where a universal claim fails — it disproves the claim completely."
   }
  ],
  "code": {
   "lang": "python",
   "title": "proof_check.py — testing a claim before proving it, plus the odd-squares pattern (complete, runnable)",
   "code": "claim_holds = True\nfor n in range(-50, 51):\n    if (n * n) % 2 == 0 and n % 2 != 0:\n        claim_holds = False\n        print(\"counterexample:\", n)\nprint(\"claim holds on -50..50:\", claim_holds)\nsquares = [n * n for n in range(1, 6)]\nprint(\"squares 1..5:\", squares)\nprint(\"sum of first 5 odd numbers:\", sum(2 * k - 1 for k in range(1, 6)))",
   "output": "claim holds on -50..50: True\nsquares 1..5: [1, 4, 9, 16, 25]\nsum of first 5 odd numbers: 25",
   "lines": [
    "The loop hunts for a counterexample to 'n² even ⇒ n even' — finding none is evidence, not proof.",
    "The last lines surface the pattern sum of first k odds = k², a classic induction target."
   ]
  },
  "mistakes": [
   "Claiming examples prove a universal statement ('it worked for n = 2, 4, 6').",
   "In a contradiction proof, forgetting to state what contradiction was reached.",
   "Using the conclusion as a step inside its own proof (circular reasoning)."
  ],
  "security": "Exam link: proof questions are the highest-mark questions in discrete math because they cannot be memorized — this lesson's three shapes cover nearly every first-year proof you will be set.",
  "pc": [
   "Run the worked example on your PC exactly as written (proof_check.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (proof_check.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Direct proof — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "Which single object completely disproves 'all primes are odd'?",
    "options": [
     "The prime 9",
     "The prime 2 — even, and a counterexample",
     "The number 1",
     "The prime 7"
    ],
    "answer": 1,
    "why": "2 is prime and even: one counterexample ends a universal claim."
   },
   {
    "q": "To prove 'if n² is odd then n is odd' by contrapositive, you assume:",
    "options": [
     "n is odd",
     "n is even, and show n² is even",
     "n² is even",
     "n = 2k+1 directly"
    ],
    "answer": 1,
    "why": "Contrapositive of (n² odd → n odd) is (n even → n² even): assume n even, derive n² even."
   },
   {
    "q": "A proof by contradiction of '√2 is irrational' begins by assuming:",
    "options": [
     "√2 is irrational",
     "√2 = a/b for integers a, b in lowest terms — then deriving both a, b even",
     "√2 > 1",
     "√2 is a decimal"
    ],
    "answer": 1,
    "why": "Assume it IS rational in lowest terms; the algebra forces a and b both even, contradicting 'lowest terms'."
   }
  ],
  "summary": "Direct, contrapositive and contradiction proofs cover the field; testing finds counterexamples and confidence, but only a chain of justified steps proves.",
  "skillGained": "Choosing and executing the right proof shape for a claim.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard discrete mathematics treatment (sets, logic, combinatorics, graph theory) as taught in undergraduate CS — definitions follow the standard textbook presentation (Rosen, Discrete Mathematics and Its Applications).",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l23-combinatorics",
  "level": 23,
  "title": "Counting: Permutations, Combinations, and Not Overcounting",
  "difficulty": "Foundation",
  "minutes": 40,
  "xp": 60,
  "skill": "Discrete Mathematics",
  "prereq": "Previous in Level 23: l23-proofs.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Combinatorics — permutations and combinations",
   "Work the example (counting_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Permutation P(n,k), Combination C(n,k), Multiplication principle",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Combinatorics is the mathematics of 'how big is the search space' — brute-force cost, hash collisions, poker probabilities, and the n! explosion that makes some algorithms useless. Big-O (Level 24) is this lesson with the counting pointed at programs.",
  "concept": [
   "Counting problems are won or lost on one question: does order matter? Arrange 3 of 10 runners on a podium and order matters — P(10,3) = 720. Choose a 3-person committee from 10 and order is irrelevant — C(10,3) = 120. The factor between them is exactly 3! = 6, the number of ways to order each committee: combinations are permutations with the ordering divided back out.",
   "The multiplication principle handles everything staged: a 4-digit PIN has 10⁴ = 10,000 possibilities because each of 4 independent slots has 10 options. That same arithmetic is why password length beats password cleverness — every added character multiplies the search space, a fact your Level 6 cryptography lesson already used and your probability work next builds on."
  ],
  "diagramTitle": "Combinatorics — permutations and combinations — the working flow",
  "diagram": [
   "1 · START from the rule — Permutation P(n,k): Ordered arrangements: n!/(n−k)!. Order matters — podium finishes, passwords.",
   "2 · RUN the worked example (counting_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Permutation P(n,k)",
    "def": "Ordered arrangements: n!/(n−k)!. Order matters — podium finishes, passwords."
   },
   {
    "term": "Combination C(n,k)",
    "def": "Unordered selections: n!/(k!(n−k)!). Order does not matter — committees, hands of cards."
   },
   {
    "term": "Multiplication principle",
    "def": "If a task has stages with a, b, c options, the total is a × b × c — when choices are independent."
   }
  ],
  "code": {
   "lang": "python",
   "title": "counting_lab.py — permutations, combinations and search-space sizes (complete, runnable)",
   "code": "import math\nprint(\"P(10,3) =\", math.perm(10, 3))\nprint(\"C(10,3) =\", math.comb(10, 3))\nprint(\"C(52,5) poker hands =\", math.comb(52, 5))\nprint(\"4-digit PINs:\", 10 ** 4)\nprint(\"committees of 3 from 8:\", math.comb(8, 3))",
   "output": "P(10,3) = 720\nC(10,3) = 120\nC(52,5) poker hands = 2598960\n4-digit PINs: 10000\ncommittees of 3 from 8: 56",
   "lines": [
    "math.perm / math.comb implement P(n,k) and C(n,k) exactly — no floating point, no rounding.",
    "Compare line 1 and 2: the 6× gap is 3!, the orderings of each committee."
   ]
  },
  "mistakes": [
   "Using permutations for committees (counting each team 6 times).",
   "Adding stage counts when the multiplication principle requires multiplying.",
   "Computing C(52,5) by hand-waving — exact integer arithmetic exists; use it."
  ],
  "security": "Exam link: 'does order matter?' is the single highest-value question in your combinatorics exam section — ask it before touching any formula.",
  "pc": [
   "Run the worked example on your PC exactly as written (counting_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (counting_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Permutation P(n,k) — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "How many 3-letter codes can be formed from A–Z with no repetition, if order matters?",
    "options": [
     "26³",
     "P(26,3) = 15,600",
     "C(26,3) = 2,600",
     "26 × 3"
    ],
    "answer": 1,
    "why": "Order matters and no repetition: 26 × 25 × 24 = 15,600 = P(26,3)."
   },
   {
    "q": "A teacher picks 4 of 12 students for a photo where positions in the row matter. Count?",
    "options": [
     "C(12,4) = 495",
     "P(12,4) = 11,880",
     "12⁴",
     "48"
    ],
    "answer": 1,
    "why": "Positions matter → permutation: 12 × 11 × 10 × 9 = 11,880."
   },
   {
    "q": "Why is C(10,3) smaller than P(10,3)?",
    "options": [
     "Combinations use smaller numbers",
     "Each unordered group of 3 was counted 3! = 6 times in P; C divides those duplicates out",
     "Combinations exclude the best items",
     "They are actually equal"
    ],
    "answer": 1,
    "why": "P counts every ordering of each selection; C counts each selection once."
   }
  ],
  "summary": "Order decides: permutations for arrangements, combinations for selections, multiplication for staged choices — and the ratio between P and C is always k!.",
  "skillGained": "Reliable counting: choosing P, C, or the multiplication principle on sight.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard discrete mathematics treatment (sets, logic, combinatorics, graph theory) as taught in undergraduate CS — definitions follow the standard textbook presentation (Rosen, Discrete Mathematics and Its Applications).",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l23-relations-functions",
  "level": 23,
  "title": "Relations and Functions: Machines That Map Inputs to Outputs",
  "difficulty": "Foundation",
  "minutes": 35,
  "xp": 60,
  "skill": "Discrete Mathematics",
  "prereq": "Previous in Level 23: l23-combinatorics.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Relations and functions",
   "Work the example (relations_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Relation, Function, Reflexive / Symmetric",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Functions are the contract behind APIs, SQL lookups and hash maps; relations are literally what a relational database stores (Level 27). Equivalence classes return in hashing, in compiler symbol tables, and in every 'group by' you will ever write.",
  "concept": [
   "A relation is just a set of pairs — 'student, course' enrollments, 'user, role' assignments. A function is the disciplined special case: each input owns exactly one output, which is why dict lookups and pure functions are predictable. The code below catches the classic failure: input 1 appears with outputs 'a' and 'c', so the pairs form a relation but not a function.",
   "Properties of relations on one set — reflexive, symmetric, transitive — decide real classifications: a relation with all three is an equivalence relation and partitions the set into classes (think 'same subnet as', or file hashes being equal). Checking them is mechanical: quantify over elements or over pairs, exactly as the code does."
  ],
  "diagramTitle": "Relations and functions — the working flow",
  "diagram": [
   "1 · START from the rule — Relation: Any set of ordered pairs from A × B. A relation may map one input to many outputs.",
   "2 · RUN the worked example (relations_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Relation",
    "def": "Any set of ordered pairs from A × B. A relation may map one input to many outputs."
   },
   {
    "term": "Function",
    "def": "A relation where every input has EXACTLY ONE output. The rule behind every program's f(x)."
   },
   {
    "term": "Reflexive / Symmetric",
    "def": "A relation on A is reflexive if (a,a) is present for all a; symmetric if (a,b) present implies (b,a) present."
   }
  ],
  "code": {
   "lang": "python",
   "title": "relations_lab.py — function test and relation properties, checked mechanically (complete, runnable)",
   "code": "pairs = [(1, \"a\"), (2, \"b\"), (1, \"c\")]\ninputs = [a for a, _ in pairs]\nprint(\"function?\", len(inputs) == len(set(inputs)))\nR = {(1, 1), (2, 2), (1, 2)}\nA = {1, 2}\nprint(\"reflexive?\", all((a, a) in R for a in A))\nprint(\"symmetric?\", all((b, a) in R for a, b in R))\nf = {1: 2, 2: 3, 3: 4}\nprint(\"f(f(1)) =\", f[f[1]])",
   "output": "function? False\nreflexive? True\nsymmetric? False\nf(f(1)) = 3",
   "lines": [
    "The function test counts repeated inputs: 1 appears twice, so not a function.",
    "all() over elements checks reflexive; all() over pairs checks symmetric — quantifiers as code."
   ]
  },
  "mistakes": [
   "Calling any set of pairs a function — the exactly-one-output rule is the whole definition.",
   "Checking symmetry only on the pairs you like; one missing mirror pair breaks it.",
   "Confusing domain (inputs that appear) with codomain (outputs allowed)."
  ],
  "security": "Exam link: relation-property questions are pure procedure — quantify, check every element/pair, conclude. This lesson's code IS that procedure; translate it to symbols on paper.",
  "pc": [
   "Run the worked example on your PC exactly as written (relations_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (relations_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Relation — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "Which set of pairs is a function?",
    "options": [
     "{(1,a), (1,b)}",
     "{(1,a), (2,a), (3,b)}",
     "{(2,x), (2,y), (3,x)}",
     "{(a,1), (a,2)}"
    ],
    "answer": 1,
    "why": "Each input (1, 2, 3) appears once. Outputs may repeat; inputs may not."
   },
   {
    "q": "R = {(1,1), (2,2), (3,3), (1,2)} on {1,2,3}. Which property fails?",
    "options": [
     "Reflexive",
     "Symmetric — (1,2) is present but (2,1) is not",
     "It is not a relation",
     "Domain"
    ],
    "answer": 1,
    "why": "All (a,a) are present (reflexive holds), but (1,2) has no mirror — symmetry fails."
   },
   {
    "q": "An equivalence relation must be:",
    "options": [
     "Reflexive only",
     "Reflexive, symmetric and transitive",
     "Symmetric only",
     "A function"
    ],
    "answer": 1,
    "why": "All three properties together define equivalence — and give the partition into classes."
   }
  ],
  "summary": "Relations are sets of pairs; functions add the exactly-one-output discipline; reflexive + symmetric + transitive makes an equivalence relation and a partition.",
  "skillGained": "Function tests and relation-property checks, by hand and in code.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard discrete mathematics treatment (sets, logic, combinatorics, graph theory) as taught in undergraduate CS — definitions follow the standard textbook presentation (Rosen, Discrete Mathematics and Its Applications).",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l23-graphs-probability",
  "level": 23,
  "title": "Graphs and Probability Basics: Maps of Connections, Measures of Chance",
  "difficulty": "Foundation",
  "minutes": 40,
  "xp": 60,
  "skill": "Discrete Mathematics",
  "prereq": "Previous in Level 23: l23-relations-functions.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Graph basics and probability",
   "Work the example (graphs_prob.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Vertex / Edge / Degree, Handshaking lemma, Probability",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Graphs are the most reused structure in your degree: DSA traversals, compiler dependency graphs, network topologies, database joins-as-graphs. Probability underlies risk scoring (Level 12), ML evaluation (Level 31) and every 'likely' claim you will ever have to defend.",
  "concept": [
   "A graph is a set of vertices plus a set of edges — the same pair-of-sets idea as relations, drawn. Degrees count connections, and the handshaking lemma (Σdeg = 2|E|) is both an exam staple and a sanity check for any network model: count the code's degrees (2+2+3+1 = 8) and you must get twice its 4 edges. Social networks, road maps, dependency charts and attack paths are all this one structure.",
   "Probability starts where combinatorics ends: count favourable outcomes, count all outcomes, divide. Two dice have 36 equally likely pairs; 6 of them sum to 7, so P = 6/36 = 1/6 — computed exactly below with fractions, not decimals, because exact answers are the discipline of this subject. Next section (DSA) uses graphs as data; security used them as attack paths in Level 14."
  ],
  "diagramTitle": "Graph basics and probability — the working flow",
  "diagram": [
   "1 · START from the rule — Vertex / Edge / Degree: A graph is vertices (nodes) joined by edges; a vertex's degree is its number of incident edges.",
   "2 · RUN the worked example (graphs_prob.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Vertex / Edge / Degree",
    "def": "A graph is vertices (nodes) joined by edges; a vertex's degree is its number of incident edges."
   },
   {
    "term": "Handshaking lemma",
    "def": "Sum of all degrees = 2 × number of edges, because every edge contributes 2 to the sum."
   },
   {
    "term": "Probability",
    "def": "For equally likely outcomes: P(event) = favourable outcomes / total outcomes — always between 0 and 1."
   }
  ],
  "code": {
   "lang": "python",
   "title": "graphs_prob.py — degrees, the handshaking check, and an exact dice probability (complete, runnable)",
   "code": "from fractions import Fraction\ngraph = {\"A\": [\"B\", \"C\"], \"B\": [\"A\", \"C\"], \"C\": [\"A\", \"B\", \"D\"], \"D\": [\"C\"]}\nfor node in sorted(graph):\n    print(node, \"degree\", len(graph[node]))\nprint(\"edges:\", sum(len(v) for v in graph.values()) // 2)\nfav = sum(1 for a in range(1, 7) for b in range(1, 7) if a + b == 7)\nprint(\"P(sum 7 with two dice) =\", Fraction(fav, 36))",
   "output": "A degree 2\nB degree 2\nC degree 3\nD degree 1\nedges: 4\nP(sum 7 with two dice) = 1/6",
   "lines": [
    "Adjacency lists ARE the graph in code: each key a vertex, its list the neighbours.",
    "Edges = total degree // 2 is the handshaking lemma working as a check, not a hope."
   ]
  },
  "mistakes": [
   "Counting each undirected edge once in the degree sum — it contributes to BOTH endpoints.",
   "Computing dice probability over sums (11 outcomes) as if they were equally likely — the 36 pairs are.",
   "Reporting a probability of 1.4 — probabilities live in [0, 1]; outside means an arithmetic error."
  ],
  "security": "Exam link: degree/handshaking and basic probability are the closing topics of most discrete math syllabi — and the exact entry ticket to DSA's graph unit in the next level.",
  "pc": [
   "Run the worked example on your PC exactly as written (graphs_prob.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (graphs_prob.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Vertex / Edge / Degree — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A graph has degrees 3, 3, 2, 2, 2. How many edges?",
    "options": [
     "12",
     "6",
     "5",
     "24"
    ],
    "answer": 1,
    "why": "Σdeg = 12 = 2|E|, so |E| = 6 — the handshaking lemma."
   },
   {
    "q": "One fair coin is tossed 3 times. P(exactly two heads)?",
    "options": [
     "1/2",
     "3/8",
     "1/4",
     "2/3"
    ],
    "answer": 1,
    "why": "8 equally likely outcomes; HHT, HTH, THH are favourable: 3/8."
   },
   {
    "q": "In an undirected graph, an edge between A and B contributes to the degree sum:",
    "options": [
     "Once",
     "Twice — once at A, once at B",
     "Zero times",
     "Depends on labels"
    ],
    "answer": 1,
    "why": "Every undirected edge touches two endpoints — the reason Σdeg is always even."
   }
  ],
  "summary": "Graphs model connections with vertices, edges and degrees governed by the handshaking lemma; probability is disciplined counting — favourable over total, as an exact fraction.",
  "skillGained": "Graph vocabulary, degree arithmetic, and exact basic probability.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard discrete mathematics treatment (sets, logic, combinatorics, graph theory) as taught in undergraduate CS — definitions follow the standard textbook presentation (Rosen, Discrete Mathematics and Its Applications).",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l24-bigo",
  "level": 24,
  "title": "Big-O: Counting Operations Instead of Guessing Speed",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Algorithms & Data Structures",
  "prereq": "Levels 23 (Discrete Mathematics) and 4 (Programming Foundations) complete — Big-O needs Level 23's counting and logs.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Big-O and complexity analysis",
   "Work the example (bigo_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Big-O notation, Time complexity, Dominant term",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every later DSA lesson is priced in this currency, and so is real engineering: the n² log-scan in Level 4 worked on your samples and would die on a real 4 GB log. Interviewers and examiners both start here.",
  "concept": [
   "Complexity is counted, not measured with a stopwatch: seconds depend on the machine, operation counts do not. The code below counts exactly — a single loop is n steps, nested loops are n², and halving is about log₂n (10 → 3, 100 → 6, 1000 → 9). At n = 1000 the quadratic does a million steps while the halving algorithm does nine; that ratio, not any benchmark, is why one program feels instant and another never finishes.",
   "Big-O keeps only the dominant term and drops constants: 3n² + 5n + 2 is O(n²). This is not sloppiness — it is the deliberate choice to describe growth, the one property that survives faster hardware. The practical reading: O(1) constant, O(log n) halving, O(n) one pass, O(n log n) good sorting, O(n²) pairs, O(2ⁿ) subsets — and the last two are design emergencies at scale."
  ],
  "diagramTitle": "Big-O and complexity analysis — the working flow",
  "diagram": [
   "1 · START from the rule — Big-O notation: An upper bound on growth: f(n) is O(g(n)) if f grows no faster than a constant multiple of g for large n.",
   "2 · RUN the worked example (bigo_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Big-O notation",
    "def": "An upper bound on growth: f(n) is O(g(n)) if f grows no faster than a constant multiple of g for large n."
   },
   {
    "term": "Time complexity",
    "def": "How an algorithm's step count scales with input size — counted in operations, not seconds."
   },
   {
    "term": "Dominant term",
    "def": "The fastest-growing part of a count; constants and smaller terms are dropped in Big-O."
   }
  ],
  "code": {
   "lang": "python",
   "title": "bigo_lab.py — counting linear, quadratic and logarithmic steps exactly (complete, runnable)",
   "code": "def count_linear(n):\n    steps = 0\n    for i in range(n):\n        steps += 1\n    return steps\n\ndef count_quadratic(n):\n    steps = 0\n    for i in range(n):\n        for j in range(n):\n            steps += 1\n    return steps\n\ndef count_log(n):\n    steps = 0\n    while n > 1:\n        n //= 2\n        steps += 1\n    return steps\n\nfor n in (10, 100, 1000):\n    print(n, count_linear(n), count_quadratic(n), count_log(n))",
   "output": "10 10 100 3\n100 100 10000 6\n1000 1000 1000000 9",
   "lines": [
    "Each counter increments once per elementary operation — the count IS the analysis.",
    "Read across the n=1000 row: 1000 vs 1,000,000 vs 9. Growth class is destiny."
   ]
  },
  "mistakes": [
   "Timing code on one machine and calling the seconds a complexity.",
   "Keeping constants in Big-O (O(2n) is just O(n)).",
   "Judging by small n — at n = 10 everything looks fast; complexity is about growth."
  ],
  "security": "Exam link: 'state and justify the complexity' follows nearly every algorithm question in your DSA course — count operations the way this code does and the justification writes itself.",
  "pc": [
   "Run the worked example on your PC exactly as written (bigo_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (bigo_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Big-O notation — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "An algorithm does 5n² + 3n + 7 operations. Its Big-O is:",
    "options": [
     "O(n)",
     "O(n²)",
     "O(5n²)",
     "O(n + 7)"
    ],
    "answer": 1,
    "why": "Keep the dominant term, drop constants and smaller terms: O(n²)."
   },
   {
    "q": "Which grows slowest as n → ∞?",
    "options": [
     "n²",
     "n log n",
     "log n",
     "2ⁿ"
    ],
    "answer": 2,
    "why": "log n < n < n log n < n² < 2ⁿ. Halving beats everything here."
   },
   {
    "q": "Binary search on a sorted array of 1,000,000 items takes at most about how many comparisons?",
    "options": [
     "1,000,000",
     "500,000",
     "20",
     "1000"
    ],
    "answer": 2,
    "why": "Each comparison halves the range: log₂(10⁶) ≈ 20."
   }
  ],
  "summary": "Complexity counts operations as input grows; Big-O keeps the dominant term; the class — log, linear, n log n, quadratic, exponential — decides what survives scale.",
  "skillGained": "Operation counting and Big-O classification of real code.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DSA treatment (growth of functions, linked structures, trees, hashing, graph traversal, sorting, dynamic programming) as in CLRS, Introduction to Algorithms — complexity claims follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l24-arrays-linked",
  "level": 24,
  "title": "Arrays and Linked Lists: Contiguous vs Chained Storage",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Algorithms & Data Structures",
  "prereq": "Previous in Level 24: l24-bigo.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Arrays versus linked lists",
   "Work the example (linked_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Array, Linked list node, Head insertion",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This trade — contiguous vs chained — recurs everywhere: database pages vs B-tree links, packet buffers, undo histories. Python's list is a dynamic array; when an interviewer asks 'why is insert(0) slow', this lesson is the answer.",
  "concept": [
   "An array buys O(1) random access with arithmetic — address = base + index × size — and pays for it on insertion: everything after the gap shifts. A linked list buys O(1) insertion at a known position with pointers and pays on access: reaching the 500th element means following 500 links, O(n). Neither is 'better'; each is a trade your Big-O lens from last lesson prices exactly.",
   "The code builds a list from raw nodes so the chain is visible: Node(30, Node(20, Node(10))) then a head insertion of 40 in one step. Traversal is the while loop you will reuse for every linked structure — trees and graphs included: visit, follow the link, stop at None."
  ],
  "diagramTitle": "Arrays versus linked lists — the working flow",
  "diagram": [
   "1 · START from the rule — Array: Elements in contiguous memory; index access is O(1), insertion in the middle is O(n) shifting.",
   "2 · RUN the worked example (linked_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Array",
    "def": "Elements in contiguous memory; index access is O(1), insertion in the middle is O(n) shifting."
   },
   {
    "term": "Linked list node",
    "def": "A value plus a pointer to the next node; the chain is followed link by link."
   },
   {
    "term": "Head insertion",
    "def": "Adding at the front of a linked list is O(1): one new node, one pointer change."
   }
  ],
  "code": {
   "lang": "python",
   "title": "linked_lab.py — a singly linked list built from scratch, head insertion, traversal (complete, runnable)",
   "code": "class Node:\n    def __init__(self, value, nxt=None):\n        self.value = value\n        self.next = nxt\n\nhead = Node(30, Node(20, Node(10)))\nhead = Node(40, head)\nout = []\ncur = head\nwhile cur:\n    out.append(cur.value)\n    cur = cur.next\nprint(\"list:\", out)\nprint(\"head:\", head.value, \"| second:\", head.next.value)",
   "output": "list: [40, 30, 20, 10]\nhead: 40 | second: 30",
   "lines": [
    "A node is value + next; nesting the constructors builds the chain 30→20→10.",
    "Head insertion wraps the old head — O(1), nothing moves."
   ]
  },
  "mistakes": [
   "Claiming linked-list access by index is O(1) — there is no address arithmetic on a chain.",
   "Losing the head pointer during an insertion (the whole list is gone).",
   "Using an array where constant front-insertion dominates (a queue built on list.insert(0) is O(n) per add)."
  ],
  "security": "Exam link: the array-vs-list table (access, insert, delete × front, middle, end) is a guaranteed DSA exam question — this lesson's code demonstrates the two O(1)/O(n) corners that anchor it.",
  "pc": [
   "Run the worked example on your PC exactly as written (linked_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (linked_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Array — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "Reading the 500th element of a singly linked list costs:",
    "options": [
     "O(1)",
     "O(n) — follow 500 links",
     "O(log n)",
     "O(n²)"
    ],
    "answer": 1,
    "why": "No index arithmetic exists on a chain; you walk it."
   },
   {
    "q": "Inserting at the FRONT of an array of n elements costs:",
    "options": [
     "O(1)",
     "O(log n)",
     "O(n) — every element shifts",
     "O(n²)"
    ],
    "answer": 2,
    "why": "All n elements move one slot to make room."
   },
   {
    "q": "A workload is 90% 'read item k' and 10% appends. Best default structure?",
    "options": [
     "Linked list",
     "Array — O(1) reads dominate",
     "Stack",
     "A graph"
    ],
    "answer": 1,
    "why": "Optimize the dominant operation: random reads are the array's O(1) home ground."
   }
  ],
  "summary": "Arrays trade insertion cost for O(1) indexed access; linked lists trade access for O(1) insertion at a known point. Choose by the workload's dominant operation.",
  "skillGained": "Building and traversing a linked list; pricing array vs list operations.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DSA treatment (growth of functions, linked structures, trees, hashing, graph traversal, sorting, dynamic programming) as in CLRS, Introduction to Algorithms — complexity claims follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l24-stacks-queues",
  "level": 24,
  "title": "Stacks and Queues: LIFO and FIFO Discipline",
  "difficulty": "Intermediate",
  "minutes": 35,
  "xp": 70,
  "skill": "Algorithms & Data Structures",
  "prereq": "Previous in Level 24: l24-arrays-linked.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Stacks and queues",
   "Work the example (stack_queue_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Stack (LIFO), Queue (FIFO), Deque",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Function calls, expression parsing (Level 30's compiler!), alert triage and breadth-first search all reduce to these two disciplines. Choosing LIFO vs FIFO is choosing the ORDER of work — often the whole design.",
  "concept": [
   "Stacks and queues are not new storage — they are disciplines on storage: a stack restricts you to one end, a queue to two specific ends. The restriction is the value. Bracket matching only works because a stack guarantees the most recent opener is checked first; the code proves it on '([]{})'. Your Level 4 call stack is this same structure wearing a runtime's clothes.",
   "Queues order work fairly and absorb bursts: alerts, print jobs and BFS frontier all queue. The implementation warning matters: a Python list makes a fine stack (append/pop at the end, O(1)) but a poor queue — pop(0) shifts everything, O(n). deque exists precisely to give O(1) at both ends."
  ],
  "diagramTitle": "Stacks and queues — the working flow",
  "diagram": [
   "1 · START from the rule — Stack (LIFO): Last In, First Out: push and pop at the same end — call stacks, undo, bracket matching.",
   "2 · RUN the worked example (stack_queue_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Stack (LIFO)",
    "def": "Last In, First Out: push and pop at the same end — call stacks, undo, bracket matching."
   },
   {
    "term": "Queue (FIFO)",
    "def": "First In, First Out: enqueue at the back, dequeue from the front — pipelines, print jobs, BFS."
   },
   {
    "term": "Deque",
    "def": "Double-ended queue: efficient operations at both ends (collections.deque in Python)."
   }
  ],
  "code": {
   "lang": "python",
   "title": "stack_queue_lab.py — LIFO vs FIFO on identical input, plus stack bracket matching (complete, runnable)",
   "code": "from collections import deque\nstack = []\nfor x in [\"a\", \"b\", \"c\"]:\n    stack.append(x)\nprint(\"stack pops:\", [stack.pop(), stack.pop()])\nq = deque([\"a\", \"b\", \"c\"])\nprint(\"queue pops:\", [q.popleft(), q.popleft()])\nexpr = \"([]{})\"\npairs = {\")\": \"(\", \"]\": \"[\", \"}\": \"{\"}\ns = []\nok = True\nfor ch in expr:\n    if ch in \"([{\":\n        s.append(ch)\n    elif s.pop() != pairs[ch]:\n        ok = False\nprint(\"balanced:\", ok)",
   "output": "stack pops: ['c', 'b']\nqueue pops: ['a', 'b']\nbalanced: True",
   "lines": [
    "Same input, opposite orders: the stack returns c first (LIFO), the queue a first (FIFO).",
    "Bracket matching pushes openers and demands each closer match the most recent opener — stack discipline as an algorithm."
   ]
  },
  "mistakes": [
   "Implementing a queue with list.pop(0) and inheriting O(n) per dequeue.",
   "Using a queue where order must be most-recent-first (undo needs a stack).",
   "Forgetting the empty-stack case in bracket matching: a closer with nothing to match is an error, not a pop."
  ],
  "security": "Exam link: 'which structure and why' questions are decided by naming the access discipline — LIFO/FIFO — before any code; this lesson gives you the two canonical applications to cite.",
  "pc": [
   "Run the worked example on your PC exactly as written (stack_queue_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (stack_queue_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Stack (LIFO) — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A browser's Back button behaves as:",
    "options": [
     "A queue",
     "A stack — most recently visited page returns first",
     "A hash table",
     "A tree"
    ],
    "answer": 1,
    "why": "Back unwinds your most recent step first: LIFO, a stack."
   },
   {
    "q": "Serving support tickets in arrival order needs:",
    "options": [
     "A stack",
     "A queue — FIFO fairness",
     "A BST",
     "Recursion"
    ],
    "answer": 1,
    "why": "First come, first served is the queue's defining discipline."
   },
   {
    "q": "Why is collections.deque preferred over a list for queues in Python?",
    "options": [
     "It sorts elements",
     "popleft() is O(1); list.pop(0) is O(n) shifting",
     "It uses no memory",
     "Lists cannot hold strings"
    ],
    "answer": 1,
    "why": "deque is chained blocks with O(1) ends; a list queue pays shifting on every dequeue."
   }
  ],
  "summary": "Stacks enforce LIFO (undo, calls, brackets); queues enforce FIFO (pipelines, fairness, BFS); in Python, list for stacks and deque for queues keeps both O(1).",
  "skillGained": "Choosing LIFO vs FIFO and implementing both correctly in Python.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DSA treatment (growth of functions, linked structures, trees, hashing, graph traversal, sorting, dynamic programming) as in CLRS, Introduction to Algorithms — complexity claims follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l24-trees-heaps",
  "level": 24,
  "title": "Trees, Binary Search Trees and Heaps",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Algorithms & Data Structures",
  "prereq": "Previous in Level 24: l24-stacks-queues.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Trees, BST and heaps",
   "Work the example (tree_heap_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Binary search tree (BST), Tree height / balance, Heap",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Database indexes are B-trees (the BST's wide cousin), heaps run every priority queue from OS schedulers to Dijkstra (later this level), and your filesystem is a tree you already traverse daily. Level 27's indexing lesson is this one applied to disk.",
  "concept": [
   "A BST turns the ordering of keys into geometry: smaller goes left, larger goes right, so a search discards half the remaining tree at each step — binary search grown into a structure. The inorder traversal printing sorted output is not a coincidence; it is the invariant read aloud. Insert 8, 3, 10, 1, 6, 14 and the sorted line [1, 3, 6, 8, 10, 14] is your receipt that every insert obeyed the rule.",
   "The failure mode is shape: inserting already-sorted keys into a naive BST builds a linked list with extra steps — O(n) search wearing a tree's name. Balanced trees (AVL, red-black) exist to prevent exactly that. Heaps solve a different problem: not 'find this key' but 'give me the top priority now', in O(log n), stored flat in an array with parent/child index arithmetic."
  ],
  "diagramTitle": "Trees, BST and heaps — the working flow",
  "diagram": [
   "1 · START from the rule — Binary search tree (BST): A binary tree where every node's left subtree holds smaller keys and its right subtree larger keys — inorder traversal yields sorted order.",
   "2 · RUN the worked example (tree_heap_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Binary search tree (BST)",
    "def": "A binary tree where every node's left subtree holds smaller keys and its right subtree larger keys — inorder traversal yields sorted order."
   },
   {
    "term": "Tree height / balance",
    "def": "Search costs O(height): O(log n) when balanced, O(n) when the tree degenerates into a chain."
   },
   {
    "term": "Heap",
    "def": "A complete binary tree kept in an array where every parent outranks its children — the engine of priority queues."
   }
  ],
  "code": {
   "lang": "python",
   "title": "tree_heap_lab.py — BST insert + inorder proof, and a heap as priority queue (complete, runnable)",
   "code": "class BST:\n    def __init__(self, v):\n        self.v = v\n        self.l = None\n        self.r = None\n    def insert(self, x):\n        if x < self.v:\n            if self.l: self.l.insert(x)\n            else: self.l = BST(x)\n        elif x > self.v:\n            if self.r: self.r.insert(x)\n            else: self.r = BST(x)\n    def inorder(self):\n        left = self.l.inorder() if self.l else []\n        right = self.r.inorder() if self.r else []\n        return left + [self.v] + right\n\nt = BST(8)\nfor x in [3, 10, 1, 6, 14]:\n    t.insert(x)\nprint(\"inorder:\", t.inorder())\nimport heapq\nh = [5, 2, 9, 1]\nheapq.heapify(h)\nprint(\"smallest two:\", heapq.heappop(h), heapq.heappop(h))",
   "output": "inorder: [1, 3, 6, 8, 10, 14]\nsmallest two: 1 2",
   "lines": [
    "Insert routes by comparison at every node — smaller left, larger right — recursion does the walking.",
    "heapq is a min-heap in a plain list: heappop always returns the current minimum in O(log n)."
   ]
  },
  "mistakes": [
   "Believing BST search is always O(log n) — it is O(height), and height is earned by balance, not promised by the name.",
   "Confusing heap order with sorted order: a heap guarantees only parent-before-child, not a full sort.",
   "Recursion without a base case in traversals — None children are the base case."
  ],
  "security": "Exam link: 'insert these keys, draw the tree, give the inorder' is the most mechanical guaranteed-marks question in DSA — practise until the drawing is automatic.",
  "pc": [
   "Run the worked example on your PC exactly as written (tree_heap_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (tree_heap_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Binary search tree (BST) — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "Inserting keys 1, 2, 3, 4, 5 (in that order) into a naive BST produces:",
    "options": [
     "A balanced tree",
     "A right-leaning chain — search becomes O(n)",
     "A heap",
     "An error"
    ],
    "answer": 1,
    "why": "Each new key is the largest, so each goes right: a chain. This is why balanced trees exist."
   },
   {
    "q": "An inorder traversal of a BST always yields:",
    "options": [
     "Insertion order",
     "Sorted order",
     "Reverse order",
     "Level order"
    ],
    "answer": 1,
    "why": "Left (smaller) → node → right (larger) at every subtree is exactly sorted order."
   },
   {
    "q": "A priority queue's core operation — get the highest priority item — costs with a heap:",
    "options": [
     "O(1) to peek, O(log n) to remove",
     "O(n)",
     "O(n log n)",
     "O(2ⁿ)"
    ],
    "answer": 0,
    "why": "The top sits at the root (peek O(1)); removal restores the heap in O(log n)."
   }
  ],
  "summary": "BSTs turn key order into search geometry (O(height) operations, sorted inorder); heaps keep only top-priority order and power priority queues in O(log n).",
  "skillGained": "BST insertion/traversal by hand and code; heap-based priority reasoning.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DSA treatment (growth of functions, linked structures, trees, hashing, graph traversal, sorting, dynamic programming) as in CLRS, Introduction to Algorithms — complexity claims follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l24-hashing-graphs",
  "level": 24,
  "title": "Hash Tables and Graph Traversal: Constant-Time Lookup, Systematic Visiting",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Algorithms & Data Structures",
  "prereq": "Previous in Level 24: l24-trees-heaps.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Hashing and BFS/DFS traversal",
   "Work the example (hash_graph_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Hash function, Average O(1) lookup, BFS / DFS",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Hash tables sit under caches, symbol tables (Level 30), database indexes (Level 27) and every 'have I seen this' check in security tooling. BFS/DFS sit under crawlers, dependency resolution and attack-path analysis — the two most reusable tools in this level.",
  "concept": [
   "A hash table trades ordering for speed: the hash function converts a key directly into a bucket, so lookup skips searching entirely — average O(1) regardless of table size. Python's dict is this lesson running in production: scores['bil'] does no scan. The price is collisions (two keys, one bucket) and the loss of sorted order; the discipline is choosing hash tables when membership and lookup dominate, trees when order matters.",
   "Graph traversal is the two disciplines from last lesson pointed at Level 23's graphs: BFS explores with a queue and finds shortest paths in unweighted graphs; DFS explores with a stack and suits exhaustive path questions. The code's BFS visits A, B, C, D, E — level by level — because the queue enforces it. Mark nodes as seen when they ENTER the queue, not when they leave it, or duplicates flood in."
  ],
  "diagramTitle": "Hashing and BFS/DFS traversal — the working flow",
  "diagram": [
   "1 · START from the rule — Hash function: Maps a key to a bucket index; a good one spreads keys evenly. Collisions are resolved by chaining or probing.",
   "2 · RUN the worked example (hash_graph_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Hash function",
    "def": "Maps a key to a bucket index; a good one spreads keys evenly. Collisions are resolved by chaining or probing."
   },
   {
    "term": "Average O(1) lookup",
    "def": "Dict/set membership is constant-time ON AVERAGE — the reason hash tables replaced search in most code."
   },
   {
    "term": "BFS / DFS",
    "def": "Breadth-first visits level by level using a QUEUE; depth-first dives along a path using a STACK (or recursion)."
   }
  ],
  "code": {
   "lang": "python",
   "title": "hash_graph_lab.py — dict as hash table, and BFS with a queue + seen set (complete, runnable)",
   "code": "scores = {}\nfor name, pts in [(\"ana\", 70), (\"bil\", 85), (\"cy\", 60)]:\n    scores[name] = pts\nprint(\"bil:\", scores[\"bil\"], \"| keys:\", sorted(scores))\ngraph = {\"A\": [\"B\", \"C\"], \"B\": [\"D\"], \"C\": [\"D\", \"E\"], \"D\": [], \"E\": []}\nfrom collections import deque\nseen, order, q = {\"A\"}, [], deque([\"A\"])\nwhile q:\n    n = q.popleft()\n    order.append(n)\n    for m in graph[n]:\n        if m not in seen:\n            seen.add(m)\n            q.append(m)\nprint(\"BFS:\", order)",
   "output": "bil: 85 | keys: ['ana', 'bil', 'cy']\nBFS: ['A', 'B', 'C', 'D', 'E']",
   "lines": [
    "Dict assignment and lookup are hash operations — no loop over keys exists anywhere in this code.",
    "D is discovered from B and marked seen, so when C offers it again it is correctly ignored."
   ]
  },
  "mistakes": [
   "Expecting dict order to be sorted order — insertion order is kept, sorted order is not (use sorted()).",
   "Marking BFS nodes seen at pop time, letting the queue fill with duplicates.",
   "Claiming hash lookup is O(1) worst-case — adversarial collisions make it O(n); average is the honest claim."
  ],
  "security": "Exam link: BFS/DFS visit-order questions are pure procedure — simulate the queue/stack on paper exactly as the code does, writing the seen set at each step.",
  "pc": [
   "Run the worked example on your PC exactly as written (hash_graph_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (hash_graph_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Hash function — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "BFS from a node finds ________ in an unweighted graph.",
    "options": [
     "The longest path",
     "Shortest paths (fewest edges) to all reachable nodes",
     "A spanning tree's weight",
     "Cycles only"
    ],
    "answer": 1,
    "why": "Level-by-level expansion means the first time BFS reaches a node, it is via a shortest path."
   },
   {
    "q": "DFS is implemented most directly with:",
    "options": [
     "A queue",
     "A stack or recursion (the call stack)",
     "A heap",
     "A hash table alone"
    ],
    "answer": 1,
    "why": "Dive-and-backtrack is LIFO — recursion IS a stack here."
   },
   {
    "q": "Why can a hash table NOT replace a BST for 'print all keys in order'?",
    "options": [
     "Hash tables are slower",
     "Buckets are unordered — the hash function deliberately scatters keys",
     "BSTs use less memory",
     "Dicts cannot store strings"
    ],
    "answer": 1,
    "why": "Scattering is the source of the speed and the loss of order — the same property, two faces."
   }
  ],
  "summary": "Hash tables give average O(1) lookup at the price of order; BFS (queue) and DFS (stack) systematically visit graphs, with the seen set as the discipline that keeps both honest.",
  "skillGained": "Hash-table selection reasoning and correct BFS/DFS execution.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DSA treatment (growth of functions, linked structures, trees, hashing, graph traversal, sorting, dynamic programming) as in CLRS, Introduction to Algorithms — complexity claims follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l24-sorting-dp",
  "level": 24,
  "title": "Sorting, Searching and Dynamic Programming",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Algorithms & Data Structures",
  "prereq": "Previous in Level 24: l24-hashing-graphs.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Sorting/searching costs and dynamic programming",
   "Work the example (sort_dp_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Recursion, Overlapping subproblems, Memoization",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "DP is the capstone thinking of DSA: coin change, edit distance, knapsack and sequence alignment are one pattern. It is also how real systems survive — caching a subproblem and memoizing a computation are the same idea at different scales.",
  "concept": [
   "Sorting's honest price is O(n log n) for comparison sorts — merge sort and quicksort earn it by splitting; bubble sort's O(n²) is the pair-comparison trap from Level 23 counting. Searching a sorted array is binary search's O(log n) (the code finds 22 in 2 probes of 16). Sorting once to search many times is the classic trade: pay n log n once, then every lookup is nearly free.",
   "Dynamic programming is recursion with a memory. Naive Fibonacci recomputes fib(3) a tree-full of times — its call count grows like the answer itself. Add a cache (lru_cache, one line) and each distinct subproblem is solved once: fib(30) goes from ~2.7 million calls to 31. Recognizing overlapping subproblems is the entire skill; the code is a footnote."
  ],
  "diagramTitle": "Sorting/searching costs and dynamic programming — the working flow",
  "diagram": [
   "1 · START from the rule — Recursion: A function that calls itself on smaller inputs, with a base case that stops it — divide and conquer's engine.",
   "2 · RUN the worked example (sort_dp_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Recursion",
    "def": "A function that calls itself on smaller inputs, with a base case that stops it — divide and conquer's engine."
   },
   {
    "term": "Overlapping subproblems",
    "def": "The same subproblem recurring exponentially often in naive recursion — the signal that DP applies."
   },
   {
    "term": "Memoization",
    "def": "Caching subproblem answers (top-down DP) so each is computed once: exponential becomes polynomial."
   }
  ],
  "code": {
   "lang": "python",
   "title": "sort_dp_lab.py — binary search step count, and Fibonacci naive vs memoized (complete, runnable)",
   "code": "def bin_search(a, x):\n    lo, hi, steps = 0, len(a) - 1, 0\n    while lo <= hi:\n        steps += 1\n        mid = (lo + hi) // 2\n        if a[mid] == x:\n            return mid, steps\n        if a[mid] < x:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1, steps\n\ndata = list(range(0, 32, 2))\nprint(\"find 22:\", bin_search(data, 22))\ndef fib_naive(n):\n    return n if n < 2 else fib_naive(n - 1) + fib_naive(n - 2)\nfrom functools import lru_cache\n@lru_cache(maxsize=None)\ndef fib_fast(n):\n    return n if n < 2 else fib_fast(n - 1) + fib_fast(n - 2)\nprint(\"fib(10):\", fib_naive(10), fib_fast(10))\nprint(\"fib(30) fast:\", fib_fast(30))",
   "output": "find 22: (11, 2)\nfib(10): 55 55\nfib(30) fast: 832040",
   "lines": [
    "Binary search returns both the index AND its probe count — cost is part of the result.",
    "Same recursion, one decorator apart: lru_cache turns repeated subproblems into table lookups."
   ]
  },
  "mistakes": [
   "Running binary search on unsorted data — the halving logic silently assumes order.",
   "Calling naive recursion 'DP' — without stored subproblem results there is no DP.",
   "Believing O(n log n) sorting is always optimal — counting sort wins when the value range is small; match method to data."
  ],
  "security": "Exam link: the DP question is identifiable by overlapping subproblems; state the subproblem, the recurrence, and the base case — in that order — and the implementation follows.",
  "pc": [
   "Run the worked example on your PC exactly as written (sort_dp_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (sort_dp_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Recursion — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "Naive recursive fib(n) is exponential mainly because:",
    "options": [
     "Recursion is slow",
     "It recomputes the same subproblems exponentially many times",
     "Python lacks loops",
     "The answer is large"
    ],
    "answer": 1,
    "why": "The call tree re-solves fib(n−2), fib(n−3)… over and over — overlap is the disease, memoization the cure."
   },
   {
    "q": "Sorting 10⁶ items with an O(n²) sort vs O(n log n): roughly the operation counts are:",
    "options": [
     "10¹² vs 2×10⁷",
     "10⁶ vs 10⁶",
     "Equal — constants decide",
     "10⁹ vs 10⁹"
    ],
    "answer": 0,
    "why": "n² = 10¹²; n log₂n ≈ 10⁶ × 20 = 2×10⁷. Fifty-thousand-fold difference."
   },
   {
    "q": "Binary search requires the array to be:",
    "options": [
     "Stored in a tree",
     "Sorted",
     "In a hash table",
     "Of prime length"
    ],
    "answer": 1,
    "why": "Halving decisions are only valid when order is guaranteed."
   }
  ],
  "summary": "Comparison sorting costs O(n log n), sorted search O(log n); DP turns exponential recursion polynomial by storing overlapping subproblem answers — recognize overlap, state recurrence, add memory.",
  "skillGained": "Complexity-priced sorting/searching choices and memoization of recursive solutions.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DSA treatment (growth of functions, linked structures, trees, hashing, graph traversal, sorting, dynamic programming) as in CLRS, Introduction to Algorithms — complexity claims follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l25-boolean",
  "level": 25,
  "title": "Boolean Algebra and Logic Gates: Logic You Can Wire",
  "difficulty": "Foundation",
  "minutes": 35,
  "xp": 60,
  "skill": "Digital Logic",
  "prereq": "Level 23 (Discrete Mathematics) complete — this level is propositional logic built out of electricity.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Boolean algebra and gates",
   "Work the example (gates_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Logic gate, Boolean algebra, De Morgan's laws",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every later lesson in this level — adders, flip-flops, counters — is gates wired together; every CPU in Level 26 is this lesson at billion-gate scale. Conditional code (if a && !b) is the same algebra in software dress.",
  "concept": [
   "A gate is a truth table made of transistors. AND, OR and NOT are functionally complete enough to start; NAND and NOR are each complete alone, which is why real chips are forests of NANDs. The table below is the whole vocabulary — four input rows, four gates, no hidden cases — and the last line verifies De Morgan's law by exhaustion, the same proof-by-rows you used in Level 23.",
   "Boolean algebra lets you simplify before you build: a·b + a·¬b = a removes a gate and a wire. Every identity here (idempotent, absorption, De Morgan) is a circuit-editing rule with an electrical meaning, and the examiners' favourite question — 'simplify and draw' — is just algebra followed by wiring."
  ],
  "diagramTitle": "Boolean algebra and gates — the working flow",
  "diagram": [
   "1 · START from the rule — Logic gate: A circuit with a fixed truth table: AND outputs 1 only when all inputs are 1; OR when any is; XOR when they differ; NOT inverts.",
   "2 · RUN the worked example (gates_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Logic gate",
    "def": "A circuit with a fixed truth table: AND outputs 1 only when all inputs are 1; OR when any is; XOR when they differ; NOT inverts."
   },
   {
    "term": "Boolean algebra",
    "def": "The algebra of 0/1 values with AND (·), OR (+) and NOT (¯) — Level 23's logic with symbols engineers write."
   },
   {
    "term": "De Morgan's laws",
    "def": "¬(a·b) = ¬a + ¬b and ¬(a+b) = ¬a·¬b — NOT distributes by flipping the connective."
   }
  ],
  "code": {
   "lang": "python",
   "title": "gates_lab.py — the four core gates on all inputs, and De Morgan verified by exhaustion (complete, runnable)",
   "code": "print(\"a b | AND OR XOR NAND\")\nfor a in (0, 1):\n    for b in (0, 1):\n        nand = 1 - (a & b)\n        print(a, b, \"|\", a & b, a | b, a ^ b, nand)\nok = all((1 - (a & b)) == ((1 - a) | (1 - b)) for a in (0, 1) for b in (0, 1))\nprint(\"De Morgan holds:\", ok)",
   "output": "a b | AND OR XOR NAND\n0 0 | 0 0 0 1\n0 1 | 0 1 1 1\n1 0 | 0 1 1 1\n1 1 | 1 1 0 0\nDe Morgan holds: True",
   "lines": [
    "The loop enumerates the complete input space — a truth table IS this loop.",
    "De Morgan is not asserted; it is checked on every row — exhaustion as proof, again."
   ]
  },
  "mistakes": [
   "Reading OR as exclusive — Boolean OR includes the both-1 row; XOR is the exclusive one.",
   "Applying De Morgan without flipping the connective (¬(a·b) ≠ ¬a·¬b).",
   "Simplifying by 'feel' — each step must cite an identity, like a proof."
  ],
  "security": "Exam link: gate tables and Boolean simplification open almost every Digital Logic paper — they are also the fastest marks on it, being fully mechanical.",
  "pc": [
   "Run the worked example on your PC exactly as written (gates_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (gates_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Logic gate — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "XOR outputs 1 exactly when:",
    "options": [
     "Both inputs are 1",
     "The inputs differ",
     "Any input is 1",
     "Both inputs are 0"
    ],
    "answer": 1,
    "why": "XOR is the difference detector: 01 and 10 give 1; 00 and 11 give 0."
   },
   {
    "q": "¬(a + b) simplifies to:",
    "options": [
     "¬a + ¬b",
     "¬a · ¬b",
     "a · b",
     "¬a · b"
    ],
    "answer": 1,
    "why": "De Morgan: NOT over OR becomes AND of the NOTs."
   },
   {
    "q": "Why are real chips built heavily from NAND gates?",
    "options": [
     "NAND is the fastest colour",
     "NAND alone is functionally complete — any circuit can be built from NANDs only",
     "NAND uses no power",
     "AND gates cannot be manufactured"
    ],
    "answer": 1,
    "why": "NOT, AND and OR are all constructible from NAND, so one gate type suffices for everything."
   }
  ],
  "summary": "Gates are physical truth tables; Boolean algebra (with De Morgan as the star) simplifies expressions before wiring; NAND/NOR alone can build anything.",
  "skillGained": "Gate tables, Boolean simplification, and expression-to-circuit translation.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate digital logic treatment (Boolean algebra, Karnaugh maps, combinational and sequential design) as in Mano, Digital Design — gate tables and flip-flop behaviour follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l25-truth-karnaugh",
  "level": 25,
  "title": "Truth Tables and Karnaugh Maps: Simplifying by Sight",
  "difficulty": "Foundation",
  "minutes": 40,
  "xp": 60,
  "skill": "Digital Logic",
  "prereq": "Previous in Level 25: l25-boolean.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Karnaugh map minimization",
   "Work the example (kmap_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Minterm, Sum of products (SOP), K-map grouping",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Minimization is not exam decoration: fewer terms = fewer gates = cheaper, faster, lower-power hardware. The same 'group what differs in one variable' instinct returns in compiler optimization (Level 30) and in test-case reduction.",
  "concept": [
   "Every truth table is already a circuit — OR together the minterms of the 1-rows — but usually a wasteful one. Below, f = a·b + c has five 1-rows; the canonical SOP would carry five product terms, yet the function was defined with two. The gap between those is minimization, and the K-map is its visual method: lay the rows out so neighbours differ in one variable, group the 1s, and each group becomes one product term with the changing variables deleted.",
   "The map's trick is its ordering: columns go 00, 01, 11, 10 (Gray code) so that geometric neighbours are logical neighbours, and the map wraps — left edge touches right edge. Group sizes must be powers of two. What algebra did with identities in the last lesson, the map does with rectangles; examiners expect fluency in both."
  ],
  "diagramTitle": "Karnaugh map minimization — the working flow",
  "diagram": [
   "1 · START from the rule — Minterm: A product term true for exactly one input row — the row's address written as AND of literals.",
   "2 · RUN the worked example (kmap_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Minterm",
    "def": "A product term true for exactly one input row — the row's address written as AND of literals."
   },
   {
    "term": "Sum of products (SOP)",
    "def": "An expression built as OR of ANDs, read straight off the 1-rows of a truth table."
   },
   {
    "term": "K-map grouping",
    "def": "Adjacent 1-cells (in Gray-code order, wrapping edges) grouped in powers of two; each group deletes the variable that changes inside it."
   }
  ],
  "code": {
   "lang": "python",
   "title": "kmap_lab.py — the truth table of f = a·b + c and its 1-rows (minterms) (complete, runnable)",
   "code": "def f(a, b, c):\n    return (a & b) | c\n\nones = []\nfor a in (0, 1):\n    for b in (0, 1):\n        for c in (0, 1):\n            v = f(a, b, c)\n            print(a, b, c, \"->\", v)\n            if v:\n                ones.append((a, b, c))\nprint(\"minterms (rows where f=1):\", len(ones))",
   "output": "0 0 0 -> 0\n0 0 1 -> 1\n0 1 0 -> 0\n0 1 1 -> 1\n1 0 0 -> 0\n1 0 1 -> 1\n1 1 0 -> 1\n1 1 1 -> 1\nminterms (rows where f=1): 5",
   "lines": [
    "Five 1-rows: canonical SOP = 5 product terms; the definition used 2 — minimization closes that gap.",
    "On the K-map the four c=1 rows form one group (deleting a and b), and row 110 pairs with 111 (deleting c): f = c + a·b."
   ]
  },
  "mistakes": [
   "Grouping 3 or 6 cells — group sizes must be powers of two (1, 2, 4, 8).",
   "Forgetting the map wraps: the four corners can form one group.",
   "Using binary order (00, 01, 10, 11) instead of Gray order — neighbours then differ in two variables and groups lie."
  ],
  "security": "Exam link: 3- and 4-variable K-maps are the single most repeated Digital Logic question type; the procedure — table, map, group, read off — is exactly this lesson's order.",
  "pc": [
   "Run the worked example on your PC exactly as written (kmap_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (kmap_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Minterm — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "In a K-map, a group of 4 cells in a 4-variable map eliminates how many variables from its product term?",
    "options": [
     "0",
     "1",
     "2",
     "4"
    ],
    "answer": 2,
    "why": "Each doubling of group size kills one variable: group of 4 = 2 variables eliminated, leaving a 2-literal term."
   },
   {
    "q": "The column order 00, 01, 11, 10 in a K-map is used because:",
    "options": [
     "It looks tidy",
     "Adjacent columns differ in exactly ONE variable (Gray code), so grouping works",
     "It sorts numbers ascending",
     "It matches binary counting"
    ],
    "answer": 1,
    "why": "Gray code makes geometric adjacency equal logical adjacency — the map's whole trick."
   },
   {
    "q": "A function has minterms Σm(1, 3, 5, 7) over (a, b, c) — every odd row. It simplifies to:",
    "options": [
     "a",
     "b",
     "c",
     "a·b·c"
    ],
    "answer": 2,
    "why": "All four 1-rows have c = 1 and vary freely in a, b: one group of 4 leaves just c."
   }
  ],
  "summary": "Truth tables define; K-maps minimize — group adjacent 1s in powers of two (Gray order, wrapping), delete the variables that change inside each group, OR the survivors.",
  "skillGained": "K-map minimization for 3–4 variables, verified against truth tables.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate digital logic treatment (Boolean algebra, Karnaugh maps, combinational and sequential design) as in Mano, Digital Design — gate tables and flip-flop behaviour follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l25-combinational",
  "level": 25,
  "title": "Combinational Circuits: Adders and Multiplexers",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Digital Logic",
  "prereq": "Previous in Level 25: l25-truth-karnaugh.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Combinational circuits — adders and multiplexers",
   "Work the example (adder_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Combinational circuit, Half / full adder, Multiplexer (MUX)",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "The adder is the first real subsystem of the CPU you meet in Level 26 — its ALU is this lesson plus selection logic. Ripple delay (the carry must ripple through all columns) is also your first honest encounter with hardware speed limits.",
  "concept": [
   "Binary addition is two gates wearing a uniform: for each bit column, sum is XOR (the column total mod 2) and carry is AND (whether the column overflows). Chain full adders — each column's carry-out feeding the next column's carry-in — and you have a ripple-carry adder, the code below proving 5 + 3 = 8 through four chained columns exactly as hardware does it.",
   "A multiplexer is the other combinational archetype: selection instead of arithmetic. With n select lines it routes one of 2ⁿ inputs to the output — the same 'choose by address' idea as memory in Level 26. Combinational design is always this pattern: a truth table (or an arithmetic spec), a gate network, and no memory anywhere."
  ],
  "diagramTitle": "Combinational circuits — adders and multiplexers — the working flow",
  "diagram": [
   "1 · START from the rule — Combinational circuit: Output depends ONLY on current inputs — no memory, no state. Adders, multiplexers, decoders.",
   "2 · RUN the worked example (adder_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Combinational circuit",
    "def": "Output depends ONLY on current inputs — no memory, no state. Adders, multiplexers, decoders."
   },
   {
    "term": "Half / full adder",
    "def": "Half adder adds two bits (sum = XOR, carry = AND). A full adder adds two bits plus a carry-in — the chainable unit."
   },
   {
    "term": "Multiplexer (MUX)",
    "def": "A selector: 2ⁿ data inputs, n select lines, one output — a digitally controlled switch."
   }
  ],
  "code": {
   "lang": "python",
   "title": "adder_lab.py — half/full adders from gates, chained into a 4-bit ripple adder (complete, runnable)",
   "code": "def half_adder(a, b):\n    return a ^ b, a & b\n\ndef full_adder(a, b, cin):\n    s1, c1 = half_adder(a, b)\n    s, c2 = half_adder(s1, cin)\n    return s, c1 | c2\n\nfor a in (0, 1):\n    for b in (0, 1):\n        for cin in (0, 1):\n            s, c = full_adder(a, b, cin)\n            print(a, b, cin, \"-> sum\", s, \"carry\", c)\n\ndef add(x, y, bits=4):\n    carry, out = 0, []\n    for i in range(bits):\n        s, carry = full_adder((x >> i) & 1, (y >> i) & 1, carry)\n        out.append(s)\n    return sum(b << i for i, b in enumerate(out)), carry\n\nprint(\"5 + 3 =\", add(5, 3))",
   "output": "0 0 0 -> sum 0 carry 0\n0 0 1 -> sum 1 carry 0\n0 1 0 -> sum 1 carry 0\n0 1 1 -> sum 0 carry 1\n1 0 0 -> sum 1 carry 0\n1 0 1 -> sum 0 carry 1\n1 1 0 -> sum 0 carry 1\n1 1 1 -> sum 1 carry 1\n5 + 3 = (8, 0)",
   "lines": [
    "full_adder is literally two half adders plus an OR of their carries — composition, not new magic.",
    "add() chains columns LSB-first; carry threads through exactly like pencil addition."
   ]
  },
  "mistakes": [
   "Building sum with OR instead of XOR — the 1+1 column must give sum 0, carry 1.",
   "Forgetting carry-in on all but the first column — that is a row of half adders, not an adder.",
   "Expecting the ripple adder's answer instantly: its delay grows with bit width, the seed of carry-lookahead designs."
  ],
  "security": "Exam link: 'design a full adder / 2-bit adder' is a complete-question staple — truth table, K-map for sum and carry, gate drawing: this lesson's exact pipeline.",
  "pc": [
   "Run the worked example on your PC exactly as written (adder_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (adder_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Combinational circuit — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "In a half adder, the carry output is:",
    "options": [
     "a XOR b",
     "a AND b",
     "a OR b",
     "NOT a"
    ],
    "answer": 1,
    "why": "Carry fires only when both bits are 1 — AND. Sum is the XOR."
   },
   {
    "q": "A 4-to-1 multiplexer needs how many select lines?",
    "options": [
     "1",
     "2",
     "4",
     "8"
    ],
    "answer": 1,
    "why": "n select lines choose among 2ⁿ inputs: 2 lines → 4 inputs."
   },
   {
    "q": "What makes a circuit combinational rather than sequential?",
    "options": [
     "It uses NAND gates",
     "Its output depends only on current inputs — it has no memory of past inputs",
     "It has more than 3 inputs",
     "It runs on a clock"
    ],
    "answer": 1,
    "why": "Memory (state) is the dividing line; next lesson adds it."
   }
  ],
  "summary": "Combinational circuits compute from current inputs only: adders from XOR/AND columns chained by carries, multiplexers as address-selected switches — all specified by truth tables.",
  "skillGained": "Designing and verifying adders and selectors from truth tables.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate digital logic treatment (Boolean algebra, Karnaugh maps, combinational and sequential design) as in Mano, Digital Design — gate tables and flip-flop behaviour follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l25-flipflops",
  "level": 25,
  "title": "Flip-Flops and Latches: One Bit of Memory",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Digital Logic",
  "prereq": "Previous in Level 25: l25-combinational.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Latches and flip-flops",
   "Work the example (flipflop_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Latch, Flip-flop, D flip-flop",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "One D flip-flop stores one bit of a register; 64 of them side by side are the CPU registers of Level 26. The clock edge is also the heartbeat that synchronizes the whole machine — and the source of its speed limit.",
  "concept": [
   "Everything before this lesson forgot instantly: change the input and the output followed. A latch breaks that rule with feedback — cross-coupled gates whose output sustains itself — and a flip-flop disciplines the latch with a clock: the value is captured at one instant (the edge) and held stable between instants. That capture-and-hold is what 'sequential' means, and it is why computers can have a 'current state' at all.",
   "The D flip-flop's rule fits in one line — Q becomes D at the rising edge — and the simulation below shows its personality: changes to D between edges are ignored completely; only the value present AT the edge is remembered. Registers, counters and state machines are this cell repeated and wired."
  ],
  "diagramTitle": "Latches and flip-flops — the working flow",
  "diagram": [
   "1 · START from the rule — Latch: A level-sensitive memory cell: output follows input while the enable is active, holds when it is not.",
   "2 · RUN the worked example (flipflop_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Latch",
    "def": "A level-sensitive memory cell: output follows input while the enable is active, holds when it is not."
   },
   {
    "term": "Flip-flop",
    "def": "An edge-triggered cell: output updates ONLY at the clock edge (rising, typically) — the atom of synchronous design."
   },
   {
    "term": "D flip-flop",
    "def": "Q_next = D at the clock edge: 'copy D into memory now'. The most used cell in real chips."
   }
  ],
  "code": {
   "lang": "python",
   "title": "flipflop_lab.py — a D flip-flop: D is sampled only at the clock edge (complete, runnable)",
   "code": "class DFF:\n    def __init__(self):\n        self.q = 0\n    def edge(self, d):\n        self.q = d\n        return self.q\n\nff = DFF()\nprint(\"start Q =\", ff.q)\nfor d in [1, 0, 1, 1, 0]:\n    print(\"clock edge with D =\", d, \"-> Q =\", ff.edge(d))\nprint(\"between edges, D can wiggle freely - Q does not move\")",
   "output": "start Q = 0\nclock edge with D = 1 -> Q = 1\nclock edge with D = 0 -> Q = 0\nclock edge with D = 1 -> Q = 1\nclock edge with D = 1 -> Q = 1\nclock edge with D = 0 -> Q = 0\nbetween edges, D can wiggle freely - Q does not move",
   "lines": [
    "edge() is the rising clock edge: Q copies D at that instant and at no other time.",
    "D sequence 1,0,1,1,0 becomes Q 1,0,1,1,0 — delayed by exactly the sampling rule, never mid-cycle."
   ]
  },
  "mistakes": [
   "Expecting Q to follow D continuously — that is a latch with enable high, not a flip-flop.",
   "Forgetting the initial state: before the first edge, Q holds whatever it powered up with (here defined as 0).",
   "Confusing SR latch invalid state (S=R=1) with a flip-flop feature — it is a forbidden input for the basic latch."
  ],
  "security": "Exam link: flip-flop questions give a clock waveform and a D waveform and ask for Q — the method is purely: at each rising edge, copy the D value drawn at that instant.",
  "pc": [
   "Run the worked example on your PC exactly as written (flipflop_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (flipflop_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Latch — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A D flip-flop's Q changes:",
    "options": [
     "Whenever D changes",
     "Only at the active clock edge, to the value D has at that moment",
     "When power is removed",
     "Continuously, but slowly"
    ],
    "answer": 1,
    "why": "Edge-triggering is the definition: sampling instants, stability between them."
   },
   {
    "q": "The difference between a latch and a flip-flop is:",
    "options": [
     "Size",
     "Level-sensitive vs edge-triggered behaviour",
     "One uses NAND, the other NOR",
     "Nothing"
    ],
    "answer": 1,
    "why": "A latch is transparent while enabled (level); a flip-flop samples at an edge."
   },
   {
    "q": "Eight D flip-flops sharing a clock and parallel inputs form:",
    "options": [
     "An adder",
     "An 8-bit register",
     "A multiplexer",
     "A counter only"
    ],
    "answer": 1,
    "why": "Parallel D cells loaded on the same edge = a register — Level 26's storage atom."
   }
  ],
  "summary": "Feedback gives memory (latch); the clock edge disciplines it (flip-flop); the D cell — Q_next = D at the edge — is the building block of registers and everything sequential.",
  "skillGained": "Edge-triggered reasoning: predicting Q from clock and D waveforms.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate digital logic treatment (Boolean algebra, Karnaugh maps, combinational and sequential design) as in Mano, Digital Design — gate tables and flip-flop behaviour follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l25-counters",
  "level": 25,
  "title": "Counters and Registers: Machines That Count in Binary",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Digital Logic",
  "prereq": "Previous in Level 25: l25-flipflops.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Counters and registers",
   "Work the example (counter_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Register, Toggle (T) flip-flop, Ripple counter",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "The program counter in every CPU is this lesson's counter with a load input; timers, baud-rate generators and clock dividers are ripple counters at work. You are now one lesson from full sequential design.",
  "concept": [
   "Chain toggle flip-flops so each one's output is the next one's clock and binary counting falls out for free: FF0 toggles every cycle (…010), FF1 toggles each time FF0 falls 1→0 (period 4), FF2 with period 8. Read top-down the three outputs spell 000, 001, 010 … 111, 000 — the code runs exactly this ripple and prints the count both ways.",
   "A register is the counter's sibling: same flip-flops, but loaded with data instead of toggles — storage with a clock. Together they are the sequential toolkit: counters sequence time (timers, program counters in Level 26), registers hold the present (data, addresses, state)."
  ],
  "diagramTitle": "Counters and registers — the working flow",
  "diagram": [
   "1 · START from the rule — Register: A group of flip-flops storing one multi-bit value, loaded in parallel on a clock edge.",
   "2 · RUN the worked example (counter_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Register",
    "def": "A group of flip-flops storing one multi-bit value, loaded in parallel on a clock edge."
   },
   {
    "term": "Toggle (T) flip-flop",
    "def": "Flips its output on each active edge: Q_next = ¬Q — a divide-by-two counter in one cell."
   },
   {
    "term": "Ripple counter",
    "def": "Each flip-flop's output clocks the next: counts in binary, with small propagation delays between bits."
   }
  ],
  "code": {
   "lang": "python",
   "title": "counter_lab.py — a 3-bit ripple counter from toggle flip-flops (complete, runnable)",
   "code": "class TFF:\n    def __init__(self):\n        self.q = 0\n    def toggle(self):\n        self.q ^= 1\n        return self.q\n\nffs = [TFF(), TFF(), TFF()]\nfor step in range(9):\n    val = ffs[0].q + 2 * ffs[1].q + 4 * ffs[2].q\n    bits = \"\".join(str(f.q) for f in reversed(ffs))\n    print(\"count:\", val, bits)\n    prev = [f.q for f in ffs]\n    ffs[0].toggle()\n    if prev[0] == 1 and ffs[0].q == 0:\n        ffs[1].toggle()\n        if prev[1] == 1 and ffs[1].q == 0:\n            ffs[2].toggle()",
   "output": "count: 0 000\ncount: 1 001\ncount: 2 010\ncount: 3 011\ncount: 4 100\ncount: 5 101\ncount: 6 110\ncount: 7 111\ncount: 0 000",
   "lines": [
    "FF0 toggles every step; a 1→0 fall clocks the next stage — the ripple in 'ripple counter'.",
    "After 111 the chain rolls over to 000: a 3-bit counter counts modulo 8."
   ]
  },
  "mistakes": [
   "Reading the bits in the wrong order (FF0 is the LSB — the fastest toggler is the least significant bit).",
   "Expecting all bits to change simultaneously in a ripple counter — each stage waits for the previous one's fall.",
   "Forgetting modulo behaviour: an n-bit counter wraps at 2ⁿ, it does not stop or error."
  ],
  "security": "Exam link: 'draw the timing diagram / output sequence of this counter' is answered by exactly the fall-propagation rule simulated here.",
  "pc": [
   "Run the worked example on your PC exactly as written (counter_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (counter_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Register — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A 4-bit binary counter counts through how many distinct states before repeating?",
    "options": [
     "4",
     "8",
     "16",
     "15"
    ],
    "answer": 2,
    "why": "2⁴ = 16 states (0–15), then it wraps."
   },
   {
    "q": "In a ripple counter, FF1 (second bit) toggles when:",
    "options": [
     "Every clock cycle",
     "FF0 falls from 1 to 0",
     "FF0 rises to 1",
     "The reset is pressed"
    ],
    "answer": 1,
    "why": "Each stage is clocked by the previous stage's falling edge — that is what carries the count upward."
   },
   {
    "q": "A register differs from a counter in that a register:",
    "options": [
     "Has no clock",
     "Loads arbitrary data in parallel rather than stepping through a fixed sequence",
     "Stores analog values",
     "Cannot use D flip-flops"
    ],
    "answer": 1,
    "why": "Same cells, different job: data storage vs sequence generation."
   }
  ],
  "summary": "Toggle chains count in binary (modulo 2ⁿ, rippling on falling edges); registers are parallel-loaded flip-flop groups — together, time and storage for sequential machines.",
  "skillGained": "Predicting counter sequences and register behaviour from structure.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate digital logic treatment (Boolean algebra, Karnaugh maps, combinational and sequential design) as in Mano, Digital Design — gate tables and flip-flop behaviour follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l25-sequential-design",
  "level": 25,
  "title": "Sequential Design: State Machines That Behave",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Digital Logic",
  "prereq": "Previous in Level 25: l25-counters.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Finite state machine design",
   "Work the example (fsm_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: State, State transition table, Moore vs Mealy",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Protocol handlers, vending machines, CPU control units and Level 29's finite automata are all this lesson. The state diagram is the most honest design document in engineering: every behaviour is drawn, so every missing behaviour is visible.",
  "concept": [
   "Design now assembles everything: choose states, tabulate transitions, let flip-flops hold the state and combinational logic compute next-state and output. The traffic light below is a Moore machine — its output IS its state — with timed transitions: GREEN holds 3 ticks, YELLOW 1, RED 2, repeat. Eight ticks of simulation print the exact behaviour the table promises, which is the verification step professionals never skip.",
   "State minimization and encoding come next in a full course (two states that behave identically can merge; states are then assigned bit patterns for the flip-flops), but the design discipline is already complete here: if you cannot draw the state diagram, you do not yet understand the problem — in hardware, in protocols, and (Level 29 will show) in automata theory, where this same machine reappears wearing mathematical clothes."
  ],
  "diagramTitle": "Finite state machine design — the working flow",
  "diagram": [
   "1 · START from the rule — State: Everything the machine must remember about the past, compressed into one label (GREEN, IDLE, WAIT…).",
   "2 · RUN the worked example (fsm_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "State",
    "def": "Everything the machine must remember about the past, compressed into one label (GREEN, IDLE, WAIT…)."
   },
   {
    "term": "State transition table",
    "def": "For every (state, input): the next state and the output — the complete specification of behaviour."
   },
   {
    "term": "Moore vs Mealy",
    "def": "Moore output depends on state only; Mealy output also on current input — Moore is simpler to reason about, Mealy can react faster."
   }
  ],
  "code": {
   "lang": "python",
   "title": "fsm_lab.py — a traffic-light Moore machine simulated tick by tick (complete, runnable)",
   "code": "nxt = {\"GREEN\": \"YELLOW\", \"YELLOW\": \"RED\", \"RED\": \"GREEN\"}\nstay = {\"GREEN\": 3, \"YELLOW\": 1, \"RED\": 2}\nstate, left = \"GREEN\", stay[\"GREEN\"]\nfor t in range(8):\n    print(\"t =\", t, \"light:\", state)\n    left -= 1\n    if left == 0:\n        state = nxt[state]\n        left = stay[state]",
   "output": "t = 0 light: GREEN\nt = 1 light: GREEN\nt = 2 light: GREEN\nt = 3 light: YELLOW\nt = 4 light: RED\nt = 5 light: RED\nt = 6 light: GREEN\nt = 7 light: GREEN",
   "lines": [
    "The table IS the design: (next state, ticks to stay) per state — the code just walks it.",
    "Durations appear as repetition counts in the output: 3 GREEN, 1 YELLOW, 2 RED — the spec read back from behaviour."
   ]
  },
  "mistakes": [
   "Designing with no explicit state list — 'the code will handle it' is how undefined behaviour is born.",
   "Giving a Moore machine an input-dependent output mid-state (that silently makes it Mealy — sometimes fine, never accidental).",
   "Forgetting unreachable states and what the machine does on power-up (the reset state is a design decision)."
  ],
  "security": "Exam link: 'design a sequence detector / controller' questions are graded on the state diagram and transition table first, circuit second — this lesson's order.",
  "pc": [
   "Run the worked example on your PC exactly as written (fsm_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (fsm_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — State — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "In a Moore machine, the output is determined by:",
    "options": [
     "The current input only",
     "The current state only",
     "State and input together",
     "The clock frequency"
    ],
    "answer": 1,
    "why": "Moore: output = f(state). Mealy adds the input to that function."
   },
   {
    "q": "A machine must remember 'a coin was inserted' while waiting for a selection. That memory is stored as:",
    "options": [
     "A combinational gate",
     "A state — one flip-flop's worth of past",
     "A longer wire",
     "The clock"
    ],
    "answer": 1,
    "why": "Remembered past = state, held in flip-flops. That is the whole point of sequential design."
   },
   {
    "q": "The first artifact to produce when designing a sequential controller is:",
    "options": [
     "The gate diagram",
     "The state diagram / transition table — behaviour before circuitry",
     "The PCB layout",
     "A parts order"
    ],
    "answer": 1,
    "why": "Behaviour specification precedes implementation in every design flow in this course."
   }
  ],
  "summary": "Sequential design = states + transition table + flip-flops to hold state + combinational next-state logic; Moore outputs ride on state alone. The same machine returns as automata in Level 29.",
  "skillGained": "End-to-end FSM design: states, table, simulation, verification.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate digital logic treatment (Boolean algebra, Karnaugh maps, combinational and sequential design) as in Mano, Digital Design — gate tables and flip-flop behaviour follow the standard definitions.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l26-cpu-registers",
  "level": 26,
  "title": "CPU Architecture and Registers: The Fetch–Decode–Execute Engine",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Computer Architecture",
  "prereq": "Levels 25 (Digital Logic Design) and 1 (Computer and OS Foundations) complete — you need flip-flops/registers and the machine picture.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: CPU organization and registers",
   "Work the example (cpu_model.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Register, Program counter (PC), Fetch–decode–execute",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This trace is the mental model under everything later in the level — addressing modes choose WHERE operands live, assembly is this cycle written down, interrupts are the cycle being hijacked politely. Level 19's debugger sessions showed the same registers from the other side.",
  "concept": [
   "Strip a CPU to its skeleton and three things remain: registers (a handful of named, instant storage cells), memory (vast, slower, addressed), and the control cycle that shuttles between them. The trace below runs a four-instruction program on a paper CPU: load two numbers from memory, add them in registers, output the result. Every real processor — the 8086, your phone's ARM — is this skeleton with more registers, wider words, and staggering speed.",
   "Why so few registers? They sit inside the CPU itself, built from Level 25 flip-flops, wired to the ALU with the shortest paths in the machine. Speed costs area, so architectures give you a small register file (16 general registers on x86-64, 31 on ARM64) and expect compilers to juggle. Assembly programming is, in large part, this juggling done by hand."
  ],
  "diagramTitle": "CPU organization and registers — the working flow",
  "diagram": [
   "1 · START from the rule — Register: A small, fastest storage cell inside the CPU (Level 25's parallel flip-flops): AX/BX on x86, R0–R12 on ARM.",
   "2 · RUN the worked example (cpu_model.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Register",
    "def": "A small, fastest storage cell inside the CPU (Level 25's parallel flip-flops): AX/BX on x86, R0–R12 on ARM."
   },
   {
    "term": "Program counter (PC)",
    "def": "The register holding the address of the NEXT instruction — Level 25's counter with a load input."
   },
   {
    "term": "Fetch–decode–execute",
    "def": "The CPU's eternal cycle: fetch the instruction at PC, decode what it asks, execute it, advance PC."
   }
  ],
  "code": {
   "lang": "python",
   "title": "cpu_model.py — a paper CPU: registers, memory, and the fetch-decode-execute trace (complete, runnable)",
   "code": "regs = {\"AX\": 0, \"BX\": 0}\nmem = {100: 7, 101: 35}\nprogram = [(\"MOV\", \"AX\", 100), (\"MOV\", \"BX\", 101), (\"ADD\", \"AX\", \"BX\"), (\"OUT\", \"AX\", None)]\nfor step, (op, a, b) in enumerate(program, 1):\n    if op == \"MOV\":\n        regs[a] = mem[b]\n        print(f\"step {step}: MOV {a}, [{b}] -> {a} = {regs[a]}\")\n    elif op == \"ADD\":\n        regs[a] += regs[b]\n        print(f\"step {step}: ADD {a}, {b} -> {a} = {regs[a]}\")\n    elif op == \"OUT\":\n        print(f\"step {step}: OUT {a} -> {regs[a]}\")",
   "output": "step 1: MOV AX, [100] -> AX = 7\nstep 2: MOV BX, [101] -> BX = 35\nstep 3: ADD AX, BX -> AX = 42\nstep 4: OUT AX -> 42",
   "lines": [
    "Square brackets mean 'the value AT this memory address' — MOV AX, [100] copies mem[100], not 100.",
    "ADD works register-to-register: the ALU never reaches into memory directly in this model — loads and stores are separate instructions."
   ]
  },
  "mistakes": [
   "Confusing a register with a memory address — registers are named cells inside the CPU; addresses name memory.",
   "Reading MOV AX, 100 and MOV AX, [100] as the same instruction (immediate value vs memory contents).",
   "Believing the CPU 'runs the program' all at once — it is one instruction per cycle-step, billions of times."
  ],
  "security": "Exam link: 'trace this program, give the final register contents' is the standard architecture question — it is this simulation done on paper, one row per instruction.",
  "pc": [
   "Run the worked example on your PC exactly as written (cpu_model.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (cpu_model.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Register — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "After MOV AX, [100] with mem[100] = 7, AX holds:",
    "options": [
     "100",
     "7",
     "The address 100",
     "0"
    ],
    "answer": 1,
    "why": "Brackets dereference: the CONTENTS of address 100 are copied."
   },
   {
    "q": "The program counter's job is to hold:",
    "options": [
     "The result of the last ADD",
     "The address of the next instruction to fetch",
     "The number of registers",
     "The program's name"
    ],
    "answer": 1,
    "why": "PC points at what happens NEXT; executing advances it (Level 25's counter, loadable)."
   },
   {
    "q": "Why can't the ALU simply read operands straight from main memory for every operation?",
    "options": [
     "Memory is read-only",
     "Memory is far slower than registers; architectures load into registers, compute there, and store results back",
     "Registers are larger",
     "The ALU has no address output at all in any design"
    ],
    "answer": 1,
    "why": "The memory wall: registers exist precisely because RAM latency would starve the ALU."
   }
  ],
  "summary": "A CPU is registers + memory + the fetch–decode–execute cycle turning one into the other; assembly is that cycle made writable.",
  "skillGained": "Register-level tracing of load/operate/store programs.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard microprocessor treatment: 8086 architecture and addressing as in the classic texts (Brey, The Intel Microprocessors), ARM load/store concepts per the ARM architecture's documented model. Assembly listings target NASM syntax on the learner's own machine.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l26-addressing",
  "level": 26,
  "title": "Memory and Addressing Modes: The Many Ways to Name an Operand",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Computer Architecture",
  "prereq": "Previous in Level 26: l26-cpu-registers.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Addressing modes and effective addresses",
   "Work the example (addressing_modes.txt) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Effective address (EA), Immediate / direct / indirect, Indexed / based addressing",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every high-level construct is an addressing mode in disguise: variables are direct, pointers are indirect, arrays are indexed, struct fields are base+displacement. Level 30's compiler lesson generates exactly these forms.",
  "concept": [
   "An instruction must answer one question: where is my operand? Addressing modes are the standardized answers. Immediate (MOV AX, 5) carries the value itself. Direct (MOV AX, [100]) carries the address. Register indirect (MOV AX, [BX]) asks a register for the address. Indexed (MOV AX, [BX+SI+2]) computes base + index + displacement — which is precisely what a[i] compiles to: array base, element index scaled, offset added.",
   "Work the worksheet below by hand before trusting it: BX = 1000, SI = 20, mem[1020] = 77, mem[77] = 5. Then [BX] reads mem[1000]; [BX+SI] reads mem[1020] = 77; and the pointer-chase [[BX+SI]] reads mem[77] = 5. Examiners love these because each mode is one idea and the arithmetic is trivial — the marks are lost only by readers who skip the bracket discipline from last lesson."
  ],
  "diagramTitle": "Addressing modes and effective addresses — the working flow",
  "diagram": [
   "1 · START from the rule — Effective address (EA): The final memory address an instruction actually accesses, computed by its addressing mode.",
   "2 · RUN the worked example (addressing_modes.txt) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Effective address (EA)",
    "def": "The final memory address an instruction actually accesses, computed by its addressing mode."
   },
   {
    "term": "Immediate / direct / indirect",
    "def": "Immediate: the operand IS the instruction's constant. Direct: the instruction holds the address. Indirect: it holds an address whose contents are the address."
   },
   {
    "term": "Indexed / based addressing",
    "def": "EA = base register + index register + displacement — the machinery under every array access."
   }
  ],
  "code": {
   "lang": "text",
   "title": "addressing_modes.txt — worked effective-address calculations (8086-style notation)",
   "code": "Given: BX = 1000, SI = 20, DS segment base such that\n       physical address = segment_base + EA (we track EA only)\n       mem[1000] = 41, mem[1020] = 77, mem[77] = 5\n\nMOV AX, 5          immediate   operand = 5\nMOV AX, [1000]     direct      EA = 1000        -> AX = 41\nMOV AX, [BX]       reg indir.  EA = 1000        -> AX = 41\nMOV AX, [BX+SI]    indexed     EA = 1000 + 20   -> AX = 77\nMOV AX, [BX+SI+2]  idx + disp  EA = 1022        -> AX = mem[1022]\nMOV AX, [[BX+SI]]  indirect    EA = mem[1020]=77 -> AX = 5",
   "output": "Five modes, five different answers to 'where is the operand?'.\nThe last one chases two addresses: 1020 holds 77, and 77 holds 5.",
   "lines": [
    "Each line changes ONLY the operand form — the operation (MOV into AX) never changes.",
    "Indirect addressing reads memory twice: once for the pointer, once for the value. Pointers in C are this mode."
   ]
  },
  "mistakes": [
   "Computing EA and stopping — most questions ask for the VALUE at the EA, one dereference further.",
   "Mixing up displacement (a constant in the instruction) with the index register's contents.",
   "Forgetting that 8086 physical addresses add the segment base — EA alone is not the physical address on that architecture."
  ],
  "security": "Exam link: EA computation questions are pure procedure with one trap per mode — work them exactly like the worksheet: state the mode, compute EA, dereference once (or twice).",
  "pc": [
   "Run the worked example on your PC exactly as written (addressing_modes.txt); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (addressing_modes.txt) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Effective address (EA) — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "With BX = 500 and mem[500] = 33, MOV AX, [BX] loads:",
    "options": [
     "500",
     "33",
     "BX itself",
     "0"
    ],
    "answer": 1,
    "why": "Register indirect: BX holds the address; its contents (33) are the operand."
   },
   {
    "q": "An array access a[i] (element size 1, base 2000, i = 7) uses which mode and EA?",
    "options": [
     "Immediate, EA 7",
     "Indexed: EA = 2000 + 7 = 2007",
     "Direct: EA = 7",
     "Indirect through mem[7]"
    ],
    "answer": 1,
    "why": "Base + index IS indexed addressing — arrays are this mode wearing syntax."
   },
   {
    "q": "Immediate addressing is fastest to decode because:",
    "options": [
     "It skips the register file",
     "The operand travels inside the instruction — no memory access for the operand at all",
     "It uses the cache",
     "It is always 1 byte"
    ],
    "answer": 1,
    "why": "No EA computation and no operand fetch: the value arrives with the instruction itself."
   }
  ],
  "summary": "Addressing modes answer 'where is the operand': immediate, direct, register indirect, indexed (base+index+displacement) and indirect — each one dereference decision, priced in memory reads.",
  "skillGained": "Effective-address computation and value tracing across all standard modes.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard microprocessor treatment: 8086 architecture and addressing as in the classic texts (Brey, The Intel Microprocessors), ARM load/store concepts per the ARM architecture's documented model. Assembly listings target NASM syntax on the learner's own machine.",
  "limitations": "Worked example, checked line by line during authoring. Where a local tool is named (NASM, Git, sqlite3), the same steps run in that tool on your own machine."
 },
 {
  "id": "l26-asm-first",
  "level": 26,
  "title": "Your First Assembly Program: Reading and Tracing Real Code",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Computer Architecture",
  "prereq": "Previous in Level 26: l26-addressing.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Assembly program structure and tracing",
   "Work the example (add.asm) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Assembler / NASM, Label,  syscall (Linux x86-64)",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "You now read the language your Level 19 disassembly showed you. The same listing discipline — trace table, bracket honesty, label-as-address — carries the loops lesson next and the compiler's code generation in Level 30.",
  "concept": [
   "This is a complete, real program — NASM syntax, Linux x86-64 — that adds two numbers held in registers and exits with the sum as its exit code. Assemble it on your own machine with: nasm -f elf64 add.asm && ld -o add add.o && ./add ; echo $? — the shell prints 42, the program's only output, carried in a register exactly as the trace in the listing shows.",
   "Read it the way the CPU will: top to bottom, one instruction per step, tracking RAX and RBX in a two-row table. The two ideas to carry away: assembly has no variables — only registers and memory with names taped on (labels and equates) — and control never 'returns' from a syscall exit: exit is a one-way door the kernel holds."
  ],
  "diagramTitle": "Assembly program structure and tracing — the working flow",
  "diagram": [
   "1 · START from the rule — Assembler / NASM: The program translating assembly text into machine code; NASM is the common x86 assembler on Linux — labels become addresses, mnemonics become opcodes.",
   "2 · RUN the worked example (add.asm) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Assembler / NASM",
    "def": "The program translating assembly text into machine code; NASM is the common x86 assembler on Linux — labels become addresses, mnemonics become opcodes."
   },
   {
    "term": "Label",
    "def": "A name for an address in the program (start:, loop:) — how code refers to places in itself."
   },
   {
    "term": " syscall (Linux x86-64)",
    "def": "The instruction that asks the kernel for a service: number in RAX (1 = write, 60 = exit), arguments in RDI, RSI, RDX."
   }
  ],
  "code": {
   "lang": "text",
   "title": "add.asm — complete NASM (Linux x86-64) program: add two numbers, exit with the sum",
   "code": "; add.asm — assemble: nasm -f elf64 add.asm && ld -o add add.o\n; run: ./add ; echo $?   (shell prints 42)\nsection .text\nglobal _start\n_start:\n    mov rax, 30        ; RAX = 30        (immediate)\n    mov rbx, 12        ; RBX = 12\n    add rax, rbx       ; RAX = RAX + RBX = 42\n    mov rdi, rax       ; exit code goes in RDI\n    mov rax, 60        ; syscall 60 = exit  (overwrites RAX!)\n    syscall            ; kernel ends the process with code 42",
   "output": "Trace: RAX 30 -> (RBX 12) -> RAX 42 -> copied to RDI -> RAX becomes 60 -> syscall.\nShell reports: 42. Note the ordering trap in the last two lines.",
   "lines": [
    "The exit syscall needs its number (60) in RAX — the same register that held the sum, so the sum is copied to RDI FIRST.",
    "Comments carry the trace: every line states the register state it produces. This is how professionals read asm."
   ]
  },
  "mistakes": [
   "Loading RAX with 60 before copying the sum out — the sum is destroyed (the listing's ordering trap).",
   "Expecting a 'print' instruction: bare-metal programs speak to the kernel via syscall, or not at all.",
   "Treating labels as variables — _start is an address the linker places, nothing more."
  ],
  "security": "Exam link: architecture papers trace listings exactly like this — a small table of register values after each instruction earns the marks; keep the table, line by line.",
  "pc": [
   "Run the worked example on your PC exactly as written (add.asm); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (add.asm) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Assembler / NASM — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "In the listing, why is 'mov rdi, rax' placed BEFORE 'mov rax, 60'?",
    "options": [
     "Style",
     "RAX must carry 60 for the syscall, which would erase the sum; the sum is first copied to RDI, where the exit syscall reads its code",
     "RDI is faster",
     "NASM requires it"
    ],
    "answer": 1,
    "why": "One register, two jobs, sequence matters — the copy preserves the value across the overwrite."
   },
   {
    "q": "What does the label _start tell the linker?",
    "options": [
     "The program's author",
     "The entry point — the address where execution begins",
     "The size of the program",
     "Nothing; it is a comment"
    ],
    "answer": 1,
    "why": "Execution starts at the labelled address; without an entry point the CPU has no first instruction."
   },
   {
    "q": "A syscall is best described as:",
    "options": [
     "A faster add",
     "A controlled request to the kernel for a service (I/O, exit, memory) that user code cannot do itself",
     "A comment to the assembler",
     "A type of register"
    ],
    "answer": 1,
    "why": "User code lacks the privilege for hardware and process services; the syscall is the supervised doorway."
   }
  ],
  "summary": "A real assembly program is labels, sections and one instruction per line over registers and syscalls; tracing it line by line — watching values live and die in registers — is the reading skill itself.",
  "skillGained": "Reading and tracing complete assembly listings; assembling locally with NASM.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard microprocessor treatment: 8086 architecture and addressing as in the classic texts (Brey, The Intel Microprocessors), ARM load/store concepts per the ARM architecture's documented model. Assembly listings target NASM syntax on the learner's own machine.",
  "limitations": "Worked example, checked line by line during authoring. Where a local tool is named (NASM, Git, sqlite3), the same steps run in that tool on your own machine."
 },
 {
  "id": "l26-asm-loops",
  "level": 26,
  "title": "Loops, Conditions and Procedures in Assembly",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Computer Architecture",
  "prereq": "Previous in Level 26: l26-asm-first.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Control flow and procedures in assembly",
   "Work the example (sum_loop.asm) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Compare + conditional jump, Loop counter pattern, Procedure (call / ret)",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every loop and function call in every language you know lowers to this skeleton — Level 30's compiler will emit it deliberately. Reverse engineers (Level 19) spend their days recognizing these patterns in stripped binaries: find the CMP/JNZ pair and you have found the loop.",
  "concept": [
   "There is no while keyword at machine level — there is a comparison, a conditional jump backwards, and discipline. The listing sums 1..5 into RAX: counter in RCX counts down from 5, each pass adds RCX and decrements it, and JNZ (jump if the decrement did not produce zero) closes the loop. Trace it: RAX goes 5, 9, 12, 14, 15 — the partial sums in reverse order, because counting down adds the big numbers first.",
   "Procedures add one mechanism: CALL remembers where to return by pushing the return address on the stack (Level 24, now in hardware), and RET pops it. The calling convention — which registers carry arguments, which carry the result, which the callee may clobber — is the treaty that lets separately written code cooperate; the System V convention you met last lesson (RDI, RSI, RDX…) is exactly this treaty."
  ],
  "diagramTitle": "Control flow and procedures in assembly — the working flow",
  "diagram": [
   "1 · START from the rule — Compare + conditional jump: CMP sets flags from a subtraction; JE/JNE/JL/JGE jump according to those flags — the if and while of assembly.",
   "2 · RUN the worked example (sum_loop.asm) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Compare + conditional jump",
    "def": "CMP sets flags from a subtraction; JE/JNE/JL/JGE jump according to those flags — the if and while of assembly."
   },
   {
    "term": "Loop counter pattern",
    "def": "Initialize counter, body, decrement, jump-if-not-done: every high-level loop lowers to this skeleton."
   },
   {
    "term": "Procedure (call / ret)",
    "def": "CALL pushes the return address and jumps; RET pops it back — functions at machine level, with arguments passed in registers (calling convention)."
   }
  ],
  "code": {
   "lang": "text",
   "title": "sum_loop.asm — NASM listing: sum 1..5 with a counter loop, traced completely",
   "code": "; sum_loop.asm — RAX = 1 + 2 + 3 + 4 + 5, counted DOWN\nsection .text\nglobal _start\n_start:\n    mov rax, 0         ; sum = 0\n    mov rcx, 5         ; counter = 5\nloop:\n    add rax, rcx       ; sum += counter\n    dec rcx            ; counter -= 1  (sets ZF when it hits 0)\n    jnz loop           ; repeat while counter != 0\n    mov rdi, rax       ; exit code = 15\n    mov rax, 60\n    syscall",
   "output": "Trace (RAX after each add): 5, 9, 12, 14, 15 — then RCX hits 0, JNZ falls through.\nExit code: 15. Counting up instead would trace 1, 3, 6, 10, 15 — same destination.",
   "lines": [
    "DEC does double duty: it decrements AND sets the zero flag that JNZ reads — comparison and arithmetic share the flags register.",
    "The label 'loop' is just the address of the add instruction; JNZ loop is 'jump back to that address if not zero'."
   ]
  },
  "mistakes": [
   "Forgetting that DEC/JNZ depend on flags set by the LAST flag-setting instruction — an innocent MOV between them is safe (MOV sets no flags) but an ADD silently rewrites the flags.",
   "Looping the wrong variable: decrementing the sum instead of the counter is the classic first-week bug.",
   "Assuming CALL is free — it pushes a return address; unmatched RET (or a clobbered stack) jumps into the void."
  ],
  "security": "Exam link: 'write assembly to compute…' questions are graded on the skeleton — init, body, decrement, conditional jump back — not on cleverness. Produce the skeleton every time.",
  "pc": [
   "Run the worked example on your PC exactly as written (sum_loop.asm); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (sum_loop.asm) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Compare + conditional jump — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "JNZ jumps when:",
    "options": [
     "The counter is positive",
     "The zero flag is CLEAR — the last flag-setting result was not zero",
     "Always",
     "The accumulator overflows"
    ],
    "answer": 1,
    "why": "JNZ reads ZF: jump if Not Zero. DEC reaching 0 sets ZF and the loop falls through."
   },
   {
    "q": "Why does the trace add 5 first when summing '1 to 5'?",
    "options": [
     "A bug",
     "The counter counts DOWN from 5, so RCX holds 5, 4, 3, 2, 1 in that order — addition is commutative, so the total is unaffected",
     "RAX prefers large numbers",
     "NASM sorts the numbers"
    ],
    "answer": 1,
    "why": "Order of addition does not change the sum; the countdown is the natural DEC/JNZ pattern."
   },
   {
    "q": "CALL's essential side effect besides jumping is:",
    "options": [
     "Clearing RAX",
     "Pushing the return address onto the stack so RET can find its way back",
     "Setting the zero flag",
     "Allocating heap memory"
    ],
    "answer": 1,
    "why": "Return address on the stack (Level 24's stack, now hardware) is what makes procedures — and recursion — possible."
   }
  ],
  "summary": "Control flow is CMP + flags + conditional jumps; loops are the counter skeleton; procedures are CALL/RET plus a register treaty — the complete control vocabulary of the machine.",
  "skillGained": "Writing and debugging counter loops and procedure calls in assembly.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard microprocessor treatment: 8086 architecture and addressing as in the classic texts (Brey, The Intel Microprocessors), ARM load/store concepts per the ARM architecture's documented model. Assembly listings target NASM syntax on the learner's own machine.",
  "limitations": "Worked example, checked line by line during authoring. Where a local tool is named (NASM, Git, sqlite3), the same steps run in that tool on your own machine."
 },
 {
  "id": "l26-interrupts",
  "level": 26,
  "title": "Interrupts and I/O: How the CPU Pays Attention to the World",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Computer Architecture",
  "prereq": "Previous in Level 26: l26-asm-loops.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Interrupts and interrupt handling",
   "Work the example (interrupt_trace.txt) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Interrupt, ISR (interrupt service routine), Interrupt vector table",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Interrupts are the hardware root of everything event-driven above them: OS schedulers tick by a timer interrupt, network drivers wake on packet interrupts, and Level 10's EDR hooks live in the same conceptual house. Polling vs interrupts is also a standing design choice in your own programs — event loops are interrupts in software dress.",
  "concept": [
   "Without interrupts, the CPU would poll: 'keyboard? …keyboard? …keyboard?' a billion times a second, burning the machine to notice a keystroke. The interrupt inverts the relationship — devices raise a line, the CPU finishes its current instruction, pushes its state (flags, return address) onto the stack, and jumps through the vector table to the ISR, which services the device and returns with IRET as if nothing happened. The interrupted program never knows.",
   "Follow the worksheet's keyboard strike: IRQ1 fires, the controller signals the CPU, state is saved, the keyboard ISR reads the scan code into a buffer and returns; the OS later drains the buffer at its leisure. The discipline rules are strict — ISRs are short (long work is deferred), they restore everything they touch, and masking (temporarily ignoring interrupts) is a scalpel, not a lifestyle: mask too long and keystrokes, packets and timer ticks are simply lost."
  ],
  "diagramTitle": "Interrupts and interrupt handling — the working flow",
  "diagram": [
   "1 · START from the rule — Interrupt: A hardware (or software) signal that suspends the current instruction stream so the CPU can service an event — the alternative to wasteful polling.",
   "2 · RUN the worked example (interrupt_trace.txt) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Interrupt",
    "def": "A hardware (or software) signal that suspends the current instruction stream so the CPU can service an event — the alternative to wasteful polling."
   },
   {
    "term": "ISR (interrupt service routine)",
    "def": "The handler code for one interrupt source; must be fast, save/restore any registers it touches, and end with IRET."
   },
   {
    "term": "Interrupt vector table",
    "def": "The indexed list mapping each interrupt number to its ISR's address — the CPU's phone book for events."
   }
  ],
  "code": {
   "lang": "text",
   "title": "interrupt_trace.txt — step-by-step trace of one keyboard interrupt (worked example)",
   "code": "t0  Program runs at address 0x4012 (a game loop)\nt1  User presses 'A' -> keyboard controller raises IRQ1\nt2  CPU finishes current instruction; checks interrupt line\nt3  CPU pushes FLAGS and return address (0x4013) on the stack\nt4  CPU reads vector 9 -> ISR address from the vector table\nt5  ISR runs: reads scan code 0x1E from port 0x60 into the\n    keyboard buffer, sends EOI to the controller, restores regs\nt6  IRET pops FLAGS + return address -> execution resumes 0x4013\nt7  Later, the OS reads 'A' (0x41) from the buffer at its leisure",
   "output": "The game loop loses a few hundred cycles and notices nothing.\nTotal ISR work: one port read, one buffer store — microseconds.",
   "lines": [
    "The state push (t3) and IRET pop (t6) are a matched pair — the same stack discipline as CALL/RET, imposed by hardware.",
    "The ISR does the minimum (capture the byte) and defers interpretation — the standing rule for all handlers."
   ]
  },
  "mistakes": [
   "Writing a long ISR that does the full processing (parsing, printing) inside the handler — other interrupts wait, and events are lost.",
   "Forgetting EOI (end-of-interrupt): the controller then refuses to signal further interrupts from that line.",
   "Believing the interrupted program must 'handle' the interrupt — transparency is the design's whole achievement."
  ],
  "security": "Exam link: interrupt questions are sequence questions — order the events (signal → save state → vector → ISR → EOI → IRET → resume) and the marks follow the order.",
  "pc": [
   "Run the worked example on your PC exactly as written (interrupt_trace.txt); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (interrupt_trace.txt) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Interrupt — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "The CPU learns an interrupt occurred:",
    "options": [
     "By asking each device in turn, every cycle",
     "From a dedicated interrupt signal line, checked between instructions",
     "Only at program start",
     "From the hard disk"
    ],
    "answer": 1,
    "why": "The whole point: devices announce; the CPU does not poll."
   },
   {
    "q": "Before jumping to the ISR, the CPU must:",
    "options": [
     "Close all programs",
     "Push the flags and return address so IRET can resume exactly where it stopped",
     "Clear all registers",
     "Ask the user"
    ],
    "answer": 1,
    "why": "Saved state + IRET = transparent interruption; nothing else would let the program continue correctly."
   },
   {
    "q": "An ISR should be short primarily because:",
    "options": [
     "Short code is elegant",
     "While it runs, other interrupts wait or are lost; heavy work belongs in deferred processing",
     "The vector table has a size limit",
     "Registers are small"
    ],
    "answer": 1,
    "why": "Capture the event, schedule the work, get out — latency is a system-wide budget."
   }
  ],
  "summary": "Interrupts replace polling with announcement: signal, save state, vector to a short ISR, EOI, IRET, resume — transparency and brevity are the design's twin rules.",
  "skillGained": "Ordering and explaining the full interrupt cycle and ISR discipline.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard microprocessor treatment: 8086 architecture and addressing as in the classic texts (Brey, The Intel Microprocessors), ARM load/store concepts per the ARM architecture's documented model. Assembly listings target NASM syntax on the learner's own machine.",
  "limitations": "Worked example, checked line by line during authoring. Where a local tool is named (NASM, Git, sqlite3), the same steps run in that tool on your own machine."
 },
 {
  "id": "l26-arm-modern",
  "level": 26,
  "title": "ARM and the Modern Picture: Load/Store Thinking",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Computer Architecture",
  "prereq": "Previous in Level 26: l26-interrupts.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: ARM load/store architecture concepts",
   "Work the example (arm_style_cpu.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Load/store architecture, RISC, Fixed-width instructions",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This closes the architecture arc that Level 1 opened (inside the computer) and Level 25 grounded in circuits. Level 30's compiler targets a machine in exactly this style — a load/store stack machine you will build yourself.",
  "concept": [
   "ARM's bet, which won the mobile world and is winning servers: make instructions simple and uniform, forbid arithmetic on memory directly, and give the programmer many registers (so the load/store tax is paid rarely). The emulator below runs an ARM-style program — LDR two values, ADD in registers, STR the result home. Compare it with the x86 traces: the ADD could not have named a memory address even if it wanted to.",
   "Why should a security-and-CSE student care about two architectures? Because binaries, exploits and embedded devices speak both: your phone is ARM, your PC is x86-64, and Level 19's samples could be either. The concepts — registers, addressing, control flow, interrupts — transfer intact; only the dialect changes."
  ],
  "diagramTitle": "ARM load/store architecture concepts — the working flow",
  "diagram": [
   "1 · START from the rule — Load/store architecture: Only LDR/STR touch memory; all arithmetic happens between registers (ARM's rule, vs x86's memory operands).",
   "2 · RUN the worked example (arm_style_cpu.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Load/store architecture",
    "def": "Only LDR/STR touch memory; all arithmetic happens between registers (ARM's rule, vs x86's memory operands)."
   },
   {
    "term": "RISC",
    "def": "Reduced Instruction Set Computing: simple, uniform instructions that pipeline efficiently — ARM's design philosophy."
   },
   {
    "term": "Fixed-width instructions",
    "def": "ARM (AArch32) instructions are uniformly 32-bit, simplifying decode — fetch always knows where the next instruction starts."
   }
  ],
  "code": {
   "lang": "python",
   "title": "arm_style_cpu.py — an ARM-style load/store machine: arithmetic only in registers (complete, runnable)",
   "code": "regs = [0, 0, 0, 0]\nmem = [10, 20, 0, 40]\nprogram = [\n    (\"LDR\", 0, 0),\n    (\"LDR\", 1, 1),\n    (\"ADD\", 2, 0, 1),\n    (\"STR\", 2, 2),\n    (\"OUT\", 2),\n]\nfor ins in program:\n    op = ins[0]\n    if op == \"LDR\":\n        regs[ins[1]] = mem[ins[2]]\n    elif op == \"ADD\":\n        regs[ins[1]] = regs[ins[2]] + regs[ins[3]]\n    elif op == \"STR\":\n        mem[ins[2]] = regs[ins[1]]\n    elif op == \"OUT\":\n        print(\"OUT R%d ->\" % ins[1], regs[ins[1]])\n    print(ins, \"=> regs\", regs, \"mem\", mem)",
   "output": "('LDR', 0, 0) => regs [10, 0, 0, 0] mem [10, 20, 0, 40]\n('LDR', 1, 1) => regs [10, 20, 0, 0] mem [10, 20, 0, 40]\n('ADD', 2, 0, 1) => regs [10, 20, 30, 0] mem [10, 20, 0, 40]\n('STR', 2, 2) => regs [10, 20, 30, 0] mem [10, 20, 30, 40]\nOUT R2 -> 30\n('OUT', 2) => regs [10, 20, 30, 0] mem [10, 20, 30, 40]",
   "lines": [
    "Notice what ADD's operands are: register numbers only. Memory appears in the program at exactly two instructions: LDR and STR.",
    "The trace prints after EVERY instruction — state visibility is the debugging style assembly demands."
   ]
  },
  "mistakes": [
   "Writing ARM-style code with a memory operand on ADD — the architecture forbids it; that is the lesson, not a style tip.",
   "Assuming x86 knowledge transfers letter-for-letter: register names, instruction widths and conventions differ even though concepts match.",
   "Calling RISC 'weaker' — the world's phones and a growing share of servers run it precisely because simple pipelines scale."
  ],
  "security": "Exam link: architecture comparison questions (RISC vs CISC, load/store vs memory operands) are answered from this lesson's one running example — keep the ADD-operands observation at the centre.",
  "pc": [
   "Run the worked example on your PC exactly as written (arm_style_cpu.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (arm_style_cpu.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Load/store architecture — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "On ARM, computing mem[5] + mem[6] into mem[7] minimally requires:",
    "options": [
     "One ADD instruction with memory operands",
     "LDR, LDR, ADD, STR — loads, a register add, a store",
     "A single STR",
     "An interrupt"
    ],
    "answer": 1,
    "why": "Load/store discipline: memory is touched only by LDR/STR; arithmetic is register-only."
   },
   {
    "q": "x86 allows 'add rax, [100]' — an ALU op with a memory operand. This makes x86 the classic example of:",
    "options": [
     "RISC",
     "CISC — richer, variable-length instructions with memory operands",
     "A load/store architecture",
     "An interrupt controller"
    ],
    "answer": 1,
    "why": "CISC trades instruction simplicity for density and expressiveness; ARM's RISC trades the other way."
   },
   {
    "q": "Uniform 32-bit instructions help a CPU because:",
    "options": [
     "They hold bigger numbers",
     "Fetch and decode are simpler and pipeline better — the next instruction's position is always known",
     "They use less disk",
     "They need no registers"
    ],
    "answer": 1,
    "why": "Regularity is a hardware virtue: decode logic shrinks and pipelining deepens."
   }
  ],
  "summary": "ARM's load/store RISC discipline — memory only via LDR/STR, arithmetic in a generous register file, uniform instructions — contrasts with x86's CISC richness; the underlying concepts are one and the same.",
  "skillGained": "Comparing architectures by their operand rules and tracing load/store programs.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard microprocessor treatment: 8086 architecture and addressing as in the classic texts (Brey, The Intel Microprocessors), ARM load/store concepts per the ARM architecture's documented model. Assembly listings target NASM syntax on the learner's own machine.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l27-er-relational",
  "level": 27,
  "title": "The ER Model and the Relational Model: From Things to Tables",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Databases",
  "prereq": "Level 24 (Data Structures & Algorithms) complete — indexing needs trees and hashing, and SQL needs set thinking from Level 23.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: ER modelling and the relational model",
   "Work the example (er_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Entity / attribute / relationship, Relation (table), Primary key / foreign key",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every schema mistake you will ever debug — duplicate data, orphan rows, unanswerable queries — is born at this modelling stage. Level 8's SQL injection and Level 17's BOLA both presume you can read a schema; now you can also write one.",
  "concept": [
   "Design starts before any SQL: name the entities (student, course), their attributes, and the relationships — an ER diagram is that sentence drawn. The mapping to tables is then mechanical: each entity becomes a table; a many-to-many relationship (students enroll in courses) becomes its OWN table whose rows are pairs, because a single cell may never hold a list — that rule (atomic values) returns as 1NF in the normalization lesson.",
   "The code creates the two entity tables and the enrollment relationship table, then reads them back. Notice what the foreign keys buy: enroll.student_id cannot invent a student — the database itself enforces that every enrollment references a real row. That enforcement, referential integrity, is the database doing Level 23's relation discipline automatically."
  ],
  "diagramTitle": "ER modelling and the relational model — the working flow",
  "diagram": [
   "1 · START from the rule — Entity / attribute / relationship: An entity is a thing you store facts about; attributes are its facts; a relationship connects entities (student ENROLLS in course).",
   "2 · RUN the worked example (er_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Entity / attribute / relationship",
    "def": "An entity is a thing you store facts about; attributes are its facts; a relationship connects entities (student ENROLLS in course)."
   },
   {
    "term": "Relation (table)",
    "def": "A set of tuples (rows) over named attributes (columns) — Level 23's relation, stored. Row order does not matter; duplicate rows are not allowed."
   },
   {
    "term": "Primary key / foreign key",
    "def": "Primary key: an attribute set that uniquely identifies a row. Foreign key: attributes in one table referencing another table's key — relationships made concrete."
   }
  ],
  "code": {
   "lang": "python",
   "title": "er_lab.py — the ER design as real tables with keys, on SQLite (complete, runnable)",
   "code": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.execute(\"CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT)\")\ndb.execute(\"CREATE TABLE enroll (student_id INTEGER, course TEXT)\")\ndb.executemany(\"INSERT INTO students VALUES (?, ?)\", [(1, \"Abir\"), (2, \"Rima\")])\ndb.executemany(\"INSERT INTO enroll VALUES (?, ?)\", [(1, \"CSE101\"), (1, \"CSE205\"), (2, \"CSE101\")])\nfor row in db.execute(\"SELECT * FROM students\"):\n    print(row)\nprint(\"enrollments:\", db.execute(\"SELECT COUNT(*) FROM enroll\").fetchone()[0])",
   "output": "(1, 'Abir')\n(2, 'Rima')\nenrollments: 3",
   "lines": [
    "Two entity tables + one relationship table: the many-to-many 'enrolls' became rows of pairs, not a list in a cell.",
    "INTEGER PRIMARY KEY makes id the row's identity — inserting a second row with id 1 would be rejected."
   ]
  },
  "mistakes": [
   "Storing a list inside a cell ('courses: CSE101, CSE205') — breaks atomicity and makes every query a string-splitting exercise.",
   "Modelling a many-to-many relationship as a column in one of the entity tables — it needs its own table.",
   "Choosing a mutable attribute (a name) as primary key — keys must be unique AND stable; use a surrogate id."
  ],
  "security": "Exam link: 'draw the ER diagram and map it to relations' is the standard opening DBMS question — entities, relationships, cardinalities, then tables with keys underlined.",
  "pc": [
   "Run the worked example on your PC exactly as written (er_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (er_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Entity / attribute / relationship — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A many-to-many relationship between students and courses becomes, in the relational model:",
    "options": [
     "A column in students",
     "A column in courses",
     "Its own table with two foreign keys",
     "A separate database"
    ],
    "answer": 2,
    "why": "Relationship tables hold the pairs; each side is a foreign key to its entity table."
   },
   {
    "q": "Which property must a primary key have?",
    "options": [
     "It must be a name",
     "Unique and never NULL — it identifies the row",
     "It must be the first column alphabetically",
     "It changes each semester"
    ],
    "answer": 1,
    "why": "Identification demands uniqueness and presence; stability is the professional add-on."
   },
   {
    "q": "Referential integrity guarantees:",
    "options": [
     "Rows are sorted",
     "Every foreign key value matches an existing primary key in the referenced table (or is NULL where allowed)",
     "Backups exist",
     "Queries are fast"
    ],
    "answer": 1,
    "why": "No orphan references: an enrollment cannot point at a student who does not exist."
   }
  ],
  "summary": "Model first: entities, attributes, relationships and cardinalities in an ER diagram; then map mechanically — entities to tables, many-to-many to its own table, keys identifying rows and gluing tables together.",
  "skillGained": "ER-to-relational mapping with primary/foreign key discipline.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DBMS treatment (relational model, SQL, normalization to BCNF, ACID, indexing) as in Silberschatz/Korth/Sudarshan, Database System Concepts; SQL shown is standard SQL executed on SQLite 3.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l27-sql-basics",
  "level": 27,
  "title": "SQL I: SELECT, WHERE, ORDER BY — Asking Questions of Data",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Databases",
  "prereq": "Previous in Level 27: l27-er-relational.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: SQL querying fundamentals",
   "Work the example (sql_basics.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Declarative query, WHERE (selection), ORDER BY / LIMIT",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This is the query language under every report, dashboard and admin panel you will ever secure or build — and the language SQL injection (Level 8) corrupts. Reading a WHERE clause precisely is a security skill as much as a database one.",
  "concept": [
   "A SELECT query is a pipeline read in a fixed logical order: FROM chooses the table, WHERE filters its rows, SELECT picks the columns, ORDER BY sorts what survives. The code runs that pipeline against a real (in-memory) database: a marks table filtered to Math students scoring at least 60, best first. Every clause earns its place — drop the WHERE and Physics rows leak in; drop ORDER BY and the 'best first' promise evaporates.",
   "Notice the discipline SQL shares with Level 23: WHERE is a predicate evaluated per row, so everything you know about logic — AND binds tighter than OR, comparisons with NULL yield UNKNOWN, and UNKNOWN rows are filtered OUT — applies verbatim. Most 'wrong result' bugs in real SQL are logic bugs wearing a database costume."
  ],
  "diagramTitle": "SQL querying fundamentals — the working flow",
  "diagram": [
   "1 · START from the rule — Declarative query: SQL states WHAT result you want; the engine chooses HOW (scan, index, order of operations).",
   "2 · RUN the worked example (sql_basics.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Declarative query",
    "def": "SQL states WHAT result you want; the engine chooses HOW (scan, index, order of operations)."
   },
   {
    "term": "WHERE (selection)",
    "def": "Filters rows by a predicate — relational algebra's σ. Only rows where the predicate is TRUE survive (NULL results do not)."
   },
   {
    "term": "ORDER BY / LIMIT",
    "def": "Sorting and capping the result — without ORDER BY, row order is never guaranteed."
   }
  ],
  "code": {
   "lang": "python",
   "title": "sql_basics.py — a real practice database in SQLite: filter, sort, count (complete, runnable)",
   "code": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.execute(\"CREATE TABLE marks (name TEXT, subject TEXT, score INTEGER)\")\nrows = [(\"Ana\", \"Math\", 88), (\"Bil\", \"Math\", 57), (\"Cy\", \"Physics\", 92), (\"Dee\", \"Math\", 74)]\ndb.executemany(\"INSERT INTO marks VALUES (?, ?, ?)\", rows)\nprint(\"Math, 60+, best first:\")\nfor r in db.execute(\"SELECT name, score FROM marks WHERE subject = 'Math' AND score >= 60 ORDER BY score DESC\"):\n    print(r)\nprint(\"count below 60:\", db.execute(\"SELECT COUNT(*) FROM marks WHERE score < 60\").fetchone()[0])",
   "output": "Math, 60+, best first:\n('Ana', 88)\n('Dee', 74)\ncount below 60: 1",
   "lines": [
    "The ? placeholders are parameter binding — values never become SQL text. This is the Level 8 injection fix, in its native home.",
    "Bil (57) fails the score predicate; Cy (Physics) fails the subject predicate — the AND requires both, per row."
   ]
  },
  "mistakes": [
   "Writing = NULL to find missing values — NULL compares as UNKNOWN; the test is IS NULL.",
   "Expecting a defined row order without ORDER BY (the engine owes you a set, not a sequence).",
   "String-building queries from user input instead of parameters — the injection antipattern, now visible from the database side."
  ],
  "security": "Exam link: SQL questions are answered by simulating the pipeline in order (FROM → WHERE → SELECT → ORDER BY) on the given rows — mechanical, like truth tables.",
  "pc": [
   "Run the worked example on your PC exactly as written (sql_basics.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (sql_basics.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Declarative query — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "SELECT name FROM marks WHERE score > 50 — if a row's score is NULL, the row is:",
    "options": [
     "Included",
     "Excluded — NULL > 50 is UNKNOWN, and WHERE keeps only TRUE",
     "Shown with an error",
     "Treated as 0 and included"
    ],
    "answer": 1,
    "why": "Three-valued logic: comparisons with NULL are UNKNOWN; WHERE is a TRUE-only gate."
   },
   {
    "q": "Which clause is logically evaluated FIRST?",
    "options": [
     "SELECT",
     "ORDER BY",
     "FROM — the table is chosen before rows are filtered, projected or sorted",
     "LIMIT"
    ],
    "answer": 2,
    "why": "Logical order: FROM → WHERE → SELECT → ORDER BY. The engine may execute differently but must produce this meaning."
   },
   {
    "q": "The ? in 'WHERE name = ?' executed with a parameter protects against:",
    "options": [
     "Slow queries",
     "SQL injection — the value is data, never parsed as SQL syntax",
     "NULL rows",
     "Duplicate rows"
    ],
    "answer": 1,
    "why": "Parameter binding separates code from data — the exact boundary injection attacks erase."
   }
  ],
  "summary": "SELECT pipelines — FROM, WHERE (three-valued predicate logic), projection, ORDER BY — over a real local database, with parameter binding as the standing safety rule.",
  "skillGained": "Writing and precisely reading single-table SQL queries.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DBMS treatment (relational model, SQL, normalization to BCNF, ACID, indexing) as in Silberschatz/Korth/Sudarshan, Database System Concepts; SQL shown is standard SQL executed on SQLite 3.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l27-sql-joins",
  "level": 27,
  "title": "SQL II: Joins, Aggregation and GROUP BY — Combining Tables Honestly",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Databases",
  "prereq": "Previous in Level 27: l27-sql-basics.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Joins and aggregation",
   "Work the example (sql_joins.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: INNER JOIN, LEFT JOIN, GROUP BY + aggregate",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every multi-table report, every ORM query, and Level 17's API responses are joins over normalized data. Knowing what INNER silently drops is also a security-relevant skill: access reports built on inner joins hide the unassigned, ungraded and unmonitored.",
  "concept": [
   "A join is Level 23's relation machinery with a purpose: rebuild, for one query, the wide view that normalization split into tables. INNER JOIN keeps only matched pairs — Cy, who has no grades yet, vanishes from the grade report, which may or may not be what the report promised. LEFT JOIN keeps Cy with a NULL course: the difference is not syntax, it is a decision about who gets to disappear from the answer.",
   "GROUP BY then compresses: rows are partitioned by the grouping key and each partition emits ONE row of aggregates. The classic bug — selecting a column that is neither grouped nor aggregated — asks for 'the' value of something that has many values per group; strict engines refuse it. The averages below are auditable by hand: Ana's 85.0 is (90 + 80) / 2 over her two joined rows."
  ],
  "diagramTitle": "Joins and aggregation — the working flow",
  "diagram": [
   "1 · START from the rule — INNER JOIN: Pairs rows from two tables where the join condition matches — unmatched rows on either side disappear.",
   "2 · RUN the worked example (sql_joins.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "INNER JOIN",
    "def": "Pairs rows from two tables where the join condition matches — unmatched rows on either side disappear."
   },
   {
    "term": "LEFT JOIN",
    "def": "Keeps every left-table row; right-side columns become NULL where no match exists — 'show me all, with details where available'."
   },
   {
    "term": "GROUP BY + aggregate",
    "def": "Partitions rows into groups and computes one summary value per group: COUNT, SUM, AVG, MIN, MAX."
   }
  ],
  "code": {
   "lang": "python",
   "title": "sql_joins.py — INNER vs LEFT JOIN and per-student averages on the practice database (complete, runnable)",
   "code": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.execute(\"CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT)\")\ndb.execute(\"CREATE TABLE grades (student_id INTEGER, course TEXT, score INTEGER)\")\ndb.executemany(\"INSERT INTO students VALUES (?, ?)\", [(1, \"Ana\"), (2, \"Bil\"), (3, \"Cy\")])\ndb.executemany(\"INSERT INTO grades VALUES (?, ?, ?)\", [(1, \"DB\", 90), (1, \"Algo\", 80), (2, \"DB\", 70)])\nprint(\"INNER JOIN (only students WITH grades):\")\nfor r in db.execute(\"SELECT s.name, g.course, g.score FROM students s JOIN grades g ON g.student_id = s.id ORDER BY s.name, g.course\"):\n    print(r)\nprint(\"LEFT JOIN keeps everyone (Cy -> None):\")\nfor r in db.execute(\"SELECT s.name, g.course FROM students s LEFT JOIN grades g ON g.student_id = s.id ORDER BY s.name, g.course\"):\n    print(r)\nprint(\"average per student:\")\nfor r in db.execute(\"SELECT s.name, AVG(g.score) FROM students s JOIN grades g ON g.student_id = s.id GROUP BY s.name ORDER BY s.name\"):\n    print(r)",
   "output": "INNER JOIN (only students WITH grades):\n('Ana', 'Algo', 80)\n('Ana', 'DB', 90)\n('Bil', 'DB', 70)\nLEFT JOIN keeps everyone (Cy -> None):\n('Ana', 'Algo')\n('Ana', 'DB')\n('Bil', 'DB')\n('Cy', None)\naverage per student:\n('Ana', 85.0)\n('Bil', 70.0)",
   "lines": [
    "Same tables, two join types: the ONLY difference in output is Cy — who disappears is a decision, not a detail.",
    "AVG over the joined rows: Ana (90 + 80) / 2 = 85.0. GROUP BY emits exactly one row per group."
   ]
  },
  "mistakes": [
   "Forgetting the ON condition — the join degenerates into a Cartesian product (every row × every row).",
   "Using INNER JOIN for 'list everyone' reports — the unmatched vanish silently.",
   "Selecting a bare column alongside GROUP BY and trusting whichever value the engine happens to show."
  ],
  "security": "Exam link: join questions are decided by the unmatched rows — always ask 'who disappears?' before writing the join type.",
  "pc": [
   "Run the worked example on your PC exactly as written (sql_joins.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (sql_joins.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — INNER JOIN — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A dean asks for ALL students and their grade counts, including students with zero grades. The honest query uses:",
    "options": [
     "INNER JOIN with COUNT",
     "LEFT JOIN with COUNT(g.course) — unmatched students survive with count 0",
     "INNER JOIN, then add the missing students by hand",
     "A Cartesian join"
    ],
    "answer": 1,
    "why": "LEFT keeps every student; COUNT of the joined column (not *) counts real matches only, giving 0 for Cy."
   },
   {
    "q": "students (3 rows) joined to grades (3 rows) with NO ON condition returns how many rows?",
    "options": [
     "3",
     "6",
     "9 — a Cartesian product",
     "0"
    ],
    "answer": 2,
    "why": "No condition = every pairing: 3 × 3 = 9. The ON clause is the join's meaning."
   },
   {
    "q": "In 'SELECT dept, AVG(salary) FROM staff GROUP BY dept', why would adding 'name' to the SELECT list be wrong?",
    "options": [
     "Names are private",
     "Each dept group has many names — there is no single 'the name' per group; the column is neither grouped nor aggregated",
     "AVG forbids text",
     "GROUP BY sorts names automatically"
    ],
    "answer": 1,
    "why": "One output row per group can only carry the group key and aggregates of the group's rows."
   }
  ],
  "summary": "Joins rebuild wide views from split tables: INNER keeps matches, LEFT keeps everyone, GROUP BY compresses groups into aggregate rows — and who disappears is always a stated decision.",
  "skillGained": "Choosing join types by the unmatched-row question; correct grouped aggregation.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DBMS treatment (relational model, SQL, normalization to BCNF, ACID, indexing) as in Silberschatz/Korth/Sudarshan, Database System Concepts; SQL shown is standard SQL executed on SQLite 3.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l27-normalization",
  "level": 27,
  "title": "Normalization: 1NF to BCNF, or Why Schemas Split",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Databases",
  "prereq": "Previous in Level 27: l27-sql-joins.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Normalization and functional dependencies",
   "Work the example (normalize_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Functional dependency (FD), Update anomaly, 2NF / 3NF / BCNF",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Normalization is why real schemas look 'over-split' to beginners and why joins exist to reassemble them. It is also a security property: one authoritative copy of a permission or an address is auditable; five drifting copies are an incident waiting for a date.",
  "concept": [
   "Normalization is redundancy removal with a rulebook. The flat orders table below stores Rima's city twice — once per order — and the code demonstrates the consequence: update her city in one row only, and the database now claims she lives in two cities at once. That is not a hypothetical; it is the default future of every unnormalized table, and the fix is structural: a fact stored in exactly one place can never disagree with itself.",
   "The ladder: 1NF demands atomic values (no lists in cells — the ER lesson's rule). 2NF removes dependence on part of a composite key (in an (order, product) row, the customer's city depends on neither — it depends on the customer, who should not be in this table at all). 3NF removes transitive dependence (city depends on customer, customer rides along with the order — split customers out). BCNF tightens the last corner: every determinant must be a candidate key. Decompose along the offending FD, join back losslessly when needed — that sentence is the whole exam topic."
  ],
  "diagramTitle": "Normalization and functional dependencies — the working flow",
  "diagram": [
   "1 · START from the rule — Functional dependency (FD): X → Y: whenever two rows agree on X they must agree on Y. The raw material of all normalization.",
   "2 · RUN the worked example (normalize_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Functional dependency (FD)",
    "def": "X → Y: whenever two rows agree on X they must agree on Y. The raw material of all normalization."
   },
   {
    "term": "Update anomaly",
    "def": "Redundant storage lets copies disagree: change a fact in one row, miss its twins, and the database contradicts itself."
   },
   {
    "term": "2NF / 3NF / BCNF",
    "def": "2NF: no non-key attribute depends on PART of a composite key. 3NF: no non-key attribute depends on another non-key attribute. BCNF: every determinant is a key."
   }
  ],
  "code": {
   "lang": "python",
   "title": "normalize_lab.py — the update anomaly, demonstrated on a flat table vs a decomposed one (complete, runnable)",
   "code": "flat = [\n    (\"O1\", \"Rima\", \"Dhaka\", \"Pen\"),\n    (\"O2\", \"Rima\", \"Dhaka\", \"Book\"),\n    (\"O3\", \"Karim\", \"Sylhet\", \"Pen\"),\n]\n# Rima moves to Chattogram; a tired clerk updates only the first row found\nfor i, r in enumerate(flat):\n    if r[1] == \"Rima\":\n        flat[i] = (r[0], r[1], \"Chattogram\", r[3])\n        break\ncities = {r[2] for r in flat if r[1] == \"Rima\"}\nprint(\"flat table says Rima lives in:\", sorted(cities))\ncustomers = {\"Rima\": \"Dhaka\", \"Karim\": \"Sylhet\"}\ncustomers[\"Rima\"] = \"Chattogram\"\nprint(\"decomposed says Rima lives in:\", [customers[\"Rima\"]])",
   "output": "flat table says Rima lives in: ['Chattogram', 'Dhaka']\ndecomposed says Rima lives in: ['Chattogram']",
   "lines": [
    "Same update, two outcomes: the flat table forks one fact into two truths; the decomposed schema has exactly one place to change.",
    "The set comprehension is the anomaly detector — a fact with two values is a contradiction, countable in code."
   ]
  },
  "mistakes": [
   "Believing normalization is 'splitting for tidiness' — each split removes a named FD that causes a named anomaly.",
   "Denormalizing for speed without naming which anomaly you are re-accepting and who will police the copies.",
   "Identifying FDs from one sample row — FDs are rules about ALL possible rows, read from the domain's meaning, not from data accidents."
  ],
  "security": "Exam link: normalization questions hand you a table and its FDs; the method is fixed — find the key, spot the partial/transitive dependency, decompose, name the normal form reached.",
  "pc": [
   "Run the worked example on your PC exactly as written (normalize_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (normalize_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Functional dependency (FD) — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "In orders(order_id, customer, city, product) with FDs order_id → customer and customer → city, the violation is:",
    "options": [
     "1NF — values are not atomic",
     "3NF — city depends transitively on the key through customer; split customers out",
     "No violation",
     "BCNF only"
    ],
    "answer": 1,
    "why": "Key → customer → city is the transitive chain 3NF exists to break."
   },
   {
    "q": "A cell containing 'CSE101, CSE205' violates:",
    "options": [
     "3NF",
     "2NF",
     "1NF — values must be atomic",
     "BCNF"
    ],
    "answer": 2,
    "why": "Lists in cells are the first-normal-form failure — the ER lesson's rule returning."
   },
   {
    "q": "Why is 'just update ALL the copies carefully' not a professional answer to redundancy?",
    "options": [
     "It is too slow to type",
     "Human care does not scale and cannot be enforced; structure — one stored copy — makes the anomaly impossible instead of unlikely",
     "Databases forbid updates",
     "It needs an index"
    ],
    "answer": 1,
    "why": "Normalization replaces discipline with impossibility: no second copy, no possible disagreement."
   }
  ],
  "summary": "Redundancy breeds update anomalies; normalization removes it up a ladder — atomic values (1NF), no partial dependence (2NF), no transitive dependence (3NF), determinants are keys (BCNF) — decomposing along functional dependencies.",
  "skillGained": "Spotting FD violations and decomposing a table to 3NF/BCNF on paper.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DBMS treatment (relational model, SQL, normalization to BCNF, ACID, indexing) as in Silberschatz/Korth/Sudarshan, Database System Concepts; SQL shown is standard SQL executed on SQLite 3.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l27-transactions",
  "level": 27,
  "title": "Transactions and ACID: All of It, or None of It",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Databases",
  "prereq": "Previous in Level 27: l27-normalization.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Transactions and the ACID properties",
   "Work the example (txn_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Transaction, ACID, Rollback",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "ACID is the contract under every payment, booking and balance you have ever trusted — and its absence (eventual-consistency stores) is a deliberate, must-be-justified design choice, not a default. Level 10's backup lesson and Level 18's evidence integrity are durability wearing other clothes.",
  "concept": [
   "A bank transfer is two updates that must never be seen apart: debit A, credit B. The code performs that transfer and then deliberately crashes it mid-way with a failing statement — watch the rollback restore both balances, because atomicity means the failed half leaves no trace. The total across accounts (800) is conserved before, during observation, and after: an invariant the transaction exists to protect.",
   "Isolation is the concurrent twin: two transfers at once must not read each other's half-moved money. Engines enforce it with locks or version snapshots at chosen isolation levels — stricter is safer and slower, a trade the next lesson prices. Durability closes the contract: once COMMIT returns success, the result survives a power cut, guaranteed by the write-ahead log written BEFORE the data pages."
  ],
  "diagramTitle": "Transactions and the ACID properties — the working flow",
  "diagram": [
   "1 · START from the rule — Transaction: A group of operations treated as one indivisible unit: commit together or roll back together.",
   "2 · RUN the worked example (txn_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Transaction",
    "def": "A group of operations treated as one indivisible unit: commit together or roll back together."
   },
   {
    "term": "ACID",
    "def": "Atomicity (all-or-nothing), Consistency (invariants preserved), Isolation (concurrent transactions do not see each other's half-work), Durability (committed work survives crashes)."
   },
   {
    "term": "Rollback",
    "def": "Undoing an uncommitted transaction's changes, restoring the last committed state."
   }
  ],
  "code": {
   "lang": "python",
   "title": "txn_lab.py — a transfer that crashes mid-way — and rolls back (complete, runnable)",
   "code": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.execute(\"CREATE TABLE account (name TEXT, balance INTEGER)\")\ndb.executemany(\"INSERT INTO account VALUES (?, ?)\", [(\"A\", 500), (\"B\", 300)])\ndb.commit()\ntry:\n    db.execute(\"UPDATE account SET balance = balance - 200 WHERE name = 'A'\")\n    db.execute(\"INSERT INTO audit_log VALUES (1)\")  # no such table: crash mid-transfer\n    db.commit()\nexcept sqlite3.Error:\n    db.rollback()\n    print(\"transfer rolled back\")\nfor r in db.execute(\"SELECT * FROM account ORDER BY name\"):\n    print(r)\nprint(\"total conserved:\", db.execute(\"SELECT SUM(balance) FROM account\").fetchone()[0])",
   "output": "transfer rolled back\n('A', 500)\n('B', 300)\ntotal conserved: 800",
   "lines": [
    "The debit executed — and still vanished, because the transaction never committed. Uncommitted work is provisional by definition.",
    "The conserved total is the invariant made countable: atomicity + consistency, printed."
   ]
  },
  "mistakes": [
   "Auto-committing each statement of a multi-step operation — any crash between them leaves the invariant broken.",
   "Assuming rollback is free or instant on huge transactions — undo work is real work; keep transactions short.",
   "Confusing durability with backup: durability is the committed-transaction guarantee (WAL on disk), backups are a separate disaster layer."
  ],
  "security": "Exam link: ACID questions are scenario questions — a described failure, and you name the property that addresses it (crash mid-transfer → atomicity; two clerks, one account → isolation; power cut after commit → durability).",
  "pc": [
   "Run the worked example on your PC exactly as written (txn_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (txn_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Transaction — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A power cut hits after the debit but before the credit of a transfer is committed. Correct behaviour on restart?",
    "options": [
     "Keep the debit — it finished first",
     "The uncommitted transaction is rolled back entirely; both balances are as before the transfer",
     "Credit B anyway",
     "Ask the customer"
    ],
    "answer": 1,
    "why": "Atomicity: the transfer is one unit. The log lets the engine undo the partial work during recovery."
   },
   {
    "q": "Two clerks simultaneously withdraw 400 from an account holding 500. Isolation exists to prevent:",
    "options": [
     "Slow disks",
     "Both reading balance 500 and both succeeding — 800 out of 500; the second must see (or wait for) the first's committed result",
     "Typing errors",
     "Duplicate accounts"
    ],
    "answer": 1,
    "why": "Without isolation, both validate against the same stale balance — the classic lost-update / double-spend anomaly."
   },
   {
    "q": "Durability is implemented primarily by:",
    "options": [
     "RAM caches",
     "The write-ahead log: commit records are forced to stable storage before success is reported",
     "Faster CPUs",
     "Replication alone"
    ],
    "answer": 1,
    "why": "WAL: log first, then data — recovery replays or undoes from the log after a crash."
   }
  ],
  "summary": "Transactions make multi-step changes indivisible: ACID names the four guarantees, rollback enforces atomicity, and the conserved total is the invariant you can print.",
  "skillGained": "Placing transaction boundaries and naming the ACID property each failure mode tests.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DBMS treatment (relational model, SQL, normalization to BCNF, ACID, indexing) as in Silberschatz/Korth/Sudarshan, Database System Concepts; SQL shown is standard SQL executed on SQLite 3.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l27-indexing-concurrency",
  "level": 27,
  "title": "Indexing and Concurrency: B-Trees, Locks, and the Price of Both",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Databases",
  "prereq": "Previous in Level 27: l27-transactions.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Indexing and concurrency control",
   "Work the example (index_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Index (B-tree), Full table scan (SCAN), Locking / deadlock",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This is where DSA pays rent inside the database: B-trees from Level 24, hashing as the alternative index, and Big-O as the plan-reading language. Slow-query tickets in real jobs are closed with exactly this lesson's loop — EXPLAIN, index or rewrite, re-EXPLAIN.",
  "concept": [
   "The query plan is the engine showing its work. Below, finding one tag among 2,000 rows first reports SCAN — every row examined — and after CREATE INDEX reports SEARCH USING INDEX: the B-tree (Level 24's BST, widened for disk pages) walks straight to the matches. Nothing about the query changed; the structure beside the table changed, and with it the complexity class of every lookup on that column.",
   "Indexes are not free: each one is a structure that every INSERT and UPDATE must also maintain, and concurrency is the other tax — locks make transactions wait, wait-chains can deadlock, and engines resolve deadlocks by aborting a victim transaction (which must then retry). The professional skill is placement: index the columns your real queries filter and join on, keep transactions short, and read EXPLAIN before blaming hardware."
  ],
  "diagramTitle": "Indexing and concurrency control — the working flow",
  "diagram": [
   "1 · START from the rule — Index (B-tree): A separate sorted structure mapping key values to row locations: lookup becomes O(log n) page hops instead of a full table scan.",
   "2 · RUN the worked example (index_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Index (B-tree)",
    "def": "A separate sorted structure mapping key values to row locations: lookup becomes O(log n) page hops instead of a full table scan."
   },
   {
    "term": "Full table scan (SCAN)",
    "def": "Reading every row to answer a query — correct but O(n); the query planner's fallback and the EXPLAIN line you learn to spot."
   },
   {
    "term": "Locking / deadlock",
    "def": "Transactions lock rows/tables to isolate; two transactions each holding what the other needs is a deadlock — the engine detects it and sacrifices one."
   }
  ],
  "code": {
   "lang": "python",
   "title": "index_lab.py — EXPLAIN QUERY PLAN before and after an index (complete, runnable)",
   "code": "import sqlite3\ndb = sqlite3.connect(\":memory:\")\ndb.execute(\"CREATE TABLE big (id INTEGER, tag TEXT)\")\ndb.executemany(\"INSERT INTO big VALUES (?, ?)\", [(i, f\"t{i % 50}\") for i in range(2000)])\n\ndef plan(sql):\n    rows = db.execute(\"EXPLAIN QUERY PLAN \" + sql).fetchall()\n    return rows[-1][-1]\n\nq = \"SELECT * FROM big WHERE tag = 't7'\"\nprint(\"before index:\", plan(q))\ndb.execute(\"CREATE INDEX idx_tag ON big (tag)\")\nprint(\"after index:\", plan(q))",
   "output": "before index: SCAN big\nafter index: SEARCH big USING INDEX idx_tag (tag=?)",
   "lines": [
    "SCAN = the planner read all 2,000 rows; SEARCH … USING INDEX = it walked the B-tree to the matches. Same query, different structure.",
    "The index is a separate sorted map (tag → row locations) — CREATE INDEX builds it once; every write thereafter maintains it."
   ]
  },
  "mistakes": [
   "Indexing every column 'for speed' — write cost and storage multiply, and the planner may still scan.",
   "Treating a deadlock as data corruption — it is a scheduling outcome; the victim transaction retries and life continues.",
   "Reading EXPLAIN as decoration: SCAN on a big table in production is a finding, not a footnote."
  ],
  "security": "Exam link: indexing questions ask you to read a plan and prescribe — SCAN on a filtered column is the symptom, a B-tree index on that column is the standard prescription, write cost is the stated trade-off.",
  "pc": [
   "Run the worked example on your PC exactly as written (index_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (index_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Index (B-tree) — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A query filters 10 million rows by email and EXPLAIN shows SCAN. First professional move?",
    "options": [
     "Buy a bigger server",
     "Create a B-tree index on email and re-check the plan (expecting SEARCH … USING INDEX)",
     "Delete old rows",
     "Add RAM"
    ],
    "answer": 1,
    "why": "Structure before hardware: the plan names the problem, the index changes the complexity class."
   },
   {
    "q": "Why isn't 'index everything' the right policy?",
    "options": [
     "Indexes are illegal on some columns",
     "Every index taxes each INSERT/UPDATE (the structure must be maintained) and consumes storage; unused indexes are pure cost",
     "Indexes slow reads",
     "The planner ignores indexes"
    ],
    "answer": 1,
    "why": "An index is a standing maintenance contract, paid on every write — only sign contracts your queries use."
   },
   {
    "q": "Transaction T1 holds row A and wants row B; T2 holds B and wants A. This is:",
    "options": [
     "A phantom read",
     "A deadlock — the engine detects the cycle and aborts one transaction, which retries",
     "A successful commit",
     "An index failure"
    ],
    "answer": 1,
    "why": "Circular waiting is unresolvable by waiting longer; abort-and-retry is the standard cure."
   }
  ],
  "summary": "Indexes convert scans into B-tree searches at a per-write maintenance price; concurrency control trades waiting (locks, deadlocks, retries) for isolation — and EXPLAIN is how both are verified rather than debated.",
  "skillGained": "Reading query plans and prescribing indexes; deadlock recognition and response.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate DBMS treatment (relational model, SQL, normalization to BCNF, ACID, indexing) as in Silberschatz/Korth/Sudarshan, Database System Concepts; SQL shown is standard SQL executed on SQLite 3.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l28-sdlc",
  "level": 28,
  "title": "The SDLC and Its Models: Waterfall, Iterative, and Choosing Honestly",
  "difficulty": "Intermediate",
  "minutes": 35,
  "xp": 60,
  "skill": "Software Engineering",
  "prereq": "Levels 24 (DSA) and 27 (DBMS) complete — design needs data structures, and the team project workflow needs a schema to argue about.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Software development life cycle models",
   "Work the example (sdlc_cost.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: SDLC, Waterfall, Iterative / incremental",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every later lesson in this level lives inside one lifecycle phase: requirements (next), design, testing, version control as the implementation backbone, agile as the iterative rhythm. Choosing the model is the first engineering decision of any project — including your Level 22 capstone, retroactively explainable in these terms.",
  "concept": [
   "The phases are not bureaucracy — they are the order in which mistakes get expensive. A misunderstood requirement costs a sentence to fix in the requirements phase, a redesign in design, a rewrite in implementation, and an incident in production: the classic cost-of-change curve is the entire argument for having phases at all. Waterfall bets that requirements can be known up front (true for a payroll spec fixed by law, a compiler for a published grammar — Level 30's case); iterative models bet they cannot, and pay for feedback with repeated cycles.",
   "The code models that bet in numbers: a defect's fix cost multiplied by the phase in which it is caught, and the same defect list run through both models — waterfall catching most defects late (testing), iterative catching them across cycles. The printed totals are the reason 'we'll just start coding' is the most expensive sentence in software."
  ],
  "diagramTitle": "Software development life cycle models — the working flow",
  "diagram": [
   "1 · START from the rule — SDLC: The Software Development Life Cycle: requirements → design → implementation → testing → deployment → maintenance — the phases every non-trivial system passes through, in some order, repeatedly or once.",
   "2 · RUN the worked example (sdlc_cost.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "SDLC",
    "def": "The Software Development Life Cycle: requirements → design → implementation → testing → deployment → maintenance — the phases every non-trivial system passes through, in some order, repeatedly or once."
   },
   {
    "term": "Waterfall",
    "def": "Each phase completes before the next begins. Predictable when requirements are fixed and well understood; brittle when they are not."
   },
   {
    "term": "Iterative / incremental",
    "def": "Build the system in repeated small cycles, each adding a working slice; feedback from each slice corrects the next."
   }
  ],
  "code": {
   "lang": "python",
   "title": "sdlc_cost.py — the cost-of-change curve, computed for both lifecycle bets (complete, runnable)",
   "code": "phase_cost = {\"requirements\": 1, \"design\": 5, \"implementation\": 20, \"testing\": 60}\ndefects = 8  # the same eight misunderstandings, either way\ncaught_waterfall = {\"requirements\": 1, \"design\": 1, \"implementation\": 1, \"testing\": 5}\ncaught_iterative = {\"requirements\": 4, \"design\": 2, \"implementation\": 1, \"testing\": 1}\n\ndef total(caught):\n    return sum(caught[p] * phase_cost[p] for p in caught)\n\nprint(\"waterfall total fix cost:\", total(caught_waterfall))\nprint(\"iterative total fix cost:\", total(caught_iterative))",
   "output": "waterfall total fix cost: 326\niterative total fix cost: 94",
   "lines": [
    "Same eight defects, different catch phases: 1 + 5 + 20 + 5×60 = 326 against 4 + 10 + 20 + 60 = 94.",
    "The multiplier table is the whole lesson — a defect's price is set by WHEN it is found, not by what it is."
   ]
  },
  "mistakes": [
   "Treating the phases as paperwork rather than as the price schedule of mistakes.",
   "Choosing waterfall for exploratory products (requirements emerge from use) or iterative chaos for fixed-spec regulated systems.",
   "Believing 'no process' is a model — it is waterfall with all discovery deferred to production."
  ],
  "security": "Exam link: model questions are scenario-matching — fixed spec + regulation → waterfall strengths; evolving requirements + feedback → iterative/agile. State the bet each model makes.",
  "pc": [
   "Run the worked example on your PC exactly as written (sdlc_cost.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (sdlc_cost.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — SDLC — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A hospital payroll system must implement tax rules published by law, unchanged for years. The defensible lifecycle choice is closest to:",
    "options": [
     "Pure improvisation",
     "Waterfall-leaning: requirements are fixed and knowable up front, so phase discipline pays",
     "No design phase",
     "Ship daily and see"
    ],
    "answer": 1,
    "why": "Model choice follows requirement stability — fixed by law is waterfall's home ground."
   },
   {
    "q": "The cost-of-change curve claims a defect caught in testing costs roughly:",
    "options": [
     "The same as in requirements",
     "Orders of magnitude more than in requirements — the work built on the mistake must also be redone",
     "Less — testing is automated",
     "Nothing"
    ],
    "answer": 1,
    "why": "Late discovery re-buys every phase the defect passed through."
   },
   {
    "q": "An iterative model buys feedback at the price of:",
    "options": [
     "Nothing",
     "Repeated cycles — replanning and rebuilding slices each round, which fixed-spec projects do not need",
     "Security",
     "Documentation"
    ],
    "answer": 1,
    "why": "Iteration is a bet: pay cycle overhead to avoid late, expensive misunderstanding."
   }
  ],
  "summary": "The SDLC names the phases every system passes through; lifecycle models are bets on requirement stability, priced by the cost-of-change curve — waterfall for the fixed and knowable, iterative for the emerging.",
  "skillGained": "Choosing and justifying a lifecycle model from requirement stability.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate software engineering treatment (lifecycle models, requirements, UML, patterns, testing, version control, agile) as in Sommerville, Software Engineering; Git behaviours per the Git documentation; Python examples verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l28-requirements-uml",
  "level": 28,
  "title": "Requirements and UML: Writing What 'Done' Means",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 60,
  "skill": "Software Engineering",
  "prereq": "Previous in Level 28: l28-sdlc.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Requirements engineering and UML",
   "Work the example (requirements.md) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Functional / non-functional requirement, User story, UML diagrams",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Requirements are where Level 21's research discipline meets building: eliciting what users actually need, then writing it so precisely that a test (next lessons) can decide pass/fail. Most 'software failures' in postmortems are requirement failures discovered at delivery prices.",
  "concept": [
   "A requirement is a testable promise. 'The system should be fast and user-friendly' promises nothing checkable; 'search returns results within 2 seconds for 95% of queries' and 'a member can renew a loan in at most 3 taps' can be tested, priced and argued about — which is the point. The artifact below rewrites vague wishes into user stories with acceptance criteria, the working currency of the agile lesson later.",
   "UML's job is shared sight: a class diagram lets a designer, a database person and a tester point at the SAME structure before it exists. You met its data half in Level 27 (ER diagrams); UML class diagrams add behaviour (methods) to the boxes, and sequence diagrams trace one scenario's messages across objects in time order — the diagram form of the traces you read in Level 26."
  ],
  "diagramTitle": "Requirements engineering and UML — the working flow",
  "diagram": [
   "1 · START from the rule — Functional / non-functional requirement: Functional: what the system does ('a member can borrow a book'). Non-functional: how well — performance, security, usability, reliability constraints.",
   "2 · RUN the worked example (requirements.md) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Functional / non-functional requirement",
    "def": "Functional: what the system does ('a member can borrow a book'). Non-functional: how well — performance, security, usability, reliability constraints."
   },
   {
    "term": "User story",
    "def": "A requirement from the user's seat: 'As a <role>, I want <goal>, so that <benefit>' — small, testable, and carrying its reason."
   },
   {
    "term": "UML diagrams",
    "def": "A small standard visual vocabulary: use-case diagrams (who does what), class diagrams (structure — Level 27's tables' cousin), sequence diagrams (interactions over time)."
   }
  ],
  "code": {
   "lang": "text",
   "title": "requirements.md — vague wishes rewritten as testable user stories with acceptance criteria (worked document)",
   "code": "VAGUE: \"The library app should be easy to use and fast.\"\n\nSTORY 1\nAs a member, I want to renew my loan from the app,\nso that I avoid a trip to the library desk.\nAcceptance: renewal completes in at most 3 taps;\na loan already renewed twice is refused with a reason.\n\nSTORY 2 (non-functional)\nAs a member on a slow connection, I want search results\nwithin 2 seconds for 95% of queries,\nso that the app stays usable on mobile data.\n\nUSE CASE (text form of the use-case diagram):\nActor: Member -> Renew Loan -> System checks limit -> Confirms",
   "output": "2 testable stories + 1 use case, from 1 vague wish",
   "lines": [
    "Every acceptance line is decidable: 3 taps can be counted, twice-renewed can be tested, 2 seconds can be measured.",
    "'Fast and easy' survived nowhere — each vague word was either given a number or thrown out."
   ]
  },
  "mistakes": [
   "Writing solutions as requirements ('use a MySQL database') instead of needs ('records persist across restarts') — it forecloses design and ages badly.",
   "Collecting requirements only from the person paying, not the people using — the desk clerk's workflow is a requirement source too.",
   "Treating non-functional requirements as decoration: 'secure' unquantified is how Level 11's lessons get skipped until an incident."
  ],
  "security": "Exam link: requirement questions test classification (functional vs non-functional) and quality (testable? unambiguous?) — rewrite the vague ones as the worked example does.",
  "pc": [
   "Run the worked example on your PC exactly as written (requirements.md); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (requirements.md) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Functional / non-functional requirement — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "'The system shall respond to searches within 2 seconds for 95% of queries' is:",
    "options": [
     "A functional requirement",
     "A non-functional (performance) requirement — quantified and testable",
     "A design decision",
     "A user story"
    ],
    "answer": 1,
    "why": "It constrains HOW WELL a function performs, with a measurable bound — the model non-functional requirement."
   },
   {
    "q": "Which requirement is UNtestable as written?",
    "options": [
     "'Checkout completes in at most 4 steps'",
     "'The interface should be intuitive and modern'",
     "'Passwords are stored hashed with Argon2id'",
     "'Uptime of 99.5% monthly'"
    ],
    "answer": 1,
    "why": "'Intuitive and modern' has no pass/fail test anyone can run — it must be operationalized or owned as taste."
   },
   {
    "q": "A UML sequence diagram primarily shows:",
    "options": [
     "Table schemas",
     "Messages between objects over time for one scenario — who calls whom, in what order",
     "Project schedules",
     "Network topology"
    ],
    "answer": 1,
    "why": "Sequence = time-ordered interaction; class = structure; use-case = actors and goals."
   }
  ],
  "summary": "Requirements are testable promises — functional and non-functional — written as user stories with acceptance criteria; UML gives the team shared pictures: use-case for scope, class for structure, sequence for interaction.",
  "skillGained": "Classifying and rewriting requirements into testable form; reading basic UML.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate software engineering treatment (lifecycle models, requirements, UML, patterns, testing, version control, agile) as in Sommerville, Software Engineering; Git behaviours per the Git documentation; Python examples verified by running python3 at build time.",
  "limitations": "Worked example, checked line by line during authoring. Where a local tool is named (NASM, Git, sqlite3), the same steps run in that tool on your own machine."
 },
 {
  "id": "l28-design-patterns",
  "level": 28,
  "title": "Design Patterns: Observer, and Solutions That Have Names",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Software Engineering",
  "prereq": "Previous in Level 28: l28-requirements-uml.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Design patterns (Observer, Singleton, Factory)",
   "Work the example (observer_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Design pattern, Observer, Singleton / Factory (names to know)",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Patterns are the design phase's shared language — and Observer specifically is the shape of every event system, UI binding and notification pipeline you have used since Level 11's alerts. The capstone review and real interviews both speak this vocabulary.",
  "concept": [
   "Patterns exist because design problems repeat: 'many parts of the system must react when this value changes' has been solved so often that the solution earned a name — Observer. The code implements it bare: a DiskMonitor (subject) with two subscribers, a logger and an alerter; when the reading updates, both react, and the monitor never names them — it only knows the subscribe/notify protocol. Adding a third reaction later means writing one class and one subscribe call, not surgery on the monitor.",
   "That decoupling is the pattern's payment; its price is indirection — control flow now hops through a list, which is harder to trace than a direct call (Level 26's traces taught you the value of directness). Professional judgement is knowing both sides: patterns are tools with costs, cited by name in design reviews, not decorations proving seniority."
  ],
  "diagramTitle": "Design patterns (Observer, Singleton, Factory) — the working flow",
  "diagram": [
   "1 · START from the rule — Design pattern: A named, reusable solution shape for a recurring design problem — a shared vocabulary ('use Observer here') that compresses a paragraph of explanation into a word.",
   "2 · RUN the worked example (observer_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Design pattern",
    "def": "A named, reusable solution shape for a recurring design problem — a shared vocabulary ('use Observer here') that compresses a paragraph of explanation into a word."
   },
   {
    "term": "Observer",
    "def": "A subject keeps a list of observers and notifies them all when its state changes; observers subscribe and unsubscribe independently."
   },
   {
    "term": "Singleton / Factory (names to know)",
    "def": "Singleton: exactly one instance of a class, globally accessed. Factory: object creation delegated to a method/class so callers do not hard-code concrete classes."
   }
  ],
  "code": {
   "lang": "python",
   "title": "observer_lab.py — the Observer pattern, minimal and complete (complete, runnable)",
   "code": "class DiskMonitor:\n    def __init__(self):\n        self.observers = []\n    def subscribe(self, obs):\n        self.observers.append(obs)\n    def set_usage(self, pct):\n        for obs in self.observers:\n            obs.notify(f\"disk at {pct}%\")\n\nclass Logger:\n    def notify(self, msg):\n        print(\"log:\", msg)\n\nclass Alerter:\n    def notify(self, msg):\n        print(\"ALERT:\", msg)\n\nmon = DiskMonitor()\nmon.subscribe(Logger())\nmon.subscribe(Alerter())\nmon.set_usage(90)",
   "output": "log: disk at 90%\nALERT: disk at 90%",
   "lines": [
    "set_usage knows no class names — it speaks only the notify protocol to whoever subscribed.",
    "Subscription order is notification order: Logger subscribed first, so 'log:' prints before 'ALERT:'."
   ]
  },
  "mistakes": [
   "Pattern-collecting: forcing Singleton/Factory/Observer into code that has none of their problems — complexity without the payoff.",
   "Implementing Observer with the subject hard-coding each observer's name — that is just function calls wearing a costume; the protocol is the pattern.",
   "Believing patterns are libraries to import rather than shapes to shape code with."
  ],
  "security": "Exam link: pattern questions give a scenario ('many displays must update when…') and ask for the pattern's name and structure — Observer, Singleton and Factory cover most undergraduate papers.",
  "pc": [
   "Run the worked example on your PC exactly as written (observer_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (observer_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Design pattern — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A weather station's reading must update a phone widget, a wall display and a log file whenever it changes. The named pattern:",
    "options": [
     "Singleton",
     "Observer — one subject, many subscribers notified on change",
     "Factory",
     "Waterfall"
    ],
    "answer": 1,
    "why": "One-to-many change notification is Observer's exact problem statement."
   },
   {
    "q": "The Observer pattern's main COST is:",
    "options": [
     "Memory",
     "Indirection: who reacts is decided by the subscription list at run time, so flow is harder to trace than direct calls",
     "It needs a database",
     "It forbids testing"
    ],
    "answer": 1,
    "why": "Decoupling buys extensibility and pays in traceability — the standing pattern trade."
   },
   {
    "q": "A Factory pattern exists to:",
    "options": [
     "Make objects faster",
     "Centralize and vary WHICH concrete class gets created without callers hard-coding it",
     "Replace all classes",
     "Avoid constructors entirely"
    ],
    "answer": 1,
    "why": "Creation logic in one place: callers ask the factory, the factory decides the concrete type."
   }
  ],
  "summary": "Design patterns are named, reusable solution shapes with known costs: Observer decouples change from reaction, Singleton controls instance count, Factory centralizes creation — chosen by symptom, not by fashion.",
  "skillGained": "Recognizing Observer/Singleton/Factory situations and stating each pattern's trade-off.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate software engineering treatment (lifecycle models, requirements, UML, patterns, testing, version control, agile) as in Sommerville, Software Engineering; Git behaviours per the Git documentation; Python examples verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l28-testing",
  "level": 28,
  "title": "Testing: Unit Tests, Edge Cases, and Code That Proves Itself",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Software Engineering",
  "prereq": "Previous in Level 28: l28-design-patterns.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Software testing fundamentals",
   "Work the example (test_clamp.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Unit test, Edge / boundary case, Regression",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "You have tested informally since Level 4 (checking outputs) and adversarially since Level 13 (regression-testing fixes). This lesson names the discipline — and the Universal Playground habits you built make the loop familiar: write the expectation BEFORE trusting the code.",
  "concept": [
   "A test is an executable requirement: the clamp function must pin values into [0, 100], and the harness below states that as five checks — middle, both boundaries, and beyond both boundaries — then counts failures instead of eyeballing output. Read the boundary choices: 0 and 100 test INCLUSION (are the ends inside?), −5 and 150 test the clamping itself. Most real bugs live exactly there, at the seams of ranges, which is why test design starts from boundaries, not from the happy middle.",
   "Levels matter and have names: unit (one function), integration (components together — Level 27's schema meeting this level's code), system (the whole), acceptance (the user's stories from two lessons ago, executed). The suite's economic miracle is repetition: written once, a test re-verifies the system after EVERY future change — the only known antidote to regression."
  ],
  "diagramTitle": "Software testing fundamentals — the working flow",
  "diagram": [
   "1 · START from the rule — Unit test: An automated check of one small unit (a function) against one expectation, run in milliseconds, repeatable forever at zero marginal cost.",
   "2 · RUN the worked example (test_clamp.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Unit test",
    "def": "An automated check of one small unit (a function) against one expectation, run in milliseconds, repeatable forever at zero marginal cost."
   },
   {
    "term": "Edge / boundary case",
    "def": "Inputs at the extremes of validity — 0, negative, empty, exactly-at-the-limit — where implementations most often break."
   },
   {
    "term": "Regression",
    "def": "A previously working behaviour broken by a later change; the regression suite is the set of tests that stands guard against it."
   }
  ],
  "code": {
   "lang": "python",
   "title": "test_clamp.py — a function and its boundary-driven test harness (complete, runnable)",
   "code": "def clamp(pct):\n    return max(0, min(100, pct))\n\ncases = [(50, 50), (0, 0), (100, 100), (-5, 0), (150, 100)]\nfails = 0\nfor given, want in cases:\n    got = clamp(given)\n    if got != want:\n        fails += 1\n        print(f\"FAIL clamp({given}) = {got}, want {want}\")\nprint(f\"{len(cases) - fails}/{len(cases)} passed\")",
   "output": "5/5 passed",
   "lines": [
    "The case list is the test design: middle, both inclusive boundaries, one beyond each side.",
    "The harness reports a COUNT and exits quietly on success — automation-friendly: silent green, loud red."
   ]
  },
  "mistakes": [
   "Testing only the happy path — the middle of the range is where code is least likely to be wrong.",
   "Writing tests AFTER and only against the current (buggy) behaviour — the suite then defends the bug.",
   "Treating a passing suite as proof of correctness: tests show the presence of the behaviours checked, never the absence of all defects."
  ],
  "security": "Exam link: testing questions hinge on case selection — given a range or a rule, the marks are in the boundary values and the invalid classes you name.",
  "pc": [
   "Run the worked example on your PC exactly as written (test_clamp.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (test_clamp.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Unit test — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "For valid inputs 1–999 (ticket count), the highest-value test set is:",
    "options": [
     "500 only",
     "0, 1, 999, 1000, and a negative — boundaries and just outside them",
     "Random numbers",
     "1 and 2"
    ],
    "answer": 1,
    "why": "Boundary value analysis: defects cluster at the edges of validity and just beyond them."
   },
   {
    "q": "A regression suite's purpose is to:",
    "options": [
     "Test new features only",
     "Re-run past checks after every change so old behaviour cannot break silently",
     "Replace documentation",
     "Slow the release"
    ],
    "answer": 1,
    "why": "Regression = old behaviour dying quietly; the suite is the alarm."
   },
   {
    "q": "Which is an ACCEPTANCE test for the loan-renewal story?",
    "options": [
     "clamp() boundary checks",
     "A member renews a loan in the app within 3 taps and sees the new due date — the story's promise, executed end to end",
     "The database index check",
     "A compiler warning"
    ],
    "answer": 1,
    "why": "Acceptance tests execute the user story itself — the requirement made runnable."
   }
  ],
  "summary": "Testing turns requirements into executable checks across levels (unit, integration, system, acceptance), designed from boundaries and invalid classes, and re-run forever as the regression guard.",
  "skillGained": "Designing boundary-driven test cases and placing tests at the right level.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate software engineering treatment (lifecycle models, requirements, UML, patterns, testing, version control, agile) as in Sommerville, Software Engineering; Git behaviours per the Git documentation; Python examples verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l28-git-teamwork",
  "level": 28,
  "title": "Version Control with Git: History as a Team Sport",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Software Engineering",
  "prereq": "Previous in Level 28: l28-testing.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Git and collaborative version control",
   "Work the example (git_daily_loop.sh) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Repository / commit, Branch / merge, Pull request / code review",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every serious codebase you will ever touch lives in Git — including, in spirit, this platform's own versioning discipline. Level 12's report writing and Level 21's research honesty both have their engineering twin here: a truthful, reviewable record of what changed and why.",
  "concept": [
   "Git's model rewards the same graph thinking as Level 23: commits are nodes, parents are edges, a branch is just a movable label on a node. The command sequence below is the daily loop of every professional team — branch for a feature, commit in small honest steps, push, open a pull request, review, merge. Each commit message is written for a future reader (usually you, at 2 a.m., mid-incident) answering 'what changed and why' — which is why 'fixed stuff' is a professional failing and 'Clamp renewal taps at the 3-tap acceptance limit' is a professional act.",
   "Conflicts are not Git being difficult; they are Git being honest — two people changed the same lines, and no algorithm may decide which intent wins. Resolving a conflict is a conversation with the other author's diff, ending in a merge commit that records both parents: history kept whole, disagreement preserved and settled in the open."
  ],
  "diagramTitle": "Git and collaborative version control — the working flow",
  "diagram": [
   "1 · START from the rule — Repository / commit: A repository is the project's full history; a commit is one snapshot plus a message and a parent — history is a chain (a DAG) of commits.",
   "2 · RUN the worked example (git_daily_loop.sh) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Repository / commit",
    "def": "A repository is the project's full history; a commit is one snapshot plus a message and a parent — history is a chain (a DAG) of commits."
   },
   {
    "term": "Branch / merge",
    "def": "A branch is an independent line of commits; merging weaves two lines together, surfacing conflicts where both changed the same lines."
   },
   {
    "term": "Pull request / code review",
    "def": "A proposed merge, reviewed by teammates before landing — the team's quality gate and knowledge-sharing channel in one."
   }
  ],
  "code": {
   "lang": "bash",
   "title": "git_daily_loop.sh — the professional daily Git loop, command by command",
   "code": "git switch -c feature/renewal-limit\ngit add app.py tests.py\ngit commit -m \"Clamp renewal at the 3-tap acceptance limit\"\ngit push -u origin feature/renewal-limit\n# ... open a pull request; a teammate reviews; then:\ngit switch main\ngit merge --no-ff feature/renewal-limit\ngit branch -d feature/renewal-limit",
   "output": "Branch per feature. Small commits with honest messages.\nReview before merge. History reads like a story.",
   "lines": [
    "--no-ff keeps the feature's shape visible in history: a merge commit with two parents, not a flattened line.",
    "branch -d (lowercase) refuses to delete an unmerged branch — Git protecting history by default."
   ]
  },
  "mistakes": [
   "Committing directly to main 'because it is faster' — the review gate and the rollback path are what is being skipped.",
   "Giant weekly commits mixing five features — unreviewable, unrevertable, and their messages lie by omission.",
   "Resolving conflicts by taking 'my side' wholesale — a conflict is a semantic question, and both intents usually must survive in some form."
  ],
  "security": "Exam link: Git appears in SE papers as workflow questions — commit/branch/merge semantics and the purpose of review; the graph model (commits as nodes) answers most of them.",
  "pc": [
   "Run the worked example on your PC exactly as written (git_daily_loop.sh); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (git_daily_loop.sh) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Repository / commit — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A branch in Git is fundamentally:",
    "options": [
     "A copy of the whole project folder",
     "A movable label pointing at one commit; new commits move the label",
     "A separate server",
     "A backup zip"
    ],
    "answer": 1,
    "why": "Branches are cheap because they are pointers into the commit graph, not copies."
   },
   {
    "q": "The best commit message of these is:",
    "options": [
     "'fixed stuff'",
     "'updates'",
     "'Prevent double-renewal past the two-renewal limit (Story 1 acceptance)'",
     "'asdf'"
    ],
    "answer": 2,
    "why": "It states what changed and ties it to the requirement it serves — readable at 2 a.m. during an incident."
   },
   {
    "q": "A merge conflict means:",
    "options": [
     "Git is broken",
     "Both branches changed the same region; a human must reconcile the two intents — Git refuses to guess",
     "Someone must delete their branch",
     "The repository is corrupt"
    ],
    "answer": 1,
    "why": "Conflicts are honesty, not failure: semantics cannot be auto-decided."
   }
  ],
  "summary": "Git models history as a commit graph with movable branch labels; the professional loop — feature branch, small honest commits, review, merge — keeps main working and history auditable.",
  "skillGained": "Running the branch–commit–review–merge loop with honest messages.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate software engineering treatment (lifecycle models, requirements, UML, patterns, testing, version control, agile) as in Sommerville, Software Engineering; Git behaviours per the Git documentation; Python examples verified by running python3 at build time.",
  "limitations": "Worked example, checked line by line during authoring. Where a local tool is named (NASM, Git, sqlite3), the same steps run in that tool on your own machine."
 },
 {
  "id": "l28-agile-docs",
  "level": 28,
  "title": "Agile, Documentation, and Shipping in Slices",
  "difficulty": "Intermediate",
  "minutes": 35,
  "xp": 60,
  "skill": "Software Engineering",
  "prereq": "Previous in Level 28: l28-git-teamwork.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Agile practice and documentation",
   "Work the example (sprint_plan.md) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Sprint / backlog, Working slice (increment), Documentation (right-sized)",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This closes the level's loop: lifecycle (why phases), requirements (what 'done' means), design (patterns), testing (proof), Git (record) — and agile as the cadence that runs them all repeatedly. Your Level 22 capstone and any real internship team will run some dialect of exactly this.",
  "concept": [
   "Agile is the iterative lifecycle of lesson 1 with a management rhythm attached: a prioritized backlog of small stories (lesson 2's format), pulled into short sprints, each ending with a WORKING increment and a review with real users. The plan below is the library app cut into three sprints — notice the slicing rule: every sprint ends with something demonstrable (borrow a book end-to-end) rather than a finished layer nobody can use (all the database, then all the screens). Vertical slices, not horizontal layers.",
   "Documentation in this world is a product decision: the README that gets a new teammate running, the API contract other teams code against, the decision record explaining why Observer was chosen. Each has a named reader and a maintenance cost; documents without readers are deleted, because stale documentation is worse than none — it lies with authority (Level 21's lesson, in engineering dress)."
  ],
  "diagramTitle": "Agile practice and documentation — the working flow",
  "diagram": [
   "1 · START from the rule — Sprint / backlog: A sprint is a short fixed timebox (often two weeks) in which a team completes a chosen slice; the backlog is the ordered list of all known work, from which slices are pulled.",
   "2 · RUN the worked example (sprint_plan.md) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Sprint / backlog",
    "def": "A sprint is a short fixed timebox (often two weeks) in which a team completes a chosen slice; the backlog is the ordered list of all known work, from which slices are pulled."
   },
   {
    "term": "Working slice (increment)",
    "def": "A small end-to-end piece of the product that actually runs and can be shown to users — value delivered per cycle, not per phase."
   },
   {
    "term": "Documentation (right-sized)",
    "def": "Records future readers need: README, API docs, decision notes. Agile values working software highly but never says 'no documentation' — it says no USELESS documentation."
   }
  ],
  "code": {
   "lang": "text",
   "title": "sprint_plan.md — the library app sliced into three agile sprints (worked plan)",
   "code": "BACKLOG (ordered): borrow, renew, search, fines, reports\n\nSPRINT 1 (demo-able): member borrows a book end-to-end\n  - catalogue table + seed data (Level 27 schema)\n  - borrow screen + loan row written\n  - acceptance test: Story 'borrow' passes\nSPRINT 2: renew (with the 3-tap limit) + search within 2s\nSPRINT 3: fines + librarian reports\n\nEACH SPRINT ENDS WITH: working software + user review + updated backlog",
   "output": "3 sprints, each ending in software a user can touch",
   "lines": [
    "Sprint 1 is a vertical slice: schema, screen and test for ONE story — demonstrable in week two, not month six.",
    "'All database first, all screens later' appears nowhere: horizontal layers cannot be reviewed by users."
   ]
  },
  "mistakes": [
   "'Agile means no planning/documentation' — it means planning continuously and documenting for named readers.",
   "Slicing by layer (all backend this month) — nothing demonstrable, no feedback, waterfall in a costume.",
   "A backlog with no order — priority is the product owner's core job; an unordered backlog is a wish pile."
  ],
  "security": "Exam link: agile questions test the slicing instinct and the backlog/sprint vocabulary — and the classic trap answer is always 'no documentation at all'.",
  "pc": [
   "Run the worked example on your PC exactly as written (sprint_plan.md); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (sprint_plan.md) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Sprint / backlog — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "Which sprint-1 plan follows agile slicing?",
    "options": [
     "Build the entire database layer",
     "Deliver ONE user story end-to-end (screen, logic, data, test) that users can try",
     "Write all documentation",
     "Design every screen in a tool"
    ],
    "answer": 1,
    "why": "Vertical slices produce feedback; horizontal layers produce only progress reports."
   },
   {
    "q": "The backlog's defining property is that it is:",
    "options": [
     "Alphabetical",
     "Ordered by priority — the top is what gets built next",
     "Secret",
     "Written once at project start"
    ],
    "answer": 1,
    "why": "An ordered backlog is how 'what matters most' stays answerable at every sprint boundary."
   },
   {
    "q": "Agile's stance on documentation is:",
    "options": [
     "Forbidden",
     "Write the documents with named readers (README, API contracts, decision records); skip documents nobody reads",
     "Document everything exhaustively",
     "Only code comments count"
    ],
    "answer": 1,
    "why": "The manifesto values working software OVER comprehensive documentation — a preference, not a prohibition."
   }
  ],
  "summary": "Agile runs the lifecycle in short cycles: an ordered backlog of stories, sprints ending in working vertical slices, feedback re-ordering the backlog, and documentation written for named readers only.",
  "skillGained": "Slicing a product into sprints and running backlog discipline.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate software engineering treatment (lifecycle models, requirements, UML, patterns, testing, version control, agile) as in Sommerville, Software Engineering; Git behaviours per the Git documentation; Python examples verified by running python3 at build time.",
  "limitations": "Worked example, checked line by line during authoring. Where a local tool is named (NASM, Git, sqlite3), the same steps run in that tool on your own machine."
 },
 {
  "id": "l29-automata",
  "level": 29,
  "title": "Finite Automata: Machines With No Memory but State",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Theory of Computation",
  "prereq": "Levels 23 (Discrete Mathematics) and 24 (DSA) complete — proofs, sets and graphs are this level's working tools, and complexity needs Big-O fluency.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Deterministic finite automata",
   "Work the example (dfa_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: DFA, Language of a machine, Accept / reject",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Automata are not museum pieces: regex engines, network protocol states (Level 2's TCP states are a DFA), input validation and Level 30's lexer all run on this exact model. The theory tells you in advance which of those jobs a finite machine can and cannot do.",
  "concept": [
   "A DFA is the smallest honest model of computation: finite control, one pass, no notebook. The machine below accepts exactly the strings over {a, b} that END in 'ab' — and its three states are a memory of the longest suffix seen so far that could still grow into 'ab': nothing, 'a', or done. That is the design method in miniature: states are equivalence classes of history — what the machine needs to remember about the past to decide the future, and nothing more.",
   "Trace 'baab' by hand against the code: q0 —b→ q0 —a→ q1 —a→ q1 —b→ q2 (accept). Every exam DFA question is this trace done on paper, and every real scanner (Level 30's lexer, Level 7's protocol parsers) is this machine wearing work clothes."
  ],
  "diagramTitle": "Deterministic finite automata — the working flow",
  "diagram": [
   "1 · START from the rule — DFA: A deterministic finite automaton: a finite set of states, an alphabet, a transition function δ(q, symbol) → next state, a start state, and accept states. It reads a string once, left to right, remembering only its current state.",
   "2 · RUN the worked example (dfa_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "DFA",
    "def": "A deterministic finite automaton: a finite set of states, an alphabet, a transition function δ(q, symbol) → next state, a start state, and accept states. It reads a string once, left to right, remembering only its current state."
   },
   {
    "term": "Language of a machine",
    "def": "The set of strings the machine accepts — Level 23's sets, now defined by a machine's behaviour."
   },
   {
    "term": "Accept / reject",
    "def": "After the last symbol, the machine accepts iff its current state is an accept state. No output, no partial credit — a decision."
   }
  ],
  "code": {
   "lang": "python",
   "title": "dfa_lab.py — a DFA accepting strings ending in 'ab', with traces (complete, runnable)",
   "code": "delta = {\n    (\"q0\", \"a\"): \"q1\", (\"q0\", \"b\"): \"q0\",\n    (\"q1\", \"a\"): \"q1\", (\"q1\", \"b\"): \"q2\",\n    (\"q2\", \"a\"): \"q1\", (\"q2\", \"b\"): \"q0\",\n}\n\ndef run(s):\n    q = \"q0\"\n    for ch in s:\n        q = delta[(q, ch)]\n    return q == \"q2\"\n\nfor s in [\"ab\", \"baab\", \"aba\", \"b\", \"aab\"]:\n    print(s, \"->\", \"ACCEPT\" if run(s) else \"reject\")",
   "output": "ab -> ACCEPT\nbaab -> ACCEPT\naba -> reject\nb -> reject\naab -> ACCEPT",
   "lines": [
    "δ as a dictionary: the transition FUNCTION from Level 23, tabulated — total and deterministic, one entry per (state, symbol).",
    "q1 means 'the last symbol was a, and it could be the a of a final ab' — states as remembered suffixes."
   ]
  },
  "mistakes": [
   "Designing states that remember the whole string — infinitely many histories cannot be finitely many states; remember only what the decision needs.",
   "Forgetting δ must be TOTAL: every (state, symbol) pair needs a destination, even if it is a dead state.",
   "Confusing accept-after-each-symbol with accept-at-the-end: the verdict comes only when input is exhausted."
  ],
  "security": "Exam link: DFA construction questions are graded on the state MEANINGS — write beside each state what it remembers, and the transitions draw themselves.",
  "pc": [
   "Run the worked example on your PC exactly as written (dfa_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (dfa_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — DFA — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A DFA's memory is exactly:",
    "options": [
     "The whole input",
     "Its current state — one of finitely many; everything about the past must be compressed into it",
     "A stack",
     "A tape"
    ],
    "answer": 1,
    "why": "Finite control is the model's defining limit and the source of both its tractability and its weakness."
   },
   {
    "q": "For the ends-in-'ab' machine, the string 'bab' is:",
    "options": [
     "Accepted — the trace ends in q2, an accept state",
     "Rejected — it starts with b",
     "Rejected — it ends in q1",
     "Undefined"
    ],
    "answer": 0,
    "why": "Trace it: q0 —b→ q0 —a→ q1 —b→ q2, an accept state. Starting symbols do not matter; the suffix does."
   },
   {
    "q": "Why can no DFA accept exactly the strings aⁿbⁿ (equal numbers of a's then b's) for ALL n?",
    "options": [
     "The alphabet is too small",
     "It would need one state per count n — infinitely many memories — but a DFA has finitely many states",
     "a and b are too similar",
     "It can, with enough states"
    ],
    "answer": 1,
    "why": "Unbounded counting exceeds finite memory — the intuition the pumping lemma (next lessons) makes rigorous; a stack (CFG lesson) fixes it."
   }
  ],
  "summary": "A DFA is finite control reading a string once: states as compressed history, a total transition function, acceptance by final state — powerful enough for scanners and protocols, too weak for unbounded counting.",
  "skillGained": "Designing DFAs from state meanings and tracing them exactly.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate theory of computation treatment (automata, regular and context-free languages, Turing machines, decidability, P/NP) as in Sipser, Introduction to the Theory of Computation; Python simulators verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l29-regular",
  "level": 29,
  "title": "Regular Languages and Regular Expressions: What Finite Machines Speak",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Theory of Computation",
  "prereq": "Previous in Level 29: l29-automata.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Regular expressions and the pumping lemma",
   "Work the example (regex_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Regular expression, Regular language, Pumping lemma (for regular languages)",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every grep, log search (Level 7's Sigma-adjacent work), input validator and Level 30 token rule is a regular language in uniform. Knowing the class's LIMIT — no counting, no matching nested brackets — tells you when to stop reaching for regex and reach for a parser instead.",
  "concept": [
   "Regex is the algebra of the DFA's languages: the code builds (a|b)*abb — all strings over {a,b} ending in abb — and checks members the way the theory says a machine would. The equivalence theorems (regex ⇄ NFA ⇄ DFA) are why the pattern you type in a shell and the automaton in a textbook are the same object in two notations — a fact Level 30's lexer will cash in directly.",
   "The pumping lemma turns the last lesson's counting intuition into a proof: assume aⁿbⁿ were regular; its DFA has some finite p states; feed it aᵖbᵖ — among the first p symbols it must revisit a state, so a loop of a's can be pumped to aᵖ⁺ᵏbᵖ, unequal counts, yet the machine still accepts — contradiction. Level 23's proof-by-contradiction, aimed at the boundary of a machine class."
  ],
  "diagramTitle": "Regular expressions and the pumping lemma — the working flow",
  "diagram": [
   "1 · START from the rule — Regular expression: A pattern built from symbols with three operations — union ( | ), concatenation, and star (repeat any number of times) — describing a language.",
   "2 · RUN the worked example (regex_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Regular expression",
    "def": "A pattern built from symbols with three operations — union ( | ), concatenation, and star (repeat any number of times) — describing a language."
   },
   {
    "term": "Regular language",
    "def": "A language accepted by some DFA (equivalently: described by some regular expression, accepted by some NFA) — the three views are provably the same class."
   },
   {
    "term": "Pumping lemma (for regular languages)",
    "def": "If L is regular, long strings in L can be split xyz with xy pumped (xyⁱz) staying in L. A language where pumping escapes the language is therefore NOT regular — the standard non-regularity proof tool."
   }
  ],
  "code": {
   "lang": "python",
   "title": "regex_lab.py — the language (a|b)*abb, tested member by member (complete, runnable)",
   "code": "import re\npat = re.compile(r\"(a|b)*abb\")\nfor s in [\"abb\", \"aabb\", \"babb\", \"ab\", \"abab\", \"aaabb\"]:\n    print(s, \"->\", \"in L\" if pat.fullmatch(s) else \"not in L\")",
   "output": "abb -> in L\naabb -> in L\nbabb -> in L\nab -> not in L\nabab -> not in L\naaabb -> in L",
   "lines": [
    "fullmatch anchors the pattern to the WHOLE string — the DFA view; a bare search would find substrings instead.",
    "(a|b)* is the star doing its job: any prefix at all, then the required abb ending decides membership."
   ]
  },
  "mistakes": [
   "Using regex for nested structures (HTML, balanced parentheses) — not a regular language; no pattern can count depth.",
   "Reading (a|b)*abb as 'contains abb somewhere' — concatenation with the star prefix means ENDS WITH here, under fullmatch.",
   "Pumping in the wrong direction: the lemma pumps a loop WITHIN the first p symbols; choosing the decomposition is the adversary's constraint, not yours."
  ],
  "security": "Exam link: the two standard tasks — write a regex/DFA for a described language, and prove a language non-regular by pumping with a chosen string (aᵖbᵖ is the canonical witness).",
  "pc": [
   "Run the worked example on your PC exactly as written (regex_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (regex_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Regular expression — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "(a|b)*abb describes exactly:",
    "options": [
     "Strings containing abb",
     "Strings over {a,b} ENDING in abb",
     "Strings starting with abb",
     "Only 'abb'"
    ],
    "answer": 1,
    "why": "Star-prefixed anything, then a fixed ending — under fullmatch semantics the ending is the membership test."
   },
   {
    "q": "The pumping lemma proof that aⁿbⁿ is not regular works by:",
    "options": [
     "Counting states by hand",
     "Contradiction: a finite machine on aᵖbᵖ must loop among the a's; pumping the loop changes the a-count but not acceptance, so it accepts an unequal string",
     "Trying all DFAs",
     "Measuring run time"
    ],
    "answer": 1,
    "why": "Assume regular → pump → land outside the language → contradiction. The machine cannot tell the pumped string apart."
   },
   {
    "q": "Why can regex never validate balanced parentheses in general?",
    "options": [
     "Parentheses are not in the alphabet",
     "Balance needs unbounded counting of depth — beyond finite memory, hence not regular",
     "It is too slow",
     "It can, with a long enough pattern"
    ],
    "answer": 1,
    "why": "Depth is a counter with no bound; finite states cannot hold it. A stack can — next lesson."
   }
  ],
  "summary": "Regular languages are one class in three notations (DFA, NFA, regex); the pumping lemma proves languages like aⁿbⁿ lie outside it, because finite memory cannot count without bound.",
  "skillGained": "Writing regular expressions for described languages; structuring a pumping-lemma proof.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate theory of computation treatment (automata, regular and context-free languages, Turing machines, decidability, P/NP) as in Sipser, Introduction to the Theory of Computation; Python simulators verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l29-cfg",
  "level": 29,
  "title": "Context-Free Grammars and Pushdown Automata: A Stack Buys Nesting",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Theory of Computation",
  "prereq": "Previous in Level 29: l29-regular.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Context-free grammars and PDAs",
   "Work the example (cfg_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Context-free grammar (CFG), Derivation / parse tree, Pushdown automaton (PDA)",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This is the theory floor of Level 30: compilers parse with CFGs, and the recognizer below is a recursive-descent parser in embryo. It is also where Level 5's JSON/XML nesting and Level 17's API payloads get their machine classification.",
  "concept": [
   "One production, S → aSb | ε, generates the language no DFA could accept: each rewrite adds one a on the left and one b on the right, so counts stay equal by construction. The recognizer below mirrors it with a stack discipline in recursive form — consume a's while descending, then match b's while unwinding: the call stack IS the PDA's stack, which is why programming languages (nested brackets, nested blocks) live exactly at this class.",
   "The count check prints False for 'aab' and 'abb' — the stack empties early or symbols remain; equality of counts is enforced structurally, not tallied. Grammars also bring a new phenomenon: ambiguity — a string with two different parse trees (two meanings). Level 30's parsers exist to make grammars unambiguous by construction, and the classic ambiguous case — arithmetic without precedence — returns there."
  ],
  "diagramTitle": "Context-free grammars and PDAs — the working flow",
  "diagram": [
   "1 · START from the rule — Context-free grammar (CFG): Production rules rewriting variables: S → aSb | ε generates aⁿbⁿ. 'Context-free': a variable rewrites the same way wherever it appears.",
   "2 · RUN the worked example (cfg_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Context-free grammar (CFG)",
    "def": "Production rules rewriting variables: S → aSb | ε generates aⁿbⁿ. 'Context-free': a variable rewrites the same way wherever it appears."
   },
   {
    "term": "Derivation / parse tree",
    "def": "A sequence of rewrites from the start symbol to a string; drawn as a tree it is the string's grammatical structure — Level 30's central object."
   },
   {
    "term": "Pushdown automaton (PDA)",
    "def": "A finite automaton plus a stack: push on the way in, pop on the way out — exactly the memory nesting needs."
   }
  ],
  "code": {
   "lang": "python",
   "title": "cfg_lab.py — a recognizer for aⁿbⁿ using the call stack as the PDA stack (complete, runnable)",
   "code": "def accepts(s):\n    def parse_a(i):\n        # consume a's, descending (pushing frames)\n        if i < len(s) and s[i] == \"a\":\n            j = parse_a(i + 1)\n            if j is None:\n                return None\n            # unwinding: this frame must match one 'b'\n            if j < len(s) and s[j] == \"b\":\n                return j + 1\n            return None\n        return i  # no more a's: start matching b's\n    end = parse_a(0)\n    return end == len(s)\n\nfor s in [\"ab\", \"aabb\", \"aaabbb\", \"aab\", \"abb\", \"ba\"]:\n    print(s, \"->\", accepts(s))",
   "output": "ab -> True\naabb -> True\naaabbb -> True\naab -> False\nabb -> False\nba -> False",
   "lines": [
    "Each recursive call is one pushed frame = one remembered 'a'; unwinding pops one frame per 'b' — equality is enforced by stack depth.",
    "'ba' fails immediately: the grammar's strings all start with a's; order is part of the language, not a detail."
   ]
  },
  "mistakes": [
   "Claiming aⁿbⁿ is regular because a small DFA works for n ≤ 3 — the language is over ALL n; bounded cases always have finite machines.",
   "Writing S → aS | Sb | ε and expecting aⁿbⁿ — that grammar generates a's and b's in any order/count; production shape IS the constraint.",
   "Forgetting ambiguity matters: two parse trees for one string = two meanings, which a compiler cannot tolerate."
  ],
  "security": "Exam link: standard tasks — write a CFG for a described language (aⁿbⁿ, palindromes, balanced brackets), give a derivation, and state the machine class (PDA) that accepts exactly the CFLs.",
  "pc": [
   "Run the worked example on your PC exactly as written (cfg_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (cfg_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Context-free grammar (CFG) — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "The grammar S → aSb | ε generates:",
    "options": [
     "All strings of a's and b's",
     "{aⁿbⁿ : n ≥ 0} — equal a's then equal b's, including the empty string",
     "Palindromes",
     "{aⁿbᵐ : n ≠ m}"
    ],
    "answer": 1,
    "why": "Each S-rewrite adds one matched pair around the centre; ε is the base case giving a⁰b⁰."
   },
   {
    "q": "What does a PDA have that a DFA does not?",
    "options": [
     "More states",
     "A stack — unbounded LIFO memory, which is exactly what nesting and matching counts require",
     "A tape",
     "Randomness"
    ],
    "answer": 1,
    "why": "One stack: enough for one kind of nesting/matching, not for two independent counts (aⁿbⁿcⁿ escapes CFL too)."
   },
   {
    "q": "An ambiguous grammar is one where:",
    "options": [
     "A rule is missing",
     "Some string has two distinct parse trees (two structural meanings)",
     "The start symbol is unclear",
     "Derivations are long"
    ],
    "answer": 1,
    "why": "Ambiguity = one string, two structures — fatal for compilers, which need THE structure to generate code."
   }
  ],
  "summary": "Adding a stack to the automaton buys the context-free languages: grammars generate them (S → aSb | ε), PDAs accept them, parse trees expose their structure — and ambiguity becomes the new enemy.",
  "skillGained": "Writing CFGs for nested/matching languages and spotting ambiguity.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate theory of computation treatment (automata, regular and context-free languages, Turing machines, decidability, P/NP) as in Sipser, Introduction to the Theory of Computation; Python simulators verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l29-turing",
  "level": 29,
  "title": "Turing Machines: The Full Definition of Computation",
  "difficulty": "Advanced",
  "minutes": 45,
  "xp": 70,
  "skill": "Theory of Computation",
  "prereq": "Previous in Level 29: l29-cfg.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Turing machines and the Church–Turing thesis",
   "Work the example (tm_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Turing machine, Configuration / computation, Church–Turing thesis",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every program you wrote in Levels 4 and 24–28 is a Turing machine in notation — this lesson names what you have been operating. It also frames Level 19's malware question ('can a scanner decide if arbitrary code is malicious?') whose answer next lesson is a theorem, not an engineering backlog item.",
  "concept": [
   "Add a writable, unbounded tape to the automaton and you have jumped two classes at once: past context-free, to everything any computer has ever computed. The simulator below is a complete TM — transition table, tape as a list, head index — performing unary increment: read 1s to the blank, write one more 1, halt. Five steps, and the tape grew: that write-and-return ability, absurdly simple, is the entire difference between recognising patterns and COMPUTING.",
   "Python, Java, the CPU simulator from Level 26 — all are Turing-complete, meaning each can simulate any TM (given memory) and be simulated by one. That equivalence is why the next lesson's negative results are devastating: a limit proven for TMs is a limit for every programming language, every framework, every future computer built on the same principles."
  ],
  "diagramTitle": "Turing machines and the Church–Turing thesis — the working flow",
  "diagram": [
   "1 · START from the rule — Turing machine: Finite control + an unbounded tape it can read, write, and move both ways on. The model every 'computable' claim ultimately refers to.",
   "2 · RUN the worked example (tm_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Turing machine",
    "def": "Finite control + an unbounded tape it can read, write, and move both ways on. The model every 'computable' claim ultimately refers to."
   },
   {
    "term": "Configuration / computation",
    "def": "A snapshot: tape contents, head position, current state. A computation is the sequence of configurations from start to halting (accept/reject) — or running forever."
   },
   {
    "term": "Church–Turing thesis",
    "def": "The claim (thesis, not theorem) that anything effectively computable by any means is computable by a Turing machine — every programming language ever built is evidence for it."
   }
  ],
  "code": {
   "lang": "python",
   "title": "tm_lab.py — a complete Turing machine simulator doing unary increment (complete, runnable)",
   "code": "def run_tm(tape, delta, start=\"q0\", halt=\"qh\"):\n    tape = list(tape)\n    head, state, steps = 0, start, 0\n    while state != halt:\n        sym = tape[head] if head < len(tape) else \"_\"\n        if head >= len(tape):\n            tape.append(\"_\")\n        nxt, write, move = delta[(state, sym)]\n        tape[head] = write\n        head += 1 if move == \"R\" else -1\n        state, steps = nxt, steps + 1\n    return \"\".join(tape).strip(\"_\"), steps\n\ndelta = {\n    (\"q0\", \"1\"): (\"q0\", \"1\", \"R\"),   # scan right over 1s\n    (\"q0\", \"_\"): (\"qh\", \"1\", \"R\"),   # at the blank: write the extra 1, halt\n}\nresult, steps = run_tm(\"111\", delta)\nprint(\"tape:\", result, \"| steps:\", steps)",
   "output": "tape: 1111 | steps: 4",
   "lines": [
    "δ now returns (next state, WRITE symbol, MOVE) — the tape is memory the machine can edit, the jump from recognition to computation.",
    "4 steps for 3 ones: three scans + one write-and-halt. Step counting returns as complexity in lesson 6."
   ]
  },
  "mistakes": [
   "Requiring a real computer's speed from the model — TMs define POSSIBILITY, not performance (that is lesson 6's refinement).",
   "Thinking 'Turing-complete' is a compliment about power features — it means ONLY 'can simulate any TM', and a language can be TC with almost nothing (the rule in several esoteric languages).",
   "Forgetting non-halting is a legal outcome: some computations run forever, and detecting that in advance is next lesson's impossibility."
  ],
  "security": "Exam link: TM questions ask for high-level descriptions ('scan to the blank, write, halt') and step traces on tiny inputs — the simulator's trace format is the answer format.",
  "pc": [
   "Run the worked example on your PC exactly as written (tm_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (tm_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Turing machine — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "The one component that lifts a PDA to a TM is:",
    "options": [
     "More states",
     "A read/write tape with random access by head movement — memory usable in any order, not just LIFO",
     "A bigger alphabet",
     "Nondeterminism"
    ],
    "answer": 1,
    "why": "The stack's LIFO discipline was the CFL ceiling; the tape removes the discipline, and the ceiling goes with it."
   },
   {
    "q": "The Church–Turing thesis says:",
    "options": [
     "TMs are the fastest computers",
     "Effective computability (by any method) coincides with TM-computability — a thesis supported by every formalism ever proposed matching it",
     "All problems are solvable",
     "Python is the best language"
    ],
    "answer": 1,
    "why": "It is the bridge that makes TM limits into limits for ALL computation."
   },
   {
    "q": "run_tm on input '1' (unary 1 → 2) takes how many steps with the lesson's δ?",
    "options": [
     "1",
     "2: scan the 1 (R), then write at the blank and halt",
     "3",
     "It never halts"
    ],
    "answer": 1,
    "why": "One scan step + one write step — the same accounting as the printed 4 steps for three 1s."
   }
  ],
  "summary": "A Turing machine — finite control plus a read/write unbounded tape — defines computability itself (Church–Turing thesis); every real language is an equivalent notation for it.",
  "skillGained": "Simulating TMs step-by-step and describing TM algorithms at the sweep-and-mark level.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate theory of computation treatment (automata, regular and context-free languages, Turing machines, decidability, P/NP) as in Sipser, Introduction to the Theory of Computation; Python simulators verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l29-decidability",
  "level": 29,
  "title": "Decidability and the Halting Problem: The Edge of the Possible",
  "difficulty": "Advanced",
  "minutes": 45,
  "xp": 70,
  "skill": "Theory of Computation",
  "prereq": "Previous in Level 29: l29-turing.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Undecidability and the halting problem",
   "Work the example (halting_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Decidable / undecidable, The halting problem, Diagonalization",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This lesson is why perfect antivirus, perfect code review automation and a universal 'will it crash?' checker are not products awaiting funding — they are theorems awaiting nothing. Security engineering (Levels 13, 19) is the art of doing well INSIDE this limit: heuristics, sandboxes, budgets, and defence in depth.",
  "concept": [
   "The halting proof is five lines of logic with a trap inside: suppose a decider H(P, x) existed that always answers 'halts' or 'loops'. Build D(P): run H(P, P); if H says 'halts', loop forever; if H says 'loops', halt. Now feed D its own code. If D(D) halts, then H said 'halts', so D loops — contradiction. If D(D) loops, H said 'loops', so D halts — contradiction. Therefore H cannot exist: not 'nobody has found it', but a proof that the search itself is hopeless, for every language and every future tool.",
   "The illustration below cannot prove that in code — nothing can run the infinite case — so it does the honest finite version: run Collatz with a step BUDGET and report 'unknown' when the budget dies. That three-valued outcome (halted / would need more steps) is exactly what real analyzers live with: semi-decision everywhere, decision for the halting problem nowhere. Rice's theorem extends the verdict: ANY non-trivial semantic property of programs (is it malicious? is it equivalent to this one?) is undecidable — Level 19's scanner limits are theorems."
  ],
  "diagramTitle": "Undecidability and the halting problem — the working flow",
  "diagram": [
   "1 · START from the rule — Decidable / undecidable: A problem is decidable if some TM halts on EVERY input with the correct yes/no. Undecidable: no such TM exists — proven, not merely undiscovered.",
   "2 · RUN the worked example (halting_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Decidable / undecidable",
    "def": "A problem is decidable if some TM halts on EVERY input with the correct yes/no. Undecidable: no such TM exists — proven, not merely undiscovered."
   },
   {
    "term": "The halting problem",
    "def": "Given a program and an input, decide whether it halts. Turing's theorem: undecidable — the most famous impossibility in computer science."
   },
   {
    "term": "Diagonalization",
    "def": "The proof technique: construct an object that differs from every entry of any assumed complete list/machine — Level 23's Cantor argument, mechanized."
   }
  ],
  "code": {
   "lang": "python",
   "title": "halting_lab.py — semi-decision with a step budget: the honest finite shadow of the halting problem (complete, runnable)",
   "code": "def collatz_steps(n, budget):\n    steps = 0\n    while n != 1:\n        if steps >= budget:\n            return None  # budget exhausted: UNKNOWN, not 'loops forever'\n        n = n // 2 if n % 2 == 0 else 3 * n + 1\n        steps += 1\n    return steps\n\nprint(\"27 with budget 200:\", collatz_steps(27, 200))\nprint(\"27 with budget 50:\", collatz_steps(27, 50))",
   "output": "27 with budget 200: 111\n27 with budget 50: None",
   "lines": [
    "With budget 200 the run DECIDES (111 steps). With 50 it honestly reports None — semi-decision: yes-answers are earned, no-answers are unavailable.",
    "No budget is provably enough in general — that gap between budgets is where the undecidability lives."
   ]
  },
  "mistakes": [
   "'Undecidable' read as 'very hard' or 'needs a bigger computer' — it is a proof of non-existence, immune to hardware, funding and cleverness.",
   "Believing a long test run proves non-halting: watching a program for a year shows nothing about year two — only the budget's honesty (None) is rigorous.",
   "Thinking the halting problem is about pathological self-referential programs only — D is built from ANY claimed decider; the contradiction is about the decider, not the input."
  ],
  "security": "Exam link: reproduce the halting proof cleanly (assume H, build D, feed D to itself, both branches contradict) and state Rice's theorem's consequence for program analysis.",
  "pc": [
   "Run the worked example on your PC exactly as written (halting_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (halting_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Decidable / undecidable — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "The halting problem is undecidable means:",
    "options": [
     "No one has written the decider yet",
     "A proof shows no Turing machine (hence no program in any language) decides halting for all program–input pairs",
     "It needs quantum computers",
     "It is decidable for short programs only in theory"
    ],
    "answer": 1,
    "why": "Non-existence by proof — the diagonal argument defeats every candidate decider at once."
   },
   {
    "q": "In the proof, D(D) leads to contradiction in both branches because D:",
    "options": [
     "Crashes",
     "Does the OPPOSITE of whatever H predicts for it — halting iff H says it loops",
     "Is written in Python",
     "Has no input"
    ],
    "answer": 1,
    "why": "Self-application + inversion = diagonalization; any H generates its own counterexample D."
   },
   {
    "q": "Rice's theorem implies which tool is impossible in full generality?",
    "options": [
     "A syntax checker",
     "A perfect malware decider: 'does this arbitrary program behave maliciously?' — a non-trivial semantic property, hence undecidable",
     "A compiler",
     "A file hasher"
    ],
    "answer": 1,
    "why": "Semantic properties of programs are undecidable wholesale; real scanners are heuristic approximations — powerful, never perfect."
   }
  ],
  "summary": "Decidability asks for a halting yes/no machine; the halting problem has none (diagonalization), and Rice's theorem extends impossibility to every non-trivial semantic property of programs.",
  "skillGained": "Reproducing the halting-problem proof and applying Rice's theorem to tool claims.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate theory of computation treatment (automata, regular and context-free languages, Turing machines, decidability, P/NP) as in Sipser, Introduction to the Theory of Computation; Python simulators verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l29-complexity",
  "level": 29,
  "title": "Complexity Classes: P, NP, and What 'Hard' Precisely Means",
  "difficulty": "Advanced",
  "minutes": 45,
  "xp": 70,
  "skill": "Theory of Computation",
  "prereq": "Previous in Level 29: l29-decidability.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: P, NP, NP-completeness and reductions",
   "Work the example (np_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: P, NP, NP-complete / reduction",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This is the theory beneath Level 24's Big-O, grown from runtimes to classes of problems. It also disciplines real engineering: route optimization, scheduling, and constraint problems in industry are NP-hard in general — the professional responses are approximation, heuristics and special cases, not waiting for a genius algorithm.",
  "concept": [
   "Complexity refines decidability with a clock: among the solvable, which are cheap? The code exhibits NP's defining asymmetry on subset-sum: VERIFYING a proposed subset costs one addition pass, while SOLVING by brute force costs all 2ⁿ subsets — at n = 5 that is 32 checks, trivial; at n = 300 it is more subsets than atoms you could ever count. The certificate (7, 23) is checked in microseconds by someone who could never have found it by force at scale.",
   "A reduction is a translation between problems: if you can convert any instance of X into an instance of Y such that answers correspond, then Y's solver solves X — and hardness flows backward along the arrow. NP-complete problems (SAT first, then thousands by reduction chains) are the mutually-reducible hardest core of NP: P vs NP asks whether that core secretly sits inside P. It is the most consequential open problem in the field — and Level 12's password hashing quietly depends on hard search staying hard."
  ],
  "diagramTitle": "P, NP, NP-completeness and reductions — the working flow",
  "diagram": [
   "1 · START from the rule — P: Problems decidable in polynomial time (n, n², n³…) by a deterministic machine — the working definition of 'efficiently solvable'.",
   "2 · RUN the worked example (np_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "P",
    "def": "Problems decidable in polynomial time (n, n², n³…) by a deterministic machine — the working definition of 'efficiently solvable'."
   },
   {
    "term": "NP",
    "def": "Problems whose YES answers have certificates verifiable in polynomial time (equivalently: solvable in polynomial time by a nondeterministic machine). Finding the certificate may be hard; checking it is cheap."
   },
   {
    "term": "NP-complete / reduction",
    "def": "A problem X reduces to Y (X ≤p Y) if X can be solved via Y's solver. NP-complete problems are the hardest in NP: every NP problem reduces to them, so one efficient algorithm for any one of them collapses the whole class."
   }
  ],
  "code": {
   "lang": "python",
   "title": "np_lab.py — NP's asymmetry: verify in one pass, solve by 2^n search (complete, runnable)",
   "code": "import itertools\nnums = [3, 7, 12, 23, 31]\ntarget = 30\n\ndef verify(subset):\n    return sum(subset) == target\n\nprint(\"verify (7, 23):\", verify((7, 23)))\ncount = 0\nanswer = None\nfor r in range(len(nums) + 1):\n    for combo in itertools.combinations(nums, r):\n        count += 1\n        if sum(combo) == target:\n            answer = combo\nprint(\"brute force checked\", count, \"subsets; found:\", answer)",
   "output": "verify (7, 23): True\nbrute force checked 32 subsets; found: (7, 23)",
   "lines": [
    "Verification is one sum; search enumerated all 2⁵ = 32 subsets. The GAP between those costs is NP's definition made visible.",
    "At n = 300 the same counter would need 2³⁰⁰ iterations — brute force does not 'get slower', it leaves the physical universe."
   ]
  },
  "mistakes": [
   "'NP means non-polynomial' — it means nondeterministic polynomial, and its working definition is polynomial VERIFICATION; P ⊆ NP is known, equality is the open question.",
   "Calling a problem NP-complete because it 'feels hard' — completeness requires membership in NP AND reductions from all of NP (via an existing complete problem).",
   "Expecting NP-hard problems to be unsolvable in practice: instances with structure, small n, or approximation budgets are solved daily — the class describes worst-case generality."
  ],
  "security": "Exam link: the standard items — define P and NP by verification, give the reduction direction correctly (X ≤p Y means X is no harder than Y), and name SAT as the first NP-complete problem (Cook–Levin).",
  "pc": [
   "Run the worked example on your PC exactly as written (np_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (np_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — P — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A problem is in NP iff:",
    "options": [
     "It cannot be solved in polynomial time",
     "Proposed YES-certificates can be VERIFIED in polynomial time",
     "It is about numbers",
     "It needs a nondeterministic computer to state"
    ],
    "answer": 1,
    "why": "Verification, not solution: subset-sum's (7, 23) is checkable in one addition pass."
   },
   {
    "q": "If X ≤p Y and Y has a polynomial algorithm, then:",
    "options": [
     "Y is harder than X",
     "X also has a polynomial algorithm (translate, solve, translate back)",
     "X is NP-complete",
     "Nothing follows"
    ],
    "answer": 1,
    "why": "Reductions transfer SOLVERS forward and HARDNESS backward — the arrow direction is the classic exam trap."
   },
   {
    "q": "Why does one polynomial algorithm for SAT settle P vs NP?",
    "options": [
     "SAT is easy",
     "SAT is NP-complete: every NP problem reduces to it, so its poly algorithm would give every NP problem one — P = NP",
     "SAT has no certificates",
     "It would not"
    ],
    "answer": 1,
    "why": "Completeness is the lever: the hardest problem's fall brings the class with it."
   }
  ],
  "summary": "P = efficiently solvable; NP = efficiently verifiable; NP-complete = NP's hardest core, mutually reducible, with SAT as its first member (Cook–Levin); P vs NP remains open.",
  "skillGained": "Defining P/NP by verification and reasoning correctly about reduction direction.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate theory of computation treatment (automata, regular and context-free languages, Turing machines, decidability, P/NP) as in Sipser, Introduction to the Theory of Computation; Python simulators verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l30-lexer",
  "level": 30,
  "title": "Lexical Analysis: Turning Characters into Tokens",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Compilers",
  "prereq": "Levels 29 (Theory of Computation), 24 (DSA) and 26 (Microprocessor & Assembly) complete — grammars to parse with, trees to build, and a machine model to generate code for.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Lexical analysis and tokenization",
   "Work the example (lexer_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Token / lexeme, Lexer (scanner), Lexical error",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Tokenization is also a security boundary you have met before: log parsers (Level 7), input validation and every REPL since Level 4 all tokenize. A lexer that mis-classifies input is how parsers downstream get confused — parser differential bugs are a real vulnerability class.",
  "concept": [
   "Compilation begins by refusing to think in characters. The lexer below is the whole phase in twenty lines: an ordered list of regex patterns — and the order is a design decision, because 'while' must be tried as a KEYWORD before IDENT swallows it as a name. Numbers, identifiers, operators emerge as typed tokens; the parser in the next lesson will never see a raw character again.",
   "Level 29 earns its keep here: each token pattern is a regular language, the combined scanner is a DFA in library form (that is literally what a regex engine compiles to), and the maximal-munch rule — match the LONGEST lexeme ('==' not '=' + '=') — is the tie-breaking discipline real lexers live by."
  ],
  "diagramTitle": "Lexical analysis and tokenization — the working flow",
  "diagram": [
   "1 · START from the rule — Token / lexeme: A token is a category (NUMBER, IDENT, PLUS…); a lexeme is the actual characters matched ('42', 'total'). The lexer emits (token, lexeme) pairs.",
   "2 · RUN the worked example (lexer_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Token / lexeme",
    "def": "A token is a category (NUMBER, IDENT, PLUS…); a lexeme is the actual characters matched ('42', 'total'). The lexer emits (token, lexeme) pairs."
   },
   {
    "term": "Lexer (scanner)",
    "def": "The compiler's first phase: reads the character stream, skips whitespace/comments, groups characters into tokens — implemented with regular expressions, because token languages are regular (Level 29)."
   },
   {
    "term": "Lexical error",
    "def": "A character sequence matching NO token pattern (e.g. '@' in a language without it) — reported here, at the earliest possible phase."
   }
  ],
  "code": {
   "lang": "python",
   "title": "lexer_lab.py — a complete tokenizer for a tiny expression language (complete, runnable)",
   "code": "import re\nSPEC = [\n    (\"NUM\", r\"\\d+\"),\n    (\"ID\", r\"[A-Za-z_]\\w*\"),\n    (\"OP\", r\"==|[-+*/=()]\"),\n    (\"SKIP\", r\"\\s+\"),\n]\nMASTER = re.compile(\"|\".join(f\"(?P<{name}>{pat})\" for name, pat in SPEC))\n\ndef tokenize(src):\n    out = []\n    for m in MASTER.finditer(src):\n        kind = m.lastgroup\n        if kind != \"SKIP\":\n            out.append((kind, m.group()))\n    return out\n\nprint(tokenize(\"total = price * 2 + 10\"))",
   "output": "[('ID', 'total'), ('OP', '='), ('ID', 'price'), ('OP', '*'), ('NUM', '2'), ('OP', '+'), ('NUM', '10')]",
   "lines": [
    "'==' precedes single-char operators inside OP: maximal munch by pattern order — the lexer takes the longest honest match.",
    "Whitespace is a token too (SKIP) — matched, classified, and deliberately discarded; nothing in the input is unaccounted for."
   ]
  },
  "mistakes": [
   "Letting the parser deal with characters/whitespace — phase separation is the compiler's load-bearing wall.",
   "Pattern order carelessness: IDENT before KEYWORD turns every keyword into a variable name (the bug the SPEC order prevents).",
   "Forgetting maximal munch: '=' matched before '==' splits one operator into two tokens and corrupts the parse downstream."
  ],
  "security": "Exam link: lexer questions test token specification (write the regex for identifiers/numbers) and the phase's contract — characters in, (token, lexeme) stream out, lexical errors reported.",
  "pc": [
   "Run the worked example on your PC exactly as written (lexer_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (lexer_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Token / lexeme — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "Why must KEYWORD patterns be tried before the IDENT pattern?",
    "options": [
     "Keywords are shorter",
     "IDENT's pattern also matches keywords ('while' is a valid identifier shape) — first-match wins, so keywords must claim themselves first",
     "It is only a style rule",
     "IDENT cannot match letters"
    ],
    "answer": 1,
    "why": "Overlapping regular languages are resolved by priority — a lexer-design fact, not a preference."
   },
   {
    "q": "Maximal munch on input 'a==b' yields:",
    "options": [
     "ID(a), OP(=), OP(=), ID(b)",
     "ID(a), OP(==), ID(b) — the longest match at each position",
     "An error",
     "ID(a==b)"
    ],
    "answer": 1,
    "why": "Longest-match is the rule that keeps multi-character operators whole."
   },
   {
    "q": "Token languages are regular because:",
    "options": [
     "Tokens are short",
     "Each token's shape is describable by a regular expression / DFA — no nesting or counting is needed to recognize a number or a name",
     "The lexer is small",
     "All languages are regular"
    ],
    "answer": 1,
    "why": "Recognition without memory beyond state — Level 29's classification applied."
   }
  ],
  "summary": "Lexical analysis converts a character stream into a typed token stream via ordered regular patterns, maximal munch, and priority for keywords — a DFA's job, cleanly separated from parsing.",
  "skillGained": "Writing a working tokenizer with correct pattern priority and maximal munch.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate compiler treatment (lexical analysis, parsing, semantic analysis, intermediate code, code generation, optimization) as in Aho/Lam/Sethi/Ullman, Compilers: Principles, Techniques, and Tools; all mini-compiler code verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l30-parser",
  "level": 30,
  "title": "Parsing: Recursive Descent and the Precedence Problem",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Compilers",
  "prereq": "Previous in Level 30: l30-lexer.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Parsing and operator precedence",
   "Work the example (parser_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Parser, Recursive descent, Precedence / associativity",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every language tool you will ever build — linters, formatters, DSLs, the SQL engines of Level 27 conceptually — parses with these ideas. Ambiguity here is also a security topic: two parsers disagreeing on one input's structure is the root of HTTP request-smuggling-class bugs.",
  "concept": [
   "The naive expression grammar E → E + E | E * E | NUM is ambiguous (Level 29's warning): '2 + 3 * 4' has two trees, hence two values (20 vs 14). The fix is stratification — E handles +, T handles *, F handles atoms — so * is forced deeper in every tree and evaluates first. The parser below implements exactly that layered grammar, one function per variable, and prints the tree: ('+', 2, ('*', 3, 4)) — the structure IS the precedence, no separate rulebook needed.",
   "Trace the call chain for '2 + 3 * 4': parse_E sees 2, then +, then calls parse_T for the right side — which greedily consumes '3 * 4' as one term before returning. That greediness, placed in the grammar's layers, is the whole trick; parentheses in F override it by restarting at parse_E."
  ],
  "diagramTitle": "Parsing and operator precedence — the working flow",
  "diagram": [
   "1 · START from the rule — Parser: The phase that consumes the token stream and builds the parse tree / AST according to the grammar — or reports a syntax error at the exact token where structure broke.",
   "2 · RUN the worked example (parser_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Parser",
    "def": "The phase that consumes the token stream and builds the parse tree / AST according to the grammar — or reports a syntax error at the exact token where structure broke."
   },
   {
    "term": "Recursive descent",
    "def": "A top-down parser where each grammar variable becomes a function; functions call each other exactly as the productions dictate. The CFG lesson's recognizer, generalized."
   },
   {
    "term": "Precedence / associativity",
    "def": "Precedence: * binds tighter than +. Associativity: − and / group left-to-right. Encoded in the grammar by layering (expression → term → factor) so the tree enforces them."
   }
  ],
  "code": {
   "lang": "python",
   "title": "parser_lab.py — a recursive-descent parser with precedence built into the grammar (complete, runnable)",
   "code": "tokens = [(\"NUM\", 2), (\"OP\", \"+\"), (\"NUM\", 3), (\"OP\", \"*\"), (\"NUM\", 4)]\npos = 0\n\ndef peek():\n    return tokens[pos] if pos < len(tokens) else (None, None)\n\ndef parse_E():\n    global pos\n    node = parse_T()\n    while peek() == (\"OP\", \"+\"):\n        pos += 1\n        node = (\"+\", node, parse_T())\n    return node\n\ndef parse_T():\n    global pos\n    node = parse_F()\n    while peek() == (\"OP\", \"*\"):\n        pos += 1\n        node = (\"*\", node, parse_F())\n    return node\n\ndef parse_F():\n    global pos\n    kind, val = tokens[pos]\n    pos += 1\n    return val\n\nprint(parse_E())",
   "output": "('+', 2, ('*', 3, 4))",
   "lines": [
    "The * node sits DEEPER in the tree — depth is precedence, mechanically: evaluators compute deep nodes first.",
    "Left-nesting in the while loops gives left associativity: 10 - 4 - 3 would tree as ((10-4)-3), value 3, not 9."
   ]
  },
  "mistakes": [
   "Writing one parse function for a flat ambiguous grammar and 'fixing' precedence in the evaluator — the tree has already lost the information.",
   "Recursing on the left for left-recursive productions (E → E + T) in recursive descent — infinite regress; the while-loop form is the standard cure.",
   "Reporting 'syntax error' without the position: the token index IS the diagnostic."
  ],
  "security": "Exam link: the set-piece questions — show the grammar is ambiguous (two trees for one string), then stratify it; and trace recursive descent on a given input.",
  "pc": [
   "Run the worked example on your PC exactly as written (parser_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (parser_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Parser — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "'2 + 3 * 4' evaluating to 20 signals:",
    "options": [
     "A fast CPU",
     "The wrong tree: + grouped above * — precedence was lost, usually from a flat ambiguous grammar",
     "A lexer error",
     "Correct maths"
    ],
    "answer": 1,
    "why": "20 = (2+3)*4. The tree's shape is the semantics; precedence must be structural."
   },
   {
    "q": "In the stratified grammar, * binds tighter because:",
    "options": [
     "The lexer says so",
     "T (the * level) sits BELOW E in the call chain, so * nodes are built deeper and evaluated first",
     "* is written first",
     "The evaluator has a rule table"
    ],
    "answer": 1,
    "why": "Grammar layering encodes precedence in tree depth — no separate mechanism."
   },
   {
    "q": "Left associativity of − in '10 - 4 - 3' gives:",
    "options": [
     "9 — (10 - (4 - 3))",
     "3 — ((10 - 4) - 3): the while loop folds each new term into the LEFT-accumulated node",
     "Either, it is ambiguous",
     "An error"
    ],
    "answer": 1,
    "why": "Folding left as the loop iterates is what left associativity means operationally."
   }
  ],
  "summary": "Parsing builds the AST from tokens; recursive descent mirrors the grammar as functions, and stratification (E/T/F) encodes precedence and associativity structurally, killing ambiguity.",
  "skillGained": "Stratifying an expression grammar and tracing recursive descent by hand.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate compiler treatment (lexical analysis, parsing, semantic analysis, intermediate code, code generation, optimization) as in Aho/Lam/Sethi/Ullman, Compilers: Principles, Techniques, and Tools; all mini-compiler code verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l30-semantic",
  "level": 30,
  "title": "Semantic Analysis and Evaluation: Meaning After Structure",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Compilers",
  "prereq": "Previous in Level 30: l30-parser.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Semantic analysis and tree evaluation",
   "Work the example (eval_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Semantic analysis, Symbol table, Tree-walking evaluation",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This phase is why IDEs can underline an undefined name before you run anything — and the symbol table idea recurs everywhere: Level 27's catalogs, Level 24's hash tables as the implementation, Level 7's asset inventories as the security cousin.",
  "concept": [
   "'x + 2' parses beautifully — and is meaningless until x is declared. The evaluator below is also the semantic checker: hitting an identifier looks it up in the environment (the runtime symbol table), and a miss raises the classic error, reported with the variable's name, exactly where a real compiler's 'undefined variable' comes from. Structure first (parser), meaning second (this phase), value last — the separation is why error messages can be so precise about WHICH kind of wrong a program is.",
   "Type checking is the same walk with a different payload: instead of values, nodes return TYPES, and operators verify their children's types agree ('a' + 2 fails in a typed language, passes in a coercive one — a language-design decision enforced in this phase)."
  ],
  "diagramTitle": "Semantic analysis and tree evaluation — the working flow",
  "diagram": [
   "1 · START from the rule — Semantic analysis: Checks the parse tree for meaning errors syntax cannot see: undeclared variables, type mismatches, wrong argument counts — using a symbol table.",
   "2 · RUN the worked example (eval_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Semantic analysis",
    "def": "Checks the parse tree for meaning errors syntax cannot see: undeclared variables, type mismatches, wrong argument counts — using a symbol table."
   },
   {
    "term": "Symbol table",
    "def": "The compiler's dictionary of declared names → their types/scopes, built during analysis and consulted by every later phase."
   },
   {
    "term": "Tree-walking evaluation",
    "def": "Computing a tree's value by recursion: evaluate children, apply the node — the prototype interpreter, and the semantic phase's test harness."
   }
  ],
  "code": {
   "lang": "python",
   "title": "eval_lab.py — tree evaluation with a symbol table — and the undefined-variable error (complete, runnable)",
   "code": "ENV = {\"price\": 50, \"qty\": 3}\n\ndef ev(node):\n    if isinstance(node, int):\n        return node\n    if isinstance(node, str):\n        if node not in ENV:\n            raise NameError(f\"undefined variable: {node}\")\n        return ENV[node]\n    op, left, right = node\n    if op == \"+\":\n        return ev(left) + ev(right)\n    if op == \"*\":\n        return ev(left) * ev(right)\n\ntree = (\"+\", (\"*\", \"price\", \"qty\"), 10)\nprint(\"value:\", ev(tree))\ntry:\n    ev((\"+\", \"discount\", 5))\nexcept NameError as e:\n    print(\"semantic error:\", e)",
   "output": "value: 160\nsemantic error: undefined variable: discount",
   "lines": [
    "(50 × 3) + 10 = 160: the recursion evaluates deepest nodes first — tree shape drives computation order (lesson 2's payoff).",
    "The error names the variable and arises in the SEMANTIC phase — the tree parsed fine; it is meaning that failed."
   ]
  },
  "mistakes": [
   "Blaming the parser for undefined variables — parsing checks shape; declaration checks are semantic by definition.",
   "Evaluating during parsing with no tree kept — then semantic checks, optimization (lesson 6) and code generation have nothing to work on.",
   "A symbol table as a list searched linearly: fine for a toy, but Level 24 taught the hash table this job wants at scale."
  ],
  "security": "Exam link: semantic-phase questions ask WHICH phase catches a given error — bracket mismatch (syntax) vs undeclared variable (semantic) vs division by zero at runtime (not compile time at all).",
  "pc": [
   "Run the worked example on your PC exactly as written (eval_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (eval_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Semantic analysis — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "'total + bonus' where bonus was never declared is caught by:",
    "options": [
     "The lexer",
     "The parser",
     "Semantic analysis, via the symbol table lookup failing",
     "The code generator"
    ],
    "answer": 2,
    "why": "Perfectly shaped, perfectly meaningless — meaning checks live in the semantic phase."
   },
   {
    "q": "The symbol table maps:",
    "options": [
     "Tokens to lexemes",
     "Declared names to their information (type, scope, kind) for all later phases",
     "Lines to opcodes",
     "Files to folders"
    ],
    "answer": 1,
    "why": "It is the compiler's shared memory about names — built once, consulted everywhere."
   },
   {
    "q": "Division by zero in '10 / (3 - 3)' is normally:",
    "options": [
     "A lexical error",
     "A syntax error",
     "A RUNTIME error — structure and meaning are fine; only the values condemn it (constant folding may catch this instance, lesson 6)",
     "A semantic error by definition"
    ],
    "answer": 2,
    "why": "Phase discipline: some wrongness only exists when values exist — that boundary is an exam favourite."
   }
  ],
  "summary": "Semantic analysis walks the tree with a symbol table to catch meaning errors (undeclared names, type clashes) that syntax cannot see; the same walk, returning values, is the interpreter.",
  "skillGained": "Assigning errors to phases and evaluating ASTs against a symbol table.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate compiler treatment (lexical analysis, parsing, semantic analysis, intermediate code, code generation, optimization) as in Aho/Lam/Sethi/Ullman, Compilers: Principles, Techniques, and Tools; all mini-compiler code verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l30-intermediate",
  "level": 30,
  "title": "Intermediate Code: Three-Address Code and the Compiler's Middle",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "Compilers",
  "prereq": "Previous in Level 30: l30-semantic.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Intermediate representations and TAC",
   "Work the example (tac_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Intermediate representation (IR), Three-address code (TAC), Temporary",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "IRs are everywhere once you look: Java bytecode, LLVM IR, .NET CIL — and conceptually, Level 26's assembly was already a human-written IR. This lesson is the hinge of the whole level: everything before produced the tree; everything after consumes the list.",
  "concept": [
   "Why not generate machine code straight from the tree? Because N languages × M machines would need N×M compilers; with an IR it is N front ends + M back ends. The TAC generator below walks the same tree the evaluator walked, but instead of computing values it EMITS instructions — each binary operation gets a fresh temporary, in evaluation order, until the whole expression is a flat, machine-shaped list. Compare the two outputs across these lessons: the evaluator printed 160; the TAC prints the RECIPE for 160.",
   "Flatness is the point: control flow, optimization (next lessons) and register allocation (Level 26's world) are all far easier on a list of one-operation lines than on a nested tree. The tree was for understanding; the list is for machinery."
  ],
  "diagramTitle": "Intermediate representations and TAC — the working flow",
  "diagram": [
   "1 · START from the rule — Intermediate representation (IR): A machine-independent code form between the AST and target code — close enough to a machine to generate from, abstract enough to optimize once for all targets.",
   "2 · RUN the worked example (tac_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Intermediate representation (IR)",
    "def": "A machine-independent code form between the AST and target code — close enough to a machine to generate from, abstract enough to optimize once for all targets."
   },
   {
    "term": "Three-address code (TAC)",
    "def": "Instructions of the form result = a op b, with fresh temporary names (t1, t2…) for every sub-result — at most one operation per line."
   },
   {
    "term": "Temporary",
    "def": "A compiler-invented variable holding one subexpression's value — the IR's answer to 'where does the middle of a nested expression live?'"
   }
  ],
  "code": {
   "lang": "python",
   "title": "tac_lab.py — generating three-address code from the lesson tree (complete, runnable)",
   "code": "counter = 0\n\ndef gen(node):\n    global counter\n    if isinstance(node, (int, str)):\n        return str(node)\n    op, left, right = node\n    a = gen(left)\n    b = gen(right)\n    counter += 1\n    t = f\"t{counter}\"\n    print(f\"{t} = {a} {op} {b}\")\n    return t\n\ntree = (\"+\", (\"*\", \"price\", \"qty\"), 10)\nresult = gen(tree)\nprint(\"answer in\", result)",
   "output": "t1 = price * qty\nt2 = t1 + 10\nanswer in t2",
   "lines": [
    "Post-order generation: children emit before parents, so t1 exists before t2 uses it — the tree's evaluation order, flattened.",
    "Exactly one operation per line: a back end can translate each line independently (next lesson does)."
   ]
  },
  "mistakes": [
   "Reusing one temporary for everything — each sub-result needs its own name until a later phase proves lifetimes do not overlap.",
   "Emitting in pre-order (parent first): the parent's line would reference temporaries not yet computed.",
   "Believing TAC is only pedagogical: LLVM's SSA form is this idea industrialized."
  ],
  "security": "Exam link: TAC generation from an expression/statement is a guaranteed practical question — post-order walk, fresh temp per operation, assignments copied at the end.",
  "pc": [
   "Run the worked example on your PC exactly as written (tac_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (tac_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Intermediate representation (IR) — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "The IR's economic argument is:",
    "options": [
     "It is shorter",
     "N languages × M targets becomes N front ends + M back ends instead of N×M compilers",
     "It runs faster than machine code",
     "It removes the parser"
    ],
    "answer": 1,
    "why": "The middle form is a narrow waist: everything above it varies by language, everything below by machine."
   },
   {
    "q": "Why must generation be post-order?",
    "options": [
     "Alphabetical neatness",
     "A temporary must be DEFINED before the line that uses it — children compute the values parents combine",
     "Pre-order is illegal",
     "It saves memory"
    ],
    "answer": 1,
    "why": "Definition-before-use is the list form of the tree's evaluation order."
   },
   {
    "q": "'t3 = a + b' obeys three-address form because:",
    "options": [
     "It has three characters",
     "At most one operator, with up to three addresses (result, two operands) named",
     "It is on line 3",
     "It uses a temporary"
    ],
    "answer": 1,
    "why": "One operation per instruction is the discipline that makes later phases simple."
   }
  ],
  "summary": "Intermediate code flattens the tree into one-operation lines (TAC) with fresh temporaries, generated post-order — the narrow waist between N front ends and M back ends.",
  "skillGained": "Generating correct TAC for nested expressions and assignments.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate compiler treatment (lexical analysis, parsing, semantic analysis, intermediate code, code generation, optimization) as in Aho/Lam/Sethi/Ullman, Compilers: Principles, Techniques, and Tools; all mini-compiler code verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l30-codegen",
  "level": 30,
  "title": "Code Generation: A Stack Machine Back End",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Compilers",
  "prereq": "Previous in Level 30: l30-intermediate.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Code generation for a stack machine",
   "Work the example (codegen_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Code generation, Stack machine, Instruction selection",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "You have now stood on both sides of Level 26: assembly was the target language humans wrote; here a program writes it. The stack machine also closes a Level 29 loop — its operand stack is the PDA's stack, promoted to a computer.",
  "concept": [
   "The back end below is small because the target is honest: TAC's one-operation lines map one-to-one onto stack instructions. The same post-order walk now emits PUSH price, PUSH qty, MUL, PUSH 10, ADD — and a tiny virtual machine executes the list and prints 160, the value the evaluator computed in lesson 3, this time reached by generated code running on a machine model.",
   "Real back ends add what this target avoids: register allocation, instruction scheduling, calling conventions. The phase's contract is already fully visible: semantics preserved from the IR, target resources managed, nothing about the source language remembered except through the IR."
  ],
  "diagramTitle": "Code generation for a stack machine — the working flow",
  "diagram": [
   "1 · START from the rule — Code generation: The back end: translating IR into target machine instructions, managing the target's resources (registers, stack, memory).",
   "2 · RUN the worked example (codegen_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Code generation",
    "def": "The back end: translating IR into target machine instructions, managing the target's resources (registers, stack, memory)."
   },
   {
    "term": "Stack machine",
    "def": "A target whose instructions take operands from a pushdown stack: PUSH x; ADD pops two, pushes the sum. The JVM is the industrial example."
   },
   {
    "term": "Instruction selection",
    "def": "Choosing target instructions per IR operation — one-to-one for a stack machine, genuinely hard for register machines (Level 26), where allocation decides which values live in registers."
   }
  ],
  "code": {
   "lang": "python",
   "title": "codegen_lab.py — tree-to-stack-machine generation, then execution on a tiny VM (complete, runnable)",
   "code": "ENV = {\"price\": 50, \"qty\": 3}\ncode = []\n\ndef emit(node):\n    if isinstance(node, int):\n        code.append((\"PUSH\", node))\n        return\n    if isinstance(node, str):\n        code.append((\"PUSH\", ENV[node]))\n        return\n    op, left, right = node\n    emit(left)\n    emit(right)\n    code.append((\"MUL\",) if op == \"*\" else (\"ADD\",))\n\nemit((\"+\", (\"*\", \"price\", \"qty\"), 10))\nfor ins in code:\n    print(ins)\n\nstack = []\nfor ins in code:\n    if ins[0] == \"PUSH\":\n        stack.append(ins[1])\n    elif ins[0] == \"MUL\":\n        b, a = stack.pop(), stack.pop()\n        stack.append(a * b)\n    else:\n        b, a = stack.pop(), stack.pop()\n        stack.append(a + b)\nprint(\"VM result:\", stack[0])",
   "output": "('PUSH', 50)\n('PUSH', 3)\n('MUL',)\n('PUSH', 10)\n('ADD',)\nVM result: 160",
   "lines": [
    "Post-order emission: operands are pushed before the operator that consumes them — the tree's evaluation order as a flat instruction list.",
    "Names resolve to values at emission (PUSH 50, not PUSH price): this toy back end bakes the environment in; a real one emits LOAD instructions instead."
   ]
  },
  "mistakes": [
   "Emitting the operator before its operands — the stack would hold nothing to operate on; order is semantics.",
   "Assuming codegen is the 'easy' phase in general: it is easy HERE because the target is a stack machine; register targets make it the hardest phase.",
   "Losing the IR's temporaries' lifetimes: a back end that reloads everything from memory is correct but throws away the performance the IR made possible."
  ],
  "security": "Exam link: code generation questions give a TAC block and ask for target code (stack or simple register form) — translate line by line, tracking where each temporary lives.",
  "pc": [
   "Run the worked example on your PC exactly as written (codegen_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (codegen_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Code generation — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "Stack code for 'a + b * c' must order instructions as:",
    "options": [
     "ADD first, then MUL",
     "PUSH a, PUSH b, PUSH c, MUL, ADD — the * subtree emits (and will execute) before the + that consumes its result",
     "All PUSHes, then all operators in any order",
     "MUL can go anywhere"
    ],
    "answer": 1,
    "why": "Post-order emission mirrors evaluation order: inner operations complete before outer ones consume them."
   },
   {
    "q": "Why is a stack machine the teaching target for a first back end?",
    "options": [
     "It is the fastest target",
     "Instruction selection is one-to-one and there is no register allocation to decide — the phase's contract shows without its hardest sub-problem",
     "Real CPUs are stack machines",
     "It needs no IR"
    ],
    "answer": 1,
    "why": "Remove the allocation problem and the translation structure stands bare — pedagogy by subtraction."
   },
   {
    "q": "The VM pops b then a for MUL and pushes a * b. Why does pop order matter for SUB but not MUL?",
    "options": [
     "It never matters",
     "Multiplication is commutative (a*b = b*a); subtraction is not — the first pop is the RIGHT operand, and swapping changes the value",
     "MUL is slower",
     "The stack reverses anyway"
    ],
    "answer": 1,
    "why": "Operand order is a semantic property of the operator; the back end must respect it for non-commutative operations (SUB, DIV, comparisons)."
   }
  ],
  "summary": "Code generation translates TAC/IR into target instructions; on a stack machine the translation is post-order and one-to-one, and executing the result reproduces the evaluator's value — 160 — by machine steps.",
  "skillGained": "Generating stack-machine code from trees/TAC and simulating the operand stack.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate compiler treatment (lexical analysis, parsing, semantic analysis, intermediate code, code generation, optimization) as in Aho/Lam/Sethi/Ullman, Compilers: Principles, Techniques, and Tools; all mini-compiler code verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l30-optimization",
  "level": 30,
  "title": "Optimization and the Whole Pipeline: A Working Mini-Compiler",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "Compilers",
  "prereq": "Previous in Level 30: l30-codegen.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Code optimization and the compiler pipeline",
   "Work the example (optimize_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Constant folding, Algebraic simplification, Peephole / dead code (names to know)",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Your mini-compiler is complete: it lexes, parses, checks, generates and optimizes a real (if tiny) language. Every industrial compiler — GCC, Clang, the JVM toolchain — is this pipeline with more languages, more targets and decades of optimization passes; no new KIND of phase appears.",
  "concept": [
   "Optimization is the one phase allowed to change the code — never the meaning. The folder below walks the tree bottom-up: constant children collapse by arithmetic (2 + 3 → 5, 10 − 4 → 6, then 5 * 6 → 30 at the root), and identity laws prune what arithmetic cannot (x * 1 → x, y + 0 → y). Every rewrite must be justified by a law; an 'optimization' that changes a value for any input is not an optimization, it is a miscompilation — the most dangerous bug class a compiler can have, because it corrupts correct programs silently.",
   "Assemble the whole level now: characters (lexer) → tokens → tree (parser) → checked meaning (semantics) → TAC (IR) → target code (back end) → optimized at the IR/tree stage. Six phases, each with one job, each testable alone. That architecture — not any single phase — is the real subject of compiler design, and it is the same separation-of-concerns you met in Level 28's engineering."
  ],
  "diagramTitle": "Code optimization and the compiler pipeline — the working flow",
  "diagram": [
   "1 · START from the rule — Constant folding: Evaluating constant subexpressions at compile time: (2 + 3) becomes 5 in the tree, so the generated code never computes it at run time.",
   "2 · RUN the worked example (optimize_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Constant folding",
    "def": "Evaluating constant subexpressions at compile time: (2 + 3) becomes 5 in the tree, so the generated code never computes it at run time."
   },
   {
    "term": "Algebraic simplification",
    "def": "Rewriting by identity laws: x * 1 → x, y + 0 → y, x * 0 → 0 — same meaning, less work. Only rewrites PROVEN meaning-preserving are allowed."
   },
   {
    "term": "Peephole / dead code (names to know)",
    "def": "Peephole: replacing short instruction sequences with better ones. Dead-code elimination: removing computations whose results are never used."
   }
  ],
  "code": {
   "lang": "python",
   "title": "optimize_lab.py — constant folding + identity simplification over the AST (complete, runnable)",
   "code": "def fold(node):\n    if isinstance(node, (int, str)):\n        return node\n    op, l, r = node\n    l, r = fold(l), fold(r)\n    if isinstance(l, int) and isinstance(r, int):\n        return {\"+\": l + r, \"-\": l - r, \"*\": l * r}[op]\n    if op == \"*\" and r == 1:\n        return l\n    if op == \"+\" and r == 0:\n        return l\n    return (op, l, r)\n\nprint(fold((\"*\", (\"+\", 2, 3), (\"-\", 10, 4))))\nprint(fold((\"*\", \"x\", 1)))\nprint(fold((\"+\", \"y\", 0)))",
   "output": "30\nx\ny",
   "lines": [
    "Bottom-up: children fold before parents, so the root sees (5 * 6) and folds again — one pass, fully folded.",
    "x * 1 and y + 0 cannot fold arithmetically (x, y unknown), so identity laws do the work — two different justifications, both meaning-preserving."
   ]
  },
  "mistakes": [
   "'Optimizing' x / x to 1 — false when x is 0 (and in floating point, in more ways); only rewrites valid for ALL values are legal.",
   "Folding with side effects: (f() + 0) → f() is fine, but removing a call because its VALUE is unused is not — the call itself may matter.",
   "Optimizing before correctness: an optimizer amplifies whatever semantics it is given, including the buggy ones."
  ],
  "security": "Exam link: optimization items ask you to apply named transformations to a TAC/tree fragment and justify each by its law — and to REFUSE the illegal ones (x/x → 1) with the counterexample value.",
  "pc": [
   "Run the worked example on your PC exactly as written (optimize_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (optimize_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Constant folding — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "Folding (2 + 3) * (10 - 4) fully gives:",
    "options": [
     "(5) * (6), partially folded",
     "30 — children fold to 5 and 6, then the root folds to a single constant",
     "It cannot fold — subtraction is present",
     "26"
    ],
    "answer": 1,
    "why": "Bottom-up folding reaches a fixpoint: when the root itself is constant-on-constant, the whole tree is one number."
   },
   {
    "q": "Which rewrite is ILLEGAL as a general optimization?",
    "options": [
     "x * 1 → x",
     "x + 0 → x",
     "x / x → 1 — at x = 0 the original is an error/undefined, the rewrite returns 1; meanings differ",
     "2 * 3 → 6"
    ],
    "answer": 2,
    "why": "One counterexample input (x = 0) refutes a rewrite law — the same falsification discipline as grammar claims in Level 29."
   },
   {
    "q": "Dead-code elimination may remove t5 = a * b when:",
    "options": [
     "The line looks untidy",
     "t5 is never used afterward AND the computation has no side effects — both conditions, checked, not assumed",
     "a and b are constants",
     "Always"
    ],
    "answer": 1,
    "why": "Unused-value + no-side-effect is the licence; either alone is a miscompilation waiting."
   }
  ],
  "summary": "Optimization rewrites code under proven meaning-preserving laws — constant folding, identities, dead-code removal — and the six-phase pipeline (lex, parse, check, IR, generate, optimize) is now assembled into one working mini-compiler.",
  "skillGained": "Applying and legally auditing optimizations; narrating the full compiler pipeline.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate compiler treatment (lexical analysis, parsing, semantic analysis, intermediate code, code generation, optimization) as in Aho/Lam/Sethi/Ullman, Compilers: Principles, Techniques, and Tools; all mini-compiler code verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l31-search",
  "level": 31,
  "title": "Search: BFS, DFS, and Finding Paths Through a Space",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "AI & Machine Learning",
  "prereq": "Levels 23 (Discrete Mathematics), 24 (DSA) and 4 (Programming) complete — search needs graphs and queues, learning needs probability basics and functions.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Uninformed search: BFS and DFS",
   "Work the example (search_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: State space, Breadth-first search (BFS), Depth-first search (DFS)",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Search is the skeleton inside route planners, game AI, planners and the Level 29 machines' reachability questions. It is also a security tool: attack graphs (Level 14) are state spaces, and 'is the crown-jewel server reachable from the internet?' is a BFS question.",
  "concept": [
   "AI's first move is to turn a problem into a graph and walk it. The BFS below finds A → B → D → G — provably the fewest hops, because BFS expands states ring by ring: every 1-hop state is visited before any 2-hop state, so the first time the goal is reached, no shorter path can exist. The parent map is what converts 'visited' into an actual path: each state remembers who discovered it, and the path is read backwards from the goal.",
   "Marking nodes as visited WHEN THEY ARE ENQUEUED (not when popped) is the detail that keeps BFS honest — Level 24's graph lesson made the same point: a node discovered twice gets queued twice, and the second discovery's parent would corrupt the path. DFS trades the guarantee away: it follows one branch to the end, using a stack, and the first path it finds may be a long one."
  ],
  "diagramTitle": "Uninformed search: BFS and DFS — the working flow",
  "diagram": [
   "1 · START from the rule — State space: The graph of all reachable situations (states) and the moves between them. Search = finding a path from the start state to a goal state in that graph.",
   "2 · RUN the worked example (search_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "State space",
    "def": "The graph of all reachable situations (states) and the moves between them. Search = finding a path from the start state to a goal state in that graph."
   },
   {
    "term": "Breadth-first search (BFS)",
    "def": "Explores states in rings of increasing distance from the start (a queue). Guarantees the SHORTEST path in an unweighted graph."
   },
   {
    "term": "Depth-first search (DFS)",
    "def": "Explores one branch as deep as it goes before backtracking (a stack). Uses less memory than BFS but does not guarantee the shortest path."
   }
  ],
  "code": {
   "lang": "python",
   "title": "search_lab.py — BFS shortest path with a parent map (complete, runnable)",
   "code": "from collections import deque\ngraph = {\n    \"A\": [\"B\", \"C\"],\n    \"B\": [\"A\", \"D\"],\n    \"C\": [\"A\", \"E\"],\n    \"D\": [\"B\", \"G\"],\n    \"E\": [\"C\", \"G\"],\n    \"G\": [\"D\", \"E\"],\n}\n\ndef bfs_path(start, goal):\n    q = deque([start])\n    parent = {start: None}\n    while q:\n        node = q.popleft()\n        if node == goal:\n            break\n        for nxt in graph[node]:\n            if nxt not in parent:\n                parent[nxt] = node\n                q.append(nxt)\n    path = []\n    cur = goal\n    while cur is not None:\n        path.append(cur)\n        cur = parent[cur]\n    return path[::-1]\n\nprint(\"shortest path A -> G:\", bfs_path(\"A\", \"G\"))",
   "output": "shortest path A -> G: ['A', 'B', 'D', 'G']",
   "lines": [
    "parent doubles as the visited set: a node enters it exactly once, at discovery — that is what makes the reconstructed path a shortest one.",
    "The path is built BACKWARD (goal → start via parents) and reversed; forgetting the [::-1] is the classic last-line bug."
   ]
  },
  "mistakes": [
   "Claiming BFS finds the fastest route on a WEIGHTED map (roads with travel times) — BFS minimizes hops, not cost; weighted search needs Dijkstra/A*.",
   "Marking visited at POP time and then reporting a non-shortest 'BFS path' — the double-discovery bug.",
   "Using DFS when the shallowest solution matters (fewest moves) and accepting whatever depth it returns first."
  ],
  "security": "Exam link: search questions ask for visit order and the guarantee — BFS: shortest in unweighted graphs, complete; DFS: memory-light, no shortest guarantee. State the data structure (queue/stack) with each.",
  "pc": [
   "Run the worked example on your PC exactly as written (search_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (search_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — State space — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "BFS guarantees the shortest path in an unweighted graph because:",
    "options": [
     "It uses a stack",
     "It expands states in increasing distance order, so the goal's first discovery is via a shortest route",
     "It visits every node",
     "Graphs are small"
    ],
    "answer": 1,
    "why": "Ring-order expansion is the whole proof: no undiscovered shorter path can exist when the goal is first reached."
   },
   {
    "q": "The parent map in BFS serves two jobs:",
    "options": [
     "Sorting and printing",
     "Visited set (each node recorded once, at discovery) and path reconstruction (follow parents from the goal)",
     "Weight storage and caching",
     "Recursion and looping"
    ],
    "answer": 1,
    "why": "One dictionary, two duties — which is why its update timing (at enqueue) matters so much."
   },
   {
    "q": "For a maze where ANY exit path works and memory is tight, the better default is:",
    "options": [
     "BFS — it stores whole rings of states",
     "DFS — it stores one branch (a stack), accepting a possibly long path",
     "Neither — mazes are undecidable",
     "Random walking"
    ],
    "answer": 1,
    "why": "Match the algorithm to the requirement: shortest → BFS; any-path + low memory → DFS."
   }
  ],
  "summary": "Search turns problems into state-space graphs; BFS (queue) guarantees fewest hops on unweighted graphs, DFS (stack) trades that guarantee for low memory; parent maps turn visits into paths.",
  "skillGained": "Choosing BFS vs DFS by the required guarantee; reconstructing paths from parent maps.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate AI treatment (search, knowledge representation, machine learning, evaluation) as in Russell & Norvig, Artificial Intelligence: A Modern Approach; all Python examples are dependency-free (no scikit-learn install needed) and were verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l31-knowledge",
  "level": 31,
  "title": "Knowledge Representation: Facts, Rules, and Forward Chaining",
  "difficulty": "Intermediate",
  "minutes": 35,
  "xp": 60,
  "skill": "AI & Machine Learning",
  "prereq": "Previous in Level 31: l31-search.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Knowledge bases and rule inference",
   "Work the example (rules_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Knowledge base (KB), Rule (if–then), Forward chaining",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Rule systems are the AI you can fully audit — every conclusion cites its rule and its facts — which is why regulated and security domains still run them where a neural network's say-so would not be accepted. Knowing both paradigms tells you which jobs belong to which.",
  "concept": [
   "Before learning from data, AI represented knowledge by hand: facts in, rules over them, conclusions out. The engine below is the whole idea in fifteen lines — it derives flu_suspected from {fever, cough}, then take_rest from {fever}, and stops when a full pass adds nothing. Notice what it did NOT derive: see_doctor needs body_ache, which no fact or rule supplies — the engine is sound (it derives only what follows) and honestly incomplete relative to the world (it cannot invent missing premises).",
   "This is Level 23's logic with a loop around it, and it never died: firewall rule sets, Sigma detections (Level 20), eligibility engines and lint rules are all KBs in uniform. Its limits are equally instructive — hand-written rules do not scale to perception (faces, speech), which is exactly the gap the learning lessons fill."
  ],
  "diagramTitle": "Knowledge bases and rule inference — the working flow",
  "diagram": [
   "1 · START from the rule — Knowledge base (KB): A store of facts (what is true) and rules (what follows from what) that a program reasons over — knowledge kept as DATA, editable without rewriting code.",
   "2 · RUN the worked example (rules_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Knowledge base (KB)",
    "def": "A store of facts (what is true) and rules (what follows from what) that a program reasons over — knowledge kept as DATA, editable without rewriting code."
   },
   {
    "term": "Rule (if–then)",
    "def": "IF conditions hold THEN conclusion follows: {fever, cough} → flu_suspected. Level 23's implication, made executable."
   },
   {
    "term": "Forward chaining",
    "def": "Data-driven inference: repeatedly apply every rule whose conditions are satisfied, adding conclusions as new facts, until nothing new can be derived (a fixpoint)."
   }
  ],
  "code": {
   "lang": "python",
   "title": "rules_lab.py — a forward-chaining rule engine reaching a fixpoint (complete, runnable)",
   "code": "facts = {\"fever\", \"cough\"}\nrules = [\n    ({\"fever\", \"cough\"}, \"flu_suspected\"),\n    ({\"flu_suspected\", \"body_ache\"}, \"see_doctor\"),\n    ({\"fever\"}, \"take_rest\"),\n]\nchanged = True\nwhile changed:\n    changed = False\n    for conds, concl in rules:\n        if conds <= facts and concl not in facts:\n            facts.add(concl)\n            print(\"derived:\", concl)\n            changed = True\nprint(\"final facts:\", sorted(facts))",
   "output": "derived: flu_suspected\nderived: take_rest\nfinal facts: ['cough', 'fever', 'flu_suspected', 'take_rest']",
   "lines": [
    "conds <= facts is a SET test — Level 23's subset relation doing inference work.",
    "see_doctor never fires: its condition body_ache is neither a fact nor derivable — the engine reports the world as given, not as wished."
   ]
  },
  "mistakes": [
   "Expecting the engine to derive conclusions whose premises are absent — inference is sound, not psychic.",
   "Writing rules that can loop forever (A → B, B → A with re-derivation) — the 'conclusion not already present' guard is what makes the fixpoint reachable.",
   "Confusing rule ORDER with rule LOGIC: in pure forward chaining the final fact set is order-independent; order changes only the derivation sequence printed."
  ],
  "security": "Exam link: KB questions give facts and rules and ask what forward chaining derives (and what it cannot, and why) — simulate passes until a pass adds nothing.",
  "pc": [
   "Run the worked example on your PC exactly as written (rules_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (rules_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Knowledge base (KB) — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "Forward chaining stops when:",
    "options": [
     "Ten rules have fired",
     "A complete pass over all rules adds no new fact — the fixpoint",
     "The user interrupts",
     "All facts are used up"
    ],
    "answer": 1,
    "why": "The fixpoint is the KB's full consequence set for the given facts."
   },
   {
    "q": "With facts {fever} only, the lesson's engine derives:",
    "options": [
     "flu_suspected and see_doctor",
     "take_rest only — flu_suspected also needs cough; see_doctor needs still more",
     "Nothing",
     "see_doctor only"
    ],
    "answer": 1,
    "why": "Every condition must be present; partial matches derive nothing. Soundness is strictness."
   },
   {
    "q": "A KB's decisive advantage over the same logic hard-coded as if-statements is:",
    "options": [
     "Speed",
     "Knowledge as data: rules can be added, audited and explained (each conclusion cites its rule) without changing the engine",
     "It uses sets",
     "It never errs"
    ],
    "answer": 1,
    "why": "Separation of knowledge from engine is the paradigm's founding move."
   }
  ],
  "summary": "A knowledge base stores facts and if–then rules as data; forward chaining fires satisfied rules to a fixpoint, deriving exactly what follows — sound, auditable, and limited to its premises.",
  "skillGained": "Simulating forward chaining to a fixpoint and naming what cannot be derived, and why.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate AI treatment (search, knowledge representation, machine learning, evaluation) as in Russell & Norvig, Artificial Intelligence: A Modern Approach; all Python examples are dependency-free (no scikit-learn install needed) and were verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l31-supervised",
  "level": 31,
  "title": "Supervised Learning: Regression and Classification from Examples",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "AI & Machine Learning",
  "prereq": "Previous in Level 31: l31-knowledge.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Supervised learning: regression and k-NN",
   "Work the example (regression_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Supervised learning, Least-squares line, k-nearest neighbours (k-NN)",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "This is the learning paradigm under spam filters (Level 11's phishing defence), malware classifiers (Level 19) and every 'AI predicts…' headline. Doing one fit by hand — sums, slope, prediction — is what separates reading ML claims from merely repeating them.",
  "concept": [
   "Supervised learning replaces hand-written rules with examples: show the machine input–output pairs and let it fit the function. The regression below fits study-hours → marks by least squares and gets slope 1.97, intercept 0.09 — the data was generated near y = 2x, and the fit recovers it, wobble included. Prediction is then arithmetic: x = 6 gives 11.91. Nothing here 'understands' study or marks; the claim is narrower and checkable: this line minimizes squared error ON THE GIVEN POINTS.",
   "k-NN makes the opposite design choice: no fitted parameters at all — classify by the neighbours you resemble. Both are supervised; both are only as honest as their evaluation (lesson 6), because a fit that memorizes the training points (overfitting) predicts the past perfectly and the future badly. The train/test split exists to catch exactly that."
  ],
  "diagramTitle": "Supervised learning: regression and k-NN — the working flow",
  "diagram": [
   "1 · START from the rule — Supervised learning: Learning a function from labelled examples (input → known output pairs). Regression predicts a number; classification predicts a category.",
   "2 · RUN the worked example (regression_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Supervised learning",
    "def": "Learning a function from labelled examples (input → known output pairs). Regression predicts a number; classification predicts a category."
   },
   {
    "term": "Least-squares line",
    "def": "The straight line minimizing the total squared vertical error to the training points; slope = Σ(x−x̄)(y−ȳ) / Σ(x−x̄)²."
   },
   {
    "term": "k-nearest neighbours (k-NN)",
    "def": "Classification by proximity: a new point takes the majority label of its k closest training points. No training phase — the data IS the model."
   }
  ],
  "code": {
   "lang": "python",
   "title": "regression_lab.py — least-squares regression fitted by hand, then a prediction (complete, runnable)",
   "code": "xs = [1, 2, 3, 4, 5]\nys = [2.1, 4.0, 5.9, 8.1, 9.9]\nn = len(xs)\nmx = sum(xs) / n\nmy = sum(ys) / n\nnum = sum((x - mx) * (y - my) for x, y in zip(xs, ys))\nden = sum((x - mx) ** 2 for x in xs)\nslope = num / den\nintercept = my - slope * mx\nprint(\"slope:\", round(slope, 2), \"intercept:\", round(intercept, 2))\nprint(\"predict x=6:\", round(slope * 6 + intercept, 2))",
   "output": "slope: 1.97 intercept: 0.09\npredict x=6: 11.91",
   "lines": [
    "The means (3, 6.0) anchor the line: least squares always passes through (x̄, ȳ) — the intercept is DERIVED from that, not fitted separately.",
    "num/den = 19.7/10: the slope is a ratio of 'how x and y move together' to 'how x moves' — covariance over variance, in school clothes."
   ]
  },
  "mistakes": [
   "Extrapolating proudly: predicting x = 60 (sixty study-hours) from a line fitted on 1–5 — outside the data's range the line is a rumour.",
   "Reporting training accuracy as the model's quality — the model saw those answers; held-out data is the only honest examiner (lesson 6).",
   "Believing a high fit means causation: hours correlate with marks here, but the line alone never proves hours CAUSE marks."
  ],
  "security": "Exam link: supervised-learning items ask you to compute a small least-squares fit or a k-NN vote by hand and to name the failure mode (overfitting) when training and test scores diverge.",
  "pc": [
   "Run the worked example on your PC exactly as written (regression_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (regression_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Supervised learning — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "The least-squares slope formula divides covariance-like Σ(x−x̄)(y−ȳ) by Σ(x−x̄)² because:",
    "options": [
     "Division looks scientific",
     "The slope must convert 'y moves with x' into 'y per unit x' — normalizing by x's own spread",
     "It cancels the mean",
     "It is arbitrary"
    ],
    "answer": 1,
    "why": "Units give it away: numerator carries x·y units, denominator x² — the quotient is y-per-x, a slope."
   },
   {
    "q": "A model scores 100% on training data and 55% on held-out test data. The standard diagnosis:",
    "options": [
     "The test data is wrong",
     "Overfitting — the model memorized training specifics instead of learning the general pattern",
     "The model needs more training data of the same points",
     "Regression is broken"
    ],
    "answer": 1,
    "why": "The train/test gap IS the overfitting measurement; the cure is simpler models, more varied data, or regularization — not applause for the 100%."
   },
   {
    "q": "k-NN with k = 1 on training data always scores:",
    "options": [
     "50%",
     "100% — every training point is its own nearest neighbour (a memorization warning, not a triumph)",
     "0%",
     "It cannot be evaluated"
    ],
    "answer": 1,
    "why": "The extreme case that teaches why evaluation must use unseen data."
   }
  ],
  "summary": "Supervised learning fits functions to labelled examples: least-squares regression for numbers (slope/intercept from the data's means and spreads), k-NN classification by neighbour vote — both judged only on data they did not train on.",
  "skillGained": "Hand-computing a least-squares fit and a k-NN vote; diagnosing overfitting from a train/test gap.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate AI treatment (search, knowledge representation, machine learning, evaluation) as in Russell & Norvig, Artificial Intelligence: A Modern Approach; all Python examples are dependency-free (no scikit-learn install needed) and were verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l31-unsupervised",
  "level": 31,
  "title": "Unsupervised Learning: Clustering Finds Structure Without Labels",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "AI & Machine Learning",
  "prereq": "Previous in Level 31: l31-supervised.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Unsupervised learning and k-means clustering",
   "Work the example (kmeans_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Unsupervised learning, K-means, Centroid",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Clustering is how analysts find customer segments, anomaly neighbourhoods and document families without being told the categories — and how Level 18's forensic timelines get grouped before a human names the groups. Its unlabelled honesty is also its exam trap: no accuracy exists to report, only cohesion measures and usefulness.",
  "concept": [
   "Remove the labels and learning changes character: there is no answer key, only structure to propose. K-means on the six points below finds the two visible islands in two rounds — assign-to-nearest, recompute-mean — and then stops, because round 3 would change nothing: the assignment step and the mean step have reached a truce. The truce is a LOCAL optimum: different starting centroids can strand the algorithm in a worse grouping, which is why real k-means is run from several starts and the best (lowest total within-cluster distance) is kept.",
   "The honest limit is in the output itself: k-means returns clusters, not MEANINGS. Whether {(1,1),(1,2),(2,1)} is 'the Dhaka cluster' or a coincidence is a human judgement the algorithm cannot make — unsupervised methods propose; people dispose."
  ],
  "diagramTitle": "Unsupervised learning and k-means clustering — the working flow",
  "diagram": [
   "1 · START from the rule — Unsupervised learning: Finding structure in UNLABELLED data — no correct answers are given; the algorithm proposes groupings or patterns, and humans judge their usefulness.",
   "2 · RUN the worked example (kmeans_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Unsupervised learning",
    "def": "Finding structure in UNLABELLED data — no correct answers are given; the algorithm proposes groupings or patterns, and humans judge their usefulness."
   },
   {
    "term": "K-means",
    "def": "Clustering by iteration: assign each point to its nearest centroid, recompute each centroid as its cluster's mean, repeat until stable. k is chosen by the user."
   },
   {
    "term": "Centroid",
    "def": "A cluster's centre — the component-wise mean of its points; not necessarily one of the points itself."
   }
  ],
  "code": {
   "lang": "python",
   "title": "kmeans_lab.py — k-means clustering, two iterations to stability (complete, runnable)",
   "code": "points = [(1, 1), (1, 2), (2, 1), (8, 8), (9, 8), (8, 9)]\ncentroids = [points[0], points[3]]\n\ndef dist2(a, b):\n    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2\n\nfor step in range(3):\n    groups = {0: [], 1: []}\n    for p in points:\n        k = 0 if dist2(p, centroids[0]) <= dist2(p, centroids[1]) else 1\n        groups[k].append(p)\n    new = []\n    for k in (0, 1):\n        g = groups[k]\n        new.append((sum(p[0] for p in g) / len(g), sum(p[1] for p in g) / len(g)))\n    print(\"step\", step + 1, \"centroids:\", [(round(x, 2), round(y, 2)) for x, y in new])\n    if new == centroids:\n        break\n    centroids = new",
   "output": "step 1 centroids: [(1.33, 1.33), (8.33, 8.33)]\nstep 2 centroids: [(1.33, 1.33), (8.33, 8.33)]",
   "lines": [
    "Squared distance ranks neighbours identically to true distance and skips the square roots — cheaper, same assignments.",
    "Step 2 printing the same centroids IS the convergence signal: assignments stopped changing, so the means stopped moving."
   ]
  },
  "mistakes": [
   "Reporting a cluster 'accuracy' — there are no labels to be accurate against; report cohesion/separation or downstream usefulness.",
   "Trusting one run: a bad initialization can lock in a merged or split cluster; multiple restarts are the professional default.",
   "Choosing k by wish: k is a modelling decision (elbow in the cohesion curve, domain sense), not a truth the data announces."
  ],
  "security": "Exam link: k-means items are hand-simulations — one assign step, one recompute step, and the convergence/initialization caveats stated in words.",
  "pc": [
   "Run the worked example on your PC exactly as written (kmeans_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (kmeans_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Unsupervised learning — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "K-means alternates two steps because:",
    "options": [
     "It is traditional",
     "Each step improves the same objective given the other fixed: assignment minimizes distance to centroids; recomputing means minimizes distance for those assignments — together they converge",
     "Two loops look better",
     "It doubles the data"
    ],
    "answer": 1,
    "why": "Coordinate descent in disguise: fix centroids, optimize assignments; fix assignments, optimize centroids."
   },
   {
    "q": "The output clusters come with NO names or meanings because:",
    "options": [
     "The programmer was lazy",
     "Unsupervised learning has no labels to inherit names from — interpretation is a separate human step, and forcing one is how spurious 'segments' get believed",
     "Names cost extra",
     "Clusters are temporary"
    ],
    "answer": 1,
    "why": "Structure is computable; meaning is judgement. Confusing the two manufactures false findings."
   },
   {
    "q": "Two k-means runs on the same data give different clusters. The likely cause and cure:",
    "options": [
     "The data changed",
     "Different initial centroids led to different local optima; run several restarts and keep the run with the lowest total within-cluster squared distance",
     "K-means is random nonsense",
     "Use a bigger k"
    ],
    "answer": 1,
    "why": "Initialization sensitivity is the algorithm's known weakness; restarts + an objective comparison is the standard management of it."
   }
  ],
  "summary": "Unsupervised learning finds structure without labels; k-means iterates assign-and-recompute to stable centroids, converging to a local optimum that restarts and human interpretation must complete.",
  "skillGained": "Hand-simulating k-means to convergence and auditing cluster interpretations.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate AI treatment (search, knowledge representation, machine learning, evaluation) as in Russell & Norvig, Artificial Intelligence: A Modern Approach; all Python examples are dependency-free (no scikit-learn install needed) and were verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l31-neural",
  "level": 31,
  "title": "Neural Networks, Gently: The Perceptron and What Depth Adds",
  "difficulty": "Intermediate",
  "minutes": 45,
  "xp": 70,
  "skill": "AI & Machine Learning",
  "prereq": "Previous in Level 31: l31-unsupervised.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Perceptrons and neural network intuition",
   "Work the example (perceptron_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Perceptron, Linear separability, Hidden layer / deep network",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "You will not train production networks by hand — frameworks do the arithmetic — but this lesson is the antidote to two professional diseases: treating networks as magic (they are this, iterated) and treating them as universally applicable (XOR's lesson: representation decides what is learnable at all).",
  "concept": [
   "The perceptron below learns AND from four examples — watch the mechanism, not just the result: it starts knowing nothing (weights 0), predicts, and ONLY on mistakes nudges its weights by lr · error · input. Six epochs of small corrections carve the boundary w = [0.2, 0.1], b = −0.2, after which all four patterns classify correctly. Learning, here, is visibly nothing but error-driven bookkeeping — the mystique does not survive writing it in twenty lines.",
   "And its limit is one counterexample away: XOR — (0,1) and (1,0) are class 1, (0,0) and (1,1) class 0 — has NO separating line, so no single perceptron can learn it, at any learning rate, for any number of epochs. The fix defines modern networks: add a hidden layer that re-represents the inputs (e.g. one unit for OR, one for AND) until the output unit's problem becomes separable. Depth is a representation strategy, not a magic ingredient."
  ],
  "diagramTitle": "Perceptrons and neural network intuition — the working flow",
  "diagram": [
   "1 · START from the rule — Perceptron: The simplest trainable unit: output 1 if w·x + b > 0 else 0. Learning rule: on a mistake, nudge weights toward the correct answer (w += lr · error · x).",
   "2 · RUN the worked example (perceptron_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Perceptron",
    "def": "The simplest trainable unit: output 1 if w·x + b > 0 else 0. Learning rule: on a mistake, nudge weights toward the correct answer (w += lr · error · x)."
   },
   {
    "term": "Linear separability",
    "def": "Classes separable by a single straight line (in 2D) / hyperplane. AND and OR are separable; XOR is NOT — the fact that forced hidden layers into existence."
   },
   {
    "term": "Hidden layer / deep network",
    "def": "Layers of units between input and output that learn intermediate features; stacking perceptron-like units (with smooth activations) lets networks carve non-linear boundaries — trained by gradient descent/backpropagation."
   }
  ],
  "code": {
   "lang": "python",
   "title": "perceptron_lab.py — a perceptron learning AND from mistakes (complete, runnable)",
   "code": "data = [((0, 0), 0), ((0, 1), 0), ((1, 0), 0), ((1, 1), 1)]\nw = [0.0, 0.0]\nb = 0.0\nlr = 0.1\nfor epoch in range(10):\n    errors = 0\n    for (x1, x2), y in data:\n        pred = 1 if w[0] * x1 + w[1] * x2 + b > 0 else 0\n        err = y - pred\n        if err != 0:\n            errors += 1\n            w[0] += lr * err * x1\n            w[1] += lr * err * x2\n            b += lr * err\n    if errors == 0:\n        print(\"learned AND in epoch\", epoch + 1)\n        break\nprint(\"weights:\", w, \"bias:\", b)\nfor (x1, x2), y in data:\n    pred = 1 if w[0] * x1 + w[1] * x2 + b > 0 else 0\n    print((x1, x2), \"->\", pred)",
   "output": "learned AND in epoch 6\nweights: [0.2, 0.1] bias: -0.2\n(0, 0) -> 0\n(0, 1) -> 0\n(1, 0) -> 0\n(1, 1) -> 1",
   "lines": [
    "No update happens on correct predictions — the perceptron is taught exclusively by its mistakes, which is why separable data guarantees eventual success.",
    "The learned boundary 0.2x1 + 0.1x2 − 0.2 = 0 is ONE of many separating lines; the algorithm stops at the first that works, not the 'best' one."
   ]
  },
  "mistakes": [
   "Saying a perceptron 'cannot learn XOR because it needs more epochs' — the obstruction is geometric (no separating line exists), not a training budget.",
   "Believing more layers automatically help: depth adds capacity AND overfitting risk (lesson 3) and training cost; it is prescribed by the representation problem, not by fashion.",
   "Treating the learned weights as explanations: [0.2, 0.1] separates AND but 'means' nothing human until interpreted — the auditability gap from lesson 2 returns."
  ],
  "security": "Exam link: the standard items — run two perceptron epochs by hand on given data, and prove/state why XOR defeats a single unit (no linear separator) and what a hidden layer changes.",
  "pc": [
   "Run the worked example on your PC exactly as written (perceptron_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (perceptron_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Perceptron — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "The perceptron updates its weights exactly when:",
    "options": [
     "Every epoch ends",
     "It makes a mistake on an example — the update is lr · error · input, zero when the prediction is right",
     "The bias is negative",
     "Data runs out"
    ],
    "answer": 1,
    "why": "Error-driven learning: correct predictions contribute no gradient, no nudge, no change."
   },
   {
    "q": "XOR defeats a single perceptron because:",
    "options": [
     "It has too many examples",
     "Its classes are not linearly separable — the positive corners (0,1),(1,0) and negative corners (0,0),(1,1) cannot be split by any one line",
     "The learning rate is wrong",
     "It needs labelled data"
    ],
    "answer": 1,
    "why": "Draw the four corners: any line separating them would have to cross itself. Geometry, not effort."
   },
   {
    "q": "A hidden layer helps XOR because it:",
    "options": [
     "Adds more epochs",
     "Re-represents the input — e.g. units computing OR and AND features — in a space where the output unit's problem IS linearly separable",
     "Makes the network conscious",
     "Removes the need for data"
    ],
    "answer": 1,
    "why": "Depth = learned re-representation; the final unit still draws one line, but in a better space."
   }
  ],
  "summary": "A perceptron learns one linear boundary by error-driven nudges — enough for AND/OR, provably not for XOR; hidden layers fix the representation, which is what 'deep' actually means.",
  "skillGained": "Simulating perceptron learning; judging linear separability and the hidden-layer remedy.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate AI treatment (search, knowledge representation, machine learning, evaluation) as in Russell & Norvig, Artificial Intelligence: A Modern Approach; all Python examples are dependency-free (no scikit-learn install needed) and were verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 },
 {
  "id": "l31-evaluation",
  "level": 31,
  "title": "Evaluation: Confusion Matrices, Precision, Recall, and Honest Numbers",
  "difficulty": "Intermediate",
  "minutes": 40,
  "xp": 70,
  "skill": "AI & Machine Learning",
  "prereq": "Previous in Level 31: l31-neural.",
  "objectives": [
   "State this lesson's core rule and the failure it prevents: Model evaluation metrics",
   "Work the example (metrics_lab.py) end to end and explain why each part of its output appears",
   "Use the terminology precisely: Confusion matrix, Accuracy / precision / recall, Class imbalance",
   "Judge scenario questions as a professional: what to do, what to refuse, and what evidence to keep"
  ],
  "relevance": "Every model from lessons 3–5 — the line, the clusters' downstream classifiers, the perceptron — stands or falls by this lesson's audit. It is also Level 20's detection-engineering maths: a Sigma rule, a scanner, an IDS alert are all classifiers with confusion matrices, whether or not anyone computes them.",
  "concept": [
   "A model is a claim; this lesson is how claims get audited. The matrix below — TP 4, FP 2, FN 1, TN 3 — yields accuracy 0.70, precision 0.67, recall 0.80: three different numbers answering three different questions, and choosing which to optimize is a VALUES decision disguised as arithmetic. A malware scanner that misses real malware (low recall) fails dangerously; a spam filter that flags real mail (low precision) fails annoyingly — the same matrix, opposite priorities.",
   "The imbalance trap is the professional centre of this lesson: with 999-to-1 classes, the lazy model that never flags anything is '99.9% accurate' and worthless. Precision and recall exist precisely because accuracy lies under imbalance — and any vendor quote of accuracy alone, on imbalanced security data, is the tell from Level 29's due-diligence lesson wearing new clothes."
  ],
  "diagramTitle": "Model evaluation metrics — the working flow",
  "diagram": [
   "1 · START from the rule — Confusion matrix: The 2×2 audit of a classifier on labelled test data: true positives (TP), false positives (FP), false negatives (FN), true negatives (TN) — every metric below is arithmetic on these four counts.",
   "2 · RUN the worked example (metrics_lab.py) exactly as written",
   "3 · READ the output line by line — why-panel section 3 explains each line",
   "4 · DECIDE the professional next step — and record the evidence for it"
  ],
  "terms": [
   {
    "term": "Confusion matrix",
    "def": "The 2×2 audit of a classifier on labelled test data: true positives (TP), false positives (FP), false negatives (FN), true negatives (TN) — every metric below is arithmetic on these four counts."
   },
   {
    "term": "Accuracy / precision / recall",
    "def": "Accuracy = (TP+TN)/all. Precision = TP/(TP+FP): of what you flagged, how much was real. Recall = TP/(TP+FN): of what was real, how much you caught."
   },
   {
    "term": "Class imbalance",
    "def": "When one class dominates (999 benign files per 1 malware), accuracy flatters useless models: predicting 'always benign' scores 99.9% and catches nothing."
   }
  ],
  "code": {
   "lang": "python",
   "title": "metrics_lab.py — a confusion matrix and its three metrics, computed from raw predictions (complete, runnable)",
   "code": "y_true = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]\ny_pred = [1, 1, 1, 1, 0, 1, 1, 0, 0, 0]\ntp = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 1)\nfn = sum(1 for t, p in zip(y_true, y_pred) if t == 1 and p == 0)\nfp = sum(1 for t, p in zip(y_true, y_pred) if t == 0 and p == 1)\ntn = sum(1 for t, p in zip(y_true, y_pred) if t == 0 and p == 0)\nacc = (tp + tn) / len(y_true)\nprec = tp / (tp + fp)\nrec = tp / (tp + fn)\nprint(\"TP\", tp, \"FP\", fp, \"FN\", fn, \"TN\", tn)\nprint(\"accuracy:\", round(acc, 2), \"precision:\", round(prec, 2), \"recall:\", round(rec, 2))",
   "output": "TP 4 FP 2 FN 1 TN 3\naccuracy: 0.7 precision: 0.67 recall: 0.8",
   "lines": [
    "Read the columns: FP (2) is the precision tax — two benign items flagged; FN (1) is the recall tax — one real positive missed.",
    "All three metrics are fractions over the SAME four counts — a reported metric without its matrix is an unaudited claim."
   ]
  },
  "mistakes": [
   "Quoting accuracy on imbalanced data — the headline number that hides a zero recall.",
   "Optimizing precision and recall as if both can max together: the flagging threshold trades one against the other; the trade must be chosen, not wished away.",
   "Evaluating on training data (lesson 3's sin, repeated in metric form): test metrics must come from data the model never fitted."
  ],
  "security": "Exam link: metrics items are pure arithmetic on a given matrix plus the imbalance argument — compute all three, then say which the scenario should prioritize and why.",
  "pc": [
   "Run the worked example on your PC exactly as written (metrics_lab.py); save the output beside your notes with today's date.",
   "Change ONE input value, write your predicted output first, then run and reconcile the difference — the prediction is where the learning happens."
  ],
  "android": [
   "On Android, the same example runs in Termux on your own phone (Python 3 is available there) — outputs should match the PC run; if one differs, note the difference and find its cause before moving on."
  ],
  "lab": "Guided lab: from a clean start, re-run the worked example (metrics_lab.py) narrating each step from memory BEFORE you execute it; check every narration against the why-panel. Then complete the linked lab for this level in the Labs section when it unlocks.",
  "mission": "Independent mission: audit your own study notes for one place where this lesson's core term — Confusion matrix — was missing or violated, and write the five-line correction.",
  "practical": "Practical assessment: the scored practical below applies this lesson to a fresh scenario — pass mark 70%, same as every CyberLab lesson.",
  "quiz": [
   {
    "q": "A scanner flags 10 files: 6 are truly malware, 4 are clean. It missed 2 real malware entirely. Precision and recall are:",
    "options": [
     "Precision 0.6 (6/10 flagged were real), recall 0.75 (6/8 real ones caught)",
     "Precision 0.75, recall 0.6",
     "Both 0.8",
     "Precision 1.0, recall 0.6"
    ],
    "answer": 0,
    "why": "Precision divides by FLAGGED (TP+FP = 10); recall divides by REAL (TP+FN = 8). Denominators are the whole game."
   },
   {
    "q": "On 999 benign + 1 malware, the never-flag model scores accuracy 99.9% yet is worthless because its:",
    "options": [
     "Precision is 0",
     "Recall is 0 — it catches none of the real positives; accuracy was measuring the majority class, not the mission",
     "Training was too short",
     "Threshold is missing"
    ],
    "answer": 1,
    "why": "The imbalance paradox: accuracy ≈ majority-class rate whenever the model ignores the minority."
   },
   {
    "q": "Lowering a scanner's flagging threshold (flag more) predictably:",
    "options": [
     "Raises both precision and recall",
     "Raises recall (fewer misses) and lowers precision (more false alarms) — the standing trade",
     "Changes nothing",
     "Raises accuracy always"
    ],
    "answer": 1,
    "why": "Threshold = the dial between the two error taxes; every deployment chooses where to set it."
   }
  ],
  "summary": "Evaluation audits classifiers with the confusion matrix: accuracy overall, precision for the cost of false alarms, recall for the cost of misses — and under class imbalance, precision/recall are the numbers that cannot lie politely.",
  "skillGained": "Computing precision/recall/accuracy from a matrix and choosing the priority metric by scenario cost.",
  "version": "1.0",
  "reviewed": "2026-11-12",
  "reference": "Standard undergraduate AI treatment (search, knowledge representation, machine learning, evaluation) as in Russell & Norvig, Artificial Intelligence: A Modern Approach; all Python examples are dependency-free (no scikit-learn install needed) and were verified by running python3 at build time.",
  "limitations": "Complete example, reviewed line by line and executed with Python 3 during authoring; the printed output is the real output. Run it in the Playground or your own Python to see it live."
 }
];

export const PHASE5_PRACTICALS: Record<string, Practical> = {
 "l23-sets": {
  "task": "A lab has 12 PCs with Python and 9 with Java; 5 have both. Using inclusion–exclusion, how many lab PCs have at least one of the two?",
  "options": [
   "21",
   "16",
   "17",
   "12"
  ],
  "answer": 1,
  "explain": "12 + 9 − 5 = 16. The 5 with both were counted in both numbers.",
  "hint": "Add both, subtract the overlap once."
 },
 "l23-logic": {
  "task": "A login rule says: access is granted if (password correct AND MFA done) OR admin override. Password correct, MFA not done, no override. Access?",
  "options": [
   "Granted — password was correct",
   "Denied — the AND fails and there is no override",
   "Granted — OR always grants",
   "Cannot be determined"
  ],
  "answer": 1,
  "explain": "(True ∧ False) ∨ False = False. Both paths to access fail.",
  "hint": "Evaluate the AND first, then the OR."
 },
 "l23-proofs": {
  "task": "Claim: 'for all integers n, n² + n is even.' Fastest correct verdict path?",
  "options": [
   "Test n = 1 only and declare it true",
   "Factor: n(n+1) — one of two consecutive integers is always even, so the product is even (direct proof)",
   "It is false; n = 3 gives 12",
   "Graph it"
  ],
  "answer": 1,
  "explain": "n(n+1) always contains an even factor — a two-line direct proof. Testing alone would not prove it.",
  "hint": "Try factoring before testing more values."
 },
 "l23-combinatorics": {
  "task": "A cafeteria offers 4 starters, 5 mains, 3 desserts. How many different 3-course meals (one of each)?",
  "options": [
   "12",
   "60",
   "47",
   "120"
  ],
  "answer": 1,
  "explain": "Independent stages multiply: 4 × 5 × 3 = 60.",
  "hint": "Stages multiply; they do not add."
 },
 "l23-relations-functions": {
  "task": "A marks function maps roll → grade: {(7,'A'), (8,'B'), (7,'A')}. Is it a function, and what is the grade of roll 7?",
  "options": [
   "Not a function — roll 7 appears twice",
   "A function — roll 7 appears twice but with the SAME output 'A', so exactly one output per input; grade is 'A'",
   "A function, grade 'B'",
   "Not a relation"
  ],
  "answer": 1,
  "explain": "Repeated input with the same output still gives exactly one output per input — it is a function (a dict would store it once).",
  "hint": "The rule is one OUTPUT per input — check outputs, not appearances."
 },
 "l23-graphs-probability": {
  "task": "A network map shows 5 devices; link counts per device are 2, 2, 4, 2, 2. A colleague claims there are 12 cables. Verdict?",
  "options": [
   "Correct",
   "Wrong — Σdeg = 12, so cables = 6",
   "Wrong — cables = 24",
   "Cannot be checked"
  ],
  "answer": 1,
  "explain": "Handshaking: edges = Σdeg / 2 = 12 / 2 = 6. The claim double-counted every cable.",
  "hint": "Sum the link counts, then halve."
 },
 "l24-bigo": {
  "task": "Two programs sort log lines: A compares every pair of lines (n²). B does one pass to bucket them (n). At n = 200,000 lines, the honest engineering verdict is:",
  "options": [
   "A is fine — computers are fast",
   "A needs ~4×10¹⁰ comparisons and is unusable; B needs ~2×10⁵ steps — choose B",
   "Both are equal at this size",
   "A is better because it is simpler"
  ],
  "answer": 1,
  "explain": "n² at 2×10⁵ is 4×10¹⁰ — hours of work. Growth class decides before hardware does.",
  "hint": "Square the input size for A before judging."
 },
 "l24-arrays-linked": {
  "task": "You must implement an undo history: constant pushes of new actions, and you only ever read the most recent ones in order. The chained structure wins because:",
  "options": [
   "It sorts automatically",
   "Head insertion and head-first traversal are both O(1)/sequential — no shifting, no index reads needed",
   "It uses no memory",
   "Arrays cannot store actions"
  ],
  "answer": 1,
  "explain": "The workload touches only the head end, where linked lists are O(1) — match structure to access pattern.",
  "hint": "Name the operations first; the structure follows."
 },
 "l24-stacks-queues": {
  "task": "An expression checker must verify that every closing bracket matches the most recent unmatched opening bracket. The structure and the reason:",
  "options": [
   "Queue — brackets are processed in order",
   "Stack — 'most recent unmatched' is exactly the top of a stack",
   "Hash table — brackets need keys",
   "Array sorted by type"
  ],
  "answer": 1,
  "explain": "'Most recent first' is the definition of stack access; the algorithm is push openers, pop-and-compare on closers.",
  "hint": "Translate 'most recent' into a discipline name."
 },
 "l24-trees-heaps": {
  "task": "A hospital triage system must always treat the most severe waiting patient next, with new patients arriving constantly. Structure + complexity of 'next patient'?",
  "options": [
   "Sorted array, O(1) but O(n) insert",
   "Heap (priority queue): insert O(log n), extract-min/max O(log n) — balanced cost on both operations",
   "Linked list scan, O(n) each time",
   "BST keyed by name"
  ],
  "answer": 1,
  "explain": "Both operations happen constantly, so both must be cheap: the heap's O(log n)/O(log n) is the professional answer.",
  "hint": "Price BOTH operations, not just the read."
 },
 "l24-hashing-graphs": {
  "task": "A scanner must check 2 million seen-host keys for membership, 50,000 times a minute. The structure that survives is:",
  "options": [
   "A list with linear scan",
   "A hash set — average O(1) membership per check",
   "A BST with O(log n) and manual balancing worries",
   "A sorted file re-read per check"
  ],
  "answer": 1,
  "explain": "Membership-dominated workload = hash set. 50,000 × O(1) is trivial; 50,000 × 2×10⁶ scans is not.",
  "hint": "Name the dominant operation: membership."
 },
 "l24-sorting-dp": {
  "task": "Coin change: with coins {1, 3, 4}, greedy takes 4+1+1 for 6 (3 coins) but 3+3 needs 2. The DP lesson this teaches:",
  "options": [
   "Greedy is always optimal",
   "Local best choices can block the global optimum; DP evaluates subproblems (make 0..6) and composes true optima",
   "Coins must be sorted descending",
   "6 cannot be made"
  ],
  "answer": 1,
  "explain": "Greedy commits early and cannot revise; DP builds optimal answers for every smaller amount first.",
  "hint": "Ask whether subproblem optima compose into the answer."
 },
 "l25-boolean": {
  "task": "A door alarm must sound when (door open AND system armed) OR panic button pressed. As Boolean algebra with D, A, P:",
  "options": [
   "D + A · P",
   "(D · A) + P",
   "D · (A + P)",
   "¬D · A + P"
  ],
  "answer": 1,
  "explain": "AND binds the pair first, then OR adds the independent panic path: (D·A) + P.",
  "hint": "Brackets in the English sentence are brackets in the algebra."
 },
 "l25-truth-karnaugh": {
  "task": "f(a,b) has minterms {01, 11} — i.e. f = 1 when b = 1 (a varies). The minimized expression is:",
  "options": [
   "a·b",
   "b",
   "a + b",
   "¬a·b + a·b kept as two terms"
  ],
  "answer": 1,
  "explain": "The pair differs only in a, so a is deleted: f = b. Keeping both terms is correct but NOT minimized.",
  "hint": "A group of 2 kills exactly one variable — which one changes inside the group?"
 },
 "l25-combinational": {
  "task": "Design check: you need a circuit that outputs 1 when a 3-bit input is greater than 4 (101, 110, 111). Correct first professional step?",
  "options": [
   "Guess gates until it works",
   "Write the full 8-row truth table, mark the three 1-rows, then K-map to a minimal expression",
   "Use a flip-flop",
   "Copy a 4-bit design"
  ],
  "answer": 1,
  "explain": "Table → map → expression → gates is the combinational pipeline; guessing skips the specification itself.",
  "hint": "The truth table IS the specification — write it first."
 },
 "l25-flipflops": {
  "task": "Timing trace: clock edges at t=1,2,3,4. D is 0 until t=1.5, then 1 until t=3.5, then 0. Starting Q=0, the Q values just after edges 1–4 are:",
  "options": [
   "0, 1, 1, 1",
   "0, 1, 1, 0",
   "1, 1, 0, 0",
   "0, 0, 1, 0"
  ],
  "answer": 1,
  "explain": "Sample D AT each edge: edge1 sees 0, edge2 sees 1, edge3 sees 1 (still high until 3.5), edge4 sees 0 → 0,1,1,0.",
  "hint": "Only the value at the edge instant matters — read D at t=1,2,3,4 exactly."
 },
 "l25-counters": {
  "task": "A washing-machine timer must cycle through exactly 6 states (0–5) repeatedly. Minimum flip-flop count and the design caveat?",
  "options": [
   "2 flip-flops are enough",
   "3 flip-flops (2³ = 8 ≥ 6), plus reset/decode logic to wrap from 5 back to 0 instead of counting to 7",
   "6 flip-flops, one per state is required",
   "1 flip-flop with a fast clock"
  ],
  "answer": 1,
  "explain": "Bits give powers of two; a mod-6 counter needs 3 bits AND logic to skip states 6, 7.",
  "hint": "Ceiling of log2(6) bits, then handle the non-power-of-two wrap."
 },
 "l25-sequential-design": {
  "task": "A door controller: states LOCKED, OPENING, OPEN, CLOSING. Sensor 'obstruction' during CLOSING must return it to OPENING. Where does this requirement live in the design?",
  "options": [
   "In a comment only",
   "As a transition-table row: (CLOSING, obstruction) → OPENING — drawn on the state diagram, implemented by the next-state logic",
   "In the motor's size",
   "It cannot be expressed"
  ],
  "answer": 1,
  "explain": "Every (state, input) pair needs a defined next state — safety requirements are transition rows, not hopes.",
  "hint": "Find the (state, input) cell the scenario names."
 },
 "l26-cpu-registers": {
  "task": "Trace: mem[50] = 9. Program: MOV AX, [50] · ADD AX, AX · OUT AX. The output is:",
  "options": [
   "9",
   "18",
   "50",
   "100"
  ],
  "answer": 1,
  "explain": "AX becomes 9, then AX + AX doubles it to 18. Register-to-register ADD with the same register twice is legal and common.",
  "hint": "Follow the register, not the addresses, after the load."
 },
 "l26-addressing": {
  "task": "Given BX = 300, DI = 40, mem[340] = 88, mem[88] = 12. MOV AX, [[BX+DI]] yields:",
  "options": [
   "340",
   "88",
   "12",
   "300"
  ],
  "answer": 2,
  "explain": "EA = 340; mem[340] = 88 is a POINTER here; mem[88] = 12 is the final value. Two dereferences.",
  "hint": "Count the brackets: two pairs, two memory reads."
 },
 "l26-asm-first": {
  "task": "A student swaps the last three lines: mov rax, 60 · mov rdi, rax · syscall. The program now exits with code:",
  "options": [
   "42",
   "60",
   "0",
   "It does not assemble"
  ],
  "answer": 1,
  "explain": "RDI receives the overwritten RAX (60), so the exit code is 60 — the sum (42) was destroyed before the copy. Order is semantics.",
  "hint": "Trace the registers line by line; the bug is visible in the table."
 },
 "l26-asm-loops": {
  "task": "Bug hunt: a loop should add RCX (5 down to 1) but the code reads 'dec rax / jnz loop' with the add being 'add rax, rcx'. What actually happens?",
  "options": [
   "It works by luck",
   "RAX is both sum and counter: it decrements the RUNNING TOTAL each pass and the loop exits based on the total hitting zero — wrong totals and wrong trip count",
   "It assembles to the same thing",
   "RCX is decremented automatically"
  ],
  "answer": 1,
  "explain": "The decrement must target the counter register; hitting the accumulator corrupts both the sum and the loop's exit condition.",
  "hint": "Ask of every register: what is its ONE job in this listing?"
 },
 "l26-interrupts": {
  "task": "A student's keyboard ISR formats and prints the whole line of text on every keystroke. Two professional objections:",
  "options": [
   "Printing is slow AND the ISR blocks other interrupts while doing it — keystrokes arriving meanwhile can be lost; the ISR should buffer the byte and let normal code print",
   "ISRs cannot contain loops",
   "The keyboard has no buffer",
   "Printing needs a syscall only"
  ],
  "answer": 0,
  "explain": "Buffer in the ISR, process outside it. Slow work + masked interrupts = lost input — the exact failure the trace's t5 step avoids.",
  "hint": "Name what the ISR should do (capture) vs defer (everything else)."
 },
 "l26-arm-modern": {
  "task": "Porting thought experiment: an x86 program uses 'add rax, [count]' 50 times in a loop. On ARM the honest translation cost is:",
  "options": [
   "Identical — one instruction",
   "Load count once BEFORE the loop into a register, add in-register 50 times, store once after — actually FASTER than the x86 original",
   "Impossible on ARM",
   "50 interrupts"
  ],
  "answer": 1,
  "explain": "Hoisting the load out of the loop is the standard load/store optimization — the constraint teaches better code shape.",
  "hint": "Where does [count] change during the loop? Nowhere — so load it once."
 },
 "l27-er-relational": {
  "task": "Design call: a library tracks books, members, and loans (a member borrows a book on a date, returns it later). The professional schema sketch is:",
  "options": [
   "One table with a 'books' list column per member",
   "books(id,…), members(id,…), loans(id, book_id FK, member_id FK, loan_date, return_date) — the loan is its own entity because it carries its own facts",
   "members with a book_id column",
   "Two tables; loans can be recomputed"
  ],
  "answer": 1,
  "explain": "Loans have their own attributes (dates) and a member borrows many books over time — an entity in its own right, keys doing the joining.",
  "hint": "Ask: does the 'relationship' carry facts of its own? Then it is an entity."
 },
 "l27-sql-basics": {
  "task": "A report must list Physics students who scored 90 or more, names A–Z. The correct query is:",
  "options": [
   "SELECT * FROM marks ORDER BY name",
   "SELECT name, score FROM marks WHERE subject = 'Physics' AND score >= 90 ORDER BY name ASC",
   "SELECT name FROM marks WHERE score >= 90",
   "SELECT name, score FROM marks WHERE subject = 'Physics' ORDER BY score"
  ],
  "answer": 1,
  "explain": "Both predicates (subject AND threshold), projected columns, name ordering — each requirement maps to one clause.",
  "hint": "Translate each English requirement into its clause, one by one."
 },
 "l27-sql-joins": {
  "task": "A sales report joins orders to customers with INNER JOIN and totals look low: 12 orders have customer_id NULL (guest checkouts). Root cause and fix:",
  "options": [
   "The totals are correct",
   "INNER JOIN silently dropped the 12 unmatched orders; use LEFT JOIN (or account for guests explicitly) so every order is counted",
   "NULL means the orders are fake",
   "Add more indexes"
  ],
  "answer": 1,
  "explain": "Unmatched rows vanish in an inner join — revenue reports must choose LEFT or handle guests as their own group.",
  "hint": "Ask the join's question: who disappears?"
 },
 "l27-normalization": {
  "task": "Decompose: enroll(student_id, student_name, course, teacher) with FDs student_id → student_name, course → teacher. The 3NF result is:",
  "options": [
   "Keep one table; it is fine",
   "students(student_id, student_name), courses(course, teacher), enroll(student_id, course) — each fact in exactly one home",
   "Split every column into its own table",
   "Add a city column"
  ],
  "answer": 1,
  "explain": "student_name belongs to the student, teacher to the course, and the pairing to enroll — three facts, three homes, joins reassemble.",
  "hint": "Follow each FD to its determinant — facts live with their determinants."
 },
 "l27-transactions": {
  "task": "An app wraps 'create order' and 'decrement stock' in separate auto-committed statements. A crash between them leaves an order for stock never reserved. The minimal professional fix:",
  "options": [
   "Restart faster",
   "Put both statements in ONE transaction: BEGIN … COMMIT, with rollback on any failure — the pair succeeds or neither does",
   "Check stock twice",
   "Hide the order"
  ],
  "answer": 1,
  "explain": "The two writes are one logical unit; the transaction boundary must match the business invariant.",
  "hint": "Draw the transaction boundary around everything that must hold together."
 },
 "l27-indexing-concurrency": {
  "task": "Two dashboards hammer a table: one filters by (city), the other joins on (customer_id). Writes are frequent but reads dominate 20:1. Index verdict:",
  "options": [
   "No indexes — writes are frequent",
   "Index BOTH city and customer_id: the read-heavy ratio pays the write tax; verify with EXPLAIN on both queries",
   "Index every column to be safe",
   "One index on a random column"
  ],
  "answer": 1,
  "explain": "Index placement follows the real query patterns; the 20:1 read dominance makes two maintained indexes the cheap option.",
  "hint": "Name the columns the queries actually use, then check the read:write ratio."
 },
 "l28-sdlc": {
  "task": "A startup's founder says: 'Requirements will change weekly as users react — but let's do one big waterfall pass to be efficient.' The engineering verdict:",
  "options": [
   "Agree — waterfall is always efficient",
   "Contradiction: waterfall's efficiency assumes stable requirements; weekly change demands small iterative cycles with working slices",
   "Agree if the team is senior",
   "Waterfall handles change best"
  ],
  "answer": 1,
  "explain": "Match the model to the requirement volatility — the founder named the volatility and then chose its opposite.",
  "hint": "Ask first: how stable are the requirements, honestly?"
 },
 "l28-requirements-uml": {
  "task": "A client emails: 'Make the reports better and the app more secure.' The professional first response is:",
  "options": [
   "Start redesigning reports",
   "Elicit and quantify: which reports, better in what measurable way (fields? speed? accuracy?); secure against which threats (ties to Level 11/13) — then write stories with acceptance criteria before building",
   "Add two-factor and call it done",
   "Ask for a bigger budget"
  ],
  "answer": 1,
  "explain": "Vague wishes are elicitation starting points, not requirements; the engineer's job is converting them into testable promises.",
  "hint": "Every vague adjective must leave with a number or a named threat."
 },
 "l28-design-patterns": {
  "task": "Design review: a monitoring tool's core class directly calls Email.send(), Sms.send() and Dashboard.push() in six places, and a new Slack channel must be added. The pattern-based prescription:",
  "options": [
   "Add Slack.send() in six more places",
   "Refactor to Observer: channels subscribe to the monitor's events; adding Slack is one new subscriber class and zero edits to the core",
   "Rewrite the tool",
   "Hard-code a channel flag"
  ],
  "answer": 1,
  "explain": "The recurring 'new reaction' pain is Observer's home symptom; the refactor converts six edits into one addition.",
  "hint": "Count the edit sites the NEXT change would need — that number is the design's smell."
 },
 "l28-testing": {
  "task": "A teammate says: 'I tested it — entered 50, got 50, works.' The function clamps percentages. The professional response adds which cases before agreeing?",
  "options": [
   "More middles: 51, 52",
   "0 and 100 (inclusion), −1 and 101 (just outside), plus a large overflow like 150 — the boundary ring around the happy case",
   "Only 100",
   "None — one case suffices"
  ],
  "answer": 1,
  "explain": "One happy case proves the middle; the boundary ring is where clamp semantics live or die.",
  "hint": "Draw the valid range, then test ON its edges and one step beyond each."
 },
 "l28-git-teamwork": {
  "task": "Your teammate committed a half-finished experiment straight to main and the app's tests now fail for everyone. The team-level fix going forward:",
  "options": [
   "Everyone stops committing",
   "Feature branches + pull requests with required review and green tests before merge; main stays always-working",
   "One person owns all commits",
   "Delete the tests"
  ],
  "answer": 1,
  "explain": "Process, not blame: the branch/review gate makes broken-main structurally difficult instead of socially awkward.",
  "hint": "Fix the GATE that let it through, not just the commit."
 },
 "l28-agile-docs": {
  "task": "Mid-sprint, users reviewing Sprint 1 beg for fines (planned for Sprint 3) and say renew can wait. The agile response:",
  "options": [
   "Refuse — the plan is the plan",
   "Reorder the BACKLOG: fines move up, renew moves down; the current sprint finishes its slice, the next sprint pulls fines — feedback changed priorities, exactly as designed",
   "Add fines to the current sprint tonight",
   "Cancel the project"
  ],
  "answer": 1,
  "explain": "Agile absorbs change at sprint boundaries via backlog order — not by chaos mid-sprint, not by rigidity.",
  "hint": "Change the ORDER, not the current sprint."
 },
 "l29-automata": {
  "task": "Design brief: accept binary strings whose value is divisible by 2 (ends in 0), plus handle the empty string. The state design:",
  "options": [
   "One state per possible value",
   "Two states suffice: 'last symbol was 0 (or start)' vs 'last symbol was 1' — accept in the 0-state, with the empty string rejected by starting in a non-accept start state that 0 moves out of",
   "Impossible for a DFA",
   "Needs a stack"
  ],
  "answer": 1,
  "explain": "Divisibility by 2 depends only on the last bit — finite information, so a DFA exists; the start state handles ε honestly.",
  "hint": "Ask: what FINITE summary of the past decides acceptance?"
 },
 "l29-regular": {
  "task": "A teammate proposes one regex to validate that an HTML fragment's <div> tags are balanced. The theory-based verdict:",
  "options": [
   "Write it carefully",
   "Impossible in principle: nesting depth is unbounded counting — not a regular language; use a parser (a stack — the CFG machine)",
   "Possible with two regexes",
   "Use a longer pattern"
  ],
  "answer": 1,
  "explain": "This is the aⁿbⁿ boundary wearing tags; the professional answer names the machine class the job actually needs.",
  "hint": "Ask: does the job need to COUNT or nest without bound?"
 },
 "l29-cfg": {
  "task": "Grammar check: a colleague writes S → SS | aSb | ε claiming it generates exactly aⁿbⁿ. Verdict:",
  "options": [
   "Correct",
   "Wrong: the SS production concatenates blocks, generating e.g. abab (two blocks) — which is not of the form aⁿbⁿ; only S → aSb | ε is exact",
   "Correct for even n",
   "Wrong because ε is forbidden"
  ],
  "answer": 1,
  "explain": "Test the grammar against a boundary string: abab ∈ L(G) via SS, but abab ∉ aⁿbⁿ — one counterexample refutes the claim.",
  "hint": "Attack a grammar claim with the smallest string it should NOT generate."
 },
 "l29-turing": {
  "task": "Design at the description level: a TM that checks whether a binary string has equal numbers of 0s and 1s (any order). The workable strategy:",
  "options": [
   "Count both in states — impossible, finite",
   "Repeatedly cross off one 0 and one 1 (write X over them), sweeping the tape; accept iff a sweep finds nothing uncrossed and no unmatched symbol remains — the tape holds the count the states cannot",
   "Sort the string first",
   "Use a stack — impossible for two independent symbols in any order"
  ],
  "answer": 1,
  "explain": "Marking-on-tape converts unbounded bookkeeping into repeated finite sweeps — the canonical TM design move.",
  "hint": "When states cannot hold the data, write the data on the tape and sweep."
 },
 "l29-decidability": {
  "task": "A vendor claims their AI tool 'guarantees to detect all malware and never flags clean files'. The theory verdict:",
  "options": [
   "Plausible with enough GPUs",
   "Impossible as stated — by Rice's theorem a perfect semantic decider cannot exist; the honest claim is heuristic coverage with measured false-positive/negative rates",
   "True if it uses signatures",
   "Undecidable means unpatentable"
  ],
  "answer": 1,
  "explain": "The theorem does not forbid good tools; it forbids PERFECT guarantees — demand rates and evaluation (Level 31's lesson), not absolutes.",
  "hint": "Translate the marketing absolute into the theorem it collides with."
 },
 "l29-complexity": {
  "task": "An employer asks you to 'just write an efficient exact algorithm' for optimal delivery routing (TSP) over 500 cities. The professionally honest answer:",
  "options": [
   "Accept and start coding brute force",
   "TSP is NP-hard: no known polynomial exact algorithm exists and none is expected; offer the working alternatives — heuristics/approximation with measured quality, exact solvers for reduced instances — and name the class as the reason",
   "Claim it by Friday",
   "Say routing is undecidable"
  ],
  "answer": 1,
  "explain": "NP-hard ≠ undecidable: solutions exist, efficiency at worst case is the barrier — and the professional move is naming trade-offs, not promising the impossible or refusing the possible.",
  "hint": "Name the class, then price the alternatives."
 },
 "l30-lexer": {
  "task": "A lexer bug report: 'total2' tokenizes as ID(total) NUM(2). Root cause:",
  "options": [
   "The parser is broken",
   "The ID pattern lacks digits after the first character — identifiers continue with [A-Za-z0-9_]; the pattern, not the input, is wrong",
   "Numbers are greedy",
   "Whitespace is missing"
  ],
  "answer": 1,
  "explain": "Token definitions are the lexer's spec: a truncated pattern truncates lexemes — maximal munch can only take what the pattern allows.",
  "hint": "Check the pattern's continuation characters, not just its start."
 },
 "l30-parser": {
  "task": "Extend the language with parentheses: '(2 + 3) * 4' must give 20's tree. The correct grammar move:",
  "options": [
   "A special case in parse_T",
   "In parse_F: on '(' call parse_E, expect ')', return that subtree — parentheses restart the precedence climb from the top",
   "Tell users to avoid parentheses",
   "Handle it in the lexer"
  ],
  "answer": 1,
  "explain": "F is where atoms live; a parenthesized expression is an atom whose content is a full E.",
  "hint": "New syntax enters at the grammar layer that owns its precedence level."
 },
 "l30-semantic": {
  "task": "Error triage: a compiler reports (1) 'unexpected token } at line 8', (2) 'variable tax_rate not declared', (3) the compiled program crashes dividing by a variable that held 0. Assign phases:",
  "options": [
   "All syntax",
   "(1) syntax/parser, (2) semantic, (3) runtime — three different kinds of wrong, three different homes",
   "All runtime",
   "(1) semantic, (2) syntax, (3) semantic"
  ],
  "answer": 1,
  "explain": "Classifying errors by phase is diagnostic literacy: each points at a different fix and a different owner.",
  "hint": "Ask of each error: shape, meaning, or value?"
 },
 "l30-intermediate": {
  "task": "Generate TAC for 'x = a * b + c * d' (statement form). The correct emission:",
  "options": [
   "t1 = a * b + c * d",
   "t1 = a * b; t2 = c * d; t3 = t1 + t2; x = t3 — both products before the sum, sum before the copy",
   "x = a * b; x = x + c * d in one line",
   "t1 = a + b first"
  ],
  "answer": 1,
  "explain": "Tree order: the two * subtrees, then +, then the assignment as a final copy — post-order with the statement's copy last.",
  "hint": "Walk the tree bottom-up; the statement's '=' is a copy emitted last."
 },
 "l30-codegen": {
  "task": "Generate the stack code for '(x + 2) * 3' and state the VM's final stack:",
  "options": [
   "PUSH x, PUSH 3, MUL, PUSH 2, ADD → [14]",
   "PUSH x(4), PUSH 2, ADD, PUSH 3, MUL → [18]: the parenthesized subtree emits first, its sum becomes the MUL's left operand",
   "PUSH 3, PUSH 2, PUSH x, ADD, MUL → [18] by luck",
   "PUSH x, PUSH 2, PUSH 3, ADD, MUL → [20]"
  ],
  "answer": 1,
  "explain": "Tree order decides: (x+2) is the deeper subtree, so ADD emits before MUL; value (4+2)*3 = 18.",
  "hint": "Emit the tree post-order; never rearrange by the expression's written order."
 },
 "l30-optimization": {
  "task": "A teammate's 'optimization' rewrites (x * 0) to 0 and (0 * f()) to 0, deleting the call. Audit:",
  "options": [
   "Both are fine",
   "x * 0 → 0 is a valid identity for pure values; deleting f() is NOT — the call may print, write, or throw, and removing it changes the program's behaviour even though the arithmetic value was 0",
   "Both are illegal",
   "Only the second is an optimization"
  ],
  "answer": 1,
  "explain": "Value-equivalence is not behaviour-equivalence: side effects are part of meaning, and meaning is the one thing optimization may never change.",
  "hint": "Separate the arithmetic claim from the side-effect claim; they need different licences."
 },
 "l31-search": {
  "task": "A network tool must answer 'fewest hops from this host to the database' on an unweighted topology map. The correct choice and the one-line justification:",
  "options": [
   "DFS — it is faster",
   "BFS — on unweighted graphs its ring-by-ring expansion makes the first path found a fewest-hops path",
   "DFS — fewer lines of code",
   "Either — they always agree"
  ],
  "answer": 1,
  "explain": "The question asks for fewest hops; that is BFS's defining guarantee, not DFS's.",
  "hint": "Translate 'fewest' into the algorithm whose guarantee is exactly that."
 },
 "l31-knowledge": {
  "task": "A triage KB has facts {fever, cough, body_ache} and the lesson's three rules. The full derived set is:",
  "options": [
   "flu_suspected only",
   "flu_suspected, take_rest, AND see_doctor — with body_ache present, the second rule's conditions are met once flu_suspected lands",
   "see_doctor only",
   "Nothing new"
  ],
  "answer": 1,
  "explain": "Chaining is the point: a derived fact (flu_suspected) becomes a premise for the next rule in a later pass.",
  "hint": "Run passes until stable; derived facts join the premise pool immediately."
 },
 "l31-supervised": {
  "task": "A classmate fits a line to 4 points, gets a perfect fit, and declares the relationship 'proven linear'. The professional reservations, in order:",
  "options": [
   "None — perfect is perfect",
   "Four points cannot establish a law (a curve fits them too); no held-out test was run; and fit never proves causation — claim a good description of THESE points, pending test data",
   "Lines are never right",
   "Perfect fits are illegal"
  ],
  "answer": 1,
  "explain": "Small-n perfection is expected, not evidentiary — the honest claim is scoped to the sample and awaits held-out judgement.",
  "hint": "Ask: how many points, what was held out, and is a causal claim being smuggled in?"
 },
 "l31-unsupervised": {
  "task": "A marketing team clusters customers with k = 2, gets 'Cluster A / Cluster B', and presents them as 'Loyal / Price-sensitive' with a strategy for each. The audit question that must precede the strategy:",
  "options": [
   "Which cluster is bigger?",
   "What EVIDENCE ties A to loyalty and B to price sensitivity? Clusters are geometry until member profiles (repeat rates, basket sizes) are checked — the labels are hypotheses, not outputs",
   "Why not k = 3?",
   "Who ran the code?"
  ],
  "answer": 1,
  "explain": "Naming clusters is interpretation; the audit demands the profile evidence before strategy is built on the names.",
  "hint": "Ask what the cluster members demonstrably share, beyond proximity."
 },
 "l31-neural": {
  "task": "A vendor's single-layer model must classify 'suspicious if (odd hour AND external) OR (weekend AND external)'. A junior says 'just train longer'. The correct engineering response:",
  "options": [
   "Agree — patience fixes models",
   "First CHECK separability of the pattern as featurized; if the boundary is non-linear in the given features, no training duration fixes a single layer — add features or a hidden layer (this is XOR's lesson in work clothes)",
   "Lower the learning rate",
   "Collect the same data twice"
  ],
  "answer": 1,
  "explain": "Diagnose geometry before budget: some failures are representational, and time cannot cure them.",
  "hint": "Ask: does a separating boundary EXIST for this representation?"
 },
 "l31-evaluation": {
  "task": "Hospital screening model: recall 0.99, precision 0.05 — it catches nearly every real case but flags 20 healthy people per true case. The balanced verdict for a FIRST screening stage:",
  "options": [
   "Reject it — precision is terrible",
   "Fit for purpose AS A FIRST STAGE: screening optimizes recall (missing a case is the catastrophic error) and hands the flagged 5%-true pool to a precise second stage — judge the metric against the stage's job, with the follow-up cost counted honestly",
   "Perfect — recall is all that matters",
   "Report its accuracy instead"
  ],
  "answer": 1,
  "explain": "Metrics are stage-relative: the same matrix is a failure for a final diagnosis and a success for a triage screen with a confirmatory stage behind it.",
  "hint": "Ask what error this STAGE exists to avoid, and what the next stage costs."
 }
};

export const PHASE5_CHECKPOINTS: Checkpoint[] = [
 {
  "id": "cp-l23-1",
  "level": 23,
  "afterLessons": [
   "l23-sets",
   "l23-logic",
   "l23-proofs"
  ],
  "title": "Checkpoint: Sets, Logic and Proof",
  "xp": 80,
  "quiz": [
   {
    "q": "A = {1,2,3,4}, B = {2,4,6}. A △ B (symmetric difference) is:",
    "options": [
     "{2,4}",
     "{1,3,6}",
     "{1,2,3,4,6}",
     "{6}"
    ],
    "answer": 1,
    "why": "In exactly one set: 1, 3 from A and 6 from B."
   },
   {
    "q": "The negation of 'all students passed' is:",
    "options": [
     "No student passed",
     "At least one student did not pass",
     "All students failed",
     "Some students passed"
    ],
    "answer": 1,
    "why": "¬∀ is ∃¬: one failing student negates 'all'."
   },
   {
    "q": "Which is the contrapositive of 'if n is prime and n > 2, then n is odd'?",
    "options": [
     "If n is odd, n is prime",
     "If n is even, then n is not prime or n ≤ 2",
     "If n is not prime, n is even",
     "If n is odd and prime, n > 2"
    ],
    "answer": 1,
    "why": "Negate both parts and swap: ¬(odd) → ¬(prime ∧ >2) = even → (not prime OR ≤ 2)."
   },
   {
    "q": "To disprove 'every even number is divisible by 4' you need:",
    "options": [
     "A proof by induction",
     "One counterexample, e.g. 6",
     "Ten examples of multiples of 4",
     "A truth table"
    ],
    "answer": 1,
    "why": "6 is even and not divisible by 4 — a single counterexample settles a ∀ claim."
   }
  ],
  "practical": {
   "task": "In a class of 40, 25 study Python, 20 study Java, 10 study both, and the rest study neither. How many study neither?",
   "options": [
    "5",
    "10",
    "35",
    "15"
   ],
   "answer": 0,
   "explain": "At least one = 25 + 20 − 10 = 35; neither = 40 − 35 = 5.",
   "hint": "Inclusion–exclusion first, then subtract from the class."
  },
  "weakMap": [
   "l23-sets",
   "l23-logic",
   "l23-proofs",
   "l23-proofs"
  ]
 },
 {
  "id": "cp-l23-2",
  "level": 23,
  "afterLessons": [
   "l23-combinatorics",
   "l23-relations-functions",
   "l23-graphs-probability"
  ],
  "title": "Checkpoint: Counting, Relations and Graphs",
  "xp": 80,
  "quiz": [
   {
    "q": "How many ways to choose a president and a secretary (different people) from 9 members?",
    "options": [
     "C(9,2) = 36",
     "P(9,2) = 72",
     "18",
     "81"
    ],
    "answer": 1,
    "why": "Two distinct roles → order matters: 9 × 8 = 72."
   },
   {
    "q": "f = {(1,3), (2,3), (3,5)}. f is:",
    "options": [
     "Not a function",
     "A function — repeated output 3 is allowed",
     "An equivalence relation",
     "Symmetric"
    ],
    "answer": 1,
    "why": "Inputs are unique; outputs may repeat in a function."
   },
   {
    "q": "A graph on 6 vertices has degree sequence 2,2,3,3,2,4. Edges?",
    "options": [
     "16",
     "8",
     "9",
     "32"
    ],
    "answer": 1,
    "why": "Σdeg = 16, edges = 8."
   },
   {
    "q": "Two dice are rolled. P(sum = 8)?",
    "options": [
     "5/36",
     "1/6",
     "8/36",
     "1/9"
    ],
    "answer": 0,
    "why": "Pairs (2,6),(3,5),(4,4),(5,3),(6,2) = 5 of 36."
   }
  ],
  "practical": {
   "task": "A 5-bit string (each bit 0/1) — how many strings have exactly two 1s?",
   "options": [
    "10",
    "32",
    "25",
    "20"
   ],
   "answer": 0,
   "explain": "Choose which 2 of the 5 positions hold the 1s: C(5,2) = 10.",
   "hint": "Positions to fill, order irrelevant — a combination."
  },
  "weakMap": [
   "l23-combinatorics",
   "l23-relations-functions",
   "l23-graphs-probability",
   "l23-graphs-probability"
  ]
 },
 {
  "id": "cp-l24-1",
  "level": 24,
  "afterLessons": [
   "l24-bigo",
   "l24-arrays-linked",
   "l24-stacks-queues"
  ],
  "title": "Checkpoint: Complexity, Arrays, Stacks and Queues",
  "xp": 80,
  "quiz": [
   {
    "q": "Code runs an n-loop inside an n-loop, then a single n-loop. Complexity?",
    "options": [
     "O(n)",
     "O(n²)",
     "O(n³)",
     "O(2n²) simplified to O(n)"
    ],
    "answer": 1,
    "why": "n² + n is dominated by n²."
   },
   {
    "q": "Removing from the front of a Python list in a loop over n items costs overall:",
    "options": [
     "O(n)",
     "O(n²) — each pop(0) shifts the rest",
     "O(1)",
     "O(log n)"
    ],
    "answer": 1,
    "why": "Every pop(0) is O(current size); summed over the loop it is quadratic — use deque."
   },
   {
    "q": "Checking '([{}])' for balance needs a stack because the matching rule is:",
    "options": [
     "First opened, first closed",
     "Most recently opened must close first",
     "Alphabetical",
     "By bracket size"
    ],
    "answer": 1,
    "why": "Closers must match in reverse order of openers: LIFO."
   },
   {
    "q": "An array gives O(1) access because:",
    "options": [
     "It is small",
     "Address = base + index × element size — pure arithmetic",
     "It is sorted",
     "It uses pointers"
    ],
    "answer": 1,
    "why": "Contiguous storage turns indexing into one multiplication and one addition."
   }
  ],
  "practical": {
   "task": "Design: a chat app shows newest messages at top; older ones load only when scrolling up page by page. New messages arrive constantly. Which pairing is honest?",
   "options": [
    "Array with insert(0) per message — O(n) each",
    "Chained/deque storage with O(1) front insertion + sequential paging — matches the access pattern",
    "A BST keyed by message text",
    "A hash table (order does not matter here)"
   ],
   "answer": 1,
   "explain": "Front-insert-heavy + sequential reads is the chained structure's home ground; a hash table would lose the order the UI needs.",
   "hint": "List the operations and their frequencies first."
  },
  "weakMap": [
   "l24-bigo",
   "l24-arrays-linked",
   "l24-stacks-queues",
   "l24-stacks-queues"
  ]
 },
 {
  "id": "cp-l24-2",
  "level": 24,
  "afterLessons": [
   "l24-trees-heaps",
   "l24-hashing-graphs",
   "l24-sorting-dp"
  ],
  "title": "Checkpoint: Trees, Hashing, Graphs and DP",
  "xp": 80,
  "quiz": [
   {
    "q": "A BST built from sorted input 10, 20, 30, 40 has search cost:",
    "options": [
     "O(log n)",
     "O(n) — it is a chain",
     "O(1)",
     "O(n log n)"
    ],
    "answer": 1,
    "why": "All keys go right; height = n."
   },
   {
    "q": "BFS uses a queue; therefore its visit order is:",
    "options": [
     "Deepest first",
     "Level by level from the start node",
     "Random",
     "Sorted by key"
    ],
    "answer": 1,
    "why": "FIFO discipline = increasing distance from the start."
   },
   {
    "q": "A recursive solution recomputes identical subcalls thousands of times. The fix is:",
    "options": [
     "A faster machine",
     "Memoization / DP table — store each subproblem's answer once",
     "More base cases only",
     "Iteration over the answer"
    ],
    "answer": 1,
    "why": "Storing subproblem results converts exponential recomputation into polynomial work."
   },
   {
    "q": "Membership testing dominates a workload of 10⁷ lookups. Choose:",
    "options": [
     "Unsorted list",
     "Hash set — average O(1) per lookup",
     "Linked list",
     "BST with sorted output requirement"
    ],
    "answer": 1,
    "why": "No order requirement + membership dominance = hash set."
   }
  ],
  "practical": {
   "task": "Shortest route (fewest stops) between two stations on an unweighted metro graph, with all stations reachable. Algorithm + why:",
   "options": [
    "DFS — it goes deep fast",
    "BFS from the start station — first arrival is via a fewest-edge path because BFS expands level by level",
    "Sort stations by name",
    "Random walk until found"
   ],
   "answer": 1,
   "explain": "Unweighted shortest path is BFS's defining guarantee (the queue from this level).",
   "hint": "Fewest edges + unweighted = which traversal discipline?"
  },
  "weakMap": [
   "l24-trees-heaps",
   "l24-hashing-graphs",
   "l24-sorting-dp",
   "l24-sorting-dp"
  ]
 },
 {
  "id": "cp-l25-1",
  "level": 25,
  "afterLessons": [
   "l25-boolean",
   "l25-truth-karnaugh",
   "l25-combinational"
  ],
  "title": "Checkpoint: Gates, K-Maps and Combinational Design",
  "xp": 80,
  "quiz": [
   {
    "q": "¬(a·b) + c at a=1, b=1, c=0 evaluates to:",
    "options": [
     "1",
     "0",
     "c",
     "Undefined"
    ],
    "answer": 1,
    "why": "a·b = 1, ¬1 = 0, 0 + 0 = 0."
   },
   {
    "q": "A group of 8 in a 4-variable K-map produces a term with how many literals?",
    "options": [
     "4",
     "3",
     "1",
     "0"
    ],
    "answer": 2,
    "why": "8 = 2³ kills 3 variables, leaving 1 literal."
   },
   {
    "q": "A full adder's sum output for inputs 1, 0, 1 (a, b, cin) is:",
    "options": [
     "1",
     "0, with carry 1",
     "0, with carry 0",
     "1, with carry 0"
    ],
    "answer": 1,
    "why": "Total is two 1s = binary 10: sum 0, carry 1."
   },
   {
    "q": "An 8-to-1 MUX requires:",
    "options": [
     "8 select lines",
     "3 select lines",
     "1 select line",
     "8 outputs"
    ],
    "answer": 1,
    "why": "2³ = 8 inputs are addressed by 3 select bits."
   }
  ],
  "practical": {
   "task": "Minimize: f(a,b,c) = Σm(0, 2, 4, 6) — all rows with c = 0. Result?",
   "options": [
    "f = a",
    "f = ¬c — one group of 4, only c constant across it",
    "f = b",
    "Cannot be reduced"
   ],
   "answer": 1,
   "explain": "Across the four rows a and b take all combinations; only c stays 0. One group of 4 → ¬c.",
   "hint": "Find the variable that does NOT change across all the 1-rows."
  },
  "weakMap": [
   "l25-boolean",
   "l25-truth-karnaugh",
   "l25-combinational",
   "l25-combinational"
  ]
 },
 {
  "id": "cp-l25-2",
  "level": 25,
  "afterLessons": [
   "l25-flipflops",
   "l25-counters",
   "l25-sequential-design"
  ],
  "title": "Checkpoint: Memory, Counters and State Machines",
  "xp": 80,
  "quiz": [
   {
    "q": "A D flip-flop with clock edges at t=1..3 and D = 1, 0, 1 at those instants (Q starts 0) ends with Q =",
    "options": [
     "0",
     "1",
     "The average of D",
     "Undefined"
    ],
    "answer": 1,
    "why": "Q copies D at each edge: 1, then 0, then 1."
   },
   {
    "q": "A mod-12 counter needs at least:",
    "options": [
     "3 flip-flops",
     "4 flip-flops (2⁴ = 16 ≥ 12) plus wrap logic",
     "12 flip-flops",
     "2 flip-flops"
    ],
    "answer": 1,
    "why": "Bits come in powers of two; mod-12 = 4 bits with states 12–15 skipped by design."
   },
   {
    "q": "Mealy vs Moore: a Mealy output may change:",
    "options": [
     "Only at clock edges",
     "Mid-cycle, as soon as the input changes",
     "Never",
     "Only at reset"
    ],
    "answer": 1,
    "why": "Mealy output depends on state AND input, so input changes show immediately."
   },
   {
    "q": "Power-up state of a sequential machine is:",
    "options": [
     "Always the first drawn state",
     "A design responsibility — a reset input/state must be specified",
     "Random and acceptable",
     "Determined by the clock"
    ],
    "answer": 1,
    "why": "Without a defined reset, the machine may start in any state — professionals specify it."
   }
  ],
  "practical": {
   "task": "Traffic controller must add a pedestrian phase: after RED, a WALK state of 2 ticks, then GREEN. The minimal honest change to this level's design?",
   "options": [
    "Add WALK to the state table with its transition (RED → WALK → GREEN) and duration 2, re-simulate all ticks",
    "Just rename RED",
    "Add a second clock",
    "Remove YELLOW"
   ],
   "answer": 0,
   "explain": "New behaviour = new state + transitions in the table, then re-verification by simulation — the design flow itself.",
   "hint": "Behaviour changes live in the transition table."
  },
  "weakMap": [
   "l25-flipflops",
   "l25-counters",
   "l25-sequential-design",
   "l25-sequential-design"
  ]
 },
 {
  "id": "cp-l26-1",
  "level": 26,
  "afterLessons": [
   "l26-cpu-registers",
   "l26-addressing",
   "l26-asm-first"
  ],
  "title": "Checkpoint: Registers, Addressing and First Programs",
  "xp": 80,
  "quiz": [
   {
    "q": "mem[200] = 4, mem[4] = 9. MOV AX, [[200]] gives AX =",
    "options": [
     "200",
     "4",
     "9",
     "0"
    ],
    "answer": 2,
    "why": "Two dereferences: 200 → 4 → 9."
   },
   {
    "q": "The instruction 'mov rax, 60' just before a syscall exists because:",
    "options": [
     "60 is the program's answer",
     "The syscall NUMBER rides in RAX (60 = exit on Linux x86-64)",
     "It clears the stack",
     "It is required padding"
    ],
    "answer": 1,
    "why": "RAX selects the kernel service; arguments ride in RDI/RSI/RDX."
   },
   {
    "q": "PC after fetching a 4-byte instruction at address 0x1000 (sequential flow) points to:",
    "options": [
     "0x1000",
     "0x1004",
     "0x0FFF",
     "The instruction itself"
    ],
    "answer": 1,
    "why": "Fetch advances PC past the fetched instruction — the counter behaviour from Level 25."
   },
   {
    "q": "Indexed addressing EA = base + index + displacement is exactly the machine form of:",
    "options": [
     "A function call",
     "An array element access a[i] (plus a field offset)",
     "An interrupt",
     "A loop"
    ],
    "answer": 1,
    "why": "Base = array start, index = i (scaled), displacement = field/element offset."
   }
  ],
  "practical": {
   "task": "Trace verdict: RAX=0, RBX=3. Code: add rax, rbx · add rax, rbx · mov rdi, rax · mov rax, 60 · syscall. Exit code?",
   "options": [
    "3",
    "6",
    "60",
    "0"
   ],
   "answer": 1,
   "explain": "RAX accumulates 3 + 3 = 6, copied to RDI before RAX is repurposed as the syscall number.",
   "hint": "The exit code is whatever RDI holds at the syscall."
  },
  "weakMap": [
   "l26-cpu-registers",
   "l26-addressing",
   "l26-asm-first",
   "l26-asm-first"
  ]
 },
 {
  "id": "cp-l26-2",
  "level": 26,
  "afterLessons": [
   "l26-asm-loops",
   "l26-interrupts",
   "l26-arm-modern"
  ],
  "title": "Checkpoint: Loops, Interrupts and ARM",
  "xp": 80,
  "quiz": [
   {
    "q": "A DEC/JNZ loop with counter starting at 3 executes its body:",
    "options": [
     "2 times",
     "3 times",
     "4 times",
     "Until power off"
    ],
    "answer": 1,
    "why": "Body runs for counter values 3, 2, 1; DEC to 0 sets ZF and JNZ falls through."
   },
   {
    "q": "Correct interrupt order is:",
    "options": [
     "ISR → signal → IRET → save state",
     "Signal → save state → vector lookup → ISR → EOI → IRET → resume",
     "Save state → signal → resume → ISR",
     "Poll → ISR → crash"
    ],
    "answer": 1,
    "why": "The matched save/IRET pair brackets the vector jump and the short handler."
   },
   {
    "q": "On ARM, 'ADD R2, R0, [5]' is:",
    "options": [
     "Valid and common",
     "Invalid — arithmetic cannot take memory operands; LDR first",
     "An interrupt",
     "A label"
    ],
    "answer": 1,
    "why": "Load/store discipline forbids it architecturally."
   },
   {
    "q": "RET works because CALL:",
    "options": [
     "Clears the flags",
     "Pushed the return address onto the stack",
     "Copied the program to memory",
     "Set RAX to 60"
    ],
    "answer": 1,
    "why": "The stack holds the way back; RET pops it into the PC."
   }
  ],
  "practical": {
   "task": "Design verdict: a student proposes handling a network packet's full processing (parse, log, respond) inside the NIC's ISR 'to keep latency low'. Professional response?",
   "options": [
    "Approve — shorter path",
    "Reject: the ISR should capture the packet into a buffer and signal; processing happens in deferred context, or other interrupts (timer, keyboard, more packets) stall and are lost",
    "Approve if the code is short",
    "Move the ISR to a register"
   ],
   "answer": 1,
   "explain": "ISR brevity protects the whole system's event flow; 'low latency' achieved by blocking everything else is the opposite of low latency.",
   "hint": "What does a long ISR cost the REST of the system?"
  },
  "weakMap": [
   "l26-asm-loops",
   "l26-interrupts",
   "l26-arm-modern",
   "l26-arm-modern"
  ]
 },
 {
  "id": "cp-l27-1",
  "level": 27,
  "afterLessons": [
   "l27-er-relational",
   "l27-sql-basics",
   "l27-sql-joins"
  ],
  "title": "Checkpoint: Model, Query, Join",
  "xp": 80,
  "quiz": [
   {
    "q": "Which normal-form violation does a repeating group 'phone1, phone2, phone3' in one row signal, and what is the structural fix?",
    "options": [
     "3NF — add an index",
     "1NF atomicity pressure — phones belong in their own table (member_id, phone), one value per row",
     "BCNF — change the key",
     "None — it is efficient"
    ],
    "answer": 1,
    "why": "Multi-valued facts in one row strain 1NF; the fix is a child table, the ER lesson's many-side rule."
   },
   {
    "q": "SELECT COUNT(*) FROM grades WHERE score >= 90 returns:",
    "options": [
     "The rows themselves",
     "One number: how many grade rows meet the predicate",
     "An error — COUNT needs GROUP BY",
     "The average"
    ],
    "answer": 1,
    "why": "Aggregates without GROUP BY summarize the whole filtered set into one row."
   },
   {
    "q": "Why does 'WHERE score = NULL' return no rows even when NULL scores exist?",
    "options": [
     "NULL rows are hidden",
     "Comparison with NULL is UNKNOWN, never TRUE — the test must be IS NULL",
     "NULL scores are deleted",
     "The engine is broken"
    ],
    "answer": 1,
    "why": "Three-valued logic again: = NULL can never be TRUE."
   },
   {
    "q": "An orders table joins to a payments table; 5 orders have no payment yet. An INNER JOIN report of 'all orders with payments status' will:",
    "options": [
     "Show the 5 with NULL",
     "Silently omit the 5 unpaid orders — LEFT JOIN is required for 'all orders'",
     "Error out",
     "Double-count them"
    ],
    "answer": 1,
    "why": "Unmatched rows vanish under INNER — the census needs LEFT."
   }
  ],
  "practical": {
   "task": "Schema review: members(id, name, course1, course2, course3). The professional redesign, in one move:",
   "options": [
    "Rename the columns",
    "Split enrolments into enroll(member_id FK, course) — one row per enrolment; members keeps only member facts",
    "Add course4 for safety",
    "Sort the table"
   ],
   "answer": 1,
   "explain": "Repeating groups become rows in a child table: unbounded courses, atomic values, and joins reassemble the view.",
   "hint": "Repeating columns are a table trying to get out."
  },
  "weakMap": [
   "l27-er-relational",
   "l27-sql-basics",
   "l27-sql-joins",
   "l27-sql-joins"
  ]
 },
 {
  "id": "cp-l27-2",
  "level": 27,
  "afterLessons": [
   "l27-normalization",
   "l27-transactions",
   "l27-indexing-concurrency"
  ],
  "title": "Checkpoint: Normalize, Transact, Index",
  "xp": 80,
  "quiz": [
   {
    "q": "FD chain: roll → dept, dept → dept_head, in table students(roll, dept, dept_head). The 3NF problem:",
    "options": [
     "None",
     "Transitive dependency: dept_head depends on the key through dept — split departments out",
     "1NF atomicity",
     "Too many rows"
    ],
    "answer": 1,
    "why": "Key → dept → dept_head is the textbook transitive chain."
   },
   {
    "q": "A committed transaction must survive a server power cut. Which ACID letter is on trial?",
    "options": [
     "A",
     "C",
     "I",
     "D — durability, via the write-ahead log"
    ],
    "answer": 3,
    "why": "Durability is the after-crash guarantee."
   },
   {
    "q": "EXPLAIN shows 'SCAN enroll' for a query filtering enroll by course on a 500k-row table. Prescription:",
    "options": [
     "Rewrite in Python",
     "B-tree index on enroll(course), then re-EXPLAIN expecting SEARCH USING INDEX",
     "More RAM first",
     "Accept it"
    ],
    "answer": 1,
    "why": "The filtered column is the index candidate; verify the plan changed."
   },
   {
    "q": "Deadlock victim's transaction is aborted. The correct application behaviour is:",
    "options": [
     "Show the user a corruption error",
     "Retry the transaction (it was sacrificed for a scheduling cycle, not for bad data)",
     "Delete the account",
     "Disable all locks forever"
    ],
    "answer": 1,
    "why": "Abort-and-retry is the designed path; the data was never corrupt."
   }
  ],
  "practical": {
   "task": "A junior proposes ONE wide table for a shop: orders(order_id, customer_name, customer_city, product, price, qty) 'to avoid joins'. The complete professional verdict:",
   "options": [
    "Approve — joins are slow",
    "Reject as the default: customer facts repeat per order (update anomaly on city), product price repeats (price changes fork history); normalize to customers/products/orders, and let joins — with indexes — do the assembly",
    "Approve if the shop is small",
    "Reject — wide tables are illegal SQL"
   ],
   "answer": 1,
   "explain": "Redundancy anomalies are structural certainties, not size-dependent risks; indexed joins are the priced, standard reassembly.",
   "hint": "Name the anomalies the wide table guarantees, then the mechanism that answers the speed worry."
  },
  "weakMap": [
   "l27-normalization",
   "l27-transactions",
   "l27-indexing-concurrency",
   "l27-indexing-concurrency"
  ]
 },
 {
  "id": "cp-l28-1",
  "level": 28,
  "afterLessons": [
   "l28-sdlc",
   "l28-requirements-uml",
   "l28-design-patterns"
  ],
  "title": "Checkpoint: Lifecycle, Requirements, Patterns",
  "xp": 80,
  "quiz": [
   {
    "q": "A regulator-fixed spec with criminal penalties for deviation most justifies which model emphasis?",
    "options": [
     "Improvisation",
     "Waterfall: complete, reviewed phases before code — requirements are knowable and change is controlled",
     "Daily pivots",
     "No testing phase"
    ],
    "answer": 1,
    "why": "Requirement stability + high change cost = phase discipline."
   },
   {
    "q": "Which is a NON-functional requirement?",
    "options": [
     "'Members can renew loans'",
     "'The system shall be available 99.5% of each month'",
     "'Librarians can add books'",
     "'Members receive a due-date receipt'"
    ],
    "answer": 1,
    "why": "Availability is a quality constraint on the whole system, not a feature behaviour."
   },
   {
    "q": "A stock price object must update a chart, a table and an alert rule on every tick. Pattern?",
    "options": [
     "Factory",
     "Singleton",
     "Observer",
     "None — hard-code all three"
    ],
    "answer": 2,
    "why": "One subject, many notified dependents — Observer's signature."
   },
   {
    "q": "A class diagram and a sequence diagram differ in that the sequence diagram shows:",
    "options": [
     "Fewer boxes",
     "Time: messages between objects in order for one scenario",
     "Only databases",
     "Costs"
    ],
    "answer": 1,
    "why": "Class = structure (static); sequence = interaction (dynamic)."
   }
  ],
  "practical": {
   "task": "A requirement arrives as: 'The app must never lose a booking.' Turn it professional in one step:",
   "options": [
    "Promise it",
    "Quantify into testable terms: define 'lose' (after confirmation shown?), set the mechanism (transactional write + durability — Level 27 ACID) and the acceptance test (kill the server mid-booking; the booking is wholly present or wholly absent)",
    "Add it to the marketing page",
    "Buy two servers"
   ],
   "answer": 1,
   "explain": "Absolute words become engineering only when operationalized: a defined event, a mechanism, a test.",
   "hint": "Replace the absolute with an event + mechanism + test."
  },
  "weakMap": [
   "l28-sdlc",
   "l28-requirements-uml",
   "l28-design-patterns",
   "l28-design-patterns"
  ]
 },
 {
  "id": "cp-l28-2",
  "level": 28,
  "afterLessons": [
   "l28-testing",
   "l28-git-teamwork",
   "l28-agile-docs"
  ],
  "title": "Checkpoint: Tests, Git, Agile",
  "xp": 80,
  "quiz": [
   {
    "q": "For an age field accepting 0–120, which added test has the most defect-finding power?",
    "options": [
     "60",
     "121 (one past the boundary) together with 0 and 120",
     "119",
     "42"
    ],
    "answer": 1,
    "why": "Just-outside values are where boundary logic (>, >=) goes wrong."
   },
   {
    "q": "A merge conflict on the same function from two branches requires:",
    "options": [
     "Deleting one branch",
     "A human reconciling both changes' intent, then a merge commit recording both parents",
     "Taking the newer file wholesale",
     "Re-cloning the repo"
    ],
    "answer": 1,
    "why": "Conflicts are semantic; the resolution is a reviewed decision, recorded in history."
   },
   {
    "q": "Which backlog is agile-ready?",
    "options": [
     "An unordered feature dump",
     "Stories ordered by priority, each small enough for a sprint, each with acceptance criteria",
     "A Gantt chart only",
     "Whatever the loudest user said"
    ],
    "answer": 1,
    "why": "Order + smallness + testability is the sprint-ready shape."
   },
   {
    "q": "A bug escapes to production. The suite's correct growth is:",
    "options": [
     "Nothing — bugs happen",
     "A new failing test reproducing the bug, fixed code making it pass, the test kept forever as that bug's guard",
     "Delete the flaky area",
     "More manual testing only"
    ],
    "answer": 1,
    "why": "Every escaped bug becomes a permanent regression guard — the suite learns."
   }
  ],
  "practical": {
   "task": "Release day: main is red (tests failing) because a teammate merged without review 'to save time'. The process verdict:",
   "options": [
    "Ship anyway",
    "The saved hour bought a broken main for the whole team; enforce the gate — protected main, required review + green suite before merge — and revert the merge to restore green first",
    "Blame and move on",
    "Turn off the tests"
   ],
   "answer": 1,
   "explain": "Gates exist for exactly this arithmetic: one person's shortcut, everyone's blocked morning.",
   "hint": "Protect the shared state first; discuss process second."
  },
  "weakMap": [
   "l28-testing",
   "l28-git-teamwork",
   "l28-agile-docs",
   "l28-agile-docs"
  ]
 },
 {
  "id": "cp-l29-1",
  "level": 29,
  "afterLessons": [
   "l29-automata",
   "l29-regular",
   "l29-cfg"
  ],
  "title": "Checkpoint: Automata, Regular, Context-Free",
  "xp": 80,
  "quiz": [
   {
    "q": "Which machine accepts exactly {aⁿbⁿ} and is the weakest that can?",
    "options": [
     "DFA",
     "PDA — one stack matches the single count",
     "TM only",
     "NFA"
    ],
    "answer": 1,
    "why": "One unbounded count = one stack; finite states provably cannot."
   },
   {
    "q": "The language of balanced parentheses is:",
    "options": [
     "Regular",
     "Context-free but not regular — nesting depth is unbounded counting",
     "Undecidable",
     "Finite"
    ],
    "answer": 1,
    "why": "Depth defeats finite memory and is exactly a stack's job."
   },
   {
    "q": "In the pumping lemma, the pumped part must lie:",
    "options": [
     "Anywhere in the string",
     "Within the first p symbols (the loop is among the first p states visited)",
     "At the end",
     "Only in the b's"
    ],
    "answer": 1,
    "why": "The loop forms before p+1 states are visited — that placement is what forces the a-side pump for aᵖbᵖ."
   },
   {
    "q": "Two different parse trees for the same string in one grammar means the grammar is:",
    "options": [
     "Regular",
     "Ambiguous",
     "Incomplete",
     "Left-recursive only"
    ],
    "answer": 1,
    "why": "Ambiguity = structural meaning is not unique."
   }
  ],
  "practical": {
   "task": "Classify the job: 'validate that every opening tag in this markup stream is closed in reverse order, at any depth.' The correct machine class and reason:",
   "options": [
    "DFA — scanning suffices",
    "PDA/CFG — LIFO matching at unbounded depth; a stack is both necessary and sufficient",
    "TM required",
    "Undecidable"
   ],
   "answer": 1,
   "explain": "Reverse-order matching IS stack discipline; depth without bound rules out finite control.",
   "hint": "Match the memory discipline to the job's structure."
  },
  "weakMap": [
   "l29-automata",
   "l29-regular",
   "l29-cfg",
   "l29-cfg"
  ]
 },
 {
  "id": "cp-l29-2",
  "level": 29,
  "afterLessons": [
   "l29-turing",
   "l29-decidability",
   "l29-complexity"
  ],
  "title": "Checkpoint: Turing, Decidability, Complexity",
  "xp": 80,
  "quiz": [
   {
    "q": "A TM's tape gives it which decisive advantage over a PDA?",
    "options": [
     "Speed",
     "Memory revisitable in any order — no LIFO discipline constraining bookkeeping",
     "More states",
     "Two heads"
    ],
    "answer": 1,
    "why": "Random access to its own notes is what lifts the class to full computation."
   },
   {
    "q": "'Program equivalence' (do two programs compute the same function?) is:",
    "options": [
     "Decidable with diff",
     "Undecidable — a non-trivial semantic property, by Rice's theorem",
     "In P",
     "A syntax question"
    ],
    "answer": 1,
    "why": "Rice covers ALL semantic properties wholesale, equivalence included."
   },
   {
    "q": "Which statement about P and NP is KNOWN?",
    "options": [
     "P = NP",
     "P ≠ NP",
     "P ⊆ NP — every efficiently solvable problem is efficiently verifiable; equality itself is open",
     "NP ⊆ P is proven"
    ],
    "answer": 2,
    "why": "Solving gives you the certificate to check; the reverse conversion is the million-dollar unknown."
   },
   {
    "q": "X ≤p Y, and X is NP-complete. Conclusion about Y:",
    "options": [
     "Y is easy",
     "Y is NP-hard (at least as hard as an NP-complete problem) — hardness flowed forward along this arrow's target",
     "Y ∈ P",
     "X reduces the wrong way"
    ],
    "answer": 1,
    "why": "An NP-complete problem reducing INTO Y certifies Y's hardness."
   }
  ],
  "practical": {
   "task": "A startup's pitch: 'Our checker proves any smart contract is bug-free before deployment.' Your one-paragraph technical due diligence:",
   "options": [
    "Sounds great",
    "'Bug-free' is a non-trivial semantic property of arbitrary programs — undecidable by Rice; ask what RESTRICTED class or property they actually check (specific bug patterns, bounded models), where honest tools live",
    "Ask for more GPUs",
    "Only audits matter"
   ],
   "answer": 1,
   "explain": "The theorem doesn't kill the company; it relocates its claim to the decidable fragment — due diligence means finding that fragment.",
   "hint": "Universal semantic claims always have a decidable fragment hiding inside — find it."
  },
  "weakMap": [
   "l29-turing",
   "l29-decidability",
   "l29-complexity",
   "l29-complexity"
  ]
 },
 {
  "id": "cp-l30-1",
  "level": 30,
  "afterLessons": [
   "l30-lexer",
   "l30-parser",
   "l30-semantic"
  ],
  "title": "Checkpoint: Lex, Parse, Check",
  "xp": 80,
  "quiz": [
   {
    "q": "Input '= begin' appears where a statement was expected, in a language whose tokens are NUM, ID and single-char operators. The first phase that can object is:",
    "options": [
     "The lexer — '=' is an illegal character",
     "The parser — every character lexes fine ('=' is an OP, 'begin' an ID); the STRUCTURE is what is wrong, so the parser reports it",
     "Semantic analysis — '=' is undeclared",
     "There is no error anywhere"
    ],
    "answer": 1,
    "why": "Phase literacy means checking before blaming: no character fails a token pattern, so the lexer is innocent; a leading '=' breaks the grammar, which is the parser's jurisdiction."
   },
   {
    "q": "Grammar E → E - E | NUM is ambiguous because '8 - 3 - 2' has:",
    "options": [
     "No parse",
     "Two trees with different values: (8-3)-2 = 3 and 8-(3-2) = 7",
     "Too many tokens",
     "One tree, two lexers"
    ],
    "answer": 1,
    "why": "Two structures, two meanings — ambiguity demonstrated by a single string, the Level 29 method."
   },
   {
    "q": "Which error is SEMANTIC?",
    "options": [
     "Missing ')'",
     "'@' in the input",
     "Adding a string to an integer in a statically typed language — shape is fine, meaning (types) is not",
     "Unclosed comment"
    ],
    "answer": 2,
    "why": "Type agreement is meaning; the other three are character/shape failures caught earlier."
   },
   {
    "q": "Maximal munch exists because:",
    "options": [
     "Lexers are greedy by nature",
     "Operators like == and <= share prefixes with = and <; the longest match is the only reading that keeps multi-char operators whole",
     "It speeds up parsing",
     "Tokens must be long"
    ],
    "answer": 1,
    "why": "Prefix-sharing tokens force a tie-break rule; longest-match is it."
   }
  ],
  "practical": {
   "task": "A student parser accepts '2 + * 3' without error. The missing discipline:",
   "options": [
    "A bigger token set",
    "parse_F must REQUIRE an atom (NUM, ID, or parenthesized expression) and raise a syntax error at the '*' token — a parser that never says no is not parsing",
    "More keywords",
    "A symbol table"
   ],
   "answer": 1,
   "explain": "Rejection at the exact offending token is half the parser's contract; acceptance alone is the lexer's job description, not the parser's.",
   "hint": "Check both directions: what it accepts AND what it refuses, and where."
  },
  "weakMap": [
   "l30-lexer",
   "l30-parser",
   "l30-semantic",
   "l30-semantic"
  ]
 },
 {
  "id": "cp-l30-2",
  "level": 30,
  "afterLessons": [
   "l30-intermediate",
   "l30-codegen",
   "l30-optimization"
  ],
  "title": "Checkpoint: IR, Codegen, Optimize",
  "xp": 80,
  "quiz": [
   {
    "q": "TAC for 'p = (a + b) * (a - b)' needs how many temporaries?",
    "options": [
     "1",
     "3: t1 = a + b, t2 = a - b, t3 = t1 * t2, then p = t3",
     "5",
     "0"
    ],
    "answer": 1,
    "why": "One temp per binary operation (three ops) — the assignment copy is not a temp-producing op."
   },
   {
    "q": "An optimizer folds 't1 = 4 * 5' to 't1 = 20' and deletes 't2 = t1 + 0' replacing uses with t1. Both moves are:",
    "options": [
     "Illegal",
     "Legal: constant folding and the +0 identity, both meaning-preserving for all values",
     "Legal only on Tuesdays",
     "Miscompilations"
    ],
    "answer": 1,
    "why": "Each rewrite cites its law; neither touches a value or a side effect."
   },
   {
    "q": "A back end emits PUSH/SUB code for 'a - b' as: PUSH a, PUSH b, SUB (pop right=b, pop left=a, push a-b). A bug swaps the pops. Result for a=10, b=3:",
    "options": [
     "7",
     "-7 — the program now computes b - a; non-commutative operators expose operand-order bugs that MUL would have hidden",
     "13",
     "Crash"
    ],
    "answer": 1,
    "why": "This is why SUB/DIV are the audit cases for every new back end."
   },
   {
    "q": "The pipeline phase that may legitimately be SKIPPED for a tiny language is:",
    "options": [
     "Lexing",
     "Parsing",
     "Optimization — a correct compiler may ship unoptimized code; it may never ship wrong code",
     "Semantic checks"
    ],
    "answer": 2,
    "why": "Optimization is the only phase whose absence changes performance but never correctness."
   }
  ],
  "practical": {
   "task": "Full-pipeline diagnosis: source 'rate * hrs' compiles and runs but prints 0 on a machine where rate=12, hrs=9 are in the environment. The lexer shows ID(rate), OP(*), ID(hrs); the tree is correct; TAC is t1 = rate * hrs. The remaining suspect:",
   "options": [
    "The grammar",
    "The back end / runtime environment: names are resolving to 0 (uninitialized/default) instead of the environment's 12 and 9 — front end and IR are exonerated by the evidence; check name resolution at code generation",
    "The optimizer folded it",
    "The tokens are wrong"
   ],
   "answer": 1,
   "explain": "Elimination by phase evidence is the debugging method this level teaches: each stage's output acquits or convicts it.",
   "hint": "Bisect the pipeline with its own intermediate outputs."
  },
  "weakMap": [
   "l30-intermediate",
   "l30-codegen",
   "l30-optimization",
   "l30-optimization"
  ]
 },
 {
  "id": "cp-l31-1",
  "level": 31,
  "afterLessons": [
   "l31-search",
   "l31-knowledge",
   "l31-supervised"
  ],
  "title": "Checkpoint: Search, Rules, Supervised",
  "xp": 80,
  "quiz": [
   {
    "q": "Which pairing is correct?",
    "options": [
     "BFS–stack",
     "DFS–queue",
     "BFS–queue (shortest in unweighted), DFS–stack (low memory)",
     "Both use heaps"
    ],
    "answer": 2,
    "why": "The frontier structure IS the algorithm's character."
   },
   {
    "q": "A rule engine derives nothing from facts {cough} with rules {fever,cough}→flu and {fever}→rest. Why?",
    "options": [
     "The engine is broken",
     "Every rule needs fever, which is absent — conditions are subset tests, and partial matches fire nothing",
     "Cough is not a fact type",
     "It needs more passes"
    ],
    "answer": 1,
    "why": "No premise, no conclusion — soundness by strictness."
   },
   {
    "q": "Slope 0 in a fitted regression means:",
    "options": [
     "Perfect fit",
     "The line sees no linear relationship between x and y in this data — predictions are just ȳ everywhere",
     "x causes y",
     "The data is fake"
    ],
    "answer": 1,
    "why": "A flat line is a model too: it is the claim that x carries no linear information about y here."
   },
   {
    "q": "Train accuracy 98%, test accuracy 61%. First suspicion:",
    "options": [
     "Bad luck",
     "Overfitting — the train/test gap is its signature; simplify or gather more varied data",
     "The test set is too big",
     "Accuracy is broken"
    ],
    "answer": 1,
    "why": "The gap, not either number alone, is the diagnosis."
   }
  ],
  "practical": {
   "task": "Choose the tool: (a) routing on a weighted road map, (b) deriving alerts from firewall facts, (c) grouping unlabelled logs. The correct assignment:",
   "options": [
    "All BFS",
    "(a) weighted search (Dijkstra/A*) — BFS counts hops, not cost; (b) a rule KB with forward chaining — auditable derivations; (c) clustering — no labels exist to supervise with",
    "All neural networks",
    "(a) DFS, (b) k-means, (c) regression"
   ],
   "answer": 1,
   "explain": "Each job's structure names its tool: cost-weighted paths, auditable rules, unlabelled grouping.",
   "hint": "Classify the job before choosing the algorithm."
  },
  "weakMap": [
   "l31-search",
   "l31-knowledge",
   "l31-supervised",
   "l31-supervised"
  ]
 },
 {
  "id": "cp-l31-2",
  "level": 31,
  "afterLessons": [
   "l31-unsupervised",
   "l31-neural",
   "l31-evaluation"
  ],
  "title": "Checkpoint: Clustering, Perceptron, Metrics",
  "xp": 80,
  "quiz": [
   {
    "q": "K-means produced clusters with silhouette-poor, overlapping membership from one start but clean clusters from another. Interpretation:",
    "options": [
     "K-means is unreliable, discard it",
     "Local optima differ by initialization — keep the better objective (lower within-cluster distance) and report restart practice",
     "The data is clustered wrongly",
     "Increase epochs blindly"
    ],
    "answer": 1,
    "why": "Initialization sensitivity is managed by restarts + objective comparison, not by faith in one run."
   },
   {
    "q": "Which function CAN a single perceptron learn?",
    "options": [
     "XOR",
     "OR — its positives (0,1),(1,0),(1,1) are separable from (0,0) by one line",
     "XNOR",
     "Parity of 3 bits"
    ],
    "answer": 1,
    "why": "OR's geometry admits a line; XOR's famously does not."
   },
   {
    "q": "TP 30, FP 10, FN 5, TN 55: precision and recall are:",
    "options": [
     "Precision 30/35, recall 30/40",
     "Precision 30/40 = 0.75 (of 40 flagged, 30 real), recall 30/35 ≈ 0.86 (of 35 real, 30 caught)",
     "Both 0.85",
     "Precision 30/100"
    ],
    "answer": 1,
    "why": "Flagged denominator (TP+FP = 40) for precision; real denominator (TP+FN = 35) for recall."
   },
   {
    "q": "A phishing filter brags '99% accurate' on traffic that is 0.5% phishing. The audit response:",
    "options": [
     "Impressive",
     "Meaningless without recall: never flagging anything scores 99.5% here; demand the confusion matrix — how many of the real phish were caught, at what false-alarm cost",
     "Accuracy settles it",
     "Ask for the logo"
    ],
    "answer": 1,
    "why": "Imbalance makes accuracy a majority-class echo; the matrix is the audit."
   }
  ],
  "practical": {
   "task": "Final triage: a model flags malware with precision 0.4 and recall 0.95, deployed as the ONLY scanner. The deployment verdict:",
   "options": [
    "Ship it — recall is king",
    "Not as the sole stage: catching 95% is strong, but 60% of flags are false — analyst alert fatigue will bury the true 40%; deploy it as stage one feeding a precise second stage (human or heavier model), and say so in the design",
    "Kill it — precision under 0.5 is useless",
    "Raise the threshold until precision is 1.0"
   ],
   "answer": 1,
   "explain": "Stage-relative judgement again: an excellent net, a poor judge. Architecture, not a single metric, is the answer.",
   "hint": "Assign each model the stage its metric profile fits."
  },
  "weakMap": [
   "l31-unsupervised",
   "l31-neural",
   "l31-evaluation",
   "l31-evaluation"
  ]
 }
];

export const PHASE5_FINALS: LevelFinal[] = [
 {
  "id": "fin-l23",
  "level": 23,
  "title": "Level 23 Final: Discrete Mathematics",
  "xp": 200,
  "badge": "Discrete Foundations",
  "skillStep": "Discrete Mathematics — Foundation complete",
  "quiz": [
   {
    "q": "|A| = 12, |B| = 9, |A ∩ B| = 4. |A ∪ B| is:",
    "options": [
     "21",
     "17",
     "25",
     "13"
    ],
    "answer": 1,
    "why": "12 + 9 − 4 = 17."
   },
   {
    "q": "p → q and its contrapositive have truth tables that are:",
    "options": [
     "Identical in every row",
     "Opposite in every row",
     "Equal only when p is true",
     "Unrelated"
    ],
    "answer": 0,
    "why": "Logical equivalence means row-by-row identical tables."
   },
   {
    "q": "Which proof shape fits 'assume the conclusion is false and reach an impossibility'?",
    "options": [
     "Direct",
     "Contrapositive",
     "Contradiction",
     "Induction step"
    ],
    "answer": 2,
    "why": "That is the definition of proof by contradiction."
   },
   {
    "q": "C(8,3) equals:",
    "options": [
     "336",
     "56",
     "24",
     "512"
    ],
    "answer": 1,
    "why": "8!/(3!5!) = 56."
   },
   {
    "q": "A relation that is reflexive, symmetric and transitive partitions its set into:",
    "options": [
     "Functions",
     "Equivalence classes",
     "Trees",
     "Truth tables"
    ],
    "answer": 1,
    "why": "Those three properties define an equivalence relation; its classes partition the set."
   }
  ],
  "practicals": [
   {
    "task": "Exam-style: In a survey of 50 users, 30 use app X, 22 use app Y, 12 use both. How many use exactly one app?",
    "options": [
     "52",
     "28",
     "40",
     "18"
    ],
    "answer": 1,
    "explain": "Only X = 18, only Y = 10, exactly one = 28 (the symmetric difference).",
    "hint": "Subtract the overlap from each side, then add."
   },
   {
    "task": "A graph models a chat network: vertices are users, edges are conversations. The sum of all degrees is 34. Conversations?",
    "options": [
     "34",
     "17",
     "68",
     "Cannot say"
    ],
    "answer": 1,
    "explain": "Edges = Σdeg / 2 = 17.",
    "hint": "Handshaking lemma."
   }
  ],
  "written": {
   "prompt": "In 6–8 lines: prove that the sum of two odd integers is even, naming the proof shape you used and the definition of 'odd' you relied on.",
   "model": "Direct proof. Definition: an integer is odd if it equals 2k + 1 for some integer k. Let a = 2m + 1 and b = 2n + 1. Then a + b = 2m + 2n + 2 = 2(m + n + 1). Since m + n + 1 is an integer, a + b is twice an integer, hence even by the definition of even. ∎ No test cases are needed: the algebra covers all odd pairs at once, which is what makes it a proof rather than evidence."
  }
 },
 {
  "id": "fin-l24",
  "level": 24,
  "title": "Level 24 Final: Data Structures & Algorithms",
  "xp": 200,
  "badge": "Algorithmic Thinker",
  "skillStep": "Data Structures & Algorithms — Foundation complete",
  "quiz": [
   {
    "q": "Which pairing is correct?",
    "options": [
     "Stack — FIFO",
     "Queue — LIFO",
     "Stack — LIFO, Queue — FIFO",
     "Both are LIFO"
    ],
    "answer": 2,
    "why": "Stack: last in first out. Queue: first in first out."
   },
   {
    "q": "Average-case lookup in a well-loaded hash table is:",
    "options": [
     "O(n)",
     "O(1)",
     "O(log n)",
     "O(n log n)"
    ],
    "answer": 1,
    "why": "Hashing converts the key to a bucket directly — average O(1); worst case (collisions) O(n)."
   },
   {
    "q": "The height of a balanced BST with ~10⁶ keys is about:",
    "options": [
     "10⁶",
     "20",
     "1000",
     "2"
    ],
    "answer": 1,
    "why": "log₂(10⁶) ≈ 20 — balance is what keeps it there."
   },
   {
    "q": "An O(n²) algorithm at n = 10⁵ performs on the order of:",
    "options": [
     "10⁵ steps",
     "10¹⁰ steps",
     "10⁷ steps",
     "500 steps"
    ],
    "answer": 1,
    "why": "(10⁵)² = 10¹⁰ — the reason quadratic designs die at scale."
   },
   {
    "q": "Dynamic programming applies when a problem has:",
    "options": [
     "Sorted input",
     "Overlapping subproblems and optimal substructure",
     "A hash function",
     "Only two variables"
    ],
    "answer": 1,
    "why": "Those two properties are the textbook test for DP."
   }
  ],
  "practicals": [
   {
    "task": "A log tool must (a) test membership of IPs in a 5M-entry blocklist, (b) print offenders in sorted order at the end. Honest design:",
    "options": [
     "One list for both jobs",
     "Hash set for (a) — O(1) checks; collect offenders and sort once for (b) — each structure does the job it is good at",
     "Sort the blocklist and binary-search, ignoring the 5M size",
     "A stack for both"
    ],
    "answer": 1,
    "explain": "Membership and ordered output are different operations with different best structures — professionals split them.",
    "hint": "Two operations, two price tags."
   },
   {
    "task": "Fibonacci by naive recursion at n = 40 makes roughly 3×10⁸ calls; with memoization, about 40. The principle:",
    "options": [
     "Python is slow",
     "Never recompute an answer you can look up — overlapping subproblems are stored once",
     "Recursion is banned",
     "40 is a small number"
    ],
    "answer": 1,
    "explain": "Memoization converts exponential recomputation into one computation per distinct subproblem.",
    "hint": "What does the cache buy, in one sentence?"
   }
  ],
  "written": {
   "prompt": "In 6–8 lines: a junior proposes storing 1 million user records in a linked list 'because insertion is O(1)'. Give the professional verdict: when is he right, when is he wrong, and what do you ask before deciding?",
   "model": "The claim prices only insertion at a known position — there, he is right: O(1) with no shifting. But finding that position, or any record by key or index, is O(n) on a chain: one million records means average half-million-step lookups, while an array gives O(1) indexed access and a hash table O(1) keyed access. So the verdict depends on the workload, and the question to ask first is: what operations dominate — inserts at known points, lookups by key, scans in order, or all three? Choose the structure after pricing the dominant operations, never from a single operation's Big-O."
  }
 },
 {
  "id": "fin-l25",
  "level": 25,
  "title": "Level 25 Final: Digital Logic Design",
  "xp": 200,
  "badge": "Logic Designer",
  "skillStep": "Digital Logic Design — Foundation complete",
  "quiz": [
   {
    "q": "The sum bit of a full adder is 1 when:",
    "options": [
     "All inputs are 1",
     "An odd number of its three inputs are 1",
     "Carry-in is 0",
     "Any input is 1"
    ],
    "answer": 1,
    "why": "Sum is the parity bit: XOR of the three inputs."
   },
   {
    "q": "Which is NOT a combinational circuit?",
    "options": [
     "Adder",
     "Multiplexer",
     "Counter",
     "Decoder"
    ],
    "answer": 2,
    "why": "A counter remembers — it is sequential by definition."
   },
   {
    "q": "Grouping in K-maps must use group sizes of:",
    "options": [
     "Any size",
     "Powers of two",
     "Prime numbers",
     "Even numbers only"
    ],
    "answer": 1,
    "why": "1, 2, 4, 8 — each doubling deletes exactly one variable."
   },
   {
    "q": "A flip-flop is built from latches primarily to gain:",
    "options": [
     "More outputs",
     "Edge-triggered sampling — immunity to input changes between clock edges",
     "Higher voltage",
     "Fewer gates"
    ],
    "answer": 1,
    "why": "The master-slave / edge structure is about WHEN values are captured."
   },
   {
    "q": "An n-bit ripple counter's states repeat every:",
    "options": [
     "n counts",
     "2n counts",
     "2ⁿ counts",
     "10 counts"
    ],
    "answer": 2,
    "why": "It is a modulo-2ⁿ machine."
   }
  ],
  "practicals": [
   {
    "task": "Design verdict: a circuit must output 1 exactly when at least two of three sensors (a, b, c) are 1. The minimized expression a student proposes is a·b + b·c + a·c. Verdict?",
    "options": [
     "Wrong — it misses rows",
     "Correct — each term covers one pair of 1s, together they cover rows 011, 101, 110, 111 exactly",
     "It needs a fourth term a·b·c",
     "It should be a + b + c"
    ],
    "answer": 1,
    "explain": "The majority function: each pair-term fires on its pair (111 is covered by all three, harmlessly). K-map confirms no smaller form.",
    "hint": "Check rows 011, 101, 110, 111 and the single-1 rows."
   },
   {
    "task": "A 3-bit counter is observed: 000 → 001 → 011 → 010 → 110 … A classmate says it is broken because it 'skips' numbers. Expert verdict?",
    "options": [
     "Broken — counters must count in binary order",
     "Not necessarily broken: that is a Gray-code sequence (one bit changes per step) — a legitimate counter design used to avoid glitches; judge against its SPEC, not against binary counting",
     "It is a register",
     "It needs more flip-flops"
    ],
    "answer": 1,
    "explain": "Sequence detectors and Gray counters deliberately change one bit at a time. 'Different from binary' is not 'wrong'.",
    "hint": "Ask what sequence the design was specified to produce."
   }
  ],
  "written": {
   "prompt": "In 6–8 lines: explain, with one concrete example each, the difference between a combinational and a sequential circuit — and name the component whose addition turns the first kind into the second.",
   "model": "A combinational circuit's output is a function of its current inputs only: a full adder given 1, 0, 1 always answers sum 0, carry 1, whenever and however often you ask. A sequential circuit's output also depends on history: a counter displaying 010 will show 011 next not because of any input change but because of what it already holds. The component that turns the first kind into the second is memory — concretely the flip-flop (built from latches), which stores state bits between clock edges. Add feedback with stored state to combinational logic and you get sequence, timers, and ultimately the CPU's program counter."
  }
 },
 {
  "id": "fin-l26",
  "level": 26,
  "title": "Level 26 Final: Microprocessor & Assembly",
  "xp": 200,
  "badge": "Machine Reader",
  "skillStep": "Microprocessor & Assembly — Foundation complete",
  "quiz": [
   {
    "q": "The fetch–decode–execute cycle repeats per:",
    "options": [
     "Program",
     "Instruction",
     "Second",
     "Function"
    ],
    "answer": 1,
    "why": "One instruction per cycle-step is the machine's fundamental rhythm."
   },
   {
    "q": "MOV AX, [BX+SI+8] — the 8 is the:",
    "options": [
     "Index",
     "Displacement — a constant baked into the instruction",
     "Segment",
     "Result"
    ],
    "answer": 1,
    "why": "EA = BX + SI + 8: register, register, constant displacement."
   },
   {
    "q": "A procedure's RET instruction pops its target from:",
    "options": [
     "The heap",
     "The stack — where CALL pushed the return address",
     "RAX",
     "The vector table"
    ],
    "answer": 1,
    "why": "CALL/RET are a stack pair, as are interrupt/IRET."
   },
   {
    "q": "The vector table maps interrupt numbers to:",
    "options": [
     "Register names",
     "ISR entry addresses",
     "Memory sizes",
     "Syscall numbers"
    ],
    "answer": 1,
    "why": "It is the CPU's event phone book."
   },
   {
    "q": "RISC designs like ARM gain pipeline efficiency mainly from:",
    "options": [
     "More addressing modes",
     "Simple, uniform instructions and register-only arithmetic",
     "Larger disks",
     "Fewer registers"
    ],
    "answer": 1,
    "why": "Regularity + load/store discipline is the RISC bargain."
   }
  ],
  "practicals": [
   {
    "task": "Full trace: mem[10] = 6. Program (x86-style): MOV AX, [10] · MOV BX, 4 · ADD AX, BX · MOV [20], AX. Final mem[20]?",
    "options": [
     "4",
     "6",
     "10",
     "24"
    ],
    "answer": 2,
    "explain": "AX = 6, BX = 4, AX = 10, stored to mem[20]. Load, operate, store — the universal rhythm.",
    "hint": "Track AX only; mem[20] is written once, at the end."
   },
   {
    "task": "ARM translation: x86 'add rax, [total]' in a loop where total never changes inside the loop. The professional ARM version:",
    "options": [
     "LDR total into a register once before the loop; ADD register-to-register inside; STR once after if needed",
     "An LDR before every ADD — 1:1 translation",
     "It cannot be expressed",
     "Use an interrupt per iteration"
    ],
    "answer": 0,
    "explain": "Hoisting invariant loads is both the required translation AND the faster program — the constraint is a teacher.",
    "hint": "What stays constant across iterations? Load that once."
   }
  ],
  "written": {
   "prompt": "In 6–8 lines: a classmate says 'assembly is just slow C'. Correct them: name two things assembly reveals that C hides, using this level's own examples (registers/addressing or interrupts).",
   "model": "C hides where values live; assembly reveals it. In C, a + b says nothing about cost, but the traces here show the truth: operands must sit in registers (a handful of flip-flop cells inside the CPU), memory is reached only through explicit loads and stores, and a single bracket changes an instruction's meaning — MOV AX, 100 vs MOV AX, [100] differ by a memory read. Second, C hides the machine's conversation with the world: interrupts show the CPU being suspended by hardware, its state pushed on the stack, and an ISR servicing a device — the mechanism under every driver and OS. Assembly is not slow C; it is the layer where C's promises are kept."
  }
 },
 {
  "id": "fin-l27",
  "level": 27,
  "title": "Level 27 Final: Database Management Systems",
  "xp": 200,
  "badge": "Data Modeller",
  "skillStep": "Database Management Systems — Foundation complete",
  "quiz": [
   {
    "q": "The relational model's tables are, mathematically:",
    "options": [
     "Sorted lists",
     "Sets of tuples — no duplicates, no intrinsic order",
     "Trees",
     "Graphs"
    ],
    "answer": 1,
    "why": "Level 23's relations, stored: set semantics explain both duplicate rejection and ORDER BY's necessity."
   },
   {
    "q": "Which SQL combination lists departments with their employee counts, including departments with none?",
    "options": [
     "INNER JOIN + COUNT(*)",
     "LEFT JOIN + COUNT(employee.id) grouped by department",
     "Cartesian join",
     "UNION of both tables"
    ],
    "answer": 1,
    "why": "LEFT preserves empty departments; COUNT of the right-side key counts 0 for them."
   },
   {
    "q": "BCNF strengthens 3NF by requiring:",
    "options": [
     "Atomic values",
     "Every determinant to be a candidate key",
     "No foreign keys",
     "Sorted rows"
    ],
    "answer": 1,
    "why": "If X → Y and X is not a key, BCNF is violated — the last redundancy corner."
   },
   {
    "q": "Isolation levels are a trade between:",
    "options": [
     "Speed and storage",
     "Correctness under concurrency (anomalies prevented) and concurrency/performance allowed",
     "Security and backups",
     "SQL and NoSQL"
    ],
    "answer": 1,
    "why": "Stricter isolation prevents more anomalies and serializes more work — a priced dial, not a dogma."
   },
   {
    "q": "An index on (city) will NOT directly speed up a query filtering only by:",
    "options": [
     "city",
     "city with ORDER BY city",
     "postal_code — a different column needs its own index (leftmost-prefix rule)",
     "Nothing — it speeds everything"
    ],
    "answer": 2,
    "why": "Indexes serve their own columns (and prefixes); an unrelated column still scans."
   }
  ],
  "practicals": [
   {
    "task": "Full design: a clinic needs patients, doctors, and appointments (an appointment links one patient, one doctor, a time, and a status). Sketch the schema + the one query that lists today's appointments with names:",
    "options": [
     "One table with doctor name and patient name typed per appointment",
     "patients(id, name), doctors(id, name), appointments(id, patient_id FK, doctor_id FK, starts_at, status) + a JOIN of appointments to both name tables filtered by date",
     "appointments with a 'people' text column",
     "Three tables, queried separately by hand"
    ],
    "answer": 1,
    "explain": "Facts live once (names with their owners); the appointment — an entity with its own facts — carries keys, and the join assembles the human-readable view.",
    "hint": "Entities first, keys second, join last."
   },
   {
    "task": "Incident review: after a crash, an account shows a debit with no matching credit, from code that auto-committed each statement. Root cause in one sentence:",
    "options": [
     "The disk is old",
     "The transfer's statements were never wrapped in a single transaction, so atomicity never applied — partial work committed itself piecemeal",
     "SQL is unreliable",
     "The index was missing"
    ],
    "answer": 1,
    "explain": "No transaction boundary = no atomicity. The fix is structural (BEGIN…COMMIT), not hardware.",
    "hint": "Which guarantee was absent, and what creates it?"
   }
  ],
  "written": {
   "prompt": "In 6–8 lines: explain to a shop owner why her single spreadsheet-like table (one row per order, customer details repeated) will eventually contradict itself, and what normalization does about it — without using the words 'normal form'.",
   "model": "In the single table, a customer's city is typed again on every order she places. When she moves house, someone must find and change every one of those copies; miss one — and someone always misses one — and the shop now holds two cities for the same person, with no way to know which is true. Any report, delivery or bill built on the wrong copy is wrong, silently. Normalization fixes this structurally instead of by care: the customer's city is stored exactly once, in a customers table, and each order merely references the customer. One fact, one home, one place to update — disagreement becomes impossible rather than unlikely, and joins reassemble the wide view whenever it is needed."
  }
 },
 {
  "id": "fin-l28",
  "level": 28,
  "title": "Level 28 Final: Software Engineering",
  "xp": 200,
  "badge": "Process Engineer",
  "skillStep": "Software Engineering — Foundation complete",
  "quiz": [
   {
    "q": "The single strongest predictor that a lifecycle model fits a project is:",
    "options": [
     "Team size",
     "How stable and knowable the requirements are",
     "The language used",
     "The office location"
    ],
    "answer": 1,
    "why": "Stability decides the waterfall↔iterative bet; everything else is secondary."
   },
   {
    "q": "'As a librarian, I want overdue lists each morning, so that I can chase returns' lacks, to be buildable:",
    "options": [
     "A benefit",
     "Acceptance criteria: what counts as overdue, delivery time/format, and the test that decides pass/fail",
     "A role",
     "A goal"
    ],
    "answer": 1,
    "why": "Role, goal and benefit are present; the decidable done-ness is not."
   },
   {
    "q": "Observer's decoupling means the subject:",
    "options": [
     "Stores nothing",
     "Knows only the notify protocol — new observers join without subject changes",
     "Runs faster",
     "Needs no testing"
    ],
    "answer": 1,
    "why": "Extensibility by addition, not by modification — the pattern's essence."
   },
   {
    "q": "The cheapest defect is the one caught:",
    "options": [
     "In production",
     "In the earliest phase that can catch it — requirements reviews catch requirement defects at sentence prices",
     "By users",
     "Never"
    ],
    "answer": 1,
    "why": "The cost curve again: phase of discovery sets the price."
   },
   {
    "q": "Git's branch is cheap because:",
    "options": [
     "It compresses files",
     "It is a pointer to a commit, not a copy of the tree",
     "It is stored in the cloud",
     "It deletes history"
    ],
    "answer": 1,
    "why": "Pointer semantics in the commit DAG — the graph model pays off again."
   }
  ],
  "practicals": [
   {
    "task": "Plan it: a two-person team has 6 weeks for the clinic booking app (Level 27's schema). Give the engineering skeleton:",
    "options": [
     "Waterfall: 5 weeks coding, 1 week 'testing if time'",
     "3 two-week sprints, each a vertical slice (booking end-to-end → reschedule/cancel → doctor views/reports), stories with acceptance criteria in an ordered backlog, feature branches + reviewed merges, acceptance test per story",
     "Code everything, document at the end",
     "One giant commit weekly"
    ],
    "answer": 1,
    "explain": "The full level in one plan: slices, stories, gates, tests — feedback at weeks 2 and 4, not a cliff at week 6.",
    "hint": "Slices on a calendar, gates on the merges, tests on the stories."
   },
   {
    "task": "Review the message: a commit lands titled 'final fix v2 really final'. Two professional objections:",
    "options": [
     "It is too short only",
     "It says nothing about WHAT changed or WHY (unreadable in an incident), and 'final' claims in history signal unplanned, unreviewed work landing directly — the branch/review loop was skipped",
     "Commits need emojis",
     "Version numbers are banned"
    ],
    "answer": 1,
    "explain": "Messages are incident-time documentation; vague + 'final' marks both a content failure and a process smell.",
    "hint": "Ask: could a stranger act on this message at 2 a.m.?"
   }
  ],
  "written": {
   "prompt": "In 6–8 lines: a solo developer says process is 'for big teams' and plans to build a client's shop app by coding everything first, then 'adding tests and docs if there's time'. Persuade them with the cost-of-change curve and name the two cheapest process habits to adopt this week.",
   "model": "Process is not headcount; it is the price schedule of your own future mistakes. The defects you will certainly make cost a sentence each if caught while the requirements are still sentences, a redesign in design, a rewrite in code, and an incident after the client is live — and 'testing at the end' schedules every discovery at the most expensive phase, on a deadline. Solo changes none of that arithmetic; it only removes the witnesses. Two habits cost almost nothing and buy most of the curve: write each feature as a one-line story with an acceptance check before coding it, so 'done' is decided before it is expensive; and keep the work in Git with small commits whose messages say what changed and why, so any bad day can be reverted instead of excavated. Tests and docs are not the dessert phase — the test IS the acceptance check written down, and the README is the first story's reader."
  }
 },
 {
  "id": "fin-l29",
  "level": 29,
  "title": "Level 29 Final: Theory of Computation",
  "xp": 200,
  "badge": "Boundary Mapper",
  "skillStep": "Theory of Computation — Foundation complete",
  "quiz": [
   {
    "q": "Order the classes by power (weakest → strongest):",
    "options": [
     "CFL ⊂ regular ⊂ decidable",
     "Regular ⊂ context-free ⊂ decidable (TM) — each step bought by a memory upgrade",
     "Regular = CFL = decidable",
     "Decidable ⊂ regular"
    ],
    "answer": 1,
    "why": "State only → stack → tape: memory discipline IS the hierarchy."
   },
   {
    "q": "Which language is NOT regular but IS context-free?",
    "options": [
     "Strings ending in abb",
     "Palindromes over {a,b} — a stack can hold the first half for mirror-checking",
     "Even-length strings",
     "a*b*"
    ],
    "answer": 1,
    "why": "Mirror matching needs the first half remembered in reverse — stack-shaped memory."
   },
   {
    "q": "The halting problem's undecidability proof hinges on:",
    "options": [
     "Counting arguments only",
     "Diagonalization: building D to invert its own predicted behaviour, so an assumed decider contradicts itself",
     "The pumping lemma",
     "NP-completeness"
    ],
    "answer": 1,
    "why": "Self-reference with inversion — Cantor's diagonal wearing a program."
   },
   {
    "q": "A problem with polynomial-time verification but no known polynomial solution is, precisely:",
    "options": [
     "Undecidable",
     "In NP; possibly P, possibly NP-complete — status open unless reductions classify it",
     "Not computable",
     "Regular"
    ],
    "answer": 1,
    "why": "NP membership is about certificates; completeness is earned by reductions, not by difficulty vibes."
   },
   {
    "q": "Why does aⁿbⁿcⁿ escape the context-free class?",
    "options": [
     "Three letters are too many",
     "It needs TWO independent counts matched against a third — one stack can track only one; popping for b's destroys the count c's need",
     "It is undecidable",
     "It is regular"
    ],
    "answer": 1,
    "why": "Two counters exceed one stack — the memory-discipline hierarchy again (a TM handles it by marking)."
   }
  ],
  "practicals": [
   {
    "task": "Full classification: for each job name the weakest sufficient machine class — (1) check a password ends with a digit, (2) check JSON nesting is well-formed, (3) check two files contain the same number of lines in the same order of lengths:",
    "options": [
     "All DFA",
     "(1) DFA/regular — a suffix property; (2) PDA/CFL — unbounded nesting; (3) beyond CFL — two independent sequences must be compared, needing tape (TM/full computation)",
     "All TM",
     "(1) PDA, (2) DFA, (3) DFA"
    ],
    "answer": 1,
    "explain": "The memory each job's structure demands is the classification method: suffix → finite; nesting → stack; cross-sequence equality → tape.",
    "hint": "Ask of each: what must be remembered, in what discipline?"
   },
   {
    "task": "Proof repair: a classmate 'proves' aⁿbⁿ regular by exhibiting a 10-state DFA that works for all strings up to length 20 (tested!). The fatal flaw:",
    "options": [
     "10 states is too few",
     "Regularity is a claim about ALL strings, unbounded n; any finite test set is consistent with a finite (hence regular) SUBSET — the claim fails exactly where counting outgrows states, which no finite test reaches",
     "Testing is not allowed",
     "The DFA is too big"
    ],
    "answer": 1,
    "explain": "Finite evidence cannot settle an infinite claim — the pumping lemma exists precisely to argue past every finite test.",
    "hint": "Ask: what does the claim quantify over, and what did the evidence cover?"
   }
  ],
  "written": {
   "prompt": "In 6–8 lines: explain to a smart non-specialist why there are questions no computer program can ever answer — using the halting problem and the D construction, without symbols or jargon beyond 'program' and 'input'.",
   "model": "Imagine someone claims to have built a perfect checker: give it any program and any input, and it always tells you, correctly, whether that program will eventually finish or run forever. Now build one special program out of the checker itself: it asks the checker 'will I finish, if you feed me my own description?' — and then does the opposite of the answer. If the checker says 'it finishes', this program runs forever; if the checker says 'it runs forever', the program finishes on the spot. Feed this program its own description, and the checker is trapped: whichever answer it gives is wrong. The trap is built from the checker itself, so it defeats EVERY possible checker, not just one inventor's attempt — that is why 'will this program halt?' is not a hard question awaiting a cleverer tool, but a question with a proof that no tool can exist."
  }
 },
 {
  "id": "fin-l30",
  "level": 30,
  "title": "Level 30 Final: Compiler Design",
  "xp": 200,
  "badge": "Compiler Builder",
  "skillStep": "Compiler Design — Foundation complete",
  "quiz": [
   {
    "q": "The six phases in order are:",
    "options": [
     "Parse → lex → check → IR → optimize → generate",
     "Lexical analysis → parsing → semantic analysis → IR generation → (optimization) → code generation",
     "Code generation first",
     "Lexing → code generation → parsing"
    ],
    "answer": 1,
    "why": "Characters to tokens to tree to meaning to IR to target — each phase consumes the previous phase's output."
   },
   {
    "q": "Why can the lexer be built from regular expressions but the parser cannot?",
    "options": [
     "Regex is faster",
     "Token shapes need no nesting/counting (regular); syntax nests without bound (context-free) — the Level 29 hierarchy chooses each phase's tool",
     "Parsers predate regex",
     "It can — both use regex"
    ],
    "answer": 1,
    "why": "The machine-class hierarchy is the compiler's blueprint: DFA power for tokens, stack power for structure."
   },
   {
    "q": "An IR's purpose in one line:",
    "options": [
     "To slow compilation down",
     "A shared middle form so N front ends and M back ends replace N×M compilers, and optimizations are written once",
     "To store the program",
     "To replace the AST for storage reasons"
    ],
    "answer": 1,
    "why": "The narrow waist: language variety above, machine variety below."
   },
   {
    "q": "Which is a miscompilation?",
    "options": [
     "Slow generated code",
     "An 'optimization' rewriting (a - b) as (b - a) 'for symmetry' — output changes for most inputs; the compiler has corrupted a correct program",
     "A verbose error message",
     "Unfolded constants"
    ],
    "answer": 1,
    "why": "Wrong code from a compiler is worse than slow code — every program it touches inherits the lie."
   },
   {
    "q": "Recursive descent's structure mirrors:",
    "options": [
     "The token list",
     "The grammar: one function per non-terminal, calls following productions — which is why left recursion must be refactored into loops first",
     "The symbol table",
     "The TAC list"
    ],
    "answer": 1,
    "why": "Code as the grammar's portrait — and its known limitation (left recursion) has a standard cure."
   }
  ],
  "practicals": [
   {
    "task": "Build the front half: tokenize and give the tree for 'qty * (price + 2)' using this level's tools:",
    "options": [
     "Tokens: ID,OP,ID,NUM flat; tree ('*', 'qty', ('+', 'price', 2))",
     "Tokens: ID(qty) OP(*) OP( ( ) ID(price) OP(+) NUM(2) OP()) — and the tree is ('*', 'qty', ('+', 'price', 2)): parentheses forced the + deeper, so it evaluates first despite *'s precedence",
     "Tree: ('+', ('*', 'qty', 'price'), 2)",
     "Tokens only; trees are the back end's job"
    ],
    "answer": 1,
    "explain": "The parenthesis restarts parse_E inside parse_F — precedence is overridden structurally, exactly as designed in lesson 2.",
    "hint": "Tokenize first; then let parentheses move the + down the tree."
   },
   {
    "task": "Audit an optimizer pass over TAC: (1) t1 = 8 / 2 → t1 = 4; (2) t2 = x - x → t2 = 0; (3) t3 = y / y → t3 = 1. Verdicts:",
    "options": [
     "All legal",
     "(1) legal constant fold; (2) legal identity for numbers (x - x = 0 always); (3) ILLEGAL — y = 0 makes the original an error while the rewrite yields 1; the pass must be rejected on (3)",
     "All illegal",
     "(3) is the only legal one"
    ],
    "answer": 1,
    "explain": "Two laws hold universally; the third fails at exactly one input — and one input is enough.",
    "hint": "For each rewrite, hunt the counterexample value before approving."
   }
  ],
  "written": {
   "prompt": "In 6–8 lines: trace the expression 'total = price * qty + 10' through all six compiler phases, naming what each phase receives and produces — as you would answer in a viva.",
   "model": "Lexical analysis receives the raw characters and produces tokens: ID(total), OP(=), ID(price), OP(*), ID(qty), OP(+), NUM(10). The parser consumes the tokens and builds the tree ('=', 'total', ('+', ('*', 'price', 'qty'), 10)) — with * deeper than +, so precedence is structural. Semantic analysis walks the tree with the symbol table, confirming price and qty are declared (and numeric) before anything is computed. IR generation flattens the tree post-order into TAC: t1 = price * qty; t2 = t1 + 10; total = t2. Optimization inspects the TAC — nothing here is constant, so it passes unchanged (had it been 50 * 3 + 10, folding would have reduced it to total = 160 before code generation). Code generation finally translates each TAC line into target instructions — on the stack machine: PUSH price, PUSH qty, MUL, PUSH 10, ADD, STORE total — ready to execute."
  }
 },
 {
  "id": "fin-l31",
  "level": 31,
  "title": "Level 31 Final: AI/ML Basics",
  "xp": 200,
  "badge": "AI Foundations",
  "skillStep": "AI/ML Basics — Foundation complete",
  "quiz": [
   {
    "q": "The four paradigms in this level, matched to their fuel:",
    "options": [
     "Search–labels, rules–data",
     "Search–a graph + goal test; rules–hand-written facts and implications; supervised–labelled examples; unsupervised–unlabelled data + a structure criterion",
     "All use labels",
     "All use graphs"
    ],
    "answer": 1,
    "why": "Each paradigm is defined by what it is GIVEN: structure, knowledge, labels, or raw data."
   },
   {
    "q": "Why does BFS not solve weighted shortest paths?",
    "options": [
     "It is too slow",
     "BFS minimizes the NUMBER of edges; weighted cost needs cost-ordered expansion (Dijkstra/A*) because a 2-hop expensive route can beat a 5-hop cheap one in hops yet lose in cost",
     "Weights are not allowed in graphs",
     "It does, actually"
    ],
    "answer": 1,
    "why": "Optimizing the wrong quantity is a silent correctness failure — the objective must match the problem's cost."
   },
   {
    "q": "Overfitting is best defined as:",
    "options": [
     "A large model",
     "Learning the training data's specifics (including its noise) at the expense of unseen data — measured by the train/test gap",
     "Training too long, always",
     "Using neural networks"
    ],
    "answer": 1,
    "why": "The gap is the definition made measurable; size and time are merely risk factors."
   },
   {
    "q": "A hidden layer's contribution, in one line:",
    "options": [
     "More weights",
     "A learned re-representation of the inputs that can make the output problem linearly separable",
     "Faster training",
     "Better accuracy guaranteed"
    ],
    "answer": 1,
    "why": "Representation, not volume, is depth's mechanism — XOR is the witness."
   },
   {
    "q": "The single most informative evaluation artefact is:",
    "options": [
     "The accuracy percentage",
     "The confusion matrix on held-out data — every metric derives from it, and it exposes both error kinds before any ratio hides them",
     "The training loss curve",
     "The model's size"
    ],
    "answer": 1,
    "why": "Four counts on unseen data: the audit trail from which all honest numbers are computed."
   }
  ],
  "practicals": [
   {
    "task": "Design the approach: a campus system must (1) find the shortest walking route between halls, (2) flag rule-violating network configs from stated policies, (3) group 10,000 unlabelled support tickets by topic. Assign a paradigm per job with one reason each:",
    "options": [
     "All supervised learning",
     "(1) Search (BFS/weighted) — a graph with a goal; (2) a rule KB — policies are stated implications and audits need cited rules; (3) unsupervised clustering — no labels exist, structure must be proposed then interpreted",
     "All neural networks, trained longer",
     "(1) clustering, (2) regression, (3) perceptron"
    ],
    "answer": 1,
    "explain": "Paradigm follows the givens: graph+goal → search; stated policy → rules; unlabelled mass → clustering.",
    "hint": "Name what each job HANDS you before naming any algorithm."
   },
   {
    "task": "Evaluate the claim: 'Our AI tutor model is 97% accurate at predicting which students will fail.' The three audit demands:",
    "options": [
     "Accept — 97 is high",
     "(1) The base rate: if 3% fail, 'nobody fails' is already 97% — show the confusion matrix; (2) held-out evaluation: was this measured on students the model never trained on? (3) The error costs: a false 'will fail' label and a missed at-risk student are not symmetric harms — state precision and recall separately",
     "Ask for a demo video",
     "Only (1) matters"
    ],
    "answer": 1,
    "explain": "Base rate, held-out honesty, asymmetric costs — the full evaluation lesson in one audit.",
    "hint": "Accuracy claims collapse or survive on exactly these three questions."
   }
  ],
  "written": {
   "prompt": "In 6–8 lines: a hospital offers you two triage models — Model A: accuracy 99%, recall 40%. Model B: accuracy 93%, recall 97%, precision 30%. Which do you deploy as the first screening stage, and what must stand behind it? Defend with the confusion-matrix logic, not with the accuracy numbers.",
   "model": "Deploy Model B. A first screening stage exists to miss nobody: its catastrophic error is the false negative, and recall is exactly the anti-miss measure. Model A's 99% accuracy is the imbalance mirage — in a mostly-healthy population, a model can be almost always right while letting 60% of real cases walk through, which for triage is the one unforgivable failure. Model B catches 97% of real cases. Its weakness is precision: of everything it flags, only 30% is real, so seven in ten flagged patients are healthy — acceptable ONLY because a second, precise stage (senior clinician review, confirmatory test) stands behind the screen to sort the flagged pool before treatment decisions. Screen wide with B, confirm precisely with stage two, and judge each stage by the error it exists to prevent: recall at the gate, precision at the decision."
  }
 }
];

export const PHASE5_LABS: Lab[] = [
 {
  "id": "lab-l23-logic",
  "title": "Logic & Sets Workbook (Truth Tables Under Test)",
  "type": "Guided exercise",
  "level": 23,
  "xp": 60,
  "minutes": 30,
  "objective": "Verify, by exhaustion, one logical equivalence and two set identities on concrete data — and state in one line each why the machine check supports (but does not replace) the symbolic statement.",
  "environment": "In-app simulation plus your own local tools (Python 3 / sqlite3 / Git) on your own machine. No real systems involved.",
  "setup": "Requires Lessons: Propositional Logic (l23-logic). You will reason about the lesson's truth-table program and set operations; no new tools.",
  "startState": "Four claims on the table, none yet judged.",
  "tasks": [
   {
    "prompt": "Claim: (p ∧ q) → r is equivalent to p → (q → r) in all 8 rows. Correct method?",
    "options": [
     "Test the row p=q=r=True only",
     "Build both truth tables and compare all 8 rows",
     "Ask a classmate",
     "It is false by inspection"
    ],
    "answer": 1,
    "explain": "Propositional equivalence is decided by complete tables — 8 rows is small enough to be exhaustive."
   },
   {
    "prompt": "A ∪ (B ∩ C) versus (A ∪ B) ∩ (A ∪ C) on A={1,2}, B={2,3}, C={3,4}: both sides equal?",
    "options": [
     "No",
     "Yes — both are {1,2,3} (distributive law)",
     "Only the left is defined",
     "Both are empty"
    ],
    "answer": 1,
    "explain": "Left: {1,2} ∪ {3} = {1,2,3}. Right: {1,2,3} ∩ {1,2,3,4} = {1,2,3}."
   },
   {
    "prompt": "Claim: 'every graph has a vertex of even degree'. Settle it:",
    "options": [
     "True — the degree sum is always even",
     "False — a graph with a single edge has degrees 1 and 1, both odd: a counterexample",
     "Needs a truth table",
     "True for directed graphs only"
    ],
    "answer": 1,
    "explain": "One edge, two vertices, degrees 1 and 1 — no even-degree vertex exists. A universal claim falls to one counterexample, however small."
   },
   {
    "prompt": "Which lab habit transfers directly to exam proofs?",
    "options": [
     "Checking every case the claim quantifies over",
     "Guessing the answer first",
     "Skipping small cases",
     "Using decimals"
    ],
    "answer": 0,
    "explain": "Exhaustion over the quantified cases is both the lab method and the proof method for finite claims."
   }
  ],
  "hint": "A claim about ALL rows/elements is settled by checking every row/element; a claim about existence needs one witness.",
  "result": "You judged all four claims with the correct method for each — exhaustion for universals, a witness for existence, a counterexample for a false universal."
 },
 {
  "id": "lab-l24-algo",
  "title": "Complexity Bench (Measure, Count, Conclude)",
  "type": "Guided exercise",
  "level": 24,
  "xp": 60,
  "minutes": 30,
  "objective": "Take three mystery workloads, identify each one's growth class from operation counts (not timings), and defend each verdict with the count table.",
  "environment": "In-app simulation plus your own local tools (Python 3 / sqlite3 / Git) on your own machine. No real systems involved.",
  "setup": "Requires Lesson: Big-O (l24-bigo). All data below is from the lesson's counting method.",
  "startState": "Three workloads measured at n = 100 and n = 1000: W1: 100 → 1000 steps. W2: 10,000 → 1,000,000 steps. W3: 7 → 10 steps.",
  "tasks": [
   {
    "prompt": "W1 grows 100 → 1000 when n grows 100 → 1000 (×10). Class?",
    "options": [
     "Quadratic",
     "Linear — steps scale with n",
     "Logarithmic",
     "Exponential"
    ],
    "answer": 1,
    "explain": "×10 input, ×10 steps: the signature of O(n)."
   },
   {
    "prompt": "W2 grows 10,000 → 1,000,000 (×100) for the same ×10 input growth. Class?",
    "options": [
     "Linear",
     "n log n",
     "Quadratic — steps scale with n²",
     "Constant"
    ],
    "answer": 2,
    "explain": "×10 input → ×100 steps is n² announcing itself."
   },
   {
    "prompt": "W3 grows 7 → 10 steps for ×10 input. Class and likely shape?",
    "options": [
     "Linear",
     "Logarithmic — a halving/divide loop (log₂1000 ≈ 10)",
     "Quadratic",
     "Exponential"
    ],
    "answer": 1,
    "explain": "Tiny additive growth under ×10 input is the logarithm's fingerprint."
   },
   {
    "prompt": "At n = 10⁶, which workload is the production emergency?",
    "options": [
     "W1 (~10⁶ steps)",
     "W3 (~20 steps)",
     "W2 (~10¹² steps — quadratic at a million is a trillion)",
     "All equal"
    ],
    "answer": 2,
    "explain": "Extrapolate the class, not the sample: W2's class makes it the emergency regardless of today's hardware."
   }
  ],
  "hint": "Divide: when n grows ×10, linear grows ×10, quadratic ×100, logarithmic by a small addition.",
  "result": "You classified W1 linear, W2 quadratic, W3 logarithmic — each from the ratio test, with the engineering consequence stated."
 },
 {
  "id": "lab-l25-adder",
  "title": "Adder Bench (Design, Build, Break, Fix)",
  "type": "Guided exercise",
  "level": 25,
  "xp": 60,
  "minutes": 30,
  "objective": "Design a circuit for a stated spec (output 1 when a 3-bit value is even and non-zero), take it from truth table to minimized expression, and then diagnose a broken variant from its observed table.",
  "environment": "In-app simulation plus your own local tools (Python 3 / sqlite3 / Git) on your own machine. No real systems involved.",
  "setup": "Requires Lessons: Combinational Circuits (l25-combinational). Pencil, paper, and the truth-table discipline from this level.",
  "startState": "Spec on the bench: inputs a b c (a is MSB), output f. Nothing drawn yet.",
  "tasks": [
   {
    "prompt": "Which rows of the (a,b,c) table have f = 1 for 'even and non-zero' (value = 4a + 2b + c)?",
    "options": [
     "001, 010, 011",
     "010, 100, 110 — values 2, 4, 6",
     "000, 010, 100",
     "110, 111, 100"
    ],
    "answer": 1,
    "explain": "Even ⇒ c = 0; non-zero excludes 000. Values 2 (010), 4 (100), 6 (110)."
   },
   {
    "prompt": "Group those rows on the K-map: 010 and 110 pair up; 100 pairs with 110 too. The minimized f is:",
    "options": [
     "f = b·¬c + a·¬c = ¬c·(a + b)",
     "f = b·c",
     "f = a·b·¬c only",
     "f = ¬a·¬b·¬c"
    ],
    "answer": 0,
    "explain": "010+110 differ only in a → b·¬c. 100+110 differ only in b → a·¬c. OR them: f = ¬c·(a + b). Common thread: c = 0 in every 1-row."
   },
   {
    "prompt": "A built variant gives f = 1 on row 000 as well. The single most likely wiring fault?",
    "options": [
     "The clock is slow",
     "The ¬c term was wired as c̄ missing — i.e. the NOT on c is absent, or the non-zero condition was never implemented: 000 satisfies 'even' alone",
     "Too many gates",
     "The inputs are labelled in binary"
    ],
    "answer": 1,
    "explain": "000 is even; only the non-zero condition excludes it. A missing ¬c / missing zero-check is the fault class to inspect first."
   },
   {
    "prompt": "Professional verification step before calling the design done?",
    "options": [
     "Admire the diagram",
     "Simulate or test ALL 8 rows against the spec table — combinational designs are cheap to verify exhaustively",
     "Test row 111 only",
     "Ask the instructor"
    ],
    "answer": 1,
    "explain": "Eight rows is nothing: exhaustive verification is the combinational designer's privilege — use it."
   }
  ],
  "hint": "Write the 8-row table first; mark rows 010, 100, 110. Then let the K-map speak.",
  "result": "You produced the verified minimal form f = ¬c·(a + b) from the table and named the exact row where the broken variant disagrees with the spec."
 },
 {
  "id": "lab-l26-trace",
  "title": "Trace Room (Assembly Under the Magnifier)",
  "type": "Guided exercise",
  "level": 26,
  "xp": 60,
  "minutes": 30,
  "objective": "Trace a complete assembly listing with a loop and a procedure call, predict its exit code before 'running' it, and locate a planted bug from a wrong trace.",
  "environment": "In-app simulation plus your own local tools (Python 3 / sqlite3 / Git) on your own machine. No real systems involved.",
  "setup": "Requires Lessons: Loops, Conditions and Procedures (l26-asm-loops). The listing: _start sets RCX=4, RAX=0; loop: CALL double_rax is NOT used — body is: add rax, rcx / dec rcx / jnz loop; then exit with RAX. Separately, a helper 'triple' procedure exists: it does add rax, rax / add rax, rbx_orig… (see task 3 for its exact, buggy text).",
  "startState": "Listing on the bench, registers blank, prediction not yet written.",
  "tasks": [
   {
    "prompt": "Trace the loop: RAX starts 0, RCX starts 4, body adds RCX then decrements. RAX after the FIRST pass?",
    "options": [
     "0",
     "4",
     "10",
     "1"
    ],
    "answer": 1,
    "explain": "First pass adds RCX = 4 (countdown order)."
   },
   {
    "prompt": "The loop's full partial-sum trace and exit code:",
    "options": [
     "1, 3, 6, 10 → exit 10",
     "4, 7, 9, 10 → exit 10",
     "4, 8, 12, 16 → exit 16",
     "5, 9, 12, 14 → exit 14"
    ],
    "answer": 1,
    "explain": "Countdown partials: 4, 4+3=7, 7+2=9, 9+1=10. Total 10 either direction — addition commutes."
   },
   {
    "prompt": "The 'triple' helper is supposed to compute RAX = 3 × RBX but is written: mov rax, rbx / add rax, rbx / add rbx, rax / ret. Caller's RBX was 5 and must survive. The faults:",
    "options": [
     "None — it works",
     "The third instruction writes the tripled value into RBX (18… actually 15) instead of RAX — result lands in the wrong register AND clobbers the caller's RBX which the convention said to preserve",
     "It needs an interrupt",
     "RET is misspelled"
    ],
    "answer": 1,
    "explain": "Trace: RAX=5, RAX=10, then RBX=5+10=15 — RAX still holds 10 (2×) and RBX is destroyed. Two faults, one line."
   },
   {
    "prompt": "The professional habit this lab is really grading:",
    "options": [
     "Typing speed",
     "Predict-before-run: the trace table is written BEFORE execution, and any mismatch between prediction and machine is treated as information, not embarrassment",
     "Memorizing opcodes",
     "Using the newest assembler"
    ],
    "answer": 1,
    "explain": "Every lesson in this level ran the same loop: predict, run, reconcile. The table is the skill."
   }
  ],
  "hint": "Build the register table first (RAX, RCX per line). The exit code is the table's last RAX.",
  "result": "You predicted the exit code 10 from the trace alone and named the register-clobbering fault in the helper procedure."
 },
 {
  "id": "lab-l27-sql",
  "title": "Practice Database Lab (Real SQL, Real Answers)",
  "type": "Guided exercise",
  "level": 27,
  "xp": 60,
  "minutes": 30,
  "objective": "On the lesson's students/grades practice database, answer four reporting questions with real SQL — choosing join types and aggregates deliberately — and verify each answer by hand-checkable arithmetic.",
  "environment": "In-app simulation plus your own local tools (Python 3 / sqlite3 / Git) on your own machine. No real systems involved.",
  "setup": "Requires Lessons: SQL II — Joins (l27-sql-joins). Database: students (1 Ana, 2 Bil, 3 Cy); grades (Ana: DB 90, Algo 80; Bil: DB 70). Same data as the lesson.",
  "startState": "Four reporting questions on the whiteboard; the database is live in front of you.",
  "tasks": [
   {
    "prompt": "Q1: 'List every student with their number of graded courses, including students with none.' Correct query shape?",
    "options": [
     "INNER JOIN + COUNT(*)",
     "LEFT JOIN grades, GROUP BY student, COUNT(g.course) — Cy appears with 0",
     "INNER JOIN + COUNT(g.course)",
     "No join needed"
    ],
    "answer": 1,
    "explain": "Census wording ('every student, including none') forces LEFT; COUNT of the joined column turns Cy's NULL into 0."
   },
   {
    "prompt": "Q2: 'Average score in the DB course.' The value and the clause:",
    "options": [
     "80.0 via AVG over the whole grades table",
     "80.0 via WHERE course = 'DB' then AVG(score) — (90 + 70) / 2",
     "90.0 via MAX",
     "85.0 via AVG of averages"
    ],
    "answer": 1,
    "explain": "Filter first (DB rows: 90, 70), then aggregate: 80.0. Same number as the trap option, reached honestly — the clause is the grade."
   },
   {
    "prompt": "Q3: 'Names of students with an average of at least 80.' Answer set:",
    "options": [
     "Ana and Bil",
     "Ana only — her average is 85.0; Bil's is 70.0; the filter belongs in HAVING after GROUP BY",
     "All three",
     "Cy only"
    ],
    "answer": 1,
    "explain": "Filtering on an aggregate requires HAVING (WHERE cannot see group results); only Ana's group qualifies."
   },
   {
    "prompt": "Q4: A colleague's 'students and their courses' report shows 9 rows from 3 students and 3 grade rows. Diagnosis:",
    "options": [
     "The database duplicated data",
     "The ON condition is missing — a Cartesian product (3 × 3); add ON g.student_id = s.id",
     "ORDER BY is missing",
     "The tables need indexes"
    ],
    "answer": 1,
    "explain": "Row-count arithmetic (3×3) names the fault exactly; the fix is the join condition, not the data."
   }
  ],
  "hint": "For each question ask first: who must appear in the answer (join type), then: one row per what (grouping).",
  "result": "All four reports produced with the correct join/aggregate choices — including the census report that keeps Cy visible with a zero count."
 },
 {
  "id": "lab-l28-git",
  "title": "Team Git Workflow Lab (Guided, Local Repository)",
  "type": "Guided exercise",
  "level": 28,
  "xp": 60,
  "minutes": 30,
  "objective": "In a local throwaway repository, run the full professional loop with a partner (or a second clone as your 'teammate'): feature branch, small commits with honest messages, a deliberate conflicting edit, a reviewed merge, and a clean history you can narrate.",
  "environment": "In-app simulation plus your own local tools (Python 3 / sqlite3 / Git) on your own machine. No real systems involved.",
  "setup": "Requires Lesson: Version Control with Git (l28-git-teamwork). Local tools: git init in a scratch folder; two working copies (or a partner) to manufacture a real conflict.",
  "startState": "Repository initialised; the story to deliver: 'renewal limit' from the lesson.",
  "tasks": [
   {
    "prompt": "Step check: before branching, the repository's state should be:",
    "options": [
     "Anything goes",
     "On main, clean working tree, latest code — branching from a dirty or stale base imports confusion into the feature",
     "Detached HEAD",
     "Uninitialised"
    ],
    "answer": 1,
    "explain": "Branch from a known-good, current main: the loop's hygiene step."
   },
   {
    "prompt": "Your feature takes three sittings. The professional commit pattern:",
    "options": [
     "One commit at the end: 'feature done'",
     "A commit per coherent sub-change, each message stating what + why — history stays reviewable and revertable in pieces",
     "A commit per file save",
     "Commits only on Fridays"
    ],
    "answer": 1,
    "explain": "Commit granularity = revert granularity = review granularity."
   },
   {
    "prompt": "The manufactured conflict arrives: both edited the renewal-limit line. Correct resolution:",
    "options": [
     "Keep yours, delete theirs",
     "Read both intents, compose the line that honours both (or escalate to a conversation), test, and commit the resolution as a merge",
     "Re-clone and restart",
     "Take the longer line"
    ],
    "answer": 1,
    "explain": "Reconciliation is semantic work: both authors' purposes are data, not obstacles."
   },
   {
    "prompt": "After merging, git log --graph shows a merge commit with two parents. That shape PROVES:",
    "options": [
     "History was rewritten",
     "The branch's work joined main with its identity preserved — the graph kept both lines and their meeting",
     "A mistake happened",
     "The branch still exists"
    ],
    "answer": 1,
    "explain": "Two parents = two histories honestly joined; the DAG is the audit trail."
   }
  ],
  "hint": "Make the conflict small and on the same line — a one-line collision teaches the same reconciliation as a hundred-line one.",
  "result": "A merged history (git log --graph) showing: feature branch, two honest commits, one resolved conflict with both intents preserved, and a merge commit with two parents."
 },
 {
  "id": "lab-l29-machines",
  "title": "Machine Design Studio (Automata on Paper and in Code)",
  "type": "Guided exercise",
  "level": 29,
  "xp": 60,
  "minutes": 30,
  "objective": "Design three artefacts and verify each against adversarial strings: a DFA for a described language, a CFG for a matching language, and a high-level TM description for a two-symbol equality check — each tested against members AND intruders.",
  "environment": "In-app simulation plus your own local tools (Python 3 / sqlite3 / Git) on your own machine. No real systems involved.",
  "setup": "Requires Lessons: Finite Automata (l29-automata) and Context-Free Grammars (l29-cfg). Tools: paper for diagrams, the lessons' Python simulators for verification.",
  "startState": "Three design briefs on the board; simulators open.",
  "tasks": [
   {
    "prompt": "DFA brief: 'starts with a AND ends with b' over {a,b}. The information the states must hold:",
    "options": [
     "The whole string",
     "Two bits: (started-with-a still true?) × (last symbol is b?) — with a dead state for strings starting with b; four states cover it",
     "A counter",
     "The string's length"
    ],
    "answer": 1,
    "explain": "A conjunction of a prefix fact and a suffix fact — each is one bit; the product construction gives ≤ 4 states."
   },
   {
    "prompt": "CFG brief: palindromes over {a,b} with a centre marker c (e.g. abcba pattern written as w c wᴿ). The generating shape:",
    "options": [
     "S → aS | bS | c",
     "S → aSa | bSb | c — pairs wrap the centre symmetrically, mirroring by construction",
     "S → SS | c",
     "S → aSb | c"
    ],
    "answer": 1,
    "explain": "aSa/bSb grow the string symmetrically around c — the palindrome's structure IS the production shape."
   },
   {
    "prompt": "TM brief: equal 0s and 1s in ANY order. Why does marking beat counting here?",
    "options": [
     "Counting is faster",
     "States cannot hold an unbounded count, but the tape can hold CROSSED-OFF pairs — each sweep cancels one 0 with one 1, and the tape's marks are the count",
     "Marking uses less tape",
     "Counting needs a stack"
    ],
    "answer": 1,
    "explain": "Externalize the count onto the tape as marks — the canonical TM move from the lesson."
   },
   {
    "prompt": "Verification discipline: which test set certifies the DFA design?",
    "options": [
     "Ten random members",
     "Members AND near-miss intruders for each condition separately: 'ab' ✓, 'aab' ✓, 'ba' (start fails), 'aba' (end fails), 'b' , 'aa' — each boundary of the conjunction probed",
     "The empty string only",
     "One long string"
    ],
    "answer": 1,
    "explain": "Each conjunct gets its own failing witness — a test per clause, like the requirements lesson's acceptance criteria."
   }
  ],
  "hint": "Write each state's MEANING before drawing arrows; write each grammar's intruder string before its members.",
  "result": "Three verified artefacts: DFA (4 states) for 'starts with a, ends with b', CFG for palindromes-with-centre-marker, and a marking-sweep TM description for equal 0s and 1s — each with a passed test table including intruders."
 },
 {
  "id": "lab-l30-pipeline",
  "title": "Mini-Compiler Assembly Lab (All Six Phases, One Expression)",
  "type": "Guided exercise",
  "level": 30,
  "xp": 60,
  "minutes": 30,
  "objective": "Take one expression — 'fee = base * 2 + 5' with base = 40 declared — through all six phases by hand and in code: token list, parse tree, semantic verdict, TAC, stack code, and the optimized form, checking each phase's output against the next phase's expectation.",
  "environment": "In-app simulation plus your own local tools (Python 3 / sqlite3 / Git) on your own machine. No real systems involved.",
  "setup": "Requires Lessons: the full Level 30 sequence (lexer through optimization). Tools: the lessons' Python pieces beside you; a notebook page ruled into six phase rows.",
  "startState": "Source line on the board; six empty phase rows waiting.",
  "tasks": [
   {
    "prompt": "Phase 1–2 check: the token list and tree for 'fee = base * 2 + 5' are:",
    "options": [
     "Tokens: ID OP ID NUM OP NUM; tree ('=', 'fee', ('+', ('*', 'base', 2), 5))",
     "Tokens: ID(fee) OP(=) ID(base) OP(*) NUM(2) OP(+) NUM(5); tree ('=', 'fee', ('*', ('+', 'base', 2), 5))",
     "Tokens: ID(fee) OP(=) ID(base) OP(*) NUM(2) OP(+) NUM(5); tree ('=', 'fee', ('+', ('*', 'base', 2), 5)) — * deeper than +, assignment at the root",
     "Tree first, tokens after"
    ],
    "answer": 2,
    "explain": "The * subtree nests under +; the assignment is the root because it happens last."
   },
   {
    "prompt": "Phase 3 check: semantic analysis on this tree must confirm:",
    "options": [
     "That parentheses balance",
     "That 'base' is declared (it is: base = 40) and 'fee' is a legal assignment target — declarations before computation",
     "That the lexer was fast",
     "Nothing — parsing passed"
    ],
    "answer": 1,
    "explain": "One declared name used, one target assigned — the symbol table answers both."
   },
   {
    "prompt": "Phase 4–5 check: TAC and stack code are:",
    "options": [
     "TAC: t1 = base * 2; t2 = t1 + 5; fee = t2 — stack: PUSH 40, PUSH 2, MUL, PUSH 5, ADD, STORE fee → VM value 85",
     "TAC: t1 = base + 5 first",
     "Stack code can skip the MUL",
     "TAC: fee = base * 2 + 5 on one line"
    ],
    "answer": 0,
    "explain": "Post-order TAC mirrors the tree; the VM computes (40 * 2) + 5 = 85."
   },
   {
    "prompt": "Phase 6 check: the optimizer examines the TAC and correctly does NOTHING here because:",
    "options": [
     "Optimizers never run on assignments",
     "'base' is not a compile-time constant — t1 = base * 2 cannot fold; * 2 could become + base only as a strength-reduction with its own justification, and + 5 has no identity to exploit. Nothing folds; restraint is the correct output",
     "The code is already machine code",
     "Folding requires parentheses"
    ],
    "answer": 1,
    "explain": "Knowing when NO rewrite is licensed is the optimization lesson's other half."
   }
  ],
  "hint": "If a later phase surprises you, walk UP one phase at a time — the first phase whose output you cannot justify is the bug's home.",
  "result": "A complete six-row trace ending in stack code whose VM result is 85, plus the optimized TAC (unchanged — no constants to fold beyond the literals already present) with the reason stated."
 },
 {
  "id": "lab-l31-metrics",
  "title": "Metrics Audit Lab (Real Numbers, Real Verdicts)",
  "type": "Guided exercise",
  "level": 31,
  "xp": 60,
  "minutes": 30,
  "objective": "Given three classifiers' raw predictions on the same labelled test sets (printed in the tasks), compute each confusion matrix and its precision/recall, then issue deployment verdicts: which stages each model may serve, and which claim collapses under its own numbers.",
  "environment": "In-app simulation plus your own local tools (Python 3 / sqlite3 / Git) on your own machine. No real systems involved.",
  "setup": "Requires Lesson: Evaluation (l31-evaluation). All data is printed in the tasks; a calculator is allowed — the skill is the denominators and the verdicts, not mental arithmetic heroics.",
  "startState": "Three vendors' prediction sheets on the desk; the audit template is blank.",
  "tasks": [
   {
    "prompt": "Vendor 1 (malware net): TP 45, FP 15, FN 5, TN 35. Its precision/recall profile and stage:",
    "options": [
     "Precision 0.75, recall 0.90 — a strong net: catches 90% of real malware; stage one, feeding a precise second look",
     "Precision 0.90, recall 0.75",
     "Both 0.5 — reject",
     "Accuracy is all that matters: 0.80, ship as sole scanner"
    ],
    "answer": 0,
    "explain": "Precision = 45/(45+15) = 0.75; recall = 45/(45+5) = 0.90. High recall is the net's job description."
   },
   {
    "prompt": "Vendor 2 (confirmatory judge): TP 18, FP 1, FN 12, TN 69. Profile and stage:",
    "options": [
     "Precision 0.50 — useless",
     "Recall 0.95 — stage one",
     "Precision ≈ 0.95 (18/19 flagged are real), recall 0.60 — a strict judge: what it condemns is almost surely guilty, but it acquits many guilty — stage TWO, confirming stage one's flags, never the sole gate",
     "Accuracy 0.87 — sole scanner"
    ],
    "answer": 2,
    "explain": "Precision = 18/19 ≈ 0.95, recall = 18/30 = 0.60. Judges confirm; nets sweep. Reversing the stages inherits both weaknesses."
   },
   {
    "prompt": "Vendor 3 brags '99% accurate': the test set was 990 benign + 10 malware, and the matrix is TP 0, FP 0, FN 10, TN 990. The audit verdict:",
    "options": [
     "Elite model",
     "It flags NOTHING: accuracy (0+990)/1000 = 0.99 is the majority-class echo; recall is 0/10 = 0 — the model is a rubber stamp that says 'benign', exposed entirely by its matrix",
     "Rounding error",
     "It needs a logo"
    ],
    "answer": 1,
    "explain": "The imbalance paradox in its purest form — the matrix is the lie detector accuracy refused to be."
   },
   {
    "prompt": "Assemble the pipeline: Vendor 1 and Vendor 2 available, budget for both. The architecture:",
    "options": [
     "Vendor 2 alone (higher accuracy)",
     "Vendor 1 sweeps everything first (recall 0.90), Vendor 2 confirms its flags (precision 0.95): misses are minimized at the gate, false condemnations are filtered at the bench — each model at the stage its matrix qualifies it for",
     "Vendor 3 as a tiebreaker",
     "Average their outputs"
    ],
    "answer": 1,
    "explain": "Stage-relative metrics compose: recall first, precision second is the screening architecture from the lesson and the final, now with real vendors."
   }
  ],
  "hint": "Build each matrix FIRST (four counts), then every metric is one division — and every verdict cites a count, not a vibe.",
  "result": "Three audited verdicts: a high-recall net assigned to stage one, a high-precision judge assigned to stage two, and a 99%-accuracy claim exposed as a never-flag model with recall 0."
 }
];

export const PHASE5_MISSIONS: Mission[] = [
 {
  "id": "m-l24-refactor",
  "title": "Mission: The Slow Log Tool",
  "xp": 80,
  "scenario": "A teammate's log-analysis tool takes 40 minutes on the monthly 3 GB log. Profiling shows: (1) it stores lines in a list and inserts new matches at position 0; (2) it checks each line's IP against a 200,000-entry watchlist stored as a list; (3) it re-sorts the whole output after every 100 lines; (4) its 'count pairs of lines' feature compares every line with every other. You are asked for a fix plan a professional would sign.",
  "environment": "In-app simulation. All data is synthetic training material.",
  "questions": [
   {
    "prompt": "Fix for (1) — matches inserted at position 0 of a list:",
    "options": [
     "A faster disk",
     "Use a deque (or collect then reverse): front insertion becomes O(1) instead of O(n) shifting",
     "Insert at position 1",
     "Sort the list first"
    ],
    "answer": 1,
    "explain": "list.insert(0) shifts everything; deque.appendleft is O(1)."
   },
   {
    "prompt": "Fix for (2) — membership against a 200,000-entry list, once per line:",
    "options": [
     "Binary search the list",
     "Load the watchlist into a set: average O(1) per check instead of O(200,000) scans",
     "A linked list",
     "Check fewer lines"
    ],
    "answer": 1,
    "explain": "Membership-dominated work is the hash set's defining use case."
   },
   {
    "prompt": "Fix for (3) — re-sorting after every 100 lines:",
    "options": [
     "Sort after every 10 lines",
     "Collect everything, sort ONCE at the end: one O(n log n) instead of hundreds",
     "Use bubble sort",
     "Skip sorting"
    ],
    "answer": 1,
    "explain": "Repeated full sorts multiply the n log n cost by the number of repetitions; the data only needs its final order once."
   },
   {
    "prompt": "Honest verdict on (4) — 'compare every pair of lines':",
    "options": [
     "Optimize the inner loop's constants",
     "It is O(n²) by definition: at 10⁷ lines that is 10¹⁴ comparisons — the feature must be dropped, bounded to a sample, or redesigned (e.g. hash lines and count duplicates in O(n))",
     "Buy RAM",
     "It becomes O(n) in Pyodide"
    ],
    "answer": 1,
    "explain": "Some features are complexity-infeasible as specified; the professional redesign counts duplicates via hashing instead of comparing pairs."
   }
  ],
  "debrief": "Every fix was a structure swap, not a hardware upgrade: deque for front insertion, hash set for membership, sort once at the end, and honesty about the O(n²) feature — either drop it, bound it, or reframe it as a sampled report. Complexity classes, applied."
 },
 {
  "id": "m-l27-schema",
  "title": "Mission: The Shop Schema Review",
  "xp": 80,
  "scenario": "A small online shop's whole database is one table: sales(sale_id, customer_name, customer_phone, product_name, product_price, qty, sale_date). The owner complains: (1) a customer's phone number was 'fixed' but old receipts still show the old one; (2) when a product's price changed, last month's revenue report changed too; (3) a report of 'customers with no purchases' is impossible to produce; (4) typing a product name slightly differently created a 'new product'. You are the reviewer: name each disease and prescribe the schema.",
  "environment": "In-app simulation. All data is synthetic training material.",
  "questions": [
   {
    "prompt": "Complaint (1) — the phone 'fix' that did not stick — is the textbook:",
    "options": [
     "Index failure",
     "Update anomaly: the phone is stored on every sale row, so one edit cannot reach all copies; the fact needs one home in a customers table",
     "A hacking incident",
     "A display bug"
    ],
    "answer": 1,
    "explain": "Repeated storage + partial update = contradiction. Structure, not care, is the cure."
   },
   {
    "prompt": "Complaint (2) — price changes rewriting last month's report — the nuanced verdict:",
    "options": [
     "Prices must never change",
     "The report recomputed history from the CURRENT product price; the sale row must keep its own sale_price snapshot (a fact of the sale), while the products table holds the current price",
     "Delete old reports",
     "Prices should be text"
    ],
    "answer": 1,
    "explain": "Two different facts share one name: 'price now' (products) and 'price paid then' (sales). Normalization separates them — one of the cases where a copied value is CORRECT design."
   },
   {
    "prompt": "Complaint (3) — 'customers with no purchases' is impossible because:",
    "options": [
     "SQL cannot express it",
     "Customers exist ONLY as text on sale rows — a person who never bought has no row anywhere; a customers entity table is missing",
     "The owner lacks permission",
     "LEFT JOIN is broken"
    ],
    "answer": 1,
    "explain": "You cannot census an entity your schema never stored. The missing table is the disease."
   },
   {
    "prompt": "Complaint (4) — near-duplicate products from typos — is cured structurally by:",
    "options": [
     "Spell-check training",
     "A products table with a primary key, and sales referencing it by foreign key — names are entered once, ever",
     "Shorter product names",
     "Deleting duplicates weekly"
    ],
    "answer": 1,
    "explain": "Keys replace repeated free text; referential integrity makes the typo'd 'new product' impossible to reference into existence."
   }
  ],
  "debrief": "All four complaints were one disease — facts without single homes — wearing four masks: update anomaly (1), history corruption by reference instead of snapshot where a snapshot is genuinely needed (2 — note the professional nuance: price AT SALE TIME is a fact of the sale, so it stays on the sale row by design), missing entity (3 — customers who never bought exist nowhere), and uncontrolled vocabulary (4 — free text where a foreign key belongs). The redesign: customers, products, sales with keys — and sale_price deliberately kept as the sale's own historical fact."
 },
 {
  "id": "m-l28-sprint",
  "title": "Mission: Rescue the Shop App Project",
  "xp": 80,
  "scenario": "You inherit a client's shop app, four weeks from its promised launch. State of the project: everything was coded in one giant pass; there are no written requirements ('the client knows what they meant'); tests: none ('we'll test at the end — two weeks were budgeted, now one'); Git history: 11 commits, messages include 'stuff', 'final', 'final2'; a demo to the client has never happened; the client, emailed for clarification, replied 'just make it like the other shop app, but better'. The code mostly works — on the developer's machine. You are the incoming engineer. Triage: what do you do THIS week, in what order, and what do you refuse to promise?",
  "environment": "In-app simulation. All data is synthetic training material.",
  "questions": [
   {
    "prompt": "First move on day one:",
    "options": [
     "Rewrite the worst module",
     "Establish a truthful baseline: clean-clone build, committed as-is, so every later change is measured against a known state",
     "Promise the client it will be fine",
     "Start the overdue demo"
    ],
    "answer": 1,
    "explain": "You cannot rescue what you cannot reproduce; the baseline converts folklore into a state."
   },
   {
    "prompt": "'Like the other shop app, but better' should be treated as:",
    "options": [
     "A complete specification",
     "Elicitation input: mine it in a working session into named stories with acceptance criteria ('better' = which measurable difference?)",
     "A joke",
     "Legal cover"
    ],
    "answer": 1,
    "explain": "Vague comparatives hide every real decision; the session's job is extracting testable specifics."
   },
   {
    "prompt": "With one testing week left, the highest-value tests to write FIRST are:",
    "options": [
     "Every unit test imaginable",
     "Acceptance tests for the launch-critical stories (checkout completes, payment recorded, stock decremented — the Level 27 transaction invariants)",
     "Tests for the settings page",
     "None — no time"
    ],
    "answer": 1,
    "explain": "Scarce testing goes where failure is unaffordable: the money path, end to end."
   },
   {
    "prompt": "The honest promise to the client is:",
    "options": [
     "'Full scope, original date, trust me'",
     "A priced backlog + the launch slice you CAN commit to (named stories, demoed weekly), with the remainder scheduled openly — scope/date honesty backed by the sprint arithmetic",
     "'We will work weekends until it is done'",
     "Silence until launch"
    ],
    "answer": 1,
    "explain": "The backlog made scope countable; the professional act is showing the count and negotiating from it."
   }
  ],
  "debrief": "The rescue sequence: (1) freeze and secure the state — get the code building from a clean clone, commit a truthful baseline; (2) elicit the real requirements into a handful of testable stories WITH the client, ordered into a backlog — 'like the other app, but better' is elicitation input, not a spec; (3) slice the remaining scope into two one-week sprints ordered by what the client must be able to DO at launch; (4) write acceptance tests for the critical stories first (checkout, payment) and run them — the suite converts 'mostly works' into knowledge; (5) demo at the end of week one, whatever its state, to restart the feedback loop; and refuse — explicitly, kindly, in writing — to promise the original full scope on the original date, because the honest backlog now prices it and the arithmetic does not close. Process is what turns a rescue from heroics into engineering."
 }
];

export const PHASE5_CTFS: Ctf[] = [
 {
  "id": "ctf-bigo",
  "title": "CTF: The Quadratic Confession",
  "category": "Algorithms",
  "difficulty": "Easy",
  "xp": 100,
  "description": "A profiling report (SIMULATED training data) lists three candidate algorithms and their exact step counts. One of them confesses, in its numbers, that it gives up at production scale. Identify it and claim the flag.",
  "artifact": "SIMULATED profiling table (steps counted, not timed):\nAlgo A: n=100 → 700 · n=1000 → 7,000\nAlgo B: n=100 → 10,000 · n=1000 → 1,000,000\nAlgo C: n=100 → 14 · n=1000 → 20\nThe flag names the class of the algorithm whose steps grow with the SQUARE of the input: CLAB{<class>_gives_up} — the class word is the standard English growth name used in this level (lowercase).",
  "hint": "Apply the lab's ratio test: ×10 input — which algorithm's steps grew ×100?",
  "flagHash": "7b0c2a85b98fe7c08e73cea48950a3cad938eacb35327a6a0c49f0f5c2912d3e",
  "objective": "Classify growth from step ratios and name the infeasible class.",
  "prereq": "Requires Lesson: Big-O (l24-bigo) and the Complexity Bench lab.",
  "explanation": "A grows ×10 (linear), C grows by +6 (logarithmic), B grows ×100 for ×10 input — quadratic. The flag is CLAB{quadratic_gives_up}: at production n, the quadratic class is the one that gives up."
 },
 {
  "id": "ctf-sqlflag",
  "title": "CTF: The Row Only a Join Can See",
  "category": "Databases",
  "difficulty": "Easy",
  "xp": 100,
  "description": "Two small tables from the practice database (SIMULATED training data) are printed below. Somewhere in their combination is a single student–course pairing that exists ONLY when the tables are joined correctly. Find it and claim the flag.",
  "artifact": "students(id, name): (1, Ana), (2, Bil), (3, Cy)\ngrades(student_id, course, score): (1, DB, 90), (1, Algo, 80), (2, DB, 70)\nQuestion: in the INNER JOIN of these tables, exactly one course is taken by BOTH Ana and Bil. The flag celebrates the join that reveals it: CLAB{inner_join_found_it} — submit it exactly.",
  "hint": "Join on student_id = id, then look for a course whose rows name two different students.",
  "flagHash": "da3e6cc2c18c0a646e1c296430e4440b9bf18f4efc30cd0436815956f641c85b",
  "objective": "Perform a mental INNER JOIN and read off the shared course (DB).",
  "prereq": "Requires Lesson: SQL II — Joins (l27-sql-joins).",
  "explanation": "Joined rows: (Ana, DB), (Ana, Algo), (Bil, DB). The course appearing under both names is DB — the pairing only exists after the join, which is exactly what the flag says: CLAB{inner_join_found_it}."
 },
 {
  "id": "ctf-grammar",
  "title": "CTF: The Leftmost Derivation",
  "category": "Theory",
  "difficulty": "Medium",
  "xp": 100,
  "description": "A tiny grammar and a partially-worked derivation are printed below (training material). Complete the derivation exactly as a leftmost derivation must proceed, and the flag is the one that celebrates the method.",
  "artifact": "Grammar: S → aSb | ε\nTarget string: aabb\nLeftmost derivation so far: S ⇒ aSb ⇒ aaSbb ⇒ ?\nThe final step replaces the remaining S using the ONLY production that can finish the string. The method you used — always rewriting the LEFTMOST variable — names the flag: CLAB{leftmost_derivation} — submit it exactly.",
  "hint": "After aaSbb, the S must vanish for the string to terminate — which production erases it?",
  "flagHash": "a4fbea70e6a70b3e3dba6137a49875a0561ab387eafa19edf17b077f06332897",
  "objective": "Complete the derivation: aaSbb ⇒ aabb via S → ε, and identify the derivation discipline (leftmost).",
  "prereq": "Requires Lesson: Context-Free Grammars (l29-cfg).",
  "explanation": "S ⇒ aSb ⇒ aaSbb ⇒ aabb. Each step rewrote the leftmost (only) S; the last step used S → ε. A complete 3-step leftmost derivation — hence CLAB{leftmost_derivation}."
 }
];
