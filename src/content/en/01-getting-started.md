@@ welcome | Welcome to DocFlow
@summary What DocFlow does, who this manual is for and how to read it.

DocFlow is a single business platform for companies operating in the United Arab Emirates. Finance, inventory, sales, purchasing, production, projects and people all run from one database, so a delivery made by your warehouse in Jebel Ali shows up straight away in your receivables in Dubai, and a salary approved by HR in Abu Dhabi posts straight into the general ledger.

This manual is written for the people who use DocFlow every day: accountants closing the month, storekeepers receiving containers, sales coordinators preparing quotations, and HR officers running WPS payroll. You do not need a technical background to follow it.

!fig The DocFlow home screen showing the module launcher grouped into Finance, Trade and Production

## How this manual is organised

Every module has its own numbered section. Pages inside a section are numbered too, so **4.0** is the Accounting overview and **4.3** is the third page after it. Screenshots carry a figure number such as **Figure 4.3.2**, which makes it easy to refer to a specific screen when you raise a question with your administrator.

| Look for | What it means |
| --- | --- |
| Numbered steps | Do these in order on screen |
| **UAE specific** boxes | Rules that come from UAE law or authorities such as the FTA or MOHRE |
| **Example** boxes | A worked scenario with a fictional UAE company |
| Expandable questions | Common questions; click to open the answer |

## Meet the sample companies

The examples in this manual use a small set of fictional businesses so the numbers stay consistent from page to page.

| Company | Where | What they do |
| --- | --- | --- |
| **Al Waha Trading LLC** | Deira, Dubai (mainland) | Distributes kitchen equipment to hotels and restaurants |
| **Saqr Steel Fabrication LLC** | Mussafah, Abu Dhabi | Makes steel racks and mezzanine floors to order |
| **Lulu Pearl Foods FZE** | Jebel Ali Free Zone | Imports and repacks dates, nuts and spices |
| **Rimal Facilities Management LLC** | Sharjah | Maintenance contracts for residential towers |

:::uae Currency and dates
All amounts are in UAE dirhams (AED) unless stated otherwise. Dates follow the day-month-year format used across the UAE, for example 14-03-2026.
:::

## Before you start

- Make sure your administrator has created your user account and given you the right roles. See [Users, roles and permissions](/getting-started/users-roles).
- Keep your company's Tax Registration Number (TRN) and trade licence details handy if you are setting up a new company.
- Use a current version of Chrome, Edge, Safari or Firefox. DocFlow also works on tablets, which is handy on the warehouse floor.

:::details Is DocFlow suitable for a free zone company?
Yes. A free zone entity is set up exactly like a mainland company. The differences show up in tax settings, especially for Designated Zones under VAT, which are covered in the [UAE Compliance](/uae-compliance/designated-zones) section.
:::

:::details Can one DocFlow account manage several legal entities?
Yes. You can create a separate company for each trade licence, for example a mainland LLC and its sister FZE, and report on them individually or together. See [Companies](/organization/company).
:::

@@ first-login | First login and the setup wizard
@summary Sign in for the first time and let the wizard prepare your company, currency, fiscal year and tax defaults.

The first person to sign in to a new DocFlow site is guided through a short setup wizard. It asks only for what DocFlow needs to create a working company. Everything you enter here can be changed later.

## Signing in

1. Open the web address your administrator sent you, for example `yourcompany.docflow.ae`.
2. Enter your email address and password, then click **Sign In**.
3. If two-factor authentication is switched on, type the six-digit code from your authenticator app.

!fig The DocFlow sign-in page with email, password and the Sign In button

## Working through the wizard

The wizard has five short screens. Click **Next** to move forward and **Previous** to go back without losing what you typed.

| Screen | What you enter | Suggested value for a UAE company |
| --- | --- | --- |
| Language & region | Interface language, country, time zone | English or Arabic, United Arab Emirates, Asia/Dubai |
| Currency | Default company currency | AED |
| Your company | Legal name, abbreviation, domain | Al Waha Trading LLC, AWT, Distribution |
| Financial year | Start and end dates | 01-01-2026 to 31-12-2026 |
| Your profile | Name and password of the first user | The person who will administer DocFlow |

!fig Setup wizard step for company details with name, abbreviation and industry

:::tip Choosing an abbreviation
The abbreviation is added to the end of account names, warehouse names and cost centres, for example "Stores - AWT". Keep it short (two to four letters) and unique if you plan to add more companies later.
:::

## What the wizard creates for you

- A company record with a standard UAE chart of accounts
- A fiscal year matching the dates you chose
- Default warehouses: Stores, Work In Progress, Finished Goods and Goods In Transit
- Standard VAT templates for 5% standard-rated, zero-rated and exempt supplies
- A holiday list using the Saturday and Sunday weekend

:::uae Weekend settings
Federal government entities and most private companies moved to a Saturday–Sunday weekend in January 2022. If your company still works Saturdays, or works a Friday half day, change the holiday list after setup. See [Holiday lists](/organization/holiday-list).
:::

