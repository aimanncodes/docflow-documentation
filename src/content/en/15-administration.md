@@ overview | Administration at a glance
@summary Where the system tools live: users and permissions, form building, automation, data, email, integrations, printing, the setup wizard, system tools and the website.

The **Administration** tile on the home screen holds the tools that set up DocFlow for everyone: users and permissions, email, printing, imports, backups and form changes. You only see the tile if your role allows it, and most tools need the **System Manager** role.

The tools are grouped in folders on the left rail:

| Folder | What you find there |
| --- | --- |
| **Users** | **User**, **Role**; permissions: **User Permission**, **Permission Manager** (Role Permissions Manager), **Permission Inspector**; audits: **Activity Log**, **Permission Log**, **Access Log** |
| **Build** | **Report**, **Workspace**, **Dashboard**; customization: **Workflow**, **Customize Form**, **Custom Field**. The other items here are developer tools; leave them alone unless your provider asks. |
| **Automation** | **Assignment Rule**, **Milestone**, **Auto Repeat**, **Auto Email Report**, **Reminder** |
| **Data** | **Data Import**, **Data Export**, **Bulk Update**, **Backups**, **Deleted Document** |
| **Email** | **Email Account**, **Communication**, **Email Domain**, **Email Queue**, **Email Template**, **Unhandled Email** |
| **Integrations** | The Google settings, **Social Login Key** (sign in with Google and similar), and connections to other systems. Most are set up by your provider. |
| **Printing** | **Print Format**, **Print Heading**, **Print Format Builder**, **Print Settings**, **Letter Head** |
| **Setup Wizard** | The first-time setup wizard |
| **System** | **Notification**, **Notification Settings**, **Error Log**, and technical logs and tools for your provider |
| **Website** | The website home page, **Web Page**, **Web Form**, website settings, **Portal Settings**, **Website Script**, **Website Theme** |

!fig The Administration tile open on Automation, with the rail folders Automation, Build, Data, Email, Integrations, Printing, Setup Wizard, System, Users and Website on the left @shot 09-administration/01-administration-rail.png

## The other Setup tiles

- **Organization** holds the structure of your business: **Entity**, **Branch** and **Department**. See [Organization at a glance](/organization/overview).
- **Settings** holds **Global Defaults**, **System Settings** and one settings page per module. See [Settings at a glance](/settings/overview).

## Setting up a new system

1. [System Settings](/administration/system-settings): country, language, time zone.
2. [Entities](/organization/company), branches and departments.
3. [Email account](/administration/email-accounts).
4. [Users and roles](/administration/users-roles).
5. [Letter head and print formats](/administration/letter-head-print-formats).
6. Import masters with [Data Import](/administration/data-import).
7. Check [backups](/administration/backups).

## Who should make changes

Changes here affect every user. Keep them with one or two trained **System Managers**, try changes on a test record first, and write down what you change and why.

:::tip Start small
Most companies need only a handful of custom fields, a few print formats, two or three workflows and some notifications. Resist recreating every habit of your old system.
:::

## Related pages

- [Users and roles](/administration/users-roles)
- [Role permissions](/administration/permissions)

@@ users-roles | Users and roles
@summary Add colleagues, give them roles, role profiles and module profiles, limit them to certain records with user permissions, and switch users off.

Everyone who signs in to DocFlow needs a user. A user's roles decide what they may see and do: an accountant gets the accounting roles, a sales person the sales roles, an employee only the self-service screens. Give each person only the roles they need.

**Where to find it:** **Administration** > **Users** > **User**.

## Before you start

- You need the **System Manager** role.
- An outgoing email account should work, so new users get their welcome email. See [Email accounts](/administration/email-accounts).
- Decide which roles each person needs. See the common roles at the end of this page.
- For employees, it is easier to create the user from the Employee record with **Create User**. See [Employee records](/human-resources/employees).

## Adding a user

1. Open **Administration** > **Users** > **User** and click **Add User**.
2. Enter the **Email**, for example sara@alnoortrading.ae, and the **First Name** and **Last Name**.
3. Leave **Send Welcome Email** ticked, so the user gets a link to set a password.
4. Click **Save**.
5. Open the **Roles & Permissions** tab.
6. Pick a **Role Profile** (a saved set of roles), or tick the roles one by one. For example: **Accounts User** for an accountant, **Sales User** for a sales person.
7. To hide modules the user does not need, pick a **Module Profile** or untick modules under **Allow Modules**.
8. Click **Save**.

!fig A user record on the Roles & Permissions tab, with the Role Profiles field, the list of roles with Accounts User ticked, and Allow Modules below @shot 09-administration/03-user-roles.png

## Limit a user to certain records

Roles decide which document types a user may open. To limit a user to certain records, for example one entity or one branch, add a **User Permission**:

1. Open **Administration** > **Users** > **User Permission** and click **Add User Permission**.
2. Pick the **User**, the document type in **Allow** (for example Entity) and the record in **For Value**.
3. Click **Save**.

## Switch a user off

Untick **Enabled** on the user and save. The person can no longer sign in, but their records stay.

## What happens next

- The user gets a welcome email with a link to set their password, and can then sign in.
- A user with access to two or more entities sees the entity selector.
- Each user can pick their own language (English or Arabic) and theme.
- To check what a user can reach, use **Administration** > **Users** > **Permission Inspector**.

## Common roles

