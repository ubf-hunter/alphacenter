// ============================================
// STAT COUNTER - Compteur anime pour statistiques
// ============================================

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function StatCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2,
  label,
  description,
  color = 'orange',
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endValue = parseInt(end);

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);

      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  const colorStyles = {
    orange: 'text-orange',
    navy: 'text-navy',
    white: 'text-white',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className={`text-5xl md:text-6xl font-black ${colorStyles[color]}`}>
        {prefix}
        {count}
        {suffix}
      </div>
      {label && (
        <div className="text-lg font-semibold text-navy mt-2">{label}</div>
      )}
      {description && (
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      )}
    </motion.div>
  );
}
