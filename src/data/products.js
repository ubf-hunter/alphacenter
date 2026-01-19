// ============================================
// PRODUCTS - Bibliotheque de ressources Alpha
// Donnees completes des documents en vente
// ============================================

import {
  BookOpen,
  FileText,
  GraduationCap,
  Heart,
  Stethoscope,
} from 'lucide-react';

// ===== CATEGORIES =====
export const categories = [
  {
    id: 'concours-ingenierie',
    name: 'Prepa Concours Ingenierie',
    icon: GraduationCap,
    description: 'Documents pour preparer les concours ENSP, ENSTP, ENS',
    color: 'orange',
    gradient: 'from-orange to-orange-600',
  },
  {
    id: 'concours-medecine',
    name: 'Prepa Concours Medecine',
    icon: Stethoscope,
    description: 'Documents pour preparer le concours FMSB et ecoles de sante',
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-700',
  },
  {
    id: 'concours-infirmier',
    name: 'Prepa Concours Infirmier',
    icon: Heart,
    description: 'Documents pour preparer les concours CESSI et instituts',
    color: 'rose',
    gradient: 'from-rose-500 to-rose-600',
  },
  {
    id: 'terminale',
    name: 'Bords Terminale C & D',
    icon: BookOpen,
    description: 'Fascicules de cours et exercices pour reussir le Bac',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    id: 'annales',
    name: 'Annales Corrigees',
    icon: FileText,
    description: 'Sujets des annees precedentes avec corrections detaillees',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
  },
];

