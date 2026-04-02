import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Leaf, Coffee, Droplets, Thermometer, Timer, Sparkles } from 'lucide-react';

const guides = [
  {
    id: 'matcha',
    title: 'Matcha Whisking',
    icon: <Leaf size={24} />,
    color: 'text-matcha',
    bg: 'bg-matcha/10',
    image: 'https://maisonkoko.com/cdn/shop/articles/Blog_Images_2_3d03e15d-a54d-4044-9e58-a28b4c156b2f.png?v=1758927330',
    steps: [
      { icon: <Droplets size={18} />, label: 'Water', value: '80ml' },
      { icon: <Thermometer size={18} />, label: 'Temp', value: '80°C' },
      { icon: <Timer size={18} />, label: 'Whisk', value: '45s' }
    ],
    description: 'The secret to a perfect matcha is the "W" whisking motion. Sift 2g of ceremonial grade matcha into a bowl, add water, and whisk until a thick, creamy foam forms on the surface.'
  },
  {
    id: 'coffee',
    title: 'V60 Pour Over',
    icon: <Coffee size={24} />,
    color: 'text-coffee',
    bg: 'bg-coffee/10',
    image: 'https://images.unsplash.com/photo-1544787210-228394c3d3e0?auto=format&fit=crop&q=80&w=800',
    steps: [
      { icon: <Droplets size={18} />, label: 'Water', value: '300ml' },
      { icon: <Thermometer size={18} />, label: 'Temp', value: '94°C' },
      { icon: <Timer size={18} />, label: 'Brew', value: '3:00m' }
    ],
    description: 'Start with 20g of medium-coarse ground beans. Bloom for 30 seconds with 40ml of water, then pour in concentric circles. The slow extraction highlights the delicate floral notes.'
  }
];

export default function BrewingGuide() {
  const [activeId, setActiveId] = useState('matcha');
  const activeGuide = guides.find(g => g.id === activeId)!;

  return (
    <section className="py-32 px-6 bg-white dark:bg-zen-dark transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-matcha mb-4 block"
          >
            Brewing Guide
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige"
          >
            Master the <span className="italic text-caramel">Ritual</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 space-y-6">
            {guides.map((guide) => (
              <motion.button
                key={guide.id}
                onClick={() => setActiveId(guide.id)}
                whileHover={{ x: 10 }}
                className={`w-full p-8 rounded-[2rem] text-left transition-all duration-500 relative overflow-hidden group ${
                  activeId === guide.id 
                    ? 'bg-matcha text-white shadow-2xl shadow-matcha/20' 
                    : 'bg-beige dark:bg-white/5 text-zen-dark dark:text-beige hover:bg-matcha/5'
                }`}
              >
                <div className="flex items-center gap-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                    activeId === guide.id ? 'bg-white/20' : guide.bg + ' ' + guide.color
                  }`}>
                    {guide.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-1">{guide.title}</h3>
                    <p className={`text-xs uppercase tracking-widest font-bold ${
                      activeId === guide.id ? 'text-white/60' : 'text-zen-dark/30 dark:text-beige/30'
                    }`}>
                      {guide.id === 'matcha' ? 'Traditional' : 'Modern Craft'}
                    </p>
                  </div>
                </div>
                {activeId === guide.id && (
                  <motion.div 
                    layoutId="guide-active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-matcha to-matcha/80 z-0"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="glass p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-matcha/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
                    <img 
                      src={activeGuide.image} 
                      alt={activeGuide.title}
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                      <Sparkles size={14} />
                      Expert Guide
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h3 className={`text-4xl font-serif ${activeGuide.color}`}>
                      {activeGuide.title}
                    </h3>
                    
                    <p className="text-lg text-zen-dark/60 dark:text-beige/60 font-light leading-relaxed italic">
                      "{activeGuide.description}"
                    </p>

                    <div className="grid grid-cols-3 gap-4">
                      {activeGuide.steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-4 bg-beige/50 dark:bg-white/5 rounded-2xl border border-zen-dark/5 dark:border-white/5">
                          <div className={`mb-3 ${activeGuide.color}`}>
                            {step.icon}
                          </div>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-zen-dark/30 dark:text-beige/30 mb-1">
                            {step.label}
                          </span>
                          <span className="text-sm font-medium text-zen-dark dark:text-beige">
                            {step.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all shadow-xl ${
                        activeId === 'matcha' 
                          ? 'bg-matcha text-white shadow-matcha/20' 
                          : 'bg-coffee text-white shadow-coffee/20'
                      }`}
                    >
                      Download Full Guide
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
