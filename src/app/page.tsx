'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionReveal from '@/components/SectionReveal';
import About from '@/components/About';
import Chronology from '@/components/Chronology';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

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


      <Hero />
      
      <SectionReveal>
        <About />
      </SectionReveal>
      
      <SectionReveal>
        <Chronology />
      </SectionReveal>
      
      <SectionReveal>
        <Projects />
      </SectionReveal>
      
      <SectionReveal>
        <Contact />
      </SectionReveal>
    </motion.div>
    </>
  );
}
