import React, { useEffect, useRef, useState } from 'react';
import './LiveOrb.css';

export interface LiveOrbProps {
  variant?: 'white' | 'black' | 'webgl' | 'custom';
  size?: number;
  color?: string;
  eyeColor?: string;
  colors?: string[];
  interactive?: boolean;
  blink?: boolean;
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
}

const DEFAULT_STOPS = ['#7C6AF7', '#7DD3C7', '#E8B4D4'];

export const LiveOrb: React.FC<LiveOrbProps> = ({
  variant,
  size = 280,
  color = '#7C5CFF',
  eyeColor = '#FAFAFA',
  colors = DEFAULT_STOPS,
  interactive = true,
  blink = true,
  theme = 'auto',
  className,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const eyesRef = useRef<HTMLDivElement | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [blinking, setBlinking] = useState(false);

  // Theme resolution
  useEffect(() => {
    if (theme !== 'auto') {
      setIsDark(theme === 'dark');
      return;
    }
    const read = () => setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    read();
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => mo.disconnect();
  }, [theme]);

  // Eyes follow the pointer
  useEffect(() => {
    if (!interactive) return;
    const root = rootRef.current;
    const eyes = eyesRef.current;
    if (!root || !eyes) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    const max = size * 0.09;

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1;
      const k = Math.min(d / (size * 1.4), 1);
      tx = (dx / d) * max * k;
      ty = (dy / d) * max * k;
    };
    const tick = () => {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      eyes.style.transform = `translate(${cx.toFixed(2)}px, ${cy.toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [interactive, size]);

  // Random blinking
  useEffect(() => {
    if (!blink) return;
    let t: number;
    const schedule = () => {
      t = window.setTimeout(() => {
        setBlinking(true);
        window.setTimeout(() => setBlinking(false), 140);
        schedule();
      }, 2200 + Math.random() * 3200);
    };
    schedule();
    return () => window.clearTimeout(t);
  }, [blink]);

  const resolved = variant ?? (isDark ? 'white' : 'black');
  let body = '#fff';
  let eye = '#111';
  let bg: string | undefined;
  if (resolved === 'black') {
    body = '#111';
    eye = '#fafafa';
  } else if (resolved === 'custom') {
    body = color;
    eye = eyeColor;
  } else if (resolved === 'webgl') {
    body = colors[0] ?? DEFAULT_STOPS[0];
    eye = '#101014';
    bg = `radial-gradient(circle at 30% 28%, ${colors[1] ?? DEFAULT_STOPS[1]} 0%, transparent 55%), radial-gradient(circle at 72% 74%, ${colors[2] ?? DEFAULT_STOPS[2]} 0%, transparent 58%), ${colors[0] ?? DEFAULT_STOPS[0]}`;
  }

  const style = {
    '--orb-size': `${size}px`,
    '--orb-body': body,
    '--orb-eye': eye,
    ...(bg ? { '--orb-bg': bg } : {}),
  } as React.CSSProperties;

  return (
    <div
      ref={rootRef}
      className={`live-orb ${resolved === 'webgl' ? 'is-fluid' : ''} ${className ?? ''}`}
      style={style}
      role="img"
      aria-label="Live orb mascot"
    >
      <div className="live-orb-body">
        <div className="live-orb-eyes" ref={eyesRef}>
          <span className={`live-orb-eye ${blinking ? 'is-blinking' : ''}`} />
          <span className={`live-orb-eye ${blinking ? 'is-blinking' : ''}`} />
        </div>
      </div>
    </div>
  );
};

export default LiveOrb;
