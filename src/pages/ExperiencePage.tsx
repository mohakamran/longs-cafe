import { motion } from 'motion/react';
import Experience from '../components/Experience';
import BrewingGuide from '../components/BrewingGuide';

export default function ExperiencePage() {
  return (
    <div className="pt-20 bg-white dark:bg-zen-dark transition-colors duration-500">
      <Experience />
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-matcha/20 to-transparent" />
      </div>
      <BrewingGuide />
    </div>
  );
}
