import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Quote, ChevronRight } from 'lucide-react';

const fullPosts = {
  "scrap-metal-industry-growth": {
    title: "Industry Growth: Ferrous & Non-Ferrous Scrap Guide",
    date: "April 14, 2026",
    readTime: "10 min read",
    category: "Market Focus",
    image: "/industrial-growth.webp",
    meta: "Explore the exponential growth of the global scrap metal industry and how Prasmi Steel is leading the charge in sustainable procurement and high-grade supply chain management.",
    content: [
      "The global scrap metal industry is witnessing a transformative surge, driven by an unprecedented demand for sustainable raw materials and a collective shift toward the circular economy. As primary mining becomes increasingly costly and environmentally taxing, the role of processed scrap metal has evolved from a secondary resource to a critical industrial lifeline. Prasmi Steel Private Limited stands at the forefront of this evolution, bridging the gap between global supply surpluses and the rising appetite of modern foundries and smelting plants.",
      "The exponential growth seen in the last decade can be attributed to several factors. Firstly, the technical advantages of using high-grade ferrous and non-ferrous scrap are undeniable. Recycled materials like Heavy Melting Steel (HMS 1 & 2) and Cast Iron (CI) require significantly less energy to re-melt compared to the energy-intensive process of extracting virgin ore. In fact, steel produced from scrap uses approximately 75% less energy, making it the preferred choice for forward-thinking manufacturers who prioritize both their bottom line and their ESG (Environmental, Social, and Governance) commitments.",
      "Furthermore, the infrastructure boom in emerging markets has created a persistent need for structural steel and aluminum components. Prasmi Steel has strategically positioned its operations to respond to these market fluctuations. By maintaining a robust inventory of high-purity scrap—ranging from discarded electric motors to oversized manganese steel—we ensure that our partners in the smelting and foundries sectors have the consistent feedstock necessary to maintain continuous production cycles. This reliability is the bedrock of industrial growth.",
      "Beyond the raw economics, the environmental imperative is a major driver of industry expansion. Every ton of recycled steel saves over 1,400 kilograms of iron ore, 740 kilograms of coal, and 120 kilograms of limestone. At Prasmi Steel, we don't just see ourselves as a trading house; we are environmental stewards. Our rigorous sorting and grading processes ensure that only the highest quality recyclable materials enter the supply chain, minimizing waste and maximizing the efficiency of the global recycling loop.",
      "Looking ahead, the future of the scrap metal industry is bright. With innovations in automated sorting technologies and a global push for 'Green Steel,' the demand for quality-assured scrap will only continue to rise. Prasmi Steel Private Limited is committed to investing in these future-ready processes, ensuring that our clients in India and abroad remain competitive in an increasingly resource-conscious world. We are not just supplying metal; we are fueling the sustainable industrial revolution."
    ]
  },
  "choosing-right-scrap-supplier": {
    title: "Choosing the Right Scrap Metal Supplier",
    date: "April 14, 2026",
    readTime: "8 min read",
    category: "Strategic Sourcing",
    image: "/supplier-selection.webp",
    meta: "In a volatile global market, selecting a scrap metal supplier requires a deep dive into quality metrics, logistical resilience, and grading transparency.",
    content: [
      "Selecting the right scrap metal supplier is one of the most critical strategic decisions a purchasing manager in the metal industry can make. In an industry defined by variable grades, volatile pricing, and complex logistics, a dependable partner is the difference between operational excellence and costly production downtime. At Prasmi Steel, we understand that our clients aren't just looking for a vendor; they are looking for a reliable extension of their own manufacturing chain.",
      "The first pillar of a great supplier is grading transparency. Not all scrap is created equal, and inconsistent grading can lead to disastrous impurities in the furnace. A professional supplier like Prasmi Steel adheres to strict international standards for materials like HMS 1 & 2, ensuring that moisture content, non-metallic inclusions, and sizing are all within the specified tolerances. When you receive a shipment from us, the specifications on the manifest match the reality on the ground—every time.",
      "Logistical resilience is the second key factor. The global scrap trade is prone to supply chain disruptions, from shipping delays to regulatory changes. A supplier's ability to navigate these challenges determines their value. Prasmi Steel prides itself on its logistical agility. Whether we are moving containerized aluminum extrusion or bulk cast iron scrap, our partnerships with leading freight providers and our deep understanding of international shipping protocols ensure that your material arrives when you need it, avoiding the high costs of furnace idle time.",
      "Financial stability and market intelligence are often overlooked but are equally vital. A supplier with a strong balance sheet can weather price fluctuations, ensuring that they don't default on long-term contracts when the market turns. Moreover, at Prasmi Steel, we provide our clients with actionable market insights. By monitoring global trends in scrap generation and smelting demand, we help our partners make informed buying decisions that mitigate risk and capitalize on favorable pricing windows.",
      "Lastly, look for a supplier committed to long-term partnership rather than transactional gains. High-quality service includes responsiveness to inquiries, transparency in documentation, and a willingness to tailor sorting processes to meet a client's specific technical requirements. Prasmi Steel Private Limited was built on these principles of integrity and partnership. We invite you to experience the difference that a professional, quality-focused supplier can make for your business operations."
    ]
  },
  "benefits-high-quality-scrap-smelting": {
    title: "High-Quality Scrap Benefits in Smelting",
    date: "April 14, 2026",
    readTime: "9 min read",
    category: "Technical Process",
    image: "/smelting-efficiency.webp",
    meta: "Discover the technical advantages of using premium, graded scrap in modern smelting. Reduce energy costs and maximize yield with Prasmi Steel's high-purity materials.",
    content: [
      "In the world of metal smelting, the quality of the input material dictates the quality of the output product. For foundries and smelting plants, the transition from lower-grade, uncleaned scrap to premium, well-graded materials like those provided by Prasmi Steel represents a significant technical upgrade. High-quality scrap is not just an expense; it is a catalyst for operational efficiency, cost reduction, and superior metallurgical results.",
      "The most immediate benefit is the reduction in energy consumption. Impurities in low-grade scrap, such as dirt, grease, and non-target metals, act as a drag on the melting cycle. The furnace must expend additional thermal energy to liquify these contaminants, often leading to longer heat times and increased wear on the refractory lining. By utilizing Prasmi Steel's clean cast iron or prepared HMS scrap, melters can achieve faster tap-to-tap times, significantly lowering the kilowatt-hours per ton of metal produced.",
      "Furthermore, high-grade scrap maximizes the yield of the melting process. Contaminants in the feedstock often end up in the slag—a byproduct that of course contains precious metal that is lost to the process. Clean, high-purity aluminum scrap (like extrusion or cast aluminum) or well-segregated ferrous scrap minimizes slag formation, ensuring that a higher percentage of the purchased material actually ends up in the final casting or ingot. This translates directly to a lower cost per unit of finished product and a more profitable operation.",
      "Metallurgical consistency is another critical advantage. In precision casting, the chemical composition of the melt must be exact. Unexpected tramp elements in the scrap, such as copper in steel or iron in aluminum, can lead to brittle products that fail quality tests. Prasmi Steel's rigorous sorting and testing protocols ensure that our materials meet the precise chemical profiles our clients require. This reduces the need for expensive alloying additives in the furnace, as the base material already provides a solid, predictable foundation for the melt.",
      "In summary, the technical and economic case for high-quality scrap is overwhelming. Lower energy costs, improved furnace life, higher yields, and better metallurgical control all contribute to a more resilient and profitable smelting operation. At Prasmi Steel Private Limited, we are dedicated to supplying the premium feedstock that allows our clients to push the boundaries of technical excellence. Partner with us to optimize your smelting process and secure your competitive edge in the global metal market."
    ]
  },
  "ferrous-vs-non-ferrous-differences": {
    title: "Ferrous vs Non-Ferrous Scrap: Key Differences Explained",
    date: "April 14, 2026",
    readTime: "7 min read",
    category: "Technical Standards",
    image: "/products-hero.webp",
    meta: "A deep dive into the metallurgical properties, magnetic profiles, and industrial applications of ferrous and non-ferrous scrap metals.",
    content: [
      "The scrap metal industry is fundamentally divided into two primary categories: Ferrous and Non-Ferrous. For procurement professionals and industrial operators, understanding the nuances between these two groups is essential for effective material management and strategic sourcing. While the most basic difference lies in the presence of iron, the practical implications for recycling, value, and application are vast. Prasmi Steel offers a comprehensive portfolio across both categories to meet diverse industrial needs.",
      "Ferrous metals are primarily composed of iron, which gives them high tensile strength and durable properties. Common examples include carbon steel (like HMS 1 & 2), cast iron, and manganese steel. The easiest way to identify ferrous scrap is through its magnetic property—it will strongly attract a magnet. These materials are the backbone of the construction and manufacturing industries, found in everything from skyscrapers and bridges to heavy machinery. Because of their abundance, ferrous metals are typically recycled in massive volumes, making them a pillar of the global recycling economy.",
      "Non-Ferrous metals, by contrast, contain no significant amount of iron. This makes them highly resistant to corrosion and rust—a key reason why they are used in outdoor applications, piping, and aerospace. Common non-ferrous scraps handled by Prasmi Steel include aluminum (extrusion, cast, and engines), copper, brass, and lead. These metals are generally more valuable per ton than ferrous scrap because they are rarer and require less energy to recycle into high-purity raw materials. They are also non-magnetic, allowing for easy separation in high-speed sorting facilities.",
      "From a recycling perspective, each category requires unique processing. Ferrous scrap is often shredded and separated using massive magnetic drums, while non-ferrous metals are sorted using eddy current separators and heavy media separation (HMS) plants. Prasmi Steel employs advanced processing techniques to ensure that both streams are free of cross-contamination. For example, ensuring that aluminum scrap is free of iron attachments (irony breakage) is crucial for maintaining its market value and usability in secondary aluminum production.",
      "Whether your operations require the heavy-duty strength of ferrous steel or the specialized properties of non-ferrous aluminum, Prasmi Steel Private Limited provides the expertise and the inventory to satisfy your requirements. Our technical knowledge of metallurgical standards ensures that we supply perfectly graded materials that allow our clients to optimize their manufacturing processes. Understanding the science behind the scrap is what makes us more than just a supplier; it makes us your technical partner in metal recycling."
    ]
  },
  "future-of-scrap-metal-sustainability": {
    title: "Future of Scrap Metal Industry | Sustainable Metal Recycling Trends",
    date: "April 14, 2026",
    readTime: "9 min read",
    category: "Sustainability",
    image: "/c.webp",
    meta: "Sustainability is no longer an option—it is the mandate. Discover how the scrap metal industry is driving the global energy transition through the circular economy.",
    content: [
      "The global push for sustainability is redrawing the industrial map, and at its center is the scrap metal industry. As nations strive to meet net-zero carbon targets, the recycling of metal has emerged as one of the most effective levers for reducing the industrial carbon footprint. Prasmi Steel Private Limited is proud to be a leader in this 'Green Revolution,' providing the essential raw materials that allow the metal industry to decouple growth from environmental degradation.",
      "The environmental benefits of recycling scrap are staggering. Mining iron ore is a highly destructive process that consumes vast amounts of water and energy, while the subsequent smelting in a blast furnace releases massive quantities of CO2. In contrast, recycling steel through an Electric Arc Furnace (EAF) reduces greenhouse gas emissions by over 80%. This massive reduction in carbon intensity is why 'Green Steel' initiatives worldwide are prioritizing scrap as their primary feedstock. By choosing Prasmi Steel's high-grade recycled materials, our clients are directly lowering their corporate carbon footprint.",
      "Technological innovation is also driving the industry's sustainable future. We are seeing a rapid emergence of advanced sensors, AI-driven sorting systems, and robotic disassembling units that can extract high-purity non-ferrous metals from complex waste streams. Prasmi Steel is monitoring these developments closely to enhance our own processing capabilities. The goal is to achieve 'infinite recyclability'—a state where metal can be reused indefinitely without any loss in its structural or metallurgical integrity, perfectly closing the loop of the circular economy.",
      "Policy and regulation are the final drivers of this transformation. Many governments are now implementing 'extended producer responsibility' (EPR) laws and carbon taxes that penalize the use of virgin raw materials. These shifts are making recycled scrap more economically attractive than ever. Prasmi Steel assists its clients in navigating this new regulatory landscape by providing documented, high-quality material that helps them meet their sustainability audits and benefit from greener supply chain incentives.",
      "The future of scrap is not just about waste collection; it is about high-tech resource management. At Prasmi Steel Private Limited, we believe that sustainability is the modern definition of quality. By investing in better sorting, cleaner logistics, and transparent supply chains, we are ensuring that the world has the metal it needs to build a better future, without compromising the planet. Join us in our commitment to a sustainable, metal-powered future where recycling is the first choice, not the last resort."
    ]
  },
  "global-scrap-metal-trade-trends": {
    title: "Global Scrap Metal Trade Trends | Import Export Scrap Business",
    date: "April 14, 2026",
    readTime: "8 min read",
    category: "Global Trade",
    image: "/b.webp",
    meta: "In an interconnected world, the scrap metal trade is a complex web of logistics, geopolitics, and market demand. Stay ahead of the curve with Prasmi Steel's global trade insights.",
    content: [
      "The global trade of scrap metal has matured into a sophisticated international marketplace, moving millions of tons of material annually between continents. This massive web of trade is the primary engine behind the global steel and aluminum industries, ensuring that regions with high demand have access to the resources they need. Prasmi Steel Private Limited has cultivated a robust global network, enabling us to navigate the complexities of international trade and deliver value to our partners worldwide.",
      "Current trade trends are heavily influenced by the 'regionalization' of supply chains. While global trade remains essential, many countries are implementing export restrictions on scrap to ensure their domestic industries have first access to sustainable raw materials. This shift requires suppliers like Prasmi Steel to be incredibly agile, diversifying their sourcing origins to maintain a steady flow of materials like HMS, cast iron, and aluminum scrap for our clients. Our deep expertise in international trade compliance ensures that we can navigate these shifting legal landscapes seamlessly.",
      "Logistical innovation is also reshaping the trade landscape. The transition to more containerized shipping for certain scrap grades allows for greater flexibility and better weight optimization. Prasmi Steel utilizes a mix of bulk and containerized shipping strategies, tailored to the specific material grade and destination. By optimizing the logistics chain—from yard storage through to port clearance and final delivery—we minimize transit times and reduce the landed cost for our smelter and foundry clients, helping them maintain their competitive advantage in the market.",
      "Market volatility remains a constant challenge, driven by geopolitical shifts and macroeconomic factors. Successful trade in this environment requires real-time data and a strong presence in key market hubs. Prasmi Steel leverages its global partnerships to stay ahead of price curves, enabling us to offer stable, competitive pricing even in times of market stress. We believe that transparency is the best antidote to volatility, and we keep our clients informed of market trends that might affect their procurement strategies.",
      "As the global economy continues to evolve, the international scrap trade will remain a vital link in the industrial chain. Whether it's sourcing clean radiators from Europe or supplying high-grade casting scrap to emerging Asian markets, Prasmi Steel Private Limited is your reliable partner in global scrap logistics. We are committed to fostering long-term international partnerships built on trust, quality, and the shared vision of a more resource-efficient world. Explore the potential of the global scrap market with a partner who understands the high stakes of international trade."
    ]
  }
};

