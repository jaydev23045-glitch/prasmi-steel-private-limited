import { motion } from 'motion/react';
import { ArrowLeft, Target, Award, Globe, History as HistoryIcon, ShieldCheck, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function History() {
  return (
    <div className="bg-white min-h-screen">
      {/* Absolute Background Industrial Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: 'url("/story-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} />

      {/* Our Story Header - Synchronized with Product/Contact */}
      <section className="relative pt-6 md:pt-8 pb-12 transition-all duration-300 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 text-center tracking-tight">
              Our <span className="text-[#dc2626]">Story</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Core Narrative Section */}
      <section className="relative pb-20 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight tracking-tight border-l-4 border-[#dc2626] pl-8">
                Prasmi Steel is an emerging leader in global scrap recycling, specializing in best-quality material solutions.
              </h2>
              
              <div className="space-y-8 text-lg text-slate-500 font-light leading-relaxed pl-8">
                <p>
                  Established in 2024, we focus on operational excellence, quality-driven processing, and strategic sourcing to divert waste back into the global supply chain.
                </p>
                <p className="text-slate-900 font-bold italic">
                  "We are sustainability enablers, forging reliable partnerships worldwide."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video lg:aspect-[4/3] bg-slate-100 overflow-hidden shadow-2xl rounded-sm"
            >
              <img 
                src="/about-hero.webp" 
                alt="Industrial Integrity" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <div className="text-6xl font-black text-white tracking-tighter mb-2">2024</div>
                <div className="text-white/60 uppercase tracking-[0.4em] text-[10px] font-bold">Incorporated Quality</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Vision & Mission Pillars */}
      <section className="py-20 bg-[#f8fafc] relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                id: "vision",
                title: "Our Vision",
                desc: "A waste-free future where scrap becomes sustainable resources.",
                icon: Globe,
                image: "/vision.png"
              },
              {
                id: "mission",
                title: "Our Mission",
                desc: "To provide end-user focused scrap solutions through absolute transparency and material excellence.",
                icon: Target,
                image: "/mission.png"
              },
              {
                id: "believe",
                title: "Our Believe",
                desc: "Build long-term relationships through trust, reliability, and continuous industry innovation.",
                icon: ShieldCheck,
                image: "/values.png"
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white group overflow-hidden border border-slate-200 hover:border-[#dc2626]/40 transition-all hover:shadow-2xl flex flex-col"
              >
                {/* Elite Visual Frame - Increased Scale */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10" />
                  <div className="absolute top-8 right-8 z-20">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl">
                      <pillar.icon className="w-6 h-6 text-[#dc2626] transition-transform group-hover:rotate-12 duration-500" />
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-1">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{pillar.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed tracking-wide text-lg">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Partnership CTA */}
      <section className="py-24 bg-[#0a0a0b] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="h-px w-32 bg-[#dc2626] mb-12" />
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tightest leading-tight mb-16">
            Let's Build a <br />
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#fff,#dc2626)]">Sustainable Edge</span>
          </h2>
          <Link 
            to="/contact"
            className="group relative inline-flex items-center gap-8 bg-white text-black px-16 py-8 font-black uppercase tracking-[0.4em] text-xs transition-all hover:bg-[#dc2626] hover:text-white"
          >
            <span>Initialize Partnership</span>
            <Layers className="w-5 h-5 transition-transform group-hover:rotate-180 duration-700" />
            <div className="absolute -bottom-2 -right-2 w-full h-full border border-white/20 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
