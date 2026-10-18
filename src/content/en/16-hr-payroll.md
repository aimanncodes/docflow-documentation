@@ overview | HR & Payroll at a glance
@summary Manage employees from offer letter to final settlement under UAE labour law: the employee journey, who does what and how to set the module up.

The HR & Payroll module covers the full employee journey for UAE companies: recruitment, onboarding, visa and Emirates ID tracking, attendance, leave, monthly payroll through the Wage Protection System (WPS), expense claims, appraisals and end-of-service gratuity.

!fig HR workspace with headcount, leave today, expiring documents and payroll summary

## The employee journey

| Stage | DocFlow records |
| --- | --- |
| Planning | Staffing Plan, Job Requisition |
| Hiring | Job Opening, Job Applicant, Interview, Job Offer |
| Joining | Employee, Employee Onboarding, documents |
| Day to day | Attendance, Leave Application, Expense Claim, Shift Request |
| Monthly | Salary Slip, Payroll Entry, WPS file |
| Development | Appraisal, Goals, Training Event |
| Changes | Promotion, Transfer, new Salary Structure Assignment |
| Leaving | Employee Separation, Full and Final Statement, gratuity |

:::uae Which law applies?
This section follows Federal Decree-Law No. 33 of 2021 on the regulation of labour relations, which covers most private sector employers on the mainland and in many free zones. DIFC and ADGM have their own employment laws, and some free zones have extra rules. Confirm anything not covered here with your HR adviser.
:::

## Who does what

| Role | Typical work |
| --- | --- |
| Employee | Self-service: leave, attendance, expense claims, payslips, letters |
| Leave / expense approver | Approves their team's requests |
| HR User | Employee records, onboarding, leave, documents |
| HR Manager | Policies, salary structures, payroll and settlements |
| PRO | Visa, Emirates ID and labour card renewals |
| Accounts Manager | Payroll posting, WPS payment, gratuity accrual |

## Setting up HR & Payroll

1. Review [HR and payroll settings](/hr-payroll/hr-settings).
2. Create departments, designations, grades and [holiday lists](/organization/holiday-list).
3. Set up leave types and policies ([attendance and leave](/hr-payroll/attendance-leave)).
4. Create salary components and [salary structures](/hr-payroll/salary-structure).
5. Import employees with joining dates, bank details and visa data.
6. Load opening leave balances and the opening gratuity provision.
7. Run a parallel payroll for one month and compare with your old system.

See the [monthly payroll walkthrough](/guides/monthly-payroll) for one complete example.

@@ employees | Employee records
@summary Keep every employee's personal, job, contract, visa, bank and document details in one place, and keep them current through the employee's time with you.

The **Employee** record is the centre of HR and payroll. Leave, attendance, salary, expense claims, appraisals, assets issued and final settlement all link to it. A complete record also lets you meet UAE requirements for WPS, visas and labour contracts without separate spreadsheets.

:::note Before you start
Collect a copy of the passport, residence visa, Emirates ID, labour contract (MOHRE or free zone), bank letter with IBAN, educational certificates and an emergency contact. Set up [departments, designations](/organization/branches-departments) and [holiday lists](/organization/holiday-list) first.
:::

## Creating an employee

1. Go to **HR › Employee › New**.
2. Enter **First Name**, **Last Name** (as in the passport), **Gender** and **Date of Birth**.
3. Enter the **Date of Joining** and **Company**.
4. Choose **Department**, **Designation**, **Branch** and **Reports To**.
5. Save, then complete the other sections.

Employees can also be created from a **Job Offer** once the candidate accepts, which copies their details.

!fig Employee form with personal, job and contract details

## The employee form, section by section

### Overview

| Field | What it does |
| --- | --- |
| Employee Number / ID | From your naming series, for example `EMP-0123` |
| Full name, gender, date of birth | Personal identification |
| Status | Active, Inactive, Suspended or Left |
| Image | Shown on the employee card and ID |
| User ID | Links to the employee's DocFlow login for self-service |

### Company details

| Field | What it does |
| --- | --- |
| Company, Branch, Department, Designation | Organisation and reporting |
| Grade | Pay grade, used for salary structures and policies |
| Reports To | Line manager for approvals |
| Employment Type | Full-time, part-time, contract, intern |
| Holiday List | Weekends and public holidays for leave and attendance |
| Default Shift | For attendance |
| Leave Approver / Expense Approver / Shift Request Approver | Who approves this employee's requests |

### Joining and contract

| Field | What it does |
| --- | --- |
| Date of Joining | Starts leave accrual and gratuity service |
| Offer Date, Confirmation Date | Recruitment and probation milestones |
| Contract End Date | For fixed-term contracts |
| Notice (days) | Notice period in the contract, 30 to 90 days |
| Date of Retirement | If your policy sets one |

### Personal

| Field | What it does |
| --- | --- |
| Nationality | Drives pension, Emiratisation and visa rules |
| Marital Status, Blood Group | Personal records |
| Passport Number, Issue and Expiry | Visa processing and renewal alerts |
| Current and Permanent Address | Contact and home-country address for air tickets |
| Emergency Contact | Name, relation and phone |

### UAE identification (custom fields)

| Field | Example | Why |
| --- | --- | --- |
| Emirates ID number and expiry | 784-1990-1234567-1 | Identity checks and renewal alerts |
| Residence visa (UID) number and expiry | — | Renewal alerts |
| Labour card / work permit number and expiry | — | MOHRE or free zone records |
| MOHRE person code | 14 digits | Required in the WPS salary file |
| Visa sponsor | Company or other | Determines who renews |
| Health insurance policy and expiry | — | Mandatory cover tracking |
| ILOE subscription number | — | Unemployment insurance |

### Salary and bank

| Field | What it does |
| --- | --- |
| Salary Mode | Bank, cash or cheque; WPS requires bank or salary card |
| Bank Name, IBAN, Routing Code | Used in the WPS file |
| Salary Currency | Usually AED |
| Payroll Cost Centre | Where salary cost is charged |

### Education, experience and skills

Record qualifications, previous employers and skills. Useful for internal moves, training and visa categories that depend on qualifications.

### Exit

Filled in at separation: resignation date, relieving date, reason, exit interview and whether the employee is eligible for rehire. See [Separation](/hr-payroll/separation).

:::tip Never miss an expiry
Set up [notification rules](/getting-started/notifications) for visa, Emirates ID, passport, labour card, insurance and ILOE expiry, 60 and 30 days before. Fines for expired documents add up quickly.
:::

