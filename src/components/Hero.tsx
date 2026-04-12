'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';
import Magnetic from './Magnetic';
import Spotlight from './Spotlight';

const name = "Nandan Achar";

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

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Masked reveal variant
  const revealVariants = {
    hidden: { y: '110%', skewY: 10 },
    visible: (i: number) => ({
      y: 0,
      skewY: 0,
      transition: {
        duration: 2,
        ease: [0.19, 1, 0.22, 1],
        delay: 0.8 + i * 0.1,
      },
    }),
  };

  return (
    <section ref={ref} style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
      <Spotlight />
      
      {/* Background Layer: Slow Parallax Grid */}
      <motion.div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          opacity: 0.15,
          pointerEvents: 'none',
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
        }}
      />

      {/* Floating Metadata - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        style={{
          position: 'fixed',
          top: '120px',
          right: '5vw',
          textAlign: 'right',
          fontFamily: 'ui-monospace, monospace',
          fontSize: '11px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          zIndex: 20,
        }}
      >
        <div>Current Status</div>
        <div style={{ color: 'var(--text-primary)', opacity: 1, fontWeight: 700 }}>Open for Projects</div>
        <div style={{ marginTop: '20px' }}>Availability: Q2 2026</div>
      </motion.div>

      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // Left align
          justifyContent: 'center',
          zIndex: 10,
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
          padding: isMobile ? '20px' : '0 10vw',
        }}
      >
        <div style={{ marginBottom: '8px', overflow: 'hidden' }}>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: isMobile ? '10px' : '12px',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              opacity: 0.6,
            }}
          >
            /nʌndən/ · BENGALURU, IN
          </motion.div>
        </div>

        <Magnetic strength={0.1}>
          <div style={{ overflow: 'hidden', padding: '10px 0' }}>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              onMouseEnter={() => {
                const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                let iteration = 0;
                const target = document.querySelector('.hero-name') as HTMLElement;
                if (!target) return;
                
                const interval = setInterval(() => {
                  target.innerText = target.innerText
                    .split("")
                    .map((letter, index) => {
                      if (index < iteration) {
                        return name[index];
                      }
                      return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                  if (iteration >= name.length) {
                    clearInterval(interval);
                  }

                  iteration += 1 / 3;
                }, 30);
              }}
              className="hero-name"
              style={{
                fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                fontSize: isMobile ? '12vw' : '5vw',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                color: 'var(--text-primary)',
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              {name}
            </motion.h1>
          </div>
        </Magnetic>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            maxWidth: '35rem',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--text-primary)', opacity: 0.3 }} />
            <span style={{ 
              fontFamily: '"Outfit", ui-sans-serif, system-ui, sans-serif',
              fontSize: isMobile ? '16px' : '1.4vw',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              fontWeight: 500,
            }}>
              Full-Stack Developer | AI & ML Specialist
            </span>
          </div>

          <p style={{ 
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            fontSize: isMobile ? '14px' : '1.1vw',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            margin: 0,
            opacity: 0.8,
          }}>
            Building high-performance digital architectures with a focus on immersive motion design and technological excellence. Currently engineering the next generation of predictive AI interfaces.
          </p>

          <motion.div
            whileHover={{ x: 10 }}
            style={{ 
              marginTop: '10px',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              cursor: 'none',
              padding: '12px 24px',
              border: '1px solid var(--border-color)',
              borderRadius: '100px',
              backgroundColor: 'rgba(0,0,0,0.02)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <span>View Work</span>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-primary)' }} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '30vh' }}
        transition={{ duration: 2, delay: 1 }}
        style={{
          position: 'fixed',
          top: '50px',
          left: '5vw',
          width: '1px',
          background: 'var(--border-color)',
          zIndex: 5,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3, duration: 1 }}
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.6 }}>Explore</span>
        <div style={{ width: '1px', height: '40px', background: 'var(--text-primary)', opacity: 0.2, position: 'relative', overflow: 'hidden' }}>
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
