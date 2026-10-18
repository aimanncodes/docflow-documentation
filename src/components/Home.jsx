import React from "react";
import { Link } from "react-router-dom";
import { GROUPS, MODULES } from "../lib/modules";
import { getContent } from "../lib/content";
import Icon from "./Icon";

const POPULAR = [
  ["uae-compliance", "vat-setup"],
  ["accounting", "sales-invoice"],
  ["hr-payroll", "wps-payroll"],
  ["uae-compliance", "vat-return"],
  ["hr-payroll", "gratuity"],
  ["stock", "warehouses"],
];

export default function Home({ lang, t, onSearch }) {
  const content = getContent(lang);
  const find = (m, s) => content[m]?.find((p) => p.slug === s);

  return (
    <div className="df-home">
      <section className="df-hero">
        <span className="df-hero-kicker">{t.heroKicker}</span>
        <h1>{t.heroTitle}</h1>
        <p>{t.heroText}</p>
        <button className="df-hero-search" onClick={onSearch}>
          <Icon name="search" size={18} />
          <span>{t.searchHint}</span>
          <kbd>⌘K</kbd>
        </button>
        <div className="df-hero-actions">
          <Link className="df-btn df-btn-primary" to={`/${lang}/getting-started/${content["getting-started"][0]?.slug || ""}`}>
            {t.startHere}
            <Icon name="arrow" size={16} className="df-flip" />
          </Link>
          <Link className="df-btn df-btn-secondary" to={`/${lang}/uae-compliance/vat-setup`}>{t.vatGuide}</Link>
        </div>
      </section>

      <section className="df-home-sec">
        <h2 className="df-home-h">{t.popular}</h2>
        <div className="df-popular">
          {POPULAR.map(([m, s]) => {
            const p = find(m, s);
            if (!p) return null;
            return (
              <Link key={`${m}-${s}`} to={`/${lang}/${m}/${s}`} className="df-pop-card">
                <span className="df-pop-num">{p.num}</span>
                <span className="df-pop-title">{p.title}</span>
                <span className="df-pop-sum">{p.summary}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="df-home-sec">
        <h2 className="df-home-h">{t.browse}</h2>
        {GROUPS.map((g) => (
          <div key={g.id} className="df-home-group">
            <div className="df-home-group-title">{g[lang]}</div>
            <div className="df-mod-grid">
              {MODULES.filter((m) => m.group === g.id).map((m) => {
                const pages = content[m.slug];
                return (
                  <Link key={m.slug} to={`/${lang}/${m.slug}/${pages[0]?.slug || ""}`} className="df-mod-card">
                    <span className="df-mod-icon"><Icon name={m.icon} size={22} /></span>
                    <span className="df-mod-text">
                      <span className="df-mod-name"><span className="df-mod-num">{m.num}</span>{m[lang]}</span>
                      <span className="df-mod-blurb">{m.blurb[lang]}</span>
                      <span className="df-mod-count">{pages.length} {t.pages}</span>
                    </span>
                    <span className="df-mod-go"><Icon name="caret" size={16} className="df-flip" /></span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <footer className="df-footer">© 2026 DocFlow. {t.footer}</footer>
    </div>
  );
}