## Employee documents

Attach scans of the passport, visa, Emirates ID, labour contract, certificates and signed policies to the record. Restrict access so only HR can see them, because they are personal data.

## Employee status

| Status | Meaning | Payroll |
| --- | --- | --- |
| Active | Currently employed | Included |
| Inactive | Long unpaid leave or secondment | Excluded |
| Suspended | Temporarily blocked | Excluded |
| Left | Employment ended | Excluded; record kept |

## Changes during employment

Promotions, transfers, salary changes and new contracts are recorded as separate documents so history is kept. See [Promotions and transfers](/hr-payroll/promotions-transfers).

## Assets issued to employees

Laptops, phones, cars, tools and access cards issued to an employee are tracked with [asset movements](/assets/asset-movement) or an assignment list, so they are recovered at exit.

## Common problems

:::details An employee is missing from payroll
Check that the status is Active, a salary structure is assigned from a date before the payroll period, and the employee belongs to the company being processed.
:::

:::details Leave approver is not getting requests
Set the **Leave Approver** on the employee, or the department's approvers.
:::

:::details Duplicate employees after import
Merge them by renaming one record to the other's ID with **Merge** ticked.
:::

## Related pages

- [Visas and PRO tasks](/hr-payroll/visa-pro)
- [Employee self-service](/hr-payroll/self-service)
- [Salary structures](/hr-payroll/salary-structure)

@@ recruitment | Recruitment and onboarding
@summary Plan headcount, advertise jobs, track applicants and interviews, make offers, and take new joiners through UAE onboarding to their first day.

## Planning headcount

Create a **Staffing Plan** per company and department for the year: designations, number of vacancies, and estimated cost per position. Job openings are checked against it, so departments cannot hire beyond the plan without approval.

## Job requisitions and openings

1. A manager raises a **Job Requisition** with the designation, number of positions, expected joining date and reason (new role or replacement).
2. HR approves it and creates a **Job Opening** with the description, location, salary range, required qualifications and closing date.
3. Tick **Publish on Website** to show it on your [careers page](/website/careers-page).

## Applicants

Each candidate becomes a **Job Applicant**, from the careers page, email or manual entry. Record their source (website, agency, referral, LinkedIn), CV, current location, notice period and visa status.

| Status | Meaning |
| --- | --- |
| Open | New |
| Replied | Contacted |
| Hold | Kept for later |
| Accepted | Offer accepted |
| Rejected | Not progressed |

!fig Job applicant list with status and interview stage

## Interviews

1. Create **Interview Rounds** for the role, such as HR screening, technical and manager, each with skills to rate.
2. Schedule an **Interview** for the applicant, with date, time and interviewers. Interviewers are notified.
3. Interviewers submit **Interview Feedback** with ratings and a recommendation.

## Job offers

1. Click **Create › Job Offer** from the applicant.
2. Enter the designation, joining date and offer terms: basic, housing, transport, other allowances, leave, air tickets, probation and notice.
3. Print the offer letter with your template, and email it.
4. Record acceptance or rejection.

:::uae Offer letters and MOHRE contracts
For mainland employees, the terms in your offer letter must match the MOHRE employment contract. Keep basic salary consistent, because gratuity is based on it.
:::

## Onboarding

When the candidate accepts, create the employee and start an **Employee Onboarding** from a template. Each task has an owner and due date.

| Task | Owner | Typical timing |
| --- | --- | --- |
| Signed offer and MOHRE (or free zone) contract | HR | Before entry permit |
| Entry permit applied | PRO | Week 1 |
| Medical fitness test | Employee / PRO | After entry |
| Emirates ID biometrics | Employee / PRO | After medical |
| Residence visa stamped | PRO | 2–4 weeks |
| Health insurance enrolment | HR | Before visa stamping |
| Bank account or salary card | Employee / HR | Before first payroll |
| Laptop, email, access card | IT / Admin | Day 1 |
| Induction and safety training | HR / Manager | Week 1 |
| ILOE subscription | Employee | Within the required time |

!fig Onboarding checklist with tasks assigned to HR, PRO and IT

## Related pages

- [Careers page](/website/careers-page)
- [Employee records](/hr-payroll/employees)
- [Visas and PRO tasks](/hr-payroll/visa-pro)

@@ attendance-leave | Attendance and leave
@summary Record attendance from devices, mobile or supervisors, and manage every UAE leave type: entitlements, policies, applications, approvals, balances and encashment.

## Attendance

### Ways to record attendance

| Method | How |
| --- | --- |
| Biometric devices | Check-ins are imported as **Employee Checkin** records and processed into attendance by shift |
| Mobile check-in | Employees check in from their phone, with location if required |
| Bulk marking | Supervisors mark a team present, absent or on leave for a day |
| Attendance request | Employees request corrections, for example for site visits or work from home |

### Attendance statuses

| Status | Meaning |
| --- | --- |
| Present | Worked the day |
| Absent | Did not work, no leave |
| Half Day | Worked part of the day |
| On Leave | Approved leave |
| Work From Home | Remote work |

Late entry and early exit are recorded against the shift's grace periods. See [Shifts and rosters](/hr-payroll/shifts-rosters).

!fig Attendance calendar for a team showing present, absent and on leave

## Leave under UAE law

:::uae Which law applies?
These entitlements follow Federal Decree-Law No. 33 of 2021 for the private sector. Free zones may have their own rules, and DIFC and ADGM have separate employment laws. Check with your HR adviser.
:::

| Leave type | Entitlement |
| --- | --- |
| Annual leave | 2 days a month after 6 months' service; 30 calendar days a year after one year |
| Sick leave | Up to 90 days a year after probation: 15 days full pay, 30 days half pay, 45 days unpaid |
| Maternity leave | 60 days: 45 days full pay, 15 days half pay |
| Parental leave | 5 working days within 6 months of the birth, for either parent |
| Bereavement leave | 5 days for a spouse; 3 days for a parent, child, sibling or grandparent |
| Study leave | 10 working days a year for eligible employees enrolled in a UAE institution |
| Hajj leave | Commonly up to 30 days unpaid once during employment, per company policy |
| Unpaid leave | By agreement |

## Setting up leave

1. Create a **Leave Type** for each kind of leave.

