import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-mesh bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-slate-900 leading-[1.2] mb-12 flex flex-col items-start tracking-tight">
              Right Scrap, <br/> Right Composition, <br/> Right Results.
            </h2>
            
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-normal max-w-xl">
              <p className="border-l-4 border-slate-200 pl-6 py-2">
                With expertise in sizing, sorting, segregation, and cleaning, our experienced team delivers a reliable supply that you can trust for all your needs.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] group cursor-pointer bg-slate-900 border-[8px] border-white">
              <img
                src="/a.webp"
                alt="Industrial Metallurgy"
                className="w-full h-full object-cover brightness-110 contrast-105 transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
            </div>
            
            {/* Subtle Industrial Glow behind image */}
            <div className="absolute -inset-10 bg-[#dc2626]/5 blur-[100px] -z-10 rounded-full animate-pulse-soft"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
