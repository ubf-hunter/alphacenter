// ============================================
// PROGRAMS SECTION - VERSION AVEC LOGOS ÉCOLES
// Remplace les icônes par les logos officiels
// ============================================

import Button from '@components/common/Button';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// ===== IMPORTS DES LOGOS =====
// Option 1: Import direct des fichiers
// import logoENSP from '@assets/logos/ensp-logo.png';
// import logoENSTP from '@assets/logos/enstp-logo.png';
// import logoENS from '@assets/logos/ens-logo.png';

// Option 2: Chemin public
// Les logos doivent être dans /public/images/logos/

const programs = [
  {
    logo: '/images/logos/ensp-logo.png', // Remplace par le vrai chemin
    logoAlt: 'Logo ENSP Yaoundé',
    title: 'Prépa ENSP',
    subtitle: 'Polytechnique Yaoundé',
    description:
      'Notre programme phare te prépare intensivement au concours le plus sélectif du Cameroun.',
    cta: 'Programme Polytechnique',
    href: '/services#ensp',
    gradient: 'from-[#FF6B35] via-[#FF8C42] to-[#FFB347]',
    accentColor: 'text-orange',
  },
  {
    logo: '/images/logos/enstp-logo.png',
    logoAlt: 'Logo ENSTP Yaoundé',
    title: 'Prépa ENSTP',
    subtitle: 'Travaux Publics',
    description:
      'Spécialise-toi dans le génie civil et les infrastructures avec des experts du BTP.',
    cta: 'Programme ENSTP',
    href: '/services#enstp',
    gradient: 'from-[#001A51] via-[#0D47A1] to-[#1565C0]',
    accentColor: 'text-navy',
  },
  {
    logo: '/images/logos/ens-logo.png',
    logoAlt: 'Logo ENS Yaoundé',
    title: 'Prépa ENS',
    subtitle: 'École Normale Sup.',
    description:
      'Deviens enseignant ou chercheur avec une préparation académique rigoureuse.',
    cta: 'Programme ENS',
    href: '/services#ens',
    gradient: 'from-[#FFDAB9] via-[#FFE4C4] to-[#FFECD2]',
    accentColor: 'text-orange',
    darkText: true, // Pour le gradient clair
  },
];

// Composant Logo avec fallback
function SchoolLogo({ src, alt, darkText = false }) {
  return (
    <div className="relative">
      {/* Container du logo avec effet glass */}
      <div className="relative z-10 w-28 h-28 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 flex items-center justify-center shadow-2xl p-4 group-hover:scale-105 transition-transform duration-500">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback si l'image ne charge pas
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback placeholder */}
        <div
          className="hidden w-full h-full items-center justify-center text-gray-400 text-xs text-center"
          style={{ display: 'none' }}
        >
          Logo
          <br />
          {alt}
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute -top-2 -right-8 w-12 h-12 bg-white/40 rounded-full" />
      <div className="absolute -bottom-2 -left-12 w-16 h-16 bg-white/30 rounded-xl rotate-12" />
      <div className="absolute top-1/2 -right-6 w-8 h-8 bg-white/35 rounded-full" />
    </div>
  );
}

export default function ProgramsWithLogos() {
  return (
    <section className="py-24 bg-gray-50/50">
      <Container>
        <SectionTitle
          badge="Nos formations"
          title="Des *programmes* adaptés à chaque *concours*"
          subtitle="Choisis la préparation qui correspond à tes objectifs et maximise tes chances de réussite."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-[1.75rem] overflow-hidden shadow-lg shadow-gray-200/60 hover:shadow-xl hover:shadow-gray-300/60 transition-all duration-500 hover:-translate-y-2">
                {/* ===== HEADER AVEC LOGO ===== */}
                <div
                  className={`relative h-56 bg-linear-to-br ${program.gradient} overflow-hidden`}
                >
                  {/* Blobs décoratifs */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg" />

                  {/* Petits cercles */}
                  <div className="absolute top-6 left-8 w-2 h-2 bg-white/40 rounded-full" />
                  <div className="absolute top-10 left-20 w-1.5 h-1.5 bg-white/30 rounded-full" />
                  <div className="absolute bottom-8 right-12 w-2.5 h-2.5 bg-white/35 rounded-full" />
                  <div className="absolute bottom-16 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full" />

                  {/* Logo centré */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <SchoolLogo
                      src={program.logo}
                      alt={program.logoAlt}
                      darkText={program.darkText}
                    />
                  </div>
                </div>

                {/* ===== CONTENU ===== */}
                <div className="p-6 lg:p-7">
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-navy">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {program.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={program.href}
                    className="inline-flex items-center justify-between w-full group/link"
                  >
                    <span
                      className={`text-sm font-semibold ${program.accentColor} border-b-2 border-current pb-0.5`}
                    >
                      {program.cta}
                    </span>
                    <span className="w-9 h-9 bg-gray-100 group-hover/link:bg-navy rounded-full flex items-center justify-center transition-colors duration-300">
                      <ArrowRight
                        size={16}
                        className="text-gray-600 group-hover/link:text-white transition-colors"
                      />
                    </span>
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
            Voir tous nos programmes
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
