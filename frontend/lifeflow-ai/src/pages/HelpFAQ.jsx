import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HelpFAQ.css';

const HelpFAQ = () => {
  const [openDonor, setOpenDonor] = useState(null);
  const [openHospital, setOpenHospital] = useState(null);

  const donorFAQs = [
    {
      question: "Who can donate blood?",
      answer: "To donate blood, you must be:\n• Between 18-65 years old\n• Weigh at least 50 kg (110 lbs)\n• Be in good general health\n• Have eaten at least 3-4 hours (12 weeks) before your last whole blood donation\n• Not have certain medical conditions or be taking specific medications\n\nIf you're unsure about your eligibility, consult with our AI Assistant or speak with a healthcare professional."
    },
    {
      question: "How often can I donate blood?",
      answer: "You can donate whole blood every 56 days (8 weeks). For platelet donations, you can donate up to 24 times per year with at least 7 days between donations."
    },
    {
      question: "How do emergency alerts work?",
      answer: "When a hospital submits an emergency request, our AI system immediately analyzes donor compatibility and proximity. You'll receive a notification if you're a match, with details about the hospital, distance, and urgency level."
    },
    {
      question: "What happens after I accept a request?",
      answer: "Once you accept a request, you'll receive the hospital's contact information and directions. The hospital will also be notified of your acceptance. You should proceed to the hospital within the timeframe specified in the alert."
    },
    {
      question: "How is my data protected?",
      answer: "We use industry-standard encryption and security measures to protect your personal and medical information. Your data is never shared without your explicit consent, and you can control your privacy settings at any time."
    }
  ];

  const hospitalFAQs = [
    {
      question: "How does LifeFlow AI select donors?",
      answer: "Our AI algorithm considers multiple factors including blood type compatibility, geographic proximity, donor availability, donation history, and response patterns to select the most suitable donors for each request."
    },
    {
      question: "How fast are alerts sent to donors?",
      answer: "Emergency alerts are sent within seconds of request submission. Our AI processes the request and identifies compatible donors in real-time, with initial notifications typically sent within 30-60 seconds."
    },
    {
      question: "What if no donors respond?",
      answer: "If initial alerts don't get sufficient responses, the system automatically expands the search radius and continues to notify additional compatible donors. You'll receive updates on the search progress in real-time."
    },
    {
      question: "How do I track request progress?",
      answer: "You can monitor all active requests in real-time through the Request Monitoring dashboard. This shows donor responses, acceptance rates, and estimated fulfillment times."
    },
    {
      question: "Can I cancel a request?",
      answer: "Yes, you can cancel a request at any time through the Request Monitoring page. Donors who have already accepted will be notified of the cancellation automatically."
    },
    {
      question: "What are the different urgency levels?",
      answer: "We have three urgency levels:\n• HIGH (Critical): Immediate need, life-threatening situation\n• MEDIUM: Urgent but not immediately critical\n• LOW: Routine or scheduled need\n\nHigh urgency requests are prioritized in our AI matching system."
    }
  ];

  return (
    <div className="help-page">
      {/* Header */}
      <header className="help-header">
        <Link to="/" className="dashboard-logo">
          <div className="logo-icon-dash">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span>LifeFlow AI</span>
        </Link>
        <Link to="/" className="home-icon-btn">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </Link>
      </header>

      <div className="help-container">
        <h1>Help & Support</h1>
        <p className="help-subtitle">Quick answers for donors and hospitals</p>

        {/* AI Assistant Banner */}
        <div className="ai-help-banner">
          <div className="banner-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <div className="banner-content">
            <h3>Still need help?</h3>
            <p>Ask our AI Assistant for instant answers to your questions</p>
          </div>
          <Link to="/chatbot" className="banner-btn">Check now</Link>
        </div>

        {/* For Donors Section */}
        <div className="faq-section">
          <div className="section-header-faq">
            <div className="section-icon donor">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h2>For Donors</h2>
          </div>

          <div className="faq-list">
            {donorFAQs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openDonor === index ? 'active' : ''}`}
                  onClick={() => setOpenDonor(openDonor === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`chevron ${openDonor === index ? 'rotated' : ''}`}
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </button>
                {openDonor === index && (
                  <div className="faq-answer">
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* For Hospitals Section */}
        <div className="faq-section">
          <div className="section-header-faq">
            <div className="section-icon hospital">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
              </svg>
            </div>
            <h2>For Hospitals</h2>
          </div>

          <div className="faq-list">
            {hospitalFAQs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${openHospital === index ? 'active' : ''}`}
                  onClick={() => setOpenHospital(openHospital === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`chevron ${openHospital === index ? 'rotated' : ''}`}
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </button>
                {openHospital === index && (
                  <div className="faq-answer">
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact Information */}
        <div className="emergency-contact-section">
          <div className="contact-header">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            <h2>Emergency Contact Information</h2>
          </div>

          <div className="contact-cards">
            <div className="contact-card red">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Emergency Hotline</h4>
                <p className="contact-number">1-800-LIFEFLOW</p>
                <p className="contact-time">Available 24/7</p>
              </div>
            </div>

            <div className="contact-card blue">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Hospital Support</h4>
                <p className="contact-number">hospitals@lifeflowai.com</p>
                <p className="contact-time">Response within 24 hours</p>
              </div>
            </div>

            <div className="contact-card green">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="contact-details">
                <h4>Donor Support</h4>
                <p className="contact-number">donors@lifeflowai.com</p>
                <p className="contact-time">Mon-Fri 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Buttons */}
        <div className="resource-buttons">
          <Link to="/donor-dashboard" className="resource-btn donor">
            <div className="resource-icon">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div className="resource-content">
              <h3>Donor Resources</h3>
              <p>Access your dashboard, donation history, and nearby information</p>
            </div>
          </Link>

          <Link to="/hospital-dashboard" className="resource-btn hospital">
            <div className="resource-icon">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
              </svg>
            </div>
            <div className="resource-content">
              <h3>Hospital Resources</h3>
              <p>Manage requests, view analytics, and access blood coordination</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Chatbot */}
      <Link to="/chatbot" className="chatbot-float">
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      </Link>
    </div>
  );
};

export default HelpFAQ;