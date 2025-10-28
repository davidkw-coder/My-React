import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import HostingBenefits from './components/HostingBenefits';

export default function App() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <HostingBenefits />
    </div>
  )
}
