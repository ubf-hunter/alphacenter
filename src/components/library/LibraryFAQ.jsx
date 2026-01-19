// ============================================
// LIBRARY FAQ
// Section FAQ de la bibliotheque
// ============================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { purchaseFAQ } from '@/data/purchaseInfo';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-navy pr-4">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-gray-400" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LibraryFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            badge="Questions frequentes"
            title="Tout savoir sur nos *documents*"
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-50 rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center">
                <HelpCircle size={24} className="text-orange" />
              </div>
              <div>
                <h3 className="font-bold text-navy">Besoin d'aide ?</h3>
                <p className="text-sm text-gray-500">
                  Trouvez rapidement les reponses a vos questions
                </p>
              </div>
            </div>

            {purchaseFAQ.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
