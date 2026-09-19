import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Layers, TrendingUp } from 'lucide-react';
import { useReducedMotion } from '../hooks';

export default function InvestorPitch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const reducedMotion = useReducedMotion();

  const cards = [
    { icon: Target, title: 'Clear user pain', desc: 'People need context before spending money on repairs or replacements.' },
    { icon: Layers, title: 'Small MVP', desc: 'The first version focuses on one simple workflow:', extra: 'Understand → Compare → Decide' },
    { icon: TrendingUp, title: 'Expansion potential', desc: 'The same decision layer can eventually connect guidance, repair estimates, warranties, and trusted repair providers.' },
  ];

  return (
    <section className="bg-fixly-light" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex items-center gap-4">
          <span className="section-number font-mono text-fixly-accent text-sm">06</span>
          <span className="eyebrow text-sm font-semibold tracking-wider uppercase text-fixly-text-secondary">THE CASE</span>
        </div>
        
        {/* Part 1: Why fund the pilot? */}
        <motion.h2 
          className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mt-4 text-fixly-text-primary"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why fund the pilot?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div 
                key={idx}
                className="p-8 rounded-xl border border-fixly-light-border bg-white flex flex-col"
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.2 + idx * 0.15 }}
              >
                <Icon className="w-8 h-8 text-fixly-accent" />
                <h3 className="text-lg font-semibold mt-4 text-fixly-text-primary">{card.title}</h3>
                <p className="text-fixly-text-secondary mt-2 text-base leading-relaxed">{card.desc}</p>
                {card.extra && (
                  <p className="font-mono text-sm text-fixly-accent mt-2">{card.extra}</p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Part 2: Funding Choice */}
        <motion.div 
          className="mt-24 max-w-3xl mx-auto text-center"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: reducedMotion ? 0 : 0.7 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-fixly-text-primary">
            We don't start by becoming another repair marketplace.
          </h3>
          <p className="mt-6 text-lg text-fixly-text-secondary">
            We start with the decision people struggle with before they ever contact a repair shop:
          </p>
          
          <motion.div 
            className="mt-8 lg:border-l-4 lg:border-fixly-accent lg:pl-6 text-center lg:text-left mx-auto w-fit max-w-2xl"
            initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.9 }}
          >
            <blockquote className="text-2xl lg:text-3xl xl:text-4xl font-bold text-fixly-text-primary italic relative">
              "Should I repair this or replace it?"
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
