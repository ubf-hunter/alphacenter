// ============================================
// INSCRIPTION MODAL - Modal de selection de programme WhatsApp
// ============================================

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Beaker,
  Calculator,
  HeartPulse,
  HelpCircle,
  MessageCircle,
  X,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useInscriptionModal } from '../../hooks/useInscriptionModal';

// WhatsApp configuration
const WHATSAPP_NUMBER = '+237670102293';

// Programme options
const programmes = [
  {
    id: 'ingenieur',
    title: 'Concours Ingenieur',
    description: 'Polytechnique, ENSPY, FGI...',
    icon: Calculator,
    color: 'navy',
    message:
      "Bonjour Alpha Center ! Je suis interesse(e) par la preparation au concours d'ingenieur. Je souhaite avoir plus d'informations sur le programme, les tarifs et les dates d'inscription. Merci !",
  },
  {
    id: 'medecine',
    title: 'Concours Medecine',
    description: 'FMSB, Facultes de medecine...',
    icon: HeartPulse,
    color: 'orange',
    message:
      "Bonjour Alpha Center ! Je suis interesse(e) par la preparation au concours de medecine. Je souhaite avoir plus d'informations sur le programme, les tarifs et les dates d'inscription. Merci !",
  },
  {
    id: 'infirmier',
    title: 'Concours Infirmier',
    description: 'CESSI, Ecoles de sante...',
    icon: Beaker,
    color: 'success',
    message:
      "Bonjour Alpha Center ! Je suis interesse(e) par la preparation au concours infirmier/sciences de la sante. Je souhaite avoir plus d'informations sur le programme, les tarifs et les dates d'inscription. Merci !",
  },
  {
    id: 'autre',
    title: 'Autre / Question',
    description: "J'ai une question specifique",
    icon: HelpCircle,
    color: 'gray',
    message:
      "Bonjour Alpha Center ! J'aimerais avoir des informations sur vos programmes de preparation aux concours. Pouvez-vous m'aider ?",
  },
];

// Generate WhatsApp URL
function getWhatsAppUrl(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
}

// Color variants
const colorVariants = {
  navy: {
    bg: 'bg-navy/5',
    border: 'border-navy/20',
    hoverBorder: 'hover:border-navy',
    icon: 'text-navy',
    iconBg: 'bg-navy/10',
  },
  orange: {
    bg: 'bg-orange/5',
    border: 'border-orange/20',
    hoverBorder: 'hover:border-orange',
    icon: 'text-orange',
    iconBg: 'bg-orange/10',
  },
  success: {
    bg: 'bg-success/5',
    border: 'border-success/20',
    hoverBorder: 'hover:border-success',
    icon: 'text-success',
    iconBg: 'bg-success/10',
  },
  gray: {
    bg: 'bg-gray-100',
    border: 'border-gray-200',
    hoverBorder: 'hover:border-gray-400',
    icon: 'text-gray-600',
    iconBg: 'bg-gray-200',
  },
};

// Programme card component
function ProgrammeCard({ programme, index }) {
  const colors = colorVariants[programme.color];
  const Icon = programme.icon;

  const handleClick = () => {
    const url = getWhatsAppUrl(programme.message);
    window.open(url, '_blank');
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 + index * 0.08 }}
      onClick={handleClick}
      className={`
        group w-full p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl
        ${colors.bg} ${colors.border} ${colors.hoverBorder}
        border-2 text-left
        transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2
      `}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Icon */}
        <div
          className={`
          w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${colors.iconBg}
          flex items-center justify-center shrink-0
          group-hover:scale-110 transition-transform duration-300
        `}
        >
          <Icon size={20} className={`${colors.icon} sm:hidden`} />
          <Icon size={24} className={`${colors.icon} hidden sm:block`} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-navy mb-0.5 sm:mb-1">{programme.title}</h3>
          <p className="text-xs sm:text-sm text-gray-500 truncate sm:whitespace-normal">{programme.description}</p>
        </div>

        {/* Arrow - hidden on mobile */}
        <div
          className={`
          hidden sm:flex
          w-10 h-10 rounded-full ${colors.iconBg}
          items-center justify-center shrink-0
          opacity-0 group-hover:opacity-100
          translate-x-2 group-hover:translate-x-0
          transition-all duration-300
        `}
        >
          <ArrowRight size={18} className={colors.icon} />
        </div>
      </div>
    </motion.button>
  );
}

export default function InscriptionModal() {
  const { isOpen, closeModal } = useInscriptionModal();
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      // Focus trap - focus first focusable element
      setTimeout(() => firstFocusableRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeModal]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="inscription-modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-orange to-apricot" />

            {/* Close button */}
            <button
              ref={firstFocusableRef}
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange"
              aria-label="Fermer"
            >
              <X size={20} className="text-gray-600" />
            </button>

            {/* Content */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-center mb-4 sm:mb-6 md:mb-8"
              >
                {/* WhatsApp icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-success/10 mb-3 sm:mb-4">
                  <MessageCircle size={32} className="text-success" />
                </div>

                <h2
                  id="inscription-modal-title"
                  className="text-xl sm:text-2xl font-bold text-navy mb-2"
                >
                  Contactez-nous sur WhatsApp
                </h2>
                <p className="text-gray-500">
                  Selectionnez votre programme pour demarrer la conversation
                </p>
              </motion.div>

              {/* Programme cards */}
              <div className="space-y-2 sm:space-y-3">
                {programmes.map((programme, index) => (
                  <ProgrammeCard
                    key={programme.id}
                    programme={programme}
                    index={index}
                  />
                ))}
              </div>

              {/* Footer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-center text-xs text-gray-400 mt-4 sm:mt-6"
              >
                Reponse garantie sous 24h ouvrables
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
