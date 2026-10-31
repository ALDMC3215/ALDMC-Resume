import React, { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'درباره من', href: '#about' },
  { label: 'تخصص‌ها', href: '#expertise' },
  { label: 'سوابق', href: '#experience' },
  { label: 'پروژه‌ها', href: '#projects' },
  { label: 'تدریس', href: '#teaching' },
  { label: 'ارتباط', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a href="#" className="navbar-brand" aria-label="صفحه اصلی علی فرقانی">
            <Logo width={110} />
            <span className="navbar-brand-badge font-latin">v6</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar-nav desktop-only" aria-label="منوی اصلی">
            <ul className="navbar-list">
              {navItems.map((item) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <li key={item.href} className="navbar-item">
                    <a
                      href={item.href}
                      className={`navbar-link ${isActive ? 'active' : ''}`}
                    >
                      {item.label}
                      {isActive && <span className="active-dot" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions (Theme Toggle & Mobile Menu Trigger) */}
          <div className="navbar-actions">
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-icon mobile-menu-toggle mobile-only"
              aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (outside header so position:fixed covers the full viewport) */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={closeMobileMenu} />
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <Logo width={100} />
            <button
              onClick={closeMobileMenu}
              className="btn-icon"
              aria-label="بستن منو"
              type="button"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="mobile-nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mobile-nav-footer">
            <p className="mobile-nav-contact">علی فرقانی — طراح محصول</p>
            <span className="font-latin text-muted text-xs">Shiraz, Iran</span>
          </div>
        </div>
      </div>
    </>
  );
};
