import React from 'react';
import { motion } from 'framer-motion';

import Header from '../Header';
import Home from '../Home';

const Portfolio = () => {
  return (
    <motion.div
      initial={{ translateX: 3000 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 3000 }}
      transition={{ type: 'spring', duration: 1 }}
    >
      <div className="portfolio-container">
        <Header />
        <Home />
      </div>
    </motion.div>
  );
};

export default Portfolio;
