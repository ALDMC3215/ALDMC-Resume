import React from 'react';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Portfolio } from './components/sections/Portfolio';
import { Music } from './components/sections/Music';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => (
  <>
    <Nav />
    <main id="main">
      <Hero />
      <Services />
      <About />
      <Experience />
      <Portfolio />
      <Music />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
