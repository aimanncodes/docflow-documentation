@@ overview | Guides at a glance
@summary Follow one sample company through complete business processes, or start from your role.

The other sections of this manual explain one screen at a time. These guides join them up. Each one follows a sample company through a full process, step by step, with links to the detailed pages.

!fig Guides section listing process walkthroughs and role guides

## Process walkthroughs

| Guide | Company | Modules used |
| --- | --- | --- |
| [Order to cash](/guides/order-to-cash) | Al Waha Trading LLC | CRM, Selling, Stock, Accounting |
| [Procure to pay with an import](/guides/procure-to-pay) | Lulu Pearl Foods FZE | Buying, Stock, Accounting, Compliance |
| [Month-end close](/guides/month-end-close) | Al Waha Trading LLC | Accounting, Assets, Stock, HR |
| [A VAT quarter](/guides/vat-quarter) | Al Waha Trading LLC | Accounting, UAE Compliance |
| [Monthly payroll](/guides/monthly-payroll) | Saqr Steel Fabrication LLC | HR & Payroll, Accounting |
| [A fit-out project](/guides/fit-out-project) | Rimal Facilities Management LLC | CRM, Projects, Buying, Accounting |

## Starting points by role

| Role | Guide |
| --- | --- |
| Accountant | [Accountant's guide](/guides/role-accountant) |
| Storekeeper | [Storekeeper's guide](/guides/role-storekeeper) |
| HR officer | [HR officer's guide](/guides/role-hr) |
| Salesperson | [Salesperson's guide](/guides/role-sales) |

@@ order-to-cash | Order to cash
@summary From a hotel's enquiry to money in the bank, with every document in between.

**Company:** Al Waha Trading LLC, Deira. **Customer:** Jumeirah Grand Hotel, a new customer.

## 1. Capture the enquiry

The hotel's purchasing manager emails asking for prices on two combi ovens and a blast chiller. The salesperson creates a [lead](/crm/leads) with source *Email* and territory *Dubai*, then converts it to an [opportunity](/crm/opportunities) worth about AED 64,000.

## 2. Send a quotation

From the opportunity, the salesperson creates a [quotation](/selling/quotations): two combi ovens at AED 18,500 and one blast chiller at AED 27,000, net AED 64,000, VAT AED 3,200, total AED 67,200, valid for 30 days, with installation as an optional line.

!fig Quotation to Jumeirah Grand Hotel with optional installation line

## 3. Create the customer and confirm the order

The hotel accepts and sends LPO number JGH/PO/2026/0418. The lead becomes a [customer](/selling/customers) with TRN, billing address (emirate: Dubai) and 60-day payment terms. The quotation becomes a [sales order](/selling/sales-order) with the LPO number and a delivery date in 10 days.

## 4. Check stock and reserve

The ovens are in stock at Al Quoz; the blast chiller is not. The stock team reserves the ovens and a purchase order goes to the supplier for the chiller. See [stock reservation](/stock/stock-reservation).

## 5. Pick, deliver and install

On delivery day, the storekeeper creates a [pick list](/stock/pick-list), then a [delivery note](/selling/delivery-note) with the oven serial numbers. The driver brings back the stamped copy, which is attached. The technician records an [installation note](/selling/installation-notes).

!fig Delivery note with serial numbers and stamped copy attached

## 6. Invoice

Accounts creates the [sales invoice](/accounting/sales-invoice) from the delivery note. The UAE tax invoice prints in English and Arabic with both TRNs, and is emailed to the hotel's accounts team.

## 7. Follow up and collect

At day 67 the invoice is 7 days overdue; [dunning](/accounting/dunning) sends a friendly reminder. The hotel pays by bank transfer, net of AED 26.25 charges. Accounts records a [payment entry](/accounting/payment-entry) allocated to the invoice, and the [bank reconciliation](/accounting/bank-reconciliation) matches it the next week.

## What you can check at the end

- The sales order shows **Completed**.
- The customer's ledger shows a zero balance.
- Gross profit for the order appears in the **Gross Profit** report.

@@ procure-to-pay | Procure to pay with an import
@summary Buy a container of dates from Saudi Arabia and a container of nuts from Turkey, from request to payment.

**Company:** Lulu Pearl Foods FZE, Jebel Ali Free Zone.

## 1. Spot the need

Reorder levels trigger an automatic [material request](/buying/material-request) for Medjool dates and pistachios ahead of Ramadan.

## 2. Get prices

The buyer sends a [request for quotation](/buying/rfq-supplier-quotation) to three suppliers. The comparison shows the best value for dates from a supplier in Al Qassim and for pistachios from a supplier in Gaziantep.

## 3. Raise purchase orders

Two [purchase orders](/buying/purchase-order) are approved through the PO workflow: dates in SAR on DAP terms, pistachios in USD on CIF Jebel Ali terms. A 30% advance is paid on the pistachio order.

!fig Purchase order in USD with CIF terms and advance payment schedule

## 4. Track the shipments

The pistachio container is recorded with its bill of lading and ETA. When the documents arrive, the goods are received into **Goods in Transit** ([guide](/stock/goods-in-transit)).

## 5. Clear customs and receive

The clearing agent files the declaration. The bill of entry number is recorded on the [purchase receipt](/buying/purchase-receipt), the goods pass a [quality inspection](/quality/inspection) for moisture and labelling, and are received into the JAFZA ambient warehouse with batch and expiry dates.

## 6. Add landed costs

A [landed cost voucher](/stock/landed-cost) adds customs duty, clearing charges and transport to the stock value. Import VAT is accounted for in the VAT return, not in stock.

## 7. Enter supplier invoices and pay

The supplier invoices are entered in their currencies, with the advance applied. Payments go out by bank transfer; the exchange difference on the USD payment is posted automatically.

!fig Purchase invoice in USD with the advance applied and the balance due

## What you can check at the end

- Stock value per carton includes duty and freight.
- The VAT return shows the import in Box 6 and the recoverable VAT in Box 10.
- Both purchase orders show **Completed**.

@@ month-end-close | Month-end close
@summary A practical five-day close for a UAE trading company.

**Company:** Al Waha Trading LLC.

| Working day | Tasks | Owner |
| --- | --- | --- |
| Day 1 | All sales and purchase invoices for the month submitted; delivered-not-invoiced list cleared | Sales, Accounts |
| Day 1 | Payroll posted, WPS paid | HR, Accounts |
| Day 2 | Bank accounts reconciled; PDCs reviewed | Accounts |
| Day 2 | Stock and Account Value Comparison checked; goods in transit reviewed | Stock, Accounts |
| Day 3 | Accruals and prepayments posted; deferred revenue processed | Accounts |
| Day 3 | Depreciation and gratuity accruals posted | Accounts |
| Day 4 | Foreign currency revaluation; inter-company balances agreed | Accounts Manager |
| Day 4 | VAT accounts reconciled (and return prepared if the quarter ends) | Accounts Manager |
| Day 5 | Management reports reviewed and sent; frozen date moved forward | Finance Manager |

!fig Month-end checklist as a project with tasks and owners

## Tips

- Turn the checklist into a [project template](/projects/project-setup) so each month starts with assigned tasks.
- Keep a **Month-End File** folder in DocFlow with the bank reconciliation statements, the trial balance and the management pack.
- Move the [frozen date](/accounting/accounts-settings) only after the finance manager signs off.

@@ vat-quarter | A VAT quarter
@summary From daily transactions to filing on EmaraTax and paying the FTA.

**Company:** Al Waha Trading LLC, quarterly tax periods ending March, June, September and December.

## During the quarter

- Every invoice carries a tax template; every customer address has an emirate.
- Imported services use the [reverse charge](/uae-compliance/reverse-charge) template.
- Advances received are taxed on receipt ([tax point](/uae-compliance/tax-point)).
- Credit notes are issued with reference to the original invoice.

## After the quarter ends

1. Close the last month of the quarter (see [month-end close](/guides/month-end-close)).
2. Run the **UAE VAT 201** report for the quarter.
3. Reconcile the report with the VAT Output, VAT Input and Reverse Charge account balances.
4. Review a sample of large invoices and all zero-rated sales for evidence.
5. Check errors from earlier periods; correct small ones in this return and disclose large ones ([guide](/uae-compliance/voluntary-disclosure)).
6. The finance manager approves the figures.

!fig VAT 201 report for the quarter with reconciliation notes

## Filing and paying

7. Enter the figures on EmaraTax and submit before the 28th day after the quarter end.
8. Post the settlement journal to VAT Payable.
9. Pay the FTA and record the payment.
10. Save the report, the reconciliation and the EmaraTax acknowledgement in the quarter's folder.

@@ monthly-payroll | Monthly payroll
@summary Pay 86 employees on time through WPS, with overtime, leave and loans.

**Company:** Saqr Steel Fabrication LLC, Mussafah.

## Week 3: prepare

1. Supervisors finalise attendance from the biometric devices; managers approve leave.
2. Overtime for the month is approved ([overtime](/hr-payroll/overtime)).
3. Expense claims due for reimbursement are approved.
4. HR checks new joiners, leavers, salary changes and loan repayments.

## Week 4: run and pay

5. Create the [payroll entry](/hr-payroll/wps-payroll), get employees and create salary slips.
6. Compare the salary register with last month and explain big differences.
7. Submit salary slips; the payroll journal is posted.
8. Generate the WPS SIF file and upload it to the bank.
9. When the bank confirms, record the payment entry.

!fig Payroll entry with salary slip totals and the WPS file action

## After payment

10. Payslips are emailed to employees as password-protected PDFs.
11. The gratuity accrual and air ticket accrual are posted.
12. Pension contributions for UAE nationals are paid to the authority.

@@ fit-out-project | A fit-out project
@summary Win, plan, deliver and bill a lobby fit-out with milestones and retention.

**Company:** Rimal Facilities Management LLC. **Client:** a tower owner in Dubai Marina.

## 1. Win the work

An [opportunity](/crm/opportunities) for a lobby refurbishment leads to a quotation of AED 1,250,000 plus VAT. The client issues a contract and LPO; a [contract](/crm/contracts) record holds the signed copy.

## 2. Set up the project

A [project](/projects/project-setup) is created from the sales order with a budget of AED 940,000. Tasks cover design approval, authority permits, demolition, MEP, ceilings, flooring, joinery and handover, with dependencies in the Gantt chart.

!fig Gantt chart for the lobby fit-out with authority approval tasks

## 3. Buy and track costs

Materials and subcontractors are bought with purchase orders tagged to the project. Site staff log hours on [timesheets](/projects/timesheets). The project costing summary shows actual cost against budget weekly.

## 4. Bill by milestone

The sales order uses a payment terms template: 20% advance, 30% at first fix, 30% at second fix, 10% at handover, 10% retention after 12 months. Each [milestone invoice](/projects/milestone-billing) recovers part of the advance.

## 5. Close out

At handover, the client signs the completion certificate. The retention invoice is scheduled for 12 months later, and a [maintenance schedule](/support/warranty-maintenance) covers the defects liability period.

@@ role-accountant | Accountant's guide
@summary Where to start and what to do daily, weekly and monthly as an accountant in DocFlow.

## Your workspace

Pin the **Accounting** workspace and add shortcuts for Sales Invoice, Purchase Invoice, Payment Entry, Journal Entry and Bank Reconciliation.

!fig Accounting workspace customised for an accountant

## Daily

- Enter supplier invoices and check new sales invoices.
- Record receipts and payments.
- Answer customer and supplier balance queries from the ledger.

## Weekly

- Bank reconciliation.
- Accounts Receivable review and [dunning](/accounting/dunning).
- Supplier payment run.

## Monthly and quarterly

- [Month-end close](/guides/month-end-close).
- [VAT quarter](/guides/vat-quarter).
- Statements to customers.

## Pages to read first

[Sales invoices](/accounting/sales-invoice), [Purchase invoices](/accounting/purchase-invoice), [Payments](/accounting/payment-entry), [Journal entries](/accounting/journal-entry), [Setting up VAT](/uae-compliance/vat-setup).

@@ role-storekeeper | Storekeeper's guide
@summary Receiving, storing, picking, delivering and counting stock in DocFlow.

## Your workspace

Pin the **Stock** workspace and add shortcuts for Purchase Receipt, Stock Entry, Pick List, Delivery Note and Stock Balance.

!fig Stock workspace on a tablet for warehouse use

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

Pin the **HR & Payroll** workspace with shortcuts for Employee, Leave Application, Attendance, Expense Claim and Payroll Entry, and a number card for documents expiring in the next 60 days.

!fig HR workspace with expiring documents card

## Daily

- Approve or process leave and attendance corrections.
- Respond to self-service requests for letters.
- Update employee records.

## Monthly

- Prepare data for [payroll](/guides/monthly-payroll).
- Review visa, Emirates ID and insurance expiries.
- Onboard joiners and process leavers.

## Pages to read first

[Employee records](/hr-payroll/employees), [Attendance and leave](/hr-payroll/attendance-leave), [Visas and PRO tasks](/hr-payroll/visa-pro), [Gratuity](/hr-payroll/gratuity).

@@ role-sales | Salesperson's guide
@summary Leads, quotations, orders and follow-ups in DocFlow.

## Your workspace

Pin the **CRM** and **Selling** workspaces with shortcuts for Lead, Opportunity, Quotation and Sales Order, and a list of your open opportunities.

!fig CRM workspace showing a salesperson's open opportunities

## Daily

- Follow up leads and opportunities due today.
- Send quotations and record customer feedback.
- Convert accepted quotations to sales orders.

## Weekly

- Update opportunity stages and expected closing dates.
- Check delivery status of your orders.
- Review your sales against target.

## Pages to read first

[Leads](/crm/leads), [Opportunities](/crm/opportunities), [Quotations](/selling/quotations), [Sales orders](/selling/sales-order), [Order to cash](/guides/order-to-cash).
