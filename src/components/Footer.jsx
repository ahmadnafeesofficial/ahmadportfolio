import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = 2026;

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 75,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="position-relative overflow-hidden py-5" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
      {/* Scroll to Top Button */}
      <div className="position-absolute start-50 translate-middle-x" style={{ top: '-20px', zIndex: 10 }}>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="glass-panel d-flex align-items-center justify-content-center border-0 text-white"
          style={{ 
            width: '44px', height: '44px', borderRadius: '50%', 
            background: 'var(--grad-primary)', cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)'
          }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to Top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      </div>

      <Container className="pt-4">
        <Row className="align-items-center text-center text-md-start">
          {/* Logo & Copyright */}
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="h4 fw-bold text-gradient mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Ahmad Nafees
            </h3>
            <p className="text-muted small mb-0">
              © {currentYear} Ahmad Nafees. All Rights Reserved.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={5} className="mb-4 mb-md-0">
            <ul className="list-inline mb-0 d-flex flex-wrap justify-content-center gap-3 gap-md-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((id) => (
                <li key={id} className="list-inline-item">
                  <a
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); handleScrollTo(id); }}
                    className="text-secondary small fw-medium transition-all"
                    style={{ textTransform: 'capitalize' }}
                    onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
                    onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {id}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Socials */}
          <Col md={3} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              {[
                { icon: <FiGithub />, href: 'https://github.com/ahmadnafees' },
                { icon: <FiLinkedin />, href: 'https://linkedin.com/in/ahmadnafees' },
                { icon: <FiTwitter />, href: 'https://twitter.com' }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel d-flex align-items-center justify-content-center text-secondary"
                  style={{ 
                    width: '38px', height: '38px', borderRadius: '10px', 
                    background: 'var(--glass-bg)', fontSize: '1.1rem'
                  }}
                  whileHover={{ scale: 1.1, color: 'var(--primary)', borderColor: 'var(--primary)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