export function BlogPost() {
  const { slug } = useParams();
  const post = fullPosts[slug as keyof typeof fullPosts];
  
  React.useEffect(() => {
    if (post) {
      const suffix = " | Prasmi Steel";
      const fullTitle = `${post.title}${suffix}`;
      document.title = fullTitle.length > 60 ? post.title : fullTitle;

      // Inject Article Schema
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.meta,
        "image": `https://www.prasmisteel.com${post.image}`,
        "datePublished": post.date,
        "author": {
          "@type": "Organization",
          "name": "Prasmi Steel Editorial Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Prasmi Steel Private Limited",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.prasmisteel.com/favicon.png"
          }
        }
      };

      // Clean up previous article schema if any
      const existing = document.getElementById('dynamic-article-schema');
      if (existing) existing.remove();

      const script = document.createElement('script');
      script.id = 'dynamic-article-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(articleSchema);
      document.head.appendChild(script);

      // 2. Update Meta Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', post.meta);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        metaDesc.setAttribute('content', post.meta);
        document.head.appendChild(metaDesc);
      }

      // 3. Update OG/Twitter Tags
      const baseUrl = 'https://prasmisteel.com';
      const currentUrl = `${baseUrl}/blogs/${slug}`;
      const fullImageUrl = `${baseUrl}${post.image}`;

      const tags = [
        { selector: 'meta[property="og:url"]', attr: 'content', val: currentUrl },
        { selector: 'meta[property="og:title"]', attr: 'content', val: fullTitle },
        { selector: 'meta[property="og:description"]', attr: 'content', val: post.meta },
        { selector: 'meta[property="og:image"]', attr: 'content', val: fullImageUrl },
        { selector: 'meta[property="twitter:url"]', attr: 'content', val: currentUrl },
        { selector: 'meta[property="twitter:title"]', attr: 'content', val: fullTitle },
        { selector: 'meta[property="twitter:description"]', attr: 'content', val: post.meta },
        { selector: 'meta[property="twitter:image"]', attr: 'content', val: fullImageUrl },
      ];

      tags.forEach(tag => {
        const el = document.querySelector(tag.selector);
        if (el) el.setAttribute(tag.attr, tag.val);
      });

      return () => {
        const script = document.getElementById('dynamic-article-schema');
        if (script) script.remove();
      };
    }
  }, [post, slug]);

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
    <div className="bg-white min-h-screen selection:bg-slate-900 selection:text-white">
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
            <ArrowLeft className="w-4 h-4 text-[#4682b4]" /> Back to Journal
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-[#4682b4] text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest">
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
                <Clock className="w-4 h-4 text-[#4682b4]" /> {post.readTime}
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
              <div className="p-10 bg-slate-50 border-l-4 border-[#4682b4]">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Article briefing</h2>
                <p className="text-slate-600 text-sm italic font-light leading-relaxed">
                  "{post.meta}"
                </p>
              </div>
 
              <div className="space-y-8">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Logistics Contact</h2>
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-900 tracking-tight">Prasmi Steel Private Limited</p>
                  <a href="mailto:prasmisteel@gmail.com" className="text-sm text-[#4682b4] font-black tracking-widest hover:underline">prasmisteel@gmail.com</a>
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
                   <p className={`text-xl md:text-2xl text-slate-800 leading-relaxed font-light ${index === 0 ? 'first-letter:text-6xl first-letter:font-black first-letter:text-[#4682b4] first-letter:mr-3 first-letter:float-left first-letter:mt-1' : ''}`}>
                      {paragraph}
                   </p>
                </div>
              ))}
 
              <div className="pt-20 border-t border-slate-100 mt-20">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-1 bg-[#4682b4]"></div>
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
               className="group flex items-center gap-6 bg-slate-900 text-white px-10 py-6 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-[#4682b4] transition-all duration-500"
            >
               Return to Journal Archive <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
