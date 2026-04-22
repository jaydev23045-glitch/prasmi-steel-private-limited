import { motion } from 'motion/react';
import { Package, Truck, Layers, Globe, ShieldCheck, Zap, ArrowRight, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatWeDo() {
  const processes = [
    {
      id: "proc_01",
      title: "WE BUY",
      description: "We buy ferrous and non-ferrous metal scrap, managing a high-density network of acquisition across international markets with absolute transparency.",
      icon: Package,
      image: "/webuy.webp",
      color: "bg-slate-900"
    },
    {
      id: "proc_02",
      title: "WE PROCESS",
      description: "We do sizing, segregation, and precision sorting to ensure maximum purity, delivering high-fidelity recycling solutions for global foundries.",
      icon: Layers,
      image: "/weprocess.webp",
      color: "bg-[#dc2626]"
    },
    {
      id: "proc_03",
      title: "WE SELL",
      description: "We sell ferrous and non-ferrous materials, leveraging market intelligence to provide our partners with a definitive edge.",
      icon: BarChart3,
      image: "/wesell.webp",
      color: "bg-slate-900"
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

      {/* Cinematic Operational Hero Banner - Following User Reference */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/OP.webp" 
            className="w-full h-full object-cover brightness-110 contrast-115 saturate-[1.1]"
            alt="Operational Infrastructure"
          />
        </div>
        
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tightest"
          >
            What We Do
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/80 text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase">From buying to processing and selling, we manage the complete scrap lifecycle.</span>
            <div className="h-px w-12 bg-white/30" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Process Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group flex flex-col bg-white border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
            {/* Top Section: Operational Visual - Matched with Product Theme */}
            <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1 border border-slate-200 shadow-sm text-[8px] font-bold uppercase tracking-widest text-slate-900">
                  PROCESS 0{index + 1}
                </div>
              </div>
              <img 
                src={process.image} 
                alt={process.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Bottom Section: Operational Content - 1:1 Product Card Parity */}
            <div className="p-8 flex-1 flex flex-col bg-white">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-2 group-hover:text-[#991b1b] transition-colors">
                  {process.title}
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {process.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <button className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#991b1b] transition-colors flex items-center justify-between px-6 group/btn">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Operational Pillar</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Supply Chain Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 text-center flex flex-col items-center"
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
    </div>
  );
}
