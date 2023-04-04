import React from 'react'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'
import dayjs from "dayjs";

const Appointment = () => {
  // const [date, setDate] = React.useState(dayjs());
  const [date, setDate] = React.useState(new Date());
  return (
    <div style={{marginTop:'100px'}}>
       <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
       <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  )
}

export default Appointment