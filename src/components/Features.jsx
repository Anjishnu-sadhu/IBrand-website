import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const tabsData = [
  {
    id: 'Meta Ads',
    label: 'Meta Ads',
    title: 'Reach the right audience\\nwith powerfull meta Ads',
    features: ['Targeted Audience Reach', 'Lead Generation Campaigns', 'Retargeting & Remarketing', 'Performance Tracking & Reports', 'Campaign Optimization'],
    testimonial: "Salomon Japan's email campaigns average 45% open rate, 1.4% click-through, and ~¥1.9M JPY in revenue per send",
    brand: 'SALOMON'
  },
  {
    id: 'Text Messages',
    label: 'Text Messages',
    title: 'Create text messages that\\nconnect with your audience',
    features: ['Personalized Text Messages', 'Instant Message Delivery', 'Targeted Audience Segmentation', 'Smart Links & Call-to-Actions', 'Message Delivery Reports'],
    testimonial: 'Integrating with our tech stack took minutes, not days. It just works seamlessly out of the box.',
    brand: 'ALLBIRDS'
  },
  {
    id: 'RCS',
    label: 'RCS',
    title: 'Create RCS campaigns\\nthat engage your customers',
    features: ['Rich Media Messages', 'Interactive Buttons & Carousels', 'Product & Service Showcases', 'Personalized Customer Journeys', 'Campaign Analytics & Reports'],
    testimonial: 'Our automated flows now account for over 30% of our total monthly revenue.',
    brand: 'STANLEY'
  },
  {
    id: 'WhatsApp',
    label: 'WhatsApp Marketing',
    title: 'Grow Your Business with\\nWhatsApp Marketing',
    features: ['Bulk WhatsApp Campaigns', 'Personalized Customer Messages', 'Automated WhatsApp Responses', 'Product & Offer Promotions', 'Campaign Reports & Analytics'],
    testimonial: 'Hyper-segmentation helped us increase our campaign conversion rates by 2.5x in just two months.',
    brand: "ARC'TERYX"
  },
  {
    id: 'Designing',
    label: 'Designing',
    title: 'Designing that brings\\nyour brand to life',
    features: ['Creative & Custom Designs', 'Social Media Post Design', 'Professional Branding Materials', 'Engaging Banner & Ad Designs'],
    testimonial: 'The gamified popups alone doubled our daily subscriber growth rate within a week.',
    brand: 'FABER-CASTELL'
  }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0]);

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <div className="recommended-badge">
            <div className="avatars">
              <div className="avatar a1"></div>
              <div className="avatar a2"></div>
              <div className="avatar a3"></div>
              <div className="avatar a4"></div>
            </div>
            <div className="recommended-text">
              Recommended by more<br />than 100+ e-commerce experts
            </div>
          </div>
          <h2 className="section-title">Feature-packed and intuitive</h2>

          <div className="feature-tabs">
            {tabsData.map(tab => (
              <button
                key={tab.id}
                className={`tab ${activeTab.id === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="features-content">
          <div className="features-text-col">
            <h3 className="features-subtitle" dangerouslySetInnerHTML={{ __html: activeTab.title.replace('\\n', '<br/>') }}></h3>

            <ul className="features-list">
              {activeTab.features.map((feature, idx) => (
                <li key={idx}><CheckCircle2 size={20} className="check-icon" /> {feature}</li>
              ))}
            </ul>

            <div className="testimonial-card">
              <div className="salomon-logo-small">{activeTab.brand}</div>
              <p className="testimonial-text">
                {activeTab.testimonial}
              </p>
            </div>
          </div>

          <div className="features-image-col">
            <img src="/editor-ui.jpg" alt="Email Editor UI" className="editor-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
