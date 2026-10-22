import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getContent } from "../lib/content";
import { MODULES } from "../lib/modules";
import Icon from "./Icon";

/* Page copy. The lists below are built from the {planned} and "@status planned"
 * markers in the content files, so this page never needs editing by hand. */
const COPY = {
  en: {
    whatTitle: "What Planned means",
    what: "Some features in this manual are on the DocFlow roadmap but are not available yet. They are described here so you can see how they will work and plan ahead. Until they are released, the screens, fields and steps may change.",
    spotTitle: "How to recognise planned content",
    spotHead: ["Where", "What you see"],
    spotRows: [
      ["A whole page is planned", "A Planned badge next to the section number, a notice at the top of the page and an orange dot beside the page in the sidebar"],
      ["Part of a page is planned", "A Planned label on the heading, step or table row"],
    ],
    summaryTitle: "Summary",
    summaryHead: ["Module", "Planned pages", "Planned sections and steps"],
    pagesTitle: "Planned pages",
    pagesIntro: "These pages describe a feature that is planned as a whole.",
    itemsTitle: "Planned sections and steps",
    itemsIntro: "These pages are available today, but the parts listed below are planned.",
    noteTitle: "Before you rely on a planned feature",
    note: "Use the current workaround described on the page, such as a custom field, a saved report or a manual step, until the feature is released. Check this page after each DocFlow update: items are removed from the list when they become available.",
  },
  ar: {
    whatTitle: "معنى \"مخطط\"",
    what: "بعض الميزات في هذا الدليل مدرجة في خطة تطوير DocFlow لكنها غير متاحة بعد، وهي موصوفة هنا لتعرف كيف ستعمل وتخطط مسبقاً. وقد تتغير الشاشات والحقول والخطوات حتى إطلاقها.",
    spotTitle: "كيف تتعرف على المحتوى المخطط",
    spotHead: ["الموضع", "ما تراه"],
    spotRows: [
      ["الصفحة كاملة مخططة", "شارة \"مخطط\" بجوار رقم القسم، وتنبيه أعلى الصفحة، ونقطة برتقالية بجوار الصفحة في الشريط الجانبي"],
      ["جزء من الصفحة مخطط", "تسمية \"مخطط\" على العنوان أو الخطوة أو صف الجدول"],
    ],
    summaryTitle: "ملخص",
    summaryHead: ["الوحدة", "الصفحات المخططة", "الأقسام والخطوات المخططة"],
    pagesTitle: "الصفحات المخططة",
    pagesIntro: "تصف هذه الصفحات ميزة مخططة بالكامل.",
    itemsTitle: "الأقسام والخطوات المخططة",
    itemsIntro: "هذه الصفحات متاحة اليوم، لكن الأجزاء المدرجة أدناه مخططة.",
    noteTitle: "قبل الاعتماد على ميزة مخططة",
    note: "استخدم البديل الحالي الموضح في الصفحة، كحقل مخصص أو تقرير محفوظ أو خطوة يدوية، حتى إطلاق الميزة. وراجع هذه الصفحة بعد كل تحديث لـ DocFlow، إذ تُزال العناصر من القائمة عند إتاحتها.",
  },
};

export default function Planned({ lang, t }) {
  const c = COPY[lang];
  const content = getContent(lang);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groups = MODULES.map((m) => {
    const pages = content[m.slug].filter((p) => p.planned || p.plannedItems.length);
    return { mod: m, whole: pages.filter((p) => p.planned), partial: pages.filter((p) => !p.planned && p.plannedItems.length) };
  }).filter((g) => g.whole.length || g.partial.length);
  const itemCount = (g) => g.partial.reduce((n, p) => n + p.plannedItems.length, 0);
  const total = groups.reduce((n, g) => n + g.whole.length + itemCount(g), 0);
  const toc = [
    ["pl-what", c.whatTitle],
    ["pl-spot", c.spotTitle],
    ["pl-summary", c.summaryTitle],
    ["pl-pages", c.pagesTitle],
    ["pl-items", c.itemsTitle],
  ];
  const jump = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
          <h2 id="pl-what">{c.whatTitle}</h2>
          <p>{c.what}</p>

          <h2 id="pl-spot">{c.spotTitle}</h2>
          <div className="df-table-wrap">
            <table>
              <thead><tr>{c.spotHead.map((h) => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>
                {c.spotRows.map(([a, b]) => (
                  <tr key={a}><td>{a} <span className="df-planned">{t.planned}</span></td><td>{b}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="pl-summary">{c.summaryTitle}</h2>
          <div className="df-table-wrap">
            <table>
              <thead><tr>{c.summaryHead.map((h) => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>
                {groups.map((g) => (
                  <tr key={g.mod.slug}>
                    <td>{g.mod.num}. {g.mod[lang]}</td>
                    <td>{g.whole.length || "—"}</td>
                    <td>{itemCount(g) || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="pl-pages">{c.pagesTitle}</h2>
          <p>{c.pagesIntro}</p>
          <ul>
            {groups.flatMap((g) => g.whole).map((p) => (
              <li key={p.slug}>
                <Link to={`/${lang}/${p.module}/${p.slug}`}><span className="df-sb-num">{p.num}</span> {p.title}</Link>
                <span className="df-pl-sub"> — {p.summary}</span>
              </li>
            ))}
          </ul>

          <h2 id="pl-items">{c.itemsTitle}</h2>
          <p>{c.itemsIntro}</p>
          {groups.filter((g) => g.partial.length).map(({ mod, partial }) => (
            <section key={mod.slug} className="df-pl-group">
              <h3>{mod.num}. {mod[lang]}</h3>
              {partial.map((p) => (
                <div key={p.slug} className="df-pl-page">
                  <Link to={`/${lang}/${mod.slug}/${p.slug}`} className="df-pl-title">
                    <span className="df-sb-num">{p.num}</span> {p.title}
                  </Link>
                  <ul>
                    {p.plannedItems.map((it, i) => (
                      <li key={i}>
                        <Link to={`/${lang}/${mod.slug}/${p.slug}${it.anchor ? `#${it.anchor}` : ""}`}>
                          {it.heading ? <strong>{it.text}</strong> : it.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}

          <aside className="df-callout df-callout-note">
            <div className="df-callout-head">
              <Icon name="info" size={16} />
              <span>{c.noteTitle}</span>
            </div>
            <p>{c.note}</p>
          </aside>
        </div>
      </article>

      <aside className="df-toc">
        <div className="df-toc-title">{t.onThisPage}</div>
        {toc.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={(e) => jump(e, id)}>{label}</a>
        ))}
      </aside>
    </div>
  );
}
