import {
  GraduationCap,
  Building2,
  Landmark,
  BookOpen,
  Calculator,
  Atom,
  FlaskConical,
  Monitor,
  Ruler,
  Cog,
  PenTool,
  Brain,
  Users,
  Target,
  Clock,
  Calendar,
  Award,
  TrendingUp,
  CheckCircle,
  FileText,
  Video,
  MessageSquare,
} from 'lucide-react';

// Programmes principaux
export const programmes = [
  {
    id: 'ensp',
    name: 'Programme ENSP',
    school: 'École Nationale Supérieure Polytechnique',
    shortName: 'ENSP',
    tagline: 'Deviens ingénieur polytechnicien',
    description:
      "Préparation intensive aux concours d'entrée à l'ENSP, la plus prestigieuse école d'ingénieurs du Cameroun. Formation complète couvrant toutes les filières : Génie Civil, Informatique, Électrique et Mécanique.",
    duration: '6 mois intensifs',
    sessions: ['Janvier', 'Août'],
    nextSession: 'Janvier 2025',
    placesAvailable: 25,
    format: 'Présentiel + modules en ligne',
    price: 150000,
    priceLabel: '150 000 FCFA/mois',
    successRate: 92,
    studentsPerClass: 25,
    icon: Building2,
    color: 'orange',
    gradient: 'from-orange to-orange-600',
    subjects: [
      { name: 'Mathématiques avancées', icon: Calculator, hours: 120 },
      { name: 'Physique', icon: Atom, hours: 100 },
      { name: 'Chimie', icon: FlaskConical, hours: 60 },
      { name: 'Informatique', icon: Monitor, hours: 40 },
    ],
    features: [
      'Cours structurés par des experts ENSP',
      'Examens blancs hebdomadaires',
      'Corrections détaillées personnalisées',
      'Accès à la plateforme e-learning',
      'Support WhatsApp 7j/7',
      'Simulateurs de concours',
    ],
    testimonial: {
      quote:
        "Grâce à Alpha Center, j'ai intégré l'ENSP du premier coup. La méthode est vraiment efficace !",
      author: 'Jean-Marc T.',
      year: 'Promo 2024',
    },
    requirements: [
      'Baccalauréat C, D, E, F ou équivalent',
      'Niveau minimum de 12/20 en Maths et Physique',
      'Motivation et engagement',
    ],
    badge: 'Plus populaire',
    badgeColor: 'bg-orange text-white',
  },
  {
    id: 'enstp',
    name: 'Programme ENSTP',
    school: 'École Nationale Supérieure des Travaux Publics',
    shortName: 'ENSTP',
    tagline: 'Bâtis les infrastructures de demain',
    description:
      "Formation spécialisée pour réussir le concours de l'ENSTP. Focus sur le génie civil, les travaux publics et les infrastructures. Idéal pour les passionnés de construction.",
    duration: '5 mois intensifs',
    sessions: ['Février', 'Septembre'],
    nextSession: 'Février 2025',
    placesAvailable: 30,
    format: 'Présentiel + travaux dirigés',
    price: 140000,
    priceLabel: '140 000 FCFA/mois',
    successRate: 88,
    studentsPerClass: 25,
    icon: Landmark,
    color: 'navy',
    gradient: 'from-navy to-blue-800',
    subjects: [
      { name: 'Mathématiques', icon: Calculator, hours: 100 },
      { name: 'Physique', icon: Atom, hours: 80 },
      { name: 'Dessin technique', icon: PenTool, hours: 60 },
      { name: 'Mécanique', icon: Cog, hours: 50 },
    ],
    features: [
      'Cours axés sur les spécificités ENSTP',
      'Travaux pratiques en dessin technique',
      'Visites de chantiers (optionnel)',
      'Examens blancs bi-mensuels',
      'Correction personnalisée',
      'Groupe WhatsApp dédié',
    ],
    testimonial: {
      quote:
        "La préparation m'a donné toutes les clés pour réussir. Les profs connaissent parfaitement le concours.",
      author: 'Sylvie M.',
      year: 'Promo 2023',
    },
    requirements: [
      'Baccalauréat C, D, E, F ou équivalent',
      'Aptitude en dessin technique appréciée',
      'Passion pour la construction',
    ],
    badge: 'Recommandé',
    badgeColor: 'bg-navy text-white',
  },
  {
    id: 'ens',
    name: 'Programme ENS',
    school: 'École Normale Supérieure',
    shortName: 'ENS',
    tagline: 'Forme les formateurs de demain',
    description:
      "Préparation complète aux concours de l'ENS, toutes spécialités confondues. Idéal pour ceux qui souhaitent devenir enseignants ou poursuivre en recherche académique.",
    duration: '4 mois intensifs',
    sessions: ['Mars', 'Octobre'],
    nextSession: 'Mars 2025',
    placesAvailable: 35,
    format: 'Présentiel + coaching personnalisé',
    price: 130000,
    priceLabel: '130 000 FCFA/mois',
    successRate: 85,
    studentsPerClass: 20,
    icon: GraduationCap,
    color: 'apricot',
    gradient: 'from-apricot to-orange-300',
    subjects: [
      { name: 'Spécialité au choix', icon: BookOpen, hours: 100 },
      { name: 'Culture générale', icon: Brain, hours: 40 },
      { name: 'Méthodologie', icon: Target, hours: 30 },
      { name: 'Expression écrite', icon: FileText, hours: 30 },
    ],
    features: [
      'Cours adaptés à chaque spécialité',
      'Coaching individuel inclus',
      "Préparation à l'oral",
      'Examens blancs réguliers',
      'Bibliothèque de ressources',
      'Suivi personnalisé',
    ],
    testimonial: {
      quote:
        "Le coaching personnalisé fait vraiment la différence. J'ai progressé de manière incroyable.",
      author: 'Paul K.',
      year: 'Promo 2024',
    },
    requirements: [
      'Baccalauréat toutes séries',
      'Bon niveau dans la spécialité choisie',
      "Intérêt pour l'enseignement",
    ],
    badge: null,
    badgeColor: '',
  },
  {
    id: 'preparatoire',
    name: 'Programme Préparatoire',
    school: 'Pour élèves de Terminale',
    shortName: 'PRÉPA',
    tagline: "Prends de l'avance sur les concours",
    description:
      "Programme de préparation anticipée pour les élèves en classe de Terminale. Permet de renforcer les bases et d'acquérir la méthodologie des concours avant même le Baccalauréat.",
    duration: '3 mois',
    sessions: ["Continue toute l'année"],
    nextSession: 'Inscription ouverte',
    placesAvailable: 50,
    format: 'Weekends + vacances scolaires',
    price: 100000,
    priceLabel: '100 000 FCFA/mois',
    successRate: null,
    studentsPerClass: 30,
    icon: BookOpen,
    color: 'gray',
    gradient: 'from-gray-600 to-gray-700',
    subjects: [
      { name: 'Mathématiques renforcées', icon: Calculator, hours: 60 },
      { name: 'Physique-Chimie', icon: Atom, hours: 50 },
      { name: 'Méthodologie', icon: Target, hours: 20 },
    ],
    features: [
      'Compatible avec les cours de Terminale',
      'Renforcement des fondamentaux',
      'Introduction à la méthodologie concours',
      'Évaluations régulières',
      'Orientation personnalisée',
      'Préparation mentale',
    ],
    testimonial: {
      quote:
        "J'ai commencé en Terminale et j'étais prêt dès la fin du Bac. Ça m'a fait gagner une année !",
      author: 'Esther N.',
      year: 'Promo 2024',
    },
    requirements: [
      'Être en classe de Terminale C, D, E ou F',
      "Viser une grande école d'ingénieurs",
      'Disponibilité les weekends',
    ],
    badge: 'Nouveau',
    badgeColor: 'bg-green-500 text-white',
  },
];

