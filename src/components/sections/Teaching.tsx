import React from 'react';
import { resumeData } from '../../data/resumeData';
import { GraduationCap, Layout, PenTool, Sparkles, Palette } from 'lucide-react';

export const Teaching: React.FC = () => {
  const { teaching } = resumeData;
  // Feature the 4 core modern disciplines: UI/UX, Figma Mastery, AI Workflows & Prompting, Visual Design
  const displayCourses = teaching.courses.slice(0, 4);

  const getCourseIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Layout size={16} className="text-brand-orange" />;
      case 1:
        return <PenTool size={16} className="text-brand-orange" />;
      case 2:
        return <Palette size={16} className="text-brand-orange" />;
      case 3:
        return <Sparkles size={16} className="text-brand-orange" />;
      default:
        return <Layout size={16} className="text-brand-orange" />;
    }
  };

  return (
    <section className="section-wrapper teaching-section" id="teaching">
      <div className="container">
        {/* Section Header */}
        <div className="section-header teaching-header">
          <span className="section-kicker">EDUCATION & MENTORSHIP</span>
          <h2 className="section-title">تجربه تدریس</h2>
          <p className="section-desc">{teaching.philosophy}</p>
        </div>

        {/* Courses Grid: 4 columns */}
        <div className="teaching-grid">
          {displayCourses.map((course, idx) => (
            <div key={idx} className="teaching-card card-editorial">
              <div className="teaching-card-top">
                <span className="teaching-category-pill font-latin">{course.category}</span>
                <span className="teaching-num font-latin">0{idx + 1}</span>
              </div>

              <div className="teaching-card-header">
                <div className="teaching-icon-wrap">
                  {getCourseIcon(idx)}
                </div>
                <h3 className="teaching-title">{course.title}</h3>
              </div>

              <p className="teaching-desc">{course.description}</p>

              <div className="teaching-topics-wrap">
                {course.topics.slice(0, 3).map((topic, tIdx) => (
                  <span key={tIdx} className="teaching-topic-chip">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Pedagogy Bar */}
        <div className="teaching-pedagogy-bar">
          <div className="teaching-pedagogy-inner">
            <span className="teaching-pedagogy-icon-wrap">
              <GraduationCap size={15} className="text-brand-orange" />
            </span>
            <span className="teaching-pedagogy-lead">رویکرد انتقال دانش:</span>
            <span className="teaching-pedagogy-text">
              آموزش مبتنی بر پروژه‌های واقعی، شبیه‌سازی چالش‌های بازار کار و مهارت حل مسئله در ساخت محصول.
            </span>
          </div>
          <div className="teaching-pedagogy-tag font-latin">PRACTICE-FIRST MENTORSHIP</div>
        </div>
      </div>
    </section>
  );
};
