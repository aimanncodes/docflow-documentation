@@ overview | Accounting at a glance
@summary How money flows through DocFlow, which documents post what, who does what, and how to set Accounting up.

DocFlow's accounting is double-entry and real-time. You rarely post to the ledger by hand: invoices, payments, stock movements, payroll and depreciation create their own entries the moment they are submitted, so the trial balance is always current and every figure can be traced back to the document that created it.

!fig Accounting workspace with receivables, payables and profit and loss charts

## How documents become accounting entries

| Document | Debit | Credit |
| --- | --- | --- |
| Sales Invoice | Debtors | Sales, VAT Output |
| Purchase Invoice | Stock or Expense, VAT Input | Creditors |
| Payment Entry (receive) | Bank | Debtors |
| Payment Entry (pay) | Creditors | Bank |
| Delivery Note | Cost of Goods Sold | Stock |
| Purchase Receipt | Stock | Stock Received But Not Billed |
| Payroll | Salaries | Payroll Payable, deductions |
| Depreciation | Depreciation Expense | Accumulated Depreciation |
| Journal Entry | Any | Any |

Submitted entries cannot be edited. Corrections are made by cancelling (which posts reversing entries) or by issuing credit and debit notes. This immutable ledger is what makes DocFlow audit-ready.

## Who does what

| Role | Typical daily work |
| --- | --- |
| Accounts User | Enters invoices, records receipts and payments |
| Accounts Manager | Approves journals, reconciles banks, closes periods, prepares VAT returns |
| Auditor | Read-only access to every ledger and report |
| Managing director | Dashboards, cash position and profit and loss |

## Setting up Accounting

1. Review the [chart of accounts](/accounting/chart-of-accounts) and add your bank accounts.
2. Set company accounting defaults and [accounts settings](/accounting/accounts-settings).
3. Set up [cost centres](/accounting/cost-centres-budgets) and dimensions.
4. Set up [VAT](/uae-compliance/vat-setup) templates and [modes of payment](/accounting/mode-of-payment).
5. Create [payment terms](/accounting/payment-terms) templates.
6. Load [opening balances](/accounting/opening-balances).
7. Post test transactions, check the ledger, then cancel them before going live.

## A typical month

1. Invoices and bills are posted daily.
2. Receipts and payments are recorded as they happen.
3. Banks are reconciled weekly.
4. Accruals, prepayments and depreciation are posted at month end.
5. The VAT return is prepared at the end of each tax period.
6. The period is locked and reports go to management.

:::uae Built for UAE VAT
Every sales and purchase document carries a tax template. DocFlow tracks output VAT, input VAT and reverse charge separately and fills in the VAT 201 return from your transactions. See [UAE Compliance](/uae-compliance/overview).
:::

:::details Can I use DocFlow only for accounting, without stock?
Yes. Use non-stock items for everything you buy and sell, and leave **Update Stock** unticked. You can switch on inventory later.
:::

:::details What accounting standard does DocFlow follow?
DocFlow records transactions; the standard is your choice. Most UAE companies report under IFRS, and the default chart and reports are designed around it.
:::

@@ chart-of-accounts | Chart of accounts
@summary Understand the account tree, add and organise accounts, set account types and keep the structure clean as you grow.

The **Chart of Accounts** is the list of every account your company posts to, arranged as a tree. Reports such as the balance sheet and profit and loss are built from it, so a clear structure makes every report easier to read.

:::note Before you start
You need the **Accounts Manager** role to change the chart. Agree structural changes with your auditor, and make them before go-live where possible.
:::

## How the tree works

- The five **root groups** are Assets, Liabilities, Equity, Income and Expenses. They cannot be renamed or deleted.
- **Group accounts** organise other accounts, for example *Current Assets › Bank Accounts*. You cannot post to a group.
- **Ledger accounts** receive postings, for example *Emirates NBD – Current AED*.
- Every account belongs to one company. Each company in DocFlow has its own chart.

!fig Chart of accounts tree with assets expanded to show bank and receivable accounts

## Creating your chart

When you create a company, choose one of:

| Option | When to use |
| --- | --- |
| Standard Template | A clean IFRS-style chart suitable for most UAE businesses |
| Existing Company | Copy the chart of a sister company for consistent group reporting |
| Chart of Accounts Importer | Upload your own chart from a spreadsheet when migrating |

### Importing a chart from a spreadsheet

1. Go to **Accounting › Chart of Accounts Importer**.
2. Choose the company and download the template.
3. Fill in one row per account: name, parent, number, Is Group, root type, account type and currency.
4. Upload, click **Validate**, review the preview tree and click **Import**.

The importer replaces the company's chart, so use it only before any transactions are posted.

## Adding an account

1. Open **Accounting › Chart of Accounts**.
2. Click the parent group and then **Add Child**.
3. Enter the **Account Name** and, optionally, an **Account Number**.
4. Tick **Is Group** only if this account will hold others.
5. Choose the **Account Type** if it has special behaviour (see below).
6. For a foreign currency bank or party account, set the **Account Currency**.
7. Click **Create New**.

## Account fields

| Field | What it does |
| --- | --- |
| Account Name | Shown in reports; keep it short and clear |
| Account Number | Optional code used for sorting, for example 1110 for the main bank |
| Parent Account | The group above it |
| Is Group | Groups hold accounts; only ledgers take postings |
| Root Type | Inherited from the top of the branch |
| Report Type | Balance Sheet or Profit and Loss, inherited from the root |
| Account Type | Special behaviour in transactions (see below) |
| Account Currency | Currency of postings; fixed once used |
| Tax Rate | Default rate for tax accounts |
| Freeze Account | Blocks new postings |
| Balance Must Be | Debit or Credit; warns when the balance goes the wrong way |
| Disabled | Hides the account from new transactions |

## Account types

| Account Type | Behaviour |
| --- | --- |
| Bank | Shown in payments, bank reconciliation and bank account records |
| Cash | Shown in payments and POS |
| Receivable | Needs a party; drives customer ledgers and ageing |
| Payable | Needs a party; drives supplier ledgers and ageing |
| Tax | Available in tax templates and the VAT report |
| Stock | Updated by stock transactions under perpetual inventory |
| Stock Received But Not Billed | Holds goods received but not yet invoiced |
| Stock Adjustment | Takes differences from stock counts and revaluations |
| Cost of Goods Sold | Charged when goods are delivered |
| Fixed Asset, Accumulated Depreciation, Depreciation | Used by the Assets module |
| Capital Work in Progress | Assets under construction |
| Asset Received But Not Billed | Assets received before the bill |
| Round Off | Absorbs rounding differences |
| Income Account / Expense Account | Shown in item and invoice defaults |
| Equity | Used for capital and reserves |
| Temporary | Opening balances during migration |
| Chargeable | Charges added to invoices, such as freight |

## A suggested structure for a UAE trading company

| Group | Typical ledgers |
| --- | --- |
| Current Assets › Bank Accounts | One per bank account and currency |
| Current Assets › Cash | Cash in hand, petty cash per site |
| Current Assets › Accounts Receivable | Debtors AED, Debtors USD, PDC Receivable, Advance to Suppliers |
| Current Assets › Stock Assets | Stock in Hand, Goods in Transit |
| Current Assets › Prepayments | Prepaid rent, prepaid insurance, prepaid licences |
| Current Assets › VAT Recoverable | VAT Input 5%, VAT Reverse Charge Input |
| Non-current Assets | Vehicles, Equipment, Furniture, Leasehold Improvements, accumulated depreciation |
| Current Liabilities › Accounts Payable | Creditors AED, Creditors USD, PDC Payable, Advance from Customers |
| Current Liabilities › Duties and Taxes | VAT Output 5%, VAT Reverse Charge Output, VAT Payable, Corporate Tax Payable |
| Current Liabilities › Accruals | Accrued salaries, accrued expenses, air ticket provision |
| Non-current Liabilities | Provision for End of Service Benefits, long-term loans |
| Equity | Share Capital, Statutory Reserve, Retained Earnings, Shareholder Current Accounts |
| Income | Sales – Goods, Sales – Services, Other Income |
| Expenses › Cost of Sales | Cost of Goods Sold, freight inward, customs duty |
| Expenses › Staff Costs | Salaries, Gratuity, Air Tickets, Visa and Labour Costs, Medical Insurance |
| Expenses › Premises | Rent, Electricity and Water, Maintenance |
| Expenses › Administration | Telecoms, Licences and Permits, Professional Fees, Bank Charges |

:::uae Statutory reserve
Some UAE companies are required by their constitutional documents or applicable law to transfer a share of annual profit to a statutory reserve until it reaches a set percentage of share capital. Keep a separate **Statutory Reserve** account so the transfer is visible.
:::

## Changing the chart after go-live

| Change | Allowed? | How |
| --- | --- | --- |
| Rename an account | Yes | Open the account and rename |
| Change the account number | Yes | Edit the field |
| Move under a different parent | Yes, within the same root type | Change **Parent Account** |
| Merge two accounts | Yes | Rename one to the other's exact name and tick **Merge** |
| Group to ledger or back | Only without postings | Create a new account instead |
| Change currency | Only without postings | Create a new account |
| Delete | Only without postings | Otherwise disable it |

## Common problems

:::details "Cannot convert ledger to group as it has existing transactions"
Create a new group with the name you want, move the ledger under it, then rename as needed.
:::

:::details A new bank account does not appear in payment entries
Check that its **Account Type** is Bank and that it belongs to the right company, then add it to a [mode of payment](/accounting/mode-of-payment).
:::

:::details The tree looks out of order
Account numbers control sorting. Add numbers, or click **Rebuild Tree** if the structure looks corrupted after a large import.
:::

## Related pages

- [Cost centres and budgets](/accounting/cost-centres-budgets)
- [Setting up VAT](/uae-compliance/vat-setup)
- [Financial reports](/accounting/financial-reports)

@@ sales-invoice | Sales invoices
@summary Everything about billing customers: every section of the form, every type of invoice, the accounting behind it and how to fix common problems.

A **Sales Invoice** is the document that tells your customer how much they owe and creates the receivable in your books. In the UAE it is also your **tax invoice**, so it must carry the details required by the VAT law. Every sale you make, whether goods, services, a deposit, a cash sale at the counter or a recharge to a group company, ends with a sales invoice.

:::note Before you start
- The customer exists with a TRN (if VAT registered), a billing address with the emirate filled in, and payment terms.
- The items exist, with an income account and, for stock items, enough stock in the warehouse.
- A selling price list and a VAT template are set up. See [Setting up VAT](/uae-compliance/vat-setup).
- Your role includes **Accounts User** (or **Sales User** with permission to create invoices). Submitting may be restricted by a [workflow](/framework/workflows).
:::

## Types of sales invoice

One form covers several situations. A few ticks change how it behaves.

| Type | How you make it | What is different |
| --- | --- | --- |
| Standard invoice | From a sales order or delivery note, or new | Creates a receivable; stock is moved by the delivery note |
| Invoice with stock update | Tick **Update Stock** | Also reduces stock, so no delivery note is needed |
| Cash or card sale | Tick **Is POS**, or use [Point of Sale](/accounting/pos) | Payment is recorded on the invoice itself |
| Credit note | **Create › Return / Credit Note** from an invoice | Negative quantities; reduces the receivable and output VAT |
| Debit note to a customer | Tick **Is Debit Note** against the original invoice | Charges an additional amount, such as a price increase or missed freight |
| Opening invoice | [Opening Invoice Creation Tool](/getting-started/data-import) | Posts to a temporary opening account at go-live |
| Inter-company invoice | Sell to an internal customer | Creates a matching purchase invoice in the group company ([guide](/accounting/inter-company)) |
| Invoice from timesheets | **Get Timesheets** on the invoice | Bills hours logged on projects ([guide](/projects/timesheets)) |
| Subscription invoice | Created by a [subscription](/accounting/subscriptions) | Generated automatically each period |

## Three ways to create an invoice

1. **From a sales order**: open the order and click **Create › Sales Invoice**. Use this for advance billing or for services with no delivery.
2. **From a delivery note**: open the delivery note and click **Create › Sales Invoice**. This is the usual route for goods. Only delivered quantities are pulled in.
3. **Directly**: go to **Accounting › Sales Invoice › New**. Use this for one-off services, recharges or counter sales.

To invoice several delivery notes for the same customer at once, start a new invoice, choose the customer, then click **Get Items From › Delivery Note** and tick the notes you want.

!fig Get items from several delivery notes into one sales invoice

## The form, section by section

### Header

| Field | What it does |
| --- | --- |
| Series | The [naming series](/framework/naming-series), for example `DXB-INV-.YYYY.-` for the Dubai branch |
| Customer | Fills the name, TRN, addresses, currency, price list, payment terms and sales team |
| Company | The legal entity issuing the invoice |
| Posting Date and Time | The accounting and VAT date. Tick **Edit Posting Date and Time** to back-date or forward-date |
| Due Date | Calculated from payment terms; you can change it if there is no payment schedule |
| Is Return (Credit Note) | Turns the invoice into a credit note against **Return Against** |
| Is Debit Note | Turns it into a debit note against the original invoice |
| Is POS | Records payment on the invoice |
| Update Stock | Reduces stock directly from the invoice |

:::uae The posting date is the VAT date
VAT is reported in the period that includes the posting date, unless an earlier [tax point](/uae-compliance/tax-point) applies, such as an advance. Avoid back-dating invoices into a period whose VAT return has been filed.
:::

### Currency and price list

| Field | What it does |
| --- | --- |
| Currency | The invoice currency, from the customer |
| Exchange Rate | Rate to AED on the posting date; fetched from [Currency Exchange](/accounting/multi-currency) |
| Price List | Where item rates come from |
| Price List Currency and Rate | Used when the price list is in a different currency from the invoice |
| Ignore Pricing Rule | Stops [pricing rules](/selling/price-lists) from changing rates on this invoice |

### Items

Each row is one line on the invoice.

| Column | What it does |
| --- | --- |
| Item Code and Name | The product or service |
| Description | Printed text; edit it for one-off wording |
| Quantity and UOM | Quantity in the selling unit; **Conversion Factor** converts to the stock unit |
| Price List Rate | The rate from the price list, before discounts |
| Discount (%) / Discount Amount | Line discount |
| Margin Type and Rate | Adds a margin on top of the price list rate |
| Rate | The final unit price before tax |
| Amount | Quantity × rate |
| Item Tax Template | Overrides the VAT rate for this line, for example a zero-rated item |
| Warehouse | Required when **Update Stock** is ticked |
| Batch No. / Serial No. | For tracked items when stock is updated |
| Income Account | Where the sale is posted, from the item or item group |
| Cost Centre and dimensions | Splits income for reports |
| Enable Deferred Revenue / Service dates | Spreads income over months ([guide](/accounting/deferred-revenue)) |
| Sales Order / Delivery Note | Links back to the source documents |

