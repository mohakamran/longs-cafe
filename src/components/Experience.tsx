import { motion } from 'motion/react';
import { Leaf, Coffee, Wind, Sparkles } from 'lucide-react';

export default function Experience() {
  const features = [
    {
      icon: <Leaf className="text-matcha" size={24} />,
      title: "Ceremonial Grade",
      description: "Sourced directly from heritage farms in Uji, Kyoto, our matcha is stone-ground for maximum flavor."
    },
    {
      icon: <Sparkles className="text-coffee" size={24} />,
      title: "Lab Experiments",
      description: "We push the boundaries of flavor with our signature strawberry and chocolate matcha fusions."
    },
    {
      icon: <Wind className="text-caramel" size={24} />,
      title: "Campus Sanctuary",
      description: "Our space on Hibikino Campus is designed to provide a calming escape for students and faculty."
    },
    {
      icon: <Sparkles className="text-matcha" size={24} />,
      title: "Scientific Precision",
      description: "Every drink is prepared with lab-like accuracy, from the perfect whisk to the precise temperature."
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-48 px-6 overflow-hidden flex items-center bg-white dark:bg-zen-dark transition-colors duration-500">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://maisonkoko.com/cdn/shop/articles/Blog_Images_2_3d03e15d-a54d-4044-9e58-a28b4c156b2f.png?v=1758927330" 
                alt="Matcha preparation in lab"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matcha/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 glass p-8 rounded-[2rem] shadow-2xl max-w-[280px] hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-matcha/10 rounded-full flex items-center justify-center text-matcha">
                  <Leaf size={24} />
                </div>
                <h4 className="font-serif text-xl text-zen-dark dark:text-beige">Kyoto Roots</h4>
              </div>
              <p className="text-sm text-zen-dark/60 dark:text-beige/60 leading-relaxed font-light">
                Our journey began in the tea fields of Uji, where we learned the art of the perfect whisk.
              </p>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-12">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-[0.3em] text-matcha mb-4 block"
              >
                The Experience
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige leading-tight mb-8"
              >
                Where Tradition <br />
                <span className="italic text-matcha">Meets Modernity</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-zen-dark/60 dark:text-beige/60 font-light leading-relaxed mb-12 max-w-xl"
              >
                We believe that a cup of matcha is more than just a drink—it’s a moment of mindfulness. Our process honors centuries-old traditions while embracing scientific innovation.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col gap-4 p-6 rounded-3xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-beige dark:bg-white/5 rounded-2xl flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-serif text-zen-dark dark:text-beige">{feature.title}</h3>
                  <p className="text-sm text-zen-dark/50 dark:text-beige/50 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
