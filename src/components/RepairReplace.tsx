import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, ShoppingBag, CheckCircle2 } from 'lucide-react';
import type { Device } from '../types';
import { useReducedMotion } from '../hooks';

interface RepairReplaceProps {
  device: Device;
  repairConsiderations?: string[];
  replaceConsiderations?: string[];
}

export default function RepairReplace({
  device,
  repairConsiderations = [
    'Repair cost relative to device value',
    'Device age and warranty',
    'Remaining useful life',
    'Data recovery needs',
  ],
  replaceConsiderations = [
    'Replacement cost for comparable device',
    'New device features',
    'Expected lifespan',
    'Setup and migration time',
  ],
}: RepairReplaceProps) {
  const [sliderValue, setSliderValue] = useState<number>(50);
  const prefersReducedMotion = useReducedMotion();

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value, 10));
  };

  const getAriaValueText = () => {
    if (sliderValue < 40) return 'Leaning toward repair';
    if (sliderValue > 60) return 'Leaning toward replace';
    return 'Neutral';
  };

  const animationProps = prefersReducedMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      };

  const isRepairFavored = sliderValue < 50;
  const isReplaceFavored = sliderValue > 50;
  const repairOpacity = sliderValue <= 50 ? 1 : Math.max(0.4, 1 - (sliderValue - 50) / 50);
  const replaceOpacity = sliderValue >= 50 ? 1 : Math.max(0.4, 1 - (50 - sliderValue) / 50);
  const contextLabel = sliderValue < 40 ? 'Repair considerations in view' : sliderValue > 60 ? 'Replacement considerations in view' : 'Compare both sets of considerations';

  return (
    <motion.div {...animationProps} className="w-full">
      <h3 className="text-xl font-semibold text-fixly-text-primary">The decision that matters</h3>

      <div className="p-8 rounded-2xl border border-fixly-light-border bg-white shadow-sm mt-6">
        <h4 className="text-lg font-medium text-fixly-text-primary mb-6 border-b border-fixly-light-border pb-4">
          {device.name}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-mono text-fixly-text-tertiary uppercase tracking-wider mb-2">
              Current estimated value
            </span>
            <span className="text-2xl font-bold text-fixly-text-primary">
              {device.estimatedValue}
            </span>
          </div>
          <div className="flex flex-col p-4 bg-fixly-accent-muted rounded-xl border border-fixly-accent-border">
            <span className="text-xs font-mono text-fixly-accent uppercase tracking-wider mb-2 font-semibold">
              Illustrative repair range
            </span>
            <span className="text-2xl font-bold text-fixly-accent">
              {device.repairRange}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono text-fixly-text-tertiary uppercase tracking-wider mb-2">
              Example replacement cost
            </span>
            <span className="text-2xl font-bold text-fixly-text-primary">
              {device.replacementCost}
            </span>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-fixly-light-border">
          <div className="flex justify-between items-center text-sm font-medium text-fixly-text-secondary mb-4">
            <span className={isRepairFavored ? 'text-fixly-accent font-bold' : ''}>Repair</span>
            <span className="text-fixly-text-tertiary">←————→</span>
            <span className={isReplaceFavored ? 'text-fixly-accent font-bold' : ''}>Replace</span>
          </div>

          <div className="relative w-full py-4">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
              aria-label="Repair versus replace comparison"
              aria-valuetext={getAriaValueText()}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-fixly-accent focus:ring-offset-2 accent-fixly-accent"
              style={
                {
                  '--slider-progress': `${sliderValue}%`,
                } as React.CSSProperties
              }
            />
          </div>

          <div className="min-h-6 text-center" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={contextLabel}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="text-xs font-medium text-fixly-text-secondary"
              >
                {contextLabel}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* REPAIR COLUMN */}
            <div
              className={`p-6 rounded-xl border transition-all duration-300 flex flex-col h-full`}
              style={{
                opacity: repairOpacity,
                borderColor: isRepairFavored ? 'var(--color-fixly-accent, #0D9373)' : 'var(--color-fixly-light-border, #E5E7EB)',
                backgroundColor: isRepairFavored ? 'var(--color-fixly-accent-muted, #F0FDF4)' : 'transparent',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Wrench
                  className={`w-5 h-5 ${isRepairFavored ? 'text-fixly-accent' : 'text-fixly-text-secondary'}`}
                />
                <h5 className="text-base font-semibold text-fixly-text-primary">Repair</h5>
              </div>
              <span className="text-sm font-medium text-fixly-text-secondary mb-4">Consider:</span>
              <ul className="flex flex-col gap-3">
                {repairConsiderations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-fixly-accent flex-shrink-0" />
                    <span className="text-sm text-fixly-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* REPLACE COLUMN */}
            <div
              className={`p-6 rounded-xl border transition-all duration-300 flex flex-col h-full`}
              style={{
                opacity: replaceOpacity,
                borderColor: isReplaceFavored ? 'var(--color-fixly-accent, #0D9373)' : 'var(--color-fixly-light-border, #E5E7EB)',
                backgroundColor: isReplaceFavored ? 'var(--color-fixly-accent-muted, #F0FDF4)' : 'transparent',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag
                  className={`w-5 h-5 ${isReplaceFavored ? 'text-fixly-accent' : 'text-fixly-text-secondary'}`}
                />
                <h5 className="text-base font-semibold text-fixly-text-primary">Replace</h5>
              </div>
              <span className="text-sm font-medium text-fixly-text-secondary mb-4">Consider:</span>
              <ul className="flex flex-col gap-3">
                {replaceConsiderations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-fixly-accent flex-shrink-0" />
                    <span className="text-sm text-fixly-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm font-medium text-fixly-text-primary">
          Fixly doesn't make the decision for you.
        </p>
        <p className="text-sm text-fixly-text-secondary mt-1">
          It gives you better context to make it.
        </p>
        <p className="mt-4 text-xs text-fixly-text-tertiary italic">
          Illustrative example only. Actual repair costs and device values vary.
        </p>
      </div>
    </motion.div>
  );
}
