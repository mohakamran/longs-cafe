import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 bg-white dark:bg-zen-dark overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-matcha rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coffee rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-matcha mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige leading-tight mb-12"
          >
            What Our <span className="italic text-caramel">Guests Say</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="glass p-12 md:p-20 rounded-[3rem] shadow-2xl relative"
            >
              <div className="absolute top-10 left-10 text-matcha/20">
                <Quote size={80} strokeWidth={1} />
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-caramel text-caramel" />
                  ))}
                </div>
                
                <p className="text-2xl md:text-3xl font-serif text-zen-dark dark:text-beige leading-relaxed mb-12 italic">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-matcha/20 p-1">
                    <img 
                      src={TESTIMONIALS[currentIndex].avatar} 
                      alt={TESTIMONIALS[currentIndex].name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-serif text-zen-dark dark:text-beige">{TESTIMONIALS[currentIndex].name}</h4>
                    <p className="text-sm text-zen-dark/50 dark:text-beige/50 font-light uppercase tracking-widest">
                      {TESTIMONIALS[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#2F5D50', color: '#fff' }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-14 h-14 rounded-full glass flex items-center justify-center text-zen-dark dark:text-beige transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div className="flex gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    currentIndex === i ? 'w-8 bg-matcha' : 'bg-matcha/20'
                  }`}
                />
              ))}
            </div>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#2F5D50', color: '#fff' }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-14 h-14 rounded-full glass flex items-center justify-center text-zen-dark dark:text-beige transition-all duration-300"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
