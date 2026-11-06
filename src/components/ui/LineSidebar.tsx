import React, { useCallback, useEffect, useRef, useState } from 'react';
import './LineSidebar.css';

/**
 * LineSidebar: proximity-reactive section list (after React Bits).
 * Optimised variant:
 *  - item centres are cached (ResizeObserver) so pointer moves never force layout
 *  - pointer moves are coalesced into one rAF per frame
 *  - one eased loop, only runs while something is still moving
 *  - touch pointers skip the proximity effect, reduced motion snaps
 *  - controlled `activeIndex` (scroll-spy) and keyboard-accessible buttons
 */

const FALLOFF_CURVES = {
  linear: (p: number) => p,
  smooth: (p: number) => p * p * (3 - 2 * p),
  sharp: (p: number) => p * p * p
} as const;

export interface LineSidebarProps {
  items: string[];
  activeIndex?: number | null;
  accentColor?: string;
  textColor?: string;
  markerColor?: string;
  showIndex?: boolean;
  showMarker?: boolean;
  proximityRadius?: number;
  maxShift?: number;
  falloff?: keyof typeof FALLOFF_CURVES;
  markerLength?: number;
  markerGap?: number;
  tickScale?: number;
  scaleTick?: boolean;
  itemGap?: number;
  fontSize?: number;
  smoothing?: number;
  onItemClick?: (index: number, label: string) => void;
  className?: string;
  ariaLabel?: string;
  /** Which screen edge the rail is attached to. */
  side?: 'left' | 'right';
}

export const LineSidebar: React.FC<LineSidebarProps> = ({
  items,
  activeIndex = null,
  accentColor = '#E76338',
  textColor = '#c4c4c4',
  markerColor = '#6c6c6c',
  showIndex = true,
  showMarker = true,
  proximityRadius = 50,
  maxShift = 30,
  falloff = 'smooth',
  markerLength = 20,
  markerGap = 0,
  tickScale = 0.5,
  scaleTick = true,
  itemGap = 20,
  fontSize = 1,
  smoothing = 160,
  onItemClick,
  className = '',
  ariaLabel = 'Sections',
  side = 'left'
}) => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const centersRef = useRef<number[]>([]);
  const targetsRef = useRef<number[]>([]);
  const currentRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const moveRafRef = useRef<number | null>(null);
  const pendingYRef = useRef<number | null>(null);
  const lastRef = useRef(0);
  const activeRef = useRef<number | null>(activeIndex);
  const [reduced, setReduced] = useState(false);

  activeRef.current = activeIndex;
  const tau = Math.max(reduced ? 1 : smoothing, 1) / 1000;
  const tauRef = useRef(tau);
  tauRef.current = tau;

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const runFrame = useCallback((now: number) => {
    const dt = Math.min((now - lastRef.current) / 1000, 0.05);
    lastRef.current = now;
    const k = 1 - Math.exp(-dt / tauRef.current);

    let moving = false;
    const els = itemRefs.current;
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      if (!el) continue;
      const target = Math.max(targetsRef.current[i] || 0, activeRef.current === i ? 1 : 0);
      const cur = currentRef.current[i] || 0;
      const next = cur + (target - cur) * k;
      const settled = Math.abs(target - next) < 0.0015;
      const value = settled ? target : next;
      if (value !== cur || currentRef.current[i] === undefined) {
        currentRef.current[i] = value;
        el.style.setProperty('--effect', value.toFixed(4));
      }
      if (!settled) moving = true;
    }
    rafRef.current = moving ? requestAnimationFrame(runFrame) : null;
  }, []);

  const startLoop = useCallback(() => {
    if (rafRef.current != null) return;
    lastRef.current = performance.now();
    rafRef.current = requestAnimationFrame(runFrame);
  }, [runFrame]);

  // Cache item centres relative to the list; refreshed on resize only.
  const measure = useCallback(() => {
    centersRef.current = itemRefs.current.map(el => (el ? el.offsetTop + el.offsetHeight / 2 : 0));
  }, []);

  useEffect(() => {
    measure();
    const list = listRef.current;
    if (!list) return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    return () => ro.disconnect();
  }, [measure, items.length, itemGap, fontSize]);

  const applyPointer = useCallback(() => {
    moveRafRef.current = null;
    const list = listRef.current;
    const y = pendingYRef.current;
    if (!list || y == null) return;
    const pointerY = y - list.getBoundingClientRect().top;
    const ease = FALLOFF_CURVES[falloff] ?? FALLOFF_CURVES.linear;
    const centers = centersRef.current;
    for (let i = 0; i < centers.length; i++) {
      targetsRef.current[i] = ease(Math.max(0, 1 - Math.abs(pointerY - centers[i]) / proximityRadius));
    }
    startLoop();
  }, [falloff, proximityRadius, startLoop]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === 'touch') return;
      pendingYRef.current = e.clientY;
      if (moveRafRef.current == null) moveRafRef.current = requestAnimationFrame(applyPointer);
    },
    [applyPointer]
  );

  const handlePointerLeave = useCallback(() => {
    pendingYRef.current = null;
    targetsRef.current = targetsRef.current.map(() => 0);
    startLoop();
  }, [startLoop]);

  useEffect(() => {
    startLoop();
  }, [activeIndex, startLoop]);

  useEffect(
    () => () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (moveRafRef.current != null) cancelAnimationFrame(moveRafRef.current);
      rafRef.current = null;
      moveRafRef.current = null;
    },
    []
  );

  const style = {
    '--accent-color': accentColor,
    '--text-color': textColor,
    '--marker-color': markerColor,
    '--marker-length': `${markerLength}px`,
    '--marker-gap': `${markerGap}px`,
    '--tick-scale': tickScale,
    '--max-shift': `${maxShift}px`,
    '--item-gap': `${itemGap}px`,
    '--font-size': `${fontSize}rem`
  } as React.CSSProperties;

  return (
    <nav
      aria-label={ariaLabel}
      dir="ltr"
      className={`line-sidebar line-sidebar--${side}${showMarker ? ' line-sidebar--markers' : ''}${scaleTick ? ' line-sidebar--scale-tick' : ''}${className ? ` ${className}` : ''}`}
      style={style}
    >
      <ul ref={listRef} className="line-sidebar__list" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
        {items.map((label, index) => (
          <li
            key={`${label}-${index}`}
            ref={el => {
              itemRefs.current[index] = el;
            }}
            className="line-sidebar__item"
          >
            {showMarker && <span className="line-sidebar__marker" aria-hidden="true" />}
            <button
              type="button"
              className="line-sidebar__button"
              aria-current={activeIndex === index ? 'true' : undefined}
              onClick={() => onItemClick?.(index, label)}
            >
              {showIndex && <span className="line-sidebar__index">{String(index + 1).padStart(2, '0')}</span>}
              <span className="line-sidebar__text" dir="auto">
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LineSidebar;
