import { includedResources, programmes } from '@/data/programmes';
import Button from '@components/common/Button';
import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import CTAFinal from '@components/home/CTAFinal';
import {
  CalendarSection,
  MethodologySection,
  ProgramCard,
} from '@components/programmes';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  GraduationCap,
  Sparkles,
  Star,
  Trophy,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bgimageu from '../assets/images/misc/prep1.jpg';
import { useInscriptionModal } from '../hooks/useInscriptionModal';

// Hero Section
function HeroSection() {
  const { openModal } = useInscriptionModal();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-apricot-light via-white to-white" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-150 h-150 bg-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-navy/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23001A51' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm text-sm font-medium text-navy mb-6">
              <GraduationCap size={18} className="text-orange" />
              Formations d'excellence
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-6 leading-tight"
          >
            Des programmes adaptés à{' '}
            <span className="text-orange font-cursive italic">
              chaque ambition
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Préparation intensive aux concours des grandes écoles d'ingénieurs
            du Cameroun : ENSP, ENSTP, ENS. Une méthodologie éprouvée pour
            maximiser tes chances de réussite.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" onClick={() => openModal()}>
              Je m'inscris maintenant
              <ArrowRight size={20} />
            </Button>
            <Button variant="ghost" size="lg" to="#programmes">
              Voir les programmes
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: Users, value: '500+', label: 'Étudiants formés' },
              { icon: Trophy, value: '90%', label: 'Taux de réussite' },
              { icon: BookOpen, value: '4', label: 'Programmes' },
              { icon: Star, value: '15+', label: "Années d'expertise" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100"
              >
                <stat.icon size={24} className="text-orange mb-2" />
                <span className="text-2xl font-bold text-navy">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ============================================
// CONFIGURATION - Personnalise ici ton image
// ============================================
const HERO_CONFIG = {
  // Remplace par le chemin de ton image
  backgroundImage: bgimageu,
  // Alternative: image d'étudiants en salle de classe
  // backgroundImage: '/images/students-classroom.jpg',
};

// ============================================
// COMPOSANTS AUXILIAIRES
// ============================================

// Badge flottant avec animation
function FloatingBadge({
  icon: Icon,
  label,
  value,
  delay = 0,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`
        flex items-center gap-3 px-4 py-3
        bg-white/90 backdrop-blur-md
        rounded-2xl shadow-lg shadow-navy/5
        border border-white/50
        ${className}
      `}
    >
      <div className="p-2 bg-gradient-to-br from-orange to-orange/80 rounded-xl">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-xl font-bold text-navy font-display">{value}</p>
        <p className="text-xs text-navy/60 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

// Point fort avec check
function HighlightPoint({ children, delay = 0 }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-2 text-navy/80"
    >
      <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0" />
      <span className="text-sm font-medium">{children}</span>
    </motion.li>
  );
}

// Bouton CTA principal
function PrimaryButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group relative inline-flex items-center gap-2
        px-8 py-4 
        bg-gradient-to-r from-orange to-orange/90
        text-white font-semibold text-lg
        rounded-2xl
        shadow-xl shadow-orange/25
        hover:shadow-2xl hover:shadow-orange/30
        transition-shadow duration-300
        overflow-hidden
        ${className}
      `}
    >
      {/* Effet de brillance au hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative">{children}</span>
      <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
    </motion.button>
  );
}

// Bouton CTA secondaire
function SecondaryButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        inline-flex items-center gap-2
        px-8 py-4
        bg-white/80 backdrop-blur-sm
        text-navy font-semibold
        rounded-2xl
        border-2 border-navy/10
        hover:border-orange/30 hover:bg-white
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}

// Tag de session/promotion
function SessionTag({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="
        inline-flex items-center gap-2
        px-4 py-2
        bg-navy text-white
        rounded-full
        text-sm font-semibold
        shadow-lg
      "
    >
      <Sparkles className="w-4 h-4" />
      {children}
    </motion.div>
  );
}

export function PreparatoireHeroSection() {
  const preparatoire = programmes.find((p) => p.id === 'preparatoire');
  const [imageLoaded, setImageLoaded] = useState(false);
  const { openModal } = useInscriptionModal();
  const navigate = useNavigate();

  // Effet parallax au scroll
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 0]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);

  // Préchargement de l'image
  useEffect(() => {
    const img = new Image();
    img.src = HERO_CONFIG.backgroundImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  if (!preparatoire) return null;

  // Données pour les badges (à personnaliser)
  const stats = {
    students: '500+',
    successRate: '85%',
    years: '10 ans',
  };

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* ========== FOND AVEC IMAGE ========== */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        {/* Image de fond */}
        <div
          className={`
            absolute inset-0 top-0
            bg-cover bg-center bg-no-repeat
            transition-opacity duration-1000
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ backgroundImage: `url(${HERO_CONFIG.backgroundImage})` }}
        />

        {/* Overlay gradient pour lisibilité */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-white/40" />
        <div className="absolute inset-0 bg-linear-to-b from-apricot-light/50 via-transparent to-white/80" />

        {/* Éléments décoratifs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      </motion.div>

      {/* ========== CONTENU PRINCIPAL ========== */}
      <Container className="relative z-10 ">
        <motion.div
          style={{ y: contentY }}
          className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center py-8"
        >
          {/* Colonne gauche - Texte */}
          <div className="space-y-8">
            {/* Tag de session */}
            <SessionTag>Rentrée 2025 - Inscriptions ouvertes</SessionTag>

            {/* Titre principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy leading-tight">
                Préparez votre{' '}
                <span className="relative">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange/80">
                    réussite
                  </span>
                  {/* Soulignement décoratif */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-orange/20"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q50,0 100,8 T200,8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
                <br />
                aux concours
              </h1>

              <p className="text-lg md:text-xl text-navy/70 leading-relaxed max-w-xl">
                {preparatoire.description ||
                  "Intégrez les meilleures écoles du Cameroun grâce à notre programme de préparation intensive aux concours d'entrée."}
              </p>
            </motion.div>

            {/* Points forts */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-3"
            >
              <HighlightPoint delay={0.4}>
                Cours intensifs & encadrement personnalisé
              </HighlightPoint>
              <HighlightPoint delay={0.5}>
                Épreuves blanches chaque semaine
              </HighlightPoint>
              <HighlightPoint delay={0.6}>
                Professeurs expérimentés
              </HighlightPoint>
              <HighlightPoint delay={0.7}>
                Suivi individuel des progrès
              </HighlightPoint>
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <PrimaryButton onClick={() => openModal()}>
                S'inscrire maintenant
              </PrimaryButton>
              <SecondaryButton
                onClick={() => navigate('/services/preparatoire')}
              >
                Voir les programmes
              </SecondaryButton>
            </motion.div>

            {/* Informations pratiques */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-sm text-navy/60"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange" />
                <span>Du lundi au samedi</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange" />
                <span>8h - 18h</span>
              </div>
            </motion.div>
          </div>

          {/* Colonne droite - Image & Badges flottants */}
          <div className="relative hidden lg:block">
            {/* Image principale avec effet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Cadre décoratif */}
              <div className="absolute -inset-4 bg-gradient-to-br from-orange/20 to-navy/10 rounded-3xl blur-2xl" />

              {/* Image avec glassmorphism */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/50 shadow-2xl">
                <img
                  src={HERO_CONFIG.backgroundImage}
                  alt="Étudiants en préparation"
                  className="w-full h-full object-cover"
                />
                {/* Overlay subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Badges flottants positionnés autour de l'image */}
            <FloatingBadge
              icon={Users}
              label="Étudiants formés"
              value={stats.students}
              delay={0.6}
              className="absolute -left-8 top-1/4"
            />
            <FloatingBadge
              icon={Trophy}
              label="Taux de réussite"
              value={stats.successRate}
              delay={0.8}
              className="absolute -right-4 top-1/2"
            />
            <FloatingBadge
              icon={GraduationCap}
              label="D'expérience"
              value={stats.years}
              delay={1}
              className="absolute -left-4 bottom-20"
            />
          </div>
        </motion.div>
      </Container>

      {/* ========== BANDE DE CONFIANCE ========== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="bg-white/80 backdrop-blur-md border-t border-navy/5">
          <Container>
            <div className="py-6 flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <TrustItem icon={GraduationCap} text="ENSP" />
              <TrustItem icon={GraduationCap} text="ENSTP" />
              <TrustItem icon={GraduationCap} text="ENS" />
              <TrustItem icon={GraduationCap} text="FMBS" />
              <TrustItem icon={GraduationCap} text="ISSEA" />
            </div>
          </Container>
        </div>
      </motion.div>
    </section>
  );
}

// Item de la bande de confiance
function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 text-navy/50 hover:text-navy transition-colors">
      <Icon className="w-5 h-5" />
      <span className="font-semibold text-sm tracking-wide">{text}</span>
    </div>
  );
}

// Programs Grid Section
function ProgramsSection() {
  return (
    <section
      id="programmes"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-apricot/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full text-sm font-medium text-orange mb-4"
          >
            Nos formations
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy mb-4"
          >
            Choisis ton programme de{' '}
            <span className="font-cursive italic text-orange">préparation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Chaque programme est conçu pour t'accompagner vers la réussite avec
            une méthodologie adaptée aux exigences de chaque concours.
          </motion.p>
        </div>

        {/* Programs grid - filtered to exclude preparatoire */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programmes
            .filter((p) => p.id !== 'preparatoire')
            .map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
        </div>
      </Container>
    </section>
  );
}

// Resources Section
function ResourcesSection() {
  return (
    <section className="py-16 bg-apricot-light/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-navy mb-2">
            Inclus dans tous les programmes
          </h3>
          <p className="text-gray-600">
            Des ressources complètes pour maximiser ta réussite
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {includedResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-3">
                  <Icon size={24} className="text-orange" />
                </div>
                <h4 className="text-sm font-semibold text-navy mb-1">
                  {resource.title}
                </h4>
                <p className="text-xs text-gray-500">{resource.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

// Main Page Component
export default function Programmes() {
  const location = useLocation();

  // Scroll to program anchor if hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1); // Remove the '#'
      // Small delay to ensure the page is rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <SEO
        title="Nos Programmes"
        description="Decouvre nos programmes de preparation aux concours: Polytechnique ENSPY, ENSTP, Medecine FMSB, ENS. Cours intensifs, methodologie eprouvee et suivi personnalise."
        url="/programmes"
      />
      <HeroSection />
      <PreparatoireHeroSection />
      <ProgramsSection />
      <ResourcesSection />
      <CalendarSection />
      <MethodologySection />

      <CTAFinal />
    </>
  );
}
