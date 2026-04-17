/**
 * Post-build script that generates route-specific HTML files
 * with baked-in meta tags and noscript content for each page.
 *
 * This ensures crawlers (Google, Bing, AI bots) receive proper
 * meta titles, descriptions, and Open Graph tags even without
 * executing JavaScript.
 *
 * Run after `vite build`: node scripts/generate-static-pages.js
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from '../src/pages/insights/blogData.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

// Static-render SEO. Titles target ≤60 chars, descriptions 140-160 chars.
const pagesSEO = {
  '/': {
    title: 'Joro Services | Digital Agency in Aldershot',
    description: 'Full-service digital agency in Aldershot, Hampshire. Web design, IT support, cybersecurity, and AWS cloud for local businesses. Free consultation.',
  },
  '/services': {
    title: 'IT Services & Digital Solutions in Hampshire | Joro Services',
    description: 'IT support, web development, cybersecurity, cloud infrastructure, and digital marketing for businesses across Hampshire, Surrey, and the UK.',
  },
  '/about': {
    title: 'About Joro Services | IT Agency in Aldershot',
    description: 'Joro Services gives small businesses enterprise-level IT, web development, and digital marketing. AWS-certified, GDPR-compliant, based in Aldershot.',
  },
  '/getintouch': {
    title: 'Free Consultation | Joro Services Aldershot',
    description: 'Book a free consultation with Joro Services for IT support, web development, cybersecurity, or cloud migration. Based in Aldershot. Call 07867 374034.',
  },
  '/careers': {
    title: 'Tech Careers in Hampshire | Joro Services',
    description: 'Join Joro Services. We hire cloud engineers, developers, cybersecurity consultants, and digital marketers. Remote and hybrid roles across the UK.',
  },
  '/creative-solutions': {
    title: 'Website Design, Branding & UI/UX | Joro Services',
    description: 'Website design, branding, and UI/UX services for businesses in Aldershot, Farnborough, Guildford, and across Hampshire and Surrey.',
  },
  '/creative-solutions/website-design': {
    title: 'Website Design in Aldershot, Hampshire | Joro Services',
    description: 'Custom website design for businesses in Aldershot and Hampshire. Mobile-first, SEO-friendly sites that turn visitors into customers. From £1,500.',
  },
  '/creative-solutions/graphic-design-and-branding': {
    title: 'Graphic Design & Branding in Hampshire | Joro Services',
    description: 'Logo design, brand guidelines, and marketing materials for businesses in Aldershot and Hampshire. Build a brand identity that stands out locally.',
  },
  '/creative-solutions/user-interface-and-experience': {
    title: 'UI/UX Design in Hampshire | Joro Services',
    description: 'User interface and experience design for web and mobile apps. Wireframing, prototyping, and usability testing for businesses across Hampshire.',
  },
  '/development': {
    title: 'Software Development in Hampshire | Joro Services',
    description: 'Web apps, mobile apps, and APIs built with React, Next.js, and Node.js. Agile development with post-launch support for UK businesses.',
  },
  '/development/web-development': {
    title: 'Web Development in Aldershot, Hampshire | Joro Services',
    description: 'Custom web development using React and Next.js for businesses in Aldershot and Hampshire. Fast, secure, SEO-friendly sites from £1,500.',
  },
  '/development/mobile-app-development': {
    title: 'Mobile App Development in Hampshire | Joro Services',
    description: 'iOS and Android app development using React Native and Flutter. Cross-platform mobile apps for businesses in Aldershot, Hampshire, and the UK.',
  },
  '/development/data-management': {
    title: 'Data Management & Analytics | Joro Services',
    description: 'Database design, data migration, analytics dashboards, and reporting for businesses in Aldershot and Hampshire. Free data assessment available.',
  },
  '/digital-marketing': {
    title: 'Digital Marketing in Aldershot, Hampshire | Joro Services',
    description: 'SEO, Google Ads, social media management, and content strategy for businesses in Aldershot, Farnborough, and across Hampshire. Free audit available.',
  },
  '/digital-marketing/seo-and-content-strategy': {
    title: 'SEO & Content Strategy in Hampshire | Joro Services',
    description: 'SEO services that get results for Hampshire businesses. Technical audits, keyword-targeted content, and local SEO. Free SEO audit, no lock-in.',
  },
  '/digital-marketing/social-media-management': {
    title: 'Social Media Management in Hampshire | Joro Services',
    description: 'Social media strategy, content creation, and community management for businesses in Aldershot and Hampshire. LinkedIn, Instagram, Facebook, and X.',
  },
  '/digital-marketing/ppc-and-online-campaigns': {
    title: 'PPC & Online Advertising in Hampshire | Joro Services',
    description: 'Google Ads and social media advertising for Hampshire businesses. Transparent reporting, no markup on ad spend. Average 4.2x ROAS across clients.',
  },
  '/technical-services': {
    title: 'Managed IT Services in Aldershot, Hampshire | Joro Services',
    description: 'IT support, cybersecurity, and AWS cloud infrastructure for businesses in Aldershot, Farnborough, Camberley, and across Hampshire and Surrey.',
  },
  '/technical-services/it-support-and-maintenance': {
    title: 'IT Support & Maintenance in Hampshire | Joro Services',
    description: 'Managed IT support for businesses in Aldershot and Hampshire. 24/7 monitoring, helpdesk, and on-site visits. From £30 per user per month.',
  },
  '/technical-services/cybersecurity': {
    title: 'Cybersecurity Services in Hampshire | Joro Services',
    description: 'Cybersecurity for UK small businesses. Security audits, M365 hardening, endpoint protection, and phishing simulations. Free security health check.',
  },
  '/technical-services/cloud-infrastructure': {
    title: 'AWS Cloud Infrastructure in Hampshire | Joro Services',
    description: 'AWS cloud migration, cost optimisation, and managed infrastructure for Hampshire businesses. Clients save 26.6% on average. Free cost audit.',
  },
  '/privacy': {
    title: 'Privacy Policy | Joro Services Ltd',
    description: 'Privacy policy for Joro Services Ltd. How we collect, use, and protect your personal data in compliance with GDPR and UK data protection law.',
  },
  '/terms': {
    title: 'Terms of Service | Joro Services Ltd',
    description: 'Terms of service for Joro Services Ltd. Conditions governing our web development, IT support, and digital marketing services.',
  },

  // General Location Pages
  '/locations/aldershot': {
    title: 'Digital Agency in Aldershot | Joro Services',
    description: 'Aldershot\'s only full-service digital agency. Web design, IT support, cybersecurity, mobile apps, and cloud solutions for local businesses. Free consultation.',
  },
  '/locations/farnborough': {
    title: 'Digital Agency in Farnborough | Joro Services',
    description: 'Web development, IT support, SEO, and digital marketing for Farnborough businesses. Based 3 miles away in Aldershot. Free consultation available.',
  },
  '/locations/guildford': {
    title: 'Digital Agency in Guildford | Joro Services',
    description: 'Professional web development, IT support, digital marketing, and cybersecurity for Guildford businesses. Local expertise from Joro Services.',
  },
  '/locations/camberley': {
    title: 'Digital Agency in Camberley, Surrey | Joro Services',
    description: 'Web development, IT support, SEO, and digital marketing for Camberley businesses. Full-service digital solutions in Surrey Heath.',
  },
  '/locations/hampshire': {
    title: 'Digital Agency in Hampshire | Joro Services',
    description: 'Expert web development, IT support, SEO, cybersecurity, and digital marketing for businesses across Hampshire. Based in Aldershot, serving the county.',
  },
  '/locations/surrey': {
    title: 'Digital Agency in Surrey | Joro Services',
    description: 'Full-service digital agency serving Surrey businesses. Web development, IT support, SEO, cybersecurity, and cloud solutions from Guildford to Camberley.',
  },

  // Service-Location Pages
  '/it-support-aldershot': {
    title: 'IT Support in Aldershot | From £30/User | Joro Services',
    description: 'Managed IT support for Aldershot businesses. Same-day on-site visits, 24/7 monitoring, Microsoft 365 support, and helpdesk. From £30 per user per month.',
  },
  '/web-design-aldershot': {
    title: 'Web Design in Aldershot | From £1,500 | Joro Services',
    description: 'Custom website design for Aldershot businesses. Mobile-first, no templates, sub-2-second load times. Fixed pricing from £1,500. Free consultation.',
  },
  '/it-support-farnham': {
    title: 'IT Support in Farnham, Surrey | Joro Services',
    description: 'IT support for Farnham businesses. Compliance-ready for professional services, EPOS systems for hospitality. 5 miles from our Aldershot base.',
  },
  '/web-design-farnham': {
    title: 'Web Design in Farnham, Surrey | Joro Services',
    description: 'Design-led website creation for Farnham businesses. In-person meetings, e-commerce for boutiques, and mobile-first builds. Based 5 miles away.',
  },
  '/it-support-fleet': {
    title: 'IT Support in Fleet, Hampshire | Joro Services',
    description: 'IT support for Fleet businesses outpacing their current IT. Remote working support, hardware procurement, and cloud migration. 6 miles from Aldershot.',
  },
  '/it-support-camberley': {
    title: 'IT Support in Camberley, Surrey | Joro Services',
    description: 'Proactive IT support for Camberley businesses. Watchmoor Park, Frimley, and Sandhurst covered. Documented IT profiles per client. 7 miles from base.',
  },
  '/web-design-guildford': {
    title: 'Web Design in Guildford, Surrey | Joro Services',
    description: 'Professional web design for Guildford businesses. Same quality as London agencies with lower overheads. Competitive pricing for professional services.',
  },

  // Specialist service pages
  '/fractional-cto': {
    title: 'Fractional CTO Services UK | Joro Services',
    description: 'Senior technical leadership for UK startups and SMBs without the full-time cost. Strategy, architecture, and delivery from £2,000 per month.',
  },
  '/devops-small-business': {
    title: 'DevOps for Small Business UK | Joro Services',
    description: 'CI/CD pipelines, Terraform, Docker, and monitoring for UK small businesses. Enterprise-grade DevOps at SMB pricing. Starting from £1,500.',
  },
  '/it-services-care-providers': {
    title: 'IT Services for UK Care Providers | Joro Services',
    description: 'Web, IT support, and scheduling integrations for UK care agencies. CQC-aware, GDPR-compliant, and built for domiciliary and residential providers.',
  },

  // Blog / Insights index
  '/insights': {
    title: 'Insights & IT News | Joro Services Blog',
    description: 'Practical articles on DevOps, cloud infrastructure, cybersecurity, SEO, and web development for UK small and medium businesses. From the Joro Services team.',
  },
};

// For blog posts, prefer the first clause (split on ":" or "." or "?") when
// the full title would exceed 60 characters. Keeps the author's phrasing
// intact while staying within the SEO-friendly title length.
function shortenPostTitle(title) {
  if (title.length <= 60) return title;
  const clauses = title.split(/[:.?]/).map(s => s.trim()).filter(Boolean);
  for (const clause of clauses) {
    if (clause.length >= 20 && clause.length <= 60) {
      return title.startsWith(clause) && title[clause.length] === '?'
        ? `${clause}?`
        : clause;
    }
  }
  return title;
}

for (const post of blogPosts) {
  const shortTitle = shortenPostTitle(post.title);
  const withSuffix = `${shortTitle} | Joro Services`;
  pagesSEO[`/insights/${post.slug}`] = {
    title: withSuffix.length <= 60 ? withSuffix : shortTitle,
    description: post.metaDescription,
  };
}

const BASE_URL = 'https://www.joroservices.org';

// Navigation links for noscript fallback content
const NAV_LINKS = [
  { href: '/', text: 'Home' },
  { href: '/services', text: 'Services' },
  { href: '/about', text: 'About' },
  { href: '/getintouch', text: 'Contact' },
  { href: '/careers', text: 'Careers' },
];

const SERVICE_LINKS = [
  { href: '/creative-solutions', text: 'Creative Solutions' },
  { href: '/development', text: 'Development' },
  { href: '/digital-marketing', text: 'Digital Marketing' },
  { href: '/technical-services', text: 'Technical Services' },
];

const LOCATION_LINKS = [
  { href: '/locations/aldershot', text: 'Aldershot' },
  { href: '/locations/farnborough', text: 'Farnborough' },
  { href: '/locations/guildford', text: 'Guildford' },
  { href: '/locations/camberley', text: 'Camberley' },
  { href: '/locations/hampshire', text: 'Hampshire' },
  { href: '/locations/surrey', text: 'Surrey' },
];

// Specialist pages included in every noscript so they receive internal links
// from every rendered page (fixes "orphan page" audit findings).
const SPECIALIST_LINKS = [
  { href: '/fractional-cto', text: 'Fractional CTO' },
  { href: '/devops-small-business', text: 'DevOps for Small Business' },
  { href: '/it-services-care-providers', text: 'IT Services for Care Providers' },
  { href: '/insights', text: 'Insights & IT News' },
];

/**
 * Per-page unique noscript body content.
 * This gives crawlers substantial, unique text per page on the first HTML fetch,
 * before any JavaScript renders. Critical for "Crawled - currently not indexed" pages.
 */
