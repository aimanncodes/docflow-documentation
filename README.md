# DocFlow User Manual

A bilingual (English / Arabic) user manual for DocFlow, written for businesses operating in the UAE.
Built with plain React (Vite, React Router, plain CSS). No UI library.

## Run it

```bash
npm install
npm run dev
```

`npm run build` creates a static site in `dist/`. Because it uses clean URLs (`/en/accounting/sales-invoice`),
configure your host to serve `index.html` for unknown paths (SPA fallback).

## Where things live

| Path | What it is |
| --- | --- |
| `src/content/en/NN-module.md` | English text, one file per module |
| `src/content/ar/NN-module.md` | Arabic text, same page slugs and figure order |
| `src/content/<lang>/extra/NN-module.md` | Deeper sections (before you start, key fields, behind the scenes, common problems, related pages) added to existing pages |
| `src/lib/modules.js` | Module list, order, names, icons and groups |
| `src/styles.css` | All styles; colour tokens follow the DocFlow light-theme spec |
| `public/screenshots/` | One folder per page for screenshots |
| `SCREENSHOTS.md` | Checklist of every screenshot to capture |

## Writing content

Each module file contains several pages:

```
@@ page-slug | Page title
@summary One line shown under the title

## Section heading
Paragraph text with **bold**, `code` and [links](/accounting/sales-invoice).

1. Numbered steps
- Bullets

| Table | Header |
| --- | --- |

!fig Caption for a screenshot

:::tip Optional title        (also: note, warning, uae, example)
Callout text
:::

:::details A question readers ask
The answer, shown in an accordion
:::
```

Page numbers (4.3) and figure numbers (4.3.2) are generated from the order in the English file.
When you add or move a page or figure, update the Arabic file in the same order.

## Deepening a page without editing it

Add a block to `src/content/<lang>/extra/NN-module.md`:

```
@@ page-slug
@before
:::note Before you start
...
:::
@after
## Common problems
...
```

`@before` text appears at the top of the page, `@after` text at the end. Keep figures in the main module file so numbering stays stable.

## Adding screenshots

1. Run `npm run screenshots`. It creates any missing folders and refreshes `SCREENSHOTS.md`.
2. Each page folder contains `_shots.txt` listing the exact file names, e.g. `fig-4.3.1.png`.
3. Save the PNG with that name. The manual shows it automatically instead of the placeholder.

Both languages use the same image files.
