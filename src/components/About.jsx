import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiCpu, FiUsers, FiTrendingUp } from 'react-icons/fi';

const highlights = [
  {
    icon: <FiBookOpen />,
    title: 'Years of Learning',
    description: 'Dedicated focus on learning frontend development standards, design systems, and modern workflows.'
  },
  {
    icon: <FiCpu />,
    title: 'Problem-Solving Mindset',
    description: 'Approaching bugs and project requirements with structural logic and deep analytical debugging.'
  },
  {
    icon: <FiUsers />,
    title: 'Team Collaboration',
    description: 'Thrives in collaborative environments, communicating ideas clearly and working with git workflows.'
  },
  {
    icon: <FiTrendingUp />,
    title: 'Continuous Learning',
    description: 'Always curious. Transitioning to full-stack by learning backend tech like Node.js and MongoDB.'
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="about" className="py-5 position-relative overflow-hidden">
      <div className="ambient-glow" style={{ top: '40%', right: '5%' }}></div>
      
      <Container className="py-5" ref={ref}>
        <Row className="mb-5 justify-content-center text-center">
          <Col lg={8}>
            <motion.h2 
              className="display-5 fw-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div 
              className="mx-auto mb-4" 
              style={{ width: '60px', height: '4px', background: 'var(--grad-primary)', borderRadius: '2px' }}
              initial={{ width: 0 }}
              animate={inView ? { width: '60px' } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p 
              className="lead text-secondary"
              style={{ fontSize: '1.1rem', lineHeight: '1.7' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I'm Ahmad Nafees, a passionate Frontend Developer with expertise in React.js and Bootstrap. 
              I enjoy transforming ideas into responsive and interactive web applications. My focus is 
              writing clean, maintainable code and delivering exceptional user experiences. Currently, 
              I am in the learning phase of backend development to become a full-stack developer.
            </motion.p>
          </Col>
        </Row>

        <Row className="g-4">
          {highlights.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                className="glass-card h-100 d-flex flex-column"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.1 * index }}
              >
                <div 
                  className="d-flex align-items-center justify-content-center mb-4 text-gradient-cyan"
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '12px', 
                    background: 'rgba(6, 182, 212, 0.08)', 
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    fontSize: '1.5rem'
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-secondary mb-0" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
