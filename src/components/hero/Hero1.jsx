// ============================================
// HERO 1 : Image de fond full + Overlay gradient
// Background et texte rotatifs synchronises
// ============================================

import RotatingText from '@components/common/RotatingText';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInscriptionModal } from '../../hooks/useInscriptionModal';

// ===== IMPORTS DES IMAGES DE FOND =====
// Ajouter vos images ici (une par categorie)
import imgEnseignants from '../../assets/images/misc/ges1.jpg';
import imgInfirmieres from '../../assets/images/misc/med1.jpg';
import imgMedecine from '../../assets/images/misc/med2.jpg';
import imgIngenieurs from '../../assets/images/misc/prep1.jpg';

// Configuration des slides (texte + image synchronises)
const heroSlides = [
  { text: "d'ingenieurs", image: imgIngenieurs },
  { text: 'de medecine', image: imgMedecine },
  { text: "d'infirmieres", image: imgInfirmieres },
  { text: 'de comptables', image: imgEnseignants },
];

// Duree entre chaque slide (ms)
const SLIDE_DURATION = 3000;

// Composant de compteur anime
function AnimatedCounter({ end, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endValue = parseInt(end);

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openModal } = useInscriptionModal();

  // Cycle automatique des slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: 700, suffix: '+', label: 'Etudiants admis' },
    { number: 85, suffix: '%', label: 'Taux de reussite' },
    { number: 15, suffix: '+', label: "Annees d'experience" },
    { number: 6, suffix: '', label: 'Programmes' },
  ];

  // Extraire les textes pour RotatingText
  const rotatingWords = heroSlides.map((slide) => slide.text);

  return (
    <div className="relative min-h-screen flex flex-col pt-24">
      {/* Background Images avec transition */}
      <div className="absolute inset-0 z-0 mask-alpha mask-b-from-off-white mask-b-from-0% mask-b-to-navy/0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={heroSlides[currentIndex].image}
            alt="Etudiants"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-off-white/80 via-off-white/10 to-off-white/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <div className="mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/50 inline-flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center">
            <Trophy size={14} className="text-orange" />
          </span>
          <span className="text-sm font-medium text-gray-700">
            +700 admis depuis 2009
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-navy mb-6 max-w-4xl leading-tight">
          <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span className="whitespace-nowrap">Integre l'ecole</span>
            <RotatingText
              texts={rotatingWords}
              controlledIndex={currentIndex}
              className="italic text-orange font-cursive font-black"
              containerClassName="min-w-[220px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[380px]"
            />
          </span>
          <br />
          <span>de tes reves.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          Preparation intensive aux concours des grandes ecoles : Ingenierie,
          Medecine, Sciences Infirmieres au Cameroun.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            onClick={() => openModal()}
            className="px-8 py-4 text-lg font-semibold text-white bg-orange rounded-full hover:bg-orange-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
          >
            Je m'inscris →
          </button>
          <Link
            to="/services"
            className="px-8 py-4 text-lg font-semibold text-navy bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-white hover:border-gray-300 transition-all"
          >
            Découvrir nos programmes
          </Link>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-0 px-6 md:px-8 py-6 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`px-4 sm:px-6 md:px-10 py-2 text-center ${
                index !== stats.length - 1 ? 'md:border-r border-gray-200' : ''
              }`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2.5} />
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
