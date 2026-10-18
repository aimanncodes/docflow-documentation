@@ overview | Selling at a glance
@summary The selling process from enquiry to cash, the documents involved, who does what, and how to set Selling up.

The Selling module covers everything between a customer's request and the invoice: customers, price lists, quotations, sales orders and deliveries. It hands over to Stock for picking and dispatch and to Accounting for invoicing and collection.

!fig Selling workspace with sales trend, top customers and pending orders

## The selling cycle

| Step | Document | What it records |
| --- | --- | --- |
| 1 | Lead / Opportunity | An enquiry and its potential value ([CRM](/crm/overview)) |
| 2 | Quotation | Your offer |
| 3 | Sales Order | The customer's confirmed order |
| 4 | Pick List | What to pick from where |
| 5 | Delivery Note | Goods leaving the warehouse |
| 6 | Sales Invoice | The tax invoice |
| 7 | Payment Entry | Money received |

Every step is created from the previous one with **Create**, so data is entered once. You can skip steps that do not fit your business: a service company may go straight from quotation to invoice, and a shop may use only [point of sale](/accounting/pos).

## Who does what

| Role | Typical work |
| --- | --- |
| Sales User | Quotations, sales orders, customer follow-up |
| Sales Manager | Approves discounts, sets targets and price lists, reviews the pipeline |
| Stock User | Picks, packs and delivers |
| Accounts User | Invoices and collects |

## Setting up Selling

1. Create [customer groups and territories](/organization/territories-groups).
2. Set up [price lists and pricing rules](/selling/price-lists) and [payment terms](/accounting/payment-terms).
3. Review [selling settings](/selling/selling-settings).
4. Import [customers](/selling/customers) with TRNs and addresses.
5. Prepare quotation, order and invoice [print formats](/getting-started/printing).
6. Add salespeople and targets for [sales reports](/selling/selling-reports).

See the [order to cash walkthrough](/guides/order-to-cash) for one complete example.

@@ customers | Customers
@summary Set up and manage customer records: groups, territories, TRN, addresses, contacts, pricing, credit control, accounts and portal access.

A **Customer** record holds everything DocFlow needs to sell to someone: who they are, where to bill and deliver, what prices and terms they get, how much credit they have and which account their balance sits in. Getting customer records right saves time on every quotation, order and invoice.

:::note Before you start
- Collect the customer's trade licence, TRN certificate (if VAT registered), and contact details for purchasing and accounts.
- Set up [customer groups and territories](/organization/territories-groups), [price lists](/selling/price-lists) and [payment terms](/accounting/payment-terms).
:::

## Ways customers are created

| Route | When |
| --- | --- |
| **Selling › Customer › New** | Most new customers |
| Converting a lead or prospect | When a [lead](/crm/leads) places an order |
| From a quotation to a lead | **Create › Customer** while making the sales order |
| [Data Import](/getting-started/data-import) | Migrating your customer list |
| Point of sale | Quick creation at the counter |
| Website signup | Customers registering on your portal |

## The customer form

### Details

| Field | What it does |
| --- | --- |
| Customer Name | Legal name as on the trade licence |
| Customer Name in Arabic | For bilingual documents |
| Customer Type | Company or Individual |
| Customer Group | Hotels, Restaurants, Contractors, Government, Retail and so on |
| Territory | Emirate or country |
| From Lead / Opportunity / Prospect | Where the customer came from |
| Is Internal Customer | Marks a group company for [inter-company](/accounting/inter-company) transactions |
| Image / Logo | Shown on the record |

### Tax

| Field | What it does |
| --- | --- |
| Tax ID | The customer's 15-digit TRN, printed on tax invoices |
| Tax Category | Used by tax rules to pick the right template automatically, for example *Designated Zone* or *Export* |
| Tax Withholding Category | Not used in the UAE |

### Addresses and contacts

Add addresses and contacts from the customer form. Each customer can have several: billing, shipping, site and branch addresses, and contacts for purchasing, accounts and operations. Mark one **Preferred Billing** and one **Preferred Shipping** address, and one **Primary Contact**. See [Addresses and contacts](/organization/addresses-contacts).

:::uae The emirate on the billing address
The emirate on the customer's address decides which box (1a to 1g) of the VAT return a sale is reported in. Always fill it in for UAE customers.
:::

### Currency and pricing

| Field | What it does |
| --- | --- |
| Billing Currency | Currency for quotations and invoices |
| Default Price List | Prices used on documents |
| Default Bank Account | The customer's bank, for refunds |

### Credit limit and payment terms

| Field | What it does |
| --- | --- |
| Credit Limit (per company) | Maximum outstanding balance allowed |
| Bypass Credit Limit Check at Sales Order | Checks the limit only at invoicing, not at order |
| Default Payment Terms Template | Due dates on all documents |

When a new order or invoice would take the customer above their limit, DocFlow stops it unless a user with the **Credit Controller** role submits it.

:::example Example: credit control for a restaurant group
A restaurant group in Dubai Marina has a limit of AED 75,000 and owes AED 68,200. A new order for AED 12,400 would take them over. The order is held until the credit controller approves it or a payment arrives.
:::

### Accounting

| Field | What it does |
| --- | --- |
| Default Receivable Account (per company) | For example *Debtors – USD* for a foreign customer |
| Loyalty Programme | Links to a [loyalty programme](/accounting/loyalty-program) |

