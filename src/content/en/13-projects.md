@@ overview | Projects at a glance
@summary Plan work, track time and costs, and bill clients for projects and contracts.

The Projects module suits fit-out contractors, MEP firms, consultancies, IT integrators and any business that delivers work as projects. Every cost (materials, timesheets, expense claims and purchases) can be tagged to a project, so you always know whether a job is making money.

!fig Projects workspace with active projects, overdue tasks and hours logged

## What a project brings together

| Element | Source |
| --- | --- |
| Tasks and milestones | Projects module |
| Labour hours | Timesheets |
| Materials | Stock entries and purchases tagged to the project |
| Expenses | Expense claims |
| Revenue | Sales orders and invoices |

@@ project-setup | Creating projects
@summary Set up a project with dates, budget, customer and team.

## Steps

1. Go to **Projects › Project › New**.
2. Enter the project name, for example "Marina Tower – Lobby Fit-out".
3. Choose the **Customer**, **Expected Start** and **Expected End** dates.
4. Enter the **Estimated Cost** and link the **Sales Order** if there is one.
5. Choose how % complete is calculated: manually, by task completion or by task weight.
6. Add team members under **Users** so they can see and update the project.
7. Save.

!fig Project form with customer, dates, estimated cost and progress method

:::tip Project templates
If you run similar jobs repeatedly, such as annual maintenance contracts, save a **Project Template** with standard tasks. New projects start with the full task list.
:::

@@ tasks | Tasks and milestones
@summary Break the project into tasks, link dependencies and track progress.

## Adding tasks

Open the project and click **Tasks**, or create tasks directly. For each task set:

- **Subject** and **Description**
- **Expected start and end dates**
- **Assigned to**
- **Depends on**: tasks that must finish first
- **Is Milestone**: for billing points or key handovers

!fig Task list for a fit-out project with dependencies

## Views

| View | Best for |
| --- | --- |
| Gantt | Seeing the timeline and dependencies |
| Kanban | Moving tasks through Open, Working, Review and Completed |
| Calendar | Day-to-day planning |

!fig Gantt chart of project tasks over eight weeks

:::uae Authority approvals as tasks
Fit-out and construction projects in the UAE depend on approvals such as Dubai Municipality, Civil Defence, DEWA or ADDC connections and master developer NOCs. Add each one as a task with its own dependency, so delays are visible early.
:::

@@ timesheets | Timesheets and project billing
@summary Record hours, cost labour and invoice clients for time spent.

## Logging time

1. Go to **Projects › Timesheet › New**.
2. Choose the employee.
3. Add rows with the activity type, project, task, start time and hours.
4. Tick **Is Billable** for client-chargeable hours, and set the billing rate.
5. Submit.

!fig Timesheet with billable and non-billable hours across two projects

## Activity costs

Set the **costing rate** and **billing rate** per employee and activity under **Activity Cost**, for example a site engineer's cost of AED 95 an hour and billing of AED 180 an hour.

## Billing time

From a submitted timesheet, click **Create › Sales Invoice**, or on a sales invoice use **Get Timesheets** to bill all unbilled hours for a project.

## Project profitability

The **Project Profitability** report compares billed revenue with labour, material and expense costs for each project.

:::example Example: IT rollout for a school group
An IT integrator rolls out networks across four schools in Al Ain. Engineers log 620 billable hours at AED 160. Materials cost AED 210,000 and expenses AED 8,400. The profitability report shows a 23% margin, below the 30% target, because of unbilled travel days between campuses.
:::

@@ project-settings | Project types, activity types and settings
@summary Classify projects and work so costing and reports are meaningful.

## Project types

Create **Project Types** such as Fit-out, MEP, Annual Maintenance, IT Rollout or Consulting. Reports and dashboards can then compare margins by type.

## Activity types

**Activity Types** describe the kind of work logged on timesheets: Site Supervision, Design, Installation, Travel, Testing and Commissioning. Each can have a default costing and billing rate.

!fig Activity types with default costing and billing rates

## Projects settings

In **Projects Settings**, choose whether timesheets must be linked to a task, whether time can overlap, and whether to ignore employee time overlap for shared crews.

@@ project-costing | Project costing and budgets
@summary Plan the budget for each project and compare it with actual costs as you go.

## Where costs come from

| Cost | Recorded through |
| --- | --- |
| Labour | Timesheets at costing rates |
| Materials | Stock entries and purchase invoices with the project set |
| Subcontractors | Purchase invoices with the project set |
| Expenses | Expense claims with the project set |
| Equipment | Journal entries or asset depreciation allocated to the project |

## Budgets

Create a **Budget** with **Budget Against** = Project. Add expense accounts and amounts, and choose whether to warn or stop when spending exceeds the budget.

!fig Project costing summary showing budget, actual cost and margin

## Tracking

The project form shows totals for costing, billing, material cost and expense claims. The **Project Profitability** and **Budget Variance** reports compare them with revenue and budget.

:::tip Set the project on every line
Make the **Project** field mandatory on purchase orders and stock entries for project-based teams, so no cost lands in general overheads by mistake.
:::

@@ milestone-billing | Milestone and progress billing
@summary Invoice clients at agreed stages, with advances and retention.

Most fit-out and contracting projects in the UAE are billed in stages, not by the hour.

## Billing by milestone

1. On the sales order, set a **Payment Terms Template** with one term per milestone, for example: 20% mobilisation advance, 30% first fix, 30% second fix, 10% handover, 10% retention.
2. When a milestone is reached, create a sales invoice from the sales order for that term.
3. Deduct the proportional advance from each invoice where the contract requires it.

!fig Sales invoice for a progress milestone with advance recovery

## Progress billing by percentage

For contracts billed on measured progress, enter the percentage complete on each invoice line, and DocFlow calculates the amount due against the contract value.

:::uae VAT on advances and retention
VAT is generally due when you receive an advance or issue an invoice, whichever comes first. Retention is usually taxed when it is invoiced or paid. See [Tax point](/uae-compliance/tax-point).
:::

@@ project-updates | Project updates and status reports
@summary Collect regular progress updates from your team and share them with stakeholders.

1. On the project, set **Collect Progress** with a frequency (daily or weekly) and a time.
2. DocFlow emails team members asking what they did. Their replies are stored as **Project Updates**.
3. The project manager reviews them and sends a summary to the client or management.

!fig Project update with team responses and summary

:::tip Weekly report to the client
Combine the Gantt chart, the percentage complete and the latest updates into one printed project report each Thursday, before the UAE weekend.
:::

@@ customer-collaboration | Sharing projects with customers
@summary Let customers follow progress and tasks through the portal.

1. On the project, add the customer's contact under **Users** with **View Attachments** as needed.
2. Invite the contact as a [portal user](/website/portal).
3. The customer signs in and sees the project, its tasks, timesheets (if shared) and progress.

!fig Customer portal view of a project with tasks and progress

:::tip Decide what to share
Share tasks and progress, but keep internal costs, margins and notes private. Only tasks marked as visible to the customer appear on the portal.
:::
