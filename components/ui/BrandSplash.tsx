import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function BrandSplash({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Faster exit
    }, 1000); // 1.0s duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-zinc-950 flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#dc2626]/20 via-transparent to-transparent animate-pulse" />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
              }}
              className="relative w-32 h-32 md:w-48 md:h-48 mb-12"
            >
              <img 
                src="/favicon.png" 
                alt="Prasmi Steel Logo" 
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(70,130,180,0.3)]"
              />
              
              {/* Spinning Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-[#dc2626]/20 rounded-full border-t-[#dc2626]"
              />
            </motion.div>

            {/* Brand Name Text Animation */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.6
                }}
                className="flex flex-col items-center gap-3"
              >
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-[0.2em] uppercase text-center">
                  Prasmi <span className="text-[#dc2626]">Steel</span>
                </h1>
                <div className="flex items-center gap-4 w-full">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-px flex-1 bg-zinc-800"
                  />
                  <span className="text-[10px] font-bold text-[#dc2626] uppercase tracking-[0.5em] whitespace-nowrap">
                    Private Limited
                  </span>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-px flex-1 bg-zinc-800"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Progress Indicator */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-1 bg-[#dc2626] w-full origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
