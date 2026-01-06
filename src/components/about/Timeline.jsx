// ============================================
// TIMELINE - Timeline verticale interactive
// ============================================

import Container from '@components/common/Container';
import SectionTitle from '@components/common/SectionTitle';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

function TimelineItem({ item, index, isLast }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">
      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute left-1/2 top-16 bottom-0 w-0.5 bg-linear-to-b from-orange/50 to-navy/30 -translate-x-1/2" />
      )}

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
          isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {/* Content Card */}
        <div className="flex-1 w-full">
          <div
            className={`
            group relative p-6 lg:p-8
            bg-white rounded-2xl
            border border-gray-100
            shadow-sm hover:shadow-xl
            transition-all duration-300
            ${isLeft ? 'md:text-right' : 'md:text-left'}
          `}
          >
            {/* Year badge */}
            <div
              className={`
              inline-flex items-center gap-2 px-4 py-1.5
              bg-orange/10 text-orange
              rounded-full text-sm font-semibold mb-4
            `}
            >
              <Calendar size={14} />
              {item.year}
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-navy mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4">{item.description}</p>

            {/* Highlight */}
            {item.highlight && (
              <div
                className={`
                inline-block px-4 py-2
                bg-navy/5 rounded-lg
                text-sm font-medium text-navy
              `}
              >
                {item.highlight}
              </div>
            )}
          </div>
        </div>

        {/* Center dot */}
        <div className="hidden md:flex items-center justify-center w-16 h-16 flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
            className="w-5 h-5 rounded-full bg-orange border-4 border-white shadow-lg"
          />
        </div>

        {/* Empty space for alternating layout */}
        <div className="flex-1 hidden md:block" />
      </motion.div>
    </div>
  );
}

export default function Timeline({ items, title, subtitle }) {
  return (
    <section className="py-24 bg-off-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-orange/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-navy/5 rounded-full blur-[100px]" />

      <Container>
        {title && (
          <SectionTitle
            badge="Notre parcours"
            title={title}
            subtitle={subtitle}
            align="center"
          />
        )}

        <div className="mt-16 space-y-8 md:space-y-0">
          {items.map((item, index) => (
            <TimelineItem
              key={item.year}
              item={item}
              index={index}
              isLast={index === items.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
