import React from 'react'
import Home from '../../Shared/Home/Home/Home'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Shared/Navbar/Navbar'
import Footer from '../../Shared/Footer/Footer'

export default function RootLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
