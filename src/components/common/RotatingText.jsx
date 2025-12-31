// ============================================
// ROTATING TEXT - Animation de texte rotatif
// Fait defiler des mots avec animation slide
// Supporte mode controle (index externe) ou autonome
// ============================================

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function RotatingText({
  texts = [],
  duration = 2500,
  transition = { duration: 0.4, ease: 'easeOut' },
  y = 40,
  className = '',
  containerClassName = '',
  // Props pour mode controle externe
  controlledIndex = null,
  onIndexChange = null,
}) {
  const [internalIndex, setInternalIndex] = useState(0);

  // Utiliser l'index externe si fourni, sinon l'index interne
  const currentIndex = controlledIndex !== null ? controlledIndex : internalIndex;

  useEffect(() => {
    // Si mode controle externe, ne pas gerer l'interval ici
    if (controlledIndex !== null) return;
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      setInternalIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % texts.length;
        if (onIndexChange) onIndexChange(newIndex);
        return newIndex;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [texts, duration, controlledIndex, onIndexChange]);

  const currentText = texts[currentIndex] || '';

  return (
    <span className={`inline-block overflow-hidden ${containerClassName}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: -y }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: y }}
          transition={transition}
          className={`inline-block ${className}`}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default RotatingText;
