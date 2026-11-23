import React from 'react';
import Container from 'react-bootstrap/Container';
import { Mail, Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Socials } from '../ui/Socials';
import { site } from '../../data/site';
import { toFa } from '../../utils/fa';

export const Footer: React.FC = () => {
  const { contact } = site;
  return (
    <footer className="footer">
      <Container fluid className="align-items-center footer__inner">
        <a href="#home" aria-label="ALDMC، بازگشت به بالای صفحه">
          <Logo width={110} />
        </a>

        <Socials />

        <div className="d-flex flex-wrap justify-content-center footer__contact">
          <a href={`mailto:${contact.email}`} className="d-inline-flex align-items-center footer__item">
            <Mail size={24} aria-hidden="true" />
            <span className="lt">{contact.email}</span>
          </a>
          <a href={contact.phoneTel} className="d-inline-flex align-items-center footer__item">
            <Phone size={24} aria-hidden="true" />
            <span className="lt">{toFa(contact.phone)}</span>
          </a>
        </div>

        <p className="w-100 text-center footer__credit">
          طراحی و توسعه: {site.name} · {site.brand} · {toFa(new Date().getFullYear())}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
