// ============================================
// DOWNLOAD CTA - Section finale telechargement
// Gradient + Mockup + Boutons download
// ============================================

import { motion } from 'framer-motion';
import { Download, Smartphone, Sparkles } from 'lucide-react';
import Container from '@components/common/Container';

export default function DownloadCTA() {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-br from-navy via-navy to-navy/95 relative overflow-hidden">
      {/* Pattern decoratif */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Blobs decoratifs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu gauche */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles size={16} className="text-orange" />
              <span className="text-sm font-medium text-white/90">
                Gratuit sur iOS et Android
              </span>
            </div>

            {/* Titre */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Telecharge{' '}
              <span className="text-orange italic font-cursive">Alpha</span>
              <br />
              et commence a reviser
            </h2>

            {/* Description */}
            <p className="text-lg text-white/70 max-w-lg mb-8">
              Rejoins les 2000+ etudiants qui preparent leurs concours avec Alpha.
              Disponible 24h/24, meme sans connexion internet.
            </p>

            {/* Boutons telechargement */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* App Store */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Telecharger sur</div>
                  <div className="text-base font-semibold text-gray-900">App Store</div>
                </div>
              </motion.a>

              {/* Google Play */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Disponible sur</div>
                  <div className="text-base font-semibold text-gray-900">Google Play</div>
                </div>
              </motion.a>
            </div>

            {/* Stats rapides */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-orange">2000+</div>
                <div className="text-sm text-white/60">Utilisateurs actifs</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-orange">4.8/5</div>
                <div className="text-sm text-white/60">Note moyenne</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-orange">5</div>
                <div className="text-sm text-white/60">Concours prepares</div>
              </div>
            </div>
          </motion.div>

          {/* Mockup droite */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative w-64 h-[520px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl shadow-black/50">
                {/* Boutons lateraux */}
                <div className="absolute -left-1 top-24 w-1 h-8 bg-gray-800 rounded-l-sm" />
                <div className="absolute -left-1 top-36 w-1 h-12 bg-gray-800 rounded-l-sm" />
                <div className="absolute -right-1 top-32 w-1 h-16 bg-gray-800 rounded-r-sm" />

                {/* Ecran */}
                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-full z-20" />

                  {/* Contenu ecran */}
                  <div className="w-full h-full bg-linear-to-br from-orange/10 via-white to-navy/10 flex flex-col items-center justify-center p-6">
                    {/* Logo app */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-20 h-20 bg-linear-to-br from-orange to-orange/80 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-orange/30"
                    >
                      <span className="text-white font-black text-3xl">A</span>
                    </motion.div>

                    <h3 className="text-navy font-bold text-xl mb-2">Alpha</h3>
                    <p className="text-gray-500 text-sm text-center mb-6">
                      Prepare ton concours
                    </p>

                    {/* Fake download button */}
                    <div className="flex items-center gap-2 px-6 py-3 bg-orange text-white rounded-full text-sm font-medium">
                      <Download size={18} />
                      Installer
                    </div>
                  </div>

                  {/* Reflet */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
              </div>

              {/* Cercles decoratifs */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-white/10 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border-2 border-orange/20 rounded-full" />

              {/* Badge flottant */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -left-4 px-4 py-2 bg-white rounded-full shadow-lg flex items-center gap-2"
              >
                <Smartphone size={18} className="text-orange" />
                <span className="text-sm font-medium text-navy">iOS & Android</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
