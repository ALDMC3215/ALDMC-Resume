import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { ResumeSection } from '../ui/ResumeSection';
import { site } from '../../data/site';
import { allTools, mainTools } from '../../data/tools';
import { toFa } from '../../utils/fa';

export const About: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <ResumeSection
      id="about"
      title="درباره من"
      sub="طراحی، اجرا و خلاقیت در یک مسیر پیوسته و هدفمند"
    >
      <div className="d-grid justify-content-center align-items-center about">
        <div className={`position-relative w-100 about__photo${site.portrait.cutout ? ' is-cutout' : ''}`}>
          <img src={site.portrait.src} alt="" width={800} height={800} loading="lazy" decoding="async" />
        </div>

        <div className="d-flex flex-column align-items-start gap-4 about__text">
          <p>{site.bio}</p>
          <p>{site.philosophy}</p>
          <Button href="#contact" className="about__cta">
            <MessageSquare size={24} aria-hidden="true" />
            <span>شروع همکاری</span>
          </Button>
        </div>
      </div>

      <ul className="tools-list" aria-label="ابزارهای اصلی">
        {mainTools.map(t => (
          <li key={t.name} className="tool">
            <span className="tool__mark lt" aria-hidden="true">{t.mark}</span>
            <div dir="ltr">
              <div className="tool__name">{t.name}</div>
              <div className="tool__role">{t.role}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="d-flex flex-column align-items-center gap-group about__tools">
        <Button
          type="button"
          variant="outline-primary" size="sm"
          aria-expanded={showAll}
          aria-controls="all-tools"
          onClick={() => setShowAll(s => !s)}
        >
          <span>{showAll ? 'بستن لیست ابزارها' : `مشاهده همه ${toFa(allTools.length)} ابزار هوش مصنوعی`}</span>
          {showAll ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
        </Button>

        {showAll && (
          <ul id="all-tools" className="d-flex flex-wrap justify-content-center about__chips">
            {allTools.map(t => (
              <li key={t} className="d-inline-flex align-items-center chip lt">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ResumeSection>
  );
};

export default About;
