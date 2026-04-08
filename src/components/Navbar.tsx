'use client';

import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Nandan Achar', href: '#' },
  { label: 'Chronology', href: '#chronology' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Contact', href: 'mailto:hello@nandan.dev' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 2.2 }}
      style={{
        position: 'fixed',
        top: '24px',
        left: 0,
        right: 0,
        margin: '0 auto',
        width: 'fit-content',
        zIndex: 100,
        backgroundColor: 'var(--nav-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '10px 28px',
        borderRadius: '999px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        alignItems: 'center',
        gap: '28px',
        border: '1px solid var(--border-color)',
      }}
    >
      {NAV_ITEMS.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          style={{
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontSize: '12px',
            fontWeight: index === 0 ? 600 : 400,
            opacity: index === 0 ? 1 : 0.5,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = index === 0 ? '1' : '0.5';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {item.label}
        </a>
      ))}
    </motion.nav>
  );
}
