import { MODULES } from "./modules";
import { parseBlocks, plainText } from "./markdown";

/**
 * Content files: src/content/<lang>/<NN-module>.md
 * Each file holds every page of one module. A page starts with
 *   @@ page-slug | Page title
 *   @summary One-line description shown under the title
 * Page numbers (4.3) and figure numbers (4.3.2) come from the English file order,
 * so the Arabic file must keep the same page slugs and figure order.
 */
const files = import.meta.glob("../content/*/*.md", { query: "?raw", import: "default", eager: true });
/* Companion files src/content/<lang>/extra/<NN-module>.md deepen existing pages.
 * Each block starts with "@@ page-slug". Text under "@before" is placed after the
 * summary, text under "@after" (or with no marker) is added at the end of the page. */
const extras = import.meta.glob("../content/*/extra/*.md", { query: "?raw", import: "default", eager: true });

function loadExtras(lang, mod) {
  const raw = extras[`../content/${lang}/extra/${mod.file}.md`];
  const out = {};
  if (!raw) return out;
  let cur = null;
  let part = "after";
  for (const line of raw.replace(/\r/g, "").split("\n")) {
    const head = line.match(/^@@\s*([\w-]+)\s*$/);
    if (head) {
      cur = out[head[1]] = { before: [], after: [] };
      part = "after";
    } else if (cur && line.trim() === "@before") part = "before";
    else if (cur && line.trim() === "@after") part = "after";
    else if (cur) cur[part].push(line);
  }
  return out;
}

function splitPages(raw) {
  const pages = [];
  let cur = null;
  for (const line of raw.replace(/\r/g, "").split("\n")) {
    const head = line.match(/^@@\s*([\w-]+)\s*\|\s*(.+)$/);
    if (head) {
      cur = { slug: head[1], title: head[2].trim(), summary: "", body: [] };
      pages.push(cur);
    } else if (cur && line.startsWith("@summary ")) {
      cur.summary = line.slice(9).trim();
    } else if (cur) cur.body.push(line);
  }
  return pages.map((p) => ({ ...p, body: p.body.join("\n") }));
}

function load(lang, mod) {
  const raw = files[`../content/${lang}/${mod.file}.md`];
  return raw ? splitPages(raw) : [];
}

function build(lang) {
  const out = {};
  for (const mod of MODULES) {
    const enPages = load("en", mod);
    const local = lang === "en" ? enPages : load(lang, mod);
    const bySlug = Object.fromEntries(local.map((p) => [p.slug, p]));
    const ex = loadExtras(lang, mod);
    out[mod.slug] = enPages.map((enPage, idx) => {
      const p = bySlug[enPage.slug] || enPage;
      const num = `${mod.num}.${idx}`;
      const e = ex[enPage.slug];
      const body = e ? [e.before.join("\n"), p.body, e.after.join("\n")].join("\n\n") : p.body;
      const blocks = parseBlocks(body);
      let fig = 0;
      let sec = 0;
      const folder = `${mod.file}/${num}-${enPage.slug}`;
      const number = (list) =>
        list.forEach((b) => {
          if (b.type === "figure") {
            fig += 1;
            b.id = `${num}.${fig}`;
            b.src = `/screenshots/${folder}/fig-${b.id}.png`;
            b.folder = `public/screenshots/${folder}/`;
          }
          if (b.type === "h2") b.anchor = `s${++sec}`;
          if (b.children) number(b.children);
        });
      number(blocks);
      return {
        slug: enPage.slug,
        module: mod.slug,
        num,
        title: p.title,
        summary: p.summary,
        blocks,
        translated: lang === "en" || Boolean(bySlug[enPage.slug]),
        text: plainText(blocks),
      };
    });
  }
  return out;
}

const cache = {};
export function getContent(lang) {
  if (!cache[lang]) cache[lang] = build(lang);
  return cache[lang];
}

export function flatPages(lang) {
  const c = getContent(lang);
  return MODULES.flatMap((m) => c[m.slug]);
}
