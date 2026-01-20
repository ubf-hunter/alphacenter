// ============================================
// CONTACT HERO - Hero section page Contact
// ============================================

import Container from '@components/common/Container';
import { motion } from 'framer-motion';
import { ChevronRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactHero() {
  return (
    <section className="relative bg-linear-to-br from-navy via-navy to-blue-900 py-16 md:py-20 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Orbes decoratives */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-apricot/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center items-center gap-2 text-white/60 text-sm mb-8"
        >
          <Link
            to="/"
            className="hover:text-white transition-colors duration-200"
          >
            Accueil
          </Link>
          <ChevronRight size={16} />
          <span className="text-white font-medium">Contact</span>
        </motion.nav>

        {/* Icone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <Mail size={32} className="text-white md:w-10 md:h-10" />
          </div>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-4"
        >
          <span className="text-orange font-cursive font-black italic">
            Contactez
          </span>
          -nous
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed"
        >
          Une question sur nos programmes ? Besoin d'informations ?
          <br className="hidden sm:block" />
          Notre equipe est la pour t'accompagner vers la reussite.
        </motion.p>

        {/* Stats rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10"
        >
          {[
            { value: '<24h', label: 'Temps de reponse' },
            { value: '7j/7', label: 'WhatsApp disponible' },
            { value: '100%', label: 'Gratuit & sans engagement' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-orange">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
