@@ overview | Framework at a glance
@summary The no-code toolkit underneath every module: document types, fields, permissions, workflows, reports, automation and integrations, and who should use them.

Everything in DocFlow, from a sales invoice to a visa record, is built on the same framework. A **document type** (DocType) defines the fields, the permissions and the behaviour; every record is a document of that type. Because every module shares this foundation, the tools in this section work the same way everywhere.

!fig Framework workspace with links to customisation, automation, permissions and integrations

## What you can do without coding

| Need | Tool | Page |
| --- | --- | --- |
| Add a field, such as Emirates ID on a customer | Custom Field | [Custom fields](/framework/custom-fields) |
| Rename a label, hide a field, make it mandatory | Customise Form | [Customise form](/framework/customize-form) |
| Change document numbers | Naming Series | [Naming series](/framework/naming-series) |
| Require approvals | Workflow | [Workflows](/framework/workflows) |
| Control who sees what | Role Permissions, User Permissions | [Permissions](/framework/permissions) |
| Build a report | Report Builder, query reports | [Report builder](/framework/report-builder) |
| Send alerts, set values automatically | Notifications, assignment rules, server scripts | [Automation](/framework/automation) |
| Track something DocFlow does not have | Custom DocType | [Custom document types](/framework/custom-doctypes) |
| Arrange menus and dashboards | Workspaces, dashboards | [Workspaces](/framework/workspace-customisation) |
| Connect other systems | REST API, webhooks | [Integrations](/framework/integrations-api) |

## Who should make changes

Customisation is powerful and affects every user. Keep it with one or two trained **System Managers**, test on a staging copy first where possible, and record what you change and why.

## Customisations survive updates

Custom fields, property changes, workflows and scripts are stored separately from the standard product, so platform updates do not overwrite them. You can export customisations as a package to move them from a test site to live.

:::tip Start small
Most companies need only a handful of custom fields, a few print formats, two or three workflows and some notifications. Resist recreating every habit of your old system.
:::

## Related pages

- [Users, roles and permissions](/getting-started/users-roles)
- [System settings](/getting-started/system-settings)

@@ customize-form | Customise form
@summary Change how a standard form looks and behaves without code: labels, mandatory and hidden fields, defaults, field order, sections, list columns and form-level options.

**Customise Form** changes the properties of any document type for your site. Use it for small adjustments; use [custom fields](/framework/custom-fields) to add new fields.

## Opening Customise Form

1. Open any form, for example a customer.
2. Click **⋯ › Customise**, or search for **Customise Form** and choose the document type.
3. Change form or field properties.
4. Click **Update**. Reload the form to see the result.

!fig Customise Form for Customer with the fields table and property panel

## Form-level options

| Option | Use |
| --- | --- |
| Title Field | What shows as the document title, for example customer name |
| Search Fields | Extra fields shown in link search, such as mobile number or TRN |
| Sort Field and Order | Default list order |
| Track Changes | Record every change in version history |
| Allow Rename | Let records be renamed |
| Image Field | Picture shown on the form and image view |
| Max Attachments | Limit attachments per record |
| Default Print Format | Format used when printing |
| Quick Entry | Small pop-up for fast creation |
| Make Attachments Public | Default visibility of attachments |

## Field properties

| Property | Example |
| --- | --- |
| Label | Rename "Tax ID" to "TRN" |
| Mandatory | Make Customer Group mandatory |
| Hidden | Hide fields you never use |
| Read Only | Prevent manual edits |
| Default | Default territory "Dubai" |
| Depends On | Show "Free Zone Licence No." only when Customer Type is Free Zone |
| Mandatory Depends On | Require TRN only when "VAT registered" is ticked |
| In List View | Show as a list column |
| In Standard Filter | Show in the list filter bar |
| Bold, Collapsible, Print Hide | Formatting and printing |
| Allow on Submit | Editable after submit (non-financial fields only) |
| Options | Choices for a Select field |
| Fetch From | Copy a value from a linked record |
| Translatable | Allow Arabic translation of values |

!fig Field properties showing a Depends On condition for free zone customers

## Moving and grouping fields

