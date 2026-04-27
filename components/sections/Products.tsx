import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Box, Target, Award, Zap, Shield, Factory, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All Materials', 'Ferrous', 'Non-Ferrous'];

const products = [
  {
    id: 1,
    name: 'HMS 1 & 2',
    category: 'Ferrous',
    description: 'Heavy Melting Steel (80:20 Mix). Premium industrial grade scrap for high-efficiency melting.',
    specs: ['ISRI: 200-206', 'Thickness: 1/4 inch+', 'Density: 70kg/cu.ft'],
    image: '/hms-1-2.webp'
  },
  {
    id: 2,
    name: 'Rotor-Drum / Diskbreak Scrap',
    category: 'Ferrous',
    description: 'Clean machinery cast iron and plate/structural components for foundry use. High-quality brake rotors and drums.',
    specs: ['Graphite Grade: GS', 'Phosphorus: Low', 'Sulfur: <0.1%'],
    image: '/c.webp'
  },
  {
    id: 7,
    name: 'Mixed Cast',
    category: 'Ferrous',
    description: 'General grade mixed cast iron scrap. Primarily sourced from industrial machinery and structural components.',
    specs: ['Grade: Mixed', 'Cleanliness: High', 'Processing: Sorted'],
    image: '/mix-cast.webp'
  },
  {
    id: 8,
    name: 'Unprepared Cast',
    category: 'Ferrous',
    description: 'Oversized cast iron components requiring preparation. Bulk industrial scrap from large-scale demolition and manufacturing.',
    specs: ['Size: Oversized', 'Type: Heavy Cast', 'Origin: Industrial'],
    image: '/unprepare-cast.webp'
  },
  {
    id: 9,
    name: 'Oversized Cast',
    category: 'Ferrous',
    description: 'Extra-large cast iron sections and structural elements. High-density scrap primarily from industrial infrastructure.',
    specs: ['Grade: Industrial', 'Category: Oversized', 'Loading: Bulk'],
    image: '/oversized-cast.webp'
  },
  {
    id: 10,
    name: 'Manganese Steel',
    category: 'Ferrous',
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
      {/* Catalog Header & Filter */}
      <section className="pt-6 md:pt-8 pb-12 bg-white transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
             {/* Main Title Synchronized - Refined Size */}
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 text-center tracking-tight uppercase">
              WE DEAL <span className="text-[#dc2626]">IN</span>
            </h1>

            {/* Enhanced Pill Filters - Refined Size */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 md:px-8 py-2.5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-full border ${
                    activeCategory === cat 
                      ? 'bg-[#dc2626] text-white border-[#dc2626] shadow-lg shadow-[#dc2626]/20 scale-105' 
                      : 'bg-white text-slate-400 hover:text-slate-900 border-slate-100 hover:border-slate-300'
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
      <section className="pb-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                      <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-2 group-hover:text-[#dc2626] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">
                        {product.description}
                      </p>
                    </div>


                    <button 
                      onClick={() => handleRequestQuote(product)}
                      className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#dc2626] transition-colors flex items-center justify-center gap-2 group/btn"
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