### Sales team

Set the default **Sales Team** (salespeople and their share) and **Sales Partner** with commission rate. They copy to every new document.

### Settings

| Field | What it does |
| --- | --- |
| Allow Sales Invoice creation without Sales Order | Overrides selling settings for this customer |
| Allow Sales Invoice creation without Delivery Note | The same for delivery notes |
| Is Frozen | Blocks new transactions |
| Disabled | Hides the customer from new documents |

!fig Customer form with group, territory, TRN, credit limit and addresses

## The customer dashboard

The customer record shows a summary at the top: billed this year, total unpaid, and links to every quotation, order, delivery, invoice, payment, issue and project for that customer. Use it before calling a customer about a payment or an order.

## Portal access

To let a customer see their own quotations, orders, invoices and issues online, invite their contact as a [portal user](/website/portal).

## Restricting customers to companies

In a multi-company setup, **Allowed To Transact With** on the customer limits which of your companies can sell to them.

## Customer documents

Attach the trade licence and TRN certificate. Add a custom field for **Trade Licence Expiry** with a [notification](/getting-started/notifications) 30 days before, so you never sell on credit to a customer whose licence has lapsed.

:::uae Government and semi-government customers
Government entities usually require registration on their supplier portal and use their own PO numbers. Add a custom field for your **Supplier Registration No.** and keep their PO number in **Customer's Purchase Order** on the sales order.
:::

## Merging and renaming

To merge two records for the same customer, rename one to the exact name of the other and tick **Merge with existing**. All transactions move to one record.

## Common problems

:::details A customer's TRN is rejected
A UAE TRN has exactly 15 digits. Remove spaces and dashes, and verify it with the FTA's TRN check.
:::

:::details The wrong price list appears on new quotations
The customer's own price list overrides the group and the selling settings. Check the customer's **Default Price List**.
:::

:::details Credit limit is not enforced
The limit is set for a different company, or **Bypass Credit Limit Check at Sales Order** is ticked.
:::

## Related pages

- [Statements of account](/accounting/statement-of-accounts)
- [Dunning](/accounting/dunning)
- [Leads](/crm/leads)

@@ price-lists | Price lists and pricing rules
@summary Maintain selling prices, customer-specific rates, margins, discounts, coupons and promotions, and understand exactly how DocFlow picks a price.

Prices in DocFlow come from **price lists**, and can then be changed automatically by **pricing rules**. Setting these up well means quotations and invoices get the right price without staff typing it in.

## Price lists

A price list is a named set of item prices in one currency.

| Field | What it does |
| --- | --- |
| Price List Name | For example *Standard Selling AED*, *Wholesale AED*, *Hotel Contract 2026*, *Export USD* |
| Currency | One currency per list |
| Buying / Selling | Whether the list is used for purchases, sales or both |
| Price Not UOM Dependent | One price for all units, converted by the conversion factor |
| Countries | Limits the list to customers in those countries |
| Enabled | Disabled lists cannot be selected |

### Item prices

Each **Item Price** row is one item in one list.

| Field | What it does |
| --- | --- |
| Item Code | The item |
| UOM | The unit the price is for, for example Box |
| Packing Unit | Sells only in multiples, for example 12 |
| Rate | The price |
| Customer / Supplier | Makes the price specific to one party |
| Valid From / Valid Upto | Dates the price applies |
| Lead Time in Days | For buying prices |
| Batch No. | Price for a specific batch |

!fig Item price list showing standard selling prices in AED

### Updating many prices

Use [Data Import](/getting-started/data-import) on **Item Price** with **Update Existing Records**, or open the Item Price report view, filter and use bulk edit. Keep old prices by setting a **Valid Upto** date and adding a new row, rather than overwriting.

:::tip Prices before or after VAT?
Store B2B price lists before VAT. For retail, where shelf prices include VAT, tick **Is this Tax included in Basic Rate?** on the VAT template so invoices back out the VAT correctly.
:::

## Pricing rules

A **Pricing Rule** changes the price or adds a free item when conditions are met.

### What a rule applies to

| Apply On | Example |
| --- | --- |
| Item Code | One product |
| Item Group | All ovens |
| Brand | All items of one brand |
| Transaction | The whole document total |

### Conditions

| Condition | Example |
| --- | --- |
| Selling / Buying | Sales only |
| Applicable For | Customer, customer group, territory, sales partner, campaign |
| Min / Max Quantity | 20 or more |
| Min / Max Amount | AED 5,000 or more |
| Valid From / To | Ramadan dates |
| Warehouse | Only from one warehouse |
| Condition (formula) | Any custom condition |

### Price or product discount

| Type | Result |
| --- | --- |
| Rate | Sets a fixed rate |
| Discount Percentage | Reduces the price by a % |
| Discount Amount | Reduces the price by an amount |
| Margin | Adds a margin on the price list rate |
| Free item | Gives free goods: same item or a different one, with quantity |

### Priority and stacking

When several rules match, DocFlow uses the one with the highest **Priority**. Tick **Apply Multiple Pricing Rules** to stack them. Tick **Mixed Conditions** to count different items in the same group together towards a quantity threshold.

!fig Pricing rule giving 7% off for quantities of 20 or more

### Common rule examples

