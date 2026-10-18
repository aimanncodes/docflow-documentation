@@ overview | Stock at a glance
@summary How DocFlow tracks quantity and value, the stock transactions, who does what and how to set Stock up.

The Stock module tracks what you hold, where it is and what it is worth. Every receipt, transfer, issue and delivery updates the stock ledger and, under perpetual inventory, the general ledger at the same time, so the inventory value in your balance sheet always matches the warehouse.

!fig Stock workspace with stock value by warehouse and recent stock movements

## Key ideas

| Idea | Meaning |
| --- | --- |
| Item | Anything you buy, sell, make or stock |
| Warehouse | A place where stock is held |
| Stock ledger | Every movement of every item, with quantity, rate and value |
| Actual quantity | What is physically in the warehouse |
| Projected quantity | Actual plus ordered and planned, minus reserved and required |
| Valuation | Cost per unit by FIFO or moving average |
| Perpetual inventory | Stock movements post to the general ledger automatically |

## Stock transactions

| Document | Moves stock |
| --- | --- |
| Purchase Receipt | In from suppliers |
| Delivery Note | Out to customers |
| Stock Entry | Transfers, issues, receipts, repacking, manufacturing |
| Stock Reconciliation | Sets quantities and values after counts |
| Sales / Purchase Invoice with Update Stock | In or out directly from the invoice |
| POS Invoice | Out at the counter |

## Who does what

| Role | Typical work |
| --- | --- |
| Stock User | Receipts, transfers, issues, deliveries and counts |
| Stock Manager | Warehouses, settings, reconciliations and reorder levels |
| Item Manager | Creates and maintains items |
| Accounts Manager | Checks stock against the ledger at month end |

## Setting up Stock

1. Design the [warehouse tree](/stock/warehouses).
2. Set [units of measure](/stock/units-of-measure) and [stock settings](/stock/stock-settings).
3. Import items with groups, units, barcodes and reorder levels.
4. Load opening stock with a [stock reconciliation](/stock/stock-reconciliation).
5. Check that the **Stock and Account Value Comparison** report shows no difference.

## Perpetual inventory

With perpetual inventory on (the default), each stock movement posts to the general ledger: receipts debit stock, deliveries credit stock and debit cost of goods sold, and adjustments go to the stock adjustment account. The stock value in reports and the stock account balance always agree.

@@ items | Items
@summary Create and maintain items: codes, groups, units, stock and valuation settings, batches and serials, reorder levels, prices, taxes, customs data and defaults.

An **Item** is anything you buy, sell, make, stock or bill: a product, a raw material, a spare part, a service or an expense. Every transaction line refers to an item, so a clean item master is the foundation of good stock, sales and purchase data.

:::note Before you start
Agree an item code format with your team, for example a short group prefix and a running number such as `OVN-0012`. Codes are hard to change once used. Set up [item groups](/organization/territories-groups), [units of measure](/stock/units-of-measure) and [warehouses](/stock/warehouses) first.
:::

## Types of item

| Kind | Settings | Examples |
| --- | --- | --- |
| Stock item | Maintain Stock ticked | Ovens, steel sheets, dates |
| Non-stock item | Maintain Stock unticked | Installation service, freight, consultancy |
| Fixed asset | Is Fixed Asset ticked, asset category | Vehicles, forklifts, laptops |
| Template with variants | Has Variants ticked | Racking uprights in several heights |
| Bundle | Non-stock parent of a product bundle | Café starter kit |
| Expense item | Non-stock, with an expense account | Electricity, telecoms, rent |

## Creating an item

1. Go to **Stock › Item › New**.
2. Enter **Item Code** and **Item Name**.
3. Choose the **Item Group** and **Default Unit of Measure**.
4. Tick or untick **Maintain Stock**.
5. Optionally enter an **Opening Stock** and **Valuation Rate** and a **Standard Selling Rate**.
6. Save, then complete the other sections.

!fig Item form with code, group, unit of measure and stock settings

## The item form, section by section

### Details

| Field | What it does |
| --- | --- |
| Item Code / Name | Identifier and display name |
| Item Group | Classification and defaults |
| Brand | For pricing rules and reports |
| Description | Default text on documents |
| Image | Shown on lists, POS and website |
| Disabled | Hides from new transactions |
| Allow Alternative Item | Lets another item be used instead in production |

### Inventory

| Field | What it does |
| --- | --- |
| Maintain Stock | Tracks quantity and value |
| Shelf Life in Days | Sets expiry on new batches |
| End of Life | Date after which the item cannot be bought or sold |
| Default Material Request Type | Purchase, transfer or manufacture |
| Valuation Method | FIFO or Moving Average, if different from the default |
| Warranty Period (in days) | Starts from delivery or installation |
| Weight per Unit and Weight UOM | For shipping rules and packing slips |
| Allow Negative Stock | Per-item override; keep off |
| Barcodes | One or more codes per unit |

### Reorder

Add one row per warehouse with **Re-order Level**, **Re-order Qty** and **Material Request Type**. DocFlow raises requests automatically when projected stock falls below the level. See [Material requests](/buying/material-request).

### Units of measure

Add conversions such as Box = 12 Nos and Carton = 72 Nos. Set the default purchase and sales units. See [Units of measure](/stock/units-of-measure).

### Serial numbers and batches