const PAGE_CONTENT = {
  '/creative-solutions/user-interface-and-experience': {
    intro: 'We design digital products for businesses in Aldershot, Farnborough, Fleet, Guildford, and across Hampshire. Every screen, every interaction, every step of the user journey gets proper attention. We design around how real people use things, not how we think they should.',
    sections: [
      {
        heading: 'User Research &amp; Personas',
        text: 'We talk to your users, run surveys, and dig into analytics to figure out what they actually need. Then we use that to guide every design choice. Services include user interviews, analytics review, persona development, journey mapping, and competitor UX analysis.',
      },
      {
        heading: 'Wireframing &amp; Prototyping',
        text: 'We sketch out how everything works and build clickable prototypes so you can see it and give feedback before any real development starts. Includes low and high-fidelity wireframes, clickable prototypes, user flow diagrams, and stakeholder review sessions.',
      },
      {
        heading: 'Usability Testing',
        text: 'We test early and often, using A/B tests, heatmaps, and real user sessions to validate designs and improve usability. Includes A/B testing, heatmap analysis, session recordings, and conversion rate analysis.',
      },
      {
        heading: 'Design-to-Development Handoff',
        text: 'We hand off clean, detailed designs with all the assets and notes your developers need to build it right the first time. Includes Figma design files, component specifications, asset exports, and design system setup.',
      },
    ],
    pricing: [
      'UX Audit: Free — Review of your current site or app with quick-win recommendations.',
      'UX Review &amp; Recommendations: From £750 — Full usability audit with detailed report and prioritised fixes.',
      'Full UX/UI Design: From £3,000 — User research, wireframes, prototypes, full visual design, and developer handoff.',
      'Ongoing UX Support: From £500/month — Dedicated design hours, continuous testing, and design system maintenance.',
    ],
    faqs: [
      { q: 'What is the difference between UI and UX design?', a: 'UX (user experience) is about how something works — the flow, the logic, and whether people can complete tasks. UI (user interface) is about how it looks and feels — buttons, colours, typography, and layout. You need both.' },
      { q: 'Do I need UX design for a simple website?', a: 'Even a straightforward business website benefits from UX thinking. Call-to-action placement, phone number visibility, and form length all affect how many enquiries you get.' },
      { q: 'How do you test whether a design works?', a: 'We use heatmaps, session recordings, clickable prototypes tested with real users, and A/B tests on button placement and page layouts.' },
      { q: 'Can you improve the UX of an existing product?', a: 'Yes. We audit your current site or app, identify where users are struggling, and make targeted improvements. Small changes like simplifying checkout can have a big impact on conversions.' },
    ],
    relatedLinks: [
      { href: '/creative-solutions/website-design', text: 'Website Design' },
      { href: '/development/web-development', text: 'Web Development' },
      { href: '/development/mobile-app-development', text: 'Mobile App Development' },
    ],
  },
  '/digital-marketing/seo-and-content-strategy': {
    intro: 'We help businesses across Aldershot, Farnborough, Farnham, Fleet, Camberley, Guildford, and the wider Hampshire area get found on Google. Our SEO specialists handle keyword research, content strategy, technical optimisation, and ongoing performance tracking — so when your customers are searching, they find you, not your competitors.',
    sections: [
      {
        heading: 'SEO Audit &amp; Strategy',
        text: 'We audit your website\'s current SEO performance, including rankings, technical issues, content gaps, and backlink profile. Then we build a strategy that fits your business. Includes technical SEO audit, keyword research, competitor analysis, content gap analysis, and a 6-month SEO roadmap.',
      },
      {
        heading: 'Technical SEO',
        text: 'Site speed, mobile responsiveness, Core Web Vitals, structured data, and crawlability. This is the technical foundation that determines whether Google even considers ranking you. Includes site speed optimisation, mobile audit, schema markup, sitemap and robots.txt configuration, and Core Web Vitals improvements.',
      },
      {
        heading: 'Content Strategy &amp; Creation',
        text: 'Keyword-targeted blog posts, landing pages, and website copy created by specialist content writers who understand both SEO and your industry. Not AI-generated fluff. Real content for real readers. Includes monthly content calendar, keyword-targeted articles, landing page copy, and internal linking strategy.',
      },
      {
        heading: 'Ongoing SEO Management',
        text: 'Monthly optimisation, performance tracking, and strategy adjustments based on real data. You get a clear monthly report showing what we did, what moved, and what is next. Includes ranking reports, Google Analytics and Search Console monitoring, and quarterly strategy reviews.',
      },
    ],
    pricing: [
      'SEO Audit: Free — Technical SEO health check, top 10 keyword opportunities, competitor snapshot. Delivered within 5 business days.',
      'SEO Starter: From £500/month (3-month minimum) — Keyword research, 2 SEO-optimised articles per month, technical fixes, monthly report.',
      'SEO Growth: From £1,000/month (6-month minimum) — Everything in Starter plus 4 articles per month, landing page optimisation, backlink strategy, quarterly review.',
      'SEO Enterprise: From £2,000/month (6-month minimum) — Everything in Growth plus 8+ content pieces, full content calendar, dedicated SEO strategist, monthly call.',
    ],
    faqs: [
      { q: 'How long until we see results?', a: 'Most clients see meaningful ranking improvements within 3-6 months, with compounding results over time. Anyone promising page 1 in 30 days is lying.' },
      { q: 'Do you guarantee rankings?', a: 'No. What we guarantee is a clear strategy, quality content, technical best practices, and transparent reporting. The results follow from doing the right things consistently.' },
      { q: 'Who writes the content?', a: 'Our specialist content writers. Real people who research your industry and write for human readers first, search engines second.' },
      { q: 'Can you work with our existing website?', a: 'Yes. We work with WordPress, React, Webflow, Shopify, and most other platforms.' },
      { q: 'How is Joro different from a pure SEO agency?', a: 'We combine technical infrastructure expertise with SEO strategy. Site speed, server configuration, and Core Web Vitals are infrastructure problems that affect rankings. Most SEO agencies cannot fix them. We can.' },
    ],
    relatedLinks: [
      { href: '/development/web-development', text: 'Web Development' },
      { href: '/digital-marketing/social-media-management', text: 'Social Media Management' },
      { href: '/digital-marketing/ppc-and-online-campaigns', text: 'PPC &amp; Online Campaigns' },
      { href: '/creative-solutions/website-design', text: 'Website Design' },
    ],
  },
  '/creative-solutions': {
    intro: 'Professional website design, branding, and UI/UX services for businesses in Aldershot, Farnborough, Guildford, and across Hampshire and Surrey.',
    sections: [
      { heading: 'Website Design', text: 'Good-looking websites that are easy to use and actually get people to take action.' },
      { heading: 'Graphic Design &amp; Branding', text: 'Build a brand that looks the same everywhere, from your logo and fonts to your colours and marketing materials.' },
      { heading: 'UI/UX Design', text: 'Interfaces that make sense to your users so they stick around and come back.' },
    ],
    relatedLinks: [
      { href: '/creative-solutions/website-design', text: 'Website Design' },
      { href: '/creative-solutions/graphic-design-and-branding', text: 'Graphic Design &amp; Branding' },
      { href: '/creative-solutions/user-interface-and-experience', text: 'UI/UX Design' },
    ],
  },
  '/creative-solutions/website-design': {
    intro: 'Custom website design for businesses in Aldershot and Hampshire. Mobile-first, SEO-friendly sites that turn visitors into customers. From £1,500.',
    sections: [
      { heading: 'Bespoke Design', text: 'Every site is designed from scratch to match your brand. No templates, no page builders.' },
      { heading: 'Mobile-First', text: 'Over 60% of visits are on mobile. We design for phones first, then scale up.' },
      { heading: 'SEO-Friendly', text: 'Every page is optimised for search engines from day one — fast load times, clean code, and proper meta tags.' },
    ],
    relatedLinks: [
      { href: '/creative-solutions/graphic-design-and-branding', text: 'Graphic Design &amp; Branding' },
      { href: '/creative-solutions/user-interface-and-experience', text: 'UI/UX Design' },
      { href: '/development/web-development', text: 'Web Development' },
    ],
  },
  '/creative-solutions/graphic-design-and-branding': {
    intro: 'Logo design, brand guidelines, and marketing materials for businesses in Aldershot and Hampshire. Build a brand identity that stands out locally.',
    sections: [
      { heading: 'Logo Design', text: 'A logo that works across print, web, and social media.' },
      { heading: 'Brand Guidelines', text: 'Colours, fonts, tone of voice, and usage rules so your brand stays consistent.' },
      { heading: 'Marketing Materials', text: 'Business cards, brochures, social media templates, and presentation decks.' },
    ],
    relatedLinks: [
      { href: '/creative-solutions/website-design', text: 'Website Design' },
      { href: '/creative-solutions/user-interface-and-experience', text: 'UI/UX Design' },
    ],
  },
  '/development': {
    intro: 'Web apps, mobile apps, and APIs built with React, Next.js, and Node.js. Agile development with post-launch support for UK businesses.',
    sections: [
      { heading: 'Web Development', text: 'Custom web applications using React and Next.js for businesses in Aldershot and Hampshire.' },
      { heading: 'Mobile App Development', text: 'iOS and Android app development using React Native and Flutter.' },
      { heading: 'Data Management', text: 'Database design, data migration, analytics dashboards, and reporting.' },
    ],
    relatedLinks: [
      { href: '/development/web-development', text: 'Web Development' },
      { href: '/development/mobile-app-development', text: 'Mobile App Development' },
      { href: '/development/data-management', text: 'Data Management' },
    ],
  },
  '/development/web-development': {
    intro: 'Custom web development using React and Next.js for businesses in Aldershot and Hampshire. Fast, secure, SEO-friendly sites from £1,500.',
    sections: [
      { heading: 'React &amp; Next.js', text: 'Modern web apps with server-side rendering, fast page loads, and great SEO.' },
      { heading: 'E-commerce', text: 'Online stores with Shopify, WooCommerce, or custom checkout flows.' },
      { heading: 'Post-Launch Support', text: 'Ongoing maintenance, hosting, and updates after your site goes live.' },
    ],
    relatedLinks: [
      { href: '/creative-solutions/website-design', text: 'Website Design' },
      { href: '/development/mobile-app-development', text: 'Mobile App Development' },
    ],
  },
  '/development/mobile-app-development': {
    intro: 'iOS and Android app development using React Native and Flutter. Cross-platform mobile apps for businesses in Aldershot, Hampshire, and the UK.',
    sections: [
      { heading: 'Cross-Platform', text: 'One codebase for iOS and Android using React Native or Flutter.' },
      { heading: 'MVP Development', text: 'Launch fast with a minimum viable product, then iterate based on user feedback.' },
    ],
    relatedLinks: [
      { href: '/development/web-development', text: 'Web Development' },
      { href: '/creative-solutions/user-interface-and-experience', text: 'UI/UX Design' },
    ],
  },
  '/development/data-management': {
    intro: 'Database design, data migration, analytics dashboards, and reporting for businesses in Aldershot and Hampshire. Free data assessment available.',
    sections: [
      { heading: 'Database Design', text: 'Relational and NoSQL database architecture for scalable applications.' },
      { heading: 'Data Migration', text: 'Safe migration of data between systems, platforms, and cloud providers.' },
      { heading: 'Analytics &amp; Reporting', text: 'Dashboards and automated reporting with Power BI, custom tools, or cloud-native solutions.' },
    ],
    relatedLinks: [
      { href: '/development/web-development', text: 'Web Development' },
      { href: '/technical-services/cloud-infrastructure', text: 'Cloud Infrastructure' },
    ],
  },
  '/digital-marketing': {
    intro: 'SEO, Google Ads, social media management, and content strategy for businesses in Aldershot, Farnborough, and across Hampshire. Free audit available.',
    sections: [
      { heading: 'SEO &amp; Content Strategy', text: 'Get found on Google with technical audits, keyword-targeted content, and local SEO.' },
      { heading: 'Social Media Management', text: 'Strategy, content creation, and community management across LinkedIn, Instagram, Facebook, and X.' },
      { heading: 'PPC &amp; Online Campaigns', text: 'Google Ads and social media advertising with transparent reporting.' },
    ],
    relatedLinks: [
      { href: '/digital-marketing/seo-and-content-strategy', text: 'SEO &amp; Content Strategy' },
      { href: '/digital-marketing/social-media-management', text: 'Social Media Management' },
      { href: '/digital-marketing/ppc-and-online-campaigns', text: 'PPC &amp; Online Campaigns' },
    ],
  },
  '/digital-marketing/social-media-management': {
    intro: 'Social media strategy, content creation, and community management for businesses in Aldershot and Hampshire. LinkedIn, Instagram, Facebook, and X.',
    sections: [
      { heading: 'Strategy', text: 'Platform-specific strategies aligned to your business goals and audience.' },
      { heading: 'Content Creation', text: 'Graphics, copy, and video content tailored for each social platform.' },
      { heading: 'Community Management', text: 'Responding to comments, messages, and reviews to build trust and engagement.' },
    ],
    relatedLinks: [
      { href: '/digital-marketing/seo-and-content-strategy', text: 'SEO &amp; Content Strategy' },
      { href: '/digital-marketing/ppc-and-online-campaigns', text: 'PPC &amp; Online Campaigns' },
    ],
  },
  '/digital-marketing/ppc-and-online-campaigns': {
    intro: 'Google Ads and social media advertising for Hampshire businesses. Transparent reporting, no markup on ad spend. Average 4.2x ROAS across clients.',
    sections: [
      { heading: 'Google Ads', text: 'Search, display, and shopping campaigns targeted at high-intent keywords.' },
      { heading: 'Social Advertising', text: 'Facebook, Instagram, and LinkedIn ad campaigns for brand awareness and lead generation.' },
      { heading: 'Transparent Reporting', text: 'Monthly reports showing spend, impressions, clicks, conversions, and ROAS. No hidden fees.' },
    ],
    relatedLinks: [
      { href: '/digital-marketing/seo-and-content-strategy', text: 'SEO &amp; Content Strategy' },
      { href: '/digital-marketing/social-media-management', text: 'Social Media Management' },
    ],
  },
  '/technical-services': {
    intro: 'IT support, cybersecurity, and AWS cloud infrastructure for businesses in Aldershot, Farnborough, Camberley, and across Hampshire and Surrey.',
    sections: [
      { heading: 'IT Support &amp; Maintenance', text: 'Managed IT support with 24/7 monitoring, helpdesk, and on-site visits from £30/user/month.' },
      { heading: 'Cybersecurity', text: 'Security audits, M365 hardening, endpoint protection, and phishing simulations.' },
      { heading: 'Cloud Infrastructure', text: 'AWS cloud migration, cost optimisation, and managed infrastructure.' },
    ],
    relatedLinks: [
      { href: '/technical-services/it-support-and-maintenance', text: 'IT Support &amp; Maintenance' },
      { href: '/technical-services/cybersecurity', text: 'Cybersecurity' },
      { href: '/technical-services/cloud-infrastructure', text: 'Cloud Infrastructure' },
    ],
  },
  '/technical-services/it-support-and-maintenance': {
    intro: 'Managed IT support for businesses in Aldershot and Hampshire. 24/7 monitoring, helpdesk, and on-site visits. From £30 per user per month.',
    sections: [
      { heading: 'Proactive Monitoring', text: '24/7 monitoring of your systems to catch and fix issues before they cause downtime.' },
      { heading: 'Helpdesk', text: 'Responsive helpdesk support for your team via phone, email, or remote desktop.' },
      { heading: 'On-Site Visits', text: 'Same-day on-site visits for Aldershot businesses when remote support is not enough.' },
    ],
    relatedLinks: [
      { href: '/technical-services/cybersecurity', text: 'Cybersecurity' },
      { href: '/technical-services/cloud-infrastructure', text: 'Cloud Infrastructure' },
    ],
  },
  '/technical-services/cybersecurity': {
    intro: 'Cybersecurity for UK small businesses. Security audits, M365 hardening, endpoint protection, and phishing simulations. Free security health check.',
    sections: [
      { heading: 'Security Audits', text: 'Comprehensive assessment of your IT security posture with actionable recommendations.' },
      { heading: 'Microsoft 365 Hardening', text: 'Securing your M365 environment with MFA, conditional access, and data loss prevention.' },
      { heading: 'Endpoint Protection', text: 'Next-gen antivirus and endpoint detection for all devices in your organisation.' },
    ],
    relatedLinks: [
      { href: '/technical-services/it-support-and-maintenance', text: 'IT Support &amp; Maintenance' },
      { href: '/technical-services/cloud-infrastructure', text: 'Cloud Infrastructure' },
    ],
  },
  '/technical-services/cloud-infrastructure': {
    intro: 'AWS cloud migration, cost optimisation, and managed infrastructure for Hampshire businesses. We save clients 26.6% on average. Free cost audit.',
    sections: [
      { heading: 'Cloud Migration', text: 'Plan and execute your move to AWS with minimal disruption.' },
      { heading: 'Cost Optimisation', text: 'We review your AWS spend and implement savings. Average client saving: 26.6%.' },
      { heading: 'Managed Infrastructure', text: 'Ongoing management, monitoring, and scaling of your cloud environment.' },
    ],
    relatedLinks: [
      { href: '/technical-services/it-support-and-maintenance', text: 'IT Support &amp; Maintenance' },
      { href: '/technical-services/cybersecurity', text: 'Cybersecurity' },
    ],
  },
  '/about': {
    intro: 'Joro Services gives small businesses enterprise-level IT, web development, and digital marketing. AWS-certified, GDPR-compliant, based in Aldershot, Hampshire.',
    sections: [
      { heading: 'Who We Are', text: 'Joro Services Ltd is a UK-registered digital agency (Company No. 14079588) founded in April 2022. We combine technical infrastructure expertise with creative and marketing services.' },
      { heading: 'What We Do', text: 'Web development, IT support, cybersecurity, cloud infrastructure, digital marketing, SEO, mobile app development, and UI/UX design — all from one team.' },
    ],
    relatedLinks: [
      { href: '/services', text: 'Our Services' },
      { href: '/getintouch', text: 'Get in Touch' },
      { href: '/careers', text: 'Careers' },
    ],
  },
  '/services': {
    intro: 'IT support, web development, cybersecurity, cloud infrastructure, and digital marketing for businesses across Hampshire, Surrey, and the UK.',
    sections: [
      { heading: 'Creative Solutions', text: 'Website design, graphic design and branding, and UI/UX design.' },
      { heading: 'Development', text: 'Web development, mobile app development, and data management.' },
      { heading: 'Digital Marketing', text: 'SEO and content strategy, social media management, and PPC advertising.' },
      { heading: 'Technical Services', text: 'IT support and maintenance, cybersecurity, and cloud infrastructure.' },
    ],
    relatedLinks: [
      { href: '/creative-solutions', text: 'Creative Solutions' },
      { href: '/development', text: 'Development' },
      { href: '/digital-marketing', text: 'Digital Marketing' },
      { href: '/technical-services', text: 'Technical Services' },
    ],
  },
  '/getintouch': {
    intro: 'Book a free consultation with Joro Services for IT support, web development, cybersecurity, or cloud migration. Based in Aldershot. Call 07867 374034.',
    sections: [],
    relatedLinks: [
      { href: '/services', text: 'Our Services' },
      { href: '/about', text: 'About Us' },
    ],
  },
  '/careers': {
    intro: 'Join Joro Services. We hire cloud engineers, developers, cybersecurity consultants, and digital marketers. Remote and hybrid roles across the UK.',
    sections: [],
    relatedLinks: [
      { href: '/about', text: 'About Us' },
      { href: '/getintouch', text: 'Get in Touch' },
    ],
  },
  '/privacy': {
    intro: 'Privacy policy for Joro Services Ltd. How we collect, use, and protect your personal data in compliance with GDPR and UK data protection law.',
    sections: [],
    relatedLinks: [
      { href: '/terms', text: 'Terms of Service' },
    ],
  },
  '/terms': {
    intro: 'Terms of service for Joro Services Ltd. Conditions governing our web development, IT support, and digital marketing services.',
    sections: [],
    relatedLinks: [
      { href: '/privacy', text: 'Privacy Policy' },
    ],
  },
};

