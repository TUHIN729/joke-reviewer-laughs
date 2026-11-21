import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside AI coding agents, written for
// "The joke the reviewer laughs at" (make.fun, 21 Nov 2026).
// The output is a single fixed string: no randomness, no time, no
// environment dependence, so every run writes byte-identical text.
const JOKE =
  "My coding agent writes code so fast that reviewing it feels less like reading a diff and more like reading its diary — and deciding which of its feelings to merge.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