:::tip Selling a service with no item code
Create a few non-stock service items, such as "Installation Service", "Consultancy" or "Freight Charges", with the right income accounts. Use them for any line that is not a product.
:::

### Taxes and charges

Choose a **Sales Taxes and Charges Template**, usually *UAE VAT 5%*. The table fills with one or more rows. Each row has a **Type** that decides how it is calculated.

| Type | Calculation | Typical use |
| --- | --- | --- |
| On Net Total | Rate × net total | VAT 5% |
| Actual | A fixed amount you type | Freight, handling, a municipality fee |
| On Previous Row Amount | Rate × the amount of an earlier row | A tax charged on a charge |
| On Previous Row Total | Rate × the running total up to an earlier row | Tax on net total plus freight |
| On Item Quantity | Rate × total quantity | A per-unit levy |

Tick **Is this Tax included in Basic Rate?** on the VAT row when your rates already include VAT, as in retail. DocFlow then works out the VAT inside the price.

:::uae Delivery charges are taxed too
If you add freight as an *Actual* row, add VAT on it as well, using **On Previous Row Total** for the VAT row, or add freight as a service item line so the VAT template covers it.
:::

!fig Taxes and charges table with VAT 5 percent and a freight charge

### Totals and discounts

| Field | What it does |
| --- | --- |
| Total Quantity / Net Total | Sum of the item lines |
| Apply Additional Discount On | Grand Total or Net Total |
| Additional Discount Percentage / Amount | A discount on the whole invoice |
| Total Taxes and Charges | Sum of the tax table |
| Grand Total | Amount the customer owes |
| Rounding Adjustment / Rounded Total | Rounds to the nearest fils or dirham, depending on settings |
| Disable Rounded Total | Keeps the exact amount, which most B2B customers prefer |
| In Words | Amount in words, printed on the invoice |

:::warning Discount before or after VAT
For VAT, the discount must reduce the taxable amount. Apply additional discounts on the **Net Total** for tax invoices, so VAT is charged on the discounted value.
:::

### Payments, advances and write-offs

| Field | What it does |
| --- | --- |
| Payments (POS only) | Amounts received by each [mode of payment](/accounting/mode-of-payment) |
| Get Advances Received | Lists advance payments from the customer to set against this invoice |
| Allocate Advances Automatically | Applies advances oldest first |
| Write Off Amount / Account | Writes off a small remaining balance, such as a few fils |
| Change Amount | Change given back in cash sales |

### Payment terms and schedule

The **Payment Terms Template** builds a schedule of due dates and amounts. For example, a 30/70 template on an AED 100,000 invoice creates two rows: AED 30,000 due on invoice and AED 70,000 due in 60 days. Ageing reports and [dunning](/accounting/dunning) use each row's due date. See [Payment terms](/accounting/payment-terms).

### Addresses and contacts

| Field | What it does |
| --- | --- |
| Customer Address | Billing address, printed with the TRN; its emirate drives the VAT return box |
| Shipping Address | Where goods were delivered |
| Contact Person | Whom the invoice is sent to |
| Company Address | Your address, printed with your TRN |
| Dispatch Address | Where goods left from, if different |

### Terms, sales team and other details

- **Terms and Conditions**: a template or free text, printed at the end.
- **Sales Team** and **Sales Partner**: who gets credit and commission for the sale ([guide](/selling/sales-partners)).
- **Loyalty Programme**: points earned or redeemed ([guide](/accounting/loyalty-program)).
- **Project**: links revenue to a project.
- **Letter Head**, **Print Heading** and **Print Language**: control how the invoice looks, for example a heading of "Tax Invoice" and Arabic print language.
- **Remarks**: internal notes, printed only if your format includes them.

## Worked scenarios

:::example Partial invoicing of a sales order
A hotel orders 10 refrigerators but takes delivery of 6 this month. Create the invoice from the delivery note: only the 6 delivered are billed. The sales order stays **To Deliver and Bill** for the remaining 4.
:::

:::example Advance received before the invoice
Saqr Steel receives AED 52,500 (50% plus VAT) as an advance for a racking order. VAT on the advance is declared when it is received. When the final invoice of AED 105,000 is issued, click **Get Advances Received** and allocate the AED 52,500. The invoice shows AED 52,500 outstanding.
:::

:::example Export to Oman, zero-rated
Al Waha Trading sells kitchen equipment worth USD 20,000 to a hotel in Muscat. The invoice is in USD at 3.6725 (AED 73,450), uses the **UAE Zero Rated** template, and the exit certificate is attached to the delivery note as evidence.
:::

:::example Prices including VAT at the showroom
A walk-in customer buys a blender priced AED 1,050 including VAT. With **Is this Tax included in Basic Rate?** ticked, the invoice shows net AED 1,000 and VAT AED 50.
:::

## Statuses

| Status | Meaning |
| --- | --- |
| Draft | Saved, not yet submitted |
| Unpaid | Submitted, nothing received, not yet due |
| Partly Paid | Some payment received |
| Overdue | Past the due date with an outstanding amount |
| Paid | Fully settled |
| Credit Note Issued | A credit note has reduced the amount |
| Return | This document is itself a credit note |
| Internal Transfer | A sale to a group company |
| Cancelled | Reversed; kept for the audit trail |

## Behind the scenes

**Standard invoice** of AED 37,000 plus VAT:

| Account | Debit | Credit |
| --- | --- | --- |
| Debtors – customer | 38,850 | |
| Sales – Goods | | 37,000 |
| VAT Output 5% | | 1,850 |

**With Update Stock** ticked, a second entry posts the cost of the goods (say AED 24,000):

| Account | Debit | Credit |
| --- | --- | --- |
| Cost of Goods Sold | 24,000 | |
| Stock in Hand – warehouse | | 24,000 |

**POS sale paid by card** for AED 1,050 including VAT: Card Clearing is debited AED 1,050 instead of the debtor, and Sales AED 1,000 and VAT Output AED 50 are credited.

**Write-off** of AED 0.35 on payment: Write Off account debited, Debtors credited.

## Settings that change how invoices behave

| Setting | Where | Effect |
| --- | --- | --- |
| Sales Order / Delivery Note required | [Selling settings](/selling/selling-settings) | Blocks invoices without them |
| Maintain same rate throughout sales cycle | Selling settings | Stops rate changes after the sales order |
| Credit Controller | [Accounts settings](/accounting/accounts-settings) | Role that can exceed credit limits |
| Accounts Frozen Till | Accounts settings | Blocks back-dated invoices |
| Allow Negative Stock | [Stock settings](/stock/stock-settings) | Allows Update Stock with no stock |
| Over Billing Allowance (%) | Accounts settings | How far above the order amount you may bill |
| Rounding method | System settings | Rounding of totals and VAT |

## Printing, emailing and e-invoicing

1. Click **Print**, choose the **UAE Tax Invoice** format and your letterhead, and set **Print Language** to English, Arabic or bilingual.
2. Click **Email**, choose an [email template](/framework/email-templates), and send the PDF to the customer's accounts contact.
3. When [e-invoicing](/uae-compliance/e-invoicing) is switched on, submitting the invoice also sends it through the DocFlow network, and its status shows whether it was accepted.

## Reports that use sales invoices

| Report | Shows |
| --- | --- |
| Accounts Receivable | What each customer owes, by age |
| Sales Register | Every invoice with net, tax and total columns |
| Item-wise Sales Register | Each invoice line, for item analysis |
| Gross Profit | Margin per invoice, item or customer |
| UAE VAT 201 | Taxable sales by emirate and zero-rated sales |
| Sales Invoice Trends | Monthly sales by customer, item or territory |

## Common problems

:::details "Credit limit has been crossed for customer"
The customer's outstanding balance plus this invoice exceeds their limit. A user with the Credit Controller role can submit it, or record a payment first.
:::

:::details "Sales Order required for item"
Selling settings require a sales order. Create the invoice from the order, or ask an administrator to change the setting.
:::

:::details "Insufficient stock" with Update Stock ticked
The warehouse does not have the quantity. Untick **Update Stock** and deliver through a delivery note later, or transfer stock first.
:::

:::details Customer TRN does not print
The customer has no Tax ID, or the print format uses a different field. Add the TRN to the customer and reprint. You do not need to cancel.
:::

:::details VAT differs by one fils from the customer's calculation
DocFlow rounds per invoice by default. If the customer calculates per line, agree the method, or change the tax rounding setting.
:::

:::details I need to change an invoice that is already submitted
Fields marked **Allow on Submit**, such as remarks or the customer PO number, can be changed. For anything else, cancel and amend if the period is open and the invoice has not been sent, or issue a [credit note](/accounting/credit-debit-notes).
:::

## Related pages

- [Payments and receipts](/accounting/payment-entry)
- [Credit and debit notes](/accounting/credit-debit-notes)
- [Delivery notes](/selling/delivery-note)
- [Tax point](/uae-compliance/tax-point)
- [Order to cash walkthrough](/guides/order-to-cash)

@@ purchase-invoice | Purchase invoices
@summary Record every supplier bill correctly: the form in detail, imports and services, VAT recovery, the accounting behind it and how to fix common problems.

A **Purchase Invoice** records what you owe a supplier. It creates the payable, posts the cost to stock or an expense account, and records the input VAT you can recover. Every supplier bill, whether for goods, services, utilities, rent, imports or a one-off purchase, is entered as a purchase invoice.

:::note Before you start
- The supplier exists with their TRN (if VAT registered), address and payment terms.
- For stock items, the purchase order and purchase receipt are submitted, if your [buying settings](/buying/buying-settings) require them.
- Expense items exist for non-stock purchases, such as "Electricity", "Telecoms", "Rent" or "Consultancy", each with its expense account.
- Your role includes **Accounts User**.
:::

## Types of purchase invoice

| Type | How you make it | What is different |
| --- | --- | --- |
| Standard bill for goods | From a purchase receipt or purchase order | Clears *Stock Received But Not Billed* |
| Bill with stock update | Tick **Update Stock** | Receives stock without a separate receipt |
| Expense bill | New invoice with expense items | Posts straight to expense accounts |
| Paid immediately | Tick **Is Paid** | Records the payment on the invoice, for cash or card purchases |
| Debit note | **Create › Return / Debit Note** from an invoice | Reduces what you owe and the input VAT |
| Import of services | Reverse charge template | Posts both output and input VAT ([guide](/uae-compliance/reverse-charge)) |
| Inter-company bill | Created from a group company's sales invoice | Matches the seller's invoice ([guide](/accounting/inter-company)) |
| Opening bill | Opening Invoice Creation Tool | Loads unpaid bills at go-live |

## Three ways to create a purchase invoice

1. **From a purchase receipt**: open the receipt and click **Create › Purchase Invoice**. This is the normal route for goods, and gives you a three-way match.
2. **From a purchase order**: for services or advances where no receipt is made.
3. **Directly**: **Accounting › Purchase Invoice › New**, for utilities, rent, telecoms and other bills with no order.

To bill several receipts from one supplier together, start a new invoice, choose the supplier and use **Get Items From › Purchase Receipt**.

!fig Purchase invoice created from two purchase receipts

## The form, section by section

### Header

| Field | What it does |
| --- | --- |
| Series | Your internal numbering for supplier bills |
| Supplier | Fills TRN, address, currency, price list and payment terms |
| Supplier Invoice No. | The supplier's own invoice number; checked for duplicates |
| Supplier Invoice Date | The date on the supplier's tax invoice |
| Posting Date | Your accounting date; usually the date you receive the bill |
| Due Date | From payment terms |
| Is Return (Debit Note) | Turns this into a debit note against the original |
| Is Paid | Records an immediate payment |
| Update Stock | Receives stock directly |
| Apply Tax Withholding | Not used in the UAE; leave unticked |
| On Hold / Release Date | Blocks payment until a date, for example while a dispute is resolved |

:::uae Which date for VAT recovery?
Input VAT can be recovered in the tax period in which you hold a valid tax invoice and intend to pay within six months of the payment due date. Use the posting date of the bill in DocFlow for the VAT return, and keep the supplier invoice date for reference.
:::

### Currency and price list

| Field | What it does |
| --- | --- |
| Currency | The supplier's billing currency |
| Exchange Rate | To AED on the posting date |
| Price List | The buying price list for rates |

### Items

| Column | What it does |
| --- | --- |
| Item Code | The product or expense item |
| Quantity, UOM, Conversion Factor | Billed quantity in the purchase unit |
| Rate | The supplier's unit price |
| Item Tax Template | Overrides VAT for a line, for example an exempt service |
| Expense Head | For non-stock items: the expense account to charge |
| Warehouse, Batch, Serial | When **Update Stock** is ticked |
| Cost Centre, Project, dimensions | Splits the cost for reports and project costing |
| Purchase Order / Purchase Receipt | Links back to source documents |
| Enable Deferred Expense / Service dates | Spreads prepaid costs over months ([guide](/accounting/deferred-revenue)) |
| Is Fixed Asset | Creates an asset ([guide](/assets/asset-purchase)) |

### Taxes and charges

Choose a **Purchase Taxes and Charges Template**: *UAE VAT 5% Input* for local suppliers, *UAE Reverse Charge* for imported services and deferred import VAT, or none for out-of-scope bills.

Each row has a **Consider Tax or Charge for** option:

| Option | Effect |
| --- | --- |
| Total | Added to the invoice total only (VAT) |
| Valuation | Added to stock cost but not to the amount payable (rare) |
| Valuation and Total | Added to both, for example freight billed on the same invoice |

And **Add or Deduct**, so a row can increase or reduce the total.

:::warning Freight on a goods invoice
If the supplier bills freight on the same invoice, add it as a charge row with **Valuation and Total**, so it becomes part of stock cost. If freight comes on a separate bill, use a [landed cost voucher](/stock/landed-cost) instead.
:::

!fig Purchase taxes table with input VAT and freight added to valuation

### Totals, discounts and rounding

Supplier discounts can be entered per line or as an **Additional Discount** on the net total. Tick **Disable Rounded Total** so the payable matches the supplier's bill exactly.

### Payments and advances

| Field | What it does |
| --- | --- |
| Get Advances Paid | Lists advances paid to the supplier to set against this bill |
| Is Paid with Mode of Payment and Paid Amount | Records the payment at the same time |
| Write Off | Clears a tiny remaining difference |