| Rule | Condition | Result |
| --- | --- | --- |
| Volume discount | Quantity 20 or more | 7% off |
| Hotel group contract | Customer group = Hotels | Contract rate |
| Ramadan offer | Posting date in Ramadan, item group Dates | 10% off |
| Buy 10, get 1 free | 10 cartons of dates | 1 carton free |
| Distributor margin | Customer group = Distributors | Price list rate minus 15% |

## Coupon codes

Create a **Coupon Code** linked to a pricing rule for promotions such as "EID2026". Set the maximum number of uses and validity. Customers or cashiers enter the code on the order or POS to apply the discount.

## How DocFlow picks a price

1. The price list on the document comes from the customer, then the customer group, then selling settings.
2. The item price for the exact unit is used; otherwise the stock unit price is converted.
3. Customer-specific item prices override general ones.
4. Matching pricing rules are applied, highest priority first.
5. A user can type a different rate if allowed.

Tick **Ignore Pricing Rule** on a document to stop rules applying.

## Changing prices after an order

With **Maintain Same Rate Throughout Sales Cycle** on in [selling settings](/selling/selling-settings), invoice rates must match the sales order. To change them, update the order with **Update Items** first.

## Common problems

:::details The rate stays at zero
The item has no price in this list for this unit. Add an item price, or check that a pricing rule is not setting the rate to zero.
:::

:::details A discount applies when it should not
Another pricing rule matches. Open the item row's **Pricing Rules** field to see which, then adjust its conditions or priority.
:::

## Related pages

- [Promotional schemes](/selling/promotional-schemes)
- [Supplier price lists](/buying/supplier-price-lists)
- [Quotations](/selling/quotations)

@@ quotations | Quotations
@summary Prepare professional offers with options, terms and validity, revise them, track their status and convert them into orders.

A **Quotation** is your formal offer to a customer or lead. It sets out items, prices, taxes, delivery terms and validity. When accepted, it becomes a sales order with no retyping.

:::note Before you start
Create the lead or customer, and make sure items and prices exist. For large tenders, prepare the item list in a spreadsheet and import it into the quotation's items table.
:::

## Creating a quotation

1. Go to **Selling › Quotation › New**, or click **Create › Quotation** on an [opportunity](/crm/opportunities).
2. Set **Quotation To**: Customer or Lead, and choose the party.
3. Set the **Transaction Date** and **Valid Till**.
4. Choose the **Order Type**: Sales, Maintenance or Shopping Cart.
5. Add items. Prices fill from the price list; pricing rules apply automatically.
6. Add taxes, shipping rule, terms and conditions.
7. Save, review, and submit.
8. Click **Email** to send the PDF.

!fig Quotation with items, VAT, validity date and terms

## The form in detail

| Section | Key fields |
| --- | --- |
| Header | Quotation To, Party, Date, Valid Till, Order Type, Company |
| Currency and price list | Currency, exchange rate, price list, ignore pricing rule |
| Items | Item, description, quantity, UOM, rate, discount, margin, amount, item tax template, delivery date |
| Taxes | Template, rows, shipping rule |
| Totals | Net total, additional discount, taxes, grand total, rounded total |
| Payment terms | Template and schedule, for example 30% with order |
| Terms | Terms and conditions template or text |
| Address and contact | Billing, shipping, contact person |
| More info | Campaign, source, opportunity, competitors, lost reasons, supplier quotation |
| Print settings | Letterhead, print heading, language |

## Optional items and alternatives

- Add optional items, such as installation, extended warranty or spare parts kits, as normal lines with a description like "Optional". When the order is made, remove the ones the customer declined.
- Tick **Has Alternative Item** on a line and add alternatives, for example a gas and an electric model. The customer chooses one when ordering.

## Terms and conditions

Save standard text as **Terms and Conditions** templates: delivery, warranty, validity, payment and exclusions. Pick one on each quotation and edit if needed.

:::example Example: delivery and payment terms
"Prices are in AED and exclude 5% VAT. Delivery within 7 working days to Dubai, Sharjah and Ajman; other emirates charged separately. Installation not included unless listed. Payment 30% with order, balance within 30 days of delivery. Warranty 12 months from installation."
:::

## Revising a quotation

Customers often ask for changes. Cancel the quotation and click **Amend**. The revision gets a suffix such as `QTN-2026-00118-1`, so every version is kept. Mention the revision number in your email.

## Quotation statuses

| Status | Meaning |
| --- | --- |
| Draft | Not yet submitted |
| Open | Submitted, waiting for the customer |
| Replied | The customer replied by email |
| Partially Ordered | Some items converted to a sales order |
| Ordered | Fully converted |
| Lost | Marked lost, with reasons |
| Expired | Past its validity date |
| Cancelled | Withdrawn |

## Following up

- Set **Valid Till** and use a saved report of open quotations expiring this week.
- Link quotations to opportunities so the CRM pipeline stays current.
- When a quotation is lost, click **Set as Lost** and choose reasons and competitors. The **Lost Quotations** analysis shows patterns.

## Converting to a sales order

1. When the customer accepts, click **Create › Sales Order**.
2. Remove any declined optional lines.
3. Enter the customer's purchase order number.

If the quotation was to a lead, DocFlow asks you to create the customer first.

## Proforma invoices

Many customers, especially overseas buyers and those paying in advance, ask for a proforma invoice. Print the quotation or sales order with a **Proforma Invoice** print heading. See [Proforma invoices](/selling/proforma-invoice).

