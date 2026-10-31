export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  role: string;
  description: string;
  details: string[];
  tags: string[];
  image: string;
  mediaType: 'image' | 'video';
  videoPreview?: string;
  videoPoster?: string;
  watermarkText?: string;
  featured?: boolean;
  link?: string;
  actionLabel?: string;
  displayOrder: number;
  publicVisibility: boolean;
}

export interface DigitalContentItem {
  id: string;
  brand: string;
  brandEn: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  link?: string;
  actionLabel?: string;
}

export interface MusicTrackItem {
  id: string;
  title: string;
  genre: string;
  year: string;
  audioUrl: string;
  coverImage: string;
  description?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'picofy-landing',
    title: 'طراحی وبسایت خدمات برنامه نویسی',
    category: 'Web Experience & UI/UX',
    role: 'طراحی رابط کاربری و توسعه فرانت‌اند تعاملی',
    description: 'طراحی وبسایت معرفی خدمات برنامه نویسی و توسعه نرم افزار، با تمرکز روی تجربه کاربری، ساختار خدمات، طراحی ریسپانسیو، تعاملات پیشرفته و توسعه رابط کاربری با کمک هوش مصنوعی.',
    details: [
      'استفاده از صحنه شبکه تعاملی سه‌بعدی با Three.js برای نمایش مدرن زیرساخت‌های نرم‌افزاری',
      'پالت رنگی تاریک متالیک با کنتراست حساب‌شده و خوانایی حداکثری تایپوگرافی فارسی',
      'طراحی کامپوننت‌های ماژولار و بهینه‌سازی کامل نسخه موبایل و تبلت با استاندارد Mobile-First',
      'پیاده‌سازی انیمیشن‌های دقیق میکرو و جریان بصری متناسب با سرعت بارگذاری بالا'
    ],
    tags: ['Figma', 'Three.js', 'React', 'AI Workflow', 'Responsive UI', 'RTL'],
    image: '/projects/picofy-live.png',
    mediaType: 'image',
    featured: true,
    link: 'https://picofy-landing.vercel.app/',
    actionLabel: 'مشاهده وبسایت',
    displayOrder: 1,
    publicVisibility: true,
  },
  {
    id: 'novin-call-manager',
    title: 'پنل مدیریت تماس تبلیغاتی شرکت',
    category: 'Internal Tool & Dashboard',
    role: 'طراحی محصول، تجربه کاربری و سیستم‌سازی فرانت‌اند',
    description: 'طراحی و توسعه یک پنل مدیریتی فارسی برای ثبت، مدیریت و پیگیری تماس های تبلیغاتی، سازماندهی اطلاعات مخاطبان و بهینه سازی فرایند ارتباط و پیگیری درخواست ها.',
    details: [
      'طراحی جریان کاری متمرکز بر سرعت برای ثبت مکالمات و دسته‌بندی مراجعین کمتر از ۲۰ ثانیه',
      'فیلترهای بصری وضعیت پیگیری، تاریخچه تماس‌ها و یادآوری تعاملی برای مشاوران',
      'داشبورد گزارش‌گیری تحلیلی با نمودارهای آماری نرخ تبدیل و تفکیک کانال‌های جذب',
      'رابط کاربری تیره با گلیچ لترهای برند و رعایت دقیق حریم داده‌های مشتریان'
    ],
    tags: ['React', 'Dashboard', 'Internal Tool', 'UX Architecture', 'RTL Layout'],
    image: '/projects/call-manager-live.png',
    mediaType: 'image',
    featured: true,
    link: 'https://novintech-call-manager.vercel.app/',
    actionLabel: 'مشاهده پنل',
    displayOrder: 2,
    publicVisibility: true,
  },
  {
    id: 'habisa-ai-videos',
    title: 'تولید محتوای تبلیغاتی شرکت هابیسا',
    subtitle: 'دستیار هوشمند خرید و تدارکات ساختمان',
    category: 'AI Video Production / Advertising / Creative Direction',
    role: 'سناریونویسی، کانسپت بصری و تولید ویدیو با AI',
    description: 'طراحی و تولید محتوای تبلیغاتی برای معرفی دستیار هوشمند خرید و تدارکات ساختمان هابیسا؛ از سناریونویسی و طراحی زبان بصری تا تولید ویدیو با هوش مصنوعی، تدوین، هماهنگی بصری و صداگذاری.',
    details: [
      'طراحی زبان تصویری منحصربه‌فرد با بافت مقوایی و کاغذی پایدار در تمامی سکانس‌ها',
      'بهره‌گیری از مدل‌های پیشرفته تولید ویدیو (Google Flow و Veo) برای حرکت‌های نرم دوربین',
      'تدوین دقیق، زیرنویس‌های خوانای فارسی و زمان‌بندی هماهنگ با ریتم پیام تبلیغاتی',
      'خروجی وب‌بهینه شده و سازگار با رفتار کاربران در شبکه‌های اجتماعی'
    ],
    tags: ['AI Video', 'Creative Direction', 'Storyboarding', 'Google Flow', 'Veo'],
    image: '/projects/habisa-poster.jpg',
    mediaType: 'video',
    videoPreview: '/projects/habisa-preview.mp4',
    videoPoster: '/projects/habisa-poster.jpg',
    watermarkText: 'HABISA / PORTFOLIO DEMO',
    featured: true,
    displayOrder: 3,
    publicVisibility: true,
  }
];

