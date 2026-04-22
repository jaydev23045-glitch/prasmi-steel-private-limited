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
        <h2 className="text-3xl md:text-[44px] font-black text-slate-900 mb-12 leading-[1.1] tracking-tight max-w-none w-full"> 
          One of the Leading Ferrous & <br className="hidden md:block" /> Non-Ferrous Scrap Suppliers
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
            Prasmi Steel Private Limited aims to supply the <span className="text-slate-900 font-bold">best quality scrap materials</span>. We specialize in both Ferrous & Non-Ferrous commodities, including HMS 1 & 2, Manganese Steel Scrap, Cast Iron CounterWeights, Aluminum Engines, and Zorba (Non-Ferrous Shredder Residue).
          </p>

          <p>
            With years of specialized experience, we have refined our procurement and processing workflows to deliver precise scrap solutions that meet the requirements of foundries, smelters, and global traders. Every metric ton of material is subjected to rigorous sorting and cleaning.
          </p>

          <p>
            Our operational strength lies in our deep understanding of the global metal market's logistical complexities. Connecting high-volume scrap generation hubs with strategic consumption points, we maintain a reputation for absolute reliability worldwide.
          </p>

          <p className="font-bold text-slate-900 border-l-2 border-[#dc2626] pl-8 py-6 bg-slate-50 shadow-sm italic">
            "The core of our success is our dedicated team and high-precision processing standards."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