Drag rows in the fields table to reorder. Add **Section Break**, **Column Break** and **Tab Break** rows to group fields. Collapsible sections keep long forms tidy.

## Conditions

Conditions use simple expressions, for example `eval:doc.customer_type=="Company"` or `eval:doc.grand_total > 50000`.

:::warning Mandatory fields and imports
Making a field mandatory affects data imports, API calls and older records when they are next saved. Fill existing records first, or add the rule after go-live with care.
:::

## Resetting

**Reset to Defaults** removes your property changes for that document type (custom fields stay).

## Related pages

- [Custom fields](/framework/custom-fields)
- [Translations](/framework/translations)

@@ custom-fields | Custom fields
@summary Add your own fields to any document, choose the right field type, place them on the form, fetch values from linked records and carry them through to later documents.

## Adding a custom field

1. Go to **Customise Form** for the document type, add a row in the fields table, or search for **Custom Field › New**.
2. Choose the **Document Type**, for example Customer.
3. Enter the **Label**, for example "Trade Licence Expiry".
4. Choose the **Field Type**.
5. Choose **Insert After** to place it.
6. Set properties: mandatory, in list view, default, depends on.
7. Save. The field appears on the form immediately.

!fig New custom field for trade licence expiry on the Customer form

## Field types

| Type | For |
| --- | --- |
| Data | Short text: licence number, Emirates ID |
| Small Text, Text, Text Editor | Longer notes, formatted text |
| Int, Float, Currency, Percent | Numbers and amounts |
| Date, Datetime, Time, Duration | Dates and times |
| Select | A fixed list: Mainland, Free Zone, Designated Zone |
| Link | Another record: Emirate, Customer, Employee |
| Dynamic Link | Link whose type is chosen by another field |
| Table, Table MultiSelect | A child table on the form |
| Check | Yes/no tick box |
| Attach, Attach Image | Files and pictures |
| Signature | Signature pad, for example on delivery notes |
| Geolocation | Map location |
| Phone, Rating, Color, Barcode | Special inputs |
| Section, Column, Tab Break | Layout |
| HTML, Heading, Button | Display only |

## Useful custom fields for UAE companies

| Document | Field | Type |
| --- | --- | --- |
| Customer / Supplier | Trade licence number and expiry | Data, Date |
| Customer / Supplier | Emirate | Select |
| Customer | Name in Arabic | Data |
| Item | Name and description in Arabic | Data, Text |
| Item | HS code | Data |
| Delivery Note | Driver, vehicle plate, receiver signature | Data, Signature |
| Employee | Labour card number, MOHRE person code | Data |
| Project | Plot number, Makani number | Data |

## Fetching and carrying values forward

- **Fetch From**: on a sales invoice, `customer.customer_name_ar` copies the Arabic name from the customer.
- **Same fieldname on both documents**: when you make a delivery note from a sales order, fields with identical names are copied automatically. Create the same custom field on both documents to carry values along the chain.

:::tip Fieldnames are permanent
The fieldname is created from the label (for example `trade_licence_expiry`). Choose labels carefully; renaming the label later does not change the fieldname used in reports and formats.
:::

## Deleting

Delete a custom field from **Custom Field** list. The data in it is lost, so export first if needed.

## Related pages

- [Customise form](/framework/customize-form)
- [Printing](/getting-started/printing)

@@ naming-series | Naming series and document numbers
@summary Control how invoices, orders and records are numbered: series patterns, prefixes by branch or year, starting numbers, and the UAE rule for sequential tax invoice numbers.

## How numbering works

Most transactions use a **naming series**: a pattern of a prefix and a counter. For example `SINV-.YYYY.-.#####` gives `SINV-2026-00001`, `SINV-2026-00002` and so on.

| Placeholder | Becomes |
| --- | --- |
| `.YYYY.` / `.YY.` | Year, 2026 / 26 |
| `.MM.` / `.DD.` | Month / day |
| `.FY.` | Fiscal year |
| `.#####` | Counter with five digits |
| `.{fieldname}.` | Value from the document, such as branch or company abbreviation |
| `.ABBR.` | Company abbreviation |

## Setting up series

