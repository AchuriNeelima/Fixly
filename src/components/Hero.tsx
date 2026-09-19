import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Battery, Plug, Cpu, ArrowRight, Wrench, ShoppingBag } from 'lucide-react';
import { useMouseParallax, useReducedMotion } from '../hooks';

export default function Hero() {
  const headline = "Before you replace it, know what went wrong.";
  const words = headline.split(" ");
  
  const { offset, ref: parallaxRef } = useMouseParallax();
  const prefersReducedMotion = useReducedMotion();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    if (prefersReducedMotion || isHovered) return;
    
    const durations = [2000, 1500, 2000, 1500, 1000];
    
    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, durations[currentStep]);
    
    return () => clearTimeout(timer);
  }, [currentStep, isHovered, prefersReducedMotion]);

  const activeStep = prefersReducedMotion ? 2 : currentStep;

  const cardVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };
  
  const cardTransition = { duration: 0.4, ease: 'easeInOut' as const };

  return (
    <section className="min-h-screen flex items-center pt-24 lg:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col">
            <span className="eyebrow text-sm font-semibold tracking-wider text-fixly-text-tertiary mb-4">
              CONSUMER TECH · DECISION ASSISTANT
            </span>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-fixly-text-primary leading-[1.1]">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
                  className="inline-block mr-[0.3em] mb-[0.1em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: words.length * 0.05 + 0.2, duration: 0.6 }}
              className="text-lg lg:text-xl text-fixly-text-secondary mt-6 max-w-lg leading-relaxed"
            >
              Fixly helps you understand a broken device, explore possible causes, and compare repair versus replacement before you spend money.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: words.length * 0.05 + 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#demo"
                onClick={(e) => { e.preventDefault(); document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="bg-fixly-dark text-white px-6 py-3.5 rounded-lg text-base font-medium hover:bg-fixly-dark/90 transition-colors group flex items-center"
              >
                Try the Fixly demo
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="border border-fixly-light-border text-fixly-text-primary px-6 py-3.5 rounded-lg text-base font-medium hover:border-fixly-light-border-hover hover:bg-fixly-accent-muted transition-all"
              >
                See how it works
              </a>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: words.length * 0.05 + 0.6, duration: 0.6 }}
              className="mt-8 text-sm text-fixly-text-tertiary font-mono tracking-wide"
            >
              One problem. One workflow. One useful decision.
            </motion.p>
          </div>

          {/* Right Side: Animated Product Card */}
          <div className="relative flex flex-col items-center justify-center lg:items-end w-full" ref={parallaxRef}>
            <div 
              className="w-full max-w-md bg-white border border-fixly-light-border rounded-2xl shadow-xl overflow-hidden relative"
              style={{ transform: `translate(${offset.x}px, ${offset.y}px)`, transition: prefersReducedMotion ? 'none' : 'transform 0.1s ease-out' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Top gradient line */}
              <div className="h-0.5 w-full bg-gradient-to-r from-fixly-accent to-emerald-400 absolute top-0 left-0"></div>
              
              <div className="p-6 md:p-8">
                {/* Fixed Card Header */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-fixly-light-border">
                  <div className="w-10 h-10 rounded-full bg-fixly-accent/10 flex items-center justify-center text-fixly-accent">
                    <Laptop size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-fixly-text-primary">My laptop won't turn on</h3>
                    <p className="text-xs text-fixly-text-tertiary mt-0.5">MacBook Pro 14" · 2021</p>
                  </div>
                </div>

                {/* Animated Content Area */}
                <div className="min-h-[160px] relative">
                  <AnimatePresence mode="wait">
                    {activeStep === 0 && (
                      <motion.div key="step0" variants={cardVariants} initial="initial" animate="animate" exit="exit" transition={cardTransition} className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-xs font-medium w-fit">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          Problem reported
                        </div>
                        <div className="pl-4 border-l-2 border-dotted border-fixly-light-border h-12 ml-3 opacity-50"></div>
                      </motion.div>
                    )}

                    {activeStep === 1 && (
                      <motion.div key="step1" variants={cardVariants} initial="initial" animate="animate" exit="exit" transition={cardTransition} className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium w-fit">
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                          Reviewing information
                        </div>
                        <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-1/3 rounded-full animate-[scrolling_1s_ease-in-out_infinite]" style={{ animation: 'scan 1s ease-in-out infinite' }}>
                            <style>{`
                              @keyframes scan {
                                0% { transform: translateX(-100%); }
                                100% { transform: translateX(300%); }
                              }
                            `}</style>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 2 && (
                      <motion.div key="step2" variants={cardVariants} initial="initial" animate="animate" exit="exit" transition={cardTransition} className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-medium w-fit mb-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          Possible causes identified
                        </div>
                        <div className="flex flex-col gap-3">
                          {[
                            { icon: <Battery size={16} />, text: "Battery / power issue" },
                            { icon: <Plug size={16} />, text: "Charging component issue" },
                            { icon: <Cpu size={16} />, text: "Internal hardware issue" }
                          ].map((item, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.15 + 0.2, duration: 0.3 }}
                              className="flex items-center gap-3 text-sm text-fixly-text-secondary bg-fixly-light px-4 py-2.5 rounded-lg border border-fixly-light-border"
                            >
                              <div className="text-fixly-text-tertiary">{item.icon}</div>
                              <span>{item.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 3 && (
                      <motion.div key="step3" variants={cardVariants} initial="initial" animate="animate" exit="exit" transition={cardTransition} className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold text-fixly-text-primary">What to check next</h4>
                        <div className="bg-fixly-accent-muted border border-fixly-accent-border p-4 rounded-xl flex items-start gap-3">
                          <div className="mt-0.5 text-fixly-accent">
                            <ArrowRight size={16} />
                          </div>
                          <p className="text-sm text-fixly-text-primary leading-relaxed font-medium">
                            Check the charger and power connection first.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 4 && (
                      <motion.div key="step4" variants={cardVariants} initial="initial" animate="animate" exit="exit" transition={cardTransition} className="flex flex-col gap-4">
                        <h4 className="text-sm font-semibold text-fixly-text-primary">Repair or replace?</h4>
                        <div className="flex items-center justify-between relative">
                          <div className="absolute top-1/2 left-0 right-0 h-px bg-fixly-light-border -z-10"></div>
                          <div className="bg-white border border-fixly-light-border shadow-sm p-4 rounded-xl flex flex-col items-center gap-2 w-[45%]">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                              <Wrench size={16} />
                            </div>
                            <span className="text-sm font-medium text-fixly-text-primary">Repair</span>
                          </div>
                          <div className="bg-white border border-fixly-light-border shadow-sm p-4 rounded-xl flex flex-col items-center gap-2 w-[45%]">
                            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                              <ShoppingBag size={16} />
                            </div>
                            <span className="text-sm font-medium text-fixly-text-primary">Replace</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Progress Dots */}
                <div className="flex items-center justify-center gap-1.5 mt-8">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <div 
                      key={step} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        step === activeStep ? 'w-4 bg-fixly-accent' : 'w-1.5 bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-xs text-fixly-text-tertiary text-center mt-4 font-mono w-full max-w-md">
              Live product preview
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
