import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import Button from '@components/common/Button';
import { programmes } from '@/data/programmes';
import { useInscriptionModal } from '../../hooks/useInscriptionModal';

const comparisonData = [
  {
    category: 'Général',
    items: [
      { label: 'Durée de formation', key: 'duration' },
      { label: 'Prix mensuel', key: 'priceLabel' },
      { label: 'Étudiants par classe', key: 'studentsPerClass', suffix: ' max' },
      { label: 'Taux de réussite', key: 'successRate', suffix: '%' },
    ],
  },
  {
    category: 'Format',
    items: [
      { label: 'Cours en présentiel', value: true, type: 'boolean' },
      { label: 'Modules en ligne', key: 'format', includes: 'ligne', type: 'boolean' },
      { label: 'Support WhatsApp', value: true, type: 'boolean' },
      { label: 'Examens blancs', value: true, type: 'boolean' },
    ],
  },
  {
    category: 'Ressources',
    items: [
      { label: 'Fiches de révision', value: true, type: 'boolean' },
      { label: 'Vidéos de cours', value: true, type: 'boolean' },
      { label: 'Coaching individuel', key: 'format', includes: 'coaching', type: 'boolean' },
      { label: 'Accès plateforme e-learning', value: true, type: 'boolean' },
    ],
  },
];

// Only show main 3 programs in comparison
const mainPrograms = programmes.filter((p) =>
  ['ensp', 'enstp', 'ens'].includes(p.id)
);

const programColors = {
  ensp: {
    header: 'bg-gradient-to-br from-orange to-orange-600',
    badge: 'bg-orange/10 text-orange',
  },
  enstp: {
    header: 'bg-gradient-to-br from-navy to-blue-800',
    badge: 'bg-navy/10 text-navy',
  },
  ens: {
    header: 'bg-gradient-to-br from-apricot to-orange-300',
    badge: 'bg-apricot/20 text-orange',
  },
};

export default function ComparisonTable() {
  const { openModal } = useInscriptionModal();

  const getValue = (program, item) => {
    if (item.type === 'boolean') {
      if (item.value !== undefined) return item.value;
      if (item.includes) {
        return program[item.key]?.toLowerCase().includes(item.includes);
      }
      return false;
    }

    const value = program[item.key];
    if (value === null || value === undefined) return '—';
    return item.suffix ? `${value}${item.suffix}` : value;
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="Comparatif"
          title="*Compare* nos programmes"
          subtitle="Trouve le programme qui correspond le mieux à tes objectifs et à ton profil."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          {/* Desktop table */}
          <div className="hidden lg:block overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100">
            <table className="w-full">
              {/* Header */}
              <thead>
                <tr>
                  <th className="p-6 text-left bg-gray-50 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-500">
                      Caractéristiques
                    </span>
                  </th>
                  {mainPrograms.map((program) => {
                    const colors = programColors[program.id];
                    const Icon = program.icon;
                    return (
                      <th
                        key={program.id}
                        className={`p-6 text-center ${colors.header} border-b border-white/10`}
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                            <Icon size={24} className="text-white" />
                          </div>
                          <span className="text-lg font-bold text-white">
                            {program.shortName}
                          </span>
                          <span className="text-sm text-white/70 mt-1">
                            {program.tagline}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {comparisonData.map((category, catIndex) => (
                  <>
                    {/* Category header */}
                    <tr key={`cat-${catIndex}`}>
                      <td
                        colSpan={mainPrograms.length + 1}
                        className="px-6 py-4 bg-gray-50 border-b border-gray-100"
                      >
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                          {category.category}
                        </span>
                      </td>
                    </tr>

                    {/* Items */}
                    {category.items.map((item, itemIndex) => (
                      <tr
                        key={`item-${catIndex}-${itemIndex}`}
                        className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-700">
                          {item.label}
                        </td>
                        {mainPrograms.map((program) => {
                          const value = getValue(program, item);
                          return (
                            <td
                              key={program.id}
                              className="px-6 py-4 text-center"
                            >
                              {item.type === 'boolean' ? (
                                value ? (
                                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                                    <Check size={18} className="text-green-600" />
                                  </div>
                                ) : (
                                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                                    <X size={18} className="text-gray-400" />
                                  </div>
                                )
                              ) : (
                                <span className="text-sm font-medium text-navy">
                                  {value}
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </>
                ))}

                {/* CTA row */}
                <tr>
                  <td className="p-6 bg-gray-50"></td>
                  {mainPrograms.map((program) => (
                    <td key={program.id} className="p-6 bg-gray-50 text-center">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => openModal(program.id)}
                      >
                        Choisir {program.shortName}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-6">
            {mainPrograms.map((program, index) => {
              const colors = programColors[program.id];
              const Icon = program.icon;

              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                >
                  {/* Header */}
                  <div className={`p-6 ${colors.header}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {program.shortName}
                        </h3>
                        <p className="text-white/70 text-sm">{program.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-gray-400">Durée</span>
                        <p className="font-semibold text-navy">{program.duration}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400">Prix</span>
                        <p className="font-semibold text-navy">{program.priceLabel}</p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400">Réussite</span>
                        <p className="font-semibold text-green-600">
                          {program.successRate}%
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400">Classe</span>
                        <p className="font-semibold text-navy">
                          {program.studentsPerClass} max
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      onClick={() => openModal(program.id)}
                      className="w-full justify-center mt-4"
                    >
                      S'inscrire au {program.shortName}
                      <ArrowRight size={18} />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
