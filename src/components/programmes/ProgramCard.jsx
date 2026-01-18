import Button from '@components/common/Button';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInscriptionModal } from '../../hooks/useInscriptionModal';

const colorStyles = {
  orange: {
    badge: 'bg-orange text-white',
    iconBg: 'bg-gradient-to-br from-orange to-orange-600',
    accent: 'text-orange',
    border: 'hover:border-orange/30',
    button: 'bg-orange hover:bg-orange-600',
  },
  navy: {
    badge: 'bg-navy text-white',
    iconBg: 'bg-gradient-to-br from-navy to-blue-800',
    accent: 'text-navy',
    border: 'hover:border-navy/30',
    button: 'bg-navy hover:bg-navy-800',
  },
  apricot: {
    badge: 'bg-apricot text-navy',
    iconBg: 'bg-gradient-to-br from-apricot to-orange-300',
    accent: 'text-orange',
    border: 'hover:border-apricot/50',
    button: 'bg-orange hover:bg-orange-600',
  },
  gray: {
    badge: 'bg-gray-600 text-white',
    iconBg: 'bg-gradient-to-br from-gray-600 to-gray-700',
    accent: 'text-gray-600',
    border: 'hover:border-gray-300',
    button: 'bg-gray-700 hover:bg-gray-800',
  },
  emerald: {
    badge: 'bg-emerald-500 text-white',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    accent: 'text-emerald-600',
    border: 'hover:border-emerald-300',
    button: 'bg-emerald-600 hover:bg-emerald-700',
  },
  rose: {
    badge: 'bg-rose-500 text-white',
    iconBg: 'bg-gradient-to-br from-rose-500 to-rose-600',
    accent: 'text-rose-600',
    border: 'hover:border-rose-300',
    button: 'bg-rose-600 hover:bg-rose-700',
  },
  blue: {
    badge: 'bg-blue-500 text-white',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700',
    accent: 'text-blue-600',
    border: 'hover:border-blue-300',
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  indigo: {
    badge: 'bg-indigo-500 text-white',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    accent: 'text-indigo-600',
    border: 'hover:border-indigo-300',
    button: 'bg-indigo-600 hover:bg-indigo-700',
  },
};

export default function ProgramCard({ program, index, featured = false }) {
  const { openModal: openInscriptionModal } = useInscriptionModal();
  const styles = colorStyles[program.color] || colorStyles.orange;
  const Icon = program.icon;

  return (
    <motion.div
      id={program.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative ${
        featured ? 'lg:col-span-2 lg:row-span-2' : ''
      } scroll-mt-32`}
    >
      <div
        className={`
          relative h-full
          bg-white/80 backdrop-blur-sm
          rounded-3xl overflow-hidden
          border border-gray-100 ${styles.border}
          shadow-lg hover:shadow-2xl
          transition-all duration-500
          hover:-translate-y-2
        `}
      >
        {/* Badge */}
        {program.badge && (
          <div
            className={`absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold ${program.badgeColor}`}
          >
            {program.badge}
          </div>
        )}

        {/* Header with gradient */}
        <div
          className={`relative p-6 pb-4 bg-gradient-to-br ${program.gradient} text-white`}
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
            <Icon size={32} className="text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-1">{program.name}</h3>
          <p className="text-white/80 text-sm">{program.school}</p>

          {/* Tagline */}
          <p className="mt-3 text-white/90 font-medium">{program.tagline}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gray-400" />
              <span className="text-sm text-gray-600">{program.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-gray-400" />
              <span className="text-sm text-gray-600">
                {program.studentsPerClass} max/classe
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-gray-400" />
              <span className="text-sm text-gray-600">
                {program.nextSession}
              </span>
            </div>
            {program.successRate && (
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-green-500" />
                <span className="text-sm font-semibold text-green-600">
                  {program.successRate}% reussite
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {program.description}
          </p>

          {/* Subjects preview */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Matieres principales
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.subjects.slice(0, 4).map((subject) => (
                <span
                  key={subject.name}
                  className="px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                >
                  {subject.name}
                </span>
              ))}
            </div>
          </div>

          {/* View Details Link */}
          <Link
            to={`/programmes/${program.id}`}
            className="group/btn flex items-center gap-2 text-sm font-semibold text-orange hover:text-navy transition-colors mb-6"
          >
            <Eye size={18} />
            <span>Voir les details du programme</span>
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>

          {/* Price and CTA */}
          <div className="pt-6 border-t border-gray-100">
            <div className="flex items-end justify-between mb-4">
              <div>
                <span className="text-sm text-gray-500">A partir de</span>
                <div className="text-2xl font-bold text-navy">
                  {program.priceLabel}
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">Places restantes</span>
                <div className={`text-lg font-bold ${styles.accent}`}>
                  {program.placesAvailable}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="primary"
                onClick={() => openInscriptionModal(program.id)}
                className="flex-1 justify-center"
              >
                S'inscrire
              </Button>
              <Link
                to={`/programmes/${program.id}`}
                className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200 hover:border-orange hover:bg-orange/5 transition-colors"
                title="Voir les details"
              >
                <Eye size={20} className="text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
