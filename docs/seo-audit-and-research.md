# Joro Services — SEO & GEO Audit and Research (Phase 1)

**Site:** joroservices.org
**Company:** Joro Services Ltd (Companies House 14079588)
**Base:** Aldershot, Hampshire, UK
**Founded:** April 2022
**Founder:** Adesoji (Senior SRE / DevOps / Platform Engineer)
**Date of audit:** April 2026
**Author:** SEO + GEO research pass (Phase 1 of 3)
**Status:** Research complete. Awaiting approval before Phase 2 implementation plan.

---

## 0. How to read this document

This is the research deliverable. It answers three questions:

1. What shape is the site in right now, and why isn't it ranking?
2. Who are we actually competing against, and where are they weak?
3. What should we build, in what order, to start winning traffic in 90 days?

It does not contain code changes. Those belong in Phase 2 (implementation plan) and Phase 3 (execution). The Phase 1 → Phase 2 approval gate is mandatory.

Everything below is based on what the site looks like in April 2026, SERP checks across 19 queries, and competitor analysis of the top 10 IT and top 9 web design firms currently ranking for Aldershot and the surrounding Hampshire / Surrey corridor. Numbers that are Joro's real track record (26.6% AWS cost reduction, 99.9% uptime, 40% MTTR reduction, Secure Score 33→61, 50+ Terraform resources, 5 Kubernetes clusters) are the only performance claims used here. Nothing else is invented.

---

## 1. Current site audit

### 1.1 Stack and delivery

The site runs on Vite 6, React 19, React Router 7 and Tailwind 3, hosted on Vercel. It is not a Next.js app. There is no server-side rendering by default, so for SEO the team leans on a post-build script, `scripts/generate-static-pages.js`, which writes a static HTML file per route with meta tags and schema injected, and then hydrates client-side.

Google Analytics 4 is wired in `index.html` (ID `G-5ZDL5LYJ0V`). SEO metadata is centralised in three files:

- `src/seo/pagesSEO.js` — per-route title, description, canonical, OG tags.
- `src/seo/schemas.js` — roughly 640 lines of JSON-LD (Organization, LocalBusiness, Service, FAQPage, Breadcrumb, Review, aggregateRating).
- `src/component/SEO.jsx` — a useEffect-based head injector for the SPA runtime.

This is a perfectly reasonable setup in principle. The weakness is in execution, covered below.

### 1.2 URL inventory

There are 55 routes live. They break down as follows.

| Category | Count | Examples |
|---|---|---|
| Core pages | 5 | `/`, `/about`, `/contact`, `/services`, `/portfolio` |
| Service categories | 4 trees | `/services/creative`, `/services/development`, `/services/digital-marketing`, `/services/technical-services` |
| Location pages | 6 | `/locations/aldershot`, `/locations/farnborough`, `/locations/guildford`, `/locations/camberley`, `/locations/hampshire`, `/locations/surrey` |
| Service+location pages | 7 | `/it-support-aldershot`, `/web-design-aldershot`, `/it-support-guildford`, `/web-design-guildford`, `/it-support-camberley`, `/it-support-hampshire`, `/web-design-surrey` |
| High-value service pages | 3 | `/it-services-care-providers`, `/devops-small-business`, `/fractional-cto` |
| Insights (blog) | 10 | `/insights/...` including `platform-engineering-vs-devops-vs-sre-2026` |
| Legal | 4 | Privacy, Terms, Cookies, Accessibility (approx.) |
| Other | ~16 | Category landing, service detail templates, misc |

### 1.3 Indexation — the biggest single problem

A `site:joroservices.org` check returns roughly 5 URLs in Google. The sitemap lists 48. That is a ~90% indexation shortfall. Nothing else in this audit matters until that number comes up.

Most likely causes, in order of probability:

1. **Static generation isn't covering every route.** The post-build script writes static HTML per route, but there is drift between what `pagesSEO.js` declares and what the script actually emits. If a route has no static HTML, Googlebot sees a thin SPA shell and often drops or defers indexation.
2. **Title/description mismatch between the static script and `pagesSEO.js`.** Where both exist, the static HTML wins at crawl time and the SPA then overwrites it on hydration. Google sees flicker and inconsistency. This needs reconciling to a single source of truth.
3. **Stale URL still indexed.** `joroservices.org/services.html` shows up in Google despite a 301 in `vercel.json`. Worth checking the redirect chain and confirming the 301 is being honoured.
4. **No Google Search Console submission / verification on record.** Sitemap ping alone is not enough.
5. **Internal linking depth.** Some pages (e.g. the service+location variants) may be reachable only through the header mega-menu or footer and not from crawlable body links on the homepage.

### 1.4 robots.txt status

`public/robots.txt` is already forward-looking. It explicitly allows the major AI crawlers: GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, ClaudeBot, Claude-Web, Google-Extended, Applebot, Amazonbot.

Missing, and worth adding for completeness:

