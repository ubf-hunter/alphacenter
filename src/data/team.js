// ============================================
// TEAM DATA - Direction, Enseignants, Staff
// ============================================
//import
import aromaine from '../assets/images/team/aromaine.jpg';
import ebai from '../assets/images/team/ebai-junior.jpg';
import ggPro from '../assets/images/team/ggPro2.jpeg';
import melchi from '../assets/images/team/melchi.png';
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
    id: 'ebai-jordan',
    slug: 'dr-ebai-jordan',
    name: 'Dr. Ebai Junior Jordan',
    subject: 'Chimie & Biologie',
    specialty: 'Sciences Biomédicales & Pharmacie',
    photo: ebai,
    initials: 'EJJ',
    color: 'emerald',
    shortBio: "Docteur en pharmacie FMSB, 8 ans d'experience en prepa concours",
    fullBio:
      "Docteur en pharmacie diplômé de la Faculté de Médecine et des Sciences Biomédicales (FMSB), actuellement en spécialisation, je mets mes 8 années d'expérience dans l'enseignement au service des futurs candidats aux concours de médecine et de pharmacie. Ma connaissance approfondie du cursus médical et pharmaceutique me permet d'accompagner efficacement les étudiants dans leur préparation aux épreuves scientifiques les plus exigeantes.",
    education: [
      'Doctorat en Pharmacie - FMSB',
      'Spécialisation en cours - FMSB',
    ],
    achievements: [
      "8 ans d'experience en enseignement",
      'Expert concours Médecine/Pharmacie',
    ],
  },
  {
    id: 'melchi',
    slug: 'Ing Mvogo',
    name: 'Ing Mvogo Emmanuel Melchi...',
    subject: 'Mathematiques',
    specialty: 'Mathematiques & Physique',
    photo: melchi,
    initials: 'MME',
    color: 'blue',
    shortBio: "Ancien major ENSP, 10 ans d'experience en prepa concours",
    fullBio:
      "Ingénieur diplômé de l'IUT en Génie des Télécommunications, avec une spécialisation en Informatique et Réseaux, je mets mon expertise technique au service de la réussite académique. En tant qu'Ing. NDONGO NKODO, j'allie la rigueur de l'ingénierie à une solide expérience pédagogique pour accompagner les étudiants d'Alpha Center. Spécialiste des systèmes numériques et des sciences appliquées, mon objectif est de fournir aux candidats les outils techniques et méthodologiques indispensables pour réussir les concours les plus exigeants et intégrer les grandes écoles de demain.",
    education: [
      "SUP'PTIC - Genie Telecoms",
      "Master Recherche des telecoms-SUP'PTIC",
    ],
    achievements: [
      "Auteur de 'Mathematiques pour les Concours'",
      '50+ etudiants admis',
    ],
    testimonial: {
      quote:
        "M. Mvogo m'a appris a ne plus apprendre par coeur mais a comprendre. Il disait: 'Marie, arrete de memoriser les formules. Comprends d'ou elles viennent.' C'est ce qui m'a debloquee.",
      author: 'Roxanne Abogo',
      school: 'Supptic 2024',
    },
  },
  {
    id: 'ngota-alexandre',
    slug: 'ngota-alexandre',
    name: 'Ngota Eteme Alexandre',
    subject: 'Biologie & SVT',
    specialty: 'Sciences Médicales',
    photo: '/images/team/ngota-alexandre.jpg',
    initials: 'NEA',
    color: 'teal',
    shortBio: "Etudiant en 4eme annee FMSB, 4 ans d'experience",
    fullBio:
      "Étudiant en 4ème année de Médecine Générale à la Faculté de Médecine et des Sciences Biomédicales de l'Université de Yaoundé 1 (FMSB-UY1), je cumule 4 années d'expérience dans l'enseignement des sciences médicales. Ma proximité avec le cursus médical actuel et ma maîtrise des programmes de concours me permettent d'offrir un accompagnement adapté et efficace aux candidats aspirant aux grandes écoles de santé.",
    education: [
      'FMSB-UY1 - Médecine Générale (4ème année)',
      '4 ans enseignement prépa concours',
    ],
    achievements: ['Etudiant FMSB en cours', 'Specialiste concours sante'],
  },
  {
    id: 'nyanga-aromaine',
    slug: 'nyanga-aromaine',
    name: 'Nyanga Aromaine',
    subject: 'Informatique & Mathématiques',
    specialty: 'Data Science & Programmation',
    photo: aromaine,
    initials: 'NA',
    color: 'indigo',
    shortBio: 'Etudiante ENSPY 4eme annee, Data Scientist',
    fullBio:
      "Étudiante en 4ème année à l'École Nationale Supérieure Polytechnique de Yaoundé (ENSPY), spécialisée en Data Science, je mets mes compétences en analyse de données et en programmation au service de la préparation aux concours d'entrée dans les grandes écoles d'ingénieurs. Mon parcours à Polytechnique me permet de transmettre aux candidats les méthodes rigoureuses et les connaissances techniques nécessaires pour réussir les épreuves scientifiques.",
    education: ['ENSPY - 4ème année', 'Spécialisation Data Science'],
    achievements: ['Etudiante Polytechnique', 'Experte en analyse de donnees'],
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