| Option | Use |
| --- | --- |
| Max Leaves Allowed | Annual cap |
| Is Carry Forward / Maximum Carry Forwarded | Unused annual leave carried over |
| Is Leave Without Pay | Deducts salary |
| Is Partially Paid Leave / Fraction of Daily Salary | Half-pay sick leave |
| Is Earned Leave / Earned Leave Frequency | Accrues monthly, for example 2.5 days a month |
| Is Encashable | Can be paid out |
| Include holidays within leaves as leaves | Calendar days (annual leave) or working days |
| Allow Negative Balance | Lets employees go below zero |

2. Combine leave types into a **Leave Policy** with the annual allocation for each, for example "UAE Standard – 30 days".
3. Assign the policy with **Leave Policy Assignment** per employee, by joining date or for a whole group at once.
4. DocFlow allocates and accrues leave automatically.

## Applying for leave

1. The employee creates a **Leave Application** from self-service: leave type, from and to dates, half day if needed, and reason.
2. DocFlow shows the balance and the number of days, excluding holidays where the leave type requires.
3. The leave approver is notified and approves or rejects.
4. Approved leave updates the balance and marks attendance as On Leave.

!fig Leave application with balance, dates and approver

## Leave balances, carry forward and encashment

- **Leave Ledger** records every allocation, application and expiry.
- At year end, run **Leave Allocation** with carry forward, up to the maximum allowed.
- Unused leave can be paid out with **Leave Encashment**, through payroll. At separation, unused annual leave is paid in the final settlement.
- **Compensatory Leave Request** gives a day off for work on a holiday or rest day.

## Reports

| Report | Shows |
| --- | --- |
| Monthly Attendance Sheet | Each employee's status per day |
| Employee Leave Balance | Allocated, taken and remaining per type |
| Leave Ledger | Every leave transaction |
| Shift Attendance | Late entries and early exits |

## Common problems

:::details "Insufficient leave balance"
The employee has used their allocation. Approve the extra days as unpaid leave, or check whether last year's balance was carried forward.
:::

:::details Weekends are counted as leave
Check **Include holidays within leaves as leaves** on the leave type and that the employee has the right holiday list.
:::

:::details Check-ins are not becoming attendance
The shift type needs **Enable Auto Attendance** and a process date, and the check-ins must be linked to the right employee via the device ID.
:::

## Related pages

- [Shifts and rosters](/hr-payroll/shifts-rosters)
- [Holiday lists](/organization/holiday-list)
- [Air tickets and leave salary](/hr-payroll/air-tickets)

@@ salary-structure | Salary structures
@summary Define salary components, formulas and structures, assign them to employees and handle variable pay, arrears and additional salary.

## Salary components

A **Salary Component** is one line on a payslip.

| Component | Type | Typical formula or source |
| --- | --- | --- |
| Basic Salary | Earning | Base from the assignment |
| Housing Allowance | Earning | Fixed, or a percentage of basic |
| Transport Allowance | Earning | Fixed |
| Other Allowance | Earning | Fixed |
| Overtime | Earning | From approved overtime |
| Commission / Incentive | Earning | Additional salary |
| Leave Salary / Encashment | Earning | From leave encashment |
| Pension – Employee (UAE nationals) | Deduction | Percentage of contribution salary |
| Pension – Employer | Earning, not paid | Employer cost, shown separately |
| Loan Repayment | Deduction | From employee loans |
| Advance Recovery | Deduction | From employee advances |
| Unpaid Leave | Deduction | Days without pay × daily rate |

### Component fields

| Field | What it does |
| --- | --- |
| Abbreviation | Used in formulas, for example `B` for basic |
| Type | Earning or Deduction |
| Depends on Payment Days | Reduces the amount for unpaid days |
| Is Tax Applicable | Not used in the UAE |
| Do Not Include in Total | For employer-only costs |
| Is Flexible Benefit | For benefit plans |
| Statistical Component | Used in formulas but not paid |
| Accounts | Expense or liability account per company |
| Formula / Condition | Calculation and when it applies |

!fig Salary structure with basic, housing and transport components

## Salary structures

A **Salary Structure** combines components for a group of employees, for example "Staff – Monthly" or "Labour – Monthly".

1. Go to **HR › Salary Structure › New**.
2. Set the company, **Payroll Frequency** (Monthly) and currency.
3. Add earnings and deductions with amounts or formulas, such as `HRA = B * 0.5`.
4. Choose the **Mode of Payment** and **Payment Account**.
5. Submit.

## Assigning a structure

Create a **Salary Structure Assignment** for each employee with the structure, **From Date** and **Base** (usually the monthly basic). Use **Assign to Employees** on the structure for many people at once. When salary changes, create a new assignment from the effective date; history is kept.

## Variable and one-off pay

| Need | Use |
| --- | --- |
| One-off bonus or commission | **Additional Salary** for the month |
| Deduction for a fine or damage | Additional Salary with a deduction component |
| Back pay after a late salary increase | **Arrears** calculated from the new assignment date |
| Retention bonus paid later | **Retention Bonus** with a payment date |
| Pay based on hours | Timesheet-based salary slips |

:::uae Basic salary matters
End-of-service gratuity, and often leave salary, are calculated on basic salary only. Keep basic salary consistent with the MOHRE contract, and avoid splitting pay so that basic is unrealistically low.
:::

:::uae Deduction limits
UAE law limits deductions from wages; in general they should not exceed half of the wage in total, and some deductions need the employee's written consent. Keep loan repayments and fines within the limits.
:::

## Common problems

:::details A formula returns zero
Check that abbreviations match exactly and that the employee's base is set on the assignment.
:::

:::details The salary slip uses the old structure
The new assignment's From Date is after the payroll period start. Correct the date.
:::

## Related pages

- [Overtime](/hr-payroll/overtime)
- [Pension](/hr-payroll/pension)
- [Monthly payroll](/hr-payroll/wps-payroll)

@@ wps-payroll | Monthly payroll and WPS
@summary Run payroll end to end: prepare data, create and check salary slips, generate the WPS salary file, pay through the bank and post to accounts.

:::note Before you start
Finish attendance and leave for the month, approve overtime and expense claims, and process joiners, leavers, salary changes, loans and one-off payments.
:::

## The payroll cycle

| Step | Document |
| --- | --- |
| 1. Prepare data | Attendance, leave, overtime, additional salary, loans |
| 2. Create salary slips | Payroll Entry |
| 3. Review | Salary Register, comparison with last month |
| 4. Submit | Salary slips and payroll journal |
| 5. Generate WPS file | WPS Salary File (SIF) |
| 6. Pay | Upload to the bank, record the payment |
| 7. Distribute payslips | Email or self-service |

