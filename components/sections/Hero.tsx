import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  const handleWhatsAppInquiry = () => {
    const phoneNumber = '919586633799';
    const message = "Hello, I'm interested in requesting a quote for your materials. Please provide more details on pricing and availability.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="/first.webp"
          alt="Prasmi Steel Industrial Yard"
          className="w-full h-full object-cover scale-105"
          loading="eager"
          // @ts-ignore
          fetchpriority="high"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto"
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#4682b4]"></div>
            <span className="text-sm font-black uppercase tracking-[0.45em] text-zinc-300">Prasmi Steel Private Limited</span>
            <div className="h-px w-12 bg-[#4682b4]"></div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[72px] font-bold text-white tracking-tight leading-tight mb-8 drop-shadow-lg">
            Global Supplier of Premium Ferrous & Non-Ferrous Metal Scrap
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm font-medium">
            From Quote to Closure Deal – We Deliver What We Commit
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              asChild
              className="bg-[#4682b4] hover:bg-[#36648b] text-white rounded-full px-8 h-12 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105 w-full sm:w-auto"
            >
              <Link to="/products">Explore Our Products</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleWhatsAppInquiry}
              className="bg-[#36454f] hover:bg-slate-800 text-white border-none rounded-full px-8 h-12 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105 w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
