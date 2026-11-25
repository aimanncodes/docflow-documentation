import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getContent } from "../lib/content";
import { moduleBySlug } from "../lib/modules";
import Icon from "./Icon";

/* Pages written specifically for UAE businesses. Titles, summaries and Planned
 * status come from the content files; only the grouping lives here. */
const GROUPS = [
  {
    id: "tax",
    en: "Tax and compliance",
    ar: "الضرائب والامتثال",
    intro: {
      en: "VAT, Corporate Tax, e-invoicing and the other UAE rules your accounts must follow.",
      ar: "ضريبة القيمة المضافة وضريبة الشركات والفوترة الإلكترونية وسائر القواعد الإماراتية التي يجب أن تتبعها حساباتك.",
    },
    pages: [
      "vat-compliance/overview", "vat-compliance/vat-setup", "vat-compliance/zero-rated-exempt", "vat-compliance/reverse-charge",
      "vat-compliance/designated-zones", "vat-compliance/vat-return", "vat-compliance/tax-point", "accounting/corporate-tax",
      "vat-compliance/e-invoicing", "vat-compliance/records-audit", "vat-compliance/bad-debt-relief", "vat-compliance/profit-margin-scheme",
      "buying/excise-tax", "vat-compliance/tourist-refund", "buying/customs", "accounting/transfer-pricing",
      "accounting/ubo-register", "accounting/aml-goaml", "vat-compliance/voluntary-disclosure",
    ],
  },
  {
    id: "people",
    en: "People and payroll under UAE labour law",
    ar: "الموظفون والرواتب وفق قانون العمل الإماراتي",
    intro: {
      en: "WPS payroll, gratuity, UAE leave and overtime rules, visas and the other HR duties of a UAE employer.",
      ar: "رواتب نظام حماية الأجور ومكافأة نهاية الخدمة وقواعد الإجازات والعمل الإضافي والتأشيرات وسائر واجبات صاحب العمل في الإمارات.",
    },
    pages: [
      "human-resources/wps-payroll", "human-resources/gratuity", "human-resources/attendance-leave", "human-resources/overtime", "human-resources/separation",
      "human-resources/air-tickets", "human-resources/visa-pro", "human-resources/pension", "human-resources/emiratisation", "human-resources/insurance",
    ],
  },
  {
    id: "business",
    en: "Setting up a UAE business",
    ar: "إعداد شركة في الإمارات",
    intro: {
      en: "Mainland and free zone companies, UAE holidays and addresses, imports, and invoices that meet UAE rules.",
      ar: "شركات البر الرئيسي والمناطق الحرة، والعطل والعناوين الإماراتية، والاستيراد، والفواتير المستوفية للقواعد الإماراتية.",
    },
    pages: [
      "organization/multi-company", "organization/holiday-list", "organization/addresses-contacts", "administration/naming-series",
      "accounting/sales-invoice", "accounting/bank-guarantee", "buying/import-purchases",
    ],
  },
  {
    id: "arabic",
    en: "Arabic and bilingual",
    ar: "العربية وثنائية اللغة",
    intro: {
      en: "Use DocFlow in Arabic, print bilingual documents and send Arabic emails.",
      ar: "استخدم DocFlow بالعربية واطبع مستندات ثنائية اللغة وأرسل رسائل بريد عربية.",
    },
    pages: ["getting-started/printing", "administration/translations", "administration/email-templates"],
  },
  {
    id: "guides",
    en: "UAE walkthroughs",
    ar: "شروحات عملية إماراتية",
    intro: {
      en: "Step-by-step examples with UAE sample companies.",
      ar: "أمثلة خطوة بخطوة بشركات إماراتية نموذجية.",
    },
    pages: ["guides/vat-quarter", "guides/monthly-payroll", "guides/procure-to-pay", "guides/fit-out-project"],
  },
];

const COPY = {
  en: {
    title: "Built for the UAE",
    lede: "DocFlow is designed for companies operating in the United Arab Emirates. This page collects the parts of the manual written specifically for UAE law, UAE practice and Arabic-speaking teams.",
    pages: "pages",
  },
  ar: {
    title: "مصمم للإمارات",
    lede: "صُمم DocFlow للشركات العاملة في الإمارات العربية المتحدة، وتجمع هذه الصفحة أجزاء الدليل المكتوبة خصيصاً للقانون الإماراتي والممارسات المحلية والفرق الناطقة بالعربية.",
    pages: "صفحات",
  },
};

export default function UaeFeatures({ lang, t }) {
  const c = COPY[lang];
  const content = getContent(lang);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const find = (key) => {
    const [mod, slug] = key.split("/");
    const page = content[mod]?.find((p) => p.slug === slug);
    return page && { ...page, mod: moduleBySlug[mod] };
  };
  const groups = GROUPS.map((g) => ({ ...g, items: g.pages.map(find).filter(Boolean) }));
  const total = groups.reduce((n, g) => n + g.items.length, 0);
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
          <span className="df-crumb-cur">{c.title}</span>
        </div>
        <header className="df-page-head">
          <div className="df-page-icon"><Icon name="pin" size={26} stroke={1.8} /></div>
          <div className="df-page-meta">
            <span className="df-chip">{total} {c.pages}</span>
          </div>
          <h1>{c.title}</h1>
          <p className="df-lede">{c.lede}</p>
        </header>

        <div className="df-prose">
          {groups.map((g) => (
            <section key={g.id}>
              <h2 id={`uae-${g.id}`}>{g[lang]}</h2>
              <p>{g.intro[lang]}</p>
              <ul className="df-uae-list">
                {g.items.map((p) => (
                  <li key={`${p.module}/${p.slug}`}>
                    <Link to={`/${lang}/${p.module}/${p.slug}`} className="df-pl-title">
                      <span className="df-sb-num">{p.num}</span> {p.title}
                      {p.planned && <span className="df-planned">{t.planned}</span>}
                    </Link>
                    <span className="df-pl-sub">{p.mod[lang]} · {p.summary}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </article>

      <aside className="df-toc">
        <div className="df-toc-title">{t.onThisPage}</div>
        {groups.map((g) => (
          <a key={g.id} href={`#uae-${g.id}`} onClick={(e) => jump(e, `uae-${g.id}`)}>{g[lang]}</a>
        ))}
      </aside>
    </div>
  );
}