### Payment terms

The **Payment Terms Template** creates the schedule your payables team works from, for example 30% advance and 70% 45 days after the bill.

### Other details

- **Supplier Address** and **Contact**: printed on payment advices.
- **Bill of Entry No.** (custom field): for imports, links the bill to the customs declaration.
- **Remarks**: why the bill exists, for example "DEWA – Al Quoz warehouse – March 2026".
- **Attachment**: always attach the supplier's PDF or scan.

## Worked scenarios

:::example Monthly DEWA bill
Al Waha Trading receives a DEWA bill of AED 6,840 plus AED 342 VAT for its Al Quoz warehouse. The accountant creates a purchase invoice for the supplier "Dubai Electricity and Water Authority", adds the expense item *Electricity and Water* with cost centre *Al Quoz Warehouse*, applies *UAE VAT 5% Input*, attaches the PDF and submits.
:::

:::example A software subscription from overseas
Lulu Pearl Foods is billed EUR 1,200 by an Irish software company. The invoice is in EUR with the **UAE Reverse Charge** template. DocFlow posts output and input VAT of 5% on the AED value, so the net VAT cost is zero and both amounts reach the VAT return.
:::

:::example Supplier billed the wrong price
Gulf Steel billed AED 2,950 per tonne instead of the agreed AED 2,880 on 40 tonnes. The accountant enters the bill as received and asks for a credit note, then records the supplier's credit note as a [debit note](/accounting/credit-debit-notes) for AED 2,800 plus VAT. Alternatively, put the bill **On Hold** until the corrected invoice arrives.
:::

## Statuses

| Status | Meaning |
| --- | --- |
| Draft | Saved, not submitted |
| Unpaid | Submitted, not due yet |
| Overdue | Past the due date |
| Partly Paid / Paid | Payment progress |
| Debit Note Issued | Reduced by a debit note |
| Return | This document is a debit note |
| On Hold | Payment blocked until released |
| Cancelled | Reversed |

## Behind the scenes

**Goods received earlier with a purchase receipt**, AED 10,000 plus VAT:

| Account | Debit | Credit |
| --- | --- | --- |
| Stock Received But Not Billed | 10,000 | |
| VAT Input 5% | 500 | |
| Creditors – supplier | | 10,500 |

**Expense bill**, AED 6,840 plus VAT:

| Account | Debit | Credit |
| --- | --- | --- |
| Electricity and Water | 6,840 | |
| VAT Input 5% | 342 | |
| Creditors – DEWA | | 7,182 |

**Reverse charge**, AED 4,800 of imported services:

| Account | Debit | Credit |
| --- | --- | --- |
| Software Subscriptions | 4,800 | |
| VAT Reverse Charge Input | 240 | |
| VAT Reverse Charge Output | | 240 |
| Creditors – overseas supplier | | 4,800 |

**Price difference**: if the bill rate differs from the receipt rate and the stock is still on hand, the difference adjusts stock value; if the stock has been sold, it goes to cost of goods sold or a price variance account.

## Settings that change how purchase invoices behave

| Setting | Where | Effect |
| --- | --- | --- |
| Purchase Order / Receipt required | [Buying settings](/buying/buying-settings) | Blocks invoices without them |
| Check Supplier Invoice Number Uniqueness | [Accounts settings](/accounting/accounts-settings) | Warns on duplicate bills |
| Over Billing Allowance | Accounts settings | How far above the order you may bill |
| Maintain same rate throughout purchase cycle | Buying settings | Blocks rate changes from the order |
| Accounts Frozen Till | Accounts settings | Blocks back-dated bills |

## Reports that use purchase invoices

| Report | Shows |
| --- | --- |
| Accounts Payable | What you owe each supplier, by age |
| Purchase Register | Every bill with net, VAT and total |
| Item-wise Purchase Register | Each bill line |
| Purchase Invoice Trends | Monthly spend by supplier or item |
| UAE VAT 201 | Recoverable input VAT and reverse charge |

## Common problems

:::details "Supplier Invoice No exists in Purchase Invoice"
The same supplier number was already entered for this supplier. Check whether the bill is a duplicate before overriding.
:::

:::details "Purchase Receipt required for item"
Buying settings require a receipt. Receive the goods first, or ask an administrator to relax the setting for service items.
:::

:::details Input VAT is not showing in the VAT return
The bill has no tax template, the template's account is not a tax account, or the posting date is outside the return period.
:::

:::details The bill total differs from the supplier's by a few fils
Tick **Disable Rounded Total**, or adjust with the write-off field when paying.
:::

:::details Cannot cancel: payment entry is linked
Cancel the payment first, or tick **Unlink Payment on Cancellation of Invoice** in accounts settings so the payment becomes an advance.
:::

## Related pages

- [Purchase receipts](/buying/purchase-receipt)
- [Payments](/accounting/payment-entry)
- [Landed costs](/stock/landed-cost)
- [Reverse charge](/uae-compliance/reverse-charge)
- [Procure to pay walkthrough](/guides/procure-to-pay)

@@ payment-entry | Payments and receipts
@summary Every way money comes in and goes out: receipts, payments, transfers, advances, cheques, deductions and the accounting behind them.

A **Payment Entry** records money moving between you and a customer, supplier, employee or shareholder, or between your own bank and cash accounts. It settles invoices, records advances and keeps bank balances right.

:::note Before you start
- Bank and cash accounts exist with **Account Type** Bank or Cash, and each bank account is linked to a **Bank Account** record.
- [Modes of payment](/accounting/mode-of-payment) point to the right accounts.
- Your role includes **Accounts User**. Large payments may need approval through a [workflow](/framework/workflows).
:::

## Payment types

| Payment Type | Use it for | Party |
| --- | --- | --- |
| Receive | Money in from customers (or refunds from suppliers) | Customer, supplier, employee, shareholder |
| Pay | Money out to suppliers (or refunds to customers) | Supplier, customer, employee, shareholder |
| Internal Transfer | Moving money between your own accounts | None |

## Ways to create a payment

1. **From an invoice**: click **Create › Payment**. The party, amount and reference are filled in.
2. **From a sales or purchase order**: records an advance against the order.
3. **New payment entry**: for receipts covering several invoices, or advances without an order.
4. **From a payment request**: online card payments create entries automatically ([guide](/accounting/payment-request)).
5. **From bank reconciliation**: create the entry while matching a statement line ([guide](/accounting/bank-reconciliation)).

## The form, section by section

### Type and party

| Field | What it does |
| --- | --- |
| Payment Type | Receive, Pay or Internal Transfer |
| Posting Date | The date the money moved |
| Mode of Payment | Fills the default bank or cash account |
| Party Type and Party | Who paid or was paid |
| Party Name / Contact | For printing receipts |

### Accounts

| Field | What it does |
| --- | --- |
| Paid From | The account the money leaves: the debtor (for receipts) or your bank (for payments) |
| Paid To | The account the money enters |
| Account Currency | Currency of each account |
| Paid Amount / Received Amount | Amounts in each account's currency |
| Source and Target Exchange Rate | For foreign currency payments |
| Party Balance and Account Balance | Shown for reference while you enter the payment |

### Reference

| Field | What it does |
| --- | --- |
| Cheque / Reference No. | Transfer reference, cheque number or card slip number; required for bank payments |
| Cheque / Reference Date | Transfer date or cheque date |
| Clearance Date | Filled by bank reconciliation |
| Bank Account | Your bank account record, used in payment orders and printing |

### Allocation to invoices

The **Payment References** table lists the invoices or orders the payment settles.

1. Click **Get Outstanding Invoices** (or **Get Outstanding Orders**).
2. Filter by date range, due date or amount if needed.
3. Tick the documents and set the **Allocated Amount** for each.
4. Any amount not allocated stays as an **Unallocated Amount**, which is treated as an advance.

!fig Payment entry allocating a receipt across three invoices with an unallocated balance

### Deductions or loss

Use this table for differences between what was billed and what arrived.

| Typical row | Account |
| --- | --- |
| Bank transfer charges | Bank Charges |
| Small balance written off | Write Off |
| Exchange difference | Exchange Gain/Loss |
| Early payment discount given | Discount Allowed |

Click **Set Exchange Gain / Loss** or **Make Difference Entry** to have DocFlow fill the row for you.

## Advances

Money received or paid before an invoice exists is an **advance**.

- Leave the references table empty, or link the payment to the sales or purchase order.
- When the invoice is made, use **Get Advances** on the invoice, or [payment reconciliation](/accounting/payment-reconciliation) afterwards.
- Optionally post advances to separate **Advance Received** and **Advance Paid** accounts instead of the debtor and creditor accounts, by setting them on the company. This keeps advances visible on the balance sheet.

:::uae VAT on customer advances
VAT is due on advances received from customers when the money arrives. Tick **Apply Tax on Advance** and choose the VAT template, so output VAT is posted with the receipt. See [Tax point](/uae-compliance/tax-point).
:::

## Cheques

### Receiving a current-dated cheque

Record a **Receive** entry to your bank account with the cheque number and date. Deposit the cheque, and clear it in bank reconciliation when it appears on the statement.

### Post-dated cheques (PDCs)

1. Record the receipt to a **PDC Receivable** account (Account Type: Receivable or a custom PDC account), with the cheque date as the reference date.
2. On or after the cheque date, move it to the bank with a payment entry of type **Internal Transfer** from PDC Receivable to the bank account.
3. Supplier PDCs work the same way with a **PDC Payable** account.

The **PDC register**, a saved report of payments to the PDC accounts sorted by reference date, shows which cheques mature this week.

### Bounced cheques

Cancel the payment entry (or post a reversing journal if the period is closed). The invoice becomes outstanding again. Record the bank's return charge as an expense, and recharge it to the customer if your terms allow.

### Stale cheques

A cheque that is never presented can be written back. Post a journal from PDC Payable (or the bank) back to the creditor, then reissue payment if needed.

!fig PDC register listing cheques by maturity date

## Internal transfers

Use **Internal Transfer** to move money between your own accounts: bank to petty cash, AED account to USD account, current account to deposit. Enter both amounts if the currencies differ; DocFlow records the exchange difference.

## Paying many suppliers at once

Create a **Payment Order** from approved payment requests or purchase invoices. It groups payments by bank so you can upload one bulk file to your bank's online banking. Each line still creates its own payment entry for the supplier.

## Receipts and payment advices

- Print a **Receipt** for customers who pay in cash or by cheque, with your letterhead.
- Email a **Payment Advice** to suppliers listing the bills you paid, so they can reconcile quickly.

## Statuses

| Status | Meaning |
| --- | --- |
| Draft | Saved, not submitted |
| Submitted | Posted to the ledger |
| Cancelled | Reversed |

## Behind the scenes

**Customer receipt** of AED 38,823.75 with AED 26.25 bank charges against an invoice of AED 38,850:

| Account | Debit | Credit |
| --- | --- | --- |
| Emirates NBD – Current AED | 38,823.75 | |
| Bank Charges | 26.25 | |
| Debtors – customer | | 38,850 |

**Supplier payment** of AED 10,500:

| Account | Debit | Credit |
| --- | --- | --- |
| Creditors – supplier | 10,500 | |
| Mashreq – Current AED | | 10,500 |

**Advance with VAT** of AED 52,500 including VAT:

| Account | Debit | Credit |
| --- | --- | --- |
| Bank | 52,500 | |
| Debtors (or Advance Received) | | 52,500 |
| VAT on Advance (asset side) | 2,500 | |
| VAT Output 5% | | 2,500 |

## Settings that change how payments behave

| Setting | Where | Effect |
| --- | --- | --- |
| Unlink payment on cancellation of invoice | [Accounts settings](/accounting/accounts-settings) | Frees payments when invoices are cancelled |
| Allow stale exchange rates | Accounts settings | Uses the last known rate |
| Book advance payments in separate party account | Company | Uses advance accounts instead of debtors and creditors |
| Auto reconcile payments | Accounts settings | Matches advances to new invoices automatically |

## Reports

| Report | Shows |
| --- | --- |
| General Ledger | Every payment against an account or party |
| Accounts Receivable / Payable | Outstanding after payments |
| Payment Period Based On Invoice Date | How long customers take to pay |
| Bank Clearance Summary | Payments and their clearance dates |
| Payment Ledger | Each allocation of a payment to an invoice |

## Common problems

:::details "Reference No and Reference Date is mandatory for Bank transaction"
Bank payments need a reference. Enter the transfer reference or cheque number.
:::

:::details "Allocated Amount cannot be greater than outstanding amount"
Another payment or credit note already settled part of the invoice. Click **Get Outstanding Invoices** again.
:::

:::details The payment posted to the wrong customer
Cancel and amend the entry with the right party. If the period is closed, use a journal to move the amount between the two customers.
:::

:::details Exchange difference left on a USD invoice
The payment rate differed from the invoice rate. Click **Set Exchange Gain / Loss** before submitting.
:::

## Related pages

- [Payment reconciliation](/accounting/payment-reconciliation)
- [Bank reconciliation](/accounting/bank-reconciliation)
- [Modes of payment](/accounting/mode-of-payment)
- [Foreign currency](/accounting/multi-currency)

@@ journal-entry | Journal entries
@summary Post adjustments, accruals, opening balances, transfers and corrections, with every entry type explained.

A **Journal Entry** posts debits and credits to any accounts you choose. Most day-to-day transactions should go through their own documents (invoices, payments, stock entries), because those carry more information and controls. Journals are for everything else: adjustments, accruals, prepayments, reclassifications, opening balances and year-end entries.

:::note Before you start
Journals bypass most document checks, so restrict submission to experienced users, usually the **Accounts Manager** role. Always write a remark that a stranger could understand a year later.
:::

## Entry types

| Entry Type | Use for | Notes |
| --- | --- | --- |
| Journal Entry | General adjustments and reclassifications | Default type |
| Bank Entry | Bank charges, interest, direct debits | Asks for a reference number |
| Cash Entry | Cash spending from petty cash | |
| Credit Card Entry | Spending on a company card | Post to a card liability account |
| Debit Note / Credit Note | Simple party adjustments without items | Prefer invoice-based notes for VAT |
| Contra Entry | Transfers between bank and cash | |
| Excise Entry | Excise tax adjustments | See [Excise tax](/uae-compliance/excise-tax) |
| Write Off Entry | Clearing small or bad balances | |
| Opening Entry | Balances at go-live | Only one per account at the start |
| Depreciation Entry | Asset depreciation | Created by Assets |
| Exchange Rate Revaluation | Unrealised exchange differences | Created by revaluation |
| Exchange Gain or Loss | Realised differences | |
| Deferred Revenue / Expense | Monthly releases | Created automatically |
| Inter Company Journal Entry | Matching entries in two group companies | ([guide](/accounting/inter-company)) |