## Running payroll

1. Go to **HR › Payroll Entry › New**.
2. Choose the **Company**, **Posting Date**, **Payroll Frequency** (Monthly), **Start Date** and **End Date**.
3. Choose the **Payroll Payable Account** and **Payment Account** (your bank).
4. Optionally filter by branch, department or designation.
5. Click **Get Employees**, then **Create Salary Slips**.
6. Open a few slips and check payment days, earnings and deductions.
7. Click **Submit Salary Slips**. DocFlow posts the payroll journal.

!fig Payroll entry for March 2026 with employees and salary slip totals

## What a salary slip calculates

| Item | Source |
| --- | --- |
| Working days | Days in the period (or 30, per settings) |
| Payment days | Working days minus unpaid leave and absences |
| Earnings | Structure components, prorated by payment days where set |
| Overtime | Approved overtime records |
| Additional salary | Bonuses, commissions, arrears |
| Deductions | Loans, advances, unpaid leave, employee pension share |
| Net pay | Earnings minus deductions |

## The WPS salary file

Salaries in the UAE private sector are paid through the **Wage Protection System**, using a **Salary Information File (SIF)** uploaded to an approved bank or exchange house.

1. From the payroll entry, click **Create › WPS Salary File**.
2. Check the **Employer ID** (MOHRE establishment number), employer bank routing code and the file date.
3. DocFlow builds the SIF:

| Record | Contains |
| --- | --- |
| EDR (one per employee) | Person code, routing code, IBAN or salary card number, pay start and end dates, days in period, fixed pay, variable pay, days of leave |
| SCR (one per file) | Employer ID, bank routing code, file date and time, salary month, number of records, total salary, currency |

4. Download the file, check the totals, and upload it to your bank's WPS portal.

!fig WPS salary file preview with employee detail and summary records

:::uae Pay on time through WPS
Salaries must be paid through WPS within the required time after they fall due, normally by the 15th of the following month. Late or missing payments can lead to penalties and a block on new work permits. The payroll dashboard flags any active employee missing from the file.
:::

## Paying and posting

After the bank confirms, create the **Payment Entry** from the payroll entry (or a bank entry) to clear the payroll payable account.

Payroll journal for gross pay of AED 412,600 and deductions of AED 8,200:

| Account | Debit | Credit |
| --- | --- | --- |
| Salaries and Wages (by cost centre) | 412,600 | |
| Employee Loans and Advances | | 8,200 |
| Payroll Payable | | 404,400 |

Bank payment: Payroll Payable debited AED 404,400, bank credited.

## Payslips

Tick **Email Salary Slip to Employee** in payroll settings. Payslips are sent as password-protected PDFs, and employees can download them from self-service.

## Off-cycle payments

For a leaver's final settlement or a correction, create an individual **Salary Slip** outside the payroll entry, or an additional salary in the next month.

:::example Example: payroll at Saqr Steel
Saqr Steel pays 86 employees. March gross is AED 412,600, including AED 23,850 overtime for a rush order. The SIF is uploaded on 27 March and salaries are credited on 28 March.
:::

## Common problems

:::details The bank rejects the SIF file
Usually a wrong routing code, a missing person code, an IBAN of the wrong length, or a file name not in the bank's format. Fix the data and regenerate.
:::

:::details Payment days are wrong
Check the holiday list, attendance and unpaid leave for the month, and the payroll setting for working days.
:::

:::details An employee is paid in cash
WPS normally requires payment through an approved channel. Ask your bank about salary cards.
:::

## Related pages

- [Payroll reports](/hr-payroll/payroll-reports)
- [Salary structures](/hr-payroll/salary-structure)
- [Monthly payroll walkthrough](/guides/monthly-payroll)

@@ gratuity | End-of-service gratuity
@summary Calculate gratuity correctly under UAE law, accrue it every month, and pay it in the final settlement.

## The rule

An employee who completes at least one year of continuous service is entitled to end-of-service gratuity, calculated on their **last basic salary**:

| Service | Gratuity |
| --- | --- |
| First 5 years | 21 days' basic salary for each year |
| Beyond 5 years | 30 days' basic salary for each additional year |
| Part of a year | Pro rata |
| Maximum | Total gratuity cannot exceed two years' wages |

Days of unpaid absence are excluded from service. Under the current law, gratuity is not reduced because the employee resigned.

:::uae Who is covered
UAE and GCC nationals in the private sector are generally covered by the pension system instead of gratuity. Some employers have also joined an approved end-of-service savings scheme. DIFC uses its own employee savings scheme. Set the right rule for each group of employees.
:::

## Setting up the gratuity rule

1. Go to **HR › Gratuity Rule** and open or create **UAE – Labour Law 2021**.
2. Set **Calculate Gratuity Amount Based On** = Current Slab (or Sum of all previous slabs, per your interpretation).
3. Add slabs: from 0 to 5 years at 21 days; from 5 years onwards at 30 days.
4. Choose the salary component: Basic Salary.
5. Set **Total Working Days Per Year** (365) and the basis for the daily rate.
6. Set the minimum years of service (1) for eligibility.

!fig Gratuity rule with 21-day and 30-day slabs

## Worked example

:::example Example: calculating gratuity
Fatima has worked for Al Waha Trading for 7 years and 4 months. Her last basic salary is AED 9,000.

- Daily basic wage: 9,000 × 12 ÷ 365 = AED 295.89
- First 5 years: 5 × 21 × 295.89 = AED 31,068.45
- Remaining 2.33 years: 2.33 × 30 × 295.89 = AED 20,712.30
- Total gratuity: about AED 51,780.75
:::

## Monthly accrual

Accrue gratuity each month so the balance sheet shows the real liability.

1. Run the **Gratuity Accrual** (or a monthly journal based on the gratuity liability report).
2. DocFlow calculates each employee's gratuity to date and posts the change.

| Account | Debit | Credit |
| --- | --- | --- |
| Gratuity Expense | Monthly change | |
| Provision for End of Service Benefits | | Monthly change |

## Paying gratuity

At separation, create a **Gratuity** record for the employee. It calculates the amount from the rule, and is paid through the [full and final statement](/hr-payroll/separation). The payment clears the provision.

## Common problems

:::details Gratuity is lower than expected
Check the joining date, unpaid leave that reduces service, and that the Basic Salary component is the one linked to the rule.
:::

:::details The employee has less than a year's service
They are not eligible. Gratuity shows zero.
:::

## Related pages

