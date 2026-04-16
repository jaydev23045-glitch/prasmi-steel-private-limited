import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO component to dynamically update page metadata like canonical tags.
 */
export function SEO() {
  const { pathname } = useLocation();
  const baseUrl = 'https://www.prasmisteel.com';

  useEffect(() => {
    // Construct the canonical URL
    // Remove trailing slash if it exists (except for the root)
    const normalizedPath = pathname === '/' ? '' : pathname.replace(/\/+$/, '');
    const canonicalUrl = `${baseUrl}${normalizedPath}`;

    // Find or create the canonical link tag
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    
    if (link) {
      link.setAttribute('href', canonicalUrl);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      document.head.appendChild(link);
    }

    // Set Hreflang tags (en and x-default)
    const languages = [
      { code: 'en', href: canonicalUrl },
      { code: 'x-default', href: canonicalUrl }
    ];

    languages.forEach(lang => {
      let hreflangTag: HTMLLinkElement | null = document.querySelector(`link[hreflang='${lang.code}']`);
      if (hreflangTag) {
        hreflangTag.setAttribute('href', lang.href);
      } else {
        hreflangTag = document.createElement('link');
        hreflangTag.setAttribute('rel', 'alternate');
        hreflangTag.setAttribute('hreflang', lang.code);
        hreflangTag.setAttribute('href', lang.href);
        document.head.appendChild(hreflangTag);
      }
    });

    // Specifically set the html lang attribute
    document.documentElement.lang = 'en';

    // Structured Data (JSON-LD)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Prasmi Steel Private Limited",
      "url": baseUrl,
      "logo": `${baseUrl}/favicon.png`,
      "description": "Leading global supplier of high-quality ferrous and non-ferrous metal scrap solutions.",
      "sameAs": [
        "https://www.linkedin.com/company/prasmi-steel"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "business@prasmisteel.com"
      }
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Prasmi Steel",
      "url": baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${baseUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };

    // Clean up old scripts first
    document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
      // Keep only those not handled by specific components (like Article)
      if (!script.id.includes('dynamic-article')) {
        script.remove();
      }
    });

    const injectSchema = (data: any, id?: string) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      if (id) script.id = id;
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    };

    injectSchema(organizationSchema, 'schema-org');
    injectSchema(websiteSchema, 'schema-website');

    // Update Page Title based on route (optional but good for UX)
    const pageTitles: Record<string, string> = {
      '/': 'Prasmi Steel | Global Ferrous & Non-Ferrous Scrap Supplier',
      '/about': 'About Prasmi Steel | Leading Industrial Scrap Supplier',
      '/products': 'Prasmi Steel | Premium Ferrous & Non-Ferrous Catalog',
      '/blogs': 'Prasmi Steel Journal | Industrial Insights & Reports',
      '/contact': 'Contact Prasmi Steel | Global Logistics & Support',
    };

    // Handle dynamic blog post titles if possible, otherwise use a default
    if (pathname.startsWith('/blogs/')) {
        // We could extract the slug and capitalize it, but for now we'll use a generic title
        // unless we want to pass titles as props. For simplicity, we'll use the record or a fallback.
        document.title = 'Blog Detail | Prasmi Steel';
    } else {
        document.title = pageTitles[pathname] || document.title;
    }

  }, [pathname]);

  return null; // This is a utility component, it doesn't render anything
}
