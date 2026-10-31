import React from 'react';
import { Monogram } from '../ui/Monogram';
import { ArrowLeft, Sparkles, MapPin, Layers } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export const Hero: React.FC = () => {
  const { personalInfo } = resumeData;

  return (
    <section className="hero-section" id="hero">
      {/* Background Architectural Brand Monogram Element */}
      <div className="hero-bg-monogram" aria-hidden="true">
        <Monogram width="100%" color="var(--border-subtle)" />
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Main Content Column (Right in RTL) */}
          <div className="hero-content">
            {/* Unified Eyebrow & Status Row */}
            <div className="hero-eyebrow-row">
              <span className="hero-kicker-badge font-latin">A/F. DESIGN × AI</span>
              <div className="hero-meta-chip">
                <MapPin size={13} className="text-brand-orange flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="hero-status-chip-inline">
                <span className="status-ping-sm" />
                <span className="hero-availability-text">{personalInfo.availability}</span>
              </div>
            </div>

            {/* Display Headlines */}
            <div className="hero-title-group">
              <h1 className="hero-main-title">{personalInfo.name}</h1>
              <h2 className="hero-subtitle">
                <span className="hero-subtitle-primary">طراح محصول، UI/UX</span>
                <span className="hero-subtitle-sep"> و </span>
                <span className="hero-subtitle-accent">راهکارهای خلاقانه با هوش مصنوعی</span>
              </h2>
            </div>

            {/* Refined Editorial Thesis Callout */}
            <div className="hero-thesis-block">
              <div className="hero-thesis-content">
                <Sparkles size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="hero-thesis-quote">
                  «{personalInfo.supportingStatement}»
                </span>
              </div>
            </div>

            {/* Intro Paragraph */}
            <p className="hero-intro-text">{personalInfo.intro}</p>

            {/* Dual CTAs */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary hero-btn-main">
                <span>مشاهده پروژه‌ها</span>
                <ArrowLeft size={16} className="cta-arrow" />
              </a>
              <a href="#contact" className="btn btn-secondary hero-btn-sub">
                <span>ارتباط با من</span>
              </a>
            </div>

            {/* Core Capability Strip */}
            <div className="hero-pillars-strip">
              <div className="hero-pillar-chip">
                <Layers size={14} className="text-brand-orange flex-shrink-0" />
                <span>طراحی محصول و تجربه کاربری</span>
              </div>
              <div className="hero-pillar-chip font-latin">
                <span>Vibe Coding & Rapid Prototyping</span>
              </div>
              <div className="hero-pillar-chip font-latin">
                <span>Generative AI Media</span>
              </div>
            </div>
          </div>

          {/* Editorial Creator Showcase Profile (Left in RTL) */}
          <div className="hero-visual-col">
            <div className="creator-profile-card card-editorial">
              {/* Top Bar with Status and Monogram */}
              <div className="creator-card-top-bar">
                <div className="creator-monogram-stamp">
                  <Monogram width={18} color="var(--brand-orange)" />
                </div>
                <div className="creator-status-chip">
                  <span className="status-ping-sm" />
                  <span>آماده پروژه‌های منتخب</span>
                </div>
              </div>

              {/* Circular Creator Avatar Frame */}
              <div className="creator-avatar-section">
                <div className="creator-avatar-ring">
                  <img
                    src="/brand/avatars/ali-forghani.webp"
                    alt="Ali Forghani - علی فرقانی"
                    className="creator-avatar-img"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Creator Info Footer */}
              <div className="creator-card-footer">
                <div className="creator-name-row">
                  <div>
                    <h3 className="creator-name-fa">علی فرقانی</h3>
                    <span className="creator-name-en font-latin">ALI FORGHANI</span>
                  </div>
                  <span className="creator-tag-v6 font-latin">PORTFOLIO · 2026</span>
                </div>

                <p className="creator-role-tagline font-latin">
                  Product Designer · AI Creative Specialist
                </p>

                <div className="creator-card-specs">
                  <span className="creator-spec-pill">
                    <Sparkles size={11} className="text-brand-orange" />
                    <span>Product Design & UI/UX</span>
                  </span>
                  <span className="creator-spec-pill font-latin">
                    <span>Vibe Coding</span>
                  </span>
                  <span className="creator-spec-pill font-latin">
                    <span>Next.js</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
