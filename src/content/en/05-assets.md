@@ overview | Assets at a glance
@summary Register fixed assets, depreciate them automatically and track where each one is.

The Assets module keeps a register of everything your company owns and uses for more than a year: vehicles, forklifts, machinery, IT equipment and office fit-out. It works out depreciation, posts it to the ledger and keeps a history of every movement, repair and revaluation.

!fig Assets workspace with asset value by category and upcoming depreciation

## The asset life cycle

1. **Purchase**: buy the asset through a purchase receipt or invoice.
2. **Register**: create the asset record with its category, location and custodian.
3. **Depreciate**: DocFlow posts depreciation on the schedule you set.
4. **Maintain and move**: record repairs, transfers and value changes.
5. **Dispose**: sell or scrap the asset and post the gain or loss.

@@ asset-category | Asset categories
@summary Group similar assets and set their depreciation rules and accounts once.

An asset category holds the defaults for a type of asset: which accounts to use and how to depreciate it.

## Creating a category

1. Go to **Assets › Asset Category › New**.
2. Enter a name, for example `Motor Vehicles`.
3. In **Accounts**, set the **Fixed Asset Account**, **Accumulated Depreciation Account** and **Depreciation Expense Account** for each company.
4. In **Finance Books**, set the depreciation method, number of depreciations and frequency.
5. Save.

!fig Asset category form for motor vehicles with accounts and depreciation settings

## Typical categories in a UAE trading or contracting company

| Category | Method | Useful life |
| --- | --- | --- |
| Motor Vehicles (pickups, vans) | Straight line | 5 years |
| Heavy Equipment (forklifts, cranes) | Straight line | 7–10 years |
| Computers and IT | Straight line | 3 years |
| Furniture and Fixtures | Straight line | 5 years |
| Leasehold Improvements | Straight line | Shorter of lease term and useful life |

:::tip Check with your auditor
Useful lives are a management estimate. Agree them with your auditor before go-live. For Corporate Tax purposes, depreciation in your IFRS accounts is generally accepted, subject to specific adjustments.
:::

@@ asset-purchase | Buying and registering assets
@summary Create asset records from purchases, or register assets you already own.

## From a purchase

1. Create the item with **Is Fixed Asset** ticked and choose its **Asset Category**.
2. Raise a purchase order and receipt as usual.
3. When the purchase receipt is submitted, DocFlow creates a draft **Asset** for each unit (or one asset for the lot, depending on settings).
4. Open the draft asset, check the details and submit it.

!fig Draft asset created automatically from a purchase receipt

:::example Example: three delivery vans
Al Waha Trading buys three Toyota Hiace vans for AED 112,000 each plus 5% VAT. The purchase receipt creates three draft assets. The fleet officer adds each van's plate number (Dubai), chassis number and custodian, then submits them.
:::

## Existing assets

For assets bought before go-live, create the asset directly and tick **Is Existing Asset**. Enter the gross purchase amount, the purchase date and the **Opening Accumulated Depreciation** as at your go-live date.

## Useful fields

| Field | Use |
| --- | --- |
| Location | Which site the asset is at, for example "Mussafah Yard" |
| Custodian | The employee responsible for it |
| Department / Cost Centre | Where the depreciation is charged |
| Insurance details | Policy number, insurer, start and end dates |
| Maintenance required | Tick to create maintenance schedules |

@@ depreciation | Depreciation
@summary How DocFlow calculates and posts depreciation, and how to change a schedule.

## Methods

| Method | How it works |
| --- | --- |
| Straight Line | Equal amount every period |
| Double Declining Balance | Higher charges in the early years |
| Written Down Value | A fixed percentage of the remaining value each period |
| Manual | You enter each amount |

## The depreciation schedule

When you submit an asset, DocFlow builds a schedule with one row per period. Each row shows the date, the depreciation amount and the accumulated total.

!fig Depreciation schedule for a delivery van showing monthly rows

## Posting

Depreciation entries post automatically on their due dates through a daily background job. To post manually, open the asset and click **Make Depreciation Entry** on the relevant row.

:::example Example: forklift depreciation
Saqr Steel buys a forklift for AED 84,000 with an expected salvage value of AED 12,000 and a 6-year life. Straight-line monthly depreciation is (84,000 − 12,000) ÷ 72 = AED 1,000 a month.
:::

## Finance books

Use separate **Finance Books** if you need two depreciation views, for example one for your IFRS accounts and one for group reporting or tax workings.

@@ asset-movement | Moving, repairing and revaluing assets
@summary Record transfers between sites, repairs, capitalised upgrades and value adjustments.

## Asset movement

1. Go to **Assets › Asset Movement › New**.
2. Choose the **Purpose**: Transfer, Issue (to an employee) or Receipt (back from an employee).
3. Add the assets with their source and target locations or employees.
4. Submit.

!fig Asset movement transferring a generator from Mussafah to the Dubai site

