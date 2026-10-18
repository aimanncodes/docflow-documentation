@@ overview | Support at a glance
@summary Handle customer issues from email, portal and phone, meet service level agreements, manage warranty claims and maintenance visits, and measure service quality.

The Support module is a helpdesk connected to your sales and stock records. When a customer reports a problem, the agent sees what they bought, the serial number, warranty dates and past visits, without switching systems.

!fig Support workspace with open issues by priority, SLA status and maintenance visits due

## Building blocks

| Record | Purpose |
| --- | --- |
| [Issue](/support/issues) | A customer request or complaint |
| Issue Type and Priority | Classify and prioritise |
| [Service Level Agreement](/support/sla) | Response and resolution targets |
| [Warranty Claim](/support/warranty-maintenance) | Fault on a product under warranty or AMC |
| Maintenance Schedule | Planned visits under a contract |
| Maintenance Visit | Record of a visit and the work done |
| [Help Article](/support/knowledge-base) | Self-service answers |

## Channels

| Channel | How it reaches DocFlow |
| --- | --- |
| Email to support@ | Email account creates issues ([setup](/support/email-setup)) |
| Customer portal | Customers raise and follow issues |
| Phone and WhatsApp | Agent creates the issue |
| Website form | Web form creates an issue |

## Typical users

| Business | Use |
| --- | --- |
| Equipment supplier | Warranty claims on kitchen equipment, technician visits |
| Facilities management | Tenant complaints, AMC preventive maintenance |
| Software or IT services | Tickets with SLAs |
| Trading | Delivery complaints, returns |

## Related pages

- [Issues](/support/issues)
- [Service level agreements](/support/sla)

@@ issues | Issues and tickets
@summary Log, assign, prioritise, respond to and resolve customer issues, with full history, split and merge, and links to the customer, item and serial number.

## Creating an issue

1. Go to **Support › Issue › New** (or it is created from an email or the portal).
2. Enter the **Subject** and **Description**.
3. Choose **Customer**, **Contact**, **Issue Type** and **Priority**.
4. Link the **Serial No** or item if the issue is about a product.
5. Save. The SLA starts counting.

!fig Issue form with customer, priority, SLA timers and email conversation

## Statuses

| Status | Meaning |
| --- | --- |
| Open | New or being worked on |
| Replied | Agent replied; waiting for the customer (SLA paused if configured) |
| On Hold | Waiting on a third party |
| Resolved | Fixed; awaiting confirmation |
| Closed | Done |

## Working an issue

- Reply by email from the issue; the conversation is kept on the timeline.
- Assign to an agent or use [assignment rules](/framework/automation) by issue type or priority.
- Add internal comments that the customer does not see.
- **Split** an issue when one email raises two problems.
- Record **Resolution Details** and the root cause before closing.
- If a visit is needed, create a **Maintenance Visit** or **Warranty Claim** from the issue.

## Auto-closing

Issues in Replied status with no customer response are closed automatically after the number of days in [support settings](/support/support-settings).

## Related pages

- [Service level agreements](/support/sla)
- [Email setup](/support/email-setup)

@@ sla | Service level agreements
@summary Define response and resolution targets by priority, working hours and holidays, apply SLAs by customer or contract, and track breaches.

## Creating an SLA

1. Go to **Support › Service Level Agreement › New**.
2. Choose **Document Type** (Issue) and give it a name, for example "Gold – Hotels".
3. Set **Default Priority** and add **Priorities** with **Response Time** and **Resolution Time**.
4. Set **Working Hours** per day and the **Holiday List**.
5. Under **Assignment Conditions**, set when it applies, for example customer group Hotels, or link it to specific customers.
6. Choose statuses that pause the SLA (Replied, On Hold).
7. Save and tick **Enabled**.

!fig SLA with priorities, response and resolution times and working hours

## Example

| Priority | First response | Resolution |
| --- | --- | --- |
| Urgent (kitchen down) | 1 hour | 8 hours |
| High | 4 hours | 1 working day |
| Medium | 1 working day | 3 working days |
| Low | 2 working days | 10 working days |

Working hours Sunday to Thursday 08:00–18:00 and Saturday 09:00–13:00; UAE public holidays excluded.

## Tracking

The issue shows **Response By** and **Resolution By** with a countdown. **Agreement Status** becomes Fulfilled or Failed. Report on breaches with the issue list grouped by agreement status, or the **Issue Summary** report.

## Related pages

- [Issues](/support/issues)
- [Holiday lists](/organization/holiday-list)

@@ warranty-maintenance | Warranty, AMC and maintenance visits
@summary Track warranty by serial number, handle warranty claims, schedule preventive maintenance under annual maintenance contracts and record visits with parts and signatures.

## Warranty by serial number

