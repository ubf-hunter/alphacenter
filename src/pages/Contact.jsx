// ============================================
// PAGE CONTACT - Page de contact Alpha Center
// ============================================

import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import {
  ContactForm,
  ContactHero,
  ContactInfo,
  ContactMap,
} from '@components/contact';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { contactSEO, getWhatsAppUrl } from '../data/contact';
import { useInscriptionModal } from '../hooks/useInscriptionModal';

export default function Contact() {
  const { openModal } = useInscriptionModal();

  return (
    <>
      {/* SEO */}
      <SEO
        title={contactSEO.title}
        description={contactSEO.description}
        keywords={contactSEO.keywords}
      />

      {/* Hero Section */}
      <ContactHero />

      {/* Section principale - Infos & Formulaire */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Colonne gauche - Informations */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                  Nous trouver
                </h2>
                <p className="text-gray-500">
                  Plusieurs moyens de nous contacter selon tes preferences
                </p>
              </motion.div>

              <ContactInfo />
            </div>

            {/* Colonne droite - Formulaire */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Section Google Maps */}
      <ContactMap />

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-navy via-navy to-blue-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-apricot/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pret a reussir ton concours ?
            </h2>
            <p className="text-white/70 mb-8">
              Rejoins les centaines d'etudiants qui ont deja integre l'ecole de
              leurs reves grace a Alpha Center.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(getWhatsAppUrl(), '_blank')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl transition-all"
              >
                <MessageCircle size={22} />
                Discuter avec un conseiller
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                Voir les programmes
                <ArrowRight size={20} />
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { value: '85%', label: 'Taux de reussite' },
                { value: '700+', label: 'Etudiants admis' },
                { value: '7 ans', label: "D'experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
