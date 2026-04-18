import { motion } from 'motion/react';

const faqs = [
  {
    question: "What international standards precisely define your ferrous scrap grading?",
    answer: "Our ferrous scrap, including HMS 1 & 2 and Cast Iron, is graded strictly according to the Institute of Scrap Recycling Industries (ISRI) guidelines. HMS 1 is defined by a 1/4 inch minimum thickness and a maximum size of 60x24 inches, while HMS 2 involves thinner gauges (minimum 1/8 inch). We conduct chemical analysis using XRF spectrometers to ensure minimal levels of phosphorus and sulfur, which are critical metrics for foundry efficiency."
  },
  {
    question: "How does Prasmi Steel manage chemical composition verification for non-ferrous alloys?",
    answer: "For non-ferrous materials like Aluminum Extrusion (6063) and Zorba, we utilize advanced segregation and cleaning protocols. Every batch of aluminum transmissions and cast engines is drained of fluids and stripped of steel attachments to guarantee high metallic yield. Our team verifies the chemical profile of boutique alloys to ensure the absence of tramp elements that could compromise the integrity of the final product in smelting operations."
  },
  {
    question: "What logistical frameworks do you utilize for global scrap transit?",
    answer: "We operate a 24/7 logistical infrastructure capable of handling bulk and containerized shipments across four continents. Our supply chain resilience is anchored in strategic partnerships with major global freight carriers, ensuring expedited customs clearance and adherence to international maritime safety standards. We manage all documentation, including bills of lading, certificates of origin, and inspection reports, to provide a seamless door-to-door delivery experience for our international partners."
  },
  {
    question: "How does using premium graded scrap contribute to industrial sustainability?",
    answer: "Utilizing high-purity recycled scrap like that supplied by Prasmi Steel significantly reduces the energy intensity of metal production. Producing steel from scrap requires 75% less energy than virgin ore extraction, while recycled aluminum saves approximately 95% of the energy needed for primary production. By providing clean, well-graded feedstock, we help our partners minimize their carbon footprint and reduce waste in the global circular economy."
  },
  {
    question: "What is your capacity for specialized material sourcing and custom segregation?",
    answer: "Prasmi Steel specializes in boutique material sourcing for specific industrial needs. This includes high-manganese steel scrap for the mining industry and specialized oversized cast iron for large-scale foundry castings. Our experienced segregation teams can tailor sorting processes to meet custom technical specifications, ensuring that the material sizing and chemical properties are perfectly aligned with your specific melting equipment."
  }
];

export function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-slate-200"></div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Knowledge Base</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter leading-none mb-8">
              Expert <span className="text-[#4682b4]">Metallurgy Insights</span> & Industrial Scrap Metal FAQs
            </h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Addressing the critical technical questions of the global smelting and foundry industries through our professional procurement repository.
            </p>
          </div>
          
          <div className="md:w-2/3 space-y-12">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#4682b4] transition-colors">
                  {faq.question}
                </h3>
                <p className="text-slate-600 font-light leading-relaxed border-l-2 border-slate-100 pl-8 transition-colors group-hover:border-[#4682b4]/30">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
