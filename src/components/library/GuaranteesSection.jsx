// ============================================
// GUARANTEES SECTION
// Section des garanties
// ============================================

import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import GuaranteeCard from './GuaranteeCard';
import { guarantees } from '@/data/purchaseInfo';

export default function GuaranteesSection() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          badge="Nos engagements"
          title="Des *garanties* pour votre tranquillite"
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
