import { motion, useSpring, useMotionValue } from 'motion/react';
import { useEffect, useState } from 'react';

export default function InteractiveCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('button, a, input, select, .cursor-pointer');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-matcha/30 border border-matcha/50 pointer-events-none z-[9999] hidden lg:block backdrop-blur-sm"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        scale: isHovering ? 2.5 : 1,
        x: '-50%',
        y: '-50%'
      }}
      transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      <motion.div 
        animate={{ scale: isHovering ? 0.2 : 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-matcha rounded-full"
      />
    </motion.div>
  );
}
