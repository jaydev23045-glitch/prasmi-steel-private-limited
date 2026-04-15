import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Quote, ChevronRight } from 'lucide-react';

const fullPosts = {
  "scrap-metal-industry-growth": {
    title: "Scrap Metal Industry Growth | Ferrous & Non-Ferrous Scrap Supplier in India",
    date: "April 14, 2026",
    readTime: "7 min read",
    category: "Market Focus",
    image: "/industrial_growth.png",
    meta: "Explore the growing importance of scrap metal in modern industry. Learn how Prasmi Steel Private Limited supplies high-quality ferrous and non-ferrous scrap globally.",
    content: [
      "The global demand for sustainable and cost-effective raw materials has significantly increased the importance of scrap metal in modern industry. Companies like Prasmi Steel Private Limited play a vital role in bridging the gap between waste generation and industrial consumption.",
      "Ferrous and non-ferrous scrap metals are widely used in foundries and smelters due to their efficiency and recyclability. By reusing scrap materials such as cast iron, HMS 1 & 2, and aluminum components, industries can reduce production costs while maintaining high-quality output.",
      "Scrap recycling also contributes to environmental conservation by reducing mining activities, lowering energy consumption, and minimizing waste. As industries move toward greener practices, reliable suppliers become essential to ensure consistent quality and supply.",
      "Prasmi Steel Private Limited is committed to delivering premium scrap solutions that support both industrial growth and environmental responsibility."
    ]
  },
  "choosing-right-scrap-supplier": {
    title: "How to Choose the Right Scrap Metal Supplier | Prasmi Steel Guide",
    date: "April 14, 2026",
    readTime: "5 min read",
    category: "Strategic Sourcing",
    image: "/supplier_selection.png",
    meta: "Discover key factors to choose a reliable scrap supplier. Quality, consistency, and global sourcing explained by Prasmi Steel Private Limited.",
    content: [
      "Selecting the right scrap supplier is crucial for maintaining production efficiency and product quality. A dependable supplier ensures consistency, proper grading, and timely delivery.",
      "One of the key factors to consider is the quality of materials. Suppliers must provide properly sorted and processed scrap that meets industry standards. Another important factor is supply reliability, especially for businesses that depend on continuous raw material availability.",
      "Experience and market reputation also play a major role. Companies with strong industry knowledge and global networks can offer better sourcing and competitive pricing.",
      "Prasmi Steel Private Limited focuses on delivering tailored scrap solutions, ensuring that clients receive materials that match their exact requirements while maintaining consistent quality and supply."
    ]
  },
  "benefits-high-quality-scrap-smelting": {
    title: "Benefits of High-Quality Scrap in Smelting Process | Improve Efficiency",
    date: "April 14, 2026",
    readTime: "6 min read",
    category: "Technical Process",
    image: "/smelting_efficiency.png",
    meta: "Learn how high-quality scrap improves smelting efficiency, reduces costs, and enhances output. Trusted insights from Prasmi Steel Private Limited.",
    content: [
      "Using high-quality scrap metal directly impacts the efficiency of smelting processes. Clean and well-graded scrap reduces impurities, improves melting efficiency, and enhances the final product quality.",
      "For foundries and metal processors, the right type of scrap can lead to: Lower energy consumption, Faster melting cycles, Reduced slag formation, and Improved output consistency.",
      "Materials like manganese steel scrap and aluminum engines, when properly processed, can significantly boost operational performance.",
      "At Prasmi Steel Private Limited, we ensure that every batch of scrap meets strict quality standards, helping our clients achieve optimal results in their production processes."
    ]
  },
  "ferrous-vs-non-ferrous-differences": {
    title: "Ferrous vs Non-Ferrous Scrap: Key Differences Explained",
    date: "April 14, 2026",
    readTime: "4 min read",
    category: "Technical Standards",
    image: "/products-hero.png",
    meta: "Understand the difference between ferrous and non-ferrous scrap metals and their industrial applications. Complete guide by Prasmi Steel.",
    content: [
      "Scrap metals are broadly classified into ferrous and non-ferrous categories, each with unique properties and applications.",
      "Ferrous scrap includes iron and steel-based materials such as HMS 1 & 2 and cast iron. These are widely used in construction, manufacturing, and heavy industries due to their strength and durability.",
      "Non-ferrous scrap, on the other hand, includes metals like aluminum, copper, and brass. These materials are known for their corrosion resistance, lightweight properties, and high conductivity.",
      "Understanding these differences helps industries choose the right materials for their specific applications. Prasmi Steel Private Limited offers a wide range of both ferrous and non-ferrous scrap, ensuring clients get exactly what they need."
    ]
  },
  "future-of-scrap-metal-sustainability": {
    title: "Future of Scrap Metal Industry | Sustainable Metal Recycling Trends",
    date: "April 14, 2026",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/c.webp",
    meta: "Discover how scrap metal recycling supports sustainability and industrial growth. Insights into future trends by Prasmi Steel Private Limited.",
    content: [
      "As global industries shift toward sustainability, the scrap metal industry is becoming more important than ever. Recycling metal not only conserves natural resources but also reduces carbon emissions and energy usage.",
      "Governments and industries worldwide are encouraging the use of recycled materials, creating new opportunities for growth in the scrap sector.",
      "Companies that focus on quality, transparency, and efficient supply chains will lead this transformation. Prasmi Steel Private Limited is dedicated to being part of this change by providing reliable and sustainable scrap solutions.",
      "With increasing awareness and demand, the future of the scrap industry looks strong, innovative, and environmentally responsible."
    ]
  },
  "global-scrap-metal-trade-trends": {
    title: "Global Scrap Metal Trade Trends | Import Export Scrap Business",
    date: "April 14, 2026",
    readTime: "5 min read",
    category: "Global Trade",
    image: "/b.webp",
    meta: "Explore how global scrap trade is evolving with changing demand, logistics, and pricing trends. Learn from Prasmi Steel experts.",
    content: [
      "The scrap metal trade has evolved into a global network connecting suppliers and buyers across continents. Market demand, pricing trends, and logistics play a crucial role in this ecosystem.",
      "International trade allows companies to access a wider range of materials while optimizing costs. However, it also requires strong coordination, compliance with regulations, and efficient transportation systems.",
      "Prasmi Steel Private Limited is steadily expanding its global reach, building partnerships and ensuring smooth supply chains for clients worldwide."
    ]
  }
};

