// src/components/FreeAdviceForm/FreeAdviceForm.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Typography, Box } from '@mui/material';
import './FreeAdviceForm.css';

const FreeAdviceForm = ({ onClose }) => {
  const form = useRef();
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace with your actual Email.js credentials
    const serviceId = 'service_kkgujc7';
    const templateId = 'template_urr8caw';
    const publicKey = 'TeQnAPnpYyWVILMsS';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  return (
    <Box className="form-container">
      <Typography variant="h5" component="h2" gutterBottom>
        Get Free Advice
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Fill out the form below and we'll get back to you with expert advice.
      </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          fullWidth
          label="Your Name"
          name="user_name"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Your Email"
          name="user_email"
          type="email"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Your Query"
          name="user_message"
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={status === 'sending'}
          sx={{ mt: 2 }}
        >
          {status === 'sending' ? 'Sending...' : 'Send'}
        </Button>
      </form>
      {status === 'success' && (
        <Typography color="success.main" sx={{ mt: 2 }}>
          Your query has been sent successfully!
        </Typography>
      )}
      {status === 'error' && (
        <Typography color="error.main" sx={{ mt: 2 }}>
          Failed to send your query. Please try again later.
        </Typography>
      )}
      <Button onClick={onClose} sx={{ mt: 2 }}>
        Close
      </Button>
    </Box>
  );
};

export default FreeAdviceForm;