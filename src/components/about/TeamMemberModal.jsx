// ============================================
// TEAM MEMBER MODAL - Modal details membre equipe
// ============================================

import { AnimatePresence, motion } from 'framer-motion';
import { Award, BookOpen, Quote, X } from 'lucide-react';
import { useEffect, useState } from 'react';

// Avatar component
function Avatar({ photo, initials, name }) {
  const [imageError, setImageError] = useState(false);

  if (!photo || imageError) {
    return (
      <div
        className="
        w-28 h-28 rounded-full
        bg-linear-to-br from-navy to-navy-800
        flex items-center justify-center
        text-white text-3xl font-bold
      "
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
      className="w-28 h-28 rounded-full object-cover"
    />
  );
}

export default function TeamMemberModal({ member, onClose }) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>

          {/* Header with gradient */}
          <div className="relative h-32 bg-linear-to-r from-navy to-navy-800 rounded-t-3xl">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <div className="ring-4 ring-white rounded-full shadow-lg">
                <Avatar
                  photo={member.photo}
                  initials={member.initials}
                  name={member.name}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-20 pb-8 px-8">
            {/* Name & Subject */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-navy mb-2">
                {member.name}
              </h2>
              <span className="inline-flex px-4 py-1 bg-orange/10 text-orange rounded-full text-sm font-medium">
                {member.subject}
              </span>
              <p className="text-gray-500 mt-2">{member.specialty}</p>
            </div>

            {/* Full bio */}
            <div className="mb-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-navy mb-3">
                <BookOpen size={18} className="text-orange" />
                A propos
              </h3>
              <p className="text-gray-600 leading-relaxed">{member.fullBio}</p>
            </div>

            {/* Education */}
            {member.education && (
              <div className="mb-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-navy mb-3">
                  <Award size={18} className="text-orange" />
                  Formation
                </h3>
                <ul className="space-y-2">
                  {member.education.map((edu, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span className="w-2 h-2 rounded-full bg-orange" />
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {member.achievements && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-navy mb-3">
                  Realisations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-navy/5 rounded-full text-sm text-navy"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {member.testimonial && (
              <div className="p-6 bg-orange/5 rounded-2xl border-l-4 border-orange">
                <Quote size={24} className="text-orange/30 mb-3" />
                <p className="text-gray-700 italic mb-4">
                  "{member.testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange/20 flex items-center justify-center text-orange font-bold">
                    {member.testimonial.author?.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-navy">
                      {member.testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {member.testimonial.school}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