When you deliver serialised items, DocFlow records the delivery date and warranty period (from the item's **Warranty Period (days)**) on the **Serial No**. **Warranty Expiry Date** and **AMC Expiry Date** show whether the item is covered.

## Warranty claims

1. Go to **Support › Warranty Claim › New** (or create from an issue).
2. Choose the **Customer** and **Serial No**; DocFlow shows warranty and AMC status.
3. Describe the **Issue** and set **Complaint Date**.
4. Assign a technician and create a **Maintenance Visit** when they attend.
5. Record the **Resolution** and close.

!fig Warranty claim for an oven with serial number, warranty status and resolution

## Maintenance schedules (AMC)

1. Create a **Maintenance Schedule** from a sales order for an AMC, or directly.
2. Add items or serial numbers, start and end date, **Periodicity** (monthly, quarterly) and number of visits.
3. Click **Generate Schedule**; DocFlow lists every visit date and assigns the sales person or technician.
4. Submit. Visits appear in the calendar.

## Maintenance visits

| Field | Example |
| --- | --- |
| Customer, address | Al Nahda Residence, Sharjah |
| Maintenance Type | Scheduled, Unscheduled, Breakdown |
| Purposes | Item, serial no, work done, technician |
| Completion Status | Partially or Fully Completed |
| Customer Feedback | Comments, signature (custom field) |

!fig Maintenance visit with work done, technician and completion status

Spare parts used are issued from stock with a stock entry or delivery note against the visit, and billed if not covered.

:::uae Consumer warranties
The UAE Consumer Protection Law requires suppliers to honour warranties and provide maintenance and spare parts for durable goods for a reasonable period. Keeping serial-based warranty records in DocFlow makes this easy to show.
:::

## Related pages

- [Contracts](/crm/contracts)
- [Serial numbers and batches](/stock/serial-batch)

@@ support-settings | Support settings
@summary Configure issue auto-close, the support portal, search for help articles and default SLA behaviour.

!fig Support settings with auto-close days and portal options

## Support Settings

| Setting | Recommended |
| --- | --- |
| Close Issue After Days | 7 days in Replied status |
| Allow Resetting Service Level Agreement | Off, unless managers need to reset |
| Track Service Level Agreement | On |
| Get Started Sections | Links shown on the support portal home |
| Show Latest Forum Posts | Off unless you run a forum |
| Search Apps / Forum URL | For help article search |
| Greeting Title and Subtitle | Text on the support portal, for example "How can we help?" |

## Master data

| List | Examples |
| --- | --- |
| Issue Type | Delivery, Product fault, Billing, Installation, Information |
| Issue Priority | Low, Medium, High, Urgent |
| Warranty period on items | 365 days for equipment |

## Related pages

- [Issues](/support/issues)
- [Knowledge base](/support/knowledge-base)

@@ knowledge-base | Knowledge base and help articles
@summary Publish help articles for customers and staff, organise them in categories, and reduce repeat tickets with self-service answers.

## Creating articles

1. Go to **Support › Help Article › New**.
2. Enter the **Title**, choose a **Category** and the **Level** (Beginner, Intermediate, Expert).
3. Write the content with headings, lists and images.
4. Tick **Published** to show it on the website.

!fig Help article on descaling a combination oven, with category and published flag

## Categories

Create **Help Category** records such as Installation, Cleaning and Care, Troubleshooting, Billing. Each category gets a page on the website listing its articles.

## Good articles

| Tip | Why |
| --- | --- |
| One problem per article | Easier to find |
| Steps with photos | Clear for technicians and customers |
| Use the customer's words in titles | Search works better |
| Add Arabic versions for key articles | Many end-users prefer Arabic |
| Review quarterly | Remove outdated steps |

Agents can paste article links when replying to issues; look at the most common issue types to decide which articles to write first.

## Related pages

- [Web pages](/website/web-pages)
- [Arabic website](/website/arabic-website)

@@ email-setup | Support email setup
@summary Connect the support mailbox so emails create and update issues automatically, set the reply address and signature, and avoid loops and spam.

## Connecting the mailbox

1. Go to **Framework › Email Account › New**.
2. Enter the support address, for example support@yourcompany.ae, and choose the service (Microsoft 365, Google Workspace or IMAP).
3. Tick **Enable Incoming** and set **Append To** = Issue.
4. Tick **Enable Outgoing** and set it as the default for issues.
5. Add a **Signature** and, optionally, an auto-reply message.
6. Save; DocFlow checks the mailbox every few minutes.

!fig Email account for support with incoming enabled and Append To set to Issue

## How emails become issues

| Email | Result |
| --- | --- |
| New email from a customer | New issue; contact matched by email address |
| Reply to an issue email | Added to the same issue; status back to Open |
| Email with attachments | Attachments saved on the issue |
| Unknown sender | Issue created; contact can be created |

## Avoiding problems

- Exclude no-reply and system senders to prevent loops.
- Use an **Email Domain** with the correct server settings.
- Keep auto-replies short and include the issue number.

## Related pages

- [Notifications and email accounts](/getting-started/notifications)
- [Issues](/support/issues)

@@ support-reports | Support reports
@summary Measure workload, response and resolution times, SLA compliance, warranty costs and customer satisfaction.

!fig Support analytics chart of issues opened and closed by week

## Reports

| Report | Shows |
| --- | --- |
| Issue Analytics | Issues by type, priority, customer or agent over time |
| Issue Summary | Open, replied, resolved, closed per agent |
| First Response Time for Issues | Average and per issue |
| SLA status (issue list grouped) | Fulfilled vs failed |
| Warranty Claim list | Claims by item and status |
| Maintenance Schedule / Visit lists | Planned vs completed visits |
| Quality Feedback | Customer satisfaction ratings |

## Key measures

| Measure | Target example |
| --- | --- |
| First response within SLA | 95% |
| Resolution within SLA | 90% |
| Repeat issues | Under 5% |
| AMC visits completed on time | 100% |
| Customer satisfaction | 4.5 out of 5 |

## Related pages

- [Service level agreements](/support/sla)
- [Quality feedback](/quality/quality-feedback)
