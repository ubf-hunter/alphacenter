// ============================================
// TEAM MEMBER CARD - Cards style moderne pour equipe
// ============================================

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Linkedin,
  Mail,
  Plus,
  Quote,
  RotateCcw,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Avatar avec initiales si pas de photo
function Avatar({ photo, initials, name, className = '' }) {
  const [imageError, setImageError] = useState(false);

  if (!photo || imageError) {
    return (
      <div
        className={`
        w-full h-full
        bg-linear-to-br from-gray-300 to-gray-400
        flex items-center justify-center
        text-white text-6xl font-bold
        ${className}
      `}
      >
        {initials || name?.charAt(0) || '?'}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={name}
      onError={() => setImageError(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

// Card pour la direction - Style flip card avec glassmorphism
export function LeadershipCard({ member, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <div
        className={`
          relative w-full h-120 cursor-pointer
          transition-transform duration-700
          transform-style-3d
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ===== RECTO (Front) - Image avec glassmorphism ===== */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Background Image */}
          <Avatar
            photo={member.photo}
            initials={member.initials}
            name={member.name}
            className="absolute inset-0 object-center object-cover "
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/30 to-transparent" />

          {/* Glassmorphism card at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div
              className="
              p-5 rounded-2xl
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-lg
            "
            >
              {/* Name with verified badge */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <BadgeCheck className="w-6 h-6 text-emerald-400 fill-emerald-400" />
              </div>

              {/* Role */}
              <p className="text-white/80 mb-4">{member.role}</p>

              {/* Stats row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span className="flex items-center text-white text-sm">
                    {member.experience}
                  </span>
                </div>

                {/* Flip indicator */}
                <button
                  className="
                  flex items-center px-2 py-2
                  text-sm font-medium text-white
                  bg-white/20 hover:bg-white/30
                  rounded-full backdrop-blur-sm
                  transition-colors flex-row w-auto
                "
                >
                  {' '}
                  <span className="flex items-center justify-center">Voir</span>
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Top badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-orange text-white text-xs font-bold rounded-full shadow-lg">
              Direction
            </span>
          </div>
        </div>

        {/* ===== VERSO (Back) - Contenu texte ===== */}
        <div
          className="
            absolute inset-0 rounded-3xl overflow-hidden
            bg-white shadow-xl
            p-6 flex flex-col
          "
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="inline-flex px-3 py-1 bg-orange/10 text-orange rounded-full text-xs font-medium mb-2">
                {member.role}
              </div>
              <h3 className="text-xl font-bold text-navy">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
            <button
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
            >
              <RotateCcw size={16} className="text-gray-600" />
            </button>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 overflow-y-auto">
            {member.bio}
          </p>

          {/* Quote */}
          {member.quote && (
            <div className="p-3 bg-navy/5 rounded-xl border-l-3 border-navy mb-4">
              <Quote size={14} className="text-navy/30 mb-1" />
              <p className="text-xs italic text-navy/80 line-clamp-3">
                "{member.quote}"
              </p>
            </div>
          )}

          {/* Education */}
          {member.education && (
            <div className="mb-4">
              <div className="text-xs font-semibold text-navy mb-2">
                Formation
              </div>
              <div className="flex flex-wrap gap-1">
                {member.education.slice(0, 2).map((edu, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                  >
                    {edu.split(' - ')[0]}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Social links */}
          {member.social && (
            <div className="flex gap-2 pt-4 border-t border-gray-100">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 p-2 rounded-xl bg-navy/5 hover:bg-navy hover:text-white text-navy transition-colors text-sm"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              )}
              {member.social.email && (
                <a
                  href={`mailto:${member.social.email}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 p-2 rounded-xl bg-orange/10 hover:bg-orange hover:text-white text-orange transition-colors text-sm"
                >
                  <Mail size={16} />
                  Email
                </a>
              )}
            </div>
          )}

          {/* Profile page link */}
          {member.slug && (
            <Link
              to={`/a-propos/equipe/${member.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="mt-3 flex items-center justify-center gap-2 p-3 rounded-xl bg-orange text-white hover:bg-orange/90 transition-colors text-sm font-medium"
            >
              Voir le profil complet
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Card pour les enseignants - Style moderne avec grande photo
export function TeacherCard({ teacher, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => onSelect && onSelect(teacher)}
    >
      <div
        className="
        relative
        bg-white rounded-3xl
        border border-gray-100
        shadow-sm hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        overflow-hidden
      "
      >
        {/* Photo - Large format */}
        <div className="relative h-72 bg-gray-100">
          <Avatar
            photo={teacher.photo}
            initials={teacher.initials}
            name={teacher.name}
            className="absolute inset-0"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Name with verified badge */}
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-bold text-navy">{teacher.name}</h3>
            <BadgeCheck className="w-5 h-5 text-emerald-500 fill-emerald-500" />
          </div>

          {/* Role/Description */}
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {teacher.specialty}
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Users size={14} />
                <span className="font-medium text-navy">200+</span>
              </span>
              <span className="flex items-center gap-1">
                <BookOpen size={14} />
                <span className="font-medium text-navy">{teacher.subject}</span>
              </span>
            </div>

            {/* View profile link */}
            {teacher.slug ? (
              <Link
                to={`/a-propos/equipe/${teacher.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="
                flex items-center gap-1 px-4 py-2
                text-sm font-medium
                text-white
                bg-orange hover:bg-orange/90
                rounded-full
                transition-colors
              "
              >
                Profil
                <ArrowRight size={14} />
              </Link>
            ) : (
              <button
                className="
                flex items-center gap-1 px-4 py-2
                text-sm font-medium
                text-navy
                bg-gray-100 hover:bg-navy hover:text-white
                rounded-full
                transition-colors
              "
              >
                Voir +
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Card pour le staff administratif
export function StaffCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className="
        flex items-center gap-4 p-4
        bg-white rounded-xl
        border border-gray-100
        shadow-sm
      "
      >
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0">
          <Avatar
            photo={member.photo}
            initials={member.initials}
            name={member.name}
          />
        </div>
        <div>
          <h4 className="font-semibold text-navy">{member.name}</h4>
          <p className="text-sm text-gray-500">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TeacherCard;