1. Search for **Document Naming Settings**.
2. Choose the **Transaction** type, for example Sales Invoice.
3. Enter one series per line, for example `SINV-DXB-.YYYY.-.#####` and `SINV-AUH-.YYYY.-.#####`.
4. Click **Update**. Users then choose the series on each new document; the first is the default.

!fig Document naming settings with two sales invoice series for Dubai and Abu Dhabi

## Changing the current number

In the same screen, under **Update Series Counter**, choose the series and set the current value, for example to continue from 4,812 after migrating from another system.

## Masters

Customers, suppliers, items and employees are named in their module settings: by name, by naming series, or by a field such as item code. Selling Settings › Customer Naming By, for example.

:::uae Sequential tax invoice numbers
UAE VAT requires a sequential number that identifies each tax invoice uniquely. Use a separate series per company (and per branch if you wish), never reuse numbers, and do not reset counters in mid-year. Credit notes should have their own series. When e-invoicing begins, each e-invoice must also carry a unique invoice number.
:::

## Good practice

| Do | Avoid |
| --- | --- |
| Decide series before go-live | Changing patterns after invoices are issued |
| Include the year | Very long prefixes |
| Use separate series for credit notes, proformas, returns | Gaps created by deleting drafts (draft numbers are reserved) |

## Related pages

- [System settings](/getting-started/system-settings)
- [E-invoicing](/uae-compliance/e-invoicing)

@@ workflows | Approval workflows
@summary Add approval steps to any document: states, transitions, roles, conditions such as amount limits, email alerts to approvers and how workflows interact with submit and cancel.

A **workflow** replaces the plain Save and Submit buttons with your own states and actions, so a document must pass through approvals before it posts.

## Building blocks

| Part | Meaning | Example |
| --- | --- | --- |
| State | Where the document is | Draft, Pending Finance, Approved, Rejected |
| Doc Status | Draft (0), Submitted (1) or Cancelled (2) behind each state | Approved = 1 |
| Allow Edit | Role that may edit in that state | Purchase User in Draft |
| Transition | Action that moves from one state to another | Approve: Pending Finance → Approved |
| Allowed role | Who may take the action | Finance Manager |
| Condition | When the transition is available | `doc.grand_total > 50000` |
| Self-approval | Whether the creator may approve their own document | Off |

## Creating a workflow

1. Search for **Workflow › New**.
2. Choose the **Document Type**, for example Purchase Order, and tick **Is Active**.
3. Add **States** with doc status and the role allowed to edit.
4. Add **Transitions**: state, action, next state, allowed role, condition.
5. Choose the **Workflow State Field** (created automatically if needed).
6. Tick **Send Email Alert** so the next approvers are notified.
7. Save.

!fig Workflow for purchase orders with states and transitions table

:::example Example: purchase approval at Saqr Steel
| From | Action | To | Role | Condition |
| --- | --- | --- | --- | --- |
| Draft | Submit for Approval | Pending Manager | Purchase User | |
| Pending Manager | Approve | Approved | Purchase Manager | `doc.grand_total <= 50000` |
| Pending Manager | Escalate | Pending Director | Purchase Manager | `doc.grand_total > 50000` |
| Pending Director | Approve | Approved | Managing Director | |
| Any pending | Reject | Rejected | Approver | |

Approved has doc status 1, so approval submits the PO.
:::

!fig Purchase order showing workflow actions Approve and Reject in the toolbar

## The Workflow Builder

The visual builder lets you draw states and connect them with arrows, which is easier to read for complex workflows.

## Approving

Approvers see pending documents in their notifications and can use **Actions** in the list to approve several at once. Each action is recorded on the timeline with the user and time.

## Common workflows

| Document | Typical steps |
| --- | --- |
| Purchase order | Manager, then director above a limit |
| Payment entry | Accountant prepares, finance manager approves |
| Journal entry | Reviewer approval |
| Leave application | Leave approver (built in) |
| Expense claim | Expense approver, then accounts |
| Quotation | Sales manager approval above a discount |
| Material request | Department head |

:::details Can I change a workflow when documents are pending?
Yes, but pending documents keep their current state name. If you rename or remove a state, update those documents first.
:::

## Related pages

- [Permissions](/framework/permissions)
- [Notifications](/getting-started/notifications)

