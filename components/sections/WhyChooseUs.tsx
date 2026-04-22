import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, Recycle, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      id: "01",
      title: "Bulk Scrap Trading",
      desc: "Always ready to buy & sell scrap materials in bulk with absolute market transparency.",
      image: "/bulk_scrap_trading.webp"
    },
    {
      id: "02",
      title: "End-to-End Solutions",
      desc: "From buying and processing to selling, we manage the complete scrap lifecycle with efficiency and precision.",
      image: "/end-to-end-solutions.png"
    },
    {
      id: "03",
      title: "Material Grading & Sorting",
      desc: "Accurate grading and expertly sorted materials ensure consistent quality you can rely on.",
      image: "/material_grading.webp"
    },
    {
      id: "04",
      title: "Sustainable Practices",
      desc: "Committed to sustainable practices with full environmental compliance at every stage.",
      image: "/sustainable-practices-v2.png"
    },
    {
      id: "05",
      title: "Global Reach, Ground Level Expertise",
      desc: "We connect Global recycling supply chain, delivering seamless logistics from local deliveries to global shipping, all under one trusted partner.",
      image: "/global-reach-v2.png"
    },
    {
      id: "06",
      title: "Trusted Partnerships",
      desc: "We focus on long-term relationships built on transparency, reliability, and mutual growth.",
      image: "/trusted-partnerships.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-[#dc2626] selection:text-white overflow-x-hidden">
      
      {/* VVIP Atmospheric System - Light Mode */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 opacity-[0.03] grayscale contrast-125 transition-opacity duration-1000 mix-blend-multiply">
          <img 
            src="/Users/jaydevnakum/.gemini/antigravity/brain/aa351030-9f4c-46dc-a127-b00d16354305/industrial_terminal_aerial_background_1776511188576_1776513150152.png" 
            className="w-full h-full object-cover"
            alt="Atmospheric Core"
          />
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100/50 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#dc2626]/5 blur-[150px] rounded-full opacity-60" />
      </div>

      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/whyus.webp" 
            className="w-full h-full object-cover brightness-110 contrast-115 saturate-[1.1]"
            alt="Why Partner With Us"
          />
        </div>
        
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-black text-white tracking-tightest"
          >
            Why <span className="text-[#dc2626]">Us</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/80 text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase">From sourcing to selling, we make waste & scrap movements simple, reliable, and profitable.</span>
            <div className="h-px w-12 bg-white/30" />
          </motion.div>
        </div>
      </section>

      <section id="why-choose-us" className="relative py-24 bg-white overflow-hidden">
        {/* VVIP White Atmospheric System */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dc2626]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="group flex flex-col bg-white border border-slate-200 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Section: Industrial Visual - Maximized Proportions */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <img 
                    src={pillar.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={pillar.title}
                  />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Bottom Section: Strategic Content - 1:1 Product Card Parity */}
                <div className="p-8 flex-1 flex flex-col bg-white">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-2 group-hover:text-[#dc2626] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <button className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#dc2626] transition-colors flex items-center justify-between px-6 group/btn">
                      <span>Excellence Standard</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 text-center flex flex-col items-center"
          >
            <div className="h-px w-16 bg-[#dc2626] mb-8" />
            <p className="text-xl sm:text-3xl font-black text-slate-900 tracking-tightest max-w-4xl leading-[1.3]">
              When you work with Prasmi Steel, <br />
              you’re not just choosing a dependable supplier or buyer— <br />
              you’re choosing a <span className="text-[#dc2626]">smarter</span>, <span className="text-[#dc2626]">more sustainable</span> way of doing business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 pb-32 flex justify-center"
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
      </section>
    </div>
  );
}
