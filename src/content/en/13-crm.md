@@ overview | CRM at a glance
@summary Track the people who may buy from you, from the first enquiry through deals on the Pipeline board to the quotation and sales order.

CRM (customer relationship management) is where you keep track of people who may buy from you, before they become customers. Open it from the **CRM** tile on the home screen ("Leads, Opportunities, Customers"), in the **Apps** group.

DocFlow CRM has its own screens for daily work:

- The **CRM Dashboard** shows how sales are going over the last 30 days.
- The **Pipeline** board shows open deals by sales stage. You drag deals from stage to stage.
- The **Lead** split view lets you go through leads quickly, without opening each form.

Behind these screens are the forms Lead, Prospect, Opportunity, Contract, Campaign and Appointment. CRM also holds the sales masters: **Territory**, **Customer Group**, **Sales Person**, **Campaign** and **UTM Source**, and the **Sales Analytics** and **Sales Funnel** reports.

!fig The CRM Dashboard with number cards and charts, and the CRM sidebar with Home, Pipeline, Lead, Opportunity, Customer, Reports, Sales Pipeline, Campaign, Setup and Settings @shot 08-crm/02-crm-dashboard.png

## Who this module is for

| Who | What they do here |
| --- | --- |
| Sales people | Work leads and deals every day |
| Sales managers | Watch the pipeline, run the reports, look after the sales masters |
| Administrators | Set up CRM Settings, lists and appointment booking |

## How a sale moves

| Step | Record | What you do |
| --- | --- | --- |
| Interest | [Lead](/crm/leads) | Record the person or organisation that showed interest |
| Account | [Prospect](/crm/prospects) | Group the leads of one organisation you are courting |
| Deal | [Opportunity](/crm/opportunities) | A possible sale with an amount, a stage and a probability, shown as a deal on the [Pipeline](/crm/pipeline) |
| Offer | [Quotation](/crm/quotation-to-order) | Send the items, prices and terms you offer |
| Order | [Sales order](/selling/sales-order) | The customer accepts; Selling takes over delivery, invoice and payment |
| Lost | Lost reasons | Record why you lost the deal or the quotation |

## Pages in this module

1. [CRM setup and settings](/crm/crm-settings)
2. [The CRM Dashboard](/crm/crm-dashboard)
3. [Leads](/crm/leads)
4. [Prospects](/crm/prospects)
5. [The Pipeline board](/crm/pipeline)
6. [Opportunities (deals)](/crm/opportunities)
7. [From quotation to sales order](/crm/quotation-to-order)
8. [Activities, notes and email](/crm/communication)
9. [Contracts](/crm/contracts)
10. [Campaigns and email campaigns](/crm/campaigns)
11. [Appointments](/crm/appointments)
12. [CRM reports](/crm/crm-reports)
13. [Territories and customer groups](/crm/territories-groups)
14. [Sales persons](/crm/sales-persons)

@@ crm-settings | CRM setup and settings
@summary Check CRM Settings and fill the lists the sales forms pick from, such as sales stages, lead sources, territories and lost reasons.

Before your team starts, an administrator or sales manager checks a few settings and fills the lists that the sales forms pick from. This takes a few minutes and makes the Pipeline board and the reports useful from day one.

**Where to find it:** **CRM** > **Settings** > **CRM Settings**, or **Settings** > **CRM Settings**.

## Before you start

- You need the **Sales Manager**, **Sales Master Manager** or **System Manager** role to change CRM Settings.
- Set up an email account if you want to send and receive mail from leads and deals. See [Notifications, emails and alerts](/getting-started/notifications).

## Review CRM Settings

1. Open **CRM** > **Settings** > **CRM Settings**.
2. Check the options. The defaults are shown in brackets.
3. Click **Save**.

| Section | Setting | What it does |
| --- | --- | --- |
| Lead | **Campaign Naming By** | Name campaigns by their **Campaign Name** or by a numbered series |
| Lead | **Allow Lead Duplication based on Emails** (off) | When off, two leads cannot share one email address |
| Lead | **Auto Creation of Contact** (on) | DocFlow makes a Contact for a lead when you convert it |
| Opportunity | **Close Replied Opportunity After Days** (15) | A deal that stays in status Replied this many days is closed by itself |
| Opportunity | **Enable Opportunity Creation from Contact Us** (off) | A message sent through the website Contact Us form becomes an opportunity |
| Quotation | **Default Quotation Validity Days** | How long a new quotation stays valid |
| Activity | **Carry Forward Communication and Comments** (off) | Emails and comments are copied from the lead to the opportunity and quotation made from it |
| Activity | **Update timestamp on new communication** (off) | Updates the modified time of a lead or opportunity when a new email arrives |

!fig CRM Settings with the Lead, Opportunity, Quotation and Activity sections @shot 08-crm/01-crm-settings.png

## Fill the CRM lists

Open each list from the **CRM** sidebar and add the entries your team uses:

1. **Setup** > **Sales Stage**: one record per step of your sales process, for example Prospecting, Qualification, Needs Analysis, Proposal/Price Quote, Negotiation/Review. Each stage becomes a column on the Pipeline board.
2. **Setup** > **Lead Source**: where leads come from, for example Website, Exhibition, Referral, Cold Calling.
3. **Setup** > **Territory** and **Customer Group**: used to split leads, deals and reports. See [Territories and customer groups](/crm/territories-groups).
4. **Setup** > **Sales Person**: the people who own deals in reports. See [Sales persons](/crm/sales-persons).
5. **Opportunity Type**, **Opportunity Lost Reason**, **Competitor** and **Market Segment**: open them from the search bar (Ctrl+K).

!fig The Sales Stage list with eight stages, and the Setup group of the CRM sidebar open @shot 08-crm/01-sales-stages.png

