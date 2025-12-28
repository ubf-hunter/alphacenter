import { motion } from 'framer-motion';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { methodology, advantages } from '@/data/programmes';

const colorStyles = {
  orange: {
    bg: 'bg-gradient-to-br from-orange to-orange-600',
    line: 'bg-orange',
  },
  navy: {
    bg: 'bg-gradient-to-br from-navy to-blue-800',
    line: 'bg-navy',
  },
};

export default function MethodologySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionTitle
          badge="Notre approche"
          title="Une *méthodologie* éprouvée"
          subtitle="Découvre les 6 étapes de notre méthode qui a permis à plus de 500 étudiants d'intégrer leur école de rêve."
        />

        {/* Timeline / Steps */}
        <div className="mt-16 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-orange via-navy to-orange opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {methodology.map((step, index) => {
              const Icon = step.icon;
              const styles = colorStyles[step.color];

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Step card */}
                  <div className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Step number */}
                    <div
                      className={`
                        absolute -top-4 left-6
                        w-8 h-8 rounded-full
                        ${styles.bg}
                        flex items-center justify-center
                        text-white text-sm font-bold
                        shadow-lg
                      `}
                    >
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div
                      className={`
                        w-14 h-14 rounded-xl
                        ${step.color === 'orange' ? 'bg-orange/10' : 'bg-navy/10'}
                        flex items-center justify-center
                        mb-4 mt-2
                        group-hover:scale-110 transition-transform duration-300
                      `}
                    >
                      <Icon
                        size={28}
                        className={step.color === 'orange' ? 'text-orange' : 'text-navy'}
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-navy to-blue-900 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  La méthode Alpha en chiffres
                </h3>
                <p className="text-white/70">
                  Des résultats concrets qui font la différence
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {advantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <motion.div
                      key={advantage.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                        <Icon size={28} className="text-orange" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                        {advantage.value}
                      </div>
                      <div className="text-sm font-medium text-white/90 mb-1">
                        {advantage.title}
                      </div>
                      <div className="text-xs text-white/60">
                        {advantage.description}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
