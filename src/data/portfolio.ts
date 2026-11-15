export type PortfolioCategory = 'web' | 'product' | 'ai' | 'brand' | 'music';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  /** Small English label shown on the card. */
  label: string;
  role: string;
  summary: string;
  extra?: string;
  tags: string[];
  link?: string;
  /** Real image from /public. Missing images render a clean placeholder slot. */
  image?: string;
  kind?: 'Demo' | 'Internal';
}

export const categoryLabels: Record<PortfolioCategory, string> = {
  web: 'وبسایت',
  product: 'محصول و داشبورد',
  ai: 'هوش مصنوعی',
  brand: 'هویت و محتوا',
  music: 'موسیقی'
};

export const portfolio: PortfolioItem[] = [
  {
    id: 'shiraz-portal',
    title: 'صفحه اصلی پورتال شهرداری شیراز',
    category: 'web',
    label: 'Portal · Public sector',
    role: 'طراح ارشد رابط و تجربه کاربری (UI/UX)',
    summary: 'طراحی جامع تجربه و رابط کاربری صفحه اول وبسایت شهرداری شیراز.',
    extra: 'معماری خدمات شهروندی الکترونیک، سامانه‌های یکپارچه شهری و دسترسی‌پذیری برای بیش از ۲ میلیون شهروند.',
    tags: ['SHIRAZ.IR', 'UI/UX ARCHITECTURE', 'FIGMA', 'DESIGN SYSTEM'],
    link: 'https://shiraz.ir'
  },
  {
    id: 'picofy-landing',
    title: 'لندینگ تعاملی پیکوفای (Picofy)',
    category: 'web',
    label: 'Web 3D · Telegram services',
    role: 'طراح هویت بصری، وب و تعاملات سه‌بعدی',
    summary: 'طراحی و پیاده‌سازی لندینگ خدمات تلگرام با صحنه تعاملی سه‌بعدی Three.js، زبان بصری های‌تک در تم تیره، شیدرهای شیشه‌ای و نرخ تبدیل بهینه.',
    tags: ['THREE.JS', 'WEBGL', 'FIGMA', 'MICRO-INTERACTIONS'],
    link: 'https://picofy.com',
    image: '/projects/picofy-live.webp'
  },
  {
    id: 'call-manager',
    title: 'سامانه مدیریت تماس نوین‌تک (Call Manager)',
    category: 'product',
    label: 'Internal CRM · Workflow',
    role: 'طراح سیستم مدیریت اطلاعات و داشبورد',
    summary: 'طراحی سیستم داخلی ثبت و پیگیری مراجعین و تماس‌های موسسه خبره‌بنیان در کمتر از ۳۰ ثانیه با ساختار استاندارد فارسی و داشبورد گزارش‌گیری.',
    tags: ['INTERNAL CRM', 'RTL DASHBOARD', 'RAPID LOGGING'],
    image: '/projects/call-manager-live.webp',
    kind: 'Internal'
  },
  {
    id: 'nader-gold',
    title: 'فروشگاه آنلاین نادرگلد (Nader Gold)',
    category: 'product',
    label: 'E-commerce · Luxury jewelry',
    role: 'طراح محصول و تجربه خرید دیجیتال',
    summary: 'طراحی دموی فروشگاه طلا و جواهر بر پایه موتیف‌های اصیل ایرانی، قیمت‌گذاری زنده طلا و ارز، طراحی اول-موبایل (Mobile-First) و سبد خرید روان.',
    tags: ['MOBILE-FIRST', 'LUXURY UI', 'GOLD PRICING API'],
    kind: 'Demo'
  },
  {
    id: 'habisa-ai',
    title: 'مجموعه ویدیویی و داستانی هابیسا (Habisa)',
    category: 'ai',
    label: 'AI video · Generative production',
    role: 'سناریونویس و کارگردان فنی هوش مصنوعی',
    summary: 'ابداع زبان بصری مقوایی با ابزارهای Google Flow و Veo، سناریونویسی و تولید محتوای تبلیغاتی هوش مصنوعی در حوزه صنعت ساختمان و املاک.',
    tags: ['GOOGLE VEO', 'GOOGLE FLOW', 'STORYBOARDING', 'MIDJOURNEY'],
    image: '/projects/habisa-poster.jpg'
  },
  {
    id: 'content-novintech',
    title: 'طراحی محتوای دیجیتال و هویت بصری نوین‌تک',
    category: 'brand',
    label: 'Visual systems · Social media',
    role: 'طراحی محتوا و هدایت هویت بصری',
    summary: 'طراحی و توسعه سیستم‌های محتوایی، قالب‌های آموزشی و تبلیغاتی و حفظ یکپارچگی هویت بصری در شبکه‌های اجتماعی.',
    extra: 'طراحی گریدبندی اختصاصی اسلایدها و استوری‌های آموزشی فارسی؛ هماهنگی پالت رنگی سازمانی با تایپوگرافی خوانا و مدرن؛ تدوین راهنمای بصری برای تولید مداوم و باکیفیت محتوا.',
    tags: ['VISUAL SYSTEMS', 'SOCIAL MEDIA', 'EDUCATION'],
    image: '/social/novintech/novintech-post-1.jpg'
  },
  {
    id: 'content-picofy',
    title: 'طراحی محتوای تکنولوژی و شبکه‌های اجتماعی پیکوفای',
    category: 'brand',
    label: 'AI tech content · Brand',
    role: 'طراحی محتوا و هدایت هویت بصری',
    summary: 'طراحی و مدیریت محتوای بصری، توسعه قالب‌های خبری و تبلیغاتی و ایجاد زبان بصری یکپارچه برای محصولات و خدمات دیجیتال.',
    extra: 'طراحی پست‌های تکنولوژی‌محور و کاورهای گرافیکی مقایسه‌ای هوش مصنوعی؛ زبان طراحی تیره با کنتراست رنگی نئونی؛ مدیریت پیج و تعامل با جامعه کاربری حوزه فناوری.',
    tags: ['CONTENT DESIGN', 'DARK THEME', 'AI TECH'],
    link: 'https://www.instagram.com/picofy_ir/',
    image: '/social/picofy/picofy-sample-2-claude-chatgpt.jpg'
  },
  {
    id: 'aldmc-brand',
    title: 'هویت بصری ALDMC (نسخه ۶ خرمالویی)',
    category: 'brand',
    label: 'Brand identity · Persimmon V6',
    role: 'طراحی خلاق، هویت بصری و Vibe Coding',
    summary: 'خلق هویت بصری جامع نسخه ۶ خرمالویی، توسعه وب با متد Vibe Coding و Agentic AI، ساخت کامپوننت‌های تعاملی و موسیقی با هوش مصنوعی.',
    tags: ['BRAND IDENTITY', 'VIBE CODING', 'AI MEDIA PRODUCTION'],
    image: '/brand/mockups/04-stationery-brand-system.webp'
  },
  {
    id: 'aldmc-music',
    title: 'پروژه‌های موسیقی و کاور آرت ALDMC',
    category: 'music',
    label: 'Creative direction · AI music',
    role: 'Creative Direction / AI Music Producer',
    summary: 'خلق قطعات موسیقی با هوش مصنوعی؛ از ایده و تعیین استایل قطعه تا انتخاب خروجی، طراحی کاور، تنظیم متادیتا و پکیج معرفی اثر.',
    tags: ['SUNO', 'AI MUSIC', 'COVER ART', 'CREATIVE DIRECTION'],
    image: '/brand/mockups/02-music-release.webp'
  }
];
