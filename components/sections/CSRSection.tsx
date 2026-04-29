import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function CSRSection() {
  return (
    <section className="bg-[#f4f5f6] pt-20 lg:pt-32 relative overflow-hidden flex flex-col justify-between min-h-[600px] lg:min-h-[700px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Content Container (Left Aligned) */}
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-[42px] font-black text-slate-900 mb-8 tracking-tighter"
          >
            CSR & Sustainability
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-800 leading-relaxed font-medium text-[15px] mb-12"
          >
            In a world facing increasing environmental challenges, responsible resource utilization is essential. At Prasmi Steel, we are committed to advancing sustainability through responsible sourcing, efficient recycling practices, and meaningful CSR initiatives that promote long-term environmental stewardship.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/about" className="group flex items-center gap-4">
              <div className="w-16 h-[2px] bg-[#38bdf8] transition-all duration-300 group-hover:w-24" />
              <span className="text-[13px] font-bold text-slate-900 tracking-[0.1em] uppercase">
                Know More
              </span>
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Bottom Graphic / Image */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full h-[250px] md:h-[350px] lg:h-[450px] mt-12 overflow-hidden relative"
      >
        {/* We use sustainable_practices.webp as a beautiful thematic bottom banner */}
        <img 
          src="/sustainable_practices.webp" 
          alt="Sustainability and Environmental Protection" 
          className="w-full h-full object-cover object-center mix-blend-multiply opacity-90"
          loading="lazy"
        />
        {/* Optional gradient overlay to blend the image perfectly into the top background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f5f6] to-transparent h-1/3"></div>
      </motion.div>
    </section>
  );
}
