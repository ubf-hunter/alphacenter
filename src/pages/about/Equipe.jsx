// ============================================
// EQUIPE - Page equipe pedagogique
// ============================================

import {
  AboutCTA,
  AboutHero,
  LeadershipCard,
  StaffCard,
  TeacherCard,
  TeamMemberModal,
} from '@components/about';
import Container from '@components/common/Container';
import SEO from '@components/common/SEO';
import SectionTitle from '@components/common/SectionTitle';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { leadership, staff, teachers, teamStats } from '../../data/team';
import { generateTeamPageSchema } from '../../utils/seo';

// Temoignages des etudiants sur les profs
const teacherTestimonials = teachers
  .filter((t) => t.testimonial)
  .map((t) => ({
    ...t.testimonial,
    teacher: t.name,
  }));

export default function Equipe() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const { t } = useTranslation('about');
  const { t: ts } = useTranslation('seo');

  // Generer le schema JSON-LD pour le SEO Google
  const allMembers = [...leadership, ...teachers];
  const teamJsonLd = generateTeamPageSchema(allMembers);

  return (
    <>
      <SEO
        title={ts('team.title')}
        description={ts('team.description')}
        url="/a-propos/equipe"
        jsonLd={teamJsonLd}
      />

      {/* Hero */}
      <AboutHero
        title={t('team.heroTitle')}
        subtitle={t('team.heroSubtitle')}
        stats={[
          { number: teamStats.totalTeachers, label: t('team.teachers'), suffix: '' },
          {
            number: teamStats.totalExperience,
            label: t('team.experienceLabel'),
            suffix: '',
          },
        ]}
      />

      {/* Direction */}
      <section className="py-24 bg-off-white">
        <Container>
          <SectionTitle
            badge={t('team.leadership')}
            title={t('team.leadershipTitle')}
            subtitle={t('team.leadershipSubtitle')}
            align="center"
          />

          {/* Hint to flip */}
          <p className="text-center text-sm text-gray-500 mt-4 mb-8">
            {t('team.clickForMore')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadership.map((member, index) => (
              <LeadershipCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Teachers */}
      <section className="py-24 bg-white">
        <Container>
          <SectionTitle
            badge={t('team.teachers')}
            title={t('team.pedagogicalTeam')}
            subtitle={t('team.pedagogicalSubtitle')}
            align="center"
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                index={index}
                onSelect={setSelectedTeacher}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Teacher Modal */}
      {selectedTeacher && (
        <TeamMemberModal
          member={selectedTeacher}
          onClose={() => setSelectedTeacher(null)}
        />
      )}

      {/* Testimonials about teachers */}
      <section className="py-24 bg-navy relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-apricot/10 rounded-full blur-[150px]" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-4">
              {t('team.testimonials')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('team.testimonialTitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teacherTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
              >
                <Quote size={24} className="text-orange/50 mb-4" />
                <p className="text-white/90 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-white/60">
                      {testimonial.school}
                    </div>
                  </div>
                  <div className="text-xs text-orange">
                    {t('team.aboutTeacher')} {testimonial.teacher}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Administrative Staff */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-navy mb-2">
              {t('team.adminTeam')}
            </h2>
            <p className="text-gray-600">
              {t('team.adminSubtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {staff.map((member, index) => (
              <StaffCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <AboutCTA
        title={t('team.joinUs')}
        subtitle={t('team.joinSubtitle')}
        primaryButton={{ label: t('team.contactUs'), href: '/contact' }}
        secondaryButton={{ label: t('team.viewResults'), href: '/a-propos/resultats' }}
        variant="navy"
      />
    </>
  );
}