| Role | What it is for |
| --- | --- |
| **System Manager** | Full access to the system: users, roles, permissions, settings, email accounts, backups, Data Import, customizing forms. The only role that may run email campaigns and use the Backups page. It does not let you generate, file or reopen VAT returns: for that a System Manager also needs **Accounts Manager** or **VAT Administrator**. |
| **Administrator** | The built-in super user created when the system was installed. Use it only for setup and emergencies, not for daily work. |
| **Accounts User** | Daily accounting: sales and purchase invoices (only Accounts User and Accounts Manager can create them), payments, post-dated cheques, bank and cash transactions, Other Income, Other Expenses, Mutual Settlement, Tax Refund for Tourists Scheme. |
| **Accounts Manager** | Everything an Accounts User does, plus the accounting setup and period closing. |
| **VAT Administrator** | Sets up and runs VAT: VAT Settings, filing periods, adjustments, the VAT reports and e-invoices. |
| **VAT Approver** | Approves late postings, VAT adjustments, import adjustments and voluntary disclosures. |
| **Sales User** | Leads, opportunities, quotations and sales orders. Cannot create sales invoices. |
| **Sales Manager** | Everything a Sales User does, plus CRM Settings, campaigns and contracts. |
| **Purchase User** | Buying documents such as purchase orders. Can only read purchase invoices. |
| **Purchase Manager** | Buying, and contracts with suppliers. |
| **HR Manager** | Full HR and payroll. |
| **HR User** | Daily HR work. |
| **Leave Approver**, **Expense Approver** | Approve the requests of the employees they are set as approver for. |
| **Employee** | Self-service only: leave, expense claims, attendance requests, check-ins and their own payslips. |

## Good practice

- Give each person the fewest roles that let them do their job.
- Keep **System Manager** for one or two administrators.
- Separate duties where you can: the person who posts VAT adjustments should not also approve them.

## Common problems

- **The user did not get the welcome email.** Check the outgoing email account and **Administration** > **Email** > **Email Queue**.
- **A user cannot see a module or a document.** Check their roles, their **Allow Modules**, and any User Permission that limits them.
- **An employee cannot open the self-service screens and sees "Login Failed".** No active employee is linked to that user's email.

## Related pages

- [Role permissions](/administration/permissions)
- [Role profiles and module profiles](/administration/role-profiles)

@@ role-profiles | Role profiles and module profiles
@summary Bundle roles into profiles for each job, assign them to many users at once, and limit the modules a user sees with module profiles.

## Role profiles

A **Role Profile** is a named set of roles. Change the profile and every user with it is updated.

1. Search for **Role Profile** and create a new one.
2. Name it after the job, for example "Storekeeper".
3. Tick the roles.
4. Save. On each user, pick the profile in **Role Profiles** instead of ticking roles.

!fig Role profile for a storekeeper with the Stock User role ticked

## Suggested profiles

| Profile | Roles |
| --- | --- |
| Accountant | Accounts User |
| Finance Manager | Accounts Manager |
| Sales Executive | Sales User |
| Storekeeper | Stock User |
| Procurement | Purchase User, Stock User |
| HR Officer | HR User, Employee |
| Employee self-service | Employee |

## Module profiles

A **Module Profile** hides modules from users who do not need them. For example a storekeeper's profile blocks Accounting, Human Resources and CRM, so they see only Stock and Buying. Pick it in **Module Profile** under **Allow Modules** on the user. Blocking a module only hides it; permissions still come from roles.

## Related pages

- [Users and roles](/administration/users-roles)
- [Role permissions](/administration/permissions)

@@ permissions | Role permissions
@summary Change what a role may do on a document type in the Role Permissions Manager: add rules, tick rights, use permission levels and restore the original permissions.

Each role comes with permissions on each document type: read, write, create, delete, submit, cancel and so on. The standard permissions suit most companies. When they do not, you change them in the Role Permissions Manager, for example to let a role read a document type it cannot see now.

**Where to find it:** **Administration** > **Users** > **Permission Manager**.

## Before you start

- You need the **System Manager** role.
- Change permissions only when you must. Write down what you changed, so you can undo it.

## Steps

1. Open **Permission Manager**. The page is titled **Role Permissions Manager** and shows "Select Document Type or Role to start.".
2. Pick a **Document Type**, a **Role**, or both.
3. Each row shows a role and level, with a tick box per permission. Tick or untick a box. The change is saved at once.
4. To give a new role access, click **Add A New Rule**. In the **Add New Permission Rule** dialog pick the document type, role and permission level, then click **Add**.
5. To limit a role by user permissions, click **Set User Permissions**.
6. To undo all your changes for a document type, click **Restore Original Permissions** and confirm.

!fig The Role Permissions Manager for Sales Invoice, with rows for Accounts Manager, VAT Administrator and Accounts User at level 0 and their ticked permissions @shot 09-administration/04-role-permissions.png

The **Quick Help for Setting Permissions** box at the foot of the page explains each permission type and permission levels.

## Rights

| Right | Allows |
| --- | --- |
| **Select** | Choose the record in link fields only |
| **Read** | Open and view |
| **Write** | Edit |
| **Create** | Make new records |
| **Delete** | Delete records |
| **Submit** | Submit |
| **Cancel** | Cancel submitted documents |
| **Amend** | Amend cancelled documents |
| **Print** | Print and PDF |
| **Email** | Send emails |
| **Report** | See the document type in report view and reports |
| **Import** | Use Data Import |
| **Export** | Export to Excel or CSV |
| **Share** | Share with other users |
| **Mask** | See the value of masked fields |
| **Only If Creator** | The rights apply only to records the user created |

## Permission levels

Level 0 is about the whole document. Higher levels apply to fields that have that level set in [Customize Form](/administration/customize-form). Use them for sensitive fields such as bank details: give the field level 1, then give **Read** or **Write** at level 1 only to the roles that need it.

## What happens next

Users with the role get the new rights the next time they load a page. To check the result for one user, use **Administration** > **Users** > **Permission Inspector**.

## Common problems

- **"No Permissions set for this criteria."**: this role has no rule on this document type yet. Use **Add A New Rule**.
- **A role has rights at level 1 but not at level 0.** Without level 0, higher levels mean nothing. Give level 0 first.

## Related pages

- [Users and roles](/administration/users-roles)
- [Role profiles](/administration/role-profiles)

