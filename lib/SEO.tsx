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

    // Update Page Title based on route (optional but good for UX)
    const pageTitles: Record<string, string> = {
      '/': 'Prasmi Steel Private Limited | A Leading Supplier of Ferrous & Non-Ferrous Scrap',
      '/about': 'About Us | Prasmi Steel Private Limited',
      '/products': 'Our Products | Ferrous & Non-Ferrous Scrap',
      '/blogs': 'Industrial Insights | Prasmi Steel Journal',
      '/contact': 'Contact Us | Prasmi Steel Private Limited',
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
