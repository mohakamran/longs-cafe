import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Coffee, Leaf, Truck, CreditCard } from 'lucide-react';

const faqs = [
  {
    category: "Product",
    icon: <Coffee size={20} />,
    questions: [
      {
        q: "What is ceremonial grade matcha?",
        a: "Ceremonial grade is the highest quality matcha, made from the youngest tea leaves. It's stone-ground into a fine powder and is meant to be whisked with water and enjoyed on its own."
      },
      {
        q: "Are your fusions made with real fruit?",
        a: "Yes! Our strawberry and chocolate fusions use real fruit and high-quality cocoa to complement our premium matcha base."
      }
    ]
  },
  {
    category: "Brewing",
    icon: <Leaf size={20} />,
    questions: [
      {
        q: "How should I store my matcha?",
        a: "Matcha is sensitive to light, heat, and air. Keep it in its original airtight tin in a cool, dark place (like a refrigerator) to maintain its vibrant color and flavor."
      },
      {
        q: "What makes your 'Lab' approach different?",
        a: "We treat every drink as a scientific experiment, precisely measuring temperatures and ratios to find the perfect balance between traditional matcha and modern flavors."
      }
    ]
  },
  {
    category: "Orders & Shipping",
    icon: <Truck size={20} />,
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping typically takes 3-5 business days. We also offer expedited shipping options at checkout."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we currently ship to over 20 countries. International shipping times vary by location."
      }
    ]
  },
  {
    category: "Payments",
    icon: <CreditCard size={20} />,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, Apple Pay, Google Pay, and PayPal."
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely. We use industry-standard encryption and secure payment gateways to ensure your data is always protected."
      }
    ]
  }
];

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-beige dark:bg-zen-dark transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-matcha mb-4 block"
          >
            Support
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige mb-12"
          >
            Frequently Asked <span className="italic text-caramel">Questions</span>
          </motion.h1>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zen-dark/30 dark:text-beige/30" size={20} />
            <input 
              type="text" 
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-8 py-5 bg-white dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-3xl focus:outline-none focus:ring-2 focus:ring-matcha/20 transition-all dark:text-beige shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-12">
          {faqs.map((category, catIdx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6 ml-4">
                <div className="w-10 h-10 bg-matcha/10 rounded-xl flex items-center justify-center text-matcha">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-serif text-zen-dark dark:text-beige">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const id = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  
                  if (searchTerm && !faq.q.toLowerCase().includes(searchTerm.toLowerCase()) && !faq.a.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return null;
                  }

                  return (
                    <div 
                      key={id}
                      className={`glass rounded-3xl border transition-all duration-500 overflow-hidden ${
                        isOpen 
                          ? 'border-matcha/30 shadow-xl shadow-matcha/5 bg-white dark:bg-white/10' 
                          : 'border-zen-dark/5 dark:border-white/5 hover:border-matcha/20'
                      }`}
                    >
                      <button 
                        onClick={() => toggleFaq(id)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left"
                      >
                        <span className={`text-lg font-serif transition-colors ${isOpen ? 'text-matcha' : 'text-zen-dark dark:text-beige'}`}>
                          {faq.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="text-zen-dark/30 dark:text-beige/30"
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          >
                            <div className="px-8 pb-8 text-zen-dark/60 dark:text-beige/60 font-light leading-relaxed border-t border-zen-dark/5 dark:border-white/5 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center p-12 glass rounded-[3rem] border border-zen-dark/5 dark:border-white/5"
        >
          <HelpCircle size={40} className="text-matcha/40 mb-6 mx-auto" />
          <h3 className="text-2xl font-serif text-zen-dark dark:text-beige mb-4">Still have questions?</h3>
          <p className="text-zen-dark/60 dark:text-beige/60 font-light mb-8">
            Our team is here to help you find the perfect matcha experiment.
          </p>
          <a href="/contact">
            <button className="px-10 py-4 bg-matcha text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-matcha/90 transition-all shadow-lg shadow-matcha/20">
              Contact Support
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
