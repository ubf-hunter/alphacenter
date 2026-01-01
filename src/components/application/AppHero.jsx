// ============================================
// APP HERO - Section hero page Application
// Mockups + CTA telechargement + Stats
// ============================================

import { appStats } from '@/data/application';
import Container from '@components/common/Container';
import { motion } from 'framer-motion';
import { Sparkles, Star, WifiOff } from 'lucide-react';

// Placeholder pour screenshot (a remplacer par vrais screenshots)
const placeholderScreen = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=600&fit=crop';

export default function AppHero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background avec pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-navy via-navy/95 to-navy">
        {/* Pattern decoratif */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Blobs decoratifs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Contenu gauche */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <Sparkles size={16} className="text-orange" />
              <span className="text-sm font-medium text-white/90">
                Disponible sur iOS et Android
              </span>
            </motion.div>

            {/* Titre */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ color: 'white' }}
            >
              Revise{' '}
              <span className="text-orange italic font-cursive">partout</span>
              <br />
              avec Alpha
            </h1>

            {/* Sous-titre */}
            <p className="text-lg lg:text-xl text-white/70 max-w-xl mb-8">
              Mode hors-ligne complet, tous les concours du Cameroun dans ta
              poche. 1000+ exercices corriges, planning IA et communaute
              d'entraide.
            </p>

            {/* Badges features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
                <WifiOff size={16} />
                Mode hors-ligne
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white/80">
                <Star size={16} className="text-yellow-400" />
                4.8 sur App Store
              </span>
            </div>

            {/* Boutons telechargement */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              {/* App Store */}
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Telecharger sur</div>
                  <div className="text-base font-semibold text-gray-900">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-white rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Disponible sur</div>
                  <div className="text-base font-semibold text-gray-900">
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10">
              {appStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-orange">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mockups droite */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone principal */}
              <div className="relative z-20">
                <div className="relative w-64 h-130 bg-gray-900 rounded-[3rem] p-2 shadow-2xl shadow-black/50">
                  {/* Boutons lateraux */}
                  <div className="absolute -left-1 top-24 w-1 h-8 bg-gray-800 rounded-l-sm" />
                  <div className="absolute -left-1 top-36 w-1 h-12 bg-gray-800 rounded-l-sm" />
                  <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-800 rounded-r-sm" />

                  {/* Ecran */}
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-full z-20" />

                    {/* Contenu ecran - Placeholder */}
                    <div className="w-full h-full bg-linear-to-br from-orange/10 via-white to-navy/10 flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 bg-orange rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <span className="text-white font-black text-2xl">
                          A
                        </span>
                      </div>
                      <h3 className="text-navy font-bold text-lg mb-2">
                        Alpha App
                      </h3>
                      <p className="text-gray-500 text-sm text-center">
                        Prepare ton concours partout, meme sans internet
                      </p>
                    </div>

                    {/* Reflet */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Home indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
                </div>
              </div>

              {/* Phone secondaire (arriere-plan gauche) */}
              <div className="absolute -left-20 top-10 z-10 hidden lg:block">
                <div className="relative w-48 h-96 bg-gray-900 rounded-[2.5rem] p-1.5 shadow-xl shadow-black/30 -rotate-12 opacity-60">
                  <div className="w-full h-full bg-linear-to-br from-navy to-navy/80 rounded-4xl overflow-hidden">
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Phone secondaire (arriere-plan droite) */}
              <div className="absolute -right-16 top-20 z-10 hidden lg:block">
                <div className="relative w-48 h-96 bg-gray-900 rounded-[2.5rem] p-1.5 shadow-xl shadow-black/30 rotate-12 opacity-60">
                  <div className="w-full h-full bg-linear-to-br from-orange/80 to-orange rounded-4xl overflow-hidden">
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Cercles decoratifs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-orange/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Vague decorative en bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-off-white"
          />
        </svg>
      </div>
    </section>
  );
}
