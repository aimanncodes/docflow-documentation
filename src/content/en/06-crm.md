@@ overview | CRM at a glance
@summary Capture leads, nurture opportunities and keep every customer conversation in one place.

The CRM module tracks your potential business before it becomes a sale. Enquiries from your website, exhibitions such as GITEX or Gulfood, WhatsApp, phone calls and walk-ins are all captured as **leads**, qualified into **opportunities**, and turned into quotations in Selling.

!fig CRM workspace with leads by source and opportunity pipeline chart

## The pipeline

| Stage | Record | Question it answers |
| --- | --- | --- |
| Enquiry | Lead | Who is interested? |
| Qualified need | Opportunity | What do they want, and how much is it worth? |
| Offer | Quotation | What are we proposing? |
| Won | Customer + Sales Order | What did they buy? |

@@ leads | Leads
@summary Record new enquiries and qualify them quickly.

## Creating a lead

1. Go to **CRM › Lead › New**.
2. Enter the person's name, company, mobile number and email.
3. Choose the **Source**, for example Exhibition, Website, Referral or Cold Call.
4. Choose the **Territory** (emirate) and **Industry**.
5. Save.

!fig New lead form with contact details, source and territory

:::tip Capture leads from your website
A [web form](/website/web-forms) on your website can create leads directly. Every enquiry lands in DocFlow with its source set to Website.
:::

## Lead statuses

| Status | Meaning |
| --- | --- |
| Lead | New, not yet contacted |
| Open | Contacted, conversation ongoing |
| Replied | They have responded |
| Opportunity | Converted to an opportunity |
| Interested / Converted / Do Not Contact | Outcome |

## Importing an exhibition list

After an exhibition, import the badge scans as leads using [Data Import](/getting-started/data-import), with the source set to the event name. Assign them to salespeople with an [assignment rule](/framework/automation).

:::uae Consent for marketing messages
Before sending marketing SMS or WhatsApp messages, make sure you have the person's consent and that your sender ID is registered with the telecom provider. Tick **Unsubscribed** on leads who opt out.
:::

@@ opportunities | Opportunities
@summary Track qualified deals, their value and their stage until they are won or lost.

## From lead to opportunity

Open a qualified lead and click **Create › Opportunity**. The contact details carry over. Add:

- **Opportunity Type**: Sales, Maintenance or Support
- **Items** with expected quantities, or an **Opportunity Amount**
- **Sales Stage**: for example Needs Analysis, Proposal, Negotiation
- **Probability (%)** and **Expected Closing** date

!fig Opportunity with items, sales stage and expected closing date

:::example Example: a hotel kitchen fit-out
A new hotel on Saadiyat Island needs a full commercial kitchen. Al Waha Trading's salesperson creates an opportunity worth AED 1.4 million, stage Proposal, 40% probability, closing in June. The sales manager sees it in the pipeline forecast straight away.
:::

## Lost opportunities

When a deal is lost, set the status to **Lost** and record the **Lost Reason** (price, competitor, timing, specification) and the competitor's name. Over time, the **Lost Opportunity** report shows where you lose business.

@@ pipeline | Sales pipeline and follow-ups
@summary Plan next steps, log activity and see the whole pipeline at a glance.

## Kanban board

Switch the opportunity list to **Kanban** view and group by **Sales Stage**. Drag cards between columns as deals move forward.

!fig Opportunity Kanban board grouped by sales stage

## Activities

Every lead, opportunity and customer has an activity timeline. Log calls, meetings and site visits with **New Event** or **Add Note**. Emails sent from DocFlow appear there too.

## Follow-up reminders

Set **Next Contact Date** and **Next Contact By** on a lead or opportunity. The salesperson gets a reminder on that date.

## Pipeline reports

| Report | Shows |
| --- | --- |
| Sales Pipeline Analytics | Opportunity value by stage and owner |
| Lead Conversion Time | How long leads take to become customers |
| Lead Owner Efficiency | Conversion rate by salesperson |
| Campaign Efficiency | Results by marketing campaign |

@@ campaigns | Campaigns and email marketing
@summary Plan campaigns and send newsletters to segmented contact lists.

## Campaigns

