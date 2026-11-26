@@ welcome | Welcome to DocFlow
@summary What DocFlow does, who this manual is for, and the order to read the Getting Started pages in.

DocFlow is a single business platform for companies operating in the United Arab Emirates. Finance, inventory, sales, purchasing, production, projects and people all run from one database, so a delivery made by your warehouse in Jebel Ali shows up straight away in your receivables in Dubai, and a salary approved by HR in Abu Dhabi posts straight into the general ledger.

This manual is written for the people who use DocFlow every day: accountants closing the month, storekeepers receiving containers, sales coordinators preparing quotations, and HR officers running WPS payroll. You do not need a technical background to follow it.

!fig The DocFlow home screen with the greeting, the quick action buttons and the module tiles grouped under Finance, Trade, Production, Apps and Setup @shot 01-getting-started/03-home.png

## Read these pages first

Getting Started explains the parts of the screen you use every day. Every other part of the manual assumes you know them.

| Step | Page | What you learn |
| --- | --- | --- |
| 1 | [Signing in](/getting-started/sign-in) | Password, verification code, email sign-in link, forgotten password |
| 2 | [First-time setup](/getting-started/first-login) | The 4-step setup wizard an administrator runs on a new system |
| 3 | [The home screen](/getting-started/home-screen) | Greeting, quick actions and the module tiles |
| 4 | [Moving around a module](/getting-started/navigating) | Module rail, sidebar, page head and the Setup pill |
| 5 | [Searching](/getting-started/search) | The search bar (**Ctrl+K**) and Global Search (**Ctrl+G**) |
| 6 | [Choosing your entity](/getting-started/entity) | Working in one entity at a time |
| 7 | [Theme and language](/getting-started/theme-language) | Light, Dark or Automatic; English or Arabic |
| 8 | [Notifications](/getting-started/notifications) | The bell, unread items and today's events |
| 9 | [The user menu](/getting-started/user-menu) | Session Defaults, display options, Help and Logout |
| 10 | [Working with lists](/getting-started/list-views) | Filters, saved filters, bulk actions and export |
| 11 | [Working with forms](/getting-started/forms) | Save, submit, cancel, amend; timeline, comments and mentions |
| 12 | [Other views](/getting-started/other-views) | Report, Kanban, Dashboard, Calendar and Tree views |
| 13 | [Printing and PDF](/getting-started/printing) | Print formats, letter heads, print language and PDF |
| 14 | [Keyboard shortcuts](/getting-started/keyboard-shortcuts) | The shortcuts that save the most time |

## How this manual is organised

Every module has its own section, in the same order as the tiles on the home screen. Inside a section, each page covers one task or one screen.

| Look for | What it means |
| --- | --- |
| Numbered steps | Do these in order on screen |
| **Bold** words | The exact label you see on screen |
| **UAE specific** boxes | Rules that come from UAE law or authorities such as the FTA or MOHRE |
| **Example** boxes | A worked scenario with a fictional UAE company |
| Expandable questions | Common questions; click to open the answer |

## Meet the sample companies

The examples in this manual use a small set of fictional businesses so the numbers stay consistent from page to page. In DocFlow each of them is an **Entity**.

| Entity | Where | What they do |
| --- | --- | --- |
| **Al Waha Trading LLC** | Deira, Dubai (mainland) | Distributes kitchen equipment to hotels and restaurants |
| **Saqr Steel Fabrication LLC** | Mussafah, Abu Dhabi | Makes steel racks and mezzanine floors to order |
| **Lulu Pearl Foods FZE** | Jebel Ali Free Zone | Imports and repacks dates, nuts and spices |
| **Rimal Facilities Management LLC** | Sharjah | Maintenance contracts for residential towers |

:::uae Currency and dates
All amounts are in UAE dirhams (AED) unless stated otherwise. Dates follow the day-month-year format used across the UAE, for example 14-03-2026.
:::

## Before you start

- Make sure your administrator has created your user account and given you the right roles. See [Users and roles](/administration/users-roles).
- Keep your entity's Tax Registration Number (TRN) and trade licence details handy if you are setting up a new entity.
- Use a current version of Chrome, Edge, Safari or Firefox. DocFlow also works on tablets and phones. See [Using DocFlow on mobile and tablet](/getting-started/mobile-access).

:::details Is DocFlow suitable for a free zone company?
Yes. A free zone company is set up as an entity exactly like a mainland company. The differences show up in tax settings, especially for Designated Zones under VAT, which are covered in [Designated Zones and free zones](/vat-compliance/designated-zones).
:::

:::details Can one DocFlow account manage several legal entities?
Yes. You create a separate entity for each trade licence, for example a mainland LLC and its sister FZE, and switch between them with the Entity picker. See [Choosing your entity](/getting-started/entity) and [Companies](/organization/company).
:::

@@ sign-in | Signing in
@summary Sign in with your email and password, enter a verification code if two-factor sign-in is on, use an email sign-in link, or reset a forgotten password.

You sign in to DocFlow with your email address and password. Depending on how your administrator set up the system, you may also be asked for a verification code, or you can ask for a one-time sign-in link by email.

## Before you start

- You need a user account. Your administrator creates it and sends you an email to set your first password. See [Users and roles](/administration/users-roles).
- Employees who only use Employee Self Service sign in on the same page. The link **Open Employee Self Service** at the bottom of the sign-in box takes them there after they sign in.

## Sign in with your password

1. Open your DocFlow address in a browser, for example `yourcompany.docflow.ae`. The **Sign In** page opens.
2. Type your email in **Email**.
3. Type your password in **Password**.
4. Click **Continue**.

!fig The Sign In page with the Email and Password fields, the Forgot password? link, the Continue button, the Login with Email Link button and the Open Employee Self Service link @shot 01-getting-started/01-sign-in.png

DocFlow opens the [home screen](/getting-started/home-screen). If you opened a link to a page before you signed in, DocFlow takes you to that page instead.

## Enter a verification code (two-factor sign-in)

If your administrator switched on two-factor sign-in (**Enable Two Factor Auth** in [System Settings](/administration/system-settings)), a second screen called **Verification** opens after you click **Continue**.

1. Find the code. Depending on the method your administrator chose, it is in your authenticator app (**OTP App**), in a text message (**SMS**) or in an email (**Email**).
2. The first time you use an authenticator app, DocFlow emails you a link to a QR code, and the screen says "Please check your registered email address". Open the link and scan the QR code with the app (for example Google Authenticator or Microsoft Authenticator) to add your DocFlow account.
3. Type the code in **Verification Code**.
4. Click **Verify**.

To go back to the first screen, click **Back to sign in**.

!fig The Verification screen with the text "Enter Code displayed in OTP App.", the Verification Code field, the Verify button and the Back to sign in button @shot 01-getting-started/01-verification.png

:::tip Codes change every few seconds
An authenticator app shows a new code every 30 seconds. Type the code that is on screen now. If it is refused, wait for the next one and try again. Check that your phone's clock is set automatically.
:::

## Sign in with an email link

When **Login with email link** is switched on in System Settings (it is on by default), the sign-in page shows the button **Login with Email Link**.

1. Type your email in **Email**.
2. Click **Login with Email Link**.
3. DocFlow shows: "If an account exists for … a sign-in link has been sent to it."
4. Open the email and click the link. The link works once and expires after a few minutes (10 minutes by default).

## Sign in with another account

If your administrator connected a sign-in provider (for example Google or Microsoft), a button **Login with &lt;provider&gt;** is shown under **Continue**. Click it and follow the provider's screens.

## Reset a forgotten password

1. On the sign-in page, type your email, then click **Forgot password?**.
2. The **Reset Password** page opens. Check your email address and click **Send Reset Link**.
3. DocFlow shows: "If an account exists for that email, a password reset link has been sent."
4. Open the email and click the link. The **Set Password** page opens.
5. Type your new password in **New Password** and again in **Confirm New Password**.
6. Click **Confirm**. DocFlow shows "Your new password has been set successfully." and signs you in.

Use a strong password: at least 8 characters with a number or a special character.

## Change an expired password

If your administrator set passwords to expire, DocFlow shows "Your password has expired. Please reset your password to continue." after you sign in.

1. Click **Go to Reset Password page**.
2. Type your current password in **Old Password**.
3. Type the new password in **New Password** and **Confirm New Password**.
4. Click **Confirm**.

## What happens next

- After you sign in you land on the [home screen](/getting-started/home-screen).
- The sign-in page uses the language of your browser, or the language you used last on this computer. Arabic shows the page right-to-left.
- When you set a new password, DocFlow signs you out of your other open sessions.

## Common problems

| Message | What to do |
| --- | --- |
| Enter your email and password. | One of the two fields is empty. Fill both. |
| Incorrect email or password. | Check the email and password, including upper and lower case. After too many failed tries your account is locked for a while; wait, or ask your administrator. |
| Too many requests. Please try again later. | You tried too often in a short time. Wait a minute and try again. |
| OTP setup using OTP App was not completed. Please contact Administrator. | Your authenticator app was never set up. Ask your administrator to reset two-factor sign-in for your user. |
| Enter the verification code. | The **Verification Code** field is empty. |
| Enter your email first. | You clicked **Login with Email Link** with an empty **Email** field. |
| Please enter a valid email address. | On the **Reset Password** page the email is empty or not an email address. |
| Passwords do not match. | **New Password** and **Confirm New Password** are different. Type them again. |
| New password cannot be same as old password. | Choose a different password. |
| Your old password is incorrect. | Type your current password again in **Old Password**. |
| This reset link is invalid or has expired. | Ask for a new link with **Forgot password?**. |
| The server could not be reached. Check your connection and try again. | Your internet connection or the server is down. Try again later, or tell your administrator. |