## Common problems

:::details "Quotation has expired"
The validity date has passed. You can still convert it, but check prices first, or amend it with a new validity date.
:::

:::details The customer accepted only some lines
When creating the sales order, delete the lines they declined. The quotation becomes **Partially Ordered**.
:::

## Related pages

- [Opportunities](/crm/opportunities)
- [Sales orders](/selling/sales-order)
- [Email templates](/framework/email-templates)

@@ sales-order | Sales orders
@summary Confirm customer orders, reserve stock, plan delivery and production, take advances, change orders and close them properly.

A **Sales Order** records a confirmed customer order. It is the centre of the selling process: delivery notes, invoices, work orders, purchase orders for drop shipping and material requests all start from it, and its status shows how much has been delivered and billed.

:::note Before you start
Check the customer's LPO against your quotation: items, quantities, prices, delivery address and payment terms. Agree any differences before submitting.
:::

## Creating a sales order

1. Open the accepted quotation and click **Create › Sales Order**, or go to **Selling › Sales Order › New**.
2. Enter **Customer's Purchase Order** (the LPO number) and its date.
3. Set the **Delivery Date** at the top, or per line.
4. Choose **Set Source Warehouse** for all lines, or per line.
5. Check items, prices, taxes and payment terms.
6. Save and submit.

!fig Sales order with customer LPO number, delivery dates and warehouse

## The form in detail

| Section | Key fields |
| --- | --- |
| Header | Customer, Order Type, Date, Delivery Date, Customer's Purchase Order and date |
| Currency and price list | Currency, exchange rate, price list |
| Items | Item, quantity, UOM, rate, delivery date, warehouse, reserve stock, supplier delivers to customer, against blanket order |
| Taxes and totals | Template, shipping rule, discounts, grand total |
| Payment terms | Schedule, advance paid |
| Address and contact | Billing, shipping, contact, company address |
| Sales team | Salespeople, partner, commission |
| More info | Project, campaign, source, inter-company reference |
| Print settings | Letterhead, heading, language |

## Order types

| Order Type | Use |
| --- | --- |
| Sales | Normal orders |
| Maintenance | Service contracts; can create maintenance schedules |
| Shopping Cart | Orders placed on your website |

## What happens when you submit

- **Projected quantity**: the ordered quantity shows as reserved in stock reports.
- **Planning**: the order appears in production plans and material requests if stock is short.
- **Drop shipping**: lines marked *Supplier delivers to customer* can create a purchase order.
- **Reports**: the order appears in Sales Order Analysis until delivered and billed.

## Advances against the order

Click **Create › Payment** or **Payment Request** to take an advance. The advance is linked to the order and shown as **Advance Paid**. It is applied automatically when the invoice is created from the order.

:::uae VAT on advances
VAT is due on an advance when it is received. Make sure the payment entry applies VAT on the advance. See [Tax point](/uae-compliance/tax-point).
:::

## Reserving stock

Tick **Reserve Stock** on the order (or on lines) to lock specific stock, batches or serial numbers for this customer. See [Stock reservation](/stock/stock-reservation).

## Delivering and billing

| Next step | How |
| --- | --- |
| Pick goods | **Create › Pick List** |
| Deliver | **Create › Delivery Note** |
| Invoice | **Create › Sales Invoice** (from the order or the delivery note) |
| Make the goods | **Create › Work Order** or add to a production plan |
| Buy for the order | **Create › Material Request** or **Purchase Order** |
| Request raw materials | **Create › Request for Raw Materials** for make-to-order items |

## Partial delivery and partial billing

You can deliver and invoice in as many parts as needed. Each delivery note and invoice reduces the pending quantity on the order. The order's **% Delivered** and **% Billed** show progress.

## Changing a submitted order

| Change | How |
| --- | --- |
| Quantity, rate or delivery date on undelivered lines | **Update Items** |
| Add a new line | **Update Items** |
| Customer, currency or taxes | Cancel and amend (only if nothing is delivered or billed) |

Always send the customer the revised order confirmation.

## Holding and closing orders

| Action | When | Effect |
| --- | --- | --- |
| **Hold** | Customer asks to pause, or a credit issue | No deliveries or invoices until resumed |
| **Close** | Customer cancels the remaining quantity | Pending quantity released; order marked Closed |
| **Re-open** | The customer changes their mind | Order becomes active again |
| **Complete** | Automatic when fully delivered and billed | |

To close many old orders at once, filter the list for orders with small pending quantities and use bulk **Close**.

## Statuses

| Status | Meaning |
| --- | --- |
| Draft | Not submitted |
| To Deliver and Bill | Nothing delivered or billed yet |
| To Bill | Delivered, not invoiced |
| To Deliver | Invoiced (for example advance billing), not delivered |
| Completed | Fully delivered and billed |
| On Hold | Paused |
| Closed | Closed early |
| Cancelled | Cancelled |

## Reports

| Report | Shows |
| --- | --- |
| Sales Order Analysis | Ordered, delivered, billed and pending, with delays |
| Pending SO Items for Purchase Request | What to buy for open orders |
| Sales Order Trends | Monthly orders by customer, item or territory |
| Payment Terms Status for Sales Order | Advance and instalment status |

## Common problems