## Creating a journal entry

1. Go to **Accounting › Journal Entry › New**.
2. Choose the **Entry Type** and **Posting Date**.
3. Add one row per account with its **Debit** or **Credit** amount. For debtors and creditors, also choose **Party Type** and **Party**. Set the **Cost Centre** and other dimensions where relevant, and use **Reference Type** and **Reference Name** to link a row to an invoice so it settles that invoice.
4. Check that total debits equal total credits. The difference is shown at the bottom.
5. Write a clear **User Remark**.
6. Attach supporting documents.
7. Save and submit.

!fig Journal entry with accrual rows, cost centres and a user remark

## The form in detail

| Field | What it does |
| --- | --- |
| Entry Type | Controls numbering and some validations |
| Series | Numbering, for example `JV-.YYYY.-` |
| Posting Date | Accounting date |
| Company | The legal entity |
| Finance Book | For alternative books, such as group reporting |
| Multi Currency | Allows accounts in different currencies with exchange rates per row |
| Cheque No. and Date | For bank entries |
| Bill No. and Date | A supplier or other reference |
| Is Opening | Marks entries that form opening balances |
| Reversal Of | Links this journal to the one it reverses |
| Auto Repeat | Repeats the journal on a schedule |
| Pay To / Recd From | Printed name on payment vouchers |

## Common journals for UAE companies

| Journal | Debit | Credit |
| --- | --- | --- |
| Monthly rent from an annual prepayment | Rent Expense | Prepaid Rent |
| Utility bill not yet received | Electricity and Water | Accrued Expenses |
| Audit fee accrual | Audit Fees | Accrued Expenses |
| Gratuity accrual (if not automated) | Gratuity Expense | Provision for End of Service |
| Bank interest received | Bank | Interest Income |
| Reclassifying a cost to the right project | Expense (project B) | Expense (project A) |
| Corporate Tax accrual | Corporate Tax Expense | Corporate Tax Payable |
| Dividend to shareholders | Retained Earnings | Dividend Payable |

## Templates and recurring journals

- Save a **Journal Entry Template** for entries you post often, with accounts and parties filled in. Choose the template on a new journal and enter only the amounts.
- Use [auto repeat](/framework/automation) for fixed monthly entries such as rent amortisation.

## Reversing a journal

For accruals that should be undone when the real bill arrives, open the journal and click **Create › Reverse Journal Entry** dated the first of the next month. The new journal swaps debits and credits and records **Reversal Of**.

## Multi-currency journals

Tick **Multi Currency** to post to accounts in different currencies, for example paying a USD supplier from an AED account. Each row shows the account currency, exchange rate and amounts in both currencies.

## Behind the scenes

A journal posts exactly the rows you enter to the general ledger. Rows that use debtors or creditors with a party also appear in that party's ledger and in receivable and payable reports. Rows with a reference to an invoice change that invoice's outstanding amount.

## Common problems

:::details "Total Debit must be equal to Total Credit"
The rows do not balance. Add a row or correct an amount; the difference is shown at the bottom.
:::

:::details "Party Type and Party is required for Receivable / Payable account"
Rows on debtors or creditors accounts need a party.
:::

:::details "Account is frozen" or "Posting not allowed in closed period"
The account or period is locked. Ask the Accounts Manager.
:::

:::details The journal did not reduce the invoice's outstanding amount
The row has no **Reference Type** and **Reference Name**. Link it to the invoice, or use [payment reconciliation](/accounting/payment-reconciliation).
:::

:::details Should I use a journal for VAT?
Avoid it. Journals posted to VAT accounts do not carry the emirate, taxable amount or invoice details the VAT 201 report needs. Use invoices, credit notes and debit notes instead.
:::

## Related pages

- [Month-end closing](/accounting/period-closing)
- [Inter-company transactions](/accounting/inter-company)
- [Deferred revenue](/accounting/deferred-revenue)
- [Petty cash](/accounting/petty-cash)

@@ credit-debit-notes | Credit notes and debit notes
@summary Correct invoices the VAT-compliant way: returns, price reductions, rebates, additional charges and how they are allocated.

Once an invoice has been sent to a customer or received from a supplier, it should not be cancelled to correct it. Instead, issue a **credit note** (to reduce it) or a **debit note** (to increase it). Both are linked to the original invoice, so the audit trail and VAT records stay complete.

## Which document do I need?

| Situation | Document | Who issues it |
| --- | --- | --- |
| Customer returns goods | Sales credit note (with or without stock) | You |
| You give a price reduction after invoicing | Sales credit note | You |
| You charged too little or missed a charge | Sales debit note | You |
| You return goods to a supplier | Purchase debit note (and purchase return) | You record it; the supplier issues their credit note |
| Supplier gives you a rebate or discount | Purchase debit note | You record the supplier's credit note |
| Supplier charges extra | Purchase invoice (additional) | Supplier |

## Sales credit notes

1. Open the original sales invoice.
2. Click **Create › Return / Credit Note**.
3. The new document has **Is Return** ticked and **Return Against** set to the original.
4. Adjust the quantities (negative) or rates for what is being credited. Remove lines that are not affected.
5. Tick **Update Stock** if goods are physically coming back and the original invoice updated stock. If they came through a delivery note, make a [sales return](/selling/sales-returns) from the delivery note instead.
6. Enter the reason in **Remarks**, for example "Two units returned – damaged in transit".
7. Submit and email the credit note to the customer.

!fig Credit note created from a sales invoice with negative quantities and reason

### Price reduction without returning goods

Keep the original quantity, and set the rate to the amount of the reduction, or use a single service line such as "Price adjustment" for the credit amount. Do not tick Update Stock.

### Volume rebates across many invoices

For a year-end rebate covering many invoices, create one credit note with a rebate item. Leave **Return Against** empty if it does not relate to a single invoice, and explain the calculation in remarks. Check with your tax adviser whether VAT should be adjusted, which depends on how the rebate is structured.

## Sales debit notes

1. Open the original sales invoice and click **Create › Debit Note** (or make a new invoice with **Is Debit Note** ticked and **Return Against** set).
2. Add the extra amount, for example freight that was missed, or a price increase agreed after delivery.
3. Submit. The customer owes the additional amount plus VAT.

## Purchase debit notes

1. Open the original purchase invoice.
2. Click **Create › Return / Debit Note**.
3. Enter the quantities or amounts being reduced.
4. Enter the supplier's credit note number in **Supplier Invoice No.**, if they have issued one.
5. Submit. Your payable and input VAT reduce.

If goods are physically returned, create a [purchase return](/buying/purchase-returns) from the receipt first.

## How credit and debit notes are settled

- A credit note against a specific invoice reduces that invoice's outstanding amount automatically.
- If the invoice was already paid, the credit note stays as a credit on the customer's account. Refund it with a payment entry (**Pay** to the customer), or set it against a future invoice with [payment reconciliation](/accounting/payment-reconciliation).

:::uae Tax credit notes
A UAE tax credit note must show the words "Tax Credit Note", your name, address and TRN, the customer's details, the date, the reference to the original tax invoice, the value of the adjustment and the VAT reduced, and a brief reason. Use the **UAE Tax Credit Note** print format. The VAT reduction is reported in the period the credit note is issued.
:::

## Behind the scenes

Sales credit note of AED 2,000 plus VAT:

| Account | Debit | Credit |
| --- | --- | --- |
| Sales Returns (or Sales – Goods) | 2,000 | |
| VAT Output 5% | 100 | |
| Debtors – customer | | 2,100 |

If stock comes back at a cost of AED 1,200, a second entry debits Stock in Hand and credits Cost of Goods Sold.

Purchase debit note of AED 2,800 plus VAT:

| Account | Debit | Credit |
| --- | --- | --- |
| Creditors – supplier | 2,940 | |
| Stock Received But Not Billed (or expense) | | 2,800 |
| VAT Input 5% | | 140 |

## Common problems

:::details The credit note shows as unpaid
It was created without **Return Against**, so it is not linked. Allocate it with payment reconciliation.
:::

:::details "Returned quantity exceeds the original"
You are trying to return more than was sold on that invoice, including earlier returns. Check previous credit notes against it.
:::

:::details Should I cancel the invoice instead?
Only if it has not been sent to the customer and its VAT period is still open. Otherwise use a credit note.
:::

## Related pages

- [Sales returns](/selling/sales-returns)
- [Purchase returns](/buying/purchase-returns)
- [Correcting VAT returns](/uae-compliance/voluntary-disclosure)

@@ bank-reconciliation | Bank reconciliation
@summary Match your bank statement to DocFlow line by line, clear cheques, record missing entries and prove the bank balance every month.

Bank reconciliation proves that the bank balance in DocFlow agrees with the bank's own statement, and catches missing entries, bounced cheques and errors early.

:::note Before you start
- Each bank account in the chart has **Account Type** Bank and is linked to a **Bank Account** record (bank name, IBAN, account number).
- At go-live, record the bank statement's closing balance and any uncleared items.
- Download statements from your bank's online banking in CSV or Excel. Most UAE banks offer both.
:::

## Setting up bank accounts

1. Create a **Bank** record for each bank you use, such as Emirates NBD, FAB, ADCB, Mashreq, RAKBANK or ADIB.
2. Create a **Bank Account** for each account: link it to the bank, the company and the ledger account, and enter the IBAN.
3. Tick **Is Company Account**.

## Importing a statement

1. Go to **Accounting › Bank Reconciliation Tool**.
2. Choose the company and bank account, and set **From Date** and **To Date**.
3. Enter the statement's opening and closing balances.
4. Click **Upload Bank Statement**, attach the file, and map the columns the first time: date, description, deposit, withdrawal, reference, balance.
5. Click **Submit**. Each line becomes a **Bank Transaction**.

!fig Bank statement import with column mapping

## Matching

The tool lists unreconciled bank transactions on one side and DocFlow vouchers on the other, with suggested matches.

| Action | When to use it |
| --- | --- |
| Match Against Voucher | A payment or journal already exists for the line |
| Create Voucher › Payment Entry | A customer or supplier payment that was not recorded |
| Create Voucher › Journal Entry | Bank charges, interest, direct debits |
| Transfer | Money moved between two of your own accounts |
| Split | One bank line covers several vouchers, or one voucher covers several lines |

Matching sets the **Clearance Date** on the voucher.

!fig Reconciliation screen matching a bank credit to a payment entry

## Rules for regular transactions

Create **Bank Transaction Rules** for lines that appear every month, such as "SALARY CARD FEE" or "ACCOUNT MAINTENANCE CHARGE". A rule can match the description, choose an account and create the journal automatically.

## The bank reconciliation statement

At month end, run the **Bank Reconciliation Statement** report:

| Line | Meaning |
| --- | --- |
| Balance as per DocFlow | The ledger balance on the date |
| Less: cheques issued not yet presented | Payments not yet cleared |
| Add: deposits not yet credited | Receipts not yet cleared |
| Balance as per bank statement | Should equal the statement |

Save or print it for your month-end file.

## Cheques and PDCs in reconciliation

- Post-dated cheques stay uncleared until their date. They should not appear in the bank until they are transferred from the PDC account.
- A bounced cheque shows on the statement as a deposit and a reversal. Cancel or reverse the payment entry, and record the bank's return charge.

## Common problems

:::details The statement upload fails
Check the date format (dd-mm-yyyy is common for UAE banks), remove currency symbols from amounts, and make sure deposits and withdrawals are in separate columns or signed consistently.
:::

:::details A payment cleared for a different amount
Bank charges or exchange differences were deducted. Create a voucher for the difference, then match both.
:::

:::details Opening balance does not agree
Check that all uncleared items at go-live were recorded with their original dates and no clearance date.
:::

## Related pages

- [Payments and receipts](/accounting/payment-entry)
- [Month-end close walkthrough](/guides/month-end-close)

@@ cost-centres-budgets | Cost centres, dimensions and budgets
@summary Measure profit by branch, division or project, share overheads fairly and control spending against approved budgets.

The general ledger tells you *what* you spent money on. **Cost centres** and **accounting dimensions** tell you *where* and *for which part of the business*. **Budgets** then tell you whether that spending was planned.

:::note Before you start
Agree with management how profit should be reported: by branch, by division, by project, or a combination. Changing the structure mid-year makes year-on-year comparisons difficult.
:::

## Cost centres

A cost centre is a tree, like the chart of accounts. Each company has a main cost centre, with branches below it.

| Example structure | Use |
| --- | --- |
| Al Waha Trading › Dubai › Showroom, Warehouse | Branch and location profit |
| Al Waha Trading › Kitchen Equipment, Spare Parts, Service | Division profit |
| Saqr Steel › Production › Cutting, Welding, Coating | Production cost tracking |

### Creating cost centres

1. Go to **Accounting › Chart of Cost Centres**.
2. Select a parent and click **Add Child**.
3. Tick **Is Group** for headings; leave it unticked for cost centres that take postings.

### Setting defaults

DocFlow picks a cost centre in this order: the line on the document, the item or item group default, the customer or supplier default, the project, then the company default. Set defaults where they make sense so staff rarely need to choose.

!fig Cost centre tree with Dubai and Abu Dhabi branches and divisions

## Accounting dimensions

When one extra view is not enough, add **Accounting Dimensions**, for example Branch *and* Project *and* Salesperson.

1. Go to **Accounting › Accounting Dimension › New**.
2. Choose the **Reference Document**, such as Branch, Project, or a custom list like "Business Line".
3. Set defaults per company, and tick **Mandatory for Balance Sheet** or **Mandatory for Profit and Loss** if every entry must carry it.
4. Save. The dimension appears on every transaction and as a filter on every financial report.

Use **Accounting Dimension Filter** to restrict which values can be used with which accounts, for example only Project dimensions on project cost accounts.

## Sharing overheads: cost centre allocation

Head office costs, such as rent, IT, finance and management salaries, serve every branch. A **Cost Centre Allocation** shares them automatically.

1. Go to **Accounting › Cost Centre Allocation › New**.
2. Choose the **Main Cost Centre**, for example *Head Office*.
3. Add the target cost centres with percentages, such as Dubai 50%, Abu Dhabi 30%, Sharjah 20%.
4. Set the **Valid From** date and submit.

Every entry posted to Head Office from that date is split automatically in reports.

## Budgets

### Creating a budget

