# Joro Services — SEO & GEO Implementation Plan (Phase 2)

**Site:** joroservices.org
**Branch:** `claude/seo-geo-audit-P6iVH`
**Input:** `docs/seo-audit-and-research.md` (Phase 1)
**Status:** Plan only. No code changes. Awaits approval before Phase 3.

---

## 0. Purpose

This document turns the Phase 1 audit into a file-by-file plan. For every priority it names:

- which files to create, edit or delete
- the order to do them in
- the decisions Adesoji has to make before code changes can start
- the risks that could bite

It does not contain code. The next document (`docs/seo-implementation.md` written during Phase 3) will track the actual changes as they land.

---

## 1. Root-cause summary (after reading source)

Four structural problems are behind the ~10% indexation rate. Fix these and most of Phase 1's priorities follow naturally.

### 1.1 Canonical host mismatch

`public/sitemap.xml` lists every URL as `https://www.joroservices.org/...` (with `www`), while `scripts/generate-static-pages.js` writes canonicals as `https://joroservices.org/...` (without `www`). Google sees conflicting signals and defers indexation. Pick one host, redirect the other, use it everywhere.

Recommended: **apex domain without `www`** (`https://joroservices.org`). It matches the `BASE_URL` in the static generator and most of the schema.js references. Add a 301 from `www` to apex in `vercel.json`.

Decision needed (Adesoji): confirm apex-without-www is the canonical. If any backlinks or tools already prefer `www`, say so now.

### 1.2 Drift between `pagesSEO.js` and `scripts/generate-static-pages.js`

`src/seo/pagesSEO.js` is the runtime (SPA-injected) source of truth. `scripts/generate-static-pages.js` duplicates a subset of the same data inline at build time (lines 20–169). The two disagree on titles and descriptions for several routes, for example:

- `/` — SEO file: "Joro Services — Web Development, IT Support & DevOps for UK Businesses". Static script: "Web Design, IT Support & Cloud Services in Aldershot | Joro Services".
- `/about` — SEO file: "About Joro Services — UK IT Services Company". Static script: "About Joro Services | IT & Digital Agency in Aldershot, Hampshire".
- `/services` — different descriptions.

Google sees the static copy first (crawl-time HTML) and then the SPA overwrites on hydration. Search Console will flag this as "duplicate/conflicting meta" at best, or treat the SPA-injected version as the truth and fail to show the static copy at all.

Fix: make `pagesSEO.js` the single source of truth. Import it (or a JSON/JS mirror in the same folder) inside `scripts/generate-static-pages.js`. Remove the duplicated object.

### 1.3 Dynamic routes not covered by the static generator

The React Router tree in `src/App.jsx` has two dynamic routes:

- `/services/:id` — handled by `ServiceDetail` (uses `src/pages/serviceData.js`).
- `/insights/:slug` — handled by `InsightPost` (uses `src/pages/insights/blogData.js`).

Neither gets static HTML. This means every insights post Joro has written (10 posts including the well-researched Platform Engineering vs DevOps vs SRE piece) is crawled as a thin SPA shell with the homepage's meta. That is almost certainly the single biggest reason the site looks empty to Google — the blog is invisible.

Fix: extend the static generator to enumerate `blogData.blogPosts` and `serviceData`, generate per-slug static HTML with post-specific title, description, OG tags, and JSON-LD.

### 1.4 Hand-maintained sitemap

`public/sitemap.xml` is hand-maintained and covers only the "Main Pages" plus a subset of location pages. New pages (the insights posts, all the service+location pages) never got added. It also uses `www.` everywhere (the host mismatch above).

Fix: generate the sitemap at build time from the same route list the static generator walks. Enumerate `pagesSEO.js`, `serviceData`, `blogData.blogPosts`, and any future registries.

### 1.5 Homepage aggregateRating schema

`src/pages/Homepage.jsx` lines 55–120 (approx) contain a `reviewSchema` with six reviews, all typed `Organization` with generic authors like "Healthcare Provider", "Recruitment Platform", "Non-profit Organisation". Google's structured data policy requires reviews to name the reviewer. Aggregate ratings built from unverifiable self-reported reviews invite a manual action.

