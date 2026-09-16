import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import Marquee from './components/Marquee';
import TrustMetrics from './components/TrustMetrics';
import Pricing from './components/Pricing';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [savedScroll, setSavedScroll] = useState(0);

  const navigateToContact = () => {
    setSavedScroll(window.scrollY);
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setTimeout(() => {
      window.scrollTo(0, savedScroll);
    }, 0);
  };

  return (
    <>
      <Navbar onConnectSales={navigateToContact} />
      {currentPage === 'home' ? (
        <>
          <Hero onConnectSales={navigateToContact} />
          <TrustedBy />
          <Features />
          <Marquee />
          <TrustMetrics />
          <Services />
          <Pricing onConnectSales={navigateToContact} />
          <WhyUs onConnectSales={navigateToContact} />
          <FAQ />
          <Footer onConnectSales={navigateToContact} />
        </>
      ) : (
        <ContactPage onBack={navigateToHome} />
      )}
    </>
  );
}

export default App;
