import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ExternalLink, ImageOff, X } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { categoryLabels, portfolio } from '../../data/portfolio';
import type { PortfolioCategory, PortfolioItem } from '../../data/portfolio';

type Filter = 'all' | PortfolioCategory;

const domainOf = (url?: string) => (url ? url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : undefined);

/** Image, or a clean slot (real link / label) when no real image exists yet. */
const Media: React.FC<{ item: PortfolioItem }> = ({ item }) =>
  item.image ? (
    <img src={item.image} alt={`پیش‌نمایش ${item.title}`} loading="lazy" decoding="async" />
  ) : (
    <div className="media-slot" data-needs-image={item.id}>
      <ImageOff size={40} strokeWidth={1.2} aria-hidden="true" />
      <span className="lt">{domainOf(item.link) ?? item.label}</span>
    </div>
  );

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [openId, setOpenId] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const categories = useMemo(() => {
    const present = Array.from(new Set(portfolio.map(p => p.category)));
    return ['all', ...present] as Filter[];
  }, []);

  const items = filter === 'all' ? portfolio : portfolio.filter(p => p.category === filter);
  const open = portfolio.find(p => p.id === openId) ?? null;

  useEffect(() => {
    if (!open) return undefined;
    lastFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenId(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      lastFocus.current?.focus();
    };
  }, [open]);

  return (
    <section id="portfolio" className="section" aria-labelledby="portfolio-title">
      <div className="container">
        <Heading
          id="portfolio-title"
          title="نمونه‌کارها"
          sub="مجموعه‌ای از طراحی‌های محصول، پورتال‌های سازمانی، وبسایت‌های تعاملی و تولیدات هوش مصنوعی"
        />

        <div className="filters" role="group" aria-label="فیلتر نمونه‌کارها">
          {categories.map(c => (
            <button
              key={c}
              type="button"
              className={`filters__btn${filter === c ? ' is-active' : ''}`}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c === 'all' ? 'همه' : categoryLabels[c]}
            </button>
          ))}
        </div>

        <ul className="works">
          {items.map(item => (
            <li key={item.id}>
              <button type="button" className="work" onClick={() => setOpenId(item.id)} aria-haspopup="dialog">
                <span className="work__media">
                  <Media item={item} />
                  {item.kind && <span className="work__kind lt">{item.kind}</span>}
                </span>
                <span className="work__caption">
                  <span className="work__title">{item.title}</span>
                  <span className="work__cat lt">{item.label}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={() => setOpenId(null)}>
          <div className="modal__panel" onClick={e => e.stopPropagation()}>
            <button type="button" ref={closeRef} className="modal__close" aria-label="بستن" onClick={() => setOpenId(null)}>
              <X size={22} aria-hidden="true" />
            </button>

            <div className="modal__media">
              <Media item={open} />
              {open.kind && <span className="work__kind lt">{open.kind}</span>}
            </div>

            <div className="modal__body">
              <span className="modal__label lt">{open.label}</span>
              <h3 className="modal__title" id="modal-title">
                {open.title}
              </h3>
              <p className="modal__role">{open.role}</p>
              <p className="modal__text">{open.summary}</p>
              {open.extra && <p className="modal__text">{open.extra}</p>}
              <ul className="job__tags">
                {open.tags.map(t => (
                  <li key={t} className="chip lt">
                    {t}
                  </li>
                ))}
              </ul>
              {open.link && (
                <a href={open.link} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm modal__link">
                  <span>مشاهده پروژه</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
