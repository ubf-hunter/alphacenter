// ============================================
// ABOUT CTA - Section CTA reutilisable
// ============================================

import Button from '@components/common/Button';
import Container from '@components/common/Container';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AboutCTA({
  title = 'Rejoignez la famille Alpha Center',
  subtitle = 'La prochaine success story, c\'est vous',
  primaryButton = { label: "S'inscrire maintenant", href: '/inscription' },
  secondaryButton = { label: 'Parler a un conseiller', href: '/contact' },
  variant = 'gradient', // 'gradient' | 'navy' | 'light'
}) {
  const variants = {
    gradient: {
      bg: 'bg-linear-to-br from-orange via-orange-600 to-orange-700',
      titleColor: 'text-white',
      subtitleColor: 'text-white/80',
      decoration: 'bg-white/10',
    },
    navy: {
      bg: 'bg-navy',
      titleColor: 'text-white',
      subtitleColor: 'text-white/70',
      decoration: 'bg-orange/20',
    },
    light: {
      bg: 'bg-off-white',
      titleColor: 'text-navy',
      subtitleColor: 'text-gray-600',
      decoration: 'bg-orange/10',
    },
  };

  const style = variants[variant];

  return (
    <section className={`py-24 ${style.bg} relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 ${style.decoration} rounded-full blur-[100px]`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 ${style.decoration} rounded-full blur-[100px]`}
        />
      </div>

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            Pret a transformer votre avenir ?
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold ${style.titleColor} mb-4`}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-lg ${style.subtitleColor} mb-10`}
          >
            {subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              variant={variant === 'light' ? 'primary' : 'white'}
              size="lg"
              to={primaryButton.href}
            >
              {primaryButton.label}
              <ArrowRight size={18} />
            </Button>

            {secondaryButton && (
              <Button
                variant={variant === 'light' ? 'outline' : 'ghost'}
                size="lg"
                to={secondaryButton.href}
                className={variant !== 'light' ? 'text-white border-white/30 hover:bg-white/10' : ''}
              >
                {secondaryButton.label}
              </Button>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
