import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowLeft, MessageSquare, MoveDown } from 'lucide-react';
import { Lanyard } from '../ui/Lanyard';
import { LiveOrb } from '../ui/LiveOrb';
import { resumeData } from '../../data/resumeData';

export const Hero: React.FC = () => {
  const root = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 1024);
  const { personalInfo } = resumeData;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isReducedMotion) return;

      // Coordinated, high-end opening animation sequence (text first for near-instant FCP):
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.5 } });

      tl.fromTo('.hero-headline-name', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo('.hero-positioning', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.35')
        .fromTo('.hero-cta-group .btn', { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 }, '-=0.25')
        .fromTo('.hero-lanyard-stage', { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.6 }, '-=0.35')
        .fromTo('.hero-footer-strip', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2');
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero-section hero-editorial-chapter" id="hero">
      {/* Full-bleed, boundary-free 3D Lanyard Canvas covering the entire Hero section */}
      <div className="hero-lanyard-stage" aria-label="کارت آویز هویت دیزاین علی فرقانی (تعاملی)">
        <Lanyard
          frontImage="/brand/card-front.webp"
          backImage="/brand/card-back.png"
          strapImage="/brand/strap-band.png"
          cardColor="#F4F4F5"
          strapColor="#18181B"
          finish="glossy"
          metal="silver"
          orientation="portrait"
          cornerRadius={0.28}
          size={isMobile ? 0.38 : 0.48}
          anchor={isMobile ? 0.5 : 0.24}
          strapLength={isMobile ? 0.05 : 0.30}
          gravity={1}
          elasticity={0.55}
          damping={0.48}
          breeze={0.35}
          interactive={true}
          intro={true}
        />
      </div>

      <div className="container hero-chapter-container">
        {/* Main 2-Column Editorial Stage — Connected & Intentionally Balanced */}
        <div className="hero-main-stage">
          {/* Right Column: Dominant Typographic Anchor */}
          <div className="hero-text-anchor">
            {/* The Main Name is the Immediate Visual Focal Point */}
            <LiveOrb className="hero-live-orb" variant="custom" color="#E76338" eyeColor="#F6F0E7" size={isMobile ? 64 : 120} />
            <h1 className="hero-headline-name">
              {personalInfo.name}
            </h1>

            {/* Supporting Professional Positioning */}
            <p className="hero-positioning">
              طراح محصول - رابط کاربری مدرن و راهکارهای خلاقانه با AI
            </p>

            {/* Two Main Functional CTAs */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary btn-pill hero-primary-btn">
                <span>مشاهده پروژه‌های منتخب</span>
                <ArrowLeft size={16} />
              </a>

              <a href="#contact" className="btn btn-secondary btn-pill hero-secondary-btn">
                <span>شروع همکاری</span>
                <MessageSquare size={14} />
              </a>
            </div>
          </div>

          {/* Left Column Spacer: reserves exact visual balance for the hanging card */}
          <div className="hero-visual-spacer" aria-hidden="true" />
        </div>

        {/* Bottom Editorial Footnote & Proof Points */}
        <div className="hero-footer-strip">
          <div className="hero-proof-metrics">
            <span className="proof-item">
              <strong className="proof-accent">۳+ سال</strong> تجربه طراحی محصول و رابط کاربری
            </span>
            <span className="proof-sep">/</span>
            <span className="proof-item">
              مدرس مهارت‌های <strong className="proof-accent font-latin">AI</strong> و <strong className="proof-accent font-latin">Design</strong>
            </span>
            <span className="proof-sep">/</span>
            <span className="proof-item">
              توسعه فرانت‌اند و پروتوتایپینگ زنده با هوش مصنوعی
            </span>
          </div>

          <a href="#projects" className="hero-scroll-cue font-latin" aria-label="اسکرول به بخش پروژه‌ها">
            <span>SCROLL TO EXPLORE</span>
            <MoveDown size={14} className="cue-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
