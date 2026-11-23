import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { toFa } from '../utils/fa';

const pages = [
  {
    title: 'از ایده تا چیزی که کار می‌کنه',
    paragraphs: [
      'سلام، من علی فرقانی‌ام. طراحی محصول و UI/UX کار اصلی منه. معمولاً از خود مسئله شروع می‌کنم. اول می‌خوام بفهمم آدم‌ها کجای مسیر گیر می‌کنن، بعد توی فیگما مسیر، وایرفریم و رابط رو می‌سازم.',
      'دوست دارم طرح رو زود به یه نمونهٔ قابل‌استفاده برسونم. وقتی می‌شه با یه صفحه واقعاً کار کرد، خیلی راحت‌تر می‌فهمم فاصله‌ها، راست‌چین بودن، حرکت‌ها و رفتار دکمه‌ها برای کاربر درست دراومدن یا نه.'
    ]
  },
  {
    title: 'وب تعاملی و دیزاین‌سیستم',
    paragraphs: [
      'به ساختن سیستم‌هایی علاقه دارم که بشه بعداً راحت ادامه‌شون داد. توی ALDMC، پالت خرمالویی، تایپوگرافی فارسی و انگلیسی و کامپوننت‌ها رو کنار هم آوردم تا هویت بصری توی وب و رسانه‌های مختلف یک‌دست بمونه.',
      'برای پیکوفای روی طراحی لندینگ، هویت بصری و تعاملات سه‌بعدی کار کردم. برای نوین‌تک هم سراغ یه مسئلهٔ روزمره رفتم و سامانهٔ مدیریت تماس رو طراحی کردم تا ثبت و پیگیری مراجعین ساده‌تر بشه.'
    ]
  },
  {
    title: 'یاد دادن و ساختن تصویر',
    paragraphs: [
      'توی نوین‌تک فیگما، فتوشاپ و ابزارهای هوش مصنوعی درس می‌دم. توی کارگاه‌ها دوست دارم هنرجو خودش روی یک مسئلهٔ واقعی دست به کار بشه، تصمیم‌هاش رو توضیح بده و آخرش یه نمونه داشته باشه که بتونه نشونش بده.',
      'برای کارهای تصویری هم معمولاً از سناریو و استوری‌بورد شروع می‌کنم. توی هابیسا با فرم‌های کاغذی و مقوایی کار کردم. برام مهمه که حتی وقتی ابزار عوض می‌شه، رنگ و لحن هر برند توی خروجی قابل تشخیص بمونه.'
    ]
  },
  {
    title: 'موسیقی و کاور آرت',
    paragraphs: [
      'توی ALDMC روی موسیقی هم کار می‌کنم. از حال‌وهوای قطعه و شکل روایتش شروع می‌کنم و بعد روی شعر، ریتم، تلفظ و جزئیات کاور وقت می‌ذارم. گاهی یه تغییر کوچیک توی یه خط، اجرای کل اون بخش رو بهتر می‌کنه.',
      'برای کاورها دوست دارم اول تصویر خام و بی‌متن رو داشته باشم، بعد تایپوگرافی و خروجی نهایی رو توی فیگما جمع کنم. همین رفت‌وبرگشت بین موسیقی، تصویر و طراحی بخشیه که ازش لذت می‌برم.'
    ]
  }
];

export function AboutNotebook({ name }) {
  const [{ index, direction }, setPage] = useState({ index: 0, direction: 'next' });
  const page = pages[index];

  function turn(step) {
    setPage(current => {
      const next = Math.max(0, Math.min(pages.length - 1, current.index + step));
      return { index: next, direction: step > 0 ? 'next' : 'previous' };
    });
  }

  return (
    <article className="letter-paper" data-reveal>
      <header className="letter-head">
        <h2 id="about-title">درباره‌ی من</h2>
        <img src="/brand/aldmc.svg" alt="" width="105" height="28" />
      </header>
      <div className="letter-body">
        <figure className="portrait">
          <img src="/brand/portrait.webp" alt={name} loading="lazy" width="640" height="640" />
          <figcaption>{name}</figcaption>
        </figure>
        <div className="notebook">
          <div className="notebook__sheet" id="about-page" aria-labelledby="about-page-title">
            <div className={'notebook__copy notebook__copy--' + direction} key={index}>
              <h3 id="about-page-title">{page.title}</h3>
              <div className="notebook__ruled">
                {page.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
          <div className="notebook__controls" role="group" aria-label="ورق زدن دفتر">
            <button type="button" onClick={() => turn(-1)} disabled={index === 0}
              aria-label="صفحهٔ قبلی" aria-controls="about-page">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
            <span role="status" aria-live="polite">
              {toFa(index + 1)} از {toFa(pages.length)}
              <span className="visually-hidden">، {page.title}</span>
            </span>
            <button type="button" onClick={() => turn(1)} disabled={index === pages.length - 1}
              aria-label="صفحهٔ بعدی" aria-controls="about-page">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
