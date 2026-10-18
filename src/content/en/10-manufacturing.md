@@ overview | Manufacturing at a glance
@summary Plan and run production: bills of materials, workstations and routings, production plans and material requirements, work orders and job cards, costing, scrap and quality.

The Manufacturing module turns raw materials into finished goods and records every step, so stock, costs and capacity are always up to date. It suits make-to-stock producers (food repacking, chemicals, furniture) and make-to-order fabricators (steel structures, joinery, signage).

!fig Manufacturing workspace with open work orders, job cards and production by item

## The production flow

| Step | Document | What happens |
| --- | --- | --- |
| Define the product | [BOM](/manufacturing/bom) | Materials, quantities, operations and costs |
| Define where work happens | [Workstations and routings](/manufacturing/workstations-routing) | Machines, hourly rates, operation sequence |
| Plan | [Production plan](/manufacturing/production-plan) | What to make, what to buy, when |
| Authorise | [Work order](/manufacturing/work-order) | Quantity to produce from a BOM |
| Execute | Job cards | Time and quantity per operation |
| Move materials | Stock entries | Transfer to WIP, manufacture, scrap |
| Check | [Quality inspection](/quality/inspection) | Incoming, in-process and final |
| Analyse | [Reports](/manufacturing/manufacturing-reports) | Cost, efficiency, downtime |

## Make-to-stock vs make-to-order

| | Make-to-stock | Make-to-order |
| --- | --- | --- |
| Trigger | Reorder levels, forecast | Sales order |
| Planning | Production plan from forecast | Production plan from sales orders |
| BOM | Standard | Often a project-specific BOM |
| Costing | Standard BOM cost | Actual cost per order |
| Example | Lulu Pearl Foods packing 500 g date boxes | Saqr Steel building a mezzanine floor |

## Setup checklist

1. [Manufacturing settings](/manufacturing/manufacturing-settings): warehouses, backflush, overproduction
2. Items for raw materials, sub-assemblies and finished goods
3. Workstations with hour rates; operations and routings
4. BOMs for each product
5. Holiday list and working hours for capacity planning

:::uae Made in the UAE
Products manufactured in the UAE may qualify for preferential customs treatment in the GCC and under trade agreements, if you meet the local value-added and certificate of origin rules. Keep your BOM costs and production records; they support the value-added calculation for a certificate of origin. Industrial licence holders can also benefit from the In-Country Value (ICV) programme, which uses audited cost data.
:::

## Related pages

- [Bill of materials](/manufacturing/bom)
- [Work orders](/manufacturing/work-order)

@@ bom | Bill of materials (BOM)
@summary Define what goes into a product: raw materials, sub-assemblies, operations, scrap, costs, multi-level BOMs, alternatives, BOM versions and the BOM creator.

## Creating a BOM

1. Go to **Manufacturing › BOM › New**.
2. Choose the **Item** to produce and the **Quantity** the BOM makes (for example 1 rack, or 100 kg of mix).
3. In **Items**, add each raw material with quantity, unit and source warehouse.
4. Tick **With Operations** to add operations with workstation and time.
5. Add **Scrap Items** if the process produces sellable scrap.
6. Choose **Rate Of Materials Based On**: Valuation Rate, Price List or Last Purchase Rate.
7. Save, check the costing section, and **Submit**. Tick **Is Default** for the BOM used in work orders.

!fig BOM for a steel storage rack with raw materials, operations and cost summary

## BOM costs

| Cost | Comes from |
| --- | --- |
| Raw Material Cost | Item rates × quantities |
| Operating Cost | Operation time × workstation hour rate |
| Scrap Material Cost | Deducted from total |
| Total Cost | Basis for standard costing and pricing |

Use **Update Cost** to refresh rates, or the **BOM Update Tool** to refresh all BOMs.

## Multi-level BOMs and semi-finished goods

A sub-assembly (for example a welded upright frame) can have its own BOM. In the parent BOM, the sub-assembly line links to that BOM. Production plans then create work orders for each level, so semi-finished goods are produced and stocked before the final assembly. Tick **Track Semi Finished Goods** on operations to receive a semi-finished item at the end of an operation.

## BOM creator

For complex products, **BOM Creator** lets you build the whole tree (finished good, sub-assemblies, raw materials) in one screen and then creates all the BOMs at once.

## Variants, alternatives and versions

| Feature | Use |
| --- | --- |
| Item variants | One template BOM for many sizes or colours |
| Allow Alternative Item | Substitute materials when the main one is out of stock |
| New BOM version | Copy and change, then make the new one default; old BOMs stay for history |
| BOM Explorer | See the full tree with quantities |
| BOM Search | Find BOMs using a given raw material |

## Example

