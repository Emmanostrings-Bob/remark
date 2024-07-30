import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import PartnerWithUs from '@/components/Home/PartnerWithUs'
import Hero from '@/components/Services/Hero'
import OurProcess from '@/components/Services/OurProcess'
import OurServices from '@/components/Services/OurServices'
import React from 'react'

const Services = () => {
  return (
    <>
        <Header />
        <Hero />
        <OurServices />
        <OurProcess />
        <PartnerWithUs />
        <Footer />
    </>
  )
}

export default Services
