@@ overview | Organisation at a glance
@summary How DocFlow models your business: companies, branches, departments, fiscal years, holiday lists, territories and groups, and the order to set them up.

The Organisation module holds the structure everything else hangs from. Accounts, warehouses, employees and reports are all tied to a **company**; branches, departments and cost centres slice it further; fiscal years and holiday lists set the calendar.

!fig Organisation workspace with links to company, branches, departments and fiscal years

## Building blocks

| Record | What it represents | Used by |
| --- | --- | --- |
| Company | One legal entity with its own trade licence, TRN and books | Every transaction |
| Branch | A location such as Dubai head office or Abu Dhabi showroom | HR, reports, dimensions |
| Department | A team such as Finance or Warehouse | HR, approvals, cost centres |
| Designation | A job title | HR |
| Fiscal Year | The accounting year | Accounting, reports, budgets |
| Holiday List | Weekends and public holidays | Leave, attendance, payroll, delivery dates |
| Territory | Sales region: emirate or country | Selling, CRM, reports |
| Customer / Supplier Group | Classification of parties | Pricing, accounts, reports |
| Address and Contact | Where and whom to reach | All parties |

## Setup order

1. [Company](/organization/company), with TRN, default accounts and abbreviation
2. [Fiscal year](/organization/fiscal-year)
3. [Holiday list](/organization/holiday-list) for the year
4. [Branches and departments](/organization/branches-departments)
5. [Territories and groups](/organization/territories-groups)
6. Further companies for sister entities ([multi-company](/organization/multi-company))

:::example Example structure
Al Waha Trading LLC (Dubai mainland) has branches in Deira and Abu Dhabi, departments Sales, Accounts, Warehouse and Admin, and a sister company Al Waha Trading FZE in JAFZA set up as a second company.
:::

## Related pages

- [First login and setup wizard](/getting-started/first-login)
- [Chart of accounts](/accounting/chart-of-accounts)

@@ company | Companies
@summary Create and maintain the company record: legal details, TRN, registration details, default accounts, cost centres, letterhead, shareholders and the settings that drive every transaction.

## Creating a company

1. Go to **Organisation › Company › New**.
2. Enter the **Company Name** exactly as on the trade licence, for example "Saqr Steel Fabrication LLC".
3. Enter the **Abbreviation** (for example SSF). It is appended to accounts and warehouses and cannot be changed easily later.
4. Choose the **Default Currency** (AED) and **Country** (United Arab Emirates).
5. Choose the **Chart of Accounts** template, or **Create Chart of Accounts Based On** an existing company.
6. Save. DocFlow creates the chart of accounts, a main cost centre and standard warehouses.

!fig New company form with name, abbreviation, currency and chart of accounts

## Details to complete

| Section | Fields | Example |
| --- | --- | --- |
| Registration | Tax ID (TRN), date of incorporation, trade licence number, licensing authority | 100234567800003, DED Dubai |
| Address and contacts | Registered address, phone, email, website | Office 1204, Deira, Dubai |
| Legal form | LLC, sole establishment, FZE, FZCO, branch of foreign company | LLC |
| Corporate Tax | Corporate Tax registration number, tax period, free zone status | Jan–Dec |
| Arabic name | Company name in Arabic for bilingual prints | صقر لتصنيع الحديد ذ.م.م |
| Logo and letterhead | Default letter head | |

## Default accounts

The **Accounts** tab sets the accounts DocFlow uses automatically:

| Default | Typical account |
| --- | --- |
| Default Receivable Account | Debtors |
| Default Payable Account | Creditors |
| Default Bank / Cash Account | Emirates NBD current account, Cash |
| Round Off Account and Cost Centre | Round Off |
| Exchange Gain / Loss Account | Exchange Gain/Loss |
| Default Income and Expense Accounts | Sales, Cost of Goods Sold |
| Write Off Account | Write Off |
| Default Payroll Payable Account | Payroll Payable |
| Default Employee Advance Account | Employee Advances |

