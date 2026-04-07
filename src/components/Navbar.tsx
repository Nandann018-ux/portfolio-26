'use client';

import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Nandan Achar', href: '#' },
  { label: 'Highlights', href: '#' },
  { label: 'Work', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Get in touch', href: '#' },
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
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        backgroundColor: '#FFFFFF',
        padding: '12px 32px',
        borderRadius: '999px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        border: '1px solid rgba(0,0,0,0.03)',
      }}
    >
      {NAV_ITEMS.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          style={{
            textDecoration: 'none',
            color: '#000000',
            fontSize: '13px',
            fontWeight: index === 0 ? 600 : 400,
            opacity: index === 0 ? 1 : 0.6,
            transition: 'opacity 0.3s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = index === 0 ? '1' : '0.6')}
        >
          {item.label}
        </a>
      ))}
    </motion.nav>
  );
}
