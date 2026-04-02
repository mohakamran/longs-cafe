import { motion } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-32 px-6 bg-beige dark:bg-zen-dark transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-matcha rounded-[3rem] p-12 md:p-24 overflow-hidden shadow-2xl shadow-matcha/20"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-caramel/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-8"
              >
                <Sparkles size={14} />
                Stay Inspired
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8"
              >
                Join the <span className="italic text-beige">Komorebi</span> <br />
                Inner Circle
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/70 font-light leading-relaxed max-w-md"
              >
                Receive curated stories about tea culture, brewing techniques, and exclusive early access to our seasonal collections.
              </motion.p>
            </div>

            <div className="relative">
              {isSubscribed ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center border border-white/20"
                >
                  <h3 className="text-2xl font-serif text-white mb-4">Welcome to the Circle</h3>
                  <p className="text-white/70 font-light">Thank you for joining us. Check your inbox for a special welcome gift.</p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <input 
                    required
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-grow px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: 'white', color: '#24493F' }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-10 py-5 bg-beige text-matcha rounded-2xl font-bold text-sm tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    Subscribe
                    <Send size={18} />
                  </motion.button>
                </motion.form>
              )}
              <p className="mt-6 text-[10px] text-white/40 uppercase tracking-[0.2em] text-center lg:text-left">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
