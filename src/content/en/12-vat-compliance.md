@@ overview | VAT Compliance at a glance
@summary How DocFlow works out UAE VAT from your documents, files the VAT 201, handles corrections and sends e-invoices, and where everything is in the VAT Compliance module.

DocFlow works out UAE VAT from the documents you already post. Each sales invoice, purchase invoice and VAT document carries a **VAT Category**, and DocFlow adds them up into the boxes of the VAT 201 return. You do not keep a separate VAT worksheet.

The return is built per **filing period**: one month or one quarter, set in the [VAT Settings](/vat-compliance/vat-setup) of each entity. While a period is open, its VAT 201 shows live figures. When you file it, DocFlow saves the figures and locks the period, so nobody can change or cancel a document in it. If a document turns up later, DocFlow lists it as a [late posting](/vat-compliance/late-postings), which you correct in a later return or by a [voluntary disclosure](/vat-compliance/voluntary-disclosure).

The same module also holds [e-invoicing](/vat-compliance/e-invoicing): DocFlow builds the e-invoice of each invoice you submit and sends it to the tax authority network for you.

**Who this module is for:** accountants who post sales and purchases, the VAT administrator who files the return, and the VAT approver who decides late postings and corrections.

## Where things are

Open **VAT Compliance** from the **Apps** group on the home screen. The sidebar has these groups:

| Group | Items |
| --- | --- |
| **Returns & Periods** | Filing Periods, Late Postings, Voluntary Disclosures, Audit File |
| **Invoices** | Invoices, Advance Tax Invoice, Exchange Rates |
| **Adjustments** | VAT Adjustment, VAT Import Adjustment, Tax Refund for Tourists Scheme |
| **Reports** | VAT Output Report, VAT Input Report, VAT Reverse Charge Report, RCM Sales Report, Margin Scheme Stock Book, VAT Reconciliation Report, Tax Invoice Number Gaps |
| **Setup** | VAT Settings, Designated Zones |

The groups start closed. Click a group name to open it. Above the groups, not inside any of them, are four e-invoicing links: **E-invoices Sent**, **E-invoices Received**, **E-invoice Deadlines** and **E-invoicing Settings**. You see each one only if your role can read it.

!fig The VAT Compliance module with the e-invoicing links at the top of the sidebar, the Returns & Periods, Invoices and Adjustments groups open, and the Filing periods screen listing eight quarterly periods @shot 04-vat/01-vat-module.png

## The life of a filing period

1. Set up [VAT Settings](/vat-compliance/vat-setup): registration date, monthly or quarterly.
2. **Generate periods**. Each period starts **Open**, with a live VAT 201.
3. Post sales, purchases and adjustments. They land in the period of their tax point.
4. When the period ends, check the boxes and click **File return**. The figures are saved and the period is locked.
5. A document found later becomes a late posting: AED 10,000 or less is included in an open return; more than AED 10,000 needs a voluntary disclosure.
6. A VAT Administrator can **Reopen** a filed period, with a reason, and file it again.

## Terms

| Term | What it means in DocFlow |
| --- | --- |
| **TRN** | Tax Registration Number: the 15-digit number the FTA gives a registered business. You enter it in VAT Settings. |
| **TIN** | Tax Identification Number: the first 10 digits of the TRN. DocFlow fills it for you. |
| **Output VAT** | VAT you charge on your sales. You pay it to the FTA. |
| **Input VAT** | VAT you pay on your purchases. You can recover it once you hold the supplier's tax invoice. |
| **VAT 201** | The UAE VAT return. DocFlow shows it in the same layout as the FTA form. |
| **Filing period** | The month or quarter one VAT 201 covers. |
| **Tax point** | The date the VAT becomes due. Usually the invoice date. If the goods were delivered or the service was done earlier, that earlier date counts. |
| **Reverse charge** | The buyer, not the seller, accounts for the VAT. Used for imports and for some goods sold between registered businesses. |
| **Profit margin scheme** | For second-hand goods, antiques and collectors' items: VAT is charged only on your profit. |
| **Designated zone** | A free zone that the law treats as outside the UAE for VAT on goods. |
| **Late posting** | A document dated in a period that was already filed and not reported in it. |
| **Voluntary disclosure** | Form 211: how you tell the FTA about an error in a filed return. |
| **Emirate** | The output boxes 1a to 1g are split by the emirate where the supply happened. |

## VAT categories

Each invoice line has a **VAT Category**. It decides the box the line goes in.

| VAT Category | Used for | VAT 201 box |
| --- | --- | --- |
| S - Standard rated | Normal 5 % sales and purchases | Sales: 1a to 1g by emirate. Purchases: 9 |
| Z - Zero rated | Exports and other 0 % supplies | 4 |
| E - Exempt from tax | Exempt supplies, such as some financial services and residential rent | 5 |
| AE - VAT Reverse Charge | Purchases where you self-assess the VAT, and reverse charge sales | Purchases: 3 or 6, and 10. Sales: no box |
| O - Not subject to VAT | Out of scope | No box |
| N - Margin scheme | Sales under the profit margin scheme | 1a to 1g |

You rarely pick the category by hand. It comes from the **Item Tax Template** of the item.

## Pages in this module

| Area | Pages |
| --- | --- |
| Setup and returns | [VAT Settings](/vat-compliance/vat-setup), [Filing periods and the VAT 201](/vat-compliance/vat-return), [VAT roles](/vat-compliance/vat-roles) |
| Sales | [Sales and output VAT](/vat-compliance/sales-output-vat), [Zero-rated and exempt](/vat-compliance/zero-rated-exempt), [Designated zones](/vat-compliance/designated-zones), [Profit margin scheme](/vat-compliance/profit-margin-scheme), [Advance tax invoices](/vat-compliance/tax-point), [Tourist refunds](/vat-compliance/tourist-refund) |
| Purchases | [Purchases and input VAT](/vat-compliance/purchases-input-vat), [Reverse charge and imports](/vat-compliance/reverse-charge), [Self-billing](/vat-compliance/self-billing) |
| Corrections | [VAT adjustments](/vat-compliance/vat-adjustments), [Bad debt relief](/vat-compliance/bad-debt-relief), [Late postings](/vat-compliance/late-postings), [Voluntary disclosures](/vat-compliance/voluntary-disclosure) |
| Checks and records | [Exchange rates](/vat-compliance/exchange-rates), [FTA audit file](/vat-compliance/records-audit), [VAT reports](/vat-compliance/vat-reports) |
| E-invoicing | [E-invoicing](/vat-compliance/e-invoicing), [Connect your account](/vat-compliance/e-invoicing-connect), [Get records ready](/vat-compliance/e-invoicing-readiness), [The e-invoice panel](/vat-compliance/e-invoice-panel), [Sending and statuses](/vat-compliance/e-invoicing-statuses), [Point of sale](/vat-compliance/e-invoicing-pos), [Registers and deadlines](/vat-compliance/e-invoicing-registers), [Provider outages](/vat-compliance/e-invoicing-outage), [Received e-invoices](/vat-compliance/e-invoices-received), [Troubleshooting](/vat-compliance/e-invoicing-troubleshooting) |

Corporate Tax, transfer pricing, the UBO register and AML are in Accounting: see [Corporate Tax](/accounting/corporate-tax). Customs and excise are in Buying: see [Customs](/buying/customs).

:::note Not tax advice
This module explains how DocFlow handles VAT. It is not tax advice. For the law itself, see the Federal Tax Authority (FTA) website or ask your tax adviser.
:::

@@ vat-setup | VAT Settings
@summary Enter the entity's TRN, filing frequency and VAT accounts once, so the VAT module, the VAT 201 and e-invoicing can work.

VAT Settings hold the VAT registration of one entity: its TRN, how often it files, and the accounts DocFlow posts VAT to. Each entity has one VAT Settings record, named after the entity. Nothing in the VAT module works until it exists.

**Where to find it:** **VAT Compliance** > **Setup** > **VAT Settings**.

## Before you start

- You need the **VAT Administrator** or **System Manager** role to change VAT Settings. Accounts Manager and Accounts User can read them.
- The entity exists, with its address. The address **Emirate** is used for sales that have no emirate of their own. See [Companies](/organization/company).
- Have the FTA registration certificate to hand: you need the TRN, the registration date and the tax period (the "stagger").

## Steps

1. Open **VAT Settings** and click **Add VAT Settings**. If the entity already has a record, open it instead.
2. Choose the **Entity**, for example Al Noor Trading LLC.
3. Choose the **Return Periodicity**: **Monthly** or **Quarterly**. The default is Quarterly.
4. For a quarterly filer, choose the **Quarterly Tax Period Cycle**: **Same as registration month**, **Jan - Mar**, **Feb - Apr** or **Mar - May**. Take it from your registration certificate.
5. Enter the **VAT Registration Date**. Periods are generated from this date.
6. Enter the **Tax Registration Number (TRN)**. The **Tax Identification Number (TIN)** fills itself with the first 10 digits. Use **TIN Override** only if the FTA gave you a different TIN.
7. Leave the account fields empty unless your accountant wants other accounts. The table below says what DocFlow uses when they are empty.
8. Click **Save**.

!fig VAT Settings of Al Noor Trading LLC: Quarterly periodicity with the Jan - Mar cycle, registration date, TRN and TIN, and the reverse charge and Input VAT Awaiting Tax Invoice accounts @shot 04-vat/02-vat-settings.png

## The other fields

| Field | What it does |
| --- | --- |
| **Require Central Bank Exchange Rate on Foreign-Currency Invoices** | A foreign-currency sales invoice must use the Central Bank of the UAE rate. See [Exchange rates](/vat-compliance/exchange-rates). |
| **Service Income Account** | The income account for service items. |
| **Service Item Sub-ledger** | Read-only. A System Manager switches it on with the **Enable Service Item Sub-ledger** button. |
| **Reverse Charge Output VAT Account** | Where self-assessed output VAT goes. If empty, DocFlow uses the VAT account of the purchase tax template. |
| **Reverse Charge Input VAT Account** | Where self-assessed input VAT goes. If empty, DocFlow uses the output account above. |
| **Input VAT Awaiting Tax Invoice Account** | Holds input VAT until you record the supplier's tax invoice. If empty, DocFlow creates **Input VAT - Awaiting Tax Invoice** under Duties and Taxes the first time it needs it, and fills this field. See [Purchases and input VAT](/vat-compliance/purchases-input-vat). |
| **Report Supplies in the Emirate Where Received** | Only for businesses whose e-commerce supplies are over AED 100 million. |

**Tax Refund for Tourists Scheme** (a collapsed section)
- **Tax Refund Operator**: the supplier that runs the tourist refund scheme for you. New refund records take it by default.
- **Output VAT - Tourist Refunds Account**: the account the refunded VAT is posted to. See [Tax Refund for Tourists Scheme](/vat-compliance/tourist-refund).

**Voluntary Disclosure**
- **Federal Holidays**: a holiday list. DocFlow skips these days when it counts the 20 business days to disclose an error. The e-invoicing outage deadline uses the entity's default holiday list instead.
- **Disclosure Penalty per Month (%)**: default 1. Under Cabinet Decision 129/2025 (in force from 14 April 2026) the penalty is 1 % for each month or part of a month after the due date.
- **Disclosure Fixed Penalty (AED)**: leave empty for none.

**Exchange Rate Service**
- **Exchange Rate API Key**, **Exchange Rate API URL** and **Fetch Central Bank Rates Daily**. See [Exchange rates](/vat-compliance/exchange-rates).

**E-invoicing**
- A banner links to the separate e-invoicing screen with **Open e-invoicing settings**. See [Connect your DocFlow account](/vat-compliance/e-invoicing-connect).

**Tax Group**
- **Member of a VAT Tax Group**, **Tax Group TRN**, **Representative Member** and **Member Entities**. In a tax group, the representative member files one return for all members. Filing the representative's period also files the members' periods.

## What happens next

- You can now generate the filing periods. See [Filing periods and the VAT 201](/vat-compliance/vat-return).
- Sales and purchase invoices of the entity start taking VAT categories, and input VAT on a purchase is claimed only once the supplier's tax invoice is recorded (box 9 of the return).

## Common problems

| Message | What to do |
| --- | --- |
| VAT settings are not configured for company … | The entity has no VAT Settings. Create them as above. |
| No VAT settings are available for …: they are not set up, or this account may not read them. | Create the settings, or ask for a role that can read them. |
| Set the Input VAT Awaiting Tax Invoice Account in the VAT Settings of … | DocFlow could not create the account because the chart of accounts has no Duties and Taxes group. Create the account yourself and choose it in **Input VAT Awaiting Tax Invoice Account**. |
| Set the Output VAT - Tourist Refunds Account on the VAT Settings of … | Open the **Tax Refund for Tourists Scheme** section and choose the account. |

## Related pages

- [Filing periods and the VAT 201](/vat-compliance/vat-return)
- [VAT roles and approvals](/vat-compliance/vat-roles)
- [Connect your DocFlow account](/vat-compliance/e-invoicing-connect)
- [Chart of accounts](/accounting/chart-of-accounts)

@@ vat-return | Filing periods and the VAT 201
@summary Generate the filing periods, check each box of the VAT 201 down to its documents, file the return and lock the period, or reopen it with a reason.

The **Filing Periods** screen lists the VAT return of each period of the entity. From it you open a period's VAT 201, check every box down to the documents behind it, fill the return details, and file the return. Filing saves the figures and locks the period.

**Where to find it:** **VAT Compliance** > **Returns & Periods** > **Filing Periods**.

## Before you start

- The entity has [VAT Settings](/vat-compliance/vat-setup) with a registration date.
- To generate periods, edit the return details and file, you need **Accounts Manager** or **VAT Administrator**. To reopen a filed period you need **VAT Administrator**. See [VAT roles and approvals](/vat-compliance/vat-roles).
- Check that no [late postings](/vat-compliance/late-postings) are waiting, and that the tourist refunds of the period are recorded ([Tax Refund for Tourists Scheme](/vat-compliance/tourist-refund)).

## Steps: generate the periods

1. Open **Filing Periods**. The header shows the entity, its periodicity, the date it is registered from, and its TRN.
2. Click **Generate periods**. DocFlow creates every period from the registration date up to today.

DocFlow shows "… new period(s) generated (… in all up to today)." or "The periods are up to date." Each row shows **Period**, **Status**, **Filed on**, **Filed by** and a **VAT 201** button.

!fig The Filing periods screen for Al Noor Trading LLC with eight quarterly periods, one Filed and the rest Open, each with a VAT 201 button @shot 04-vat/03-filing-periods.png

## Steps: check and file a return

1. Click **VAT 201** on the period's row. The return opens in the FTA layout, with the banner "Live figures. They change until the return is filed."
2. Read the boxes in **VAT on Sales and All Other Outputs**, **VAT on Expenses and All Other Inputs** and **Net VAT Due**.
3. To see what makes up a box, click its row. A side panel **Documents of box …** lists the documents. Their totals add up to the box.
4. Click a document in the panel to see which boxes it touches. Use **Open document** to open it, or **Back to box …** to return to the list.
5. In the **Return details** card, click **Edit**.
6. Fill the details you will enter on EmaraTax: **Signatory name (English)**, **Signatory name (Arabic)**, **Mobile country code** (default +971), **Mobile number** and **Email address**. Tick **Profit margin scheme applied in the period** if it applies.
7. Copy box 2 from EmaraTax into **EmaraTax box 2 amount (AED)** and **EmaraTax box 2 VAT (AED)**. If DocFlow's box 2 differs, write why in **Reason for a box 2 difference**.
8. Save the details. DocFlow shows "Return details saved."
9. File the return on EmaraTax.
10. Click **Edit** again and enter the **FTA return number** and the **Date of submission**. Save.
11. Click **File return**. Confirm "File the return for …? The period will be locked and its figures saved."

DocFlow shows "Return filed." The banner changes to "Filed figures (snapshot taken when the return was filed)."

!fig The VAT 201 of an open period in the FTA layout, with the live-figures banner, Taxpayer Information and boxes 1a to 3, and the Print, Download PDF, Invoices of this period, Audit file for this period and File return buttons @shot 04-vat/03-vat-201.png

!fig The side panel for box 1b (Standard Rated Supplies in Dubai) listing eight documents with date, party, TRN and emirate, including one return @shot 04-vat/03-box-documents.png

