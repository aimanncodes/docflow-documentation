@@ overview | CRM at a glance
@summary Capture enquiries, qualify them into opportunities, follow up on time and convert them into quotations and customers, with campaigns, contracts and pipeline reports.

The CRM module covers everything before a customer places an order: the enquiry from a website form or an exhibition stand, the follow-up calls, the site visit, the quotation and the decision. Everything stays connected, so when a lead becomes a customer, the full history travels with it.

!fig CRM workspace with open leads, opportunities by stage and expected revenue

## The sales funnel

| Stage | Record | Typical question |
| --- | --- | --- |
| Interest | [Lead](/crm/leads) | Who is this and how did they find us? |
| Qualification | Lead status, [prospect](/crm/prospects) | Do they have a need, budget and authority? |
| Opportunity | [Opportunity](/crm/opportunities) | What exactly do they want, how much, and when? |
| Proposal | [Quotation](/selling/quotations) | What is our offer? |
| Commitment | [Sales order](/selling/sales-order) / [contract](/crm/contracts) | Won |
| Lost | Lost reason | Why did we lose? |

## Where leads come from

| Source | How it enters DocFlow |
| --- | --- |
| Website contact form | Web form creates a lead automatically |
| Email to sales@ | Incoming email account creates a lead |
| Exhibitions (Gulfood, Big 5, GITEX) | Data import or mobile entry on the stand |
| Phone and walk-ins | Quick entry by sales coordinator |
| Campaigns and newsletters | UTM source and campaign fields |
| Referrals and partners | Source = Referral, Sales Partner |

## Reports

| Report | Shows |
| --- | --- |
| Sales Pipeline Analytics | Opportunity value by stage, owner or period |
| Sales Funnel | Leads → opportunities → quotations → orders |
| Lead Details, Lead Conversion Time | Volume and speed of conversion |
| Opportunity Summary by Sales Stage | Weighted pipeline |
| Lost Opportunity | Reasons for losses and competitors |
| Campaign Efficiency | Leads and revenue per campaign |
| First Response Time for Opportunity | Speed of first reply |

## Related pages

- [Leads](/crm/leads)
- [Pipeline](/crm/pipeline)
- [Selling overview](/selling/overview)

@@ leads | Leads
@summary Record enquiries, assign and follow them up, qualify them, avoid duplicates and convert them into customers, prospects or opportunities.

## Creating a lead

1. Go to **CRM › Lead › New**.
2. Enter the person's **First Name** and **Last Name**, **Organisation Name**, email and mobile.
3. Choose **Source** (Website, Exhibition, Referral, Cold Call, Campaign) and, if relevant, **Campaign**.
4. Add **Territory**, **Industry**, **Market Segment** and the **Lead Owner**.
5. Save. The lead starts with status **Lead**.

!fig Lead form for a hotel procurement manager with source, territory and owner

## Lead fields

| Field | Example |
| --- | --- |
| Organisation Name | Jumeirah Grand Hotel |
| Job Title | Purchasing Manager |
| Mobile | +971 50 123 4567 |
| City / Emirate / Country | Dubai / Dubai / UAE |
| Request Type | Product Enquiry, Request for Information, Suggestions |
| Qualification Status | Unqualified, In Process, Qualified |
| Annual Revenue, No. of Employees | For B2B qualification |

## Statuses

| Status | Meaning |
| --- | --- |
| Lead | New, not yet contacted |
| Open | Being worked on |
| Replied | They responded |
| Opportunity | An opportunity has been created |
| Quotation | A quotation has been sent |
| Lost Quotation | The quotation was lost |
| Interested | Positive but not ready |
| Converted | Became a customer |
| Do Not Contact | Opted out |

## Following up

From the lead, you can **Add Activity**: log a call, create a **ToDo**, schedule an **Event** (meeting or site visit) or send an email. The **Activities** and **Notes** tabs show everything so far. Use [assignment rules](/framework/automation) to spread new leads across the team by territory.

## Duplicates

DocFlow warns when a lead with the same email exists. Search by mobile number before creating, and merge duplicates by renaming one to the other with **Merge** ticked.

