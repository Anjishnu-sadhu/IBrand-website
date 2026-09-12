import { 
  Palette, 
  LayoutTemplate, 
  Search, 
  PenLine, 
  Megaphone, 
  MessageSquare, 
  MessageCircle, 
  Send, 
  PhoneCall, 
  Mic,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

const servicesData = [
  { icon: Palette, title: 'Graphic Designing', description: 'create a clear and lasting visual identity' },
  { icon: LayoutTemplate, title: 'Website Designing', description: 'build responsive and modern websites' },
  { icon: Search, title: 'SEO', description: 'rank higher and increase visibility' },
  { icon: PenLine, title: 'Content Writing', description: 'craft compelling and engaging stories' },
  { icon: Megaphone, title: 'Digital Marketing', description: 'reach and convert your target audience' },
  { icon: MessageSquare, title: 'Text Messaging', description: 'connect directly with sms campaigns' },
  { icon: MessageCircle, title: 'RCS Messaging', description: 'rich communication for better engagement' },
  { icon: Send, title: 'WhatsApp Marketing', description: 'Leverage the most popular chat app' },
  { icon: PhoneCall, title: 'IVR Solution', description: 'Automated and interactive voice responses' },
  { icon: Mic, title: 'PR', description: 'Press release online article publishing on 200+ news websites' },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container services-container">
        <h2 className="services-title">Creative Agency For Brand Growth Solutions</h2>
        <h3 className="services-subtitle">Tailored creative solutions to strengthen and scale your brand vision</h3>
        <p className="services-desc">
          As a creative agency, we help brands grow through strategy, design, content, and marketing. Our team brings the clarity and creativity needed to make your brand stand out with purpose.
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <div className="service-content">
                <span className="service-name">{service.title}</span>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}

          {/* Social Card */}
          <div className="service-card social-card">
            <p>Learn more about iBrandMark<br/>and stay updated on our activities:</p>
            <div className="social-icons">
              <div className="social-icon ig-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" style={{ display: 'block', zIndex: 10 }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.181a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </div>
              <div className="social-icon fb-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" style={{ display: 'block', zIndex: 10 }}>
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </div>
              <div className="social-icon yt-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" style={{ display: 'block', zIndex: 10 }}>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="social-icon x-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" style={{ display: 'block', zIndex: 10 }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
