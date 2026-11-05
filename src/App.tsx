import React from 'react';
import { Hero } from './components/sections/Hero';
import { ThemeToggle } from './components/ui/ThemeToggle';

/**
 * Single-screen resume: the hero is the whole site.
 * All content lives inside the glass folders at the bottom of the hero.
 */
export const App: React.FC = () => {
  return (
    <div className="portfolio-app-root">
      <div className="app-theme-toggle">
        <ThemeToggle />
      </div>
      <main id="main-content">
        <Hero />
      </main>
    </div>
  );
};

export default App;
