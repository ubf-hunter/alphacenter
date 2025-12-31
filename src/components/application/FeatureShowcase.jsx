// ============================================
// FEATURE SHOWCASE - Fonctionnalites detaillees
// Layout alterne image/texte pour chaque feature
// ============================================

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { appFeatures } from '@/data/application';

// Configuration des couleurs
const colorConfig = {
  orange: {
    iconBg: 'bg-orange',
    badgeBg: 'bg-orange/10',
    badgeText: 'text-orange',
    checkColor: 'text-orange',
    gradient: 'from-orange/20 to-orange/5',
  },
  navy: {
    iconBg: 'bg-navy',
    badgeBg: 'bg-navy/10',
    badgeText: 'text-navy',
    checkColor: 'text-navy',
    gradient: 'from-navy/20 to-navy/5',
  },
};

function FeatureItem({ feature, index, isReversed }) {
  const Icon = feature.icon;
  const colors = colorConfig[feature.color] || colorConfig.orange;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className={`
        grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center
        ${index !== 0 ? 'mt-20 lg:mt-28' : ''}
      `}
    >
      {/* Contenu texte */}
      <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        {/* Badge tagline */}
        <span className={`inline-block px-4 py-1.5 ${colors.badgeBg} ${colors.badgeText} rounded-full text-sm font-medium mb-4`}>
          {feature.tagline}
        </span>

        {/* Titre avec icone */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
            <Icon size={24} className="text-white" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-navy pt-1">
            {feature.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* Liste highlights */}
        <ul className="space-y-3">
          {feature.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <CheckCircle size={20} className={`${colors.checkColor} shrink-0 mt-0.5`} />
              <span className="text-gray-700">{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Visuel (Phone mockup placeholder) */}
      <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Fond decoratif */}
          <div className={`absolute inset-0 bg-linear-to-br ${colors.gradient} rounded-[3rem] -rotate-6 scale-95`} />

          {/* Phone mockup simplifie */}
          <div className="relative w-56 h-[450px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl shadow-gray-900/30">
            {/* Boutons lateraux */}
            <div className="absolute -left-0.5 top-20 w-0.5 h-6 bg-gray-800 rounded-l-sm" />
            <div className="absolute -left-0.5 top-28 w-0.5 h-10 bg-gray-800 rounded-l-sm" />
            <div className="absolute -right-0.5 top-24 w-0.5 h-12 bg-gray-800 rounded-r-sm" />

            {/* Ecran */}
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />

              {/* Contenu ecran placeholder */}
              <div className={`w-full h-full bg-linear-to-br ${colors.gradient} flex flex-col items-center justify-center p-6`}>
                <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h4 className="text-navy font-bold text-center mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-xs text-center">
                  {feature.tagline}
                </p>
              </div>

              {/* Reflet */}
              <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full" />
          </div>

          {/* Cercles decoratifs */}
          <div className={`absolute -top-4 ${isReversed ? '-left-4' : '-right-4'} w-20 h-20 border-2 ${colors.badgeText.replace('text-', 'border-')}/20 rounded-full`} />
          <div className={`absolute -bottom-4 ${isReversed ? '-right-4' : '-left-4'} w-16 h-16 border-2 ${colors.badgeText.replace('text-', 'border-')}/30 rounded-full`} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function FeatureShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionTitle
          badge="Fonctionnalites"
          title="Une app *complete* pour ta *reussite*"
          subtitle="Decouvre toutes les fonctionnalites qui font d'Alpha l'app de reference pour preparer les concours au Cameroun."
        />

        {/* Liste des features */}
        <div className="mt-16">
          {appFeatures.map((feature, index) => (
            <FeatureItem
              key={feature.id}
              feature={feature}
              index={index}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
