import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosSlider from '../ClientLogosSlider/ClientLogosSlider';
import Benefits from '../Benefits/Benefits';




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ClientLogosSlider></ClientLogosSlider>
      <Benefits></Benefits>
    </div>
  );
};

export default Home;