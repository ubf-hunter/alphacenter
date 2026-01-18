import {
  Atom,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle,
  Clock,
  Cog,
  FileText,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Landmark,
  MessageSquare,
  Microscope,
  Monitor,
  PenTool,
  PieChart,
  Scale,
  Stethoscope,
  Syringe,
  Target,
  TrendingUp,
  Users,
  Video,
} from 'lucide-react';

// Catégories de programmes
export const programCategories = [
  {
    id: 'engineering',
    name: "Ecoles d'Ingenieurs",
    description:
      'Preparation aux grandes ecoles polytechniques et travaux publics',
    icon: Building2,
    color: 'orange',
  },
  {
    id: 'health',
    name: 'Sante & Medecine',
    description: 'Preparation aux concours de medecine et sciences infirmieres',
    icon: Stethoscope,
    color: 'emerald',
  },
  {
    id: 'business',
    name: 'Economie & Gestion',
    description:
      'Preparation aux ecoles de commerce, gestion et administration',
    icon: Briefcase,
    color: 'blue',
  },
  {
    id: 'education',
    name: 'Education & Enseignement',
    description: "Preparation aux concours de l'Ecole Normale Superieure",
    icon: GraduationCap,
    color: 'navy',
  },
];

// Programmes principaux
export const programmes = [
  // ============== ÉCOLES D'INGÉNIEURS ==============
  {
    id: 'ensp',
    category: 'engineering',
    name: 'Programme ENSP',
    school: 'Ecole Nationale Superieure Polytechnique',
    shortName: 'ENSP',
    tagline: 'Deviens ingenieur polytechnicien',
    description:
      "Preparation intensive aux concours d'entree a l'ENSP, la plus prestigieuse ecole d'ingenieurs du Cameroun. Formation complete couvrant toutes les filieres : Genie Civil, Informatique, Electrique et Mecanique.",
    duration: '6 semaines intensives',
    sessions: ['juin', 'juillet'],
    nextSession: 'Juin 2026',
    placesAvailable: 50,
    format: 'Presentiel + modules en ligne',
    price: 45000,
    priceLabel: '45 000 FCFA ',
    successRate: 92,
    studentsPerClass: 25,
    icon: Building2,
    color: 'orange',
    gradient: 'from-orange to-orange-600',
    subjects: [
      { name: 'Mathematiques avancees', icon: Calculator, hours: 120 },
      { name: 'Physique', icon: Atom, hours: 100 },
      { name: 'Informatique', icon: Monitor, hours: 40 },
    ],
    features: [
      'Cours structures par des experts ENSP',
      'Examens blancs hebdomadaires',
      'Corrections detaillees personnalisees',
      'Acces a la plateforme e-learning',
      'Support WhatsApp 7j/7',
      'Simulateurs de concours',
    ],
    testimonial: {
      quote:
        "Grace a Alpha Center, j'ai integre l'ENSP du premier coup. La methode est vraiment efficace !",
      author: 'Jean-Marc T.',
      year: 'Promo 2024',
    },
    requirements: [
      'Baccalaureat C, D, E, F ou equivalent',
      'Motivation et engagement',
    ],
    badge: 'Plus populaire',
    badgeColor: 'bg-orange text-white',
    // Emploi du temps hebdomadaire
    schedule: [
      {
        day: 'Lundi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Mathematiques', type: 'cours' },
          { time: '11h - 13h', subject: 'Physique', type: 'cours' },
          { time: '13h30 - 15h30', subject: 'Mathematiques', type: 'TD' },
        ],
      },
      {
        day: 'Mardi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Physique', type: 'cours' },
          { time: '11h - 13h', subject: 'Mathematiques', type: 'td' },
        ],
      },
      {
        day: 'Mercredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Physique', type: 'cours' },
          { time: '11h - 13h', subject: 'Informatique', type: 'tp' },
        ],
      },
      {
        day: 'Jeudi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Mathematiques', type: 'cours' },
          { time: '11h - 13h', subject: 'Physique', type: 'cours' },
          { time: '13h30 - 15h30', subject: 'Physique', type: 'TD' },
        ],
      },
      {
        day: 'Vendredi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Revision generale',
            type: 'revision',
          },
          { time: '11h - 13h', subject: 'Examen blanc', type: 'examen' },
        ],
      },
  
    ],
    // Plans de paiement
    paymentPlans: [
      {
        name: 'Paiement integral',
        amount: 850000,
        description: 'Totalite des 6 mois',
        discount: '10% de reduction',
        recommended: true,
      },
      {
        name: 'Paiement trimestriel',
        amount: 475000,
        description: 'Par trimestre (x2)',
        discount: '5% de reduction',
        recommended: false,
      },
      {
        name: 'Paiement mensuel',
        amount: 150000,
        description: 'Par mois (x6)',
        discount: null,
        recommended: false,
      },
    ],
    // Avantages specifiques
    advantages: [
      {
        title: 'Enseignants polytechniciens',
        description: "Cours dispenses par des ingenieurs diplomes de l'ENSP",
      },
      {
        title: 'Annales corrigees',
        description: "15 ans d'annales avec corrections detaillees",
      },
      {
        title: 'Suivi personnalise',
        description: 'Entretiens individuels mensuels avec un tuteur',
      },
      {
        title: 'Simulation concours',
        description: "Conditions reelles d'examen chaque vendredi",
      },
      {
        title: 'Groupe WhatsApp VIP',
        description: 'Reponses aux questions sous 2h maximum',
      },
      {
        title: 'Acces bibliotheque',
        description: 'Espace de travail calme avec ressources',
      },
    ],
  },
  {
    id: 'enstp',
    category: 'engineering',
    name: 'Programme ENSTP',
    school: 'Ecole Nationale Superieure des Travaux Publics',
    shortName: 'ENSTP',
    tagline: 'Batis les infrastructures de demain',
    description:
      "Formation specialisee pour reussir le concours de l'ENSTP. Focus sur le genie civil, les travaux publics et les infrastructures. Ideal pour les passionnes de construction.",
    duration: '5 mois intensifs',
    sessions: ['Juillet', 'Aout'],
    nextSession: 'Juillet 2026',
    placesAvailable: 30,
    format: 'Presentiel + travaux diriges',
    price: 50000,
    priceLabel: '50 000 FCFA/session',
    successRate: 88,
    studentsPerClass: 25,
    icon: Landmark,
    color: 'navy',
    gradient: 'from-navy to-blue-800',
    subjects: [
      { name: 'Mathematiques', icon: Calculator, hours: 100 },
      { name: 'Physique', icon: Atom, hours: 80 },
      { name: 'Dessin technique', icon: PenTool, hours: 60 },
      { name: 'Mecanique', icon: Cog, hours: 50 },
    ],
    features: [
      'Cours axes sur les specificites ENSTP',
      'Travaux pratiques en dessin technique',
      'Visites de chantiers (optionnel)',
      'Examens blancs bi-mensuels',
      'Correction personnalisee',
      'Groupe WhatsApp dedie',
    ],
    testimonial: {
      quote:
        "La preparation m'a donne toutes les cles pour reussir. Les profs connaissent parfaitement le concours.",
      author: 'Sylvie M.',
      year: 'Promo 2023',
    },
    requirements: [
      'Baccalaureat C, D, E, F ou equivalent',
      'Aptitude en dessin technique appreciee',
      'Passion pour la construction',
    ],
    badge: null,
    badgeColor: '',
    schedule: [
      {
        day: 'Lundi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Mathematiques', type: 'cours' },
          { time: '11h - 13h', subject: 'Dessin technique', type: 'tp' },
        ],
      },
      {
        day: 'Mardi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Physique', type: 'cours' },
          { time: '11h - 13h', subject: 'Exercices Maths', type: 'td' },
        ],
      },
      {
        day: 'Mercredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Mecanique', type: 'cours' },
          { time: '11h - 13h', subject: 'Dessin technique', type: 'tp' },
        ],
      },
      {
        day: 'Jeudi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Mathematiques', type: 'cours' },
          { time: '11h - 13h', subject: 'Exercices Physique', type: 'td' },
        ],
      },
      {
        day: 'Vendredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Revision', type: 'revision' },
          { time: '11h - 13h', subject: 'Examen blanc', type: 'examen' },
        ],
      },
      {
        day: 'Samedi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Correction + Tutorat',
            type: 'tutorat',
          },
        ],
      },
    ],
    paymentPlans: [
      {
        name: 'Paiement integral',
        amount: 50000,
        description: 'Totalite des 6 semaines',
        discount: '10% de reduction',
        recommended: true,
      },
      {
        name: 'Paiement mensuel',
        amount: 50000,
        description: 'Par session (x5)',
        discount: null,
        recommended: false,
      },
    ],
    advantages: [
      {
        title: 'Experts travaux publics',
        description: 'Formateurs issus du secteur BTP et genie civil',
      },
      {
        title: 'Dessin technique intensif',
        description: 'Maitrise complete du dessin industriel',
      },
      {
        title: 'Visites de chantiers',
        description: 'Immersion sur des projets reels (optionnel)',
      },
      {
        title: 'Annales specifiques',
        description: "10 ans d'annales ENSTP corrigees",
      },
      {
        title: 'Accompagnement personnalise',
        description: 'Suivi individuel de progression',
      },
      {
        title: 'Materiel fourni',
        description: 'Instruments de dessin technique inclus',
      },
    ],
  },
  {
    id: 'prepa-vogt',
    category: 'engineering',
    name: 'Programme Prepa Vogt',
    school: 'Classes Preparatoires College Vogt - Ecoles Ingenieurs France',
    shortName: 'Prepa Vogt',
    tagline: '2 ans Cameroun + 3 ans France = Ingenieur',
    description:
      "Preparation aux classes preparatoires scientifiques du College Vogt. Formation d'excellence de 2 ans au Cameroun suivie de 3 ans en ecole d'ingenieurs en France. Acces aux grandes ecoles francaises (Centrale, Mines, Arts et Metiers, ENSAM...).",
    duration: '2 ans + 3 ans etranger',
    sessions: ['Septembre'],
    nextSession: 'Septembre 2026',
    placesAvailable: 25,
    format: 'Presentiel intensif',
    price: 200000,
    priceLabel: '200 000 FCFA/mois',
    successRate: 90,
    studentsPerClass: 20,
    icon: GraduationCap,
    color: 'indigo',
    gradient: 'from-indigo-600 to-purple-700',
    subjects: [
      { name: 'Mathematiques superieures', icon: Calculator, hours: 150 },
      { name: 'Physique approfondie', icon: Atom, hours: 120 },
      { name: 'Sciences de lingenieur', icon: Cog, hours: 80 },
      { name: 'Francais & Philosophie', icon: BookOpen, hours: 40 },
    ],
    features: [
      'Programme CPGE (Classes Preparatoires)',
      'Professeurs agreges et certifies',
      'Partenariat avec ecoles francaises',
      'Accompagnement visa et logement',
      'Concours blancs type CNC/CCINP',
      'Suivi personnalise continu',
    ],
    testimonial: {
      quote:
        "Apres 2 ans de prepa au Cameroun, j'ai integre Centrale Lyon. Alpha Center m'a prepare parfaitement aux exigences francaises.",
      author: 'Patrick M.',
      year: 'Promo 2023',
    },
    requirements: [
      'Baccalaureat C, D ou E avec mention',
      'Excellent niveau en Maths et Physique',
      'Motivation pour etudes longues',
      'Projet de poursuivre en France',
    ],
    badge: 'International',
    badgeColor: 'bg-indigo-600 text-white',
    schedule: [
      {
        day: 'Lundi',
        sessions: [
          { time: '08h - 10h', subject: 'Mathematiques', type: 'cours' },
          { time: '10h - 12h', subject: 'Physique', type: 'cours' },
          { time: '14h - 16h', subject: 'Mathematiques', type: 'td' },
        ],
      },
      {
        day: 'Mardi',
        sessions: [
          { time: '08h - 10h', subject: 'Physique', type: 'cours' },
          { time: '10h - 12h', subject: 'Sciences Ingenieur', type: 'cours' },
          { time: '14h - 16h', subject: 'Physique', type: 'td' },
        ],
      },
      {
        day: 'Mercredi',
        sessions: [
          { time: '08h - 10h', subject: 'Mathematiques', type: 'cours' },
          { time: '10h - 12h', subject: 'Francais-Philo', type: 'cours' },
          { time: '14h - 16h', subject: 'Sciences Ingenieur', type: 'tp' },
        ],
      },
      {
        day: 'Jeudi',
        sessions: [
          { time: '08h - 10h', subject: 'Physique', type: 'cours' },
          { time: '10h - 12h', subject: 'Mathematiques', type: 'cours' },
          { time: '14h - 16h', subject: 'Khôlle Maths', type: 'td' },
        ],
      },
      {
        day: 'Vendredi',
        sessions: [
          { time: '08h - 10h', subject: 'Sciences Ingenieur', type: 'cours' },
          { time: '10h - 12h', subject: 'Khôlle Physique', type: 'td' },
        ],
      },
      {
        day: 'Samedi',
        sessions: [
          { time: '08h - 12h', subject: 'Concours blanc', type: 'examen' },
        ],
      },
    ],
    paymentPlans: [
      {
        name: 'Paiement annuel',
        amount: 1800000,
        description: 'Totalite de l annee',
        discount: '10% de reduction',
        recommended: true,
      },
      {
        name: 'Paiement trimestriel',
        amount: 650000,
        description: 'Par trimestre (x3)',
        discount: '5% de reduction',
        recommended: false,
      },
      {
        name: 'Paiement mensuel',
        amount: 200000,
        description: 'Par mois (x10)',
        discount: null,
        recommended: false,
      },
    ],
    advantages: [
      {
        title: 'Diplome international',
        description: 'Acces aux grandes ecoles francaises',
      },
      {
        title: 'Programme CPGE',
        description: 'Meme programme que les prepas francaises',
      },
      {
        title: 'Accompagnement complet',
        description: 'Visa, logement, integration en France',
      },
      {
        title: 'Khôlles hebdomadaires',
        description: 'Interrogations orales individuelles',
      },
      {
        title: 'Concours blancs',
        description: 'Epreuves type CNC et CCINP',
      },
      {
        title: 'Reseau alumni',
        description: 'Anciens dans les grandes ecoles',
      },
    ],
  },
  {
    id: 'saint-jean',
    category: 'engineering',
    name: 'Programme Saint Jean',
    school: 'Classes Preparatoires Saint Jean - Ecoles Ingenieurs France',
    shortName: 'Saint Jean',
    tagline: '2 ans Cameroun + 3 ans France = Ingenieur',
    description:
      "Preparation aux classes preparatoires scientifiques du Lycee Saint Jean Bosco. Parcours d'excellence avec 2 ans au Cameroun puis integration dans les ecoles d'ingenieurs francaises (INSA, Polytech, ENSEA, UTC...).",
    duration: '2 ans + 3 ans etranger',
    sessions: ['Septembre'],
    nextSession: 'Septembre 2026',
    placesAvailable: 25,
    format: 'Presentiel intensif',
    price: 190000,
    priceLabel: '190 000 FCFA/mois',
    successRate: 88,
    studentsPerClass: 20,
    icon: GraduationCap,
    color: 'blue',
    gradient: 'from-blue-600 to-indigo-700',
    subjects: [
      { name: 'Mathematiques superieures', icon: Calculator, hours: 150 },
      { name: 'Physique-Chimie', icon: Atom, hours: 130 },
      { name: 'Sciences de lingenieur', icon: Cog, hours: 70 },
      { name: 'Anglais technique', icon: BookOpen, hours: 40 },
    ],
    features: [
      'Programme type MPSI/PCSI',
      'Enseignants experimentes',
      'Partenariats ecoles francaises',
      'Preparation aux concours INSA/Polytech',
      'Tutorat par anciens eleves',
      'Accompagnement administratif',
    ],
    testimonial: {
      quote:
        "Grace a Saint Jean et Alpha Center, j'ai integre l'INSA Lyon. La preparation etait rigoureuse mais efficace.",
      author: 'Diane K.',
      year: 'Promo 2023',
    },
    requirements: [
      'Baccalaureat C, D ou E avec mention',
      'Tres bon niveau scientifique',
      'Bonne maitrise du francais',
      'Ambition internationale',
    ],
    badge: 'International',
    badgeColor: 'bg-blue-600 text-white',
    schedule: [
      {
        day: 'Lundi',
        sessions: [
          { time: '08h - 10h', subject: 'Mathematiques', type: 'cours' },
          { time: '10h - 12h', subject: 'Physique-Chimie', type: 'cours' },
          { time: '14h - 16h', subject: 'Mathematiques', type: 'td' },
        ],
      },
      {
        day: 'Mardi',
        sessions: [
          { time: '08h - 10h', subject: 'Physique-Chimie', type: 'cours' },
          { time: '10h - 12h', subject: 'Sciences Ingenieur', type: 'cours' },
          { time: '14h - 16h', subject: 'Physique', type: 'td' },
        ],
      },
      {
        day: 'Mercredi',
        sessions: [
          { time: '08h - 10h', subject: 'Mathematiques', type: 'cours' },
          { time: '10h - 12h', subject: 'Anglais technique', type: 'cours' },
          { time: '14h - 16h', subject: 'Sciences Ingenieur', type: 'tp' },
        ],
      },
      {
        day: 'Jeudi',
        sessions: [
          { time: '08h - 10h', subject: 'Physique-Chimie', type: 'cours' },
          { time: '10h - 12h', subject: 'Mathematiques', type: 'cours' },
          { time: '14h - 16h', subject: 'Khôlle', type: 'td' },
        ],
      },
      {
        day: 'Vendredi',
        sessions: [
          { time: '08h - 10h', subject: 'Sciences Ingenieur', type: 'cours' },
          { time: '10h - 12h', subject: 'Tutorat', type: 'tutorat' },
        ],
      },
      {
        day: 'Samedi',
        sessions: [
          { time: '08h - 12h', subject: 'Devoir surveille', type: 'examen' },
        ],
      },
    ],
    paymentPlans: [
      {
        name: 'Paiement annuel',
        amount: 1710000,
        description: 'Totalite de l annee',
        discount: '10% de reduction',
        recommended: true,
      },
      {
        name: 'Paiement trimestriel',
        amount: 620000,
        description: 'Par trimestre (x3)',
        discount: '5% de reduction',
        recommended: false,
      },
      {
        name: 'Paiement mensuel',
        amount: 190000,
        description: 'Par mois (x10)',
        discount: null,
        recommended: false,
      },
    ],
    advantages: [
      {
        title: 'Parcours international',
        description: 'Diplome ingenieur francais reconnu',
      },
      {
        title: 'Methode eprouvee',
        description: 'Des annees de reussite aux concours',
      },
      {
        title: 'Reseau partenaires',
        description: 'INSA, Polytech, UTC, ENSEA...',
      },
      {
        title: 'Tutorat personnalise',
        description: 'Anciens eleves en ecole',
      },
      {
        title: 'Anglais technique',
        description: 'Preparation pour etudes en France',
      },
      {
        title: 'Suivi administratif',
        description: 'Aide visa et inscription',
      },
    ],
  },

  // ============== SANTÉ & MÉDECINE ==============
  {
    id: 'medecine',
    category: 'health',
    name: 'Programme Medecine',
    school: 'FMSB / FMS Douala / Facultes de Medecine',
    shortName: 'FMSB',
    tagline: 'Deviens medecin, sauve des vies',
    description:
      "Preparation complete et intensive aux concours d'entree dans les facultes de medecine du Cameroun (FMSB Yaounde, FMS Douala, etc.). Programme couvrant toutes les matieres scientifiques avec un focus sur la biologie et la chimie.",
    duration: '8 mois intensifs',
    sessions: ['Septembre', 'Juin'],
    nextSession: 'Juin 2026',
    placesAvailable: 40,
    format: 'Presentiel + laboratoires + e-learning',
    price: 175000,
    priceLabel: '175 000 FCFA/mois',
    successRate: 78,
    studentsPerClass: 30,
    icon: Stethoscope,
    color: 'emerald',
    gradient: 'from-emerald-500 to-emerald-700',
    subjects: [
      { name: 'Biologie cellulaire', icon: Microscope, hours: 120 },
      { name: 'Chimie organique', icon: FlaskConical, hours: 100 },
      { name: 'Physique medicale', icon: Atom, hours: 80 },
      { name: 'Mathematiques', icon: Calculator, hours: 60 },
    ],
    features: [
      'Cours dispenses par des medecins et enseignants universitaires',
      'Travaux pratiques en laboratoire',
      'QCM intensifs type concours',
      'Preparation aux entretiens de motivation',
      'Acces aux annales des 10 dernieres annees',
      'Coaching mental et gestion du stress',
    ],
    testimonial: {
      quote:
        "Alpha Center m'a permis d'integrer la FMSB. Leur methode de QCM intensifs est exactement ce qu'il faut pour ce concours.",
      author: 'Christelle A.',
      year: 'Promo 2024',
    },
    requirements: [
      'Baccalaureat C ou D obligatoire',
      'Excellente moyenne en SVT et Chimie',
      'Forte motivation pour la medecine',
    ],
    badge: 'Nouveau',
    badgeColor: 'bg-emerald-500 text-white',
    schedule: [
      {
        day: 'Lundi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Biologie cellulaire',
            type: 'cours',
          },
          { time: '11h - 13h', subject: 'Chimie organique', type: 'cours' },
        ],
      },
      {
        day: 'Mardi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Physique medicale',
            type: 'cours',
          },
          { time: '11h - 13h', subject: 'QCM Biologie', type: 'td' },
        ],
      },
      {
        day: 'Mercredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Chimie organique', type: 'cours' },
          { time: '11h - 13h', subject: 'Travaux pratiques', type: 'tp' },
        ],
      },
      {
        day: 'Jeudi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Biologie', type: 'cours' },
          { time: '11h - 13h', subject: 'QCM Chimie', type: 'td' },
        ],
      },
      {
        day: 'Vendredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Mathematiques', type: 'cours' },
          { time: '11h - 13h', subject: 'Concours blanc', type: 'examen' },
        ],
      },
      {
        day: 'Samedi',
        sessions: [
          {
            time: '08h30 - 13h',
            subject: 'Correction + Coaching',
            type: 'tutorat',
          },
        ],
      },
    ],
    paymentPlans: [
      {
        name: 'Paiement integral',
        amount: 1260000,
        description: 'Totalite des 8 mois',
        discount: '10% de reduction',
        recommended: true,
      },
      {
        name: 'Paiement trimestriel',
        amount: 490000,
        description: 'Par trimestre (x3)',
        discount: '5% de reduction',
        recommended: false,
      },
      {
        name: 'Paiement mensuel',
        amount: 175000,
        description: 'Par mois (x8)',
        discount: null,
        recommended: false,
      },
    ],
    advantages: [
      {
        title: 'Medecins enseignants',
        description: 'Cours par des professionnels de sante en exercice',
      },
      {
        title: 'QCM intensifs',
        description: 'Plus de 5000 QCM types concours FMSB',
      },
      {
        title: 'Laboratoire equippe',
        description: 'Travaux pratiques en conditions reelles',
      },
      {
        title: 'Coaching mental',
        description: 'Preparation psychologique au concours',
      },
      {
        title: 'Annales completes',
        description: "10 ans d'annales avec corrections detaillees",
      },
      {
        title: "Groupe d'entraide",
        description: "Communaute d'etudiants motivees",
      },
    ],
  },
  {
    id: 'infirmier',
    category: 'health',
    name: 'Programme Sciences Infirmieres',
    school: "Concours IDE / Ecoles d'Infirmiers d'Etat",
    shortName: 'IDE',
    tagline: 'Soigne avec passion et competence',
    description:
      "Preparation aux concours d'entree dans les ecoles d'infirmiers d'Etat et le Concours IDE. Formation complete incluant les sciences biologiques, les soins de base et la culture generale medicale.",
    duration: '5 mois intensifs',
    sessions: ['Septembre', 'Mars'],
    nextSession: 'Mars 2026',
    placesAvailable: 35,
    format: 'Presentiel + stages pratiques',
    price: 120000,
    priceLabel: '120 000 FCFA/mois',
    successRate: 85,
    studentsPerClass: 25,
    icon: HeartPulse,
    color: 'rose',
    gradient: 'from-rose-500 to-rose-600',
    subjects: [
      { name: 'Biologie humaine', icon: Microscope, hours: 80 },
      { name: 'Anatomie-Physiologie', icon: HeartPulse, hours: 70 },
      { name: 'Hygiene et soins', icon: Syringe, hours: 50 },
      { name: 'Culture generale medicale', icon: BookOpen, hours: 40 },
    ],
    features: [
      'Cours theoriques et pratiques',
      'Simulations de soins infirmiers',
      'Preparation aux QCM et redactions',
      'Visites en milieu hospitalier',
      'Coaching pour les entretiens',
      'Supports de cours complets',
    ],
    testimonial: {
      quote:
        "J'ai reussi le concours Concours IDE grace a cette preparation. Les stages pratiques m'ont vraiment aide.",
      author: 'Marie-Claire N.',
      year: 'Promo 2024',
    },
    requirements: [
      'Baccalaureat A, C, D ou equivalent',
      'Age entre 17 et 28 ans',
      'Aptitude physique et mentale',
    ],
    badge: 'Demande',
    badgeColor: 'bg-rose-500 text-white',
    schedule: [
      {
        day: 'Lundi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Biologie humaine', type: 'cours' },
          { time: '11h - 13h', subject: 'Anatomie', type: 'cours' },
        ],
      },
      {
        day: 'Mardi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Hygiene et soins', type: 'cours' },
          { time: '11h - 13h', subject: 'Pratique soins', type: 'tp' },
        ],
      },
      {
        day: 'Mercredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Physiologie', type: 'cours' },
          { time: '11h - 13h', subject: 'Culture medicale', type: 'td' },
        ],
      },
      {
        day: 'Jeudi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Biologie', type: 'cours' },
          { time: '11h - 13h', subject: 'QCM entrainement', type: 'td' },
        ],
      },
      {
        day: 'Vendredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Revision', type: 'revision' },
          { time: '11h - 13h', subject: 'Examen blanc', type: 'examen' },
        ],
      },
      {
        day: 'Samedi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Correction + Tutorat',
            type: 'tutorat',
          },
        ],
      },
    ],
    paymentPlans: [
      {
        name: 'Paiement integral',
        amount: 540000,
        description: 'Totalite des 5 mois',
        discount: '10% de reduction',
        recommended: true,
      },
      {
        name: 'Paiement mensuel',
        amount: 120000,
        description: 'Par mois (x5)',
        discount: null,
        recommended: false,
      },
    ],
    advantages: [
      {
        title: 'Formateurs de sante',
        description: 'Infirmiers et medecins en exercice',
      },
      {
        title: 'Stages pratiques',
        description: 'Immersion en milieu hospitalier',
      },
      {
        title: 'Simulations soins',
        description: 'Mannequins et materiel professionnel',
      },
      {
        title: 'Entretiens prepares',
        description: "Coaching pour les oraux d'admission",
      },
      {
        title: 'Culture medicale',
        description: 'Actualites et ethique du metier',
      },
      {
        title: 'Reseau professionnel',
        description: 'Contact avec des IDE en poste',
      },
    ],
  },

  // ============== ÉCONOMIE & GESTION ==============
  {
    id: 'essec',
    category: 'business',
    name: 'Programme ESSEC',
    school: 'Ecole Superieure des Sciences Economiques et Commerciales',
    shortName: 'ESSEC',
    tagline: 'Deviens un leader en gestion et commerce',
    description:
      "Preparation intensive aux concours d'entree a l'ESSEC de Douala, l'une des meilleures ecoles de commerce et gestion du Cameroun. Formation complete en economie, gestion, comptabilite et techniques commerciales.",
    duration: '5 mois intensifs',
    sessions: ['Juin', 'Septembre'],
    nextSession: 'Juin 2026',
    placesAvailable: 30,
    format: 'Presentiel + etudes de cas',
    price: 135000,
    priceLabel: '135 000 FCFA/mois',
    successRate: 82,
    studentsPerClass: 25,
    icon: BarChart3,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-700',
    subjects: [
      { name: 'Economie generale', icon: PieChart, hours: 80 },
      { name: 'Comptabilite & Gestion', icon: Calculator, hours: 100 },
      { name: 'Mathematiques financieres', icon: BarChart3, hours: 60 },
      { name: 'Culture generale economique', icon: BookOpen, hours: 40 },
    ],
    features: [
      'Cours dispenses par des professionnels du secteur',
      'Etudes de cas pratiques',
      "Simulations de gestion d'entreprise",
      'Preparation aux QCM et dissertations',
      'Coaching pour les entretiens',
      'Acces aux annales des concours',
    ],
    testimonial: {
      quote:
        "La methode Alpha m'a permis de maitriser les techniques de dissertation economique. J'ai integre l'ESSEC avec mention.",
      author: 'Kevin M.',
      year: 'Promo 2024',
    },
    requirements: [
      'Baccalaureat A, B, C, D, G ou equivalent',
      'Bon niveau en mathematiques et francais',
      'Interet pour le monde des affaires',
    ],
    badge: 'Nouveau',
    badgeColor: 'bg-blue-500 text-white',
    schedule: [
      {
        day: 'Lundi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Economie generale',
            type: 'cours',
          },
          { time: '11h - 13h', subject: 'Comptabilite', type: 'cours' },
        ],
      },
      {
        day: 'Mardi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Gestion', type: 'cours' },
          { time: '11h - 13h', subject: 'Exercices pratiques', type: 'td' },
        ],
      },
      {
        day: 'Mercredi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Maths financieres',
            type: 'cours',
          },
          { time: '11h - 13h', subject: 'Etude de cas', type: 'tp' },
        ],
      },
      {
        day: 'Jeudi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Culture eco.', type: 'cours' },
          { time: '11h - 13h', subject: 'Dissertation', type: 'td' },
        ],
      },
      {
        day: 'Vendredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Revision', type: 'revision' },
          { time: '11h - 13h', subject: 'Examen blanc', type: 'examen' },
        ],
      },
      {
        day: 'Samedi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Correction + Coaching',
            type: 'tutorat',
          },
        ],
      },
    ],
    paymentPlans: [
      {
        name: 'Paiement integral',
        amount: 607500,
        description: 'Totalite des 5 mois',
        discount: '10% de reduction',
        recommended: true,
      },
      {
        name: 'Paiement mensuel',
        amount: 135000,
        description: 'Par mois (x5)',
        discount: null,
        recommended: false,
      },
    ],
    advantages: [
      {
        title: 'Professionnels du secteur',
        description: 'Experts en economie et finance',
      },
      {
        title: 'Etudes de cas reels',
        description: "Analyses d'entreprises camerounaises",
      },
      {
        title: 'Techniques de dissertation',
        description: 'Methodologie specifique ESSEC',
      },
      {
        title: "Simulation d'entreprise",
        description: 'Jeux de gestion pratiques',
      },
      {
        title: 'Coaching entretien',
        description: "Preparation aux oraux d'admission",
      },
      { title: 'Reseau alumni', description: "Contact avec d'anciens admis" },
    ],
  },
  {
    id: 'ucac',
    category: 'business',
    name: 'Programme UCAC',
    school: "Universite Catholique d'Afrique Centrale",
    shortName: 'UCAC',
    tagline: 'Excellence en sciences economiques et administration',
    description:
      "Preparation aux concours d'entree a l'UCAC (FSSG, FSGA). Formation rigoureuse en economie, droit, gestion et administration des entreprises dans un cadre d'excellence.",
    duration: '4 mois intensifs',
    sessions: ['Fevrier', 'Septembre'],
    nextSession: 'Fevrier 2026',
    placesAvailable: 25,
    format: 'Presentiel + travaux diriges',
    price: 140000,
    priceLabel: '140 000 FCFA/mois',
    successRate: 80,
    studentsPerClass: 20,
    icon: Scale,
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-700',
    subjects: [
      { name: 'Economie politique', icon: PieChart, hours: 70 },
      { name: 'Introduction au droit', icon: Scale, hours: 60 },
      { name: 'Gestion des organisations', icon: Briefcase, hours: 50 },
      { name: 'Methodologie universitaire', icon: BookOpen, hours: 40 },
    ],
    features: [
      "Preparation adaptee aux exigences de l'UCAC",
      'Cours de methodologie universitaire',
      'Travaux diriges en groupe',
      'Examens blancs reguliers',
      'Preparation aux tests psychotechniques',
      'Suivi personnalise',
    ],
    testimonial: {
      quote:
        "Grace a Alpha Center, j'ai reussi le concours de la FSSG. La preparation en droit et economie etait excellente.",
      author: 'Aurelia T.',
      year: 'Promo 2024',
    },
    requirements: [
      'Baccalaureat toutes series',
      'Bon dossier scolaire',
      'Motivation pour les etudes superieures',
    ],
    badge: 'Demande',
    badgeColor: 'bg-indigo-500 text-white',
    schedule: [
      {
        day: 'Lundi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Economie politique',
            type: 'cours',
          },
          {
            time: '11h - 13h',
            subject: 'Introduction au droit',
            type: 'cours',
          },
        ],
      },
      {
        day: 'Mardi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Gestion', type: 'cours' },
          { time: '11h - 13h', subject: 'Travaux diriges', type: 'td' },
        ],
      },
      {
        day: 'Mercredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Methodologie', type: 'cours' },
          { time: '11h - 13h', subject: 'Tests psycho.', type: 'tp' },
        ],
      },
      {
        day: 'Jeudi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Droit', type: 'cours' },
          { time: '11h - 13h', subject: 'Exercices', type: 'td' },
        ],
      },
      {
        day: 'Vendredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Revision', type: 'revision' },
          { time: '11h - 13h', subject: 'Examen blanc', type: 'examen' },
        ],
      },
      {
        day: 'Samedi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Correction + Suivi',
            type: 'tutorat',
          },
        ],
      },
    ],
    paymentPlans: [
      {
        name: 'Paiement integral',
        amount: 504000,
        description: 'Totalite des 4 mois',
        discount: '10% de reduction',
        recommended: true,
      },
      {
        name: 'Paiement mensuel',
        amount: 140000,
        description: 'Par mois (x4)',
        discount: null,
        recommended: false,
      },
    ],
    advantages: [
      {
        title: 'Exigence UCAC',
        description: 'Preparation adaptee aux standards',
      },
      {
        title: 'Methodologie universitaire',
        description: 'Redaction et analyse critique',
      },
      {
        title: 'Tests psychotechniques',
        description: "Entrainement aux tests d'aptitude",
      },
      {
        title: 'Petits groupes',
        description: 'Maximum 20 etudiants par classe',
      },
      {
        title: 'Suivi personnalise',
        description: 'Rendez-vous individuels reguliers',
      },
      {
        title: 'Culture generale',
        description: "Actualites et debats d'idees",
      },
    ],
  },

  // ============== ÉDUCATION ==============
  {
    id: 'ens',
    category: 'education',
    name: 'Programme ENS',
    school: 'Ecole Normale Superieure',
    shortName: 'ENS',
    tagline: 'Forme les formateurs de demain',
    description:
      "Preparation complete aux concours de l'ENS, toutes specialites confondues. Ideal pour ceux qui souhaitent devenir enseignants ou poursuivre en recherche academique.",
    duration: '4 mois intensifs',
    sessions: ['Mars', 'Septembre'],
    nextSession: 'Mars 2026',
    placesAvailable: 35,
    format: 'Presentiel + coaching personnalise',
    price: 130000,
    priceLabel: '130 000 FCFA/mois',
    successRate: 85,
    studentsPerClass: 20,
    icon: GraduationCap,
    color: 'apricot',
    gradient: 'from-apricot to-orange-300',
    subjects: [
      { name: 'Specialite au choix', icon: BookOpen, hours: 100 },
      { name: 'Culture generale', icon: Brain, hours: 40 },
      { name: 'Methodologie', icon: Target, hours: 30 },
      { name: 'Expression ecrite', icon: FileText, hours: 30 },
    ],
    features: [
      'Cours adaptes a chaque specialite',
      'Coaching individuel inclus',
      "Preparation a l'oral",
      'Examens blancs reguliers',
      'Bibliotheque de ressources',
      'Suivi personnalise',
    ],
    testimonial: {
      quote:
        "Le coaching personnalise fait vraiment la difference. J'ai progresse de maniere incroyable.",
      author: 'Paul K.',
      year: 'Promo 2024',
    },
    requirements: [
      'Baccalaureat toutes series',
      'Bon niveau dans la specialite choisie',
      "Interet pour l'enseignement",
    ],
    badge: null,
    badgeColor: '',
    schedule: [
      {
        day: 'Lundi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Specialite', type: 'cours' },
          { time: '11h - 13h', subject: 'Culture generale', type: 'cours' },
        ],
      },
      {
        day: 'Mardi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Methodologie', type: 'cours' },
          { time: '11h - 13h', subject: 'Expression ecrite', type: 'td' },
        ],
      },
      {
        day: 'Mercredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Specialite', type: 'cours' },
          { time: '11h - 13h', subject: 'Preparation oral', type: 'tp' },
        ],
      },
      {
        day: 'Jeudi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Culture generale', type: 'cours' },
          { time: '11h - 13h', subject: 'Exercices', type: 'td' },
        ],
      },
      {
        day: 'Vendredi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Revision', type: 'revision' },
          { time: '11h - 13h', subject: 'Examen blanc', type: 'examen' },
        ],
      },
      {
        day: 'Samedi',
        sessions: [
          {
            time: '08h30 - 10h30',
            subject: 'Coaching individuel',
            type: 'tutorat',
          },
        ],
      },
    ],
    paymentPlans: [
      {
        name: 'Paiement integral',
        amount: 468000,
        description: 'Totalite des 4 mois',
        discount: '10% de reduction',
        recommended: true,
      },
      {
        name: 'Paiement mensuel',
        amount: 130000,
        description: 'Par mois (x4)',
        discount: null,
        recommended: false,
      },
    ],
    advantages: [
      {
        title: 'Multi-specialites',
        description: 'Sciences, Lettres, Langues, etc.',
      },
      {
        title: 'Coaching personnalise',
        description: 'Suivi individuel hebdomadaire',
      },
      {
        title: 'Preparation orale',
        description: "Simulations d'entretien regulieres",
      },
      {
        title: 'Petits effectifs',
        description: 'Maximum 20 etudiants par groupe',
      },
      {
        title: 'Culture generale',
        description: 'Actualites et debats de societe',
      },
      {
        title: 'Ressources completes',
        description: 'Bibliotheque et supports numeriques',
      },
    ],
  },

  // ============== PROGRAMME PRÉPARATOIRE ==============
  {
    id: 'preparatoire',
    category: 'all',
    name: 'Programme Preparatoire',
    school: 'Pour eleves de Terminale',
    shortName: 'PREPA',
    tagline: "Prends de l'avance sur les concours",
    description:
      "Programme de preparation anticipee pour les eleves en classe de Terminale. Permet de renforcer les bases et d'acquerir la methodologie des concours (Ingenieurs, Medecine, Infirmiers) avant meme le Baccalaureat.",
    duration: '3 mois',
    sessions: ["Continue toute l'annee"],
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
      { name: 'Mathematiques renforcees', icon: Calculator, hours: 60 },
      { name: 'Physique-Chimie', icon: Atom, hours: 50 },
      { name: 'Biologie (option sante)', icon: Microscope, hours: 40 },
      { name: 'Methodologie', icon: Target, hours: 20 },
    ],
    features: [
      'Compatible avec les cours de Terminale',
      'Renforcement des fondamentaux',
      'Introduction a la methodologie concours',
      'Evaluations regulieres',
      'Orientation personnalisee (Ingenieur ou Sante)',
      'Preparation mentale',
    ],
    testimonial: {
      quote:
        "J'ai commence en Terminale et j'etais pret des la fin du Bac. Ca m'a fait gagner une annee !",
      author: 'Esther N.',
      year: 'Promo 2024',
    },
    requirements: [
      'Etre en classe de Terminale C, D, E ou F',
      'Viser une grande ecole (Ingenieur, Medecine, Infirmier)',
      'Disponibilite les weekends',
    ],
    badge: 'Anticipe',
    badgeColor: 'bg-gray-600 text-white',
    schedule: [
      {
        day: 'Samedi',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Maths renforcees', type: 'cours' },
          { time: '11h - 13h', subject: 'Physique-Chimie', type: 'cours' },
        ],
      },
      {
        day: 'Dimanche',
        sessions: [
          { time: '08h30 - 10h30', subject: 'Biologie (sante)', type: 'cours' },
          { time: '11h - 16h', subject: 'Methodologie', type: 'td' },
        ],
      },
    ],
    paymentPlans: [
      {
        name: 'Paiement integral',
        amount: 270000,
        description: 'Totalite des 3 mois',
        discount: '10% de reduction',
        recommended: true,
      },
      {
        name: 'Paiement mensuel',
        amount: 100000,
        description: 'Par mois (x3)',
        discount: null,
        recommended: false,
      },
    ],
    advantages: [
      {
        title: 'Compatible Terminale',
        description: 'Cours les weekends uniquement',
      },
      {
        title: 'Avance strategique',
        description: 'Preparation avant le Baccalaureat',
      },
      {
        title: 'Orientation personnalisee',
        description: 'Choix Ingenieur ou Sante',
      },
      { title: 'Bases solides', description: 'Renforcement des fondamentaux' },
      { title: 'Methodologie concours', description: 'Techniques specifiques' },
      {
        title: 'Evaluation continue',
        description: 'Suivi de progression regulier',
      },
    ],
  },
];

