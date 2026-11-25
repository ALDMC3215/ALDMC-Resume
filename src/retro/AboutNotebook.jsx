import { useRef } from 'react';
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
export function AboutNotebook() {
  const book = useRef(null);
  const touchStart = useRef(null);

  function turnPage(forward) {
    const engine = book.current?.pageFlip();
    if (!engine || engine.getState() === 'flipping') return;

    const lastSpreadStart = sheets.length - (engine.getOrientation() === 'landscape' ? 2 : 1);
    const index = engine.getCurrentPageIndex();
    if (forward ? index === 0 : index >= lastSpreadStart) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (forward) engine.turnToPrevPage();
      else engine.turnToNextPage();
    } else if (forward) {
      engine.flipPrev('bottom');
    } else {
      engine.flipNext('bottom');
    }
  }

  function handleBookKey(event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    turnPage(event.key === 'ArrowLeft');
  }

  function startSwipe(event) {
    // Keep vertical scrolling native and let PageFlip handle mouse dragging.
    event.stopPropagation();
    const finger = event.touches.length === 1 ? event.touches[0] : null;
    touchStart.current = finger ? { x: finger.clientX, y: finger.clientY } : null;
  }

  function finishSwipe(event) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    event.stopPropagation();
    const finger = event.changedTouches[0];
    const dx = finger.clientX - start.x;
    const dy = finger.clientY - start.y;
    if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.25) turnPage(dx > 0);
  }

  return (
    <article className="letter-paper" data-reveal>
      <h2 id="about-title" className="script-title" lang="en" dir="ltr">About Me</h2>
      <p id="about-book-hint" className="visually-hidden">برای ورق زدن، صفحه را بکشید یا کلید چپ و راست را بزنید.</p>
      <div className="notebook" role="region" aria-labelledby="about-title"
        aria-describedby="about-book-hint" tabIndex={0} onKeyDown={handleBookKey}>
        <div id="about-book" dir="ltr" onTouchStartCapture={startSwipe}
          onTouchEndCapture={finishSwipe} onTouchCancel={() => { touchStart.current = null; }}>
          <HTMLFlipBook ref={book} className="notebook__flip"
            width={340} height={570} size="stretch" minWidth={260} maxWidth={410}
            minHeight={440} maxHeight={680} startPage={sheets.length - 1}
            renderOnlyPageLengthChange mobileScrollSupport flippingTime={520}>
            {sheets.map((page, index) => (
              <div key={page.title} className="notebook__page">
                <div className="notebook__copy" lang="fa" dir="rtl">
                  <h3>{page.title}</h3>
                  {page.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                  <span className="notebook__number">{toFa(sheets.length - index)}</span>
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </article>
  );
}
