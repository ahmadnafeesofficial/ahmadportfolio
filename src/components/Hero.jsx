import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import profileImg from '../assets/ahmad-nafees-real.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatTransition = (duration) => ({
    y: {
      duration: duration,
      yoyo: Infinity,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
    rotate: {
      duration: duration * 1.5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    }
  });

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
    <section 
      id="home" 
      className="d-flex align-items-center position-relative overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: 'var(--navbar-height)' }}
    >
      {/* Ambient Glows */}
      <div className="ambient-glow" style={{ top: '20%', left: '10%' }}></div>
      <div className="ambient-glow ambient-glow-cyan" style={{ bottom: '20%', right: '10%' }}></div>

      <Container>
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          {/* Left Column: Text Content */}
          <Col lg={7} className="text-center text-lg-start mt-5 mt-lg-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="d-inline-flex align-items-center gap-2 mb-3">
                <span className="glass-panel px-3 py-1 text-gradient fw-bold" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>
                  WELCOME TO MY PORTFOLIO
                </span>
              </motion.div>

              <motion.h1 
                variants={itemVariants} 
                className="display-3 fw-extrabold mb-2"
                style={{ lineHeight: 1.1 }}
              >
                Hi, I'm <span className="text-gradient">Ahmad Nafees</span>
              </motion.h1>

              <motion.h2 
                variants={itemVariants} 
                className="h1 fw-bold text-gradient-cyan mb-4"
              >
                Frontend Developer
              </motion.h2>

              <motion.p 
                variants={itemVariants} 
                className="lead text-secondary mb-3"
                style={{ maxWidth: '600px', fontSize: '1.15rem' }}
              >
                Building modern, responsive, and user-friendly web applications with React and Bootstrap.
              </motion.p>

              <motion.p 
                variants={itemVariants} 
                className="text-muted mb-5"
                style={{ maxWidth: '550px', fontSize: '0.98rem', lineHeight: '1.6' }}
              >
                Passionate frontend developer focused on creating engaging digital experiences. Currently expanding my skills by learning backend development and full-stack technologies.
              </motion.p>

              <motion.div 
                variants={itemVariants} 
                className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-3"
              >
                <motion.button 
                  onClick={() => handleScrollTo('projects')}
                  className="btn-premium w-100 w-sm-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>

                <motion.button 
                  onClick={() => handleScrollTo('contact')}
                  className="btn-premium-outline w-100 w-sm-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
                
                <motion.a 
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert("Resume download functionality integrated!"); }}
                  className="btn-premium-text text-decoration-none"
                  whileHover={{ scale: 1.05 }}
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </Col>

          {/* Right Column: Profile Image + Floating Icons */}
          <Col lg={5} className="d-flex justify-content-center align-items-center position-relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
              className="position-relative"
              style={{ width: '100%', maxWidth: '400px' }}
            >
              {/* Profile Image Wrapper */}
              <div 
                className="glass-panel overflow-hidden position-relative mx-auto"
                style={{ 
                  borderRadius: '50% 30% 70% 30% / 50% 60% 40% 50%', 
                  width: '320px', 
                  height: '320px',
                  border: '3px solid rgba(99, 102, 241, 0.3)',
                  boxShadow: '0 20px 60px rgba(99, 102, 241, 0.25), 0 0 80px rgba(6, 182, 212, 0.1)',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(168, 85, 247, 0.15) 100%)',
                  animation: 'morph 8s ease-in-out infinite alternate'
                }}
              >
                {/* Dark gradient overlay to blend photo's light background into dark theme */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at 50% 25%, transparent 40%, rgba(10, 11, 16, 0.85) 100%)',
                  zIndex: 1,
                  pointerEvents: 'none'
                }} />
                <img 
                  src={profileImg} 
                  alt="Ahmad Nafees Profile" 
                  className="img-fluid w-100 h-100"
                  style={{ 
                    transform: 'scale(1.2)',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'contrast(1.1) brightness(0.88) saturate(0.85)',
                  }}
                />
                {/* Subtle theme color tint overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.06) 100%)',
                  zIndex: 2,
                  pointerEvents: 'none'
                }} />
              </div>

              {/* FLOATING TECH ICONS */}
              {/* React Icon */}
              <motion.div
                className="position-absolute glass-panel d-flex align-items-center justify-content-center floating-icon-slow"
                style={{ 
                  width: '60px', height: '60px', 
                  borderRadius: '15px', 
                  top: '10%', left: '-5%',
                  color: '#61dafb', fontSize: '1.8rem',
                  background: 'rgba(97, 218, 251, 0.08)',
                  border: '1px solid rgba(97, 218, 251, 0.2)'
                }}
                animate={{ y: [0, -12, 0] }}
                transition={floatTransition(4)}
              >
                <FaReact />
              </motion.div>

              {/* JS Icon */}
              <motion.div
                className="position-absolute glass-panel d-flex align-items-center justify-content-center floating-icon"
                style={{ 
                  width: '55px', height: '55px', 
                  borderRadius: '15px', 
                  bottom: '15%', left: '0%',
                  color: '#f7df1e', fontSize: '1.6rem',
                  background: 'rgba(247, 223, 30, 0.08)',
                  border: '1px solid rgba(247, 223, 30, 0.2)'
                }}
                animate={{ y: [0, 15, 0] }}
                transition={floatTransition(5.2)}
              >
                <FaJs />
              </motion.div>

              {/* Bootstrap Icon */}
              <motion.div
                className="position-absolute glass-panel d-flex align-items-center justify-content-center floating-icon-fast"
                style={{ 
                  width: '60px', height: '60px', 
                  borderRadius: '15px', 
                  top: '0%', right: '0%',
                  color: '#7952b3', fontSize: '1.8rem',
                  background: 'rgba(121, 82, 179, 0.08)',
                  border: '1px solid rgba(121, 82, 179, 0.2)'
                }}
                animate={{ y: [0, -18, 0] }}
                transition={floatTransition(3.6)}
              >
                <BsBootstrap />
              </motion.div>

              {/* HTML5 Icon */}
              <motion.div
                className="position-absolute glass-panel d-flex align-items-center justify-content-center floating-icon-slow"
                style={{ 
                  width: '50px', height: '50px', 
                  borderRadius: '12px', 
                  bottom: '8%', right: '-5%',
                  color: '#e34f26', fontSize: '1.5rem',
                  background: 'rgba(227, 79, 38, 0.08)',
                  border: '1px solid rgba(227, 79, 38, 0.2)'
                }}
                animate={{ y: [0, 10, 0] }}
                transition={floatTransition(4.5)}
              >
                <FaHtml5 />
              </motion.div>

              {/* CSS3 Icon */}
              <motion.div
                className="position-absolute glass-panel d-flex align-items-center justify-content-center floating-icon"
                style={{ 
                  width: '52px', height: '52px', 
                  borderRadius: '12px', 
                  top: '50%', right: '-15%',
                  color: '#1572b6', fontSize: '1.5rem',
                  background: 'rgba(21, 114, 182, 0.08)',
                  border: '1px solid rgba(21, 114, 182, 0.2)'
                }}
                animate={{ y: [0, -14, 0] }}
                transition={floatTransition(4.8)}
              >
                <FaCss3Alt />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      
      {/* Morph animation styling inline to avoid CSS parser issues */}
      <style>{`
        @keyframes morph {
          0% { border-radius: 50% 30% 70% 30% / 50% 60% 40% 50%; }
          100% { border-radius: 30% 60% 40% 70% / 60% 40% 60% 40%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