## Repairs

Record repairs with **Asset Repair**. Enter the failure date, description and repair cost. If the repair extends the asset's life, tick **Capitalise Repair Cost** and the cost is added to the asset value and spread over its remaining life.

## Value adjustments

If an asset's value drops, for example after damage, use **Asset Value Adjustment** to post an impairment. DocFlow recalculates the remaining depreciation.

## Asset maintenance

For regular servicing, such as quarterly generator checks or annual vehicle registration and inspection, create an **Asset Maintenance** record with tasks, a frequency and the assigned technician. DocFlow creates to-dos when each task is due.

:::uae Vehicle registration renewals
Add a yearly maintenance task for each vehicle's registration renewal (with the RTA in Dubai, or the relevant emirate's licensing authority) and its insurance. The assigned person gets a reminder before the due date.
:::

@@ asset-disposal | Selling and scrapping assets
@summary Remove assets from the register and post the gain or loss on disposal.

## Selling an asset

1. Open the asset and click **Create › Sell Asset**. A sales invoice opens with the asset as the item.
2. Enter the customer and selling price, and apply VAT if the sale is taxable.
3. Submit. DocFlow posts depreciation up to the sale date, removes the cost and accumulated depreciation, and records the gain or loss.

!fig Sales invoice for the sale of a used delivery van

## Scrapping an asset

Open the asset and click **Scrap Asset**. DocFlow posts depreciation up to today and writes off the remaining book value as a loss.

:::uae VAT on asset sales
Selling a used business asset is normally a taxable supply at 5%, even if it is sold at a loss. Make sure the sales invoice carries the standard VAT template.
:::

## Asset reports

| Report | Shows |
| --- | --- |
| Fixed Asset Register | Every asset with cost, depreciation and book value |
| Asset Depreciation Ledger | Depreciation posted in a period |
| Asset Depreciations and Balances | Movement by category, as needed for notes to the accounts |
| Asset Maintenance | Upcoming and overdue maintenance tasks |

!fig Fixed asset register filtered by category

@@ composite-assets | Composite assets and capitalisation
@summary Build one asset from several purchases, such as a production line or an office fit-out.

Some assets are assembled from many invoices: machines, installation labour, electrical works and freight. **Asset Capitalisation** combines them into one asset with one depreciation schedule.

1. Buy the components as normal. Use a capital work-in-progress (CWIP) account for costs that are not yet ready for use.
2. Go to **Assets › Asset Capitalisation › New**.
3. Choose the **Target Item**, for example "Laser Cutting Line".
4. Add the **Consumed Stock Items**, **Consumed Assets** and **Service Costs** (installation, commissioning).
5. Submit. A new asset is created at the combined cost, and depreciation starts from the available-for-use date.

!fig Asset capitalisation combining machine, installation and freight costs

:::example Example: a new laser cutter
Saqr Steel imports a laser cutter for AED 610,000, pays AED 38,000 for installation and AED 22,000 for electrical upgrades. The capitalised asset value is AED 670,000, depreciated over 10 years from the commissioning date.
:::

## Office fit-outs

For a new office or showroom, collect the contractor's invoices in CWIP, then capitalise them as **Leasehold Improvements** when the space is ready, and depreciate over the shorter of the lease term and the useful life.

@@ shift-depreciation | Shift-based depreciation
@summary Depreciate machines faster when they run more shifts.

Machines that run double or triple shifts wear out faster. **Asset Shift Factors** let depreciation follow usage.

1. Go to **Assets › Asset Shift Factor** and create factors, such as Single (1.0), Double (1.5) and Triple (2.0).
2. On the asset's finance book, tick **Shift Based**.
3. When usage changes, create an **Asset Shift Allocation** for the period and choose the shift factor.

!fig Asset shift allocation changing a press from single to double shift

DocFlow recalculates the remaining schedule using the new factor.

:::tip Agree the policy with your auditor
Shift-based depreciation is an accounting estimate. Document the policy and apply it consistently.
:::

@@ asset-settings | Asset settings and reports
@summary Configure depreciation posting and keep the fixed asset register reconciled.

## Asset settings

Open **Assets › Asset Settings** (within Accounts Settings) to choose:

- **Book Asset Depreciation Entry Automatically**: on for monthly automatic posting.
- **Calculate depreciation on daily basis**: on, for exact amounts in partial months.
- **Depreciation posting date**: the last day of each month is the most common choice.

!fig Asset depreciation settings with automatic posting enabled

## Year-end reconciliation

1. Run **Asset Depreciations and Balances** for the year.
2. Compare the closing cost and accumulated depreciation by category with the general ledger balances.
3. Investigate differences, which are usually manual journals posted to asset accounts.

:::uae Physical verification
Many auditors ask for a yearly physical check of fixed assets. Print the register by location, tick off each asset, and record movements or disposals before closing the year.
:::
