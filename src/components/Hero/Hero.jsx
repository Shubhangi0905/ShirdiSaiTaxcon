// src/components/Hero/Hero.jsx
import React, { useState } from 'react';
import { Button, Typography, Modal, Box } from '@mui/material';
import FreeAdviceForm from '../FreeAdviceForm/FreeAdviceForm'; // We'll create this component next
import './Hero.css';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'; // Import new icons


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

const Hero = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <Typography variant="h2" component="h1" className="hero-headline">
          Your Trusted Partner for Financial & Tax Excellence.
        </Typography>
        <Typography variant="h5" component="p" className="hero-subheadline">
          Expert Solutions for Individuals & Businesses. Free Tax Advice Anytime.
        </Typography>
        <Button variant="contained" className="hero-cta-button" onClick={handleOpen}>
          Get Free Advice
        </Button>
        <div className="social-media">
                  {/* Call link */}
                  <a href="tel:9386161755" aria-label="Call Us">
                    <FaPhoneAlt />
                  </a>
                  {/* WhatsApp link */}
                  <a href="https://wa.me/9386161755" aria-label="Chat on WhatsApp">
                    <FaWhatsapp />
                  </a>
                </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FreeAdviceForm onClose={handleClose} />
        </Box>
      </Modal>
    </section>
  );
};

export default Hero;