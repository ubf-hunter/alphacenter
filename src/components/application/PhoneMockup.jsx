// ============================================
// PHONE MOCKUP - Composant reutilisable
// Affiche un mockup de telephone avec ecran
// ============================================

import { motion } from 'framer-motion';

function PhoneMockup({
  children,
  className = '',
  variant = 'default', // 'default' | 'tilted' | 'flat'
  size = 'md', // 'sm' | 'md' | 'lg'
  showReflection = true,
  animate = true,
}) {
  // Configuration des tailles
  const sizes = {
    sm: 'w-48 h-96',
    md: 'w-64 h-[520px]',
    lg: 'w-80 h-[640px]',
  };

  // Configuration des rotations selon variant
  const variants = {
    default: 'rotate-0',
    tilted: '-rotate-6',
    flat: 'rotate-0 perspective-1000 rotateX-10',
  };

  const phoneClasses = `
    relative ${sizes[size]} ${variants[variant]}
    bg-gray-900 rounded-[3rem] p-2
    shadow-2xl shadow-gray-900/30
    ${className}
  `;

  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' },
        viewport: { once: true },
      }
    : {};

  return (
    <Wrapper {...wrapperProps} className={phoneClasses}>
      {/* Boutons lateraux */}
      <div className="absolute -left-1 top-24 w-1 h-8 bg-gray-800 rounded-l-sm" />
      <div className="absolute -left-1 top-36 w-1 h-12 bg-gray-800 rounded-l-sm" />
      <div className="absolute -left-1 top-52 w-1 h-12 bg-gray-800 rounded-l-sm" />
      <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-800 rounded-r-sm" />

      {/* Ecran interieur */}
      <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
        {/* Notch / Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-full z-20" />

        {/* Contenu de l'ecran */}
        <div className="w-full h-full">
          {children}
        </div>

        {/* Reflet */}
        {showReflection && (
          <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
        )}
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
    </Wrapper>
  );
}

// ===== VARIANTE AVEC IMAGE =====
function PhoneMockupWithImage({
  src,
  alt = 'App screenshot',
  ...props
}) {
  return (
    <PhoneMockup {...props}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </PhoneMockup>
  );
}

// ===== VARIANTE DOUBLE (2 phones) =====
function DualPhoneMockup({
  leftSrc,
  rightSrc,
  leftAlt = 'Screenshot 1',
  rightAlt = 'Screenshot 2',
  className = '',
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Phone gauche */}
      <motion.div
        initial={{ opacity: 0, x: -40, rotate: -12 }}
        whileInView={{ opacity: 1, x: 0, rotate: -12 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <PhoneMockupWithImage
          src={leftSrc}
          alt={leftAlt}
          size="sm"
          animate={false}
          className="-rotate-12 shadow-xl"
        />
      </motion.div>

      {/* Phone droite */}
      <motion.div
        initial={{ opacity: 0, x: 40, rotate: 6 }}
        whileInView={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-20 -ml-16"
      >
        <PhoneMockupWithImage
          src={rightSrc}
          alt={rightAlt}
          size="md"
          animate={false}
          className="rotate-6 shadow-2xl"
        />
      </motion.div>
    </div>
  );
}

export default PhoneMockup;
export { PhoneMockup, PhoneMockupWithImage, DualPhoneMockup };
