import React from 'react';
import { Github, Instagram, MessageCircle, Send } from 'lucide-react';
import { site } from '../../data/site';

/** 40px outlined circles, like the design's social row. */
export const Socials: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { contact } = site;
  const items = [
    { label: 'Instagram', href: contact.instagram, icon: <Instagram size={22} /> },
    { label: 'Telegram', href: contact.telegram, icon: <Send size={22} /> },
    { label: 'GitHub', href: contact.github, icon: <Github size={22} /> },
    { label: 'WhatsApp', href: contact.whatsapp, icon: <MessageCircle size={22} /> }
  ];
  return (
    <ul className={`socials ${className}`}>
      {items.map(i => (
        <li key={i.label}>
          <a href={i.href} target="_blank" rel="noopener noreferrer" aria-label={i.label} className="socials__link">
            {i.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