!fig Confirmation screen shown when the setup wizard completes

:::details I made a mistake in the wizard. Do I need to start again?
No. Every value can be corrected afterwards in the Company record or in System Settings. The only thing worth double-checking is the company currency. Once transactions are posted it cannot be changed.
:::

@@ navigating | Finding your way around
@summary The home screen, workspaces, sidebar, global search and keyboard shortcuts.

## The home screen

When you sign in you land on the home screen. Your modules are grouped into Finance, Trade and Production, and the quick-action buttons across the top let you start common tasks such as a new invoice or a payment straight away.

!fig Home screen with greeting, quick actions and module cards

## Workspaces

Click a module card to open its workspace. A workspace is a dashboard for one area of the business. It contains:

- **Number cards** with live figures, for example total receivables
- **Charts**, such as monthly sales or ageing buckets
- **Shortcuts** to the documents you open most
- **Links** to every list, report and setting in that module

!fig Accounting workspace with number cards, charts and shortcuts

## The sidebar

The sidebar on the left stays visible as you work. The workspace icon at the top lets you jump between modules without returning home. The item you are working in is highlighted in light purple.

## Search everything

Press `Ctrl + G` (or `Cmd + G` on a Mac) to open the global search. You can type:

- A document name, such as `SINV-2026-00042`
- A customer or item name, such as `Jumeirah Grand Hotel`
- A command, such as `new sales invoice`
- A report name, such as `trial balance`

!fig Global search showing results for a customer name

## Lists, forms and reports

Almost everything in DocFlow is one of three screens.

| Screen | What it is for | Example |
| --- | --- | --- |
| List view | Find, filter and act on many records | All unpaid sales invoices for March |
| Form view | Create or edit one record | One sales invoice to Jumeirah Grand Hotel |
| Report view | Analyse figures across records | Accounts Receivable ageing |

## Useful keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| `Ctrl + S` | Save the current form |
| `Ctrl + B` | Create a new record of the same type |
| `Ctrl + G` | Open global search |
| `Alt + click` on a field label | Copy the field's value |
| `Shift + /` | Show all shortcuts |

@@ document-lifecycle | How documents move through DocFlow
@summary Draft, submitted, cancelled and amended: the rules that keep records audit-ready, how documents link together, and what you can still change after submitting.

Transactions in DocFlow, such as invoices, payments, orders and stock entries, follow a fixed life cycle. This is what makes the books reliable enough for an FTA audit: once a document affects your accounts or stock, it cannot be quietly edited.

## Two kinds of record

| Kind | Examples | Life cycle |
| --- | --- | --- |
| Masters | Customer, supplier, item, employee, account | Saved and edited freely; disabled rather than deleted once used |
| Transactions | Quotation, order, invoice, payment, stock entry, salary slip | Draft → Submitted → Cancelled → Amended |

## The four states

| State | Docstatus | What you can do | Effect on books and stock |
| --- | --- | --- | --- |
| **Draft** | 0 | Edit freely, delete | None |
| **Submitted** | 1 | View, print, email, create follow-up documents | Ledger and stock entries are posted |
| **Cancelled** | 2 | View only | Every posted entry is reversed |
| **Amended** | 0, then 1 | A new draft copy of a cancelled document | Posts again once submitted |

!fig A sales invoice form showing the Draft status indicator next to the title

## Submitting a document

1. Fill in the form and click **Save**. The document is a Draft.
2. Check totals, taxes and accounts. Use **Preview** in the print view if needed.
3. Click **Submit** and confirm. The status changes and the ledger is updated.

If a [workflow](/framework/workflows) applies, the Submit button is replaced by actions such as **Send for Approval** and **Approve**.

## Correcting a submitted document

You cannot edit a submitted invoice. Instead:

1. Open it and click **Cancel**. DocFlow reverses its accounting and stock effects.
2. Click **Amend**. A new draft opens with a suffix such as `SINV-2026-00042-1`.
3. Make the correction and submit the amended version.

## What you can change after submitting

Some fields are marked **Allow on Submit**, so they can be edited on a submitted document without cancelling: for example remarks, the customer's PO number, delivery status, project or some print settings. Administrators can mark more fields this way with [Customise Form](/framework/customize-form), but never fields that change amounts, taxes or accounts.

:::uae Keep the audit trail intact
UAE VAT law requires you to keep tax invoices and records for at least five years (longer for real estate). DocFlow keeps cancelled documents, so the original, the cancellation and the amendment remain visible. For an invoice already issued to a customer, raise a [credit note](/accounting/credit-debit-notes) instead of cancelling, especially once the tax period is closed.
:::

## Linked documents

Documents remember where they came from. A sales invoice made from a delivery note, made from a sales order, made from a quotation, shows the whole chain in its **Connections** tab.

| Rule | Why |
| --- | --- |
| You cannot cancel a document while a submitted follow-up depends on it | Keeps the chain consistent |
| Cancel from the newest document backwards | Invoice, then delivery note, then order |
| Deleting is only possible for drafts and unlinked cancelled documents | Preserves history |

