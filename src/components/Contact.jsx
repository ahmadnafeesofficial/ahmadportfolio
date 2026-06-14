import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Read keys from import.meta.env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback: open mailto link so message actually gets sent
      const mailtoSubject = encodeURIComponent(formData.subject);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.open(
        `mailto:ahmadnafeesofficial11@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`,
        '_blank'
      );
      setTimeout(() => {
        setLoading(false);
        setStatus({
          type: 'success',
          message: 'Your email client has been opened. Please send the message from there!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setValidated(false);
      }, 1000);
      return;
    }

    // Real EmailJS Send — variables match the default template: {{name}}, {{time}}, {{message}}
    const templateParams = {
      name: formData.name,
      time: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
      message: `Email: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        setLoading(false);
        setStatus({
          type: 'success',
          message: 'Your message has been sent successfully! Ahmad will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setValidated(false);
      }, (error) => {
        setLoading(false);
        setStatus({
          type: 'danger',
          message: `Oops! Failed to send message: ${error.text || 'Something went wrong.'}`
        });
      });
  };

  return (
    <section id="contact" className="py-5 position-relative overflow-hidden">
      <div className="ambient-glow ambient-glow-cyan" style={{ bottom: '10%', right: '5%' }}></div>
      <div className="ambient-glow" style={{ top: '25%', left: '5%' }}></div>

      <Container className="py-5" ref={ref}>
        <Row className="mb-5 justify-content-center text-center">
          <Col lg={8}>
            <motion.h2
              className="display-5 fw-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Get In <span className="text-gradient">Touch</span>
            </motion.h2>
            <motion.div
              className="mx-auto mb-4"
              style={{ width: '60px', height: '4px', background: 'var(--grad-primary)', borderRadius: '2px' }}
              initial={{ width: 0 }}
              animate={inView ? { width: '60px' } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="lead text-secondary">
              Have a project in mind, an internship opportunity, or want to say hello?
              Drop a message using the form below!
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          {/* Contact Information Side */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="d-flex flex-column gap-4 h-100 justify-content-between"
            >
              <div className="glass-card flex-grow-1 d-flex flex-column justify-content-center py-5">
                <h3 className="h4 fw-bold mb-4 text-gradient">Contact Information</h3>

                <div className="d-flex flex-column gap-4">
                  {/* Email */}
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center text-gradient-cyan"
                      style={{
                        width: '46px', height: '46px', borderRadius: '12px',
                        background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.2)',
                        fontSize: '1.2rem', flexShrink: 0
                      }}
                    >
                      <FiMail />
                    </div>
                    <div>
                      <h4 className="h6 text-muted mb-1">Email Me</h4>
                      <a href="mailto:ahmadnafeesofficial11@gmail.com" className="fw-semibold text-gradient-cyan">
                        ahmadnafeesofficial11@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center text-gradient-purple"
                      style={{
                        width: '46px', height: '46px', borderRadius: '12px',
                        background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.2)',
                        fontSize: '1.2rem', flexShrink: 0
                      }}
                    >
                      <FiMapPin />
                    </div>
                    <div>
                      <h4 className="h6 text-muted mb-1">Location</h4>
                      <span className="fw-semibold text-gradient-purple">Lahore, Pakistan</span>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center text-gradient-cyan"
                      style={{
                        width: '46px', height: '46px', borderRadius: '12px',
                        background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.2)',
                        fontSize: '1.2rem', flexShrink: 0
                      }}
                    >
                      <FiLinkedin />
                    </div>
                    <div>
                      <h4 className="h6 text-muted mb-1">LinkedIn</h4>
                      <a href="https://linkedin.com/in/ahmadnafees" target="_blank" rel="noopener noreferrer" className="fw-semibold text-gradient-cyan">
                        linkedin.com/in/ahmadnafees
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center text-gradient-purple"
                      style={{
                        width: '46px', height: '46px', borderRadius: '12px',
                        background: 'rgba(168, 85, 247, 0.08)', border: '1px solid rgba(168, 85, 247, 0.2)',
                        fontSize: '1.2rem', flexShrink: 0
                      }}
                    >
                      <FiGithub />
                    </div>
                    <div>
                      <h4 className="h6 text-muted mb-1">GitHub</h4>
                      <a href="https://github.com/ahmadnafees" target="_blank" rel="noopener noreferrer" className="fw-semibold text-gradient-purple">
                        github.com/ahmadnafees
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Contact Form Side */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card"
            >
              <h3 className="h4 fw-bold mb-4 text-gradient">Send a Message</h3>

              {status.message && (
                <Alert variant={status.type} className="glass-panel border-0 mb-4 text-white" style={{ background: status.type === 'success' ? 'rgba(40, 167, 69, 0.25)' : 'rgba(220, 53, 69, 0.25)' }}>
                  {status.message}
                </Alert>
              )}

              <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <Form.Group controlId="formName">
                  <Form.Label className="fw-semibold text-muted" style={{ fontSize: '0.85rem' }}>Your Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="glass-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label className="fw-semibold text-muted" style={{ fontSize: '0.85rem' }}>Your Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="glass-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formSubject">
                  <Form.Label className="fw-semibold text-muted" style={{ fontSize: '0.85rem' }}>Subject</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry, Internship, etc."
                    className="glass-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a subject.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label className="fw-semibold text-muted" style={{ fontSize: '0.85rem' }}>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Ahmad, I would love to talk about..."
                    className="glass-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please write your message details.
                  </Form.Control.Feedback>
                </Form.Group>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-premium mt-3 d-flex align-items-center justify-content-center gap-2 py-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" role="status" />
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
