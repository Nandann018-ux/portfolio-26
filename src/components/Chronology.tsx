'use client';

import { motion } from 'framer-motion';
import { chronology } from '@/lib/data';

export default function Chronology() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#F9F9F7',
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
            color: 'rgba(0,0,0,0.12)',
            fontWeight: 300,
          }}
        >
          Selected Chronology
        </span>
      </motion.div>

      {chronology.map((node, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
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
              color: 'rgba(0,0,0,0.2)',
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
              color: '#000',
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
              color: 'rgba(0,0,0,0.35)',
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
