import React from 'react';
import { Monogram } from '../ui/Monogram';
import { ArrowLeft, Sparkles, MapPin, Layers } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export const Hero: React.FC = () => {
  const { personalInfo } = resumeData;

  return (
    <section className="hero-section" id="hero">
      {/* Background Architectural Brand Elements */}
      <div className="hero-bg-monogram" aria-hidden="true">
        <Monogram width="100%" color="var(--border-subtle)" />
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Main Editorial Content Column */}
          <div className="hero-content">
            {/* Top Status & Location Bar */}
            <div className="hero-meta-row">
              <div className="status-indicator-pill">
                <span className="status-ping" />
                <span className="status-text">{personalInfo.availability}</span>
              </div>

              <div className="hero-location-tag">
                <MapPin size={14} className="location-icon" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Oversized Headline */}
            <div className="hero-title-group">
              <span className="hero-english-kicker font-latin">A/F. DESIGN × AI</span>
              <h1 className="hero-main-title">{personalInfo.name}</h1>
              <h2 className="hero-subtitle">{personalInfo.title}</h2>
            </div>

            {/* Supporting Thesis Statement */}
            <blockquote className="hero-thesis">
              <Sparkles size={18} className="thesis-icon text-brand-orange" />
              <span>«{personalInfo.supportingStatement}»</span>
            </blockquote>

            {/* Intro Paragraph */}
            <p className="hero-intro-text">{personalInfo.intro}</p>

            {/* Dual CTAs */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>مشاهده پروژه‌ها</span>
                <ArrowLeft size={18} className="cta-arrow" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>ارتباط با من</span>
              </a>
            </div>

            {/* Quick Highlight Badges */}
            <div className="hero-pills-row">
              <span className="hero-pill">
                <Layers size={14} />
                <span>طراحی محصول و سیستم‌های دیزاین</span>
              </span>
              <span className="hero-pill font-latin">
                <span>Vibe Coding & Rapid Prototyping</span>
              </span>
              <span className="hero-pill font-latin">
                <span>Generative AI Media</span>
              </span>
            </div>
          </div>

          {/* Asymmetric Visual Signature Card with Real Photo */}
          <div className="hero-visual-col">
            <div className="hero-signature-card">
              <div className="signature-card-inner">
                <div className="signature-card-header">
                  <div className="signature-avatar-wrapper rounded-xl overflow-hidden border border-brand-orange/40">
                    <img
                      src="/brand/avatars/ali-forghani.webp"
                      alt="Ali Forghani / ALDMC"
                      className="signature-avatar w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="signature-name font-latin">ALI FORGHANI</h3>
                    <p className="signature-role font-latin">PRODUCT DESIGNER & AI SPECIALIST</p>
                  </div>
                </div>

                <div className="signature-card-quote">
                  <p>
                    «از ایده و طراحی رابط در Figma تا پیش بردن نمونه‌های قابل اجرا با کمک AI و بررسی کیفیت اجرا.»
                  </p>
                </div>

                <div className="signature-card-footer">
                  <div className="signature-stamp">
                    <Monogram width={24} color="var(--brand-orange)" />
                    <span className="font-latin text-xs">OFFICIAL PORTFOLIO · 2026</span>
                  </div>
                  <span className="signature-verified-tag font-latin">SHIRAZ, IR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
