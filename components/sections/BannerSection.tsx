import { motion } from 'motion/react';

export function BannerSection({ image }: { image: string }) {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[550px] overflow-hidden">
      <motion.img 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={image} 
        className="w-full h-full object-cover object-center"
        alt="Industrial Background"
      />
      <div className="absolute inset-0 bg-black/10" />
    </section>
  );
}
