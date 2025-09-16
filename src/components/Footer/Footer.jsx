// src/components/Footer/Footer.jsx

import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'; // Import new icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-mediaa">
          {/* Call link */}
          <a href="tel:9386161755" aria-label="Call Us">
            <FaPhoneAlt />
          </a>
          {/* WhatsApp link */}
          <a href="https://wa.me/9386161755" aria-label="Chat on WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Shirdi Sai Taxcon. All Rights Reserved.</p>
        <p className="design-credit">Designed and Developed with expertise.</p>
      </div>
    </footer>
  );
};

export default Footer;