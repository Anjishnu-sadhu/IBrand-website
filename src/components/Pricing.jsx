import { useState } from 'react';
import { Info, Sparkles, ChevronDown } from 'lucide-react';

const Pricing = ({ onConnectSales }) => {
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
        </div>

        <div className="pricing-cards">
          {/* starter Card */}
          <div className="pricing-card">
            <h3 className="card-tier">Starter</h3>
            <p className="card-desc">Perfect for getting started and testing out email marketing</p>
            <div className="card-price">
              <span className="price-value">₹99,999</span><span className="price-period">/mo</span>
            </div>
            <p className="card-sub-price">100 Verified Leads</p>
            <button className="btn btn-outline-black btn-full" onClick={onConnectSales}>Sign up</button>
            
            <ul className="card-features">
              <li>Facebook & Instagram Ads <Info size={14} className="info-icon" /></li>
              <li>Lead Form + Landing Page<Info size={14} className="info-icon" /></li>
              <li>IVR & WhatsApp Verification <Info size={14} className="info-icon" /></li>
            </ul>
          </div>

          {/* growth Card */}
          <div className="pricing-card">
            <h3 className="card-tier">Growth</h3>
            <p className="card-desc">Best for growing and medium-sized businesses focused on email marketing</p>
            <div className="card-price">
              <span className="price-value">₹2,49,999</span><span className="price-period">/mo</span>
            </div>
            <p className="card-sub-price">
              Total of: <span className="strike">$40.00</span> $33.60 today <span className="discount-tag">-30%</span><br/>
            250 + 50 Bonus Leads
            </p>
            <button className="btn btn-black btn-full" onClick={onConnectSales}>Sign up</button>
            
            <ul className="card-features">
              <li>Facebook & Instagram Ads <Info size={14} className="info-icon" /></li>
              <li>Advanced Lead Filtering <Info size={14} className="info-icon" /></li>
              <li>IVR + WhatsApp Integrations <Info size={14} className="info-icon" /></li>
              <li>Creative & Landing Page Design<Info size={14} className="info-icon" /></li>
            </ul>
          </div>

          {/* scale Card */}
          <div className="pricing-card pro-card">
            <div className="pro-badge"><Sparkles size={12} /> Advanced AI</div>
            <h3 className="card-tier">Scale</h3>
            <p className="card-desc">Best for high-volume senders aimed at adding extra power with SMS</p>
            <div className="card-price">
              <span className="price-value">₹4,99,999</span><span className="price-period">/mo</span>
            </div>
            <p className="card-sub-price">
              Total of: <span className="strike">$177.00</span> $123.90 today <span className="discount-tag">-30%</span><br/>
             500 + 150 Bonus Leads
            </p>
            <button className="btn btn-black btn-full" onClick={onConnectSales}>Sign up</button>
            
            <ul className="card-features">
              <li className="highlight">High-Volume Meta Ad Campaigns <Info size={14} className="info-icon" /></li>
              <li>Campaign Optimisation & Reporting <Info size={14} className="info-icon" /></li>
              <li>Advanced Lead Qualification<Info size={14} className="info-icon" /></li>
              <li>IVR + WhatsApp Lead Verification <Info size={14} className="info-icon" /></li>
              <li>Premium Creative & Landing Page Design <Sparkles size={14} className="sparkle-icon-small"/> <Info size={14} className="info-icon" /></li>
            </ul>
          </div>
        </div>

        {/* SMS Credits Block */}
        <div className="sms-credits-block">
          <div className="sms-left">
            <h3>Add Domestic SMS credits<br/>to your<br/>Pro plan.</h3>
            <p className="sms-desc">SMS is available in multiple<br/>states. Price estimated for:</p>
            <div className="sms-dropdown">
              <span>Chandigarh</span> <ChevronDown size={14} />
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


        <div className="pricing-footer">
          <button className="btn btn-black btn-large" onClick={onConnectSales}>Start free</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
