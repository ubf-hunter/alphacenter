// ============================================
// GUARANTEES SECTION
// Section des garanties
// ============================================

import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import GuaranteeCard from './GuaranteeCard';
import { guarantees } from '@/data/purchaseInfo';
import { useTranslation } from 'react-i18next';

export default function GuaranteesSection() {
  const { t } = useTranslation('application');

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          badge={t('library.guarantees.badge')}
          title={t('library.guarantees.title')}
          centered
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <GuaranteeCard key={guarantee.id} guarantee={guarantee} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
