import React from 'react';
import { resumeData } from '../../data/resumeData';
import { Layout, Wand2, Video, Palette, Sparkles, GraduationCap } from 'lucide-react';

export const Expertise: React.FC = () => {
  const { capabilities } = resumeData;

  const iconMap: Record<string, React.ReactNode> = {
    'product-uiux': <Layout size={20} className="text-brand-orange" />,
    'ai-workflows': <Wand2 size={20} className="text-brand-orange" />,
    'generative-media': <Video size={20} className="text-brand-orange" />,
    'visual-identity': <Palette size={20} className="text-brand-orange" />,
    'creative-direction': <Sparkles size={20} className="text-brand-orange" />,
    'education-mentorship': <GraduationCap size={20} className="text-brand-orange" />,
  };

  return (
    <section className="section-wrapper expertise-section" id="expertise">
      <div className="container">
        {/* Section Header */}
        <div className="section-header expertise-header">
          <div className="section-kicker">EXPERTISE & CAPABILITIES</div>
          <h2 className="section-title">تخصص‌های من</h2>
          <p className="section-desc">
            ترکیب دیزاین محصول، متدهای نوین مهندسی با هوش مصنوعی و هدایت خلاقانه پروژه‌ها
          </p>
        </div>

        {/* Minimal 3x2 Grid */}
        <div className="expertise-editorial-grid">
          {capabilities.map((cap) => (
            <div key={cap.id} className={`expertise-card card-editorial cap-${cap.id}`}>
              <div className="expertise-card-top">
                <div className="expertise-card-title-group">
                  <div className="expertise-icon-box">{iconMap[cap.id]}</div>
                  <div>
                    <h3 className="expertise-title">{cap.title}</h3>
                    <span className="expertise-title-en font-latin">{cap.titleEn}</span>
                  </div>
                </div>
                <span className="expertise-num font-latin">{cap.number}</span>
              </div>

              <p className="expertise-desc">{cap.description}</p>

              <div className="expertise-skills-list">
                {cap.skills.slice(0, 3).map((skill, sIdx) => (
                  <span key={sIdx} className="expertise-skill-tag font-latin">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
