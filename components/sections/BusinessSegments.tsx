import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BusinessSegments() {
  const [activeSegment, setActiveSegment] = useState("Trading");

  const segments = [
    "Trading",
    "Manufacturing",
    "Recycling & Processing"
  ];

  const contentMap: Record<string, { title: string; description: string; image: string; link: string }> = {
    "Trading": {
      title: "Trading",
      description: "At Prasmi Steel, we specialize in the sourcing and supply of ferrous and non-ferrous scrap commodities across global markets. With a strong international footprint, we ensure consistent quality, reliable sourcing, and seamless delivery to recycling industries worldwide.",
      image: "/OP.webp",
      link: "/about"
    },
    "Manufacturing": {
      title: "Manufacturing",
      description: "We supply best-grade recycled metals to foundries, steel mills, and smelters, ensuring high-quality raw materials that meet stringent industrial standards and integrates effortlessly into production processes, helping manufacturers achieve superior quality while maintaining cost efficiency.",
      image: "/weprocess.webp",
      link: "/about"
    },
    "Recycling & Processing": {
      title: "Recycling & Processing",
      description: "We work closely with scrap yards to streamline the processing of recyclable materials through collection, sorting, cleaning and segregation. Our streamlined approach enhances material recovery, improves quality, and maximizes value for recycling and manufacturing use.",
      image: "/webuy.webp",
      link: "/about"
    }
  };

  const activeContent = contentMap[activeSegment];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex justify-end mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">
            Industries We Serve
          </h2>
        </div>

        {/* Horizontal Menu */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 px-4">
          {segments.map((segment) => {
            const isActive = segment === activeSegment;
            return (
              <div 
                key={segment} 
                onClick={() => setActiveSegment(segment)}
                className="flex flex-col items-center group cursor-pointer min-w-max"
              >
                <span className={`text-[15px] font-medium pb-2 transition-colors ${
                  isActive ? 'text-[#38bdf8]' : 'text-slate-800 border-b border-slate-300 hover:border-slate-500 hover:text-slate-900'
                }`}>
                  {segment}
                </span>
                {isActive && (
                  <motion.div 
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="mt-2"
                  >
                    <ArrowDown className="w-5 h-5 text-[#38bdf8]" strokeWidth={2.5} />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="relative mt-12 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSegment}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Image Container (pushed to right) */}
              <div className="w-[100%] md:w-[85%] ml-auto aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-slate-100">
                <img 
                  src={activeContent.image} 
                  alt={activeContent.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Floating White Box (overlapping left) */}
              <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 lg:p-16 absolute top-1/2 -translate-y-1/2 left-0 w-[90%] md:w-[50%] max-w-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-20 border border-slate-50">
                <h3 className="text-2xl md:text-[28px] font-light text-[#38bdf8] mb-6 tracking-wide">
                  {activeContent.title}
                </h3>
                
                <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed font-medium mb-12">
                  {activeContent.description}
                </p>
                
                <div className="flex items-center justify-end">
                  <Link to={activeContent.link} className="group flex items-center gap-4">
                    <div className="w-16 h-[2px] bg-[#38bdf8] transition-all duration-300 group-hover:w-24" />
                    <span className="text-[13px] font-bold text-slate-900 tracking-[0.1em] uppercase">
                      Know More
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