| Field | What it does |
| --- | --- |
| Has Batch No. | Tracks lots, for example food and chemicals |
| Automatically Create New Batch | Creates a batch on each receipt |
| Batch Number Series | For example `DTS-.YY.-.#####` |
| Has Expiry Date | Requires an expiry date on batches |
| Retain Sample | Keeps a sample from each batch, for quality and regulators |
| Has Serial No. | Tracks individual units |
| Serial Number Series | For example `CO10-.#####` |

See [Serial numbers and batches](/stock/serial-batch).

### Variants

Tick **Has Variants** and add attributes such as height and finish. See [Item variants](/stock/item-variants).

### Item defaults (per company)

| Field | What it does |
| --- | --- |
| Default Warehouse | Used on new documents |
| Default Price List | Selling or buying |
| Default Supplier | Suggested on material requests |
| Expense Account / Income Account | Accounts for purchases and sales |
| Buying / Selling Cost Centre | Cost centres on transactions |

### Purchasing

| Field | What it does |
| --- | --- |
| Is Purchase Item | Can be bought |
| Lead Time in Days | Expected supplier delivery time |
| Last Purchase Rate | Updated automatically |
| Minimum Order Qty | Smallest order quantity |
| Supplier Items | Supplier part numbers |
| Delivered by Supplier (Drop Ship) | Ships direct to customers |
| Country of Origin and Customs Tariff Number | For customs and reports |

### Sales

| Field | What it does |
| --- | --- |
| Is Sales Item | Can be sold |
| Grant Commission | Includes the item in commission calculations |
| Max Discount (%) | Maximum discount staff can give |
| Customer Items | Customer's own part numbers |

### Tax

Add **Item Tax Templates** for items that are not standard-rated, for example a zero-rated or exempt template. Each row can be limited to a tax category and valid-from date.

:::uae Zero-rated and exempt items
Most goods and services are standard-rated at 5%. Use an item tax template only where the item itself is always zero-rated or exempt, such as certain healthcare items. Whether an *export* is zero-rated depends on the transaction, not the item, so handle exports with the document's tax template.
:::

### Quality

Tick **Inspection Required before Purchase** or **before Delivery** and choose a template. See [Quality inspections](/quality/inspection).

### Manufacturing

| Field | What it does |
| --- | --- |
| Default BOM | The bill of materials used for production |
| Include Item in Manufacturing | Allows use as a raw material |
| Is Customer Provided Item | Supplied by the customer |
| Supply Raw Materials for Purchase | For subcontracted items |

### Website

Publish the item on your website with images, description and specifications, if you sell online.

!fig Item with batches, reorder levels and supplier part numbers

## Item groups

Item groups are a tree, for example *Kitchen Equipment › Ovens*. Defaults set on a group (accounts, warehouse, tax template, price list) apply to all items in it unless the item overrides them.

## Changing items later

| Change | Allowed? |
| --- | --- |
| Name, description, group, image | Yes |
| Units of measure conversions | Yes, but check open documents |
| Maintain Stock | Only before transactions |
| Has Batch / Has Serial | Only before transactions |
| Valuation method | Only before transactions |
| Item code | Rename tool; links update |

## Common problems

:::details "Item has transactions, cannot change Maintain Stock"
Create a new item with the right settings, transfer the stock to it with a repack or stock entry, then disable the old item.
:::

:::details The item does not appear in a sales order
It is disabled, not a sales item, or past its end-of-life date.
:::

:::details Duplicate items after import
Merge them by renaming one to the other's exact code and ticking **Merge**.
:::

## Related pages

- [Item variants](/stock/item-variants)
- [Barcodes](/stock/barcode-scanning)
- [Customs](/uae-compliance/customs)

@@ warehouses | Warehouses
@summary Model every place stock is held, from main stores and chillers to vans, transit and customer sites, with the right accounts and controls.

A **Warehouse** is any place stock can be: a building, a room, a rack zone, a van, goods on a ship or stock at a customer's site. DocFlow tracks quantity and value per warehouse.

:::note Before you start
Walk your sites and list every place stock sits, including quarantine areas, returns, scrap and vehicles. Decide whether each needs its own inventory account.
:::

## The warehouse tree

Warehouses form a tree. Group warehouses organise real ones and give combined stock in reports.

| Example | Purpose |
| --- | --- |
| All Warehouses › Jebel Ali › JAFZA – Ambient | Main dry store |
| All Warehouses › Jebel Ali › JAFZA – Chiller | Temperature-controlled |
| All Warehouses › Jebel Ali › JAFZA – Rejected | Failed inspection |
| All Warehouses › Al Quoz › Showroom | Display and counter stock |
| All Warehouses › Vans › Van DXB-48213 | Van sales stock |
| All Warehouses › Goods In Transit | Moving between sites or on the water |
| All Warehouses › At Supplier – Sharjah Galvanizers | Subcontracting |

## Creating a warehouse

1. Go to **Stock › Warehouse › New**.
2. Enter the **Warehouse Name** and choose the **Parent Warehouse**.
3. Tick **Is Group** only for headings.
4. Set the **Account** if this warehouse's stock should post to its own inventory account.
5. Set the **Warehouse Type**, such as Transit, for special warehouses.
6. Add the address, phone and email of the site.
7. Save.

!fig Warehouse tree with Jebel Ali and Al Quoz groups

## Warehouse fields

| Field | What it does |
| --- | --- |
| Company | Each warehouse belongs to one company |
| Parent Warehouse | Position in the tree |
| Is Group | Groups cannot hold stock |
| Account | Inventory account for this warehouse |
| Warehouse Type | For example Transit |
| Default In-Transit Warehouse | Used in two-step transfers |
| Is Rejected Warehouse | Excluded from available stock |
| Disabled | Blocks new transactions |
| Address and contact | Shown on delivery documents |

