@@ overview | UAE compliance at a glance
@summary How DocFlow supports VAT, Corporate Tax, excise, customs, e-invoicing, AML and record-keeping in the UAE, with a calendar of what is due when.

This section brings together the tax and regulatory rules that affect UAE businesses, and explains how to set DocFlow up so the figures you need for the Federal Tax Authority (FTA) and other authorities come straight from your transactions.

!fig UAE compliance workspace with VAT summary, return status and upcoming deadlines

## What this section covers

| Area | Pages |
| --- | --- |
| VAT setup and treatment | [Setting up VAT](/uae-compliance/vat-setup), [Zero-rated and exempt](/uae-compliance/zero-rated-exempt), [Reverse charge](/uae-compliance/reverse-charge), [Designated Zones](/uae-compliance/designated-zones), [Tax point](/uae-compliance/tax-point) |
| VAT special schemes | [Bad debt relief](/uae-compliance/bad-debt-relief), [Profit margin scheme](/uae-compliance/profit-margin-scheme), [Tourist refunds](/uae-compliance/tourist-refund) |
| VAT returns | [The VAT 201 return](/uae-compliance/vat-return), [Correcting returns](/uae-compliance/voluntary-disclosure) |
| Other taxes | [Corporate Tax](/uae-compliance/corporate-tax), [Transfer pricing](/uae-compliance/transfer-pricing), [Excise tax](/uae-compliance/excise-tax), [Customs](/uae-compliance/customs) |
| Invoicing | [E-invoicing](/uae-compliance/e-invoicing) |
| Corporate compliance | [UBO register](/uae-compliance/ubo-register), [AML for dealers](/uae-compliance/aml-goaml) |
| Records | [Records and audit](/uae-compliance/records-audit) |

## A compliance calendar

| When | Task |
| --- | --- |
| Every month | Reconcile VAT accounts; check invoices without tax templates |
| 28 days after each tax period | File the VAT return and pay |
| Every quarter | Review errors; disclose if over AED 10,000 in tax |
| Each payroll | Pay salaries through WPS |
| Year end | Close the books; prepare Corporate Tax workings |
| 9 months after year end | File the Corporate Tax return and pay |
| On any ownership change | Update the UBO register |
| Before your e-invoicing date | Onboard and test e-invoicing |

See the [VAT quarter walkthrough](/guides/vat-quarter) for one complete example.

:::warning This is product guidance, not tax advice
Tax rules and rates change. Use this section to set DocFlow up, and confirm your treatment with a registered tax agent or the FTA's published guidance.
:::

@@ vat-setup | Setting up VAT
@summary Register your TRN, create VAT accounts, tax templates, tax categories and rules, and make sure every document carries the right treatment.

## Key facts

| Item | Rule |
| --- | --- |
| Standard rate | 5% |
| Mandatory registration | Taxable supplies and imports above AED 375,000 in the past 12 months, or expected in the next 30 days |
| Voluntary registration | Supplies or expenses above AED 187,500 |
| Tax periods | Usually quarterly; some businesses file monthly |
| Return and payment deadline | 28 days after the end of the tax period |
| TRN | 15 digits, printed on every tax invoice |

## Step 1: the company's TRN

Open your **Company** and enter the TRN in **Tax ID**. If you are part of a **VAT group**, enter the group's TRN on every member company.

## Step 2: VAT accounts

Create these under *Duties and Taxes* (liabilities) and *VAT Recoverable* (assets), with **Account Type = Tax**:

| Account | Use |
| --- | --- |
| VAT Output 5% | VAT on sales |
| VAT Input 5% | Recoverable VAT on purchases |
| VAT Reverse Charge Output | VAT on imported services and deferred import VAT |
| VAT Reverse Charge Input | The matching recoverable side |
| VAT Payable / Refundable | Settlement with the FTA |
| VAT Non-recoverable (optional) | Blocked input VAT, if you track it separately |

## Step 3: tax templates

| Template | Type | Rows |
| --- | --- | --- |
| UAE VAT 5% | Sales | VAT Output 5% on net total |
| UAE VAT 5% (inclusive) | Sales, retail | VAT Output 5%, included in rate |
| UAE Zero Rated | Sales | 0% row (for reporting) |
| UAE Exempt | Sales | 0% row (for reporting) |
| UAE Out of Scope | Sales | None |
| UAE VAT 5% Input | Purchases | VAT Input 5% |
| UAE Reverse Charge | Purchases | Output 5% (deduct) and Input 5% (add) |
| UAE Blocked Input | Purchases | VAT added to the expense cost |

!fig Sales taxes and charges template for UAE VAT 5%

## Step 4: tax categories and tax rules

**Tax Categories** let DocFlow choose a template automatically.

| Tax Category | Set on | Template it maps to |
| --- | --- | --- |
| UAE Standard | Most customers and suppliers | UAE VAT 5% / Input |
| Export / Overseas | Customers outside the GCC | UAE Zero Rated |
| Overseas Supplier | Suppliers outside the UAE | UAE Reverse Charge |
| Designated Zone | Parties in a Designated Zone | Depends on the supply |
| VAT Group Member | Group companies in your VAT group | UAE Out of Scope |

