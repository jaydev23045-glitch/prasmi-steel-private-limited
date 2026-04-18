import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO component to dynamically update page metadata like canonical tags.
 */
export function SEO() {
  const { pathname } = useLocation();
  const baseUrl = 'https://prasmisteel.com';

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
        },
        "sameAs": [
          "https://www.linkedin.com/company/prasmi-steel",
          "https://www.facebook.com/prasmisteel",
          "https://www.instagram.com/prasmisteel"
        ]
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

    // 4. Page Title & Meta Description
    const pageTitles: Record<string, string> = {
      '/': 'Prasmi Steel Private Limited | Ferrous, Non-Ferrous & Cast Iron Metal Scrap Supply',
      '/about': 'About Prasmi Steel | Leading Industrial Scrap Supplier',
      '/products': 'Prasmi Steel | Premium Ferrous & Non-Ferrous Catalog',
      '/blogs': 'Prasmi Steel Journal | Industrial Insights & Reports',
      '/contact': 'Contact Prasmi Steel | Global Logistics & Support',
    };

    const pageDescriptions: Record<string, string> = {
      '/': 'Prasmi Steel Private Limited is a global leader in industrial material sourcing, providing a premium supply of ferrous, non-ferrous, and cast iron metal scrap solutions.',
      '/about': 'Learn about Prasmi Steel Private Limited, our industrial heritage, and our commitment to supplying high-quality metal scrap to global partners.',
      '/products': 'Explore the Prasmi Steel material catalog featuring premium ferrous and non-ferrous scrap, including HMS 1 & 2, Manganese Steel, and Aluminum.',
      '/blogs': 'Read industrial insights and market reports on metal scrap recycling, smelting efficiency, and global trade trends from Prasmi Steel experts.',
      '/contact': 'Contact Prasmi Steel Private Limited for global logistics support and inquiries about our ferrous and non-ferrous metal scrap supply chains.',
    };

    if (!pathname.startsWith('/blogs/')) {
      const title = pageTitles[pathname];
      const description = pageDescriptions[pathname];
      
      if (title) document.title = title;
      
      if (description) {
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', description);
        } else {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          metaDesc.setAttribute('content', description);
          document.head.appendChild(metaDesc);
        }

        // Update OG Description
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', description);

        let twDesc = document.querySelector('meta[property="twitter:description"]');
        if (twDesc) twDesc.setAttribute('content', description);
      }

      if (title) {
        // Update OG Title
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        let twTitle = document.querySelector('meta[property="twitter:title"]');
        if (twTitle) twTitle.setAttribute('content', title);
      }

      // Update OG URL
      const currentUrl = `${baseUrl}${pathname}`;
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', currentUrl);

      let twUrl = document.querySelector('meta[property="twitter:url"]');
      if (twUrl) twUrl.setAttribute('content', currentUrl);
    }

  }, [pathname]);

  return null; // This is a utility component, it doesn't render anything
}
