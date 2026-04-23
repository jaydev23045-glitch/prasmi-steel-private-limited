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
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 text-center">
        {/* Refined 'Little Lighter' Overlay System */}
        <div className="absolute inset-0 bg-black/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20" />
        
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/first.webp"
          alt="Prasmi Steel Global Metal Scrap Supply Chain"
          className="w-full h-full object-cover brightness-125 contrast-110 saturate-[1.1]"
          loading="eager"
          decoding="async"
          // @ts-ignore
          fetchpriority="high"
        />
      </div>
      
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-[clamp(1.5rem,5.5vw,64px)] font-black text-white tracking-tightest leading-[1.1] mb-10 max-w-5xl mx-auto drop-shadow-2xl">
            Your Trusted Partner in the <br className="hidden md:block" />
            <span className="text-[#dc2626]">Global Recycling</span> Supply Chain
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            From Quote to Closure – <span className="font-bold text-white italic underline decoration-[#dc2626]/40 underline-offset-8">We Stand for What We Commit.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              asChild
              className="bg-[#dc2626] hover:bg-white hover:text-slate-900 text-white rounded-full px-10 h-14 text-sm font-black uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleWhatsAppInquiry}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/20 rounded-full px-10 h-14 text-sm font-black uppercase tracking-[0.2em] transition-all hover:scale-105 w-full sm:w-auto shadow-lg"
            >
              Connect Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
