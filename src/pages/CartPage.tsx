import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-white/5 p-12 rounded-[3rem] shadow-xl max-w-md w-full"
        >
          <div className="w-20 h-20 bg-matcha/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="text-matcha" size={40} />
          </div>
          <h1 className="text-3xl font-serif text-zen-dark dark:text-beige mb-4">Your bag is empty</h1>
          <p className="text-zen-dark/60 dark:text-beige/60 mb-8 font-light">
            Looks like you haven't added any artisan drinks to your order yet.
          </p>
          <Link to="/menu">
            <button className="w-full py-4 bg-matcha text-white rounded-2xl font-medium tracking-wide hover:bg-matcha/90 transition-all shadow-lg shadow-matcha/20">
              Explore Menu
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-beige dark:bg-zen-dark">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-serif text-zen-dark dark:text-beige"
            >
              Your <span className="italic text-caramel">Order Bag</span>
            </motion.h1>
            <p className="text-zen-dark/50 dark:text-beige/50 mt-2">{totalItems} items selected</p>
          </div>
          <Link to="/menu" className="hidden md:flex items-center gap-2 text-matcha hover:gap-3 transition-all font-medium">
            <ArrowLeft size={18} />
            Back to Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white dark:bg-white/5 rounded-[2rem] p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-all border border-zen-dark/5 dark:border-white/5"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif text-zen-dark dark:text-beige">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-zen-dark/30 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <p className="text-sm text-zen-dark/50 dark:text-beige/50 mb-4 font-light line-clamp-1">{item.description}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-6 bg-beige/50 dark:bg-white/5 rounded-2xl p-2 border border-zen-dark/5 dark:border-white/5">
                        <motion.button 
                          whileHover={{ scale: 1.1, backgroundColor: '#fff' }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center rounded-xl text-zen-dark dark:text-beige transition-all shadow-sm"
                        >
                          <Minus size={16} />
                        </motion.button>
                        <span className="w-6 text-center font-serif text-xl text-zen-dark dark:text-beige">{item.quantity}</span>
                        <motion.button 
                          whileHover={{ scale: 1.1, backgroundColor: '#fff' }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center rounded-xl text-zen-dark dark:text-beige transition-all shadow-sm"
                        >
                          <Plus size={16} />
                        </motion.button>
                      </div>
                      <div className="text-right">
                        <span className="text-xs uppercase tracking-widest text-zen-dark/30 dark:text-beige/30 block mb-1">Subtotal</span>
                        <span className="text-2xl font-serif text-caramel">
                          ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 shadow-xl border border-zen-dark/5 dark:border-white/5 sticky top-32"
            >
              <h2 className="text-2xl font-serif text-zen-dark dark:text-beige mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-zen-dark/60 dark:text-beige/60">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zen-dark/60 dark:text-beige/60">
                  <span>Service Fee</span>
                  <span>$2.50</span>
                </div>
                <div className="flex justify-between text-zen-dark/60 dark:text-beige/60">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="h-[1px] bg-zen-dark/5 dark:bg-white/5 my-4" />
                <div className="flex justify-between text-xl font-medium text-zen-dark dark:text-beige">
                  <span>Total</span>
                  <span className="text-matcha">${(totalPrice + 2.50 + (totalPrice * 0.08)).toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <button className="w-full py-5 bg-matcha text-white rounded-2xl font-medium tracking-wide flex items-center justify-center gap-3 hover:bg-matcha/90 transition-all shadow-lg shadow-matcha/20 group">
                  Proceed to Checkout
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <p className="text-center text-xs text-zen-dark/40 dark:text-beige/40 mt-6 font-light">
                Secure checkout powered by Long's Cafe Payment
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
