import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const images = [
  {
    url: "https://cdn.shopify.com/s/files/1/0655/4550/2972/files/mixcha-m-img_03.jpg?v=1745972790",
    speed: 0.1,
    className: "w-40 h-52 md:w-64 md:h-80 top-0 left-[5%] md:left-[10%]"
  },
  {
    url: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/05/a0005159/img/en/a0005159_main.jpg",
    speed: 0.2,
    className: "w-52 h-64 md:w-80 md:h-96 top-20 right-[5%] md:right-[15%]"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3gPbaWX4Dbytx5S84YgyZHpS8af-Y_OXJw&s",
    speed: 0.15,
    className: "w-48 h-60 md:w-72 md:h-80 bottom-0 left-[10%] md:left-[20%]"
  },
  {
    url: "https://media.istockphoto.com/id/2214821043/photo/young-man-drinking-matcha-latte-in-a-cafe.jpg?s=612x612&w=0&k=20&c=nJ6ck0BWXNrVzcZl6k2kDC5WniHzNEqpUYRd9kTMzCU=",
    speed: 0.25,
    className: "w-40 h-48 md:w-64 md:h-72 bottom-20 right-[10%]"
  },
  {
    url: "https://domatcha.ca/cdn/shop/articles/4407655b-88b9-42b1-b7a8-623124b84a1f.jpg?v=1729270996",
    speed: 0.12,
    className: "w-48 h-64 md:w-72 md:h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 md:opacity-40"
  }
];

export default function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-48 px-6 bg-beige dark:bg-zen-dark transition-colors duration-500 overflow-hidden relative min-h-[120vh]">
      <div className="max-w-7xl mx-auto relative h-full">
        <div className="text-center mb-32 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-matcha mb-4 block"
          >
            Visual Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige"
          >
            Captured <span className="italic text-caramel">Moments</span>
          </motion.h2>
        </div>

        <div className="relative h-[600px] md:h-[800px]">
          {images.map((img, i) => {
            const y = useTransform(scrollYProgress, [0, 1], [0, -200 * img.speed * 10]);
            return (
              <motion.div
                key={i}
                style={{ y }}
                className={`absolute rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl ${img.className}`}
              >
                <img 
                  src={img.url} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            );
          })}

          {/* Central Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 pointer-events-none"
          >
            <div className="glass p-12 rounded-[3rem] shadow-2xl backdrop-blur-xl border border-white/20">
              <h3 className="text-3xl md:text-4xl font-serif text-zen-dark dark:text-beige mb-4">The Komorebi Aesthetic</h3>
              <p className="text-sm text-zen-dark/60 dark:text-beige/60 max-w-xs mx-auto font-light leading-relaxed">
                Finding beauty in the filtered light and the simple ritual of a perfect brew.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
