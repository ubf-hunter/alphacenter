// ============================================
// HERO 2 : Split Layout (Texte gauche, Image droite)
// Style : Westfield, Hollara
// ============================================

import { Link } from 'react-router-dom';
import { useInscriptionModal } from '../../hooks/useInscriptionModal';

export default function Hero2() {
  const { openModal } = useInscriptionModal();

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Programmes', href: '/services' },
    { label: 'Orientation', href: '/orientation' },
    { label: 'À propos', href: '/resultats' },
  ];

  const miniStats = [
    { number: '95%', label: 'Réussite' },
    { number: '50+', label: 'Professeurs' },
    { number: '15', label: "Ans d'expérience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      {/* Navbar */}
      <nav className="flex justify-center pt-6 px-4">
        <div className="flex items-center gap-6 lg:gap-8 px-6 lg:px-8 py-3 lg:py-4 bg-white/80 backdrop-blur-xl rounded-full border border-gray-100 shadow-lg">
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
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#001A51] hover:bg-gray-50 rounded-full transition-all"
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
            <button onClick={() => openModal()} className="px-5 py-2 text-sm font-semibold text-white bg-[#FA5614] rounded-full hover:bg-[#D94400] shadow-md transition-all cursor-pointer">S'inscrire
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 lg:pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-100 rounded-full">
              <span className="text-[#FA5614] font-semibold text-sm">
                🏆 +500 admis depuis 2009
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001A51] mb-6 leading-tight">
              Intègre l'école d'
              <span className="italic text-[#FA5614]">ingénieurs</span> de tes
              rêves.
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Préparation intensive aux concours ENSP, ENSTP, ENS et grandes
              écoles d'ingénieurs au Cameroun et à l'étranger.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => openModal()} className="px-8 py-4 text-lg font-semibold text-white bg-[#FA5614] rounded-full hover:bg-[#D94400] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">Je m'inscris →
              </button>
              <Link
                to="/services"
                className="px-8 py-4 text-lg font-semibold text-[#001A51] border-2 border-gray-200 rounded-full hover:border-[#001A51] transition-all"
              >
                Voir les programmes
              </Link>
            </div>

            {/* Mini Stats */}
            <div className="flex gap-8">
              {miniStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#001A51]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                alt="Étudiants qui étudient"
                className="w-full h-[450px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Floating Card - Top Left */}
            <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 px-4 lg:px-5 py-3 lg:py-4 bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-xl lg:text-2xl">🎓</span>
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-[#001A51]">
                    500+
                  </div>
                  <div className="text-xs lg:text-sm text-gray-500">Admis</div>
                </div>
              </div>
            </div>

            {/* Floating Card - Bottom Right */}
            <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 px-4 lg:px-5 py-3 lg:py-4 bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xl lg:text-2xl">📈</span>
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-green-600">
                    95%
                  </div>
                  <div className="text-xs lg:text-sm text-gray-500">
                    Réussite
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-orange-200/40 to-blue-200/40 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
