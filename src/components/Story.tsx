import { motion } from 'motion/react';

export default function Story() {
  return (
    <section id="story" className="min-h-screen py-48 px-6 bg-white dark:bg-zen-dark transition-colors duration-500 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://i.namu.wiki/i/_nd4a5glXPws1rZY6tIw4oBaAB5kdZf28I1bALu8RmRQe6iIHnd1lcEtfq3pMUYDKYpe30lIB_AoaaKdtqm7NA.webp" 
                alt="Our Story - University Campus"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-matcha/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-caramel/10 rounded-full blur-2xl -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass p-8 rounded-3xl shadow-xl max-w-[200px]"
            >
              <p className="text-3xl font-serif text-matcha mb-1">2024</p>
              <p className="text-xs uppercase tracking-widest text-zen-dark/60 dark:text-beige/60 font-bold">Founded in the Lab</p>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-matcha mb-6 block"
            >
              Our Journey
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige leading-tight mb-10"
            >
              From Lab Mates <br />
              <span className="italic text-caramel">to Business</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-zen-dark/70 dark:text-beige/70 font-light leading-relaxed"
            >
              <p>
                Long's Cafe began as a simple research project at the University of Kitakyushu, Hibikino Campus. As lab mates, we spent countless nights experimenting with the molecular properties of Uji matcha, trying to find the perfect balance of flavor and texture.
              </p>
              <p>
                What started as a shared passion for premium tea quickly turned into a campus-wide sensation. We realized that our "experiments" were more than just data—they were moments of joy for our fellow students and faculty.
              </p>
              <p>
                Today, we operate right here on campus, serving our signature strawberry and chocolate matcha fusions. We remain committed to our scientific roots, ensuring every cup is a masterpiece of precision and taste.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { title: "Campus", label: "Born", desc: "Hibikino Campus roots." },
                { title: "Lab", label: "Tested", desc: "Scientific precision." },
                { title: "Fresh", label: "Flavors", desc: "Strawberry & Chocolate." }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-6 bg-beige/50 dark:bg-white/5 rounded-3xl border border-zen-dark/5 dark:border-white/5 group transition-all duration-500 hover:bg-matcha hover:border-matcha shadow-sm hover:shadow-xl hover:shadow-matcha/20"
                >
                  <div className="flex flex-col">
                    <span className="text-matcha font-serif text-2xl group-hover:text-white transition-colors">{value.title}</span>
                    <span className="text-[10px] uppercase tracking-widest text-zen-dark/40 dark:text-beige/40 group-hover:text-white/60 transition-colors mb-4">{value.label}</span>
                    <p className="text-xs text-zen-dark/60 dark:text-beige/60 group-hover:text-white/80 transition-colors font-light">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
