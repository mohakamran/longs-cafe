import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

export default function FloatingCartButton() {
  const { totalItems, totalPrice } = useCart();
  const location = useLocation();

  if (location.pathname === '/cart' || location.pathname === '/checkout') return null;

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-[90] hidden md:block"
        >
          <Link to="/cart">
            <div className="bg-zen-dark dark:bg-beige text-white dark:text-zen-dark p-6 rounded-[2.5rem] shadow-2xl flex items-center gap-6 group overflow-hidden relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-matcha/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-12 bg-matcha rounded-2xl flex items-center justify-center text-white relative">
                  <ShoppingBag size={24} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-caramel text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg border-2 border-zen-dark dark:border-beige">
                    {totalItems}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50">Your Order</span>
                  <span className="text-lg font-serif tracking-tight">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="relative z-10 w-10 h-10 bg-white/10 dark:bg-black/10 rounded-full flex items-center justify-center group-hover:bg-matcha group-hover:text-white transition-all duration-300">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