// ===== DOCUMENTS INGENIERIE =====
export const ingenierieDocuments = [
  {
    id: 'pack-complet-ensp',
    slug: 'pack-complet-preparation-ensp',
    name: 'Pack Complet Preparation ENSP',
    category: 'concours-ingenierie',
    targetSchool: 'ENSP',
    type: 'pack',
    shortDescription: "Tout ce qu'il faut pour reussir le concours ENSP",
    fullDescription:
      "Le pack le plus complet pour votre preparation au concours de l'Ecole Nationale Superieure Polytechnique. Redige par nos enseignants experts, ce pack couvre toutes les matieres avec des exercices progressifs et des annales corrigees.",
    includes: [
      'Fascicule Mathematiques (150 pages)',
      'Fascicule Physique (120 pages)',
      'Fascicule Chimie (80 pages)',
      'Annales ENSP 2018-2024 corrigees',
      'Fiches de revision express',
      'Acces groupe WhatsApp support',
    ],
    highlights: [
      '500+ exercices corriges',
      "7 annees d'annales",
      'Redige par anciens laureats ENSP',
      'Mis a jour chaque annee',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 450,
    },
    pricing: {
      digital: 15000,
      physical: 25000,
      bundle: 35000,
    },
    coverImage: '/images/products/pack-ensp.jpg',
    stats: {
      sales: 250,
      rating: 4.8,
      reviews: 45,
    },
    bestseller: true,
    new: false,
  },
  {
    id: 'maths-ensp',
    slug: 'mathematiques-preparation-ensp',
    name: 'Mathematiques - Prepa ENSP',
    category: 'concours-ingenierie',
    targetSchool: 'ENSP',
    type: 'single',
    shortDescription: 'Maitrisez les mathematiques du concours ENSP',
    fullDescription:
      "Ce fascicule couvre l'integralite du programme de mathematiques du concours ENSP : analyse, algebre, geometrie, probabilites. Chaque chapitre contient des rappels de cours, des exercices d'application et des problemes de concours.",
    includes: [
      'Cours complets et structures',
      '200+ exercices progressifs',
      '50 problemes type concours',
      'Corrections detaillees',
      'Fiches memo par chapitre',
    ],
    chapters: [
      'Suites et series numeriques',
      'Fonctions et limites',
      'Derivation et integration',
      'Equations differentielles',
      'Algebre lineaire',
      'Geometrie analytique',
      'Probabilites et statistiques',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 150,
    },
    pricing: {
      digital: 7500,
      physical: 12000,
    },
    coverImage: '/images/products/maths-ensp.jpg',
    bestseller: false,
    new: false,
  },
  {
    id: 'physique-ensp',
    slug: 'physique-preparation-ensp',
    name: 'Physique - Prepa ENSP',
    category: 'concours-ingenierie',
    targetSchool: 'ENSP',
    type: 'single',
    shortDescription: 'Dominez la physique du concours ENSP',
    fullDescription:
      'Fascicule complet de physique pour le concours ENSP. Mecanique, electromagnetisme, optique, thermodynamique - tous les chapitres sont traites avec rigueur et clarte.',
    includes: [
      'Cours avec schemas explicatifs',
      '150+ exercices corriges',
      '40 problemes de synthese',
      'Formulaire complet',
    ],
    chapters: [
      'Mecanique du point',
      'Mecanique du solide',
      'Electrostatique et electrocinetique',
      'Electromagnetisme',
      'Optique geometrique et ondulatoire',
      'Thermodynamique',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 120,
    },
    pricing: {
      digital: 7000,
      physical: 11000,
    },
    coverImage: '/images/products/physique-ensp.jpg',
    bestseller: false,
    new: false,
  },
  {
    id: 'chimie-ensp',
    slug: 'chimie-preparation-ensp',
    name: 'Chimie - Prepa ENSP',
    category: 'concours-ingenierie',
    targetSchool: 'ENSP',
    type: 'single',
    shortDescription: 'La chimie du concours ENSP simplifiee',
    fullDescription:
      'Chimie generale, organique et minerale pour le concours ENSP. Approche claire et methodique avec de nombreux exercices d\'application.',
    includes: [
      'Cours structures',
      '100+ exercices corriges',
      '30 problemes type concours',
      'Tableau periodique annote',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 80,
    },
    pricing: {
      digital: 5000,
      physical: 8000,
    },
    coverImage: '/images/products/chimie-ensp.jpg',
    bestseller: false,
    new: false,
  },
  {
    id: 'pack-enstp',
    slug: 'pack-complet-preparation-enstp',
    name: 'Pack Complet Preparation ENSTP',
    category: 'concours-ingenierie',
    targetSchool: 'ENSTP',
    type: 'pack',
    shortDescription: 'Preparez efficacement le concours ENSTP',
    fullDescription:
      "Pack complet pour la preparation au concours de l'Ecole Nationale Superieure des Travaux Publics. Focus sur les mathematiques, la physique et le dessin technique.",
    includes: [
      'Fascicule Mathematiques (130 pages)',
      'Fascicule Physique (100 pages)',
      'Guide Dessin Technique (60 pages)',
      'Annales ENSTP 2018-2024 corrigees',
      'Fiches de revision',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 380,
    },
    pricing: {
      digital: 12000,
      physical: 20000,
      bundle: 28000,
    },
    coverImage: '/images/products/pack-enstp.jpg',
    bestseller: true,
    new: false,
  },
  {
    id: 'pack-ens',
    slug: 'pack-complet-preparation-ens',
    name: 'Pack Complet Preparation ENS',
    category: 'concours-ingenierie',
    targetSchool: 'ENS',
    type: 'pack',
    shortDescription: "Reussissez le concours de l'ENS",
    fullDescription:
      "Pack adapte aux differentes filieres de l'Ecole Normale Superieure : Mathematiques, Physique, Informatique.",
    includes: [
      'Fascicule Mathematiques (140 pages)',
      'Fascicule Physique (110 pages)',
      'Fascicule Informatique (80 pages)',
      'Annales ENS corrigees',
      'Methodologie dissertation scientifique',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 400,
    },
    pricing: {
      digital: 12000,
      physical: 20000,
      bundle: 28000,
    },
    coverImage: '/images/products/pack-ens.jpg',
    bestseller: false,
    new: false,
  },
];

