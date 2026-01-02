// ============================================
// FILTER BAR
// Barre de filtres pour les pages liste
// ============================================

import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';

export default function FilterBar({
  searchValue = '',
  onSearchChange,
  filters = [],
  activeFilters = [],
  onFilterChange,
  placeholder = 'Rechercher...',
  showSearch = true,
}) {
  const handleFilterClick = (filterId) => {
    if (activeFilters.includes(filterId)) {
      onFilterChange(activeFilters.filter(f => f !== filterId));
    } else {
      onFilterChange([...activeFilters, filterId]);
    }
  };

  const clearFilters = () => {
    onFilterChange([]);
    if (onSearchChange) {
      onSearchChange('');
    }
  };

  const hasActiveFilters = activeFilters.length > 0 || searchValue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg shadow-gray-200/60 p-4 lg:p-6"
    >
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        {showSearch && (
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder={placeholder}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all"
            />
          </div>
        )}

        {/* Filters */}
        {filters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <Filter size={18} className="text-gray-400 hidden lg:block" />
            {filters.map((filter) => {
              const isActive = activeFilters.includes(filter.id);
              const Icon = filter.icon;

              return (
                <button
                  key={filter.id}
                  onClick={() => handleFilterClick(filter.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
                    transition-all duration-300 border
                    ${isActive
                      ? `${filter.activeClass || 'bg-orange text-white border-transparent'}`
                      : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100'
                    }
                  `}
                >
                  {Icon && <Icon size={16} />}
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Active filters summary */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Filtres actifs:</span>
            <div className="flex flex-wrap gap-2">
              {searchValue && (
                <span className="px-2 py-1 bg-gray-100 rounded-lg text-xs">
                  "{searchValue}"
                </span>
              )}
              {activeFilters.map((filterId) => {
                const filter = filters.find(f => f.id === filterId);
                return filter ? (
                  <span key={filterId} className="px-2 py-1 bg-orange/10 text-orange rounded-lg text-xs">
                    {filter.label}
                  </span>
                ) : null;
              })}
            </div>
          </div>
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            <X size={14} />
            <span>Effacer</span>
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
