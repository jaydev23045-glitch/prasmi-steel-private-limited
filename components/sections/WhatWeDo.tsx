import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavigationGrid } from './NavigationGrid';

export default function WhatWeDo() {
  return (
    <div className="bg-white min-h-screen selection:bg-[#dc2626] selection:text-white overflow-x-hidden">
      
      {/* Atmosphere Core */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100/50 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#dc2626]/5 blur-[150px] rounded-full opacity-60" />
      </div>

      {/* Sustainability Banner Section */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/sustainable-practices-v2.png" 
          className="w-full h-full object-cover object-center"
          alt="Sustainability and CSR"
        />
        <div className="absolute inset-0 bg-black/5" />
      </section>

      {/* Main Content (Navigation Grid) */}
      <NavigationGrid />

      {/* Operational Philosophies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center"
        >
          <div className="h-px w-16 bg-[#dc2626] mb-8" />
          <p className="text-xl sm:text-3xl font-black text-slate-900 tracking-tightest max-w-4xl leading-[1.3]">
            We don’t just move material — <br />
            we <span className="text-[#dc2626]">manage relationships</span> and <span className="text-[#dc2626]">optimize</span> the entire supply chain.
          </p>
        </motion.div>

        {/* Next Step CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <Link 
            to="/contact"
            className="group relative flex items-center gap-4 bg-slate-900 overflow-hidden px-12 py-6 rounded-none transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-[#dc2626] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 text-white font-black uppercase tracking-[0.3em] text-sm">
              Contact Us
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 text-white transform group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

