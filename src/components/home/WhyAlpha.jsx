// ============================================
// WHY ALPHA - VERSION FINALE
// Layout V1 (2 colonnes) + Texture Cross
// ============================================

import Button from '@components/common/Button';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  FileCheck,
  Smartphone,
  UserCheck,
  Users,
  Wallet,
} from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Enseignants d'excellence",
    description:
      'Experts issus des meilleures universités avec une pédagogie éprouvée.',
    color: 'orange',
  },
  {
    icon: Users,
    title: 'Petits groupes',
    description: 'Classes de 25 max pour une attention personnalisée.',
    color: 'navy',
  },
  {
    icon: UserCheck,
    title: 'Suivi individualisé',
    description: 'Accompagnement personnalisé avec bilans réguliers.',
    color: 'orange',
  },
  {
    icon: FileCheck,
    title: 'Concours blancs',
    description: 'Examens en conditions réelles chaque semaine.',
    color: 'navy',
  },
  {
    icon: Smartphone,
    title: 'Application Alpha',
    description: 'Révise partout, même hors connexion.',
    color: 'orange',
  },
  {
    icon: Wallet,
    title: 'Tarifs accessibles',
    description: 'Formation de qualité avec facilités de paiement.',
    color: 'navy',
  },
];

const colorStyles = {
  orange: {
    iconBg: 'bg-linear-to-br from-orange-100 to-orange-50',
    iconColor: 'text-orange',
    hoverBorder: 'group-hover:border-orange/30',
  },
  navy: {
    iconBg: 'bg-linear-to-br from-navy-50 to-blue-50',
    iconColor: 'text-navy',
    hoverBorder: 'group-hover:border-navy/30',
  },
};

// SVG pattern pour la texture cross
const crossPatternSvg = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 8V4M10 16v-4M8 10H4M16 10h-4' stroke='%23001A51' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`;

export default function WhyAlpha() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* ===== BACKGROUND AVEC TEXTURE CROSS ===== */}

      {/* Couleur de fond */}
      <div className="absolute inset-0 bg-white" />

      {/* Pattern cross (petites croix) */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: crossPatternSvg,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Gradient overlay pour fade les bords */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white" />

      {/* Blob décoratif */}
      <div className="absolute -right-40 top-1/3 w-150 h-150 bg-orange/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -left-40 bottom-1/4 w-100 h-100 bg-apricot/20 rounded-full blur-[80px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ===== LEFT: Titre et Social Proof ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              badge="Pourquoi nous choisir"
              title="Ce qui nous rend *différents*"
              subtitle="Depuis 15 ans, Alpha Center accompagne les futurs ingénieurs camerounais vers la réussite avec une méthode qui a fait ses preuves."
              align="left"
            />

            {/* Stats rapides */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: '15+', label: 'Années' },
                { value: '95%', label: 'Réussite' },
                { value: '500+', label: 'Admis' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-navy">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Social proof avec avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-orange border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
                  +500
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-navy">
                  Étudiants satisfaits
                </span>
                <br />
                <span className="text-gray-400">qui nous recommandent</span>
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Button variant="primary" to="/inscription">
                Rejoindre Alpha Center
                <ArrowRight size={18} />
              </Button>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT: Features Grid ===== */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`
                  relative p-6 h-full
                  bg-white/80 backdrop-blur-sm
                  rounded-2xl
                  border border-gray-100 ${
                    colorStyles[feature.color].hoverBorder
                  }
                  shadow-sm hover:shadow-lg
                  transition-all duration-300
                  hover:-translate-y-1
                `}
                >
                  {/* Icône */}
                  <div
                    className={`
                    inline-flex items-center justify-center 
                    w-12 h-12 rounded-xl 
                    ${colorStyles[feature.color].iconBg} 
                    ${colorStyles[feature.color].iconColor}
                    mb-4
                    group-hover:scale-110 transition-transform duration-300
                  `}
                  >
                    <feature.icon size={24} strokeWidth={1.5} />
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