Fix: remove the `reviewSchema` entirely, or replace with three real attributable reviews (first name + last initial + company, with consent). Do not leave the current block live past Phase 3.

### 1.6 robots.txt gaps

`public/robots.txt` is forward-looking but missing a few entries: `Anthropic-AI`, `Applebot-Extended`, `CCBot`. Explicit stance on `Bytespider`, `FacebookBot`, `Meta-ExternalAgent` is worth setting.

---

## 2. Implementation sequence

Work is grouped into four waves. Waves 1 and 2 are urgent and together form the two-week plan from Phase 1 section 10.3. Waves 3 and 4 are content expansion and depend on indexation being fixed first.

### Wave 1 — Indexation and policy fixes (Days 1–5)

Goal: every existing route is indexable with consistent, unique meta, no schema policy risk, and the sitemap is true.

Nothing else matters until this wave lands. Content additions in later waves are wasted effort if crawlers can't see them.

### Wave 2 — Discovery and directory (Days 6–10)

Goal: Google Search Console, Bing Webmaster Tools, CloudTango, Clutch, GoodFirms, Google Business Profile. No code — but listed here because it blocks measurable impact.

### Wave 3 — Niche service pages + flagship content (Days 10–21)

Goal: launch the pages that own the niches competitors can't touch.

### Wave 4 — Location expansion + content amplification (Days 21–42)

Goal: fill the service+location gaps, rewrite existing location pages, publish the second wave of blog posts.

---

## 3. Wave 1 — file-by-file plan

### 3.1 Fix canonical host

**`vercel.json`** — add a host-level 301. Inside the `redirects` array, add an entry that sends any request on `www.joroservices.org` to `https://joroservices.org` preserving path.

Vercel supports this via a domain-level rule in the dashboard (primary domain: `joroservices.org`, alias `www.joroservices.org` redirects to primary). This should be done in the Vercel dashboard, not in `vercel.json`, because `vercel.json` redirects don't match cross-host. Confirm this is set to 308 or 301 permanent redirect with `path preserved`.

**`public/sitemap.xml`** — rewrite all `<loc>` entries from `https://www.joroservices.org/...` to `https://joroservices.org/...`. Better: delete and regenerate at build time (see 3.4).

**`src/seo/schemas.js`** — grep for `www.joroservices.org` and replace with `joroservices.org`. Verify the `url` property in Organization and LocalBusiness schemas.

**`public/llms.txt`** and **`public/llms-full.txt`** — grep for `www.`, same fix.

**`scripts/generate-static-pages.js`** — `BASE_URL` at line 171 is already `https://joroservices.org`. Leave it.

**`public/robots.txt`** — the Sitemap line is `https://www.joroservices.org/sitemap.xml`. Change to apex.

Risk: if any backlinks in the wild use `www` and aren't caught by the redirect, they leak to a 404. The host-level redirect on Vercel handles this cleanly — risk is negligible if the dashboard rule is set correctly.

### 3.2 Merge pagesSEO.js into the static generator

**`scripts/generate-static-pages.js`** lines 19–169 — delete the inline `pagesSEO` object. Import the real one:

```
import pagesSEO from '../src/seo/pagesSEO.js';
```

Vite supports ESM imports in scripts as long as the script itself is ESM (it is — note the `import` statements at the top). Verify no ESM/CJS interop issue by running `node scripts/generate-static-pages.js` after `npm run build`.

Side-effect: the `PAGE_CONTENT` object (lines 203–550 approx) is still inline and provides the per-page noscript body content. Leave that in place for now. In Phase 3 consider moving it alongside each page component, but that's optional and out of scope for Wave 1.

**`src/seo/pagesSEO.js`** — add entries for every route currently in `src/App.jsx` but missing from `pagesSEO.js`. From a comparison:

