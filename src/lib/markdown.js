/**
 * A small block parser for the manual's content files.
 *
 * Supported syntax
 *   ## Heading / ### Sub-heading
 *   paragraphs, - bullet lists, 1. numbered lists (rendered as steps)
 *   | tables | with | a header row |
 *   !fig Caption text                      → numbered screenshot figure
 *   :::tip|note|warning|uae|example Title   → callout, closed by :::
 *   :::details Question                    → collapsible accordion, closed by :::
 *   inline: **bold**, *italic*, `code`, [label](/module/page)
 */

export function parseBlocks(src) {
  const lines = src.replace(/\r/g, "").split("\n");
  const blocks = [];
  let i = 0;

  const isBlank = (l) => l.trim() === "";
  const startsSpecial = (l) =>
    /^(#{2,3} |!fig |:::|\| |- |\d+\. )/.test(l.trim());

  while (i < lines.length) {
    const line = lines[i];
    const t = line.trim();

    if (isBlank(line)) { i++; continue; }

    if (t.startsWith(":::") && t.length > 3) {
      const [kind, ...rest] = t.slice(3).split(" ");
      const title = rest.join(" ").trim();
      const inner = [];
      i++;
      let depth = 0;
      while (i < lines.length) {
        const lt = lines[i].trim();
        if (lt.startsWith(":::") && lt.length > 3) depth++;
        else if (lt === ":::") {
          if (depth === 0) break;
          depth--;
        }
        inner.push(lines[i]);
        i++;
      }
      i++; // closing :::
      blocks.push({ type: kind === "details" ? "details" : "callout", kind, title, children: parseBlocks(inner.join("\n")) });
      continue;
    }

    if (t.startsWith("### ")) { blocks.push({ type: "h3", text: t.slice(4) }); i++; continue; }
    if (t.startsWith("## ")) { blocks.push({ type: "h2", text: t.slice(3) }); i++; continue; }

    if (t.startsWith("!fig ")) { blocks.push({ type: "figure", caption: t.slice(5).trim() }); i++; continue; }

    if (t.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = lines[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
        i++;
      }
      blocks.push({ type: "table", head: rows[0], rows: rows.slice(1) });
      continue;
    }

    if (/^- /.test(t)) {
      const items = [];
      while (i < lines.length && /^- /.test(lines[i].trim())) { items.push(lines[i].trim().slice(2)); i++; }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\. /.test(t)) {
      const items = [];
      const start = parseInt(t, 10);
      while (i < lines.length && /^\d+\. /.test(lines[i].trim())) { items.push(lines[i].trim().replace(/^\d+\. /, "")); i++; }
      blocks.push({ type: "ol", items, start });
      continue;
    }

    const para = [];
    while (i < lines.length && !isBlank(lines[i]) && !startsSpecial(lines[i])) { para.push(lines[i].trim()); i++; }
    blocks.push({ type: "p", text: para.join(" ") });
  }
  return blocks;
}

/** Splits inline markdown into tokens React can render. */
export function parseInline(text) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ t: "text", v: text.slice(last, m.index) });
    const s = m[0];
    if (s.startsWith("**")) out.push({ t: "b", v: s.slice(2, -2) });
    else if (s.startsWith("`")) out.push({ t: "code", v: s.slice(1, -1) });
    else if (s.startsWith("[")) {
      const [, label, href] = s.match(/\[([^\]]+)\]\(([^)]+)\)/);
      out.push({ t: "a", v: label, href });
    } else out.push({ t: "i", v: s.slice(1, -1) });
    last = m.index + s.length;
  }
  if (last < text.length) out.push({ t: "text", v: text.slice(last) });
  return out;
}

export function plainText(blocks) {
  return blocks
    .map((b) => {
      if (b.children) return `${b.title} ${plainText(b.children)}`;
      if (b.items) return b.items.join(" ");
      if (b.type === "table") return [b.head, ...b.rows].flat().join(" ");
      return b.text || b.caption || "";
    })
    .join(" ")
    .replace(/\*\*|`|\*|\[|\]\([^)]*\)/g, "");
}
