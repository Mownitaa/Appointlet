import React from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

const Calender = ({date, setDate}) => { 

  return (
    <div>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={date}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>



{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
  <StaticDatePicker
    displayStaticWrapperAs="desktop"
    date={date}
    onChange={(newDate) => {
      setDate(newDate);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider> */}

    </div>
  )
}

export default Calender