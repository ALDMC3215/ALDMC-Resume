import React from 'react';
import { resumeData } from '../../data/resumeData';
import { GraduationCap, BookOpen, Check } from 'lucide-react';

export const Teaching: React.FC = () => {
  const { teaching } = resumeData;

  return (
    <section className="section-wrapper teaching-section" id="teaching">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">تجربه تدریس</h2>
          <p className="section-desc">{teaching.philosophy}</p>
        </div>

        {/* Courses Grid */}
        <div className="teaching-grid">
          {teaching.courses.map((course, idx) => (
            <div key={idx} className="teaching-card card-editorial">
              <div className="teaching-card-top">
                <span className="teaching-category-pill font-latin">{course.category}</span>
                <span className="teaching-num font-latin">0{idx + 1}</span>
              </div>

              <div className="teaching-card-header">
                <div className="teaching-icon-wrap">
                  <BookOpen size={20} className="text-brand-orange" />
                </div>
                <h3 className="teaching-title">{course.title}</h3>
              </div>

              <p className="teaching-desc">{course.description}</p>

              <div className="teaching-topics-box">
                <h4 className="topics-title">سرفصل‌های کلیدی دوره:</h4>
                <ul className="topics-list">
                  {course.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="topic-item">
                      <Check size={14} className="topic-check text-brand-orange" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Philosophy Banner */}
        <div className="teaching-banner card-editorial">
          <div className="teaching-banner-icon">
            <GraduationCap size={36} className="text-brand-orange" />
          </div>
          <div className="teaching-banner-content">
            <h4 className="banner-title">رویکرد آموزش مبتنی بر پروژه‌های واقعی</h4>
            <p className="banner-text">
              در کلاس‌ها و کارگاه‌های من، هنرجویان با شبیه‌سازی شرایط استارت‌آپی و شرکت‌های واقعی، از همان روز اول دست به ابزار می‌شوند و دیزاین را به عنوان ابزاری برای حل مسئله، درآمدزایی و ساخت محصول می‌آموزند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
