// ============================================
// YEAR RESULTS - Resultats d'une annee avec tabs
// ============================================

import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

function YearTab({ year, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-xl font-medium
        transition-all duration-300
        ${
          isActive
            ? 'bg-orange text-white shadow-lg shadow-orange/30'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }
      `}
    >
      {year.year}
      {year.highlight && isActive && (
        <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-navy text-white text-xs rounded-full">
          {year.highlight}
        </span>
      )}
    </button>
  );
}

function YearContent({ year }) {
  const schools = Object.entries(year.bySchool || {});

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mt-8"
    >
      {/* Stats overview */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-6 bg-white rounded-2xl shadow-sm text-center">
          <Users className="w-8 h-8 text-navy mx-auto mb-2" />
          <div className="text-3xl font-bold text-navy">{year.trained}</div>
          <div className="text-sm text-gray-500">Etudiants formes</div>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm text-center">
          <Award className="w-8 h-8 text-orange mx-auto mb-2" />
          <div className="text-3xl font-bold text-orange">{year.admitted}</div>
          <div className="text-sm text-gray-500">Admis</div>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm text-center">
          <TrendingUp className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
          <div className="text-3xl font-bold text-emerald-500">
            {year.successRate}%
          </div>
          <div className="text-sm text-gray-500">Taux de reussite</div>
        </div>
      </div>

      {/* Results by school */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {schools.map(([school, data]) => (
          <div
            key={school}
            className="p-4 bg-white rounded-xl border border-gray-100 flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-navy">{school}</div>
              {data.topRanking && (
                <div className="text-xs text-orange">{data.topRanking}</div>
              )}
            </div>
            <div className="text-2xl font-bold text-navy">{data.admitted}</div>
          </div>
        ))}
      </div>

      {/* Mentions */}
      {year.mentions && year.mentions.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
            <Award size={18} className="text-orange" />
            Mentions speciales
          </h4>
          <div className="flex flex-wrap gap-3">
            {year.mentions.map((mention, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full"
              >
                <span className="font-bold text-orange">{mention.rank}</span>
                <span className="text-navy font-medium">{mention.name}</span>
                <span className="text-gray-500 text-sm">
                  ({mention.school})
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function YearResults({ results }) {
  const [activeYear, setActiveYear] = useState(results[0]?.year);

  const activeData = results.find((r) => r.year === activeYear);

  return (
    <section className="py-20 bg-off-white">
      <Container>
        <SectionTitle
          badge="Annee par annee"
          title="Resultats *detailles*"
          subtitle="Explorez nos performances annee par annee"
          align="center"
        />

        {/* Year tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {results.map((year) => (
            <YearTab
              key={year.year}
              year={year}
              isActive={activeYear === year.year}
              onClick={() => setActiveYear(year.year)}
            />
          ))}
        </div>

        {/* Year content */}
        <AnimatePresence mode="wait">
          {activeData && <YearContent key={activeYear} year={activeData} />}
        </AnimatePresence>
      </Container>
    </section>
  );
}
