'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const { displayText: typed } = useTypewriter('FULL STACK // AI & ML // 2026', 45, 500);

  return (
    <section ref={ref} style={{ position: 'relative', width: '100%', height: '250vh' }}>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '50vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '6vw',
          paddingRight: '2vw',
          zIndex: 10,
          opacity: heroOpacity,
          y: heroY,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.8,
            ease: [0.19, 1, 0.22, 1],
            delay: 0.1,
          }}
        >
          <h1
            style={{
              fontFamily: 'ui-serif, Georgia, "Times New Roman", serif',
              fontSize: '8vw',
              fontStyle: 'italic',
              letterSpacing: '-0.04em',
              lineHeight: 0.85,
              color: '#000',
              margin: 0,
            }}
          >
            <span style={{ display: 'block' }}>NANDAN</span>
            <span style={{ display: 'block' }}>ACHAR</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: 'easeOut',
          }}
        >
          <div
            style={{
              marginTop: '40px',
              fontFamily: 'ui-monospace, SFMono-Regular, monospace',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: 'rgba(0,0,0,0.3)',
              fontWeight: 300,
              display: 'flex',
              alignItems: 'center',
              minHeight: '1.5em',
            }}
          >
            <span>{typed}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
              style={{
                width: '1px',
                height: '12px',
                backgroundColor: 'rgba(0,0,0,0.4)',
                marginLeft: '3px',
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            fontFamily: 'ui-monospace, monospace',
            fontSize: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            color: 'rgba(0,0,0,0.12)',
            fontWeight: 300,
          }}
        >
          {['Github', 'LinkedIn', 'Twitter'].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {s}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10,
          opacity: heroOpacity as unknown as number,
        }}
      >
        <span
          style={{
            fontFamily: 'ui-monospace, monospace',
            fontSize: '7px',
            textTransform: 'uppercase',
            letterSpacing: '0.5em',
            color: '#000',
            marginBottom: '16px',
            fontWeight: 300,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            backgroundColor: '#E5E5E5',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '50%',
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}
          />
        </div>
      </motion.div>

      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '55vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          y: imageY,
        }}
      >
        <motion.img
          src="/images/generated-hero.jpg"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 3, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          style={{
            width: '100%',
            height: '130%',
            objectFit: 'cover',
            filter: 'grayscale(100%) contrast(120%) brightness(90%)',
            mixBlendMode: 'multiply',
            maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
          }}
        />
      </motion.div>
    </section>
  );
}
