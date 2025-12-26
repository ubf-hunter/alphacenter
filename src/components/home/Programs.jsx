import { motion } from 'framer-motion';
import { ArrowRight, Building2, Landmark, BookOpen } from 'lucide-react';
import Container from '@components/common/Container';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import SectionTitle from '@components/common/SectionTitle';

const programs = [
  {
    icon: Building2,
    title: 'Prépa ENSP',
    school: 'École Nationale Supérieure Polytechnique',
    description: 'Préparation intensive pour intégrer la plus prestigieuse école d\'ingénieurs du Cameroun. Génie Civil, Informatique, Électrique, Mécanique.',
    features: ['Cours intensifs', 'Concours blancs hebdomadaires', 'Suivi personnalisé'],
    color: 'orange',
    href: '/services#ensp'
  },
  {
    icon: Landmark,
    title: 'Prépa ENSTP',
    school: 'École Nationale Supérieure des Travaux Publics',
    description: 'Formation complète pour réussir le concours d\'entrée à l\'ENSTP. Spécialisation en génie civil et travaux publics.',
    features: ['Méthodologie adaptée', 'Exercices ciblés', 'Coaching individuel'],
    color: 'navy',
    href: '/services#enstp'
  },
  {
    icon: BookOpen,
    title: 'Prépa ENS',
    school: 'École Normale Supérieure',
    description: 'Préparation rigoureuse aux concours de l\'ENS pour devenir enseignant du secondaire ou poursuivre en recherche.',
    features: ['Renforcement académique', 'Culture générale', 'Expression écrite'],
    color: 'apricot',
    href: '/services#ens'
  }
];

const colorClasses = {
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange',
    border: 'border-orange',
    dot: 'bg-orange'
  },
  navy: {
    bg: 'bg-navy-50',
    text: 'text-navy',
    border: 'border-navy',
    dot: 'bg-navy'
  },
  apricot: {
    bg: 'bg-apricot-light',
    text: 'text-navy',
    border: 'border-apricot-dark',
    dot: 'bg-apricot'
  }
};

export default function Programs() {
  return (
    <section className="py-20 bg-off-white">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="p-8 h-full flex flex-col">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colorClasses[program.color].bg} ${colorClasses[program.color].text} mb-6`}>
                  <program.icon size={32} />
                </div>

                {/* Title & School */}
                <h3 className="text-2xl font-bold text-navy mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {program.school}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6 grow">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${colorClasses[program.color].dot}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  to={program.href}
                  className="w-full justify-center"
                >
                  En savoir plus
                  <ArrowRight size={18} />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="primary" to="/services">
            Voir tous les programmes
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