!fig Connections tab showing a sales order linked to its delivery note and invoice

## Back-dated and future-dated documents

Tick **Edit Posting Date and Time** to post with a different date. Back-dating is blocked by frozen dates and accounting periods once a month is closed, and back-dated stock transactions trigger valuation reposting.

## Deleting

| Document | Can be deleted? |
| --- | --- |
| Draft | Yes |
| Submitted | No; cancel it |
| Cancelled, not linked | Yes, by users with delete rights (kept in Deleted Documents for recovery) |
| Master with transactions | No; disable it |

## Common problems

:::details "Cannot cancel because submitted document is linked"
Cancel the later documents first, starting from the newest. The Connections tab shows which ones are linked.
:::

:::details "Cannot edit a submitted document"
Only Allow on Submit fields can change. Cancel and amend, or issue a credit note.
:::

## Related pages

- [Approval workflows](/framework/workflows)
- [Version history](/framework/audit-logs)

@@ users-roles | Users, roles and permissions
@summary Add colleagues, give them roles and role profiles, restrict them to companies, branches or warehouses, and decide exactly what each person can see and do.

## Types of user

| Type | Who | Access |
| --- | --- | --- |
| System User | Staff | The DocFlow desk, according to their roles |
| Website User | Customers, suppliers, applicants | The portal only: their own documents |

## Adding a user

1. Go to **Framework › User › New**.
2. Enter the email address, first and last name.
3. Choose **User Type**: System User or Website User.
4. Choose a **Role Profile** or tick roles individually.
5. Optionally choose a **Module Profile** to limit the modules shown.
6. Save. DocFlow emails an invitation so the person sets their own password.

!fig New user form with email, name, user type and role profile

## User settings

| Section | Fields |
| --- | --- |
| Basic | Name, email, mobile, language, time zone, profile picture |
| Roles | Roles, role profile, module profile |
| Defaults | Default company, warehouse, price list and other session defaults |
| Security | Two-factor authentication, restrict IP, login after / before, session expiry |
| Email | Email signature, email account access |
| API | API key and secret for integrations |

## Roles

A role is a bundle of permissions. Typical assignments:

| Job | Roles |
| --- | --- |
| Chief accountant | Accounts Manager, Auditor |
| Accounts executive | Accounts User |
| Storekeeper | Stock User |
| Stock controller | Stock Manager, Item Manager |
| Sales coordinator | Sales User |
| Sales manager | Sales Manager |
| Procurement officer | Purchase User |
| HR officer and PRO | HR User |
| HR manager | HR Manager |
| Projects manager | Projects Manager |
| Managing director | Report viewing roles; System Manager only if needed |

:::warning Keep System Manager for a few people
System Manager can change any setting, including permissions. Give it to one or two people at most, and protect those accounts with two-factor authentication.
:::

## Restricting records with user permissions

Roles decide *which kinds* of document a person can open. **User Permissions** decide *which records*.

| Restriction | Allow | For value |
| --- | --- | --- |
| Only one company | Company | Saqr Steel Fabrication LLC |
| Only one branch | Branch | Sharjah |
| Only some warehouses | Warehouse | JAFZA – Ambient, JAFZA – Chiller |
| Only own territory | Territory | Abu Dhabi |
| Only own employee record | Employee | Their own ID |

1. Open the user and click **Settings › User Permissions**, or go to **User Permission › New**.
2. Choose **Allow** and **For Value**.
3. Optionally limit it to certain document types with **Applicable For**.
4. Save. Lists, reports and link fields now show only allowed records.

!fig User permission restricting a user to the Sharjah branch

## Hierarchy-based access

To let managers see their team's records (leave, expense claims), DocFlow uses the **Reports To** hierarchy on employees together with user permissions on Employee.

## Disabling users

When someone leaves, untick **Enabled** on their user. Do not delete them: their name stays on the documents they created, and their history remains.

## Common problems

:::details A user cannot see a document they should
Check their roles, then user permissions (an Allow restriction hides records outside it), then whether the document type has an If Owner rule.
:::

:::details "Not permitted" when submitting
The role can create but not submit. Add a role with Submit rights, or check the workflow.
:::

## Related pages

- [Role profiles](/framework/role-profiles)
- [Role permissions](/framework/permissions)
- [Passwords and 2FA](/getting-started/security)

@@ data-import | Importing your existing data
@summary Bring customers, suppliers, items, prices, opening balances and stock into DocFlow from spreadsheets, in the right order, with validation and error handling.

## Recommended order

1. Company setup, chart of accounts (or the Chart of Accounts Importer), cost centres
2. Customer and supplier groups, territories
3. Customers and suppliers, then addresses and contacts
4. Item groups, units of measure, items, item prices
5. Employees (if using HR)
6. Opening stock (Stock Reconciliation, purpose Opening Stock)
7. Opening invoices (Opening Invoice Creation Tool)
8. Opening fixed assets
9. Opening trial balance (Journal Entry, Is Opening)

See [Opening balances and migration](/accounting/opening-balances) for the accounting side.

