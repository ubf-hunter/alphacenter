import SEO from '@components/common/SEO';
import Hero1 from '@components/hero/Hero1';
import AppPromo from '@components/home/AppPromo';
import CTAFinal from '@components/home/CTAFinal';
import OrientationPreview from '@components/home/OrientationPreview';
import Programs from '@components/home/ProgramsWithLogos';
import Testimonials from '@components/home/Testimonials';
import WhyAlpha from '@components/home/WhyAlpha';

export default function Home() {
  return (
    <>
      <SEO
        title="Accueil"
        description="Alpha Center - Premier centre de preparation aux concours d'ingenieurs, medecine et infirmieres au Cameroun. 700+ admis, 85% de taux de reussite."
        url="/"
      />
      <Hero1 />
      <Programs />
      <WhyAlpha />
      <OrientationPreview />
      <Testimonials />
      <AppPromo />
      <CTAFinal />
    </>
  );
}
