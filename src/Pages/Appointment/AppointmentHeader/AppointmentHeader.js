import { Grid } from '@mui/material'
import React from 'react'
import appBooking from "../../../images/booking-banner.jpg";
import Calender from '../../Shared/Calender/Calender';  

const AppointmentHeader = ({date, setDate}) => {

  return (
<div >
    <Grid container spacing={2}>
      <Grid item sx={{mt:10}} xs={12} md={8}>
          <Calender date={date} setDate={setDate}></Calender>
      </Grid>

      <Grid item xs={12} md={4}>
          <img style={{width:'100%'}}  src={appBooking} alt=""/>
      </Grid>
      
    </Grid>
</div>
  )
}

export default AppointmentHeader