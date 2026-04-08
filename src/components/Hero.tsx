'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section ref={ref} style={{ position: 'relative', width: '100%', minHeight: '180vh', backgroundColor: 'var(--bg-primary)' }}>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '40px' : '10vw',
          padding: isMobile ? '20px' : '0 5vw',
          zIndex: 10,
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            flex: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: isMobile ? '180px' : '20vw',
              minWidth: isMobile ? '180px' : '280px',
              aspectRatio: '0.85/1',
              overflow: 'hidden',
              borderRadius: '20px',
              position: 'relative',
              boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
              border: '1px solid var(--border-color)',
            }}
          >
            <img
              src="/images/generated-hero.jpg"
              alt="Nandan Achar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(var(--image-grayscale)) contrast(105%) brightness(var(--image-brightness))',
                maskImage: 'linear-gradient(to top, transparent 0%, black 10%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 10%)',
              }}
            />
          </div>
        </motion.div>

        <div 
          style={{ 
            flex: 'none',
            maxWidth: isMobile ? '100%' : '45vw',
            display: 'flex', 
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              color: 'var(--text-primary)',
            }}
          >
            /nʌndən/ · INDIA-IST · BENGALURU
          </motion.div>

          <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.19, 1, 0.22, 1],
                delay: 0.8,
              }}
              style={{
                fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                fontSize: isMobile ? '48px' : '6vw',
                fontWeight: 800,
                letterSpacing: '-0.06em',
                lineHeight: 1,
                color: 'var(--text-primary)',
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Nandan Achar
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.4, ease: [0.19, 1, 0.22, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <span style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: isMobile ? '18px' : '1.4vw',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
              fontWeight: 700,
              lineHeight: 1.2,
            }}>
              Full-Stack Developer | AI & ML Undergrad
            </span>
            <p style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: isMobile ? '15px' : '1.1vw',
              color: 'var(--text-secondary)',
              maxWidth: isMobile ? '100%' : '30rem',
              lineHeight: 1.6,
              margin: 0,
            }}>
            </p>
          </motion.div>
        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3, duration: 1 }}
        style={{
          position: 'fixed',
          bottom: '40px',
          left: isMobile ? '50%' : '10vw',
          transform: isMobile ? 'translateX(-50%)' : 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          zIndex: 10,
        }}
      >
        <div style={{ width: '1px', height: '60px', background: 'var(--border-color)', position: 'relative', overflow: 'hidden' }}>
          <motion.div 
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40%', background: 'var(--text-primary)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
