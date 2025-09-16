// src/components/Header/Header.jsx

import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="fixed" className="header">
      <Toolbar className="header-toolbar">
        <div className="left-side-container">
            
            <Typography variant="h6" className="company-name">
              SHIRDI SAI TAXCON
            </Typography>
          <nav className="main-nav">
            <Link to="/" className="nav-link">Home</Link>
            <a href="/#services-section" className="nav-link">Services</a>
            <a href="/#clients-section" className="nav-link">Clients</a>
            <a href="/#about-section" className="nav-link">About Us</a>
            <a href="/#faq-section" className="nav-link">FAQ</a>
            <Link to="/tax-calculator" className="nav-link">Tax Calculator</Link>
            <a href="tel:9386161755" className="nav-link">Call Us</a>

          </nav>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;