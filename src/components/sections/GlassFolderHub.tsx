import React, { useState, useEffect, useCallback, useMemo, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  UserIcon,
  Folder01Icon,
  ChartHistogramIcon,
  Book02Icon,
  SparklesIcon,
  CloudIcon,
  SlidersHorizontalIcon,
  Mail01Icon
} from '@hugeicons/core-free-icons';
import { ArrowRight, ArrowUp, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrambleText } from '../ui/ScrambleText';
import GlassIcons, { GlassIconsItem } from '../ui/GlassIcons';

// View Components
import { About } from './About';
import { ProjectsFolderView } from './folder-views/ProjectsFolderView';
import { ExperienceFolderView } from './folder-views/ExperienceFolderView';
import { TeachingFolderView } from './folder-views/TeachingFolderView';
import { Expertise } from './Expertise';
import { Tools } from './Tools';
import { ElasticSliderShowcase } from './ElasticSliderShowcase';
import { Contact } from './Contact';

import './GlassFolderHub.css';

export type FolderId =
  | 'about'
  | 'projects'
  | 'experience'
  | 'teaching'
  | 'expertise'
  | 'tools'
  | 'interactive-lab'
  | 'contact';

interface FolderMeta {
  id: FolderId;
  label: string;
  enTitle: string;
  badge: string;
  colorName: 'orange' | 'blue' | 'purple' | 'red' | 'teal' | 'indigo' | 'green' | 'pink';
  hexColor: string;
  icon: React.ReactNode;
}

