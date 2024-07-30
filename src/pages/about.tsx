import Brand from '@/components/About/Brand'
import Briefing from '@/components/About/Briefing'
import Hero from '@/components/About/Hero'
import Solutions from '@/components/About/Solutions'
import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import PartnerWithUs from '@/components/Home/PartnerWithUs'
import React from 'react'

const about = () => {
  return (
    <>
      <Header />
      <Hero />
      <Briefing />
      <Brand />
      <Solutions />
      <PartnerWithUs />
      <Footer />
    </>
  )
}

export default about
