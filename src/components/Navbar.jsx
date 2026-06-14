import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Journey' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state for glass background transition
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Progress Indicator calculation
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        const progress = (window.scrollY / totalScrollHeight) * 100;
        setScrollProgress(progress);
      }

      // Active Section Highlight based on scroll
      const scrollPosition = window.scrollY + 150; // offset for nav bar
      const sections = navLinks.map(link => document.getElementById(link.id));
      
      let currentSection = 'home';
      sections.forEach(sec => {
        if (sec && scrollPosition >= sec.offsetTop) {
          currentSection = sec.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setExpanded(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 75, // offset for sticky nav
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar 
        expanded={expanded} 
        expand="lg" 
        fixed="top" 
        className={`glass-navbar ${scrolled ? 'scrolled' : ''} py-2`}
      >
        <Container>
          <Navbar.Brand 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            className="fs-3 fw-bold text-gradient"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            AN.
          </Navbar.Brand>
          
          <div className="d-flex align-items-center d-lg-none gap-2">
            <ThemeToggle />
            <button 
              className="glass-panel d-flex align-items-center justify-content-center border-0"
              style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--glass-bg)', color: 'var(--text-primary)' }}
              onClick={() => setExpanded(!expanded)}
              aria-label="Toggle Menu"
            >
              {expanded ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mx-auto align-items-center text-center mt-3 mt-lg-0 gap-1 gap-lg-3">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                  className={`px-3 py-2 fw-medium position-relative transition-all ${activeSection === link.id ? 'text-gradient' : ''}`}
                  style={{ 
                    color: activeSection === link.id ? 'var(--primary)' : 'var(--text-secondary)',
                    fontSize: '0.95rem'
                  }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="position-absolute bottom-0 start-0 w-100"
                      style={{ height: '2.5px', background: 'var(--grad-primary)', borderRadius: '2px' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Nav.Link>
              ))}
            </Nav>

            <div className="d-none d-lg-flex align-items-center gap-3">
              <ThemeToggle />
              <motion.a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
                className="btn-premium py-2 px-4"
                style={{ fontSize: '0.9rem', borderRadius: '10px' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
