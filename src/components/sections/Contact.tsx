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
      clickable: true,
    },
    {
      name: 'Telegram',
      handle: '@ALDMC',
      url: 'https://t.me/ALDMC',
      icon: <Send size={18} />,
      clickable: true,
    },
    {
      name: 'WhatsApp',
      handle: '@aldmc_origin',
      url: 'https://wa.me/989174543813',
      icon: <MessageCircle size={18} />,
      clickable: true,
    },
    {
      name: 'Facebook',
      handle: '@aldmc_origin',
      url: 'https://facebook.com/aldmc_origin',
      icon: <Facebook size={18} />,
      clickable: true,
    },
    {
      name: 'GitHub',
      handle: '@ALDMC3215',
      url: 'https://github.com/ALDMC3215',
      icon: <Github size={18} />,
      clickable: true,
    },
    {
      name: 'Phone',
      handle: '09174543813',
      url: 'tel:+989174543813',
      icon: <Phone size={18} />,
      clickable: true,
    },
  ];

  return (
    <section className="section-wrapper contact-section" id="contact">
      <div className="container">
        <div className="contact-card card-editorial p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left/Main Column: Headline, Bio & Social Grid */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="section-kicker">COLLABORATION</span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[var(--text-primary)] leading-tight tracking-tight mt-1 mb-3">
                  ایده هارو با AI زنده میکنم
                </h2>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
                  {contact.subtitle}
                </p>
              </div>

              {/* Direct Email Action Bar */}
              <div className="contact-email-box my-4 p-3.5 sm:p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-primary)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
                <div className="flex items-center gap-2.5 font-latin text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span>{contact.email}</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={copyEmail}
                    className="btn btn-secondary btn-sm flex-1 sm:flex-initial"
                    type="button"
                    aria-label="کپی آدرس ایمیل"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-brand-orange" />
                        <span>کپی شد!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>کپی ایمیل</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${contact.email}`}
                    className="btn btn-primary btn-sm flex-1 sm:flex-initial flex items-center justify-center gap-1.5"
                  >
                    <span>ارسال پیام</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              {/* 2-Column Compact Social Media Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-primary)] hover:border-brand-orange/50 hover:bg-brand-orange/5 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 text-brand-orange flex items-center justify-center transition-colors group-hover:bg-brand-orange group-hover:text-white">
                        {item.icon}
                      </div>
                      <div>
                        <span className="font-latin text-[11px] uppercase tracking-wider text-[var(--text-muted)] block font-semibold">
                          {item.name}
                        </span>
                        <span className="font-latin text-xs font-bold text-[var(--text-primary)] group-hover:text-brand-orange transition-colors">
                          {item.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-[var(--text-muted)] group-hover:text-brand-orange group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Personal Identity Card with Real Portrait */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-[340px] rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6 shadow-xl relative overflow-hidden text-center group">
                {/* Decorative Subtle Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none" />

                {/* Real Ali Forghani Portrait */}
                <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-brand-orange shadow-lg mb-4 bg-black/10">
                  <img
                    src="/brand/avatars/ali-forghani.webp"
                    alt="علی فرقانی — Ali Forghani"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm flex items-center gap-1 text-[10px] text-white font-latin font-bold">
                    <Sparkles size={10} className="text-brand-orange" />
                    <span>A/F</span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-xl font-black text-[var(--text-primary)] mb-1">
                  {personalInfo.name}
                </h3>
                <p className="font-latin text-xs font-bold text-brand-orange tracking-wide mb-1">
                  Product Designer & AI Creative Specialist
                </p>
                <span className="font-latin text-xs text-[var(--text-muted)] block mb-4">
                  Shiraz, Iran
                </span>

                <div className="w-full h-[1px] bg-[var(--border-subtle)] my-3" />

                {/* Small ALDMC Brand Logo */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  <Logo width={90} />
                  <span className="text-[11px] text-[var(--text-muted)]">استودیوی خلاق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