// Méthodologie d'enseignement
export const methodology = [
  {
    step: 1,
    title: 'Diagnostic initial',
    description:
      "Évaluation complète de ton niveau pour identifier tes forces et axes d'amélioration.",
    icon: Target,
    color: 'orange',
  },
  {
    step: 2,
    title: 'Plan personnalisé',
    description:
      "Programme d'études adapté à ton profil et tes objectifs spécifiques.",
    icon: FileText,
    color: 'navy',
  },
  {
    step: 3,
    title: 'Cours structurés',
    description:
      'Enseignement progressif par des experts ayant réussi les concours.',
    icon: BookOpen,
    color: 'orange',
  },
  {
    step: 4,
    title: 'Examens blancs',
    description:
      'Tests réguliers en conditions réelles pour mesurer ta progression.',
    icon: FileText,
    color: 'navy',
  },
  {
    step: 5,
    title: 'Corrections détaillées',
    description:
      'Analyse approfondie de chaque copie avec conseils personnalisés.',
    icon: CheckCircle,
    color: 'orange',
  },
  {
    step: 6,
    title: 'Suivi continu',
    description:
      "Accompagnement permanent jusqu'au jour du concours et au-dela.",
    icon: TrendingUp,
    color: 'navy',
  },
];

// Avantages de la méthode Alpha
export const advantages = [
  {
    title: 'Petits groupes',
    description: 'Maximum 25 étudiants par classe pour un suivi optimal',
    icon: Users,
    value: '25 max',
  },
  {
    title: 'Taux de reussite',
    description: "Moyenne sur l'ensemble de nos programmes",
    icon: Award,
    value: '90%+',
  },
  {
    title: 'Heures de cours',
    description: 'Volume horaire intensif par programme',
    icon: Clock,
    value: '300h+',
  },
  {
    title: 'Examens blancs',
    description: 'Tests en conditions réelles par mois',
    icon: FileText,
    value: '4/mois',
  },
];

