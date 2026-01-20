// ============================================
// RESSOURCES PAGE - BIBLIOTHEQUE ALPHA
// Page principale de la bibliotheque de documents
// ============================================

import { useEffect } from 'react';
import {
  LibraryHero,
  ProductGrid,
  OrderProcess,
  GuaranteesSection,
  ProductTestimonials,
  LibraryFAQ,
} from '@components/library';

export default function Ressources() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Bibliotheque Alpha - Documents et Ressources | Alpha Center';
  }, []);

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