Create **Tax Rules** that pick the template by tax category, customer group, billing country or item group. Documents then get the right template without anyone choosing it.

## Step 5: item tax templates

For items that are always zero-rated or exempt, add an **Item Tax Template** on the item. The line uses that rate even when the document's template is standard.

## Step 6: addresses

The VAT return splits standard-rated sales by emirate. Make sure every UAE customer address has its **Emirate** filled in, and that your own branch addresses do too.

## Step 7: print formats

Use the **UAE Tax Invoice** format for full tax invoices, **UAE Simplified Tax Invoice** for retail, and **UAE Tax Credit Note** for credit notes.

## VAT groups

If several companies under common control are registered as one VAT group:

- All members use the group TRN on invoices.
- Supplies between members are generally outside the scope of VAT; use the out-of-scope template between them.
- One VAT return is filed for the group. Run the VAT 201 report for all member companies together.

## Common problems

:::details VAT is not added on an invoice
The document has no template, or the customer's tax category maps to a zero or exempt template. Check the tax category and tax rules.
:::

:::details Sales appear under the wrong emirate on the return
The customer's address has no emirate or the wrong one. Correct the address; the report reads it from each invoice.
:::

## Related pages

- [Zero-rated and exempt supplies](/uae-compliance/zero-rated-exempt)
- [Chart of accounts](/accounting/chart-of-accounts)
- [The VAT 201 return](/uae-compliance/vat-return)

@@ zero-rated-exempt | Zero-rated, exempt and out-of-scope supplies
@summary Understand the difference, apply each correctly in DocFlow and keep the evidence the FTA expects.

## The difference

| | Zero-rated (0%) | Exempt | Out of scope |
| --- | --- | --- | --- |
| VAT charged | 0% | None | None |
| Input VAT on related costs recoverable? | Yes | No | Depends |
| On the VAT return | Box 4 | Box 5 | Not reported |
| Counts towards registration threshold | Yes | No | No |

## Common zero-rated supplies

- Exports of goods outside the GCC implementing states, with evidence of export
- Exports of services to non-residents outside the UAE, subject to conditions
- International transport of passengers and goods, and related services
- The first supply of residential buildings within three years of completion
- Certain education services and related goods
- Certain preventive and basic healthcare services and related goods
- Investment precious metals (gold, silver, platinum of 99% purity or more)
- Crude oil and natural gas
- Supply of certain means of transport, aircraft and vessels

## Common exempt supplies

- Certain financial services, such as margin-based services and life insurance
- Residential buildings, other than the first supply, by sale or lease
- Bare land
- Local passenger transport

## Setting it up

1. Use the **UAE Zero Rated** and **UAE Exempt** templates on documents, or tax rules that apply them by tax category.
2. For items that are always zero-rated or exempt, set an item tax template on the item.
3. The VAT 201 report places them in Box 4 and Box 5.

!fig Sales invoice for an export to Oman using the zero-rated template

:::uae Evidence for zero-rated exports
To zero-rate an export of goods, keep official and commercial evidence that the goods left the UAE within the required time, such as the customs exit certificate, airway bill or bill of lading, and the commercial invoice. Attach them to the delivery note or sales invoice in DocFlow.
:::

## Mixed businesses: apportioning input VAT

If you make both taxable and exempt supplies, input VAT on costs that relate to both cannot be fully recovered. Tag costs by activity with a cost centre or dimension, and agree the apportionment method with your tax adviser. Record the irrecoverable part as an expense.

## Common problems

:::details An export was invoiced with 5% VAT
Issue a credit note for the VAT, re-invoice with the zero-rated template, and keep the export evidence. If the period is filed, correct it in the next return or by disclosure.
:::

## Related pages

- [Delivery notes and export evidence](/selling/delivery-note)
- [Customs](/uae-compliance/customs)

@@ reverse-charge | Reverse charge
@summary Account for VAT on imported services, imported goods and certain domestic supplies, with the accounting and return boxes explained.

Under the **reverse charge**, the buyer (you) accounts for VAT instead of the supplier. You record output VAT and, if you can recover it, input VAT on the same purchase, so the net effect is usually zero.

## When it applies

| Situation | Notes |
| --- | --- |
| Services bought from suppliers outside the UAE | Software, consultancy, advertising, subscriptions |
| Goods imported into the UAE by a VAT-registered importer | Import VAT deferred to the VAT return |
| Certain domestic supplies between registered businesses | Gold and diamonds between registered traders; some hydrocarbons; certain electronic devices in the domestic reverse charge scheme |

## In DocFlow

1. On the purchase invoice, choose the **UAE Reverse Charge** template (or let a tax rule apply it for overseas suppliers).
2. DocFlow posts VAT to **Reverse Charge Output** (payable) and **Reverse Charge Input** (recoverable).
3. For imported goods through customs, record the customs value and import VAT on the purchase receipt or a journal tagged as import, so it reaches Box 6.
4. The VAT 201 report fills Box 3 (supplies subject to reverse charge), Box 6 (imports) and Box 10 (recoverable reverse charge VAT).

!fig Purchase invoice for imported services with the reverse charge template

## Behind the scenes

