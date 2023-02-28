import React from 'react'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'

const Appointment = () => {
  return (
    <div style={{marginTop:'100px'}}>
       <AppointmentHeader></AppointmentHeader>
       <AvailableAppointments></AvailableAppointments>
    </div>
  )
}

export default Appointment