- [Separation and final settlement](/hr-payroll/separation)
- [Month-end closing](/accounting/period-closing)

@@ separation | Separation and final settlement
@summary Handle resignations and terminations: notice, exit checklist, final settlement, visa cancellation and payment within the legal deadline.

## Recording the separation

1. When an employee resigns or is terminated, create an **Employee Separation** (or record the **Resignation Letter Date** and **Relieving Date** on the employee).
2. Enter the notice date, the last working day and the reason.
3. Attach the resignation or termination letter.
4. Start the exit checklist from an **Employee Separation Template**.

## Notice periods

Notice is set in the contract and must be between 30 and 90 days. During probation, shorter notice rules apply. If notice is not served, a payment in lieu may be due, depending on who ends the contract and the contract terms.

## Exit checklist

| Task | Owner |
| --- | --- |
| Handover of work, files and passwords | Manager |
| Return of laptop, phone, car, tools, access card and uniform | IT / Admin |
| Clearance from finance (advances, loans, expense claims) | Accounts |
| Exit interview | HR |
| Final settlement calculated and approved | HR / Accounts |
| Cancellation of labour card and visa, or transfer to a new employer | PRO |
| Health insurance cancellation | HR |
| Experience certificate | HR |

!fig Full and final statement with salary, leave encashment and gratuity

## The full and final statement

Create a **Full and Final Statement** for the employee. It collects:

| Payable to employee | Receivable from employee |
| --- | --- |
| Salary up to the last working day | Outstanding loans and advances |
| Unused annual leave encashment | Unreturned assets |
| Gratuity | Notice shortfall, if applicable |
| Air ticket entitlement, if in the contract | Other agreed deductions |
| Pending expense claims | |

Submit it, then pay the net amount by bank transfer (or through the WPS file of an off-cycle run). DocFlow clears the gratuity provision and the employee's balances.

:::uae Timing of final dues
Final dues must be paid within 14 days of the end of employment. Plan visa cancellation and the final payment together, so the employee is not left without status in the country.
:::

## After separation

Set the employee's status to **Left** with the relieving date. Their record and history remain for reporting, audits and rehire checks.

## Related pages

- [Gratuity](/hr-payroll/gratuity)
- [Visas and PRO tasks](/hr-payroll/visa-pro)
- [Advances and loans](/hr-payroll/advances-loans)

@@ hr-settings | HR and payroll settings
@summary Company-wide rules for employee naming, approvals, leave, attendance and payroll calculation.

## HR settings

| Setting | What it does | Suggested |
| --- | --- | --- |
| Employee Naming By | Naming series or full name | Series, for example `EMP-.####` |
| Standard Working Hours | Hours per day for calculations | 8 |
| Retirement Age | Default retirement age | Per company policy |
| Leave Approval Notification | Notifies approvers | On |
| Leave Approver Mandatory | Every application needs an approver | On |
| Prevent Self Leave Approval | Employees cannot approve their own leave | On |
| Expense Approver Mandatory | Every claim needs an approver | On |
| Send Birthday / Work Anniversary Reminders | Team reminders | Optional |
| Auto Leave Encashment | Encash unused leave automatically | Off |
| Restrict Backdated Leave Application | Blocks back-dated leave | On, with a role exception |

## Payroll settings

| Setting | What it does | Suggested |
| --- | --- | --- |
| Payroll Based On | Leave or attendance | Attendance if you use devices |
| Consider Unmarked Attendance As | Present or absent | Present, to avoid wrong deductions |
| Include Holidays in Total Working Days | Daily rate basis | Off if you use 30-day months |
| Max Working Hours Against Timesheet | For hourly pay | As needed |
| Email Salary Slip to Employee | Sends payslips | On |
| Encrypt Salary Slips in Emails | Password-protects PDFs | On |
| Password Policy | Pattern for the PDF password | For example date of birth |
| Show Leave Balances in Salary Slip | Prints balances | On |

!fig Payroll settings with daily wage basis and salary slip emailing

:::uae Daily rate for deductions
Many UAE employers calculate a day's pay as monthly salary ÷ 30. Use one basis consistently for unpaid leave, leave encashment and final settlement, and state it in your employee handbook.
:::

## Related pages

- [Salary structures](/hr-payroll/salary-structure)
- [Monthly payroll](/hr-payroll/wps-payroll)

@@ shifts-rosters | Shifts and rosters
@summary Define shift patterns, plan rosters for warehouse, site and retail teams, process check-ins into attendance and track lateness.

## Shift types

A **Shift Type** defines working hours and attendance rules.

| Field | What it does |
| --- | --- |
| Start Time / End Time | Shift hours, for example 07:00–16:00 |
| Holiday List | Days off for this shift |
| Enable Auto Attendance | Turns check-ins into attendance automatically |
| Determine Check-in and Check-out | Alternating entries or first and last check-in |
| Working Hours Calculation Based On | First check-in and last check-out, or every valid pair |
| Begin Check-in Before Shift Start (minutes) | Earliest valid check-in |
| Allow Check-out After Shift End (minutes) | Latest valid check-out |
| Working Hours Threshold for Half Day / Absent | Hours below which the day is half or absent |
| Late Entry / Early Exit Grace Period | Minutes allowed before lateness is recorded |
| Process Attendance After | Date from which auto attendance runs |

Common UAE shift types:

| Shift | Hours |
| --- | --- |
| Office | 08:30–17:30, Saturday and Sunday off |
| Warehouse morning | 06:00–15:00 |
| Warehouse evening | 14:00–23:00 |
| Retail split | 10:00–14:00 and 17:00–22:00 |
| Ramadan office | 09:00–15:00 |
| Summer site (outdoor) | 06:00–12:30 and 15:00–18:00 |

## Assigning shifts

- **Default Shift** on the employee for people who always work the same hours.
- **Shift Assignment** for a date range.
- **Shift Schedule** for rotating patterns, for example one week mornings, one week evenings.
- **Shift Request** from employees, approved by their manager.

!fig Weekly roster for warehouse staff with morning and evening shifts

## The roster view

Open **Roster** to see a week or month for a team, drag shifts between people and days, and spot gaps before they happen.

## From check-ins to attendance

Biometric devices send **Employee Checkin** records with the device ID. With auto attendance on, DocFlow groups check-ins by shift each day and marks Present, Half Day or Absent, and records late entry and early exit.

:::uae Ramadan and summer hours
Create a separate Ramadan shift type with two fewer hours for the month. For outdoor workers, adjust shifts for the midday break that applies during the summer months.
:::

