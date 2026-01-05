// ============================================
// DOMAINS - Domaines d'orientation
// Categories principales pour l'orientation
// ============================================

import { Cog, Stethoscope, Heart, Briefcase } from 'lucide-react';

export const domains = [
  {
    id: 'engineering',
    name: 'Ingenierie',
    shortName: 'Ingenierie',
    icon: Cog,
    color: 'orange',
    gradient: 'from-orange via-orange/80 to-amber-500',
    bgColor: 'bg-orange/10',
    textColor: 'text-orange',
    description: 'Concois, innove et construis le monde de demain. Les ingenieurs sont les architectes du progres technologique.',
    longDescription: 'Le domaine de l\'ingenierie offre des carrieres passionnantes dans la conception, la construction et l\'innovation. Que tu sois attire par les ponts et batiments, les systemes informatiques ou les reseaux de communication, ce domaine te permettra de transformer des idees en realite.',
    stats: {
      careers: 8,
      schools: 9,
      avgSalary: '400-800k FCFA/mois',
    },
    highlights: [
      'Forte demande sur le marche',
      'Salaires attractifs',
      'Impact concret sur la societe',
      'Evolution rapide des technologies',
    ],
  },
  {
    id: 'medicine',
    name: 'Medecine',
    shortName: 'Medecine',
    icon: Stethoscope,
    color: 'emerald',
    gradient: 'from-emerald-500 via-emerald-600 to-teal-600',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-600',
    description: 'Soigne, gueris et sauve des vies. La medecine est l\'art de redonner espoir et sante.',
    longDescription: 'La medecine est une vocation noble qui demande dedication et compassion. En tant que medecin, tu auras le pouvoir de diagnostiquer, traiter et prevenir les maladies, tout en accompagnant les patients dans les moments les plus difficiles de leur vie.',
    stats: {
      careers: 1,
      schools: 10,
      avgSalary: '500-1500k FCFA/mois',
    },
    highlights: [
      'Profession prestigieuse',
      'Impact direct sur les vies',
      'Carrieres diversifiees (specialites)',
      'Stabilite de l\'emploi',
    ],
  },
  {
    id: 'nursing',
    name: 'Sciences Infirmieres',
    shortName: 'Infirmier',
    icon: Heart,
    color: 'rose',
    gradient: 'from-rose-400 via-rose-500 to-pink-600',
    bgColor: 'bg-rose-500/10',
    textColor: 'text-rose-600',
    description: 'Accompagne, soigne et reconforte. Les infirmiers sont le coeur battant du systeme de sante.',
    longDescription: 'Les sciences infirmieres te preparent a devenir un pilier essentiel du systeme de sante. Tu seras en premiere ligne pour prodiguer des soins, eduquer les patients et leur famille, et assurer une prise en charge holistique de la sante.',
    stats: {
      careers: 1,
      schools: 3,
      avgSalary: '200-500k FCFA/mois',
    },
    highlights: [
      'Forte demande mondiale',
      'Relation humaine privilegiee',
      'Possibilites d\'evolution',
      'Travail en equipe',
    ],
  },
  {
    id: 'business',
    name: 'Economie & Gestion',
    shortName: 'Business',
    icon: Briefcase,
    color: 'blue',
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-600',
    description: 'Gere, entreprends et dirige. Le business c\'est l\'art de creer de la valeur et de piloter le succes.',
    longDescription: 'Le domaine de l\'economie et de la gestion prepare aux metiers de la finance, du management, du marketing et de l\'entrepreneuriat. Tu apprendras a prendre des decisions strategiques, gerer des equipes et developper des projets d\'envergure.',
    stats: {
      careers: 5,
      schools: 5,
      avgSalary: '300-1000k FCFA/mois',
    },
    highlights: [
      'Carrieres diversifiees',
      'Opportunites d\'entrepreneuriat',
      'Mobilite internationale',
      'Evolution rapide',
    ],
  },
];

export default domains;
