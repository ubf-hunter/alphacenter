import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Monitor,
  Zap,
  Wrench,
  Droplet,
  Leaf,
  Compass,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@components/common/Container';
import Button from '@components/common/Button';
import SectionTitle from '@components/common/SectionTitle';

const metiers = [
  {
    icon: Building2,
    title: 'Génie Civil',
    tagline: 'Construis le monde de demain',
    href: '/orientation/metiers/genie-civil'
  },
  {
    icon: Monitor,
    title: 'Génie Informatique',
    tagline: 'Crée les technologies du futur',
    href: '/orientation/metiers/genie-informatique'
  },
  {
    icon: Zap,
    title: 'Génie Électrique',
    tagline: 'Maîtrise l\'énergie',
    href: '/orientation/metiers/genie-electrique'
  },
  {
    icon: Wrench,
    title: 'Génie Mécanique',
    tagline: 'Conçois les machines',
    href: '/orientation/metiers/genie-mecanique'
  },
  {
    icon: Droplet,
    title: 'Génie Pétrolier',
    tagline: 'Exploite les ressources',
    href: '/orientation/metiers/genie-petrolier'
  },
  {
    icon: Leaf,
    title: 'Génie Environnement',
    tagline: 'Protège la planète',
    href: '/orientation/metiers/genie-environnement'
  }
];

export default function OrientationPreview() {
  return (
    <section className="py-20 bg-apricot-light relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-apricot rounded-full opacity-40 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange rounded-full opacity-10 blur-[80px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge={<><Compass size={16} className="inline mr-1" /> Orientation</>}
          title="Tu ne sais pas encore quel ingénieur tu veux devenir ?"
          subtitle="Explore les différents domaines de l'ingénierie et découvre celui qui te correspond le mieux."
        />

        {/* Metiers Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metiers.map((metier, index) => (
            <motion.div
              key={metier.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                to={metier.href}
                className="group block p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center h-full"
              >
                <span className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange/10 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors">
                  <metier.icon size={24} />
                </span>
                <h3 className="font-semibold text-navy text-sm mb-1 group-hover:text-orange transition-colors">
                  {metier.title}
                </h3>
                <p className="text-xs text-gray-500 hidden sm:block">
                  {metier.tagline}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="primary" to="/orientation">
            Explorer tous les métiers
            <ArrowRight size={20} />
          </Button>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50">
            <span className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange shrink-0">
              <Lightbulb size={20} />
            </span>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-navy">Le savais-tu ?</span>{' '}
              Le Cameroun aura besoin de plus de 50 000 ingénieurs d'ici 2030 !
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
