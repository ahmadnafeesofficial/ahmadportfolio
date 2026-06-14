import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const frontendSkills = [
  { name: 'React.js', level: 90 },
  { name: 'JavaScript ES6+', level: 85 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'Bootstrap 5', level: 92 },
  { name: 'Responsive Design', level: 95 },
  { name: 'React Router', level: 85 },
  { name: 'REST APIs', level: 80 },
];

const learningSkills = [
  { name: 'Node.js', level: 50 },
  { name: 'Express.js', level: 45 },
  { name: 'MongoDB', level: 40 },
  { name: 'Backend Development', level: 45 },
  { name: 'Authentication & Authorization', level: 35 },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-5 position-relative overflow-hidden">
      <div className="ambient-glow ambient-glow-cyan" style={{ bottom: '10%', left: '5%' }}></div>

      <Container className="py-5" ref={ref}>
        <Row className="mb-5 justify-content-center text-center">
          <Col lg={8}>
            <motion.h2 
              className="display-5 fw-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              My <span className="text-gradient">Skills</span>
            </motion.h2>
            <motion.div 
              className="mx-auto mb-4" 
              style={{ width: '60px', height: '4px', background: 'var(--grad-primary)', borderRadius: '2px' }}
              initial={{ width: 0 }}
              animate={inView ? { width: '60px' } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="lead text-secondary">
              A comprehensive showcase of technical tools, libraries, and frameworks I specialize in,
              along with technologies I am actively learning.
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          {/* Frontend Column */}
          <Col lg={6}>
            <motion.div 
              className="glass-card h-100"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="h4 fw-bold mb-4 text-gradient-cyan">Frontend Development</h3>
              <div className="d-flex flex-column gap-4">
                {frontendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-semibold" style={{ fontSize: '0.95rem' }}>{skill.name}</span>
                      <span className="text-muted fw-bold" style={{ fontSize: '0.85rem' }}>{skill.level}%</span>
                    </div>
                    <div className="skill-progress-bar-wrapper">
                      <motion.div 
                        className="skill-progress-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.1 * index, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Currently Learning Column */}
          <Col lg={6}>
            <motion.div 
              className="glass-card h-100"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="h4 fw-bold mb-4 text-gradient-purple">Currently Learning</h3>
              <div className="d-flex flex-column gap-4">
                {learningSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-semibold" style={{ fontSize: '0.95rem' }}>{skill.name}</span>
                      <span className="text-muted fw-bold" style={{ fontSize: '0.85rem' }}>{skill.level}%</span>
                    </div>
                    <div className="skill-progress-bar-wrapper">
                      <motion.div 
                        className="skill-progress-bar-fill cyan"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.1 * index, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
