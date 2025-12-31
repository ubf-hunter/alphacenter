// ============================================
// APP TESTIMONIALS - Temoignages utilisateurs
// Carousel de temoignages avec avatars
// ============================================

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { appTestimonials } from '@/data/application';

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Icone quote */}
      <div className="absolute top-6 right-6 text-orange/10">
        <Quote size={48} />
      </div>

      {/* Etoiles */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="text-yellow-400 fill-yellow-400"
          />
        ))}
      </div>

      {/* Citation */}
      <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
        "{testimonial.quote}"
      </p>

      {/* Auteur */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-orange/20"
        />
        <div>
          <h4 className="font-semibold text-navy">{testimonial.name}</h4>
          <p className="text-sm text-orange">{testimonial.school}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AppTestimonials() {
  return (
    <section className="py-20 lg:py-28 bg-off-white">
      <Container>
        <SectionTitle
          badge="Temoignages"
          title="Ils ont *reussi* avec Alpha"
          subtitle="Decouvre ce que disent les utilisateurs de l'app Alpha."
        />

        {/* Grille de temoignages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {appTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Note App Store */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-navy font-semibold">4.8/5</span>
            <span className="text-gray-500">sur App Store</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
