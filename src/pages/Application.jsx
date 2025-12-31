// ============================================
// PAGE APPLICATION MOBILE ALPHA
// Presentation de l'app mobile Alpha
// ============================================

import {
  AppHero,
  WhyAlphaApp,
  FeatureShowcase,
  HowItWorks,
  ConcoursList,
  AppTestimonials,
  AppFAQ,
  DownloadCTA,
} from '@components/application';

export default function Application() {
  return (
    <main>
      {/* Hero avec mockups et CTAs download */}
      <AppHero />

      {/* Pourquoi Alpha App - 6 avantages */}
      <WhyAlphaApp />

      {/* Comment ca marche - 4 etapes */}
      <HowItWorks />

      {/* Fonctionnalites detaillees */}
      <FeatureShowcase />

      {/* Liste des concours prepares */}
      <ConcoursList />

      {/* Temoignages utilisateurs */}
      <AppTestimonials />

      {/* FAQ */}
      <AppFAQ />

      {/* CTA final telechargement */}
      <DownloadCTA />
    </main>
  );
}