// Méthodologie d'enseignement
export const methodology = [
  {
    step: 1,
    title: 'Diagnostic initial',
    description:
      "Evaluation complete de ton niveau pour identifier tes forces et axes d'amelioration.",
    icon: Target,
    color: 'orange',
  },
  {
    step: 2,
    title: 'Plan personnalise',
    description:
      "Programme d'etudes adapte a ton profil et tes objectifs specifiques.",
    icon: FileText,
    color: 'navy',
  },
  {
    step: 3,
    title: 'Cours structures',
    description:
      'Enseignement progressif par des experts ayant reussi les concours.',
    icon: BookOpen,
    color: 'orange',
  },
  {
    step: 4,
    title: 'Examens blancs',
    description:
      'Tests reguliers en conditions reelles pour mesurer ta progression.',
    icon: FileText,
    color: 'navy',
  },
  {
    step: 5,
    title: 'Corrections detaillees',
    description:
      'Analyse approfondie de chaque copie avec conseils personnalises.',
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
    description: 'Maximum 30 etudiants par classe pour un suivi optimal',
    icon: Users,
    value: '30 max',
  },
  {
    title: 'Taux de reussite',
    description: "Moyenne sur l'ensemble de nos programmes",
    icon: Award,
    value: '85%+',
  },
  {
    title: 'Heures de cours',
    description: 'Volume horaire intensif par programme',
    icon: Clock,
    value: '300h+',
  },
  {
    title: 'Examens blancs',
    description: 'Tests en conditions reelles par mois',
    icon: FileText,
    value: '4/mois',
  },
];

