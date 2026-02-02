import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span>LifeFlow AI</span>
          </div>
          
          <div className="nav-links">
            <a href="#how-it-works">How it works</a>
            <a href="#footer">Dashboard</a>
            <Link to="/help">Help</Link>
            <Link to="/login-donor" className="nav-login">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="ai-badge">AI-Powered Blood Coordination</div>
          
          <h1 className="hero-title">
            Save Lives Through<br />
            <span className="highlight">Smart Blood Coordination</span>
          </h1>
          
          <p className="hero-subtitle">
            Connect hospitals with the most suitable nearby donors during emergencies<br />
            using AI-powered matching, real-time availability, and intelligent prioritization.
          </p>
          
          <div className="hero-buttons">
            <Link to="/signup-donor" className="btn-primary">Register as Donor</Link>
            <Link to="/login-hospital" className="btn-hospital">Hospital Login</Link>
          </div>
          
          {/* Stats Cards */}
          <div className="stats-cards">
            <div className="stat-card">
              <h3>15,000+</h3>
              <p>Active Donors</p>
            </div>
            <div className="stat-card">
              <h3>350+</h3>
              <p>Partner Hospitals</p>
            </div>
            <div className="stat-card">
              <h3>&lt; 12 min</h3>
              <p>Avg Response Time</p>
            </div>
            <div className="stat-card">
              <h3>8,500+</h3>
              <p>Lives Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* How LifeFlow AI Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-container">
          <h2>How LifeFlow AI Works</h2>
          <p className="section-subtitle">Three simple steps to save a life</p>
          
          <div className="features-grid">
            <div className="feature-card emergency">
              <h3>Emergency Request</h3>
              <p>
                Hospitals submit urgent<br />
                emergency blood requests.<br />
                Our AI instantly analyzes<br />
                requirements and donor<br />
                location.
              </p>
            </div>
            
            <div className="feature-card prioritization">
              <h3>AI Prioritization</h3>
              <p>
                Smart algorithms identify<br />
                and alerts suitable donors<br />
                based on proximity,<br />
                availability, and medical<br />
                donation history.
              </p>
            </div>
            
            <div className="feature-card connection">
              <h3>Instant Connection</h3>
              <p>
                Real-time matching alerts,<br />
                donor requests, and coordinate<br />
                life-saving donations within<br />
                minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why LifeFlow AI is Different */}
      <section className="why-different">
        <div className="section-container">
          <h2>Why LifeFlow AI is Different</h2>
          <p className="section-subtitle">AI-powered features that save lives faster</p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>AI-Powered Matching</h4>
              <p>
                Intelligent algorithms<br />
                find the best donor<br />
                instantly based on<br />
                multiple factors
              </p>
            </div>
            
            <div className="benefit-card">
              <h4>Lightning Fast</h4>
              <p>
                Donor alerts sent in<br />
                less under 12 minutes<br />
                on average
              </p>
            </div>
            
            <div className="benefit-card">
              <h4>Location-Based</h4>
              <p>
                Prioritizes donors<br />
                based on proximity<br />
                to emergency<br />
                locations
              </p>
            </div>
            
            <div className="benefit-card">
              <h4>100% Reliable</h4>
              <p>
                24/7 emergency<br />
                support with verified<br />
                donor networks
              </p>
            </div>
          </div>
        </div>
        
        {/* Chatbot Float */}
        <Link to="/chatbot" className="chatbot-float">
          <div className="chatbot-icon">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
        </Link>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Save Lives?</h2>
          <p>Get started in just two minutes and make a meaningful difference</p>
          
          <div className="cta-buttons">
            <Link to="/signup-donor" className="btn-cta-primary">Become a Donor Today</Link>
            <Link to="/signup-hospital" className="btn-cta-secondary">Register Your Hospital</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id='footer'>
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span>LifeFlow AI</span>
            </div>
            <p>Saving lives through intelligent blood coordination.</p>
          </div>
          
          <div className="footer-section">
            <h4>For Donors</h4>
            <Link to="/signup-donor">Register</Link>
            <Link to="/donor-dashboard">Dashboard</Link>
            <a href="help">Donation Guide</a>
          </div>
          
          <div className="footer-section">
            <h4>For Hospitals</h4>
            <Link to="/login-hospital">Login</Link>
            <Link to="/hospital-dashboard">Dashboard</Link>
            <a href="help">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;