import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, Recycle, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      id: "01",
      title: "Bulk Scrap Trading",
      desc: "Always ready to Buy & sell scrap materials in bulk.",
      image: "/bulk_scrap_trading.webp",
      icon: Handshake
    },
    {
      id: "02",
      title: "End-to-End Logistics",
      desc: "Seamless end-to-end logistics—from local deliveries to global shipping, all under one trusted partner.",
      image: "/logistics_excellence.webp", // Corrected image route
      icon: Globe
    },
    {
      id: "03",
      title: "Material Grading & Sorting",
      desc: "Accurate grading and expertly sorted materials ensure consistent quality you can rely on.",
      image: "/material_grading.webp",
      icon: ShieldCheck
    },
    {
      id: "04",
      title: "Sustainable Practices",
      desc: "Committed to sustainable practices with full environmental compliance at every stage.",
      image: "/sustainable_practices.webp",
      icon: Recycle
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

      {/* Cinematic Hero Banner */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
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
            className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tightest"
          >
            Why Us
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

      <section id="why-choose-us" className="bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-slate-200" />
        
        <div className="max-w-7xl mx-auto px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1 }}
                className="group relative h-[650px] overflow-hidden bg-white border border-slate-100 shadow-sm"
              >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#991b1b] via-[#991b1b]/95 to-[#991b1b]/60 opacity-0 group-hover:opacity-100 z-10 transition-all duration-700 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 z-20 transition-colors duration-700" />
                  <img 
                    src={pillar.image} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 scale-100 group-hover:scale-110 group-hover:grayscale-0"
                    alt={pillar.title}
                  />
                </div>

                {/* High-Impact Content Overlay */}
                <div className="relative z-30 h-full p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-12">
                      <pillar.icon className="w-8 h-8 text-[#991b1b] group-hover:text-white transition-colors duration-500" />
                      <span className="text-slate-200 text-6xl font-black group-hover:text-white/20 transition-colors">{pillar.id}</span>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-3xl font-black text-slate-900 group-hover:text-white mb-6 uppercase tracking-tightest leading-tight transition-all duration-500">
                        {pillar.title}
                      </h3>
                      
                      <div className="h-1.5 w-16 bg-[#991b1b] group-hover:bg-white transition-all duration-500" />
                      
                      <p className="text-slate-500 group-hover:text-white text-[14px] font-normal leading-relaxed tracking-wide opacity-100 transition-colors duration-500">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-900 group-hover:text-white transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Excellence Pillar</span>
                    <div className="h-px flex-1 bg-slate-900/10 group-hover:bg-white/30 transition-colors" />
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
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
            <p className="text-xl sm:text-3xl font-black text-slate-900 tracking-tightest max-w-4xl leading-[1.3] uppercase">
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
