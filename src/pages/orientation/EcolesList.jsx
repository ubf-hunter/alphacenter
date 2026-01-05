// ============================================
// ECOLES LIST
// Page liste de toutes les ecoles
// ============================================

import { domains } from '@/data/domains';
import { allSchools, cameroonSchools, foreignSchools } from '@/data/schools';
import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import {
  FilterBar,
  OrientationHero,
  SchoolCard,
} from '@components/orientation';
import { motion } from 'framer-motion';
import { Building2, Globe, MapPin } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Filtres par type
const typeFilters = [
  {
    id: 'local',
    label: 'Cameroun',
    icon: MapPin,
    activeClass: 'bg-orange text-white border-transparent',
  },
  {
    id: 'foreign',
    label: 'Etranger',
    icon: Globe,
    activeClass: 'bg-blue-500 text-white border-transparent',
  },
];

// Filtres par domaine
const domainFilters = domains.map((domain) => ({
  id: domain.id,
  label: domain.shortName,
  icon: domain.icon,
  activeClass: `${domain.bgColor} ${domain.textColor} border-current`,
}));

export default function EcolesList() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type');
  const initialDomain = searchParams.get('domaine');

  const [searchValue, setSearchValue] = useState('');
  const [typeFilter, setTypeFilter] = useState(
    initialType ? [initialType] : []
  );
  const [domainFilter, setDomainFilter] = useState(
    initialDomain ? [initialDomain] : []
  );

  // Filtrer les ecoles
  const filteredSchools = useMemo(() => {
    let result = allSchools;

    // Filtre par type
    if (typeFilter.length > 0) {
      result = result.filter((school) => typeFilter.includes(school.type));
    }

    // Filtre par domaine
    if (domainFilter.length > 0) {
      result = result.filter((school) =>
        school.domains.some((d) => domainFilter.includes(d))
      );
    }

    // Filtre par recherche
    if (searchValue.trim()) {
      const search = searchValue.toLowerCase();
      result = result.filter(
        (school) =>
          school.name.toLowerCase().includes(search) ||
          school.shortName.toLowerCase().includes(search) ||
          school.city.toLowerCase().includes(search) ||
          school.country.toLowerCase().includes(search)
      );
    }

    return result;
  }, [typeFilter, domainFilter, searchValue]);

  // Stats
  const localCount = filteredSchools.filter((s) => s.type === 'local').length;
  const foreignCount = filteredSchools.filter(
    (s) => s.type === 'foreign'
  ).length;

  return (
    <>
      <SEO
        title="Ecoles - Guide des etablissements"
        description="Explore les ecoles et universites au Cameroun et a l'etranger. Conditions d'admission, programmes, frais et classements."
      />

      {/* Hero */}
      <OrientationHero
        badge="Ecoles"
        title="Trouve  "
        highlightText="ton école"
        subtitle="Decouvre les meilleures ecoles et universites au Cameroun et a l'etranger. Admission, programmes, frais - tout ce qu'il faut savoir."
        icon={Building2}
        gradient="from-navy via-navy/95 to-blue-900"
      >
        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl">
            <MapPin size={18} className="text-orange" />
            <span className="text-white font-semibold">
              {cameroonSchools.length}
            </span>
            <span className="text-white/70 text-sm">au Cameroun</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl">
            <Globe size={18} className="text-blue-400" />
            <span className="text-white font-semibold">
              {foreignSchools.length}
            </span>
            <span className="text-white/70 text-sm">a l'etranger</span>
          </div>
        </div>
      </OrientationHero>

      {/* Content */}
      <section className="py-16 bg-gray-50/50">
        <Container>
          {/* Filters */}
          <div className="space-y-4 mb-10">
            {/* Search + Type */}
            <FilterBar
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              filters={typeFilters}
              activeFilters={typeFilter}
              onFilterChange={setTypeFilter}
              placeholder="Rechercher une ecole, ville, pays..."
            />

            {/* Domain filters */}
            <div className="flex flex-wrap items-center gap-2 px-4">
              <span className="text-sm text-gray-500 mr-2">Par domaine:</span>
              {domainFilters.map((filter) => {
                const isActive = domainFilter.includes(filter.id);
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => {
                      if (isActive) {
                        setDomainFilter(
                          domainFilter.filter((f) => f !== filter.id)
                        );
                      } else {
                        setDomainFilter([...domainFilter, filter.id]);
                      }
                    }}
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
                      transition-all duration-300 border
                      ${
                        isActive
                          ? filter.activeClass
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      }
                    `}
                  >
                    <Icon size={14} />
                    <span>{filter.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 flex flex-wrap items-center justify-between gap-4"
          >
            <p className="text-gray-600">
              <span className="font-semibold text-navy">
                {filteredSchools.length}
              </span>{' '}
              ecole{filteredSchools.length > 1 ? 's' : ''} trouvee
              {filteredSchools.length > 1 ? 's' : ''}
              {localCount > 0 && foreignCount > 0 && (
                <span className="text-gray-400 ml-2">
                  ({localCount} Cameroun, {foreignCount} etranger)
                </span>
              )}
            </p>
          </motion.div>

          {/* Grid */}
          {filteredSchools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredSchools.map((school, index) => (
                <SchoolCard key={school.id} school={school} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Aucune ecole trouvee
              </h3>
              <p className="text-gray-600 mb-6">
                Essaie de modifier tes filtres ou ta recherche
              </p>
              <button
                onClick={() => {
                  setSearchValue('');
                  setTypeFilter([]);
                  setDomainFilter([]);
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
