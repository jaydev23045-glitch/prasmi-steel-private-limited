import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CorporateDetails() {
  const categories = [
    { name: "We Buy Scrap", active: true },
    { name: "We Process Scrap", active: false },
    { name: "We Sell Scrap", active: false },
    { name: "Manage Logistics & Transport", active: false },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#f4f5f6] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* Left Side: Text Content (Col 1-3) */}
          <div className="lg:col-span-3 pt-4">
            <h2 className="text-3xl md:text-[42px] font-black text-slate-900 mb-8 tracking-tighter">
              What we do
            </h2>
            <p className="text-slate-800 leading-relaxed font-medium text-[15px]">
              Driving the future of sustainability, we deliver reliable scrap resources to recycling industries, supporting efficient resource management across India and worldwide.
            </p>
          </div>

          {/* Middle: Links (Col 4-5) */}
          <div className="lg:col-span-3 lg:pt-16">
            <div className="flex flex-col gap-3">
              {categories.map((category) => (
                <div 
                  key={category.name}
                  className={`flex items-center justify-between pb-3 border-b transition-colors cursor-pointer group ${
                    category.active ? 'border-[#38bdf8]' : 'border-slate-300 hover:border-slate-500'
                  }`}
                >
                  <span className={`text-[15px] font-semibold transition-colors ${
                    category.active ? 'text-[#38bdf8]' : 'text-slate-700 group-hover:text-slate-900'
                  }`}>
                    {category.name}
                  </span>
                  {category.active && (
                    <ArrowRight className="w-4 h-4 text-[#38bdf8]" strokeWidth={3} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image with Floating Box (Col 6-12) */}
          <div className="lg:col-span-6 relative mt-10 lg:mt-0">
            <div className="w-full aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
              <img 
                src="/weprocess.webp" 
                alt="Prasmi Steel Metal Scrap Processing" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Floating White Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-12 lg:absolute lg:-bottom-16 lg:-left-20 lg:w-[110%] max-w-[500px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] z-20 mt-[-20px] lg:mt-0 relative"
            >
              <p className="text-slate-700 text-sm md:text-[15px] leading-relaxed font-medium mb-10">
                Prasmi Steel Private Limited is an emerging leader in the global scrap industry, specializing in the sourcing, processing and supply of best-quality ferrous and non-ferrous metal scrap.
              </p>
              
              <div className="flex items-center justify-end">
                <Link to="/about" className="group flex items-center gap-4">
                  <div className="w-16 h-[2px] bg-[#38bdf8] transition-all duration-300 group-hover:w-24" />
                  <span className="text-[13px] font-bold text-slate-900 tracking-[0.1em] uppercase">
                    Know More
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
