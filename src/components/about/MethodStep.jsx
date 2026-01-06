// ============================================
// METHOD STEP - Etape de la methode pedagogique
// ============================================

import { motion } from 'framer-motion';

export default function MethodStep({ principle, index }) {
  const Icon = principle.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="
        relative p-6 lg:p-8
        bg-white rounded-2xl
        border border-gray-100
        shadow-sm hover:shadow-lg
        transition-all duration-300
      "
      >
        <div className="flex gap-6">
          {/* Number + Icon */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Number circle */}
              <div
                className="
                w-16 h-16 rounded-2xl
                bg-linear-to-br from-orange to-orange-600
                flex items-center justify-center
                text-white text-2xl font-bold
                shadow-lg shadow-orange/30
                group-hover:scale-110 transition-transform duration-300
              "
              >
                {principle.number}
              </div>
              {/* Icon badge */}
              <div
                className="
                absolute -bottom-2 -right-2
                w-8 h-8 rounded-lg
                bg-navy text-white
                flex items-center justify-center
                shadow-md
              "
              >
                <Icon size={16} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Title */}
            <h3 className="text-xl font-bold text-navy mb-3">
              {principle.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              {principle.description}
            </p>

            {/* Quote if exists */}
            {principle.quote && (
              <div className="p-4 bg-orange/5 rounded-xl border-l-4 border-orange">
                <p className="text-sm italic text-navy/80">
                  "{principle.quote}"
                </p>
              </div>
            )}

            {/* Stats if exists */}
            {principle.stats && (
              <div className="inline-flex items-center px-4 py-2 bg-navy/5 rounded-lg">
                <span className="text-sm font-medium text-navy">
                  {principle.stats}
                </span>
              </div>
            )}

            {/* Features if exists */}
            {principle.features && (
              <ul className="space-y-2">
                {principle.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Techniques if exists */}
            {principle.techniques && (
              <div className="flex flex-wrap gap-2">
                {principle.techniques.map((technique, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {technique}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