export const digitalContentExperience: DigitalContentItem[] = [
  {
    id: 'content-novintech',
    brand: 'نوین تک',
    brandEn: 'Novin Tech',
    title: 'طراحی محتوای دیجیتال و هویت بصری',
    category: 'Visual Systems & Social Media Design',
    description: 'طراحی و توسعه سیستم‌های محتوایی، قالب‌های آموزشی و تبلیغاتی و حفظ یکپارچگی هویت بصری در شبکه‌های اجتماعی.',
    highlights: [
      'طراحی گریدبندی اختصاصی اسلایدها و استوری‌های آموزشی فارسی',
      'هماهنگی پالت رنگی سازمانی با تایپوگرافی خوانا و مدرن',
      'تدوین راهنمای بصری برای تولید مداوم و باکیفیت محتوا'
    ]
  },
  {
    id: 'content-picofy',
    brand: 'پیکوفای',
    brandEn: 'Picofy',
    title: 'طراحی محتوای تکنولوژی و شبکه‌های اجتماعی',
    category: 'AI Tech Content & Brand Identity',
    description: 'طراحی و مدیریت محتوای بصری، توسعه قالب‌های خبری و تبلیغاتی و ایجاد زبان بصری یکپارچه برای محصولات و خدمات دیجیتال.',
    highlights: [
      'طراحی پست‌های تکنولوژی‌محور و کاورهای گرافیکی مقایسه‌ای هوش مصنوعی',
      'زبان طراحی تیره با کنتراست رنگی نئونی سازگار با فضای استارتاپ‌های نرم‌افزاری',
      'مدیریت پیج و تعامل با جامعه کاربری حوزه فناوری'
    ],
    link: 'https://www.instagram.com/picofy_ir/',
    actionLabel: 'مشاهده صفحه پیکوفای'
  }
];

export const musicTracksData: MusicTrackItem[] = [
  {
    id: 'gentleman',
    title: 'A Gentleman, More or Less',
    genre: 'Music Hall · Dramatic',
    year: '2026',
    audioUrl: '/music/gentleman.mp3',
    coverImage: '/music/gentleman-cover.jpg',
    description: 'موزیک‌هال کلاسیک بریتانیا با حس و حال معاصر و دراماتیک.'
  },
  {
    id: 'flow-of-light',
    title: 'Flow of Light',
    genre: 'Ambient · Atmospheric',
    year: '2026',
    audioUrl: '/music/flow-of-light.mp3',
    coverImage: '/music/flow-of-light-cover.jpg',
    description: 'سفر صوتی آرام و فضاساز با هارمونی‌های عمیق الکترونیک.'
  },
  {
    id: 'no-walls',
    title: 'No Walls',
    genre: 'Cinematic · Electronic',
    year: '2026',
    audioUrl: '/music/no-walls.mp3',
    coverImage: '/music/no-walls-cover.jpg',
    description: 'ارکستراسیون سینمایی با بیس‌های قدرتمند آنالوگ برای عبور از مرزها.'
  },
  {
    id: 'please-and-thank-you',
    title: 'Please and Thank You',
    genre: 'Indie Chamber · Soulful',
    year: '2026',
    audioUrl: '/music/please-and-thank-you.mp3',
    coverImage: '/music/please-and-thank-you-cover.jpg',
    description: 'ملودی پیانو و آواز چمبر دلنشین پیرامون مهربانی‌های روزمره.'
  }
];
