import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';

const statsData = [
  { target: 15, suffix: '+', label: 'Projects Completed' },
  { target: 12, suffix: '+', label: 'Technologies Learned' },
  { target: 5, suffix: '+', label: 'Happy Clients' },
  { target: 1200, suffix: '+', label: 'Hours of Coding' }
];

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    // Calculate increment and interval
    const totalMiliseconds = duration;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 1);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  // For high numbers (like hours of coding), increment in larger steps to prevent slow lags
  const highCounterRef = useRef(null);
  const highInView = useInView(highCounterRef, { once: true, margin: '-50px' });
  const [highCount, setHighCount] = useState(0);

  useEffect(() => {
    if (!highInView || target < 100) return;

    let start = 0;
    const end = parseInt(target);
    const steps = 50;
    const stepValue = Math.ceil(end / steps);
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setHighCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [highInView, target, duration]);

  if (target >= 100) {
    return <span ref={highCounterRef}>{highCount}</span>;
  }

  return <span ref={ref}>{count}</span>;
};

const Statistics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="statistics" className="py-5 position-relative overflow-hidden" ref={ref}>
      <div className="ambient-glow" style={{ top: '10%', right: '20%' }}></div>
      
      <Container className="py-5">
        <Row className="g-4">
          {statsData.map((stat, idx) => (
            <Col key={idx} xs={6} md={3}>
              <motion.div
                className="glass-card text-center h-100 d-flex flex-column justify-content-center py-5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="stat-number mb-2">
                  <Counter target={stat.target} />{stat.suffix}
                </div>
                <h3 className="h6 text-secondary fw-semibold mb-0" style={{ letterSpacing: '0.5px' }}>
                  {stat.label}
                </h3>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Statistics;
