import Card from '@components/common/Card';
import Container from '@components/common/Container';
import { motion, useInView } from 'framer-motion';
import { Calendar, GraduationCap, Trophy, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function useCountUp(
  end,
  duration = 2000,
  startOnView = false,
  isInView = true,
) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (hasAnimated.current) return;

    hasAnimated.current = true;
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, startOnView, isInView]);

  return count;
}

function StatCard({
  icon: Icon,
  number,
  suffix = '',
  label,
  sublabel,
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const count = useCountUp(number, 2000, true, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card variant="glass" className="p-8 text-center h-full">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 text-orange mb-4">
          <Icon size={28} />
        </div>
        <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
          {count}
          {suffix}
        </div>
        <div className="text-navy font-semibold mb-1">{label}</div>
        <div className="text-sm text-gray-500">{sublabel}</div>
      </Card>
    </motion.div>
  );
}

const stats = [
  {
    icon: Users,
    number: 680,
    suffix: '+',
    label: 'Étudiants admis',
    sublabel: 'depuis 2022',
  },
  {
    icon: Trophy,
    number: 85,
    suffix: '%',
    label: 'Taux de réussite',
    sublabel: 'aux concours',
  },
  {
    icon: Calendar,
    number: 3,
    suffix: '+',
    label: "Années d'expérience",
    sublabel: "d'excellence",
  },
  {
    icon: GraduationCap,
    number: 10,
    suffix: '+',
    label: 'Enseignants experts',
    sublabel: 'et passionnés',
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-apricot-light rounded-full opacity-30 blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} delay={index * 0.1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
