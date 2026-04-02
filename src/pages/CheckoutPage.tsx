import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const subtotal = totalPrice;
  const serviceFee = 2.50;
  const tax = totalPrice * 0.08;
  const total = subtotal + serviceFee + tax;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const newOrderId = `LC-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
      setOrderId(newOrderId);
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      
      // Redirect to home after 5 seconds to allow user to see the order ID
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center bg-beige dark:bg-zen-dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white dark:bg-white/5 p-12 rounded-[3rem] shadow-2xl max-w-lg w-full border border-matcha/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-matcha" />
          
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="w-24 h-24 bg-matcha/10 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 className="text-matcha" size={48} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-serif text-zen-dark dark:text-beige mb-4"
          >
            Thank You for Your Order!
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-zen-dark/60 dark:text-beige/60 mb-10 font-light leading-relaxed"
          >
            Your artisan drinks are being prepared with scientific precision. We'll notify you when they're ready for pickup.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-beige dark:bg-white/5 p-6 rounded-2xl border border-zen-dark/5 dark:border-white/5 mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-zen-dark/40 dark:text-beige/40 block mb-2">Order Confirmation</span>
            <div className="text-3xl font-mono font-bold text-matcha tracking-tighter">
              {orderId}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="space-y-6"
          >
            <p className="text-sm text-zen-dark/40 dark:text-beige/40 italic">
              A confirmation email has been sent to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-zen-dark dark:bg-beige text-white dark:text-zen-dark rounded-2xl text-xs font-bold uppercase tracking-widest transition-all"
              >
                Download Receipt
              </motion.button>
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass text-zen-dark dark:text-beige rounded-2xl text-xs font-bold uppercase tracking-widest border border-zen-dark/10 dark:border-white/10 transition-all"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-matcha font-medium">
              <div className="w-2 h-2 bg-matcha rounded-full animate-ping" />
              <span className="text-sm">Redirecting to home in a few moments...</span>
            </div>
          </motion.div>

          {/* Confetti-like particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: 0,
                y: 0
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 400,
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: 2,
                delay: 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className={`absolute w-2 h-2 rounded-full z-0 ${
                ['bg-matcha', 'bg-caramel', 'bg-coffee', 'bg-beige'][i % 4]
              }`}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-beige dark:bg-zen-dark">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link to="/cart" className="flex items-center gap-2 text-zen-dark/50 dark:text-beige/50 hover:text-matcha transition-all mb-6">
            <ArrowLeft size={18} />
            Back to Bag
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-zen-dark dark:text-beige">
            Secure <span className="italic text-caramel">Checkout</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-7 space-y-8">
            <form onSubmit={handlePayment} className="space-y-8">
              {/* Delivery Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 shadow-sm border border-zen-dark/5 dark:border-white/5"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-caramel/10 rounded-xl flex items-center justify-center text-caramel">
                    <Truck size={20} />
                  </div>
                  <h2 className="text-2xl font-serif text-zen-dark dark:text-beige">Pickup Details</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">First Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John"
                      className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">Last Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Doe"
                      className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 shadow-sm border border-zen-dark/5 dark:border-white/5"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-matcha/10 rounded-xl flex items-center justify-center text-matcha">
                    <CreditCard size={20} />
                  </div>
                  <h2 className="text-2xl font-serif text-zen-dark dark:text-beige">Payment Method</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">Card Number</label>
                    <div className="relative">
                      <input 
                        required
                        type="text" 
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige"
                      />
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-2">
                        <div className="w-8 h-5 bg-zen-dark/10 rounded" />
                        <div className="w-8 h-5 bg-zen-dark/10 rounded" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">Expiry Date</label>
                      <input 
                        required
                        type="text" 
                        placeholder="MM/YY"
                        className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 ml-1">CVC</label>
                      <input 
                        required
                        type="text" 
                        placeholder="123"
                        className="w-full px-6 py-4 bg-beige/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-matcha/5 rounded-2xl flex items-start gap-3">
                  <ShieldCheck className="text-matcha flex-shrink-0" size={20} />
                  <p className="text-xs text-zen-dark/60 dark:text-beige/60 leading-relaxed">
                    Your payment information is encrypted and processed securely. We never store your full card details.
                  </p>
                </div>
              </motion.div>

              <button 
                type="submit"
                disabled={isProcessing}
                className={`w-full py-6 rounded-[2rem] font-bold tracking-[0.2em] uppercase text-sm transition-all shadow-xl flex items-center justify-center gap-3 ${
                  isProcessing 
                  ? 'bg-zen-dark/20 text-zen-dark/40 cursor-not-allowed' 
                  : 'bg-zen-dark text-white hover:bg-matcha hover:shadow-matcha/20 dark:bg-beige dark:text-zen-dark dark:hover:bg-matcha dark:hover:text-white'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>Complete Payment — ${total.toFixed(2)}</>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-white/5 rounded-[2.5rem] p-8 shadow-xl border border-zen-dark/5 dark:border-white/5 sticky top-32"
            >
              <h2 className="text-2xl font-serif text-zen-dark dark:text-beige mb-8">Order Summary</h2>
              
              <div className="max-h-[400px] overflow-y-auto pr-4 space-y-6 mb-8 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-medium text-zen-dark dark:text-beige">{item.name}</h4>
                        <span className="text-sm font-medium text-caramel">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-zen-dark/40 dark:text-beige/40">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-zen-dark/5 dark:border-white/5">
                <div className="flex justify-between text-sm text-zen-dark/60 dark:text-beige/60">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-zen-dark/60 dark:text-beige/60">
                  <span>Service Fee</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-zen-dark/60 dark:text-beige/60">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-serif text-zen-dark dark:text-beige pt-4">
                  <span>Total</span>
                  <span className="text-matcha font-sans font-bold">${total.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
