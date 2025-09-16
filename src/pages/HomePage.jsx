// src/pages/HomePage.jsx

import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Clients from '../components/Clients/Clients';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import ContactUs from '../components/ContactUs/ContactUs';
import '../App.css';

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <section id="services-section" className="section-padding">
          <Services />
        </section>
        <section id="clients-section" className="section-padding">
          <Clients />
        </section>
        <section id="about-section" className="section-padding">
          <About />
        </section>
        <section id="contact-section" className="section-padding">
          <Contact />
        </section>
        <section id="contact-section" className="section-padding">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;