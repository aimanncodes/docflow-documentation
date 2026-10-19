# Planned features

Features described in the manual that are not yet built in DocFlow. Each one is labelled **Planned** on the site, and the in-app list at `/en/planned` (sidebar › **Planned features**) links straight to each item.

Links below are site paths; open them on the live site or at `http://localhost:5288` when running locally. Line numbers point to the English file; the Arabic file in `src/content/ar/` has the same item on the same line.

## How the labels work

| Label | Syntax in the content file | Shown as |
| --- | --- | --- |
| Whole page planned | `@status planned` on the line after `@summary` | Badge next to the section number, banner at the top of the page, orange dot in the sidebar |
| Section, row or step planned | `{planned}` at the end of a heading, list item or step, or in the first cell of a table row | Orange **Planned** chip |

When a feature ships, delete the marker in **both** `en` and `ar` files and it disappears from the list automatically.

## Labelled as planned

### 01-getting-started

| Page | Link | What is planned | Source line |
| --- | --- | --- | --- |
| 1.7 | [Notifications, emails and alerts](/en/getting-started/notifications#s3) | Visa, Emirates ID or passport expiring — 60 days before | `src/content/en/01-getting-started.md:508` |
| 1.8 | [Lists, filters and views](/en/getting-started/list-views#s2) | Employees with visas expiring in 60 days — Visa Expiry between today and today + 60 | `src/content/en/01-getting-started.md:563` |
| 1.13 | [Backups and exporting data](/en/getting-started/backups-export#s5) | Section: FTA audit file | `src/content/en/01-getting-started.md:895` |

### 02-framework

| Page | Link | What is planned | Source line |
| --- | --- | --- | --- |
| 2.10 | [Dashboards, charts and number cards](/en/framework/dashboards#s3) | HR — Headcount, joiners and leavers, visas expiring | `src/content/en/02-framework.md:593` |
| 2.13 | [Integrations and API](/en/framework/integrations-api#s4) | WPS — SIF file generated for your bank or exchange house | `src/content/en/02-framework.md:740` |

### 16-hr-payroll

| Page | Link | What is planned | Source line |
| --- | --- | --- | --- |
| 16.0 | [HR & Payroll at a glance](/en/hr-payroll/overview#s1) | Monthly — Salary Slip, Payroll Entry, WPS file | `src/content/en/16-hr-payroll.md:16` |
| 16.0 | [HR & Payroll at a glance](/en/hr-payroll/overview#s2) | PRO — Visa, Emirates ID and labour card renewals | `src/content/en/16-hr-payroll.md:33` |
| 16.1 | [Employee records](/en/hr-payroll/employees#s2) | Section: UAE identification (custom fields) | `src/content/en/16-hr-payroll.md:113` |
| 16.4 | [Salary structures](/en/hr-payroll/salary-structure#s1) | Pension – Employee (UAE nationals) — Deduction | `src/content/en/16-hr-payroll.md:381` |
| 16.4 | [Salary structures](/en/hr-payroll/salary-structure#s1) | Pension – Employer — Earning, not paid | `src/content/en/16-hr-payroll.md:382` |
| 16.5 | [Monthly payroll and WPS](/en/hr-payroll/wps-payroll#s1) | 5. Generate WPS file — WPS Salary File (SIF) | `src/content/en/16-hr-payroll.md:466` |
| 16.5 | [Monthly payroll and WPS](/en/hr-payroll/wps-payroll#s4) | Section: The WPS salary file | `src/content/en/16-hr-payroll.md:494` |
| 16.7 | [Separation and final settlement](/en/hr-payroll/separation#s3) | Cancellation of labour card and visa, or transfer to a new employer — PRO | `src/content/en/16-hr-payroll.md:657` |
| 16.16 | [Air tickets and leave salary](/en/hr-payroll/air-tickets) | **Whole page** | `src/content/en/16-hr-payroll.md:1026` |
| 16.17 | [Visas, Emirates ID and PRO tasks](/en/hr-payroll/visa-pro) | **Whole page** | `src/content/en/16-hr-payroll.md:1068` |
| 16.18 | [Pension contributions for UAE and GCC nationals](/en/hr-payroll/pension) | **Whole page** | `src/content/en/16-hr-payroll.md:1119` |
| 16.19 | [Emiratisation targets](/en/hr-payroll/emiratisation) | **Whole page** | `src/content/en/16-hr-payroll.md:1157` |
| 16.21 | [Payroll and HR reports](/en/hr-payroll/payroll-reports#s2) | Document expiry (custom) — Visas, IDs and permits expiring soon | `src/content/en/16-hr-payroll.md:1240` |
| 16.22 | [Health insurance and unemployment insurance](/en/hr-payroll/insurance) | **Whole page** | `src/content/en/16-hr-payroll.md:1252` |

### 17-uae-compliance

| Page | Link | What is planned | Source line |
| --- | --- | --- | --- |
| 17.8 | [Records, audits and FTA requests](/en/uae-compliance/records-audit#s3) | Section: The FTA Audit File (FAF) | `src/content/en/17-uae-compliance.md:534` |
| 17.12 | [Excise tax](/en/uae-compliance/excise-tax#s2) | Use the Excise Tax Return report to prepare the monthly return. | `src/content/en/17-uae-compliance.md:695` |
| 17.13 | [Tax refunds for tourists](/en/uae-compliance/tourist-refund#s1) | At the point of sale, for an eligible tourist, mark the invoice as Tourist Refund and capture the passport det | `src/content/en/17-uae-compliance.md:720` |

### 18-guides

| Page | Link | What is planned | Source line |
| --- | --- | --- | --- |
| 18.5 | [Monthly payroll](/en/guides/monthly-payroll#s2) | Generate the WPS SIF file and upload it to the bank. | `src/content/en/18-guides.md:186` |
| 18.5 | [Monthly payroll](/en/guides/monthly-payroll#s3) | The gratuity accrual and air ticket accrual are posted. | `src/content/en/18-guides.md:194` |
| 18.5 | [Monthly payroll](/en/guides/monthly-payroll#s3) | Pension contributions for UAE nationals are paid to the authority. | `src/content/en/18-guides.md:195` |
| 18.9 | [HR officer's guide](/en/guides/role-hr#s3) | Review visa, Emirates ID and insurance expiries. | `src/content/en/18-guides.md:298` |

## Not labelled, but worth confirming

These are described as working today. I believe a standard ERP of this kind supports them, or that they can be configured with the platform's own tools, but please check them against DocFlow:

| Item | Where | Why it may need checking |
| --- | --- | --- |
| E-invoicing onboarding (**E-Invoicing Settings**) | `/en/uae-compliance/e-invoicing` | DocFlow is an accredited ASP, but confirm the in-app settings screen and steps match the product |
| UAE gratuity calculation (21/30 days rule, accrual) | `/en/hr-payroll/gratuity` | Needs gratuity rules configured for UAE law |
| Employee onboarding tasks for entry permit, medical, Emirates ID | `/en/hr-payroll/recruitment#s6` | Uses the standard onboarding template, filled with UAE tasks |
| Corporate Tax workings and accruals | `/en/uae-compliance/corporate-tax` | Described using journals and reports, not a dedicated tax module |
| UBO register, AML fields, related-party tracking | `/en/uae-compliance/ubo-register`, `/aml-goaml`, `/transfer-pricing` | Built with custom document types, custom fields and saved reports |
| Vehicle, tenancy and other example custom records (Mulkiya, Salik, Ejari, Makani) | `/en/framework/custom-doctypes`, `/en/assets/asset-movement` | Shown as examples of what you can configure, not as standard fields |
| Telephony and WhatsApp logging | `/en/crm/communication` | Described as "if an integration is configured" |
