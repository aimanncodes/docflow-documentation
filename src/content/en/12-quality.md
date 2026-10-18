@@ overview | Quality at a glance
@summary Inspect goods, set quality goals, run reviews and handle non-conformances.

The Quality module supports a quality management system such as ISO 9001, and the product checks that UAE regulators and customers expect, from Dubai Municipality food safety to ESMA/MoIAT conformity for regulated products.

!fig Quality workspace with inspection results and open non-conformances

| Tool | Purpose |
| --- | --- |
| Quality Inspection | Check incoming, in-process and outgoing goods |
| Quality Goal | Measurable objectives, such as on-time delivery of 95% |
| Quality Procedure | Documented processes |
| Quality Review | Periodic check against goals |
| Non Conformance | Record and fix problems |
| Quality Action | Corrective and preventive actions |

@@ inspection | Quality inspections
@summary Define what to check and record results on receipts, deliveries and production.

## Inspection templates

1. Go to **Quality › Quality Inspection Template › New**.
2. Name it, for example "Packed dates – incoming".
3. Add parameters, either numeric with minimum and maximum values or text with acceptable values.

| Parameter | Type | Acceptance |
| --- | --- | --- |
| Moisture content | Numeric | 18% – 24% |
| Foreign matter | Text | None found |
| Pack seal integrity | Text | Intact |
| Arabic/English label present | Text | Yes |

!fig Quality inspection template with numeric and text parameters

## Making inspection mandatory

On the item, tick **Inspection Required before Purchase**, **before Delivery** or both, and choose the template.

## Recording an inspection

1. On the purchase receipt, click **Create › Quality Inspection** for the item.
2. Enter the sample size and readings.
3. DocFlow marks each reading as accepted or rejected and sets the overall status.
4. Submit, then complete the receipt.

!fig Quality inspection with readings marked as accepted and rejected

:::uae Food labelling
Food sold in the UAE must carry labels in Arabic, with the production and expiry dates. Add a label check to every incoming inspection template for imported food.
:::

@@ goals-reviews | Quality goals, procedures and reviews
@summary Set measurable objectives, document processes and review performance.

## Quality goals

Create a **Quality Goal** for each objective, with a measurable target and a review frequency.

| Goal | Target | Review |
| --- | --- | --- |
| On-time delivery | 95% of orders | Monthly |
| Incoming rejection rate | Below 2% | Monthly |
| Customer complaints | Fewer than 5 a quarter | Quarterly |

## Procedures

Write each process as a **Quality Procedure** with its steps, linked to the responsible role. Procedures can be nested, for example "Purchasing › Supplier evaluation".

## Reviews

On the review date, DocFlow creates a **Quality Review**. Record the actual result for each goal, mark it as passed or failed, and add notes.

!fig Quality review with actual figures against each goal

@@ non-conformance | Non-conformance and actions
@summary Record problems, find the root cause and track corrective actions.

## Recording a non-conformance

1. Go to **Quality › Non Conformance › New**.
2. Describe the problem, the procedure it relates to and how it was found.
3. Record the **Corrective Action** and **Preventive Action**.
4. Track the status until it is closed.

!fig Non-conformance record with corrective and preventive actions

:::example Example: wrong coating thickness
An inspection at Saqr Steel finds powder coating at 45 microns against a 60-micron requirement on a batch of beams for a customer in Dubai South. The non-conformance records the cause (a worn spray nozzle), the correction (recoat the batch) and the prevention (a weekly nozzle check in the maintenance plan).
:::

## Quality meetings

Record management review meetings with **Quality Meeting**: the agenda, attendees and minutes, linked to the goals and actions discussed.

@@ in-process-inspection | In-process and final inspection
@summary Check quality during production, not only at receipt and dispatch.

## Inspection on job cards

On a BOM operation, set a **Quality Inspection Template**. When the job card for that operation is completed, the operator must record an inspection before moving on.

!fig Job card with a linked quality inspection for weld checks

## Final inspection

Tick **Inspection Required before Delivery** on the finished item. The delivery note cannot be submitted until a passing inspection exists.

## Rejected quantities

If the inspection fails, record rejected quantities on the job card. They can go to a [rework](/manufacturing/scrap-rework) work order or to scrap.

:::example Example: weld checks
Saqr Steel checks weld penetration and dimensions on the first, tenth and last bay of every work order. Each check is an in-process inspection on the welding job card, so the quality history follows the batch.
:::

@@ quality-feedback | Customer and supplier feedback
@summary Collect structured feedback and turn complaints into actions.

1. Create a **Quality Feedback Template** with parameters, for example on-time delivery, product condition, documentation and communication, each rated 1–5.
2. Create **Quality Feedback** records for a customer or supplier, manually or automatically after a delivery.
3. Low scores can trigger a **Non Conformance** or a **Quality Action**.

!fig Quality feedback with ratings for each parameter

:::tip Link feedback to support
Customer complaints raised as [support issues](/support/issues) can be linked to quality feedback, so the quality team sees patterns across tickets.
:::

@@ internal-audits | Internal audits
@summary Plan and record internal audits of your procedures.

1. Create an audit **Quality Procedure** checklist for each area, such as purchasing, warehousing or production.
2. Schedule audits as **Quality Review** records with the auditor and date.
3. During the audit, record findings against each procedure step.
4. Raise a **Non Conformance** for each finding, with an owner and due date.
5. Review open findings in the management review meeting.

!fig Internal audit review with findings linked to non-conformances

:::uae Certification and licensing audits
External certification bodies, municipality inspectors and free zone authorities may ask for evidence of internal audits. Keep the records and attached evidence in DocFlow, ready to show.
:::