:::details "Sales Order already exists against Customer's Purchase Order"
Another order uses the same LPO number. Check for a duplicate, or allow multiple orders per LPO in [selling settings](/selling/selling-settings).
:::

:::details The order is stuck at "To Bill" after invoicing
The invoice was not created from the order or its delivery note, so they are not linked. Create invoices from the order.
:::

:::details "Delivery date cannot be before order date"
Set a delivery date on or after the order date, on the header and on every line.
:::

## Related pages

- [Pick lists](/stock/pick-list)
- [Work orders](/manufacturing/work-order)
- [Blanket orders](/selling/blanket-orders)
- [Order to cash walkthrough](/guides/order-to-cash)

@@ delivery-note | Delivery notes
@summary Dispatch goods: picking, batches and serial numbers, packing, transport details, proof of delivery, partial deliveries and the accounting behind them.

A **Delivery Note** records goods leaving your warehouse for a customer. It reduces stock, posts the cost of goods sold, records batches and serial numbers, and is the customer's proof of what they received.

:::note Before you start
Stock must be in the warehouse, with batch or serial numbers ready for tracked items. For multi-line orders, pick the goods with a [pick list](/stock/pick-list) first.
:::

## Creating a delivery note

1. From the sales order (or pick list), click **Create › Delivery Note**.
2. Adjust quantities for a partial delivery.
3. Select batches and serial numbers for tracked items, or scan them.
4. Enter transport details.
5. Save, print and submit when the goods leave.

!fig Delivery note with items, batch numbers and transporter details

## The form in detail

| Section | Key fields |
| --- | --- |
| Header | Customer, posting date and time, is return, issue credit note |
| Items | Item, quantity, rate, warehouse, batch, serial numbers, against sales order |
| Packing | Packed items (for bundles), packing slips |
| Taxes and totals | Copied from the order; used when the invoice is created |
| Transporter | Transporter, driver, vehicle number, LR number and date, distance |
| Address | Shipping address, dispatch address, contact |
| More info | Project, installation status, instructions |

## Batches and serial numbers

- **Batches**: choose manually, or let DocFlow pick using FIFO or FEFO (first expiry first out).
- **Serial numbers**: scan each unit. The serial records the customer and delivery date, starting the warranty.

## Packing

- **Packing Slip**: for multi-carton shipments, create packing slips listing what is in each box with net and gross weight. The delivery note shows the total cartons.
- **Product bundles**: the components appear in the **Packed Items** table and stock is reduced for each.

## Transport details

Record the driver and vehicle number for your own trucks, or the transporter (courier or freight company) and their tracking number. Plan multi-stop routes with [delivery trips](/stock/delivery-trip).

## Proof of delivery

Print the delivery note, get it signed and stamped by the customer, and attach a photo or scan. Many UAE customers, especially hotels and government entities, will not process an invoice without a stamped delivery note.

## Partial deliveries

Deliver what is available now; the sales order keeps the remaining quantity pending. Each delivery note can be invoiced separately or together.

## Over-delivery

DocFlow blocks delivering more than ordered unless an **Over Delivery Allowance** is set in [stock settings](/stock/stock-settings), for example 5% for goods sold by weight.

## Behind the scenes

Delivering goods that cost AED 24,000:

| Account | Debit | Credit |
| --- | --- | --- |
| Cost of Goods Sold | 24,000 | |
| Stock in Hand – Al Quoz | | 24,000 |

Income and VAT are posted by the sales invoice, not the delivery note. Goods delivered but not yet invoiced can be tracked with the **Delivered Items To Be Billed** report.

:::uae Exports and moves into free zones
For goods leaving the UAE or moving into a Designated Zone, attach customs exit documents (exit certificate, bill of lading or bill of entry) to the delivery note. They support zero-rating. See [Zero-rated supplies](/uae-compliance/zero-rated-exempt).
:::

## Returns

If the customer refuses or returns goods, create a [sales return](/selling/sales-returns) from the delivery note.

## Statuses

| Status | Meaning |
| --- | --- |
| Draft | Not submitted |
| To Bill | Delivered, not invoiced |
| Completed | Invoiced |
| Return Issued | Partly or fully returned |
| Closed | Closed without full billing |
| Cancelled | Cancelled |

## Common problems

:::details "Insufficient stock for item in warehouse"
Check Stock Balance for that warehouse. The stock may be in another warehouse, reserved for another order, or not yet received.
:::

:::details "Serial No does not belong to warehouse"
The serial is in a different warehouse or already delivered. Scan the unit physically present, or transfer it first.
:::

:::details The customer refuses part of the delivery
Deliver only what was accepted. If the note is already submitted, create a sales return for the refused quantity.
:::

## Related pages

- [Delivery trips](/stock/delivery-trip)
- [Installation notes](/selling/installation-notes)
- [Sales invoices](/accounting/sales-invoice)

@@ selling-reports | Selling reports
@summary Measure sales by customer, item, territory and salesperson, track targets and spot slow customers.

## Main reports

