@@ overview | Assets at a glance
@summary Register fixed assets, depreciate them automatically, track location, custodian, maintenance and value changes, and dispose of them with the right accounting and VAT.

The Assets module keeps a register of everything your company owns and uses for more than a year: vehicles, forklifts, machinery, IT equipment, office fit-out and leasehold improvements. It calculates depreciation, posts it to the ledger and keeps the history of every movement, repair, revaluation and sale.

!fig Assets workspace with asset value by category and upcoming depreciation

## The asset life cycle

| Stage | Document | Accounting effect |
| --- | --- | --- |
| Buy | Purchase receipt / purchase invoice | Dr Asset (or CWIP), Cr Supplier |
| Capitalise | Asset (submitted) or Asset Capitalisation | Asset becomes available for use |
| Depreciate | Depreciation schedule → journal entries | Dr Depreciation expense, Cr Accumulated depreciation |
| Move and maintain | Asset Movement, Asset Maintenance, Asset Repair | Repairs expensed or capitalised |
| Change value | Asset Value Adjustment | Impairment or revaluation |
| Dispose | Sales invoice or scrap | Gain or loss on disposal |

## Key records

| Record | Purpose |
| --- | --- |
| Asset Category | Accounts and depreciation defaults for a type of asset |
| Asset | One item in the register, with value, location and schedule |
| Location | Where assets are (a tree: emirate › site › room) |
| Asset Movement | Transfer between locations or employees |
| Asset Maintenance / Repair | Preventive maintenance tasks and repair records |
| Asset Value Adjustment | Change in book value |
| Asset Capitalisation | Building one asset from stock items and services |

## Reports

| Report | Shows |
| --- | --- |
| Fixed Asset Register | Every asset with cost, accumulated depreciation and net book value |
| Asset Depreciation Ledger | Depreciation posted per asset and period |
| Asset Depreciations and Balances | Movements by category: opening, additions, disposals, depreciation, closing (the note to the financial statements) |
| Asset Activity | Movements and maintenance |

:::uae Fixed assets and tax
Under UAE Corporate Tax, accounting depreciation under IFRS is generally accepted in computing taxable income. For VAT, input tax on capital assets is recovered in the period of purchase like any other expense, subject to the usual blocked items (for example certain passenger cars available for private use).
:::

## Related pages

- [Asset categories](/assets/asset-category)
- [Buying and capitalising assets](/assets/asset-purchase)
- [Depreciation](/assets/depreciation)

@@ asset-category | Asset categories
@summary Group assets by type and set the accounts, depreciation method, useful life and finance books that every asset in the category inherits.

## Creating a category

1. Go to **Assets › Asset Category › New**.
2. Enter the name, for example "Motor Vehicles".
3. Tick **Enable Capital Work in Progress Accounting** if assets in this category are built or installed over time.
4. In **Finance Books**, enter the depreciation method, total number of depreciations and frequency (in months).
5. In **Accounts**, add a row per company with the accounts below.
6. Save.

!fig Asset category for motor vehicles with depreciation settings and accounts per company

## Accounts per company

| Account | Example |
| --- | --- |
| Fixed Asset Account | Motor Vehicles |
| Accumulated Depreciation Account | Accumulated Depreciation – Vehicles |
| Depreciation Expense Account | Depreciation – Vehicles |
| Capital Work in Progress Account | CWIP (if enabled) |

## Typical categories for UAE companies

| Category | Method | Useful life |
| --- | --- | --- |
| Motor vehicles | Straight line | 4–5 years |
| Forklifts and material handling | Straight line | 5–7 years |
| Plant and machinery | Straight line | 8–15 years |
| Computers and IT | Straight line | 3 years |
| Furniture and fixtures | Straight line | 5 years |
| Leasehold improvements (fit-out) | Straight line | Lower of lease term and useful life |
| Tools and equipment | Written down value | 3–5 years |

These are common policies, not legal rules; agree them with your auditor.

## Finance books

Use more than one **Finance Book** when you need two sets of depreciation, for example IFRS book and a group reporting book with different lives. Each category can have a row per finance book.

## Non-depreciable assets

Land and artwork are not depreciated. Create a category without depreciation and untick **Calculate Depreciation** on those assets.

## Related pages

- [Depreciation](/assets/depreciation)
- [Asset settings](/assets/asset-settings)

@@ asset-purchase | Buying and capitalising assets
@summary Record asset purchases through the buying cycle, create asset records automatically, handle capital work in progress, opening assets and assets built from stock.

## Asset items

An asset is bought as an **item** with **Is Fixed Asset** ticked and an **Asset Category** set. It is not a stock item. Example: item "Toyota Hilux 2026" in category Motor Vehicles.

## Buying an asset