## Using the Data Import tool

1. Search for **Data Import** and click **New**.
2. Choose the **Document Type**, for example Customer.
3. Choose the **Import Type**: Insert New Records or Update Existing Records.
4. Click **Download Template**, choose the fields (including child tables such as addresses or item prices), and choose Excel or CSV.
5. Fill in the spreadsheet, one row per record. Child table rows go on following lines with the parent columns left blank.
6. Attach the file and click **Start Import**.

!fig Data Import form with document type, import type and template download

## Preparing the spreadsheet

| Tip | Why |
| --- | --- |
| Use the exact names of linked records | "Hotels", not "Hotel" for customer group |
| Keep dates in dd-mm-yyyy or as real Excel dates | Prevents wrong dates |
| Remove formulas and merged cells | The importer reads values only |
| Save as CSV UTF-8 or .xlsx | Keeps Arabic text intact |
| Use one sheet per document type | Clear errors |
| Check mandatory columns | Rows without them fail |

## Testing and errors

Import five rows first, check the records, then import the rest. DocFlow shows each failed row with its reason. Download the error log, fix the rows and import only those.

!fig Import log listing successful rows and one failed row with its error message

## Updating many records

Choose **Update Existing Records**, include the record name (ID) column and only the columns you want to change, for example new prices or territories.

## Opening invoices

Use the **Opening Invoice Creation Tool** to load every unpaid invoice at your go-live date, with party, invoice number, posting date, due date and outstanding amount. They post against a temporary opening account so ageing is correct from day one.

:::example Example: going live on 1 January 2026
Al Waha Trading has 186 unpaid customer invoices worth AED 2,412,750 at 31 December 2025. The accountant exports the ageing from the old system, pastes it into the opening invoice tool and submits. The receivable ageing in DocFlow matches the old system to the dirham.
:::

:::details Can I import Arabic names?
Yes. Save as CSV UTF-8 or .xlsx. Keep the Arabic name in a separate column such as **Customer Name in Arabic** for bilingual documents.
:::

## Related pages

- [Opening balances](/accounting/opening-balances)
- [Bulk tools](/framework/bulk-tools)

@@ printing | Print formats and letterheads
@summary Produce professional, bilingual tax invoices and documents: letterheads, standard and custom print formats, print settings and printing in bulk.

## Letterheads

A **Letter Head** is the header and footer printed on documents.

1. Go to **Framework › Letter Head › New**.
2. Choose **Image** (upload your designed header) or **HTML** for a text header.
3. Add a footer with trade licence number, TRN, address, phone and website.
4. Tick **Is Default** for the main letterhead. Create others for branches or companies.

!fig Letter head form with logo upload and footer containing TRN and address

## Choosing a print format

Open any document and click **Print**. At the top:

| Control | What it does |
| --- | --- |
| Print Format | Layout, for example UAE Tax Invoice or Proforma Invoice |
| Letter Head | Which header and footer |
| Language | English, Arabic or bilingual |
| No Letterhead | For pre-printed stationery |
| PDF / Print | Download or print |

!fig Print preview of a tax invoice with format and letterhead selectors

:::uae What a UAE tax invoice must show
A full tax invoice needs the words "Tax Invoice"; the supplier's name, address and TRN; the customer's name, address and TRN (if registered); a sequential number; the date of issue and date of supply if different; a description of goods or services; unit price, quantity, taxable amount, discount, VAT rate and VAT amount in AED; and the total payable. DocFlow's **UAE Tax Invoice** format includes all of these in English and Arabic.
:::

## Print settings

In **Print Settings** choose the paper size (A4), font, whether to print with letterhead by default, whether to allow printing of drafts and cancelled documents, and whether to repeat headers on each page.

## Building your own format

| Tool | For |
| --- | --- |
| Print Format Builder | Drag and drop fields, sections and columns; add text and images |
| HTML / Jinja format | Full control for developers, including complex bilingual layouts |
| Print Heading | Different headings such as "Tax Invoice", "Proforma Invoice", "Delivery Order" on the same format |
| Print Style | Shared CSS for all formats |

!fig Print format builder with draggable fields and section layout

## Printing in bulk and cheques

- Select several records in a list and choose **Print** to create one combined PDF.
- Use a **Cheque Print Template** to print supplier and PDC cheques directly from payment entries, aligned to your bank's cheque layout.

:::details Why does my Arabic text print in the wrong order?
Use a font that supports Arabic and place Arabic fields in right-aligned columns. The standard UAE formats handle this already.
:::

## Related pages

- [Arabic labels and translations](/framework/translations)
- [Sales invoices](/accounting/sales-invoice)

@@ notifications | Notifications, emails and alerts
@summary Stay on top of approvals, overdue invoices and expiring documents with in-app notifications, email accounts, alert rules, digests and SMS.

## The notification bell

The bell collects mentions, assignments, shared documents, workflow actions and alerts. Click an item to open the document. In **Notification Settings** each user chooses which events reach them by email as well.

