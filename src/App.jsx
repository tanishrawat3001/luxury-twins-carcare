import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
        <WhatsAppWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
