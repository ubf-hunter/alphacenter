import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import Button from '@components/common/Button';
import { calendar } from '@/data/programmes';
import { useInscriptionModal } from '../../hooks/useInscriptionModal';

const programColors = {
  ENSP: 'border-l-orange',
  ENSTP: 'border-l-navy',
  ENS: 'border-l-apricot',
  Préparatoire: 'border-l-gray-400',
};

export default function CalendarSection() {
  const { openModal } = useInscriptionModal();
  const { t } = useTranslation('programmes');

  const statusStyles = {
    open: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      badge: 'bg-green-100 text-green-700',
      icon: CheckCircle,
      label: t('calendar.statusOpen'),
    },
    upcoming: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      badge: 'bg-amber-100 text-amber-700',
      icon: Clock,
      label: t('calendar.statusUpcoming'),
    },
    closed: {
      bg: 'bg-gray-50',
      text: 'text-gray-500',
      badge: 'bg-gray-100 text-gray-500',
      icon: AlertCircle,
      label: t('calendar.statusClosed'),
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-apricot/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <Container className="relative z-10">
        <SectionTitle
          badge={t('calendar.badge')}
          title={t('calendar.title')}
          subtitle={t('calendar.subtitle')}
        />

        <div className="mt-16 space-y-8">
          {calendar.map((programGroup, groupIndex) => (
            <motion.div
              key={programGroup.programme}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Program header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-1 h-8 rounded-full ${
                    programGroup.programme === 'ENSP'
                      ? 'bg-orange'
                      : programGroup.programme === 'ENSTP'
                      ? 'bg-navy'
                      : programGroup.programme === 'ENS'
                      ? 'bg-apricot'
                      : 'bg-gray-400'
                  }`}
                />
                <h3 className="text-xl font-bold text-navy">
                  {t('calendar.programLabel')} {programGroup.programme}
                </h3>
              </div>

              {/* Sessions */}
              <div className="grid md:grid-cols-2 gap-4">
                {programGroup.sessions.map((session, sessionIndex) => {
                  const status = statusStyles[session.status];
                  const StatusIcon = status.icon;
                  const placesPercentage =
                    ((session.places - session.placesLeft) / session.places) * 100;

                  return (
                    <motion.div
                      key={session.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: sessionIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`
                        relative p-6 rounded-2xl
                        ${status.bg}
                        border border-gray-100
                        hover:shadow-lg transition-shadow duration-300
                        border-l-4 ${programColors[programGroup.programme]}
                      `}
                    >
                      {/* Status badge */}
                      <div
                        className={`
                          inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-4
                          ${status.badge}
                        `}
                      >
                        <StatusIcon size={14} />
                        {status.label}
                      </div>

                      {/* Session name */}
                      <h4 className="text-lg font-semibold text-navy mb-3">
                        {session.name}
                      </h4>

                      {/* Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar size={16} className="text-gray-400" />
                          <span>{t('calendar.startDate')} : {session.startDate}</span>
                        </div>
                        {session.endDate && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock size={16} className="text-gray-400" />
                            <span>{t('calendar.endDate')} : {session.endDate}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users size={16} className="text-gray-400" />
                          <span>
                            {t('calendar.placesAvailable', { left: session.placesLeft, total: session.places })}
                          </span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="mb-4">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              placesPercentage > 80
                                ? 'bg-red-500'
                                : placesPercentage > 50
                                ? 'bg-amber-500'
                                : 'bg-green-500'
                            }`}
                            style={{ width: `${placesPercentage}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {t('calendar.placesTaken', { percentage: Math.round(placesPercentage) })}
                        </p>
                      </div>

                      {/* CTA */}
                      {session.status === 'open' && (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => openModal(programGroup.programme.toLowerCase())}
                          className="w-full justify-center"
                        >
                          {t('calendar.registerNow')}
                          <ArrowRight size={16} />
                        </Button>
                      )}
                      {session.status === 'upcoming' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          to="/contact"
                          className="w-full justify-center"
                        >
                          {t('calendar.notifyMe')}
                        </Button>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">
            {t('calendar.noSessionFound')}
          </p>
          <Button variant="ghost" to="/contact">
            {t('calendar.contactForOptions')}
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