!fig Notification panel listing an assignment and a mention

## Email accounts

Connect mailboxes under **Framework › Email Account**:

| Setting | Use |
| --- | --- |
| Email Address and Service | Microsoft 365, Google Workspace or IMAP/SMTP from your host |
| Enable Outgoing | Send from DocFlow |
| Enable Incoming | Receive replies and create records (for example support issues) |
| Append To | Document type created from incoming mail |
| Default Outgoing | Used when no account is chosen |
| Signature | Default signature |

Emails sent from documents are stored on the document timeline, and replies come back to the same document.

## Notification rules

A **Notification** sends an email, in-app alert or SMS when something happens.

| Field | Example |
| --- | --- |
| Document Type | Sales Invoice |
| Send Alert On | Days After (due date) |
| Condition | `doc.outstanding_amount > 0` |
| Recipients | Customer contact, owner, a role |
| Subject and Message | With document fields |
| Attach Print | Attach the PDF |

Useful rules for UAE companies:

| Alert | Trigger | Send to |
| --- | --- | --- |
| Invoice overdue | 7 days after due date | Customer's accounts contact |
| Trade licence expiring | 30 days before expiry | PRO |
| Visa, Emirates ID or passport expiring | 60 days before | HR officer |
| Large purchase order | Grand total above AED 50,000 | Finance manager |
| VAT return due | 10 days before the deadline | Accounts manager |
| Bank guarantee expiring | 30 days before | Finance |

!fig Notification rule set to alert HR 60 days before visa expiry

## Email digests and auto email reports

- An **Email Digest** sends managers a daily or weekly summary: income, expenses, cash, receivables, payables, new orders.
- **Auto Email Report** sends any saved report on a schedule ([guide](/framework/report-builder)).

## SMS

Configure an SMS provider in **SMS Settings** to send alerts to mobiles, for example delivery notifications to customers.

:::tip Use assignments for follow-ups
Instead of emailing a colleague, click **Assign To** on a document. They get a notification and a to-do until they close it.
:::

## Related pages

- [Email templates](/framework/email-templates)
- [Automation tools](/framework/automation)

@@ list-views | Lists, filters and views
@summary Find any record fast: filters, sorting, saved filters, group-by sidebar, report, kanban, calendar and map views, and bulk actions on many records at once.

Every document type in DocFlow has a list. Learning to filter and switch views well saves more time than any other single skill in the system.

## Parts of the list view

| Part | What it does |
| --- | --- |
| Standard filters bar | Quick fields at the top, such as customer, status or date |
| Filter button | Any number of conditions on any field |
| Sort | Sort by any field, ascending or descending |
| Sidebar | Assigned to, created by, tags and group-by counts |
| Status indicator | Coloured label such as Draft, Unpaid, Overdue, Paid |
| Checkboxes and Actions | Act on several records at once |
| Settings (list settings) | Choose which columns appear |

!fig Sales invoice list filtered to unpaid invoices for the Abu Dhabi territory

## Filtering

1. Click **Filter** and choose a field, for example **Due Date**.
2. Choose a condition: equals, not equals, like, in, not in, between, is set, is not set, greater than, less than, timespan (this month, last quarter).
3. Enter the value. Add more filters; they are combined with AND.
4. Click a value in any row (such as a customer name) with **Alt** held to add it as a filter instantly.

| Example | Filters |
| --- | --- |
| Overdue invoices over AED 10,000 | Status = Overdue, Outstanding Amount > 10000 |
| This quarter's purchase orders from China | Supplier Country = China, Transaction Date timespan = this quarter |
| Employees with visas expiring in 60 days | Visa Expiry between today and today + 60 |

## Saving filters and sharing views

Click **Save Filter**, give it a name such as "Overdue – Hotels", and it appears in the sidebar. Tick **Is Global** (System Managers) so everyone sees it.

## View types

| View | Best for |
| --- | --- |
| List | Daily work, bulk actions |
| Report | Spreadsheet-style columns, totals, group-by, export ([report builder](/framework/report-builder)) |
| Kanban | Cards by status, for example opportunities by stage or tasks by status |
| Calendar | Date-based records: leave, events, maintenance visits, holidays |
| Gantt | Tasks and project timelines |
| Dashboard | Charts on the list's data |
| Map | Records with a location, such as customer addresses or assets |
| Image | Item catalogues with pictures |
| Inbox | Email accounts |

## Bulk actions

Tick records, then use **Actions**:

| Action | Use |
| --- | --- |
| Edit | Set one field on all selected records, for example territory or price list |
| Submit / Cancel | Submit or cancel many drafts in one go |
| Assign To | Give the records to a colleague |
| Apply Assignment Rule | Distribute by rule |
| Add Tags | Label records |
| Print | Combined PDF |
| Export | Selected records to Excel or CSV |
| Delete | Drafts and unlinked records only |

:::tip Keyboard in lists
Use the arrow keys to move through rows, **Enter** to open, and **Space** to select. `Ctrl + K` jumps to the search bar of the list.
:::

## Group-by and counts

