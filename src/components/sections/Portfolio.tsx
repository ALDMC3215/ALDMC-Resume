import React, { lazy, Suspense, useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ExternalLink, ImageOff, X } from 'lucide-react';
import { TagList } from '../ui/TagList';
import { MediaCard } from '../ui/MediaCard';
import { CardGrid } from '../ui/CardGrid';
import { ResumeSection } from '../ui/ResumeSection';
import { categoryLabels, portfolio } from '../../data/portfolio';
import type { PortfolioCategory, PortfolioItem } from '../../data/portfolio';

const Modal = lazy(() => import('react-bootstrap/Modal'));

type Filter = 'all' | PortfolioCategory;

const domainOf = (url?: string) => (url ? url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : undefined);

/** Image, or a clean slot (real link / label) when no real image exists yet. */
const Media: React.FC<{ item: PortfolioItem; srcOverride?: string }> = ({ item, srcOverride }) => {
  const src = srcOverride ?? item.image;
  return src ? (
    <img src={src} alt={`پیش‌نمایش ${item.title}`} loading="lazy" decoding="async" />
  ) : (
    <div className="d-flex h-100 flex-column align-items-center justify-content-center media-slot" data-needs-image={item.id}>
      <ImageOff size={40} strokeWidth={1.2} aria-hidden="true" />
      <span className="lt">{domainOf(item.link) ?? item.label}</span>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [openId, setOpenId] = useState<string | null>(null);
  const [dsMode, setDsMode] = useState<'dark' | 'light'>('dark');

  const categories = useMemo(() => {
    const present = Array.from(new Set(portfolio.map(p => p.category)));
    return ['all', ...present] as Filter[];
  }, []);

  const items = filter === 'all' ? portfolio : portfolio.filter(p => p.category === filter);
  const open = portfolio.find(p => p.id === openId) ?? null;

  return (
    <ResumeSection
      id="portfolio"
      title="نمونه‌کارها"
      sub="مجموعه‌ای از طراحی‌های محصول، پورتال‌های سازمانی، وبسایت‌های تعاملی و تولیدات هوش مصنوعی"
    >
      <div className="d-flex flex-wrap gap-tight filters" role="group" aria-label="فیلتر نمونه‌کارها">
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

      <CardGrid xs={1} sm={2} xl={3} className="portfolio-grid">
        {items.map(item => (
          <MediaCard
            key={item.id}
            className={filter === 'all' && item.id === 'picofy-landing' ? 'work--feature' : undefined}
            title={item.title}
            caption={item.label}
            onClick={() => setOpenId(item.id)}
            aria-haspopup="dialog"
          >
            <Media item={item} />
            {item.kind && <span className="position-absolute work__kind lt">{item.kind}</span>}
          </MediaCard>
        ))}
      </CardGrid>

      {open && (
        <Suspense fallback={null}>
          <Modal
            show
            centered
            onHide={() => setOpenId(null)}
            animation={false}
            aria-labelledby="modal-title"
            contentClassName="modal__panel"
            dialogClassName="project-dialog"
          >
            <button type="button" autoFocus className="position-absolute d-grid modal__close" aria-label="بستن" onClick={() => setOpenId(null)}>
              <X size={22} aria-hidden="true" />
            </button>

            <div className="d-flex flex-column overflow-hidden modal__media-col">
              <div className="position-relative d-flex align-items-center justify-content-center overflow-hidden modal__media">
                <Media
                  item={open}
                  srcOverride={
                    open.id === 'aldmc-design-system'
                      ? dsMode === 'dark'
                        ? '/brand/design-system/components-dark.svg'
                        : '/brand/design-system/components-light.svg'
                      : undefined
                  }
                />
                {open.kind && <span className="position-absolute work__kind lt">{open.kind}</span>}
              </div>

              {open.id === 'aldmc-design-system' && (
                <div className="d-flex align-items-center flex-wrap ds-switcher" role="group" aria-label="انتخاب تم دیزاین سیستم">
                  <Button
                    type="button"
                    variant={dsMode === 'dark' ? 'primary' : 'outline-primary'} size="sm"
                    onClick={() => setDsMode('dark')}
                  >
                    <span>تم تیره (Charcoal)</span>
                  </Button>
                  <Button
                    type="button"
                    variant={dsMode === 'light' ? 'primary' : 'outline-primary'} size="sm"
                    onClick={() => setDsMode('light')}
                  >
                    <span>تم روشن (Paper)</span>
                  </Button>
                  <Button
                    href={dsMode === 'dark' ? '/brand/design-system/components-dark.svg' : '/brand/design-system/components-light.svg'}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline-primary" size="sm"
                    style={{ marginInlineStart: 'auto' }}
                  >
                    <span>مشاهده فایل وکتور SVG</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </Button>
                </div>
              )}
            </div>

            <div className="d-flex flex-column align-items-start modal__body">
              <span className="modal__label lt">{open.label}</span>
              <h3 className="modal__title" id="modal-title">
                {open.title}
              </h3>
              <p className="modal__role">{open.role}</p>
              <p className="modal__text">{open.summary}</p>
              {open.extra && <p className="modal__text">{open.extra}</p>}
              <TagList tags={open.tags} />
              {open.link && (
                <Button href={open.link} target="_blank" rel="noopener noreferrer" size="sm" className="modal__link">
                  <span>مشاهده پروژه</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </Button>
              )}
            </div>
          </Modal>
        </Suspense>
      )}
    </ResumeSection>
  );
};

export default Portfolio;
