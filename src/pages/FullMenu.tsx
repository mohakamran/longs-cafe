import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo, useEffect } from 'react';
import { DRINKS, Drink } from '../constants';
import { Search, Filter, ArrowUpDown, ChevronRight, Coffee, Leaf, Info, Heart } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

export default function FullMenu() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'classic' | 'fusion'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  const filteredAndSortedDrinks = useMemo(() => {
    let result = DRINKS.filter((drink) => {
      const matchesSearch = drink.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          drink.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      let matchesCategory = true;
      if (categoryFilter === 'classic') {
        matchesCategory = drink.name.includes('Ceremonial');
      } else if (categoryFilter === 'fusion') {
        matchesCategory = !drink.name.includes('Ceremonial');
      }
      
      return matchesSearch && matchesCategory;
    });

    result.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', ''));
      const priceB = parseFloat(b.price.replace('$', ''));

      switch (sortBy) {
        case 'name-asc': return a.name.localeCompare(b.name);
        case 'name-desc': return b.name.localeCompare(a.name);
        case 'price-asc': return priceA - priceB;
        case 'price-desc': return priceB - priceA;
        default: return 0;
      }
    });

    return result;
  }, [searchQuery, categoryFilter, sortBy]);

  return (
    <div className="min-h-screen bg-beige dark:bg-zen-dark transition-colors duration-500 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-matcha mb-4 block"
          >
            The Lab Menu
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-zen-dark dark:text-beige mb-8"
          >
            Artisan <span className="italic text-caramel">Experiments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zen-dark/60 dark:text-beige/60 max-w-2xl mx-auto font-light"
          >
            Explore our scientific experiments with premium Uji matcha. 
            From classic whisks to bold strawberry and chocolate fusions, born on campus.
          </motion.p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between glass p-6 rounded-[2rem] shadow-xl">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zen-dark/40 dark:text-beige/40" size={18} />
            <input 
              type="text"
              placeholder="Search drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-xl focus:outline-none focus:border-matcha transition-colors text-zen-dark dark:text-beige"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            {/* Category Filter */}
            <div className="flex p-1 bg-beige dark:bg-white/5 rounded-xl border border-zen-dark/5 dark:border-white/5">
              {(['all', 'classic', 'fusion'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                    categoryFilter === cat 
                      ? 'bg-matcha text-white shadow-md' 
                      : 'text-zen-dark/50 dark:text-beige/50 hover:text-matcha'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative group w-full sm:w-auto">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none w-full sm:w-48 pl-10 pr-10 py-3 bg-white/50 dark:bg-white/5 border border-zen-dark/10 dark:border-white/10 rounded-xl focus:outline-none focus:border-matcha transition-colors text-sm font-medium text-zen-dark dark:text-beige cursor-pointer"
              >
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
                <option value="price-asc">Price: Low-High</option>
                <option value="price-desc">Price: High-Low</option>
              </select>
              <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 text-zen-dark/40 dark:text-beige/40 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAndSortedDrinks.map((drink) => (
              <motion.div
                key={drink.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-matcha/10 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={drink.image} 
                    alt={drink.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${
                      drink.category === 'matcha' ? 'bg-matcha/80 text-white' : 'bg-coffee/80 text-white'
                    }`}>
                      {drink.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <motion.button 
                      onClick={() => toggleWishlist(drink)}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.8 }}
                      className={`w-12 h-12 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-xl border ${
                        isInWishlist(drink.id) 
                          ? 'bg-red-500 border-red-500 text-white' 
                          : 'bg-white/80 border-white/20 text-zen-dark hover:text-red-500'
                      }`}
                    >
                      <Heart 
                        size={20} 
                        fill={isInWishlist(drink.id) ? "currentColor" : "none"} 
                        className={isInWishlist(drink.id) ? "animate-pulse" : ""}
                      />
                    </motion.button>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-serif text-zen-dark dark:text-beige group-hover:text-matcha transition-colors">{drink.name}</h3>
                    <span className="text-xl font-medium text-caramel">{drink.price}</span>
                  </div>
                  
                  <p className="text-sm text-zen-dark/60 dark:text-beige/60 font-light leading-relaxed mb-6">
                    {drink.description}
                  </p>

                  <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {drink.ingredients.map((ing, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-wider px-3 py-1 bg-zen-dark/5 dark:bg-white/5 rounded-full text-zen-dark/40 dark:text-beige/40">
                          {ing}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => addToCart(drink)}
                      className="w-full py-4 bg-matcha text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-matcha/90 transition-all shadow-lg shadow-matcha/20"
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredAndSortedDrinks.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <Info className="mx-auto text-matcha/20 mb-6" size={64} />
            <h3 className="text-2xl font-serif text-zen-dark dark:text-beige mb-2">No drinks found</h3>
            <p className="text-zen-dark/50 dark:text-beige/50">Try adjusting your search or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
