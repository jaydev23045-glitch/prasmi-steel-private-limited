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
        <div className="grid lg:grid-cols-3 gap-12">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="group relative h-[650px] overflow-hidden bg-[#f8fafc] border border-slate-100 shadow-sm"
            >
              {/* Background Reveal Logic - Visceral Blood Reveal */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#991b1b] via-[#991b1b]/95 to-[#991b1b]/60 opacity-0 group-hover:opacity-100 z-10 transition-all duration-700 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 z-20 transition-colors duration-700" />
                <img 
                  src={process.image} 
                  alt={process.title}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 scale-100 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>

              {/* High-Impact Content Overlay */}
              <div className="relative z-30 h-full p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-12">
                    <process.icon className="w-8 h-8 text-[#991b1b] group-hover:text-white transition-colors duration-500" />
                    <span className="text-slate-200 text-6xl font-black group-hover:text-white/20 transition-colors">0{index + 1}</span>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-5xl font-black text-slate-900 group-hover:text-white mb-6 uppercase tracking-tightest leading-none transition-colors duration-500">
                      {process.title.split(' ')[0]} <br />
                      <span className="text-[#991b1b] group-hover:text-white">{process.title.split(' ')[1]}</span>
                    </h3>
                    
                    <div className="h-1.5 w-16 bg-[#991b1b] group-hover:bg-white transition-all duration-500" />
                    
                    <p className="text-slate-500 group-hover:text-white max-w-[280px] text-[15px] font-normal leading-relaxed tracking-wide opacity-100 transition-colors duration-500">
                      {process.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-900 group-hover:text-white transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Operational Pillar</span>
                  <div className="h-px flex-1 bg-slate-900/10 group-hover:bg-white/30 transition-colors" />
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section - Pure Centered Executive Layout */}
      <section className="relative py-48 bg-slate-50 border-t border-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-10 lg:px-8 text-center">
          <div className="space-y-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-24 flex flex-col items-center"
            >
              <div className="flex items-center gap-12">
                <div className="h-0.5 w-48 bg-[#991b1b]" />
                <span className="text-[#991b1b] font-black tracking-[1em] text-[18px] uppercase">WHY_CHOOSE_US</span>
                <div className="h-0.5 w-48 bg-[#991b1b]" />
              </div>
              
              <div className="space-y-16">
                <div className="space-y-6">
                  <motion.h2 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="text-5xl sm:text-8xl font-black text-slate-900 leading-[0.85] tracking-tightest uppercase"
                  >
                    ALWAYS READY <br /> TO DEAL IN <br /> 
                    <span className="text-[#991b1b]">VOLUMES</span>
                  </motion.h2>
                  <div className="h-1.5 w-32 bg-[#991b1b] mx-auto opacity-30" />
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="text-slate-500 text-xl sm:text-2xl leading-relaxed tracking-wide uppercase font-light max-w-3xl mx-auto"
                >
                  Our financial credibility is one of our strongest assets - we maintain flawless payment history with zero delays or defaults to the date.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
