import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import HostingBenefits from './components/HostingBenefits';
import AmazingWebsiteSection from './components/AmazingWebsiteSection';
import Testimonial from './components/Testimonial';
import Purchase from './components/Purchase';
import GetStarted from './components/GetStarted';

export default function App() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <HostingBenefits />
        <AmazingWebsiteSection />
        <Testimonial />
        <Purchase />
        <GetStarted />
    </div>
  )
}
