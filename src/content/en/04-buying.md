@@ overview | Buying at a glance
@summary The procurement cycle from request to payment, the documents involved, who does what, the controls worth switching on and how to set Buying up.

The Buying module manages purchasing from the moment someone needs something until the supplier is paid. It keeps a complete trail of who asked, who approved, what was ordered, what arrived and what was billed, which supports internal controls, audits and input VAT recovery.

!fig Buying workspace with purchase trend, top suppliers and pending orders

## The procurement cycle

| Step | Document | Records |
| --- | --- | --- |
| 1 | Material Request | An internal need |
| 2 | Request for Quotation | Prices requested from suppliers |
| 3 | Supplier Quotation | Each supplier's offer |
| 4 | Purchase Order | The confirmed order (LPO) |
| 5 | Purchase Receipt | Goods received and inspected |
| 6 | Purchase Entry | The supplier's invoice, with the tax invoice status for input VAT |
| 7 | Payment Entry | The supplier is paid |

Skip steps that do not fit: a utility bill goes straight to a [purchase entry](/buying/purchase-entry), and a repeat order with an agreed price can go straight to a purchase order.

## Who does what

| Role | Typical work |
| --- | --- |
| Any employee | Raises material requests |
| Purchase User | Sends RFQs, prepares purchase orders, follows up suppliers |
| Purchase Manager | Approves orders, manages supplier terms and scorecards |
| Stock User | Receives goods and records rejections |
| Accounts User | Enters supplier invoices as purchase entries and pays them |
| Accounts Manager | Same as Accounts User, plus settings and approvals |

## Controls worth switching on

- Approval [workflow](/administration/workflows) for purchase orders above a limit.
- [Budgets](/accounting/cost-centres-budgets) with warnings on material requests and purchase orders.
- Purchase receipt required before invoice, for a three-way match.
- Duplicate supplier invoice check in [accounts settings](/accounting/accounts-settings).
- Verified bank details for every supplier, with changes approved by finance.

## Setting up Buying

1. Create supplier groups under **Buying** > **Setup** > **Supplier Group** and import [suppliers](/buying/suppliers).
2. Set up [buying price lists](/buying/supplier-price-lists) and payment terms.
3. Review [buying settings](/buying/buying-settings).
4. Set reorder levels on key items.
5. Prepare a purchase order print format with your terms.

See the [procure to pay walkthrough](/guides/procure-to-pay) for one complete example.

@@ suppliers | Suppliers
@summary Set up local and overseas suppliers with TRN, bank details, terms, holds and portal access, and protect yourself from payment fraud.

A **Supplier** record holds everything you need to buy from and pay a vendor: legal details, tax registration, currency, terms, bank account and contacts. Clean supplier records mean faster purchase orders, correct VAT recovery and safe payments.

:::note Before you start
Collect the supplier's trade licence, TRN certificate (for UAE-registered suppliers), and a bank letter on the supplier's letterhead confirming the IBAN. Set up supplier groups (**Buying** > **Setup** > **Supplier Group**) and [payment terms](/accounting/payment-terms).
:::

## Creating a supplier

1. Go to **Buying › Supplier › New**.
2. Enter the **Supplier Name** as on the trade licence or company registration.
3. Choose the **Supplier Group** and **Supplier Type** (Company or Individual).
4. Choose the **Country**.
5. Save, then add the address, contacts and bank account.

## The supplier form

### Details

| Field | What it does |
| --- | --- |
| Supplier Name | Legal name |
| Supplier Group | Local Distributors, Overseas Manufacturers, Freight & Logistics, Services, Utilities |
| Supplier Type | Company or Individual |
| Country | Drives tax treatment and reports |
| Is Transporter | Marks freight and courier companies for delivery notes |
| Is Internal Supplier | Marks an Entity in your group for [inter-company](/accounting/inter-company) transactions |
| Represents Entity | The Entity in your group it represents |

### Tax

| Field | What it does |
| --- | --- |
| Tax ID | The supplier's 15-digit TRN, needed to claim input VAT |
| Tax Category | Lets tax rules choose the template, for example *Overseas* for reverse charge |

:::uae Check the supplier's TRN
Before claiming input VAT, make sure the TRN on the supplier's invoice is valid using the FTA's online TRN check. Record the date you verified it in a custom field.
:::

### Currency, price list and terms

| Field | What it does |
| --- | --- |
| Billing Currency | Currency of their invoices |
| Default Price List | Buying prices for this supplier |
| Default Payment Terms Template | Due dates on purchase orders and invoices |

### Accounting

| Field | What it does |
| --- | --- |
| Default Payable Account (per Entity) | For example *Creditors – USD* for foreign suppliers |
| Default Bank Account | The supplier's bank account record, used in payments and payment orders |

### Holds and restrictions