1. Go to **Accounting › Budget › New**.
2. Choose **Budget Against**: Cost Centre, Project or another dimension.
3. Choose the cost centre or project, and the **Fiscal Year**.
4. Optionally choose a **Monthly Distribution** to spread the annual amount unevenly.
5. Add expense accounts and annual budget amounts.
6. Set the controls:

| Control | Action if exceeded |
| --- | --- |
| Annual budget on Material Request | Stop, Warn or Ignore |
| Annual budget on Purchase Order | Stop, Warn or Ignore |
| Annual budget on Actual Expenses | Stop, Warn or Ignore |
| Monthly budget (each of the above) | Stop, Warn or Ignore |

7. Submit.

!fig Budget for the marketing cost centre with monthly distribution and warning controls

### Monthly distribution

A **Monthly Distribution** sets the share of the annual budget for each month. For example, a retail business might put 14% in December and 6% in July. Monthly budget checks and variance reports use these shares.

### Revising a budget

Budgets are submitted documents. To change one, cancel and amend it, or create a **Budget Revision** record that documents the reason and the approver.

### Budget variance

The **Budget Variance Report** compares budget with actual by account and month, with the variance and percentage. Use it in monthly management meetings.

:::example Example: marketing budget for an exhibition
Al Waha Trading budgets AED 120,000 for marketing in 2026, weighted to October for a Dubai trade show. When the stand booking takes September spending above the monthly budget, the purchase officer sees a warning on the purchase order and the finance manager is notified. The annual budget is still within limit, so the order goes ahead.
:::

## Reports with cost centres and dimensions

- **Profit and Loss** and **Balance Sheet**: filter by cost centre or any dimension.
- **Profitability Analysis**: income, expense and profit by cost centre or project in one view.
- **General Ledger**: group by cost centre to see each posting.

## Common problems

:::details "Annual budget for account exceeded"
The control is set to Stop. A user with the right role can revise the budget or change the control to Warn.
:::

:::details "Accounting dimension is mandatory"
The dimension is marked mandatory for this report type. Fill it on the transaction, or set a default for the company.
:::

:::details Old entries are missing a cost centre
Filter the General Ledger for blank cost centres and correct them with journals before closing the year.
:::

## Related pages

- [Project costing](/projects/project-costing)
- [Financial reports](/accounting/financial-reports)
- [Inventory dimensions](/stock/inventory-dimensions)

@@ multi-currency | Foreign currency transactions
@summary Buy and sell in USD, EUR, SAR, CNY and other currencies while keeping your books in AED, with correct exchange gains and losses.

Many UAE businesses trade in foreign currencies. DocFlow records every transaction in the party's currency **and** in your company currency (AED), and calculates exchange differences automatically.

:::note Before you start
- Enable each currency you use under **Currency**.
- Decide how you will get exchange rates: entered manually, or fetched automatically.
- Decide which customers and suppliers are billed in foreign currency.
:::

## Key ideas

| Term | Meaning |
| --- | --- |
| Company currency | The currency of your books: AED |
| Transaction currency | The currency on the invoice or order |
| Party account currency | The currency of the customer's or supplier's receivable or payable account |
| Exchange rate | Rate from transaction currency to AED on the posting date |
| Realised gain or loss | Difference when an invoice is paid at a different rate |
| Unrealised gain or loss | Difference on open balances at month end |

## Setting up

### Exchange rates

- **Manual**: add rates under **Accounting › Currency Exchange**, for example USD to AED = 3.6725 from 1 January 2026.
- **Automatic**: in **Currency Exchange Settings**, choose a rate provider and DocFlow fetches the daily rate when a document needs it.
- **Stale rates**: in [accounts settings](/accounting/accounts-settings), choose whether to allow the last available rate when today's is missing.

:::uae The dirham peg
The AED is pegged to the USD at 3.6725. Add a fixed USD rate with a long validity period. USD invoices then never create exchange differences from rate changes, only from bank charges or rounding. VAT amounts on foreign currency invoices must be shown in AED using the Central Bank of the UAE rate.
:::

### Party accounts in foreign currency

You have two choices:

| Approach | How | Best for |
| --- | --- | --- |
| AED receivable account | Customer billed in USD, but the ledger is in AED | Few foreign transactions |
| USD receivable account | Create *Debtors – USD* with Account Currency USD and set it on the customer | Regular foreign customers, so balances are tracked in USD |

A party's account currency is fixed after the first transaction. To change it, create a separate customer record or account.

### Bank accounts in foreign currency

Create a ledger account with **Account Currency** USD (or EUR) under Bank Accounts, linked to its **Bank Account** record. Payments in and out of that account are recorded in USD.

## Transactions

- **Sales and purchase documents**: choose the currency; the exchange rate fills from the posting date. Amounts show in both currencies on the form.
- **Payment entries**: enter the amount paid and received in each account's currency. DocFlow calculates the difference against the invoice rate.
- **Journal entries**: tick **Multi Currency** and enter the exchange rate per row.

!fig Sales invoice in USD showing exchange rate and AED equivalent

## Realised exchange differences

When a EUR invoice booked at 4.05 is paid at 4.10, the AED value received is higher than the AED value of the invoice. On the payment entry, click **Set Exchange Gain / Loss** and DocFlow posts the difference to **Exchange Gain/Loss**.

## Unrealised exchange differences: revaluation

At month end, revalue open foreign currency balances.

1. Go to **Accounting › Exchange Rate Revaluation › New**.
2. Choose the company and the revaluation date.
3. Click **Get Entries**. DocFlow lists foreign currency receivable, payable and bank accounts with their balances, current rate and new AED value.
4. Review and submit, then click **Create Journal Entry**.

The journal posts the unrealised gain or loss. Many companies reverse it on the first day of the next month, so only realised differences remain.

## Presentation currency

To view financial statements in another currency, for example USD for an overseas parent company, choose a **Presentation Currency** on the report. DocFlow converts the figures at the selected rate without changing the books.

## Behind the scenes

Invoice to a Saudi customer for SAR 20,000 at 0.979:

| Account | Debit | Credit |
| --- | --- | --- |
| Debtors – SAR (SAR 20,000) | 19,580 | |
| Sales – Goods | | 19,580 |

Payment of SAR 20,000 received when the rate is 0.981 (AED 19,620):

| Account | Debit | Credit |
| --- | --- | --- |
| Bank – SAR (SAR 20,000) | 19,620 | |
| Debtors – SAR | | 19,580 |
| Exchange Gain/Loss | | 40 |

## Common problems

:::details "Exchange rate not found for EUR to AED"
Add the rate in Currency Exchange for that date, or enable automatic fetching.
:::

:::details "Party account currency must be same as invoice currency"
The customer's receivable account is in AED but the invoice is in USD, or the other way round. Use the right account, or bill in the account's currency.
:::

:::details The exchange rate field is locked
The price list or party currency fixes it. Change the price list or ask an administrator to allow editing the rate.
:::

## Related pages

- [Payments and receipts](/accounting/payment-entry)
- [Month-end closing](/accounting/period-closing)
- [Importing goods](/buying/import-purchases)

@@ period-closing | Month-end and year-end closing
@summary Close each month on time, lock the period and complete the year-end close with the period closing voucher.

Closing the books means making sure everything that happened in a period is recorded, checked and locked, so reports are final and nobody can change them by accident.

:::note Before you start
Agree a closing calendar with your team and the people who feed data into accounting: sales, buying, stores and HR. A simple target is all invoices by the 3rd working day and management reports by the 7th.
:::

## Month-end checklist

| Area | Task |
| --- | --- |
| Sales | All delivered orders invoiced; credit notes issued |
| Purchases | All supplier bills for the month entered; goods received not billed reviewed |
| Bank | All accounts reconciled; PDCs maturing in the month transferred |
| Stock | Stock and account value comparison checked; goods in transit reviewed; [landed costs](/stock/landed-cost) posted |
| Payroll | Salaries posted; WPS payment recorded; gratuity and air ticket accruals posted |
| Assets | Depreciation posted; new assets capitalised; disposals recorded |
| Accruals | Utilities, audit fees, bonuses and other expenses accrued |
| Prepayments | Monthly release of rent, insurance, licences |
| Deferred revenue | Monthly release processed |
| Foreign currency | [Revaluation](/accounting/multi-currency) of open balances |
| Inter-company | Balances agreed with group companies |
| VAT | VAT accounts reconciled; return prepared if the quarter ends |
| Review | Trial balance, profit and loss and balance sheet reviewed |
| Lock | Period closed |

The [month-end close walkthrough](/guides/month-end-close) shows this as a five-day plan.

## Locking a period

You have two tools:

| Tool | What it does | When to use |
| --- | --- | --- |
| **Accounts Frozen Till Date** (Accounts Settings) | Blocks all postings on or before the date, except for a chosen role | Simple monthly lock |
| **Accounting Period** | Closes a date range for selected document types | Finer control, for example closing sales invoices but leaving journals open |

To create an accounting period, go to **Accounting › Accounting Period › New**, set the dates and company, tick the document types to close, and save.

!fig Accounting period closing sales and purchase invoices for March 2026

## Year-end closing

### Before the period closing voucher

1. Complete the December month-end close.
2. Count stock and post the [stock reconciliation](/stock/stock-reconciliation).
3. Verify fixed assets and post depreciation to year end.
4. Update provisions: gratuity, air tickets, leave, doubtful debts.
5. Confirm balances with major customers and suppliers.
6. Post the Corporate Tax accrual for the year.
7. Agree audit adjustments with your auditor.

### The period closing voucher

The **Period Closing Voucher** moves the year's net profit or loss from all income and expense accounts into an equity account, so the next year starts with zero income and expense.

1. Go to **Accounting › Period Closing Voucher › New**.
2. Choose the **Company**, **Transaction Date** (usually the last day of the year) and **Fiscal Year**.
3. Choose the **Closing Account Head**, usually *Retained Earnings*.
4. Add a remark and submit.

DocFlow calculates the balances in the background and posts closing entries for each income and expense account.

!fig Period closing voucher for fiscal year 2026

### After the voucher

- If the auditor proposes adjustments later, post them dated 31 December, then cancel and resubmit the period closing voucher.
- Move the frozen date to 31 December once the audit is signed.
- Transfer the statutory reserve, if your company makes one.

:::uae Corporate Tax and the closed year
Your Corporate Tax return is based on the audited accounts for the tax period. Keep the closed-year trial balance, the profit and loss and your tax adjustments together. See [Corporate Tax](/uae-compliance/corporate-tax).
:::

## Common problems

:::details "Posting not allowed in closed accounting period"
The period is locked. Post the correction in the open period, or ask the Accounts Manager to reopen it briefly.
:::

:::details The period closing voucher is taking a long time
It runs in the background for large companies. Check **Period Closing Voucher** status; it changes to Completed when done.
:::

:::details The balance sheet does not balance after year end
The previous year's period closing voucher is missing or was cancelled. Submit it again.
:::

## Related pages

- [Accounts settings](/accounting/accounts-settings)
- [Financial reports](/accounting/financial-reports)
- [Corporate Tax](/uae-compliance/corporate-tax)

@@ financial-reports | Financial reports
@summary The statements and analyses management, banks, auditors and the FTA ask for, with every filter and option explained.

DocFlow's financial reports read directly from the general ledger, so they are always up to date. Every report can be filtered, exported to Excel or PDF, printed with your letterhead and emailed on a schedule.

## The main statements

| Report | Answers | Typical audience |
| --- | --- | --- |
| Trial Balance | Is everything balanced? What is in each account? | Accountants, auditors |
| Balance Sheet | What do we own and owe at a date? | Management, banks, auditors |
| Profit and Loss | Did we make money in the period? | Management, shareholders |
| Cash Flow | Where did cash come from and go? | Management, banks |
| General Ledger | Every posting to an account or party | Accountants, auditors |
| Consolidated Financial Statement | Group figures across companies | Group management |

!fig Profit and loss statement for Q1 2026 with monthly columns

## Filters and options

| Option | What it does |
| --- | --- |
| Company | The legal entity |
| Period / Fiscal Year | Date range |
| Periodicity | Monthly, Quarterly, Half-Yearly or Yearly columns |
| Accumulated Values | Shows year-to-date instead of each period |
| Cost Centre / Project / dimensions | Profit by branch, division or project |
| Finance Book | Alternative books, for example for group reporting |
| Presentation Currency | Show figures in another currency |
| Include Default Finance Book Entries | Combine default and selected books |
| Show Zero Values | Include accounts with no balance |
| Compare with previous year | Add prior-year columns |

## Receivables and payables

| Report | Shows |
| --- | --- |
| Accounts Receivable | Every open invoice by customer, with ageing buckets |
| Accounts Receivable Summary | One line per customer |
| Accounts Payable / Summary | The same for suppliers |
| Customer Ledger Summary | Opening, invoiced, paid and closing per customer |
| Payment Terms Status | Each payment-term instalment and whether it is paid |

Ageing can be based on the **posting date** or the **due date**, with ranges you choose, for example 30, 60, 90, 120.

!fig Accounts receivable ageing chart with buckets coloured by age

## Analysis reports

| Report | Shows |
| --- | --- |
| Gross Profit | Margin by invoice, item, customer or salesperson |
| Profitability Analysis | Income, expense and profit by cost centre or project |
| Sales Register / Purchase Register | Every invoice with tax columns |
| Budget Variance | Budget against actual |
| Trial Balance for Party | Balances of each customer and supplier |
| Dimension-wise Accounts Balance | Account balances split by a dimension |

## Customising statements

- **Financial Report Templates** let you define your own layout: which accounts go into which lines, subtotals and labels. Use them for bank covenant reports or a management format.
- **Account categories** group accounts into standard lines such as "Trade receivables" or "Cash and cash equivalents", useful for consistent notes to the accounts.
- **Cash flow mapping** assigns accounts to operating, investing and financing activities if the default classification does not fit.

## Sharing reports

- **Print or PDF**: with your letterhead, from the report menu.
- **Export**: to Excel or CSV for further work.
- **Auto Email Report**: send a saved report on a schedule, for example the receivable summary every Monday ([guide](/framework/report-builder)).
- **Prepared reports**: large reports run in the background and are saved for quick viewing.

:::uae Reports for banks and authorities
UAE banks usually ask for audited annual statements plus recent management accounts. Corporate Tax workings start from the profit and loss for the full tax period. Keep a saved version of each year-end report with your closing file.
:::

## Common problems

:::details The balance sheet does not balance
The previous year's period closing voucher is missing, or an opening entry is incomplete.
:::

:::details Figures differ from last month's printed report
Back-dated entries were posted after the report was printed. Lock periods after closing to prevent this.
:::

