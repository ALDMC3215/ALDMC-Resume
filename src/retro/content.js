import { portfolio, categoryLabels } from '../data/portfolio.ts';
import { musicTracksData } from '../data/projects.ts';

const featured = {
  'nader-gold': { order: 0, art: '/projects/retro-nader.webp', short: 'نادرگلد' },
  'picofy-landing': { order: 1, art: '/projects/retro-picofy.webp', short: 'پیکوفای' },
  'call-manager': { order: 2, art: '/projects/retro-novin.webp', short: 'مدیریت تماس نوین‌تک' },
};

const sections = {
  profile: [{
    id: 'ali', name: 'علی فرقانی', brand: 'ALDMC', role: 'طراح محصول، UI/UX و مدرس',
    studioLine: 'برای ایده‌هایی که باید واقعی بشن.',
    bio: 'از طراحی رابط توی فیگما تا ساخت نمونه‌ی تعاملی و بررسی کیفیت اجرا، همراه پروژه می‌مونم. تمرکزم روی وب فارسی، تجربه‌ی کاربری و تولید خلاقانه با هوش مصنوعیه.',
    contact: [
      { label: 'ایمیل', href: 'mailto:aldmc4543@gmail.com' },
      { label: 'تلگرام', href: 'https://t.me/ALDMC' },
      { label: 'واتس‌اپ', href: 'https://wa.me/989174543813' },
      { label: 'Instagram', href: 'https://www.instagram.com/aldmc_origin/' },
      { label: 'GitHub', href: 'https://github.com/ALDMC3215' },
    ],
  }],
  projects: portfolio.map((project, index) => ({
    ...project, order: 10 + index, ...featured[project.id],
  })).sort((a, b) => a.order - b.order),
  experience: [
    { id: 'novin-tech', title: 'نوین‌تک', role: 'مدرس و عضو تیم اجرایی', copy: 'تدریس فیگما، فتوشاپ و ابزارهای AI، طراحی سامانه‌ی مدیریت تماس و توسعه‌ی محتوای آموزشی.' },
    { id: 'picofy', title: 'پیکوفای', role: 'طراحی وب و هویت بصری', copy: 'طراحی لندینگ و تعاملات سه‌بعدی، ساخت قالب‌های بصری و تولید محتوا برای شبکه‌های اجتماعی.' },
    { id: 'habisa', title: 'هابیسا', role: 'سناریو و تولید ویدیو', copy: 'ساخت استوری‌بورد و ویدیوهای معرفی با زبان بصری کاغذی برای مشاوره‌ی خرید تجهیزات تهویه.' },
    { id: 'aldmc', title: 'ALDMC', role: 'طراحی و پروژه‌های شخصی', copy: 'طراحی هویت بصری خرمالویی، توسعه‌ی وب تعاملی و ساخت موسیقی با هوش مصنوعی.' },

  ],
  services: [
    { id: 'design', title: 'طراحی محصول و UI/UX', copy: 'از مسیر و وایرفریم تا طراحی رابط و دیزاین سیستم.' },
    { id: 'web', title: 'ساخت وب تعاملی', copy: 'طراحی و پیاده‌سازی لندینگ، داشبورد و پروتوتایپ.' },
    { id: 'media', title: 'هویت بصری و محتوای AI', copy: 'طراحی برند، استوری‌بورد و تولید ویدیو و محتوای دیجیتال.' },
    { id: 'teaching', title: 'تدریس و کارگاه', copy: 'آموزش عملی فیگما، طراحی رابط و ابزارهای هوش مصنوعی.' },
  ],
  music: musicTracksData,
};

export { sections, categoryLabels };
