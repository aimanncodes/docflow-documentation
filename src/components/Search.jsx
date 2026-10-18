import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { flatPages } from "../lib/content";
import { moduleBySlug } from "../lib/modules";
import Icon from "./Icon";

function snippet(text, q) {
  const idx = text.toLowerCase().indexOf(q);
  if (idx < 0) return text.slice(0, 120);
  const start = Math.max(0, idx - 50);
  return (start > 0 ? "…" : "") + text.slice(start, idx + 90) + "…";
}

export default function Search({ lang, t, onClose }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const pages = useMemo(() => flatPages(lang), [lang]);

  useEffect(() => inputRef.current?.focus(), []);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return pages.filter((p) => p.num.endsWith(".0")).slice(0, 8);
    const terms = query.split(/\s+/);
    return pages
      .map((p) => {
        const title = p.title.toLowerCase();
        const body = `${p.summary} ${p.text}`.toLowerCase();
        let score = 0;
        for (const term of terms) {
          if (title.includes(term)) score += 10;
          else if (body.includes(term)) score += 1;
          else return null;
        }
        return { p, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map((r) => r.p);
  }, [q, pages]);

  const go = (p) => {
    navigate(`/${lang}/${p.module}/${p.slug}`);
    onClose();
  };

  const onKey = (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    if (e.key === "Enter" && results[sel]) go(results[sel]);
  };

  const term = q.trim().toLowerCase().split(/\s+/)[0] || "";

  return (
    <div className="df-search-overlay" onMouseDown={onClose}>
      <div className="df-search" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-label={t.search}>
        <div className="df-search-bar">
          <Icon name="search" size={18} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => { setQ(e.target.value); setSel(0); }}
            onKeyDown={onKey}
            placeholder={t.searchHint}
          />
          <kbd>esc</kbd>
        </div>
        <div className="df-search-results">
          {results.length === 0 && <div className="df-search-empty">{t.noResults}</div>}
          {results.map((p, i) => (
            <button
              key={`${p.module}-${p.slug}`}
              className={`df-search-item${i === sel ? " is-sel" : ""}`}
              onMouseEnter={() => setSel(i)}
              onClick={() => go(p)}
            >
              <span className="df-sb-tile"><Icon name={moduleBySlug[p.module].icon} size={13} stroke={2} /></span>
              <span className="df-search-text">
                <span className="df-search-title">
                  <span className="df-search-num">{p.num}</span> {p.title}
                  <span className="df-search-mod"> · {moduleBySlug[p.module][lang]}</span>
                </span>
                <span className="df-search-snip">{term ? snippet(p.text, term) : p.summary}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
