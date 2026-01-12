// ============================================
// CONTACT INFO - Cards d'informations de contact
// ============================================

import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contactInfo, getWhatsAppUrl } from '../../data/contact';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 20, stiffness: 100 },
  },
};

// Composant Card Info
function InfoCard({ icon: Icon, title, children, onClick, href, isHighlight }) {
  const Component = onClick || href ? 'a' : 'div';
  const props = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {};

  return (
    <motion.div variants={cardVariants}>
      <Component
        {...props}
        onClick={onClick}
        className={`
          flex items-start gap-4 p-5 rounded-xl
          bg-white/80 backdrop-blur-sm border border-white/50
          shadow-lg shadow-navy/5
          hover:shadow-xl hover:border-orange/30 hover:-translate-y-1
          transition-all duration-300
          ${onClick || href ? 'cursor-pointer' : ''}
          ${isHighlight ? 'ring-2 ring-orange/20' : ''}
          group
        `}
      >
        {/* Icone */}
        <div
          className={`
            w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
            transition-colors duration-300
            ${isHighlight
              ? 'bg-gradient-to-br from-green-500/20 to-green-500/10 group-hover:from-green-500/30 group-hover:to-green-500/20'
              : 'bg-gradient-to-br from-orange/10 to-orange/5 group-hover:from-orange/20 group-hover:to-orange/10'
            }
          `}
        >
          <Icon
            size={22}
            className={isHighlight ? 'text-green-600' : 'text-orange'}
          />
        </div>

        {/* Contenu */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-navy mb-1">{title}</h3>
          {children}
        </div>
      </Component>
    </motion.div>
  );
}

export default function ContactInfo() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(), '_blank');
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* WhatsApp - Card principale */}
      <InfoCard
        icon={MessageCircle}
        title="WhatsApp"
        onClick={handleWhatsAppClick}
        isHighlight
      >
        <p className="text-bark">{contactInfo.phones[0].number}</p>
        <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          Disponible maintenant
        </span>
      </InfoCard>

      {/* Telephone */}
      <InfoCard
        icon={Phone}
        title="Telephone"
        href={`tel:${contactInfo.phones[1].formatted}`}
      >
        <p className="text-bark">{contactInfo.phones[1].number}</p>
        <span className="text-xs text-gray-500 mt-1 block">
          Appels directs disponibles
        </span>
      </InfoCard>

      {/* Email */}
      <InfoCard
        icon={Mail}
        title="Email"
        href={`mailto:${contactInfo.email.address}`}
      >
        <p className="text-bark break-all">{contactInfo.email.address}</p>
        <span className="text-xs text-gray-500 mt-1 block">
          Reponse sous 24-48h
        </span>
      </InfoCard>

      {/* Adresse */}
      <InfoCard icon={MapPin} title="Adresse">
        <p className="text-bark">{contactInfo.address.street}</p>
        <p className="text-bark">
          {contactInfo.address.city}, {contactInfo.address.country}
        </p>
        <span className="text-xs text-gray-500 mt-1 block">
          {contactInfo.address.landmark}
        </span>
      </InfoCard>

      {/* Horaires */}
      <InfoCard icon={Clock} title="Horaires d'ouverture">
        <div className="space-y-1 text-sm text-bark">
          <p>{contactInfo.hours.weekdays}</p>
          <p>{contactInfo.hours.saturday}</p>
          <p className="text-gray-400">{contactInfo.hours.sunday}</p>
        </div>
      </InfoCard>

      {/* Reseaux sociaux */}
      <motion.div variants={cardVariants} className="pt-4">
        <h3 className="text-sm font-semibold text-navy mb-3">
          Suivez-nous sur les reseaux
        </h3>
        <div className="flex gap-3">
          {contactInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:border-transparent transition-all duration-300"
              style={{ '--hover-bg': social.color }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = social.color)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
              aria-label={social.name}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
