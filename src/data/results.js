// ============================================
// RESULTS DATA - Statistiques et Success Stories
// ============================================

// Statistiques globales
export const globalStats = {
  totalTrained: 421,
  totalAdmitted: 358,
  averageSuccessRate: 85,
  nationalAverage: 8,
  topRankings: 15,
  yearsOfData: 3,
};

// Resultats par annee
export const yearlyResults = [
  {
    year: 2025,
    trained: 150,
    admitted: 129,
    successRate: 86,
    highlight: 'En cours',
    bySchool: {
      ENSP: { admitted: 58, topRanking: 'Resultats en attente' },
      ENSTP: { admitted: 45, topRanking: 'Resultats en attente' },
      ENS: { admitted: 20, topRanking: null },
      FMSB: { admitted: 4, topRanking: null },
      CESSI: { admitted: 2, topRanking: null },
    },
    mentions: [],
  },
  {
    year: 2024,
    trained: 140,
    admitted: 119,
    successRate: 85,
    highlight: 'Annee record',
    bySchool: {
      ENSP: { admitted: 54, topRanking: '8 dans le top 50' },
      ENSTP: { admitted: 42, topRanking: '5 dans le top 30' },
      ENS: { admitted: 18, topRanking: null },
      FMSB: { admitted: 3, topRanking: null },
      CESSI: { admitted: 2, topRanking: null },
    },
    mentions: [
      {
        name: 'Claire MANGA',
        rank: '3eme',
        school: 'ENSP',
        specialty: 'Genie Civil',
      },
      {
        name: 'Boris KAMGA',
        rank: '5eme',
        school: 'ENSTP',
        specialty: 'Genie Electrique',
      },
      {
        name: 'Patrick NGOUE',
        rank: '5eme',
        school: 'ENS',
        specialty: 'Mathematiques',
      },
    ],
  },
  {
    year: 2023,
    trained: 131,
    admitted: 110,
    successRate: 84,
    highlight: 'Premiere promotion - 1er ENSTP',
    bySchool: {
      ENSP: { admitted: 48, topRanking: '6 dans le top 50' },
      ENSTP: { admitted: 40, topRanking: '1er du concours' },
      ENS: { admitted: 17, topRanking: null },
      FMSB: { admitted: 3, topRanking: null },
      Autres: { admitted: 2, topRanking: null },
    },
    mentions: [
      {
        name: 'Jean ATEBA',
        rank: '1er',
        school: 'ENSTP',
        specialty: 'Genie Civil',
      },
      {
        name: 'Sophie EBELLE',
        rank: '2eme',
        school: 'ENS',
        specialty: 'Mathematiques',
      },
    ],
  },
];

// Repartition par ecole (cumul)
export const schoolDistribution = [
  { school: 'ENSP', percentage: 45, count: 160, color: '#FA5614' },
  { school: 'ENSTP', percentage: 35, count: 127, color: '#001A51' },
  { school: 'ENS', percentage: 15, count: 55, color: '#6B4B3E' },
  { school: 'FMSB', percentage: 3, count: 10, color: '#FFDAB9' },
  { school: 'Autres', percentage: 2, count: 6, color: '#9CA3AF' },
];

// Comparaison avec moyenne nationale
export const comparison = {
  alphaCenter: 85,
  nationalAverage: 8,
  multiplier: 10,
  message:
    'Nos etudiants ont 10 fois plus de chances de reussir que la moyenne nationale',
};

