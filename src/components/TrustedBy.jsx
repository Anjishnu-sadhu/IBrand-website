import { ChevronDown } from 'lucide-react';

const TrustedBy = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('.features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="trusted-by-wrapper">
      <div className="trusted-by">
        <h2 className="trusted-title">Trusted by 150,000+ ecommerce brands</h2>
        
        <div className="trusted-logos">
          <div className="trusted-logo logo-salomon">
            <span className="logo-salomon-icon">S</span>
            <span>salomon</span>
          </div>
          
          <div className="trusted-logo logo-allbirds">
            allbirds
          </div>
          
          <div className="trusted-logo logo-stanley">
            <span>STANLEY</span>
          </div>
          
          <div className="trusted-logo logo-arcteryx">
            <span>ARC'TERYX</span>
          </div>
          
          <div className="trusted-logo logo-faber">
            <span>FABER-CASTELL</span>
            <span>since 1761</span>
          </div>
        </div>

        <div className="trusted-bottom-arrow" onClick={scrollToFeatures}>
          <div className="arrow-icon-wrapper">
            <ChevronDown size={20} color="#111" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
