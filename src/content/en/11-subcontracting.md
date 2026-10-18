@@ overview | Subcontracting at a glance
@summary Send materials to an outside workshop to process, track what they hold, receive finished goods with the right cost, and handle customer-supplied materials.

Subcontracting is when another company does part or all of the production for you using your materials: powder coating of steel parts in a Sharjah workshop, printing and packing of cartons, or assembly of kits by a contract packer in JAFZA. DocFlow tracks the materials you send, what the subcontractor still holds, the service charge and the finished goods you receive.

!fig Subcontracting workspace with open subcontracting orders and materials at suppliers

## The subcontracting flow

| Step | Document | Effect |
| --- | --- | --- |
| Order the service | Purchase order (service item) | Commits the processing charge |
| Create the subcontracting order | [Subcontracting order](/subcontracting/subcontracting-order) | Lists finished goods and materials to supply |
| Send materials | Stock entry: Send to Subcontractor | Stock moves to the supplier's warehouse |
| Receive finished goods | Subcontracting receipt | Materials consumed, finished goods received |
| Bill | Purchase invoice against the PO | Service charge and VAT |
| Return leftovers | Stock entry: return | Unused materials come back |

## When to use subcontracting

| Situation | Use |
| --- | --- |
| Supplier processes your material and returns it | Subcontracting |
| Supplier provides everything and sells you a finished item | Normal purchase |
| Customer gives you material to process | [Customer-provided items](/subcontracting/customer-provided-items) |
| Small external step in your own work order | Additional cost on the work order or a subcontracted operation |

## Related pages

- [Setting up subcontracting](/subcontracting/setup)
- [Subcontracting costs](/subcontracting/subcontracting-costing)

@@ setup | Setting up subcontracting
@summary Prepare items, the subcontracting BOM, the service item and a supplier warehouse before your first subcontracting order.

## What you need

| Record | Example | Notes |
| --- | --- | --- |
| Finished (or semi-finished) item | Coated upright frame | A stock item; tick **Is Sub Contracted Item** |
| Raw materials | Bare upright frame, powder | Stock items you send |
| Service item | Powder coating service | Non-stock item used on the purchase order |
| Subcontracting BOM | Coated frame = bare frame + 0.4 kg powder | Defines materials per unit |
| Supplier warehouse | "Al Noor Coating – Sharjah" | A warehouse for stock held by the supplier |

## Subcontracting BOM

1. Create a normal [BOM](/manufacturing/bom) for the finished item with the materials you will supply.
2. Create a **Subcontracting BOM** linking the finished good, its BOM, the service item and the conversion factor (how many service units per finished unit).

!fig Subcontracting BOM linking the coated frame, its BOM and the coating service item

## Supplier warehouse

Create a warehouse under a group such as "Subcontractors", one per supplier. It is still your stock, held at the supplier's premises, so it appears in stock reports and valuation.

## Related pages

- [Subcontracting orders](/subcontracting/subcontracting-order)
- [Warehouses](/stock/warehouses)

@@ subcontracting-order | Subcontracting orders and receipts
@summary Raise the purchase order and subcontracting order, transfer materials to the supplier, receive finished goods, deal with rejections and bill the service.

## Step 1: Purchase order

1. Create a **Purchase Order** to the subcontractor with the **service item**, quantity and rate. Tick **Is Subcontracted**.
2. In each row choose the **Finished Good** and its quantity.
3. Submit.

## Step 2: Subcontracting order

1. From the PO click **Create › Subcontracting Order**.
2. Check the finished goods, the **Supplied Items** (calculated from the BOM) and the **Supplier Warehouse**.
3. Submit.

!fig Subcontracting order with finished goods and supplied raw materials

## Step 3: Send materials

From the subcontracting order click **Transfer › Material to Supplier**. A stock entry **Send to Subcontractor** moves materials from your stores to the supplier warehouse. Print it as a delivery note for the driver.

## Step 4: Receive finished goods

1. Click **Create › Subcontracting Receipt**.
2. Enter accepted and rejected quantities; choose the **Rejected Warehouse** for rejects.
3. Check consumed materials (by BOM or as actually used) and submit.

!fig Subcontracting receipt with accepted, rejected and consumed quantities

## Step 5: Bill

Create the **Purchase Invoice** from the purchase order or receipt for the service charge. VAT at 5% normally applies to the processing service of a UAE subcontractor.

## Rejections and returns

| Case | Action |
| --- | --- |
| Finished goods rejected | Receive into rejected warehouse; return to supplier for rework with a return receipt |
| Materials damaged by supplier | Recover the cost with a debit note |
| Leftover materials | **Return of Components** stock entry |

