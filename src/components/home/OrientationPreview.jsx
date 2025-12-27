// ============================================
// ORIENTATION PREVIEW - VERSION 2
// Cards style "real estate" avec infos en bas
// Plus proche de l'image 2 de référence
// ============================================
import Gci from '@assets/images/metiers/GC.jpeg';
import Gelec from '@assets/images/metiers/Gelec.jpeg';
import Genviron from '@assets/images/metiers/Genviron.jpeg';
import Gi from '@assets/images/metiers/GI.jpeg';
import Gmeca from '@assets/images/metiers/Gmeca.jpeg';
import Gpetro from '@assets/images/metiers/Gpetro.jpeg';
import Button from '@components/common/Button';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const metiers = [
  {
    title: 'Génie Civil',
    tagline: 'Construis le monde de demain',
    image: Gci,
    href: '/orientation/metiers/genie-civil',
    stats: { salaire: '800K+', emploi: '98%', ecoles: '5' },
    color: 'from-cyan-600 to-teal-700',
    badge: '🏗️ Populaire',
  },
  {
    title: 'Génie Informatique',
    tagline: 'Crée les technologies du futur',
    image: Gi,
    href: '/orientation/metiers/genie-informatique',
    stats: { salaire: '1.2M+', emploi: '99%', ecoles: '8' },
    color: 'from-violet-600 to-purple-700',
    badge: '🔥 Tendance',
  },
  {
    title: 'Génie Électrique',
    tagline: "Maîtrise l'énergie",
    image: Gelec,
    href: '/orientation/metiers/genie-electrique',
    stats: { salaire: '900K+', emploi: '95%', ecoles: '4' },
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Génie Mécanique',
    tagline: 'Conçois les machines',
    image: Gmeca,
    href: '/orientation/metiers/genie-mecanique',
    stats: { salaire: '850K+', emploi: '94%', ecoles: '6' },
    color: 'from-slate-600 to-gray-700',
  },
  {
    title: 'Génie Pétrolier',
    tagline: 'Exploite les ressources',
    image: Gpetro,
    href: '/orientation/metiers/genie-petrolier',
    stats: { salaire: '1.5M+', emploi: '85%', ecoles: '2' },
    color: 'from-orange-600 to-red-700',
    badge: '💰 Top Salaire',
  },
  {
    title: 'Génie Environnement',
    tagline: 'Protège la planète',
    image: Genviron,
    href: '/orientation/metiers/genie-environnement',
    stats: { salaire: '750K+', emploi: '92%', ecoles: '3' },
    color: 'from-emerald-500 to-green-600',
    badge: '🌱 Avenir',
  },
];

// Placeholder images
const placeholderImages = {
  'genie-civil':
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  'genie-informatique':
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
  'genie-electrique':
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
  'genie-mecanique':
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
  'genie-petrolier':
    'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80',
  'genie-environnement':
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
};

function MetierCard({
  title,
  tagline,
  image,
  href,
  stats,
  color,
  badge,
  index,
}) {
  const imageUrl = image || placeholderImages[href.split('/').pop()];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link
        to={href}
        className="relative block rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${color} opacity-60 mix-blend-multiply`}
          />

          {/* Badge */}
          {badge && (
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-md">
              <span className="text-xs font-semibold text-gray-800">
                {badge}
              </span>
            </div>
          )}

          {/* Titre sur l'image */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{tagline}</p>
          </div>
        </div>

        {/* Infos en bas (style real estate) */}
        <div className="p-5 bg-white">
          {/* Stats row */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5 text-gray-600">
              <Briefcase size={14} className="text-gray-400" />
              <span className="font-semibold text-navy">{stats.salaire}</span>
              <span className="text-gray-400">FCFA/mois</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-gray-500">
                <TrendingUp size={14} className="text-green-500" />
                <span>{stats.emploi}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <GraduationCap size={14} />
                <span>{stats.ecoles} écoles</span>
              </div>
            </div>
          </div>

          {/* CTA link */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-500">Voir la fiche métier</span>
            <span className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-orange flex items-center justify-center transition-colors duration-300">
              <ArrowRight
                size={16}
                className="text-gray-500 group-hover:text-white transition-colors"
              />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function OrientationPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-apricot-light via-white to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-apricot rounded-full opacity-30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange rounded-full opacity-10 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="🧭 Orientation"
          title="Tu ne sais pas quel *ingénieur* tu veux devenir ?"
          subtitle="Explore les différents domaines de l'ingénierie et découvre celui qui te correspond le mieux."
        />

        {/* Metiers Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {metiers.map((metier, index) => (
            <MetierCard key={metier.title} {...metier} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button variant="primary" to="/orientation" size="lg">
            Explorer tous les métiers
            <ArrowRight size={20} />
          </Button>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
            <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange to-orange-600 flex items-center justify-center text-white shrink-0 shadow-lg">
              <Lightbulb size={24} />
            </span>
            <p className="text-left text-sm text-gray-600">
              <span className="font-bold text-navy block">Le savais-tu ?</span>
              Le Cameroun aura besoin de plus de 50 000 ingénieurs d'ici 2030 !
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