| Raw material | Qty | Rate (AED) |
| --- | --- | --- |
| Upright frame 3 m | 4 | 145.00 |
| Beam 2.7 m | 8 | 62.00 |
| Decking panel | 6 | 38.00 |
| Bolts and anchors set | 1 | 25.00 |

Operations: cutting 0.5 h, welding 1.5 h, powder coating 1 h, packing 0.25 h.

:::tip Keep BOMs accurate
Wrong quantities in a BOM mean wrong stock and wrong costs. Compare BOM against actual consumption monthly using the work order consumption report, and correct the BOM.
:::

## Related pages

- [Workstations and routing](/manufacturing/workstations-routing)
- [Item variants](/stock/item-variants)

@@ workstations-routing | Workstations, operations and routing
@summary Set up the places where work happens with hourly costs and working hours, define operations, and group them into routings that BOMs reuse.

## Workstations

A **Workstation** is a machine, line or work area: Laser Cutter, Welding Bay 1, Packing Line.

| Field | Example |
| --- | --- |
| Workstation Type | Welding |
| Production Capacity | Parallel jobs it can run (2 welders = 2) |
| Hour Rate components | Electricity 12, consumables 8, rent 10, wages 35 = AED 65/h |
| Working Hours | 07:00–12:00, 13:00–17:00 |
| Holiday List | Factory holiday list |
| Status | Production, Off, Idle, Problem, Maintenance, Setup |

!fig Workstation with hourly cost breakdown and working hours

## Operations

An **Operation** is a step such as Cutting, Welding, Coating, Mixing, Filling. Each has a default workstation and can carry a description, quality inspection template and **batch size**.

## Routings

A **Routing** is an ordered list of operations with times, for example:

| Seq | Operation | Workstation | Time (min) |
| --- | --- | --- | --- |
| 10 | Cutting | Laser Cutter | 30 |
| 20 | Welding | Welding Bay 1 | 90 |
| 30 | Powder coating | Coating Line | 60 |
| 40 | Packing | Packing Area | 15 |

Choose the routing in a BOM to copy all operations. Sequence IDs control which operations can run in parallel.

## Downtime

Record machine stoppages with **Downtime Entry**: workstation, start and end, reason (breakdown, no material, setup). The Downtime Analysis report shows lost hours by cause.

## Related pages

- [Capacity planning](/manufacturing/capacity-planning)
- [Bill of materials](/manufacturing/bom)

@@ work-order | Work orders and job cards
@summary Authorise production, transfer materials, track operations with job cards, record finished goods and scrap, and close or cancel work orders.

## Creating a work order

1. From a sales order or production plan click **Create › Work Order**, or go to **Manufacturing › Work Order › New**.
2. Choose the **Item to Manufacture**, the **BOM** and the **Quantity**.
3. Check warehouses: **Source**, **Work-in-Progress** and **Target** (finished goods).
4. Set **Planned Start Date**; DocFlow calculates operation times from the routing.
5. Submit. Job cards are created for each operation if the BOM has operations.

!fig Work order for 40 steel racks with required items, operations and warehouses

## Materials

| Step | Action | Stock entry |
| --- | --- | --- |
| Transfer | **Start** › Material Transfer for Manufacture | Raw materials: Stores → WIP |
| Consume and produce | **Finish** › Manufacture | WIP consumed, finished goods into target warehouse |
| Return | Return unused material | WIP → Stores |

With **Skip Material Transfer to WIP**, materials are consumed directly from the source warehouse at manufacture.

## Job cards

A **Job Card** records one operation: the employee(s), start and stop time, quantity completed, and any quality inspection. Operators start and pause timers from a tablet on the shop floor. Completed quantities update the work order's operation progress.

!fig Job card for welding with time logs, employee and completed quantity

## Statuses

| Status | Meaning |
| --- | --- |
| Not Started | Submitted, no material transferred |
| In Process | Material transferred or operations started |
| Completed | Full quantity produced |
| Stopped | Paused manually |
| Closed | Closed with less than planned quantity |

## Over- and under-production

Produce more than planned only up to the **Overproduction Percentage** in settings. If you finish less, **Close** the work order; DocFlow returns leftover reserved quantity.

## Costing

The manufacture entry values finished goods at the cost of raw materials consumed plus operating costs (from job card actual time if set) plus additional costs (for example subcontracted coating), minus scrap value.

## Related pages

- [Backflush and consumption](/manufacturing/backflush-consumption)
- [Scrap and rework](/manufacturing/scrap-rework)

@@ production-plan | Production planning and material requirements
@summary Plan what to make from sales orders, material requests or forecasts, explode multi-level BOMs, calculate material requirements (MRP) and create work orders and purchase requests in one go.

## Creating a production plan

