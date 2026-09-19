import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Smartphone, WashingMachine, AirVent, ArrowRight, Check, RotateCcw } from 'lucide-react';
import { devices, deviceIssueMap } from '../data';
import { useReducedMotion } from '../hooks';
import RepairReplace from './RepairReplace';

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement> & { size?: number | string }>> = {
  Laptop,
  Smartphone,
  WashingMachine,
  AirVent,
};

export default function InteractiveDemo() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [showRepairReplace, setShowRepairReplace] = useState(false);
  const [analysisState, setAnalysisState] = useState<'loading' | 'success' | 'done'>('loading');
  const prefersReducedMotion = useReducedMotion();

  const handleReset = () => {
    setSelectedDevice(null);
    setSelectedIssue(null);
    setShowRepairReplace(false);
    setAnalysisState('loading');
  };

  // Micro-interaction simulation
  useEffect(() => {
    if (selectedIssue) {
      setAnalysisState('loading');
      const timer1 = setTimeout(() => setAnalysisState('success'), 1200);
      const timer2 = setTimeout(() => setAnalysisState('done'), 2400);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [selectedIssue]);

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 } as const,
        animate: { opacity: 1, y: 0 } as const,
        transition: { duration: 0.4, ease: 'easeOut' as const },
      };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-amber-500';
      case 'low':
      default:
        return 'bg-green-500';
    }
  };

  const selectedDeviceData = selectedDevice ? devices.find((d) => d.id === selectedDevice) : null;
  const currentIssues = selectedDevice ? deviceIssueMap[selectedDevice]?.issues || [] : [];
  const currentGuidance = selectedDevice && selectedIssue ? deviceIssueMap[selectedDevice]?.guidance[selectedIssue] : null;

  const currentStep = !selectedDevice ? 0 : !selectedIssue ? 1 : showRepairReplace ? 3 : 2;
  const progress = [0, 34, 68, 100][currentStep];

  return (
    <section id="demo" className="bg-fixly-light w-full">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="section-number font-mono text-sm">03</span>
          <span className="eyebrow">INTERACTIVE DEMO</span>
        </div>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight max-w-2xl text-fixly-text-primary">
          Try the decision before you make it.
        </h2>

        <div className="mt-8 max-w-xl" aria-label={`Demo progress: ${progress}% complete`}>
          <div className="flex justify-between text-xs font-mono uppercase tracking-wide text-fixly-text-tertiary mb-3">
            <span>Decision flow</span><span>{progress}%</span>
          </div>
          <div className="h-1 rounded-full bg-fixly-light-border overflow-hidden">
            <motion.div className="h-full bg-fixly-accent" animate={{ width: `${progress}%` }} transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: 'easeOut' }} />
          </div>
          <div className="mt-3 grid grid-cols-4 text-[10px] sm:text-xs text-fixly-text-tertiary">
            {['Device', 'Issue', 'Guidance', 'Compare'].map((label, index) => <span key={label} className={currentStep >= index ? 'text-fixly-accent font-medium' : ''}>{label}</span>)}
          </div>
        </div>

        {/* Reset button */}
        {selectedDevice && (
          <button
            onClick={handleReset}
            className="mt-8 flex items-center gap-2 text-sm font-medium text-fixly-text-secondary hover:text-fixly-text-primary transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            ← Start over
          </button>
        )}

        <div className="mt-12 space-y-12">
          {/* Device Selector — always visible */}
          <div>
            <h3 className="text-sm font-medium text-fixly-text-secondary mb-4">Select a device</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {devices.map((device) => {
                const IconComponent = iconMap[device.icon] || Laptop;
                const isSelected = selectedDevice === device.id;
                const isAnotherSelected = selectedDevice !== null && !isSelected;

                return (
                  <button
                    key={device.id}
                    onClick={() => {
                      setSelectedDevice(device.id);
                      setSelectedIssue(null);
                      setShowRepairReplace(false);
                      setAnalysisState('loading');
                    }}
                    className={`p-6 rounded-xl border text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[120px]
                      ${
                        isSelected
                          ? 'border-fixly-accent bg-fixly-accent-muted ring-1 ring-fixly-accent shadow-md scale-[1.02]'
                          : 'border-fixly-light-border bg-white hover:border-fixly-accent-border hover:-translate-y-0.5'
                      }
                      ${isAnotherSelected ? 'opacity-60' : 'opacity-100'}
                    `}
                    aria-pressed={isSelected}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${
                        isSelected ? 'text-fixly-accent' : 'text-fixly-text-secondary'
                      }`}
                    />
                    <span
                      className={`text-sm font-medium mt-3 ${
                        isSelected ? 'text-fixly-accent' : 'text-fixly-text-primary'
                      }`}
                    >
                      {device.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Issue Selector — visible after device selected */}
          <AnimatePresence>
            {selectedDevice && (
              <motion.div key="issue-selector" {...fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-fixly-accent font-medium px-2 py-1 bg-fixly-accent-muted rounded">
                    Step {currentStep >= 2 ? '2' : '1'} of 3
                  </span>
                  <h3 className="text-xl font-semibold text-fixly-text-primary">What&rsquo;s happening?</h3>
                </div>

                <div className="flex flex-col gap-3">
                  {currentIssues.map((issue) => {
                    const isSelected = selectedIssue === issue.id;
                    return (
                      <button
                        key={issue.id}
                        onClick={() => {
                          setSelectedIssue(issue.id);
                          setShowRepairReplace(false);
                          setAnalysisState('loading');
                        }}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 w-full text-left
                          ${
                            isSelected
                              ? 'border-fixly-accent bg-fixly-accent-muted'
                              : 'border-fixly-light-border bg-white hover:border-fixly-accent-border'
                          }
                        `}
                        aria-pressed={isSelected}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-colors flex items-center justify-center ${
                            isSelected
                              ? 'border-fixly-accent bg-fixly-accent'
                              : 'border-fixly-light-border bg-transparent'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-sm font-medium text-fixly-text-primary">
                          {issue.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Guidance Panel — visible after issue selected */}
          <AnimatePresence mode="wait">
            {selectedIssue && currentGuidance && !showRepairReplace && (
              <motion.div
                key={`guidance-${selectedIssue}`}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeOut' as const }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-fixly-accent font-medium px-2 py-1 bg-fixly-accent-muted rounded">
                    Step 2 of 3
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-fixly-accent-muted text-fixly-accent text-xs font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-fixly-accent" />
                  Initial guidance
                </div>

                <h4 className="text-lg font-semibold mt-6 mb-4 text-fixly-text-primary">
                  Possible causes
                </h4>

                <div className="flex flex-col gap-3">
                  {currentGuidance.causes.map((cause, idx) => (
                    <motion.div
                      key={idx}
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: prefersReducedMotion ? 0 : idx * 0.1, duration: 0.3 }}
                      className="p-4 rounded-lg border border-fixly-light-border bg-white"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${getSeverityColor(cause.severity)}`} />
                        <h5 className="text-sm font-semibold text-fixly-text-primary">{cause.title}</h5>
                      </div>
                      <p className="text-sm text-fixly-text-secondary mt-1">{cause.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* What to check next */}
                <motion.div
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
                  className="mt-6 p-5 rounded-xl bg-fixly-accent-muted border border-fixly-accent-border"
                >
                  <h5 className="flex items-center gap-2 text-sm font-semibold text-fixly-accent">
                    What to check next
                    <ArrowRight className="w-4 h-4" />
                  </h5>
                  <p className="text-sm text-fixly-text-secondary mt-2">
                    {currentGuidance.nextStep}
                  </p>
                </motion.div>

                {/* Micro-interaction status */}
                <div className="mt-8 flex items-center h-6">
                  <AnimatePresence mode="wait">
                    {analysisState === 'loading' && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-sm text-fixly-text-secondary"
                      >
                        <div className="w-4 h-4 rounded-full border-2 border-fixly-text-tertiary border-t-fixly-accent animate-spin" />
                        Need more information
                      </motion.div>
                    )}
                    {analysisState === 'success' && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-2 text-sm text-fixly-accent font-medium"
                      >
                        <Check className="w-4 h-4" />
                        Possible causes identified
                      </motion.div>
                    )}
                    {analysisState === 'done' && (
                      <motion.div
                        key="done"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-sm text-fixly-text-secondary"
                      >
                        Next step available
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA to proceed to repair/replace */}
                {analysisState === 'done' && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setShowRepairReplace(true)}
                    className="mt-6 text-sm font-medium text-fixly-accent hover:underline cursor-pointer flex items-center gap-1"
                  >
                    Compare repair vs. replace <ArrowRight className="w-4 h-4" />
                  </motion.button>
                )}
              </motion.div>
            )}

            {/* Repair vs Replace */}
            {showRepairReplace && selectedDeviceData && (
              <motion.div
                key="repair-replace"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeOut' as const }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-fixly-accent font-medium px-2 py-1 bg-fixly-accent-muted rounded">
                    Step 3 of 3
                  </span>
                </div>
                <RepairReplace
                  device={selectedDeviceData}
                  repairConsiderations={currentGuidance?.repairConsiderations}
                  replaceConsiderations={currentGuidance?.replaceConsiderations}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
