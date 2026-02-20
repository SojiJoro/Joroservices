# Website Audit Report: joroservices.org

**Audit Date:** 20 February 2026
**Reviewed by:** Immigration Caseworker (Self-Sponsorship Assessment)
**Company:** JORO SERVICES LTD (Company No. 14079588)
**Website:** https://joroservices.org
**Methodology:** Full source code review, Companies House records, web search intelligence, SEO indexing analysis

---

## Company Background (Companies House)

| Field | Detail |
|---|---|
| Company Name | JORO SERVICES LTD |
| Company Number | 14079588 |
| Status | Active |
| Type | Private Limited Company |
| Incorporated | 30 April 2022 |
| Registered Address | Kemp House, 152-160 City Road, London, EC1V 2NX |
| SIC Codes | 62020 (IT consultancy), 62090 (Other IT services), 87200 (Residential care activities) |
| Last Accounts | Made up to 30 April 2024 |
| Next Accounts Due | 31 January 2026 |

---

## CRITICAL RISKS

These issues would raise immediate red flags in an immigration assessment and could result in refusal.

### CR-1: Privacy Policy page does not exist

The footer contains a "Privacy Policy" link pointing to `/privacy`. No route exists for this path. It falls through to the wildcard catch-all, which displays: "This Page is Under Development". The contact form includes a checkbox requiring agreement to a Privacy Policy, but the link (`href="#"`) goes nowhere. **This is a violation of the UK GDPR and Data Protection Act 2018.** A genuine trading business collecting personal data through contact forms must have a functioning privacy policy.

- Footer link: `src/component/Footer.jsx:41`
- Contact form checkbox: `src/pages/contact.jsx:141`

### CR-2: Terms of Service page does not exist

The footer links to `/terms` for "Terms of Service". This route does not exist and shows the "Under Development" fallback. A genuine commercial business offering professional services should have published terms of engagement.

- Footer link: `src/component/Footer.jsx:42`

### CR-3: No cookie consent mechanism

The website uses no cookie banner, no cookie policy page, and no consent management platform. As a UK business, this is a breach of the Privacy and Electronic Communications Regulations (PECR). The site loads Google Fonts externally and uses third-party image CDNs, both of which may set cookies.

### CR-4: About Us page does not exist

The footer links to `/about` for "About Us". This route does not exist. The site has **no page describing who runs the company, its history, its mission, or its team**. For an immigration self-sponsorship case, the absence of any "About" page is a significant concern — it provides no evidence of the people behind the business.

- Footer link: `src/component/Footer.jsx:39`

### CR-5: Careers page uses placeholder email `careers@yourcompany.com`

All 10 job listings on the Careers page (`/careers`) have "Apply Now" buttons linking to `mailto:careers@yourcompany.com`. This is an unmodified template placeholder. No job applications can actually be submitted. This strongly suggests the careers page was generated from a template and never configured for real use.

- Source: `src/pages/career.jsx:6-15`

### CR-6: Phone number is a fictional Ofcom drama number

The contact page displays the phone number `+44 (0)20 7946 0958`. The 020 7946 0xxx range is reserved by Ofcom exclusively for use in television and film productions. **This is not a real, callable phone number.** This is one of the most damaging findings in the audit — a genuine business would never use a fictional phone number. This alone could be grounds for refusal.

- Source: `src/component/CardGrid.jsx:7`

### CR-7: Testimonials are entirely anonymous with no attribution

Six testimonials appear on the homepage. None include a client name, company name, job title, photo, or any verifiable attribution. They consist solely of anonymous quotes with specific-sounding metrics ("60% boost", "35% drop in costs", "80% decline in phishing"). Without any attribution, these cannot be verified and appear fabricated.

- Source: `src/component/TestimonialGrid.jsx:5-30`

### CR-8: Blog/Insights section uses fake author identities

The "Latest Insights" section displays three articles attributed to "Dr. Jane Doe", "John Smith", and "Emily Carter" — obvious placeholder names. Their profile photos are pulled from `randomuser.me/api/portraits`, a service that generates random placeholder faces. The articles themselves link to external Forbes, Wired, and BBC articles — no original content was written by Joro Services.

- Source: `src/data.js:1-38`

### CR-9: Wildly inflated and contradictory statistics

The homepage claims:
- **1,000+ Brands Onboarded** (`src/component/impressionCard.jsx:7`)
- **500+ Engineers Engaged** (`src/component/impressionCard.jsx:8`)
- **1,000+ Projects Delivered** (`src/component/impressionCard.jsx:9`)

The development page claims:
- **10+ years delivering bespoke digital solutions** (`src/component/development/experienceSection.jsx:6`)
- **75+ successful projects launched** (`src/component/development/experienceSection.jsx:7`)
- **50+ satisfied clients worldwide** (`src/component/development/experienceSection.jsx:8`)
- **20+ expert developers & designers** (`src/component/development/experienceSection.jsx:9`)

