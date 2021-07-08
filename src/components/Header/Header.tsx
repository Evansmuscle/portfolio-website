import './Header.css';
import React from 'react';

const Header = () => {
  return (
    <header className="header-wrapper">
      <ul className="header-list">
        <li className="header-list-item header-list-item-first">Home</li>
        <li className="header-list-item">About</li>
        <li className="header-list-item">Tech Stack</li>
        <li className="header-list-item">Contact me</li>
        <li className="header-list-item">Footer</li>
      </ul>
    </header>
  );
};

export default Header;
