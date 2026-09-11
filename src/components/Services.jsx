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
  Mic
} from 'lucide-react';

const servicesData = [
  { icon: Palette, title: 'Graphic Designing' },
  { icon: LayoutTemplate, title: 'Website Designing' },
  { icon: Search, title: 'SEO' },
  { icon: PenLine, title: 'Content Writing' },
  { icon: Megaphone, title: 'Digital Marketing' },
  { icon: MessageSquare, title: 'Text Messaging' },
  { icon: MessageCircle, title: 'Rcs Messaging' },
  { icon: Send, title: 'Whatsapp Marketing' },
  { icon: PhoneCall, title: 'Ivr Solution' },
  { icon: Mic, title: 'PR' },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container services-container">
        <h2 className="services-title">creative agency for brand growth solutions</h2>
        <h3 className="services-subtitle">tailored creative solutions to strengthen and scale your brand vision</h3>
        <p className="services-desc">
          as a creative agency, we help brands grow through strategy, design, content, and marketing. our team brings the clarity and creativity needed to make your brand stand out with purpose.
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <span className="service-name">{service.title}</span>
            </div>
          ))}

          {/* Social Card */}
          <div className="service-card social-card">
            <p>Learn more about Blacklisted<br/>and stay updated on our activities:</p>
            <div className="social-icons">
              <div className="social-icon be-icon">Bē</div>
              <div className="social-icon in-icon">in</div>
              <div className="social-icon ig-icon">ig</div>
              <div className="social-icon fb-icon">f</div>
              <div className="social-icon yt-icon">yt</div>
              <div className="social-icon x-icon">X</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