## Onboarding checklist (optional)

The CRM workspace has a checklist, **Let's set up your CRM**. Its steps are Create Customer, Set up Email Account, Create Lead, Create Opportunity, Create Quotation and Review CRM Settings. Each step opens the right form.

## What happens next

- Sales stages appear as columns on the [Pipeline](/crm/pipeline).
- Every day DocFlow closes deals that have been in status Replied longer than **Close Replied Opportunity After Days**. If the field is 0, it uses 15 days.

## Common problems

| Message or problem | What to do |
| --- | --- |
| "Please enable the Contact Us form before enabling Opportunity creation from it." | Switch on the website Contact Us form first, then tick **Enable Opportunity Creation from Contact Us** |
| "Email Address must be unique, it is already used in …" when you save a lead | Another lead has that email. Open that lead, or tick **Allow Lead Duplication based on Emails** |

## Related pages

- [The Pipeline board](/crm/pipeline)
- [Appointments](/crm/appointments)

@@ crm-dashboard | The CRM Dashboard
@summary The first screen of CRM: new and open leads, open deals, pipeline value, wins, losses and win rate for the last 30 days.

The CRM Dashboard is the first screen of CRM. It shows, for the last 30 days, how many leads came in, how many deals are open, what the pipeline is worth and how many deals you won or lost. Use it each morning to see where to act.

**Where to find it:** **CRM** > **Home**. Shortcut: press **g** then **h**.

## Before you start

- You need the **Sales User** or **Sales Manager** role.
- The numbers come from your leads and opportunities, so the screen is empty on a new site.

## Read the dashboard

1. Open **CRM** > **Home**. The title is **CRM Dashboard** with the subtitle **Last 30 days**.
2. To see one person's figures, pick a user in the **Sales owner** filter. Clear it to see everyone.
3. Read the number cards:

| Card | What it counts |
| --- | --- |
| **New leads** | Leads created in the last 30 days |
| **Open leads** | Leads in status Lead, Open, Replied or Interested |
| **Open deals** | Opportunities in status Open, Quotation or Replied |
| **Pipeline** | The total amount of the open deals |
| **Weighted pipeline** | Each open deal's amount times its probability, added up. A better guess of what you will really win |
| **Won** and **Lost** | Deals converted or lost in the last 30 days |
| **Win rate** | Won divided by won plus lost. Shows "-" when there are none yet |

4. Click a card (all but **Win rate**) to open the matching leads or the Pipeline board.
5. Read the charts: **Open pipeline by stage**, **Leads by status**, **New leads by month** (six months), **Leads by source** and **Won amount by territory**.
6. To add a lead straight away, click **+ New lead**.

!fig The CRM Dashboard with eight number cards, the Open pipeline by stage and Leads by status charts @shot 08-crm/02-crm-dashboard.png

## What happens next

Clicking a card or a chart opens the list behind the number, already filtered. From there you work the leads or deals.

## Common problems

- **A chart shows "No data yet".** There are no records for that chart in the period. Add leads or deals, or clear the **Sales owner** filter.
- **Win rate shows "-".** No deal was won or lost in the last 30 days.

## Related pages

- [Leads](/crm/leads)
- [The Pipeline board](/crm/pipeline)
- [CRM reports](/crm/crm-reports)

@@ leads | Leads
@summary Record people and organisations that showed interest, work through them in the split view, and move them on to a prospect, deal, quotation or customer.

A lead is a person or organisation that has shown interest in buying from you: someone who filled in a form, called, or left a card at an exhibition. You record each lead, follow it up, and either turn it into a deal or mark it as lost. The split view shows the list of leads on the left and the chosen lead on the right, so you can work through many leads without opening each form.

**Where to find it:** **CRM** > **Lead**, then the **Split** view. Shortcut: press **g** then **l**.

## Before you start

- You need the **Sales User** or **Sales Manager** role.
- Fill the **Lead Source** and **Territory** lists first. See [CRM setup and settings](/crm/crm-settings).

## Add a lead

1. Open the leads split view and click **+ New lead** (or press **n**).
2. In the **New Lead** dialog enter **First Name** (required), **Last Name**, **Organisation**, **Email** and **Mobile No**.
3. Pick the **Source** and **Territory**.
4. Click **Create**. A message "Lead … created" appears, with **Open it** to go to the record.

!fig The New Lead dialog with First Name, Last Name, Organisation, Email, Mobile No, Source and Territory @shot 08-crm/03-new-lead.png

## Work through your leads

