import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import doctors from '../../../images/doctor-icon.png';
import lab from '../../../images/lab-test.png';
import mission from '../../../images/diagonistics-icon.png';
import Service from '../Service/Service';
import { Typography } from '@mui/material';
import 'animate.css';

const services=[
  {
    name:'Our Lab' ,
    title:'Diagonstics you can trust',
    description:'Our lab participates in the world’s largest external quality assessment scheme. Our average accuracy score is 99.9% and rated one of the best in Bangladesh.',
    img:lab
   },
  {
    name:'Our Doctors',
    title:'Appointlet doctors listen',
    description:'At appointlet you will be treated by internationally trained doctors.They take the time to listen to you and understand your healthcare needs.',
    img:doctors
  },
  
  {
    name:'Our Mission' ,
    title:'Healthcare anytime, anywhere',
    description:'You can get the care  24/7 via online or directly in clinic. And you can manage your health via our website: book appointments, access your test results, and more.',
    img:mission
   }
]

const Services = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
     <Container>
      <Typography sx={{mt:12,mb:4,fontSize:50,color:'#810054',fontWeight:'bold',textAlign:'left'}} className="animate__animated  animate__slideInLeft">The Appointlet Differences</Typography>
     <Grid container spacing={{ sm: 4, md: 1}} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
         services.map(service => <Service
          key={service.name}
          service={service}
          ></Service> )
       }
      </Grid>
    
     </Container>
    </Box>
    </>
  )
}

export default Services;