The sidebar shows counts for **Assigned To**, **Created By** and **Tags**. Click **Edit** under group-by to add fields such as Customer Group or Warehouse. Clicking a value filters the list.

:::details Why do I see fewer records than my colleague?
Your user permissions limit which records you see, for example only the Sharjah branch. See [Users, roles and permissions](/getting-started/users-roles).
:::

## Related pages

- [Report builder](/framework/report-builder)
- [Bulk tools](/framework/bulk-tools)
- [Finding your way around](/getting-started/navigating)

@@ collaboration | Working together: comments, assignments and sharing
@summary Use comments, mentions, assignments, to-dos, sharing, tags, attachments and the document timeline so the conversation about a record stays with the record.

## The timeline

At the bottom of every document is its **timeline**: who created it, every change (with old and new values), comments, emails sent and received, assignments, workflow actions and print or export events. Auditors can read the full history of an invoice without asking anyone.

!fig Document timeline with a comment, a mention and a version change

## Comments and mentions

1. Scroll to **Add a comment** at the bottom of the document.
2. Type your comment. Use `@` to mention a colleague, for example `@Fatima please confirm the delivery date`.
3. Click **Comment**. The colleague gets a notification with a link.

Comments are internal: they never print and are not emailed to customers.

## Assignments and to-dos

| Feature | How |
| --- | --- |
| Assign To | Sidebar › Assigned To › **+**, choose users, a date and priority, add a comment |
| My to-dos | Every assignment appears in the user's **ToDo** list |
| Close | When the assignee finishes, they remove themselves or close the to-do |
| Assignment Rule | Assign automatically by condition, round robin or load balancing, for example new support issues to the support team |

## Sharing a document

Click **Share** in the sidebar to give one specific user read, write, submit or share rights on this record only, even when their user permissions would normally hide it. Use this for one-off reviews, for example sharing a confidential purchase order with the finance director.

## Attachments

Drag files into the **Attachments** section of the sidebar or use the attach button. Attachments can be private (only users with access to the document) or public. Typical uses: supplier quotations, signed delivery notes, customs declarations, employee passport copies.

## Tags, likes and followers

| Feature | Use |
| --- | --- |
| Tags | Free labels, for example "Ramadan promotion", used as filters |
| Follow | Get notified of every change on a document |
| Like | Quick acknowledgement |

## Email from a document

Click **⋯ › Email** or **New Email** in the timeline. Choose recipients, a template, and attach the print format as PDF. The email and any reply are stored on the timeline, so anyone opening the document sees the whole conversation.

:::example Example
A Saqr Steel sales coordinator assigns quotation `QTN-2026-00118` to the estimation engineer with the comment "Please check mezzanine load for 500 kg/m²". The engineer replies in the comments, updates the rates and removes their assignment. The coordinator emails the revised quotation from the same screen.
:::

## Related pages

- [Notifications](/getting-started/notifications)
- [Version history](/framework/audit-logs)

@@ system-settings | System settings
@summary The site-wide defaults that every user inherits: country, time zone, date and number formats, currency precision, session and password policy, and module settings.

Only System Managers can change these. Most are set by the setup wizard; review them once before go-live.

## System Settings

| Setting | Recommended for UAE |
| --- | --- |
| Country | United Arab Emirates |
| Time Zone | Asia/Dubai |
| Language | English or Arabic (each user can choose their own) |
| Date Format | dd-mm-yyyy |
| Time Format | HH:mm |
| Number Format | #,###.## |
| Float and Currency Precision | 2 (3 only if you need fils precision in unit rates) |
| First Day of the Week | Monday (or Sunday if your office uses it) |
| Session Expiry | 8 to 12 hours of inactivity |
| Enable Password Policy | On, minimum score 3 |
| Force re-login after password change | On |
| Allow Login using Mobile Number | Optional |
| Disable Standard Email Footer | On, use your own footer |

!fig System Settings with country, time zone, date format and precision

## Global defaults

In **Global Defaults** set the default company, currency (AED) and the option to hide the currency symbol. Each user can override defaults (company, warehouse, cost centre) under their **session defaults** from the user menu.

## Module settings

Each module has its own settings page. The important ones:

| Settings | Examples of what they control |
| --- | --- |
| [Accounts Settings](/accounting/accounts-settings) | Frozen dates, credit limit checks, unlinking payments on cancel |
| Selling Settings | Customer naming, default price list, whether a sales order is required before invoicing |
| Buying Settings | Supplier naming, whether a PO or receipt is required before the purchase invoice |
| Stock Settings | Valuation method, negative stock, auto material requests, batch and serial settings |
| Manufacturing Settings | Backflush basis, overproduction allowance, capacity planning |
| HR Settings and Payroll Settings | Employee naming, leave approval, payroll defaults |
| Projects Settings | Timesheet rules |
| Support Settings | Portal and issue closing rules |

## Naming and numbering

Document numbers come from [naming series](/framework/naming-series), for example `SINV-.YYYY.-.#####`. Set them before you post the first transaction.

## Personal data requests

