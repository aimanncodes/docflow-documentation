/**
 * Module registry. The order here sets the section numbers (1, 2, 3 …),
 * the sidebar order and the screenshot folder names.
 * `file` matches the content file name in src/content/<lang>/<file>.md
 */
export const GROUPS = [
  { id: "start", en: "Start here", ar: "ابدأ من هنا" },
  { id: "guides", en: "Guides", ar: "الأدلة العملية" },
  { id: "platform", en: "Platform", ar: "المنصة" },
  { id: "finance", en: "Finance", ar: "المالية" },
  { id: "trade", en: "Trade", ar: "التجارة" },
  { id: "production", en: "Production", ar: "الإنتاج" },
  { id: "service", en: "Projects & Service", ar: "المشاريع والخدمات" },
  { id: "people", en: "People", ar: "الموارد البشرية" },
  { id: "compliance", en: "Compliance", ar: "الامتثال" },
];

export const MODULES = [
  { slug: "getting-started", group: "start", icon: "rocket", en: "Getting Started", ar: "البدء", blurb: { en: "First login, setup wizard and finding your way around", ar: "أول تسجيل دخول ومعالج الإعداد والتنقل في النظام" } },
  { slug: "framework", group: "platform", icon: "cube", en: "Framework", ar: "إطار العمل", blurb: { en: "Customise forms, workflows, reports and automation", ar: "تخصيص النماذج وسير العمل والتقارير والأتمتة" } },
  { slug: "organization", group: "platform", icon: "building", en: "Organisation", ar: "المؤسسة", blurb: { en: "Companies, branches, departments and fiscal years", ar: "الشركات والفروع والأقسام والسنوات المالية" } },
  { slug: "accounting", group: "finance", icon: "receipt", en: "Accounting", ar: "المحاسبة", blurb: { en: "Invoices, payments, ledgers and financial statements", ar: "الفواتير والمدفوعات والدفاتر والقوائم المالية" } },
  { slug: "assets", group: "finance", icon: "landmark", en: "Assets", ar: "الأصول", blurb: { en: "Fixed assets, depreciation and asset movements", ar: "الأصول الثابتة والإهلاك وحركة الأصول" } },
  { slug: "crm", group: "trade", icon: "chart", en: "CRM", ar: "إدارة العملاء", blurb: { en: "Leads, opportunities and the sales pipeline", ar: "العملاء المحتملون والفرص ومسار المبيعات" } },
  { slug: "selling", group: "trade", icon: "store", en: "Selling", ar: "المبيعات", blurb: { en: "Customers, quotations and sales orders", ar: "العملاء وعروض الأسعار وأوامر البيع" } },
  { slug: "buying", group: "trade", icon: "cart", en: "Buying", ar: "المشتريات", blurb: { en: "Suppliers, purchase orders and requests", ar: "الموردون وأوامر الشراء وطلبات المواد" } },
  { slug: "stock", group: "trade", icon: "box", en: "Stock", ar: "المخزون", blurb: { en: "Items, warehouses and stock movements", ar: "الأصناف والمستودعات وحركات المخزون" } },
  { slug: "manufacturing", group: "production", icon: "factory", en: "Manufacturing", ar: "التصنيع", blurb: { en: "Bills of materials, work orders and production", ar: "قوائم المواد وأوامر العمل والإنتاج" } },
  { slug: "subcontracting", group: "production", icon: "cycle", en: "Subcontracting", ar: "التعاقد من الباطن", blurb: { en: "Outsourced production and receipts", ar: "الإنتاج الخارجي والاستلامات" } },
  { slug: "quality", group: "production", icon: "shield", en: "Quality", ar: "الجودة", blurb: { en: "Inspections, goals and quality reviews", ar: "الفحوصات والأهداف ومراجعات الجودة" } },
  { slug: "projects", group: "service", icon: "board", en: "Projects", ar: "المشاريع", blurb: { en: "Projects, tasks, timesheets and costing", ar: "المشاريع والمهام وسجلات الوقت والتكاليف" } },
  { slug: "support", group: "service", icon: "lifebuoy", en: "Support & Helpdesk", ar: "الدعم الفني", blurb: { en: "Tickets, SLAs, warranty and maintenance visits", ar: "التذاكر واتفاقيات الخدمة والضمان وزيارات الصيانة" } },
  { slug: "website", group: "service", icon: "globe", en: "Website & Portal", ar: "الموقع والبوابة", blurb: { en: "Web pages, web forms and the customer portal", ar: "صفحات الويب والنماذج وبوابة العملاء" } },
  { slug: "hr-payroll", group: "people", icon: "user", en: "HR & Payroll", ar: "الموارد البشرية والرواتب", blurb: { en: "Employees, leave, WPS payroll and gratuity", ar: "الموظفون والإجازات ورواتب نظام حماية الأجور ومكافأة نهاية الخدمة" } },
  { slug: "uae-compliance", group: "compliance", icon: "flag", en: "UAE Compliance", ar: "الامتثال في الإمارات", blurb: { en: "VAT, Corporate Tax, e-invoicing and FTA returns", ar: "ضريبة القيمة المضافة وضريبة الشركات والفوترة الإلكترونية وإقرارات الهيئة" } },
  { slug: "guides", group: "guides", icon: "doc", en: "End-to-end guides", ar: "أدلة عملية متكاملة", blurb: { en: "Complete walkthroughs across modules, and starting points by role", ar: "شروحات كاملة عبر الوحدات ونقاط بداية حسب الدور" } },
].map((m, i) => ({ ...m, num: i + 1, file: `${String(i + 1).padStart(2, "0")}-${m.slug}` }));

export const moduleBySlug = Object.fromEntries(MODULES.map((m) => [m.slug, m]));
