import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import SmarterWithAI from './components/SmarterWithAI';
import TrustMetrics from './components/TrustMetrics';
import Pricing from './components/Pricing';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar />
      {currentPage === 'home' ? (
        <>
          <Hero onConnectSales={() => setCurrentPage('contact')} />
          <TrustedBy />
          <Features />
          <SmarterWithAI />
          <TrustMetrics />
          <Services />
          <Pricing />
          <WhyUs />
          <FAQ />
          <Footer />
        </>
      ) : (
        <ContactPage onBack={() => setCurrentPage('home')} />
      )}
    </>
  );
}

export default App;