| Report | Shows | Useful filters |
| --- | --- | --- |
| Sales Analytics | Sales by customer, item, territory, group or salesperson, by period | Value or quantity, monthly or quarterly |
| Sales Order Analysis | Ordered, delivered, billed, pending and delays | Status, customer, date range |
| Sales Order Trends / Sales Invoice Trends | Period-on-period movement | Based on customer, item, territory |
| Gross Profit | Margin per invoice, item, customer or salesperson | Group by |
| Sales Person Target Variance (Item Group-wise) | Actual against target per salesperson | Fiscal year, period |
| Sales Person-wise Transaction Summary | Each salesperson's documents and contribution | |
| Sales Partner Commission Summary | Commission earned per partner | |
| Customer Acquisition and Loyalty | New versus repeat customers per period | |
| Inactive Customers | Customers who have not ordered for a set number of days | Days since last order |
| Delivered Items To Be Billed | Deliveries not yet invoiced | |
| Available Stock for Packing Items | Whether bundles can be delivered | |

!fig Sales analytics by territory showing monthly sales per emirate

## Sales targets

1. On each **Sales Person**, add target rows: fiscal year, item group, target amount or quantity.
2. Choose a **Monthly Distribution** to spread the target, for example heavier in Q4.
3. Run **Sales Person Target Variance** monthly.

For company-wide goals, set a **Monthly Sales Target** on the Company to show progress on the dashboard.

## A weekly sales meeting pack

1. Sales Analytics by salesperson for the week and month to date.
2. Sales Order Analysis for overdue deliveries.
3. Opportunities closing this month from [CRM](/crm/pipeline).
4. Accounts Receivable for customers over 60 days.

Save these as reports and use [Auto Email Report](/framework/report-builder) to send them every Sunday morning.

:::tip Gross profit by customer
Run Gross Profit grouped by customer every quarter. It quickly shows which accounts look busy but earn little after discounts and delivery costs.
:::

@@ selling-settings | Selling settings
@summary Every option that controls naming, defaults, required documents, pricing behaviour and validations across the sales process.

Open **Selling › Selling Settings** to decide how sales documents behave for everyone.

## Naming and defaults

| Setting | Options | Suggested |
| --- | --- | --- |
| Customer Naming By | Customer Name, Naming Series or Auto Name | Customer Name |
| Campaign Naming By | Campaign Name or Naming Series | Campaign Name |
| Default Customer Group | Any | Your most common group |
| Default Territory | Any | Your main emirate |
| Default Price List | Any selling list | Standard Selling AED |
| Default Quotation Validity Days | Number | 30 |

## Required documents

| Setting | Effect | Suggested |
| --- | --- | --- |
| Sales Order Required for Sales Invoice and Delivery Note | Blocks invoices and deliveries without an order | Yes for B2B, No for retail |
| Delivery Note Required for Sales Invoice | Blocks invoices without a delivery | Yes if you always deliver before billing |

Individual customers can be exempted on the customer record.

## Pricing behaviour

| Setting | Effect | Suggested |
| --- | --- | --- |
| Maintain Same Rate Throughout Sales Cycle | Invoice and delivery rates must match the order | On |
| Action if Same Rate is Not Maintained | Stop or Warn | Stop |
| Allow User to Edit Price List Rate in Transactions | Lets staff change the list rate on documents | Off |
| Validate Selling Price for Item Against Purchase Rate or Valuation Rate | Warns when selling below cost | On |
| Allow Negative Rates for Items | For discounts entered as lines | Off |

## Order and delivery behaviour

| Setting | Effect | Suggested |
| --- | --- | --- |
| Allow Item to be Added Multiple Times in a Transaction | Same item on several lines | On |
| Allow Multiple Sales Orders Against a Customer's Purchase Order | Several orders per LPO | Off, to catch duplicates |
| Allow Sales Order Creation for Expired Quotation | Convert after validity | Off |
| Hide Customer's Tax ID from Sales Transactions | Hides TRN on documents | Off in the UAE |
| Over Delivery/Receipt Allowance | (in stock settings) | 0–5% |

!fig Selling settings with required documents and pricing options

:::tip Enforce the chain
Requiring a sales order before a delivery note stops goods leaving without a confirmed order, a common control requirement for UAE distributors and their auditors.
:::

## Related pages

- [Accounts settings](/accounting/accounts-settings)
- [Stock settings](/stock/stock-settings)

@@ product-bundles | Product bundles and kits
@summary Sell a set of items as one line, deliver its components from stock, and price and report on it correctly.

A **Product Bundle** is sold as one item but delivered as its parts. For example, a "Café Starter Kit" contains an espresso machine, a grinder and a water filter.

## Creating a bundle

1. Create the bundle item, for example `KIT-CAFE-01`, with **Maintain Stock** unticked.
2. Go to **Selling › Product Bundle › New** and choose it as the **Parent Item**.
3. Add the component items and quantities.
4. Save.

!fig Product bundle with three component items and quantities

## Selling a bundle

- Price the bundle item in your price list. The invoice shows one line.
- When you deliver (or invoice with Update Stock), the components appear in the **Packed Items** table with their warehouses, batches and serials, and stock reduces for each.
- Cost of goods sold is the total cost of the components.

## Reports

**Available Stock for Packing Items** shows how many bundles you can deliver from current stock of all components.

:::tip Bundle or bill of materials?
Use a bundle when you sell existing items together without assembling them. Use a [bill of materials](/manufacturing/bom) when you actually make a new product.
:::

## Common problems

:::details Stock did not reduce for the bundle
The parent item must not maintain stock, and each component must. Check both.
:::

## Related pages

- [Delivery notes](/selling/delivery-note)
- [Item variants](/stock/item-variants)

