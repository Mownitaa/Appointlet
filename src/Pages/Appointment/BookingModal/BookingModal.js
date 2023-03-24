import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ({openBooking,handleBookingClose,date,booking}) => {
  const {name,time} = booking;
const {user} = useAuth();
const initialInfo = {patientName: user.displayName, email: user.email, phone:''}
const [bookingInfo, setBookingInfo] = useState(initialInfo);

const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...bookingInfo};
    newInfo[field] = value;
    // console.log(newInfo);
    setBookingInfo(newInfo);
}

  const handleBookingSubmit = e =>{

    //collect data
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString()
    }
    //send to the form
    console.log(appointment);


    handleBookingClose();
    e.preventDefault();
  }


  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={openBooking}
    onClose={handleBookingClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    slotProps={{
      backdrop: {
        timeout: 500,
      },
    }}
  >
    <Fade in={openBooking}>
      <Box sx={style}>
        <Typography sx={{m:1}} id="transition-modal-title" variant="h6" component="h2">
            {name}
            </Typography>
        <form onSubmit={handleBookingSubmit}>
        <TextField
        disbaled
          id="outlined-size-small"
          sx={{width:'90%',m:1}}
          defaultValue={time}
          size="small"
        />
         <TextField
          id="outlined-size-small"
          sx={{width:'90%',m:1}}
          name="patientName"
          onBlur={handleOnBlur}
          defaultValue={user.displayName}
          size="small"
        />
        <TextField
          id="outlined-size-small"
          sx={{width:'90%',m:1}}
          name="email"
          onBlur={handleOnBlur}
          defaultValue={user.email}
          size="small"
        />
        <TextField
          id="outlined-size-small"
          sx={{width:'90%',m:1}}
          name="phone"
          onBlur={handleOnBlur}
          placeholder="Phone Number"
          size="small"
        />
        <TextField
        disbaled
          id="outlined-size-small"
          sx={{width:'90%',m:1}}
          // defaultValue={date}
          // defaultValue={date.toLocaleDateString()}
          defaultValue={date.toDateString()}
          size="small"
        />
        <Button
        type="submit"
        variant="contained"
        sx={{m:1}}
        style={{backgroundColor:'#810054'}}>
          Submit
        </Button>
        </form>
      </Box>
    </Fade>
  </Modal>
  )
}

export default BookingModal