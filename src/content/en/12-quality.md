@@ overview | Quality at a glance
@summary Build a simple quality management system in DocFlow: inspections at receipt, in process and before delivery, goals and reviews, non-conformances and actions, feedback and internal audits.

The Quality module supports ISO 9001-style management without a separate system. Inspections are linked to the stock documents they check, and goals, reviews, procedures and actions keep the system running.

!fig Quality workspace with inspections, open non-conformances and quality goals

## Parts of the module

| Record | Purpose |
| --- | --- |
| [Quality Inspection](/quality/inspection) | Check goods against parameters at receipt, in production or before delivery |
| Quality Inspection Template | Reusable list of parameters and acceptance criteria |
| [Quality Goal](/quality/goals-reviews) | Measurable objective, such as on-time delivery 95% |
| Quality Review | Periodic check of goals |
| Quality Procedure | Documented process in a tree |
| [Non Conformance](/quality/non-conformance) | Record of a problem, its cause and correction |
| Quality Action | Corrective or preventive action |
| [Quality Feedback](/quality/quality-feedback) | Customer or internal feedback with ratings |
| Quality Meeting | Minutes and agenda of management reviews |

## Typical UAE uses

| Industry | Example |
| --- | --- |
| Food | Incoming inspection of dates for moisture and foreign matter; batch release |
| Construction products | Steel thickness and coating tests; mill certificates |
| Trading | Visual checks at receipt; supplier scorecards |
| Facilities management | Customer feedback after maintenance visits |

:::uae Regulated products
Food products need to meet municipality and ESMA/MoIAT requirements; many construction and electrical products need conformity marks. Store certificates as attachments on items, batches or inspections so you can produce them during inspections by authorities.
:::

## Related pages

- [Quality inspection](/quality/inspection)
- [Non-conformance](/quality/non-conformance)

@@ inspection | Quality inspections
@summary Set up inspection templates and make inspections mandatory at purchase receipt, delivery or manufacture, record readings, accept or reject, and block stock movement until passed.

## Inspection templates

1. Go to **Quality › Quality Inspection Template › New**.
2. Add **Parameters**: name, numeric or not, minimum and maximum, or acceptance value.
3. Save, and set the template on the **Item** (Inspection Template field).

| Parameter | Type | Acceptance |
| --- | --- | --- |
| Moisture (%) | Numeric | 15–22 |
| Foreign matter | Non-numeric | None |
| Packaging condition | Non-numeric | Intact |
| Coating thickness (µm) | Numeric | 60–90 |

!fig Quality inspection template for dates with numeric and visual parameters

## Making inspection mandatory

On the item, tick **Inspection Required before Purchase**, **before Delivery**, or both. For manufacturing, set it on the operation or in the stock entry. The document then cannot be submitted without a submitted inspection.

## Recording an inspection

1. In the purchase receipt row, click **Quality Inspection** (or create from the inspection list).
2. **Inspection Type**: Incoming, Outgoing, In Process.
3. Enter **Sample Size** and readings per parameter. DocFlow sets each reading Accepted or Rejected automatically.
4. Set the overall **Status** and submit.

!fig Quality inspection on a purchase receipt row with readings and accepted status

## Rejected goods

If rejected, receive the quantity into the **Rejected Warehouse** on the purchase receipt and return it with a purchase return, or raise a [non-conformance](/quality/non-conformance).

## Reports

**Quality Inspection Summary** shows inspections by item, supplier and status. Rejection rates feed into the [supplier scorecard](/buying/supplier-scorecard).

## Related pages

- [In-process inspection](/quality/in-process-inspection)
- [Purchase receipts](/buying/purchase-receipt)

@@ goals-reviews | Quality goals, procedures and reviews
@summary Set measurable quality objectives, document procedures, review progress regularly and record management review meetings.

## Quality goals

1. Go to **Quality › Quality Goal › New**.
2. Enter the goal, for example "On-time delivery".
3. Add **Objectives** with target and unit: 95%, "Customer complaints per month" target 2.
4. Choose the **Monitoring Frequency** (monthly, quarterly) and the procedure it belongs to.

!fig Quality goal for on-time delivery with objectives and monitoring frequency

## Quality procedures

Document processes as a tree under **Quality Procedure**: Purchasing › Supplier evaluation, Warehouse › Receiving inspection. Each procedure has steps, a process owner and linked goals. This becomes your quality manual inside DocFlow.

## Reviews

DocFlow creates a **Quality Review** at each monitoring date. The owner enters actual values; DocFlow marks each objective passed or failed. Failed objectives lead to a [quality action](/quality/non-conformance).

## Management review meetings

Use **Quality Meeting** to record the agenda (results of reviews, audits, customer feedback, risks) and minutes with decisions and owners.