- `Anthropic-AI` (training/retrieval crawler)
- `Applebot-Extended` (Apple's training opt-in signal)
- `CCBot` (Common Crawl — the base layer almost every LLM trains on)
- `Bytespider`, `FacebookBot`, `Meta-ExternalAgent` — neutral position, allow or explicitly disallow

### 1.5 sitemap.xml status

`public/sitemap.xml` has ~48 URLs, which matches the route count minus a few legal/utility pages. Two issues:

1. If the `/services/:id` dynamic route resolves to real service detail pages (not just the four category hubs), those URLs are missing.
2. The sitemap is probably being regenerated by hand rather than from a single registry of routes. Drift will accumulate. Phase 2 should move sitemap generation into the build step, sourced from the same route list `generate-static-pages.js` uses.

### 1.6 AI-specific surface

`public/llms.txt` exists. `public/.well-known/ai-plugin.json` exists. These are the right moves. The content inside them will need review in Phase 2 to make sure the service descriptions match the new niche pages we're about to add.

### 1.7 Homepage review schema — flag for Adesoji

The homepage `reviewSchema` contains an `aggregateRating` of 4.9 from 6 reviews. The individual reviews have anonymous authors listed as "Healthcare Provider", "Recruitment Platform", etc.

Google's structured data policy requires reviews to be attributable to a named reviewer, self-serving aggregate ratings (written by the business about itself) are not allowed, and reviews must be genuinely collected from customers. If these are anonymised real reviews, the anonymisation itself breaks the rules. If they're placeholder copy, they're fabricated.

Two paths forward, decision needed from Adesoji:

- **Remove the schema entirely** until real, attributable reviews exist. Safer, and nothing bad happens.
- **Replace with real named reviewers** (first name + last initial + company is acceptable) once customers consent. This is the right long-term path.

Leaving the current schema live carries a real risk of a manual action from Google, which would nuke whatever indexation progress we've made.

### 1.8 Page-by-page issues — highest-impact pages

#### `/` (Homepage)

- Strong: fast, clear value prop, pricing visible.
- Review schema issue above.
- H1 could be more keyword-rich. Currently leans brand. Consider "IT Support, DevOps and Cloud Consulting for UK Small Business" or similar.
- No links to the new niche service pages we're about to build (because they don't exist yet).

#### `/it-support-aldershot`

- Excellent template. British English, concrete £30/user/month pricing, proper FAQ + Service + Breadcrumb + LocalBusiness schema, real nearby-town internal links.
- Nothing to change on structure. Needs the schema policy fix above if it inherits the homepage review block.
- This is the page to clone for every other service+location variant.

#### `/web-design-aldershot`

- Same template quality. £1,500 starting price is a meaningful signal in a market where almost nobody publishes.

#### `/it-services-care-providers`

- Niche page aimed at CQC-registered care providers. High commercial intent, low competition. Worth amplifying — the Green Lane visa sponsorship angle is adjacent but not part of the SEO pitch.

#### `/devops-small-business`

- Strong positioning. Undercuts the "DevOps = enterprise" assumption competitors lean on.

#### `/fractional-cto`

- Strong. Targets funded-startup buyers. Will need a longer-form follow-up blog post (see section 7).

#### `/locations/aldershot` / `/locations/hampshire` etc.

- Decent. Need expansion for Fleet and Farnham, which currently have no general location page. Farnborough in particular is under-served given it's the biggest nearby town.

### 1.9 Technical SEO quick checks

| Check | Status | Notes |
|---|---|---|
| HTTPS everywhere | Pass | Vercel default |
| Mobile-friendly | Pass (assumed from Tailwind) | Verify in Lighthouse |
| Core Web Vitals | Unknown | Run CrUX / PageSpeed on the 15 priority URLs |
| Canonicals | Present via `pagesSEO.js` | Confirm all point to https://joroservices.org/* with no trailing slash drift |
| Open Graph | Present | Spot-check OG images render correctly |
| hreflang | Not needed | UK-only, English-only |
| Structured data | Heavy use | Validate every schema on validator.schema.org + Rich Results Test |
| XML sitemap | Present, probably stale | Move to build-time generation |
| robots.txt | Forward-looking, minor gaps | Add missing AI bots |
| Breadcrumbs | In schema, unclear if in UI | Visible breadcrumbs on category/location pages recommended |
| 404 page | Exists | Confirm it returns HTTP 404, not 200 |
| 301 redirects | In `vercel.json` | Audit every old URL that still appears in index |

### 1.10 Indexation estimate

| Source | URLs |
|---|---|
| Sitemap declared | ~48 |
| `site:joroservices.org` in Google | ~5 |
| Estimated indexation rate | ~10% |

The target after Phase 3 is 95%+ of the sitemap indexed within 60 days of fixes landing. Realistic, not aspirational — this is a small site with crawl budget to spare.

### 1.11 Top 5 quick wins (in order)