:::details The report is slow
Narrow the date range or company, or run it as a prepared report.
:::

## Related pages

- [Dashboards](/framework/dashboards)
- [Statements of account](/accounting/statement-of-accounts)
- [Month-end closing](/accounting/period-closing)

@@ accounts-settings | Accounts settings
@summary Every company-wide accounting rule explained: invoicing, payments, credit control, period locking, rounding, exchange rates and reports.

**Accounts Settings** holds the rules that apply to every accounting document in every company on your site. Review them once at setup and whenever your controls change.

:::note Before you start
Only the **Accounts Manager** or **System Manager** can change these settings. Note any change in your change log, because it affects every user.
:::

## Invoicing

| Setting | What it does | Suggested for UAE businesses |
| --- | --- | --- |
| Check Supplier Invoice Number Uniqueness | Warns when the same supplier bill number is entered twice | On |
| Over Billing Allowance (%) | How far above the ordered amount you may invoice | 0, or a small % if prices vary |
| Role allowed to over bill | Who can exceed the allowance | Accounts Manager |
| Automatically fetch payment terms from order | Copies terms from the order to the invoice | On |
| Delete linked ledger entries on cancellation | Removes rather than reverses entries | Off; reversal keeps the audit trail |
| Make Payment via Journal Entry | Uses journals instead of payment entries | Off |
| Show inclusive tax in print | Prints tax-inclusive amounts | On for retail only |
| Show taxes as table in print | Prints a tax breakdown table | On |
| Enable common party accounting | Lets a customer that is also a supplier be settled against each other | Optional |

## Payments and reconciliation

| Setting | What it does | Suggested |
| --- | --- | --- |
| Unlink payment on cancellation of invoice | Turns linked payments into advances when an invoice is cancelled | On |
| Unlink advance payment on cancellation of order | The same for orders | On |
| Auto reconcile payments | Allocates advances to new invoices automatically | Optional |
| Book advance payments in separate party account | Uses Advance Received and Advance Paid accounts | On for clearer balance sheets |
| Allow reconciliation in background | Runs large reconciliations as background jobs | On |

## Credit control and period locking

| Setting | What it does | Suggested |
| --- | --- | --- |
| Credit Controller | Role that can submit documents above a customer's credit limit | Accounts Manager |
| Accounts Frozen Till Date | Blocks postings on or before this date | Last closed month end |
| Role allowed to set frozen accounts and edit frozen entries | Who can post in the frozen period | Accounts Manager |

## Exchange rates

| Setting | What it does | Suggested |
| --- | --- | --- |
| Allow Stale Exchange Rates | Uses the last known rate when today's is missing | On, with a short limit |
| Stale Days | How old a rate may be | 3 |
| Exchange Gain/Loss posting | Posts realised differences automatically on payment | On |

## Deferred accounting

| Setting | What it does | Suggested |
| --- | --- | --- |
| Automatically process deferred accounting entry | Releases deferred revenue and expense monthly | On |
| Book deferred entries based on | Days or months | Months |
| Book deferred entries via journal entry | Posts releases as journals | On, for visibility |

## Reports

| Setting | What it does | Suggested |
| --- | --- | --- |
| Show balances in chart of accounts | Displays balances in the tree | On |
| Ignore account closing balance | Faster reports for large data sets | Off unless reports are slow |
| Use custom cash flow format | Uses your cash flow mapping | As needed |

!fig Accounts settings with frozen date, credit controller and payment options

:::tip Freeze every month
After each monthly close, move the frozen date forward. Late corrections then go into the open month with a clear note, instead of quietly changing closed figures.
:::

## Company-level accounting defaults

Some defaults live on the **Company** record instead:

| Default | Used when |
| --- | --- |
| Default Receivable / Payable Account | The party has no account of its own |
| Default Bank / Cash Account | A mode of payment has no account |
| Default Income / Expense Account | The item has no account |
| Round Off Account and Cost Centre | Rounding differences |
| Exchange Gain/Loss Account | Currency differences |
| Default Advance Received / Paid Account | Advances in separate accounts |
| Default Inventory, Stock Adjustment, COGS accounts | Stock transactions |
| Write Off Account | Payment write-offs |
| Default Payment Terms Template | Parties with no terms |

## Common problems

:::details Staff cannot post into last month
The frozen date has moved past it. This is intentional; post in the current month with a remark, or ask the Accounts Manager.
:::

:::details "Please set default Round Off Account in Company"
Set it on the Company record under Accounts.
:::

## Related pages

- [Month-end closing](/accounting/period-closing)
- [Selling settings](/selling/selling-settings)
- [Buying settings](/buying/buying-settings)

@@ mode-of-payment | Modes of payment
@summary Set up cash, card, bank transfer, cheque, PDC and online payment methods, each linked to the right account.

A **Mode of Payment** names a way money moves and tells DocFlow which account to use. Staff then pick "Cheque" or "Card" instead of choosing a ledger account.

## Creating a mode of payment

1. Go to **Accounting › Mode of Payment › New**.
2. Enter a clear name.
3. Choose the **Type**.

| Type | Use for |
| --- | --- |
| Cash | Cash in hand, petty cash |
| Bank | Transfers, cheques, cards, online payments |
| General | Anything else, such as a payment gateway clearing account |
| Phone | Mobile wallet payments, if your business accepts them |

Then, in the **Accounts** table, add one row per company with the default account, and save.

!fig Mode of payment for card terminal with default account per company

## A typical set for a UAE company

| Mode | Account | Notes |
| --- | --- | --- |
| Cash | Cash in Hand – AED | Counter sales, petty cash |
| Bank Transfer – Emirates NBD | Emirates NBD – Current AED | Most B2B receipts and payments |
| Bank Transfer – USD | Emirates NBD – Current USD | Foreign currency |
| Cheque | Bank current account | Current-dated cheques |
| PDC Received | PDC Receivable | Post-dated cheques from customers |
| PDC Issued | PDC Payable | Post-dated cheques to suppliers and landlords |
| Card – POS Terminal | Card Clearing | Card sales, cleared on settlement |
| Payment Link | Gateway Clearing | Online card payments |
| Salary Card / WPS | Bank current account | Payroll payments |

## Card settlements

Card sales go to a clearing account first. When the acquirer settles, usually one or two days later, net of fees:

| Step | Debit | Credit |
| --- | --- | --- |
| Sale | Card Clearing 1,050 | Sales 1,000 and VAT Output 50 |
| Settlement | Bank 1,029 and Card Fees 21 | Card Clearing 1,050 |

Reconcile the clearing account weekly; it should be close to zero apart from the last day or two of sales.

:::uae Card fees and VAT
Acquirer fees from a UAE bank normally carry 5% VAT. Ask the bank for a monthly tax invoice and record it as a purchase invoice, so the input VAT can be recovered.
:::

## Using modes of payment

Modes appear on payment entries, POS profiles, expense claims and payroll. Choosing a mode fills the account and, for bank modes, asks for a reference number.

## Related pages

- [Payments and receipts](/accounting/payment-entry)
- [Point of sale](/accounting/pos)
- [Petty cash](/accounting/petty-cash)

@@ payment-terms | Payment terms
@summary Define credit terms, advances, instalments, retention and early payment discounts once, and apply them everywhere.

Payment terms decide when invoices fall due. They feed ageing reports, dunning, cash flow forecasts and customer statements, so getting them right matters.

## Building blocks

### Payment term

A **Payment Term** is one instalment.

| Field | What it does |
| --- | --- |
| Invoice Portion (%) | Share of the invoice in this instalment |
| Due Date Based On | Days after invoice date, days after the end of the invoice month, or months after the end of the invoice month |
| Credit Days / Months | The number of days or months |
| Mode of Payment | Expected payment method, for example PDC |
| Discount Type and Discount | Early payment discount, percentage or amount |
| Discount Validity | Days within which the discount applies |
| Description | Printed on the invoice |

### Payment terms template

A **Payment Terms Template** combines terms that add up to 100%.

| Template | Terms |
| --- | --- |
| Cash on delivery | 100%, 0 days |
| Net 30 | 100%, 30 days after invoice |
| Net 60 end of month | 100%, 60 days after the end of the invoice month |
| 50/50 | 50% on order, 50% 30 days after invoice |
| Fit-out 20/30/30/10/10 | Advance, first fix, second fix, handover, retention |
| 2/10 Net 30 | 100% in 30 days, 2% discount if paid within 10 |

!fig Payment terms template with advance, delivery and retention lines

## Where terms are applied

DocFlow picks the template in this order: the document, the customer or supplier, the customer or supplier group, then the company default. The template builds a **Payment Schedule** on the order and invoice, one row per term with its due date and amount.

## Early payment discounts

When a payment entry is made within the discount validity, DocFlow suggests the discount and posts it to the **Discount Allowed** (sales) or **Discount Received** (purchases) account as a deduction.

:::uae Discounts and VAT
An early payment discount taken after a tax invoice has been issued reduces the consideration. If the amount is significant, issue a tax credit note so VAT is adjusted correctly.
:::

## Tracking instalments

The **Payment Terms Status for Sales Order** report shows each instalment, whether it has been invoiced and paid, and what is overdue. Use it for projects and large orders.

:::uae Retention in construction
Fit-out and contracting jobs often hold back 5–10% until the defects liability period ends. A separate retention term keeps it out of normal overdue figures and makes it easy to chase when it falls due.
:::

## Common problems

:::details "Total payment amount in payment schedule must be equal to grand total"
The template does not add up to 100%, or the invoice changed after the schedule was built. Reselect the template.
:::

:::details The due date is not what I expected
Check **Due Date Based On**. "Days after the end of the invoice month" counts from the month end, not the invoice date.
:::

## Related pages

- [Milestone billing](/projects/milestone-billing)
- [Dunning](/accounting/dunning)
- [Customers](/selling/customers)

@@ payment-reconciliation | Payment reconciliation
@summary Match unallocated payments, advances, credit notes and journals to open invoices, and undo allocations when needed.

Over time, a customer or supplier account can collect payments that are not linked to any invoice: advances, lump-sum payments, credit notes or journal adjustments. Until they are matched, invoices look unpaid and ageing reports are wrong. **Payment Reconciliation** matches them.

## When to use it

- A customer paid several invoices with one transfer and did not say which.
- An advance was received before the invoice existed.
- A credit note was issued but not linked to its invoice.
- A journal entry settled a balance without referencing the invoice.

## Running reconciliation

1. Go to **Accounting › Payment Reconciliation**.
2. Choose the **Company**, **Party Type** (Customer or Supplier) and **Party**.
3. Choose the **Receivable / Payable Account**.
4. Optionally filter by date range, minimum and maximum amount, or cost centre.
5. Click **Get Unreconciled Entries**. Two tables appear: **Invoices** (open invoices and debit notes) and **Payments** (unallocated payments, advances, credit notes and journals).
6. Tick the invoices and payments to match, then click **Allocate**. DocFlow matches oldest first; adjust allocated amounts if needed.
7. Review the **Allocation** table, including any exchange difference.
8. Click **Reconcile**.

!fig Payment reconciliation matching two payments against three invoices

## Reconciling many parties

**Process Payment Reconciliation** runs the same matching for all parties (or a filtered set) in the background, for example every month end. Review its log for parties it could not match automatically.

## Undoing a reconciliation

If a payment was matched to the wrong invoice, open the payment and use **Unreconcile**, or use the **Unreconcile Payment** tool, choosing the allocations to remove. The payment becomes unallocated again and can be matched correctly.

## Exchange differences

When a foreign currency payment is matched to an invoice at a different rate, the allocation shows the difference. DocFlow posts it to Exchange Gain/Loss when you reconcile.

## Common problems

:::details No entries found
Check the receivable or payable account and the dates. Payments posted to a separate advance account appear only if that account is selected.
:::

:::details The allocation is greater than the outstanding amount
Another document has already reduced the invoice. Refresh the entries.
:::

## Related pages

- [Payments and receipts](/accounting/payment-entry)
- [Statements of account](/accounting/statement-of-accounts)

@@ payment-request | Payment requests and payment links
@summary Send customers a link to pay online, request internal payment approval, and record online payments automatically.

A **Payment Request** asks someone to pay. Sent to a customer, it contains a **Pay Now** link to your payment gateway. Created against a supplier invoice, it is an internal request for finance to release a payment.

## Setting up online payments

1. Get merchant credentials from your acquiring bank or payment provider.
2. Set up the gateway under **Integrations** with those credentials.
3. Create a **Payment Gateway Account** linking the gateway to a clearing account and currency.
4. Optionally set a default email message for payment requests.

## Requesting payment from a customer

1. Open a submitted sales order or sales invoice.
2. Click **Create › Payment Request**.
3. Check the gateway account, amount (full or partial, for example a 30% advance) and email message.
4. Click **Send**. The customer receives an email with a **Pay Now** link.
5. When the customer pays, the gateway confirms, the request becomes **Paid**, and a payment entry is created automatically against the clearing account.

!fig Payment request email with a pay now link

## Internal payment requests

For supplier payments that need approval, create a payment request from the purchase invoice with **Payment Request Type = Outward**. Finance approves it through a [workflow](/framework/workflows), then makes the payment or adds it to a **Payment Order** for the bank.

## Statuses

| Status | Meaning |
| --- | --- |
| Draft / Requested | Created and sent |
| Initiated | Customer started paying |
| Paid | Payment received |
| Partially Paid | Part received |
| Failed / Cancelled | Did not complete |

:::uae Card fees
Gateway fees are deducted on settlement. Record settlements from the clearing account to the bank with fees as a deduction, and claim input VAT on the provider's monthly tax invoice.
:::

## Common problems

:::details The customer paid but no payment entry was created
The gateway did not send its confirmation back. Check the gateway dashboard, then create the payment entry manually and mark the request paid.
:::

## Related pages

- [Modes of payment](/accounting/mode-of-payment)
- [Integrations](/framework/integrations-api)

@@ dunning | Dunning and payment reminders
@summary Chase overdue invoices with escalating reminders, optional fees and a clear collections routine.

**Dunning** is a structured way to remind customers about overdue invoices. Each dunning document lists the overdue amounts, applies any agreed fees or interest, and is emailed with a message suited to how late the payment is.

:::note Before you start
- Invoices must have correct due dates, from [payment terms](/accounting/payment-terms).
- Each customer needs a primary contact with an email for accounts.
- Agree with management what tone to use at each stage, and whether you charge late fees.
:::

## Dunning types

A **Dunning Type** is one level of reminder.

