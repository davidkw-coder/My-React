import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import HostingBenefits from './components/HostingBenefits';
import AmazingWebsiteSection from './components/AmazingWebsiteSection';

export default function App() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <HostingBenefits />
        <AmazingWebsiteSection />
    </div>
  )
}