- `/insights` — missing
- `/insights/:slug` — each of the 10 posts (dynamic, generated from `blogData`)
- `/services/:id` — each service ID (dynamic, generated from `serviceData`)
- `/creative-solutions`, `/development`, `/digital-marketing`, `/technical-services` — exist as children but the parents (`creative-solutions` root etc.) are there. Cross-check.

Decision needed (Adesoji): confirm the `/services/:id` route actually serves real service pages, or kill it. If it's a legacy route, add a 301 from any enumerable IDs to the new service URLs and drop `:id` from the router.

### 3.3 Generate per-slug HTML for blog posts and services

**`scripts/generate-static-pages.js`** — after the `for (const [route, seo] of Object.entries(pagesSEO))` loop at line 711, add two more loops:

1. Import `blogPosts` from `src/pages/insights/blogData.js`. For each post, compute route `/insights/${post.slug}`, title `${post.title} | Joro Services`, description `post.metaDescription`. Generate the HTML with `generatePage(route, seo, templateHtml)` and write to `dist/insights/${slug}/index.html`.
2. Import service list from `src/pages/serviceData.js` (verify shape first). For each service, compute route `/services/${service.slug || service.id}` and generate HTML the same way.

Each generated blog post HTML should also carry `Article` JSON-LD with `author`, `datePublished`, `dateModified`, `mainEntityOfPage`. Add this to `src/seo/schemas.js` as a new `blogPostSchema(post)` function, called from `InsightPost.jsx` at runtime and mirrored in the static generator at build time.

Decision needed (Adesoji): author attribution. Current `blogData.js` has `author: 'Joro Services'`. For E-E-A-T and GEO, real human attribution is better. Recommendation: change author to `Adesoji Adejoro` on the technical posts (AWS cost cutting, Platform Engineering vs DevOps vs SRE, Terraform, observability). Keep the company byline only on sales/marketing posts.

### 3.4 Build-time sitemap generation

**`scripts/generate-sitemap.js`** (new) — walks `pagesSEO.js`, `blogPosts`, and `serviceData`, writes `dist/sitemap.xml`. Include `<lastmod>` from `blogPosts[i].date` where available, otherwise the build date. Include `<changefreq>monthly</changefreq>` for content pages and `weekly` for the blog index.

Run this after `generate-static-pages.js` in `package.json`:

```
"postbuild": "node scripts/generate-static-pages.js && node scripts/generate-sitemap.js"
```

**`public/sitemap.xml`** — delete. The build step now writes it into `dist/`. Check that Vercel serves `dist/sitemap.xml` (it will — static output).

Risk: if the build script fails silently, the sitemap disappears. Add a CI check or at least a final `console.log` with the URL count after generation, and fail the build if count < 40.

### 3.5 Remove or replace homepage review schema

**`src/pages/Homepage.jsx`** — either delete lines ~55–120 (the `reviewSchema` const and its injection), or replace with:

- Three real attributable reviews, typed `Person` not `Organization`, with first name + last initial + company, with consent collected in email or signed form. Store the consent evidence in a `docs/reviews/` folder (not committed — local only — Adesoji keeps records).
- `aggregateRating` only if the platform of record (Clutch, Trustpilot, Google) also shows it. Linking `aggregateRating` to a self-maintained list is exactly what Google flags.

Recommendation: remove entirely in Wave 1. Add it back in Wave 4 once three Clutch reviews are live (real names, dated, platform-verified).

Decision needed (Adesoji): choose remove-now or replace-with-real-three. If replace, name the three clients and I'll draft review request emails.

### 3.6 robots.txt updates

**`public/robots.txt`** — add:

```
User-agent: Anthropic-AI
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /
```

And an explicit neutral entry for the Meta / ByteDance bots if you want them excluded from training:

```
User-agent: Bytespider
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /
```

Or `Allow: /` if you want them indexed. Joro's positioning is pro-AI-discovery, so `Allow: /` is the consistent choice. Decision needed — but the default in this plan is allow.

Also fix the final `Sitemap:` line to point to `https://joroservices.org/sitemap.xml` (no `www`).

### 3.7 IndexNow

**`public/<key>.txt`** (new) — a 32-character hex key generated once. Required by IndexNow protocol.

