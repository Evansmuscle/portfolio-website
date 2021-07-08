import './Greeting.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => {
  return (
    <React.Fragment>
      <h1>Hello, my name is Kaan.</h1>
      <p className="subtitle">
        Welcome to my website!{' '}
        <Link to="/portfolio" className="to-website-button">
          &rarr;
        </Link>
      </p>
    </React.Fragment>
  );
};

export default Greeting;
