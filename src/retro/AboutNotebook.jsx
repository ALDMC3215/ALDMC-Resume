import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HTMLFlipBook from 'react-pageflip';
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

// The flip engine reads left-to-right, so supply the physical sheets in reverse order.
const sheets = [...pages].reverse();
const frontCover = pages.length + 1;

export function AboutNotebook({ name }) {
  const book = useRef(null);
  const [view, setView] = useState(null);

  function syncView({ object }) {
    setView({ index: object.getCurrentPageIndex(), spread: object.getOrientation() === 'landscape' });
  }

  function turn(forward) {
    const engine = book.current?.pageFlip();
    if (!engine) return;
    const index = engine.getCurrentPageIndex();
    if (forward ? index === 0 : index === frontCover) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (forward) engine.turnToPrevPage();
      else engine.turnToNextPage();
    } else if (forward) {
      engine.flipPrev('bottom');
    } else {
      engine.flipNext('bottom');
    }
  }

  let status = '';
  if (view) {
    if (view.index === frontCover) status = 'جلد دفتر';
    else if (view.index === 0) status = 'پشت جلد';
    else {
      const pageNumber = frontCover - view.index;
      const first = view.spread ? Math.max(1, pageNumber - 1) : pageNumber;
      const label = first === pageNumber ? toFa(first) : `${toFa(first)} تا ${toFa(pageNumber)}`;
      status = `صفحهٔ ${label} از ${toFa(pages.length)}`;
    }
  }

  return (
    <article className="letter-paper" data-reveal>
      <h2 id="about-title" className="script-title" lang="en" dir="ltr">About Me</h2>
      <div className="letter-body">
        <figure className="portrait">
          <img src="/brand/portrait.webp" alt={name} loading="lazy" width="640" height="640" />
          <figcaption>{name}</figcaption>
        </figure>
        <div className="notebook">
          <div id="about-book" dir="ltr">
            <HTMLFlipBook ref={book} className="notebook__flip"
              width={340} height={570} size="stretch" minWidth={260} maxWidth={410}
              minHeight={440} maxHeight={680} startPage={pages.length} showCover
              renderOnlyPageLengthChange mobileScrollSupport flippingTime={520}
              onInit={syncView} onFlip={syncView} onChangeOrientation={syncView}>
              <div className="notebook__page notebook__page--cover" data-density="hard">
                <img src="/brand/aldmc.svg" alt="ALDMC" width="105" height="28" draggable="false" />
              </div>
              {sheets.map((page, index) => (
                <div key={page.title} className="notebook__page">
                  <div className="notebook__copy" lang="fa" dir="rtl">
                    <h3>{page.title}</h3>
                    {page.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                    <span className="notebook__number">{toFa(pages.length - index)}</span>
                  </div>
                </div>
              ))}
              <div className="notebook__page notebook__page--cover" data-density="hard">
                <img src="/brand/aldmc.svg" alt="ALDMC" width="105" height="28" draggable="false" />
                <strong lang="en">About Me</strong>
              </div>
            </HTMLFlipBook>
          </div>
          <div className="notebook__controls" role="group" aria-label="ورق زدن دفتر">
            <button type="button" onClick={() => turn(false)} disabled={!view || view.index === frontCover}
              aria-label="ورق قبلی" aria-controls="about-book">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
            <span role="status" aria-live="polite">{status}</span>
            <button type="button" onClick={() => turn(true)} disabled={!view || view.index === 0}
              aria-label="ورق بعدی" aria-controls="about-book">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
