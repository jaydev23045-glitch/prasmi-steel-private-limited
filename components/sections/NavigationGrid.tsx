import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    id: 'buy',
    title: "We Buy Scrap",
    message: "Prasmi Steel specializes in the systematic procurement of high-quality ferrous and non-ferrous scrap from global and local industrial sources.",
    image: "/bulk_scrap_trading.webp",
    link: "/products"
  },
  {
    id: 'process',
    title: "We Process Scrap",
    message: "Our facilities utilize advanced sorting and grading technologies to transform industrial waste into premium, high-purity metal resources.",
    image: "/weprocess.webp",
    link: "/what-we-do"
  },
  {
    id: 'sell',
    title: "We Sell Scrap",
    message: "We supply a wide range of graded metal scrap to foundries and mills worldwide, ensuring consistent quality and competitive industrial pricing.",
    image: "/wesell.webp",
    link: "/products"
  },
  {
    id: 'logistics',
    title: "Manage Logistics & Transport",
    message: "With our global network of shipping partners, we ensure seamless, on-time delivery of metal resources across borders with complete transparency.",
    image: "/logistics_excellence.webp",
    link: "/contact"
  }
];

export function NavigationGrid() {
  const [activeTab, setActiveTab] = useState(sections[0]);

  return (
    <section className="py-24 lg:py-32 bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Static Heading & Intro (Left) */}
          <div className="flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl font-black text-slate-900 mb-8 tracking-tight">
                What we do
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-sm">
                Driving the future of sustainability, we deliver reliable scrap resources to recycling industries, supporting efficient resource management across India and worldwide.
              </p>
            </motion.div>
          </div>

          {/* Column 2: Interactive Menu (Middle) */}
          <div className="flex flex-col border-t border-slate-200">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section)}
                className={`w-full group flex items-center justify-between py-10 border-b border-slate-200 transition-all duration-300 text-left ${
                  activeTab.id === section.id ? 'pl-4' : 'hover:pl-4'
                }`}
              >
                <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  activeTab.id === section.id ? 'text-[#38bdf8]' : 'text-slate-500 group-hover:text-slate-900'
                }`}>
                  {section.title}
                </span>
                <ArrowRight className={`w-6 h-6 transition-all duration-300 ${
                  activeTab.id === section.id 
                    ? 'text-[#38bdf8] translate-x-0 opacity-100' 
                    : 'text-slate-400 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                }`} />
              </button>
            ))}
          </div>

          {/* Column 3: Dynamic Image & Info Card (Right) */}
          <div className="relative pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl z-0"
              >
                <img 
                  src={activeTab.image} 
                  alt={activeTab.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/10" />
              </motion.div>
            </AnimatePresence>

            {/* Floating Info Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id + "-card"}
                initial={{ opacity: 0, y: 30, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 20, x: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute -bottom-12 -left-6 md:-left-12 bg-white p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-w-md z-10 border border-slate-50"
              >
                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                  {activeTab.message}
                </p>
                <Link 
                  to={activeTab.link}
                  className="group flex items-center gap-6"
                >
                  <div className="w-12 h-[1.5px] bg-[#38bdf8] transition-all duration-300 group-hover:w-20" />
                  <span className="text-xs font-black text-slate-900 tracking-[0.25em] uppercase">
                    Know More
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
