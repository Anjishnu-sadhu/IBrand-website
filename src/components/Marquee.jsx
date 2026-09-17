import { ArrowUpRight } from 'lucide-react';

const Marquee = () => {
  const items = [
    "photo & videography",
    "visual effects",
    "digital marketing",
    "brand strategy",
    "content creation"
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="marquee-item">
              <span>{item}</span>
              <ArrowUpRight className="marquee-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