@@ audit-logs | Version history and audit logs
@summary See every change to every record: version history, the activity, permission and access logs, deleted documents, and how they support FTA audits.

## Version history

On any document that tracks changes, the timeline shows each save: the user, the time, the field, the old value and the new value.

!fig Document timeline showing a changed rate and quantity on a sales order

## Logs

| Log | Where | Records |
| --- | --- | --- |
| **Activity Log** | **Users** > Audits | Sign-ins, sign-outs and failed sign-ins |
| **Permission Log** | **Users** > Audits | Changes to permissions |
| **Access Log** | **Users** > Audits | Exports, prints and report views |
| **Deleted Document** | **Data** | Deleted records, restorable by System Managers |
| **Email Queue** | **Email** | Every email sent and its status |
| **Error Log** | **System** | System errors, useful for your provider |

## Restoring a deleted document

Open **Administration** > **Data** > **Deleted Document**, find the record and click **Restore**. It returns as it was when it was deleted.

## Using logs in audits

| Question from an auditor | Where to look |
| --- | --- |
| Who changed this supplier's bank details? | Version history on the supplier |
| Who approved this payment? | Workflow actions on the timeline |
| Was this invoice changed after issue? | Submitted documents cannot change; check cancellations and amendments |
| Who exported payroll? | **Access Log** |

:::uae Records for the FTA
The FTA can ask how a figure was reached. DocFlow's unbroken history of submitted, cancelled and amended documents, together with version history, lets you show an audit trail.
:::

## Related pages

- [Records, audits and FTA requests](/vat-compliance/records-audit)
- [Backups](/administration/backups)

@@ customize-form | Customize Form and custom fields
@summary Adapt a form without a developer: rename labels, make fields required or hidden, move fields, add your own fields and set the default print format.

You can adapt DocFlow's forms to your company: rename a label, make a field required, hide a field you never use, or add a field of your own.

**Where to find it:** **Administration** > **Build** > **Customize Form** and **Custom Field**.

## Before you start

- You need the **System Manager** role.
- Try changes on a test record first. A wrong change can block users from saving.

## Change a form

1. Open **Customize Form** and pick the **Enter Form Type**, for example Sales Invoice.
2. On the **Form** tab, the Form Builder shows the form's layout. Drag fields to move them, click a field to change its **Label**, or tick **Mandatory** or **Hidden** in its properties.
3. To add a field, add it in the layout with **Add field** and set its **Label** and **Type**. Use **Add section**, **Add column** and **Add tab** to group fields.
4. On the **Details** tab you can set, for example, the **Default Print Format**.
5. Click **Update**.
6. To undo everything, click **Reset To Defaults** and confirm.

!fig Customize Form for Sales Invoice on the Form tab, with the layout in sections and columns and the properties of Posting Date on the right @shot 09-administration/09-customize-form.png

## Useful field properties

| Property | Example |
| --- | --- |
| **Label** | Rename a label to match your company's wording |
| **Mandatory** | Make Customer Group required |
| **Hidden** | Hide fields you never use |
| **Read Only** | Prevent manual edits |
| **Default** | A default value |
| **In List View** | Show the field as a list column |
| **In Standard Filter** | Show it in the list filter bar |
| **Bold**, **No Copy** | Formatting, and not copying the value to a duplicate |

## Custom fields

A field you add in Customize Form is a **Custom Field**. You can also see and edit them in **Administration** > **Build** > **Custom Field**.

| Document | Field idea |
| --- | --- |
| Customer / Supplier | Trade licence number and expiry |
| Delivery Note | Driver, vehicle plate, receiver signature |
| Employee | Labour card number |
| Project | Plot number, Makani number |

:::tip Choose labels carefully
The field's internal name is made from the label when you create it. Renaming the label later does not change that name, so pick a clear label first.
:::

Deleting a custom field deletes the data in it, so export it first if you need it.

## Common problems

- **Users can no longer save a form.** You made a field mandatory that they cannot fill. Untick **Mandatory** or give it a default.

## Related pages

- [Workflows](/administration/workflows)
- [Letter head and print formats](/administration/letter-head-print-formats)

@@ custom-fields | Custom fields
@summary Custom fields are added in Customize Form; this page points you there.

Custom fields are added and changed in **Customize Form**. See [Customize Form and custom fields](/administration/customize-form).

@@ naming-series | Naming series and document numbers
@summary Control how invoices, orders and records are numbered: series patterns, prefixes by branch or year, starting numbers, and sequential tax invoice numbers.

## How numbering works

Most transactions use a **naming series**: a prefix and a counter. For example `SINV-.YYYY.-.#####` gives SINV-2026-00001, SINV-2026-00002 and so on.

| Placeholder | Becomes |
| --- | --- |
| `.YYYY.` / `.YY.` | Year, 2026 / 26 |
| `.MM.` / `.DD.` | Month / day |
| `.#####` | Counter with five digits |

## Setting up series

1. Search for **Document Naming Settings**.
2. Choose the transaction type, for example Sales Invoice.
3. Enter one series per line, for example `SINV-DXB-.YYYY.-.#####` and `SINV-AUH-.YYYY.-.#####`.
4. Save. Users then choose the series on each new document; the first is the default.

!fig Document naming settings with two sales invoice series for Dubai and Abu Dhabi

In the same screen you can set the current value of a series, for example to continue from 4,812 after moving from another system.

:::uae Sequential tax invoice numbers
UAE VAT requires a sequential number that identifies each tax invoice. Use a separate series per entity, never reuse numbers, and do not reset counters mid-year. Give sales returns their own series.
:::

## Related pages

- [System Settings](/administration/system-settings)
- [E-invoicing](/vat-compliance/e-invoicing)

@@ workflows | Approval workflows
@summary Add approval steps to a document with the Workflow Builder: states, transitions, the roles allowed to act, and email alerts to approvers.

