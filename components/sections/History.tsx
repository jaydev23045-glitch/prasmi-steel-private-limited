import { motion } from 'motion/react';
import { ArrowLeft, Target, Award, Globe, History as HistoryIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function History() {
  return (
    <div className="bg-white min-h-screen">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.02),transparent_50%)] pointer-events-none" />

      {/* Back Header Nav */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors font-bold uppercase tracking-widest text-[10px] group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            Back to Global Overview
          </Link>
        </div>
      </div>

      {/* Full-width Impact Hero */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-3 mb-8 bg-slate-50 px-4 py-1.5 rounded-none border border-slate-100">
                <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px]">OUR JOURNEY</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-slate-900 leading-[1.1] mb-10 tracking-tighter">
                Our <span className="text-red-600">History</span>
              </h1>
              <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-light max-w-xl">
                <p className="border-l-4 border-red-600 pl-8 py-3 bg-red-50/20">
                  Prasmi Steel Private Limited is an emerging leader in the global scrap industry, specializing in the sourcing and supply of premium ferrous and non-ferrous metal scrap.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video lg:aspect-square bg-slate-900 overflow-hidden shadow-2xl"
            >
              <img 
                src="/about-hero.webp" 
                alt="Industrial Metallurgy" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <div className="text-white font-black text-6xl tracking-tighter">2024</div>
                <div className="text-white/60 uppercase tracking-[0.4em] text-xs font-bold mt-2">Established Integrity</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Balanced Philosophy Section */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-32">
            {/* Mission & Vision */}
            <div className="space-y-24">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-slate-200" />
                  <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">The Vision</h2>
                </div>
                <p className="text-2xl text-slate-900 font-bold leading-tight tracking-tight">
                  To become a globally recognized leader in the scrap metal industry by delivering sustainable, high-quality, and innovative metal recycling solutions that support industrial growth and environmental responsibility.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-12"
              >
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-slate-200" />
                  <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Our Mission</h2>
                </div>
                <div className="grid sm:grid-cols-1 gap-6">
                  {[
                    'To provide superior quality ferrous and non-ferrous scrap',
                    'To build long-term relationships through trust, transparency, and reliability',
                    'To ensure consistent supply with efficient logistics and global sourcing',
                    'To contribute towards sustainable practices by promoting responsible recycling',
                    'To continuously grow and innovate in line with industry advancements'
                  ].map((point, idx) => (
                    <div key={idx} className="flex gap-4 group items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white border border-slate-100 shadow-sm flex items-center justify-center transition-colors group-hover:bg-red-600 group-hover:text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 transition-colors group-hover:bg-white" />
                      </div>
                      <p className="text-slate-600 font-light text-base leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Expanded Content */}
            <div className="space-y-16">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-12 border border-slate-100 shadow-xl space-y-10"
              >
                <div className="space-y-8 text-slate-600 font-light leading-relaxed text-lg italic">
                  <p>
                    Since our incorporation in 2024, we have been committed to delivering excellence through quality-driven processes and strategic sourcing.
                  </p>
                  <p>
                    Our diverse product portfolio is carefully curated to meet the evolving demands of industrial clients, ensuring every shipment aligns with international standards.
                  </p>
                  <p>
                    "At Prasmi Steel, we don’t just supply materials — we build long-term partnerships based on performance and mutual growth."
                  </p>
                </div>
                
                <div className="flex items-center gap-6 pt-10 border-t border-slate-100">
                   <div className="flex flex-col">
                      <span className="text-3xl font-black text-slate-900 tracking-tighter leading-none">2024</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-red-600 mt-2 italic">Official Launch</span>
                   </div>
                   <div className="h-12 w-px bg-slate-100 mx-4" />
                   <div className="flex flex-col">
                      <span className="text-3xl font-black text-slate-900 tracking-tighter leading-none">4+</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Active Regions</span>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
