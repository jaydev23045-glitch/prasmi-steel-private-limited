import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function PartnerSection() {
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex justify-end">
        
        {/* Content Container (Right Aligned) */}
        <div className="max-w-3xl text-right flex flex-col items-end">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight"
          >
            Connect with Prasmi Steel
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-slate-900 leading-relaxed font-normal text-lg md:text-xl mb-14 max-w-2xl"
          >
            Connect with us for shaping a more efficient, reliable, sustainable, and growth-driven future together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-end sm:items-center"
          >
            {/* Get a Quote */}
            <Link to="/contact" className="group flex items-center gap-6">
              <div className="w-16 h-[1.5px] bg-[#38bdf8] transition-all duration-300 group-hover:w-24" />
              <span className="text-sm font-bold text-slate-900 tracking-[0.2em] uppercase whitespace-nowrap">
                Get a Quote
              </span>
            </Link>

            {/* Become a Supplier */}
            <Link to="/contact" className="group flex items-center gap-6">
              <div className="w-16 h-[1.5px] bg-[#38bdf8] transition-all duration-300 group-hover:w-24" />
              <span className="text-sm font-bold text-slate-900 tracking-[0.2em] uppercase whitespace-nowrap">
                Become a Supplier
              </span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
