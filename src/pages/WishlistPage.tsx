import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingBag, Trash2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center bg-beige dark:bg-zen-dark transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-16 rounded-[4rem] shadow-2xl max-w-md w-full border border-zen-dark/5 dark:border-white/5"
        >
          <div className="w-24 h-24 bg-matcha/10 rounded-full flex items-center justify-center mx-auto mb-10">
            <Heart className="text-matcha/40" size={48} />
          </div>
          <h1 className="text-4xl font-serif text-zen-dark dark:text-beige mb-6">Your wishlist is empty</h1>
          <p className="text-lg text-zen-dark/60 dark:text-beige/60 mb-10 font-light leading-relaxed">
            Save your favorite artisan drinks here to order them later.
          </p>
          <Link to="/menu">
            <button className="w-full py-5 bg-matcha text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-matcha/90 transition-all shadow-xl shadow-matcha/20">
              Explore Menu
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-beige dark:bg-zen-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige"
            >
              Your <span className="italic text-caramel">Wishlist</span>
            </motion.h1>
            <p className="text-lg text-zen-dark/50 dark:text-beige/50 mt-4 font-light">{wishlist.length} items saved</p>
          </div>
          <Link to="/menu" className="hidden md:flex items-center gap-3 text-matcha hover:gap-4 transition-all font-bold text-sm uppercase tracking-widest">
            <ArrowLeft size={20} />
            Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {wishlist.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.1 }}
                className="group glass rounded-[3rem] p-6 shadow-xl border border-zen-dark/5 dark:border-white/5 hover:shadow-2xl hover:shadow-matcha/10 transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleWishlist(item)}
                      className="w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-red-500 shadow-xl"
                    >
                      <Heart size={24} fill="currentColor" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <span className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md ${
                      item.category === 'matcha' ? 'bg-matcha/80 text-white' : 'bg-coffee/80 text-white'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-serif text-zen-dark dark:text-beige group-hover:text-matcha transition-colors">{item.name}</h3>
                    <span className="text-xl font-medium text-caramel">{item.price}</span>
                  </div>
                  <p className="text-sm text-zen-dark/50 dark:text-beige/50 font-light leading-relaxed mb-10 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <motion.button 
                      onClick={() => addToCart(item)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-grow py-5 bg-matcha text-white rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-matcha/20"
                    >
                      <ShoppingBag size={18} />
                      Add to Bag
                    </motion.button>
                    <motion.button 
                      onClick={() => toggleWishlist(item)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-16 py-5 glass text-zen-dark/30 dark:text-beige/30 rounded-2xl flex items-center justify-center hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center gap-4 px-10 py-6 glass rounded-full border border-zen-dark/5 dark:border-white/5">
            <span className="text-lg font-serif text-zen-dark dark:text-beige">Ready to complete your order?</span>
            <Link to="/cart" className="flex items-center gap-2 text-matcha font-bold text-sm uppercase tracking-widest group">
              View Bag
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