Under UAE PDPL and free zone data protection rules (DIFC, ADGM), individuals can ask what data you hold and ask for deletion. DocFlow supports:

| Tool | Use |
| --- | --- |
| Personal Data Download Request | Export everything held about a website user |
| Personal Data Deletion Request | Anonymise a person's data where retention rules allow |

Accounting and tax records must still be kept for the legal retention period, so deletion anonymises names rather than removing invoices.

## Removing test data before go-live

**Delete Company Transactions** (on the company form, System Manager only) removes all transactions of one company while keeping masters such as customers, items and accounts. Use it once after user training on the live site, never after go-live.

:::warning Changes affect everyone
Changing precision, date format or naming after go-live can confuse reports and printed documents. Plan these settings before the first live transaction.
:::

## Related pages

- [Company](/organization/company)
- [Security](/getting-started/security)

@@ security | Passwords, 2FA and security
@summary Protect your DocFlow site with strong passwords, two-factor authentication, IP and time restrictions, session controls, login monitoring and good habits.

## Password policy

In **System Settings** switch on **Enable Password Policy** and set the **Minimum Password Score** (3 is a good level). DocFlow rejects weak or common passwords and shows a strength meter. Set **Force User to Reset Password** every 90 days if your policy requires it.

## Two-factor authentication (2FA)

1. In **System Settings**, tick **Enable Two Factor Auth**.
2. Choose the method: **OTP App** (Google or Microsoft Authenticator), **SMS** or **Email**.
3. Choose who must use it, by role: for example System Manager, Accounts Manager, HR Manager.
4. At the next sign-in, users scan the QR code with their authenticator app.

!fig Two-factor sign-in screen asking for the six-digit code

:::tip Make 2FA mandatory for finance and HR
These roles can see bank details, salaries and Emirates ID numbers. 2FA is the single most effective protection against stolen passwords.
:::

## Restricting where and when users sign in

| Control | Where | Example |
| --- | --- | --- |
| Restrict IP | User › Security | Office public IP only for payroll users |
| Login After / Before | User › Security | 7:00 to 20:00 for shift staff |
| Simultaneous Sessions | User | One session per user |
| Session Expiry | System Settings | 8 hours |
| Allow guests to upload files | System Settings | Off unless needed for web forms |

## Monitoring access

| Log | Shows |
| --- | --- |
| Access Log | Who exported or printed which document or report |
| Activity Log | Logins, logouts, failed attempts with IP address |
| Version history | Every change to a document ([audit logs](/framework/audit-logs)) |
| Deleted Documents | Every deleted record, restorable |

After repeated failed logins, DocFlow locks the account for a period; administrators can unlock it.

## API keys

Integrations use an API key and secret generated on a user record, not a person's password. Create a dedicated integration user with only the roles it needs, and regenerate keys if they are exposed.

## Good habits

- Never share accounts. Each person has a user, so the audit trail stays meaningful.
- Disable users the day they leave.
- Review System Manager holders every quarter.
- Do not email passwords; use **Send Welcome Email** or **Reset Password**.
- Be suspicious of emails asking you to change bank details for a supplier. Verify by phone before editing the supplier's bank account.

:::uae Data protection
The UAE Personal Data Protection Law (PDPL), and the DIFC and ADGM regimes for companies in those zones, require appropriate security for personal data such as employee records. Role permissions, 2FA and access logs help you show that controls are in place.
:::

## Related pages

- [Users, roles and permissions](/getting-started/users-roles)
- [Backups and export](/getting-started/backups-export)

@@ mobile-access | Using DocFlow on mobile and tablet
@summary Work from a phone or tablet: the responsive desk, installing the app on your home screen, barcode scanning, field and warehouse tasks and employee self-service.

DocFlow runs in the browser and adapts to small screens, so no separate installation is required.

## Adding DocFlow to your home screen

| Device | Steps |
| --- | --- |
| iPhone / iPad (Safari) | Open your site, tap **Share › Add to Home Screen** |
| Android (Chrome) | Open your site, tap **⋮ › Install app** or **Add to Home screen** |

It then opens full-screen like an app.

!fig DocFlow list view on a phone showing sales orders and the search bar

## What works well on mobile

| Task | Who |
| --- | --- |
| Approving purchase orders, leave and expense claims | Managers |
| Checking stock balance and item prices | Sales staff on customer visits |
| Creating quotations and sales orders | Field sales |
| Receiving goods and scanning barcodes | Storekeepers with tablets |
| Pick lists and delivery notes | Warehouse and drivers |
| Recording maintenance visits and timesheets | Technicians |
| Checking in and out, applying for leave, viewing payslips | All employees |
| Viewing dashboards | Management |

## Barcode scanning

On item tables in stock entries, delivery notes, receipts and POS, tap the **scan** button to use the phone camera, or connect a Bluetooth scanner to a tablet. Scanned barcodes match item barcodes, batch numbers or serial numbers.

## Employee check-in

Employees can use **Employee Checkin** from a phone with location, so site staff at a project in Al Ain record attendance without a biometric device. HR can restrict check-ins to a radius around the site.