:::details I lost the phone with my authenticator app
Your administrator can reset two-factor sign-in for your user. You set the app up again at your next sign-in.
:::

## Related pages

- [First-time setup](/getting-started/first-login)
- [The home screen](/getting-started/home-screen)
- [Passwords, 2FA and security](/getting-started/security)
- [Users and roles](/administration/users-roles)

@@ first-login | First-time setup
@summary The 4-step setup wizard an administrator runs once on a new DocFlow system: language and region, your account, your business and your entity.

A new DocFlow system starts with the setup wizard. It asks four short sets of questions: language and region, your own account, your business, and your organization (the entity). When you finish, DocFlow creates your entity, its chart of accounts and its first financial year.

You run the wizard once. Most users never see it. DocFlow opens it by itself the first time the administrator signs in to a new system.

## Before you start

- You need the Administrator sign-in of the new system.
- Have these ready: your entity's legal name (for example "Al Noor Trading LLC"), a short abbreviation for it (for example "ANT"), the country, the currency and the date your financial year starts.
- An **Entity** is a company you keep separate books for. See the [glossary](/getting-started/glossary).

## Step 1 of 4: Welcome

1. Choose **Your Language**.
2. Choose **Your Country**, for example **United Arab Emirates**. DocFlow fills **Time Zone** and **Currency** for that country (for the UAE: Asia/Dubai and AED).
3. Check **Time Zone** and **Currency** and change them if needed.
4. Click **Next**.

!fig Setup wizard step 1 of 4, Welcome, with Your Language set to English, Your Country to United Arab Emirates, Time Zone to Asia/Dubai, Currency to AED and the Next button @shot 01-getting-started/02-wizard-welcome.png

## Step 2 of 4: Let's set up your account

This becomes the login you use every day.

1. Type your **Full Name**.
2. Type your email in **Email Address (Will be your login ID)**.
3. Type a **Password**.
4. Click **Next**.

## Step 3 of 4: A little about you

1. Answer **Who are you setting this up for?**, **How big is the team?**, **What kind of work do you do?** and **What do you use today?**.
2. Under **Select the modules that you plan to implement**, check the modules you need: Accounting, Stock, Manufacturing, Projects. DocFlow ticks a sensible set when you pick the kind of work (for example Wholesale / Distribution ticks Accounting and Stock). You can change the ticks.
3. Click **Next**.

## Step 4 of 4: Setup your organization

1. Type the **Entity Name**, for example "Al Noor Trading LLC".
2. Check **Entity Abbreviation**. DocFlow suggests the first letters of each word ("ANTL" for Al Noor Trading LLC). Change it if you want, for example to "ANT". It can have up to 10 characters.
3. Choose a **Chart of Accounts**. The list shows the charts available for your country. Leave it empty to start from the default chart.
4. Check **Financial Year Begins On**. For the UAE DocFlow suggests 1 January of the current year. The year ends one day before the same date next year.
5. To try the system with sample records first, check **Generate Demo Data for Exploration**. Leave it empty for a live system.
6. Click **Complete Setup**.

!fig Setup wizard step 4 of 4, Setup your organization, with Entity Name "Al Noor Trading LLC", Entity Abbreviation "ANT", an empty Chart of Accounts, Financial Year Begins On 01/01/2026, the Generate Demo Data for Exploration check box and the Previous and Complete Setup buttons @shot 01-getting-started/02-wizard-organization.png

Use **Previous** to go back to an earlier step. Your answers stay filled in.

:::tip Choosing an abbreviation
The abbreviation is added to the end of account names, warehouse names and cost centres, for example "Stores - ANT". Keep it short (two to four letters) and unique if you plan to add more entities later.
:::

## What happens next

- A progress bar "Setting up your system" shows each stage. This can take a minute or two.
- DocFlow creates the entity, its chart of accounts, the financial year, and your user with the email and password from step 2.
- When it is done you see "Setup complete. Refreshing…". DocFlow signs the Administrator out and opens the sign-in page with "Sign in as &lt;your email&gt;". Sign in with the account you created in step 2.
- Next, complete the entity's details and set up VAT. Start with [Companies](/organization/company) and the [UAE compliance overview](/vat-compliance/overview).
- If you generated demo data, remove it before you go live with **Delete Demo Data** in the [user menu](/getting-started/user-menu).

## Common problems

| Message | What to do |
| --- | --- |
| Please fill language, country, timezone and currency. | Fill all four fields on step 1. |
| Full name is required. / Email is required. / Password is required. | Fill the missing field on step 2. |
| Please answer all persona questions. | Answer the four questions on step 3. |
| Enter a valid entity name. | The name is empty or is the word "Company". Type the real name. |
| Entity abbreviation is required (max 10 characters). | Type an abbreviation of 1 to 10 characters. |
| Financial year dates are required. | Pick a date in **Financial Year Begins On**. |
| Setup failed / Could not start up: … | Read the reason, click **Retry** to go back to step 4, correct the value and try again. If it fails again, contact DocFlow support. |
| Demo data could not be created | The setup itself finished. Click **Continue** and start with your own records. The details are in the Error Log. |

:::details I made a mistake in the wizard. Do I need to start again?
No. Most values can be corrected afterwards on the Entity record or in [System Settings](/administration/system-settings). Check the entity currency carefully: once transactions are posted it cannot be changed.
:::

@@ home-screen | The home screen
@summary The first page after you sign in: the header bar, the greeting, the quick action buttons and the module tiles grouped by category.

The home screen (DocFlow Desktop) is the first page you see after you sign in. It greets you, offers quick actions for common tasks, and shows a tile for every module you are allowed to use, grouped in categories.

To come back to it from inside a module, click the DocFlow logo at the top of the module rail, or choose **Desktop** in the [user menu](/getting-started/user-menu).

## Before you start

- You only see the tiles that your roles allow. If a module you need is missing, ask your administrator to give you the role.

## Read the screen

!fig The home screen with the header bar, the "Good Evening, Administrator" greeting, the quick action buttons and the Finance, Trade, Production, Apps and Setup categories @shot 01-getting-started/03-home.png

From top to bottom:

1. **The header bar.** From left to right: the DocFlow logo, the **Search** button (see [Searching](/getting-started/search)), the **Entity** picker when you work with more than one entity (see [Choosing your entity](/getting-started/entity)), the theme button, the **EN** / **AR** switch (see [Theme and language](/getting-started/theme-language)), the bell for [notifications](/getting-started/notifications), and your name and email.
2. **The greeting.** "Good Morning", "Good Afternoon" or "Good Evening" with your name, and the line "Pick up where you left off or open an app."
3. **Quick actions.** Buttons that start common work in one click:
   - **Create New Invoice** and **Create Sales Invoice** open a new sales invoice.
   - **Create Purchase Invoice** opens a new purchase invoice.
   - **Record Payment** opens a new payment entry.
   - **Add Customer** opens a new customer.
   - **Trial Balance** opens the Trial Balance report.
4. **The categories.** Tiles are grouped under **Finance**, **Trade**, **Production**, **Apps** and **Setup**. A category with no tiles for you is not shown.

| Category | Tiles you may see |
| --- | --- |
| Finance | [Accounting](/accounting/overview), [Assets](/assets/overview) |
| Trade | [Buying](/buying/overview), [Selling](/selling/overview), [Stock](/stock/overview), [Support](/support/overview) |
| Production | [Manufacturing](/manufacturing/overview), [Projects](/projects/overview), [Quality](/quality/overview), [Subcontracting](/subcontracting/overview) |
| Apps | [VAT Compliance](/vat-compliance/overview), [CRM](/crm/overview), [Human Resources](/human-resources/overview), and any custom workspace |
| Setup | [Administration](/administration/overview), [Organization](/organization/overview), [Settings](/settings/overview) |

## Open a module

1. Click a tile.
2. What opens depends on the tile:
   - **Accounting**, **Human Resources** and **Administration** are folders of several modules. They open their first module with the module rail on the left, so you can jump between the modules of the folder (see [Moving around a module](/getting-started/navigating)).
   - Other folder tiles open a small window with their modules as a grid. Click one to open it.
   - All other tiles open the module directly.

!fig The Accounting folder opened from its tile, with the module rail on the far left (Invoicing, Finance, Financial Reports, Accounts Setup, Taxes, Banking, Budget, Share Management, Subscription), the sidebar and the Invoicing home page @shot 01-getting-started/03-folder-opened.png

## Use the profile menu

Click your name at the top right. The menu has:

- **Edit Profile**: opens your user record (name, photo, language, password).
- **About**: shows the DocFlow name and logo.
- **Reset Desktop Layout**: puts the tiles back in the default order.
- **Logout**: signs you out.

Inside a module, a longer menu opens from the module name at the top of the sidebar. See [The user menu](/getting-started/user-menu).

## Common problems

| Message | What to do |
| --- | --- |
| No apps are available on your desktop yet. Ask an administrator to assign workspaces. | Your user has no roles that open a module. Ask your administrator. |
| Icon is not correctly configured please check the workspace sidebar to it | The tile points to a module page that does not exist. Tell your administrator. |
| A tile is missing | You do not have the role for it, or the module is switched off. Ask your administrator. |