## Common problems

:::details Employees are marked absent although they checked in
The check-in is outside the valid window, or the device ID is not linked to the employee. Widen the window or fix the link, then reprocess attendance.
:::

## Related pages

- [Attendance and leave](/hr-payroll/attendance-leave)
- [Overtime](/hr-payroll/overtime)

@@ overtime | Overtime
@summary Apply UAE overtime rules, capture overtime from attendance or timesheets, approve it and pay it through payroll.

## UAE overtime rules in brief

| Situation | Pay |
| --- | --- |
| Overtime hours | Basic hourly wage plus at least 25% |
| Overtime between 10 pm and 4 am | Basic hourly wage plus at least 50% |
| Work on the weekly rest day | A substitute rest day, or basic wage for the day plus at least 50% |
| Maximum overtime | Normally no more than 2 hours a day, unless exceptions apply |

Shift workers whose normal hours include night time do not get the night premium for those hours.

## Recording overtime

| Source | How |
| --- | --- |
| Attendance | Hours worked beyond the shift are calculated from check-ins |
| Timesheets | Hours logged above standard hours |
| Manual | Supervisor enters approved hours |

Create **Overtime** records (or additional salary) per employee per month, with hours by type, and send them for approval.

!fig Overtime approval with hours by type for one employee

## Paying overtime

Create salary components **Overtime – Normal**, **Overtime – Night** and **Overtime – Rest Day**, with formulas based on the hourly basic rate, for example `B / 30 / 8 * hours * 1.25`.

:::example Example: calculating overtime
A storekeeper earns a basic salary of AED 3,000. The hourly rate is 3,000 ÷ 30 ÷ 8 = AED 12.50. Ten normal overtime hours pay 10 × 12.50 × 1.25 = AED 156.25. Four night hours pay 4 × 12.50 × 1.5 = AED 75.
:::

## Related pages

- [Shifts and rosters](/hr-payroll/shifts-rosters)
- [Salary structures](/hr-payroll/salary-structure)

@@ expense-claims | Expense claims
@summary Let employees claim business expenses with receipts, get them approved, recover VAT where allowed and reimburse through payroll or bank.

## Setting up

1. Create **Expense Claim Types** such as Fuel, Parking, Salik, Meals, Client Entertainment, Travel, Accommodation, Mobile, Visa Fees, each with a default expense account per company.
2. Set expense approvers on employees or departments.
3. Decide how claims are reimbursed: through payroll, by bank transfer, or from petty cash.

## Submitting a claim

1. The employee creates an **Expense Claim** from self-service or mobile.
2. Adds one line per expense: date, type, description, amount, and VAT where shown on a valid tax invoice.
3. Attaches photos of receipts.
4. Links to a project or cost centre if relevant.
5. Chooses the approver and submits.

!fig Expense claim with receipts, expense types and VAT amounts

## Approval and posting

The approver checks and sets **Approval Status** to Approved. Finance reviews receipts and submits the claim, which posts:

| Account | Debit | Credit |
| --- | --- | --- |
| Expense accounts (by type) | Net amounts | |
| VAT Input 5% | Recoverable VAT | |
| Employee Payable (employee) | | Total |

## Reimbursement

| Method | How |
| --- | --- |
| Bank transfer | Payment entry from the claim |
| Payroll | Add the claim to the next salary slip |
| Petty cash | Payment from the petty cash account |
| Against an advance | Set the claim against an employee advance |

:::uae Recovering VAT on claims
Input VAT on an employee expense can be recovered if the expense is for the business and supported by a valid tax invoice, ideally in the company's name, or a simplified tax invoice where allowed. VAT on client entertainment is generally blocked from recovery.
:::

## Related pages

- [Advances and loans](/hr-payroll/advances-loans)
- [Petty cash](/accounting/petty-cash)
- [Project costing](/projects/project-costing)

@@ advances-loans | Employee advances and loans
@summary Give salary advances and interest-free loans, recover them through payroll within legal limits, and settle them at exit.

## Employee advances

Use an **Employee Advance** for short-term needs such as business travel, a site purchase or visa fees paid by the employee.

1. The employee requests an advance with purpose and amount.
2. The manager approves it; finance pays it with **Create › Payment**.
3. When the employee submits expense claims, they are set against the advance.
4. Any unspent amount is returned, or deducted from salary with **Create › Additional Salary**.

## Loans

1. Create a **Loan Product**, for example "Salary Loan – interest free", with the loan account, maximum amount and repayment method.
2. The employee applies with a **Loan Application**: amount, reason and number of monthly repayments.
3. After approval, create the **Loan** and disburse it by bank transfer.
4. Tick **Repay from Salary**. Each salary slip deducts the instalment automatically.

!fig Employee loan with repayment schedule linked to payroll

## Behind the scenes

| Event | Debit | Credit |
| --- | --- | --- |
| Loan disbursed | Employee Loans (asset) | Bank |
| Monthly repayment through payroll | Payroll Payable | Employee Loans |

:::uae Limits on deductions
UAE law limits total deductions from wages, generally to no more than half of the wage, and some deductions need the employee's written consent. Keep instalments within the limit, and recover any balance from the final settlement.
:::

## Related pages

- [Expense claims](/hr-payroll/expense-claims)
- [Separation and final settlement](/hr-payroll/separation)

@@ appraisals | Performance appraisals
@summary Set goals and key result areas, run appraisal cycles with self and manager reviews, and link results to increments and promotions.

## Building blocks

| Record | Purpose |
| --- | --- |
| Key Result Area (KRA) | What matters in a role, such as Sales Target, Customer Satisfaction, Safety |
| Appraisal Template | KRAs and weights for a role, plus rating criteria for behaviours |
| Appraisal Cycle | The review period and the employees in it |
| Goal | A measurable target, with progress updates during the year |
| Appraisal | One employee's review: self-appraisal, manager scores and final score |

## Running an appraisal cycle

1. Create KRAs and templates for each role.
2. Create an **Appraisal Cycle**, for example "Annual Review 2026", choose the period, the template per designation and the employees.
3. Click **Create Appraisals**.
4. Employees complete their **self-appraisal**: comments and self-ratings.
5. Managers score each KRA, add feedback and a final rating.
6. HR reviews scores across departments for consistency and closes the cycle.

!fig Appraisal with KRA scores, self-review and manager feedback

## Goals during the year

Set **Goals** linked to KRAs at the start of the year, with progress updated monthly. The appraisal uses goal progress so year-end scores reflect actual results.

