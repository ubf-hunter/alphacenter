// ============================================
// SCHOOLS - Ecoles et universites
// Donnees completes des etablissements
// ============================================

import { Briefcase, Building2, Cpu, GraduationCap, Heart, Radio, Stethoscope } from 'lucide-react';

// Import des logos disponibles
import logoENSPY from '@assets/logoEcoles/enspy.webp';
import logoENSTP from '@assets/logoEcoles/enstp.png';
import logoSUPPTIC from '@assets/logoEcoles/supptic.png';

// ===== ECOLES AU CAMEROUN =====
export const cameroonSchools = [
  {
    id: 'enspy',
    slug: 'enspy',
    name: 'Ecole Nationale Superieure Polytechnique de Yaounde',
    shortName: 'ENSPY (Polytechnique)',
    acronym: 'ENSPY',
    type: 'local',
    country: 'Cameroun',
    city: 'Yaounde',
    icon: Building2,
    color: 'orange',
    gradient: 'from-[#FF6B35] via-[#FF8C42] to-[#FFB347]',
    logo: logoENSPY,
    tagline: "L'excellence en ingenierie au Cameroun",
    description:
      "L'ENSPY est la premiere ecole d'ingenieurs du Cameroun. Elle forme des ingenieurs de haut niveau dans plusieurs specialites depuis 1971.",
    longDescription:
      "Fondee en 1971, l'Ecole Nationale Superieure Polytechnique de Yaounde (ENSPY) est l'institution de reference pour la formation d'ingenieurs au Cameroun. Rattachee a l'Universite de Yaounde I, elle propose des formations de 5 ans dans diverses specialites d'ingenierie. Ses diplomes sont reconnus internationalement et ses anciens eleves occupent des postes cles dans l'economie camerounaise et africaine.",
    domains: ['engineering'],
    careers: [
      'ingenieur-genie-civil',
      'ingenieur-informatique',
      'ingenieur-telecom',
    ],
    stats: {
      founded: 1971,
      students: 1500,
      successRate: 85,
      employmentRate: 92,
      ranking: '#1 Cameroun',
    },
    admission: {
      requirements: [
        'Baccalaureat scientifique (C, D, E, TI)',
        'Age limite: 23 ans au 1er janvier',
        "Concours d'entree tres selectif",
      ],
      process: 'Concours national sur dossier et epreuves ecrites',
      dates: {
        inscription: 'Mars - Mai',
        concours: 'Juin - Juillet',
        resultats: 'Aout',
      },
      places: 200,
      acceptance: '8%',
    },
    programs: [
      { name: 'Genie Civil', duration: '5 ans', places: 40 },
      { name: 'Genie Informatique', duration: '5 ans', places: 40 },
      { name: 'Genie Electrique', duration: '5 ans', places: 30 },
      { name: 'Genie Mecanique', duration: '5 ans', places: 30 },
      { name: 'Genie Chimique', duration: '5 ans', places: 25 },
    ],
    tuition: {
      annual: '50 000 FCFA',
      note: 'Frais universitaires publics',
    },
    facilities: [
      'Laboratoires modernes',
      'Bibliotheque specialisee',
      'Ateliers pratiques',
      'Salle informatique',
      'Partenariats entreprises',
    ],
    contact: {
      website: 'https://polytechnique.cm',
      email: 'contact@polytechnique.cm',
      phone: '+237 222 XX XX XX',
      address: 'Yaounde, Cameroun',
    },
    alphaPrep: {
      available: true,
      programme: 'ensp',
      successRate: 85,
    },
  },
  {
    id: 'enstp',
    slug: 'enstp',
    name: 'Ecole Nationale Superieure des Travaux Publics',
    shortName: 'ENSTP',
    acronym: 'ENSTP',
    type: 'local',
    country: 'Cameroun',
    city: 'Yaounde',
    icon: Building2,
    color: 'navy',
    gradient: 'from-[#001A51] via-[#0D47A1] to-[#1565C0]',
    logo: logoENSTP,
    tagline: 'Former les batisseurs du Cameroun',
    description:
      "L'ENSTP forme des ingenieurs et techniciens superieurs specialises dans les travaux publics et le batiment.",
    longDescription:
      "L'Ecole Nationale Superieure des Travaux Publics est un etablissement de reference pour la formation aux metiers du BTP au Cameroun. Elle forme des ingenieurs de conception et des techniciens superieurs capables de mener a bien les grands projets d'infrastructure du pays.",
    domains: ['engineering'],
    careers: ['ingenieur-genie-civil'],
    stats: {
      founded: 1982,
      students: 800,
      successRate: 82,
      employmentRate: 90,
      ranking: '#2 BTP Cameroun',
    },
    admission: {
      requirements: [
        'Baccalaureat scientifique ou technique',
        'Age limite: 25 ans',
        "Concours d'entree",
      ],
      process: 'Concours sur epreuves ecrites',
      dates: {
        inscription: 'Avril - Juin',
        concours: 'Juillet',
        resultats: 'Septembre',
      },
      places: 150,
      acceptance: '12%',
    },
    programs: [
      { name: 'Genie Civil (Conception)', duration: '5 ans', places: 50 },
      { name: 'Batiment', duration: '3 ans (TS)', places: 40 },
      { name: "Routes et Ouvrages d'Art", duration: '3 ans (TS)', places: 40 },
      { name: 'Topographie', duration: '3 ans (TS)', places: 30 },
    ],
    tuition: {
      annual: '50 000 FCFA',
      note: 'Frais universitaires publics',
    },
    facilities: [
      'Laboratoire de materiaux',
      'Atelier de topographie',
      'Salle de DAO',
      'Bibliotheque technique',
    ],
    contact: {
      website: 'https://enstp.cm',
      email: 'info@enstp.cm',
      phone: '+237 222 XX XX XX',
      address: 'Yaounde, Cameroun',
    },
    alphaPrep: {
      available: true,
      programme: 'enstp',
      successRate: 78,
    },
  },
  {
    id: "sup'ptic",
    slug: 'supptic',
    name: 'Ecole Nationale Superieure des Postes, Telecommunications et TIC',
    shortName: "SUP'PTIC",
    acronym: "SUP'PTIC",
    type: 'local',
    country: 'Cameroun',
    city: 'Yaounde',
    icon: Radio,
    color: 'purple',
    gradient: 'from-purple-500 via-purple-600 to-violet-600',
    logo: logoSUPPTIC,
    tagline: "L'excellence numerique",
    description:
      "SUP'PTIC forme les ingenieurs et techniciens qui construisent l'infrastructure numerique du Cameroun.",
    longDescription:
      "L'Ecole Nationale Superieure des Postes, des Telecommunications et des Technologies de l'Information et de la Communication est l'institution de reference pour les formations dans le domaine du numerique au Cameroun. Elle forme des ingenieurs et techniciens de haut niveau pour repondre aux besoins de la transformation digitale.",
    domains: ['engineering'],
    careers: ['ingenieur-informatique', 'ingenieur-telecom'],
    stats: {
      founded: 1968,
      students: 600,
      successRate: 80,
      employmentRate: 94,
      ranking: '#1 Telecom Cameroun',
    },
    admission: {
      requirements: [
        'Baccalaureat scientifique (C, D, E)',
        'Age limite: 24 ans',
        'Concours tres selectif',
      ],
      process: 'Concours national sur epreuves',
      dates: {
        inscription: 'Mars - Mai',
        concours: 'Juin',
        resultats: 'Aout',
      },
      places: 100,
      acceptance: '10%',
    },
    programs: [
      { name: 'Telecommunications', duration: '5 ans', places: 30 },
      { name: 'Informatique/Reseaux', duration: '5 ans', places: 30 },
      { name: 'Gestion des Telecom', duration: '5 ans', places: 20 },
      { name: 'Technicien Telecom', duration: '3 ans', places: 30 },
    ],
    tuition: {
      annual: '50 000 FCFA',
      note: 'Frais universitaires publics',
    },
    facilities: [
      'Laboratoire telecom',
      'Data center',
      'Salle de simulation reseau',
      'Partenariats operateurs',
    ],
    contact: {
      website: 'https://e-supptic.cm',
      email: 'contact@e-supptic.cm',
      phone: '+237 222 XX XX XX',
      address: 'Yaounde, Cameroun',
    },
    alphaPrep: {
      available: true,
      programme: 'supptic',
      successRate: 75,
    },
  },
  {
    id: 'fmsb',
    slug: 'fmsb',
    name: 'Faculte de Medecine et des Sciences Biomedicales',
    shortName: 'FMSB',
    acronym: 'FMSB',
    type: 'local',
    country: 'Cameroun',
    city: 'Yaounde',
    icon: Stethoscope,
    color: 'emerald',
    gradient: 'from-emerald-500 via-emerald-600 to-teal-600',
    logo: null,
    tagline: 'Former les medecins de demain',
    description:
      'La FMSB est la premiere faculte de medecine du Cameroun, formant des medecins et specialistes depuis 1969.',
    longDescription:
      "La Faculte de Medecine et des Sciences Biomedicales de l'Universite de Yaounde I est l'institution phare de formation medicale au Cameroun. Elle a forme des generations de medecins qui servent le pays et l'Afrique. Son cursus rigoureux et ses hopitaux d'application garantissent une formation de qualite.",
    domains: ['medicine'],
    careers: ['medecin'],
    stats: {
      founded: 1969,
      students: 2000,
      successRate: 70,
      employmentRate: 98,
      ranking: '#1 Medecine Cameroun',
    },
    admission: {
      requirements: [
        'Baccalaureat C ou D',
        'Moyenne generale >= 12/20',
        'Age limite: 22 ans',
        'Concours tres selectif',
      ],
      process: "Concours d'entree sur epreuves",
      dates: {
        inscription: 'Juin - Juillet',
        concours: 'Septembre',
        resultats: 'Octobre',
      },
      places: 300,
      acceptance: '5%',
    },
    programs: [
      { name: 'Doctorat en Medecine', duration: '7 ans', places: 200 },
      { name: 'Sciences Infirmieres', duration: '3 ans', places: 50 },
      { name: 'Specialites medicales', duration: '4-5 ans', places: 50 },
    ],
    tuition: {
      annual: '50 000 FCFA',
      note: 'Frais universitaires publics',
    },
    facilities: [
      'CHU de Yaounde',
      'Laboratoires de recherche',
      'Bibliotheque medicale',
      'Centre de simulation',
    ],
    contact: {
      website: 'https://fmsb-uy1.cm',
      email: 'fmsb@univ-yaounde1.cm',
      phone: '+237 222 XX XX XX',
      address: 'Yaounde, Cameroun',
    },
    alphaPrep: {
      available: true,
      programme: 'medecine',
      successRate: 70,
    },
  },
  {
    id: 'cessi',
    slug: 'cessi',
    name: "Centre d'Enseignement Specialise des Sciences Infirmieres",
    shortName: 'CESSI',
    acronym: 'CESSI',
    type: 'local',
    country: 'Cameroun',
    city: 'Yaounde',
    icon: Heart,
    color: 'rose',
    gradient: 'from-rose-400 via-rose-500 to-pink-600',
    logo: null,
    tagline: 'Former les soignants de qualite',
    description:
      "Le CESSI forme des infirmiers diplomes d'Etat competents et devoues au service de la sante publique.",
    longDescription:
      "Le Centre d'Enseignement Specialise des Sciences Infirmieres est une institution de reference pour la formation des professionnels infirmiers au Cameroun. Il forme des infirmiers diplomes d'Etat capables d'exercer dans tous les etablissements de sante.",
    domains: ['nursing'],
    careers: ['infirmier'],
    stats: {
      founded: 1985,
      students: 500,
      successRate: 75,
      employmentRate: 95,
      ranking: 'Reference nationale',
    },
    admission: {
      requirements: [
        'Baccalaureat toutes series',
        'Aptitude physique',
        "Concours d'entree",
      ],
      process: 'Concours sur dossier et entretien',
      dates: {
        inscription: 'Mai - Juillet',
        concours: 'Aout',
        resultats: 'Septembre',
      },
      places: 100,
      acceptance: '15%',
    },
    programs: [
      { name: "Infirmier Diplome d'Etat", duration: '3 ans', places: 80 },
      { name: 'Sage-femme', duration: '3 ans', places: 20 },
    ],
    tuition: {
      annual: '200 000 - 500 000 FCFA',
      note: 'Selon etablissement public/prive',
    },
    facilities: ['Salles de pratique', 'Stages hospitaliers', 'Bibliotheque'],
    contact: {
      website: 'https://cessi.cm',
      email: 'info@cessi.cm',
      phone: '+237 222 XX XX XX',
      address: 'Yaounde, Cameroun',
    },
    alphaPrep: {
      available: true,
      programme: 'infirmier',
      successRate: 72,
    },
  },
  {
    id: 'essec',
    slug: 'essec',
    name: 'Ecole Superieure des Sciences Economiques et Commerciales',
    shortName: 'ESSEC Douala',
    acronym: 'ESSEC',
    type: 'local',
    country: 'Cameroun',
    city: 'Douala',
    icon: Briefcase,
    color: 'blue',
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    logo: null,
    tagline: "L'excellence en management et gestion",
    description:
      "L'ESSEC forme des managers et gestionnaires de haut niveau pour repondre aux besoins des entreprises camerounaises et africaines.",
    longDescription:
      "L'Ecole Superieure des Sciences Economiques et Commerciales (ESSEC) de Douala est l'une des principales ecoles de commerce du Cameroun. Fondee en 1989, elle forme des professionnels competents dans les domaines du management, de la gestion, du marketing et de la finance. Ses diplomes sont reconnus par l'Etat et ses anciens occupent des postes cles dans le secteur prive et public.",
    domains: ['business'],
    careers: ['gestionnaire-projet', 'expert-comptable', 'gestionnaire-rh', 'responsable-marketing', 'entrepreneur'],
    stats: {
      founded: 1989,
      students: 1200,
      successRate: 88,
      employmentRate: 85,
      ranking: '#1 Commerce Cameroun',
    },
    admission: {
      requirements: [
        'Baccalaureat toutes series',
        'Test d\'admission',
        'Entretien de motivation',
      ],
      process: 'Etude du dossier, test et entretien',
      dates: {
        inscription: 'Mai - Septembre',
        test: 'Octobre',
        resultats: 'Novembre',
      },
      places: 300,
      acceptance: '30%',
    },
    programs: [
      { name: 'BTS Commerce International', duration: '2 ans', places: 80 },
      { name: 'Licence Management', duration: '3 ans', places: 100 },
      { name: 'Master Finance', duration: '2 ans', places: 50 },
      { name: 'Master Marketing', duration: '2 ans', places: 40 },
      { name: 'Master RH', duration: '2 ans', places: 30 },
    ],
    tuition: {
      annual: '800 000 - 1 500 000 FCFA',
      note: 'Selon le niveau d\'etudes',
    },
    facilities: [
      'Bibliotheque fournie',
      'Salles informatiques',
      'Incubateur d\'entreprises',
      'Partenariats entreprises',
      'Stages garantis',
    ],
    contact: {
      website: 'https://essec-douala.com',
      email: 'info@essec-douala.com',
      phone: '+237 233 XX XX XX',
      address: 'Douala, Cameroun',
    },
    alphaPrep: {
      available: true,
      programme: 'essec',
      successRate: 80,
    },
  },
  {
    id: 'uccac',
    slug: 'uccac',
    name: 'Universite Catholique d\'Afrique Centrale',
    shortName: 'UCCAC',
    acronym: 'UCCAC',
    type: 'local',
    country: 'Cameroun',
    city: 'Yaounde',
    icon: GraduationCap,
    color: 'purple',
    gradient: 'from-purple-500 via-purple-600 to-violet-600',
    logo: null,
    tagline: 'Excellence academique et valeurs humaines',
    description:
      "L'UCCAC allie excellence academique et formation humaine integrale dans plusieurs domaines dont le management, le droit et la theologie.",
    longDescription:
      "L'Universite Catholique d'Afrique Centrale est une institution privee catholique de reference au Cameroun et en Afrique Centrale. Fondee en 1989, elle offre des formations de qualite dans plusieurs domaines tout en mettant l'accent sur les valeurs ethiques et humaines. Ses programmes en gestion et en droit sont particulierement reputes.",
    domains: ['business'],
    careers: ['gestionnaire-projet', 'expert-comptable', 'gestionnaire-rh', 'entrepreneur'],
    stats: {
      founded: 1989,
      students: 2500,
      successRate: 85,
      employmentRate: 82,
      ranking: '#1 Universite privee Cameroun',
    },
    admission: {
      requirements: [
        'Baccalaureat toutes series',
        'Dossier academique solide',
        'Test d\'admission selon la filiere',
      ],
      process: 'Etude du dossier et test d\'entree',
      dates: {
        inscription: 'Juin - Septembre',
        test: 'Septembre',
        resultats: 'Octobre',
      },
      places: 500,
      acceptance: '40%',
    },
    programs: [
      { name: 'Licence Gestion', duration: '3 ans', places: 150 },
      { name: 'Licence Droit', duration: '3 ans', places: 100 },
      { name: 'Master Management', duration: '2 ans', places: 80 },
      { name: 'Master Finance Comptabilite', duration: '2 ans', places: 60 },
      { name: 'MBA', duration: '2 ans', places: 40 },
    ],
    tuition: {
      annual: '1 000 000 - 2 000 000 FCFA',
      note: 'Bourses disponibles sur merite',
    },
    facilities: [
      'Campus moderne',
      'Bibliotheque riche',
      'Salles multimedia',
      'Chapelle universitaire',
      'Residences etudiantes',
    ],
    contact: {
      website: 'https://uccac.net',
      email: 'info@uccac.net',
      phone: '+237 222 XX XX XX',
      address: 'Yaounde, Cameroun',
    },
    alphaPrep: {
      available: true,
      programme: 'uccac',
      successRate: 75,
    },
  },
  {
    id: 'iuc',
    slug: 'iuc',
    name: 'Institut Universitaire de la Cote',
    shortName: 'IUC',
    acronym: 'IUC',
    type: 'local',
    country: 'Cameroun',
    city: 'Douala',
    icon: Building2,
    color: 'orange',
    gradient: 'from-orange-500 via-orange-600 to-amber-600',
    logo: null,
    tagline: 'Innovation et professionnalisme',
    description:
      "L'IUC forme des professionnels innovants dans les domaines du numerique, du management et de l'ingenierie.",
    longDescription:
      "L'Institut Universitaire de la Cote est une institution privee de premier plan au Cameroun. Cree en 2005, l'IUC se distingue par son approche pedagogique innovante et son orientation professionnelle. Il forme des cadres competents en informatique, gestion, et ingenierie, avec un fort taux d'insertion professionnelle.",
    domains: ['business', 'engineering'],
    careers: ['ingenieur-informatique', 'gestionnaire-projet', 'responsable-marketing', 'entrepreneur'],
    stats: {
      founded: 2005,
      students: 3000,
      successRate: 82,
      employmentRate: 88,
      ranking: 'Top 3 privee Cameroun',
    },
    admission: {
      requirements: [
        'Baccalaureat C, D pour sciences, toutes series pour gestion',
        'Test d\'aptitude',
        'Entretien',
      ],
      process: 'Dossier, test et entretien',
      dates: {
        inscription: 'Mai - Octobre',
        test: 'Septembre',
        resultats: 'Octobre',
      },
      places: 600,
      acceptance: '35%',
    },
    programs: [
      { name: 'Licence Informatique', duration: '3 ans', places: 120 },
      { name: 'Licence Gestion', duration: '3 ans', places: 150 },
      { name: 'Master Systemes & Reseaux', duration: '2 ans', places: 60 },
      { name: 'Master Management', duration: '2 ans', places: 80 },
      { name: 'Ingenieur Informatique', duration: '5 ans', places: 40 },
    ],
    tuition: {
      annual: '900 000 - 1 800 000 FCFA',
      note: 'Facilites de paiement disponibles',
    },
    facilities: [
      'Campus moderne',
      'Laboratoires informatiques',
      'Incubateur startup',
      'Bibliotheque numerique',
      'Partenariats internationaux',
    ],
    contact: {
      website: 'https://iuc-univ.cm',
      email: 'contact@iuc-univ.cm',
      phone: '+237 233 XX XX XX',
      address: 'Douala, Cameroun',
    },
    alphaPrep: {
      available: true,
      programme: 'iuc',
      successRate: 78,
    },
  },
  {
    id: 'universite-douala',
    slug: 'universite-douala',
    name: 'Universite de Douala',
    shortName: 'UDo',
    acronym: 'UDo',
    type: 'local',
    country: 'Cameroun',
    city: 'Douala',
    icon: GraduationCap,
    color: 'green',
    gradient: 'from-green-500 via-green-600 to-emerald-600',
    logo: null,
    tagline: 'Savoir, competence, innovation',
    description:
      "L'Universite de Douala est la principale universite publique de la capitale economique, formant dans tous les domaines.",
    longDescription:
      "L'Universite de Douala, creee en 1993, est l'une des huit universites d'Etat du Cameroun. Situee dans la capitale economique, elle accueille des milliers d'etudiants dans ses diverses facultes et ecoles. Elle offre des formations de qualite en sciences, lettres, droit, economie, et dispose d'instituts professionnels reconnus.",
    domains: ['engineering', 'business'],
    careers: ['ingenieur-genie-civil', 'ingenieur-genie-industriel', 'gestionnaire-projet', 'expert-comptable'],
    stats: {
      founded: 1993,
      students: 45000,
      successRate: 65,
      employmentRate: 70,
      ranking: '#2 Universite publique Cameroun',
    },
    admission: {
      requirements: [
        'Baccalaureat selon la filiere choisie',
        'Inscription en ligne',
        'Concours pour certaines filieres',
      ],
      process: 'Inscription directe ou concours selon filiere',
      dates: {
        inscription: 'Juillet - Octobre',
        concours: 'Variable selon faculte',
        resultats: 'Septembre - Octobre',
      },
      places: 8000,
      acceptance: '60%',
    },
    programs: [
      { name: 'Licences diverses', duration: '3 ans', places: 5000 },
      { name: 'Masters divers', duration: '2 ans', places: 2000 },
      { name: 'IUT (DUT)', duration: '2 ans', places: 500 },
      { name: 'Ecole de Commerce', duration: '3-5 ans', places: 300 },
    ],
    tuition: {
      annual: '50 000 FCFA',
      note: 'Frais universitaires publics',
    },
    facilities: [
      'Multiples campus',
      'Bibliotheques',
      'Salles informatiques',
      'Terrains de sport',
      'Restaurants universitaires',
    ],
    contact: {
      website: 'https://univ-douala.com',
      email: 'info@univ-douala.com',
      phone: '+237 233 XX XX XX',
      address: 'Douala, Cameroun',
    },
    alphaPrep: {
      available: true,
      programme: 'general',
      successRate: 68,
    },
  },
  {
    id: 'universite-dschang',
    slug: 'universite-dschang',
    name: 'Universite de Dschang',
    shortName: 'UDs',
    acronym: 'UDs',
    type: 'local',
    country: 'Cameroun',
    city: 'Dschang',
    icon: GraduationCap,
    color: 'teal',
    gradient: 'from-teal-500 via-teal-600 to-cyan-600',
    logo: null,
    tagline: 'Excellence dans la diversite',
    description:
      "L'Universite de Dschang est reconnue pour ses programmes en agronomie, gestion et sciences, avec un cadre d'etude exceptionnel.",
    longDescription:
      "L'Universite de Dschang, fondee en 1993, est situee dans l'Ouest du Cameroun dans un cadre naturel magnifique. Elle s'est imposee comme une universite de reference, particulierement dans les domaines de l'agronomie, de l'economie et de la gestion. Elle dispose de campus decentralises a Douala, Yaounde et Ebolowa.",
    domains: ['business', 'engineering'],
    careers: ['gestionnaire-projet', 'expert-comptable', 'ingenieur-genie-industriel', 'responsable-marketing'],
    stats: {
      founded: 1993,
      students: 35000,
      successRate: 68,
      employmentRate: 72,
      ranking: 'Top 5 Cameroun',
    },
    admission: {
      requirements: [
        'Baccalaureat selon la filiere',
        'Inscription en ligne',
        'Concours pour filieres selectives',
      ],
      process: 'Inscription directe ou concours',
      dates: {
        inscription: 'Juillet - Octobre',
        concours: 'Variable',
        resultats: 'Septembre - Octobre',
      },
      places: 6000,
      acceptance: '55%',
    },
    programs: [
      { name: 'FASA (Agronomie)', duration: '3-5 ans', places: 800 },
      { name: 'FSEG (Economie-Gestion)', duration: '3-5 ans', places: 2000 },
      { name: 'IUT-FV (Gestion)', duration: '2-3 ans', places: 400 },
      { name: 'Faculte des Sciences', duration: '3-5 ans', places: 1000 },
    ],
    tuition: {
      annual: '50 000 FCFA',
      note: 'Frais universitaires publics',
    },
    facilities: [
      'Campus principal Dschang',
      'Campus Douala et Yaounde',
      'Ferme d\'application',
      'Bibliotheques',
      'Residences universitaires',
    ],
    contact: {
      website: 'https://univ-dschang.org',
      email: 'info@univ-dschang.org',
      phone: '+237 233 XX XX XX',
      address: 'Dschang, Cameroun',
    },
    alphaPrep: {
      available: true,
      programme: 'general',
      successRate: 65,
    },
  },
];

