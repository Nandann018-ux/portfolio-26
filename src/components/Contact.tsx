'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '20vh',
        paddingBottom: '10vh',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div style={{ padding: '0 10vw' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <span style={{ 
            fontFamily: 'ui-monospace, monospace', 
            fontSize: '11px', 
            letterSpacing: '0.4em', 
            textTransform: 'uppercase', 
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            opacity: 0.5
          }}>
            Available for opportunities
          </span>

          <h2 style={{ 
            fontSize: 'clamp(40px, 8vw, 120px)', 
            fontWeight: 800, 
            letterSpacing: '-0.05em', 
            lineHeight: 0.9,
            margin: '0 0 60px 0',
            color: 'var(--text-primary)'
          }}>
            Let's build<br />something new.
          </h2>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '80px' }}>
            <motion.a
              href="mailto:hello@nandan.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 32px',
                background: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                borderRadius: '999px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              <Mail size={16} />
              Say Hello
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 32px',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                borderRadius: '999px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '40px', 
            marginTop: '40px',
            paddingTop: '40px',
            borderTop: '1px solid var(--border-color)',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="https://github.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                Github <ArrowUpRight size={12} />
              </a>
              <a href="https://linkedin.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                LinkedIn <ArrowUpRight size={12} />
              </a>
            </div>

            <span style={{ fontSize: '11px', color: 'var(--text-secondary)', opacity: 0.3, letterSpacing: '0.1em' }}>
              © 2024 NANDAN ACHAR. ALL RIGHTS RESERVED.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
