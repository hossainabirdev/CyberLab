// Six-part why-panels — PHASE 5 (Levels 23–31 lessons, labs, CTF), EN + BN.
import type { SixWhy, WhyEntry } from "./why-code";

export const WHY_CODE5: Record<string, WhyEntry> = {
 "l23-sets": {
  "why": "A set is defined by membership alone: an element is in or out, never 'twice'. That one rule quietly powers half of computing — database rows are sets of tuples, hash tables are sets with fast membership tests, and access-control lists are sets of principals. Python's set type implements the mathematics directly, so every operation in this lesson is both a math fact and runnable code. The example (sets_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"both: ['Karim', 'Nabil']\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Discrete math is the language under every later subject in this section: Big-O is combinatorics and logs, databases are set theory with tables, compilers and Theory of Computation are logic and graphs. Examiners test it directly; engineers use it whenever they count, argue correctness, or model a system.",
  "wrong": "The common wrong run: printing a set directly gives an order that changes between runs — that is not a bug; sets are unordered, so the example sorts before printing. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l23-logic": {
  "why": "Logic turns arguments into arithmetic on truth values. The connectives ∧ (and), ∨ (or), ¬ (not) and → (implies) each have a complete definition in a truth table of at most four rows — there is nowhere for ambiguity to hide. The row students resist is false → anything = true: 'if the moon is cheese, I am rich' is vacuously true because the promise only binds when the condition holds. The example (logic_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"True True -> True | contrapositive: True\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Discrete math is the language under every later subject in this section: Big-O is combinatorics and logs, databases are set theory with tables, compilers and Theory of Computation are logic and graphs. Examiners test it directly; engineers use it whenever they count, argue correctness, or model a system.",
  "wrong": "The common wrong run: writing imp as 'p and q' — that makes the (True, True) row right by luck and every other row wrong; check your table against the one false case. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l23-proofs": {
  "why": "A proof is a chain where every link is a definition, an axiom, or a previously proven result. The three workhorse shapes: direct (assume p, reach q), contrapositive (assume ¬q, reach ¬p — valid because the two are equivalent, last lesson), and contradiction (assume p ∧ ¬q, reach something impossible). Choosing the shape is the skill: 'if n² is even then n is even' is painful directly and two lines by contrapositive — assume n odd, then n = 2k+1, so n² = 2(2k²+2k)+1 is odd. The example (proof_check.py) is the smallest complete case that proves it.",
  "output": "Start with \"claim holds on -50..50: True\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Discrete math is the language under every later subject in this section: Big-O is combinatorics and logs, databases are set theory with tables, compilers and Theory of Computation are logic and graphs. Examiners test it directly; engineers use it whenever they count, argue correctness, or model a system.",
  "wrong": "The common wrong interpretation: the loop printing nothing before 'claim holds' is success, not a missing print — the counterexample print only fires when the claim breaks. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l23-combinatorics": {
  "why": "Counting problems are won or lost on one question: does order matter? Arrange 3 of 10 runners on a podium and order matters — P(10,3) = 720. Choose a 3-person committee from 10 and order is irrelevant — C(10,3) = 120. The factor between them is exactly 3! = 6, the number of ways to order each committee: combinations are permutations with the ordering divided back out. The example (counting_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"P(10,3) = 720\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Discrete math is the language under every later subject in this section: Big-O is combinatorics and logs, databases are set theory with tables, compilers and Theory of Computation are logic and graphs. Examiners test it directly; engineers use it whenever they count, argue correctness, or model a system.",
  "wrong": "The common wrong answer: computing poker hands with perm() gives 311,875,200 — exactly 5! = 120 times too many, because a hand has no order. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l23-relations-functions": {
  "why": "A relation is just a set of pairs — 'student, course' enrollments, 'user, role' assignments. A function is the disciplined special case: each input owns exactly one output, which is why dict lookups and pure functions are predictable. The code below catches the classic failure: input 1 appears with outputs 'a' and 'c', so the pairs form a relation but not a function. The example (relations_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"function? False\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Discrete math is the language under every later subject in this section: Big-O is combinatorics and logs, databases are set theory with tables, compilers and Theory of Computation are logic and graphs. Examiners test it directly; engineers use it whenever they count, argue correctness, or model a system.",
  "wrong": "The common wrong expectation: f(f(1)) evaluates outside-in. Composition runs inside-out — f(1) = 2 first, then f(2) = 3. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l23-graphs-probability": {
  "why": "A graph is a set of vertices plus a set of edges — the same pair-of-sets idea as relations, drawn. Degrees count connections, and the handshaking lemma (Σdeg = 2|E|) is both an exam staple and a sanity check for any network model: count the code's degrees (2+2+3+1 = 8) and you must get twice its 4 edges. Social networks, road maps, dependency charts and attack paths are all this one structure. The example (graphs_prob.py) is the smallest complete case that proves it.",
  "output": "Start with \"A degree 2\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Discrete math is the language under every later subject in this section: Big-O is combinatorics and logs, databases are set theory with tables, compilers and Theory of Computation are logic and graphs. Examiners test it directly; engineers use it whenever they count, argue correctness, or model a system.",
  "wrong": "The common wrong run: forgetting // 2 in the edges line prints 8 'edges' — the lemma says that number is the degree sum, and it must be halved. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l24-bigo": {
  "why": "Complexity is counted, not measured with a stopwatch: seconds depend on the machine, operation counts do not. The code below counts exactly — a single loop is n steps, nested loops are n², and halving is about log₂n (10 → 3, 100 → 6, 1000 → 9). At n = 1000 the quadratic does a million steps while the halving algorithm does nine; that ratio, not any benchmark, is why one program feels instant and another never finishes. The example (bigo_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"10 10 100 3\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "DSA is the most-tested subject in both your degree and technical interviews: every claim in this level is an algorithm you run, count, and defend. Security work uses the same structures daily — hash tables in every tool, graphs in attack paths, queues in alert pipelines.",
  "wrong": "The common wrong expectation: count_log(1000) printing 10 — halving 1000 goes 500, 250, 125, 62, 31, 15, 7, 3, 1: nine steps, since the loop stops at 1. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l24-arrays-linked": {
  "why": "An array buys O(1) random access with arithmetic — address = base + index × size — and pays for it on insertion: everything after the gap shifts. A linked list buys O(1) insertion at a known position with pointers and pays on access: reaching the 500th element means following 500 links, O(n). Neither is 'better'; each is a trade your Big-O lens from last lesson prices exactly. The example (linked_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"list: [40, 30, 20, 10]\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "DSA is the most-tested subject in both your degree and technical interviews: every claim in this level is an algorithm you run, count, and defend. Security work uses the same structures daily — hash tables in every tool, graphs in attack paths, queues in alert pipelines.",
  "wrong": "The common wrong run: forgetting 'cur = cur.next' makes the while loop infinite — the traversal only ends because None is falsy and the chain actually advances. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l24-stacks-queues": {
  "why": "Stacks and queues are not new storage — they are disciplines on storage: a stack restricts you to one end, a queue to two specific ends. The restriction is the value. Bracket matching only works because a stack guarantees the most recent opener is checked first; the code proves it on '([]{})'. Your Level 4 call stack is this same structure wearing a runtime's clothes. The example (stack_queue_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"stack pops: ['c', 'b']\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "DSA is the most-tested subject in both your degree and technical interviews: every claim in this level is an algorithm you run, count, and defend. Security work uses the same structures daily — hash tables in every tool, graphs in attack paths, queues in alert pipelines.",
  "wrong": "The common wrong run: on input '([)]' the simple checker prints False by luck of ordering, but on ')' alone it crashes with IndexError — popping an empty stack is the bug the lesson warns about. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l24-trees-heaps": {
  "why": "A BST turns the ordering of keys into geometry: smaller goes left, larger goes right, so a search discards half the remaining tree at each step — binary search grown into a structure. The inorder traversal printing sorted output is not a coincidence; it is the invariant read aloud. Insert 8, 3, 10, 1, 6, 14 and the sorted line [1, 3, 6, 8, 10, 14] is your receipt that every insert obeyed the rule. The example (tree_heap_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"inorder: [1, 3, 6, 8, 10, 14]\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "DSA is the most-tested subject in both your degree and technical interviews: every claim in this level is an algorithm you run, count, and defend. Security work uses the same structures daily — hash tables in every tool, graphs in attack paths, queues in alert pipelines.",
  "wrong": "The common wrong expectation: heappop returning 5 first because it was first in the list — heapify reorders the list into heap order before any pop happens. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l24-hashing-graphs": {
  "why": "A hash table trades ordering for speed: the hash function converts a key directly into a bucket, so lookup skips searching entirely — average O(1) regardless of table size. Python's dict is this lesson running in production: scores['bil'] does no scan. The price is collisions (two keys, one bucket) and the loss of sorted order; the discipline is choosing hash tables when membership and lookup dominate, trees when order matters. The example (hash_graph_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"bil: 85 | keys: ['ana', 'bil', 'cy']\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "DSA is the most-tested subject in both your degree and technical interviews: every claim in this level is an algorithm you run, count, and defend. Security work uses the same structures daily — hash tables in every tool, graphs in attack paths, queues in alert pipelines.",
  "wrong": "The common wrong run: moving 'seen.add(m)' to after the pop makes D enter the queue twice (from B and from C) and prints D twice — order of marking is the algorithm. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l24-sorting-dp": {
  "why": "Sorting's honest price is O(n log n) for comparison sorts — merge sort and quicksort earn it by splitting; bubble sort's O(n²) is the pair-comparison trap from Level 23 counting. Searching a sorted array is binary search's O(log n) (the code finds 22 in 2 probes of 16). Sorting once to search many times is the classic trade: pay n log n once, then every lookup is nearly free. The example (sort_dp_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"find 22: (11, 2)\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "DSA is the most-tested subject in both your degree and technical interviews: every claim in this level is an algorithm you run, count, and defend. Security work uses the same structures daily — hash tables in every tool, graphs in attack paths, queues in alert pipelines.",
  "wrong": "The common wrong expectation: fib_fast(30) being slower the FIRST time — the cache fills during that call (31 distinct subproblems); every later call is a lookup. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l25-boolean": {
  "why": "A gate is a truth table made of transistors. AND, OR and NOT are functionally complete enough to start; NAND and NOR are each complete alone, which is why real chips are forests of NANDs. The table below is the whole vocabulary — four input rows, four gates, no hidden cases — and the last line verifies De Morgan's law by exhaustion, the same proof-by-rows you used in Level 23. The example (gates_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"a b | AND OR XOR NAND\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Digital logic is where software meets physics: every CPU instruction in the next level executes on circuits built from this level's gates and flip-flops. Examiners test truth tables and K-maps mechanically; engineers who understand this layer debug timing and hardware faults others cannot even describe.",
  "wrong": "The common wrong run: computing NAND as a & b with a minus sign forgotten — the (1,1) row printing 1 instead of 0 is the tell. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l25-truth-karnaugh": {
  "why": "Every truth table is already a circuit — OR together the minterms of the 1-rows — but usually a wasteful one. Below, f = a·b + c has five 1-rows; the canonical SOP would carry five product terms, yet the function was defined with two. The gap between those is minimization, and the K-map is its visual method: lay the rows out so neighbours differ in one variable, group the 1s, and each group becomes one product term with the changing variables deleted. The example (kmap_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"0 0 0 -> 0\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Digital logic is where software meets physics: every CPU instruction in the next level executes on circuits built from this level's gates and flip-flops. Examiners test truth tables and K-maps mechanically; engineers who understand this layer debug timing and hardware faults others cannot even describe.",
  "wrong": "The common wrong count: reporting 8 minterms — only rows where f = 1 are minterms of f; the three 0-rows belong to ¬f. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l25-combinational": {
  "why": "Binary addition is two gates wearing a uniform: for each bit column, sum is XOR (the column total mod 2) and carry is AND (whether the column overflows). Chain full adders — each column's carry-out feeding the next column's carry-in — and you have a ripple-carry adder, the code below proving 5 + 3 = 8 through four chained columns exactly as hardware does it. The example (adder_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"0 0 0 -> sum 0 carry 0\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Digital logic is where software meets physics: every CPU instruction in the next level executes on circuits built from this level's gates and flip-flops. Examiners test truth tables and K-maps mechanically; engineers who understand this layer debug timing and hardware faults others cannot even describe.",
  "wrong": "The common wrong run: add(15, 1) printing (16, 0) is NOT a bug to hide — with bits=4 the true answer 16 needs a fifth bit; the returned carry 1 is the overflow flag hardware raises. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l25-flipflops": {
  "why": "Everything before this lesson forgot instantly: change the input and the output followed. A latch breaks that rule with feedback — cross-coupled gates whose output sustains itself — and a flip-flop disciplines the latch with a clock: the value is captured at one instant (the edge) and held stable between instants. That capture-and-hold is what 'sequential' means, and it is why computers can have a 'current state' at all. The example (flipflop_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"start Q = 0\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Digital logic is where software meets physics: every CPU instruction in the next level executes on circuits built from this level's gates and flip-flops. Examiners test truth tables and K-maps mechanically; engineers who understand this layer debug timing and hardware faults others cannot even describe.",
  "wrong": "The common wrong expectation: Q changing when the D list is merely defined — nothing moves until edge() is called; in hardware, nothing moves until the clock rises. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l25-counters": {
  "why": "Chain toggle flip-flops so each one's output is the next one's clock and binary counting falls out for free: FF0 toggles every cycle (…010), FF1 toggles each time FF0 falls 1→0 (period 4), FF2 with period 8. Read top-down the three outputs spell 000, 001, 010 … 111, 000 — the code runs exactly this ripple and prints the count both ways. The example (counter_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"count: 0 000\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Digital logic is where software meets physics: every CPU instruction in the next level executes on circuits built from this level's gates and flip-flops. Examiners test truth tables and K-maps mechanically; engineers who understand this layer debug timing and hardware faults others cannot even describe.",
  "wrong": "The common wrong run: toggling FF1 every step instead of on FF0's fall prints 0, 3, 2, 1… — a 'counter' that is not counting; the fall-condition is the design. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l25-sequential-design": {
  "why": "Design now assembles everything: choose states, tabulate transitions, let flip-flops hold the state and combinational logic compute next-state and output. The traffic light below is a Moore machine — its output IS its state — with timed transitions: GREEN holds 3 ticks, YELLOW 1, RED 2, repeat. Eight ticks of simulation print the exact behaviour the table promises, which is the verification step professionals never skip. The example (fsm_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"t = 0 light: GREEN\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Digital logic is where software meets physics: every CPU instruction in the next level executes on circuits built from this level's gates and flip-flops. Examiners test truth tables and K-maps mechanically; engineers who understand this layer debug timing and hardware faults others cannot even describe.",
  "wrong": "The common wrong trace: expecting RED at t = 3 — the table gives YELLOW exactly 1 tick (t = 3) and RED starts at t = 4; durations are counts of printed lines per state. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l26-cpu-registers": {
  "why": "Strip a CPU to its skeleton and three things remain: registers (a handful of named, instant storage cells), memory (vast, slower, addressed), and the control cycle that shuttles between them. The trace below runs a four-instruction program on a paper CPU: load two numbers from memory, add them in registers, output the result. Every real processor — the 8086, your phone's ARM — is this skeleton with more registers, wider words, and staggering speed. The example (cpu_model.py) is the smallest complete case that proves it.",
  "output": "Start with \"step 1: MOV AX, [100] -> AX = 7\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Assembly is the last abstraction before the machine itself: registers, addressing and interrupts explain what compilers emit, what debuggers show, and what your Level 19 reverse-engineering lessons read. Computer Architecture examiners test exactly these traces.",
  "wrong": "The common wrong run: changing MOV's source to the register dict makes step 1 print AX = 0 — the load silently read the wrong space; brackets are semantics, not decoration. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l26-addressing": {
  "why": "An instruction must answer one question: where is my operand? Addressing modes are the standardized answers. Immediate (MOV AX, 5) carries the value itself. Direct (MOV AX, [100]) carries the address. Register indirect (MOV AX, [BX]) asks a register for the address. Indexed (MOV AX, [BX+SI+2]) computes base + index + displacement — which is precisely what a[i] compiles to: array base, element index scaled, offset added. The example (addressing_modes.txt) is the smallest complete case that proves it.",
  "output": "Start with \"Five modes, five different answers to 'where is the operand?'.\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Assembly is the last abstraction before the machine itself: registers, addressing and interrupts explain what compilers emit, what debuggers show, and what your Level 19 reverse-engineering lessons read. Computer Architecture examiners test exactly these traces.",
  "wrong": "The common wrong answer: reading [BX+SI] as mem[1000] + mem[20] — the registers' CONTENTS are added first (1020), and only then is memory read once. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l26-asm-first": {
  "why": "This is a complete, real program — NASM syntax, Linux x86-64 — that adds two numbers held in registers and exits with the sum as its exit code. Assemble it on your own machine with: nasm -f elf64 add.asm && ld -o add add.o && ./add ; echo $? — the shell prints 42, the program's only output, carried in a register exactly as the trace in the listing shows. The example (add.asm) is the smallest complete case that proves it.",
  "output": "Start with \"Trace: RAX 30 -> (RBX 12) -> RAX 42 -> copied to RDI -> RAX becomes 60 -> syscall.\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Assembly is the last abstraction before the machine itself: registers, addressing and interrupts explain what compilers emit, what debuggers show, and what your Level 19 reverse-engineering lessons read. Computer Architecture examiners test exactly these traces.",
  "wrong": "The common wrong run: ./add printing nothing is CORRECT behaviour — this program has no print; its result is the exit code, read with echo $?. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l26-asm-loops": {
  "why": "There is no while keyword at machine level — there is a comparison, a conditional jump backwards, and discipline. The listing sums 1..5 into RAX: counter in RCX counts down from 5, each pass adds RCX and decrements it, and JNZ (jump if the decrement did not produce zero) closes the loop. Trace it: RAX goes 5, 9, 12, 14, 15 — the partial sums in reverse order, because counting down adds the big numbers first. The example (sum_loop.asm) is the smallest complete case that proves it.",
  "output": "Start with \"Trace (RAX after each add): 5, 9, 12, 14, 15 — then RCX hits 0, JNZ falls through.\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Assembly is the last abstraction before the machine itself: registers, addressing and interrupts explain what compilers emit, what debuggers show, and what your Level 19 reverse-engineering lessons read. Computer Architecture examiners test exactly these traces.",
  "wrong": "The common wrong trace: listing partial sums as 1, 3, 6, 10, 15 — that is the count-UP trace; this listing counts down, so the same destination is reached through 5, 9, 12, 14, 15. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l26-interrupts": {
  "why": "Without interrupts, the CPU would poll: 'keyboard? …keyboard? …keyboard?' a billion times a second, burning the machine to notice a keystroke. The interrupt inverts the relationship — devices raise a line, the CPU finishes its current instruction, pushes its state (flags, return address) onto the stack, and jumps through the vector table to the ISR, which services the device and returns with IRET as if nothing happened. The interrupted program never knows. The example (interrupt_trace.txt) is the smallest complete case that proves it.",
  "output": "Start with \"The game loop loses a few hundred cycles and notices nothing.\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Assembly is the last abstraction before the machine itself: registers, addressing and interrupts explain what compilers emit, what debuggers show, and what your Level 19 reverse-engineering lessons read. Computer Architecture examiners test exactly these traces.",
  "wrong": "The common wrong order: placing the ISR before the state push — an ISR entered without saved state has nothing for IRET to restore, and the interrupted program is destroyed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l26-arm-modern": {
  "why": "ARM's bet, which won the mobile world and is winning servers: make instructions simple and uniform, forbid arithmetic on memory directly, and give the programmer many registers (so the load/store tax is paid rarely). The emulator below runs an ARM-style program — LDR two values, ADD in registers, STR the result home. Compare it with the x86 traces: the ADD could not have named a memory address even if it wanted to. The example (arm_style_cpu.py) is the smallest complete case that proves it.",
  "output": "Start with \"('LDR', 0, 0) => regs [10, 0, 0, 0] mem [10, 20, 0, 40]\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Assembly is the last abstraction before the machine itself: registers, addressing and interrupts explain what compilers emit, what debuggers show, and what your Level 19 reverse-engineering lessons read. Computer Architecture examiners test exactly these traces.",
  "wrong": "The common wrong expectation: STR changing a register — STR writes MEMORY from a register; the final mem line ([10, 20, 30, 40]) is its only effect, and regs are untouched by it. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l27-er-relational": {
  "why": "Design starts before any SQL: name the entities (student, course), their attributes, and the relationships — an ER diagram is that sentence drawn. The mapping to tables is then mechanical: each entity becomes a table; a many-to-many relationship (students enroll in courses) becomes its OWN table whose rows are pairs, because a single cell may never hold a list — that rule (atomic values) returns as 1NF in the normalization lesson. The example (er_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"(1, 'Abir')\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every application you have secured in Levels 0–22 sits on a database; this level teaches the database itself: how data is modelled, queried, kept consistent under failures and concurrency, and made fast. DBMS is also among the most exam-heavy subjects in your degree — and its core is Level 23's set theory with tables.",
  "wrong": "The common wrong expectation: SELECT * printing rows in insertion order is a coincidence of small tables — relations are sets, and without ORDER BY no order is promised (next lesson makes order explicit). And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l27-sql-basics": {
  "why": "A SELECT query is a pipeline read in a fixed logical order: FROM chooses the table, WHERE filters its rows, SELECT picks the columns, ORDER BY sorts what survives. The code runs that pipeline against a real (in-memory) database: a marks table filtered to Math students scoring at least 60, best first. Every clause earns its place — drop the WHERE and Physics rows leak in; drop ORDER BY and the 'best first' promise evaporates. The example (sql_basics.py) is the smallest complete case that proves it.",
  "output": "Start with \"Math, 60+, best first:\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every application you have secured in Levels 0–22 sits on a database; this level teaches the database itself: how data is modelled, queried, kept consistent under failures and concurrency, and made fast. DBMS is also among the most exam-heavy subjects in your degree — and its core is Level 23's set theory with tables.",
  "wrong": "The common wrong expectation: Bil appearing in the output because 'Math is his subject' — the AND makes BOTH predicates mandatory per row; 57 < 60 excludes him. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l27-sql-joins": {
  "why": "A join is Level 23's relation machinery with a purpose: rebuild, for one query, the wide view that normalization split into tables. INNER JOIN keeps only matched pairs — Cy, who has no grades yet, vanishes from the grade report, which may or may not be what the report promised. LEFT JOIN keeps Cy with a NULL course: the difference is not syntax, it is a decision about who gets to disappear from the answer. The example (sql_joins.py) is the smallest complete case that proves it.",
  "output": "Start with \"INNER JOIN (only students WITH grades):\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every application you have secured in Levels 0–22 sits on a database; this level teaches the database itself: how data is modelled, queried, kept consistent under failures and concurrency, and made fast. DBMS is also among the most exam-heavy subjects in your degree — and its core is Level 23's set theory with tables.",
  "wrong": "The common wrong expectation: Cy appearing in the INNER JOIN output with a NULL — NULL-padding is LEFT JOIN's signature; INNER simply omits him. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l27-normalization": {
  "why": "Normalization is redundancy removal with a rulebook. The flat orders table below stores Rima's city twice — once per order — and the code demonstrates the consequence: update her city in one row only, and the database now claims she lives in two cities at once. That is not a hypothetical; it is the default future of every unnormalized table, and the fix is structural: a fact stored in exactly one place can never disagree with itself. The example (normalize_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"flat table says Rima lives in: ['Chattogram', 'Dhaka']\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every application you have secured in Levels 0–22 sits on a database; this level teaches the database itself: how data is modelled, queried, kept consistent under failures and concurrency, and made fast. DBMS is also among the most exam-heavy subjects in your degree — and its core is Level 23's set theory with tables.",
  "wrong": "The common wrong expectation: the flat table printing one city — it prints TWO, because the update found only the first matching row; partial updates are the anomaly's mechanism. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l27-transactions": {
  "why": "A bank transfer is two updates that must never be seen apart: debit A, credit B. The code performs that transfer and then deliberately crashes it mid-way with a failing statement — watch the rollback restore both balances, because atomicity means the failed half leaves no trace. The total across accounts (800) is conserved before, during observation, and after: an invariant the transaction exists to protect. The example (txn_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"transfer rolled back\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every application you have secured in Levels 0–22 sits on a database; this level teaches the database itself: how data is modelled, queried, kept consistent under failures and concurrency, and made fast. DBMS is also among the most exam-heavy subjects in your degree — and its core is Level 23's set theory with tables.",
  "wrong": "The common wrong expectation: A's balance printing 300 because 'the UPDATE ran' — execution is not commitment; the rollback erased it, which is precisely the property being demonstrated. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l27-indexing-concurrency": {
  "why": "The query plan is the engine showing its work. Below, finding one tag among 2,000 rows first reports SCAN — every row examined — and after CREATE INDEX reports SEARCH USING INDEX: the B-tree (Level 24's BST, widened for disk pages) walks straight to the matches. Nothing about the query changed; the structure beside the table changed, and with it the complexity class of every lookup on that column. The example (index_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"before index: SCAN big\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every application you have secured in Levels 0–22 sits on a database; this level teaches the database itself: how data is modelled, queried, kept consistent under failures and concurrency, and made fast. DBMS is also among the most exam-heavy subjects in your degree — and its core is Level 23's set theory with tables.",
  "wrong": "The common wrong expectation: the plan changing the RESULT — it must not. Indexing changes cost, never meaning; if results differ after CREATE INDEX, something else is broken. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l28-sdlc": {
  "why": "The phases are not bureaucracy — they are the order in which mistakes get expensive. A misunderstood requirement costs a sentence to fix in the requirements phase, a redesign in design, a rewrite in implementation, and an incident in production: the classic cost-of-change curve is the entire argument for having phases at all. Waterfall bets that requirements can be known up front (true for a payroll spec fixed by law, a compiler for a published grammar — Level 30's case); iterative models bet they cannot, and pay for feedback with repeated cycles. The example (sdlc_cost.py) is the smallest complete case that proves it.",
  "output": "Start with \"waterfall total fix cost: 326\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Everything you have built in CyberLab so far was solo and small. This level is how software survives teams, time and change: a lifecycle, written requirements, designs people can review, tests that catch regressions, Git that records history honestly, and an agile rhythm that ships in slices. Software Engineering is the honours subject that turns programmers into engineers.",
  "wrong": "The common wrong expectation: both totals being close — they differ ~3.5× because five defects at testing prices (60) dominate everything else. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l28-requirements-uml": {
  "why": "A requirement is a testable promise. 'The system should be fast and user-friendly' promises nothing checkable; 'search returns results within 2 seconds for 95% of queries' and 'a member can renew a loan in at most 3 taps' can be tested, priced and argued about — which is the point. The artifact below rewrites vague wishes into user stories with acceptance criteria, the working currency of the agile lesson later. The example (requirements.md) is the smallest complete case that proves it.",
  "output": "Start with \"2 testable stories + 1 use case, from 1 vague wish\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Everything you have built in CyberLab so far was solo and small. This level is how software survives teams, time and change: a lifecycle, written requirements, designs people can review, tests that catch regressions, Git that records history honestly, and an agile rhythm that ships in slices. Software Engineering is the honours subject that turns programmers into engineers.",
  "wrong": "The common wrong expectation: the vague sentence surviving into the stories — it must not; every word of it was either measured or removed, which is the exercise. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l28-design-patterns": {
  "why": "Patterns exist because design problems repeat: 'many parts of the system must react when this value changes' has been solved so often that the solution earned a name — Observer. The code implements it bare: a DiskMonitor (subject) with two subscribers, a logger and an alerter; when the reading updates, both react, and the monitor never names them — it only knows the subscribe/notify protocol. Adding a third reaction later means writing one class and one subscribe call, not surgery on the monitor. The example (observer_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"log: disk at 90%\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Everything you have built in CyberLab so far was solo and small. This level is how software survives teams, time and change: a lifecycle, written requirements, designs people can review, tests that catch regressions, Git that records history honestly, and an agile rhythm that ships in slices. Software Engineering is the honours subject that turns programmers into engineers.",
  "wrong": "The common wrong expectation: 'ALERT' printing first because it feels more important — notification follows subscription order, not importance. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l28-testing": {
  "why": "A test is an executable requirement: the clamp function must pin values into [0, 100], and the harness below states that as five checks — middle, both boundaries, and beyond both boundaries — then counts failures instead of eyeballing output. Read the boundary choices: 0 and 100 test INCLUSION (are the ends inside?), −5 and 150 test the clamping itself. Most real bugs live exactly there, at the seams of ranges, which is why test design starts from boundaries, not from the happy middle. The example (test_clamp.py) is the smallest complete case that proves it.",
  "output": "Start with \"5/5 passed\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Everything you have built in CyberLab so far was solo and small. This level is how software survives teams, time and change: a lifecycle, written requirements, designs people can review, tests that catch regressions, Git that records history honestly, and an agile rhythm that ships in slices. Software Engineering is the honours subject that turns programmers into engineers.",
  "wrong": "The common wrong expectation: a FAIL line — the harness is silent on success by design; '5/5 passed' with no complaints IS the green state. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l28-git-teamwork": {
  "why": "Git's model rewards the same graph thinking as Level 23: commits are nodes, parents are edges, a branch is just a movable label on a node. The command sequence below is the daily loop of every professional team — branch for a feature, commit in small honest steps, push, open a pull request, review, merge. Each commit message is written for a future reader (usually you, at 2 a.m., mid-incident) answering 'what changed and why' — which is why 'fixed stuff' is a professional failing and 'Clamp renewal taps at the 3-tap acceptance limit' is a professional act. The example (git_daily_loop.sh) is the smallest complete case that proves it.",
  "output": "Start with \"Branch per feature. Small commits with honest messages.\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Everything you have built in CyberLab so far was solo and small. This level is how software survives teams, time and change: a lifecycle, written requirements, designs people can review, tests that catch regressions, Git that records history honestly, and an agile rhythm that ships in slices. Software Engineering is the honours subject that turns programmers into engineers.",
  "wrong": "The common wrong expectation: pushing straight to main being in the loop — it is exactly what the loop exists to prevent; review happens on the branch, before merge. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l28-agile-docs": {
  "why": "Agile is the iterative lifecycle of lesson 1 with a management rhythm attached: a prioritized backlog of small stories (lesson 2's format), pulled into short sprints, each ending with a WORKING increment and a review with real users. The plan below is the library app cut into three sprints — notice the slicing rule: every sprint ends with something demonstrable (borrow a book end-to-end) rather than a finished layer nobody can use (all the database, then all the screens). Vertical slices, not horizontal layers. The example (sprint_plan.md) is the smallest complete case that proves it.",
  "output": "Start with \"3 sprints, each ending in software a user can touch\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Everything you have built in CyberLab so far was solo and small. This level is how software survives teams, time and change: a lifecycle, written requirements, designs people can review, tests that catch regressions, Git that records history honestly, and an agile rhythm that ships in slices. Software Engineering is the honours subject that turns programmers into engineers.",
  "wrong": "The common wrong expectation: 'all the database work in sprint 1' being the efficient plan — it produces nothing a user can review, which is precisely the waterfall failure agile exists to avoid. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l29-automata": {
  "why": "A DFA is the smallest honest model of computation: finite control, one pass, no notebook. The machine below accepts exactly the strings over {a, b} that END in 'ab' — and its three states are a memory of the longest suffix seen so far that could still grow into 'ab': nothing, 'a', or done. That is the design method in miniature: states are equivalence classes of history — what the machine needs to remember about the past to decide the future, and nothing more. The example (dfa_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"ab -> ACCEPT\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level studies the machines beneath every machine: what computation IS, which problems have algorithmic solutions at all, and which solvable problems are cheap or ruinously expensive. It is the most proof-heavy honours subject — and Level 23's logic and proof techniques are its entry ticket.",
  "wrong": "The common wrong expectation: 'aba' being accepted because it CONTAINS 'ab' — the machine checks the ENDING; the final b never arrives, so it stops in q1 and rejects. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l29-regular": {
  "why": "Regex is the algebra of the DFA's languages: the code builds (a|b)*abb — all strings over {a,b} ending in abb — and checks members the way the theory says a machine would. The equivalence theorems (regex ⇄ NFA ⇄ DFA) are why the pattern you type in a shell and the automaton in a textbook are the same object in two notations — a fact Level 30's lexer will cash in directly. The example (regex_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"abb -> in L\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level studies the machines beneath every machine: what computation IS, which problems have algorithmic solutions at all, and which solvable problems are cheap or ruinously expensive. It is the most proof-heavy honours subject — and Level 23's logic and proof techniques are its entry ticket.",
  "wrong": "The common wrong expectation: 'abab' being in L because it contains 'abb' as a substring read — it does not contain 'abb' at all, and membership here is about the ending under fullmatch. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l29-cfg": {
  "why": "One production, S → aSb | ε, generates the language no DFA could accept: each rewrite adds one a on the left and one b on the right, so counts stay equal by construction. The recognizer below mirrors it with a stack discipline in recursive form — consume a's while descending, then match b's while unwinding: the call stack IS the PDA's stack, which is why programming languages (nested brackets, nested blocks) live exactly at this class. The example (cfg_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"ab -> True\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level studies the machines beneath every machine: what computation IS, which problems have algorithmic solutions at all, and which solvable problems are cheap or ruinously expensive. It is the most proof-heavy honours subject — and Level 23's logic and proof techniques are its entry ticket.",
  "wrong": "The common wrong expectation: 'aab' failing 'because there are more a's' as a count report — the recognizer does not count; the unwind runs out of b's mid-stack, a structural failure the function reports as None → False. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l29-turing": {
  "why": "Add a writable, unbounded tape to the automaton and you have jumped two classes at once: past context-free, to everything any computer has ever computed. The simulator below is a complete TM — transition table, tape as a list, head index — performing unary increment: read 1s to the blank, write one more 1, halt. Five steps, and the tape grew: that write-and-return ability, absurdly simple, is the entire difference between recognising patterns and COMPUTING. The example (tm_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"tape: 1111 | steps: 4\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level studies the machines beneath every machine: what computation IS, which problems have algorithmic solutions at all, and which solvable problems are cheap or ruinously expensive. It is the most proof-heavy honours subject — and Level 23's logic and proof techniques are its entry ticket.",
  "wrong": "The common wrong expectation: 3 steps for three 1s — the machine must also TAKE the write step at the blank; halting is a transition too, and it is counted. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l29-decidability": {
  "why": "The halting proof is five lines of logic with a trap inside: suppose a decider H(P, x) existed that always answers 'halts' or 'loops'. Build D(P): run H(P, P); if H says 'halts', loop forever; if H says 'loops', halt. Now feed D its own code. If D(D) halts, then H said 'halts', so D loops — contradiction. If D(D) loops, H said 'loops', so D halts — contradiction. Therefore H cannot exist: not 'nobody has found it', but a proof that the search itself is hopeless, for every language and every future tool. The example (halting_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"27 with budget 200: 111\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level studies the machines beneath every machine: what computation IS, which problems have algorithmic solutions at all, and which solvable problems are cheap or ruinously expensive. It is the most proof-heavy honours subject — and Level 23's logic and proof techniques are its entry ticket.",
  "wrong": "The common wrong expectation: budget 50 proving 27 'loops forever' — it returns None (unknown); 27 in fact halts in 111 steps, which the bigger budget reveals. Budget exhaustion is ignorance, not evidence. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l29-complexity": {
  "why": "Complexity refines decidability with a clock: among the solvable, which are cheap? The code exhibits NP's defining asymmetry on subset-sum: VERIFYING a proposed subset costs one addition pass, while SOLVING by brute force costs all 2ⁿ subsets — at n = 5 that is 32 checks, trivial; at n = 300 it is more subsets than atoms you could ever count. The certificate (7, 23) is checked in microseconds by someone who could never have found it by force at scale. The example (np_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"verify (7, 23): True\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level studies the machines beneath every machine: what computation IS, which problems have algorithmic solutions at all, and which solvable problems are cheap or ruinously expensive. It is the most proof-heavy honours subject — and Level 23's logic and proof techniques are its entry ticket.",
  "wrong": "The common wrong expectation: brute force checking 31 subsets — it checks 32, because the EMPTY subset is one of the 2⁵; off-by-one in counting the power set is the classic slip. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l30-lexer": {
  "why": "Compilation begins by refusing to think in characters. The lexer below is the whole phase in twenty lines: an ordered list of regex patterns — and the order is a design decision, because 'while' must be tried as a KEYWORD before IDENT swallows it as a name. Numbers, identifiers, operators emerge as typed tokens; the parser in the next lesson will never see a raw character again. The example (lexer_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"[('ID', 'total'), ('OP', '='), ('ID', 'price'), ('OP', '*'), ('NUM', '2'), ('OP', '+'), ('NUM', '10')]\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level builds a small working compiler across six lessons — lexer, parser, semantic checker, intermediate code, a stack-machine back end, and an optimizer — each stage a real, runnable piece. It is where Level 29's grammars stop being theory and start being the tool you have used for every program in this course.",
  "wrong": "The common wrong expectation: '=' appearing twice for '==' — the OP pattern lists '==' first, so maximal munch takes the two-character operator as ONE token. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l30-parser": {
  "why": "The naive expression grammar E → E + E | E * E | NUM is ambiguous (Level 29's warning): '2 + 3 * 4' has two trees, hence two values (20 vs 14). The fix is stratification — E handles +, T handles *, F handles atoms — so * is forced deeper in every tree and evaluates first. The parser below implements exactly that layered grammar, one function per variable, and prints the tree: ('+', 2, ('*', 3, 4)) — the structure IS the precedence, no separate rulebook needed. The example (parser_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"('+', 2, ('*', 3, 4))\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level builds a small working compiler across six lessons — lexer, parser, semantic checker, intermediate code, a stack-machine back end, and an optimizer — each stage a real, runnable piece. It is where Level 29's grammars stop being theory and start being the tool you have used for every program in this course.",
  "wrong": "The common wrong expectation: ('*', ('+', 2, 3), 4) — that tree is what parentheses would produce; without them, + must be the root because parse_E is the entry and consumes its operator LAST. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l30-semantic": {
  "why": "'x + 2' parses beautifully — and is meaningless until x is declared. The evaluator below is also the semantic checker: hitting an identifier looks it up in the environment (the runtime symbol table), and a miss raises the classic error, reported with the variable's name, exactly where a real compiler's 'undefined variable' comes from. Structure first (parser), meaning second (this phase), value last — the separation is why error messages can be so precise about WHICH kind of wrong a program is. The example (eval_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"value: 160\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level builds a small working compiler across six lessons — lexer, parser, semantic checker, intermediate code, a stack-machine back end, and an optimizer — each stage a real, runnable piece. It is where Level 29's grammars stop being theory and start being the tool you have used for every program in this course.",
  "wrong": "The common wrong expectation: the first line printing an error because 'price * qty' mixes names and numbers — names resolve through ENV by design; that resolution IS semantic analysis working. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l30-intermediate": {
  "why": "Why not generate machine code straight from the tree? Because N languages × M machines would need N×M compilers; with an IR it is N front ends + M back ends. The TAC generator below walks the same tree the evaluator walked, but instead of computing values it EMITS instructions — each binary operation gets a fresh temporary, in evaluation order, until the whole expression is a flat, machine-shaped list. Compare the two outputs across these lessons: the evaluator printed 160; the TAC prints the RECIPE for 160. The example (tac_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"t1 = price * qty\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level builds a small working compiler across six lessons — lexer, parser, semantic checker, intermediate code, a stack-machine back end, and an optimizer — each stage a real, runnable piece. It is where Level 29's grammars stop being theory and start being the tool you have used for every program in this course.",
  "wrong": "The common wrong expectation: 't1 = price * qty + 10' on one line — TAC forbids it; the + gets its own line and its own temporary, which is the entire discipline. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l30-codegen": {
  "why": "The back end below is small because the target is honest: TAC's one-operation lines map one-to-one onto stack instructions. The same post-order walk now emits PUSH price, PUSH qty, MUL, PUSH 10, ADD — and a tiny virtual machine executes the list and prints 160, the value the evaluator computed in lesson 3, this time reached by generated code running on a machine model. The example (codegen_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"('PUSH', 50)\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level builds a small working compiler across six lessons — lexer, parser, semantic checker, intermediate code, a stack-machine back end, and an optimizer — each stage a real, runnable piece. It is where Level 29's grammars stop being theory and start being the tool you have used for every program in this course.",
  "wrong": "The common wrong expectation: the instruction list printing PUSH price — this back end resolves names through ENV at emission time, so values, not names, are pushed; confusing the two designs (bake-in vs LOAD) is the slip. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l30-optimization": {
  "why": "Optimization is the one phase allowed to change the code — never the meaning. The folder below walks the tree bottom-up: constant children collapse by arithmetic (2 + 3 → 5, 10 − 4 → 6, then 5 * 6 → 30 at the root), and identity laws prune what arithmetic cannot (x * 1 → x, y + 0 → y). Every rewrite must be justified by a law; an 'optimization' that changes a value for any input is not an optimization, it is a miscompilation — the most dangerous bug class a compiler can have, because it corrupts correct programs silently. The example (optimize_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"30\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "This level builds a small working compiler across six lessons — lexer, parser, semantic checker, intermediate code, a stack-machine back end, and an optimizer — each stage a real, runnable piece. It is where Level 29's grammars stop being theory and start being the tool you have used for every program in this course.",
  "wrong": "The common wrong expectation: the second line printing ('*', 'x', 1) unchanged because 'x is not a number' — folding is not the only transformation; the identity law x * 1 → x needs no value for x. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l31-search": {
  "why": "AI's first move is to turn a problem into a graph and walk it. The BFS below finds A → B → D → G — provably the fewest hops, because BFS expands states ring by ring: every 1-hop state is visited before any 2-hop state, so the first time the goal is reached, no shorter path can exist. The parent map is what converts 'visited' into an actual path: each state remembers who discovered it, and the path is read backwards from the goal. The example (search_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"shortest path A -> G: ['A', 'B', 'D', 'G']\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every later AI tool you will audit, attack or defend in your career starts from the ideas in this level: how a machine searches a space, represents knowledge, learns patterns from data instead of being programmed with them, and is honestly evaluated. This is the foundation level — enough to read ML claims critically and to build small, real models by hand.",
  "wrong": "The common wrong expectation: the path coming out as ['A', 'C', 'E', 'G'] — equally short, but B is enqueued before C (adjacency order), so D's parent is B and the B-route is the one reconstructed. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l31-knowledge": {
  "why": "Before learning from data, AI represented knowledge by hand: facts in, rules over them, conclusions out. The engine below is the whole idea in fifteen lines — it derives flu_suspected from {fever, cough}, then take_rest from {fever}, and stops when a full pass adds nothing. Notice what it did NOT derive: see_doctor needs body_ache, which no fact or rule supplies — the engine is sound (it derives only what follows) and honestly incomplete relative to the world (it cannot invent missing premises). The example (rules_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"derived: flu_suspected\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every later AI tool you will audit, attack or defend in your career starts from the ideas in this level: how a machine searches a space, represents knowledge, learns patterns from data instead of being programmed with them, and is honestly evaluated. This is the foundation level — enough to read ML claims critically and to build small, real models by hand.",
  "wrong": "The common wrong expectation: see_doctor being derived because 'two of its conditions are close' — rule conditions are sets, and subset is all-or-nothing; body_ache's absence is decisive. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l31-supervised": {
  "why": "Supervised learning replaces hand-written rules with examples: show the machine input–output pairs and let it fit the function. The regression below fits study-hours → marks by least squares and gets slope 1.97, intercept 0.09 — the data was generated near y = 2x, and the fit recovers it, wobble included. Prediction is then arithmetic: x = 6 gives 11.91. Nothing here 'understands' study or marks; the claim is narrower and checkable: this line minimizes squared error ON THE GIVEN POINTS. The example (regression_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"slope: 1.97 intercept: 0.09\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every later AI tool you will audit, attack or defend in your career starts from the ideas in this level: how a machine searches a space, represents knowledge, learns patterns from data instead of being programmed with them, and is honestly evaluated. This is the foundation level — enough to read ML claims critically and to build small, real models by hand.",
  "wrong": "The common wrong expectation: slope coming out exactly 2.0 — real data wobbles (2.1, 5.9, 8.1), so the fit is 1.97; exact recovery happens only for exact data. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l31-unsupervised": {
  "why": "Remove the labels and learning changes character: there is no answer key, only structure to propose. K-means on the six points below finds the two visible islands in two rounds — assign-to-nearest, recompute-mean — and then stops, because round 3 would change nothing: the assignment step and the mean step have reached a truce. The truce is a LOCAL optimum: different starting centroids can strand the algorithm in a worse grouping, which is why real k-means is run from several starts and the best (lowest total within-cluster distance) is kept. The example (kmeans_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"step 1 centroids: [(1.33, 1.33), (8.33, 8.33)]\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every later AI tool you will audit, attack or defend in your career starts from the ideas in this level: how a machine searches a space, represents knowledge, learns patterns from data instead of being programmed with them, and is honestly evaluated. This is the foundation level — enough to read ML claims critically and to build small, real models by hand.",
  "wrong": "The common wrong expectation: a step 3 printing different centroids — after step 2 nothing moved; the loop breaks on stability, which is the definition of convergence here. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l31-neural": {
  "why": "The perceptron below learns AND from four examples — watch the mechanism, not just the result: it starts knowing nothing (weights 0), predicts, and ONLY on mistakes nudges its weights by lr · error · input. Six epochs of small corrections carve the boundary w = [0.2, 0.1], b = −0.2, after which all four patterns classify correctly. Learning, here, is visibly nothing but error-driven bookkeeping — the mystique does not survive writing it in twenty lines. The example (perceptron_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"learned AND in epoch 6\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every later AI tool you will audit, attack or defend in your career starts from the ideas in this level: how a machine searches a space, represents knowledge, learns patterns from data instead of being programmed with them, and is honestly evaluated. This is the foundation level — enough to read ML claims critically and to build small, real models by hand.",
  "wrong": "The common wrong expectation: weights converging to something 'canonical' like [1, 1] — the algorithm stops at the FIRST separator its nudge path reaches ([0.2, 0.1], b = −0.2); infinitely many lines separate AND. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 },
 "l31-evaluation": {
  "why": "A model is a claim; this lesson is how claims get audited. The matrix below — TP 4, FP 2, FN 1, TN 3 — yields accuracy 0.70, precision 0.67, recall 0.80: three different numbers answering three different questions, and choosing which to optimize is a VALUES decision disguised as arithmetic. A malware scanner that misses real malware (low recall) fails dangerously; a spam filter that flags real mail (low precision) fails annoyingly — the same matrix, opposite priorities. The example (metrics_lab.py) is the smallest complete case that proves it.",
  "output": "Start with \"TP 4 FP 2 FN 1 TN 3\" — each following line is the rule applied in order. If your run differs, compare inputs first, then setup.",
  "job": "Every later AI tool you will audit, attack or defend in your career starts from the ideas in this level: how a machine searches a space, represents knowledge, learns patterns from data instead of being programmed with them, and is honestly evaluated. This is the foundation level — enough to read ML claims critically and to build small, real models by hand.",
  "wrong": "The common wrong expectation: accuracy printing 0.75 by counting only the positives — accuracy counts TN too: (4 + 3)/10 = 0.70; forgetting the true negatives is the classic first slip. And the standing rule: re-run the example EXACTLY as written before debugging anything — most 'bugs' are drift from the printed example."
 }
};

export const WHY_CODE5_BN: Record<string, WhyEntry> = {
 "l23-sets": {
  "why": "একটি set শুধু সদস্যতা দিয়েই সংজ্ঞায়িত: একটি element হয় ভেতরে, নয় বাইরে — কখনো 'দুবার' নয়। এই একটি নিয়ম নীরবে computing-এর অর্ধেক চালায় — database row হলো tuple-এর set, hash table হলো দ্রুত membership পরীক্ষাসহ set, আর access-control list হলো principal-এর set। Python-এর set type গণিতটাই সরাসরি বাস্তবায়ন করে, তাই এই পাঠের প্রতিটি operation একই সঙ্গে গণিতের সত্য ও চালানো যায় এমন code। উদাহরণটি (sets_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"both: ['Karim', 'Nabil']\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Discrete math এই অংশের প্রতিটি পরের বিষয়ের নিচের ভাষা: Big-O হলো combinatorics আর log, database হলো table দিয়ে set theory, compiler ও Theory of Computation হলো logic আর graph। পরীক্ষক সরাসরি এটাই পরীক্ষা করেন; engineer-রা এটি ব্যবহার করেন যখনই গণনা করেন, সঠিকতা যুক্তি দেন, বা কোনো system model করেন।",
  "wrong": "সাধারণ ভুল run: সরাসরি set print করলে ক্রম run-ভেদে বদলায় — এটি bug নয়; set ক্রমহীন, তাই উদাহরণটি print-এর আগে sort করে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l23-logic": {
  "why": "Logic যুক্তিকে truth value-এর গণিতে বদলে দেয়। ∧ (এবং), ∨ (বা), ¬ (নয়) আর → (বোঝায়) সংযোজকগুলোর প্রতিটির সম্পূর্ণ সংজ্ঞা সর্বোচ্চ চার সারির truth table-এ আছে — দ্ব্যার্থতার লুকানোর জায়গা নেই। ছাত্ররা যেই সারিটি মানতে চায় না: false → যেকোনো কিছু = true: 'চাঁদ যদি পনির হয়, আমি ধনী' শূন্যভাবে সত্য, কারণ প্রতিশ্রুতি শুধু শর্ত পূরণ হলেই বাঁধে। উদাহরণটি (logic_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"True True -> True | contrapositive: True\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Discrete math এই অংশের প্রতিটি পরের বিষয়ের নিচের ভাষা: Big-O হলো combinatorics আর log, database হলো table দিয়ে set theory, compiler ও Theory of Computation হলো logic আর graph। পরীক্ষক সরাসরি এটাই পরীক্ষা করেন; engineer-রা এটি ব্যবহার করেন যখনই গণনা করেন, সঠিকতা যুক্তি দেন, বা কোনো system model করেন।",
  "wrong": "সাধারণ ভুল run: imp-কে 'p and q' লেখা — তাতে (True, True) সারি ভাগ্যক্রমে ঠিক হয় আর বাকি সব সারি ভুল হয়; তোমার table একমাত্র মিথ্যা ক্ষেত্রের সঙ্গে মেলাও। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l23-proofs": {
  "why": "প্রমাণ হলো একটি শৃঙ্খল যেখানে প্রতিটি কড়া একটি সংজ্ঞা, স্বতঃসিদ্ধ, বা আগে প্রমাণিত ফলাফল। তিনটি প্রধান আকার: direct (p ধরে q-তে যাও), contrapositive (¬q ধরে ¬p-তে যাও — বৈধ কারণ দুটি সমতুল্য, আগের পাঠ), আর contradiction (p ∧ ¬q ধরে অসম্ভব কিছু বের করো)। আকার বাছাই করাই দক্ষতা: 'n² জোড় হলে n জোড়' সরাসরি কষ্টকর, contrapositive-এ দুই লাইন — n বিজোড় ধরো, তাহলে n = 2k+1, সুতরাং n² = 2(2k²+2k)+1 বিজোড়। উদাহরণটি (proof_check.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"claim holds on -50..50: True\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Discrete math এই অংশের প্রতিটি পরের বিষয়ের নিচের ভাষা: Big-O হলো combinatorics আর log, database হলো table দিয়ে set theory, compiler ও Theory of Computation হলো logic আর graph। পরীক্ষক সরাসরি এটাই পরীক্ষা করেন; engineer-রা এটি ব্যবহার করেন যখনই গণনা করেন, সঠিকতা যুক্তি দেন, বা কোনো system model করেন।",
  "wrong": "সাধারণ ভুল ব্যাখ্যা: 'claim holds'-এর আগে loop কিছু print না করা সাফল্য, হারানো print নয় — counterexample print শুধু দাবি ভাঙলেই চলে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l23-combinatorics": {
  "why": "গণনা সমস্যা এক প্রশ্নেই জেতা বা হারা যায়: ক্রম কি গুরুত্বপূর্ণ? 10 দৌড়বিদ থেকে 3 জনকে podium-এ সাজালে ক্রম গুরুত্বপূর্ণ — P(10,3) = 720। 10 জন থেকে 3 জনের committee বাছলে ক্রম অর্থহীন — C(10,3) = 120। দুটির মধ্যে উৎপাদক ঠিক 3! = 6, প্রতিটি committee সাজানোর উপায়ের সংখ্যা: combination হলো permutation যেখানে ক্রমকরণ ভাগ করে বাদ দেওয়া হয়েছে। উদাহরণটি (counting_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"P(10,3) = 720\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Discrete math এই অংশের প্রতিটি পরের বিষয়ের নিচের ভাষা: Big-O হলো combinatorics আর log, database হলো table দিয়ে set theory, compiler ও Theory of Computation হলো logic আর graph। পরীক্ষক সরাসরি এটাই পরীক্ষা করেন; engineer-রা এটি ব্যবহার করেন যখনই গণনা করেন, সঠিকতা যুক্তি দেন, বা কোনো system model করেন।",
  "wrong": "সাধারণ ভুল উত্তর: poker hand perm() দিয়ে হিসাব করলে 311,875,200 আসে — ঠিক 5! = 120 গুণ বেশি, কারণ হাতে কোনো ক্রম নেই। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l23-relations-functions": {
  "why": "Relation হলো শুধু pair-এর set — 'ছাত্র, course' ভর্তি, 'user, role' বরাদ্দ। Function হলো শৃঙ্খলাবদ্ধ বিশেষ ক্ষেত্র: প্রতিটি input-এর ঠিক একটি output, যার কারণে dict lookup ও pure function অনুমানযোগ্য। নিচের code চিরায়ত ব্যর্থতাটি ধরে: input 1 'a' ও 'c' output নিয়ে হাজির, তাই pair গুলো relation কিন্তু function নয়। উদাহরণটি (relations_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"function? False\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Discrete math এই অংশের প্রতিটি পরের বিষয়ের নিচের ভাষা: Big-O হলো combinatorics আর log, database হলো table দিয়ে set theory, compiler ও Theory of Computation হলো logic আর graph। পরীক্ষক সরাসরি এটাই পরীক্ষা করেন; engineer-রা এটি ব্যবহার করেন যখনই গণনা করেন, সঠিকতা যুক্তি দেন, বা কোনো system model করেন।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: f(f(1)) বাইরে থেকে ভেতরে হিসাব হয়। Composition ভেতর থেকে বাইরে চলে — আগে f(1) = 2, তারপর f(2) = 3। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l23-graphs-probability": {
  "why": "Graph হলো vertex-এর set আর edge-এর set — relation-এর সেই একই pair-of-sets ধারণা, আঁকা আকারে। Degree সংযোগ গণনা করে, আর handshaking lemma (Σdeg = 2|E|) একই সঙ্গে পরীক্ষার প্রধান বিষয় ও যেকোনো network model-এর সূস্থতা যাচাই: code-এর degree গুনো (2+2+3+1 = 8), পেতে হবে তার 4 edge-এর দ্বিগুণ। Social network, রাস্তার মানচিত্র, dependency chart ও attack path — সবই এই একটি কাঠামো। উদাহরণটি (graphs_prob.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"A degree 2\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Discrete math এই অংশের প্রতিটি পরের বিষয়ের নিচের ভাষা: Big-O হলো combinatorics আর log, database হলো table দিয়ে set theory, compiler ও Theory of Computation হলো logic আর graph। পরীক্ষক সরাসরি এটাই পরীক্ষা করেন; engineer-রা এটি ব্যবহার করেন যখনই গণনা করেন, সঠিকতা যুক্তি দেন, বা কোনো system model করেন।",
  "wrong": "সাধারণ ভুল run: edges লাইনে // 2 ভুলে গেলে 8টি 'edge' ছাপে — lemma বলে ওই সংখ্যাটি degree যোগফল, অর্ধেক করতেই হবে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l24-bigo": {
  "why": "Complexity ঘড়ি দিয়ে মাপা হয় না, গণনা করা হয়: সেকেন্ড machine-নির্ভর, operation গণনা নয়। নিচের code ঠিকঠাক গণনা করে — একটি loop n ধাপ, বাসা-বাঁধা loop n², আর অর্ধেক করা প্রায় log₂n (10 → 3, 100 → 6, 1000 → 9)। n = 1000-এ quadratic দশ লক্ষ ধাপ করে যেখানে অর্ধেক-করা algorithm করে নয়টি; এই অনুপাতই — কোনো benchmark নয় — বলে কেন একটি program তাৎক্ষণিক লাগে আর আরেকটি কখনো শেষ হয় না। উদাহরণটি (bigo_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"10 10 100 3\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "DSA তোমার degree ও technical interview দুটোতেই সবচেয়ে বেশি পরীক্ষিত বিষয়: এই level-এর প্রতিটি দাবি একটি algorithm যা তুমি চালাবে, গুনবে, আর রক্ষা করবে। Security কাজ প্রতিদিন একই কাঠামো ব্যবহার করে — প্রতিটি tool-এ hash table, attack path-এ graph, alert pipeline-এ queue।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: count_log(1000) 10 ছাপবে — 1000 অর্ধেক হয় 500, 250, 125, 62, 31, 15, 7, 3, 1: নয় ধাপ, কারণ loop 1-এ থামে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l24-arrays-linked": {
  "why": "Array গণিত দিয়ে O(1) random প্রবেশ কেনে — ঠিকানা = base + index × size — আর সন্নিবেশে তার মূল্য দেয়: ফাঁকের পরের সব সরে যায়। Linked list pointer দিয়ে জানা অবস্থানে O(1) সন্নিবেশ কেনে আর প্রবেশে মূল্য দেয়: 500তম element-এ পৌঁছানো মানে 500টি কড়া অনুসরণ, O(n)। কোনোটিই 'ভালো' নয়; প্রতিটি একটি বিনিময় যা আগের পাঠের Big-O দৃষ্টি ঠিকঠাক মূল্যায়ন করে। উদাহরণটি (linked_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"list: [40, 30, 20, 10]\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "DSA তোমার degree ও technical interview দুটোতেই সবচেয়ে বেশি পরীক্ষিত বিষয়: এই level-এর প্রতিটি দাবি একটি algorithm যা তুমি চালাবে, গুনবে, আর রক্ষা করবে। Security কাজ প্রতিদিন একই কাঠামো ব্যবহার করে — প্রতিটি tool-এ hash table, attack path-এ graph, alert pipeline-এ queue।",
  "wrong": "সাধারণ ভুল run: 'cur = cur.next' ভুলে গেলে while loop অসীম হয় — traversal শেষ হয় শুধু কারণ None falsy আর শৃঙ্খল আসলেই এগোয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l24-stacks-queues": {
  "why": "Stack ও queue নতুন সংরক্ষণ নয় — তারা সংরক্ষণের উপর শৃঙ্খলা: stack তোমাকে এক প্রান্তে সীমাবদ্ধ করে, queue দুটি নির্দিষ্ট প্রান্তে। এই সীমাবদ্ধতাই মূল্য। Bracket মেলানো চলে শুধু কারণ stack নিশ্চয়তা দেয় সবচেয়ে সাম্প্রতিক opener আগে যাচাই হবে; code '([]{})'-তে তা প্রমাণ করে। তোমার Level 4 call stack-ই এই একই কাঠামো runtime-এর পোশাকে। উদাহরণটি (stack_queue_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"stack pops: ['c', 'b']\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "DSA তোমার degree ও technical interview দুটোতেই সবচেয়ে বেশি পরীক্ষিত বিষয়: এই level-এর প্রতিটি দাবি একটি algorithm যা তুমি চালাবে, গুনবে, আর রক্ষা করবে। Security কাজ প্রতিদিন একই কাঠামো ব্যবহার করে — প্রতিটি tool-এ hash table, attack path-এ graph, alert pipeline-এ queue।",
  "wrong": "সাধারণ ভুল run: '([)]' input-এ সাধারণ যাচাইকারী ক্রমের ভাগ্যে False ছাপে, কিন্তু শুধু ')'-তে IndexError-এ ভাঙে — খালি stack pop করাই সেই bug যার সতর্কতা পাঠ দেয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l24-trees-heaps": {
  "why": "BST key-এর ক্রমকে জ্যামিতিতে বদলে দেয়: ছোট বামে, বড় ডানে, তাই অনুসন্ধান প্রতিটি ধাপে বাকি tree-র অর্ধেক বাদ দেয় — কাঠামোয় বেড়ে ওঠা binary search। Inorder traversal-এর sorted output ছাপা কাকতাল নয়; এটি উচ্চারিত অপরিবর্তনীয় নিয়ম। 8, 3, 10, 1, 6, 14 সন্নিবেশ করো, sorted লাইন [1, 3, 6, 8, 10, 14] তোমার রসিদ যে প্রতিটি সন্নিবেশ নিয়ম মেনেছে। উদাহরণটি (tree_heap_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"inorder: [1, 3, 6, 8, 10, 14]\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "DSA তোমার degree ও technical interview দুটোতেই সবচেয়ে বেশি পরীক্ষিত বিষয়: এই level-এর প্রতিটি দাবি একটি algorithm যা তুমি চালাবে, গুনবে, আর রক্ষা করবে। Security কাজ প্রতিদিন একই কাঠামো ব্যবহার করে — প্রতিটি tool-এ hash table, attack path-এ graph, alert pipeline-এ queue।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: heappop প্রথমে 5 ফেরত দেবে কারণ list-এ সেটি প্রথম ছিল — heapify যেকোনো pop-এর আগে list-কে heap ক্রমে সাজিয়ে দেয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l24-hashing-graphs": {
  "why": "Hash table ক্রমের বদলে গতি কেনে: hash function একটি key-কে সরাসরি bucket-এ বদলে দেয়, তাই lookup অনুসন্ধানই এড়িয়ে যায় — table আকার নির্বিশেষে গড়ে O(1)। Python-এর dict হলো production-এ চলা এই পাঠ: scores['bil'] কোনো scan করে না। মূল্য হলো collision (দুটি key, একটি bucket) ও sorted ক্রম হারানো; শৃঙ্খলা হলো সদস্যতা ও lookup প্রাধান্য পেলে hash table বাছা, ক্রম গুরুত্বপূর্ণ হলে tree। উদাহরণটি (hash_graph_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"bil: 85 | keys: ['ana', 'bil', 'cy']\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "DSA তোমার degree ও technical interview দুটোতেই সবচেয়ে বেশি পরীক্ষিত বিষয়: এই level-এর প্রতিটি দাবি একটি algorithm যা তুমি চালাবে, গুনবে, আর রক্ষা করবে। Security কাজ প্রতিদিন একই কাঠামো ব্যবহার করে — প্রতিটি tool-এ hash table, attack path-এ graph, alert pipeline-এ queue।",
  "wrong": "সাধারণ ভুল run: 'seen.add(m)' pop-এর পরে সরালে D দুবার queue-তে ঢোকে (B থেকে ও C থেকে) ও D দুবার ছাপে — চিহ্নিত করার ক্রমই algorithm। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l24-sorting-dp": {
  "why": "Sorting-এর সৎ মূল্য তুলনা-ভিত্তিক sort-এর জন্য O(n log n) — merge sort ও quicksort ভাগ করে তা অর্জন করে; bubble sort-এর O(n²) হলো Level 23-এর গণনার জোড়া-তুলনা ফাঁদ। Sorted array-তে অনুসন্ধান হলো binary search-এর O(log n) (code 16টির মধ্যে 2 probe-এ 22 পায়)। একবার sort করে অনেকবার খোঁজা চিরায়ত বিনিময়: একবার n log n দাও, তারপর প্রতিটি lookup প্রায় বিনামূল্যে। উদাহরণটি (sort_dp_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"find 22: (11, 2)\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "DSA তোমার degree ও technical interview দুটোতেই সবচেয়ে বেশি পরীক্ষিত বিষয়: এই level-এর প্রতিটি দাবি একটি algorithm যা তুমি চালাবে, গুনবে, আর রক্ষা করবে। Security কাজ প্রতিদিন একই কাঠামো ব্যবহার করে — প্রতিটি tool-এ hash table, attack path-এ graph, alert pipeline-এ queue।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: fib_fast(30) প্রথমবার ধীর হবে — cache সেই call-এর মধ্যেই ভরে (31টি স্বতন্ত্র উপসমস্যা); পরের প্রতিটি call একটি lookup। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l25-boolean": {
  "why": "Gate হলো transistor দিয়ে বানানো truth table। AND, OR ও NOT শুরু করার মতো যথেষ্ট সম্পূর্ণ; NAND ও NOR প্রতিটি একাই সম্পূর্ণ, যার কারণে আসল chip হলো NAND-এর বন। নিচের ছকটি পুরো শব্দভান্ডার — চার input সারি, চারটি gate, কোনো লুকানো ক্ষেত্র নেই — আর শেষ লাইনটি নিঃশেষ পরীক্ষায় De Morgan-এর সূত্র যাচাই করে, Level 23-তে ব্যবহৃত সেই একই সারি-ধরে প্রমাণ। উদাহরণটি (gates_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"a b | AND OR XOR NAND\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Digital logic হলো যেখানে software physics-এর সঙ্গে মেশে: পরের level-এর প্রতিটি CPU instruction এই level-এর gate ও flip-flop দিয়ে বানানো circuit-এ চলে। পরীক্ষক truth table ও K-map যান্ত্রিকভাবে পরীক্ষা করেন; এই স্তর বোঝা engineer-রা timing ও hardware ত্রুটি debug করেন যা অন্যরা বর্ণনাও করতে পারে না।",
  "wrong": "সাধারণ ভুল run: বিয়োগ চিহ্ন ভুলে NAND-কে a & b হিসাব করা — (1,1) সারি 0-এর বদলে 1 ছাপাই লক্ষণ। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l25-truth-karnaugh": {
  "why": "প্রতিটি truth table ইতিমধ্যে একটি circuit — 1-সারির minterm গুলো OR করো — কিন্তু সাধারণত অপচয়ী। নিচে f = a·b + c-এর পাঁচটি 1-সারি; canonical SOP পাঁচটি গুণফল পদ বহন করত, অথচ function-টি দুটি দিয়ে সংজ্ঞায়িত ছিল। এই ফারাকই minimization, আর K-map তার দৃশ্য পদ্ধতি: সারিগুলো এমনভাবে সাজাও যাতে প্রতিবেশীরা একটি চলকে ভিন্ন হয়, 1 গুলো দলবদ্ধ করো, আর প্রতিটি দল বদলানো চলক মুছে একটি গুণফল পদ হয়ে যায়। উদাহরণটি (kmap_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"0 0 0 -> 0\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Digital logic হলো যেখানে software physics-এর সঙ্গে মেশে: পরের level-এর প্রতিটি CPU instruction এই level-এর gate ও flip-flop দিয়ে বানানো circuit-এ চলে। পরীক্ষক truth table ও K-map যান্ত্রিকভাবে পরীক্ষা করেন; এই স্তর বোঝা engineer-রা timing ও hardware ত্রুটি debug করেন যা অন্যরা বর্ণনাও করতে পারে না।",
  "wrong": "সাধারণ ভুল গণনা: 8টি minterm report করা — শুধু যেসব সারিতে f = 1 সেগুলোই f-এর minterm; তিনটি 0-সারি ¬f-এর। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l25-combinational": {
  "why": "Binary যোগ হলো পোশাক পরা দুটি gate: প্রতিটি bit column-এ sum হলো XOR (column মোট mod 2) আর carry হলো AND (column উপচে গেল কিনা)। Full adder শৃঙ্খলিত করো — প্রতিটি column-এর carry-out পরের column-এর carry-in — তাহলে পাবে ripple-carry adder, নিচের code চারটি শৃঙ্খলিত column দিয়ে 5 + 3 = 8 প্রমাণ করে ঠিক যেভাবে hardware করে। উদাহরণটি (adder_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"0 0 0 -> sum 0 carry 0\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Digital logic হলো যেখানে software physics-এর সঙ্গে মেশে: পরের level-এর প্রতিটি CPU instruction এই level-এর gate ও flip-flop দিয়ে বানানো circuit-এ চলে। পরীক্ষক truth table ও K-map যান্ত্রিকভাবে পরীক্ষা করেন; এই স্তর বোঝা engineer-রা timing ও hardware ত্রুটি debug করেন যা অন্যরা বর্ণনাও করতে পারে না।",
  "wrong": "সাধারণ ভুল run: add(15, 1) (16, 0) ছাপা লুকানোর মতো bug নয় — bits=4-এ আসল উত্তর 16-এর পঞ্চম bit লাগে; ফেরত পাওয়া carry 1 হলো hardware-এর তোলা overflow flag। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l25-flipflops": {
  "why": "এই পাঠের আগের সবকিছু তাৎক্ষণিক ভুলে যেত: input বদলালে output অনুসরণ করত। একটি latch feedback দিয়ে সেই নিয়ম ভাঙে — পরস্পর-যুগ্ম gate যাদের output নিজেকে ধরে রাখে — আর একটি flip-flop একটি clock দিয়ে latch-কে শৃঙ্খলাবদ্ধ করে: মানটি একটি মুহূর্তে (edge) ধরা পড়ে ও মুহূর্তগুলোর মধ্যে স্থির থাকে। এই ধরা-ও-রাখাই 'sequential' এর অর্থ, আর এই কারণেই computer-এর 'বর্তমান অবস্থা' থাকতে পারে। উদাহরণটি (flipflop_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"start Q = 0\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Digital logic হলো যেখানে software physics-এর সঙ্গে মেশে: পরের level-এর প্রতিটি CPU instruction এই level-এর gate ও flip-flop দিয়ে বানানো circuit-এ চলে। পরীক্ষক truth table ও K-map যান্ত্রিকভাবে পরীক্ষা করেন; এই স্তর বোঝা engineer-রা timing ও hardware ত্রুটি debug করেন যা অন্যরা বর্ণনাও করতে পারে না।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: D তালিকা সংজ্ঞায়িত হলেই Q বদলাবে — edge() ডাক না পড়া পর্যন্ত কিছু নড়ে না; hardware-এ clock না উঠা পর্যন্ত কিছু নড়ে না। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l25-counters": {
  "why": "Toggle flip-flop এমনভাবে শৃঙ্খলিত করো যেন প্রতিটির output পরেরটির clock হয়, তাহলে binary গণনা বিনামূল্যে বেরিয়ে আসে: FF0 প্রতি cycle-এ উল্টায় (…010), FF1 উল্টায় প্রতিবার FF0 1→0 পড়লে (period 4), FF2 period 8 নিয়ে। উপর থেকে নিচে তিনটি output পড়লে বানান হয় 000, 001, 010 … 111, 000 — code ঠিক এই ripple চালিয়ে গণনা দুইভাবেই ছাপে। উদাহরণটি (counter_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"count: 0 000\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Digital logic হলো যেখানে software physics-এর সঙ্গে মেশে: পরের level-এর প্রতিটি CPU instruction এই level-এর gate ও flip-flop দিয়ে বানানো circuit-এ চলে। পরীক্ষক truth table ও K-map যান্ত্রিকভাবে পরীক্ষা করেন; এই স্তর বোঝা engineer-রা timing ও hardware ত্রুটি debug করেন যা অন্যরা বর্ণনাও করতে পারে না।",
  "wrong": "সাধারণ ভুল run: FF0-এর পতনের বদলে প্রতি ধাপে FF1 উল্টালে 0, 3, 2, 1… ছাপে — একটি 'counter' যা গুনছে না; পতন-শর্তই design। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l25-sequential-design": {
  "why": "Design এখন সব একত্র করে: অবস্থা বাছো, transition ছক বানাও, flip-flop-কে অবস্থা ধরতে দাও আর combinational যুক্তিকে next-state ও output হিসাব করতে দাও। নিচের traffic light একটি Moore machine — তার output-ই তার অবস্থা — সময়বদ্ধ transitionসহ: GREEN 3 tick ধরে থাকে, YELLOW 1, RED 2, পুনরাবৃত্তি। আট tick simulation ঠিক সেই আচরণ ছাপে যা ছক প্রতিশ্রুতি দেয়, যা সেই যাচাই ধাপ যা পেশাদাররা কখনো এড়ান না। উদাহরণটি (fsm_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"t = 0 light: GREEN\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Digital logic হলো যেখানে software physics-এর সঙ্গে মেশে: পরের level-এর প্রতিটি CPU instruction এই level-এর gate ও flip-flop দিয়ে বানানো circuit-এ চলে। পরীক্ষক truth table ও K-map যান্ত্রিকভাবে পরীক্ষা করেন; এই স্তর বোঝা engineer-রা timing ও hardware ত্রুটি debug করেন যা অন্যরা বর্ণনাও করতে পারে না।",
  "wrong": "সাধারণ ভুল trace: t = 3-এ RED আশা করা — table YELLOW-কে ঠিক 1 tick দেয় (t = 3) আর RED শুরু হয় t = 4-এ; সময়কাল হলো প্রতি অবস্থায় ছাপা লাইনের সংখ্যা। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l26-cpu-registers": {
  "why": "একটি CPU-কে তার কঙ্কালে নামালে তিনটি জিনিস থাকে: register (কয়েকটি নামযুক্ত, তাৎক্ষণিক সংরক্ষণ cell), memory (বিশাল, ধীর, ঠিকানাযুক্ত), আর তাদের মধ্যে যাতায়াত করা control চক্র। নিচের trace একটি কাগজ-CPU-তে চার-instruction program চালায়: memory থেকে দুটি সংখ্যা আনো, register-এ যোগ করো, ফলাফল output করো। প্রতিটি আসল processor — 8086, তোমার ফোনের ARM — হলো আরও register, প্রশস্ত word ও বিস্ময়কর গতি নিয়ে এই কঙ্কালই। উদাহরণটি (cpu_model.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"step 1: MOV AX, [100] -> AX = 7\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Assembly হলো machine-এর আগে শেষ বিমূর্ততা: register, addressing ও interrupt ব্যাখ্যা করে compiler কী নির্গত করে, debugger কী দেখায়, আর তোমার Level 19 reverse-engineering পাঠ কী পড়ে। Computer Architecture পরীক্ষক ঠিক এই trace গুলোই পরীক্ষা করেন।",
  "wrong": "সাধারণ ভুল run: MOV-এর উৎস register dict-এ বদলালে step 1 AX = 0 ছাপে — load নীরবে ভুল জায়গা পড়েছে; bracket অর্থ, সাজসজ্জা নয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l26-addressing": {
  "why": "একটি instruction-কে একটি প্রশ্নের উত্তর দিতে হয়: আমার operand কোথায়? Addressing mode হলো তার প্রমিত উত্তর। Immediate (MOV AX, 5) মানটিকেই বহন করে। Direct (MOV AX, [100]) ঠিকানা বহন করে। Register indirect (MOV AX, [BX]) একটি register-এর কাছে ঠিকানা চায়। Indexed (MOV AX, [BX+SI+2]) base + index + displacement হিসাব করে — যা ঠিক a[i] যা-তে compile হয়: array base, element index মাপকৃত, offset যোগ। উদাহরণটি (addressing_modes.txt) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"Five modes, five different answers to 'where is the operand?'.\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Assembly হলো machine-এর আগে শেষ বিমূর্ততা: register, addressing ও interrupt ব্যাখ্যা করে compiler কী নির্গত করে, debugger কী দেখায়, আর তোমার Level 19 reverse-engineering পাঠ কী পড়ে। Computer Architecture পরীক্ষক ঠিক এই trace গুলোই পরীক্ষা করেন।",
  "wrong": "সাধারণ ভুল উত্তর: [BX+SI]-কে mem[1000] + mem[20] পড়া — register-এর বিষয়বস্তু আগে যোগ হয় (1020), তারপরই memory একবার পড়া হয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l26-asm-first": {
  "why": "এটি একটি সম্পূর্ণ, আসল program — NASM syntax, Linux x86-64 — যা register-এ ধরা দুটি সংখ্যা যোগ করে ও যোগফলকে তার exit code হিসেবে নিয়ে শেষ হয়। তোমার নিজের machine-এ এটি assemble করো: nasm -f elf64 add.asm && ld -o add add.o && ./add ; echo $? দিয়ে — shell 42 ছাপে, program-এর একমাত্র output, listing-এর trace যেভাবে দেখায় ঠিক সেভাবে একটি register-এ বহন করা। উদাহরণটি (add.asm) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"Trace: RAX 30 -> (RBX 12) -> RAX 42 -> copied to RDI -> RAX becomes 60 -> syscall.\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Assembly হলো machine-এর আগে শেষ বিমূর্ততা: register, addressing ও interrupt ব্যাখ্যা করে compiler কী নির্গত করে, debugger কী দেখায়, আর তোমার Level 19 reverse-engineering পাঠ কী পড়ে। Computer Architecture পরীক্ষক ঠিক এই trace গুলোই পরীক্ষা করেন।",
  "wrong": "সাধারণ ভুল run: ./add কিছু না ছাপা হলো সঠিক আচরণ — এই program-এর কোনো print নেই; তার ফলাফল হলো exit code, echo $? দিয়ে পড়া। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l26-asm-loops": {
  "why": "Machine স্তরে কোনো while keyword নেই — আছে একটি তুলনা, পেছনে একটি শর্তাধীন লাফ, আর শৃঙ্খলা। Listing RAX-এ 1..5 যোগ করে: RCX-এর counter 5 থেকে কমে, প্রতিটি পাসে RCX যোগ হয় ও কমে, আর JNZ (হ্রাস শূন্য না তৈরি করলে লাফ) loop বন্ধ করে। Trace করো: RAX যায় 5, 9, 12, 14, 15 — বিপরীত ক্রমে আংশিক যোগফল, কারণ নিচের দিকে গণনা বড় সংখ্যা আগে যোগ করে। উদাহরণটি (sum_loop.asm) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"Trace (RAX after each add): 5, 9, 12, 14, 15 — then RCX hits 0, JNZ falls through.\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Assembly হলো machine-এর আগে শেষ বিমূর্ততা: register, addressing ও interrupt ব্যাখ্যা করে compiler কী নির্গত করে, debugger কী দেখায়, আর তোমার Level 19 reverse-engineering পাঠ কী পড়ে। Computer Architecture পরীক্ষক ঠিক এই trace গুলোই পরীক্ষা করেন।",
  "wrong": "সাধারণ ভুল trace: আংশিক যোগফল 1, 3, 6, 10, 15 তালিকা করা — তা count-UP trace; এই listing নিচে গণনা করে, তাই একই গন্তব্যে পৌঁছায় 5, 9, 12, 14, 15 দিয়ে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l26-interrupts": {
  "why": "Interrupt ছাড়া CPU polling করত: 'keyboard? …keyboard? …keyboard?' প্রতি সেকেন্ডে বিলিয়ন বার, একটি keystroke লক্ষ্য করতে machine পোড়াত। Interrupt সম্পর্ক উল্টে দেয় — device একটি line তোলে, CPU তার বর্তমান instruction শেষ করে, তার অবস্থা (flag, return ঠিকানা) stack-এ push করে, vector table দিয়ে ISR-এ লাফ দেয়, যা device-কে সেবা করে ও কিছু ঘটেনি এমনভাবে IRET দিয়ে ফেরে। বাধাপ্রাপ্ত program কখনো জানতে পারে না। উদাহরণটি (interrupt_trace.txt) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"The game loop loses a few hundred cycles and notices nothing.\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Assembly হলো machine-এর আগে শেষ বিমূর্ততা: register, addressing ও interrupt ব্যাখ্যা করে compiler কী নির্গত করে, debugger কী দেখায়, আর তোমার Level 19 reverse-engineering পাঠ কী পড়ে। Computer Architecture পরীক্ষক ঠিক এই trace গুলোই পরীক্ষা করেন।",
  "wrong": "সাধারণ ভুল ক্রম: ISR-কে অবস্থা push-এর আগে বসানো — save করা অবস্থা ছাড়া ঢোকা ISR-এর IRET-এর ফেরানোর কিছু থাকে না, আর বাধাপ্রাপ্ত program ধ্বংস হয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l26-arm-modern": {
  "why": "ARM-এর বাজি, যা mobile জগত জিতেছে ও server জিতছে: instruction সরল ও একরূপ করো, memory-তে সরাসরি গণিত নিষেধ করো, আর programmer-কে অনেক register দাও (যাতে load/store কর কমই দিতে হয়)। নিচের emulator একটি ARM-ধাঁচের program চালায় — দুটি মান LDR, register-এ ADD, ফলাফল STR দিয়ে বাড়ি। x86 trace-এর সঙ্গে তুলনা করো: ADD চাইলেও memory ঠিকানা নাম দিতে পারত না। উদাহরণটি (arm_style_cpu.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"('LDR', 0, 0) => regs [10, 0, 0, 0] mem [10, 20, 0, 40]\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Assembly হলো machine-এর আগে শেষ বিমূর্ততা: register, addressing ও interrupt ব্যাখ্যা করে compiler কী নির্গত করে, debugger কী দেখায়, আর তোমার Level 19 reverse-engineering পাঠ কী পড়ে। Computer Architecture পরীক্ষক ঠিক এই trace গুলোই পরীক্ষা করেন।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: STR একটি register বদলাবে — STR একটি register থেকে MEMORY লেখে; চূড়ান্ত mem লাইন ([10, 20, 30, 40]) তার একমাত্র প্রভাব, আর register তাতে অস্পৃষ্ট। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l27-er-relational": {
  "why": "Design কোনো SQL-এর আগে শুরু হয়: entity গুলোর নাম দাও (ছাত্র, course), তাদের attribute, আর relationship গুলো — একটি ER diagram হলো আঁকা সেই বাক্য। Table-এ mapping তারপর যান্ত্রিক: প্রতিটি entity একটি table হয়; একটি many-to-many relationship (ছাত্ররা course-এ ভর্তি হয়) তার নিজের table হয় যার row গুলো জোড়া, কারণ একটি cell কখনো একটি তালিকা ধরে রাখতে পারে না — সেই নিয়ম (atomic মান) normalization পাঠে 1NF হয়ে ফিরে আসে। উদাহরণটি (er_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"(1, 'Abir')\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Level 0–22-তে তুমি যেই প্রতিটি application secure করেছ তা একটি database-এর উপর বসে; এই level database-টাই শেখায়: data কীভাবে model হয়, query হয়, ব্যর্থতা ও concurrency-র মধ্যে সামঞ্জস্যপূর্ণ থাকে, আর দ্রুত হয়। DBMS তোমার degree-র সবচেয়ে পরীক্ষা-ভারী বিষয়গুলোর একটিও — আর তার প্রাণ হলো table দিয়ে Level 23-এর set theory।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: SELECT * সন্নিবেশ ক্রমে row ছাপা ছোট table-এর কাকতাল — relation হলো set, আর ORDER BY ছাড়া কোনো ক্রম প্রতিশ্রুত নয় (পরের পাঠ ক্রম স্পষ্ট করে)। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l27-sql-basics": {
  "why": "একটি SELECT query হলো একটি নির্দিষ্ট যৌক্তিক ক্রমে পড়া pipeline: FROM table বাছে, WHERE তার row ছাঁকে, SELECT column বাছে, ORDER BY যা টেকে তা সাজায়। Code একটি আসল (in-memory) database-এর বিরুদ্ধে সেই pipeline চালায়: অন্তত 60 পাওয়া Math ছাত্রদের মধ্যে ছাঁকা একটি marks table, সেরা আগে। প্রতিটি clause তার জায়গা অর্জন করে — WHERE ফেললে Physics row ঢুকে যায়; ORDER BY ফেললে 'সেরা আগে' প্রতিশ্রুতি মুছে যায়। উদাহরণটি (sql_basics.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"Math, 60+, best first:\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Level 0–22-তে তুমি যেই প্রতিটি application secure করেছ তা একটি database-এর উপর বসে; এই level database-টাই শেখায়: data কীভাবে model হয়, query হয়, ব্যর্থতা ও concurrency-র মধ্যে সামঞ্জস্যপূর্ণ থাকে, আর দ্রুত হয়। DBMS তোমার degree-র সবচেয়ে পরীক্ষা-ভারী বিষয়গুলোর একটিও — আর তার প্রাণ হলো table দিয়ে Level 23-এর set theory।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: Bil output-এ আসবে কারণ 'Math তার বিষয়' — AND প্রতি row-তে দুটি predicate-ই বাধ্যতামূলক করে; 57 < 60 তাকে বাদ দেয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l27-sql-joins": {
  "why": "একটি join হলো উদ্দেশ্যসহ Level 23-এর relation যন্ত্র: একটি query-র জন্য normalization-এর table-এ ভাগ করা প্রশস্ত দৃশ্য আবার বানাও। INNER JOIN শুধু মিলানো জোড়া রাখে — Cy, যার এখনো কোনো grade নেই, grade report থেকে হারিয়ে যায়, যা report-এর প্রতিশ্রুতি হতে পারে আবার নাও পারে। LEFT JOIN Cy-কে একটি NULL course-সহ রাখে: পার্থক্য syntax নয়, এটি কে উত্তর থেকে হারাতে পারে তা নিয়ে একটি সিদ্ধান্ত। উদাহরণটি (sql_joins.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"INNER JOIN (only students WITH grades):\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Level 0–22-তে তুমি যেই প্রতিটি application secure করেছ তা একটি database-এর উপর বসে; এই level database-টাই শেখায়: data কীভাবে model হয়, query হয়, ব্যর্থতা ও concurrency-র মধ্যে সামঞ্জস্যপূর্ণ থাকে, আর দ্রুত হয়। DBMS তোমার degree-র সবচেয়ে পরীক্ষা-ভারী বিষয়গুলোর একটিও — আর তার প্রাণ হলো table দিয়ে Level 23-এর set theory।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: Cy একটি NULL নিয়ে INNER JOIN output-এ আসবে — NULL-পূরণ LEFT JOIN-এর স্বাক্ষর; INNER তাকে সরলভাবে বাদ দেয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l27-normalization": {
  "why": "Normalization হলো একটি নিয়মপুস্তসহ অতিরিক্ততা অপসারণ। নিচের সমতল orders table Rima-র শহর দুবার রাখে — প্রতি order-এ একবার — আর code তার পরিণতি দেখায়: তার শহর শুধু একটি row-তে বদলাও, database এখন দাবি করে সে একসঙ্গে দুই শহরে থাকে। এটি কাল্পনিক নয়; এটি প্রতিটি অ-normalized table-এর default ভবিষ্যৎ, আর সমাধান কাঠামোগত: ঠিক এক জায়গায় রাখা একটি তথ্য কখনো নিজের সঙ্গে অমিল হতে পারে না। উদাহরণটি (normalize_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"flat table says Rima lives in: ['Chattogram', 'Dhaka']\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Level 0–22-তে তুমি যেই প্রতিটি application secure করেছ তা একটি database-এর উপর বসে; এই level database-টাই শেখায়: data কীভাবে model হয়, query হয়, ব্যর্থতা ও concurrency-র মধ্যে সামঞ্জস্যপূর্ণ থাকে, আর দ্রুত হয়। DBMS তোমার degree-র সবচেয়ে পরীক্ষা-ভারী বিষয়গুলোর একটিও — আর তার প্রাণ হলো table দিয়ে Level 23-এর set theory।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: সমতল table একটি শহর ছাপবে — এটি দুটি ছাপে, কারণ update শুধু প্রথম মিলানো row পেয়েছে; আংশিক update হলো anomaly-র যন্ত্র। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l27-transactions": {
  "why": "একটি bank হস্তান্তর হলো দুটি update যা কখনো আলাদা দেখা যাবে না: A থেকে debit, B-তে credit। Code সেই হস্তান্তর সম্পাদন করে ও তারপর একটি ব্যর্থ statement দিয়ে ইচ্ছাকৃতভাবে মাঝপথে crash করে — দেখো rollback দুটি balance-ই পুনরুদ্ধার করে, কারণ atomicity মানে ব্যর্থ অর্ধেক কোনো চিহ্ন রাখে না। Account জুড়ে মোট (800) আগে, পর্যবেক্ষণের মধ্যে ও পরে সংরক্ষিত: একটি অপরিবর্তনীয় নিয়ম যা transaction রক্ষা করতে আছে। উদাহরণটি (txn_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"transfer rolled back\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Level 0–22-তে তুমি যেই প্রতিটি application secure করেছ তা একটি database-এর উপর বসে; এই level database-টাই শেখায়: data কীভাবে model হয়, query হয়, ব্যর্থতা ও concurrency-র মধ্যে সামঞ্জস্যপূর্ণ থাকে, আর দ্রুত হয়। DBMS তোমার degree-র সবচেয়ে পরীক্ষা-ভারী বিষয়গুলোর একটিও — আর তার প্রাণ হলো table দিয়ে Level 23-এর set theory।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: A-এর balance 300 ছাপবে কারণ 'UPDATE চলেছিল' — সম্পাদন commitment নয়; rollback তা মুছেছে, যা ঠিক প্রদর্শিত বৈশিষ্ট্য। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l27-indexing-concurrency": {
  "why": "Query plan হলো engine-এর কাজ দেখানো। নিচে, 2,000 row-এর মধ্যে একটি tag খোঁজা আগে SCAN report করে — প্রতিটি row পরীক্ষিত — আর CREATE INDEX-এর পরে SEARCH USING INDEX report করে: B-tree (Level 24-এর BST, disk page-এর জন্য প্রশস্ত) সরাসরি মিলের দিকে হাঁটে। Query নিয়ে কিছু বদলায়নি; table-এর পাশের কাঠামো বদলেছে, আর তার সঙ্গে ওই column-এর প্রতিটি lookup-এর complexity শ্রেণি। উদাহরণটি (index_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"before index: SCAN big\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "Level 0–22-তে তুমি যেই প্রতিটি application secure করেছ তা একটি database-এর উপর বসে; এই level database-টাই শেখায়: data কীভাবে model হয়, query হয়, ব্যর্থতা ও concurrency-র মধ্যে সামঞ্জস্যপূর্ণ থাকে, আর দ্রুত হয়। DBMS তোমার degree-র সবচেয়ে পরীক্ষা-ভারী বিষয়গুলোর একটিও — আর তার প্রাণ হলো table দিয়ে Level 23-এর set theory।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: plan ফলাফল বদলে দেবে — তা করা উচিত নয়। Indexing খরচ বদলায়, অর্থ কখনো নয়; CREATE INDEX-এর পরে ফলাফল ভিন্ন হলে অন্য কিছু ভাঙা। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l28-sdlc": {
  "why": "পর্যায় গুলো আমলাতন্ত্র নয় — তারা হলো যেই ক্রমে ভুল ব্যয়বহুল হয়। একটি ভুল বোঝা requirement requirement পর্যায়ে ঠিক করতে একটি বাক্য খরচ হয়, design-এ একটি redesign, বাস্তবায়নে একটি পুনর্লেখা, আর production-এ একটি incident: পরিবর্তনের খরচের চিরায়ত বক্ররেখাই পর্যায় থাকার পুরো যুক্তি। Waterfall বাজি ধরে requirement আগে জানা যায় (আইনে নির্দিষ্ট একটি payroll spec, একটি প্রকাশিত grammar-এর compiler-এর ক্ষেত্রে সত্য — Level 30-এর ক্ষেত্রে); iterative model বাজি ধরে জানা যায় না, আর বারবার চক্র দিয়ে feedback-এর মূল্য দেয়। উদাহরণটি (sdlc_cost.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"waterfall total fix cost: 326\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "CyberLab-এ এখন পর্যন্ত তুমি যা বানিয়েছ তা একক ও ছোট ছিল। এই level হলো software যেভাবে দল, সময় ও পরিবর্তনে টেকে: একটি lifecycle, লিখিত requirement, মানুষ পর্যালোচনা করতে পারে এমন design, regression ধরা test, সৎভাবে ইতিহাস লেখা Git, আর slice-এ ship করা একটি agile ছন্দ। Software Engineering হলো সেই honours বিষয় যা programmer-দের engineer বানায়।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: দুটি মোট কাছাকাছি হবে — তারা ~3.5× ভিন্ন কারণ পরীক্ষার মূল্যে (60) পাঁচটি ত্রুটি বাকি সবকিছুতে প্রাধান্য পায়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l28-requirements-uml": {
  "why": "একটি requirement হলো একটি পরীক্ষণযোগ্য প্রতিশ্রুতি। 'System দ্রুত ও user-friendly হওয়া উচিত' যাচাইযোগ্য কিছু প্রতিশ্রুতি দেয় না; '95% query-র জন্য search 2 সেকেন্ডের মধ্যে ফলাফল দেয়' ও 'একজন member সর্বোচ্চ 3 tap-এ একটি loan নবায়ন করতে পারে' পরীক্ষা, মূল্যায়ন ও তর্ক করা যায় — যা মূল বিষয়। নিচের artifact অস্পষ্ট ইচ্ছাকে acceptance মানদণ্ডসহ user story-তে আবার লেখে, পরের agile পাঠের কার্যকর মুদ্রা। উদাহরণটি (requirements.md) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"2 testable stories + 1 use case, from 1 vague wish\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "CyberLab-এ এখন পর্যন্ত তুমি যা বানিয়েছ তা একক ও ছোট ছিল। এই level হলো software যেভাবে দল, সময় ও পরিবর্তনে টেকে: একটি lifecycle, লিখিত requirement, মানুষ পর্যালোচনা করতে পারে এমন design, regression ধরা test, সৎভাবে ইতিহাস লেখা Git, আর slice-এ ship করা একটি agile ছন্দ। Software Engineering হলো সেই honours বিষয় যা programmer-দের engineer বানায়।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: অস্পষ্ট বাক্য story গুলোতে টিকে থাকবে — তা থাকা উচিত নয়; তার প্রতিটি শব্দ হয় মাপা হয়েছে বা সরানো হয়েছে, যা-ই অনুশীলন। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l28-design-patterns": {
  "why": "Pattern আছে কারণ design সমস্যা পুনরাবৃত্ত হয়: 'এই মান বদলালে system-এর অনেক অংশকে প্রতিক্রিয়া জানাতে হয়' এতবার সমাধান হয়েছে যে সমাধানটি একটি নাম অর্জন করেছে — Observer। Code এটি খালি হাতে বাস্তবায়ন করে: দুটি subscriberসহ একটি DiskMonitor (subject), একটি logger ও একটি alerter; reading update হলে দুজনই প্রতিক্রিয়া জানায়, আর monitor কখনো তাদের নাম দেয় না — এটি শুধু subscribe/notify protocol জানে। পরে একটি তৃতীয় প্রতিক্রিয়া যোগ করা মানে একটি class ও একটি subscribe call লেখা, monitor-এ অস্ত্রোপচার নয়। উদাহরণটি (observer_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"log: disk at 90%\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "CyberLab-এ এখন পর্যন্ত তুমি যা বানিয়েছ তা একক ও ছোট ছিল। এই level হলো software যেভাবে দল, সময় ও পরিবর্তনে টেকে: একটি lifecycle, লিখিত requirement, মানুষ পর্যালোচনা করতে পারে এমন design, regression ধরা test, সৎভাবে ইতিহাস লেখা Git, আর slice-এ ship করা একটি agile ছন্দ। Software Engineering হলো সেই honours বিষয় যা programmer-দের engineer বানায়।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: 'ALERT' আগে ছাপবে কারণ তা বেশি গুরুত্বপূর্ণ মনে হয় — জানানো subscribe ক্রম অনুসরণ করে, গুরুত্ব নয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l28-testing": {
  "why": "একটি test হলো একটি সম্পাদনযোগ্য requirement: clamp function-কে মান [0, 100]-তে আটকাতেই হবে, আর নিচের harness তা পাঁচটি যাচাই হিসেবে বলে — মাঝখান, দুটি সীমানা, ও দুই সীমানার বাইরে — তারপর output চোখে দেখার বদলে ব্যর্থতা গণনা করে। সীমানা পছন্দ পড়ো: 0 ও 100 অন্তর্ভুক্তি পরীক্ষা করে (প্রান্ত কি ভেতরে?), −5 ও 150 clamp করা নিজেই পরীক্ষা করে। বেশিরভাগ আসল bug ঠিক সেখানেই থাকে, range-এর সংযোগস্থলে, যার কারণে test design সুখী মাঝখান থেকে নয়, সীমানা থেকে শুরু হয়। উদাহরণটি (test_clamp.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"5/5 passed\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "CyberLab-এ এখন পর্যন্ত তুমি যা বানিয়েছ তা একক ও ছোট ছিল। এই level হলো software যেভাবে দল, সময় ও পরিবর্তনে টেকে: একটি lifecycle, লিখিত requirement, মানুষ পর্যালোচনা করতে পারে এমন design, regression ধরা test, সৎভাবে ইতিহাস লেখা Git, আর slice-এ ship করা একটি agile ছন্দ। Software Engineering হলো সেই honours বিষয় যা programmer-দের engineer বানায়।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: একটি FAIL লাইন — harness design অনুযায়ী সাফল্যে নীরব; কোনো অভিযোগ ছাড়া '5/5 passed' হলো সবুজ অবস্থা। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l28-git-teamwork": {
  "why": "Git-এর model Level 23-এর একই graph চিন্তাকে পুরস্কৃত করে: commit হলো node, parent হলো edge, একটি branch হলো একটি node-এর উপর একটি চলমান লেবেল মাত্র। নিচের command অনুক্রম প্রতিটি পেশাদার দলের দৈনিক loop — একটি feature-এর জন্য branch, ছোট সৎ ধাপে commit, push, একটি pull request খোলা, পর্যালোচনা, merge। প্রতিটি commit বার্তা একজন ভবিষ্যৎ পাঠকের জন্য লেখা (সাধারণত তুমি, রাত 2টায়, একটি incident-এর মাঝখানে) 'কী বদলেছে ও কেন'-এর উত্তর দেয় — যার কারণে 'fixed stuff' একটি পেশাদার ব্যর্থতা আর '3-tap acceptance সীমায় নবায়ন tap clamp করো' একটি পেশাদার কাজ। উদাহরণটি (git_daily_loop.sh) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"Branch per feature. Small commits with honest messages.\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "CyberLab-এ এখন পর্যন্ত তুমি যা বানিয়েছ তা একক ও ছোট ছিল। এই level হলো software যেভাবে দল, সময় ও পরিবর্তনে টেকে: একটি lifecycle, লিখিত requirement, মানুষ পর্যালোচনা করতে পারে এমন design, regression ধরা test, সৎভাবে ইতিহাস লেখা Git, আর slice-এ ship করা একটি agile ছন্দ। Software Engineering হলো সেই honours বিষয় যা programmer-দের engineer বানায়।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: সরাসরি main-এ push করা loop-এ থাকবে — loop ঠিক তা রোধ করতেই আছে; পর্যালোচনা branch-এ হয়, merge-এর আগে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l28-agile-docs": {
  "why": "Agile হলো পাঠ 1-এর iterative lifecycle যার সঙ্গে একটি ব্যবস্থাপনা ছন্দ যুক্ত: ছোট story-র একটি অগ্রাধিকারপ্রাপ্ত backlog (পাঠ 2-এর format), ছোট sprint-এ টানা, প্রতিটির শেষে একটি কার্যকর increment ও আসল user-দের সঙ্গে একটি পর্যালোচনা। নিচের পরিকল্পনা হলো library app তিনটি sprint-এ কাটা — slicing নিয়ম লক্ষ্য করো: প্রতিটি sprint প্রদর্শনযোগ্য কিছু দিয়ে শেষ হয় (end-to-end একটি book ধার করা) এমন একটি সমাপ্ত স্তর নয় যা কেউ ব্যবহার করতে পারে না (সব database, তারপর সব screen)। অনুভূমিক স্তর নয়, উল্লম্ব slice। উদাহরণটি (sprint_plan.md) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"3 sprints, each ending in software a user can touch\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "CyberLab-এ এখন পর্যন্ত তুমি যা বানিয়েছ তা একক ও ছোট ছিল। এই level হলো software যেভাবে দল, সময় ও পরিবর্তনে টেকে: একটি lifecycle, লিখিত requirement, মানুষ পর্যালোচনা করতে পারে এমন design, regression ধরা test, সৎভাবে ইতিহাস লেখা Git, আর slice-এ ship করা একটি agile ছন্দ। Software Engineering হলো সেই honours বিষয় যা programmer-দের engineer বানায়।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: 'sprint 1-এ সব database কাজ' কার্যকর পরিকল্পনা হবে — তা user পর্যালোচনা করতে পারে এমন কিছু তৈরি করে না, যা ঠিক সেই waterfall ব্যর্থতা যা agile এড়াতে আছে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l29-automata": {
  "why": "একটি DFA হলো computation-এর ছোটতম সৎ model: সসীম নিয়ন্ত্রণ, একবার পাস, কোনো খাতা নয়। নিচের machine ঠিক সেসব string গ্রহণ করে {a, b}-এর উপর যেগুলো 'ab' দিয়ে শেষ হয় — আর তার তিনটি state হলো এখন পর্যন্ত দেখা দীর্ঘতম suffix-এর স্মৃতি যা এখনো 'ab'-তে বাড়তে পারে: কিছুই নয়, 'a', বা শেষ। এটাই ছোট আকারে design পদ্ধতি: state হলো ইতিহাসের সমতুল্য শ্রেণি — ভবিষ্যৎ সিদ্ধান্ত নিতে machine-এর অতীত সম্পর্কে যা মনে রাখা দরকার, তার বেশি কিছু নয়। উদাহরণটি (dfa_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"ab -> ACCEPT\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level প্রতিটি machine-এর নিচের machine গুলো অধ্যয়ন করে: computation কী, কোন সমস্যার আদৌ algorithmic সমাধান আছে, আর কোন সমাধানযোগ্য সমস্যা সস্তা বা ধ্বংসাত্মকভাবে ব্যয়বহুল। এটি সবচেয়ে প্রমাণ-ভারী honours বিষয় — আর Level 23-এর logic ও প্রমাণ কৌশল তার প্রবেশ টিকিট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: 'aba' গৃহীত হবে কারণ এতে 'ab' আছে — machine শেষ পরীক্ষা করে; চূড়ান্ত b কখনো আসে না, তাই এটি q1-এ থামে ও প্রত্যাখ্যান করে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l29-regular": {
  "why": "Regex হলো DFA-র language গুলোর বীজগণিত: code (a|b)*abb বানায় — {a,b}-এর উপর abb দিয়ে শেষ হওয়া সব string — আর theory যেভাবে বলে একটি machine করবে সেভাবে সদস্য যাচাই করে। সমতুল্য theorem (regex ⇄ NFA ⇄ DFA) হলো কারণ shell-এ তুমি যেই pattern লেখো ও পাঠ্যপুস্তকের automaton দুটি notation-এ একই বস্তু — একটি তথ্য যা Level 30-এর lexer সরাসরি ভাঙিয়ে নেবে। উদাহরণটি (regex_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"abb -> in L\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level প্রতিটি machine-এর নিচের machine গুলো অধ্যয়ন করে: computation কী, কোন সমস্যার আদৌ algorithmic সমাধান আছে, আর কোন সমাধানযোগ্য সমস্যা সস্তা বা ধ্বংসাত্মকভাবে ব্যয়বহুল। এটি সবচেয়ে প্রমাণ-ভারী honours বিষয় — আর Level 23-এর logic ও প্রমাণ কৌশল তার প্রবেশ টিকিট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: 'abab' L-এ থাকবে কারণ পড়ায় এটি substring হিসেবে 'abb' ধারণ করে — এটি মোটেই 'abb' ধারণ করে না, আর এখানে সদস্যপদ fullmatch-এর নিচে শেষ নিয়ে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l29-cfg": {
  "why": "একটি production, S → aSb | ε, সেই language তৈরি করে যা কোনো DFA গ্রহণ করতে পারেনি: প্রতিটি আবার লেখা বামে একটি a ও ডানে একটি b যোগ করে, তাই গণনা নির্মাণ অনুযায়ী সমান থাকে। নিচের recognizer তা recursive আকারে stack শৃঙ্খলা দিয়ে প্রতিফলিত করে — নামার সময় a গ্রহণ করো, তারপর খোলার সময় b মেলাও: call stack হলো PDA-র stack, যার কারণে programming language (বাসা-বাঁধা বন্ধনী, বাসা-বাঁধা block) ঠিক এই শ্রেণিতে থাকে। উদাহরণটি (cfg_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"ab -> True\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level প্রতিটি machine-এর নিচের machine গুলো অধ্যয়ন করে: computation কী, কোন সমস্যার আদৌ algorithmic সমাধান আছে, আর কোন সমাধানযোগ্য সমস্যা সস্তা বা ধ্বংসাত্মকভাবে ব্যয়বহুল। এটি সবচেয়ে প্রমাণ-ভারী honours বিষয় — আর Level 23-এর logic ও প্রমাণ কৌশল তার প্রবেশ টিকিট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: 'aab' গণনা report হিসেবে 'কারণ a বেশি' বলে ব্যর্থ — recognizer গণনা করে না; খোলা stack-এর মাঝখানে b ফুরিয়ে যায়, একটি কাঠামোগত ব্যর্থতা যা function None → False হিসেবে report করে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l29-turing": {
  "why": "Automaton-এ একটি লেখা যায় এমন, অসীম tape যোগ করো আর তুমি একসঙ্গে দুটি শ্রেণি লাফ দিয়েছ: context-free পেরিয়ে, যেকোনো computer কখনো যা হিসাব করেছে তার সবটায়। নিচের simulator একটি সম্পূর্ণ TM — transition table, তালিকা হিসেবে tape, head index — unary বৃদ্ধি সম্পাদন করছে: খালি পর্যন্ত 1 পড়ো, আরও একটি 1 লেখো, থামো। পাঁচটি ধাপ, আর tape বেড়েছে: সেই লেখা-ও-ফেরত ক্ষমতা, হাস্যকরভাবে সরল, হলো pattern চেনা ও হিসাব করার মধ্যে পুরো পার্থক্য। উদাহরণটি (tm_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"tape: 1111 | steps: 4\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level প্রতিটি machine-এর নিচের machine গুলো অধ্যয়ন করে: computation কী, কোন সমস্যার আদৌ algorithmic সমাধান আছে, আর কোন সমাধানযোগ্য সমস্যা সস্তা বা ধ্বংসাত্মকভাবে ব্যয়বহুল। এটি সবচেয়ে প্রমাণ-ভারী honours বিষয় — আর Level 23-এর logic ও প্রমাণ কৌশল তার প্রবেশ টিকিট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: তিনটি 1-এর জন্য 3 ধাপ — machine-কে খালিতে লেখা ধাপও নিতে হবে; থামা একটি transitionও, আর তা গণনা করা হয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l29-decidability": {
  "why": "Halting প্রমাণ হলো ভেতরে একটি ফাঁদসহ পাঁচ লাইন logic: ধরো একটি decider H(P, x) ছিল যা সবসময় 'থামে' বা 'চলে' উত্তর দেয়। D(P) বানাও: H(P, P) চালাও; H 'থামে' বললে চিরদিন loop করো; H 'চলে' বললে থামো। এখন D-কে তার নিজের code খাওয়াও। D(D) থামলে H 'থামে' বলেছিল, তাই D loop করে — সাংঘর্ষিকতা। D(D) loop করলে H 'চলে' বলেছিল, তাই D থামে — সাংঘর্ষিকতা। অতএব H থাকতে পারে না: 'কেউ খুঁজে পায়নি' নয়, বরং অনুসন্ধান নিজেই নিরাশ এমন একটি প্রমাণ, প্রতিটি language ও প্রতিটি ভবিষ্যৎ tool-এর জন্য। উদাহরণটি (halting_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"27 with budget 200: 111\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level প্রতিটি machine-এর নিচের machine গুলো অধ্যয়ন করে: computation কী, কোন সমস্যার আদৌ algorithmic সমাধান আছে, আর কোন সমাধানযোগ্য সমস্যা সস্তা বা ধ্বংসাত্মকভাবে ব্যয়বহুল। এটি সবচেয়ে প্রমাণ-ভারী honours বিষয় — আর Level 23-এর logic ও প্রমাণ কৌশল তার প্রবেশ টিকিট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: বাজেট 50 প্রমাণ করবে 27 'চিরদিন চলে' — এটি None (অজানা) ফেরত দেয়; 27 আসলে 111 ধাপে থামে, যা বড় বাজেট প্রকাশ করে। বাজেট ফুরানো হলো অজ্ঞতা, প্রমাণ নয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l29-complexity": {
  "why": "Complexity একটি ঘড়ি দিয়ে decidability পরিমার্জন করে: সমাধানযোগ্যদের মধ্যে কোনগুলো সস্তা? Code subset-sum-এ NP-এর সংজ্ঞায়ক অসমতা প্রদর্শন করে: একটি প্রস্তাবিত subset যাচাই করতে একটি যোগ pass খরচ হয়, যখন brute force দিয়ে সমাধান করতে সব 2ⁿ subset খরচ হয় — n = 5-এ তা 32 যাচাই, তুচ্ছ; n = 300-এ তা এমন subset যা তুমি কখনো গণনা করতে পারতে এমন পরমাণুর চেয়েও বেশি। Certificate (7, 23) এমন কেউ মাইক্রোসেকেন্ডে যাচাই করে যে বড় আকারে জোর দিয়ে তা কখনো খুঁজে পেত না। উদাহরণটি (np_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"verify (7, 23): True\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level প্রতিটি machine-এর নিচের machine গুলো অধ্যয়ন করে: computation কী, কোন সমস্যার আদৌ algorithmic সমাধান আছে, আর কোন সমাধানযোগ্য সমস্যা সস্তা বা ধ্বংসাত্মকভাবে ব্যয়বহুল। এটি সবচেয়ে প্রমাণ-ভারী honours বিষয় — আর Level 23-এর logic ও প্রমাণ কৌশল তার প্রবেশ টিকিট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: brute force 31 subset যাচাই করবে — এটি 32 যাচাই করে, কারণ খালি subset 2⁵-এর একটি; power set গণনায় off-by-one হলো চিরায়ত পিছলানো। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l30-lexer": {
  "why": "Compilation character-এ চিন্তা করতে অস্বীকার করে শুরু হয়। নিচের lexer হলো বিশ লাইনে পুরো পর্যায়: regex pattern-এর একটি ক্রমবদ্ধ তালিকা — আর ক্রম একটি design সিদ্ধান্ত, কারণ 'while'-কে IDENT তাকে নাম হিসেবে গেলা আগে KEYWORD হিসেবে চেষ্টা করতে হবে। Number, identifier, operator typed token হিসেবে বেরিয়ে আসে; পরের পাঠের parser আর কখনো একটি কাঁচা character দেখবে না। উদাহরণটি (lexer_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"[('ID', 'total'), ('OP', '='), ('ID', 'price'), ('OP', '*'), ('NUM', '2'), ('OP', '+'), ('NUM', '10')]\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level ছয়টি পাঠ জুড়ে একটি ছোট কার্যকর compiler বানায় — lexer, parser, semantic যাচাইকারী, intermediate code, একটি stack-machine back end, ও একটি optimizer — প্রতিটি পর্যায় একটি আসল, চালানো যায় এমন অংশ। এখানে Level 29-এর grammar theory থাকা বন্ধ করে এই course-এর প্রতিটি program-এর জন্য তুমি ব্যবহার করা tool হতে শুরু করে।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: '=='-এর জন্য '=' দুবার হাজির হবে — OP pattern '=='-কে আগে তালিকাভুক্ত করে, তাই maximal munch দুই-character operator-কে একটি token হিসেবে নেয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l30-parser": {
  "why": "সরল expression grammar E → E + E | E * E | NUM অস্পষ্ট (Level 29-এর সতর্কবার্তা): '2 + 3 * 4'-এর দুটি গাছ, অতএব দুটি মান (20 বনাম 14)। সমাধান হলো স্তরবিন্যাস — E + সামলায়, T * সামলায়, F atom সামলায় — তাই * প্রতিটি গাছে গভীরে বাধ্য হয় ও আগে মূল্যায়িত হয়। নিচের parser ঠিক সেই স্তরিত grammar বাস্তবায়ন করে, প্রতি পরিবর্তনশীলে একটি function, আর গাছ ছাপে: ('+', 2, ('*', 3, 4)) — কাঠামোটাই precedence, আলাদা নিয়মপুস্তক লাগে না। উদাহরণটি (parser_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"('+', 2, ('*', 3, 4))\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level ছয়টি পাঠ জুড়ে একটি ছোট কার্যকর compiler বানায় — lexer, parser, semantic যাচাইকারী, intermediate code, একটি stack-machine back end, ও একটি optimizer — প্রতিটি পর্যায় একটি আসল, চালানো যায় এমন অংশ। এখানে Level 29-এর grammar theory থাকা বন্ধ করে এই course-এর প্রতিটি program-এর জন্য তুমি ব্যবহার করা tool হতে শুরু করে।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: ('*', ('+', 2, 3), 4) — সেই গাছ বন্ধনী যা তৈরি করত; তা ছাড়া + কে মূল হতে হবে কারণ parse_E হলো প্রবেশ ও তার operator শেষে গ্রহণ করে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l30-semantic": {
  "why": "'x + 2' সুন্দরভাবে parse হয় — আর x ঘোষিত না হওয়া পর্যন্ত অর্থহীন। নিচের evaluator হলো semantic যাচাইকারীও: একটি identifier-এ আঘাত পরিবেশে (runtime symbol table) তা খোঁজে, আর একটি মিস চিরায়ত ত্রুটি তোলে, variable-এর নামসহ report করা, ঠিক যেখান থেকে একটি আসল compiler-এর 'undefined variable' আসে। আগে কাঠামো (parser), দ্বিতীয়ত অর্থ (এই পর্যায়), শেষে মান — পৃথকীকরণই কারণ error বার্তা একটি program কোন ধরনের ভুল তা নিয়ে এত নিখুঁত হতে পারে। উদাহরণটি (eval_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"value: 160\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level ছয়টি পাঠ জুড়ে একটি ছোট কার্যকর compiler বানায় — lexer, parser, semantic যাচাইকারী, intermediate code, একটি stack-machine back end, ও একটি optimizer — প্রতিটি পর্যায় একটি আসল, চালানো যায় এমন অংশ। এখানে Level 29-এর grammar theory থাকা বন্ধ করে এই course-এর প্রতিটি program-এর জন্য তুমি ব্যবহার করা tool হতে শুরু করে।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: প্রথম লাইন একটি ত্রুটি ছাপবে কারণ 'price * qty' নাম ও সংখ্যা মেশায় — নাম design অনুযায়ী ENV দিয়ে মেটে; সেই মেটানোই semantic analysis কাজ করছে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l30-intermediate": {
  "why": "কেন গাছ থেকে সরাসরি machine code নয়? কারণ N language × M machine-এর N×M compiler লাগত; একটি IR দিয়ে তা N front end + M back end। নিচের TAC generator মূল্যায়ক যেই গাছ হেঁটেছে তাই হাঁটে, কিন্তু মান হিসাব করার বদলে এটি নির্দেশ নির্গত করে — প্রতিটি binary operation একটি নতুন সাময়িক পায়, মূল্যায়ন ক্রমে, যতক্ষণ না পুরো expression একটি সমতল, machine-আকারের তালিকা হয়। এই পাঠগুলো জুড়ে দুটি output তুলনা করো: evaluator 160 ছেপেছে; TAC 160-এর রেসিপি ছাপে। উদাহরণটি (tac_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"t1 = price * qty\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level ছয়টি পাঠ জুড়ে একটি ছোট কার্যকর compiler বানায় — lexer, parser, semantic যাচাইকারী, intermediate code, একটি stack-machine back end, ও একটি optimizer — প্রতিটি পর্যায় একটি আসল, চালানো যায় এমন অংশ। এখানে Level 29-এর grammar theory থাকা বন্ধ করে এই course-এর প্রতিটি program-এর জন্য তুমি ব্যবহার করা tool হতে শুরু করে।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: এক লাইনে 't1 = price * qty + 10' — TAC তা নিষেধ করে; +-টি তার নিজের লাইন ও নিজের সাময়িক পায়, যা পুরো শৃঙ্খলা। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l30-codegen": {
  "why": "Back end ছোট কারণ target সৎ: TAC-এর এক-operation লাইন এক-থেকে-একে stack নির্দেশে map হয়। একই post-order হাঁটা এখন PUSH price, PUSH qty, MUL, PUSH 10, ADD নির্গত করে — আর একটি ছোট virtual machine তালিকা সম্পাদন করে 160 ছাপে, পাঠ 3-তে evaluator হিসাব করা মান, এবার একটি machine model-এ চলা তৈরি করা code দিয়ে পৌঁছানো। উদাহরণটি (codegen_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"('PUSH', 50)\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level ছয়টি পাঠ জুড়ে একটি ছোট কার্যকর compiler বানায় — lexer, parser, semantic যাচাইকারী, intermediate code, একটি stack-machine back end, ও একটি optimizer — প্রতিটি পর্যায় একটি আসল, চালানো যায় এমন অংশ। এখানে Level 29-এর grammar theory থাকা বন্ধ করে এই course-এর প্রতিটি program-এর জন্য তুমি ব্যবহার করা tool হতে শুরু করে।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: নির্দেশ তালিকা PUSH price ছাপবে — এই back end নির্গমন সময়ে ENV দিয়ে নাম মেটায়, তাই মান push হয়, নাম নয়; দুটি design (bake-in বনাম LOAD) গুলিয়ে ফেলাই পিছলানো। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l30-optimization": {
  "why": "Optimization হলো একমাত্র পর্যায় যাকে code বদলাতে দেওয়া হয় — অর্থ কখনো নয়। নিচের folder গাছ নিচ থেকে ওপরে হাঁটে: ধ্রুব সন্তান পাটিগণিতে ভেঙে পড়ে (2 + 3 → 5, 10 − 4 → 6, তারপর মূলে 5 * 6 → 30), আর পরিচয় নিয়ম পাটিগণিত যা পারে না তা ছাঁটে (x * 1 → x, y + 0 → y)। প্রতিটি পুনর্লেখা একটি নিয়ম দিয়ে যুক্তিসঙ্গত হতে হবে; যেকোনো input-এর জন্য মান বদলায় এমন একটি 'optimization' optimization নয়, তা একটি miscompilation — একটি compiler-এর থাকতে পারে এমন সবচেয়ে বিপজ্জনক bug শ্রেণি, কারণ এটি সঠিক program নীরবে নষ্ট করে। উদাহরণটি (optimize_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"30\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "এই level ছয়টি পাঠ জুড়ে একটি ছোট কার্যকর compiler বানায় — lexer, parser, semantic যাচাইকারী, intermediate code, একটি stack-machine back end, ও একটি optimizer — প্রতিটি পর্যায় একটি আসল, চালানো যায় এমন অংশ। এখানে Level 29-এর grammar theory থাকা বন্ধ করে এই course-এর প্রতিটি program-এর জন্য তুমি ব্যবহার করা tool হতে শুরু করে।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: দ্বিতীয় লাইন অপরিবর্তিত ('*', 'x', 1) ছাপবে কারণ 'x একটি সংখ্যা নয়' — ভাঁজ একমাত্র রূপান্তর নয়; পরিচয় নিয়ম x * 1 → x-এর x-এর কোনো মান লাগে না। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l31-search": {
  "why": "AI-এর প্রথম চাল হলো একটি সমস্যাকে একটি graph-এ বদলে তা হাঁটা। নিচের BFS A → B → D → G খোঁজে — প্রমাণিতভাবে সবচেয়ে কম লাফ, কারণ BFS বলয়ে বলয়ে state প্রসারিত করে: প্রতিটি 1-লাফ state যেকোনো 2-লাফ state-এর আগে পরিদর্শিত হয়, তাই প্রথমবার goal পৌঁছালে তার চেয়ে ছোট কোনো path থাকতে পারে না। Parent map হলো যা 'পরিদর্শিত'-কে একটি আসল path-এ বদলে দেয়: প্রতিটি state মনে রাখে কে তাকে আবিষ্কার করেছে, আর path goal থেকে পেছনে পড়া হয়। উদাহরণটি (search_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"shortest path A -> G: ['A', 'B', 'D', 'G']\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "তোমার ক্যারিয়ারে তুমি যেই প্রতিটি AI tool নিরীক্ষণ, আক্রমণ বা রক্ষা করবে তা এই level-এর ধারণা থেকে শুরু: একটি machine কীভাবে একটি space অনুসন্ধান করে, জ্ঞান উপস্থাপন করে, program করা ছাড়া data থেকে pattern শেখে, আর সৎভাবে মূল্যায়িত হয়। এটি foundation level — ML দাবি সমালোচনামূলকভাবে পড়তে ও হাতে ছোট, আসল model বানাতে যথেষ্ট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: path ['A', 'C', 'E', 'G'] বেরিয়ে আসবে — সমান ছোট, কিন্তু B, C-এর আগে queue-তে ঢোকে (adjacency ক্রম), তাই D-এর parent হলো B আর B-route-ই পুনর্গঠিত হয়। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l31-knowledge": {
  "why": "Data থেকে শেখার আগে AI হাতে জ্ঞান উপস্থাপন করত: তথ্য ভেতরে, তাদের উপর নিয়ম, সিদ্ধান্ত বাইরে। নিচের engine হলো পনেরো লাইনে পুরো ধারণা — এটি {fever, cough} থেকে flu_suspected পায়, তারপর {fever} থেকে take_rest, আর একটি পূর্ণ pass নতুন কিছু যোগ না করলে থামে। লক্ষ্য করো এটি যা পায়নি: see_doctor-এর body_ache লাগে, যা কোনো তথ্য বা নিয়ম দেয় না — engine সুস্থ (এটি শুধু যা আসে তাই পায়) ও বিশ্বের তুলনায় সৎভাবে অসম্পূর্ণ (এটি অনুপস্থিত ভিত্তি উদ্ভাবন করতে পারে না)। উদাহরণটি (rules_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"derived: flu_suspected\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "তোমার ক্যারিয়ারে তুমি যেই প্রতিটি AI tool নিরীক্ষণ, আক্রমণ বা রক্ষা করবে তা এই level-এর ধারণা থেকে শুরু: একটি machine কীভাবে একটি space অনুসন্ধান করে, জ্ঞান উপস্থাপন করে, program করা ছাড়া data থেকে pattern শেখে, আর সৎভাবে মূল্যায়িত হয়। এটি foundation level — ML দাবি সমালোচনামূলকভাবে পড়তে ও হাতে ছোট, আসল model বানাতে যথেষ্ট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: see_doctor পাওয়া যাবে কারণ 'তার দুটি শর্ত কাছাকাছি' — নিয়ম শর্ত হলো set, আর subset হলো সব-বা-কিছুই-না; body_ache-এর অনুপস্থিতি নির্ণায়ক। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l31-supervised": {
  "why": "Supervised learning হাতে-লেখা নিয়মকে উদাহরণ দিয়ে বদলায়: machine-কে input–output জোড়া দেখাও ও তাকে function মানিয়ে নিতে দাও। নিচের regression least squares দিয়ে study-hours → marks মানিয়ে নেয় ও ঢাল 1.97, intercept 0.09 পায় — data y = 2x-এর কাছে তৈরি ছিল, আর fit তা ফিরে পায়, দোলাসহ। ভবিষ্যদ্বাণী তখন পাটিগণিত: x = 6 দিলে 11.91 হয়। এখানে কিছুই পড়া বা নম্বর 'বোঝে' না; দাবি সংকীর্ণ ও যাচাইযোগ্য: এই রেখা দেওয়া বিন্দুতে বর্গ ত্রুটি কমায়। উদাহরণটি (regression_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"slope: 1.97 intercept: 0.09\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "তোমার ক্যারিয়ারে তুমি যেই প্রতিটি AI tool নিরীক্ষণ, আক্রমণ বা রক্ষা করবে তা এই level-এর ধারণা থেকে শুরু: একটি machine কীভাবে একটি space অনুসন্ধান করে, জ্ঞান উপস্থাপন করে, program করা ছাড়া data থেকে pattern শেখে, আর সৎভাবে মূল্যায়িত হয়। এটি foundation level — ML দাবি সমালোচনামূলকভাবে পড়তে ও হাতে ছোট, আসল model বানাতে যথেষ্ট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: ঢাল ঠিক 2.0 বের হবে — আসল data দোলে (2.1, 5.9, 8.1), তাই fit 1.97; হুবহু পুনরুদ্ধার শুধু হুবহু data-র জন্য ঘটে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l31-unsupervised": {
  "why": "লেবেল সরালে learning চরিত্র বদলায়: কোনো উত্তর-চাবি নেই, শুধু প্রস্তাব করার কাঠামো। নিচের ছয়টি বিন্দুতে k-means দুই round-এ দুটি দৃশ্যমান দ্বীপ খোঁজে — নিকটতমে বরাদ্দ, গড় আবার হিসাব — আর তারপর থামে, কারণ round 3 কিছু বদলাত না: বরাদ্দ ধাপ ও গড় ধাপ একটি সন্ধিতে পৌঁছেছে। সন্ধি একটি স্থানীয় সর্বোত্তম: ভিন্ন শুরুর centroid algorithm-কে একটি খারাপ দলে আটকে দিতে পারে, যার কারণে আসল k-means কয়েকটি শুরু থেকে চালানো হয় ও সেরাটি (সর্বনিম্ন মোট cluster-ভেতরে দূরত্ব) রাখা হয়। উদাহরণটি (kmeans_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"step 1 centroids: [(1.33, 1.33), (8.33, 8.33)]\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "তোমার ক্যারিয়ারে তুমি যেই প্রতিটি AI tool নিরীক্ষণ, আক্রমণ বা রক্ষা করবে তা এই level-এর ধারণা থেকে শুরু: একটি machine কীভাবে একটি space অনুসন্ধান করে, জ্ঞান উপস্থাপন করে, program করা ছাড়া data থেকে pattern শেখে, আর সৎভাবে মূল্যায়িত হয়। এটি foundation level — ML দাবি সমালোচনামূলকভাবে পড়তে ও হাতে ছোট, আসল model বানাতে যথেষ্ট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: একটি step 3 ভিন্ন centroid ছাপবে — step 2-এর পরে কিছু সরেনি; loop স্থিতিশীলতায় ভাঙে, যা এখানে মিলনের সংজ্ঞা। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l31-neural": {
  "why": "নিচের perceptron চারটি উদাহরণ থেকে AND শেখে — শুধু ফলাফল নয়, পদ্ধতি দেখো: এটি কিছু না জেনে শুরু করে (ওজন 0), ভবিষ্যদ্বাণী করে, আর শুধু ভুলে তার ওজন lr · error · input দিয়ে ঠেলে। ছোট সংশোধনের ছয়টি epoch সীমানা w = [0.2, 0.1], b = −0.2 কাটে, যার পরে চারটি ধাঁচই সঠিকভাবে শ্রেণিবদ্ধ হয়। এখানে learning হলো দৃশ্যত ত্রুটি-চালিত হিসাবরক্ষণ ছাড়া কিছুই নয় — বিশ লাইনে লিখলে রহস্য টেকে না। উদাহরণটি (perceptron_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"learned AND in epoch 6\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "তোমার ক্যারিয়ারে তুমি যেই প্রতিটি AI tool নিরীক্ষণ, আক্রমণ বা রক্ষা করবে তা এই level-এর ধারণা থেকে শুরু: একটি machine কীভাবে একটি space অনুসন্ধান করে, জ্ঞান উপস্থাপন করে, program করা ছাড়া data থেকে pattern শেখে, আর সৎভাবে মূল্যায়িত হয়। এটি foundation level — ML দাবি সমালোচনামূলকভাবে পড়তে ও হাতে ছোট, আসল model বানাতে যথেষ্ট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: ওজন 'প্রামাণিক' কিছুতে যেমন [1, 1] মিলিত হবে — algorithm তার ঠেলা পথ পৌঁছায় এমন প্রথম পৃথককারীতে থামে ([0.2, 0.1], b = −0.2); অসীম রেখা AND পৃথক করে। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 },
 "l31-evaluation": {
  "why": "একটি model একটি দাবি; এই পাঠ হলো দাবি কীভাবে নিরীক্ষিত হয়। নিচের matrix — TP 4, FP 2, FN 1, TN 3 — accuracy 0.70, precision 0.67, recall 0.80 দেয়: তিনটি ভিন্ন প্রশ্নের উত্তর দেওয়া তিনটি ভিন্ন সংখ্যা, আর কোনটি সর্বোত্তম করতে হবে তা পাটিগণিতের ছদ্মবেশে একটি মূল্যবোধ সিদ্ধান্ত। আসল malware মিস করা একটি malware scanner (কম recall) বিপজ্জনকভাবে ব্যর্থ; আসল mail flag করা একটি spam filter (কম precision) বিরক্তিকরভাবে ব্যর্থ — একই matrix, বিপরীত অগ্রাধিকার। উদাহরণটি (metrics_lab.py) এটি প্রমাণ করা সবচেয়ে ছোট সম্পূর্ণ case।",
  "output": "\"TP 4 FP 2 FN 1 TN 3\" থেকে শুরু করো — প্রতিটি পরের লাইন নিয়ম ক্রমে প্রয়োগ করা। তোমার run আলাদা হলে আগে input, তারপর setup তুলনা করো।",
  "job": "তোমার ক্যারিয়ারে তুমি যেই প্রতিটি AI tool নিরীক্ষণ, আক্রমণ বা রক্ষা করবে তা এই level-এর ধারণা থেকে শুরু: একটি machine কীভাবে একটি space অনুসন্ধান করে, জ্ঞান উপস্থাপন করে, program করা ছাড়া data থেকে pattern শেখে, আর সৎভাবে মূল্যায়িত হয়। এটি foundation level — ML দাবি সমালোচনামূলকভাবে পড়তে ও হাতে ছোট, আসল model বানাতে যথেষ্ট।",
  "wrong": "সাধারণ ভুল প্রত্যাশা: শুধু positive গুণে accuracy 0.75 ছাপা — accuracy TN-ও গণনা করে: (4 + 3)/10 = 0.70; true negative ভোলা হলো চিরায়ত প্রথম পিছলানো। আর স্থায়ী নিয়ম: debug করার আগে উদাহরণটি হুবহু যেভাবে লেখা আছে আবার চালাও — বেশিরভাগ 'bug' ছাপা উদাহরণ থেকে সরে যাওয়া।"
 }
};

export const CTF_WHY6_5: Record<string, SixWhy> = {
 "ctf-bigo": {
  "why": "This artifact exists because growth class is read from ratios, not from single timings — the table is the smallest evidence that forces the classification.",
  "parts": [
   "A: 700 → 7,000 = ×10 steps for ×10 input — linear.",
   "B: 10,000 → 1,000,000 = ×100 steps for ×10 input — quadratic.",
   "C: 14 → 20 = +6 steps — logarithmic.",
   "The flag template names B's class."
  ],
  "output": "Only one row's ratio is 100 — the square signature — so the flag's class word is determined, not guessed.",
  "meaning": "You classified from evidence: the same ratio test the Complexity Bench lab drilled, now under CTF conditions.",
  "job": "DSA is the most-tested subject in both your degree and technical interviews: every claim in this level is an algorithm you run, count, and defend. Security work uses the same structures daily — hash tables in every tool, graphs in attack paths, queues in alert pipelines.",
  "wrong": "The common wrong attempt is picking A because 7,000 'looks big' — absolute size at small n says nothing; growth ratio says everything."
 },
 "ctf-sqlflag": {
  "why": "This artifact exists because a join is a computation, not a lookup: the answer (the shared course) is stored in neither table and exists only in their combination.",
  "parts": [
   "students contributes names keyed by id.",
   "grades contributes courses keyed by student_id.",
   "The ON condition pairs them; Cy, gradeless, drops out of the INNER JOIN.",
   "DB is the course under both Ana and Bil."
  ],
  "output": "The joined set has exactly three rows, and exactly one course repeats across two students — the flag is determined by the data, not by guessing.",
  "meaning": "You performed by hand the operation every report depends on — and saw why normalized data needs joins to speak.",
  "job": "Every application you have secured in Levels 0–22 sits on a database; this level teaches the database itself: how data is modelled, queried, kept consistent under failures and concurrency, and made fast. DBMS is also among the most exam-heavy subjects in your degree — and its core is Level 23's set theory with tables.",
  "wrong": "The common wrong attempt is answering 'Algo' because it is Ana's second course — the question asks for the course shared by BOTH students, which only the join reveals."
 },
 "ctf-grammar": {
  "why": "This artifact exists because a derivation is a computation you can audit line by line: each step cites exactly one production, and the discipline (leftmost) is what parsers in the next level will mechanize.",
  "parts": [
   "S ⇒ aSb: outer pair placed.",
   "aSb ⇒ aaSbb: inner pair placed (leftmost S rewritten).",
   "aaSbb ⇒ aabb: S → ε terminates the derivation.",
   "Three steps, one production each — a complete audit trail."
  ],
  "output": "The target string aabb is reached in exactly 3 steps and no other production sequence reaches it — the derivation is a proof of membership, checkable mechanically.",
  "meaning": "You executed the exact procedure a parser automates — derivation as disciplined rewriting — one level before building the parser itself.",
  "job": "This level studies the machines beneath every machine: what computation IS, which problems have algorithmic solutions at all, and which solvable problems are cheap or ruinously expensive. It is the most proof-heavy honours subject — and Level 23's logic and proof techniques are its entry ticket.",
  "wrong": "The common wrong attempt is rewriting with S → aSb once more at the end, producing aaSbb → aaaSbbb, which can never terminate at aabb — the ε production is the only exit, and spotting exits is the skill."
 }
};

export const CTF_WHY6_5_BN: Record<string, SixWhy> = {
 "ctf-bigo": {
  "why": "এই artifact আছে কারণ বৃদ্ধি শ্রেণি অনুপাত থেকে পড়া হয়, একক সময় থেকে নয় — ছকটি শ্রেণিবিভাগ বাধ্য করা সবচেয়ে ছোট প্রমাণ।",
  "parts": [
   "A: 700 → 7,000 = ×10 input-এ ×10 ধাপ — linear।",
   "B: 10,000 → 1,000,000 = ×10 input-এ ×100 ধাপ — quadratic।",
   "C: 14 → 20 = +6 ধাপ — logarithmic।",
   "Flag template B-এর শ্রেণির নাম দেয়।"
  ],
  "output": "মাত্র একটি সারির অনুপাত 100 — বর্গের স্বাক্ষর — তাই flag-এর শ্রেণি শব্দ নির্ধারিত, অনুমান নয়।",
  "meaning": "তুমি প্রমাণ থেকে শ্রেণিবদ্ধ করেছ: Complexity Bench lab-এর সেই একই অনুপাত পরীক্ষা, এখন CTF পরিবেশে।",
  "job": "DSA তোমার degree ও technical interview দুটোতেই সবচেয়ে বেশি পরীক্ষিত বিষয়: এই level-এর প্রতিটি দাবি একটি algorithm যা তুমি চালাবে, গুনবে, আর রক্ষা করবে। Security কাজ প্রতিদিন একই কাঠামো ব্যবহার করে — প্রতিটি tool-এ hash table, attack path-এ graph, alert pipeline-এ queue।",
  "wrong": "সাধারণ ভুল চেষ্টা হলো A বাছা কারণ 7,000 'বড় দেখায়' — ছোট n-এ পরম আকার কিছু বলে না; বৃদ্ধি অনুপাতই সব বলে।"
 },
 "ctf-sqlflag": {
  "why": "এই artifact আছে কারণ একটি join একটি হিসাব, lookup নয়: উত্তরটি (ভাগ করা course) কোনো table-এই রাখা নেই ও শুধু তাদের সংমিশ্রণে বিদ্যমান।",
  "parts": [
   "students id দিয়ে key করা নাম অবদান রাখে।",
   "grades student_id দিয়ে key করা course অবদান রাখে।",
   "ON শর্ত তাদের জোড়া দেয়; Cy, gradeহীন, INNER JOIN থেকে বাদ পড়ে।",
   "DB হলো Ana ও Bil দুজনের নিচের course।"
  ],
  "output": "যুক্ত set-এ ঠিক তিনটি row আছে, আর ঠিক একটি course দুজন ছাত্র জুড়ে পুনরাবৃত্ত হয় — flag data দিয়ে নির্ধারিত, অনুমানে নয়।",
  "meaning": "তুমি হাতে সেই operation সম্পাদন করেছ যার উপর প্রতিটি report নির্ভর করে — আর দেখেছ কেন normalized data-র কথা বলতে join লাগে।",
  "job": "Level 0–22-তে তুমি যেই প্রতিটি application secure করেছ তা একটি database-এর উপর বসে; এই level database-টাই শেখায়: data কীভাবে model হয়, query হয়, ব্যর্থতা ও concurrency-র মধ্যে সামঞ্জস্যপূর্ণ থাকে, আর দ্রুত হয়। DBMS তোমার degree-র সবচেয়ে পরীক্ষা-ভারী বিষয়গুলোর একটিও — আর তার প্রাণ হলো table দিয়ে Level 23-এর set theory।",
  "wrong": "সাধারণ ভুল চেষ্টা হলো 'Algo' উত্তর দেওয়া কারণ এটি Ana-র দ্বিতীয় course — প্রশ্ন দুজন ছাত্রের ভাগ করা course চায়, যা শুধু join প্রকাশ করে।"
 },
 "ctf-grammar": {
  "why": "এই artifact আছে কারণ একটি derivation হলো লাইন ধরে নিরীক্ষণ করা যায় এমন একটি হিসাব: প্রতিটি ধাপ ঠিক একটি production উদ্ধৃত করে, আর শৃঙ্খলা (বামতম) হলো যা পরের level-এর parser যান্ত্রিক করবে।",
  "parts": [
   "S ⇒ aSb: বাইরের জোড়া বসানো।",
   "aSb ⇒ aaSbb: ভেতরের জোড়া বসানো (বামতম S আবার লেখা)।",
   "aaSbb ⇒ aabb: S → ε derivation শেষ করে।",
   "তিনটি ধাপ, প্রতিটিতে একটি production — একটি সম্পূর্ণ নিরীক্ষণ পথ।"
  ],
  "output": "লক্ষ্য string aabb ঠিক 3 ধাপে পৌঁছানো হয় আর অন্য কোনো production অনুক্রম তাতে পৌঁছায় না — derivation হলো সদস্যপদের একটি প্রমাণ, যান্ত্রিকভাবে যাচাইযোগ্য।",
  "meaning": "তুমি ঠিক যেই পদ্ধতি একটি parser স্বয়ংক্রিয় করে তা সম্পাদন করেছ — শৃঙ্খলাবদ্ধ আবার লেখা হিসেবে derivation — parser নিজে বানানোর এক level আগে।",
  "job": "এই level প্রতিটি machine-এর নিচের machine গুলো অধ্যয়ন করে: computation কী, কোন সমস্যার আদৌ algorithmic সমাধান আছে, আর কোন সমাধানযোগ্য সমস্যা সস্তা বা ধ্বংসাত্মকভাবে ব্যয়বহুল। এটি সবচেয়ে প্রমাণ-ভারী honours বিষয় — আর Level 23-এর logic ও প্রমাণ কৌশল তার প্রবেশ টিকিট।",
  "wrong": "সাধারণ ভুল চেষ্টা হলো শেষে আরও একবার S → aSb দিয়ে আবার লেখা, aaSbb → aaaSbbb তৈরি করা, যা কখনো aabb-তে শেষ হতে পারে না — ε production হলো একমাত্র বের হওয়ার পথ, আর বের হওয়ার পথ ধরা হলো দক্ষতা।"
 }
};

export const LAB_WHY6_5: Record<string, SixWhy> = {
 "lab-l23-logic": {
  "why": "This lab exists because discrete math is a doing subject: identities and equivalences become permanent only after you have checked them case by case yourself, including one claim that turns out to be false.",
  "parts": [
   "Task 1: equivalence by full truth table (8 rows).",
   "Task 2: a set identity computed on both sides.",
   "Task 3: a universal claim killed by one small counterexample.",
   "Task 4: naming the transferable method."
  ],
  "output": "Each verdict follows from complete enumeration or a single decisive witness — no verdict rests on sampling or opinion.",
  "meaning": "You now own the three settlement moves of the whole subject: exhaust, witness, counterexample.",
  "job": "Discrete math is the language under every later subject in this section: Big-O is combinatorics and logs, databases are set theory with tables, compilers and Theory of Computation are logic and graphs. Examiners test it directly; engineers use it whenever they count, argue correctness, or model a system.",
  "wrong": "The classic wrong attempt is settling task 3 by testing two or three 'nice' graphs and declaring the claim true — the counterexample is the smallest graph there is: a single edge."
 },
 "lab-l24-algo": {
  "why": "This lab exists because complexity claims must be earned from counts: the ratio test used here (how steps scale when n scales) is the fastest reliable classifier in interviews and design reviews alike.",
  "parts": [
   "Task 1: ×10 → ×10 — linear.",
   "Task 2: ×10 → ×100 — quadratic.",
   "Task 3: ×10 → +3 — logarithmic.",
   "Task 4: extrapolate the class to production scale."
  ],
  "output": "Each verdict follows from one division — the ratio between step growth and input growth — so the evidence and the conclusion are the same table.",
  "meaning": "You can now classify an unknown algorithm's growth from two measurements and say what it means at scale — the core move of this whole level.",
  "job": "DSA is the most-tested subject in both your degree and technical interviews: every claim in this level is an algorithm you run, count, and defend. Security work uses the same structures daily — hash tables in every tool, graphs in attack paths, queues in alert pipelines.",
  "wrong": "The classic wrong attempt is timing the workloads in milliseconds and classifying by the stopwatch — machine load then decides your 'complexity'. Counts do not care which machine ran them."
 },
 "lab-l25-adder": {
  "why": "This lab exists because combinational design is a pipeline (spec → table → map → gates → exhaustive check) and skipping any stage is how wrong hardware gets built confidently.",
  "parts": [
   "Task 1: read the spec into table rows.",
   "Task 2: K-map grouping to a minimal expression.",
   "Task 3: fault diagnosis from a single disagreeing row.",
   "Task 4: exhaustive verification as the closing discipline."
  ],
  "output": "Every answer is forced by the 8-row table — the spec, the minimization and the fault all live in the same evidence.",
  "meaning": "You ran the full combinational pipeline once, end to end — the same flow your exam's design question grades.",
  "job": "Digital logic is where software meets physics: every CPU instruction in the next level executes on circuits built from this level's gates and flip-flops. Examiners test truth tables and K-maps mechanically; engineers who understand this layer debug timing and hardware faults others cannot even describe.",
  "wrong": "The classic wrong attempt is jumping to gates from the English spec; row 000 (even but zero) is precisely the row that punishes skipping the table."
 },
 "lab-l26-trace": {
  "why": "This lab exists because assembly competence IS trace competence: no debugger output means anything to a reader who cannot first produce the trace by hand.",
  "parts": [
   "Task 1: one pass of the loop, traced.",
   "Task 2: full trace to the exit code.",
   "Task 3: a two-fault bug found by the same table.",
   "Task 4: the predict-before-run discipline named."
  ],
  "output": "Each verdict is a line in one register table — the loop total, the helper's wrong register, and the exit code are all read off the same evidence.",
  "meaning": "You can now sit in front of an unfamiliar listing and interrogate it systematically — the exact skill Level 19's reverse engineering assumed and Level 30's compiler will reuse.",
  "job": "Assembly is the last abstraction before the machine itself: registers, addressing and interrupts explain what compilers emit, what debuggers show, and what your Level 19 reverse-engineering lessons read. Computer Architecture examiners test exactly these traces.",
  "wrong": "The classic wrong attempt is tracing the loop as counting UP (partials 1, 3, 6, 10) — the total coincides (10), masking the error until task 3's register discipline exposes it."
 },
 "lab-l27-sql": {
  "why": "This lab exists because SQL competence is answering business questions with the right shape the first time — and because every question here is decidable by two habits: ask who disappears, and predict the row count.",
  "parts": [
   "Q1: census report — LEFT JOIN + COUNT(column).",
   "Q2: filter-then-aggregate discipline.",
   "Q3: HAVING for group filters.",
   "Q4: Cartesian-product diagnosis by row arithmetic."
  ],
  "output": "Each answer is checkable against the tiny dataset by hand — the counts and averages are small enough that no verdict rests on trusting the engine.",
  "meaning": "You now interrogate a database the way reports actually demand — and you can defend each query's shape in words before running it.",
  "job": "Every application you have secured in Levels 0–22 sits on a database; this level teaches the database itself: how data is modelled, queried, kept consistent under failures and concurrency, and made fast. DBMS is also among the most exam-heavy subjects in your degree — and its core is Level 23's set theory with tables.",
  "wrong": "The classic wrong attempt is reaching for INNER JOIN on Q1 out of habit — Cy vanishes and the 'including students with none' requirement fails silently, the most dangerous kind of wrong."
 },
 "lab-l28-git": {
  "why": "This lab exists because Git fluency is motor skill, not trivia: the loop must be boring in your hands before a real team's 2 a.m. merge makes it interesting.",
  "parts": [
   "Branch from clean main.",
   "Small honest commits.",
   "A real conflict, semantically resolved.",
   "Reviewed merge; narratable graph history."
  ],
  "output": "The graph output is the verification: two parents on the merge commit and a readable story in the log are properties no amount of 'it worked on my screen' can substitute for.",
  "meaning": "You have performed the exact collaboration protocol used by professional teams — and manufactured, survived and documented a merge conflict in safety.",
  "job": "Everything you have built in CyberLab so far was solo and small. This level is how software survives teams, time and change: a lifecycle, written requirements, designs people can review, tests that catch regressions, Git that records history honestly, and an agile rhythm that ships in slices. Software Engineering is the honours subject that turns programmers into engineers.",
  "wrong": "The classic wrong attempt is resolving the conflict by picking a side wholesale and calling it done — the lab's check is that BOTH intents survive in the merged line; a one-sided resolution fails the debrief question."
 },
 "lab-l29-machines": {
  "why": "This lab exists because machine design is a craft of summaries: the whole skill is deciding what a machine must remember — and this lab makes you decide it three times, at three levels of the hierarchy.",
  "parts": [
   "DFA: product of two one-bit summaries.",
   "CFG: symmetric wrapping productions.",
   "TM: marking sweeps externalize the count.",
   "Verification: boundary witnesses per condition."
  ],
  "output": "Each artefact is verified against strings chosen to BREAK it (intruders per clause) — a design that survives adversarial tests is the only kind this course certifies.",
  "meaning": "You can now move up and down the hierarchy deliberately: given a language, you can name its class, design its machine, and prove your design against witnesses.",
  "job": "This level studies the machines beneath every machine: what computation IS, which problems have algorithmic solutions at all, and which solvable problems are cheap or ruinously expensive. It is the most proof-heavy honours subject — and Level 23's logic and proof techniques are its entry ticket.",
  "wrong": "The classic wrong attempt is a DFA with a state per string prefix tried so far — an infinite regress the brief's two-bit summary dissolves; if your state meanings contain '…and so on', the design has not found its summary yet."
 },
 "lab-l30-pipeline": {
  "why": "This lab exists because a pipeline is understood only end-to-end: each phase's output is the next phase's evidence, and the lab makes you produce and audit all six hand-offs for one expression.",
  "parts": [
   "Phases 1–2: tokens and the precedence-shaped tree.",
   "Phase 3: symbol-table verdicts.",
   "Phases 4–5: TAC then stack code, VM-verified at 85.",
   "Phase 6: a justified no-op — restraint as an optimization skill."
  ],
  "output": "The VM's 85 is the cross-phase checksum: lexer, parser, semantics, IR and codegen all agree, or the number would differ — one value auditing five phases.",
  "meaning": "You have operated a complete compiler — small, but with no phase faked or skipped — and can debug one by bisecting its intermediate outputs.",
  "job": "This level builds a small working compiler across six lessons — lexer, parser, semantic checker, intermediate code, a stack-machine back end, and an optimizer — each stage a real, runnable piece. It is where Level 29's grammars stop being theory and start being the tool you have used for every program in this course.",
  "wrong": "The classic wrong attempt is drawing the tree with * at the root ('written left to right') — precedence is structural, and the TAC/stack rows expose the error immediately because their order follows the tree, not the text."
 },
 "lab-l31-metrics": {
  "why": "This lab exists because metrics literacy is a procurement and safety skill: vendors quote the number that flatters them, and the confusion matrix — four counts — is the entire defence.",
  "parts": [
   "Vendor 1: high-recall net, stage one.",
   "Vendor 2: high-precision judge, stage two.",
   "Vendor 3: the never-flag fraud, exposed by recall 0.",
   "Composition: recall at the gate, precision at the bench."
  ],
  "output": "Every verdict in this lab is one division away from four printed counts — no verdict rests on a vendor's chosen summary statistic.",
  "meaning": "You can now audit any classifier claim — security tool, medical model, tutor predictor — with four counts and two questions: what was held out, and which error does this stage exist to prevent?",
  "job": "Every later AI tool you will audit, attack or defend in your career starts from the ideas in this level: how a machine searches a space, represents knowledge, learns patterns from data instead of being programmed with them, and is honestly evaluated. This is the foundation level — enough to read ML claims critically and to build small, real models by hand.",
  "wrong": "The classic wrong attempt is ranking the vendors by accuracy (V3 'wins' at 0.99) — accuracy ranks the majority-class echo first and the mission last; this lab's whole point is the inversion."
 }
};

export const LAB_WHY6_5_BN: Record<string, SixWhy> = {
 "lab-l23-logic": {
  "why": "এই lab আছে কারণ discrete math একটি করার বিষয়: অভেদ ও সমতুল্যতা স্থায়ী হয় শুধু নিজে ক্ষেত্র ধরে যাচাই করার পর — একটি দাবি মিথ্যা বেরোনোসহ।",
  "parts": [
   "Task 1: পূর্ণ truth table দিয়ে সমতুল্যতা (8 সারি)।",
   "Task 2: দুই পাশে হিসাব করা একটি set অভেদ।",
   "Task 3: একটি ছোট counterexample-এ মারা যাওয়া সার্বজনীন দাবি।",
   "Task 4: স্থানান্তরযোগ্য পদ্ধতির নাম দেওয়া।"
  ],
  "output": "প্রতিটি রায় সম্পূর্ণ গণনা বা একটি সিদ্ধান্তমূলক সাক্ষী থেকে আসে — কোনো রায় নমুনা বা মতামতের উপর দাঁড়ায় না।",
  "meaning": "তুমি এখন পুরো বিষয়ের তিনটি মীমাংসা চাল আয়ত্ত করেছ: নিঃশেষ পরীক্ষা, সাক্ষী, counterexample।",
  "job": "Discrete math এই অংশের প্রতিটি পরের বিষয়ের নিচের ভাষা: Big-O হলো combinatorics আর log, database হলো table দিয়ে set theory, compiler ও Theory of Computation হলো logic আর graph। পরীক্ষক সরাসরি এটাই পরীক্ষা করেন; engineer-রা এটি ব্যবহার করেন যখনই গণনা করেন, সঠিকতা যুক্তি দেন, বা কোনো system model করেন।",
  "wrong": "চিরায়ত ভুল চেষ্টা হলো task 3 দু-তিনটি 'ভালো' graph পরীক্ষা করে দাবি সত্য ঘোষণা করা — counterexample হলো সবচেয়ে ছোট graph: একটি মাত্র edge।"
 },
 "lab-l24-algo": {
  "why": "এই lab আছে কারণ complexity দাবি গণনা থেকে অর্জন করতে হয়: এখানে ব্যবহৃত অনুপাত পরীক্ষা (n বাড়লে ধাপ কীভাবে বাড়ে) interview ও design review দুটোতেই দ্রুততম নির্ভরযোগ্য শ্রেণিবিভাগক।",
  "parts": [
   "Task 1: ×10 → ×10 — linear।",
   "Task 2: ×10 → ×100 — quadratic।",
   "Task 3: ×10 → +3 — logarithmic।",
   "Task 4: শ্রেণিকে production আকারে বাড়াও।"
  ],
  "output": "প্রতিটি রায় একটি ভাগ থেকে আসে — ধাপ বৃদ্ধি ও input বৃদ্ধির অনুপাত — তাই প্রমাণ ও সিদ্ধান্ত একই ছক।",
  "meaning": "তুমি এখন দুটি পরিমাপ থেকে অজানা algorithm-এর বৃদ্ধি শ্রেণিবদ্ধ করতে পারো ও আকারে তার মানে বলতে পারো — এই পুরো level-এর মূল চাল।",
  "job": "DSA তোমার degree ও technical interview দুটোতেই সবচেয়ে বেশি পরীক্ষিত বিষয়: এই level-এর প্রতিটি দাবি একটি algorithm যা তুমি চালাবে, গুনবে, আর রক্ষা করবে। Security কাজ প্রতিদিন একই কাঠামো ব্যবহার করে — প্রতিটি tool-এ hash table, attack path-এ graph, alert pipeline-এ queue।",
  "wrong": "চিরায়ত ভুল চেষ্টা হলো workload millisecond-এ সময় মেপে ঘড়ি দিয়ে শ্রেণিবদ্ধ করা — তখন machine-এর ভার তোমার 'complexity' ঠিক করে। গণনা কোন machine চালাল তাতে বিচলিত হয় না।"
 },
 "lab-l25-adder": {
  "why": "এই lab আছে কারণ combinational design একটি pipeline (বিবরণ → table → map → gate → নিঃশেষ যাচাই) আর যেকোনো ধাপ এড়ানো হলো যেভাবে ভুল hardware আত্মবিশ্বাসের সঙ্গে বানানো হয়।",
  "parts": [
   "Task 1: বিবরণকে table সারিতে পড়ো।",
   "Task 2: K-map দলবদ্ধকরণে ন্যূনতম রাশি।",
   "Task 3: একটি অমিল সারি থেকে ত্রুটি নির্ণয়।",
   "Task 4: সমাপনী শৃঙ্খলা হিসেবে নিঃশেষ যাচাই।"
  ],
  "output": "প্রতিটি উত্তর 8-সারির table দ্বারা বাধ্য — বিবরণ, minimization ও ত্রুটি সব একই প্রমাণে থাকে।",
  "meaning": "তুমি পূর্ণ combinational pipeline একবার শেষ-থেকে-শেষ চালিয়েছ — তোমার পরীক্ষার design প্রশ্ন যেই ধারা মূল্যায়ন করে।",
  "job": "Digital logic হলো যেখানে software physics-এর সঙ্গে মেশে: পরের level-এর প্রতিটি CPU instruction এই level-এর gate ও flip-flop দিয়ে বানানো circuit-এ চলে। পরীক্ষক truth table ও K-map যান্ত্রিকভাবে পরীক্ষা করেন; এই স্তর বোঝা engineer-রা timing ও hardware ত্রুটি debug করেন যা অন্যরা বর্ণনাও করতে পারে না।",
  "wrong": "চিরায়ত ভুল চেষ্টা হলো English বিবরণ থেকে সরাসরি gate-এ লাফানো; সারি 000 (জোড় কিন্তু শূন্য) ঠিক সেই সারি যা table এড়ানোকে শাস্তি দেয়।"
 },
 "lab-l26-trace": {
  "why": "এই lab আছে কারণ assembly দক্ষতা মানেই trace দক্ষতা: যেই পাঠক আগে হাতে trace তৈরি করতে পারে না, তার কাছে কোনো debugger output-এর অর্থ নেই।",
  "parts": [
   "Task 1: loop-এর একটি পাস, trace করা।",
   "Task 2: exit code পর্যন্ত পূর্ণ trace।",
   "Task 3: একই ছকে পাওয়া দুই-ত্রুটির bug।",
   "Task 4: predict-before-run শৃঙ্খলার নাম দেওয়া।"
  ],
  "output": "প্রতিটি রায় একটি register ছকের একটি লাইন — loop মোট, helper-এর ভুল register, ও exit code সব একই প্রমাণ থেকে পড়া।",
  "meaning": "তুমি এখন অপরিচিত listing-এর সামনে বসে পদ্ধতিগতভাবে জিজ্ঞাসাবাদ করতে পারো — Level 19-এর reverse engineering যেই দক্ষতা ধরেছিল ও Level 30-এর compiler আবার ব্যবহার করবে ঠিক তা।",
  "job": "Assembly হলো machine-এর আগে শেষ বিমূর্ততা: register, addressing ও interrupt ব্যাখ্যা করে compiler কী নির্গত করে, debugger কী দেখায়, আর তোমার Level 19 reverse-engineering পাঠ কী পড়ে। Computer Architecture পরীক্ষক ঠিক এই trace গুলোই পরীক্ষা করেন।",
  "wrong": "চিরায়ত ভুল চেষ্টা হলো loop-কে উপরের দিকে গণনা হিসেবে trace করা (আংশিক 1, 3, 6, 10) — মোট মিলে যায় (10), ভুলটি আড়াল থাকে যতক্ষণ না task 3-এর register শৃঙ্খলা তা প্রকাশ করে।"
 },
 "lab-l27-sql": {
  "why": "এই lab আছে কারণ SQL দক্ষতা হলো প্রথমবারেই সঠিক আকার দিয়ে business প্রশ্নের উত্তর দেওয়া — আর কারণ এখানকার প্রতিটি প্রশ্ন দুটি অভ্যাসে নির্ণয়যোগ্য: জিজ্ঞেস করো কে হারিয়ে যায়, আর row সংখ্যা অনুমান করো।",
  "parts": [
   "Q1: আদমশুমারি report — LEFT JOIN + COUNT(column)।",
   "Q2: ছাঁকো-তারপর-aggregate শৃঙ্খলা।",
   "Q3: দল ছাঁকনির জন্য HAVING।",
   "Q4: row গণিত দিয়ে Cartesian-product নির্ণয়।"
  ],
  "output": "প্রতিটি উত্তর ছোট dataset-এর বিরুদ্ধে হাতে যাচাইযোগ্য — গণনা ও গড় এত ছোট যে কোনো রায় engine-কে বিশ্বাসের উপর দাঁড়ায় না।",
  "meaning": "তুমি এখন একটি database-কে report যেভাবে আসলে চায় সেভাবে জিজ্ঞাসাবাদ করতে পারো — আর চালানোর আগে প্রতিটি query-র আকার কথায় রক্ষা করতে পারো।",
  "job": "Level 0–22-তে তুমি যেই প্রতিটি application secure করেছ তা একটি database-এর উপর বসে; এই level database-টাই শেখায়: data কীভাবে model হয়, query হয়, ব্যর্থতা ও concurrency-র মধ্যে সামঞ্জস্যপূর্ণ থাকে, আর দ্রুত হয়। DBMS তোমার degree-র সবচেয়ে পরীক্ষা-ভারী বিষয়গুলোর একটিও — আর তার প্রাণ হলো table দিয়ে Level 23-এর set theory।",
  "wrong": "চিরায়ত ভুল চেষ্টা হলো অভ্যাসে Q1-এ INNER JOIN নেওয়া — Cy হারিয়ে যায় আর 'যাদের একটিও নেই তাদেরসহ ছাত্র' প্রয়োজন নীরবে ব্যর্থ হয়, সবচেয়ে বিপজ্জনক ধরনের ভুল।"
 },
 "lab-l28-git": {
  "why": "এই lab আছে কারণ Git সাবলীলতা হলো পেশি দক্ষতা, trivia নয়: একটি আসল দলের রাত 2টার merge তা আকর্ষণীয় করার আগেই loop তোমার হাতে একঘেয়ে হতে হবে।",
  "parts": [
   "পরিষ্কার main থেকে branch।",
   "ছোট সৎ commit।",
   "একটি আসল সংঘর্ষ, অর্থগতভাবে মেটানো।",
   "পর্যালোচিত merge; বর্ণনাযোগ্য graph ইতিহাস।"
  ],
  "output": "Graph output হলো যাচাই: merge commit-এ দুটি parent ও log-এ একটি পড়া যায় এমন গল্প এমন বৈশিষ্ট্য যা কোনো পরিমাণ 'আমার screen-এ কাজ করেছে' প্রতিস্থাপন করতে পারে না।",
  "meaning": "তুমি পেশাদার দলের ব্যবহার করা ঠিক সহযোগিতা protocol সম্পাদন করেছ — আর নিরাপত্তায় একটি merge সংঘর্ষ বানিয়েছ, বেঁচেছ ও নথিভুক্ত করেছ।",
  "job": "CyberLab-এ এখন পর্যন্ত তুমি যা বানিয়েছ তা একক ও ছোট ছিল। এই level হলো software যেভাবে দল, সময় ও পরিবর্তনে টেকে: একটি lifecycle, লিখিত requirement, মানুষ পর্যালোচনা করতে পারে এমন design, regression ধরা test, সৎভাবে ইতিহাস লেখা Git, আর slice-এ ship করা একটি agile ছন্দ। Software Engineering হলো সেই honours বিষয় যা programmer-দের engineer বানায়।",
  "wrong": "চিরায়ত ভুল চেষ্টা হলো পাইকারি একটি পাশ বেছে সংঘর্ষ মিটিয়ে তা শেষ বলা — lab-এর যাচাই হলো merge করা লাইনে দুটি উদ্দেশ্যই টেকে; একটি একপেশে সমাধান debrief প্রশ্নে ব্যর্থ হয়।"
 },
 "lab-l29-machines": {
  "why": "এই lab আছে কারণ machine design হলো সারের একটি শিল্প: পুরো দক্ষতা হলো একটি machine-কে কী মনে রাখতে হবে তা সিদ্ধান্ত নেওয়া — আর এই lab তোমাকে তা তিনবার সিদ্ধান্ত নেওয়ায়, ক্রমের তিনটি স্তরে।",
  "parts": [
   "DFA: দুটি এক-bit সারের গুণফল।",
   "CFG: প্রতিসম মোড়ানো production।",
   "TM: দাগ দেওয়া sweep গণনাকে বাইরে রাখে।",
   "যাচাই: প্রতি শর্তে সীমানা সাক্ষী।"
  ],
  "output": "প্রতিটি artefact তাকে ভাঙতে বাছাই করা string-এর বিরুদ্ধে যাচাই করা (প্রতি clause-এ অনুপ্রবেশকারী) — প্রতিপক্ষ পরীক্ষায় টিকে থাকা একটি design-ই এই course-এর প্রত্যয়ন করা একমাত্র ধরন।",
  "meaning": "তুমি এখন সচেতনভাবে ক্রমে ওঠানামা করতে পারো: একটি language দেওয়া থাকলে তুমি তার শ্রেণির নাম দিতে, তার machine design করতে, আর সাক্ষীর বিরুদ্ধে তোমার design প্রমাণ করতে পারো।",
  "job": "এই level প্রতিটি machine-এর নিচের machine গুলো অধ্যয়ন করে: computation কী, কোন সমস্যার আদৌ algorithmic সমাধান আছে, আর কোন সমাধানযোগ্য সমস্যা সস্তা বা ধ্বংসাত্মকভাবে ব্যয়বহুল। এটি সবচেয়ে প্রমাণ-ভারী honours বিষয় — আর Level 23-এর logic ও প্রমাণ কৌশল তার প্রবেশ টিকিট।",
  "wrong": "চিরায়ত ভুল চেষ্টা হলো এখন পর্যন্ত চেষ্টা করা প্রতি string উপসর্গের জন্য একটি stateসহ একটি DFA — একটি অসীম পশ্চাদপসরণ যা সংক্ষেপের দুই-bit সার গলিয়ে দেয়; তোমার state অর্থে '…ইত্যাদি' থাকলে design এখনো তার সার খুঁজে পায়নি।"
 },
 "lab-l30-pipeline": {
  "why": "এই lab আছে কারণ একটি pipeline শুধু end-to-end বোঝা যায়: প্রতিটি পর্যায়ের output পরের পর্যায়ের প্রমাণ, আর lab তোমাকে একটি expression-এর জন্য ছয়টি হস্তান্তর তৈরি ও নিরীক্ষণ করায়।",
  "parts": [
   "পর্যায় 1–2: token ও precedence-আকারের গাছ।",
   "পর্যায় 3: symbol-table রায়।",
   "পর্যায় 4–5: TAC তারপর stack code, 85-তে VM-যাচাইকৃত।",
   "পর্যায় 6: একটি যুক্তিসঙ্গত no-op — সংযম একটি optimization দক্ষতা হিসেবে।"
  ],
  "output": "VM-এর 85 হলো cross-phase checksum: lexer, parser, semantic, IR ও codegen সব মেলে, নইলে সংখ্যা ভিন্ন হতো — একটি মান পাঁচটি পর্যায় নিরীক্ষণ করছে।",
  "meaning": "তুমি একটি সম্পূর্ণ compiler চালিয়েছ — ছোট, কিন্তু কোনো পর্যায় ভান বা এড়ানো ছাড়া — আর তার মধ্যবর্তী output দ্বিখণ্ডিত করে একটি debug করতে পারো।",
  "job": "এই level ছয়টি পাঠ জুড়ে একটি ছোট কার্যকর compiler বানায় — lexer, parser, semantic যাচাইকারী, intermediate code, একটি stack-machine back end, ও একটি optimizer — প্রতিটি পর্যায় একটি আসল, চালানো যায় এমন অংশ। এখানে Level 29-এর grammar theory থাকা বন্ধ করে এই course-এর প্রতিটি program-এর জন্য তুমি ব্যবহার করা tool হতে শুরু করে।",
  "wrong": "চিরায়ত ভুল চেষ্টা হলো * কে মূলে রেখে গাছ আঁকা ('বাম থেকে ডানে লেখা') — precedence কাঠামোগত, আর TAC/stack সারি সঙ্গে সঙ্গে ত্রুটি প্রকাশ করে কারণ তাদের ক্রম গাছ অনুসরণ করে, লেখা নয়।"
 },
 "lab-l31-metrics": {
  "why": "এই lab আছে কারণ পরিমাপ সাক্ষরতা একটি সংগ্রহ ও নিরাপত্তা দক্ষতা: vendor তাদের তোষামোদ করা সংখ্যা উদ্ধৃত করে, আর confusion matrix — চারটি গণনা — হলো পুরো প্রতিরক্ষা।",
  "parts": [
   "Vendor 1: উচ্চ-recall জাল, প্রথম পর্যায়।",
   "Vendor 2: উচ্চ-precision বিচারক, দ্বিতীয় পর্যায়।",
   "Vendor 3: কখনো-flag-না-করা প্রতারণা, recall 0 দিয়ে ফাঁস।",
   "সংযোজন: দরজায় recall, bench-এ precision।"
  ],
  "output": "এই lab-এর প্রতিটি রায় চারটি ছাপা গণনা থেকে একটি ভাগ দূরে — কোনো রায় vendor-এর বাছাই করা সার পরিসংখ্যানের উপর দাঁড়ায় না।",
  "meaning": "তুমি এখন যেকোনো classifier দাবি নিরীক্ষণ করতে পারো — security tool, চিকিৎসা model, tutor ভবিষ্যদ্বাণীকারী — চারটি গণনা ও দুটি প্রশ্ন দিয়ে: কী held out ছিল, আর এই পর্যায় কোন ত্রুটি রোধ করতে আছে?",
  "job": "তোমার ক্যারিয়ারে তুমি যেই প্রতিটি AI tool নিরীক্ষণ, আক্রমণ বা রক্ষা করবে তা এই level-এর ধারণা থেকে শুরু: একটি machine কীভাবে একটি space অনুসন্ধান করে, জ্ঞান উপস্থাপন করে, program করা ছাড়া data থেকে pattern শেখে, আর সৎভাবে মূল্যায়িত হয়। এটি foundation level — ML দাবি সমালোচনামূলকভাবে পড়তে ও হাতে ছোট, আসল model বানাতে যথেষ্ট।",
  "wrong": "চিরায়ত ভুল চেষ্টা হলো vendor-দের accuracy দিয়ে ক্রম দেওয়া (V3 0.99-তে 'জেতে') — accuracy সংখ্যাগরিষ্ঠ-শ্রেণির প্রতিধ্বনিকে প্রথমে ও mission-কে শেষে রাখে; এই lab-এর পুরো বিষয় হলো উল্টানোটি।"
 }
};
