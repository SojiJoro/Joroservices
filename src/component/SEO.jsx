import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://joroservices.org';

/**
 * SEO component that manages document head meta tags and JSON-LD structured data.
 * Compatible with React 19 (no react-helmet dependency).
 */
export default function SEO({
  title,
  description,
  keywords,
  canonicalPath,
  ogType = 'website',
  ogImage = '/Joro.svg',
  jsonLd,
  noIndex = false,
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

    // Standard meta tags
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    if (noIndex) setMeta('name', 'robots', 'noindex, nofollow');

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);
    setMeta('property', 'og:site_name', 'Joro Services');
    setMeta('property', 'og:locale', 'en_GB');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:site', '@Joroservices');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);

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
  }, [title, description, keywords, canonical, ogType, ogImage, jsonLd, noIndex]);

  return null;
}
