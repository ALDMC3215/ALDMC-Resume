import React from 'react';
import { resumeData } from '../../data';
import { TestimonialsCard } from '../ui/TestimonialsCard';
import { Sparkles, Radio } from 'lucide-react';

export const AiShowcase: React.FC = () => {
  const { musicTracks } = resumeData;

  return (
    <section className="section-wrapper ai-showcase-section music-dark-band" id="ai-showcase">
      <div className="container">
        {/* Section Header */}
        <div className="section-header music-section-header">
          <div className="section-kicker font-latin">
            <Radio size={14} className="text-brand-orange animate-pulse" />
            <span>CREATIVE LAB · SOUND DESIGN</span>
          </div>
          <h2 className="section-title text-white">
            موسیقی و آثار خلاقانه <span className="accent-word">ALDMC</span>
          </h2>
          <p className="section-desc text-zinc-400">
            قطعات صوتی اورجینال خلق شده با هوش مصنوعی (Suno و Google AI Audio) با تمرکز بر فضاسازی، ریتم و هارمونی مدرن.
          </p>
        </div>

        {/* 3D Stacked Card Testimonial Component */}
        <TestimonialsCard items={musicTracks} />

        {/* Footer Note */}
        <div className="music-band-footer">
          <div className="music-footer-info">
            <Sparkles size={14} className="text-brand-orange" />
            <span>کلیه قطعات با ابزارهای هوش مصنوعی ساخته شده و جهت نمایش در پورتفولیو گردآوری شده‌اند.</span>
          </div>
          <span className="font-latin text-xs text-zinc-500">ALDMC SOUND LAB · 2026</span>
        </div>
      </div>
    </section>
  );
};
