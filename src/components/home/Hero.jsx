import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Trophy, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Trophy, value: '95%', label: 'Taux de réussite' },
  { icon: Users, value: '500+', label: 'Étudiants admis' },
  { icon: Calendar, value: '15+', label: "Années d'expérience" },
  { icon: GraduationCap, value: '50+', label: 'Enseignants experts' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden flex-1">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 50%, #FFF8F5 100%)',
        }}
      />

      {/* Decorative Blobs */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[var(--color-orange)] opacity-[0.06] blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-[var(--color-navy)] opacity-[0.05] blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-[var(--color-apricot)] opacity-[0.15] blur-[60px] -z-10 pointer-events-none" />

      {/* Content */}
      <div className="container-alpha pt-32 pb-8 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-lg shadow-[var(--color-navy)]/5 text-sm font-medium text-[var(--color-navy)]">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-orange)]/10">
              <Trophy size={14} className="text-[var(--color-orange)]" />
            </span>
            +500 admis depuis 2009
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-navy)] mb-6 leading-[1.1] max-w-4xl"
        >
          Intègre l'école d'
          <span
            className="text-[var(--color-orange)] italic"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            ingénieurs
          </span>
          <br className="hidden sm:block" />
          de tes rêves.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--color-gray-600)] mb-10 max-w-2xl leading-relaxed"
        >
          Préparation intensive aux concours ENSP, ENSTP, ENS et grandes écoles d'ingénieurs au Cameroun et à l'étranger.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Link
            to="/inscription"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-orange)] text-white font-semibold rounded-full shadow-lg shadow-[var(--color-orange)]/25 hover:bg-[var(--color-orange-600)] hover:shadow-xl hover:shadow-[var(--color-orange)]/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Je m'inscris
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/70 backdrop-blur-xl text-[var(--color-navy)] font-semibold rounded-full border border-[var(--color-gray-200)] hover:bg-white hover:border-[var(--color-navy)]/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            Découvrir nos programmes
          </Link>
        </motion.div>

        {/* Schools Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--color-gray-500)] mb-8"
        >
          <span>Préparation aux concours :</span>
          {['ENSP', 'ENSTP', 'ENS', 'Polytechnique', 'EPFL'].map((school) => (
            <span
              key={school}
              className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-orange)] transition-colors cursor-default"
            >
              {school}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Floating Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full px-4 pb-8 md:pb-12"
      >
        <div className="container-alpha">
          <div className="mx-auto max-w-4xl p-6 md:p-8 rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/80 shadow-xl shadow-[var(--color-navy)]/8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className={`text-center ${
                    index < stats.length - 1 ? 'md:border-r md:border-[var(--color-gray-200)]' : ''
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-orange)]/10 mb-3">
                    <stat.icon size={24} className="text-[var(--color-orange)]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