| Field | What it does |
| --- | --- |
| Dunning Type name | For example "1st reminder", "2nd reminder", "Final notice" |
| Dunning Fee | A fixed charge added to the dunning |
| Rate of Interest (% p.a.) | Interest calculated on overdue days |
| Income Account | Where fees and interest are posted |
| Cost Centre | For reporting |
| Dunning Letter Text | Body and closing text, per language |

Create English and Arabic letter text on each type so the right language prints for each customer.

| Level | Days overdue | Tone | Fee |
| --- | --- | --- | --- |
| 1st reminder | 7 | Friendly reminder | None |
| 2nd reminder | 21 | Firm, with a statement attached | None |
| Final notice | 45 | Final notice before the account is put on hold | Admin fee if agreed in the contract |

## Creating a dunning

**For one invoice**: open an overdue sales invoice and click **Create › Dunning**.

**For many invoices**: open the **Accounts Receivable** report, filter for overdue invoices, select them and create dunnings in bulk.

On the dunning:

1. Check the **Dunning Type**, which sets the letter and fees.
2. Review the **Overdue Payments** table: invoice, due date, days overdue, outstanding and interest.
3. Check the totals: outstanding, fee, interest and grand total.
4. Submit and click **Email** to send it.

!fig Dunning letter for an overdue invoice with the outstanding amount

## When the customer pays

Record the payment against the invoices as usual. If you charged a fee or interest, the customer pays the dunning amount too; record that payment against the dunning.

## A collections routine that works

| When | Action |
| --- | --- |
| Every Monday | Run Accounts Receivable sorted by days overdue |
| 7 days overdue | First dunning email |
| 21 days overdue | Call the customer; send the second dunning with a statement |
| 45 days overdue | Final notice; reduce the credit limit so new orders are held |
| 90 days overdue | Escalate to management or legal; review for a doubtful debt provision |

:::uae Late payment charges
Only charge late fees or interest if they are agreed in your contract or terms and conditions. Fees for late payment may be subject to VAT, so check with your adviser and invoice them properly.
:::

## Common problems

:::details The dunning went to the wrong person
DocFlow uses the customer's primary contact. Mark the accounts contact as primary.
:::

:::details Interest looks too high
Check the rate (it is annual) and the date the dunning is calculated to.
:::

## Related pages

- [Statements of account](/accounting/statement-of-accounts)
- [Customers and credit limits](/selling/customers)
- [Bad debt relief](/uae-compliance/bad-debt-relief)

@@ pos | Point of sale
@summary Run showroom and shop counters: POS profiles, selling, payments, returns, offline mode, end-of-day closing and the accounting behind it.

**Point of Sale (POS)** is a fast, touch-friendly screen for counter sales in showrooms, shops, trade counters and spare parts desks. It creates POS invoices, takes cash and card payments, prints receipts and consolidates everything into your books at the end of the day.

:::note Before you start
- Set up the shop **warehouse** with stock.
- Create a **retail price list** with prices including VAT.
- Set up [modes of payment](/accounting/mode-of-payment) for cash and card.
- Prepare a receipt [print format](/getting-started/printing) using the simplified tax invoice layout.
- Connect a receipt printer, a cash drawer and a barcode scanner if you use them.
:::

## POS profiles

A **POS Profile** describes one counter or shop: what it sells, from where, at what price and how it takes payment.

| Field | What it does |
| --- | --- |
| Company and Warehouse | Where stock is taken from |
| Customer | The default walk-in customer, for example "Walk-in Customer – Deira" |
| Price List and Currency | Prices shown at the counter |
| Payments | Allowed modes of payment, with one set as default |
| Applicable for Users | Cashiers who may use this profile |
| Item Groups / Customer Groups | Limit what can be sold and to whom |
| Taxes and Charges Template | Usually VAT 5% with tax included in price |
| Print Format and Letter Head | Receipt layout |
| Allow Discount Change / Rate Change | Whether cashiers can change prices |
| Hide Unavailable Items | Shows only items in stock |
| Validate Stock on Save | Blocks sales of items without stock |
| Write Off Account and Limit | Small differences written off at checkout |
| Cost Centre | For branch profit |

!fig POS profile with warehouse, payment modes and print format

## Opening the counter

1. Open **Point of Sale**.
2. Choose the POS profile.
3. Enter the **opening balance** for each mode of payment, usually the cash float.
4. Click **Submit**. A **POS Opening Entry** records the start of the session.

## Selling

1. Scan barcodes, or search items by name, code or barcode. Click a tile to add it.
2. Change quantity, discount or price if your profile allows it.
3. Choose a customer, or keep the walk-in customer. For VAT-registered business customers, choose or create the customer with their TRN, so a full tax invoice prints.
4. Click **Checkout** and enter payment: cash (with change calculated), card, or a mix.
5. Redeem [loyalty points](/accounting/loyalty-program) or apply a coupon if offered.
6. Click **Complete Order**. The receipt prints and the cart clears.

!fig Point of sale screen with items, cart and payment buttons

## Returns and exchanges

1. Open **Recent Orders**, find the receipt by number, customer or date.
2. Click **Return**, choose the items and quantities.
3. Refund by the original method, or issue a credit note the customer can use later.

For an exchange, process the return and then a new sale.

## Offline mode

If the internet drops, the POS keeps working. Invoices are saved on the device and sync automatically when the connection returns. Do not clear the browser cache while invoices are waiting to sync.

## Closing the day

1. Click **Close the POS** from the menu.
2. A **POS Closing Entry** lists expected amounts for each mode of payment.
3. Count the cash, enter the card total from the terminal's settlement report, and enter any difference with a reason.
4. Submit. DocFlow creates a **POS Invoice Merge Log** that consolidates the session's invoices into consolidated sales invoices and posts them to the ledger.

## Behind the scenes

During the day, POS invoices update stock immediately but do not post to the general ledger individually. At closing, the consolidated sales invoice posts:

| Account | Debit | Credit |
| --- | --- | --- |
| Cash in Hand – Deira Showroom | 8,400 | |
| Card Clearing | 12,600 | |
| Sales – Goods | | 20,000 |
| VAT Output 5% | | 1,000 |

Returns are consolidated into a credit note in the same way.

:::uae Simplified and full tax invoices
Receipts for walk-in customers can be simplified tax invoices. When a VAT-registered business customer asks for a full tax invoice, select them as the customer before checkout so the receipt includes both TRNs and the full details.
:::

## Common problems

:::details "Item not available in warehouse"
The profile's warehouse has no stock. Transfer stock to the shop, or switch off **Validate Stock on Save** only if your policy allows overselling.
:::

:::details "POS Opening Entry is missing"
A cashier must open a session before selling. Open it, or close an old session left open from a previous day first.
:::

:::details The cash count is short or over
Check for card payments recorded as cash, refunds not entered, and float amounts. Record the difference in the closing entry with a reason.
:::

## Related pages

- [Loyalty programmes](/accounting/loyalty-program)
- [Barcodes](/stock/barcode-scanning)
- [Tax refunds for tourists](/uae-compliance/tourist-refund)

@@ deferred-revenue | Deferred revenue and expenses
@summary Recognise income and costs in the months they belong to, for annual contracts, subscriptions, prepaid licences and insurance.

When you invoice a 12-month contract upfront, the cash and the VAT belong to the invoice date, but the income belongs to 12 months. **Deferred revenue** and **deferred expense** spread the amount automatically, so monthly profit is right.

## When to use it

| Situation | Type |
| --- | --- |
| Annual maintenance contracts billed upfront | Deferred revenue |
| Software or support subscriptions billed yearly | Deferred revenue |
| Annual insurance premium | Deferred expense |
| Trade licence and visa quota renewals | Deferred expense |
| Annual software licences you buy | Deferred expense |
| Office rent paid by annual cheques | Deferred expense, or a prepaid rent journal |

## Setting up

1. Create a **Deferred Revenue** liability account and a **Prepaid Expenses** asset account.
2. On each relevant item, tick **Enable Deferred Revenue** (or Expense), choose the account and the default number of months.
3. In [accounts settings](/accounting/accounts-settings), tick **Automatically process deferred accounting entry**.

## Using it on invoices

1. On the sales or purchase invoice line, the deferred tick is copied from the item.
2. Set the **Service Start Date** and **Service End Date**.
3. Submit. The whole amount goes to the deferred account.
4. At each month end, DocFlow posts a journal moving that month's share into income or expense, based on days or months.

!fig Sales invoice line with service start and end dates for deferred revenue

## Processing manually

If automatic processing is off, or you need to catch up, use **Process Deferred Accounting**: choose the type (income or expense), the date range and the company, then submit.

## Behind the scenes

An AED 180,000 maintenance contract invoiced on 1 January plus VAT:

| Date | Debit | Credit |
| --- | --- | --- |
| 1 January | Debtors 189,000 | Deferred Revenue 180,000; VAT Output 9,000 |
| 31 January, and each month end | Deferred Revenue 15,000 | Maintenance Income 15,000 |

:::uae VAT is not deferred
VAT is due at the tax point, usually the invoice date or payment date, not over the service period. Only the income or expense is spread.
:::

## Common problems

:::details The monthly entries were not posted
Check the automatic setting and whether the period is frozen; run **Process Deferred Accounting** for the missed months.
:::

:::details The contract was cancelled midway
Issue a credit note for the unused months with the same service dates for the remaining period. DocFlow reverses the remaining deferred balance.
:::

## Related pages

- [Subscriptions](/accounting/subscriptions)
- [Tax point](/uae-compliance/tax-point)

@@ subscriptions | Subscriptions and recurring billing
@summary Bill customers automatically for recurring plans, with trials, proration, cancellations and payment links.

**Subscriptions** generate invoices on a schedule for ongoing services: equipment rental, managed IT, cleaning contracts, software, maintenance plans or memberships.

## Building blocks

| Record | What it holds |
| --- | --- |
| Subscription Plan | The item, price (fixed or from a price list), currency and billing interval |
| Subscription | The customer, start date, plans and billing rules |
| Subscription Settings | Grace period and cancellation behaviour |

## Creating a subscription plan

1. Go to **Accounting › Subscription Plan › New**.
2. Name the plan, for example "Managed IT – Standard".
3. Choose the **Item**, **Price Determination** (fixed rate or price list) and **Cost**.
4. Set the **Billing Interval** (day, week, month, year) and **Interval Count**, for example every 3 months.
5. Optionally link a **Payment Gateway** so invoices can be paid online.

## Creating a subscription

1. Go to **Accounting › Subscription › New**.
2. Choose the **Party Type** (Customer) and **Party**.
3. Set the **Start Date**, an optional **Trial Period**, and an optional **End Date**.
4. Add the plans and quantities.
5. Choose **Generate Invoice At**: beginning or end of each period.
6. Set **Days Until Due**, taxes and any additional discount.
7. Tick **Submit Invoice** to submit invoices automatically, or leave unticked to review them first.
8. Save.

!fig Subscription with a monthly plan and the next invoice date

## Changes during the subscription

| Change | How |
| --- | --- |
| Upgrade or add a plan | Add the plan; with **Prorate** on, the first period is charged pro rata |
| Pause | Not supported directly; cancel and start a new subscription |
| Cancel | Click **Cancel Subscription**; choose whether to invoice the final partial period |
| Customer stops paying | After the grace period, the subscription becomes **Unpaid** or is cancelled, depending on settings |

## Statuses

| Status | Meaning |
| --- | --- |
| Trialing | In the trial period, not billed |
| Active | Billing normally |
| Past Due Date | Latest invoice is overdue but within grace |
| Unpaid | Overdue past grace |
| Cancelled / Completed | Ended |

:::tip Subscription or auto repeat?
Use subscriptions for priced plans you sell to many customers. Use [auto repeat](/framework/automation) to copy one specific document, such as a rent invoice, on a schedule.
:::

## Related pages

- [Deferred revenue](/accounting/deferred-revenue)
- [Payment requests](/accounting/payment-request)

@@ inter-company | Inter-company transactions
@summary Record sales, purchases and recharges between companies in your group, keep balances matched and eliminate them in group reports.

Many UAE groups trade between companies: a free zone entity imports and sells to its mainland sister company, or head office recharges shared costs to subsidiaries. Both sides must record each transaction, and group reports must eliminate it.

## Setting up

1. On the **Customer** that represents the sister company, tick **Is Internal Customer** and choose the company it represents in **Represents Company**. In **Allowed To Transact With**, list the companies that may sell to it.
2. On the **Supplier** that represents the sister company, tick **Is Internal Supplier** and set the same fields.
3. Create an **Inter-Company Receivable** and **Inter-Company Payable** account in each company if you want these balances separate.

## Sales and purchases between companies

1. In the selling company, create and submit a sales invoice to the internal customer.
2. Click **Create › Inter Company Purchase Invoice**. A draft opens in the buying company with the same items, rates and taxes, linked to the sales invoice.
3. The buying company checks taxes and the expense or stock accounts, and submits.

The same flow works for orders: a sales order to the internal customer can create a matching purchase order.

!fig Inter-company purchase invoice created from the matching sales invoice

## Stock transfers between companies

If goods physically move between the companies' warehouses, use **Update Stock** on both invoices, or delivery note and purchase receipt pairs. Valuation in the buying company is the transfer price, not the seller's cost.

## Recharges and loans: inter-company journals

For shared costs, management fees and loans:

1. Create a **Journal Entry** with **Entry Type = Inter Company Journal Entry**.
2. Enter the rows for the first company and submit.
3. Click **Make Inter Company Journal Entry**. A matching journal opens in the other company.

## Reconciling group balances

At each month end, the receivable in one company should equal the payable in the other. Run Accounts Receivable in the seller and Accounts Payable in the buyer, filtered by the internal party. Differences are usually documents in transit or different exchange rates.

## Group reporting

Run the **Consolidated Financial Statement** for the parent company. Inter-company sales, purchases and balances should be eliminated, either by filtering internal parties or by posting elimination journals in a consolidation company.

:::uae VAT and Corporate Tax between group companies
If both companies are in one VAT group, supplies between them are generally outside the scope of VAT. If they are registered separately, VAT applies as normal. For Corporate Tax, inter-company prices must follow the arm's length principle. See [Transfer pricing](/uae-compliance/transfer-pricing).
:::

## Related pages

- [Running several companies](/organization/multi-company)
- [Transfer pricing](/uae-compliance/transfer-pricing)

@@ bank-guarantee | Bank guarantees and letters of credit
@summary Track guarantees you issue or receive, their margins and charges, and get reminded before they expire.

Tenders, government contracts, large supply orders and project advances in the UAE often require a **bank guarantee**. Imports are often paid by **letter of credit**. DocFlow keeps a register of both so nothing expires unnoticed.

