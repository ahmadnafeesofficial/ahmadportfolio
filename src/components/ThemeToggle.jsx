import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="glass-panel d-flex align-items-center justify-content-center border-0"
      style={{
        width: '42px',
        height: '42px',
        borderRadius: '12px',
        color: 'var(--text-primary)',
        cursor: 'pointer',
        fontSize: '1.2rem',
        outline: 'none',
        background: 'var(--glass-bg)',
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        style={{ display: 'flex' }}
      >
        {theme === 'dark' ? (
          <FiSun className="text-warning" />
        ) : (
          <FiMoon style={{ color: 'var(--primary)' }} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
