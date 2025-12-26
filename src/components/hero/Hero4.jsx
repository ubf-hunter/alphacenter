// ============================================
// HERO 4 : Social Proof + Stats Cards Grid
// Style : Actulus, Voyago
// ============================================

import { Link } from 'react-router-dom';

export default function Hero4() {
  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Programmes', href: '/services' },
    { label: 'Orientation', href: '/orientation' },
    { label: 'À propos', href: '/resultats' },
  ];

  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  ];

  const features = [
    '📚 Cours intensifs',
    '👨‍🏫 50+ Profs experts',
    '📱 App mobile gratuite',
  ];

  const stats = [
    {
      icon: '🎓',
      number: '500+',
      label: 'Étudiants admis',
      gradient: 'from-orange-400 to-orange-600',
    },
    {
      icon: '📈',
      number: '95%',
      label: 'Taux de réussite',
      gradient: 'from-green-400 to-green-600',
    },
    {
      icon: '⏳',
      number: '15+',
      label: "Années d'expérience",
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: '👨‍🏫',
      number: '50+',
      label: 'Enseignants experts',
      gradient: 'from-purple-400 to-purple-600',
    },
  ];

  const schools = ['ENSP', 'ENSTP', 'ENS', 'Polytechnique', 'EPFL'];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-orange-50/30" />

      {/* Decorative Blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/60 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />

      {/* Navbar */}
      <nav className="relative z-20 flex justify-center pt-6 px-4">
        <div className="flex items-center gap-6 lg:gap-8 px-6 lg:px-8 py-3 lg:py-4 bg-white/70 backdrop-blur-2xl rounded-full border border-white/50 shadow-xl">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-[#001A51]">
            Alpha Center
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#001A51] hover:bg-white/50 rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-[#001A51] border border-gray-200 rounded-full hover:border-[#001A51] transition-all"
            >
              Contact
            </Link>
            <Link
              to="/inscription"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#FA5614] rounded-full hover:bg-[#D94400] shadow-md transition-all"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-16 lg:pt-20 px-4">
        {/* Social Proof - Avatars */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
          <div className="flex -space-x-3">
            {avatars.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Étudiant ${index + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-[#FA5614] border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
              +500
            </div>
          </div>
          <div className="text-sm text-gray-600 text-center sm:text-left">
            <span className="font-semibold text-[#001A51]">500+ étudiants</span>{' '}
            nous ont fait confiance
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#001A51] text-center mb-6 max-w-4xl leading-tight">
          Intègre l'école d'
          <span className="italic text-[#FA5614]">ingénieurs</span> de tes
          rêves.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-8">
          Préparation intensive aux concours ENSP, ENSTP, ENS et grandes écoles
          d'ingénieurs au Cameroun.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {features.map((feature, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm text-gray-700 border border-gray-200"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            to="/inscription"
            className="group flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[#001A51] rounded-full hover:bg-[#001A51]/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Je m'inscris maintenant
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 text-lg font-semibold text-[#001A51] bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-white hover:border-gray-300 transition-all text-center"
          >
            Voir les programmes
          </Link>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/60 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}
              >
                <span className="text-lg sm:text-xl">{stat.icon}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#001A51] mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By - Schools */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 mb-6">
            Nos anciens intègrent les meilleures écoles
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {schools.map((school, index) => (
              <span
                key={index}
                className="text-lg sm:text-xl font-bold text-gray-400 opacity-60 hover:opacity-100 transition-opacity"
              >
                {school}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
