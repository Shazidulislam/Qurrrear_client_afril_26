import React from 'react'
import Banner from '../Banner/Banner'
import OurServices from '../OurServices/OurServices'
import ClientLogos from '../ClientLogos/ClientLogos'
import AboutUs from '../AboutUs/AboutUs'

export default function Home() {
  return (
    <div>
        <Banner/>
        <OurServices/>
        <ClientLogos/>
        <AboutUs/>
    </div>
  )
}
