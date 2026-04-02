import { motion } from 'motion/react';
import { RotateCcw, ShieldCheck, HelpCircle, Mail, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-beige dark:bg-zen-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-matcha mb-4 block"
          >
            Policy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige"
          >
            Returns & <span className="italic text-caramel">Refunds</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="glass p-12 rounded-[3rem] shadow-xl border border-zen-dark/5 dark:border-white/5">
              <div className="w-16 h-16 bg-matcha/10 rounded-2xl flex items-center justify-center text-matcha mb-8">
                <RotateCcw size={32} />
              </div>
              <h2 className="text-3xl font-serif text-zen-dark dark:text-beige mb-6">Our 30-Day Promise</h2>
              <p className="text-lg text-zen-dark/60 dark:text-beige/60 font-light leading-relaxed mb-8">
                We want you to love every sip. If you're not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-zen-dark/60 dark:text-beige/60">
                  <div className="w-2 h-2 bg-matcha rounded-full" />
                  <span>Unopened matcha tins</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-zen-dark/60 dark:text-beige/60">
                  <div className="w-2 h-2 bg-matcha rounded-full" />
                  <span>Unused brewing equipment in original packaging</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-zen-dark/60 dark:text-beige/60">
                  <div className="w-2 h-2 bg-matcha rounded-full" />
                  <span>Defective or damaged items</span>
                </div>
              </div>
            </div>

            <div className="glass p-12 rounded-[3rem] shadow-xl border border-zen-dark/5 dark:border-white/5 bg-zen-dark text-white">
              <ShieldCheck size={40} className="mb-6 opacity-50" />
              <h3 className="text-2xl font-serif mb-4">Quality Guarantee</h3>
              <p className="text-white/70 font-light leading-relaxed mb-8">
                If your order arrives damaged or doesn't meet our high quality standards, we'll replace it immediately at no extra cost to you.
              </p>
              <button className="px-8 py-4 bg-matcha text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-matcha/80 transition-all">
                Report an Issue
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="glass p-12 rounded-[3rem] shadow-xl border border-zen-dark/5 dark:border-white/5">
              <h2 className="text-3xl font-serif text-zen-dark dark:text-beige mb-8">How to Start a Return</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full border border-matcha/20 flex items-center justify-center text-matcha font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-lg font-serif text-zen-dark dark:text-beige mb-2">Request Return</h4>
                    <p className="text-sm text-zen-dark/60 dark:text-beige/60 font-light">Email our support team with your order number and reason for return.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full border border-matcha/20 flex items-center justify-center text-matcha font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-lg font-serif text-zen-dark dark:text-beige mb-2">Pack Items</h4>
                    <p className="text-sm text-zen-dark/60 dark:text-beige/60 font-light">Securely pack the items in their original packaging to prevent damage.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full border border-matcha/20 flex items-center justify-center text-matcha font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-lg font-serif text-zen-dark dark:text-beige mb-2">Ship Back</h4>
                    <p className="text-sm text-zen-dark/60 dark:text-beige/60 font-light">Use the provided shipping label to send the items back to our lab.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full border border-matcha/20 flex items-center justify-center text-matcha font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-lg font-serif text-zen-dark dark:text-beige mb-2">Receive Refund</h4>
                    <p className="text-sm text-zen-dark/60 dark:text-beige/60 font-light">Once received and inspected, we'll process your refund within 5 business days.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-12 rounded-[3rem] shadow-xl border border-zen-dark/5 dark:border-white/5">
              <h3 className="text-2xl font-serif text-zen-dark dark:text-beige mb-6">Need Help?</h3>
              <div className="space-y-6">
                <Link to="/contact" className="flex items-center justify-between p-6 bg-beige/50 dark:bg-white/5 rounded-2xl group hover:bg-matcha hover:text-white transition-all">
                  <div className="flex items-center gap-4">
                    <Mail size={20} />
                    <span className="font-medium">Email Support</span>
                  </div>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="flex items-center justify-between p-6 bg-beige/50 dark:bg-white/5 rounded-2xl group hover:bg-matcha hover:text-white transition-all">
                  <div className="flex items-center gap-4">
                    <MessageSquare size={20} />
                    <span className="font-medium">Live Chat</span>
                  </div>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-16 glass rounded-[4rem] border border-zen-dark/5 dark:border-white/5"
        >
          <HelpCircle size={48} className="text-matcha/40 mb-8 mx-auto" />
          <h2 className="text-4xl font-serif text-zen-dark dark:text-beige mb-6">Questions about your order?</h2>
          <p className="text-lg text-zen-dark/60 dark:text-beige/60 font-light max-w-2xl mx-auto mb-10">
            Our dedicated support team is here to ensure your experience with Long's Cafe is nothing short of exceptional.
          </p>
          <Link to="/contact">
            <button className="px-12 py-5 bg-matcha text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-matcha/90 transition-all shadow-2xl shadow-matcha/20">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