The company was incorporated on 30 April 2022 — less than 4 years ago. It uses a virtual office address. Claiming 10+ years of experience and 1,000+ projects is not credible. The statistics also contradict each other: 1,000+ projects on the homepage vs 75+ on the development page.

### CR-10: Registered address is a well-known virtual office

Kemp House, 152-160 City Road, London, EC1V 2NX is operated by "Your Virtual Office London" (Capital Office Ltd). It is one of the most commonly used virtual office addresses in the UK for company formations. Immigration caseworkers are specifically trained to recognise virtual office addresses. This does not prove the business is not genuine, but combined with the other findings, it adds to the pattern of a non-operational business.

---

## SERIOUS WEAKNESSES

These issues individually might be excusable but collectively undermine the website's credibility.

### SW-1: All social media links are dead (`href="#"`)

The footer displays icons for Facebook, Twitter/X, LinkedIn, and Instagram. All four link to `#` (nowhere). No actual social media profiles exist. Web searches found no social media presence for Joro Services.

- Source: `src/component/Footer.jsx:66-69`

### SW-2: No real team profiles anywhere on the site

There are no team member names, photos, bios, roles, or LinkedIn profiles anywhere. A legitimate IT consultancy claiming 20+ developers and designers should be able to show at least some of its team.

### SW-3: Many CTA "Contact" buttons are broken links

Numerous service subpages have "Start Your Project", "Get in Touch", "Let's Talk Design" buttons linking to `/contact`. The actual contact page route is `/getintouch`. All links to `/contact` display the "Under Development" fallback. Affected pages include:

- All Creative Solutions subpages (Website Design, Graphic Design, UI/UX)
- All Development subpages (Web Development, Mobile App, Data Management)
- All Digital Marketing subpages (SEO, Social Media, PPC)
- All Technical Services subpages (IT Support, Cybersecurity, Cloud)
- Creative Solutions main page CTA

This means **the primary conversion path is broken on most service pages**.

### SW-4: 24+ missing images causing broken content

The following images are referenced in the code but do not exist in the `/public/images/` directory:

**Hero images (7 missing):** `cloud-hero.jpg`, `mobile-hero.jpg`, `social-hero.jpg`, `ux-hero.jpg`, `ppc-hero.jpg`, `seo-hero.jpg`, `it-hero.jpg`

**Portfolio/case study images (17+ missing):** `data-pipeline.jpg`, `mobile-support.jpg`, `social-noble.jpg`, `social-pathsync.jpg`, `social-top20.jpg`, `it-healthcare.jpg`, `it-remote.jpg`, `it-uptime.jpg`, `ppc-healthcare.jpg`, `ppc-jobs.jpg`, `ppc-b2b.jpg`, `seo-healthcare.jpg`, `seo-recruitment.jpg`, `seo-local.jpg`, `cloud-ecommerce.jpg`, `cloud-healthcare.jpg`, `cloud-cicd.jpg`

Many service subpages will display broken images for both their hero sections and portfolio sections.

### SW-5: Contact form and newsletter form are non-functional

Neither the main contact form (`src/pages/contact.jsx`) nor the footer newsletter form (`src/component/Footer.jsx`) have any backend integration, API endpoint, or submission handler. Form submissions do nothing. A genuine business expecting enquiries would have functional forms.

### SW-6: SIC code 87200 is unexplained

Companies House shows SIC code 87200 (Residential care activities for learning difficulties, mental health and substance abuse) alongside IT consultancy codes. The website makes no mention of care services. This discrepancy would raise questions about the true nature of the business.

### SW-7: Cybersecurity page is copy-pasted from Cloud Infrastructure

`src/pages/technicalServices/Cybersecurity.jsx` and `src/pages/technicalServices/CloudInfrastructure.jsx` contain identical service descriptions and identical portfolio items. A cybersecurity page describing cloud migration projects with no cybersecurity-specific content is not credible.

### SW-8: No company registration number displayed on the website

Section 82 of the Companies Act 2006 requires every company to display its registered number on its website. The company number (14079588) does not appear anywhere on the site. This is a legal requirement, not optional.

### SW-9: Only 3 verifiable portfolio projects

Despite claiming 1,000+ projects delivered, only 3 external portfolio sites are referenced:
1. **1 Noble Healthcare** (1noblehealthcare.com) — healthcare/supported living
2. **PathSync Recruitment** (pathsyncrecruitment.com) — recruitment agency
3. **Save the Men** (save-the-men.com) — abuse support platform

The remaining "portfolio" items across service pages are generic descriptions with missing images and no links to live work.

### SW-10: No reviews or third-party verification

No presence on Trustpilot, Google Reviews, Glassdoor, Clutch, G2, or any review platform. No industry memberships, certifications, or awards mentioned. The only certification-related file is a CompTIA logo SVG in the public folder, but it is not displayed on any page.

---

## PROFESSIONAL IMPROVEMENTS

