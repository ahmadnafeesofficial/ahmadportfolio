import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import flickerImg from '../assets/flickerImg.png';
import dashboardImg from '../assets/dashboardImg.png';

const projectsData = [
  {
    id: 1,
    title: 'Minimalist Portfolio Template',
    category: 'Bootstrap',
    image: flickerImg,
    description: 'A premium, ultra-fast and accessible landing page layout designed specifically for frontend engineers.',
    features: ['Accessible Markup', 'Resposive ', 'APIs Handling'],
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', ' React'],
    demo: 'https://flicker-tau.vercel.app/',
    github: '#'
  },
  {
    id: 2,
    title: 'Code Z ',
    category: 'JavaScript',
    image: dashboardImg,
    description: 'Code Z is a digital solution providing agency working with a collabration with me .',
    features: ['Theme Toggle Switcher', 'Resposive ', 'team collabration'],
    tags: ['JavaScript ES6+', 'CSS ', 'HTML5', "React"],
    demo: 'https://www.codez.live/',
    github: '#'
  }
];

const categories = ['All', 'Bootstrap', 'JavaScript'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  };

  return (
    <section id="projects" className="py-5 position-relative overflow-hidden">
      <div className="ambient-glow" style={{ top: '30%', left: '10%' }}></div>

      <Container className="py-5" ref={ref}>
        <Row className="mb-5 justify-content-center text-center">
          <Col lg={8}>
            <motion.h2
              className="display-5 fw-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.div
              className="mx-auto mb-4"
              style={{ width: '60px', height: '4px', background: 'var(--grad-primary)', borderRadius: '2px' }}
              initial={{ width: 0 }}
              animate={inView ? { width: '60px' } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="lead text-secondary">
              A curated list of applications I've developed, showing React integrations,
              responsive web layout creation, and clean code principles.
            </p>
          </Col>
        </Row>

        {/* Filters */}
        <Row className="mb-5 justify-content-center">
          <Col md={8} className="d-flex flex-wrap justify-content-center gap-3">
            {categories.map((cat, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`glass-panel border-0 px-4 py-2 fw-semibold rounded-pill ${activeFilter === cat ? 'text-gradient' : ''}`}
                style={{
                  background: activeFilter === cat ? 'var(--glass-bg)' : 'rgba(255, 255, 255, 0.02)',
                  color: activeFilter === cat ? 'var(--primary)' : 'var(--text-secondary)',
                  border: activeFilter === cat ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                  cursor: 'pointer',
                  fontSize: '0.92rem'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </Col>
        </Row>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Row className="g-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <Col lg={6} key={project.id} className="d-flex align-items-stretch">
                  <motion.div
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="glass-card w-100 d-flex flex-column p-0 overflow-hidden"
                  >
                    {/* Project Image Wrapper */}
                    <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-100 h-100 object-fit-cover transition-all"
                        style={{ transition: 'transform 0.5s ease' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                      />
                      <div className="position-absolute top-3 end-3">
                        <Badge bg="dark" className="glass-panel border-1 border-white-10 text-white px-3 py-2">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                        {project.title}
                      </h3>
                      <p className="text-secondary mb-4" style={{ fontSize: '0.94rem', lineHeight: '1.6' }}>
                        {project.description}
                      </p>

                      {/* Features bullets */}
                      {project.features && (
                        <div className="mb-4">
                          <h4 className="h6 fw-bold text-gradient-cyan mb-2">Key Features:</h4>
                          <ul className="mb-0 text-muted ps-3" style={{ fontSize: '0.88rem', listStyleType: 'square', color: "white" }}>
                            {project.features.map((feature, fIdx) => (
                              <li key={fIdx} className="mb-1">{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="d-flex flex-wrap gap-2 mb-4 mt-auto">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="glass-panel px-2 py-1 text-secondary"
                            style={{ fontSize: '0.78rem', borderRadius: '6px', background: 'rgba(255,255,255,0.02)' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="d-flex gap-3">
                        <motion.a

                          className="btn-premium py-2 px-3 flex-grow-1 text-center d-flex align-items-center justify-content-center gap-2"
                          style={{ borderRadius: '10px', fontSize: '0.9rem' }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <FiExternalLink /> Live Demo
                        </motion.a>
                        <motion.a
                          href={project.github}
                          className="btn-premium-outline py-2 px-3 flex-grow-1 text-center d-flex align-items-center justify-content-center gap-2"
                          style={{ borderRadius: '10px', fontSize: '0.9rem' }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={(e) => { e.preventDefault(); alert(`Redirecting to Github Repository for: ${project.title}`); }}
                        >
                          <FiGithub /> Repository
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
