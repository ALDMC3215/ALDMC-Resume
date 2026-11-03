import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  const root = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    let tween: gsap.core.Tween | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!tween) {
            tween = gsap.from(el.querySelectorAll('.footer-wordmark-svg .footer-letter'), {
              y: 65,
              opacity: 0.15,
              duration: 1.0,
              stagger: 0.09,
              ease: 'power3.out',
              repeat: -1,
              repeatDelay: 2.0,
              yoyo: true,
            });
          } else {
            tween.resume();
          }
        } else if (tween) {
          tween.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      tween?.kill();
    };
  }, []);

  return (
    <footer ref={root} className="footer rising-wordmark-footer" id="footer">
      <div className="container footer-content-wrap">
        {/* Brand Meta Row */}
        <div className="footer-top-meta-row">
          <div className="footer-brand-side">
            <Logo width={120} />
            <p className="footer-tagline">
              طراحی محصول، هویت بصری و توسعه با هوش مصنوعی · شیراز، ایران
            </p>
          </div>

          <div className="footer-cols-grid">
            {/* Column 1: Navigate */}
            <div className="footer-col">
              <h4>ناوبری / Navigate</h4>
              <a href="#about">درباره من</a>
              <a href="#projects">پروژه‌های منتخب</a>
              <a href="#experience">سوابق کاری</a>
              <a href="#expertise">مهارت‌ها</a>
              <a href="#contact">ارتباط مستقیم</a>
            </div>

            {/* Column 2: Learn */}
            <div className="footer-col">
              <h4>یادگیری / Learn</h4>
              <a href="#teaching">تجربه تدریس</a>
              <a href="#tools">ابزارهای منتخب</a>
              <a href="#ai-showcase">موسیقی و Sound Lab</a>
            </div>

            {/* Column 3: Social */}
            <div className="footer-col">
              <h4>شبکه‌ها / Social</h4>
              <a
                href="https://www.instagram.com/aldmc_origin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://t.me/ALDMC"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
              <a
                href="https://github.com/ALDMC3215"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="mailto:aldmc4543@gmail.com">Email</a>
            </div>
          </div>
        </div>

        {/* Giant Scalable ALDMC Vector Wordmark:
            Letters A & L in Persimmon Orange (#E76338), Letters D, M, C in Crisp White (#FFFFFF) */}
        <div className="footer-wordmark-wrapper" dir="ltr" aria-label="ALDMC Wordmark">
          <svg
            className="footer-wordmark-svg"
            viewBox="0 0 1418.2 358.0"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            {/* A - Persimmon Orange */}
            <g className="footer-letter letter-a" fill="#E76338">
              <path d="M48 310 244 48H346V310H294V229H180.5L214.5 183H294V94H276Q272.5 94 270.3 97.3L110 310H48Z" />
            </g>
            {/* L - Persimmon Orange */}
            <g className="footer-letter letter-l" fill="#E76338">
              <path d="M366.5 48H420.9V215C420.9 246 436.5 263.3 464.5 263.3H544.5L568.2 309H425.5C389.5 309 366 289 366 256L366.5 48Z" />
            </g>
            {/* D - White */}
            <g className="footer-letter letter-d" fill="#FFFFFF">
              <path d="M563.2 48H677.2C752.2 48 805.7 99 805.7 177C805.7 253 756.2 309 686.2 309H584.2V113.6H636.6V259.6H672.2C718.2 259.6 749.7 223 749.7 177C749.7 130 719.2 97 674.2 97H589.2L563.2 48Z" />
            </g>
            {/* M - White */}
            <g className="footer-letter letter-m" fill="#FFFFFF">
              <path d="M820.2 48H863.2C868.2 48 871.2 50 875.2 55L959 162Q966.4 169.2 974.5 162L1061.7 52.5Q1066.2 48 1072.2 48H1114.2V309H1057.8V148L986.2 234.9Q966.2 252.3 946.8 235L876.2 148V309H820.2V48Z" />
            </g>
            {/* C - White */}
            <g className="footer-letter letter-c" fill="#FFFFFF">
              <path d="M1370.2 48 1335.2 97.7H1258.2C1213.2 97.7 1181.7 134.5 1181.7 180C1181.7 225.4 1214.2 259.6 1257.2 259.6H1336.1L1370.2 309.1H1253.2C1179.2 309.1 1128.2 254.5 1128.2 179C1128.2 105 1180.2 48 1253.2 48H1370.2Z" />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
