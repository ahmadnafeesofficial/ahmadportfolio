import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader-wrapper"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        >
          <div className="position-relative d-flex justify-content-center align-items-center">
            {/* Spinning Loader Ring */}
            <motion.div
              className="loader-spinner"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            />
            {/* Pulsing Logo Text */}
            <motion.div
              className="loader-logo text-gradient"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              AN.
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
