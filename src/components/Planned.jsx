import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getContent } from "../lib/content";
import { MODULES } from "../lib/modules";
import Icon from "./Icon";

/** Index of everything marked {planned} or "@status planned", grouped by module. */
export default function Planned({ lang, t }) {
  const content = getContent(lang);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groups = MODULES.map((m) => ({
    mod: m,
    pages: content[m.slug].filter((p) => p.planned || p.plannedItems.length),
  })).filter((g) => g.pages.length);
  const total = groups.reduce((n, g) => n + g.pages.reduce((k, p) => k + (p.planned ? 1 : 0) + p.plannedItems.length, 0), 0);

  return (
    <div className="df-doc">
      <article className="df-article">
        <div className="df-crumbs">
          <Link to={`/${lang}`}>{t.home}</Link>
          <span>/</span>
          <span className="df-crumb-cur">{t.plannedFeatures}</span>
        </div>
        <header className="df-page-head">
          <div className="df-page-icon"><Icon name="flag" size={26} stroke={1.8} /></div>
          <div className="df-page-meta">
            <span className="df-planned">{total} {t.plannedCount}</span>
          </div>
          <h1>{t.plannedFeatures}</h1>
          <p className="df-lede">{t.plannedIntro}</p>
        </header>

        <div className="df-prose">
          {groups.map(({ mod, pages }) => (
            <section key={mod.slug} className="df-pl-group">
              <h2>{mod.num}. {mod[lang]}</h2>
              {pages.map((p) => (
                <div key={p.slug} className="df-pl-page">
                  <Link to={`/${lang}/${mod.slug}/${p.slug}`} className="df-pl-title">
                    <span className="df-sb-num">{p.num}</span> {p.title}
                    {p.planned && <span className="df-planned">{t.plannedWhole}</span>}
                  </Link>
                  {p.plannedItems.length > 0 && (
                    <ul>
                      {p.plannedItems.map((it, i) => (
                        <li key={i}>
                          <Link to={`/${lang}/${mod.slug}/${p.slug}${it.anchor ? `#${it.anchor}` : ""}`}>
                            {it.heading ? <strong>{it.text}</strong> : it.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
