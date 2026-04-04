import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosSlider from '../ClientLogosSlider/ClientLogosSlider';
import Benefits from '../Benefits/Benefits';
import BeMerchant from '../BeMerchant/BeMerchant';
import Reviews from '../Review/Reviews';
import FAQSection from '../FAQ/FAQSection';




const Home = () => {
  return (
    <div className='bg-amber-50'>
      <Banner></Banner>
      <Services></Services>
      <ClientLogosSlider></ClientLogosSlider>
      <Benefits></Benefits>
      <BeMerchant></BeMerchant>
      <Reviews></Reviews>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;