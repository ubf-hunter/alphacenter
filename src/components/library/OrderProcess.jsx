// ============================================
// ORDER PROCESS
// Section processus de commande
// ============================================

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Search, MessageCircle, Smartphone, Download } from 'lucide-react';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';

const stepsConfig = [
  { step: 1, icon: Search },
  { step: 2, icon: MessageCircle },
  { step: 3, icon: Smartphone },
  { step: 4, icon: Download },
];

export default function OrderProcess() {
  const { t } = useTranslation('application');

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          badge={t('library.orderProcess.badge')}
          title={t('library.orderProcess.title')}
          subtitle={t('library.orderProcess.subtitle')}
          centered
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsConfig.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector line */}
                {index < stepsConfig.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-orange/50 to-transparent -translate-x-1/2" />
                )}

                <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100 h-full">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange text-white rounded-xl flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center">
                      <Icon size={24} className="text-orange" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-navy mb-2">
                    {t(`library.orderProcess.steps.${index}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`library.orderProcess.steps.${index}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
