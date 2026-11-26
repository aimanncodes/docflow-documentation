@@ overview | Human Resources at a glance
@summary Manage the whole life of an employee under UAE labour law: hiring, records and UAE documents, leave and attendance, expenses, payroll, the WPS file, month-end provisions and the end of service.

The Human Resources module is for HR staff, payroll staff and the accountants who post payroll to the books. Employees use their own screen, the **Employee App**, which is covered at the end of this module.

DocFlow follows UAE labour law by default: UAE leave types, the UAE holiday list, overtime rates, the WPS salary file, gratuity and month-end provisions. Country reports change with the country of your site.

## Where to find it

Open the **Human Resources** tile on the home screen (in the **Apps** group). The module has its own rail. Each item opens a sidebar with the forms, reports and settings of one area.

| Rail item | What you do there |
| --- | --- |
| **HR Setup** | Employees, contracts, the structure of the organisation, PRO tasks, HR Settings |
| **Leaves** | Holiday lists, leave types, policies, allocations, applications and balances |
| **Shift & Attendance** | Shifts, the roster, check-ins, attendance and overtime |
| **Expenses** | Expense claims, employee advances, travel and vehicles |
| **Recruitment** | Job openings, applicants, interviews and offers |
| **Performance** | Appraisals, goals, feedback, promotions and transfers |
| **Tenure** | Onboarding, separation, exit interviews, grievances and training |
| **Payroll** | Salary structures, payroll runs, salary slips, the WPS file and HR month-end |
| **Tax & Benefits** | Income tax slabs, exemptions and benefits (not used in the UAE) |
| **End of Service** | Gratuity, scheme transfers and the actuarial valuation |
| **Employee Documents** | Passports, visas, Emirates IDs, work permits and their expiry dates |
| **Employee App** | The self-service app for employees and managers |
| **Careers Page** | Your public list of job openings |

!fig The Human Resources rail with HR Setup open and the Workforce Dashboard link in the sidebar @shot 06-hr-payroll/16-workforce-dashboard.png

## From hire to pay

| Stage | DocFlow records |
| --- | --- |
| Hiring | Job Opening, Job Applicant, Interview, Job Offer |
| Joining | Employee Onboarding, Employee (contract, documents) |
| Day to day | Attendance, Employee Checkin, Leave Application, Expense Claim, Shift Request |
| Monthly | Overtime Slip, Payroll Entry, Salary Slip, WPS Salary File, HR Month-End |
| Development | Appraisal, Goal, Training Event, Employee Promotion, Employee Transfer |
| Leaving | Employee Separation, Gratuity, Full and Final Statement |

:::uae Which law applies?
These pages follow Federal Decree-Law No. 33 of 2021, which covers most private sector employers on the mainland and in many free zones. DIFC and ADGM have their own employment laws. Confirm anything not covered here with your HR adviser.
:::

## Who does what

| Role | Typical work |
| --- | --- |
| **Employee** / **Employee Self Service** | Uses the Employee App: check-in, leave, expenses, payslips |
| **Leave Approver** / **Expense Approver** | Approves the team's requests |
| **Interviewer** | Gives interview feedback |
| **HR User** | Day-to-day HR work: records, leave, attendance, documents |
| **HR Manager** | Full HR and payroll access: settings, salary structures, payroll |
| **Accounts Manager** | Pays salaries, posts the HR month-end provisions |

## Read in this order the first time

1. [Setup checklist and settings](/human-resources/hr-settings)
2. [Employees and contracts](/human-resources/employees)
3. [UAE employee documents and PRO tasks](/human-resources/visa-pro)
4. [Holidays and leave](/human-resources/attendance-leave)
5. [Shifts, attendance and the roster](/human-resources/shifts-rosters) and [Overtime](/human-resources/overtime)
6. [Payroll setup](/human-resources/salary-structure), [Running payroll](/human-resources/running-payroll) and [The WPS salary file](/human-resources/wps-payroll)
7. [HR month-end provisions](/human-resources/hr-month-end) and [Gratuity and final settlement](/human-resources/gratuity)
8. [The Employee App](/human-resources/self-service)

See the [monthly payroll walkthrough](/guides/monthly-payroll) for one complete example.

@@ hr-settings | Setup checklist and settings
@summary The masters to set up in order, and the HR Settings and Payroll Settings that change how DocFlow behaves.

Before you add employees and run payroll, set up a few masters and two settings forms: **HR Settings** and **Payroll Settings**.

**Where to find it:** **HR Setup** > **Settings** and **Payroll** > **Settings**.

## Before you start

- You need the **HR Manager** role. To change accounts and post payroll you also need an accounts role.
- Your Entity must exist, with its chart of accounts. See [Companies](/organization/company).

## Set up the masters

DocFlow shows an onboarding list for HR with these steps. Do them in this order:

1. Create your departments (**Department**).
2. Create your job titles (**HR Setup** > **Designation**). You can also add **Employee Group**, **Employee Grade** and **Employment Type**.
3. Create the holiday list for the year. On a UAE entity, use **Set up UAE Holidays**. See [Holidays and leave](/human-resources/attendance-leave).
4. Check the leave types. DocFlow already has the UAE leave types.
5. Add your employees. See [Employees and contracts](/human-resources/employees).
6. Create the salary components, a salary structure and a **Payroll Period** for the year. See [Payroll setup](/human-resources/salary-structure).
7. Run your first payroll. See [Running payroll](/human-resources/running-payroll).

## Check HR Settings

1. Open **HR Setup** > **Settings**.
2. On the **Employee** tab, check **Employee Naming By**, **Standard Working Hours** (8 by default) and **Retirement Age (In Years)**. Choose whether HR gets reminders for **Work Anniversaries**, **Birthdays** and **Holidays**.
3. On the **Leaves** tab, decide:
   - **Leave Approver Mandatory In Leave Application** (on by default).
   - **Prevent self approval for leaves even if user has permissions**.
   - **Send Leave Notification** (on by default). The employee gets an email when the leave is approved or rejected.
   - **Restrict Backdated Leave Application**, and the **Role Allowed to Create Backdated Leave Application**.
   - **Leave Salary Advance Component**, used when leave salary is paid before the leave.
4. On the **Expenses** tab, decide **Expense Approver Mandatory In Expense Claim** (on by default) and **Prevent self approval for expense claims even if user has permissions**.
5. On the **Shift and Attendance** tab:
   - **Allow Employee Checkin from Mobile App** (on by default) shows the **Check In** button in the Employee App.
   - **Allow Geolocation Tracking** (off by default) records where the employee checks in and checks the distance from the shift location.
   - **Overtime Cap: Warn Only** turns the 144-hour overtime check into a warning. See [Overtime](/human-resources/overtime).
6. On the **Recruitment** tab, choose **Check Vacancies On Job Offer Creation**, **Send Interview Reminder** and **Send Interview Feedback Reminder**.
7. On the **Tenure** tab, set the **Exit Questionnaire Web Form** and **Exit Questionnaire Notification Template** if you send exit questionnaires.
8. On the **UAE Documents** tab, tick **Enable UAE Employee Documents** to track passports, visas and Emirates IDs. Then you can tick **Enable PRO Tasks** and choose a user in **Assign PRO Tasks To**. See [UAE employee documents and PRO tasks](/human-resources/visa-pro).
9. Click **Save**.

!fig HR Settings, Shift and Attendance tab with Allow Employee Checkin from Mobile App, Allow Geolocation Tracking and Overtime Cap: Warn Only @shot 06-hr-payroll/01-hr-settings.png

## Check Payroll Settings

1. Open **Payroll** > **Settings**.
2. Under **Working Days and Hours**, choose **Calculate Payroll Working Days Based On**: **Leave** (the default) or **Attendance**. With **Attendance**, also choose **Consider Unmarked Attendance As**.
3. Decide whether to **Include holidays in Total no. of Working Days**. Check **Fraction of Daily Salary for Half Day** (0.5 by default).
4. Under **Email**, tick **Email Salary Slip to Employee** to email each slip. You can protect the PDF with **Encrypt Salary Slips in Emails** and a **Password Policy**, for example `SAL-{first_name}-{date_of_birth.year}`.
5. Under **Other Settings**, tick **Create Overtime Slip For Eligible Employee(s)** if overtime should be part of each payroll run.
6. Click **Save**.

!fig Payroll Settings with the Working Days and Hours, Salary Slip, Email and Other Settings sections @shot 06-hr-payroll/01-payroll-settings.png

## Give people their roles

- **HR Manager**: full HR and payroll access.
- **HR User**: day-to-day HR work.
- **Leave Approver** and **Expense Approver**: approve requests of their team.
- **Interviewer**: gives interview feedback.
- **Employee** and **Employee Self Service**: use the Employee App.

See [Users, roles and permissions](/administration/users-roles).

## What happens next

- The settings apply at once to new documents.
- Users who are linked to an employee and are not HR Managers or System Managers open the Employee App when they go to the home screen.

## Common problems

| Message or problem | What to do |
| --- | --- |
| The **Check In** button is missing in the Employee App | Tick **Allow Employee Checkin from Mobile App** in HR Settings. |
| **Enable PRO Tasks** is not shown | Tick **Enable UAE Employee Documents** first. |
| Applying for days gone by needs the role … | **Restrict Backdated Leave Application** is on. Give the user the role named, or switch the option off. |

## Related pages

- [Employees and contracts](/human-resources/employees)
- [Payroll setup](/human-resources/salary-structure)
- [The Employee App](/human-resources/self-service)

@@ employees | Employees and contracts
@summary The Employee record: job, nationality and UAE numbers, the contract and its salary, end of service terms, WPS payment details and access to the Employee App.

The **Employee** record holds everything about a person who works for you: personal details, job, salary, bank details, UAE documents, the contract and the end of service terms. Payroll, leave and the WPS file all read from it, so fill it in carefully.

**Where to find it:** **HR Setup** > **Employee**.

## Before you start

- You need the **HR Manager** or **HR User** role.
- Create the departments, designations and holiday list first. See [Setup checklist and settings](/human-resources/hr-settings).
- Salary components such as Basic and Housing Allowance must exist before you enter the contract salary. See [Payroll setup](/human-resources/salary-structure).

:::note Documents to collect
Collect a copy of the passport, residence visa, Emirates ID, labour contract (MOHRE or free zone), a bank letter with the IBAN and an emergency contact before you start.
:::

## Add the employee

1. Open **HR Setup** > **Employee** and click **Add Employee**.
2. Enter the name, **Gender**, **Date of Birth** and **Date of Joining**.
3. On the **Overview** tab, choose the **Company** (the Entity), **Department**, **Designation** and **Reports To** (the manager). You can also set the **MoHRE Skill Level** when the work permit occupation has a different level from the designation.
4. On the **Joining** tab, you can enter the **Confirmation Date** and **Notice (days)**.
5. Click **Save**.

## Enter nationality and UAE numbers

1. Open the **Personal Details** tab and go to **Nationality and UAE Documents**.
2. Choose **Nationality**: **Emirati** or **Other National**. For other nationals, choose the **Country of Nationality**.
3. Enter the **Emirates ID Number** and the **Labour Card Number**.

The form also has a **Health Insurance** section. See [Health insurance and ILOE](/human-resources/insurance).

## Enter the contract and its salary

1. Under **Contract and Visa**, add a row to **Contracts and Renewals**: **Contract Start Date**, **Contract End Date**, **Contract Number** and **Visa Number**. Add a new row at each renewal. The latest end date is shown as the employee's contract end date.
2. In **Contract Salary**, add one row per salary part: **Effective From**, **Salary Component** (for example Basic or Housing Allowance) and **Monthly Amount**. Each component must be an Earning.
3. When the salary changes, add new rows with the new **Effective From** date. Keep the old rows. All rows with the same date form one salary package.

!fig Employee, Contract and Visa section with one contract row and three Contract Salary rows (Basic, Housing Allowance, Transport Allowance) @shot 06-hr-payroll/02-contract-salary.png

:::tip One place for the salary
Salary structures read the contract salary through formulas such as `contract_B`. A raise is a new set of Contract Salary rows; you do not need a new salary structure assignment.
:::

## Enter the end of service terms

1. Under **End of Service Accruals**, tick what the company sets aside each month: **Accrue Gratuity**, **Accrue Pension Scheme** or **Accrue Vacation Pay**.
2. For gratuity, choose the **Gratuity Basis**: **UAE Mainland**, **DEWS (DIFC)** or **Voluntary Scheme**. The defaults follow the law: **Gratuity Days per Year** 21 and **Days of Service Before Gratuity** 365.
3. For DEWS or the voluntary scheme, check the employer shares (5.83% for the first five years, 8.33% after) and the **Scheme Start Date**.
4. For an Emirati or GCC national, tick **Accrue Pension Scheme** and check the **Pension Fund** (GPSSA by default) under **Pension Scheme**. See [Pension contributions](/human-resources/pension).
5. Under **Vacation Pay**, check **Vacation Days Accrued per Month** (2.5) and **Days in a Month** (30).
6. Under **Air Ticket Entitlement**, tick **Air Ticket Entitlement** and fill in the terms. See [Air tickets and leave salary](/human-resources/air-tickets).

!fig Employee, End of Service Accruals section with Accrue Gratuity, Accrue Vacation Pay, Gratuity Basis UAE Mainland and Gratuity Days per Year 21 @shot 06-hr-payroll/02-end-of-service.png

## Enter the salary payment details

1. Open the **Salary** tab.
2. Choose the **Salary Mode**. For bank transfers, enter the **IBAN**.
3. For the WPS file, enter the **MOL Person ID** (14 digits) and the **Bank Routing Code (WPS)** (9 digits). See [The WPS salary file](/human-resources/wps-payroll).
4. Click **Save**.

## Give the employee access to the Employee App

1. On a saved employee without a user, click **Create User**.
2. The employee can now sign in and use the Employee App. See [The Employee App](/human-resources/self-service).

## What happens next

- Payroll uses the contract salary package that is valid on the last day of the month for the whole month.
- When you tick **Emirati**, DocFlow clears **Accrue Gratuity**. An Emirati gets the pension instead of gratuity.
- The **Employee Contracts** report (**HR Setup** > **Employee Contract**) lists the contracts and their end dates.
- The **Organizational Chart** (**HR Setup** > **Organizational Chart**) shows who reports to whom, based on **Reports To**.

## Common problems