export function BlogPost() {
  const { slug } = useParams();
  const post = fullPosts[slug as keyof typeof fullPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-8">Article Not Found</h1>
          <Link to="/blogs" className="text-red-600 font-bold uppercase tracking-widest flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen selection:bg-red-600 selection:text-white">
      <div className="h-20" />

      {/* Hero Header */}
      <section className="relative h-[70vh] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover grayscale brightness-[0.3] scale-105"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.4em] mb-12"
          >
            <ArrowLeft className="w-4 h-4 text-red-600" /> Back to Journal
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-red-600 text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest">
                {post.category}
              </span>
              <div className="h-px w-12 bg-white/20"></div>
              <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-12">
              {post.title}
            </h1>
            <div className="flex items-center gap-8 text-white/50 text-[10px] font-black uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600" /> {post.readTime}
              </span>
              <span>•</span>
              <span>Technical Analysis</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Sidebar Metadata */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-16">
              <div className="p-10 bg-slate-50 border-l-4 border-red-600">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Briefing</h4>
                <p className="text-slate-600 text-sm italic font-light leading-relaxed">
                  "{post.meta}"
                </p>
              </div>

              <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Logistics Contact</h4>
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-900 tracking-tight">Prasmi Steel Private Limited</p>
                  <a href="mailto:prasmisteel@gmail.com" className="text-sm text-red-600 font-black tracking-widest hover:underline">prasmisteel@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Main Body */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="lg:col-span-8 space-y-12"
            >
              {post.content.map((paragraph, index) => (
                <div key={index} className="relative">
                   {index === 0 && <span className="absolute -left-8 top-0 h-full w-0.5 bg-slate-100 hidden md:block"></span>}
                   <p className={`text-xl md:text-2xl text-slate-800 leading-relaxed font-light ${index === 0 ? 'first-letter:text-6xl first-letter:font-black first-letter:text-red-600 first-letter:mr-3 first-letter:float-left first-letter:mt-1' : ''}`}>
                      {paragraph}
                   </p>
                </div>
              ))}

              <div className="pt-20 border-t border-slate-100 mt-20">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-1 bg-red-600"></div>
                   <h3 className="text-sm font-black uppercase tracking-[0.4em] text-slate-900">End of Analysis</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Footer */}
      <section className="bg-slate-50 py-32 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-12">Continue Reading</h2>
          <div className="flex justify-center">
            <Link 
               to="/blogs" 
               className="group flex items-center gap-6 bg-slate-900 text-white px-10 py-6 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 transition-all duration-500"
            >
               Return to Journal Archive <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
