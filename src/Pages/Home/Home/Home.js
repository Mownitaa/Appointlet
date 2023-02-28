import React from 'react'
import Banner from '../../Banner/Banner'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <Services></Services>
    <AppointmentBanner></AppointmentBanner>
    </div>
  )
}

export default Home