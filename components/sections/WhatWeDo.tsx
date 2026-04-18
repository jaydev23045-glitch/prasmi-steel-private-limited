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
    <div className="bg-white min-h-screen selection:bg-[#dc2626] selection:text-white overflow-x-hidden pt-20">
      
      {/* VVIP Atmospheric System - Light Mode */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 opacity-[0.03] grayscale contrast-125 transition-opacity duration-1000 mix-blend-multiply">
          <img 
            src="/Users/jaydevnakum/.gemini/antigravity/brain/aa351030-9f4c-46dc-a127-b00d16354305/industrial_terminal_aerial_background_1776511188576_1776513150152.png" 
            className="w-full h-full object-cover"
            alt="Atmospheric Industrial Background"
          />
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100/50 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#dc2626]/5 blur-[150px] rounded-full opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Header Section */}
        <div className="mb-24 sm:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl sm:text-8xl font-black tracking-tightest leading-[0.9] text-slate-900 uppercase"
            >
              OPERATIONAL <br />
              <span className="text-[#dc2626] italic font-medium">CORE.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-slate-500 text-lg sm:text-xl font-light leading-relaxed max-w-md border-l border-slate-100 pl-8"
            >
              Our operations are driven by absolute technical rigor, ensuring precision sourcing and world-class processing standards.
            </motion.p>
          </div>
        </div>

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

      {/* Why Choose Us Section - Soft Contrast */}
      <section className="relative py-32 sm:py-48 bg-slate-50 border-t border-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-20 bg-[#dc2626]" />
                  <span className="text-[#dc2626] font-black tracking-[0.6em] text-[10px] uppercase">WHY_CHOOSE_US</span>
                </div>
                
                
                <div className="space-y-12 border-l border-slate-200 pl-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#dc2626]" />
                      <p className="text-slate-900 text-xl sm:text-2xl font-black uppercase tracking-tight">ALWAYS READY TO DEAL IN VOLUMES</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#dc2626] mt-3 flex-shrink-0" />
                      <p className="text-slate-500 text-lg leading-relaxed tracking-wide uppercase font-light">
                        Our financial credibility is one of our strongest assets - we maintain flawless payment history with zero delays or defaults to the date.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-square flex items-center justify-center">
              {/* Cinematic Industrial World Visual - Refined for Light Mode */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#dc2626]/5 to-transparent rounded-full blur-3xl opacity-60" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="absolute inset-0 border border-slate-200 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 border border-slate-100 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Globe className="w-32 h-32 text-[#dc2626] opacity-[0.08]" />
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 bg-[#dc2626]/5 rounded-full blur-[60px]" />
                  </div>
                </div>

                {/* Floating World Labels */}
                <div className="absolute top-1/4 -right-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#dc2626]" />
                  <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Global_Reach</span>
                </div>
                <div className="absolute bottom-1/4 -left-4 flex items-center gap-3">
                  <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Technical_Rigor</span>
                  <div className="h-px w-8 bg-[#dc2626]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
