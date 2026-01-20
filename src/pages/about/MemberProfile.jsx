// ============================================
// MEMBER PROFILE - Page profil individuel
// Pour le SEO (indexation Google par nom)
// ============================================

import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Linkedin,
  Mail,
  Quote,
} from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { leadership, teachers } from '../../data/team';
import { generatePersonSchema } from '../../utils/seo';

// Fusionner tous les membres
const allMembers = [...leadership, ...teachers];

export default function MemberProfile() {
  const { memberId } = useParams();
  const member = allMembers.find((m) => m.slug === memberId);

  // Rediriger si membre non trouve
  if (!member) {
    return <Navigate to="/a-propos/equipe" replace />;
  }

  const jsonLd = generatePersonSchema(
    member,
    `/a-propos/equipe/${member.slug}`,
  );

  return (
    <>
      <SEO
        title={`${member.name} - ${member.role || member.subject}`}
        description={
          member.bio ||
          member.fullBio ||
          member.shortBio ||
          `Profil de ${member.name} chez Alpha Center`
        }
        url={`/a-propos/equipe/${member.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-navy overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-apricot/10 rounded-full blur-[120px]" />

        <Container className="relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/a-propos/equipe"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              <span>Retour a l'equipe</span>
            </Link>
          </motion.div>

          {/* Profile header */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="shrink-0"
            >
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                />
              ) : (
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-orange/20 flex items-center justify-center border-4 border-white/20">
                  <span className="text-4xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center md:text-left"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {member.name}
              </h1>
              <p className="text-xl text-orange font-medium mb-1 font-cursive italic">
                {member.role || member.subject}
              </p>
              {member.title && <p className="text-white/70">{member.title}</p>}
              {member.specialty && (
                <p className="text-white/60 text-sm mt-1">{member.specialty}</p>
              )}

              {/* Social links */}
              {member.social && (
                <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#006699] transition-colors text-sm"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
                    >
                      <Mail size={16} />
                      Email
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-off-white">
        <Container className="max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2 space-y-8">
              {/* Biography */}
              {(member.bio || member.fullBio) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-orange" />
                    Biographie
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {member.bio || member.fullBio}
                  </p>
                </motion.div>
              )}

              {/* Quote */}
              {member.quote && (
                <motion.blockquote
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-apricot-light rounded-2xl p-6 border-l-4 border-orange"
                >
                  <Quote size={24} className="text-orange/50 mb-2" />
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "{member.quote}"
                  </p>
                </motion.blockquote>
              )}

              {/* Testimonial */}
              {member.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-navy rounded-2xl p-6 text-white"
                >
                  <h3 className="font-semibold mb-3 text-orange">
                    Ce que disent les etudiants
                  </h3>
                  <p className="italic text-white/90 mb-4">
                    "{member.testimonial.quote}"
                  </p>
                  <div className="text-sm text-white/70">
                    — {member.testimonial.author}, {member.testimonial.school}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Education */}
              {member.education && member.education.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2">
                    <GraduationCap size={18} className="text-orange" />
                    Formation
                  </h3>
                  <ul className="space-y-2">
                    {member.education.map((edu, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-700 pl-4 border-l-2 border-orange/30"
                      >
                        {edu}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Achievements */}
              {member.achievements && member.achievements.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-navy mb-4">
                    Realisations
                  </h3>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-orange mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Experience */}
              {member.experience && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-orange/10 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-navy mb-2">
                    Experience
                  </h3>
                  <p className="text-gray-700">{member.experience}</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              to="/a-propos/equipe"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-xl hover:bg-navy/90 transition-colors"
            >
              <ArrowLeft size={18} />
              Voir toute l'equipe
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
