import { Alert, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import Booking from '../Booking/Booking'

const bookings=[
  {
    id:1 ,
    name:'Teeth Ortyhodonics' ,
    time: '08.00 AM - 09.00 AM',
    space:10 ,
  },
  {
    id: 2,
    name: 'Cosmetic Dentiostry',
    time: '09.00 AM - 10.00 AM',
    space:8 ,
  },
  {
    id:3 ,
    name:'Teeth Cleaning' ,
    time: '10.00 AM - 11.00 AM',
    space:8 ,
  },
  {
    id:4,
    name:'Cavity Protection' ,
    time: '11.00 AM - 12.00 PM',
    space:5 ,
  },
  {
    id:5,
    name: 'Pediatric Dental',
    time: '06.00 PM - 07.00 PM',
    space: 10,
  },
  {
    id:6,
    name:'Oral Surgery',
    time:'07.00 Pm - 08.00 PM' ,
    space:10 ,
  },
]


const AvailableAppointments = ({date}) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <Container>
    <h1 style={{
      marginTop:'35px',
                marginBottom:'35px',
                color:'#810054'
              }}  >
                Available Appointments
       {/* Available Appointments {date.toDateString()} */}
    </h1>
    {bookingSuccess && 
    <Alert sx={{mt:8}} severity="success">
            Booking successfull!
    </Alert>}
    <Grid container spacing={2}>
      {
        bookings.map(booking=> <Booking
          key={booking.id}
          booking={booking}
          date={date}
          setBookingSuccess={setBookingSuccess}
          >
        </Booking>)
      }
    </Grid>
</Container>
  )
}

export default AvailableAppointments