With a workflow, documents go through approval steps, for example a purchase order that a manager must approve. The document then shows its state and the actions the user's role may take, instead of the usual **Submit** button.

**Where to find it:** **Administration** > **Build** > **Workflow**, and the **Workflow Builder**.

## Before you start

- You need the **System Manager** role.
- Decide the steps and who approves each one.

## Build a workflow

1. Open the **Workflow Builder**. The dialog **Create or Edit Workflow** opens.
2. Choose **Create New**, pick the **Select Document Type** and enter the **New Workflow Name**. Or choose **Edit Existing** and pick the workflow.
3. Drag a state from **Drag to add state** onto the canvas for each step, for example Draft, Pending Approval, Approved, Rejected.
4. Drag from one state to another to add a transition. Click it to set the **Action** (for example Approve) and the role allowed to do it.
5. In **Workflow Details** on the left, tick **Is Active**. Tick **Send Email Alert** so the next approvers get an email, and **Enable Action Confirmation** if users must confirm each action.
6. Click **Save**. The message "Workflow updated successfully" confirms it.

!fig The Workflow Builder for Purchase Order, with Draft, Pending Approval, Approved and Rejected states and Purchase Manager on the Review, Approve and Reject transitions @shot 09-administration/09-workflow-builder.png

:::note Only one active workflow
Ticking **Is Active** makes all other workflows for that document type inactive.
:::

## Approving

Approvers see pending documents in their notifications and act from the document's actions. Each action is recorded on the timeline with the user and time.

## Common workflows

| Document | Typical steps |
| --- | --- |
| Purchase order | Manager, then director above a limit |
| Quotation | Sales manager approval above a discount |
| Material request | Department head |

## Common problems

- **"Workflow must have atleast one state and transition"**: add at least one state and one transition before saving.
- **Pending documents show an old state name.** If you rename or remove a state, update the documents in that state first.

## Related pages

- [Role permissions](/administration/permissions)
- [Customize Form](/administration/customize-form)

@@ report-builder | Report builder and custom reports
@summary Build reports without code from report view, save and share them, add group-by and totals, and send them by email on a schedule.

## Building a report

1. Open a list, for example Sales Invoice, and switch to **Report** view.
2. Pick the columns, including child-table fields such as item code and quantity.
3. Add filters, for example posting date this quarter.
4. Use **Group By** (for example customer) with sum or count.
5. Show totals.
6. Save it under a name, for example "Q1 sales by customer".

!fig Report view with chosen columns, group by customer and totals row

Saved reports can be added to workspaces, exported to Excel or CSV, and printed. A user sees a report only for document types they may read. Saved reports are listed in **Administration** > **Build** > **Report**.

## Auto Email Report

**Administration** > **Automation** > **Auto Email Report** sends a report by email on a schedule.

| Field | Example |
| --- | --- |
| Report | Accounts Receivable |
| Filters | Entity: Al Noor Trading LLC |
| Frequency | Weekly, Monday |
| Format | Excel |
| Recipients | Finance manager |

## Related pages

- [Dashboards](/administration/dashboards)
- [Automation tools](/administration/automation)

@@ workspace-customisation | Customising workspaces
@summary Arrange a module's home page with shortcuts, link cards, charts and number cards, and control which roles see a workspace.

Workspaces are listed in **Administration** > **Build** > **Workspace**.

## Editing a workspace

1. Open the workspace.
2. Click **Edit**.
3. Add blocks: heading, shortcut, card (a group of links), chart, number card.
4. Drag blocks to reorder and resize them.
5. Click **Save**.

!fig A workspace in edit mode with blocks being added and moved

## Public and private workspaces

| Type | Who sees it |
| --- | --- |
| Public | Everyone with access to its content; set **Roles** to limit it |
| Private | Only you |

:::tip Shortcuts with counts
Add a filter to a shortcut, for example sales invoices with status Overdue, and show the count. The tile then shows how many there are.
:::

## Related pages

- [Dashboards](/administration/dashboards)
- [Role profiles and module profiles](/administration/role-profiles)

@@ dashboards | Dashboards, charts and number cards
@summary Create charts and number cards from documents or reports, and group them into dashboards for management.

Dashboards are in **Administration** > **Build** > **Dashboard**.

## Dashboard charts

1. Create a new **Dashboard Chart**.
2. Choose the chart type: count, sum, average, group by, or from a report.
3. Choose the document type and the field, for example the sum of Grand Total on Sales Invoice.
4. Choose the time series, for example monthly over the last year.
5. Add filters and choose the chart style.
6. Save, then add it to a dashboard or workspace.

!fig Management dashboard with monthly sales, receivables and stock value charts

## Number cards

A **Number Card** shows one figure, such as the count of overdue invoices or the sum of outstanding amounts, with an optional comparison to the previous period.

## Permissions

A user sees a chart only if they can read the document type behind it, so the same dashboard is safe to share.

## Related pages

- [Report builder](/administration/report-builder)
- [Workspaces](/administration/workspace-customisation)

@@ automation | Automation tools
@summary Remove repetitive work with assignment rules, milestones, auto repeat, auto email reports, reminders and notifications.

**Where to find it:** **Administration** > **Automation**. **Notification** is under **System**.

## Choosing a tool

| Need | Tool |
| --- | --- |
| Give new records to the right person | **Assignment Rule** |
| Record when a document reaches a stage | **Milestone** |
| Create a recurring invoice or order | **Auto Repeat** |
| Send a report on a schedule | **Auto Email Report** |
| Remind yourself about a document | **Reminder** |
| Email or alert when something happens | **Notification** (in **System**) |

!fig The Automation folder with Assignment Rule, Milestone, Auto Repeat, Auto Email Report and Reminder, and the empty Assignment Rule list @shot 09-administration/01-administration-rail.png

## Auto Repeat

