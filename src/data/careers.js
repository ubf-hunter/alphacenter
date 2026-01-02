// ============================================
// CAREERS - Metiers et carrieres
// Donnees completes des metiers par domaine
// ============================================

import {
  Building2,
  Cpu,
  Radio,
  Stethoscope,
  Heart,
  TrendingUp,
  Users,
  Clock,
  GraduationCap,
  Briefcase,
  MapPin,
} from 'lucide-react';

// ===== METIERS INGENIERIE =====
export const engineeringCareers = [
  {
    id: 'ingenieur-genie-civil',
    slug: 'ingenieur-genie-civil',
    domain: 'engineering',
    name: 'Ingenieur Genie Civil',
    shortName: 'Genie Civil',
    icon: Building2,
    color: 'orange',
    gradient: 'from-orange via-orange/80 to-amber-500',
    tagline: 'Construis les infrastructures de demain',
    description: 'L\'ingenieur en genie civil concoit, realise et supervise des ouvrages de construction : batiments, ponts, routes, barrages. Il est le garant de la solidite et de la securite des infrastructures.',
    missions: [
      'Concevoir des plans de construction',
      'Calculer les structures et materiaux',
      'Superviser les chantiers',
      'Assurer le respect des normes de securite',
      'Gerer les budgets et delais',
      'Coordonner les equipes techniques',
    ],
    skills: [
      { name: 'Mathematiques', level: 95 },
      { name: 'Physique', level: 90 },
      { name: 'Dessin technique/CAO', level: 85 },
      { name: 'Gestion de projet', level: 80 },
      { name: 'Leadership', level: 75 },
    ],
    qualities: [
      'Rigueur et precision',
      'Sens des responsabilites',
      'Capacite d\'analyse',
      'Travail en equipe',
      'Resistance au stress',
    ],
    education: {
      level: 'Bac + 5',
      duration: '5 ans',
      path: 'Classes preparatoires + Ecole d\'ingenieurs ou Universite',
      schools: ['ENSPY', 'ENSTP'],
    },
    salary: {
      junior: '300 000 - 450 000 FCFA',
      mid: '450 000 - 700 000 FCFA',
      senior: '700 000 - 1 200 000 FCFA',
    },
    employment: {
      rate: 92,
      sectors: ['BTP', 'Bureaux d\'etudes', 'Administration publique', 'ONG'],
      companies: ['Razel', 'Sogea Satom', 'China Road', 'MINTP'],
    },
    outlook: {
      trend: 'up',
      description: 'Forte croissance avec les grands projets d\'infrastructure au Cameroun et en Afrique',
      opportunities: [
        'Projets routiers nationaux',
        'Construction de barrages',
        'Urbanisation croissante',
        'Cooperation internationale',
      ],
    },
    relatedCareers: ['ingenieur-informatique', 'ingenieur-telecom'],
    programmes: ['ensp', 'enstp'],
  },
  {
    id: 'ingenieur-informatique',
    slug: 'ingenieur-informatique',
    domain: 'engineering',
    name: 'Ingenieur Informatique',
    shortName: 'Informatique',
    icon: Cpu,
    color: 'blue',
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    tagline: 'Code le futur numerique',
    description: 'L\'ingenieur informatique concoit, developpe et maintient des systemes informatiques. Il peut se specialiser dans le developpement logiciel, les reseaux, la cybersecurite ou l\'intelligence artificielle.',
    missions: [
      'Developper des applications et logiciels',
      'Concevoir des architectures systemes',
      'Securiser les infrastructures IT',
      'Analyser et optimiser les performances',
      'Gerer des bases de donnees',
      'Implementer des solutions cloud',
    ],
    skills: [
      { name: 'Programmation', level: 95 },
      { name: 'Algorithmique', level: 90 },
      { name: 'Bases de donnees', level: 85 },
      { name: 'Reseaux', level: 80 },
      { name: 'Cybersecurite', level: 75 },
    ],
    qualities: [
      'Logique et rigueur',
      'Curiosite technologique',
      'Capacite d\'adaptation',
      'Creativite',
      'Autonomie',
    ],
    education: {
      level: 'Bac + 5',
      duration: '5 ans',
      path: 'Classes preparatoires + Ecole d\'ingenieurs',
      schools: ['ENSPY', 'SUP\'PTIC'],
    },
    salary: {
      junior: '350 000 - 500 000 FCFA',
      mid: '500 000 - 800 000 FCFA',
      senior: '800 000 - 1 500 000 FCFA',
    },
    employment: {
      rate: 96,
      sectors: ['Tech', 'Banque', 'Telecom', 'Startups', 'Consulting'],
      companies: ['MTN', 'Orange', 'Societe Generale', 'Startups locales'],
    },
    outlook: {
      trend: 'up',
      description: 'Secteur en pleine explosion avec la transformation numerique',
      opportunities: [
        'Transformation digitale des entreprises',
        'Fintech en Afrique',
        'E-commerce',
        'Intelligence artificielle',
      ],
    },
    relatedCareers: ['ingenieur-telecom', 'ingenieur-genie-civil'],
    programmes: ['ensp', 'supptic'],
  },
  {
    id: 'ingenieur-telecom',
    slug: 'ingenieur-telecom',
    domain: 'engineering',
    name: 'Ingenieur Telecommunications',
    shortName: 'Telecom',
    icon: Radio,
    color: 'purple',
    gradient: 'from-purple-500 via-purple-600 to-violet-600',
    tagline: 'Connecte le monde',
    description: 'L\'ingenieur telecom concoit et gere les reseaux de communication : telephonie, internet, satellite. Il assure la transmission des donnees a travers le monde.',
    missions: [
      'Concevoir des reseaux de telecommunication',
      'Deployer des infrastructures telecom',
      'Optimiser les performances reseau',
      'Gerer les systemes de transmission',
      'Assurer la maintenance des equipements',
      'Developper de nouvelles solutions',
    ],
    skills: [
      { name: 'Electronique', level: 90 },
      { name: 'Reseaux', level: 95 },
      { name: 'Traitement du signal', level: 85 },
      { name: 'Protocoles telecom', level: 90 },
      { name: 'Gestion de projet', level: 75 },
    ],
    qualities: [
      'Esprit analytique',
      'Rigueur technique',
      'Adaptabilite',
      'Communication',
      'Travail sous pression',
    ],
    education: {
      level: 'Bac + 5',
      duration: '5 ans',
      path: 'Classes preparatoires + Ecole d\'ingenieurs',
      schools: ['ENSPY', 'SUP\'PTIC'],
    },
    salary: {
      junior: '350 000 - 500 000 FCFA',
      mid: '500 000 - 750 000 FCFA',
      senior: '750 000 - 1 200 000 FCFA',
    },
    employment: {
      rate: 94,
      sectors: ['Operateurs telecom', 'Equipementiers', 'Regulateurs', 'Entreprises IT'],
      companies: ['MTN', 'Orange', 'Camtel', 'Huawei', 'ART'],
    },
    outlook: {
      trend: 'up',
      description: 'Croissance portee par la 5G et l\'expansion d\'internet en Afrique',
      opportunities: [
        'Deploiement de la 5G',
        'Internet haut debit rural',
        'IoT et objets connectes',
        'Satellites de communication',
      ],
    },
    relatedCareers: ['ingenieur-informatique', 'ingenieur-genie-civil'],
    programmes: ['ensp', 'supptic'],
  },
];

