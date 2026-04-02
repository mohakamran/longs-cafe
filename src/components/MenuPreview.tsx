import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { DRINKS } from '../constants';
import { Link } from 'react-router-dom';

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState<'classic' | 'fusion'>('fusion');

  const filteredDrinks = DRINKS.filter(drink => {
    if (activeTab === 'classic') return drink.name.includes('Ceremonial');
    return !drink.name.includes('Ceremonial');
  });

  return (
    <section id="menu" className="py-32 px-6 bg-beige/50 dark:bg-zen-dark/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-matcha/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-matcha/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-matcha mb-4 block"
          >
            The Lab Menu
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige leading-tight mb-12"
          >
            Savor the <span className="italic text-caramel">Experiments</span>
          </motion.h2>

          {/* Tabs */}
          <div className="inline-flex p-2 glass rounded-full mb-16 relative">
            <motion.div 
              layoutId="activeTab"
              className="absolute inset-y-2 rounded-full shadow-lg bg-matcha"
              style={{ 
                width: 'calc(50% - 8px)',
                left: activeTab === 'fusion' ? '8px' : 'calc(50%)'
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
            <button 
              onClick={() => setActiveTab('fusion')}
              className={`relative z-10 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                activeTab === 'fusion' ? 'text-white' : 'text-zen-dark/50 hover:text-zen-dark dark:text-beige/50 dark:hover:text-beige'
              }`}
            >
              Fusions
            </button>
            <button 
              onClick={() => setActiveTab('classic')}
              className={`relative z-10 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                activeTab === 'classic' ? 'text-white' : 'text-zen-dark/50 hover:text-zen-dark dark:text-beige/50 dark:hover:text-beige'
              }`}
            >
              Classic
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredDrinks.map((drink, i) => (
              <motion.div
                key={drink.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={drink.image} 
                    alt={drink.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-grow border-b border-zen-dark/10 dark:border-white/10 pb-4 group-hover:border-matcha transition-colors duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif text-zen-dark dark:text-beige group-hover:text-matcha transition-colors">{drink.name}</h3>
                    <span className="text-lg font-medium text-caramel">{drink.price}</span>
                  </div>
                  <p className="text-sm text-zen-dark/50 dark:text-beige/50 font-light leading-relaxed line-clamp-1">
                    {drink.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <Link to="/menu">
            <button className="px-10 py-5 glass text-zen-dark dark:text-beige rounded-2xl font-medium tracking-wide border border-zen-dark/10 dark:border-white/10 hover:bg-zen-dark hover:text-white dark:hover:bg-beige dark:hover:text-zen-dark transition-all duration-300">
              View Full Menu
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
