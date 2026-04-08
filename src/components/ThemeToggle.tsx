'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Palette, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const THEMES = [
  { id: 'light', icon: Sun, label: 'Light' },
  { id: 'dark', icon: Moon, label: 'Dark' },
  { id: 'nordic', icon: Palette, label: 'Gold' },
  { id: 'crimson', icon: Zap, label: 'Forest' },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const activeIndex = THEMES.findIndex((t) => t.id === theme);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 1 }}
      style={{
        position: 'fixed',
        top: '28px',
        right: '40px',
        zIndex: 1000,
        backgroundColor: 'var(--nav-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid var(--border-color)',
        borderRadius: '999px',
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      }}
    >
      <motion.div
        layoutId="theme-bubble"
        style={{
          position: 'absolute',
          width: '32px',
          height: '32px',
          backgroundColor: 'var(--text-primary)',
          borderRadius: '999px',
          zIndex: 0,
          left: 4 + activeIndex * 34,
        }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
      />

      {THEMES.map((t, index) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          style={{
            position: 'relative',
            width: '32px',
            height: '32px',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 'none',
            zIndex: 1,
            color: theme === t.id ? 'var(--bg-primary)' : 'var(--text-secondary)',
            transition: 'color 0.3s ease',
            padding: 0,
          }}
          aria-label={`Switch to ${t.label} theme`}
        >
          <t.icon size={15} strokeWidth={2.5} />
        </button>
      ))}
    </motion.div>
  );
}