// ===== ECOLES A L'ETRANGER =====
export const foreignSchools = [
  {
    id: 'polytechnique-paris',
    slug: 'polytechnique-paris',
    name: 'Ecole Polytechnique',
    shortName: 'Polytechnique Paris',
    acronym: 'X',
    type: 'foreign',
    country: 'France',
    city: 'Palaiseau',
    icon: Building2,
    color: 'red',
    gradient: 'from-red-600 via-red-700 to-red-800',
    logo: null,
    tagline: "L'excellence francaise en sciences",
    description:
      "L'Ecole Polytechnique est l'une des plus prestigieuses ecoles d'ingenieurs au monde, formant l'elite scientifique depuis 1794.",
    longDescription:
      "L'Ecole polytechnique, surnommee l'X, est une grande ecole d'ingenieurs francaise fondee en 1794. Elle est membre de l'Institut Polytechnique de Paris et forme des ingenieurs de tres haut niveau. De nombreux Camerounais brillants y ont etudie et continuent de postuler chaque annee.",
    domains: ['engineering'],
    careers: [
      'ingenieur-genie-civil',
      'ingenieur-informatique',
      'ingenieur-telecom',
    ],
    stats: {
      founded: 1794,
      students: 3000,
      successRate: null,
      employmentRate: 99,
      ranking: '#1 France, Top 50 mondial',
    },
    admission: {
      requirements: [
        'Excellents resultats academiques',
        'Classes preparatoires ou equivalent',
        'Concours tres selectif',
      ],
      process: 'Concours apres CPGE ou admission sur titre',
      dates: {
        inscription: 'Decembre - Janvier',
        concours: 'Avril - Juin',
        resultats: 'Juillet',
      },
      places: 500,
      acceptance: '3%',
    },
    programs: [
      { name: 'Cycle Ingenieur', duration: '4 ans', places: 400 },
      { name: 'Bachelor', duration: '3 ans', places: 80 },
      { name: 'Masters', duration: '2 ans', places: 200 },
    ],
    tuition: {
      annual: '8 000 000 - 10 000 000 FCFA',
      note: 'Bourses disponibles pour etudiants internationaux meritants',
    },
    facilities: [
      'Campus de 120 hectares',
      'Laboratoires de recherche de pointe',
      'Bibliotheque',
      'Infrastructures sportives',
    ],
    contact: {
      website: 'https://www.polytechnique.edu',
      email: 'admission@polytechnique.edu',
      phone: '+33 1 69 33 33 33',
      address: 'Palaiseau, France',
    },
    alphaPrep: {
      available: false,
      note: 'Preparation en classes preparatoires',
    },
  },
  {
    id: 'centrale-paris',
    slug: 'centrale-paris',
    name: 'CentraleSupelec',
    shortName: 'CentraleSupelec',
    acronym: 'CS',
    type: 'foreign',
    country: 'France',
    city: 'Gif-sur-Yvette',
    icon: Cpu,
    color: 'blue',
    gradient: 'from-blue-600 via-blue-700 to-blue-800',
    logo: null,
    tagline: "Former les leaders de l'industrie",
    description:
      'CentraleSupelec est nee de la fusion de deux grandes ecoles, formant des ingenieurs generalistes de haut niveau.',
    longDescription:
      "CentraleSupelec, issue de la fusion de l'Ecole Centrale Paris et Supelec, est une grande ecole d'ingenieurs francaise de premier plan. Elle forme des ingenieurs generalistes capables d'aborder des problematiques complexes et de diriger des projets d'envergure.",
    domains: ['engineering'],
    careers: [
      'ingenieur-informatique',
      'ingenieur-telecom',
      'ingenieur-genie-civil',
    ],
    stats: {
      founded: 2015,
      students: 4000,
      successRate: null,
      employmentRate: 98,
      ranking: 'Top 5 France',
    },
    admission: {
      requirements: [
        'Classes preparatoires scientifiques',
        'Excellent dossier academique',
        'Concours Centrale',
      ],
      process: 'Concours Centrale-Supelec',
      dates: {
        inscription: 'Decembre - Janvier',
        concours: 'Avril - Juin',
        resultats: 'Juillet',
      },
      places: 600,
      acceptance: '5%',
    },
    programs: [
      { name: 'Cycle Ingenieur', duration: '3 ans', places: 500 },
      { name: 'Masters specialises', duration: '1-2 ans', places: 200 },
    ],
    tuition: {
      annual: '2 000 000 - 4 000 000 FCFA',
      note: 'Bourses Campus France disponibles',
    },
    facilities: [
      'Campus moderne',
      'Laboratoires high-tech',
      'Incubateur startups',
    ],
    contact: {
      website: 'https://www.centralesupelec.fr',
      email: 'admission@centralesupelec.fr',
      phone: '+33 1 XX XX XX XX',
      address: 'Gif-sur-Yvette, France',
    },
    alphaPrep: {
      available: false,
      note: 'Preparation en classes preparatoires',
    },
  },
  {
    id: 'epfl',
    slug: 'epfl',
    name: 'Ecole Polytechnique Federale de Lausanne',
    shortName: 'EPFL',
    acronym: 'EPFL',
    type: 'foreign',
    country: 'Suisse',
    city: 'Lausanne',
    icon: Building2,
    color: 'red',
    gradient: 'from-red-500 via-red-600 to-red-700',
    logo: null,
    tagline: "L'innovation au coeur de l'Europe",
    description:
      "L'EPFL est l'une des meilleures ecoles techniques au monde, situee au bord du lac Leman en Suisse.",
    longDescription:
      "L'Ecole polytechnique federale de Lausanne est une universite de recherche de renommee mondiale. Elle attire des etudiants et chercheurs du monde entier et se distingue par l'excellence de sa recherche et la qualite de son enseignement.",
    domains: ['engineering'],
    careers: [
      'ingenieur-informatique',
      'ingenieur-genie-civil',
      'ingenieur-telecom',
    ],
    stats: {
      founded: 1969,
      students: 11000,
      successRate: null,
      employmentRate: 97,
      ranking: 'Top 15 mondial',
    },
    admission: {
      requirements: [
        'Baccalaureat avec excellents resultats',
        "Examen d'admission ou CMS",
        'Niveau B2 en francais',
      ],
      process:
        'Admission sur dossier + examen ou CMS (Cours de Mathematiques Speciales)',
      dates: {
        inscription: 'Novembre - Avril',
        examen: 'Juillet',
        resultats: 'Aout',
      },
      places: 2000,
      acceptance: '25%',
    },
    programs: [
      { name: 'Bachelor en Ingenierie', duration: '3 ans', places: null },
      { name: 'Master en Ingenierie', duration: '2 ans', places: null },
      { name: 'Doctorat', duration: '4-5 ans', places: null },
    ],
    tuition: {
      annual: '850 000 FCFA',
      note: 'Frais de vie eleves en Suisse (~1M FCFA/mois)',
    },
    facilities: [
      'Campus au bord du lac Leman',
      'Laboratoires de recherche',
      'Learning Center',
      'Rolex Learning Center',
    ],
    contact: {
      website: 'https://www.epfl.ch',
      email: 'admission@epfl.ch',
      phone: '+41 21 693 11 11',
      address: 'Lausanne, Suisse',
    },
    alphaPrep: {
      available: false,
      note: 'Admission sur dossier',
    },
  },
];

// ===== EXPORT COMBINE =====
export const allSchools = [...cameroonSchools, ...foreignSchools];

// Helper pour trouver une ecole par slug
export const getSchoolBySlug = (slug) => {
  return allSchools.find((school) => school.slug === slug);
};

// Helper pour filtrer les ecoles par type
export const getSchoolsByType = (type) => {
  return allSchools.filter((school) => school.type === type);
};

// Helper pour filtrer les ecoles par domaine
export const getSchoolsByDomain = (domainId) => {
  return allSchools.filter((school) => school.domains.includes(domainId));
};

// Helper pour trouver les ecoles liees a une carriere
export const getSchoolsByCareerId = (careerId) => {
  return allSchools.filter((school) => school.careers.includes(careerId));
};

export default allSchools;
