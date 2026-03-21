// ============================================
// PROGRAMME DETAIL PAGE - Page detaillee d'un programme
// Design mobile-first avec sections: Avantages, Horaires, Matieres, Paiements
// ============================================

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  GraduationCap,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '@components/common/Button';
import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import { programmes } from '@/data/programmes';
import { useInscriptionModal } from '../hooks/useInscriptionModal';

// Color styles for program themes
const colorStyles = {
  orange: {
    badge: 'bg-orange text-white',
    iconBg: 'bg-gradient-to-br from-orange to-orange-600',
    accent: 'text-orange',
    border: 'hover:border-orange/30',
    button: 'bg-orange hover:bg-orange-600 text-white',
  },
  navy: {
    badge: 'bg-navy text-white',
    iconBg: 'bg-gradient-to-br from-navy to-blue-800',
    accent: 'text-navy',
    border: 'hover:border-navy/30',
    button: 'bg-navy hover:bg-navy-800 text-white',
  },
  apricot: {
    badge: 'bg-apricot text-navy',
    iconBg: 'bg-gradient-to-br from-apricot to-orange-300',
    accent: 'text-orange',
    border: 'hover:border-apricot/50',
    button: 'bg-orange hover:bg-orange-600 text-white',
  },
  gray: {
    badge: 'bg-gray-600 text-white',
    iconBg: 'bg-gradient-to-br from-gray-600 to-gray-700',
    accent: 'text-gray-600',
    border: 'hover:border-gray-300',
    button: 'bg-gray-700 hover:bg-gray-800 text-white',
  },
  emerald: {
    badge: 'bg-emerald-500 text-white',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    accent: 'text-emerald-600',
    border: 'hover:border-emerald-300',
    button: 'bg-emerald-600 hover:bg-emerald-700 text-white',
  },
  rose: {
    badge: 'bg-rose-500 text-white',
    iconBg: 'bg-gradient-to-br from-rose-500 to-rose-600',
    accent: 'text-rose-600',
    border: 'hover:border-rose-300',
    button: 'bg-rose-600 hover:bg-rose-700 text-white',
  },
  blue: {
    badge: 'bg-blue-500 text-white',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700',
    accent: 'text-blue-600',
    border: 'hover:border-blue-300',
    button: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  indigo: {
    badge: 'bg-indigo-500 text-white',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    accent: 'text-indigo-600',
    border: 'hover:border-indigo-300',
    button: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  },
  amber: {
    badge: 'bg-amber-500 text-white',
    iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600',
    accent: 'text-amber-600',
    border: 'hover:border-amber-300',
    button: 'bg-amber-500 hover:bg-amber-600 text-white',
  },
  green: {
    badge: 'bg-green-500 text-white',
    iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
    accent: 'text-green-600',
    border: 'hover:border-green-300',
    button: 'bg-green-600 hover:bg-green-700 text-white',
  },
};

// Format price in FCFA
function formatPrice(amount) {
  return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection({ program }) {
  const { openModal } = useInscriptionModal();
  const navigate = useNavigate();
  const { t } = useTranslation('programmes');
  const Icon = program.icon || GraduationCap;
  const styles = colorStyles[program.color] || colorStyles.orange;

  return (
    <section className={`relative pt-24 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-br ${program.gradient} text-white overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/programmes')}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-6 sm:mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">{t('detail.back')}</span>
        </motion.button>

        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto sm:mx-0"
          >
            <Icon size={40} className="text-white sm:hidden" />
            <Icon size={48} className="text-white hidden sm:block" />
          </motion.div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
            >
              {program.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 mb-4"
            >
              {program.school}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mb-6"
            >
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-white/70" />
                <span className="text-sm">{program.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-white/70" />
                <span className="text-sm">{program.studentsPerClass} {t('detail.maxPerClass')}</span>
              </div>
              {program.successRate && (
                <div className="flex items-center gap-2">
                  <TrendingUp size={18} className="text-white/70" />
                  <span className="text-sm font-semibold">{program.successRate}% {t('detail.success')}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-white/70" />
                <span className="text-sm">{program.nextSession}</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal(program.id)}
                className={styles.button}
              >
                {t('detail.registerNow')}
                <ArrowRight size={18} />
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// ADVANTAGES SECTION
// ============================================
function AdvantagesSection({ advantages }) {
  const { t } = useTranslation('programmes');
  if (!advantages || advantages.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full text-sm font-medium text-orange mb-4">
            <Star size={16} />
            {t('detail.strengths')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            {t('detail.whyChoose')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-5 sm:p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                <CheckCircle size={24} className="text-orange" />
              </div>
              <h3 className="font-bold text-navy mb-2">{advantage.title}</h3>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ============================================
// SCHEDULE SECTION - Cards mobile / Table desktop
// ============================================
function ScheduleSection({ schedule }) {
  const { t } = useTranslation('programmes');
  if (!schedule || schedule.length === 0) return null;

  const sessionTypes = {
    cours: { label: t('detail.sessionTypes.cours'), bg: 'bg-navy/10', text: 'text-navy' },
    td: { label: t('detail.sessionTypes.td'), bg: 'bg-orange/10', text: 'text-orange' },
    tp: { label: t('detail.sessionTypes.tp'), bg: 'bg-emerald-500/10', text: 'text-emerald-600' },
    revision: { label: t('detail.sessionTypes.revision'), bg: 'bg-purple-500/10', text: 'text-purple-600' },
    examen: { label: t('detail.sessionTypes.examen'), bg: 'bg-rose-500/10', text: 'text-rose-600' },
    tutorat: { label: t('detail.sessionTypes.tutorat'), bg: 'bg-amber-500/10', text: 'text-amber-600' },
    atelier: { label: t('detail.sessionTypes.atelier'), bg: 'bg-cyan-500/10', text: 'text-cyan-600' },
  };

  return (
    <section className="py-12 sm:py-16 bg-apricot-light/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 rounded-full text-sm font-medium text-navy mb-4">
            <Calendar size={16} />
            {t('detail.schedule')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            {t('detail.weeklySchedule')}
          </h2>
        </motion.div>

        {/* Mobile: Cards */}
        <div className="block sm:hidden space-y-4">
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div className="bg-navy px-4 py-3">
                <h3 className="font-bold text-white">{day.day}</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {day.sessions.map((session, i) => {
                  const type = sessionTypes[session.type] || sessionTypes.cours;
                  return (
                    <div key={i} className="p-4 flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                          <Clock size={14} />
                          <span>{session.time}</span>
                        </div>
                        <p className="font-semibold text-navy">{session.subject}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${type.bg} ${type.text}`}>
                        {type.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden sm:block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-navy text-white font-semibold">
            <div className="p-4 border-r border-navy-700">{t('detail.day')}</div>
            <div className="p-4 border-r border-navy-700">{t('detail.morning')}</div>
            <div className="p-4">{t('detail.afternoon')}</div>
          </div>

          {/* Body */}
          <div className="divide-y divide-gray-100">
            {schedule.map((day) => {
              const morningSession = day.sessions[0];
              const afternoonSession = day.sessions[1];
              const morningType = sessionTypes[morningSession?.type] || sessionTypes.cours;
              const afternoonType = sessionTypes[afternoonSession?.type] || sessionTypes.cours;

              return (
                <div key={day.day} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="p-4 font-semibold text-navy bg-gray-50 border-r border-gray-100">
                    {day.day}
                  </div>
                  <div className="p-4 border-r border-gray-100">
                    {morningSession && (
                      <div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                          <Clock size={14} />
                          <span>{morningSession.time}</span>
                        </div>
                        <p className="font-medium text-navy mb-2">{morningSession.subject}</p>
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${morningType.bg} ${morningType.text}`}>
                          {morningType.label}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    {afternoonSession && (
                      <div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                          <Clock size={14} />
                          <span>{afternoonSession.time}</span>
                        </div>
                        <p className="font-medium text-navy mb-2">{afternoonSession.subject}</p>
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${afternoonType.bg} ${afternoonType.text}`}>
                          {afternoonType.label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-wrap gap-4">
              {Object.entries(sessionTypes).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${value.bg}`} />
                  <span className="text-xs text-gray-500">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

// ============================================
// SUBJECTS SECTION
// ============================================
function SubjectsSection({ subjects }) {
  const { t } = useTranslation('programmes');
  if (!subjects || subjects.length === 0) return null;

  const totalHours = subjects.reduce((acc, s) => acc + (s.hours || 0), 0);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full text-sm font-medium text-orange mb-4">
            <BookOpen size={16} />
            {t('detail.program')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            {t('detail.subjects')}
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-4 sm:p-6 bg-gradient-to-br from-navy to-navy-800 rounded-2xl text-white text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold">{subjects.length}</div>
            <div className="text-white/70 text-sm">{t('detail.subjectsLabel')}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-4 sm:p-6 bg-gradient-to-br from-orange to-orange-600 rounded-2xl text-white text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold">{totalHours}h</div>
            <div className="text-white/70 text-sm">{t('detail.totalVolume')}</div>
          </motion.div>
        </div>

        {/* Subjects List */}
        <div className="grid gap-4 max-w-2xl mx-auto">
          {subjects.map((subject, index) => {
            const Icon = subject.icon || BookOpen;
            const percentage = totalHours > 0 ? (subject.hours / totalHours) * 100 : 0;

            return (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/10 to-apricot/20 flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-orange" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-navy truncate">{subject.name}</h4>
                      <span className="text-sm font-bold text-orange shrink-0 ml-2">{subject.hours}h</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-orange to-apricot rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

// ============================================
// PAYMENT SECTION
// ============================================
function PaymentSection({ paymentPlans, priceLabel }) {
  const { t } = useTranslation('programmes');
  if (!paymentPlans || paymentPlans.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-apricot-light/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy/10 rounded-full text-sm font-medium text-navy mb-4">
            <CreditCard size={16} />
            {t('detail.pricing')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            {t('detail.pricingOptions')}
          </h2>
          <p className="text-gray-600 mt-2">{t('detail.startingFrom')} {priceLabel}</p>
        </motion.div>

        <div className="grid gap-4 max-w-xl mx-auto">
          {paymentPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-5 sm:p-6 rounded-2xl border-2 transition-all ${
                plan.recommended
                  ? 'border-orange bg-white shadow-lg shadow-orange/10'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-3 left-4 px-3 py-1 bg-orange text-white text-xs font-bold rounded-full">
                  {t('detail.recommended')}
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="font-bold text-navy text-lg">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.description}</p>
                  {plan.discount && (
                    <span className="inline-block mt-2 px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded-full">
                      {plan.discount}
                    </span>
                  )}
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-2xl font-bold text-navy">{formatPrice(plan.amount)}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 max-w-xl mx-auto"
        >
          <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
            <CreditCard size={18} />
            {t('detail.paymentMethods')}
          </h4>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-success" />
              {t('detail.cash')}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-success" />
              {t('detail.mobileMoney')}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-success" />
              {t('detail.bankTransfer')}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-success" />
              {t('detail.check')}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection({ program }) {
  const { openModal } = useInscriptionModal();
  const { t } = useTranslation('programmes');
  const styles = colorStyles[program.color] || colorStyles.orange;

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-navy to-navy-800 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t('detail.ctaTitle')} {program.shortName || program.name}?
          </h2>
          <p className="text-white/80 mb-8">
            {t('detail.ctaSubtitle1')} {program.placesAvailable} {t('detail.ctaSubtitle2')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => openModal(program.id)}
              className={styles.button}
            >
              {t('detail.registerNow')}
              <ArrowRight size={18} />
            </Button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors font-medium"
            >
              {t('detail.contactUs')}
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function ProgrammeDetail() {
  const { programId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation('programmes');
  const { t: tSeo } = useTranslation('seo');

  // Find the program
  const program = programmes.find((p) => p.id === programId);

  // If program not found, redirect to programmes page
  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-navy mb-4">{t('detail.notFound')}</h1>
          <p className="text-gray-600 mb-6">{t('detail.notFoundDesc')}</p>
          <Button variant="primary" onClick={() => navigate('/programmes')}>
            {t('detail.viewAll')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${program.name} - Alpha Center`}
        description={program.description}
        url={`/programmes/${program.id}`}
      />
      <HeroSection program={program} />
      <AdvantagesSection advantages={program.advantages} />
      <ScheduleSection schedule={program.schedule} />
      <SubjectsSection subjects={program.subjects} />
      <PaymentSection paymentPlans={program.paymentPlans} priceLabel={program.priceLabel} />
      <CTASection program={program} />
    </>
  );
}
