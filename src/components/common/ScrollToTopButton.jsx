// ============================================
// SCROLL TO TOP BUTTON
// Bouton flottant pour remonter en haut de page
// ============================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton({
  threshold = 400, // Hauteur de scroll avant apparition
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(false);

  // Detecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  // Scroll vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-50
            w-12 h-12
            bg-orange hover:bg-orange/90
            text-white
            rounded-full
            shadow-lg shadow-orange/30
            hover:shadow-xl hover:shadow-orange/40
            flex items-center justify-center
            transition-shadow duration-300
            cursor-pointer
            ${className}
          `}
          aria-label="Retour en haut de page"
        >
          <ArrowUp size={22} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
