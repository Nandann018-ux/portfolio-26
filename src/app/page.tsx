'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Chronology from '@/components/Chronology';

export default function Home() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isRevealed && (
          <LoadingScreen key="loading" onComplete={() => setIsRevealed(true)} />
        )}
      </AnimatePresence>

      <Navbar />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
        animate={isRevealed ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ 
          duration: 2, 
          ease: [0.19, 1, 0.22, 1],
          delay: 0.1
        }}
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
    </>
  );
}
