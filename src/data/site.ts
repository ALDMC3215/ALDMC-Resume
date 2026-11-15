import { resumeData } from './resumeData';
import { toFa } from '../utils/fa';

/** Single place for the things the layout needs. */
export const site = {
  name: resumeData.personalInfo.name,
  brand: resumeData.personalInfo.brand,
  headline: 'طراح محصول و UI/UX',
  title: resumeData.personalInfo.title,
  intro: resumeData.personalInfo.intro,
  bio: resumeData.personalInfo.bio,
  philosophy:
    'دیزاین ابزاری است برای حل مسائل واقعی کاربران و خلق تجربه روان و پایدار؛ با شتاب‌دهی هوش مصنوعی فاصله میان ایده تا خروجی نهایی را کمینه می‌کنم.',
  contact: resumeData.contact,
  /**
   * Portrait. Drop a new file at the same path to replace it.
   * Set `cutout` to true when the file is a transparent PNG/WebP cut-out
   * (the About arch then lets the head rise above the arch, like the design).
   */
  portrait: { src: '/brand/portrait.webp', cutout: false },
  stats: [
    { value: `+${toFa(3)}`, label: 'سال تجربه' },
    { value: `+${toFa(100)}`, label: 'ساعت تدریس' },
    { value: toFa(5), label: 'پروژه منتخب' }
  ]
};

export const nav = [
  { id: 'home', label: 'خانه' },
  { id: 'services', label: 'خدمات' },
  { id: 'about', label: 'درباره من' },
  { id: 'experience', label: 'سوابق' },
  { id: 'portfolio', label: 'نمونه‌کارها' },
  { id: 'music', label: 'موسیقی' },
  { id: 'contact', label: 'تماس' }
];
