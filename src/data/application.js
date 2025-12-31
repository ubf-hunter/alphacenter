// ============================================
// DONNEES PAGE APPLICATION MOBILE ALPHA
// ============================================

import {
  Smartphone,
  WifiOff,
  Target,
  TrendingUp,
  Brain,
  CreditCard,
  Users,
  BookOpen,
  FileCheck,
  ClipboardList,
  BarChart3,
  Calendar,
  MessageCircle,
  Download,
  CheckCircle,
  Play,
  Zap,
  Shield,
  Award,
  Clock,
  Building2,
  Stethoscope,
  HeartPulse,
  GraduationCap,
} from 'lucide-react';

// ===== STATISTIQUES HERO =====
export const appStats = [
  { value: '1000+', label: 'Exercices corriges' },
  { value: '2000+', label: 'Utilisateurs actifs' },
  { value: '5', label: 'Concours prepares' },
  { value: '4.8', label: 'Note App Store' },
];

// ===== AVANTAGES DE L'APP =====
export const appAdvantages = [
  {
    id: 'offline',
    icon: WifiOff,
    title: 'Revise partout',
    description: 'Mode hors-ligne complet. Telecharge tes cours une fois, revise sans internet.',
    color: 'orange',
  },
  {
    id: 'targeted',
    icon: Target,
    title: 'Contenu cible',
    description: 'Exercices et cours adaptes specifiquement a chaque concours : ENSP, FMSB, CESSI...',
    color: 'navy',
  },
  {
    id: 'progress',
    icon: TrendingUp,
    title: 'Suivi en temps reel',
    description: 'Dashboard personnalise avec statistiques detaillees et prediction de score.',
    color: 'orange',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'Planning intelligent',
    description: "L'IA genere un planning adapte a ta date de concours et tes disponibilites.",
    color: 'navy',
  },
  {
    id: 'payment',
    icon: CreditCard,
    title: 'Paiement Mobile Money',
    description: 'Paye facilement avec Orange Money ou MTN MoMo, sans carte bancaire.',
    color: 'orange',
  },
  {
    id: 'community',
    icon: Users,
    title: 'Communaute active',
    description: '2000+ etudiants qui sentraident. Professeurs Alpha Center disponibles quotidiennement.',
    color: 'navy',
  },
];

// ===== FONCTIONNALITES DETAILLEES =====
export const appFeatures = [
  {
    id: 'library',
    icon: BookOpen,
    title: 'Bibliotheque de cours',
    tagline: 'Tout ton programme en poche',
    description:
      'Acces a tous les cours de Maths, Physique, Chimie, Biologie, Anglais et Francais. Organises par concours, chapitre et niveau de difficulte.',
    highlights: [
      'Cours PDF et videos explicatives',
      'Mode hors-ligne avec telechargement',
      'Systeme de favoris et notes personnelles',
      'Mise a jour reguliere du contenu',
    ],
    color: 'orange',
  },
  {
    id: 'exercises',
    icon: FileCheck,
    title: 'Exercices & corrections',
    tagline: '1000+ exercices avec solutions detaillees',
    description:
      'Entraine-toi avec des exercices corriges etape par etape. Filtres par matiere, chapitre, difficulte et type de concours.',
    highlights: [
      'Solutions detaillees pas a pas',
      'Timer optionnel pour conditions reelles',
      'Historique des exercices resolus',
      'Nouveaux exercices chaque semaine',
    ],
    color: 'navy',
  },
  {
    id: 'qcm',
    icon: ClipboardList,
    title: 'QCM & examens blancs',
    tagline: 'Simule les conditions du concours',
    description:
      'QCM chronometres et examens blancs bases sur les annales officielles. Analyse detaillee de tes resultats apres chaque session.',
    highlights: [
      'Annales ENSP, ENSTP, ENS, FMSB, CESSI',
      'Chronometre et conditions reelles',
      'Analyse detaillee des erreurs',
      'Classement avec autres utilisateurs',
    ],
    color: 'orange',
  },
  {
    id: 'tracking',
    icon: BarChart3,
    title: 'Suivi de progression',
    tagline: 'Visualise tes progres',
    description:
      'Dashboard personnel avec graphiques devolution par matiere. Taux de reussite, prediction de score et alertes personnalisees.',
    highlights: [
      'Graphiques devolution par matiere',
      'Prediction de score au concours',
      'Alertes et recommandations',
      'Resume hebdomadaire des progres',
    ],
    color: 'navy',
  },
  {
    id: 'planning',
    icon: Calendar,
    title: 'Planning personnalise IA',
    tagline: 'Ton programme de revision sur mesure',
    description:
      "LIA genere automatiquement un planning selon ta date de concours, ton niveau et tes disponibilites. Rappels push avant chaque session.",
    highlights: [
      'Generation automatique du planning',
      'Adaptation a ton niveau',
      'Rappels push quotidiens',
      'Reajustement selon tes progres',
    ],
    color: 'orange',
  },
  {
    id: 'forum',
    icon: MessageCircle,
    title: 'Forum communautaire',
    tagline: 'Entraide et motivation',
    description:
      'Rejoins 2000+ etudiants qui sentraident. Pose tes questions et obtiens des reponses des professeurs Alpha Center.',
    highlights: [
      'Questions/reponses moderees',
      'Professeurs actifs quotidiennement',
      'Sections par theme et concours',
      'Conseils et motivation',
    ],
    color: 'navy',
  },
];

