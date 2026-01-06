// ============================================
// SCHOOL DISTRIBUTION - Graphique repartition ecoles
// ============================================

import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SchoolDistribution({ distribution }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Calculate total for percentage verification
  const total = distribution.reduce((sum, s) => sum + s.count, 0);

  return (
    <section ref={ref} className="py-20 bg-white">
      <Container>
        <SectionTitle
          badge="Repartition"
          title="Nos admis par *ecole*"
          subtitle="Repartition de nos etudiants admis par etablissement"
          align="center"
        />

        <div className="mt-12 max-w-4xl mx-auto">
          {/* Donut chart visualization */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* SVG Donut Chart */}
            <div className="relative w-64 h-64 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {distribution.map((school, index) => {
                  const previousPercentages = distribution
                    .slice(0, index)
                    .reduce((sum, s) => sum + s.percentage, 0);
                  const circumference = 2 * Math.PI * 40;
                  const strokeDasharray = `${
                    (school.percentage / 100) * circumference
                  } ${circumference}`;
                  const strokeDashoffset = `${
                    -(previousPercentages / 100) * circumference
                  }`;

                  return (
                    <motion.circle
                      key={school.school}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={school.color}
                      strokeWidth="20"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  );
                })}
              </svg>

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-4xl font-bold text-navy">{total}</div>
                  <div className="text-sm text-gray-500">Total admis</div>
                </motion.div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-4">
              {distribution.map((school, index) => (
                <motion.div
                  key={school.school}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  {/* Color indicator */}
                  <div
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ backgroundColor: school.color }}
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-navy">
                        {school.school}
                      </span>
                      <span className="font-bold text-navy">
                        {school.count}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${school.percentage}%` } : {}}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: school.color }}
                      />
                    </div>
                  </div>

                  {/* Percentage */}
                  <span className="text-sm text-gray-500 w-12 text-right">
                    {school.percentage}%
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
