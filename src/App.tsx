import { useState, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { CorporateDetails } from '@/components/sections/CorporateDetails';
import { Footer } from '@/components/sections/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SEO } from '@/lib/SEO';
import { BrandSplash } from '@/components/ui/BrandSplash';

// Lazy load secondary pages
const History = lazy(() => import('@/components/sections/History.tsx'));
const Leadership = lazy(() => import('@/components/sections/Management.tsx'));
const WhatWeDo = lazy(() => import('@/components/sections/WhatWeDo.tsx'));
const Products = lazy(() => import('@/components/sections/Products.tsx').then(m => ({ default: m.Products })));
const Blogs = lazy(() => import('@/components/sections/Blogs.tsx').then(m => ({ default: m.Blogs })));
const BlogPost = lazy(() => import('@/components/sections/BlogPost.tsx').then(m => ({ default: m.BlogPost })));
const Contact = lazy(() => import('@/components/sections/Contact.tsx').then(m => ({ default: m.Contact })));
const WhyChooseUs = lazy(() => import('@/components/sections/WhyChooseUs.tsx'));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#dc2626] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-lazy">
        <About />
      </div>
      <div className="section-lazy">
        <CorporateDetails />
      </div>
    </>
  );
}

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const location = useLocation();
  const hideFooter = location.pathname === '/management' || 
                    location.pathname === '/about' || 
                    location.pathname === '/what-we-do' || 
                    location.pathname === '/why-choose-us' || 
                    location.pathname === '/products' || 
                    location.pathname === '/blogs' ||
                    location.pathname.startsWith('/blogs/') ||
                    location.pathname === '/contact';

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('prasmi_visited');
    if (!hasVisited) {
      setShowSplash(true);
      sessionStorage.setItem('prasmi_visited', 'true');
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about',
      sublinks: [
        { name: 'Our Story', href: '/about' },
        { name: 'Leadership', href: '/management' }
      ]
    },
    { 
      name: 'What We Do', 
      href: '/what-we-do',
      sublinks: [
        { name: 'What We Do', href: '/what-we-do' },
        { name: 'Why Us', href: '/why-choose-us' }
      ]
    },
    { name: 'Products', href: '/products' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      {showSplash && <BrandSplash onComplete={() => setShowSplash(false)} />}
      <ScrollToTop />
      <SEO />
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        navLinks={navLinks} 
      />
      
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<History />} />
            <Route path="/management" element={<Suspense fallback={<PageLoader />}><Leadership /></Suspense>} />
            <Route path="/what-we-do" element={<Suspense fallback={<PageLoader />}><WhatWeDo /></Suspense>} />
            <Route path="/why-choose-us" element={<Suspense fallback={<PageLoader />}><WhyChooseUs /></Suspense>} />
            <Route path="/products" element={<Products />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
