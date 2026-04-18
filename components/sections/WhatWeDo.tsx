import { motion } from 'motion/react';
import { Package, Truck, Layers, Globe, ShieldCheck, Zap, ArrowRight, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatWeDo() {
  const processes = [
    {
      id: "proc_01",
      title: "WE BUY",
      label: "CAPABILITY_01",
      description: "We buy ferrous and non-ferrous metal scrap, managing a high-density network of acquisition across international markets with absolute transparency.",
      icon: Package,
      image: "/webuy.webp",
      color: "bg-slate-900"
    },
    {
      id: "proc_02",
      title: "WE PROCESS",
      label: "CAPABILITY_02",
      description: "We do sizing, segregation, and precision sorting to ensure maximum purity, delivering high-fidelity recycling solutions for global foundries.",
      icon: Layers,
      image: "/weprocess.webp",
      color: "bg-[#dc2626]"
    },
    {
      id: "proc_03",
      title: "WE SELL",
      label: "CAPABILITY_03",
      description: "We sell premium ferrous and non-ferrous materials worldwide, leveraging market intelligence to provide our partners with a definitive edge.",
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
            OPERATIONS
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/80 text-[10px] sm:text-xs font-black tracking-[0.6em] uppercase">Excellence at Every Process</span>
            <div className="h-px w-12 bg-white/30" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Process Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[600px] overflow-hidden border border-slate-100 bg-white"
            >
              {/* Background Image with Hover Effect */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <div className="absolute inset-0 bg-white/90 z-10 group-hover:bg-white/40 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-20" />
                <img 
                  src={process.image} 
                  alt={process.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Content Container */}
              <div className="relative z-30 h-full p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-black text-[#dc2626] tracking-widest">{process.label}</span>
                    <process.icon className="w-5 h-5 text-slate-400 group-hover:text-[#dc2626] transition-colors" />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">{process.title}</h3>
                  <p className="text-slate-500 text-base font-light leading-relaxed mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {process.description}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <div className="h-px w-12 bg-slate-100 group-hover:w-full transition-all duration-700" />
                  <span className="text-4xl font-black text-slate-100 pl-4">0{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section - Pure Centered Executive Layout */}
      <section className="relative py-32 sm:py-48 bg-slate-50 border-t border-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-10 lg:px-8 text-center">
          <div className="space-y-16">
            <div className="space-y-8 flex flex-col items-center">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#dc2626]" />
                <span className="text-[#dc2626] font-black tracking-[0.6em] text-[10px] uppercase">WHY_CHOOSE_US</span>
                <div className="h-px w-12 bg-[#dc2626]" />
              </div>
              
              <div className="space-y-12">
                <div className="space-y-4">
                  <p className="text-slate-900 text-3xl sm:text-5xl font-black leading-tight tracking-tightest uppercase">
                    ALWAYS READY TO DEAL IN VOLUMES
                  </p>
                  <div className="h-px w-24 bg-[#dc2626] mx-auto opacity-30" />
                </div>

                <p className="text-slate-500 text-lg sm:text-xl leading-relaxed tracking-wide uppercase font-light max-w-2xl mx-auto">
                  Our financial credibility is one of our strongest assets - we maintain flawless payment history with zero delays or defaults to the date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