## The cards on the VAT 201

| Card | What it shows |
| --- | --- |
| **Taxpayer Information** | TRN, VAT Return Period, legal name in English and Arabic, VAT stagger, VAT return due date, address, tax year end, and the FTA return number once entered. |
| **VAT on Sales and All Other Outputs** | Boxes 1a to 1g (standard-rated sales by emirate), 2 (tourist refunds), 3 (reverse charge), 4 (zero-rated), 5 (exempt), 6 (imports), 7 (import adjustments), 8 (total). |
| **VAT on Expenses and All Other Inputs** | Box 9 (standard-rated expenses), 10 (reverse charge recoverable), 11 (total). |
| **Net VAT Due** | Box 12 (total output tax), 13 (total recoverable tax), 14 (payable tax: 12 minus 13). |
| **Profit Margin Scheme** | Whether the scheme was used in the period. |
| **Authorised Signatory** | The signatory's names, mobile number and email, and the date of submission. |
| **Return details** | The **Edit** button for the return details. |
| **Other amounts due to the FTA (not part of the VAT 201 form)** | Shown only when the period has [VAT adjustments](/vat-compliance/vat-adjustments) for penalties and interest, with **Payable tax (box 14) and other amounts**. |
| **Box 2: tax refunds for tourists** | **Recorded in DocFlow**, **Pre-filled on EmaraTax** and the **Difference**. |

A sale with no emirate is put in the emirate of the entity's address, and DocFlow notes it under the boxes: "Reported in the company's own emirate because no emirate is set: …". If you leave the period's return due date empty, it is the 28th day after the period ends. A Saturday or Sunday moves to the Monday.

## Buttons on the period

**Print** and **Download PDF** (the UAE VAT 201 Return layout), **Invoices of this period**, **Audit file for this period**, **File return**, and **Reopen** once filed. See [Print formats](/getting-started/printing).

## Steps: reopen a filed period

1. Open the filed period.
2. Click **Reopen**.
3. Enter the **Reason for reopening**. It is required.
4. Click **Reopen**. DocFlow shows "Period reopened."

Correct the documents, then file the return again. The **History of this period** table lists each **Filed**, **Reopened** and **Refiled** action with when, by whom and the reason.

## What happens next

- A filed period is locked. No sales invoice, purchase invoice, journal or VAT document dated or reported in it can be changed or cancelled.
- The figures of the return are saved as they were when you filed. Later documents do not change them.
- Documents dated in the period that turn up later are found by [Late postings](/vat-compliance/late-postings).
- In a tax group, filing the representative member's period also files the members' periods. A member's period shows "Part of a group return".
- Pay the VAT due from Finance, with a bank transaction to the FTA. See [Payments and receipts](/accounting/payment-entry).

:::uae Deadline
The return and the payment are due by the 28th day after the end of the tax period. Late filing and late payment attract penalties.
:::

## Common problems

| Message | What to do |
| --- | --- |
| Period … has not ended yet and cannot be filed. | Wait until the period is over. |
| Period … is already filed. | Nothing to do. To change it, a VAT Administrator must reopen it. |
| Periods are generated up to today. … is in the future. | You can only generate periods up to today. |
| Not entered. Copy box 2 from EmaraTax into the return details before filing. | Fill **EmaraTax box 2 amount (AED)** and **EmaraTax box 2 VAT (AED)**. |
| Box 2 does not match EmaraTax. | Check the tourist refund operator invoices of the period. If the difference is right, enter the **Reason for a box 2 difference**. The return cannot be filed without one. |
| A reason is required to reopen a filed period. | Enter the **Reason for reopening**. |
| VAT Period Filed: … is dated in or reported in VAT period … to …, which has been filed, so it cannot be changed/cancelled. A VAT Administrator can reopen the period. | Post a correcting document in an open period, or ask a VAT Administrator to reopen the period. |
| No filing periods | Click **Generate periods**. |

## Related pages

- [VAT Settings](/vat-compliance/vat-setup)
- [Late postings](/vat-compliance/late-postings)
- [Voluntary disclosures and penalties](/vat-compliance/voluntary-disclosure)
- [The FTA audit file](/vat-compliance/records-audit)

@@ sales-output-vat | Sales and output VAT
@summary How DocFlow adds a VAT Scheme and VAT Category to each sales invoice, which supply categories to pick, how to issue a tax credit note, and the Invoices screen.

Output VAT is the VAT you charge on your sales. You create sales invoices as usual (see [Sales invoices](/accounting/sales-invoice)). DocFlow adds a **VAT Scheme** and a **VAT Category** to each invoice, picks the right tax template for each line, and reports the invoice in the right box of the VAT 201.

## Before you start

- The entity has [VAT Settings](/vat-compliance/vat-setup).
- Items have an **Item Tax Template** with a **VAT Category**. A line without one gets **UAE VAT 5%**, **UAE VAT Zero** or **UAE VAT Exempted** automatically, depending on its category.
- The customer's address has an **Emirate**. It decides which of boxes 1a to 1g the sale goes in. For a VAT-registered customer, tick **VAT Registered** in the customer's VAT section and enter the TRN. See [Customers](/selling/customers).
- You need **Accounts User** or **Accounts Manager** to create sales invoices.

## Steps: a standard sale

1. Create a sales invoice for the customer and add the items.
2. Leave **VAT Scheme** on **Standard rules**.
3. Check each line's **VAT Category**. It comes from the item tax template. For an exempt line, choose a **VAT Exemption Reason Code**.
4. If the goods were delivered or the service was done on another date than the invoice date, enter the **Date of Supply**.
5. Save and submit.

!fig A draft sales invoice with the VAT Scheme set to Standard rules, the Supply Categories field showing Standard supply, and the Date of Supply field, under the E-invoice panel @shot 04-vat/04-sales-invoice-vat.png

## Supply categories

**Supply Categories** mark special kinds of supply. Pick any that apply (they also feed the [e-invoice](/vat-compliance/e-invoicing)): **Standard supply**, **Free Trade Zone**, **Deemed supply**, **Margin scheme**, **Summary invoice**, **Continuous supply**, **Disclosed agent billing**, **Supply through e-commerce**, **Export**, **Designated Zone**. Some open more fields:

| Category | Extra fields |
| --- | --- |
| **Free Trade Zone** | **Beneficiary ID** and **Beneficiary TIN** (both required) |
| **Continuous supply**, **Summary invoice** | **Billing Period From** and **Billing Period To** |
| **Disclosed agent billing** | **Agent Name** and **Agent ID** |
| **Designated Zone** | **Designated Zone** and **Goods Consumed in the Zone**. See [Designated zones](/vat-compliance/designated-zones). |
| **Supply through e-commerce**, **Export** | A **Delivery To** section for the delivery address |

## Special sales

- Zero-rated, exempt and out-of-scope lines: see [Zero-rated and exempt supplies](/vat-compliance/zero-rated-exempt).
- Goods under the domestic reverse charge: see [Reverse charge and imports](/vat-compliance/reverse-charge).
- Second-hand goods, antiques and collectors' items: see [Profit margin scheme](/vat-compliance/profit-margin-scheme).
- Payments received before delivery: see [Advance tax invoices](/vat-compliance/tax-point).

## Tax credit notes

A tax credit note reduces the value of an invoice you already issued. In DocFlow it is a **Sales Return** against the original invoice.

1. Open the submitted sales invoice.
2. Click **Create** > **Tax credit note**.
3. In **Create tax credit note**, check the **Invoice value (before VAT)** and enter the **Correct value (before VAT)**.
4. Choose the **Reason** and the **Date**.
5. Click **Create**. DocFlow shows "Credit note … created as a draft." Open it, check it and submit it.

From **VAT Compliance** > **Invoices** > **Invoices**, the row's **Tax credit note** button does the same; tick **Submit the credit note now** to submit at once.

The reasons are: supply cancelled, tax treatment changed, consideration altered, goods or services returned, tax charged in error, and volume discount. The credit note shows the **Tax Credit Note Values**: original invoice value, value before this credit note, correct value, difference and VAT on the difference. Print it with **UAE Bilingual Tax Credit Note**.

!fig The Create tax credit note dialog on a sales invoice, with Invoice value (before VAT) 5,650.00, Correct value (before VAT) 5,000.00, the reason Consideration altered and the date @shot 04-vat/04-tax-credit-note.png

## Invoice numbering

Invoice numbers must run in sequence, so a cancelled sales invoice cannot be deleted. The **Tax Invoice Number Gaps** report ([VAT reports](/vat-compliance/vat-reports)) finds missing numbers.

## The Invoices screen

**VAT Compliance** > **Invoices** > **Invoices** lists sales or purchase invoices with their VAT categories and the return period each was reported in. Filter by **Document**, **From**, **To**, **VAT category** and **Return period** (rows not yet in a return show **Unfiled**), and tick **Include cancelled**. The **With VAT only** filter is on by default; click × on it to see invoices without VAT too. Each row has **Print** and **Tax credit note**.

!fig The Invoices screen listing sales invoices with date, customer, status, VAT categories and return period, filtered With VAT only @shot 04-vat/04-invoices.png

## What happens next

- The invoice's VAT goes into the open period of its tax point. The **VAT Return Period** field shows the period once the return is filed.
- Bad debt relief on an unpaid invoice is a [VAT adjustment](/vat-compliance/bad-debt-relief).
- The e-invoice is sent if e-invoicing is on. See [The e-invoice panel on an invoice](/vat-compliance/e-invoice-panel).

## Common problems

| Message | What to do |
| --- | --- |
| Row #…: the VAT category … does not match the item tax template … Choose the template for …, or clear the row's category. | Pick the item tax template that matches, or clear the line's category. |
| Item tax template missing: item … has no item tax template, and company … has none for VAT category … | Choose the line's **Item Tax Template**. |
| Row(s) …: an exempt supply needs a VAT exemption reason code for the e-invoice. | Choose the **VAT Exemption Reason Code** on those lines. |
| Tax point in an earlier VAT period: The … (…) falls in the VAT period …, earlier than the posting date's period. | A warning, not a block. The VAT was due in that earlier period. If that return is already filed, correct it by a [voluntary disclosure](/vat-compliance/voluntary-disclosure). |
| Beneficiary ID and Beneficiary TIN are mandatory for Free Trade Zone supplies. | Fill both fields. |
| The original tax invoice reference is mandatory for a tax credit note. | Make the credit note from the original invoice. |
| The reason for issuing the tax credit note is mandatory. | Choose the **Credit Note Reason Code**. |
| The total credited (…) cannot exceed the remaining value of the invoice (…). | Earlier credit notes already reduced the invoice. Lower the amount. |
| … is cancelled and cannot be deleted: its number must stay in the invoice sequence (Executive Regulation Article 59(1)(d)). | Keep the cancelled invoice. |

## Related pages

- [Sales invoices](/accounting/sales-invoice)
- [Sales returns](/selling/sales-returns)
- [Exchange rates](/vat-compliance/exchange-rates)
- [The e-invoice panel on an invoice](/vat-compliance/e-invoice-panel)

@@ zero-rated-exempt | Zero-rated, exempt and out-of-scope supplies
@summary The difference between zero-rated, exempt and out-of-scope lines, which VAT 201 box each goes in, and the evidence to keep.

## The difference

| | Zero-rated (Z) | Exempt (E) | Out of scope (O) |
| --- | --- | --- | --- |
| VAT charged | 0 % | None | None |
| Input VAT on related costs recoverable? | Yes | No | Depends |
| On the VAT 201 | Box 4 | Box 5 | No box |
| Extra field on the line | None | **VAT Exemption Reason Code** (required for the e-invoice) | None |

## In DocFlow

1. Give the item a zero-rated or exempt **Item Tax Template**, for example for exports. The line's **VAT Category** follows it.
2. If a line has no template, DocFlow applies **UAE VAT Zero** or **UAE VAT Exempted** by its category.
3. On each exempt line, choose the **VAT Exemption Reason Code**.
4. For an export, tick the **Export** supply category and fill the **Delivery To** address. See [Sales and output VAT](/vat-compliance/sales-output-vat).

## Common zero-rated supplies

- Exports of goods outside the GCC implementing states, with evidence of export
- Exports of services to non-residents outside the UAE, subject to conditions
- International transport of passengers and goods, and related services
- The first supply of residential buildings within three years of completion
- Certain education and healthcare services and related goods
- Investment precious metals (99 % purity or more)

## Common exempt supplies

- Certain financial services, such as margin-based services and life insurance
- Residential buildings, other than the first supply, by sale or lease
- Bare land
- Local passenger transport

:::uae Evidence for zero-rated exports
To zero-rate an export of goods, keep official and commercial evidence that the goods left the UAE within the required time, such as the customs exit certificate, airway bill or bill of lading. Attach them to the delivery note or sales invoice.
:::

## Mixed businesses

If you make both taxable and exempt supplies, input VAT on costs that relate to both cannot be fully recovered. Agree the apportionment method with your tax adviser, and tag costs by activity with a cost centre. See [Cost centres and budgets](/accounting/cost-centres-budgets).

## Common problems

| Message | What to do |
| --- | --- |
| Row(s) …: an exempt supply needs a VAT exemption reason code for the e-invoice. | Choose the **VAT Exemption Reason Code** on those lines. |
| An export was invoiced with 5 % VAT | Issue a tax credit note and a new zero-rated invoice. If the period is filed, see [Late postings](/vat-compliance/late-postings). |

## Related pages

- [Sales and output VAT](/vat-compliance/sales-output-vat)
- [Delivery notes](/selling/delivery-note)
- [VAT reports](/vat-compliance/vat-reports)

@@ designated-zones | Designated zones
@summary Keep the list of designated zones, and mark sales and purchases of goods into or inside a zone so the VAT is treated correctly.

A designated zone is a free zone that the law treats as outside the UAE for VAT on goods. Not every free zone is a designated zone. Services are taxed as normal.

**Where to find it:** **VAT Compliance** > **Setup** > **Designated Zones**.

## The list of zones

Each zone has a **Zone Name**, its **Emirate**, **Listed In** (the decision that lists it) and **Enabled**. Only enabled zones can be chosen on invoices. Ask your VAT administrator to add or enable a zone.

## Steps: a sale into a zone

1. On the sales invoice, add **Designated Zone** to the **Supply Categories**.
2. Choose the **Designated Zone**.
3. Tick **Goods Consumed in the Zone** if the goods are used up there. Then they are taxed as a UAE supply.
4. Save and submit.

## Steps: a purchase of goods in a zone

1. On the purchase invoice, open the **Taxes & VAT** tab, under **Imports, zones and schemes**.
2. Choose the **Designated Zone**. Fill it only when the goods bought are located in a designated zone.
3. Choose what happens to the goods in **Goods in the Zone**: **Remain in the zone**, **Consumed in the zone** or **Moved into the State**.
4. Save and submit.

## Main rules

| Supply | VAT treatment |
| --- | --- |
| Goods sold between zones, staying in a zone, not consumed | Outside the scope |
| Goods moved from a zone to the mainland | Treated as an import |
| Goods consumed within the zone | Standard rated |
| Services supplied within or into a zone | Standard rated as normal |

:::warning The conditions are strict
Designated zone treatment depends on the zone being listed, on customs controls, and on the goods not being used in the zone. Have your tax adviser confirm the treatment.
:::

## Common problems

| Message | What to do |
| --- | --- |
| Choose the Designated Zone for a Designated Zone supply. | Choose the zone. If it says the zone is not enabled, ask your administrator to enable it. |
| Choose what happens to the goods in Designated Zone … | Fill **Goods in the Zone**. |

## Related pages

- [Sales and output VAT](/vat-compliance/sales-output-vat)
- [Purchases and input VAT](/vat-compliance/purchases-input-vat)
- [Customs](/buying/customs)

@@ profit-margin-scheme | Profit margin scheme
@summary Charge VAT only on your profit when you resell second-hand goods, antiques or collectors' items, and keep the Margin Scheme Stock Book.

For second-hand goods, antiques and collectors' items you may charge VAT only on your profit, without showing the VAT to the customer.

## Before you start

- You need **Accounts User** or **Accounts Manager**.
- Margin scheme invoices must be in AED.

## Steps

