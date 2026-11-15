import React from 'react';
import { Socials } from '../ui/Socials';
import { site } from '../../data/site';

export const Hero: React.FC = () => (
  <section id="home" className="hero" aria-labelledby="hero-name">
    <div className="hero__glow" aria-hidden="true" />
    <div className="container hero__grid">
      <div className="hero__text">
        <div className="hero__hi">
          <p className="hero__greet">سلام، من</p>
          <h1 className="hero__name" id="hero-name">
            {site.name}
          </h1>
        </div>

        <p className="hero__headline">
          طراح محصول و <span className="lt">UI/UX</span>
        </p>
        <p className="hero__lead">{site.title}</p>

        <Socials />

        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">
            شروع همکاری
          </a>
          <a href="#portfolio" className="btn btn--outline">
            مشاهده نمونه‌کارها
          </a>
        </div>

        <dl className="hero__stats">
          {site.stats.map(s => (
            <div key={s.label} className="hero__stat">
              <dd>{s.value}</dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero__photo">
        <span className="hero__circle" aria-hidden="true" />
        <div className="hero__oval">
          <img src={site.portrait.src} alt={`${site.name}، ${site.title}`} width={800} height={800} fetchPriority="high" decoding="async" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
