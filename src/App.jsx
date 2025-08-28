import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 scroll-smooth">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="projects" className="relative z-10">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
}
