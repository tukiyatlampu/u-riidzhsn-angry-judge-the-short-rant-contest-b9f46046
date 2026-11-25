// Angry Judge: The Short Rant Contest — one rant about the self-checkout.
//
// The program writes exactly one text to entry.txt and nothing else.
// The file is what the judge reads; console output is only a log.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The rant, 189 characters. Setup: a self-checkout has spent three minutes
// publicly accusing the shopper of theft over a scanned item. Turn: the
// employee sent to fix it presses one button and leaves without even
// checking the bag — the machine's own colleagues do not believe it.
// Fresh angle: the accusation is public, the acquittal is a shrug, and the
// punchline is that even the staff treat the machine as a liar.
const RANT =
  "The employee comes over, presses one button and leaves without even looking in my bag. Three minutes of public accusations from a checkout whose own colleagues don't believe a word it says.";

// The gate: entry.txt must be UTF-8 text of 1 to 400 characters, not only
// white space. The file holds exactly the text — no trailing newline — so
// the byte count the leaderboard shows is the text itself, which also
// helps the size tie-break (fewer bytes wins an exact tie).
const byteLength = Buffer.byteLength(RANT, "utf8");
if (RANT.length < 1 || RANT.length > 400) {
  throw new Error(`Rant must be 1-400 characters, got ${RANT.length}.`);
}
if (byteLength > 400) {
  throw new Error(`Rant must be at most 400 bytes, got ${byteLength}.`);
}
if (RANT.trim().length === 0) {
  throw new Error("Rant must not be only white space.");
}
// The gate reads the file as UTF-8 text; a stray control character would
// survive the length check but read as garbage, so refuse it here.
if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(RANT)) {
  throw new Error("Rant must not contain control characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, RANT, "utf8");
console.log(`Wrote ${RANT.length} characters (${byteLength} bytes) to ${entryPath}`);
