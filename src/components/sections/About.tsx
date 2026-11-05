import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { resumeData } from '../../data/resumeData';
import { Sparkles, ChevronDown, Target, Zap, ShieldCheck, ArrowLeft } from 'lucide-react';

export const About: React.FC = () => {
  const root = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const { personalInfo, coreApproach } = resumeData;

  // Entrance animation for initial viewport load
  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            el.querySelectorAll('.about-anim-in'),
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: 'power2.out',
            }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleToggle = () => {
    if (isExpanded) {
      // If closing, smoothly re-align to card top if scrolled deep into expanded content
      const cardEl = cardRef.current;
      if (cardEl) {
        const rect = cardEl.getBoundingClientRect();
        if (rect.top < 80) {
          const targetY = window.scrollY + rect.top - 84;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }
    }
    setIsExpanded(prev => !prev);
  };

  return (
    <section ref={root} className="about-section" id="about">
      <div className="container about-container">
        {/* Section Header with standard clearance from floating PillNav */}
        <div className="section-header about-header about-anim-in">
          <div className="section-kicker">
            <span className="about-kicker-dot" />
            <span className="font-latin">ABOUT &amp; PHILOSOPHY</span>
          </div>
          <h2 className="section-title">
            درباره <span className="accent-word">من</span>
          </h2>
          <p className="section-desc">طراحی، اجرا و خلاقیت در یک مسیر پیوسته و هدفمند</p>
        </div>

        {/* The Master Expandable Editorial Card */}
        <div
          ref={cardRef}
          className={`about-editorial-card about-anim-in ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
        >
          {/* Card Top Meta / Status Strip */}
          <div className="about-card-top-bar">
            <div className="about-role-badge">
              <Sparkles size={13} className="text-brand-orange" />
              <span>طراح محصول &amp; مدرس</span>
            </div>
            <div className="about-meta-pills">
              <span className="about-meta-pill font-latin">{personalInfo.brand}</span>
              <span className="about-meta-dot">·</span>
              <span className="about-meta-pill font-latin">{personalInfo.locationEn.toUpperCase()}</span>
            </div>
          </div>

          {/* Core Headline */}
          <h3 className="about-editorial-headline">
            طراحی محصول، هدایت تجربه و تسریع توسعه با هوش مصنوعی
          </h3>

          {/* Primary Introduction (Visible Teaser) */}
          <div className="about-teaser-block">
            <p className="about-teaser-paragraph">
              {personalInfo.bio}
            </p>

            {/* Gradient Fade Overlay in Collapsed State */}
            {!isExpanded && <div className="about-fade-overlay" aria-hidden="true" />}
          </div>

          {/* Action Button: بیشتر درباره من / بستن */}
          <div className="about-toggle-row">
            <button
              type="button"
              onClick={handleToggle}
              className="about-toggle-btn"
              aria-expanded={isExpanded}
              aria-controls="about-extended-content"
            >
              <span>{isExpanded ? 'بستن' : 'بیشتر درباره من'}</span>
              <ChevronDown
                size={16}
                className={`about-toggle-chevron ${isExpanded ? 'is-rotated' : ''}`}
              />
            </button>
          </div>

          {/* Smoothly Expandable Editorial Content */}
          <div
            id="about-extended-content"
            className={`about-expandable-wrapper ${isExpanded ? 'is-open' : 'is-closed'}`}
            aria-hidden={!isExpanded}
          >
            <div className="about-expandable-inner">
              {/* Editorial Section 1: Scope of Ownership */}
              <div className="about-editorial-divider" />
              <div className="about-editorial-section">
                <div className="about-section-subtitle-wrap">
                  <span className="about-section-num font-latin">01</span>
                  <h4 className="about-section-heading">دامنه مسئولیت در چرخه محصول</h4>
                </div>
                <div className="about-scope-cards-row">
                  <div className="scope-item-card">
                    <div className="scope-item-top">
                      <span className="scope-badge font-latin">01</span>
                      <span className="scope-name-en font-latin">Visual Direction</span>
                    </div>
                    <h5 className="scope-name-fa">جهت بصری و دیزاین سیستم</h5>
                    <p className="scope-desc">
                      تعریف هویت بصری، هماهنگی تایپوگرافی، پالت رنگی و خلق سیستم‌های دیزاین مقیاس‌پذیر در Figma.
                    </p>
                  </div>

                  <div className="scope-item-card">
                    <div className="scope-item-top">
                      <span className="scope-badge font-latin">02</span>
                      <span className="scope-name-en font-latin">UX &amp; Interface</span>
                    </div>
                    <h5 className="scope-name-fa">طراحی تعامل و تجربه کاربر</h5>
                    <p className="scope-desc">
                      معماری اطلاعات، ساخت جریان‌های کاربری روان و تبدیل سناریوهای پیچیده به رابط‌های ساده و کارآمد.
                    </p>
                  </div>

                  <div className="scope-item-card">
                    <div className="scope-item-top">
                      <span className="scope-badge font-latin">03</span>
                      <span className="scope-name-en font-latin">QA &amp; Polish</span>
                    </div>
                    <h5 className="scope-name-fa">بازبینی اجرا و کنترل کیفیت</h5>
                    <p className="scope-desc">
                      تطبیق دقیق اجرای فرانت‌اند با طراحی اصلی، نظارت موشکافانه بر فاصله‌ها، کنتراست و پایداری در موبایل.
                    </p>
                  </div>
                </div>
              </div>

              {/* Editorial Section 2: Mindset & Vision */}
              <div className="about-editorial-divider" />
              <div className="about-editorial-section">
                <div className="about-section-subtitle-wrap">
                  <span className="about-section-num font-latin">02</span>
                  <h4 className="about-section-heading">دیدگاه من در خلق محصول</h4>
                </div>
                <p className="about-mindset-lead">
                  دیزاین ابزاری است برای حل مسائل واقعی کاربران و خلق تجربه روان و پایدار؛ با شتاب‌دهی هوش مصنوعی فاصله میان ایده تا خروجی نهایی را کمینه می‌کنم.
                </p>

                <div className="about-principles-editorial-grid">
                  <div className="principle-editorial-item">
                    <div className="principle-icon-box">
                      <Target size={16} className="text-brand-orange" />
                    </div>
                    <div className="principle-content-wrap">
                      <h5 className="principle-item-title">کاربردپذیری و تجربه روان</h5>
                      <p className="principle-item-sub">
                        تمرکز بر نیاز واقعی کاربر، جریان بصری بدون اصطکاک و رعایت دقیق استانداردهای دسترسی‌پذیری.
                      </p>
                    </div>
                  </div>

                  <div className="principle-editorial-item">
                    <div className="principle-icon-box">
                      <Zap size={16} className="text-brand-orange" />
                    </div>
                    <div className="principle-content-wrap">
                      <h5 className="principle-item-title">توسعه چابک با هوش مصنوعی</h5>
                      <p className="principle-item-sub">
                        ساخت سریع پروتوتایپ‌های زنده، اعتبارسنجی فرضیه‌ها در چرخه واقعی و پیاده‌سازی سریع ایده‌ها.
                      </p>
                    </div>
                  </div>

                  <div className="principle-editorial-item">
                    <div className="principle-icon-box">
                      <ShieldCheck size={16} className="text-brand-orange" />
                    </div>
                    <div className="principle-content-wrap">
                      <h5 className="principle-item-title">وسواس در کیفیت اجرا</h5>
                      <p className="principle-item-sub">
                        بازبینی موشکافانه تایپوگرافی، کنتراست رنگی، انیمیشن‌های باوقار و هماهنگی بدون نقص در دیوایس‌های مختلف.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editorial Section 3: Work Process */}
              <div className="about-editorial-divider" />
              <div className="about-editorial-section">
                <div className="about-section-subtitle-wrap">
                  <span className="about-section-num font-latin">03</span>
                  <h4 className="about-section-heading">رویکرد کاری: از ایده تا محصول زنده</h4>
                </div>

                <div className="about-process-editorial-timeline">
                  {coreApproach.map((item, idx) => (
                    <React.Fragment key={item.step}>
                      <div className="process-timeline-card">
                        <div className="process-timeline-head">
                          <span className="process-step-badge font-latin">{item.step}</span>
                          <div className="process-titles-group">
                            <h5 className="process-title-fa">{item.title}</h5>
                            <span className="process-title-en font-latin">{item.titleEn}</span>
                          </div>
                        </div>
                        <p className="process-timeline-desc">{item.description}</p>
                      </div>
                      {idx < coreApproach.length - 1 && (
                        <div className="process-timeline-connector" aria-hidden="true">
                          <ArrowLeft size={14} className="timeline-arrow" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Bottom Closing Button (for long reading ease) */}
              <div className="about-bottom-close-row">
                <button
                  type="button"
                  onClick={handleToggle}
                  className="about-toggle-btn secondary"
                  aria-label="بستن بخش توضیحات"
                >
                  <span>بستن توضیحات</span>
                  <ChevronDown size={15} className="about-toggle-chevron is-rotated" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