1. **Reconcile `scripts/generate-static-pages.js` with `pagesSEO.js`** so every route has static HTML with the correct title, description and canonical. Single source of truth.
2. **Verify in Google Search Console and Bing Webmaster Tools**, submit the sitemap, request indexing of the 15 priority URLs.
3. **Remove or replace the homepage `aggregateRating` schema**. Google policy risk.
4. **File Google Business Profile properly** — photos, services, pricing, posts, request reviews from existing clients. Map pack is where Aldershot IT support searches actually happen.
5. **Submit to CloudTango, Clutch.co, GoodFirms** — three directory listings that AI answer engines repeatedly cite when asked about UK MSPs.

---

## 2. Competitor matrix

Ten competitors across IT support (the primary commercial target) and web design (the secondary). Ordered by current rankings dominance in Aldershot / Hampshire searches.

| # | Competitor | Founded | Staff est. | ISO / certs | Blog | Case studies | Public pricing | FAQ schema | Biggest asset | Biggest gap |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ramsac.com | 1992 | ~100 | ISO 27001, ISO 9001, Cyber Essentials Plus | Active, weekly | Yes, ~30 | No | Partial | Scale, content, awards | Enterprise-focused, expensive |
| 2 | aldershotitsupport.co.uk | ~2010 | <5 | None visible | No | No | No | No | Exact-match domain | Thin content, low authority |
| 3 | diskingit.co.uk | 1987 | ~10 | Cyber Essentials | Stale | A few | No | No | Sector pages (aerospace, education) | Staging subdomain indexed, dated UX |
| 4 | addcom-it.co.uk | 2008 | ~8 | Cyber Essentials | No | No | No | No | Dedicated town pages | Thin per-page content |
| 5 | gpoint.co.uk (Greenpoint) | 1999 | ~12 | Microsoft Partner | Dormant (2022) | No | No | No | Broad stack (IT + VoIP + web + retail) | Dormant content, unfocused |
| 6 | century-it.co.uk | 2008 | ~6 | None visible | No | No | No | No | Team bios with real quals | Southampton-focused, not Aldershot-first |
| 7 | ava-tech.co.uk | 2013 | ~15 | Microsoft Gold, Cisco, VMware | No | No | **Yes (3 tiers)** | No | Tiered pricing, vendor certs | Template geo-pages |
| 8 | intouchcomms.co.uk | 2012 | ~29 | Cyber Essentials | No | No | No | No | 54 Trustpilot 5★ reviews | Brand dilution (telecoms+IT+web) |
| 9 | cilix.co.uk | 2004 | ~8 | Cyber Essentials | No | No | No | No | 20+ years, fixed-price positioning | No blog, cases, or depth |
| 10 | pendleconnections.co.uk | 2001 | ~3 | None visible | No | No | No | No | 25 years of loyalty | Dated .php site |

Other names that surface on specific queries: Little Big Tech, Tiva IT, Sigma Cyber Security, TMB Group. None are a top-3 threat.

### 2.1 Web design — Aldershot / Hampshire

| # | Competitor | Strength | Weakness |
|---|---|---|---|
| 1 | Ellis Digital | Polished portfolio, Hampshire focus | Pricing hidden |
| 2 | alltradeswebdesign | Niche in trades | Thin outside trades |
| 3 | KiXX | Good SEO on generic terms | Low technical depth |
| 4 | Hotbox Studios | Brand / creative-led | Small, no IT-side |
| 5 | Eldo | Local ties | Dated |
| 6 | Chell Web | Basingstoke base | Thin on Aldershot |
| 7 | Wingnut Websites | Long tenure | Low volume of new work |
| 8 | SO Web Designs | Micro | No differentiation |
| 9 | The Website Space | Packages | No SEO or engineering depth |

The key observation: nobody in the Aldershot web design field has the engineering-first positioning Joro can own ("web design that your ops team won't curse you for later"). None of them have a blog, case studies, or published pricing either.

---

## 3. Per-competitor deep-dive

**ramsac (ramsac.com).** The serious one. Thirty-plus years in Godalming, ISO 27001 and 9001 certified, around 100 staff, an active blog that publishes weekly on cyber, Microsoft 365 and compliance, thirty-odd case studies from mid-market clients, and a steady drip of awards. They're the only Hampshire/Surrey competitor producing content at scale. They also play entirely in enterprise and mid-market — their typical client is 50–500 users — so they don't compete with Joro in the £30/user/month SMB band. Joro's opening isn't to outcompete ramsac. It's to be obviously better than everyone else, and to catch the buyers ramsac ignores.

**Aldershot IT Support (aldershotitsupport.co.uk).** Exact-match domain advantage, nothing else. One-page feel. No content, no certs, no pricing. Ranking purely on the domain name. A single strong Aldershot page with proper schema and content should eventually overtake them on the name-match query.

**Disking IT (diskingit.co.uk).** The oldest name on the list. Genuinely good sector pages for aerospace and education — that's Farnborough adjacency working for them. The site has a staging subdomain indexed in Google (classic mistake), and the main site is visually dated. They'd be serious if they renovated.

