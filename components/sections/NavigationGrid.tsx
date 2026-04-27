import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NavigationGrid() {
  const sections = [
    {
      title: "WE BUY SCRAP",
      desc: "We purchase bulk quantities of ferrous and non-ferrous scrap, including iron, steel, copper, aluminum, brass, and MANGANESE steel.— from trusted & RELIABLE suppliers",
      link: "/products",
      image: "/bulk_scrap_trading.webp",
      label: "PROCUREMENT"
    },
    {
      title: "Processing & SORTING",
      desc: "Systematic segregation, cleaning, GRADING and processing of metals to ensure MAXIMUM quality and usability for recycling or resale.",
      link: "/what-we-do",
      image: "/weprocess.webp",
      label: "Operations"
    },
    {
      title: "WE SELL SCRAP",
      desc: "WE SELL IN Bulk QUANTITIES of metal scrap to foundries, mills, and industrial buyers with FAIR pricing and reliable delivery.",
      link: "/why-choose-us",
      image: "/global-reach-v2.png",
      label: "SUPPLYING"
    },
    {
      title: "Logistics & Transport",
      desc: "We coordinate secure, on-time delivery for both local and international shipments. From container loads to custom freight solutions, we make moving material simple and seamless.",
      link: "/why-choose-us",
      image: "/global-reach-v2.png",
      label: "GLOBAL SHIPMENTS"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Reference-Matched Header Section */}
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
            What <span className="text-[#dc2626]">We Do</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#dc2626] mb-8" />
          <p className="text-slate-500 font-light max-w-2xl text-lg leading-relaxed">
            From buying to processing and selling, we manage the complete scrap lifecycle.
          </p>
        </div>

        {/* 4-Column Reference-Matched Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, idx) => (
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
                  src={section.image} 
                  alt={section.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">
                  {section.label}
                </span>
                <h3 className="text-xl font-black text-[#dc2626] mb-4 tracking-tight group-hover:text-slate-900 transition-colors duration-300">
                  {section.title}
                </h3>
                <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm flex-1">
                  {section.desc}
                </p>

                <Link 
                  to={section.link}
                  className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-900 hover:text-[#dc2626] transition-colors"
                >
                  Learn More
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
