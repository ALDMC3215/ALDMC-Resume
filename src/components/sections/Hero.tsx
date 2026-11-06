import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

/**
 * Centered editorial hero: oversized light first/last name around a
 * rounded portrait, role and a short intro underneath.
 */
export const Hero: React.FC = () => {
  const root = useRef<HTMLElement | null>(null);
  const { personalInfo } = resumeData;
  const [firstName, ...rest] = personalInfo.name.split(' ');
  const lastName = rest.join(' ');

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
      tl.fromTo('.site-hero__kicker', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo('.site-hero__photo', { opacity: 0, y: 28, scale: 0.97 }, { opacity: 1, y: 0, scale: 1 }, '-=0.25')
        .fromTo('.site-hero__first', { opacity: 0, x: 40 }, { opacity: 1, x: 0 }, '-=0.55')
        .fromTo('.site-hero__last', { opacity: 0, x: -40 }, { opacity: 1, x: 0 }, '<')
        .fromTo('.site-hero__role, .site-hero__intro, .site-hero__cue', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, '-=0.4');
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="site-hero" id="hero">
      <h1 className="visually-hidden">
        {personalInfo.name} — {personalInfo.title}
      </h1>

      <p className="site-hero__kicker font-latin" aria-hidden="true">
        {personalInfo.brand} · PORTFOLIO &amp; RESUME · {personalInfo.locationEn.toUpperCase()}
      </p>

      <div className="site-hero__row" aria-hidden="true">
        <span className="site-hero__name site-hero__first">{firstName}</span>
        <div className="site-hero__photo">
          <img src="/brand/avatars/ali-forghani.webp" alt="" width={800} height={800} decoding="async" fetchPriority="high" />
        </div>
        <span className="site-hero__name site-hero__last">{lastName}</span>
      </div>

      <p className="site-hero__role">طراح محصول · رابط کاربری مدرن و راهکارهای خلاقانه با AI</p>
      <p className="site-hero__intro">{personalInfo.intro}</p>

      <a href="#sec-about" className="site-hero__cue font-latin" aria-label="ادامه">
        <span>SCROLL</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
};

export default Hero;