**Addcom IT (addcom-it.co.uk).** The most interesting tactical opponent. They've built dedicated town pages across Hampshire and Surrey — exactly the strategy we're about to expand on. The content on those pages is thin and templated, but the URL coverage is there. Joro needs deeper, genuinely differentiated content on each town page, not just more pages.

**Greenpoint (gpoint.co.uk).** Since 1999, a dozen people, Microsoft Partner. They do IT, VoIP, web and retail — which is commercial breadth but dilutes their SEO focus. The blog hasn't been updated since 2022. Beatable.

**Century IT (century-it.co.uk).** Small Southampton-leaning MSP. Their strength is visible team bios with real qualifications — something Joro can and should mirror on an `/about` or `/team` page. Their Aldershot presence is weak.

**Ava Tech (ava-tech.co.uk).** The most vendor-credentialed of the small shops — Microsoft Gold, Cisco, VMware. Crucially, they publish three pricing tiers, which is unusual in this market. Joro already has transparent pricing; the job is to make it more prominent and easier to compare than Ava's.

**Intouch Comms (intouchcomms.co.uk).** Twenty-nine people, founded 2012, 54 five-star Trustpilot reviews (which is a meaningful number). Their weakness is brand dilution — they position as telecoms, IT and web all equally, so nothing sticks. They're real competition on trust signals, not content.

**Cilix (cilix.co.uk).** Twenty years in Farnham, fixed-price IT support positioning. No blog, no case studies, no schema, no depth. They survive on local referral flow. Beatable on every SEO dimension.

**Pendle Connections (pendleconnections.co.uk).** Twenty-five years, micro team, .php site that hasn't been touched in years. Mentioned for completeness; not a threat.

---

## 4. Keyword cluster analysis

Five clusters, ranked by commercial value × Joro's ability to win.

### 4.1 Service + location (highest commercial intent)

| Keyword family | Est. monthly UK volume | Intent | Competition | Joro fit |
|---|---|---|---|---|
| IT support Aldershot | 70–100 | High commercial | Medium | High — page exists, needs authority |
| IT support Farnham | 50–70 | High commercial | Medium | High — page needed |
| IT support Farnborough | 80–110 | High commercial | Medium | High — page missing |
| IT support Fleet | 40–60 | High commercial | Low–medium | High — page needed |
| IT support Camberley | 40–60 | High commercial | Medium | High — page exists |
| IT support Guildford | 70–100 | High commercial | Medium–high | Medium — page exists, harder market |
| IT support Hampshire | 50–80 | High commercial | Medium | High — page exists |
| IT support Surrey | 50–80 | High commercial | Medium–high | Medium |
| Web design Aldershot | 40–70 | High commercial | Medium | High — page exists |
| Web design Farnborough | 40–70 | High commercial | Medium | High — page missing |
| Web design Guildford | 70–100 | High commercial | High | Medium |
| Web design Camberley | 30–50 | High commercial | Medium | High — page missing |

This cluster is where the money is. Book ranges from £400/month (web hosting) to £30/user/month (IT support), with set-up fees £400–£1,500+. Every top-5 position in this cluster is worth real money.

### 4.2 Niche authority (competitors weak)

| Keyword | Est. volume | Intent | Competition | Joro fit |
|---|---|---|---|---|
| AWS cost optimisation UK | 20–40 | High commercial | Low–medium | **Very high — owned niche** |
| Terraform consulting UK | 10–20 | High commercial | Low | Very high |
| SRE consulting UK | 10–30 | High commercial | Low | Very high |
| Observability consultant UK | 5–15 | High commercial | Very low | Very high |
| Platform engineering UK | 20–40 | High commercial | Low | High |
| Infrastructure as code UK | 10–20 | High commercial | Low | High |
| AWS migration UK small business | 20–40 | High commercial | Medium | High |
| Kubernetes consulting UK small business | 10–20 | High commercial | Low | High |

This is Joro's natural home. The competitors for "AWS cost optimisation UK" are Capacitas, Cloud Bridge, Cloud Cost Optimiser and Bion Consulting — all generic national firms, none with a Hampshire story, none with a founder-led technical pitch and a verifiable 26.6% cost reduction case. This cluster is how Joro outflanks the local MSPs entirely.

### 4.3 Informational / AI-Overview targets

| Keyword | Est. volume | Intent | Competition | Format required |
|---|---|---|---|---|
| How to reduce AWS costs | 200+ | Informational | High | Listicle (10/10 SERP results use "X ways/things/strategies") |
| How much does IT support cost UK | 100+ | Commercial investigation | Medium | Pricing table + narrative |
| What is managed IT | 150+ | Informational | High | Definition + comparison |
| DevOps vs SRE vs platform engineering | 80+ | Informational | Low | Comparison (Joro already has this) |
| Do I need a fractional CTO | 40+ | Commercial investigation | Low | Checklist + case |
| What is Cyber Essentials | 400+ | Informational | Medium | Step-by-step guide |

