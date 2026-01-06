// ============================================
// SUCCESS STORY CARD - Card pour success story
// ============================================

import { motion } from 'framer-motion';
import { Award, Quote, TrendingUp } from 'lucide-react';
import { useState } from 'react';

// Avatar component
function Avatar({ photo, initials, name, size = 'md' }) {
  const [imageError, setImageError] = useState(false);

  const sizeStyles = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-20 h-20 text-xl',
    lg: 'w-28 h-28 text-2xl',
  };

  if (!photo || imageError) {
    return (
      <div
        className={`
        ${sizeStyles[size]}
        rounded-full bg-linear-to-br from-orange to-orange-600
        flex items-center justify-center
        text-white font-bold
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
      className={`${sizeStyles[size]} rounded-full object-cover`}
    />
  );
}

// Card compacte pour grille
export function SuccessStoryCompact({ story, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="
        relative p-6
        bg-white rounded-2xl
        border border-gray-100
        shadow-sm hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-2
      "
      >
        {/* Rank badge */}
        {story.rank && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange text-white rounded-full text-xs font-bold">
              <Award size={12} />
              {story.rank}
            </span>
          </div>
        )}

        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <Avatar
            photo={story.photo}
            initials={story.initials}
            name={story.name}
            size="md"
          />
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-navy text-center mb-1">
          {story.name}
        </h3>

        {/* School & Year */}
        <p className="text-sm text-gray-500 text-center mb-3">
          {story.school} {story.year} - {story.specialty}
        </p>

        {/* Quote */}
        <div className="relative">
          <Quote size={16} className="text-orange/30 mb-2" />
          <p className="text-sm text-gray-600 italic line-clamp-3">
            "{story.testimonial}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Card detaillee avec parcours
export function SuccessStoryFull({ story, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <div
        className="
        relative p-8 lg:p-10
        bg-white rounded-3xl
        border border-gray-100
        shadow-lg
        overflow-hidden
      "
      >
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-orange/5 rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative">
                <Avatar
                  photo={story.photo}
                  initials={story.initials}
                  name={story.name}
                  size="lg"
                />
                {story.rank && (
                  <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-orange text-white rounded-full text-sm font-bold shadow-lg">
                    {story.rank}
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="inline-flex px-3 py-1 bg-navy/10 text-navy rounded-full text-sm font-medium mb-2">
                {story.title}
              </span>
              <h3 className="text-2xl font-bold text-navy mb-1">{story.name}</h3>
              <p className="text-gray-500">
                {story.school} {story.year} - {story.specialty}
              </p>
              {story.currentStatus && (
                <p className="text-sm text-orange mt-2">
                  {story.currentStatus}
                </p>
              )}
            </div>
          </div>

          {/* Journey if available */}
          {story.journey && (
            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-lg font-semibold text-navy mb-4">
                <TrendingUp size={18} className="text-orange" />
                Son parcours
              </h4>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Before */}
                {story.journey.before && (
                  <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="text-sm font-medium text-red-600 mb-2">
                      Avant ({story.journey.before.year})
                    </div>
                    <div className="text-lg font-bold text-red-700 mb-1">
                      {story.journey.before.score || story.journey.before.result}
                    </div>
                    <p className="text-sm text-red-600/70">
                      {story.journey.before.situation}
                    </p>
                  </div>
                )}

                {/* During */}
                {story.journey.during && (
                  <div className="p-4 bg-navy/5 rounded-xl border border-navy/10">
                    <div className="text-sm font-medium text-navy mb-2">
                      Alpha Center ({story.journey.during.year})
                    </div>
                    <p className="text-sm text-gray-600">
                      {story.journey.during.action}
                    </p>
                    {story.journey.during.progress && (
                      <div className="mt-3 space-y-1">
                        {story.journey.during.progress.map((p, i) => (
                          <div
                            key={i}
                            className="flex justify-between text-xs"
                          >
                            <span className="text-gray-500">{p.month}</span>
                            <span className="font-medium text-navy">
                              {p.score}/20
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* After */}
                {story.journey.after && (
                  <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="text-sm font-medium text-green-600 mb-2">
                      Apres ({story.journey.after.year})
                    </div>
                    <div className="text-lg font-bold text-green-700 mb-1">
                      {story.journey.after.score}
                    </div>
                    <p className="text-sm text-green-600">
                      {story.journey.after.result}
                    </p>
                    {story.journey.after.improvement && (
                      <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full text-xs font-bold text-green-700">
                        <TrendingUp size={12} />
                        {story.journey.after.improvement}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Testimonial */}
          <div className="p-6 bg-orange/5 rounded-2xl">
            <Quote size={24} className="text-orange/30 mb-3" />
            <p className="text-gray-700 leading-relaxed italic">
              "{story.testimonial}"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SuccessStoryCompact;