1. Buy the goods on a purchase invoice with **For resale under the profit margin scheme** ticked (on the **Taxes & VAT** tab, under **Imports, zones and schemes**). You may attach the **Seller's Original Tax Invoice**. The purchase price goes in box 9 with no VAT. Only such purchases can be linked to a margin sale.
2. On the sales invoice, set **VAT Scheme** to **Profit Margin Scheme**.
3. On each line, choose the **Margin Scheme Basis**: **Second-hand goods**, **Antiques**, **Collectors' items** or **Goods with blocked input VAT (Article 53)**.
4. Enter the **Selling Price incl. VAT (AED)** for the line.
5. Choose the **Margin Purchase Invoice** the goods came from. Its price fills **Purchase Price (AED)**. For more than one purchase, use the **Margin Scheme Purchases** table.
6. Optionally enter a **Proof / Stock Book Reference**.
7. Save. DocFlow works out **Profit Margin (AED)** and **VAT on Margin (AED)**. Submit.

!fig A sales invoice with the VAT Scheme set to Profit Margin Scheme, a line with Margin Scheme Basis Second-hand goods, the selling price, the linked purchase invoice and the computed profit margin and VAT on margin

## What happens next

- Margin sales (category **N - Margin scheme**) go in boxes 1a to 1g.
- Tick **Profit margin scheme applied in the period** in the return details. See [Filing periods and the VAT 201](/vat-compliance/vat-return).
- The **Margin Scheme Stock Book** report lists the goods bought and resold. See [VAT reports](/vat-compliance/vat-reports).

## Common problems

| Message | What to do |
| --- | --- |
| Margin scheme invoices must be issued in the company currency. | Make the invoice in AED. |
| Row #…: choose why the margin scheme applies to this item … | Choose the **Margin Scheme Basis**. |

## Related pages

- [Sales and output VAT](/vat-compliance/sales-output-vat)
- [Purchases and input VAT](/vat-compliance/purchases-input-vat)

@@ purchases-input-vat | Purchases and input VAT
@summary Claim input VAT only once you hold the supplier's tax invoice: the Awaiting and Received statuses, and recording a Tax Invoice Received.

Input VAT is the VAT you pay on purchases. You may recover it only once you hold the supplier's tax invoice. DocFlow handles this in two steps. When you submit a purchase invoice without the tax invoice, its input VAT waits in a holding account and stays out of the VAT 201. When the tax invoice arrives, you record it, and the VAT moves to the recoverable account and into box 9 of that period.

You enter supplier invoices on the **Purchase Entry** screen in Buying. See [Purchase Entry](/buying/purchase-entry). This page covers the VAT side.

## Before you start

- The entity has [VAT Settings](/vat-compliance/vat-setup). The **Input VAT Awaiting Tax Invoice Account** is set, or DocFlow can create **Input VAT - Awaiting Tax Invoice** under Duties and Taxes.
- You need **Accounts User** or **Accounts Manager** to enter purchase invoices. Purchase User can only read them. To record a tax invoice you need write rights on purchase invoices.
- The supplier has its TRN in the VAT section of the supplier. See [Suppliers](/buying/suppliers).

## The two statuses

| **Tax Invoice Status** | What it means |
| --- | --- |
| **Awaiting** | The invoice is submitted, but the supplier's tax invoice is not recorded. The standard-rated input VAT sits in the awaiting account. Box 9 leaves it out. |
| **Received** | The tax invoice is recorded. The input VAT is in the recoverable account and in box 9 of the period of the tax invoice date. |

Some invoices are never held back: reverse charge purchases, margin scheme purchases, and invoices with no VAT to hold. They become **Received** on submit. A **Purchase Return** follows the status of the invoice it returns. A Purchase Return with no original invoice is **Received**.

## Steps: the tax invoice came with the bill

1. Create the purchase invoice on **Purchase Entry**. Enter **Bill No** and **Bill Date** from the supplier's tax invoice.
2. Tick **Tax Invoice Received with This Invoice**.
3. Save and submit.

The status is **Received** at once. The input VAT goes into the period of the invoice.

## Steps: the tax invoice comes later

1. Submit the purchase invoice without ticking **Tax Invoice Received with This Invoice**. Its **Tax Invoice Status** is **Awaiting**.
2. When the supplier's tax invoice arrives, open the submitted purchase invoice.
3. Click **Create** > **Tax Invoice Received**.
4. Check **Supplier's tax invoice no**. It defaults to the bill number.
5. Enter the **Tax invoice date**. The input VAT is claimed in the VAT return of this date.
6. Click **Record**.

!fig The Tax Invoice Received dialog on a submitted purchase invoice, with the supplier's tax invoice number and the tax invoice date, and the note that the input VAT is claimed in the VAT return of this date @shot 04-vat/05-tax-invoice-received.png

## What happens next

- DocFlow makes a journal entry dated on the tax invoice date. It moves the VAT from the awaiting account to the recoverable input VAT account.
- **Tax Invoice Status** becomes **Received**. **Tax Invoice No**, **Tax Invoice Date** and **Tax Invoice Received Entry** are filled.
- Box 9 counts the VAT in the period of the tax invoice date, not the bill date.
- If you cancel that journal entry, the invoice goes back to **Awaiting**.
- If the supplier sends an e-invoice, you can make the purchase invoice from it. See [Received e-invoices](/vat-compliance/e-invoices-received).

## Other purchase cases

| Case | What to do |
| --- | --- |
| **Imports and reverse charge** | Set **Reverse Charge Applicable** to **Y**, or put the lines on **AE - VAT Reverse Charge**. See [Reverse charge and imports](/vat-compliance/reverse-charge). |
| **Goods for the profit margin scheme** | Tick **For resale under the profit margin scheme**. See [Profit margin scheme](/vat-compliance/profit-margin-scheme). |
| **Designated zone purchases** | Choose the **Designated Zone** and **Goods in the Zone**. See [Designated zones](/vat-compliance/designated-zones). |
| **Date of supply** | If the goods were delivered or the service was done on another date than the invoice date, enter the **Date of Supply**. A date in an earlier VAT period is warned about on submit. |
| **Self-billed invoices** | Tick **Self-Billed Invoice**. See [Self-billing](/vat-compliance/self-billing). |
| **Supplier bad debt notice** | Use **Create** > **Supplier Bad Debt Relief Notice**. See [Bad debt relief](/vat-compliance/bad-debt-relief). |

On Purchase Entry, the import, zone, margin and self-billing fields are on the **Taxes & VAT** tab under **Imports, zones and schemes**.

## Common problems

| Message | What to do |
| --- | --- |
| Enter the supplier's invoice number: this document is recorded as the supplier's tax invoice. | You ticked **Tax Invoice Received with This Invoice**. Fill **Bill No**. |
| Set the Input VAT Awaiting Tax Invoice Account in the VAT Settings of … | Ask your VAT administrator to set the account. |
| Enter the supplier's tax invoice number. / Enter the date of the supplier's tax invoice. | Fill both fields in the dialog. |
| … is a debit note. Record the tax invoice on the invoice it returns, … | Open the original invoice and record it there. |
| The tax invoice of … has already been recorded. | Nothing to do. |
| Tax invoice date too early: the tax invoice date … is before the posting date … | Use a date on or after the invoice's posting date. |
| The VAT return for … to … has been filed, so a tax invoice cannot be recorded on … Date it in an open period. | Use a tax invoice date in an open period. |
| Tax invoice recorded: Cancel the Tax Invoice Received entry … first: it moved this invoice's input VAT to the recoverable account. | To cancel the invoice, first cancel that journal entry. |

## Related pages

- [Purchase Entry](/buying/purchase-entry)
- [Reverse charge and imports](/vat-compliance/reverse-charge)
- [Late postings](/vat-compliance/late-postings)
- [Received e-invoices](/vat-compliance/e-invoices-received)

@@ reverse-charge | Reverse charge and imports
@summary Self-assess VAT on imports and on goods under the domestic reverse charge, issue reverse charge sales, and correct import VAT.

Under the reverse charge, you, the buyer, account for the VAT instead of the supplier. This applies to goods and services you import, and to some goods bought from UAE suppliers (such as electronic devices, precious metals and scrap). You report the VAT as output VAT and, in the same return, recover it as input VAT. DocFlow posts both sides for you.

## Before you start

- The entity has [VAT Settings](/vat-compliance/vat-setup). If you want separate accounts, set **Reverse Charge Output VAT Account** and **Reverse Charge Input VAT Account**. Otherwise DocFlow uses the VAT account of the purchase tax template.
- You need **Accounts User** or **Accounts Manager**.

## Steps: a reverse charge purchase or import

1. Create the purchase invoice on **Purchase Entry**.
2. Set **Reverse Charge Applicable** to **Y**. Every line becomes **AE - VAT Reverse Charge**. To put only some lines under the reverse charge, set those lines' **VAT Category** to **AE - VAT Reverse Charge** instead.
3. On the **Taxes & VAT** tab, check **Recoverable Reverse Charge (Percentage)**. The default is 100. Lower it if you can recover only part of the VAT.
4. For imported goods, enter under **Imports, zones and schemes** the **Customs Declaration Number** and **Customs Declaration Date** from the customs declaration. They are required for inventory lines and are copied to every inventory line.
5. Save and submit.

!fig The Taxes & VAT tab of a purchase on Purchase Entry, with Recoverable Reverse Charge (Percentage) at 100 and the customs declaration number and date under Imports, zones and schemes @shot 04-vat/06-reverse-charge-purchase.png

## What happens next

- When the supplier charged no VAT, DocFlow self-assesses it: output VAT on the credit side, the recoverable part as input VAT, and any part you cannot recover as a cost on the line.
- On the VAT 201, the VAT goes in box 3 (no customs declaration) or box 6 (imports with a customs declaration). The recoverable part goes in box 10.
- Reverse charge purchases are not held back waiting for a tax invoice. Their **Tax Invoice Status** is **Received** on submit.
- The **VAT Reverse Charge Report** lists them. See [VAT reports](/vat-compliance/vat-reports).

## Steps: a reverse charge sale

Some goods sold to a VAT-registered business in the UAE are under the domestic reverse charge: the buyer accounts for the VAT. The goods are listed under **VAT RCM Goods**: electronic devices, precious metals and precious stones, crude or refined oil, natural gas, pure hydrocarbons and metal scrap.

1. On the sales invoice, set **VAT Scheme** to **Reverse Charge (RCM)**. DocFlow puts every line on **AE - VAT Reverse Charge** and removes the tax rows.
2. On each line, choose the **Reverse Charge Reference** (the kind of goods).
3. Attach the customer's written declaration in **Customer RCM Declaration**. It is filled from the customer if stored there.
4. Save and submit.

Reverse charge sales go in no box of your return. The **RCM Sales Report** lists them.

## Correcting import VAT

If customs figures change after the return, use a **VAT Import Adjustment** (**VAT Compliance** > **Adjustments**). It goes in box 7, and its recoverable VAT in box 10. See [VAT adjustments](/vat-compliance/vat-adjustments).

## Common problems

| Message | What to do |
| --- | --- |
| Reverse charge VAT account missing: Row(s) … are under the reverse charge and the supplier charged no VAT, so the VAT is self-assessed. Set the reverse charge VAT accounts in the VAT Settings of …, or choose a purchase tax template with a VAT account. | Ask your VAT administrator to set the accounts, or choose a purchase tax template with a VAT row. |
| Row #…: reverse charge inventory lines need the invoice's Customs Declaration Number and Date. | Fill **Customs Declaration Number** and **Customs Declaration Date**. |
| Customs Declaration Number and Date are required when the reverse charge applies to inventory. | The same: fill both fields. |
| Row(s) …: a reverse charge line needs the VAT Scheme Reverse Charge (RCM). Put the other lines on a separate invoice. | Set the scheme to **Reverse Charge (RCM)**, and move other items to another invoice. |
| Reverse charge supplies can only be made to a VAT registered customer with a TRN. | Tick **VAT Registered** on the customer and enter the TRN. |
| Row #…: select the Reverse Charge Reference (category of goods) for reverse charge lines. | Choose the **Reverse Charge Reference** on the line. |

## Related pages

- [Purchases and input VAT](/vat-compliance/purchases-input-vat)
- [Customs, HS codes and duty](/buying/customs)
- [Importing goods end to end](/buying/import-purchases)
- [VAT adjustments](/vat-compliance/vat-adjustments)

@@ tax-point | Advance tax invoices and the tax point
@summary Report VAT on an advance in the period you received the money, then set the advance off on the final invoice so the VAT is reported only once.

The **tax point** is the date the VAT becomes due: usually the invoice date, or an earlier date of delivery, service or payment. When a customer pays you before you deliver, VAT is due on the advance. An **Advance Tax Invoice** records that VAT in the period you received the money. When you later issue the final sales invoice, you set the advance off against it, so the VAT is reported only once.

**Where to find it:** **VAT Compliance** > **Invoices** > **Advance Tax Invoice**.

## Before you start

- You need **Accounts User** or **Accounts Manager**.
- Record the customer's payment first. See [Payments and receipts](/accounting/payment-entry).
- You need a sales tax template with exactly one VAT row with a rate, for example the 5 % template.

## Steps: record the advance

1. Open **Advance Tax Invoice** and click **Add Advance Tax Invoice**.
2. Choose the **Entity**, the **Customer** and the **Date**.
3. Choose the **Payment Entry (advance received)**.
4. Choose the **Tax Template** and the **Emirate** of the supply.
5. Enter a **Description** and the **Advance Amount (excl. VAT)**. DocFlow works out **VAT Amount** and **Total (incl. VAT)**.
6. For a foreign currency, check the **Currency** and the **Exchange Rate (AED per unit)**.
7. If you send e-invoices, check **Customer Name**, **Customer Address** and **Mode of Payment**, and enter the **Service Accounting Code (SAC)**.
8. Save and submit.

!fig A submitted advance tax invoice with the entity, customer, date, UAE VAT 5% template, Abu Dhabi emirate, an advance of 16,000.00 with 800.00 VAT, and Set Off Status Unused @shot 04-vat/07-advance-tax-invoice.png

## Steps: set the advance off on the final invoice

1. Create the final sales invoice for the same customer, entity and currency.
2. In the **Advances Set Off** section, add a row to **Advance Tax Invoices Set Off**.
3. Choose the **Advance Tax Invoice** and enter the **Amount Set Off (excl. VAT)**. DocFlow fills the **VAT Set Off**.
4. Check **Advance VAT Set Off (AED)** and **VAT Payable After Advances (AED)**.
5. Save and submit.

## What happens next

- On submit, the advance moves its VAT to the output VAT account. It goes in the boxes of the advance's period.
- The final invoice posts its full VAT. An **Advance Set Off Journal** takes back the VAT already reported on the advance.
- The advance's **Set Off So Far (excl. VAT)** and **Set Off Status** (**Unused**, **Partly Set Off**, **Fully Set Off**) update.
- Advance tax invoices are numbered in their own series and are part of the **Tax Invoice Number Gaps** report.
- If e-invoicing is on, the advance is sent as an e-invoice.

:::tip Date of Supply
On a sales or purchase invoice, enter the **Date of Supply** when the goods were delivered or the service was done on another date than the invoice date. If it falls in an earlier VAT period, DocFlow warns you on submit.
:::

## Common problems

| Message | What to do |
| --- | --- |
| The tax template for an advance must have exactly one VAT row with a rate. | Choose another tax template, such as the 5 % one. |
| Foreign-currency receivable accounts are not supported for advance VAT. | Record the advance against an AED receivable account. |
| Advances cannot be set off against a credit note. | Remove the advance rows from the credit note. |
| Row #…: advance … is not submitted. | Submit the advance first. |
| Row #…: advance … belongs to a different customer or company. | Choose an advance of this customer and entity. |
| Row #…: advance and invoice currencies differ. | Use an advance in the invoice's currency. |
| Row #…: the amount set off exceeds what remains of advance … | Lower the amount set off. |
| The advances set off (…) exceed the invoice value (…). | Lower the amounts set off. |

## Related pages

- [Sales and output VAT](/vat-compliance/sales-output-vat)
- [VAT reports](/vat-compliance/vat-reports)
- [The e-invoice panel on an invoice](/vat-compliance/e-invoice-panel)