The **Stock** tab sets inventory accounts (Stock In Hand, Stock Received But Not Billed, Stock Adjustment) and **Enable Perpetual Inventory**. The **Assets** tab sets depreciation and disposal accounts.

!fig Company accounts tab showing default receivable, payable and bank accounts

## Shareholders and share transfers

Record the owners in **Shareholder** and movements in **Share Transfer** (issue, purchase, transfer). The **Share Balance** and **Share Ledger** reports show who owns what, useful for the UBO register and for dividends.

## Other company tools

| Tool | Use |
| --- | --- |
| Delete Company Transactions | Remove test transactions before go-live |
| Parent Company / Is Group | Build a group structure for consolidation |
| Credit Limit | Default credit limit for customers of this company |
| Transactions Annual History | Chart of yearly sales on the company form |

:::warning Currency and abbreviation
The company currency cannot be changed once transactions exist. The abbreviation can be changed only with care because it renames accounts and warehouses.
:::

## Related pages

- [Multi-company](/organization/multi-company)
- [Corporate Tax](/uae-compliance/corporate-tax)
- [Ultimate beneficial owners](/uae-compliance/ubo-register)

@@ branches-departments | Branches, departments and designations
@summary Model where people work and what they do: branches for locations, departments for teams, designations for job titles, and how they connect to cost centres and approvals.

## Branches

A **Branch** is a physical location. Create one per office, showroom, warehouse site or labour camp, for example "Deira", "Mussafah Workshop", "JAFZA Warehouse". Branches are used on employees, for HR reports and, as an [accounting dimension](/accounting/cost-centres-budgets), on transactions to report profit by location.

## Departments

1. Go to **Organisation › Department › New**.
2. Enter the name, for example "Accounts", and choose the **Company**.
3. Choose the **Parent Department** to build a tree (Operations › Warehouse).
4. Add **Leave Approvers**, **Expense Approvers** and **Shift Request Approvers**. These are suggested on employee requests.
5. Optionally set a payroll cost centre.

!fig Department tree with Operations, Finance and Sales departments and their approvers

## Designations

A **Designation** is a job title, such as Accountant, Storekeeper, Sales Executive, Site Engineer. Use titles that match the MOHRE labour contracts, since designations appear on offer letters and salary certificates.

## Linking to cost centres

| Structure | Approach |
| --- | --- |
| P&L by branch | Branch as accounting dimension, or a cost centre per branch |
| P&L by department | Cost centre per department, set on the department for payroll |
| Both | Cost centres for departments and a branch dimension |

:::tip Keep the tree shallow
Two or three levels are enough for most UAE SMEs. Deep trees make approvals and reports harder to follow.
:::

## Related pages

- [Employees](/hr-payroll/employees)
- [Cost centres and budgets](/accounting/cost-centres-budgets)

@@ fiscal-year | Fiscal years
@summary Set the accounting year, create the next one in time, choose a non-calendar year where needed, and understand how fiscal years tie into VAT and Corporate Tax periods.

## Creating a fiscal year

1. Go to **Organisation › Fiscal Year › New**.
2. Enter the name, for example "2026" or "2026-27".
3. Enter **Year Start Date** and **Year End Date**.
4. Under **Companies**, add the companies that use it (leave empty to apply to all).
5. Save.

!fig Fiscal year 2026 with start and end dates and linked companies

## Common choices in the UAE

| Year | Who |
| --- | --- |
| 1 January – 31 December | Most companies |
| 1 April – 31 March | Groups whose overseas parent uses this year |
| 1 July – 30 June | Some family groups and education businesses |

:::uae Fiscal year and tax periods
Your Corporate Tax period normally follows your financial year, and the first period may be shorter or longer when you change year end. VAT periods are separate: quarterly or monthly as assigned by the FTA, and they do not need to align with the fiscal year. Check your EmaraTax certificate for both.
:::

## Before year end

- Create the next fiscal year a few weeks before it starts, so users can post January invoices on time.
- Run [period closing](/accounting/period-closing) after the audit, to move profit to retained earnings.
- Set an accounting period or frozen date so the closed year cannot be changed.

## Short and long first years

