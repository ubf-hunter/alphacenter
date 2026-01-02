// ============================================
// ORIENTATION HUB
// Page principale du hub d'orientation
// ============================================

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, BookOpen, Building2, Lightbulb, Target } from 'lucide-react';
import Container from '@components/common/Container';
import Button from '@components/common/Button';
import SEO from '@components/common/SEO';
import { OrientationHero, DomainCard } from '@components/orientation';
import { domains } from '@/data/domains';
import { allCareers } from '@/data/careers';
import { allSchools, cameroonSchools } from '@/data/schools';

// Stats globales
const globalStats = [
  { value: domains.length, label: 'Domaines', icon: Target },
  { value: allCareers.length, label: 'Metiers', icon: Lightbulb },
  { value: cameroonSchools.length, label: 'Ecoles au Cameroun', icon: Building2 },
  { value: allSchools.length, label: 'Ecoles au total', icon: BookOpen },
];

// Sections du hub
const hubSections = [
  {
    id: 'metiers',
    title: 'Explorer les metiers',
    description: 'Decouvre les differents metiers accessibles apres tes etudes : missions, competences, salaires, perspectives.',
    icon: Lightbulb,
    color: 'orange',
    gradient: 'from-orange to-amber-500',
    link: '/orientation/metiers',
    cta: 'Voir les metiers',
  },
  {
    id: 'ecoles',
    title: 'Trouver ton ecole',
    description: 'Explore les ecoles et universites au Cameroun et a l\'etranger. Conditions d\'admission, programmes, frais.',
    icon: Building2,
    color: 'navy',
    gradient: 'from-navy to-blue-700',
    link: '/orientation/ecoles',
    cta: 'Voir les ecoles',
  },
];

export default function OrientationHub() {
  return (
    <>
      <SEO
        title="Orientation - Guide des metiers et ecoles"
        description="Explore les metiers d'avenir et trouve l'ecole qui te correspond. Guide complet d'orientation pour les etudes superieures au Cameroun."
      />

      {/* Hero */}
      <OrientationHero
        badge="Orientation"
        title="Trouve ta voie, construis ton avenir"
        subtitle="Explore les metiers, decouvre les ecoles et fais les bons choix pour ta carriere. Notre guide complet t'accompagne dans ton orientation."
        icon={Compass}
      >
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {globalStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <Icon size={20} className="text-orange" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </OrientationHero>

      {/* Domaines */}
      <section className="py-20 bg-gray-50/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-orange/10 text-orange text-sm font-semibold rounded-full mb-4">
              Par domaine
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              Choisis ton <span className="text-orange">domaine</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ingenierie, medecine ou sciences infirmieres - chaque domaine offre des opportunites uniques.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {domains.map((domain, index) => (
              <DomainCard key={domain.id} domain={domain} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Sections Metiers / Ecoles */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hubSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={section.link}>
                    <div className={`relative h-full p-8 lg:p-10 bg-linear-to-br ${section.gradient} rounded-3xl overflow-hidden`}>
                      {/* Decorations */}
                      <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
                      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <Icon size={32} className="text-white" />
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                          {section.title}
                        </h3>
                        <p className="text-white/80 leading-relaxed mb-8">
                          {section.description}
                        </p>

                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white font-semibold transition-all duration-300 group-hover:gap-4">
                          <span>{section.cta}</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Alpha Center */}
      <section className="py-20 bg-gray-50/50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-navy rounded-3xl overflow-hidden p-8 lg:p-12"
          >
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Pret a te preparer pour <span className="text-orange">reussir</span> ?
                </h2>
                <p className="text-white/70 max-w-xl">
                  Alpha Center t'accompagne dans la preparation aux concours des grandes ecoles.
                  Rejoins des centaines d'etudiants qui ont atteint leurs objectifs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" to="/programmes" size="lg">
                  Nos programmes
                  <ArrowRight size={18} />
                </Button>
                <Button variant="secondary" to="/application" size="lg" className="!text-white !border-white/30 hover:!bg-white/10">
                  Candidater
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
