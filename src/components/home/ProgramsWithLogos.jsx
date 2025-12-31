// ============================================
// PROGRAMS SECTION - VERSION AVEC ONGLETS PAR CATEGORIE
// Affiche les programmes filtres par categorie
// ============================================

import { useState } from 'react';
import Button from '@components/common/Button';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { programmes, programCategories } from '@/data/programmes';

// ===== IMPORTS DES LOGOS =====
import logoENSPY from '@assets/logoEcoles/enspy.webp';
import logoENSTP from '@assets/logoEcoles/enstp.png';
import logosupptic from '@assets/logoEcoles/supptic.png';
// Ajouter les logos sante quand disponibles:
// import logoFMSB from '@assets/logoEcoles/fmsb.png';
// import logoIDE from '@assets/logoEcoles/ide.png';

// Mapping des logos par programme ID
const programLogos = {
  ensp: logoENSPY,
  enstp: logoENSTP,
  supptic: logosupptic,
  // medecine: logoFMSB,
  // infirmier: logoIDE,
};

// Configuration des couleurs par categorie
const categoryColors = {
  engineering: {
    active: 'bg-orange text-white',
    inactive: 'bg-white text-gray-600 hover:bg-orange/10 hover:text-orange',
    accent: 'text-orange',
  },
  health: {
    active: 'bg-emerald-500 text-white',
    inactive: 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600',
    accent: 'text-emerald-600',
  },
  education: {
    active: 'bg-navy text-white',
    inactive: 'bg-white text-gray-600 hover:bg-navy/10 hover:text-navy',
    accent: 'text-navy',
  },
};

// Configuration des gradients par programme
const programGradients = {
  ensp: 'from-[#FF6B35] via-[#FF8C42] to-[#FFB347]',
  enstp: 'from-[#001A51] via-[#0D47A1] to-[#1565C0]',
  medecine: 'from-emerald-500 via-emerald-600 to-emerald-700',
  infirmier: 'from-rose-400 via-rose-500 to-rose-600',
  ens: 'from-[#FFDAB9] via-[#FFE4C4] to-[#FFECD2]',
  preparatoire: 'from-gray-500 via-gray-600 to-gray-700',
};

// Composant Logo avec fallback vers icone
function SchoolLogo({ programId, icon: Icon }) {
  const logo = programLogos[programId];

  if (logo) {
    return (
      <div className="relative">
        <div className="relative z-10 w-24 h-24 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 flex items-center justify-center shadow-2xl p-2 group-hover:scale-105 transition-transform duration-500">
          <img
            src={logo}
            alt={`Logo ${programId}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="absolute -top-2 -right-8 w-12 h-12 bg-white/40 rounded-full" />
        <div className="absolute -bottom-2 -left-12 w-16 h-16 bg-white/30 rounded-xl rotate-12" />
      </div>
    );
  }

  // Fallback: afficher l'icone du programme
  return (
    <div className="relative">
      <div className="relative z-10 w-24 h-24 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
        <Icon size={48} className="text-gray-700" />
      </div>
      <div className="absolute -top-2 -right-8 w-12 h-12 bg-white/40 rounded-full" />
      <div className="absolute -bottom-2 -left-12 w-16 h-16 bg-white/30 rounded-xl rotate-12" />
    </div>
  );
}

// Composant Onglet de categorie
function CategoryTab({ category, isActive, onClick, colorConfig }) {
  const Icon = category.icon;

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm
        transition-all duration-300 border
        ${isActive ? colorConfig.active + ' border-transparent shadow-lg' : colorConfig.inactive + ' border-gray-200'}
      `}
    >
      <Icon size={18} />
      <span>{category.name}</span>
    </button>
  );
}

// Composant Carte de programme
function ProgramCard({ program, index }) {
  const gradient = programGradients[program.id] || 'from-gray-500 to-gray-600';
  const isDarkText = program.id === 'ens';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative h-full bg-white rounded-[1.75rem] overflow-hidden shadow-lg shadow-gray-200/60 hover:shadow-xl hover:shadow-gray-300/60 transition-all duration-500 hover:-translate-y-2">
        {/* Badge si present */}
        {program.badge && (
          <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold ${program.badgeColor}`}>
            {program.badge}
          </div>
        )}

        {/* Header avec Logo/Icone */}
        <div className={`relative h-52 bg-linear-to-br ${gradient} overflow-hidden`}>
          {/* Blobs decoratifs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg" />

          {/* Petits cercles */}
          <div className="absolute top-6 left-8 w-2 h-2 bg-white/40 rounded-full" />
          <div className="absolute top-10 left-20 w-1.5 h-1.5 bg-white/30 rounded-full" />
          <div className="absolute bottom-8 right-12 w-2.5 h-2.5 bg-white/35 rounded-full" />

          {/* Logo/Icone centre */}
          <div className="absolute inset-0 flex items-center justify-center">
            <SchoolLogo programId={program.id} icon={program.icon} />
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 lg:p-7">
          <div className="mb-4">
            <h3 className="text-xl lg:text-2xl font-bold text-navy">
              {program.shortName}
            </h3>
            <p className="text-sm text-gray-400 font-medium">
              {program.school}
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {program.tagline}
          </p>

          {/* Infos rapides */}
          <div className="flex items-center gap-4 mb-5 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span className="font-semibold text-navy">{program.duration}</span>
            </span>
            {program.successRate && (
              <span className="flex items-center gap-1">
                <span className="font-semibold text-emerald-600">{program.successRate}%</span> reussite
              </span>
            )}
          </div>

          {/* CTA */}
          <a
            href={`/programmes#${program.id}`}
            className="inline-flex items-center justify-between w-full group/link"
          >
            <span className="text-sm font-semibold text-orange border-b-2 border-current pb-0.5">
              Decouvrir le programme
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
  );
}

export default function ProgramsWithLogos() {
  const [activeCategory, setActiveCategory] = useState('engineering');

  // Filtrer les programmes par categorie (exclure 'preparatoire' qui est 'all')
  const filteredPrograms = programmes.filter(
    (p) => p.category === activeCategory
  );

  // Trouver la config de couleur pour la categorie active
  const activeColorConfig = categoryColors[activeCategory] || categoryColors.engineering;

  return (
    <section className="py-24 bg-gray-50/50">
      <Container>
        <SectionTitle
          badge="Nos formations"
          title="Des *programmes* adaptes a chaque *ambition*"
          subtitle="De l'ingenierie a la medecine, trouve la preparation qui te correspond."
        />

        {/* Onglets de categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {programCategories.map((category) => (
            <CategoryTab
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              colorConfig={categoryColors[category.id]}
            />
          ))}
        </motion.div>

        {/* Grille de programmes */}
        <div className="mt-12 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {filteredPrograms.map((program, index) => (
                <ProgramCard key={program.id} program={program} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button variant="primary" to="/programmes" size="lg">
            Voir tous nos programmes
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
