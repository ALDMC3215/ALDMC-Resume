import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { id: 'home', label: 'خانه' },
  { id: 'portfolio', label: 'نمونه‌کارها' },
  { id: 'about', label: 'دربارهٔ من' },
  { id: 'experience', label: 'رزومه' },
  { id: 'interests', label: 'علاقه‌مندی‌ها' },
  { id: 'contact', label: 'تماس' },
];

export function Masthead() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);

  useEffect(() => {
    let frame = 0;
    function update() {
      frame = 0;
      const line = window.innerHeight * .28;
      let current = 'home';
      for (const { id } of links) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
      }
      const end = document.scrollingElement?.scrollHeight ?? Infinity;
      if (window.scrollY + window.innerHeight >= end - 2 && window.scrollY > 0) current = 'contact';
      setActive(current);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  function closeOnEscape(event) {
    if (event.key !== 'Escape' || !open) return;
    setOpen(false);
    toggle.current?.focus();
  }

  function followLink(event) {
    if (!open) return;
    setOpen(false);
    const target = document.getElementById(event.currentTarget.hash.slice(1));
    target?.focus({ preventScroll: true });
  }

  return (
    <header className="masthead" onKeyDown={closeOnEscape}>
      <div className="frame masthead__inner" dir="ltr">
        <a className="masthead__brand" href="#home" aria-label="ALDMC — خانه" onClick={() => setOpen(false)}>
          <img src="/brand/logos/aldmc-paper.svg" width="98" height="26" alt="" />
        </a>
        <button className="masthead__toggle" type="button" ref={toggle}
          aria-controls="masthead-nav" aria-expanded={open}
          aria-label={open ? 'بستن منو' : 'باز کردن منو'} onClick={() => setOpen(value => !value)}>
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
        <nav className="masthead__nav" id="masthead-nav" dir="rtl" aria-label="ناوبری اصلی"
          data-open={open} style={{ '--active-link': links.findIndex(link => link.id === active) }}>
          <ul>
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? 'location' : undefined}
                  onClick={followLink}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
