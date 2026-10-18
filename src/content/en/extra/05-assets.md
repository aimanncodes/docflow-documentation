@@ overview
@after
## Setting up Assets

1. Create the fixed asset, accumulated depreciation and depreciation expense accounts.
2. Set up [asset categories](/assets/asset-category) with useful lives agreed with your auditor.
3. Choose posting options in [asset settings](/assets/asset-settings).
4. Register existing assets with their opening accumulated depreciation.
5. Run the fixed asset register and compare it with the trial balance.

@@ asset-category
@after
## Common problems

:::details "Please set Depreciation related Accounts in Asset Category"
The category has no accounts for this company. Add a row for the company in the **Accounts** table.
:::

## Related pages

- [Depreciation](/assets/depreciation)
- [Chart of accounts](/accounting/chart-of-accounts)

@@ asset-purchase
@after
## Behind the scenes

When the purchase receipt for a van worth AED 112,000 is submitted, DocFlow debits **Capital Work in Progress** (or the fixed asset account) and credits **Asset Received But Not Billed**. The purchase invoice clears that account against the supplier. Submitting the asset moves the value to **Motor Vehicles**.

## Common problems

:::details No draft asset was created
The item must have **Is Fixed Asset** ticked and an asset category set before the receipt is submitted. Otherwise create the asset manually and link the receipt.
:::

## Related pages

- [Purchase receipts](/buying/purchase-receipt)
- [Composite assets](/assets/composite-assets)

@@ depreciation
@after
## Behind the scenes

Each monthly entry for the forklift debits **Depreciation Expense** AED 1,000 and credits **Accumulated Depreciation – Heavy Equipment** AED 1,000, tagged to the asset's cost centre.

## Common problems

:::details Depreciation did not post this month
Check [asset settings](/assets/asset-settings) for automatic posting, and that the period is not frozen. You can post missed rows manually from the asset.
:::

## Related pages

- [Shift-based depreciation](/assets/shift-depreciation)
- [Month-end closing](/accounting/period-closing)

@@ asset-movement
@after
## Related pages

- [Asset settings and reports](/assets/asset-settings)

@@ asset-disposal
@after
## Behind the scenes

Selling a van with cost AED 112,000 and accumulated depreciation AED 67,200 for AED 40,000 plus VAT: cost and accumulated depreciation are removed, the debtor is charged AED 42,000, VAT Output AED 2,000 is recorded, and a loss of AED 4,800 is posted to **Gain/Loss on Asset Disposal**.

## Related pages

- [Sales invoices](/accounting/sales-invoice)

@@ composite-assets
@after
## Related pages

- [Buying and registering assets](/assets/asset-purchase)

@@ shift-depreciation
@after
## Related pages

- [Depreciation](/assets/depreciation)

@@ asset-settings
@after
## Related pages

- [Month-end closing](/accounting/period-closing)
