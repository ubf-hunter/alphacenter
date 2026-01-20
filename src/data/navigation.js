// Icon names from lucide-react - will be mapped in components
export const mainNavigation = [
  {
    label: 'Accueil',
    href: '/',
    type: 'link',
  },
  {
    label: 'Programmes',
    href: '/services',
    type: 'link',
  },
  {
    label: "L'application",
    href: '/application',
    type: 'link',
  },
  {
    label: 'Ressources',
    href: '/ressources',
    type: 'link',
  },
  {
    label: 'Orientation',
    type: 'megamenu',
    megamenu: {
      metiers: {
        title: 'Explore les metiers',
        titleIcon: 'Target',
        items: [
          {
            label: 'Ingenieur Genie Civil',
            href: '/orientation/metiers/ingenieur-genie-civil',
            icon: 'Building2',
          },
          {
            label: 'Ingenieur Informatique',
            href: '/orientation/metiers/ingenieur-informatique',
            icon: 'Monitor',
          },
          {
            label: 'Ingenieur Telecom',
            href: '/orientation/metiers/ingenieur-telecom',
            icon: 'Zap',
          },
          {
            label: 'Medecin',
            href: '/orientation/metiers/medecin',
            icon: 'Users',
          },
        ],
        viewAll: {
          label: 'Voir tous les metiers',
          href: '/orientation/metiers',
        },
      },
      ecoles: {
        title: 'Decouvre les ecoles',
        titleIcon: 'GraduationCap',
        cameroun: [
          { label: 'ENSPY (Polytechnique)', href: '/orientation/ecoles/enspy' },
          { label: 'ENSTP', href: '/orientation/ecoles/enstp' },
          { label: "SUP'PTIC", href: '/orientation/ecoles/supptic' },
          { label: 'FMSB Yaounde', href: '/orientation/ecoles/fmsb' },
          { label: 'FHS Buea', href: '/orientation/ecoles/fhs-buea' },
          { label: 'ESSEC Douala', href: '/orientation/ecoles/essec' },
          { label: 'UCAC', href: '/orientation/ecoles/ucac' },
          { label: 'IUC', href: '/orientation/ecoles/iuc' },
        ],
        etranger: [
          {
            label: 'Polytechnique Paris',
            href: '/orientation/ecoles/polytechnique-paris',
          },
          { label: 'EPFL Suisse', href: '/orientation/ecoles/epfl' },
        ],
        viewAll: {
          label: 'Voir toutes les ecoles',
          href: '/orientation/ecoles',
        },
      },
      cta: {
        icon: 'Lightbulb',
        text: 'Tu ne sais pas quel metier choisir ?',
        subtext: "Explore notre guide d'orientation complet",
        href: '/orientation',
      },
    },
  },
  {
    label: 'À propos',
    type: 'dropdown',
    items: [
      {
        label: 'Qui sommes-nous',
        href: '/a-propos/qui-sommes-nous',
        icon: 'Building2',
        description: 'Notre histoire et nos valeurs',
      },
      {
        label: 'Notre équipe',
        href: '/a-propos/equipe',
        icon: 'Users',
        description: '12 enseignants passionnés',
      },
      {
        label: 'Nos résultats',
        href: '/a-propos/resultats',
        icon: 'BarChart3',
        description: '85% de taux de réussite',
      },
    ],
  },
];

export const ctaButtons = [
  { label: 'Contact', href: '/contact', variant: 'ghost' },
  { label: "S'inscrire", href: '#', variant: 'primary', isModal: true },
];

export const footerNavigation = {
  navigation: [
    { label: 'Accueil', href: '/' },
    { label: 'Programmes', href: '/services' },
    { label: 'Ressources', href: '/ressources' },
    { label: 'Qui sommes-nous', href: '/a-propos/qui-sommes-nous' },
    { label: 'Notre équipe', href: '/a-propos/equipe' },
    { label: 'Nos résultats', href: '/a-propos/resultats' },
    { label: "L'application", href: '/application' },
  ],
  orientation: [
    { label: 'Hub Orientation', href: '/orientation' },
    { label: 'Les métiers', href: '/orientation/metiers' },
    { label: 'Les écoles', href: '/orientation/ecoles' },
  ],
  contact: {
    address: 'Yaoundé, Cameroun',
    phone: '+237  670102293',
    email: 'contact@alpha-center.cm',
  },
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'CGU', href: '/cgu' },
    { label: 'Politique de confidentialité', href: '/confidentialite' },
  ],
  social: [
    { label: 'Facebook', href: '#', icon: 'Facebook' },
    { label: 'Instagram', href: '#', icon: 'Instagram' },
    { label: 'LinkedIn', href: '#', icon: 'Linkedin' },
    { label: 'WhatsApp', href: '#', icon: 'MessageCircle' },
  ],
};
