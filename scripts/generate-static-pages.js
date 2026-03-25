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

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

// Import pagesSEO data — duplicated here to avoid ESM/CJS issues
const pagesSEO = {
  '/': {
    title: 'Web Design, IT Support & Cloud Services in Aldershot | Joro Services',
    description: 'Joro Services is a full-service digital agency in Aldershot, Hampshire. Web design, IT support, cybersecurity, and cloud infrastructure for local businesses.',
  },
  '/services': {
    title: 'IT Services & Digital Solutions in Hampshire | Joro Services',
    description: 'IT support, web development, cybersecurity, cloud infrastructure, and digital marketing for businesses across Hampshire, Surrey, and the UK.',
  },
  '/about': {
    title: 'About Joro Services | IT & Digital Agency in Aldershot, Hampshire',
    description: 'Joro Services gives small businesses enterprise-level IT, web development, and digital marketing. AWS-certified, GDPR-compliant, based in Aldershot.',
  },
  '/getintouch': {
    title: 'Get a Free Consultation | Joro Services in Aldershot, Hampshire',
    description: 'Book a free consultation with Joro Services for IT support, web development, cybersecurity, or cloud migration. Based in Aldershot. Call 07867 374034.',
  },
  '/careers': {
    title: 'Tech Careers in Hampshire | Joro Services',
    description: 'Join Joro Services. We hire cloud engineers, developers, cybersecurity consultants, and digital marketers. Remote and hybrid roles across the UK.',
  },
  '/creative-solutions': {
    title: 'Website Design, Branding & UI/UX in Hampshire | Joro Services',
    description: 'Professional website design, branding, and UI/UX services for businesses in Aldershot, Farnborough, Guildford, and across Hampshire and Surrey.',
  },
  '/creative-solutions/website-design': {
    title: 'Website Design in Aldershot, Hampshire | Joro Services',
    description: 'Custom website design for businesses in Aldershot and Hampshire. Mobile-first, SEO-friendly sites that turn visitors into customers. From £1,500.',
  },
  '/creative-solutions/graphic-design-and-branding': {
    title: 'Graphic Design & Branding in Aldershot, Hampshire | Joro Services',
    description: 'Logo design, brand guidelines, and marketing materials for businesses in Aldershot and Hampshire. Build a brand identity that stands out locally.',
  },
  '/creative-solutions/user-interface-and-experience': {
    title: 'UI/UX Design in Aldershot, Hampshire | Joro Services',
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
    title: 'Mobile App Development in Aldershot, Hampshire | Joro Services',
    description: 'iOS and Android app development using React Native and Flutter. Cross-platform mobile apps for businesses in Aldershot, Hampshire, and the UK.',
  },
  '/development/data-management': {
    title: 'Data Management & Analytics in Aldershot, Hampshire | Joro Services',
    description: 'Database design, data migration, analytics dashboards, and reporting for businesses in Aldershot and Hampshire. Free data assessment available.',
  },
  '/digital-marketing': {
    title: 'Digital Marketing in Aldershot, Hampshire | Joro Services',
    description: 'SEO, Google Ads, social media management, and content strategy for businesses in Aldershot, Farnborough, and across Hampshire. Free audit available.',
  },
  '/digital-marketing/seo-and-content-strategy': {
    title: 'SEO & Content Strategy in Aldershot, Hampshire | Joro Services',
    description: 'SEO services that get results for Hampshire businesses. Technical audits, keyword-targeted content, and local SEO. Free SEO audit, no lock-in.',
  },
  '/digital-marketing/social-media-management': {
    title: 'Social Media Management in Aldershot, Hampshire | Joro Services',
    description: 'Social media strategy, content creation, and community management for businesses in Aldershot and Hampshire. LinkedIn, Instagram, Facebook, and X.',
  },
  '/digital-marketing/ppc-and-online-campaigns': {
    title: 'PPC & Online Advertising in Aldershot, Hampshire | Joro Services',
    description: 'Google Ads and social media advertising for Hampshire businesses. Transparent reporting, no markup on ad spend. Average 4.2x ROAS across clients.',
  },
  '/technical-services': {
    title: 'Managed IT Services in Aldershot, Hampshire | Joro Services',
    description: 'IT support, cybersecurity, and AWS cloud infrastructure for businesses in Aldershot, Farnborough, Camberley, and across Hampshire and Surrey.',
  },
  '/technical-services/it-support-and-maintenance': {
    title: 'IT Support & Maintenance in Aldershot, Hampshire | Joro Services',
    description: 'Managed IT support for businesses in Aldershot and Hampshire. 24/7 monitoring, helpdesk, and on-site visits. From £30 per user per month.',
  },
  '/technical-services/cybersecurity': {
    title: 'Cybersecurity Services in Aldershot, Hampshire | Joro Services',
    description: 'Cybersecurity for UK small businesses. Security audits, M365 hardening, endpoint protection, and phishing simulations. Free security health check.',
  },
  '/technical-services/cloud-infrastructure': {
    title: 'Cloud Infrastructure & AWS Services in Aldershot, Hampshire | Joro Services',
    description: 'AWS cloud migration, cost optimisation, and managed infrastructure for Hampshire businesses. We save clients 26.6% on average. Free cost audit.',
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
    title: 'Web Development, IT Support & Digital Marketing in Aldershot | Joro Services',
    description: 'Aldershot\'s only full-service digital agency. Web design, IT support, cybersecurity, mobile apps, and cloud solutions for local businesses. Free consultation.',
  },
  '/locations/farnborough': {
    title: 'Web Development, IT Support & Digital Marketing in Farnborough | Joro Services',
    description: 'Web development, IT support, SEO, and digital marketing for Farnborough businesses. Based 3 miles away in Aldershot. Free consultation available.',
  },
  '/locations/guildford': {
    title: 'Web Development, IT Support & Digital Marketing in Guildford | Joro Services',
    description: 'Professional web development, IT support, digital marketing, and cybersecurity for Guildford businesses. Local expertise from Joro Services.',
  },
  '/locations/camberley': {
    title: 'Web Development, IT Support & Digital Marketing in Camberley | Joro Services',
    description: 'Web development, IT support, SEO, and digital marketing for Camberley businesses. Full-service digital solutions in Surrey Heath.',
  },
  '/locations/hampshire': {
    title: 'Web Development, IT Support & Digital Marketing in Hampshire | Joro Services',
    description: 'Expert web development, IT support, SEO, cybersecurity, and digital marketing for businesses across Hampshire. Based in Aldershot, serving the county.',
  },
  '/locations/surrey': {
    title: 'Web Development, IT Support & Digital Marketing in Surrey | Joro Services',
    description: 'Full-service digital agency serving Surrey businesses. Web development, IT support, SEO, cybersecurity, and cloud solutions from Guildford to Camberley.',
  },

  // Service-Location Pages
  '/it-support-aldershot': {
    title: 'IT Support in Aldershot, Hampshire | From £30/User/Month | Joro Services',
    description: 'Managed IT support for Aldershot businesses. Same-day on-site visits, 24/7 monitoring, Microsoft 365 support, and helpdesk. From £30 per user per month.',
  },
  '/web-design-aldershot': {
    title: 'Web Design in Aldershot, Hampshire | From £1,500 | Joro Services',
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
};

const BASE_URL = 'https://joroservices.org';

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

  // Escape ampersands in title for valid HTML
  const safeTitle = seo.title.replace(/&/g, '&amp;');

  return `
    <noscript>
      <div>
        <nav>${breadcrumbHtml}</nav>
        <h1>${safeTitle}</h1>
        <p>${seo.description}</p>

        <h2>Our Services</h2>
        <ul>
          ${serviceLinksHtml}
        </ul>

        <h2>Locations We Serve</h2>
        <ul>
          ${locationLinksHtml}
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
