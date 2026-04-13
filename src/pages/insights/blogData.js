export const blogPosts = [
  {
    slug: 'platform-engineering-vs-devops-vs-sre-2026',
    title: 'Platform Engineering vs DevOps vs SRE: Which One Does Your Business Actually Need in 2026?',
    metaDescription: "Confused by Platform Engineering, DevOps, and SRE? Here's what each one actually means, how they differ, and how to know which your business needs right now.",
    category: 'Technical Services',
    tags: ['platform engineering', 'devops', 'sre', 'cloud infrastructure', 'IT consulting UK'],
    author: 'Joro Services',
    date: '2026-04-13',
    content: `If you've been trying to hire a technical person recently or upgrade your infrastructure, you've probably run into all three terms — DevOps engineer, Site Reliability Engineer, Platform Engineer — often used interchangeably, sometimes in the same job advert. It's confusing, and the confusion costs businesses real money when they hire for the wrong thing or build the wrong team structure.

Here's a clear breakdown of what each one actually is, and more importantly, how to figure out which one your business actually needs.

## What DevOps Actually Means

DevOps is about removing the wall between the people who write software and the people who run it. Before DevOps became mainstream, developers would write code and throw it over a fence to an operations team who would then try to deploy it. This created slow releases, lots of blame, and a lot of late nights for everyone involved.

DevOps fixes this by combining the two functions. A DevOps engineer typically builds and maintains the pipelines that get code from a developer's laptop into production. They manage CI/CD (continuous integration and deployment), containerisation with Docker, infrastructure automation with tools like Terraform, and usually own the deployment process end to end.

If your business ships software and you're still deploying manually or your releases are slow and scary, you need DevOps practices.

## What SRE Actually Means

Site Reliability Engineering came out of Google. The idea is simple: apply software engineering principles to operations problems. Instead of just reacting when things break, an SRE builds systems that are designed to fail gracefully, monitors everything proactively, and defines clear targets for reliability using SLOs (Service Level Objectives) and error budgets.

An SRE is essentially asking: how do we keep this thing running at the reliability level our customers expect, without over-engineering it? They handle incident response, post-mortems, on-call rotations, and build automation to reduce toil.

If your business is at a stage where downtime is genuinely costing you revenue or customers, and you need someone whose entire job is making your systems stay up and recover fast, you need SRE.

## What Platform Engineering Actually Means

Platform Engineering is newer. It takes the tools and practices from DevOps and SRE and packages them into an internal product that your development team can use without needing to understand every detail underneath.

Think of it like building roads. DevOps builds the vehicles and the traffic systems. SRE makes sure the roads don't have accidents. Platform Engineering builds the roads themselves — and makes them easy enough that any driver can use them without needing to be a mechanic.

Platform teams build Internal Developer Platforms (IDPs): self-service tools that let developers deploy, monitor, and scale their applications through simple interfaces rather than digging into YAML files and Kubernetes configs every time they want to ship something.

If you have a growing engineering team that's spending more time on infrastructure than on building your actual product, you need Platform Engineering.

## So Which One Does Your Business Need?

The honest answer depends on your stage. Here's a rough guide.

You're a small business with a website and maybe one or two internal tools: you don't need any of these yet. You need good IT support and solid cloud infrastructure management. That's a different conversation.

You're a startup or scale-up shipping a product to customers: start with DevOps. Get your deployment pipeline sorted, get Terraform managing your infrastructure, and make your releases boring and repeatable.

You're growing and downtime is becoming a real commercial risk: add SRE thinking. Define your SLOs, set up proper monitoring and alerting, and build your incident response process before you need it.

You have multiple development teams and they're stepping on each other's toes because everyone manages their own infrastructure differently: this is when Platform Engineering pays off.

Most small and medium businesses in the UK are at stage one or two. They don't need a platform team — they need their infrastructure done properly and someone who can build a deployment pipeline that works.

That's exactly what we do at Joro Services. We work with businesses at every stage, help you figure out what you actually need, and then build it. No unnecessary complexity, no empire-building.

If you want an honest conversation about where your infrastructure is and what would actually help, [get in touch for a free consultation](/getintouch).`,
  },
  {
    slug: 'how-we-cut-aws-costs-26-percent',
    title: 'How We Cut AWS Costs by 26% Without Touching a Single Line of Application Code',
    metaDescription: "A real case study on reducing AWS spend by 26% through infrastructure changes alone — no code rewrites, no downtime, no magic. Just the actual work.",
    category: 'Technical Services',
    tags: ['AWS cost reduction', 'cloud infrastructure', 'finops', 'AWS UK', 'cloud cost optimisation'],
    author: 'Joro Services',
    date: '2026-04-13',
    content: `AWS bills have a way of quietly growing while nobody's paying attention. You spin up a server for a project, forget to turn it off. You provision storage for a migration, never clean it up. You pick an instance type based on a recommendation from two years ago and never revisit it. Before long you're paying significantly more than your workload actually requires.

We recently completed an infrastructure audit that reduced a client's monthly AWS spend by 26.6%. Here's exactly how we did it.

## The Starting Point

The client was running a production environment on AWS that had grown organically over about three years. Nobody had sat down and reviewed the infrastructure holistically. The bill was growing, the team assumed it was just the cost of scaling, and nobody had time to dig into it.

Before touching anything, we audited the entire account: every running resource, every storage bucket, every data transfer pattern, and every service in use. This is always the first step. You cannot optimise what you haven't mapped.

## What We Found

**Over-provisioned compute.** The most common issue in any AWS account. Instances that were sized for peak load from 18 months ago, running at 15-20% CPU utilisation on average. We right-sized these based on actual usage data from CloudWatch, not guesswork. Dropped to the appropriate instance family and size. Significant saving, zero performance impact.

**Unattached and forgotten storage.** EBS volumes that had been detached from terminated instances but never deleted. Old snapshots retained indefinitely with no lifecycle policy. S3 buckets from old projects storing data nobody accessed. Storage costs add up slowly and that's why they're easy to miss.

**No reserved pricing.** The client was paying on-demand rates for workloads that had been running continuously for over a year. On-demand is for unpredictable, short-lived workloads. For anything running 24/7, Reserved Instances or Savings Plans cut the cost by 30-40% on their own.

**Data transfer costs hiding in plain sight.** Traffic patterns that were routing data between regions unnecessarily. Small per-GB fees that compound into meaningful numbers at scale.

**No resource tagging.** Without tags, you can't attribute cost to teams, projects, or environments. You end up paying for things you can't trace back to anything useful, which means nothing ever gets cleaned up.

## What We Did

We didn't rewrite any application code. We didn't change any deployment architecture. Every change was at the infrastructure layer.

We right-sized the compute instances based on actual CloudWatch metrics. We set up S3 lifecycle policies to automatically move infrequently accessed data to cheaper storage tiers and delete data that had exceeded its retention requirement. We deleted the orphaned EBS volumes and set up snapshot lifecycle policies going forward. We purchased Reserved Instances for the baseline workload and set up Savings Plans for the remainder. We implemented a tagging strategy so every resource could be attributed to a team and purpose. We moved the infrastructure into Terraform so all future changes would be tracked, reviewed, and reproducible.

The 26.6% reduction came from the combination of all of these. No single change got there alone.

## What This Looks Like in Practice

On a £5,000/month AWS bill, a 26% reduction is £1,300 per month. That's £15,600 per year. For most SMEs, that's more than enough to cover the cost of proper infrastructure management for the entire year.

The real lesson isn't the percentage. It's that most AWS accounts running for more than 12 months have significant unnecessary spend that compounds quietly while the team focuses on building the product.

We offer a free AWS cost audit. No obligation. We'll go through your account, show you what we find, and give you an honest view of where the money is going and what can be done about it.

[Book your free AWS cost audit here](/getintouch).`,
  },
  {
    slug: 'internal-developer-platform-small-team-2026',
    title: 'What Is an Internal Developer Platform (IDP) and Does a Small Team Actually Need One?',
    metaDescription: "Internal Developer Platforms are everywhere in 2026. But are they actually useful for teams under 50 engineers? Here's an honest answer.",
    category: 'Technical Services',
    tags: ['internal developer platform', 'platform engineering', 'devops', 'small team infrastructure', 'cloud UK'],
    author: 'Joro Services',
    date: '2026-04-13',
    content: `You've probably started seeing Internal Developer Platforms mentioned everywhere. Every DevOps conference has three talks about them. Every platform engineering article treats them as the obvious next step for any serious engineering team. Gartner says 80% of engineering organisations will have platform teams by the end of 2026.

So should you build one? Probably not yet. Here's an honest breakdown.

## What an IDP Actually Is

An Internal Developer Platform is a self-service layer that sits on top of your infrastructure and tools. The idea is simple: instead of every developer needing to understand Kubernetes, Terraform, cloud networking, and whatever CI/CD system your company uses, they interact with a simple interface that handles all of that for them.

Want to deploy a new service? Click a button. Want to spin up a test environment? Fill in a form. Want to see the logs and metrics for your service? It's all in one place.

Tools like Backstage (open source, from Spotify), Humanitec, and OpsLevel are commonly used to build these platforms. They become the front door to everything your engineering team needs to get code running.

## Why Everyone's Talking About Them

Platform engineering solves a real problem that emerges at scale. When you have 5 engineers, everyone knows how everything works. When you have 50, or 150, or 500, you can't rely on tribal knowledge. Every team invents their own way to deploy, their own monitoring setup, their own way to handle secrets. The inconsistency creates risk and slows everyone down.

An IDP standardises all of that. One golden path for deployment, one way to provision environments, one place to find service documentation. Teams move faster because they're not reinventing infrastructure every time they start a new project.

## The Honest Answer for Small Teams

If you have fewer than 20 to 30 engineers, you almost certainly don't need an IDP yet. Building and maintaining one is a significant investment. Backstage alone requires a team to configure, customise, and keep up to date. You'd be spending engineering time building internal tooling instead of building your product.

What small teams actually need is simpler: a consistent deployment pipeline, infrastructure managed as code, proper monitoring and alerting, and clear documentation of how things work. That's it. You can achieve all of that with a well-configured GitHub Actions pipeline, Terraform, and a dashboarding tool like Grafana or Datadog.

The mistake we see often is small engineering teams reaching for enterprise solutions to problems they don't have yet. An IDP built for 10 engineers is just complexity for its own sake.

## When You Should Start Thinking About It

You're ready to seriously consider an IDP when multiple teams are consistently stepping on each other because of inconsistent infrastructure practices. When onboarding a new engineer takes weeks because there's so much context to absorb about how your deployment works. When your platform team (if you have one) is spending most of their time answering the same questions from developers rather than building new capabilities.

Those are the signals. Until then, get the basics right.

## What Getting the Basics Right Looks Like

At Joro Services we work with teams at the earlier stages — the ones who need their deployment pipeline sorted, their cloud infrastructure documented and managed properly, and their monitoring set up before they're firefighting in production.

That's where the real leverage is for most UK tech businesses right now. Platform engineering is the right destination. The journey starts with fundamentals.

[Talk to us about your infrastructure](/getintouch) — we'll tell you honestly where you are and what the next step actually looks like.`,
  },
  {
    slug: 'terraform-iac-teams-doing-it-wrong-2026',
    title: 'Terraform in 2026: Why Most Teams Are Still Doing IaC Wrong (And How to Fix It)',
    metaDescription: "Infrastructure as Code with Terraform is table stakes in 2026. But most teams have the same avoidable problems. Here's what they are and how to fix them.",
    category: 'Technical Services',
    tags: ['terraform', 'infrastructure as code', 'IaC', 'devops', 'cloud infrastructure UK'],
    author: 'Joro Services',
    date: '2026-04-13',
    content: `Terraform has been around since 2014. Most engineering teams have been using it for years. And yet, the same problems appear in nearly every infrastructure codebase we look at. Not because the engineers don't know Terraform — they do. But because good Terraform habits take more than just knowing the syntax.

Here's what we see consistently, and what to do about it.

## The State File Is an Afterthought

Terraform state is the source of truth for your infrastructure. It's the file that tells Terraform what it has already built so it knows what to change, add, or destroy next time you run it.

The most common mistake we see is teams starting with local state. You run terraform init on your laptop, the state file lives in your project directory, and it works fine — until it doesn't. Someone else on the team runs a plan and their state is different from yours. Or the state file gets committed to Git (which is a security risk because it contains sensitive values). Or it just gets deleted.

Remote state in S3 with DynamoDB locking for AWS is the fix, and it should be configured from day one, not retrofitted later. Retrofitting it is painful. Starting with it costs you about 20 minutes.

## No Module Structure

The second most common issue is monolithic Terraform code. One big main.tf that contains every resource for the entire environment. It works when the environment is small. When the environment grows, plan times get long, every change touches the whole state, and the risk of accidentally destroying something you didn't mean to touch gets real.

Modules are how you solve this. Group related resources together — networking, compute, database, monitoring — each in their own module with clear inputs and outputs. Your root module then composes these modules together for each environment. Changes to your database module don't touch your networking module's state. Plans are faster. Risk is contained.

## Environments Are Copied, Not Parameterised

We regularly see a staging folder that is an almost-identical copy of the production folder with a few values changed. When someone makes a change to production, they have to remember to make the same change to staging. When they forget — and they will forget — the environments drift apart.

The fix is to parameterise your infrastructure with variables and use either Terraform workspaces or separate state backends per environment, while sharing the same module code. One set of code, multiple environments. Changes flow through consistently.

## No Drift Detection

Terraform plan tells you what changes would be made. But it only tells you when you run it. What it doesn't do by default is alert you when someone has manually changed something in the AWS console without going through Terraform — which is how drift happens.

Setting up scheduled plan runs in your CI pipeline that alert on any diff between your code and the real infrastructure is how you catch this. It's a simple pipeline job, but most teams don't have it.

## Everything in One Workspace

Large infrastructure in a single Terraform workspace means a single state file managing hundreds of resources. Blast radius on any mistake is enormous. Plan and apply times are long. Locking one engineer out while another applies is a daily frustration.

Break your infrastructure into logical workspaces with separate state. Accept the overhead of managing multiple states — it's worth it.

## The Bigger Point

None of these are exotic or difficult fixes. They're discipline and structure that most teams skip in the early days and then never go back to sort out. Technical debt in infrastructure is exactly as real as technical debt in application code — it just shows up differently, usually during an incident.

At Joro Services we do infrastructure reviews and help teams get their Terraform into a state where it's actually safe to use at scale. If you want a second pair of eyes on your IaC setup, [get in touch](/getintouch).`,
  },
  {
    slug: 'devsecops-practical-guide-uk-startups-2026',
    title: "DevSecOps Is Not a Tool, It's a Pipeline: A Practical Guide for UK Startups",
    metaDescription: "Most UK startups treat security as something to sort out later. Here's why that's increasingly risky in 2026 and how to build security into your pipeline from day one.",
    category: 'Technical Services',
    tags: ['devsecops', 'cybersecurity', 'GDPR', 'CI/CD security', 'startup IT UK'],
    author: 'Joro Services',
    date: '2026-04-13',
    content: `Security is one of those things UK startups consistently treat as something to deal with later. Get the product built first, get customers, then worry about security once there's budget for it. It's understandable. It's also increasingly dangerous, and in 2026 it's getting more expensive to fix retroactively than it ever has been.

DevSecOps is the answer, but most articles about it make it sound like an enterprise initiative requiring a dedicated security team. It isn't. Here's what it actually looks like for a startup or small engineering team.

## What DevSecOps Means in Practice

DevSecOps simply means shifting security left — building security checks into your development and deployment process rather than bolting them on at the end or waiting for an annual penetration test to tell you what's broken.

The difference is cultural as much as technical. Security isn't the responsibility of one person or one team. It's baked into how code gets reviewed, how dependencies get updated, how containers get built, and how infrastructure gets deployed.

## What Your Pipeline Should Include

**Dependency scanning.** Every application uses third-party libraries, and those libraries have vulnerabilities that get discovered regularly. Tools like Snyk, Dependabot, or OWASP Dependency Check can scan your dependencies on every commit and alert you when a known vulnerability appears in something you're using. This takes about an hour to set up and runs automatically from that point on.

**Static code analysis.** SAST (Static Application Security Testing) tools analyse your code for common security mistakes before it ever runs — things like SQL injection vulnerabilities, hardcoded secrets, insecure cryptography. Tools like Semgrep or SonarQube integrate directly into GitHub Actions or GitLab CI and flag issues in pull request reviews.

**Secret scanning.** Developers accidentally commit API keys, database passwords, and private keys to Git repositories more often than anyone likes to admit. GitHub has secret scanning built in. GitGuardian and TruffleHog are dedicated tools. This should be running on every push.

**Container image scanning.** If you're using Docker, your container images need scanning for known vulnerabilities in the base image and installed packages. Trivy is free, fast, and integrates into any CI pipeline in minutes.

**Infrastructure security checks.** If you're using Terraform or CloudFormation, tools like Checkov or tfsec scan your infrastructure code for misconfigurations — open security groups, unencrypted storage, public S3 buckets — before they get deployed.

## The GDPR Reality for UK Businesses

UK GDPR requires that you implement appropriate technical and organisational measures to protect personal data. "Appropriate" isn't defined as a checklist, but running none of the above while handling customer data is unlikely to satisfy any regulator's definition of appropriate.

The ICO has been issuing fines consistently. In 2026, with the UK Cyber Security and Resilience Bill moving through Parliament, the regulatory environment for data security is tightening, not loosening. Getting caught with a breach and no evidence of security practices is expensive. Getting your security practices in place before a breach is not.

## Where to Start

If you're starting from zero, do these things in order. Set up secret scanning on your repository today — it's free and takes minutes. Add dependency scanning with Dependabot or Snyk. Add a SAST tool to your pull request process. Then work through container and infrastructure scanning once those are running.

You don't need all of this on day one of a new project. But by the time you're handling real customer data, all of it should be in place.

At Joro Services we help UK startups and growing businesses build security into their pipelines from the beginning, and we also do security audits if you've inherited a codebase and need to know where you stand. We also handle GDPR compliance as part of our cybersecurity service.

[Get in touch for a free security health check](/getintouch).`,
  },
  {
    slug: 'ai-website-builder-vs-web-designer-uk-2026',
    title: 'AI Website Builders vs a Real Web Designer: What UK Businesses Are Getting Wrong in 2026',
    metaDescription: "Wix AI, Squarespace AI, Framer AI — are they good enough to replace a professional web designer? Honest answer for UK businesses in 2026.",
    category: 'Creative Solutions',
    tags: ['web design UK', 'AI website builder', 'website design Hampshire', 'web designer Aldershot', 'small business website'],
    author: 'Joro Services',
    date: '2026-04-13',
    content: `AI website builders have genuinely improved. Wix AI, Squarespace AI, Framer, and a dozen others can now produce a website in minutes that looks reasonably competent. If you showed one to someone five years ago they'd be impressed. So the question businesses are reasonably asking is: do I still need a professional web designer, or can I just do this myself?

The honest answer is: it depends on what you need the website to do.

## Where AI Builders Actually Work Fine

If you're a sole trader or very small business that needs a basic online presence — a few pages explaining what you do, contact details, maybe a booking link — an AI website builder will probably serve you well enough. Squarespace in particular produces clean, professional-looking results for straightforward use cases. The cost is low, you maintain control, and you can update it yourself.

For this type of site, spending £1,500+ on a custom design isn't always the right call. Be honest about what you need.

## Where They Fall Apart

The moment your requirements get more specific, the limitations appear fast.

**Performance and Core Web Vitals.** AI-built websites on hosted platforms tend to load slowly because they're serving generic code that isn't optimised for your specific content. Google uses Core Web Vitals — page load speed, layout stability, interactivity — as a ranking signal. A slow site doesn't rank. A professionally built site on a modern stack like Next.js on Vercel will consistently outperform a Wix site in search results, all else being equal.

**SEO beyond the basics.** AI builders handle basic meta titles and descriptions. They don't handle schema markup, technical crawlability, structured data for local businesses, or the kind of site architecture that helps Google understand what your business does and where you operate. If you're competing for local search terms in Hampshire or Surrey, this matters enormously.

**UK GDPR and cookie compliance.** Getting this wrong is a legal risk. AI builders give you a generic cookie banner. Getting it right — consent management, legitimate interest assessments, a proper privacy policy that actually matches what your site does — requires attention that a builder's templates don't give you.

**Custom functionality.** If you need anything beyond the basics — a booking system that connects to your actual calendar, a client portal, integration with your CRM, custom forms that feed data somewhere useful — AI builders either can't do it or charge you for a third-party integration that's bolted on rather than built properly.

**Brand differentiation.** AI builders produce websites that look like AI-builder websites. The layouts, the stock photography, the component choices — experienced eyes can spot them immediately. If you're in a market where credibility and first impressions matter, looking like every other SME on the internet is a genuine commercial problem.

## What the Price Actually Gets You

A professionally designed and built website from Joro Services starts at £1,500. For that you get a site built to your actual requirements, properly optimised for search and performance, compliant with UK GDPR, mobile-first, and built on modern technology that you own.

You also get a site that's built to grow. Adding a new service page, a blog, a booking system — these are things we build to be extensible from the start, not afterthoughts that require a complete rebuild.

The comparison isn't £0 vs £1,500. It's the difference between a site that works as a marketing asset and one that just technically exists on the internet.

[Talk to us about your website](/getintouch). We're based in Aldershot and work with businesses across Hampshire, Surrey, and the UK.`,
  },
  {
    slug: 'uk-sme-cybersecurity-30-minute-fix-2026',
    title: "32% of UK Small Businesses Have Zero Cybersecurity in Place. Here's Your 30-Minute Fix",
    metaDescription: "Over a third of UK SMEs have no cybersecurity protections at all. Here's a practical, non-technical guide to the essentials every business should have in place right now.",
    category: 'Technical Services',
    tags: ['cybersecurity UK', 'small business cyber security', 'Cyber Essentials UK', 'IT support Hampshire', 'GDPR compliance'],
    author: 'Joro Services',
    date: '2026-04-13',
    content: `One in three UK small businesses has no cybersecurity protections in place at all. Not basic, not inadequate — none. That's not a statistic from a decade ago. That's the current picture in 2026, and it's why small businesses are now being targeted more aggressively than large enterprises by cybercriminals. Large businesses have security teams. Small businesses often have nothing.

This post is for business owners, not IT people. No jargon, no selling you on expensive solutions you don't need. Just the things that actually matter.

## Why Small Businesses Are Being Targeted

It's not personal. Attackers run automated tools that scan the internet for vulnerable systems and send phishing emails at scale. Small businesses show up in those scans because they often have basic or no defences. The attacker doesn't care whether your business turns over £50k or £50m — they care whether they can get in.

The latest figures show 43% of UK businesses faced some form of cyberattack in the past twelve months. And 28% of UK SMEs say a single successful attack could put them out of business entirely.

## The 30-Minute Essentials

These are things you can do today, most of them free or very low cost.

**Multi-factor authentication on everything.** If your email, accounting software, or any cloud service doesn't require a second form of authentication beyond a password, that's your biggest risk. Turn on MFA on Microsoft 365 or Google Workspace first — email is where most business attacks start. It takes about 10 minutes and it's free.

**Strong, unique passwords with a password manager.** If any of your team is using the same password for multiple services, or weak passwords, you're one data breach away from a compromise. 1Password and Bitwarden are both excellent. Bitwarden has a free tier. Set it up, import your existing passwords, change any that are weak or reused.

**Automatic software updates.** Outdated software with known vulnerabilities is one of the most common ways attackers get in. On Windows, make sure Windows Update is running automatically. On Macs, same. On any routers or network equipment, check the firmware is current.

**Email filtering.** Microsoft 365 and Google Workspace both have built-in spam and phishing filtering. Make sure it's actually turned on and configured. If you're using a basic email host without filtering, consider moving to one of these platforms — the productivity benefits alone are worth it, and the security improvement is significant.

**Backups that are tested.** Ransomware encrypts your files and demands payment. The defence is simple: backups you can actually restore from, stored somewhere the ransomware can't reach. Cloud backup with versioning — Backblaze, Azure Backup, or even OneDrive with version history — works well. The critical bit is testing that the restore actually works. Most people back up, nobody tests restores.

## The Next Step: Cyber Essentials

Once you have the basics in place, Cyber Essentials is worth pursuing. It's a UK government-backed certification that demonstrates you've implemented fundamental security controls. It's affordable, it's increasingly required for government contracts and some tenders, and it gives you a framework to check that your security posture is actually sound rather than assumed.

Cyber Essentials covers five areas: firewalls, secure configuration, user access control, malware protection, and patch management. If you've done the steps above, you're already partway there.

## What We Do

At Joro Services we offer a free security health check — we'll look at your current setup, tell you honestly where the gaps are, and give you a clear prioritised list of what to address. No obligation, no pressure.

We also handle Cyber Essentials assessments, GDPR compliance reviews, and full managed cybersecurity for businesses that want ongoing protection without hiring an internal IT team.

[Book your free security health check](/getintouch). Based in Aldershot, serving businesses across Hampshire, Surrey, and the UK.`,
  },
  {
    slug: 'google-ai-overviews-local-seo-hampshire-surrey-2026',
    title: "Google's AI Overviews Are Changing SEO for Local Businesses. Here's What to Do If You're in Hampshire or Surrey",
    metaDescription: "Google AI Overviews are pushing organic results down the page. Here's what Hampshire and Surrey businesses need to do right now to protect their local search traffic.",
    category: 'Digital Marketing',
    tags: ['local SEO Hampshire', 'local SEO Surrey', 'Google AI Overviews', 'SEO Aldershot', 'small business SEO UK'],
    author: 'Joro Services',
    date: '2026-04-13',
    content: `If you see this post, it means our SEO worked.

And that's exactly the point of this article — showing up in search results right now requires a different approach than it did two years ago. If you're a business in Aldershot, Farnham, Guildford, Camberley, Fleet, or anywhere else in Hampshire or Surrey, here's what's changed and what to do about it.

## What Google AI Overviews Are and Why They Matter

Google started rolling out AI Overviews — the generated summaries that appear at the very top of search results — significantly in 2024 and they're now a fixture across most searches in 2026. What they do is answer the user's question directly on the search results page, before they ever click on a website.

The result is that organic search rankings that used to drive steady traffic are now delivering less of it. You can rank number one for a term and still get fewer visitors than you did at position three two years ago, because Google is answering the question before anyone clicks.

This is genuinely bad news for content that exists to answer generic questions. It's much less of a problem for local businesses — and in some ways it's an opportunity.

## Why Local Businesses Are More Insulated Than They Think

AI Overviews are good at answering factual, generic questions. They're not good at replacing local intent. When someone in Farnham searches "web designer near me" or "IT support Aldershot" or "cybersecurity company Hampshire", they're not looking for a generated summary — they're looking for a specific local business they can actually contact and trust.

Google maps results, local pack listings, and locally-relevant organic results still drive significant traffic for this type of search. And the businesses that show up there are the ones doing local SEO properly.

## What Local SEO Actually Looks Like in 2026

**Google Business Profile is non-negotiable.** If you haven't claimed and fully completed your Google Business Profile, do it today. It's free. Add every service you offer, use the description to include the towns and areas you serve, add photos, and post updates regularly. Businesses with active, complete profiles appear more prominently in local search and on Google Maps.

**Get local citations right.** A citation is any online mention of your business name, address, and phone number. Consistency matters — if your address appears differently across Yell, Bing Places, Apple Maps, and your own website, Google treats that inconsistency as a signal of unreliability. Audit and fix every major directory listing you have.

**Build locally-relevant content.** Pages on your website that specifically mention the areas you serve — not in a spammy list-of-towns way, but with genuinely useful content relevant to businesses in those areas — rank better for local searches than generic service pages. This blog post is an example of that approach.

**Schema markup for local businesses.** If your website doesn't have LocalBusiness schema markup, it's missing a clear signal to Google about what you are and where you operate. This is technical but straightforward to implement, and it helps Google understand your business accurately.

**Reviews.** Businesses with more recent, genuine Google reviews rank better in local results and are clicked more often. Make asking for reviews a part of your process — a simple follow-up email after completing work for a client asking them to leave a Google review takes 30 seconds to set up and compounds over time.

## What Doesn't Work Anymore

Keyword stuffing location names onto pages. Thin content pages that exist only to target a search term. Buying links. Ignoring page speed and mobile experience. All of these have declining or zero impact in 2026, and some actively harm your rankings.

## What We Do

At Joro Services we handle local SEO for businesses across Hampshire, Surrey, and the wider UK. That includes technical SEO audits, Google Business Profile optimisation, local citation building, content strategy, and schema implementation.

We also offer a free SEO audit — we'll look at your current search presence, show you what's working and what isn't, and give you a clear picture of what would actually move the needle.

[Get your free SEO audit](/getintouch). Based in Aldershot, Hampshire.`,
  },
  {
    slug: 'website-downtime-it-support-guide-uk-smes-2026',
    title: 'What Happens to Your Business If Your Website Goes Down? A Practical IT Support Guide for UK SMEs',
    metaDescription: "Downtime is more than an inconvenience. Here's what it actually costs UK small businesses and what proactive IT support should include to prevent it.",
    category: 'Technical Services',
    tags: ['IT support Hampshire', 'IT support Surrey', 'website downtime', 'managed IT support UK', 'IT support Aldershot'],
    author: 'Joro Services',
    date: '2026-04-13',
    content: `Most small business owners don't think about downtime until it happens. The website is just there, the emails work, the systems run. And then one morning they don't, and the phone starts ringing with confused customers, leads that have gone elsewhere, and a sinking feeling while you wait for a developer or hosting provider to call you back.

The question isn't whether downtime will happen. It's whether you're prepared for it when it does.

## What Downtime Actually Costs

The headline cost is obvious: every hour your website is down is an hour where potential customers can't find you, can't contact you, and are going to a competitor instead. For an e-commerce business this is a direct revenue loss. For a service business it's lost leads that you may never know you missed.

But there are costs beyond the immediate loss. Search engine ranking suffers when a site is unavailable — Google's crawlers notice. Customer trust erodes when someone goes to your website and gets an error. And if your downtime is caused by a cyberattack, there may be regulatory implications if customer data is involved.

Ransomware attacks against UK businesses have doubled in the past year. When they hit a business with no backups and no recovery plan, the recovery time isn't hours — it's days or weeks, if recovery is possible at all.

## The Difference Between Reactive and Proactive IT Support

Most small businesses use IT support reactively. Something breaks, they call someone, they wait to be fixed. This is the most expensive way to manage IT, and not just in the obvious sense.

Reactive support means no monitoring, so nobody knows there's a problem until it's already affecting the business. It means no patch management, so systems are running outdated software with known vulnerabilities. It means no backup verification, so when the backup is needed it turns out not to have been running properly for weeks.

Proactive IT support works differently. Monitoring tools watch your systems 24/7 and alert before issues become outages. Software patches are managed and applied on a schedule. Backups are tested regularly. Security updates don't get forgotten because someone was busy.

The difference in outcome when something does go wrong is significant. A proactively managed environment detects issues early, has a tested recovery process, and gets back online in minutes rather than hours or days.

## What a Proactive IT Support Plan Should Include

Monitoring and alerting across your website, servers, and network equipment. Managed backups with regular restore tests. Patch management for all operating systems and software. Security monitoring and response. A clear escalation process so you know exactly who to call and what happens next when there's an issue.

At Joro Services, our IT support plans start at £30 per user per month. For that you get proactive monitoring, managed updates, helpdesk support with same-day on-site visits available in Hampshire and Surrey, and a team that knows your systems rather than starting from scratch every time something goes wrong.

## The Business Case Is Simple

A single significant downtime incident — a cyberattack, a hosting failure, a botched update with no rollback plan — typically costs a small business far more than a year of proactive managed IT support. The maths aren't complicated.

The businesses that tend to find this out the hard way are the ones who assumed their hosting provider's basic uptime guarantee was sufficient, or that they'd deal with IT properly once they were bigger.

Don't wait for the incident to understand why prevention matters.

[Talk to us about IT support for your business](/getintouch). We cover Aldershot, Farnborough, Farnham, Fleet, Camberley, Guildford, and the wider Hampshire and Surrey area, with UK-wide support available.`,
  },
  {
    slug: 'free-aws-cost-audit-uk-small-business-findings-2026',
    title: "We Audited 10 UK Small Business AWS Bills for Free. Here's What We Found",
    metaDescription: 'Real findings from 10 free AWS cost audits Joro Services ran for UK small businesses. The waste patterns are consistent — and fixable.',
    category: 'Technical Services',
    tags: ['AWS cost audit', 'cloud cost optimisation', 'AWS UK small business', 'cloud infrastructure Hampshire', 'FinOps UK'],
    author: 'Joro Services',
    date: '2026-04-13',
    content: `We've been offering free AWS cost audits for a while now, and over the last several months we've completed them for 10 UK businesses — ranging from a 5-person startup to a 60-person software company. The bill sizes ranged from about £800/month to £14,000/month.

The patterns are remarkably consistent. The same issues appear across nearly every account regardless of size. Here's what we found.

## Finding 1: Orphaned Resources in Every Single Account

Every account we audited had resources that were no longer serving any active purpose. Terminated EC2 instances that had left behind EBS volumes still incurring storage charges. Old snapshots with no lifecycle policy that had been accumulating for years. S3 buckets from deprecated projects still holding data and paying for storage.

This isn't negligence — it's just how cloud infrastructure grows when there's no regular housekeeping process. AWS never deletes anything you've created unless you tell it to, and when people are busy shipping product, nobody's doing housekeeping.

The average saving from cleanup alone across our audits was 8-12% of the monthly bill.

## Finding 2: Nobody Was Using Reserved Pricing for Stable Workloads

On-demand pricing is what you pay when you haven't committed to anything. It's appropriate for unpredictable or short-lived workloads. For workloads that have been running continuously for more than a year — production databases, application servers, monitoring infrastructure — it's significantly more expensive than the alternatives.

Reserved Instances offer discounts of 30-40% for a one-year commitment. Savings Plans are more flexible and offer similar savings. In 9 out of 10 accounts we audited, the baseline production workload was running entirely on on-demand pricing despite having been running for years with no plans to shut down.

This is one of the highest-leverage changes available and it requires no technical changes to your infrastructure whatsoever. You're simply changing the billing model for resources you're already running.

## Finding 3: Compute Was Over-Provisioned

The typical pattern: someone provisioned an instance size based on expected load from 12-18 months ago. Load either didn't grow as expected, or the workload changed, and nobody revisited the instance sizing.

We looked at CloudWatch CPU and memory utilisation data for every compute instance in each account. The average utilisation was around 15-25% CPU across the fleet. That's money being spent on capacity that's doing nothing.

Right-sizing — moving to smaller instance types or families that better match actual usage — reduced compute costs by 15-25% in every account we looked at. It does require a small amount of testing to confirm performance is unaffected, but it's straightforward.

## Finding 4: No Resource Tagging, So Nobody Knew What Anything Was For

In 7 out of 10 accounts there was no consistent tagging strategy. Resources had no tags, or inconsistent tags, or tags that had been applied to some things and not others years ago.

The consequence is that nobody can attribute cost to a team, a project, or an environment. When you can't see which resources belong to which project, you can't make rational decisions about what to keep and what to cut. The result is that old resources persist because nobody's confident enough to delete them.

A tagging strategy takes a few hours to define and implement going forward. Retrofitting it to existing resources takes longer but is worth doing. Once it's in place, cost attribution becomes trivial and housekeeping becomes a clear, accountable process.

## Finding 5: Data Transfer Costs Were Invisible

Every account had data transfer costs that weren't being monitored or understood. Traffic between availability zones that could be eliminated with architecture changes. Traffic flowing through NAT Gateways that could be reduced with VPC endpoints for AWS services. Cross-region traffic from architectures that hadn't been reviewed since they were initially built.

Data transfer is a small per-GB cost that becomes significant at scale, and because it doesn't show up as a named resource in the AWS console it tends to be ignored until someone looks at it specifically.

## The Average Result

Across the 10 audits, the average identified saving was 22-28% of the monthly bill. Some accounts were higher. None were below 15%.

These aren't theoretical savings. They're changes we documented, prioritised, and helped implement.

If you're spending money on AWS and you haven't had an infrastructure review in the last 12 months, the likelihood is there's meaningful savings sitting in your account right now.

We offer this audit for free. No obligation. If there's nothing to find, we'll tell you that. If there is — and there usually is — we'll show you exactly what it is and what to do about it.

[Book your free AWS cost audit](/getintouch). Based in Aldershot, Hampshire. Working with UK businesses of all sizes.`,
  },
];
