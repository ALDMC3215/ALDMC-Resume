import React, { useCallback, useEffect, useState } from 'react';
import { List, X } from 'lucide-react';
import { LineSidebar } from '../ui/LineSidebar';

export interface SideNavItem {
  id: string;
  label: string;
}

interface SideNavProps {
  items: SideNavItem[];
}

/**
 * Notion-style table of contents. Desktop: fixed line sidebar on the left.
 * Small screens: floating button that opens the same list as a sheet.
 * Scroll-spy keeps the active entry in sync with what is on screen.
 */
export const SideNav: React.FC<SideNavProps> = ({ items }) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = items.map(i => i.id);
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        // topmost section that crosses the reading line wins
        const first = ids.findIndex(id => visible.has(id));
        if (first !== -1) setActive(first);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.01] }
    );

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const go = useCallback(
    (index: number) => {
      const el = document.getElementById(items[index].id);
      if (!el) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      setActive(index);
      setOpen(false);
    },
    [items]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const labels = items.map(i => i.label);

  return (
    <>
      <aside className="site-sidenav" aria-label="فهرست بخش‌ها">
        <LineSidebar
          items={labels}
          activeIndex={active}
          accentColor="#E76338"
          textColor="var(--muted)"
          markerColor="var(--border-strong)"
          proximityRadius={50}
          markerLength={20}
          smoothing={160}
          fontSize={0.9375}
          itemGap={18}
          onItemClick={go}
        />
      </aside>

      <button
        type="button"
        className="site-sidenav-toggle"
        aria-expanded={open}
        aria-label={open ? 'بستن فهرست' : 'باز کردن فهرست بخش‌ها'}
        onClick={() => setOpen(o => !o)}
      >
        {open ? <X size={20} /> : <List size={20} />}
      </button>

      {open && (
        <div className="site-sidenav-sheet" role="dialog" aria-label="فهرست بخش‌ها" onClick={() => setOpen(false)}>
          <div className="site-sidenav-sheet__panel" onClick={e => e.stopPropagation()}>
            <LineSidebar
              items={labels}
              activeIndex={active}
              accentColor="#E76338"
              textColor="var(--fg)"
              markerColor="var(--border-strong)"
              proximityRadius={40}
              maxShift={14}
              markerLength={16}
              fontSize={1}
              itemGap={14}
              onItemClick={go}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SideNav;