@@ tourist-refund | Tax Refund for Tourists Scheme
@summary Record each operator invoice for VAT refunded to tourists, import the operator's listing, and check box 2 of the VAT 201.

Tourists can claim back the VAT on goods they buy from you. An FTA-authorised operator (Planet Tax Free) pays the refund to the tourist at the airport and then invoices you for it. You record each operator invoice as a **Tax Refund for Tourists Scheme** entry. These entries are the only source of box 2 of the VAT 201.

**Where to find it:** **VAT Compliance** > **Adjustments** > **Tax Refund for Tourists Scheme**.

## Before you start

- In [VAT Settings](/vat-compliance/vat-setup), open the **Tax Refund for Tourists Scheme** section. Choose the **Tax Refund Operator** (a supplier) and the **Output VAT - Tourist Refunds Account**.
- You need **Accounts User** or **Accounts Manager**.
- Have the operator's invoice. The operator's Excel listing of refunded receipts is optional.

## Steps

1. Open **Tax Refund for Tourists Scheme** and click **Add Tax Refund for Tourists Scheme**.
2. Choose the **Entity**. The **Tax Refund Operator** fills from VAT Settings.
3. Enter the **Operator Invoice No.** and **Operator Invoice Date**.
4. Enter **Refund Period From** and **Refund Period To** from the invoice. DocFlow sets the **VAT Date** from **Refund Period To**, or from the invoice date if there is no period.
5. Enter the **Due Date** and the **Payment Reference** the operator asks for on the bank transfer.
6. Enter the **Taxable Amount (excl. VAT)** and the **VAT Refunded** from the invoice.
7. Optionally, click **Import Planet listing** and upload the operator's Excel listing (.xlsx). DocFlow fills **Refunded Receipts** and matches each receipt to its sales invoice.
8. Save and submit.

!fig A draft Tax Refund for Tourists Scheme entry with the operator, operator invoice number and date, refund period, VAT Date, taxable amount 8,400.00 and VAT refunded 420.00, and the Import Planet listing button @shot 04-vat/08-tourist-refund.png

After an import, DocFlow shows "… receipt(s) imported, … matched to a sales invoice, … not found." The listing only links receipts to sales invoices. It does not change your sales or the return.

## What happens next

- DocFlow posts a journal entry: debit **Output VAT - Tourist Refunds**, credit the operator.
- Box 2 of the VAT 201 shows the taxable amount and the VAT as negative figures, in the period of the **VAT Date**. The taxable amount is never posted to the ledger.
- You pay the operator with a bank transaction of type **Tax Refund for Tourists Scheme** in Finance.
- Before filing, compare box 2 with the figure pre-filled on EmaraTax. See [Filing periods and the VAT 201](/vat-compliance/vat-return).
- Print the entry with **Planet Tourist Refund**.

## Common problems

| Message | What to do |
| --- | --- |
| The taxable amount and the VAT refunded must be greater than zero. | Enter both amounts. |
| Refund Period To cannot be before Refund Period From. | Correct the dates. |
| Enter the operator invoice date or the refund period. | Fill one of them. |
| Operator invoice … of … is already recorded in … | This invoice is already entered. Open the existing entry. |
| The VAT refunded (…) is not 5 % of the taxable amount (…). Check the operator's invoice. | A warning. Check the figures against the invoice. |
| The refund period … to … runs over two VAT periods. The whole refund is reported in box 2 of the period of … To split it, record one entry per VAT period. | Accept it, or make one entry per VAT period. |
| Set the Output VAT - Tourist Refunds account on the VAT Settings of … | Ask your VAT administrator to set the account. |
| … is paid or allocated by … Cancel or unreconcile that payment first. | To cancel the entry, cancel or unreconcile the payment to the operator first. |
| Choose the company first. | Choose the **Entity** before you import the listing. |
| Only a draft can take the operator's listing. | Import the listing before you submit. |
| The file is not a valid Excel workbook, has no worksheet, or has no table of receipts (a row with Issue date and Receipt Number(s)). | Upload the operator's original .xlsx listing, unchanged. It must be 5 MB or less. |

## Related pages

- [Filing periods and the VAT 201](/vat-compliance/vat-return)
- [VAT Settings](/vat-compliance/vat-setup)
- [Sales and output VAT](/vat-compliance/sales-output-vat)

@@ self-billing | Self-billing
@summary Issue the tax invoice for a purchase on your supplier's behalf under a written self-billing agreement.

In self-billing, you issue the tax invoice for a purchase on your supplier's behalf, instead of waiting for the supplier to send one. You may do this only under a written self-billing agreement with that supplier. In DocFlow, a self-billed invoice is a purchase invoice with **Self-Billed Invoice** ticked.

## Before you start

- Open the supplier and fill **Self-Billing Agreement Reference** and **Self-Billing Agreement Date** in its VAT section. See [Suppliers](/buying/suppliers).
- The supplier's TRN is on the supplier.
- You need **Accounts User** or **Accounts Manager**.

## Steps

1. Create the purchase invoice on **Purchase Entry**.
2. On the **Taxes & VAT** tab, under **Imports, zones and schemes**, tick **Self-Billed Invoice**.
3. Save and submit.
4. Print it with **UAE Bilingual Purchase Document** and send it to the supplier.

!fig The Taxes & VAT tab of a purchase on Purchase Entry with Self-Billed Invoice ticked under Imports, zones and schemes @shot 04-vat/09-self-billed.png

## What happens next

- The invoice is your tax invoice for the purchase. Its input VAT is claimed as described in [Purchases and input VAT](/vat-compliance/purchases-input-vat).
- If e-invoicing is on, the self-billed invoice is sent as an e-invoice. It has the **E-invoice** > **Readiness** button. See [The e-invoice panel on an invoice](/vat-compliance/e-invoice-panel).
- Reverse charge lines and margin scheme lines cannot be self-billed.

## Common problems

| Message | What to do |
| --- | --- |
| A self-billed document can only be issued to a supplier with a self-billing agreement. Record the agreement reference on the supplier. | Fill **Self-Billing Agreement Reference** on the supplier. |
| The self-billing agreement with this supplier starts on …, after the document date. | Check the agreement date on the supplier, or the invoice date. |

## Related pages

- [Purchases and input VAT](/vat-compliance/purchases-input-vat)
- [Purchase Entry](/buying/purchase-entry)

@@ vat-adjustments | VAT adjustments
@summary Record penalties, interest and other VAT amounts that do not come from an invoice, and correct import VAT with a VAT Import Adjustment.

A **VAT Adjustment** records a VAT amount that does not come from an invoice: a penalty or interest the FTA charged, another increase or decrease, [bad debt relief](/vat-compliance/bad-debt-relief) on a sale you could not collect, or a supplier's bad debt notice. A **VAT Import Adjustment** corrects the VAT on imported goods. Each one posts a journal entry and lands in the period of its date.

**Where to find it:** **VAT Compliance** > **Adjustments** > **VAT Adjustment** or **VAT Import Adjustment**.

## Before you start

- You need **VAT Administrator** or **VAT Approver** (or System Manager) to create and submit adjustments.
- The period of the adjustment's date must be open.

## The types

| **Type** | Use it for | Where it shows on the return |
| --- | --- | --- |
| **Penalty**, **Interest** | Amounts the FTA charged | Not in the VAT 201 boxes. Listed under **Other amounts due to the FTA (not part of the VAT 201 form)** |
| **Other increase**, **Other decrease** | Other amounts owed to or by the FTA | The same card, outside the boxes |
| **Bad Debt Relief** | Getting back the output VAT of a sale you wrote off | Adjustment column of box 1 for the invoice's emirate |
| **Supplier Bad Debt Relief Notice** | A supplier told you it wrote off your unpaid invoice | Adjustment column of box 9 |

## Steps: a penalty or interest

1. Open **VAT Adjustment** and click **Add VAT Adjustment**.
2. Choose the **Entity** and the **Date**.
3. Choose the **Type**: **Penalty** or **Interest**.
4. Enter the **Amount (AED)** and the **Reason**.
5. Choose the **Expense / Offset Account** and the **VAT Payable Account**.
6. Save and submit.

## Steps: a VAT import adjustment

1. Open **VAT Import Adjustment** and click **Add VAT Import Adjustment**.
2. Choose the **Entity** and the **Date**, and enter the **Customs Declaration Number**.
3. Enter **Amount (AED, + or -)**, **VAT Amount (AED, + or -)** and, if you can recover it, **Recoverable VAT (AED, + or -)**.
4. Enter the **Reason**. Save and submit.

It goes in box 7. The recoverable VAT goes in box 10.

## What happens next

- DocFlow posts a journal entry between the **Expense / Offset Account** and the **VAT Payable Account**, and links it in **Journal Entry**.
- The **VAT Return Period** is filled once the period is filed.
- When the FTA assesses a penalty on a voluntary disclosure, book it as a **Penalty** adjustment and link it in the disclosure's **Penalty Posting** field. See [Voluntary disclosures and penalties](/vat-compliance/voluntary-disclosure).

## Common problems

| Message | What to do |
| --- | --- |
| The adjustment amount must be greater than zero. | Enter a positive amount. Choose **Other decrease** for a decrease. |
| The expense account … must be an expense account. / The payable account … must be a tax liability account. | Choose accounts of the right type. |

## Related pages

- [Bad debt relief](/vat-compliance/bad-debt-relief)
- [Reverse charge and imports](/vat-compliance/reverse-charge)
- [Filing periods and the VAT 201](/vat-compliance/vat-return)

@@ bad-debt-relief | Bad debt relief
@summary Get back the output VAT of a sale you could not collect, and record a supplier's notice that it wrote off your unpaid invoice.

You may claim back the output VAT of an unpaid invoice when all of these are true: the VAT was reported in a filed return and paid, more than 6 months passed since the date of supply, you wrote the amount off in your books, and you told the customer. In DocFlow this is a [VAT adjustment](/vat-compliance/vat-adjustments) of type **Bad Debt Relief**.

**Where to find it:** **VAT Compliance** > **Adjustments** > **VAT Adjustment**.

## Before you start

- You need **VAT Administrator** or **VAT Approver** (or System Manager).
- The period of the invoice is filed, and the period of the adjustment's date is open.

## Steps: claim bad debt relief

1. Write the amount off with a journal entry that credits the customer's receivable and debits an expense. See [Journal entries](/accounting/journal-entry).
2. Create a **VAT Adjustment** with **Type** **Bad Debt Relief**.
3. Choose the **Sales Invoice** and the **Write-off Entry**.
4. Enter the **Consideration Written Off (AED)**, including VAT.
5. Enter **Customer Notified On**.
6. Tick **The Output Tax of the Invoice Was Paid to the FTA**.
7. Check the **Date of Supply** and the **Emirate**. DocFlow works out the **Amount (AED)**.
8. Enter a **Reason**, choose the accounts, then save and submit.

!fig A new VAT Adjustment of type Bad Debt Relief with the sales invoice, the write-off entry, Consideration Written Off (AED) 11,175.00 and Customer Notified On filled in @shot 04-vat/10-bad-debt-relief.png

The relief goes in the adjustment column of box 1 for the invoice's emirate.

## Steps: a supplier's bad debt notice

1. Open the submitted purchase invoice the notice is about.
2. Click **Create** > **Supplier Bad Debt Relief Notice**. A new VAT Adjustment opens, filled from the invoice.
3. Enter **Notice Received On** and the **Consideration Written Off per Notice (AED)**.
4. Check **Input Tax Recovered on the Invoice (AED)**.
5. Date the adjustment in the period you received the notice. Save and submit.

It goes in the adjustment column of box 9.

## Common problems

| Message | What to do |
| --- | --- |
| Bad debt relief needs a submitted sales invoice that is not a credit note. | Choose the original, submitted invoice. |
| The output tax of … must have been charged and reported in a filed return (Article 64(1)(a)). | Wait until the invoice's period is filed. |
| Confirm that the output tax of the invoice was paid to the FTA (Article 64(1)(a)). | Tick **The Output Tax of the Invoice Was Paid to the FTA**. |
| Bad debt relief needs more than 6 months from the date of supply … (Article 64(1)(c)). | Wait until 6 months have passed. |
| Enter the date the customer was notified … | Fill **Customer Notified On**. |
| Write-off entry … does not write off … | Choose the journal that wrote off this customer's receivable. |
| Purchase invoice … has no input tax recovered in box 9 … | The notice applies only to invoices whose input VAT you claimed. |
| Date the adjustment in the tax period the notice was received … | Change the **Date** to the period of **Notice Received On**. |

:::uae If the customer pays later
If the customer later pays some or all of a debt you claimed relief on, the output VAT on that payment is due again. Record it with a VAT adjustment in the period you received the money.
:::

## Related pages

- [VAT adjustments](/vat-compliance/vat-adjustments)
- [Dunning and payment reminders](/accounting/dunning)

@@ late-postings | Late postings
@summary Find documents dated in a filed period that were never reported, and include them in an open return or move them to a voluntary disclosure.

A late posting is a document dated in a period whose return was already filed, but which was not reported in that return. For example, a supplier's invoice dated in March that you only entered in May, after the first-quarter return was filed. DocFlow finds these documents, works out their VAT effect, and tells you how to correct them: in a later return if the VAT is AED 10,000 or less, or by a voluntary disclosure if it is more.

**Where to find it:** **VAT Compliance** > **Returns & Periods** > **Late Postings**.

## Before you start

- At least one period is filed. See [Filing periods and the VAT 201](/vat-compliance/vat-return).
- To scan you need **Accounts Manager**, **VAT Administrator** or **VAT Approver**. To approve or reject you need **VAT Approver** or **VAT Administrator**.

## Steps: find late postings

1. Open **Late Postings**.
2. Click **Scan for late postings**. DocFlow checks the filed periods for documents that were never reported.

DocFlow shows "… late posting(s) found and queued as Pending." or "No new late postings found."

Above the table, a banner for each filed period gives the number of late postings, their total VAT effect, and the rule that applies. The table shows **Document** (with its tax point), **Posting date**, **Original period**, **VAT effect**, **Threshold**, **Deadline**, **Status**, **Include in period**, **Decided by** and **Remarks**. Use the buttons above the table to show **All**, **Pending**, **Approved** or **Rejected** postings.

!fig The Late postings screen after a scan, with a period banner showing one late posting and its VAT effect, and a pending purchase invoice row marked Correct in current return @shot 04-vat/11-late-postings.png

## What the period banner says

| Text | What to do |
| --- | --- |
| AED 10,000 or less: correct it in the current return (Tax Procedures Executive Regulation Article 10(1)). | Include the postings in an open return. |
| More than AED 10,000: a voluntary disclosure (Form 211) is required by …, 20 business days after the errors were found … | Create a voluntary disclosure before that date. |
| The filed return showed at least as much payable tax as it should have; Article 10(1) does not require a correction. | You overpaid. No correction is required. |

The AED 10,000 limit is for all late postings of the same filed period together. The 20 business days skip weekends and the **Federal Holidays** list in [VAT Settings](/vat-compliance/vat-setup).

## Steps: AED 10,000 or less

1. On a pending row, click **Include in current return**. DocFlow shows "… included in the current return."
2. Or, to choose another open period, click **Approve** (at the right end of the row; scroll the table if you do not see it). In **Approve late posting**, choose the **Include in return period**, or leave it empty to use the current period. Confirm.
3. If a posting needs no correction, click **Reject** and enter the reason in the remarks.

!fig The Approve late posting dialog with the Include in return period field and Remarks, over the Include in current return, Approve and Reject buttons of the row @shot 04-vat/11-approve.png

## Steps: more than AED 10,000

1. In the period's banner, click **Create voluntary disclosure**. DocFlow shows "Draft voluntary disclosure … created."
2. Continue in [Voluntary disclosures and penalties](/vat-compliance/voluntary-disclosure).

**Approve** is switched off on these rows ("Over AED 10,000: correct it by a voluntary disclosure").

## What happens next

- An approved posting's VAT is reported in the period you chose. Its **Status** becomes **Approved**, with who decided and when.
- A rejected posting is kept with its reason, as **Rejected**.
- You can also open a late posting as a form and use **Approve** or **Reject** there.

## Common problems

