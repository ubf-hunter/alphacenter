// ============================================
// HERO 3 : Image en bas qui monte + Cards flottantes
// Style : Afternoon, Frameblox (RECOMMANDÉ)
// ============================================

import { Link } from 'react-router-dom';
import { useInscriptionModal } from '../../hooks/useInscriptionModal';

export default function Hero3() {
  const { openModal } = useInscriptionModal();

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Programmes', href: '/services' },
    { label: 'Orientation', href: '/orientation' },
    { label: 'À propos', href: '/resultats' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-orange-50/20 overflow-hidden relative">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

      {/* Navbar */}
      <nav className="relative z-20 flex justify-center pt-6 px-4">
        <div className="flex items-center gap-6 lg:gap-8 px-6 lg:px-8 py-3 lg:py-4 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 shadow-lg">
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
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#001A51] hover:bg-white/60 rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-[#001A51] border border-gray-200 rounded-full hover:border-[#001A51] hover:bg-white/50 transition-all"
            >
              Contact
            </Link>
            <button onClick={() => openModal()} className="px-5 py-2 text-sm font-semibold text-white bg-[#FA5614] rounded-full hover:bg-[#D94400] shadow-md transition-all cursor-pointer">S'inscrire
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-16 lg:pt-20 px-4">
        {/* Badge */}
        <div className="mb-6 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
          <span className="text-sm font-medium text-gray-700">
            🏆 +500 admis depuis 2009 • 95% de réussite
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#001A51] text-center mb-6 max-w-4xl leading-tight">
          Intègre l'école d'
          <span className="italic text-[#FA5614]">ingénieurs</span> de tes
          rêves.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mb-10">
          Préparation intensive aux concours ENSP, ENSTP, ENS et grandes écoles
          d'ingénieurs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button onClick={() => openModal()} className="px-8 py-4 text-lg font-semibold text-white bg-[#FA5614] rounded-full hover:bg-[#D94400] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">Je m'inscris →
          </button>
          <Link
            to="/services"
            className="px-8 py-4 text-lg font-semibold text-[#001A51] bg-white border-2 border-gray-200 rounded-full hover:border-[#001A51] transition-all"
          >
            Découvrir nos programmes
          </Link>
        </div>

        {/* Image Container with Floating Elements */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80"
              alt="Étudiants célébrant leur diplôme"
              className="w-full h-[350px] sm:h-[400px] md:h-[450px] object-cover"
            />
            {/* Gradient Overlay Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* Floating Glass Card - Top Left */}
          <div className="absolute top-4 left-4 sm:-top-4 sm:-left-4 md:-top-6 md:-left-8 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-lg sm:text-xl lg:text-2xl">🎓</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#001A51]">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Étudiants admis
                </div>
              </div>
            </div>
          </div>

          {/* Floating Glass Card - Top Right */}
          <div className="absolute top-4 right-4 sm:-top-2 sm:-right-2 md:-top-4 md:-right-6 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-lg sm:text-xl lg:text-2xl">📈</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600">
                  95%
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  Taux de réussite
                </div>
              </div>
            </div>
          </div>

          {/* Floating Glass Card - Bottom Center */}
          <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 px-5 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="text-center px-2 sm:px-3 lg:px-4 border-r border-gray-200">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#001A51]">
                  15+
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">
                  Années
                </div>
              </div>
              <div className="text-center px-2 sm:px-3 lg:px-4 border-r border-gray-200">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#001A51]">
                  50+
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">Profs</div>
              </div>
              <div className="text-center px-2 sm:px-3 lg:px-4">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#001A51]">
                  3
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500">
                  Concours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
