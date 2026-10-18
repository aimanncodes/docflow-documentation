@@ overview | Manufacturing at a glance
@summary Plan production, issue materials, track operations and cost every finished product.

The Manufacturing module suits make-to-order and make-to-stock production, from fabricated steel and joinery to packed food and chemicals. It turns a **Bill of Materials** into **Work Orders**, consumes raw materials, records time on each operation and values the finished goods.

!fig Manufacturing workspace with work order status and production trend

## The flow

1. Define the **BOM**: what goes into a product and which operations it needs.
2. Plan with a **Production Plan**, or create work orders straight from sales orders.
3. Release **Work Orders** to the shop floor.
4. Transfer raw materials to work in progress.
5. Record **Job Cards** for each operation.
6. Finish: finished goods go into stock and are valued.

@@ bom | Bills of materials
@summary Define components, quantities, operations and scrap for each product.

## Creating a BOM

1. Go to **Manufacturing › Bill of Materials › New**.
2. Choose the finished **Item** and the **Quantity** the BOM makes (often 1).
3. Add raw materials with quantities, for example steel uprights, beams, bolts and paint.
4. Tick **With Operations** and add operations with workstations and times.
5. Add expected **scrap** items, such as offcuts, with their value.
6. Save and submit.

!fig Bill of materials for a pallet racking bay with raw materials and operations

:::example Example: a racking bay
Saqr Steel's BOM for one 3-metre racking bay uses 2 uprights, 6 beams, 24 bolts and 1.2 litres of powder coat. Operations are cutting (20 minutes), welding (35 minutes) and powder coating (25 minutes). The BOM shows a standard cost of AED 1,180 a bay.
:::

## Multi-level BOMs

If a component is made in-house, give it its own BOM. DocFlow builds the full tree and can plan sub-assemblies first.

## Updating costs

Click **Update Cost** to refresh the BOM cost from the latest valuation, last purchase rate or price list. Use the **BOM Update Tool** to replace a component in every BOM at once.

@@ workstations-routing | Workstations and routings
@summary Describe your machines, their hourly costs and the order of operations.

## Workstations

A workstation is a machine or work area: a laser cutter, a welding bay, a paint booth. For each one, record:

- **Hour Rate** made up of electricity, consumables, rent and labour
- **Working hours**, for example two shifts of 8 hours, Monday to Saturday
- **Production capacity**: how many jobs can run at once

!fig Workstation for the welding bay with hourly cost components

:::uae Summer working hours
The UAE midday break rule bans outdoor work in direct sun from 12:30 to 15:00 during the summer months, normally 15 June to 15 September. If a workstation is outdoors, adjust its working hours for that period.
:::

## Operations and routings

An **Operation** is a step, such as cutting or welding. A **Routing** is a reusable sequence of operations that you can apply to many BOMs.

@@ work-order | Work orders and job cards
@summary Release production to the floor, consume material and record the work done.

## Creating a work order

1. From a sales order, choose **Create › Work Order**, or start one from **Manufacturing › Work Order › New**.
2. Check the item, BOM and quantity.
3. Set the **Work-in-Progress Warehouse** and **Target Warehouse** for finished goods.
4. Submit.

!fig Work order for 40 racking bays with required materials

## Material transfer

Click **Start**. DocFlow creates a stock entry to move the required raw materials from the stores to the WIP warehouse.

## Job cards

For BOMs with operations, a **Job Card** is created for each operation. Operators, or supervisors on their behalf, log:

- Start and end time
- Completed quantity
- The employee(s) who did the work

!fig Job card for welding with time logs and completed quantity

## Finishing

When the last job card is done, click **Finish** on the work order. The final stock entry consumes the raw materials, adds the finished goods to stock and values them using material cost plus operating cost.

:::tip Partial completion
You can finish part of a work order, for example 25 of 40 bays, and deliver them while the rest are still in production.
:::

@@ production-plan | Production planning
@summary Plan work orders and raw material purchases from sales orders and forecasts.

## Steps

1. Go to **Manufacturing › Production Plan › New**.
2. Choose where demand comes from: **Sales Orders** or **Material Requests**, filtered by date, customer or item.
3. Click **Get Sales Orders**, then **Get Finished Goods for Manufacture**.
4. Click **Get Raw Materials for Purchase**. DocFlow explodes the BOMs and subtracts stock on hand.
5. Submit, then click **Make Work Order** and **Make Material Request**.

!fig Production plan with sales orders, items to make and raw materials to buy

:::example Example: a hotel group's racking order
A hotel group orders storage for six properties, 240 bays in total, due in five weeks. The production plan shows a shortage of 18 tonnes of steel. A material request goes to Buying the same day, with a required-by date that leaves time to cut and coat.
:::