1. Create a [purchase order](/buying/purchase-order) for the asset item, as for any purchase.
2. Create a **Purchase Receipt** when the asset arrives. If the item has **Auto Create Assets on Purchase** ticked, DocFlow creates a draft asset per unit.
3. Create the **Purchase Invoice** from the receipt; VAT is recorded as input tax.
4. Open each draft **Asset**, complete location, custodian, **Available for Use Date** and depreciation details, and submit.

!fig Asset form created from a purchase receipt with location, custodian and depreciation schedule

You can also buy directly with a purchase invoice with **Update Stock** ticked, which acts as both receipt and invoice.

## Asset form fields

| Field | Example |
| --- | --- |
| Asset Name | Hilux – Plate D 45821 |
| Item Code and Category | Toyota Hilux 2026 / Motor Vehicles |
| Location | Dubai – Al Quoz Warehouse |
| Custodian / Department | Driver employee / Logistics |
| Purchase Date / Available for Use Date | 10-02-2026 / 15-02-2026 |
| Gross Purchase Amount | 118,000.00 (excluding recoverable VAT) |
| Calculate Depreciation | Ticked |
| Serial number, insurance, maintenance flags | Chassis number, insurer, policy end date |

## Capital work in progress (CWIP)

For assets built or installed over months, such as a warehouse racking system or office fit-out:

1. Book all invoices for the project to the **CWIP account** (category has CWIP enabled), often through a [project](/projects/project-setup).
2. When ready, create the asset with **Gross Purchase Amount** equal to the CWIP total, or use **Asset Capitalisation** to pull the costs together.
3. Submitting moves the cost from CWIP to the fixed asset account.

## Asset Capitalisation

Use **Asset Capitalisation** to build an asset from stock items, other assets and service costs, for example assembling a production line from parts in stock plus installation charges. It consumes stock and creates or adds to an asset.

## Opening (existing) assets

At go-live, create each asset with **Is Existing Asset** ticked, the original purchase date and cost, **Opening Accumulated Depreciation**, and the number of depreciations already booked. DocFlow schedules only the remaining depreciation.

:::example Example
Lulu Pearl Foods FZE buys a forklift for AED 85,000 plus VAT AED 4,250. The purchase invoice debits Forklifts AED 85,000 and Recoverable VAT AED 4,250. The asset is placed in "JAFZA – Warehouse" with the warehouse supervisor as custodian and depreciated over 6 years.
:::

## Related pages

- [Asset categories](/assets/asset-category)
- [Purchase invoices](/accounting/purchase-invoice)

@@ depreciation | Depreciation
@summary How DocFlow calculates and posts depreciation: methods, schedules, pro-rata first periods, salvage value, automatic posting, manual schedules and changing useful life.

## Methods

| Method | How it works | Typical use |
| --- | --- | --- |
| Straight Line | Equal amount each period | Most assets |
| Double Declining Balance | Twice the straight-line rate on the remaining value | Fast-ageing equipment |
| Written Down Value | Fixed percentage of the remaining value | Tools, some IT |
| Manual | Your own schedule | Special cases |

## The depreciation schedule

When you submit an asset, DocFlow builds the schedule: one row per period with the date, depreciation amount and accumulated total. Depreciation starts from the **Available for Use Date**; tick **Depreciate based on daily pro-rata** in the finance book to charge a part period in the first and last month.

!fig Depreciation schedule for a vehicle showing monthly amounts and accumulated depreciation

| Input | Effect |
| --- | --- |
| Gross purchase amount | Cost to depreciate |
| Expected value after useful life (salvage) | Not depreciated |
| Total number of depreciations | Number of periods |
| Frequency of depreciation (months) | 1 = monthly, 12 = yearly |
| Depreciation start date | First posting date |

:::example Example: straight line monthly
A vehicle costs AED 118,000 with salvage value AED 10,000, depreciated monthly over 60 months. Monthly depreciation is (118,000 − 10,000) ÷ 60 = AED 1,800.
:::

## Posting depreciation

Depreciation entries are posted automatically by a daily scheduled job on each schedule date, if **Automatically Post Depreciation Entries** is on in [asset settings](/assets/asset-settings). Each posting is a journal entry:

| Account | Debit | Credit |
| --- | --- | --- |
| Depreciation – Vehicles | 1,800 | |
| Accumulated Depreciation – Vehicles | | 1,800 |

You can also post a row manually from the schedule with **Make Depreciation Entry**.

## Changing the schedule

| Change | How |
| --- | --- |
| Useful life or salvage value | Asset › **Adjust Asset Value** or **Modify Depreciation**, which creates a new schedule for the remaining periods |
| Impairment | [Asset Value Adjustment](/assets/asset-disposal) |
| Usage-based depreciation | [Shift-based depreciation](/assets/shift-depreciation) |

