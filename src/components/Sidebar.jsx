import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GROUPS, MODULES } from "../lib/modules";
import { getContent } from "../lib/content";
import Icon from "./Icon";

const STORE_KEY = "df-manual-open";

function readOpen() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch {
    return {};
  }
}

export default function Sidebar({ lang, t, activeModule, onSearch, onNavigate, open }) {
  const content = getContent(lang);
  const [expanded, setExpanded] = useState(readOpen);

  useEffect(() => {
    if (activeModule && !expanded[activeModule]) setExpanded((e) => ({ ...e, [activeModule]: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModule]);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(expanded));
    } catch {
      /* storage unavailable */
    }
  }, [expanded]);

  const toggle = (slug) => setExpanded((e) => ({ ...e, [slug]: !e[slug] }));

  return (
    <aside className={`df-sidebar${open ? " is-open" : ""}`}>
      <div className="df-sb-brand">
        <Link to={`/${lang}`} className="df-sb-brand-link" onClick={onNavigate}>
          <img src="/logo.svg" alt="DocFlow" className="df-sb-logo" />
        </Link>
        <span className="df-sb-tag">{t.manual}</span>
      </div>

      <button className="df-sb-search" onClick={onSearch}>
        <Icon name="search" size={16} />
        <span>{t.search}</span>
        <kbd>⌘K</kbd>
      </button>

      <nav className="df-sb-nav">
        <NavLink end to={`/${lang}`} className="df-sb-row df-sb-top" onClick={onNavigate}>
          <Icon name="home" size={16} />
          <span>{t.home}</span>
        </NavLink>

        {GROUPS.map((g) => (
          <div key={g.id} className="df-sb-group">
            <div className="df-sb-group-title">{g[lang]}</div>
            {MODULES.filter((m) => m.group === g.id).map((m) => {
              const isOpen = !!expanded[m.slug];
              const pages = content[m.slug];
              return (
                <div key={m.slug} className="df-sb-mod">
                  <div className={`df-sb-row df-sb-modrow${activeModule === m.slug ? " is-current" : ""}`}>
                    <button
                      className={`df-sb-toggle${isOpen ? " is-open" : ""}`}
                      onClick={() => toggle(m.slug)}
                      aria-label="Toggle"
                      aria-expanded={isOpen}
                    >
                      <Icon name="caret" size={14} stroke={2.2} />
                    </button>
                    <Link
                      to={`/${lang}/${m.slug}/${pages[0]?.slug || ""}`}
                      className="df-sb-modlink"
                      onClick={() => {
                        setExpanded((e) => ({ ...e, [m.slug]: true }));
                        onNavigate();
                      }}
                    >
                      <span className="df-sb-tile"><Icon name={m.icon} size={13} stroke={2} /></span>
                      <span className="df-sb-label">{m[lang]}</span>
                    </Link>
                  </div>
                  {isOpen && (
                    <div className="df-sb-pages">
                      {pages.map((p) => (
                        <NavLink
                          key={p.slug}
                          to={`/${lang}/${m.slug}/${p.slug}`}
                          className="df-sb-row df-sb-page"
                          onClick={onNavigate}
                        >
                          <span className="df-sb-num">{p.num}</span>
                          <span className="df-sb-label">{p.title}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
