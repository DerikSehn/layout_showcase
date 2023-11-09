// src/components/LandingPage.tsx
import React from 'react';

import ServicesSection from './components/ServicesSection';
import Header from './components/Header';
import AdultPlans from './components/AdultPlans';
import Footer from './components/Footer';
import MenuSection from './components/MenuSection';
import MainSection from './components/MainSection';
import KidPlans from './components/KidPlans';
const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100" >
      <Header />
      <MainSection/>
      <AdultPlans />
      <KidPlans />
      <ServicesSection />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default LandingPage;