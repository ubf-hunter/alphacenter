import Button from '@components/common/Button';
import Container from '@components/common/Container';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  MessageCircle,
  Phone,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import { memo, useCallback } from 'react';
import { useInscriptionModal } from '../../hooks/useInscriptionModal';

// Animation variants extraits pour éviter les re-renders
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const floatVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Composant StatCard mémorisé
const StatCard = memo(({ icon: Icon, value, label, color = 'orange' }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.05, y: -5 }}
    className="group relative"
  >
    <div className="flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Icon background glow on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-${color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Icon */}
      <div
        className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-${color} to-${color}-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-${color}/25`}
      >
        <Icon size={20} className="sm:w-6 sm:h-6" />
      </div>

      {/* Value */}
      <div className={`text-2xl sm:text-3xl font-bold text-${color} mb-1`}>
        {value}
      </div>

      {/* Label */}
      <div className="text-xs sm:text-sm text-gray-500 text-center font-medium">
        {label}
      </div>
    </div>
  </motion.div>
));

StatCard.displayName = 'StatCard';

// Composant UrgencyBadge mémorisé
const UrgencyBadge = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-orange/10 to-red-500/10 border border-orange/20 mb-6"
  >
    <motion.span
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="w-2 h-2 rounded-full bg-orange"
    />
    <span className="text-sm font-semibold text-orange">
      Inscriptions ouvertes — Places limitées
    </span>
  </motion.div>
));

UrgencyBadge.displayName = 'UrgencyBadge';

// Composant ContactButton mémorisé
const ContactButton = memo(
  ({ href, icon: Icon, children, variant = 'default' }) => {
    const baseClasses =
      'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300';
    const variantClasses =
      variant === 'whatsapp'
        ? 'bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 hover:-translate-y-0.5'
        : 'bg-white/80 text-navy hover:bg-white hover:text-orange border border-gray-200 hover:border-orange/30';

    return (
      <motion.a
        href={href}
        target={variant === 'whatsapp' ? '_blank' : undefined}
        rel={variant === 'whatsapp' ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} ${variantClasses}`}
      >
        <Icon size={18} />
        <span>{children}</span>
      </motion.a>
    );
  },
);

ContactButton.displayName = 'ContactButton';

export default function CTAFinal() {
  const { openModal } = useInscriptionModal();

  const handleOpenModal = useCallback(() => {
    openModal();
  }, [openModal]);

  // Message WhatsApp pré-rempli
  const whatsappMessage = encodeURIComponent(
    "Bonjour Alpha Center ! 👋\n\nJe suis intéressé(e) par vos programmes de préparation aux concours. Pouvez-vous me donner plus d'informations ?\n\nMerci !",
  );
  const whatsappLink = `https://wa.me/237670102293?text=${whatsappMessage}`;

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-navy/[0.02] via-transparent to-orange/[0.03]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating decorative shapes */}
      <motion.div
        variants={floatVariants}
        animate="float"
        className="absolute top-32 right-[15%] w-16 h-16 rounded-2xl bg-linear-to-br from-orange/20 to-orange/5 backdrop-blur-sm border border-orange/10 hidden lg:block"
      />
      <motion.div
        variants={floatVariants}
        animate="float"
        style={{ animationDelay: '1s' }}
        className="absolute bottom-32 left-[10%] w-12 h-12 rounded-xl bg-linear-to-br from-navy/20 to-navy/5 backdrop-blur-sm border border-navy/10 hidden lg:block"
      />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative p-6 sm:p-10 lg:p-14 rounded-4xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl shadow-navy/5">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-orange/20 via-transparent to-navy/20 opacity-50 pointer-events-none" />
            <div className="absolute inset-px rounded-4xl bg-white/80 backdrop-blur-xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Urgency Badge */}
              <UrgencyBadge />

              {/* Icon */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center justify-center mb-6"
              >
                <motion.div
                  variants={pulseVariants}
                  animate="pulse"
                  className="relative"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-linear-to-br from-orange via-orange to-orange-600 flex items-center justify-center text-white shadow-2xl shadow-orange/30">
                    <Rocket size={40} className="sm:w-12 sm:h-12" />
                  </div>
                  {/* Sparkle decoration */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-white shadow-lg flex items-center justify-center"
                  >
                    <Sparkles size={16} className="text-orange" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight"
              >
                Prêt à réaliser ton{' '}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-orange to-orange-600">
                    rêve professionnel
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute bottom-1 left-0 right-0 h-3 bg-orange/15 -z-0 origin-left rounded"
                  />
                </span>{' '}
                ?
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                Rejoins les{' '}
                <span className="font-semibold text-navy">800+ étudiants</span>{' '}
                qui ont transformé leur avenir avec Alpha Center. La prochaine
                success story, c'est{' '}
                <span className="font-semibold text-orange">toi</span>.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-3 sm:gap-6 mb-10 max-w-2xl mx-auto"
              >
                <StatCard
                  icon={Clock}
                  value="Jan 2025"
                  label="Prochaine session"
                  color="orange"
                />
                <StatCard
                  icon={Users}
                  value="25"
                  label="Places restantes"
                  color="navy"
                />
                <StatCard
                  icon={TrendingUp}
                  value="85%"
                  label="Taux de réussite"
                  color="orange"
                />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              >
                {/* Primary CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleOpenModal}
                    className="group px-8 py-4 text-base sm:text-lg shadow-xl shadow-orange/25 hover:shadow-2xl hover:shadow-orange/30"
                  >
                    <span>Je m'inscris maintenant</span>
                    <ArrowRight
                      size={20}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </Button>
                </motion.div>

                {/* Secondary CTA - WhatsApp */}
                <ContactButton
                  href={whatsappLink}
                  icon={MessageCircle}
                  variant="whatsapp"
                >
                  Discuter sur WhatsApp
                </ContactButton>
              </motion.div>

              {/* Divider */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 max-w-md mx-auto mb-8"
              >
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                  ou contacte-nous
                </span>
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-3 sm:gap-4"
              >
                <ContactButton href="tel:+237670102293" icon={Phone}>
                  +237 670 102 293
                </ContactButton>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                variants={itemVariants}
                className="mt-10 pt-8 border-t border-gray-100"
              >
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Paiement sécurisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Accompagnement personnalisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Satisfaction garantie</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
