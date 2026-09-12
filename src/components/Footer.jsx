import { useState } from 'react';
import { Rss, ArrowRight, CheckCircle2, MessageSquare, Play, Sparkles } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top CTA */}
        <div className="footer-cta">
          <div className="footer-cta-left">
            <h2 className="footer-cta-title">Start free<br/>today <button className="cta-arrow-btn"><ArrowRight color="#111" size={40} /></button></h2>
          </div>
          <div className="footer-cta-right">
            <p>Built on feedback from 150,000+ brands. Try Omnisend and see why they stay.</p>
          </div>
        </div>

        <div className="footer-divider-thick"></div>

        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Left Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
               <span className="nav-logo-icon"></span> omnisend
            </div>
            <p className="footer-brand-desc">The integrated marketing automation platform for ecommerce.</p>
            
            <div className="footer-award-badge">
              <div className="award-stars">★★★★★</div>
              <p>Omnisend has been recognized as the Best Email Marketing Tool for Ecommerce by Email Tool Tester.</p>
            </div>

            <div className="footer-ask-ai">
              <h4>Ask AI <Sparkles size={14} className="sparkle-icon"/> about Omnisend</h4>
              <div className="ai-buttons">
                 <button><CheckCircle2 size={14}/> Features</button>
                 <button><MessageSquare size={14}/> Pricing</button>
                 <button><Play size={14}/> Demo</button>
              </div>
            </div>
          </div>

          {/* Right Columns */}
          <div className="footer-links-wrapper">
            <div className="newsletter-box">
              <div className="newsletter-text">
                <p>Sign up to get marketing insights from people who live and breathe email. Twice a month. Never more.</p>
              </div>
              <div className="newsletter-form-container">
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn-subscribe">Subscribe</button>
                </form>
                <p className="newsletter-disclaimer">
                  By submitting your email, you consent to Omnisend sending you marketing emails about our products, content, and offers. You can unsubscribe at any time via the link in every email. For more details, check our <a href="#">Privacy Policy</a>.
                </p>
              </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-links-grid">
              <div className="link-col">
                <h4>Product</h4>
                <ul>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Multi-store accounts</a></li>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Developer center</a></li>
                  <li><a href="#">App market</a></li>
                </ul>
              </div>
              <div className="link-col">
                <h4>Platforms</h4>
                <ul>
                  <li><a href="#">Shopify</a></li>
                  <li><a href="#">Shopify Plus</a></li>
                  <li><a href="#">BigCommerce</a></li>
                  <li><a href="#">WordPress</a></li>
                  <li><a href="#">WooCommerce</a></li>
                  <li><a href="#">Wix</a></li>
                  <li><a href="#">Shopline</a></li>
                  <li><a href="#">Ecwid</a></li>
                </ul>
              </div>
              <div className="link-col">
                <h4>Comparisons</h4>
                <ul>
                  <li><a href="#">Omnisend vs. Klaviyo</a></li>
                  <li><a href="#">Omnisend vs. Mailchimp</a></li>
                  <li><a href="#">Klaviyo alternatives</a></li>
                  <li><a href="#">Braze alternatives</a></li>
                  <li><a href="#">Mailchimp alternatives</a></li>
                  <li><a href="#">Best email marketing software</a></li>
                </ul>
              </div>
              <div className="link-col">
                <h4>Partners</h4>
                <ul>
                  <li><a href="#">Affiliate partners</a></li>
                  <li><a href="#">Agency partners</a></li>
                  <li><a href="#">Partner portal <span className="tag">LOGIN</span></a></li>
                  <li><a href="#">Agency directory</a></li>
                  <li><a href="#">Hire an Omnisend Partner</a></li>
                </ul>
              </div>
              <div className="link-col">
                <h4>Omnisend</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Contact us</a></li>
                  <li><a href="#">Careers <span className="tag green">HIRING</span></a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Webinars</a></li>
                  <li><a href="#">Success stories</a></li>
                  <li><a href="#">Customer Support</a></li>
                  <li><a href="#">Bug Bounty</a></li>
                  <li><a href="#">Newsroom</a></li>
                  <li><a href="#">AI Hub</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider-thick"></div>

        <div className="disclaimers">
          <h4>*Disclaimers</h4>
          <ol>
            <li>The average return of $72 for every dollar spent is based on our internal analysis. This figure represents an estimated average of ecommerce revenue attributed to email, SMS, push campaigns & automations sent by Omnisend merchants on paid plans in 2022. Actual results may vary depending on individual circumstances, market conditions, region, and other factors. Past performance is not indicative of future results.</li>
            <li>Pricing comparisons with leading ESPs are based on publicly available standard rates. While we often offer lower prices, actual costs may vary depending on specific service needs and competitor pricing at the time. We do not guarantee the lowest price in every instance. Check our terms and current pricing for the most accurate comparison.</li>
            <li>Based on publicly available standard rates as of May 2024, comparing Omnisend's Standard plan to Klaviyo's Marketing plan (Email). Excludes SMS and add-ons. Actual savings vary by contact list size, plan tier, billing frequency, region, and features selected. See current pricing for the most accurate comparison.</li>
          </ol>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-links">
            <span>© Omnisend 2024</span>
            <a href="#">Status</a>
            <a href="#">Data processing agreement</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy policy</a>
            <a href="#">Acceptable Use Policy</a>
            <a href="#">Manage cookie settings</a>
            <a href="#">Modern Slavery Statement</a>
          </div>
          
          <div className="footer-socials">
            <a href="#" className="social-text">Fb</a>
            <a href="#" className="social-text">Tw</a>
            <a href="#" className="social-text">In</a>
            <a href="#" className="social-text">Ig</a>
            <a href="#" className="social-text">Yt</a>
            <a href="#"><Rss size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