@@ manufacturing-reports | Manufacturing reports
@summary Track production progress, costs, downtime and quality.

| Report | Shows |
| --- | --- |
| Work Order Summary | Status and delays of all work orders |
| Production Analytics | Quantities produced by period |
| BOM Stock Report | Can we build this from current stock? |
| Job Card Summary | Time per operation and operator |
| Downtime Analysis | Lost time per workstation and reason |
| Cost of Poor Quality | Scrap and rework cost |

!fig Work order summary showing late and on-time orders

Record breakdowns with **Downtime Entry**, choosing a reason such as power failure, maintenance or lack of material.

@@ manufacturing-settings | Manufacturing settings
@summary Set how materials are consumed, how overproduction is handled and how capacity is planned.

Open **Manufacturing › Manufacturing Settings**.

| Setting | What it controls | Suggested |
| --- | --- | --- |
| Backflush raw materials based on | BOM or materials transferred | BOM for standard products |
| Allow overproduction against sales order (%) | Producing more than ordered | 0–5% |
| Default WIP, finished goods and scrap warehouses | Where stock goes | Set per company |
| Capacity planning for (days) | How far ahead workstations are scheduled | 30 |
| Allow overtime | Job cards beyond working hours | On if you run overtime |
| Update BOM cost automatically | Keeps standard costs current | On |
| Material consumption | Allow consumption before finishing | On for long jobs |

!fig Manufacturing settings with backflush and overproduction options

@@ capacity-planning | Capacity planning
@summary Schedule operations against real workstation hours so promised dates are realistic.

With capacity planning switched on, every submitted work order books time on its workstations.

1. Set working hours and the number of parallel jobs on each [workstation](/manufacturing/workstations-routing).
2. Make sure BOM operations have realistic times per unit.
3. When a work order is submitted, DocFlow schedules each job card into the first free slot.

!fig Workstation capacity view showing booked and free hours by day

## Seeing the load

The **Workstation Status** and **Job Card** calendar views show which machines are overloaded. Move jobs, add a shift or subcontract the overflow.

:::uae Ramadan scheduling
During Ramadan, reduced working hours lower capacity by about a quarter for single-shift operations. Update workstation hours for the month so delivery promises stay realistic.
:::

@@ backflush-consumption | Material consumption and backflushing
@summary Record what was actually used, not just what the BOM says.

## Backflushing

With backflushing based on the BOM, finishing a work order consumes the BOM quantities automatically. This is quick, but it assumes the BOM is always right.

## Recording actual consumption

For processes with variable usage, such as cutting steel or mixing paint:

1. Transfer materials to WIP as usual.
2. During production, create a **Material Consumption for Manufacture** entry for what was actually used.
3. When finishing, return unused materials from WIP to stores.

!fig Material consumption entry showing actual quantities against the BOM

:::tip Watch variances
Compare actual consumption with the BOM each month using the **BOM Variance** report. Large differences point to wrong BOMs, waste or theft.
:::

@@ scrap-rework | Scrap, process loss and rework
@summary Account for offcuts, losses and products that need to be fixed.

## Scrap

Add expected scrap items to the BOM, such as steel offcuts, with a rate. When the work order finishes, scrap goes to the scrap warehouse at that value, reducing the cost of the finished goods. Sell scrap later through a normal sales invoice.

## Process loss

For processes that lose weight or volume, such as cooking, drying or evaporation, set the **Process Loss %** on the BOM. The finished quantity is reduced accordingly and the cost is carried by the good output.

!fig Bill of materials with scrap items and process loss percentage

## Rework

When finished goods fail inspection, create a **work order** for the rework item, using a rework BOM that consumes the faulty product and any extra materials. The rework cost adds to the product's value or goes to a rework expense account, depending on your policy.

@@ production-forecast | Sales forecasts and master production schedule
@summary Plan production from expected demand, not just confirmed orders.

## Sales forecast

1. Go to **Manufacturing › Sales Forecast › New**.
2. Choose the items and the method: based on past sales (with a moving average) or entered manually.
3. Set the periods, for example monthly for the next six months.

## Master production schedule

1. Go to **Manufacturing › Master Production Schedule › New**.
2. Add demand from the sales forecast and from open sales orders.
3. DocFlow calculates net requirements after stock on hand, and proposes work orders and material requests by date.

!fig Master production schedule combining forecast and sales orders

:::example Example: Ramadan demand for dates
Lulu Pearl Foods forecasts gift box sales to triple in the four weeks before Ramadan. The master production schedule brings repacking forward by six weeks, and raises material requests for boxes and ribbons in time.
:::