Online advertising of USD 2,000 (AED 7,345) from an overseas platform:

| Account | Debit | Credit |
| --- | --- | --- |
| Advertising | 7,345 | |
| VAT Reverse Charge Input | 367.25 | |
| VAT Reverse Charge Output | | 367.25 |
| Creditors – overseas supplier | | 7,345 |

:::example Example: a software subscription from Ireland
Lulu Pearl Foods pays EUR 1,200 a year for software. With the reverse charge template, DocFlow records 5% output and input VAT on the AED value. The net VAT cost is zero, and both amounts appear on the return.
:::

## Domestic reverse charge for supplies to registered businesses

When you sell gold, diamonds or other goods under the domestic reverse charge to a registered buyer, issue the tax invoice without VAT and state that the buyer must account for VAT. Use a template that records the sale without output VAT, and keep the buyer's TRN and declaration.

## Common problems

:::details The reverse charge shows as a cost
The template has only the output row. It needs both output (deducted) and input (added) rows.
:::

:::details Box 3 is empty
The reverse charge rows are not mapped to the reverse charge accounts used by the report.
:::

## Related pages

- [Purchase invoices](/accounting/purchase-invoice)
- [Importing goods](/buying/import-purchases)
- [Customs](/uae-compliance/customs)

@@ designated-zones | Designated Zones and free zones
@summary Understand which free zones are Designated Zones for VAT, how goods and services are treated, and how to set DocFlow up.

Not every free zone is a **Designated Zone** for VAT. Designated Zones are specific areas listed by Cabinet Decision that meet security and customs control requirements. For certain supplies of **goods**, they are treated as outside the UAE for VAT purposes. Services are treated normally.

## Main rules

| Supply | VAT treatment |
| --- | --- |
| Goods sold between businesses in Designated Zones, staying in a zone, not consumed | Outside the scope |
| Goods sold from a Designated Zone to the mainland | Treated as an import into the UAE |
| Goods sold from the mainland to a Designated Zone | Normally standard-rated; zero-rating may apply if exported onwards |
| Goods consumed within the Designated Zone | Standard-rated |
| Services supplied within or into a Designated Zone | Standard-rated as normal |
| Water and energy supplied in a Designated Zone | Standard-rated |

## Setting it up in DocFlow

1. Add a custom field **Is Designated Zone** on addresses, and record the zone.
2. Create a tax category **Designated Zone** and a template **UAE Designated Zone – Out of Scope**.
3. Create tax rules that apply the out-of-scope template when both your warehouse address and the customer's address are in Designated Zones and the line is a good that is not consumed.
4. Keep the standard template for services and for goods consumed in the zone.

!fig Tax rule applying the Designated Zone template to qualifying sales

## Your own free zone company

If your company is in a Designated Zone, you still register for VAT if you exceed the threshold, file returns, charge VAT on services and on goods to the mainland, and keep records. Moving goods from your zone warehouse to a mainland customer is an import for VAT and customs.

:::warning The conditions are strict
Designated Zone treatment depends on the zone being listed, on security and customs controls, and on the goods not being used or consumed in the zone. Have your tax adviser confirm the treatment for your supplies.
:::

## Related pages

- [Warehouses](/stock/warehouses)
- [Customs](/uae-compliance/customs)

@@ vat-return | The VAT 201 return
@summary Prepare the VAT return from DocFlow box by box, reconcile it to your accounts, file it on EmaraTax and post the settlement.

:::note Before you start
All invoices for the period must be submitted, bank accounts reconciled, and any errors from earlier periods identified.
:::

## Running the report

1. Go to **UAE Compliance › UAE VAT 201**.
2. Choose the **Company** (or all companies in a VAT group) and the tax period dates.
3. DocFlow fills each box from submitted invoices, credit notes, debit notes and tagged journals.
4. Click any box to drill down to the documents behind it.

!fig UAE VAT 201 report with boxes 1a to 14 for Q1 2026

## How the boxes are filled

| Box | Description | Source in DocFlow |
| --- | --- | --- |
| 1a–1g | Standard-rated supplies in Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah | Sales with VAT 5%, by the emirate on the customer address |
| 2 | Tax refunds provided to tourists | Tourist refund scheme invoices |
| 3 | Supplies subject to reverse charge | Purchases with the reverse charge template (services and domestic reverse charge) |
| 4 | Zero-rated supplies | Sales with the zero-rated template |
| 5 | Exempt supplies | Sales with the exempt template |
| 6 | Goods imported into the UAE | Imports with deferred VAT |
| 7 | Adjustments to goods imported | Manual adjustments |
| 8 | Totals | Calculated |
| 9 | Standard-rated expenses | Purchases with VAT input, minus blocked VAT |
| 10 | Supplies subject to reverse charge (recoverable) | Reverse charge input VAT |
| 11 | Totals | Calculated |
| 12–14 | Total due tax, recoverable tax and net VAT payable or refundable | Calculated |

Each box shows the taxable amount, the VAT amount and, where relevant, adjustments from credit notes.

## Reconciling before you file

