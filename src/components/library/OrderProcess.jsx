// ============================================
// ORDER PROCESS
// Section processus de commande
// ============================================

import { motion } from 'framer-motion';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { purchaseProcess } from '@/data/purchaseInfo';

export default function OrderProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          badge="Comment commander"
          title="Un processus *simple* et *rapide*"
          subtitle="Commandez vos documents en quelques clics via WhatsApp"
          centered
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {purchaseProcess.map((step, index) => {
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
                {index < purchaseProcess.length - 1 && (
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
                  <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
