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
    const routeSchemas: any[] = [];

    // Global Breadcrumb Schema for all pages
    const breadcrumbItems = [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl }
    ];

    if (pathname !== '/') {
      const pathSegments = pathname.split('/').filter(Boolean);
      let currentPath = '';
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": name,
          "item": `${baseUrl}${currentPath}`
        });
      });
    }

    routeSchemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    });

    if (pathname === '/') {
      // FAQ Schema
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

    // Blog Post Data (Mirrored from Blogs.tsx)
    const blogPosts = [
      {
        slug: "scrap-metal-industry-growth",
        title: "Scrap Metal Industry Growth | Ferrous & Non-Ferrous Scrap Supplier in India",
        description: "The global demand for sustainable and cost-effective raw materials has significantly increased the importance of scrap metal in modern industry. Prasmi Steel play a vital role in bridging the gap.",
        date: "2026-04-14"
      },
      {
        slug: "choosing-right-scrap-supplier",
        title: "How to Choose the Right Scrap Metal Supplier | Prasmi Steel Guide",
        description: "Selecting the right scrap supplier is crucial for maintaining production efficiency and product quality. A dependable supplier ensures consistency, proper grading, and timely delivery.",
        date: "2026-03-28"
      },
      {
        slug: "benefits-high-quality-scrap-smelting",
        title: "Benefits of High-Quality Scrap in Smelting Process | Improve Efficiency",
        description: "Using high-quality scrap metal directly impacts the efficiency of smelting processes. Clean and well-graded scrap reduces impurities and improves melting efficiency.",
        date: "2026-03-12"
      },
      {
        slug: "ferrous-vs-non-ferrous-differences",
        title: "Ferrous vs Non-Ferrous Scrap: Key Differences Explained",
        description: "Understand the difference between ferrous and non-ferrous scrap metals and their unique industrial applications. Complete guide by Prasmi Steel experts.",
        date: "2026-02-25"
      },
      {
        slug: "future-of-scrap-metal-sustainability",
        title: "Future of Scrap Metal Industry | Sustainable Metal Recycling Trends",
        description: "Discover how scrap metal recycling supports sustainability and industrial growth. Insights into future trends by Prasmi Steel Private Limited.",
        date: "2026-02-10"
      },
      {
        slug: "global-scrap-metal-trade-trends",
        title: "Global Scrap Metal Trade Trends | Import Export Scrap Business",
        description: "Explore how global scrap trade is evolving with changing demand, logistics, and pricing trends. Insights into the international marketplace.",
        date: "2026-01-22"
      }
    ];

    if (pathname.startsWith('/blogs/')) {
      const slug = pathname.replace('/blogs/', '');
      const post = blogPosts.find(p => p.slug === slug);
      
      if (post) {
        // Article Schema
        routeSchemas.push({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.description,
          "datePublished": post.date,
          "author": {
            "@type": "Organization",
            "name": "Prasmi Steel Private Limited"
          },
          "publisher": {
            "@id": "https://prasmisteel.com/#organization"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}${pathname}`
          }
        });

        // Set Title & Description
        document.title = post.title;
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', post.description);
      }
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

    routeSchemas.forEach(inject);

    // 4. Page Title & Meta Description for Static Routes
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