export const GlassFolderHub: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState<FolderId | null>(null);
  const [columns, setColumns] = useState<number>(4);
  const [iconSize, setIconSize] = useState<number>(86);
  const [gap, setGap] = useState<number>(54);
  const railRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  // Reactive theme tracking from documentElement
  useEffect(() => {
    const updateTheme = () => {
      const t = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
      setCurrentTheme(t);
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  // Responsive sizing for GlassIcons grid
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setColumns(4);
        setIconSize(54);
        setGap(18);
      } else if (width < 1024) {
        setColumns(4);
        setIconSize(68);
        setGap(34);
      } else if (width < 1280) {
        setColumns(8);
        setIconSize(68);
        setGap(38);
      } else {
        setColumns(8);
        setIconSize(84);
        setGap(68);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Folder Definitions
  const folders: FolderMeta[] = useMemo(() => [
    {
      id: 'about',
      label: 'درباره من',
      enTitle: 'ABOUT & VISION',
      badge: 'هویت و رویکرد حرفه‌ای',
      colorName: 'orange',
      hexColor: '#E76338',
      icon: <HugeiconsIcon icon={UserIcon} size={28} />
    },
    {
      id: 'projects',
      label: 'پروژه‌های منتخب',
      enTitle: 'SELECTED PROJECTS',
      badge: '۵ پروژه شاخص و زنده',
      colorName: 'blue',
      hexColor: '#3b82f6',
      icon: <HugeiconsIcon icon={Folder01Icon} size={28} />
    },
    {
      id: 'experience',
      label: 'سوابق کاری',
      enTitle: 'WORK EXPERIENCE',
      badge: '۴ موقعیت شغلی و هدایت',
      colorName: 'purple',
      hexColor: '#a855f7',
      icon: <HugeiconsIcon icon={ChartHistogramIcon} size={28} />
    },
    {
      id: 'teaching',
      label: 'آموزش و تدریس',
      enTitle: 'EDUCATION & COURSES',
      badge: '+۱۰۰ ساعت تدریس و دانشگاه',
      colorName: 'red',
      hexColor: '#ef4444',
      icon: <HugeiconsIcon icon={Book02Icon} size={28} />
    },
    {
      id: 'expertise',
      label: 'مهارت‌ها',
      enTitle: 'SKILLS & EXPERTISE',
      badge: 'بنتو نامتقارن شیشه‌ای',
      colorName: 'teal',
      hexColor: '#14b8a6',
      icon: <HugeiconsIcon icon={SparklesIcon} size={28} />
    },
    {
      id: 'tools',
      label: 'جعبه‌ابزار AI',
      enTitle: 'AI STACK & TOOLS',
      badge: '۲۹ ابزار دستیار و مدیا',
      colorName: 'indigo',
      hexColor: '#6366f1',
      icon: <HugeiconsIcon icon={CloudIcon} size={28} />
    },
    {
      id: 'interactive-lab',
      label: 'کنترل‌های الاستیک',
      enTitle: 'INTERACTIVE LAB',
      badge: 'اسلایدرهای فیزیک الاستیک',
      colorName: 'green',
      hexColor: '#84cc16',
      icon: <HugeiconsIcon icon={SlidersHorizontalIcon} size={28} />
    },
    {
      id: 'contact',
      label: 'تماس و همکاری',
      enTitle: 'CONTACT & COLLAB',
      badge: 'شروع همکاری و ارتباط مستقیم',
      colorName: 'pink',
      hexColor: '#ec4899',
      icon: <HugeiconsIcon icon={Mail01Icon} size={28} />
    }
  ], []);

  // Open & Close Handlers
  const openFolder = useCallback((id: FolderId) => {
    setActiveFolder(id);
    document.body.style.overflow = 'hidden';
    try {
      window.history.pushState(null, '', `#${id}`);
    } catch {
      // Fallback
    }
  }, []);

  const closeFolder = useCallback(() => {
    setActiveFolder(null);
    document.body.style.overflow = '';
    try {
      window.history.pushState(null, '', window.location.pathname);
    } catch {
      // Fallback
    }
  }, []);

  // Navigation between folders inside the modal
  const activeIndex = useMemo(() => {
    return activeFolder ? folders.findIndex(f => f.id === activeFolder) : -1;
  }, [activeFolder, folders]);

  const goToNext = useCallback(() => {
    if (activeIndex === -1) return;
    const nextIdx = (activeIndex + 1) % folders.length;
    openFolder(folders[nextIdx].id);
  }, [activeIndex, folders, openFolder]);

  const goToPrev = useCallback(() => {
    if (activeIndex === -1) return;
    const prevIdx = (activeIndex - 1 + folders.length) % folders.length;
    openFolder(folders[prevIdx].id);
  }, [activeIndex, folders, openFolder]);

  // Handle URL hash changes & keyboard ESC
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const matched = folders.find(f => f.id === hash);
      if (matched) {
        setActiveFolder(matched.id);
        document.body.style.overflow = 'hidden';
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeFolder();
      } else if (activeFolder) {
        if (e.key === 'ArrowLeft') {
          // In RTL, left arrow moves to next
          goToNext();
        } else if (e.key === 'ArrowRight') {
          // In RTL, right arrow moves to prev
          goToPrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [folders, activeFolder, closeFolder, goToNext, goToPrev]);

  // Construct items for React Bits <GlassIcons />
  const glassItems: GlassIconsItem[] = useMemo(() => {
    return folders.map(f => ({
      id: f.id,
      label: f.label,
      color: f.colorName,
      icon: f.icon,
      onClick: () => openFolder(f.id)
    }));
  }, [folders, openFolder]);

  // Active folder metadata
  const currentMeta = useMemo(() => {
    return folders.find(f => f.id === activeFolder) ?? null;
  }, [folders, activeFolder]);

  // Snap Rail: the glide pill measures the active chip before moving
  useLayoutEffect(() => {
    const rail = railRef.current;
    if (!rail || !activeFolder) return;
    const measure = () => {
      const el = rail.querySelector<HTMLElement>(`[data-rail-id="${activeFolder}"]`);
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [activeFolder]);

  return (
    <section className="hub-dock" aria-label="پوشه‌های رزومه">
      <div className="glass-icons-stage-wrapper">
        <GlassIcons
          items={glassItems}
          size={iconSize}
          gap={gap}
          columns={columns}
          roundness={0.6}
          refraction={0.8}
          bevel={0.6}
          dispersion={0}
          frost={0.2}
          shine={0.85}
          tint={currentTheme === 'light' ? '#ffffff' : '#dfdfdf'}
          tintOpacity={currentTheme === 'light' ? 0.35 : 0.2}
          iconColor="#ffffff"
          plate="offset"
          tilt={30}
          spread={0.5}
          hover="lift"
          parallax={1}
          labels="always"
          intro={true}
          theme={currentTheme}
        />
      </div>

      {/* ======================================================================
          FULLSCREEN IMMERSIVE DOSSIER MODAL VIEW
          ====================================================================== */}
      {activeFolder && currentMeta && createPortal(
        <div className="folder-fullscreen-overlay" role="dialog" aria-modal="true">
          {/* Top Sticky Navigation Bar */}
          <div className="folder-modal-topbar">
            {/* Right: Active Folder Badge */}
            <div className="folder-topbar-right">
              <div
                className="folder-active-badge"
                style={{ borderColor: `${currentMeta.hexColor}60` }}
              >
                <span className="badge-icon" style={{ color: currentMeta.hexColor }}>
                  {currentMeta.icon}
                </span>
                <span>{currentMeta.label}</span>
                <span className="badge-meta font-latin text-xs opacity-60">[{currentMeta.badge}]</span>
              </div>
            </div>

            {/* Center: Breadcrumb Path */}
            <div className="folder-topbar-center font-latin">
              <span className="breadcrumb-root">ALDMC // WORKSPACE</span>
              <span>/</span>
              <span className="breadcrumb-active" style={{ color: currentMeta.hexColor }}>
                <ScrambleText key={currentMeta.id} text={currentMeta.enTitle} />
              </span>
            </div>

            {/* Left: Essential Back Button with Shortcut */}
            <div className="folder-topbar-left">
              <button
                type="button"
                className="folder-back-button font-peyda"
                onClick={closeFolder}
                aria-label="بازگشت به پوشه‌ها"
              >
                <ArrowRight size={16} />
                <span>بازگشت به پوشه‌ها</span>
                <kbd className="kbd-shortcut font-latin">ESC</kbd>
              </button>

              <button
                type="button"
                className="folder-close-icon-btn"
                onClick={closeFolder}
                aria-label="بستن"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Main Scrollable Content */}
          <div
            className="folder-modal-body"
            ref={bodyRef}
            onScroll={e => setShowTop(e.currentTarget.scrollTop > 320)}
          >
            <div className="folder-modal-content-shell" key={activeFolder}>
              {activeFolder === 'about' && <About />}
              {activeFolder === 'projects' && <ProjectsFolderView />}
              {activeFolder === 'experience' && <ExperienceFolderView />}
              {activeFolder === 'teaching' && <TeachingFolderView />}
              {activeFolder === 'expertise' && <Expertise />}
              {activeFolder === 'tools' && <Tools />}
              {activeFolder === 'interactive-lab' && <ElasticSliderShowcase />}
              {activeFolder === 'contact' && <Contact />}
            </div>
          </div>

          <button
            type="button"
            className={`folder-top-btn${showTop ? ' is-visible' : ''}`}
            onClick={() => bodyRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="بازگشت به بالا"
          >
            <ArrowUp size={18} />
          </button>

          {/* Modal Bottom Switcher Controls */}
          <div className="folder-modal-bottom-bar font-peyda">
            <button type="button" className="folder-nav-pill-btn" onClick={goToPrev} aria-label="پوشه قبلی">
              <ChevronRight size={16} />
              <span>قبلی</span>
            </button>

            <div className="folder-rail" ref={railRef} role="tablist" aria-label="پوشه‌ها">
              {pill && (
                <span
                  className="folder-rail-pill"
                  style={{
                    left: pill.left,
                    width: pill.width,
                    background: `${currentMeta.hexColor}26`,
                    borderColor: `${currentMeta.hexColor}66`
                  }}
                />
              )}
              {folders.map(f => (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={f.id === activeFolder}
                  data-rail-id={f.id}
                  className={`folder-rail-chip${f.id === activeFolder ? ' is-active' : ''}`}
                  style={f.id === activeFolder ? { color: f.hexColor } : undefined}
                  onClick={() => openFolder(f.id)}
                  title={f.label}
                >
                  <span className="folder-rail-icon">{f.icon}</span>
                  <span className="folder-rail-label">{f.label}</span>
                </button>
              ))}
            </div>

            <button type="button" className="folder-nav-pill-btn" onClick={goToNext} aria-label="پوشه بعدی">
              <span>بعدی</span>
              <ChevronLeft size={16} />
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default GlassFolderHub;
