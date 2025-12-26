import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, GraduationCap } from 'lucide-react';
import Container from '@components/common/Container';
import Card from '@components/common/Card';
import SectionTitle from '@components/common/SectionTitle';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-navy rounded-full opacity-5 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="Ils ont réussi"
          title="Ce que disent nos anciens étudiants"
          subtitle="Découvre les témoignages de ceux qui ont intégré leur école de rêve grâce à Alpha Center."
        />

        {/* Slider */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative h-[400px] md:h-[320px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0"
                >
                  <Card variant="glass" className="p-8 md:p-12 h-full">
                    <div className="flex flex-col md:flex-row gap-8 h-full">
                      {/* Avatar */}
                      <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange to-orange-400 flex items-center justify-center text-white text-2xl font-bold mb-4">
                          {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-center md:text-left">
                          <h4 className="font-bold text-navy">
                            {currentTestimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {currentTestimonial.role}
                          </p>
                          <p className="text-sm text-gray-500">
                            {currentTestimonial.company}
                          </p>
                          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-xs font-medium text-navy">
                            <GraduationCap size={14} /> {currentTestimonial.ecole} {currentTestimonial.year}
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="flex-grow flex flex-col justify-center">
                        <Quote
                          size={32}
                          className="text-orange opacity-30 mb-4"
                        />
                        <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                          "{currentTestimonial.quote}"
                        </blockquote>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-orange'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
