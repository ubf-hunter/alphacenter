// Icon names from lucide-react - will be mapped in components
export const mainNavigation = [
  {
    label: 'Accueil',
    tKey: 'main.home',
    href: '/',
    type: 'link',
  },
  {
    label: 'Programmes',
    tKey: 'main.programmes',
    href: '/services',
    type: 'link',
  },
  {
    label: "L'application",
    tKey: 'main.application',
    href: '/application',
    type: 'link',
    disabled: true,
    disabledMessage: 'Bientôt disponible',
    disabledMessageKey: 'disabled.comingSoon',
  },
  {
    label: 'Ressources',
    tKey: 'main.resources',
    href: '/ressources',
    type: 'link',
  },
  {
    label: 'Orientation',
    tKey: 'main.orientation',
    type: 'megamenu',
    megamenu: {
      metiers: {
        title: 'Explore les metiers',
        tKey: 'megamenu.metiers.title',
        titleIcon: 'Target',
        items: [
          {
            label: 'Ingenieur Genie Civil',
            tKey: 'megamenu.metiers.civilEngineer',
            href: '/orientation/metiers/ingenieur-genie-civil',
            icon: 'Building2',
          },
          {
            label: 'Ingenieur Informatique',
            tKey: 'megamenu.metiers.computerEngineer',
            href: '/orientation/metiers/ingenieur-informatique',
            icon: 'Monitor',
          },
          {
            label: 'Ingenieur Telecom',
            tKey: 'megamenu.metiers.telecomEngineer',
            href: '/orientation/metiers/ingenieur-telecom',
            icon: 'Zap',
          },
          {
            label: 'Medecin',
            tKey: 'megamenu.metiers.doctor',
            href: '/orientation/metiers/medecin',
            icon: 'Users',
          },
        ],
        viewAll: {
          label: 'Voir tous les metiers',
          tKey: 'megamenu.metiers.viewAll',
          href: '/orientation/metiers',
        },
      },
      ecoles: {
        title: 'Decouvre les ecoles',
        tKey: 'megamenu.ecoles.title',
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
          tKey: 'megamenu.ecoles.viewAll',
          href: '/orientation/ecoles',
        },
      },
      cta: {
        icon: 'Lightbulb',
        text: 'Tu ne sais pas quel metier choisir ?',
        textKey: 'megamenu.cta.text',
        subtext: "Explore notre guide d'orientation complet",
        subtextKey: 'megamenu.cta.subtext',
        href: '/orientation',
      },
    },
  },
  {
    label: 'À propos',
    tKey: 'main.about',
    type: 'dropdown',
    items: [
      {
        label: 'Qui sommes-nous',
        tKey: 'about.whoWeAre',
        href: '/a-propos/qui-sommes-nous',
        icon: 'Building2',
        description: 'Notre histoire et nos valeurs',
        descKey: 'about.whoWeAreDesc',
      },
      {
        label: 'Notre équipe',
        tKey: 'about.team',
        href: '/a-propos/equipe',
        icon: 'Users',
        description: '12 enseignants passionnés',
        descKey: 'about.teamDesc',
      },
      {
        label: 'Nos résultats',
        tKey: 'about.results',
        href: '/a-propos/resultats',
        icon: 'BarChart3',
        description: '85% de taux de réussite',
        descKey: 'about.resultsDesc',
      },
    ],
  },
];

export const ctaButtons = [
  { label: 'Contact', tKey: 'cta.contact', href: '/contact', variant: 'ghost' },
  { label: "S'inscrire", tKey: 'cta.register', href: '#', variant: 'primary', isModal: true },
];

export const footerNavigation = {
  navigation: [
    { label: 'Accueil', tKey: 'footerNav.home', href: '/' },
    { label: 'Programmes', tKey: 'footerNav.programmes', href: '/services' },
    { label: 'Ressources', tKey: 'footerNav.resources', href: '/ressources' },
    { label: 'Qui sommes-nous', tKey: 'footerNav.whoWeAre', href: '/a-propos/qui-sommes-nous' },
    { label: 'Notre équipe', tKey: 'footerNav.team', href: '/a-propos/equipe' },
    { label: 'Nos résultats', tKey: 'footerNav.results', href: '/a-propos/resultats' },
    { label: "L'application", tKey: 'footerNav.application', href: '/application' },
  ],
  orientation: [
    { label: 'Hub Orientation', tKey: 'footerOrientation.hub', href: '/orientation' },
    { label: 'Les métiers', tKey: 'footerOrientation.careers', href: '/orientation/metiers' },
    { label: 'Les écoles', tKey: 'footerOrientation.schools', href: '/orientation/ecoles' },
  ],
  contact: {
    address: 'Yaoundé, Cameroun',
    phone: '+237  670102293',
    email: 'contact@alpha-center.cm',
  },
  legal: [
    { label: 'Mentions légales', tKey: 'legal.legalNotice', href: '/mentions-legales' },
    { label: 'CGU', tKey: 'legal.terms', href: '/cgu' },
    { label: 'Politique de confidentialité', tKey: 'legal.privacy', href: '/confidentialite' },
  ],
  social: [
    { label: 'Facebook', href: '#', icon: 'Facebook' },
    { label: 'Instagram', href: '#', icon: 'Instagram' },
    { label: 'LinkedIn', href: '#', icon: 'Linkedin' },
    { label: 'WhatsApp', href: '#', icon: 'MessageCircle' },
  ],
};
