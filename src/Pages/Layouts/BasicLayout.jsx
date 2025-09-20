import React from 'react'
import Navbar from '../../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Sections/Footer'
import { motion } from 'framer-motion'
import PromoBanner from '../../Components/PromoBanner'

const BasicLayout = () => {
  return (
    <>
      <Navbar />
      <PromoBanner />
      <Outlet />
      <Footer />
    </>
  )
}

export default BasicLayout
