import { CheckCircle2, Star } from 'lucide-react';

const Hero = ({ onConnectSales }) => {
  return (
    <section className="container hero">
      <div className="hero-content">
        <div className="rating">
          <Star className="rating-star" size={18} fill="#ffb400" />
          <span>Rated 5 / 5 in 2026 on Google</span>
        </div>
        
        <h1 className="hero-title">
          
          <span>Stop Chasing <br />Customers. </span>Start<br />
          Attracting them.
        </h1>

        <div className="hero-features">
          <div className="hero-feature">
            <CheckCircle2 size={24} />
            <span>Digital Driven Campaigns</span>
          </div>
          <div className="hero-feature">
            <CheckCircle2 size={24} />
            <span>Reach The Right Audience</span>
          </div>
          <div className="hero-feature">
            <CheckCircle2 size={24} />
            <span>Generate Quality Leads</span>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onConnectSales}>Connect Sales</button>
          <button className="btn btn-outline" onClick={onConnectSales}>Free Consulting</button>
        </div>
        
        <p className="hero-disclaimer">
          NEED MORE CUSTOMERS? WE KNOW HOW. 
        </p>
      </div>

      <div className="hero-visuals">
        <div className="visual-backdrop"></div>
        <div className="visual-image">
          <img src="/hero-image.jpg" alt="Smiling man" />
        </div>
        


        {/* Connection Line */}
        <div className="connection-container">
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20 L30 20 Q50 20 50 40 L50 110" stroke="white" strokeWidth="1.5" />
          </svg>
          <div className="iBrandMark-badge">Start with iBrandMark</div>
          <div className="arrow-down-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </div>
        </div>



        <div className="visual-chart">
          <div className="chart-title">Sales performance</div>
          <div className="chart-value">
            <span className="value-arrow">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </span>
            ₹18,80,899
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