1. Compare the report's output VAT with the **VAT Output 5%** and reverse charge output account movements for the period.
2. Compare input VAT with **VAT Input 5%** and reverse charge input.
3. Investigate differences: journals posted directly to VAT accounts, invoices without templates, documents dated outside the period.
4. Check that every standard-rated sale has an emirate.
5. Review zero-rated sales for export evidence.
6. Record the reconciliation and get the finance manager's approval.

## Filing

1. Log in to **EmaraTax** and open the VAT return for the period.
2. Enter the figures box by box from DocFlow.
3. Submit before the deadline (28 days after the period end), and save the acknowledgement.

## Settlement

Post a journal to clear output and input VAT into **VAT Payable / Refundable**:

| Account | Debit | Credit |
| --- | --- | --- |
| VAT Output 5% | 182,400 | |
| VAT Input 5% | | 121,350 |
| VAT Payable | | 61,050 |

Pay the FTA and record the payment against VAT Payable. For refunds, record the FTA as the party and the refund receipt when it arrives.

:::uae Penalties
Late filing and late payment carry administrative penalties. Set a [notification](/getting-started/notifications) 10 days before each filing deadline.
:::

## Common problems

:::details The report total differs from the VAT accounts
Look for journals posted directly to VAT accounts, invoices without a tax template, or documents dated outside the period.
:::

:::details A box shows a negative amount
Credit notes in the period exceed sales in that category. Check that credit notes are linked to the right original invoices.
:::

## Related pages

- [Tax point](/uae-compliance/tax-point)
- [Correcting VAT returns](/uae-compliance/voluntary-disclosure)
- [VAT quarter walkthrough](/guides/vat-quarter)

@@ corporate-tax | Corporate Tax
@summary Prepare for UAE Corporate Tax from your DocFlow accounts: registration, rates, reliefs, adjustments, accruals and the year-end computation.

UAE Corporate Tax applies to financial years starting on or after 1 June 2023. It is calculated on the taxable income of each tax period, which starts from the accounting profit in your financial statements.

## Key facts

| Item | Rule |
| --- | --- |
| Rate | 0% on taxable income up to AED 375,000; 9% above that |
| Qualifying Free Zone Persons | 0% on qualifying income and 9% on other income, if all conditions are met |
| Small Business Relief | Eligible resident businesses with revenue up to AED 3 million can elect relief for tax periods ending on or before 31 December 2026 |
| Registration | Required for all taxable persons, including free zone persons |
| Return and payment | Within 9 months of the end of the tax period |
| Records | Keep for 7 years after the end of the tax period |
| Accounting standard | Financial statements prepared under IFRS (or IFRS for SMEs where allowed) |

## Setting up DocFlow for Corporate Tax

1. Make sure your [fiscal year](/organization/fiscal-year) matches your tax period.
2. Create accounts: **Corporate Tax Expense**, **Corporate Tax Payable**, and, if you account for deferred tax, **Deferred Tax Asset/Liability**.
3. Create an accounting dimension or separate accounts to tag **non-deductible** and **partly deductible** expenses.
4. Create a **Related Party** dimension for [transfer pricing](/uae-compliance/transfer-pricing).
5. For Qualifying Free Zone Persons, tag income as **qualifying** or **non-qualifying**, for example with a dimension on sales.

## Common adjustments

| Adjustment | Typical treatment | How to track in DocFlow |
| --- | --- | --- |
| Client entertainment | Only 50% deductible | Separate account |
| Fines and penalties | Not deductible | Separate account |
| Donations to non-qualifying bodies | Not deductible | Separate account |
| Corporate Tax itself | Not deductible | Corporate Tax Expense account |
| Interest above the limits | Restricted under the interest limitation rules | Interest accounts by lender |
| Related party transactions | Must be at arm's length | Related Party dimension |
| Exempt dividends and gains | Excluded if conditions are met | Separate income accounts |
| Depreciation | Generally follows the accounts | Asset register |

!fig Profit and loss with a non-deductible expense dimension filter

## A simple computation

| Line | Source |
| --- | --- |
| Accounting net profit | Profit and Loss for the tax period |
| Add: non-deductible and partly deductible expenses | Tagged accounts |
| Less: exempt income | Tagged income accounts |
| Transfer pricing adjustments | Related party analysis |
| Less: tax losses brought forward (within limits) | Prior-year workings |
| Taxable income | Result |
| Tax: 0% up to AED 375,000, 9% above | Calculated |

:::example Example: computing tax
Al Waha Trading's accounting profit for 2026 is AED 1,480,000. It adds back AED 40,000 (half of AED 80,000 client entertainment) and AED 12,500 in fines. Taxable income is AED 1,532,500. Tax is 9% × (1,532,500 − 375,000) = AED 104,175.
:::

## Accruing tax during the year

Accrue Corporate Tax monthly or quarterly with a journal (debit Corporate Tax Expense, credit Corporate Tax Payable), so the year-end charge is not a surprise. At year end, true up to the final computation.

## Related pages

- [Fiscal years](/organization/fiscal-year)
- [Year-end closing](/accounting/period-closing)
- [Transfer pricing](/uae-compliance/transfer-pricing)

@@ e-invoicing | E-invoicing
@summary The UAE e-invoicing deadlines, the data your invoices must carry, and how DocFlow, as an accredited provider, takes you from onboarding to go-live.

