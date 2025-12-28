import { testimonials } from '@/data/testimonials';
import Card from '@components/common/Card';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap, Quote } from 'lucide-react';
import { memo, useCallback, useEffect, useState } from 'react';

// Mémoïser les variants pour éviter leur recréation
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const transitionConfig = {
  x: { type: 'spring', stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
};

// Composant pour les boutons de navigation mémoïsé
const NavigationButton = memo(({ direction, onClick, label }) => (
  <button
    onClick={onClick}
    className="w-12 h-12 rounded-full glass flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
    aria-label={label}
  >
    {direction === 'prev' ? (
      <ChevronLeft size={24} />
    ) : (
      <ChevronRight size={24} />
    )}
  </button>
));

NavigationButton.displayName = 'NavigationButton';

// Composant pour les dots de pagination mémoïsé
const PaginationDot = memo(({ index, currentIndex, onClick }) => (
  <button
    onClick={onClick}
    className={`w-2 h-2 rounded-full transition-all ${
      index === currentIndex ? 'w-8 bg-orange' : 'bg-gray-300 hover:bg-gray-400'
    }`}
    aria-label={`Aller au témoignage ${index + 1}`}
  />
));

PaginationDot.displayName = 'PaginationDot';

// Composant pour la card de témoignage mémoïsé
const TestimonialCard = memo(({ testimonial, direction }) => {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <motion.div
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transitionConfig}
      className="absolute inset-0"
    >
      <Card variant="glass" className="p-8 md:p-12 h-full">
        <div className="flex flex-col md:flex-row gap-8 h-full">
          {/* Avatar */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-start">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange to-orange-400 flex items-center justify-center text-white text-2xl font-bold mb-4">
              {initials}
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-bold text-navy">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-xs font-medium text-navy">
                <GraduationCap size={14} /> {testimonial.ecole}{' '}
                {testimonial.year}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="flex-grow flex flex-col justify-center">
            <Quote size={32} className="text-orange opacity-30 mb-4" />
            <blockquote className="text-lg text-gray-700 leading-relaxed italic">
              "{testimonial.quote}"
            </blockquote>
          </div>
        </div>
      </Card>
    </motion.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-navy rounded-full opacity-5 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="Ils ont réussi"
          title="Ce que disent nos *anciens étudiants*"
          subtitle="Découvre les témoignages de ceux qui ont intégré leur école de rêve grâce à Alpha Center."
        />

        {/* Slider */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative h-[400px] md:h-[320px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <TestimonialCard
                  key={currentIndex}
                  testimonial={currentTestimonial}
                  direction={direction}
                />
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <NavigationButton
                direction="prev"
                onClick={prevSlide}
                label="Témoignage précédent"
              />

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <PaginationDot
                    key={index}
                    index={index}
                    currentIndex={currentIndex}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              <NavigationButton
                direction="next"
                onClick={nextSlide}
                label="Témoignage suivant"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
