@@ overview | Website and portal at a glance
@summary Publish a company website, collect enquiries with web forms, give customers, suppliers and employees a self-service portal, run a blog and careers page, and sell online.

DocFlow includes a website builder connected to your data. A product added in Stock can appear on the website; a web form creates a lead in CRM; a customer signs in to see their orders and invoices.

!fig Website workspace with web pages, web forms, portal settings and website settings

## What you can build

| Feature | Use |
| --- | --- |
| [Web pages](/website/web-pages) | Home, about, services, contact |
| [Web forms](/website/web-forms) | Enquiry, quote request, feedback, applications |
| [Portal](/website/portal) | Customers see orders, invoices and issues; suppliers see RFQs and POs |
| [Blog](/website/blog) | News and articles |
| [Careers](/website/careers-page) | Job openings and online applications |
| Online shop | Product catalogue, cart, checkout with payment gateway |
| [Themes](/website/themes-branding) | Your brand colours and fonts |
| [Arabic site](/website/arabic-website) | Right-to-left Arabic pages |

## Website Settings

| Setting | Use |
| --- | --- |
| Home Page | Which page is the home page |
| Top Bar and Footer | Menus, logo, contact links |
| Brand HTML, Favicon | Logo and tab icon |
| Disable Signup | Stop public sign-up if only invited users should log in |
| Google Analytics / tracking | Visitor statistics |
| Hide Footer Signup | Hide newsletter sign-up |

## Domain and SSL

Point your domain (for example www.yourcompany.ae) to DocFlow with a DNS record. An SSL certificate is applied automatically.

## Related pages

- [Web pages](/website/web-pages)
- [Customer portal](/website/portal)

@@ web-pages | Web pages and the page builder
@summary Create website pages with the block builder or rich text, set routes, menus and meta tags, and publish or schedule them.

## Creating a page

1. Go to **Website › Web Page › New**.
2. Enter the **Title** and the **Route**, for example `about-us`.
3. Choose **Content Type**: Page Builder (blocks), Rich Text, Markdown or HTML.
4. With the page builder, add blocks: hero, section with cards, image and text, testimonials, call to action, FAQ, contact.
5. Tick **Published**, or set a start and end date.
6. Save and click **See on Website**.

!fig Page builder editing the About Us page with hero and cards blocks

## Menus

Add the page to the **Top Bar Items** in Website Settings, with sub-menus if needed. Footer links go under **Footer Items**.

## Common pages for a UAE company

| Page | Content |
| --- | --- |
| Home | What you do, key sectors, brands, call to action |
| About | Story, licences, certifications, locations |
| Products / Services | Generated from item groups or written pages |
| Projects | References with photos |
| Contact | Web form, map, phone, WhatsApp link, office hours |
| Legal | Privacy policy, terms, cookie policy |

## Meta tags

Each page has **Meta Title**, **Meta Description** and **Meta Image** for search engines and social sharing. See [SEO and analytics](/website/seo-analytics).

## Related pages

- [Themes and branding](/website/themes-branding)
- [Arabic website](/website/arabic-website)

@@ web-forms | Web forms
@summary Build forms that create records in DocFlow: enquiries, quote requests, feedback, registrations and applications, with validation, login options and success messages.

## Creating a web form

1. Go to **Website › Web Form › New**.
2. Choose the **Document Type** the form creates, for example Lead, Issue or Quality Feedback.
3. Enter the **Title** and **Route** (`request-a-quote`).
4. Add **Fields** from the document type, with labels, mandatory flags and default values.
5. Choose **Login Required** (for portal users) or allow guests.
6. Set the **Success Message** and **Success URL**.
7. Tick **Published** and save.

!fig Web form for quote requests with fields from the Lead document type

## Useful web forms

| Form | Creates |
| --- | --- |
| Contact us | Lead |
| Request a quote | Lead or Opportunity |
| Report a problem | Issue |
| Feedback after a visit | Quality Feedback |
| Supplier registration | Supplier (draft) |
| Event registration | Lead with campaign |

