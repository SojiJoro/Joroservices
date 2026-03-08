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

// Import pagesSEO data
const pagesSEO = {
  '/': {
    title: 'Joro Services | Web Development, Digital Marketing & IT Solutions in Aldershot, Hampshire',
    description: 'Joro Services Ltd delivers expert web development, digital marketing, SEO, mobile app development, UI/UX design, cybersecurity, and IT support for businesses in Aldershot, Hampshire, and across the UK. Free consultation available.',
  },
  '/services': {
    title: 'Our Services | Web Development, Marketing, IT & Design | Joro Services Aldershot',
    description: 'Explore our full range of digital services including web development, SEO, PPC, social media marketing, mobile apps, UI/UX design, IT support, cybersecurity, and cloud solutions. Serving Aldershot, Hampshire, and UK-wide.',
  },
  '/about': {
    title: 'About Joro Services | Digital Agency in Aldershot & London | Est. 2022',
    description: 'Learn about Joro Services Ltd, a professional digital agency providing web development, digital marketing, IT support, and creative solutions to businesses in Aldershot, Hampshire, London, and across the UK since 2022.',
  },
  '/getintouch': {
    title: 'Contact Joro Services | Free Consultation | Aldershot, Hampshire',
    description: 'Get in touch with Joro Services for a free consultation on web development, digital marketing, IT support, or any digital project. Based in Aldershot, Hampshire, serving clients UK-wide. Call 07345 019824.',
  },
  '/careers': {
    title: 'Careers at Joro Services | Digital & IT Jobs in Aldershot, Hampshire',
    description: 'Join the Joro Services team. We are hiring talented developers, designers, marketers, and IT professionals in Aldershot, Hampshire.',
  },
  '/creative-solutions': {
    title: 'Creative Solutions | Website Design, Branding & UI/UX | Joro Services Aldershot',
    description: 'Professional website design, graphic design, branding, and UI/UX services in Aldershot, Hampshire.',
  },
  '/creative-solutions/website-design': {
    title: 'Website Design Services in Aldershot, Hampshire | Joro Services',
    description: 'Professional, responsive website design services in Aldershot and Hampshire. We build beautiful, fast-loading websites that rank on Google and convert visitors into leads.',
  },
  '/creative-solutions/graphic-design-and-branding': {
    title: 'Graphic Design & Branding in Aldershot, Hampshire | Joro Services',
    description: 'Expert graphic design and branding services in Aldershot, Hampshire. From logo design to full brand identity.',
  },
  '/creative-solutions/user-interface-and-experience': {
    title: 'UI/UX Design Services in Aldershot, Hampshire | Joro Services',
    description: 'User interface and user experience design services in Aldershot, Hampshire.',
  },
  '/development': {
    title: 'Software Development | Web & Mobile Apps | Joro Services Aldershot',
    description: 'Expert web development, mobile app development, and data management services in Aldershot, Hampshire.',
  },
  '/development/web-development': {
    title: 'Web Development Services in Aldershot, Hampshire | Joro Services',
    description: 'Custom web development services in Aldershot and Hampshire. We build fast, secure, SEO-optimised websites and web applications using React, Next.js, and modern technologies.',
  },
  '/development/mobile-app-development': {
    title: 'Mobile App Development in Aldershot, Hampshire | Joro Services',
    description: 'Professional iOS and Android mobile app development in Aldershot, Hampshire. React Native and Flutter expertise.',
  },
  '/development/data-management': {
    title: 'Data Management & Analytics in Aldershot, Hampshire | Joro Services',
    description: 'Data management, database design, and analytics services in Aldershot, Hampshire.',
  },
  '/digital-marketing': {
    title: 'Digital Marketing Services | SEO, PPC & Social Media | Joro Services Aldershot',
    description: 'Results-driven digital marketing services in Aldershot, Hampshire. SEO, PPC advertising, social media management, and content strategy.',
  },
  '/digital-marketing/seo-and-content-strategy': {
    title: 'SEO & Content Strategy Services in Aldershot, Hampshire | Joro Services',
    description: 'Professional SEO and content strategy services in Aldershot, Hampshire. We improve your Google rankings with technical SEO, local SEO, content marketing, and link building.',
  },
  '/digital-marketing/social-media-management': {
    title: 'Social Media Management in Aldershot, Hampshire | Joro Services',
    description: 'Expert social media management services in Aldershot, Hampshire.',
  },
  '/digital-marketing/ppc-and-online-campaigns': {
    title: 'PPC & Online Advertising in Aldershot, Hampshire | Joro Services',
    description: 'Professional PPC and online campaign management in Aldershot, Hampshire.',
  },
  '/technical-services': {
    title: 'IT Support, Cybersecurity & Cloud Services | Joro Services Aldershot',
    description: 'Professional IT support, cybersecurity, and cloud infrastructure services in Aldershot, Hampshire.',
  },
  '/technical-services/it-support-and-maintenance': {
    title: 'IT Support & Maintenance in Aldershot, Hampshire | Joro Services',
    description: 'Reliable IT support and maintenance services in Aldershot, Hampshire. From helpdesk support to proactive monitoring and maintenance.',
  },
  '/technical-services/cybersecurity': {
    title: 'Cybersecurity Services in Aldershot, Hampshire | Joro Services',
    description: 'Comprehensive cybersecurity services in Aldershot, Hampshire. Protect your business from cyber threats.',
  },
  '/technical-services/cloud-infrastructure': {
    title: 'Cloud Infrastructure & Migration in Aldershot, Hampshire | Joro Services',
    description: 'Expert cloud infrastructure and migration services in Aldershot, Hampshire. AWS, Azure, and Google Cloud solutions.',
  },
  '/privacy': {
    title: 'Privacy Policy | Joro Services Ltd',
    description: 'Read the privacy policy of Joro Services Ltd.',
  },
  '/terms': {
    title: 'Terms of Service | Joro Services Ltd',
    description: 'Review the terms of service for Joro Services Ltd.',
  },
};

const BASE_URL = 'https://joroservices.org';

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
