// ============================================
// TEAM DATA - Direction, Enseignants, Staff
// ============================================

// Direction
export const leadership = [
  {
    id: 'founder',
    name: 'Ing. Jean-Pierre NKOULOU',
    role: 'Fondateur & Directeur',
    title: 'Ingenieur ENSP - Genie Civil',
    photo: '/images/team/founder.jpg',
    initials: 'JPN',
    bio: "Diplome de l'ENSP en 2010, major de sa promotion en Genie Civil. Apres 5 ans dans le BTP, il fonde Alpha Center avec la conviction que chaque etudiant meritant peut reussir avec le bon accompagnement. Il supervise la strategie pedagogique et le developpement du centre.",
    education: [
      'ENSP Yaounde - Genie Civil (2010)',
      'Master Management - IAE Paris (2015)',
    ],
    experience: "8 ans d'experience dans l'enseignement",
    quote:
      "La reussite n'est pas un accident. C'est le fruit d'une methode et d'un travail acharne.",
    social: {
      linkedin: '#',
      email: 'direction@alphacenter.cm',
    },
  },
  {
    id: 'academic-director',
    name: 'Dr. Marie ATANGANA',
    role: 'Directrice Pedagogique',
    title: 'Docteur en Mathematiques',
    photo: '/images/team/academic-director.jpg',
    initials: 'MA',
    bio: "Docteur en Mathematiques Appliquees de l'Universite de Yaounde I. Ancienne enseignante a l'ENSP, elle apporte 15 ans d'experience dans l'enseignement superieur. Elle coordonne l'equipe pedagogique et veille a la qualite des programmes.",
    education: [
      'Doctorat Mathematiques - UY1 (2008)',
      'Agregation de Mathematiques',
    ],
    experience: "15 ans d'experience",
    quote:
      "Un bon professeur n'enseigne pas seulement une matiere, il transmet une passion.",
    social: {
      linkedin: '#',
      email: 'pedagogie@alphacenter.cm',
    },
  },
];

// Enseignants
export const teachers = [
  {
    id: 'kamga',
    name: 'Dr. Kamga',
    subject: 'Mathematiques',
    specialty: 'Analyse & Algebre',
    photo: '/images/team/kamga.jpg',
    initials: 'DK',
    color: 'orange',
    shortBio: "Ancien major ENSP, 10 ans d'experience en prepa concours",
    fullBio:
      "Diplome de l'ENSP en Genie Informatique, Dr. Kamga s'est specialise dans l'enseignement des mathematiques pour les concours. Sa methode : 'Ne memorisez pas les formules, comprenez d'ou elles viennent.'",
    education: ['ENSP - Genie Informatique', 'Master Didactique des Maths'],
    achievements: [
      "Auteur de 'Mathematiques pour les Concours'",
      '200+ etudiants admis',
    ],
    testimonial: {
      quote:
        "Dr. Kamga m'a appris a ne plus apprendre par coeur mais a comprendre. Il disait: 'Marie, arrete de memoriser les formules. Comprends d'ou elles viennent.' C'est ce qui m'a debloquee.",
      author: 'Marie FOTSO',
      school: 'ENSTP 2023',
    },
  },
  {
    id: 'ngo-bama',
    name: 'Ing. Ngo Bama',
    subject: 'Physique',
    specialty: 'Mecanique & Electromagnetisme',
    photo: '/images/team/ngo-bama.jpg',
    initials: 'NB',
    color: 'navy',
    shortBio: 'Ingenieur ENSTP, specialiste des methodes de resolution rapide',
    fullBio:
      "Ingenieur diplomee de l'ENSTP, Ing. Ngo Bama a developpe une approche pedagogique basee sur les exemples de la vie quotidienne pour rendre la physique accessible et intuitive.",
    education: ['ENSTP - Genie Electrique', 'Certificat Pedagogie ENSET'],
    achievements: [
      'Taux de reussite 90% en physique',
      "Creatrice du 'Kit Physique Express'",
    ],
    testimonial: {
      quote:
        "Ing. Ngo Bama m'a reconciliee avec la physique. Je detestais cette matiere avant. Elle explique avec des exemples de la vie quotidienne qui rendent tout clair. Maintenant c'est ma matiere preferee !",
      author: 'Claire MANGA',
      school: 'ENSP 2024',
    },
  },
  {
    id: 'mbarga',
    name: 'Pr. Mbarga',
    subject: 'Chimie',
    specialty: 'Chimie Organique & Minerale',
    photo: '/images/team/mbarga.jpg',
    initials: 'PM',
    color: 'emerald',
    shortBio: "Professeur certifie, 12 ans d'experience lycee et prepa",
    fullBio:
      'Professeur certifie en Sciences Physiques et Chimie, Pr. Mbarga combine une solide experience en lycee et en classes preparatoires. Son approche methodique aide les etudiants a structurer leurs connaissances.',
    education: ['ENS Yaounde - Sciences Physiques', 'CAPES Chimie'],
    achievements: ["12 ans d'experience", 'Formateur pour enseignants'],
  },
  {
    id: 'essomba',
    name: 'Dr. Essomba',
    subject: 'Biologie',
    specialty: 'SVT & Sciences Biomedicales',
    photo: '/images/team/essomba.jpg',
    initials: 'DE',
    color: 'rose',
    shortBio: 'Medecin et enseignant, expert preparation FMSB',
    fullBio:
      'Medecin diplome de la FMSB, Dr. Essomba apporte son expertise pour la preparation aux concours de medecine. Il connait parfaitement les attentes des jurys et les pieges classiques.',
    education: ['FMSB Yaounde - Medecine', 'DIU Pedagogie Medicale'],
    achievements: ['Ancien membre jury FMSB', 'Expert preparation medecine'],
    forDomain: 'medicine',
  },
  {
    id: 'nguema',
    name: 'M. Nguema',
    subject: 'Anglais',
    specialty: 'Anglais Scientifique',
    photo: '/images/team/nguema.jpg',
    initials: 'MN',
    color: 'blue',
    shortBio: "Bilingue, specialiste de l'anglais technique",
    fullBio:
      "Parfaitement bilingue, M. Nguema prepare les etudiants a l'epreuve d'anglais des concours avec un focus sur le vocabulaire technique et scientifique.",
    education: ['Licence Anglais - UY1', 'Cambridge CELTA'],
    achievements: ["5 ans d'experience prepa concours"],
  },
  {
    id: 'fotso',
    name: 'Mme Fotso',
    subject: 'Francais',
    specialty: 'Expression Ecrite & Orale',
    photo: '/images/team/fotso.jpg',
    initials: 'MF',
    color: 'purple',
    shortBio: 'Agregee de Lettres, coach en expression',
    fullBio:
      "Agregee de Lettres Modernes, Mme Fotso aide les etudiants a ameliorer leur expression ecrite et orale, competences souvent negligees mais determinantes pour les concours.",
    education: ['Agregation Lettres Modernes', 'Master Sciences du Langage'],
    achievements: ['Coach preparation oraux', 'Formatrice communication'],
  },
];

// Staff administratif
export const staff = [
  {
    name: 'Mme Eyene',
    role: 'Responsable Administrative',
    photo: '/images/team/admin.jpg',
    initials: 'ME',
    description: 'Gestion des inscriptions et suivi administratif',
  },
  {
    name: 'M. Abega',
    role: 'Responsable Communication',
    photo: '/images/team/comm.jpg',
    initials: 'MA',
    description: 'Relations etudiants et communication digitale',
  },
];

// Stats equipe
export const teamStats = {
  totalTeachers: 12,
  totalExperience: '100+',
  allLaureates: true,
};
