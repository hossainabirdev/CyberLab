// Exercise starter code for the Level 4 Java mastery lessons (15).
//
// Same contract as exercise-py.ts: each starter is the lesson's own
// guided-lab task as real Java 17 code — setup given, key step marked
// TODO, the class compiles and runs exactly as shipped. Java cannot
// execute in the browser, so the playground shows this verified output
// for the unedited starter under its honest SIMULATED label, with the
// exact local command (javac + java) beneath. RUN-VERIFIED 15 Nov 2026:
// every starter was compiled with javac and run on OpenJDK 17 and its
// output compared line-by-line with the stated output below (that pass
// fixed a wrong stated sum and two starters that did not compile).

import type { PlayCode } from "./Playground";

export const EXERCISE_JAVA: Record<string, PlayCode> = {
  "l4-jv-first": {
    lang: "java",
    title: "ExerciseHost.java — the lab task from this lesson, as code",
    code: `// Exercise: print a 3-line host report (name, port, risk boolean)
// with typed variables - one value per line.
public class ExerciseHost {
    public static void main(String[] args) {
        String host = "lab-db";
        int port = 22;
        boolean risky = false;

        System.out.println("host=" + host);
        // TODO: a second line for the port, a third for the risk flag.
        // Then, on your own PC only: change int port to double port,
        // recompile, and READ the error - types are checked promises.
    }
}`,
    output: `host=lab-db`,
  },

  "l4-jv-operators": {
    lang: "java",
    title: "ExerciseParse.java — the lab task from this lesson, as code",
    code: `// Exercise: parse '22', 'ssh' and '65536' through the lesson's
// layers (parse, then range) and print the three verdicts.
public class ExerciseParse {
    static String verdict(String text) {
        // TODO: try { int p = Integer.parseInt(text);
        //         return (p >= 1 && p <= 65535) ? "accepted " + p : "out of range";
        //       } catch (NumberFormatException e) { return "not a number"; }
        return "not written yet";
    }

    public static void main(String[] args) {
        System.out.println("22 -> " + verdict("22"));
        System.out.println("ssh -> " + verdict("ssh"));
        System.out.println("65536 -> " + verdict("65536"));
    }
}`,
    output: `22 -> not written yet
ssh -> not written yet
65536 -> not written yet`,
  },

  "l4-jv-control": {
    lang: "java",
    title: "ExerciseControl.java — the lab task from this lesson, as code",
    code: `// Exercise: classify five ports with classify() and three status
// codes with a switch expression; print all eight verdicts.
public class ExerciseControl {
    static String classify(int port) {
        if (port == 22 || port == 443) return "standard";
        if (port == 23 || port == 3389) return "risky";
        if (port >= 49152) return "ephemeral";
        return "other";
    }

    public static void main(String[] args) {
        int[] ports = {22, 23, 8080, 50000, 443};
        for (int p : ports) {
            System.out.println(p + " -> " + classify(p));
        }
        // TODO: int[] codes = {200, 403, 500}; for each, a switch
        // expression -> "OK" / "refused" / "server error" / default,
        // printed as: code + " -> " + verdict
    }
}`,
    output: `22 -> standard
23 -> risky
8080 -> other
50000 -> ephemeral
443 -> standard`,
  },

  "l4-jv-arrays": {
    lang: "java",
    title: "ExerciseArrays.java — the lab task from this lesson, as code",
    code: `// Exercise: sort five ports, print with Arrays.toString, and
// compute the average as a double (cast BEFORE dividing).
import java.util.Arrays;

public class ExerciseArrays {
    public static void main(String[] args) {
        int[] ports = {443, 22, 3389, 80, 23};
        Arrays.sort(ports);
        System.out.println("sorted=" + Arrays.toString(ports));
        int sum = 0;
        for (int p : ports) sum += p;
        // TODO: double avg = (double) sum / ports.length; print it.
        // (sum / ports.length alone would be INT division - the trap.)
        System.out.println("sum=" + sum);
    }
}`,
    output: `sorted=[22, 23, 80, 443, 3389]
sum=3957`,
  },

  "l4-jv-strings": {
    lang: "java",
    title: "ExerciseStrings.java — the lab task from this lesson, as code",
    code: `// Exercise: extract the status value from 'user=rahim status=fail'
// with substring + indexOf, and verify it with .equals("fail").
public class ExerciseStrings {
    public static void main(String[] args) {
        String line = "user=rahim status=fail";
        int start = line.indexOf("status=") + "status=".length();
        String status = line.substring(start);
        System.out.println("status value: " + status);
        // TODO: print "is fail? " + status.equals("fail")
        // (never == for contents - the lesson showed why).
    }
}`,
    output: `status value: fail`,
  },

  "l4-jv-methods": {
    lang: "java",
    title: "ExerciseMethods.java — the lab task from this lesson, as code",
    code: `// Exercise: write isStandard(int), isRisky(int) and verdict(int)
// using both, then overload verdict(String).
public class ExerciseMethods {
    static boolean isRisky(int port) {
        return port == 23 || port == 3389;
    }

    // TODO: static boolean isStandard(int port) - 22, 80 or 443.
    // TODO: static String verdict(int port) - "RISKY" if isRisky,
    //       "standard" if isStandard, else "other".
    // TODO: overload static String verdict(String host).

    public static void main(String[] args) {
        System.out.println("23 risky? " + isRisky(23));
        System.out.println("443 risky? " + isRisky(443));
        System.out.println("TODO: print verdict(23), verdict(443), verdict(\\"lab-web\\")");
    }
}`,
    output: `23 risky? true
443 risky? false
TODO: print verdict(23), verdict(443), verdict("lab-web")`,
  },

  "l4-jv-oop1": {
    lang: "java",
    title: "ExerciseUser.java — the lab task from this lesson, as code",
    code: `// Exercise: write a User class (name, failedLogins) with a
// constructor and a locked() method that is true at 5+ failures;
// create two users and print their verdicts.
class User {
    String name;
    int failedLogins;

    // TODO: User(String name, int failedLogins) { this... }
    // TODO: boolean locked() { return failedLogins >= 5; }
    // TODO: String report() - name + ": LOCKED" or name + ": ok"
}

public class ExerciseUser {
    public static void main(String[] args) {
        System.out.println("Users waiting: nadia (3 fails), rahim (12 fails)");
        System.out.println("TODO: finish User, create both, print report() for each");
    }
}`,
    output: `Users waiting: nadia (3 fails), rahim (12 fails)
TODO: finish User, create both, print report() for each`,
  },

  "l4-jv-oop2": {
    lang: "java",
    title: "ExercisePoly.java — the lab task from this lesson, as code",
    code: `// Exercise: build Check/PortCheck/HeaderCheck as in the lesson
// and add a CertCheck that reports days-to-expiry; one loop, and
// dispatch follows the OBJECT, never the variable's type.
class Check {
    String name;
    Check(String name) { this.name = name; }
    String run() { return name + ": generic check"; }
}

class PortCheck extends Check {
    int port;
    PortCheck(int port) {
        super("port");
        this.port = port;
    }
    @Override String run() {
        return "port " + port + (port == 23 ? " RISKY" : " ok");
    }
}

class HeaderCheck extends Check {
    HeaderCheck() { super("header"); }
    @Override String run() { return "header: X-Frame-Options present"; }
}

// TODO: class CertCheck extends Check - field daysLeft;
// run() -> "cert: expires in " + daysLeft + " days" (+ " RENEW NOW"
// when daysLeft < 30).

public class ExercisePoly {
    public static void main(String[] args) {
        Check[] checks = { new PortCheck(23), new HeaderCheck(), new PortCheck(443) };
        for (Check c : checks) {
            System.out.println(c.run());
        }
        System.out.println("TODO: add a CertCheck(12) to the array and re-run");
    }
}`,
    output: `port 23 RISKY
header: X-Frame-Options present
port 443 ok
TODO: add a CertCheck(12) to the array and re-run`,
  },

  "l4-jv-oop3": {
    lang: "java",
    title: "ExerciseReportable.java — the lab task from this lesson, as code",
    code: `// Exercise: define a Reportable interface (String report()),
// implement it in two classes, and print both through
// interface-typed variables.
interface Reportable {
    String report();
}

class PortFinding implements Reportable {
    private final int port;
    PortFinding(int port) { this.port = port; }
    public String report() {
        return "port " + port + (port == 23 ? " RISKY" : " ok");
    }
}

// TODO: class HeaderFinding implements Reportable - field missing;
// report() -> "missing headers: " + missing

public class ExerciseReportable {
    public static void main(String[] args) {
        Reportable a = new PortFinding(23);   // typed by the CONTRACT
        System.out.println(a.report());
        System.out.println("TODO: print a HeaderFinding through a Reportable too");
    }
}`,
    output: `port 23 RISKY
TODO: print a HeaderFinding through a Reportable too`,
  },

  "l4-jv-exceptions": {
    lang: "java",
    title: "ExerciseParseAttempts.java — the lab task from this lesson, as code",
    code: `// Exercise: write parseAttempts(String) with a custom exception
// for non-numbers AND negatives; test '5', 'x', '-2'.
class BadAttemptsException extends Exception {
    BadAttemptsException(String msg) { super(msg); }
}

public class ExerciseParseAttempts {
    // TODO: static int parseAttempts(String text) throws BadAttemptsException
    //   try parse; NumberFormatException -> throw new BadAttemptsException("not a number: " + text)
    //   value < 0 -> throw new BadAttemptsException("negative: " + value)

    public static void main(String[] args) {
        String[] inputs = {"5", "x", "-2"};
        for (String in : inputs) {
            System.out.println(in + " -> TODO (wire parseAttempts in, catch and print)");
        }
    }
}`,
    output: `5 -> TODO (wire parseAttempts in, catch and print)
x -> TODO (wire parseAttempts in, catch and print)
-2 -> TODO (wire parseAttempts in, catch and print)`,
  },

  "l4-jv-collections": {
    lang: "java",
    title: "ExerciseCounts.java — the lab task from this lesson, as code",
    code: `// Exercise: count failures per user from a List of names into a
// HashMap, then print the users sorted.
import java.util.*;

public class ExerciseCounts {
    public static void main(String[] args) {
        List<String> fails = List.of("rahim", "nadia", "rahim", "admin", "rahim");
        Map<String, Integer> counts = new HashMap<>();
        for (String user : fails) {
            counts.merge(user, 1, Integer::sum);   // the counting idiom
        }
        System.out.println("rahim count=" + counts.get("rahim"));
        // TODO: sort the KEYS (new ArrayList<>(counts.keySet()) +
        // Collections.sort) and print "user: count" per line.
    }
}`,
    output: `rahim count=3`,
  },

  "l4-jv-generics": {
    lang: "java",
    title: "ExerciseGenerics.java — the lab task from this lesson, as code",
    code: `// Exercise: write a generic last(List<T>) method and a
// Box<String>; prove a wrong-type put fails to COMPILE (try it on
// your PC, read the error, then revert).
import java.util.*;

class Box<T> {
    private T value;
    void put(T value) { this.value = value; }
    T get() { return value; }
}

public class ExerciseGenerics {
    // TODO: static <T> T last(List<T> items) { return items.get(items.size() - 1); }

    public static void main(String[] args) {
        Box<String> hostBox = new Box<>();
        hostBox.put("lab-web");
        System.out.println("boxed host=" + hostBox.get());
        System.out.println("TODO: last(List.of(22, 443, 80)) and last(List.of(\\"a\\", \\"b\\"))");
    }
}`,
    output: `boxed host=lab-web
TODO: last(List.of(22, 443, 80)) and last(List.of("a", "b"))`,
  },

  "l4-jv-lambdas": {
    lang: "java",
    title: "ExerciseStreams.java — the lab task from this lesson, as code",
    code: `// Exercise: from List.of(22, 80, 443, 23, 3389, 53) produce
// (a) sorted standard ports (< 1024) as labels, (b) the count of
// risky ones.
import java.util.*;
import java.util.stream.*;

public class ExerciseStreams {
    public static void main(String[] args) {
        List<Integer> ports = List.of(22, 80, 443, 23, 3389, 53);

        List<String> labels = ports.stream()
                .filter(p -> p < 1024)
                .sorted()
                .map(p -> "port-" + p)
                .collect(Collectors.toList());
        System.out.println("standard labels=" + labels);

        // TODO: long risky = ports.stream().filter(p -> p == 23 || p == 3389).count();
        //       print "risky count: " + risky
    }
}`,
    output: `standard labels=[port-22, port-23, port-53, port-80, port-443]`,
  },

  "l4-jv-files": {
    lang: "java",
    title: "ExerciseFiles.java — the lab task from this lesson, as code",
    code: `// Exercise: write three host lines, read them back BOTH ways
// (readAllLines and a streaming reader), and print both counts.
import java.io.*;
import java.nio.file.*;
import java.util.*;

public class ExerciseFiles {
    public static void main(String[] args) throws IOException {
        Path file = Path.of("hosts.txt");
        Files.write(file, List.of("host=lab-web port=443",
                                  "host=lab-old port=23",
                                  "host=lab-db port=22"));

        List<String> lines = Files.readAllLines(file);
        System.out.println("readAllLines count=" + lines.size());

        // TODO: count again with Files.newBufferedReader in a
        // try-with-resources loop, and print "streamed count=" + n.
    }
}`,
    output: `readAllLines count=3`,
  },

  "l4-jv-security": {
    lang: "java",
    title: "ExerciseValidHost.java — the lab task from this lesson, as code",
    code: `// Exercise: write validHost(String) that accepts only letters,
// digits, dots and hyphens (an allowlist loop) and test it on
// 'lab-web', 'a b' and 'x;rm'.
public class ExerciseValidHost {
    static boolean validHost(String host) {
        // TODO: false for null/empty; loop over host.toCharArray() -
        // every char must be a letter, digit, '.' or '-', else false;
        // true only if the whole string passes.
        return false;
    }

    public static void main(String[] args) {
        System.out.println("'lab-web' valid? " + validHost("lab-web"));
        System.out.println("'a b' valid? " + validHost("a b"));
        System.out.println("'x;rm' valid? " + validHost("x;rm"));
    }
}`,
    output: `'lab-web' valid? false
'a b' valid? false
'x;rm' valid? false`,
  },
};
