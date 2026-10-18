/**
 * Creates one folder per manual page under public/screenshots/ and writes
 *  - _shots.txt inside each folder: the file names and captions to capture
 *  - SCREENSHOTS.md at the project root: the full checklist
 * Run with: npm run screenshots   (safe to re-run; existing images are kept)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "src/content/en");
const shotsDir = path.join(root, "public/screenshots");

const files = fs.readdirSync(contentDir).filter((f) => /^\d{2}-.+\.md$/.test(f)).sort();
const lines = ["# Screenshot checklist", "", "Save each PNG with the exact file name shown. The manual picks it up automatically.", ""];
let total = 0;

for (const file of files) {
  const modFolder = file.replace(/\.md$/, "");
  const modNum = parseInt(file.slice(0, 2), 10);
  const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
  let pageIdx = 0;
  let current = null;
  const pages = [];
  for (const line of raw.split("\n")) {
    const head = line.match(/^@@\s*([\w-]+)\s*\|\s*(.+)$/);
    if (head) {
      pageIdx += 1;
      current = { num: `${modNum}.${pageIdx - 1}`, slug: head[1], title: head[2].trim(), figs: [] };
      pages.push(current);
    } else if (current && line.trim().startsWith("!fig ")) {
      current.figs.push(line.trim().slice(5).trim());
    }
  }

  lines.push(`## ${modFolder}`, "");
  for (const p of pages) {
    const folder = path.join(shotsDir, modFolder, `${p.num}-${p.slug}`);
    fs.mkdirSync(folder, { recursive: true });
    const list = p.figs.map((cap, i) => `fig-${p.num}.${i + 1}.png  —  ${cap}`);
    fs.writeFileSync(
      path.join(folder, "_shots.txt"),
      `${p.num} ${p.title}\n\n${list.length ? list.join("\n") : "(no screenshots on this page)"}\n`
    );
    if (p.figs.length) {
      lines.push(`### ${p.num} ${p.title}`);
      lines.push(`Folder: \`public/screenshots/${modFolder}/${p.num}-${p.slug}/\``, "");
      p.figs.forEach((cap, i) => {
        const name = `fig-${p.num}.${i + 1}.png`;
        const done = fs.existsSync(path.join(folder, name)) ? "x" : " ";
        lines.push(`- [${done}] \`${name}\`: ${cap}`);
      });
      lines.push("");
      total += p.figs.length;
    }
  }
}

lines.splice(3, 0, `Total screenshots: **${total}**`, "");
fs.writeFileSync(path.join(root, "SCREENSHOTS.md"), lines.join("\n"));
console.log(`Created folders for ${files.length} modules, ${total} screenshots listed in SCREENSHOTS.md`);
