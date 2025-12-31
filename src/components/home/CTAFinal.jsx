import Button from '@components/common/Button';
import Container from '@components/common/Container';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Rocket } from 'lucide-react';

export default function CTAFinal() {
  return (
    <section className="py-20 bg-off-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-orange rounded-full opacity-5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-navy rounded-full opacity-5 blur-[80px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Glass card */}
          <div className="p-8 md:p-12 rounded-3xl glass text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange to-orange-600 text-white mb-6">
              <Rocket size={40} />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Pret a realiser ton reve professionnel ?
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Inscris-toi maintenant pour la prochaine session et commence ton
              parcours vers l'excellence. Les places sont limitées !
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange">Jan 2025</div>
                <div className="text-sm text-gray-500">Prochaine session</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-orange">25</div>
                <div className="text-sm text-gray-500">Places restantes</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-orange">85%</div>
                <div className="text-sm text-gray-500">Taux de reussite</div>
              </div>
            </div>

            {/* CTA Button */}
            <Button variant="primary" size="lg" to="/inscription">
              Je m'inscris maintenant
              <ArrowRight size={20} />
            </Button>

            {/* Contact info */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">
                Des questions ? Contacte-nous directement
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="tel:+2376XXXXXXXX"
                  className="inline-flex items-center gap-2 text-navy hover:text-orange transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium">+237 6XX XXX XXX</span>
                </a>
                <a
                  href="mailto:contact@alpha-center.cm"
                  className="inline-flex items-center gap-2 text-navy hover:text-orange transition-colors"
                >
                  <Mail size={18} />
                  <span className="font-medium">contact@alpha-center.cm</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