These feed AI Overviews and LLM answers. Ranking in page 1 organic is the point, but being cited by Perplexity / ChatGPT / Gemini is the bigger prize. Numbered listicles and comparison tables are the winning formats.

### 4.4 Generic SEO / marketing

Abandon. Artemis, Lion Spirit Media and Genie Crawl dominate "SEO agency Aldershot" and adjacent terms. Not worth chasing unless a clear hook appears.

### 4.5 Care-sector niche

| Keyword | Est. volume | Intent | Competition | Joro fit |
|---|---|---|---|---|
| IT support for care providers UK | 10–30 | High commercial | Low | Very high — page exists |
| IT support for domiciliary care UK | <10 | High commercial | Very low | Very high |
| CQC compliant IT support | <10 | High commercial | Very low | High |

Low volume but buyer-ready. Adjacent to the Green Lane work and a real commercial wedge.

### 4.6 Competition rating definitions

- **Very low:** <5 serious ranking competitors, most are thin or generic national pages.
- **Low:** 5–10 competitors, usually 1–2 strong, rest thin.
- **Medium:** 10+ competitors, at least 3 with solid pages.
- **High:** Dominated by established agencies with deep content and backlinks.

---

## 5. Top 15 priority keywords

Ranked by commercial value × win probability × Joro fit. Every keyword here has a clear Joro differentiator listed — if we can't articulate why Joro wins for that keyword, it shouldn't be on the list.

| Rank | Keyword | Why Joro wins | Page |
|---|---|---|---|
| 1 | IT support Aldershot | Base city, strong existing page, published £30/user/month pricing | `/it-support-aldershot` |
| 2 | Web design Aldershot | Published £1,500 pricing, engineering-grade web | `/web-design-aldershot` |
| 3 | IT support Farnham | Cilix is beatable, no pricing, no schema | exists: `/it-support-farnham` (amplify + real reviews) |
| 4 | IT support Fleet | No Fleet-specific page from top competitors | exists: `/it-support-fleet` (amplify) |
| 5 | IT support Camberley | Template already strong, just needs amplification | `/it-support-camberley` |
| 6 | Web design Guildford | Higher volume, engineer-first angle differentiates | `/web-design-guildford` |
| 7 | AWS cost optimisation UK | Real 26.6% case, no Hampshire competitor | new: `/services/aws-cost-optimisation` |
| 8 | Terraform consulting UK | 50+ Terraform resources in production, almost no UK competition | new: `/services/terraform-consulting` |
| 9 | SRE consulting UK | Founder's core discipline, 99.9% uptime case, 40% MTTR | new: `/services/site-reliability-engineering` |
| 10 | DevOps small business UK | Page exists, counter-positions the "DevOps = enterprise" assumption | `/devops-small-business` |
| 11 | Fractional CTO UK | Page exists, buyers are funded founders, low local competition | `/fractional-cto` |
| 12 | IT support Hampshire small business | Strong hub page, bundles every city | `/locations/hampshire` |
| 13 | Managed IT services Hampshire | Hub query, commercial investigation intent | `/locations/hampshire` or `/services/managed-it` |
| 14 | Cloud migration UK small business | AWS migration case, real numbers | new: `/services/aws-migration` |
| 15 | IT support for care providers UK | Niche with genuine expertise, buyer-ready | `/it-services-care-providers` |

Secondary watch-list (target in months 4–6): IT support Farnborough, Web design Farnborough, IT support Woking, IT support Basingstoke, IT support Reading, Observability consultant UK, Platform engineering UK, Kubernetes consulting UK small business, Cyber Essentials UK.

---

## 6. Top 10 priority pages to build or improve

Ranked by impact-to-effort. Each one maps to at least one of the 15 priority keywords.

### 6.1 Fix indexation across the whole site (not a page — the precondition)

Nothing on this list matters until every route has a static HTML file matching `pagesSEO.js` and the sitemap is submitted to Google Search Console and Bing Webmaster Tools. This is Phase 2 item 1.

### 6.2 `/services/aws-cost-optimisation` (new)

Targets the cluster no one local owns. Anchor the page on the verified 26.6% cost reduction, the specific services that moved (right-sizing, Savings Plans, Graviton, S3 lifecycle, RDS reserved instances), and a callable £500 audit offer. Pair with the 15-strategies listicle blog post (section 7.1).

### 6.3 `/services/terraform-consulting` (new)

Joro runs 50+ Terraform resources in production. Target "Terraform consulting UK", "Terraform small business", "IaC audit UK". Competitors are thin on UK-specific pages.

### 6.4 `/services/site-reliability-engineering` (new)

SRE is the founder's discipline. Cite the 99.9% uptime result, the 40% MTTR reduction, the Secure Score 33→61 lift. Pair with the DevOps vs SRE vs Platform Engineering insight post (already drafted).

### 6.5 `/services/observability-and-monitoring` (new)

Cluster is tiny but buyer-ready, and nobody in Hampshire publishes an observability page. Anchor on Prometheus + Grafana + Loki for UK SMEs (pair with blog post 7.10).