:::example Example
Saqr Steel sends 200 bare frames and 80 kg powder to Al Noor Coating in Sharjah for coating at AED 18 per frame. 196 coated frames are accepted and 4 rejected. The service invoice is AED 3,528 + VAT for accepted frames, and the 4 frames go back for rework.
:::

## Related pages

- [Supplied items tracking](/subcontracting/supplied-items-tracking)
- [Purchase orders](/buying/purchase-order)

@@ supplied-items-tracking | Tracking materials at subcontractors
@summary Know exactly what each subcontractor holds, reconcile supplied, consumed and returned quantities, and avoid losses of your materials at outside workshops.

## Where to look

| View | Shows |
| --- | --- |
| Subcontracting order › Supplied Items | Required, supplied, consumed and returned per material |
| Stock Balance filtered by supplier warehouse | Everything the supplier holds |
| Subcontract Order Summary | Ordered vs received finished goods |
| Subcontracted Raw Materials To Be Transferred | What is still to send |
| Subcontracted Item To Be Received | What is still to come back |

!fig Supplied items table showing required, supplied, consumed and returned quantities

## Reconciling with the supplier

Monthly, send the subcontractor their stock balance and agree it. Differences are usually waste above BOM, unrecorded returns or theft. Record agreed losses with a stock entry (material issue) and, if chargeable, a debit note.

## Batches and serials

Batch and serial numbers move with the materials, so traceability continues through the subcontractor: a coated frame can be traced back to the steel batch it came from.

:::tip Do not over-supply
Send materials in stages for large orders. Material held at an outside workshop is harder to control and is still your stock for valuation and insurance.
:::

## Related pages

- [Subcontracting orders](/subcontracting/subcontracting-order)
- [Serial numbers and batches](/stock/serial-batch)

@@ customer-provided-items | Customer-provided materials
@summary Receive, store and use materials that belong to a customer, without valuing them in your stock, and invoice only your processing charge.

Sometimes the customer gives you materials to process: a hotel supplies its own fabric for curtains, or a brand owner supplies printed labels for packing. These materials are not yours, so they must not be valued in your stock or your financial statements.

## Setting up

1. On the item, tick **Is Customer Provided Item** and choose the **Customer**.
2. The item has no valuation rate.

## Receiving

1. Create a **Material Request** of type **Customer Provided**.
2. Create a **Stock Entry** of type **Material Receipt** against it when the material arrives. It is received at zero value.

!fig Stock entry receiving customer-provided fabric at zero value

## Using and invoicing

Include the customer-provided item in the BOM. When you manufacture, it is consumed at zero cost, so the finished goods cost includes only your own materials and labour. Invoice the customer for your processing charge and own materials.

## Returning leftovers

Return unused customer material with a stock entry (material issue) and a delivery note for the customer to sign.

:::uae VAT on processing services
Processing customer-owned goods is a supply of services. VAT applies at 5% on your charge for UAE customers; for goods processed for an overseas customer and exported, zero-rating conditions for services related to exported goods may apply. Keep export evidence.
:::

## Related pages

- [Subcontracting overview](/subcontracting/overview)
- [Zero-rated and exempt supplies](/uae-compliance/zero-rated-exempt)

@@ subcontracting-costing | Subcontracting costs
@summary How the cost of subcontracted goods is built up from supplied materials, the service charge and additional costs such as transport, and how to review it.

## Cost of the finished item

| Component | Source |
| --- | --- |
| Supplied materials | Valuation of raw materials consumed |
| Service charge | Rate on the purchase order (and invoice) |
| Additional costs | Transport to and from the supplier, added on the receipt or via [landed cost voucher](/stock/landed-cost) |
| Less: scrap | If scrap is returned with value |

!fig Subcontracting receipt cost breakdown with materials, service and additional costs

:::example Example
Coated frame: bare frame AED 145.00 + powder 0.4 kg × AED 22 = AED 8.80 + coating AED 18.00 + transport AED 1.20 = AED 173.00 per frame.
:::

## When the invoice differs

If the purchase invoice rate differs from the PO, DocFlow adjusts the valuation of the received goods (if still in stock) or books the difference to expenses, in line with your perpetual inventory settings.

## Reviewing

Compare subcontracted cost with in-house production cost for the same item before deciding to make or buy. Use the stock ledger and purchase analytics for the service item.

## Related pages

- [Landed cost](/stock/landed-cost)
- [Valuation methods](/stock/valuation-methods)
