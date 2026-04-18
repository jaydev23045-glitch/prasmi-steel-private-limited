import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Quality() {
  return (
    <section id="quality" className="py-24 bg-mesh bg-grid relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-100/50 to-transparent -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Media Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white/5 bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1536411396596-afcd99bc85b8?auto=format&fit=crop&w=1200&q=80"
                alt="Smelting Process"
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Metallurgical Excellence</div>
                <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-black text-slate-900 leading-none mb-10 tracking-tighter uppercase italic">
                  Metallurgical <br/>
                  <span className="text-[#dc2626]">Purest Grade</span>
                </h2>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#dc2626]/5 -z-10 rounded-full blur-3xl" />
          </motion.div>

          {/* Right Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <span className="text-[#dc2626] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Metallurgical Excellence</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tighter uppercase">
              Uncompromising <br /><span className="text-[#dc2626]">Quality Control</span>
            </h2>
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-light">
              <p>
                Our quality assurance protocol begins at the point of origin. Every metric ton of scrap is verified for its metallurgical composition, ensuring that our partners receive materials that optimize their furnace performance and yield.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-black text-slate-900 mb-2">100%</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sourcing Transparency</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 mb-2">Grade-A</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sorting Standard</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-10 w-full mt-12">
              <ul className="grid gap-6">
                {[
                  'Rigorous sorting and X-Ray grading',
                  'Tailored to specific metallurgical recipes',
                  'Consistent density to maximize furnace yield',
                  'Global on-time logistics and tracking'
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#dc2626] transition-all duration-300 border border-slate-200">
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </div>
                    <span className="text-slate-600 font-medium text-lg tracking-tight">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
