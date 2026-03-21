import SEO from '@components/common/SEO';
import Hero1 from '@components/hero/Hero1';
import AppPromo from '@components/home/AppPromo';
import CTAFinal from '@components/home/CTAFinal';
import OrientationPreview from '@components/home/OrientationPreview';
import Programs from '@components/home/ProgramsWithLogos';
import Testimonials from '@components/home/Testimonials';
import WhyAlpha from '@components/home/WhyAlpha';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('seo');

  return (
    <>
      <SEO
        title={t('home.title')}
        description={t('home.description')}
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
