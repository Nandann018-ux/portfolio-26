'use client';

import { motion } from 'framer-motion';
import { Code, User, ExternalLink } from 'lucide-react';

export default function About() {
  const socials = [
    { icon: <Code size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <User size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <ExternalLink size={20} />, href: 'https://twitter.com', label: 'X (Twitter)' },
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--bg-primary)',
        padding: '10vh 10vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div
        style={{ maxWidth: '45rem' }}
      >
        <span
          style={{
            fontFamily: 'ui-monospace, monospace',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            color: 'var(--text-secondary)',
            opacity: 0.5,
            marginBottom: '40px',
            display: 'block',
          }}
        >
          A Distilled Perspective
        </span>

        <h2
          style={{
            fontFamily: 'ui-serif, Georgia, "Times New Roman", serif',
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            color: 'var(--text-primary)',
            marginBottom: '32px',
          }}
        >
          Bridging the gap between complex engineering and intuitive human experiences.
        </h2>

        <p
          style={{
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            fontWeight: 300,
            marginBottom: '48px',
          }}
        >
          I am a Full-Stack Developer and AI & Machine Learning undergraduate based in Bengaluru, India. 
          I specialize in building high-performance, scalable web applications and exploring the frontiers 
          of intelligent systems. My work focuses on the intersection of intuitive user experiences and 
          robust technical foundations, ranging from curated e-commerce platforms to real-time AI interfaces.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: 'var(--text-primary)',
                color: 'var(--bg-primary)',
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                cursor: 'pointer',
              }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
