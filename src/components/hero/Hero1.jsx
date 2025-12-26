// ============================================
// HERO 1 : Image de fond full + Overlay gradient
// Style : Sunrock, Green Power
// ============================================

import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import csao291 from '../../assets/images/misc/csao4.jpg';

export default function Hero1() {
  const stats = [
    { number: '500+', label: 'Étudiants admis' },
    { number: '95%', label: 'Taux de réussite' },
    { number: '15+', label: "Années d'expérience" },
    { number: '50+', label: 'Enseignants experts' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 blur-[1.5px] mask-alpha mask-b-from-black mask-b-from-80% mask-b-to-transparent">
        <img
          src={csao291}
          alt="Étudiants"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-off-white/30 via-off-white/60 to-off-white" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <div className="mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/50 shadow-sm inline-flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center">
            <Trophy size={14} className="text-orange" />
          </span>
          <span className="text-sm font-medium text-gray-700">
            +500 admis depuis 2009
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 max-w-4xl leading-tight">
          Intègre l'école d'
          <span
            className="italic text-orange"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            ingénieurs
          </span>{' '}
          de tes rêves.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          Préparation intensive aux concours ENSP, ENSTP, ENS et grandes écoles
          d'ingénieurs au Cameroun et à l'étranger.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            to="/inscription"
            className="px-8 py-4 text-lg font-semibold text-white bg-orange rounded-full hover:bg-orange-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            Je m'inscris →
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 text-lg font-semibold text-navy bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-white hover:border-gray-300 transition-all"
          >
            Découvrir nos programmes
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-0 px-6 md:px-8 py-6 bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`px-4 sm:px-6 md:px-10 py-2 text-center ${
                index !== stats.length - 1 ? 'md:border-r border-gray-200' : ''
              }`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