1. Submit the first document, for example a monthly maintenance invoice.
2. From the document's menu, set it to repeat.
3. Set the frequency, the start and end date, and the day of the month.
4. Tick **Notify by Email** and choose recipients and a template.
5. Save. DocFlow creates each copy for you.

Automatic emails from Auto Repeat and notifications do not use the Arabic versions of email templates.

## Assignment rules

| Field | Example |
| --- | --- |
| Document Type | Issue |
| Condition | Priority is High |
| Rule | Round Robin or Load Balancing |
| Users | Support engineers |

## Related pages

- [Notifications](/getting-started/notifications)
- [Report builder](/administration/report-builder)

@@ data-import | Importing data
@summary Load customers, suppliers, items and other records from a spreadsheet, or update many records at once, with Data Import.

When you start with DocFlow, you usually have customers, suppliers, items and opening balances in spreadsheets. Data Import loads them in one go. You can also use it later to update many records at once, for example new prices for 500 items.

**Where to find it:** **Administration** > **Data** > **Data Import**.

## Before you start

- You need the **System Manager** role, or a role that may create the document type you import.
- Make the masters the rows point to first. For example, items need their **Item Group** and **UOM**, and customers need their **Customer Group** and **Territory**.
- Import in a sensible order: entities and accounts, then groups, then customers, suppliers and items, then transactions.
- Make a backup first. See [Backups](/administration/backups).

## Get a template

1. Open **Data Import** and click **Add Data Import**.
2. Pick the **Document Type**, for example Customer.
3. Pick the **Import Type**: **Insert New Records** or **Update Existing Records**.
4. Click **Save**.
5. Click **Download Template**. The **Export Data** dialog opens.
6. Choose the **Export Type**:
   - **Blank Template** (the default for new records): only the column headings;
   - **All Records**, **Filtered Records** or **5 Records**: headings plus existing data, useful for updates or as an example.
7. Choose the **File Type** (Excel or CSV).
8. Tick the columns you want. **Select Mandatory** ticks only the required ones; **Select All** and **Unselect All** do what they say.
9. Click **Export** and save the file.

!fig The Export Data dialog for Customer, with File Type Excel, Export Type Blank Template and the mandatory columns ticked @shot 09-administration/07-download-template.png

## Fill and import the file

1. Fill one row per record in the downloaded file. Keep the headings as they are.
2. Back on the Data Import, attach the file in **Import File**.
3. Check the **Preview**. If a column was not recognised, use **Map Columns** to match it to a field, or choose **Don't Import**.
4. Read any warnings under **Import Warnings** and fix the file if needed.
5. For documents that can be submitted, tick **Submit After Import** if they should be submitted. Tick **Don't Send Emails** to avoid emails to customers during the import.
6. Click **Start Import**.

!fig A Data Import for Customer with the file attached, Don't Send Emails ticked and the preview of customers with their type, group and territory @shot 09-administration/07-import-preview.png

## What happens next

- **Status** becomes **Success**, **Partial Success** or **Error**. A message "Successfully imported …" shows how many rows went in.
- The **Import Log** lists each row. Tick **Show Only Failed Logs** to see only the failed rows.
- If some rows failed, click **Export Errored Rows**, fix them in the file, attach it again and click **Retry**.

## Common problems

- **Some rows failed.** Read the message next to each row in the **Import Log**, then use **Export Errored Rows**, fix and retry.
- **A link value is not found** (for example a customer group). Create the missing master first, or correct the spelling.
- **Dates are wrong.** Use the date format of [System Settings](/administration/system-settings) in the file.

## Related pages

- [Bulk tools](/administration/bulk-tools)
- [Opening balances](/accounting/opening-balances)

@@ bulk-tools | Bulk tools
@summary Change many records at once: bulk edit from a list, Bulk Update, Data Import updates, Data Export, and merging duplicates.

## Bulk edit from a list

1. Filter the list, for example items in one item group.
2. Select the records and choose **Edit** from the actions.
3. Choose the field and the new value.
4. Click **Update**.

!fig Bulk edit dialog setting the default warehouse on selected items

## Other bulk tools

| Tool | Where | Use |
| --- | --- | --- |
| **Bulk Update** | **Administration** > **Data** | Set a field on all records that match a condition |
| **Data Import** (update) | **Administration** > **Data** | Update many fields from a spreadsheet. See [Importing data](/administration/data-import). |
| **Data Export** | **Administration** > **Data** | Export records to Excel or CSV |
| Bulk submit or cancel | The list | Select drafts and submit them from the actions |

## Merging duplicates

Open the duplicate record, rename it to the name of the record you keep, and tick the merge option. All transactions move to the kept record.

:::warning Bulk changes are hard to undo
Export the records before a bulk change, and test on a few first.
:::

## Related pages

- [Importing data](/administration/data-import)
- [Backups](/administration/backups)

@@ backups | Backups
@summary Download the scheduled backups, make a backup now, get the encryption key and set how many backups are kept.

A backup is a copy of your data that you can restore if something goes wrong. DocFlow makes backups on a schedule. The Backups page lists them, lets you download any file, and lets you make a new backup at once, for example before a large import or a year-end close.

**Where to find it:** **Administration** > **Data** > **Backups**.

## Before you start

- You need the **System Manager** role.

## Download a backup

1. Open **Backups**. The page is titled **Download Backups** and lists the backups, newest first, with the date each was taken.
2. Each backup can have up to four files: **Database**, **Public Files**, **Private Files** and **Site Config**. An **encrypted** label shows that a file is encrypted.
3. Click the file you need to download it. Keep it somewhere safe, away from the server.

!fig The Download Backups page with three backups listed, each with Download buttons for Database and Site Config, and the buttons Set Number of Backups, Get Backup Encryption Key, Backup Database and Backup with Files @shot 09-administration/08-backups-page.png

## Make a backup now

