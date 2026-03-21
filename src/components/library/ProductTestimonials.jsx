// ============================================
// PRODUCT TESTIMONIALS
// Temoignages sur les produits
// ============================================

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';

const testimonialsConfig = [
  { id: 1, rating: 5 },
  { id: 2, rating: 5 },
  { id: 3, rating: 5 },
];

function TestimonialCard({ index, rating, t }) {
  const name = t(`library.testimonials.items.${index}.name`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100"
    >
      {/* Quote icon */}
      <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center mb-4">
        <Quote size={20} className="text-orange" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating
                ? 'text-amber-400 fill-amber-400'
                : 'text-gray-300'
            }
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        "{t(`library.testimonials.items.${index}.content`)}"
      </p>

      {/* Product */}
      <div className="text-xs text-orange font-medium mb-4 px-3 py-1.5 bg-orange/10 rounded-full inline-block">
        {t(`library.testimonials.items.${index}.product`)}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-navy">{name}</div>
          <div className="text-sm text-gray-500">
            {t(`library.testimonials.items.${index}.role`)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductTestimonials() {
  const { t } = useTranslation('application');

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          badge={t('library.testimonials.badge')}
          title={t('library.testimonials.title')}
          subtitle={t('library.testimonials.subtitle')}
          centered
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsConfig.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              index={index}
              rating={testimonial.rating}
              t={t}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
