// ============================================
// CAREER CARD
// Carte pour afficher un metier
// ============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Briefcase } from 'lucide-react';

export default function CareerCard({ career, index = 0, variant = 'default' }) {
  const Icon = career.icon;

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true }}
      >
        <Link
          to={`/orientation/metiers/${career.slug}`}
          className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
        >
          <div className={`w-12 h-12 bg-linear-to-br ${career.gradient} rounded-xl flex items-center justify-center shrink-0`}>
            <Icon size={24} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-navy truncate">{career.name}</h4>
            <p className="text-sm text-gray-500 truncate">{career.tagline}</p>
          </div>
          <ArrowRight size={18} className="text-gray-400 group-hover:text-orange transition-colors shrink-0" />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/orientation/metiers/${career.slug}`}>
        <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/60 hover:shadow-xl hover:shadow-gray-300/60 transition-all duration-500 hover:-translate-y-2">
          {/* Header avec gradient */}
          <div className={`relative h-44 bg-linear-to-br ${career.gradient} overflow-hidden`}>
            {/* Decorations */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />

            {/* Trend badge */}
            {career.outlook?.trend === 'up' && (
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                <TrendingUp size={14} className="text-white" />
                <span className="text-white text-xs font-medium">En hausse</span>
              </div>
            )}

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Icon size={40} className="text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-navy mb-1">
              {career.name}
            </h3>
            <p className="text-sm text-gray-400 font-medium mb-3">
              {career.tagline}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
              {career.description}
            </p>

            {/* Quick infos */}
            <div className="flex flex-wrap gap-3 mb-5">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                <Clock size={14} className="text-gray-400" />
                <span>{career.education.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                <Briefcase size={14} className="text-gray-400" />
                <span>{career.employment.rate}% emploi</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-orange border-b-2 border-current pb-0.5">
                Decouvrir ce metier
              </span>
              <span className="w-9 h-9 bg-gray-100 group-hover:bg-navy rounded-full flex items-center justify-center transition-colors duration-300">
                <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
