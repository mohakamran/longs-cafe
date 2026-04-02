import { motion } from 'motion/react';
import { Leaf, Droplets, Flame, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <Leaf size={32} />,
    title: "Sourcing",
    description: "We source the highest ceremonial grade Uji matcha directly from Kyoto's heritage farms.",
    color: "text-matcha",
    bg: "bg-matcha/10"
  },
  {
    icon: <Flame size={32} />,
    title: "Experimenting",
    description: "In our campus lab, we test molecular flavor profiles to create unique strawberry and chocolate fusions.",
    color: "text-coffee",
    bg: "bg-coffee/10"
  },
  {
    icon: <Droplets size={32} />,
    title: "Precision",
    description: "Every gram and degree is measured with scientific accuracy to ensure the perfect whisk.",
    color: "text-caramel",
    bg: "bg-caramel/10"
  },
  {
    icon: <Sparkles size={32} />,
    title: "Serving",
    description: "Served fresh on campus to fuel students and faculty with the ultimate matcha experience.",
    color: "text-matcha",
    bg: "bg-matcha/10"
  }
];

export default function Process() {
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
            Our Craft
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige"
          >
            The Art of the <span className="italic text-caramel">Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="relative group"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-zen-dark/10 to-transparent z-0" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-24 h-24 ${step.bg} ${step.color} rounded-[2rem] flex items-center justify-center mb-8 shadow-lg shadow-black/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-matcha/10`}
                >
                  {step.icon}
                </motion.div>
                
                <h3 className="text-2xl font-serif text-zen-dark dark:text-beige mb-4 group-hover:text-matcha transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-sm text-zen-dark/50 dark:text-beige/50 font-light leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
                
                <div className="mt-6 w-8 h-8 rounded-full border border-zen-dark/10 dark:border-white/10 flex items-center justify-center text-[10px] font-bold text-zen-dark/30 dark:text-beige/30">
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
