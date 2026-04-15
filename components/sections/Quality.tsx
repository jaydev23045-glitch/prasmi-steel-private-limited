import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export function Quality() {
  return (
    <section id="quality" className="py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Metallurgical Excellence</div>
                <div className="text-2xl font-bold tracking-tight">Consistent Density. Maximum Yield.</div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -inset-10 bg-[#0066cc]/10 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>

          {/* Right Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold mb-12 flex flex-col items-start tracking-tight leading-[1.2]">
              Elevating Your <br/> <span className="text-slate-400">Smelting Process</span>
            </h2>
            
            <div className="space-y-10 w-full">
              <p className="text-xl text-slate-400 leading-relaxed border-l-4 border-slate-700 pl-8 py-2 font-normal">
                We understand that raw material quality directly dictates your manufacturing efficiency. Our materials are meticulously graded to ensure they meet your exact metallurgical recipe.
              </p>
              
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
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0066cc] transition-all duration-300 border border-white/5">
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </div>
                    <span className="text-slate-300 font-medium text-lg tracking-tight">{item}</span>
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