| Message | What to do |
| --- | --- |
| This late posting has already been … | It was decided already. Refresh the list. |
| The late postings of period … add up to more than AED 10,000 of VAT, so they are corrected by a voluntary disclosure (…), not in a later return. | Use **Create voluntary disclosure**. |
| Period … is already filed. Choose an open period. | Choose an open period in **Include in period**. |
| The return period must be a later period of the same company. | Choose a period after the original period. |
| Period … has no open late postings. | Nothing to disclose for that period. |
| A draft voluntary disclosure for these late postings already exists: … | Open the existing draft. |

## Related pages

- [Voluntary disclosures and penalties](/vat-compliance/voluntary-disclosure)
- [Filing periods and the VAT 201](/vat-compliance/vat-return)
- [VAT roles and approvals](/vat-compliance/vat-roles)

@@ voluntary-disclosure | Voluntary disclosures and penalties
@summary Collect the errors of a filed return, see whether you must disclose and by when, estimate the penalty, and record the Form 211 you filed.

A voluntary disclosure (FTA Form 211) is how you tell the FTA about an error in a return you already filed. DocFlow's **VAT Voluntary Disclosure** collects the errors of one filed period, works out whether you must disclose or may correct them in a later return, gives the deadline, and estimates the late payment penalty. You then submit Form 211 on EmaraTax and record the FTA reference here.

**Where to find it:** **VAT Compliance** > **Returns & Periods** > **Voluntary Disclosures**. A draft is also created from [Late postings](/vat-compliance/late-postings) with **Create voluntary disclosure**.

## Before you start

- You need **VAT Administrator** or **VAT Approver** (or System Manager).
- The period with the errors is filed.
- In [VAT Settings](/vat-compliance/vat-setup), check **Federal Holidays**, **Disclosure Penalty per Month (%)** (default 1) and **Disclosure Fixed Penalty (AED)**.

## Steps

1. Open the draft made from Late postings, or click **Add VAT Voluntary Disclosure**.
2. Check the **Entity** and the **Filed Tax Period**.
3. Enter **Aware of the Error On**: the date you found out the return was wrong. The 20 business days count from here.
4. Click **Get Errors** to load the late postings of the period. You can also add rows by hand: each row has a **Source** (**Late posting**, **Adjustment** or **Other**), the document, a **Description** and the **Tax Difference (AED)**.
5. Save. DocFlow fills **Total Tax Difference (AED)**, **Outcome**, **Due Date**, **Original Return Due Date**, **Months Counted** and **Penalty Estimate (AED)**.
6. Print it with **UAE VAT Voluntary Disclosure Form 211** and submit the disclosure on EmaraTax.
7. Back in DocFlow, enter **Disclosed On** and the **FTA Reference**.
8. Submit.

!fig A draft voluntary disclosure with the filed tax period, Aware of the Error On date, two error rows totalling AED 1,495.00, the outcome Correct in a tax return and the Correct in Tax Period @shot 04-vat/12-voluntary-disclosure.png

## The outcomes

| **Outcome** | What it means |
| --- | --- |
| Voluntary disclosure required | The total difference is more than AED 10,000. Disclose by the **Due Date** (20 business days from **Aware of the Error On**). |
| Correct in a tax return | AED 10,000 or less. Correct it in the return shown in **Correct in Tax Period**. |
| Voluntary disclosure required (no return to correct it in) | AED 10,000 or less, but there is no open return to correct it in. Disclose instead. |
| Not covered by Article 10(1): the return showed more payable tax than it should have | You overpaid, so the correction rule does not apply. No correction is required. |
| No difference | The errors cancel out. |

A positive **Total Tax Difference (AED)** means the return showed less tax than it should have.

## The penalty estimate

**Penalty Estimate (AED)** is an estimate only: the tax difference × the monthly rate × the months counted, plus the fixed amount. Months are counted from the day after the original due date to **Disclosed On** (or today). Each part of a month counts as a full month.

For returns due from 14 April 2026 the penalty is 1 % for each month or part of a month. For a return due before that date, DocFlow adds a **Penalty Note**: the FTA may apply the older fixed rates. A disclosure made after the FTA has told you about an audit carries a higher penalty that the estimate does not cover.

When the FTA assesses the penalty, record it as a **Penalty** [VAT adjustment](/vat-compliance/vat-adjustments) and link it in **Penalty Posting**.

:::uae Legal basis
Tax Procedures Executive Regulation Article 10(1) (the AED 10,000 rule); Cabinet Decision 129/2025 (penalties from 14 April 2026) and Cabinet Decision 49/2021 (older fixed rates).
:::

## What happens next

- The submitted disclosure is your record of what was disclosed, when, and the FTA reference.
- Its late postings show the disclosure on the [Late postings](/vat-compliance/late-postings) screen.

## Common problems

| Message | What to do |
| --- | --- |
| Tax period … was never filed: correct it before filing instead. | Fix the documents and file the return normally. |
| The date of becoming aware of the error cannot be in the future. | Correct **Aware of the Error On**. |
| Row #…: late posting … is not of period … | Remove the row, or choose the right period. |
| Add the errors of the return before submitting. | Click **Get Errors** or add rows. |
| Enter the date the disclosure was submitted or the correcting return filed. | Fill **Disclosed On**. |
| Enter the FTA reference of the disclosure. | Fill **FTA Reference**. |

## Related pages

- [Late postings](/vat-compliance/late-postings)
- [VAT adjustments](/vat-compliance/vat-adjustments)
- [VAT Settings](/vat-compliance/vat-setup)

@@ exchange-rates | Exchange rates
@summary Keep the Central Bank of the UAE rates for VAT, by importing the monthly PDF, fetching them or entering them by hand, and enforce them on foreign-currency invoices.

UAE VAT on a foreign-currency invoice must be converted to AED at the Central Bank of the UAE (CBUAE) rate. The **Exchange Rates** screen holds those rates. You can import the Central Bank's monthly PDF, fetch the rates from a rate service, or enter a rate by hand. If the entity requires it, DocFlow refuses a foreign-currency sales invoice whose rate is not the right Central Bank rate.

**Where to find it:** **VAT Compliance** > **Invoices** > **Exchange Rates**.

## Before you start

- To import, fetch or enter rates you need **Accounts Manager** or **VAT Administrator**.
- The foreign currencies you use are enabled.
- To enforce the rule, tick **Require Central Bank Exchange Rate on Foreign-Currency Invoices** in [VAT Settings](/vat-compliance/vat-setup).
- To fetch rates, enter the **Exchange Rate API Key** and **Exchange Rate API URL** in VAT Settings. These are the access key and web address you get from your exchange-rate provider; your administrator sets them once. The PDF import needs no key.

## Steps: import the monthly PDF

1. Download the Central Bank's monthly PDF "Exchange Rates against UAE Dirham for VAT related obligations".
2. Open **Exchange Rates** and click **Import monthly PDF**.
3. Choose the PDF file (10 MB at most) and upload it.

DocFlow reports the rates stored, the rows and dates in the file, and any rows it skipped: currencies not enabled, rates already stored (kept as they are), and currency names it does not know.

## Steps: fetch or enter a rate

- Click **Fetch now** to get today's rates from the rate service. With **Fetch Central Bank Rates Daily** ticked in VAT Settings, this happens every day by itself.
- Click **Enter a rate** to add one rate by hand. Choose the **Currency** and the **Date**, and enter the **Rate (AED for 1 unit)** as the Central Bank published it. A rate already entered for that currency and day is kept.

!fig The Exchange rates screen with the Settings card (Central Bank rate required, rate service key, daily fetch, rate service address) and the Rates stored table, with the Standard list of rates, Enter a rate, Fetch now and Import monthly PDF buttons @shot 04-vat/13-exchange-rates.png

## Reading the screen

- **Settings** shows whether the Central Bank rate is required, whether a rate service key is stored, whether rates are fetched daily, and the rate service address. **Open VAT Settings** takes you to the settings.
- **Rates stored** lists each currency with the latest Central Bank rate on or before today, its date, and how many rows are of the Central Bank and of another source.
- **Standard list of rates** opens the full list of exchange rates.

Only rates whose **Source** is **CBUAE** count for a foreign-currency sales invoice. A rate entered with another source is ignored by the rule.

## What happens next

- With the rule on, a foreign-currency sales invoice must use the latest Central Bank rate dated on or before its posting date. DocFlow refuses it when there is no such rate or when the rate differs.
- With the rule off, an invoice keeps the rate it was entered with.

## Common problems

| Message | What to do |
| --- | --- |
| No Central Bank of the UAE exchange rate for … on or before … Import the rate first. | Import the monthly PDF or enter the rate. |
| The exchange rate must be the Central Bank of the UAE rate … dated … | Change the invoice's exchange rate to the one shown. |
| Enter your exchange rate API key in VAT Settings first. | Fill **Exchange Rate API Key** in VAT Settings, or import the PDF instead. |
| The exchange rate service rejected the API key. | Check the key with your rate service provider. |
| The file is not a PDF, could not be read, holds no rates, or is over 10 MB. | Use the Central Bank's original monthly PDF. |
| No foreign currency is enabled | Only AED is enabled, so no rate is needed. |

## Related pages

- [VAT Settings](/vat-compliance/vat-setup)
- [Foreign currency transactions](/accounting/multi-currency)
- [Sales and output VAT](/vat-compliance/sales-output-vat)

@@ records-audit | The FTA audit file and records
@summary Prepare the FTA audit file (FAF) for a period as one .csv file, and keep the VAT records the FTA can ask for.

The FTA can ask for an audit file (FAF): a set of tables with your company details, purchases, sales and general ledger for a period. DocFlow prepares it from your books. Preparing it changes nothing.

**Where to find it:** **VAT Compliance** > **Returns & Periods** > **Audit File**. From a period's VAT 201 you can also click **Audit file for this period**.

## Before you start

- You need **Accounts Manager** or **VAT Administrator**. Other users see "Not offered for this account".
- The entity has [VAT Settings](/vat-compliance/vat-setup).

## Steps

1. Open **Audit File**. The screen is titled **FTA audit file**.
2. Choose the **Period**, or choose **Custom dates** and enter **From** and **To**.
3. Click **Prepare audit file**.
4. In the **Sections** table, check the **Rows** of the **Fta audit file** section.
5. Click **Download .csv**.

!fig The FTA audit file screen with a quarterly period chosen, the Prepared message, and the Sections table showing the Fta audit file section with its row count and Download .csv button @shot 04-vat/14-audit-file.png

## What happens next

- You get one .csv file. It holds four blocks one after the other: company information, purchase listing, supply listing and general ledger. The file is exactly as DocFlow wrote it.
- Send the file to the FTA as they ask. Nothing in your books changes.

:::warning Check before you send
The screen says "Layout to be confirmed against the FTA specification." Check the file with your tax adviser before you send it.
:::

## Keeping records

:::uae How long to keep VAT records
Keep tax invoices, credit notes, import and export documents and your books for at least five years after the end of the tax period they relate to, longer for real estate. DocFlow keeps submitted documents and their attachments; do not delete them. See [Backups](/administration/backups).
:::

## Common problems

| Message | What to do |
| --- | --- |
| Not offered for this account. The audit file is prepared by the Accounts Manager and VAT Administrator roles. | Ask someone with one of those roles. |
| Choose the dates the file covers. | Choose a period, or enter **From** and **To**. |
| Could not load the periods | Generate the periods first. See [Filing periods and the VAT 201](/vat-compliance/vat-return). |

## Related pages

- [Filing periods and the VAT 201](/vat-compliance/vat-return)
- [VAT reports](/vat-compliance/vat-reports)
- [Version history and audit logs](/administration/audit-logs)

@@ vat-reports | VAT reports
@summary The output, input, reverse charge, margin scheme, reconciliation and number gaps reports that let you check your VAT before you file.

The VAT reports list the documents behind your VAT figures, so you can check them before you file. All of them filter by entity and dates. Open them from **VAT Compliance** > **Reports**.

## Before you start

- You need **Accounts Manager**, **Accounts User**, **VAT Administrator** or **System Manager**.
- Choose the **Entity** and the dates. Without them the report says "Choose a company and the dates the report covers."
- How report screens work (filters, columns, export) is covered in [Lists, filters and views](/getting-started/list-views).

## The reports

| Report | What it shows | Extra filters |
| --- | --- | --- |
| **VAT Output Report** | Each sales document line with its VAT category, emirate, taxable amount and VAT, with a total | **Customer**, **VAT Category**, **Emirate** |
| **VAT Input Report** | Each purchase document line with its VAT category, taxable amount and VAT, with a total | **Supplier**, **VAT Category** |
| **VAT Reverse Charge Report** | Purchases under the reverse charge, with the customs declaration and whether they were imported | none |
| **RCM Sales Report** | Your reverse charge sales: customer TRN, the goods (Reverse Charge Reference) and the customer's declaration | none |
| **Margin Scheme Stock Book** | Goods bought and resold under the profit margin scheme: purchase price, resold and unsold value, selling price, margin and VAT | none |
| **VAT Reconciliation Report** | Per invoice: the invoice total against the split by VAT category, with any difference | none |
| **Tax Invoice Number Gaps** | Missing numbers in the invoice series | **Document Type** (**Sales Invoice** or **Advance Tax Invoice**), **From**, **To** |

!fig The VAT Output Report for a quarter, listing each sales line with party, segment (B2B, B2C, B2G), VAT category, emirate, taxable amount and VAT, with a total row @shot 04-vat/15-vat-output-report.png

## Reading the reconciliation report

The **Status** column says:
- **OK**: the lines add up to the invoice.
- **Mixed categories**: the invoice has lines of more than one VAT category. Check that each is right.
- **Difference**: the lines and the invoice header do not agree. Look at **Taxable Difference** and **VAT Difference**.

## Reading the number gaps report

Each row is a missing number, with its **Series**, **What Is Known** about it (for example who deleted it and when), and the documents before and after it. Cancelled invoices are not gaps: they cannot be deleted.

## Other ways to check

- The VAT 201 of a period shows the documents behind each box. See [Filing periods and the VAT 201](/vat-compliance/vat-return).
- The **Invoices** screen lists invoices with their categories and return period. See [Sales and output VAT](/vat-compliance/sales-output-vat).

## Common problems

| Message | What to do |
| --- | --- |
| Choose a company and the dates the report covers. | Fill **Entity**, **From Date** and **To Date**. |
| Choose a company. | Fill **Entity**. |

## Related pages

- [Filing periods and the VAT 201](/vat-compliance/vat-return)
- [VAT roles and approvals](/vat-compliance/vat-roles)
- [Financial reports](/accounting/financial-reports)

@@ vat-roles | VAT roles and approvals
@summary Who can post, file, reopen, approve and correct VAT, and the approvals built into the filing flow.

VAT work is split between the people who post documents, the people who file the return, and the people who approve corrections. DocFlow has two VAT roles for this: **VAT Administrator** and **VAT Approver**. They work alongside the accounting roles. An administrator gives the roles to users. See [Users and roles](/administration/users-roles).

## Who can do what

| Task | Roles |
| --- | --- |
| Open the VAT screens (Filing Periods, Invoices) | Accounts Manager, VAT Administrator, VAT Approver, Accounts User, Sales User, Purchase User |
| Open the **Late Postings** screen | Accounts Manager, VAT Administrator, VAT Approver. Other roles get an error. |
| Change [VAT Settings](/vat-compliance/vat-setup) | VAT Administrator, System Manager. Accounts Manager and Accounts User can read them. |
| Generate periods, edit the return details, file a return | Accounts Manager, VAT Administrator. System Manager alone is not enough. |
| Reopen a filed period | VAT Administrator |
| Prepare the [audit file](/vat-compliance/records-audit) | Accounts Manager, VAT Administrator |
| Import, fetch or enter [exchange rates](/vat-compliance/exchange-rates) | Accounts Manager, VAT Administrator |
| Scan for [late postings](/vat-compliance/late-postings) | Accounts Manager, VAT Administrator, VAT Approver |
| Approve or reject late postings | VAT Approver, VAT Administrator |
| Create and submit [voluntary disclosures](/vat-compliance/voluntary-disclosure) | VAT Administrator, VAT Approver, System Manager |
| Create and submit [VAT adjustments](/vat-compliance/vat-adjustments) and VAT import adjustments | VAT Administrator, VAT Approver, System Manager |
| Create and submit [advance tax invoices](/vat-compliance/tax-point) | Accounts Manager, Accounts User, System Manager |
| Create and submit [tourist refund entries](/vat-compliance/tourist-refund) | Accounts Manager, Accounts User, System Manager. VAT Administrator can read them. |
| Run the [VAT reports](/vat-compliance/vat-reports) | Accounts Manager, Accounts User, VAT Administrator, System Manager |
| Change e-invoicing settings, test the connection, send, retry, check status | VAT Administrator, System Manager. See [E-invoicing](/vat-compliance/e-invoicing). |

