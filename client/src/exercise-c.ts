// Exercise starter code for the Level 4 C mastery lessons (17).
//
// Same contract as exercise-py.ts: each starter is the lesson's own
// guided-lab task as real code — setup given, key step marked TODO, and
// the program compiles (gcc -Wall -Wextra, C11) and runs exactly as
// shipped. Every `output` was captured by actually compiling and running
// the starter at build time. C cannot execute in the browser, so the
// playground shows this verified output for the unedited starter under
// its honest SIMULATED label, and the exact local gcc command beneath.

import type { PlayCode } from "./Playground";

export const EXERCISE_C: Record<string, PlayCode> = {
  "l4-c-basics": {
    lang: "c",
    title: "exercise_largest.c — the lab task from this lesson, as code",
    code: `/* Exercise: also print the LARGEST attempt count, using a
   running maximum variable updated inside the same loop. */
#include <stdio.h>

int main(void) {
    int attempts[] = {2, 5, 41, 3, 17};
    int n = 5;
    int total = 0;
    int flagged = 0;
    int largest = 0;          /* TODO: update it in the loop: if (attempts[i] > largest) largest = attempts[i]; */
    for (int i = 0; i < n; i++) {
        total += attempts[i];
        if (attempts[i] >= 10) {
            flagged++;
            printf("source %d: %d attempts — FLAG\\n", i, attempts[i]);
        }
    }
    double average = (double)total / n;
    printf("total=%d flagged=%d average=%.1f\\n", total, flagged, average);
    printf("largest=%d\\n", largest);
    return 0;
}`,
    output: `source 2: 41 attempts — FLAG
source 4: 17 attempts — FLAG
total=68 flagged=2 average=13.6
largest=0`,
  },

  "l4-cm-types": {
    lang: "c",
    title: "exercise_type_sizes.c — the lab task from this lesson, as code",
    code: `/* Exercise: print the size and max of every integer type you
   know - then answer: which type does a 5 GB file size need? */
#include <stdio.h>
#include <limits.h>

int main(void) {
    printf("char:       %zu bytes, max %d\\n", sizeof(char), CHAR_MAX);
    printf("short:      %zu bytes, max %d\\n", sizeof(short), SHRT_MAX);
    printf("int:        %zu bytes, max %d\\n", sizeof(int), INT_MAX);
    /* TODO: long (LONG_MAX) and long long (LLONG_MAX) lines, same shape. */
    printf("5 GB = 5000000000 bytes - bigger than INT_MAX (%d)? %s\\n",
           INT_MAX, 5000000000L > INT_MAX ? "yes - needs long" : "no");
    return 0;
}`,
    output: `char:       1 bytes, max 127
short:      2 bytes, max 32767
int:        4 bytes, max 2147483647
5 GB = 5000000000 bytes - bigger than INT_MAX (2147483647)? yes - needs long`,
  },

  "l4-cm-io": {
    lang: "c",
    title: "exercise_table.c — the lab task from this lesson, as code",
    code: `/* Exercise: print an aligned 3-row host/port table with %8s and
   %05d, then sscanf-parse 'attempts=17' and print count and value. */
#include <stdio.h>

int main(void) {
    printf("[%8s] %05d\\n", "lab-web", 443);
    /* TODO: two more rows, same shape: ("lab-db", 22), ("lab-old", 23) */

    int value = 0;
    int converted = sscanf("attempts=17", "attempts=%d", &value);
    printf("sscanf converted=%d value=%d\\n", converted, value);
    return 0;
}`,
    output: `[ lab-web] 00443
sscanf converted=1 value=17`,
  },

  "l4-cm-control": {
    lang: "c",
    title: "exercise_status_switch.c — the lab task from this lesson, as code",
    code: `/* Exercise: write a switch that classifies 200/301/403/404/500
   with a default - then deliberately remove one break and document
   what changed (in the comment at the bottom). */
#include <stdio.h>

const char *describe(int code) {
    switch (code) {
        case 200: return "OK";
        /* TODO: case 301 -> "redirect", 403 -> "refused",
                 404 -> "not found", 500 -> "server error" */
        default:  return "other status";
    }
}

int main(void) {
    int codes[] = {200, 301, 403, 404, 500, 418};
    for (int i = 0; i < 6; i++) {
        printf("%d -> %s\\n", codes[i], describe(codes[i]));
    }
    return 0;
}`,
    output: `200 -> OK
301 -> other status
403 -> other status
404 -> other status
500 -> other status
418 -> other status`,
  },

  "l4-c-arrays-functions": {
    lang: "c",
    title: "exercise_count_both.c — the lab task from this lesson, as code",
    code: `/* Exercise: extend the counting to 'Accepted' lines too, via a
   second function sharing the same shape as count_failed. */
#include <stdio.h>
#include <string.h>

int count_failed(const char lines[][64], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) {
        if (strstr(lines[i], "Failed") != NULL) total++;
    }
    return total;
}

/* TODO: int count_accepted(...) - the same loop, matching "Accepted". */

int main(void) {
    char lines[4][64];
    snprintf(lines[0], 64, "Failed password for nadia");
    snprintf(lines[1], 64, "Accepted password for nadia");
    snprintf(lines[2], 64, "Failed password for admin");
    snprintf(lines[3], 64, "session opened");
    printf("failed lines: %d of 4\\n", count_failed(lines, 4));
    printf("accepted lines: TODO\\n");
    return 0;
}`,
    output: `failed lines: 2 of 4
accepted lines: TODO`,
  },

  "l4-cm-strings": {
    lang: "c",
    title: "exercise_extract_fields.c — the lab task from this lesson, as code",
    code: `/* Exercise: extract BOTH fields (user and status) from
   'user=rahim status=fail' using strstr, printing each value. */
#include <stdio.h>
#include <string.h>

int main(void) {
    char line[] = "user=rahim status=fail";

    char *u = strstr(line, "user=");
    /* the user value runs from u+5 to the next space - printing it
       needs a bounded copy, not a bare %s (that would run on). */
    char user[16];
    size_t len = (size_t)(strchr(u, ' ') - (u + 5));
    memcpy(user, u + 5, len);
    user[len] = '\\0';
    printf("user value: %s\\n", user);

    /* TODO: the status value the lesson's way: strstr(line, "status=")
       and print from pos + 7 (it is the last field, so %s is safe). */
    return 0;
}`,
    output: `user value: rahim`,
  },

  "l4-c-pointers": {
    lang: "c",
    title: "exercise_two_boxes.c — the lab task from this lesson, as code",
    code: `/* Exercise: add a second box (int blocked = 0) and a second
   pointer, set blocked to 1 through its pointer, and print both
   boxes' final values. */
#include <stdio.h>

int main(void) {
    int attempts = 41;          /* a value in a box */
    int *p = &attempts;         /* p holds the ADDRESS of the box */
    *p = 42;                    /* change the value through its address */
    printf("attempts is now: %d\\n", attempts);

    int blocked = 0;            /* TODO: a second box... */
    /* TODO: ...and a second pointer q = &blocked; set *q = 1;
       then print blocked's final value too. */
    printf("blocked is now: %d\\n", blocked);
    return 0;
}`,
    output: `attempts is now: 42
blocked is now: 0`,
  },

  "l4-cm-scope": {
    lang: "c",
    title: "exercise_bump.c — the lab task from this lesson, as code",
    code: `/* Exercise: write bump(int *p) that increments the caller's
   counter through the pointer, and prove the caller's variable
   changed - the opposite of the lesson's pass-by-value judge(). */
#include <stdio.h>

/* TODO: void bump(int *p) { (*p)++; }  - parentheses matter:
   *p++ would move the pointer instead of the value. */

int main(void) {
    int counter = 10;
    printf("before: %d\\n", counter);
    /* TODO: call bump(&counter) twice, then print counter again. */
    printf("after: %d\\n", counter);
    return 0;
}`,
    output: `before: 10
after: 10`,
  },

  "l4-c-structs-heap": {
    lang: "c",
    title: "exercise_risk_notes.c — the lab task from this lesson, as code",
    code: `/* Exercise: the Python inventory's risk_notes, as a C function
   over a struct Host array: print a note for every risky port. */
#include <stdio.h>
#include <string.h>

struct Host { char name[32]; int ports[4]; int nports; };

int is_risky(int port) { return port == 21 || port == 23 || port == 3389; }

/* TODO: void risk_notes(const struct Host *h) - loop over h->ports,
   print "name: port P RISKY" for each risky one, or "name: clean". */

int main(void) {
    struct Host fleet[2] = {
        {"lab-web", {22, 80, 443}, 3},
        {"lab-old", {22, 23}, 2},
    };
    for (int i = 0; i < 2; i++) {
        printf("%s: %d open ports (risk notes: TODO)\\n",
               fleet[i].name, fleet[i].nports);
    }
    return 0;
}`,
    output: `lab-web: 3 open ports (risk notes: TODO)
lab-old: 2 open ports (risk notes: TODO)`,
  },

  "l4-cm-typedef": {
    lang: "c",
    title: "exercise_levels.c — the lab task from this lesson, as code",
    code: `/* Exercise: define an enum Level { LOW, MEDIUM, HIGH } and a
   function that prints a verdict per level; then view 0xDEADBEEF
   through a union's bytes. */
#include <stdio.h>

typedef enum { LOW, MEDIUM, HIGH } Level;

/* TODO: const char *verdict(Level l) - LOW "log it", MEDIUM "ticket
   it", HIGH "page the on-call" (a switch reads best here). */

typedef union {
    unsigned int as_int;
    unsigned char bytes[4];
} Word;

int main(void) {
    Level levels[3] = {LOW, MEDIUM, HIGH};
    for (int i = 0; i < 3; i++) {
        printf("level %d: TODO verdict\\n", levels[i]);
    }
    Word w;
    w.as_int = 0xDEADBEEF;
    printf("0xDEADBEEF first byte=%u last byte=%u\\n", w.bytes[0], w.bytes[3]);
    return 0;
}`,
    output: `level 0: TODO verdict
level 1: TODO verdict
level 2: TODO verdict
0xDEADBEEF first byte=239 last byte=222`,
  },

  "l4-cm-memory": {
    lang: "c",
    title: "exercise_calloc_scores.c — the lab task from this lesson, as code",
    code: `/* Exercise: allocate space for 4 scores with calloc, fill 3,
   print the 4th (still 0), free, and NULL the pointer. */
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *scores = calloc(4, sizeof *scores);   /* zero-initialised */
    if (scores == NULL) { printf("calloc failed\\n"); return 1; }
    scores[0] = 7;
    scores[1] = 12;
    scores[2] = 3;
    /* the 4th slot was never written - calloc already made it 0 */
    printf("scores: %d %d %d %d\\n", scores[0], scores[1], scores[2], scores[3]);
    /* TODO: free(scores); scores = NULL; then print a line proving
       the pointer is disarmed (scores == NULL). */
    return 0;
}`,
    output: `scores: 7 12 3 0`,
  },

  "l4-cm-files": {
    lang: "c",
    title: "exercise_results_file.c — the lab task from this lesson, as code",
    code: `/* Exercise: write three host lines to results.txt, read them
   back with fgets, and print a count - then switch to append mode
   and run again to see the file grow instead of restart. */
#include <stdio.h>

int main(void) {
    FILE *out = fopen("results.txt", "w");     /* TODO: later try "a" */
    if (out == NULL) { printf("cannot open for write\\n"); return 1; }
    fprintf(out, "host=lab-web port=443\\n");
    fprintf(out, "host=lab-old port=23\\n");
    /* TODO: a third line: host=lab-db port=22 */
    fclose(out);

    FILE *in = fopen("results.txt", "r");
    if (in == NULL) { printf("cannot open for read\\n"); return 1; }
    char line[64];
    int lines = 0;
    while (fgets(line, sizeof line, in) != NULL) {
        printf("read: %s", line);
        lines++;
    }
    fclose(in);
    printf("lines=%d\\n", lines);
    return 0;
}`,
    output: `read: host=lab-web port=443
read: host=lab-old port=23
lines=2`,
  },

  "l4-cm-preprocessor": {
    lang: "c",
    title: "exercise_max2.c — the lab task from this lesson, as code",
    code: `/* Exercise: write MAX2(a, b) as a fully-parenthesised macro,
   test it on (3, 7) and on (1+2, 4), and state the
   double-evaluation warning (bottom comment). */
#include <stdio.h>

/* TODO: #define MAX2(a, b) (((a) > (b)) ? (a) : (b))
   Every parenthesis earns its place - compare SQUARE in the lesson. */
#define MAX2(a, b) 0   /* placeholder - replace with the real macro */

int main(void) {
    printf("MAX2(3, 7) = %d\\n", MAX2(3, 7));
    printf("MAX2(1+2, 4) = %d\\n", MAX2(1 + 2, 4));
    return 0;
}
/* Double-evaluation warning: MAX2(x++, y) may evaluate x++ TWICE -
   macros repeat their arguments; functions evaluate them once. */`,
    output: `MAX2(3, 7) = 0
MAX2(1+2, 4) = 0`,
  },

  "l4-cm-cmdline": {
    lang: "c",
    title: "exercise_cmdline.c — the lab task from this lesson, as code",
    code: `/* Exercise: the lesson program, ready for the lab's four
   invocations. Run it (on your PC) as: ./exercise_cmdline 443,
   then with 0, with ssh, and with no argument - and write the
   one-line verdict for each: which layer rejected it, or that it
   passed. In this compiler it runs with no arguments. */
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    printf("argc=%d program=%s\\n", argc, argv[0]);
    if (argc < 2) { printf("usage: scan <port>\\n"); return 2; }
    char *end = NULL;
    long port = strtol(argv[1], &end, 10);       /* checked conversion */
    if (*end != '\\0' || port < 1 || port > 65535) {
        printf("invalid port: %s\\n", argv[1]);
        return 2;
    }
    printf("scanning port %ld on lab host\\n", port);
    return 0;
}`,
    output: `argc=1 program=./exercise_cmdline
usage: scan <port>`,
  },

  "l4-cm-bitwise": {
    lang: "c",
    title: "exercise_perms.c — the lab task from this lesson, as code",
    code: `/* Exercise: start from perms = 0, grant READ and EXEC, revoke
   READ, and print after each step (bit pattern in the comments). */
#include <stdio.h>

#define READ  4   /* 100 */
#define WRITE 2   /* 010 */
#define EXEC  1   /* 001 */

int main(void) {
    unsigned int perms = 0;                       /* 000 */
    printf("start: %u\\n", perms);
    /* TODO: perms |= READ;  print it (expect 4 = 100)
       TODO: perms |= EXEC;  print it (expect 5 = 101)
       TODO: perms &= ~READ; print it (expect 1 = 001) */
    printf("can exec? %s\\n", (perms & EXEC) ? "yes" : "no");
    return 0;
}`,
    output: `start: 0
can exec? no`,
  },

  "l4-c-memory": {
    lang: "c",
    title: "exercise_safe_copy.c — the lab task from this lesson, as code",
    code: `/* Exercise: the safe-code comparison, as a program - copy a
   TOO-LONG input into a 16-byte buffer the bounded way and prove
   what the unbounded strcpy would have destroyed. */
#include <stdio.h>
#include <string.h>

int main(void) {
    char buf[16];
    const char *input = "a-very-long-hostname-from-a-log";  /* 31 chars */

    /* bounded: at most sizeof-1 chars, then guarantee termination */
    strncpy(buf, input, sizeof(buf) - 1);
    buf[sizeof(buf) - 1] = '\\0';

    printf("stored: %s\\n", buf);
    printf("length: %zu (buffer %zu - nothing past it was touched)\\n",
           strlen(buf), sizeof buf);
    /* TODO: print the input's full length too, and state in one
       comment what strcpy(buf, input) would have written over. */
    return 0;
}`,
    output: `stored: a-very-long-hos
length: 15 (buffer 16 - nothing past it was touched)`,
  },

  "l4-cm-security": {
    lang: "c",
    title: "exercise_snprintf_fit.c — the lab task from this lesson, as code",
    code: `/* Exercise: snprintf three hostnames (short, exact-fit, too
   long) into an 8-byte buffer and print stored text + truncated
   verdict for each. The short one is done - add the other two. */
#include <stdio.h>
#include <string.h>

void store(const char *name) {
    char buf[8];
    int would = snprintf(buf, sizeof buf, "%s", name);
    printf("stored: '%s' (would need %d) truncated? %s\\n",
           buf, would, would >= (int)sizeof buf ? "yes" : "no");
}

int main(void) {
    store("lab-web");        /* 7 chars + NUL = exact fit in 8 */
    /* TODO: store("db") - the short one
       TODO: store("lab-web-01") - the too-long one (9 chars) */
    return 0;
}`,
    output: `stored: 'lab-web' (would need 7) truncated? no`,
  },
};
