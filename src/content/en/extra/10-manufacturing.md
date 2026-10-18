@@ overview
@after
## Setting up Manufacturing

1. Create raw material, sub-assembly and finished items.
2. Set up [workstations and operations](/manufacturing/workstations-routing) with hourly costs.
3. Build and submit [bills of materials](/manufacturing/bom).
4. Review [manufacturing settings](/manufacturing/manufacturing-settings), including WIP and scrap warehouses.
5. Run a trial work order and check the finished goods cost.

@@ bom
@after
## Key fields

| Field | What it does |
| --- | --- |
| Is Default | The BOM used when none is chosen |
| Is Active | Inactive BOMs cannot be used |
| Rate Of Materials Based On | Valuation rate, price list or last purchase rate |
| With Operations | Adds routing and operating cost |
| Process Loss % | Expected loss in output |
| Transfer Material Against | Work order or job card |

## Common problems

:::details "BOM recursion"
A component lists the parent item in its own BOM. Remove the loop.
:::

:::details Cost shows zero
Raw materials have no valuation rate yet. Use the price list or last purchase rate option, or receive opening stock first.
:::

## Related pages

- [Scrap and rework](/manufacturing/scrap-rework)
- [Product bundles](/selling/product-bundles)

@@ workstations-routing
@after
## Related pages

- [Capacity planning](/manufacturing/capacity-planning)

@@ work-order
@after
## Behind the scenes

Finishing 40 racking bays with materials of AED 41,600 and operating cost of AED 5,600 moves AED 41,600 out of WIP, credits operating cost to a **Manufacturing Overhead (Absorbed)** account, and debits Finished Goods by AED 47,200.

## Common problems

:::details "Material not transferred for manufacture"
Use **Start** to transfer materials to WIP, or set the BOM to backflush from the stores warehouse.
:::

## Related pages

- [Material consumption](/manufacturing/backflush-consumption)
- [In-process inspection](/quality/in-process-inspection)

@@ production-plan
@after
## Related pages

- [Sales forecasts](/manufacturing/production-forecast)
- [Material requests](/buying/material-request)

@@ manufacturing-reports
@after
## Related pages

- [Dashboards](/framework/dashboards)

@@ manufacturing-settings
@after
## Related pages

- [Stock settings](/stock/stock-settings)

@@ capacity-planning
@after
## Related pages

- [Work orders](/manufacturing/work-order)

@@ backflush-consumption
@after
## Related pages

- [Manufacturing settings](/manufacturing/manufacturing-settings)

@@ scrap-rework
@after
## Related pages

- [Non-conformance](/quality/non-conformance)

@@ production-forecast
@after
## Related pages

- [Production planning](/manufacturing/production-plan)
