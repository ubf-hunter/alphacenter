// ============================================
// PROGRAMS SECTION - VERSION OPTIMISÉE
// Cards avec fond illustratif style premium
// ============================================

import Button from '@components/common/Button';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Building2, Landmark } from 'lucide-react';

const programs = [
  {
    icon: Building2,
    title: 'Prépa ENSP',
    school: 'Polytechnique Yaoundé',
    description:
      "Préparation intensive pour intégrer la plus prestigieuse école d'ingénieurs du Cameroun.",
    features: [
      'Cours intensifs',
      'Concours blancs hebdo',
      'Suivi personnalisé',
    ],
    cta: 'Découvrir le programme',
    href: '/services#ensp',
    // Gradient background pour la zone illustration
    gradient: 'from-orange-400 via-orange-500 to-orange-600',
    // Couleur accent pour les éléments
    accent: 'orange',
  },
  {
    icon: Landmark,
    title: 'Prépa ENSTP',
    school: 'Travaux Publics',
    description:
      "Formation complète pour réussir le concours d'entrée à l'ENSTP. Génie civil et infrastructures.",
    features: [
      'Méthodologie adaptée',
      'Exercices ciblés',
      'Coaching individuel',
    ],
    cta: 'Découvrir le programme',
    href: '/services#enstp',
    gradient: 'from-navy via-navy-700 to-blue-900',
    accent: 'navy',
  },
  {
    icon: BookOpen,
    title: 'Prépa ENS',
    school: 'École Normale Sup.',
    description:
      "Préparation rigoureuse aux concours de l'ENS pour devenir enseignant ou chercheur.",
    features: [
      'Renforcement académique',
      'Culture générale',
      'Expression écrite',
    ],
    cta: 'Découvrir le programme',
    href: '/services#ens',
    gradient: 'from-apricot via-orange-300 to-apricot-dark',
    accent: 'apricot',
  },
];

const accentStyles = {
  orange: {
    dot: 'bg-orange',
    button: 'text-orange hover:bg-orange-50',
    iconBg: 'bg-white/20',
    linkUnderline: 'bg-orange',
  },
  navy: {
    dot: 'bg-navy',
    button: 'text-navy hover:bg-navy-50',
    iconBg: 'bg-white/20',
    linkUnderline: 'bg-navy',
  },
  apricot: {
    dot: 'bg-orange',
    button: 'text-orange hover:bg-orange-50',
    iconBg: 'bg-white/30',
    linkUnderline: 'bg-orange',
  },
};

export default function Programs() {
  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50/50">
      <Container>
        <SectionTitle
          badge="Nos formations"
          title="Des *programmes* adaptés à chaque concours"
          subtitle="Choisis la préparation qui correspond à tes objectifs et maximise tes chances de réussite."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-500 hover:-translate-y-2">
                {/* ===== ZONE ILLUSTRATION (Header de la card) ===== */}
                <div
                  className={`relative h-48 bg-linear-to-br ${program.gradient} overflow-hidden`}
                >
                  {/* Formes décoratives abstraites */}
                  <div className="absolute inset-0">
                    {/* Cercle principal */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                    <div className="absolute right-12 top-12 w-24 h-24 bg-white/10 rounded-full" />

                    {/* Forme organique */}
                    <div className="absolute -left-4 bottom-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-20 h-20 bg-white/10 rounded-2xl rotate-12" />

                    {/* Petits éléments */}
                    <div className="absolute top-6 left-6 w-3 h-3 bg-white/30 rounded-full" />
                    <div className="absolute top-12 left-16 w-2 h-2 bg-white/20 rounded-full" />
                    <div className="absolute bottom-12 right-8 w-4 h-4 bg-white/20 rounded-full" />
                  </div>

                  {/* Icône centrale */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`p-5 ${
                        accentStyles[program.accent].iconBg
                      } backdrop-blur-sm rounded-2xl transform group-hover:scale-110 transition-transform duration-500`}
                    >
                      <program.icon
                        size={48}
                        className="text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Badge école en haut */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {program.school}
                    </span>
                  </div>
                </div>

                {/* ===== CONTENU (Body de la card) ===== */}
                <div className="p-6 lg:p-8">
                  {/* Titre */}
                  <h3 className="text-xl lg:text-2xl font-bold text-navy mb-3">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm lg:text-base mb-6 line-clamp-2">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            accentStyles[program.accent].dot
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <a
                    href={program.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${
                      accentStyles[program.accent].button
                    } transition-colors group/link`}
                  >
                    {program.cta}
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button variant="primary" to="/services" size="lg">
            Voir tous les programmes
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