**`api/indexnow.js`** (new) — a Vercel edge function that accepts `POST { url }` and forwards to `https://api.indexnow.org/indexnow` with the key. This gets called from the build step (or manually) when new content goes live so Bing, Yandex and friends are nudged immediately.

Decision needed: defer to Wave 2 or include in Wave 1. Recommendation: Wave 1, since it's a 30-minute job and accelerates every subsequent content launch.

### 3.8 Microsoft Clarity

**`index.html`** — add the Clarity script tag in `<head>` alongside the GA4 snippet.

Decision needed (Adesoji): Clarity project ID. If not already created, create one at clarity.microsoft.com and paste the ID. Free, no rate limits that matter at this scale.

---

## 4. Wave 2 — discovery, verification, directories (no code)

Nothing to change in the repo. This wave runs in parallel with Wave 1.

- Google Search Console: verify `https://joroservices.org` (DNS TXT record or HTML file). Submit the new sitemap URL. Request indexing for the 15 priority URLs from Phase 1.
- Bing Webmaster Tools: verify, submit sitemap, use URL Inspection API.
- Google Business Profile: confirm primary category "Computer Support and Services", add services, post three updates with pricing links, upload ≥10 photos (office, team, whiteboards, real work), request reviews from three named clients.
- Directory profiles: CloudTango (apply for UK MSP listing), Clutch.co (create profile, request verification, send review links to clients), GoodFirms (same).
- AWS IQ: only if Adesoji's AWS certification is current. Decision needed.

Exit criteria for Wave 2: indexation rising from ~5 to ≥25 URLs within 10 days, three directory profiles live, GBP fully fleshed out.

---

## 5. Wave 3 — niche service pages + flagship content

### 5.1 New pages

Each page follows the existing `src/pages/locations/ItSupportAldershot.jsx` template. That file is the known-good pattern: FAQ schema + Service schema + Breadcrumb + LocalBusiness, British English, pricing explicit, internal links to nearby services.

Files to create:

- `src/pages/services/AwsCostOptimisation.jsx`
- `src/pages/services/TerraformConsulting.jsx`
- `src/pages/services/SiteReliabilityEngineering.jsx`
- `src/pages/services/ObservabilityAndMonitoring.jsx`
- `src/pages/services/AwsMigration.jsx`
- `src/pages/Pricing.jsx` (consolidated)

Each needs:

- Route added to `src/App.jsx` (inside the Routes, grouped with the existing high-value service pages).
- Entry in `src/seo/pagesSEO.js` (title, description, keywords).
- Entry in `src/seo/schemas.js` exporting `serviceSchema` and `faqSchema` for the route.
- `PAGE_CONTENT` entry in `scripts/generate-static-pages.js` for noscript body.
- Sitemap entry — automatic once section 3.4 lands.

### 5.2 Flagship blog post

**`src/pages/insights/blogData.js`** — add new post:

- slug: `how-to-reduce-aws-costs-uk-small-business`
- title: "How to Reduce Your AWS Bill: 15 Proven Strategies for UK Small Businesses"
- 3,000+ words, numbered listicle, opens with the verified 26.6% case study
- FAQ block with FAQPage schema
- author: `Adesoji Adejoro`

Internal links: every strategy section links to `/services/aws-cost-optimisation` once, plus one internal link to `/fractional-cto` and one to `/devops-small-business`.

### 5.3 Amplify existing DevOps vs SRE vs Platform Engineering post

**`src/pages/insights/blogData.js`** — the post at slug `platform-engineering-vs-devops-vs-sre-2026` already exists and is well-written. Additions:

- Comparison table (DevOps / SRE / Platform Engineering / IT Managed Services — four columns on who, when, cost, example deliverables).
- Internal links to `/services/site-reliability-engineering` (new), `/devops-small-business`, `/services/terraform-consulting` (new).
- Change author from `Joro Services` to `Adesoji Adejoro`.
- Add `Article` schema with `author.sameAs` pointing to LinkedIn once section 3.3 lands.

### 5.4 Schema updates

