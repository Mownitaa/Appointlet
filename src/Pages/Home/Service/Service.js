import { CardMedia, Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'animate.css';


const Service = (props) => {
  const{name,description,title,img}=props.service;
  return (
    <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ pt:2,width: 362 ,border:0, boxShadow:0,height:450}}>
        <CardMedia
        component="img"
        style={{width:'auto',height:'80px',margin:'0 auto',color:'#a60525'}}
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" style={{textAlign:'left'}} sx={{mt:2,fontWeight:'bold',color:'#810054'}}>
          {title}
        </Typography>
       
        <Typography style={{textAlign:'left'}} sx={{ mt:4,mb:5,fontSize: 17 }}>
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{backgroundColor:'#810054'}}className="animate__animated  animate__fadeInDown" sx={{px:6,py:1}}variant="contained">Learn More</Button>
      </CardActions>
    </Card> 
    </Grid>
  )
}

export default Service