1. Click **Backup Database** for the data only, or **Backup with Files** for the data and all attached files.
2. Confirm the message. Large sites can take several minutes.
3. The button shows **Backing up…**. The new backup appears in the list when it is ready.

## Get the encryption key

If your backups are encrypted, you need the key to restore them.

1. Click **Get Backup Encryption Key**.
2. Enter your password in the **Verify Password** dialog and click **Verify**.
3. The key is shown. Store it in a safe place, separate from the backup files.

## Change how many backups are kept

Click **Set Number of Backups**. System Settings open, where you set the number of backups to keep.

## What happens next

- Only the newest backups are kept, as many as **Set Number of Backups** says. Older ones are deleted by themselves. Scheduled backups appear in the same list.
- Restoring a backup is done on the server by your DocFlow provider. Send them the files and the key.

## Common problems

- **"A backup is already being made."**: wait for the current backup to finish.
- **"The backup has been started. It will be listed here when it is ready."**: this is not an error. Come back in a few minutes.
- **"System Manager privileges required."**: ask a System Manager.
- **"No backups yet."**: no backup has been made. Click **Backup Database**.

## Related pages

- [System Settings](/administration/system-settings)
- [Importing data](/administration/data-import)

@@ email-accounts | Email accounts
@summary Connect a mailbox so DocFlow can send welcome emails, invoices and notifications, and receive replies.

DocFlow sends email for you: welcome emails, invoices, quotations, reminders and notifications. It can also receive replies and link them to the right lead, deal or invoice. For this it needs at least one email account.

**Where to find it:** **Administration** > **Email** > **Email Account**.

## Before you start

- You need the **System Manager** role.
- You need the mailbox address and its password or app password, and for other providers the server names. Ask your IT provider.

## Add an email account

1. Open **Administration** > **Email** > **Email Account** and click **Add Email Account**.
2. Enter the **Email Address**, for example accounts@alnoortrading.ae, and pick the **Service** (for example GMail or Outlook.com) if it is listed.
3. Enter the **Password**.
4. Tick **Enable Outgoing** to send from it, and **Default Outgoing** to make it the main sender.
5. Tick **Enable Incoming** if replies should come into DocFlow.
6. Click **Save**. DocFlow tests the connection when you save.

!fig A new email account for accounts@alnoortrading.ae, with Entity Al Noor Trading LLC, Email Account Name Accounts, and Enable Incoming and Enable Outgoing ticked

## The other Email tools

| Tool | Use |
| --- | --- |
| **Communication** | Every email sent and received, linked to its document |
| **Email Domain** | Server settings shared by all mailboxes of one domain |
| **Email Queue** | Outgoing emails and their status; check here when emails do not go out |
| **Email Template** | Reusable texts. See [Email templates](/administration/email-templates). |
| **Unhandled Email** | Incoming emails DocFlow could not link |

## Common problems

- **Emails do not go out.** Check **Email Queue** for the error, and that one account has **Default Outgoing** ticked.

## Related pages

- [Email templates](/administration/email-templates)
- [Users and roles](/administration/users-roles)

@@ email-templates | Email templates and Arabic versions
@summary Write reusable emails with document values, keep an Arabic version of each template, and let DocFlow pick the right language when the email goes out.

Email templates hold the text you send often. DocFlow can keep an Arabic version of each template and picks it by itself when the email goes out in Arabic.

**Where to find it:** **Administration** > **Email** > **Email Template**.

## Write an email template

1. Open **Administration** > **Email** > **Email Template** and click **Add Email Template**.
2. Enter a name, for example "Sales Invoice", the **Subject** and the message (**Response**). You can insert values of the document in double braces, such as the customer name or the invoice total.
3. Click **Save**. A new template's **Language** is the system language, usually English.

## Add an Arabic version of a template

1. Open the English template and duplicate it.
2. Name the copy, for example "Sales Invoice (AR)".
3. Set **Language** to Arabic and **Translation Of** to the English template, "Sales Invoice".
4. Translate the subject and the message. Leave the values in double braces as they are.
5. Click **Save**.

!fig The email template Sales Invoice (AR), with an Arabic subject and message, Language Arabic and Translation Of Sales Invoice @shot 09-administration/05-arabic-template.png

## Use a template in an email

1. On a saved document, open the **…** menu and click **Email**.
2. Pick the **Email Template**. Only the main templates are listed; their language versions are picked for you.
3. Click **Add Template**, or **Clear & Add Template** to replace what you typed.
4. A line under the button says which version was added.
5. Click **Send**.

## How the language is picked

DocFlow picks the language of the email in this order:

1. the default language of the print format;
2. the language of the document, copied from the customer or supplier;
3. English for a document that goes to a customer or supplier;
4. otherwise your own language.

If you tick **Attach Document Print** and choose a **Print Language**, that language counts too. If the template has a version in that language, it is used; the Arabic version also serves Arabic (UAE).

Automatic emails (notifications and Auto Repeat) do not use these language versions.

## Common problems

- **"This template has no … version"**: the template has no version in the email's language, so the main template was used. Add one as above.
- **"Added the … version of this template: …"**: this is not an error. It tells you which version was added.
- **You changed the language after adding the template, and the text did not change.** Click **Clear & Add Template** again.

## Related pages

- [Email accounts](/administration/email-accounts)
- [Calls, emails, meetings and appointments](/crm/communication)

@@ integrations-api | Integrations
@summary Sign in with Google and other providers, connect Google services, and link DocFlow to other systems.

**Where to find it:** **Administration** > **Integrations**.

The Integrations folder holds the Google settings, **Social Login Key** (so users can sign in with Google and similar accounts), and connections to other systems. Most of these are set up by your DocFlow provider; ask them before you change anything here.

!fig The Integrations folder of Administration with the Google settings and Social Login Key

:::warning Least privilege
When another system connects to DocFlow, give its user only the roles it needs. An online shop connector needs items and sales orders, not payroll.
:::

