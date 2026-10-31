import React from 'react';
import { resumeData } from '../../data/resumeData';
import { Layout, Wand2, Video, Palette, Sparkles, GraduationCap } from 'lucide-react';

export const Expertise: React.FC = () => {
  const { capabilities } = resumeData;

  const iconMap: Record<string, React.ReactNode> = {
    'product-uiux': <Layout size={28} className="text-brand-orange" />,
    'ai-workflows': <Wand2 size={28} className="text-brand-orange" />,
    'generative-media': <Video size={28} className="text-brand-orange" />,
    'visual-identity': <Palette size={28} className="text-brand-orange" />,
    'creative-direction': <Sparkles size={28} className="text-brand-orange" />,
    'education-mentorship': <GraduationCap size={28} className="text-brand-orange" />,
  };

  return (
    <section className="section-wrapper expertise-section" id="expertise">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">تخصص‌های من</h2>
          <p className="section-desc">
            ترکیب دیزاین محصول، متدهای نوین مهندسی با هوش مصنوعی و هدایت خلاقانه پروژه‌ها
          </p>
        </div>

        {/* Varied Editorial Grid */}
        <div className="expertise-editorial-grid">
          {capabilities.map((cap) => {
            const isFeatured = cap.id === 'product-uiux' || cap.id === 'ai-workflows';
            return (
              <div
                key={cap.id}
                className={`expertise-card card-editorial ${isFeatured ? 'is-featured' : ''} cap-${cap.id}`}
              >
                <div className="expertise-card-top">
                  <div className="expertise-icon-box">{iconMap[cap.id]}</div>
                  <span className="expertise-num font-latin">{cap.number}</span>
                </div>

                <div className="expertise-card-content">
                  <h3 className="expertise-title">{cap.title}</h3>
                  <span className="expertise-title-en font-latin">{cap.titleEn}</span>
                  <p className="expertise-desc">{cap.description}</p>
                </div>

                <div className="expertise-skills-list">
                  {cap.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="expertise-skill-tag font-latin">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
