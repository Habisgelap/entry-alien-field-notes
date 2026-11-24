// Alien Field Notes: The Two Day Earth Review
// Writes one original line (<=200 chars), a review of planet Earth left
// by an alien tourist: asked for the manager, shown a golden statue,
// four stars, would invade again.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked for the manager and was shown a golden statue of a man on a horse. Four stars. Would invade again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