1. Go to **Manufacturing › Production Plan › New**.
2. **Get Items From**: Sales Order or Material Request. Set filters (dates, customer, warehouse) and click **Get Sales Orders** then **Get Finished Goods for Manufacture**.
3. Or add items manually, for example from a [production forecast](/manufacturing/production-forecast).
4. Tick **Consolidate Sub Assembly Items** and click **Get Sub Assembly Items** for multi-level BOMs.
5. Click **Get Raw Materials for Purchase** to calculate material requirements.
6. Save and submit.

!fig Production plan with finished goods, sub-assemblies and raw material requirements

## Material requirements (MRP)

DocFlow explodes the BOMs and compares requirements with:

| Considered | Setting |
| --- | --- |
| Projected stock in warehouses | **For Warehouse**, include sub-warehouses |
| Open purchase orders and material requests | Included in projected quantity |
| Minimum order quantity and safety stock | Item settings |
| Non-stock items | Option to include |

The result is a list of materials to purchase with required quantity and date.

## Creating documents

| Button | Creates |
| --- | --- |
| Make Work Order | Work orders for finished goods and sub-assemblies |
| Make Material Request | Purchase or transfer requests for missing raw materials |
| Make Subcontracting PO | For sub-assemblies made by a [subcontractor](/subcontracting/overview) |

## Example

Saqr Steel has three open sales orders for 120 racks. The plan shows 480 uprights needed; 300 are in stock and 100 on order, so a material request for 80 uprights is created, plus work orders for frames (sub-assembly) and racks.

## Related pages

- [Capacity planning](/manufacturing/capacity-planning)
- [Material requests](/buying/material-request)

@@ manufacturing-reports | Manufacturing reports
@summary Measure production output, cost, efficiency, downtime and material usage with the standard manufacturing reports.

!fig Production analytics chart of quantity produced by item and month

## Standard reports

| Report | Shows |
| --- | --- |
| Production Planning Report | Required vs available materials for open plans |
| Work Order Summary | Open, delayed and completed work orders with age |
| Work Order Consumed Materials | Planned vs actual consumption per order |
| Job Card Summary | Time and quantities by operation and employee |
| Production Analytics | Output by item, period and workstation |
| BOM Stock Report | Can I build this BOM with current stock? |
| BOM Search, BOM Explorer | BOM structure and usage |
| Exponential Smoothing Forecast | Forecast demand from history |
| Downtime Analysis | Lost hours by workstation and reason |
| Quality Inspection Summary | Accepted and rejected quantities |
| Cost of Poor Quality | Cost of scrap and rework |
| Process Loss Report | Loss in processes such as roasting or cutting |

## Key measures

| Measure | Formula |
| --- | --- |
| On-time completion | Work orders completed by planned end ÷ total |
| Material variance | (Actual − BOM) consumption × rate |
| Scrap rate | Scrap quantity ÷ input quantity |
| Workstation utilisation | Job card hours ÷ available hours |

## Related pages

- [Work orders](/manufacturing/work-order)
- [Report builder](/framework/report-builder)

@@ manufacturing-settings | Manufacturing settings
@summary Choose default warehouses, the backflush basis, overproduction allowances, capacity planning rules and job card behaviour.

!fig Manufacturing settings with default warehouses and backflush options

## Settings

| Setting | Options and advice |
| --- | --- |
| Default Work In Progress Warehouse | Work In Progress – SSF |
| Default Finished Goods Warehouse | Finished Goods – SSF |
| Default Scrap Warehouse | Scrap – SSF |
| Backflush Raw Materials Based On | BOM or Material Transferred for Manufacture |
| Overproduction Percentage for Sales Order | 0–5% |
| Overproduction Percentage for Work Order | 0–5% |
| Allow Multiple Material Consumption | For long work orders consumed in parts |
| Disable Capacity Planning | Off if you schedule by workstation |
| Capacity Planning for (days) | 30 |
| Allow Overtime | If workstations can run outside working hours |
| Allow Production on Holidays | Usually off |
| Update BOM Cost Automatically | On, keeps BOM costs current |
| Set Operating Cost Based On BOM Quantity | Per your costing policy |
| Add Corrective Operation Cost in Finished Good Valuation | For rework |
| Make Serial No / Batch from Work Order | For traceability |

## Related pages

- [Backflush and consumption](/manufacturing/backflush-consumption)
- [Capacity planning](/manufacturing/capacity-planning)

@@ capacity-planning | Capacity planning
@summary Schedule operations on workstations within working hours, avoid overloading machines, and see the load on each workstation over the coming weeks.

When a work order is submitted, DocFlow schedules each operation on its workstation within working hours and the holiday list, after operations already planned. If the workstation is full, the job is pushed to the next free slot.

!fig Workstation load chart showing planned hours per day against capacity

## What affects scheduling

| Input | Where |
| --- | --- |
| Operation time and batch size | BOM / routing |
| Workstation working hours and production capacity | Workstation |
| Holidays | Workstation holiday list |
| Capacity planning window | Manufacturing settings |
| Allow overtime | Manufacturing settings |

