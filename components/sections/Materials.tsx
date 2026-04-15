import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory, ShieldCheck, Zap, Car, Settings } from 'lucide-react';

export function Materials() {
  const products = [
    {
      title: 'Cast Iron Scrap',
      description: 'High-grade cast iron scrap sourced for diverse foundry applications. Optimized for consistent furnace yield.',
      icon: <Factory className="w-8 h-8" />,
    },
    {
      title: 'HMS 1 & 2',
      description: 'Heavy Melting Steel, meticulously sorted and processed for maximum furnace efficiency and clean smelting.',
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: 'Manganese Steel',
      description: 'Specialized manganese steel scrap tailored for high-impact resistance alloys and demanding smelting needs.',
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: 'Electric Motors',
      description: 'Clean, mixed electric motor scrap ready for efficient copper recovery and non-ferrous material processing.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: 'Engines & Transmissions',
      description: 'High-yield aluminum components specifically processed for non-ferrous smelters and alloying foundries.',
      icon: <Car className="w-8 h-8" />,
    },
  ];

  return (
    <section id="materials" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-slate-900 leading-[1.2] mb-12 flex flex-col items-start tracking-tight">
              Premium Industrial <br/> Core Inventory
            </h2>
            
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-normal max-w-xl">
              <p className="border-l-4 border-slate-200 pl-6 py-2">
                We supply specifically graded scrap that meets the most rigorous metallurgical requirements of modern industry.
              </p>
            </div>
          </motion.div>
          
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4 opacity-20 grayscale">
               <div className="h-40 bg-slate-200 rounded-3xl"></div>
               <div className="h-40 bg-slate-300 rounded-3xl mt-8"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white group overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <div className="mb-6 bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[#0066cc] group-hover:text-white transition-all duration-500 group-hover:scale-110 border border-slate-100">
                    <div className="text-slate-600 group-hover:text-white transition-colors">
                      {product.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                  <CardDescription className="text-base text-slate-500 leading-relaxed font-normal">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
