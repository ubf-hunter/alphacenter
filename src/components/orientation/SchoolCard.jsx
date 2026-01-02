// ============================================
// SCHOOL CARD
// Carte pour afficher une ecole
// ============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Trophy, Globe } from 'lucide-react';

export default function SchoolCard({ school, index = 0, variant = 'default' }) {
  const Icon = school.icon;
  const isLocal = school.type === 'local';

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true }}
      >
        <Link
          to={`/orientation/ecoles/${school.slug}`}
          className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
        >
          <div className={`w-12 h-12 bg-linear-to-br ${school.gradient} rounded-xl flex items-center justify-center shrink-0`}>
            <Icon size={24} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-navy truncate">{school.shortName}</h4>
              {!isLocal && (
                <Globe size={14} className="text-gray-400 shrink-0" />
              )}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <MapPin size={12} />
              <span className="truncate">{school.city}, {school.country}</span>
            </div>
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
      <Link to={`/orientation/ecoles/${school.slug}`}>
        <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/60 hover:shadow-xl hover:shadow-gray-300/60 transition-all duration-500 hover:-translate-y-2">
          {/* Badge type */}
          {!isLocal && (
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
              <Globe size={12} />
              <span>International</span>
            </div>
          )}

          {/* Alpha Prep badge */}
          {school.alphaPrep?.available && (
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-orange text-white text-xs font-semibold rounded-full">
              Prep Alpha
            </div>
          )}

          {/* Header avec gradient */}
          <div className={`relative h-44 bg-linear-to-br ${school.gradient} overflow-hidden`}>
            {/* Decorations */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />

            {/* Icon/Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 p-2">
                <Icon size={40} className="text-gray-700" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold text-navy leading-tight">
                {school.shortName}
              </h3>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
              <MapPin size={14} />
              <span>{school.city}, {school.country}</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
              {school.tagline}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 mb-5">
              {school.stats.ranking && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                  <Trophy size={14} className="text-amber-500" />
                  <span>{school.stats.ranking}</span>
                </div>
              )}
              {school.stats.students && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                  <Users size={14} className="text-gray-400" />
                  <span>{school.stats.students.toLocaleString()} etudiants</span>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-orange border-b-2 border-current pb-0.5">
                Voir l'ecole
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
