import React from 'react'
import NavbarAzu from '../Nav/NavbarAzu'
import Footer from '../Nav/Footer'
import AzureHero from './AzureHero';
import AzureFeatureSection from './AzureFeatureSection';
import AzureCards from './AzureCards';

const AzureHome = () => {
  return (
    <div>
      <NavbarAzu/>
          <AzureHero />
          <AzureFeatureSection />
          <AzureCards />
      <Footer/>
    </div>
  );
}

export default AzureHome
