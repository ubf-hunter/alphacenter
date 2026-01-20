// ============================================
// PRODUCT GRID
// Grille de produits avec filtrage
// ============================================

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package } from 'lucide-react';
import Container from '@components/common/Container';
import ProductCard from './ProductCard';
import SearchAndFilters from './SearchAndFilters';
import { allProducts } from '@/data/products';

export default function ProductGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.categoryId === activeCategory);
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew));
        break;
      case 'price-asc':
        result.sort((a, b) => a.pricing.digital - b.pricing.digital);
        break;
      case 'price-desc':
        result.sort((a, b) => b.pricing.digital - a.pricing.digital);
        break;
      case 'popular':
      default:
        result = result.filter((p) => p.bestseller).concat(result.filter((p) => !p.bestseller));
        break;
    }

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Search and Filters */}
        <SearchAndFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Results count */}
        <div className="mt-6 mb-8 flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-navy">{filteredProducts.length}</span> document(s) trouve(s)
          </p>
        </div>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={activeCategory + sortBy + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Aucun document trouve</h3>
              <p className="text-gray-500 mb-6">
                Essayez de modifier vos criteres de recherche
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-orange font-semibold hover:underline"
              >
                Reinitialiser les filtres
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