The UAE is moving business-to-business (B2B) and business-to-government (B2G) invoicing to a structured electronic format. Invoices travel between accredited service providers over a Peppol-based network, and tax data is reported to the FTA. The rollout is set out in Ministerial Decisions No. 243 and 244 of 2025, as amended by Ministerial Decision No. 66 of 2026.

:::uae DocFlow is your accredited provider
DocFlow is an Accredited Service Provider (ASP) approved by the Ministry of Finance (accreditation 181172). You do not need to appoint a separate provider. Invoices, credit notes and debit notes issued in DocFlow are sent, received and reported through the same platform.
:::

## Key dates

| Date | What happens | Who it applies to |
| --- | --- | --- |
| 1 July 2026 | Voluntary adoption opens | Any business that wants to go live early |
| 30 October 2026 | Deadline to appoint an accredited provider | Businesses with annual revenue of AED 50 million or more |
| 1 January 2027 | E-invoicing becomes mandatory (Phase 1) | Businesses with annual revenue of AED 50 million or more |
| 31 March 2027 | Deadline to appoint an accredited provider | Businesses below AED 50 million, and government entities |
| 1 July 2027 | E-invoicing becomes mandatory (Phase 2) | Businesses below AED 50 million |
| 1 October 2027 | E-invoicing becomes mandatory | Government entities |

:::example Example: which phase are you in?
Al Waha Trading LLC had revenue of AED 64 million last year, so it falls into Phase 1. It must confirm its provider by 30 October 2026 and issue e-invoices from 1 January 2027. Rimal Facilities Management LLC, with AED 18 million in revenue, falls into Phase 2 and has until 1 July 2027.
:::

## What changes for your team

- For in-scope transactions, a PDF emailed to the customer no longer counts as a valid invoice.
- Each invoice must carry the mandatory data fields set by the Ministry of Finance.
- Credit notes and debit notes follow the same electronic route.
- Your customers and suppliers must be reachable on the network, so their TRN and details must be correct.
- Invoices you receive from suppliers arrive electronically and can be matched to purchase orders and receipts.

## Data DocFlow checks on each invoice

| Area | Typical mandatory data |
| --- | --- |
| Seller | Legal name, TRN, address |
| Buyer | Legal name, TRN (if registered), address |
| Invoice | Number, issue date, type (invoice, credit note, debit note), currency |
| Lines | Description, quantity, unit code, unit price, net amount, VAT category and rate |
| Totals | Net total, VAT total, payable amount, VAT in AED |
| References | Purchase order, original invoice (for credit notes) |

## Getting ready in DocFlow

1. Check that every customer and supplier has a valid TRN and a complete address, including the emirate.
2. Complete item details: unit of measure codes, item classification and tax category.
3. Keep invoice numbering consistent with a [naming series](/framework/naming-series) per branch or invoice type.
4. Switch on **E-Invoicing Settings** for your company and complete onboarding.
5. Run the **E-Invoice Readiness** report and fix invoices and parties with missing data.
6. Send test invoices during the voluntary window, before your mandatory date.

!fig E-invoice readiness report highlighting customers without a TRN

## Invoice statuses

| Status | Meaning |
| --- | --- |
| Pending | Submitted in DocFlow, waiting to be sent |
| Sent | Delivered to the buyer's provider |
| Accepted | Validated and reported |
| Rejected | Failed validation; correct and resend |
| Received | Incoming invoice from a supplier |

:::tip Go live early
The voluntary window from 1 July 2026 is the safest time to switch. You can fix data gaps and train your team before penalties apply.
:::

## Related pages

- [Sales invoices](/accounting/sales-invoice)
- [Credit and debit notes](/accounting/credit-debit-notes)
- [Customers](/selling/customers)

@@ records-audit | Records, audits and FTA requests
@summary Keep the records UAE tax law requires, prepare the FTA Audit File, and respond quickly and confidently to an audit.

## How long to keep records

| Record type | Minimum period |
| --- | --- |
| VAT records, general | 5 years after the end of the tax period |
| VAT records for real estate | 15 years |
| Corporate Tax records | 7 years after the end of the tax period |
| Excise tax records | 5 years |
| Employment records | As required by labour law and your policies |

DocFlow keeps every submitted and cancelled document, with its version history and attachments, so nothing needs to be printed and filed.

## What the FTA may ask for

- Tax invoices, credit notes and debit notes issued and received
- Import and export documents
- General ledger, trial balance and financial statements
- Reconciliations of VAT returns to the accounts
- Stock records and asset registers
- Contracts and agreements for significant transactions

## The FTA Audit File (FAF)

During an audit, the FTA may request data in the **FTA Audit File** format.

1. Go to **UAE Compliance › FTA Audit File**.
2. Choose the company and the period.
3. Generate and download the file. It contains company information, purchase and supply listings, and general ledger entries.

!fig FTA audit file generation for a selected tax period

## Audit trail features

| Feature | What it shows |
| --- | --- |
| Version history | Who changed what and when on each document |
| Immutable ledger | Submitted documents cannot be edited, only cancelled or corrected |
| Access log | Who viewed or exported sensitive reports |
| Cancelled documents | Remain visible, explaining gaps in numbering |
| Attachments | Supporting documents linked to each record |

