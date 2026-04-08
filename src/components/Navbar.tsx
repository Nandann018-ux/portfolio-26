import { motion } from 'framer-motion';
import { Home, User, FolderCode, Mail, FileText } from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#', icon: Home },
  { label: 'About', href: '#chronology', icon: User },
  { label: 'Projects', href: '#projects', icon: FolderCode },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        padding: '8px 12px',
        borderRadius: '999px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        border: '1px solid var(--border-color)',
      }}
    >
      {NAV_ITEMS.map((item, index) => (
        <a
          key={item.label}
          href={item.href}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            position: 'relative',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            padding: '10px',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s ease',
            backgroundColor: hoveredIndex === index ? 'var(--selection-bg)' : 'transparent',
          }}
          title={item.label}
        >
          <item.icon size={18} strokeWidth={2} style={{ opacity: hoveredIndex === index ? 1 : 0.6, transition: 'opacity 0.3s ease' }} />
          
          {hoveredIndex === index && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                position: 'absolute',
                top: 'calc(100% + 12px)',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </motion.span>
          )}
        </a>
      ))}
    </motion.nav>
  );
}
