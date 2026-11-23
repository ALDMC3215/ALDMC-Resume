import React from 'react';
import Button from 'react-bootstrap/Button';
import { Mail, Phone, Send, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { CardGrid } from '../ui/CardGrid';
import { ResumeSection } from '../ui/ResumeSection';
import { site } from '../../data/site';
import { toFa } from '../../utils/fa';
import SpotlightCard from '../ui/reactbits/SpotlightCard';

export const Contact: React.FC = () => {
  const { contact } = site;

  const contactChannels = [
    {
      id: 'email',
      icon: <Mail size={28} className="contact-card__icon" />,
      title: 'ایمیل مستقیم',
      titleEn: 'Email Inquiry',
      value: contact.email,
      hint: 'مناسب برای ارسال بریف، پروپوزال و مکاتبات رسمی',
      actionLabel: 'ارسال ایمیل',
      href: `mailto:${contact.email}`,
      highlight: true
    },
    {
      id: 'phone',
      icon: <Phone size={28} className="contact-card__icon" />,
      title: 'تماس تلفنی',
      titleEn: 'Phone & Direct Call',
      value: toFa(contact.phone),
      hint: 'گفت‌وگوی سریع درباره نیازمندی‌های پروژه',
      actionLabel: 'برقراری تماس',
      href: contact.phoneTel
    },
    {
      id: 'telegram',
      icon: <Send size={28} className="contact-card__icon" />,
      title: 'تلگرام',
      titleEn: 'Telegram Message',
      value: contact.telegramHandle,
      hint: 'پاسخگویی سریع برای مشاوره، ایده‌پردازی و هماهنگی جلسه',
      actionLabel: 'ارسال پیام در تلگرام',
      href: contact.telegram,
      external: true
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle size={28} className="contact-card__icon" />,
      title: 'واتس‌اپ',
      titleEn: 'WhatsApp Chat',
      value: toFa(contact.phone),
      hint: 'ارسال پیام، مستندات و گفت‌وگوهای اولیه',
      actionLabel: 'چت در واتس‌اپ',
      href: contact.whatsapp,
      external: true
    }
  ];

  return (
    <ResumeSection
      id="contact"
      title="تماس با من"
      sub={contact.subtitle}
    >
      <div className="d-flex flex-column gap-group w-100 contact-presentation">
        {/* Main Channels Grid with ReactBits Spotlight effect */}
        <CardGrid xs={1} lg={2}>
          {contactChannels.map(channel => (
            <SpotlightCard
              key={channel.id}
              className={`contact-card ${channel.highlight ? 'is-highlight' : ''}`}
              spotlightColor="rgba(231, 99, 56, 0.22)"
              spotlightSize={260}
              borderGlow={0.6}
            >
              <div className="d-flex align-items-center gap-3 contact-card__head">
                <div className="d-grid contact-card__icon-wrap">{channel.icon}</div>
                <div className="d-flex flex-column gap-1 contact-card__titles">
                  <h3 className="contact-card__title">{channel.title}</h3>
                  <span className="contact-card__meta lt">{channel.titleEn}</span>
                </div>
              </div>

              <div className="d-flex flex-column gap-2 contact-card__body">
                <span className="contact-card__value lt">{channel.value}</span>
                <p className="contact-card__hint">{channel.hint}</p>
              </div>

              <Button
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                variant={channel.highlight ? 'primary' : 'outline-primary'} size="sm" className="contact-card__cta"
              >
                <span>{channel.actionLabel}</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </Button>
            </SpotlightCard>
          ))}
        </CardGrid>

        {/* Location & Working Availability Strip */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-4 contact-presentation__strip">
          <div className="d-flex align-items-center contact-strip__item">
            <MapPin size={22} className="contact-strip__icon" />
            <div>
              <span className="d-block contact-strip__label">موقعیت مکانی</span>
              <p className="contact-strip__val">شیراز، ایران (همکاری ریموت و حضوری)</p>
            </div>
          </div>

          <div className="d-flex align-items-center contact-strip__item">
            <span className="contact-strip__status-dot" aria-hidden="true" />
            <div>
              <span className="d-block contact-strip__label">وضعیت پذیرش پروژه</span>
              <p className="contact-strip__val">آماده گفت‌وگو برای پروژه‌های منتخب طراحی محصول و هوش مصنوعی</p>
            </div>
          </div>
        </div>
      </div>
    </ResumeSection>
  );
};

export default Contact;
