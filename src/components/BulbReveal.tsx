'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

export default function BulbReveal({ onComplete }: Props) {
  const [phase, setPhase] = useState<'idle' | 'flicker' | 'glow' | 'expand'>('idle');

  const handleClick = () => {
    if (phase !== 'idle') return;

    setPhase('flicker');

    setTimeout(() => {
      setPhase('glow');

      setTimeout(() => {
        setPhase('expand');
      }, 800);
    }, 400);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: '#000' }}>
      <motion.div
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={{
          clipPath: phase === 'expand' ? 'circle(250% at 50% 50%)' : 'circle(0% at 50% 50%)',
        }}
        transition={{ duration: 3, ease: [0.7, 0, 0.3, 1] }}
        onAnimationComplete={() => {
          if (phase === 'expand') onComplete();
        }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#F9F9F7',
          zIndex: 1,
        }}
      />

      <AnimatePresence>
        {phase !== 'expand' && (
          <motion.div
            key="bulb"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: '1px',
                height: 'calc(50% - 60px)',
                backgroundColor: 'rgba(255,255,255,0.12)',
              }}
            />

            <svg
              width="70"
              height="100"
              viewBox="0 0 60 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M30 10C21.7157 10 15 16.7157 15 25C15 30.2426 17.6914 34.8574 21.75 37.5V45H38.25V37.5C42.3086 34.8574 45 30.2426 45 25C45 16.7157 38.2843 10 30 10Z"
                stroke="white"
                strokeWidth="1"
                animate={{
                  fill:
                    phase === 'glow'
                      ? '#FFFACD'
                      : phase === 'flicker'
                        ? 'rgba(255,250,205,0.4)'
                        : 'rgba(0,0,0,0)',
                  opacity: phase === 'flicker' ? [1, 0.3, 1, 0.5, 1] : 1,
                }}
                transition={{ duration: phase === 'flicker' ? 0.4 : 0.3 }}
              />
              <path d="M25 45H35V48H25V45Z" fill="white" fillOpacity="0.25" />
              <path d="M26 49H34V52H26V49Z" fill="white" fillOpacity="0.15" />
            </svg>

            <motion.button
              onClick={handleClick}
              animate={
                phase === 'idle'
                  ? {
                      scale: [1, 1.15, 1],
                      boxShadow: [
                        '0 0 6px rgba(255,255,255,0.1)',
                        '0 0 20px rgba(255,255,255,0.35)',
                        '0 0 6px rgba(255,255,255,0.1)',
                      ],
                    }
                  : {
                      scale: 1,
                      backgroundColor: '#FFFACD',
                      boxShadow: '0 0 30px rgba(255,250,205,0.5)',
                    }
              }
              transition={
                phase === 'idle'
                  ? { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                  : { duration: 0.2 }
              }
              whileHover={phase === 'idle' ? { scale: 1.3 } : {}}
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: 'none',
                cursor: phase === 'idle' ? 'pointer' : 'default',
                pointerEvents: 'auto',
                marginTop: '2px',
              }}
            />

            {phase === 'idle' && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                  marginTop: '32px',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3em',
                  color: 'white',
                  fontWeight: 300,
                }}
              >
                Enter the Chronology
              </motion.span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
