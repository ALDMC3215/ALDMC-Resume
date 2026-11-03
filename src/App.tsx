import React from 'react';
import { SmoothScroll } from './components/providers/SmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { WorkspaceArchive } from './components/sections/WorkspaceArchive';
import { Expertise } from './components/sections/Expertise';
import { About } from './components/sections/About';
import { Tools } from './components/sections/Tools';
import { AiShowcase } from './components/sections/AiShowcase';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="portfolio-app-root">
        {/* Floating Spotlight Centred Navbar */}
        <Navbar />

        {/* Main Content Flow: Reordered strictly per Master Prompt */}
        <main id="main-content">
          {/* 1. Arc Portrait Hero */}
          <Hero />

          {/* 2. About Me (Bio, Core Scope, Values & Working Philosophy) */}
          <About />

          {/* 3. Interactive Dossier Archive (100vh Folder Effect: Projects, Experience, Teaching) */}
          <WorkspaceArchive />

          {/* 4. Skills & Capabilities (Asymmetric Bento with Glassmorphism Cards) */}
          <Expertise />

          {/* 5. Tools (Grouped Bento: Assistants + Coding + Media Lab + Foundations) */}
          <Tools />

          {/* 6. Music & Sound Lab (Full-width Dark Band with 3D Testimonials Stack Card) */}
          <AiShowcase />

          {/* 7. Contact (Full-width Band: Heading + Big Email Line + CTA + Socials) */}
          <Contact />
        </main>

        {/* Rising Wordmark Footer with GSAP LTR Staggered Letters */}
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