## One inventory account or many

| Approach | When |
| --- | --- |
| One account for all warehouses | Simple businesses; stock value per warehouse comes from stock reports |
| One account per site | When management wants stock by site on the balance sheet, or sites belong to different cost centres |

## Restricting users to warehouses

Use [user permissions](/getting-started/users-roles) to let the Jebel Ali storekeeper see and transact only in Jebel Ali warehouses.

:::uae Free zone and mainland stock
If you hold stock in both a free zone and the mainland, keep separate warehouses, and separate companies if they are separate licences. Moving goods from a free zone to the mainland is a customs event that may attract duty and VAT, so it should be a sale or a documented transfer, not just a stock movement.
:::

## Common problems

:::details "Warehouse cannot be deleted as stock ledger entry exists"
Disable it instead, after moving any remaining stock out.
:::

:::details "Warehouse does not belong to company"
The document's company and the warehouse's company differ. Choose a warehouse of the right company.
:::

## Related pages

- [Putaway rules](/stock/putaway-rules)
- [Goods in transit](/stock/goods-in-transit)
- [Running several companies](/organization/multi-company)

@@ stock-entry | Stock entries
@summary Move stock outside buying and selling: transfers, issues, receipts, repacking, manufacturing, subcontracting and disassembly, with the accounting behind each.

A **Stock Entry** records stock movements that are not purchases or sales: moving goods between warehouses, issuing materials for internal use, receiving goods without a purchase, repacking, manufacturing and sending materials to subcontractors.

:::note Before you start
Know the source and target warehouses. Have batch or serial numbers for tracked items. For issues and receipts, know which expense or adjustment account the value should go to.
:::

## Stock entry types

| Type | Moves stock | Typical use |
| --- | --- | --- |
| Material Receipt | Into a warehouse | Samples, found stock, opening adjustments |
| Material Issue | Out of a warehouse | Consumables for a workshop or office |
| Material Transfer | Between warehouses | Restocking a showroom or site |
| Material Transfer for Manufacture | Stores to WIP | Starting a work order |
| Material Consumption for Manufacture | Out of WIP | Recording actual usage |
| Manufacture | Raw materials out, finished goods in | Finishing a work order |
| Repack | One item out, another in | Bulk into retail packs |
| Send to Subcontractor | To a supplier warehouse | Subcontracting |
| Disassemble | Finished item out, components in | Taking apart a product |

You can create your own types, such as "Damaged Stock Write-off", based on one of these purposes.

## Creating a stock entry

1. Go to **Stock › Stock Entry › New**.
2. Choose the **Stock Entry Type**.
3. Set the **Default Source Warehouse** and/or **Default Target Warehouse**.
4. Add items and quantities, or click **Get Items From** a material request, BOM or another entry.
5. Select batches or serials, or scan them.
6. For issues and receipts, set the **Difference Account** and cost centre.
7. Save and submit.

!fig Stock entry transferring stock from Jebel Ali to Al Quoz

## The form in detail

| Field | What it does |
| --- | --- |
| Stock Entry Type / Purpose | What kind of movement |
| Posting Date and Time | When it happened |
| Inspection Required | Requires quality inspection |
| Work Order / BOM | Links to production |
| Supplier / Subcontracting Order | For subcontracting |
| Source / Target Warehouse | Default for all lines |
| Items | Item, quantity, UOM, warehouses, batch, serial, basic rate, valuation rate, difference account, cost centre, project |
| Additional Costs | Labour, electricity or other costs added to the value of repacked or manufactured goods |
| Add to Transit | Sends stock to a transit warehouse for a two-step transfer |
| Remarks | Why the movement happened |

## Repacking

:::example Example: repacking dates for Ramadan
Lulu Pearl Foods consumes 100 bulk boxes of Medjool dates (5 kg each, AED 210 per box) and 1,000 gift boxes and ribbons (AED 3 each) to produce 1,000 gift boxes of 500 g. With AED 1,500 of labour as an additional cost, each new gift box is valued at (21,000 + 3,000 + 1,500) ÷ 1,000 = AED 25.50.
:::

## Behind the scenes

| Entry type | Accounting |
| --- | --- |
| Transfer between warehouses with the same account | No ledger entry; only stock moves |
| Transfer between warehouses with different accounts | Debit target stock account, credit source |
| Material Issue | Debit the difference account (expense) and cost centre, credit stock |
| Material Receipt | Debit stock, credit the difference account (stock adjustment) |
| Repack / Manufacture | Credit stock for inputs, debit stock for outputs; additional costs credited to their accounts |

## Common problems

:::details "Difference Account is mandatory"
Issues and receipts need an account for the value. Set it on each line or as a default on the company.
:::

:::details "Insufficient stock in source warehouse"
Check the stock at the posting date and time; a later receipt does not help an earlier transfer.
:::

:::details The valuation of repacked goods looks wrong
Check that all inputs, including packaging, and any additional costs are on the entry.
:::

## Related pages

- [Goods in transit](/stock/goods-in-transit)
- [Work orders](/manufacturing/work-order)
- [Subcontracting](/subcontracting/overview)

@@ stock-reconciliation | Stock counts and reconciliation
@summary Load opening stock, record physical counts and correct valuation, with the accounting and controls a clean count needs.

