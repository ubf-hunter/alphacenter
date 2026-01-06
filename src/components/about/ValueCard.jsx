// ============================================
// VALUE CARD - Card pour afficher une valeur
// ============================================

import { motion } from 'framer-motion';

export default function ValueCard({ value, index }) {
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="
        relative h-full p-6 lg:p-8
        bg-white rounded-2xl
        border border-gray-100
        shadow-sm hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-2
        overflow-hidden
      "
      >
        {/* Background accent */}
        <div
          className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ backgroundColor: value.color }}
        />

        {/* Icon */}
        <div
          className="
          relative z-10
          inline-flex items-center justify-center
          w-14 h-14 rounded-xl mb-5
          transition-transform duration-300
          group-hover:scale-110
        "
          style={{ backgroundColor: `${value.color}15` }}
        >
          <Icon size={28} style={{ color: value.color }} strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="relative z-10 text-xl font-bold text-navy mb-3">
          {value.name}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-gray-600 leading-relaxed">
          {value.description}
        </p>
      </div>
    </motion.div>
  );
}
