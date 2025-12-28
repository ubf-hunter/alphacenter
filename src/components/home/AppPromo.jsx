import Badge from '@components/common/Badge';
import Container from '@components/common/Container';
import { motion } from 'framer-motion';
import {
  BookOpen,
  CheckCircle,
  Smartphone,
  TabletSmartphone,
  TrendingUp,
  WifiOff,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'QCM interactifs',
    description: '+2000 questions par matière avec corrections détaillées',
  },
  {
    icon: WifiOff,
    title: 'Mode hors-ligne',
    description: 'Révise même sans connexion internet',
  },
  {
    icon: CheckCircle,
    title: 'Corrections détaillées',
    description: 'Comprends chaque erreur avec des explications claires',
  },
  {
    icon: TrendingUp,
    title: 'Suivi de progression',
    description: 'Visualise tes progrès et identifie tes points faibles',
  },
];

export default function AppPromo() {
  return (
    <section className="py-20 bg-gradient-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-125 h-[500px] bg-orange rounded-full opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full opacity-5 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge variant="apricot" className="mb-6">
              <TabletSmartphone size={16} className="inline mr-1" /> Application
              mobile
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Révise partout avec {' '}
              <span className="text-orange font-cursive italic">l'app Alpha</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Notre application mobile te permet de réviser efficacement où que
              tu sois. QCM, cours, annales corrigées... tout est accessible même
              sans internet.
            </p>

            {/* Features list */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-xl glass-dark"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl hover:bg-gray-100 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Télécharger sur</div>
                  <div className="text-sm font-semibold text-gray-900">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl hover:bg-gray-100 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Disponible sur</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-[280px] h-[560px]">
              {/* Phone body */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />

                {/* Screen */}
                <div className="absolute top-2 left-2 right-2 bottom-2 bg-gradient-to-br from-orange to-orange-600 rounded-[2.5rem] overflow-hidden">
                  {/* App content placeholder */}
                  <div className="p-6 pt-12 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-3xl font-bold text-white">A</span>
                      </div>
                      <h3 className="text-white font-bold text-lg">Alpha</h3>
                      <p className="text-white/70 text-sm">Révise & Réussis</p>
                    </div>

                    {/* Stats cards */}
                    <div className="space-y-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/80 text-sm">
                            Progression
                          </span>
                          <span className="text-white font-bold">78%</span>
                        </div>
                        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                          <div className="h-full w-[78%] bg-white rounded-full" />
                        </div>
                      </div>

                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <Smartphone className="text-white" size={20} />
                          <div>
                            <div className="text-white font-semibold text-sm">
                              2,458 QCM
                            </div>
                            <div className="text-white/70 text-xs">
                              répondus cette semaine
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <TrendingUp className="text-white" size={20} />
                          <div>
                            <div className="text-white font-semibold text-sm">
                              Top 5%
                            </div>
                            <div className="text-white/70 text-xs">
                              des utilisateurs
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-orange rounded-[4rem] opacity-20 blur-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
