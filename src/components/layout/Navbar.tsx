import React, { useEffect, useState } from 'react';
import { PillNav, PillNavItem } from '../ui/PillNav';
import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from '../ui/StaggeredMenu';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useLenis } from '../providers/SmoothScroll';
import { MessageSquare } from 'lucide-react';

const navItems: PillNavItem[] = [
  { label: 'درباره', href: '#about' },
  { label: 'پروژه‌ها', href: '#projects' },
  { label: 'سوابق کاری', href: '#experience' },
  { label: 'مهارت‌ها', href: '#expertise' },
  { label: 'آموزش', href: '#teaching' },
  { label: 'موزیک', href: '#ai-showcase' },
  { label: 'تماس', href: '#contact' },
];

const mobileItems: StaggeredMenuItem[] = [
  { label: 'درباره', link: '#about', ariaLabel: 'درباره علی فرقانی' },
  { label: 'پروژه‌ها', link: '#projects', ariaLabel: 'مشاهده پروژه‌ها' },
  { label: 'سوابق کاری', link: '#experience', ariaLabel: 'سوابق کاری' },
  { label: 'مهارت‌ها', link: '#expertise', ariaLabel: 'مهارت‌ها و تخصص' },
  { label: 'آموزش', link: '#teaching', ariaLabel: 'دوره‌های آموزشی' },
  { label: 'موزیک', link: '#ai-showcase', ariaLabel: 'آزمایشگاه صدا' },
  { label: 'تماس', link: '#contact', ariaLabel: 'شروع همکاری' },
];

const socialLinks: StaggeredMenuSocialItem[] = [
  { label: 'GitHub', link: 'https://github.com/aldmc-ux' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Telegram', link: 'https://t.me/aldmc_design' },
];

export const Navbar: React.FC = () => {
  const [activeHref, setActiveHref] = useState<string>('#about');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { scrollTo } = useLenis();

  // Active section tracking with cached offsets and RAF throttling
  useEffect(() => {
    let ticking = false;
    let sectionOffsets: { href: string; top: number }[] = [];

    const updateOffsets = () => {
      sectionOffsets = navItems
        .filter((item): item is PillNavItem & { href: string } => Boolean(item.href && item.href.startsWith('#') && item.href.length > 1))
        .map(item => {
          const el = document.getElementById(item.href.substring(1));
          return { href: item.href, top: el ? el.offsetTop : 0 };
        })
        .sort((a, b) => a.top - b.top);
    };

    updateOffsets();
    window.addEventListener('resize', updateOffsets, { passive: true });

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 60);

          const scrollPos = scrollY + 220;
          let matched = '#projects';
          for (let i = sectionOffsets.length - 1; i >= 0; i--) {
            if (sectionOffsets[i].top <= scrollPos) {
              matched = sectionOffsets[i].href;
              break;
            }
          }
          setActiveHref(prev => (prev !== matched ? matched : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', updateOffsets);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (href: string) => {
    setActiveHref(href);
    if (href.startsWith('#')) {
      try {
        window.history.pushState(null, '', href);
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      } catch {
        // Fallback if history state fails
      }
    }
    if (href === '#' || href === '/') {
      scrollTo(0, { duration: 1.2 });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      scrollTo(target as HTMLElement, { offset: -76, duration: 1.2 });
    }
  };

  return (
    <>
      {/* =========================================================================
          DESKTOP HEADER NAVBAR (> 1024px) - PillNav Continuous Floating Capsule
          ========================================================================= */}
      <header
        className={`pill-navbar-wrapper desktop-only ${isScrolled ? 'is-scrolled' : ''}`}
        role="banner"
      >
        <PillNav
          logo={<Logo height={20} width={80} />}
          logoAlt="ALDMC - علی فرقانی"
          logoHref="#"
          items={navItems}
          activeHref={activeHref}
          onItemClick={(item, _idx, e) => {
            e.preventDefault();
            if (item.href) handleItemClick(item.href);
          }}
          layout="joined"
          surface="glass"
          size="md"
          hoverEffect="fill"
          indicator="dot"
          highlightColor="var(--brand-orange, #E76338)"
          highlightTextColor="#FFFFFF"
          bounce={0.25}
          stretch={0.45}
          collapse="never"
          actions={
            <div className="pill-nav-actions">
              <ThemeToggle />
            </div>
          }
        />
      </header>

      {/* =========================================================================
          MOBILE HEADER NAVBAR (<= 1024px) - Full StaggeredMenu Integration
          ========================================================================= */}
      <div className="mobile-header-root mobile-only" role="banner">
        <StaggeredMenu
          position="left"
          colors={['#18181B', '#27211D', '#E76338']}
          items={mobileItems}
          socialItems={socialLinks}
          displaySocials={true}
          displayItemNumbering={true}
          accentColor="var(--brand-orange, #E76338)"
          isFixed={true}
          menuText={['منو', 'بستن']}
          logo={
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="بازگشت به ابتدای صفحه - ALDMC"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Logo width={82} />
            </a>
          }
          headerSlot={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ThemeToggle />
            </div>
          }
          onItemClick={(item) => {
            handleItemClick(item.link);
          }}
          actions={
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick('#contact');
                }}
                className="btn btn-primary btn-pill"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <span>گفت‌وگو درباره پروژه</span>
                <MessageSquare size={15} />
              </a>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Navbar;
