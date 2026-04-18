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
          className="h-[2px] bg-[#4682b4] mb-12"
        />

        {/* Authoritative Headline */}
        <h2 className="text-3xl md:text-[42px] font-bold text-slate-900 mb-16 leading-[1.2] tracking-tight max-w-none w-full"> 
          Prasmi Steel Private Limited: Global Leader in <br className="hidden md:block" /> Industrial Material Sourcing & Metal Scrap Supply
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
            Prasmi Steel Private Limited, aims to supply best quality scrap materials. Mainly we are dealing in Ferrous & Non-Ferrous materials such as HMS 1 & 2, Manganese Steel Scrap (Hadfield Steel), Cast Iron CounterWeights, Oversized Cast, Machinery Cast, Mixed Cast, and UNprepared Cast Iron. Our non-ferrous portfolio includes Discarded Electric Motors (Elmo), Aluminum Engines and Transmissions, Dirty and Heavy Dirty Aluminum, Aluminum Cast & Extrusion, Aluminum Scrap (Clean & Attachments), and Zorba (Non-Ferrous Shredder Residue).
          </p>

          <p>
            With over 06 years of specialized experience, we have refined our procurement and processing workflows to deliver precise scrap solutions that meet the exacting metallurgical requirements of global foundries and smelters. Every metric ton of material passing through our facilities is subjected to rigorous sorting, sizing, and cleaning protocols. This attention to detail ensures that our business partners—ranging from boutique specialty founders to large-scale industrial smelters—receive a consistent feedstock that optimizes furnace yield and minimizes slag production.
          </p>

          <p>
            Our operational strength lies in our deep understanding of the global metal market's logistical complexities. Operating as a globally engaged entity, Prasmi Steel manages end-to-end supply chains that connect high-volume scrap generation hubs with strategic consumption points. We pride ourselves on working with esteemed business partners established across four continents, maintaining a reputation for reliability, transparency in grading, and adherence to international ISRI standards.
          </p>

          <p>
            The core of our success is our dedicated team of Metallurgy Professionals and Skilled Labourers. Their collective expertise allows us to process hundreds of metric tons of specialized scrap annually, maintaining high purity levels even in complex multi-alloy streams. By leveraging advanced segregation techniques, we help our clients boost their scrap turnaround efficiency, reducing the reliance on virgin ores and contributing directly to a more sustainable, circular industrial economy.
          </p>

          <p className="font-bold text-slate-900 border-l-4 border-[#4682b4] pl-8 py-4 bg-slate-50">
            Contact our logistics and procurement experts today to learn how Prasmi Steel's specialized material sourcing can optimize your organization's secondary raw material supply chain.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
