import { motion } from 'motion/react';
import { ChevronDown, Play, Briefcase, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#1e293b]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/90 via-transparent to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/70 via-[#1e293b]/20 to-transparent z-20 h-40" />
        
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/first.webp"
          alt="Prasmi Steel Recycling"
          className="w-full h-full object-cover brightness-110 contrast-110 saturate-[1.1]"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-20">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="ml-0 md:ml-8 lg:ml-12 max-w-6xl"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-wide leading-[1.15] mb-10 drop-shadow-md">
            Your Trusted Partner for <br className="hidden md:block" />
            Global Metal Recycling Supply Chain
          </h1>
          
          <Link 
            to="/about"
            className="group flex items-center gap-4 text-white hover:text-[#38bdf8] transition-colors w-max"
          >
            <div className="w-16 h-[1.5px] bg-white group-hover:bg-[#38bdf8] transition-colors" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase">Know More</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Scroll Arrow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-4 md:left-16 lg:left-28 z-40"
      >
        <button 
          onClick={() => {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          }}
          className="text-white hover:text-[#38bdf8] transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
        </button>
      </motion.div>

      {/* Right Sticky Action Buttons */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col">
        <a href="#" className="bg-[#38bdf8]/90 hover:bg-white hover:text-[#38bdf8] text-white p-4 transition-colors border-b border-white/20 backdrop-blur-sm">
          <Play className="w-5 h-5 lg:w-6 lg:h-6 fill-current" />
        </a>
        <a href="/products" className="bg-[#38bdf8]/90 hover:bg-white hover:text-[#38bdf8] text-white p-4 transition-colors border-b border-white/20 backdrop-blur-sm">
          <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 fill-current" />
        </a>
        <a href="tel:+919586633799" className="bg-[#38bdf8]/90 hover:bg-white hover:text-[#38bdf8] text-white p-4 transition-colors backdrop-blur-sm">
          <Phone className="w-5 h-5 lg:w-6 lg:h-6 fill-current" />
        </a>
      </div>
    </section>
  );
}