A **Stock Reconciliation** sets the quantity and/or value of items in a warehouse to what you specify. It is used for opening stock, physical counts and valuation corrections.

## Purposes

| Purpose | Use |
| --- | --- |
| Opening Stock | Loading stock at go-live; posts against a temporary opening account |
| Stock Reconciliation | Recording a count or correcting value; posts to the stock adjustment account |

## Running a count

### Preparing

1. Choose a quiet day or freeze movements in the warehouse being counted.
2. Print count sheets (Stock Balance by bin) or use tablets with barcode scanning.
3. Count in teams of two; one counts, one records.

### Recording

1. Go to **Stock › Stock Reconciliation › New**.
2. Choose the **Purpose**, posting date and time (the time the count started).
3. Click **Fetch Items from Warehouse**. Choose the warehouse, and optionally item group or items with stock only.
4. For each line, enter the counted **Quantity**. Leave the **Valuation Rate** unchanged unless correcting value.
5. For batches and serials, enter the counted batch quantities or serial numbers.
6. Review the **Difference Amount** and investigate large differences.
7. Submit.

!fig Stock reconciliation with system and counted quantities

## Cycle counting

Instead of one annual count, count a few item groups every week, focusing on high-value and fast-moving items. Over a quarter, every item is counted at least once, and errors are found early.

## Behind the scenes

If the system shows 120 cartons at AED 50 and you count 115, the reconciliation credits stock by AED 250 and debits **Stock Adjustment**. A count above the system quantity does the opposite. For opening stock, the other side is the temporary opening account.

## Correcting valuation

To fix a wrong valuation rate, enter the same quantity with the correct **Valuation Rate**. DocFlow revalues the stock and reposts later transactions.

## Common problems

:::details "Reconciliation not allowed for serialized item without serial numbers"
List the serial numbers counted. Serials not listed are removed from stock.
:::

:::details The difference is huge and unexpected
Check for transactions posted after the count time but dated before it, or a unit of measure mismatch (cartons counted, pieces expected).
:::

:::details Opening stock does not match the old system's value
Check that valuation rates were entered for every line and that the temporary opening account balances to zero after all opening entries.
:::

## Related pages

- [Opening balances](/accounting/opening-balances)
- [Barcodes](/stock/barcode-scanning)
- [Month-end closing](/accounting/period-closing)

@@ landed-cost | Landed costs
@summary Add freight, insurance, customs duty, clearing and inland transport to the cost of received goods, and spread them fairly across items.

A **Landed Cost Voucher** adds costs that come on separate bills, such as freight, insurance, customs duty, clearing agent fees and port charges, to the value of goods you received. Without it, imported stock looks cheaper than it really is, and margins are overstated.

## When to use it

| Cost | Add as landed cost? |
| --- | --- |
| Sea or air freight | Yes |
| Marine insurance | Yes |
| Customs duty | Yes |
| Clearing agent fees, port handling | Yes |
| Inland transport to the warehouse | Yes |
| Import VAT (recoverable) | No; it goes on the VAT return |
| Bank charges on payment | No; a finance cost |

## Creating a landed cost voucher

1. Make sure the purchase receipt (or purchase invoice with Update Stock) is submitted.
2. Go to **Stock › Landed Cost Voucher › New**.
3. In **Purchase Receipts**, add one or more receipts.
4. Click **Get Items From Purchase Receipts**.
5. In **Taxes and Charges**, add one row per cost with its **Expense Account** (for example *Freight Inward*, *Customs Duty*) and amount.
6. Choose **Distribute Charges Based On**: Qty, Amount, or Distribute Manually.
7. Submit.

!fig Landed cost voucher distributing freight and duty across items

## How costs are distributed

| Basis | Best for |
| --- | --- |
| Amount | Duty and insurance, which follow value |
| Qty | Freight for items of similar size and weight |
| Manually | Mixed shipments, for example by weight or volume |

## Linking the cost bills

Enter the freight forwarder's and clearing agent's bills as purchase invoices, posting to the same expense accounts used on the voucher (or to a *Landed Cost Clearing* account). The voucher credits those accounts and debits stock, so they net to zero once all bills are entered.

## Behind the scenes

For AED 10,352 of duty, clearing and transport on pistachios:

| Account | Debit | Credit |
| --- | --- | --- |
| Stock in Hand – JAFZA | 10,352 | |
| Customs Duty (or clearing account) | | 7,602 |
| Freight and Clearing Inward | | 2,750 |

If part of the stock has already been sold, DocFlow adjusts cost of goods sold for that part.

:::uae Customs duty is a cost, import VAT usually is not
Customs duty adds to stock cost. Import VAT is normally recovered through your VAT return, so do not include it unless you cannot recover it.
:::

## Common problems

:::details The voucher cannot be submitted
The receipt is cancelled, or items are missing. Re-fetch items from the receipt.
:::

:::details Stock value is still too low
Not all cost bills were included. Add further rows and resubmit, or create a second voucher.
:::

## Related pages

- [Importing goods](/buying/import-purchases)
- [Valuation methods](/stock/valuation-methods)
- [Customs](/uae-compliance/customs)

@@ stock-reports | Stock reports
@summary Check balances, movements, ageing, projected quantities, batches and the link between stock and accounts.