## Related pages

- [Internal audits](/quality/internal-audits)
- [Quality feedback](/quality/quality-feedback)

@@ non-conformance | Non-conformance and corrective actions
@summary Record problems in products, processes or services, investigate root causes, and track corrective and preventive actions to closure.

## Recording a non-conformance

1. Go to **Quality › Non Conformance › New**.
2. Choose the **Subject**, the **Procedure** involved and the **Process Owner**.
3. Describe the **Details**, the **Corrective Action** taken immediately and the **Preventive Action** to stop it recurring.
4. Set the status and save.

!fig Non-conformance record for damaged cartons with corrective and preventive actions

## Quality actions

A **Quality Action** tracks the work: type **Corrective** or **Preventive**, linked goal, review or feedback, each step with responsible person, date and status. Status becomes Completed when all steps are done.

## Root cause

Use the "5 whys" or a fishbone diagram in the details. Common root causes in warehouses: unclear procedure, missing training, unsuitable packaging, supplier quality.

:::example Example
A hotel rejects a delivery of 30 cartons of nuts because outer cartons are crushed. Lulu Pearl Foods records a non-conformance: correction, replace the goods; root cause, pallets stacked four high in the truck; preventive action, maximum three high and corner boards, procedure updated.
:::

## Related pages

- [Quality inspection](/quality/inspection)
- [Scrap and rework](/manufacturing/scrap-rework)

@@ in-process-inspection | In-process inspection
@summary Check quality during production at specific operations, with job card inspections that must pass before the work moves on.

## Setting up

1. Create an inspection template for the operation, for example "Weld check".
2. On the **Operation** (or BOM operation), set the **Quality Inspection Template**.
3. In manufacturing settings or the job card, require inspection before completing.

## Recording

When the operator completes the job card, they create a **Quality Inspection** of type **In Process** from it, enter readings and submit. The job card cannot be completed until the inspection is accepted.

!fig Job card with an in-process quality inspection for weld quality

## Final inspection

For finished goods, require an inspection on the **Manufacture** stock entry. Rejected units go to the rejected warehouse for [rework](/manufacturing/scrap-rework).

## Benefits

| Benefit | Why |
| --- | --- |
| Catch problems early | Fewer finished goods scrapped |
| Traceability | Inspection linked to the batch and work order |
| Evidence | Records for customers and certification audits |

## Related pages

- [Work orders and job cards](/manufacturing/work-order)
- [Quality inspection](/quality/inspection)

@@ quality-feedback | Customer and internal feedback
@summary Collect structured feedback from customers and staff with templates and ratings, link it to actions, and track satisfaction over time.

## Feedback templates

Create a **Quality Feedback Template** with parameters, for example: Timeliness, Workmanship, Cleanliness, Communication, each rated 1 to 5.

## Recording feedback

1. Go to **Quality › Quality Feedback › New**.
2. Choose **Document Type** (Customer, User) and the party, and the template.
3. Enter ratings and comments, and save.

!fig Quality feedback from a customer after a maintenance visit with ratings

Feedback can also be collected through a [web form](/website/web-forms) sent after a delivery or visit.

## Acting on feedback

Low scores trigger a **Quality Action**. Review average ratings by customer and period in report view to spot trends.

:::tip Ask at the right moment
For facilities management, send a short feedback form right after each [maintenance visit](/support/warranty-maintenance) is completed. Response rates are much higher than with quarterly surveys.
:::

## Related pages

- [Non-conformance](/quality/non-conformance)
- [Support overview](/support/overview)

@@ internal-audits | Internal audits
@summary Plan and record internal quality audits, log findings, and track corrective actions for certification such as ISO 9001.

DocFlow does not need a separate audit tool: use quality procedures, reviews, meetings and actions together.

## Planning audits

1. Create a yearly audit plan as **Quality Meeting** agenda items or as a [project](/projects/project-setup) with one task per audit (procedure, auditor, date).
2. Assign auditors independent of the area they audit.

## Recording findings

| Finding type | Record as |
| --- | --- |
| Major non-conformity | Non Conformance with Quality Action |
| Minor non-conformity | Non Conformance |
| Observation / opportunity for improvement | Quality Action (preventive) |

!fig Internal audit project with tasks per procedure and linked non-conformances

## Closing out

Each finding has an owner and due date. The auditor verifies effectiveness and closes the action. Summarise results in the management review meeting.

## For certification audits

Certification bodies ask for evidence: procedures, records of reviews, audits, non-conformances and actions, training records and supplier evaluations. With everything in DocFlow, you can show them directly.

## Related pages

- [Goals and reviews](/quality/goals-reviews)
- [Training](/hr-payroll/training)
