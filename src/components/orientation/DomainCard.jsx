// ============================================
// DOMAIN CARD
// Carte pour afficher un domaine d'orientation
// ============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function DomainCard({ domain, index = 0 }) {
  const Icon = domain.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/orientation/metiers?domaine=${domain.id}`}>
        <div className={`relative h-full bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/60 hover:shadow-xl hover:shadow-gray-300/60 transition-all duration-500 hover:-translate-y-2`}>
          {/* Header avec gradient */}
          <div className={`relative h-40 bg-linear-to-br ${domain.gradient} overflow-hidden`}>
            {/* Decorations */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Icon size={40} className="text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-navy mb-2">
              {domain.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
              {domain.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
              <span>
                <span className={`font-semibold ${domain.textColor}`}>{domain.stats.careers}</span> metiers
              </span>
              <span>
                <span className={`font-semibold ${domain.textColor}`}>{domain.stats.schools}</span> ecoles
              </span>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <span className={`text-sm font-semibold ${domain.textColor}`}>
                Explorer
              </span>
              <span className="w-8 h-8 bg-gray-100 group-hover:bg-navy rounded-full flex items-center justify-center transition-colors duration-300">
                <ArrowRight size={14} className="text-gray-600 group-hover:text-white transition-colors" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
