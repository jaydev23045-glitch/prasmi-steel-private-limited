import { motion } from 'motion/react';
import { ArrowLeft, Target, Award, Globe, History as HistoryIcon, ShieldCheck, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function History() {
  return (
    <div className="bg-white min-h-screen">
      {/* Cinematic Lighting System */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dc2626]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100 blur-[120px] rounded-full" />
      </div>

      {/* Back Nav Overlay */}
      <div className="sticky top-20 z-40 bg-white/60 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#dc2626] transition-all font-bold uppercase tracking-[0.2em] text-[10px] group"
          >
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Premium Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-4 mb-10">
                <div className="h-px w-8 bg-[#dc2626]" />
                <span className="text-[#dc2626] font-black uppercase tracking-[0.4em] text-[10px]">OUR JOURNEY</span>
              </div>
              
              <div className="space-y-10 max-w-xl">
                <p className="text-xl sm:text-2xl text-slate-900 font-bold leading-relaxed border-l-4 border-[#dc2626] pl-8 py-4 bg-slate-50 shadow-sm">
                  Prasmi Steel Private Limited is an emerging leader in the global scrap industry, specializing in the sourcing, processing and supply of best-quality ferrous and non-ferrous metal scrap.
                </p>
                
                <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed pl-8">
                  <p>
                    Since our incorporation in 2024, we have been committed to delivering excellence through quality-driven processes and strategic sourcing.
                  </p>
                  <p>
                    With deep roots in the recycling sector and a reputation for reliability, we help partners divert waste from landfills and put it back into the supply chain where it belongs.
                  </p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pl-8 py-4 border-l-4 border-[#dc2626] bg-slate-50 shadow-sm"
                >
                  <p className="text-slate-900 font-bold text-xl leading-relaxed">
                    "At our core, we’re more than just Buyer, Recycler, or Supplier — we’re sustainability enablers"
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-slate-100 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] group">
                <img 
                  src="/about-hero.webp" 
                  alt="Industrial Excellence" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12">
                  <div className="text-6xl font-black text-white tracking-tighter leading-none mb-4">2024</div>
                  <div className="h-0.5 w-12 bg-[#dc2626] mb-4" />
                  <div className="text-white/60 uppercase tracking-[0.4em] text-[10px] font-bold">ESTABLISHED INTEGRITY</div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-[16px] border-[#dc2626]/5 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Focus Expert Vision Section (Cinematic Art Direction) */}
      <section className="relative min-h-screen py-48 overflow-hidden bg-[#0a0a0b] selection:bg-[#dc2626] selection:text-white flex items-center">
        {/* Full-Bleed 3D Industrial World Asset */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.15, filter: 'brightness(0.3) contrast(1.1)' }}
            whileInView={{ scale: 1, filter: 'brightness(0.5) contrast(1.05)' }}
            transition={{ duration: 15, ease: "easeOut" }}
            src="/industrial_future_world_3d_v1_1776509012180.png" 
            className="w-full h-full object-cover"
          />
          {/* Cinematic Color Grading Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-transparent to-[#0a0a0b]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-transparent to-[#0a0a0b]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0b_90%)] opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col items-center justify-center text-center">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex items-center justify-center gap-10 mb-24"
              >
                <div className="h-0.5 w-40 bg-[#dc2626]" />
                <span className="text-[#dc2626] font-black uppercase tracking-[1em] text-[18px]">OUR VISION</span>
                <div className="h-0.5 w-40 bg-[#dc2626]" />
              </motion.div>
              
              <div className="space-y-4">
                <motion.h2 
                  initial={{ opacity: 0, y: 100, filter: 'blur(30px)', skewY: 10 }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', skewY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl font-black text-white tracking-widest leading-[0.8]"
                >
                  A Waste-Free <br className="hidden sm:block" /> Future
                </motion.h2>

                <div className="flex items-center justify-center gap-10 py-12">
                  <motion.h2 
                    initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 0.6, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                    className="text-2xl sm:text-4xl font-light text-white tracking-[0.5em] italic"
                  >
                    WHERE
                  </motion.h2>
                  <motion.h2 
                    initial={{ opacity: 0, scale: 0.5, rotate: -10, filter: 'blur(20px)' }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    animate={{ 
                      filter: ["drop-shadow(0 0 20px rgba(220,38,38,0))", "drop-shadow(0 0 40px rgba(220,38,38,0.6))", "drop-shadow(0 0 20px rgba(220,38,38,0))"] 
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: 1.5,
                      filter: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                    className="text-5xl sm:text-7xl font-black text-[#dc2626] tracking-tightest leading-none"
                  >
                    WASTE
                  </motion.h2>
                </div>

                <motion.h2 
                  initial={{ opacity: 0, y: 100, filter: 'blur(30px)', skewY: -10 }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', skewY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl sm:text-7xl font-black text-white tracking-widest leading-[0.8]"
                >
                  Becomes <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#fff,#dc2626,#fff)] bg-[length:200%_auto] animate-gradient-slow outline-none">
                    Resources
                  </span>
                </motion.h2>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Mission Section (VVIP White Theme Editorial) */}
      <section className="relative py-48 bg-[#f8fafc] overflow-hidden">
        {/* Subtle Industrial Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-10">
              <div className="flex items-center justify-center mb-10">
                <span className="text-[#dc2626] font-black tracking-[0.8em] text-[12px] uppercase">OUR MISSION</span>
              </div>
              <h3 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tightest leading-[0.9]">
                Definitive <br /> 
                <span className="text-[#dc2626] italic font-light">Solutions</span> <br />
                for the globe
              </h3>
              <p className="text-slate-500 text-lg sm:text-xl font-light leading-relaxed max-w-sm tracking-wide">
                Forging long-term partnerships through absolute transparency and material excellence.
              </p>
            </div>
            
            <div className="space-y-16">
              {[
                "To provide end user focused scrap solutions",
                "To build long-term relationships through trust, transparency, and reliability",
                "To be a reliable and trustworthy partner in the global supply chain of scrap materials",
                "To responsibly source, process, and trade high-quality scrap materials",
                "To continuously grow and innovate in line with industry advancements"
              ].map((text, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: idx * 0.15, 
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="group relative cursor-default"
                >
                  <div className="flex gap-10 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#dc2626] mt-4" />
                    <div className="space-y-5 flex-1">
                      <p className="text-slate-800 font-black text-xl sm:text-3xl leading-tight tracking-tight group-hover:text-slate-900 transition-all">
                        {text}
                      </p>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: idx * 0.15 + 0.5, 
                          duration: 1.5,
                          ease: "circOut" 
                        }}
                        className="h-[2px] bg-[#dc2626]" 
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Global Partnership CTA (Cinematic Black Finish) */}
      <section className="py-48 bg-[#0a0a0b] relative overflow-hidden">
        {/* Subtle Background Lighting */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#dc2626]/5 skew-x-12 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-slate-900/40 -skew-x-12 -translate-x-32" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="h-px w-24 bg-[#dc2626] mb-12" />
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tightest leading-[1.1] max-w-4xl mb-16">
            Let's Build a <br />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#fff,#dc2626)]">strong and sustainable</span> <br />
            edge in metal recycling.
          </h2>
          
          <Link 
            to="/contact"
            className="group relative inline-flex items-center gap-6 bg-white text-black px-12 py-6 font-black uppercase tracking-[0.4em] text-xs transition-all hover:bg-[#dc2626] hover:text-white"
          >
            <span>Initialize Partnership</span>
            <Layers className="w-4 h-4 transition-transform group-hover:rotate-180 duration-700" />
            <div className="absolute -bottom-2 -right-2 w-full h-full border border-white/20 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
