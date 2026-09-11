import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const tabsData = [
  {
    id: 'email',
    label: 'Email campaigns',
    title: 'Create email campaigns\\nthat match your brand',
    features: ['Premade Email Templates', 'Drag & Drop Content Editor', 'Dynamic Discount Codes', 'Product recommender', 'Reports'],
    testimonial: "Salomon Japan's email campaigns average 45% open rate, 1.4% click-through, and ~¥1.9M JPY in revenue per send",
    brand: 'SALOMON'
  },
  {
    id: 'integrations',
    label: 'Integrations',
    title: 'Seamlessly connect with\\nyour favorite tools',
    features: ['One-click Shopify Sync', 'WooCommerce Support', 'Zapier Integration', 'Custom API Access', 'Third-party plugins'],
    testimonial: 'Integrating with our tech stack took minutes, not days. It just works seamlessly out of the box.',
    brand: 'ALLBIRDS'
  },
  {
    id: 'automations',
    label: 'Automations',
    title: 'Set up workflows\\nthat drive sales 24/7',
    features: ['Welcome Series', 'Abandoned Cart Recovery', 'Post-purchase Follow-ups', 'Custom Triggers', 'Split Testing'],
    testimonial: 'Our automated flows now account for over 30% of our total monthly revenue.',
    brand: 'STANLEY'
  },
  {
    id: 'segmentation',
    label: 'Segmentation',
    title: 'Target the right people\\nat the right time',
    features: ['Behavioral Segmentation', 'Purchase History Filters', 'Profile Data Targeting', 'Dynamic Segments', 'Cross-channel Reach'],
    testimonial: 'Hyper-segmentation helped us increase our campaign conversion rates by 2.5x in just two months.',
    brand: "ARC'TERYX"
  },
  {
    id: 'forms',
    label: 'Forms & Popups',
    title: 'Grow your list with\\nhigh-converting forms',
    features: ['Exit-intent Popups', 'Embedded Forms', 'Wheel of Fortune', 'Mobile-friendly Designs', 'A/B Testing Forms'],
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
            Recommended by more<br/>than 100+ e-commerce experts
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
