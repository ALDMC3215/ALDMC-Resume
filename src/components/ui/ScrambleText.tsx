import React, { useEffect, useState } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>#';

interface ScrambleTextProps {
  text: string;
  /** Milliseconds per frame. */
  frameMs?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** Kinetics-style scramble reveal: random glyphs settle left to right. */
export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, frameMs = 35, className, style }) => {
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOut(text);
      return;
    }
    let frame = 0;
    const total = text.length + 6;
    const id = window.setInterval(() => {
      frame++;
      const settled = Math.max(0, frame - 6);
      setOut(
        text
          .split('')
          .map((ch, i) => (ch === ' ' || ch === '&' || i < settled ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join('')
      );
      if (frame >= total) {
        window.clearInterval(id);
        setOut(text);
      }
    }, frameMs);
    return () => window.clearInterval(id);
  }, [text, frameMs]);

  return (
    <span className={className} style={style} aria-label={text}>
      {out}
    </span>
  );
};

export default ScrambleText;
