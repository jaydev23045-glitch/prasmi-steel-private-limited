import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WhatWeOfferMini() {
  const products = [
    {
      name: 'Ferrous Scrap',
      category: 'Ferrous',
      desc: 'We deal in a wide range of ferrous materials - Heavy Melting Steel (HMS 1 & 2), Manganese Steel, and cast iron scrap.',
      image: '/hms-1-2.webp'
    },
    {
      name: 'Non-Ferrous Scrap',
      category: 'Non-Ferrous',
      desc: 'We deal in a wide range of non-ferrous materials - Clean/dirty/heavy dirty Aluminum extrusion, clean and attachment aluminum cast, Zorba, UBC, and discarded ele. motors.',
      image: '/aluminum-extrusion.webp'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
            What <span className="text-[#dc2626]">We Deal</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#dc2626] mb-8" />
          <p className="text-slate-500 font-light max-w-2xl text-lg leading-relaxed">
            Premium industrial-grade scrap materials, precisely sorted and processed for global foundry and manufacturing excellence.
          </p>
        </div>

        {/* Product Showcase Grid - 2 Column Adjustment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl flex flex-col h-full overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 backdrop-blur-md px-3 py-1 border border-slate-200 text-[8px] font-black uppercase tracking-widest text-slate-900">
                    {product.category}
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-[#dc2626] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm flex-1">
                  {product.desc}
                </p>

                <Link 
                  to="/products"
                  className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-900 hover:text-[#dc2626] transition-colors"
                >
                  View Product
                  <Zap className="w-3 h-3 text-[#dc2626] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link 
            to="/products"
            className="group relative inline-flex items-center gap-8 bg-slate-900 text-white px-12 py-5 font-black uppercase tracking-[0.4em] text-[10px] transition-all hover:bg-[#dc2626]"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
