import React from 'react'
import Banner from '../../Banner/Banner'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import Services from '../Services/Services'
import Appointment from '../../Appointment/Appointment/Appointment'

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Services></Services>
    {/* <Appointment></Appointment> */}
    </div>
  )
}

export default Home