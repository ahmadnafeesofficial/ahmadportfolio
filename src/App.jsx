import React, { useState, useEffect } from 'react';
import NavigationBar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial portfolio page assets pre-loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Dynamic Loader */}
      <Loader isLoading={loading} />

      {/* Main Web App Structure */}
      {!loading && (
        <>
          {/* Interactive Connected Nodes Canvas Background */}
          <ParticleBackground />

          {/* Sticky Navbar */}
          <NavigationBar />

          {/* Main Sections */}
          <main style={{ position: 'relative', zIndex: 1 }}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />

            <Contact />
          </main>

          {/* Site Footer */}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
