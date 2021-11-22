import './Greeting.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Greeting = () => {
  return (
    <motion.div
      initial={{ translateX: 0 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: -2000 }}
      transition={{ type: 'spring', duration: 1 }}
    >
      <div className="greeting-wrapper">
        <h1>Hello, my name is Kaan.</h1>
        <p className="subtitle">
          Welcome to my website!{' '}
          <Link to="/portfolio" className="to-website-button">
            &rarr;
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Greeting;