## Related pages

- [Users and roles](/administration/users-roles)
- [Automation tools](/administration/automation)

@@ letter-head-print-formats | Letter head and print formats
@summary Set up the letter head with your logo, address and TRN, adjust print formats in the Print Format Builder, and choose the print settings.

A letter head is the band at the top (and if you like the bottom) of every printed document: your logo, name, address and TRN. A print format decides what the rest of the page shows and where. You set them up once, and every invoice, quotation and payslip prints with them.

**Where to find it:** **Administration** > **Printing** > **Letter Head**, **Print Format**, **Print Heading**, **Print Format Builder** and **Print Settings**.

## Before you start

- You need the **System Manager** role.
- Have your logo as an image file.

## Make a letter head

1. Open **Administration** > **Printing** > **Letter Head** and click **Add Letter Head**.
2. Enter the **Letter Head Name**, for example "Al Noor Trading LLC".
3. In **Letter Head Based On** choose **Image** and upload your logo band in **Image**, or choose **HTML** and write the header in **Header HTML**. Set the **Align**, **Image Height (px)** and **Image Width (px)** if needed.
4. Add a footer the same way with **Footer Based On** if you need one.
5. Tick **Default Letter Head** so it is used unless someone picks another.
6. Click **Save**.

!fig A letter head with Letter Head Based On Image, the logo band uploaded, and Default Letter Head ticked

## Change a print format

1. Open **Print Format Builder**.
2. Under **Select Print Format to Edit**, pick an existing format. Or, under **Start new Format**, pick the document type (for example Sales Invoice), enter the **Name of the new Print Format** and click **Create a New Format**.
3. Drag fields from the **Fields** list onto the page. Use **Add Section**, **Add Column** and **Add page break** to arrange them. Click **Show Preview** to see a real document.
4. Use **Change Letter Head** or **Edit Letter Head** to pick or adjust the letter head in the same screen.
5. Click **Save**.
6. To make it the default for the document type, set **Default Print Format** in [Customize Form](/administration/customize-form), or pick it each time you print.

!fig The Print Format Builder editing the Tax Invoice format of Sales Invoice, with the Fields list on the left and the customer, address and items sections on the page @shot 09-administration/06-print-format-builder.png

## Check the print settings

Open **Print Settings** to choose the paper size, PDF settings and whether prices print with their currency symbol.

## What happens next

- Every print and PDF uses the default letter head unless the user picks another in the print view.
- Emails with **Attach Document Print** use the format and letter head you choose there.

## Common problems

- **The logo is too big or blurred.** Use a wide, short image; resize it before you upload it.
- **A field you added does not print.** Check that it has a value on the document, and that the format you edited is the one chosen in the print view.

## Related pages

- [Printing](/getting-started/printing)
- [Customize Form](/administration/customize-form)

@@ setup-wizard | Setup Wizard
@summary The first-time setup wizard that fills the basic settings of a new system.

**Where to find it:** **Administration** > **Setup Wizard**.

The setup wizard runs when a new system is first opened. It fills most of the values in [System Settings](/administration/system-settings), such as the country, language and time zone, and creates your first entity. After that you change these values in the settings pages, not by running the wizard again.

## Related pages

- [First login and the setup wizard](/getting-started/first-login)
- [System Settings](/administration/system-settings)

@@ system-settings | System Settings and the country
@summary Set the country, language, time zone, date and number formats, password rules and session length for the whole system, and see how the country decides which HR reports appear.

System Settings hold the choices that apply to the whole system: country, language, time zone, date and number formats, password rules and session length. In DocFlow the **Country** also decides which country-specific HR reports people see.

**Where to find it:** **Settings** > **System Settings**.

## Before you start

- You need the **System Manager** role.
- The first-time [setup wizard](/administration/setup-wizard) fills most of these values.

## Steps

1. Open **Settings** > **System Settings**.
2. Check **Country**. For a UAE company it is **United Arab Emirates**.
3. Check **Language**, **Time Zone**, the date, time and number formats, and the currency precision.
4. Review the security options on the **Login** and **Password** tabs: password strength, session expiry and two-factor login, as your company requires.
5. Click **Save**.

!fig System Settings on the Details tab, with Country United Arab Emirates, Time Zone Asia/Dubai, Language English, Currency AED and the date and number formats @shot 09-administration/02-system-settings.png

## What happens next

The HR reports follow the **Country** as soon as you save:

| Country | HR reports shown |
| --- | --- |
| **United Arab Emirates** | WPS Salary Register, Pension Contributions, Emiratisation Summary, Gratuity Provision Check, Leave Salary Provision Check |
| **India** | Income Tax Computation, Income Tax Deductions, Provident Fund Deductions, Professional Tax Deductions, Salary Payments via ECS |
| Any other country | Neither set |

The other HR reports are shown for every country. See [Payroll and HR reports](/human-resources/payroll-reports).

The **Language** here is the default for users who have not picked their own. Each user can switch between English and Arabic.

The **Backups** tab holds the number of backups to keep. See [Backups](/administration/backups).

## Common problems

- **The UAE HR reports are missing.** **Country** is not United Arab Emirates. Set it and save.
- **Dates show in the wrong format.** Change **Date Format** here, or the user's own setting on their User record.

## Related pages

- [Settings at a glance](/settings/overview)
- [Backups](/administration/backups)

@@ translations | Arabic labels and translations
@summary Use DocFlow in Arabic, adjust the Arabic wording of labels, and print documents in Arabic.

## User language

Each user chooses English or Arabic. In Arabic the whole interface switches to right-to-left, including menus, forms and reports. The default for new users is the **Language** in [System Settings](/administration/system-settings).

## Correcting a translation

1. Search for **Translation** and create a new one.
2. Choose the language Arabic.
3. Enter the **Source Text** exactly as it appears in English, for example "Delivery Note".
4. Enter the **Translated Text**, for example "إذن تسليم".
5. Save and reload.

