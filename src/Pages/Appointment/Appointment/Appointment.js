import React from 'react'
import dayjs from 'dayjs';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'

const Appointment = () => {
  const [date, setDate] = React.useState(dayjs());

  return (
    <div style={{marginTop:'100px'}}>
       <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
       <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  )
}

export default Appointment