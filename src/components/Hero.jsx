import { CheckCircle2, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="container hero">
      <div className="hero-content">
        <div className="rating">
          <Star className="rating-star" size={18} fill="#ffb400" />
          <span>Rated 4.7 / 5 in 2024 on Capterra</span>
        </div>
        
        <h1 className="hero-title">
          
          <span>Boost sales with<br />intuitive</span> email & SMS<br />
          marketing tool
        </h1>

        <div className="hero-features">
          <div className="hero-feature">
            <CheckCircle2 size={24} />
            <span>Fast, no-code setup</span>
          </div>
          <div className="hero-feature">
            <CheckCircle2 size={24} />
            <span>24/7 expert support</span>
          </div>
          <div className="hero-feature">
            <CheckCircle2 size={24} />
            <span>AI powered</span>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn btn-primary">Signup now</button>
          <button className="btn btn-outline">See pricing</button>
        </div>
        
        <p className="hero-disclaimer">
          Cancel anytime | No credit card required
        </p>
      </div>

      <div className="hero-visuals">
        <div className="visual-backdrop"></div>
        <div className="visual-image">
          <img src="/hero-image.jpg" alt="Smiling man" />
        </div>
        
        <div className="visual-tags">
          <div className="tag">Abandoned cart</div>
          <div className="tag">SMS</div>
          <div className="tag">Email</div>
        </div>

        {/* Connection Line */}
        <div className="connection-container">
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20 L30 20 Q50 20 50 40 L50 110" stroke="white" strokeWidth="1.5" />
          </svg>
          <div className="omnisend-badge">Start with Omnisend</div>
          <div className="arrow-down-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </div>
        </div>

        <div className="discount-badge">
          <span>DISCOUNT</span>
          <span>30%</span>
        </div>

        <div className="visual-chart">
          <div className="chart-title">Sales performance</div>
          <div className="chart-value">
            <span className="value-arrow">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </span>
            $18,699
          </div>
          
          <div className="chart-bars-container">
            <div className="chart-grid-line" style={{ bottom: '25%' }}></div>
            <div className="chart-grid-line" style={{ bottom: '50%' }}></div>
            <div className="chart-grid-line" style={{ bottom: '75%' }}></div>
            
            <div className="chart-bars">
              <div className="chart-bar" style={{ height: '20%' }}></div>
              <div className="chart-bar" style={{ height: '35%' }}></div>
              <div className="chart-bar" style={{ height: '30%' }}></div>
              <div className="chart-bar" style={{ height: '55%' }}></div>
              <div className="chart-bar" style={{ height: '65%' }}></div>
              <div className="chart-bar" style={{ height: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
