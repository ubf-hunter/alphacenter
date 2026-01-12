// ============================================
// CONTACT MAP - Section Google Maps
// ============================================

import Container from '@components/common/Container';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Navigation } from 'lucide-react';
import { contactInfo, mapConfig } from '../../data/contact';

export default function ContactMap() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full text-orange font-medium text-sm mb-4">
            <MapPin size={16} />
            Notre localisation
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">
            Retrouve-nous a Yaounde
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            {contactInfo.address.full}
            <br />
            <span className="text-sm">{contactInfo.address.landmark}</span>
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 border border-white/50"
        >
          {/* Google Maps iframe */}
          <iframe
            src={mapConfig.embedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alpha Center - Yaounde"
            className="w-full"
          />

          {/* Overlay avec boutons */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
            {/* Info card */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-orange" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-navy text-sm truncate">
                  Alpha Center
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {contactInfo.address.street}, {contactInfo.address.city}
                </p>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex gap-2">
              <a
                href={mapConfig.directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg text-navy font-medium text-sm hover:bg-white transition-colors"
              >
                <Navigation size={16} className="text-orange" />
                <span className="hidden sm:inline">Itineraire</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapConfig.lat},${mapConfig.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy text-white rounded-xl shadow-lg font-medium text-sm hover:bg-navy-700 transition-colors"
              >
                <ExternalLink size={16} />
                <span className="hidden sm:inline">Google Maps</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Infos supplementaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              title: 'En transport',
              description: 'Bus et taxis disponibles. Arret Omnisports.',
              icon: '🚌',
            },
            {
              title: 'En voiture',
              description: 'Parking gratuit disponible sur place.',
              icon: '🚗',
            },
            {
              title: 'A pied',
              description: '5 min a pied de la station Omnisports.',
              icon: '🚶',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-navy text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
