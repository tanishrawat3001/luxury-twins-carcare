import React from 'react';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import AboutUs from '../components/AboutUs';
import SpecializedIn from '../components/SpecializedIn';
import Services from '../components/Services';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CoreValues />
      <AboutUs />
      <SpecializedIn />
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;
