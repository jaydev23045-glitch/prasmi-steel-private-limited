import { motion } from 'motion/react';

export function CorporateDetails() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Line Accent */}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          viewport={{ once: true }}
          className="h-[2px] bg-slate-200 mb-12"
        />

        {/* Authoritative Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[42px] font-bold text-slate-900 mb-16 leading-[1.2] tracking-tight max-w-4xl"
        >
          Prasmi Steel Private Limited - One of the Leading Ferrous & Non-Ferrous Scrap Supplier
        </motion.h2>

        {/* Narrative Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10 text-[19px] text-slate-600 leading-[1.7] font-normal max-w-6xl"
        >
          <p>
            Prasmi Steel Private Limited. aims to provide best quality scrap materials. We supply all kind of Cast Iron scrap, CounterWeights, Oversized Cast, Machinery Cast, Mixed Cast, HMS 1 & 2, Manganese Steel Scrap, Discarded Electric Motors, Aluminum Engines/Transmissions, Dirty and Heavy Dirty Aluminum, Aluminum attachment Scrap as per the customer’s requirement.  
          </p>

          <p>
            We have provided the best scrap solutions in the industry for 06 years with materials that specifically suit the requirements of foundries, smelters and scrap traders. Being one of the globally working company, we are proud to work with over esteemed business partners established across the globe.
          </p>

          <p>
            Our experienced employees with exceptional expertise make more reliable supply of many hundreds of tons every year. We supply best-quality scrap that helps to boost the smelting process.
          </p>

          <p className="font-bold text-slate-900">
            Call us today to learn how your organization can benefit from Prasmi Steel's services and products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
