// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter from here
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/:service" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;