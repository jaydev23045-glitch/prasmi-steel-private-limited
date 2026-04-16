import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  navLinks: { name: string; href: string }[];
}

export function Header({ isMobileMenuOpen, setIsMobileMenuOpen, navLinks }: HeaderProps) {
  const { pathname } = useLocation();

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
      // Normal navigation for non-anchors or cross-page anchors
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
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img src="/favicon.png" alt="Prasmi Steel Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tighter text-slate-900 leading-none">
                Prasmi<span className="text-[#4682b4]">Steel</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1 whitespace-nowrap">Private Limited</span>
            </div>
          </Link>
 
           <nav className="hidden md:flex space-x-8">
             {navLinks.map((link) => {
               const LinkTag: any = link.href.startsWith('/') || (pathname !== '/' && link.href.startsWith('#')) ? Link : 'a';
               const to = link.href.startsWith('#') && pathname !== '/' ? `/${link.href}` : link.href;
 
               return (
                 <Link
                   key={link.name}
                   to={to}
                   onClick={(e) => handleLinkClick(e, link.href)}
                   className="text-[11px] font-bold text-slate-600 hover:text-slate-900 transition-all uppercase tracking-[0.2em]"
                 >
                   {link.name}
                 </Link>
               );
             })}
           </nav>
 
           <div className="hidden md:flex items-center">
             <button 
               onClick={handleWhatsAppInquiry}
               className="bg-slate-800 hover:bg-slate-900 text-white rounded px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors shadow-sm"
             >
               Get a Quote
             </button>
           </div>
 
           <div className="md:hidden flex items-center">
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
               <SheetTrigger asChild>
                 <Button variant="ghost" size="icon" className="text-slate-600 w-12 h-12">
                   <Menu className="h-7 w-7" />
                 </Button>
               </SheetTrigger>
               <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                 <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                 <nav className="flex flex-col gap-6 mt-12">
                   {navLinks.map((link) => (
                     <Link
                       key={link.name}
                       to={link.href.startsWith('#') && pathname !== '/' ? `/${link.href}` : link.href}
                       onClick={(e) => handleLinkClick(e, link.href)}
                       className="text-xl font-bold text-slate-800 hover:text-slate-600 uppercase tracking-wide transition-colors"
                     >
                       {link.name}
                     </Link>
                   ))}
                   <button 
                     onClick={handleWhatsAppInquiry}
                     className="mt-8 bg-slate-800 hover:bg-slate-900 text-white w-full h-12 text-sm flex items-center justify-center font-bold uppercase tracking-widest transition-colors shadow-lg"
                   >
                     Get a Quote
                   </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