| Message | What to do |
| --- | --- |
| Accrue Pension Scheme is for UAE and GCC nationals: set Nationality (and the country) first. | Set **Nationality** and **Country of Nationality**, or untick **Accrue Pension Scheme**. |
| The pension replaces the end of service gratuity: tick Accrue Gratuity or Accrue Pension Scheme, not both. | Untick one of them. |
| Gratuity Days per Year cannot be less than 21, the days of basic salary the law gives. | Enter 21 or more. |
| Gratuity will start only after … days of service, more than the 365 days (one year) the law requires. | A warning. Check that the longer wait is in the contract. |
| Scheme Start Date must be after the Date of Joining: … | Correct the **Scheme Start Date**. |
| Days in a Month must be between 28 and 31. | Correct **Days in a Month**. |
| Row …: the contract cannot end before it starts. | Correct the dates in **Contracts and Renewals**. |
| Contract Salary row …: … is not an Earning component. | Choose an Earning component, such as Basic. |
| Contract Salary row …: … is already on the contract from …. | Each component appears once per **Effective From** date. Remove the duplicate row. |

## Related pages

- [UAE employee documents and PRO tasks](/human-resources/visa-pro)
- [Payroll setup](/human-resources/salary-structure)
- [Gratuity and final settlement](/human-resources/gratuity)

@@ visa-pro | UAE employee documents and PRO tasks
@summary Keep one record per passport, visa, Emirates ID, work permit and ILOE subscription, watch the expiry dates and let DocFlow create PRO tasks for renewals and cancellations.

In the UAE every employee has documents that expire: passport, residence visa, Emirates ID, work permit and the ILOE (unemployment insurance) subscription. DocFlow keeps one **Employee Document** per document, watches the expiry dates and warns HR in time. If a PRO (public relations officer) handles renewals for you, DocFlow can create a **PRO Task** for each renewal and cancellation.

**Where to find it:** **Employee Documents** > **Employee Document**, and **HR Setup** > **Compliance** > **PRO Task**.

## Before you start

- In **HR Settings**, on the **UAE Documents** tab, tick **Enable UAE Employee Documents**. For PRO tasks, also tick **Enable PRO Tasks** and choose the user in **Assign PRO Tasks To**.
- You need the **HR Manager** or **HR User** role.
- DocFlow comes with five document types: **Passport**, **Residence Visa**, **Emirates ID**, **Work Permit** and **ILOE Subscription**. You can add more in **Employee Document Type**.

## Record a document

1. Open **Employee Documents** > **Employee Document** and click **Add Employee Document**.
2. Choose the **Employee** and the **Document Type**.
3. Enter the **Document Number**, **Issue Date** and **Expiry Date**.
4. For ILOE, you can choose the **ILOE Category**. If you leave it empty, DocFlow fills it from the basic salary of the last salary slip: **First Category** up to AED 16,000, **Second Category** above.
5. Attach a scan under **Attachment** and click **Save**.

!fig Employee Document for an Emirates ID with Document Number, Issue Date, Expiry Date and the status Expiring Soon @shot 06-hr-payroll/03-employee-document.png

## Renew a document

1. Open the existing document of the employee.
2. Enter the new **Document Number**, **Issue Date** and **Expiry Date**.
3. Click **Save**. Each employee has one record per document type, so you update it at each renewal.

## Decide what the PRO handles

1. Open **Employee Documents** > **Employee Document Type** and open a type.
2. Tick **Renewed by the PRO** if the PRO renews it. Tick **Cancel at Employee Exit** if it must be cancelled when the employee leaves. By default the Residence Visa and the Work Permit have both ticks and the Emirates ID is renewed by the PRO.
3. Click **Save**.

## Work on PRO tasks

1. Open **HR Setup** > **PRO Task**. Each task shows the **Employee**, **Employee Document**, **Action** (**Issue**, **Renew** or **Cancel**) and **Due Date**.
2. Open a task and set the **Status** to **In Progress** while you work on it.
3. When it is done, set the **Status** to **Done**, add **Notes** and click **Save**. Then update the Employee Document with the new dates.

!fig PRO Task list with two Renew tasks, their due dates and the status Open @shot 06-hr-payroll/03-pro-tasks.png

## What happens next

- DocFlow sets the **Status** of each document on save and again every day:
  - **Valid**: more than 60 days left.
  - **Expiring Soon**: 60 days or less left.
  - **Expired**: the expiry date has passed.
  - **No Expiry Date**: no expiry date entered.
- 60 days before the expiry date HR Managers get the notification "Employee document expires in 60 days".
- Every day DocFlow creates a **Renew** task for each document that is renewed by the PRO and expires within 60 days. There is one task per document and expiry date.
- When an employee's status becomes **Left**, DocFlow creates a **Cancel** task for each document that is cancelled at exit, due on the relieving date.
- The assigned user gets the notification "PRO Task assigned".
- The **Workforce** dashboard shows **Documents Expiring in 30 Days**, **Documents Expiring in 60 Days** and **Expired Documents**.
- The list has saved filters **Expiring Soon**, **Expired** and **No Expiry Date**. The **Employee Document Expiry** report lists the documents by expiry date.

:::uae Fines for delay
Late renewals of residence visas, Emirates IDs and work permits can lead to fines, and an expired visa can block salary payments through WPS. Start renewals as soon as the Renew task appears.
:::

## Common problems

| Message | What to do |
| --- | --- |
| Issue Date cannot be after the Expiry Date. | Correct the dates. |
| … already has a …: …. Update its number and dates at a renewal. | Open the existing record and update it instead of adding a new one. |
| PRO Tasks are switched off. Switch them on in HR Settings. | Tick **Enable PRO Tasks** in HR Settings. |
| Employee Document … belongs to another employee. | Choose a document of the same employee on the PRO task. |
| The **Employee Documents** sidebar or the cards are missing | Tick **Enable UAE Employee Documents** in HR Settings. |

## Related pages

- [Employees and contracts](/human-resources/employees)
- [Separation](/human-resources/separation)
- [Health insurance and ILOE](/human-resources/insurance)

@@ attendance-leave | Holidays and leave
@summary Build the UAE holiday list, use the UAE leave types, give employees their leave, handle compensatory leave and pay leave salary in advance.

Leave works in three layers. A **Holiday List** says which days are not working days. **Leave Types** and **Leave Policies** say how many days of each kind an employee gets. **Leave Allocations** give those days to each employee for a period, and **Leave Applications** use them.

**Where to find it:** the **Leaves** sidebar. Holiday lists are under **Leaves** > **Setup** > **Holiday List**.

## Before you start

- You need the **HR Manager** role to set up holidays, types and policies. Approvers need the **Leave Approver** role.
- Check the **Leaves** tab of HR Settings. See [Setup checklist and settings](/human-resources/hr-settings).

## Build the UAE holiday list for a year

1. Open **Leaves** > **Holiday List**. Open any saved holiday list. If there is none, add one with a name and the dates of the year, and click **Save**.
2. Click **Actions** > **Set up UAE Holidays**.
3. In the dialog, choose the **Entity** and the **Year**, then click **Set Up**.
4. DocFlow opens the list "<Entity> UAE <Year>", for example "Al Noor Trading LLC UAE 2026".

!fig Set up UAE Holidays dialog with Entity and Year over the holiday list @shot 06-hr-payroll/04-uae-holidays.png

The list runs from 1 January to 31 December. It has:

- Saturday and Sunday as the weekend. If your contract gives another rest day, change the weekly off days in the list.
- New Year's Day and National Day (2 and 3 December).
- The Islamic holidays that MoHRE has announced for that year.

DocFlow also assigns the list to the Entity from 1 January. You can run the button again safely: it does not add the same days twice.

## Add the Islamic holidays when they are announced

1. Open the list of the year.
2. In the **Holidays** table, add a row for each announced day.
3. Click **Save**.

Each December HR Managers get a reminder: "Add the <year> Islamic holidays to the holiday list of <entity>".

## The UAE leave types

DocFlow comes with these leave types. Each has a **Legal Basis** field that names the article of the law.

| Leave type | Days a year |
| --- | --- |
| Annual Leave | From the leave policy; counts calendar days |
| Sick Leave (Full Pay) | 15 |
| Sick Leave (Half Pay) | 30 |
| Sick Leave (Unpaid) | 45 |
| Maternity Leave (Full Pay) | 45 |
| Maternity Leave (Half Pay) | 15 |
| Maternity Leave (Extra, Unpaid) | Extra unpaid days after maternity leave |
| Bereavement Leave (Spouse) | 5 |
| Bereavement Leave (Relative) | 3 |
| Parental Leave | 5 |
| Study Leave | 10 |
| Hajj Leave | 30, unpaid |

## Give employees their leave

1. Open **Leaves** > **Leave Policy** and click **Add Leave Policy**. Add a row for each leave type with its days, for example Annual Leave 30. Save and submit it.
2. On the policy, click **Create** > **Bulk Assignment**. This opens the **Leave Control Panel**, where you choose the employees and the period. For one employee, click **Create** > **Single Assignment**.
3. DocFlow creates a **Leave Allocation** for each employee and leave type.

Other screens in the **Leaves** sidebar:

- **Leave Period** (Setup): the leave year of the Entity. Compensatory leave and allocations need an active one.
- **Leave Policy Assignment** (Allocation): which policy an employee has, from which date.
- **Leave Adjustment** (Allocation): add days to or take days off an employee's allocation, with a reason.
- **Leave Block List** (Setup): days on which employees may not take leave, for example a year-end close. You can name the users who may still apply.
- **Holiday List Assignment** (Setup): gives an employee (or an Entity) a holiday list from a date, instead of the default one.

## Give compensatory leave for work on a holiday

1. Open **Leaves** > **Compensatory Leave Request** and click **Add Compensatory Leave Request**.
2. Choose the **Employee**, the **Leave Type** (one with **Is Compensatory** ticked), **Work From Date** and **Work End Date**, and a **Reason**. Tick **Half Day** if one day was half.
3. Save and submit. DocFlow adds the days to the employee's allocation of that leave type, or creates one up to the end of the leave period.

The days worked must be holidays in the employee's holiday list and must have attendance. Employees can make the request themselves.

## Apply for leave on behalf of an employee

Employees usually apply in the Employee App. See [Apply for leave](/human-resources/ess-leave). HR can also apply for them:

1. Open **Leaves** > **Leave Application** and click **Add Leave Application**.
2. Choose the **Employee**, **Leave Type**, **From Date** and **To Date**. DocFlow shows **Total Leave Days** and the **Leave Balance Before Application**.
3. Check the **Leave Approver** and click **Save**.
4. The approver sets **Status** to **Approved** or **Rejected** and clicks **Submit**.

!fig Leave Application with From Date, To Date, Total Leave Days, Leave Balance Before Application, Leave Approver and Status Open @shot 06-hr-payroll/04-leave-application.png

## Pay the leave salary before the leave

1. Open the submitted, approved **Annual Leave** application.
2. Click **Create** > **Pay Leave Salary in Advance**.
3. Confirm the message. DocFlow creates a draft **Additional Salary** for the leave days at the contract salary divided by 30.
4. Check the amount and submit the Additional Salary. It is paid with the next salary slip.

## What happens next

- **Sick leave**: one application is split over the three sick leave types, in order: 15 days on full pay, then 30 on half pay, then 45 unpaid. The total is at most 90 days in a calendar year. Sick leave starts only after probation.
- **Maternity leave**: an application is split into 45 days on full pay and 15 on half pay. Book further days as **Maternity Leave (Extra, Unpaid)**.
- The employee gets an email when the leave is approved or rejected, if **Send Leave Notification** is on.
- Approved leave marks the attendance of those days as **On Leave**.
- When leave salary was paid in advance, the salary slip of the leave month leaves those days out.
- Use **View Ledger** and **View Leave Balance** on a leave form, or the reports **Leave Balance**, **Leave Balance Summary** and **Leave Ledger**.

## Common problems

| Message | What to do |
| --- | --- |
| Insufficient leave balance for …: … available, … requested. | Check the allocation, or choose another leave type. |
| The application period is outside every leave allocation of …. | Allocate leave for that period first. |
| Employee … has already applied for … between … and …: … | Open the existing application instead. |
| The day(s) you apply for are holidays; there is no leave to take. | No leave is needed on holidays. |
| Sick leave under UAE Art. 31 starts only after probation (ends …). | Book the days as another type, such as unpaid leave. |
| Sick leave would exceed the UAE Art. 31 yearly limit of 90 days. | The yearly limit is used up. |
| … allows at most … days in the year; … already used. | The yearly days of this type are used up. |
| Maternity leave is 60 days (FDL 33/2021 Art 30(1)): 45 on full pay and 15 on half pay. … | Book the extra days as **Maternity Leave (Extra, Unpaid)**. |
| Leave Approver is mandatory. | Choose a **Leave Approver**. |
| You cannot approve your own leave. | Another approver must approve it. |
| Only Leave Applications with status Approved or Rejected can be submitted. | Set **Status** to **Approved** or **Rejected** first. |
| Only a submitted, approved Leave Application can have its leave salary paid in advance. | Approve and submit the application first. |
| Leave salary is paid in advance for Annual Leave only, not …. | Use it on annual leave only. |
| Salary Component … is missing; set the Leave Salary Advance component in HR Settings. | Set **Leave Salary Advance Component** on the **Leaves** tab of HR Settings. |
| Compensatory leave is for holidays only; these are working days: … | Choose days that are holidays in the employee's list. |
| There is no attendance for … on: … | Mark attendance for the days worked first. |
| No active Leave Period covers …; create one first. | Create a **Leave Period**. |
| … has the weekend and the fixed holidays. The Islamic holidays of … are not announced yet … | Add the Islamic holidays later, by hand. |

## Related pages

- [Shifts, attendance and the roster](/human-resources/shifts-rosters)
- [Running payroll](/human-resources/running-payroll)
- [Approving requests (managers)](/human-resources/ess-approvals)

@@ shifts-rosters | Shifts, attendance and the roster
@summary Create shift types and shift locations, plan shifts on the monthly roster, mark attendance by hand or from check-ins, and handle attendance and shift requests.

Attendance tells payroll who worked on which day. You can mark it by hand, let employees check in and out and have DocFlow mark it from the check-ins, or approve requests for work from home and on-duty days. Shifts say when each employee should work. The **Roster** shows all shifts of a month on one screen.

**Where to find it:** the **Shift & Attendance** sidebar. The roster is at **Shift & Attendance** > **Roster**.

## Before you start

- You need the **HR Manager** or **HR User** role.
- Each employee needs a holiday list (through the Entity assignment or on the employee). See [Holidays and leave](/human-resources/attendance-leave).
- For check-ins from the Employee App, tick **Allow Employee Checkin from Mobile App** in HR Settings. To check where people check in, tick **Allow Geolocation Tracking**.

## Create a shift type

