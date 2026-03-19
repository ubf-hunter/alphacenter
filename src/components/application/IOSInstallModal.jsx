// ============================================
// IOS INSTALL MODAL - Instructions PWA iOS
// Modal expliquant comment installer l'app sur iPhone
// ============================================

import { motion, AnimatePresence } from 'framer-motion';
import { X, Share, PlusSquare, Smartphone } from 'lucide-react';

export default function IOSInstallModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl max-w-md w-full p-8 relative shadow-2xl">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200">
                  <Smartphone size={32} className="text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                Installer Alpha sur iPhone
              </h3>
              <p className="text-gray-500 text-center text-sm mb-8">
                Suis ces 3 etapes pour ajouter Alpha a ton ecran d'accueil
              </p>

              {/* Steps */}
              <div className="space-y-5">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Ouvre dans Safari
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Va sur <span className="font-medium text-orange-500">alphacenter.cm</span> avec Safari
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 flex items-center gap-2">
                      Appuie sur Partager
                      <Share size={16} className="text-blue-500" />
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      L'icone carre avec la fleche vers le haut, en bas de Safari
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 flex items-center gap-2">
                      "Sur l'ecran d'accueil"
                      <PlusSquare size={16} className="text-gray-600" />
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Choisis cette option dans le menu qui apparait
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={onClose}
                className="w-full mt-8 py-3.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-xl hover:from-orange-500 hover:to-orange-600 transition-all shadow-lg shadow-orange-200"
              >
                Compris !
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