:::tip Assign an audit coordinator
Give one person in finance responsibility for audits, and give external auditors the read-only **Auditor** role so they can review data safely.
:::

## Related pages

- [Version history and audit logs](/framework/audit-logs)
- [Backups and export](/getting-started/backups-export)

@@ tax-point | Tax point and VAT on advances
@summary When VAT becomes due for goods, services, advances, continuous supplies and deposits, and how DocFlow records each.

The **tax point** (date of supply) is when VAT becomes due. VAT must be reported in the tax period that includes it.

## The basic rule

For most supplies, the tax point is the **earliest** of:

| Event | Example |
| --- | --- |
| Goods delivered or made available, or service completed | Delivery on 28 March |
| Payment received | Advance received on 10 March |
| Tax invoice issued | Invoice dated 1 April |

## Special cases

| Supply | Tax point |
| --- | --- |
| Advance payments and deposits | When received, for the amount received |
| Continuous supplies (rent, maintenance, subscriptions) | Earliest of invoice, payment, or due date in the agreement, within one year |
| Goods on approval or sale or return | When the customer accepts, or 12 months, whichever is earlier |
| Imports | Date of import (or as provided for deferred import VAT) |
| Vending machines | When cash is collected |

## VAT on advances in DocFlow

1. Record the advance with a **Payment Entry** against the sales order.
2. Tick **Apply Tax on Advance** and choose the VAT template. Output VAT on the advance is posted with the receipt.
3. When the final invoice is issued and the advance allocated, the VAT already declared on the advance is offset, so VAT is not charged twice.

!fig Advance payment entry with VAT applied on the advance

:::uae Issue the invoice within 14 days
A tax invoice must normally be issued within 14 days of the date of supply. Check weekly for delivered-but-not-invoiced orders with the **Sales Order Analysis** or **Delivered Items To Be Billed** report.
:::

## Related pages

- [Payment terms](/accounting/payment-terms)
- [Milestone billing](/projects/milestone-billing)
- [Subscriptions](/accounting/subscriptions)

@@ bad-debt-relief | Bad debt relief
@summary Recover output VAT on invoices your customer will never pay, when the legal conditions are met.

If you declared and paid output VAT on a sale and the customer does not pay, you can reduce your output VAT by the VAT on the unpaid amount, when all conditions are met.

## Conditions

- The goods or services were supplied and VAT was declared and paid.
- More than **six months** have passed since the payment due date.
- The debt has been **written off** in your accounts, fully or partly.
- You have **notified the customer** of the amount written off.

## In DocFlow

1. Confirm the conditions with the receivable ageing (due date more than six months ago).
2. Send the customer a written notice and attach it to the invoice.
3. Post a **Journal Entry** of type Write Off Entry:

| Account | Debit | Credit |
| --- | --- | --- |
| Bad Debts Expense | Net amount | |
| VAT Bad Debt Relief (reduces output VAT) | VAT amount | |
| Debtors – customer | | Gross amount |

4. Tag the journal so the VAT 201 report includes it as an adjustment in the current period.

!fig Write-off journal separating the net amount and the VAT recovered

:::warning If the customer pays later
If the customer later pays any of the written-off amount, the VAT on that payment must be declared again in the period it is received.
:::

## Related pages

- [Dunning](/accounting/dunning)
- [Journal entries](/accounting/journal-entry)

@@ profit-margin-scheme | Profit margin scheme
@summary Account for VAT on your margin when selling eligible second-hand goods, antiques and collectors' items.

Businesses selling eligible used goods, antiques or collectors' items can choose to account for VAT on the **profit margin** instead of the full selling price, if they bought the goods without being able to recover input VAT (for example from individuals).

## Conditions

