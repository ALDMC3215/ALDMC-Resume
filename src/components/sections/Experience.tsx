import React from 'react';
import { resumeData } from '../../data/resumeData';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = resumeData;

  return (
    <section className="section-wrapper experience-section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">تجربه‌های حرفه‌ای</h2>
          <p className="section-desc">
            مسیر حرفه‌ای من بین طراحی محصول، تولید محتوا، توسعه با کمک هوش مصنوعی و تدریس شکل گرفته است.
          </p>
        </div>

        {/* Asymmetric Editorial Timeline */}
        <div className="experience-timeline">
          {experience.map((item, idx) => (
            <div key={item.id} className="experience-card card-editorial">
              <div className="experience-badge-col">
                <span className="experience-index font-latin">0{idx + 1}</span>
                <div className="experience-icon-wrap">
                  <Briefcase size={20} className="text-brand-orange" />
                </div>
              </div>

              <div className="experience-content-col">
                <div className="experience-header-group">
                  <div className="experience-titles">
                    <h3 className="experience-company">{item.company}</h3>
                    <span className="experience-company-en font-latin">{item.companyEn}</span>
                  </div>
                  <span className="experience-role-pill">{item.role}</span>
                </div>

                <p className="experience-desc">{item.description}</p>

                <div className="experience-highlights-box">
                  <h4 className="highlights-title">دستاوردها و بروندادهای کلیدی:</h4>
                  <ul className="highlights-list">
                    {item.highlights.map((high, hIdx) => (
                      <li key={hIdx} className="highlight-item">
                        <CheckCircle2 size={16} className="text-brand-orange highlight-icon" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-tags-row">
                  {item.tags.map((tag, tIdx) => (
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