// ===== DOCUMENTS MEDECINE =====
export const medecineDocuments = [
  {
    id: 'pack-fmsb',
    slug: 'pack-complet-preparation-fmsb',
    name: 'Pack Complet Preparation FMSB',
    category: 'concours-medecine',
    targetSchool: 'FMSB',
    type: 'pack',
    shortDescription: 'Votre passeport pour la Faculte de Medecine',
    fullDescription:
      'Pack exhaustif pour la preparation au concours de la Faculte de Medecine et des Sciences Biomedicales. Biologie, Chimie, Physique et Culture generale medicale.',
    includes: [
      'Fascicule Biologie/SVT (180 pages)',
      'Fascicule Chimie (100 pages)',
      'Fascicule Physique (90 pages)',
      'QCM type concours (500 questions)',
      'Annales FMSB 2018-2024 corrigees',
      'Guide de culture medicale',
    ],
    highlights: [
      'Redige avec des medecins FMSB',
      "500 QCM d'entrainement",
      'Focus sur les pieges classiques',
      "Conseils d'anciens admis",
    ],
    format: {
      digital: true,
      physical: true,
      pages: 520,
    },
    pricing: {
      digital: 18000,
      physical: 28000,
      bundle: 40000,
    },
    coverImage: '/images/products/pack-fmsb.jpg',
    bestseller: true,
    new: false,
  },
  {
    id: 'biologie-fmsb',
    slug: 'biologie-preparation-fmsb',
    name: 'Biologie/SVT - Prepa FMSB',
    category: 'concours-medecine',
    targetSchool: 'FMSB',
    type: 'single',
    shortDescription: 'La biologie du concours medecine maitrisee',
    fullDescription:
      'Fascicule complet de biologie pour le concours FMSB. Biologie cellulaire, genetique, physiologie humaine, ecologie.',
    includes: [
      'Cours illustres et schematises',
      '200+ exercices et QCM',
      'Corrections detaillees',
      'Planches anatomiques',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 180,
    },
    pricing: {
      digital: 8000,
      physical: 13000,
    },
    coverImage: '/images/products/biologie-fmsb.jpg',
    bestseller: false,
    new: false,
  },
  {
    id: 'qcm-medecine',
    slug: 'qcm-entrainement-medecine',
    name: '500 QCM Medecine',
    category: 'concours-medecine',
    targetSchool: 'FMSB',
    type: 'single',
    shortDescription: 'Entrainez-vous avec 500 QCM type concours',
    fullDescription:
      'Banque de 500 QCM couvrant toutes les matieres du concours medecine. Format identique au concours reel avec explications detaillees.',
    includes: [
      '500 QCM repartis par matiere',
      'Niveau progressif',
      'Explications de chaque reponse',
      'Statistiques de difficulte',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 150,
    },
    pricing: {
      digital: 6000,
      physical: 10000,
    },
    coverImage: '/images/products/qcm-medecine.jpg',
    bestseller: false,
    new: true,
  },
];

// ===== DOCUMENTS INFIRMIER =====
export const infirmierDocuments = [
  {
    id: 'pack-cessi',
    slug: 'pack-complet-preparation-cessi',
    name: 'Pack Complet Preparation CESSI',
    category: 'concours-infirmier',
    targetSchool: 'CESSI',
    type: 'pack',
    shortDescription: "Devenez infirmier(e) diplome(e) d'Etat",
    fullDescription:
      "Pack complet pour la preparation au concours des ecoles d'infirmiers. Biologie, Culture generale sanitaire et sociale, Tests psychotechniques.",
    includes: [
      'Fascicule Biologie (100 pages)',
      'Guide Culture sanitaire et sociale (80 pages)',
      'Tests psychotechniques (120 exercices)',
      'Annales CESSI corrigees',
      "Preparation a l'oral",
    ],
    format: {
      digital: true,
      physical: true,
      pages: 300,
    },
    pricing: {
      digital: 10000,
      physical: 16000,
      bundle: 22000,
    },
    coverImage: '/images/products/pack-cessi.jpg',
    bestseller: false,
    new: true,
  },
  {
    id: 'tests-psycho',
    slug: 'tests-psychotechniques-infirmier',
    name: 'Tests Psychotechniques',
    category: 'concours-infirmier',
    type: 'single',
    shortDescription: 'Maitrisez les tests psychotechniques',
    fullDescription:
      'Preparation complete aux tests psychotechniques : logique, aptitudes numeriques, verbales, attention et organisation.',
    includes: [
      'Methodologie par type de test',
      '120 exercices progressifs',
      'Corrections commentees',
      'Astuces et techniques',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 90,
    },
    pricing: {
      digital: 4000,
      physical: 7000,
    },
    coverImage: '/images/products/tests-psycho.jpg',
    bestseller: false,
    new: false,
  },
];