## Types of guarantee

| Type | Purpose |
| --- | --- |
| Bid bond (tender guarantee) | Shows commitment when bidding, usually 1–5% of the bid |
| Performance bond | Secures performance of a contract, often 10% |
| Advance payment guarantee | Protects a customer's advance |
| Retention guarantee | Replaces cash retention |
| Customs guarantee | Covers duty on temporary imports |

## Recording a guarantee

1. Go to **Accounting › Bank Guarantee › New**.
2. Choose **Bank Guarantee Type**: **Receiving** (someone gives you a guarantee) or **Providing** (your bank issues one for you).
3. Link the **Reference Document**, such as a sales order, purchase order or project.
4. Choose the customer or supplier, and the bank.
5. Enter the **Amount**, **Start Date**, **Validity in Days** and **End Date**.
6. Enter the **Bank Guarantee Number**, beneficiary name and any margin.
7. Attach the guarantee and submit.

!fig Bank guarantee record with amount, bank and validity dates

## Margins and commission

Banks may hold a cash margin and charge commission:

| Event | Debit | Credit |
| --- | --- | --- |
| Margin held | Margin Money (asset) | Bank |
| Commission charged | Bank Charges | Bank |
| Margin released | Bank | Margin Money |

## Letters of credit

Record the LC on the purchase order (custom fields for LC number, bank, expiry and amount), and track it in the same register. When documents are presented and paid, record the payment against the supplier with bank charges as deductions.

:::tip Expiry alerts
Add a [notification rule](/getting-started/notifications) that warns the finance team 30 days before a guarantee or LC expires, so it can be extended or released.
:::

## Related pages

- [Customs](/uae-compliance/customs)
- [Importing goods](/buying/import-purchases)

@@ statement-of-accounts | Customer statements of account
@summary Send customers clear statements, one at a time or automatically every month, in English or Arabic.

A statement of account shows a customer what they bought, what they paid and what they still owe. Regular statements reduce disputes and speed up collections.

## A single statement

1. Run **General Ledger** filtered by Party Type = Customer and the customer, for the period. Tick **Group by Voucher (Consolidated)** for a clean view.
2. Or run **Accounts Receivable** filtered by the customer, which lists open invoices with ageing.
3. Print with your letterhead or email directly from the report.

## Statements for many customers

Use **Process Statement of Accounts**:

1. Go to **Accounting › Process Statement of Accounts › New**.
2. Choose the **Company**, **Report** (General Ledger or Accounts Receivable), and the period.
3. Add customers individually, or by customer group, territory or sales person.
4. Choose filters such as currency, cost centre and whether to include ageing.
5. Set the **Email Subject** and **Body**, with the customer's name inserted.
6. Choose **Letter Head**, orientation and whether to include a summary table.
7. Tick **Enable Auto Email** and set the frequency, for example monthly on the 3rd, and the start date.
8. Save. Click **Send Emails** to send now, or wait for the schedule.

!fig Process statement of accounts with customers and monthly email schedule

:::uae Year-end balance confirmations
Auditors often ask for confirmations from major customers and suppliers. Send a year-end statement with a short request to confirm the balance or report differences, in English and Arabic.
:::

## Common problems

:::details A customer did not receive their statement
Check that the customer's primary contact has an email and that outgoing email is working; look in the **Email Queue** for errors.
:::

:::details Paid invoices still appear
The payment is not allocated. Use [payment reconciliation](/accounting/payment-reconciliation).
:::

## Related pages

- [Dunning](/accounting/dunning)
- [Financial reports](/accounting/financial-reports)

@@ petty-cash | Petty cash
@summary Run petty cash floats at offices, sites and warehouses with clear controls, receipts and top-ups.

Petty cash covers small spending: fuel, parking, Salik top-ups, stationery, tea and water, courier charges, minor repairs. It is small money, but it needs the same controls as the bank.

## Setting up

1. Create a cash account per float, for example *Petty Cash – Mussafah Site*, under Cash.
2. Name a custodian for each float.
3. Create a **Mode of Payment** for each float.
4. Set a float amount, for example AED 3,000, and a single-payment limit, for example AED 500.

## Recording spending

| Spending | How to record |
| --- | --- |
| Company purchase by the custodian | **Journal Entry** of type Cash Entry: debit the expense (and VAT Input if there is a valid tax invoice), credit petty cash; attach receipts |
| Purchase from a regular supplier | Purchase invoice with **Is Paid** ticked and the petty cash mode of payment |
| Staff out-of-pocket spending | Staff submit an [expense claim](/hr-payroll/expense-claims), reimbursed from petty cash |

!fig Cash entry for site expenses with attached receipts

## Topping up (imprest system)

When the float runs low, the custodian lists the spending since the last top-up with receipts. Accounts reviews it and transfers the total from the bank to petty cash, bringing the float back to its fixed amount.

## Controls auditors expect

- One custodian per float, named on the account.
- Surprise cash counts at least once a quarter, recorded and signed.
- No payment above the limit without approval.
- Receipts attached to every entry.
- Petty cash balance checked against the ledger at month end.

:::uae Recovering VAT on small receipts
Input VAT can only be recovered with a valid tax invoice. Many small receipts are simplified tax invoices. Record VAT only when the receipt shows the supplier's TRN and the VAT amount.
:::

## Related pages

- [Expense claims](/hr-payroll/expense-claims)
- [Modes of payment](/accounting/mode-of-payment)

@@ loyalty-program | Loyalty programmes
@summary Reward repeat customers with points, tiers and redemptions at the counter or on invoices.

A loyalty programme gives customers points for spending, which they redeem as a discount later. It suits retail showrooms, spare parts counters and restaurants.

## Creating a programme

1. Go to **Selling › Loyalty Program › New**.
2. Choose **Single Tier** or **Multiple Tier**.
3. For each tier, set the **Tier Name**, **Minimum Total Spent** and **Collection Factor** (spending per point, for example AED 10 = 1 point).
4. Set the **Conversion Factor**: the value of one point when redeemed, for example AED 0.10.
5. Set **Expiry Duration (in days)**.
6. Choose the **Expense Account** and **Cost Centre** for redeemed points.
7. Choose the **Customer Group** or **Customer Territory** it applies to, and the validity dates.
8. Tick **Auto Opt In** to enrol customers automatically.

| Tier | Minimum spend | Collection |
| --- | --- | --- |
| Silver | AED 0 | 1 point per AED 10 |
| Gold | AED 20,000 | 1 point per AED 8 |
| Platinum | AED 50,000 | 1 point per AED 5 |

!fig Loyalty programme with tiers and collection and conversion factors

## Earning and redeeming

- Points are earned when a sales invoice or POS invoice is submitted, based on the net amount.
- To redeem, tick **Redeem Loyalty Points** on the invoice or at the POS checkout and enter the points. The value is applied as a discount.
- The **Loyalty Point Entry** list shows every earning and redemption per customer.

## Behind the scenes

When points worth AED 50 are redeemed on a sale, the redemption reduces what the customer pays and is charged to the loyalty expense account, so the cost of the programme is visible.

:::uae VAT on redeemed points
VAT is usually charged on the price the customer actually pays after redemption. Confirm the treatment for your scheme with your tax adviser.
:::

## Related pages

- [Point of sale](/accounting/pos)
- [Promotional schemes](/selling/promotional-schemes)

@@ shipping-rules | Shipping rules
@summary Add delivery charges automatically by order value, weight or destination.

A **Shipping Rule** adds a delivery charge to quotations, orders and invoices automatically, so every salesperson charges the same way.

## Creating a rule

1. Go to **Selling › Shipping Rule › New**.
2. Enter a label that prints on documents, for example "Delivery – Northern Emirates".
3. Choose **Shipping Rule Type**: Selling, Buying or both.
4. Choose **Calculate Based On**: Net Total, Net Weight or Fixed.
5. Add conditions with **From Value**, **To Value** and **Shipping Amount**.
6. Restrict to countries if needed.
7. Choose the **Shipping Account** (income for selling) and cost centre.

| Rule | Condition | Charge |
| --- | --- | --- |
| Dubai, Sharjah, Ajman | Net total below AED 2,000 | AED 150 |
| Dubai, Sharjah, Ajman | Net total AED 2,000 or more | Free |
| Abu Dhabi and Al Ain | Any | AED 300 |
| Northern Emirates | Any | AED 350 |
| Heavy items | Net weight above 500 kg | AED 600 |

!fig Shipping rule with net total conditions and charges

On a document, choose the rule in **Shipping Rule**, or set it as the customer's default. The charge appears as a row in the taxes and charges table.

:::uae Delivery charges carry VAT
A delivery charge that is part of a taxable sale is taxed at 5%, like the goods. Make sure your VAT row is calculated on the total including the shipping row.
:::

## Related pages

- [Delivery trips](/stock/delivery-trip)
- [Sales orders](/selling/sales-order)

@@ opening-balances | Opening balances and migration
@summary Move from your old system or spreadsheets to DocFlow with correct balances, open invoices, stock and assets on day one.

Going live means bringing your history into DocFlow so the first trial balance matches your old books exactly. The safest way is to load open items in detail and everything else as balances, all dated the day before go-live.

:::note Before you start
- Choose a go-live date, ideally the first day of a month or, better, a financial year.
- Close the old books for the previous period and get a final trial balance, receivable and payable ageing, stock list and fixed asset register.
- Set up the chart of accounts, cost centres, customers, suppliers and items in DocFlow first.
:::

## What to load and how

| Balance | How to load it | Detail kept |
| --- | --- | --- |
| Customer balances | **Opening Invoice Creation Tool** (sales) | Each unpaid invoice with its number, date and due date |
| Supplier balances | Opening Invoice Creation Tool (purchase) | Each unpaid bill |
| Customer and supplier advances | Payment entries dated the day before go-live, unallocated | Each advance |
| Stock | **Stock Reconciliation** with purpose *Opening Stock* | Quantity and value per item, warehouse and batch |
| Fixed assets | Assets with **Is Existing Asset** ticked | Cost, purchase date and accumulated depreciation |
| Bank, cash, VAT, accruals, loans, equity | **Journal Entry** with **Is Opening** ticked | Account balances |
| Uncleared cheques | Payment entries dated with the original cheque dates | For bank reconciliation |

## Using a temporary opening account

Every opening document posts its other side to a **Temporary Opening** account. When everything is loaded, that account should be zero, because the detailed items and the opening journal together equal your old trial balance.

1. Load open invoices and bills. Temporary Opening builds up a balance.
2. Load stock and assets. More goes into Temporary Opening.
3. Post the opening journal for all remaining accounts, with the balancing figure to Temporary Opening.
4. Check that Temporary Opening is exactly zero.

!fig Trial balance on go-live day with the temporary opening account at zero

## The Opening Invoice Creation Tool

1. Go to **Accounting › Opening Invoice Creation Tool**.
2. Choose the company and **Invoice Type** (Sales or Purchase).
3. Add rows, or import them: party, posting date (the original invoice date), due date, outstanding amount, and the invoice number in remarks.
4. Click **Create Invoices**.

Invoices are created against a temporary opening item with no VAT, because VAT on them was already reported in the old system.

## Validating the migration

- Trial balance on the go-live date equals the old system's closing trial balance.
- Accounts Receivable and Payable ageing match the old ageing, customer by customer.
- Stock Balance matches the stock list; the **Stock and Account Value Comparison** report shows no difference.
- Fixed asset register matches cost and net book value.
- Temporary Opening is zero.

:::tip Migrate in a test copy first
Do a full trial migration on a staging site. Fix the spreadsheets, then repeat on the live site. A rehearsal usually saves days of corrections.
:::

## Related pages

- [Data import](/getting-started/data-import)
- [Stock reconciliation](/stock/stock-reconciliation)
- [Buying and registering assets](/assets/asset-purchase)

@@ common-party-accounting | Customers who are also suppliers
@summary Net off what a party owes you against what you owe them, without moving money twice.

Some businesses both buy from and sell to the same company, for example a distributor that sells you spare parts and buys your finished goods. Rather than paying each other in full, you can settle the difference.

## Setting up

1. Tick **Enable Common Party Accounting** in [accounts settings](/accounting/accounts-settings).
2. Create a **Party Link** between the customer and the supplier records of the same company.

## How it works

When you submit a sales invoice to the customer, DocFlow automatically creates a journal that moves the amount from the customer's receivable to the linked supplier's payable (or the reverse for a purchase invoice). The party's net balance is shown on the supplier side.

## Settling by contra journal

Without the automatic setting, you can settle manually:

| Account | Debit | Credit |
| --- | --- | --- |
| Creditors – Gulf Parts Trading | 15,000 | |
| Debtors – Gulf Parts Trading | | 15,000 |

Link each row to the invoice it settles with **Reference Type** and **Reference Name**, and agree the contra in writing with the other company.

!fig Contra journal settling a customer balance against the same company's supplier balance

:::uae Keep both tax invoices
Netting balances does not change VAT. Both companies still issue full tax invoices for their own supplies, and both report them.
:::

## Related pages

- [Journal entries](/accounting/journal-entry)
- [Payment reconciliation](/accounting/payment-reconciliation)

@@ payment-order | Bulk supplier payments
@summary Pay many suppliers in one batch and upload a single payment file to your bank.

Paying suppliers one transfer at a time in online banking is slow and error-prone. A **Payment Order** collects approved payments into one batch for the bank.

## Steps

1. Approve bills for payment, either by creating **Payment Requests** (Outward) from purchase invoices or by selecting the invoices directly.
2. Go to **Accounting › Payment Order › New**.
3. Choose the **Company Bank Account** that will pay.
4. Click **Get Entries From › Payment Request** (or Payment Entry), and tick the payments to include.
5. Submit. Each supplier's payment entry is created or linked.
6. Download the bank file in your bank's bulk payment format and upload it to online banking.
7. When the bank confirms, the payments are cleared in bank reconciliation.

!fig Payment order grouping supplier payments for one bank upload

## A weekly payment run

| Day | Step |
| --- | --- |
| Monday | Accounts Payable reviewed; bills due this week listed |
| Tuesday | Finance manager approves payment requests |
| Wednesday | Payment order created and file uploaded |
| Thursday | Bank authorises; remittance advices emailed to suppliers |

:::warning Verify bank details
Supplier IBANs come from their bank account records. Any change to supplier bank details should be verified by phone and approved before the next payment run.
:::

## Related pages

- [Payment requests](/accounting/payment-request)
- [Payments and receipts](/accounting/payment-entry)
- [Suppliers](/buying/suppliers)
