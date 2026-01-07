
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Strategy } from './components/Strategy';
import { CaseStudies } from './components/CaseStudies';
import { Results } from './components/Results';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'strategy', 'case-studies', 'results', 'credentials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold for active section detection
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-luxury-gradient selection:bg-gold-500/30">
      {/* Premium ambient glow background elements */}
      <div className="fixed top-[-15%] right-[-10%] w-[50%] h-[50%] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none animate-pulse-slow"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/3 rounded-full blur-[140px] pointer-events-none"></div>

      <Navbar activeSection={activeSection} />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <section id="hero">
          <Hero />
        </section>

        <section id="strategy" className="py-32">
          <Strategy />
        </section>

        <section id="case-studies" className="py-32">
          <CaseStudies />
        </section>

        <section id="results" className="py-32">
          <Results />
        </section>

        <section id="credentials" className="py-32">
          <Credentials />
        </section>

        <section id="contact" className="py-32">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
