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

      <Hero />
      <Chronology />
    </motion.div>
  );
}
