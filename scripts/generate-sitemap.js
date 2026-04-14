/**
 * Build-time sitemap generator.
 * Produces dist/sitemap.xml with every indexable route,
 * including dynamic routes (blog posts, service details).
 *
 * Run after `vite build`:
 *   node scripts/generate-sitemap.js
 */

import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from '../src/pages/insights/blogData.js';
import { ServiceList } from '../src/pages/serviceData.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const BASE_URL = 'https://joroservices.org';
const today = new Date().toISOString().slice(0, 10);

// Core routes with priority and changefreq hints.
// Matches the Route table in src/App.jsx.
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/getintouch', priority: '0.7', changefreq: 'monthly' },
  { path: '/careers', priority: '0.5', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/insights', priority: '0.8', changefreq: 'weekly' },

  // Top-level service categories
  { path: '/development', priority: '0.8', changefreq: 'monthly' },
  { path: '/digital-marketing', priority: '0.8', changefreq: 'monthly' },
  { path: '/creative-solutions', priority: '0.8', changefreq: 'monthly' },
  { path: '/technical-services', priority: '0.8', changefreq: 'monthly' },

  // Creative Solutions subpages
  { path: '/creative-solutions/website-design', priority: '0.8', changefreq: 'monthly' },
  { path: '/creative-solutions/graphic-design-and-branding', priority: '0.8', changefreq: 'monthly' },
  { path: '/creative-solutions/user-interface-and-experience', priority: '0.8', changefreq: 'monthly' },

  // Development subpages
  { path: '/development/web-development', priority: '0.8', changefreq: 'monthly' },
  { path: '/development/mobile-app-development', priority: '0.8', changefreq: 'monthly' },
  { path: '/development/data-management', priority: '0.8', changefreq: 'monthly' },

  // Digital Marketing subpages
  { path: '/digital-marketing/seo-and-content-strategy', priority: '0.8', changefreq: 'monthly' },
  { path: '/digital-marketing/social-media-management', priority: '0.8', changefreq: 'monthly' },
  { path: '/digital-marketing/ppc-and-online-campaigns', priority: '0.8', changefreq: 'monthly' },

  // Technical Services subpages
  { path: '/technical-services/it-support-and-maintenance', priority: '0.8', changefreq: 'monthly' },
  { path: '/technical-services/cybersecurity', priority: '0.8', changefreq: 'monthly' },
  { path: '/technical-services/cloud-infrastructure', priority: '0.8', changefreq: 'monthly' },

  // Location hubs
  { path: '/locations/aldershot', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/farnborough', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/guildford', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/camberley', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/hampshire', priority: '0.7', changefreq: 'monthly' },
  { path: '/locations/surrey', priority: '0.7', changefreq: 'monthly' },

  // High-value service pages
  { path: '/it-services-care-providers', priority: '0.8', changefreq: 'monthly' },
  { path: '/devops-small-business', priority: '0.8', changefreq: 'monthly' },
  { path: '/fractional-cto', priority: '0.8', changefreq: 'monthly' },

  // Service-location pages
  { path: '/it-support-aldershot', priority: '0.8', changefreq: 'monthly' },
  { path: '/web-design-aldershot', priority: '0.8', changefreq: 'monthly' },
  { path: '/it-support-farnham', priority: '0.8', changefreq: 'monthly' },
  { path: '/web-design-farnham', priority: '0.8', changefreq: 'monthly' },
  { path: '/it-support-fleet', priority: '0.8', changefreq: 'monthly' },
  { path: '/it-support-camberley', priority: '0.8', changefreq: 'monthly' },
  { path: '/web-design-guildford', priority: '0.8', changefreq: 'monthly' },
];

const urls = [...staticRoutes.map(r => ({ ...r, lastmod: today }))];

// Blog posts
for (const post of blogPosts) {
  urls.push({
    path: `/insights/${post.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.date || today,
  });
}

// Service detail pages
for (const service of ServiceList) {
  urls.push({
    path: `/services/${service.id}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: today,
  });
}

const body = urls
  .map(
    (u) => `  <url>
    <loc>${BASE_URL}${u.path}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf-8');
console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