## Related pages

- [Moving around a module](/getting-started/navigating)
- [Searching](/getting-started/search)
- [Theme and language](/getting-started/theme-language)

@@ navigating | Moving around a module
@summary The module rail, the sidebar, the module home, the page head with its breadcrumbs and buttons, and the Setup pill.

Every module has the same layout: a sidebar with its pages on the left, a page head with breadcrumbs and buttons at the top, and the content in the middle. Modules that belong to a folder (Accounting, Human Resources, Administration) also have a narrow module rail on the far left.

!fig A module with the module rail on the far left, the sidebar with Search, Notification and the module links, the page head with breadcrumbs, and the module home with a Profit and Loss chart, number cards, the Accounting Setup card and Quick Links @shot 01-getting-started/04-module-layout.png

## Before you start

- Open a module from the [home screen](/getting-started/home-screen).

## Use the module rail

The module rail is the narrow column of icons on the far left. It only appears in the Accounting, Human Resources and Administration folders.

1. Click an icon to switch to another module of the same folder. For example, in Accounting: **Invoicing**, **Finance**, **Financial Reports**, **Accounts Setup**, **Taxes**, **Banking**, **Budget**, **Share Management** and **Subscription**.
2. Click the DocFlow logo at the top of the rail to go back to the home screen.

## Use the sidebar

