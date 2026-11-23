import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Menu, X, ArrowUpLeft } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { nav } from '../../data/site';

/**
 * Floating modular Dashboard-style segmented Navigation.
 * Positioned high and compact so it leaves the portrait completely unobstructed.
 */
export const Nav: React.FC = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        className={`d-inline-flex align-items-center dash-nav__pill${active === n.id ? ' is-active' : ''}`}
        aria-current={active === n.id ? 'true' : undefined}
        onClick={() => setOpen(false)}
      >
        {n.label}
      </a>
    </li>
  ));

  return (
    <header className={`position-fixed dash-header${scrolled ? ' is-scrolled' : ''}`}>
      <Container fluid className="d-flex align-items-center justify-content-between gap-3 dash-header__bar">
        {/* Start Group (Right in RTL): Brand Logo + Nav Pills */}
        <div className="d-flex align-items-center dash-header__start">
          <div className="d-inline-flex align-items-center dash-module dash-module--brand">
            <a href="#home" className="d-inline-flex align-items-center dash-logo" aria-label="ALDMC، بازگشت به بالای صفحه">
              <Logo width={92} />
            </a>
          </div>

          <nav className="d-inline-flex align-items-center dash-module dash-module--links" aria-label="بخش‌های سایت">
            <ul className="d-flex align-items-center gap-1 dash-nav__list">{links}</ul>
          </nav>
        </div>

        {/* End Group (Left in RTL): Action Button + Mobile Burger */}
        <div className="d-flex align-items-center dash-header__end">
          <div className="d-inline-flex align-items-center dash-module dash-module--action">
            <Button href="#contact" size="sm" className="dash-cta">
              <span>شروع همکاری</span>
              <ArrowUpLeft size={16} aria-hidden="true" />
            </Button>

            <button
              type="button"
              className="dash-burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'بستن منو' : 'باز کردن منو'}
              onClick={() => setOpen(o => !o)}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <nav id="mobile-menu" className={`position-fixed dash-drawer${open ? ' is-open' : ''}`} aria-label="منوی موبایل" hidden={!open}>
        <ul className="d-flex flex-column gap-1 dash-drawer__list">{links}</ul>
        <Button href="#contact"  onClick={() => setOpen(false)}>
          شروع همکاری
        </Button>
      </nav>
    </header>
  );
};

export default Nav;
