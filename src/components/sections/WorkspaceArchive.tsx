import React, { useState, useEffect } from 'react';
import { Folder } from '../ui/Folder';
import {
  ExternalLink,
  GraduationCap,
  Building2,
  Globe,
  Layers,
  PhoneCall,
  MonitorCheck
} from 'lucide-react';

export const WorkspaceArchive: React.FC = () => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="workspace-archive-section" id="projects">
      {/* Invisible anchor points for smooth navbar scroll targeting */}
      <div id="experience" className="workspace-anchor-target" />
      <div id="teaching" className="workspace-anchor-target" />

      {/* Top Header: Focused Editorial Title */}
      <div className="workspace-header-stage">
        <h2 className="workspace-main-title">
          سوابق، <span className="accent-word">پروژه‌های منتخب</span> و تدریس
        </h2>
      </div>

      {/* Main Interactive Desk Surface */}
      <div className="workspace-desk-surface">
        {/* =====================================================================
            FOLDER 1: SELECTED PROJECTS (پروژه‌های منتخب)
            ===================================================================== */}
        <div className="workspace-folder-cell" id="projects-folder">
          <Folder
            label="پروژه‌ها"
            mode="flap"
            variant="matte"
            color="#E76338"
            paperColor="#FFFFFF"
            tabPosition="right"
            layout="spread"
            size={isMobile ? 0.88 : 1.24}
            draggable={true}
            zoomOnClick={true}
            peek={true}
            intro={false}
            bounce={0.35}
            speed={1}
            theme="dark"
            className="aldmc-archive-folder"
          >
            {/* 1. Shiraz Municipality Homepage Portal */}
            <div className="folder-dossier-card card-shiraz">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">PORTAL // PUBLIC SECTOR</span>
                <div className="dossier-logo-circle bg-orange-glow">
                  <Building2 size={13} className="text-brand-orange" />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">صفحه اصلی پورتال شهرداری شیراز</h4>
                <p className="dossier-card-desc">
                  طراحی تجربه و رابط کاربری صفحه اول وبسایت شهرداری شیراز؛ معماری خدمات شهروندی و سامانه‌های یکپارچه شهری.
                </p>
                <div className="dossier-special-tag">
                  <span>★ طراحی صفحه اول وبسایت شهرداری شیراز</span>
                </div>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">SHIRAZ.IR · UI/UX</span>
                <a
                  href="https://shiraz.ir"
                  target="_blank"
                  rel="noreferrer"
                  className="dossier-link-btn font-latin"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Link</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            {/* 2. Picofy Interactive 3D Landing */}
            <div className="folder-dossier-card card-picofy">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">WEB 3D // TELEGRAM</span>
                <div className="dossier-logo-circle bg-dark-glow">
                  <Globe size={13} />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">لندینگ تعاملی پیکوفای</h4>
                <p className="dossier-card-desc">
                  لندینگ خدمات تلگرام با صحنه تعاملی سه‌بعدی Three.js، طراحی تاریک های‌تک و دسترسی‌پذیری کامل موبایل.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">THREE.JS · FIGMA</span>
                <span className="dossier-tag-pill font-latin">PICOFY</span>
              </div>
            </div>

            {/* 3. Nader Gold E-Commerce Demo */}
            <div className="folder-dossier-card card-nader">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">E-COMMERCE // JEWELRY</span>
                <div className="dossier-logo-circle bg-gold-glow">
                  <Building2 size={13} className="text-amber-500" />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">فروشگاه آنلاین نادرگلد</h4>
                <p className="dossier-card-desc">
                  طراحی دموی فروشگاه طلا و جواهر بر پایه موتیف‌های اصیل ایرانی، قیمت‌گذاری زنده و طراحی Mobile-First.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">MOBILE-FIRST · GOLD</span>
                <span className="dossier-tag-pill font-latin">DEMO</span>
              </div>
            </div>

            {/* 4. Habisa AI Storytelling & Video */}
            <div className="folder-dossier-card card-habisa">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">AI VIDEO // VEO &amp; FLOW</span>
                <div className="dossier-logo-circle bg-blue-glow">
                  <Layers size={13} />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">ویدیوهای داستانی هابیسا</h4>
                <p className="dossier-card-desc">
                  ابداع زبان بصری مقوایی با ابزارهای Google Flow و Veo، سناریونویسی و تولید محتوای هوش مصنوعی ساختمانی.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">GOOGLE VEO · STORY</span>
                <span className="dossier-tag-pill font-latin">HABISA</span>
              </div>
            </div>

            {/* 5. Novin Tech Call Manager */}
            <div className="folder-dossier-card card-callmanager">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">DASHBOARD // CRM</span>
                <div className="dossier-logo-circle bg-green-glow">
                  <PhoneCall size={13} />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">مدیریت تماس نوین‌تک</h4>
                <p className="dossier-card-desc">
                  طراحی سیستم داخلی ثبت و پیگیری مراجعین موسسه در کمتر از ۳۰ ثانیه با ساختار استاندارد فارسی.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">INTERNAL CRM · RTL</span>
                <span className="dossier-tag-pill font-latin">DASHBOARD</span>
              </div>
            </div>
          </Folder>
        </div>

        {/* =====================================================================
            FOLDER 2: WORK EXPERIENCE (سوابق کاری)
            ===================================================================== */}
        <div className="workspace-folder-cell" id="experience-folder">
          <Folder
            label="سوابق کاری"
            mode="flap"
            variant="matte"
            color="#18181B"
            paperColor="#FFFFFF"
            tabPosition="center"
            layout="spread"
            size={isMobile ? 0.88 : 1.24}
            draggable={true}
            zoomOnClick={true}
            peek={true}
            intro={false}
            bounce={0.35}
            speed={1}
            theme="dark"
            className="aldmc-archive-folder"
          >
            {/* 1. Novin Tech Institute */}
            <div className="folder-dossier-card">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">2022 — PRESENT</span>
                <div className="dossier-logo-circle">
                  <MonitorCheck size={13} className="text-brand-orange" />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">نوین‌تک (موسسه خبره‌بنیان)</h4>
                <p className="dossier-card-role text-brand-orange">مدرس UI/UX، طراح محصول و عضو تیم اجرایی</p>
                <p className="dossier-card-desc">
                  تدریس دوره‌های تخصصی Figma، فتوشاپ و ابزارهای AI؛ طراحی Call Manager و هدایت هویت بصری دوره‌ها.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">NOVIN TECH · SHIRAZ</span>
                <span className="dossier-tag-pill font-latin">ROLE 01</span>
              </div>
            </div>

            {/* 2. Picofy Studio */}
            <div className="folder-dossier-card">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">2023 — PRESENT</span>
                <div className="dossier-logo-circle">
                  <Globe size={13} />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">پیکوفای (Picofy)</h4>
                <p className="dossier-card-role text-brand-orange">طراح وبسایت، هویت بصری و توسعه محتوا</p>
                <p className="dossier-card-desc">
                  تدوین زبان بصری لندینگ، دیزاین سیستم تم تیره و بهینه‌سازی دسترسی‌پذیری و تعاملات محصول.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">DESIGN SYSTEM</span>
                <span className="dossier-tag-pill font-latin">ROLE 02</span>
              </div>
            </div>

            {/* 3. Habisa AI Content */}
            <div className="folder-dossier-card">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">2024</span>
                <div className="dossier-logo-circle">
                  <Layers size={13} />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">استودیو تبلیغاتی هابیسا</h4>
                <p className="dossier-card-role text-brand-orange">تولید محتوای ویدیویی و تبلیغات هوش مصنوعی</p>
                <p className="dossier-card-desc">
                  طراحی سناریوهای داستانی، خلق زبان تصویری پایدار با مدل‌های هوش مصنوعی و تولید خروجی‌های شبکه‌های اجتماعی.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">AI PRODUCTION</span>
                <span className="dossier-tag-pill font-latin">ROLE 03</span>
              </div>
            </div>

            {/* 4. ALDMC Creative Direction */}
            <div className="folder-dossier-card">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">PERSIMMON V6</span>
                <div className="dossier-logo-circle bg-orange-glow">
                  <MonitorCheck size={13} className="text-brand-orange" />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">استودیو شخصی ALDMC</h4>
                <p className="dossier-card-role text-brand-orange">طراحی خلاق، هویت بصری و Vibe Coding</p>
                <p className="dossier-card-desc">
                  خلق هویت بصری جامع نسخه ۶ خرمالویی، تولید موزیک با هوش مصنوعی و ساخت نمونه‌های اجرایی زنده وب.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">CREATIVE DIR</span>
                <span className="dossier-tag-pill font-latin">ROLE 04</span>
              </div>
            </div>
          </Folder>
        </div>

        {/* =====================================================================
            FOLDER 3: TEACHING & CREDENTIALS (آموزش و تحصیلات)
            ===================================================================== */}
        <div className="workspace-folder-cell" id="teaching-folder">
          <Folder
            label="آموزش و تحصیلات"
            mode="flap"
            variant="matte"
            color="#2E2A27"
            paperColor="#FFFFFF"
            tabPosition="left"
            layout="spread"
            size={isMobile ? 0.88 : 1.24}
            draggable={true}
            zoomOnClick={true}
            peek={true}
            intro={false}
            bounce={0.35}
            speed={1}
            theme="dark"
            className="aldmc-archive-folder"
          >
            {/* 1. UI/UX & Figma Courses */}
            <div className="folder-dossier-card">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">COURSE // MENTORSHIP</span>
                <div className="dossier-logo-circle bg-orange-glow">
                  <GraduationCap size={13} className="text-brand-orange" />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">دوره‌های تخصصی Figma و UI/UX</h4>
                <p className="dossier-card-desc">
                  تدریس کارگاهی بیش از صدها ساعت کلاس تخصصی با محوریت پروژه‌های واقعی، تفکر سیستمی و ورود هنرجویان به بازار کار.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">+100 HOURS · FIGMA</span>
                <span className="dossier-tag-pill font-latin">COURSE 01</span>
              </div>
            </div>

            {/* 2. AI Tools & Vibe Coding */}
            <div className="folder-dossier-card">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">MASTERCLASS // AI</span>
                <div className="dossier-logo-circle">
                  <MonitorCheck size={13} />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">مهندسی هوش مصنوعی و Vibe Coding</h4>
                <p className="dossier-card-desc">
                  آموزش بهره‌گیری عملی از ChatGPT، Claude، ابزارهای تولید مدیا و سرعت‌بخشی به ساخت پروتوتایپ‌های تعاملی.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">PROMPT ENG · AI</span>
                <span className="dossier-tag-pill font-latin">COURSE 02</span>
              </div>
            </div>

            {/* 3. Academic Education */}
            <div className="folder-dossier-card">
              <div className="dossier-card-top">
                <span className="dossier-badge font-latin">ACADEMIC // UNIVERSITY</span>
                <div className="dossier-logo-circle">
                  <Building2 size={13} />
                </div>
              </div>
              <div className="dossier-card-center">
                <h4 className="dossier-card-title">کارشناسی مهندسی کامپیوتر</h4>
                <p className="dossier-card-desc">
                  دانشجوی کارشناسی مهندسی کامپیوتر (ورودی ۱۴۰۰؛ پیش‌تر مهندسی برق از ۱۳۹۸)؛ پیوند میان درک فنی کد و دیزاین محصول.
                </p>
              </div>
              <div className="dossier-card-bottom">
                <span className="dossier-meta font-latin">BS COMPUTER ENG</span>
                <span className="dossier-tag-pill font-latin">EDUCATION</span>
              </div>
            </div>
          </Folder>
        </div>
      </div>

      {/* Bottom Information & Interaction Cue */}
      <div className="workspace-footer-cue">
        <div className="workspace-cue-text">
          <span className="cue-dot" />
          <span>پوشه‌ها تعاملی هستند؛ برای باز شدن و مشاهده پرونده‌ها روی پوشه کلیک کنید، برگه‌ها را Drag کنید یا برای مشاهده با جزئیات کلیک نمایید.</span>
        </div>

        <div className="workspace-quick-metrics font-latin">
          <span>5 SELECTED PROJECTS</span>
          <span className="metric-sep">/</span>
          <span>4 ROLES</span>
          <span className="metric-sep">/</span>
          <span>+100 HRS TEACHING</span>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceArchive;
