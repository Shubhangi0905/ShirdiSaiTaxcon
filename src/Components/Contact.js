import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      form.current,
      'your_public_key'
    )
    .then((result) => {
      alert("Message sent successfully!");
      form.current.reset();
    }, (error) => {
      alert("Failed to send. Try again later.");
    });
  };

  return (
    <section id="contact" data-aos="fade-up" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2>Contact Us</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ maxWidth: "400px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" style={{ padding: "10px", background: "#1d3557", color: "#fff", border: "none", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
