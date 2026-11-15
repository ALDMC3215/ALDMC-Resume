import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { nav } from '../../data/site';

/** Sticky top navigation (logo, links, CTA). Below 960px it becomes a hamburger menu. */
export const Nav: React.FC = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        const first = nav.find(n => visible.has(n.id));
        if (first) setActive(first.id);
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    nav.forEach(n => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = nav.map(n => (
    <li key={n.id}>
      <a
        href={`#${n.id}`}
        className={`nav__link${active === n.id ? ' is-active' : ''}`}
        aria-current={active === n.id ? 'true' : undefined}
        onClick={() => setOpen(false)}
      >
        {n.label}
      </a>
    </li>
  ));

  return (
    <header className={`nav${scrolled || open ? ' is-solid' : ''}`}>
      <div className="container nav__bar">
        <a href="#home" className="nav__logo" aria-label="ALDMC، بازگشت به بالای صفحه">
          <Logo width={104} />
        </a>

        <nav className="nav__links" aria-label="بخش‌های سایت">
          <ul>{links}</ul>
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm nav__cta">
          شروع همکاری
        </a>

        <button
          type="button"
          className="nav__burger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'بستن منو' : 'باز کردن منو'}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <nav id="mobile-menu" className={`nav__drawer${open ? ' is-open' : ''}`} aria-label="منوی موبایل" hidden={!open}>
        <ul>{links}</ul>
        <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>
          شروع همکاری
        </a>
      </nav>
    </header>
  );
};

export default Nav;
