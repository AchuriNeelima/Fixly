import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../hooks';

export default function WhyNow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const reducedMotion = useReducedMotion();

  const principles = ['Understand.', 'Compare.', 'Decide.'];

  return (
    <section id="why-now" className="bg-fixly-dark text-fixly-text-on-dark" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex items-center gap-4">
          <span className="section-number-dark font-mono text-fixly-accent-light text-sm">04</span>
          <span className="eyebrow-dark text-sm font-semibold tracking-wider uppercase text-fixly-text-on-dark-secondary">THE OPPORTUNITY</span>
        </div>
        
        <motion.h2 
          className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mt-4 text-white"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          The decision comes before the repair.
        </motion.h2>

        <motion.p 
          className="mt-8 max-w-2xl text-lg text-fixly-text-on-dark-secondary leading-relaxed"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.2 }}
        >
          Products are expensive. Repair information is fragmented. And consumers often have to make a replacement decision before they have enough context.
        </motion.p>

        <div className="mt-16">
          <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight flex flex-wrap gap-x-3 gap-y-2">
            {principles.map((word, idx) => (
              <motion.span
                key={idx}
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.4 + idx * 0.12 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h3>

          <motion.p 
            className="mt-7 text-xl lg:text-2xl text-fixly-accent-light font-medium"
            initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.9 }}
          >
            What should I do next?
          </motion.p>
        </div>
      </div>
    </section>
  );
}