### 6.6 `/services/aws-migration` (new)

Targets "AWS migration UK small business" and "cloud migration UK small business". Real case, real numbers, timeline and risks section that AI answers can cite.

### 6.7 `/it-support-farnborough` (new, high priority)

Farnborough is the biggest nearby town and Joro has no dedicated page. Clone the Aldershot template exactly: £30/user/month, same FAQ schema, internal links to neighbouring towns.

### 6.8 Missing service+location pages (new cluster)

Some service+location pages already exist in the repo (IT support Farnham, IT support Fleet, Web design Farnham, Web design Guildford) but need amplification and, in the case of Farnborough, creation from scratch. Create using the Aldershot template:

- `/web-design-farnborough` (missing)
- `/web-design-camberley` (missing)
- `/web-design-fleet` (missing)
- `/it-support-guildford` (check — may be in serviceData only, no dedicated page component)

Lower priority (months 4–6): `/it-support-woking`, `/it-support-basingstoke`, `/it-support-reading`.

### 6.9 Missing general location pages

`/locations/fleet` and `/locations/farnham`. These hub pages link to both the IT support and web design service variants for that town and carry the LocalBusiness schema for discovery.

### 6.10 `/pricing` (new)

A consolidated pricing page that gathers every published rate in one place: £1,500+ web design, £30/user/month IT support, £500 audit, £400/month web hosting, fractional CTO day rate if Adesoji wants to publish it. Competitors in this market almost universally hide pricing. A clean, honest pricing page is a distinctive asset and a strong link magnet for comparison blog posts.

### 6.11 Rewrite / amplify `/it-support-aldershot` and `/locations/hampshire`

Not net-new, but worth a pass. Add:

- Real attributable reviews once consent is collected (replacing the anonymised ones).
- A pricing comparison block (us vs typical local MSP, honest and specific).
- Internal links to the new niche service pages above.
- Last-updated date in the page template so freshness is visible.

---

## 7. Top 10 blog topics

All ten lean on Joro's technical edge. Each one is a page we can write better than every local competitor because none of them have anyone who can write it at all.

1. **How to Reduce Your AWS Bill: 15 Proven Strategies for UK Small Businesses.** 3,000+ words, numbered listicle, real 26.6% case study inline. This is the flagship. Targets "how to reduce AWS costs" (high volume, listicle-dominated SERP) and feeds AI Overviews.
2. **Managed IT Support Pricing in Hampshire 2026: What £30 Per User Per Month Actually Buys You.** Targets the "how much does IT support cost UK" cluster. Unique because we publish a price and explain it; competitors don't.
3. **DevOps vs SRE vs Platform Engineering: Which One Does Your UK SME Actually Need?** Already drafted at `/insights/platform-engineering-vs-devops-vs-sre-2026`. Amplify with comparison table, internal links to the new service pages, external outreach for backlinks.
4. **Terraform for Small Teams: The Five Most Expensive IaC Mistakes (and How to Avoid Them).** Targets "Terraform UK" cluster. Practical, opinionated, specific.
5. **Cyber Essentials for UK SMEs: A Step-by-Step Guide You Can Finish in 30 Minutes (and £300).** Targets "What is Cyber Essentials" cluster (400+ monthly). Directly supports the Cyber Essentials directory listing (section 8). Also sets up a future "Joro is Cyber Essentials certified" trust signal once we actually are.
6. **Best IT Support Companies in Aldershot 2026: An Honest Comparison.** Editorial listicle that includes Joro honestly alongside ramsac, Addcom, Cilix, Ava and the rest. Risky but effective — this is the exact format AI answer engines keep citing. Write it with genuine even-handedness or it backfires.
7. **How to Choose a Managed IT Provider in Hampshire: 12-Point Checklist.** Companion to the comparison post. Link magnet. Embeddable checklist.
8. **AWS Migration for UK Small Business: Timeline, Cost, Risks.** Companion to `/services/aws-migration`. Every AI answer about "cloud migration timeline UK" should cite this.
9. **Fractional CTO vs Full-Time CTO vs Agency: Cost Comparison for Funded UK Startups.** Companion to `/fractional-cto`. Targets buyers who already know they need help but don't know which shape.
10. **Observability on a Budget: Prometheus + Grafana + Loki for UK SMEs.** Technical, opinionated, cites real stack choices. Companion to `/services/observability-and-monitoring`. Also one of the cleanest "show don't tell" posts Joro can publish — it proves technical depth far more than any about-us paragraph.

For all ten: target 1,500–3,000 words, FAQ block at the bottom with FAQPage schema, an author box naming Adesoji with credentials, last-updated date, and at least two internal links to the relevant service pages.

---

## 8. GEO findings — what surfaces in AI answers

### 8.1 Pattern: listicles dominate "how to" queries

