import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCw, ArrowRight } from 'lucide-react';

export function WhyUsMini() {
  const [flippedIdx, setFlippedIdx] = useState<number | null>(null);

  const pillars = [
    {
      title: "Bulk Scrap Trading",
      desc: "Ready to buy and sell scrap materials in bulk with absolute market transparency.",
      backDesc: "We specialize in processing container-load volumes for international market & truck and loose load for local market with real-time market-linked pricing and transparent weighing protocols.",
      image: "/bulk_scrap_trading.webp",
      label: "ADVANTAGE"
    },
    {
      title: "Logistics",
      desc: "Whether we're moving materials across the country or domestic deliveries, we manage everything smoothly and efficiently.",
      backDesc: "Our team manages logistics end-to-end — including documentation, transport, and timelines — so you can focus on what matters most: running your business smoothly and efficiently.",
      image: "/end-to-end-solutions.png",
      label: "TRANSPORT"
    },
    {
      title: "Prompt Payment",
      desc: "We maintain a flawless payment history with zero delays or defaults to date.",
      backDesc: "Prasmi Steel maintains an high credit rating with zero payment defaults in past years, offering instant settlements upon material receives and verifications.",
      image: "/material_grading.webp",
      label: "CREDIBILITY"
    },
    {
      title: "Sustainable Practices",
      desc: "Committed to sustainable practices with full environmental compliance at every stage.",
      backDesc: "At Prasmi Steel, sustainability is at the heart of everything we do. Our facilities operate with zero-waste targets,",
      image: "/sustainable-practices-v2.png",
      label: "COMPLIANCE"
    },
    {
      title: "Industry Experience",
      desc: "With years of hands-on experience in the industry, we are a name you can trust.",
      backDesc: "With years of hands-on experience in industry - from product classification to international compliance. Our deep industry expertise enables us to provide smarter solutions",
      image: "/global-reach-v2.png",
      label: "EXPERTISE"
    },
    {
      title: "Trusted Partnerships",
      desc: "Building long-term relationships through transparency, reliability, and mutual growth.",
      backDesc: "Our team works closely with you to understand your unique sourcing goals and challenges, offering clear communication, flexible services, and tailored solutions",
      image: "/trusted-partnerships.png",
      label: "RELIABILITY"
    }
  ];

  const handleFlip = (idx: number) => {
    setFlippedIdx(flippedIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
            Why <span className="text-[#dc2626]">Choose Us</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#dc2626] mb-8" />
          <p className="text-slate-500 font-light max-w-2xl text-lg leading-relaxed">
            Your Reliable Partner - Because reliable partners create better outcomes — and stronger business relationships.
          </p>
        </div>

        {/* 6 Pillars Grid - Flip Card Implementation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="h-[450px] [perspective:1000px]">
              <motion.div
                initial={false}
                animate={{ rotateY: flippedIdx === idx ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
                className="relative w-full h-full [transform-style:preserve-3d]"
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-white border border-slate-100 shadow-sm flex flex-col overflow-hidden [backface-visibility:hidden]">
                  {/* Image Frame */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/10" />
                  </div>

                  {/* Content Body */}
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">
                      {pillar.label}
                    </span>
                    <h3 className="text-xl font-black text-[#dc2626] mb-4 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm flex-1">
                      {pillar.desc}
                    </p>

                    <button 
                      onClick={() => handleFlip(idx)}
                      className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-900 hover:text-[#dc2626] transition-colors mt-auto"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-[#1a1c20] p-10 flex flex-col [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="h-1 w-12 bg-[#dc2626] mb-8" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4 block">
                    DETAILS & INSIGHTS
                  </span>
                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-12 text-lg">
                    {pillar.backDesc}
                  </p>
                  
                  <button 
                    onClick={() => handleFlip(idx)}
                    className="mt-auto inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-white hover:text-[#dc2626] transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Return to Overview
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