/**
 * Build breadcrumb trail for a route.
 */
function buildBreadcrumbs(route) {
  const parts = route.split('/').filter(Boolean);
  const crumbs = [{ href: '/', text: 'Home' }];
  let path = '';
  for (const part of parts) {
    path += '/' + part;
    const label = part
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    crumbs.push({ href: path, text: label });
  }
  return crumbs;
}

/**
 * Generate route-specific noscript HTML so crawlers see unique content per page.
 * Uses PAGE_CONTENT for rich, page-specific body content that helps Google
 * assess page quality on its first (pre-render) crawl pass.
 */
function generateNoscript(route, seo) {
  const breadcrumbs = buildBreadcrumbs(route);
  const breadcrumbHtml = breadcrumbs
    .map((c, i) => i < breadcrumbs.length - 1
      ? `<a href="${c.href}">${c.text}</a>`
      : `<span>${c.text}</span>`)
    .join(' &gt; ');

  const navHtml = NAV_LINKS
    .map(l => `<a href="${l.href}">${l.text}</a>`)
    .join(' | ');

  const serviceLinksHtml = SERVICE_LINKS
    .map(l => `<li><a href="${l.href}">${l.text}</a></li>`)
    .join('\n          ');

  const locationLinksHtml = LOCATION_LINKS
    .map(l => `<li><a href="${l.href}">${l.text}</a></li>`)
    .join('\n          ');

  const specialistLinksHtml = SPECIALIST_LINKS
    .filter(l => l.href !== route)
    .map(l => `<li><a href="${l.href}">${l.text.replace(/&/g, '&amp;')}</a></li>`)
    .join('\n          ');

  // Escape ampersands in title for valid HTML
  const safeTitle = seo.title.replace(/&/g, '&amp;');

  // Build page-specific content sections
  const pageContent = PAGE_CONTENT[route];
  let pageSpecificHtml = '';

  if (pageContent) {
    // Intro paragraph
    if (pageContent.intro) {
      pageSpecificHtml += `\n        <p>${pageContent.intro}</p>`;
    }

    // Service/content sections
    if (pageContent.sections && pageContent.sections.length > 0) {
      pageSpecificHtml += `\n\n        <h2>What We Offer</h2>`;
      for (const section of pageContent.sections) {
        pageSpecificHtml += `\n        <h3>${section.heading}</h3>`;
        pageSpecificHtml += `\n        <p>${section.text}</p>`;
      }
    }

    // Pricing
    if (pageContent.pricing && pageContent.pricing.length > 0) {
      pageSpecificHtml += `\n\n        <h2>Pricing</h2>\n        <ul>`;
      for (const tier of pageContent.pricing) {
        pageSpecificHtml += `\n          <li>${tier}</li>`;
      }
      pageSpecificHtml += `\n        </ul>`;
    }

    // FAQs
    if (pageContent.faqs && pageContent.faqs.length > 0) {
      pageSpecificHtml += `\n\n        <h2>Frequently Asked Questions</h2>`;
      for (const faq of pageContent.faqs) {
        pageSpecificHtml += `\n        <h3>${faq.q}</h3>`;
        pageSpecificHtml += `\n        <p>${faq.a}</p>`;
      }
    }

    // Related links
    if (pageContent.relatedLinks && pageContent.relatedLinks.length > 0) {
      pageSpecificHtml += `\n\n        <h2>Related Services</h2>\n        <ul>`;
      for (const link of pageContent.relatedLinks) {
        pageSpecificHtml += `\n          <li><a href="${link.href}">${link.text}</a></li>`;
      }
      pageSpecificHtml += `\n        </ul>`;
    }
  }

  return `
    <noscript>
      <div>
        <nav>${breadcrumbHtml}</nav>
        <h1>${safeTitle}</h1>
        <p>${seo.description}</p>
        ${pageSpecificHtml}

        <h2>Our Services</h2>
        <ul>
          ${serviceLinksHtml}
        </ul>

        <h2>Locations We Serve</h2>
        <ul>
          ${locationLinksHtml}
        </ul>

        <h2>Specialist Services</h2>
        <ul>
          ${specialistLinksHtml}
        </ul>

        <h2>Contact Us</h2>
        <p>Phone: +44 7867 374034 | Email: info@joroservices.org</p>
        <p><a href="/getintouch">Get a Free Consultation</a></p>

        <nav>${navHtml}</nav>
      </div>
    </noscript>`;
}

