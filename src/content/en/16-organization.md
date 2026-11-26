@@ overview | Organization at a glance
@summary How DocFlow models your business: entities, branches and departments, plus the fiscal years, holiday lists and addresses they rely on, and the order to set them up.

The **Organization** tile on the home screen ("Entities, branches and departments") holds the structure of your business. Accounts, warehouses, employees and reports are all tied to an **Entity**; branches and departments slice it further.

!fig The Organization tile open, with Entity, Branch and Department in the sidebar

## Building blocks

| Record | What it represents | Used by |
| --- | --- | --- |
| **Entity** | One company you keep separate books for, with its own trade licence and TRN | Every transaction |
| **Branch** | An office or shop, such as a Dubai head office or an Abu Dhabi showroom | HR and reports |
| **Department** | A team such as Finance or Warehouse, in each entity | HR, approvals, cost centres |

Related setup that the Organization records rely on:

| Record | What it represents |
| --- | --- |
| [Fiscal Year](/organization/fiscal-year) | The accounting year |
| [Holiday List](/organization/holiday-list) | Weekends and public holidays |
| [Address and Contact](/organization/addresses-contacts) | Where and whom to reach |

## What is not here

- **User**, **Role Permissions** and **Email Account** are in Administration only. See [Users and roles](/administration/users-roles), [Role permissions](/administration/permissions) and [Email accounts](/administration/email-accounts).
- **Letter Head** is under Printing in Administration. See [Letter head and print formats](/administration/letter-head-print-formats).
- Territories, customer groups and sales persons are in CRM. See [Territories and groups](/crm/territories-groups).

## Setup order

1. [Entity](/organization/company), with TRN, default accounts and abbreviation
2. [Fiscal year](/organization/fiscal-year)
3. [Holiday list](/organization/holiday-list) for the year
4. [Branches and departments](/organization/branches-departments)
5. Further entities for sister companies ([several entities](/organization/multi-company))

:::example Example structure
Al Noor Trading LLC (Dubai mainland) has branches in Deira and Abu Dhabi, departments Sales, Accounts, Warehouse and Admin, and a sister company in JAFZA set up as a second entity.
:::

## Related pages

- [Administration at a glance](/administration/overview)
- [Chart of accounts](/accounting/chart-of-accounts)

@@ company | Entities
@summary Create and maintain the Entity record for each company you keep books for: legal details, TRN, abbreviation, currency and default accounts.

An **Entity** is one company you keep separate books for, with its own trade licence and TRN. Every transaction belongs to an entity.

**Where to find it:** the **Organization** tile > **Entity**.

## Before you start

- You need the **System Manager** or **Accounts Manager** role.
- Have the trade licence and the TRN certificate at hand.

## Creating an entity

1. Open **Organization** > **Entity** and add a new one.
2. Enter the name exactly as on the trade licence, for example "Al Noor Trading LLC".
3. Enter the **Abbreviation** (for example ANT). It is added to account and warehouse names and is hard to change later.
4. Choose the **Default Currency** (AED) and **Country** (United Arab Emirates).
5. Choose the chart of accounts template, or base the chart on an existing entity.
6. Save. DocFlow creates the chart of accounts, a main cost centre and standard warehouses.

!fig New entity form with name, abbreviation, currency, country and chart of accounts

## Details to complete

| Section | Fields | Example |
| --- | --- | --- |
| Registration | Tax ID (TRN), date of incorporation, trade licence number | 100234567800003 |
| Address and contacts | Registered address, phone, email, website | Office 1204, Deira, Dubai |
| Arabic name | Entity name in Arabic for bilingual prints | النور للتجارة ذ.م.م |

The logo and address band on printed documents come from the **Letter Head**, which is set up under Printing in Administration. See [Letter head and print formats](/administration/letter-head-print-formats).

## Default accounts

The **Accounts** tab sets the accounts DocFlow uses automatically:

| Default | Typical account |
| --- | --- |
| Default Receivable Account | Debtors |
| Default Payable Account | Creditors |
| Default Bank / Cash Account | Your current account, Cash |
| Round Off Account | Round Off |
| Exchange Gain / Loss Account | Exchange Gain/Loss |
| Default Income and Expense Accounts | Sales, Cost of Goods Sold |
| Write Off Account | Write Off |

The **Stock** tab sets the inventory accounts, and the **Assets** tab the depreciation and disposal accounts.

!fig Entity accounts tab showing default receivable, payable and bank accounts

Shareholders and share transfers are kept in Accounting under **Share Management**.

:::warning Currency and abbreviation
The entity's currency cannot be changed once transactions exist. Change the abbreviation only with care, because it renames accounts and warehouses.
:::

## Related pages

- [Running several entities](/organization/multi-company)
- [Corporate Tax](/accounting/corporate-tax)
- [Chart of accounts](/accounting/chart-of-accounts)

@@ branches-departments | Branches and departments
@summary Model where people work and which team they belong to: branches for locations, departments for teams, and how they connect to cost centres and approvals.

**Where to find it:** the **Organization** tile > **Branch** and **Department**.

## Branches

