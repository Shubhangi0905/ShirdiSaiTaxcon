// src/components/Clients/Clients.jsx

import React from 'react';
import Slider from 'react-slick';
import { Typography, List, ListItem, ListItemText, Grid, Paper } from '@mui/material';
import './Clients.css';

const associatedColleges = {
  'Muzaffarpur': ['L.S. College', 'M.D.D.M. College', 
    'RMLS College','S.R.P.S. College Jaintpur',
    'RDS College', 'MPS Science College', 
    'Nitishwar Singh College','Rameshwar Singh College', 
    'C.N. College', 'JBSD College' ],
  'East Champaran': ['S.R.A.P College Chakiya','SNS College Motihari',
    'M.S. College Motihari', 'MSSG College Areraj',
    'Rajkiya Degree College Madhuban'
  ],
  'West Champaran': ['Bootnath College Bagaha'],
  'Siwan': ['B.P.A.S. College Siwan'],
  'Sitamarhi': ['J.S. College Chandouli', 'Goyinka COllege',
    'Women College Sitamarhi','Rajkiya Degree College Sheohar'
  ],
  'Vaishali': ['L.N. College Bhagwanpur', 'BPS College Desari']
};

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="clients-container">
      <Typography variant="h3" component="h2" className="section-title">
        Our Valued Clients & Educational Partnerships
      </Typography>
      <Grid container spacing={4} className="clients-content">
        <Grid item xs={12}> {/* This grid item now takes the full width */}
          <Typography variant="h4" component="h3" className="subtitle">
            Associated Colleges
          </Typography>
          <div className="college-slider-wrapper">
            <Slider {...settings}>
              {Object.entries(associatedColleges).map(([district, colleges]) => (
                <div key={district}>
                  <Paper elevation={1} className="college-card-clean">
                    <Typography variant="h6" component="p" className="college-district-name-clean">
                      {district}
                    </Typography>
                    <List dense={true}>
                      {colleges.map((college, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={college} className="college-list-item-text-clean" />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </div>
              ))}
            </Slider>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Clients;