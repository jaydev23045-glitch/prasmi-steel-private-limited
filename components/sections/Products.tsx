import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Box, Target, Award, Zap, Shield, Factory, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All Materials', 'Ferrous Metal', 'Non-Ferrous'];

const products = [
  {
    id: 1,
    name: 'HMS 1 & 2',
    category: 'Ferrous Metal',
    description: 'Heavy Melting Steel (80:20 Mix). Premium industrial grade scrap for high-efficiency melting.',
    specs: ['ISRI: 200-206', 'Thickness: 1/4 inch+', 'Density: 70kg/cu.ft'],
    image: '/hms-1-2.webp'
  },
  {
    id: 2,
    name: 'ROTOR-DRUM / DISKBREAK SCRAP',
    category: 'Ferrous Metal',
    description: 'Clean machinery cast iron and plate/structural components for foundry use. High-quality brake rotors and drums.',
    specs: ['Graphite Grade: GS', 'Phosphorus: Low', 'Sulfur: <0.1%'],
    image: '/c.webp'
  },
  {
    id: 7,
    name: 'MIXED CAST',
    category: 'Ferrous Metal',
    description: 'General grade mixed cast iron scrap. Primarily sourced from industrial machinery and structural components.',
    specs: ['Grade: Mixed', 'Cleanliness: High', 'Processing: Sorted'],
    image: '/mix-cast.webp'
  },
  {
    id: 8,
    name: 'unprepared cast',
    category: 'Ferrous Metal',
    description: 'Oversized cast iron components requiring preparation. Bulk industrial scrap from large-scale demolition and manufacturing.',
    specs: ['Size: Oversized', 'Type: Heavy Cast', 'Origin: Industrial'],
    image: '/unprepare-cast.webp'
  },
  {
    id: 9,
    name: 'Oversized cast',
    category: 'Ferrous Metal',
    description: 'Extra-large cast iron sections and structural elements. High-density scrap primarily from industrial infrastructure.',
    specs: ['Grade: Industrial', 'Category: Oversized', 'Loading: Bulk'],
    image: '/oversized-cast.webp'
  },
  {
    id: 10,
    name: 'Manganese Steel',
    category: 'Ferrous Metal',
    description: 'High-alloy manganese steel scrap (Hadfield steel). Meticulously sorted from industrial crusher and mining equipment.',
    specs: ['Manganese: 11-14%', 'Type: Work-hardened', 'Purity: Solid'],
    image: '/manganese-steel.webp'
  },
  {
    id: 11,
    name: 'Aluminum Extrusion',
    category: 'Non-Ferrous',
    description: 'Clean aluminum extrusion scrap. Primarily sourced from window frames, door sections, and industrial profiles.',
    specs: ['Grade: 6063', 'Cleanliness: 99%+', 'Processing: Baled/Loose'],
    image: '/aluminum-extrusion.webp'
  },
  {
    id: 12,
    name: 'UBC',
    category: 'Non-Ferrous',
    description: 'Used Beverage Cans. Clean aluminum cans, free of moisture and contamination, processed for high-yield melting.',
    specs: ['Type: Cans', 'Cleanliness: High', 'Processing: Baled'],
    image: '/ubc.webp'
  },
  {
    id: 13,
    name: 'Aluminum Engines / Transmissions',
    category: 'Non-Ferrous',
    description: 'Clean aluminum auto engines and transmissions. Free of steel components and drained of all fluids.',
    specs: ['Grade: ADC12', 'Cleanliness: High', 'Processing: Shredded'],
    image: '/aluminum-engines-transmissions.webp'
  },
  {
    id: 14,
    name: 'Cast Aluminum',
    category: 'Non-Ferrous',
    description: 'Mixed cast aluminum scrap. Primarily sourced from automotive parts, machinery housings, and structural castings.',
    specs: ['Grade: Tense', 'Purity: High', 'Form: Clean Cast'],
    image: '/cast-aluminum.webp'
  },
  {
    id: 15,
    name: 'TT / Old Sheets',
    category: 'Non-Ferrous',
    description: 'Old aluminum sheet scrap. Primarily sourced from aircraft, automotive, and general industrial sheeting.',
    specs: ['Grade: Taint Tabor', 'Purity: 98%+', 'Type: Sheet'],
    image: '/tt-old-sheets.webp'
  },
  {
    id: 16,
    name: 'Zorba',
    category: 'Non-Ferrous',
    description: 'Shredded non-ferrous metals (predominantly aluminum). Sorted and processed to ensure consistent industrial grade.',
    specs: ['Grade: Shredded', 'Purity: Solid', 'Form: Mix'],
    image: '/zorba.webp'
  },
  {
    id: 17,
    name: 'Aluminum Breakage',
    category: 'Non-Ferrous',
    description: 'Aluminum breakage and casting scrap with ferrous attachments. Ideal for processors and refining foundries.',
    specs: ['Aluminum: 70-90%', 'Iron: <5%', 'Type: Mixed Cast'],
    image: '/aluminum-breakage.webp'
  },
  {
    id: 18,
    name: 'Discarded Ele Motors',
    category: 'Non-Ferrous',
    description: 'Discarded electric motors (Elmo grade). Shredded or whole units with high copper recovery potential.',
    specs: ['Grade: Elmo', 'Copper: High Yield', 'Source: Industrial'],
    image: '/discarded-ele-motors.webp'
  },
  {
    id: 19,
    name: 'Alternators & Starters',
    category: 'Non-Ferrous',
    description: 'Mixed alternators and starters from automotive dismantling. High copper and aluminum recovery grade.',
    specs: ['Grade: Mixed', 'Yield: High', 'Source: Automotive'],
    image: '/alternators-starters.webp'
  }
];


export function Products() {
  const [activeCategory, setActiveCategory] = useState('All Materials');

  const handleRequestQuote = (product: typeof products[0]) => {
    const phoneNumber = '919586633799';
    const message = `Hello, I'm interested in a quote for ${product.name}.\n\nPlease provide availability and pricing.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const filteredProducts = activeCategory === 'All Materials' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Back Nav */}
      <div className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#991b1b] transition-colors font-bold uppercase tracking-widest text-[10px] group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            HOME
          </Link>
        </div>
      </div>


      {/* Catalog Filter */}
      <section className="py-6 md:py-12 border-b border-slate-100 sticky top-[104px] md:top-[128px] z-30 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Filter:</span>
            <div className="flex gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-[#991b1b] text-white shadow-xl shadow-[#991b1b]/20' 
                      : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-12 bg-slate-200"></div>
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Primary Ferrous & Non-Ferrous Material Catalog</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="premium-card bg-white border border-slate-100 group overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="aspect-square relative overflow-hidden bg-slate-100">
                    <img 
                      src={product.image} 
                      alt={`Prasmi Steel ${product.name} - Premium Industrial ${product.category} Scrap`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-md px-3 py-1 border border-slate-200 shadow-sm text-[8px] font-bold uppercase tracking-widest text-slate-900">
                        {product.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-2 group-hover:text-[#991b1b] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">
                        {product.description}
                      </p>
                    </div>


                    <button 
                      onClick={() => handleRequestQuote(product)}
                      className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#991b1b] transition-colors flex items-center justify-center gap-2 group/btn"
                    >
                      Request Quote
                      <Zap className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

    </div>
  );
}
