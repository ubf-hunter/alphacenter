// ============================================
// ABOUT DATA - Histoire, Mission, Valeurs, Methode
// ============================================

import {
  Trophy,
  Heart,
  Users,
  Lightbulb,
  Globe,
  BookOpen,
  Target,
  ClipboardCheck,
  UserCheck,
  Brain,
} from 'lucide-react';

// Informations generales Alpha Center
export const alphaCenter = {
  name: 'Alpha Center',
  fullName: 'Alpha Center - Centre de Preparation aux Concours',
  founded: 2018,
  location: {
    city: 'Yaounde',
    quarter: 'Omnisports',
    country: 'Cameroun',
  },
  contact: {
    phone: '+237 670102293',
    email: 'contact@alphacenter.cm',
    whatsapp: '+237 670102293',
  },
  socialMedia: {
    facebook: 'https://facebook.com/alphacenter',
    instagram: 'https://instagram.com/alphacenter',
    linkedin: 'https://linkedin.com/company/alphacenter',
  },
  domains: ['Ingenierie', 'Medecine', 'Sciences Infirmieres'],
  targetSchools: ['ENSP', 'ENSTP', 'ENS', 'FMSB', 'CESSI'],

  // Chiffres cles
  stats: {
    yearsOfExperience: 3,
    totalStudentsTrained: 400,
    totalAdmitted: 340,
    averageSuccessRate: 85,
    nationalAverageRate: 8,
    teachersCount: 12,
    subjectsCovered: 6,
  },
};

// Histoire & Timeline
export const history = {
  founding: {
    year: 2023,
    story:
      "Alpha Center est ne d'un constat simple : des milliers d'etudiants brillants echouent chaque annee aux concours, non par manque de talent, mais par manque de methode et d'encadrement adapte. Fonde par d'anciens laureats des grandes ecoles, Alpha Center a pour mission de democratiser l'acces aux meilleures formations du Cameroun.",
    founders:
      "Un groupe d'ingenieurs diplomes de l'ENSP et de Polytechnique, passionnes par l'enseignement et convaincus que chaque etudiant meritant peut reussir avec le bon accompagnement.",
  },

  timeline: [
    {
      year: 2023,
      title: "Creation d'Alpha Center",
      description:
        'Lancement avec une premiere promotion de 131 etudiants. Ouverture des preparations ENSP, ENSTP, ENS, Medecine (FMSB) et Sciences Infirmieres (CESSI).',
      highlight: '84% de taux de reussite des la premiere annee',
    },
    {
      year: 2024,
      title: 'Annee record',
      description:
        'Meilleurs resultats historiques. 8 etudiants dans le top 10 ENSP. 140 etudiants formes.',
      highlight: '85% de reussite, 1er ENSTP',
    },
    {
      year: 2025,
      title: 'Consolidation et innovation',
      description:
        "Lancement de l'application mobile Alpha et du nouveau site web. Renforcement de l'equipe pedagogique.",
      highlight: '85% de reussite, 150 etudiants',
    },
    {
      year: 2026,
      title: 'Nouvelles ambitions',
      description:
        'Expansion des programmes et objectif de 200 etudiants. Lancement de la Bibliotheque Alpha.',
      highlight: 'En cours...',
    },
  ],
};

// Mission & Valeurs
export const mission = {
  statement:
    "Donner a chaque etudiant camerounais les outils, les methodes et l'accompagnement necessaires pour realiser son potentiel et integrer l'ecole de ses reves.",

  vision:
    "Devenir la reference nationale en preparation aux concours, reconnue pour l'excellence de ses resultats et l'humanite de son approche.",

  values: [
    {
      name: 'Excellence Academique',
      icon: Trophy,
      description:
        'Nous visons l\'excellence sans compromis. Nos standards sont eleves car nous savons que nos etudiants en sont capables.',
      color: '#FA5614',
    },
    {
      name: 'Bienveillance',
      icon: Heart,
      description:
        "Un climat de confiance et de respect mutuel est essentiel a l'apprentissage. Nous encourageons, nous challengeons, mais nous ne denigrons jamais.",
      color: '#001A51',
    },
    {
      name: 'Equite & Accessibilite',
      icon: Users,
      description:
        'Chaque etudiant merite sa chance, quelle que soit son origine. Nous proposons des bourses aux eleves meritants de familles modestes.',
      color: '#6B4B3E',
    },
    {
      name: 'Innovation Pedagogique',
      icon: Lightbulb,
      description:
        "Nous nous remettons en question chaque annee pour ameliorer nos methodes. Nous integrons les technologies quand elles servent l'apprentissage.",
      color: '#FA5614',
    },
    {
      name: 'Responsabilite Sociale',
      icon: Globe,
      description:
        'Former les futurs ingenieurs et medecins, c\'est former ceux qui construiront le Cameroun de demain. Nous prenons cette mission tres au serieux.',
      color: '#001A51',
    },
  ],
};

// Methode Pedagogique
export const methodology = {
  title: 'La Methode Alpha',
  subtitle: 'Une approche eprouvee pour des resultats exceptionnels',

  principles: [
    {
      number: 1,
      name: 'Maitrise des Fondamentaux',
      icon: BookOpen,
      description:
        'Pas de raccourcis. Nous reprenons les bases mathematiques et scientifiques pour construire des fondations solides. Un etudiant qui maitrise les fondamentaux peut resoudre n\'importe quel probleme.',
      quote: 'On ne construit pas un gratte-ciel sur des fondations fragiles.',
    },
    {
      number: 2,
      name: 'Pratique Intensive',
      icon: Target,
      description:
        "La theorie ne suffit pas. Nos etudiants resolvent des centaines d'exercices, des plus simples aux plus complexes. La repetition cree l'automatisme, l'automatisme cree la confiance.",
      stats: '500+ exercices resolus par etudiant en moyenne',
    },
    {
      number: 3,
      name: 'Examens Blancs Reguliers',
      icon: ClipboardCheck,
      description:
        '12 examens blancs par an dans les conditions reelles du concours. Le jour J, nos etudiants sont en terrain connu. Ils ont deja vecu cette situation 12 fois.',
      quote: 'Le vrai concours devient le 13eme examen blanc.',
    },
    {
      number: 4,
      name: 'Suivi Personnalise',
      icon: UserCheck,
      description:
        "Chaque etudiant a un parcours unique. Nous identifions les forces et faiblesses de chacun pour adapter l'accompagnement. Points mensuels avec le professeur referent.",
      features: [
        'Fiche de progression individuelle',
        'Points mensuels',
        'Communication avec les parents',
      ],
    },
    {
      number: 5,
      name: 'Gestion du Stress',
      icon: Brain,
      description:
        "Le concours n'est pas qu'intellectuel, c'est aussi mental. Nous integrons des techniques de gestion du stress et de confiance en soi.",
      techniques: [
        'Respiration et relaxation',
        'Gestion du temps sous pression',
        'Visualisation positive',
      ],
    },
  ],
};

// Stats hero pour la page
export const heroStats = [
  { number: '3', label: "Annees d'experience", suffix: '' },
  { number: '400', label: 'Etudiants formes', suffix: '+' },
  { number: '85', label: 'Taux de reussite', suffix: '%' },
];
