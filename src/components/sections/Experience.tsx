import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { TagList } from '../ui/TagList';
import { CardGrid } from '../ui/CardGrid';
import { ResumeSection } from '../ui/ResumeSection';
import { jobs } from '../../data/experience';
import { credentials } from '../../data/education';
import { toFa } from '../../utils/fa';

/** "2022 — PRESENT" becomes "۲۰۲۲ — اکنون": one date format, Persian digits. */
const fmtPeriod = (period: string) => toFa(period.replace('PRESENT', 'اکنون'));

export const Experience: React.FC = () => (
  <ResumeSection
    id="experience"
    title="سوابق کاری"
    sub="تجربه هدایت طراحی، تدریس دانشگاهی و کارگاهی، ساخت محصولات تجاری و خلق هویت‌های ماندگار"
  >
    <ol className="experience-list">
      {jobs.map(job => (
        <li key={job.id} className="experience-entry">
          <span className="d-inline-flex align-items-center gap-2 job__period">
            <Calendar size={16} aria-hidden="true" />
            <span dir="rtl">{fmtPeriod(job.period)}</span>
          </span>
          <article className="experience-entry__detail">
            <h3 className="job__company">{job.company}</h3>
            <p className="job__role">{job.role}</p>
            <p className="job__text">{job.description}</p>
            <ul className="d-grid job__bullets">
              {job.achievements.map(a => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <TagList tags={job.tags} />
          </article>
        </li>
      ))}
    </ol>

    <div className="heading heading--sub">
      <h3 className="heading__title heading__title--sm">آموزش و پشتوانه علمی</h3>
      <p className="heading__sub">
        انتقال دانش طراحی به نسل جدید طراحان، برگزاری کارگاه‌های تخصصی و پشتوانه آکادمیک مهندسی
      </p>
    </div>

    <CardGrid xs={1} lg={2} xxl={3}>
      {credentials.map(c => (
        <article key={c.id} className="d-flex flex-column align-items-start job edu__item">
          <span className="d-inline-flex align-items-center gap-2 job__period">{toFa(c.badge)}</span>
          <h3 className="job__company">{c.title}</h3>
          <p className="job__role">{c.organization}</p>
          <p className="d-flex align-items-center gap-2 edu__duration">
            <Clock size={16} aria-hidden="true" />
            <span>{toFa(c.duration)}</span>
          </p>
          <p className="job__text">{c.description}</p>
          <ul className="d-grid job__bullets">
            {c.highlights.map(h => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <TagList tags={c.tags} />
        </article>
      ))}
    </CardGrid>
  </ResumeSection>
);

export default Experience;
