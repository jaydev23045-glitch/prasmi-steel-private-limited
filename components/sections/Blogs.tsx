import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Clock, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    slug: "scrap-metal-industry-growth",
    title: "Scrap Metal Industry Growth | Ferrous & Non-Ferrous Scrap Supplier in India",
    excerpt: "The global demand for sustainable and cost-effective raw materials has significantly increased the importance of scrap metal in modern industry. Prasmi Steel play a vital role in bridging the gap.",
    category: "Market Focus",
    date: "April 14, 2026",
    readTime: "7 min read",
    image: "/industrial-growth.webp",
    color: "bg-[#4682b4]"
  },
  {
    id: 2,
    slug: "choosing-right-scrap-supplier",
    title: "How to Choose the Right Scrap Metal Supplier | Prasmi Steel Guide",
    excerpt: "Selecting the right scrap supplier is crucial for maintaining production efficiency and product quality. A dependable supplier ensures consistency, proper grading, and timely delivery.",
    category: "Strategic Sourcing",
    date: "April 14, 2026",
    readTime: "5 min read",
    image: "/supplier-selection.webp",
    color: "bg-slate-900"
  },
  {
    id: 3,
    slug: "benefits-high-quality-scrap-smelting",
    title: "Benefits of High-Quality Scrap in Smelting Process | Improve Efficiency",
    excerpt: "Using high-quality scrap metal directly impacts the efficiency of smelting processes. Clean and well-graded scrap reduces impurities and improves melting efficiency.",
    category: "Technical Process",
    date: "April 14, 2026",
    readTime: "6 min read",
    image: "/smelting-efficiency.webp",
    color: "bg-[#4682b4]"
  },
  {
    id: 4,
    slug: "ferrous-vs-non-ferrous-differences",
    title: "Ferrous vs Non-Ferrous Scrap: Key Differences Explained",
    excerpt: "Understand the difference between ferrous and non-ferrous scrap metals and their unique industrial applications. Complete guide by Prasmi Steel experts.",
    category: "Technical Standards",
    date: "April 14, 2026",
    readTime: "4 min read",
    image: "/products-hero.webp",
    color: "bg-slate-900"
  },
  {
    id: 5,
    slug: "future-of-scrap-metal-sustainability",
    title: "Future of Scrap Metal Industry | Sustainable Metal Recycling Trends",
    excerpt: "Discover how scrap metal recycling supports sustainability and industrial growth. Insights into future trends by Prasmi Steel Private Limited.",
    category: "Sustainability",
    date: "April 14, 2026",
    readTime: "6 min read",
    image: "/c.webp",
    color: "bg-red-600"
  },
  {
    id: 6,
    slug: "global-scrap-metal-trade-trends",
    title: "Global Scrap Metal Trade Trends | Import Export Scrap Business",
    excerpt: "Explore how global scrap trade is evolving with changing demand, logistics, and pricing trends. Insights into the international marketplace.",
    category: "Global Trade",
    date: "April 14, 2026",
    readTime: "5 min read",
    image: "/b.webp",
    color: "bg-slate-900"
  }
];

export function Blogs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Space */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-[#4682b4]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.45em] text-slate-500">Prasmi Steel Journal</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8">
              Industrial <span className="text-[#4682b4]">Steel Recycling</span> & Market Reports
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 font-light leading-relaxed mb-12"
            >
              Exploring the convergence of heavy industry, technical excellence, and the global circular economy through our professional technical repository.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-mesh bg-grid relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-slate-200" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px w-12 bg-slate-200"></div>
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Journal Archive</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/blogs/${post.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-slate-100">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute top-0 right-0 ${post.color} text-white px-6 py-3 font-black text-[10px] uppercase tracking-widest`}>
                      {post.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                       <span className="text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                          Read Analysis <ArrowUpRight className="w-4 h-4" />
                       </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                         <Clock className="w-3 h-3 text-[#4682b4]" /> {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#4682b4] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="pt-4 flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                      Full Analysis <ChevronRight className="w-4 h-4 text-[#4682b4]" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
