import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiMonitor, FiLayers, FiEye, FiZap } from 'react-icons/fi';

const servicesList = [
  {
    icon: <FiCode />,
    title: 'Frontend Web Development',
    description: 'Developing high-fidelity web structures using semantic HTML, modular CSS architectures, and standard JavaScript APIs.'
  },
  {
    icon: <FiMonitor />,
    title: 'Responsive Website Design',
    description: 'Ensuring fluid layouts that automatically scale down and look premium on mobile devices, tablets, and huge widescreen monitors.'
  },
  {
    icon: <FiLayers />,
    title: 'React Application Development',
    description: 'Building component-driven scalable single-page apps using React.js, hooks state management, and optimized virtual DOM rendering.'
  },
  {
    icon: <FiEye />,
    title: 'UI / UX Implementation',
    description: 'Translating Figma mockups and high-fidelity wireframes into interactive pixel-perfect browser screens with micro-interactions.'
  },
  {
    icon: <FiZap />,
    title: 'Website Optimization',
    description: 'Improving site speed, search engine crawls (SEO), assets lazyloading, and reducing build sizes for blazing-fast page loads.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 80, 
        damping: 12 
      } 
    }
  };

  return (
    <section id="services" className="py-5 position-relative overflow-hidden">
      <div className="ambient-glow ambient-glow-cyan" style={{ top: '20%', left: '5%' }}></div>

      <Container className="py-5" ref={ref}>
        <Row className="mb-5 justify-content-center text-center">
          <Col lg={8}>
            <motion.h2 
              className="display-5 fw-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              What I <span className="text-gradient">Do</span>
            </motion.h2>
            <motion.div 
              className="mx-auto mb-4" 
              style={{ width: '60px', height: '4px', background: 'var(--grad-primary)', borderRadius: '2px' }}
              initial={{ width: 0 }}
              animate={inView ? { width: '60px' } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="lead text-secondary">
              Providing modern engineering solutions, responsive designs, and site tuning
              to craft highly engaging digital web products.
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {servicesList.map((service, idx) => (
            <Col md={6} lg={4} key={idx} className="d-flex align-items-stretch">
              <motion.div
                className="glass-card w-100 d-flex flex-column"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: idx * 0.1 }}
              >
                <div 
                  className="d-flex align-items-center justify-content-center mb-4 text-gradient-purple"
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '12px', 
                    background: 'rgba(168, 85, 247, 0.08)', 
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    fontSize: '1.5rem'
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="h5 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>{service.title}</h3>
                <p className="text-secondary mb-0" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