// ===== DOCUMENTS TERMINALE =====
export const terminaleDocuments = [
  {
    id: 'maths-tle-c',
    slug: 'mathematiques-terminale-c',
    name: 'Bord Mathematiques Terminale C',
    category: 'terminale',
    level: 'Terminale C',
    type: 'single',
    shortDescription: 'Le bord indispensable pour reussir en maths Tle C',
    fullDescription:
      'Fascicule complet de mathematiques pour la Terminale C. Cours resumes, exercices d\'application, problemes type Bac et exercices de niveau concours.',
    includes: [
      'Resumes de cours par chapitre',
      '300+ exercices corriges',
      'Problemes type Baccalaureat',
      'Exercices niveau concours (bonus)',
      'Formulaire complet',
    ],
    chapters: [
      'Suites numeriques',
      'Limites et continuite',
      'Derivation et applications',
      'Fonction exponentielle et logarithme',
      'Integration',
      'Nombres complexes',
      "Geometrie dans l'espace",
      'Probabilites',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 200,
    },
    pricing: {
      digital: 5000,
      physical: 8000,
    },
    coverImage: '/images/products/maths-tle-c.jpg',
    bestseller: true,
    new: false,
  },
  {
    id: 'maths-tle-d',
    slug: 'mathematiques-terminale-d',
    name: 'Bord Mathematiques Terminale D',
    category: 'terminale',
    level: 'Terminale D',
    type: 'single',
    shortDescription: 'Reussissez les maths en Terminale D',
    fullDescription:
      'Fascicule adapte au programme de Terminale D. Cours clairs, exercices progressifs et preparation au Baccalaureat.',
    includes: [
      'Cours simplifies',
      '250+ exercices corriges',
      'Sujets type Bac',
      'Fiches memo',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 160,
    },
    pricing: {
      digital: 4500,
      physical: 7500,
    },
    coverImage: '/images/products/maths-tle-d.jpg',
    bestseller: false,
    new: false,
  },
  {
    id: 'physique-tle-c',
    slug: 'physique-terminale-c',
    name: 'Bord Physique Terminale C',
    category: 'terminale',
    level: 'Terminale C',
    type: 'single',
    shortDescription: 'Maitrisez la physique de Terminale C',
    fullDescription:
      'Fascicule complet de physique pour Terminale C. Mecanique, electricite, optique avec exercices et problemes corriges.',
    includes: [
      'Cours avec schemas',
      '200+ exercices corriges',
      'TP et manipulations',
      'Formulaire',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 150,
    },
    pricing: {
      digital: 5000,
      physical: 8000,
    },
    coverImage: '/images/products/physique-tle-c.jpg',
    bestseller: false,
    new: false,
  },
  {
    id: 'chimie-tle-cd',
    slug: 'chimie-terminale-c-d',
    name: 'Bord Chimie Terminale C & D',
    category: 'terminale',
    level: 'Terminale C/D',
    type: 'single',
    shortDescription: 'La chimie de Terminale simplifiee',
    fullDescription:
      'Fascicule couvrant le programme de chimie commun aux Terminales C et D. Chimie organique et minerale avec exercices progressifs.',
    includes: [
      'Cours structures',
      '150+ exercices',
      'Corrections detaillees',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 100,
    },
    pricing: {
      digital: 4000,
      physical: 7000,
    },
    coverImage: '/images/products/chimie-tle.jpg',
    bestseller: false,
    new: false,
  },
  {
    id: 'svt-tle-d',
    slug: 'svt-terminale-d',
    name: 'Bord SVT Terminale D',
    category: 'terminale',
    level: 'Terminale D',
    type: 'single',
    shortDescription: 'Reussissez les SVT en Terminale D',
    fullDescription:
      'Fascicule complet de Sciences de la Vie et de la Terre pour Terminale D. Ideal pour le Bac et la preparation aux concours sante.',
    includes: [
      'Cours illustres',
      '180+ exercices',
      'Schemas a completer',
      'Preparation concours sante',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 140,
    },
    pricing: {
      digital: 4500,
      physical: 7500,
    },
    coverImage: '/images/products/svt-tle-d.jpg',
    bestseller: false,
    new: false,
  },
  {
    id: 'pack-tle-c',
    slug: 'pack-complet-terminale-c',
    name: 'Pack Complet Terminale C',
    category: 'terminale',
    level: 'Terminale C',
    type: 'pack',
    shortDescription: 'Tous les bords pour reussir en Terminale C',
    fullDescription:
      'Pack regroupant tous les fascicules pour la Terminale C : Mathematiques, Physique, Chimie. Ideal pour preparer le Bac ET anticiper les concours.',
    includes: [
      'Bord Mathematiques Tle C',
      'Bord Physique Tle C',
      'Bord Chimie Tle C/D',
      'Fiches memo toutes matieres',
      'Planning de revision Bac',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 450,
    },
    pricing: {
      digital: 12000,
      physical: 20000,
      bundle: 28000,
    },
    coverImage: '/images/products/pack-tle-c.jpg',
    bestseller: true,
    new: false,
  },
  {
    id: 'pack-tle-d',
    slug: 'pack-complet-terminale-d',
    name: 'Pack Complet Terminale D',
    category: 'terminale',
    level: 'Terminale D',
    type: 'pack',
    shortDescription: 'Tous les bords pour reussir en Terminale D',
    fullDescription:
      'Pack complet pour la Terminale D : Mathematiques, SVT, Chimie. Parfait pour le Bac et la preparation aux concours sante.',
    includes: [
      'Bord Mathematiques Tle D',
      'Bord SVT Tle D',
      'Bord Chimie Tle C/D',
      'Fiches memo',
      'Conseils orientation post-Bac',
    ],
    format: {
      digital: true,
      physical: true,
      pages: 400,
    },
    pricing: {
      digital: 10000,
      physical: 18000,
      bundle: 25000,
    },
    coverImage: '/images/products/pack-tle-d.jpg',
    bestseller: false,
    new: false,
  },
];

