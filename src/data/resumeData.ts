export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  role: string;
  description: string;
  details: string[];
  tags: string[];
  image: string;
  featured?: boolean;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  companyEn: string;
  role: string;
  period?: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface TeachingCourse {
  title: string;
  category: string;
  description: string;
  topics: string[];
}

export interface ToolCategory {
  title: string;
  categoryEn: string;
  tools: { name: string; tag?: string }[];
}

export interface MusicTrack {
  title: string;
  vibe: string;
  genre: string;
  year: string;
}

export const resumeData = {
  personalInfo: {
    name: 'علی فرقانی',
    nameEn: 'Ali Forghani',
    brand: 'ALDMC',
    title: 'طراح محصول، UI/UX و راهکارهای خلاقانه با هوش مصنوعی',
    titleEn: 'Product Designer, UI/UX & AI Creative Specialist',
    supportingStatement: 'از ایده و طراحی تا تجربه‌ای که واقعا کار می‌کنه.',
    intro: 'من طراحی محصول، تجربه کاربری و ابزارهای هوش مصنوعی رو کنار هم میارم تا ایده‌ها رو به تجربه‌های دیجیتال قابل اجرا تبدیل کنم.',
    location: 'شیراز، ایران',
    locationEn: 'Shiraz, Iran',
    availability: 'آماده گفت‌وگو برای پروژه‌های منتخب و همکاری‌های موثر',
    bio: 'طراح محصول و مدرس هستم؛ از ایده و طراحی رابط در Figma تا پیش بردن نمونه‌های قابل اجرا با کمک AI، تولید محتوای بصری و بررسی کیفیت اجرا همراه پروژه میمونم. تمرکزم روی رابط‌های دقیق، تجربه روان و خروجی قابل استفاده‌ست.',
  },

  coreApproach: [
    {
      step: '01',
      title: 'طراحی هدفمند',
      titleEn: 'Intentional Design',
      description: 'از درک عمیق ساختار محتوا و نیاز کاربر تا ظریف‌ترین جزئیات تعامل و استانداردهای تجربه موبایل.',
    },
    {
      step: '02',
      title: 'توسعه سریع (Vibe Coding)',
      titleEn: 'Rapid AI Prototyping',
      description: 'ساخت و آزمودن سریع نمونه‌های اجرایی با کمک ابزارهای پیشرفته توسعه مبتنی بر AI و کامپوننت‌های مدرن.',
    },
    {
      step: '03',
      title: 'اصلاح نهایی و کنترل کیفیت',
      titleEn: 'QA & Visual Polish',
      description: 'بازبینی موشکافانه چیدمان، کنتراست نوری، روان بودن ناوبری و یکپارچگی پایدار هویت محصول.',
    },
  ],

  capabilities: [
    {
      id: 'product-uiux',
      number: '01',
      title: 'UI/UX و طراحی محصول',
      titleEn: 'Product & Interface Design',
      description: 'طراحی وبسایت‌ها، لندینگ‌پیج‌ها و داشبوردهای تخصصی؛ سیستم‌های بصری مقیاس‌پذیر، رابط‌های راست‌چین بومی (RTL)، ساختارهای ریسپانسیو و جزئیات لمسی موبایل.',
      skills: ['Figma Components & AutoLayout', 'RTL Layout Mastery', 'Mobile-First Architecture', 'Contrast & Accessibility (a11y)', 'Design Systems'],
    },
    {
      id: 'ai-workflows',
      number: '02',
      title: 'توسعه و ساخت با هوش مصنوعی',
      titleEn: 'AI Workflows & Vibe Coding',
      description: 'پرامپت‌نویسی حرفه‌ای، ساخت پروتوتایپ‌های زنده با ابزارهای نوین Vibe Coding، توسعه سریع فرانت‌اند، و اتصال ابزارهای هوشمند توسعه (MCP).',
      skills: ['Vibe Coding Prototyping', 'Prompt Engineering', 'Interactive Frontend Building', 'MCP Tool Integration', 'Iterative AI Direction'],
    },
    {
      id: 'generative-media',
      number: '03',
      title: 'تولید محتوا و رسانه زایشی',
      titleEn: 'Generative Media & AI Video',
      description: 'طراحی سناریو و دکوپاژ تصویری، تولید ویدیو و انیمیشن با ابزارهای AI (مانند Veo و Google Flow)، استایل‌های خلاقانه مقوایی/کاغذی و صداگذاری هوشمند.',
      skills: ['AI Video Production', 'Storyboard Conceptualization', 'Google Flow & Veo', 'AI Audio & Speech Synthesis', 'Visual Art Generation'],
    },
    {
      id: 'visual-identity',
      number: '04',
      title: 'سیستم‌های بصری و برندینگ',
      titleEn: 'Design Systems & Brand Identity',
      description: 'تعریف قواعد برندینگ، پالت‌های رنگی دقیق بر اساس توکن‌های مدرن، دیزاین گرافیک شبکه‌های اجتماعی، ساخت کاور و هویت بصری چندکاناله.',
      skills: ['Design Token Architecture', 'Multi-channel Branding', 'Social Media Design Systems', 'Cover Art Direction', 'Typography Hierarchy'],
    },
    {
      id: 'creative-direction',
      number: '05',
      title: 'جهت‌دهی هنری و موسیقی AI',
      titleEn: 'Creative Direction & AI Music',
      description: 'خلق قطعات موسیقی با هوش مصنوعی (Suno)، هدایت لحن و مود پروژه، طراحی کاورهای اختصاصی و پکیج انتشار چندرسانه‌ای.',
      skills: ['AI Music Composition (Suno)', 'Art & Aesthetic Direction', 'Packaging & Release Assets', 'Visual Metaphor Design', 'Concept Art'],
    },
    {
      id: 'education-mentorship',
      number: '06',
      title: 'آموزش و انتقال دانش',
      titleEn: 'Education & Mentorship',
      description: 'برگزاری دوره‌ها و کارگاه‌های آموزشی تخصصی در حوزه دیزاین محصول، ابزارهای AI و کدنویسی کاربردی با رویکرد حل مسائل واقعی دنیای کار.',
      skills: ['UI/UX Mentorship', 'Figma & Design Tool Workshops', 'AI Workflow Training', 'Practical Project Pedagogy', 'Interactive Teaching'],
    },
  ],

  experience: [
    {
      id: 'novin-tech',
      company: 'نوین تک',
      companyEn: 'Novin Tech — Khobreh Bonyan Institute',
      role: 'مدرس UI/UX، طراح محصول و عضو تیم اجرایی',
      description: 'تدریس دوره‌های تخصصی UI/UX، فیگما و ابزارهای هوش مصنوعی؛ طراحی مجموعه‌های محتوای آموزشی و هویت بصری؛ هماهنگی امور اجرایی و ارتباط موثر با مخاطبان موسسه.',
      highlights: [
        'طراحی تجربه و رابط کاربری ابزار داخلی مدیریت تماس‌ها و درخواست‌های آموزشی (Call Manager)',
        'تدریس بیش از صدها ساعت کلاس تخصصی با رضایت حداکثری هنرجویان و ورود آن‌ها به بازار کار',
        'طراحی سیستم بصری یکپارچه برای رویدادها، بنرها و آموزش‌های موسسه'
      ],
      tags: ['آموزش UI/UX', 'طراحی داشبورد', 'Figma', 'فتوشاپ', 'مدیریت اجرایی', 'ابزارهای AI'],
    },
    {
      id: 'picofy',
      company: 'پیکوفای',
      companyEn: 'Picofy',
      role: 'طراح وبسایت، هویت بصری و توسعه محتوا',
      description: 'طراحی محتوای بصری Picofy، PicoNumber و PicoMember؛ تدوین استانداردهای برند؛ هدایت زبان بصری لندینگ و بازبینی دقیق تعاملات، چیدمان و استانداردهای دسترسی‌پذیری موبایل.',
      highlights: [
        'طراحی لندینگ تعاملی با صحنه‌پردازی اتصالات سه‌بعدی Three.js و هویت بصری مدرن تم تیره',
        'خلق هویت تم تیره لوکس با عناصر فلزی، نوری و شیشه‌ای برای زیرمجموعه‌های برند',
        'بهینه‌سازی دقیق تجربه کاربری نسخه موبایل و دسترسی‌پذیری'
      ],
      tags: ['طراحی لندینگ', 'Three.js', 'دیزاین سیستم دارک', 'هویت برند', 'Picofy'],
    },
    {
      id: 'habisa',
      company: 'هابیسا',
      companyEn: 'Habisa',
      role: 'تولید محتوای ویدیویی و تبلیغات هوش مصنوعی',
      description: 'طراحی زبان بصری و سناریو؛ تولید و اصلاح ویدیو با استفاده از تصاویر مرجع و ابزارهای AI زایشی؛ پیاده‌سازی بازخوردها روی زیرنویس، صداگذاری و پیوستگی روایی سکانس‌ها.',
      highlights: [
        'ابداع زبان بصری متمایز کاغذی/مقوایی با پایپ‌لاین‌های نوین Google Flow و Veo در ویدیوی AI',
        'استفاده از پایپ‌لاین‌های نوین Google Flow و Veo برای سکانس‌بندی پایدار',
        'هماهنگی دقیق افکت صوتی، موسیقی پس‌زمینه و زیرنویس‌های خوانا'
      ],
      tags: ['تولید ویدیوی AI', 'سناریونویسی', 'Google Flow', 'Veo', 'هویت بصری'],
    },
    {
      id: 'aldmc',
      company: 'ALDMC',
      companyEn: 'ALDMC Studio',
      role: 'طراحی خلاق، موسیقی و محتوای هوش مصنوعی',
      description: 'خلق پروژه‌های تلفیقی موسیقی، هنر دیجیتال و دیزاین؛ تعیین استایل و جهت خلاقانه آثار، طراحی مفهومی آرت‌ورک‌ها و کاورها، و آماده‌سازی بسته‌های معرفی جامع وب.',
      highlights: [
        'خلق قطعات اورجینال موسیقی هوش مصنوعی و پیاده‌سازی سیستم هویت کامل Persimmon V6',
        'پیاده‌سازی دیزاین کیت کامل نسخه ۶ خرمالویی (Persimmon V6) با دقت تایپوگرافی و هندسه برداری',
        'توسعه وبسایت پورتفولیوی شخصی با جدیدترین متدهای مهندسی رابط کاربری'
      ],
      tags: ['Creative Direction', 'موسیقی AI', 'طراحی کاور', 'برند شخصی', 'Vibe Coding'],
    },
  ],

  projects: [
    {
      id: 'picofy-landing',
      title: 'لندینگ پیج تعاملی پیکوفای',
      category: 'Web Experience & UI/UX',
      role: 'طراحی رابط و هدایت اجرا با کمک هوش مصنوعی',
      description: 'طراحی صفحه معرفی خدمات با صحنه اتصالات سه‌بعدی مبتنی بر Three.js؛ بهینه‌سازی ساختار هدر، منوها، کارت‌های معرفی خدمات، کنتراست نوری و تجربه موبایل و دسکتاپ.',
      details: [
        'استفاده از صحنه شبکه تعاملی سه‌بعدی با فریم‌ورک Three.js برای نمایش اتصال خدمات تلگرام',
        'پالت رنگی شبانه متالیک با کنتراست حساب‌شده و خوانایی فوق‌العاده متون فارسی',
        'طراحی کامپوننت‌های ماژولار و ریسپانسیو با رعایت استانداردهای دسترسی‌پذیری'
      ],
      tags: ['Figma', 'Three.js', 'AI Workflow', 'Responsive UI', 'RTL'],
      image: '/brand/mockups/03-origin-social-profiles.png',
      featured: true,
      link: '#',
    },
    {
      id: 'nader-gold',
      title: 'نادرگلد — دموی فروشگاه طلا و جواهر',
      category: 'E-Commerce & Product Design',
      role: 'طراحی محصول و همکاری در پیاده‌سازی فرانت‌اند',
      description: 'طراحی دموی فروشگاه طلا با الهام از هویت اصیل ایرانی؛ طراحی هیرو، بنرهای فصلی، کارت‌های قیمت‌گذاری لحظه‌ای، انیمیشن‌های تعاملی و ناوبری موبایل.',
      details: [
        'ترکیب تایپوگرافی اصیل و موتیف‌های ظریف طلایی با مینیمالیسم مدرن تجارت الکترونیک',
        'طراحی متمرکز بر لمس و رفتار شست در گوشی‌های هوشمند (Mobile-First)',
        'سازماندهی واضح کاتالوگ و نمایش شفاف وزن، اجرت و قیمت نهایی محصول'
      ],
      tags: ['UI/UX', 'Mobile First', 'E-Commerce', 'Front-End', 'RTL Layout'],
      image: '/brand/mockups/04-stationery-brand-system.png',
      featured: true,
      link: '#',
    },
    {
      id: 'novin-call-manager',
      title: 'مدیر تماس نوین تک (Call Manager)',
      category: 'Internal Tool & Dashboard',
      role: 'طراحی رابط ابزار داخلی فارسی',
      description: 'طراحی تجربه ثبت و پیگیری تماس‌ها و درخواست‌های آموزشی؛ سازماندهی اطلاعات مراجعین و جریان پیگیری کلاس‌ها در محیط کاری روزمره موسسه.',
      details: [
        'طراحی جریان کاری بدون اصطکاک برای ثبت اطلاعات تماس کمتر از ۳۰ ثانیه',
        'دسته‌بندی و فیلترهای بصری وضعیت پیگیری (در انتظار، ثبت‌نام شده، نیازمند تماس مجدد)',
        'رابط راست‌چین استاندارد با رعایت فاصله بصری و تراکم اطلاعاتی بهینه'
      ],
      tags: ['RTL UI', 'Dashboard', 'Internal Product', 'UX Architecture'],
      image: '/brand/mockups/01-creative-ai-workspace.png',
      featured: true,
      link: '#',
    },
    {
      id: 'habisa-ai-videos',
      title: 'مجموعه ویدیوهای داستانی هابیسا',
      category: 'AI Video & Storyboard',
      role: 'سناریو، طراحی بصری و تولید با AI',
      description: 'تبدیل متن به سناریو و سکانس؛ ابداع زبان تصویری کاغذی/مقوایی، تولید تصاویر مرجع و کلیپ‌های زایشی، اصلاح زیرنویس و هماهنگی صوتی صحنه‌ها.',
      details: [
        'طراحی پرامپت‌های استایل‌پایدار برای حفظ کاراکترها و فرم مقوایی در تمام سکانس‌ها',
        'بهره‌گیری از Google Flow و Veo برای دستیابی به حرکت طبیعی دوربین و تغییر فاز نرم',
        'صداگذاری هماهنگ با زیرنویس‌های خوانا جهت انتشار در پلتفرم‌های اجتماعی'
      ],
      tags: ['Google Flow', 'Veo', 'Storyboard', 'AI Video', 'Generative Art'],
      image: '/brand/mockups/01-creative-ai-workspace.png',
      featured: false,
      link: '#',
    },
    {
      id: 'content-systems',
      title: 'سیستم‌های محتوایی نوین تک و پیکوفای',
      category: 'Visual Systems & Content Design',
      role: 'طراحی محتوا و هدایت هویت بصری',
      description: 'طراحی مجموعه‌های آموزشی و خبری برای دو برند با هویت کاملا مستقل: نوین تک با زبان روشن و تایپوگرافی خوانای فارسی؛ پیکوفای با فضای تیره و مدرن.',
      details: [
        'ایجاد الگوهای آماده و گریدبندی شبکه‌های اجتماعی برای تولید پرسرعت محتوا',
        'حفظ تمایز لحن سازمانی برای محیط آموزشی نوین تک در برابر اتمسفر های‌تک پیکوفای',
        'کنترل کیفیت دقیق خروجی‌ها در سایزهای مختلف استوری، پست و اسلاید'
      ],
      tags: ['Visual Systems', 'Content Design', 'Brand Identity', 'Social Media'],
      image: '/brand/mockups/03-origin-social-profiles.png',
      featured: false,
      link: '#',
    },
    {
      id: 'aldmc-creative-music',
      title: 'پروژه‌های موسیقی و کاور آرت ALDMC',
      category: 'Creative Direction & AI Music',
      role: 'Creative Direction / AI Music Producer',
      description: 'خلق قطعات موسیقی با هوش مصنوعی؛ از ایده و تعیین استایل قطعه تا انتخاب خروجی، طراحی کاور، تنظیم متادیتا و پکیج معرفی اثر.',
      details: [
        'تولید ۵ قطعه شاخص: The Shadow and the Sun، Falling Slow، The Flow of Light، Take Me Home، No Walls',
        'طراحی مفهومی کاورها بر اساس پالت خرمالویی و ذغالی برند ALDMC',
        'ادغام پرامپت‌های آهنگسازی با حس دراماتیک و اتمسفریک مدرن'
      ],
      tags: ['Suno', 'AI Music', 'Cover Art', 'Creative Direction', 'Audio Production'],
      image: '/brand/mockups/02-music-release.png',
      featured: false,
      link: '#',
    },
  ],

  aiCreativeShowcase: {
    title: 'استودیوی خلاقیت و هوش مصنوعی',
    titleEn: 'AI Creative Studio & Media Lab',
    description: 'نگاهی به مرز مشترک هوش مصنوعی زایشی، موسیقی، استوری‌بورد و هنر تصویری؛ جایی که الگوریتم‌ها با نگاه دقیق دیزاینر هدایت می‌شوند.',
    tracks: [
      {
        title: 'The Shadow and the Sun',
        vibe: 'Atmospheric & Deep',
        genre: 'Electronic / Ambient',
        year: '2026',
      },
      {
        title: 'Falling Slow',
        vibe: 'Melodic & Emotional',
        genre: 'Indie Cinematic',
        year: '2026',
      },
      {
        title: 'The Flow of Light',
        vibe: 'Energetic & Uplifting',
        genre: 'Synth / Future Beat',
        year: '2026',
      },
      {
        title: 'Take Me Home',
        vibe: 'Nostalgic & Warm',
        genre: 'Acoustic / Hybrid',
        year: '2025',
      },
      {
        title: 'No Walls',
        vibe: 'Bold & Experimental',
        genre: 'Alternative AI Sound',
        year: '2025',
      },
    ],
    disciplines: [
      {
        title: 'تولید ویدیوی زایشی (AI Video)',
        desc: 'سناریونویسی فریم به فریم، ایجاد کاراکترها و حفظ پایداری استایل در سکانس‌های پیاپی با ابزارهایی مثل Veo و Google Flow.',
      },
      {
        title: 'خلق موسیقی هوشمند (AI Audio)',
        desc: 'تنظیم ساختار قطعه، تعیین گام و حس و حال موسیقایی با Suno و طراحی لایه‌های صدایی متناسب با هویت برند.',
      },
      {
        title: 'تصویرسازی و آرت‌ورک مفهومی',
        desc: 'پرامپت‌نویسی پیشرفته با تمرکز بر متریال‌های واقعی، نورپردازی استودیویی و ترکیب‌بندی‌های نامتقارن ادیتوریال.',
      },
      {
        title: 'پروتوتایپینگ زنده با Vibe Coding',
        desc: 'تبدیل بی‌درنگ ایده‌های بصری به کدهای تمیز فرانت‌اند و آزمودن تجربه‌های تعاملی در کوتاه‌ترین زمان ممکن.',
      },
    ],
  },

  teaching: {
    title: 'تجربه تدریس و انتقال دانش',
    titleEn: 'Education & Knowledge Sharing',
    philosophy: 'روش آموزش من بر تمرین‌های عملی، نمونه‌های واقعی پروژه‌ها و شبیه‌سازی چالش‌های محیط کار متکی است. دیزاین تنها نقاشی کردن نیست، ساختن راه‌حل‌های کارآمد برای مسائل واقعی است.',
    courses: [
      {
        title: 'طراحی UI/UX و تفکر محصول',
        category: 'UI/UX & Product',
        description: 'از درک پرسونای کاربر و معماری اطلاعات تا طراحی وایرفریم‌ها، پروتوتایپ‌های تعاملی و استانداردهای رابط کاربری مدرن.',
        topics: ['طراحی ریسپانسیو و موبایل', 'قواعد خوانایی و کنتراست RTL', 'تست کارایی و آزمون کاربر', 'اصول دیزاین سیستم‌ها'],
      },
      {
        title: 'تسلط تخصصی بر Figma',
        category: 'Figma Mastery',
        description: 'آموزش عمیق ابزار فیگما با تمرکز بر کامپوننت‌سازی پیشرفته، استفاده از Auto Layout، واریانت‌ها و متغیرهای دیزاین توکن.',
        topics: ['Auto Layout پیشرفته', 'واریانت‌ها و Propertyها', 'کار با متغیرها (Variables)', 'آماده‌سازی فایل برای توسعه‌دهندگان (Dev Mode)'],
      },
      {
        title: 'فتوشاپ برای دیزاینرهای دیجیتال',
        category: 'Visual & Graphic',
        description: 'تکنیک‌های رتوش حرفه‌ای، اصلاح رنگ و نور، ترکیب تصاویر (Photo Manipulation) و ساخت کاورهای گرافیکی چشم‌نواز.',
        topics: ['اصلاح تخصصی رنگ و نور', 'ماسک‌ها و لایه‌بندی اصولی', 'طراحی متریال‌های سوشال مدیا', 'خروجی بهینه وب'],
      },
      
      {
        title: 'ابزارهای هوش مصنوعی و پرامپت‌نویسی',
        category: 'AI Tools & Productivity',
        description: 'کاربرد عملی ChatGPT، ابزارهای ساخت تصویر و ویدیو در تسریع فرآیند ایده‌پردازی، تولید محتوا و کدنویسی کاربردی.',
        topics: ['پرامپت‌نویسی ساختاریافته', 'سناریونویسی با هوش مصنوعی', 'تولید تصاویر مفهومی', 'Vibe Coding و ساخت ابزارها'],
      },
      {
        title: 'توسعه اندروید پیشرفته (سابقه تدریس)',
        category: 'Mobile Development',
        description: 'سابقه تدریس مفاهیم پیشرفته توسعه اپلیکیشن‌های اندروید، معماری‌های نرم‌افزاری، پیاده‌سازی رابط کاربری و اتصال به وب‌سرویس‌ها.',
        topics: ['معماری اپلیکیشن‌های موبایل', 'طراحی UI و متریال دیزاین', 'مدیریت داده‌ها و API', 'تجربه کاربر در موبایل'],
      },
    ],
  },

  tools: [
    {
      title: 'طراحی و رابط کاربری',
      categoryEn: 'Design & Visual',
      tools: [
        { name: 'Figma', tag: 'Primary Tool' },
        { name: 'Adobe Photoshop', tag: 'Visual Asset' },
        { name: 'Design Systems & Tokens', tag: 'Architecture' },
        { name: 'AI Image Generators', tag: 'Generative' },
      ],
    },
    {
      title: 'هوش مصنوعی و رسانه',
      categoryEn: 'AI & Media Lab',
      tools: [
        { name: 'ChatGPT / Claude', tag: 'Reasoning & Copy' },
        { name: 'Google Flow', tag: 'AI Video Storyboard' },
        { name: 'Veo', tag: 'Video Generation' },
        { name: 'Nano Banana', tag: 'AI Visuals' },
        { name: 'Google AI Studio TTS', tag: 'Audio & Speech' },
        { name: 'Suno', tag: 'AI Music Production' },
      ],
    },
    {
      title: 'ساخت، توسعه و همکاری',
      categoryEn: 'Build & Workflows',
      tools: [
        { name: 'Antigravity IDE', tag: 'AI Coding' },
        { name: 'Git & GitHub', tag: 'Version Control' },
        { name: 'Model Context Protocol (MCP)', tag: 'Extensibility' },
                { name: 'Notion', tag: 'Knowledge & Planning' },
      ],
    },
  ],

  education: {
    degree: 'کارشناسی مهندسی کامپیوتر',
    degreeEn: 'B.Sc. in Computer Engineering',
    status: 'در حال تحصیل (ورودی ۱۴۰۰)',
    previous: 'آغاز مسیر دانشگاهی در رشته مهندسی برق از سال ۱۳۹۸',
    location: 'شیراز، ایران',
    description: 'ترکیب پایه‌های آکادمیک علوم کامپیوتر و تفکر تحلیلی مهندسی با ذوق هنری طراحی محصول و متدهای نوین خلق با هوش مصنوعی.',
  },

  contact: {
    headline: 'ایده هارو با AI زنده میکنم',
    subtitle: 'برای همکاری در طراحی محصول، توسعه تجربه‌های دیجیتال و اجرای ایده‌های خلاقانه با هوش مصنوعی، خوشحال میشم با هم در ارتباط باشیم.',
    email: 'aldmc4543@gmail.com',
    phone: '09174543813',
    phoneTel: 'tel:+989174543813',
    telegram: 'https://t.me/ALDMC',
    telegramHandle: '@ALDMC',
    instagram: 'https://www.instagram.com/aldmc_origin/',
    instagramHandle: '@aldmc_origin',
    whatsapp: 'https://wa.me/989174543813',
    whatsappHandle: '@aldmc_origin',
    facebook: 'https://facebook.com/aldmc_origin',
    facebookHandle: '@aldmc_origin',
    github: 'https://github.com/ALDMC3215',
    githubHandle: '@ALDMC3215',
  },
};