These are quality issues that affect perception but are less likely to trigger refusal on their own.

### PI-1: No meta description tag

`index.html` contains only `charset` and `viewport` meta tags. There is no `<meta name="description">` tag. This hurts SEO and means search results show no meaningful description.

### PI-2: No robots.txt or sitemap.xml

Neither file exists. Only 2 pages are currently indexed by Google despite the site having 20+ routes. Basic SEO infrastructure is absent.

### PI-3: Page title is generic across all pages

Every page displays the same title: "Joro Services". Individual pages do not set unique `<title>` tags. This is standard for SPAs but should be addressed with `react-helmet` or similar.

### PI-4: Package.json reveals developer name

The package.json `name` field is `"soji-project"`, exposing what appears to be the developer's personal identifier rather than a professional project name.

### PI-5: External stock images used for office location

The contact page office card uses a stock city image from `tecdn.b-cdn.net` rather than an actual photograph of the registered office or workspace.

### PI-6: "Under Development" fallback page uses emojis

The 404/fallback page displays construction emojis and informal language. Any mistyped URL or broken link shows this page, which undermines professionalism.

### PI-7: Insight articles are not original content

The three "Latest Insights" articles link to Forbes, Wired, and BBC articles. No blog posts, whitepapers, or original content demonstrate the company's expertise.

### PI-8: Mobile navigation dropdown links are incorrect

In `src/component/mobileNav.jsx:66`, mobile dropdown sub-items all link to the parent category path (e.g., `/development`) instead of the specific sub-service path (e.g., `/development/web-development`). Mobile users cannot navigate to sub-service pages.

---

## IMMIGRATION SCRUTINY ASSESSMENT

### Would this website appear created solely to support a visa application?

**Yes.** The cumulative evidence strongly suggests this website was built to present the appearance of a trading business rather than to serve genuine commercial purposes:

1. **Fictional phone number** — The use of an Ofcom drama number (020 7946 0958) is incompatible with a real business intending to receive customer calls.

2. **Non-functional contact mechanisms** — Contact forms don't submit. Newsletter forms don't work. The careers email is a template placeholder. Social media links go nowhere. There is no functioning way for a customer to reach this business through the website.

3. **Fabricated content** — Anonymous testimonials, fake author names with random-face-generator photos, contradictory inflated statistics, and copy-pasted service pages indicate content was generated to fill space, not to represent real work.

4. **Missing essential pages** — No Privacy Policy, no Terms, no About Us, no Cookie Notice. These are basic requirements for a UK business website, and their absence suggests the site was not built with genuine operation in mind.

5. **Virtual office address** — Kemp House is one of the most recognisable virtual office addresses in the UK, commonly flagged in immigration assessments.

6. **Minimal real evidence of work** — Only 3 portfolio items despite claiming 1,000+ projects. 24+ broken portfolio images. No client names on testimonials. No team members identified.

### Does it look commercially viable?

**No.** The website cannot currently:
- Receive contact form submissions
- Process job applications (placeholder email)
- Be called by customers (fictional number)
- Connect to social media (dead links)
- Show legal compliance (no privacy policy, no terms, no cookie consent, no company number)
- Demonstrate a track record (anonymous testimonials, 3 portfolio items, contradictory statistics)

### Red flags that would raise suspicion

| Red Flag | Severity |
|---|---|
| Fictional Ofcom drama phone number | Severe |
| `careers@yourcompany.com` placeholder email | Severe |
| Fake author names + randomuser.me avatar photos | Severe |
| Claims 10+ years experience; company is <4 years old | Severe |
| Claims 1,000+ projects; shows 3 portfolio items | Severe |
| No Privacy Policy, Terms, Cookie Notice, or About page | Severe |
| All social media links are dead `#` links | High |
| No company registration number on website | High |
| Virtual office at Kemp House (well-known formation address) | High |
| Cybersecurity page copy-pasted from Cloud Infrastructure page | High |
| Non-functional contact and newsletter forms | High |
| 24+ broken images across service pages | High |
| Zero presence on any review platform | Moderate |
| No original blog content | Moderate |
| SIC code includes care services not mentioned on website | Moderate |

---

## SUMMARY

This website has **10 critical risks**, **10 serious weaknesses**, and **8 professional improvements** needed. The most damaging findings are the fictional phone number, placeholder career email, fabricated author identities, and completely missing legal/compliance pages.

From an immigration caseworker's perspective, this website presents a pattern consistent with a non-trading business created to support a visa application rather than to serve genuine customers. The cumulative weight of the issues — particularly the fictional contact details, fabricated content, and non-functional business processes — would very likely result in the self-sponsorship application being questioned or refused on genuineness grounds.

**Recommendation:** Before submitting any visa application relying on this website as evidence of a genuine business, all critical risks must be resolved and the serious weaknesses substantially addressed. The website must demonstrate real trading activity, verifiable client relationships, and functional business operations.
