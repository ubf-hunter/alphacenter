// ============================================
// PRODUCT CARD
// Carte pour afficher un produit
// ============================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Star, Tag, Sparkles } from 'lucide-react';
import WhatsAppOrderButton from './WhatsAppOrderButton';

const colorStyles = {
  orange: {
    gradient: 'from-orange-500 to-orange-600',
    badge: 'bg-orange-100 text-orange-700',
  },
  emerald: {
    gradient: 'from-emerald-500 to-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  rose: {
    gradient: 'from-rose-500 to-rose-600',
    badge: 'bg-rose-100 text-rose-700',
  },
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    badge: 'bg-blue-100 text-blue-700',
  },
  purple: {
    gradient: 'from-purple-500 to-purple-600',
    badge: 'bg-purple-100 text-purple-700',
  },
};

export default function ProductCard({ product, index = 0 }) {
  const [selectedFormat, setSelectedFormat] = useState('digital');
  const colors = colorStyles[product.color] || colorStyles.orange;
  const Icon = product.icon || FileText;

  const hasPhysical = product.pricing.physical !== null;
  const currentPrice = selectedFormat === 'digital'
    ? product.pricing.digital
    : product.pricing.physical;

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
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
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
          {product.discount && (
            <span className="flex items-center gap-1 px-2.5 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
              <Tag size={12} />
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Header avec gradient */}
        <div className={`relative h-40 bg-gradient-to-br ${colors.gradient} overflow-hidden`}>
          {/* Decorations */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Icon size={40} className="text-gray-700" />
            </div>
          </div>
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

          {/* Format selector */}
          {hasPhysical && (
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedFormat('digital')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                  selectedFormat === 'digital'
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                PDF
              </button>
              <button
                onClick={() => setSelectedFormat('physical')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                  selectedFormat === 'physical'
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Imprime
              </button>
            </div>
          )}

          {/* Price */}
          <div className="flex items-end justify-between mb-4">
            <div>
              <span className="text-sm text-gray-500">Prix</span>
              <div className="text-2xl font-bold text-navy">
                {currentPrice?.toLocaleString()} <span className="text-sm font-normal">FCFA</span>
              </div>
            </div>
            {product.pages && (
              <span className="text-xs text-gray-400">{product.pages} pages</span>
            )}
          </div>

          {/* CTA */}
          <WhatsAppOrderButton
            product={product}
            format={selectedFormat}
            variant="primary"
            size="md"
            className="w-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
