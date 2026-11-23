import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { ArrowDown, ArrowUpLeft, MapPin } from 'lucide-react';
import { site } from '../../data/site';
import { BrandIntro } from '../ui/BrandIntro';
import { Logo } from '../ui/Logo';

type PortraitState = 'loading' | 'ready' | 'unavailable';

export function Hero() {
  const [portrait, setPortrait] = useState<PortraitState>('loading');

  return (
    <section id="home" className="hero" aria-labelledby="hero-name">
      <Container fluid className="hero__layout">
        <div className="hero__intro">
          <h1 id="hero-name">{site.name}</h1>
          <p className="hero__role">طراح محصول و <bdi dir="ltr">UI/UX</bdi></p>
          <p className="hero__lead">طراحی تجربه‌های دیجیتال و ساخت نمونه‌های تعاملی با هوش مصنوعی.</p>
          <div className="hero__actions d-flex flex-wrap gap-tight">
            <Button href="#portfolio" size="sm">
              مشاهده نمونه‌کارها <ArrowDown size={17} aria-hidden="true" />
            </Button>
            <Button href="#contact" size="sm" variant="outline-primary">
              شروع همکاری <ArrowUpLeft size={17} aria-hidden="true" />
            </Button>
          </div>
        </div>

        <figure className="hero__portrait">
          <div className="hero__frame" data-state={portrait}>
            {portrait !== 'unavailable' && (
              <img
                src="/brand/hero-mobile-enhanced.webp"
                alt="پرترهٔ علی فرقانی"
                width={1882}
                height={3344}
                fetchPriority="high"
                onLoad={() => setPortrait('ready')}
                onError={() => setPortrait('unavailable')}
              />
            )}
            {portrait === 'loading' && (
              <div className="hero__placeholder" role="status">
                <Spinner animation="border" size="sm" aria-hidden="true" />
                <span>در حال بارگذاری پرتره</span>
              </div>
            )}
            {portrait === 'unavailable' && (
              <div className="hero__placeholder"><Logo width={114} /></div>
            )}
          </div>
          <figcaption>
            <Logo width={86} />
            <span className="d-inline-flex align-items-center gap-2">
              <MapPin size={15} aria-hidden="true" /> شیراز، ایران
            </span>
          </figcaption>
        </figure>

        <dl className="hero__stats">
          {site.stats.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <BrandIntro />
    </section>
  );
}

export default Hero;
