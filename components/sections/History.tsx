import { motion } from 'motion/react';
import { ArrowLeft, Target, Award, Globe, History as HistoryIcon, ShieldCheck, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function History() {
  return (
    <div className="bg-white min-h-screen">
      {/* Absolute Background Industrial Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: 'url("/story-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} />

      {/* Hero-style Narrative Section */}
      <section className="relative pt-12 pb-24 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
                  About <span className="text-[#dc2626]">Prasmi</span>
                </h1>
                <div className="h-1.5 w-16 bg-[#dc2626]" />
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">
                  Prasmi Steel PVT Ltd- is a dynamic scrap trading company focused on sourcing and supplying ferrous and non-ferrous metal scrap.
                </h2>
                
                <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                  <p>
                    Founded with a vision to create a transparent and reliable trading ecosystem, we aim to bridge the gap between suppliers and buyers through efficient sourcing and consistent quality delivery. 
                  </p>
                  <p>
                    Prasmi Steel is a fast-growing scrap trading company focused on sourcing and supplying ferrous and non-ferrous metal scrap across domestic and international market.
                  </p>
                  <p>
                    We operate with a clear objective — to create a reliable, transparent, and efficient scrap supply chain that connects suppliers and buyers with confidence. We actively engage with suppliers and buyers across multiple regions, ensuring seamless trade execution and reliable supply chain support.
                  </p>
                </div>

                <p className="text-slate-900 font-bold italic border-t border-slate-100 pt-8">
                  "We are not just a scrap recycler or trader. We are sustainability enabler, forging reliable partnerships worldwide."
                </p>
              </div>
            </motion.div>

            {/* Image Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl"
            >
              <img 
                src="/steel-facility.webp" 
                alt="Prasmi Steel Industrial Facility - Premium Scrap Metal Processing and Trading"
                className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 rounded-3xl shadow-inner" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Governance Section - Detailed Points */}
      <section className="py-24 bg-[#f8fafc] relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Vision & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 border border-slate-200 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-[#dc2626]/10 p-4 rounded-full">
                  <Globe className="w-8 h-8 text-[#dc2626]" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Our <span className="text-[#dc2626]">Vision</span></h3>
              </div>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                To become a trusted global partner in the scrap industry by delivering reliable sourcing solutions and building long-term relationships.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 border border-slate-200 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-[#dc2626]/10 p-4 rounded-full">
                  <Target className="w-8 h-8 text-[#dc2626]" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Our <span className="text-[#dc2626]">Mission</span></h3>
              </div>
              <ul className="space-y-6">
                {[
                  "To ensure consistent quality in every transaction",
                  "To build transparent and trustworthy partnerships",
                  "To provide efficient and reliable supply chain solutions"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-lg text-slate-500 font-light">
                    <div className="w-1.5 h-1.5 bg-[#dc2626] mt-2.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Values & Differentiation Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Our Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900 p-12 text-white"
            >
              <h3 className="text-3xl font-black mb-10 tracking-tight uppercase">Our <span className="text-[#dc2626]">Values</span></h3>
              <div className="grid grid-cols-1 gap-8">
                {["Commitment", "Consistency", "Credibility"].map((value, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="h-px w-8 bg-[#dc2626] group-hover:w-12 transition-all duration-500" />
                    <span className="text-2xl font-black tracking-widest uppercase">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What Makes Us Different */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 border border-slate-200 shadow-sm"
            >
              <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight uppercase">What Makes <span className="text-[#dc2626]">Us Different</span></h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: "Verified Sourcing", icon: ShieldCheck },
                  { title: "Clear Communication", icon: Globe },
                  { title: "Long-term Partnerships", icon: Target },
                  { title: "Reliable Execution", icon: Award }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <item.icon className="w-6 h-6 text-[#dc2626]" />
                    <span className="font-bold text-slate-900 uppercase tracking-tighter text-sm leading-tight">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Strategy Blocks: Approach & Outlook */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Industry Approach */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 border-l-4 border-[#dc2626] shadow-sm"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight uppercase">Industry <span className="text-[#dc2626]">Approach</span></h3>
              <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
                <p>We understand that scrap trading is not just about buying and selling — it’s about trust, timing, and consistency.</p>
                <p>Our approach ensures that every deal is executed with clarity, professionalism, and accountability.</p>
              </div>
            </motion.div>

            {/* Future Outlook */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 border-l-4 border-[#dc2626] shadow-sm"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight uppercase">Future <span className="text-[#dc2626]">Outlook</span></h3>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                We are committed to expanding our global presence while maintaining strong relationships with our partners and continuously improving our sourcing and supply capabilities.
              </p>
            </motion.div>
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
