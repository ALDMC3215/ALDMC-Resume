import React, { useState } from 'react';
import { ChevronDown, Send } from 'lucide-react';
import { Heading } from '../ui/Heading';
import { site } from '../../data/site';
import { resumeData } from '../../data/resumeData';

/**
 * Contact form from the design. There is no backend: "ارسال" opens the visitor's
 * mail app with the message filled in (mailto:), which is also stated on the page.
 */
export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    const body = [
      `نام: ${get('name')}`,
      `ایمیل: ${get('email')}`,
      `تلفن: ${get('phone')}`,
      `خدمت مورد نظر: ${get('service')}`,
      `زمان‌بندی: ${get('timeline')}`,
      '',
      get('details')
    ].join('\n');
    const subject = `درخواست همکاری از ${get('name')}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Heading id="contact-title" title="تماس با من" sub={site.contact.subtitle} />

        <form className="form" onSubmit={onSubmit}>
          <label className="field">
            <span className="sr-only">نام</span>
            <input name="name" type="text" placeholder="نام" required autoComplete="name" />
          </label>
          <label className="field">
            <span className="sr-only">ایمیل</span>
            <input name="email" type="email" placeholder="ایمیل" required autoComplete="email" dir="auto" />
          </label>
          <label className="field">
            <span className="sr-only">شماره تماس</span>
            <input name="phone" type="tel" placeholder="شماره تماس" autoComplete="tel" dir="auto" />
          </label>
          <label className="field field--select">
            <span className="sr-only">خدمت مورد نظر</span>
            <select name="service" defaultValue="">
              <option value="" disabled>
                خدمت مورد نظر
              </option>
              {resumeData.capabilities.map(c => (
                <option key={c.id} value={c.title}>
                  {c.title}
                </option>
              ))}
              <option value="سایر">سایر</option>
            </select>
            <ChevronDown size={24} aria-hidden="true" />
          </label>
          <label className="field">
            <span className="sr-only">زمان‌بندی</span>
            <input name="timeline" type="text" placeholder="زمان‌بندی پروژه" />
          </label>
          <label className="field field--area">
            <span className="sr-only">توضیحات پروژه</span>
            <textarea name="details" placeholder="توضیحات پروژه..." required rows={5} />
          </label>

          <div className="form__foot">
            <p className="form__note" role="status">
              {sent
                ? 'برنامه ایمیل شما باز شد؛ پیام را آنجا ارسال کنید.'
                : 'با زدن «ارسال»، برنامه ایمیل شما با پیام آماده باز می‌شود.'}
            </p>
            <button type="submit" className="btn btn--outline">
              <span>ارسال</span>
              <Send size={20} aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
