import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../hooks';

export default function PilotRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const reducedMotion = useReducedMotion();

  const phases = [
    { num: '1', title: 'Device guidance', desc: 'Understand the problem and possible next steps.', isMvp: true },
    { num: '2', title: 'Repair comparison', desc: 'Bring repair context and replacement considerations together.', isMvp: false },
    { num: '3', title: 'Verified repair ecosystem', desc: 'Connect users with trusted repair options.', isMvp: false },
  ];

  return (
    <section className="bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex items-center gap-4">
          <span className="section-number font-mono text-fixly-accent text-sm">05</span>
          <span className="eyebrow text-sm font-semibold tracking-wider uppercase text-fixly-text-secondary">THE PLAN</span>
        </div>
        
        <motion.h2 
          className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mt-4 max-w-2xl text-fixly-text-primary"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Start with one decision. Expand from there.
        </motion.h2>

        <div className="mt-16 relative">
          <div className="flex flex-col lg:flex-row relative z-10 gap-12 lg:gap-8">
            {/* Background static line */}
            <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-fixly-light-border lg:w-auto lg:h-0.5 lg:left-5 lg:right-5 lg:top-[19px] lg:bottom-auto z-[-1]"></div>
            
            {/* Animated progress line */}
            {!reducedMotion && (
              <>
                <motion.div 
                  className="absolute left-[19px] top-5 w-0.5 bg-fixly-accent z-[-1] lg:hidden"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: '100%' } : {}}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' as const }}
                />
                <motion.div 
                  className="hidden lg:block absolute left-5 top-[19px] h-0.5 bg-fixly-accent z-[-1]"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' as const }}
                />
              </>
            )}
            
            {/* Fallback progress line for reduced motion */}
            {reducedMotion && (
              <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-fixly-accent lg:w-auto lg:h-0.5 lg:left-5 lg:right-5 lg:top-[19px] lg:bottom-auto z-[-1]"></div>
            )}

            {phases.map((phase, idx) => {
              const delay = reducedMotion ? 0 : 0.3 + idx * 0.5;
              
              return (
                <div key={phase.num} className="relative flex-1 flex flex-row lg:flex-col gap-6 lg:gap-4">
                  <motion.div 
                    className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-sm font-mono font-medium border bg-fixly-light border-fixly-light-border text-fixly-text-secondary"
                    initial={reducedMotion ? { backgroundColor: 'var(--color-fixly-accent)', borderColor: 'var(--color-fixly-accent)', color: '#ffffff' } : { backgroundColor: '#FAFAF9', borderColor: 'var(--color-fixly-light-border)', color: 'var(--color-fixly-text-secondary)' }}
                    animate={isInView ? { backgroundColor: 'var(--color-fixly-accent)', borderColor: 'var(--color-fixly-accent)', color: '#ffffff' } : {}}
                    transition={{ duration: 0.4, delay }}
                  >
                    {phase.num}
                  </motion.div>
                  
                  <div>
                    <motion.div 
                      className="flex items-center flex-wrap gap-2 mt-0 lg:mt-4"
                      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: delay + 0.1 }}
                    >
                      <h3 className="text-xl font-semibold text-fixly-text-primary">{phase.title}</h3>
                      {phase.isMvp && (
                        <motion.span 
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-fixly-accent-muted text-fixly-accent border border-fixly-accent-border ml-1 lg:ml-3"
                          initial={reducedMotion ? { scale: 1 } : { scale: 0.8, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.4, delay: delay + 0.3 }}
                        >
                          PHASE 01 — MVP
                        </motion.span>
                      )}
                    </motion.div>
                    <motion.p 
                      className="text-fixly-text-secondary mt-2 text-base"
                      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: delay + 0.2 }}
                    >
                      {phase.desc}
                    </motion.p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
