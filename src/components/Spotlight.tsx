'use client';

import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springX = useSpring(mouseX, { stiffness: 60, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create a CSS variable for the spotlight background
  const background = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(1000px circle at ${x}px ${y}px, rgba(var(--spotlight-color, 0, 0, 0), 0.08), transparent 80%)`
  );

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 5,
        background: background,
      }}
      className="spotlight-layer"
    >
      <style jsx global>{`
        .spotlight-layer {
          --spotlight-color: 0, 0, 0;
        }
        [data-theme='dark'] .spotlight-layer {
          --spotlight-color: 255, 255, 255;
        }
        [data-theme='nordic'] .spotlight-layer {
          --spotlight-color: 69, 58, 37;
        }
        [data-theme='crimson'] .spotlight-layer {
          --spotlight-color: 16, 185, 129;
        }
      `}</style>
    </motion.div>
  );
}
