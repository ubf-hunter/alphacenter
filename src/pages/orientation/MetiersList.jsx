// ============================================
// METIERS LIST
// Page liste de tous les metiers
// ============================================

import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, Cog, Stethoscope, Heart } from 'lucide-react';
import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import { OrientationHero, CareerCard, FilterBar } from '@components/orientation';
import { domains } from '@/data/domains';
import { allCareers, getCareersByDomain } from '@/data/careers';

// Filtres de domaines
const domainFilters = domains.map(domain => ({
  id: domain.id,
  label: domain.shortName,
  icon: domain.icon,
  activeClass: `${domain.bgColor} ${domain.textColor} border-current`,
}));

export default function MetiersList() {
  const [searchParams] = useSearchParams();
  const initialDomain = searchParams.get('domaine');

  const [searchValue, setSearchValue] = useState('');
  const [activeFilters, setActiveFilters] = useState(
    initialDomain ? [initialDomain] : []
  );

  // Filtrer les metiers
  const filteredCareers = useMemo(() => {
    let result = allCareers;

    // Filtre par domaine
    if (activeFilters.length > 0) {
      result = result.filter(career => activeFilters.includes(career.domain));
    }

    // Filtre par recherche
    if (searchValue.trim()) {
      const search = searchValue.toLowerCase();
      result = result.filter(career =>
        career.name.toLowerCase().includes(search) ||
        career.tagline.toLowerCase().includes(search) ||
        career.description.toLowerCase().includes(search)
      );
    }

    return result;
  }, [activeFilters, searchValue]);

  return (
    <>
      <SEO
        title="Metiers - Explorer les carrieres"
        description="Decouvre les metiers d'avenir en ingenierie, medecine et sciences infirmieres. Missions, competences, salaires et perspectives de carriere."
      />

      {/* Hero */}
      <OrientationHero
        badge="Metiers"
        title="Explore les metiers d'avenir"
        subtitle="Decouvre les carrieres qui t'attendent : missions quotidiennes, competences requises, salaires et perspectives d'evolution."
        icon={Lightbulb}
        gradient="from-orange via-orange/95 to-amber-600"
      />

      {/* Content */}
      <section className="py-16 bg-gray-50/50">
        <Container>
          {/* Filter Bar */}
          <div className="mb-10">
            <FilterBar
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              filters={domainFilters}
              activeFilters={activeFilters}
              onFilterChange={setActiveFilters}
              placeholder="Rechercher un metier..."
            />
          </div>

          {/* Results count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 flex items-center justify-between"
          >
            <p className="text-gray-600">
              <span className="font-semibold text-navy">{filteredCareers.length}</span> metier{filteredCareers.length > 1 ? 's' : ''} trouve{filteredCareers.length > 1 ? 's' : ''}
            </p>
            {activeFilters.length > 0 && (
              <p className="text-sm text-gray-500">
                Filtres: {activeFilters.map(f => domains.find(d => d.id === f)?.name).join(', ')}
              </p>
            )}
          </motion.div>

          {/* Grid */}
          {filteredCareers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredCareers.map((career, index) => (
                <CareerCard key={career.id} career={career} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Aucun metier trouve</h3>
              <p className="text-gray-600 mb-6">
                Essaie de modifier tes filtres ou ta recherche
              </p>
              <button
                onClick={() => {
                  setSearchValue('');
                  setActiveFilters([]);
                }}
                className="text-orange font-semibold hover:underline"
              >
                Reinitialiser les filtres
              </button>
            </motion.div>
          )}
        </Container>
      </section>
    </>
  );
}