## Options

| Option | Use |
| --- | --- |
| Allow Edit / Allow Multiple | Let logged-in users change or submit several |
| Allow Print / Delete | For portal users |
| Show attachments | Allow file uploads |
| Client script | Validation in the browser |
| Anonymous | No login required |

:::uae Personal data on forms
Collect only what you need, explain how you use it, and link your privacy policy on each form, in line with UAE data protection law.
:::

## Related pages

- [Leads](/crm/leads)
- [Issues](/support/issues)

@@ portal | Customer, supplier and employee portal
@summary Give external users secure self-service: customers see quotations, orders, invoices and issues and can pay online; suppliers answer RFQs and see orders; employees use self-service.

## Who uses the portal

| User | Sees |
| --- | --- |
| Customers | Quotations, sales orders, invoices, delivery notes, projects, issues, addresses |
| Suppliers | Requests for quotation, purchase orders, purchase invoices |
| Applicants | Their job applications |
| Employees | [Self-service](/hr-payroll/self-service) through the desk or portal |

!fig Customer portal showing orders, invoices with pay buttons and issues

## Giving access

1. Open the contact of the customer or supplier.
2. Click **Invite as User**. DocFlow creates a website user linked to that party and emails a sign-in link.
3. The user sees only documents for their own customer or supplier.

## Portal settings

In **Portal Settings** choose which menu items appear (Orders, Invoices, Issues, Projects, Addresses) and for which roles. Hide what you do not want to show.

## Paying online

With a payment gateway, invoices in the portal show **Pay**. Payment creates a payment request and payment entry automatically. See [payment requests](/accounting/payment-request).

## Supplier quotations

Suppliers sign in to answer [RFQs](/buying/rfq-supplier-quotation) with rates and lead times, which creates supplier quotations for comparison.

## Related pages

- [Customer collaboration on projects](/projects/customer-collaboration)
- [Web forms](/website/web-forms)

@@ blog | Blog
@summary Publish news and articles with bloggers, categories, featured images and meta tags, and use them for marketing and SEO.

## Writing a post

1. Set up **Blogger** records for authors (name, bio, avatar).
2. Create **Blog Category** records, for example News, Projects, Guides.
3. Go to **Website › Blog Post › New**: title, blogger, category, **Blog Intro**, content (rich text, markdown or page builder) and **Meta Image**.
4. Tick **Published** and set the **Published On** date.

!fig Blog post editor with title, category, intro and featured image

## Blog settings

In **Blog Settings** set the blog title, introduction, whether comments and likes are allowed, and the number of posts per page. Posts appear at `/blog`, by category and author.

## Ideas for UAE businesses

| Post | Example |
| --- | --- |
| Project showcase | Hotel kitchen completed in Downtown Dubai |
| Regulation explained | What e-invoicing means for your suppliers |
| Seasonal | Ramadan opening hours |
| Event | See us at Gulfood, stand number |

## Related pages

- [SEO and analytics](/website/seo-analytics)
- [Campaigns](/crm/campaigns)

@@ themes-branding | Themes and branding
@summary Apply your brand: logo, colours, fonts, buttons and custom CSS through website themes, and keep the website consistent with printed documents.

## Website themes

1. Go to **Website › Website Theme › New**.
2. Choose **Primary Colour**, **Text Colour**, **Background**, **Font** (Google Fonts) and font size.
3. Set **Button Rounded Corners**, shadows and gradients.
4. Add **Custom SCSS** for finer control.
5. Save and **Set as Default**.

!fig Website theme with brand colour, font and custom styles

## Branding checklist

| Item | Where |
| --- | --- |
| Logo (light and dark versions) | Website Settings › Brand |
| Favicon | Website Settings |
| Colours and fonts | Website Theme |
| Footer address and licence details | Website Settings › Footer |
| Social links | Footer items |
| Matching letterheads | [Printing](/getting-started/printing) |