1. Open **Shift & Attendance** > **Shift Type** and click **Add Shift Type**.
2. Enter a name, the **Start Time** and the **End Time**, and choose a **Roster Color**.
3. To mark attendance from check-ins, tick **Enable Auto Attendance**. Then set:
   - **Determine Check-in and Check-out**: alternating entries, or strictly by the log type of each check-in.
   - **Begin check-in before shift start time (in minutes)** and **Allow check-out after shift end time (in minutes)** (60 each by default).
   - **Working Hours Threshold for Half Day** and **Working Hours Threshold for Absent**.
   - **Process Attendance After**: the first date to mark.
4. You can tick **Enable Late Entry Marking** and **Enable Early Exit Marking**, with a grace period.
5. To pay overtime from this shift, tick **Allow Overtime** and choose the **Overtime Type**. See [Overtime](/human-resources/overtime).
6. Click **Save**.

## Add a shift location (for geolocation)

1. Open **Shift & Attendance** > **Shift Location** and click **Add Shift Location**.
2. Enter the **Location Name**, then the **Latitude** and **Longitude** (or click **Fetch Geolocation** on site).
3. Enter the **Checkin Radius** in metres and click **Save**.

## Plan shifts on the roster

1. Open **Shift & Attendance** > **Roster**. You see one row per employee and one column per day of the month. Weekly offs show **WO** and holidays and leave show their name.
2. Use the filters (**Entity**, **Department**, **Branch**, **Designation**, **Shift Type**, **Shift Location**) or the **Employee** search to narrow the list. Use the arrows and **Today** to change the month.
3. Click an empty day of an employee, or **New Shift Assignment**, to add a shift. In the dialog choose the **Shift Type**, **Start Date**, **End Date**, **Shift Location** and **Status**.
4. For a period of 7 days or more, the dialog also shows **Schedule Settings**. Pick the **Repeat On Days** and the **Frequency** (**Every Week** to **Every 4 Weeks**). DocFlow then creates a **Shift Schedule Assignment**.
5. Drag a shift to another day or employee to move it, or onto another shift to swap them.
6. Click a shift to change it. To delete, choose whether to remove the **Shift for** that day, **All Consecutive Shifts**, or the **Shift Schedule Assignment**.

!fig The Roster for November with shifts coloured by shift type, WO on weekly offs and Annual Leave days @shot 06-hr-payroll/05-roster.png

!fig New Shift Assignment dialog with Shift Type, Start Date, End Date, Status and Schedule Settings @shot 06-hr-payroll/05-roster-dialog.png

You can also assign shifts in bulk with **Shift Assignment Tool**, or with **Shift Schedule** and **Shift Schedule Assignment**.

## Mark attendance by hand

1. Open **Shift & Attendance** > **Employee Attendance Tool**.
2. Choose the date and the Entity, tick the employees and mark them **Present**, **Absent**, **Half Day** or **Work From Home**.

Or open **Attendance** and add one record per employee and day.

## Handle attendance and shift requests

Employees ask for these in the Employee App:

- An **Attendance Request** for days of **Work From Home** or **On Duty**.
- A **Shift Request** for a different shift on some days.

The approver approves them in the Employee App or here, in **Attendance Request** and **Shift Request**. See [Approving requests (managers)](/human-resources/ess-approvals).

## What happens next

- Each check-in is an **Employee Checkin** record. With auto attendance on, DocFlow marks **Attendance** from the check-ins of each shift. **Fetch Shift** on a check-in finds its shift again.
- A submitted attendance request creates attendance for each working day of the period.
- An approved shift request creates a shift assignment.
- Payroll reads the attendance when **Calculate Payroll Working Days Based On** is **Attendance**.
- Reports: **Monthly Attendance Sheet**, **Shift Attendance** and **Employee Hours Utilization**. The **Attendance Dashboard** shows the month's present, absent, late and early figures.

## Common problems

| Message | What to do |
| --- | --- |
| This check-in is … m from …; the allowed radius is … m. | The employee is too far from the shift location. They must check in on site, or HR corrects the **Checkin Radius**. |
| Employee … already has a check-in … at this time. | The check-in exists already. |
| Log Type (IN or OUT) is required: shift … works strictly on log types. | Choose IN or OUT. |
| Cancel Attendance … before changing the time of this check-in. | Cancel the attendance made from this check-in first. |
| Attendance Request … of employee … overlaps these dates. | Open the existing request. |
| Nothing in this request would create attendance: … | The days are holidays, leave or already marked. |
| Shift … is already the default shift of employee …. | No request is needed for the default shift. |
| … is not a Shift Request Approver of employee …. | Choose an approver from the employee's department. |
| Only a Shift Request with status Approved or Rejected can be submitted. | Set **Status** first. |
| Please select a company. | Choose an **Entity** in the roster filters. |

## Related pages

- [Overtime](/human-resources/overtime)
- [Check in and out (employees)](/human-resources/ess-check-in)
- [Attendance and shift requests (employees)](/human-resources/ess-attendance)

@@ overtime | Overtime
@summary Pay overtime through Overtime Slips built from attendance, using the UAE overtime types: at most 2 hours a day, plus 25%, plus 50% on rest days, holidays and at night.

Overtime is paid through an **Overtime Slip**. The slip collects the overtime hours of one employee for a period from the attendance, works out the amount and adds it to the next salary slip.

**Where to find it:** **Shift & Attendance** > **Overtime** > **Overtime Slip** and **Overtime Type**.

## Before you start

- You need the **HR User** role (an HR Manager needs HR User too). System Manager, Employee and Leave Approver can also create overtime slips.
- The shift type must have **Allow Overtime** ticked and an **Overtime Type**. See [Shifts, attendance and the roster](/human-resources/shifts-rosters).
- The employee needs an active salary structure assignment. See [Payroll setup](/human-resources/salary-structure).

## The UAE overtime types

| Overtime type | What it pays |
| --- | --- |
| **UAE Overtime** | **Maximum Overtime Hours Allowed Per Day** 2; based on the Basic component; **Standard Multiplier** 1.25; weekend and public holiday 1.5; **Night Multiplier** 1.5 from 22:00 to 04:00 |
| **UAE Overtime (Shift Workers)** | The same, without the night premium. The law does not give the night premium to shift workers. |

The amount goes to the salary component **Overtime**. Each type has a **Legal Basis** field.

A night hour is paid at the higher of the day rate (standard, weekend or holiday) and the night rate. The rates are not added together. The night premium applies only to rows that come from attendance.

## Create an overtime slip

1. Open **Shift & Attendance** > **Overtime Slip** and click **Add Overtime Slip**.
2. Choose the **Employee**, then the **Start Date** and **End Date** of the period.
3. Click **Fetch Overtime Details**. DocFlow fills the **Overtime Details** table from the employee's submitted attendance that has an overtime type. Each day is capped at the daily maximum.
4. Check the rows and the **Total Overtime Duration**.
5. Click **Save**, then **Submit**.

!fig Overtime Slip for one month with two UAE Overtime rows fetched from attendance and Total Overtime Duration 4 @shot 06-hr-payroll/06-overtime-slip.png

## Let payroll create the overtime slips

1. In **Payroll Settings**, tick **Create Overtime Slip For Eligible Employee(s)**.
2. In each payroll run, DocFlow shows **Create Overtime Slips** and then **Submit Overtime Slips** before the salary slips. See [Running payroll](/human-resources/running-payroll).

## What happens next

- When you submit the overtime slip, DocFlow creates an **Additional Salary** for the overtime amount. The salary slip of that month pays it.
- DocFlow also checks the limit of 144 working hours in any three weeks. If **Overtime Cap: Warn Only** is ticked in HR Settings, you get a warning. If not, the slip is refused.

## Common problems

| Message | What to do |
| --- | --- |
| No overtime found in the attendance of this period | Check that the attendance is submitted and has an overtime type. |
| Overtime Slip … already covers part of … to … for employee … | Use another period, or open the existing slip. |
| Row …: overtime of … is entered twice | Remove the duplicate row. |
| Row …: … is outside the slip's period | Remove the row or change the dates. |
| Row …: … hours exceed the maximum of … hours allowed for … | Reduce the hours to the daily maximum. |
| No salary structure assignment of … is in force on …. | Assign a salary structure to the employee. |
| Overtime Type … has no Overtime Salary Component | Set the **Overtime Salary Component** on the overtime type. |
| … working hours from … to …: more than the 144 hours in any three weeks allowed by FDL 33/2021 Art 19(1). | Reduce the overtime, or, if you accept the risk, tick **Overtime Cap: Warn Only** in HR Settings. |

## Related pages

- [Shifts, attendance and the roster](/human-resources/shifts-rosters)
- [Running payroll](/human-resources/running-payroll)

@@ expense-claims | Expense claims
@summary Review, approve and pay employees' expense claims, and set up claim types, travel purposes and vehicle items.

An **Expense Claim** pays an employee back for money spent on company business, such as a taxi or a client lunch.

**Where to find it:** **Expenses** > **Expense Claim**.

## Before you start

- Approvers need the **Expense Approver** role. Accountants who pay need an accounts role.
- Create the **Expense Claim Type** records (for example Travel, Meals) with their expense account for each Entity.
- For travel requests, create the **Purpose of Travel** records (for example Client visit, Training). A **Travel Request** cannot be saved without one. For vehicle logs, create the **Vehicle Service Item** records (for example Oil change, Tyres). Both are in the **Expenses** sidebar.
- Check the **Expenses** tab of HR Settings. See [Setup checklist and settings](/human-resources/hr-settings).

## Review and approve an expense claim

Employees usually send claims from the Employee App. See [Expense claims and advances (employees)](/human-resources/ess-expenses).

1. Open **Expenses** > **Expense Claim** and open the claim.
2. Check each row of **Expenses**: **Expense Date**, **Expense Claim Type**, **Description** and **Amount**. You can lower the **Sanctioned Amount** of a row.
3. Set **Approval Status** to **Approved** or **Rejected**.
4. Click **Save**, then **Submit**.

!fig Expense Claim with Expense Approver, Approval Status and two expense rows (Travel and Calls) @shot 06-hr-payroll/07-expense-claim.png

## Pay the claim

1. On the submitted claim, click **Create** > **Payment**.
2. Check the payment and submit it. The claim status becomes **Paid**.

## What happens next

- A submitted claim posts the expense and a payable to the employee. The payment clears it.
- An advance used in a claim lowers the amount to pay. See [Employee advances](/human-resources/advances-loans).
- Reports: **Unpaid Expense Claim** and **Vehicle Expenses**. The **Claims Dashboard** shows the claims of the month.
- **Travel Request**, **Vehicle Log**, **Vehicle** and **Driver** are under **Expenses** > **Travel and Fleet**.

## Common problems

| Message | What to do |
| --- | --- |
| Approval Status must be 'Approved' or 'Rejected' before the claim is submitted | Set **Approval Status** first. |
| Expense Approver is mandatory in the Expense Claim | Choose an **Expense Approver**. |
| You cannot approve your own expense claim | Another approver must approve it. |
| Row #…: Sanctioned Amount cannot be greater than Claim Amount | Lower the **Sanctioned Amount**. |
| Row #…: a Cost Center is required to post the expense | Set the **Cost Center** on the row or the claim. |
| Payable Account is mandatory unless the claim is paid on the spot | Set the **Payable Account**, or tick **Is Paid**. |

## Related pages

- [Employee advances](/human-resources/advances-loans)
- [Expense claims and advances (employees)](/human-resources/ess-expenses)

@@ advances-loans | Employee advances
@summary Give employees money before they spend it, and settle the advance against a claim, by a return or from salary.

An **Employee Advance** gives an employee money before they spend it, for example for a business trip. The advance is later set off against an expense claim, returned, or deducted from salary.

**Where to find it:** **Expenses** > **Employee Advance**.

## Before you start

- You need an HR or accounts role. Employees can ask for an advance in the Employee App. See [Expense claims and advances (employees)](/human-resources/ess-expenses).
- The advance account must be a receivable account.

## Give an advance

1. Open **Expenses** > **Employee Advance** and click **Add Employee Advance**.
2. Choose the **Employee**, enter the **Purpose** and the **Advance Amount**, and check the **Advance Account**.
3. Click **Save**, then **Submit**.
4. Click **Create** > **Payment** to pay it.

## Settle an advance

On a paid advance, use the **Create** menu:

- **Expense Claim**: the employee claims expenses against the advance.
- **Return**: the employee pays back what was not spent.
- **Deduction from Salary**: the rest is taken from the next salary slip.

You can also tick **Repay Unclaimed Amount from Salary** on the advance.

## What happens next

- An advance used in a claim lowers the amount to pay.
- Open advances show in the employee's **Full and Final Statement** when they leave. See [Gratuity and final settlement](/human-resources/gratuity).
- Opening balances of employee advances can be entered on the opening balance screen. See [Opening balances](/accounting/opening-balances).
- The **Employee Advance Summary** report lists advances. The **Claims Dashboard** shows advances by status.

## Common problems

| Message | What to do |
| --- | --- |
| An advance cannot be submitted without an Advance Account | Choose the **Advance Account**. |
| Advance Account … must be of type Receivable | Choose a receivable account. |
| Return amount … cannot be greater than the unclaimed amount … | Enter a smaller amount. |
| Payments of … exceed the advance of … | The advance is paid already. |

## Related pages

- [Expense claims](/human-resources/expense-claims)
- [Gratuity and final settlement](/human-resources/gratuity)

@@ recruitment | Recruitment
@summary Publish job openings on your careers page, receive applications, interview, make offers and turn the accepted applicant into an employee.

Recruitment covers everything from an open position to a new employee. You publish a **Job Opening**, people apply on your careers page, you interview them, send a **Job Offer** and, once they accept, create the **Employee**.

**Where to find it:** the **Recruitment** sidebar. The public careers page opens from **Careers Page** in the rail, or **Recruitment** > **Public** > **Job Portal**.

## Before you start

- You need the **HR Manager** or **HR User** role. Interviewers need the **Interviewer** role.
- Set up **Interview Type**, **Job Applicant Source** and, if you use them, **Job Offer Term Template** and **Appointment Letter Template** (under **Setup** in the sidebar).
- Optional: a **Job Opening Template** keeps the department, designation, employment type, location, salary range and description of a job you post often.
- Check the **Recruitment** tab of HR Settings.

## Publish a job opening

1. Open **Recruitment** > **Job Opening** and click **Add Job Opening**.
2. Enter the **Job Title**, choose the **Designation** and the **Company** (Entity), and add the **Department**, **Employment Type** and **Location**.
3. Write the **Description**. You can enter a salary range and tick **Publish Salary Range**.
4. Tick **Publish on website** so the opening shows on the careers page. You can set **Closes On**.
5. Click **Save**.

