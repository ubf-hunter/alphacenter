// ============================================
// PROGRAMS SECTION - VERSION 3
// Style exact de la référence : fond illustratif en haut, contenu blanc en bas
// Le plus proche de l'image CloudWave
// ============================================

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Landmark, BookOpen, GraduationCap, Users, Target } from 'lucide-react';
import Container from '@components/common/Container';
import Button from '@components/common/Button';
import SectionTitle from '@components/common/SectionTitle';

const programs = [
  {
    icon: Building2,
    title: 'Prépa ENSP',
    subtitle: 'École Polytechnique',
    description: 'Notre programme phare te prépare intensivement au concours le plus sélectif du Cameroun.',
    cta: 'Programme Polytechnique',
    href: '/services#ensp',
    gradient: 'from-[#FF6B35] via-[#FF8C42] to-[#FFB347]', // Orange gradient
    accentColor: 'text-orange',
    stats: { places: 150, taux: '95%' }
  },
  {
    icon: Landmark,
    title: 'Prépa ENSTP',
    subtitle: 'Travaux Publics',
    description: 'Spécialise-toi dans le génie civil et les infrastructures avec des experts du BTP camerounais.',
    cta: 'Programme ENSTP',
    href: '/services#enstp',
    gradient: 'from-[#001A51] via-[#0D47A1] to-[#1565C0]', // Navy/Blue gradient
    accentColor: 'text-navy',
    stats: { places: 80, taux: '92%' }
  },
  {
    icon: BookOpen,
    title: 'Prépa ENS',
    subtitle: 'École Normale',
    description: 'Construis une carrière d\'enseignant ou de chercheur avec une préparation académique solide.',
    cta: 'Programme ENS',
    href: '/services#ens',
    gradient: 'from-[#FFDAB9] via-[#FFE4C4] to-[#FFECD2]', // Apricot gradient
    accentColor: 'text-orange',
    stats: { places: 120, taux: '89%' }
  }
];

// Composant pour les formes géométriques 3D dans le header
function GeometricShapes({ gradient, IconComponent }) {
  return (
    <div className="relative h-52 overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      
      {/* Forme géométrique principale (style gear/engrenage simplifié) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Cercle principal avec icône */}
          <motion.div 
            className="relative z-10 w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center shadow-2xl"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconComponent size={44} className="text-white" strokeWidth={1.5} />
          </motion.div>
          
          {/* Éléments décoratifs autour */}
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-white/30 rounded-full" />
          <div className="absolute -bottom-2 -left-4 w-8 h-8 bg-white/20 rounded-lg rotate-12" />
          <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white/25 rounded-full" />
        </div>
      </div>
      
      {/* Blobs décoratifs */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg" />
      
      {/* Petits cercles décoratifs */}
      <div className="absolute top-6 left-8 w-2 h-2 bg-white/40 rounded-full" />
      <div className="absolute top-10 left-16 w-1.5 h-1.5 bg-white/30 rounded-full" />
      <div className="absolute bottom-8 right-12 w-2.5 h-2.5 bg-white/35 rounded-full" />
      <div className="absolute bottom-16 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full" />
    </div>
  );
}

export default function ProgramsV3() {
  return (
    <section className="py-24 bg-gray-50/50">
      <Container>
        <SectionTitle
          badge="Nos formations"
          title="Des programmes adaptés à chaque concours"
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
                
                {/* ===== HEADER ILLUSTRATIF ===== */}
                <GeometricShapes gradient={program.gradient} IconComponent={program.icon} />

                {/* ===== CONTENU ===== */}
                <div className="p-6 lg:p-7">
                  {/* Titre & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-navy">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium">
                      {program.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* CTA Link style référence */}
                  <a 
                    href={program.href}
                    className="inline-flex items-center justify-between w-full group/link"
                  >
                    <span className={`text-sm font-semibold ${program.accentColor} border-b-2 border-current pb-0.5`}>
                      {program.cta}
                    </span>
                    <span className="w-9 h-9 bg-gray-100 group-hover/link:bg-navy rounded-full flex items-center justify-center transition-colors duration-300">
                      <ArrowRight size={16} className="text-gray-600 group-hover/link:text-white transition-colors" />
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
