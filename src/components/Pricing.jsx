import { useState } from 'react';
import { Info, Sparkles, ChevronDown } from 'lucide-react';

const Pricing = () => {
  const [smsSpend, setSmsSpend] = useState(50);
  const smsVolume = Math.floor(smsSpend / 0.0085).toLocaleString();
  const volumeRate = (0.0085 - (smsSpend * 0.000005)).toFixed(4);

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2 className="pricing-title">Start strong & grow without limits</h2>
          <p className="pricing-subtitle">
            Save 30% when you pay for 3 months upfront with our Starter Discount. Send SMS worldwide and enjoy award-winning support.
          </p>

          <div className="pricing-controls">
            <div className="dropdown-container">
              <label>How many people are you sending to? <Info size={14} className="info-icon" /></label>
              <div className="dropdown">
                <span>251 - 500</span>
                <ChevronDown size={16} />
              </div>
            </div>
            <div className="pricing-discount-badge">
              <span>DISCOUNT</span>
              <span>30%</span>
            </div>
          </div>
        </div>

        <div className="pricing-cards">
          {/* Free Card */}
          <div className="pricing-card">
            <h3 className="card-tier">Free</h3>
            <p className="card-desc">Perfect for getting started and testing out email marketing</p>
            <div className="card-price">
              <span className="price-value">$0</span><span className="price-period">/mo</span>
            </div>
            <p className="card-sub-price">No cost. Without a catch.</p>
            <button className="btn btn-outline-black btn-full">Sign up</button>
            
            <ul className="card-features">
              <li>500 monthly emails <Info size={14} className="info-icon" /></li>
              <li>250 contacts <Info size={14} className="info-icon" /></li>
              <li>500 Web Push notifications <Info size={14} className="info-icon" /></li>
            </ul>
          </div>

          {/* Standard Card */}
          <div className="pricing-card">
            <h3 className="card-tier">Standard</h3>
            <p className="card-desc">Best for growing and medium-sized businesses focused on email marketing</p>
            <div className="card-price">
              <span className="price-value">$11.20</span><span className="price-period">/mo</span>
            </div>
            <p className="card-sub-price">
              Total of: <span className="strike">$40.00</span> $33.60 today <span className="discount-tag">-30%</span><br/>
              After 3 months, you will be billed monthly
            </p>
            <button className="btn btn-black btn-full">Sign up</button>
            
            <ul className="card-features">
              <li>6,000 emails/mo <Info size={14} className="info-icon" /></li>
              <li>500 contacts <Info size={14} className="info-icon" /></li>
              <li>Unlimited Web Push notifications <Info size={14} className="info-icon" /></li>
            </ul>
          </div>

          {/* Pro Card */}
          <div className="pricing-card pro-card">
            <div className="pro-badge"><Sparkles size={12} /> Advanced AI</div>
            <h3 className="card-tier">Pro</h3>
            <p className="card-desc">Best for high-volume senders aimed at adding extra power with SMS</p>
            <div className="card-price">
              <span className="price-value">$41.30</span><span className="price-period">/mo</span>
            </div>
            <p className="card-sub-price">
              Total of: <span className="strike">$177.00</span> $123.90 today <span className="discount-tag">-30%</span><br/>
              After 3 months, you will be billed monthly
            </p>
            <button className="btn btn-black btn-full">Sign up</button>
            
            <ul className="card-features">
              <li className="highlight">Unlimited monthly emails <Info size={14} className="info-icon" /></li>
              <li>2,500 contacts <Info size={14} className="info-icon" /></li>
              <li>Unlimited Web Push notifications <Info size={14} className="info-icon" /></li>
              <li>Add SMS starting at $0.007 <Info size={14} className="info-icon" /></li>
              <li>AI powered personalizations <Sparkles size={14} className="sparkle-icon-small"/> <Info size={14} className="info-icon" /></li>
            </ul>
          </div>
        </div>

        {/* SMS Credits Block */}
        <div className="sms-credits-block">
          <div className="sms-left">
            <h3>Add Global SMS<br/>credits to your<br/>Pro plan.</h3>
            <p className="sms-desc">SMS is available in multiple<br/>countries. Price estimated for:</p>
            <div className="sms-dropdown">
              <span>United States of America</span> <ChevronDown size={14} />
            </div>
          </div>
          <div className="sms-right">
            <div className="slider-wrapper">
              <div className="slider-container">
                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  step="10"
                  value={smsSpend} 
                  onChange={(e) => setSmsSpend(parseInt(e.target.value))}
                  className="sms-slider"
                  style={{
                    background: `linear-gradient(to right, #111 ${(smsSpend - 10) / 490 * 100}%, #d1d5db ${(smsSpend - 10) / 490 * 100}%)`
                  }}
                />
              </div>
              <div className="slider-value-pill">${smsSpend} ({smsVolume} SMS) <ChevronDown size={14} /></div>
            </div>
            <div className="sms-stats">
              <div className="sms-price">${smsSpend}<span>/mo</span></div>
              <div className="sms-volume">
                Volume: <strong>{smsVolume} SMS/mo</strong><br/>
                Volume rate: <strong>${volumeRate} /SMS</strong>
              </div>
              <a href="#" className="check-rates">Check all volume rates</a>
            </div>
          </div>
        </div>

        {/* Detailed Features List */}
        <div className="detailed-features">
          {[0, 1, 2].map((col) => (
            <div className="feature-column" key={col}>
              <ul className="detailed-list">
                <li className={col >= 0 ? '' : 'disabled'}>Free migration <Info size={12} className="info-icon" /></li>
                <li className={col >= 0 ? '' : 'disabled'}>24/7 support <Info size={12} className="info-icon" /></li>
                <li className={col >= 0 ? '' : 'disabled'}>Omnisend MCP <Info size={12} className="info-icon" /></li>
                <li className={col >= 1 ? '' : 'disabled'}>Account expert (from $400) <Info size={12} className="info-icon" /></li>
                <li className={col >= 1 ? '' : 'disabled'}>Forms AI <Sparkles size={10} className="sparkle-icon-small"/> <Info size={12} className="info-icon" /></li>
                <li className={col >= 1 ? '' : 'disabled'}>Reports AI <Sparkles size={10} className="sparkle-icon-small"/> <Info size={12} className="info-icon" /></li>
                <li className={col >= 1 ? '' : 'disabled'}>No Omnisend branding <Info size={12} className="info-icon" /></li>
                <li className={col >= 1 ? '' : 'disabled'}>Advanced reporting <Info size={12} className="info-icon" /></li>
                <li className={col >= 1 ? '' : 'disabled'}>Dynamic content <Info size={12} className="info-icon" /></li>
                <li className={col >= 1 ? '' : 'disabled'}>Personalized product recommender AI <Sparkles size={10} className="sparkle-icon-small"/> <Info size={12} className="info-icon" /></li>
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <button className="btn btn-black btn-large">Start free</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