| Report | Shows | Use it to |
| --- | --- | --- |
| Stock Balance | Opening, in, out and closing quantity and value per item and warehouse | Month-end stock value |
| Stock Ledger | Every movement in a period with running balance | Investigate a figure |
| Stock Projected Qty | Actual, ordered, reserved, planned and projected | Decide what to buy |
| Stock Ageing | How long stock has been held, in age buckets | Find slow movers |
| Warehouse-wise Stock Value | Value per warehouse | Compare sites |
| Batch-Wise Balance History | Quantity per batch with expiry | Manage expiring stock |
| Serial and Batch Traceability | Where a batch or serial came from and went | Recalls and audits |
| Stock and Account Value Comparison | Differences between stock and the ledger | Month-end check |
| Item Shortage Report | Items below required quantity | Production planning |
| Itemwise Recommended Reorder Level | Suggested reorder levels from usage | Set reorder levels |
| Item Price Stock | Stock with prices | Quoting from stock |
| Total Stock Summary | Totals by item across warehouses | Quick overview |
| Product Bundle Balance | Bundles that can be built | Selling kits |

!fig Stock balance report filtered by the Jebel Ali warehouse

## Weekly checks for storekeepers

1. Stock Projected Qty for items below reorder level.
2. Batch-Wise Balance History for batches expiring within 60 days.
3. Goods in transit older than the normal transit time.
4. Negative stock or zero-valuation items.

:::tip Slow-moving stock
Run Stock Ageing every quarter. Stock older than 180 days in a hot climate, especially food or chemicals, deserves a decision: promote it, return it or write it down.
:::

@@ stock-settings | Stock settings
@summary Every company-wide rule for valuation, negative stock, batches and serials, over-delivery, reservation and automatic requests.

Open **Stock › Stock Settings** to set the defaults for every stock transaction.

## Defaults

| Setting | What it does | Suggested |
| --- | --- | --- |
| Item Naming By | Item code or naming series | Item code |
| Default Item Group | Group for new items | Your most common group |
| Default Stock UOM | Unit for new items | Nos |
| Default Warehouse | Warehouse on new documents | Main store |
| Sample Retention Warehouse | Where retained samples are kept | Quality Samples |

## Valuation and negative stock

| Setting | What it does | Suggested |
| --- | --- | --- |
| Default Valuation Method | FIFO or Moving Average for new items | FIFO for trading and food; Moving Average for manufacturing |
| Allow Negative Stock | Lets stock go below zero | Off |
| Allow Zero Valuation Rate | For free samples and promotional items | Off by default |
| Allow Uom with Conversion Rate Defined in Item | Restricts units to those on the item | On |

:::warning Negative stock hides errors
With negative stock allowed, a delivery can be posted before the receipt. Valuation then becomes guesswork until the receipt is entered. Keep it off and fix the process instead.
:::

## Over-delivery and over-receipt

| Setting | What it does | Suggested |
| --- | --- | --- |
| Over Delivery/Receipt Allowance (%) | How far above the order you may deliver or receive | 0–5% |
| Role Allowed to Over Deliver/Receive | Who can exceed it | Stock Manager |

## Batches and serial numbers

| Setting | What it does | Suggested |
| --- | --- | --- |
| Automatically Set Serial Nos Based on FIFO | Picks the oldest serials first | On |
| Pick Serial / Batch Based On | FIFO, LIFO or Expiry | Expiry for food and pharma |
| Use Naming Series for Batch | Batch numbers from a series | On |
| Auto create serial and batch bundle | Creates bundles automatically | On |

## Planning and automation

| Setting | What it does | Suggested |
| --- | --- | --- |
| Raise Material Request When Stock Reaches Re-order Level | Nightly automatic requests | On |
| Notify by Email on Creation of Automatic Material Request | Alerts buyers | On |
| Auto insert Price List rate if missing | Saves new rates in price lists | On |
| Enable Stock Reservation | Allows locking stock for orders | On if you reserve |
| Show Barcode Field in Stock Transactions | Adds a scan field | On |

## Freezing stock

| Setting | What it does |
| --- | --- |
| Stock Frozen Up To | Blocks stock transactions on or before the date |
| Role Allowed to Edit Frozen Stock | Who can post in the frozen period |

!fig Stock settings page with valuation method and negative stock options

:::warning Changing the valuation method
An item's valuation method can only be changed before it has transactions. Choose carefully at the start.
:::

## Related pages

- [Valuation methods](/stock/valuation-methods)
- [Stock reservation](/stock/stock-reservation)
- [Buying settings](/buying/buying-settings)

@@ item-variants | Item variants
@summary Manage items that come in sizes, colours or specifications as one template with many variants.

When an item comes in several versions, such as racking uprights in different heights and finishes or date packs in different weights, create one **template** and let DocFlow generate the **variants**.

## Attributes

1. Go to **Stock › Item Attribute › New**.
2. Create attributes with their values:

| Attribute | Values | Abbreviation |
| --- | --- | --- |
| Height | 2.0 m, 2.5 m, 3.0 m | 20, 25, 30 |
| Finish | Galvanised, Powder Coated | GAL, PC |
| Pack Size | 250 g, 500 g, 1 kg | 250, 500, 1K |

Numeric attributes can use a range, such as 100 to 500 in steps of 50.

## Creating the template and variants

1. Create the template item, for example `UPR`, and tick **Has Variants**.
2. Add the attributes in the **Attributes** table.
3. Save, then click **Create › Single Variant** or **Multiple Variants**.
4. Choose the combinations. DocFlow creates items such as `UPR-30-GAL`.

!fig Item template with attributes and the variants created from it

