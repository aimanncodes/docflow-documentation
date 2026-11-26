@@ overview | Guides at a glance
@summary Follow one sample company through complete business processes, or start from your role.

The other sections of this manual explain one screen at a time. These guides join them up. Each one follows a sample company through a full process, step by step, with links to the detailed pages.

## Process walkthroughs

| Guide | Entity | Modules used |
| --- | --- | --- |
| [Order to cash](/guides/order-to-cash) | Al Waha Trading LLC | CRM, Selling, Stock, Accounting, VAT Compliance |
| [Procure to pay with an import](/guides/procure-to-pay) | Lulu Pearl Foods FZE | Buying, Stock, Quality, Accounting, VAT Compliance |
| [Month-end close](/guides/month-end-close) | Al Waha Trading LLC | Accounting, Assets, Stock, Human Resources |
| [A VAT quarter](/guides/vat-quarter) | Al Waha Trading LLC | Accounting, VAT Compliance |
| [Monthly payroll](/guides/monthly-payroll) | Saqr Steel Fabrication LLC | Human Resources, Accounting |
| [A fit-out project](/guides/fit-out-project) | Rimal Facilities Management LLC | CRM, Projects, Buying, Accounting |

## Starting points by role

| Role | Guide |
| --- | --- |
| Accountant | [Accountant's guide](/guides/role-accountant) |
| Storekeeper | [Storekeeper's guide](/guides/role-storekeeper) |
| HR officer | [HR officer's guide](/guides/role-hr) |
| Salesperson | [Salesperson's guide](/guides/role-sales) |
| Every employee | [Employee's guide](/guides/role-employee) |

@@ order-to-cash | Order to cash
@summary From a hotel's enquiry in CRM to money in the bank, with every document in between.

**Entity:** Al Waha Trading LLC, Deira. **Customer:** Jumeirah Grand Hotel, a new customer.

## 1. Capture the enquiry as a lead

The hotel's purchasing manager emails asking for prices on two combi ovens and a blast chiller. The salesperson opens **CRM** > **Lead**, clicks **+ New lead** and enters the contact, the organisation, **Source** *Email* and **Territory** *Dubai*. See [Leads](/crm/leads).

## 2. Open a deal

From the lead, the salesperson clicks **Create Opportunity**. On the [Pipeline](/crm/pipeline) the deal appears in its first stage with an amount of about AED 64,000. The salesperson logs calls and notes on the deal page and moves it through the stages. See [Opportunities (deals)](/crm/opportunities).

## 3. Send a quotation

On the deal page, the salesperson clicks **Create Quotation**: two combi ovens at AED 18,500 and one blast chiller at AED 27,000, net AED 64,000, VAT AED 3,200, total AED 67,200, valid for 30 days. The quotation is submitted and emailed. The deal's status becomes **Quotation**. See [From quotation to sales order](/crm/quotation-to-order) and [Quotations](/selling/quotations).

## 4. Confirm the order

The hotel accepts and sends LPO number JGH/PO/2026/0418. On the submitted quotation, the salesperson clicks **Create** > **Sales Order**. The lead becomes a [customer](/selling/customers); accounts add the TRN, the billing address with emirate *Dubai* and 60-day [payment terms](/accounting/payment-terms). The sales order carries the LPO number and a delivery date in 10 days. The deal shows **Converted** and counts as **Won**.

## 5. Check stock and reserve

The ovens are in stock at Al Quoz; the blast chiller is not. The stock team reserves the ovens and a [purchase order](/buying/purchase-order) goes to the supplier for the chiller. See [Stock reservation](/stock/stock-reservation).

## 6. Pick, deliver and install

On delivery day, the storekeeper creates a [pick list](/stock/pick-list), then a [delivery note](/selling/delivery-note) with the oven serial numbers. The driver brings back the stamped copy, which is attached. The technician records an [installation note](/selling/installation-notes).

## 7. Invoice and send the e-invoice

Accounts creates the [sales invoice](/accounting/sales-invoice) from the delivery note. The UAE tax invoice prints in English and Arabic with both TRNs. When e-invoicing is on, DocFlow builds the e-invoice on submit and sends it; the e-invoice panel on the invoice shows **Sent ✓** once the network accepts it. See [E-invoicing](/vat-compliance/e-invoicing).

## 8. Follow up and collect

At day 67 the invoice is 7 days overdue; [dunning](/accounting/dunning) sends a friendly reminder. The hotel pays by bank transfer. Accounts opens **Finance** > **Bank Transaction**, chooses **Receipt** and the type **Receipt from customer**, and allocates the amount to the invoice under **Payment References**. The bank charges of AED 26.25 are booked with **Other Expenses**. See [Bank and Cash Transactions](/accounting/payment-entry) and [Journals](/accounting/journal-entry). The [bank reconciliation](/accounting/bank-reconciliation) matches the receipt the next week.

:::tip Paid by post-dated cheque?
If the hotel hands over a cheque dated next month, record it as a **PDC Received** in **Finance** > **Post-Dated Cheques**. The invoice is settled at once, and you click **Clear** on the cheque date. See [Post-dated cheques](/accounting/post-dated-cheques).
:::

## If something comes back

If one oven is returned damaged, make a **Sales Return** from the invoice with **Return Type** **Goods Return**. For a price correction with no goods moving, use **Invoice Correction**. See [Sales Returns](/selling/sales-returns).

## What you can check at the end

- The sales order shows **Completed**.
- The customer's ledger shows a zero balance.
- Gross profit for the order appears in the **Gross Profit** report. See [Selling reports](/selling/selling-reports).

@@ procure-to-pay | Procure to pay with an import
@summary Buy a container of dates from Saudi Arabia and a container of nuts from Turkey, from request to payment.

**Entity:** Lulu Pearl Foods FZE, Jebel Ali Free Zone. For the full import flow, see [Importing goods end to end](/buying/import-purchases).

## 1. Spot the need

Reorder levels trigger an automatic [material request](/buying/material-request) for Medjool dates and pistachios ahead of Ramadan.

## 2. Get prices

The buyer sends a [request for quotation](/buying/rfq-supplier-quotation) to three suppliers. The comparison shows the best value for dates from a supplier in Al Qassim and for pistachios from a supplier in Gaziantep.

## 3. Raise purchase orders

Two [purchase orders](/buying/purchase-order) are approved through the purchase order workflow: dates in SAR on DAP terms, pistachios in USD on CIF Jebel Ali terms. A 30% advance on the pistachio order is paid from **Finance** > **Bank Transaction** with **Payment** and the type **Advance to supplier**. See [Bank and Cash Transactions](/accounting/payment-entry).

## 4. Track the shipments

The pistachio container is recorded with its bill of lading and ETA. When the documents arrive, the goods are received into **Goods in Transit**. See [Goods in transit](/stock/goods-in-transit).

## 5. Clear customs and receive

The clearing agent files the declaration. The bill of entry number is recorded on the [purchase receipt](/buying/purchase-receipt), the goods pass a [quality inspection](/quality/inspection) for moisture and labelling, and are received into the JAFZA ambient warehouse with batch and expiry dates. See [Customs, HS codes and duty](/buying/customs).

## 6. Add landed costs

A [landed cost voucher](/stock/landed-cost) adds customs duty, clearing charges and transport to the stock value. Import VAT is accounted for in the VAT return, not in stock. See [Reverse charge and imports](/vat-compliance/reverse-charge).

## 7. Enter the supplier invoices

Accounts opens **Buying** > **Purchase Entry** and uses **Get Items From** > **Purchase Receipt**. They enter **Supplier Invoice No** and **Supplier Invoice Date** in the supplier's currency, and the advance is applied. If the supplier's tax invoice came with the bill, they tick **Tax Invoice Received with This Invoice**. If not, the **Tax Invoice Status** stays **Awaiting** until they record it with **Create** > **Tax Invoice Received**. See [Purchase Entry](/buying/purchase-entry).

## 8. Pay the balance

Payments go out from **Finance** > **Bank Transaction** with the type **Payment to supplier**, allocated to the Purchase Entry. The exchange difference on the USD payment is posted automatically. See [Foreign currency transactions](/accounting/multi-currency).

## If goods are rejected

If some cartons fail inspection after the invoice is entered, make a **Purchase Return** from the Purchase Entry with **Create** > **Return / Debit Note**. See [Purchase Returns](/buying/purchase-returns).

## What you can check at the end

- Stock value per carton includes duty and freight.
- The VAT 201 shows the import in box 6 and the recoverable VAT in box 10.
- Both purchase orders show **Completed**.

@@ month-end-close | Month-end close
@summary A practical close for a UAE trading company: day-to-day checks, then the six-step Month-End Closing run.

**Entity:** Al Waha Trading LLC.

Most month-end entries are posted for you by **Finance** > **Month-End Closing**. Your job is to get the month's transactions complete and correct first, then run the close. See [Month-End Closing](/accounting/period-closing).

## Before the run

| Working day | Tasks | Owner |
| --- | --- | --- |
| Day 1 | All sales invoices and Purchase Entries for the month submitted; delivered-not-invoiced list cleared; tax invoices still **Awaiting** chased | Sales, Accounts |
| Day 1 | Payroll submitted, WPS salary file uploaded, bank entry posted | HR, Accounts |
| Day 2 | Bank accounts reconciled; due post-dated cheques cleared | Accounts |
| Day 2 | Stock and Account Value Comparison checked; goods in transit reviewed | Stock, Accounts |
| Day 3 | Accruals and reclassifications posted with **Journal Voucher**; missed expenses posted with **Other Expenses** | Accounts |
| Day 3 | HR provisions checked on **HR Month-End** (optional; the run posts them too) | HR, Accounts |
| Day 4 | Inter-company balances agreed; VAT accounts reconciled | Accounts Manager |
| Day 5 | Month-End Closing run, Corporate Tax draft reviewed, management reports sent | Finance Manager |

## The Month-End Closing run

On **Finance** > **Month-End Closing**, choose the **Entity** and the **Month (any day of it)**, read the preview, choose the **Closing Account** and click **Close Month**. The run posts six steps in order:

1. **Depreciation** for the entity's assets. See [Depreciation](/assets/depreciation).
2. **Exchange Rate Revaluation** of foreign currency balances.
3. **Deferred Accounting**: the month's share of deferred income and expense. See [Deferred revenue and expenses](/accounting/deferred-revenue).
4. **Gratuity, Leave Salary, Scheme Contributions and Air Tickets**: the HR provisions. See [HR month-end provisions](/human-resources/hr-month-end).
5. **Corporate Tax Provision (estimate)**: a draft. The run stops here; check and **Submit** the draft, then click **Close Month** again. See [Corporate Tax](/accounting/corporate-tax).
6. **Period Closing Voucher**: moves profit and loss to the closing account and locks the month.

!fig The Month-End Closing screen with the Entity, Month and Closing Account filled in and the preview listing each step @shot 03-finance/09-month-end-preview.png

If a step stops on an error, fix the cause and click **Close Month** again. Finished steps are kept, so nothing is posted twice.

## Tips

- Months close in order. You cannot close a month before the one before it.
- Once a month is closed, no one can post into it, including HR Month-End. Finish every correction first.
- Turn the checklist above into a [project template](/projects/project-setup) so each month starts with assigned tasks.
- At year end, also count stock and confirm balances with major customers and suppliers before closing the last month.

@@ vat-quarter | A VAT quarter
@summary From daily transactions to filing the VAT 201 in DocFlow and on EmaraTax and paying the FTA.

**Entity:** Al Waha Trading LLC, quarterly tax periods ending March, June, September and December.

## During the quarter

- Every invoice carries a tax template; every customer address has an emirate.
- Supplier invoices go through [Purchase Entry](/buying/purchase-entry). Input VAT is claimed only when the tax invoice is recorded, so chase entries still **Awaiting**.
- Imported services use the [reverse charge](/vat-compliance/reverse-charge) template.
- Advances received are taxed on receipt. See [Tax point](/vat-compliance/tax-point).
- Corrections are made with a **Sales Return** or **Purchase Return** against the original invoice. See [Sales Returns and Purchase Returns](/accounting/credit-debit-notes).
- When e-invoicing is on, check **E-invoices Sent** and **E-invoice Deadlines** weekly and fix anything that **Needs fixing**. See [E-invoice registers and deadlines](/vat-compliance/e-invoicing-registers).

## After the quarter ends

1. Close the last month of the quarter. See [Month-end close](/guides/month-end-close).
2. Check that no [late postings](/vat-compliance/late-postings) are waiting and that tourist refunds are recorded.
3. Open **VAT Compliance** > **Returns & Periods** > **Filing Periods**. Click **Generate periods** if the quarter is not listed yet.
4. Click **VAT 201** on the quarter's row. Read each box; click a box to see the documents behind it.
5. Review a sample of large invoices and all zero-rated sales for evidence.
6. Check errors from earlier periods; correct small ones in this return and disclose large ones. See [Voluntary disclosures and penalties](/vat-compliance/voluntary-disclosure).
7. The finance manager approves the figures.

!fig The VAT 201 of an open period in the FTA layout with the live-figures banner and the File return button @shot 04-vat/03-vat-201.png

## Filing and paying

8. In **Return details**, click **Edit** and fill the signatory details and the EmaraTax box 2 amounts. Save.
9. File the return on EmaraTax before the due date (by default the 28th day after the quarter end).
10. Back in DocFlow, enter the **FTA return number** and **Date of submission**, then click **File return**. The period is locked and its figures are saved.
11. Pay the FTA from **Finance** > **Bank Transaction** with the type **Tax payment**. DocFlow opens a **Journal Voucher**; fill **Tax Type** (VAT), **Tax Period From** and **Tax Period To**. See [Bank and Cash Transactions](/accounting/payment-entry).
12. Save the VAT 201 PDF, the audit file for the period and the EmaraTax acknowledgement in the quarter's folder.

If you find an error after filing, a VAT Administrator can **Reopen** the period with a reason, then you file again. See [Filing periods and the VAT 201](/vat-compliance/vat-return).

@@ monthly-payroll | Monthly payroll
@summary Pay 86 employees on time through WPS, with overtime, leave and advances, and book the month's provisions.

**Entity:** Saqr Steel Fabrication LLC, Mussafah.

## Week 3: prepare

1. Supervisors finalise attendance; managers approve leave and attendance requests, many of them sent from the [Employee App](/human-resources/self-service).
2. Overtime for the month is approved. See [Overtime](/human-resources/overtime).
3. Expense claims due for reimbursement are approved. See [Expense claims](/human-resources/expense-claims).
4. HR checks new joiners, leavers, salary changes and advance repayments, and enters one-off amounts as **Additional Salary**.

## Week 4: run and pay

5. Open **Payroll** > **Payroll Entry**, choose the Entity, the **Payroll Frequency** and the **Payment Account**, and save.
6. Click **Get Employees**, then **Create Salary Slips**.
7. Check a sample of slips and compare the salary register with last month; explain big differences.
8. Click **Submit Salary Slip**. The payroll posts to the books.
9. Click **Make Bank Entry** and submit the bank entry. See [Running payroll](/human-resources/running-payroll).
10. Open **Payroll** > **WPS Salary File**, choose the submitted payroll entry, check the rows and submit. Download the **SIF File** and upload it to the bank. Employees paid in cash are left out. See [The WPS salary file](/human-resources/wps-payroll).

!fig WPS Salary File with the Employees table and the EDR Count and Total Salary @shot 06-hr-payroll/13-wps-file.png

## After payment

11. Employees see their payslips in the **Salary** tab of the Employee App. See [Payslips](/human-resources/ess-payslips).
12. On **Payroll** > **HR Month-End**, post the gratuity, leave salary and air ticket provisions and the scheme contributions with **Post All**. If you skip this, the Month-End Closing posts them. See [HR month-end provisions](/human-resources/hr-month-end).
13. Pay the pension authority for UAE and GCC nationals with **Create Payment** on the same screen. See [Pension contributions](/human-resources/pension).

@@ fit-out-project | A fit-out project
@summary Win, plan, deliver and bill a lobby fit-out with milestones and retention.

**Entity:** Rimal Facilities Management LLC. **Client:** a tower owner in Dubai Marina.

## 1. Win the work

A [deal](/crm/opportunities) for a lobby refurbishment moves through the [Pipeline](/crm/pipeline) and leads to a quotation of AED 1,250,000 plus VAT. The client issues a contract and LPO; a [contract](/crm/contracts) record holds the signed copy, and the quotation becomes a sales order.

## 2. Set up the project

A [project](/projects/project-setup) is created from the sales order with a budget of AED 940,000. Tasks cover design approval, authority permits, demolition, MEP, ceilings, flooring, joinery and handover, with dependencies in the Gantt chart. See [Tasks, dependencies and Gantt](/projects/tasks).

!fig Gantt chart for the lobby fit-out with authority approval tasks

## 3. Buy and track costs

Materials and subcontractors are bought with purchase orders tagged to the project, and their bills are entered as [Purchase Entries](/buying/purchase-entry). Site staff log hours on [timesheets](/projects/timesheets). The [project costing](/projects/project-costing) summary shows actual cost against budget weekly.

## 4. Bill by milestone

The sales order uses a payment terms template: 20% advance, 30% at first fix, 30% at second fix, 10% at handover, 10% retention after 12 months. Each [milestone invoice](/projects/milestone-billing) recovers part of the advance. Receipts are recorded as Bank Transactions or, for cheques, [post-dated cheques](/accounting/post-dated-cheques).

## 5. Close out

At handover, the client signs the completion certificate. The retention invoice is scheduled for 12 months later, and a [maintenance schedule](/support/warranty-maintenance) covers the defects liability period.

@@ role-accountant | Accountant's guide
@summary Where to start and what to do daily, weekly and monthly as an accountant in DocFlow.

## Your workspace

Open **Accounting** > **Finance**. The sidebar holds **Bank Transaction**, **Cash Transaction**, **Post-Dated Cheques**, the **Journals** and **Month-End Closing**, and the cards show due post-dated cheques. Add shortcuts for Sales Invoice and Purchase Entry. See [The Finance workspace](/accounting/finance-workspace).

## Daily

- Enter supplier bills as Purchase Entries and record tax invoices as they arrive.
- Check new sales invoices and their e-invoice status.
- Record receipts and payments as Bank or Cash Transactions; record cheques as post-dated cheques and clear the ones due.
- Answer customer and supplier balance queries from the ledger.

## Weekly

- Bank reconciliation.
- Accounts Receivable review and [dunning](/accounting/dunning).
- Supplier payment run.

## Monthly and quarterly

- [Month-end close](/guides/month-end-close).
- [VAT quarter](/guides/vat-quarter).
- [Statements to customers](/accounting/statement-of-accounts).

## Pages to read first

[Sales invoices](/accounting/sales-invoice), [Purchase Entry](/buying/purchase-entry), [Bank and Cash Transactions](/accounting/payment-entry), [Post-dated cheques](/accounting/post-dated-cheques), [Journals](/accounting/journal-entry), [VAT Settings](/vat-compliance/vat-setup).

@@ role-storekeeper | Storekeeper's guide
@summary Receiving, storing, picking, delivering and counting stock in DocFlow.

## Your workspace

Pin the **Stock** workspace and add shortcuts for Purchase Receipt, Stock Entry, Pick List, Delivery Note and Stock Balance.

## Daily

- Receive goods against purchase orders; record rejections.
- Pick and deliver against sales orders.
- Transfer stock between warehouses.

## Weekly

- Check items below reorder level and expiring batches.
- Review goods in transit.
- Cycle count one area.

## Pages to read first

[Purchase receipts](/buying/purchase-receipt), [Stock entries](/stock/stock-entry), [Pick lists](/stock/pick-list), [Delivery notes](/selling/delivery-note), [Barcodes](/stock/barcode-scanning).

@@ role-hr | HR officer's guide
@summary Employee records, leave, documents and payroll support in DocFlow.

## Your workspace

Open the **Human Resources** tile. Add shortcuts for Employee, Leave Application, Attendance, Expense Claim, Payroll Entry and HR Month-End.

## Daily

- Approve or process leave and attendance corrections.
- Help employees with the Employee App, and link new users to their employee record.
- Update employee records.

## Monthly

- Run [payroll](/guides/monthly-payroll), the WPS salary file and HR month-end.
- Review passports, visas, Emirates IDs and work permits that are **Expiring Soon**. See [UAE employee documents and PRO tasks](/human-resources/visa-pro).
- Onboard joiners and process leavers.

## Pages to read first

[Employees and contracts](/human-resources/employees), [Holidays and leave](/human-resources/attendance-leave), [Running payroll](/human-resources/running-payroll), [Gratuity and final settlement](/human-resources/gratuity), [The Employee App](/human-resources/self-service).

@@ role-sales | Salesperson's guide
@summary Leads, deals, quotations, orders and follow-ups in DocFlow.

## Your workspace

Open **CRM**. The [CRM Dashboard](/crm/crm-dashboard) shows your figures, the [Pipeline](/crm/pipeline) shows your deals by stage, and the leads split view lets you work through leads quickly.

## Daily

- Follow up leads and deals due today; log notes and tasks.
- Send quotations from deals and record customer feedback.
- Convert accepted quotations to sales orders.

## Weekly

- Drag deals to their current stage and update expected closing dates.
- Check delivery status of your orders.
- Review your sales against target.

## Pages to read first

[Leads](/crm/leads), [The Pipeline board](/crm/pipeline), [Opportunities (deals)](/crm/opportunities), [From quotation to sales order](/crm/quotation-to-order), [Sales orders](/selling/sales-order), [Order to cash](/guides/order-to-cash).

@@ role-employee | Employee's guide
@summary Everything an employee does in DocFlow, from the Employee App on your phone.

Every employee uses the **Employee App**. HR gives you a login linked to your employee record. See [The Employee App](/human-resources/self-service).

## Daily

- Check in when you start and check out when you leave, from the **Home** tab. See [Check in and out](/human-resources/ess-check-in).
- If you forgot to check in, send an attendance request. See [Attendance and shift requests](/human-resources/ess-attendance).

## When you need it

- Apply for leave from the **Leaves** tab and watch its status under **My Requests**. See [Apply for leave](/human-resources/ess-leave).
- Claim expenses or ask for an advance from the **Expenses** tab. See [Expense claims and advances](/human-resources/ess-expenses).
- See and download your payslip from the **Salary** tab. See [Payslips](/human-resources/ess-payslips).

## If you manage a team

Approve your team's requests under **Team Requests** on the Home tab. See [Approving requests](/human-resources/ess-approvals).

## If something goes wrong

See [Employee App: common problems](/human-resources/ess-problems).