!fig Translation record changing the Arabic label for Delivery Note

## Printing in Arabic

Choose the print **Language** in the print view, or use a bilingual format that shows both languages.

:::uae Arabic on tax invoices
UAE rules allow tax invoices in English, but the FTA can request an Arabic translation. Bilingual formats save time when that happens.
:::

## Related pages

- [Email templates and Arabic versions](/administration/email-templates)
- [Letter head and print formats](/administration/letter-head-print-formats)

@@ help-menu | The Help menu and About
@summary What the Help menu shows every user, and how to add your own help links.

The **Help** entry of the user menu gives every user the same few items: **About**, **Keyboard Shortcuts**, any help links your administrator adds, and **DocFlow Support**.

**Where to find it:** inside any module, click the module name at the top of the sidebar, then **Help**.

## What the Help menu shows

- **About** opens a small window with the DocFlow logo and name.
- **Keyboard Shortcuts** lists the shortcuts of the page you are on.
- Your own help links, if you added any (see below).
- **DocFlow Support** opens a new email to info@docflow.ae.

A **Documentation** item appears at the top of the menu once a link to the online manual is set up.

!fig The menu at the top of the sidebar open on Help, showing About, Keyboard Shortcuts and DocFlow Support @shot 09-administration/10-help-menu.png

## Add your own help link

1. Open **Navbar Settings** from the search bar (Ctrl+K).
2. In the **Help Dropdown** table, add a row with the **Item Label** and the **Route** (a web address or a DocFlow page).
3. Click **Save**, then choose **Reload** in the user menu.

## Related pages

- [Finding your way around](/getting-started/navigating)

@@ website-overview | Website and portal
@summary The Website folder of Administration: website settings, theme and scripts, and where to find web pages, web forms and the portal.

**Where to find it:** **Administration** > **Website**.

The Website folder holds the website home page, **Web Page**, **Web Form**, the website settings, **Portal Settings**, **Website Script** and **Website Theme**. The website is connected to your data: a web form can create a lead, and a customer can sign in to see their own orders and invoices.

!fig The Website folder of Administration with Web Page, Web Form, Portal Settings, Website Script and Website Theme

## What you can build

| Feature | Use |
| --- | --- |
| [Web pages](/administration/web-pages) | Home, about, services, contact |
| [Web forms](/administration/web-forms) | Enquiry, quote request, feedback |
| [Portal](/administration/portal) | Customers see their orders and invoices; suppliers see requests for quotation |

## Website settings, theme and script

| Tool | Use |
| --- | --- |
| Website settings | The home page, top bar and footer menus, logo and favicon, and whether visitors may sign up |
| **Website Theme** | Brand colours and fonts |
| **Website Script** | Small scripts added to every page, for example visitor analytics |

Choose a font that includes Arabic letters, so both languages look the same.

## Related pages

- [Web pages](/administration/web-pages)
- [Portal](/administration/portal)

@@ web-pages | Web pages
@summary Create website pages, set their address and menu entry, and publish them.

## Creating a page

1. Open **Administration** > **Website** > **Web Page** and add a new one.
2. Enter the **Title** and the **Route**, for example `about-us`.
3. Write the content.
4. Tick **Published**.
5. Save and open the page on the website to check it.

!fig Web page for About Us with title, route and content

## Menus

Add the page to the top bar or footer in the website settings.

## Common pages for a UAE company

| Page | Content |
| --- | --- |
| Home | What you do, key sectors, call to action |
| About | Story, licences, certifications, locations |
| Contact | Web form, map, phone, office hours |
| Legal | Privacy policy, terms |

Each page also has a meta title and description for search engines and social sharing.

## Related pages

- [Website and portal](/administration/website-overview)
- [Web forms](/administration/web-forms)

@@ web-forms | Web forms
@summary Build forms on your website that create records in DocFlow, such as enquiries, quote requests and feedback.

## Creating a web form

1. Open **Administration** > **Website** > **Web Form** and add a new one.
2. Choose the **Document Type** the form creates, for example Lead or Issue.
3. Enter the **Title** and **Route**, for example `request-a-quote`.
4. Add **Fields** from the document type, with labels and mandatory flags.
5. Choose whether visitors must sign in.
6. Set the **Success Message**.
7. Tick **Published** and save.

!fig Web form for quote requests with fields from the Lead document type

## Useful web forms

| Form | Creates |
| --- | --- |
| Contact us | Lead |
| Request a quote | Lead |
| Report a problem | Issue |

:::uae Personal data on forms
Collect only what you need, explain how you use it, and link your privacy policy on each form, in line with UAE data protection law.
:::

## Related pages

- [Leads](/crm/leads)
- [Issues](/support/issues)

@@ portal | Customer and supplier portal
@summary Give customers and suppliers secure self-service: customers see quotations, orders and invoices; suppliers answer requests for quotation and see their orders.

## Who uses the portal

| User | Sees |
| --- | --- |
| Customers | Quotations, sales orders, invoices, delivery notes, issues, addresses |
| Suppliers | Requests for quotation, purchase orders |

!fig Customer portal showing orders, invoices and issues

## Giving access

1. Open the contact of the customer or supplier.
2. Invite them as a user. DocFlow creates a website user linked to that party and emails a sign-in link.
3. The user sees only documents for their own customer or supplier.

## Portal settings

In **Administration** > **Website** > **Portal Settings** choose which menu items appear and for which roles.

## Supplier quotations

Suppliers sign in to answer [requests for quotation](/buying/rfq-supplier-quotation) with rates and lead times, which creates supplier quotations for comparison.

Employees use the separate [Employee App](/human-resources/self-service), not this portal.

## Related pages

- [Web forms](/administration/web-forms)
- [Users and roles](/administration/users-roles)