A button you are not allowed to use is not shown. For example, **Reopen** appears only for a VAT Administrator, and **Generate periods** and **File return** only for Accounts Manager and VAT Administrator.

## A typical split

- **Accountants** (Accounts User) post sales and purchase invoices, record supplier tax invoices, advances and tourist refunds.
- **The VAT Approver** decides late postings and prepares voluntary disclosures and adjustments.
- **The VAT Administrator** owns VAT Settings, files the return, and is the only one who can reopen a filed period.

## Approvals built into the flow

- **Filing locks a period.** After filing, no document dated or reported in the period can be changed or cancelled. Only a VAT Administrator can reopen it, and must give a reason. Each filing and reopening is kept in the period's history.
- **Late postings wait for a decision.** A scan queues them as **Pending**. A VAT Approver or VAT Administrator approves each into an open return, or rejects it with a reason. Who decided and when is recorded.
- **Corrections over AED 10,000** go through a voluntary disclosure, which must carry the FTA reference before it can be submitted.

## Related pages

- [Filing periods and the VAT 201](/vat-compliance/vat-return)
- [Late postings](/vat-compliance/late-postings)
- [Role permissions](/administration/permissions)

@@ e-invoicing | E-invoicing
@summary What an e-invoice is, which documents DocFlow sends and which it never sends, test mode and production, the 14-day rule, and who can do what.

In the UAE, invoices between businesses must be sent as e-invoices. An e-invoice is the electronic copy of a tax invoice or tax credit note, in the format the UAE e-invoicing standard sets out. You do not type it. DocFlow builds it from the invoice you submit and sends it to the DocFlow e-invoicing service, the accredited provider (screens say "DocFlow"). The provider passes it to the buyer's provider and reports it to the FTA. This chain of accredited providers and the FTA is called the *network*.

You keep working the way you do now. You create and submit a sales invoice, and DocFlow builds the e-invoice and sends it. If data is missing, DocFlow tells you exactly what to fix and where, with a button that takes you there. Suppliers' e-invoices arrive by themselves, and DocFlow can turn each one into a draft purchase invoice.

E-invoicing is off until an administrator turns it on.

**Where to find it:** the four e-invoicing links at the top of the **VAT Compliance** sidebar, above the groups: **E-invoices Sent**, **E-invoices Received**, **E-invoice Deadlines** and **E-invoicing Settings**.

## What DocFlow sends

When e-invoicing is turned on, DocFlow sends these documents once they are submitted:

| Document | Sent? |
| --- | --- |
| Sales Invoice, including a Sales Return (credit note) | Yes |
| POS Invoice to a business customer | Yes, each one on its own |
| Advance Tax Invoice | Yes |
| Purchase Invoice | Only when it is [self-billed](/vat-compliance/self-billing) |

These documents are never sent. Their e-invoice status shows the reason:

- **A sale to a consumer.** The customer has **Consumer** ticked. The reason reads "Out of scope: a sale to a consumer (Ministerial Decision 244 of 2025, Article 5(2))."
- **A POS closing invoice.** The reason reads "POS closing invoice: its POS Invoices are sent one by one."
- **A normal purchase invoice.** The reason reads "Not self-billed: the supplier issues this e-invoice." Your supplier sends you that e-invoice. See [Received e-invoices](/vat-compliance/e-invoices-received).

Only documents dated on or after **Send Documents From** in the e-invoicing settings are sent automatically.

## How an e-invoice moves

1. You submit the invoice. If data is missing, the e-invoice waits as **Needs fixing**.
2. You fix the data. The e-invoice becomes **Ready to send**, and is sent by you or by itself.
3. While it is **Sending…**, DocFlow retries by itself up to 5 times if there is no answer. After that it shows **Couldn't reach DocFlow**.
4. Once DocFlow holds it, the network accepts it (**Sent ✓**) or rejects it (**Rejected by the network**). A rejected invoice is corrected with a credit note and a new invoice.

## Test mode (sandbox) and production

- **Sandbox** is test mode. DocFlow stores each document as a draft and does not send it to the network. Statuses read **Sent (test)**, and screens show "E-invoicing test mode: invoices are not sent for real." Every new setup starts here.
- **Production** sends real e-invoices to the tax authority network.

## The 14-day rule

An e-invoice must reach the provider within 14 days of the date of the transaction (Ministerial Decision 243 of 2025). The date of the transaction is the earlier of the invoice's posting date and its date of supply. DocFlow warns you as the limit gets close and lists these invoices under [E-invoice Deadlines](/vat-compliance/e-invoicing-registers). It warns you but never stops you.

## Who does what

| Role | Can do |
| --- | --- |
| VAT Administrator, System Manager | Change the e-invoicing settings, test the connection, send, retry, check status, send all fixed |
| Accounts Manager | See the account card and the admin banner, see sent e-invoices, import received e-invoices, make purchase invoices from them |
| Accounts User | See sent e-invoices, fix data on invoices and master records, make purchase invoices from received e-invoices |
| VAT Approver | See received e-invoices |

Fixing data (an HS code on an item, a TRN on a customer) only needs the normal right to edit that record.

## Setting up, in order

1. [Connect your DocFlow account](/vat-compliance/e-invoicing-connect)
2. [Get your records ready](/vat-compliance/e-invoicing-readiness)
3. [The e-invoice panel on an invoice](/vat-compliance/e-invoice-panel)
4. [Sending and statuses](/vat-compliance/e-invoicing-statuses)
5. [Point of sale](/vat-compliance/e-invoicing-pos)
6. [Registers and deadlines](/vat-compliance/e-invoicing-registers)
7. [When the provider does not answer](/vat-compliance/e-invoicing-outage)
8. [Received e-invoices](/vat-compliance/e-invoices-received)
9. [Troubleshooting](/vat-compliance/e-invoicing-troubleshooting)

## Related pages

- [VAT Settings](/vat-compliance/vat-setup)
- [VAT roles and approvals](/vat-compliance/vat-roles)

@@ e-invoicing-connect | Connect your DocFlow account
@summary Enter the DocFlow e-invoicing account for an entity, test the connection, choose how sending works, turn it on and move to production.

Before DocFlow can send e-invoices, an administrator enters the DocFlow account on the **E-invoicing Settings** screen, tests the connection and turns sending on. Each entity has its own settings. They belong to the entity's VAT Settings, so VAT must be set up first.

**Where to find it:** **VAT Compliance** > **E-invoicing Settings** (at the top of the sidebar). The VAT Settings form also has the link **Open e-invoicing settings**.

## Before you start

- You need the **VAT Administrator** or **System Manager** role to save the settings and test the connection.
- The entity's [VAT Settings](/vat-compliance/vat-setup), with its 15-digit TRN, must exist. If they do not, the screen shows "VAT is not set up for …" and a **Set up VAT Settings** button.
- You need the DocFlow login (address, login name and password) that DocFlow gave you. Your DocFlow login must include a company with your TRN.
- If you have more than one entity, choose the entity with the switch in the screen header.

## Steps

1. Open **E-invoicing Settings**.
2. In **DocFlow account**, leave **Environment** on **Sandbox** for your first tests.
3. In **Provider Address**, enter the https address DocFlow gave you. For the sandbox it is on `sandbox-api.docflow.ae`; for production it is on `api.docflow.ae`.
4. Enter **Provider Login** and **Provider Password**. If your administrator set the login on the server, these fields can stay empty.
5. In **Sending**, set **Send Documents From**. Documents dated before this day are never sent automatically.
6. Check **E-Invoices Required From** (default 1 July 2027). From this date, a purchase invoice that claims input VAT without the supplier's e-invoice gets a warning.
7. Choose **Block Submit Until Ready** (on by default):
   - On: a sales invoice or business POS invoice cannot be submitted while its e-invoice has problems to fix.
   - Off: it is submitted, and its e-invoice waits as **Needs fixing**.
8. Choose **Send When Fixed** (off by default):
   - On: an e-invoice that waited for a fix is sent by itself once nothing is left to fix.
   - Off: it waits as **Ready to send** until someone sends it.
9. Press **Save**.
10. Press **Test connection**. The **DocFlow connection** dialog shows the result, the environment and the address.
11. Read the **DocFlow e-invoicing** card on the same screen. Fix every line marked **Needs attention**. Its **Seller data for all invoices** group is explained in [Get your records ready](/vat-compliance/e-invoicing-readiness).
12. When the card is ready, tick **Send E-invoices** and press **Save**.

!fig The DocFlow account and Sending sections of E-invoicing Settings: Send E-invoices, Environment Sandbox, the provider address, the masked login and password, Send Documents From, E-Invoices Required From, Block Submit Until Ready and Send When Fixed @shot 05-e-invoicing/02-settings.png

!fig The DocFlow connection dialog after Test connection, showing that DocFlow refused the login, with the environment and address, above the DocFlow e-invoicing card with its Connection to DocFlow and Seller data for all invoices groups @shot 05-e-invoicing/02-test-connection.png

## Moving to production

1. Set **Environment** to **Production**.
2. Change **Provider Address** to the production address.
3. Tick **Confirm Production**. This confirms that real invoices are sent to the tax authority network.
4. Press **Save**, then **Test connection**.

## What happens next

- Every sales invoice, credit note, business POS invoice, advance tax invoice and self-billed purchase invoice that you submit with a date on or after **Send Documents From** is queued and sent.
- The account card headline tells you the state, for example "Ready. Test mode: documents stay at DocFlow as drafts and are not sent to the network." or "Ready: e-invoices are sent to the network." Its badge reads **Sandbox (test)** or **Production**. Press **Check again** to ask DocFlow now. DocFlow is otherwise asked at most every 5 minutes.
- While sending is on, if a connection check fails, admins see a banner on every page: "E-invoices can't be sent." with the link **Fix in e-invoicing settings**. **Hide until you sign in again** closes it.
- **Provider Not Answering Since** is filled and cleared by DocFlow. See [When the provider does not answer](/vat-compliance/e-invoicing-outage).
- Received supplier e-invoices are imported every hour. See [Received e-invoices](/vat-compliance/e-invoices-received).

## Common problems

| Message | What to do |
| --- | --- |
| The provider address must be an https address on docflow.ae. | Enter the address exactly as DocFlow gave it, starting with `https://`. |
| Enter the provider address and login before turning e-invoicing on. | Fill **Provider Address** and **Provider Login**, then tick **Send E-invoices**. |
| Tick the production confirmation: real invoices are sent to the tax authority network. | Tick **Confirm Production** or set **Environment** back to **Sandbox**. |
| The Environment is Production but the provider address in use is the DocFlow sandbox… | Make **Environment** and **Provider Address** match. If the address comes from the server, ask your administrator. |
| Test connection is greyed out: "Save first: the test uses the saved settings." | Press **Save**, then test. |
| DocFlow refused the login: … Check the login and password. | Re-enter the login and password, or reset the password in the DocFlow portal. |
| DocFlow did not answer: … Try again later. | The service or your network is down. Try later. |
| Your DocFlow login has no company with TRN … | Check the TRN in VAT Settings. If it is right, use **Copy for support** and ask DocFlow support to add the company to your login. |
| DocFlow has not registered the company as a sender on the network yet: contact DocFlow support. | Only DocFlow can do this. Use **Copy for support** and send the text to DocFlow support. |

## Related pages

- [Get your records ready](/vat-compliance/e-invoicing-readiness)
- [When the provider does not answer](/vat-compliance/e-invoicing-outage)
- [Troubleshooting](/vat-compliance/e-invoicing-troubleshooting)

@@ e-invoicing-readiness | Get your records ready
@summary Fix the seller checklist once for your entity, then the readiness cards on customers, items, modes of payment and POS profiles, before the first e-invoice goes out.

An e-invoice needs more data than a printed invoice: your entity's trade licence and emirate, each customer's TRN, an HS code on each goods item, a payment means code on each mode of payment, and so on. Fix this data once on the master record and every invoice that uses it is fixed. DocFlow shows what is missing in readiness cards, so you can clean your records first.

**Where to find it:** the **DocFlow e-invoicing** card on **E-invoicing Settings**; the e-invoicing card on the Entity form; the readiness card on each Customer, Item, Mode of Payment and POS Profile.

## Before you start

- Any user who can edit a record can fix it. The account card on the settings screen is shown to VAT Administrators, System Managers and Accounts Managers.
- Terms: a *TRN* is the 15-digit VAT number. An *HS code* classifies goods for customs. A *payment means code* says how an invoice is paid, for example 30 - Credit transfer or 10 - In cash. A *UN/ECE unit code* is the standard code for a unit, such as H87 for a piece.

## Step 1: your entity (once)

1. Open **E-invoicing Settings** and look at the group **Seller data for all invoices**. The same list is on the Entity form, titled **E-invoicing: seller data for all invoices**.
2. Work through each line marked **Missing** (the lines already done are folded under **N ready**):
   - **Entity TRN (15 digits) in VAT Settings**
   - **Trade licence (legal registration) on the entity**
   - **Entity address with the emirate**
   - **E-invoicing turned on in the e-invoicing settings**
   - **DocFlow address, login and password in the e-invoicing settings**
   - **At least one mode of payment with a payment means code**
3. Press **Fix** on a line. DocFlow opens the record at the right field and shows a bar "Fixing for …" at the top.
4. Enter the value and save. The bar reads "Saved. Go back to the invoice to see the task ticked off."
5. Press **Back to e-invoicing settings**. The line is now ticked. **Learn more** opens the e-invoicing guide at the matching section.

!fig The Seller data for all invoices group showing 2 to fix: the trade licence on the entity with a Fix button, and a mode of payment with a payment means code, with 4 ready folded below @shot 05-e-invoicing/03-seller-checklist.png

## Step 2: customers, items, modes of payment and POS profiles

1. Open a customer. The card **E-invoice readiness of this customer** lists **What this customer needs**.
2. Fix each line with its button, for example **Add**, then save.
3. Repeat on items (HS code or service code, unit code), modes of payment (payment means code, bank account with IBAN) and POS profiles (the payment means codes of its payment methods).

!fig The E-invoice readiness of this customer card with two things to fix: the address with the emirate (Add) and the TRN or trade licence (Open) @shot 05-e-invoicing/03-customer-readiness.png

The card headline tells you the state:

- "Ready for e-invoices."
- "E-invoices are sent; N things to check." These are suggestions. They do not stop sending.
- "E-invoices can't be sent yet: N things to fix."

A customer marked **Consumer** is always ready, because nothing is sent for a sale to a consumer. Untick **Consumer** if the customer runs a business.

## What happens next

When you save a customer, item, address, mode of payment, unit, item tax template, supplier, entity or VAT Settings, DocFlow checks again every e-invoice that was waiting for that fix. If nothing is left to fix, the e-invoice turns **Ready to send**. If **Send When Fixed** is on, it is sent by itself.

## Common problems

| Message | What to do |
| --- | --- |
| A TRN has exactly 15 digits. | Re-enter the TRN without spaces. |
| For the e-invoice the TRN must start with 1 and end with 03. | Check the number on the customer's VAT certificate. |
| No mode of payment has a payment means code yet. Set one on a Mode of Payment first. | Open the mode of payment, set its payment means code, save. See [Modes of payment](/accounting/mode-of-payment). |
| Add the trade licence of "…". If they are not VAT registered… | For a customer without a TRN, tick **This customer is not VAT registered** in the dialog and enter the trade licence or ID number. |

More messages are in [Troubleshooting](/vat-compliance/e-invoicing-troubleshooting).

## Related pages

- [The e-invoice panel on an invoice](/vat-compliance/e-invoice-panel)
- [Customers](/selling/customers)
- [Items](/stock/items)
- [Units of measure](/stock/units-of-measure)

@@ e-invoice-panel | The e-invoice panel on an invoice
@summary Read the E-invoice panel on a draft or submitted invoice, use its quick-fix dialogs, and submit once nothing is left to fix.