| Field | What it does |
| --- | --- |
| Hold Type | All, Invoices or Payments |
| Release Date | When the hold ends |
| Prevent RFQs / Prevent POs | Blocks new requests or orders (set by the [scorecard](/buying/supplier-scorecard)) |
| Warn RFQs / Warn POs | Warns instead of blocking |
| Is Frozen / Disabled | Blocks or hides the supplier |

Use a hold when there is a dispute, missing documents or a compliance concern.

!fig Supplier form with group, country, TRN, payment terms and holds

### Supplier items

On each item's **Supplier Items** table, record the supplier's part number. It prints on your purchase orders so the supplier picks the right item.

## Bank accounts

Create a **Bank Account** record for the supplier with bank name, IBAN, SWIFT and account name, and tick it as default. Payments and [payment orders](/accounting/payment-order) use it.

:::warning Bank detail fraud
Fraudsters often email fake requests to change a supplier's bank account. Never change an IBAN based on an email alone. Call the supplier on a number you already have, get the change approved by finance, and attach the confirmation to the bank account record.
:::

## Supplier portal

Invite the supplier's contact as a [portal user](/administration/portal) so they can respond to RFQs online, see purchase orders and check their invoices and payments.

## The supplier dashboard

The supplier record shows purchases this year, the amount you owe, and links to every RFQ, quotation, order, receipt, invoice and payment.

## Common problems

:::details Input VAT is not calculated on the supplier's invoices
The supplier has a tax category that maps to no VAT, or the purchase template is empty. Check the supplier's **Tax Category** and your tax rules.
:::

:::details The supplier does not appear in purchase orders
They are disabled, frozen, on hold, or blocked by the scorecard.
:::

## Related pages

- [Supplier scorecards](/buying/supplier-scorecard)
- [Supplier price lists](/buying/supplier-price-lists)
- [Reverse charge](/vat-compliance/reverse-charge)

@@ material-request | Material requests
@summary Let teams request what they need, raise requests automatically from reorder levels and production plans, and turn them into purchases or transfers.

A **Material Request** is an internal request for goods. Anyone authorised can raise one, and it becomes a purchase, a transfer between warehouses, an issue of stock, or a work order.

## Purposes

| Purpose | Becomes | Example |
| --- | --- | --- |
| Purchase | Request for Quotation, Supplier Quotation or Purchase Order | Steel sheets for production |
| Material Transfer | Stock Entry (transfer) | Spare parts from Jebel Ali to the Mussafah site |
| Material Issue | Stock Entry (issue) | Consumables for the workshop |
| Manufacture | Work Order | Sub-assemblies for a customer order |
| Customer Provided | Stock Entry (receipt at zero value) | Customer's own materials |

## Creating a material request

1. Go to **Buying › Material Request › New**.
2. Choose the **Purpose**.
3. Set the **Required By** date.
4. Choose the **Set Target Warehouse** (where the goods are needed) and, for transfers, the source warehouse.
5. Add items and quantities. Each line can have its own required-by date, cost centre and project.
6. Save and submit, or send it for approval if a [workflow](/administration/workflows) applies.

!fig Material request for purchase with items and required-by dates

## Automatic material requests

### From reorder levels

1. On each item, under **Auto Re-order**, add the warehouse, **Re-order Level**, **Re-order Qty** and request type.
2. Tick **Raise Material Request When Stock Reaches Re-order Level** in [stock settings](/stock/stock-settings).
3. Every night, DocFlow checks projected quantities and creates requests for items below their level.

### From planning

- [Production plans](/manufacturing/production-plan) create requests for raw materials that are short.
- Sales orders can create requests for items to buy (**Create › Material Request**).

## Following up

| Report | Shows |
| --- | --- |
| Material Requests to be Ordered | Requests not yet converted |
| Requested Items to Order and Receive | Progress from request to receipt |
| Procurement Tracker | Full trail from request to payment |

Statuses: Draft, Pending, Partially Ordered, Ordered, Transferred, Issued, Received, Stopped, Cancelled.

## Common problems

:::details No automatic requests were created
Check that reorder levels exist for the item and warehouse, that the setting is on, and that projected quantity is actually below the level (open orders count).
:::

:::details The request cannot be converted to a purchase order
The purpose is not Purchase. Create a new request with the right purpose.
:::

## Related pages

- [Items and reorder levels](/stock/items)
- [Production planning](/manufacturing/production-plan)

@@ rfq-supplier-quotation | Requests for quotation and supplier quotations
@summary Invite prices from several suppliers, collect their offers online or by email, compare them fairly and choose the best value.

## Sending a request for quotation (RFQ)

