import { motion } from 'motion/react';

export function CorporateDetails() {
  return (
    <section className="pb-24 pt-4 bg-white relative overflow-hidden">
      {/* Subtle Background Industrial Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: 'url("/story-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Short & Thick Marker Accent */}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          viewport={{ once: true }}
          className="h-1.5 bg-[#dc2626] mb-8"
        />

        {/* Authoritative Headline - Title Case */}
        <h2 className="text-3xl md:text-[44px] font-black text-slate-900 mb-12 leading-[1.1] tracking-tight max-w-none w-full uppercase"> 
          Prasmi Steel - An Emerging Leader In <br className="hidden md:block" /> Global Recycling Supply Chain
        </h2>

        {/* Narrative Content - Premium Weights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="group space-y-10 text-[20px] text-slate-500 leading-relaxed font-light max-w-6xl"
        >
          <p>
            Prasmi Steel is a fast-growing scrap trading company focused on sourcing and supplying ferrous and non-ferrous metal scrap across domestic and international markets.
          </p>

          <p>
            With years of specialized experience, we have refined our procurement and processing workflows to deliver precise scrap solutions that meet the requirements of foundries, smelters, and global traders. Every metric ton of material is subjected to rigorous sorting and cleaning.
          </p>

          <p>
            We operate with a clear objective — to create a reliable, transparent, and efficient scrap supply chain that connects suppliers and buyers with confidence.
          </p>

        </motion.div>

        {/* Key Metrics Row - Relocated with Original Styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {[
            { value: "1200+", label: "Tons Processing", sub: "Annually Since last 2 Years" },
            { value: "4.9", label: "Reliability Rate", sub: "Average Rating (out of 5)" },
            { value: "95%", label: "Repeat Customers", sub: "Measured Over the Past 2 Years" },
            { value: "07+", label: "Years Of", sub: "Proven Industry Expertise" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <span className="text-5xl sm:text-7xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-[#dc2626] transition-colors duration-500">
                {stat.value}
              </span>
              <span className="text-base font-bold text-slate-900 uppercase tracking-widest mb-2 text-center w-full">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em] text-center w-full">
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24"
        >
          <p className="font-bold text-slate-900 border-l-2 border-[#dc2626] pl-8 py-6 bg-slate-50 shadow-sm italic">
            GET IN TOUCH WITH US TODAY to learn how your organization can benefit from PRASMI STEEL'S services and products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
