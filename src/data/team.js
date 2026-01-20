// ============================================
// TEAM DATA - Direction, Enseignants, Staff
// ============================================
//import
import ggPro from '../assets/images/team/ggPro2.jpeg';
import marcelo from '../assets/images/team/ndongo-marcel.jpg';
import ubfPro from '../assets/images/team/ubfPro3.png';
// Direction
export const leadership = [
  {
    id: 'academic-director',
    slug: 'agabus-gaimatakone',
    name: 'Ing. Agabus Gaimatakone',
    role: 'Directeur Pédagogique',
    title: 'Ingenieur ENSP - Genie Civil',
    photo: ggPro,
    initials: 'GG',
    bio: "Ingénieur diplômé de l'ENSPY (Polytech Yaoundé), je mets mon expertise au service de la préparation aux concours d'élite depuis 2022. Enseignant de Mathématiques et de Physique, j'interviens dans des centres de référence tels qu'Alpha Center, Évidence et Clever Academy. Mon objectif est de transmettre la rigueur scientifique et les méthodes stratégiques nécessaires pour permettre aux étudiants de franchir les portes des grandes écoles d'ingénieurs et de médecine",
    education: [
      'ENSP Yaounde - Genie Civil',
      'Enseignant de Physique, Evidence 2023-2026',
      'CSAO - BACC C, premier du sous centre',
    ],
    experience: "4 ans d'experience dans l'enseignement",
    quote:
      "La reussite n'est pas un accident. C'est le fruit d'une methode et d'un travail acharne.",
    social: {
      linkedin:
        'https://www.linkedin.com/in/agabus-gaimatakone-ingenieur-ensp/',
      email: 'direction@alphacenter.cm',
    },
  },
  {
    id: 'SI-director',
    slug: 'uwayo-beni',
    name: 'Ing. Uwayo Beni',
    role: 'Directeur SI',
    title: 'Ingenieur IT',
    photo: ubfPro,
    initials: 'UBF',
    bio: "Ingénieur des Travaux de Télécommunications diplômé de Sup'ptic (ENSPT), je conjugue aujourd'hui mes fonctions de Directeur du Système d'Information (DSI) chez Alpha Center et de Directeur du développement web chez Nolate SARL. Passionné par la pédagogie, j'enseigne les Mathématiques, l'Informatique et la Chimie depuis 3 ans. Mon expérience acquise dans des centres comme KOBU inc ou La Relève me permet d'offrir aux candidats un accompagnement multidisciplinaire, alliant innovation technologique et excellence académique.",
    education: [
      "Ingenieur des telecoms - SUP'PTIC",
      'Agregation de Mathematiques',
    ],
    experience: "4 ans d'experience",
    quote:
      "Un bon Enseignant n'enseigne pas seulement une matiere, il transmet une passion.",
    social: {
      linkedin: 'https://www.linkedin.com/in/beni-fidele-uwayo-2b1bb6336/',
      email: 'sidirector@alphacenter.cm',
    },
  },
];

// Enseignants
export const teachers = [
  {
    id: 'Ndongo',
    slug: 'Ing-Ndongo',
    name: 'Ing Ndongo Nkodo Marcel',
    subject: 'Mathematiques',
    specialty: 'Analyse & Algebre',
    photo: marcelo,
    initials: 'NKM',
    color: 'orange',
    shortBio: "Ancien major ENSP, 10 ans d'experience en prepa concours",
    fullBio:
      "Ingénieur diplômé de l'IUT en Génie des Télécommunications, avec une spécialisation en Informatique et Réseaux, je mets mon expertise technique au service de la réussite académique. En tant qu'Ing. NDONGO NKODO, j'allie la rigueur de l'ingénierie à une solide expérience pédagogique pour accompagner les étudiants d'Alpha Center. Spécialiste des systèmes numériques et des sciences appliquées, mon objectif est de fournir aux candidats les outils techniques et méthodologiques indispensables pour réussir les concours les plus exigeants et intégrer les grandes écoles de demain.",
    education: ['IUT - Genie Telecoms', 'Master Recherche des telecoms-ENSPT'],
    achievements: [
      "Auteur de 'Mathematiques pour les Concours'",
      '70+ etudiants admis',
    ],
    testimonial: {
      quote:
        "M. Nkodo m'a appris a ne plus apprendre par coeur mais a comprendre. Il disait: 'Marie, arrete de memoriser les formules. Comprends d'ou elles viennent.' C'est ce qui m'a debloquee.",
      author: 'Marie FOTSO',
      school: 'ENSTP 2024',
    },
  },

  {
    id: 'nguema',
    slug: 'm-nguema',
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
    slug: 'mme-fotso',
    name: 'Mme Fotso',
    subject: 'Francais',
    specialty: 'Expression Ecrite & Orale',
    photo: '/images/team/fotso.jpg',
    initials: 'MF',
    color: 'purple',
    shortBio: 'Agregee de Lettres, coach en expression',
    fullBio:
      'Agregee de Lettres Modernes, Mme Fotso aide les etudiants a ameliorer leur expression ecrite et orale, competences souvent negligees mais determinantes pour les concours.',
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
