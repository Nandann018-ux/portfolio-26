'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '10vh',
        paddingBottom: '20vh',
      }}
    >
      <motion.div
        style={{
          textAlign: 'center',
          marginBottom: '20vh',
        }}
      >
        <span
          style={{
            fontFamily: 'ui-monospace, monospace',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            color: 'var(--text-secondary)',
            fontWeight: 300,
          }}
        >
          Selected Works
        </span>
      </motion.div>

      <div style={{ padding: '0 10vw' }}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              paddingBottom: '15vh',
              borderBottom: i < projects.length - 1 ? '1px solid var(--border-color)' : 'none',
              marginBottom: i < projects.length - 1 ? '15vh' : 0,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <span style={{ 
                  fontFamily: 'ui-monospace, monospace', 
                  fontSize: '11px', 
                  color: 'var(--text-secondary)',
                  opacity: 0.5,
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  {project.year}
                </span>
                <h2 style={{ 
                  fontSize: 'clamp(32px, 4vw, 64px)', 
                  letterSpacing: '-0.04em',
                  fontWeight: 700,
                  margin: 0,
                  color: 'var(--text-primary)'
                }}>
                  {project.title}
                </h2>
              </div>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '10px', 
                    padding: '4px 10px', 
                    border: '1px solid var(--border-color)', 
                    borderRadius: '99px',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p style={{ 
              maxWidth: '500px', 
              fontSize: '16px', 
              lineHeight: 1.6, 
              color: 'var(--text-secondary)',
              margin: 0 
            }}>
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
