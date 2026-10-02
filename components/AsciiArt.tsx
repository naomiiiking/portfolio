'use client';

import { useEffect, useRef } from 'react';
import { asciiArt } from '@/data/content';

export function AsciiArt() {
  const elementRef = useRef<HTMLPreElement>(null);
  const chars = '.,=-:+*#@%';

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.textContent = asciiArt;

    const startUnscramble = async () => {
      const duration = 1200;
      const frameTime = 30;
      const totalFrames = Math.ceil(duration / frameTime);
      let frame = 0;

      while (frame < totalFrames) {
        const progress = frame / totalFrames;
        let newText = '';

        for (let i = 0; i < asciiArt.length; i++) {
          if (asciiArt[i] === '\n') {
            newText += '\n';
          } else if (Math.random() < progress) {
            newText += asciiArt[i];
          } else {
            newText += chars[Math.floor(Math.random() * chars.length)];
          }
        }

        element.textContent = newText;
        await new Promise(resolve => setTimeout(resolve, frameTime));
        frame++;
      }

      element.textContent = asciiArt;
    };

    startUnscramble();
  }, [chars]);

  return <pre id="ascii-art" ref={elementRef} />;
}
