@@ overview | Projects at a glance
@summary Plan and deliver projects with tasks, timesheets, costing, billing and customer updates, whether you run fit-out jobs, consulting engagements or internal initiatives.

The Projects module connects the work with the money. Tasks and timesheets record what was done and by whom; purchases, stock issues and expense claims tagged to the project record what it cost; sales invoices record what was billed. The project then shows its profit at any time.

!fig Projects workspace with active projects, overdue tasks and hours logged this month

## What a project brings together

| Area | Linked documents |
| --- | --- |
| Plan | Tasks, dependencies, milestones, Gantt |
| Time | Timesheets, activity types, activity costs |
| Costs | Purchase invoices, stock entries, expense claims, payroll costs |
| Revenue | Sales orders and invoices, milestone billing |
| People | Project users, customer portal access |
| Communication | Project updates, comments, emails |

## Types of project

| Type | Example | Billing |
| --- | --- | --- |
| Fixed-price contract | Office fit-out in Business Bay for AED 1.2 million | Milestones / progress |
| Time and materials | IT consulting at AED 450 per hour | Timesheets |
| Internal | ERP rollout, warehouse move | Not billed; cost tracked |
| Maintenance programme | Annual tower maintenance | Monthly fee |

## Setup order

1. [Project settings](/projects/project-settings) and activity types
2. [Project templates](/projects/project-setup) for recurring kinds of work
3. Activity costs per employee
4. Projects, then [tasks](/projects/tasks) and [timesheets](/projects/timesheets)

## Reports

| Report | Shows |
| --- | --- |
| Project Summary | Status, progress, cost, billing and margin per project |
| Project wise Stock Tracking | Materials issued to each project |
| Timesheet Billing Summary | Hours and billable amounts by employee or project |
| Daily Timesheet Summary | Who logged what each day |
| Delayed Tasks Summary | Overdue tasks by project |
| Project Profitability | Revenue vs cost |

## Related pages

- [Setting up a project](/projects/project-setup)
- [Fit-out project guide](/guides/fit-out-project)

@@ project-setup | Setting up a project
@summary Create projects with customer, dates, budget, cost centre and team, use templates for repeatable jobs, and choose how progress is measured.

## Creating a project

1. Go to **Projects › Project › New**.
2. Enter the **Project Name**, for example "Fit-out – Bay Square Office 504".
3. Choose a **Project Template** if you have one; its tasks are created automatically.
4. Enter **Expected Start** and **End Date**, **Priority**, **Department** and **Customer**.
5. Choose **% Complete Method**: Manual, Task Completion, Task Progress or Task Weight.
6. In **Costing and Billing**, set the **Cost Centre**, **Estimated Cost**, and the sales order if one exists.
7. Add **Users** (team members, and customer contacts for portal access).
8. Save.

!fig Project form with customer, dates, completion method and costing section

## Project templates

A **Project Template** lists tasks with durations, start offsets and dependencies. Example for a fit-out:

| Task | Start (day) | Duration |
| --- | --- | --- |
| Site survey and design | 0 | 10 |
| Authority approvals (Trakhees / DM / civil defence) | 10 | 20 |
| Partitions and ceilings | 30 | 15 |
| MEP works | 35 | 20 |
| Finishes and furniture | 50 | 10 |
| Snagging and handover | 60 | 5 |

## Project types and status

Use **Project Type** (Fit-out, Consulting, Internal) for reporting. Status: Open, Completed or Cancelled. Completed projects can still receive late invoices; cancelled projects block new transactions.

## Linking costs

Choose the project on purchase orders and invoices, stock entries, expense claims and journal entries. Use a project-specific cost centre or the project accounting dimension so the P&L can be filtered by project.

:::uae Authority approvals
Fit-out and construction projects in Dubai and Abu Dhabi need approvals from the landlord, the relevant authority (for example Dubai Municipality, Trakhees, DDA or Abu Dhabi DMT) and civil defence. Add them as tasks with expected durations, since they often determine the critical path.
:::

## Related pages

- [Tasks](/projects/tasks)
- [Project costing](/projects/project-costing)

@@ tasks | Tasks, dependencies and Gantt
@summary Break projects into tasks and subtasks, set dependencies and weights, assign people, track progress in list, kanban and Gantt views, and handle recurring tasks.

## Creating tasks

1. From the project click **Tasks › New**, or create from the Gantt view.
2. Enter **Subject**, **Expected Start** and **End Date**, **Expected Time (hours)** and **Priority**.
3. Tick **Is Group** for a parent task with subtasks, and choose a **Parent Task** for children.
4. Under **Depends On**, add tasks that must finish first.
5. Set **Task Weight** if progress is weighted.
6. Assign the task with **Assign To**.