## Outcomes

Record outcomes such as increments, promotions or development plans. Increments become new [salary structure assignments](/hr-payroll/salary-structure); promotions are recorded with [Employee Promotion](/hr-payroll/promotions-transfers).

## Related pages

- [Training](/hr-payroll/training)
- [Promotions and transfers](/hr-payroll/promotions-transfers)

@@ training | Training and development
@summary Plan training programmes, schedule events, record attendance and results, and track certificates and their expiry.

## Steps

1. Create a **Training Program**, such as "Forklift Operation", "Food Safety Level 2" or "Fire Warden", with the trainer, description and duration.
2. Schedule a **Training Event**: dates, location, trainer and invited employees. Invitations are emailed.
3. After the event, record **Training Result** per employee: attended, score and pass or fail.
4. Collect **Training Feedback** from participants.
5. Attach certificates to the employee record, with expiry dates.

!fig Training event with trainer, dates and invited employees

## Training costs

Record trainer invoices as purchase invoices against a training expense account, tagged to the department. Use the cost per participant when planning budgets.

:::uae Mandatory training and certificates
Some roles need specific certificates, for example food handler training under municipality rules, or operator licences for forklifts and cranes. Track expiry dates with notification rules so staff never work with lapsed certificates.
:::

## Related pages

- [Appraisals](/hr-payroll/appraisals)
- [Notifications](/getting-started/notifications)

@@ self-service | Employee self-service
@summary Let employees handle their own requests from a phone or laptop, and cut routine work for HR.

Give every employee a DocFlow user with the **Employee Self Service** role, linked to their employee record.

## What employees can do

| Task | Where |
| --- | --- |
| Check in and out | Attendance, with location if required |
| Apply for leave and see balances | Leave Application |
| Submit expense claims with receipt photos | Expense Claim |
| Request an advance | Employee Advance |
| Download payslips | Salary Slip |
| Request letters | HR letter request |
| Update personal details | Employee profile (fields you allow) |
| See their appraisals and goals | Appraisal, Goal |
| Request shift changes | Shift Request |
| Raise attendance corrections | Attendance Request |

!fig Employee self-service home screen on mobile

## Letters and certificates

Set up print formats for common letters, with your letterhead and an authorised signature:

- Salary certificate (for banks, landlords, embassies)
- Employment letter (to whom it may concern)
- NOC for travel, a driving licence or a second job
- Experience certificate (at exit)

Employees request a letter; HR approves and the PDF is generated in seconds.

:::tip Fewer emails to HR
Most UAE HR teams spend hours each week on salary certificate and leave balance requests. Self-service removes most of them.
:::

## Related pages

- [Mobile access](/getting-started/mobile-access)
- [Expense claims](/hr-payroll/expense-claims)

@@ air-tickets | Air tickets and leave salary
@summary Manage annual air ticket entitlements, accrue their cost, pay or book them, and handle leave salary paid before annual leave.

Air tickets are not required by UAE labour law, but many contracts include an annual or biennial ticket to the employee's home country, sometimes for family members too.

## Recording the entitlement

Add custom fields on the employee (or the salary structure assignment):

| Field | Example |
| --- | --- |
| Ticket frequency | Every 12 or 24 months |
| Class | Economy |
| Destination | Kochi, Manila, Cairo |
| Covered family members | Employee, spouse, 2 children |
| Ticket value or allowance | AED 1,800 per person |
| Last ticket date | 15-03-2026 |

!fig Employee air ticket entitlement with frequency, destination and value

## Accruing the cost

Accrue the ticket cost monthly, like gratuity, so the liability is on the balance sheet: debit **Air Ticket Expense**, credit **Air Ticket Provision**.

## Paying or booking tickets

| Method | How |
| --- | --- |
| Cash allowance | Additional salary in the month of travel |
| Company books the ticket | Purchase invoice from the travel agent, charged against the provision |
| Employee books and claims | Expense claim, limited to the entitlement |

## Leave salary

Some companies pay salary for annual leave days before the employee travels. Create a **Leave Encashment** or additional salary for the leave days in advance, and make sure the next month's payroll does not pay those days again.

## Related pages

- [Attendance and leave](/hr-payroll/attendance-leave)
- [Separation](/hr-payroll/separation)

@@ visa-pro | Visas, Emirates ID and PRO tasks
@summary Track every employee document and the PRO work needed to issue, renew and cancel visas, IDs and work permits on time.

## Documents to track

| Document | Typical validity | Issued by |
| --- | --- | --- |
| Entry permit | 60 days to enter and change status | ICP or GDRFA (Dubai) |
| Residence visa | Usually 2 years | ICP or GDRFA |
| Emirates ID | Same as the residence visa | ICP |
| Work permit / labour card | Same as the contract | MOHRE or the free zone authority |
| Passport | Varies | Home country |
| Health insurance | 1 year | Insurer |
| ILOE subscription | As subscribed | Scheme provider |

## The visa process for a new joiner

| Step | Typical owner |
| --- | --- |
| Work permit / offer approved | PRO |
| Entry permit issued | PRO |
| Status change or entry into the UAE | Employee |
| Medical fitness test | Employee, booked by PRO |
| Emirates ID biometrics | Employee |
| Health insurance issued | HR |
| Residence visa stamped or e-visa issued | PRO |
| Labour contract signed and registered | HR / PRO |

## Tracking in DocFlow

1. Store each document's number, issue and expiry date on the employee.
2. Set [notifications](/getting-started/notifications) at 60 and 30 days before expiry for HR and PRO.
3. Create a **Project** or **Task** list for each renewal, using a template with the steps above.
4. Record government fees as expense claims or purchase invoices, tagged to the employee and a *Visa and Labour Costs* account.

!fig Visa renewal task list with due dates for one employee

## Cancellations

At separation, cancel the work permit and residence visa, or arrange the transfer to a new employer. Record the cancellation date on the employee.

:::uae Fines for delay
Late renewals of residence visas, IDs and work permits can lead to fines, and an expired visa can block WPS salary payments and new work permits. Start renewals at least a month before expiry.
:::

## Related pages

- [Employee records](/hr-payroll/employees)
- [Insurance](/hr-payroll/insurance)

@@ pension | Pension contributions for UAE and GCC nationals
@summary Set up and pay pension contributions for UAE nationals (GPSSA or the Abu Dhabi fund) and GCC nationals through payroll.