// ===== ANNALES =====
export const annalesDocuments = [
  {
    id: 'annales-ensp-7ans',
    slug: 'annales-ensp-2018-2024',
    name: 'Annales ENSP 2018-2024',
    category: 'annales',
    targetSchool: 'ENSP',
    type: 'annales',
    shortDescription: '7 annees de sujets ENSP avec corrections completes',
    fullDescription:
      'Compilation des sujets du concours ENSP de 2018 a 2024 avec corrections detaillees par nos enseignants. Indispensable pour comprendre les attentes du jury.',
    includes: [
      'Sujets officiels 2018-2024',
      'Corrections detaillees',
      'Baremes de notation',
      'Analyse des tendances',
      'Conseils par epreuve',
    ],
    years: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
    subjects: ['Mathematiques', 'Physique', 'Chimie', 'Anglais'],
    format: {
      digital: true,
      physical: true,
      pages: 180,
    },
    pricing: {
      digital: 8000,
      physical: 12000,
    },
    coverImage: '/images/products/annales-ensp.jpg',
    bestseller: true,
    new: false,
  },
  {
    id: 'annales-enstp-7ans',
    slug: 'annales-enstp-2018-2024',
    name: 'Annales ENSTP 2018-2024',
    category: 'annales',
    targetSchool: 'ENSTP',
    type: 'annales',
    shortDescription: '7 annees de sujets ENSTP corriges',
    fullDescription:
      'Tous les sujets du concours ENSTP depuis 2018 avec corrections completes.',
    includes: [
      'Sujets officiels 2018-2024',
      'Corrections detaillees',
      'Methodologie',
    ],
    years: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
    format: {
      digital: true,
      physical: true,
      pages: 150,
    },
    pricing: {
      digital: 7000,
      physical: 11000,
    },
    coverImage: '/images/products/annales-enstp.jpg',
    bestseller: false,
    new: false,
  },
  {
    id: 'annales-fmsb-5ans',
    slug: 'annales-fmsb-2020-2024',
    name: 'Annales FMSB 2020-2024',
    category: 'annales',
    targetSchool: 'FMSB',
    type: 'annales',
    shortDescription: '5 annees de sujets medecine corriges',
    fullDescription:
      'Compilation des sujets du concours FMSB avec corrections et explications detaillees pour chaque QCM.',
    includes: [
      'Sujets officiels 2020-2024',
      'Corrections QCM detaillees',
      'Explications des pieges',
    ],
    years: [2020, 2021, 2022, 2023, 2024],
    format: {
      digital: true,
      physical: true,
      pages: 120,
    },
    pricing: {
      digital: 8000,
      physical: 12000,
    },
    coverImage: '/images/products/annales-fmsb.jpg',
    bestseller: false,
    new: true,
  },
  {
    id: 'annales-bac-c',
    slug: 'annales-baccalaureat-c',
    name: 'Annales Bac C (5 ans)',
    category: 'annales',
    level: 'Terminale C',
    type: 'annales',
    shortDescription: '5 annees de sujets Bac C corriges',
    fullDescription:
      'Sujets du Baccalaureat serie C de 2019 a 2023 avec corrections completes. Maths, Physique, Chimie.',
    includes: [
      'Sujets Bac C 2019-2023',
      'Corrections detaillees',
      'Baremes officiels',
    ],
    years: [2019, 2020, 2021, 2022, 2023],
    format: {
      digital: true,
      physical: true,
      pages: 140,
    },
    pricing: {
      digital: 5000,
      physical: 8000,
    },
    coverImage: '/images/products/annales-bac-c.jpg',
    bestseller: false,
    new: false,
  },
  {
    id: 'annales-bac-d',
    slug: 'annales-baccalaureat-d',
    name: 'Annales Bac D (5 ans)',
    category: 'annales',
    level: 'Terminale D',
    type: 'annales',
    shortDescription: '5 annees de sujets Bac D corriges',
    fullDescription:
      'Sujets du Baccalaureat serie D de 2019 a 2023. Maths, SVT, Chimie.',
    includes: [
      'Sujets Bac D 2019-2023',
      'Corrections detaillees',
      'Conseils de redaction',
    ],
    years: [2019, 2020, 2021, 2022, 2023],
    format: {
      digital: true,
      physical: true,
      pages: 130,
    },
    pricing: {
      digital: 5000,
      physical: 8000,
    },
    coverImage: '/images/products/annales-bac-d.jpg',
    bestseller: false,
    new: false,
  },
];

