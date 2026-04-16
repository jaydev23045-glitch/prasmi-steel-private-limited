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
    name: 'UNprepared cast',
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
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#4682b4] transition-colors font-bold uppercase tracking-widest text-[10px] group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            Home / Material Catalog
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-3 mb-8 bg-slate-50 px-4 py-1.5 rounded-none border border-slate-100">
                <span className="text-[#4682b4] font-bold uppercase tracking-[0.3em] text-[10px]">Material Excellence</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black text-slate-900 leading-[1.1] mb-10 tracking-tighter">
                Premium <span className="text-[#4682b4]">Materials</span> for Global Industry.
              </h1>
              <p className="text-xl text-slate-600 font-light leading-relaxed max-w-xl border-l-4 border-slate-200 pl-8">
                Every shipment is meticulously sorted and graded to meet international quality standards, ensuring maximum furnace yield for our partners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video bg-slate-900 overflow-hidden shadow-2xl"
            >
              <img 
                src="/products-hero.webp" 
                alt="Product Assortment" 
                className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute top-10 right-10 flex gap-4">
                 <div className="bg-white/10 backdrop-blur-md px-6 py-4 border border-white/20">
                    <div className="text-white font-black text-2xl leading-none">100%</div>
                    <div className="text-white/60 text-[8px] uppercase tracking-widest mt-1 font-bold">Grade Verified</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catalog Filter */}
      <section className="py-12 border-b border-slate-100 sticky top-[128px] z-30 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Filter by category:</span>
            <div className="flex gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-[#4682b4] text-white shadow-xl shadow-[#4682b4]/20' 
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
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Material Catalog</h2>
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
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-md px-3 py-1 border border-slate-200 shadow-sm text-[8px] font-bold uppercase tracking-widest text-slate-900">
                        {product.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-2 group-hover:text-[#4682b4] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-3">
                         <Shield className="w-3.5 h-3.5 text-[#4682b4]" />
                         <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Technical Data</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.map((spec, i) => (
                          <span key={i} className="text-[9px] font-medium text-slate-400 bg-slate-50 px-2 py-1 border border-slate-100 capitalize">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => handleRequestQuote(product)}
                      className="w-full py-4 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#4682b4] transition-colors flex items-center justify-center gap-2 group/btn"
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

      {/* Quality Commitment & Blog Grid */}
      <section className="py-24 bg-mesh bg-grid relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-slate-200" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-12 bg-slate-200"></div>
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Quality Commitment</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: <Shield />, title: 'Composition Guarantee', text: 'All materials undergo XRF spectrometer testing to verify exact composition.' },
                { icon: <Factory />, title: 'Furnace Ready', text: 'Scrap is sized and cleaned to meet specific melting requirements of foundries.' },
                { icon: <Warehouse />, title: 'Logistics Precision', text: 'Streamlined container loading and documentation for seamless global transit.' },
                { icon: <Target />, title: 'Custom Sourcing', text: 'Specialized segregation for boutique alloys and high-purity non-ferrous requirements.' }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                   <div className="w-10 h-10 bg-slate-50 flex items-center justify-center text-[#4682b4]">
                      {item.icon}
                   </div>
                   <h3 className="font-black uppercase tracking-widest text-[10px] text-slate-900">{item.title}</h3>
                   <p className="text-xs text-slate-500 font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