## Month-end check

Before closing a month, open **Asset Depreciation Ledger** for the period and confirm every asset has its entry. Failed postings show in the Error Log, usually because an accounting period is closed or a cost centre is missing.

## Related pages

- [Month-end close](/guides/month-end-close)
- [Period closing](/accounting/period-closing)

@@ asset-movement | Locations, movements, maintenance and repairs
@summary Know where every asset is and who holds it, transfer assets between sites and employees, schedule preventive maintenance and record repairs.

## Locations

Create a **Location** tree matching your sites, for example United Arab Emirates › Dubai › Al Quoz Warehouse › Racking Area. Locations can store coordinates, so assets appear on a map view.

## Moving assets

1. Go to **Assets › Asset Movement › New**, or open the asset and click **Move**.
2. Choose **Purpose**: Issue (to an employee), Receipt (back from an employee) or Transfer (between locations).
3. Add the assets with source and target location or employee.
4. Submit. The asset record updates its current location and custodian.

!fig Asset movement transferring two laptops from head office to the Abu Dhabi branch

| Purpose | Example |
| --- | --- |
| Issue | Laptop issued to a new accountant on joining |
| Receipt | Laptop returned at resignation, before final settlement |
| Transfer | Forklift moved from JAFZA to Al Quoz warehouse |

## Preventive maintenance

1. Tick **Maintenance Required** on the asset.
2. Create an **Asset Maintenance Team** with a manager and members.
3. Create **Asset Maintenance** for the asset: add tasks such as "Forklift service", periodicity (monthly, quarterly, yearly), assignee and next due date.
4. DocFlow creates to-dos and the **Asset Maintenance Log** records each completed task.

| Asset | Task | Frequency |
| --- | --- | --- |
| Forklift | Service and safety check | Every 3 months |
| Delivery vans | Service, tyres | Every 10,000 km / 6 months |
| Fire extinguishers | Inspection | Yearly (Civil Defence) |
| Generators | Load test | Monthly |

## Repairs

Create an **Asset Repair** when something breaks: failure date, description, repair cost, stock items consumed and the purchase invoice from the workshop. Tick **Capitalise Repair Cost** when the repair extends the asset's life; the cost is then added to the asset value and depreciation is recalculated. Otherwise it is expensed.

## Vehicles and registrations

Keep Mulkiya (registration) expiry, insurance expiry and Salik tag on the asset (custom fields if needed) and set [notifications](/getting-started/notifications) 30 days before expiry.

## Related pages

- [Assets overview](/assets/overview)
- [Custom fields](/framework/custom-fields)

@@ asset-disposal | Selling, scrapping and revaluing assets
@summary Dispose of assets by sale or scrap with the right gain or loss and VAT, adjust values for impairment, and split or return assets.

## Selling an asset

1. Create a **Sales Invoice** to the buyer with the asset item, and tick **Is Fixed Asset** on the row and choose the **Asset**.
2. Enter the selling price; VAT at 5% applies to sales of business assets in the UAE.
3. Submit. DocFlow posts depreciation up to the sale date, removes the asset's cost and accumulated depreciation, and books the gain or loss.

!fig Sales invoice selling a used vehicle with the asset selected on the item row

:::example Example: selling a vehicle
A vehicle cost AED 118,000; accumulated depreciation at the sale date is AED 79,200, so net book value is AED 38,800. It is sold for AED 42,000 + VAT AED 2,100.

| Account | Debit | Credit |
| --- | --- | --- |
| Customer | 44,100 | |
| Accumulated Depreciation – Vehicles | 79,200 | |
| Motor Vehicles | | 118,000 |
| VAT Output | | 2,100 |
| Gain on Disposal of Assets | | 3,200 |
:::

## Scrapping an asset

Open the asset and click **Scrap Asset**. DocFlow posts depreciation up to the scrap date and writes off the net book value to the disposal account set in the company. Status becomes Scrapped. If scrap is sold for value, invoice it separately.

## Asset value adjustment

Use **Asset Value Adjustment** for impairment or revaluation: enter the new value and the date. The difference is posted to the adjustment account, and future depreciation is recalculated from the new value.

!fig Asset value adjustment reducing the value of damaged equipment

## Other actions

| Action | When |
| --- | --- |
| Split Asset | Separate part of a grouped asset (for example 10 laptops bought as one asset) |
| Return | Return to supplier with a debit note before use |
| Restore asset | Cancel the scrap or sale to reinstate it |

:::uae Disposals and VAT
Selling a used business asset is normally a standard-rated supply at 5%, unless it is exported or another relief applies. Scrapping without a sale has no output VAT, but keep records of why the asset was written off.
:::

## Related pages

