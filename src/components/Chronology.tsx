'use client';

import { motion } from 'framer-motion';
import { chronology } from '@/lib/data';

export default function Chronology() {
  return (
    <section
      id="chronology"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '10vh',
        paddingBottom: '20vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.5 }}
        style={{
          textAlign: 'center',
          marginBottom: '30vh',
        }}
      >
        <span
          style={{
            fontFamily: 'ui-monospace, monospace',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            color: 'var(--text-secondary)',
            opacity: 0.3,
            fontWeight: 300,
          }}
        >
          Selected Chronology
        </span>
      </motion.div>

      {chronology.map((node, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.19, 1, 0.22, 1],
            delay: 0.1 
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: i < chronology.length - 1 ? '40vh' : 0,
          }}
        >
          <span
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: 'var(--text-secondary)',
              fontWeight: 300,
              marginBottom: '20px',
            }}
          >
            {node.year} — {node.label}
          </span>

          <h2
            style={{
              fontFamily: 'ui-serif, Georgia, "Times New Roman", serif',
              fontSize: '4vw',
              fontStyle: 'italic',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: 'var(--text-primary)',
              margin: 0,
              marginBottom: '16px',
            }}
          >
            {node.title}
          </h2>

          <p
            style={{
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '24rem',
              margin: 0,
            }}
          >
            {node.subtitle}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
