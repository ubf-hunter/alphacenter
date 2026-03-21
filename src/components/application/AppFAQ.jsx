// ============================================
// APP FAQ - Questions frequentes en accordeon
// Accordeon anime avec Framer Motion
// ============================================

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';

const faqIds = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

function FAQItem({ questionKey, isOpen, onClick, t }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-orange' : 'text-navy group-hover:text-orange'}`}>
          {t(`appFaq.questions.${questionKey}.question`)}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`shrink-0 ml-4 ${isOpen ? 'text-orange' : 'text-gray-400'}`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">
              {t(`appFaq.questions.${questionKey}.answer`)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AppFAQ() {
  const { t } = useTranslation('application');
  const [openId, setOpenId] = useState('q1');

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionTitle
          badge={t('appFaq.badge')}
          title={t('appFaq.title')}
          subtitle={t('appFaq.subtitle')}
        />

        <div className="mt-16 max-w-3xl mx-auto">
          {/* FAQ Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-6 lg:p-8"
          >
            {faqIds.map((id) => (
              <FAQItem
                key={id}
                questionKey={id}
                isOpen={openId === id}
                onClick={() => toggleItem(id)}
                t={t}
              />
            ))}
          </motion.div>

          {/* Contact support */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-navy/5 rounded-xl">
              <HelpCircle size={24} className="text-navy" />
              <div className="text-left">
                <p className="text-navy font-medium">
                  {t('appFaq.otherQuestions')}
                </p>
                <a
                  href="/contact"
                  className="text-orange hover:underline text-sm"
                >
                  {t('appFaq.contactSupport')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
