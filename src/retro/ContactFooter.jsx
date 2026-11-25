import { ArrowUp, Instagram, Mail, Phone } from 'lucide-react';
import { site } from '../data/site';
import './contact-footer.scss';

const mailto = `mailto:${site.contact.email}`;

function TelegramIcon(props) {
  return <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.36 3.24 2.4 10.57c-1.3.52-1.29 1.25-.24 1.57l4.87 1.52 11.29-7.13c.53-.32 1.02-.15.62.21l-9.14 8.27-.36 4.85c.52 0 .74-.24 1.03-.52l2.46-2.39 5.12 3.78c.94.52 1.61.25 1.85-.88l3.35-15.79c.34-1.38-.53-2-1.89-1.46Z" />
  </svg>;
}

const channels = [
  { label: 'تماس تلفنی', href: site.contact.phoneTel, icon: Phone },
  { label: 'تلگرام', href: site.contact.telegram, icon: TelegramIcon },
  { label: 'اینستاگرام', href: site.contact.instagram, icon: Instagram },
  { label: 'ایمیل', href: mailto, icon: Mail },
];

export function ContactFooter() {
  return (
    <footer className="site-footer paper-edge" id="contact" dir="ltr" lang="en">
      <div className="site-footer__inner">
        <h2>
          <img className="site-footer__wordmark" src="/brand/footer-lets-talk.png"
            alt="LET’S TALK." width={800} height={486} decoding="async" />
        </h2>

        <ul className="site-footer__channels" dir="rtl" lang="fa" aria-label="راه‌های ارتباطی">
          {channels.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a className="site-footer__channel" href={href} title={label} aria-label={label}>
                <Icon width={19} height={19} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="site-footer__bottom">
          <div className="site-footer__copyright">
            <p lang="en">© 2026 ALDMC - Ali Forghani. All rights reserved.</p>
            <p lang="fa" dir="rtl">طراحی و توسعه توسط علی فرقانی</p>
          </div>
          <a className="site-footer__back" href="#home" aria-label="Back to top" title="Back to top">
            <ArrowUp size={22} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