@@ permissions | Role permissions
@summary How role permissions work in detail: permission levels, read, write, create, submit, cancel, amend, report, export, print, share, If Owner and field-level permissions.

## The Role Permissions Manager

Search for **Role Permissions Manager**, choose a document type or role and you see a matrix of rights.

!fig Role Permissions Manager for Sales Invoice with roles and rights

## Rights

| Right | Allows |
| --- | --- |
| Select | Choose in link fields only |
| Read | Open and view |
| Write | Edit drafts |
| Create | Make new records |
| Delete | Delete drafts and unlinked records |
| Submit | Submit |
| Cancel | Cancel submitted documents |
| Amend | Amend cancelled documents |
| Report | See in report view and reports |
| Import | Use data import |
| Export | Export to Excel or CSV |
| Print | Print and PDF |
| Email | Send emails |
| Share | Share with other users |
| If Owner | Rights apply only to records the user created |

## Permission levels (field security)

Fields can have a **permission level** from 0 to 9. Level 0 is the normal form. Give a higher level (for example 1) to sensitive fields such as salary or bank details, then give Read or Write on level 1 only to roles that need it.

| Example | Level | Who |
| --- | --- | --- |
| Employee bank account and IBAN | 1 | HR Manager |
| Item valuation rate | 1 | Stock Manager, Accounts |
| Customer credit limit | 1 | Accounts Manager |

## Adding a permission rule

1. In Role Permissions Manager, choose the document type.
2. Click **Add a New Rule**, choose the role and level.
3. Tick the rights.
4. The change is immediate for users with that role.

## Combining with user permissions

Role permissions say what a role can do on a type; [user permissions](/getting-started/users-roles) narrow which records. **Ignore User Permissions** on a rule lets that role see all records regardless.

:::warning Test with a real user
After changing permissions, sign in as a test user with the same roles, or use **Show Permissions** for a user, to confirm they can do what they need and nothing more.
:::

## Related pages

- [Role profiles](/framework/role-profiles)
- [Users and roles](/getting-started/users-roles)

@@ report-builder | Report builder and custom reports
@summary Build reports without code from report view, save and share them, add group-by and totals, schedule them by email, and know when to use query and script reports.

## Types of report

| Type | Built by | For |
| --- | --- | --- |
| Report Builder | Any user with report rights | Columns from one document type and its child table |
| Query Report | Administrator with SQL | Joins across tables |
| Script Report | Developer | Complex logic, such as ageing or financial statements |
| Standard reports | DocFlow | Trial balance, stock ledger, payroll registers and more |

## Building a report

1. Open a list, for example Sales Invoice, and switch to **Report** view.
2. Click **Pick Columns** and choose fields, including child-table fields such as item code and quantity.
3. Add filters, for example posting date this quarter, territory Abu Dhabi.
4. Use **Group By** (for example customer) with sum or count.
5. Tick **Show Totals**.
6. Click **Save As** and name it, for example "Q1 sales by customer – Abu Dhabi".

!fig Report view with chosen columns, group by customer and totals row

## Sharing and exporting

Saved reports appear in the sidebar and can be added to workspaces. Export to Excel or CSV, or print. Report permissions follow the document type's permissions.

## Auto Email Report

| Field | Example |
| --- | --- |
| Report | Accounts Receivable |
| Filters | Company: Al Waha Trading LLC, ageing basis due date |
| Frequency | Weekly, Monday |
| Format | Excel |
| Recipients | Finance manager, MD |

## Prepared reports

Heavy reports such as stock balance on a large site can be **prepared** in the background. You receive a notification when the result is ready.

:::details I need a report across several document types
Ask your administrator for a query report or a script report, or check the standard reports first: most common needs are covered.
:::

## Related pages

- [Lists and views](/getting-started/list-views)
- [Dashboards](/framework/dashboards)

@@ automation | Automation tools
@summary Remove repetitive work with notifications, assignment rules, auto repeat, scheduled jobs, server and client scripts, webhooks and energy-saving defaults.

## Choosing a tool

