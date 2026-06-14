import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiGrid, FiActivity, FiTv, FiDatabase } from 'react-icons/fi';

const timelineSteps = [
  {
    icon: <FiCode />,
    title: 'Started HTML & CSS',
    subtitle: 'Foundation of Development',
    description: 'Began the frontend journey by learning basic web structure, styling, positioning systems, layouts, responsive design, and CSS variables.',
    year: 'Phase 1'
  },
  {
    icon: <FiGrid />,
    title: 'Mastered Bootstrap CSS Framework',
    subtitle: 'Rapid Prototyping & Grid Systems',
    description: 'Expanded layout expertise by learning the Bootstrap grid, responsive utilities, and pre-built components to speed up production workflows.',
    year: 'Phase 2'
  },
  {
    icon: <FiActivity />,
    title: 'Built Core React Projects',
    subtitle: 'State Management & Virtual DOM',
    description: 'Dived deep into component-based architecture in React.js. Focused on state hooks, standard routing, custom styling, and side effects.',
    year: 'Phase 3'
  },
  {
    icon: <FiTv />,
    title: 'Developed Flicker Movie App',
    subtitle: 'Third-party API Integrations',
    description: 'Built a multi-featured movie catalog searching platform leveraging movie APIs, custom filters, pagination, and persistent state storage.',
    year: 'Phase 4'
  },
  {
    icon: <FiDatabase />,
    title: 'Learning Full-stack Development',
    subtitle: 'Node.js, MongoDB & Express',
    description: 'Currently building backend fundamentals to bridge data pipelines, database APIs, servers, routing, and user authorizations.',
    year: 'Ongoing'
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariantsLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  const cardVariantsRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section id="experience" className="py-5 position-relative overflow-hidden">
      <div className="ambient-glow" style={{ bottom: '20%', right: '5%' }}></div>

      <Container className="py-5" ref={ref}>
        <Row className="mb-5 justify-content-center text-center">
          <Col lg={8}>
            <motion.h2 
              className="display-5 fw-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Development <span className="text-gradient">Journey</span>
            </motion.h2>
            <motion.div 
              className="mx-auto mb-4" 
              style={{ width: '60px', height: '4px', background: 'var(--grad-primary)', borderRadius: '2px' }}
              initial={{ width: 0 }}
              animate={inView ? { width: '60px' } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="lead text-secondary">
              A chronological overview of my progression, starting from raw web layouts
              to advanced component engineering and current full-stack studies.
            </p>
          </Col>
        </Row>

        <div className="timeline">
          {timelineSteps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`timeline-container ${isLeft ? 'left' : 'right'}`}
              >
                <motion.div
                  variants={isLeft ? cardVariantsLeft : cardVariantsRight}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: idx * 0.15 }}
                >
                  <div className="glass-card">
                    <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                      <span className="badge text-gradient fw-bold glass-panel px-3 py-1" style={{ fontSize: '0.85rem' }}>
                        {step.year}
                      </span>
                      <div 
                        className="d-flex align-items-center justify-content-center text-gradient-cyan"
                        style={{ 
                          width: '40px', 
                          height: '40px', 
                          borderRadius: '10px', 
                          background: 'rgba(6, 182, 212, 0.08)', 
                          border: '1px solid rgba(6, 182, 212, 0.2)',
                          fontSize: '1.2rem'
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="h5 fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                    <h4 className="h6 fw-semibold text-secondary mb-3" style={{ fontSize: '0.88rem' }}>{step.subtitle}</h4>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
