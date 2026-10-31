import React from 'react';
import { resumeData } from '../../data/resumeData';
import { CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = resumeData;

  return (
    <section className="section-wrapper experience-section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header experience-header">
          <div className="section-kicker">WORK HISTORY & ROLES</div>
          <h2 className="section-title">تجربه‌های حرفه‌ای</h2>
          <p className="section-desc">
            مسیر حرفه‌ای من بین طراحی محصول، تولید محتوا، توسعه با کمک هوش مصنوعی و تدریس شکل گرفته است.
          </p>
        </div>

        {/* Minimal 2x2 Editorial Grid */}
        <div className="experience-timeline">
          {experience.map((item, idx) => (
            <div key={item.id} className="experience-card card-editorial">
              <div className="experience-card-header">
                <div className="experience-titles-wrap">
                  <span className="experience-index font-latin">0{idx + 1}</span>
                  <div>
                    <h3 className="experience-company">{item.company}</h3>
                    <span className="experience-company-en font-latin">{item.companyEn}</span>
                  </div>
                </div>
                <span className="experience-role-pill">{item.role}</span>
              </div>

              <p className="experience-desc">{item.description}</p>

              <div className="experience-card-footer">
                <div className="experience-highlight-lead">
                  <CheckCircle2 size={13} className="text-brand-orange flex-shrink-0 mt-0.5" />
                  <span>{item.highlights[0]}</span>
                </div>

                <div className="experience-tags-row">
                  {item.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
