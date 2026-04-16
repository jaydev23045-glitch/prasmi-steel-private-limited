import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { CorporateDetails } from '@/components/sections/CorporateDetails';
import { GlobalPartners } from '@/components/sections/GlobalPartners';
import { Footer } from '@/components/sections/Footer';

// Lazy load secondary pages
const History = lazy(() => import('@/components/sections/History').then(m => ({ default: m.History })));
const Products = lazy(() => import('@/components/sections/Products').then(m => ({ default: m.Products })));
const Blogs = lazy(() => import('@/components/sections/Blogs').then(m => ({ default: m.Blogs })));
const BlogPost = lazy(() => import('@/components/sections/BlogPost').then(m => ({ default: m.BlogPost })));
const Contact = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#4682b4] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CorporateDetails />
      <GlobalPartners />
    </>
  );
}

import { ScrollToTop } from '@/components/ScrollToTop';
import { SEO } from '@/lib/SEO';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEO />
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
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
              <Route path="/products" element={<Products />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
