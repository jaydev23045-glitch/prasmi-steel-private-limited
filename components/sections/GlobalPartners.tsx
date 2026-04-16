import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export function GlobalPartners() {
  const regions = [
    { name: 'USA', status: 'Active Trading', partners: '12+ Foundries' },
    { name: 'Canada', status: 'Core Operations', partners: '15+ Partners' },
    { name: 'Europe', status: 'Strategic Supply', partners: '8+ Smelters' },
    { name: 'Middle East', status: 'Logistics Hub', partners: '5+ Networks' },
  ];

  return (
    <section id="global" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <Globe className="w-full h-full scale-150 rotate-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-slate-600"></div>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Global Partners</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-10 tracking-tighter leading-none">
              Connected with <br/><span className="text-slate-400">global market</span>
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
              Our material sourcing network spans across four continents, enabling a resilient and agile supply chain that operates around the clock to reliably meet the demands of our valued customers
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {regions.map((region, idx) => (
                    <motion.div 
                        key={region.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/5 p-6 rounded-none border border-white/10"
                    >
                        <div className="font-bold text-lg mb-1">{region.name}</div>
                        <div className="text-xs text-slate-500 uppercase font-black tracking-widest mb-2">{region.status}</div>
                        <div className="text-sm text-slate-300">{region.partners}</div>
                    </motion.div>
                ))}
            </div>
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-transparent z-10"></div>
            <img 
              src="/b.webp" 
              alt="Global Shipment Logistics" 
              className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
            />
            <div className="absolute bottom-10 right-10 z-20 bg-white text-slate-900 p-8 shadow-2xl">
                <div className="text-4xl font-black tracking-tighter mb-1">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Operation Cycle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