UAE nationals in the private sector are registered with the **General Pension and Social Security Authority (GPSSA)**, or with the **Abu Dhabi Pension Fund** for those working in Abu Dhabi. GCC nationals are covered by their home country's scheme through the GCC extension of insurance protection.

## Contribution salary

Contributions are calculated on a **contribution salary** defined by the pension law, normally basic salary plus specified allowances, within a minimum and maximum. Record the contribution salary as a statistical component in the employee's structure.

## Setting up

1. Create salary components:

| Component | Type | Notes |
| --- | --- | --- |
| Pension – Employee | Deduction | Employee's share |
| Pension – Employer | Earning, not included in net pay | Employer's share, posted as an expense |
| Pension – Government (if applicable) | Statistical | For reporting |

2. Set formulas using the contribution salary and the current rates for each authority.
3. Apply the components only to employees whose nationality and registration need them.

!fig Salary structure with employee and employer pension components

## Paying contributions

Each month, pay the total employee and employer contributions to the authority by its due date, and record the payment against the **Pension Payable** account. Keep the authority's monthly statement with your payroll file.

:::warning Check current rates
Contribution rates and the definition of contribution salary have changed in recent years, and differ between GPSSA and the Abu Dhabi fund, and for GCC nationals by country. Confirm the current rates with the authority before setting them up.
:::

## Related pages

- [Salary structures](/hr-payroll/salary-structure)
- [Emiratisation](/hr-payroll/emiratisation)

@@ emiratisation | Emiratisation targets
@summary Track your Emirati headcount against MOHRE targets, record support programmes and avoid contributions for shortfalls.

Private sector companies on the mainland with 50 or more employees must increase the share of UAE nationals in skilled roles each year, and some smaller companies in selected sectors must employ at least one or two Emiratis. Companies that miss their targets pay a monthly contribution for each missing Emirati.

## Tracking in DocFlow

- Record **Nationality** and a **Skill Level** (skilled or not, per MOHRE classification) on every employee.
- Create a dashboard chart of Emirati headcount in skilled roles against the target for the year.
- Record **Nafis** registration and any salary support on the employee.
- Track pension registration for each Emirati employee.

!fig Emiratisation dashboard with current Emirati headcount against target

## Planning

Use the [staffing plan](/hr-payroll/recruitment) to plan Emirati hires for the year, and tag job openings that are targeted at UAE nationals.

:::uae Check the year's targets
MOHRE sets the target percentages, deadlines and contribution amounts, usually checked at mid-year and year end. Confirm the current requirements for your company size and sector.
:::

## Related pages

- [Pension](/hr-payroll/pension)
- [Recruitment](/hr-payroll/recruitment)

@@ promotions-transfers | Promotions, transfers and contract changes
@summary Record changes to role, grade, salary, location or company with full history, and keep the MOHRE contract in line.

| Change | Record |
| --- | --- |
| New designation or grade | **Employee Promotion** with effective date and old and new values |
| Move to another branch, department or company | **Employee Transfer** |
| Salary increase or change | New **Salary Structure Assignment** from the effective date |
| Contract renewal or new terms | Update contract dates; attach the signed contract |
| Change of manager | Update **Reports To** |

!fig Employee promotion with old and new designation and effective date

## Transfers between companies

An **Employee Transfer** to another group company can create a new employee record in the receiving company, copying details. For visa and labour purposes this is a change of employer and needs the official transfer process.

## History

Each promotion, transfer and assignment is kept, so you can see what an employee earned and where they worked on any date, which matters for gratuity and audits.

:::uae Update MOHRE
A change of job title or salary must be reflected in the employee's MOHRE contract (or free zone records). Update it through the official channels and attach the new contract in DocFlow.
:::

## Related pages

- [Salary structures](/hr-payroll/salary-structure)
- [Appraisals](/hr-payroll/appraisals)

@@ payroll-reports | Payroll and HR reports
@summary Check payroll before paying, give finance the figures they need, and monitor headcount, leave and documents.

## Payroll reports

| Report | Shows |
| --- | --- |
| Salary Register | Every employee's earnings and deductions for a period |
| Bank Remittance | Net pay by bank and IBAN |
| Salary Payments Based on Payment Mode | Totals by bank, cash or card |
| Monthly Attendance Sheet | Present, absent and leave days |
| Gratuity liability | End-of-service liability per employee |
| Loan Repayment and Closure | Loans and remaining balances |
| Professional Tax / Income Tax | Not used in the UAE |

!fig Salary register for March with earnings and deductions columns

## HR reports

| Report | Shows |
| --- | --- |
| Employee Analytics | Headcount by department, designation, branch, nationality |
| Employee Birthday / Anniversary | Upcoming dates |
| Employee Leave Balance | Leave per type |
| Employees Working on a Holiday | For compensatory leave |
| Recruitment Analytics | Openings, applicants and hires |
| Document expiry (custom) | Visas, IDs and permits expiring soon |

:::tip Compare month on month
Before submitting payroll, compare this month's salary register with last month's. Every big difference (joiners, leavers, overtime spikes, deductions) should have a clear reason.
:::

## Related pages

- [Monthly payroll and WPS](/hr-payroll/wps-payroll)
- [Gratuity](/hr-payroll/gratuity)

@@ insurance | Health insurance and unemployment insurance
@summary Track employee health cover and the ILOE unemployment scheme, with renewals, dependants and costs.

## Health insurance

Employers in the UAE must provide health insurance for their employees. The requirement started in Abu Dhabi and Dubai and has since been extended across the country.

Record on each employee:

| Field | Example |
| --- | --- |
| Insurer and policy number | — |
| Category / plan | Basic, enhanced |
| Card number | — |
| Start and expiry date | — |
| Dependants covered | Spouse, children |
| Annual premium | For cost reporting |

Record premiums as purchase invoices from the insurer or broker, and allocate the cost by department. Additions and deletions during the year follow the broker's schedule.

!fig Employee health insurance details with policy and expiry

## Unemployment insurance (ILOE)

The **Involuntary Loss of Employment** scheme requires most private sector and federal government employees to subscribe. The employee pays the premium, and employers often help staff register. Record the subscription number and expiry on the employee, and remind staff before it lapses, because missed subscriptions carry fines.

:::uae Check eligibility
Some groups, such as investors who own their business, domestic workers and retirees receiving a pension, are exempt from ILOE. Check the current rules for each category of staff.
:::

## Related pages

- [Visas and PRO tasks](/hr-payroll/visa-pro)
- [Employee records](/hr-payroll/employees)
