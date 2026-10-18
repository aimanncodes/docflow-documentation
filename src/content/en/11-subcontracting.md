@@ overview | Subcontracting at a glance
@summary Send materials to an outside workshop, get finished goods back and pay for the service.

Subcontracting is common in the UAE: galvanising in Sharjah, powder coating in Ajman, private-label packing in Dubai Industrial City. You supply the raw materials, the subcontractor does the work, and you pay them a processing charge.

!fig Subcontracting workspace with open subcontracting orders and materials at suppliers

## The flow

1. A **Purchase Order** for the service, ticked as subcontracted.
2. A **Subcontracting Order** listing the materials to supply.
3. A **Stock Entry** sending materials to the subcontractor's warehouse.
4. A **Subcontracting Receipt** bringing finished goods back.
5. A **Purchase Invoice** for the processing charge.

@@ setup | Setting up subcontracting
@summary Prepare the items, BOM and supplier warehouse.

## Items

You need two items:

- The **finished item**, for example "Galvanised Beam 2.7 m", with **Maintain Stock** ticked.
- A **service item**, for example "Galvanising Service", with **Maintain Stock** unticked.

## Subcontracting BOM

Create a BOM for the finished item listing the raw materials you will supply, for example "Black Steel Beam 2.7 m". Then create a **Subcontracting BOM** that links the finished item, the service item and the conversion factor.

!fig Subcontracting BOM linking the finished item, service item and BOM

## Supplier warehouse

Create a warehouse for each subcontractor, for example "At Supplier – Sharjah Galvanizers". Stock held there is still yours and still appears in your stock balance.

:::uae Moving goods between emirates
Moving your own materials to a subcontractor in another emirate is not a sale and has no VAT, as ownership does not change. Keep the delivery challan as proof of what left and what came back.
:::

@@ subcontracting-order | Subcontracting orders and receipts
@summary Issue the order, send materials, receive finished goods and bill the service.

## Placing the order

1. Create a **Purchase Order** to the subcontractor, tick **Is Subcontracted**, and add the service item with the quantity and processing rate.
2. Submit, then click **Create › Subcontracting Order**.
3. Check the supplied items and the supplier warehouse, then submit.

!fig Subcontracting order with finished items and raw materials to supply

## Sending materials

From the subcontracting order, click **Transfer › Material to Supplier**. A stock entry moves the raw materials into the supplier warehouse.

## Receiving finished goods

1. Click **Create › Subcontracting Receipt**.
2. Enter the received and rejected quantities.
3. Check the **Consumed Items** table, which by default follows the BOM. Adjust it if the subcontractor used more or less.
4. Submit. Finished goods enter stock, valued at material cost plus processing charge.

!fig Subcontracting receipt with received goods and consumed materials

## Billing

When the subcontractor invoices you, create the purchase invoice from the purchase order. It covers only the processing charge plus VAT.

:::tip Returning unused materials
Return leftover materials with **Return of Components** from the subcontracting order, so the supplier warehouse balance stays correct.
:::

@@ supplied-items-tracking | Tracking materials at subcontractors
@summary Know exactly what you have sent, what was used and what is still with each subcontractor.

Your materials at a subcontractor are still your stock. Check them regularly.

| Report | Shows |
| --- | --- |
| Subcontract Order Summary | Ordered, received and pending finished goods |
| Subcontracted Raw Materials To Be Transferred | Materials still to send |
| Subcontracted Item To Be Received | Finished goods still due back |
| Stock Balance (supplier warehouse) | Materials currently at the subcontractor |

!fig Subcontract order summary with pending quantities per supplier

:::tip Reconcile every quarter
Ask each subcontractor for a stock statement every quarter and compare it with the supplier warehouse balance. Record differences with a stock reconciliation and agree who bears the loss.
:::

@@ customer-provided-items | Customer-provided materials
@summary Process materials your customer supplies, such as fabric, steel or packaging.

Sometimes you are the subcontractor: the customer sends you materials and pays you for the work.

1. On the item, tick **Is Customer Provided Item** and choose the customer.
2. When the material arrives, create a **Material Request** of type *Customer Provided*, then a **Stock Entry** of type Material Receipt. The material is received at zero value, because it is not yours.
3. Make the product with a work order as normal.
4. Invoice the customer only for your processing charge.

!fig Stock entry receiving customer-provided steel at zero valuation

:::uae VAT on processing
Your processing charge is a taxable service at 5%. The customer's materials are not part of your supply, so do not charge VAT on their value.
:::

@@ subcontracting-costing | Costing subcontracted goods
@summary See the true cost of outsourced work and compare it with making in-house.

The value of a subcontracted finished item is made up of:

| Part | Source |
| --- | --- |
| Supplied raw materials | Valuation rate of materials consumed |
| Processing charge | Rate on the subcontracting order |
| Additional costs | Freight to and from the subcontractor, added on the receipt |

!fig Subcontracting receipt with raw material cost, service cost and additional costs

## Make or buy

Compare the subcontracted cost with the in-house BOM cost. Remember to include transport between sites and the time your materials sit at the subcontractor.

:::example Example: galvanising in Sharjah
Saqr Steel sends 400 beams to a galvaniser in Sharjah. Steel costs AED 46,000, galvanising AED 9,600 and transport AED 1,400. The finished beams enter stock at AED 57,000, or AED 142.50 each.
:::
