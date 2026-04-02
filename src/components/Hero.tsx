import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight, Leaf, Coffee as CoffeeIcon, Sparkles } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const bgX = useTransform(xSpring, [-0.5, 0.5], ["-2%", "2%"]);
  const bgY = useTransform(ySpring, [-0.5, 0.5], ["-2%", "2%"]);
  
  const floatX = useTransform(xSpring, [-0.5, 0.5], [-20, 20]);
  const floatY = useTransform(ySpring, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <motion.div 
        style={{ 
          x: bgX, 
          y: bgY,
          scale: useTransform(scrollYProgress, [0, 1], [1.1, 1.3])
        }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://i.namu.wiki/i/_nd4a5glXPws1rZY6tIw4oBaAB5kdZf28I1bALu8RmRQe6iIHnd1lcEtfq3pMUYDKYpe30lIB_AoaaKdtqm7NA.webp" 
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20 dark:opacity-15 grayscale-[0.5]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige/80 via-beige/40 to-beige dark:from-zen-dark/80 dark:via-zen-dark/40 dark:to-zen-dark transition-colors duration-500" />
      </motion.div>

      {/* Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-matcha/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-coffee/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Floating Elements */}
        <motion.div 
          style={{ x: floatX, y: floatY }}
          animate={{ 
            rotate: [0, 15, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[10%] text-matcha/20 hidden lg:block"
        >
          <Leaf size={140} strokeWidth={0.5} />
        </motion.div>
        
        <motion.div 
          style={{ 
            x: useTransform(xSpring, [-0.5, 0.5], [20, -20]), 
            y: useTransform(ySpring, [-0.5, 0.5], [20, -20]) 
          }}
          animate={{ 
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[15%] left-[5%] text-coffee/20 hidden lg:block"
        >
          <CoffeeIcon size={120} strokeWidth={0.5} />
        </motion.div>

        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[20%] w-32 h-32 bg-caramel/10 rounded-full blur-2xl"
        />
        
        <motion.div
          style={{ 
            x: useTransform(xSpring, [-0.5, 0.5], [-40, 40]), 
            y: useTransform(ySpring, [-0.5, 0.5], [-40, 40]) 
          }}
          className="absolute top-[20%] left-[40%] text-caramel/10 hidden lg:block"
        >
          <Sparkles size={60} strokeWidth={1} />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          style={{ y: textY }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-matcha rounded-full animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-zen-dark/60 dark:text-beige/60">Artisan Matcha Lab & Premium Fusions</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-zen-dark dark:text-beige leading-[1.1] mb-10 text-balance"
          >
            The Artisan <br />
            <span className="text-matcha italic">Matcha</span> Lab
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-base md:text-xl text-zen-dark/60 dark:text-beige/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed text-balance"
          >
            Born in the labs of Kitakyushu Hibikino Campus. 
            We experiment with premium Uji matcha to create the perfect strawberry and chocolate fusions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/menu">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#24493F',
                  boxShadow: "0 20px 40px rgba(36, 73, 63, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-matcha text-beige rounded-2xl font-medium tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-matcha/20 transition-all group"
              >
                Explore Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/menu">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255,255,255,1)',
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 glass text-zen-dark dark:text-beige rounded-2xl font-medium tracking-wide border border-zen-dark/10 dark:border-white/10 transition-all"
              >
                Order Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zen-dark/40 dark:text-beige/40 rotate-90 origin-left translate-x-1">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zen-dark/20 dark:from-beige/20 to-transparent" />
      </motion.div>
    </section>
  );
}
