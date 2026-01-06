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
import { heroStats, history, methodology, mission } from '../../data/about';

export default function QuiSommesNous() {
  return (
    <>
      <SEO
        title="Qui sommes-nous | Alpha Center - Centre de Preparation aux Concours"
        description="Decouvrez l'histoire d'Alpha Center, notre mission et nos valeurs. Depuis 2018, nous accompagnons les etudiants camerounais vers la reussite aux concours."
        url="/a-propos/qui-sommes-nous"
      />

      {/* Hero */}
      <AboutHero
        title="Notre Histoire, Votre Reussite"
        subtitle="Depuis 2018, nous accompagnons les etudiants camerounais vers l'excellence"
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
              Notre mission
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
        title="Notre *parcours*"
        subtitle="7 annees de croissance et d'excellence au service des etudiants camerounais"
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
                Notre vision
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
            badge="Ce qui nous definit"
            title="Nos *valeurs*"
            subtitle="Les principes qui guident chacune de nos actions"
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
            badge="Notre approche"
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
              Chiffres cles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              La preuve par les chiffres
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter
              end="7"
              label="Annees d'experience"
              color="white"
            />
            <StatCounter
              end="800"
              suffix="+"
              label="Etudiants formes"
              color="orange"
            />
            <StatCounter
              end="85"
              suffix="%"
              label="Taux de reussite"
              color="white"
            />
            <StatCounter
              end="12"
              label="Enseignants experts"
              color="orange"
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <AboutCTA
        title="Rejoignez la famille Alpha Center"
        subtitle="Decouvrez nos programmes et rencontrez notre equipe"
        primaryButton={{ label: 'Decouvrir nos programmes', href: '/services' }}
        secondaryButton={{ label: "Rencontrer l'equipe", href: '/a-propos/equipe' }}
        variant="gradient"
      />
    </>
  );
}
