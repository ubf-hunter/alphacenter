// ============================================
// RESSOURCES PAGE - BIBLIOTHEQUE ALPHA
// Page principale de la bibliotheque de documents
// ============================================

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LibraryHero,
  ProductGrid,
  OrderProcess,
  GuaranteesSection,
  ProductTestimonials,
  LibraryFAQ,
} from '@components/library';

export default function Ressources() {
  const { t } = useTranslation('application');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t('resources.title');
  }, [t]);

  return (
    <main>
      {/* Hero Section */}
      <LibraryHero />

      {/* Product Grid with Search & Filters */}
      <ProductGrid />

      {/* Order Process */}
      <OrderProcess />

      {/* Guarantees */}
      <GuaranteesSection />

      {/* Testimonials */}
      <ProductTestimonials />

      {/* FAQ */}
      <LibraryFAQ />
    </main>
  );
}
