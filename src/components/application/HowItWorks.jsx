// ============================================
// HOW IT WORKS - Timeline des etapes
// 4 etapes pour commencer avec l'app
// ============================================

import { motion } from 'framer-motion';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { howItWorksSteps } from '@/data/application';

function StepCard({ step, index, isLast }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connecteur horizontal (desktop) */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-linear-to-r from-orange/50 to-orange/10" />
      )}

      {/* Connecteur vertical (mobile) */}
      {!isLast && (
        <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-linear-to-b from-orange/50 to-orange/10" />
      )}

      {/* Numero d'etape */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring' }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="w-20 h-20 bg-linear-to-br from-orange to-orange/80 rounded-2xl flex items-center justify-center shadow-lg shadow-orange/30 mb-5">
          <Icon size={32} className="text-white" />
        </div>

        {/* Badge numero */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
          {step.step}
        </div>
      </motion.div>

      {/* Titre */}
      <h3 className="text-xl font-bold text-navy mb-2">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 max-w-xs leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-off-white to-white relative overflow-hidden">
      {/* Blobs decoratifs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <SectionTitle
          badge="Comment ca marche"
          title="*4 etapes* pour commencer"
          subtitle="Telecharge l'app et commence a reviser en quelques minutes. C'est simple, rapide et gratuit."
        />

        {/* Timeline horizontale (desktop) / verticale (mobile) */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
            {howItWorksSteps.map((step, index) => (
              <StepCard
                key={step.step}
                step={step}
                index={index}
                isLast={index === howItWorksSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Pret a commencer ? Telecharge l'app gratuitement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-navy text-white rounded-xl hover:bg-navy/90 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-orange text-white rounded-xl hover:bg-orange/90 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Google Play
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
