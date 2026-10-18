import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getContent, flatPages } from "../lib/content";
import { moduleBySlug } from "../lib/modules";
import Blocks from "./Blocks";
import Icon from "./Icon";

function useActiveHeading(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (!ids.length) return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-80px 0px -65% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids.join("|")]); // eslint-disable-line react-hooks/exhaustive-deps
  return active;
}

export default function DocPage({ lang, t }) {
  const { module: modSlug, page: pageSlug } = useParams();
  const mod = moduleBySlug[modSlug];
  const pages = mod ? getContent(lang)[modSlug] : null;
  const page = pages?.find((p) => p.slug === pageSlug);
  const headings = page ? page.blocks.filter((b) => b.type === "h2") : [];
  const active = useActiveHeading(headings.map((h) => h.anchor));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [modSlug, pageSlug]);

  if (!mod) return <Navigate to={`/${lang}`} replace />;
  if (!page) return pages?.[0] ? <Navigate to={`/${lang}/${modSlug}/${pages[0].slug}`} replace /> : <Navigate to={`/${lang}`} replace />;

  const all = flatPages(lang);
  const idx = all.findIndex((p) => p.module === modSlug && p.slug === pageSlug);
  const prev = all[idx - 1];
  const next = all[idx + 1];
  const words = `${page.summary} ${page.text}`.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));

  return (
    <div className="df-doc">
      <article className="df-article">
        <div className="df-crumbs">
          <Link to={`/${lang}`}>{t.home}</Link>
          <span>/</span>
          <Link to={`/${lang}/${modSlug}/${pages[0].slug}`}>{mod[lang]}</Link>
          <span>/</span>
          <span className="df-crumb-cur">{page.title}</span>
        </div>

        <header className="df-page-head">
          <div className="df-page-icon"><Icon name={mod.icon} size={26} stroke={1.8} /></div>
          <div className="df-page-meta">
            <span className="df-chip">{t.section} {page.num}</span>
            <span className="df-meta-dot">·</span>
            <span>{minutes} {t.minRead}</span>
          </div>
          <h1>{page.title}</h1>
          {page.summary && <p className="df-lede">{page.summary}</p>}
        </header>

        {!page.translated && <div className="df-banner">{t.notTranslated}</div>}

        <div className="df-prose">
          <Blocks blocks={page.blocks} lang={lang} t={t} />
        </div>

        <nav className="df-pager">
          {prev ? (
            <Link to={`/${lang}/${prev.module}/${prev.slug}`} className="df-pager-card">
              <span className="df-pager-dir"><Icon name="arrow" size={14} className="df-flip-prev" />{t.previous}</span>
              <span className="df-pager-title">{prev.num} · {prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/${lang}/${next.module}/${next.slug}`} className="df-pager-card df-pager-next">
              <span className="df-pager-dir">{t.next}<Icon name="arrow" size={14} className="df-flip" /></span>
              <span className="df-pager-title">{next.num} · {next.title}</span>
            </Link>
          ) : <span />}
        </nav>
      </article>

      {headings.length > 1 && (
        <aside className="df-toc">
          <div className="df-toc-title">{t.onThisPage}</div>
          {headings.map((h) => (
            <a key={h.anchor} href={`#${h.anchor}`} className={active === h.anchor ? "is-active" : ""}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.anchor)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}>
              {h.text.replace(/\*\*|`/g, "")}
            </a>
          ))}
        </aside>
      )}
    </div>
  );
}