!fig Task form with dependencies, expected time and assignee

## Statuses

| Status | Meaning |
| --- | --- |
| Open | Not started |
| Working | In progress |
| Pending Review | Done, awaiting check |
| Overdue | Past expected end date |
| Completed | Done |
| Template | Part of a project template |
| Cancelled | No longer needed |

## Views

| View | Use |
| --- | --- |
| Gantt | Timeline with dependencies; drag to reschedule |
| Kanban | Cards by status for daily stand-ups |
| Calendar | Tasks by date |
| Tree | Parent and child tasks |

!fig Gantt chart of a fit-out project showing task bars and dependencies

When a task's dates change, dependent tasks can be moved accordingly. DocFlow prevents a task from being completed before the tasks it depends on.

## Progress

Each task has **% Progress**. The project's completion follows the method you chose: count of completed tasks, average progress, or weighted progress.

## Recurring tasks

Tick **Is Recurring** for repeated work such as weekly site safety inspections or monthly reporting. Choose frequency and end date.

## Related pages

- [Timesheets](/projects/timesheets)
- [Project updates](/projects/project-updates)

@@ timesheets | Timesheets and activity costs
@summary Record time against projects and tasks, set costing and billing rates per activity and employee, bill hours to customers and use timesheets for payroll.

## Activity types and costs

| Record | Example |
| --- | --- |
| Activity Type | Design, Site supervision, Consulting, Installation |
| Default rates on activity type | Costing AED 120/h, billing AED 300/h |
| Activity Cost (per employee) | Senior engineer: costing AED 180/h, billing AED 450/h |

Employee-specific activity costs override the defaults.

## Recording time

