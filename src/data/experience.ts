export interface Job {
  id: string;
  company: string;
  period: string;
  role: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export const jobs: Job[] = [
  {
    id: 'novin-tech',
    company: 'نوین‌تک (موسسه خبره‌بنیان)',
    period: '2022 — PRESENT',
    role: 'مدرس UI/UX، طراح محصول و عضو تیم اجرایی',
    location: 'شیراز · حضوری و هیبرید',
    description: 'تدریس دوره‌های تخصصی Figma، فتوشاپ و کار با ابزارهای AI؛ طراحی و توسعه سامانه Call Manager داخلی؛ مدیریت هویت بصری دوره‌ها و راهنمایی ورود ده‌ها هنرجو به بازار کار.',
    achievements: [
      'تدریس بیش از ۱۰۰ ساعت کارگاه تخصصی فیگما و اصول تجربه کاربر',
      'طراحی سیستم داخلی ثبت اطلاعات و پیگیری مراجعین در کمتر از ۳۰ ثانیه',
      'همکاری در تدوین نقشه راه آموزشی و سیستم ارزیابی پروژه‌های واقعی'
    ],
    tags: ['FIGMA MENTORSHIP', 'CALL MANAGER CRM', 'COURSE DIRECTION']
  },
  {
    id: 'picofy',
    company: 'پیکوفای (Picofy Studio)',
    period: '2023 — PRESENT',
    role: 'طراح وبسایت، هویت بصری و توسعه محتوا',
    location: 'ریموت · بین‌المللی',
    description: 'تدوین زبان بصری لندینگ، دیزاین سیستم تم تیره و تعاملی، همکاری در پیاده‌سازی صحنه سه‌بعدی Three.js و بهینه‌سازی دسترسی‌پذیری و نرخ تبدیل محصول.',
    achievements: [
      'خلق دیزاین سیستم دارک‌مود با توکن‌های طراحی منسجم',
      'پیاده‌سازی المان‌های سه‌بعدی و تعاملات روان کاربر در لندینگ',
      'افزایش نرخ تعامل و ثبت‌نام با بازطراحی ساختار بصری'
    ],
    tags: ['DESIGN SYSTEM', 'THREE.JS', 'CONVERSION RATE', 'DARK THEME']
  },
  {
    id: 'habisa',
    company: 'استودیو تبلیغاتی هابیسا (Habisa)',
    period: '2024',
    role: 'تولید محتوای ویدیویی و تبلیغات هوش مصنوعی',
    location: 'شیراز · پروژه‌ای',
    description: 'طراحی سناریوهای داستانی، ابداع زبان بصری مقوایی با ابزارهای نوین Google Flow و Veo، استوری‌بوردینگ و تولید خروجی‌های ویدیویی هوش مصنوعی ساختمانی.',
    achievements: [
      'طراحی کاراکتر و محیط یکپارچه با هوش مصنوعی',
      'تلفیق سناریوی تبلیغاتی سنتی با ابزارهای نسل جدید ویدیو',
      'تولید محتوای تعاملی شبکه‌های اجتماعی با هویت بصری متمایز'
    ],
    tags: ['GOOGLE VEO', 'AI VIDEO WORKFLOW', 'CREATIVE ADVERTISING']
  },
  {
    id: 'aldmc-studio',
    company: 'استودیو شخصی ALDMC',
    period: 'PERSIMMON V6 — 2024 / 2025',
    role: 'طراحی خلاق، هویت بصری و Vibe Coding',
    location: 'شیراز · مستقل',
    description: 'خلق هویت بصری جامع نسخه ۶ خرمالویی، توسعه وب با متد Vibe Coding و Agentic AI، ساخت کامپوننت‌های تعاملی و موسیقی با هوش مصنوعی.',
    achievements: [
      'تدوین سیستم هویت بصری Persimmon با تایپوگرافی اختصاصی پیدا',
      'پیاده‌سازی معماری مدرن وبسایت با بالاترین استانداردهای پرفورمنس',
      'توسعه ابزارهای تعاملی مدرن و شیدرهای شیشه‌ای فیزیکی'
    ],
    tags: ['BRAND IDENTITY', 'VIBE CODING', 'AI MEDIA PRODUCTION']
  }
];
