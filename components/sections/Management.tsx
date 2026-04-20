import { motion } from 'motion/react';
import { ArrowLeft, Zap, ShieldCheck, TrendingUp, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Leadership() {
  return (
    <div className="bg-white min-h-screen selection:bg-[#dc2626] selection:text-white overflow-x-hidden">
      {/* VVIP White Atmospheric System */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#dc2626]/5 blur-[150px] rounded-full opacity-60" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-slate-100/50 blur-[150px] rounded-full" />
        {/* Subtle Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.4]" 
             style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>



      {/* Executive Spotlight Section (VVIP Smooth White Architecture) */}
      <section className="relative py-48 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            
            {/* Left Column: Semantic Content Block */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-16"
            >
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-slate-900 font-black tracking-[0.6em] text-[10px] uppercase">MANAGING_DIRECTOR_PROFILE</span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                
                <div className="space-y-12">
                  <p className="text-slate-900 text-3xl sm:text-4xl font-black leading-tight tracking-tight uppercase">
                    PRACTICAL KNOWLEDGE <br />
                    <span className="text-[#dc2626]">MEETS GLOBAL SCALE</span>
                  </p>
                  
                  <div className="space-y-8 border-l border-[#dc2626]/20 pl-10">
                    <p className="text-slate-900 text-lg leading-relaxed tracking-wide font-bold">
                      At Prasmi Steel Private Limited, leadership under Harshil Savaliya combines practical industry knowledge, and global market insight. With a deep understanding of scrap sourcing, processing, and trading, focused on driving operational efficiency, maintaining high standards, and building long-term, reliable partnerships worldwide.
                    </p>

                    <p className="text-slate-500 text-lg leading-relaxed tracking-wide font-light">
                      Despite his young age, he has developed deep expertise in the metal scrap recycling industry through years of on-ground experience. Beginning his journey at a local scrap yard, he gained practical knowledge in identifying various metal grades and built a strong network of suppliers and buyers.
                    </p>
                    
                    <p className="text-slate-900 text-lg leading-relaxed tracking-wide font-bold">
                      At Prasmi Steel, he leads operations and business development, ensuring efficient processing, quality control, and maximum value realization. His focus remains on strengthening global partnerships, optimizing team performance, and driving sustainable growth.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Right Column: High-Fidelity HARSHIL Portrait Asset */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative aspect-[4/5] overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-sm"
            >
              {/* Premium Image Frame */}
              <div className="absolute inset-0 border-[15px] border-white/40 z-20 pointer-events-none" />
              
              <img 
                src="/HARSHIL.webp" 
                alt="Prasmi Steel Leadership" 
                className="w-full h-full object-cover transition-transform duration-[30s] ease-linear group-hover:scale-110"
              />

                <div className="absolute bottom-12 left-0 right-0 flex flex-col items-start justify-center z-30 px-12 space-y-4">
                  <div className="h-0.5 w-12 bg-[#dc2626]" />
                  <span className="text-white font-black uppercase tracking-[0.2em] text-xs sm:text-sm drop-shadow-lg">Harshil Savaliya</span>
                </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