- [Sales invoices](/accounting/sales-invoice)
- [Depreciation](/assets/depreciation)

@@ composite-assets | Composite and grouped assets
@summary Build one asset from many components, track grouped assets bought together, and decide when to split or combine records.

## Composite assets

A **composite asset** is made of several parts that work as one, for example a cold room built from panels, compressors, controls and installation. Tick **Is Composite Asset** on the asset and use **Asset Capitalisation** to add:

| Source | Example |
| --- | --- |
| Stock items | Insulated panels, compressor units from your warehouse |
| Other assets | An existing compressor transferred into the cold room |
| Service items | Installation and electrical work invoiced by a contractor |

Until the composite asset is complete, its cost sits in capital work in progress; submitting the capitalisation makes it available for use and starts depreciation.

!fig Asset capitalisation combining stock items, a service and an existing asset into a cold room

## Grouped assets

When you buy many identical low-value items, such as 25 office chairs, you can create a single asset with quantity 25 instead of 25 records. Use **Split Asset** later if some are moved or sold separately.

| Approach | Use when |
| --- | --- |
| One asset per unit | Vehicles, machines, laptops with custodians |
| One grouped asset | Furniture lots, small tools |
| Composite asset | Systems assembled from parts |

## Components replaced later

When a major part is replaced, for example a forklift engine, record an [asset repair](/assets/asset-movement) with **Capitalise Repair Cost**, or scrap the old component if it was capitalised separately.

## Related pages

- [Buying and capitalising assets](/assets/asset-purchase)
- [Selling and scrapping](/assets/asset-disposal)

@@ shift-depreciation | Shift-based depreciation
@summary Depreciate machines faster when they run extra shifts, using shift factors on the depreciation schedule.

Some machinery wears out faster when it runs two or three shifts a day. **Shift-based depreciation** adjusts each period's charge using a factor for the shift worked.

## Setting up

1. Create **Asset Shift Factor** records, for example Single shift = 1, Double shift = 1.5, Triple shift = 2. Mark one as default.
2. In the asset's finance book, tick **Shift Based** (straight-line method).
3. Submit the asset. Each row of the schedule has a shift name, starting with the default.

## Changing shifts

When production moves to double shifts for a busy season, create an **Asset Shift Allocation** for the asset and change the shift on the upcoming schedule rows. DocFlow recalculates the remaining rows so the total still equals the depreciable amount.

!fig Asset shift allocation changing future months to double shift

:::example Example
Saqr Steel's CNC plasma cutter normally runs one shift. From March to June 2026 it runs double shifts for a large mezzanine order. Those four months carry 1.5 times the normal charge, and later months are reduced so the machine is fully depreciated at the end of its life.
:::

## When to use it

| Use shift depreciation | Use normal straight line |
| --- | --- |
| Production machines with variable usage | Vehicles, IT, furniture |
| Policy approved by your auditor | Simple asset registers |

## Related pages

- [Depreciation](/assets/depreciation)
- [Manufacturing overview](/manufacturing/overview)

@@ asset-settings | Asset settings and reports
@summary Configure company asset accounts, automatic depreciation posting and CWIP rules, and use the asset reports for the year-end note and audits.

## Company asset accounts

On the **Company › Assets** tab:

| Field | Example |
| --- | --- |
| Accumulated Depreciation Account | Accumulated Depreciation |
| Depreciation Expense Account | Depreciation |
| Gain/Loss Account on Asset Disposal | Gain/Loss on Disposal of Assets |
| Depreciation Cost Centre | Main |
| Capital Work in Progress Account | CWIP |
| Asset Received But Not Billed | Asset Received But Not Billed |

Category accounts override these when set.

## Accounts Settings for assets

| Setting | Recommended |
| --- | --- |
| Automatically Post Depreciation Entries | On |
| Book Asset Depreciation Entry Automatically | On |
| Calculate depreciation on a daily pro-rata basis | Per your policy |

!fig Asset settings on the company form with depreciation and disposal accounts

## Physical verification

Once a year, export the **Fixed Asset Register** by location and verify assets on site. Record differences with movements, scrapping or value adjustments, and attach the signed count sheets to a note in DocFlow.

## Year-end reports

| Report | For |
| --- | --- |
| Asset Depreciations and Balances | The fixed asset note: cost and depreciation roll-forward by category |
| Fixed Asset Register | Asset listing for auditors |
| Asset Depreciation Ledger | Proof of depreciation postings |
| General Ledger (asset accounts) | Reconcile to the register |

:::tip Reconcile monthly
The total of the Fixed Asset Register should match the asset and accumulated depreciation accounts in the trial balance. A difference usually means a journal entry posted directly to an asset account.
:::

## Related pages

- [Company](/organization/company)
- [Financial reports](/accounting/financial-reports)
