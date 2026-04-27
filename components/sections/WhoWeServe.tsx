import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WhoWeServe() {
  const segments = [
    {
      title: "Foundries, Steel Mills",
      desc: "Providing high-purity ferrous and non-ferrous scrap for specialized casting and melting operations.",
      image: "/foundry_operation_showcase_1777296179078.png",
      label: "MANUFACTURERS"
    },
    {
      title: "Recycling & Waste Management Firms",
      desc: "Collaborating with waste firms to process and repurpose industrial scrap into reusable raw materials.",
      image: "/steel_mill_industrial_processing_1777296201161.png",
      label: "Downstream Channels"
    },
    {
      title: "Traders & Importers",
      desc: "Partnering with global trading houses to facilitate large-scale international scrap movements.",
      image: "/manufacturing_facility_interior_1777296224168.png",
      label: "NETWORK"
    },
    {
      title: "Processing Units",
      desc: "Supporting specialized processing units with high-quality, meticulously sorted raw materials for secondary production.",
      image: "/industrial_storage_logistics_hub_1777296243710.png",
      label: "SCRAP YARDS"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section - Matched Style */}
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
            Who <span className="text-[#dc2626]">We Serve</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#dc2626] mb-8" />
          <p className="text-slate-500 font-light max-w-2xl text-lg leading-relaxed">
            Delivering best-quality material solutions to the backbone of global industry.
          </p>
        </div>

        {/* 4-Column Industrial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl flex flex-col h-full overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={segment.image} 
                  alt={segment.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">
                  {segment.label}
                </span>
                <h3 className="text-xl font-black text-[#dc2626] mb-4 tracking-tight group-hover:text-slate-900 transition-colors duration-300">
                  {segment.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm flex-1">
                  {segment.desc}
                </p>

                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-900 hover:text-[#dc2626] transition-colors"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
