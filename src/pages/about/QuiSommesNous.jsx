// ============================================
// QUI SOMMES-NOUS - Page histoire, mission, valeurs
// ============================================

import {
  AboutCTA,
  AboutHero,
  MethodStep,
  StatCounter,
  Timeline,
  ValueCard,
} from '@components/about';
import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import SectionTitle from '@components/common/SectionTitle';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { heroStats, history, methodology, mission } from '../../data/about';

export default function QuiSommesNous() {
  const { t } = useTranslation('about');
  const { t: ts } = useTranslation('seo');

  return (
    <>
      <SEO
        title={ts('about.title')}
        description={ts('about.description')}
        url="/a-propos/qui-sommes-nous"
      />

      {/* Hero */}
      <AboutHero
        title={t('whoWeAre.heroTitle')}
        subtitle={t('whoWeAre.heroSubtitle')}
        stats={heroStats}
      />

      {/* Mission Statement */}
      <section className="py-20 bg-white relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange/10 rounded-full text-orange text-sm font-medium mb-6">
              {t('whoWeAre.mission')}
            </div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-navy leading-relaxed">
              "{mission.statement}"
            </blockquote>
          </motion.div>
        </Container>
      </section>

      {/* Timeline */}
      <Timeline
        items={history.timeline}
        title={t('whoWeAre.journey')}
        subtitle={t('whoWeAre.journeySubtitle')}
      />

      {/* Vision */}
      <section className="py-20 bg-navy relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-[150px]" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-6">
                {t('whoWeAre.vision')}
              </div>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                {mission.vision}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-off-white">
        <Container>
          <SectionTitle
            badge={t('whoWeAre.whatDefinesUs')}
            title={t('whoWeAre.values')}
            subtitle={t('whoWeAre.valuesSubtitle')}
            align="center"
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mission.values.map((value, index) => (
              <ValueCard key={value.name} value={value} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            badge={t('whoWeAre.approach')}
            title={methodology.title}
            subtitle={methodology.subtitle}
            align="center"
          />

          <div className="mt-16 max-w-4xl mx-auto space-y-6">
            {methodology.principles.map((principle, index) => (
              <MethodStep
                key={principle.number}
                principle={principle}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-linear-to-br from-navy via-navy-900 to-navy-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[150px]" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange/20 rounded-full text-orange text-sm font-medium mb-4">
              {t('whoWeAre.keyFigures')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('whoWeAre.proofByNumbers')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter
              end="3"
              label={t('whoWeAre.stats.experience')}
              color="white"
            />
            <StatCounter
              end="421"
              suffix="+"
              label={t('whoWeAre.stats.trained')}
              color="orange"
            />
            <StatCounter
              end="85"
              suffix="%"
              label={t('whoWeAre.stats.successRate')}
              color="white"
            />
            <StatCounter
              end="12"
              label={t('whoWeAre.stats.experts')}
              color="orange"
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <AboutCTA
        title={t('whoWeAre.ctaTitle')}
        subtitle={t('whoWeAre.ctaSubtitle')}
        primaryButton={{ label: t('whoWeAre.ctaPrograms'), href: '/services' }}
        secondaryButton={{ label: t('whoWeAre.ctaTeam'), href: '/a-propos/equipe' }}
        variant="gradient"
      />
    </>
  );
}
