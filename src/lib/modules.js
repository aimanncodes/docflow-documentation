/**
 * Module registry. The order here sets the section numbers (1, 2, 3 …),
 * the sidebar order and the screenshot folder names.
 * `file` matches the content file name in src/content/<lang>/<file>.md
 */
export const GROUPS = [
  { id: "start", en: "Start here", ar: "ابدأ من هنا" },
  { id: "finance", en: "Finance", ar: "المالية" },
  { id: "trade", en: "Trade", ar: "التجارة" },
  { id: "production", en: "Production", ar: "الإنتاج" },
  { id: "apps", en: "Apps", ar: "التطبيقات" },
  { id: "setup", en: "Setup", ar: "الإعداد" },
  { id: "guides", en: "Guides", ar: "الأدلة العملية" },
];

export const MODULES = [
  { slug: "getting-started", group: "start", icon: "rocket", en: "Getting Started", ar: "البدء", blurb: { en: "Signing in, the home screen, search, language, entity and everyday basics", ar: "تسجيل الدخول والشاشة الرئيسية والبحث واللغة والكيان والأساسيات اليومية" } },
  { slug: "accounting", group: "finance", icon: "receipt", en: "Accounting", ar: "المحاسبة", blurb: { en: "Invoices, payments, ledgers and financial reports", ar: "الفواتير والمدفوعات والدفاتر والتقارير المالية" } },
  { slug: "assets", group: "finance", icon: "landmark", en: "Assets", ar: "الأصول", blurb: { en: "Fixed assets, depreciation and asset movements", ar: "الأصول الثابتة والإهلاك وحركة الأصول" } },
  { slug: "buying", group: "trade", icon: "cart", en: "Buying", ar: "المشتريات", blurb: { en: "Suppliers, purchase orders and requests", ar: "الموردون وأوامر الشراء وطلبات المواد" } },
  { slug: "selling", group: "trade", icon: "store", en: "Selling", ar: "المبيعات", blurb: { en: "Customers, quotations and sales orders", ar: "العملاء وعروض الأسعار وأوامر البيع" } },
  { slug: "stock", group: "trade", icon: "box", en: "Stock", ar: "المخزون", blurb: { en: "Items, warehouses and stock movements", ar: "الأصناف والمستودعات وحركات المخزون" } },
  { slug: "support", group: "trade", icon: "lifebuoy", en: "Support", ar: "الدعم الفني", blurb: { en: "Issues, SLAs, maintenance and warranty", ar: "البلاغات واتفاقيات الخدمة والصيانة والضمان" } },
  { slug: "manufacturing", group: "production", icon: "factory", en: "Manufacturing", ar: "التصنيع", blurb: { en: "Bills of materials, work orders and production", ar: "قوائم المواد وأوامر العمل والإنتاج" } },
  { slug: "projects", group: "production", icon: "board", en: "Projects", ar: "المشاريع", blurb: { en: "Projects, tasks and timesheets", ar: "المشاريع والمهام وسجلات الوقت" } },
  { slug: "quality", group: "production", icon: "shield", en: "Quality", ar: "الجودة", blurb: { en: "Inspections, goals and quality reviews", ar: "الفحوصات والأهداف ومراجعات الجودة" } },
  { slug: "subcontracting", group: "production", icon: "cycle", en: "Subcontracting", ar: "التعاقد من الباطن", blurb: { en: "Outsourced production and receipts", ar: "الإنتاج الخارجي والاستلامات" } },
  { slug: "vat-compliance", group: "apps", icon: "flag", en: "VAT Compliance", ar: "الامتثال الضريبي", blurb: { en: "UAE VAT returns, adjustments, audit file and e-invoicing", ar: "إقرارات ضريبة القيمة المضافة والتعديلات وملف التدقيق والفوترة الإلكترونية" } },
  { slug: "crm", group: "apps", icon: "chart", en: "CRM", ar: "إدارة العملاء", blurb: { en: "Leads, opportunities and customers", ar: "العملاء المحتملون والفرص والعملاء" } },
  { slug: "human-resources", group: "apps", icon: "user", en: "Human Resources", ar: "الموارد البشرية", blurb: { en: "Employees, leave, attendance and payroll", ar: "الموظفون والإجازات والحضور والرواتب" } },
  { slug: "administration", group: "setup", icon: "cube", en: "Administration", ar: "الإدارة", blurb: { en: "Users, data, automation, printing and integrations", ar: "المستخدمون والبيانات والأتمتة والطباعة والتكاملات" } },
  { slug: "organization", group: "setup", icon: "building", en: "Organization", ar: "المؤسسة", blurb: { en: "Entities, branches and departments", ar: "الكيانات والفروع والأقسام" } },
  { slug: "settings", group: "setup", icon: "pin", en: "Settings", ar: "الإعدادات", blurb: { en: "Global defaults and module settings", ar: "الإعدادات الافتراضية العامة وإعدادات الوحدات" } },
  { slug: "guides", group: "guides", icon: "doc", en: "End-to-end guides", ar: "أدلة عملية متكاملة", blurb: { en: "Complete walkthroughs across modules, and starting points by role", ar: "شروحات كاملة عبر الوحدات ونقاط بداية حسب الدور" } },
].map((m, i) => ({ ...m, num: i + 1, file: `${String(i + 1).padStart(2, "0")}-${m.slug}` }));

export const moduleBySlug = Object.fromEntries(MODULES.map((m) => [m.slug, m]));