A newly formed company may have a first year of, say, 1 March 2026 to 31 December 2026. Enter those dates; DocFlow does not require a 12-month year.

## Related pages

- [Period closing](/accounting/period-closing)
- [Corporate Tax](/uae-compliance/corporate-tax)

@@ holiday-list | Holiday lists
@summary Define weekends and UAE public holidays, handle moon-sighting dates for Eid, assign different lists to different teams, and see how holidays affect leave, attendance and payroll.

## Creating a holiday list

1. Go to **Organisation › Holiday List › New**.
2. Enter a name, for example "UAE 2026 – Office".
3. Enter **From Date** and **To Date**, usually the fiscal year.
4. In **Add Weekly Holidays**, choose the weekend days, for example Saturday and Sunday, and click **Add to Holidays**.
5. Add each public holiday with its date and description.
6. Save. Set it as the **Default Holiday List** on the company.

!fig Holiday list for 2026 with weekly offs and UAE public holidays

## UAE public holidays

Typical private-sector public holidays announced by the government include New Year's Day, Eid Al Fitr, Arafat Day, Eid Al Adha, the Islamic New Year, the Prophet's Birthday, Commemoration Day and National Day. Islamic dates depend on moon sighting, so add them with expected dates and adjust when the official announcement is made.

:::uae Official announcements
The Cabinet and MOHRE announce private-sector holiday dates, sometimes only days before. Update the holiday list as soon as the dates are confirmed, before payroll runs for that month.
:::

## Different lists for different teams

| Team | Weekend |
| --- | --- |
| Office staff | Saturday and Sunday |
| Warehouse | Friday only |
| Retail showroom | Rotating day off via shifts |
| Site labour | Friday only |

Set the holiday list on each **Employee**, or on the **Shift Type**, to override the company default.

## Where holidays are used

| Feature | Effect |
| --- | --- |
| Leave | Holidays inside a leave period are not counted (unless the leave type includes holidays) |
| Attendance | No absence is marked on holidays |
| Payroll | Working-day calculations exclude holidays |
| Overtime | Work on a holiday can be paid at holiday rates |
| Delivery and due dates | Optional skipping of holidays |
| Workstations | Production planning avoids holidays |

## Related pages

- [Attendance and leave](/hr-payroll/attendance-leave)
- [Shifts and rosters](/hr-payroll/shifts-rosters)

@@ addresses-contacts | Addresses and contacts
@summary Store addresses and people for customers, suppliers and others, with UAE-friendly fields such as emirate, P.O. Box and Makani, address templates for printing, and primary and billing choices.

## Addresses

Each customer, supplier, company, warehouse or lead can have several addresses.

| Field | Example |
| --- | --- |
| Address Title | Jumeirah Grand Hotel – Receiving |
| Address Type | Billing, Shipping, Office, Warehouse |
| Address Line 1 and 2 | Receiving Bay 3, Al Sufouh Road |
| City / Town | Dubai |
| State / Emirate | Dubai |
| Country | United Arab Emirates |
| P.O. Box (Postal Code) | 12345 |
| Makani number | Custom field, for delivery drivers |
| Email, phone | Receiving desk contacts |
| Preferred Billing / Shipping | Default on transactions |
| Is Your Company Address | For your own addresses |

!fig Address form for a customer with emirate, P.O. Box and billing preference

## Contacts

A **Contact** is a person: name, designation, emails, mobiles and the parties they belong to. One contact can link to several records, for example a procurement manager who buys for two sister companies. Mark **Is Primary Contact** and **Is Billing Contact** where relevant.

## Address templates

An **Address Template** controls how addresses print, per country. The UAE template prints building, street, area, emirate and P.O. Box on separate lines; create an Arabic-labelled version for Arabic print formats.

## Good practice

| Tip | Why |
| --- | --- |
| Choose the emirate from a list | Clean reports by emirate |
| Keep billing and shipping addresses separate | Correct place of supply and delivery notes |
| Store the customer's TRN on the customer, not the address | One source for VAT |
| Disable old addresses instead of deleting | History on old invoices |

