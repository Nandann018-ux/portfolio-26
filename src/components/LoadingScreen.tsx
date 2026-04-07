'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STATUS_LOGS = [
  'BOOTING PORTFOLIO SYSTEM...',
  'FETCHING CREATIVE ASSETS...',
  'HYDRATING REACT NODES...',
  'RESOLVING COMPONENT MODELS...',
  'OPTIMIZING LAYOUT FLOWS...',
  'PREPARING HIGH-FIDELITY VIEWS...',
  'ESTABLISHING INTERFACE PROTOCOLS...',
  'FINALIZING DESIGN ELEMENTS...',
  'SYSTEM READY.'
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [activeLogs, setActiveLogs] = useState<string[]>([]);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; 
    const totalTicks = duration / interval;
    const increment = 100 / totalTicks;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    // Logs timing
    STATUS_LOGS.forEach((log, index) => {
      setTimeout(() => {
        setActiveLogs(prev => [...prev, log]);
      }, (duration / STATUS_LOGS.length) * index);
    });

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeLogs]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#F9F9F7', // Matching portfolio cream/white
        color: '#000000',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div style={{ 
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
      }}>
        {/* Terminal Logs Container */}
        <div style={{ 
          height: '180px', 
          overflowY: 'hidden', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '8px',
          width: '100%',
          textAlign: 'center',
        }}>
          <AnimatePresence>
            {activeLogs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ 
                  fontSize: '11px', 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  opacity: i === activeLogs.length - 1 ? 1 : 0.4,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Minimal Progress Bar */}
        <div style={{ 
          width: '180px', 
          height: '1px', 
          background: 'rgba(0, 0, 0, 0.05)', 
          position: 'relative',
          overflow: 'hidden'
        }}>
          <motion.div 
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              background: '#000000',
              width: `${progress}%`,
            }}
          />
        </div>

        <div style={{ 
          fontSize: '9px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.5em', 
          opacity: 0.3,
          fontWeight: 300,
          marginTop: '8px'
        }}>
          NANDAN ACHAR // SYSTEM_V1
        </div>
      </div>

      {/* Subtle Grain Texture to match premium feel */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.03,
          mixBlendMode: 'multiply',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}
