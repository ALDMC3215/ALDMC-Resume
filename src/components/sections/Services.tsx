import React from 'react';
import { GraduationCap, Layout, Music2, Palette, Sparkles, Video } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { CardGrid } from '../ui/CardGrid';
import { ResumeSection } from '../ui/ResumeSection';
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
  <ResumeSection
    id="services"
    title="خدمات"
    sub="ترکیب دیزاین محصول، متدهای نوین مهندسی با هوش مصنوعی و هدایت خلاقانه پروژه‌ها"
  >
    <CardGrid xs={1} md={2} xxl={3}>
      {resumeData.capabilities.map(c => {
        const Icon = icons[c.id] ?? Layout;
        return (
          <article key={c.id} className="d-flex flex-column align-items-start gap-3 service">
            <span className="d-grid service__icon">
              <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <h3 className="service__title">{c.title}</h3>
            <p className="service__text">{c.description}</p>
          </article>
        );
      })}
    </CardGrid>
  </ResumeSection>
);

export default Services;
