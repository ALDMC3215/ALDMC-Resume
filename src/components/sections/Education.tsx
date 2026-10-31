import React from 'react';
import { resumeData } from '../../data/resumeData';
import { Award, Clock, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = resumeData;

  return (
    <section className="section-wrapper education-section" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">تحصیلات</h2>
          <p className="section-desc">پایه‌های علمی و مهندسی در ترکیب با تفکر طراحی محصول</p>
        </div>

        {/* Education Highlight Card */}
        <div className="education-card card-editorial">
          <div className="education-grid">
            <div className="education-icon-col">
              <div className="education-icon-wrap">
                <Award size={32} className="text-brand-orange" />
              </div>
            </div>

            <div className="education-details-col">
              <div className="education-degree-header">
                <div>
                  <h3 className="education-degree">{education.degree}</h3>
                  <span className="education-degree-en font-latin">{education.degreeEn}</span>
                </div>
                <div className="education-status-tag">
                  <Clock size={14} className="text-brand-orange" />
                  <span>{education.status}</span>
                </div>
              </div>

              <p className="education-previous">{education.previous}</p>
              <p className="education-description">{education.description}</p>

              <div className="education-meta-row">
                <span className="education-location">
                  <MapPin size={14} />
                  <span>{education.location}</span>
                </span>
                <span className="education-verified-badge font-latin">ACADEMIC RECORD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
