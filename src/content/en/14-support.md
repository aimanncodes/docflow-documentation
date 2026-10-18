@@ overview | Support at a glance
@summary Handle customer issues, service level agreements, warranty claims and maintenance visits.

The Support module gives after-sales and facilities teams one place to log customer issues, meet response times, handle warranty claims and plan maintenance visits. It is especially useful for equipment suppliers and facilities management companies with annual maintenance contracts (AMCs).

!fig Support workspace with open issues by priority and SLA status

| Record | Use |
| --- | --- |
| Issue | A customer problem or request |
| Service Level Agreement | Response and resolution targets |
| Warranty Claim | A fault on a serial-numbered product |
| Maintenance Schedule | Planned visits under a contract |
| Maintenance Visit | What the technician did on site |

@@ issues | Issues and tickets
@summary Log, assign and resolve customer issues from email, portal or phone.

## Ways issues arrive

- **Email**: connect a support mailbox, and each new email becomes an issue.
- **Portal**: customers raise issues themselves on the [customer portal](/website/portal).
- **Phone or WhatsApp**: the support agent creates the issue manually.

## Working an issue

1. Open the issue and check the customer, priority and issue type.
2. Assign it, manually or with an [assignment rule](/framework/automation).
3. Reply from the issue. Your reply is emailed, and the conversation stays on the timeline.
4. Set the status to **Replied**, **On Hold** or **Resolved** as it progresses.
5. Close it once the customer confirms.

!fig Issue with customer details, priority, SLA timer and email conversation

:::example Example: a chiller alarm at a hotel
A hotel in Downtown Dubai emails at 22:10 about a walk-in chiller alarm. The issue is created automatically with priority High, assigned to the on-call technician, and the 2-hour response timer starts. The technician replies at 22:35 and resolves it on site by 01:10.
:::

@@ sla | Service level agreements
@summary Set response and resolution times by priority and working hours.

## Creating an SLA

1. Go to **Support › Service Level Agreement › New**.
2. Choose whether it applies to all issues or to specific customers (for example AMC customers).
3. Under **Priorities**, set the response and resolution times for Low, Medium, High and Urgent.
4. Under **Working Hours**, set the support days and hours, and link a holiday list.
5. Save and enable it.

| Priority | Response | Resolution |
| --- | --- | --- |
| Urgent | 1 hour | 4 hours |
| High | 2 hours | 8 hours |
| Medium | 4 hours | 2 working days |
| Low | 1 working day | 5 working days |

!fig Service level agreement with priorities and working hours

:::uae Ramadan hours
Private sector working hours are reduced by two hours a day during Ramadan. If your support team follows these hours, create a separate working-hours schedule for Ramadan so SLA timers stay fair.
:::

@@ warranty-maintenance | Warranty claims and maintenance visits
@summary Track products under warranty and plan preventive maintenance.

## Warranty claims

1. Go to **Support › Warranty Claim › New**.
2. Enter the **Serial No.**. DocFlow fills in the item, customer and warranty expiry from the delivery history.
3. Describe the complaint and save.
4. When the work is done, record the resolution and set the status.

!fig Warranty claim showing serial number and warranty expiry date

## Maintenance schedules

For AMCs, create a **Maintenance Schedule** from the sales order. Set the number of visits, for example quarterly for a year, and the technician. DocFlow generates the visit dates.

## Maintenance visits

After each visit, the technician records a **Maintenance Visit**: the work done, parts used, the customer's feedback and a signature.

!fig Maintenance visit recording work done and customer feedback

@@ support-settings | Support settings, issue types and priorities
@summary Shape the helpdesk around your products and service levels.

## Issue types and priorities

- **Issue Types** classify tickets: Breakdown, Installation Request, Spare Parts, Billing Query, Complaint.
- **Issue Priorities** set urgency: Low, Medium, High, Urgent. Each priority links to response and resolution times in the [SLA](/support/sla).

## Support settings

| Setting | Effect |
| --- | --- |
| Close issue after days | Auto-closes replied tickets with no customer response |
| Allow resetting SLA | Restart timers when an issue is reopened |
| Search APIs | Suggests help articles while customers type a new ticket |
| Track service level agreement | Turns SLA timers on |

!fig Support settings with auto-close and SLA options

@@ knowledge-base | Help articles and knowledge base
@summary Publish answers so customers and staff can solve common problems themselves.

1. Create **Help Categories** such as Ovens, Refrigeration, Billing, Warranty.
2. Go to **Support › Help Article › New**. Write the title and the answer, with photos where useful.
3. Choose the category and tick **Published**.

!fig Help article with category and published flag

Published articles appear in the portal's help section, and DocFlow suggests matching articles when a customer starts typing a new issue.

:::tip Write in both languages
Write each article in English and Arabic, with the same category, so the portal serves every customer.
:::

@@ email-setup | Turning emails into tickets
@summary Connect a support mailbox so every email becomes an issue automatically.

1. Create an **Email Account** for your support address, for example `support@yourcompany.ae`.
2. Tick **Enable Incoming** and set **Append To** = Issue.
3. Tick **Enable Outgoing** so replies go from the same address.
4. Save. New emails create issues, and replies are added to the same issue.

!fig Email account for support with incoming enabled and append to issue

:::tip Auto-reply
Set an auto-reply that confirms the ticket number and the expected response time, in English and Arabic.
:::

@@ support-reports | Support reports
@summary Measure response times, resolution times and workload.

| Report | Shows |
| --- | --- |
| Issue Analytics | Issues by type, priority, customer and month |
| Issue Summary | Open and closed issues per agent |
| First Response Time | Average time to first reply |
| SLA compliance | Issues that met or breached their SLA |
| Maintenance Schedules | Planned and completed visits |
| Warranty Claims | Claims by item and fault |

!fig Issue analytics by priority and month

:::example Example: monthly AMC review
Rimal Facilities Management meets each tower owner monthly with SLA compliance, open issues and completed maintenance visits from these reports, instead of compiling spreadsheets.
:::