## What variants share

- Variants copy the template's group, unit, accounts and taxes.
- **Item Variant Settings** decide which fields are copied when the template changes, and whether variants can have their own values.
- Each variant has its own stock, prices, barcodes and reorder levels.
- The template itself cannot be used in transactions.

## Reports by template

Group Stock Balance by **Variant Of** to see total stock across all variants.

## Related pages

- [Items](/stock/items)
- [Product bundles](/selling/product-bundles)

@@ serial-batch | Serial numbers and batches
@summary Track individual units and production lots from receipt to customer, with expiry, warranty, FEFO picking and full traceability.

## When to use which

| Use | Track | Examples |
| --- | --- | --- |
| Batches | Lots made or received together, often with expiry | Food, chemicals, paints, medicines |
| Serial numbers | Individual units | Ovens, generators, laptops, appliances |
| Both | Units within lots | Medical devices |

## Setting up batches

1. On the item, tick **Has Batch No.** and, if relevant, **Has Expiry Date**.
2. Tick **Automatically Create New Batch** and set a **Batch Number Series**, such as `DTS-.YY.-.#####`, or enter supplier batch numbers on receipt.
3. Set **Shelf Life in Days** so expiry dates fill in automatically from the manufacturing date.

Each **Batch** record shows the item, manufacturing date, expiry date, supplier, and the quantity in each warehouse.

## Setting up serial numbers

1. On the item, tick **Has Serial No.**.
2. Set a **Serial Number Series**, such as `CO10-.#####`, or scan the manufacturer's serial on receipt.
3. Set the **Warranty Period** on the item.

Each **Serial No** record shows the warehouse, the purchase it came from, the customer it was sold to, delivery and installation dates, and warranty and AMC expiry.

!fig Serial number record showing purchase, delivery and warranty dates

## Using them in transactions

On every stock transaction, batches and serials are held in a **Serial and Batch Bundle**:

- Click the bundle icon on the item row to pick batches or serials.
- Scan them with a barcode scanner.
- Use **Auto Fetch** to pick by FIFO, or by expiry (FEFO) if set in [stock settings](/stock/stock-settings).

## Expiry

DocFlow blocks delivering expired batches. The **Batch-Wise Balance History** report shows expiry dates; set a notification for batches expiring within 60 days.

## Traceability

The **Serial and Batch Traceability** report shows, for a batch or serial, every transaction from receipt to delivery, including which customers received it.

:::uae Food recalls
If a supplier or the municipality announces a recall, the traceability report shows where the affected batch is in stock and which customers received it. Food safety inspectors expect this information quickly.
:::

## Common problems

:::details "Batch has expired"
Move expired stock to a quarantine warehouse and dispose of it with a material issue.
:::

:::details "Serial No is already delivered"
The serial was delivered earlier. Check its history; it may need a return first.
:::

## Related pages

- [Retaining samples](/stock/retain-sample)
- [Warranty claims](/support/warranty-maintenance)

@@ units-of-measure | Units of measure and conversions
@summary Buy in cartons, store in pieces and sell in boxes, with correct stock, prices and rounding.

## Setting up units

1. Check the **UOM** list: Nos, Box, Carton, Pallet, Kg, Gram, Litre, Metre, Square Metre, Tonne.
2. Tick **Must be Whole Number** for units that cannot be split, such as Nos and Box.
3. Add standard conversions under **UOM Conversion Factor** for units that always convert the same way, such as Kg to Gram.

## Units on items

| Field | Example |
| --- | --- |
| Default Unit of Measure (stock unit) | Nos |
| UOM conversions | Box = 12 Nos; Carton = 72 Nos |
| Default Purchase Unit of Measure | Carton |
| Default Sales Unit of Measure | Box |

!fig Item unit of measure conversions for box and carton

## How conversions work

Every transaction line has a **UOM**, **Conversion Factor** and **Stock Qty**. Buying 10 cartons records 720 Nos in stock. Selling 3 boxes removes 36 Nos. Stock reports are always in the stock unit.

Prices can be set per unit in the price list (Box at AED 120), or once per stock unit (Nos at AED 10) with **Price Not UOM Dependent** on the price list.

## Common problems

:::details "Quantity must be a whole number"
The unit is marked whole number. Use a smaller unit or change the quantity.
:::

:::details "UOM conversion factor required"
Add the conversion on the item before using that unit.
:::

## Related pages

- [Items](/stock/items)
- [Supplier prices](/buying/supplier-price-lists)

@@ pick-list | Pick lists
@summary Tell storekeepers exactly where to pick, from which bin and batch, for one or many orders, and turn the picks into deliveries.

## Creating a pick list

1. From a sales order, click **Create › Pick List**, or go to **Stock › Pick List › New** and click **Get Item Locations** after choosing several sales orders.
2. Choose the **Purpose**: Delivery, Material Transfer for Manufacture, or Material Transfer.
3. DocFlow suggests the warehouse, batch and serial for each item, by FIFO or expiry.
4. Optionally tick **Group Same Items** to pick each item once across orders.
5. Save and print, or open on a tablet.

## Picking

The picker walks the route, enters the **Picked Qty** for each line, and scans batches or serials. Shortages are left at the picked quantity.

!fig Pick list with suggested warehouses and batches for two sales orders

## Turning picks into deliveries

Click **Create › Delivery Note**. One delivery note is created per customer, with only the picked quantities.