1. From a material request, click **Create › Request for Quotation**, or go to **Buying › Request for Quotation › New**.
2. Add the **Suppliers** to invite, with each supplier's contact email.
3. Add or check the items, quantities and required-by dates.
4. Write a **Message for Supplier**, including delivery terms, Incoterms, payment terms you expect and the response deadline.
5. Submit, then click **Send Emails to Suppliers**.

Each supplier gets an email with a link to the [supplier portal](/administration/portal), where they enter prices, lead times and notes. They can also reply by email and you enter the quote.

!fig Request for quotation sent to three suppliers

## Recording supplier quotations

Each response becomes a **Supplier Quotation** with:

| Field | What it does |
| --- | --- |
| Supplier | Who quoted |
| Valid Till | How long the offer stands |
| Items, rates, lead time | The offer per item |
| Taxes | VAT or reverse charge |
| Terms | Payment, delivery and warranty |
| Attachments | The supplier's own quotation PDF |

## Comparing offers

Run the **Supplier Quotation Comparison** report for the RFQ or items. It shows each supplier's rate, lead time, valid till and total side by side, and highlights the lowest price.

!fig Supplier quotation comparison for steel sheets from three suppliers

Compare total landed cost, not just price:

| Factor | Consider |
| --- | --- |
| Price | Unit rate in AED after conversion |
| Freight and duty | Imports add freight, insurance, customs duty and clearing |
| Lead time | Delays can stop production |
| Payment terms | Advance versus 60 days' credit |
| Quality history | Rejection rates from [inspections](/quality/inspection) |
| Scorecard | Overall supplier rating |

:::example Example: sourcing steel sheets
Saqr Steel needs 40 tonnes of galvanised sheet. It invites a supplier in Sharjah, one in Jebel Ali and one in Turkey. The Turkish price is 6% lower, but with 21 days' lead time, freight and 5% customs duty, the Sharjah supplier wins on total cost and delivery.
:::

## Turning a quotation into an order

Open the winning supplier quotation and click **Create › Purchase Order**. Prices, terms and items carry over.

## Related pages

- [Supplier scorecards](/buying/supplier-scorecard)
- [Importing goods](/buying/import-purchases)

@@ purchase-order | Purchase orders
@summary Issue purchase orders (LPOs), approve them, track deliveries and billing, change them safely and close them.

A **Purchase Order** is your formal commitment to buy, often called an LPO (Local Purchase Order) in the UAE. It sets out what you are buying, at what price, when and on what terms. Receipts and invoices are checked against it.

:::note Before you start
Check the budget, the supplier's latest price and lead time, the delivery address and whether an approval is needed.
:::

## Creating a purchase order

1. Create it from a supplier quotation, material request or sales order, or go to **Buying › Purchase Order › New**.
2. Choose the supplier.
3. Set **Required By**, and **Set Target Warehouse** for where goods will be received.
4. Check items, quantities, rates and the UOM the supplier sells in.
5. Add the tax template: *UAE VAT 5% Input* for local suppliers, reverse charge for overseas suppliers.
6. Add delivery terms, Incoterm and named place for imports.
7. Choose the payment terms template.
8. Save, get approval, and submit.
9. Click **Email** to send the PO.

!fig Purchase order with supplier, items, delivery dates and Incoterms

## The form in detail

| Section | Key fields |
| --- | --- |
| Header | Supplier, Date, Required By, Order Confirmation No. and date, Entity |
| Currency and price list | Currency, exchange rate, price list |
| Items | Item, supplier part number, quantity, UOM, rate, required by, warehouse, cost centre, project, against blanket order |
| Subcontracting | Is Subcontracted, supplied items |
| Taxes and totals | Template, shipping rule, discounts |
| Payment terms | Schedule, advance paid |
| Terms | Delivery, warranty, penalties |
| Address | Supplier address, your shipping and billing address |
| More info | Incoterm, named place, drop ship customer, project |

## Approval

Add a [workflow](/administration/workflows) for orders above a limit, for example AED 25,000 needs the purchase manager and AED 250,000 the managing director. Budgets with a *Warn* or *Stop* action add another check.

## Advances

For suppliers who need payment upfront, create a **Payment Request** or **Payment Entry** from the order. The advance is shown on the order and applied to the invoice.

## Tracking the order

The order shows **% Received** and **% Billed**. The **Purchase Order Analysis** report lists open orders with pending quantities and overdue dates, so buyers know whom to chase.

Record the supplier's **Order Confirmation No.** and promised dates when they acknowledge the order.

## Changing a submitted order

| Change | How |
| --- | --- |
| Quantity, rate or date on lines not yet received | **Update Items** |
| Add a line | **Update Items** |
| Supplier or currency | Cancel and amend (only if nothing is received or billed) |

Send the revised PO to the supplier.

## Holding and closing

| Action | Effect |
| --- | --- |
| **Hold** | Blocks receipts and invoices while on hold |
| **Close** | Releases the pending quantity when the supplier cannot deliver the rest |
| **Re-open** | Reverses a close |

