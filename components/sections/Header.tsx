import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, ChevronDown, Phone, Mail, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { EmailLink } from '@/components/ui/EmailLink';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#1e293b]/95 backdrop-blur-md shadow-lg py-0 border-b border-white/5' 
        : 'bg-transparent py-2 border-b border-white/10'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-28">
          
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img 
              src="/logo-premium.png" 
              alt="Prasmi Steel Logo" 
              width={112}
              height={112}
              decoding="async"
              // Invert logo if it's originally dark to make it visible on transparent/dark bg
              className="w-14 h-14 md:w-20 md:h-20 object-contain transition-transform group-hover:scale-110 duration-300 brightness-0 invert" 
            />
            <div className="flex flex-col">
              <span className="font-black text-2xl md:text-3xl tracking-tighter text-white leading-none">
                Prasmi<span className="text-[#38bdf8]">Steel</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 font-bold mt-1.5 whitespace-nowrap">
                Private Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 h-full">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative group h-20 md:h-28 flex items-center"
                onMouseEnter={() => link.sublinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <Link
                    to={link.href.startsWith('#') && pathname !== '/' ? `/${link.href}` : link.href}
                    onClick={(e) => !link.sublinks && handleLinkClick(e, link.href)}
                    className="text-[13px] font-medium text-white/90 hover:text-white transition-all capitalize tracking-wide relative"
                  >
                    {link.name}
                    <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#38bdf8] transition-all duration-300 group-hover:w-full ${pathname === link.href ? 'w-full' : ''}`} />
                  </Link>
                  {link.sublinks && (
                    <ChevronDown className={`w-3 h-3 text-white/60 group-hover:text-white transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </div>

                {/* Dropdown Menu */}
                {link.sublinks && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-64 bg-[#1e293b] border border-white/10 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.3)] py-2 overflow-hidden rounded-b-md"
                      >
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-[#38bdf8]" />
                        {link.sublinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={(e) => handleLinkClick(e, sub.href)}
                            className="block px-6 py-3 text-[12px] font-medium text-white/80 hover:text-white hover:bg-white/5 capitalize tracking-wide transition-all"
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
            
            {/* Action Button & Socials & Hamburger (MTC Style) */}
            <div className="flex items-center gap-5 ml-2 pl-6 border-l border-white/20 h-8">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-[#38bdf8] transition-colors"
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4">
                <a href="#" className="text-[#38bdf8] hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="w-4 h-4 fill-current" />
                </a>
                <a href="https://www.linkedin.com/company/prasmi-steel" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4 fill-current" />
                </a>
                <a href="#" className="text-[#ff0000] hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 w-12 h-12">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-[#0f172a] p-0 border-l border-white/10">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-8 border-b border-white/10 flex justify-between items-center">
                    <span className="text-[#38bdf8] font-black text-2xl tracking-tighter">Prasmi</span>
                  </div>
                  <nav className="flex-grow p-8 space-y-8 overflow-y-auto">
                    {navLinks.map((link) => (
                      <div key={link.name} className="space-y-4">
                        <Link
                          to={link.href.startsWith('#') && pathname !== '/' ? `/${link.href}` : link.href}
                          onClick={(e) => !link.sublinks && handleLinkClick(e, link.href)}
                          className="text-xl font-bold text-white hover:text-[#38bdf8] capitalize tracking-wide flex items-center justify-between group"
                        >
                          {link.name}
                          {link.sublinks && <ChevronDown className="w-5 h-5 text-white/40" />}
                        </Link>
                        {link.sublinks && (
                          <div className="pl-6 space-y-4 border-l-2 border-white/10 mt-4">
                            {link.sublinks.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={(e) => handleLinkClick(e, sub.href)}
                                className="block text-sm font-medium text-white/60 hover:text-[#38bdf8] capitalize tracking-wider transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Mobile Contact Info */}
                    <div className="pt-8 mt-8 border-t border-white/10 space-y-6">
                      <div className="flex items-center gap-4 text-white/60">
                        <Phone className="w-5 h-5 text-[#38bdf8]" />
                        <span className="font-bold text-sm tracking-widest">+91 95866 33799</span>
                      </div>
                      <div className="flex items-center gap-4 text-white/60">
                        <Mail className="w-5 h-5 text-[#38bdf8]" />
                        <EmailLink className="font-bold text-sm tracking-widest" />
                      </div>
                      <div className="flex items-center gap-6 pt-4">
                        <a href="#" className="text-[#38bdf8] hover:text-white transition-colors"><Twitter className="w-5 h-5 fill-current" /></a>
                        <a href="https://www.linkedin.com/company/prasmi-steel" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-white transition-colors"><Linkedin className="w-5 h-5 fill-current" /></a>
                        <a href="#" className="text-[#ff0000] hover:text-white transition-colors"><Youtube className="w-6 h-6 fill-current" /></a>
                      </div>
                    </div>
                  </nav>
                  <div className="p-8 border-t border-white/10">
                    <button 
                      onClick={handleWhatsAppInquiry}
                      className="bg-[#38bdf8] hover:bg-white hover:text-slate-900 text-white w-full h-14 text-sm flex items-center justify-center font-bold uppercase tracking-[0.1em] transition-all rounded-md"
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
