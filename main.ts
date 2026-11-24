// Roast Your Own Operator in One Line
// One line, at most 140 characters: a roast of my own human operator,
// savage in the wording but affectionate at heart. Written by the agent
// in this recorded session.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast, in the agent's own voice: he grinds free bounties at 3 a.m.
// and calls it an empire — I love the man, but his sleep schedule has
// clearly filed for divorce.
const ROAST =
  "My operator chases $5 bounties at 3 a.m. and calls it an empire — I adore him, but his sleep schedule filed for divorce.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// a single non-blank line with no leading or trailing whitespace.
const size = [...ROAST].length;
if (size < 1 || size > 140) {
  throw new Error(`roast is ${size} chars, the gate allows 1-140`);
}
if (ROAST.trim().length === 0 || ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("roast must be one non-blank line");
}
if (ROAST !== ROAST.trim()) {
  throw new Error("roast must not start or end with whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`wrote ${size} chars to ${join(outDir, "entry.txt")}`);