| Need | Tool | Code? |
| --- | --- | --- |
| Email or alert when something happens | Notification | No |
| Give new records to the right person | Assignment Rule | No |
| Create a recurring invoice or order | Auto Repeat | No |
| Send a report on a schedule | Auto Email Report | No |
| Calculate or validate a field | Server Script / Client Script | Small Python / JS |
| Send data to another system | Webhook | No |
| Daily routine jobs | Scheduled server script | Small Python |

## Auto Repeat

1. Submit the first document, for example a monthly maintenance sales invoice to Rimal Facilities.
2. Click **⋯ › Repeat**.
3. Set frequency (monthly), start and end date, and the day of the month.
4. Tick **Notify by Email** and choose recipients and a template.
5. Save. DocFlow creates (and optionally submits) each copy.

!fig Auto Repeat set up for a monthly maintenance invoice

## Assignment rules

| Field | Example |
| --- | --- |
| Document Type | Issue |
| Assign Condition | `doc.priority == "High"` |
| Rule | Round Robin or Load Balancing |
| Users | Support engineers |
| Unassign Condition | `doc.status == "Closed"` |

## Server and client scripts

Administrators can add small scripts without a full app:

| Script | Runs | Example |
| --- | --- | --- |
| Client Script | In the browser | Fill delivery address from customer, warn if discount > 10% |
| Server Script – Document Event | Before save, submit, cancel | Block invoices without a TRN for VAT-registered customers |
| Server Script – Scheduler | Daily, weekly | Mark trade licences expiring |
| Server Script – API | Custom endpoint | Return stock to a website |

!fig Server script that validates TRN before an invoice is saved

:::warning Scripts run for everyone
Test scripts on a staging site. A faulty validation can stop every user from saving invoices.
:::

## Webhooks

A **Webhook** posts document data to an external URL when a document is created, updated or submitted, for example sending new sales orders to a logistics partner. Choose fields, set headers and a secret, and check the **Webhook Request Log** for failures.

## Related pages

- [Notifications](/getting-started/notifications)
- [Integrations and API](/framework/integrations-api)

@@ custom-doctypes | Custom document types
@summary Create your own document type for something DocFlow does not track, such as vehicle permits or tenancy contracts, with fields, naming, permissions and child tables.

## When to create one

Create a custom DocType when you need a new kind of record, not just extra fields. Examples for UAE companies:

| DocType | Fields |
| --- | --- |
| Vehicle | Plate number, emirate, Mulkiya expiry, insurance expiry, driver |
| Tenancy Contract | Property, Ejari number, start and end date, rent, cheques |
| Civil Defence Certificate | Site, certificate number, expiry |
| Site Visit Report | Project, date, engineer, observations, photos |

## Creating a DocType

1. Search for **DocType › New**.
2. Enter a name, for example "Vehicle", and choose a **Module** (create a custom module such as "Fleet").
3. Tick **Custom** (always, for user-created types).
4. Add fields in the fields table, including a **Table** field for child rows.
5. Choose **Naming**: by field (plate number), naming series, or autoincrement.
6. Set **Permissions** for roles.
7. Options: **Is Submittable** (for draft/submit/cancel), **Track Changes**, **Quick Entry**, **Is Tree**, **Is Single** (one record, like a settings page).
8. Save. The list and form are ready to use.

!fig New DocType form for Vehicle with fields, naming and permissions

## Child tables

To have rows inside a form (for example cheques in a tenancy contract), first create a DocType with **Is Table** ticked, then add a Table field pointing to it.

## Using it

Add the new type to a [workspace](/framework/workspace-customisation), create notifications on its expiry dates, and link it to standard records with Link fields (Vehicle → Employee driver).

:::tip Prefer standard features
Check whether DocFlow already covers the need: assets, projects, maintenance schedules and quality procedures cover many cases before a custom type is needed.
:::

## Related pages

- [Custom fields](/framework/custom-fields)
- [Permissions](/framework/permissions)

@@ workspace-customisation | Customising workspaces
@summary Arrange each module's home page: number cards, charts, shortcuts, link cards, custom blocks, private workspaces and which roles see which workspace.

## Editing a workspace

1. Open the workspace, for example Accounting.
2. Click **Edit**.
3. Add blocks with **+**: heading, paragraph, shortcut, card (group of links), chart, number card, quick list, custom HTML block, onboarding.
4. Drag blocks to reorder and resize them.
5. Click **Save**.