## Converting

| Action | Creates |
| --- | --- |
| Create › Opportunity | An opportunity linked to the lead |
| Create › Quotation | A quotation directly, for simple deals |
| Create › Customer | A customer with the lead's address and contact |
| Create › Prospect | A prospect (organisation) grouping several leads |

:::tip Qualify before you quote
Use **Qualification Status** and a short note on need, budget, decision-maker and timing. Reporting on qualified leads gives a far more realistic pipeline than counting every enquiry.
:::

:::uae Consent and marketing
Under UAE data protection rules and the TDRA rules on marketing messages, get consent before sending promotional SMS or emails, and honour opt-outs. Set **Unsubscribed** or **Do Not Contact** when a lead asks.
:::

## Related pages

- [Opportunities](/crm/opportunities)
- [Communication](/crm/communication)

@@ opportunities | Opportunities
@summary Track specific deals with items, value, probability, stage and expected close date, and turn them into quotations, orders, or a documented loss.

## Creating an opportunity

1. From a lead or customer click **Create › Opportunity**, or go to **CRM › Opportunity › New**.
2. **Opportunity From**: Lead, Customer or Prospect, and the party.
3. **Opportunity Type**: Sales, Maintenance, Support.
4. **Sales Stage**: for example Needs Analysis.
5. Enter **Expected Closing**, **Probability (%)** and the **Opportunity Amount**, or add **Items** with quantities and rates to calculate it.
6. Choose the **Opportunity Owner** and save.

!fig Opportunity for a hotel kitchen refit with items, stage, probability and expected closing date

## Fields that drive the pipeline

| Field | Use |
| --- | --- |
| Sales Stage | Position in your pipeline (Prospecting, Qualification, Needs Analysis, Proposal, Negotiation) |
| Probability | Weighted value = amount × probability |
| Expected Closing | Forecast month |
| Currency | AED, or USD for export deals |
| Competitors | Who else is quoting |
| Contact Person | Decision maker |

## From opportunity to quotation

Click **Create › Quotation**. Items, customer and rates are copied. When the quotation is submitted, the opportunity status becomes **Quotation**; when an order is made, it becomes **Converted**.

## Lost opportunities

Click **Declare Lost** and choose one or more **Lost Reasons** (price, delivery time, specification, competitor won) and competitors. Write a detail note. Review the **Lost Opportunity** report monthly with the sales team.

:::example Example
Al Waha Trading receives a request for a full kitchen refit at a Downtown hotel. The salesperson creates an opportunity for AED 640,000 at 40% probability, expected to close in May. After a site visit the stage moves to Proposal and a quotation is issued from the opportunity.
:::

## Related pages

- [Pipeline](/crm/pipeline)
- [Quotations](/selling/quotations)

@@ pipeline | Pipeline and sales forecasting
@summary See the pipeline by stage, owner and month in kanban and reports, forecast weighted revenue, and run a weekly pipeline review.

## Kanban board

Open the **Opportunity** list and switch to **Kanban** by Sales Stage. Each card shows the party, value and owner. Drag a card to move it to the next stage; the change is recorded on the opportunity.

!fig Opportunity kanban board with cards grouped by sales stage

## Defining sales stages

Edit **Sales Stage** records to match your process. Keep five to seven stages with clear exit criteria:

| Stage | Exit criterion |
| --- | --- |
| Prospecting | First meeting booked |
| Qualification | Need, budget and timing confirmed |
| Needs Analysis | Site visit or requirement list done |
| Proposal | Quotation submitted |
| Negotiation | Commercial terms under discussion |

## Reports for forecasting

| Report | Use |
| --- | --- |
| Sales Pipeline Analytics | Value or count by stage, owner or territory, monthly or quarterly |
| Opportunity Summary by Sales Stage | Totals per stage, with weighted values |
| Sales Funnel | Conversion rates between stages |
| Quotation Trends | Quoted value over time |

Weighted pipeline = Σ (opportunity amount × probability). A healthy pipeline for next quarter is usually two to three times the sales target.

## Weekly pipeline review

