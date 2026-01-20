// ============================================
// LIBRARY HERO
// Hero section pour la bibliotheque
// ============================================

import Container from '@components/common/Container';
import { motion } from 'framer-motion';
import { BookOpen, Shield, Star } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: '6', label: 'Documents' },
  { icon: Star, value: '4.9', label: 'Note moyenne' },
  { icon: Shield, value: '100%', label: 'Qualite garantie' },
];

export default function LibraryHero() {
  return (
    <section className="relative pt-32 pb-20 bg-linear-to-br from-navy via-navy to-blue-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full" />
          <div className="absolute top-40 right-32 w-3 h-3 bg-orange rounded-full" />
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange rounded-full" />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <BookOpen size={16} className="text-orange" />
              Bibliotheque Alpha
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Tous les{' '}
            <span className="text-orange font-cursive italic font-black">
              outils
            </span>{' '}
            pour
            <br />
            reussir tes concours
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Fascicules, annales corrigees, bords - des ressources de qualite
            creees par nos enseignants pour maximiser tes chances de reussite.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6"
                >
                  <Icon size={24} className="text-orange mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
