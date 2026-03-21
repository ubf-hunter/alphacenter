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
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('about');
  const { t: ts } = useTranslation('seo');

  return (
    <>
      <SEO
        title={ts('results.title')}
        description={ts('results.description')}
        url="/a-propos/resultats"
      />

      {/* Hero */}
      <AboutHero
        title={t('results.heroTitle')}
        subtitle={t('results.heroSubtitle')}
        stats={[
          {
            number: globalStats.totalTrained,
            label: t('results.trainedStudents'),
            suffix: '',
          },
          {
            number: globalStats.totalAdmitted,
            label: t('results.admittedStudents'),
            suffix: '',
          },
          {
            number: globalStats.averageSuccessRate,
            label: t('results.averageRateLabel'),
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
                label={t('results.trainedStudents')}
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
                label={t('results.totalAdmitted')}
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
                label={t('results.averageRate')}
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
                label={t('results.top15')}
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
            badge={t('results.successStories')}
            title={t('results.storiesTitle')}
            subtitle={t('results.storiesSubtitle')}
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
        title={t('results.nextStoryTitle')}
        subtitle={t('results.nextStorySubtitle')}
        primaryButton={{ label: t('results.registerNow'), isModal: true }}
        secondaryButton={{ label: t('results.talkToAdviser'), href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
