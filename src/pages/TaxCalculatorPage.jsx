// src/pages/TaxCalculatorPage.jsx

import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TaxCalculator from '../components/TaxCalculator/TaxCalculator';
import '../App.css'; // Use the main App styles

const TaxCalculatorPage = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="section-padding">
          <TaxCalculator />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TaxCalculatorPage;