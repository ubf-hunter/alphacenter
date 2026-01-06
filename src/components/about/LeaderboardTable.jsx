// ============================================
// LEADERBOARD TABLE - Tableau d'honneur
// ============================================

import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { motion } from 'framer-motion';
import { Award, Medal, Trophy } from 'lucide-react';

function RankBadge({ rank }) {
  // Extract number from rank string like "1er", "2eme", "3eme"
  const rankNumber = parseInt(rank);

  if (rankNumber === 1) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/30">
        <Trophy size={20} className="text-yellow-800" />
      </div>
    );
  }

  if (rankNumber === 2) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 shadow-lg shadow-gray-300/30">
        <Medal size={20} className="text-gray-600" />
      </div>
    );
  }

  if (rankNumber === 3) {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-300 shadow-lg shadow-orange-300/30">
        <Medal size={20} className="text-orange-700" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy/10">
      <span className="text-navy font-bold">{rank}</span>
    </div>
  );
}

export default function LeaderboardTable({ rankings }) {
  return (
    <section className="py-20 bg-off-white">
      <Container>
        <SectionTitle
          badge="Tableau d'honneur"
          title="Nos meilleurs *classements*"
          subtitle="Les etudiants Alpha Center dans le top des concours"
          align="center"
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-navy text-white text-sm font-medium">
              <div className="col-span-1">Rang</div>
              <div className="col-span-5">Nom</div>
              <div className="col-span-3">Ecole</div>
              <div className="col-span-3 text-right">Annee</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-100">
              {rankings.map((student, index) => (
                <motion.div
                  key={`${student.name}-${student.year}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors"
                >
                  {/* Rank */}
                  <div className="col-span-1">
                    <RankBadge rank={student.rank} />
                  </div>

                  {/* Name */}
                  <div className="col-span-5">
                    <span className="font-semibold text-navy">
                      {student.name}
                    </span>
                  </div>

                  {/* School */}
                  <div className="col-span-3">
                    <span className="inline-flex px-3 py-1 bg-orange/10 text-orange rounded-full text-sm font-medium">
                      {student.school}
                    </span>
                  </div>

                  {/* Year */}
                  <div className="col-span-3 text-right">
                    <span className="text-gray-500">{student.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <Trophy size={18} className="text-yellow-500" />
              <span className="text-sm text-gray-600">
                <span className="font-bold text-navy">
                  {rankings.filter((r) => r.rank === '1er').length}
                </span>{' '}
                premiers
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <Award size={18} className="text-orange" />
              <span className="text-sm text-gray-600">
                <span className="font-bold text-navy">{rankings.length}</span>{' '}
                dans le top 15
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