**`src/seo/schemas.js`** — extensions needed:

- `blogPostSchema(post)` — `Article` type with author, datePublished, dateModified, image, publisher.
- `serviceSchema(service)` — generic builder for the new niche service pages.
- `pricingPageSchema()` — `Service` + `OfferCatalog` for the consolidated pricing page.
- Remove any remaining references to `www.joroservices.org`.

---

## 6. Wave 4 — location expansion + amplification

### 6.1 New service+location pages

Create from the Aldershot template:

- `src/pages/locations/ItSupportFarnborough.jsx`
- `src/pages/locations/WebDesignFarnborough.jsx`
- `src/pages/locations/WebDesignCamberley.jsx`
- `src/pages/locations/WebDesignFleet.jsx`
- Lower priority: `ItSupportWoking`, `ItSupportBasingstoke`, `ItSupportReading` (Phase 4 or later)

Each needs the same five touches as section 5.1.

### 6.2 New general location pages

- `src/pages/locations/Fleet.jsx`
- `src/pages/locations/Farnham.jsx`

Add routes, SEO entries, schema, and link to the matching service+location pages.

### 6.3 Rewrites

- `src/pages/locations/ItSupportAldershot.jsx` — add pricing comparison block, reinstate reviews block once three real reviews exist, add `dateModified` to the Service schema.
- `src/pages/locations/Hampshire.jsx` — add internal links to every service+location within the county, add last-updated timestamp in the UI.
- `src/pages/locations/Farnborough.jsx` — expand to match Aldershot depth.

### 6.4 Blog posts 2–10 (from Phase 1 section 7)

Publish in roughly this order:

1. Managed IT Support Pricing in Hampshire 2026 (links to new `/pricing`)
2. Terraform for Small Teams: Five Expensive IaC Mistakes (links to `/services/terraform-consulting`)
3. Cyber Essentials for UK SMEs: 30-Minute Guide
4. Best IT Support Companies in Aldershot 2026 (write carefully; honest comparison)
5. How to Choose a Managed IT Provider in Hampshire: 12-Point Checklist
6. AWS Migration for UK Small Business (links to `/services/aws-migration`)
7. Fractional CTO vs Full-Time vs Agency: Cost Comparison
8. Observability on a Budget: Prometheus + Grafana + Loki (links to `/services/observability-and-monitoring`)

---

## 7. Decisions needed from Adesoji before Phase 3 starts

A short list of things that block or change code. Please respond before Phase 3 kicks off so we don't bounce.

1. **Canonical host.** Apex (`joroservices.org`) or `www.`? Recommendation: apex.
2. **Homepage aggregateRating schema.** Remove in Wave 1, or replace with three named reviews?
3. **AWS certification status.** Current? If not, is renewing worth it for the AWS IQ directory listing?
4. **Clarity project ID.** Create one and share the ID.
5. **Author attribution on the technical blog posts.** Recommendation: `Adesoji Adejoro` on technical, `Joro Services` on marketing/sales.
6. **`/services/:id` dynamic route.** Is this real? What are the IDs? If legacy, we 301 them to the new service URLs.
7. **Three clients to approach for real reviews.** First names + company names, with your preferred email intro. I'll draft the request templates.
8. **Cyber Essentials certification.** Pursuing in the next 90 days? Yes/no changes the blog post tone and the directory listings available.
9. **Publish fractional CTO day rate?** Not required, but if yes it strengthens the `/fractional-cto` page and the comparison blog post.
10. **Microsoft Partner / Cisco / VMware certifications.** Any that are current, so we can list them without inventing.
11. **Case study consent.** Which of the performance claims (26.6% AWS reduction, 99.9% uptime, 40% MTTR, Secure Score 33→61) can be tied to a named or anonymised-with-sector client in public content?
12. **IndexNow key.** Happy to generate one; do you want it stored anywhere besides the committed `public/<key>.txt` and the Vercel env vars?

---

## 8. Risks and how they're handled