Create a **Campaign** for each marketing push, for example "Ramadan 2026 promotion" or "Big 5 Global exhibition". Link leads and opportunities to the campaign to measure the results.

## Email campaigns

1. Build an **Email Group** of contacts, such as all hotel procurement managers.
2. Create an **Email Campaign**, choose the campaign, the email group and a schedule of emails.
3. DocFlow sends each email on its scheduled day and tracks opens and unsubscribes.

!fig Email campaign with a three-step schedule

:::uae Ramadan timing
Response rates change during Ramadan. Many teams schedule campaigns for the evening hours after Iftar, and avoid sending on Eid holidays.
:::

## Appointments

If customers book showroom visits or consultations, use **Appointment** with your scheduling settings. Confirmations go out by email, and the meeting is linked to the lead.

@@ prospects | Prospects and account-based selling
@summary Group several leads from the same company into one prospect.

When you sell to large organisations, such as a hotel group or a master developer, you deal with many people. A **Prospect** groups all the leads and opportunities for one company.

1. Go to **CRM › Prospect › New**, or click **Create › Prospect** from a lead.
2. Enter the company name, industry, territory, annual revenue band and number of employees.
3. Add leads from that company in the **Leads** table.
4. Opportunities linked to those leads appear on the prospect.

!fig Prospect for a hotel group with linked leads and opportunities

:::example Example: a hotel group in Abu Dhabi
Al Waha Trading is talking to the procurement manager, the executive chef and the engineering head of one hotel group. All three are leads on one prospect, so the account manager sees every conversation and quote in one place.
:::

@@ contracts | Contracts
@summary Keep agreements with customers and suppliers, with terms, dates and signatures.

1. Go to **CRM › Contract › New**.
2. Choose the **Party Type** and **Party**.
3. Set the **Start Date** and **End Date**.
4. Choose a **Contract Template** or write the terms.
5. Add fulfilment terms, for example quarterly maintenance visits or a minimum order quantity.
6. Save. When the other side signs, tick **Signed** and attach the signed copy.

!fig Contract with party, dates, terms and signed status

## Contract templates

Store standard terms, such as an annual maintenance contract or a supply agreement, as **Contract Templates** with placeholders for the party name, amount and dates.

:::uae Arabic versions
Contracts with government entities, and some court proceedings, may require an Arabic version. Keep both languages in the template, and agree which version prevails in case of difference.
:::

@@ communication | Calls, emails and WhatsApp
@summary Keep every customer conversation on the record it belongs to.

## Email

Emails sent from a lead, opportunity, customer or quotation are stored on its timeline. Replies come back to the same record when your email account is connected with **Enable Incoming**.

## Call logs

If your telephony provider is integrated, incoming and outgoing calls are logged automatically, with the caller matched to a lead or contact. You can add notes after each call.

!fig Call log on a lead timeline with duration and notes

## WhatsApp

With a WhatsApp Business integration, messages to and from customers are stored on the matching contact or lead. Approved message templates can be used for quotation follow-ups and delivery updates.

| Channel | Best for |
| --- | --- |
| Email | Quotations, formal documents, statements |
| Phone | Negotiation and urgent issues |
| WhatsApp | Quick updates, delivery coordination, photos from site |

:::uae WhatsApp is the norm
In the UAE, many customers prefer WhatsApp for day-to-day contact. Integrating it keeps those conversations in DocFlow instead of on a salesperson's personal phone.
:::

@@ crm-settings | CRM settings
@summary Choose how leads, opportunities and quotations behave.

Open **CRM › CRM Settings** to set:

| Setting | Effect |
| --- | --- |
| Campaign naming | By campaign name or a naming series |
| Allow lead duplication based on email | Off, to avoid duplicate leads |
| Auto close replied opportunity after days | Closes stale opportunities automatically |
| Carry forward communication and comments | Copies the history from lead to opportunity to quotation |
| Default quotation validity days | For example 30 |

!fig CRM settings with duplication and carry forward options

## Sales stages and lost reasons

Edit the list of **Sales Stages** to match your process, for example Enquiry, Site Visit, Proposal, Negotiation, Verbal Award, LPO Received. Keep **Opportunity Lost Reasons** short and clear so reports are useful.