## Offline and connectivity

The desk needs a connection. For shops with unreliable internet, the Point of Sale can continue billing briefly and sync when back online. On construction sites with poor coverage, enter timesheets later on the same day.

:::details Can I print from my phone?
Yes. Open the print view and use the phone's share or print option, or send the PDF by email or WhatsApp.
:::

## Related pages

- [Point of Sale](/accounting/pos)
- [Attendance](/hr-payroll/attendance-leave)

@@ backups-export | Backups and exporting data
@summary How DocFlow backs up your data, how to download backups and files, export records to Excel, keep records for the UAE retention periods and handle data at the end of a contract.

## Automatic backups

DocFlow takes automatic backups of your database and files on a schedule (daily, with point-in-time options on higher plans). Backups are stored encrypted and separate from the live server.

## Downloading a backup

1. Go to **Framework › Backups** (System Managers only).
2. The list shows recent backups with date and size.
3. Click **Download** for the database and, if needed, public and private files.
4. Store downloads securely; they contain all your business and personal data.

!fig Backups page listing recent database and file backups with download links

## Exporting records

| Method | Use |
| --- | --- |
| List view › Actions › Export | Selected or filtered records, Excel or CSV |
| Report view › Export | Columns of your choice, including child tables |
| Data Export tool | Any document type with chosen fields and filters |
| Any report › Export | Financial statements, ageing, stock ledger to Excel or PDF |
| Print › PDF | Individual documents |

Exports are recorded in the access log.

## Record retention in the UAE

| Records | Keep for |
| --- | --- |
| VAT records and tax invoices | At least 5 years after the end of the tax period |
| Real estate VAT records | 15 years |
| Corporate Tax records | 7 years after the end of the tax period |
| Commercial books under the Commercial Companies and Commercial Transactions laws | Generally 5 years or more |
| Employee records | During employment and as required after it |

Do not delete transactions to save space; DocFlow is designed to keep them, and cancelled documents remain for audit.

## FTA audit file

For a tax audit, generate the **FTA Audit File (FAF)** from [UAE Compliance](/uae-compliance/records-audit), which exports the general ledger, sales and purchase listings in the format the FTA expects.

## End of contract

If you leave DocFlow, you can request a full backup of your database and files. The data remains yours.

:::tip Test a restore
Once a year, ask DocFlow support to restore a backup to a test site, so you know your recovery works.
:::

## Related pages

- [Security](/getting-started/security)
- [Report builder](/framework/report-builder)

@@ glossary | Glossary
@summary Plain-language meanings of the terms used across DocFlow and this manual, including UAE tax and HR terms.

!fig Search results showing a glossary term highlighted

## DocFlow terms

| Term | Meaning |
| --- | --- |
| Amend | Create a corrected copy of a cancelled document |
| Child table | A table inside a form, such as the items on an invoice |
| Cost centre | A unit for tracking income and expenses, such as a branch or department |
| Docstatus | The state of a document: 0 draft, 1 submitted, 2 cancelled |
| DocType | A type of document, such as Sales Invoice or Customer |
| Draft | A saved document that has no effect on the books yet |
| Item | Any product or service you buy, sell or stock |
| Letter head | The header and footer printed on documents |
| Link field | A field that points to another record, such as Customer |
| Master | Reference data used in transactions: customer, supplier, item, account |
| Naming series | The pattern for document numbers |
| Posting date | The date a transaction affects the books |
| Price list | A list of item rates for buying or selling |
| Role | A set of permissions given to users |
| Submit | Finalise a document so it posts to ledgers and stock |
| UOM | Unit of measure, such as Nos, Kg, Carton |
| User permission | A restriction to certain records, such as one company |
| Valuation rate | The cost of one unit of stock |
| Warehouse | A location where stock is kept |
| Workflow | A set of states and approvals a document passes through |
| Workspace | A dashboard page for one module |

## UAE terms

| Term | Meaning |
| --- | --- |
| ASP | Accredited Service Provider for e-invoicing; DocFlow is one |
| Designated Zone | A free zone treated as outside the UAE for certain VAT purposes |
| EmaraTax | The FTA's online portal for registration and returns |
| FTA | Federal Tax Authority |
| FAF | FTA Audit File |
| Gratuity | End-of-service benefit under the UAE Labour Law |
| MOHRE | Ministry of Human Resources and Emiratisation |
| PDC | Post-dated cheque |
| Reverse charge | The buyer accounts for VAT instead of the supplier, for example on imported services |
| SIF | Salary Information File for WPS |
| TRN | Tax Registration Number (15 digits) |
| VAT 201 | The UAE VAT return |
| WPS | Wage Protection System |
| Corporate Tax | Federal tax on business profits, 9% above AED 375,000 |
| QFZP | Qualifying Free Zone Person, eligible for 0% Corporate Tax on qualifying income |

## Related pages

- [Welcome](/getting-started/welcome)
- [UAE Compliance overview](/uae-compliance/overview)