## Statuses

| Status | Meaning |
| --- | --- |
| Draft | Not submitted |
| To Receive and Bill | Nothing received or billed |
| To Bill | Received, not invoiced |
| To Receive | Invoiced (for example advance), not received |
| Completed | Received and billed |
| On Hold / Closed | Paused or closed |
| Delivered | Drop-shipped and delivered by supplier |
| Cancelled | Cancelled |

## Common problems

:::details "Budget exceeded" when submitting
The order takes a cost centre over its budget. Ask the budget owner to approve or revise the budget.
:::

:::details Rate on the order differs from the supplier quotation
The order was not created from the quotation, or the price list overrode it. Recreate it from the quotation.
:::

## Related pages

- [Approval workflows](/administration/workflows)
- [Importing goods](/buying/import-purchases)
- [Procure to pay walkthrough](/guides/procure-to-pay)

@@ purchase-receipt | Purchase receipts
@summary Receive goods into the warehouse, record accepted and rejected quantities, batches and serials, inspect quality and value stock correctly.

A **Purchase Receipt** records goods arriving from a supplier. It increases stock, values it at the purchase rate, records batches and serial numbers, and is the second leg of the three-way match between order, receipt and invoice.

:::note Before you start
Have the supplier's delivery note in hand. Count the goods and check their condition before entering quantities.
:::

## Receiving goods

1. From the purchase order, click **Create › Purchase Receipt**.
2. For each line, enter the **Received Qty**, **Accepted Qty** and **Rejected Qty**.
3. Choose the **Accepted Warehouse** and **Rejected Warehouse**.
4. Enter batches with manufacturing and expiry dates, or serial numbers, for tracked items.
5. Record the supplier's delivery note number and the vehicle details.
6. Complete any required [quality inspection](/quality/inspection).
7. Submit.

!fig Purchase receipt with accepted and rejected quantities

## The form in detail

| Section | Key fields |
| --- | --- |
| Header | Supplier, Posting Date and Time, Supplier Delivery Note, Is Return |
| Items | Item, received, accepted, rejected, UOM, rate, warehouses, batch, serial numbers, quality inspection |
| Taxes and charges | Charges added to valuation, such as freight on the same document |
| Transporter | Transporter, vehicle number, LR number |
| More info | Bill of Entry number (custom field for imports), project |

## Putaway

Tick **Apply Putaway Rule** to split received quantities across warehouses or bins by capacity. See [Putaway rules](/stock/putaway-rules).

## Partial receipts

Receive what arrived; the purchase order keeps the remaining quantity open. Each receipt can be billed separately or together.

## Over-receipt

DocFlow blocks receiving more than ordered unless **Over Delivery/Receipt Allowance** in [stock settings](/stock/stock-settings) allows it.

## Behind the scenes

Receiving goods worth AED 10,000:

| Account | Debit | Credit |
| --- | --- | --- |
| Stock in Hand – Jebel Ali | 10,000 | |
| Stock Received But Not Billed | | 10,000 |

The supplier invoice later clears *Stock Received But Not Billed*. Rejected quantities do not increase stock in the main warehouse.

## Adding freight and duty

For costs billed separately, such as freight, customs duty and clearing, create a [landed cost voucher](/stock/landed-cost) against the receipt.

:::uae Imports: customs documents
For imported goods, record the **Bill of Entry** number and customs declaration date, and attach the documents. They support the import VAT on your return.
:::

## Statuses

| Status | Meaning |
| --- | --- |
| Draft | Not submitted |
| To Bill | Received, not invoiced |
| Completed | Invoiced |
| Return Issued | Partly returned |
| Closed / Cancelled | Closed or cancelled |

## Common problems

:::details "Quality Inspection required for item"
Create and submit the inspection, then submit the receipt.
:::

:::details "Accepted + Rejected Qty must be equal to Received Qty"
Check the three quantities on each line.
:::

:::details Valuation rate is zero
The order had no rate, or the item is a free sample. Set the rate, or tick **Allow Zero Valuation Rate** for genuine free items.
:::

## Related pages

- [Putaway rules](/stock/putaway-rules)
- [Landed costs](/stock/landed-cost)
- [Purchase Entry](/buying/purchase-entry)

@@ purchase-entry | Purchase Entry
@summary Record a supplier's invoice on one simple screen and claim input VAT only once you hold the supplier's tax invoice.

**Purchase Entry** is the screen for supplier invoices. The fields you need for every bill are on the first tab, and the rest is grouped behind other tabs. It handles UAE input VAT in two steps, so you claim VAT only once you hold the supplier's tax invoice.

**Where to find it:** **Buying** > **Purchase Entry**. It sits just above **Purchase Invoice** in the Buying sidebar and on the workspace. A new purchase invoice opened from anywhere also opens this screen.

