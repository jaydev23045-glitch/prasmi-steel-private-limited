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
    const normalizedPath = pathname === '/' ? '' : pathname.replace(/\/+$/, '');
    const canonicalUrl = `${baseUrl}${normalizedPath}`;

    // 1. Canonical Tag
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute('href', canonicalUrl);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      document.head.appendChild(link);
    }

    // 2. Hreflang Tags
    const languages = [
      { code: 'en', href: canonicalUrl },
      { code: 'x-default', href: canonicalUrl }
    ];

    languages.forEach(lang => {
      let tag: HTMLLinkElement | null = document.querySelector(`link[hreflang='${lang.code}']`);
      if (tag) {
        tag.setAttribute('href', lang.href);
      } else {
        tag = document.createElement('link');
        tag.setAttribute('rel', 'alternate');
        tag.setAttribute('hreflang', lang.code);
        tag.setAttribute('href', lang.href);
        document.head.appendChild(tag);
      }
    });

    document.documentElement.lang = 'en';

    // 3. Structured Data (JSON-LD)
    const baseSchemas = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Prasmi Steel Private Limited",
        "url": baseUrl,
        "logo": `${baseUrl}/favicon.png`,
        "description": "Leading global supplier of high-quality ferrous and non-ferrous metal scrap solutions.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": "+91-9586633799",
          "email": "prasmisteel@gmail.com"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "name": "Prasmi Steel",
        "url": baseUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ];

    const routeSchemas: any[] = [];

    if (pathname === '/') {
      routeSchemas.push({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Prasmi Steel Private Limited",
        "image": `${baseUrl}/favicon.png`,
        "@id": `${baseUrl}/#localbusiness`,
        "url": baseUrl,
        "telephone": "+919586633799",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "VISHAL INDUSTRIAL, PLOT NO. 16, KOTDA SANGANI, Piplana",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "postalCode": "360020",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 22.0945,
          "longitude": 70.8351
        }
      });

      // FAQ Schema (Moved from component to here for central management)
      routeSchemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What international standards define your ferrous scrap grading?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our ferrous scrap is graded strictly according to ISRI guidelines. HMS 1 is 1/4 inch+ thickness, while HMS 2 is 1/8 inch+."
            }
          },
          {
            "@type": "Question",
            "name": "How do you manage chemical composition verification?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We utilize advanced segregation and cleaning protocols, ensuring high metallic yield for smelting operations."
            }
          }
        ]
      });
    }

    if (pathname === '/products') {
      routeSchemas.push({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Prasmi Steel Material Catalog",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "HMS 1 & 2" },
          { "@type": "ListItem", "position": 2, "name": "Rotor-Drum / Diskbreak Scrap" },
          { "@type": "ListItem", "position": 3, "name": "Manganese Steel" },
          { "@type": "ListItem", "position": 4, "name": "Aluminum Extrusion" }
        ]
      });
    }

    // Clean up only our managed scripts
    document.querySelectorAll('script[data-seo-managed]').forEach(el => el.remove());

    const inject = (data: any) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-managed', 'true');
      script.text = JSON.stringify(data);
      document.head.appendChild(script);
    };

    [...baseSchemas, ...routeSchemas].forEach(inject);

    // 4. Page Title
    const pageTitles: Record<string, string> = {
      '/': 'Prasmi Steel | Global Ferrous & Non-Ferrous Scrap Supplier',
      '/about': 'About Prasmi Steel | Leading Industrial Scrap Supplier',
      '/products': 'Prasmi Steel | Premium Ferrous & Non-Ferrous Catalog',
      '/blogs': 'Prasmi Steel Journal | Industrial Insights & Reports',
      '/contact': 'Contact Prasmi Steel | Global Logistics & Support',
    };

    if (!pathname.startsWith('/blogs/')) {
      document.title = pageTitles[pathname] || document.title;
    }

  }, [pathname]);

  return null; // This is a utility component, it doesn't render anything
}
