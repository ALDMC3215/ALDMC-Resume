import React from 'react';
import { resumeData } from '../../data/resumeData';
import { Layout, Wand2, Video, Palette, Sparkles, GraduationCap } from 'lucide-react';

export const Expertise: React.FC = () => {
  const { capabilities } = resumeData;

  const iconMap: Record<string, React.ReactNode> = {
    'product-uiux': <Layout size={22} className="text-brand-orange" />,
    'ai-workflows': <Wand2 size={22} className="text-brand-orange" />,
    'generative-media': <Video size={20} className="text-brand-orange" />,
    'visual-identity': <Palette size={20} className="text-brand-orange" />,
    'creative-direction': <Sparkles size={20} className="text-brand-orange" />,
    'education-mentorship': <GraduationCap size={20} className="text-brand-orange" />,
  };

  // Asymmetric Bento Architecture:
  // 01 UI/UX & 02 AI workflows are large dominant cards
  // 03-06 are sleek, high-scanability compact tiles
  const largeCards = capabilities.slice(0, 2);
  const smallCards = capabilities.slice(2);

  return (
    <section className="section-wrapper expertise-section" id="expertise">
      <div className="container">
        {/* Section Header */}
        <div className="section-header expertise-header">
          <div className="section-kicker">SKILLS &amp; CAPABILITIES</div>
          <h2 className="section-title">
            مهارت‌ها و <span className="accent-word">تخصص‌ها</span>
          </h2>
          <p className="section-desc">
            ترکیب دیزاین محصول، متدهای نوین مهندسی با هوش مصنوعی و هدایت خلاقانه پروژه‌ها
          </p>
        </div>

        {/* Asymmetric Bento Grid — Solid Surface Component Architecture */}
        <div className="skills-bento-grid">
          {/* Top Row: 2 Major Pillar Cards Side by Side */}
          <div className="skills-bento-top">
            {largeCards.map((cap) => (
              <div key={cap.id} className="skills-bento-card card-solid-surface large-card">
                <div className="skills-card-content">
                  <div className="skills-card-header">
                    <div className="skills-icon-wrap">{iconMap[cap.id]}</div>
                    <span className="skills-num font-latin">{cap.number}</span>
                  </div>

                  <div>
                    <h3 className="skills-card-title">{cap.title}</h3>
                    <span className="skills-card-sub font-latin">{cap.titleEn}</span>
                    <p className="skills-card-desc">{cap.description}</p>
                  </div>

                  <div className="skills-tags-row">
                    {cap.skills.map((skill, idx) => (
                      <span key={idx} className="tag-badge font-latin">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 4 Supporting Capability Tiles */}
          <div className="skills-bento-bottom">
            {smallCards.map((cap) => (
              <div key={cap.id} className="skills-bento-card card-solid-surface small-card">
                <div className="skills-card-content">
                  <div className="skills-card-header">
                    <div className="skills-icon-wrap">{iconMap[cap.id]}</div>
                    <span className="skills-num font-latin">{cap.number}</span>
                  </div>

                  <div>
                    <h3 className="skills-card-title-sm">{cap.title}</h3>
                    <span className="skills-card-sub font-latin">{cap.titleEn}</span>
                  </div>

                  <div className="skills-tags-row">
                    {cap.skills.slice(0, 2).map((skill, idx) => (
                      <span key={idx} className="tag-badge font-latin">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
