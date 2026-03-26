'use client';

import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          const char = text[currentIndex];
          currentIndex++;
          setDisplayText((prev) => prev + char);
        } else {
          clearInterval(intervalId);
          setIsDone(true);
        }
      }, speed);
      return intervalId;
    };

    if (delay > 0) {
      timeoutId = setTimeout(() => {
        const intervalId = startTyping();
        return () => clearInterval(intervalId);
      }, delay);
    } else {
      const intervalId = startTyping();
      return () => {
        clearInterval(intervalId);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return { displayText, isDone };
}
