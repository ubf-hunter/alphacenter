// ============================================
// CONTACT DATA - Informations de contact Alpha Center
// ============================================

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

// Informations de contact
export const contactInfo = {
  // Adresse
  address: {
    street: 'Complexe scolaire adventiste, Quartier Odza',
    city: 'Yaounde',
    country: 'Cameroun',
    landmark: 'Complexe scolaire adventiste d\'odza',
    full: 'Quartier Odza, Complexe scolaire adventiste, Yaounde, Cameroun',
  },

  // Telephones
  phones: [
    {
      label: 'WhatsApp',
      number: '+237 670 102 293',
      formatted: '+237670102293',
      isPrimary: true,
      icon: MessageCircle,
    },
    {
      label: 'Appels',
      number: '+237 670 102 293',
      formatted: '+237670102293',
      isPrimary: false,
      icon: Phone,
    },
  ],

  // Email
  email: {
    address: 'contact@alphacenter.cm',
    label: 'Email',
    icon: Mail,
  },

  // Horaires
  hours: {
    weekdays: 'Lundi - Vendredi : 08h00 - 18h00',
    saturday: 'Samedi : 09h00 - 15h00',
    sunday: 'Dimanche : Ferme',
    icon: Clock,
  },

  // Reseaux sociaux
  socials: [
    {
      name: 'Facebook',
      url: 'https://facebook.com/alphacentercm',
      icon: Facebook,
      color: '#1877F2',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/alphacentercm',
      icon: Instagram,
      color: '#E4405F',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/alphacentercm',
      icon: Linkedin,
      color: '#0A66C2',
    },
  ],

  // WhatsApp configuration
  whatsapp: {
    number: '+237670102293',
    defaultMessage:
      "Bonjour Alpha Center ! J'aimerais avoir des informations sur vos programmes de preparation aux concours.",
  },
};

// Coordonnees Google Maps (Yaounde - Odza)
export const mapConfig = {
  lat: 3.8667,
  lng: 11.5167,
  zoom: 15,
  // URL d'embed Google Maps (a remplacer par la vraie URL)
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.0!2d11.5167!3d3.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTInMDAuMSJOIDExwrAzMScwMC4xIkU!5e0!3m2!1sfr!2scm!4v1700000000000',
  // Lien direct vers Google Maps
  directUrl: 'https://goo.gl/maps/YaoundeOmnisports',
};

// Options de programmes pour le formulaire
export const programmeOptions = [
  { value: '', label: 'Selectionne un programme' },
  { value: 'ingenieur', label: 'Concours Ingenieur (ENSP, ENSTP, FGI)' },
  { value: 'medecine', label: 'Concours Medecine (FMSB)' },
  { value: 'infirmier', label: 'Concours Infirmier (CESSI, Ecoles de sante)' },
  { value: 'orientation', label: "Besoin d'orientation" },
  { value: 'autre', label: 'Autre question' },
];

// Fonction pour generer l'URL WhatsApp
export const getWhatsAppUrl = (formData = null) => {
  const baseNumber = contactInfo.whatsapp.number.replace(/[^0-9]/g, '');

  if (!formData) {
    return `https://wa.me/${baseNumber}?text=${encodeURIComponent(contactInfo.whatsapp.defaultMessage)}`;
  }

  const message = `Bonjour Alpha Center !

Je suis ${formData.name || 'un(e) etudiant(e)'}.
${formData.email ? `Email : ${formData.email}` : ''}

Programme qui m'interesse : ${formData.programme || 'Non precise'}

Message :
${formData.message || 'Je souhaite avoir plus d\'informations.'}

Merci !`;

  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
};

// Donnees SEO pour la page
export const contactSEO = {
  title: 'Contact - Alpha Center | Preparation Concours Yaounde',
  description:
    'Contactez Alpha Center a Yaounde pour vos questions sur la preparation aux concours ENSP, ENSTP, FMBS, CESSI. WhatsApp, telephone, email disponibles.',
  keywords:
    'contact alpha center, prepa concours yaounde, inscription concours cameroun, preparation ENSP, preparation FMBS',
};