A **Branch** is an office or shop. Create one per location, for example "Deira", "Mussafah Workshop" or "JAFZA Warehouse". Branches are used on employees, in HR and in reports.

## Departments

1. Open **Organization** > **Department** and add a new one.
2. Enter the name, for example "Accounts", and choose the **Entity**.
3. Choose the parent department to build a tree (Operations > Warehouse).
4. Add the leave approvers and expense approvers. They are suggested on employee requests.
5. Save.

!fig Department tree with Operations, Finance and Sales departments

Job titles (designations) are kept in Human Resources. See [Employee records](/human-resources/employees).

## Linking to cost centres

| Structure | Approach |
| --- | --- |
| Profit and loss by branch | A cost centre per branch, or a branch accounting dimension |
| Profit and loss by department | A cost centre per department |

:::tip Keep the tree shallow
Two or three levels are enough for most UAE businesses. Deep trees make approvals and reports harder to follow.
:::

## Related pages

- [Employee records](/human-resources/employees)
- [Cost centres and budgets](/accounting/cost-centres-budgets)

@@ fiscal-year | Fiscal years
@summary Set the accounting year, create the next one in time, choose a non-calendar year where needed, and understand how fiscal years tie into VAT and Corporate Tax periods.

## Creating a fiscal year

1. Search for **Fiscal Year** and add a new one.
2. Enter the name, for example "2026" or "2026-27".
3. Enter **Year Start Date** and **Year End Date**.
4. Add the entities that use it (leave the table empty to apply it to all).
5. Save.

!fig Fiscal year 2026 with start and end dates and linked entities

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
- [Corporate Tax](/accounting/corporate-tax)

@@ holiday-list | Holiday lists
@summary Define weekends and UAE public holidays, handle moon-sighting dates for Eid, assign different lists to different teams, and see how holidays affect leave, attendance and payroll.

## Creating a holiday list

1. Search for **Holiday List** and add a new one.
2. Enter a name, for example "UAE 2026 – Office".
3. Enter **From Date** and **To Date**, usually the fiscal year.
4. In **Add Weekly Holidays**, choose the weekend days, for example Saturday and Sunday, and click **Add to Holidays**.
5. Add each public holiday with its date and description.
6. Save. Set it as the **Default Holiday List** on the entity.

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

Set the holiday list on each **Employee**, or on the **Shift Type**, to override the entity default.

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

- [Attendance and leave](/human-resources/attendance-leave)
- [Shifts and rosters](/human-resources/shifts-rosters)

@@ addresses-contacts | Addresses and contacts
@summary Store addresses and people for customers, suppliers and others, with UAE-friendly fields such as emirate, P.O. Box and Makani, address templates for printing, and primary and billing choices.

## Addresses

Each customer, supplier, entity, warehouse or lead can have several addresses.

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
For VAT returns the emirate matters: standard-rated supplies are reported per emirate in the VAT 201 return. DocFlow uses the emirate on the entity or shipping address to place each sale in the right box.
:::

## Related pages

- [Customers](/selling/customers)
- [VAT return](/vat-compliance/vat-return)

@@ multi-company | Running several entities
@summary Manage sister companies, free zone and mainland entities and branches abroad in one DocFlow: separate books and TRNs, shared masters, inter-company transactions, VAT groups and consolidated reports.

## One system, several entities

Each company with its own trade licence and books is a separate **Entity**. They share customers, suppliers and items, but each has its own chart of accounts, warehouses, naming series, letter head and TRN.

| Shared | Separate per entity |
| --- | --- |
| Customers, suppliers, items, price lists | Chart of accounts, cost centres |
| Employees (with an entity on each) | Warehouses and stock |
| Users and roles | Naming series, letter heads |
| Holiday lists (optional) | TRN, VAT returns, Corporate Tax |

A user with access to two or more entities sees the entity selector and can switch between them.

!fig Entity selector with two group entities

## Typical UAE structures

| Structure | Setup |
| --- | --- |
| Mainland LLC + free zone FZE | Two entities, with [inter-company invoices](/accounting/inter-company) between them |
| Holding company with operating companies | A parent entity marked as a group, with the subsidiaries below it |
| Branch in another emirate | Usually the same entity, with a branch |
| GCC subsidiary | A separate entity in its own currency |

## Controlling access

Restrict users to their entity with a [user permission](/administration/users-roles) on Entity. Group finance staff can have access to all entities.

## VAT groups

Companies registered as a **tax group** with the FTA file one VAT return under one TRN. Supplies between members of a tax group are outside the scope of VAT. See [The VAT 201 return](/vat-compliance/vat-return).

## Consolidated reports

Choose several entities in the financial statements, or use the consolidated financial statement for the parent entity, which adds the subsidiaries and converts currencies. Remove inter-company balances with journal vouchers or the inter-company accounts.

:::uae Corporate Tax groups
Resident companies with 95% common ownership can form a Corporate Tax group and file one return. Use consolidated reports to prepare group figures, and keep each entity's books separate in DocFlow.
:::

## Related pages

- [Inter-company transactions](/accounting/inter-company)
- [Entities](/organization/company)
