#!/usr/bin/env node
const hex = (process.argv[2] || "#3b82f6").replace("#", "");
if (hex === "-h" || hex === "--help") {
  console.log("Usage: color-palette-gen [#hexColor]");
  process.exit(0);
}
const r = parseInt(hex.substring(0, 2), 16);
const g = parseInt(hex.substring(2, 4), 16);
const b = parseInt(hex.substring(4, 6), 16);

// Complementary
const comp = [255 - r, 255 - g, 255 - b].map(x => x.toString(16).padStart(2, "0")).join("");
// Analogous shift
const a1 = [(r + 40) % 256, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
const a2 = [r, (g + 40) % 256, b].map(x => x.toString(16).padStart(2, "0")).join("");

console.log(`\x1b[36m=== Color Palette for #${hex} ===\x1b[0m\n`);
console.log(`Base Color:          #${hex}`);
console.log(`Complementary:       \x1b[33m#${comp}\x1b[0m`);
console.log(`Analogous Shift 1:   #${a1}`);
console.log(`Analogous Shift 2:   #${a2}`);
