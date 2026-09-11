import { ChevronRight } from 'lucide-react';

const WhyUs = () => {
  return (
    <section className="why-us-wrapper">
      <div className="why-us-bg-split"></div>
      <div className="container relative-container">
        <div className="why-us-card">
          <div className="why-us-content">
            <span className="why-us-badge">WHY US?</span>
            <h2 className="why-us-title">Get up and<br />running in<br />30 minutes</h2>
            <a href="#" className="why-us-link">
              Make the move today <ChevronRight size={16} />
            </a>
          </div>
          
          <div className="why-us-features">
            <div className="why-us-features-bg">
              <div className="why-us-feature-item">
                <div className="check-box-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Intuitive tool</span>
              </div>
              
              <div className="why-us-feature-item">
                <div className="check-box-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>24/7 expert support</span>
              </div>
              
              <div className="why-us-feature-item">
                <div className="check-box-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>Same features for less</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
