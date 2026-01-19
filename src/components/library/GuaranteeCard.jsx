// ============================================
// GUARANTEE CARD
// Carte pour afficher une garantie
// ============================================

import { motion } from 'framer-motion';

const colorStyles = {
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-600',
    title: 'text-emerald-700',
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    title: 'text-blue-700',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'bg-purple-100 text-purple-600',
    title: 'text-purple-700',
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-600',
    title: 'text-orange-700',
  },
};

export default function GuaranteeCard({ guarantee, index = 0 }) {
  const Icon = guarantee.icon;
  const colors = colorStyles[guarantee.color] || colorStyles.emerald;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${colors.bg} rounded-2xl p-6 text-center`}
    >
      <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center mx-auto mb-4`}>
        <Icon size={28} />
      </div>
      <h3 className={`font-bold ${colors.title} mb-2`}>{guarantee.title}</h3>
      <p className="text-gray-600 text-sm">{guarantee.description}</p>
    </motion.div>
  );
}
