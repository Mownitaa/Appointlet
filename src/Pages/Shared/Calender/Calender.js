import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


// const isWeekend = (date: Dayjs) => {
  const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

const Calender = ({date, setDate}) => { 

  return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={date}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setDate(newValue);
          console.log(newValue)
        }}
      renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default Calender