1. The top of the sidebar shows the module name. Click it to open the [user menu](/getting-started/user-menu).
2. **Search** opens the [search bar](/getting-started/search). **Notification** opens the [notifications panel](/getting-started/notifications) and shows your unread count.
3. Below are the links of the module, grouped in sections (for example **Receivables**, **Payables** or **Payments**). Click a link to open a list, a report or a page. Click a section heading to open or close it.
4. At the bottom, click your name to open your user profile.
5. To hide the sidebar and get more room, click the arrow (**Toggle Sidebar**) at its edge or press **Ctrl+/**. Press it again to bring the sidebar back.

## Read the module home

When you open a module, you see its home page. It can show:

- charts and number cards with the key figures of the module;
- a **Setup** card (for example "Accounting Setup") with the first steps to take, the count of done steps ("0/6 Steps") and a **Skip All** button;
- a **Quick Links** column with the most-used lists and reports, grouped in sections you can open and close.

## Use the page head

On every page inside a module the head shows:

1. **Breadcrumbs.** The home icon and the path to the page. Click a part to go back to it.
2. **The main button**, for example **+ Add Sales Invoice** on a list or **Save** on a form.
3. **Quick Links**: a menu of the module's quick links, so you can jump without going back to the module home.
4. **The Setup pill**: shows how many setup steps of the module are done, for example "0/6", next to a ring. Click it to open the setup card. It disappears when all steps are done or skipped.
5. A sun or moon button to switch between the light and dark theme.
6. The **Entity** picker, when you work with more than one entity.

!fig The page head of the Sales Invoice list: breadcrumbs, List View, Saved Filters, the refresh and menu buttons, + Add Sales Invoice, the bookmark, the Setup pill showing 0/6 and the theme button @shot 01-getting-started/04-setup-pill.png

## Common problems

| Problem | What to do |
| --- | --- |
| The sidebar is gone | You hid it. Press **Ctrl+/** or click the arrow at the left edge. |
| A banner says "Read Only Mode" | The system is being updated. You can look at records but not change them. Try again later. |
| A banner says "Impersonating …" | An administrator is working as another user. Changes are saved as that user. |
| The Setup pill is not shown | All setup steps of the module are done or skipped, or the module has no setup steps. |

## Related pages

- [The home screen](/getting-started/home-screen)
- [The user menu](/getting-started/user-menu)
- [Searching](/getting-started/search)
- [Working with lists](/getting-started/list-views)

@@ search | Searching
@summary How the search bar (Ctrl+K) finds pages, lists, reports and records, and how Global Search (Ctrl+G) looks inside the content of your records.

DocFlow has two kinds of search:

| | Search bar | Global Search |
| --- | --- | --- |
| Open it with | **Ctrl+K**, or **Search** on the home screen or in a module sidebar | **Ctrl+G**, or **Search for "word"** in the search bar |
| What it looks at | The names of pages, lists, reports and records, plus a few commands | The text inside your records (names, descriptions, customers, items and so on) |
| Use it to | Jump somewhere: open a list, start a new record, run a report | Find every record that mentions a word, for example a customer name |
| Results | A short list of places to go | Records grouped by record type |

Search only shows what you are allowed to open. On a Mac, use **Cmd** instead of **Ctrl**.

## Use the search bar (Ctrl+K)

1. Press **Ctrl+K**. The search bar opens with "Search or type a command".
2. Type a few letters, for example `sales inv`. You do not need the full name; DocFlow matches the letters you type and highlights them.
3. Pick a result with the up and down arrow keys and press **Enter**, or click it. Press **Esc** to close.

!fig The search bar opened over the home screen with "sales inv" typed and the results Sales Invoice List, Sales Invoice Report, New Sales Invoice, Report Sales Invoice Trends and Search for sales inv; the footer shows the keys to navigate, select, close and open Global Search @shot 01-getting-started/05-search-bar.png

### What the results mean

| Result | What it opens |
| --- | --- |
| **New Sales Invoice** | A new, empty record |
| **Sales Invoice List** | The list of records |
| **Sales Invoice Report** | The report view of the list |
| **Open …** | A page, workspace or record |
| **Report …** | A report, for example **Report Sales Invoice Trends** |
| **… Tree** | The tree view, for example **Account Tree** |
| **Find "word" in Sales Invoice** | The list filtered by your word |
| **Search for "word"** | Global Search for your word |

### Other things you can type

- A sum, for example `=1250*5%`. The result is shown at once. Start with a digit, `(` or `=`.
- `#tag` finds records with that tag.
- **Generate Random Password** makes a strong password.

### Names DocFlow understands

You can search with the name you know. For example:

- **Entity**, **Entities**, **Company** and **Companies**, and in Arabic **الكيان**, **كيان**, **الكيانات**, **الشركة**, **شركة** and **الشركات**, all find the Entity list.
- **Fixed Asset Entry** finds the fixed asset entry form.
- **Tax Refund for Tourists Scheme** finds the tourist tax refund form.

## Use Global Search (Ctrl+G)

1. Press **Ctrl+G**, or choose **Search for "word"** in the search bar.
2. Type your words, for example a customer name. Use `&` to match several words, for example `Marie&John`.
3. Results are grouped by record type, for example **Sales Invoice (4 results)** and **Customer (1 result)**. Each group is a small table with the main fields of the record, and the words you typed are highlighted.
4. Use the chips at the top to narrow the results: **All**, or one record type such as **Customer**, **Supplier**, **Item**, **Warehouse** or **Account**. Click **More** to choose other record types and pin the ones you search often.
5. Click **Show more** under a group to see more of it.
6. Click a row to open the record.

!fig Global Search for "Gulf Horizon" with the chips All, Customer, Supplier, Item, Warehouse, Account and More, and the results grouped as Sales Invoice (4 results) and Customer (1 result) @shot 01-getting-started/05-global-search.png

:::tip Which one should I use?
Use **Ctrl+K** when you know where you want to go ("purchase order list", "trial balance"). Use **Ctrl+G** when you know a word but not where it is ("Gulf Horizon", a phone number, an item description).
:::

## Common problems

| Problem | What to do |
| --- | --- |
| Ctrl+K does nothing | The search bar is switched off for your user. Ask your administrator. |
| No Results found | Check the spelling, try fewer words, or try Global Search. You may not have access to the record. |
| A record does not appear in Global Search | Only record types set up for Global Search are searched. Use the list's filters instead. |
| A record of another entity is missing from a list you opened | Lists show only the selected entity. See [Choosing your entity](/getting-started/entity). |

## Related pages

- [Working with lists](/getting-started/list-views)
- [Keyboard shortcuts](/getting-started/keyboard-shortcuts)

@@ entity | Choosing your entity
@summary Pick the entity you work in with the Entity picker or Session Defaults, and what that choice changes in forms, lists and reports.

An **Entity** is a company you keep separate books for, for example "Al Noor Trading LLC". If your system has more than one entity, you work in one at a time. The entity you choose fills new records and limits what lists and reports show.

## Before you start

- The **Entity** picker only appears when there are two or more entities you can use.
- Entities are created and maintained in Organization. See [Companies](/organization/company).

## Switch with the Entity picker

The picker is in the header of the home screen and at the right of the page head on every module page.

1. Click the **Entity** picker. It shows the current entity's name. The current entity has a check mark in the list.
2. Click the entity you want to work in.
3. DocFlow reloads the page.

!fig The Entity picker at the top right of the Sales Invoice list, open with Al Noor Trading LLC (checked) and Al Noor Logistics FZE @shot 01-getting-started/06-entity-picker.png

## Set it in Session Defaults

You can also set the entity in **Session Defaults**:

1. Inside any module, click the module name at the top of the sidebar to open the [user menu](/getting-started/user-menu).
2. Choose **Session Defaults**.
3. Choose the entity in **Default Entity**.
4. Click **Save**.

The picker and **Default Entity** set the same value. Changing one changes the other.

## What happens next

- New records get the chosen entity. Saving a record for another entity is refused; switch the entity first.
- Lists and reports show only that entity's records.
- Your choice stays until you change it.

:::example Two entities, one user
Hessa works for both Al Noor Trading LLC and Al Noor Logistics FZE. In the morning she picks Al Noor Trading LLC and enters its supplier invoices. After lunch she switches the picker to Al Noor Logistics FZE; the Purchase Invoice list now shows only that entity's invoices, and every new invoice is created for it.
:::

## Common problems

| Message | What to do |
| --- | --- |
| Another entity: "… belongs to entity … The selected entity is …: select … to save it." | You opened a record of a different entity. Switch the picker to the entity named in the message, then save. |
| Entity … does not exist | The entity was renamed or deleted. Pick another one. |
| A record you expect is missing from a list | It belongs to another entity. Switch the picker, and clear the list filters. |
| There is no Entity picker | You have access to only one entity. |

## Related pages

- [The user menu](/getting-started/user-menu)
- [Companies](/organization/company)
- [Running several companies](/organization/multi-company)

@@ theme-language | Theme and language
@summary Show DocFlow in a light, dark or automatic theme, and switch between English and Arabic (right to left).

You can show DocFlow in a light or dark theme, or let it follow your computer. You can use DocFlow in English or Arabic. In Arabic the whole screen reads from right to left.

Both settings are saved on your user, so they follow you to any computer.

## Change the theme

1. On the home screen, click the theme button (the sun) in the header. The **Switch Theme** window opens.
2. Click **Light**, **Dark** or **Automatic**. **Automatic** follows your computer's light or dark setting.
3. DocFlow shows "Theme Changed".

!fig The Switch Theme window over the home screen with the Light (selected), Dark and Automatic previews @shot 01-getting-started/07-switch-theme.png

Other ways to change the theme:

- Inside a module, click the sun or moon in the page head. One click switches between light and dark.
- Press **Shift+Ctrl+G**, or choose **Display** > **Toggle Theme** in the [user menu](/getting-started/user-menu). Both open the **Switch Theme** window.

## Switch between English and Arabic

1. On the home screen, click **EN** or **AR** in the header.
2. DocFlow saves the language and reloads.

In Arabic, menus, labels and the layout are mirrored from right to left: the logo moves to the right, the sidebar and module rail move to the right edge, and tables read from right to left. Numbers, dates, amounts and codes such as TRNs and invoice numbers stay in the same order.

!fig The home screen in Arabic, laid out from right to left, with the logo at the top right, the AR / EN switch and the module tiles under المالية, التجارة and الإنتاج @shot 01-getting-started/07-home-arabic.png

You can also change the language in your profile: click your name, choose **Edit Profile**, and change **Language**.

## What happens next

- The theme and language apply to all pages, including Employee Self Service.
- Printed documents choose their own language. See [Printing and PDF](/getting-started/printing).

## Common problems

| Message | What to do |
| --- | --- |
| The theme could not be saved on your user. | The theme changes for now but is not kept. Check your connection and try again. |
| The language could not be saved on your user. | Reload the page and try again, or change the language in your profile. |
| Some words are still in English | A few labels have no Arabic translation yet. Tell your administrator. See [Arabic labels and translations](/administration/translations). |

## Related pages

- [The home screen](/getting-started/home-screen)
- [The user menu](/getting-started/user-menu)
- [Printing and PDF](/getting-started/printing)

@@ notifications | Notifications
@summary The notifications panel: assignments, mentions, shared documents and alerts, today's events, marking items as read and choosing what you are notified about.

The notifications panel lists things that need your attention: documents assigned to you, mentions in comments, shared documents, alerts set up by your administrator, and today's events.

Open it with the bell in the header of the home screen, or **Notification** in a module sidebar. The number next to the bell or **Notification** is your unread count.

## Read your notifications

1. Click the bell, or **Notification** in the sidebar. The panel opens.
2. The **Notifications** tab lists your latest notifications. Unread items are marked with a dot.
3. Click a notification to open the document. It is marked as read.
4. To mark one as read without opening it, click **Mark as Read**. To clear all, click the double check mark (**Mark all as read**) at the top of the panel.
5. Click **See all Activity** to see older notifications.
6. Open the **Events** tab to see today's calendar events. All-day events say **All Day**.

!fig The notifications panel open from the bell on the home screen, with the Notifications and Events tabs, the settings, mark-all-read and close icons, an assignment and a mention, and See all Activity @shot 01-getting-started/08-notifications.png

## What you are notified about

| Kind | When you get it |
| --- | --- |
| Assignment | Someone assigns a document to you with **Assign** (see [Working together](/getting-started/collaboration)) |
| Mention | Someone writes `@your name` in a comment (see [Working with forms](/getting-started/forms)) |
| Share | Someone shares a document with you |
| Alert | A notification rule set up by your administrator fires, for example an overdue invoice |
| Event | A calendar event you take part in is today |

## Choose what you are notified about

1. In the panel, click the gear (**Notification Settings**). Your Notification Settings form opens.
2. Switch the kinds of notifications on or off, and choose which also come by email.
3. Click **Save** (or press **Ctrl+S**).

New notifications appear while you work, without a reload.

:::note For administrators
Alert rules (for example "email the customer 7 days after the due date"), email accounts, email digests and scheduled reports are set up in Administration. See [Automation tools](/administration/automation) and [Email templates](/administration/email-templates).
:::

## Common problems

| Message | What to do |
| --- | --- |
| No New notifications | Nothing new for you. |
| No Upcoming Events | You have no events today. |
| Notifications Disabled | You switched notifications off in **Notification Settings**. Switch them on again. |

## Related pages

- [Working with forms](/getting-started/forms)
- [Working together: assignments and sharing](/getting-started/collaboration)

@@ user-menu | The user menu
@summary The menu under the module name: Desktop, Workspaces, display options, Session Defaults, Reload, Help and Logout.

The user menu has your display settings, your session defaults, help and sign-out.

Inside any module, click the module name at the top of the sidebar. On the home screen, click your name at the top right; that menu is shorter (see [The home screen](/getting-started/home-screen)).

## Open the menu

1. Click the module name at the top of the sidebar. The menu opens.
2. Choose an item.

!fig The user menu open from the Accounting sidebar header, with Desktop, Workspaces, Website, Edit Sidebar, Display, Session Defaults, Reload, Help and Logout @shot 01-getting-started/09-user-menu.png

| Item | What it does |
| --- | --- |
| **Desktop** | Back to the [home screen](/getting-started/home-screen). |
| **Workspaces** | Jump to another module of the same folder. |
| **Website** | Opens the public website of your system. |
| **Edit Sidebar** | Changes the links in the sidebar. Usually for administrators; see [Customising workspaces](/administration/workspace-customisation). |
| **Display** > **Toggle Theme** | Opens the **Switch Theme** window: Light, Dark or Automatic (**Shift+Ctrl+G**). |
| **Display** > **Toggle Full Width** | Uses the full width of the screen for pages. Choose it again to go back. |
| **Display** > **Toggle Sidebar** | Hides or shows the sidebar (**Ctrl+/**). |
| **Session Defaults** | Sets default values for this session, such as the entity. See below. |
| **Reload** | Reloads DocFlow and clears its cache in the browser. The menu shows **Shift+Ctrl+R** next to it, but that key does the browser's own hard reload, which does not clear DocFlow's cache. |
| **Help** > **About** | Shows the DocFlow name and logo. |
| **Help** > **Keyboard Shortcuts** | Lists the shortcuts (**Shift+/**). See [Keyboard shortcuts](/getting-started/keyboard-shortcuts). |
| **Help** > **DocFlow Support** | Opens an email to DocFlow support (info@docflow.ae). |
| **Logout** | Signs you out. |

## Set session defaults

1. Choose **Session Defaults**. The **Session Defaults** window opens.
2. Choose the values you want new records to start with, for example the **Default Entity**.
3. Click **Save**.

!fig The Session Defaults window with Default Entity set to Al Noor Trading LLC, the Settings button and the Save button @shot 01-getting-started/09-session-defaults.png

A System Manager also sees a **Settings** button, to choose which fields the window shows.

Session defaults fill new records and filters until you change them. The entity default is the same one the [Entity picker](/getting-started/entity) sets.

## Common problems

| Problem | What to do |
| --- | --- |
| **Session Defaults** is not in the menu | No session defaults are set up for your system. |
| Only a few items are in the menu | Some items are switched off for your user. Ask your administrator. |
| **Delete Demo Data** is in the menu | The system still has the demo entity from the setup wizard. Choose it to remove all demo records before you go live. |

:::tip Asking for help
When you write to DocFlow support, say what you did, what you expected, the exact message you saw and the document number.
:::

## Related pages

- [Theme and language](/getting-started/theme-language)
- [Choosing your entity](/getting-started/entity)
- [Keyboard shortcuts](/getting-started/keyboard-shortcuts)

@@ list-views | Working with lists
@summary Find records with quick filters and filters, save filters you use often, sort, act on many records at once with Actions, and export.

Every kind of record (sales invoices, customers, employees and so on) has a list. In a list you find records with filters, save the filters you use often, act on many records at once and export them.

Open a list by clicking a link in a module sidebar, or search for "&lt;record type&gt; List" with **Ctrl+K**.

## Before you start

- You see only the records your role and the chosen [entity](/getting-started/entity) allow.

## Parts of a list

| Part | What it does |
| --- | --- |
| Quick filter fields | Fields at the top of the list, such as **Customer**, **Posting Date** or **Status**. Type or pick a value to filter at once. |
| **Filter** button | Any number of conditions on any field. Shows how many are on. |
| Sort control | Choose the field to sort by (for example **Created On**) and the direction. |
| Status labels | Coloured labels such as **Draft**, **Unpaid**, **Overdue**, **Paid**, **Return**. |
| Check boxes and **Actions** | Act on several records at once. |
| Row counter | For example "13 of 13". Use **20**, **100**, **500** or **2500** at the bottom to show more rows. |
| Comment count and heart | How many comments a record has; click the heart to like it. |

## Find records with filters

1. Open a list, for example **Sales Invoice**.
2. Type in the quick filter fields at the top of the list (for example **Customer** or **Status**).
3. For other filters, click **Filter**, then **+ Add a Filter**. Choose a field, a condition and a value. Conditions include equals, not equals, like, in, not in, between, is set, is not set, greater than, less than and timespan (for example this month or last quarter).
4. Click **Apply Filters**. The filter button shows how many of these filters are on, for example "Filters 2" (the tooltip says "2 Filters Applied"). Quick filter fields are not counted.
5. To remove all filters, click **Clear Filters** (or the **×** next to **Filter**).

!fig The Sales Invoice list filtered with Customer "Gulf Horizon Hospitality LLC" and Status "Paid", showing one record, 1 of 1 @shot 01-getting-started/10-list-filters.png

| Example | Filters |
| --- | --- |
| Overdue invoices over AED 10,000 | Status = Overdue, Grand Total > 10000 |
| This quarter's purchase orders | Transaction Date timespan = this quarter |

## Save a filter

1. Set the filters you want.
2. Open **Saved Filters** and click **Save Current Filter**. Give it a name, for example "Overdue – Hotels".
3. Next time, choose the name under **Saved Filters** to apply the same filters.

## Act on many records at once

1. Tick the check boxes of the records. Tick the box in the header to select all on the page. The head shows how many are selected, for example "3 items selected", and the main button becomes **Actions**.
2. Open the **Actions** menu and choose one:
   - **Edit**: set one field on all selected records.
   - **Export**: download the selected records.
   - **Assign To** / **Clear Assignment** / **Apply Assignment Rule**: give the records to a user.
   - **Add Tags**.
   - **Print**: print all selected records in one file.
   - **Submit**, **Cancel**, **Delete**.
   - **Copy to Clipboard**.

Some lists add their own actions; for example the Sales Invoice list has **Payment**.

!fig The Sales Invoice list with three rows ticked, "3 items selected", and the Actions menu open with Payment, Copy to Clipboard, Edit, Export, Assign To, Clear Assignment, Apply Assignment Rule, Add Tags, Print, Submit, Cancel and Delete @shot 01-getting-started/10-list-actions.png

## Export a list

1. Set filters so the list shows the records you want.
2. Select the records and choose **Actions** > **Export**, or open the **Report View** and use **Export** in its menu (see [Other views](/getting-started/other-views)).
3. Choose the file type and the fields, then download.

## Other list tools

- The list menu (the three dots) has **Import**, **User Permissions**, **Role Permissions Manager**, **Customize**, **Customize Quick Filters** and **List Settings**. Most need a manager role.
- Use the view switcher (**List View**) to show the same records as a report, a kanban board, a dashboard and more. See [Other views](/getting-started/other-views).
- Use the refresh button next to **Saved Filters** to reload the list.

## What happens next

- Click a row to open the record. See [Working with forms](/getting-started/forms).
- Click the main button (for example **+ Add Sales Invoice**) or press **Ctrl+B** to create a new record.

## Common problems

| Problem | What to do |
| --- | --- |
| The list is empty but you expect records | Check the filters and click **Clear Filters**. Check the [entity](/getting-started/entity). |
| **Submit** or **Delete** is greyed out or fails for some rows | Those records are in a state that does not allow it, or your role cannot do it. |
| Returns are not in the Sales Invoice list | DocFlow shows returns separately as **Sales Return** (and **Purchase Return**). See [Sales returns](/selling/sales-returns). |
| You see fewer records than a colleague | Your user permissions limit which records you see, for example one branch. See [Users and roles](/administration/users-roles). |

## Related pages

- [Working with forms](/getting-started/forms)
- [Other views](/getting-started/other-views)
- [Bulk tools](/administration/bulk-tools)

@@ forms | Working with forms
@summary Fill in and save a record, submit, cancel and amend documents, and use the form sidebar, Connections tab, comments, @mentions, the activity timeline and the form menu.

A form shows one record. You fill it in, save it, and for documents such as invoices you submit it to make it final. The form also keeps the record's history, comments, emails, attachments and links to other records.

Open a form by clicking a row in a list, or press **Ctrl+B** in a list to open a new one.

## Before you start

- Fields marked with a red star are mandatory.
- A new or changed record shows **Not Saved** next to its title until you save it.

## Save a record

1. Fill in the fields. Long forms are split into tabs at the top, for example **Details**, **Payments**, **Address & Contact**, **Terms** and **More Info**.
2. Click **Save**, or press **Ctrl+S**.

!fig A new Sales Invoice form marked Not Saved, with the Details, Payments, Address & Contact, Terms and More Info tabs, mandatory fields marked with a red star and the Save button @shot 01-getting-started/11-form-save.png

## Submit, cancel and amend a document

Documents that post to the accounts or stock (invoices, payments, stock entries and others) have more steps. A saved document is a **Draft** and can still be changed.

1. Save the document. DocFlow shows "Submit this document to confirm".
2. Click **Submit**, then confirm "Permanently Submit …?". The document is final and cannot be edited. Its status changes, for example to **Unpaid**.
3. To undo a submitted document, click **Cancel** and confirm "Permanently Cancel …?". DocFlow reverses its entries.
4. To correct a cancelled document, click **Amend**. DocFlow makes a new draft copy (for example ACC-SINV-2026-00001-1) that you can change and submit.

Some fields stay editable after submit. If you change one, the main button reads **Update**. Some documents, such as quotations and sales orders, offer **Update Items** instead of cancel and amend.

!fig A submitted Sales Invoice with the status Unpaid, the View, Create and E-invoice buttons, the Cancel button, the Connections tab and the form sidebar with Assign, Attachments, Tags and Share @shot 01-getting-started/11-form-submitted.png

The full rules are in [How documents move through DocFlow](/getting-started/document-lifecycle).

## Use the form sidebar

On the right of a saved record:

- **Assign**: give the record to a user as a to-do. They get a [notification](/getting-started/notifications).
- **Attachments**: attach files.
- **Tags**: add tags you can search for (`#tag`).
- **Share**: give one user access to this record.
- The print button and the heart (like) next to the record name.
- **Last Edited By** and **Created By**, with the time.

More about these in [Working together](/getting-started/collaboration).

## Comments, @mentions and the timeline

At the bottom of the form:

1. **Comments** shows the comments on the record. Click in "Type a reply / comment", write your comment and click **Comment**.
2. To call a colleague in, type `@` and choose their name, for example `@Hessa Al Falasi please check the PO number`. They get a notification with a link to the record.
3. **Activity** lists every change: who created the record, who changed which field from what to what, assignments, emails and comments. Switch **Show all activity** on to see every entry.
4. Click **New Email** to send an email from the record. Replies are kept on the record.

Comments are internal. They are not printed and not sent to customers.

!fig The bottom of a Sales Invoice with the Comments box, a comment that mentions @Hessa Al Falasi, the Activity list with field changes, the Show all activity switch and New Email @shot 01-getting-started/11-form-timeline.png

## Use the Connections tab

The **Connections** tab lists linked records with counts, for example the payments and deliveries of an invoice. Click a type to see them, or **+** to create a new linked record.

## Use the form menu

The menu (the three dots) has **Print** (**Ctrl+P**), **Email** (**Ctrl+E**), **Reload**, **Show Links**, **Copy to Clipboard**, **Remind Me**, **Jump to field** (**Ctrl+J**), **Undo** / **Redo**, **Duplicate**, **Delete** (**Ctrl+Shift+D**) and **New …**. The menu also shows **Shift+R**, **Shift+D** and **Ctrl+B** next to some items, but those keys do nothing in a form.

If the document follows an approval workflow, an **Actions** menu shows the next steps (for example **Approve** or **Reject**). See [Approval workflows](/administration/workflows).

## What happens next

- To print or make a PDF, see [Printing and PDF](/getting-started/printing).

## Common problems

| Message | What to do |
| --- | --- |
| Missing Fields: "Please fill the following mandatory fields before saving:" | Fill the fields listed and save again. |
| "… has been modified after you have opened it … Please refresh to get the latest document." | Someone else saved the record after you opened it. Choose **Reload** in the menu, then make your change again. |
| "… belongs to entity … The selected entity is …" | Switch the [Entity picker](/getting-started/entity) to the record's entity. |
| You cannot edit a submitted document | That is by design. Cancel and amend it. |
| **Cancel** fails because of linked documents | Cancel the linked documents first (for example the payment against an invoice). The message names them. |
| My changes were lost | DocFlow shows **Not Saved** until you save. Press **Ctrl+S** before you leave the form. |

## Related pages

- [Working with lists](/getting-started/list-views)
- [How documents move through DocFlow](/getting-started/document-lifecycle)
- [Printing and PDF](/getting-started/printing)
- [Keyboard shortcuts](/getting-started/keyboard-shortcuts)

@@ collaboration | Working together: assignments and sharing
@summary Use assignments, to-dos, sharing, tags, attachments and email on a record so the conversation about it stays with the record.

Every saved record has a sidebar and a timeline that your team can use together. Comments and @mentions are explained in [Working with forms](/getting-started/forms); this page covers the other tools.

## Assignments and to-dos

| Feature | How |
| --- | --- |
| Assign | In the form sidebar click **+** next to **Assign**, choose users, a date and a priority, and add a comment |
| Assign many at once | In a list, tick records and choose **Actions** > **Assign To** |
| My to-dos | Every assignment appears in the user's ToDo list and in their [notifications](/getting-started/notifications) |
| Close | When the assignee finishes, they remove themselves or close the to-do |
| Assignment rule | Assign automatically by condition, for example new support issues to the support team. Choose **Actions** > **Apply Assignment Rule** in a list |

## Sharing a record

Click **+** next to **Share** in the sidebar to give one user access to this record only, even when their permissions would normally hide it. Use this for one-off reviews, for example sharing a confidential purchase order with the finance director. The user gets a notification.

## Attachments

Click **+** next to **Attachments**, or drag files onto it. Attachments can be private (only users with access to the record) or public. Typical uses: supplier quotations, signed delivery notes, customs declarations, employee passport copies.

## Tags, likes and following

| Feature | Use |
| --- | --- |
| **Tags** | Free labels, for example "Ramadan promotion". Search them with `#tag` in the [search bar](/getting-started/search) or filter a list by them |
| Like (heart) | Quick acknowledgement |
| Follow | Get an email when the record changes |

## Email from a record

Choose **Email** in the form menu (**Ctrl+E**), or click **New Email** under **Activity**. Choose recipients, a template, and attach the print format as PDF. The email and any reply are stored on the record, so anyone opening it sees the whole conversation.

:::example Example
A Saqr Steel sales coordinator assigns a quotation to the estimation engineer with the comment "Please check mezzanine load for 500 kg/m²". The engineer replies in the comments with `@` and the coordinator's name, updates the rates and removes their assignment. The coordinator emails the revised quotation from the same screen.
:::

## Related pages

- [Working with forms](/getting-started/forms)
- [Notifications](/getting-started/notifications)
- [Version history and audit logs](/administration/audit-logs)

@@ document-lifecycle | How documents move through DocFlow
@summary Draft, submitted, cancelled and amended: the rules that keep records audit-ready, how documents link together, and what you can still change after submitting.

Transactions in DocFlow, such as invoices, payments, orders and stock entries, follow a fixed life cycle. This is what makes the books reliable enough for an FTA audit: once a document affects your accounts or stock, it cannot be quietly edited.

## Two kinds of record

| Kind | Examples | Life cycle |
| --- | --- | --- |
| Masters | Customer, supplier, item, employee, account | Saved and edited freely; disabled rather than deleted once used |
| Transactions | Quotation, order, invoice, payment, stock entry, salary slip | Draft → Submitted → Cancelled → Amended |

## The four states

| State | What you can do | Effect on books and stock |
| --- | --- | --- |
| **Draft** | Edit freely, delete | None |
| **Submitted** | View, print, email, create follow-up documents | Ledger and stock entries are posted |
| **Cancelled** | View only | Every posted entry is reversed |
| **Amended** | A new draft copy of a cancelled document | Posts again once submitted |

A submitted document often shows a more precise status, for example **Unpaid**, **Partly Paid**, **Paid** or **Overdue** for an invoice.

!fig A Sales Invoice form showing the Draft status label next to its title

## Submitting a document

1. Fill in the form and click **Save**. The document is a Draft.
2. Check totals, taxes and accounts. Open the print preview if needed.
3. Click **Submit** and confirm. The status changes and the ledger is updated.

If an approval workflow applies, the Submit button is replaced by actions such as **Approve** and **Reject**. See [Approval workflows](/administration/workflows).

## Correcting a submitted document

You cannot edit a submitted invoice. Instead:

1. Open it and click **Cancel**. DocFlow reverses its accounting and stock effects.
2. Click **Amend**. A new draft opens with a suffix such as `ACC-SINV-2026-00042-1`.
3. Make the correction and submit the amended version.

## What you can change after submitting

Some fields can be edited on a submitted document without cancelling: for example remarks, the customer's PO number or some print settings. When you change one, the main button reads **Update**. Administrators can allow more fields this way with [Customise form](/administration/customize-form), but never fields that change amounts, taxes or accounts.

:::uae Keep the audit trail intact
UAE VAT law requires you to keep tax invoices and records for at least five years (longer for real estate). DocFlow keeps cancelled documents, so the original, the cancellation and the amendment remain visible. For an invoice already issued to a customer, raise a **Sales Return** instead of cancelling, especially once the tax period is closed. See [Sales returns](/selling/sales-returns).
:::

## Linked documents

Documents remember where they came from. A sales invoice made from a delivery note, made from a sales order, made from a quotation, shows the whole chain in its **Connections** tab.

| Rule | Why |
| --- | --- |
| You cannot cancel a document while a submitted follow-up depends on it | Keeps the chain consistent |
| Cancel from the newest document backwards | Invoice, then delivery note, then order |
| Deleting is only possible for drafts and unlinked cancelled documents | Preserves history |

!fig The Connections tab of a sales order showing its linked delivery note and sales invoice with counts

## Back-dated and future-dated documents

Tick **Edit Posting Date and Time** to post with a different date. Back-dating is blocked by frozen dates and accounting periods once a month is closed, and back-dated stock transactions trigger valuation reposting.

## Deleting

| Document | Can be deleted? |
| --- | --- |
| Draft | Yes |
| Submitted | No; cancel it |
| Cancelled, not linked | Yes, by users with delete rights (kept in Deleted Documents for recovery) |
| Master with transactions | No; disable it |

## Common problems

:::details "Cannot cancel because submitted document is linked"
Cancel the later documents first, starting from the newest. The Connections tab shows which ones are linked.
:::

:::details "Cannot edit a submitted document"
Only fields allowed after submit can change. Cancel and amend, or issue a Sales Return.
:::

## Related pages

- [Working with forms](/getting-started/forms)
- [Approval workflows](/administration/workflows)
- [Version history and audit logs](/administration/audit-logs)

@@ other-views | Other views
@summary Show the same records as a Report View with columns, totals and group-by, a Dashboard View, a Kanban board, a calendar, a tree and more.

The same records can be shown in different ways: as a report with totals, as a kanban board, on a calendar, as a tree and more.

Open the view switcher at the top of a list. It shows the current view, for example **List View**.

## Before you start

- Open a list. Not every record type has every view.

## Choose a view

1. Click the view switcher.
2. Choose a view:

| View | When to use it | Shown for |
| --- | --- | --- |
| **List View** | The normal list. | All |
| **Report View** | A table you can shape: pick columns, group, add totals, chart, save and export. | All |
| **Dashboard View** | Charts of the records. | All |
| **Kanban View** | Cards in columns by status or another field; drag cards to change it. | Most |
| **Calendar View** / **Gantt View** | Records on a calendar or timeline (for example events, tasks, leave). | Records with dates set up for it |
| **Tree View** | Records in a hierarchy (for example accounts, cost centres, item groups). | Tree records |
| **Image View** | Cards with pictures. | Records with an image field |
| **Map View** | Records on a map. | Records with a location |
| **Inbox View** | Emails. | Communication, when email accounts are set up |

!fig The view switcher open on the Sales Invoice list with Report View, Dashboard View and Kanban View @shot 01-getting-started/12-view-switcher.png

Your choice of view is remembered for the list.

## Shape a report view

1. Choose **Report View**.
2. Use the menu to **Pick Columns**, **Show Totals**, **Toggle Chart** or **Group By** a field.
3. Choose **Save As** to keep the layout under a name. It then appears under **Select Report** and in the sidebar under the list's reports.
4. Choose **Export** to download it, or **Setup Auto Email** to get it by email on a schedule.

!fig The Sales Invoice Report View grouped by Customer, with a Count column for each customer and a Totals row of 13 @shot 01-getting-started/12-report-view.png

## Use a kanban board

1. Choose **Kanban View**. The first time, choose the field whose values become the columns, for example **Status**.
2. Drag a card to another column to change that field on the record.
3. Click a card to open the record.

## Use the dashboard view

Choose **Dashboard View** to see charts of the records in the list. The charts follow the list's filters.

## Run a report

Reports in a module's sidebar (for example **General Ledger** or **Accounts Receivable**) open with filters at the top. Change a filter and the report reloads. Use the menu to export or print.

## Common problems

| Problem | What to do |
| --- | --- |
| A view is not in the switcher | The record type does not support it (for example no date fields for Calendar View). |
| The report has no data | Check the filters, the date range and the [entity](/getting-started/entity). |

## Related pages

- [Working with lists](/getting-started/list-views)
- [Report builder and custom reports](/administration/report-builder)
- [Dashboards, charts and number cards](/administration/dashboards)

@@ printing | Printing and PDF
@summary Print a document or save it as a PDF: choose the print format, language and letter head, and understand how DocFlow picks the print language.

Any document can be printed or saved as a PDF. You choose the print format (the layout), the letter head and the language. DocFlow picks a sensible language by itself: a document sent to a customer or supplier prints in their language.

## Before you start

- Save the document. Submit it first if you want to print the final copy.

## Print or save a PDF

1. Open the document, for example a sales invoice.
2. Press **Ctrl+P**, choose **Print** in the menu, or click the print button in the form sidebar. The print page shows a preview.
3. On the left, choose:
   - **Print Format**: the layout, for example **UAE Bilingual Tax Invoice**.
   - **Language**: the print language. A chip next to the language at the top shows why it was picked (see below).
   - **Letter Head**: your entity's header and footer, or **No Letterhead**.
4. Click **Print** to send it to a printer, or **PDF** to download a PDF.

!fig The print page of a sales invoice with Print Format "UAE Bilingual Tax Invoice", Language "English" and a letter head on the left, the Default language chip, the Full Page, PDF, Refresh and Print buttons, and a bilingual Tax Invoice preview @shot 01-getting-started/13-print-page.png

Other buttons: **Full Page** opens the print in a new tab, **Refresh** redraws it, and **Form** goes back to the document. The menu has **Print Settings** and **Customize** (to make a new print format; needs a manager role).

## How the print language is chosen

DocFlow picks the first of these that applies, and the chip says which:

1. **Format default**: the print format has a fixed language.
2. **Customer language** / **Supplier language** / **Document language**: the language set on the document's party or on the document.
3. **Default**: English, for a document that goes to a customer, supplier or other party with no language set.
4. **Your language**: for internal documents.

If you change it in **Language**, the chip shows **Chosen for this print**.

:::uae What a UAE tax invoice must show
A full tax invoice needs the words "Tax Invoice"; the supplier's name, address and TRN; the customer's name, address and TRN (if registered); a sequential number; the date of issue and date of supply if different; a description of goods or services; unit price, quantity, taxable amount, discount, VAT rate and VAT amount in AED; and the total payable. The **UAE Bilingual Tax Invoice** format shows these in English and Arabic.
:::

## Print many documents at once

Select them in the list and choose **Actions** > **Print**. DocFlow makes one file. See [Working with lists](/getting-started/list-views).

## Common problems

| Message | What to do |
| --- | --- |
| Please enable pop-ups | Your browser blocked the print window. Allow pop-ups for DocFlow and try again. |
| Footer might not be visible as Repeat Header and Footer option is disabled | The letter head footer may be cut off. Ask an administrator to switch on **Repeat Header and Footer** in **Print Settings**. |
| The print is in the wrong language | Set the language on the customer or supplier, or pick it in **Language**. |

:::details Can I print from my phone?
Yes. Open the print page and use the phone's share or print option, or download the PDF and send it.
:::

## Related pages

- [Working with forms](/getting-started/forms)
- [E-invoicing](/vat-compliance/e-invoicing)
- [Arabic labels and translations](/administration/translations)

@@ keyboard-shortcuts | Keyboard shortcuts
@summary The keyboard shortcuts that work everywhere, in lists, in forms and in tables inside forms.

Shortcuts let you work without the mouse. Press **Shift+/** (the **?** key) anywhere to see the list for the page you are on, or choose **Help** > **Keyboard Shortcuts** in the [user menu](/getting-started/user-menu). On a Mac, use **Cmd** instead of **Ctrl**.

!fig The Keyboard Shortcuts window over a list, with Global Shortcuts (Ctrl+K, Ctrl+G, Ctrl+/, Shift+/, Shift+Ctrl+G) and Page Shortcuts (Down, Up, Shift+Down / Shift+Up, Enter, Space)

## Everywhere

| Keys | What it does |
| --- | --- |
| Ctrl+K | Open the [search bar](/getting-started/search) |
| Ctrl+G | Open Global Search |
| Ctrl+/ | Hide or show the sidebar |
| Shift+/ | Show keyboard shortcuts |
| Shift+Ctrl+G | Open the **Switch Theme** window (Light, Dark or Automatic) |
| Shift+Ctrl+R | The browser's hard reload. To clear DocFlow's cache, choose **Reload** in the [user menu](/getting-started/user-menu) |
| Alt | Show the underlined letters for menu and sidebar shortcuts |

## In a list

| Keys | What it does |
| --- | --- |
| Up / Down | Move through the list |
| Shift+Up / Shift+Down | Select several rows |
| Space | Select the current row |
| Enter | Open the current row |
| Ctrl+B | New record |

## In a form

| Keys | What it does |
| --- | --- |
| Ctrl+S | Main action: save, submit or update |
| Ctrl+P | Print |
| Ctrl+E | Email |
| Ctrl+J | Jump to a field |
| Ctrl+Z / Ctrl+Y | Undo / Redo |
| Ctrl+Shift+D | Delete |

## In a table inside a form

| Keys | What it does |
| --- | --- |
| Up / Down, Tab, Shift+Tab | Move between cells |
| Ctrl+Up / Ctrl+Down | Add a row above / below the current row |
| Ctrl+Shift+Up / Ctrl+Shift+Down | Add a row at the top / bottom |
| Shift+Alt+Down | Duplicate the current row |

:::note Labels that are not shortcuts
The form's menu also shows **Ctrl+B** next to **New**, and **Shift+D** and **Shift+R** next to **Duplicate** and **Remind Me**. These are labels only: the keys do nothing in a form. Use the menu items.
:::

## In the CRM screens

The CRM Dashboard, the Pipeline board, the deal page and the leads split view have their own single-key shortcuts. Press one key, then the next; you do not hold them together. They do nothing while you are typing in a field. Click **Shortcuts** at the foot of a CRM screen to see them.

| Keys | What it does |
| --- | --- |
| g then h | Go to the CRM Dashboard (Home) |
| g then p | Go to the Pipeline |
| g then l | Go to the leads split view |
| n | New lead or new deal, depending on the screen |
| / | Jump to the search box |
| j / k | Next / previous lead |
| r | Refresh |
| ? | Show the CRM shortcuts |

!fig The CRM Keyboard shortcuts window over the Pipeline board, with Go to, On a list or board and Anywhere groups @shot 10-reference/crm-shortcuts.png

## Related pages

- [Searching](/getting-started/search)
- [Working with lists](/getting-started/list-views)
- [Working with forms](/getting-started/forms)

@@ security | Passwords, 2FA and security
@summary Keep your account safe: strong passwords, two-factor sign-in, locked accounts, and good habits for every user.

Your DocFlow account gives access to customers, bank details, salaries and Emirates ID numbers. This page explains what you, as a user, can do to keep it safe. The system-wide settings (password policy, two-factor sign-in, session expiry) are set by your administrator in [System Settings](/administration/system-settings).

## Strong passwords

- Use at least 8 characters with a number or a special character. Longer is better.
- Do not reuse a password from another website.
- Use **Generate Random Password** in the [search bar](/getting-started/search) to make a strong one.
- Change it from your profile (click your name, **Edit Profile**) or with **Forgot password?** on the sign-in page. See [Signing in](/getting-started/sign-in).

If your administrator switched on a password policy, DocFlow rejects weak or common passwords and shows a strength meter. If passwords expire, DocFlow asks you for a new one after you sign in.

## Two-factor sign-in

When two-factor sign-in is on for your role, you type a **Verification Code** after your password. The code comes from an authenticator app (**OTP App**), a text message (**SMS**) or an email (**Email**), depending on what your administrator chose. See [Enter a verification code](/getting-started/sign-in).

:::tip Make 2FA mandatory for finance and HR
These roles can see bank details, salaries and Emirates ID numbers. Two-factor sign-in is the single most effective protection against stolen passwords. Ask your administrator to switch it on for them.
:::

## Locked accounts

After too many failed sign-ins, DocFlow locks the account for a while. Wait and try again, or ask your administrator to unlock it.

## Good habits

- Never share accounts. Each person has a user, so the audit trail stays meaningful.
- Sign out with **Logout** on shared computers.
- Do not email passwords. Administrators use the welcome email or a reset link instead.
- Be suspicious of emails asking you to change bank details for a supplier. Verify by phone before editing the supplier's bank account.
- Tell your administrator at once if you think someone else used your account.

:::uae Data protection
The UAE Personal Data Protection Law (PDPL), and the DIFC and ADGM regimes for companies in those zones, require appropriate security for personal data such as employee records. Role permissions, two-factor sign-in and access logs help you show that controls are in place.
:::

## Related pages

- [Signing in](/getting-started/sign-in)
- [System Settings](/administration/system-settings)
- [Users and roles](/administration/users-roles)
- [Version history and audit logs](/administration/audit-logs)

@@ mobile-access | Using DocFlow on mobile and tablet
@summary Work from a phone or tablet: the responsive screens, adding DocFlow to your home screen, barcode scanning and employee self-service.

DocFlow runs in the browser and adapts to small screens, so no separate installation is required. Sign in the same way as on a computer. See [Signing in](/getting-started/sign-in).

## Adding DocFlow to your home screen

| Device | Steps |
| --- | --- |
| iPhone / iPad (Safari) | Open your site, tap **Share › Add to Home Screen** |
| Android (Chrome) | Open your site, tap **⋮ › Install app** or **Add to Home screen** |

It then opens full-screen like an app.

!fig DocFlow list view on a phone showing sales orders and the search bar

## What works well on mobile

| Task | Who |
| --- | --- |
| Approving purchase orders, leave and expense claims | Managers |
| Checking stock balance and item prices | Sales staff on customer visits |
| Creating quotations and sales orders | Field sales |
| Receiving goods and scanning barcodes | Storekeepers with tablets |
| Pick lists and delivery notes | Warehouse and drivers |
| Recording maintenance visits and timesheets | Technicians |
| Checking in and out, applying for leave, viewing payslips | All employees, through Employee Self Service |
| Viewing dashboards | Management |

## Barcode scanning

On item tables in stock entries, delivery notes, receipts and point of sale, tap the **scan** button to use the phone camera, or connect a Bluetooth scanner to a tablet. Scanned barcodes match item barcodes, batch numbers or serial numbers.

## Employee check-in

Employees can check in from a phone with their location, so site staff at a project in Al Ain record attendance without a biometric device. See [Attendance and leave](/human-resources/attendance-leave).

## Connectivity

DocFlow needs an internet connection. On sites with poor coverage, enter timesheets and check-ins later on the same day.

## Related pages

- [Point of sale](/accounting/pos)
- [Attendance and leave](/human-resources/attendance-leave)

@@ glossary | Glossary
@summary Plain-language meanings of the terms used across DocFlow and this manual, including UAE tax and HR terms.

Short explanations of the terms used in this manual, in alphabetical order.

## DocFlow terms

| Term | Meaning |
| --- | --- |
| **Administration** | The home screen tile with the system tools: users, data, email, printing, automation and so on. See [Administration](/administration/overview). |
| **Amend** | Make a corrected copy of a cancelled document. The copy gets the same number with a suffix, such as -1. |
| **Appointment** | A meeting or call booked with a customer or a possible customer, by your staff or on your website. |
| **Branch** | An office, shop or site of an entity. Used in HR and in reports. |
| **Campaign** | A marketing effort, such as a trade show. You link leads and deals to it to measure what it brings in. See [Campaigns](/crm/campaigns). |
| **Cancel** | Undo a submitted document. Its accounting and stock entries are reversed. The document stays, marked Cancelled. |
| **Chart of accounts** | The list of all ledgers (accounts) an entity posts to, arranged as a tree. |
| **Child table** | A table inside a form, such as the items on an invoice. |
| **Contract** | An agreement with a customer, supplier or employee, with dates, terms, signature and duties. |
| **Cost center** | A part of the business (a branch, a project, a department) that you want to see income and expenses for. |
| **Deal** | The name the CRM Pipeline board uses for an opportunity. |
| **Draft** | A saved document that is not final yet. It has no effect on accounts or stock until you submit it. |
| **Email campaign** | A series of emails sent on a schedule to a lead, a contact or an email group. |
| **Employee Self Service (ESS)** | The screens where employees apply for leave, claim expenses, check in and see their payslips. |
| **Entity** | A company you keep separate books for. A user with two or more entities picks one at the top right. See [Choosing your entity](/getting-started/entity). |
| **Fiscal year** | The 12-month accounting year of an entity. |
| **Fixed Asset Entry** | The document that turns costs into a fixed asset. |
| **Fulfilment** | The duties a contract says must be met, with a deadline. |
| **Global Search** | The search that looks inside the content of your records (**Ctrl+G**). See [Searching](/getting-started/search). |
| **Item** | Any product or service you buy, sell or stock. |
| **Journal entry** | A manual accounting entry with debits and credits. In DocFlow you make them as a Journal Voucher in Finance. |
| **Lead** | A person or organisation that has shown interest in buying from you. |
| **Letter head** | The band with your logo and details printed at the top of documents. |
| **Master** | Reference data used in transactions: customer, supplier, item, account. |
| **Naming series** | The pattern for document numbers, such as ACC-SINV-.YYYY.-. |
| **Opportunity** | A possible sale, with an amount, a probability and a sales stage. Called a deal on the Pipeline board. |
| **Pipeline** | All open deals, by sales stage. The weighted pipeline multiplies each deal's amount by its probability. |
| **Posting date** | The date a transaction affects the books. |
| **Price list** | A list of item rates for buying or selling. |
| **Print format** | The layout of a printed document. |
| **Probability** | Your estimate, in percent, of the chance to win a deal. |
| **Prospect** | An organisation you are trying to win, grouping several leads. |
| **Purchase Return** | A document that reduces or cancels a supplier's invoice, for example for goods you sent back. It has its own list. |
| **Quotation** | An offer of items, prices and terms to a customer. |
| **Role** | A set of permissions given to users, such as Accounts User or Sales Manager. See [Users and roles](/administration/users-roles). |
| **Sales Return** | A document that reduces or cancels an invoice you issued, for example for returned goods. It has its own list. See [Sales returns](/selling/sales-returns). |
| **Sales stage** | A step of your sales process, such as Proposal or Negotiation. Each stage is a column on the Pipeline board. |
| **Session Defaults** | Values, such as the default entity, that fill new records until you change them. See [The user menu](/getting-started/user-menu). |
| **Submit** | Make a document final. Accounting and stock entries are posted. To change it afterwards you cancel and amend it. |
| **UOM** | Unit of measure, such as Nos, Kg or Carton. |
| **User permission** | A rule that limits a user to certain records, for example one entity or one branch. See [Users and roles](/administration/users-roles). |
| **Valuation rate** | The cost of one unit of stock. |
| **Warehouse** | A location where stock is kept. |
| **Workflow** | Approval steps a document must pass, such as Pending Approval and Approved. See [Approval workflows](/administration/workflows). |
| **Workspace** | The home page of a module, with charts, number cards and links. |

## UAE terms

| Term | Meaning |
| --- | --- |
| **Accredited service provider (ASP)** | A company approved by the UAE to carry e-invoices between businesses and the Federal Tax Authority. DocFlow sends e-invoices through one. See [E-invoicing](/vat-compliance/e-invoicing). |
| **Advance Tax Invoice** | A tax invoice for money received before the goods or services are supplied. VAT is due on the date of the payment, which is the tax point. |
| **Corporate Tax** | The UAE federal tax on business profits: 9% above AED 375,000. DocFlow helps you work out and book a monthly provision for it. |
| **Designated Zone** | A free zone treated as outside the UAE for certain VAT purposes. See [Designated Zones](/vat-compliance/designated-zones). |
| **E-invoice** | A structured electronic invoice in the UAE format (PINT AE), sent through an accredited service provider to the buyer and the FTA. |
| **EmaraTax** | The FTA's online portal for registration and returns. |
| **Emiratisation** | The UAE rule that private companies employ a share of UAE nationals. The Emiratisation Summary report shows your figures. |
| **FAF** | FTA Audit File. |
| **Federal Tax Authority (FTA)** | The UAE authority for VAT, excise tax and Corporate Tax. |
| **Filing period** | The month or quarter a VAT return covers. |
| **Gratuity** | The end of service benefit a UAE employer pays an employee when they leave. DocFlow books a provision for it every month. UAE and GCC nationals on a pension get no gratuity. |
| **HS code** | Harmonised System code: the customs number that classifies goods. Needed on e-invoices for goods. |
| **ILOE** | Involuntary Loss of Employment insurance, a UAE scheme employees subscribe to. DocFlow can keep it as an employee document. |
| **Input VAT** | The VAT you pay on purchases. You can usually recover it from the FTA. |
| **Leave salary** | Pay for an employee's annual leave. DocFlow can pay it in advance and books a provision for it. |
| **MOHRE** | The UAE Ministry of Human Resources and Emiratisation. Your MOHRE Establishment ID is needed for the WPS salary file. |
| **Output VAT** | The VAT you charge on sales and pay to the FTA. |
| **Payment means code** | The code on an e-invoice for how it is paid, for example 30 (credit transfer) or 10 (in cash). |
| **Pension** | Contributions for UAE and GCC nationals to their pension fund (for example GPSSA). The employee share is deducted from salary; the employer share is booked at month end. |
| **PINT AE** | The UAE format for e-invoices, based on the international Peppol format. |
| **Post-dated cheque (PDC)** | A cheque dated in the future. Managed under **Post-Dated Cheques** in Finance. |
| **PRO** | Public relations officer: the person who handles visas, Emirates IDs and work permits with the authorities. DocFlow can create PRO tasks for renewals. |
| **QFZP** | Qualifying Free Zone Person, eligible for 0% Corporate Tax on qualifying income. |
| **Reverse charge** | A VAT rule where the buyer, not the seller, accounts for the VAT, for example on imported services. |
| **SIF** | Salary Information File for WPS, with its EDR (employee) and SCR (employer) lines. |
| **Tax point** | The date on which VAT becomes due on a supply. |
| **Tax Refund for Tourists Scheme** | The UAE scheme that refunds VAT to tourists on goods they take out of the country. |
| **TRN** | Tax Registration Number: the 15-digit VAT number the FTA gives a registered business. |
| **UN/ECE unit code** | The code for a unit of measure on an e-invoice, such as H87 for a piece. |
| **VAT** | Value added tax. In the UAE the standard rate is 5%. See the [UAE compliance overview](/vat-compliance/overview). |
| **VAT 201** | The UAE VAT return form you file with the FTA for each filing period. |
| **Voluntary disclosure** | A form you file with the FTA to correct an error in a VAT return already filed. |
| **WPS** | Wages Protection System: the UAE system through which salaries are paid via approved banks. |

## Related pages

- [Welcome](/getting-started/welcome)
- [UAE compliance overview](/vat-compliance/overview)
