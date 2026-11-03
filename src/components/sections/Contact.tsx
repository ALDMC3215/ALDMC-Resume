import React, { useState } from 'react';
import {
  Mail,
  Send,
  Phone,
  Copy,
  Check,
  ArrowLeft,
  ExternalLink,
  Share2,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const emailAddress = 'aldmc4543@gmail.com';
  const phoneNumber = '09174543813';

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Structured Contact / Social Matrix
  const primaryChannels = [
    {
      id: 'email',
      label: 'ایمیل مستقیم',
      labelEn: 'Direct Email',
      value: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: <Mail size={22} className="text-brand-orange" />,
      actionType: 'copy',
      copyValue: emailAddress,
      description: 'مناسب برای ارسال پروپوزال، قرارداد و مستندات پروژه',
    },
    {
      id: 'phone',
      label: 'تماس تلفنی',
      labelEn: 'Direct Phone',
      value: phoneNumber,
      href: `tel:+989174543813`,
      icon: <Phone size={22} className="text-brand-orange" />,
      actionType: 'call',
      description: 'پاسخگویی سریع در ساعات اداری (شیراز، ایران)',
    },
    {
      id: 'telegram',
      label: 'تلگرام رسمی',
      labelEn: 'Telegram',
      value: '@ALDMC',
      href: 'https://t.me/ALDMC',
      icon: <Send size={22} className="text-brand-orange" />,
      actionType: 'link',
      description: 'ارتباط سریع برای چت، هماهنگی جلسات و تبادل ایده',
    },
  ];

  const socialProfiles = [
    {
      platform: 'Instagram',
      handle: '@aldmc_origin',
      href: 'https://www.instagram.com/aldmc_origin/',
      role: 'آرت‌ورک‌ها و فعالیت‌های برند شخصی',
    },
    {
      platform: 'GitHub',
      handle: '@ALDMC3215',
      href: 'https://github.com/ALDMC3215',
      role: 'مخازن پروژه‌ها و کدهای توسعه محصول',
    },
    {
      platform: 'WhatsApp',
      handle: '@aldmc_origin',
      href: 'https://wa.me/989174543813',
      role: 'پیام‌رسان تجاری و کاری',
    },
    {
      platform: 'Facebook',
      handle: '@aldmc_origin',
      href: 'https://facebook.com/aldmc_origin',
      role: 'پروفایل برند سازمانی',
    },
    {
      platform: 'Suno AI',
      handle: 'ALDMC Music Lab',
      href: 'https://suno.com',
      role: 'قطعات صوتی و آهنگسازی با هوش مصنوعی',
    },
  ];

  return (
    <section className="section-wrapper contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-kicker">GET IN TOUCH &amp; COLLABORATE</div>
          <h2 className="section-title">
            ایده‌هارو با <span className="accent-word">AI</span> زنده می‌کنم
          </h2>
          <p className="section-desc mx-auto">
            اگر به دنبال طراحی یک تجربه محصولی متمایز، پروتوتایپینگ پرسرعت با هوش مصنوعی یا توسعه پایدار هستید، از کانال‌های زیر در ارتباط باشید.
          </p>
        </div>

        {/* Main 2-Column Desktop Grid for 1920x1080 Rich Presence */}
        <div className="contact-rich-grid">
          {/* Right Column (RTL Start): Creator Card & Direct Inquiry */}
          <div className="contact-creator-card card-editorial">
            <div className="creator-profile-header">
              <div className="creator-avatar-wrap">
                <img
                  src="/brand/avatars/ali-forghani.webp"
                  alt="علی فرقانی"
                  className="creator-avatar-img"
                />
                <span className="creator-status-dot" title="آماده همکاری" />
              </div>

              <div className="creator-meta-info">
                <h3 className="creator-name">علی فرقانی</h3>
                <span className="creator-role font-latin">Ali Forghani · Product Designer</span>
                <span className="creator-badge font-latin">ALDMC STUDIO · SHIRAZ</span>
              </div>
            </div>

            <p className="creator-statement">
              تمرکز من روی کاهش فاصله میان ایده خلاقانه تا محصول واقعی است. پذیرای همکاری در پروژه‌های منتخب طراحی محصول، هدایت بصری و سیستم‌های هوش مصنوعی هستم.
            </p>

            {/* Quick Email Launcher CTA */}
            <div className="creator-inquiry-box">
              <span className="inquiry-lead">ارسال ایمیل فوری با موضوع همکاری:</span>
              <a
                href={`mailto:${emailAddress}?subject=ALDMC%20Collaboration%20Inquiry`}
                className="btn btn-primary btn-pill creator-cta-btn"
              >
                <span>شروع گفت‌وگو و ارسال ایمیل</span>
                <ArrowLeft size={16} />
              </a>
            </div>
          </div>

          {/* Left Column: Primary Contact Cards + Social Hub */}
          <div className="contact-channels-column">
            {/* Primary 3 Channels */}
            <div className="primary-channels-stack">
              {primaryChannels.map((ch) => (
                <div key={ch.id} className="channel-item-card card-editorial">
                  <div className="channel-icon-col">{ch.icon}</div>

                  <div className="channel-info-col">
                    <div className="channel-label-row">
                      <span className="channel-label">{ch.label}</span>
                      <span className="channel-label-en font-latin">{ch.labelEn}</span>
                    </div>
                    <span className="channel-value font-latin">{ch.value}</span>
                    <p className="channel-desc">{ch.description}</p>
                  </div>

                  <div className="channel-action-col">
                    {ch.actionType === 'copy' ? (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(ch.copyValue || ch.value, ch.id)}
                        className="btn btn-secondary btn-sm btn-pill"
                        title="کپی"
                      >
                        {copiedKey === ch.id ? (
                          <>
                            <Check size={14} className="text-green-600" />
                            <span>کپی شد</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>کپی آدرس</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <a
                        href={ch.href}
                        target={ch.href.startsWith('http') ? '_blank' : undefined}
                        rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="btn btn-secondary btn-sm btn-pill"
                      >
                        <span>ارتباط مستقیم</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Matrix Hub */}
            <div className="contact-social-hub card-editorial">
              <div className="social-hub-header">
                <Share2 size={16} className="text-brand-orange" />
                <h4 className="social-hub-title">شبکه‌های اجتماعی و پلتفرم‌های تخصصی</h4>
              </div>

              <div className="social-profiles-grid">
                {socialProfiles.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-profile-chip font-latin"
                  >
                    <div className="social-chip-head">
                      <strong className="social-platform">{s.platform}</strong>
                      <ExternalLink size={11} className="text-muted-light" />
                    </div>
                    <span className="social-handle">{s.handle}</span>
                    <span className="social-desc">{s.role}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
