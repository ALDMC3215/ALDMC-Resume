import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { jobs } from '../../data/experience';
import { credentials } from '../../data/education';
import { toFa } from '../../utils/fa';

/** "2022 — PRESENT" becomes "۲۰۲۲ — اکنون": one date format, Persian digits. */
const fmtPeriod = (period: string) => toFa(period.replace('PRESENT', 'اکنون'));

export const Experience: React.FC = () => (
  <section id="experience" className="section" aria-labelledby="experience-title">
    <div className="container">
      <Heading
        id="experience-title"
        title="سوابق کاری"
        sub="تجربه هدایت طراحی، تدریس دانشگاهی و کارگاهی، ساخت محصولات تجاری و خلق هویت‌های ماندگار"
      />

      <ul className="jobs">
        {jobs.map(job => (
          <li key={job.id} className="job">
            <span className="job__period">
              <Calendar size={16} aria-hidden="true" />
              <span dir="rtl">{fmtPeriod(job.period)}</span>
            </span>
            <h3 className="job__company">{job.company}</h3>
            <p className="job__role">{job.role}</p>
            <p className="job__text">{job.description}</p>
            <ul className="job__bullets">
              {job.achievements.map(a => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <ul className="job__tags">
              {job.tags.map(t => (
                <li key={t} className="chip lt">
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="heading heading--sub">
        <h3 className="heading__title heading__title--sm">آموزش و پشتوانه علمی</h3>
        <p className="heading__sub">
          انتقال دانش طراحی به نسل جدید طراحان، برگزاری کارگاه‌های تخصصی و پشتوانه آکادمیک مهندسی
        </p>
      </div>

      <ul className="edu">
        {credentials.map(c => (
          <li key={c.id} className="job edu__item">
            <span className="job__period">{toFa(c.badge)}</span>
            <h3 className="job__company">{c.title}</h3>
            <p className="job__role">{c.organization}</p>
            <p className="edu__duration">
              <Clock size={16} aria-hidden="true" />
              <span>{toFa(c.duration)}</span>
            </p>
            <p className="job__text">{c.description}</p>
            <ul className="job__bullets">
              {c.highlights.map(h => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <ul className="job__tags">
              {c.tags.map(t => (
                <li key={t} className="chip lt">
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
