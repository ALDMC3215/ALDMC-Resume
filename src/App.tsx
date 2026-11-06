import React from 'react';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ProjectsFolderView } from './components/sections/folder-views/ProjectsFolderView';
import { ExperienceFolderView } from './components/sections/folder-views/ExperienceFolderView';
import { TeachingFolderView } from './components/sections/folder-views/TeachingFolderView';
import { Expertise } from './components/sections/Expertise';
import { Tools } from './components/sections/Tools';
import { ElasticSliderShowcase } from './components/sections/ElasticSliderShowcase';
import { Contact } from './components/sections/Contact';
import { SideNav, SideNavItem } from './components/layout/SideNav';
import { ThemeToggle } from './components/ui/ThemeToggle';

/** Sections in reading order. `id` is the wrapper id the side navigation scrolls to. */
const SECTIONS: (SideNavItem & { node: React.ReactNode })[] = [
  { id: 'hero', label: 'Home', node: null },
  { id: 'sec-about', label: 'About', node: <About /> },
  { id: 'sec-projects', label: 'Projects', node: <ProjectsFolderView /> },
  { id: 'sec-experience', label: 'Experience', node: <ExperienceFolderView /> },
  { id: 'sec-teaching', label: 'Teaching', node: <TeachingFolderView /> },
  { id: 'sec-skills', label: 'Skills', node: <Expertise /> },
  { id: 'sec-tools', label: 'AI Tools', node: <Tools /> },
  { id: 'sec-lab', label: 'Lab', node: <ElasticSliderShowcase /> },
  { id: 'sec-contact', label: 'Contact', node: <Contact /> }
];

const NAV_ITEMS: SideNavItem[] = SECTIONS.map(({ id, label }) => ({ id, label }));

export const App: React.FC = () => {
  return (
    <div className="portfolio-app-root">
      <div className="app-theme-toggle">
        <ThemeToggle />
      </div>

      <SideNav items={NAV_ITEMS} />

      <main id="main-content">
        <Hero />
        {SECTIONS.slice(1).map(({ id, node }) => (
          <section key={id} id={id} className="site-section">
            <div className="site-section__inner">{node}</div>
          </section>
        ))}
      </main>

      <footer className="site-footer font-latin">
        <span>ALDMC · ALI FORGHANI</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
};

export default App;
