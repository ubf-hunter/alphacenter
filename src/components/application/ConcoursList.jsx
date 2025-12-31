// ============================================
// CONCOURS LIST - Liste des concours prepares
// Grille par categorie avec badges
// ============================================

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { concoursCategories } from '@/data/application';

// Configuration des couleurs par categorie
const categoryColors = {
  orange: {
    bg: 'bg-orange/10',
    iconBg: 'bg-orange',
    border: 'border-orange/20',
    badge: 'bg-orange/10 text-orange',
    hover: 'hover:border-orange/40',
  },
  emerald: {
    bg: 'bg-emerald-50',
    iconBg: 'bg-emerald-500',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    hover: 'hover:border-emerald-400',
  },
  rose: {
    bg: 'bg-rose-50',
    iconBg: 'bg-rose-500',
    border: 'border-rose-200',
    badge: 'bg-rose-100 text-rose-700',
    hover: 'hover:border-rose-400',
  },
  navy: {
    bg: 'bg-navy/10',
    iconBg: 'bg-navy',
    border: 'border-navy/20',
    badge: 'bg-navy/10 text-navy',
    hover: 'hover:border-navy/40',
  },
};

function CategoryCard({ category, index }) {
  const Icon = category.icon;
  const colors = categoryColors[category.color] || categoryColors.orange;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`
        relative p-6 lg:p-8 bg-white rounded-2xl border ${colors.border} ${colors.hover}
        shadow-sm hover:shadow-lg transition-all duration-300
        group
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon size={28} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-navy">{category.name}</h3>
          <p className="text-sm text-gray-500">{category.concours.length} concours prepares</p>
        </div>
      </div>

      {/* Liste des concours */}
      <div className="space-y-3">
        {category.concours.map((concours, i) => (
          <motion.div
            key={concours.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div>
              <span className={`inline-block px-2.5 py-1 ${colors.badge} rounded-md text-sm font-bold mr-2`}>
                {concours.name}
              </span>
            </div>
            <span className="text-xs text-gray-500 hidden sm:block truncate max-w-[140px]">
              {concours.fullName}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <a
        href="/programmes"
        className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-navy hover:text-orange transition-colors group/link"
      >
        <span>Voir les programmes</span>
        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
      </a>

      {/* Decorateur */}
      <div className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-bl-[3rem] opacity-50`} />
    </motion.div>
  );
}

export default function ConcoursList() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <Container>
        <SectionTitle
          badge="Concours prepares"
          title="Tous les *concours* du Cameroun"
          subtitle="L'app Alpha couvre les principaux concours d'entree aux grandes ecoles du Cameroun."
        />

        {/* Grille des categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {concoursCategories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-500"
        >
          D'autres concours seront ajoutes prochainement. Reste connecte !
        </motion.p>
      </Container>
    </section>
  );
}
