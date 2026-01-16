// ============================================
// PROGRAM DETAIL MODAL - Affichage detaille d'un programme
// Tabs: Avantages, Emploi du temps, Paiements, Matieres
// ============================================

import { AnimatePresence, motion } from 'framer-motion';
import {
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
  X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useProgramDetailModal } from '../../hooks/useProgramDetailModal';
import { useInscriptionModal } from '../../hooks/useInscriptionModal';
import Button from '../common/Button';

// Tab configuration
const tabs = [
  { id: 'avantages', label: 'Avantages', icon: Star },
  { id: 'schedule', label: 'Emploi du temps', icon: Calendar },
  { id: 'payment', label: 'Paiements', icon: CreditCard },
  { id: 'subjects', label: 'Matieres', icon: BookOpen },
];

// Session type colors and labels
const sessionTypes = {
  cours: { label: 'Cours', bg: 'bg-navy/10', text: 'text-navy', border: 'border-navy/20' },
  td: { label: 'TD', bg: 'bg-orange/10', text: 'text-orange', border: 'border-orange/20' },
  tp: { label: 'TP', bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/20' },
  revision: { label: 'Revision', bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/20' },
  examen: { label: 'Examen', bg: 'bg-rose-500/10', text: 'text-rose-600', border: 'border-rose-500/20' },
  tutorat: { label: 'Tutorat', bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/20' },
};

// Format price in FCFA
function formatPrice(amount) {
  return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
}

// Avantages Tab Component
function AvantagesTab({ program }) {
  const advantages = program.advantages || [];

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {advantages.map((advantage, index) => (
        <motion.div
          key={advantage.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="flex items-start gap-3 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
            <CheckCircle size={20} className="text-orange" />
          </div>
          <div>
            <h4 className="font-semibold text-navy mb-1">{advantage.title}</h4>
            <p className="text-sm text-gray-500">{advantage.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Schedule Tab Component - Table Design
function ScheduleTab({ program }) {
  const schedule = program.schedule || [];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      {/* Table Header */}
      <div className="grid grid-cols-3 bg-navy text-white text-sm font-semibold">
        <div className="p-3 border-r border-navy-700">Jour</div>
        <div className="p-3 border-r border-navy-700">Matin</div>
        <div className="p-3">Apres-midi</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-100">
        {schedule.map((day, index) => {
          const morningSession = day.sessions[0];
          const afternoonSession = day.sessions[1];
          const morningType = sessionTypes[morningSession?.type] || sessionTypes.cours;
          const afternoonType = sessionTypes[afternoonSession?.type] || sessionTypes.cours;

          return (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="grid grid-cols-3 text-sm hover:bg-gray-50 transition-colors"
            >
              {/* Day */}
              <div className="p-3 font-semibold text-navy bg-gray-50 border-r border-gray-100">
                {day.day}
              </div>

              {/* Morning Session */}
              <div className="p-3 border-r border-gray-100">
                {morningSession && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-500">{morningSession.time}</span>
                    </div>
                    <div className="font-medium text-navy">{morningSession.subject}</div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${morningType.bg} ${morningType.text}`}>
                      {morningType.label}
                    </span>
                  </div>
                )}
              </div>

              {/* Afternoon Session */}
              <div className="p-3">
                {afternoonSession && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-500">{afternoonSession.time}</span>
                    </div>
                    <div className="font-medium text-navy">{afternoonSession.subject}</div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${afternoonType.bg} ${afternoonType.text}`}>
                      {afternoonType.label}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="p-3 bg-gray-50 border-t border-gray-200">
        <div className="flex flex-wrap gap-3">
          {Object.entries(sessionTypes).map(([key, value]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span className={`w-3 h-3 rounded-full ${value.bg} ${value.border} border`} />
              <span className="text-xs text-gray-500">{value.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Payment Tab Component
function PaymentTab({ program }) {
  const paymentPlans = program.paymentPlans || [];

  return (
    <div className="space-y-4">
      {/* Payment Plans */}
      <div className="grid gap-4">
        {paymentPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative p-5 rounded-xl border-2 transition-all ${
              plan.recommended
                ? 'border-orange bg-orange/5 shadow-lg shadow-orange/10'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            {/* Recommended Badge */}
            {plan.recommended && (
              <div className="absolute -top-3 left-4 px-3 py-1 bg-orange text-white text-xs font-bold rounded-full">
                Recommande
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="font-bold text-navy text-lg">{plan.name}</h4>
                <p className="text-sm text-gray-500">{plan.description}</p>
                {plan.discount && (
                  <span className="inline-block mt-2 px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded-full">
                    {plan.discount}
                  </span>
                )}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-navy">{formatPrice(plan.amount)}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Payment Info */}
      <div className="p-4 bg-navy/5 rounded-xl">
        <h4 className="font-semibold text-navy mb-2 flex items-center gap-2">
          <CreditCard size={18} />
          Modes de paiement acceptes
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-success" />
            Especes
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-success" />
            Mobile Money
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-success" />
            Virement bancaire
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={14} className="text-success" />
            Cheque
          </div>
        </div>
      </div>
    </div>
  );
}

// Subjects Tab Component
function SubjectsTab({ program }) {
  const subjects = program.subjects || [];
  const totalHours = subjects.reduce((acc, s) => acc + (s.hours || 0), 0);

  return (
    <div className="space-y-4">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gradient-to-br from-navy to-navy-800 rounded-xl text-white">
          <div className="text-3xl font-bold">{subjects.length}</div>
          <div className="text-white/70 text-sm">Matieres enseignees</div>
        </div>
        <div className="p-4 bg-gradient-to-br from-orange to-orange-600 rounded-xl text-white">
          <div className="text-3xl font-bold">{totalHours}h</div>
          <div className="text-white/70 text-sm">Volume horaire total</div>
        </div>
      </div>

      {/* Subjects List */}
      <div className="grid gap-3">
        {subjects.map((subject, index) => {
          const Icon = subject.icon || BookOpen;
          const percentage = totalHours > 0 ? (subject.hours / totalHours) * 100 : 0;

          return (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/10 to-apricot/20 flex items-center justify-center">
                  <Icon size={24} className="text-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-navy truncate">{subject.name}</h4>
                    <span className="text-sm font-bold text-orange shrink-0 ml-2">{subject.hours}h</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
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
    </div>
  );
}

// Main Modal Component
export default function ProgramDetailModal() {
  const { isOpen, selectedProgram, closeModal } = useProgramDetailModal();
  const { openModal: openInscriptionModal } = useInscriptionModal();
  const [activeTab, setActiveTab] = useState('avantages');
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Reset tab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab('avantages');
    }
  }, [isOpen]);

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeModal]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  // Handle inscription click
  const handleInscription = () => {
    closeModal();
    setTimeout(() => openInscriptionModal(selectedProgram?.id), 300);
  };

  if (!selectedProgram) return null;

  const Icon = selectedProgram.icon || GraduationCap;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header with gradient */}
            <div className={`relative p-6 bg-gradient-to-br ${selectedProgram.gradient} text-white`}>
              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>

              {/* Program Info */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Icon size={32} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold mb-1">{selectedProgram.name}</h2>
                  <p className="text-white/80 text-sm">{selectedProgram.school}</p>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-4 mt-3">
                    <div className="flex items-center gap-1.5 text-sm">
                      <Clock size={16} className="text-white/70" />
                      <span>{selectedProgram.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm">
                      <Users size={16} className="text-white/70" />
                      <span>{selectedProgram.studentsPerClass} max/classe</span>
                    </div>
                    {selectedProgram.successRate && (
                      <div className="flex items-center gap-1.5 text-sm">
                        <TrendingUp size={16} className="text-white/70" />
                        <span>{selectedProgram.successRate}% reussite</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-1">
                {tabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-white text-navy shadow-lg'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <TabIcon size={16} />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === 'avantages' && <AvantagesTab program={selectedProgram} />}
                  {activeTab === 'schedule' && <ScheduleTab program={selectedProgram} />}
                  {activeTab === 'payment' && <PaymentTab program={selectedProgram} />}
                  {activeTab === 'subjects' && <SubjectsTab program={selectedProgram} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer CTA */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-sm text-gray-500">A partir de</span>
                  <div className="text-xl font-bold text-navy">{selectedProgram.priceLabel}</div>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleInscription}
                  className="w-full sm:w-auto"
                >
                  S'inscrire maintenant
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
