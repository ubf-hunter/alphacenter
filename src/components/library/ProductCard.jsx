// ============================================
// PRODUCT CARD
// Carte pour afficher un produit avec images
// Version imprimee uniquement
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';
import WhatsAppOrderButton from './WhatsAppOrderButton';

const colorStyles = {
  orange: {
    gradient: 'from-orange-500 to-orange-600',
    badge: 'bg-orange-100 text-orange-700',
  },
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    badge: 'bg-blue-100 text-blue-700',
  },
  emerald: {
    gradient: 'from-emerald-500 to-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
  },
};

export default function ProductCard({ product, index = 0 }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const colors = colorStyles[product.color] || colorStyles.orange;
  const Icon = product.icon;

  const hasMultipleImages = product.images && product.images.length > 1;

  const nextImage = (e) => {
    e.stopPropagation();
    if (product.images && product.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (product.images && product.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/60 hover:shadow-xl hover:shadow-gray-300/60 transition-all duration-500 hover:-translate-y-2">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
          {product.bestseller && (
            <span className="flex items-center gap-1 px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
              <Star size={12} className="fill-current" />
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="flex items-center gap-1 px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              <Sparkles size={12} />
              Nouveau
            </span>
          )}
        </div>

        {/* Image Section */}
        <div className="relative h-56 md:h-64 overflow-hidden bg-gray-100">
          {product.images && product.images.length > 0 && !imageError ? (
            <>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={product.images[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onError={() => setImageError(true)}
                />
              </AnimatePresence>

              {/* Image Navigation */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
                  >
                    <ChevronLeft size={18} className="text-gray-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors z-10"
                  >
                    <ChevronRight size={18} className="text-gray-700" />
                  </button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentImageIndex
                            ? 'bg-white w-4'
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            // Fallback si pas d'image
            <div className={`w-full h-full bg-linear-to-br ${colors.gradient} flex items-center justify-center`}>
              <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Icon size={40} className="text-gray-700" />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <span className={`inline-block px-3 py-1 ${colors.badge} text-xs font-medium rounded-full mb-3`}>
            {product.category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-navy mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Highlights */}
          {product.highlights && product.highlights.length > 0 && (
            <ul className="space-y-1.5 mb-4">
              {product.highlights.slice(0, 3).map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                  <span className="w-1.5 h-1.5 bg-orange rounded-full mt-1.5 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          {/* Price */}
          <div className="flex items-end justify-between mb-4">
            <div>
              <span className="text-sm text-gray-500">Prix</span>
              {product.price > 0 ? (
                <div className="text-2xl font-bold text-navy">
                  {product.price.toLocaleString()} <span className="text-sm font-normal">FCFA</span>
                </div>
              ) : (
                <div className="text-lg font-semibold text-gray-400">
                  Prix a venir
                </div>
              )}
            </div>
            {product.pages && (
              <span className="text-xs text-gray-400">{product.pages} pages</span>
            )}
          </div>

          {/* CTA */}
          {product.price > 0 ? (
            <WhatsAppOrderButton
              product={product}
              variant="primary"
              size="md"
              className="w-full"
            />
          ) : (
            <button
              disabled
              className="w-full py-3 bg-gray-100 text-gray-400 font-semibold rounded-xl cursor-not-allowed"
            >
              Bientot disponible
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
