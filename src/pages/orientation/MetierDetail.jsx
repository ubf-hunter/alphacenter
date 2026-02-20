// ============================================
// METIER DETAIL
// Page detail d'un metier
// ============================================

import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Clock,
  GraduationCap,
  Briefcase,
  DollarSign,
  CheckCircle,
  Star,
  Building2,
  Users,
  Target,
} from 'lucide-react';
import Container from '@components/common/Container';
import Button from '@components/common/Button';
import SEO from '@components/common/SEO';
import { SchoolCard } from '@components/orientation';
import { getCareerBySlug, allCareers } from '@/data/careers';
import { getSchoolsByCareerId } from '@/data/schools';
import { domains } from '@/data/domains';

export default function MetierDetail() {
  const { slug } = useParams();
  const career = getCareerBySlug(slug);

  // Redirect if career not found
  if (!career) {
    return <Navigate to="/orientation/metiers" replace />;
  }

  const Icon = career.icon;
  const domain = domains.find(d => d.id === career.domain);
  const relatedSchools = getSchoolsByCareerId(career.id);
  const relatedCareers = career.relatedCareers
    ?.map(id => allCareers.find(c => c.id === id))
    .filter(Boolean) || [];

  return (
    <>
      <SEO
        title={`${career.name} - Fiche metier`}
        description={career.description}
        image={career.ogImage}
        url={`/orientation/metiers/${career.slug}`}
      />

      {/* Hero */}
      <section className={`relative py-20 lg:py-28 bg-linear-to-br ${career.gradient} overflow-hidden`}>
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          {/* Back link */}
          <Link
            to="/orientation/metiers"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Retour aux metiers</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Icon + Text */}
            <div className="flex-1 flex flex-col lg:flex-row items-start gap-8">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shrink-0"
              >
                <Icon size={48} className="text-white" />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {/* Domain badge */}
                  {domain && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-4">
                      <domain.icon size={14} />
                      {domain.name}
                    </span>
                  )}

                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {career.name}
                  </h1>
                  <p className="text-xl text-white/80 mb-6">
                    {career.tagline}
                  </p>

                  {/* Quick stats */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                      <Clock size={18} className="text-white/70" />
                      <span className="text-white text-sm">{career.education.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                      <Briefcase size={18} className="text-white/70" />
                      <span className="text-white text-sm">{career.employment.rate}% emploi</span>
                    </div>
                    {career.outlook?.trend === 'up' && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-xl">
                        <TrendingUp size={18} className="text-emerald-300" />
                        <span className="text-white text-sm">En hausse</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Career Image */}
            {career.ogImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block shrink-0"
              >
                <div className="w-64 h-64 rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-2xl">
                  <img
                    src={career.ogImage}
                    alt={career.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </Container>
      </section>

      {/* Mobile Career Image */}
      {career.ogImage && (
        <section className="lg:hidden bg-white pt-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-sm mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={career.ogImage}
                alt={career.name}
                className="w-full h-56 object-cover"
              />
            </div>
          </motion.div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-navy mb-4">
                  Le metier
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {career.description}
                </p>
              </motion.div>

              {/* Missions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Missions principales
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {career.missions.map((mission, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                    >
                      <CheckCircle size={20} className="text-orange shrink-0 mt-0.5" />
                      <span className="text-gray-700">{mission}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Competences */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Competences requises
                </h2>
                <div className="space-y-4">
                  {career.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-linear-to-r ${career.gradient} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Qualites */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Qualites personnelles
                </h2>
                <div className="flex flex-wrap gap-3">
                  {career.qualities.map((quality, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-orange/10 text-orange rounded-full text-sm font-medium"
                    >
                      <Star size={14} />
                      {quality}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Perspectives */}
              {career.outlook && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    Perspectives d'emploi
                  </h2>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                        <TrendingUp size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-gray-700 mb-4">{career.outlook.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {career.outlook.opportunities.map((opp, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white text-emerald-700 rounded-full text-sm"
                            >
                              {opp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Formation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={24} className="text-navy" />
                  <h3 className="text-lg font-bold text-navy">Formation</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Niveau</span>
                    <span className="font-semibold text-navy">{career.education.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duree</span>
                    <span className="font-semibold text-navy">{career.education.duration}</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-gray-500 block mb-2">Parcours</span>
                    <p className="text-gray-700">{career.education.path}</p>
                  </div>
                </div>
              </motion.div>

              {/* Salaires */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign size={24} className="text-navy" />
                  <h3 className="text-lg font-bold text-navy">Salaires</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Debutant</span>
                    <span className="font-semibold text-navy text-sm">{career.salary.junior}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Confirme</span>
                    <span className="font-semibold text-orange text-sm">{career.salary.mid}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Senior</span>
                    <span className="font-semibold text-emerald-600 text-sm">{career.salary.senior}</span>
                  </div>
                </div>
              </motion.div>

              {/* Emploi */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users size={24} className="text-navy" />
                  <h3 className="text-lg font-bold text-navy">Employeurs</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {career.employment.sectors.map((sector, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-navy rounded-2xl p-6 text-center"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  Ce metier t'interesse ?
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Prepare-toi avec Alpha Center
                </p>
                <Button variant="primary" to="/programmes" size="md" className="w-full justify-center">
                  Voir nos programmes
                </Button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ecoles formant a ce metier */}
      {relatedSchools.length > 0 && (
        <section className="py-16 bg-gray-50/50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
                Ecoles pour devenir {career.shortName}
              </h2>
              <p className="text-gray-600">
                Decouvre les etablissements qui forment a ce metier
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSchools.slice(0, 3).map((school, index) => (
                <SchoolCard key={school.id} school={school} index={index} />
              ))}
            </div>

            {relatedSchools.length > 3 && (
              <div className="text-center mt-8">
                <Button variant="outline" to="/orientation/ecoles">
                  Voir toutes les ecoles
                  <ArrowRight size={18} />
                </Button>
              </div>
            )}
          </Container>
        </section>
      )}

      {/* Metiers similaires */}
      {relatedCareers.length > 0 && (
        <section className="py-16 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
                Metiers similaires
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCareers.map((relatedCareer, index) => {
                const RelatedIcon = relatedCareer.icon;
                return (
                  <motion.div
                    key={relatedCareer.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={`/orientation/metiers/${relatedCareer.slug}`}
                      className="group flex items-center gap-4 p-5 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors"
                    >
                      <div className={`w-14 h-14 bg-linear-to-br ${relatedCareer.gradient} rounded-xl flex items-center justify-center shrink-0`}>
                        <RelatedIcon size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-navy mb-1">{relatedCareer.name}</h4>
                        <p className="text-sm text-gray-500">{relatedCareer.tagline}</p>
                      </div>
                      <ArrowRight size={20} className="text-gray-400 group-hover:text-orange transition-colors" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
