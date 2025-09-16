// src/components/Services/Services.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Description, Gavel, AccountBalance, AccountTree, BarChart, Business, AttachMoney, People } from '@mui/icons-material';
import './Services.css';

const services = [
  { name: 'Income Tax Return Filing', icon: <Description /> },
  { name: 'GST Registration & Audit', icon: <Gavel /> },
  { name: 'Balance Sheet / Profit & Loss', icon: <AccountBalance /> },
  { name: 'E-TDS Return (Qtr.)', icon: <AccountTree /> },
  { name: 'Utilization Certificate', icon: <BarChart /> },
  { name: 'Audit Report', icon: <Business /> },
  { name: 'Calculation of 89(1) & 10 E', icon: <AttachMoney /> },
  { name: 'Company Registration', icon: <People /> },
];

const Services = () => {
  return (
    <div className="services-container">
      <Typography variant="h3" component="h2" className="section-title">
        Comprehensive Tax & Financial Services
      </Typography>
      <div className="services-grid">
        {services.map((service, index) => (
          <Card key={index} className="service-card">
            <CardContent className="service-card-content">
              <div className="service-icon">{service.icon}</div>
              <Typography variant="h6" component="div">
                {service.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;