// ===== ETAPES "COMMENT CA MARCHE" =====
export const howItWorksSteps = [
  {
    step: 1,
    icon: Download,
    title: 'Telecharge lapp',
    description: 'Disponible gratuitement sur App Store et Google Play.',
  },
  {
    step: 2,
    icon: Target,
    title: 'Choisis ton concours',
    description: 'ENSP, ENSTP, ENS, FMSB, CESSI... Selectionne tes objectifs.',
  },
  {
    step: 3,
    icon: BookOpen,
    title: 'Accede aux contenus',
    description: 'Cours, exercices, QCM : tout est a portee de main.',
  },
  {
    step: 4,
    icon: WifiOff,
    title: 'Revise hors-ligne',
    description: 'Telecharge les chapitres et revise partout, meme sans internet.',
  },
];

// ===== CONCOURS PREPARES =====
export const concoursCategories = [
  {
    id: 'engineering',
    name: 'Ecoles dIngenieurs',
    icon: Building2,
    color: 'orange',
    concours: [
      { id: 'ensp', name: 'ENSP', fullName: 'Ecole Nationale Superieure Polytechnique' },
      { id: 'enstp', name: 'ENSTP', fullName: 'Ecole Nationale Superieure des Travaux Publics' },
      { id: 'ens', name: 'ENS', fullName: 'Ecole Normale Superieure' },
    ],
  },
  {
    id: 'health',
    name: 'Medecine',
    icon: Stethoscope,
    color: 'emerald',
    concours: [
      { id: 'fmsb', name: 'FMSB', fullName: 'Faculte de Medecine et Sciences Biomedicales' },
      { id: 'fms', name: 'FMS Douala', fullName: 'Faculte de Medecine et Sciences de Douala' },
    ],
  },
  {
    id: 'nursing',
    name: 'Sciences Infirmieres',
    icon: HeartPulse,
    color: 'rose',
    concours: [
      { id: 'cessi', name: 'CESSI', fullName: 'Centre dEnseignement Specialise en Soins Infirmiers' },
      { id: 'ide', name: 'IDE', fullName: 'Infirmier Diplome dEtat' },
    ],
  },
];

// ===== TEMOIGNAGES UTILISATEURS APP =====
export const appTestimonials = [
  {
    id: 1,
    name: 'Kevin M.',
    school: 'Admis ENSP 2024',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
    quote:
      "Lapp Alpha ma permis de reviser dans le bus, pendant les pauses... Le mode hors-ligne est vraiment pratique au Cameroun ou la connexion nest pas toujours stable.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Grace N.',
    school: 'Admise FMSB 2024',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop',
    quote:
      "Les QCM de lapp sont exactement comme ceux du concours FMSB. Jai pu mentrainer des centaines de fois. Le planning IA ma aide a morganiser.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emmanuel T.',
    school: 'Admis ENSTP 2024',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop',
    quote:
      "Le forum de lapp est genial. Jai pu poser mes questions et avoir des reponses rapides des profs Alpha Center. Une vraie communaute dentraide !",
    rating: 5,
  },
  {
    id: 4,
    name: 'Sandrine A.',
    school: 'Admise CESSI 2024',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop',
    quote:
      "Payer avec Orange Money cest trop simple. Pas besoin de carte bancaire. Et les exercices de biologie sont vraiment complets pour le concours CESSI.",
    rating: 5,
  },
];

// ===== FAQ =====
export const appFAQ = [
  {
    id: 1,
    question: "Lapplication est-elle gratuite ?",
    answer:
      "Lapp est gratuite a telecharger avec un acces limite. Pour debloquer tous les contenus (cours complets, exercices, examens blancs), un abonnement mensuel est disponible a partir de 5000 FCFA/mois.",
  },
  {
    id: 2,
    question: 'Comment fonctionne le mode hors-ligne ?',
    answer:
      "Tu peux telecharger les chapitres qui tinteressent quand tu as une connexion. Ensuite, tu peux reviser ces contenus meme sans internet. Un chapitre pese environ 50 MB.",
  },
  {
    id: 3,
    question: 'Comment payer avec Orange Money ou MTN MoMo ?',
    answer:
      "Dans lapp, va dans Abonnement puis choisis Payer. Selectionne Orange Money ou MTN MoMo, entre ton numero et confirme. Cest instantane !",
  },
  {
    id: 4,
    question: "Lapp est-elle disponible sur iPhone ?",
    answer:
      "Oui ! Lapp Alpha est disponible sur iOS (App Store) et Android (Google Play). Elle fonctionne sur tous les smartphones recents.",
  },
  {
    id: 5,
    question: "Puis-je utiliser lapp sans etre inscrit au centre Alpha Center ?",
    answer:
      "Absolument ! Lapp est independante du centre physique. Tu peux tabonner directement dans lapp, que tu sois inscrit au centre ou non.",
  },
  {
    id: 6,
    question: 'Comment contacter le support ?',
    answer:
      "Dans lapp, va dans Profil > Aide. Tu peux nous contacter par WhatsApp, email ou via le formulaire integre. Reponse sous 24h garantie.",
  },
];

// ===== LIENS TELECHARGEMENT =====
export const downloadLinks = {
  ios: '#', // Remplacer par le vrai lien App Store
  android: '#', // Remplacer par le vrai lien Google Play
  qrCode: null, // URL de limage QR code si disponible
};

// ===== SPECS TECHNIQUES =====
export const appSpecs = {
  name: 'Alpha',
  platforms: ['iOS', 'Android'],
  stack: 'React Native, Expo, NativeWind',
  offlineMode: true,
  payments: ['Orange Money', 'MTN Mobile Money'],
  minVersion: {
    ios: '13.0',
    android: '8.0',
  },
};
