// src/components/Contact/Contact.jsx

import React from 'react';
import { Typography, Grid, Box } from '@mui/material'; // Removed Paper
import { LocationOn, Phone, Email } from '@mui/icons-material';
import './ContactUs.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <Typography variant="h3" component="h2" className="section-title">
        Get in Touch
      </Typography>
      {/* Removed Paper component for the main card, now using a div with custom background */}
      <div className="contact-details-and-map-wrapper"> 
        <Box p={4}>
          <Grid container spacing={4} alignItems="center"> {/* Added alignItems="center" for vertical alignment */}
            <Grid item xs={12} md={6}> {/* Contact details on the left */}
              <Typography variant="h5" component="h3" gutterBottom>
                Our Details
              </Typography>
              <Typography variant="body1" className="contact-person-name">
                Chandra Shekhar (Manoj Kumar), CWA(I)
              </Typography>
              <div className="contact-info-item">
                <LocationOn className="contact-icon" />
                <div className="contact-info-text">
                  <Typography variant="subtitle1" className="info-title">Head Office</Typography>
                  <Typography variant="body2">
                    Harisabha Chowk, Near Chemist Box Medicine, Devi Mandir Road, Muzaffarpur – 842002
                  </Typography>
                </div>
              </div>
              <div className="contact-info-item">
                <Phone className="contact-icon" />
                <Typography variant="body1">
                  9431879250 | 9386161755
                </Typography>
              </div>
              <div className="contact-info-item">
                <Email className="contact-icon" />
                <Typography variant="body1">
                  office9386161755@gmail.com
                </Typography>
              </div>
            </Grid>
             <Grid item xs={12} md={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.43746075791!2d85.39004977398554!3d26.117275793823744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10fbc45049c7%3A0xfe4e7c9daa89ebb!2sBIBA!5e0!3m2!1sen!2sin!4v1758049657519!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="contact-map"
              ></iframe>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Contact;