// Calendrier des sessions
export const calendar = [
  {
    programme: 'ENSP',
    sessions: [
      {
        name: 'Session Janvier 2025',
        startDate: '13 Janvier 2025',
        endDate: 'Juin 2025',
        status: 'open',
        places: 25,
        placesLeft: 12,
      },
      {
        name: 'Session Août 2025',
        startDate: '4 Août 2025',
        endDate: 'Décembre 2025',
        status: 'upcoming',
        places: 25,
        placesLeft: 25,
      },
    ],
  },
  {
    programme: 'ENSTP',
    sessions: [
      {
        name: 'Session Février 2025',
        startDate: '3 Février 2025',
        endDate: 'Juin 2025',
        status: 'open',
        places: 30,
        placesLeft: 18,
      },
      {
        name: 'Session Septembre 2025',
        startDate: '1 Septembre 2025',
        endDate: 'Janvier 2026',
        status: 'upcoming',
        places: 30,
        placesLeft: 30,
      },
    ],
  },
  {
    programme: 'ENS',
    sessions: [
      {
        name: 'Session Mars 2025',
        startDate: '3 Mars 2025',
        endDate: 'Juin 2025',
        status: 'open',
        places: 35,
        placesLeft: 22,
      },
      {
        name: 'Session Octobre 2025',
        startDate: '6 Octobre 2025',
        endDate: 'Janvier 2026',
        status: 'upcoming',
        places: 35,
        placesLeft: 35,
      },
    ],
  },
  {
    programme: 'Préparatoire',
    sessions: [
      {
        name: 'Session Continue',
        startDate: 'Inscription permanente',
        endDate: '',
        status: 'open',
        places: 50,
        placesLeft: 35,
      },
    ],
  },
];

// Critères de comparaison
export const comparisonCriteria = [
  { key: 'duration', label: 'Durée' },
  { key: 'price', label: 'Prix mensuel' },
  { key: 'successRate', label: 'Taux de réussite' },
  { key: 'studentsPerClass', label: 'Étudiants/classe' },
  { key: 'format', label: 'Format' },
  { key: 'subjects', label: 'Matières principales' },
];

// Ressources incluses
export const includedResources = [
  {
    title: 'Cours en présentiel',
    description: 'Enseignement direct avec nos experts',
    icon: Users,
  },
  {
    title: 'Plateforme e-learning',
    description: 'Accès 24/7 aux cours et exercices',
    icon: Monitor,
  },
  {
    title: 'Vidéos de révision',
    description: 'Replay des cours et tutoriels',
    icon: Video,
  },
  {
    title: 'Support WhatsApp',
    description: 'Assistance 7j/7 avec les professeurs',
    icon: MessageSquare,
  },
  {
    title: 'Examens blancs',
    description: 'Tests corrigés en conditions réelles',
    icon: FileText,
  },
  {
    title: 'Fiches de révision',
    description: 'Synthèses et mémos à télécharger',
    icon: BookOpen,
  },
];
