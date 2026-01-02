// ============================================
// ECOLE DETAIL
// Page detail d'une ecole
// ============================================

import { allCareers } from '@/data/careers';
import { domains } from '@/data/domains';
import { getSchoolBySlug } from '@/data/schools';
import Button from '@components/common/Button';
import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import { CareerCard } from '@components/orientation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  ExternalLink,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Target,
  Trophy,
  Users,
} from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';

export default function EcoleDetail() {
  const { slug } = useParams();
  const school = getSchoolBySlug(slug);

  // Redirect if school not found
  if (!school) {
    return <Navigate to="/orientation/ecoles" replace />;
  }

  const Icon = school.icon;
  const isLocal = school.type === 'local';
  const relatedCareers =
    school.careers
      ?.map((id) => allCareers.find((c) => c.id === id))
      .filter(Boolean) || [];
  const schoolDomains =
    school.domains
      ?.map((id) => domains.find((d) => d.id === id))
      .filter(Boolean) || [];

  return (
    <>
      <SEO
        title={`${school.shortName} - Fiche ecole`}
        description={school.description}
      />

      {/* Hero */}
      <section
        className={`relative py-20 lg:py-28 bg-linear-to-br ${school.gradient} overflow-hidden`}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10">
          {/* Back link */}
          <Link
            to="/orientation/ecoles"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Retour aux ecoles</span>
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Logo/Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-3xl flex items-center justify-center shrink-0 p-3"
            >
              {school.logo ? (
                <img
                  src={school.logo}
                  alt={school.shortName}
                  className="w-full h-full object-contain"
                />
              ) : (
                <Icon size={48} className="text-gray-700" />
              )}
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {!isLocal && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-white text-sm">
                      <Globe size={14} />
                      International
                    </span>
                  )}
                  {school.alphaPrep?.available && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                      <Target size={14} />
                      Prep Alpha
                    </span>
                  )}
                  {schoolDomains.map((domain) => (
                    <span
                      key={domain.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm"
                    >
                      <domain.icon size={14} />
                      {domain.shortName}
                    </span>
                  ))}
                </div>

                <h1 className="text-2xl lg:text-4xl font-bold text-white mb-2">
                  {school.shortName}
                </h1>
                <p className="text-lg text-white/80 mb-4">{school.name}</p>

                {/* Location */}
                <div className="flex items-center gap-2 text-white/70 mb-6">
                  <MapPin size={18} />
                  <span>
                    {school.city}, {school.country}
                  </span>
                </div>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-4">
                  {school.stats.founded && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                      <Calendar size={18} className="text-white/70" />
                      <span className="text-white text-sm">
                        Fondee en {school.stats.founded}
                      </span>
                    </div>
                  )}
                  {school.stats.students && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl">
                      <Users size={18} className="text-white/70" />
                      <span className="text-white text-sm">
                        {school.stats.students.toLocaleString()} etudiants
                      </span>
                    </div>
                  )}
                  {school.stats.ranking && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-xl">
                      <Trophy size={18} className="text-amber-300" />
                      <span className="text-white text-sm">
                        {school.stats.ranking}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

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
                  Presentation
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {school.longDescription || school.description}
                </p>
              </motion.div>

              {/* Programmes */}
              {school.programs && school.programs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    Programmes de formation
                  </h2>
                  <div className="space-y-4">
                    {school.programs.map((program, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center">
                            <GraduationCap size={20} className="text-navy" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-navy">
                              {program.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              Duree: {program.duration}
                            </p>
                          </div>
                        </div>
                        {program.places && (
                          <span className="text-sm text-gray-500">
                            {program.places} places
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Admission */}
              {school.admission && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    Admission
                  </h2>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-navy mb-3">
                      Conditions requises
                    </h3>
                    <div className="space-y-2">
                      {school.admission.requirements.map((req, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle
                            size={18}
                            className="text-orange shrink-0 mt-0.5"
                          />
                          <span className="text-gray-600">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                    <h3 className="font-semibold text-navy mb-2">Processus</h3>
                    <p className="text-gray-600">{school.admission.process}</p>
                  </div>

                  {/* Dates */}
                  {school.admission.dates && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {school.admission.dates.inscription && (
                        <div className="p-4 bg-gray-50 rounded-xl text-center">
                          <Clock
                            size={20}
                            className="text-orange mx-auto mb-2"
                          />
                          <p className="text-sm text-gray-500">Inscriptions</p>
                          <p className="font-semibold text-navy">
                            {school.admission.dates.inscription}
                          </p>
                        </div>
                      )}
                      {school.admission.dates.concours && (
                        <div className="p-4 bg-gray-50 rounded-xl text-center">
                          <BookOpen
                            size={20}
                            className="text-orange mx-auto mb-2"
                          />
                          <p className="text-sm text-gray-500">Concours</p>
                          <p className="font-semibold text-navy">
                            {school.admission.dates.concours}
                          </p>
                        </div>
                      )}
                      {school.admission.dates.resultats && (
                        <div className="p-4 bg-gray-50 rounded-xl text-center">
                          <Trophy
                            size={20}
                            className="text-orange mx-auto mb-2"
                          />
                          <p className="text-sm text-gray-500">Resultats</p>
                          <p className="font-semibold text-navy">
                            {school.admission.dates.resultats}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Stats admission */}
                  <div className="flex flex-wrap gap-4">
                    {school.admission.places && (
                      <div className="px-4 py-2 bg-emerald-50 rounded-lg">
                        <span className="text-emerald-700 font-semibold">
                          {school.admission.places}
                        </span>
                        <span className="text-emerald-600 text-sm ml-1">
                          places/an
                        </span>
                      </div>
                    )}
                    {school.admission.acceptance && (
                      <div className="px-4 py-2 bg-orange/10 rounded-lg">
                        <span className="text-orange font-semibold">
                          {school.admission.acceptance}
                        </span>
                        <span className="text-orange/80 text-sm ml-1">
                          taux d'admission
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Facilities */}
              {school.facilities && school.facilities.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    Infrastructures
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {school.facilities.map((facility, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-50 rounded-full text-gray-700"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-navy mb-4">
                  Chiffres cles
                </h3>
                <div className="space-y-4">
                  {school.stats.successRate && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Taux de reussite</span>
                      <span className="font-semibold text-emerald-600">
                        {school.stats.successRate}%
                      </span>
                    </div>
                  )}
                  {school.stats.employmentRate && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Insertion pro</span>
                      <span className="font-semibold text-navy">
                        {school.stats.employmentRate}%
                      </span>
                    </div>
                  )}
                  {school.stats.students && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Etudiants</span>
                      <span className="font-semibold text-navy">
                        {school.stats.students.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Frais */}
              {school.tuition && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign size={24} className="text-navy" />
                    <h3 className="text-lg font-bold text-navy">
                      Frais de scolarite
                    </h3>
                  </div>
                  <p className="text-2xl font-bold text-orange mb-2">
                    {school.tuition.annual}
                  </p>
                  {school.tuition.note && (
                    <p className="text-sm text-gray-500">
                      {school.tuition.note}
                    </p>
                  )}
                </motion.div>
              )}

              {/* Contact */}
              {school.contact && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-navy mb-4">Contact</h3>
                  <div className="space-y-3">
                    {school.contact.website && (
                      <a
                        href={school.contact.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-600 hover:text-orange transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm truncate">Site web</span>
                      </a>
                    )}
                    {school.contact.email && (
                      <a
                        href={`mailto:${school.contact.email}`}
                        className="flex items-center gap-3 text-gray-600 hover:text-orange transition-colors"
                      >
                        <Mail size={18} />
                        <span className="text-sm truncate">
                          {school.contact.email}
                        </span>
                      </a>
                    )}
                    {school.contact.address && (
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin size={18} />
                        <span className="text-sm">
                          {school.contact.address}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Alpha Prep CTA */}
              {school.alphaPrep?.available && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-orange rounded-2xl p-6 text-center"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    Prepare-toi avec Alpha Center
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {school.alphaPrep.successRate}% de reussite au concours
                  </p>
                  <Button
                    variant="secondary"
                    to={`/programmes#${school.alphaPrep.programme}`}
                    size="md"
                    className="w-full justify-center !bg-white !text-orange hover:!bg-white/90"
                  >
                    Voir le programme
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Metiers accessibles */}
      {relatedCareers.length > 0 && (
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
                Metiers accessibles
              </h2>
              <p className="text-gray-600">
                Les carrieres que tu peux viser apres cette ecole
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCareers.map((career, index) => (
                <CareerCard
                  key={career.id}
                  career={career}
                  index={index}
                  variant="compact"
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
