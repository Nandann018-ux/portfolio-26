'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BulbReveal from '@/components/BulbReveal';
import Hero from '@/components/Hero';
import Chronology from '@/components/Chronology';

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);

  if (!isRevealed) {
    return <BulbReveal onComplete={() => setIsRevealed(true)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
    >
      <div
        style={{
          position: 'fixed',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          backgroundColor: '#E5E5E5',
          zIndex: 50,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '55vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/generated-hero.jpg"
          alt=""
          style={{
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
            opacity: 0.1,
            mixBlendMode: 'multiply',
            maskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%)',
          }}
        />
      </div>

      <Hero />
      <Chronology />
    </motion.div>
  );
}
