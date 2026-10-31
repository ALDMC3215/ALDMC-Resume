import React from 'react';
import { Logo } from '../ui/Logo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-info">
            <Logo width={120} />
            <p className="footer-tagline">
              طراحی محصول، هویت بصری و توسعه با هوش مصنوعی · شیراز، ایران
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-icon back-to-top-btn"
            aria-label="بازگشت به ابتدای صفحه"
            title="بازگشت به بالا"
            type="button"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copyright">
            <p>
              © ۲۰۲۶ علی فرقانی (Ali Forghani / ALDMC). تمامی حقوق محفوظ است.
            </p>
            <span className="font-latin text-xs text-muted">
              Built with React, TypeScript & ALDMC Persimmon V6 Design System.
            </span>
          </div>

          <div className="footer-links font-latin">
            <a href="#hero">Hero</a>
            <span>·</span>
            <a href="#about">About</a>
            <span>·</span>
            <a href="#projects">Works</a>
            <span>·</span>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
