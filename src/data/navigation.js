// Icon names from lucide-react - will be mapped in components
export const mainNavigation = [
  {
    label: 'Accueil',
    href: '/',
    type: 'link'
  },
  {
    label: 'Programmes',
    href: '/services',
    type: 'link'
  },
  {
    label: "L'application",
    href: '/application',
    type: 'link'
  },
  {
    label: 'Orientation',
    type: 'megamenu',
    megamenu: {
      metiers: {
        title: 'Explore les métiers',
        titleIcon: 'Target',
        items: [
          { label: 'Génie Civil', href: '/orientation/metiers/genie-civil', icon: 'Building2' },
          { label: 'Génie Informatique', href: '/orientation/metiers/genie-informatique', icon: 'Monitor' },
          { label: 'Génie Électrique', href: '/orientation/metiers/genie-electrique', icon: 'Zap' },
          { label: 'Génie Mécanique', href: '/orientation/metiers/genie-mecanique', icon: 'Wrench' },
        ],
        viewAll: { label: 'Voir tous les métiers', href: '/orientation/metiers' }
      },
      ecoles: {
        title: 'Découvre les écoles',
        titleIcon: 'GraduationCap',
        cameroun: [
          { label: 'ENSP Yaoundé', href: '/orientation/ecoles/ensp-yaounde' },
          { label: 'ENSTP', href: '/orientation/ecoles/enstp' },
          { label: 'ENS Yaoundé', href: '/orientation/ecoles/ens-yaounde' },
        ],
        etranger: [
          { label: 'Polytechnique Paris', href: '/orientation/ecoles/polytechnique-paris' },
          { label: 'EPFL Suisse', href: '/orientation/ecoles/epfl' },
        ],
        viewAll: { label: 'Voir toutes les écoles', href: '/orientation/ecoles' }
      },
      cta: {
        icon: 'Lightbulb',
        text: "Tu ne sais pas quel ingénieur devenir ?",
        subtext: "Explore notre guide d'orientation complet",
        href: '/orientation'
      }
    }
  },
  {
    label: 'À propos',
    type: 'dropdown',
    items: [
      { label: 'Nos résultats', href: '/resultats', icon: 'BarChart3', description: 'Découvre nos taux de réussite' },
      { label: 'Notre équipe', href: '/equipe', icon: 'Users', description: '50+ enseignants passionnés' },
    ]
  }
];

export const ctaButtons = [
  { label: 'Contact', href: '/contact', variant: 'ghost' },
  { label: "S'inscrire", href: '/inscription', variant: 'primary' }
];

export const footerNavigation = {
  navigation: [
    { label: 'Accueil', href: '/' },
    { label: 'Programmes', href: '/services' },
    { label: 'Résultats', href: '/resultats' },
    { label: 'Notre équipe', href: '/equipe' },
    { label: "L'application", href: '/application' },
  ],
  orientation: [
    { label: 'Hub Orientation', href: '/orientation' },
    { label: 'Les métiers', href: '/orientation/metiers' },
    { label: 'Les écoles', href: '/orientation/ecoles' },
  ],
  contact: {
    address: 'Yaoundé, Cameroun',
    phone: '+237 6XX XXX XXX',
    email: 'contact@alpha-center.cm'
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
  ]
};