## Before you start

- You need the **Accounts User** or **Accounts Manager** role. A **Purchase User** can only read purchase entries.
- The supplier, the items and the Entity's VAT Settings exist. The input VAT accounts, including **Input VAT Awaiting Tax Invoice**, are set in VAT Settings. See [Setting up VAT](/vat-compliance/vat-setup).

## The tabs

| Tab | What is on it |
| --- | --- |
| **Main** | The invoice header, the lines, the tax invoice block and the totals |
| **Taxes & VAT** | Taxes, discount, recoverable VAT fields, and **Imports, zones and schemes** |
| **Payment Terms** | Due dates, and **Paid at once** for a bill paid on the spot |
| **Additional Information** | Responsible employee, Insight and other details |
| **More** | Everything else |

The **Main** tab has, from top to bottom:

- Supplier and TRN, contract, **Supplier Invoice No** and **Supplier Invoice Date**.
- Posting and due dates, Entity, currency, taxes template, reverse charge and return.
- **Lines**: warehouse, barcode and items.
- The tax invoice block: **Tax Invoice Received with This Invoice**, date of supply, **Tax Invoice Status**, tax invoice number and date.
- The totals.

## Steps

1. Open **Buying** > **Purchase Entry** and click **Add Purchase Entry**.
2. Choose the **Supplier**. Enter **Supplier Invoice No** and **Supplier Invoice Date** from the supplier's invoice.
3. Add the items under **Lines**, with quantity and rate. You can also use **Get Items From** > **Purchase Order** or **Purchase Receipt**.
4. Check the taxes and totals.
5. If the supplier's tax invoice came with this bill, tick **Tax Invoice Received with This Invoice**.
6. Click **Save**, then **Submit**.

!fig The Main tab of a Purchase Entry showing the supplier invoice date, posting and due dates, the Lines table with VAT per line, the Tax Invoice Received with This Invoice tick box, Tax Invoice Status Awaiting and the totals @shot 03-finance/05-purchase-entry-main.png

## Record the tax invoice later

If you did not tick **Tax Invoice Received with This Invoice**, the **Tax Invoice Status** is **Awaiting**. When the tax invoice arrives:

1. Open the submitted Purchase Entry.
2. Click **Create** > **Tax Invoice Received**.
3. Fill **Supplier's tax invoice no** and **Tax invoice date**. They are saved on the invoice as **Tax Invoice No** and **Tax Invoice Date**. The input VAT is claimed in the VAT return of this date.
4. Click **Record**.

!fig The Tax Invoice Received dialog with the Supplier's tax invoice no and Tax invoice date fields and the Record button @shot 03-finance/05-tax-invoice-received.png

## What happens next

- While the status is **Awaiting**, the input VAT sits on the **Input VAT Awaiting Tax Invoice** account. It is not claimed.
- **Tax Invoice Received** posts a journal that moves the VAT to the recoverable input VAT account. The status becomes **Received**.
- With **Tax Invoice Received with This Invoice** ticked, or when there is no VAT to hold back, the status is **Received** at once.
- If the invoice has stock items and is not made from a Purchase Receipt, it updates stock itself. You do not tick Update Stock.
- From the submitted entry you can also use **Create** > **Payment**, **Create** > **Return / Debit Note** (see [Purchase Returns](/buying/purchase-returns)) and **Block Invoice**.

## Common problems

| Message | What to do |
| --- | --- |
| Enter the supplier's invoice number: this document is recorded as the supplier's tax invoice. | You ticked **Tax Invoice Received with This Invoice**. Fill **Supplier Invoice No**. |
| Set the Input VAT Awaiting Tax Invoice Account in the VAT Settings of … | Ask your VAT administrator to set the account in VAT Settings. |
| Cancel the Tax Invoice Received entry … first | To cancel the invoice, first cancel the journal made by Tax Invoice Received. |
| Row #…: … is a fixed asset item and cannot be bought. Buy the goods as stock items and make the asset with a Fixed Asset Entry. | Buy stock items instead, then make the asset with a Fixed Asset Entry in [Assets](/assets/overview). |
| Row #… is not from a … while other rows are. Make the invoice from the … for the whole delivery, and enter other goods on their own invoice. | Do not mix rows from a Purchase Receipt with free rows. Make two invoices. |

## Related pages

- [Purchase invoices](/accounting/purchase-invoice)
- [Purchase Returns](/buying/purchase-returns)
- [Reverse charge](/vat-compliance/reverse-charge)
- [Purchase receipts](/buying/purchase-receipt)

@@ buying-reports | Buying reports
@summary Monitor spend, supplier performance, open orders and price trends.

