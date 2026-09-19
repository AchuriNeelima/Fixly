import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Search, Scale } from 'lucide-react';
import { useReducedMotion } from '../hooks';

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const reducedMotion = useReducedMotion();

  const steps = [
    { num: '01', icon: MessageSquare, title: 'Describe', desc: 'Tell Fixly what happened.' },
    { num: '02', icon: Search, title: 'Understand', desc: 'Explore possible causes and what to check next.' },
    { num: '03', icon: Scale, title: 'Compare', desc: 'Think through repair versus replacement.' },
  ];

  return (
    <section id="how-it-works" className="bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex items-center gap-4">
          <span className="section-number font-mono text-fixly-accent text-sm">02</span>
          <span className="eyebrow text-sm font-semibold tracking-wider uppercase text-fixly-text-secondary">THE SOLUTION</span>
        </div>
        
        <motion.h2 
          className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mt-4 max-w-3xl text-fixly-text-primary"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Meet Fixly — a clearer first step before you spend.
        </motion.h2>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-fixly-light-border z-0 pointer-events-none overflow-hidden">
            <motion.div className="h-full bg-fixly-accent origin-left" initial={{ scaleX: 0 }} animate={isInView || reducedMotion ? { scaleX: 1 } : {}} transition={{ duration: 1.25, delay: reducedMotion ? 0 : 0.35, ease: 'easeInOut' }} />
          </div>
          <div className="lg:hidden absolute top-[10%] bottom-[10%] left-[50px] w-0.5 bg-fixly-light-border z-0 pointer-events-none overflow-hidden">
            <motion.div className="w-full bg-fixly-accent origin-top" initial={{ scaleY: 0 }} animate={isInView || reducedMotion ? { scaleY: 1 } : {}} transition={{ duration: 1.1, delay: reducedMotion ? 0 : 0.25, ease: 'easeInOut' }} />
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.num}
                className="relative z-10 p-8 rounded-xl border border-fixly-light-border bg-fixly-light flex flex-col"
                initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.2 + idx * 0.3 }}
              >
                <div className="font-mono text-sm text-fixly-accent font-medium">{step.num}</div>
                <Icon className="w-10 h-10 text-fixly-accent mt-4" />
                <h3 className="text-xl font-semibold text-fixly-text-primary mt-4">{step.title}</h3>
                <p className="text-fixly-text-secondary mt-2 leading-relaxed">{step.desc}</p>
                
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: reducedMotion ? 0 : 1.2 }}
        >
          <p className="text-lg font-semibold text-fixly-accent">
            Understand <span className="text-fixly-text-tertiary mx-1">→</span> Compare <span className="text-fixly-text-tertiary mx-1">→</span> Decide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
