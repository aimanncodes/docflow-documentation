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
| 6 | Purchase Invoice | The supplier's tax invoice |
| 7 | Payment Entry | The supplier is paid |

Skip steps that do not fit: a utility bill goes straight to a purchase invoice, and a repeat order with an agreed price can go straight to a purchase order.

## Who does what

| Role | Typical work |
| --- | --- |
| Any employee | Raises material requests |
| Purchase User | Sends RFQs, prepares purchase orders, follows up suppliers |
| Purchase Manager | Approves orders, manages supplier terms and scorecards |
| Stock User | Receives goods and records rejections |
| Accounts User | Enters supplier invoices and pays them |

## Controls worth switching on

- Approval [workflow](/framework/workflows) for purchase orders above a limit.
- [Budgets](/accounting/cost-centres-budgets) with warnings on material requests and purchase orders.
- Purchase receipt required before invoice, for a three-way match.
- Duplicate supplier invoice check in [accounts settings](/accounting/accounts-settings).
- Verified bank details for every supplier, with changes approved by finance.

## Setting up Buying

1. Create [supplier groups](/organization/territories-groups) and import [suppliers](/buying/suppliers).
2. Set up [buying price lists](/buying/supplier-price-lists) and payment terms.
3. Review [buying settings](/buying/buying-settings).
4. Set reorder levels on key items.
5. Prepare a purchase order print format with your terms.

See the [procure to pay walkthrough](/guides/procure-to-pay) for one complete example.

@@ suppliers | Suppliers
@summary Set up local and overseas suppliers with TRN, bank details, terms, holds and portal access, and protect yourself from payment fraud.

A **Supplier** record holds everything you need to buy from and pay a vendor: legal details, tax registration, currency, terms, bank account and contacts. Clean supplier records mean faster purchase orders, correct VAT recovery and safe payments.

:::note Before you start
Collect the supplier's trade licence, TRN certificate (for UAE-registered suppliers), and a bank letter on the supplier's letterhead confirming the IBAN. Set up [supplier groups](/organization/territories-groups) and [payment terms](/accounting/payment-terms).
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
| Is Internal Supplier | Marks a group company for [inter-company](/accounting/inter-company) transactions |
| Represents Company | The group company it represents |

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
| Default Payable Account (per company) | For example *Creditors – USD* for foreign suppliers |
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

Invite the supplier's contact as a [portal user](/website/portal) so they can respond to RFQs online, see purchase orders and check their invoices and payments.

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
- [Reverse charge](/uae-compliance/reverse-charge)

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
6. Save and submit, or send it for approval if a [workflow](/framework/workflows) applies.

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

Each supplier gets an email with a link to the [supplier portal](/website/portal), where they enter prices, lead times and notes. They can also reply by email and you enter the quote.

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
| Header | Supplier, Date, Required By, Order Confirmation No. and date, Company |
| Currency and price list | Currency, exchange rate, price list |
| Items | Item, supplier part number, quantity, UOM, rate, required by, warehouse, cost centre, project, against blanket order |
| Subcontracting | Is Subcontracted, supplied items |
| Taxes and totals | Template, shipping rule, discounts |
| Payment terms | Schedule, advance paid |
| Terms | Delivery, warranty, penalties |
| Address | Supplier address, your shipping and billing address |
| More info | Incoterm, named place, drop ship customer, project |

## Approval

Add a [workflow](/framework/workflows) for orders above a limit, for example AED 25,000 needs the purchase manager and AED 250,000 the managing director. Budgets with a *Warn* or *Stop* action add another check.

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

- [Approval workflows](/framework/workflows)
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
- [Purchase invoices](/accounting/purchase-invoice)

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

On each item, list suppliers in **Supplier Items** with the supplier's own part number. It prints on purchase orders. Set a **Default Supplier** per company so material requests suggest the right supplier.

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

@@ purchase-returns | Purchase returns
@summary Send rejected, damaged or excess goods back to suppliers and get the right credit.

## Choosing the right route

| Situation | Create |
| --- | --- |
| Goods received with a purchase receipt, not yet invoiced | **Purchase Return** from the receipt |
| Goods received and invoiced | Purchase Return from the receipt, then **Debit Note** from the invoice |
| Invoice updated stock directly | **Return / Debit Note** from the invoice with Update Stock |
| Price reduction only | Debit note without stock |

## Returning goods

1. Open the **Purchase Receipt** and click **Create › Purchase Return**.
2. Enter the quantities returned (negative).
3. Choose the warehouse the goods leave from, usually the rejected warehouse.
4. Enter batches or serial numbers of the returned units.
5. Submit. Stock reduces at the original cost.
6. If already invoiced, open the purchase invoice and click **Create › Return / Debit Note**, entering the supplier's credit note number.

!fig Purchase return created from a receipt with rejected quantities

## Behind the scenes

The return reverses the receipt: *Stock Received But Not Billed* (or the payable, if invoiced) is debited and stock is credited at the original rate. The debit note reduces the payable and input VAT.

:::uae Supplier credit notes
For VAT, the supplier issues the tax credit note. Record their credit note number on your debit note, so your input VAT is reduced in the same period the supplier reduces their output VAT.
:::

## Replacement goods

If the supplier sends replacements instead of a credit, receive them on a new purchase receipt against the original purchase order line, which reopens after the return.

## Related pages

- [Quality inspections](/quality/inspection)
- [Credit and debit notes](/accounting/credit-debit-notes)

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
| 8 | Purchase invoice | Supplier's invoice with advance applied |
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
Most goods entering the UAE carry 5% customs duty on the CIF value. Import VAT at 5% is calculated on the CIF value plus duty. VAT-registered importers usually account for import VAT through their VAT return (Box 6 and Box 10) rather than paying it at the border. Customs duty is a cost of stock; import VAT is not, if you can recover it. See [Customs](/uae-compliance/customs).
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
- [Procure to pay walkthrough](/guides/procure-to-pay)
