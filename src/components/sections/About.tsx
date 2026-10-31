import React from 'react';
import { resumeData } from '../../data/resumeData';
import { Compass, Cpu, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const { personalInfo, coreApproach } = resumeData;

  const approachIcons = [
    <Compass className="approach-step-icon text-brand-orange" size={24} />,
    <Cpu className="approach-step-icon text-brand-orange" size={24} />,
    <CheckCircle className="approach-step-icon text-brand-orange" size={24} />,
  ];

  return (
    <section className="section-wrapper about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">ABOUT ALDMC</span>
          <h2 className="section-title">کمی درباره من</h2>
          <p className="section-desc">طراحی، اجرا و خلاقیت در یک مسیر پیوسته و هدفمند</p>
        </div>

        {/* Narrative & Philosophy */}
        <div className="about-main-grid">
          <div className="about-bio-card card-editorial">
            <h3 className="about-lead-title">
              طراحی محصول، هدایت تجربه و تسریع توسعه با هوش مصنوعی
            </h3>
            <p className="about-bio-text">{personalInfo.bio}</p>
            <div className="about-ownership-bar">
              <span className="ownership-label">دامنه مسئولیت در پروژه‌ها:</span>
              <div className="ownership-tags">
                <span className="tag-badge accent">۰۱ / جهت بصری (Visual Direction)</span>
                <span className="tag-badge accent">۰۲ / طراحی تعامل (UX & Interface)</span>
                <span className="tag-badge accent">۰۳ / بازبینی اجرا (QA & Refinement)</span>
              </div>
            </div>
          </div>

          {/* Visual Brand Metaphor Card */}
          <div className="about-meta-card card-editorial">
            <div className="about-meta-badge font-latin">PERSIMMON V6 IDENTITY</div>
            <h4 className="about-meta-title">طراحی دقیق بر پایه دیزاین سیستم</h4>
            <p className="about-meta-desc">
              تمام المان‌های این وبسایت، از تایپوگرافی دوزبانه تا پالت رنگی خرمالویی و ذغالی، بر اساس دیزاین سیستم رسمی <span className="font-latin font-bold">ALDMC Complete Brand Kit v6</span> پیاده‌سازی شده‌اند؛ بدون حدس، بدون شلختگی، با بالاترین استاندارد مهندسی فرانت‌اند.
            </p>
            <div className="about-swatches-row">
              <div className="swatch-item">
                <span className="swatch-color" style={{ backgroundColor: '#E76338' }} />
                <span className="swatch-name font-latin">#E76338</span>
              </div>
              <div className="swatch-item">
                <span className="swatch-color" style={{ backgroundColor: '#27211D' }} />
                <span className="swatch-name font-latin">#27211D</span>
              </div>
              <div className="swatch-item">
                <span className="swatch-color" style={{ backgroundColor: '#F6F0E7', border: '1px solid #DFD5C8' }} />
                <span className="swatch-name font-latin">#F6F0E7</span>
              </div>
              <div className="swatch-item">
                <span className="swatch-color" style={{ backgroundColor: '#F6B393' }} />
                <span className="swatch-name font-latin">#F6B393</span>
              </div>
            </div>
          </div>
        </div>

        {/* How I Work / رویکرد کاری */}
        <div className="about-approach-container">
          <div className="approach-header">
            <span className="section-kicker">HOW I WORK</span>
            <h3 className="approach-title">رویکرد کاری: از ایده تا خروجی نهایی</h3>
            <div className="approach-flow-bar font-latin">
              IDEA → DESIGN → RAPID PROTOTYPE → QA & REFINEMENT
            </div>
          </div>

          <div className="approach-grid">
            {coreApproach.map((item, index) => (
              <div key={item.step} className="approach-card card-editorial">
                <div className="approach-card-top">
                  <span className="approach-num font-latin">{item.step}</span>
                  {approachIcons[index]}
                </div>
                <h4 className="approach-step-title">{item.title}</h4>
                <span className="approach-step-sub font-latin">{item.titleEn}</span>
                <p className="approach-step-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