!fig Accounting workspace in edit mode with blocks being added and moved

## Block types

| Block | Example |
| --- | --- |
| Number Card | Total receivables, overdue amount, cash in bank |
| Chart | Monthly sales, VAT payable trend |
| Shortcut | New Sales Invoice, Overdue invoices (with filter and count) |
| Card | Links grouped by topic, such as Reports or Settings |
| Quick List | The last five open purchase orders |
| Custom Block | HTML for announcements or links |

## Public and private workspaces

| Type | Who sees it |
| --- | --- |
| Public | Everyone with access to its content; set **Roles** to limit it |
| Private | Only you; good for a personal "My day" page |

Create a public workspace for a team, for example "Showroom – Dubai Mall", with only the shortcuts that team uses.

## Hiding modules

Hide workspaces a team does not use via **Roles** on the workspace or the user's **Module Profile**. The sidebar becomes shorter and easier to use.

:::tip Shortcuts with counts
Add a filter to a shortcut, for example Sales Invoice where status is Overdue, and tick **Show Count**. The tile then shows how many overdue invoices there are.
:::

## Related pages

- [Dashboards](/framework/dashboards)
- [Finding your way around](/getting-started/navigating)

@@ dashboards | Dashboards, charts and number cards
@summary Create charts and number cards from any document or report, group them into dashboards for management, and control refresh and permissions.

## Dashboard charts

1. Search for **Dashboard Chart › New**.
2. Choose **Chart Type**: Count, Sum, Average, Group By, or Report (from a saved report).
3. Choose the **Document Type** and the field, for example sum of Grand Total on Sales Invoice.
4. Choose the time series: based on posting date, interval monthly, timespan last year.
5. Add filters (submitted only, company).
6. Choose the chart style: line, bar, percentage, pie, donut, heatmap.
7. Save and add it to a dashboard or workspace.

!fig Management dashboard with monthly sales, receivables and stock value charts

## Number cards

| Field | Example |
| --- | --- |
| Type | Document Type, Report, or Custom |
| Function | Count, Sum, Average, Min, Max |
| Field | Outstanding Amount |
| Filters | Status = Overdue |
| Show Percentage Stats | Compare with the previous period |

## Dashboards

A **Dashboard** collects charts and number cards on one page. Examples:

| Dashboard | Content |
| --- | --- |
| Management | Sales, gross profit, cash, receivables, payables |
| Sales | Orders by territory, top customers, conversion |
| Stock | Stock value, slow-moving items, items below reorder level |
| HR | Headcount, joiners and leavers, visas expiring |
| VAT | Output and input VAT per quarter |

## Refresh and permissions

Charts are cached and refresh on a schedule or on demand. A user sees a chart only if they can read the underlying document type, so the same dashboard is safe to share.

## Related pages

- [Report builder](/framework/report-builder)
- [Workspaces](/framework/workspace-customisation)

@@ email-templates | Email templates
@summary Write reusable emails for quotations, invoices, reminders and HR letters, with document fields, Arabic text and attachments.

## Creating a template

1. Search for **Email Template › New**.
2. Enter a **Name**, for example "Invoice – EN/AR".
3. Write the **Subject** and **Response**, using fields in double braces.
4. Tick **Use HTML** for formatted emails.
5. Save.

!fig Email template with subject and body using invoice fields

## Using fields

| Placeholder | Becomes |
| --- | --- |
| `{{ doc.name }}` | SINV-2026-00042 |
| `{{ doc.customer_name }}` | Jumeirah Grand Hotel |
| `{{ doc.grand_total }}` | 12,600.00 |
| `{{ doc.due_date }}` | 15-04-2026 |
| `{{ doc.get_formatted("grand_total") }}` | AED 12,600.00 |

:::example Example: invoice email
**Subject:** `Tax invoice {{ doc.name }} from Al Waha Trading`

**Body:** `Dear {{ doc.contact_display or "Sir/Madam" }}, please find attached tax invoice {{ doc.name }} for {{ doc.get_formatted("grand_total") }}, due on {{ doc.due_date }}.`
:::

