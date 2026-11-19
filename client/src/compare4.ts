// "Same idea, three languages" — side-by-side comparison boxes for the
// shared core topics of Level 4 (user order 15 Nov 2026, from the Level 4
// inspection: the track taught each topic per-language in sequence, but
// never showed the SAME task in Python / C / Java side by side).
//
// Each box is anchored to the PYTHON lesson of the topic (where the
// learner meets the idea first in path order) and shows one small task
// written the way each language wants it. EVERY snippet below was run
// at build time (Python 3.12, GCC 13, OpenJDK 17 — 15 Nov 2026) and all
// three produce the box's stated output exactly; that is the point of
// the box: same result, the differences are the lesson.

export type CompareBox = {
  topic: string;
  topicBn: string;
  task: string;
  taskBn: string;
  output: string;
  langs: { name: "Python" | "C" | "Java"; code: string; note: string; noteBn: string }[];
};

export const COMPARE4: Record<string, CompareBox> = {
  "l4-py-variables": {
    topic: "Variables",
    topicBn: "Variable",
    task: "Store a host and a port, then print them as one line.",
    taskBn: "একটা host আর একটা port রেখে এক লাইনে ছাপো।",
    output: "lab-web:443",
    langs: [
      { name: "Python", code: "host = \"lab-web\"\nport = 443\nprint(f\"{host}:{port}\")", note: "No type is written — the value decides the type.", noteBn: "কোনো type লেখা হয় না — মানই type ঠিক করে।" },
      { name: "C", code: "#include <stdio.h>\nint main(void) {\n    char host[] = \"lab-web\";\n    int port = 443;\n    printf(\"%s:%d\\n\", host, port);\n    return 0;\n}", note: "Every type is written; %s and %d are promises printf trusts.", noteBn: "প্রতিটা type লিখতে হয়; %s আর %d হলো printf-এর কাছে প্রতিশ্রুতি।" },
      { name: "Java", code: "public class Vars {\n    public static void main(String[] args) {\n        String host = \"lab-web\";\n        int port = 443;\n        System.out.println(host + \":\" + port);\n    }\n}", note: "Types are written and checked at compile time; + with a String builds text.", noteBn: "Type লেখা হয় আর compile time-এ যাচাই হয়; String-এর সঙ্গে + text বানায়।" },
    ],
  },
  "l4-pym-operators": {
    topic: "Operators",
    topicBn: "Operator",
    task: "Divide 7 by 2 — once as whole numbers, once as a decimal.",
    taskBn: "7-কে 2 দিয়ে ভাগ করো — একবার পূর্ণসংখ্যায়, একবার দশমিকে।",
    output: "3\n3.5",
    langs: [
      { name: "Python", code: "print(7 // 2)\nprint(7 / 2)", note: "// is the whole-number operator; / always gives a float.", noteBn: "// হলো পূর্ণসংখ্যার operator; / সবসময় float দেয়।" },
      { name: "C", code: "#include <stdio.h>\nint main(void) {\n    printf(\"%d\\n\", 7 / 2);\n    printf(\"%.1f\\n\", 7 / 2.0);\n    return 0;\n}", note: "Two ints divide as ints — one double operand changes the operation itself.", noteBn: "দুই int int হিসেবেই ভাগ হয় — একটা double operand operation-টাই বদলে দেয়।" },
      { name: "Java", code: "public class Ops {\n    public static void main(String[] args) {\n        System.out.println(7 / 2);\n        System.out.println(7 / 2.0);\n    }\n}", note: "Exactly C's rule: the operand types choose the operation.", noteBn: "হুবহু C-র নিয়ম: operand-এর type-ই operation ঠিক করে।" },
    ],
  },
  "l4-py-control": {
    topic: "Control flow — if and loops",
    topicBn: "Control flow — if ও loop",
    task: "Count how many of the failure counts 3, 7, 12 are 5 or more.",
    taskBn: "3, 7, 12 failure count-এর মধ্যে কয়টা 5 বা তার বেশি, গোনো।",
    output: "2",
    langs: [
      { name: "Python", code: "fails = [3, 7, 12]\ncount = 0\nfor f in fails:\n    if f >= 5:\n        count += 1\nprint(count)", note: "The list is walked directly; indentation is the block.", noteBn: "List সরাসরি হাঁটা হয়; indentation-ই block।" },
      { name: "C", code: "#include <stdio.h>\nint main(void) {\n    int fails[] = {3, 7, 12};\n    int count = 0;\n    for (int i = 0; i < 3; i++) {\n        if (fails[i] >= 5) count++;\n    }\n    printf(\"%d\\n\", count);\n    return 0;\n}", note: "The loop carries an index and a length; braces are the block.", noteBn: "Loop index আর দৈর্ঘ্য বহন করে; brace-ই block।" },
      { name: "Java", code: "public class Ctrl {\n    public static void main(String[] args) {\n        int[] fails = {3, 7, 12};\n        int count = 0;\n        for (int f : fails) {\n            if (f >= 5) count++;\n        }\n        System.out.println(count);\n    }\n}", note: "The enhanced for walks values like Python — but the array's length is fixed at creation.", noteBn: "Enhanced for Python-এর মতো মান হাঁটে — কিন্তু array-র দৈর্ঘ্য তৈরির সময়ই নির্দিষ্ট।" },
    ],
  },
  "l4-py-functions": {
    topic: "Functions",
    topicBn: "Function",
    task: "A verdict function for a port — print its verdict for port 23.",
    taskBn: "Port-এর জন্য একটা verdict function — port 23-এর রায় ছাপো।",
    output: "RISKY",
    langs: [
      { name: "Python", code: "def verdict(port):\n    if port == 23:\n        return \"RISKY\"\n    return \"ok\"\n\nprint(verdict(23))", note: "No types on the way in or out — the contract is by convention and naming.", noteBn: "ভেতরে-বাইরে কোনো type নেই — চুক্তি রীতি আর নামকরণে।" },
      { name: "C", code: "#include <stdio.h>\nconst char *verdict(int port) {\n    return port == 23 ? \"RISKY\" : \"ok\";\n}\nint main(void) {\n    printf(\"%s\\n\", verdict(23));\n    return 0;\n}", note: "The return type sits in the signature; a text value is a char pointer.", noteBn: "Return type signature-এ বসে; text মান হলো char pointer।" },
      { name: "Java", code: "public class Fn {\n    static String verdict(int port) {\n        return port == 23 ? \"RISKY\" : \"ok\";\n    }\n    public static void main(String[] args) {\n        System.out.println(verdict(23));\n    }\n}", note: "The method lives inside a class; static lets main call it directly.", noteBn: "Method class-এর ভেতরে থাকে; static থাকায় main সরাসরি ডাকতে পারে।" },
    ],
  },
  "l4-py-files": {
    topic: "Files",
    topicBn: "File পড়া-লেখা",
    task: "Write one alert line to a file, read it back, and print it.",
    taskBn: "একটা alert লাইন file-এ লিখে আবার পড়ে ছাপো।",
    output: "alert: 3 failures",
    langs: [
      { name: "Python", code: "with open(\"alert.txt\", \"w\") as f:\n    f.write(\"alert: 3 failures\\n\")\nwith open(\"alert.txt\") as f:\n    print(f.read().strip())", note: "with closes the file even on error — the mode letter is the contract.", noteBn: "with error হলেও file বন্ধ করে — mode অক্ষরই চুক্তি।" },
      { name: "C", code: "#include <stdio.h>\nint main(void) {\n    FILE *f = fopen(\"alert.txt\", \"w\");\n    fprintf(f, \"alert: 3 failures\\n\");\n    fclose(f);\n    char line[64];\n    f = fopen(\"alert.txt\", \"r\");\n    if (fgets(line, sizeof line, f)) printf(\"%s\", line);\n    fclose(f);\n    return 0;\n}", note: "Every step is manual: keep the FILE*, check each call, close it yourself.", noteBn: "প্রতিটা ধাপ হাতে: FILE* ধরে রাখো, প্রতিটা call যাচাই করো, নিজে বন্ধ করো।" },
      { name: "Java", code: "import java.nio.file.*;\npublic class FilesDemo {\n    public static void main(String[] args) throws Exception {\n        Files.writeString(Path.of(\"alert.txt\"), \"alert: 3 failures\\n\");\n        System.out.print(Files.readString(Path.of(\"alert.txt\")));\n    }\n}", note: "java.nio.file.Files does the one-liners; the checked exception forces an error plan.", noteBn: "java.nio.file.Files এক-লাইনে কাজ করে; checked exception error-পরিকল্পনা বাধ্য করে।" },
    ],
  },
};
