import React from 'react';
import { GraduationCap, BookOpen, MonitorCheck, Building2, Award, Clock } from 'lucide-react';

export const TeachingFolderView: React.FC = () => {
  const credentials = [
    {
      id: 'figma-masterclass',
      title: 'دوره‌های تخصصی Figma و طراحی سیستم‌های UI/UX',
      type: 'COURSE // WORKSHOP',
      badge: '+100 ساعت تدریس',
      duration: 'بیش از ۱۰۰ ساعت کارگاه عملی',
      organization: 'موسسه خبره‌بنیان نوین‌تک · شیراز',
      description: 'تدریس کارگاهی و پروژه‌محور فیگما با رویکرد ورود به بازار کار، متدهای Design System، Auto Layout پیشرفته، متغیرها (Variables) و استانداردهای تحویل طرح به برنامه‌نویس (Dev Handoff).',
      highlights: [
        'طراحی صفر تا صد ۳ پروژه واقعی وب و اپلیکیشن',
        'آموزش کامپوننت‌سازی اتمیک و ساخت کیت‌های UI مقیاس‌پذیر',
        'منتورینگ تک‌به‌تک و بررسی پورتفولیوی دانشجویان'
      ],
      tags: ['FIGMA ADVANCED', 'DESIGN TOKENS', 'WORKSHOP', 'MENTORSHIP'],
      color: '#E76338',
      icon: <GraduationCap size={20} className="text-brand-orange" />
    },
    {
      id: 'vibe-coding-ai',
      title: 'مهندسی هوش مصنوعی و Vibe Coding',
      type: 'MASTERCLASS // AI WORKFLOW',
      badge: 'متدولوژی نوین',
      duration: 'کارگاه‌های جامع توسعه ایجنتیک',
      organization: 'استودیو ALDMC و رویدادهای تخصصی',
      description: 'آموزش به‌کارگیری عملی Claude، ChatGPT، Cursor و Google Antigravity در فرآیند سریع ساخت پروتوتایپ‌های زنده وب؛ پیوند زدن مهارت دیزاین با هوش مصنوعی مولد بدون اتلاف وقت.',
      highlights: [
        'استراتژی‌های پرامپت‌نویسی ساختاریافته و برنامه‌ریزی ایجنت‌ها',
        'ساخت پروتوتایپ‌های تعاملی و وب‌اپلیکیشن در چند ساعت',
        'یکپارچه‌سازی شیدرها و انیمیشن‌های پیشرفته با دستیار هوش مصنوعی'
      ],
      tags: ['VIBE CODING', 'AGENTIC AI', 'PROMPT ARCHITECTURE'],
      color: '#84cc16',
      icon: <MonitorCheck size={20} className="text-lime-400" />
    },
    {
      id: 'academic-degree',
      title: 'کارشناسی مهندسی کامپیوتر',
      type: 'ACADEMIC // UNIVERSITY',
      badge: 'پایه آکادمیک',
      duration: 'ورودی ۱۴۰۰ (پیش‌تر مهندسی برق از ۱۳۹۸)',
      organization: 'دانشگاه دولتی / سراسری',
      description: 'تحصیلات آکادمیک در مهندسی کامپیوتر با تمرکز بر ساختمان داده‌ها، معماری نرم‌افزار و طراحی تعامل انسان و کامپیوتر (HCI)؛ ایجاد درک عمیق از محدودیت‌ها و توانمندی‌های کد در خدمت دیزاین.',
      highlights: [
        'درک اصول مهندسی نرم‌افزار، الگوریتم‌ها و بهینه‌سازی',
        'پیوند میان منطق فنی و دید بصری تجربه کاربری',
        'تسلط بر ساختار و تعاملات وب، شبکه و پروتکل‌ها'
      ],
      tags: ['BS COMPUTER SCIENCE', 'HCI', 'SYSTEMS ARCHITECTURE'],
      color: '#3b82f6',
      icon: <Building2 size={20} className="text-blue-400" />
    }
  ];

  return (
    <div className="folder-content-container">
      {/* Folder Header Intro */}
      <div className="folder-hero-header">
        <div className="folder-pill-badge">
          <BookOpen size={15} className="text-brand-orange" />
          <span className="font-latin">EDUCATION &amp; MENTORSHIP // 3 TRACKS</span>
        </div>
        <h2 className="folder-hero-title">
          آموزش، تدریس و <span className="accent-word">پشتوانه علمی</span>
        </h2>
        <p className="folder-hero-desc">
          انتقال دانش طراحی به نسل جدید طراحان، برگزاری کارگاه‌های تخصصی و پشتوانه آکادمیک مهندسی
        </p>
      </div>

      {/* Detailed Education Cards */}
      <div className="teaching-cards-grid">
        {credentials.map((cred) => (
          <div key={cred.id} className="teaching-detail-card">
            <div className="teach-card-header">
              <div className="teach-icon-wrap" style={{ borderColor: `${cred.color}40`, backgroundColor: `${cred.color}15` }}>
                {cred.icon}
              </div>
              <div className="teach-meta-info">
                <span className="teach-type-badge font-latin">{cred.type}</span>
                <span className="teach-org-name">{cred.organization}</span>
              </div>
              <span className="teach-badge-pill" style={{ borderColor: `${cred.color}50`, color: cred.color }}>
                {cred.badge}
              </span>
            </div>

            <h3 className="teach-card-title">{cred.title}</h3>
            <div className="teach-duration-line">
              <Clock size={13} className="text-zinc-500" />
              <span className="font-latin">{cred.duration}</span>
            </div>

            <p className="teach-card-desc">{cred.description}</p>

            <div className="teach-highlights-section">
              <div className="teach-high-label">
                <Award size={14} className="text-brand-orange" />
                <span>محورهای اصلی و دستاوردها:</span>
              </div>
              <ul className="teach-high-list">
                {cred.highlights.map((h, i) => (
                  <li key={i} className="teach-high-item">
                    <span className="teach-bullet" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="teach-tags-bar">
              {cred.tags.map((t) => (
                <span key={t} className="teach-tag-chip font-latin">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachingFolderView;