| Report | Shows | Use it to |
| --- | --- | --- |
| Purchase Analytics | Spend by supplier, item or group, by period | See where money goes |
| Purchase Order Analysis | Ordered, received, billed, pending and delays | Chase late deliveries |
| Items To Be Received | Open quantities from orders | Plan the warehouse |
| Requested Items to Order and Receive | Progress from request to receipt | Follow up requests |
| Procurement Tracker | Request, RFQ, order, receipt, invoice and payment in one line | Audit the full trail |
| Item-wise Purchase History | Rates paid over time and by supplier | Spot price increases |
| Purchase Order Trends / Purchase Receipt Trends | Period-on-period movement | Track spending patterns |
| Supplier-Wise Sales Analytics | How your purchases from each supplier sell | Decide which suppliers to grow |
| Subcontracted Item To Be Received | Open subcontracting | Chase subcontractors |

!fig Purchase analytics by supplier group for the last 12 months

## A monthly procurement review

1. Purchase Analytics by supplier group for the month.
2. Purchase Order Analysis for late deliveries.
3. Supplier scorecard results.
4. Item-wise Purchase History for your top 20 items to spot price increases.

:::tip Spend by country of origin
Add a custom field for **Country of Origin** on items and group Purchase Analytics by it. It helps plan around customs duty and supply chain risk.
:::

@@ buying-settings | Buying settings
@summary Every option that controls supplier naming, required documents, rate behaviour and subcontracting in purchasing.

Open **Buying › Buying Settings**.

| Setting | What it does | Suggested |
| --- | --- | --- |
| Supplier Naming By | Supplier name, naming series or auto | Supplier name |
| Default Supplier Group | Group for new suppliers | Local Distributors |
| Default Buying Price List | Rates on new documents | Standard Buying AED |
| Purchase Order Required for Purchase Invoice and Receipt | Blocks documents without an order | Yes |
| Purchase Receipt Required for Purchase Invoice | Enforces the three-way match | Yes for stock items |
| Maintain Same Rate Throughout Purchase Cycle | Receipt and invoice rates must match the order | On |
| Action if Same Rate is Not Maintained | Stop or Warn | Warn |
| Allow Item to be Added Multiple Times | Same item on several lines | On |
| Allow Multiple Material Consumption | For subcontracting | As needed |
| Backflush Raw Materials of Subcontract Based On | BOM or transferred materials | BOM |
| Bill for Rejected Quantity in Purchase Invoice | Lets you bill rejected items | Off |
| Disable Last Purchase Rate | Stops using the last rate as default | Off |
| Show Pay Button in Purchase Order Portal | Lets suppliers see payment status | Optional |

!fig Buying settings with required documents and default price list

Individual suppliers can be exempted from the required-document rules on the supplier record.

:::tip Three-way match
Requiring both a purchase order and a purchase receipt before an invoice gives you a three-way match: what was ordered, what arrived and what was billed. Auditors expect it.
:::

## Related pages

- [Stock settings](/stock/stock-settings)
- [Accounts settings](/accounting/accounts-settings)

@@ supplier-scorecard | Supplier scorecards
@summary Rate suppliers on delivery, quality and price, and act automatically on poor performance.

A **Supplier Scorecard** gives each supplier a score every period, based on criteria you define, and can warn or block buyers when performance drops.

## Setting up a scorecard

1. Go to **Buying › Supplier Scorecard › New** and choose the supplier.
2. Choose the **Evaluation Period**: per week, month or year.
3. Add **criteria** with weights. Each criterion has a formula built from **variables**, which DocFlow calculates from your transactions.

| Criterion | Weight | Example formula |
| --- | --- | --- |
| On-time delivery | 40% | On-time receipts ÷ total receipts × 100 |
| Quality acceptance | 40% | Accepted quantity ÷ received quantity × 100 |
| Price competitiveness | 20% | Based on rate against last purchase rate |

4. Set the **standings**, for example: above 80 Excellent, 60–80 Good, 40–60 Warn, below 40 Block.
5. For each standing, choose actions: warn or prevent RFQs, warn or prevent purchase orders, notify the supplier or employee.
6. Save.

!fig Supplier scorecard with criteria, weights and current score

## Variables available

| Variable | Measures |
| --- | --- |
| Total accepted / rejected / received quantity | Quality |
| On-time shipments / late shipments | Delivery |
| Total ordered / received items | Fulfilment |
| Cost of delayed shipments | Impact of delays |
| RFQ responses | Responsiveness |

## Using the results

DocFlow recalculates scores each period and keeps the history. Review scores with suppliers in quarterly meetings, and combine them with [quality feedback](/quality/quality-feedback).

## Related pages

- [Suppliers](/buying/suppliers)
- [Quality inspections](/quality/inspection)

@@ supplier-price-lists | Supplier prices and item suppliers
@summary Keep buying rates per supplier, track supplier part numbers, and see how purchase prices move.

