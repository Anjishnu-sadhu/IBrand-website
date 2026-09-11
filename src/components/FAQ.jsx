import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  { question: "How can email marketing automation help my business grow?", answer: "Email marketing automation helps you reach your audience at the right time with personalized messages, freeing up your time to focus on other aspects of your business." },
  { question: "How is Omnisend different from other email marketing tools?", answer: "Omnisend offers an easy-to-use interface, pre-built workflows for ecommerce, and seamless integration of email and SMS channels." },
  { question: "How can I use Omnisend to recover abandoned carts and increase sales?", answer: "You can set up automated abandoned cart workflows that trigger personalized emails or SMS messages to remind customers of what they left behind." },
  { question: "Can Omnisend help me improve my email open rates and click-through rates?", answer: "Yes, by utilizing segmentation, personalization, and A/B testing features, you can significantly improve engagement metrics." },
  { question: "How easy is it to set up automated email campaigns with Omnisend?", answer: "It is very easy, thanks to our intuitive drag-and-drop builder and library of pre-built automation templates tailored for ecommerce." },
  { question: "Does Omnisend offer SMS marketing along with email marketing?", answer: "Yes, Omnisend seamlessly combines email and SMS marketing into a single platform for cohesive omnichannel campaigns." },
  { question: "What types of businesses are best suited for Omnisend's features?", answer: "Omnisend is specifically built for ecommerce businesses of all sizes looking to drive sales and build customer relationships." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container faq-container">
        <h2 className="faq-title">FAQ</h2>
        
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index} onClick={() => toggleOpen(index)}>
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <button className="faq-toggle-btn">
                  {openIndex === index ? <Minus size={16} color="white" /> : <Plus size={16} color="white" />}
                </button>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
