import React, { useState } from "react";
import { Link } from "react-router-dom";
import { parseInline } from "../lib/markdown";
import Icon from "./Icon";

export function Inline({ text, lang }) {
  return parseInline(text).map((tok, i) => {
    if (tok.t === "b") return <strong key={i}>{tok.v}</strong>;
    if (tok.t === "i") return <em key={i}>{tok.v}</em>;
    if (tok.t === "code") return <code key={i}>{tok.v}</code>;
    if (tok.t === "a") {
      if (tok.href.startsWith("/")) return <Link key={i} to={`/${lang}${tok.href}`}>{tok.v}</Link>;
      return <a key={i} href={tok.href} target="_blank" rel="noreferrer">{tok.v}</a>;
    }
    return <React.Fragment key={i}>{tok.v}</React.Fragment>;
  });
}

const CALLOUT_ICON = { tip: "bulb", note: "info", warning: "alert", uae: "pin", example: "doc" };

function Figure({ block, t }) {
  const [missing, setMissing] = useState(false);
  const file = block.src.split("/").pop();
  return (
    <figure className="df-figure">
      {missing ? (
        <div className="df-figure-ph">
          <Icon name="image" size={28} />
          <span className="df-figure-ph-title">{t.pending}</span>
          <span className="df-figure-ph-path">
            {t.saveAs} <code>{block.folder}{file}</code>
          </span>
        </div>
      ) : (
        <img src={block.src} alt={block.caption} loading="lazy" onError={() => setMissing(true)} />
      )}
      <figcaption>
        <span className="df-figure-num">{t.figure} {block.id}</span>
        <span className="df-figure-cap">{block.caption}</span>
      </figcaption>
    </figure>
  );
}

function Details({ block, lang, t }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`df-details${open ? " is-open" : ""}`}>
      <button className="df-details-head" onClick={() => setOpen(!open)} aria-expanded={open}>
        <Icon name="caret" size={16} className="df-details-caret" />
        <span><Inline text={block.title} lang={lang} /></span>
      </button>
      {open && <div className="df-details-body"><Blocks blocks={block.children} lang={lang} t={t} /></div>}
    </div>
  );
}

export default function Blocks({ blocks, lang, t }) {
  return blocks.map((b, i) => {
    switch (b.type) {
      case "h2":
        return <h2 key={i} id={b.anchor}><Inline text={b.text} lang={lang} /></h2>;
      case "h3":
        return <h3 key={i}><Inline text={b.text} lang={lang} /></h3>;
      case "p":
        return <p key={i}><Inline text={b.text} lang={lang} /></p>;
      case "ul":
        return <ul key={i}>{b.items.map((it, j) => <li key={j}><Inline text={it} lang={lang} /></li>)}</ul>;
      case "ol":
        return (
          <ol key={i} className="df-steps">
            {b.items.map((it, j) => (
              <li key={j}><span className="df-step-n">{(b.start || 1) + j}</span><div><Inline text={it} lang={lang} /></div></li>
            ))}
          </ol>
        );
      case "table":
        return (
          <div key={i} className="df-table-wrap">
            <table>
              <thead><tr>{b.head.map((h, j) => <th key={j}><Inline text={h} lang={lang} /></th>)}</tr></thead>
              <tbody>
                {b.rows.map((r, j) => (
                  <tr key={j}>{r.map((c, k) => <td key={k}><Inline text={c} lang={lang} /></td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "figure":
        return <Figure key={i} block={b} t={t} />;
      case "details":
        return <Details key={i} block={b} lang={lang} t={t} />;
      case "callout":
        return (
          <aside key={i} className={`df-callout df-callout-${b.kind}`}>
            <div className="df-callout-head">
              <Icon name={CALLOUT_ICON[b.kind] || "info"} size={16} />
              <span>{b.title || t.tips[b.kind] || t.tips.note}</span>
            </div>
            <Blocks blocks={b.children} lang={lang} t={t} />
          </aside>
        );
      default:
        return null;
    }
  });
}
