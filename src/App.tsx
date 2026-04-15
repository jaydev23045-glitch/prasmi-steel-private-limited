import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { CorporateDetails } from '@/components/sections/CorporateDetails';
import { GlobalPartners } from '@/components/sections/GlobalPartners';
import { History } from '@/components/sections/History';
import { Products } from '@/components/sections/Products';
import { Contact } from '@/components/sections/Contact';
import { Blogs } from '@/components/sections/Blogs';
import { BlogPost } from '@/components/sections/BlogPost';
import { Footer } from '@/components/sections/Footer';

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
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
        <Header 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
          navLinks={navLinks} 
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<History />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
