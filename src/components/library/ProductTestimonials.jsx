// ============================================
// PRODUCT TESTIMONIALS
// Temoignages sur les produits
// ============================================

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Kevin M.',
    role: 'Admis ENSP 2024',
    content:
      "Les fascicules Alpha Center m'ont vraiment aide a structurer mes revisions. Les exercices corriges sont tres bien expliques.",
    rating: 5,
    product: 'Fascicule Mathematiques ENSP',
  },
  {
    id: 2,
    name: 'Diane T.',
    role: 'Admise Medecine 2024',
    content:
      "J'ai utilise les annales corrigees pendant 3 mois. La qualite des corrections m'a permis de comprendre mes erreurs.",
    rating: 5,
    product: 'Pack Annales Medecine',
  },
  {
    id: 3,
    name: 'Paul E.',
    role: 'Admis ENSTP 2024',
    content:
      "Le pack complet ingenierie est vraiment complet. J'ai pu reviser toutes les matieres avec des supports de qualite.",
    rating: 5,
    product: 'Pack Complet Ingenierie',
  },
];

function TestimonialCard({ testimonial, index }) {
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
              i < testimonial.rating
                ? 'text-amber-400 fill-amber-400'
                : 'text-gray-300'
            }
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.content}"</p>

      {/* Product */}
      <div className="text-xs text-orange font-medium mb-4 px-3 py-1.5 bg-orange/10 rounded-full inline-block">
        {testimonial.product}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-navy">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductTestimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          badge="Temoignages"
          title="Ils ont *reussi* avec nos documents"
          subtitle="Decouvrez les retours de nos etudiants qui ont utilise nos ressources"
          centered
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