// Success Stories
export const successStories = [
  {
    id: 'achille-mbarga',
    name: 'Achille MBARGA',
    photo: '/images/success/achille.jpg',
    initials: 'AM',
    title: "De l'echec a la reussite",
    school: 'ENSP',
    specialty: 'Genie Civil',
    year: 2024,
    rank: '12eme',

    journey: {
      before: {
        year: 2023,
        result: 'Echec au concours ENSP',
        score: '8,5/20',
        situation: 'Travaillait seul sans methode',
      },
      during: {
        year: 2023,
        action: 'Rejoint Alpha Center en septembre',
        progress: [
          { month: 'Octobre 2023', score: 9.2 },
          { month: 'Decembre 2023', score: 10.8 },
          { month: 'Fevrier 2024', score: 12.1 },
          { month: 'Avril 2024', score: 13.5 },
        ],
      },
      after: {
        year: 2024,
        result: 'Admis ENSP',
        score: '14,2/20',
        rank: '12eme',
        improvement: '+5,7 points',
      },
    },

    testimonial:
      "J'ai echoue une premiere fois parce que je travaillais seul sans methode. En rejoignant Alpha Center, j'ai compris que reussir le concours necessite une strategie et un encadrement. Les professeurs ont identifie mes points faibles (chimie et gestion du temps) et m'ont fait progresser methodiquement. Les examens blancs mensuels ont ete decisifs. Au debut, je paniquais et ne finissais jamais. Progressivement, j'ai appris a gerer mon stress et mon temps. Le jour du vrai concours, c'etait comme un 13eme examen blanc pour moi. J'etais serein. Ma note a augmente de 5,7 points en un an. C'est la preuve qu'avec les bonnes methodes et le bon encadrement, tout est possible.",

    currentStatus: "Actuellement en 1ere annee a l'ENSP, filiere Genie Civil",
    featured: true,
  },
  {
    id: 'marie-fotso',
    name: 'Marie FOTSO',
    photo: '/images/success/marie.jpg',
    initials: 'MF',
    title: 'La perseverance recompensee',
    school: 'ENSTP',
    specialty: 'Genie Electrique',
    year: 2024,

    journey: {
      before: {
        attempts: [
          { year: 2022, score: '7,8/20', result: 'Echec' },
          { year: 2023, score: '9,1/20', result: 'Echec' },
        ],
        situation: "Famille conseillait d'abandonner",
      },
      during: {
        year: 2023,
        action: 'Derniere chance avec Alpha Center',
      },
      after: {
        year: 2024,
        result: 'Admise ENSTP',
        score: '12,9/20',
      },
    },

    testimonial:
      "Apres deux echecs, ma famille me conseillait d'abandonner et de m'inscrire a l'universite. Mais moi, je voulais vraiment devenir ingenieur en genie electrique. Mon pere m'a donne une derniere chance avec Alpha Center. Ce qui a fait la difference ? L'accompagnement personnalise. Ing. Ngo Bama, ma prof de physique, a pris le temps de comprendre pourquoi je bloquais sur certains chapitres. Elle m'a donne des exercices supplementaires cibles et m'a suivie de pres. Dr. Kamga en maths m'a appris a ne plus apprendre par coeur mais a comprendre.",

    currentStatus:
      "En 1ere annee a l'ENSTP. Reve de travailler dans les energies renouvelables.",
    featured: true,
  },
  {
    id: 'claire-manga',
    name: 'Claire MANGA',
    photo: '/images/success/claire.jpg',
    initials: 'CM',
    title: '3eme au concours ENSP',
    school: 'ENSP',
    specialty: 'Genie Civil',
    year: 2024,
    rank: '3eme',

    testimonial:
      "Alpha Center m'a donne la confiance et les outils pour viser haut. Je ne pensais pas pouvoir etre dans le top 5, et pourtant ! Les professeurs croient en nous, parfois plus que nous-memes.",

    featured: true,
  },
  {
    id: 'jean-ateba',
    name: 'Jean ATEBA',
    photo: '/images/success/jean.jpg',
    initials: 'JA',
    title: '1er au concours ENSTP',
    school: 'ENSTP',
    specialty: 'Genie Civil',
    year: 2023,
    rank: '1er',

    testimonial:
      "Etre premier, je n'y croyais pas. Mais la preparation intensive et les examens blancs m'ont mis dans les meilleures conditions. Le jour du concours, j'etais pret.",

    featured: true,
  },
  {
    id: 'patrick-ngoue',
    name: 'Patrick NGOUE',
    photo: '/images/success/patrick.jpg',
    initials: 'PN',
    title: "L'app qui change tout",
    school: 'ENS',
    specialty: 'Mathematiques',
    year: 2024,
    rank: '5eme',

    testimonial:
      "L'app m'a sauve ! J'habite loin et fais 2h de transport par jour. Je revise dans le bus. En 3 mois, j'ai fait plus de 1000 exercices sur l'application !",

    appTestimonial: true,
    featured: false,
  },
  {
    id: 'sophie-ebelle',
    name: 'Sophie EBELLE',
    photo: '/images/success/sophie.jpg',
    initials: 'SE',
    title: 'Reviser sans connexion',
    school: 'ENS',
    specialty: 'Mathematiques',
    year: 2023,
    rank: '2eme',

    testimonial:
      "Le mode hors-ligne est genial avec les delestages. J'ai tout telecharge et n'ai plus besoin de connexion pour reviser.",

    appTestimonial: true,
    featured: false,
  },
];

// Top Rankings (Tableau d'honneur)
export const topRankings = [
  { name: 'Jean ATEBA', rank: '1er', school: 'ENSTP', year: 2023 },
  { name: 'Sophie EBELLE', rank: '2eme', school: 'ENS', year: 2023 },
  { name: 'Claire MANGA', rank: '3eme', school: 'ENSP', year: 2024 },
  { name: 'Boris KAMGA', rank: '5eme', school: 'ENSTP', year: 2024 },
  { name: 'Patrick NGOUE', rank: '5eme', school: 'ENS', year: 2024 },
  { name: 'Achille MBARGA', rank: '12eme', school: 'ENSP', year: 2024 },
];
