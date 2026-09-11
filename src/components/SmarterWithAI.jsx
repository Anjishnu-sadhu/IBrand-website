import { Sparkles } from 'lucide-react';

const SmarterWithAI = () => {
  return (
    <section className="ai-section">
      <div className="container ai-section-wrapper">
        <div className="ai-card">
          <div className="ai-content">
            <h2 className="ai-title">Smarter with<br />Omnisend AI</h2>
            <p className="ai-desc">
              Let Omnisend AI help you work faster and smarter. Generate email content, personalize product recommendations, and even build segments with just a description.
            </p>
            <button className="btn btn-black">Explore all AI features</button>
          </div>
          <div className="ai-visual">
            <div className="ai-badge-container">
              <div className="ai-badge-layer l1"></div>
              <div className="ai-badge-layer l2"></div>
              <div className="ai-badge-layer l3"></div>
              <div className="ai-badge-main">
                <Sparkles className="sparkle-icon" size={40} fill="white" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmarterWithAI;
