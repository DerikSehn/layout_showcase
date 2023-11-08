// src/components/LandingPage.tsx
import React from 'react';

import ServicesSection from './components/ServicesSection';
import Header from './components/Header';
import AboutUsSection from './components/AboustUsSection';
import Footer from './components/Footer';
import MenuSection from './components/MenuSection';
import MainSection from './components/MainSection';
const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100" >
      <Header />
      <MainSection/>
      <ServicesSection />
      <AboutUsSection />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default LandingPage;