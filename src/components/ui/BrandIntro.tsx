import { useState } from 'react';
import { Logo } from './Logo';
import '../../styles/_intro.scss';

export function BrandIntro() {
  const [showIntro, setShowIntro] = useState(
    () => (!window.location.hash || window.location.hash === '#home') &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  if (!showIntro) return null;

  return (
    <div className="hero__curtain" aria-hidden="true" onAnimationEnd={event => {
      if (event.target === event.currentTarget) setShowIntro(false);
    }}>
      <Logo width={600} className="hero__intro-logo" />
    </div>
  );
}
