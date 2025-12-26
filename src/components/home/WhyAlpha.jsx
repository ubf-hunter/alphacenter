import { motion } from 'framer-motion';
import {
  Award,
  Users,
  UserCheck,
  FileCheck,
  Smartphone,
  Wallet
} from 'lucide-react';
import Container from '@components/common/Container';
import Card from '@components/common/Card';
import SectionTitle from '@components/common/SectionTitle';

const features = [
  {
    icon: Award,
    title: 'Enseignants d\'excellence',
    description: 'Nos professeurs sont des experts issus des meilleures universités et grandes écoles, avec une pédagogie éprouvée.'
  },
  {
    icon: Users,
    title: 'Petits groupes (max 25)',
    description: 'Des classes à effectif réduit pour garantir une attention personnalisée et une meilleure progression de chaque étudiant.'
  },
  {
    icon: UserCheck,
    title: 'Suivi individualisé',
    description: 'Un accompagnement personnalisé avec des bilans réguliers et des conseils adaptés à ton profil et tes objectifs.'
  },
  {
    icon: FileCheck,
    title: 'Concours blancs réguliers',
    description: 'Des examens dans les conditions réelles pour te préparer au stress du jour J et identifier tes points à améliorer.'
  },
  {
    icon: Smartphone,
    title: 'Application Alpha',
    description: 'Révise partout avec notre app mobile : QCM, cours, corrections détaillées, même hors connexion.'
  },
  {
    icon: Wallet,
    title: 'Tarifs accessibles',
    description: 'Une formation de qualité à prix abordable, avec des facilités de paiement pour toutes les familles.'
  }
];

export default function WhyAlpha() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange rounded-full opacity-5 blur-[80px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              badge="Pourquoi nous choisir"
              title="Ce qui nous rend différents"
              subtitle="Depuis 15 ans, Alpha Center accompagne les futurs ingénieurs camerounais vers la réussite avec une méthode qui a fait ses preuves."
              align="left"
            />

            {/* Trust indicator */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-white flex items-center justify-center text-xs font-bold text-orange"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-navy">+500 étudiants</span> nous ont fait confiance
              </p>
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="p-6 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange mb-4">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
