import { motion } from 'motion/react';
import { Coffee, ArrowLeft, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Order() {
  return (
    <div className="min-h-screen bg-beige dark:bg-zen-dark transition-colors duration-500 pt-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-matcha hover:text-matcha/80 transition-colors mb-12 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-12 md:p-20 rounded-[3rem] text-center shadow-2xl"
        >
          <div className="w-20 h-20 bg-matcha/10 rounded-full flex items-center justify-center text-matcha mx-auto mb-8">
            <ShoppingBag size={40} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif text-zen-dark dark:text-beige mb-6">
            Your <span className="italic text-caramel">Sanctuary</span> Awaits
          </h1>
          
          <p className="text-lg text-zen-dark/60 dark:text-beige/60 font-light leading-relaxed mb-12 max-w-md mx-auto">
            Our online ordering experience is currently being hand-crafted to perfection. 
            In the meantime, please visit us at one of our locations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/"
              className="px-10 py-5 bg-matcha text-beige rounded-2xl font-medium tracking-wide shadow-xl shadow-matcha/20 hover:bg-matcha/90 transition-all"
            >
              Explore Menu
            </Link>
            <div className="flex items-center gap-4 text-zen-dark/40 dark:text-beige/40">
              <div className="w-12 h-px bg-current" />
              <span className="text-xs uppercase tracking-widest font-bold">Coming Soon</span>
              <div className="w-12 h-px bg-current" />
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-50">
          {[
            { icon: <Coffee size={24} />, label: "Artisan Coffee" },
            { icon: <ShoppingBag size={24} />, label: "Premium Matcha" },
            { icon: <ShoppingBag size={24} />, label: "Zen Experience" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-3xl border border-zen-dark/10 dark:border-white/10">
              <div className="text-matcha">{item.icon}</div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zen-dark/60 dark:text-beige/60">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
