@@ overview | Website and portal at a glance
@summary Publish web pages, collect enquiries and give customers and suppliers self-service access.

DocFlow includes a simple website builder and a secure portal. You can publish a few pages, capture enquiries straight into the CRM and let customers see their orders, invoices and issues without calling your office.

!fig Website workspace with pages, web forms and portal settings

## What is included

| Feature | Use |
| --- | --- |
| Web Page | Publish content pages |
| Web Form | Collect enquiries, applications and feedback |
| Website Settings | Logo, navigation bar, footer, home page |
| Portal | Customer and supplier self-service |
| Blog | News and updates |

@@ web-pages | Web pages and website settings
@summary Build pages, set your navigation and brand the website.

## Creating a page

1. Go to **Website › Web Page › New**.
2. Enter the title and the **Route** (the address), for example `about-us`.
3. Add content using blocks: hero, text, image, cards or call-to-action.
4. Tick **Published** and save.

!fig Web page builder with hero and content blocks

## Website settings

Under **Website Settings** set your logo, favicon, top navigation links, footer columns and home page. Add both English and Arabic versions of key pages for UAE visitors.

:::tip Your own domain
Ask your administrator to point a domain such as `portal.yourcompany.ae` to DocFlow and enable SSL. Customers then see your brand, not a generic address.
:::

@@ web-forms | Web forms
@summary Collect enquiries and data from the public into DocFlow records.

A **Web Form** is a public form that creates a DocFlow record when submitted.

## Example: a quotation request form

1. Go to **Website › Web Form › New**.
2. Choose **Document Type** = Lead.
3. Add fields: name, company, mobile, email, emirate and message.
4. Set the **Route**, for example `request-a-quote`.
5. Tick **Published**, and choose whether login is required.
6. Save, and link to it from your website.

!fig Web form for quotation requests creating leads

Each submission creates a lead with source Website, ready to be assigned.

:::uae Privacy notice
Collecting personal data online is covered by the UAE Personal Data Protection Law. Add a short privacy notice and a consent checkbox to public forms.
:::

@@ portal | Customer and supplier portal
@summary Give customers and suppliers secure access to their own documents.

## What customers can do

- View quotations, sales orders, delivery notes and invoices
- Download invoices as PDF and see outstanding balances
- Raise and follow support issues
- Accept quotations online

## What suppliers can do

- Respond to requests for quotation
- View purchase orders and their status
- See their invoices and payments

## Giving access

1. Open the customer's or supplier's **Contact** and click **Invite as User**.
2. The contact receives an email to set a password.
3. They sign in and see only their own documents.

!fig Customer portal showing invoices and their payment status

:::details Can I control which menu items portal users see?
Yes. Use **Portal Settings** to switch menu items on or off and to set the default role for new portal users.
:::

@@ blog | Blog and news
@summary Publish company news, product updates and guides.

1. Create **Blog Categories**, such as News, Product Updates, Guides.
2. Add **Bloggers**: the staff who write posts, with a short bio and photo.
3. Go to **Website › Blog Post › New**. Write the title, the content and a short intro, and add a cover image.
4. Tick **Published** and set the publish date.

!fig Blog post editor with category, cover image and published flag

:::tip Useful topics
Short guides perform well, such as "How to prepare for UAE e-invoicing" or "Choosing a combi oven for a hotel kitchen". They bring in leads through search.
:::

@@ themes-branding | Website themes and branding
@summary Match your website to the DocFlow look or to your own brand.

1. Go to **Website › Website Theme › New**.
2. Set the primary colour, fonts, button style and background.
3. Add custom CSS for anything else.
4. Set it as the active theme in **Website Settings**.

!fig Website theme with primary colour and font settings

:::tip Consistent colours
Use the same purple (#8765D7) and lavender background (#F8F4FF) as DocFlow if your website should feel like part of the platform, or your own brand colours if it represents your company.
:::

@@ seo-analytics | Search engine optimisation and analytics
@summary Help customers find your pages and measure how visitors use them.

## Page metadata

On each web page or blog post, fill in the **Meta Title**, **Meta Description** and **Meta Image**. These appear in search results and when links are shared on social media and WhatsApp.

!fig Web page SEO section with meta title, description and image

## Sitemaps and redirects

DocFlow generates a sitemap automatically. Use **Website Route Redirects** when you rename a page, so old links keep working.

## Analytics

Add your analytics tracking code in **Website Settings**, or use the built-in **Web Page View** report for simple visit counts.

:::uae Cookie consent
If you use tracking cookies, show a consent banner and explain how data is used, in line with the UAE Personal Data Protection Law.
:::

@@ careers-page | Careers page and online applications
@summary Publish job openings and receive applications straight into HR.

1. Create a **Job Opening** in HR and tick **Publish on Website**.
2. The opening appears on your `/jobs` page with the description, location and salary range if you choose to show it.
3. Candidates apply online with their CV. Each application becomes a **Job Applicant** linked to the opening.

!fig Careers page listing open jobs with apply buttons

See [Recruitment and onboarding](/hr-payroll/recruitment) for the rest of the hiring process.

@@ arabic-website | Arabic and bilingual websites
@summary Serve visitors in Arabic with right-to-left layout.

DocFlow websites support Arabic with full right-to-left layout.

1. Create the Arabic version of each page with its own route, for example `/ar/about-us`.
2. Add a language switcher link in the navigation bar.
3. Translate menu labels and footer text using [Translations](/framework/translations).

!fig Arabic version of the home page with right-to-left layout

:::tip Write, don't just translate
Arabic marketing copy reads better when it is written for Arabic readers, not translated word for word. Use a native writer for key pages.
:::
