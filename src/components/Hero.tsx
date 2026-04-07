'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section ref={ref} style={{ position: 'relative', width: '100%', minHeight: '180vh', backgroundColor: '#F9F9F7' }}>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        {/* Main Heading Reveal */}
        <div style={{ overflow: 'hidden', textAlign: 'center', marginBottom: '24px' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.8,
              ease: [0.19, 1, 0.22, 1],
              delay: 0.5,
            }}
            style={{
              fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: '10vw',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: '#000000',
              margin: 0,
              maxWidth: '90vw',
            }}
          >
            Nandan Achar is <br /> Full Stack Developer
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            fontSize: '18px',
            color: 'rgba(0,0,0,0.6)',
            letterSpacing: '-0.01em',
            fontWeight: 400,
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          2026 Portfolio. AI & ML Enthusiast. Based in India.
        </motion.p>

        {/* Center Portrait Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, delay: 1.8, ease: [0.19, 1, 0.22, 1] }}
          style={{
            width: '28vw',
            minWidth: '320px',
            aspectRatio: '3/4',
            backgroundColor: '#E5E5E5',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/generated-hero.jpg"
            alt="Nandan Achar"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(100%) contrast(110%) brightness(95%)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 3.5, duration: 1 }}
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <div style={{ width: '1px', height: '60px', background: 'rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden' }}>
          <motion.div 
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40%', background: '#000' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