| Risk | Wave | Mitigation |
|---|---|---|
| Host redirect on Vercel fails silently, breaks all URLs | 1 | Test `curl -I https://www.joroservices.org/` returns 301 to apex before merging any other Wave 1 changes |
| Static generator ESM import of `pagesSEO.js` fails | 1 | Test with `node scripts/generate-static-pages.js` locally after `vite build`, fail build if < 40 pages generated |
| Sitemap regeneration misses routes | 1 | Build fails if output URL count < 40. Add unit test listing expected routes |
| Removing review schema drops a perceived trust signal | 1 | Replacing with honest ("trusted by Hampshire care providers, recruitment platforms and healthcare clients since 2022" as plain copy, not schema) holds the positioning without the policy risk |
| Google treats the changeover as a major site event and de-ranks further short-term | 1–2 | Expected. Google Search Console "Request indexing" for the 15 priority URLs mitigates. Expect a 7–14 day dip before recovery |
| Blog post schema validation errors | 3 | Run every new blog post through validator.schema.org and Google Rich Results Test before merging |
| New service pages cannibalise existing `/technical-services/*` pages | 3 | Internal link strategy: niche service pages link *up* to `/technical-services` as parent, parent links *down* to niche pages; canonicals differ; titles explicitly target different intents |
| Location pages begin to feel templated if we add seven more | 4 | Each town page must include at least three town-specific data points: nearest business park, dominant employers, actual travel time from Aldershot, local landmark for context. Auditor spot-checks for this |
| CRLF / LF drift on Windows host continues to show uncommitted changes | All | `git config core.autocrlf input` on the host once. Out of scope for this branch, but noted |
| Author change on existing blog posts looks like content farming to Google | 3 | Only change author where the real author is actually Adesoji. Keep `Joro Services` byline where it fits |

---

## 9. Order of file changes (Wave 1, concrete)

This is the exact sequence for the Wave 1 PR. One commit per group, all on `claude/seo-geo-audit-P6iVH`.

1. `vercel.json` + Vercel dashboard host redirect. Verify `www` → apex.
2. `public/robots.txt` — fix sitemap URL, add missing bots.
3. `public/sitemap.xml` — delete (replaced by build-time generation).
4. `scripts/generate-sitemap.js` — new.
5. `scripts/generate-static-pages.js` — import `pagesSEO` from source of truth, add blog/service loops, remove inline duplicate.
6. `src/seo/pagesSEO.js` — add missing routes.
7. `src/seo/schemas.js` — add `blogPostSchema`, fix any `www.` references.
8. `src/pages/insights/InsightPost.jsx` — inject `blogPostSchema` at runtime.
9. `src/pages/Homepage.jsx` — remove or replace the `reviewSchema` block.
10. `package.json` — update `postbuild` to run both generators.
11. `index.html` — add Microsoft Clarity tag (pending Clarity ID).
12. `public/<key>.txt` + `api/indexnow.js` — IndexNow.
13. `public/llms.txt`, `public/llms-full.txt` — fix `www.` references.

Every step above has a verification gate: build passes locally, Lighthouse score doesn't regress, schema validates.

Exit criteria for Wave 1 merge:

- Build completes with ≥ 40 static HTML files in `dist/`.
- Sitemap has ≥ 40 URLs, all on apex host.
- Every URL in the sitemap resolves to a static HTML file that carries unique title, description, canonical matching the URL.
- Homepage schema passes validator.schema.org and Rich Results Test with no errors.
- No `www.joroservices.org` references anywhere in committed code or content.
- `curl -sI https://www.joroservices.org/any-path` returns 301 to `https://joroservices.org/any-path`.

---

## 10. What Phase 3 produces

- Code changes for everything in section 9 (Wave 1).
- A new `docs/seo-implementation.md` tracking what actually landed, with dated entries per commit.
- Wave 2 is non-code; it runs in parallel and gets checked off in `docs/seo-implementation.md`.
- Waves 3 and 4 land in follow-up PRs on the same branch, each gated on its own ship-readiness checklist.

Phase 3 starts only on explicit approval of this plan and answers to section 7.

---

**End of Phase 2 deliverable.**
