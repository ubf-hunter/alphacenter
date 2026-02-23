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
import ulrick from '../assets/images/team/ulrick.jpeg';
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
      'As an engineer specialized in Radiocommunications, trained at SUP’PTIC and with a strong foundation in Mathematics and Physics, I am committed to preparing students for entrance examinations (concours) and academic exams across different training schools and institutions.I focus on building solid understanding, effective problem-solving skills, and confidence, helping learners succeed in Mathematics and Physics through structured guidance and targeted preparation. The experience in teaching students and helping them overcome challenges will gladly be committed in accompanying you too !!!',
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
    id: 'ULRICK',
    slug: 'ulrick-enongo-ndzie',
    name: 'Ulrick Enongo Ndzié',
    subject: 'Chimie',
    specialty: 'Chimie Générale & Organique',
    photo: ulrick,
    initials: 'UEN',
    color: 'green',
    shortBio: "Étudiant ENSTP en Génie Civil, enseignant de Chimie chez Alpha Center",
    fullBio:
      "Étudiant en 4ème année à l'École Nationale Supérieure des Travaux Publics (ENSTP) en Génie Civil, je mets ma maîtrise de la chimie au service des candidats préparant les concours d'entrée aux grandes écoles d'ingénieurs. Mon parcours à l'ENSTP et ma connaissance approfondie des épreuves de chimie me permettent d'accompagner efficacement les étudiants dans leur préparation, en leur transmettant les méthodes rigoureuses et les astuces nécessaires pour réussir.",
    education: [
      'ENSTP - Génie Civil (4ème année)',
      'Enseignant de Chimie - Alpha Center',
    ],
    achievements: ['Étudiant ENSTP en cours', 'Spécialiste Chimie concours ingénieurs'],
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

  {
    id: 'ngo-bama-elodie',
    slug: 'ngo-bama-elodie',
    name: 'Ing. Ngo Bama Elodie',
    subject: 'Physique',
    specialty: 'Mecanique & Electromagnetisme',
    photo: '/images/team/ngo-bama.jpg',
    initials: 'NBE',
    color: 'violet',
    shortBio: "Ingenieure ENSPY Genie Electrique, 3 ans d'experience",
    fullBio:
      "Ingenieure diplomee de l'Ecole Nationale Superieure Polytechnique de Yaounde (ENSPY) en Genie Electrique, je me consacre a l'enseignement de la Physique pour les candidats aux concours des grandes ecoles. Ma maitrise de la mecanique, de l'electromagnetisme et de l'optique me permet de rendre accessibles les concepts les plus exigeants. Je privilegies un suivi personnalise pour identifier et combler les lacunes de chaque etudiant.",
    education: [
      'ENSPY - Genie Electrique (Bac+5)',
      'Enseignante de Physique - Alpha Center depuis 2023',
    ],
    achievements: [
      '40+ etudiants admis',
      'Specialiste preparation concours ENSP/ENSTP',
    ],
    testimonial: {
      quote:
        "Ing. Ngo Bama a pris le temps de comprendre pourquoi je bloquais sur certains chapitres. Elle m'a donne des exercices supplementaires cibles et m'a suivie de pres.",
      author: 'Marie FOTSO',
      school: 'ENSTP 2024',
    },
  },

  {
    id: 'tamo-kouam-rodrigue',
    slug: 'tamo-kouam-rodrigue',
    name: 'Ing. Tamo Kouam Rodrigue',
    subject: 'Physique & Sciences de l\'Ingenieur',
    specialty: 'Thermodynamique & Mecanique des Fluides',
    photo: '/images/team/tamo-rodrigue.jpg',
    initials: 'TKR',
    color: 'cyan',
    shortBio: "Ingenieur ENSPY Genie Mecanique, 3 ans d'experience",
    fullBio:
      "Ingenieur diplome de l'Ecole Nationale Superieure Polytechnique de Yaounde en Genie Mecanique, je suis passionne par la transmission du savoir scientifique. Mes domaines de predilection sont la thermodynamique, la mecanique des fluides et les sciences de l'ingenieur. J'accompagne les candidats en leur inculquant une demarche rigoureuse de resolution de problemes et une comprehension profonde des phenomenes physiques.",
    education: [
      'ENSPY - Genie Mecanique (Bac+5)',
      'Certifie en pedagogie universitaire',
    ],
    achievements: [
      '35+ etudiants admis',
      'Concepteur de sujets type concours',
    ],
  },

  {
    id: 'tchatchoua-kevin',
    slug: 'tchatchoua-kevin',
    name: 'M. Tchatchoua Nguefack Kevin',
    subject: 'Francais & Culture Generale',
    specialty: 'Expression Ecrite & Methodologie de Dissertation',
    photo: '/images/team/tchatchoua-kevin.jpg',
    initials: 'TNK',
    color: 'amber',
    shortBio: "Diplome ENS Lettres Modernes, 4 ans d'experience",
    fullBio:
      "Diplome de l'Ecole Normale Superieure de Yaounde en Lettres Modernes Francaises, j'enseigne le Francais et la Culture Generale aux candidats des concours d'entree dans les grandes ecoles. Ma methode repose sur la maitrise de la dissertation, du resume de texte et de l'analyse argumentative. Beaucoup d'etudiants sous-estiment ces epreuves, pourtant elles font souvent la difference entre les candidats au meme niveau scientifique.",
    education: [
      'ENS Yaounde - Lettres Modernes Francaises (Bac+5)',
      'DIPES II - Francais',
    ],
    achievements: [
      "4 ans d'experience en prepa concours",
      'Specialiste methodologie de dissertation',
    ],
  },

  {
    id: 'atangana-esther',
    slug: 'atangana-esther',
    name: 'Mlle Atangana Meva Esther',
    subject: 'Anglais',
    specialty: 'Expression Ecrite & Orale Anglaise',
    photo: '/images/team/atangana-esther.jpg',
    initials: 'AME',
    color: 'rose',
    shortBio: "Diplomee ENS Bilingue, 2 ans d'experience",
    fullBio:
      "Diplomee de l'Ecole Normale Superieure de Yaounde section Bilingue, specialisee en didactique de l'anglais, j'accompagne les etudiants dans la preparation des epreuves d'anglais aux concours. L'anglais est souvent une matiere negligee par les candidats scientifiques, mais elle peut faire gagner des points precieux. Mon approche est pragmatique : comprehension de texte, grammaire appliquee et techniques de traduction efficaces.",
    education: [
      'ENS Bilingue Yaounde (Bac+5)',
      'DIPES II - Anglais',
    ],
    achievements: [
      'Specialiste anglais concours scientifiques',
      'Methode acceleree de progression',
    ],
  },

  {
    id: 'mba-owono-cedric',
    slug: 'mba-owono-cedric',
    name: 'Dr. Mba Owono Cedric',
    subject: 'Biochimie & Physiologie',
    specialty: 'Sciences Biomedicales',
    photo: '/images/team/mba-cedric.jpg',
    initials: 'MOC',
    color: 'lime',
    shortBio: "Docteur en Medecine FMSB, 3 ans d'experience",
    fullBio:
      "Docteur en Medecine diplome de la Faculte de Medecine et des Sciences Biomedicales (FMSB) de l'Universite de Yaounde I, actuellement en specialisation en Chirurgie Generale, je mets ma connaissance approfondie du cursus medical au service des candidats au concours d'entree en Medecine. Ayant moi-meme passe ce concours et l'ayant reussi avec mention, je comprends les defis specifiques auxquels font face les aspirants medecins.",
    education: [
      'Doctorat en Medecine - FMSB (Bac+7)',
      'Specialisation Chirurgie Generale en cours',
    ],
    achievements: [
      '25+ etudiants admis en Medecine',
      'Ancien laureat concours FMSB avec mention',
    ],
  },

  {
    id: 'kamga-yvan',
    slug: 'kamga-yvan',
    name: 'Ing. Kamga Talla Yvan',
    subject: 'Mathematiques',
    specialty: 'Probabilites & Statistiques',
    photo: '/images/team/kamga-yvan.jpg',
    initials: 'KTY',
    color: 'sky',
    shortBio: "Ingenieur ENSPY Genie Informatique, 2 ans d'experience",
    fullBio:
      "Ingenieur diplome de l'Ecole Nationale Superieure Polytechnique de Yaounde en Genie Informatique, je me suis specialise dans l'enseignement des mathematiques appliquees, en particulier les probabilites, les statistiques et l'analyse numerique. Mon approche pedagogique allie rigueur mathematique et applications concretes, permettant aux etudiants de comprendre l'utilite de chaque notion. Je mets l'accent sur la resolution methodique de problemes et la gestion du temps en condition d'examen.",
    education: [
      'ENSPY - Genie Informatique (Bac+5)',
      'Certifie Machine Learning - Stanford Online',
    ],
    achievements: [
      '30+ etudiants admis',
      'Createur de banques d\'exercices corriges',
    ],
  },
];

// Staff administratif
export const staff = [
  {
    name: 'Mme Eyene Christelle',
    role: 'Responsable Administrative',
    photo: '/images/team/admin.jpg',
    initials: 'EC',
    description: 'Gestion des inscriptions et suivi administratif',
  },
  {
    name: 'M. Abega Samuel',
    role: 'Responsable Communication',
    photo: '/images/team/comm.jpg',
    initials: 'AS',
    description: 'Relations etudiants et communication digitale',
  },
  {
    name: 'Mlle Ondoa Brigitte',
    role: 'Assistante Pedagogique',
    photo: '/images/team/ondoa-brigitte.jpg',
    initials: 'OB',
    description: 'Coordination des emplois du temps et suivi des presences',
  },
];

// Stats equipe
export const teamStats = {
  totalTeachers: 12,
  totalExperience: '50+',
  allLaureates: true,
};
