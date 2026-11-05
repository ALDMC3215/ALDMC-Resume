import React from 'react';
import { SmoothScroll } from './components/providers/SmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { GlassFolderHub } from './components/sections/GlassFolderHub';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="portfolio-app-root">
        {/* Floating Spotlight Centred Navbar */}
        <Navbar />

        {/* Main Content Flow */}
        <main id="main-content">
          {/* 1. Arc Portrait Hero */}
          <Hero />

          {/* 2. Glass Folder Hub: Central Interactive Directory for All Sections & Items */}
          <GlassFolderHub />
        </main>

        {/* Rising Wordmark Footer with GSAP LTR Staggered Letters */}
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
