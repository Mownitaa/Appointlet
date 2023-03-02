import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date}) => {
    const {name, time, space} = booking;
const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  return (
       <> 
       <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3}b sx={{py:5}}>
                <Typography variant="h5" sx={{fontWeight:'bold'}}gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom >
                    {space} SPACES AVAILABLE
                </Typography>

                <Button onClick={handleBookingOpen} variant="contained"  style={{
                backgroundColor:'#810054'
              }} >
                    Book Appointment
                </Button>
            </Paper>
      </Grid>

      <BookingModal
      date={date}
      booking={booking}
      openBooking={openBooking}
      handleBookingClose={handleBookingClose}
      ></BookingModal>
      </>
  )
}

export default Booking