- The goods are eligible (second-hand goods, antiques or collectors' items).
- You bought them without VAT, or with VAT you could not recover.
- You keep records of the purchase price of each item.
- Invoices under the scheme do not show VAT separately.

## In DocFlow

1. Create an item tax template **UAE Profit Margin Scheme**.
2. Track each item by serial number or batch, recording the purchase price.
3. On the sales invoice, apply the scheme template. VAT is 5/105 of the margin (selling price minus purchase price).
4. Use a print format that shows the total without a separate VAT line.

!fig Sales invoice for a used vehicle under the profit margin scheme

:::example Example: a used car dealer
A Sharjah dealer buys a used car from an individual for AED 40,000 and sells it for AED 46,300. The margin is AED 6,300; the VAT included in it is 6,300 × 5 ÷ 105 = AED 300.
:::

## Related pages

- [Serial numbers and batches](/stock/serial-batch)

@@ excise-tax | Excise tax
@summary Account for excise tax on tobacco, energy drinks, carbonated and sweetened drinks and other excise goods.

Excise tax applies to specific goods that are harmful to health or the environment, when imported, produced in the UAE, or released from a designated zone.

| Goods | Rate |
| --- | --- |
| Tobacco products | 100% |
| Electronic smoking devices and liquids | 100% |
| Energy drinks | 100% |
| Carbonated drinks | 50% |
| Sweetened drinks | Based on sugar content under the tiered model |

## Who must register

Businesses that import excise goods, produce them, hold them in a designated zone, or release them from a designated zone must register for excise tax with the FTA.

## Setting up

1. Tick a custom flag **Is Excise Good** on affected items and record the excise category and the retail sale price used for the excise value.
2. Create accounts for **Excise Tax Payable** and, for recoverable amounts, **Excise Tax Recoverable**.
3. Create an **Excise Tax** template for purchases (imports) and production.
4. Track stock of excise goods in separate warehouses if you hold them in a designated zone.
5. Use the **Excise Tax Return** report to prepare the monthly return.

!fig Item with excise category and excise tax template

## VAT and excise together

VAT is charged on the selling price including excise tax. On a sales invoice for excise goods, the excise is part of the price and VAT 5% applies to the total.

:::warning Rates and rules change
The method for sweetened drinks moved to a sugar-content based model. Always check the FTA's current rules and the published price lists for excise goods.
:::

## Related pages

- [Customs](/uae-compliance/customs)
- [Items](/stock/items)

@@ tourist-refund | Tax refunds for tourists
@summary Let eligible tourists reclaim VAT on purchases from your shop through the official scheme, and report the refunds correctly.

Retailers registered in the **Tax Refund for Tourists Scheme** can issue tax-free tags so eligible overseas visitors reclaim VAT when they leave the UAE.

## How it works

1. Register with the scheme operator and install their terminal or integration.
2. At the point of sale, for an eligible tourist, mark the invoice as **Tourist Refund** and capture the passport details through the operator's system.
3. The tourist validates the purchase at the airport or border on departure.
4. The operator refunds the tourist (less an administration fee).
5. DocFlow reports the refunded VAT in **Box 2** of the VAT return.

!fig Point of sale invoice marked for the tourist refund scheme

## Conditions

| Condition | Notes |
| --- | --- |
| Tourist | Not a UAE resident; leaving within the required period |
| Retailer | Registered in the scheme |
| Goods | Taken out of the UAE; some goods and services are excluded |
| Minimum purchase | A minimum amount per tax invoice applies |

:::uae Follow the current conditions
The minimum purchase amount, exclusions and fees are set by the FTA and the operator and may change. Check the current conditions.
:::

## Related pages

- [Point of sale](/accounting/pos)
- [VAT return](/uae-compliance/vat-return)

@@ customs | Customs, HS codes and duty
@summary Record customs data on imports and exports, calculate duty, handle free zone movements and keep evidence for VAT.

## Key facts

| Item | Rule |
| --- | --- |
| Customs duty | 5% of the CIF value for most goods, under the GCC common customs tariff |
| Exempt or different rates | Some basic foods, medicines and other goods are exempt; tobacco and alcohol carry higher rates |
| HS codes | Goods are classified using the harmonised system tariff |
| Declarations | Filed electronically with the customs authority of the emirate of entry |
| Free zone to mainland | Treated as an import for customs |
| Mainland to abroad | Export declaration and exit certificate |

## Recording customs data in DocFlow

| Data | Where |
| --- | --- |
| HS code and country of origin | Item (Customs Tariff Number, Country of Origin) |
| Bill of entry number and date | Purchase receipt (custom fields), with the declaration attached |
| Customs duty paid | Landed cost voucher |
| Exit certificate or bill of lading | Delivery note for exports |
| Customs deposits and guarantees | Bank guarantee records |

!fig Purchase receipt with bill of entry number and attached customs declaration

## Calculating duty

Duty is calculated on the CIF value (cost, insurance and freight) in AED at the customs exchange rate. Post the duty paid by your clearing agent as a cost on the [landed cost voucher](/stock/landed-cost).

## Temporary imports and duty suspension

Goods imported temporarily, such as exhibition stock, project equipment or goods for repair, can enter under a customs deposit or bank guarantee. Track these with [bank guarantees](/accounting/bank-guarantee) and close them when the goods are re-exported.

## Import VAT

Import VAT is 5% on the CIF value plus duty. VAT-registered importers usually account for it through the VAT return (Box 6 and Box 10) instead of paying at the border. See [Reverse charge](/uae-compliance/reverse-charge).

## Related pages

- [Importing goods](/buying/import-purchases)
- [Landed costs](/stock/landed-cost)
- [Designated Zones](/uae-compliance/designated-zones)

@@ transfer-pricing | Transfer pricing
@summary Identify related parties, record their transactions and produce the data for arm's length analysis and Corporate Tax disclosures.

Under UAE Corporate Tax, transactions with **related parties** and payments to **connected persons** must be at arm's length, priced as independent businesses would price them.

## Who are related parties?

Typically: companies in the same group, owners with a significant shareholding, directors and their relatives, and businesses they control. Connected persons include owners, directors and officers and their related parties.

## Setting up DocFlow

1. Tick **Is Related Party** on customers and suppliers that are related, and record the relationship.
2. Create an accounting dimension **Related Party** and make it mandatory on transactions with those parties.
3. Record loans, guarantees, management fees, royalties and cost recharges between related parties with clear accounts.

!fig General ledger filtered by related party dimension

## At year end

1. Run the general ledger and trial balance by the Related Party dimension.
2. Prepare a schedule of related party transactions by type and counterparty.
3. Your tax adviser benchmarks the prices and prepares documentation.

## Documentation

Larger businesses and groups above the published revenue thresholds must keep a **master file** and **local file**. Taxpayers with related party transactions above the disclosure threshold file a disclosure with their tax return.

:::warning Get specialist advice
Transfer pricing needs careful analysis. Use DocFlow to gather complete data, and have a tax adviser set and document the prices.
:::

## Related pages

- [Inter-company transactions](/accounting/inter-company)
- [Corporate Tax](/uae-compliance/corporate-tax)

@@ ubo-register | Ultimate beneficial owner register
@summary Keep the UBO, partners and nominee directors registers your licensing authority requires, and update them on every change.

Mainland and free zone companies must keep registers of their **ultimate beneficial owners** (people who ultimately own or control 25% or more of the company, or otherwise control it), their **partners or shareholders**, and any **nominee directors**, and file this information with their licensing authority.

## Keeping the register in DocFlow

1. Create a simple [document type](/framework/custom-doctypes) **Beneficial Owner** linked to the company.
2. Record for each owner: full name, nationality, passport or Emirates ID number, date of birth, residential address, ownership percentage, basis of control, and the date they became an owner.
3. Attach copies of identification and the documents proving ownership.
4. Restrict access to the compliance officer and management.

!fig Beneficial owner record with ownership percentage and identification

## Updating the register

Whenever ownership changes (share transfer, new partner, change of control), update the register and file the update with the licensing authority within the required time. Keep previous entries with end dates rather than deleting them.

:::uae Check your authority's rules
Each licensing authority (the Department of Economy in each emirate, or the free zone authority) has its own filing channel and deadlines. Confirm them for your licence.
:::

## Related pages

- [Companies](/organization/company)

@@ aml-goaml | Anti-money laundering for dealers in precious metals and other DNFBPs
@summary Meet AML duties if you trade in gold, jewellery and precious stones, broker real estate or provide corporate services: due diligence, goAML registration and reporting.

Certain businesses are **designated non-financial businesses and professions (DNFBPs)** with anti-money laundering duties under UAE law, including dealers in precious metals and stones, real estate brokers and agents, and some accountants and corporate service providers.

## Main duties

| Duty | What it means |
| --- | --- |
| Registration | Register on the **goAML** platform of the UAE Financial Intelligence Unit |
| Risk assessment | Assess money laundering risk in your business and customers |
| Customer due diligence | Identify and verify customers; enhanced checks for higher risk |
| Sanctions screening | Check customers against UAE and UN sanctions lists |
| Cash reporting | Dealers file a **DPMSR** for cash transactions of AED 55,000 or more with individuals or companies |
| Suspicious transactions | Report promptly through goAML, without tipping off the customer |
| Record keeping | Keep records for at least five years |
| Compliance officer | Appoint a qualified compliance officer |

## Supporting it in DocFlow

1. Add customer fields for ID type, ID number, nationality, date of birth, risk rating and screening date, and attach copies.
2. Create a saved report of cash sales at or above AED 55,000 per period, from POS and sales invoices paid in cash.
3. Flag customers with enhanced due diligence and require approval for their transactions with a [workflow](/framework/workflows).
4. Restrict access to AML records to the compliance officer.

!fig Report of cash sales above the DPMSR threshold

:::warning The duty to report is yours
DocFlow helps with records and reports, but the duty to assess, report and file rests with the business and its compliance officer.
:::

## Related pages

- [Customers](/selling/customers)
- [Point of sale](/accounting/pos)

@@ voluntary-disclosure | Correcting VAT returns
@summary Fix errors in filed VAT returns through the next return or a voluntary disclosure, with the DocFlow steps to calculate the difference.

If you find an error in a VAT return already filed:

| Size of the error in tax | What to do |
| --- | --- |
| AED 10,000 or less | Correct it in the next VAT return |
| More than AED 10,000 | File a **voluntary disclosure** with the FTA |

The same applies to errors in your favour (for example under-claimed input VAT), though different rules may apply to refunds.

## Common errors

- Missed or duplicated invoices
- Wrong VAT treatment (standard-rated instead of zero-rated, or the reverse)
- Wrong emirate on standard-rated sales
- Input VAT claimed without a valid tax invoice, or on blocked expenses
- Reverse charge not applied to imported services

## In DocFlow

1. Post the correcting documents in the current open period: a missed invoice, a credit note, or a journal.
2. Tag them with an accounting dimension **VAT Correction**, noting the original period.
3. Run the **UAE VAT 201** report for the original period including the corrections, and compare with what you filed, to calculate the difference by box.
4. File the correction through the next return or the voluntary disclosure form on EmaraTax, and save the acknowledgement.

!fig VAT 201 comparison for the original period before and after corrections

:::uae Penalties are lower if you disclose first
Voluntary disclosures made before the FTA starts an audit carry lower penalties than errors the FTA finds. Review VAT figures every quarter, not only at year end.
:::

## Related pages

- [The VAT 201 return](/uae-compliance/vat-return)
- [Credit and debit notes](/accounting/credit-debit-notes)
