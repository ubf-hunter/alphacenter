// ============================================
// COMPARISON CHART - Graphique comparaison Alpha vs National
// ============================================

import Container from '@components/common/Container';
import { motion, useInView } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { useRef } from 'react';

export default function ComparisonChart({ comparison }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange/10 rounded-full blur-[150px]" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange/20 rounded-full text-orange text-sm font-medium mb-4">
              <TrendingUp size={16} />
              {comparison.multiplier}x plus de chances de reussir
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Alpha Center vs Moyenne Nationale
            </h2>
            <p className="text-white/60">{comparison.message}</p>
          </motion.div>

          {/* Bars comparison */}
          <div className="space-y-8">
            {/* Alpha Center */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Alpha Center</span>
                <span className="text-orange font-bold text-xl">
                  {comparison.alphaCenter}%
                </span>
              </div>
              <div className="h-12 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${comparison.alphaCenter}%` } : {}}
                  transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                  className="h-full bg-linear-to-r from-orange to-orange-500 rounded-full flex items-center justify-end pr-4"
                >
                  <span className="text-white text-sm font-bold">
                    {comparison.alphaCenter}%
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* National Average */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 font-medium">
                  Moyenne Nationale
                </span>
                <span className="text-white/60 font-bold text-xl">
                  {comparison.nationalAverage}%
                </span>
              </div>
              <div className="h-12 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${comparison.nationalAverage}%` } : {}}
                  transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                  className="h-full bg-white/30 rounded-full flex items-center justify-end pr-4"
                >
                  <span className="text-white/80 text-sm font-bold">
                    {comparison.nationalAverage}%
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Visual comparison indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="text-6xl font-black text-orange">
                {comparison.multiplier}x
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">
                  Plus de chances
                </div>
                <div className="text-white/60 text-sm">
                  de reussir avec Alpha Center
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