1. Filter opportunities with expected closing in the next 60 days.
2. Check each has a next activity scheduled.
3. Update stage, probability and amount.
4. Declare lost anything stalled for more than 90 days.
5. Compare with targets in the [sales partner and salesperson](/selling/sales-partners) reports.

## Related pages

- [Opportunities](/crm/opportunities)
- [Selling reports](/selling/selling-reports)

@@ campaigns | Campaigns, email campaigns and newsletters
@summary Plan marketing campaigns, send scheduled email sequences and newsletters, track UTM sources and measure leads and revenue per campaign.

## Campaigns

1. Go to **CRM › Campaign › New**.
2. Enter the name, for example "Gulfood 2026", a description and the budget.
3. Optionally add a **Campaign Schedule**: a list of email templates and days after start for each.
4. Save. Link leads and opportunities to the campaign with the **Campaign** field.

!fig Campaign record for an exhibition with email schedule and linked leads

## Email campaigns

An **Email Campaign** sends the campaign's email schedule to a lead, contact or email group:

| Field | Example |
| --- | --- |
| Campaign | Ramadan Offers 2026 |
| Email Campaign For | Email Group "Restaurant buyers" |
| Start Date | 20-02-2026 |
| Sender | sales@ address |

Emails go out on schedule; replies arrive on the recipient's timeline.

## Newsletters

**Newsletter** sends one message to one or more **Email Groups** (subscribers). Write the content, attach files, preview, and schedule or send. Recipients can unsubscribe with the link at the bottom. Subscribers can be imported or added from website sign-up forms.

## Tracking sources

Leads from the website carry **UTM Source, Medium and Campaign** from the visitor's link, so you know whether a lead came from LinkedIn, Google Ads or a newsletter. **Campaign Efficiency** shows leads, opportunities, quotations and orders per campaign.

:::uae Marketing rules
Send marketing emails and SMS only to people who agreed to receive them, include a clear unsubscribe option, and identify your company. Promotional SMS in the UAE follow TDRA and telecom operator rules, including sender registration and time windows.
:::

## Related pages

- [Leads](/crm/leads)
- [Email templates](/framework/email-templates)

@@ prospects | Prospects
@summary Group several leads from the same organisation into a prospect, track the account before it becomes a customer, and manage key-account opportunities.

A **Prospect** is an organisation you are working to win, often with several leads (the procurement manager, the executive chef, the finance director). It brings all their leads and opportunities together.

## Creating a prospect

1. From a lead click **Create › Prospect**, or go to **CRM › Prospect › New**.
2. Enter the company name, industry, market segment, territory, annual revenue and number of employees.
3. Add leads in the **Leads** table and set the **Prospect Owner**.
4. Save. Opportunities created from the prospect appear in its **Opportunities** table.

!fig Prospect for a hotel group with linked leads and opportunities

## When to use prospects

| Situation | Use |
| --- | --- |
| One-off enquiry from a person | A lead is enough |
| Several contacts at a large organisation | Prospect |
| Group with several properties (hotel group) | Prospect with leads for each property |
| Tender with a government entity | Prospect with the tender as opportunity |

## Converting

When the first order is won, click **Create › Customer**. The prospect's details become the customer; keep the prospect for history.

## Related pages

- [Leads](/crm/leads)
- [Customers](/selling/customers)

@@ contracts | Contracts
@summary Record signed agreements with customers and suppliers, track their dates and fulfilment terms, use templates, and get reminders before renewal.

## Creating a contract

1. Go to **CRM › Contract › New**.
2. Choose **Party Type** (Customer, Supplier, Employee) and the party.
3. Enter **Start Date** and **End Date**.
4. Choose a **Contract Template** or write the terms.
5. Add **Fulfilment Terms**: obligations to complete, such as "Quarterly preventive maintenance visit".
6. Tick **Signed** and enter the signee and date when signed; attach the signed PDF.
7. Submit.

!fig Contract for an annual maintenance agreement with fulfilment terms and signature details

## Statuses

