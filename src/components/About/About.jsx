// src/components/About/About.jsx
import React from 'react';
import { Typography } from '@mui/material';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <Typography variant="h3" component="h2" className="section-title">
        Why Choose Shirdi Sai Taxcon?
      </Typography>
      <div className="about-content">
        <Typography variant="body1" paragraph>
          At **Shirdi Sai Taxcon**, we are committed to providing expert, reliable, and personalized tax and financial consulting services. With years of experience and a deep understanding of tax regulations, we help both individuals and businesses navigate the complexities of financial compliance with ease.
        </Typography>
        <Typography variant="body1" paragraph>
          Our founder, **Mr. C. Shekhar (Manoj Kumar), CWA(I)**, leads a team dedicated to excellence and client success. We pride ourselves on our meticulous approach and our commitment to building long-lasting relationships based on trust and integrity.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether it's filing your income tax returns, managing GST compliance, or seeking professional advice on company registration, we are your trusted partner every step of the way.
        </Typography>
      </div>
    </div>
  );
};

export default About;