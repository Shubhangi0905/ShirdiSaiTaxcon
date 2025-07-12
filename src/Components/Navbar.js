import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="logo">Shirdi Sai Taxcon</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
            {darkMode ? '🌞' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
