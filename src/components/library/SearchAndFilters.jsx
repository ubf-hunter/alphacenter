// ============================================
// SEARCH AND FILTERS
// Barre de recherche et filtres
// ============================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { categories } from '@/data/products';

export default function SearchAndFilters({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  sortBy,
  setSortBy,
}) {
  const [showFilters, setShowFilters] = useState(false);

  const sortOptions = [
    { value: 'popular', label: 'Populaires' },
    { value: 'newest', label: 'Nouveautes' },
    { value: 'price-asc', label: 'Prix croissant' },
    { value: 'price-desc', label: 'Prix decroissant' },
  ];

  return (
    <div className="space-y-4">
      {/* Search bar and filter toggle */}
      <div className="flex gap-3">
        {/* Search */}
        <div className="flex-1 relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Rechercher un document..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Filter toggle (mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
        >
          <SlidersHorizontal size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Filters */}
      <motion.div
        initial={false}
        animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
        className={`md:!h-auto md:!opacity-100 overflow-hidden`}
      >
        <div className="space-y-4 pt-2 md:pt-0">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-navy text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Tous
            </button>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-navy text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.shortName || category.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Trier par:</span>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    sortBy === option.value
                      ? 'bg-orange text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