## Arabic fonts

Choose a font that includes Arabic glyphs, or set a separate font for the Arabic site, so both languages look consistent. See [Arabic website](/website/arabic-website).

## Related pages

- [Web pages](/website/web-pages)
- [Website overview](/website/overview)

@@ seo-analytics | SEO and analytics
@summary Help customers find you: page titles and descriptions, clean routes, sitemaps, redirects, structured content and visitor analytics.

## On-page SEO

| Item | Where | Tip |
| --- | --- | --- |
| Meta title | Each page / post | Under 60 characters, include the main keyword and emirate |
| Meta description | Each page / post | 120–160 characters |
| Meta image | Each page / post | Used when shared on social media |
| Route | Each page | Short and readable: `/kitchen-equipment-dubai` |
| Headings | Page content | One H1, then H2s |
| Image alt text | Images | Describe the image |

!fig Page settings with meta title, description and image for search engines

## Sitemap and robots

DocFlow generates a sitemap at `/sitemap.xml` listing published pages, posts and items. Submit it in Google Search Console. Edit **robots.txt** in Website Settings if needed.

## Redirects

When you rename a route, add a **Website Route Redirect** from the old path to the new one so links and rankings are kept.

## Analytics

Add Google Analytics or another tracker in Website Settings. DocFlow's **Web Page View** records also count page views and sources inside DocFlow.

## Local search

Create a Google Business Profile for each location with the same name, address and phone as on your website, and link to your contact page.

## Related pages

- [Web pages](/website/web-pages)
- [Blog](/website/blog)

@@ careers-page | Careers page
@summary Publish job openings on your website, accept applications with CVs, and move applicants straight into the recruitment process.

## Publishing a job

1. In **HR › Job Opening**, create the opening: designation, department, location, description, salary range (optional).
2. Tick **Publish on Website** and set the route.
3. The job appears at `/jobs` with an **Apply** button.

!fig Careers page listing open positions with apply buttons

## Applications

The apply form creates a **Job Applicant** with name, email, phone, cover letter and CV attachment, linked to the opening. HR continues from there with interviews and offers. See [recruitment](/hr-payroll/recruitment).

## Tips

| Tip | Why |
| --- | --- |
| Say where the job is based (Dubai, Abu Dhabi) | Applicants filter by emirate |
| State visa or Emiratisation information | Sets expectations |
| Close openings when filled | Avoid unwanted applications |

:::uae Fair hiring
UAE Labour Law prohibits discrimination in employment on grounds such as race, colour, sex, religion, national or social origin, or disability. Keep job ads focused on skills and requirements.
:::

## Related pages

- [Recruitment](/hr-payroll/recruitment)
- [Web forms](/website/web-forms)

@@ arabic-website | Arabic website
@summary Offer your website in Arabic with right-to-left layout: translated pages and menus, Arabic product names, language switching and bilingual SEO.

## How languages work

Each visitor sees the site in the language chosen in the language switcher (or their browser). With Arabic, the layout switches to right-to-left automatically.

!fig Website in Arabic with right-to-left menu and language switcher

## Translating content

| Content | How |
| --- | --- |
| Interface text (buttons, labels) | Built-in Arabic translations; adjust with [Translation](/framework/translations) |
| Menus | Translation records for menu labels |
| Web pages | Create Arabic versions of pages or translate text blocks |
| Product names and descriptions | Arabic fields on items |
| Blog posts | Separate Arabic posts in an Arabic category |

## Bilingual SEO

Give Arabic pages their own meta titles and descriptions in Arabic, and use Arabic keywords people actually search for. Link English and Arabic versions to each other.

## Checklist

- Choose an Arabic-capable font.
- Check images with text; provide Arabic versions where needed.
- Test forms in Arabic, including Arabic names and numbers.
- Have a native speaker review key pages.

## Related pages

- [Translations](/framework/translations)
- [Themes and branding](/website/themes-branding)