@@ blanket-orders | Blanket orders and rate contracts
@summary Agree prices and total quantities for a period, then call off deliveries against the agreement and track what remains.

Hotels, hospitals, contractors and government entities often sign a yearly rate contract and call off goods as needed. A **Blanket Order** records the agreement.

## Creating a blanket order

1. Go to **Selling › Blanket Order › New**.
2. Choose **Blanket Order Type** = Selling and the customer.
3. Set **From Date** and **To Date**.
4. Add items with the agreed **Rate** and total **Quantity**.
5. Add terms and submit.

!fig Blanket order with agreed rates and quantities for one year

## Calling off goods

1. Create a sales order for the customer.
2. On each line, choose the **Blanket Order**. The agreed rate fills in.
3. Submit. The blanket order's **Ordered Quantity** increases.

When a line is linked, the blanket rate overrides the price list. The blanket order shows ordered and remaining quantities for each item.

## Purchasing blanket orders

The same works with suppliers: choose **Blanket Order Type** = Purchasing and link purchase orders to it.

## Common problems

:::details The rate on the sales order differs from the agreement
The blanket order is linked in the header only. Link it on each line.
:::

:::details Ordered more than the agreed quantity
DocFlow warns but allows it, unless an allowance is configured. Agree an extension with the customer.
:::

## Related pages

- [Contracts](/crm/contracts)
- [Price lists](/selling/price-lists)

@@ sales-partners | Sales partners, salespeople and commission
@summary Track your sales team and outside partners, set targets and calculate commission and incentives.

## Salespeople

A **Sales Person** is someone in your company who sells. Salespeople form a tree, for example *Sales Team › Dubai › Hospitality*.

| Field | What it does |
| --- | --- |
| Sales Person Name | Usually the employee's name |
| Employee | Links to the HR record |
| Parent Sales Person | Team structure |
| Commission Rate | Default commission % |
| Targets | Annual targets by item group, with monthly distribution |

On each quotation, order and invoice, the **Sales Team** table lists salespeople with their **Contribution (%)**. Contributions must total 100%.

## Sales partners

A **Sales Partner** is outside your company: an agent in Oman, a distributor in the Northern Emirates, or an interior designer who refers customers.

| Field | What it does |
| --- | --- |
| Partner Name and Type | Agent, distributor, referral, reseller |
| Territory | Where they operate |
| Commission Rate | Default commission % |
| Targets | Optional, like salespeople |
| Show In Website | Lists the partner on your website |

!fig Sales partner with territory and commission rate

Choose the partner on each document. Commission is calculated on the net total.

## Calculating commission and incentives

| Report | Use |
| --- | --- |
| Sales Partner Commission Summary | Commission owed to each partner for a period |
| Sales Person Commission Summary | Commission per salesperson |
| Sales Partner Transaction Summary | Each partner's documents |

Pay partners with a purchase invoice (they usually invoice you with VAT). Pay staff incentives through payroll as an additional salary component.

:::uae Commercial agency agreements
Registered commercial agency agreements in the UAE carry specific rights. Keep the agreement attached to the sales partner and record its expiry date.
:::

## Related pages

- [Selling reports](/selling/selling-reports)
- [Salary structures](/hr-payroll/salary-structure)

@@ drop-shipping | Drop shipping
@summary Have your supplier deliver straight to your customer while you keep the sale, the margin and the paperwork.

Drop shipping suits heavy or bulky goods, such as cold rooms, generators or industrial equipment, that you do not want to bring into your warehouse.

## Setting up

Tick **Delivered by Supplier (Drop Ship)** and choose the **Default Supplier** on items you always drop ship. Or tick **Supplier delivers to Customer** on individual sales order lines.

## The flow

1. Submit the sales order.
2. Click **Create › Purchase Order**. DocFlow creates a purchase order to the supplier with the customer's delivery address and contact.
3. Send the purchase order to the supplier.
4. When the supplier confirms delivery, mark the purchase order **Delivered** with **Update Items** or **Delivered by Supplier**.
5. Invoice the customer from the sales order.
6. Enter the supplier's invoice against the purchase order.

!fig Sales order line marked for drop shipping with the supplier

No stock moves in your warehouses, so no delivery note or purchase receipt is needed.

:::uae VAT on drop shipments
You still sell to your customer and buy from your supplier, so both invoices carry VAT as normal. Keep the supplier's proof of delivery with the sales invoice.
:::

## Common problems

:::details The delivery note asks for stock
Drop-shipped lines do not need a delivery note. Invoice directly from the sales order after the supplier confirms delivery.
:::

## Related pages

- [Purchase orders](/buying/purchase-order)

@@ sales-returns | Sales returns
@summary Take goods back, inspect them, restock or scrap them, and credit the customer correctly.

## Choosing the right route

| Situation | Create |
| --- | --- |
| Goods were delivered with a delivery note | **Sales Return** from the delivery note, then a credit note from the invoice |
| The invoice updated stock (no delivery note) | **Return / Credit Note** from the invoice with Update Stock |
| Price adjustment only, no goods back | Credit note without stock ([guide](/accounting/credit-debit-notes)) |

## Returning goods from a delivery note

1. Open the original **Delivery Note** and click **Create › Sales Return**.
2. Enter the returned quantities. They show as negative.
3. Choose the warehouse, ideally *Returns – Inspection*.
4. Enter batch or serial numbers of the returned units.
5. Submit. Stock increases at the original cost.
6. Open the original invoice and click **Create › Return / Credit Note** for the returned amount.