:::uae Place of supply
For VAT returns the emirate matters: standard-rated supplies are reported per emirate in the VAT 201 return. DocFlow uses the emirate on the company or shipping address to place each sale in the right box.
:::

## Related pages

- [Customers](/selling/customers)
- [VAT return](/uae-compliance/vat-return)

@@ territories-groups | Territories and groups
@summary Classify customers, suppliers, items and sales staff with trees of territories, customer groups, supplier groups and item groups, and use them for pricing, accounts, targets and reports.

## Territories

A **Territory** is a sales region. Build a tree that matches how you sell:

| Level | Examples |
| --- | --- |
| All Territories | Root |
| Country | United Arab Emirates, Oman, Saudi Arabia |
| Emirate | Dubai, Abu Dhabi, Sharjah, Northern Emirates |
| Area | Dubai – Jebel Ali, Dubai – Deira |

Territories are used on customers, leads and transactions. You can set **Territory Targets** for item groups and periods, and assign a **Territory Manager**.

!fig Territory tree with UAE emirates and GCC countries

## Customer and supplier groups

| Group | Use |
| --- | --- |
| Customer Group (Hotels, Restaurants, Government, Retail) | Default price list, payment terms, receivable account, credit limit, reports |
| Supplier Group (Local, Overseas, Subcontractor, Utilities) | Default payable account, payment terms, reports |

Defaults on a group apply to new parties in it, which saves setup time and keeps terms consistent.

## Item groups

Group items for reporting, defaults and the website (Kitchen Equipment › Cooking › Ovens). Defaults on an item group include warehouse, income and expense accounts, and tax templates, so a whole group of zero-rated items can share a VAT template.

## Sales persons

The **Sales Person** tree (Sales Manager › Executives) links to employees, gets targets by item group and period, and is used for commission and performance reports.

:::tip Use groups, not custom fields
Before adding a "Customer type" custom field, check whether customer group or territory already answers the question. Groups give you defaults and tree reports for free.
:::

## Related pages

- [Customers](/selling/customers)
- [Sales partners and salespeople](/selling/sales-partners)

@@ multi-company | Running several companies
@summary Manage sister companies, free zone and mainland entities and branches abroad in one DocFlow: separate books and TRNs, shared masters, inter-company transactions, VAT groups and consolidated reports.

## One site, several companies

Each legal entity with its own trade licence and books is a separate **Company**. They share customers, suppliers and items, but each has its own chart of accounts, warehouses, naming series, letterhead and TRN.

| Shared | Separate per company |
| --- | --- |
| Customers, suppliers, items, price lists | Chart of accounts, cost centres |
| Employees (with a company on each) | Warehouses and stock |
| Users and roles | Naming series, letterheads |
| Holiday lists (optional) | TRN, VAT returns, Corporate Tax |

!fig Company switcher in the session defaults with two group companies

## Typical UAE structures

| Structure | Setup |
| --- | --- |
| Mainland LLC + free zone FZE | Two companies, inter-company sales via [inter-company invoices](/accounting/inter-company) |
| Holding company with operating companies | Parent company with **Is Group**, subsidiaries below it |
| Branch in another emirate | Usually the same company, with a branch dimension |
| GCC subsidiary | Separate company in its own currency |

## Controlling access

Restrict users to their company with a [user permission](/getting-started/users-roles) on Company. Group finance staff can have access to all companies.

## VAT groups

Companies registered as a **tax group** with the FTA file one VAT return under one TRN. In DocFlow, give each member company the group TRN and report the VAT return for all of them together. Supplies between members of a tax group are outside the scope of VAT.

## Consolidated reports

Choose several companies in the financial statements, or use **Consolidated Financial Statement** for the parent company, which adds subsidiaries and converts currencies at the chosen rate. Eliminate inter-company balances with journal entries or the inter-company accounts.

:::uae Corporate Tax groups
Resident companies with 95% common ownership can form a Corporate Tax group and file one return. Use consolidated reports to prepare group figures, and keep each company's books separate in DocFlow.
:::

## Related pages

- [Inter-company transactions](/accounting/inter-company)
- [Company](/organization/company)
