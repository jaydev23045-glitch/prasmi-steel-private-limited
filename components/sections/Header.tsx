import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
  sublinks?: { name: string; href: string }[];
}

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  navLinks: NavLink[];
}

export function Header({ isMobileMenuOpen, setIsMobileMenuOpen, navLinks }: HeaderProps) {
  const { pathname } = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    const isAnchor = href.startsWith('#');
    
    if (isAnchor && pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const phoneNumber = '919586633799';
    const message = "Hello, I'm interested in requesting a quote for your materials. Please provide more details on pricing and availability.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img src="/logo-premium.png" alt="Prasmi Steel Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform group-hover:scale-110 duration-300" />
            <div className="flex flex-col">
              <span className="font-black text-2xl md:text-3xl tracking-tighter text-slate-900 leading-none">
                Prasmi<span className="text-[#dc2626]">Steel</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-1.5 whitespace-nowrap">Private Limited</span>
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative group h-20 flex items-center"
                onMouseEnter={() => link.sublinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <Link
                    to={link.href.startsWith('#') && pathname !== '/' ? `/${link.href}` : link.href}
                    onClick={(e) => !link.sublinks && handleLinkClick(e, link.href)}
                    className="text-[11px] font-bold text-slate-600 hover:text-slate-900 transition-all uppercase tracking-[0.2em] relative"
                  >
                    {link.name}
                    <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dc2626] transition-all duration-300 group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`} />
                  </Link>
                  {link.sublinks && (
                    <ChevronDown className={`w-3 h-3 text-slate-400 group-hover:text-[#dc2626] transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </div>

                {link.sublinks && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] py-4 overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#dc2626]" />
                        {link.sublinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={(e) => handleLinkClick(e, sub.href)}
                            className="block px-8 py-3.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 uppercase tracking-[0.1em] transition-all"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button 
              onClick={handleWhatsAppInquiry}
              className="bg-slate-900 hover:bg-[#dc2626] text-white rounded-full px-10 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] shadow-[#dc2626]/20 group"
            >
              Get In Touch
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-600 w-12 h-12">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-white p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-8 border-b border-slate-100">
                    <span className="text-[#dc2626] font-black text-2xl tracking-tighter">Prasmi</span>
                  </div>
                  <nav className="flex-grow p-8 space-y-8 overflow-y-auto">
                    {navLinks.map((link) => (
                      <div key={link.name} className="space-y-4">
                        <Link
                          to={link.href.startsWith('#') && pathname !== '/' ? `/${link.href}` : link.href}
                          onClick={(e) => !link.sublinks && handleLinkClick(e, link.href)}
                          className="text-2xl font-black text-slate-900 hover:text-[#dc2626] uppercase tracking-tighter flex items-center justify-between group"
                        >
                          {link.name}
                          {link.sublinks && <ChevronDown className="w-5 h-5 text-slate-300" />}
                        </Link>
                        {link.sublinks && (
                          <div className="pl-6 space-y-4 border-l-2 border-slate-100 mt-4">
                            {link.sublinks.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={(e) => handleLinkClick(e, sub.href)}
                                className="block text-sm font-bold text-slate-500 hover:text-[#dc2626] uppercase tracking-widest transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                  <div className="p-8 border-t border-slate-100">
                    <button 
                      onClick={handleWhatsAppInquiry}
                      className="bg-slate-800 hover:bg-slate-900 text-white w-full h-16 text-xs flex items-center justify-center font-black uppercase tracking-[0.2em] transition-all"
                    >
                      Get In Touch
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
