// App.jsx (final version)
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {useScroll} from './hooks/UseScoll'

export default function App() {
  const { isScrolled, activeSection, scrollToSection } = useScroll();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header 
        isScrolled={isScrolled} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}