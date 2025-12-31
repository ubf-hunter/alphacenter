// ============================================
// WHY ALPHA APP - Section avantages de l'app
// 6 cards avec icones et descriptions
// ============================================

import { motion } from 'framer-motion';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { appAdvantages } from '@/data/application';

// Configuration des couleurs par type
const colorConfig = {
  orange: {
    bg: 'bg-orange/10',
    iconBg: 'bg-orange',
    border: 'border-orange/20',
    hover: 'hover:border-orange/40',
  },
  navy: {
    bg: 'bg-navy/10',
    iconBg: 'bg-navy',
    border: 'border-navy/20',
    hover: 'hover:border-navy/40',
  },
};

function AdvantageCard({ advantage, index }) {
  const Icon = advantage.icon;
  const colors = colorConfig[advantage.color] || colorConfig.orange;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`
        relative p-6 lg:p-8 bg-white rounded-2xl border ${colors.border} ${colors.hover}
        shadow-sm hover:shadow-lg transition-all duration-300
        group
      `}
    >
      {/* Icone */}
      <div
        className={`
          w-14 h-14 ${colors.iconBg} rounded-xl
          flex items-center justify-center mb-5
          group-hover:scale-110 transition-transform duration-300
        `}
      >
        <Icon size={28} className="text-white" />
      </div>

      {/* Titre */}
      <h3 className="text-xl font-bold text-navy mb-3">
        {advantage.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {advantage.description}
      </p>

      {/* Decorateur coin */}
      <div
        className={`
          absolute top-4 right-4 w-20 h-20 ${colors.bg} rounded-full
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          -z-10 blur-xl
        `}
      />
    </motion.div>
  );
}

export default function WhyAlphaApp() {
  return (
    <section className="py-20 lg:py-28 bg-off-white relative overflow-hidden">
      {/* Pattern de fond */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23001A51' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10">
        <SectionTitle
          badge="Pourquoi Alpha App ?"
          title="Tout ce dont tu as besoin pour *reussir*"
          subtitle="Une application pensee pour les realites du Cameroun : mode hors-ligne, paiement Mobile Money, contenu adapte."
        />

        {/* Grille des avantages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {appAdvantages.map((advantage, index) => (
            <AdvantageCard
              key={advantage.id}
              advantage={advantage}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
