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
