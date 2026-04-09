import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import AboutUs from './components/AboutUs';
import SpecializedIn from './components/SpecializedIn';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CoreValues />
      <AboutUs />
      <SpecializedIn />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
