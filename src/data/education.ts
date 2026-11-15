export interface Credential {
  id: string;
  title: string;
  type: string;
  badge: string;
  duration: string;
  organization: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const credentials: Credential[] = [
  {
    id: 'figma-masterclass',
    title: 'دوره‌های تخصصی Figma و طراحی سیستم‌های UI/UX',
    type: 'COURSE // WORKSHOP',
    badge: '+100 ساعت تدریس',
    duration: 'بیش از ۱۰۰ ساعت کارگاه عملی',
    organization: 'موسسه خبره‌بنیان نوین‌تک · شیراز',
    description: 'تدریس کارگاهی و پروژه‌محور فیگما با رویکرد ورود به بازار کار، متدهای Design System، Auto Layout پیشرفته، متغیرها (Variables) و استانداردهای تحویل طرح به برنامه‌نویس (Dev Handoff).',
    highlights: [
      'طراحی صفر تا صد ۳ پروژه واقعی وب و اپلیکیشن',
      'آموزش کامپوننت‌سازی اتمیک و ساخت کیت‌های UI مقیاس‌پذیر',
      'منتورینگ تک‌به‌تک و بررسی پورتفولیوی دانشجویان'
    ],
    tags: ['FIGMA ADVANCED', 'DESIGN TOKENS', 'WORKSHOP', 'MENTORSHIP']
  },
  {
    id: 'vibe-coding-ai',
    title: 'مهندسی هوش مصنوعی و Vibe Coding',
    type: 'MASTERCLASS // AI WORKFLOW',
    badge: 'متدولوژی نوین',
    duration: 'کارگاه‌های جامع توسعه ایجنتیک',
    organization: 'استودیو ALDMC و رویدادهای تخصصی',
    description: 'آموزش به‌کارگیری عملی Claude، ChatGPT، Cursor و Google Antigravity در فرآیند سریع ساخت پروتوتایپ‌های زنده وب؛ پیوند زدن مهارت دیزاین با هوش مصنوعی مولد بدون اتلاف وقت.',
    highlights: [
      'استراتژی‌های پرامپت‌نویسی ساختاریافته و برنامه‌ریزی ایجنت‌ها',
      'ساخت پروتوتایپ‌های تعاملی و وب‌اپلیکیشن در چند ساعت',
      'یکپارچه‌سازی شیدرها و انیمیشن‌های پیشرفته با دستیار هوش مصنوعی'
    ],
    tags: ['VIBE CODING', 'AGENTIC AI', 'PROMPT ARCHITECTURE']
  },
  {
    id: 'academic-degree',
    title: 'کارشناسی مهندسی کامپیوتر',
    type: 'ACADEMIC // UNIVERSITY',
    badge: 'پایه آکادمیک',
    duration: 'ورودی ۱۴۰۰ (پیش‌تر مهندسی برق از ۱۳۹۸)',
    organization: 'دانشگاه دولتی / سراسری',
    description: 'تحصیلات آکادمیک در مهندسی کامپیوتر با تمرکز بر ساختمان داده‌ها، معماری نرم‌افزار و طراحی تعامل انسان و کامپیوتر (HCI)؛ ایجاد درک عمیق از محدودیت‌ها و توانمندی‌های کد در خدمت دیزاین.',
    highlights: [
      'درک اصول مهندسی نرم‌افزار، الگوریتم‌ها و بهینه‌سازی',
      'پیوند میان منطق فنی و دید بصری تجربه کاربری',
      'تسلط بر ساختار و تعاملات وب، شبکه و پروتکل‌ها'
    ],
    tags: ['BS COMPUTER SCIENCE', 'HCI', 'SYSTEMS ARCHITECTURE']
  }
];