function generatePage(route, seo, templateHtml) {
  let html = templateHtml;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${seo.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${seo.description}"`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${BASE_URL}${route === '/' ? '/' : route}"`
  );

  // Replace hreflang links
  html = html.replace(
    /(<link rel="alternate" hreflang="en-GB" href=")[^"]*(")/,
    `$1${BASE_URL}${route === '/' ? '/' : route}$2`
  );
  html = html.replace(
    /(<link rel="alternate" hreflang="en" href=")[^"]*(")/,
    `$1${BASE_URL}${route === '/' ? '/' : route}$2`
  );
  html = html.replace(
    /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/,
    `$1${BASE_URL}${route === '/' ? '/' : route}$2`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${seo.title}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${seo.description}"`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${BASE_URL}${route === '/' ? '/' : route}"`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${seo.title}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${seo.description}"`
  );

  // Replace noscript content with route-specific fallback
  html = html.replace(
    /<noscript>[\s\S]*?<\/noscript>/,
    generateNoscript(route, seo)
  );

  return html;
}

// Main
const templatePath = join(distDir, 'index.html');
if (!existsSync(templatePath)) {
  console.error('dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}

const templateHtml = readFileSync(templatePath, 'utf-8');
let pagesCreated = 0;

for (const [route, seo] of Object.entries(pagesSEO)) {
  if (route === '/') continue; // homepage already has correct meta

  const html = generatePage(route, seo, templateHtml);
  const routePath = route.endsWith('/') ? route : route;
  const dirPath = join(distDir, routePath);

  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }

  writeFileSync(join(dirPath, 'index.html'), html, 'utf-8');
  pagesCreated++;
}

console.log(`Generated ${pagesCreated} static HTML pages with route-specific meta tags.`);
