import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Socials } from '../ui/Socials';
import { nav, site } from '../../data/site';
import { toFa } from '../../utils/fa';

export const Footer: React.FC = () => {
  const { contact } = site;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#home" aria-label="ALDMC، بازگشت به بالای صفحه">
          <Logo width={110} />
        </a>

        <nav aria-label="لینک‌های پایین صفحه">
          <ul className="footer__nav">
            {nav.map(n => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Socials />

        <div className="footer__contact">
          <a href={`mailto:${contact.email}`} className="footer__item">
            <Mail size={24} aria-hidden="true" />
            <span className="lt">{contact.email}</span>
          </a>
          <a href={contact.phoneTel} className="footer__item">
            <Phone size={24} aria-hidden="true" />
            <span className="lt">{toFa(contact.phone)}</span>
          </a>
        </div>

        <p className="footer__credit">
          طراحی و توسعه: {site.name} · {site.brand} · {toFa(new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
