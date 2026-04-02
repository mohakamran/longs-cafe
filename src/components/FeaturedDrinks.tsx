import { motion } from 'motion/react';
import { DRINKS } from '../constants';
import { Plus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function FeaturedDrinks() {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  return (
    <section id="menu" className="py-32 px-6 bg-white/50 dark:bg-zen-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-matcha mb-4 block"
            >
              Curated Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige leading-tight"
            >
              Our Signature <br />
              <span className="italic text-caramel">Lab Creations</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zen-dark/50 dark:text-beige/50 max-w-sm font-light leading-relaxed mb-4"
          >
            Every drink is an experiment in flavor, crafted with scientific precision using the finest ceremonial matcha.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DRINKS.slice(0, 4).map((drink, i) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative bg-white dark:bg-white/5 rounded-[2.5rem] p-4 shadow-sm hover:shadow-[0_20px_50px_rgba(74,103,65,0.15)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
                <img 
                  src={drink.image} 
                  alt={drink.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <motion.button 
                    onClick={() => toggleWishlist(drink)}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.8 }}
                    className={`w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border ${
                      isInWishlist(drink.id) 
                        ? 'bg-red-500 border-red-500 text-white' 
                        : 'bg-white/80 border-white/20 text-zen-dark hover:text-red-500'
                    }`}
                  >
                    <Heart 
                      size={20} 
                      fill={isInWishlist(drink.id) ? "currentColor" : "none"} 
                      className={isInWishlist(drink.id) ? "animate-pulse" : ""}
                    />
                  </motion.button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${
                    drink.category === 'matcha' ? 'bg-matcha/80 text-white' : 'bg-coffee/80 text-white'
                  }`}>
                    {drink.category}
                  </span>
                </div>
              </div>

              <div className="px-2 pb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-serif text-zen-dark dark:text-beige group-hover:text-matcha transition-colors duration-300">{drink.name}</h3>
                  <span className="text-lg font-medium text-caramel">{drink.price}</span>
                </div>
                <p className="text-sm text-zen-dark/50 dark:text-beige/50 font-light leading-relaxed mb-6 line-clamp-2">
                  {drink.description}
                </p>
                <motion.button 
                  onClick={() => addToCart(drink)}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgb(74, 103, 65)",
                    color: "rgb(255, 255, 255)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-beige dark:bg-white/5 text-zen-dark dark:text-beige rounded-2xl font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-matcha/20"
                >
                  <motion.div
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center justify-center"
                  >
                    <Plus size={18} />
                  </motion.div>
                  Add to Order
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