// ===== METIERS MEDECINE =====
export const medicineCareers = [
  {
    id: 'medecin',
    slug: 'medecin',
    domain: 'medicine',
    name: 'Medecin',
    shortName: 'Medecin',
    icon: Stethoscope,
    color: 'emerald',
    gradient: 'from-emerald-500 via-emerald-600 to-teal-600',
    tagline: 'Soigne et sauve des vies',
    description: 'Le medecin diagnostique les maladies, prescrit des traitements et accompagne les patients. Il peut exercer en generaliste ou se specialiser dans un domaine medical specifique.',
    missions: [
      'Examiner et diagnostiquer les patients',
      'Prescrire des traitements adaptes',
      'Realiser des actes medicaux',
      'Assurer le suivi des patients',
      'Participer a la prevention sanitaire',
      'Former les futurs professionnels de sante',
    ],
    skills: [
      { name: 'Sciences biologiques', level: 95 },
      { name: 'Diagnostic medical', level: 95 },
      { name: 'Anatomie/Physiologie', level: 90 },
      { name: 'Pharmacologie', level: 85 },
      { name: 'Communication patient', level: 80 },
    ],
    qualities: [
      'Empathie et compassion',
      'Resistance au stress',
      'Capacite de decision',
      'Rigueur scientifique',
      'Ethique irreprochable',
    ],
    education: {
      level: 'Bac + 7 minimum',
      duration: '7 a 12 ans (selon specialite)',
      path: 'Faculte de Medecine + Internat',
      schools: ['FMSB Yaounde', 'FM Douala', 'Universite des Montagnes'],
    },
    salary: {
      junior: '400 000 - 600 000 FCFA',
      mid: '600 000 - 1 000 000 FCFA',
      senior: '1 000 000 - 3 000 000 FCFA',
    },
    employment: {
      rate: 98,
      sectors: ['Hopitaux publics', 'Cliniques privees', 'ONG', 'Recherche'],
      companies: ['CHU', 'Hopitaux de district', 'Cliniques privees', 'MSF'],
    },
    outlook: {
      trend: 'up',
      description: 'Besoin croissant de medecins au Cameroun et en Afrique',
      opportunities: [
        'Specialites medicales',
        'Medecine rurale',
        'Telemedicine',
        'Recherche medicale',
      ],
    },
    relatedCareers: ['infirmier'],
    programmes: ['medecine'],
  },
];

