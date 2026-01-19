// ============================================
// PURCHASE INFO - Informations d'achat
// Processus, paiement, livraison, garanties
// ============================================

import {
  Download,
  Headphones,
  MessageCircle,
  RefreshCw,
  Search,
  Shield,
  Smartphone,
} from 'lucide-react';

// ===== PROCESSUS D'ACHAT =====
export const purchaseProcess = [
  {
    step: 1,
    title: 'Choisissez vos documents',
    description:
      'Parcourez notre catalogue et selectionnez les ressources qui vous interessent',
    icon: Search,
  },
  {
    step: 2,
    title: 'Contactez-nous sur WhatsApp',
    description:
      "Cliquez sur 'Commander' pour nous envoyer votre commande via WhatsApp",
    icon: MessageCircle,
  },
  {
    step: 3,
    title: 'Payez par Mobile Money',
    description: 'Reglez votre commande par Orange Money ou MTN MoMo',
    icon: Smartphone,
  },
  {
    step: 4,
    title: 'Recevez vos documents',
    description:
      'Version digitale par email/WhatsApp. Version physique a retirer au centre ou livraison.',
    icon: Download,
  },
];

// ===== MOYENS DE PAIEMENT =====
export const paymentMethods = [
  {
    id: 'orange-money',
    name: 'Orange Money',
    icon: '/images/payment/orange-money.png',
    number: '6 XX XXX XXX',
    color: 'orange',
  },
  {
    id: 'mtn-momo',
    name: 'MTN Mobile Money',
    icon: '/images/payment/mtn-momo.png',
    number: '6 XX XXX XXX',
    color: 'yellow',
  },
];

// ===== LIVRAISON =====
export const deliveryOptions = {
  digital: {
    method: 'Email ou WhatsApp',
    delay: 'Immediat apres confirmation du paiement',
    format: 'PDF haute qualite',
    cost: 0,
  },
  physical: [
    {
      id: 'pickup',
      name: 'Retrait au centre',
      location: 'Alpha Center, Omnisports, Yaounde',
      delay: 'Sous 24h',
      cost: 0,
    },
    {
      id: 'delivery-yaounde',
      name: 'Livraison Yaounde',
      delay: '24-48h',
      cost: 1500,
    },
    {
      id: 'delivery-other',
      name: 'Livraison autres villes',
      delay: '3-5 jours',
      cost: 2500,
    },
  ],
};

// ===== GARANTIES =====
export const guarantees = [
  {
    id: 'quality',
    title: 'Qualite garantie',
    description: 'Documents rediges par nos enseignants experts',
    icon: Shield,
    color: 'emerald',
  },
  {
    id: 'refund',
    title: 'Satisfait ou rembourse',
    description: 'Remboursement sous 7 jours si non satisfait (version digitale)',
    icon: RefreshCw,
    color: 'blue',
  },
  {
    id: 'support',
    title: 'Support inclus',
    description: 'Posez vos questions via notre groupe WhatsApp',
    icon: Headphones,
    color: 'purple',
  },
  {
    id: 'updates',
    title: 'Mises a jour gratuites',
    description: 'Recevez les mises a jour annuelles gratuitement',
    icon: Download,
    color: 'orange',
  },
];

// ===== CONTACT COMMANDE =====
export const orderContact = {
  whatsapp: '+237 691 034 397',
  whatsappClean: '237691034397',
  email: 'contact@alphacenter.cm',
};

// ===== GENERATION LIEN WHATSAPP =====
export const generateWhatsAppLink = (product, format = 'digital') => {
  const price = product.pricing[format] || product.pricing.digital;
  const formatLabel =
    format === 'digital' ? 'Version digitale (PDF)' : 'Version imprimee';

  const message = encodeURIComponent(
    `Bonjour Alpha Center !\n\n` +
      `Je souhaite commander :\n` +
      `*${product.name}*\n` +
      `Format : ${formatLabel}\n` +
      `Prix : ${price?.toLocaleString()} FCFA\n\n` +
      `Merci de me confirmer la disponibilite et les modalites de paiement.`
  );

  return `https://wa.me/${orderContact.whatsappClean}?text=${message}`;
};

// ===== FAQ ACHAT =====
export const purchaseFAQ = [
  {
    question: 'Quels formats sont disponibles ?',
    answer:
      'Tous nos documents sont disponibles en version digitale (PDF) et en version imprimee. Certains packs proposent un tarif reduit pour les deux formats.',
  },
  {
    question: 'Comment payer ma commande ?',
    answer:
      'Nous acceptons Orange Money et MTN Mobile Money. Apres avoir clique sur "Commander", vous recevrez les instructions de paiement via WhatsApp.',
  },
  {
    question: 'Combien de temps pour recevoir ma commande ?',
    answer:
      'La version digitale est envoyee immediatement apres confirmation du paiement. Pour la version imprimee, comptez 24h pour le retrait au centre ou 24-48h pour la livraison a Yaounde.',
  },
  {
    question: 'Puis-je etre rembourse si je ne suis pas satisfait ?',
    answer:
      'Oui, pour les versions digitales uniquement. Vous avez 7 jours pour demander un remboursement si le contenu ne correspond pas a vos attentes.',
  },
  {
    question: 'Les documents sont-ils mis a jour ?',
    answer:
      "Oui, nous mettons a jour nos documents chaque annee avec les derniers sujets d'annales et les evolutions des programmes. Les acheteurs recoivent les mises a jour gratuitement.",
  },
  {
    question: 'Puis-je partager les documents avec mes amis ?',
    answer:
      'Les documents sont strictement personnels et ne peuvent pas etre partages. Chaque fichier PDF est nomme avec les informations de l\'acheteur.',
  },
];

export default {
  purchaseProcess,
  paymentMethods,
  deliveryOptions,
  guarantees,
  orderContact,
  generateWhatsAppLink,
  purchaseFAQ,
};
