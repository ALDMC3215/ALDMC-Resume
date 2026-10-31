import React from 'react';
import { resumeData } from '../../data/resumeData';
import { Compass, Cpu, CheckCircle, Target, Zap, ShieldCheck } from 'lucide-react';

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
          <span className="section-kicker">ABOUT ME</span>
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

          {/* Personal Philosophy & Mindset Card */}
          <div className="about-meta-card card-editorial">
            <div>
              <div className="about-meta-badge font-latin">MINDSET & VISION</div>
              <h4 className="about-meta-title">دیدگاه من در خلق محصول</h4>
              <p className="about-meta-desc">
                باور دارم دیزاین فراتر از ظاهر آراسته، ابزاری است برای حل مسائل واقعی کاربران و ایجاد تجربه روان و پایدار. با تلفیق درک رفتار کاربر، تسلط بر ساختارهای بومی RTL و شتاب‌دهی توسعه با ابزارهای هوش مصنوعی، تلاش می‌کنم فاصله میان چشم‌انداز خلاقانه تا محصول واقعی و زنده را به حداقل برسانم.
              </p>
            </div>

            <div className="about-values-list">
              <div className="about-value-item">
                <div className="about-value-icon-box">
                  <Target size={15} className="text-brand-orange" />
                </div>
                <div className="about-value-text">
                  <span className="about-value-title">کاربردپذیری و تجربه روان</span>
                  <span className="about-value-sub">تمرکز بر رفع نیاز واقعی کاربر، پایداری تعامل و استانداردهای دسترسی‌پذیری</span>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon-box">
                  <Zap size={15} className="text-brand-orange" />
                </div>
                <div className="about-value-text">
                  <span className="about-value-title">توسعه چابک با هوش مصنوعی</span>
                  <span className="about-value-sub">ساخت سریع پروتوتایپ‌های زنده، آزمودن فرضیه‌ها و کاهش زمان ورود به بازار</span>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon-box">
                  <ShieldCheck size={15} className="text-brand-orange" />
                </div>
                <div className="about-value-text">
                  <span className="about-value-title">وسواس و تعهد در کیفیت اجرا</span>
                  <span className="about-value-sub">بازبینی موشکافانه تایپوگرافی، چیدمان، کنتراست نوری و تجربه نسخه موبایل</span>
                </div>
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
