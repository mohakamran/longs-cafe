import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Search, ShoppingBag, X, Heart, Leaf } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, wishlist } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/menu?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled || isMobileMenuOpen 
          ? 'py-4 bg-white/95 dark:bg-zen-dark/95 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/20' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 md:gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-matcha rounded-xl md:rounded-2xl flex items-center justify-center text-beige shadow-lg shadow-matcha/20 group-hover:rotate-12 transition-transform duration-500">
              <Leaf size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-matcha dark:text-matcha">LONG'S CAFE</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="text-xs font-bold text-zen-dark/80 hover:text-matcha transition-all uppercase tracking-[0.2em] dark:text-beige/80 dark:hover:text-matcha relative group"
          >
            <motion.span whileHover={{ y: -2 }} className="inline-block">Home</motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-matcha transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/menu"
            className="text-xs font-bold text-zen-dark/80 hover:text-matcha transition-all uppercase tracking-[0.2em] dark:text-beige/80 dark:hover:text-matcha relative group"
          >
            <motion.span whileHover={{ y: -2 }} className="inline-block">Menu</motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-matcha transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/experience"
            className="text-xs font-bold text-zen-dark/80 hover:text-matcha transition-all uppercase tracking-[0.2em] dark:text-beige/80 dark:hover:text-matcha relative group"
          >
            <motion.span whileHover={{ y: -2 }} className="inline-block">Experience</motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-matcha transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            to="/locations"
            className="text-xs font-bold text-zen-dark/80 hover:text-matcha transition-all uppercase tracking-[0.2em] dark:text-beige/80 dark:hover:text-matcha relative group"
          >
            <motion.span whileHover={{ y: -2 }} className="inline-block">Locations</motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-matcha transition-all duration-300 group-hover:w-full" />
          </Link>
          <motion.a
            href={isHome ? "#story" : "/#story"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold text-zen-dark/80 hover:text-matcha transition-all uppercase tracking-[0.2em] dark:text-beige/80 dark:hover:text-matcha relative group"
          >
            <motion.span whileHover={{ y: -2 }} className="inline-block">Story</motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-matcha transition-all duration-300 group-hover:w-full" />
          </motion.a>
        </div>

        <div className="flex items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSearchOpen(true)}
            className="text-zen-dark/70 hover:text-matcha transition-colors dark:text-beige/70 dark:hover:text-matcha"
            aria-label="Search"
          >
            <Search size={20} />
          </motion.button>
          <Link to="/wishlist">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative text-zen-dark/70 hover:text-matcha transition-colors dark:text-beige/70 dark:hover:text-matcha"
              aria-label="Wishlist"
            >
              <Heart size={20} fill={wishlist.length > 0 ? "currentColor" : "none"} className={wishlist.length > 0 ? "text-red-500" : ""} />
              {wishlist.length > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center"
                >
                  {wishlist.length}
                </motion.span>
              )}
            </motion.button>
          </Link>
          <Link to="/cart">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative text-zen-dark/70 hover:text-matcha transition-colors dark:text-beige/70 dark:hover:text-matcha"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-caramel text-white text-[10px] rounded-full flex items-center justify-center"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>
          </Link>
          <button 
            className="md:hidden text-zen-dark dark:text-beige"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-beige/95 dark:bg-zen-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
          >
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-zen-dark dark:text-beige hover:text-matcha transition-colors"
            >
              <X size={20} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-3xl"
            >
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-matcha" size={24} />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search for your favorite matcha..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-zen-dark/10 dark:border-white/10 py-6 md:py-8 pl-14 md:pl-20 pr-4 md:pr-8 text-xl md:text-5xl font-serif text-zen-dark dark:text-beige focus:outline-none focus:border-matcha transition-colors placeholder:text-zen-dark/20 dark:placeholder:text-beige/20"
                />
                <button 
                  type="submit"
                  className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-matcha hover:text-matcha/80 transition-colors"
                >
                  Search
                </button>
              </form>
              <div className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4">
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zen-dark/40 dark:text-beige/40">Popular:</span>
                {['Matcha Latte', 'Strawberry Fusion', 'Chocolate Matcha', 'Ceremonial'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchQuery(tag);
                      navigate(`/menu?search=${encodeURIComponent(tag)}`);
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-xs md:text-sm text-zen-dark/60 dark:text-beige/60 hover:text-matcha transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zen-dark border-t border-zen-dark/5 dark:border-white/5 p-6 flex flex-col gap-2 shadow-2xl overflow-hidden"
          >
            <button
              className="text-lg font-serif text-black py-3 dark:text-white flex items-center justify-between border-b border-black/5 dark:border-white/5"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
            >
              Search
              <Search size={20} className="text-matcha" />
            </button>
            <Link
              to="/"
              className="text-lg font-serif text-black py-3 dark:text-white border-b border-black/5 dark:border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-lg font-serif text-black py-3 dark:text-white border-b border-black/5 dark:border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/wishlist"
              className="text-lg font-serif text-black py-3 dark:text-white flex items-center justify-between border-b border-black/5 dark:border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Wishlist
              {wishlist.length > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{wishlist.length}</span>
              )}
            </Link>
            <Link
              to="/cart"
              className="text-lg font-serif text-black py-3 dark:text-white flex items-center justify-between border-b border-black/5 dark:border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order Bag
              {totalItems > 0 && (
                <span className="bg-matcha text-white text-xs px-2 py-1 rounded-full">{totalItems}</span>
              )}
            </Link>
            <Link
              to="/experience"
              className="text-lg font-serif text-black py-3 dark:text-white border-b border-black/5 dark:border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              to="/locations"
              className="text-lg font-serif text-black py-3 dark:text-white border-b border-black/5 dark:border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Locations
            </Link>
            <a 
              href={isHome ? "#story" : "/#story"}
              className="text-lg font-serif text-black py-3 dark:text-white border-b border-black/5 dark:border-white/5 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Story
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