// ===== METIERS INFIRMIER =====
export const nursingCareers = [
  {
    id: 'infirmier',
    slug: 'infirmier',
    domain: 'nursing',
    name: 'Infirmier Diplome d\'Etat',
    shortName: 'Infirmier',
    icon: Heart,
    color: 'rose',
    gradient: 'from-rose-400 via-rose-500 to-pink-600',
    tagline: 'Le coeur des soins de sante',
    description: 'L\'infirmier prodigue des soins aux patients, administre les traitements prescrits et assure leur bien-etre. Il est un maillon essentiel de la chaine de soins.',
    missions: [
      'Administrer les soins prescrits',
      'Surveiller l\'etat des patients',
      'Preparer et distribuer les medicaments',
      'Accompagner les patients et leurs familles',
      'Participer a l\'education therapeutique',
      'Collaborer avec l\'equipe medicale',
    ],
    skills: [
      { name: 'Techniques de soins', level: 95 },
      { name: 'Anatomie/Physiologie', level: 85 },
      { name: 'Pharmacologie', level: 80 },
      { name: 'Hygiene hospitaliere', level: 90 },
      { name: 'Gestion du stress', level: 85 },
    ],
    qualities: [
      'Patience et ecoute',
      'Dexterite manuelle',
      'Sens de l\'observation',
      'Empathie',
      'Resistance physique',
    ],
    education: {
      level: 'Bac + 3',
      duration: '3 ans',
      path: 'Ecole d\'infirmiers / Institut de formation',
      schools: ['CESSI', 'EIFO', 'Instituts prives agrees'],
    },
    salary: {
      junior: '150 000 - 250 000 FCFA',
      mid: '250 000 - 400 000 FCFA',
      senior: '400 000 - 600 000 FCFA',
    },
    employment: {
      rate: 95,
      sectors: ['Hopitaux', 'Centres de sante', 'Cliniques', 'ONG', 'Domicile'],
      companies: ['Hopitaux publics', 'Cliniques privees', 'Croix Rouge', 'MSF'],
    },
    outlook: {
      trend: 'up',
      description: 'Penurie mondiale d\'infirmiers - opportunites nombreuses',
      opportunities: [
        'Soins intensifs',
        'Pediatrie',
        'Geriatrie',
        'Opportunites internationales',
      ],
    },
    relatedCareers: ['medecin'],
    programmes: ['infirmier'],
  },
];

// ===== EXPORT COMBINE =====
export const allCareers = [
  ...engineeringCareers,
  ...medicineCareers,
  ...nursingCareers,
];

// Helper pour trouver un metier par slug
export const getCareerBySlug = (slug) => {
  return allCareers.find(career => career.slug === slug);
};

// Helper pour filtrer les metiers par domaine
export const getCareersByDomain = (domainId) => {
  return allCareers.filter(career => career.domain === domainId);
};

export default allCareers;