1. Go to **Projects › Timesheet › New** (or the employee's self-service).
2. Choose the **Employee**.
3. Add rows: activity type, from time and hours, project, task, and **Is Billable**.
4. Rates fill in from activity costs.
5. Submit.

!fig Timesheet with rows for site supervision and design on two projects

Timers on tasks let employees start and stop the clock instead of entering hours.

## Billing hours

| Method | How |
| --- | --- |
| From the timesheet | **Create › Sales Invoice** for billable hours |
| From a sales invoice | **Fetch Timesheet** by project and dates |
| Monthly for many timesheets | Filter by project, select, make invoice |

Billed timesheets are marked so hours are not billed twice.

## Timesheet-based pay

For staff paid by the hour, such as part-time technicians, set up the salary structure with **Salary Slip Based on Timesheet** and an hourly rate component. Payroll then picks up submitted timesheet hours for the period. See [salary structures](/hr-payroll/salary-structure).

## Costs to the project

Submitted timesheets add **costing amount** to the project's labour cost, so project profitability includes staff time even for fixed-price jobs.

:::uae Working hours
UAE Labour Law sets normal working hours at up to 8 per day or 48 per week, reduced during Ramadan. Timesheets above these limits may count as overtime; align with your [overtime](/hr-payroll/overtime) policy.
:::

## Related pages

- [Project costing](/projects/project-costing)
- [Salary structures](/hr-payroll/salary-structure)

@@ project-settings | Project settings
@summary Configure timesheet rules, overlap checks, default activity rates, project naming and the options that affect costing and billing.

!fig Projects settings with timesheet overlap and working hours options

## Projects Settings

| Setting | Recommended |
| --- | --- |
| Ignore User Time Overlap | Off, prevents a user logging two jobs at once |
| Ignore Workstation Time Overlap | Off for manufacturing |
| Ignore Employee Time Overlap | Off |
| Fetch Timesheet in Sales Invoice | On for time-and-materials billing |

## Other settings that affect projects

| Where | Setting |
| --- | --- |
| Accounts Settings / dimensions | Project as an accounting dimension on transactions |
| Selling Settings | Whether invoices require a sales order |
| HR settings | Timesheet-based salary |
| Naming series | Project naming, for example `PRJ-.YYYY.-.###` |
| Activity types | Default costing and billing rates |

## Permissions

Project users see projects they are added to. Give **Projects User** to staff who log time and **Projects Manager** to those who manage projects and see costs.

## Related pages

- [Timesheets](/projects/timesheets)
- [Permissions](/framework/permissions)

@@ project-costing | Project costing and profitability
@summary See every cost and revenue on a project: labour from timesheets, materials, purchases, expense claims and overheads, against budget and billing, and analyse margins.

## Where project costs come from

| Cost | Document | Field |
| --- | --- | --- |
| Labour | Timesheets | Total Costing Amount |
| Materials from stock | Stock entry (material issue) with project | Total Consumed Material Cost |
| Direct purchases | Purchase invoice rows with project | Total Purchase Cost |
| Expenses | Expense claims with project | Total Expense Claim |
| Other | Journal entries with project | Via accounting dimension |

## The costing section

The project form totals these and shows **Gross Margin** = Total Billed − Total Cost, and **Per Gross Margin**.

!fig Project costing section with labour, materials, purchases, billing and margin

## Budgets

Set a budget against the project's cost centre or project dimension with [budgets](/accounting/cost-centres-budgets), with action **Warn** or **Stop** when purchases would exceed it.

## Reports

| Report | Use |
| --- | --- |
| Project Summary | Cost, billing and margin per project |
| Project wise Stock Tracking | Materials issued |
| General Ledger filtered by project | All postings |
| Profitability Analysis by project | P&L per project |

## Work in progress

For long fixed-price projects, revenue recognition under IFRS 15 may require recognising revenue over time. Track costs to date vs estimated total cost and post adjustments at month-end with journal entries; agree the method with your auditor.

## Related pages

- [Milestone billing](/projects/milestone-billing)
- [Cost centres and budgets](/accounting/cost-centres-budgets)

@@ milestone-billing | Milestone and progress billing
@summary Bill projects by milestone, percentage of completion or payment schedule, handle advances and retention, and issue VAT-compliant progress invoices.

## Billing options

| Method | How in DocFlow |
| --- | --- |
| Milestones | Payment schedule on the sales order with dates and percentages |
| Percentage of completion | Sales invoice for the % certified each month |
| Time and materials | [Timesheet billing](/projects/timesheets) |
| Advance + progress | Advance payment, then invoices that allocate it |

## Payment schedule on the sales order

1. Create a sales order for the contract value.
2. Choose **Payment Terms Template**, for example 20% advance, 30% at first fix, 40% at completion, 10% at handover.
3. Each invoice made from the order takes the next portion.

!fig Sales order payment schedule with advance, progress and retention milestones

## Advances

Record the advance with a payment entry; VAT is due on advance payments when received. Allocate the advance in later invoices under **Advances**. See [tax point and advances](/uae-compliance/tax-point).

## Retention

Customers often hold back 5–10% until the defects liability period ends. Invoice the full progress amount and record the retention as a separate receivable (for example via a payment term "Retention" due 12 months later), so ageing shows it correctly.

:::example Example
Fit-out contract AED 1,200,000 + VAT. Advance 20% (AED 240,000) invoiced and paid at start. In month two, 35% is certified: invoice AED 420,000 less 20% advance recovery (AED 84,000) = AED 336,000 + VAT on the taxable amount per your tax point rules, with 10% retention held.
:::

## Related pages

- [Payment terms](/accounting/payment-terms)
- [Sales invoices](/accounting/sales-invoice)

@@ project-updates | Project updates and reporting
@summary Collect regular status updates from the team, send progress reports to management and customers, and keep the project history in one place.

## Project updates

Create a **Project Update** for the project: date, a short summary, and a table of tasks with progress. Team members add their notes. Updates appear on the project timeline.

!fig Project update with progress notes from the team

## Collect progress by email

On the project, tick **Collect Progress** and choose frequency (hourly, twice daily, daily, weekly), time and message. DocFlow emails project users asking "What did you work on today?" and saves replies as project updates.

## Reports for management

| Need | Where |
| --- | --- |
| Portfolio status | Project list with progress, status and dates |
| Overdue work | Delayed Tasks Summary |
| Cost and margin | Project Summary |
| Weekly digest | Auto Email Report of Project Summary |

## Related pages

- [Customer collaboration](/projects/customer-collaboration)
- [Tasks](/projects/tasks)

@@ customer-collaboration | Working with customers on projects
@summary Give customers portal access to see project progress, tasks, timesheets and invoices, receive their comments and approvals, and keep communication on record.

## Portal access

1. Add the customer contact to the project **Users** table with **Welcome email sent** and **View attachments** as needed.
2. The contact becomes a website user with access to the portal.
3. They sign in and see **Projects**, with progress, tasks, timesheets (if allowed), and their invoices and quotations.

!fig Customer portal showing project progress, open tasks and invoices

## What customers can do

| Action | Notes |
| --- | --- |
| View progress and tasks | Read only by default |
| Comment on tasks | Comments appear in DocFlow |
| Download invoices and pay | Payment links if a gateway is configured |
| Raise issues | Through the support portal |

## Good practice

- Decide what customers see: hide internal tasks and costs.
- Keep formal approvals (variations, handover certificates) as signed attachments on the project.
- Use the timeline for all emails so anyone on the team can see the history.

## Related pages

- [Customer portal](/website/portal)
- [Project updates](/projects/project-updates)