// ===== EXPORT COMBINE =====
export const allProducts = [
  ...ingenierieDocuments,
  ...medecineDocuments,
  ...infirmierDocuments,
  ...terminaleDocuments,
  ...annalesDocuments,
];

// ===== HELPERS =====
export const getProductBySlug = (slug) => {
  return allProducts.find((product) => product.slug === slug);
};

export const getProductsByCategory = (categoryId) => {
  return allProducts.filter((product) => product.category === categoryId);
};

export const getBestsellers = () => {
  return allProducts.filter((product) => product.bestseller);
};

export const getNewProducts = () => {
  return allProducts.filter((product) => product.new);
};

export const getCategoryById = (categoryId) => {
  return categories.find((cat) => cat.id === categoryId);
};

// ===== TEMOIGNAGES PRODUITS =====
export const productTestimonials = [
  {
    id: 1,
    name: 'Kevin MBALLA',
    school: 'ENSP 2024',
    product: 'Pack Complet ENSP',
    rating: 5,
    testimonial:
      "Le pack ENSP est vraiment complet. Les exercices sont progressifs et les corrections tres detaillees. C'est ce qui m'a permis de m'ameliorer semaine apres semaine.",
  },
  {
    id: 2,
    name: 'Estelle NGUEMA',
    school: 'Bac C 2024',
    product: 'Bord Maths Terminale C',
    rating: 5,
    testimonial:
      "J'ai eu 18/20 en maths au Bac grace a ce bord ! Les exercices couvrent vraiment tout le programme et les corrections sont claires.",
  },
  {
    id: 3,
    name: 'Dr. Marc EYENE',
    school: 'FMSB 2023',
    product: 'Pack FMSB',
    rating: 5,
    testimonial:
      "Les QCM de ce pack sont exactement dans l'esprit du concours. Je recommande a 100% pour toute personne qui vise la medecine.",
  },
  {
    id: 4,
    name: 'Sandrine ATEBA',
    school: 'ENSP 2024',
    product: 'Annales ENSP',
    rating: 5,
    testimonial:
      "Avoir acces a 7 ans d'annales corrigees, c'est un avantage enorme. On comprend vraiment ce que le jury attend.",
  },
];

export default allProducts;