Add the Arabic text below the English for bilingual customers.

## Where templates are used

| Place | Setting |
| --- | --- |
| Email from a document | Choose the template in the email dialog |
| Notifications | Message or template |
| Dunning | Reminder letter text |
| Auto Repeat | Email sent with each copy |
| HR | Job offer, appointment and leave emails |
| Support | Standard replies |

:::tip Default templates
Set a default email template per document type in its settings, so the right text appears automatically.
:::

## Related pages

- [Notifications](/getting-started/notifications)
- [Collaboration](/getting-started/collaboration)

@@ translations | Arabic labels and translations
@summary Use DocFlow in Arabic, adjust translations of labels, print documents in Arabic or both languages, and keep Arabic names for customers and items.

## User language

Each user chooses **Language** on their user settings (English or Arabic). In Arabic the whole interface switches to right-to-left, including menus, forms and reports.

## Correcting a translation

1. Search for **Translation › New**.
2. Choose language **ar**.
3. Enter the **Source Text** exactly as it appears in English, for example "Sales Invoice".
4. Enter the **Translated Text**, for example "فاتورة مبيعات".
5. Save and reload.

!fig Translation record changing the Arabic label for a field

Use this to align terms with your industry, for example "Delivery Note" as "إذن تسليم" or "أمر تسليم".

## Arabic data

| Data | How |
| --- | --- |
| Customer and supplier names | Custom field "Name in Arabic", or Translatable names |
| Item names and descriptions | Arabic fields on the item, fetched into invoices |
| Addresses | Address template with Arabic labels |
| Company | Company name in Arabic on the company record |

## Printing in Arabic

Choose the print **Language** in print view, or use a bilingual format that shows both. The standard UAE tax invoice prints English and Arabic side by side.

:::uae Arabic on tax invoices
UAE rules allow tax invoices in English, but the FTA can request an Arabic translation. Bilingual formats save time when that happens, and many government and semi-government customers expect them.
:::

## Related pages

- [Printing](/getting-started/printing)
- [Arabic website](/website/arabic-website)

@@ integrations-api | Integrations and API
@summary Connect DocFlow to banks, payment gateways, e-commerce, logistics and BI tools using the REST API, webhooks, OAuth, and ready-made integrations.

## Ready-made integrations

| Area | Examples |
| --- | --- |
| Payments | Payment gateways for payment links and online shop (Network International, Stripe, Checkout.com) |
| Email | Microsoft 365, Google Workspace |
| Calendar and contacts | Google Calendar and Contacts |
| E-invoicing | The UAE e-invoicing network via DocFlow as ASP |
| Storage | Backups to S3-compatible storage |
| Sign-in | Social and SSO login (Microsoft, Google) |
| Maps | Address geolocation |

!fig Integrations page listing connected services and their status

## REST API

Every document type is available through the REST API:

| Action | Request |
| --- | --- |
| List | `GET /api/resource/Customer?filters=...` |
| Read | `GET /api/resource/Sales Invoice/SINV-2026-00042` |
| Create | `POST /api/resource/Sales Order` |
| Update | `PUT /api/resource/Item/ITEM-001` |
| Call a method | `POST /api/method/...` |

Authenticate with an API key and secret from a dedicated integration user (`Authorization: token key:secret`), or OAuth 2.0 for third-party apps.

## Webhooks

Send document events to other systems automatically. See [Automation tools](/framework/automation).

## Typical UAE integrations

| Integration | How |
| --- | --- |
| Online store | Items, prices and stock out; orders in |
| Logistics / courier | Delivery notes out; tracking numbers in |
| Bank statements | Import statements for [reconciliation](/accounting/bank-reconciliation) |
| Biometric attendance | Device pushes check-ins to Employee Checkin |
| WPS | SIF file generated for your bank or exchange house |
| BI tools | Power BI or similar via API or read-only reports |

:::warning Least privilege
Give integration users only the roles needed. An e-commerce connector needs items and sales orders, not payroll.
:::

## Related pages

- [Security](/getting-started/security)
- [Automation tools](/framework/automation)

@@ role-profiles | Role profiles and module profiles
@summary Bundle roles into profiles for each job, assign them to many users at once, and limit the modules a user sees with module profiles.

