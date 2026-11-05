import React, { useState, useEffect } from 'react';
import { ExternalLink, Building2, Globe, Layers, PhoneCall, Sparkles, FolderGit2 } from 'lucide-react';
import { Folder } from '../../ui/Folder';

export const ProjectsFolderView: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const update = () => {
      const t = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
      setTheme(t);
    };
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);
  const projects = [
    {
      id: 'shiraz-portal',
      title: 'صفحه اصلی پورتال شهرداری شیراز',
      category: 'PORTAL // PUBLIC SECTOR',
      badge: '★ پروژه سازمانی شاخص',
      description: 'طراحی جامع تجربه و رابط کاربری صفحه اول وبسایت شهرداری شیراز؛ معماری خدمات شهروندی الکترونیک، سامانه‌های یکپارچه شهری و دسترسی‌پذیری برای بیش از ۲ میلیون شهروند.',
      techStack: ['SHIRAZ.IR', 'UI/UX ARCHITECTURE', 'FIGMA', 'DESIGN SYSTEM'],
      link: 'https://shiraz.ir',
      icon: <Building2 size={20} className="text-brand-orange" />,
      color: '#E76338',
      role: 'طراح ارشد رابط و تجربه کاربری (UI/UX)'
    },
    {
      id: 'picofy-landing',
      title: 'لندینگ تعاملی پیکوفای (Picofy)',
      category: 'WEB 3D // TELEGRAM SERVICES',
      badge: 'تعاملی سه‌بعدی',
      description: 'طراحی و پیاده‌سازی لندینگ خدمات تلگرام با صحنه تعاملی سه‌بعدی Three.js، زبان بصری های‌تک در تم تیره، شیدرهای شیشه‌ای و نرخ تبدیل بهینه.',
      techStack: ['THREE.JS', 'WEBGL', 'FIGMA', 'MICRO-INTERACTIONS'],
      link: 'https://picofy.com',
      icon: <Globe size={20} className="text-cyan-400" />,
      color: '#06b6d4',
      role: 'طراح هویت بصری، وب و تعاملات سه‌بعدی'
    },
    {
      id: 'nader-gold',
      title: 'فروشگاه آنلاین نادرگلد (Nader Gold)',
      category: 'E-COMMERCE // LUXURY JEWELRY',
      badge: 'دموی فروشگاهی',
      description: 'طراحی دموی فروشگاه طلا و جواهر بر پایه موتیف‌های اصیل ایرانی، قیمت‌گذاری زنده طلا و ارز، طراحی اول-موبایل (Mobile-First) و سبد خرید روان.',
      techStack: ['MOBILE-FIRST', 'LUXURY UI', 'GOLD PRICING API'],
      link: '#',
      icon: <Building2 size={20} className="text-amber-400" />,
      color: '#f59e0b',
      role: 'طراح محصول و تجربه خرید دیجیتال'
    },
    {
      id: 'habisa-ai',
      title: 'مجموعه ویدیویی و داستانی هابیسا (Habisa)',
      category: 'AI VIDEO // GENERATIVE PRODUCTION',
      badge: 'تولید هوش مصنوعی',
      description: 'ابداع زبان بصری مقوایی با ابزارهای Google Flow و Veo، سناریونویسی و تولید محتوای تبلیغاتی هوش مصنوعی در حوزه صنعت ساختمان و املاک.',
      techStack: ['GOOGLE VEO', 'GOOGLE FLOW', 'STORYBOARDING', 'MIDJOURNEY'],
      link: '#',
      icon: <Layers size={20} className="text-indigo-400" />,
      color: '#6366f1',
      role: 'سناریونویس و کارگردان فنی هوش مصنوعی'
    },
    {
      id: 'call-manager',
      title: 'سامانه مدیریت تماس نوین‌تک (Call Manager)',
      category: 'INTERNAL CRM // WORKFLOW',
      badge: 'سیستم داخلی',
      description: 'طراحی سیستم داخلی ثبت و پیگیری مراجعین و تماس‌های موسسه خبره‌بنیان در کمتر از ۳۰ ثانیه با ساختار استاندارد فارسی و داشبورد گزارش‌گیری.',
      techStack: ['INTERNAL CRM', 'RTL DASHBOARD', 'RAPID LOGGING'],
      link: '#',
      icon: <PhoneCall size={20} className="text-emerald-400" />,
      color: '#10b981',
      role: 'طراح سیستم مدیریت اطلاعات و داشبورد'
    }
  ];

  return (
    <div className="folder-content-container">
      {/* Folder Header Intro */}
      <div className="folder-hero-header">
        <div className="folder-pill-badge">
          <FolderGit2 size={15} className="text-brand-orange" />
          <span className="font-latin">SELECTED PROJECTS // 5 ENTRIES</span>
        </div>
        <h2 className="folder-hero-title">
          پروژه‌های <span className="accent-word">منتخب و شاخص</span>
        </h2>
        <p className="folder-hero-desc">
          مجموعه‌ای از طراحی‌های محصول، پورتال‌های سازمانی، وبسایت‌های تعاملی و تولیدات هوش مصنوعی
        </p>
      </div>

      {/* Interactive Physical Folder Preview (Crisp 2.0 version) */}
      <div className="folder-interactive-preview-strip">
        <div className="folder-preview-label">
          <Sparkles size={14} className="text-brand-orange animate-pulse" />
          <span>پوشه فیزیکی پروژه‌ها (با قابلیت تعامل و کشیدن برگه‌ها):</span>
        </div>
        <div className="folder-preview-desk">
          <Folder
            label="پروژه‌ها"
            mode="flap"
            variant="matte"
            color="#E76338"
            paperColor="#FFFFFF"
            tabPosition="right"
            layout="spread"
            size={1.12}
            draggable={true}
            zoomOnClick={true}
            peek={true}
            intro={false}
            bounce={0.35}
            speed={1}
            theme={theme}
            className="aldmc-archive-folder"
          >
            {projects.map((proj) => (
              <div key={proj.id} className="folder-dossier-card">
                <div className="dossier-card-top">
                  <span className="dossier-badge font-latin">{proj.category}</span>
                  <div className="dossier-logo-circle bg-orange-glow">
                    {proj.icon}
                  </div>
                </div>
                <div className="dossier-card-center">
                  <h4 className="dossier-card-title">{proj.title}</h4>
                  <p className="dossier-card-desc">{proj.description}</p>
                </div>
                <div className="dossier-card-bottom">
                  <span className="dossier-meta font-latin">{proj.techStack[0]}</span>
                  <span className="dossier-tag-pill font-latin">{proj.badge}</span>
                </div>
              </div>
            ))}
          </Folder>
        </div>
      </div>

      {/* Expanded Detailed Project Cards Grid */}
      <div className="projects-detailed-grid">
        {projects.map((proj, idx) => (
          <div key={proj.id} className="project-detail-card">
            <div className="proj-card-top">
              <div className="proj-icon-box" style={{ borderColor: `${proj.color}40`, backgroundColor: `${proj.color}15` }}>
                {proj.icon}
              </div>
              <div className="proj-meta-group">
                <span className="proj-index font-latin">0{idx + 1} // PROJECT</span>
                <span className="proj-category font-latin">{proj.category}</span>
              </div>
              <span className="proj-badge-pill" style={{ borderColor: `${proj.color}50`, color: proj.color }}>
                {proj.badge}
              </span>
            </div>

            <h3 className="proj-card-title">{proj.title}</h3>
            <p className="proj-role-text">{proj.role}</p>
            <p className="proj-card-desc">{proj.description}</p>

            <div className="proj-tech-tags">
              {proj.techStack.map((tech) => (
                <span key={tech} className="proj-tech-chip font-latin">{tech}</span>
              ))}
            </div>

            {proj.link && proj.link !== '#' && (
              <div className="proj-card-action">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-visit-btn font-latin"
                >
                  <span>VISIT LIVE PROJECT</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsFolderView;

