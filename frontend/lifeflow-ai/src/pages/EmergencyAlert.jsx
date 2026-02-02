import React from 'react';
import { Link } from 'react-router-dom';
import './EmergencyAlert.css';

const EmergencyAlert = () => {
  return (
    <div className="emergency-page">
      {/* Header */}
      <header className="emergency-header">
        <Link to="/" className="dashboard-logo">
          <div className="logo-icon-dash">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span>LifeFlow AI</span>
        </Link>
        <Link to="/donor-dashboard" className="back-link">Back to Dashboard</Link>
      </header>

      <div className="emergency-container">
        <div className="emergency-grid">
          {/* Left Side - Emergency Request Details */}
          <div className="request-side">
            {/* Urgent Banner */}
            <div className="urgent-banner">
              <div className="urgent-content">
                <h1>URGENT BLOOD REQUEST</h1>
                <p>Your immediate response needed</p>
              </div>
              <div className="timer-badge">
                <div className="timer-value">10:00</div>
                <div className="timer-label">Time to Respond</div>
              </div>
            </div>

            {/* Hospital Info */}
            <div className="hospital-info-card">
              <div className="hospital-name">
                <h2>City General Hospital</h2>
                <p>Emergency Department - Open 24/7</p>
              </div>
              <span className="priority-badge high">HIGH PRIORITY</span>
            </div>

            {/* Quick Info Grid */}
            <div className="quick-info-grid">
              <div className="info-box">
                <div className="info-icon blood">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l-6 9c0 3.31 2.69 6 6 6s6-2.69 6-6l-6-9z"/>
                  </svg>
                </div>
                <div className="info-label">Blood Type Needed</div>
                <div className="info-value">O+</div>
              </div>

              <div className="info-box">
                <div className="info-icon location">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="info-label">Distance</div>
                <div className="info-value">2.3 km</div>
                <div className="info-sublabel">~7 min drive</div>
              </div>

              <div className="info-box">
                <div className="info-icon clock">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div className="info-label">Request Time</div>
                <div className="info-value">5 min ago</div>
                <div className="info-sublabel">Jan 11, 2025 - 2:45 PM</div>
              </div>
            </div>

            {/* Request Details Section */}
            <div className="details-section">
              <h3>Request Details</h3>

              <div className="urgency-card">
                <div className="urgency-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l-6 9c0 3.31 2.69 6 6 6s6-2.69 6-6l-6-9z"/>
                  </svg>
                </div>
                <div>
                  <h4>Urgency Level: HIGH</h4>
                  <p>Critical patient requires immediate blood transfusion. Multiple units needed for emergency surgery.</p>
                </div>
              </div>

              <div className="stats-row">
                <div className="stat-item">
                  <div className="stat-label">Units Required</div>
                  <div className="stat-value">2 Units</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Donors Contacted</div>
                  <div className="stat-value">18 donors nearby</div>
                </div>
              </div>

              {/* AI Match Score */}
              <div className="ai-match-card">
                <div className="ai-badge">AI</div>
                <div className="ai-content">
                  <h4>AI Match Score</h4>
                  <p>You are a highly-likely match</p>
                  <div className="match-stats">
                    <div className="match-stat">
                      <div className="percentage">98%</div>
                      <div className="label">Blood Type Match</div>
                    </div>
                    <div className="match-stat">
                      <div className="percentage">95%</div>
                      <div className="label">Proximity Score</div>
                    </div>
                    <div className="match-stat">
                      <div className="status">Eligible</div>
                      <div className="label">Donation Status</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hospital Contact */}
              <div className="contact-card">
                <h4>Hospital Contact Information</h4>
                <div className="contact-details">
                  <p><strong>Emergency Line</strong><br/>+1 (555) 123-4567</p>
                  <p><strong>Blood Bank</strong><br/>123 Medical Center Drive, City, State 12345</p>
                  <p><a href="#">Get Directions</a></p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="btn-accept-request">Accept Request</button>
                <button className="btn-decline-request">Decline</button>
              </div>

              <p className="disclaimer">By accepting, you agree to donate blood at the specified hospital within 24 hours</p>
            </div>
          </div>

         {/* Right Side - Real-Time Monitoring */}
          <div className="monitoring-side">
            <div className="monitoring-card"> 
              <h2>Emergency Request #1247</h2>
              <p className="monitoring-subtitle">Real-Time Emergency Alert Status Tracking</p>

              {/* Status Overview - 4 boxes */}
              <div className="status-overview">
                <div className="status-item">
                  <div className="status-icon blood-type">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l-6 9c0 3.31 2.69 6 6 6s6-2.69 6-6l-6-9z"/>
                    </svg>
                  </div>
                  <div className="status-label">Blood Type</div>
                  <div className="status-value">O+</div>
                </div>

                <div className="status-item">
                  <div className="status-icon units">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5c0-1.93 1.57-3.5 3.5-3.5zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                    </svg>
                  </div>
                  <div className="status-label">Required</div>
                  <div className="status-value">2 Units</div>
                </div>

                <div className="status-item">
                  <div className="status-icon time">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <div className="status-label">Time Elapsed</div>
                  <div className="status-value">8 min</div>
                </div>

                <div className="status-item">
                  <div className="status-icon donors">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  </div>
                  <div className="status-label">Donors Contacted</div>
                  <div className="status-value">18</div>
                </div>
              </div>

              {/* Response Stats - 3 boxes */}
              <div className="response-stats">
                <div className="response-box accepted">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <div className="response-count">4</div>
                  <div className="response-label">Accepted</div>
                </div>

                <div className="response-box pending">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <div className="response-count">6</div>
                  <div className="response-label">Pending Response</div>
                </div>

                <div className="response-box declined">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                  <div className="response-count">4</div>
                  <div className="response-label">Declined</div>
                </div>
              </div>

              {/* Search Radius Card */}
              <div className="search-radius-card">
                <h3>Search Radius</h3>
                <p>Currently searching within 10 km radius</p>
                <button className="expand-search-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                  Expand Search to 15km
                </button>
              </div>

              {/* Accepted Donors (4) */}
              <div className="donors-section">
                <h3>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Accepted Donors (4)
                </h3>
                
                {[
                  { name: 'John Doe', type: 'O+ Blood Type', distance: '2.5 km', time: '2 hrs ago' },
                  { name: 'Sarah Johnson', type: 'O+ Blood Type', distance: '3.1 km', time: '1 min ago' },
                  { name: 'Michael Chen', type: 'O+ Blood Type', distance: '4.3 km', time: '7 min ago' },
                  { name: 'Emily Davis', type: 'O+ Blood Type', distance: '2.8 km', time: '6 min ago' }
                ].map((donor, index) => (
                  <div key={index} className="donor-card accepted-donor">
                    <div className="donor-avatar">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="donor-info">
                      <h4>{donor.name}</h4>
                      <p>{donor.type}</p>
                      <div className="donor-meta">
                        <span>📍 {donor.distance}</span>
                        <span>🕐 Accepted {donor.time}</span>
                      </div>
                    </div>
                    <span className="donor-status confirmed">CONFIRMED</span>
                    <button className="contact-donor-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                      </svg>
                      Contact Donor
                    </button>
                  </div>
                ))}
              </div>

              {/* Pending Response (6) */}
              <div className="donors-section">
                <h3>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  </svg>
                  Pending Response (6)
                </h3>
                
                {[
                  { name: 'Robert Wilson', type: 'O+ Blood Type', distance: '5.2 km', time: '9 min ago' },
                  { name: 'Lisa Anderson', type: 'O+ Blood Type', distance: '2.6 km', time: '1 min ago' },
                  { name: 'James Taylor', type: 'O+ Blood Type', distance: '6.1 km', time: '5 min ago' }
                ].map((donor, index) => (
                  <div key={index} className="donor-card pending-donor">
                    <div className="donor-avatar pending">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="donor-info">
                      <h4>{donor.name}</h4>
                      <p>{donor.type}</p>
                      <div className="donor-meta">
                        <span>📍 {donor.distance}</span>
                        <span>🕐 Notified {donor.time}</span>
                      </div>
                    </div>
                    <span className="donor-status pending">PENDING</span>
                  </div>
                ))}
              </div>

              {/* Declined (4) */}
              <div className="donors-section">
                <h3>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                  Declined (4)
                </h3>
                
                {[
                  { name: 'Daniel Martinez', type: 'O+ Blood Type', distance: '8.4 km', time: '8 min ago' },
                  { name: 'Ashley White', type: 'O+ Blood Type', distance: '6.0 km', time: '6 min ago' }
                ].map((donor, index) => (
                  <div key={index} className="donor-card declined-donor">
                    <div className="donor-avatar declined">
                      <svg viewBox="0 0 24 24" fill="white">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div className="donor-info">
                      <h4>{donor.name}</h4>
                      <p>{donor.type}</p>
                      <div className="donor-meta">
                        <span>📍 {donor.distance}</span>
                        <span>🕐 Declined {donor.time}</span>
                      </div>
                    </div>
                    <span className="donor-status declined-status">DECLINED</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

export default EmergencyAlert;