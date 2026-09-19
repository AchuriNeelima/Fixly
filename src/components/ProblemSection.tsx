import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../hooks';

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const reducedMotion = useReducedMotion();

  const cards = [
    { num: '01', title: 'What happened?', desc: "Something stopped working, but the reason isn't obvious." },
    { num: '02', title: 'What will it cost?', desc: 'Repair prices vary, and getting context often requires contacting someone first.' },
    { num: '03', title: 'Should I repair it?', desc: 'Replacing a device can feel easier—but it may not be the right decision.' },
  ];

  return (
    <section id="problem" className="bg-fixly-dark text-fixly-text-on-dark" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex items-center gap-4">
          <span className="section-number-dark font-mono text-fixly-accent-light text-sm">01</span>
          <span className="eyebrow-dark text-sm font-semibold tracking-wider uppercase text-fixly-text-on-dark-secondary">THE PROBLEM</span>
        </div>
        
        <motion.h2 
          className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mt-4 max-w-2xl text-white"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          A broken device creates three questions.
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, idx) => (
            <motion.div 
              key={card.num}
              className="bg-fixly-dark-card border border-fixly-dark-border rounded-xl p-8 hover:border-fixly-dark-border-hover transition-all duration-300 hover:-translate-y-1 cursor-default"
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.2 + idx * 0.1 }}
            >
              <div className="font-mono text-fixly-accent-light text-sm">{card.num}</div>
              <h3 className="text-xl font-semibold text-white mt-4">{card.title}</h3>
              <p className="text-fixly-text-on-dark-secondary mt-3 text-base leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: reducedMotion ? 0 : 0.65 }}
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-fixly-accent to-transparent" />
          <span className="mt-5 font-mono text-2xl font-medium tracking-[0.38em] text-fixly-accent-light">FIXLY</span>
          <div className="mt-4 flex flex-wrap justify-center gap-x-3 text-sm font-medium text-fixly-text-on-dark-secondary">
            {['Understand', 'Compare', 'Decide'].map((word, index) => (
              <motion.span
                key={word}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: reducedMotion ? 0 : 0.82 + index * 0.1 }}
              >
                {word}{index < 2 && <span className="ml-3 text-fixly-accent-light">→</span>}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-14 flex flex-col items-center justify-center"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: reducedMotion ? 0 : 1 }}
        >
          <p className="text-xl lg:text-2xl text-fixly-text-on-dark-secondary text-center">
            The problem isn't finding a repair shop.
          </p>
          <p className="text-xl lg:text-2xl text-white font-semibold text-center mt-2">
            It's knowing what to do before you call one.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
