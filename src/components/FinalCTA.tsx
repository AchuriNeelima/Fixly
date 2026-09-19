import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../hooks';

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reducedMotion = useReducedMotion();

  const animate = (_delay: number) =>
    reducedMotion
      ? { opacity: 1, y: 0 }
      : isInView
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: 30 };

  const transition = (delay: number) => ({
    duration: 0.6,
    delay: reducedMotion ? 0 : delay,
    ease: 'easeOut' as const,
  });

  const handleScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative bg-fixly-dark text-fixly-text-on-dark overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(13,147,115,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-40 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={animate(0)}
          transition={transition(0)}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="section-number-dark">07</span>
          <span className="eyebrow-dark">THE ASK</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={animate(0.1)}
          transition={transition(0.1)}
          className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
        >
          Don&rsquo;t replace it blindly.
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={animate(0.2)}
          transition={transition(0.2)}
          className="text-lg lg:text-xl text-fixly-text-on-dark-secondary mt-6 max-w-lg mx-auto leading-relaxed"
        >
          Give people a clearer first step before they spend.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={animate(0.4)}
          transition={transition(0.4)}
          className="flex justify-center flex-wrap gap-4 mt-10"
        >
          <a
            href="#demo"
            onClick={(e) => handleScroll(e, '#demo')}
            className="group inline-flex items-center gap-2 bg-fixly-accent text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-fixly-accent-light transition-colors"
          >
            Back the Fixly pilot
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#demo"
            onClick={(e) => handleScroll(e, '#demo')}
            className="inline-flex items-center border border-fixly-dark-border text-fixly-text-on-dark px-8 py-4 rounded-xl text-base font-medium hover:border-fixly-dark-border-hover hover:bg-white/5 transition-all"
          >
            Try the demo
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={animate(0.6)}
          transition={transition(0.6)}
          className="text-sm text-fixly-text-on-dark-secondary font-mono tracking-wide mt-12"
        >
          One problem. One workflow. One useful decision.
        </motion.p>
      </div>
    </section>
  );
}
