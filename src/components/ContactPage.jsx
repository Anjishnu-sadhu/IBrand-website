import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = ({ onBack }) => {
  return (
    <div className="contact-page">
      <div className="container">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} /> Back to Home
        </button>
        
        <div className="contact-content">
          <div className="contact-left">
            <span className="why-us-badge">GET IN TOUCH</span>
            <h1 className="contact-title">Let's build<br/>something<br/><span className="text-gradient">amazing</span></h1>
            <p className="contact-desc">
              Whether you need more customers, better conversion rates, or a complete digital overhaul, we know how to get you there.
            </p>
          </div>
          
          <div className="contact-right">
            <div className="contact-card">
              <h3>Contact Information</h3>
              
              <div className="contact-info-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:webczarsolutionemail.com" className="contact-link">webczarsolutionemail.com</a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <div>
                  <p className="contact-label">Phone</p>
                  <a href="tel:+91 9896675313" className="contact-link">+91 9896675313</a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <p className="contact-label">Office</p>
                  <p className="contact-text">Kalkat Bhawan<br/>2nd, Floor</p>
                </div>
              </div>
              
              <div className="contact-socials">
                <a href="#" className="social-icon in-icon">In</a>
                <a href="#" className="social-icon x-icon">X</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
