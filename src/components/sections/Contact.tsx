import React, { useState } from 'react';
import { resumeData } from '../../data/resumeData';
import { Logo } from '../ui/Logo';
import {
  Mail,
  Github,
  Instagram,
  Send,
  Phone,
  MessageCircle,
  Facebook,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { contact, personalInfo } = resumeData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@aldmc_origin',
      url: 'https://www.instagram.com/aldmc_origin/',
      icon: <Instagram size={18} />,
    },
    {
      name: 'Telegram',
      handle: '@ALDMC',
      url: 'https://t.me/ALDMC',
      icon: <Send size={18} />,
    },
    {
      name: 'WhatsApp',
      handle: '@aldmc_origin',
      url: 'https://wa.me/989174543813',
      icon: <MessageCircle size={18} />,
    },
    {
      name: 'Facebook',
      handle: '@aldmc_origin',
      url: 'https://facebook.com/aldmc_origin',
      icon: <Facebook size={18} />,
    },
    {
      name: 'GitHub',
      handle: '@ALDMC3215',
      url: 'https://github.com/ALDMC3215',
      icon: <Github size={18} />,
    },
    {
      name: 'Phone',
      handle: '09174543813',
      url: 'tel:+989174543813',
      icon: <Phone size={18} />,
    },
  ];

  return (
    <section className="section-wrapper contact-section" id="contact">
      <div className="container">
        <div className="contact-card card-editorial">
          <div className="contact-main-grid">
            {/* Main Content Column */}
            <div className="contact-primary-col">
              <div className="contact-header-block">
                <span className="section-kicker">COLLABORATION</span>
                <h2 className="contact-headline">
                  ایده هارو با AI زنده میکنم
                </h2>
                <p className="contact-subtitle">
                  {contact.subtitle}
                </p>
              </div>

              {/* Direct Email Action Bar */}
              <div className="contact-email-bar">
                <div className="contact-email-info">
                  <div className="contact-email-icon">
                    <Mail size={18} />
                  </div>
                  <span className="contact-email-address font-latin">{contact.email}</span>
                </div>

                <div className="contact-email-actions">
                  <button
                    onClick={copyEmail}
                    className="btn btn-secondary btn-sm"
                    type="button"
                    title="کپی آدرس ایمیل"
                  >
                    {copied ? <Check size={14} className="text-brand-orange" /> : <Copy size={14} />}
                    <span>{copied ? 'کپی شد!' : 'کپی ایمیل'}</span>
                  </button>
                  <a
                    href={`mailto:${contact.email}`}
                    className="btn btn-primary btn-sm"
                  >
                    <span>ارسال پیام</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Verified Channels Grid (6 Platforms) */}
              <div className="contact-social-grid">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-profile-card"
                  >
                    <div className="social-card-inner">
                      <div className="social-icon-wrapper">
                        {item.icon}
                      </div>
                      <div className="social-meta-info">
                        <span className="social-platform font-latin">{item.name}</span>
                        <span className="social-handle font-latin">{item.handle}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="social-card-arrow" />
                  </a>
                ))}
              </div>
            </div>

            {/* Sidebar Visual / Identity Card */}
            <div className="contact-meta-col">
              <div className="contact-meta-box">
                <div className="contact-meta-logo">
                  <Logo width={120} />
                </div>
                <h3 className="contact-meta-name">{personalInfo.name}</h3>
                <p className="contact-meta-role font-latin">PRODUCT DESIGNER & AI SPECIALIST</p>
                <p className="contact-meta-bio">
                  آماده همکاری در طراحی محصول، خلق تجربیات نوآورانه، تولید محتوای هوش مصنوعی و اتوماسیون جریان‌های کاری.
                </p>

                <div className="contact-meta-divider" />

                <div className="contact-meta-status">
                  <div className="meta-status-dot" />
                  <span>{personalInfo.availability}</span>
                </div>

                <div className="contact-meta-features">
                  <div className="meta-feature-item">
                    <Sparkles size={13} className="text-brand-orange" />
                    <span>مستقر در شیراز — امکان همکاری ریموت در سراسر جهان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
