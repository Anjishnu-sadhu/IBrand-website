import { useState, useEffect } from 'react';
import { ArrowLeft, Save, Check, AlertCircle, Mail, Eye, EyeOff } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminPage = ({ onBack }) => {
  const [config, setConfig] = useState({ gmailUser: '', gmailAppPassword: '', emailTo: '' });
  const [status, setStatus] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/admin/config`)
      .then(res => res.json())
      .then(data => {
        setIsConfigured(data.isConfigured);
        setConfig({ gmailUser: data.gmailUser || '', gmailAppPassword: '', emailTo: data.emailTo || '' });
      })
      .catch(() => {});
  }, []);

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(`${API_URL}/api/admin/config`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save');
      }

      setStatus('success');
      setIsConfigured(true);
      setTimeout(() => setStatus(null), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="contact-page custom-contact-page">
      <div className="contact-watermark">Settings</div>
      <div className="container contact-container-custom">
        <button className="back-btn" onClick={onBack} style={{position: 'relative', zIndex: 10, marginBottom: '2rem'}}>
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="contact-main-grid">
          {/* Left Column */}
          <div className="contact-left-col">
            <h1 className="contact-heading">Email Settings</h1>
            <p className="contact-intro">
              Configure your Gmail to receive contact form submissions.
              <br/><br/>
              When someone submits the contact form, you'll receive an email with their details.
            </p>

            <div className="contact-features-list">
              <div style={{ padding: '1rem', background: 'rgba(144, 244, 136, 0.1)', borderRadius: '12px', marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.5rem' }}>Status:</p>
                <p style={{ fontSize: '1rem', color: isConfigured ? '#4ade80' : '#f87171', fontWeight: 600 }}>
                  {isConfigured ? '✓ Email configured' : '✗ Not configured'}
                </p>
              </div>

              <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.85rem', color: '#999', marginBottom: '0.5rem' }}>How to get App Password:</p>
                <ol style={{ fontSize: '0.85rem', color: '#ccc', paddingLeft: '1.2rem', lineHeight: 1.8 }}>
                  <li>Go to Google Account Security</li>
                  <li>Enable 2-Step Verification</li>
                  <li>Go to App Passwords</li>
                  <li>Select "Mail" → "Other"</li>
                  <li>Copy the 16-character password</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="contact-right-col">
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={20} style={{ color: 'var(--accent-green)' }} />
                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Gmail Configuration</span>
              </div>

              <div className="form-row">
                <input
                  type="email"
                  name="gmailUser"
                  placeholder="your-email@gmail.com"
                  className="form-input"
                  value={config.gmailUser}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="gmailAppPassword"
                  placeholder="App Password (xxxx-xxxx-xxxx-xxxx)"
                  className="form-input"
                  style={{ width: '100%', paddingRight: '3rem' }}
                  value={config.gmailAppPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#666',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <input
                type="email"
                name="emailTo"
                placeholder="Receive emails at (defaults to Gmail user)"
                className="form-input"
                style={{ width: '100%', marginBottom: '1.5rem' }}
                value={config.emailTo}
                onChange={handleChange}
              />

              {status === 'success' && (
                <div className="form-status success">
                  <Check size={16} /> Configuration saved successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  <AlertCircle size={16} /> Failed to save. Check your credentials.
                </div>
              )}

              <button
                type="submit"
                className="form-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Saving...' : <><Save size={16} /> Save Configuration</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;