## Receive applications

1. Applicants open the careers page, choose an opening and click **Apply Now**. They fill in the **Job Application** form and attach their CV.
2. Each application becomes a **Job Applicant** with status **Open**. HR can also add applicants by hand.
3. Use **Hiring Pipeline** to see the applicants as a board by status.

!fig The public careers page listing Job Openings with filters for Company, Department and Employment Type @shot 06-hr-payroll/08-careers-page.png


## Shortlist and interview

1. Open a **Job Applicant** with status **Open**. Click **Shortlist**, **Reject** or **Schedule Interview**.
2. In **Schedule Interview**, choose the interview type, the date, **From Time** and **To Time**, and the interviewers.
3. Each interviewer opens the **Interview** and clicks **Submit Feedback** to rate the applicant.
4. To change the time, click **Actions** > **Reschedule Interview**.

!fig Interview with Interview Type, Job Applicant, Scheduled On, From Time, To Time, the interviewers and the Submit Feedback button @shot 06-hr-payroll/08-interview.png

## Offer and hire

1. Create a **Job Offer** for the applicant: **Offer Date**, **Designation**, **Company** and the terms.
2. Save and submit it. When the applicant accepts, set **Status** to **Accepted**.
3. On the accepted offer, click **Create Employee**. Or start an **Employee Onboarding**. See [Onboarding](/human-resources/onboarding).

## What happens next

- Interview reminders and feedback reminders go out if they are switched on in HR Settings.
- The new employee is linked to the applicant. The offer then shows **Show Employee**.
- **Staffing Plan**, **Job Requisition** and **Employee Referral** (under **Planning**) help you plan positions. From a job requisition, use **Actions** > **Create Job Opening** or **Associate Job Opening**. From a referral, use **Create Job Applicant**.
- The **Hiring Dashboard** and the **Recruitment Analytics** report show open positions, applicants and offers.

## Common problems

| Problem | What to do |
| --- | --- |
| The opening is not on the careers page | Tick **Publish on website** and check that **Status** is **Open**. |
| Opening closed. | The opening has **Status** **Closed**. Set it back to **Open** to take applications again. |
| **Create Employee** is missing on the offer | The offer must be submitted and **Accepted**. |

## Related pages

- [Onboarding](/human-resources/onboarding)
- [Employees and contracts](/human-resources/employees)

@@ appraisals | Performance and appraisals
@summary Run appraisal cycles with KRAs, goals and feedback, and see the scores in the Appraisal Overview.

Use the **Performance** sidebar to review how people work: goals, appraisals and feedback.

**Where to find it:** the **Performance** sidebar.

## Before you start

- You need the **HR Manager** or **HR User** role.
- Set up the masters under **Setup** in the **Performance** sidebar: **KRA** (key result areas, the main areas a person is measured on), **Appraisal Template**, **Employee Feedback Criteria** and **Skill**.

## Run an appraisal cycle

1. Open **Performance** > **Appraisal Cycle** and click **Add Appraisal Cycle**.
2. Enter the name, the start and end dates and the Entity. Click **Get Employees** to fill the list of employees, and check their appraisal templates.
3. Click **Save**, then **Create Appraisals**. Click **Start** when you are ready. The cycle status becomes **In Progress**.
4. Employees and managers set **Goal** records and fill in the appraisal. Colleagues can give **Employee Performance Feedback**.
5. HR completes each **Appraisal**. **View Goals** on the cycle or an appraisal shows the goals as a tree. At the end, click **Mark as Completed** on the cycle.

!fig Appraisal on the KRAs tab with the Scores chart, the Appraisal Template and weighted goal rows @shot 06-hr-payroll/09-appraisal.png

## What happens next

- The **Appraisal Overview** report shows the scores.
- A good result often leads to a promotion. See [Promotions and transfers](/human-resources/promotions-transfers).

## Common problems

| Problem | What to do |
| --- | --- |
| An employee is missing from the appraisal cycle | Check the employee's Entity, department and status, then add them to the cycle. |

## Related pages

- [Training and skills](/human-resources/training)
- [Promotions and transfers](/human-resources/promotions-transfers)

@@ training | Training and skills
@summary Plan training programmes and events, record results and feedback, and keep each employee's skill map.

Training lives in the **Training** section of the **Tenure** sidebar.

**Where to find it:** **Tenure** > **Training** > **Training Program** and **Training Event**.

## Before you start

- You need the **HR Manager** or **HR User** role.
- Create the **Skill** records in **Performance** > **Setup** if you keep skill maps.

## Plan training

1. Create a **Training Program** with the topic and trainer.
2. Create a **Training Event** for a date and add the employees.
3. After the event, use **Training Result** and **Training Feedback** (buttons on the event) to record how it went.

## Record an employee's skills

An **Employee Skill Map** (**Tenure** > **Setup** > **Employee Skill Map**) keeps one employee's skills and trainings.

1. Choose the **Employee**.
2. Add rows to **Employee Skills**: the **Skill**, a **Proficiency** rating and the **Evaluation Date**.
3. The **Trainings** table lists the trainings the employee took.

## What happens next

The **Movements Dashboard** counts the training events of the month and shows training events by type.

## Related pages

- [Performance and appraisals](/human-resources/appraisals)

@@ promotions-transfers | Promotions and transfers
@summary Record a change of designation, department or branch with its date, and keep the salary and the MOHRE contract in line.

**Where to find it:** **Performance** > **Employee Promotion** and **Employee Transfer**.

## Before you start

You need the **HR Manager** or **HR User** role.

## Record a promotion or transfer

1. Open **Performance** > **Employee Promotion** (or **Employee Transfer**) and click **Add**.
2. Choose the employee and the date, and add the details that change, such as the designation or the department.
3. Save and submit. DocFlow updates the employee record on that date.

## Other changes

| Change | Where |
| --- | --- |
| Salary increase | New **Contract Salary** rows with the new **Effective From** date on the employee. See [Employees and contracts](/human-resources/employees). |
| Contract renewal | A new row in **Contracts and Renewals** |
| New manager | **Reports To** on the employee |

## What happens next

- Promotions and transfers show in the employee's history and on the **Movements Dashboard**.

:::uae Update MOHRE
A change of job title or salary must also be made in the employee's MOHRE contract (or the free zone records). Update it through the official channels and add the new contract row in DocFlow.
:::

## Common problems

| Problem | What to do |
| --- | --- |
| A promotion did not change the employee | Check that it is submitted and that its date has come. |

## Related pages

- [Performance and appraisals](/human-resources/appraisals)
- [Employees and contracts](/human-resources/employees)

@@ onboarding | Onboarding
@summary Follow the same checklist for every new joiner with an onboarding template, and create the employee from it.

**Employee Onboarding** is the checklist for a new joiner: the tasks that must be done before and after the first day, such as collecting passport copies, applying for the work permit, a laptop and an email account.

**Where to find it:** **Tenure** > **Employee Onboarding**.

## Before you start

- You need the **HR Manager** or **HR User** role.
- Create an **Employee Onboarding Template** with the activities and who does each one (under **Setup** in the **Tenure** sidebar).

## Onboard a new employee

1. Open **Tenure** > **Employee Onboarding** and click **Add Employee Onboarding**.
2. Choose the **Job Applicant** and the **Job Offer**. DocFlow fills the name, department and designation.
3. Choose the **Employee Onboarding Template**. Its activities fill the **Activities** table.
4. Enter the **Date of Joining** and **Onboarding Begins On**, then click **Save** and **Submit**.
5. Click **Create** > **Employee** to create the employee record.
6. As people finish their tasks, the **Boarding Status** moves from **Pending** to **In Process**. When all is done, click **Mark as Completed**.

!fig Employee Onboarding with Date of Joining, Onboarding Begins On and four onboarding activities with user, begin day and duration @shot 06-hr-payroll/10-onboarding.png

## What happens next

- Onboarding creates a **Project** with one **Task** per activity. Use **View** > **Project** or **Task** to follow them. The people named in the template get the tasks.
- The **Movements Dashboard** counts onboardings of the month.

## Common problems

| Problem | What to do |
| --- | --- |
| The activities table is empty | Choose a template that has activities. |

## Related pages

- [Recruitment](/human-resources/recruitment)
- [Employees and contracts](/human-resources/employees)
- [UAE employee documents and PRO tasks](/human-resources/visa-pro)

@@ separation | Separation
@summary Let an employee go: set the relieving date, follow the separation checklist, send the exit questionnaire and mark the employee Left.

**Employee Separation** is the checklist for a leaver: handing back assets, cancelling the visa and the exit interview. It uses a template, so the same steps are followed every time.

**Where to find it:** **Tenure** > **Employee Separation**, **Exit Interview** and **Employee Grievance**.

## Before you start

- You need the **HR Manager** or **HR User** role.
- Create an **Employee Separation Template** with the activities and who does each one (under **Setup** in the **Tenure** sidebar).
- For exit interviews by web form, set the **Exit Questionnaire Web Form** and **Exit Questionnaire Notification Template** on the **Tenure** tab of HR Settings.

## Let an employee go

1. On the **Employee**, set the **Relieving Date** on the **Exit** tab and click **Save**.
2. Open **Tenure** > **Employee Separation** and click **Add Employee Separation**.
3. Choose the **Employee**, the **Employee Separation Template** and **Separation Begins On**. You can enter the **Resignation Letter Date**.
4. Click **Save** and **Submit**. Follow the activities and click **Mark as Completed** at the end.
5. Create an **Exit Interview** and click **Send Exit Questionnaire** to email the form to the employee.
6. When the employee leaves, set the employee **Status** to **Left**.

!fig Employee Separation with the employee, the separation template, Separation Begins On and the activities table

## What happens next

- Separation creates a **Project** with one **Task** per activity.
- When the employee becomes **Left**, DocFlow creates the **Cancel** PRO tasks for the visa and work permit, due on the relieving date. See [UAE employee documents and PRO tasks](/human-resources/visa-pro).
- Pay the final dues with the gratuity and the Full and Final Statement. See [Gratuity and final settlement](/human-resources/gratuity).
- **Employee Grievance** records complaints by **Grievance Type**. The **Employee Exits** report lists the leavers. The **Movements Dashboard** counts separations of the month.

:::uae Notice and final dues
UAE law asks for the final dues within 14 days of the last working day. Set the relieving date as soon as it is known, so DocFlow can remind you.
:::

## Common problems

| Problem | What to do |
| --- | --- |
| No PRO cancel tasks were created | Check that **Enable PRO Tasks** is on, that the document types have **Cancel at Employee Exit** ticked and that the employee status is **Left**. |
| Please set the relieving date for employee … | Set the **Relieving Date** on the employee before the Full and Final Statement. |

## Related pages

- [Gratuity and final settlement](/human-resources/gratuity)
- [Onboarding](/human-resources/onboarding)

@@ salary-structure | Payroll setup
@summary Check the salary components, build a salary structure that reads the contract salary, assign it, and check the pension funds and the payroll period.

Before the first payroll run you set up how pay is built. **Salary Components** are the parts of pay, such as Basic, Housing Allowance or a deduction. A **Salary Structure** combines the components and says how each is worked out. A **Salary Structure Assignment** gives a structure to an employee from a date. The amounts usually come from the employee's contract salary, so you keep each salary in one place.

**Where to find it:** **Payroll** > **Setup** > **Salary Component**, **Salary Structure** and **Payroll Period**, and **Payroll** > **Salary Structure Assignment**.

## Before you start

- You need the **HR Manager** role. Setting the accounts on components needs an accounts role.
- Enter each employee's **Contract Salary**. See [Employees and contracts](/human-resources/employees).
- Check **Payroll Settings**. See [Setup checklist and settings](/human-resources/hr-settings).

## Check the salary components

1. Open **Payroll** > **Salary Component**.
2. For each earning and deduction you pay, check the name, the **Abbr** (abbreviation, such as B for Basic) and the type.
3. For the WPS file, set **WPS Pay Type** on earnings that are allowances, such as Housing Allowance or Overtime Allowance. Regular earnings without a WPS Pay Type count as fixed pay. One-off earnings without one count as other allowances.
4. In the **Accounts** table, add a row for each Entity with the expense account.

DocFlow adds the components it needs, including **Overtime**, **Notice Pay**, **Leave Salary Advance**, **Air Ticket Allowance**, **End of Service Provision**, **Leave Salary Provision**, **Air Ticket Provision** and the pension and scheme contribution components. The provision and contribution components also need a **Liability Account** per Entity. See [HR month-end provisions](/human-resources/hr-month-end).

## Build a salary structure that reads the contract

1. Open **Payroll** > **Salary Structure** and click **Add Salary Structure**.
2. Enter a name and choose the **Company** (Entity) and **Payroll Frequency** (for example Monthly).
3. Add a row in **Earnings** for each component. In the formula, use `contract_` followed by the component's abbreviation. For example, Basic with abbreviation B uses `contract_B`, and Housing Allowance with abbreviation HRA uses `contract_HRA`. The value is the contract amount valid on the last day of the month, or 0 if the contract has no such row.
4. Add deductions in **Deductions**. For employees on the pension, add **GPSSA Employee Contribution**. It works out the employee share from the employee's pension fund.
5. Click **Save**, then **Submit**.
6. To check the result, click **Actions** > **Preview Salary Slip**.

!fig Salary Structure earnings row for Basic with Amount based on formula ticked and the formula contract_B @shot 06-hr-payroll/11-salary-structure.png

## Assign the structure to employees

1. On the submitted structure, click **Create** > **Single Assignment** or **Bulk Assignments**.
2. Choose the employee, the **From Date** and the **Company**. The **Base** is not used by a structure that reads the contract, but the assignment itself is still needed.
3. Click **Save**, then **Submit**.
4. On the assignment, **Actions** > **See CTC Break-up** shows the cost to company, and **Preview Salary Slip** shows a sample slip.

To assign one structure to many employees at once, click **Bulk Salary Structure Assignment** at the top of the Salary Structure or Salary Structure Assignment list. Filter the employees by branch, department, designation, grade or employment type, tick them and assign.

## Check the pension funds

See [Pension contributions](/human-resources/pension).

## Create the payroll period

**Payroll Period** sets the payroll year of an Entity, for example 1 January to 31 December. Create one for each year: the Employee App lists payslips by payroll period, so employees see no payslips without it.

## What happens next

- When the contract salary changes, the next salary slip picks up the new amounts. You do not need a new assignment.
- A change in the middle of a month counts for the whole month.
- **Update Salary Structures** > **Sync Condition** / **Sync Formula** on a component copies a changed condition or formula into the structures that use it.

## Common problems

