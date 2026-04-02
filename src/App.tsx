/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedDrinks from './components/FeaturedDrinks';
import Experience from './components/Experience';
import MenuPreview from './components/MenuPreview';
import Story from './components/Story';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Newsletter from './components/Newsletter';
import ParallaxGallery from './components/ParallaxGallery';
import BrewingGuide from './components/BrewingGuide';
import InteractiveCursor from './components/InteractiveCursor';
import FloatingCartButton from './components/FloatingCartButton';
import Location, { Footer } from './components/Location';
import Order from './pages/Order';
import FullMenu from './pages/FullMenu';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import ShippingPage from './pages/ShippingPage';
import ReturnsPage from './pages/ReturnsPage';
import WishlistPage from './pages/WishlistPage';
import ExperiencePage from './pages/ExperiencePage';
import LocationsPage from './pages/LocationsPage';
import ScrollToTop from './components/ScrollToTop';
import { motion, useScroll, useSpring } from 'motion/react';

function Home() {
  return (
    <>
      <Hero />
      <section className="relative z-10">
        <FeaturedDrinks />
        <Experience />
        <Process />
        <Story />
        <ParallaxGallery />
        <MenuPreview />
        <BrewingGuide />
        <Testimonials />
        <Newsletter />
        <Location />
      </section>
    </>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen selection:bg-matcha/20 selection:text-matcha overflow-x-hidden transition-colors duration-500">
          <InteractiveCursor />
          <FloatingCartButton />
          
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-matcha z-[100] origin-left"
            style={{ scaleX }}
          />

          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<Order />} />
              <Route path="/menu" element={<FullMenu />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/shipping" element={<ShippingPage />} />
              <Route path="/returns" element={<ReturnsPage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/locations" element={<LocationsPage />} />
            </Routes>
          </main>

          <Footer />

          {/* Floating Decorative Elements */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div 
              animate={{ 
                y: [0, -100, 0],
                x: [0, 50, 0],
                rotate: [0, 45, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[10%] left-[5%] w-64 h-64 bg-matcha/5 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ 
                y: [0, 100, 0],
                x: [0, -50, 0],
                rotate: [0, -45, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-coffee/5 rounded-full blur-3xl"
            />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}