// Calendrier des sessions
export const calendar = [
  {
    programme: 'ENSP',
    category: 'engineering',
    sessions: [
      {
        name: 'Session Juin-Juillet 2026',
        startDate: '1 Juin 2026',
        endDate: '10 Juillet 2026',
        status: 'open',
        places: 25,
        placesLeft: 12,
      },
    ],
  },
  {
    programme: 'ENSTP',
    category: 'engineering',
    sessions: [
      {
        name: 'Session Juin-Juillet 2026',
        startDate: '1 Juin 2026',
        endDate: '10 Juillet 2026',
        status: 'open',
        places: 30,
        placesLeft: 18,
      },
      {
        name: 'Session Juillet-Aout 2026',
        startDate: '13 Juillet 2026',
        endDate: 'Aout 2026',
        status: 'upcoming',
        places: 30,
        placesLeft: 30,
      },
    ],
  },
  {
    programme: 'Prepa Vogt',
    category: 'engineering',
    sessions: [
      {
        name: 'Annee 2026-2027',
        startDate: 'Septembre 2026',
        endDate: 'Juin 2027',
        status: 'open',
        places: 25,
        placesLeft: 15,
      },
    ],
  },
  {
    programme: 'Saint Jean',
    category: 'engineering',
    sessions: [
      {
        name: 'Annee 2026-2027',
        startDate: 'Septembre 2026',
        endDate: 'Juin 2027',
        status: 'open',
        places: 25,
        placesLeft: 18,
      },
    ],
  },
  {
    programme: 'Medecine (FMSB)',
    category: 'health',
    sessions: [
      {
        name: 'Session Juin-Juillet 2026',
        startDate: '1 Juin 2026',
        endDate: '10 Juillet 2026',
        status: 'open',
        places: 40,
        placesLeft: 22,
      },
      {
        name: 'Session Juillet-Aout 2026',
        startDate: '13 Juillet 2026',
        endDate: 'Septembre 2026',
        status: 'upcoming',
        places: 40,
        placesLeft: 40,
      },
    ],
  },
  {
    programme: 'Sciences Infirmieres',
    category: 'health',
    sessions: [
      {
        name: 'Session Juin-Juillet 2026',
        startDate: '1 Juin 2026',
        endDate: '10 Juillet 2026',
        status: 'open',
        places: 35,
        placesLeft: 20,
      },
      {
        name: 'Session Juillet-Aout 2026',
        startDate: '13 Juillet 2026',
        endDate: 'Aout 2026',
        status: 'upcoming',
        places: 35,
        placesLeft: 35,
      },
    ],
  },
  {
    programme: 'ENS',
    category: 'education',
    sessions: [
      {
        name: 'Session Juin-Juillet 2026',
        startDate: '1 Juin 2026',
        endDate: '10 Juillet 2026',
        status: 'open',
        places: 35,
        placesLeft: 22,
      },
      {
        name: 'Session Juillet-Aout 2026',
        startDate: '13 Juillet 2026',
        endDate: 'Aout 2026',
        status: 'upcoming',
        places: 35,
        placesLeft: 35,
      },
    ],
  },
  {
    programme: 'ESSEC',
    category: 'business',
    sessions: [
      {
        name: 'Session Juin-Juillet 2026',
        startDate: '1 Juin 2026',
        endDate: '10 Juillet 2026',
        status: 'open',
        places: 30,
        placesLeft: 15,
      },
      {
        name: 'Session Juin-Juillet 2026',
        startDate: 'Juillet 2026',
        endDate: 'Aout 2026',
        status: 'upcoming',
        places: 30,
        placesLeft: 30,
      },
    ],
  },
  {
    programme: 'UCAC',
    category: 'business',
    sessions: [
      {
        name: 'Session Juin-Juillet 2026',
        startDate: '1 Juin 2026',
        endDate: '10 Juillet 2026',
        status: 'open',
        places: 25,
        placesLeft: 12,
      },
      {
        name: 'Session Juillet-Aout 2026',
        startDate: '6 Septembre 2026',
        endDate: 'Juin 2026',
        status: 'upcoming',
        places: 25,
        placesLeft: 25,
      },
    ],
  },
  {
    programme: 'Preparatoire',
    category: 'all',
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
  { key: 'duration', label: 'Duree' },
  { key: 'price', label: 'Prix mensuel' },
  { key: 'successRate', label: 'Taux de reussite' },
  { key: 'studentsPerClass', label: 'Etudiants/classe' },
  { key: 'format', label: 'Format' },
  { key: 'subjects', label: 'Matieres principales' },
];

// Ressources incluses
export const includedResources = [
  {
    title: 'Cours en presentiel',
    description: 'Enseignement direct avec nos experts',
    icon: Users,
  },
  {
    title: 'Plateforme e-learning',
    description: 'Acces 24/7 aux cours et exercices',
    icon: Monitor,
  },
  {
    title: 'Videos de revision',
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
    description: 'Tests corriges en conditions reelles',
    icon: FileText,
  },
  {
    title: 'Fiches de revision',
    description: 'Syntheses et memos a telecharger',
    icon: BookOpen,
  },
];

// Stats globales pour la page d'accueil
export const globalStats = {
  students: '700+',
  successRate: '85%',
  programs: 10,
  experience: '15+',
};