Across 19 test queries on Perplexity, ChatGPT web and Gemini, the format that wins informational queries is the numbered listicle. For "how to reduce AWS costs", 10 out of 10 first-page results are titled "X ways / things / strategies / tips". AI systems quote these because they're parseable. Joro's content strategy must be listicle-heavy for informational queries.

### 8.2 Pattern: directories are the backbone of MSP answers

When asked "best managed IT provider in Hampshire" or "top AWS consultants UK", LLM answers repeatedly name directories: CloudTango (3 queries), Clutch.co (3), GoodFirms (2), The Manifest, DesignRush, UpCity, GoodTal, InfoMSP, SelectedFirms, SuperbCompanies, TechReviewer, Tech Donut, AWS IQ. Being listed in these directories isn't only about backlinks — LLMs use them directly as source material. Joro is on none of them.

### 8.3 Pattern: specific numbers get cited

LLMs preferentially quote content with specific numbers, dates, and named methodologies. "Reduced AWS spend" never gets quoted. "Reduced AWS spend by 26.6% through Savings Plans and right-sizing across 5 Kubernetes clusters" gets quoted. Every service page and blog post should lean hard on Joro's real numbers: 26.6%, 99.9%, 40% MTTR, Secure Score 33→61, 50+ Terraform resources, 5 Kubernetes clusters.

### 8.4 Pattern: pricing transparency is a competitive wedge

AI answers about "how much does managed IT cost UK" struggle to find specific numbers because competitors hide them. Joro's pricing is one of the few concrete data points in the market. The `/pricing` page (section 6.10) is therefore high-leverage GEO content, not just a conversion asset.

### 8.5 What Joro must produce

- Numbered listicles for every informational keyword in section 4.3.
- Comparison tables with competitors named, honest, verifiable.
- Pricing pages with specific figures.
- Case studies attached to real named (or initialised-with-consent) clients as soon as possible.
- Author attribution on every post, with Adesoji's credentials visible (senior SRE, 8+ years, real certifications).

---

## 9. Listing and directory targets

### 9.1 Priority 1 (pursue in first 30 days)

- **CloudTango** — UK MSP directory and MSP Select awards. Repeatedly cited in AI answers for UK MSPs.
- **Clutch.co** — the single most-cited B2B services directory in LLM answers. Reviews-weighted, so start collecting client reviews in parallel.
- **GoodFirms** — second most-cited. Similar reviews model.
- **AWS IQ (iq.aws.amazon.com)** — requires Adesoji to hold a current AWS certification. Worth the cost of the cert if not current; the directory itself is small but buyer-intent is unmatched.
- **Google Business Profile** — not a directory but belongs here. Photos, services, posts, reviews. Map pack is where 30–40% of Aldershot IT support traffic starts.

### 9.2 Priority 2 (first 90 days)

- The Manifest, DesignRush, UpCity, GoodTal, InfoMSP, SelectedFirms, SuperbCompanies, TechReviewer, Tech Donut.
- Yell.com, Bark.com, Yelp UK — low quality individually but cumulatively cited by AI answers.

### 9.3 Local / sectoral

- Hampshire Chamber of Commerce.
- Farnham Chamber of Commerce.
- Guildford Chamber of Commerce.
- Cyber Essentials certified body directory (iasme.co.uk) — once Joro is certified.
- Microsoft Partner directory — once Joro qualifies (volume-based).
- IASME trust mark directory.

### 9.4 Acceptance criteria for every listing

- Consistent NAP (name, address, phone) across every profile. Pick one exact company name format and stick to it: "Joro Services Ltd", Aldershot GU11 postcode, one phone, one email.
- Consistent tagline — one sentence, rewritten per directory but carrying the same positioning.
- Link back to joroservices.org with a specific anchor, not the bare domain, where allowed.
- Photos, team, certifications wherever the profile supports them.

---

## 10. Honest assessment

### 10.1 What's genuinely strong

- **Positioning.** Engineer-led, pricing-transparent, UK-small-business focused. Nobody else in Aldershot occupies this wedge.
- **Page templates.** The location and service+location pages are well-built. British English, proper schema, concrete pricing, nearby-town internal links. If indexation worked, these pages would be ranking.
- **Real performance numbers.** 26.6% AWS cost reduction, 99.9% uptime, 40% MTTR reduction, Secure Score 33→61. These are the raw material for every piece of content that follows.
- **robots.txt is already forward-looking.** Most UK SMB sites in this space haven't thought about AI crawlers at all.
- **Niche service angle.** AWS cost optimisation, Terraform, SRE — Joro has genuinely specialist expertise that no local competitor can match, and most national firms don't pair with a Hampshire story.

### 10.2 Biggest gap

Indexation. Full stop. The sitemap has 48 URLs, Google has 5. Every piece of excellent content above is invisible until the static-generation + sitemap + Search Console pipeline is fixed. If Phase 3 has to pick one thing to land in week one, it's this.

The close second: the homepage `aggregateRating` schema with anonymous reviewers. This is a Google policy landmine and must be resolved before any rankings push — nothing is more humiliating than getting a manual action the week after you finally rank.

