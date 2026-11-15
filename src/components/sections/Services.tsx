import React from 'react';
import { GraduationCap, Layout, Music2, Palette, Sparkles, Video } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { resumeData } from '../../data/resumeData';

const icons: Record<string, LucideIcon> = {
  'product-uiux': Layout,
  'ai-workflows': Sparkles,
  'generative-media': Video,
  'visual-identity': Palette,
  'creative-direction': Music2,
  'education-mentorship': GraduationCap
};

export const Services: React.FC = () => (
  <section id="services" className="section" aria-labelledby="services-title">
    <div className="container">
      <Heading
        id="services-title"
        title="خدمات"
        sub="ترکیب دیزاین محصول، متدهای نوین مهندسی با هوش مصنوعی و هدایت خلاقانه پروژه‌ها"
      />
      <ul className="services">
        {resumeData.capabilities.map(c => {
          const Icon = icons[c.id] ?? Layout;
          return (
            <li key={c.id} className="service">
              <span className="service__icon">
                <Icon size={70} strokeWidth={1.2} aria-hidden="true" />
              </span>
              <h3 className="service__title">{c.title}</h3>
              <p className="service__text">{c.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Services;
