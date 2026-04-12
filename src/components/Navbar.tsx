import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { Home, User, FolderCode, Mail } from 'lucide-react';
import { useRef, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Projects', href: '#projects', icon: FolderCode },
  { label: 'Contact', href: '#contact', icon: Mail },
];

function MagIcon({ item, mouseX }: { item: typeof NAV_ITEMS[0], mouseX: MotionValue }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [44, 75, 44]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <a
      ref={ref}
      href={item.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(null as any)}
      style={{
        textDecoration: 'none',
        color: 'var(--text-primary)',
        borderRadius: '999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: 'background-color 0.3s ease',
        backgroundColor: isHovered ? 'var(--selection-bg)' : 'transparent',
      }}
      title={item.label}
    >
      <motion.div
        style={{
          width,
          height: width,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <item.icon 
          size={18} 
          strokeWidth={2} 
          style={{ 
            opacity: isHovered ? 1 : 0.6, 
            transition: 'opacity 0.3s ease',
            transform: `scale(${isHovered ? 1.2 : 1})`,
          }} 
        />
      </motion.div>

      {isHovered && (
        <motion.span
          initial={{ opacity: 0, y: 10, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 15px)',
            left: '50%',
            backgroundColor: 'var(--text-primary)',
            color: 'var(--bg-primary)',
            padding: '5px 12px',
            borderRadius: '8px',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          {item.label}
        </motion.span>
      )}
    </a>
  );
}

export default function Navbar() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
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
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        padding: '10px 14px',
        borderRadius: '999px',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        border: '1px solid var(--border-color)',
        transition: 'background-color 0.4s ease, border-color 0.4s ease',
      }}
    >
      {NAV_ITEMS.map((item) => (
        <MagIcon key={item.label} item={item} mouseX={mouseX} />
      ))}
    </motion.nav>
  );
}