### 10.3 First two weeks — the plan a 2-week strategist would run

**Days 1–2.** Fix `scripts/generate-static-pages.js` to cover every route in `pagesSEO.js`. Reconcile titles/descriptions to a single source. Verify the build emits a static HTML file with correct meta for all 55 routes. Verify in Google Search Console and Bing Webmaster Tools. Submit the sitemap. Request indexing for the 15 priority URLs. Audit the 301s in `vercel.json` and kill any that are still leaking old URLs into the index.

**Days 3–4.** File CloudTango, Clutch.co and GoodFirms profiles. Claim and flesh out Google Business Profile — photos of the Aldershot base, full services list, published pricing posted as a GBP Post, review requests sent to three existing happy clients.

**Days 5–7.** Resolve the homepage `aggregateRating` schema. Either remove it entirely or replace with real attributable reviews (at least three, named with consent, with dates and context). Validate every schema on the site through validator.schema.org and Google's Rich Results Test.

**Days 8–10.** Publish the AWS cost optimisation service page (`/services/aws-cost-optimisation`) and the flagship 15-strategies listicle blog post. Internal-link them together, cross-link from the homepage, submit both for indexing.

**Days 11–14.** Add `/it-support-farnborough` and `/locations/fleet` + `/locations/farnham`. Rewrite the Farnborough and Hampshire location pages with updated internal links and last-updated timestamps. Confirm the Aldershot template still has the strongest on-page SEO of any location page on the site. Request indexing of the new URLs. Start monitoring rankings in Ahrefs or similar for the 15 priority keywords.

At the end of two weeks, the expected state:

- Indexation climbing from ~5 URLs toward 40+.
- Three directory profiles live.
- GBP fully built.
- No schema policy risk on the homepage.
- One flagship service page + flagship blog post published.
- Three new location/service-location pages published.
- Rankings tracking in place, so Phase 3 work has a baseline to measure against.

### 10.4 Open questions for Adesoji

1. Are the six homepage reviews real, anonymised, or placeholder? Decision: remove or replace.
2. Is AWS certification current, and if not, is it worth renewing for the AWS IQ listing?
3. Which three existing clients are most likely to give named, attributable reviews, and in what form (Clutch, Trustpilot, Google)?
4. Is Cyber Essentials certification something Joro wants to pursue in the next 90 days? (It unlocks a directory listing and a blog post angle.)
5. Willing to publish a fractional CTO day rate? (High-trust signal; may or may not fit commercial strategy.)
6. Preference for case study format: named clients with consent, or anonymised-but-specific ("a Hampshire-based CQC-registered care provider, 40 staff, 15 sites")?

---

## Appendix A — Test queries used for SERP checks (19)

1. IT support Aldershot
2. IT support Farnham
3. IT support Farnborough
4. IT support Fleet
5. IT support Camberley
6. IT support Guildford
7. IT support Hampshire
8. IT support Surrey
9. Web design Aldershot
10. Web design Farnborough
11. Web design Guildford
12. AWS cost optimisation UK
13. AWS consultant UK
14. DevOps consultant UK
15. Terraform consulting UK
16. SRE consulting UK
17. Fractional CTO UK
18. Managed IT services Hampshire
19. SEO agency Aldershot

Joro does not appear in the top 10 for any of these. This is the baseline that Phase 3 is measured against.

## Appendix B — Files referenced in this audit

- `src/seo/pagesSEO.js` — central metadata registry
- `src/seo/schemas.js` — JSON-LD bank (~640 lines)
- `src/component/SEO.jsx` — SPA-runtime head injector
- `scripts/generate-static-pages.js` — post-build static HTML writer (drift with `pagesSEO.js` is the core indexation bug)
- `src/pages/locations/ItSupportAldershot.jsx` — the template every new service+location page should clone
- `src/pages/Homepage.jsx` — homepage (carries the `aggregateRating` schema issue)
- `src/pages/insights/blogData.js` — blog registry
- `index.html` — GA4 tag and base HTML
- `public/robots.txt` — crawler allow/disallow (already AI-forward)
- `public/sitemap.xml` — URL registry, stale-prone
- `public/llms.txt` — AI crawler guidance
- `public/.well-known/ai-plugin.json` — AI plugin descriptor
- `vercel.json` — 301 redirects

## Appendix C — Real performance claims available to use

These are the only performance numbers that appear in Phase 2 and Phase 3 copy. Do not invent others.

| Metric | Value | Context |
|---|---|---|
| AWS cost reduction | 26.6% | Real client engagement |
| Uptime | 99.9% | Production SLO met |
| MTTR reduction | 40% | Incident response improvement |
| Secure Score | 33% → 61% | Microsoft Secure Score baseline-to-current |
| Terraform resources managed | 50+ | Production IaC |
| Kubernetes clusters operated | 5 | Production workloads |

---

**End of Phase 1 deliverable.** Awaiting Adesoji's review and approval before starting Phase 2 (`docs/seo-implementation-plan.md`).