| Message | What to do |
| --- | --- |
| Employee … has no Contract Salary valid on …: add the contracted salary rows on the Employee (Contract and Visa). | Add the **Contract Salary** rows on the employee, with an **Effective From** on or before that date. |
| No salary structure assignment of … is in force on …. | Assign a salary structure from an earlier date. |
| Pension Fund … has no …: set it on the fund or on the Employee | Fill in the missing rate or cap on the fund, or on the employee's **Pension Scheme** section. |
| Set a Currency Exchange from … to … on or before …: … | The fund's cap is in another currency. Add the exchange rate in **Currency Exchange**. |

## Related pages

- [Employees and contracts](/human-resources/employees)
- [Running payroll](/human-resources/running-payroll)
- [The WPS salary file](/human-resources/wps-payroll)

@@ running-payroll | Running payroll
@summary Run the monthly Payroll Entry: get the employees, create and submit the salary slips, make the bank entry, withhold salaries and pay one-off amounts.

A **Payroll Entry** runs the payroll for a group of employees and a period, usually one month. It finds the employees, creates a **Salary Slip** for each one, submits them and makes the bank entry that pays them. Run it once a month after leave, attendance, overtime and one-off payments are in.

**Where to find it:** **Payroll** > **Payroll Entry**.

## Before you start

- You need the **HR Manager** role, and an accounts role to make the bank entry.
- Every employee needs a submitted salary structure assignment and a contract salary. See [Payroll setup](/human-resources/salary-structure).
- Approve and submit the month's leave, attendance and overtime.
- Enter one-off payments and deductions, such as a bonus, as **Additional Salary** for the month.

## Create the payroll entry

1. Open **Payroll** > **Payroll Entry** and click **Add Payroll Entry**.
2. Check the **Posting Date** and the **Company**, for example Al Noor Trading LLC.
3. Choose the **Payroll Frequency** (Monthly) and check the **Start Date** and **End Date**.
4. Check the **Payroll Payable Account** and the **Cost Center**. Under **Payment**, choose the **Payment Account** (the bank account that pays the salaries).
5. To run payroll for part of the Entity, fill in **Branch**, **Department**, **Designation** or **Grade**.
6. Tick **Validate Attendance** if every day must have attendance before slips are made.
7. Click **Save**.

## Create the salary slips

1. Click **Get Employees**. DocFlow fills the employees table.
2. If **Create Overtime Slip For Eligible Employee(s)** is on in Payroll Settings, click **Create Overtime Slips**, check them, then click **Submit Overtime Slips**.
3. Click **Create Salary Slips**. This submits the payroll entry and creates a draft slip per employee. For a large run, DocFlow shows "Salary Slip creation is queued. It may take a few minutes" and the status is **Queued** until it is done.

!fig Payroll Entry, Employees tab with eight employees and the Get Employees and Create Salary Slips buttons @shot 06-hr-payroll/12-payroll-entry.png

## Check and submit the slips

1. Open the salary slips from the payroll entry and check a few of them: earnings, deductions, payment days and net pay.
2. To correct a slip, fix the cause (for example the contract salary or an additional salary) and recreate or edit the draft slip.
3. On the payroll entry, click **Submit Salary Slip**. DocFlow submits all draft slips and posts the payroll to the books.

!fig Submitted Salary Slip, Earnings & Deductions tab with Basic, Housing Allowance and Transport Allowance and the gross pay @shot 06-hr-payroll/12-salary-slip.png

## Pay the salaries

1. Click **Make Bank Entry**. DocFlow creates a payment journal entry from the payment account.
2. Submit the journal entry.
3. Create the WPS salary file. See [The WPS salary file](/human-resources/wps-payroll).

## Hold back a salary

1. Open **Payroll** > **Salary Withholding** and add one for the employee, with the **Number of Withholding Cycles** and the **Reason for Withholding Salary**.
2. The slip is created but not paid. Later, on the payroll entry, click **Release Withheld Salaries** to pay it.

## Pay a one-off amount

- **Employee Incentive**: an incentive amount for an employee on a payroll date, under a salary component.
- **Retention Bonus**: a bonus paid on a **Bonus Payment Date** to keep an employee.
- **Arrear**: extra pay for slips already paid, when a salary structure takes effect from an earlier date.
- **Payroll Correction**: pays back days a submitted slip docked as leave without pay.

Each one creates an **Additional Salary**, which the salary slip of that date picks up. Cancelling it cancels the additional salary. Open them from the search bar (Ctrl+K); you need **HR User** or **HR Manager**.

## What happens next

- Each employee gets the salary slip by email if **Email Salary Slip to Employee** is on. Employees also see it in the Employee App. See [Payslips](/human-resources/ess-payslips).
- The payroll is posted to the books: salary expense against the payroll payable account. The bank entry clears the payable.
- Reports: **Salary Register**, **Bank Remittance**, **Employee CTC Break-up** and, for the UAE, **WPS Salary Register**.
- Book the month's provisions next. See [HR month-end provisions](/human-resources/hr-month-end).

:::tip Compare month on month
Before you submit the slips, compare this month's Salary Register with last month's. Every big difference (joiners, leavers, overtime, deductions) should have a clear reason.
:::

## Common problems

| Message | What to do |
| --- | --- |
| No employees in this Payroll Entry: use Get Employees first | Click **Get Employees**. |
| No employees found for the selected criteria: Company…, Frequency… | Check the filters and that the employees have an assignment with this frequency. |
| Please set the Payroll Payable Account | Choose the **Payroll Payable Account**. |
| Attendance is not marked for every day of the period: … | Mark the missing attendance, or untick **Validate Attendance**. |
| Salary Slips already exist for …: they were not created again | Slips for these employees already exist for the period. |
| Salary Slip … has a negative Net Pay | Check the deductions of that employee. |
| There are no draft Salary Slips to submit | All slips are submitted already. |
| Please set the Payment Account | Choose the **Payment Account**. |
| No salary slips to pay | Submit the salary slips first. |
| Employee … has no Contract Salary valid on …: … | Add the contract salary rows on the employee. |

## Related pages

- [Payroll setup](/human-resources/salary-structure)
- [The WPS salary file](/human-resources/wps-payroll)
- [HR month-end provisions](/human-resources/hr-month-end)

@@ wps-payroll | The WPS salary file
@summary Build the MOHRE salary information file (SIF) from a submitted payroll entry and upload it to your bank or exchange house.

The Wages Protection System (WPS) is the UAE system that checks that private companies pay salaries through approved banks and exchange houses. Each month you give your bank or agent a salary information file (SIF). It lists each employee's pay (EDR lines), the allowance split (EVP lines) and a total line for the employer (SCR). DocFlow builds this file from a submitted payroll entry in the MOHRE standard format.

**Where to find it:** **Payroll** > **WPS Salary File**.

## Before you start