1. In the split view, the title shows **Lead** and the number of leads.
2. Type in the search box (**Search name, organisation, email, phone**), or press **/** to jump to it.
3. Narrow the list with the **Owner**, **Territory** and **Source** filters, or click a status button (**All** and one per status that has leads). The list shows 30 leads at a time; use **Previous** and **Next**.
4. Click a lead. Its details open on the right. Press **j** and **k** to move to the next or previous lead.
5. On the right, change the **Status** from the dropdown. A message "Status: …" confirms it.
6. Use the tabs **Timeline**, **Emails**, **Notes** and **Tasks** to see what happened and to add a note or task. See [Activities, notes and email](/crm/communication).
7. Check **Owner**, **Email**, **Mobile**, **Source** and **Territory** in the **Details** panel. To edit other fields, click **Open form**.

!fig The leads split view with status buttons, a lead open on the right, its Timeline tab and the Details panel @shot 08-crm/03-leads-split.png

## Move a lead forward

From the right panel (or the lead form) choose what comes next:

1. **Create Opportunity**: makes a deal for this lead. A dialog may ask:
   - **Create Prospect** with a **Prospect Name** (only when the lead is in no prospect yet);
   - **Create Contact** (only when the lead has no contact yet).
   Click **Create**. The new opportunity opens.
2. **Create Prospect**: makes a prospect for the lead's organisation and adds the lead to it.
3. **Add to Prospect**: adds the lead to an existing prospect. Pick it in the **Add Lead to Prospect** dialog and click **Add**.
4. On the lead form, **Create** also offers **Customer** and **Quotation**.

The prospect buttons are hidden when the lead is already in a prospect. All these buttons are hidden for a lead that already belongs to a customer.

!fig The Create Opportunity dialog with Create Prospect ticked and the Prospect Name filled in @shot 08-crm/03-create-opportunity-dialog.png

## Lead statuses

| Status | Meaning |
| --- | --- |
| Lead | New, not yet worked |
| Open | Being worked on |
| Replied | They answered |
| Interested | Positive but not ready |
| Opportunity | A deal has been made from it (set by DocFlow) |
| Quotation | A quotation has been made (set by DocFlow) |
| Lost Quotation | That quotation was lost (set by DocFlow) |
| Converted | A customer exists for it (set by DocFlow) |
| Do Not Contact | The person asked not to be contacted |

## What happens next

- If a lead has an open calendar event that starts today, DocFlow moves its status back to **Open** that morning, so it shows up for follow-up. This does not happen for Converted or Do Not Contact leads.
- The **Qualification Status** field on the form (Unqualified, In Process, Qualified) records how far you have checked the lead.
- You can also make a lead from an email you received: open the communication and create a lead from it.

:::uae Consent and marketing
Under UAE data protection rules and the TDRA rules on marketing messages, get consent before sending promotional SMS or emails, and honour opt-outs. Set **Do Not Contact** when a lead asks.
:::

## Common problems

| Message | What to do |
| --- | --- |
| "A Lead requires either a person's name or an organization's name" | Enter a first name or an organisation |
| "The Lead Owner must be a different person than the Lead's own email address" | Pick another owner or fix the email |
| "Email Address must be unique, it is already used in …" | A lead with this email exists. Open it instead |
| "Prospect … already exists" | Use **Add to Prospect** |
| "A Lead needs the sender's email address, phone number or name on the Communication" | The email has no sender details |
| **Select a lead** shows on the right | No lead is chosen yet. Click one in the list |

## Related pages

- [Prospects](/crm/prospects)
- [Opportunities (deals)](/crm/opportunities)

@@ prospects | Prospects
@summary Group the leads of one organisation into a prospect, keep its deals, contacts and activities together, and convert it into a customer.

A prospect is an organisation you are trying to win as a customer. Several leads can belong to it, for example the purchasing manager and the finance manager of the same company. The prospect keeps them together, with their opportunities, notes and activities, so the whole team sees one picture of the account.

**Where to find it:** **CRM** > **Setup** > **Prospect**.

## Before you start

- To create a prospect you need the **Sales Manager** or **System Manager** role. **Sales User** can only read prospects.
- A prospect is usually made from a lead. See [Leads](/crm/leads).

## Create and work a prospect

1. Open a lead and click **Create Prospect**, or open **Prospect** and click **Add Prospect**.
2. Enter the **Company Name**, for example Gulf Star Hospitality LLC. The prospect is named after it.
3. On the **Overview** tab fill **Customer Group**, **Industry**, **Market Segment**, **Territory**, **Prospect Owner** and the other details you know.
4. Click **Save**.
5. Use the tabs to work the account:
   - **Address & Contact**: add addresses and contacts with **New Address** and **New Contact**.
   - **Leads**: the leads that belong to this organisation. Add more from each lead with **Add to Prospect**.
   - **Opportunities**: the deals made for this prospect.
   - **Activities** and **Comments**: tasks, events, notes and comments.
6. When the organisation buys, click **Create** > **Customer**. To start a deal, click **Create** > **Opportunity**.

!fig A prospect with its Leads tab open, showing one lead with name, email, mobile, owner and status @shot 08-crm/04-prospect-form.png

## When to use a prospect

| Situation | Use |
| --- | --- |
| One-off enquiry from one person | A lead is enough |
| Several contacts at a large organisation | Prospect |
| Group with several sites (a hotel group) | Prospect with a lead for each site |

## What happens next

- When you add a lead to a prospect, its open calendar events also show on the prospect. If **Carry Forward Communication and Comments** is on in CRM Settings, its emails and comments are carried over too.
- A prospect made from a lead takes over the lead's notes.
- A lead that is in a prospect no longer shows the **Create Prospect** and **Add to Prospect** buttons.

## Common problems

- **"Company Name is required"**: enter the organisation's name.
- **"Prospect … already exists"**: open it and add the lead to it instead.
- **You cannot save a new prospect.** Your role is Sales User, which can only read prospects. Ask a sales manager.

## Related pages

- [Leads](/crm/leads)
- [Opportunities (deals)](/crm/opportunities)
- [CRM reports](/crm/crm-reports)

@@ pipeline | The Pipeline board
@summary See every deal as a card in its sales stage column, with total and weighted values, add deals and drag them from stage to stage.

On the Pipeline board each opportunity is called a deal and sits in the column of its sales stage. You drag deals from stage to stage as the sale moves on, and you see at a glance what the pipeline is worth.

**Where to find it:** **CRM** > **Pipeline**. Shortcut: press **g** then **p**.

## Before you start

- You need the **Sales User** or **Sales Manager** role.
- Set up your **Sales Stage** list. Each stage is a column. See [CRM setup and settings](/crm/crm-settings).

## Read the board

1. Open **CRM** > **Pipeline**. Under the title you see the number of deals, their total **Value** and the **Weighted** value.
2. Choose which deals to show with the status switch: **Open**, **Won**, **Lost** or **All**. **Lost** also shows deals you closed with **Close**.
3. Narrow the board with the **Owner**, **Territory** and **Source** filters.
4. Each column shows its number of deals, its amount and, after ≈, the weighted amount. Deals without a stage are in **No stage**.
5. Each card shows the title, the customer or lead, the amount, the probability, the expected closing date (red when it has passed), the status and the owner.

!fig The Pipeline board with deal count, value and weighted value, the Open/Won/Lost/All switch and stage columns with deal cards @shot 08-crm/05-pipeline-board.png

## Add a deal

1. Click **+ New deal** (or press **n**), or the **+** at the top of a column to start the deal in that stage.
2. In the **New Deal** dialog choose **Opportunity From** (Lead by default, or Customer or Prospect) and the **Party**.
3. Enter **Amount**, **Sales Stage**, **Expected Closing** and **Probability**.
4. Click **Create**.

## Move a deal to another stage

1. Drag the card to another column.
2. A message "Moved to …" confirms the new stage.

Click a deal's title to open the deal page. See [Opportunities (deals)](/crm/opportunities).

:::tip Weekly pipeline review
Weighted pipeline = the sum of each deal's amount times its probability. Once a week, filter by **Owner**, check that every deal has a next task, update stage, probability and expected closing, and close or lose deals that have stalled.
:::

## Common problems

| Message | What to do |
| --- | --- |
| "No deals match" | No deal fits the status and filters. Choose **All** or clear the filters |
| "+ … more (narrow the filters)" at the foot of a column | A column shows 40 cards at most. Use the filters to see the rest |
| "(first 5,000 deals)" next to the totals | The board loads at most 5,000 deals. Narrow the filters to see exact totals |

## Related pages

- [Opportunities (deals)](/crm/opportunities)
- [CRM reports](/crm/crm-reports)

@@ opportunities | Opportunities (deals)
@summary Work a deal on its own page: change stage, amount and probability, add items, make a quotation, and close or declare the deal lost.

An opportunity is a possible sale: a customer, prospect or lead, an amount, a chance of winning (probability) and an expected closing date. On the Pipeline board it is called a deal.

**Where to find it:** click a deal's title on the [Pipeline](/crm/pipeline), or **CRM** > **Opportunity** for the list and full form.

## Before you start

- You need the **Sales User** or **Sales Manager** role.
- You can make a deal from a lead (**Create Opportunity**), from a prospect (**Create** > **Opportunity**) or with **+ New deal** on the Pipeline.

## Work a deal

1. Click a deal's title on the Pipeline. The deal page opens, with **Pipeline** in the breadcrumb to go back.
2. Click a stage in the stage path at the top to move the deal. A message "Stage: …" confirms it.
3. Click **Amount** or **Probability %** in the summary row to change it in place. **Weighted** is worked out for you. **Expected closing** and **Owner** are shown next to it.
4. Use the tabs:
   - **Activity**, **Notes**, **Tasks** and **Emails**: see [Activities, notes and email](/crm/communication).
   - **Items**: the products of the deal. Add them in the full form.
   - **Quotations**: the quotations made for the deal.
5. The **Details** panel shows **Opportunity From**, **Opportunity Type**, **Territory**, **Source**, **Contact**, **Opened** and the ID. The **Related** panel counts quotations, tasks, emails and items.
6. To edit all fields, click **Open form**. To quote the customer, click **Create Quotation**. See [From quotation to sales order](/crm/quotation-to-order).

!fig A deal page with the stage path, the summary row with amount, probability, weighted value, expected closing and owner, and the Activity tab @shot 08-crm/05-deal-page.png

## Close or lose a deal

1. Click **Open form**.
2. To stop working on a deal for now, click **Close**. Click **Reopen** to bring it back.
3. To record that you lost the deal, set **Status** to **Lost**. The **Set as Lost** dialog opens.
4. Pick one or more **Lost Reasons** (required), add the **Competitors** who won and a **Detailed Reason**.
5. Click **Declare Lost**.

!fig The Set as Lost dialog with a lost reason, a competitor and a detailed reason @shot 08-crm/05-set-as-lost.png

## What happens next

- When you make a quotation from the deal, its status becomes **Quotation**. When the quotation is ordered, the deal becomes **Converted** and counts as **Won**.
- A deal that stays in status **Replied** longer than **Close Replied Opportunity After Days** (15 by default) is closed by itself.
- A deal with an open calendar event that starts today goes back to **Open** that morning, unless it is Converted, Lost or Closed.
- From the form you can also make a **Supplier Quotation** or **Request For Quotation** to price the deal, and a **Customer** when the party is still a lead or prospect. When the deal is in another currency, **Fetch Latest Exchange Rate** updates the rate.

:::example Example
A furniture trader in Dubai meets an interior design firm at an exhibition. The salesperson creates a deal for AED 27,800 at 30% probability in the Needs Analysis stage. After a site visit she drags it to Proposal/Price Quote and clicks **Create Quotation**.
:::

## Common problems

- **"Row …: the quantity of Item … must be more than zero"**: fix the quantity on the **Items** tab.
- **"Cancel the submitted Quotation of this Opportunity before declaring it lost"**: cancel the quotation first, then set the deal to Lost.

## Related pages

- [The Pipeline board](/crm/pipeline)
- [From quotation to sales order](/crm/quotation-to-order)

@@ quotation-to-order | From quotation to sales order
@summary Make a quotation from a deal, submit it, and turn it into a sales order when the customer accepts, or set it as lost.

When a deal is ready, you send the customer a quotation: the items, prices and terms you offer. When the customer accepts, you turn the quotation into a sales order. From there Selling takes over: delivery, invoice and payment.

**Where to find it:** the **Create Quotation** button on a deal page, or **Selling** > **Quotation**.

## Before you start

- You need the **Sales User** role.
- The deal's party should be a customer, or a lead or prospect you will convert. The items must exist.
- **Default Quotation Validity Days** in CRM Settings sets how long the quotation is valid. See [CRM setup and settings](/crm/crm-settings).

## Steps

1. Open the deal and click **Create Quotation**. The quotation opens with the party and the deal's items filled in.
2. Check the items, prices, taxes and terms. Click **Save**.
3. Print or email the quotation. See [Activities, notes and email](/crm/communication).
4. Click **Submit** when the offer is final.
5. When the customer accepts, click **Create** > **Sales Order** on the submitted quotation.
6. If the customer turns it down, click **Set as Lost** and give the reason.

!fig A submitted quotation to a lead with UAE VAT 5% taxes and the Create menu open on Sales Order @shot 08-crm/06-quotation-create-sales-order.png

## What happens next

- The deal's status becomes **Quotation**, and the lead's status too.
- When the sales order is made, the deal becomes **Converted** and counts as **Won** on the CRM Dashboard. If the quotation was to a lead, the lead becomes a customer.
- If the quotation is lost, the lead shows **Lost Quotation**.
- The quotation is listed on the deal page under **Quotations**.

## Common problems

- **"No quotations yet"** on the deal page: no quotation has been made from this deal. Click **Create Quotation**.
- To change the items of a submitted quotation, use **Update Items** instead of cancelling it.

## Related pages

- [Quotations](/selling/quotations)
- [Sales orders](/selling/sales-order)
- [Opportunities (deals)](/crm/opportunities)

@@ communication | Activities, notes and email
@summary Keep tasks, events, notes and emails on each lead, prospect and deal, so anyone who picks it up sees what was said and what is due next.

Every lead, prospect and deal keeps its own history: tasks to do, meetings and calls in the calendar, notes, and the emails you sent and received.

**Where to find it:** the **Timeline**, **Emails**, **Notes** and **Tasks** tabs in the leads split view; the **Activity**, **Notes**, **Tasks** and **Emails** tabs on a deal page; the **Activities** and **Notes** (or **Comments**) tabs on the Lead, Prospect and Opportunity forms.

## Before you start

- You need the **Sales User** or **Sales Manager** role.
- To send and receive email from a record, an email account must be set up. See [Notifications, emails and alerts](/getting-started/notifications).

## Add a task or an event

1. Open the record and go to the **Tasks** tab (or **Activities** on the form).
2. Under **Open Tasks** click **New Task**, or under **Open Events** click **New Event**.
3. Fill the dialog:
   - for an event, pick a **Category** (Event, Meeting, Call, Sent/Received Email, Other) and enter a **Summary**;
   - set the **Date**, and for a task the person in **Assigned To**;
   - write the details in the text box. Tick **Public** if everyone should see the event.
4. Click **Create**.
5. When a task is done, tick **Mark As Closed** next to it. It moves to **Completed Tasks**. Events that have passed show under **Past Events**.

!fig The Tasks tab of a lead with one open task and one open event @shot 08-crm/07-tasks-tab.png

## Add a note

1. Go to the **Notes** tab.
2. Click **New Note**. The **Add a Note** dialog opens.
3. Type the note and click **Add**.
4. To change a note, click **Edit**, change the text and click **Done**. To remove it, click **Delete note** and confirm "Are you sure you want to delete this note?".

## Send an email

1. On the form, open the **…** menu and click **Email** (Ctrl+E), or click **New Email** in the activity.
2. Pick the recipients, write the subject and message. To start from a saved text, click **Add Template**. See [Email templates](/administration/email-templates).
3. Click **Send**.
4. To answer a mail, click **Reply** or **Reply All**.

!fig The Emails tab of a deal with one sent and one received email @shot 08-crm/07-emails-tab.png

## What happens next

- Tasks appear in the assigned person's to-do list. Events appear in the calendar.
- Emails sent from the record and replies to them are linked to the record and show in its **Emails** tab and timeline.
- If a lead or deal has an open event that starts today, its status goes back to **Open** that morning.
- When a lead joins a prospect, its open events also appear on the prospect.

:::tip WhatsApp and phone calls
Many UAE buyers prefer WhatsApp. Record important WhatsApp conversations and calls as a note or an event with the **Call** category, so the history is complete.
:::

## Common problems

- **"Write something in the note first."**: the note is empty. Type the text, then save.
- **"No open task"** or **"No open event"**: nothing is planned. Add one with **New Task** or **New Event**.
- **"No emails or calls yet"**: no mail has been sent or received for the record yet.
- **The Email menu item is missing.** Save the record first, and check that your role may send email for this document type.

## Related pages

- [Leads](/crm/leads)
- [Opportunities (deals)](/crm/opportunities)
- [Working together](/getting-started/collaboration)

@@ contracts | Contracts
@summary Record agreements with customers, suppliers and employees, with dates, terms, signature and fulfilment duties; DocFlow keeps the statuses up to date.

A contract records an agreement with a customer, supplier or employee: who it is with, when it starts and ends, its terms, who signed it, and any duties that must be met (fulfilment). DocFlow keeps the contract's status up to date by itself.

**Where to find it:** **CRM** > **Sales Pipeline** > **Contract**.

## Before you start

- You need the **Sales Manager**, **Purchase Manager**, **HR Manager** or **System Manager** role.
- If you use the same wording often, make a **Contract Template** first.

## Make a contract template (optional)

1. Open **Contract Template** from the search bar (Ctrl+K) and click **Add Contract Template**.
2. Enter a **Title**, for example "Annual supply agreement".
3. Write the **Contract Terms and Conditions**. You can insert values from the contract, such as the party name, with template fields in double braces, for example `{{ party_name }}`.
4. Tick **Requires Fulfilment** and list the **Fulfilment Terms** if the contract always carries the same duties.
5. Click **Save**.

## Record a contract

1. Open **Contract** and click **Add Contract**.
2. Choose the **Party Type** (Customer, Supplier or Employee) and the **Party Name**.
3. Enter the **Start Date** and **End Date**.
4. Pick a **Contract Template**, or type the **Contract Terms** yourself. The terms are required.
5. If there are duties to meet, tick **Requires Fulfilment**, set the **Fulfilment Deadline** and add one row per duty in **Fulfilment Terms** (**Requirement**, **Fulfilled**, **Notes**).
6. Under **References**, link the **Document Type** and **Document Name**, for example the Quotation or Sales Order the contract belongs to.
7. When the party has signed, tick **Signed**, then fill **Signee** and **Signed On**.
8. Click **Save**, then **Submit**.
9. Later, tick **Fulfilled** on each duty when it is done, and save.

!fig A submitted, active contract with two fulfilment terms, one of them fulfilled, and Signed By (Entity) filled in @shot 08-crm/08-contract-form.png

## Statuses

| Field | Value | When |
| --- | --- | --- |
| **Status** | Unsigned | **Signed** is not ticked |
| | Active | Between the start and end date |
| | Inactive | Before the start date or after the end date |
| | Cancelled | You cancelled the contract |
| **Fulfilment Status** | N/A | No fulfilment needed |
| | Unfulfilled / Partially Fulfilled | Some or no duties ticked |
| | Fulfilled | Every duty ticked |
| | Lapsed | The deadline has passed and not all duties are done |

Every day DocFlow refreshes both statuses, so a contract turns Inactive or Lapsed on its own. On submit, **Signed By (Entity)** is set to you.

:::tip Renewal reminders
Add a [notification](/getting-started/notifications) that warns the contract owner some days before the **End Date**.
:::

## Common problems

- **"The contract cannot end before it starts."**: fix the dates.
- **"Title is required"** on a template: enter a title.
- **"Syntax error in template at line …: …"**: a template field in the terms is not written correctly. Check the braces on that line.

## Related pages

- [From quotation to sales order](/crm/quotation-to-order)

@@ campaigns | Campaigns and email campaigns
@summary Create campaigns to measure what marketing brings in, send scheduled email series to leads, contacts or email groups, and send SMS.

A campaign is a marketing effort, such as a trade show or a seasonal offer. You link leads and deals to it to measure what it brings in. An email campaign sends a series of emails, on a schedule, to a lead, a contact or a whole email group, for example a welcome mail on day 0 and a follow-up on day 7.

**Where to find it:** **CRM** > **Campaign** > **Campaign**, **Email Campaign**, **SMS Center**, **SMS Log** and **Email Group**.

## Before you start

- To create a campaign you need the **Sales Manager** or **Sales Master Manager** role. Email campaigns can only be made by a **System Manager**.
- Write the emails first as **Email Template** records. See [Email templates](/administration/email-templates).
- An outgoing email account must work.

## Create a campaign

1. Open **Campaign** and click **Add Campaign**.
2. Enter the **Campaign Name**, for example "GITEX 2026 stand".
3. To send mails, add rows to **Campaign Schedules**: an **Email Template** and **Send After (days)** for each mail. Day 0 is the start date.
4. Add a **Description** if you like and click **Save**.
5. Pick the campaign in the **Campaign** field of leads and opportunities that come from it. Click **View Leads** on the campaign to list them.

!fig A campaign with two Campaign Schedules rows and a description, and the View Leads button @shot 08-crm/09-campaign-form.png

## Start an email campaign

1. Open **Email Campaign** and click **Add Email Campaign**.
2. Pick the **Campaign**.
3. Choose **Email Campaign For** (Lead, Contact or Email Group) and the **Recipient**.
4. Pick the **Sender** if it should not be the default.
5. Enter the **Start Date**. DocFlow sets the **End Date** from the longest **Send After (days)**.
6. Click **Save**.

!fig An email campaign for an email group with start and end dates and status Scheduled @shot 08-crm/09-email-campaign.png

## Send text messages (SMS)

**SMS Center** sends one text message to a group: all contacts, customer, supplier or sales partner contacts, open leads, active employees or sales persons. **SMS Log** lists the messages sent. Your SMS provider is set up once in **CRM** > **Settings** > **SMS Settings**.

## Track where leads come from

**UTM Source** (in CRM) lists the sources of website visitors, such as LinkedIn, Google Ads or a newsletter. Leads and deals that come from a tracked link carry the source and campaign, so the reports can show what each channel brings in.

## What happens next

- Every day DocFlow sends the template that is due that day to the recipient. Each mail has an unsubscribe link.
- **Status** shows **Scheduled** before the start date, **In Progress** while mails are going out, **Completed** after the end date and **Unsubscribed** if the recipient unsubscribed.
- Saving a campaign also makes a marketing campaign record of the same name, which you can pick as the source campaign on leads and deals.
- The [Campaign Efficiency report](/crm/crm-reports) shows how many leads, deals, quotations and orders each campaign brought in.

:::uae Marketing rules
Send marketing emails and SMS only to people who agreed to receive them, include a clear unsubscribe option, and identify your company. Promotional SMS in the UAE follow TDRA and telecom operator rules, including sender registration and time windows.
:::

## Common problems

| Message | What to do |
| --- | --- |
| "Start date cannot be before today." | Pick today or a later date |
| "Please set up the email schedule of Campaign …." | Add at least one **Campaign Schedules** row |
| "Lead … has no email address." or "Contact … has no primary email address." | Add the email to the lead or contact |
| "… already has an active campaign … for …." | Wait for it to finish or pick another recipient |

## Related pages

- [Email templates](/administration/email-templates)
- [CRM reports](/crm/crm-reports)

@@ appointments | Appointments
@summary Book meetings and calls with customers and leads, or let visitors book on your website; DocFlow checks slots and holidays and gives each one to a free agent.

An appointment is a meeting or call booked with a customer or a possible customer. Your staff can book it in DocFlow, or visitors can book it themselves on your website. DocFlow checks the time against your opening slots and holidays, gives the appointment to a free agent, puts it in the calendar and links it to the customer or lead.

**Where to find it:** **CRM** > **Sales Pipeline** > **Appointment**. The settings are in **Settings** > **Appointment Booking Settings**. Visitors use the **Book an Appointment** page of your website.

## Before you start

- To change the settings you need the **Sales Manager** or **System Manager** role. **Sales User** and **Employee** can make appointments.
- A **Holiday List** must exist. See [Holiday lists](/organization/holiday-list).
- The agents must be DocFlow users.

## Set up appointment booking

1. Open **Settings** > **Appointment Booking Settings**.
2. Tick **Enable Appointment Scheduling**.
3. Enter the **Appointment Duration (In Minutes)**, for example 30.
4. Add the **Agents** who take appointments and the **Number of Concurrent Appointments** each time slot can hold.
5. Under **Availability Of Slots** add one row per opening time: **Day Of Week**, **From Time**, **To Time**. For example Monday to Friday, 09:00 to 17:00.
6. Set **Number of days appointments can be booked in advance** and pick the **Holiday List**.
7. Tick **Notify Via Email** if the customer and agent should get an email on the day of the appointment.
8. To let visitors book on your website, tick **Enable Appointment Booking Through Portal**. Set the **Verification Link Expiry Duration**, the **Success Redirect URL** (the page shown after booking) and the **Action for Expired Unverified Appointments** (**Mark as Closed** or **Delete Permanently**).
9. Click **Save**.

!fig Appointment Booking Settings with a 30-minute duration, two agents and Monday to Friday slots from 09:00 to 17:00 @shot 08-crm/10-booking-settings.png

## Book an appointment for a customer

1. Open **Appointment** and click **Add Appointment**.
2. Enter the **Scheduled Time**.
3. Enter the customer's **Name**, **Email**, and if you have them **Phone Number** and **Skype ID**. Add any **Details**.
4. Leave **Appointment With** and **Party** empty to let DocFlow find them, or pick them yourself.
5. Click **Save**.

## How a visitor books on the website

1. The visitor opens **Book an Appointment** on your site.
2. They pick a **Date** and their **Time zone**, then a free time slot, and click **Next**.
3. They enter their **Name**, **Phone number**, **Skype**, **Email** and **Notes**, and click **Submit**.
4. They see "Please check your email to verify your appointment." and receive an **Appointment Confirmation** mail with a link.
5. When they click the link, the appointment opens and they get an **Appointment Confirmed** mail.

!fig The public Book an Appointment page with a date, the Asia/Dubai time zone and free half-hour slots @shot 08-crm/10-book-appointment-page.png

## What happens next

- DocFlow finds the customer by email. If there is none, it looks for a lead, and if there is no lead either, it makes a new one with the name, email, phone and details.
- The appointment is given to an agent as a to-do. If the lead already has a deal, its owner gets it; otherwise the free agent with the fewest appointments that day.
- A calendar event is made with the agent and the customer.
- **Status** is **Open** for a booked appointment, **Unverified** for a website booking whose email is not verified yet, and **Closed** when you close it. Closing or reopening the appointment also closes or reopens its to-do and event.
- Every hour DocFlow closes or deletes website bookings whose verification link has expired, as set in the settings.

## Common problems

| Message | What to do |
| --- | --- |
| "Appointment time cannot be in the past." | Pick a later time |
| "Appointments can only be booked … days in advance." | Pick an earlier date, or raise the number in the settings |
| "Please select a holiday list in the appointment booking settings." | Set the **Holiday List** |
| "… is a holiday." | Pick another day |
| "There are no availability slots in the appointment booking settings." | Add rows to **Availability Of Slots** |
| "The appointment time is outside the available slots." | Pick a time inside your opening slots |
| "No agent is free at this time. Please choose another time." | Choose another time or add agents |
| "Status Unverified is only for appointments booked through the portal." | Use Open or Closed for appointments you book yourself |
| "A portal appointment can only be opened by verifying the email address." | Wait for the visitor to click the link in their mail |
| "No slots available on this date" on the website | Pick another date |
| "Appointment Scheduling Disabled" on the website | Tick **Enable Appointment Booking Through Portal** in the settings |

## Related pages

- [Leads](/crm/leads)
- [Activities, notes and email](/crm/communication)

@@ crm-reports | CRM reports
@summary Where leads come from, which campaigns and people convert best, what the pipeline holds by stage, plus Sales Analytics and the Sales Funnel.

The CRM reports answer the questions a sales manager asks every week: Where do our leads come from? Which campaigns and which people convert best? How much is in the pipeline, at which stage? Which prospects have we talked to but not won?

**Where to find it:** **CRM** > **Reports**.

## Before you start

- You need the **Sales User** or **Sales Manager** role.
- Most reports need an entity and a date range. Pick the entity you work in.

## Run a report

1. Open **CRM** > **Reports** and click a report.
2. Fill the filters at the top. Required filters are marked.
3. The report runs as soon as the required filters are set. Change a filter to run it again.
4. Use the report menu to export or print it, as on any report.

!fig The Sales Pipeline Analytics report by sales stage, monthly, by amount, with a line chart and a table of stages by month @shot 08-crm/11-sales-pipeline-analytics.png

## The reports

| Report | What it shows | Main filters |
| --- | --- | --- |
| **Sales Analytics** | Sales by customer, item, territory or other groupings over time | Entity, dates, range |
| **Lead Details** | Every lead with its contact details, address, owner and status | **Entity** (required), **From Date** (12 months back by default), **To Date**, **Territory** |
| **Sales Pipeline Analytics** | The value or number of open deals by month or quarter, split by owner or by sales stage | **Pipeline By** (Owner or Sales Stage), **From Date**, **To Date**, **Range** (Monthly or Quarterly), **Assigned To**, **Status**, **Based On** (Number or Amount), **Entity**, **Opportunity Source**, **Opportunity Type** |
| **Opportunity Summary by Sales Stage** | Deals per sales stage, split by owner, source or type | **Based On** (Opportunity Owner, Source or Opportunity Type), **Data Based On** (Number or Amount), dates, **Status**, source, type, **Entity** |
| **Sales Funnel** | How leads turn into deals, quotations and orders | Entity, dates |
| **Prospects Engaged But Not Converted** | Leads you have exchanged emails with but who never became customers, with the last communication and its date | **No of Interaction** (the least number of emails) |
| **First Response Time for Opportunity** | How long your team took to answer new deals, per day | **From Date**, **To Date** (required) |
| **Campaign Efficiency** | Per campaign: lead, deal, quotation and order counts, order value, and the rates Opp/Lead %, Quot/Lead % and Order/Quot % | **From Date**, **To Date** |
| **Lead Owner Efficiency** | The same counts and rates per lead owner | **From Date**, **To Date** |

Two more reports open from the search bar (Ctrl+K): **Lost Opportunity** (lost deals with their reasons; same filters as Lead Details) and **Lead Conversion Time** (how long leads took to become customers).

## What happens next

Reports only read data. Click a lead or deal in a report to open it.

## Common problems

- **"Company is required for this report"**: pick the entity.
- **"Please select a Company for Amount"** in Opportunity Summary by Sales Stage: amounts are shown in the entity's currency, so pick the entity.
- **"From Date and To Date are required"**: fill both dates.
- **"No record found"** in Lead Conversion Time: no lead was converted in the period.

## Related pages

- [The CRM Dashboard](/crm/crm-dashboard)
- [Campaigns and email campaigns](/crm/campaigns)

@@ territories-groups | Territories and customer groups
@summary Keep the Territory and Customer Group trees in CRM, used to split leads, deals, customers and sales reports.

**Territory** and **Customer Group** are lists you use to split your market. Every lead, prospect, deal and customer can carry a territory and a customer group, and the CRM and Selling reports can be filtered and grouped by them.

**Where to find it:** **CRM** > **Setup** > **Territory** and **CRM** > **Setup** > **Customer Group**.

## Before you start

- You need the **Sales Master Manager**, **Sales Manager** or **System Manager** role to add or change them.

## How the lists work

Both lists are trees. A group entry (tick **Is Group**) can hold other entries below it. Only the lowest entries are picked on records; reports add them up to their group.

| List | Example tree |
| --- | --- |
| Territory | All Territories > United Arab Emirates > Dubai, Abu Dhabi, Sharjah, Northern Emirates; GCC > Saudi Arabia, Oman |
| Customer Group | All Customer Groups > Commercial (Hospitality, Retail, Construction), Government, Individual |

## Add an entry

1. Open **Territory** (or **Customer Group**) from **CRM** > **Setup**.
2. Click **Add Territory** (or **Add Customer Group**).
3. Enter the name, for example "Dubai".
4. Pick the parent, for example "United Arab Emirates". Tick **Is Group** if other entries will sit below it.
5. For a territory, pick the **Territory Manager** (a sales person) if one person looks after it.
6. Click **Save**.

!fig The Territory tree with All Territories, United Arab Emirates and the emirates below it

## What happens next

- The new entry appears in the **Territory** or **Customer Group** fields of leads, prospects, deals and customers.
- The CRM Dashboard chart **Won amount by territory** and the reports group figures by them.

:::tip Keep it simple
Three levels are usually enough. Create territories that match how your sales team is split, so that one owner is responsible for each.
:::

## Related pages

- [Sales persons](/crm/sales-persons)
- [Customers](/selling/customers)
- [CRM reports](/crm/crm-reports)

@@ sales-persons | Sales persons
@summary Keep the Sales Person tree in CRM: the people who own deals and orders, linked to employees, for reports and targets.

A **Sales Person** is someone on your sales team who is credited with deals and sales. Sales persons appear on sales documents and in reports, and the territory manager of each territory is a sales person.

**Where to find it:** **CRM** > **Setup** > **Sales Person**.

## Before you start

- You need the **Sales Master Manager**, **Sales Manager** or **System Manager** role.
- To link a sales person to a member of staff, the employee record must exist.

## Add a sales person

1. Open **CRM** > **Setup** > **Sales Person** and click **Add Sales Person**.
2. Enter the **Sales Person Name**.
3. Pick the parent in the tree, for example a sales team or the sales manager. Tick **Is Group** if other sales persons will sit below this one.
4. Pick the **Employee** to link the person to staff records.
5. Click **Save**.

!fig The Sales Person tree with a sales manager and two sales persons below

## How sales persons are used

- On sales orders and invoices, the sales team table splits the credit of a sale between sales persons.
- **SMS Center** can send a message to all sales persons.
- Selling reports can show sales by sales person. Commission for outside agents is handled with sales partners in Selling. See [Sales partners, salespeople and commission](/selling/sales-partners).

## Related pages

- [Territories and customer groups](/crm/territories-groups)
- [CRM reports](/crm/crm-reports)