| Status | Meaning |
| --- | --- |
| Unsigned | Draft for negotiation |
| Active | Signed and within dates |
| Inactive | Expired or not yet started |
| Fulfilment status | Unfulfilled, Partially Fulfilled, Fulfilled, Lapsed |

## Contract templates

Create **Contract Template** records with standard terms and fields such as `{{ party_name }}` and `{{ end_date }}`. Typical templates: annual maintenance contract (AMC), supply agreement, distribution agreement, NDA.

## Renewals

Add a [notification](/getting-started/notifications) 60 days before **End Date** to the contract owner. For recurring billing under the contract, use [subscriptions](/accounting/subscriptions) or auto repeat.

:::example Example
Rimal Facilities Management signs a one-year AMC with a residential tower in Al Nahda, Sharjah, worth AED 96,000, billed monthly. The contract lists 12 monthly visits as fulfilment terms; each completed [maintenance visit](/support/warranty-maintenance) is ticked off.
:::

## Related pages

- [Warranty and maintenance](/support/warranty-maintenance)
- [Subscriptions](/accounting/subscriptions)

@@ communication | Calls, emails, meetings and appointments
@summary Keep every interaction with a lead or customer on its timeline: emails, call logs, events and site visits, appointments booked from the website, and follow-up to-dos.

## Emails

Connect the sales mailbox as an [email account](/getting-started/notifications). Emails sent from a lead, opportunity or quotation, and replies to them, are stored on that record's timeline. Incoming emails from unknown senders can create new leads automatically.

## Call logs

With a telephony integration, calls are logged automatically with duration and recording link. Without one, use **Add Activity › New Call** to log the outcome manually.

!fig Lead timeline showing an email, a logged call and a scheduled site visit

## Events and meetings

Create an **Event** for a meeting, site visit or demo: date and time, participants (users and contacts), and the linked lead or opportunity. Events appear in the calendar and can sync with Google Calendar.

## Appointments

The **Appointment** booking page lets prospects book a slot from your website. You set the available days and hours; each booking creates an appointment linked to a lead or customer and is assigned to a salesperson.

## To-dos and reminders

| Need | Use |
| --- | --- |
| Call back next Tuesday | ToDo with date on the lead |
| Remind me about this opportunity | **Remind Me** from the ⋯ menu |
| Team follow-up | Assign To with a comment |

## WhatsApp and SMS

Many UAE buyers prefer WhatsApp. If a WhatsApp integration is configured, messages can be sent from the lead and logged on the timeline; otherwise record important WhatsApp conversations as a comment or call note so the history is complete.

## Related pages

- [Collaboration](/getting-started/collaboration)
- [Leads](/crm/leads)

@@ crm-settings | CRM settings
@summary Configure lead and opportunity defaults: duplicate checks, auto-creation from emails, default sales stages, carry-forward of communication, and master lists such as sources and lost reasons.

## CRM Settings

| Setting | Recommended |
| --- | --- |
| Allow Lead Duplication based on Emails | Off |
| Auto Creation of Contact | On, creates a contact from a new lead's details |
| Close Replied Opportunity After Days | 15 to 30 |
| Default Quotation Validity Days | 15 or 30 |
| Carry Forward Communication and Comments | On, so the history moves to the opportunity and quotation |
| Update timestamp on new communication | On |

!fig CRM settings with lead duplication, contact creation and carry-forward options

## Master lists

| List | Examples |
| --- | --- |
| Lead Source | Website, Exhibition, Referral, LinkedIn, Google Ads, Walk-in |
| Sales Stage | Prospecting, Qualification, Needs Analysis, Proposal, Negotiation |
| Opportunity Lost Reason | Price, Delivery time, Specification, Budget cancelled, Competitor |
| Competitor | Names of competing suppliers |
| Industry Type | Hospitality, Construction, Healthcare, Government |
| Market Segment | Enterprise, SME, Government |

## Assignment and permissions

Set assignment rules for new leads by territory or source, and restrict sales staff to their own leads with **If Owner** or a territory user permission ([permissions](/framework/permissions)).

## Related pages

- [Selling settings](/selling/selling-settings)
- [Automation tools](/framework/automation)
