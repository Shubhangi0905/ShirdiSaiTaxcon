// src/components/TaxCalculator/TaxCalculator.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid, Box } from '@mui/material';
import './TaxCalculator.css';

const TaxCalculator = () => {
  const [income, setIncome] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    const taxableIncome = Math.max(0, income - deductions);
    let calculatedTax = 0;

    // Simplified tax calculation based on basic slabs (for demonstration)
    if (taxableIncome > 1000000) {
      calculatedTax = 112500 + (taxableIncome - 1000000) * 0.30;
    } else if (taxableIncome > 500000) {
      calculatedTax = 12500 + (taxableIncome - 500000) * 0.20;
    } else if (taxableIncome > 250000) {
      calculatedTax = (taxableIncome - 250000) * 0.05;
    }

    setTax(calculatedTax);
  };

  return (
    <div className="calculator-container">
      <Typography variant="h3" component="h2" className="section-title">
        Tax Calculator
      </Typography>
      <Paper elevation={3} className="calculator-card">
        <Box p={4}>
          <Typography variant="h5" component="h3" gutterBottom>
            Calculate Your Estimated Tax
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Annual Income (₹)"
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Deductions (e.g., 80C) (₹)"
                type="number"
                value={deductions}
                onChange={(e) => setDeductions(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                onClick={calculateTax}
              >
                Calculate Tax
              </Button>
            </Grid>
          </Grid>
          {tax !== null && (
            <Box mt={3}>
              <Typography variant="h6" className="tax-result">
                Your estimated tax is: **₹{tax.toFixed(2)}**
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                *This is an estimate. Please consult a professional for an accurate calculation.*
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </div>
  );
};

export default TaxCalculator;