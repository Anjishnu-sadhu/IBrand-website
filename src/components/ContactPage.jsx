import { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Check, Send, Loader2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ContactPage = ({ onBack }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="contact-page custom-contact-page">
      <div className="contact-watermark">Contact Us</div>
      <div className="container contact-container-custom">
        <button className="back-btn" onClick={onBack} style={{position: 'relative', zIndex: 10, marginBottom: '2rem'}}>
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="contact-main-grid">
          {/* Left Column */}
          <div className="contact-left-col">
            <h1 className="contact-heading">Reach out ↗</h1>
            <p className="contact-intro">
              Have a question or need assistance?<br/>
              Reach out to our dedicated support team.<br/>
              We're here to help with any inquiries you<br/>
              may have.
            </p>

            <ul className="contact-features-list">
              <li>
                <div className="check-icon-wrapper"><Check size={14} strokeWidth={3} /></div>
                <span>Personalized assistance</span>
              </li>
              <li>
                <div className="check-icon-wrapper"><Check size={14} strokeWidth={3} /></div>
                <span>Timely response</span>
              </li>
              <li>
                <div className="check-icon-wrapper"><Check size={14} strokeWidth={3} /></div>
                <span>Comprehensive support</span>
              </li>
            </ul>

            <div className="contact-social-buttons">
              <a href="#" className="social-btn">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="social-btn">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="social-btn">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg>
              </a>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="contact-right-col">
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              {status === 'success' && (
                <div className="form-status success">
                  <Check size={16} /> Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">Failed to send. Please try again.</div>
              )}

              <button
                type="submit"
                className="form-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <><Loader2 size={16} className="spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Submit</>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="contact-bottom-cards">
          <div className="info-card">
            <div className="info-card-icon-wrapper"><Mail size={18} strokeWidth={1.5} /></div>
            <div className="info-card-text">
              <h4>Email us</h4>
              <p style={{ lineHeight: '1.6' }}>
                Info.ibrandmark@gmail.com<br/>
                Ibrandmarkgroup@gmail.com<br/>
                Info@ibrandmark.com
              </p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-icon-wrapper"><Phone size={18} strokeWidth={1.5} /></div>
            <div className="info-card-text">
              <h4>Call us</h4>
              <p>+91 9988221729</p>
            </div>
          </div>
          <div className="info-card">
            <div className="info-card-icon-wrapper"><MapPin size={18} strokeWidth={1.5} /></div>
            <div className="info-card-text">
              <h4>Our location</h4>
              <p>Kalkat Bhawan, 2nd Floor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;