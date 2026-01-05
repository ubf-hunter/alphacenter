import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Calendar,
  Target,
  Trophy,
  Users,
  BookOpen,
} from 'lucide-react';
import Button from '@components/common/Button';

export default function PreparatoireHero({ program }) {
  const benefits = [
    {
      icon: Calendar,
      text: 'Horaires flexibles (weekends + vacances)',
    },
    {
      icon: Clock,
      text: 'Compatible avec la Terminale',
    },
    {
      icon: Target,
      text: 'Orientation personnalisée (Ingénieur ou Santé)',
    },
    {
      icon: Users,
      text: `Prix accessible : ${program.priceLabel}`,
    },
  ];

  const decorativeIcons = [
    { Icon: Calendar, color: 'from-orange to-orange-600', delay: 0 },
    { Icon: Clock, color: 'from-apricot to-orange-400', delay: 0.1 },
    { Icon: Target, color: 'from-orange-500 to-orange-700', delay: 0.2 },
    { Icon: Trophy, color: 'from-orange-400 to-orange-600', delay: 0.3 },
  ];

  return (
    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
      {/* Left Column - Content */}
      <div className="lg:col-span-3 space-y-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${program.badgeColor}`}
          >
            {program.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight"
        >
          Pas encore au Bac?{' '}
          <span className="text-orange font-cursive italic">
            Commence dès maintenant!
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          Prépare ton avenir pendant ta Terminale. Renforce tes bases en maths
          et sciences, maîtrise la méthodologie des concours et gagne une
          longueur d'avance. Compatible avec ton emploi du temps scolaire.
        </motion.p>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center">
                  <CheckCircle size={14} className="text-orange" />
                </div>
                <span className="text-base text-gray-700">{benefit.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 pt-2"
        >
          <Button
            variant="primary"
            size="lg"
            to="/inscription?programme=preparatoire"
          >
            Je commence maintenant
            <ArrowRight size={20} />
          </Button>
          <Button variant="ghost" size="lg" to="#programmes">
            En savoir plus
          </Button>
        </motion.div>

        {/* Testimonial */}
        {program.testimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-4 border-t border-gray-200"
          >
            <p className="text-sm italic text-gray-600 mb-2">
              "{program.testimonial.quote}"
            </p>
            <p className="text-xs font-medium text-gray-500">
              — {program.testimonial.author}, {program.testimonial.year}
            </p>
          </motion.div>
        )}
      </div>

      {/* Right Column - Decorative Visual */}
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glass Card Container */}
          <div className="relative p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/80 shadow-xl">
            {/* Icons Grid */}
            <div className="grid grid-cols-2 gap-6">
              {decorativeIcons.map(({ Icon, color, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + delay }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-2 shadow-lg`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Central connecting element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-orange/20 to-apricot/20 blur-2xl" />
          </div>

          {/* Decorative floating elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-orange/10 to-apricot/10 blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-apricot/10 to-orange/10 blur-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