- You need the **HR Manager**, **Accounts Manager** or **System Manager** role.
- On the **Entity** record, in the section **Wages Protection System (WPS)**, enter the **MOHRE Establishment ID** (13 digits) and the **Employer Bank Routing Code (WPS)** (9 digits). **WPS Bank File Format** has one choice, **Standard (MOHRE EDR/SCR)**.
- On each employee paid by bank, enter on the **Salary** tab the **MOL Person ID** (14 digits, from the labour card), the **Bank Routing Code (WPS)** (9 digits, of the employee's bank) and the **IBAN**. See [Employees and contracts](/human-resources/employees).
- Set **WPS Pay Type** on the allowance components. See [Payroll setup](/human-resources/salary-structure).
- The payroll entry and its salary slips must be submitted. See [Running payroll](/human-resources/running-payroll).

## Steps

1. Open **Payroll** > **WPS Salary File** and click **Add WPS Salary File**.
2. Choose the **Company** and the submitted **Payroll Entry**.
3. Enter an **Employer Reference** if your bank wants one (35 characters at most).
4. Click **Save**. DocFlow fills the **Salary Month (MMYYYY)**, **Pay Start**, **Pay End**, the employer IDs and the **Employees** table with one row per employee, and shows the **EDR Count** and **Total Salary**.
5. Check the rows: fixed pay, variable pay, days of unpaid leave and the allowance columns.
6. Click **Submit**.
7. Open the **SIF File** attachment and download it. Upload it to your bank or exchange house.

!fig WPS Salary File with the Employees table (Fixed Income, Variable Income, Days of Unpaid Leave) and the EDR Count and Total Salary @shot 06-hr-payroll/13-wps-file.png

!fig File section after submit with EDR Count, Total Salary, Created On, File Name and the SIF File link @shot 06-hr-payroll/13-wps-sif-attachment.png

## What happens next

- At submit DocFlow saves the file as a private attachment. Its name is the 13-digit establishment ID followed by the date and time (YYMMDDHHMMSS), with the extension `.SIF`. **Created On** and **File Name** show when and how it was made.
- Fixed and variable pay: the earnings with a **WPS Pay Type** are variable pay and go to their EVP column (housing, conveyance, medical, annual passage, overtime, other allowances, leave encashment). The rest of the net pay is fixed pay. Deductions come off the fixed pay.
- Employees with **Salary Mode** **Cash** are left out of the file. DocFlow lists them.
- The **WPS Salary Register** report shows the same figures for a date range.

:::uae Pay on time
MOHRE watches WPS payments. Late or missing salary transfers can lead to fines and a block on new work permits. Upload the file in good time each month.
:::

## Common problems

| Message | What to do |
| --- | --- |
| Payroll Entry … is not submitted | Submit the payroll entry first. |
| Payroll Entry … belongs to … | Choose a payroll entry of the same Entity. |
| Set the MOHRE Establishment ID and the Employer Bank Routing Code (WPS) on Company … | Fill in both on the Entity record. |
| Payroll Entry … has no submitted Salary Slip paid by bank | Submit the slips, or check the employees' **Salary Mode**. |
| Paid in cash, not in the file: … | A note only: these employees are paid in cash. |
| A submitted WPS Salary File already exists for Payroll Entry … | A warning: check that you are not sending the same payroll twice. |
| Set the WPS details on these Employees: … | Fill in the **MOL Person ID**, **Bank Routing Code (WPS)** or **IBAN** on the employees listed. |
| MOL Person ID must be at most 14 digits: … (or a similar message for another ID) | Correct the number. Routing codes must be exactly 9 digits, the establishment ID at most 13. |
| Salary Slip …: the deductions are more than the fixed pay, so the net pay cannot be split into fixed and variable pay | Check the deductions on that slip, or the WPS Pay Type of its earnings. |

## Related pages

- [Running payroll](/human-resources/running-payroll)
- [Payroll setup](/human-resources/salary-structure)
- [Dashboards and reports](/human-resources/payroll-reports)

@@ hr-month-end | HR month-end provisions
@summary Book the month's gratuity, leave salary and air ticket provisions and the pension and scheme contributions, and pay the pension authority.

A provision is an amount the company owes its employees but has not paid yet, such as the end of service gratuity or the leave salary of days not yet taken. UAE accounting asks you to book these amounts every month. The **HR Month-End** screen works out, for one Entity and one month, what is still to book and posts it as journal entries. It also books the pension and scheme contributions and creates the payment to the pension authority.

**Where to find it:** **Payroll** > **HR Month-End**. The same postings are a step of the Finance month-end closing. See [Month-end and year-end closing](/accounting/period-closing).

## Before you start

- To post, you need the **System Manager** or **Accounts Manager** role. Without it you can see the screen and what is already posted.
- The screen works for UAE entities.
- Each provision and contribution component needs a row in its **Accounts** table for the Entity: **Account** (the expense) and **Liability Account** (the provision or payable). The components are **End of Service Provision**, **Leave Salary Provision**, **Air Ticket Provision** and the employer contribution components (DEWS, voluntary scheme, GPSSA, ADPF, GCC pension).
- On each employee, tick what to accrue under **End of Service Accruals**, and fill in the air ticket terms. See [Employees and contracts](/human-resources/employees).
- Run the month's payroll first. See [Running payroll](/human-resources/running-payroll).

## Post the provisions

1. Open **Payroll** > **HR Month-End**.
2. Choose the **Entity**, for example Al Noor Trading LLC, and the **Month (any day of it)**.
3. Look at the four cards:
   - **End of service provision**: moves each employee's provision to the gratuity due if they left at the month end.
   - **Leave salary provision**: moves each employee's provision to the leave salary earned and not yet taken.
   - **Air ticket accrual**: the air tickets earned under the contract and not yet paid.
   - **Scheme contributions**: one entry per scheme (DEWS, voluntary scheme, GPSSA, ADPF, GCC pension) for the employees not yet booked this month.
4. Each card shows "… lines still to book", "Posted, nothing more to book" or "Nothing to book". Open **Still to book** to see the employees and amounts. **Entries of this month:** lists what is already posted.
5. Click **Post** on one card, or **Post All** for all four.
6. Read the confirmation. It names the Entity and month end and says the entries are submitted with voucher type **Month-End Closing**. Confirm.

!fig HR Month-End with Entity and Month, and the End of service provision, Leave salary provision, Air ticket accrual and Scheme contributions cards showing lines still to book @shot 06-hr-payroll/14-hr-month-end.png

## Pay the pension authority

1. On the card **Payment to the pension authority**, click **Create Payment**.
2. In **Pay the pension authority**, choose the **Contribution Component**, **Owed up to** (date), **Paid From** (bank account), **Reference No** and **Reference Date**.
3. Click **Create Draft**. DocFlow creates a draft Bank Entry for everything owed on that component's payable.
4. Check the bank entry and submit it.

!fig Pay the pension authority dialog with Contribution Component, Owed up to, Paid From, Reference No and Reference Date @shot 06-hr-payroll/14-pension-payment.png

## What happens next

- Each posting is a submitted Journal Entry with voucher type **Month-End Closing**: expense against the provision or payable account.
- Each posting books only what is missing. If you post again, nothing new is posted: "Nothing was posted: nothing was missing."
- When an employee is paid the gratuity, leave salary or air ticket, the provision is used up and the next month books the difference.
- The reports **Gratuity Provision Check** and **Leave Salary Provision Check** compare the books with the provision worked out per employee. On the employee, **View** > **Gratuity Provision** and **View** > **Leave Salary Provision** open them for that person.

## Common problems

| Message | What to do |
| --- | --- |
| Posting needs the System Manager or Accounts Manager role. The entries already posted for the month are listed. | Ask an accounts manager to post. |
| … is closed (Period Closing Voucher): the books refuse postings dated in it. | The period is closed. Choose an open month, or ask the accountant to reopen it. |
| A later month already has entries (…): posting this month changes the balances that month booked against. | A warning. Post the months in order where you can. |
| Draft payments exist already (…). A second draft would pay the same balance again: submit or delete those first. | Submit or delete the existing draft bank entry. |
| Air ticket terms of … are incomplete: set Amount per Ticket and Every (Months) | Fill in the air ticket terms on the employee. The employee is skipped until then. |
| An employee is listed as skipped | Open the line to see why, for example missing pension fund figures, and fix the employee or fund. |

## Related pages

- [Month-end and year-end closing](/accounting/period-closing)
- [Gratuity and final settlement](/human-resources/gratuity)
- [Pension contributions](/human-resources/pension)

@@ gratuity | Gratuity and final settlement
@summary Work out the UAE end of service gratuity, add notice pay and the air ticket, collect every amount in the Full and Final Statement and pay the balance.

When an employee leaves, you pay their final dues: the end of service gratuity, the leave salary still owed, any notice pay and air ticket, less what the employee owes the company. The **Full and Final Statement** collects every amount in one place.

**Where to find it:** the **End of Service** rail item, or **Payroll** > **End of Service** > **Gratuity**, **Gratuity Rule** and **Pension Fund**. Open the **Full and Final Statement** from the search bar.

## Before you start

- Set the **Relieving Date** on the employee. Most of the steps below refuse to run without it. See [Separation](/human-resources/separation).
- Check the contract salary. Gratuity is worked out on the basic pay in the contract.
- Submit or withhold the last salary slip. See [Running payroll](/human-resources/running-payroll).

## How the UAE gratuity is worked out

DocFlow comes with the rule **UAE End of Service Gratuity**:

- 21 days of basic pay for each year of service up to 5 years, then 30 days for each further year.
- The total is capped at 24 months of basic pay.
- The basic pay comes from the contract. The relieving date counts as a day of service.

No gratuity is paid under this rule when the employee is in a pension scheme or in DEWS or the voluntary scheme from the joining date. When the gratuity earned before a scheme start was moved to the scheme, none is due either.

:::example A worked figure
An employee with a contract basic pay of AED 8,000 and 7 years of service earns 5 × 21 + 2 × 30 = 165 days. At AED 8,000 ÷ 30 a day, that is AED 44,000.
:::

## 1. Create the gratuity

1. Open the employee and click **Create** > **Gratuity**. Or open **End of Service** > **Gratuity** and click **New**.
2. Check **Employee**, **Posting date** and **Gratuity Rule** (UAE End of Service Gratuity).
3. Open the **Payment and Accounting** tab:
   - To pay with the last salary slip, keep **Pay via Salary Slip** ticked and set the **Payroll Date** and the **Salary Component**.
   - To pay it separately, untick **Pay via Salary Slip** and set the **Mode of Payment**, **Expense Account** and **Payable Account**.
4. Save and **Submit**. The amount is worked out from the rule.

If you book the end of service provision every month, untick **Pay via Salary Slip**. A salary slip payment would not release the provision. See [HR month-end provisions](/human-resources/hr-month-end).

!fig Gratuity, Payment and Accounting tab with Pay via Salary Slip unticked, Total Amount, Mode of Payment, Expense Account and Payable Account @shot 06-hr-payroll/15-gratuity.png

## 2. Add notice pay and the air ticket (if owed)

These buttons show on the employee (and on the Full and Final Statement) once a relieving date is set.

1. Click **Create** > **Notice Pay**. Enter the **Notice days not worked** and click **Create Draft**. DocFlow creates a draft Additional Salary of the fixed contract wage ÷ 30 × days.
2. Click **Create** > **Air Ticket Payout** and confirm. DocFlow creates a draft Additional Salary for the air ticket dues at the relieving date.
3. Check each draft against the contract and submit it.

## 3. Make the Full and Final Statement

1. Open **Full and Final Statement** and click **New**.
2. Choose the **Employee** and the **Transaction Date**. Save.
3. DocFlow fills the tables:
   - **Payables**: withheld salary slips, then rows for Gratuity, Expense Claim, Bonus and Leave Encashment.
   - **Receivables**: one row for each open Employee Advance.
   - **Assets Allocated**: assets the employee still holds.
4. In each row, choose the document and amount where needed. Set the row **Status** to **Settled** once it is agreed.
5. For each asset, mark it **Returned**, or set the action to recover its cost.
6. Check **Total Payable Amount**, **Total Receivable Amount** and **Total Asset Recovery Cost**. Submit.

!fig Full and Final Statement with a Gratuity row in Payables, an Employee Advance row in Receivables, the Assets Allocated table and the totals @shot 06-hr-payroll/15-full-and-final.png

## 4. Pay the balance

1. On the submitted statement, click **Create Journal Entry**.
2. DocFlow opens a new Bank Entry that pays the payables, takes back the receivables and asset costs, and balances through the bank.
3. Check it and submit it. The statement then shows **Paid**, and the gratuity and leave encashment it lists are marked **Paid** too.

## Other end of service records

- **Gratuity Scheme Transfer**: for a non-Mainland employee who joined a savings scheme, it records the gratuity earned until the scheme start that was moved to the scheme, with the **Employee's Written Consent**. Open it from the employee with **Create** > **Gratuity Scheme Transfer**.
- **Gratuity Actuarial Valuation**: for entities that use an actuary. Enter the **Valuation Date**, the **Actuarial Obligation (Actuary's Report)** and **Of Which Remeasurement (OCI)**. DocFlow compares it with the **Provision by Formula** and books the **Adjustment to Book**.

## What happens next

- Seven days after the relieving date, if no Full and Final Statement is submitted, HR Managers get the notification "Final dues due within 14 days". UAE law asks for final dues within 14 days of the last working day.
- If the journal entry is cancelled, the statement goes back to **Unpaid**.

## Common problems

| Message | What to do |
| --- | --- |
| Please set Relieving Date for employee: … | Set the **Relieving Date** on the employee. |
| Employee: … have to complete minimum … years for gratuity | The employee has not served long enough under the rule. No gratuity is due. |
| Pay via Salary Slip is not allowed while the end of service provision is in use: … | Untick **Pay via Salary Slip** and fill in the payment accounts. |
| Employee … has Accrue Pension Scheme ticked, or DEWS or the voluntary scheme from the joining date: no end of service gratuity is paid … | Correct. The scheme replaces the gratuity. |
| The gratuity of … was transferred to the scheme with the employee's written consent (…): none is due. | Correct. See the Gratuity Scheme Transfer. |
| Please set the Payroll Date: … | Set **Payroll Date**, or untick **Pay via Salary Slip**. |
| Please set the Payable Account and the Expense Account | Fill both on the **Payment and Accounting** tab. |
| Total Amount cannot be zero | Check the rule, contract basic pay and dates. |
| Set the Relieving Date of … first | Set the relieving date before Notice Pay. |
| … exists already for … on this relieving date. Open it instead of creating a second one. | Open the existing draft. |
| Nothing is owed as … for … | No air ticket or notice pay is due. |
| Settle every payable and receivable row before submitting. | Set every row's **Status** to **Settled**. |
| These assets still have to be returned: | Mark each asset **Returned**, or recover its cost. |

## Related pages

- [Separation](/human-resources/separation)
- [HR month-end provisions](/human-resources/hr-month-end)
- [Employee advances](/human-resources/advances-loans)

@@ pension | Pension contributions for UAE and GCC nationals
@summary Put Emirati and GCC employees on their pension fund, deduct the employee share in payroll, book the employer share at month end and pay the authority.

UAE nationals in the private sector contribute to the **GPSSA**, or to the **Abu Dhabi Pension Fund** when they work in Abu Dhabi. GCC nationals contribute to their home country's fund. For these employees the pension replaces the end of service gratuity.

**Where to find it:** **Payroll** > **End of Service** > **Pension Fund**, and the **Pension Scheme** section of the employee.

## Before you start

- You need the **HR Manager** role.
- Set **Nationality** (and the **Country of Nationality** for GCC nationals) on the employee. See [Employees and contracts](/human-resources/employees).

## Check the pension funds

1. Open **Pension Fund**.
2. DocFlow comes with **GPSSA**, **GPSSA (registered before 31 Oct 2023)**, **Abu Dhabi Pension Fund**, **Abu Dhabi Pension Fund (registered before 1 Dec 2023)** and one fund for each other GCC country. Each has its **Employer Contribution (%)**, **Employee Contribution (%)**, **Monthly Salary Cap** and **Legal Basis**. For example, GPSSA has 11% employee and 15% employer, 12.5% below AED 20,000.
3. Check the figures against the current rules and change them if needed.

## Put an employee on the pension

1. On the employee, under **End of Service Accruals**, tick **Accrue Pension Scheme**. **Accrue Gratuity** must be unticked.
2. Under **Pension Scheme**, check the **Pension Fund** (GPSSA by default). You can override a rate or cap here for this employee.
3. In the salary structure, add the deduction **GPSSA Employee Contribution**. It works out the employee share from the employee's pension fund. See [Payroll setup](/human-resources/salary-structure).

## Book and pay the contributions

1. After payroll, open **HR Month-End** and post the **Scheme contributions** card. It books the employer share.
2. Click **Create Payment** on **Payment to the pension authority** to make a draft bank entry for everything owed. See [HR month-end provisions](/human-resources/hr-month-end).

## What happens next

The **Pension Contributions** report (UAE sites) lists the contributions per employee.

:::warning Check current rates
Contribution rates and caps have changed in recent years and differ between funds. Confirm them with the authority before your first run.
:::

## Common problems

| Message | What to do |
| --- | --- |
| Accrue Pension Scheme is for UAE and GCC nationals: set Nationality (and the country) first. | Set the nationality on the employee. |
| Pension Fund … has no …: set it on the fund or on the Employee | Fill in the missing rate or cap. |

## Related pages

- [HR month-end provisions](/human-resources/hr-month-end)
- [Emiratisation](/human-resources/emiratisation)

@@ air-tickets | Air tickets and leave salary
@summary Record each employee's air ticket entitlement, accrue it every month, pay it at exit, and pay leave salary before annual leave.

Air tickets are not required by UAE labour law, but many contracts include an annual or biennial ticket home, sometimes for dependants too. DocFlow keeps the terms on the employee, books the accrual every month and pays what is owed when the employee leaves.

**Where to find it:** the **Air Ticket Entitlement** section of the employee, and **Payroll** > **HR Month-End**.

## Record the entitlement

1. Open the employee and go to **Air Ticket Entitlement**.
2. Tick **Air Ticket Entitlement**.
3. Enter the **Class**, **Amount per Ticket**, **Every (Months)**, **Dependants Covered** and **Entitlement From**.
4. Click **Save**.

## Accrue the cost each month

The **Air ticket accrual** card of **HR Month-End** books the tickets earned and not yet paid, against the **Air Ticket Provision** component's accounts. See [HR month-end provisions](/human-resources/hr-month-end).

## Pay the ticket at exit

Once the relieving date is set, click **Create** > **Air Ticket Payout** on the employee. DocFlow creates a draft **Additional Salary** for the air ticket dues. See [Gratuity and final settlement](/human-resources/gratuity).

## Leave salary

To book leave salary every month, tick **Accrue Vacation Pay** on the employee. The **Leave salary provision** card of HR Month-End posts it.

To pay leave salary before the employee travels, open the approved **Annual Leave** application and click **Create** > **Pay Leave Salary in Advance**. See [Holidays and leave](/human-resources/attendance-leave).

## Common problems

| Message | What to do |
| --- | --- |
| Air ticket terms of … are incomplete: set Amount per Ticket and Every (Months) | Fill in the terms on the employee. |
| Nothing is owed as … for … | No air ticket is due at the relieving date. |

## Related pages

- [HR month-end provisions](/human-resources/hr-month-end)
- [Holidays and leave](/human-resources/attendance-leave)

@@ insurance | Health insurance and ILOE
@summary Record each employee's health insurance provider and number, and track the ILOE unemployment insurance subscription as an employee document.

Employers in the UAE must give their employees health insurance. Most employees must also subscribe to the **Involuntary Loss of Employment (ILOE)** scheme.

## Health insurance

1. Create an **Employee Health Insurance** record for each insurer (HR Manager).
2. On the employee, in the **Health Insurance** section, pick the **Health Insurance Provider** and enter the **Health Insurance No**.
3. Record premiums as purchase invoices from the insurer or broker.

## ILOE subscription

ILOE is one of the five **Employee Document** types. Record it like any other document. See [UAE employee documents and PRO tasks](/human-resources/visa-pro).

1. Add an **Employee Document** with **Document Type** **ILOE Subscription**, the number and the dates.
2. Choose the **ILOE Category**, or leave it empty: DocFlow fills it from the basic salary of the last salary slip (**First Category** up to AED 16,000, **Second Category** above).

DocFlow then warns HR before the subscription expires.

:::uae Check eligibility
Some groups, such as investors who own their business, domestic workers and retirees receiving a pension, are exempt from ILOE. Check the current rules for each category of staff.
:::

## Related pages

- [UAE employee documents and PRO tasks](/human-resources/visa-pro)
- [Employees and contracts](/human-resources/employees)

@@ emiratisation | Emiratisation
@summary Set MoHRE skill levels and nationalities, and read the Emiratisation Summary per department to plan for the targets.

Private companies on the mainland with 50 or more employees must raise the share of UAE nationals in skilled jobs each year, and some smaller companies in chosen sectors must employ at least one or two. The **Emiratisation Summary** report shows where you stand.

**Where to find it:** **HR Setup** > **Reports** > **Emiratisation Summary** (UAE sites only).

## Before you start

- Set **Nationality** on every employee.
- Set the **MoHRE Skill Level** (1 to 9) on each **Designation**. Set it on an **Employee** only when their work permit occupation has a different level.

## Steps

1. Open the **Emiratisation Summary** report.
2. Choose the **Company** and the **Date**.
3. Read the cards at the top and the columns per department: **Employees**, **UAE Nationals**, **Other GCC Nationals**, **Other Nationals**, **Nationality Not Set**, **UAE Nationals %**, **Skilled Jobs**, **Skilled UAE Nationals** and **Skilled UAE Nationals %**.

!fig Emiratisation Summary with the summary cards (Employees, UAE Nationals, Skilled Jobs, MoHRE Target) and the table by department @shot 06-hr-payroll/16-emiratisation.png

A skilled job is MoHRE skill level 1 to 5 with a contract fixed pay of at least AED 4,000. Use the figures for planning. The official count is the one MoHRE holds.

:::uae Check the year's targets
MoHRE sets the target percentages, deadlines and contributions for missed targets. Confirm the current rules for your company size and sector.
:::

## Common problems

| Message | What to do |
| --- | --- |
| Company and Date are required | Fill in both filters. |
| Skilled jobs show 0 | Set the **MoHRE Skill Level** on the designations and check the contract fixed pay. |

## Related pages

- [Pension contributions](/human-resources/pension)
- [Dashboards and reports](/human-resources/payroll-reports)

@@ tax-benefits | Tax and benefits
@summary The Tax & Benefits screens for employers who deduct income tax from salaries. A UAE entity does not need them.

The **Tax & Benefits** rail item is for employers who deduct income tax from salaries in countries that have personal income tax. The UAE has no personal income tax, so UAE users can ignore all of these screens.

**Where to find it:** **Tax & Benefits**: **Benefit Application**, **Benefit Claim**, **Exemption Declaration**, **Exemption Proof**, and under **Setup** **Income Tax Slab**, **Exemption Category** and **Exemption Sub Category**.

## Before you start

- Create a **Payroll Period** (the tax year) and an **Income Tax Slab** for it.
- Give the salary structure a tax deduction component that uses the slab.

## Steps

1. Set up the **Exemption Category** and **Exemption Sub Category** records, the kinds of investment or expense that reduce taxable income, with their maximum amounts.
2. Each employee fills an **Exemption Declaration** for the payroll period: what they plan to claim. Payroll deducts tax on the declared figures.
3. Later the employee proves the amounts. On the declaration, click **Submit Proof**, or create an **Exemption Proof** and click **Get Details From Declaration**.
4. For flexible benefits, the employee makes a **Benefit Application** and later a **Benefit Claim** for what they spent. If **Mandatory Benefit Application** is ticked in Payroll Settings, payroll needs the application first.
5. On the last payroll of the period, tick **Deduct Tax For Unsubmitted Tax Exemption Proof** on the **Payroll Entry**.

## What happens next

Salary slips deduct tax by the slab, less the declared or proved exemptions.

## Common problems

| Message | What to do |
| --- | --- |
| No tax is deducted | Check the **Income Tax Slab**, the **Payroll Period** and the tax component in the salary structure. |

## Related pages

- [Payroll setup](/human-resources/salary-structure)

@@ payroll-reports | Dashboards and reports
@summary The six HR dashboards, the UAE reports, the other HR and payroll reports, and daily work summaries.

Human Resources has six dashboards with number cards and charts, and reports for headcount, attendance, leave, payroll and the UAE rules.

**Where to find it:** each HR sidebar has a dashboard link near the top, for example **HR Setup** > **Workforce Dashboard**. Reports are in the **Reports** section of each sidebar.

## Before you start

- You need the **HR Manager** or **HR User** role. Payroll figures also need access to salary slips.
- Country reports appear only when the site's country matches. The country is chosen in the setup wizard. See [First login and the setup wizard](/getting-started/first-login).

## Dashboards

| Dashboard | Sidebar link | Number cards | Charts |
| --- | --- | --- | --- |
| **Workforce** | HR Setup > **Workforce Dashboard** | Active Headcount, Joiners and Leavers This Month and This Year, document expiry cards | Joiners and Leavers, Age Profile, Headcount by Gender, Department, Designation, Grade, Branch and Employment Type |
| **Time & Attendance** | Shift & Attendance > **Attendance Dashboard** | Present, Absent, Late Arrivals and Early Exits This Month | Daily Presence, Attendance Mix This Month, Shift Assignments by Shift, Timesheet Hours by Department |
| **Claims & Advances** | Expenses > **Claims Dashboard** | Claims Submitted, Approved and Rejected This Month | Sanctioned Claims per Month, Claim Amount by Expense Type, Advances by Status, Claims by Department |
| **Hiring** | Recruitment > **Hiring Dashboard** | Open Positions, Applicants This Month, Offers Made This Month, Accepted and Rejected Applicants, Applicant to Hire Rate, Offer Acceptance Rate, Average Time to Fill | Applications Received, Applicants per Opening, Applicants by Status, Source and Country, Open Positions by Department and Designation, Interview Outcomes, Offer Outcomes |
| **Employee Movements** | Tenure > **Movements Dashboard** | Onboardings, Separations, Promotions, Transfers and Training Events This Month | Promotions per Month, Transfers per Month, Grievances by Type, Training Events by Type |
| **Payroll Overview** | Payroll > **Payroll Dashboard** | Net Pay Last Month, Incentives Last Month, Active Salary Structures, Tax Declarations Submitted | Net Pay per Month, Payroll Cost by Department, Payroll Cost by Branch |

!fig Workforce dashboard with headcount, joiners, leavers and document expiry cards and the Headcount by Department chart @shot 06-hr-payroll/16-workforce-dashboard.png

## Open a dashboard or report

1. Open the sidebar, for example **HR Setup**, and click **Workforce Dashboard**.
2. Click a number card or chart to open the records behind it.
3. For a report, find it under **Reports**, or type its name in the search bar. Fill in the filters, for example **Company** and **Date**. Use the menu to export or print it.

## UAE reports

| Report | Shows |
| --- | --- |
| **WPS Salary Register** | The WPS figures for a date range |
| **Pension Contributions** | Pension and scheme contributions per employee |
| **Emiratisation Summary** | UAE nationals and skilled jobs per department. See [Emiratisation](/human-resources/emiratisation). |
| **Gratuity Provision Check** | Books against the gratuity provision per employee |
| **Leave Salary Provision Check** | Books against the leave salary provision per employee |

A site in another country does not see these.

## Other reports

| Area | Reports |
| --- | --- |
| Employees | Employee Analytics, Employee Information, Employee Birthday, Employee Contracts, Employee Document Expiry, Employee Exits |
| Leave and attendance | Employee Leave Balance, Employee Leave Balance Summary, Leave Ledger, Monthly Attendance Sheet, Shift Attendance, Employees working on a holiday |
| Expenses | Employee Advance Summary, Unpaid Expense Claim, Vehicle Expenses |
| Payroll | Salary Register, Employee CTC Break-up, Bank Remittance, Salary Payments Based On Payment Mode |
| Hiring and performance | Recruitment Analytics, Appraisal Overview |
| Time and projects | Employee Hours Utilization, Project Profitability (open it from the search bar) |

The **Organizational Chart** (**HR Setup** > **Organizational Chart**) draws the reporting lines from each employee's **Reports To** field.

## Daily work summaries and Team Updates

A **Daily Work Summary Group** emails a list of employees each working day, at the hour you choose in **Send Emails At**, asking "What did you work on today?". Their replies are collected. The **Team Updates** screen shows the replies, newest first, and the report **Daily Work Summary Replies** shows who replied.

1. Make sure the system has a default incoming email account. Without one you see "There is no default incoming Email Account to receive the replies; set one up before adding users."
2. Search for **Daily Work Summary Group** (Ctrl+K) and create one: add the **Users**, pick **Send Emails At** and a **Holiday List** (no email on holidays), and adjust the **Subject** and **Message** if you like.

## Common problems

| Message | What to do |
| --- | --- |
| A UAE report is missing from the sidebar | The site's country is not United Arab Emirates. Ask the administrator to check the country in **System Settings**. |
| A chart is empty | There are no records in its period yet, or you lack the role to read them. |

## Related pages

- [UAE employee documents and PRO tasks](/human-resources/visa-pro)
- [The WPS salary file](/human-resources/wps-payroll)
- [HR month-end provisions](/human-resources/hr-month-end)

@@ self-service | The Employee App
@summary Employee Self Service for every employee: open the app, find your way around its five tabs and add it to your phone.

The **Employee App** (Employee Self Service) is the part of DocFlow made for every employee. On your phone or computer you can check in and out, ask for leave, claim expenses, ask for an advance, ask to fix your attendance or change your shift, and see your payslips. Managers approve their team's requests in the same app.

**Where to find it:** open the **Human Resources** tile and click **Employee App** in the rail. HR staff also find it at **HR Setup** > **Employee App**. On the login page, **Open Employee Self Service** under "Employee?" opens it directly.

## Before you start

- HR must give you a DocFlow user and link it to your employee record (the **User ID** field on the employee). HR can do this with **Create User** on the employee. Without this link the app cannot find you.
- You need your login email and password. HR or your administrator sends them to you.

## Open the app

1. Open the DocFlow address your company gave you.
2. Enter your **Email** and **Password** and log in. Users who are only employees go straight to the app. Others open it from the **Human Resources** tile (**Employee App**).
3. You see the **Home** tab. It greets you with "Hey, *your first name*".

!fig Home tab of the Employee App with the greeting, Check In button, Quick Links and My Requests / Team Requests @shot 07-employee-self-service/01-home.png

4. Use the five tabs at the bottom:
   - **Home**: check in and out, quick links and your latest requests.
   - **Attendance**: your attendance calendar, attendance requests and shifts.
   - **Leaves**: your leave balance, holidays and leave requests.
   - **Expenses**: your expense claims and advances.
   - **Salary**: your payslips.
5. At the top, tap the bell for your notifications or your picture for your profile.

## Add the app to your phone

1. When your browser allows it, DocFlow shows **Install DocFlow**: "Get the app on your device for easy access & a better experience!"
2. Tap **Install**. The app icon appears on your home screen.

If you do not see the message, use your browser's own "Add to Home screen" option.

!fig Install DocFlow message with the Install button over the Home tab @shot 07-employee-self-service/01-install.png

## What happens next

- Every request you send goes to your approver. You see its status under **My Requests** on the Home tab, and you get a notification when it is approved or rejected.
- You stay logged in until you log out. See [Profile and settings](/human-resources/ess-profile).

## Common problems

| Message | What to do |
| --- | --- |
| Login Failed. No active employee found associated with the email ID … | Your user is not linked to an active employee. Log in with your work email, or ask HR to set the **User ID** on your employee record. Tap **Go to Login** to try again. |
| I forgot my password | On the login page, click **Forgot password?** and follow the email. |

## In this section

- [Check in and out](/human-resources/ess-check-in)
- [Apply for leave](/human-resources/ess-leave)
- [Expense claims and advances](/human-resources/ess-expenses)
- [Attendance and shift requests](/human-resources/ess-attendance)
- [Payslips](/human-resources/ess-payslips)
- [Profile and settings](/human-resources/ess-profile)
- [For managers: approving requests](/human-resources/ess-approvals)
- [Common problems](/human-resources/ess-problems)

@@ ess-check-in | Employee App: check in and out
@summary Check in when you start work and out when you finish, with your location where your company asks for it.

When you start work you check in, and when you finish you check out. DocFlow records the time, and where your company asks for it, your location. HR uses these records to mark your attendance.

**Where to find it:** the **Home** tab, at the top.

## Before you start

- HR must turn on **Allow Employee Checkin from Mobile App** in HR Settings. If it is off, the Home tab shows only today's date and no button.
- If HR turned on **Allow Geolocation Tracking**, your browser asks for your location. Allow it.
- If your shift has a work location, you must be close to it when you check in.

## Steps

1. Open the **Home** tab.
2. Tap **Check In**. A sheet opens with the time and, when location is on, your position on a map.
3. Wait until your location appears ("Locating..." shows while it searches).
4. Tap **Confirm Check In**. You see "Check-in successful!".
5. At the end of your day tap **Check Out**, then **Confirm Check Out**.

!fig Check In sheet with the time, date, latitude and longitude, a map and the Confirm Check In button @shot 07-employee-self-service/02-check-in.png

## What happens next

- The Home tab shows when you last checked in or out, for example "Last check-in was at 08:58".
- Tap **View List** to see all your check-ins and check-outs (**Employee Checkin History**).
- HR's attendance run turns your check-ins into attendance. You see the result on the **Attendance** tab.
- If you forgot to check in, ask to fix your attendance. See [Attendance and shift requests](/human-resources/ess-attendance).

## Common problems

| Message | What to do |
| --- | --- |
| Check-in failed! | Check your internet and try again. If DocFlow refused the check-in, it shows the reason instead. |
| This check-in is … m from …; the allowed radius is … m. | You are too far from your work location. Check in when you are on site, or ask HR. |
| Geolocation is not supported by your current browser | Use a newer browser, or ask HR. |
| Unable to retrieve your location | Allow location for DocFlow in your browser or phone settings, turn on location, and try again. |
| There is no Check In button | HR has not turned on check-in from the app. Ask HR. |

## Related pages

- [Attendance and shift requests](/human-resources/ess-attendance)
- [Shifts, attendance and the roster (HR)](/human-resources/shifts-rosters)

@@ ess-leave | Employee App: apply for leave
@summary See your leave balance and upcoming holidays, and ask for leave from the Leaves tab.

You can see how many leave days you have left, see the coming public holidays and ask for leave. Your leave approver gets your request and approves or rejects it.

**Where to find it:** the **Leaves** tab. The **Request Leave** quick link on the Home tab opens a new request.

## Before you start

- HR must give you leave days (a leave allocation) for the type you want, for example **Annual Leave**. You see them under **Leave Balance**.
- If you do not see a leave type, ask HR.

## Steps

1. Open the **Leaves** tab. Check **Leave Balance**: each card shows the days left for one leave type.

!fig Leaves & Holidays tab with Leave Balance cards, the Request a Leave button, Recent Leaves and Upcoming Holidays @shot 07-employee-self-service/03-leaves-tab.png

2. Tap **Request a Leave**.
3. Choose the **Leave Type**.
4. Choose the **From Date** and **To Date**. For half a day, tick **Half Day**.
5. Write the **Reason**.
6. Check the **Leave Approver**. DocFlow fills it in from your record. You can choose another approver of your department from the list.
7. DocFlow shows **Total Leave Days** and **Leave Balance Before Application**. Holidays in your holiday list are not counted, unless HR set the leave type to count them.
8. Add a file if you need to, for example a medical certificate: tap **Upload images or documents**.
9. Tap **Save**. You see "Leave Application created successfully!".

!fig New Leave Application with Leave Type, From Date, To Date, Half Day, Total Leave Days, Reason and Leave Balance Before Application @shot 07-employee-self-service/03-leave-form.png

## What happens next

- Your request goes to your leave approver. You see it under **My Requests** on the Home tab and under **Recent Leaves** on the Leaves tab, with its status (**Open**, then **Approved** or **Rejected**).
- You get a notification when it is approved or rejected, for example "Your Leave Application … was approved."
- To see all your requests, tap **View Leave History**. The **My Leaves** tab lists your requests.
- While the request is still open, you can open it, change it and tap **Save** again. To withdraw it, ask your approver to reject it.
- Under **Upcoming Holidays** you see the next public holidays. Tap **View All** for the whole list.

## Common problems

| Message | What to do |
| --- | --- |
| You have no leaves allocated | HR has not given you leave days yet. Ask HR. |
| Insufficient leave balance for …: … available, … requested. | You do not have enough days. Ask for fewer days or choose another leave type. |
| Employee … has already applied for … between … and …: … | You already asked for leave on these days. Open the old request instead. |
| The day(s) you apply for are holidays; there is no leave to take. | Those days are already holidays. You do not need leave. |
| To Date cannot be before From Date | Correct the dates. |
| … fields are mandatory | Fill in the fields named in the message. |
| Leave Approver is mandatory. | Choose a **Leave Approver**. |

More leave messages, for example for sick and maternity leave, are in [Holidays and leave](/human-resources/attendance-leave).

## Related pages

- [For managers: approving requests](/human-resources/ess-approvals)
- [Holidays and leave (HR)](/human-resources/attendance-leave)

@@ ess-expenses | Employee App: expense claims and advances
@summary Claim back money you spent for work, with receipts, and ask for an advance before a trip.

When you pay for something for work, such as a taxi or a client lunch, you claim the money back with an expense claim. When you need money before a work trip, you ask for an advance. Later you settle the advance against your expense claim.

**Where to find it:** the **Expenses** tab. The Home tab has the quick links **Claim an Expense** and **Request an Advance**.

## Before you start

- Keep your receipts. Take a photo of each one so you can attach it.
- Your **Expense Approver** is usually filled in from your employee record. If not, ask HR who it is.

## Claim an expense

1. Open the **Expenses** tab and tap **Claim an Expense**.
2. On the **Expenses** tab of the form, check the **Expense Approver**.
3. Under **Expenses**, tap the add button. In **New Expense Item** fill in the **Expense Date**, **Expense Claim Type**, **Description** and **Amount**, then tap **Add Expense**. Add one item for each receipt.
4. If the receipt shows VAT and HR asks for it, add it under **Taxes & Charges** with **Add Tax**.
5. If you have an open advance, open the **Advances** tab. Under **Settle against Advances**, tick the advance and check the amount it settles.
6. Attach your receipts: tap **Upload images or documents**.
7. Check the **Totals** tab, then tap **Save**. You see "Expense Claim created successfully!".

!fig New Expense Claim with the Expenses, Advances and Totals tabs, Expense Approver, one Travel item and the attachments area @shot 07-employee-self-service/04-expense-claim.png

## Ask for an advance

1. On the **Expenses** tab, tap **Request an Advance**.
2. Write the **Purpose**, for example "Client visit to Abu Dhabi".
3. Enter the **Advance Amount**.
4. Tap **Save**.

## What happens next

- Your claim goes to your expense approver. You get a notification when it is approved or rejected.
- The **Expenses** tab shows the **Expense Claim Summary**: **Total Claimed Amount**, and how much is **Pending**, **Approved** and **Rejected**. **Recent Expenses** lists your last claims.
- **Employee Advance Balance** shows your advances. Tap **View List** to see all of them.
- The accounts team pays approved claims and advances. Payment is outside the app.
- When you leave the company, open advances are deducted in your final settlement.

!fig Expense Claims tab with the Expense Claim Summary, the Claim an Expense button, Recent Expenses and Employee Advance Balance @shot 07-employee-self-service/04-expenses-tab.png

## Common problems

| Message | What to do |
| --- | --- |
| … fields are mandatory | Fill in the fields named in the message. |
| No expenses added | Add at least one expense item. |
| Expense Approver is mandatory in the Expense Claim | Choose an **Expense Approver**. |
| No advances found | You have no open advance to settle. |
| You have no advances | You have not asked for an advance yet. |

## Related pages

- [For managers: approving requests](/human-resources/ess-approvals)
- [Expense claims (HR)](/human-resources/expense-claims)

@@ ess-attendance | Employee App: attendance and shift requests
@summary See your attendance calendar and shifts, ask to fix your attendance and ask for a different shift.

If you worked from home, were out on company work, or forgot to check in, you can ask HR to mark you present with an attendance request. If you need to work a different shift, ask for it with a shift request. The **Attendance** tab also shows your attendance for the month and your next shifts.

**Where to find it:** the **Attendance** tab. The Home tab has the quick links **Request Attendance** and **Request a Shift**.

## Before you start

- Know the dates you want to ask for.
- For a shift request, know which shift you want. Your shift approver is usually filled in from your employee record.

## See your attendance

1. Open the **Attendance** tab.
2. The **Attendance Calendar** colours each day: **Present**, **Half Day**, **Absent** or **On Leave**.
3. **Upcoming Shifts** lists the shifts HR has given you.

!fig Attendance tab with the monthly Attendance Calendar, the Present, Half Day, Absent and On Leave totals and the Request Attendance button @shot 07-employee-self-service/05-attendance-tab.png

## Ask to fix your attendance

1. Tap **Request Attendance**.
2. Choose the **From Date** and **To Date**. For half a day, tick **Half Day** and choose the **Half Day Date**.
3. Tick **Include Holidays** only if you also worked on holidays in that period.
4. Choose the **Shift** if you have one.
5. Choose the **Reason**: **Work From Home** or **On Duty** (out on company work).
6. Write an **Explanation**, for example "Forgot to check in, was in the office 9 to 6".
7. Tap **Save**.

## Ask for a different shift

1. Tap **Request a Shift**.
2. Choose the **Shift Type**.
3. Check the **Approver**.
4. Choose the **From Date** and **To Date**.
5. Tap **Save**.

!fig New Shift Request with Shift Type, Approver, From Date and To Date @shot 07-employee-self-service/05-shift-request.png

## What happens next

- **Recent Attendance Requests** and **Recent Shift Requests** show your requests and their status.
- HR checks the attendance request and submits it. DocFlow then marks your attendance for those days.
- Your shift approver approves or rejects the shift request, and you get a notification. An approved shift shows under **Upcoming Shifts**.
- For lists of all your requests, use **Attendance Request History**, **Shift Request History** and **Shift Assignment History**.

## Common problems

| Message | What to do |
| --- | --- |
| To Date cannot be before From Date | Correct the dates. |
| … fields are mandatory | Fill in the fields named in the message. |
| You have no upcoming shifts | HR has not given you a shift yet. Ask HR if you expected one. |
| … is not a Shift Request Approver of employee …. | Choose an approver from the list. |

## Related pages

- [Check in and out](/human-resources/ess-check-in)
- [Shifts, attendance and the roster (HR)](/human-resources/shifts-rosters)

@@ ess-payslips | Employee App: payslips
@summary See your payslips and your pay so far this year, and download each payslip as a PDF.

After each payroll, HR publishes your payslip (salary slip). In the app you can see your payslips, your pay so far this year, and download each one as a PDF.

**Where to find it:** the **Salary** tab. The Home tab has the quick link **View Salary Slips**.

## Before you start

- You see a payslip only after HR has submitted it.
- HR must have set up the payroll period (the payroll year) for your Entity.

## Steps

1. Open the **Salary** tab. The screen is called **Salary Slips**.
2. At the top you see **Year To Date**: your pay so far in the chosen period.
3. To see another year, choose it in **Select Payroll Period**.
4. Tap a payslip in the list to open it.
5. The payslip shows your **Earnings** and **Deductions**, with the totals and your net pay.
6. To keep a copy, tap **Download PDF**.

!fig Salary Slips screen with Year To Date, the payroll period selector and one monthly payslip @shot 07-employee-self-service/06-salary-tab.png

!fig One payslip on the Earnings & Deductions tab with Basic, Housing Allowance, Transport Allowance and the Download PDF button @shot 07-employee-self-service/06-salary-slip.png

## What happens next

The PDF is saved on your device. You can print it or send it, for example to a bank or a landlord.

## Common problems

| Message | What to do |
| --- | --- |
| No salary slips found | HR has not submitted a payslip for this period yet, or another period is chosen. Choose the period, or ask HR. |
| The period list is empty | HR has not created the payroll period. Ask HR. |
| Failed to download PDF | Try again. If it keeps failing, ask HR for a copy. |

If an amount on your payslip looks wrong, ask HR. You cannot change a payslip yourself.

## Related pages

- [Running payroll (HR)](/human-resources/running-payroll)

@@ ess-profile | Employee App: profile and settings
@summary See the details HR keeps about you, change your password, read your notifications and log out.

Your profile shows the details HR keeps about you. Here you can also change your password, read your notifications and log out.

**Where to find it:** tap your picture at the top right. Tap the bell for notifications.

## Before you start

You need to be logged in. Only HR can change your details. If something is wrong, ask HR.

## See your details

1. Tap your picture at the top right.
2. Tap a group to open it:
   - **Employee Details**: name, employee number, gender, date of birth, date of joining, blood group.
   - **Entity Information**: Entity, department, designation, branch, grade, who you report to and employment type.
   - **Contact Information**: mobile number and emails.
   - **Salary Information**: salary mode, bank name, bank account number, IBAN and the other pay details HR has entered.

!fig Profile screen with Employee Details, Entity Information, Contact Information, Salary Information, Settings and Log Out @shot 07-employee-self-service/07-profile.png

## Change your password

1. On your profile, tap **Settings**, then **Change Password**.
2. Enter your **Current Password**.
3. Enter the **New Password** and type it again in **Confirm New Password**.
4. Tap **Update Password**. You see "Your password has been updated."

## Read your notifications

1. Tap the bell at the top.
2. The screen shows how many are unread. Tap a notification to open the request it is about.
3. Tap **Mark all as read** to clear them. Tap **Load more** to see older ones.

## Log out

1. On your profile, tap **Log Out**.
2. Log out on a shared phone or computer when you finish.

## Common problems

| Message | What to do |
| --- | --- |
| New passwords do not match | Type the same new password in both fields. |
| Please fill all fields | Fill in all three password fields. |
| Failed to update password, or another message from DocFlow | Check your current password. If DocFlow says the new password is too weak, choose a longer one. |
| You have no notifications | Nothing new. |
| An error occurred while attempting to log out! | Check your internet and try again. |

## Related pages

- [The Employee App](/human-resources/self-service)
- [Common problems](/human-resources/ess-problems)

@@ ess-approvals | Employee App: approving requests (managers)
@summary Approve or reject your team's leave, expense and shift requests on your phone from Team Requests.

If you are a team lead or manager, your team's leave requests, expense claims and shift requests come to you. You can approve or reject them in the Employee App, without opening the full HR screens.

**Where to find it:** the **Home** tab, section **Team Requests**. The list screens have the tabs **Team Leaves**, **Team Claims**, **Team Advances** and **Team Requests** (shift requests).

## Before you start

- You must be linked to an employee record yourself, like every app user.
- HR must name you as the approver: **Leave Approver**, **Expense Approver** or **Shift Request Approver** on the employee or their department.
- You need the matching role, **Leave Approver** or **Expense Approver**. Ask HR if the buttons are missing.
- You cannot approve your own requests.

## Steps

1. Open the **Home** tab and tap **Team Requests**. You see the ten newest leave, expense, shift and attendance requests of your team.

!fig Home tab with Team Requests selected, listing an expense claim and two annual leave requests with their status @shot 07-employee-self-service/08-team-requests.png

2. Tap a request. A sheet opens with its details and any attached files. Tap the open icon next to the title to see the full request.
3. Tap **Approve** or **Reject**. You see "Approved successfully!" or "Rejected successfully!".
4. When you have permission to submit, the sheet then shows **Submit**. Tap it to finish the request. You see "Document submitted successfully!".

!fig Leave Application sheet with leave type, dates, employee, status, reason and the Reject and Approve buttons @shot 07-employee-self-service/08-approve-sheet.png

To see more than ten requests, open the list screen (for example **Leave History**), tap the **Team Leaves** tab, and use **Filters** to narrow the list.

## What happens next

- The employee gets a notification, for example "Your Leave Application … was approved."
- A submitted leave marks the employee's attendance as **On Leave** and uses their leave balance.
- A submitted expense claim goes to the accounts team for payment.
- An approved and submitted shift request gives the employee the shift.
- Attendance requests and advances have no approve step in the app. HR (or, for advances, an expense approver) submits them in the HR screens.

## Common problems

| Message | What to do |
| --- | --- |
| You have no team requests | No request is waiting for you. |
| You cannot approve your own leave | Another approver must approve your leave. |
| You cannot approve your own expense claim | Another approver must approve your claim. |
| Only Leave Applications with status Approved or Rejected can be submitted. | Tap **Approve** or **Reject** before **Submit**. |
| There is no Submit button after approving | You may not have the right to submit. HR submits it. |

## Related pages

- [Holidays and leave (HR)](/human-resources/attendance-leave)
- [Expense claims (HR)](/human-resources/expense-claims)
- [Shifts, attendance and the roster (HR)](/human-resources/shifts-rosters)

@@ ess-problems | Employee App: common problems
@summary The problems employees meet most often in the Employee App, and what to do about each one.

For problems on one screen, see the table at the end of that screen's page.

## Logging in

| Problem or message | What to do |
| --- | --- |
| Login Failed. No active employee found associated with the email ID … | Your user is not linked to an active employee. Log in with your work email, or ask HR to set the **User ID** on your employee record. |
| I forgot my password | On the login page, click **Forgot password?**. |
| I see the full DocFlow home, not the Employee App | You have other roles too. Click **Employee App** in the Human Resources rail. |
| There is no Install button | Your browser does not offer it. Use the browser's own "Add to Home screen". |

## Check-in

| Problem or message | What to do |
| --- | --- |
| There is no Check In button | HR has not turned on check-in from the app. |
| This check-in is … m from …; the allowed radius is … m. | Check in at your work location. |
| Unable to retrieve your location | Allow location for DocFlow in the browser or phone settings. |

## Requests

| Problem or message | What to do |
| --- | --- |
| … fields are mandatory | Fill in the fields named in the message. |
| To Date cannot be before From Date | Correct the dates. |
| You have no leaves allocated | Ask HR to give you leave days. |
| Insufficient leave balance for … | Ask for fewer days, or choose another leave type. |
| I cannot submit my request | You do not need to. Tap **Save**; your approver or HR approves and submits it. |
| I want to change a request | Open it while it is still open, change it and tap **Save**. After approval, ask your approver. |
| I want to withdraw a request | You can delete your own attendance request from its menu (**Delete**) before it is submitted. For other requests, ask your approver to reject them. |

## Payslips

| Problem or message | What to do |
| --- | --- |
| No salary slips found | HR has not submitted a payslip for the chosen period yet. |
| Failed to download PDF | Try again later, or ask HR for a copy. |

## Still stuck?

Tap **Reload** in the menu of a request, or reload the page. If the problem stays, write down the message and ask HR.

## Related pages

- [The Employee App](/human-resources/self-service)
- [Profile and settings](/human-resources/ess-profile)