## Viewing the load

Use the **Job Card** calendar or Gantt view by workstation, or the **Workstation Job Card Summary**. Overloaded days show where to add a shift, move work or subcontract.

## Rescheduling

Change the planned start of a work order, or move job cards in the calendar. DocFlow checks the workstation is free.

:::tip Ramadan hours
During Ramadan, working hours in the private sector are reduced by two hours a day. Update workstation working hours for the month so planned dates stay realistic.
:::

## Related pages

- [Workstations and routing](/manufacturing/workstations-routing)
- [Production planning](/manufacturing/production-plan)

@@ backflush-consumption | Backflushing and material consumption
@summary Choose how raw materials are consumed: by BOM quantity or by what was actually transferred, record extra consumption, and keep stock accurate during long work orders.

## Backflush options

| Basis | How it works | Use when |
| --- | --- | --- |
| BOM | Materials consumed at BOM quantities × produced quantity | Consumption is predictable, for example packing dates |
| Material Transferred for Manufacture | Materials consumed as transferred to WIP, proportionally | Actual usage varies, for example steel cut to length |

Set this in [manufacturing settings](/manufacturing/manufacturing-settings).

## Extra consumption

If more material is used than planned, transfer the extra to WIP before finishing (transfer basis), or edit the quantities on the manufacture entry before submitting. The difference shows in the consumed materials report.

!fig Manufacture stock entry showing consumed raw materials and the finished item

## Multiple consumption

For long work orders, tick **Allow Multiple Material Consumption** and record **Material Consumption for Manufacture** entries in stages, so stock is correct each month-end even before the order finishes.

## Returning unused material

From the work order, choose **Return Components** to move leftover material from WIP back to stores.

## Related pages

- [Work orders](/manufacturing/work-order)
- [Stock entry](/stock/stock-entry)

@@ scrap-rework | Scrap, process loss and rework
@summary Record sellable scrap and process loss correctly, handle rejected output, and manage rework so costs and stock remain accurate.

## Scrap items

Add **Scrap Items** to the BOM (for example steel offcuts, 2 kg per rack, valued at AED 1.20/kg). When finished goods are produced, scrap is received into the scrap warehouse at that value and the finished goods cost is reduced.

Sell scrap with a normal sales invoice, using the VAT template your tax adviser confirms for scrap sales.

## Process loss

Some processes lose quantity, such as roasting nuts or trimming fabric. Set **Process Loss Percentage** on the BOM. The lost quantity is recorded separately so the finished goods valuation includes it.

!fig Manufacture entry with finished goods, scrap item and process loss quantity

## Rejected output

When final inspection rejects units, receive them into a **Rejected** warehouse. Decide whether to scrap, sell as seconds or rework.

## Rework

| Approach | How |
| --- | --- |
| Corrective job card | Add a **Corrective Operation** on the work order; its cost is added to the item if the setting is on |
| Rework work order | A new work order with a rework BOM that consumes the defective item |
| Repack | Stock entry Repack for simple corrections |

:::uae Scrap sales and VAT
Sales of scrap are normally standard-rated at 5%. Some goods sold between VAT-registered businesses fall under the UAE domestic reverse charge, where the buyer accounts for the VAT. Confirm with your tax adviser whether this applies to your scrap, then choose the right tax template on the invoice. See [reverse charge](/uae-compliance/reverse-charge).
:::

## Related pages

- [Non-conformance](/quality/non-conformance)
- [Manufacturing reports](/manufacturing/manufacturing-reports)

@@ production-forecast | Production forecasting
@summary Forecast demand from sales history, record sales forecasts per item and period, and feed them into production plans for make-to-stock items.

## Exponential smoothing forecast

The **Exponential Smoothing Forecast** report uses past sales orders or delivery notes to project demand. Choose company, item group, date range and smoothing constant (0.3 to 0.5 for stable products).

!fig Exponential smoothing forecast for date products by month

## Sales forecasts

Create a **Sales Forecast** for items and months, either from the report or entered manually with sales and marketing input. Then create a production plan from the forecast.

## Seasonality in the UAE

| Season | Effect |
| --- | --- |
| Ramadan and Eid | Peak for dates, nuts, sweets, food service |
| Summer (July–August) | Lower demand in many sectors as residents travel |
| Q4 and exhibitions | Peaks for construction and hospitality projects |
| Dubai Shopping Festival | Retail peak |

Since Ramadan moves about 11 days earlier each year, base forecasts on Ramadan dates, not calendar months.

## Using the forecast

1. Agree the forecast monthly with sales.
2. Create a production plan for the next month's forecast less stock.
3. Run MRP to buy materials in time, especially imported ones with long lead times.

## Related pages

- [Production planning](/manufacturing/production-plan)
- [Stock reports](/stock/stock-reports)
