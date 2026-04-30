import { motion } from 'motion/react';
import { ArrowLeft, Target, Award, Globe, History as HistoryIcon, ShieldCheck, Layers, Zap, RefreshCw, Handshake, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function History() {
  return (
    <div className="bg-white min-h-screen">
      {/* Absolute Background Industrial Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: 'url("/story-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} />

      {/* Modern Banner Header (New) */}
      <section className="relative h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <img 
            src="/about-hero.webp" 
            alt="About Prasmi Steel" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          {/* Blue gradient overlay to mimic the map aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0369a1]/80 to-[#0c4a6e]/80" />
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-white text-4xl md:text-6xl font-black tracking-tight uppercase z-10"
        >
          About Prasmi
        </motion.h1>
      </section>

      {/* Breadcrumbs (New) */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <div className="flex items-center gap-2 text-slate-500">
            <Link to="/" className="hover:text-[#38bdf8] transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="text-[#38bdf8] font-medium">About Prasmi</span>
          </div>
        </div>
      </div>

      {/* Corporate Intro Section (New) */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-800 font-medium text-base md:text-lg leading-relaxed max-w-5xl"
          >
            <p>
              Prasmi Steel Private Limited is an emerging leader in the global scrap industry, specializing in the sourcing, processing and supply of best-quality ferrous and non-ferrous metal scrap.
            </p>
            <p>
              Founded with a vision to create a transparent and reliable trading ecosystem, we aim to bridge the gap between suppliers and buyers through efficient sourcing and consistent quality delivery.
            </p>
            <p>
              We operate with a clear objective — to create a reliable, transparent, and efficient scrap supply chain that connects suppliers and buyers with confidence. We actively engage with suppliers and buyers across multiple regions, ensuring seamless trade execution and reliable supply chain support.
            </p>
            <p className="text-slate-900 font-bold italic border-t border-slate-100 pt-8 mt-4">
              "We are not just a scrap recycler or trader. We are sustainability enabler, forging reliable partnerships across the nation and globe."
            </p>
          </motion.div>
        </div>
      </section>

      {/* "Mettle Makes Us" Section (New) */}
      <section className="py-24 bg-[#f8fafc] relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#38bdf8] italic tracking-tight"
            >
              "Mettle Makes Us"
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: Vision Statement */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter border-l-4 border-[#38bdf8] pl-6">
                Vision
              </h3>
              <p className="text-xl text-slate-600 font-medium leading-relaxed italic pr-8">
                "A waste free future - where waste become resources"
              </p>
            </motion.div>

            {/* Right: Values Grid */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { 
                  title: "Integrity", 
                  icon: ShieldCheck, 
                  desc: "Prasmi is resolved to conduct its business in an ethical, transparent and honest manner." 
                },
                { 
                  title: "Seamlessness", 
                  icon: RefreshCw, 
                  desc: "Prasmi ensures seamless working, leveraging of competencies and collaboration across its functional units." 
                },
                { 
                  title: "Commitment", 
                  icon: Handshake, 
                  desc: "Prasmi is committed to create and deliver value to all its stakeholders." 
                },
                { 
                  title: "Responsibility", 
                  icon: Users, 
                  desc: "Prasmi stands accountable for the actions and decisions of its team and its team members." 
                },
                { 
                  title: "Excellence", 
                  icon: Award, 
                  desc: "Prasmi will boldly accept challenges to develop & deliver innovative solutions conforming to highest standards of quality." 
                },
              ].map((value, idx) => (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 group-hover:bg-[#38bdf8] transition-colors duration-500">
                      <value.icon className="w-8 h-8 text-[#38bdf8] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section (Simplified Industry Style) */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading on Left */}
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
              Leadership
            </h2>
            <div className="h-1.5 w-16 bg-[#38bdf8] mt-6" />
          </div>

          {/* Large Image Container with Card Overlay */}
          <div className="relative min-h-[500px] md:min-h-[600px]">
            <div className="absolute inset-0 w-full h-full">
              {/* Background Image (Large Wide) */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                  src="/director_portrait_1777555838092.png" 
                  alt="Leadership" 
                  className="w-full h-full object-cover grayscale-[0.05] brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-slate-900/5" />
              </div>

              {/* Floating White Card on Left */}
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-12 md:p-16 max-w-lg shadow-2xl border border-slate-100/50"
              >
                <h3 className="text-4xl font-black text-[#38bdf8] mb-6 tracking-tight">
                  Harshil Savaliya
                </h3>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12">
                  Driving innovation and strategic growth at Prasmi Steel, with a focus on building a sustainable and future-ready global supply chain.
                </p>
                
                {/* Know More with Line */}
                <div className="flex items-center gap-6">
                  <div className="h-0.5 w-16 bg-[#38bdf8]" />
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-900 cursor-pointer hover:text-[#38bdf8] transition-colors">
                    Know More
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
