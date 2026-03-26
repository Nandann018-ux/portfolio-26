'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';

type Phase = 'idle' | 'warmup' | 'glow' | 'spread' | 'done';

interface Props {
  onComplete: () => void;
}

export default function BulbReveal({ onComplete }: Props) {
  const [phase, setPhase] = useState<Phase>('idle');
  const spreadProgress = useMotionValue(0);

  const maskImage = useTransform(spreadProgress, (v) => {
    const inner = Math.max(0, v - 20);
    return `radial-gradient(circle at 50% 50%, black ${inner}%, transparent ${v}%)`;
  });

  const handleClick = useCallback(() => {
    if (phase !== 'idle') return;
    setPhase('warmup');

    setTimeout(() => {
      setPhase('glow');

      setTimeout(() => {
        setPhase('spread');
      }, 1300);
    }, 1200);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'spread') return;

    const controls = animate(spreadProgress, 120, {
      duration: 3.5,
      ease: [0.25, 0.1, 0.25, 1],
      onComplete: () => {
        setPhase('done');
        onComplete();
      },
    });

    return () => controls.stop();
  }, [phase, spreadProgress, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: '#000',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#F9F9F7',
          zIndex: 1,
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          opacity: phase === 'spread' || phase === 'done' ? 1 : 0,
        }}
      />

      <AnimatePresence>
        {phase !== 'done' && (
          <motion.div
            key="bulb-assembly"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            {/* === WIRE === */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                width: '1px',
                height: 'calc(50% - 48px)',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                transform: 'translateX(-50%)',
              }}
            />

            {/* === BULB + BUTTON ASSEMBLY === */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pointerEvents: 'auto',
              }}
            >
              {/* === THE BULB SVG === */}
              <motion.svg
                width="52"
                height="86"
                viewBox="0 0 52 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  filter:
                    phase === 'glow' || phase === 'spread'
                      ? 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.6)) drop-shadow(0 0 80px rgba(255, 215, 0, 0.2))'
                      : 'drop-shadow(0 0 0px rgba(255, 215, 0, 0))',
                }}
                transition={{ duration: phase === 'glow' ? 1.0 : 0.4 }}
              >
                {/* --- SCREW CAP (Silver/Grey metallic) --- */}
                <rect x="17" y="0" width="18" height="4" rx="1" fill="#9E9E9E" />
                <rect x="16" y="5" width="20" height="3" rx="0.5" fill="#8A8A8A" />
                <rect x="17" y="9" width="18" height="2" rx="0.5" fill="#7A7A7A" />
                {/* Screw ridges */}
                <line x1="20" y1="0.5" x2="20" y2="3.5" stroke="#B0B0B0" strokeWidth="0.3" />
                <line x1="24" y1="0.5" x2="24" y2="3.5" stroke="#B0B0B0" strokeWidth="0.3" />
                <line x1="28" y1="0.5" x2="28" y2="3.5" stroke="#B0B0B0" strokeWidth="0.3" />
                <line x1="32" y1="0.5" x2="32" y2="3.5" stroke="#B0B0B0" strokeWidth="0.3" />

                {/* --- GLASS BULB (semi-transparent outline) --- */}
                <motion.path
                  d="M16 11 Q10 20 8 32 Q5 48 14 60 Q20 68 26 72 Q32 68 38 60 Q47 48 44 32 Q42 20 36 11"
                  strokeWidth="0.7"
                  fill="none"
                  animate={{
                    stroke:
                      phase === 'glow' || phase === 'spread'
                        ? 'rgba(255, 215, 0, 0.3)'
                        : 'rgba(255, 255, 255, 0.2)',
                  }}
                  transition={{ duration: 0.8 }}
                />
                {/* Glass inner fill (very subtle) */}
                <motion.path
                  d="M16 11 Q10 20 8 32 Q5 48 14 60 Q20 68 26 72 Q32 68 38 60 Q47 48 44 32 Q42 20 36 11"
                  strokeWidth="0"
                  animate={{
                    fill:
                      phase === 'glow' || phase === 'spread'
                        ? 'rgba(255, 215, 0, 0.08)'
                        : 'rgba(255, 255, 255, 0.01)',
                  }}
                  transition={{ duration: 1.0 }}
                />

                {/* --- SUPPORT WIRES (from cap down to filament) --- */}
                <line x1="22" y1="11" x2="22" y2="52" stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />
                <line x1="30" y1="11" x2="30" y2="52" stroke="rgba(255,255,255,0.06)" strokeWidth="0.4" />

                {/* --- TUNGSTEN FILAMENT ("W" shape at bottom of glass) --- */}
                <motion.polyline
                  points="19,52 22,62 25,52 28,62 31,52 34,62 37,52"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  animate={{
                    stroke:
                      phase === 'warmup' || phase === 'glow' || phase === 'spread'
                        ? '#FFD700'
                        : 'rgba(255, 255, 255, 0.15)',
                    opacity:
                      phase === 'warmup'
                        ? [0.5, 1, 0.6, 1, 0.7, 1, 0.8, 1]
                        : 1,
                  }}
                  transition={{
                    duration: phase === 'warmup' ? 1.2 : 0.5,
                    ease: 'linear',
                  }}
                />

                {/* --- FILAMENT AMBIENT GLOW --- */}
                <motion.ellipse
                  cx="28"
                  cy="57"
                  rx="10"
                  ry="12"
                  animate={{
                    fill:
                      phase === 'warmup'
                        ? 'rgba(255, 215, 0, 0.12)'
                        : phase === 'glow' || phase === 'spread'
                          ? 'rgba(255, 215, 0, 0.2)'
                          : 'rgba(0, 0, 0, 0)',
                    opacity:
                      phase === 'warmup'
                        ? [0, 0.6, 0.3, 0.8, 0.5, 1]
                        : 1,
                  }}
                  transition={{
                    duration: phase === 'warmup' ? 1.2 : 0.6,
                  }}
                />
              </motion.svg>

              {/* === ENTER SITE BUTTON === */}
              <motion.button
                onClick={handleClick}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: phase === 'idle' ? 0.6 : 0,
                  pointerEvents: phase === 'idle' ? 'auto' as const : 'none' as const,
                }}
                transition={{
                  opacity: {
                    duration: phase === 'idle' ? 2 : 0.4,
                    delay: phase === 'idle' ? 1.5 : 0,
                  },
                }}
                whileHover={{ opacity: 1 }}
                style={{
                  marginTop: '40px',
                  padding: '12px 32px',
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  color: 'white',
                  fontFamily: 'ui-monospace, SFMono-Regular, monospace',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.4em',
                  fontWeight: 300,
                  cursor: 'pointer',
                  transition: 'opacity 0.8s ease',
                }}
              >
                Enter Site
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
