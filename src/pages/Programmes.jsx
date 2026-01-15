import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Star,
} from 'lucide-react';
import SEO from '@components/common/SEO';
import Container from '@components/common/Container';
import Button from '@components/common/Button';
import {
  ProgramCard,
  MethodologySection,
  CalendarSection,
  ComparisonTable,
  PreparatoireHero,
} from '@components/programmes';
import Testimonials from '@components/home/Testimonials';
import CTAFinal from '@components/home/CTAFinal';
import { programmes, includedResources } from '@/data/programmes';
import { useInscriptionModal } from '../hooks/useInscriptionModal';

// Hero Section
function HeroSection() {
  const { openModal } = useInscriptionModal();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-apricot-light via-white to-white" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-[100px] pointer-events-none" />

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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight"
          >
            Des programmes adaptés à{' '}
            <span className="text-orange font-cursive italic">chaque ambition</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Préparation intensive aux concours des grandes écoles d'ingénieurs du
            Cameroun : ENSP, ENSTP, ENS. Une méthodologie éprouvée pour
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
                <span className="text-2xl font-bold text-navy">{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Preparatoire Hero Section
function PreparatoireHeroSection() {
  const preparatoire = programmes.find((p) => p.id === 'preparatoire');

  if (!preparatoire) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-apricot-light to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-navy/5 rounded-full blur-3xl" />

      <Container>
        <PreparatoireHero program={preparatoire} />
      </Container>
    </section>
  );
}

// Programs Grid Section
function ProgramsSection() {
  return (
    <section id="programmes" className="py-24 bg-white relative overflow-hidden">
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
      <MethodologySection />
      <ComparisonTable />
      <CalendarSection />
      <Testimonials />
      <CTAFinal />
    </>
  );
}
