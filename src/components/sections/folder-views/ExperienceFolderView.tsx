import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export const ExperienceFolderView: React.FC = () => {
  const experiences = [
    {
      id: 'novin-tech',
      company: 'نوین‌تک (موسسه خبره‌بنیان)',
      period: '2022 — PRESENT',
      role: 'مدرس UI/UX، طراح محصول و عضو تیم اجرایی',
      location: 'شیراز · حضوری و هیبرید',
      description: 'تدریس دوره‌های تخصصی Figma، فتوشاپ و کار با ابزارهای AI؛ طراحی و توسعه سامانه Call Manager داخلی؛ مدیریت هویت بصری دوره‌ها و راهنمایی ورود ده‌ها هنرجو به بازار کار.',
      achievements: [
        'تدریس بیش از ۱۰۰ ساعت کارگاه تخصصی فیگما و اصول تجربه کاربر',
        'طراحی سیستم داخلی ثبت اطلاعات و پیگیری مراجعین در کمتر از ۳۰ ثانیه',
        'همکاری در تدوین نقشه راه آموزشی و سیستم ارزیابی پروژه‌های واقعی'
      ],
      tags: ['FIGMA MENTORSHIP', 'CALL MANAGER CRM', 'COURSE DIRECTION'],
      color: '#E76338'
    },
    {
      id: 'picofy',
      company: 'پیکوفای (Picofy Studio)',
      period: '2023 — PRESENT',
      role: 'طراح وبسایت، هویت بصری و توسعه محتوا',
      location: 'ریموت · بین‌المللی',
      description: 'تدوین زبان بصری لندینگ، دیزاین سیستم تم تیره و تعاملی، همکاری در پیاده‌سازی صحنه سه‌بعدی Three.js و بهینه‌سازی دسترسی‌پذیری و نرخ تبدیل محصول.',
      achievements: [
        'خلق دیزاین سیستم دارک‌مود با توکن‌های طراحی منسجم',
        'پیاده‌سازی المان‌های سه‌بعدی و تعاملات روان کاربر در لندینگ',
        'افزایش نرخ تعامل و ثبت‌نام با بازطراحی ساختار بصری'
      ],
      tags: ['DESIGN SYSTEM', 'THREE.JS', 'CONVERSION RATE', 'DARK THEME'],
      color: '#06b6d4'
    },
    {
      id: 'habisa',
      company: 'استودیو تبلیغاتی هابیسا (Habisa)',
      period: '2024',
      role: 'تولید محتوای ویدیویی و تبلیغات هوش مصنوعی',
      location: 'شیراز · پروژه‌ای',
      description: 'طراحی سناریوهای داستانی، ابداع زبان بصری مقوایی با ابزارهای نوین Google Flow و Veo، استوری‌بوردینگ و تولید خروجی‌های ویدیویی هوش مصنوعی ساختمانی.',
      achievements: [
        'طراحی کاراکتر و محیط یکپارچه با هوش مصنوعی',
        'تلفیق سناریوی تبلیغاتی سنتی با ابزارهای نسل جدید ویدیو',
        'تولید محتوای تعاملی شبکه‌های اجتماعی با هویت بصری متمایز'
      ],
      tags: ['GOOGLE VEO', 'AI VIDEO WORKFLOW', 'CREATIVE ADVERTISING'],
      color: '#6366f1'
    },
    {
      id: 'aldmc-studio',
      company: 'استودیو شخصی ALDMC',
      period: 'PERSIMMON V6 — 2024 / 2025',
      role: 'طراحی خلاق، هویت بصری و Vibe Coding',
      location: 'شیراز · مستقل',
      description: 'خلق هویت بصری جامع نسخه ۶ خرمالویی، توسعه وب با متد Vibe Coding و Agentic AI، ساخت کامپوننت‌های تعاملی و موسیقی با هوش مصنوعی.',
      achievements: [
        'تدوین سیستم هویت بصری Persimmon با تایپوگرافی اختصاصی پیدا',
        'پیاده‌سازی معماری مدرن وبسایت با بالاترین استانداردهای پرفورمنس',
        'توسعه ابزارهای تعاملی مدرن و شیدرهای شیشه‌ای فیزیکی'
      ],
      tags: ['BRAND IDENTITY', 'VIBE CODING', 'AI MEDIA PRODUCTION'],
      color: '#f97316'
    }
  ];

  return (
    <div className="folder-content-container">
      {/* Folder Header Intro */}
      <div className="folder-hero-header">
        <div className="folder-pill-badge">
          <Briefcase size={15} className="text-brand-orange" />
          <span className="font-latin">CAREER HISTORY // 4 POSITIONS</span>
        </div>
        <h2 className="folder-hero-title">
          سوابق کاری و <span className="accent-word">مسیر حرفه‌ای</span>
        </h2>
        <p className="folder-hero-desc">
          تجربه هدایت طراحی، تدریس دانشگاهی و کارگاهی، ساخت محصولات تجاری و خلق هویت‌های ماندگار
        </p>
      </div>

      {/* Expanded Career Timeline Cards */}
      <div className="experience-timeline-list">
        {experiences.map((exp, idx) => (
          <div key={exp.id} className="experience-entry-card">
            <div className="exp-timeline-indicator">
              <span className="exp-timeline-dot" style={{ backgroundColor: exp.color }} />
              {idx < experiences.length - 1 && <span className="exp-timeline-line" />}
            </div>

            <div className="exp-entry-body">
              <div className="exp-entry-header">
                <div>
                  <h3 className="exp-company-title">{exp.company}</h3>
                  <p className="exp-role-title text-brand-orange">{exp.role}</p>
                </div>
                <div className="exp-meta-badge">
                  <Calendar size={13} />
                  <span className="font-latin">{exp.period}</span>
                </div>
              </div>

              <p className="exp-description-text">{exp.description}</p>

              <div className="exp-achievements-block">
                <h4 className="exp-achieve-label">دستاوردهای کلیدی:</h4>
                <ul className="exp-achieve-list">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="exp-achieve-item">
                      <span className="bullet-point" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exp-tags-row">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp-tag-pill font-latin">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceFolderView;
