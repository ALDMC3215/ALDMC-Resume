import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { LiveOrb } from '../ui/LiveOrb';
import { GlassFolderHub } from './GlassFolderHub';
import { resumeData } from '../../data/resumeData';

/**
 * Single-screen editorial hero: oversized first/last name around an
 * arch-cropped portrait, with the glass folders docked at the bottom.
 */
export const Hero: React.FC = () => {
  const root = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 700);
  const { personalInfo } = resumeData;
  const [firstName, ...rest] = personalInfo.name.split(' ');
  const lastName = rest.join(' ');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } });
      tl.fromTo('.hero-topline', { opacity: 0 }, { opacity: 1, duration: 0.5 })
        .fromTo('.hero-arch-wrap', { opacity: 0, y: 24, scale: 0.97 }, { opacity: 1, y: 0, scale: 1 }, '-=0.3')
        .fromTo('.hero-name-first', { opacity: 0, x: 40 }, { opacity: 1, x: 0 }, '-=0.5')
        .fromTo('.hero-name-last', { opacity: 0, x: -40 }, { opacity: 1, x: 0 }, '<')
        .fromTo('.hero-role', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
        .fromTo('.hero-dock', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero-section hero-editorial-chapter" id="hero">
      <h1 className="visually-hidden">
        {personalInfo.name} — {personalInfo.title}
      </h1>

      <div className="hero-topline font-latin" aria-hidden="true">
        <span className="hero-topline-brand">{personalInfo.brand}</span>
        <span className="hero-topline-role">PRODUCT DESIGNER · AI SPECIALIST</span>
        <span className="hero-topline-place">{personalInfo.locationEn.toUpperCase()}</span>
      </div>

      <div className="hero-stage">
        <div className="hero-name-row" aria-hidden="true">
          <span className="hero-name hero-name-first">{firstName}</span>

          <div className="hero-arch-wrap">
            <div className="hero-arch">
              <img
                src="/brand/avatars/ali-forghani.webp"
                alt=""
                width={800}
                height={800}
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <LiveOrb
              className="hero-live-orb"
              variant="custom"
              color="#E76338"
              eyeColor="#F6F0E7"
              size={isMobile ? 56 : 84}
            />
          </div>

          <span className="hero-name hero-name-last">{lastName}</span>
        </div>

        <p className="hero-role">طراح محصول · رابط کاربری مدرن و راهکارهای خلاقانه با AI</p>
      </div>

      <div className="hero-dock">
        <GlassFolderHub />
      </div>
    </section>
  );
};

export default Hero;
