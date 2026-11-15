import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { site } from '../../data/site';
import { allTools, mainTools } from '../../data/tools';
import { toFa } from '../../utils/fa';

export const About: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <Heading id="about-title" title="درباره من" sub="طراحی، اجرا و خلاقیت در یک مسیر پیوسته و هدفمند" />

        <div className="about">
          <div className={`about__photo${site.portrait.cutout ? ' is-cutout' : ''}`}>
            <span className="about__arch" aria-hidden="true" />
            <img src={site.portrait.src} alt="" width={800} height={800} loading="lazy" decoding="async" />
          </div>

          <div className="about__text">
            <p>{site.bio}</p>
            <p>{site.philosophy}</p>
            <a href="#contact" className="btn btn--primary about__cta">
              <MessageSquare size={24} aria-hidden="true" />
              <span>شروع همکاری</span>
            </a>
          </div>
        </div>

        <ul className="rings" aria-label="ابزارهای اصلی">
          {mainTools.map(t => (
            <li key={t.name} className="ring">
              <span className="ring__circle">
                <span className="ring__mark lt">{t.mark}</span>
              </span>
              <span className="ring__name lt">{t.name}</span>
              <span className="ring__role lt">{t.role}</span>
            </li>
          ))}
        </ul>

        <div className="about__tools">
          <button
            type="button"
            className="btn btn--outline btn--sm"
            aria-expanded={showAll}
            aria-controls="all-tools"
            onClick={() => setShowAll(s => !s)}
          >
            <span>{showAll ? 'بستن لیست ابزارها' : `مشاهده همه ${toFa(allTools.length)} ابزار هوش مصنوعی`}</span>
            {showAll ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
          </button>

          {showAll && (
            <ul id="all-tools" className="about__chips">
              {allTools.map(t => (
                <li key={t} className="chip lt">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
