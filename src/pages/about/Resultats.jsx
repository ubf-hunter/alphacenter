// ============================================
// RESULTATS - Page statistiques et success stories
// ============================================

import {
  AboutCTA,
  AboutHero,
  ComparisonChart,
  LeaderboardTable,
  SchoolDistribution,
  StatCounter,
  SuccessStoryCompact,
  SuccessStoryFull,
  YearResults,
} from '@components/about';
import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import SectionTitle from '@components/common/SectionTitle';
import { motion } from 'framer-motion';
import {
  comparison,
  globalStats,
  schoolDistribution,
  successStories,
  topRankings,
  yearlyResults,
} from '../../data/results';

export default function Resultats() {
  const featuredStories = successStories.filter((s) => s.featured);
  const otherStories = successStories.filter((s) => !s.featured);

  return (
    <>
      <SEO
        title="Nos Resultats | 85% de Reussite | Alpha Center"
        description="85% de taux de reussite aux concours ENSP, ENSTP, ENS, FMSB. Decouvrez les resultats d'Alpha Center et les success stories de nos etudiants."
        url="/a-propos/resultats"
      />

      {/* Hero */}
      <AboutHero
        title="Nos Resultats Parlent d'Eux-Memes"
        subtitle="85% de taux de reussite en 2024"
        stats={[
          {
            number: globalStats.totalTrained,
            label: 'Etudiants formes',
            suffix: '',
          },
          {
            number: globalStats.totalAdmitted,
            label: 'Admis aux concours',
            suffix: '',
          },
          {
            number: globalStats.averageSuccessRate,
            label: 'Taux moyen',
            suffix: '%',
          },
        ]}
      />

      {/* Global Stats */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-off-white rounded-2xl"
            >
              <StatCounter
                end={globalStats.totalTrained}
                label="Etudiants formes"
                color="navy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-off-white rounded-2xl"
            >
              <StatCounter
                end={globalStats.totalAdmitted}
                label="Total admis"
                color="orange"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-off-white rounded-2xl"
            >
              <StatCounter
                end={globalStats.averageSuccessRate}
                suffix="%"
                label="Taux moyen"
                color="navy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-off-white rounded-2xl"
            >
              <StatCounter
                end={globalStats.topRankings}
                label="Dans le top 15"
                color="orange"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Comparison Chart */}
      <ComparisonChart comparison={comparison} />

      {/* Year Results */}
      <YearResults results={yearlyResults} />

      {/* School Distribution */}
      <SchoolDistribution distribution={schoolDistribution} />

      {/* Featured Success Stories */}
      <section className="py-24 bg-off-white">
        <Container>
          <SectionTitle
            badge="Success Stories"
            title="Ils ont reussi avec *Alpha Center*"
            subtitle="Decouvrez les parcours inspirants de nos etudiants"
            align="center"
          />

          <div className="mt-16 space-y-8">
            {featuredStories.slice(0, 2).map((story, index) => (
              <SuccessStoryFull key={story.id} story={story} index={index} />
            ))}
          </div>

          {/* Other stories grid */}
          {otherStories.length > 0 && (
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredStories.slice(2).map((story, index) => (
                <SuccessStoryCompact
                  key={story.id}
                  story={story}
                  index={index}
                />
              ))}
              {otherStories.map((story, index) => (
                <SuccessStoryCompact
                  key={story.id}
                  story={story}
                  index={index + 2}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Leaderboard */}
      <LeaderboardTable rankings={topRankings} />

      {/* CTA */}
      <AboutCTA
        title="La prochaine success story, c'est vous"
        subtitle="Rejoignez Alpha Center et ecrivez votre propre histoire de reussite"
        primaryButton={{ label: "S'inscrire maintenant", href: '/inscription' }}
        secondaryButton={{ label: 'Parler a un conseiller', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
