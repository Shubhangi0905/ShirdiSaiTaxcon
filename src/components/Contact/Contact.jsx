import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Contact.css';

const faqs = [
  {
    question: "What is Income Tax Return (ITR) filing and why is it important?",
    answer: "ITR filing is the process of declaring your income to the Income Tax Department. It is crucial for financial transparency, helps you claim refunds on excess tax paid, and is often required for loan applications and visa processing."
  },
  {
    question: "What documents are required for ITR filing?",
    answer: "Common documents include Form-16 (for salaried individuals), bank statements, investment proofs (e.g., PPF, ELSS), Aadhaar Card, PAN Card, and details of any other income sources."
  },
  {
    question: "What is GST and who needs to register for it?",
    answer: "Goods and Services Tax (GST) is a comprehensive indirect tax on the supply of goods and services. Businesses with an annual turnover exceeding a certain threshold (currently ₹40 Lakhs for goods and ₹20 Lakhs for services in most states) are required to register for GST."
  },
  {
    question: "What is the difference between GST registration and GST audit?",
    answer: "GST registration is the process of obtaining a unique GSTIN to operate as a compliant taxpayer. A GST audit, on the other hand, is a verification process conducted by tax authorities to ensure the accuracy of a business's GST records and returns."
  },
  {
    question: "Can I file my GST return without professional help?",
    answer: "While it is possible, professional help is highly recommended. GST laws are complex and change frequently. A tax consultant can help you ensure accuracy, avoid penalties, and optimize your tax liabilities."
  },
  {
    question: "What happens if I miss the ITR or GST filing deadline?",
    answer: "Missing a deadline can lead to penalties and interest charges. For ITR, a late fee may be levied. For GST, you may have to pay interest on the tax due and face penalties. Timely filing is essential to maintain compliance."
  }
];

const FAQ = () => {
  return (
    <div className="faq-container">
      <Typography variant="h3" component="h2" className="section-title">
        Frequently Asked Questions
      </Typography>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <Accordion key={index} className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expand-icon" />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6" className="faq-question">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className="faq-answer">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;