:::example Example: morning picking run
Each morning at 6:00, the Al Quoz storekeeper creates one pick list for all orders due that day for Dubai Marina and JBR. Pickers follow one route through the store, and the driver leaves by 8:30.
:::

## Related pages

- [Delivery notes](/selling/delivery-note)
- [Delivery trips](/stock/delivery-trip)

@@ putaway-rules | Putaway rules
@summary Send received goods to the right warehouse or zone automatically, based on priority and capacity.

A **Putaway Rule** tells DocFlow where to put an item when it arrives, so storekeepers do not have to decide each time.

## Creating rules

1. Go to **Stock › Putaway Rule › New**.
2. Choose the **Item**, **Warehouse** and **Capacity** in the stock unit (or another unit with a conversion).
3. Set the **Priority** (1 is highest).
4. Repeat for each warehouse the item can go to.

| Item | Warehouse | Capacity | Priority |
| --- | --- | --- | --- |
| Yoghurt 500 g | JAFZA – Chiller A | 2,000 | 1 |
| Yoghurt 500 g | JAFZA – Chiller B | 1,500 | 2 |
| Dates 5 kg | JAFZA – Ambient | 10,000 | 1 |

!fig Putaway rules for an item across chiller and ambient warehouses

## Applying rules

On a purchase receipt or stock entry, tick **Apply Putaway Rule**. DocFlow splits the received quantity across warehouses by priority and free capacity. Any quantity that does not fit stays in the original warehouse and is flagged.

:::tip Temperature zones
For food distribution, set chilled items only to chiller zones. A putaway rule stops staff receiving yoghurt into an ambient warehouse.
:::

## Related pages

- [Warehouses](/stock/warehouses)
- [Purchase receipts](/buying/purchase-receipt)

@@ stock-reservation | Stock reservation
@summary Lock specific stock, batches or serial numbers for a customer order or work order so nobody else can use it.

By default, a sales order reduces **projected** quantity but does not stop the physical stock from being delivered to someone else. **Stock Reservation** locks it.

## Switching it on

Tick **Enable Stock Reservation** in [stock settings](/stock/stock-settings). Choose whether partial reservation is allowed.

## Reserving for a sales order

1. On a submitted sales order, click **Stock Reservation › Reserve**.
2. Choose the warehouse and quantity per line, and optionally specific batches or serials.
3. Submit. **Stock Reservation Entries** are created.

!fig Sales order with reserved stock entries per warehouse

Reserved stock is excluded from available quantity for other orders. When you deliver against the order, the reservation is used and released.

## Reserving for production

Work orders and production plans can also reserve raw materials, so components for an urgent job are not used elsewhere.

## Releasing

Click **Unreserve** to free the stock, for example if the customer cancels.

:::example Example: a project allocation
A hotel opening in Downtown Dubai has ordered 40 combi ovens for delivery over three months. Al Waha Trading reserves 40 serial numbers so walk-in buyers cannot take them.
:::

## Related pages

- [Sales orders](/selling/sales-order)
- [Pick lists](/stock/pick-list)

@@ valuation-methods | Stock valuation methods
@summary How FIFO and moving average work with worked numbers, how valuation is reposted and what to do when values look wrong.

## FIFO

**First In, First Out** assumes the oldest stock is used first. Each receipt forms a layer; issues consume the oldest layers at their cost.

:::example Example: FIFO
Received 100 units at AED 10, then 100 at AED 12. Delivering 150 units costs 100 × 10 + 50 × 12 = AED 1,600. The remaining 50 are valued at AED 12.
:::

## Moving average

**Moving Average** recalculates one average cost after each receipt.

:::example Example: moving average
Same receipts: after both, the average is (1,000 + 1,200) ÷ 200 = AED 11. Delivering 150 units costs 150 × 11 = AED 1,650. The remaining 50 are valued at AED 11.
:::

| | FIFO | Moving average |
| --- | --- | --- |
| Best for | Food, perishables, trading with changing prices | Manufacturing, commodities |
| Cost of goods sold | Follows purchase layers | Smooths price changes |
| When prices rise | Lower cost of sales, higher closing stock | Costs move gradually |

!fig Stock ledger showing FIFO queue and valuation rate after each transaction

## Reposting

If you post a receipt or issue with an earlier date, DocFlow **reposts** every later transaction for that item and warehouse so values stay correct. Large reposts run in the background and appear in **Repost Item Valuation**, with their status.

## When values look wrong

| Symptom | Likely cause |
| --- | --- |
| Valuation rate is zero | Receipt with no rate, or a free item |
| Valuation suddenly very high | A small quantity received at a wrong rate, or negative stock corrected |
| Stock and ledger differ | Manual journals to stock accounts, or a repost still running |

Correct the source document, or use a stock reconciliation to set the right rate.

:::warning Avoid back-dating after closing
Back-dating into a closed month changes figures already reported. Use the frozen dates in [accounts settings](/accounting/accounts-settings) and stock settings.
:::

## Related pages

- [Stock settings](/stock/stock-settings)
- [Landed costs](/stock/landed-cost)

@@ delivery-trip | Delivery trips and routes
@summary Plan vehicle routes for several deliveries, notify customers of arrival times and track vehicle costs.

## Planning a trip

1. Go to **Stock › Delivery Trip › New**.
2. Choose the **Driver**, **Vehicle** and **Departure Time**.
3. Click **Get Delivery Notes** for the day, or add stops with customer addresses.
4. Arrange stops in order, or click **Optimise Route** if a maps integration is set up.
5. Submit and click **Notify Customers** to email each customer their expected arrival time.