Every saved Sales Invoice, POS Invoice, Advance Tax Invoice and self-billed Purchase Invoice shows an **E-invoice** panel above its tabs. The panel tells you whether the e-invoice can go out, lists what to fix in plain words, and gives you a button for each fix. You use it to fix problems before you submit, and to follow the e-invoice after you submit.

## Before you start

- E-invoicing is set up for the entity. See [Connect your DocFlow account](/vat-compliance/e-invoicing-connect).
- Save the invoice once. The panel appears on saved documents.

## Steps

1. Create and save a sales invoice. See [Sales and output VAT](/vat-compliance/sales-output-vat).
2. Read the panel header. It shows **E-invoice:** with a status pill (**Needs Fixing** or **Ready To Submit** on a draft) and how many things are fixed, for example "0 of 4 fixed".
3. Read the tasks. They are grouped in this order: **This invoice**, **Items**, **Customer** (or **Supplier**), **Your entity**, **Settings**. Each group says where the fix applies:
   - "Fixes on this invoice only."
   - "Fix once: it fixes every invoice that uses it."
   - "This invoice is submitted: cancel it and amend it to change these."
4. Press the button on a task (**Add**, **Open**, **Choose**, **Correct**, **Add code** or **How to**). Many tasks open a small dialog:
   - **Add an HS code**: pick from "Used on similar items" or "From the HS chapters".
   - **Add the customer's TRN** (the button on the customer TRN task reads **Open**): enter the 15-digit TRN, or tick **This customer is not VAT registered** and enter the trade licence or ID number.
   - **Add the customer's address** / **Add your entity's address**: **Address Line 1**, **City/Town**, **Emirate**, **P.O. Box**, **Country**.
   - **Add the legal registration** (for your entity: **Add your entity's legal registration**): **Type**, **Number**, **Authority** (for example DED Dubai).
   - **Choose how the customer pays**: lists only modes of payment that have a payment means code.
5. Press **Save & re-check**. The task shows **Fixed ✓**.
6. Repeat until the panel reads "Nothing to fix: the e-invoice is sent when you submit."
7. Submit the invoice.

!fig The E-invoice panel on a draft sales invoice showing Needs Fixing and 0 of 4 fixed, with tasks grouped under This invoice, Customer and Your entity, each with a Choose, Add or Open button @shot 05-e-invoicing/04-panel-draft.png

!fig The Add the customer's TRN dialog with the This customer is not VAT registered tick box, the TRN field (15 digits, starts with 1 and ends with 03) and Save & re-check @shot 05-e-invoicing/04-quick-fix-trn.png

## Other things on the panel

- **Learn more** on a task opens the e-invoicing guide in a side drawer.
- **Technical details** shows the rule, what DocFlow said, the submission and attempts. **Copy details** copies them for support.
- "N suggestions (won't stop sending)" is folded. These do not block sending.
- The footer has **E-invoicing guide**, **Re-check**, **Download e-invoice PDF** and, for admins, **Check status** and **Send now** or **Send to DocFlow**. See [Sending and statuses](/vat-compliance/e-invoicing-statuses).
- The toolbar group **E-invoice** > **Readiness** opens a table of every rule, with a column **Blocks sending**.

## What happens next

- After you submit, the panel shows the e-invoice status and refreshes itself every few seconds while it is being sent.
- A field on the invoice copies the e-invoice status. You can add it as a column or a filter in the invoice list.
- If **Block Submit Until Ready** is on and something must still be fixed, **Submit** is refused and the focus moves to the panel.
- To fix data that sits on a submitted invoice (its date, lines or taxes), use the task's **Fix it with Cancel → Amend** dialog: **Cancel invoice…**, then **Amend**, fix the copy and submit it. You cannot cancel an invoice that already reached DocFlow. Issue a tax credit note instead.

## Common problems

| Message | What to do |
| --- | --- |
| This invoice cannot be submitted yet: N to fix for the e-invoice, first: … The E-invoice panel lists them all. | Fix the tasks in the panel, then submit. |
| Ask your administrator: the DocFlow account needs attention. | The problem is the account, not your invoice. Tell your VAT Administrator. |
| Save your changes to the invoice first, then choose the mode of payment. | Press **Save** on the invoice, then use **Choose** again. |
| The mode of payment of … cannot change now: its e-invoice is … | The e-invoice is already on its way. You can only change it while the e-invoice is **Needs fixing** or **Ready to send**. |
| Invoice … was sent as an e-invoice. Issue a tax credit note instead of cancelling it. | Use **Create** > **Tax credit note**. See [Sales and output VAT](/vat-compliance/sales-output-vat). |

All task messages are listed in [Troubleshooting](/vat-compliance/e-invoicing-troubleshooting).

## Related pages

- [Get your records ready](/vat-compliance/e-invoicing-readiness)
- [Sending and statuses](/vat-compliance/e-invoicing-statuses)

@@ e-invoicing-statuses | Sending and statuses
@summary What each e-invoice status means and what to do, how retries and answers work, and how to send an invoice that was not sent.

After you submit an invoice, DocFlow sends its e-invoice in the background. Each e-invoice has a status that tells you where it is and whether you need to do anything. Most of the time the answer is "nothing".

## Before you start

- Sending is on in the [e-invoicing settings](/vat-compliance/e-invoicing-connect).
- **Send to DocFlow**, **Check status** and **Retry** need the **VAT Administrator** or **System Manager** role. Everyone who can read the invoice sees the status.

## Statuses

| Status you see | Meaning | What to do |
| --- | --- | --- |
| **Needs fixing** | Data or settings are missing, so it was not sent. | Fix the tasks in the panel. Then press **Send now**, or let **Send When Fixed** send it. |
| **Ready to send** | Nothing is left to fix, but it waits. | Press **Send now**, or turn on **Send When Fixed**. |
| **Sending…** | Queued, being sent, or held by DocFlow and on its way to the network. | Nothing. DocFlow asks for the answer every 5 minutes. **Check status** asks now. |
| **Sent ✓** | Delivered and accepted. | Nothing. |
| **Sent (test)** | Stored at DocFlow as a draft in test mode. Not sent to the network. | Nothing. Production sends for real. |
| **Couldn't reach DocFlow** | No answer after 5 attempts. | Check the connection in the e-invoicing settings, then press **Send to DocFlow**. |
| **Rejected by the network** | Refused. | Correct what the error names. Then issue a credit note and a new invoice. If DocFlow never stored it, press **Send to DocFlow**. |
| **Not an e-invoice** | Out of scope (consumer sale, POS closing invoice, normal purchase invoice) or not sent. | Read the reason on the panel. |

The lists of e-invoices show the stored status. This is how it matches the panel:

| In the lists | On the panel |
| --- | --- |
| Blocked | **Needs fixing** |
| Ready | **Ready to send** |
| Queued, Sending, Submitted | **Sending…** |
| Accepted | **Sent ✓** |
| Sandbox Draft | **Sent (test)** |
| Failed | **Couldn't reach DocFlow** |
| Rejected | **Rejected by the network** |

## Steps: send an invoice that was not sent

Use this for an invoice submitted before e-invoicing was on, dated before **Send Documents From**, or waiting as **Ready to send** or **Couldn't reach DocFlow**.

1. Open the submitted invoice.
2. In the E-invoice panel, press **Send now** (on a **Ready to send** or **Needs fixing** e-invoice) or **Send to DocFlow** (in any other status). While the e-invoice is blocked the button reads **Send** and is greyed out.
3. Read the alert, for example "Sent to DocFlow – reference …" or "Queued for DocFlow".

!fig The E-invoice panel on a submitted invoice showing Ready To Send, the test mode notice, "Everything is fixed. Press Send now.", one folded suggestion and the Send now button @shot 05-e-invoicing/05-panel-submitted.png

## What happens next

- **Retries.** If DocFlow does not answer, or is busy, DocFlow tries again by itself: after 1 minute, then 2, 4 and so on, at most one hour apart, up to 5 attempts. The panel shows "Not your data: DocFlow did not answer. We retry automatically (next try …)."
- **No double sending.** Before any new attempt, DocFlow asks the provider whether it already holds the document. A document is never sent twice.
- **Refusals** are never retried by themselves. Fix the cause first.
- **Answers.** DocFlow asks for the network's answer every 5 minutes for 2 hours, then every hour. After 30 days without a final answer it stops asking, and the submission shows **Submitted, not followed**.
- **Cancelling.** Once an e-invoice reached DocFlow, the invoice cannot be cancelled. Issue a tax credit note.
- **Download e-invoice PDF** gets the PDF that DocFlow made of the e-invoice, also in test mode.

## Common problems

| Message | What to do |
| --- | --- |
| Not sent to DocFlow: E-invoicing is off for this company… | Ask your administrator to turn on **Send E-invoices**. |
| Not sent to DocFlow: Dated before the start date …, so not sent automatically. Send to DocFlow sends it now. | Press **Send to DocFlow** if this invoice must be an e-invoice. |
| The e-invoice of … is Accepted: it cannot be sent again. | It is already delivered. Nothing to do. |
| Only an e-invoice DocFlow holds can be checked (status …). | **Check status** works only after DocFlow holds it. |
| DocFlow does not hold this e-invoice yet. | The PDF exists only after DocFlow has stored the e-invoice. |
| Invoice … is being sent as an e-invoice right now. Try again in a few minutes. | Wait, then try the cancel again. It will likely need a credit note. |
| The provider has not given a final answer for 30 days and the document is no longer followed. Ask the provider about it. | Ask DocFlow support about the document, then record the outcome. |

## Related pages

- [The e-invoice panel on an invoice](/vat-compliance/e-invoice-panel)
- [Registers and deadlines](/vat-compliance/e-invoicing-registers)
- [Troubleshooting](/vat-compliance/e-invoicing-troubleshooting)

@@ e-invoicing-pos | E-invoicing at the point of sale
@summary Which till sales are sent as e-invoices, what the cashier sees, and how the back office fixes business sales that need attention.

At the till, DocFlow sends an e-invoice only for a sale to a business customer. A sale to a consumer (walk-in shopper) is never sent, and the end-of-day POS closing invoice is never sent either. Cashiers never fix e-invoice data. They see a short note, and the back office fixes the records.

## Before you start

- E-invoicing is set up, and the POS Profile is ready. Its payment methods need payment means codes. See [Get your records ready](/vat-compliance/e-invoicing-readiness).
- Walk-in customers should have **Consumer** ticked.

## Steps

1. Choose the customer at the till.
2. Read the strip above the cart:
   - "Consumer sale: no e-invoice"
   - "Business sale: e-invoice will be sent", with a chip **E-invoice ready** or **Business · E-invoice: N issues**
3. Complete the sale as usual. See [Point of sale](/accounting/pos).
4. If the strip showed issues, read the message after the sale and press **Details** to see the list.

!fig The point of sale screen with a business customer chosen and the strip above the cart reading "Business sale: e-invoice will be sent" with the E-invoice ready chip

## What happens next

- **Business sale, no issues:** the POS Invoice is sent as an e-invoice when it is submitted.
- **Business sale with issues, Block Submit Until Ready off:** "Sale saved · E-invoice needs back-office attention (N issues)". The sale is done, and its e-invoice waits as **Needs fixing**.
- **Business sale with issues, Block Submit Until Ready on:** "Not completed: the e-invoice needs back-office fixes first (N issues). The sale is kept as a draft." The back office fixes the records, then the draft can be submitted.
- In both cases DocFlow notifies Accounts Managers (and POS Managers where that role exists): "POS e-invoice … needs fixing before it can be sent."
- A POS return to a business customer is sent as a credit note.
- **Back office:** on **E-invoices Sent**, press **POS needing attention** to list these sales, fix them, then press **Send all fixed**. See [Registers and deadlines](/vat-compliance/e-invoicing-registers).

## Common problems

| Message | What to do |
| --- | --- |
| E-invoicing test mode | The account is on the sandbox. Sales are not sent for real. |
| Business · E-invoice: N issues | Finish the sale. Tell the back office, which fixes the customer, item or POS profile. |
| Not completed: … The sale is kept as a draft. | Keep the receipt. The back office submits the draft after the fix. |

## Related pages

- [Point of sale](/accounting/pos)
- [Registers and deadlines](/vat-compliance/e-invoicing-registers)

@@ e-invoicing-registers | E-invoice registers and deadlines
@summary Watch every e-invoice on E-invoices Sent, clear the top blockers with Send all fixed, and work through E-invoice Deadlines before the 14-day limit.

Two screens let you watch every e-invoice of your entity in one place. **E-invoices Sent** shows the health of the connection, what blocks the most invoices, and each e-invoice with its status. **E-invoice Deadlines** lists e-invoices close to or past the 14-day limit.

**Where to find it:** **VAT Compliance** > **E-invoices Sent** and **E-invoice Deadlines** (at the top of the sidebar). You see these links if you can read e-invoice submissions (Accounts User, Accounts Manager, VAT Administrator, System Manager).

## Before you start

- **Send all fixed** and **Retry** need the **VAT Administrator** or **System Manager** role.

## Steps: clear the e-invoices that need fixing

1. Open **E-invoices Sent**.
2. Read the **Health** card: **Environment**, **Last successful send**, **Last 30 days** (counts by status) and **Last error** with a hint.
3. When some e-invoices are blocked, a **Top blockers** card appears: "Fix these first: each one clears several invoices at once." Each row says "blocks N invoices".
4. Press **Fix** on the first row and save the record it opens. Repeat for the other rows.
5. Press **Send all fixed (N)** and confirm "Check every invoice that needed fixing again and send the ones that are now ready?"
6. Read the result, for example "12 checked again, 9 queued to send."
7. Use the quick filters **Needs fixing**, **Couldn't reach DocFlow**, **Rejected** or **POS needing attention** to see what is left. You can also filter by status and date.
8. Click a row to open **E-invoice …**. It shows the provider's last answer and the document as built. An admin can press **Retry** and confirm "Send this e-invoice again?".

!fig The Health card on E-invoices Sent showing the Sandbox environment, the last successful send, last-30-day counts by status and the last error with its hint @shot 05-e-invoicing/07-sent-register.png

## Steps: check deadlines

1. Open **E-invoice Deadlines**.
2. Work from the top. The list is sorted most urgent first, with the columns **Send by**, **Days left**, **Status** and **Warning**.
3. Open the invoice and fix or send it.

## What happens next

- An e-invoice must reach DocFlow within 14 days of the date of the transaction: the earlier of the posting date and the date of supply. The warning starts with 4 days left: "Send this e-invoice by …: the limit is 14 days from the date of the transaction (N days left)."
- Past the limit: "This e-invoice is late: it had to be sent by …, 14 days from the date of the transaction." DocFlow still sends it. Nothing is blocked.
- An e-invoice leaves the list as soon as DocFlow holds it.
- An empty list reads "Nothing is due".

## Common problems

| Message | What to do |
| --- | --- |
| No invoice of this entity has been queued for sending. | E-invoicing is off, or nothing was submitted since **Send Documents From**. |
| … checked again; none is ready to send yet. | Something is still missing. Open one invoice and read its panel. |
| A red banner about the provider not answering | See [When the provider does not answer](/vat-compliance/e-invoicing-outage). |

## Related pages

- [Sending and statuses](/vat-compliance/e-invoicing-statuses)
- [When the provider does not answer](/vat-compliance/e-invoicing-outage)

@@ e-invoicing-outage | When the provider does not answer
@summary How DocFlow notices an e-invoicing outage, the red notice with the date to tell the FTA, and what to do until the service is back.

Sometimes the DocFlow service, or your connection to it, is down. DocFlow keeps your invoices and sends them again by itself. If the outage lasts, the law asks you to tell the Federal Tax Authority (FTA) within 2 business days (Ministerial Decision 243 of 2025, Article 12). DocFlow tracks the time and tells you the date, but you must tell the FTA yourself.

## How DocFlow notices

- When an attempt gets no answer, or a server error, DocFlow fills **Provider Not Answering Since** in the e-invoicing settings. A "too many requests" answer does not count.
- Any answer from DocFlow clears the field.
- Invoices keep their place in the queue and are retried by themselves. See [Sending and statuses](/vat-compliance/e-invoicing-statuses).

## What you see

After 4 hours without an answer, a red notice appears on **E-invoices Sent**, on **E-invoice Deadlines**, in the **DocFlow e-invoicing** card and at the top of each e-invoice submission, for example:

"The e-invoicing provider has not answered since 18-11-2026 09:00:00. If the e-invoicing system is down, tell the Federal Tax Authority by 20-11-2026 (2 business days)."

!fig The red provider outage notice giving the time the provider stopped answering and the date to tell the Federal Tax Authority @shot 05-e-invoicing/08-outage-banner.png

Business days skip Saturday, Sunday and the holidays in the entity's default holiday list (set on the entity; see [Holiday lists](/organization/holiday-list)). This is not the **Federal Holidays** list in VAT Settings, which counts only for voluntary disclosures.

## What to do

1. Press **Check again** on the account card, or **Test connection** on the e-invoicing settings, to make sure the problem is not your login.
2. Check DocFlow's service status, or ask DocFlow support.
3. If the e-invoicing system is down, tell the FTA before the date shown.
4. Keep issuing invoices as usual. When DocFlow answers again, queued invoices are sent by themselves. Any invoice in **Couldn't reach DocFlow** needs **Send to DocFlow** on the invoice, or **Retry** on its e-invoice screen. **Send all fixed** does not pick these up.

## Related pages

- [Connect your DocFlow account](/vat-compliance/e-invoicing-connect)
- [Registers and deadlines](/vat-compliance/e-invoicing-registers)

@@ e-invoices-received | Received e-invoices
@summary Import your suppliers' e-invoices, match them to suppliers, and turn each one into a draft purchase invoice to claim input VAT.

Your suppliers send their e-invoices to your entity through the network. DocFlow imports them, matches each one to a supplier, and can make a draft purchase invoice from it with the lines and VAT filled in. That draft is what you claim input VAT on, so you keep the supplier's e-invoice as evidence.

**Where to find it:** **VAT Compliance** > **E-invoices Received** (at the top of the sidebar). The records are **E-Invoice Received** documents.

## Before you start

- E-invoicing is turned on. Imports run every hour while it is on.
- To make drafts, match again or ignore, you need **Accounts User** or **Accounts Manager**. **Import Now** needs **Accounts Manager**. VAT Approvers can read the records.
- Each supplier needs its TRN on the supplier record, so DocFlow can match it. See [Suppliers](/buying/suppliers).
- To get item lines instead of expense lines, add the supplier's part numbers to your items. See [Supplier prices and item suppliers](/buying/supplier-price-lists).

## Steps

1. Open **E-invoices Received**.
2. To fetch now instead of waiting for the hour, open the **E-Invoice Received** list and press **Import Now**. "The import runs in the background."
3. Look at the **State** column and click the **Invoice no.** of a row in **Ready**.
4. Press **Open the form**, then **Make Draft Purchase Invoice**.
5. Check the draft: supplier, lines, item tax templates and accounts.
6. Submit the purchase invoice.

!fig The E-invoices received screen listing three supplier e-invoices with issue date, seller and TRN, state (Posted, Supplier unknown, Ready), net, VAT and grand total @shot 05-e-invoicing/09-received-list.png

!fig An E-Invoice Received in state Ready, with the supplier and buyer TRNs as sent, the matched supplier and the amounts, and the Make Draft Purchase Invoice, Match Again and Ignore buttons @shot 05-e-invoicing/09-received-form.png

## States

| State | Meaning | What to do |
| --- | --- | --- |
| New | Just imported. | Wait, or press **Match Again**. |
| Supplier unknown | No supplier, or more than one, has the seller's TRN. | Create or correct the supplier, then **Match Again**. |
| Not for us | The buyer TRN is not yours, or it is a self-billed document a customer issued for your sale. | Read **Message**. Record a self-billed sale by hand. **Ignore** if it is not yours. |
| Duplicate | A purchase invoice already holds this supplier invoice number. | **Ignore**, or check the existing invoice. |
| Ready | Matched and ready. | **Make Draft Purchase Invoice**. |
| Draft made | A draft purchase invoice exists. | Open it with **Purchase Invoice**, check, submit. |
| Posted | The purchase invoice is submitted. | Nothing. |
| Ignored | Someone ignored it, with a reason. | Nothing. |

## What happens next

- The draft uses the received date as its posting date. Stock is not updated.
- Lines are matched to your items through the supplier's part number. Other lines become expense lines.
- DocFlow picks the item tax template by VAT category and rate.
- A supplier's credit note becomes a **Purchase Return** against the purchase invoice it corrects.
- When you submit, DocFlow compares net and VAT in AED with the e-invoice, line by line, to within 1 fils. If they differ, submit is refused.
- Submitting moves the record to **Posted**. Cancelling or deleting the purchase invoice moves it back to **Ready**.
- **Ignore** asks for a reason, which is stored with your name.
- From **E-Invoices Required From** (see [Connect your DocFlow account](/vat-compliance/e-invoicing-connect)), a purchase invoice that claims input VAT from a VAT-registered supplier without an e-invoice shows the warning "Supplier's e-invoice missing". Tax invoices you receive on paper or PDF are covered in [Purchases and input VAT](/vat-compliance/purchases-input-vat).

## Common problems

| Message | What to do |
| --- | --- |
| No supplier has the TRN …: create or correct the supplier, then match again. | Add the TRN to the supplier, then **Match Again**. |
| More than one supplier has the TRN …: keep one, then match again. | Merge or correct the duplicate suppliers. |
| The buyer TRN … is not the TRN of … | It was sent to another entity's TRN. Check your entity switch, or **Ignore** it. |
| Purchase invoice … already holds supplier invoice … | It is entered already. **Ignore** the duplicate. |
| Line …: no item tax template for category … at …%: choose one on the draft. | Choose the item tax template on that line of the draft. |
| The corrected invoice … was not found among the submitted purchase invoices of this supplier: choose it on the draft. | Pick the original purchase invoice in **Return Against** on the draft. |
| The supplier's e-invoice … has net … and VAT … in AED; this invoice has net … and VAT … | Correct the lines or the tax templates so they match the e-invoice. |
| The supplier's e-invoice … , not this one. Delete this draft. | Another purchase invoice already claims it. Delete this draft. |
| Only a received e-invoice in state Ready gets a draft purchase invoice; this one is … | Fix the state first, for example with **Match Again**. |
| Give the reason for ignoring this received e-invoice. | Enter a **Reason** in the Ignore dialog. |
| Set a default entity first. | Set your default entity, then **Import Now**. |

## Related pages

- [Purchases and input VAT](/vat-compliance/purchases-input-vat)
- [Purchase Entry](/buying/purchase-entry)

@@ e-invoicing-troubleshooting | E-invoicing troubleshooting
@summary Every e-invoice status and task message, grouped by where the fix belongs, with what to do.

This page lists what you can see on an e-invoice and what to do about it. Find the status first, then the task message. Task messages appear in the E-invoice panel on the invoice, in **Top blockers** and in the readiness cards. In the messages below, "…" stands for the customer, item or record named on your screen.

Most tasks have a button next to them that opens the right record at the right field. Use it. After you save, the task is checked again by itself.

## By status

| Status | Hint DocFlow shows | What to do |
| --- | --- | --- |
| Needs fixing | Not sent: fix what the error names, then press Send to DocFlow. | Fix the tasks below. |
| Ready to send | Nothing is left to fix: press Send to DocFlow (or turn on Send When Fixed in the e-invoicing settings). | Press **Send to DocFlow**. |
| Sending… (queued) | Waiting for the next attempt; nothing to do. | Nothing. |
| Sending… (sending) | Being sent now; the line updates by itself. | Nothing. |
| Sending… (held by DocFlow) | DocFlow holds it and is passing it to the network; the answer is fetched every few minutes. Check status asks now. | Nothing, or **Check status**. |
| Sent ✓ | Delivered and accepted; nothing to do. | Nothing. |
| Sent (test) | Stored at DocFlow as a draft (sandbox): not sent to the network. | Nothing. Switch to production for real sending. |
| Couldn't reach DocFlow | No final answer after several attempts. Check the connection in the e-invoicing settings, then press Send to DocFlow. | **Test connection**, then **Send to DocFlow**. |
| Rejected by the network | Refused. Correct what the error names, then issue a credit note and a new invoice; or Send to DocFlow if DocFlow never stored it. | Read the error. If the invoice number was used, issue a tax credit note and a new invoice. |
| Submitted, not followed | The provider has not given a final answer for 30 days and the document is no longer followed. | Ask DocFlow support about the document, then record the outcome on the e-invoice submission. |

## Your entity (seller)

| Message | What to do |
| --- | --- |
| Enter the TRN of "…". | Enter the 15-digit TRN in [VAT Settings](/vat-compliance/vat-setup). |
| Correct the TRN of "…" (…): it must be 15 digits, start with 1 and end with 03. | Correct the TRN in VAT Settings. |
| Correct the TIN of "…": 10 digits starting with 1… | The TIN is the first 10 digits of the TRN. Correct the TRN, or the TIN override. |
| Add the trade licence (legal registration) of "…". | Open the entity and add the trade licence type, number and authority. |
| Add the address of "…", with the emirate. | Add the entity's address with **Emirate**. |

## Customer (buyer) and any party

| Message | What to do |
| --- | --- |
| Add the TRN of "…". If they are not VAT registered, add their trade licence number instead. | Use **Add**: enter the TRN, or tick **This customer is not VAT registered** and enter the trade licence. |
| Correct the TRN of "…" (…): it must be 15 digits… | Correct the customer's TRN. |
| "…" is on the e-invoicing network but has no valid TIN (10 digits starting with 1). | Enter the customer's TRN, or its TIN override. |
| Add the trade licence (legal registration) of "…": a document without VAT needs it. | Add the customer's trade licence. |
| Complete the address "…" of "…": add address line 1 / city / the emirate. | Open the address and fill the parts named. |
| Choose the type of the legal registration of "…". / Choose a known type… | Pick a type such as Commercial/Trade license. |
| Enter the legal registration number (…) of "…". | Enter the number. |
| Enter the authority that issued the trade licence of "…". | Enter the authority, for example DED Dubai. |
| Choose the country that issued the passport of "…". | Choose the country. |
| Not an e-invoice: "…" is marked as a consumer, so nothing is sent… | Nothing, unless the customer runs a business. Then untick **Consumer**. |
| "…" is marked as a consumer but has a TRN… / …has a trade licence… | The customer is a business. Untick **Consumer**, or remove the wrong TRN or licence. |

## Items

| Message | What to do |
| --- | --- |
| Add an HS code to "…" (row …). | Use **Add code**, or set **HS Code** on the item. |
| Add a service accounting code (SAC) to "…". | Set **SAC Code** on the service item. |
| Add the GTIN of "…": a reverse charge line needs it. | Set **GTIN** on the item. |
| Check the GTIN of "…": a GTIN has 8, 12, 13 or 14 digits. | Correct the GTIN. |
| Add the UN/ECE unit code to the unit "…". | Open the unit of measure and set its code, for example H87 for a piece. |
| Add "…" at 0 % to the item tax template "…"… | Open the item tax template and add the account at 0 %. |

## Payment

| Message | What to do |
| --- | --- |
| Choose how the customer pays: pick a mode of payment that has a payment means code. | Use **Choose** on the invoice. |
| Give the mode of payment "…" a payment means code (for example 30 - Credit transfer or 10 - In cash). | Open the mode of payment and set **Payment Means Code**. |
| Link a company bank account with an IBAN to the mode of payment "…": a credit transfer needs it. | Set the default bank account on the mode of payment. |
| Add a bank account with an IBAN for the supplier "…". | Add the supplier's bank account (self-billing). |
| Enter the due date: an amount is payable. | Enter **Payment Due Date**. |

## Lines and VAT

| Message | What to do |
| --- | --- |
| Add 5% VAT to rows …: they are standard rated but carry no VAT. | Choose the sales taxes template. |
| Correct the VAT on rows …: a standard rated line carries 5%, not …%. | Fix the tax rate or the item tax template. |
| Correct the VAT of category … at …%: … AED booked, … AED expected… | Fix the taxes table so the VAT matches the lines. |
| Choose the item tax template of the VAT category on rows … | Choose the item tax template on those lines. |
| Choose the reverse charge goods on rows … | Set **Reverse Charge Goods** on those lines. |
| "…" has no goods code in the e-invoice standard yet… | These lines cannot be sent as an e-invoice yet. Ask your administrator. |
| Set rows … to category N… / Enter the selling price on rows …: a margin scheme line needs it. | Fix the margin scheme lines. |
| Add at least one line to the invoice. / Enter a quantity on rows … | Complete the lines. |
| A seller without a TRN can only issue exempt, out-of-scope or zero-rated lines… | Enter the TRN, or change the lines. |
| Remove … from the transaction type: a document without VAT (type …) cannot carry it. | Clear the transaction type flag named. |

## Transaction type, credit notes, currency

| Message | What to do |
| --- | --- |
| Enter the delivery address (line 1, city and emirate or state)… | Fill the delivery address on the invoice. |
| Choose one of the seven emirates as the delivery emirate. | Correct **Delivery Emirate or State**. |
| Enter the beneficiary ID: a free trade zone supply needs it. | Fill **Beneficiary ID**. |
| Enter the principal's ID (Agent ID)… / Correct the principal's ID… | Fill or correct **Agent ID**. |
| Enter the invoicing period… / Correct the invoicing period: it ends before it starts. | Fix **Billing Period From** and **To**. |
| Choose the reason for the credit note. | Fill **Credit Note Reason**. |
| Enter the invoice this credit note refers to. | Fill **Return Against**. |
| The date of supply is not before the invoice date, so it is left out of the e-invoice. | A note only. |
| Enter the exchange rate from … to AED. / Correct the exchange rate… | Fix **Exchange Rate**. |
| The exchange rate has more than … decimals… | A note only. |
| Enter the service accounting code (SAC) of the advance. / The advances set off at …% exceed… | Fix the advance tax invoice or the advances table. |

## Self-billing

| Message | What to do |
| --- | --- |
| Enter the self-billing agreement reference / date on the supplier "…". | Fill them on the supplier. |
| The self-billing agreement with "…" starts on …, after the document date. | Correct the agreement date or the document date. |
| Add the TRN of the supplier "…": a self-billed document needs a VAT registered supplier. | Add the supplier's TRN. |
| Remove rows …: a reverse charge line / a margin scheme line cannot be self-billed. | Take those lines off the self-billed invoice. |

## Connection and DocFlow answers

| Message | What to do |
| --- | --- |
| Enter the DocFlow address, login and password in the e-invoicing settings. | See [Connect your DocFlow account](/vat-compliance/e-invoicing-connect). |
| Check the e-invoicing environment in the e-invoicing settings: … | Make **Environment** and **Provider Address** match. |
| DocFlow did not accept the login… | Re-enter the login and password, or reset the password in the DocFlow portal. |
| Your DocFlow login has no company with TRN … | Check the TRN, or ask DocFlow to add the company to your login. |
| DocFlow could not be reached. The invoice is sent again at …; nothing to do. | Nothing. |
| DocFlow gave no final answer after several attempts… | **Test connection**, then **Send to DocFlow**. |
| DocFlow has not registered "…" as a sender on the e-invoicing network yet… | Contact DocFlow support. |
| DocFlow could not find "…" on the e-invoicing network. Check the customer's TRN and TIN, then send again. | Check the customer's TRN. |
| DocFlow refused line … ("…"): … / DocFlow refused the details of "…": … / DocFlow refused the invoice: … | Correct what the detail names, then send again. |
| Correct the invoice: it breaks rule … of the e-invoice standard (…). | Correct the invoice data named. If the invoice is submitted, cancel and amend it. Then send again. |
| The network rejected this invoice (…). Its number is used now: issue a credit note and a new invoice. | Issue a tax credit note and a new invoice. |
| The invoice is cancelled, so it is not sent. | Nothing. |
| Unexpected error while sending; see the error log. A retry sends the same document. | Press **Send to DocFlow** again. If it repeats, tell your administrator. |

## Related pages

- [The e-invoice panel on an invoice](/vat-compliance/e-invoice-panel)
- [Sending and statuses](/vat-compliance/e-invoicing-statuses)
- [Get your records ready](/vat-compliance/e-invoicing-readiness)