## Buying price lists

Create buying price lists per supplier or per currency, such as *Gulf Steel – Buying AED* or *Import USD*. Tick **Buying** on the list.

Each **Item Price** row holds:

| Field | Use |
| --- | --- |
| Rate | The agreed price |
| UOM and packing unit | The unit the supplier sells in |
| Supplier | Makes the price specific to one supplier |
| Valid From / Valid Upto | Contract period |
| Lead Time in Days | Expected delivery time |

!fig Item prices from a supplier's buying price list with validity dates

## Item suppliers and part numbers

On each item, list suppliers in **Supplier Items** with the supplier's own part number. It prints on purchase orders. Set a **Default Supplier** per Entity so material requests suggest the right supplier.

## Last purchase rate

Each item shows its **Last Purchase Rate**, used as the default when no price list rate exists. **Item-wise Purchase History** shows rates over time.

## Keeping prices current

- Tick **Auto insert Price List rate if missing** in [stock settings](/stock/stock-settings) so new rates are saved automatically.
- Use **Update Existing Price List Rate** to overwrite rates when the supplier changes them.
- For contracted rates, use [blanket orders](/selling/blanket-orders) with order type Purchasing.

## Purchasing in a different unit

If you buy by the carton but stock by the piece, set the item's **Default Purchase Unit of Measure** to Carton with its conversion factor. Prices, orders and receipts use cartons; stock is converted to pieces.

## Related pages

- [Price lists](/selling/price-lists)
- [Units of measure](/stock/units-of-measure)

@@ purchase-returns | Purchase Returns
@summary Send rejected, damaged or excess goods back to suppliers, or correct a supplier invoice, with a Purchase Return.

A **Purchase Return** corrects a purchase you already recorded. Returns made from a Purchase Entry are listed under **Purchase Return**. Every return has a **Return Type**, so DocFlow knows whether goods went back:

- **Goods Return**: the goods leave your stock and go back to the supplier.
- **Invoice Correction**: value and VAT only, no stock moves. Use it for a price correction or a discount after the purchase.

## Before you start

- You need the **Accounts User** role to make a return from a Purchase Entry.
- The original Purchase Entry or Purchase Receipt is submitted.

## Choosing the right route

| Situation | Create |
| --- | --- |
| Goods received with a purchase receipt, not yet invoiced | **Purchase Return** from the receipt |
| Goods received and invoiced | Purchase Return from the receipt, then **Return / Debit Note** from the Purchase Entry |
| The Purchase Entry updated stock itself | **Return / Debit Note** from the Purchase Entry, Return Type **Goods Return** |
| Price reduction only | **Return / Debit Note** from the Purchase Entry, Return Type **Invoice Correction** |

## Returning goods from a receipt

1. Open the **Purchase Receipt** and click **Create › Purchase Return**.
2. Enter the quantities returned (negative).
3. Choose the warehouse the goods leave from, usually the rejected warehouse.
4. Enter batches or serial numbers of the returned units.
5. Submit. Stock reduces at the original cost.

!fig Purchase return created from a receipt with rejected quantities

## Making a return from a Purchase Entry

1. Open the submitted Purchase Entry.
2. Click **Create** > **Return / Debit Note**.
3. Choose the **Return Type**: **Goods Return** or **Invoice Correction**.
4. For a Goods Return, check that each stock line has a **Warehouse**.
5. Change the quantities or rates to the part you return or correct, and enter the supplier's credit note number.
6. Click **Save**, then **Submit**.

## What happens next

- The return gets a number from the RET series.
- By default the return reduces the outstanding amount of the original Purchase Entry.
- A Goods Return moves the goods out of the warehouse. An Invoice Correction posts value and VAT only.
- For bad debt relief notified by a supplier, use **Create** > **Supplier Bad Debt Relief Notice** on the Purchase Entry. See [Bad debt relief](/vat-compliance/bad-debt-relief).

## Behind the scenes

The return reverses the receipt: *Stock Received But Not Billed* (or the payable, if invoiced) is debited and stock is credited at the original rate. The Purchase Return reduces the payable and input VAT.

:::uae Supplier credit notes
For VAT, the supplier issues the tax credit note. Record their credit note number on your Purchase Return, so your input VAT is reduced in the same period the supplier reduces their output VAT.
:::

## Common problems

| Message | What to do |
| --- | --- |
| Return Type is mandatory for a return: choose Goods Return or Invoice Correction. | Choose the **Return Type**. |
| A return needs its original invoice: fill Return Against. | Make the return from the original Purchase Entry, or fill **Return Against**. |
| Row …: a Warehouse is mandatory for the stock item … of a Goods Return. | Enter the **Warehouse** on that line, or use Invoice Correction if no goods went back. |

## Replacement goods

