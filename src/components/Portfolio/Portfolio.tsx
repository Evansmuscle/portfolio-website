import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';

const Portfolio = () => {
  return (
    <motion.div
      initial={{ translateX: 1000 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 1000 }}
      transition={{ type: 'spring', duration: 1 }}
    >
      <div className="portfolio-container">
        <Header />
      </div>
    </motion.div>
  );
};

export default Portfolio;