## Role profiles

A **Role Profile** is a named set of roles. Change the profile and every user with it is updated.

1. Search for **Role Profile › New**.
2. Name it after the job, for example "Storekeeper – JAFZA".
3. Tick the roles: Stock User, Item viewer roles, Delivery User.
4. Save. On each user, choose the role profile instead of ticking roles.

!fig Role profile for a storekeeper with stock roles ticked

## Suggested profiles

| Profile | Roles |
| --- | --- |
| Accountant | Accounts User, Sales User (read), Purchase User (read) |
| Finance Manager | Accounts Manager, Auditor |
| Sales Executive | Sales User, Stock User (read) |
| Storekeeper | Stock User |
| Procurement | Purchase User, Stock User |
| HR Officer | HR User, Employee |
| Employee self-service | Employee |

## Module profiles

A **Module Profile** hides modules from users who do not need them. For example a storekeeper's profile blocks Accounting, HR and CRM, so their sidebar shows only Stock and Buying. Blocking a module does not grant or remove permissions; it hides it from navigation.

## Related pages

- [Users and roles](/getting-started/users-roles)
- [Permissions](/framework/permissions)

@@ bulk-tools | Bulk tools
@summary Change many records at once: bulk edit, bulk rename, data import updates, bulk submit and cancel, and deleting test data safely.

## Bulk edit from a list

1. Filter the list, for example items in item group "Spices".
2. Select the records and click **Actions › Edit**.
3. Choose the field and value, for example Default Warehouse = "JAFZA – Ambient".
4. Click **Update**.

!fig Bulk edit dialog setting the default warehouse on selected items

## Other bulk tools

| Tool | Use |
| --- | --- |
| Bulk Update | Set a field on all records matching a condition |
| Rename Tool | Rename up to 500 records from a CSV of old and new names |
| Data Import (update) | Update many fields from a spreadsheet |
| Bulk submit / cancel | List › select drafts › Actions › Submit |
| Merge | Rename a record to an existing name with **Merge** ticked to combine duplicates, for example two customers |
| Item price update | Import or the price list tools |
| Bulk salary structure assignment | HR tool for many employees |

## Merging duplicates

Open the duplicate customer, click **⋯ › Rename**, enter the name of the record to keep, and tick **Merge with existing**. All transactions move to the kept customer.

:::warning Bulk changes are hard to undo
Export the records before a bulk change, and test on a few first. Bulk changes are recorded in version history but are not reversed automatically.
:::

## Related pages

- [Data import](/getting-started/data-import)
- [Lists and views](/getting-started/list-views)

@@ audit-logs | Version history and audit logs
@summary See every change to every record: version history, access and activity logs, deleted documents, and how they support FTA audits and internal controls.

## Version history

On any document with **Track Changes**, the timeline shows each save: the user, time, field, old value and new value. Child table rows added, removed or changed are listed too. Transactions track changes by default.

!fig Version history showing a changed rate and quantity on a sales order

## Logs

| Log | Records |
| --- | --- |
| Version | Field-level changes per document |
| Activity Log | Login, logout, failed logins, IP addresses |
| Access Log | Exports, prints and report views |
| Error Log | System errors, useful for support |
| Email Queue | Every email sent and its status |
| Webhook Request Log | Outgoing webhook calls |
| Deleted Documents | Deleted records, restorable by System Managers |
| Scheduled Job Log | Background jobs |

## Restoring a deleted document

Open **Deleted Document**, find the record and click **Restore**. It returns as it was at deletion.

## Using logs in audits

| Question from an auditor | Where to look |
| --- | --- |
| Who changed this customer's bank details? | Version history on the supplier or customer |
| Who approved this payment? | Workflow actions in the timeline |
| Was this invoice changed after issue? | Submitted documents cannot change; check cancellations and amendments |
| Who exported payroll? | Access log |

:::uae Records for the FTA
The FTA can ask how a figure was reached. DocFlow's unbroken history of submitted, cancelled and amended documents, together with version logs, makes it straightforward to show an audit trail.
:::

## Related pages

- [Security](/getting-started/security)
- [Records and audits](/uae-compliance/records-audit)
