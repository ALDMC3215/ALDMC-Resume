import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Expertise } from './components/sections/Expertise';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { AiShowcase } from './components/sections/AiShowcase';
import { Teaching } from './components/sections/Teaching';
import { Tools } from './components/sections/Tools';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <AiShowcase />
        <Teaching />
        <Tools />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
