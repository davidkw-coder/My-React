import React from "react";
import HeroSection from "../components/HeroSection";
import HostingBenefits from "../components/HostingBenefits";
import AmazingWebsiteSection from "../components/AmazingWebsiteSection";
import Testimonial from "../components/Testimonial";
import Purchase from "../components/Purchase";
import GetStarted from "../components/GetStarted";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HostingBenefits />
      <AmazingWebsiteSection />
      <Testimonial />
      <Purchase />
      <GetStarted />
      <Contact />
    </div>
  );
};

export default Home;