!fig Sales return created from a delivery note with negative quantities

## After inspection

Transfer good stock back to the main store and damaged stock to a scrap or rejected warehouse with a stock entry. Record a [quality inspection](/quality/inspection) or [non-conformance](/quality/non-conformance) if the return points to a quality issue.

## Behind the scenes

Returning goods that cost AED 1,200 reverses the cost: Stock in Hand is debited and Cost of Goods Sold credited. The credit note then reverses income and VAT.

:::tip Inspect before restocking
Receive returns into a separate warehouse, so damaged items are never sold again by mistake.
:::

## Related pages

- [Credit and debit notes](/accounting/credit-debit-notes)
- [Quality inspections](/quality/inspection)

@@ installation-notes | Installation notes
@summary Record installation and commissioning at the customer's site, and start warranties from the right date.

For equipment your team installs, such as kitchen lines, cold rooms, HVAC units or racking, an **Installation Note** records the job.

1. From the delivery note, click **Create › Installation Note**.
2. Enter the **Installation Date** and time, and the technician.
3. For each item, enter the installed quantity and serial numbers.
4. Add remarks, such as test results or customer instructions.
5. Have the customer sign the printed note, attach it and submit.

!fig Installation note with serial numbers and customer signature

The delivery note's **Installation Status** changes to Installed. The installation date is useful for warranty start dates and for scheduling the first maintenance visit.

## Related pages

- [Serial numbers](/stock/serial-batch)
- [Warranty and maintenance](/support/warranty-maintenance)

@@ promotional-schemes | Promotional schemes and coupons
@summary Run seasonal offers such as Ramadan, Eid, White Friday and the Dubai Shopping Festival with tiered discounts, free items and coupon codes.

A **Promotional Scheme** creates a set of pricing rules for one campaign, with several discount levels.

## Creating a scheme

1. Go to **Selling › Promotional Scheme › New**.
2. Choose **Apply On**: item code, item group, brand or transaction.
3. Choose the items, groups or brands.
4. Choose **Selling** and the customers, groups or territories it applies to.
5. Set **Valid From** and **Valid Upto**.
6. Add **Price Discount Slabs**: minimum and maximum quantity or amount, and the discount. Or add **Product Discount Slabs**: buy a quantity, get free items.
7. Save. DocFlow creates the underlying pricing rules.

| Slab | Condition | Discount |
| --- | --- | --- |
| 1 | AED 1,000 – 4,999 | 5% |
| 2 | AED 5,000 – 19,999 | 10% |
| 3 | AED 20,000 and above | 12% |

!fig Promotional scheme with discount slabs for a festival period

## Coupon codes

Link a **Coupon Code** to a pricing rule from the scheme, set the maximum uses and validity, and share it with customers. It is entered on the sales order, website checkout or POS.

## Measuring results

Tag orders with a [campaign](/crm/campaigns) and compare Sales Analytics for the promotion period with the same period last year.

:::uae Promotions may need a permit
Retail sales and promotions in Dubai generally need a permit from the Department of Economy and Tourism, and other emirates have similar rules. Get the permit before running the scheme.
:::

## Common problems

:::details Two promotions apply to the same item
DocFlow uses the rule with the higher priority. Set priorities, or tick **Apply Multiple Pricing Rules** if they should stack.
:::

## Related pages

- [Price lists and pricing rules](/selling/price-lists)
- [Loyalty programmes](/accounting/loyalty-program)

@@ proforma-invoice | Proforma invoices
@summary Issue proforma invoices for advance payments, letters of credit and customs, without creating a receivable or VAT.

A **proforma invoice** is a preliminary bill sent before the sale is completed. It is common in UAE trade: overseas buyers need one to open a letter of credit or arrange payment, and many customers pay an advance against it.

A proforma invoice is **not** a tax invoice and does not create a receivable or VAT. In DocFlow it is a print of a quotation or sales order.

## Issuing a proforma invoice

1. Create and submit the quotation or sales order.
2. Click **Print**.
3. Choose the **Proforma Invoice** print format, or set **Print Heading** to "Proforma Invoice".
4. Check that it shows your bank details, the validity, the Incoterms and, for exports, the HS codes, country of origin and weights.
5. Email it to the customer.

!fig Sales order printed with a proforma invoice heading and bank details

## What to include for exports

| Detail | Why |
| --- | --- |
| Incoterm and named place | Responsibilities for freight and insurance |
| HS code and country of origin | Customs in the destination country |
| Net and gross weight, packages | Shipping and customs |
| Bank details with SWIFT and IBAN | Payment or LC opening |
| Validity | How long prices hold |
| Payment terms | For example 100% LC at sight |

## When the customer pays

Record the advance against the sales order. VAT is due on a customer advance when received, if the supply is taxable. Issue the tax invoice when the goods are supplied.

:::uae Do not use proformas as tax invoices
Customers cannot recover VAT on a proforma. Always issue a proper tax invoice for the supply, and make sure proformas are clearly marked so they are not mistaken for one.
:::

## Related pages

- [Quotations](/selling/quotations)
- [Sales orders](/selling/sales-order)
- [Bank guarantees and letters of credit](/accounting/bank-guarantee)