If the supplier sends replacements instead of a credit, receive them on a new purchase receipt against the original purchase order line, which reopens after the return.

## Related pages

- [Purchase Entry](/buying/purchase-entry)
- [Quality inspections](/quality/inspection)
- [Sales Returns and Purchase Returns in Accounting](/accounting/credit-debit-notes)

@@ import-purchases | Importing goods end to end
@summary The full flow for buying from overseas: order, payment, shipment, customs, receipt, landed cost, VAT and supplier payment.

## The flow

| Step | Document | Notes |
| --- | --- | --- |
| 1 | Purchase order in the supplier's currency | Incoterms such as FOB Shanghai or CIF Jebel Ali |
| 2 | Advance payment or letter of credit | Payment entry or LC record |
| 3 | Shipment tracking | Vessel, bill of lading, ETA on the order or a container record |
| 4 | Goods in transit (optional) | Receive when you take ownership |
| 5 | Customs clearance | Bill of entry, duty payment |
| 6 | Purchase receipt | Goods into the warehouse, with batches and inspection |
| 7 | Landed cost voucher | Freight, insurance, duty, clearing, transport |
| 8 | Purchase Entry | Supplier's invoice with advance applied |
| 9 | Payment | Balance paid; exchange difference posted |

!fig Purchase order for an import with USD currency and CIF Incoterms

## Incoterms and who pays what

| Incoterm | You pay |
| --- | --- |
| EXW (Ex Works) | All transport, export and import costs |
| FOB (Free on Board) | Sea freight, insurance and import costs |
| CFR / CIF | Import costs (CIF includes insurance paid by the seller) |
| DAP | Import duty and clearance |
| DDP | Nothing beyond the price |

Record the Incoterm and named place on the purchase order. It tells you which costs to expect on the landed cost voucher.

## Customs and VAT

:::uae Import duty and VAT
Most goods entering the UAE carry 5% customs duty on the CIF value. Import VAT at 5% is calculated on the CIF value plus duty. VAT-registered importers usually account for import VAT through their VAT return (Box 6 and Box 10) rather than paying it at the border. Customs duty is a cost of stock; import VAT is not, if you can recover it. See [Customs](/buying/customs).
:::

## Example

:::example Example: a container of pistachios from Turkey
Lulu Pearl Foods orders 18 tonnes of pistachios at USD 41,400 CIF Jebel Ali (AED 152,042 at 3.6725). Duty at 5% is AED 7,602. Clearing costs AED 1,850 and transport AED 900. The landed cost voucher adds AED 10,352 to stock, making the landed cost AED 162,394. Import VAT of AED 7,982 goes on the VAT return, not into stock.
:::

## Common problems

:::details Stock value looks too low after an import
The landed cost voucher was not submitted. Submit it against the receipt.
:::

:::details Import VAT appears in stock cost
It was added to the landed cost voucher. Remove it and account for it on the VAT return.
:::

:::details Exchange difference on the supplier payment
The payment rate differed from the invoice rate. Post it with **Set Exchange Gain / Loss** on the payment.
:::

## Related pages

- [Goods in transit](/stock/goods-in-transit)
- [Landed costs](/stock/landed-cost)
- [Foreign currency transactions](/accounting/multi-currency)
- [Customs, HS codes and duty](/buying/customs)
- [Procure to pay walkthrough](/guides/procure-to-pay)

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

Import VAT is 5% on the CIF value plus duty. VAT-registered importers usually account for it through the VAT return (Box 6 and Box 10) instead of paying at the border. See [Reverse charge](/vat-compliance/reverse-charge).

## Related pages

- [Importing goods](/buying/import-purchases)
- [Landed costs](/stock/landed-cost)
- [Designated Zones](/vat-compliance/designated-zones)
- [Excise tax](/buying/excise-tax)

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

1. Mark affected items as excise goods (add an **Is Excise Good** field with [custom fields](/administration/custom-fields) if needed) and record the excise category and the retail sale price used for the excise value.
2. Create accounts for **Excise Tax Payable** and, for recoverable amounts, **Excise Tax Recoverable**.
3. Create an **Excise Tax** template for purchases (imports) and production.
4. Track stock of excise goods in separate warehouses if you hold them in a designated zone.
5. Use the **Excise Tax Return** report to prepare the monthly return. {planned}

!fig Item with excise category and excise tax template

## VAT and excise together

VAT is charged on the selling price including excise tax. On a sales invoice for excise goods, the excise is part of the price and VAT 5% applies to the total.

:::warning Rates and rules change
The method for sweetened drinks moved to a sugar-content based model. Always check the FTA's current rules and the published price lists for excise goods.
:::

## Related pages

- [Customs, HS codes and duty](/buying/customs)
- [Importing goods](/buying/import-purchases)
- [Items](/stock/items)
