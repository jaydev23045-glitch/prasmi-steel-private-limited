import { motion } from 'motion/react';

export function CorporateDetails() {
  return (
    <section className="py-24 bg-mesh bg-grid relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none -z-10 rotate-12 scale-150">
        <img src="/favicon.png" alt="Prasmi Steel Industrial Watermark" className="w-full h-full object-contain" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Horizontal Line Accent */}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          viewport={{ once: true }}
          className="h-[2px] bg-[#dc2626] mb-12"
        />

        {/* Authoritative Headline */}
        <h2 className="text-3xl md:text-[42px] font-bold text-slate-900 mb-16 leading-[1.2] tracking-tight max-w-none w-full"> 
          Prasmi Steel Private Limited: One of the Leading <br className="hidden md:block" /> Ferrous & Non-Ferrous Scrap Supplier
        </h2>

        {/* Narrative Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10 text-[19px] text-slate-600 leading-[1.7] font-normal max-w-6xl"
        >
          <p>
            Prasmi Steel Private Limited, aims to supply best quality scrap materials. Mainly we are dealing in Ferrous & Non-Ferrous materials such as HMS 1 & 2, Manganese Steel Scrap, Cast Iron CounterWeights, Oversized Cast, Machinery Cast, Mixed Cast, and unprepared Cast Iron, Discarded Electric Motors (Elmo), Aluminum Engines and Transmissions, Dirty and Heavy Dirty Aluminum, Aluminum Cast & Extrusion, Aluminum Scrap (Clean & Attachments), and Zorba (Non-Ferrous Shredder Residue).
          </p>

          <p>
            With years of specialized experience, we have refined our procurement and processing workflows to deliver precise scrap solutions that meet the requirement of foundries and smelters and traders. Every metric ton of material passing through our facilities is subjected to rigorous sorting, sizing, and cleaning.
          </p>

          <p>
            Our operational strength lies in our deep understanding of the global metal market's logistical complexities. Operating as a globally engaged entity, Prasmi Steel manages end-to-end supply chains that connect high-volume scrap generation hubs with strategic consumption points. We pride ourselves on working with esteemed business partners established across the globe, maintaining a reputation for reliability.
          </p>

          <p>
            The core of our success is our dedicated team and Skilled Labourers. Their collective expertise allows us to process hundreds of metric tons of specialized scrap annually, maintaining reliable supply.
          </p>

          <p className="font-bold text-slate-900 border-l-4 border-[#dc2626] pl-8 py-4 bg-slate-50">
            Call us today to learn how your organization can benefit from Prasmi Steel's services and products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
