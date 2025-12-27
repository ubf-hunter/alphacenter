// ============================================
// PROGRAMS SECTION - VERSION 2
// Cards avec effet 3D et glassmorphism prononcé
// Style plus proche de la référence CloudWave
// ============================================

import { motion } from 'framer-motion';
import { ArrowRight, Building2, Landmark, BookOpen } from 'lucide-react';
import Container from '@components/common/Container';
import Button from '@components/common/Button';
import SectionTitle from '@components/common/SectionTitle';

const programs = [
  {
    icon: Building2,
    title: 'Prépa ENSP',
    subtitle: 'Polytechnique',
    description: 'Intègre la plus prestigieuse école d\'ingénieurs du Cameroun avec notre préparation intensive.',
    cta: 'Découvrir le programme',
    href: '/services#ensp',
    theme: {
      bg: 'bg-gradient-to-br from-orange-400 via-orange-500 to-red-500',
      blob1: 'bg-orange-300/40',
      blob2: 'bg-yellow-400/30',
      blob3: 'bg-red-400/20',
    }
  },
  {
    icon: Landmark,
    title: 'Prépa ENSTP',
    subtitle: 'Travaux Publics',
    description: 'Maîtrise les techniques de génie civil et d\'infrastructure avec nos experts du domaine.',
    cta: 'Découvrir le programme',
    href: '/services#enstp',
    theme: {
      bg: 'bg-gradient-to-br from-navy via-blue-800 to-indigo-900',
      blob1: 'bg-blue-400/30',
      blob2: 'bg-cyan-400/20',
      blob3: 'bg-indigo-400/30',
    }
  },
  {
    icon: BookOpen,
    title: 'Prépa ENS',
    subtitle: 'École Normale',
    description: 'Deviens enseignant ou chercheur avec une préparation académique rigoureuse et complète.',
    cta: 'Découvrir le programme',
    href: '/services#ens',
    theme: {
      bg: 'bg-gradient-to-br from-apricot via-orange-300 to-amber-400',
      blob1: 'bg-orange-200/50',
      blob2: 'bg-yellow-300/40',
      blob3: 'bg-amber-300/30',
    }
  }
];

// Composant SVG pour l'icône 3D stylisée
function Icon3D({ IconComponent, className }) {
  return (
    <div className={`relative ${className}`}>
      {/* Ombre portée */}
      <div className="absolute inset-0 bg-black/20 rounded-2xl blur-xl translate-y-4 scale-90" />
      
      {/* Conteneur principal avec effet 3D */}
      <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl transform hover:rotate-3 transition-transform duration-500">
        <IconComponent size={56} className="text-white drop-shadow-lg" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default function ProgramsV2() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          badge="Nos formations"
          title="Des programmes adaptés à chaque concours"
          subtitle="Choisis la préparation qui correspond à tes objectifs et maximise tes chances de réussite."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative h-full ${program.theme.bg} rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3`}>
                
                {/* ===== FOND AVEC BLOBS ANIMÉS ===== */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Blob 1 - Grand cercle */}
                  <motion.div 
                    className={`absolute -top-20 -right-20 w-64 h-64 ${program.theme.blob1} rounded-full blur-3xl`}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      x: [0, 10, 0],
                      y: [0, -10, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Blob 2 - Moyen */}
                  <motion.div 
                    className={`absolute top-1/2 -left-16 w-48 h-48 ${program.theme.blob2} rounded-full blur-2xl`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      x: [0, 15, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  
                  {/* Blob 3 - Petit */}
                  <motion.div 
                    className={`absolute bottom-10 right-10 w-32 h-32 ${program.theme.blob3} rounded-full blur-xl`}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      y: [0, -20, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />
                </div>

                {/* ===== CONTENU ===== */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  
                  {/* Header avec icône 3D */}
                  <div className="mb-8">
                    <Icon3D IconComponent={program.icon} className="w-fit" />
                  </div>

                  {/* Titre */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-white/70 text-sm font-medium mb-4">
                    {program.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-white/80 text-sm lg:text-base mb-8 grow">
                    {program.description}
                  </p>

                  {/* CTA */}
                  <a 
                    href={program.href}
                    className="inline-flex items-center justify-between w-full px-5 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-white/20 transition-all duration-300 group/btn"
                  >
                    <span className="text-white font-medium text-sm">
                      {program.cta}
                    </span>
                    <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                      <ArrowRight size={16} className="text-gray-800" />
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
          transition={{ duration: 0.5, delay: 0.5 }}
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
