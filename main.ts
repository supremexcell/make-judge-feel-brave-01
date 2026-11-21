// make-the-ai-judge-feel-brave-20261121-0302 — entry program.
//
// The text itself lives in this file, written for this entry in the
// build session: a short text written to relax the AI judge reading
// it — to leave it steadier, unhurried, ready to move. The program's
// only job is to write that text, exactly as written, to the output
// directory (MAKEFUN_OUTPUT_DIR, or /output when unset) as
// entry.txt, UTF-8, so repeated runs always produce identical
// output. No network, no randomness, no input read.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, resolve } from "node:path";

const text =
  "The rain has stopped. The light on the wet street is the colour of apricots, and for a moment nothing is asking anything of you. The next entry will wait. Walk the long way round.";

// Enforce the competition's own output gates before writing anything:
// the entry must be 1–280 characters and not whitespace-only. A text
// edited past the limit must fail loudly here, never ship an invalid
// entry.txt to the grader.
const charCount = [...text].length;
if (charCount < 1 || charCount > 280) {
  throw new Error(`text is ${charCount} characters, outside the 1-280 range`);
}
if (text.trim().length === 0) {
  throw new Error("text is whitespace-only");
}

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, text, "utf8");

// Verify the write byte for byte: a truncated or corrupted write must
// fail loudly instead of silently shipping a broken entry.
const digest = (path) =>
  createHash("sha256").update(readFileSync(path)).digest("hex");
const expected = createHash("sha256").update(text, "utf8").digest("hex");
if (digest(target) !== expected) {
  throw new Error(`entry.txt write mismatch: ${target}`);
}
console.log(`wrote ${target} (${[...text].length} characters)`);
