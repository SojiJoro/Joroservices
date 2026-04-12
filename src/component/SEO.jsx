import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.joroservices.org';

/**
 * SEO component that manages document head meta tags and JSON-LD structured data.
 * Compatible with React 19 (no react-helmet dependency).
 * Enhanced for GEO (Generative Engine Optimisation) and AI search visibility.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = 'website',
  ogImage = '/og-image.png',
  jsonLd,
  noIndex = false,
  dateModified,
  speakable = false,
}) {
  const { pathname } = useLocation();
  const canonical = `${BASE_URL}${canonicalPath || pathname}`;

  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to set or create a link tag
    const setLink = (rel, href, attrs = {}) => {
      const selector = Object.entries(attrs)
        .map(([k, v]) => `[${k}="${v}"]`)
        .join('');
      let el = document.querySelector(`link[rel="${rel}"]${selector}`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Standard meta tags
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    if (noIndex) {
      setMeta('name', 'robots', 'noindex, nofollow');
    } else {
      setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    }

    // Date modified (for freshness signals)
    if (dateModified) {
      setMeta('name', 'article:modified_time', dateModified);
    }

    // Canonical link
    setLink('canonical', canonical);

    // Hreflang links
    setLink('alternate', canonical, { hreflang: 'en-GB' });
    setLink('alternate', canonical, { hreflang: 'en' });
    setLink('alternate', canonical, { hreflang: 'x-default' });

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);
    setMeta('property', 'og:image:alt', `${title} - Joro Services`);
    setMeta('property', 'og:site_name', 'Joro Services');
    setMeta('property', 'og:locale', 'en_GB');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:site', '@Joroservices');
    setMeta('name', 'twitter:creator', '@Joroservices');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);
    setMeta('name', 'twitter:image:alt', `${title} - Joro Services`);

    // Geo meta tags for local SEO
    setMeta('name', 'geo.region', 'GB-HAM');
    setMeta('name', 'geo.placename', 'Aldershot');
    setMeta('name', 'geo.position', '51.2483;-0.7589');
    setMeta('name', 'ICBM', '51.2483, -0.7589');

    // JSON-LD structured data
    // Remove any previous JSON-LD from this component
    document.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-jsonld', 'true');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    // Cleanup JSON-LD on unmount
    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach(el => el.remove());
    };
  }, [title, description, keywords, canonical, ogType, ogImage, jsonLd, noIndex, dateModified, speakable]);

  return null;
}