!fig Delivery trip with driver, vehicle and ordered stops in Dubai

## During the trip

The driver can open the trip on a phone, mark each stop as visited, and capture the customer's signature or a photo of the stamped delivery note.

## Vehicles and costs

Record each vehicle with plate number, make, insurance and registration expiry. After trips, add **Vehicle Log** entries with odometer readings, fuel and service costs, so you can see cost per kilometre and per delivery.

:::uae Plan around traffic and tolls
Plan routes outside peak hours on Sheikh Zayed Road and Emirates Road where possible. Record Salik and Darb toll charges against the vehicle to see the true cost of each route.
:::

## Related pages

- [Delivery notes](/selling/delivery-note)
- [Shipping rules](/accounting/shipping-rules)

@@ goods-in-transit | Goods in transit
@summary Track stock moving between warehouses, emirates or countries with two-step transfers.

When stock leaves one place but has not reached another, it should sit in a **Goods In Transit** warehouse, so it is neither double-counted nor lost.

## Setting up

Create a warehouse with **Warehouse Type = Transit**, and set it as the **Default In-Transit Warehouse** on the source warehouses or the company.

## Two-step transfer

1. Create a **Stock Entry** of type Material Transfer from the source warehouse and tick **Add to Transit**. Stock moves to the transit warehouse.
2. When the truck arrives, open the entry and click **End Transit**. A second entry moves stock to the target warehouse.

!fig Stock entry moving goods into the goods in transit warehouse

## Imports in transit

For imports you own from the port of loading (for example FOB), receive them into goods in transit when you get the bill of lading, then transfer to the warehouse after customs clearance.

:::tip Review transit weekly
Run Stock Balance for the transit warehouse every week. Anything older than the normal transit time needs follow-up.
:::

## Related pages

- [Stock entries](/stock/stock-entry)
- [Importing goods](/buying/import-purchases)

@@ inventory-dimensions | Inventory dimensions
@summary Track stock by extra attributes such as project, owner or quality grade, inside the same warehouse.

Sometimes the warehouse is not enough. You may need to know which **project** stock belongs to, whether stock is **consignment** owned by a supplier, or its **grade**.

## Creating a dimension

1. Go to **Stock › Inventory Dimension › New**.
2. Choose the **Reference Document**, such as Project, or a custom list such as "Stock Owner".
3. Choose the transactions it applies to, and whether it is mandatory.
4. Save. A new field appears on stock transactions and a filter in stock reports.

!fig Inventory dimension for project added to stock transactions

## Using it

Stock is now tracked per warehouse **and** per dimension value. A delivery for Project A can only take stock tagged to Project A.

:::example Example: project stock
A fit-out contractor stores materials for several towers in one Al Quoz warehouse. With a Project dimension, the storekeeper sees how many tiles belong to each tower while keeping one physical warehouse.
:::

## Related pages

- [Project costing](/projects/project-costing)
- [Accounting dimensions](/accounting/cost-centres-budgets)

@@ barcode-scanning | Barcodes and scanning
@summary Speed up receiving, picking, counting and selling with barcodes, scanners and printed labels.

## Adding barcodes

On each item, add barcodes in the **Barcodes** table with the type (EAN-13, UPC-A, Code-128) and the **UOM** it represents. A carton barcode can add 72 pieces at once.

!fig Item barcodes table with EAN codes for piece and carton

## Scanning

Every stock and sales form has a **Scan Barcode** field. Scan with a USB or Bluetooth scanner, or a phone camera. DocFlow adds the item with the right unit, or increases the quantity if it is already there. Batch and serial barcodes fill those fields too.

## Labels

Use a label print format to print barcodes for items, batches, bins or serial numbers on a thermal printer. Print from the item list (select and **Print**) or from a purchase receipt for all received items.

:::uae Retail barcodes
Retailers in the UAE generally require GS1 barcodes on products they stock. Register with GS1 UAE if you supply supermarkets and hypermarkets.
:::

## Related pages

- [Point of sale](/accounting/pos)
- [Stock reconciliation](/stock/stock-reconciliation)

@@ retain-sample | Retaining samples
@summary Keep a sample from each batch for quality checks, customer complaints and food safety inspections.

Food, beverage, chemical and pharmaceutical businesses often keep a small sample of every batch they receive or produce, so they can test it later if there is a complaint or an inspection.

## Setting up

1. Create a **Sample Retention Warehouse**, for example *Quality Samples – JAFZA*, and set it in [stock settings](/stock/stock-settings).
2. On each item, tick **Retain Sample** and set the **Max Sample Quantity**.

## Retaining a sample

1. On the purchase receipt or manufacture entry, enter the **Sample Quantity** for the batch.
2. After submitting, click **Create › Retention Stock Entry**. DocFlow moves the sample quantity of that batch to the sample retention warehouse.

!fig Retention stock entry moving samples of a batch to the quality samples warehouse

Retained samples stay linked to their batch, so the **Batch-Wise Balance History** report shows them alongside the batch.

## Disposing of samples

When the retention period ends (often the shelf life plus a margin), issue the samples with a material issue to a write-off account.

:::uae Food safety
Municipality food safety teams may ask for records of retained samples and test results. Keep the inspection results linked to the batch in DocFlow.
:::

## Related pages

- [Serial numbers and batches](/stock/serial-batch)
- [Quality inspections](/quality/inspection)
